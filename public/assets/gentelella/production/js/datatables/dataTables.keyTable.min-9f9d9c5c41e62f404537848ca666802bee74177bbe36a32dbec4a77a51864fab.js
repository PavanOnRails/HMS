!function(s){"function"==typeof define&&define.amd?define(["jquery","datatables.net"],function(e){return s(e,window,document)}):"object"==typeof exports?module.exports=function(e,t){return e||(e=window),t&&t.fn.dataTable||(t=require("datatables.net")(e,t).$),s(t,e,e.document)}:s(jQuery,window,document)}(function(c,l,r,o){var i=c.fn.dataTable,a=function(e,t){if(!i.versionCheck||!i.versionCheck("1.10.8"))throw"KeyTable requires DataTables 1.10.8 or newer";this.c=c.extend(!0,{},i.defaults.keyTable,a.defaults,t),this.s={dt:new i.Api(e),enable:!0,focusDraw:!1},this.dom={};var s=this.s.dt.settings()[0],n=s.keytable;if(n)return n;(s.keytable=this)._constructor()};return c.extend(a.prototype,{blur:function(){this._blur()},enable:function(e){this.s.enable=e},focus:function(e,t){this._focus(this.s.dt.cell(e,t))},focused:function(e){if(!this.s.lastFocus)return!1;var t=this.s.lastFocus.index();return e.row===t.row&&e.column===t.column},_constructor:function(){this._tabInput();var a=this,t=this.s.dt,e=c(t.table().node());"static"===e.css("position")&&e.css("position","relative"),c(t.table().body()).on("click.keyTable","th, td",function(){if(!1!==a.s.enable){var e=t.cell(this);e.any()&&a._focus(e)}}),c(r).on("keydown.keyTable",function(e){a._key(e)}),this.c.blurable&&c(r).on("click.keyTable",function(e){c(e.target).parents(".dataTables_filter").length&&a._blur(),c(e.target).parents().filter(t.table().container()).length||c(e.target).parents("div.DTE").length||a._blur()}),this.c.editor&&t.on("key.keyTable",function(e,t,s,n,i){a._editor(s,i)}),t.settings()[0].oFeatures.bStateSave&&t.on("stateSaveParams.keyTable",function(e,t,s){s.keyTable=a.s.lastFocus?a.s.lastFocus.index():null}),t.on("xhr.keyTable",function(){if(!a.s.focusDraw){var e=a.s.lastFocus;e&&(a.s.lastFocus=null,t.one("draw",function(){a._focus(e)}))}}),t.on("destroy.keyTable",function(){t.off(".keyTable"),c(t.table().body()).off("click.keyTable","th, td"),c(r.body).off("keydown.keyTable").off("click.keyTable")});var s=t.state.loaded();s&&s.keyTable?t.one("init",function(){var e=t.cell(s.keyTable);e.any()&&e.focus()}):this.c.focus&&t.cell(this.c.focus).focus()},_blur:function(){if(this.s.enable&&this.s.lastFocus){var e=this.s.lastFocus;c(e.node()).removeClass(this.c.className),this.s.lastFocus=null,this._emitEvent("key-blur",[this.s.dt,e])}},_columns:function(){var e=this.s.dt,t=e.columns(this.c.columns).indexes(),s=[];return e.columns(":visible").every(function(e){-1!==t.indexOf(e)&&s.push(e)}),s},_editor:function(e,t){var s=this.s.dt,n=this.c.editor;t.stopPropagation(),n.inline(this.s.lastFocus.index());var i=c("div.DTE input, div.DTE textarea");i.length&&i[0].select(),s.keys.enable("navigation-only"),s.one("key-blur.editor",function(){n.displayed()&&n.submit()}),n.one("close",function(){s.keys.enable(!0),s.off("key-blur.editor")})},_emitEvent:function(t,s){this.s.dt.iterator("table",function(e){c(e.nTable).triggerHandler(t,s)})},_focus:function(e,t){var s=this,n=this.s.dt,i=n.page.info(),a=this.s.lastFocus;if(this.s.enable){if("number"!=typeof e){var o=e.index();t=o.column,e=n.rows({filter:"applied",order:"applied"}).indexes().indexOf(o.row);i.serverSide&&(e+=i.start)}if(-1!==i.length&&(e<i.start||e>=i.start+i.length))this.s.focusDraw=!0,n.one("draw",function(){s.s.focusDraw=!1,s._focus(e,t)}).page(Math.floor(e/i.length)).draw(!1);else if(-1!==c.inArray(t,this._columns())){if(i.serverSide&&(e-=i.start),i=n.cell(":eq("+e+")",t,{search:"applied"}),a){if(a.node()===i.node())return;this._blur()}(a=c(i.node())).addClass(this.c.className),this._scroll(c(l),c(r.body),a,"offset"),(o=n.table().body().parentNode)!==n.table().header().parentNode&&(o=c(o.parentNode),this._scroll(o,o,a,"position")),this.s.lastFocus=i,this._emitEvent("key-focus",[this.s.dt,i]),n.state.save()}}},_key:function(e){if(this.s.enable&&!(0===e.keyCode||e.ctrlKey||e.metaKey||e.altKey)){var t=this.s.lastFocus;if(t){var s=this,n=this.s.dt;if(!this.c.keys||-1!==c.inArray(e.keyCode,this.c.keys))switch(e.keyCode){case 9:this._shift(e,e.shiftKey?"left":"right",!0);break;case 27:this.s.blurable&&!0===this.s.enable&&this._blur();break;case 33:case 34:e.preventDefault();var i=n.cells({page:"current"}).nodes().indexOf(t.node());n.one("draw",function(){var e=n.cells({page:"current"}).nodes();s._focus(n.cell(i<e.length?e[i]:e[e.length-1]))}).page(33===e.keyCode?"previous":"next").draw(!1);break;case 35:case 36:e.preventDefault(),t=n.cells({page:"current"}).indexes(),this._focus(n.cell(t[35===e.keyCode?t.length-1:0]));break;case 37:this._shift(e,"left");break;case 38:this._shift(e,"up");break;case 39:this._shift(e,"right");break;case 40:this._shift(e,"down");break;default:!0===this.s.enable&&this._emitEvent("key",[n,e.keyCode,this.s.lastFocus,e])}}}},_scroll:function(e,t,s,n){n=s[n]();var i=s.outerHeight(),a=(s=s.outerWidth(),t.scrollTop()),o=t.scrollLeft(),l=e.height();e=e.width();n.top<a&&t.scrollTop(n.top),n.left<o&&t.scrollLeft(n.left),n.top+i>a+l&&t.scrollTop(n.top+i-l),n.left+s>o+e&&t.scrollLeft(n.left+s-e)},_shift:function(e,t,s){var n=this.s.dt,i=n.page.info(),a=i.recordsDisplay,o=this.s.lastFocus,l=this._columns();if(o){var r=n.rows({filter:"applied",order:"applied"}).indexes().indexOf(o.index().row);i.serverSide&&(r+=i.start),i=l[n=n.columns(l).indexes().indexOf(o.index().column)],"right"===t?n>=l.length-1?(r++,i=l[0]):i=l[n+1]:"left"===t?0===n?(r--,i=l[l.length-1]):i=l[n-1]:"up"===t?r--:"down"===t&&r++,0<=r&&r<a&&-1!==c.inArray(i,l)?(e.preventDefault(),this._focus(r,i)):s&&this.c.blurable?this._blur():e.preventDefault()}},_tabInput:function(){var e=this,t=this.s.dt,s=null!==this.c.tabIndex?this.c.tabIndex:t.settings()[0].iTabIndex;-1!=s&&c('<div><input type="text" tabindex="'+s+'"/></div>').css({position:"absolute",height:1,width:0,overflow:"hidden"}).insertBefore(t.table().node()).children().on("focus",function(){e._focus(t.cell(":eq(0)","0:visible",{page:"current"}))})}}),a.defaults={blurable:!0,className:"focus",columns:"",editor:null,focus:null,keys:null,tabIndex:null},a.version="2.1.1",c.fn.dataTable.KeyTable=a,c.fn.DataTable.KeyTable=a,i.Api.register("cell.blur()",function(){return this.iterator("table",function(e){e.keytable&&e.keytable.blur()})}),i.Api.register("cell().focus()",function(){return this.iterator("cell",function(e,t,s){e.keytable&&e.keytable.focus(t,s)})}),i.Api.register("keys.disable()",function(){return this.iterator("table",function(e){e.keytable&&e.keytable.enable(!1)})}),i.Api.register("keys.enable()",function(t){return this.iterator("table",function(e){e.keytable&&e.keytable.enable(t===o||t)})}),i.ext.selector.cell.push(function(e,t,s){t=t.focused;var n=[];if(!(e=e.keytable)||t===o)return s;for(var i=0,a=s.length;i<a;i++)(!0===t&&e.focused(s[i])||!1===t&&!e.focused(s[i]))&&n.push(s[i]);return n}),c(r).on("preInit.dt.dtk",function(e,t){if("dt"===e.namespace){var s=t.oInit.keys,n=i.defaults.keys;(s||n)&&(n=c.extend({},s,n),!1!==s&&new a(t,n))}}),a});