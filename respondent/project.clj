(defproject respondent "0.1.0-SNAPSHOT"
  :description "FIXME: write description"
  :url "http://example.com/FIXME"
  :license {:name "Eclipse Public License"
            :url "http://www.eclipse.org/legal/epl-v10.html"}

  :cljx {:build [{:source-paths ["src/cljx"]
                  :output-path "target/classes"
                  :rules :clj}
                 {:source-paths ["src/cljx"]
                  :output-path "target/classes"
                  :rules :cljs}]}

  :hooks [cljx.hooks]
  :cljsbuild {:builds [{:source-paths ["target/classes"]
                        :compiler {:output-to "target/main.js"}}]}
  :plugins [[com.keminglabs/cljx "0.3.2"]
            [lein-cljsbuild "1.0.3"]]
  :dependencies [[org.clojure/clojure "1.6.0"]
                 [org.clojure/core.async "0.1.303.0-886421-alpha"]
                 [org.clojure/clojurescript "0.0-2202"]])
