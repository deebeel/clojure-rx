// Compiled by ClojureScript 0.0-2371
goog.provide('reagi_game.core');
goog.require('cljs.core');
goog.require('reagi_game.entities');
goog.require('reagi_game.entities');
goog.require('reagi_game.entities');
goog.require('monet.canvas');
goog.require('monet.canvas');
reagi_game.core.canvas_dom = document.getElementById("canvas");
reagi_game.core.monet_canvas = monet.canvas.init.call(null,reagi_game.core.canvas_dom,"2d");
reagi_game.core.ship = reagi_game.entities.shape_data.call(null,(new cljs.core.Keyword(null,"canvas","canvas",-1798817489).cljs$core$IFn$_invoke$arity$1(reagi_game.core.monet_canvas).width / (2)),(new cljs.core.Keyword(null,"canvas","canvas",-1798817489).cljs$core$IFn$_invoke$arity$1(reagi_game.core.monet_canvas).height / (2)),(0));
reagi_game.core.ship_entity = reagi_game.entities.ship_entity.call(null,reagi_game.core.ship);
monet.canvas.add_entity.call(null,reagi_game.core.monet_canvas,new cljs.core.Keyword(null,"ship-entity","ship-entity",-575272857),reagi_game.core.ship_entity);
monet.canvas.draw_loop.call(null,reagi_game.core.monet_canvas);
