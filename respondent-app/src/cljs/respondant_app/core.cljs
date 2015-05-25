;;; If this namespace requires macros, remember that ClojureScript's
;;; macros are written in Clojure and have to be referenced via the
;;; :require-macros directive where the :as keyword is required, while in Clojure is optional. Even
;;; if you can add files containing macros and compile-time only
;;; functions in the :source-paths setting of the :builds, it is
;;; strongly suggested to add them to the leiningen :source-paths.
(ns	respondent-app.core
		(:require	[respondent.core	:as	r]
												[dommy.core	:as	dommy])
		(:use-macros
			[dommy.macros	:only	[sel1]]))
(def	mouse-pos-stream	(r/event-stream))
(set!	(.-onmousemove	js/document)
						(fn	[e]
								(r/deliver	mouse-pos-stream	[(.-pageX	e)	(.-pageY	e)])))
(r/subscribe	mouse-pos-stream
													(fn	[[x	y]]
															(dommy/set-text!	(sel1	:#mouse-xy)
																																(str	"("	x	","	y	")"))))







