;;; This namespace is used for testing purpose. It use the
;;; clojurescript.test lib.
(ns respondant-app.core-test
  (:require-macros [cemerick.cljs.test :as m :refer (deftest testing are)])
  (:require [cemerick.cljs.test :as t]
            [respondant-app.core :refer (foo)]))


