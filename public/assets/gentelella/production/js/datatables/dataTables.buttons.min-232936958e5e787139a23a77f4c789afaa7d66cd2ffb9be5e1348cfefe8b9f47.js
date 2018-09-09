!function(e){"function"==typeof define&&define.amd?define(["jquery","datatables.net"],function(t){return e(t,window,document)}):"object"==typeof exports?module.exports=function(t,n){return t||(t=window),n&&n.fn.dataTable||(n=require("datatables.net")(t,n).$),e(n,t,t.document)}:e(jQuery,window,document)}(function(h,a,u,l){var i,b=h.fn.dataTable,e=0,c=0,d=b.ext.buttons,f=function(t,n){!0===n&&(n={}),h.isArray(n)&&(n={buttons:n}),this.c=h.extend(!0,{},f.defaults,n),n.buttons&&(this.c.buttons=n.buttons),this.s={dt:new b.Api(t),buttons:[],subButtons:[],listenKeys:"",namespace:"dtb"+e++},this.dom={container:h("<"+this.c.dom.container.tag+"/>").addClass(this.c.dom.container.className)},this._constructor()};h.extend(f.prototype,{action:function(t,n){var e=this._indexToButton(t).conf;return n===l?e.action:(e.action=n,this)},active:function(t,n){var e=this._indexToButton(t),o=this.c.dom.button.active;return n===l?e.node.hasClass(o):(e.node.toggleClass(o,n===l||n),this)},add:function(t,n){if("string"==typeof t&&-1!==t.indexOf("-")){var e=t.split("-");this.c.buttons[1*e[0]].buttons.splice(1*e[1],0,n)}else this.c.buttons.splice(1*t,0,n);return this.dom.container.empty(),this._buildButtons(this.c.buttons),this},container:function(){return this.dom.container},disable:function(t){return this._indexToButton(t).node.addClass(this.c.dom.button.disabled),this},destroy:function(){h("body").off("keyup."+this.s.namespace);var t,n,e,o=this.s.buttons,i=this.s.subButtons;for(t=0,o=o.length;t<o;t++)for(this.removePrep(t),n=0,e=i[t].length;n<e;n++)this.removePrep(t+"-"+n);for(this.removeCommit(),this.dom.container.remove(),t=0,o=(i=this.s.dt.settings()[0]).length;t<o;t++)if(i.inst===this){i.splice(t,1);break}return this},enable:function(t,n){return!1===n?this.disable(t):(this._indexToButton(t).node.removeClass(this.c.dom.button.disabled),this)},name:function(){return this.c.name},node:function(t){return this._indexToButton(t).node},removeCommit:function(){var t,n,e=this.s.buttons,o=this.s.subButtons;for(t=e.length-1;0<=t;t--)null===e[t]&&(e.splice(t,1),o.splice(t,1),this.c.buttons.splice(t,1));for(t=0,e=o.length;t<e;t++)for(n=o[t].length-1;0<=n;n--)null===o[t][n]&&(o[t].splice(n,1),this.c.buttons[t].buttons.splice(n,1));return this},removePrep:function(t){var n,e=this.s.dt;if("number"==typeof t||-1===t.indexOf("-"))(n=this.s.buttons[1*t]).conf.destroy&&n.conf.destroy.call(e.button(t),e,n,n.conf),n.node.remove(),this._removeKey(n.conf),this.s.buttons[1*t]=null;else{var o=t.split("-");(n=this.s.subButtons[1*o[0]][1*o[1]]).conf.destroy&&n.conf.destroy.call(e.button(t),e,n,n.conf),n.node.remove(),this._removeKey(n.conf),this.s.subButtons[1*o[0]][1*o[1]]=null}return this},text:function(t,n){var e=this._indexToButton(t),o=this.c.dom.collection.buttonLiner,i=(o="string"==typeof t&&-1!==t.indexOf("-")&&o&&o.tag?o.tag:this.c.dom.buttonLiner.tag,this.s.dt),s=function(t){return"function"==typeof t?t(i,e.node,e.conf):t};return n===l?s(e.conf.text):(e.conf.text=n,o?e.node.children(o).html(s(n)):e.node.html(s(n)),this)},toIndex:function(t){var n,e,o,i;o=this.s.buttons;var s=this.s.subButtons;for(n=0,e=o.length;n<e;n++)if(o[n].node[0]===t)return n+"";for(n=0,e=s.length;n<e;n++)for(o=0,i=s[n].length;o<i;o++)if(s[n][o].node[0]===t)return n+"-"+o},_constructor:function(){var e=this,t=this.s.dt,n=t.settings()[0];n._buttons||(n._buttons=[]),n._buttons.push({inst:this,name:this.c.name}),this._buildButtons(this.c.buttons),t.on("destroy",function(){e.destroy()}),h("body").on("keyup."+this.s.namespace,function(t){if(!u.activeElement||u.activeElement===u.body){var n=String.fromCharCode(t.keyCode).toLowerCase();-1!==e.s.listenKeys.toLowerCase().indexOf(n)&&e._keypress(n,t)}})},_addKey:function(t){t.key&&(this.s.listenKeys+=h.isPlainObject(t.key)?t.key.key:t.key)},_buildButtons:function(t,n,e){var o=this.s.dt,i=0;n||(n=this.dom.container,this.s.buttons=[],this.s.subButtons=[]);for(var s=0,r=t.length;s<r;s++){var a=this._resolveExtends(t[s]);if(a)if(h.isArray(a))this._buildButtons(a,n,e);else{var u=this._buildButton(a,e!==l);if(u){var c=u.node;n.append(u.inserter),e===l?(this.s.buttons.push({node:c,conf:a,inserter:u.inserter}),this.s.subButtons.push([])):this.s.subButtons[e].push({node:c,conf:a,inserter:u.inserter}),a.buttons&&(u=this.c.dom.collection,a._collection=h("<"+u.tag+"/>").addClass(u.className),this._buildButtons(a.buttons,a._collection,i)),a.init&&a.init.call(o.button(c),o,c,a),i++}}}},_buildButton:function(n,t){var e=this.c.dom.button,o=this.c.dom.buttonLiner,i=this.c.dom.collection,s=this.s.dt,r=function(t){return"function"==typeof t?t(s,u,n):t};if(t&&i.button&&(e=i.button),t&&i.buttonLiner&&(o=i.buttonLiner),n.available&&!n.available(s,n))return!1;var a=function(t,n,e,o){o.action.call(n.button(e),t,n,e,o),h(n.table().node()).triggerHandler("buttons-action.dt",[n.button(e),n,e,o])},u=h("<"+e.tag+"/>").addClass(e.className).attr("tabindex",this.s.dt.settings()[0].iTabIndex).attr("aria-controls",this.s.dt.table().node().id).on("click.dtb",function(t){t.preventDefault(),!u.hasClass(e.disabled)&&n.action&&a(t,s,u,n),u.blur()}).on("keyup.dtb",function(t){13===t.keyCode&&!u.hasClass(e.disabled)&&n.action&&a(t,s,u,n)});return o.tag?u.append(h("<"+o.tag+"/>").html(r(n.text)).addClass(o.className)):u.html(r(n.text)),!1===n.enabled&&u.addClass(e.disabled),n.className&&u.addClass(n.className),n.titleAttr&&u.attr("title",n.titleAttr),n.namespace||(n.namespace=".dt-button-"+c++),o=(o=this.c.dom.buttonContainer)&&o.tag?h("<"+o.tag+"/>").addClass(o.className).append(u):u,this._addKey(n),{node:u,inserter:o}},_indexToButton:function(t){return"number"==typeof t||-1===t.indexOf("-")?this.s.buttons[1*t]:(t=t.split("-"),this.s.subButtons[1*t[0]][1*t[1]])},_keypress:function(e,o){var t,n,i,s;i=this.s.buttons;var r=this.s.subButtons,a=function(t,n){t.key&&(t.key===e?n.click():!h.isPlainObject(t.key)||t.key.key!==e||t.key.shiftKey&&!o.shiftKey||t.key.altKey&&!o.altKey||t.key.ctrlKey&&!o.ctrlKey||(!t.key.metaKey||o.metaKey)&&n.click())};for(t=0,n=i.length;t<n;t++)a(i[t].conf,i[t].node);for(t=0,n=r.length;t<n;t++)for(i=0,s=r[t].length;i<s;i++)a(r[t][i].conf,r[t][i].node)},_removeKey:function(t){if(t.key){var n=h.isPlainObject(t.key)?t.key.key:t.key;t=this.s.listenKeys.split(""),n=h.inArray(n,t);t.splice(n,1),this.s.listenKeys=t.join("")}},_resolveExtends:function(e){var t,n,o=this.s.dt,i=function(t){for(var n=0;!h.isPlainObject(t)&&!h.isArray(t);){if(t===l)return;if("function"==typeof t){if(!(t=t(o,e)))return!1}else if("string"==typeof t){if(!d[t])throw"Unknown button type: "+t;t=d[t]}if(30<++n)throw"Buttons: Too many iterations"}return h.isArray(t)?t:h.extend({},t)};for(e=i(e);e&&e.extend;){if(!d[e.extend])throw"Cannot extend unknown button type: "+e.extend;var s=i(d[e.extend]);if(h.isArray(s))return s;if(!s)return!1;t=s.className,e=h.extend({},s,e),t&&e.className!==t&&(e.className=t+" "+e.className);var r=e.postfixButtons;if(r){for(e.buttons||(e.buttons=[]),t=0,n=r.length;t<n;t++)e.buttons.push(r[t]);e.postfixButtons=null}if(r=e.prefixButtons){for(e.buttons||(e.buttons=[]),t=0,n=r.length;t<n;t++)e.buttons.splice(t,0,r[t]);e.prefixButtons=null}e.extend=s.extend}return e}}),f.background=function(t,n,e){e===l&&(e=400),t?h("<div/>").addClass(n).css("display","none").appendTo("body").fadeIn(e):h("body > div."+n).fadeOut(e,function(){h(this).remove()})},f.instanceSelector=function(t,o){if(!t)return h.map(o,function(t){return t.inst});var i=[],s=h.map(o,function(t){return t.name}),r=function(t){if(h.isArray(t))for(var n=0,e=t.length;n<e;n++)r(t[n]);else"string"==typeof t?-1!==t.indexOf(",")?r(t.split(",")):-1!==(t=h.inArray(h.trim(t),s))&&i.push(o[t].inst):"number"==typeof t&&i.push(o[t].inst)};return r(t),i},f.buttonSelector=function(t,n){for(var r=[],a=function(t,n){var e,o,i=[];if(h.each(n.s.buttons,function(t,n){null!==n&&i.push({node:n.node[0],name:n.conf.name})}),h.each(n.s.subButtons,function(t,n){h.each(n,function(t,n){null!==n&&i.push({node:n.node[0],name:n.conf.name})})}),e=h.map(i,function(t){return t.node}),h.isArray(t)||t instanceof h)for(e=0,o=t.length;e<o;e++)a(t[e],n);else if(null===t||t===l||"*"===t)for(e=0,o=i.length;e<o;e++)r.push({inst:n,idx:n.toIndex(i[e].node)});else if("number"==typeof t)r.push({inst:n,idx:t});else if("string"==typeof t)if(-1!==t.indexOf(",")){var s=t.split(",");for(e=0,o=s.length;e<o;e++)a(h.trim(s[e]),n)}else if(t.match(/^\d+(\-\d+)?$/))r.push({inst:n,idx:t});else if(-1!==t.indexOf(":name"))for(s=t.replace(":name",""),e=0,o=i.length;e<o;e++)i[e].name===s&&r.push({inst:n,idx:n.toIndex(i[e].node)});else h(e).filter(t).each(function(){r.push({inst:n,idx:n.toIndex(this)})});else"object"==typeof t&&t.nodeName&&(-1!==(o=h.inArray(t,e))&&r.push({inst:n,idx:n.toIndex(e[o])}))},e=0,o=t.length;e<o;e++)a(n,t[e]);return r},f.defaults={buttons:["copy","excel","csv","pdf","print"],name:"main",tabIndex:0,dom:{container:{tag:"div",className:"dt-buttons"},collection:{tag:"div",className:"dt-button-collection"},button:{tag:"a",className:"dt-button",active:"active",disabled:"disabled"},buttonLiner:{tag:"span",className:""}}},f.version="1.1.2",h.extend(d,{collection:{text:function(t){return t.i18n("buttons.collection","Collection")},className:"buttons-collection",action:function(t,n,e,o){t=e.offset();var i=h(n.table().container()),s=!1;h("div.dt-button-background").length&&(s=h("div.dt-button-collection").offset(),h(u).trigger("click.dtb-collection")),o._collection.addClass(o.collectionLayout).css("display","none").appendTo("body").fadeIn(o.fade);var r=o._collection.css("position");s&&"absolute"===r?o._collection.css({top:s.top+5,left:s.left+5}):"absolute"===r?(o._collection.css({top:t.top+e.outerHeight(),left:t.left}),e=t.left+o._collection.outerWidth(),(i=i.offset().left+i.width())<e&&o._collection.css("left",t.left-(e-i))):((t=o._collection.height()/2)>h(a).height()/2&&(t=h(a).height()/2),o._collection.css("marginTop",-1*t)),o.background&&f.background(!0,o.backgroundClassName,o.fade),setTimeout(function(){h("div.dt-button-background").on("click.dtb-collection",function(){}),h("body").on("click.dtb-collection",function(t){h(t.target).parents().andSelf().filter(o._collection).length||(o._collection.fadeOut(o.fade,function(){o._collection.detach()}),h("div.dt-button-background").off("click.dtb-collection"),f.background(!1,o.backgroundClassName,o.fade),h("body").off("click.dtb-collection"),n.off("buttons-action.b-internal"))})},10),o.autoClose&&n.on("buttons-action.b-internal",function(){h("div.dt-button-background").click()})},background:!0,collectionLayout:"",backgroundClassName:"dt-button-background",autoClose:!1,fade:400},copy:function(t,n){return d.copyHtml5?"copyHtml5":d.copyFlash&&d.copyFlash.available(t,n)?"copyFlash":void 0},csv:function(t,n){return d.csvHtml5&&d.csvHtml5.available(t,n)?"csvHtml5":d.csvFlash&&d.csvFlash.available(t,n)?"csvFlash":void 0},excel:function(t,n){return d.excelHtml5&&d.excelHtml5.available(t,n)?"excelHtml5":d.excelFlash&&d.excelFlash.available(t,n)?"excelFlash":void 0},pdf:function(t,n){return d.pdfHtml5&&d.pdfHtml5.available(t,n)?"pdfHtml5":d.pdfFlash&&d.pdfFlash.available(t,n)?"pdfFlash":void 0},pageLength:function(t){t=t.settings()[0].aLengthMenu;var n=h.isArray(t[0])?t[0]:t,e=h.isArray(t[0])?t[1]:t,i=function(t){return t.i18n("buttons.pageLength",{"-1":"Show all rows",_:"Show %d rows"},t.page.len())};return{extend:"collection",text:i,className:"buttons-page-length",autoClose:!0,buttons:h.map(n,function(i,t){return{text:e[t],action:function(t,n){n.page.len(i).draw()},init:function(t,n,e){var o=this;n=function(){o.active(t.page.len()===i)};t.on("length.dt"+e.namespace,n),n()},destroy:function(t,n,e){t.off("length.dt"+e.namespace)}}}),init:function(t,n,e){var o=this;t.on("length.dt"+e.namespace,function(){o.text(i(t))})},destroy:function(t,n,e){t.off("length.dt"+e.namespace)}}}}),b.Api.register("buttons()",function(n,e){return e===l&&(e=n,n=l),this.iterator(!0,"table",function(t){if(t._buttons)return f.buttonSelector(f.instanceSelector(n,t._buttons),e)},!0)}),b.Api.register("button()",function(t,n){var e=this.buttons(t,n);return 1<e.length&&e.splice(1,e.length),e}),b.Api.registerPlural("buttons().active()","button().active()",function(n){return n===l?this.map(function(t){return t.inst.active(t.idx)}):this.each(function(t){t.inst.active(t.idx,n)})}),b.Api.registerPlural("buttons().action()","button().action()",function(n){return n===l?this.map(function(t){return t.inst.action(t.idx)}):this.each(function(t){t.inst.action(t.idx,n)})}),b.Api.register(["buttons().enable()","button().enable()"],function(n){return this.each(function(t){t.inst.enable(t.idx,n)})}),b.Api.register(["buttons().disable()","button().disable()"],function(){return this.each(function(t){t.inst.disable(t.idx)})}),b.Api.registerPlural("buttons().nodes()","button().node()",function(){var n=h();return h(this.each(function(t){n=n.add(t.inst.node(t.idx))})),n}),b.Api.registerPlural("buttons().text()","button().text()",function(n){return n===l?this.map(function(t){return t.inst.text(t.idx)}):this.each(function(t){t.inst.text(t.idx,n)})}),b.Api.registerPlural("buttons().trigger()","button().trigger()",function(){return this.each(function(t){t.inst.node(t.idx).trigger("click")})}),b.Api.registerPlural("buttons().containers()","buttons().container()",function(){var n=h();return h(this.each(function(t){n=n.add(t.inst.container())})),n}),b.Api.register("button().add()",function(t,n){return 1===this.length&&this[0].inst.add(t,n),this.button(t)}),b.Api.register("buttons().destroy()",function(){return this.pluck("inst").unique().each(function(t){t.destroy()}),this}),b.Api.registerPlural("buttons().remove()","buttons().remove()",function(){return this.each(function(t){t.inst.removePrep(t.idx)}),this.pluck("inst").unique().each(function(t){t.removeCommit()}),this}),b.Api.register("buttons.info()",function(t,n,e){var o=this;return!1===t?(h("#datatables_buttons_info").fadeOut(function(){h(this).remove()}),clearTimeout(i),i=null):(i&&clearTimeout(i),h("#datatables_buttons_info").length&&h("#datatables_buttons_info").remove(),h('<div id="datatables_buttons_info" class="dt-button-info"/>').html(t?"<h2>"+t+"</h2>":"").append(h("<div/>")["string"==typeof n?"html":"append"](n)).css("display","none").appendTo("body").fadeIn(),e!==l&&0!==e&&(i=setTimeout(function(){o.buttons.info(!1)},e))),this}),b.Api.register("buttons.exportData()",function(t){if(this.context.length){for(var e=new b.Api(this.context[0]),o=h.extend(!0,{},{rows:null,columns:"",modifier:{search:"applied",order:"applied"},orthogonal:"display",stripHtml:!0,stripNewlines:!0,decodeEntities:!0,trim:!0,format:{header:function(t){return n(t)},footer:function(t){return n(t)},body:function(t){return n(t)}}},t),n=function(t){return"string"!=typeof t||(o.stripHtml&&(t=t.replace(/<.*?>/g,"")),o.trim&&(t=t.replace(/^\s+|\s+$/g,"")),o.stripNewlines&&(t=t.replace(/\n/g," ")),o.decodeEntities&&(p.innerHTML=t,t=p.value)),t},i=(t=e.columns(o.columns).indexes().map(function(t){return o.format.header(e.column(t).header().innerHTML,t)}).toArray(),e.table().footer()?e.columns(o.columns).indexes().map(function(t){var n=e.column(t).footer();return o.format.footer(n?n.innerHTML:"",t)}).toArray():null),s=e.rows(o.rows,o.modifier).indexes().toArray(),r=(s=e.cells(s,o.columns).render(o.orthogonal).toArray(),t.length),a=0<r?s.length/r:0,u=Array(a),c=0,l=0;l<a;l++){for(var d=Array(r),f=0;f<r;f++)d[f]=o.format.body(s[c],f,l),c++;u[l]=d}return{header:t,footer:i,body:u}}});var p=h("<textarea/>")[0];return h.fn.dataTable.Buttons=f,h.fn.DataTable.Buttons=f,h(u).on("init.dt plugin-init.dt",function(t,n){if("dt"===t.namespace){var e=n.oInit.buttons||b.defaults.buttons;e&&!n._buttons&&new f(n,e).container()}}),b.ext.feature.push({fnInit:function(t){var n=(t=new b.Api(t)).init().buttons||b.defaults.buttons;return new f(t,n).container()},cFeature:"B"}),f});