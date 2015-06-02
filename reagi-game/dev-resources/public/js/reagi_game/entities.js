// Compiled by ClojureScript 0.0-2371
goog.provide('reagi_game.entities');
goog.require('cljs.core');
goog.require('monet.geometry');
goog.require('monet.geometry');
goog.require('monet.canvas');
goog.require('monet.canvas');
reagi_game.entities.shape_axis = (function shape_axis(shape,axis){return axis.call(null,cljs.core.deref.call(null,new cljs.core.Keyword(null,"pos","pos",-864607220).cljs$core$IFn$_invoke$arity$1(shape)));
});
reagi_game.entities.shape_x = (function shape_x(shape){return reagi_game.entities.shape_axis.call(null,shape,new cljs.core.Keyword(null,"x","x",2099068185));
});
reagi_game.entities.shape_y = (function shape_y(shape){return reagi_game.entities.shape_axis.call(null,shape,new cljs.core.Keyword(null,"y","y",-1757859776));
});
reagi_game.entities.shape_angle = (function shape_angle(shape){return cljs.core.deref.call(null,new cljs.core.Keyword(null,"angle","angle",1622094254).cljs$core$IFn$_invoke$arity$1(shape));
});
reagi_game.entities.shape_data = (function shape_data(x,y,angle){return new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"pos","pos",-864607220),cljs.core.atom.call(null,new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"x","x",2099068185),x,new cljs.core.Keyword(null,"y","y",-1757859776),y], null)),new cljs.core.Keyword(null,"angle","angle",1622094254),cljs.core.atom.call(null,angle)], null);
});
reagi_game.entities.update_shape = (function update_shape(shape,value){return cljs.core.assoc.call(null,cljs.core.assoc.call(null,cljs.core.assoc.call(null,value,new cljs.core.Keyword(null,"x","x",2099068185),reagi_game.entities.shape_x.call(null,shape)),new cljs.core.Keyword(null,"y","y",-1757859776),reagi_game.entities.shape_y.call(null,shape)),new cljs.core.Keyword(null,"angle","angle",1622094254),reagi_game.entities.shape_angle.call(null,shape));
});
reagi_game.entities.ship_entity = (function ship_entity(ship){return monet.canvas.entity.call(null,new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"x","x",2099068185),reagi_game.entities.shape_x.call(null,ship),new cljs.core.Keyword(null,"y","y",-1757859776),reagi_game.entities.shape_y.call(null,ship),new cljs.core.Keyword(null,"angle","angle",1622094254),reagi_game.entities.shape_angle.call(null,ship)], null),(function (value){return reagi_game.entities.update_shape.call(null,ship,value);
}),(function (ctx,val){return monet.canvas.restore.call(null,monet.canvas.fill.call(null,monet.canvas.line_to.call(null,monet.canvas.line_to.call(null,monet.canvas.move_to.call(null,monet.canvas.begin_path.call(null,monet.canvas.rotate.call(null,monet.canvas.translate.call(null,monet.canvas.save.call(null,ctx),new cljs.core.Keyword(null,"x","x",2099068185).cljs$core$IFn$_invoke$arity$1(val),new cljs.core.Keyword(null,"y","y",-1757859776).cljs$core$IFn$_invoke$arity$1(val)),new cljs.core.Keyword(null,"angle","angle",1622094254).cljs$core$IFn$_invoke$arity$1(val))),(50),(0)),(0),(-15)),(0),(15))));
}));
});
reagi_game.entities.make_bullet_entity = (function make_bullet_entity(monet_canvas,key,shape){return monet.canvas.entity.call(null,new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"x","x",2099068185),reagi_game.entities.shape_x.call(null,shape),new cljs.core.Keyword(null,"y","y",-1757859776),reagi_game.entities.shape_y.call(null,shape),new cljs.core.Keyword(null,"angle","angle",1622094254),reagi_game.entities.shape_angle.call(null,shape)], null),(function (value){if(!(monet.geometry.contained_QMARK_.call(null,new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"x","x",2099068185),(0),new cljs.core.Keyword(null,"y","y",-1757859776),(0),new cljs.core.Keyword(null,"w","w",354169001),new cljs.core.Keyword(null,"canvas","canvas",-1798817489).cljs$core$IFn$_invoke$arity$1(monet_canvas).width,new cljs.core.Keyword(null,"h","h",1109658740),new cljs.core.Keyword(null,"canvas","canvas",-1798817489).cljs$core$IFn$_invoke$arity$1(monet_canvas).height], null),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"x","x",2099068185),reagi_game.entities.shape_x.call(null,shape),new cljs.core.Keyword(null,"y","y",-1757859776),reagi_game.entities.shape_y.call(null,shape),new cljs.core.Keyword(null,"r","r",-471384190),(5)], null))))
{monet.canvas.remove_entity.call(null,monet_canvas,key);
} else
{}
reagi_game.entities.move_forward_BANG_.call(null,shape);
return cljs.core.assoc.call(null,cljs.core.assoc.call(null,cljs.core.assoc.call(null,value,new cljs.core.Keyword(null,"x","x",2099068185),reagi_game.entities.shape_x.call(null,shape)),new cljs.core.Keyword(null,"y","y",-1757859776),reagi_game.entities.shape_y.call(null,shape)),new cljs.core.Keyword(null,"angle","angle",1622094254),reagi_game.entities.shape_angle.call(null,shape));
}),(function (ctx,val){return monet.canvas.restore.call(null,monet.canvas.circle.call(null,monet.canvas.fill_style.call(null,monet.canvas.rotate.call(null,monet.canvas.translate.call(null,monet.canvas.save.call(null,ctx),new cljs.core.Keyword(null,"x","x",2099068185).cljs$core$IFn$_invoke$arity$1(val),new cljs.core.Keyword(null,"y","y",-1757859776).cljs$core$IFn$_invoke$arity$1(val)),new cljs.core.Keyword(null,"angle","angle",1622094254).cljs$core$IFn$_invoke$arity$1(val)),"red"),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"x","x",2099068185),(10),new cljs.core.Keyword(null,"y","y",-1757859776),(0),new cljs.core.Keyword(null,"r","r",-471384190),(5)], null)));
}));
});
reagi_game.entities.speed = (200);
reagi_game.entities.calc = (function calc(angle,f){return (reagi_game.entities.speed * ((f.call(null,angle) * Math.PI) / (180)));
});
reagi_game.entities.calc_x = (function calc_x(angle){return reagi_game.entities.calc.call(null,angle,Math.cos);
});
reagi_game.entities.calc_y = (function calc_y(angle){return reagi_game.entities.calc.call(null,angle,Math.sin);
});
reagi_game.entities.move_BANG_ = (function move_BANG_(shape,f){var pos = new cljs.core.Keyword(null,"pos","pos",-864607220).cljs$core$IFn$_invoke$arity$1(shape);return cljs.core.swap_BANG_.call(null,pos,((function (pos){
return (function (xy){return cljs.core.update_in.call(null,cljs.core.update_in.call(null,xy,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"x","x",2099068185)], null),((function (pos){
return (function (p1__5162_SHARP_){return f.call(null,p1__5162_SHARP_,reagi_game.entities.calc_x.call(null,reagi_game.entities.shape_angle.call(null,shape)));
});})(pos))
),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"y","y",-1757859776)], null),((function (pos){
return (function (p1__5163_SHARP_){return f.call(null,p1__5163_SHARP_,reagi_game.entities.calc_y.call(null,reagi_game.entities.shape_angle.call(null,shape)));
});})(pos))
);
});})(pos))
);
});
reagi_game.entities.move_forward_BANG_ = (function move_forward_BANG_(shape){return reagi_game.entities.move_BANG_.call(null,shape,cljs.core._PLUS_);
});
reagi_game.entities.move_backward_BANG_ = (function move_backward_BANG_(shape){return reagi_game.entities.move_BANG_.call(null,shape,cljs.core._);
});
reagi_game.entities.rotate_BANG_ = (function rotate_BANG_(shape,f){return cljs.core.swap_BANG_.call(null,new cljs.core.Keyword(null,"angle","angle",1622094254).cljs$core$IFn$_invoke$arity$1(shape),(function (p1__5164_SHARP_){return f.call(null,p1__5164_SHARP_,((Math.PI / (3)) / (20)));
}));
});
reagi_game.entities.rotate_right_BANG_ = (function rotate_right_BANG_(shape){return reagi_game.entities.rotate_BANG_.call(null,shape,cljs.core._PLUS_);
});
reagi_game.entities.rotate_left_BANG_ = (function rotate_left_BANG_(shape){return reagi_game.entities.rotate_BANG_.call(null,shape,cljs.core._);
});
reagi_game.entities.fire_BANG_ = (function fire_BANG_(monet_canvas,ship){var entity_key = cljs.core.keyword.call(null,cljs.core.gensym.call(null,"bullet"));var data = reagi_game.entities.shape_data.call(null,reagi_game.entities.shape_x.call(null,ship),reagi_game.entities.shape_y.call(null,ship),reagi_game.entities.shape_angle.call(null,ship));var bullet = reagi_game.entities.make_bullet_entity.call(null,monet_canvas,entity_key,data);return monet.canvas.add_entity.call(null,monet_canvas,entity_key,bullet);
});
