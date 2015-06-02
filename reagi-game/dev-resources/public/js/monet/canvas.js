// Compiled by ClojureScript 0.0-2371
goog.provide('monet.canvas');
goog.require('cljs.core');
goog.require('monet.core');
goog.require('monet.core');
monet.canvas.get_context = (function get_context(canvas,type){return canvas.getContext(cljs.core.name.call(null,type));
});
/**
* Starts a new path by resetting the list of sub-paths.
* Call this method when you want to create a new path.
*/
monet.canvas.begin_path = (function begin_path(ctx){ctx.beginPath();
return ctx;
});
/**
* Tries to draw a straight line from the current point to the start.
* If the shape has already been closed or has only one point, this
* function does nothing.
*/
monet.canvas.close_path = (function close_path(ctx){ctx.closePath();
return ctx;
});
/**
* Saves the current drawing style state using a stack so you can revert
* any change you make to it using restore.
*/
monet.canvas.save = (function save(ctx){ctx.save();
return ctx;
});
/**
* Restores the drawing style state to the last element on the 'state stack'
* saved by save.
*/
monet.canvas.restore = (function restore(ctx){ctx.restore();
return ctx;
});
/**
* Rotate the context
*/
monet.canvas.rotate = (function rotate(ctx,angle){ctx.rotate(angle);
return ctx;
});
/**
* Scales the context by a floating-point factor in each direction
*/
monet.canvas.scale = (function scale(ctx,x,y){ctx.scale(x,y);
return ctx;
});
/**
* Moves the origin point of the context to (x, y).
*/
monet.canvas.translate = (function translate(ctx,x,y){ctx.translate(x,y);
return ctx;
});
/**
* Multiplies a custom transformation matrix to the existing
* HTML5 canvas transformation according to the follow convention:
* 
* [ x']   [ m11 m21 dx ] [ x ]
* [ y'] = [ m12 m22 dy ] [ y ]
* [ 1 ]   [ 0   0   1  ] [ 1 ]
*/
monet.canvas.transform = (function() {
var transform = null;
var transform__2 = (function (ctx,p__6678){var map__6680 = p__6678;var map__6680__$1 = ((cljs.core.seq_QMARK_.call(null,map__6680))?cljs.core.apply.call(null,cljs.core.hash_map,map__6680):map__6680);var dy = cljs.core.get.call(null,map__6680__$1,new cljs.core.Keyword(null,"dy","dy",1719547243));var dx = cljs.core.get.call(null,map__6680__$1,new cljs.core.Keyword(null,"dx","dx",-381796732));var m22 = cljs.core.get.call(null,map__6680__$1,new cljs.core.Keyword(null,"m22","m22",1714612893));var m21 = cljs.core.get.call(null,map__6680__$1,new cljs.core.Keyword(null,"m21","m21",1822226849));var m12 = cljs.core.get.call(null,map__6680__$1,new cljs.core.Keyword(null,"m12","m12",-1234809182));var m11 = cljs.core.get.call(null,map__6680__$1,new cljs.core.Keyword(null,"m11","m11",-1747137747));ctx.transform(m11,m12,m21,m22,dx,dy);
return ctx;
});
var transform__7 = (function (ctx,m11,m12,m21,m22,dx,dy){ctx.transform(m11,m12,m21,m22,dx,dy);
return ctx;
});
transform = function(ctx,m11,m12,m21,m22,dx,dy){
switch(arguments.length){
case 2:
return transform__2.call(this,ctx,m11);
case 7:
return transform__7.call(this,ctx,m11,m12,m21,m22,dx,dy);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
transform.cljs$core$IFn$_invoke$arity$2 = transform__2;
transform.cljs$core$IFn$_invoke$arity$7 = transform__7;
return transform;
})()
;
/**
* Fills the subpaths with the current fill style.
*/
monet.canvas.fill = (function fill(ctx){ctx.fill();
return ctx;
});
/**
* Strokes the subpaths with the current stroke style.
*/
monet.canvas.stroke = (function stroke(ctx){ctx.stroke();
return ctx;
});
/**
* Further constrains the clipping region to the current path.
*/
monet.canvas.clip = (function clip(ctx){ctx.clip();
return ctx;
});
/**
* Sets all pixels in the rectangle defined by starting point (x, y)
* and size (w, h) to transparent black.
*/
monet.canvas.clear_rect = (function clear_rect(ctx,p__6681){var map__6683 = p__6681;var map__6683__$1 = ((cljs.core.seq_QMARK_.call(null,map__6683))?cljs.core.apply.call(null,cljs.core.hash_map,map__6683):map__6683);var h = cljs.core.get.call(null,map__6683__$1,new cljs.core.Keyword(null,"h","h",1109658740));var w = cljs.core.get.call(null,map__6683__$1,new cljs.core.Keyword(null,"w","w",354169001));var y = cljs.core.get.call(null,map__6683__$1,new cljs.core.Keyword(null,"y","y",-1757859776));var x = cljs.core.get.call(null,map__6683__$1,new cljs.core.Keyword(null,"x","x",2099068185));ctx.clearRect(x,y,w,h);
return ctx;
});
/**
* Paints a rectangle which has a starting point at (x, y) and has a
* w width and an h height onto the canvas, using the current stroke
* style.
*/
monet.canvas.stroke_rect = (function stroke_rect(ctx,p__6684){var map__6686 = p__6684;var map__6686__$1 = ((cljs.core.seq_QMARK_.call(null,map__6686))?cljs.core.apply.call(null,cljs.core.hash_map,map__6686):map__6686);var h = cljs.core.get.call(null,map__6686__$1,new cljs.core.Keyword(null,"h","h",1109658740));var w = cljs.core.get.call(null,map__6686__$1,new cljs.core.Keyword(null,"w","w",354169001));var y = cljs.core.get.call(null,map__6686__$1,new cljs.core.Keyword(null,"y","y",-1757859776));var x = cljs.core.get.call(null,map__6686__$1,new cljs.core.Keyword(null,"x","x",2099068185));ctx.strokeRect(x,y,w,h);
return ctx;
});
/**
* Draws a filled rectangle at (x, y) position whose size is determined
* by width w and height h.
*/
monet.canvas.fill_rect = (function fill_rect(ctx,p__6687){var map__6689 = p__6687;var map__6689__$1 = ((cljs.core.seq_QMARK_.call(null,map__6689))?cljs.core.apply.call(null,cljs.core.hash_map,map__6689):map__6689);var h = cljs.core.get.call(null,map__6689__$1,new cljs.core.Keyword(null,"h","h",1109658740));var w = cljs.core.get.call(null,map__6689__$1,new cljs.core.Keyword(null,"w","w",354169001));var y = cljs.core.get.call(null,map__6689__$1,new cljs.core.Keyword(null,"y","y",-1757859776));var x = cljs.core.get.call(null,map__6689__$1,new cljs.core.Keyword(null,"x","x",2099068185));ctx.fillRect(x,y,w,h);
return ctx;
});
/**
* Draws an arc at position (x, y) with radius r, beginning at start-angle,
* finishing at end-angle, in the direction specified.
*/
monet.canvas.arc = (function arc(ctx,p__6690){var map__6692 = p__6690;var map__6692__$1 = ((cljs.core.seq_QMARK_.call(null,map__6692))?cljs.core.apply.call(null,cljs.core.hash_map,map__6692):map__6692);var counter_clockwise_QMARK_ = cljs.core.get.call(null,map__6692__$1,new cljs.core.Keyword(null,"counter-clockwise?","counter-clockwise?",488698965));var end_angle = cljs.core.get.call(null,map__6692__$1,new cljs.core.Keyword(null,"end-angle","end-angle",1398887581));var start_angle = cljs.core.get.call(null,map__6692__$1,new cljs.core.Keyword(null,"start-angle","start-angle",-1763140493));var r = cljs.core.get.call(null,map__6692__$1,new cljs.core.Keyword(null,"r","r",-471384190));var y = cljs.core.get.call(null,map__6692__$1,new cljs.core.Keyword(null,"y","y",-1757859776));var x = cljs.core.get.call(null,map__6692__$1,new cljs.core.Keyword(null,"x","x",2099068185));ctx.arc(x,y,r,start_angle,end_angle,counter_clockwise_QMARK_);
return ctx;
});
monet.canvas.two_pi = ((2) * Math.PI);
/**
* Draws an ellipse at position (x, y) with radius (rw, rh)
*/
monet.canvas.ellipse = (function ellipse(ctx,p__6693){var map__6695 = p__6693;var map__6695__$1 = ((cljs.core.seq_QMARK_.call(null,map__6695))?cljs.core.apply.call(null,cljs.core.hash_map,map__6695):map__6695);var rh = cljs.core.get.call(null,map__6695__$1,new cljs.core.Keyword(null,"rh","rh",1692287680));var rw = cljs.core.get.call(null,map__6695__$1,new cljs.core.Keyword(null,"rw","rw",1113242370));var y = cljs.core.get.call(null,map__6695__$1,new cljs.core.Keyword(null,"y","y",-1757859776));var x = cljs.core.get.call(null,map__6695__$1,new cljs.core.Keyword(null,"x","x",2099068185));return monet.canvas.restore.call(null,monet.canvas.close_path.call(null,monet.canvas.arc.call(null,monet.canvas.begin_path.call(null,monet.canvas.scale.call(null,monet.canvas.save.call(null,ctx),(1),(rh / rw))),new cljs.core.PersistentArrayMap(null, 6, [new cljs.core.Keyword(null,"x","x",2099068185),x,new cljs.core.Keyword(null,"y","y",-1757859776),y,new cljs.core.Keyword(null,"r","r",-471384190),rw,new cljs.core.Keyword(null,"start-angle","start-angle",-1763140493),(0),new cljs.core.Keyword(null,"end-angle","end-angle",1398887581),monet.canvas.two_pi,new cljs.core.Keyword(null,"counter-clockwise?","counter-clockwise?",488698965),false], null))));
});
/**
* Draws a circle at position (x, y) with radius r
*/
monet.canvas.circle = (function circle(ctx,p__6696){var map__6698 = p__6696;var map__6698__$1 = ((cljs.core.seq_QMARK_.call(null,map__6698))?cljs.core.apply.call(null,cljs.core.hash_map,map__6698):map__6698);var r = cljs.core.get.call(null,map__6698__$1,new cljs.core.Keyword(null,"r","r",-471384190));var y = cljs.core.get.call(null,map__6698__$1,new cljs.core.Keyword(null,"y","y",-1757859776));var x = cljs.core.get.call(null,map__6698__$1,new cljs.core.Keyword(null,"x","x",2099068185));return monet.canvas.close_path.call(null,monet.canvas.arc.call(null,monet.canvas.begin_path.call(null,ctx),new cljs.core.PersistentArrayMap(null, 6, [new cljs.core.Keyword(null,"x","x",2099068185),x,new cljs.core.Keyword(null,"y","y",-1757859776),y,new cljs.core.Keyword(null,"r","r",-471384190),r,new cljs.core.Keyword(null,"start-angle","start-angle",-1763140493),(0),new cljs.core.Keyword(null,"end-angle","end-angle",1398887581),monet.canvas.two_pi,new cljs.core.Keyword(null,"counter-clockwise?","counter-clockwise?",488698965),true], null)));
});
/**
* Paints the given text at a starting point at (x, y), using the
* current stroke style.
*/
monet.canvas.text = (function text(ctx,p__6699){var map__6701 = p__6699;var map__6701__$1 = ((cljs.core.seq_QMARK_.call(null,map__6701))?cljs.core.apply.call(null,cljs.core.hash_map,map__6701):map__6701);var y = cljs.core.get.call(null,map__6701__$1,new cljs.core.Keyword(null,"y","y",-1757859776));var x = cljs.core.get.call(null,map__6701__$1,new cljs.core.Keyword(null,"x","x",2099068185));var text__$1 = cljs.core.get.call(null,map__6701__$1,new cljs.core.Keyword(null,"text","text",-1790561697));ctx.fillText(text__$1,x,y);
return ctx;
});
/**
* Sets the font. Default value 10px sans-serif.
*/
monet.canvas.font_style = (function font_style(ctx,font){ctx.font = font;
return ctx;
});
/**
* Color or style to use inside shapes. Default #000 (black).
*/
monet.canvas.fill_style = (function fill_style(ctx,color){ctx.fillStyle = cljs.core.name.call(null,color);
return ctx;
});
/**
* Color or style to use for the lines around shapes. Default #000 (black).
*/
monet.canvas.stroke_style = (function stroke_style(ctx,color){ctx.strokeStyle = cljs.core.name.call(null,color);
return ctx;
});
/**
* Sets the line width. Default 1.0
*/
monet.canvas.stroke_width = (function stroke_width(ctx,w){ctx.lineWidth = w;
return ctx;
});
/**
* Sets the line cap. Possible values (as string or keyword):
* butt (default), round, square
*/
monet.canvas.stroke_cap = (function stroke_cap(ctx,cap){ctx.lineCap = cljs.core.name.call(null,cap);
return ctx;
});
/**
* Can be set, to change the line join style. Possible values (as string
* or keyword): bevel, round, and miter. Other values are ignored.
*/
monet.canvas.stroke_join = (function stroke_join(ctx,join){ctx.lineJoin = cljs.core.name.call(null,join);
return ctx;
});
/**
* Moves the starting point of a new subpath to the (x, y) coordinates.
*/
monet.canvas.move_to = (function move_to(ctx,x,y){ctx.moveTo(x,y);
return ctx;
});
/**
* Connects the last point in the subpath to the x, y coordinates with a
* straight line.
*/
monet.canvas.line_to = (function line_to(ctx,x,y){ctx.lineTo(x,y);
return ctx;
});
/**
* Global Alpha value that is applied to shapes and images before they are
* composited onto the canvas. Default 1.0 (opaque).
*/
monet.canvas.alpha = (function alpha(ctx,a){ctx.globalAlpha = a;
return ctx;
});
/**
* With Global Alpha applied this sets how shapes and images are drawn
* onto the existing bitmap. Possible values (as string or keyword):
* source-atop, source-in, source-out, source-over (default),
* destination-atop, destination-in, destination-out, destination-over,
* lighter, darker, copy, xor
*/
monet.canvas.composition_operation = (function composition_operation(ctx,operation){ctx.globalCompositionOperation = cljs.core.name.call(null,operation);
return ctx;
});
/**
* Sets the text alignment attribute. Possible values (specified
* as a string or keyword): start (default), end, left, right or
* center.
*/
monet.canvas.text_align = (function text_align(ctx,alignment){ctx.textAlign = cljs.core.name.call(null,alignment);
return ctx;
});
/**
* Sets the text baseline attribute. Possible values (specified
* as a string or keyword): top, hanging, middle, alphabetic (default),
* ideographic, bottom
*/
monet.canvas.text_baseline = (function text_baseline(ctx,alignment){ctx.textBaseline = cljs.core.name.call(null,alignment);
return ctx;
});
/**
* Gets the pixel value as a hash map of RGBA values
*/
monet.canvas.get_pixel = (function get_pixel(ctx,x,y){var imgd = ctx.getImageData(x,y,(1),(1)).data;return new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"red","red",-969428204),(imgd[(0)]),new cljs.core.Keyword(null,"green","green",-945526839),(imgd[(1)]),new cljs.core.Keyword(null,"blue","blue",-622100620),(imgd[(2)]),new cljs.core.Keyword(null,"alpha","alpha",-1574982441),(imgd[(3)])], null);
});
/**
* Draws the image onto the canvas at the given position.
* If a map of params is given, the number of entries is used to
* determine the underlying call to make.
*/
monet.canvas.draw_image = (function() {
var draw_image = null;
var draw_image__3 = (function (ctx,img,p__6702){var map__6707 = p__6702;var map__6707__$1 = ((cljs.core.seq_QMARK_.call(null,map__6707))?cljs.core.apply.call(null,cljs.core.hash_map,map__6707):map__6707);var params = map__6707__$1;var sh = cljs.core.get.call(null,map__6707__$1,new cljs.core.Keyword(null,"sh","sh",-682444007));var sw = cljs.core.get.call(null,map__6707__$1,new cljs.core.Keyword(null,"sw","sw",833113913));var x = cljs.core.get.call(null,map__6707__$1,new cljs.core.Keyword(null,"x","x",2099068185));var y = cljs.core.get.call(null,map__6707__$1,new cljs.core.Keyword(null,"y","y",-1757859776));var dh = cljs.core.get.call(null,map__6707__$1,new cljs.core.Keyword(null,"dh","dh",528137731));var dx = cljs.core.get.call(null,map__6707__$1,new cljs.core.Keyword(null,"dx","dx",-381796732));var w = cljs.core.get.call(null,map__6707__$1,new cljs.core.Keyword(null,"w","w",354169001));var sy = cljs.core.get.call(null,map__6707__$1,new cljs.core.Keyword(null,"sy","sy",227523849));var dy = cljs.core.get.call(null,map__6707__$1,new cljs.core.Keyword(null,"dy","dy",1719547243));var h = cljs.core.get.call(null,map__6707__$1,new cljs.core.Keyword(null,"h","h",1109658740));var dw = cljs.core.get.call(null,map__6707__$1,new cljs.core.Keyword(null,"dw","dw",-821060841));var sx = cljs.core.get.call(null,map__6707__$1,new cljs.core.Keyword(null,"sx","sx",-403071592));var pred__6708_6711 = cljs.core._EQ_;var expr__6709_6712 = cljs.core.count.call(null,params);if(cljs.core.truth_(pred__6708_6711.call(null,(2),expr__6709_6712)))
{ctx.drawImage(img,x,y);
} else
{if(cljs.core.truth_(pred__6708_6711.call(null,(4),expr__6709_6712)))
{ctx.drawImage(img,x,y,w,h);
} else
{if(cljs.core.truth_(pred__6708_6711.call(null,(8),expr__6709_6712)))
{ctx.drawImage(img,sx,sy,sw,sh,dx,dy,dw,dh);
} else
{throw (new Error(("No matching clause: "+cljs.core.str.cljs$core$IFn$_invoke$arity$1(expr__6709_6712))));
}
}
}
return ctx;
});
var draw_image__4 = (function (ctx,img,x,y){ctx.drawImage(img,x,y);
return ctx;
});
draw_image = function(ctx,img,x,y){
switch(arguments.length){
case 3:
return draw_image__3.call(this,ctx,img,x);
case 4:
return draw_image__4.call(this,ctx,img,x,y);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
draw_image.cljs$core$IFn$_invoke$arity$3 = draw_image__3;
draw_image.cljs$core$IFn$_invoke$arity$4 = draw_image__4;
return draw_image;
})()
;
monet.canvas.quadratic_curve_to = (function() {
var quadratic_curve_to = null;
var quadratic_curve_to__2 = (function (ctx,p__6713){var map__6715 = p__6713;var map__6715__$1 = ((cljs.core.seq_QMARK_.call(null,map__6715))?cljs.core.apply.call(null,cljs.core.hash_map,map__6715):map__6715);var y = cljs.core.get.call(null,map__6715__$1,new cljs.core.Keyword(null,"y","y",-1757859776));var x = cljs.core.get.call(null,map__6715__$1,new cljs.core.Keyword(null,"x","x",2099068185));var cpy = cljs.core.get.call(null,map__6715__$1,new cljs.core.Keyword(null,"cpy","cpy",-1203422450));var cpx = cljs.core.get.call(null,map__6715__$1,new cljs.core.Keyword(null,"cpx","cpx",296463436));ctx.quadraticCurveTo(cpx,cpy,x,y);
return ctx;
});
var quadratic_curve_to__5 = (function (ctx,cpx,cpy,x,y){ctx.quadraticCurveTo(cpx,cpy,x,y);
return ctx;
});
quadratic_curve_to = function(ctx,cpx,cpy,x,y){
switch(arguments.length){
case 2:
return quadratic_curve_to__2.call(this,ctx,cpx);
case 5:
return quadratic_curve_to__5.call(this,ctx,cpx,cpy,x,y);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
quadratic_curve_to.cljs$core$IFn$_invoke$arity$2 = quadratic_curve_to__2;
quadratic_curve_to.cljs$core$IFn$_invoke$arity$5 = quadratic_curve_to__5;
return quadratic_curve_to;
})()
;
monet.canvas.bezier_curve_to = (function() {
var bezier_curve_to = null;
var bezier_curve_to__2 = (function (ctx,p__6716){var map__6718 = p__6716;var map__6718__$1 = ((cljs.core.seq_QMARK_.call(null,map__6718))?cljs.core.apply.call(null,cljs.core.hash_map,map__6718):map__6718);var y = cljs.core.get.call(null,map__6718__$1,new cljs.core.Keyword(null,"y","y",-1757859776));var x = cljs.core.get.call(null,map__6718__$1,new cljs.core.Keyword(null,"x","x",2099068185));var cp2y = cljs.core.get.call(null,map__6718__$1,new cljs.core.Keyword(null,"cp2y","cp2y",903335801));var cp2x = cljs.core.get.call(null,map__6718__$1,new cljs.core.Keyword(null,"cp2x","cp2x",-1682644749));var cp1y = cljs.core.get.call(null,map__6718__$1,new cljs.core.Keyword(null,"cp1y","cp1y",628283543));var cp1x = cljs.core.get.call(null,map__6718__$1,new cljs.core.Keyword(null,"cp1x","cp1x",465245137));ctx.bezierCurveTo(cp1x,cp1y,cp2x,cp2y,x,y);
return ctx;
});
var bezier_curve_to__7 = (function (ctx,cp1x,cp1y,cp2x,cp2y,x,y){ctx.bezierCurveTo(cp1x,cp1y,cp2x,cp2y,x,y);
return ctx;
});
bezier_curve_to = function(ctx,cp1x,cp1y,cp2x,cp2y,x,y){
switch(arguments.length){
case 2:
return bezier_curve_to__2.call(this,ctx,cp1x);
case 7:
return bezier_curve_to__7.call(this,ctx,cp1x,cp1y,cp2x,cp2y,x,y);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
bezier_curve_to.cljs$core$IFn$_invoke$arity$2 = bezier_curve_to__2;
bezier_curve_to.cljs$core$IFn$_invoke$arity$7 = bezier_curve_to__7;
return bezier_curve_to;
})()
;
monet.canvas.rounded_rect = (function rounded_rect(ctx,p__6719){var map__6721 = p__6719;var map__6721__$1 = ((cljs.core.seq_QMARK_.call(null,map__6721))?cljs.core.apply.call(null,cljs.core.hash_map,map__6721):map__6721);var r = cljs.core.get.call(null,map__6721__$1,new cljs.core.Keyword(null,"r","r",-471384190));var h = cljs.core.get.call(null,map__6721__$1,new cljs.core.Keyword(null,"h","h",1109658740));var w = cljs.core.get.call(null,map__6721__$1,new cljs.core.Keyword(null,"w","w",354169001));var y = cljs.core.get.call(null,map__6721__$1,new cljs.core.Keyword(null,"y","y",-1757859776));var x = cljs.core.get.call(null,map__6721__$1,new cljs.core.Keyword(null,"x","x",2099068185));monet.canvas.stroke.call(null,monet.canvas.quadratic_curve_to.call(null,monet.canvas.line_to.call(null,monet.canvas.quadratic_curve_to.call(null,monet.canvas.line_to.call(null,monet.canvas.quadratic_curve_to.call(null,monet.canvas.line_to.call(null,monet.canvas.quadratic_curve_to.call(null,monet.canvas.line_to.call(null,monet.canvas.move_to.call(null,monet.canvas.begin_path.call(null,ctx),x,(y + r)),x,((y + h) - r)),x,(y + h),(x + r),(y + h)),((x + w) - r),(y + h)),(x + w),(y + h),(x + w),((y + h) - r)),(x + w),(y + r)),(x + w),y,((x + w) - r),y),(x + r),y),x,y,x,(y + r)));
return ctx;
});
monet.canvas.add_entity = (function add_entity(mc,k,ent){return (new cljs.core.Keyword(null,"entities","entities",1940967403).cljs$core$IFn$_invoke$arity$1(mc)[k] = ent);
});
monet.canvas.remove_entity = (function remove_entity(mc,k){return delete new cljs.core.Keyword(null,"entities","entities",1940967403).cljs$core$IFn$_invoke$arity$1(mc)[k];
});
monet.canvas.get_entity = (function get_entity(mc,k){return new cljs.core.Keyword(null,"value","value",305978217).cljs$core$IFn$_invoke$arity$1((new cljs.core.Keyword(null,"entities","entities",1940967403).cljs$core$IFn$_invoke$arity$1(mc)[k]));
});
/**
* @param {...*} var_args
*/
monet.canvas.update_entity = (function() { 
var update_entity__delegate = function (mc,k,func,extra){var cur = (new cljs.core.Keyword(null,"entities","entities",1940967403).cljs$core$IFn$_invoke$arity$1(mc)[k]);var res = cljs.core.apply.call(null,func,cur,extra);return (new cljs.core.Keyword(null,"entities","entities",1940967403).cljs$core$IFn$_invoke$arity$1(mc)[k] = res);
};
var update_entity = function (mc,k,func,var_args){
var extra = null;if (arguments.length > 3) {
  extra = cljs.core.array_seq(Array.prototype.slice.call(arguments, 3),0);} 
return update_entity__delegate.call(this,mc,k,func,extra);};
update_entity.cljs$lang$maxFixedArity = 3;
update_entity.cljs$lang$applyTo = (function (arglist__6722){
var mc = cljs.core.first(arglist__6722);
arglist__6722 = cljs.core.next(arglist__6722);
var k = cljs.core.first(arglist__6722);
arglist__6722 = cljs.core.next(arglist__6722);
var func = cljs.core.first(arglist__6722);
var extra = cljs.core.rest(arglist__6722);
return update_entity__delegate(mc,k,func,extra);
});
update_entity.cljs$core$IFn$_invoke$arity$variadic = update_entity__delegate;
return update_entity;
})()
;
monet.canvas.clear_BANG_ = (function clear_BANG_(mc){var ks = cljs.core.js_keys.call(null,new cljs.core.Keyword(null,"entities","entities",1940967403).cljs$core$IFn$_invoke$arity$1(mc));var seq__6727 = cljs.core.seq.call(null,ks);var chunk__6728 = null;var count__6729 = (0);var i__6730 = (0);while(true){
if((i__6730 < count__6729))
{var k = cljs.core._nth.call(null,chunk__6728,i__6730);monet.canvas.remove_entity.call(null,mc,k);
{
var G__6731 = seq__6727;
var G__6732 = chunk__6728;
var G__6733 = count__6729;
var G__6734 = (i__6730 + (1));
seq__6727 = G__6731;
chunk__6728 = G__6732;
count__6729 = G__6733;
i__6730 = G__6734;
continue;
}
} else
{var temp__4126__auto__ = cljs.core.seq.call(null,seq__6727);if(temp__4126__auto__)
{var seq__6727__$1 = temp__4126__auto__;if(cljs.core.chunked_seq_QMARK_.call(null,seq__6727__$1))
{var c__4410__auto__ = cljs.core.chunk_first.call(null,seq__6727__$1);{
var G__6735 = cljs.core.chunk_rest.call(null,seq__6727__$1);
var G__6736 = c__4410__auto__;
var G__6737 = cljs.core.count.call(null,c__4410__auto__);
var G__6738 = (0);
seq__6727 = G__6735;
chunk__6728 = G__6736;
count__6729 = G__6737;
i__6730 = G__6738;
continue;
}
} else
{var k = cljs.core.first.call(null,seq__6727__$1);monet.canvas.remove_entity.call(null,mc,k);
{
var G__6739 = cljs.core.next.call(null,seq__6727__$1);
var G__6740 = null;
var G__6741 = (0);
var G__6742 = (0);
seq__6727 = G__6739;
chunk__6728 = G__6740;
count__6729 = G__6741;
i__6730 = G__6742;
continue;
}
}
} else
{return null;
}
}
break;
}
});
monet.canvas.entity = (function entity(v,update,draw){return new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"value","value",305978217),v,new cljs.core.Keyword(null,"draw","draw",1358331674),draw,new cljs.core.Keyword(null,"update","update",1045576396),update], null);
});
monet.canvas.attr = (function attr(e,a){return e.getAttribute(a);
});
monet.canvas.draw_loop = (function draw_loop(p__6743){var map__6749 = p__6743;var map__6749__$1 = ((cljs.core.seq_QMARK_.call(null,map__6749))?cljs.core.apply.call(null,cljs.core.hash_map,map__6749):map__6749);var mc = map__6749__$1;var entities = cljs.core.get.call(null,map__6749__$1,new cljs.core.Keyword(null,"entities","entities",1940967403));var active = cljs.core.get.call(null,map__6749__$1,new cljs.core.Keyword(null,"active","active",1895962068));var ctx = cljs.core.get.call(null,map__6749__$1,new cljs.core.Keyword(null,"ctx","ctx",-493610118));var updating_QMARK_ = cljs.core.get.call(null,map__6749__$1,new cljs.core.Keyword(null,"updating?","updating?",1586585646));var canvas = cljs.core.get.call(null,map__6749__$1,new cljs.core.Keyword(null,"canvas","canvas",-1798817489));monet.canvas.clear_rect.call(null,ctx,new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"x","x",2099068185),(0),new cljs.core.Keyword(null,"y","y",-1757859776),(0),new cljs.core.Keyword(null,"w","w",354169001),monet.canvas.attr.call(null,canvas,"width"),new cljs.core.Keyword(null,"h","h",1109658740),monet.canvas.attr.call(null,canvas,"height")], null));
if(cljs.core.truth_(cljs.core.deref.call(null,active)))
{var ks_6754 = cljs.core.js_keys.call(null,entities);var cnt_6755 = ks_6754.length;var i_6756 = (0);while(true){
if((i_6756 < cnt_6755))
{var k_6757 = (ks_6754[i_6756]);var map__6750_6758 = (entities[k_6757]);var map__6750_6759__$1 = ((cljs.core.seq_QMARK_.call(null,map__6750_6758))?cljs.core.apply.call(null,cljs.core.hash_map,map__6750_6758):map__6750_6758);var ent_6760 = map__6750_6759__$1;var value_6761 = cljs.core.get.call(null,map__6750_6759__$1,new cljs.core.Keyword(null,"value","value",305978217));var update_6762 = cljs.core.get.call(null,map__6750_6759__$1,new cljs.core.Keyword(null,"update","update",1045576396));var draw_6763 = cljs.core.get.call(null,map__6750_6759__$1,new cljs.core.Keyword(null,"draw","draw",1358331674));if(cljs.core.truth_((function (){var and__3628__auto__ = update_6762;if(cljs.core.truth_(and__3628__auto__))
{return cljs.core.deref.call(null,updating_QMARK_);
} else
{return and__3628__auto__;
}
})()))
{var updated_6764 = (function (){var or__3640__auto__ = (function (){try{return update_6762.call(null,value_6761);
}catch (e6752){if((e6752 instanceof Error))
{var e = e6752;console.log(e);
return value_6761;
} else
{throw e6752;

}
}})();if(cljs.core.truth_(or__3640__auto__))
{return or__3640__auto__;
} else
{return value_6761;
}
})();if(cljs.core.truth_((entities[k_6757])))
{(entities[k_6757] = cljs.core.assoc.call(null,ent_6760,new cljs.core.Keyword(null,"value","value",305978217),updated_6764));
} else
{}
} else
{}
if(cljs.core.truth_(draw_6763))
{try{draw_6763.call(null,ctx,new cljs.core.Keyword(null,"value","value",305978217).cljs$core$IFn$_invoke$arity$1((entities[k_6757])));
}catch (e6753){if((e6753 instanceof Error))
{var e_6765 = e6753;console.log(e_6765);
} else
{throw e6753;

}
}} else
{}
{
var G__6766 = (i_6756 + (1));
i_6756 = G__6766;
continue;
}
} else
{}
break;
}
return monet.core.animation_frame.call(null,((function (map__6749,map__6749__$1,mc,entities,active,ctx,updating_QMARK_,canvas){
return (function (){return draw_loop.call(null,mc);
});})(map__6749,map__6749__$1,mc,entities,active,ctx,updating_QMARK_,canvas))
);
} else
{return null;
}
});
monet.canvas.monet_canvas = (function monet_canvas(elem,context_type){var ct = (function (){var or__3640__auto__ = context_type;if(cljs.core.truth_(or__3640__auto__))
{return or__3640__auto__;
} else
{return "2d";
}
})();var ctx = monet.canvas.get_context.call(null,elem,ct);return new cljs.core.PersistentArrayMap(null, 5, [new cljs.core.Keyword(null,"canvas","canvas",-1798817489),elem,new cljs.core.Keyword(null,"ctx","ctx",-493610118),ctx,new cljs.core.Keyword(null,"entities","entities",1940967403),(function (){var obj6770 = {};return obj6770;
})(),new cljs.core.Keyword(null,"updating?","updating?",1586585646),cljs.core.atom.call(null,true),new cljs.core.Keyword(null,"active","active",1895962068),cljs.core.atom.call(null,true)], null);
});
/**
* @param {...*} var_args
*/
monet.canvas.init = (function() { 
var init__delegate = function (canvas,p__6771){var vec__6773 = p__6771;var context_type = cljs.core.nth.call(null,vec__6773,(0),null);var mc = monet.canvas.monet_canvas.call(null,canvas,context_type);monet.canvas.draw_loop.call(null,mc);
return mc;
};
var init = function (canvas,var_args){
var p__6771 = null;if (arguments.length > 1) {
  p__6771 = cljs.core.array_seq(Array.prototype.slice.call(arguments, 1),0);} 
return init__delegate.call(this,canvas,p__6771);};
init.cljs$lang$maxFixedArity = 1;
init.cljs$lang$applyTo = (function (arglist__6774){
var canvas = cljs.core.first(arglist__6774);
var p__6771 = cljs.core.rest(arglist__6774);
return init__delegate(canvas,p__6771);
});
init.cljs$core$IFn$_invoke$arity$variadic = init__delegate;
return init;
})()
;
monet.canvas.stop = (function stop(mc){return cljs.core.reset_BANG_.call(null,new cljs.core.Keyword(null,"active","active",1895962068).cljs$core$IFn$_invoke$arity$1(mc),false);
});
monet.canvas.stop_updating = (function stop_updating(mc){return cljs.core.reset_BANG_.call(null,new cljs.core.Keyword(null,"updating?","updating?",1586585646).cljs$core$IFn$_invoke$arity$1(mc),false);
});
monet.canvas.start_updating = (function start_updating(mc){return cljs.core.reset_BANG_.call(null,new cljs.core.Keyword(null,"updating?","updating?",1586585646).cljs$core$IFn$_invoke$arity$1(mc),true);
});
monet.canvas.restart = (function restart(mc){cljs.core.reset_BANG_.call(null,new cljs.core.Keyword(null,"active","active",1895962068).cljs$core$IFn$_invoke$arity$1(mc),true);
return monet.canvas.draw_loop.call(null,mc);
});
