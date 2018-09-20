!function(de){function me(e){var t=document.createElement("input"),a="on"+e,i=a in t;return i||(t.setAttribute(a,"return;"),i="function"==typeof t[a]),t=null,i}function ve(e){var t="text"==e||"tel"==e;if(!t){var a=document.createElement("input");a.setAttribute("type",e),t="text"===a.type,a=null}return t}function o(e,t,a){var i=a.aliases[e];return!!i&&(i.alias&&o(i.alias,void 0,a),de.extend(!0,a,i),de.extend(!0,a,t),!0)}function s(_){function i(e){function t(e,t,a,i){this.matches=[],this.isGroup=e||!1,this.isOptional=t||!1,this.isQuantifier=a||!1,this.isAlternator=i||!1,this.quantifier={min:1,max:1}}function a(e,t,a){var i=_.definitions[t],n=0==e.matches.length;if(a=null!=a?a:e.matches.length,i&&!p){i.placeholder=de.isFunction(i.placeholder)?i.placeholder.call(this,_):i.placeholder;for(var r=i.prevalidator,o=r?r.length:0,s=1;s<i.cardinality;s++){var l=s<=o?r[s-1]:[],u=l.validator,c=l.cardinality;e.matches.splice(a++,0,{fn:u?"string"==typeof u?new RegExp(u):new function(){this.test=u}:new RegExp("."),cardinality:c||1,optionality:e.isOptional,newBlockMarker:n,casing:i.casing,def:i.definitionSymbol||t,placeholder:i.placeholder,mask:t})}e.matches.splice(a++,0,{fn:i.validator?"string"==typeof i.validator?new RegExp(i.validator):new function(){this.test=i.validator}:new RegExp("."),cardinality:i.cardinality,optionality:e.isOptional,newBlockMarker:n,casing:i.casing,def:i.definitionSymbol||t,placeholder:i.placeholder,mask:t})}else e.matches.splice(a++,0,{fn:null,cardinality:0,optionality:e.isOptional,newBlockMarker:n,casing:null,def:t,placeholder:void 0,mask:t}),p=!1}for(var i,n,r,o,s,l,u=/(?:[?*+]|\{[0-9\+\*]+(?:,[0-9\+\*]*)?\})\??|[^.?*+^${[]()|\\]+|./g,p=!1,c=new t,f=[],d=[];i=u.exec(e);)switch(n=i[0],n.charAt(0)){case _.optionalmarker.end:case _.groupmarker.end:if(r=f.pop(),0<f.length){if((o=f[f.length-1]).matches.push(r),o.isAlternator){s=f.pop();for(var m=0;m<s.matches.length;m++)s.matches[m].isGroup=!1;0<f.length?(o=f[f.length-1]).matches.push(s):c.matches.push(s)}}else c.matches.push(r);break;case _.optionalmarker.start:f.push(new t(!1,!0));break;case _.groupmarker.start:f.push(new t(!0));break;case _.quantifiermarker.start:var v=new t(!1,!1,!0),h=(n=n.replace(/[{}]/g,"")).split(","),k=isNaN(h[0])?h[0]:parseInt(h[0]),g=1==h.length?k:isNaN(h[1])?h[1]:parseInt(h[1]);if(("*"==g||"+"==g)&&(k="*"==g?0:1),v.quantifier={min:k,max:g},0<f.length){var b=f[f.length-1].matches;if(!(i=b.pop()).isGroup)(y=new t(!0)).matches.push(i),i=y;b.push(i),b.push(v)}else{var y;if(!(i=c.matches.pop()).isGroup)(y=new t(!0)).matches.push(i),i=y;c.matches.push(i),c.matches.push(v)}break;case _.escapeChar:p=!0;break;case _.alternatormarker:0<f.length?l=(o=f[f.length-1]).matches.pop():l=c.matches.pop(),l.isAlternator?f.push(l):((s=new t(!1,!1,!1,!0)).matches.push(l),f.push(s));break;default:if(0<f.length){if(0<(o=f[f.length-1]).matches.length&&((l=o.matches[o.matches.length-1]).isGroup&&(l.isGroup=!1,a(l,_.groupmarker.start,0),a(l,_.groupmarker.end))),a(o,n),o.isAlternator){s=f.pop();for(m=0;m<s.matches.length;m++)s.matches[m].isGroup=!1;0<f.length?(o=f[f.length-1]).matches.push(s):c.matches.push(s)}}else 0<c.matches.length&&((l=c.matches[c.matches.length-1]).isGroup&&(l.isGroup=!1,a(l,_.groupmarker.start,0),a(l,_.groupmarker.end))),a(c,n)}return 0<c.matches.length&&((l=c.matches[c.matches.length-1]).isGroup&&(l.isGroup=!1,a(l,_.groupmarker.start,0),a(l,_.groupmarker.end)),d.push(c)),d}function e(e,t){if(null!=e&&""!=e){if(1==e.length&&0==_.greedy&&0!=_.repeat&&(_.placeholder=""),0<_.repeat||"*"==_.repeat||"+"==_.repeat){var a="*"==_.repeat?0:"+"==_.repeat?1:_.repeat;e=_.groupmarker.start+e+_.groupmarker.end+_.quantifiermarker.start+a+","+_.repeat+_.quantifiermarker.end}return null==de.inputmask.masksCache[e]&&(de.inputmask.masksCache[e]={mask:e,maskToken:i(e),validPositions:{},_buffer:void 0,buffer:void 0,tests:{},metadata:t}),de.extend(!0,{},de.inputmask.masksCache[e])}}function a(e){if(e=e.toString(),_.numericInput){e=e.split("").reverse();for(var t=0;t<e.length;t++)e[t]==_.optionalmarker.start?e[t]=_.optionalmarker.end:e[t]==_.optionalmarker.end?e[t]=_.optionalmarker.start:e[t]==_.groupmarker.start?e[t]=_.groupmarker.end:e[t]==_.groupmarker.end&&(e[t]=_.groupmarker.start);e=e.join("")}return e}var t=void 0;if(de.isFunction(_.mask)&&(_.mask=_.mask.call(this,_)),de.isArray(_.mask)){if(1<_.mask.length){_.keepStatic=null==_.keepStatic||_.keepStatic;var n="(";return de.each(_.mask,function(e,t){1<n.length&&(n+=")|("),n+=a(null==t.mask||de.isFunction(t.mask)?t:t.mask)}),e(n+=")",_.mask)}_.mask=_.mask.pop()}return _.mask&&(t=null==_.mask.mask||de.isFunction(_.mask.mask)?e(a(_.mask),_.mask):e(a(_.mask.mask),_.mask)),t}function l(e,n,b){function t(e,t,a){t=t||0;var i,n,r,o=[],s=0;do{if(!0===e&&T().validPositions[s]){var l=T().validPositions[s];n=l.match,i=l.locator.slice(),o.push(!0===a?l.input:G(s,n))}else n=(r=f(s,i,s-1)).match,i=r.locator.slice(),o.push(G(s,n));s++}while((null==Z||s-1<Z)&&null!=n.fn||null==n.fn&&""!=n.def||s<=t);return o.pop(),o}function T(){return n}function y(e){var t=T();t.buffer=void 0,t.tests={},!0!==e&&(t._buffer=void 0,t.validPositions={},t.p=0)}function k(e){var t=-1,a=T().validPositions;null==e&&(e=-1);var i=t,n=t;for(var r in a){var o=parseInt(r);(-1==e||null!=a[o].match.fn)&&(o<=e&&(i=o),e<=o&&(n=o))}return-1!=i&&1<e-i||n<e?i:n}function _(e,t,a){if(b.insertMode&&null!=T().validPositions[e]&&null==a){var i,n=de.extend(!0,{},T().validPositions),r=k();for(i=e;i<=r;i++)delete T().validPositions[i];T().validPositions[e]=t;var o,s=!0;for(i=e;i<=r;i++){var l=n[i];if(null!=l){var u=T().validPositions;s=c(o=!b.keepStatic&&u[i]&&(null!=u[i+1]&&1<P(i+1,u[i].locator.slice(),i).length||null!=u[i].alternation)?i+1:w(i),l.match.def)?s&&!1!==x(o,l.input,!0,!0):null==l.match.fn}if(!s)break}if(!s)return T().validPositions=de.extend(!0,{},n),!1}else T().validPositions[e]=t;return!0}function v(e,t,a,i){var n,r=e;for(T().p=e,null!=T().validPositions[e]&&T().validPositions[e].input==b.radixPoint&&(t++,r++),n=r;n<t;n++)null!=T().validPositions[n]&&(!0===a||0!=b.canClearPosition(T(),n,k(),i,b))&&delete T().validPositions[n];for(y(!0),n=r+1;n<=k();){for(;null!=T().validPositions[r];)r++;var o=T().validPositions[r];n<r&&(n=r+1);var s=T().validPositions[n];null!=s&&null==o?(c(r,s.match.def)&&!1!==x(r,s.input,!0)&&(delete T().validPositions[n],n++),r++):n++}var l=k();e<=l&&null!=T().validPositions[l]&&T().validPositions[l].input==b.radixPoint&&delete T().validPositions[l],y(!0)}function f(e,t,a){for(var i,n=P(e,t,a),r=k(),o=T().validPositions[r]||P(0)[0],s=null!=o.alternation?o.locator[o.alternation].split(","):[],l=0;l<n.length&&!((i=n[l]).match&&(b.greedy&&!0!==i.match.optionalQuantifier||(!1===i.match.optionality||!1===i.match.newBlockMarker)&&!0!==i.match.optionalQuantifier)&&(null==o.alternation||null!=i.locator[o.alternation]&&g(i.locator[o.alternation].toString().split(","),s)));l++);return i}function a(e){return T().validPositions[e]?T().validPositions[e].match:P(e)[0].match}function c(e,t){for(var a=!1,i=P(e),n=0;n<i.length;n++)if(i[n].match&&i[n].match.def==t){a=!0;break}return a}function P(A,e,t){function w(E,C,e,t){function x(e,t,a){if(1e4<S)return alert("jquery.inputmask: There is probably an error in your mask definition or in the code. Create an issue on github with an example of the mask you are using. "+T().mask),!0;if(S==A&&null==e.matches)return O.push({match:e,locator:t.reverse()}),!0;if(null!=e.matches){if(e.isGroup&&!0!==a){if(e=x(E.matches[M+1],t))return!0}else if(e.isOptional){var i=e;if(e=w(e,C,t,a)){var n=O[O.length-1].match;0==de.inArray(n,i.matches)&&(j=!0),S=A}}else if(e.isAlternator){var r,o=e,s=[],l=O.slice(),u=t.length,c=0<C.length?C.shift():-1;if(-1==c||"string"==typeof c){var p,f=S,d=C.slice();"string"==typeof c&&(p=c.split(","));for(var m=0;m<o.matches.length;m++){O=[],e=x(o.matches[m],[m].concat(t),a)||e,r=O.slice(),S=f,O=[];for(var v=0;v<d.length;v++)C[v]=d[v];for(var h=0;h<r.length;h++)for(var k=r[h],g=0;g<s.length;g++){var b=s[g];if(k.match.mask==b.match.mask&&("string"!=typeof c||-1!=de.inArray(k.locator[u].toString(),p))){r.splice(h,1),b.locator[u]=b.locator[u]+","+k.locator[u],b.alternation=u;break}}s=s.concat(r)}"string"==typeof c&&(s=de.map(s,function(e,t){if(isFinite(t)){var a=e.locator[u].toString().split(",");e.locator[u]=void 0,e.alternation=void 0;for(var i=0;i<a.length;i++)-1!=de.inArray(a[i],p)&&(null!=e.locator[u]?(e.locator[u]+=",",e.alternation=u,e.locator[u]+=a[i]):e.locator[u]=parseInt(a[i]));if(null!=e.locator[u])return e}})),O=l.concat(s),j=!0}else e=x(o.matches[c],[c].concat(t),a);if(e)return!0}else if(e.isQuantifier&&!0!==a)for(var y=e,_=0<C.length&&!0!==a?C.shift():0;_<(isNaN(y.quantifier.max)?_+1:y.quantifier.max)&&S<=A;_++){var P=E.matches[de.inArray(y,E.matches)-1];if(e=x(P,[_].concat(t),!0)){if((n=O[O.length-1].match).optionalQuantifier=_>y.quantifier.min-1,0==de.inArray(n,P.matches)){if(_>y.quantifier.min-1){j=!0,S=A;break}return!0}return!0}}else if(e=w(e,C,t,a))return!0}else S++}for(var M=0<C.length?C.shift():0;M<E.matches.length;M++)if(!0!==E.matches[M].isQuantifier){var a=x(E.matches[M],[M].concat(e),t);if(a&&S==A)return a;if(A<S)break}}var a=T().maskToken,S=e?t:0,i=e||[0],O=[],j=!1;if(null==e){for(var n,r=A-1;null==(n=T().validPositions[r])&&-1<r;)r--;if(null!=n&&-1<r)S=r,i=n.locator.slice();else{for(r=A-1;null==(n=T().tests[r])&&-1<r;)r--;null!=n&&-1<r&&(S=r,i=n[0].locator.slice())}}for(var o=i.shift();o<a.length;o++){if(w(a[o],i,[o])&&S==A||A<S)break}return(0==O.length||j)&&O.push({match:{fn:null,cardinality:0,optionality:!0,casing:null,def:""},locator:[]}),T().tests[A]=de.extend(!0,[],O),T().tests[A]}function d(){return null==T()._buffer&&(T()._buffer=t(!1,1)),T()._buffer}function E(){return null==T().buffer&&(T().buffer=t(!0,k(),!0)),T().buffer}function C(e,t,a){if(a=a||E().slice(),!0===e)y(),e=0,t=a.length;else for(var i=e;i<t;i++)delete T().validPositions[i],delete T().tests[i];for(i=e;i<t;i++)a[i]!=b.skipOptionalPartCharacter&&x(i,a[i],!0,!0)}function h(e,t){switch(t.casing){case"upper":e=e.toUpperCase();break;case"lower":e=e.toLowerCase()}return e}function g(e,t){for(var a=b.greedy?t:t.slice(0,1),i=!1,n=0;n<e.length;n++)if(-1!=de.inArray(e[n],a)){i=!0;break}return i}function x(e,t,a,i){function n(u,c,p,f){var d=!1;return de.each(P(u),function(e,t){for(var a=t.match,i=c?1:0,n="",r=(E(),a.cardinality);i<r;r--)n+=O(u-(r-1));if(c&&(n+=c),!1!==(d=null!=a.fn?a.fn.test(n,T(),u,p,b):(c==a.def||c==b.skipOptionalPartCharacter)&&""!=a.def&&{c:a.def,pos:u})){var o=null!=d.c?d.c:c;o=o==b.skipOptionalPartCharacter&&null===a.fn?a.def:o;var s=u;if(null!=d.remove&&v(d.remove,d.remove+1,!0),d.refreshFromBuffer){var l=d.refreshFromBuffer;if(C((p=!0)===l?l:l.start,l.end),null==d.pos&&null==d.c)return d.pos=k(),!1;if((s=null!=d.pos?d.pos:u)!=u)return d=de.extend(d,x(s,o,!0)),!1}else if(!0!==d&&null!=d.pos&&d.pos!=u&&(s=d.pos,C(u,s),s!=u))return d=de.extend(d,x(s,o,!0)),!1;return 1!=d&&null==d.pos&&null==d.c||(0<e&&y(!0),_(s,de.extend({},t,{input:h(o,a)}),f)||(d=!1)),!1}}),d}function r(e,t,a,i){var n,r,o=de.extend(!0,{},T().validPositions);for(n=k();0<=n;n--)if(T().validPositions[n]&&null!=T().validPositions[n].alternation){r=T().validPositions[n].alternation;break}if(null!=r)for(var s in T().validPositions)if(parseInt(s)>parseInt(n)&&void 0===T().validPositions[s].alternation){for(var l=T().validPositions[s].locator[r],u=T().validPositions[n].locator[r].split(","),c=0;c<u.length;c++)if(l<u[c]){for(var p,f,d=s-1;0<=d;d--)if(null!=(p=T().validPositions[d])){f=p.locator[r],p.locator[r]=u[c];break}if(l!=p.locator[r]){for(var m=E().slice(),v=s;v<k()+1;v++)delete T().validPositions[v],delete T().tests[v];y(!0),b.keepStatic=!b.keepStatic;for(v=s;v<m.length;v++)m[v]!=b.skipOptionalPartCharacter&&x(k()+1,m[v],!1,!0);p.locator[r]=f;var h=x(e,t,a,i);if(b.keepStatic=!b.keepStatic,h)return h;y(),T().validPositions=de.extend(!0,{},o)}}break}return!1}function o(e,t){for(var i=T().validPositions[t].locator,n=i.length,a=e;a<t;a++)if(!M(a)){var r=P(a),o=r[0],s=-1;de.each(r,function(e,t){for(var a=0;a<n;a++)t.locator[a]&&g(t.locator[a].toString().split(","),i[a].toString().split(","))&&s<a&&(s=a,o=t)}),_(a,de.extend({},o,{input:o.match.def}),!0)}}a=!0===a;for(var s=E(),l=e-1;-1<l&&!T().validPositions[l];l--);for(l++;l<e;l++)null==T().validPositions[l]&&((!M(l)||s[l]!=G(l))&&1<P(l).length||s[l]==b.radixPoint||"0"==s[l]&&de.inArray(b.radixPoint,s)<l)&&n(l,s[l],!0);var u=e,c=!1,p=de.extend(!0,{},T().validPositions);if(u<A()&&(c=n(u,t,a,i),!a&&!1===c)){var f=T().validPositions[u];if(!f||null!=f.match.fn||f.match.def!=t&&t!=b.skipOptionalPartCharacter){if((b.insertMode||null==T().validPositions[w(u)])&&!M(u))for(var d=u+1,m=w(u);d<=m;d++)if(!1!==(c=n(d,t,a,i))){o(u,d),u=d;break}}else c={caret:w(u)}}if((!1===c&&b.keepStatic&&F(s)&&(c=r(e,t,a,i)),!0===c&&(c={pos:u}),de.isFunction(b.postValidation)&&0!=c&&!a)&&(y(!0),!b.postValidation(E(),b)))return y(!0),T().validPositions=de.extend(!0,{},p),!1;return c}function M(e){var t=a(e);return null!=t.fn&&t.fn}function A(){var e;-1==(Z=J.prop("maxLength"))&&(Z=void 0);var t,a=k(),i=T().validPositions[a],n=null!=i?i.locator.slice():void 0;for(t=a+1;null==i||null!=i.match.fn||null==i.match.fn&&""!=i.match.def;t++)n=(i=f(t,n,t-1)).locator.slice();return e=t,null==Z||e<Z?e:Z}function w(e){var t=A();if(t<=e)return t;for(var a=e;++a<t&&!M(a)&&(!0!==b.nojumps||b.nojumpsThreshold>a););return a}function S(e){var t=e;if(t<=0)return 0;for(;0<--t&&!M(t););return t}function O(e){return null==T().validPositions[e]?G(e):T().validPositions[e].input}function j(e,t,a,i,n){if(i&&de.isFunction(b.onBeforeWrite)){var r=b.onBeforeWrite.call(e,i,t,a,b);if(r){if(r.refreshFromBuffer){var o=r.refreshFromBuffer;C(!0===o?o:o.start,o.end,r.buffer),y(!0),t=E()}a=r.caret||a}}e._valueSet(t.join("")),null!=a&&D(e,a),!0===n&&(ee=!0,de(e).trigger("input"))}function G(e,t){return null!=(t=t||a(e)).placeholder?t.placeholder:null==t.fn?t.def:b.placeholder.charAt(e%b.placeholder.length)}function l(s,e,l,t){function u(){var e=!1,t=d().slice(p,w(p)).join("").indexOf(c);if(-1!=t&&!M(p)){e=!0;for(var a=d().slice(p,p+t),i=0;i<a.length;i++)if(" "!=a[i]){e=!1;break}}return e}var a=null!=t?t.slice():s._valueGet().split("");y(),T().p=w(-1),e&&s._valueSet("");var i=d().slice(0,w(-1)).join(""),n=a.join("").match(new RegExp(r(i),"g"));n&&0<n.length&&a.splice(0,i.length*n.length);var c="",p=0;de.each(a,function(e,t){var a=de.Event("keypress");a.which=t.charCodeAt(0),c+=t;var i=k(),n=T().validPositions[i],r=f(i+1,n?n.locator.slice():void 0,i);if(!u()||l){var o=l?e:null==r.match.fn&&r.match.optionality&&i+1<T().p?i+1:T().p;R.call(s,a,!0,!1,l,o),p=o+1,c=""}else R.call(s,a,!0,!1,!0,i+1)}),e&&j(s,E(),de(s).is(":focus")?w(k(0)):void 0,de.Event("checkval"))}function r(e){return de.inputmask.escapeRegex.call(this,e)}function i(e){if(e.data("_inputmask")&&!e.hasClass("hasDatepicker")){var t=[],a=T().validPositions;for(var i in a)a[i].match&&null!=a[i].match.fn&&t.push(a[i].input);var n=(Y?t.reverse():t).join(""),r=(Y?E().slice().reverse():E()).join("");return de.isFunction(b.onUnMask)&&(n=b.onUnMask.call(e,r,n,b)||n),n}return e[0]._valueGet()}function o(e){!Y||"number"!=typeof e||b.greedy&&""==b.placeholder||(e=E().length-e);return e}function D(e,t,a){var i,n=e.jquery&&0<e.length?e[0]:e;if("number"!=typeof t)return n.setSelectionRange?(t=n.selectionStart,a=n.selectionEnd):document.selection&&document.selection.createRange&&(a=(t=0-(i=document.selection.createRange()).duplicate().moveStart("character",-1e5))+i.text.length),{begin:o(t),end:o(a)};if(t=o(t),a="number"==typeof(a=o(a))?a:t,de(n).is(":visible")){var r=de(n).css("font-size").replace("px","")*a;n.scrollLeft=r>n.scrollWidth?r:0,0==b.insertMode&&t==a&&a++,n.setSelectionRange?(n.selectionStart=t,n.selectionEnd=a):n.createTextRange&&((i=n.createTextRange()).collapse(!0),i.moveEnd("character",a),i.moveStart("character",t),i.select())}}function s(e){var t,a,i=E(),n=i.length,r=k(),o={},s=T().validPositions[r],l=null!=s?s.locator.slice():void 0;for(t=r+1;t<i.length;t++)l=(a=f(t,l,t-1)).locator.slice(),o[t]=de.extend(!0,{},a);var u=s&&null!=s.alternation?s.locator[s.alternation].split(","):[];for(t=n-1;r<t&&(((a=o[t].match).optionality||a.optionalQuantifier||s&&null!=s.alternation&&null!=o[t].locator[s.alternation]&&-1!=de.inArray(o[t].locator[s.alternation].toString(),u))&&i[t]==G(t,a));t--)n--;return e?{l:n,def:o[n]?o[n].match:void 0}:n}function u(e){for(var t=s(),a=e.length-1;t<a&&!M(a);a--);e.splice(t,a+1-t)}function F(e){if(de.isFunction(b.isComplete))return b.isComplete.call(J,e,b);if("*"!=b.repeat){var t=!1,a=s(!0),i=S(a.l);if(k()==i&&(null==a.def||a.def.newBlockMarker||a.def.optionalQuantifier)){t=!0;for(var n=0;n<=i;n++){var r=M(n);if(r&&(null==e[n]||e[n]==G(n))||!r&&e[n]!=G(n)){t=!1;break}}}return t}}function B(e,t){return Y?1<e-t||e-t==1&&b.insertMode:1<t-e||t-e==1&&b.insertMode}function p(e){var t=de._data(e).events;de.each(t,function(e,t){de.each(t,function(e,t){if("inputmask"==t.namespace&&"setvalue"!=t.type){var a=t.handler;t.handler=function(e){if(!this.disabled&&(!this.readOnly||"keydown"==e.type&&e.ctrlKey&&67==e.keyCode)){switch(e.type){case"input":if(!0===ee)return ee=!1,e.preventDefault();break;case"keydown":X=!1;break;case"keypress":if(!0===X)return e.preventDefault();X=!0;break;case"compositionstart":break;case"compositionupdate":ee=!0}return a.apply(this,arguments)}e.preventDefault()}}})})}function m(t){function e(e){if(null==de.valHooks[e]||1!=de.valHooks[e].inputmaskpatch){var n=de.valHooks[e]&&de.valHooks[e].get?de.valHooks[e].get:function(e){return e.value},r=de.valHooks[e]&&de.valHooks[e].set?de.valHooks[e].set:function(e,t){return e.value=t,e};de.valHooks[e]={get:function(e){var t=de(e);if(t.data("_inputmask")){if(t.data("_inputmask").opts.autoUnmask)return t.inputmask("unmaskedvalue");var a=n(e),i=t.data("_inputmask").maskset._buffer;return a!=(i=i?i.join(""):"")?a:""}return n(e)},set:function(e,t){var a,i=de(e),n=i.data("_inputmask");return n?(a=r(e,de.isFunction(n.opts.onBeforeMask)&&n.opts.onBeforeMask.call(le,t,n.opts)||t),i.triggerHandler("setvalue.inputmask")):a=r(e,t),a},inputmaskpatch:!0}}}function a(){var e=de(this),t=de(this).data("_inputmask");return t?t.opts.autoUnmask?e.inputmask("unmaskedvalue"):r.call(this)!=d().join("")?r.call(this):"":r.call(this)}function i(e){var t=de(this).data("_inputmask");t?(o.call(this,de.isFunction(t.opts.onBeforeMask)&&t.opts.onBeforeMask.call(le,e,t.opts)||e),de(this).triggerHandler("setvalue.inputmask")):o.call(this,e)}function n(e){de(e).bind("mouseenter.inputmask",function(){var e=de(this),t=this._valueGet();""!=t&&t!=E().join("")&&(this._valueSet(de.isFunction(b.onBeforeMask)&&b.onBeforeMask.call(le,t,b)||t),e.triggerHandler("setvalue.inputmask"))});var t=de._data(e).events.mouseover;if(t){for(var a=t[t.length-1],i=t.length-1;0<i;i--)t[i]=t[i-1];t[0]=a}}var r,o;t._valueGet||(Object.getOwnPropertyDescriptor&&Object.getOwnPropertyDescriptor(t,"value"),document.__lookupGetter__&&t.__lookupGetter__("value")?(r=t.__lookupGetter__("value"),o=t.__lookupSetter__("value"),t.__defineGetter__("value",a),t.__defineSetter__("value",i)):(r=function(){return t.value},o=function(e){t.value=e},e(t.type),n(t)),t._valueGet=function(e){return Y&&!0!==e?r.call(this).split("").reverse().join(""):r.call(this)},t._valueSet=function(e){o.call(this,Y?e.split("").reverse().join(""):e)})}function I(i,e,t,a){function n(){if(b.keepStatic){y(!0);var e,t=[];for(e=k();0<=e;e--)if(T().validPositions[e]){if(null!=T().validPositions[e].alternation)break;t.push(T().validPositions[e].input),delete T().validPositions[e]}if(0<e)for(;0<t.length;){T().p=w(k());var a=de.Event("keypress");a.which=t.pop().charCodeAt(0),R.call(i,a,!0,!1,!1,T().p)}}}if((b.numericInput||Y)&&(e==de.inputmask.keyCode.BACKSPACE?e=de.inputmask.keyCode.DELETE:e==de.inputmask.keyCode.DELETE&&(e=de.inputmask.keyCode.BACKSPACE),Y)){var r=t.end;t.end=t.begin,t.begin=r}if(e==de.inputmask.keyCode.BACKSPACE&&(t.end-t.begin<1||0==b.insertMode)?t.begin=S(t.begin):e==de.inputmask.keyCode.DELETE&&t.begin==t.end&&t.end++,v(t.begin,t.end,!1,a),!0!==a){n();var o=k(t.begin);o<t.begin?(-1==o&&y(),T().p=w(o)):T().p=t.begin}}function K(t){var a=this,e=de(a),i=t.keyCode,n=D(a);i==de.inputmask.keyCode.BACKSPACE||i==de.inputmask.keyCode.DELETE||he&&127==i||t.ctrlKey&&88==i&&!me("cut")?(t.preventDefault(),88==i&&(Q=E().join("")),I(a,i,n),j(a,E(),T().p,t,Q!=E().join("")),a._valueGet()==d().join("")?e.trigger("cleared"):!0===F(E())&&e.trigger("complete"),b.showTooltip&&e.prop("title",T().mask)):i==de.inputmask.keyCode.END||i==de.inputmask.keyCode.PAGE_DOWN?setTimeout(function(){var e=w(k());b.insertMode||e!=A()||t.shiftKey||e--,D(a,t.shiftKey?n.begin:e,e)},0):i==de.inputmask.keyCode.HOME&&!t.shiftKey||i==de.inputmask.keyCode.PAGE_UP?D(a,0,t.shiftKey?n.begin:0):(b.undoOnEscape&&i==de.inputmask.keyCode.ESCAPE||90==i&&t.ctrlKey)&&!0!==t.altKey?(l(a,!0,!1,Q.split("")),e.click()):i!=de.inputmask.keyCode.INSERT||t.shiftKey||t.ctrlKey?0!=b.insertMode||t.shiftKey||(i==de.inputmask.keyCode.RIGHT?setTimeout(function(){var e=D(a);D(a,e.begin)},0):i==de.inputmask.keyCode.LEFT&&setTimeout(function(){var e=D(a);D(a,Y?e.begin+1:e.begin-1)},0)):(b.insertMode=!b.insertMode,D(a,b.insertMode||n.begin!=A()?n.begin:n.begin-1)),te=-1!=de.inArray(i,b.ignorables)}function R(e,t,a,i,n){var r=this,o=de(r),s=e.which||e.charCode||e.keyCode;if(!(!0===t||e.ctrlKey&&e.altKey)&&(e.ctrlKey||e.metaKey||te))return!0;if(s){46==s&&0==e.shiftKey&&","==b.radixPoint&&(s=44);var l,u=t?{begin:n,end:n}:D(r),c=String.fromCharCode(s),p=B(u.begin,u.end);p&&(T().undoPositions=de.extend(!0,{},T().validPositions),I(r,de.inputmask.keyCode.DELETE,u,!0),u.begin=T().p,b.insertMode||(b.insertMode=!b.insertMode,_(u.begin,i),b.insertMode=!b.insertMode),p=!b.multi),T().writeOutBuffer=!0;var f=Y&&!p?u.end:u.begin,d=x(f,c,i);if(!1!==d){if(!0!==d&&(f=null!=d.pos?d.pos:f,c=null!=d.c?d.c:c),y(!0),null!=d.caret)l=d.caret;else{var m=T().validPositions;l=!b.keepStatic&&(null!=m[f+1]&&1<P(f+1,m[f].locator.slice(),f).length||null!=m[f].alternation)?f+1:w(f)}T().p=l}if(!1!==a){var v=this;if(setTimeout(function(){b.onKeyValidation.call(v,d,b)},0),T().writeOutBuffer&&!1!==d){var h=E();j(r,h,t?void 0:b.numericInput?S(l):l,e,!0!==t),!0!==t&&setTimeout(function(){!0===F(h)&&o.trigger("complete")},0)}else p&&(T().buffer=void 0,T().validPositions=T().undoPositions)}else p&&(T().buffer=void 0,T().validPositions=T().undoPositions);if(b.showTooltip&&o.prop("title",T().mask),t&&de.isFunction(b.onBeforeWrite)){var k=b.onBeforeWrite.call(this,e,E(),l,b);if(k&&k.refreshFromBuffer){var g=k.refreshFromBuffer;C(!0===g?g:g.start,g.end,k.buffer),y(!0),k.caret&&(T().p=k.caret)}}e.preventDefault()}}function L(e){var t=(de(this),e.keyCode,E());b.onKeyUp.call(this,e,t,b)}function N(e){var t=this,a=de(t),i=t._valueGet(!0),n=D(t);if("propertychange"==e.type&&t._valueGet().length<=A())return!0;if("paste"==e.type){var r=i.substr(0,n.begin),o=i.substr(n.end,i.length);r==d().slice(0,n.begin).join("")&&(r=""),o==d().slice(n.end).join("")&&(o=""),window.clipboardData&&window.clipboardData.getData?i=r+window.clipboardData.getData("Text")+o:e.originalEvent&&e.originalEvent.clipboardData&&e.originalEvent.clipboardData.getData&&(i=r+e.originalEvent.clipboardData.getData("text/plain")+o)}var s=de.isFunction(b.onBeforePaste)&&b.onBeforePaste.call(t,i,b)||i;return l(t,!0,!1,Y?s.split("").reverse():s.split("")),a.click(),!0===F(E())&&a.trigger("complete"),!1}function H(e){var t=this;l(t,!0,!1),!0===F(E())&&de(t).trigger("complete"),e.preventDefault()}function U(e){var t=this;Q=E().join(""),(""==z||0!=e.originalEvent.data.indexOf(z))&&($=D(t))}function W(e){var t=this,a=$||D(t);0==e.originalEvent.data.indexOf(z)&&(y(),a={begin:0,end:0});var i=e.originalEvent.data;D(t,a.begin,a.end);for(var n=0;n<i.length;n++){var r=de.Event("keypress");r.which=i.charCodeAt(n),te=X=!1,R.call(t,r)}setTimeout(function(){var e=T().p;j(t,E(),b.numericInput?S(e):e)},0),z=e.originalEvent.data}function q(){}function V(e){if((J=de(e)).is(":input")&&ve(J.attr("type"))){if(J.data("_inputmask",{maskset:n,opts:b,isRTL:!1}),b.showTooltip&&J.prop("title",T().mask),("rtl"==e.dir||b.rightAlign)&&J.css("text-align","right"),"rtl"==e.dir||b.numericInput){e.dir="ltr",J.removeAttr("dir");var t=J.data("_inputmask");t.isRTL=!0,J.data("_inputmask",t),Y=!0}J.unbind(".inputmask"),J.closest("form").bind("submit",function(){Q!=E().join("")&&J.change(),J[0]._valueGet&&J[0]._valueGet()==d().join("")&&J[0]._valueSet(""),b.removeMaskOnSubmit&&J.inputmask("remove")}).bind("reset",function(){setTimeout(function(){J.triggerHandler("setvalue.inputmask")},0)}),J.bind("mouseenter.inputmask",function(){var e=this;!de(this).is(":focus")&&b.showMaskOnHover&&e._valueGet()!=E().join("")&&j(e,E())}).bind("blur.inputmask",function(e){var t=de(this),a=this;if(t.data("_inputmask")){var i=a._valueGet(),n=E().slice();ae=!0,Q!=n.join("")&&(t.change(),Q=n.join("")),""!=i&&(b.clearMaskOnLostFocus&&(i==d().join("")?n=[]:u(n)),!1===F(n)&&(t.trigger("incomplete"),b.clearIncomplete&&(y(),n=b.clearMaskOnLostFocus?[]:d().slice())),j(a,n,void 0,e))}}).bind("focus.inputmask",function(){var e=(de(this),this),t=e._valueGet();b.showMaskOnFocus&&(!b.showMaskOnHover||b.showMaskOnHover&&""==t)&&e._valueGet()!=E().join("")&&j(e,E(),w(k())),Q=E().join("")}).bind("mouseleave.inputmask",function(){var e=de(this),t=this;if(b.clearMaskOnLostFocus){var a=E().slice(),i=t._valueGet();e.is(":focus")||i==e.attr("placeholder")||""==i||(i==d().join("")?a=[]:u(a),j(t,a))}}).bind("click.inputmask",function(){var e=this;if(de(this).is(":focus")){var t=D(e);if(t.begin==t.end)if(b.radixFocus&&""!=b.radixPoint&&-1!=de.inArray(b.radixPoint,E())&&(ae||E().join("")==d().join("")))D(e,de.inArray(b.radixPoint,E())),ae=!1;else{var a=Y?o(t.begin):t.begin,i=w(k(a));D(e,a<i?M(a)?a:w(a):i)}}}).bind("dblclick.inputmask",function(){var e=this;setTimeout(function(){D(e,0,w(k()))},0)}).bind(ge+".inputmask dragdrop.inputmask drop.inputmask",N).bind("setvalue.inputmask",function(){var e=this;l(e,!0,!1),Q=E().join(""),(b.clearMaskOnLostFocus||b.clearIncomplete)&&e._valueGet()==d().join("")&&e._valueSet("")}).bind("cut.inputmask",function(e){ee=!0;var t=this,a=de(t),i=D(t);I(t,de.inputmask.keyCode.DELETE,i),j(t,E(),T().p,e,Q!=E().join("")),t._valueGet()==d().join("")&&a.trigger("cleared"),b.showTooltip&&a.prop("title",T().mask)}).bind("complete.inputmask",b.oncomplete).bind("incomplete.inputmask",b.onincomplete).bind("cleared.inputmask",b.oncleared),J.bind("keydown.inputmask",K).bind("keypress.inputmask",R).bind("keyup.inputmask",L),ke||J.bind("compositionstart.inputmask",U).bind("compositionupdate.inputmask",W).bind("compositionend.inputmask",q),"paste"===ge&&J.bind("input.inputmask",H),m(e),l(e,!0,!1,(de.isFunction(b.onBeforeMask)&&b.onBeforeMask.call(e,e._valueGet(),b)||e._valueGet()).split(""));var a,i=E().slice();Q=i.join("");try{a=document.activeElement}catch(v){}!1===F(i)&&b.clearIncomplete&&y(),b.clearMaskOnLostFocus&&(i.join("")==d().join("")?i=[]:u(i)),j(e,i),a===e&&D(e,w(k())),p(e)}}var Q,$,z,J,Z,Y=!1,X=!1,ee=!1,te=!1,ae=!0;if(null!=e)switch(e.action){case"isComplete":return J=de(e.el),n=J.data("_inputmask").maskset,b=J.data("_inputmask").opts,F(e.buffer);case"unmaskedvalue":return J=e.$input,n=J.data("_inputmask").maskset,b=J.data("_inputmask").opts,Y=e.$input.data("_inputmask").isRTL,i(e.$input);case"mask":Q=E().join(""),V(e.el);break;case"format":(J=de({})).data("_inputmask",{maskset:n,opts:b,isRTL:b.numericInput}),b.numericInput&&(Y=!0);var ie=(de.isFunction(b.onBeforeMask)&&b.onBeforeMask.call(J,e.value,b)||e.value).split("");return l(J,!1,!1,Y?ie.reverse():ie),de.isFunction(b.onBeforeWrite)&&b.onBeforeWrite.call(this,void 0,E(),0,b),e.metadata?{value:Y?E().slice().reverse().join(""):E().join(""),metadata:J.inputmask("getmetadata")}:Y?E().slice().reverse().join(""):E().join("");case"isValid":(J=de({})).data("_inputmask",{maskset:n,opts:b,isRTL:b.numericInput}),b.numericInput&&(Y=!0);ie=e.value.split("");l(J,!1,!0,Y?ie.reverse():ie);for(var ne=E(),re=s(),oe=ne.length-1;re<oe&&!M(oe);oe--);return ne.splice(re,oe+1-re),F(ne)&&e.value==ne.join("");case"getemptymask":return J=de(e.el),n=J.data("_inputmask").maskset,b=J.data("_inputmask").opts,d();case"remove":var se,le=e.el;J=de(le),n=J.data("_inputmask").maskset,b=J.data("_inputmask").opts,le._valueSet(i(J)),J.unbind(".inputmask"),J.removeData("_inputmask"),Object.getOwnPropertyDescriptor&&(se=Object.getOwnPropertyDescriptor(le,"value")),se&&se.get?le._valueGet&&Object.defineProperty(le,"value",{get:le._valueGet,set:le._valueSet}):document.__lookupGetter__&&le.__lookupGetter__("value")&&le._valueGet&&(le.__defineGetter__("value",le._valueGet),le.__defineSetter__("value",le._valueSet));try{delete le._valueGet,delete le._valueSet}catch(fe){le._valueGet=void 0,le._valueSet=void 0}break;case"getmetadata":if(J=de(e.el),n=J.data("_inputmask").maskset,b=J.data("_inputmask").opts,de.isArray(n.metadata)){for(var ue,ce=k(),pe=ce;0<=pe;pe--)if(T().validPositions[pe]&&null!=T().validPositions[pe].alternation){ue=T().validPositions[pe].alternation;break}return null!=ue?n.metadata[T().validPositions[ce].locator[ue]]:n.metadata[0]}return n.metadata}}if(void 0===de.fn.inputmask){var e=navigator.userAgent,he=null!==e.match(new RegExp("iphone","i")),ke=(e.match(new RegExp("android.*safari.*","i")),e.match(new RegExp("android.*chrome.*","i")),null!==e.match(new RegExp("android.*firefox.*","i"))),ge=(/Kindle/i.test(e)||/Silk/i.test(e)||/KFTT/i.test(e)||/KFOT/i.test(e)||/KFJWA/i.test(e)||/KFJWI/i.test(e)||/KFSOWI/i.test(e)||/KFTHWA/i.test(e)||/KFTHWI/i.test(e)||/KFAPWA/i.test(e)||/KFAPWI/i.test(e),me("paste")?"paste":me("input")?"input":"propertychange");de.inputmask={defaults:{placeholder:"_",optionalmarker:{start:"[",end:"]"},quantifiermarker:{start:"{",end:"}"},groupmarker:{start:"(",end:")"},alternatormarker:"|",escapeChar:"\\",mask:null,oncomplete:de.noop,onincomplete:de.noop,oncleared:de.noop,repeat:0,greedy:!0,autoUnmask:!1,removeMaskOnSubmit:!1,clearMaskOnLostFocus:!0,insertMode:!0,clearIncomplete:!1,aliases:{},alias:null,onKeyUp:de.noop,onBeforeMask:void 0,onBeforePaste:void 0,onBeforeWrite:void 0,onUnMask:void 0,showMaskOnFocus:!0,showMaskOnHover:!0,onKeyValidation:de.noop,skipOptionalPartCharacter:" ",showTooltip:!1,numericInput:!1,rightAlign:!1,undoOnEscape:!0,radixPoint:"",radixFocus:!1,nojumps:!1,nojumpsThreshold:0,keepStatic:void 0,definitions:{9:{validator:"[0-9]",cardinality:1,definitionSymbol:"*"},a:{validator:"[A-Za-z\u0410-\u044f\u0401\u0451\xc0-\xff\xb5]",cardinality:1,definitionSymbol:"*"},"*":{validator:"[0-9A-Za-z\u0410-\u044f\u0401\u0451\xc0-\xff\xb5]",cardinality:1}},ignorables:[8,9,13,19,27,33,34,35,36,37,38,39,40,45,46,93,112,113,114,115,116,117,118,119,120,121,122,123],isComplete:void 0,canClearPosition:de.noop,postValidation:void 0},keyCode:{ALT:18,BACKSPACE:8,CAPS_LOCK:20,COMMA:188,COMMAND:91,COMMAND_LEFT:91,COMMAND_RIGHT:93,CONTROL:17,DELETE:46,DOWN:40,END:35,ENTER:13,ESCAPE:27,HOME:36,INSERT:45,LEFT:37,MENU:93,NUMPAD_ADD:107,NUMPAD_DECIMAL:110,NUMPAD_DIVIDE:111,NUMPAD_ENTER:108,NUMPAD_MULTIPLY:106,NUMPAD_SUBTRACT:109,PAGE_DOWN:34,PAGE_UP:33,PERIOD:190,RIGHT:39,SHIFT:16,SPACE:32,TAB:9,UP:38,WINDOWS:91},masksCache:{},escapeRegex:function(e){var t=["/",".","*","+","?","|","(",")","[","]","{","}","\\","$","^"];return e.replace(new RegExp("(\\"+t.join("|\\")+")","gim"),"\\$1")},format:function(e,t,a){var i=de.extend(!0,{},de.inputmask.defaults,t);return o(i.alias,t,i),l({action:"format",value:e,metadata:a},s(i),i)},isValid:function(e,t){var a=de.extend(!0,{},de.inputmask.defaults,t);return o(a.alias,t,a),l({action:"isValid",value:e},s(a),a)}},de.fn.inputmask=function(e,i){function n(e,t,a){var i=de(e);for(var n in i.data("inputmask-alias")&&o(i.data("inputmask-alias"),{},t),t){var r=i.data("inputmask-"+n.toLowerCase());null!=r&&("mask"==n&&0==r.indexOf("[")?(t[n]=r.replace(/[\s[\]]/g,"").split("','"),t[n][0]=t[n][0].replace("'",""),t[n][t[n].length-1]=t[n][t[n].length-1].replace("'","")):t[n]="boolean"==typeof r?r:r.toString(),a&&(a[n]=t[n]))}return t}var t,r=de.extend(!0,{},de.inputmask.defaults,i);if("string"==typeof e)switch(e){case"mask":return o(r.alias,i,r),null==(t=s(r))?this:this.each(function(){l({action:"mask",el:this},de.extend(!0,{},t),n(this,r))});case"unmaskedvalue":var a=de(this);return a.data("_inputmask")?l({action:"unmaskedvalue",$input:a}):a.val();case"remove":return this.each(function(){de(this).data("_inputmask")&&l({action:"remove",el:this})});case"getemptymask":return this.data("_inputmask")?l({action:"getemptymask",el:this}):"";case"hasMaskedValue":return!!this.data("_inputmask")&&!this.data("_inputmask").opts.autoUnmask;case"isComplete":return!this.data("_inputmask")||l({action:"isComplete",buffer:this[0]._valueGet().split(""),el:this})
;case"getmetadata":return this.data("_inputmask")?l({action:"getmetadata",el:this}):void 0;default:return o(r.alias,i,r),o(e,i,r)||(r.mask=e),null==(t=s(r))?this:this.each(function(){l({action:"mask",el:this},de.extend(!0,{},t),n(this,r))})}else{if("object"==typeof e)return o((r=de.extend(!0,{},de.inputmask.defaults,e)).alias,e,r),null==(t=s(r))?this:this.each(function(){l({action:"mask",el:this},de.extend(!0,{},t),n(this,r))});if(null==e)return this.each(function(){var e=de(this).attr("data-inputmask");if(e&&""!=e)try{e=e.replace(new RegExp("'","g"),'"');var t=de.parseJSON("{"+e+"}");de.extend(!0,t,i),o((r=n(this,r=de.extend(!0,{},de.inputmask.defaults,t))).alias,t,r),r.alias=void 0,de(this).inputmask("mask",r)}catch(l){}if(de(this).attr("data-inputmask-mask")||de(this).attr("data-inputmask-alias")){var a={};o((r=n(this,r=de.extend(!0,{},de.inputmask.defaults,{}),a)).alias,a,r),r.alias=void 0,de(this).inputmask("mask",r)}})}}}de.fn.inputmask}(jQuery);