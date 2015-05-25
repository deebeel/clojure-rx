(ns respondent.core
  (:refer-clojure :exclude [filter map deliver take])
  #+clj
  (:import [clojure.lang IDeref])

  #+clj
  (:require [clojure.core.async :as async
             :refer [go go-loop chan <! >! timeout map> filter> close! mult tap untap]])

  #+cljs
  (:require [cljs.core.async :as async
             :refer [chan <! >! timeout map> filter> close! mult tap untap]])

  #+cljs
  (:require-macros [respondent.core :refer [behavior]]
                   [cljs.core.async.macros :refer [go go-loop]]))



(defprotocol IBehavior
  (sample [b interval]))
(defprotocol IEventStream
  (map [s f])
  (take [s n])
  (filter [s pred])
  (flatmap [s f])
  (deliver [s val])
  (completed? [s]))

(defprotocol IObservable
  (subscribe [obs f]))

(defprotocol IToken
  (dispose [token]))
(deftype Token [ch]
  IToken
  (dispose [_]
    (close! ch)))

(declare event-stream)

(deftype EventStream [channel multiple completed]
  IEventStream
  (map [_ f]
    (let [out (map> f (chan))]
      (tap multiple out)
      (event-stream out)))
  (flatmap [_ f]
    (let [es (event-stream)
          out (chan)]
      (tap multiple out)
      (go-loop []
        (when-let [a (<! out)]
          (let [mb (f a)]
            (subscribe mb (fn [b]
                            (deliver es b)))
            (recur))))
      es))
  (deliver [_ value]
    (if (= value ::complete)
      (do (reset! completed true)
          (go (>! channel value)
              (close! channel)))
      (go (>! channel value))))

  (completed? [_] @completed)
  (take [this n]
    (let [es (event-stream)]
      (go-loop [c n]
        (when-let [val (<! channel)]          
          (when (> c 0)
            (deliver es val)
            (recur (dec c)))))
      es))

  IObservable
  (subscribe [this f]
    (let [out (chan)]
      (tap multiple out)
      (go-loop []
        (let [value (<! out)]
          (when (and value (not= value ::complete))
            (f value)
            (recur))))
      (Token. out))))



(defn event-stream
  ([]
   (event-stream (chan)))
  ([ch]
   (let [multiple (mult ch)
         completed (atom false)]
     (EventStream. ch multiple completed))))

(defn take-fn [s n]
  (let [c (atom n)
        es (event-stream)
        token (subscribe s #(when (> @c 0)
                              (deliver es %)
                              (swap! c dec)
                              ))]    
    (add-watch c :watcher (fn [key atom os ns]
                              (if (= ns 0)
                                (dispose token))))
    es))



(defn from-interval
  ([msecs]
   (from-interval msecs 0 inc))
  ([msecs seed succ]
   (let [es (event-stream)]
     (go-loop [timeout-ch (timeout msecs)
               value seed]
       (when-not (completed? es)
         (<! timeout-ch)
         (deliver es value)
         (recur (timeout msecs) (succ value))))
     es)))


(deftype Behavior [f]
  IBehavior
  (sample [_ interval]
    (from-interval interval (f) (fn [& args] (f))))
  IDeref
  (#+clj deref #+cljs -deref [_]
    (f)))

(defmacro behavior [& body]
 `(Behavior. #(do ~@body)))


(def	es1	(from-interval	500))
(def	take-es	(take-fn es1 5))
(def c (subscribe	take-es	#(prn	"Take values: "	%)))
(dispose c)
(completed? take-es)
