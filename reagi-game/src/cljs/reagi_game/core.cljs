(ns reagi-game.core
  (:require [monet.canvas :as canvas]
            [reagi.core :as r]
            [clojure.set :as set]
            [reagi-game.entities :as entities :refer [move-forward! move-backward! rotate-left!	rotate-right! fire!]]))

;;ASCII codes
(def UP 38)
(def RIGHT 39)
(def DOWN 40)
(def LEFT 37)
(def FIRE 32)
(def PAUSE 80)
(def canvas-dom (.getElementById js/document "canvas"))

(def monet-canvas (canvas/init canvas-dom "2d"))
(def ship (entities/shape-data (/ (.-width (:canvas monet-canvas)) 2)
                               (/ (.-height (:canvas monet-canvas)) 2)
                               0))
(def ship-entity (entities/ship-entity ship))

(canvas/add-entity monet-canvas	:ship-entity ship-entity)
(canvas/draw-loop monet-canvas)


(defn keydown-stream []
  (let [out (r/events)]
    (set! (.-onkeydown js/document)
          #(r/deliver out [::down (.-keyCode %)]))
    out))


(defn keyup-stream []
  (let [out (r/events)]
   (set! (.-onkeyup js/document)
         #(r/deliver out [::up (.-keyCode %)]))
   out))

(def active-keys-stream
  (->> (r/merge (keydown-stream) (keyup-stream))
       (r/reduce (fn [acc [event-type key-code]]
                   (condp = event-type
                     ::down (conj acc key-code)
                     ::up (conj acc key-code)
                     acc))
                 #{})
       (r/sample 25)))


