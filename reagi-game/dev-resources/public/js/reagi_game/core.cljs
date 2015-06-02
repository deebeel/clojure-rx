(ns reagi-game.core
  (:require [monet.canvas :as canvas]
            [reagi-game.entities :as entities :refer [move-forward! move-backward! rotate-left!	rotate-right! fire!]]))

(def canvas-dom (.getElementById js/document "canvas"))

(def monet-canvas (canvas/init canvas-dom "2d"))
(def ship (entities/shape-data (/ (.-width (:canvas monet-canvas)) 2)
                               (/ (.-height (:canvas monet-canvas)) 2)
                               0))
(def ship-entity (entities/ship-entity ship))

(canvas/add-entity monet-canvas	:ship-entity ship-entity)
(canvas/draw-loop monet-canvas)





