!function(o,e,h,t){var i,s,r=0,a=(i=t.userAgent,s=/msie\s\d+/i,0<i.search(s)&&(i=(i=s.exec(i).toString()).split(" ")[1])<9&&(o("html").addClass("lt-ie9"),!0));Function.prototype.bind||(Function.prototype.bind=function(s){var o=this,e=[].slice;if("function"!=typeof o)throw new TypeError;var h=e.call(arguments,1),r=function(){if(this instanceof r){(t=function(){}).prototype=o.prototype;var t=new t,i=o.apply(t,h.concat(e.call(arguments)));return Object(i)===i?i:t}return o.apply(s,h.concat(e.call(arguments)))};return r});var n=function(t,i,s){this.VERSION="2.0.3",this.input=t,this.plugin_count=s,this.old_to=this.old_from=this.calc_count=this.current_plugin=0,this.raf_id=null,this.is_update=this.is_key=this.force_redraw=this.dragging=!1,this.is_start=!0,this.is_click=this.is_resize=this.is_active=!1,this.$cache={win:o(h),body:o(e.body),input:o(t),cont:null,rs:null,min:null,max:null,from:null,to:null,single:null,bar:null,line:null,s_single:null,s_from:null,s_to:null,shad_single:null,shad_from:null,shad_to:null,grid:null,grid_labels:[]},(t={type:(t=this.$cache.input).data("type"),min:t.data("min"),max:t.data("max"),from:t.data("from"),to:t.data("to"),step:t.data("step"),min_interval:t.data("minInterval"),max_interval:t.data("maxInterval"),drag_interval:t.data("dragInterval"),values:t.data("values"),from_fixed:t.data("fromFixed"),from_min:t.data("fromMin"),from_max:t.data("fromMax"),from_shadow:t.data("fromShadow"),to_fixed:t.data("toFixed"),to_min:t.data("toMin"),to_max:t.data("toMax"),to_shadow:t.data("toShadow"),prettify_enabled:t.data("prettifyEnabled"),prettify_separator:t.data("prettifySeparator"),force_edges:t.data("forceEdges"),keyboard:t.data("keyboard"),keyboard_step:t.data("keyboardStep"),grid:t.data("grid"),grid_margin:t.data("gridMargin"),grid_num:t.data("gridNum"),grid_snap:t.data("gridSnap"),hide_min_max:t.data("hideMinMax"),hide_from_to:t.data("hideFromTo"),prefix:t.data("prefix"),postfix:t.data("postfix"),max_postfix:t.data("maxPostfix"),decorate_both:t.data("decorateBoth"),values_separator:t.data("valuesSeparator"),disable:t.data("disable")}).values=t.values&&t.values.split(","),i=o.extend(t,i),this.options=o.extend({type:"single",min:10,max:100,from:null,to:null,step:1,min_interval:0,max_interval:0,drag_interval:!1,values:[],p_values:[],from_fixed:!1,from_min:null,from_max:null,from_shadow:!1,to_fixed:!1,to_min:null,to_max:null,to_shadow:!1,prettify_enabled:!0,prettify_separator:" ",prettify:null,force_edges:!1,keyboard:!1,keyboard_step:5,grid:!1,grid_margin:!0,grid_num:4,grid_snap:!1,hide_min_max:!1,hide_from_to:!1,prefix:"",postfix:"",max_postfix:"",decorate_both:!0,values_separator:" \u2014 ",disable:!1,onStart:null,onChange:null,onFinish:null,onUpdate:null},i),this.validate(),this.result={input:this.$cache.input,slider:null,min:this.options.min,max:this.options.max,from:this.options.from,from_percent:0,from_value:null,to:this.options.to,to_percent:0,to_value:null},this.coords={x_gap:0,x_pointer:0,w_rs:0,w_rs_old:0,w_handle:0,p_gap:0,p_gap_left:0,p_gap_right:0,p_step:0,p_pointer:0,p_handle:0,p_single:0,p_single_real:0,p_from:0,p_from_real:0,p_to:0,p_to_real:0,p_bar_x:0,p_bar_w:0,grid_gap:0,big_num:0,big:[],big_w:[],big_p:[],big_x:[]},this.labels={w_min:0,w_max:0,w_from:0,w_to:0,w_single:0,p_min:0,p_max:0,p_from:0,p_from_left:0,p_to:0,p_to_left:0,p_single:0,p_single_left:0},this.init()};n.prototype={init:function(t){this.coords.p_step=this.options.step/((this.options.max-this.options.min)/100),this.target="base",this.toggleInput(),this.append(),this.setMinMax(),t?(this.force_redraw=!0,this.calc(!0),this.options.onUpdate&&"function"==typeof this.options.onUpdate&&this.options.onUpdate(this.result)):(this.force_redraw=!0,this.calc(!0),this.options.onStart&&"function"==typeof this.options.onStart&&this.options.onStart(this.result)),this.updateScene(),this.raf_id=requestAnimationFrame(this.updateScene.bind(this))},append:function(){this.$cache.input.before('<span class="irs js-irs-'+this.plugin_count+'"></span>'),this.$cache.input.prop("readonly",!0),this.$cache.cont=this.$cache.input.prev(),this.result.slider=this.$cache.cont,this.$cache.cont.html('<span class="irs"><span class="irs-line" tabindex="-1"><span class="irs-line-left"></span><span class="irs-line-mid"></span><span class="irs-line-right"></span></span><span class="irs-min">0</span><span class="irs-max">1</span><span class="irs-from">0</span><span class="irs-to">0</span><span class="irs-single">0</span></span><span class="irs-grid"></span><span class="irs-bar"></span>'),this.$cache.rs=this.$cache.cont.find(".irs"),this.$cache.min=this.$cache.cont.find(".irs-min"),this.$cache.max=this.$cache.cont.find(".irs-max"),this.$cache.from=this.$cache.cont.find(".irs-from"),this.$cache.to=this.$cache.cont.find(".irs-to"),this.$cache.single=this.$cache.cont.find(".irs-single"),this.$cache.bar=this.$cache.cont.find(".irs-bar"),this.$cache.line=this.$cache.cont.find(".irs-line"),this.$cache.grid=this.$cache.cont.find(".irs-grid"),"single"===this.options.type?(this.$cache.cont.append('<span class="irs-bar-edge"></span><span class="irs-shadow shadow-single"></span><span class="irs-slider single"></span>'),this.$cache.s_single=this.$cache.cont.find(".single"),this.$cache.from[0].style.visibility="hidden",this.$cache.to[0].style.visibility="hidden",this.$cache.shad_single=this.$cache.cont.find(".shadow-single")):(this.$cache.cont.append('<span class="irs-shadow shadow-from"></span><span class="irs-shadow shadow-to"></span><span class="irs-slider from"></span><span class="irs-slider to"></span>'),this.$cache.s_from=this.$cache.cont.find(".from"),this.$cache.s_to=this.$cache.cont.find(".to"),this.$cache.shad_from=this.$cache.cont.find(".shadow-from"),this.$cache.shad_to=this.$cache.cont.find(".shadow-to")),this.options.hide_from_to&&(this.$cache.from[0].style.display="none",this.$cache.to[0].style.display="none",this.$cache.single[0].style.display="none"),this.appendGrid(),this.options.disable?(this.appendDisableMask(),this.$cache.input[0].disabled=!0):(this.$cache.cont.removeClass("irs-disabled"),this.$cache.input[0].disabled=!1,this.bindEvents())},appendDisableMask:function(){this.$cache.cont.append('<span class="irs-disable-mask"></span>'),this.$cache.cont.addClass("irs-disabled")},remove:function(){this.$cache.cont.remove(),this.$cache.cont=null,this.$cache.line.off("keydown.irs_"+this.plugin_count),this.$cache.body.off("touchmove.irs_"+this.plugin_count),this.$cache.body.off("mousemove.irs_"+this.plugin_count),this.$cache.win.off("touchend.irs_"+this.plugin_count),this.$cache.win.off("mouseup.irs_"+this.plugin_count),a&&(this.$cache.body.off("mouseup.irs_"+this.plugin_count),this.$cache.body.off("mouseleave.irs_"+this.plugin_count)),this.$cache.grid_labels=[],this.coords.big=[],this.coords.big_w=[],this.coords.big_p=[],this.coords.big_x=[],cancelAnimationFrame(this.raf_id)},bindEvents:function(){this.$cache.body.on("touchmove.irs_"+this.plugin_count,this.pointerMove.bind(this)),this.$cache.body.on("mousemove.irs_"+this.plugin_count,this.pointerMove.bind(this)),this.$cache.win.on("touchend.irs_"+this.plugin_count,this.pointerUp.bind(this)),this.$cache.win.on("mouseup.irs_"+this.plugin_count,this.pointerUp.bind(this)),this.$cache.line.on("touchstart.irs_"+this.plugin_count,this.pointerClick.bind(this,"click")),this.$cache.line.on("mousedown.irs_"+this.plugin_count,this.pointerClick.bind(this,"click")),this.options.drag_interval&&"double"===this.options.type?(this.$cache.bar.on("touchstart.irs_"+this.plugin_count,this.pointerDown.bind(this,"both")),this.$cache.bar.on("mousedown.irs_"+this.plugin_count,this.pointerDown.bind(this,"both"))):(this.$cache.bar.on("touchstart.irs_"+this.plugin_count,this.pointerClick.bind(this,"click")),this.$cache.bar.on("mousedown.irs_"+this.plugin_count,this.pointerClick.bind(this,"click"))),"single"===this.options.type?(this.$cache.s_single.on("touchstart.irs_"+this.plugin_count,this.pointerDown.bind(this,"single")),this.$cache.shad_single.on("touchstart.irs_"+this.plugin_count,this.pointerClick.bind(this,"click")),this.$cache.s_single.on("mousedown.irs_"+this.plugin_count,this.pointerDown.bind(this,"single")),this.$cache.shad_single.on("mousedown.irs_"+this.plugin_count,this.pointerClick.bind(this,"click"))):(this.$cache.s_from.on("touchstart.irs_"+this.plugin_count,this.pointerDown.bind(this,"from")),this.$cache.s_to.on("touchstart.irs_"+this.plugin_count,this.pointerDown.bind(this,"to")),this.$cache.shad_from.on("touchstart.irs_"+this.plugin_count,this.pointerClick.bind(this,"click")),this.$cache.shad_to.on("touchstart.irs_"+this.plugin_count,this.pointerClick.bind(this,"click")),this.$cache.s_from.on("mousedown.irs_"+this.plugin_count,this.pointerDown.bind(this,"from")),this.$cache.s_to.on("mousedown.irs_"+this.plugin_count,this.pointerDown.bind(this,"to")),this.$cache.shad_from.on("mousedown.irs_"+this.plugin_count,this.pointerClick.bind(this,"click")),this.$cache.shad_to.on("mousedown.irs_"+this.plugin_count,this.pointerClick.bind(this,"click"))),this.options.keyboard&&this.$cache.line.on("keydown.irs_"+this.plugin_count,this.key.bind(this,"keyboard")),a&&(this.$cache.body.on("mouseup.irs_"+this.plugin_count,this.pointerUp.bind(this)),this.$cache.body.on("mouseleave.irs_"+this.plugin_count,this.pointerUp.bind(this)))},pointerMove:function(t){this.dragging&&(this.coords.x_pointer=(t.pageX||t.originalEvent.touches&&t.originalEvent.touches[0].pageX)-this.coords.x_gap,this.calc())},pointerUp:function(t){if(this.current_plugin===this.plugin_count&&this.is_active){this.is_active=!1;var i=this.options.onFinish&&"function"==typeof this.options.onFinish;t=o.contains(this.$cache.cont[0],t.target)||this.dragging,i&&t&&this.options.onFinish(this.result),this.$cache.cont.find(".state_hover").removeClass("state_hover"),this.force_redraw=!0,this.dragging=!1,a&&o("*").prop("unselectable",!1)}},pointerDown:function(t,i){i.preventDefault();var s=i.pageX||i.originalEvent.touches&&i.originalEvent.touches[0].pageX;if(2!==i.button){switch(this.current_plugin=this.plugin_count,this.target=t,this.dragging=this.is_active=!0,this.coords.x_gap=this.$cache.rs.offset().left,this.coords.x_pointer=s-this.coords.x_gap,this.calcPointer(),t){case"single":this.coords.p_gap=this.toFixed(this.coords.p_pointer-this.coords.p_single);break;case"from":this.coords.p_gap=this.toFixed(this.coords.p_pointer-this.coords.p_from),this.$cache.s_from.addClass("state_hover"),this.$cache.s_from.addClass("type_last"),this.$cache.s_to.removeClass("type_last");break;case"to":this.coords.p_gap=this.toFixed(this.coords.p_pointer-this.coords.p_to),this.$cache.s_to.addClass("state_hover"),this.$cache.s_to.addClass("type_last"),this.$cache.s_from.removeClass("type_last");break;case"both":this.coords.p_gap_left=this.toFixed(this.coords.p_pointer-this.coords.p_from),this.coords.p_gap_right=this.toFixed(this.coords.p_to-this.coords.p_pointer),this.$cache.s_to.removeClass("type_last"),this.$cache.s_from.removeClass("type_last")}a&&o("*").prop("unselectable",!0),this.$cache.line.trigger("focus")}},pointerClick:function(t,i){i.preventDefault();var s=i.pageX||i.originalEvent.touches&&i.originalEvent.touches[0].pageX;2!==i.button&&(this.current_plugin=this.plugin_count,this.target=t,this.is_click=!0,this.coords.x_gap=this.$cache.rs.offset().left,this.coords.x_pointer=+(s-this.coords.x_gap).toFixed(),this.force_redraw=!0,this.calc(),this.$cache.line.trigger("focus"))},key:function(t,i){if(!(this.current_plugin!==this.plugin_count||i.altKey||i.ctrlKey||i.shiftKey||i.metaKey)){switch(i.which){case 83:case 65:case 40:case 37:i.preventDefault(),this.moveByKey(!1);break;case 87:case 68:case 38:case 39:i.preventDefault(),this.moveByKey(!0)}return!0}},moveByKey:function(t){var i=this.coords.p_pointer;i=t?i+this.options.keyboard_step:i-this.options.keyboard_step;this.coords.x_pointer=this.toFixed(this.coords.w_rs/100*i),this.is_key=!0,this.calc()},setMinMax:function(){this.options&&(this.options.hide_min_max?(this.$cache.min[0].style.display="none",this.$cache.max[0].style.display="none"):(this.options.values.length?(this.$cache.min.html(this.decorate(this.options.p_values[this.options.min])),this.$cache.max.html(this.decorate(this.options.p_values[this.options.max]))):(this.$cache.min.html(this.decorate(this._prettify(this.options.min),this.options.min)),this.$cache.max.html(this.decorate(this._prettify(this.options.max),this.options.max))),this.labels.w_min=this.$cache.min.outerWidth(!1),this.labels.w_max=this.$cache.max.outerWidth(!1)))},calc:function(t){if(this.options&&(this.calc_count++,(10===this.calc_count||t)&&(this.calc_count=0,this.coords.w_rs=this.$cache.rs.outerWidth(!1),this.coords.w_handle="single"===this.options.type?this.$cache.s_single.outerWidth(!1):this.$cache.s_from.outerWidth(!1)),this.coords.w_rs)){this.calcPointer(),this.coords.p_handle=this.toFixed(this.coords.w_handle/this.coords.w_rs*100),t=100-this.coords.p_handle;var i=this.toFixed(this.coords.p_pointer-this.coords.p_gap);switch("click"===this.target&&(i=this.toFixed(this.coords.p_pointer-this.coords.p_handle/2),this.target=this.chooseHandle(i)),i<0?i=0:t<i&&(i=t),this.target){case"base":i=(this.options.max-this.options.min)/100,t=(this.result.from-this.options.min)/i,i=(this.result.to-this.options.min)/i,this.coords.p_single_real=this.toFixed(t),this.coords.p_from_real=this.toFixed(t),this.coords.p_to_real=this.toFixed(i),this.coords.p_single_real=this.checkDiapason(this.coords.p_single_real,this.options.from_min,this.options.from_max),this.coords.p_from_real=this.checkDiapason(this.coords.p_from_real,this.options.from_min,this.options.from_max),this.coords.p_to_real=this.checkDiapason(this.coords.p_to_real,this.options.to_min,this.options.to_max),this.coords.p_single=this.toFixed(t-this.coords.p_handle/100*t),this.coords.p_from=this.toFixed(t-this.coords.p_handle/100*t),this.coords.p_to=this.toFixed(i-this.coords.p_handle/100*i),this.target=null;break;case"single":if(this.options.from_fixed)break;this.coords.p_single_real=this.calcWithStep(i/t*100),this.coords.p_single_real=this.checkDiapason(this.coords.p_single_real,this.options.from_min,this.options.from_max),this.coords.p_single=this.toFixed(this.coords.p_single_real/100*t);break;case"from":if(this.options.from_fixed)break;this.coords.p_from_real=this.calcWithStep(i/t*100),this.coords.p_from_real>this.coords.p_to_real&&(this.coords.p_from_real=this.coords.p_to_real),this.coords.p_from_real=this.checkDiapason(this.coords.p_from_real,this.options.from_min,this.options.from_max),this.coords.p_from_real=this.checkMinInterval(this.coords.p_from_real,this.coords.p_to_real,"from"),this.coords.p_from_real=this.checkMaxInterval(this.coords.p_from_real,this.coords.p_to_real,"from"),this.coords.p_from=this.toFixed(this.coords.p_from_real/100*t);break;case"to":if(this.options.to_fixed)break;this.coords.p_to_real=this.calcWithStep(i/t*100),this.coords.p_to_real<this.coords.p_from_real&&(this.coords.p_to_real=this.coords.p_from_real),this.coords.p_to_real=this.checkDiapason(this.coords.p_to_real,this.options.to_min,this.options.to_max),this.coords.p_to_real=this.checkMinInterval(this.coords.p_to_real,this.coords.p_from_real,"to"),this.coords.p_to_real=this.checkMaxInterval(this.coords.p_to_real,this.coords.p_from_real,"to"),this.coords.p_to=this.toFixed(this.coords.p_to_real/100*t);break;case"both":i=this.toFixed(i+.1*this.coords.p_handle),this.coords.p_from_real=this.calcWithStep((i-this.coords.p_gap_left)/t*100),this.coords.p_from_real=this.checkDiapason(this.coords.p_from_real,this.options.from_min,this.options.from_max),this.coords.p_from_real=this.checkMinInterval(this.coords.p_from_real,this.coords.p_to_real,"from"),this.coords.p_from=this.toFixed(this.coords.p_from_real/100*t),this.coords.p_to_real=this.calcWithStep((i+this.coords.p_gap_right)/t*100),this.coords.p_to_real=this.checkDiapason(this.coords.p_to_real,this.options.to_min,this.options.to_max),this.coords.p_to_real=this.checkMinInterval(this.coords.p_to_real,this.coords.p_from_real,"to"),this.coords.p_to=this.toFixed(this.coords.p_to_real/100*t)}"single"===this.options.type?(this.coords.p_bar_x=this.coords.p_handle/2,this.coords.p_bar_w=this.coords.p_single,this.result.from_percent=this.coords.p_single_real,this.result.from=this.calcReal(this.coords.p_single_real),this.options.values.length&&(this.result.from_value=this.options.values[this.result.from])):(this.coords.p_bar_x=this.toFixed(this.coords.p_from+this.coords.p_handle/2),this.coords.p_bar_w=this.toFixed(this.coords.p_to-this.coords.p_from),this.result.from_percent=this.coords.p_from_real,this.result.from=this.calcReal(this.coords.p_from_real),this.result.to_percent=this.coords.p_to_real,this.result.to=this.calcReal(this.coords.p_to_real),this.options.values.length&&(this.result.from_value=this.options.values[this.result.from],this.result.to_value=this.options.values[this.result.to])),this.calcMinMax(),this.calcLabels()}},calcPointer:function(){this.coords.w_rs?(this.coords.x_pointer<0?this.coords.x_pointer=0:this.coords.x_pointer>this.coords.w_rs&&(this.coords.x_pointer=this.coords.w_rs),this.coords.p_pointer=this.toFixed(this.coords.x_pointer/this.coords.w_rs*100)):this.coords.p_pointer=0},chooseHandle:function(t){return"single"===this.options.type?"single":t>=this.coords.p_from_real+(this.coords.p_to_real-this.coords.p_from_real)/2?"to":"from"},calcMinMax:function(){this.coords.w_rs&&(this.labels.p_min=this.labels.w_min/this.coords.w_rs*100,this.labels.p_max=this.labels.w_max/this.coords.w_rs*100)},calcLabels:function(){this.coords.w_rs&&!this.options.hide_from_to&&("single"===this.options.type?(this.labels.w_single=this.$cache.single.outerWidth(!1),this.labels.p_single=this.labels.w_single/this.coords.w_rs*100,this.labels.p_single_left=this.coords.p_single+this.coords.p_handle/2-this.labels.p_single/2):(this.labels.w_from=this.$cache.from.outerWidth(!1),this.labels.p_from=this.labels.w_from/this.coords.w_rs*100,this.labels.p_from_left=this.coords.p_from+this.coords.p_handle/2-this.labels.p_from/2,this.labels.p_from_left=this.toFixed(this.labels.p_from_left),this.labels.p_from_left=this.checkEdges(this.labels.p_from_left,this.labels.p_from),this.labels.w_to=this.$cache.to.outerWidth(!1),this.labels.p_to=this.labels.w_to/this.coords.w_rs*100,this.labels.p_to_left=this.coords.p_to+this.coords.p_handle/2-this.labels.p_to/2,this.labels.p_to_left=this.toFixed(this.labels.p_to_left),this.labels.p_to_left=this.checkEdges(this.labels.p_to_left,this.labels.p_to),this.labels.w_single=this.$cache.single.outerWidth(!1),this.labels.p_single=this.labels.w_single/this.coords.w_rs*100,this.labels.p_single_left=(this.labels.p_from_left+this.labels.p_to_left+this.labels.p_to)/2-this.labels.p_single/2,this.labels.p_single_left=this.toFixed(this.labels.p_single_left)),this.labels.p_single_left=this.checkEdges(this.labels.p_single_left,this.labels.p_single))},updateScene:function(){this.options&&(this.drawHandles(),this.raf_id=requestAnimationFrame(this.updateScene.bind(this)))},drawHandles:function(){this.coords.w_rs=this.$cache.rs.outerWidth(!1),this.coords.w_rs&&(this.coords.w_rs!==this.coords.w_rs_old&&(this.target="base",this.is_resize=!0),(this.coords.w_rs!==this.coords.w_rs_old||this.force_redraw)&&(this.setMinMax(),this.calc(!0),this.drawLabels(),this.options.grid&&(this.calcGridMargin(),this.calcGridLabels()),this.force_redraw=!0,this.coords.w_rs_old=this.coords.w_rs,this.drawShadow()),this.coords.w_rs&&(this.dragging||this.force_redraw||this.is_key)&&((this.old_from!==this.result.from||this.old_to!==this.result.to||this.force_redraw||this.is_key)&&(this.drawLabels(),this.$cache.bar[0].style.left=this.coords.p_bar_x+"%",this.$cache.bar[0].style.width=this.coords.p_bar_w+"%","single"===this.options.type?(this.$cache.s_single[0].style.left=this.coords.p_single+"%",this.$cache.single[0].style.left=this.labels.p_single_left+"%",this.options.values.length?(this.$cache.input.prop("value",this.result.from_value),this.$cache.input.data("from",this.result.from_value)):(this.$cache.input.prop("value",this.result.from),this.$cache.input.data("from",this.result.from))):(this.$cache.s_from[0].style.left=this.coords.p_from+"%",this.$cache.s_to[0].style.left=this.coords.p_to+"%",(this.old_from!==this.result.from||this.force_redraw)&&(this.$cache.from[0].style.left=this.labels.p_from_left+"%"),(this.old_to!==this.result.to||this.force_redraw)&&(this.$cache.to[0].style.left=this.labels.p_to_left+"%"),this.$cache.single[0].style.left=this.labels.p_single_left+"%",this.options.values.length?(this.$cache.input.prop("value",this.result.from_value+";"+this.result.to_value),this.$cache.input.data("from",this.result.from_value),this.$cache.input.data("to",this.result.to_value)):(this.$cache.input.prop("value",this.result.from+";"+this.result.to),this.$cache.input.data("from",this.result.from),this.$cache.input.data("to",this.result.to))),this.old_from===this.result.from&&this.old_to===this.result.to||this.is_start||this.$cache.input.trigger("change"),this.old_from=this.result.from,this.old_to=this.result.to,!this.options.onChange||"function"!=typeof this.options.onChange||this.is_resize||this.is_update||this.is_start||this.options.onChange(this.result),this.options.onFinish&&"function"==typeof this.options.onFinish&&(this.is_key||this.is_click)&&this.options.onFinish(this.result),this.is_resize=this.is_update=!1),this.force_redraw=this.is_click=this.is_key=this.is_start=!1))},drawLabels:function(){if(this.options){var t,i=this.options.values.length,s=this.options.p_values;if(!this.options.hide_from_to)if("single"===this.options.type)i=i?this.decorate(s[this.result.from]):this.decorate(this._prettify(this.result.from),this.result.from),this.$cache.single.html(i),this.calcLabels(),this.$cache.min[0].style.visibility=this.labels.p_single_left<this.labels.p_min+1?"hidden":"visible",this.$cache.max[0].style.visibility=this.labels.p_single_left+this.labels.p_single>100-this.labels.p_max-1?"hidden":"visible";else{i?(this.options.decorate_both?(i=this.decorate(s[this.result.from]),i+=this.options.values_separator,i+=this.decorate(s[this.result.to])):i=this.decorate(s[this.result.from]+this.options.values_separator+s[this.result.to]),t=this.decorate(s[this.result.from]),s=this.decorate(s[this.result.to])):(this.options.decorate_both?(i=this.decorate(this._prettify(this.result.from)),i+=this.options.values_separator,i+=this.decorate(this._prettify(this.result.to))):i=this.decorate(this._prettify(this.result.from)+this.options.values_separator+this._prettify(this.result.to),this.result.from),t=this.decorate(this._prettify(this.result.from),this.result.from),s=this.decorate(this._prettify(this.result.to),this.result.to)),this.$cache.single.html(i),this.$cache.from.html(t),this.$cache.to.html(s),this.calcLabels(),s=Math.min(this.labels.p_single_left,this.labels.p_from_left),i=this.labels.p_single_left+this.labels.p_single,t=this.labels.p_to_left+this.labels.p_to;var o=Math.max(i,t);this.labels.p_from_left+this.labels.p_from>=this.labels.p_to_left?(this.$cache.from[0].style.visibility="hidden",this.$cache.to[0].style.visibility="hidden",this.$cache.single[0].style.visibility="visible",this.result.from===this.result.to?(this.$cache.from[0].style.visibility="visible",this.$cache.single[0].style.visibility="hidden",o=t):(this.$cache.from[0].style.visibility="hidden",this.$cache.single[0].style.visibility="visible",o=Math.max(i,t))):(this.$cache.from[0].style.visibility="visible",this.$cache.to[0].style.visibility="visible",this.$cache.single[0].style.visibility="hidden"),this.$cache.min[0].style.visibility=s<this.labels.p_min+1?"hidden":"visible",this.$cache.max[0].style.visibility=o>100-this.labels.p_max-1?"hidden":"visible"}}},drawShadow:function(){var t,i,s=this.options,o=this.$cache;"single"===s.type?s.from_shadow&&(s.from_min||s.from_max)?(t=this.calcPercent(s.from_min||s.min),i=this.calcPercent(s.from_max||s.max)-t,t=this.toFixed(t-this.coords.p_handle/100*t),i=this.toFixed(i-this.coords.p_handle/100*i),t+=this.coords.p_handle/2,o.shad_single[0].style.display="block",o.shad_single[0].style.left=t+"%",o.shad_single[0].style.width=i+"%"):o.shad_single[0].style.display="none":(s.from_shadow&&(s.from_min||s.from_max)?(t=this.calcPercent(s.from_min||s.min),i=this.calcPercent(s.from_max||s.max)-t,t=this.toFixed(t-this.coords.p_handle/100*t),i=this.toFixed(i-this.coords.p_handle/100*i),t+=this.coords.p_handle/2,o.shad_from[0].style.display="block",o.shad_from[0].style.left=t+"%",o.shad_from[0].style.width=i+"%"):o.shad_from[0].style.display="none",s.to_shadow&&(s.to_min||s.to_max)?(t=this.calcPercent(s.to_min||s.min),s=this.calcPercent(s.to_max||s.max)-t,t=this.toFixed(t-this.coords.p_handle/100*t),s=this.toFixed(s-this.coords.p_handle/100*s),t+=this.coords.p_handle/2,o.shad_to[0].style.display="block",o.shad_to[0].style.left=t+"%",o.shad_to[0].style.width=s+"%"):o.shad_to[0].style.display="none")},toggleInput:function(){this.$cache.input.toggleClass("irs-hidden-input")},calcPercent:function(t){return this.toFixed((t-this.options.min)/((this.options.max-this.options.min)/100))},calcReal:function(t){var i=this.options.min,s=this.options.max,o=0;return i<0&&(i+=o=Math.abs(i),s+=o),t=(s-i)/100*t+i,(i=this.options.step.toString().split(".")[1])?t=+t.toFixed(i.length):(t/=this.options.step,t=+(t*=this.options.step).toFixed(0)),o&&(t-=o),t<this.options.min?t=this.options.min:t>this.options.max&&(t=this.options.max),i?+t.toFixed(i.length):this.toFixed(t)},calcWithStep:function(t){var i=Math.round(t/this.coords.p_step)*this.coords.p_step;return 100<i&&(i=100),100===t&&(i=100),this.toFixed(i)},checkMinInterval:function(t,i,s){var o=this.options;return o.min_interval?(t=this.calcReal(t),i=this.calcReal(i),"from"===s?i-t<o.min_interval&&(t=i-o.min_interval):t-i<o.min_interval&&(t=i+o.min_interval),this.calcPercent(t)):t},checkMaxInterval:function(t,i,s){var o=this.options;return o.max_interval?(t=this.calcReal(t),i=this.calcReal(i),"from"===s?i-t>o.max_interval&&(t=i-o.max_interval):t-i>o.max_interval&&(t=i+o.max_interval),this.calcPercent(t)):t},checkDiapason:function(t,i,s){t=this.calcReal(t);var o=this.options;return i&&"number"==typeof i||(i=o.min),s&&"number"==typeof s||(s=o.max),t<i&&(t=i),s<t&&(t=s),this.calcPercent(t)},toFixed:function(t){return+(t=t.toFixed(5))},_prettify:function(t){return this.options.prettify_enabled?this.options.prettify&&"function"==typeof this.options.prettify?this.options.prettify(t):this.prettify(t):t},prettify:function(t){return t.toString().replace(/(\d{1,3}(?=(?:\d\d\d)+(?!\d)))/g,"$1"+this.options.prettify_separator)},checkEdges:function(t,i){return this.options.force_edges&&(t<0?t=0:100-i<t&&(t=100-i)),this.toFixed(t)},validate:function(){var t,i,s=this.options,o=this.result,e=s.values,h=e.length;if("string"==typeof s.min&&(s.min=+s.min),"string"==typeof s.max&&(s.max=+s.max),"string"==typeof s.from&&(s.from=+s.from),"string"==typeof s.to&&(s.to=+s.to),"string"==typeof s.step&&(s.step=+s.step),"string"==typeof s.from_min&&(s.from_min=+s.from_min),"string"==typeof s.from_max&&(s.from_max=+s.from_max),"string"==typeof s.to_min&&(s.to_min=+s.to_min),"string"==typeof s.to_max&&(s.to_max=+s.to_max),"string"==typeof s.keyboard_step&&(s.keyboard_step=+s.keyboard_step),"string"==typeof s.grid_num&&(s.grid_num=+s.grid_num),s.max<=s.min&&(s.max=s.min?2*s.min:s.min+1,s.step=1),h)for(s.p_values=[],s.min=0,s.max=h-1,s.step=1,s.grid_num=s.max,s.grid_snap=!0,i=0;i<h;i++)t=+e[i],isNaN(t)?t=e[i]:(e[i]=t,t=this._prettify(t)),s.p_values.push(t);("number"!=typeof s.from||isNaN(s.from))&&(s.from=s.min),("number"!=typeof s.to||isNaN(s.from))&&(s.to=s.max),(s.from<s.min||s.from>s.max)&&(s.from=s.min),(s.to>s.max||s.to<s.min)&&(s.to=s.max),"double"===s.type&&s.from>s.to&&(s.from=s.to),("number"!=typeof s.step||isNaN(s.step)||!s.step||s.step<0)&&(s.step=1),("number"!=typeof s.keyboard_step||isNaN(s.keyboard_step)||!s.keyboard_step||s.keyboard_step<0)&&(s.keyboard_step=5),s.from_min&&s.from<s.from_min&&(s.from=s.from_min),s.from_max&&s.from>s.from_max&&(s.from=s.from_max),s.to_min&&s.to<s.to_min&&(s.to=s.to_min),s.to_max&&s.from>s.to_max&&(s.to=s.to_max),o&&(o.min!==s.min&&(o.min=s.min),o.max!==s.max&&(o.max=s.max),(o.from<o.min||o.from>o.max)&&(o.from=s.from),(o.to<o.min||o.to>o.max)&&(o.to=s.to)),("number"!=typeof s.min_interval||isNaN(s.min_interval)||!s.min_interval||s.min_interval<0)&&(s.min_interval=0),("number"!=typeof s.max_interval||isNaN(s.max_interval)||!s.max_interval||s.max_interval<0)&&(s.max_interval=0),s.min_interval&&s.min_interval>s.max-s.min&&(s.min_interval=s.max-s.min),s.max_interval&&s.max_interval>s.max-s.min&&(s.max_interval=s.max-s.min)},decorate:function(t,i){var s="",o=this.options;return o.prefix&&(s+=o.prefix),s+=t,o.max_postfix&&(o.values.length&&t===o.p_values[o.max]?(s+=o.max_postfix,o.postfix&&(s+=" ")):i===o.max&&(s+=o.max_postfix,o.postfix&&(s+=" "))),o.postfix&&(s+=o.postfix),s},updateFrom:function(){this.result.from=this.options.from,this.result.from_percent=this.calcPercent(this.result.from),this.options.values&&(this.result.from_value=this.options.values[this.result.from])},updateTo:function(){this.result.to=this.options.to,this.result.to_percent=this.calcPercent(this.result.to),this.options.values&&(this.result.to_value=this.options.values[this.result.to])},updateResult:function(){this.result.min=this.options.min,this.result.max=this.options.max,this.updateFrom(),this.updateTo()},appendGrid:function(){if(this.options.grid){var t,i,s=this.options;t=s.max-s.min;var o,e,h=s.grid_num,r=0,a=0,n=4,c=0,l="";for(this.calcGridMargin(),s.grid_snap?(h=t/s.step,r=this.toFixed(s.step/(t/100))):r=this.toFixed(100/h),4<h&&(n=3),7<h&&(n=2),14<h&&(n=1),28<h&&(n=0),t=0;t<h+1;t++){for(o=n,100<(a=this.toFixed(r*t))&&(a=100,(o-=2)<0&&(o=0)),e=((this.coords.big[t]=a)-r*(t-1))/(o+1),i=1;i<=o&&0!==a;i++)l+='<span class="irs-grid-pol small" style="left: '+(c=this.toFixed(a-e*i))+'%"></span>';l+='<span class="irs-grid-pol" style="left: '+a+'%"></span>',c=this.calcReal(a),l+='<span class="irs-grid-text js-grid-text-'+t+'" style="left: '+a+'%">'+(c=s.values.length?s.p_values[c]:this._prettify(c))+"</span>"}this.coords.big_num=Math.ceil(h+1),this.$cache.cont.addClass("irs-with-grid"),this.$cache.grid.html(l),this.cacheGridLabels()}},cacheGridLabels:function(){var t,i,s=this.coords.big_num;for(i=0;i<s;i++)t=this.$cache.grid.find(".js-grid-text-"+i),this.$cache.grid_labels.push(t);this.calcGridLabels()},calcGridLabels:function(){var t,i;i=[];var s=[],o=this.coords.big_num;for(t=0;t<o;t++)this.coords.big_w[t]=this.$cache.grid_labels[t].outerWidth(!1),this.coords.big_p[t]=this.toFixed(this.coords.big_w[t]/this.coords.w_rs*100),this.coords.big_x[t]=this.toFixed(this.coords.big_p[t]/2),i[t]=this.toFixed(this.coords.big[t]-this.coords.big_x[t]),s[t]=this.toFixed(i[t]+this.coords.big_p[t]);for(this.options.force_edges&&(i[0]<this.coords.grid_gap&&(i[0]=this.coords.grid_gap,s[0]=this.toFixed(i[0]+this.coords.big_p[0]),this.coords.big_x[0]=this.coords.grid_gap),s[o-1]>100-this.coords.grid_gap&&(s[o-1]=100-this.coords.grid_gap,i[o-1]=this.toFixed(s[o-1]-this.coords.big_p[o-1]),this.coords.big_x[o-1]=this.toFixed(this.coords.big_p[o-1]-this.coords.grid_gap))),this.calcGridCollision(2,i,s),this.calcGridCollision(4,i,s),t=0;t<o;t++)(i=this.$cache.grid_labels[t][0]).style.marginLeft=-this.coords.big_x[t]+"%"},calcGridCollision:function(t,i,s){var o,e,h=this.coords.big_num;for(o=0;o<h&&!(h<=(e=o+t/2));o+=t)this.$cache.grid_labels[e][0].style.visibility=s[o]<=i[e]?"visible":"hidden"},calcGridMargin:function(){this.options.grid_margin&&(this.coords.w_rs=this.$cache.rs.outerWidth(!1),this.coords.w_rs&&(this.coords.w_handle="single"===this.options.type?this.$cache.s_single.outerWidth(!1):this.$cache.s_from.outerWidth(!1),this.coords.p_handle=this.toFixed(this.coords.w_handle/this.coords.w_rs*100),this.coords.grid_gap=this.toFixed(this.coords.p_handle/2-.1),this.$cache.grid[0].style.width=this.toFixed(100-this.coords.p_handle)+"%",this.$cache.grid[0].style.left=this.coords.grid_gap+"%"))},update:function(t){this.is_update=!0,this.options.from=this.result.from,this.options.to=this.result.to,this.options=o.extend(this.options,t),this.validate(),this.updateResult(t),this.toggleInput(),this.remove(),this.init(!0)},reset:function(){this.updateResult(),this.update()},destroy:function(){this.toggleInput(),this.$cache.input.prop("readonly",!1),o.data(this.input,"ionRangeSlider",null),this.remove(),this.options=this.input=null}},o.fn.ionRangeSlider=function(t){return this.each(function(){o.data(this,"ionRangeSlider")||o.data(this,"ionRangeSlider",new n(this,t,r++))})},function(){for(var e=0,t=["ms","moz","webkit","o"],i=0;i<t.length&&!h.requestAnimationFrame;++i)h.requestAnimationFrame=h[t[i]+"RequestAnimationFrame"],
h.cancelAnimationFrame=h[t[i]+"CancelAnimationFrame"]||h[t[i]+"CancelRequestAnimationFrame"];h.requestAnimationFrame||(h.requestAnimationFrame=function(t){var i=(new Date).getTime(),s=Math.max(0,16-(i-e)),o=h.setTimeout(function(){t(i+s)},s);return e=i+s,o}),h.cancelAnimationFrame||(h.cancelAnimationFrame=function(t){clearTimeout(t)})}()}(jQuery,document,window,navigator);