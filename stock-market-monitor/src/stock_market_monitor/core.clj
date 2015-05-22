(ns stock-market-monitor.core
  (:use seesaw.core)
  (:import (java.util.concurrent ScheduledThreadPoolExecutor TimeUnit)))

(def pool (ScheduledThreadPoolExecutor. 1))

(defn run-every [pool mills f]
  (.scheduleWithFixedDelay pool f 0 mills TimeUnit/MILLISECONDS))

(defn shutdown [pool]
  (println "shutting down scheduler...")
  (.shutdown pool))

(defn share-price [company-code]
  (Thread/sleep 200)
  (rand-int 1000))




(native!)

(def main-frame (frame :title "Stock price monitor"
                       :width 200
                       :height 100
                       :on-close :exit))

(def price-label (label "Price:-"))

(config! main-frame :content price-label)


(defn -main [& args]
  (show! main-frame)
  (.addShutdownHook (Runtime/getRuntime)
                    (Thread. #(shutdown pool)))
  (run-every pool 500
             #(->> (str "Price: " (share-price "XYZ"))
                   (text! price-label)
                   invoke-now)))
3
