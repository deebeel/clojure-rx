(ns stock-market-monitor.core
  (:use seesaw.core)
  (:require [rx.lang.clojure.core :as rx])
  (:import (java.util.concurrent TimeUnit)
           (rx Observable)))

(defn share-price [company-code]
  (Thread/sleep 200)
  (rand-int 1000))

(defn make-price-obs [company-code]
  (rx/return (share-price company-code)))

(defn avg [nums]
  (float (/ (reduce + nums)
            (count nums))))

(native!)
(def running-avg-label (label "Running average: -"))
(def main-frame (frame :title "Stock price monitor"
                       :width 200
                       :height 100
                       :on-close :exit))
(def price-label (label "Price:-"))
(config! main-frame :content (border-panel
                              :north price-label
                              :center running-avg-label
                              :border 3))





(defn -main [& args]
  (show! main-frame)
  (let [price-obs (-> (rx/flatmap (fn [_] (make-price-obs "XYZ"))
                                  (Observable/interval 500
                                                       TimeUnit/MILLISECONDS))
                      (.publish))
        sliding-buffer-obs (.buffer price-obs 5 1)]
    (rx/subscribe price-obs
                  (fn [price] (text! price-label (str "Price: " price))))
    (rx/subscribe sliding-buffer-obs (fn [buffer]
                                       (text! running-avg-label (str "Running avg: " (avg buffer)))))
    (.connect price-obs)))

