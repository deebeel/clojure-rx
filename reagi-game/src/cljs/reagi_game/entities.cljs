(ns reagi-game.entities
  (:require [monet.canvas :as canvas]
            [monet.geometry :as geo]))



(defn- shape-axis [shape axis]
  (-> shape
      :pos
      deref
      axis))

(defn shape-x [shape]
  (shape-axis shape :x ))

(defn shape-y [shape]
  (shape-axis shape :y ))


(defn shape-angle [shape]
  @(:angle shape))

(defn shape-data [x y angle]
  {:pos (atom {:x x :y y})
     :angle (atom angle)})


(defn update-shape [shape value]
  (-> value
        (assoc :x (shape-x shape))
        (assoc :y (shape-y shape))
        (assoc :angle (shape-angle shape))))

(defn  ship-entity [ship]
  (canvas/entity {:x (shape-x ship)
                  :y (shape-y ship)
                  :angle (shape-angle ship)}
                 (fn [value] (update-shape ship value))
                 (fn [ctx val]
                   (-> ctx
                       canvas/save
                       (canvas/translate (:x val) (:y val))
                       (canvas/rotate (:angle val))
                       (canvas/begin-path)
                       (canvas/move-to 50 0)
                       (canvas/line-to 0 -15)
                       (canvas/line-to 0 15)
                       (canvas/fill)
                       canvas/restore))))

(declare move-forward!)



(defn make-bullet-entity [monet-canvas key shape]
  (canvas/entity {:x (shape-x shape)
                  :y (shape-y shape)
                  :angle (shape-angle shape)}
                 (fn [value]
                   (when (not
                          (geo/contained?
                           {:x 0 :y 0
                            :w (.-width (:canvas monet-canvas))
                            :h (.-height (:canvas monet-canvas))}
                           {:x (shape-x shape)
                            :y (shape-y shape)
                            :r 5}))
                     (canvas/remove-entity monet-canvas key))
                   (move-forward! shape)
                   (update-shape shape value))
                 (fn [ctx val]
                   (-> ctx
                       canvas/save
                       (canvas/translate (:x val) (:y val))
                       (canvas/rotate (:angle val))
                       (canvas/fill-style "red")
                       (canvas/circle {:x 10 :y 0 :r 5})
                        canvas/restore))))
;; (defn make-bullet-entity [monet-canvas key shape]
;;   (canvas/entity {:x (shape-x shape)	
;;                   :y (shape-y shape)	
;;                   :angle (shape-angle shape)}
;;                  (fn [value]
;;                    (when (not	
;;                           (geo/contained?	
;;                            {:x	0 :y 0
;;                             :w	(.-width (:canvas monet-canvas))
;;                             :h	(.-height (:canvas monet-canvas))}
;;                            {:x	(shape-x shape)	
;;                             :y	(shape-y shape)	
;;                             :r	5}))															(canvas/remove-entity monet-canvas key))
;;                    (move-forward! shape)
;;                    (->	value
;;                         (assoc :x (shape-x shape))
;;                         (assoc :y (shape-y shape))
;;                         (assoc :angle (shape-angle shape))))
;;                  (fn [ctx val]
;;                    (->	ctx
;;                         canvas/save
;;                         (canvas/translate (:x val) (:y val))
;;                         (canvas/rotate	(:angle	val))
;;                         (canvas/fill-style "red")
;;                         (canvas/circle	{:x 10 :y 0 :r 5})
;;                         canvas/restore))))

(def speed 200)

(defn- calc [angle f]
  (* speed (/ (* (f angle) Math/PI)
              180)))


(defn calc-x [angle] (calc angle Math/cos))
(defn calc-y [angle] (calc angle Math/sin))


(defn move! [shape f]
  (let [pos (:pos shape)]
    (swap! pos (fn [xy]
                 (-> xy
                     (update-in [:x]
                                #(f % (calc-x (shape-angle shape))))
                     (update-in [:y]
                                #(f % (calc-y (shape-angle shape)))))))))

(defn move-forward! [shape]
  (move! shape +))

(defn move-backward! [shape]
  (move! shape -))


(defn rotate! [shape f]
  (swap! (:angle shape) #(f % (/ (/ Math/PI 3) 20))))

(defn rotate-right! [shape]
  (rotate! shape +))

(defn rotate-left! [shape]
  (rotate! shape -))


(defn fire! [monet-canvas ship]
  (let [entity-key (keyword (gensym "bullet"))
        data (shape-data (shape-x ship)
                         (shape-y ship)
                         (shape-angle ship))
        bullet (make-bullet-entity monet-canvas
                                   entity-key
                                   data)]
    (canvas/add-entity monet-canvas entity-key bullet)))
