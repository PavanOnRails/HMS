var validator=function(i){function t(e,t){return"tel"==e&&(v=v||"phone"),e&&"password"!=e&&"tel"!=e&&"search"!=e&&"file"!=e||(e="text"),!s[e]||s[e](t,!0)}function a(e){(u=i(e)).data("valid",!0),u.data("type",u.attr("type")),v=u.attr("pattern")}function e(e){if(a(this),e.charCode)return t(this.type,this.value)}function n(){if("hidden"!=this.type&&i(this).is(":hidden"))return!0;if(a(this),u.data("val",u[0].value.replace(/^\s+|\s+$/g,"")),b=u.data(),g=l[u.prop("name")]||l.invalid,"select"===u[0].nodeName.toLowerCase()?b.type="select":"textarea"===u[0].nodeName.toLowerCase()&&(b.type="text"),m=b.validateWords||0,p=b.validateLengthRange?(b.validateLengthRange+"").split(","):[1],f=!!b.validateLength&&(b.validateLength+"").split(","),c=b.validateMinmax?(b.validateMinmax+"").split(","):"",b.valid=s.hasValue(b.val),u.hasClass("optional")&&!b.valid&&(b.valid=!0),"checkbox"===u[0].type)b.valid=u[0].checked,g=l.checked;else if(b.valid)if(s.sameAsPlaceholder(u)&&(g=l.empty,b.valid=!1),b.validateLinked){var e=0==b.validateLinked.indexOf("#")?i(b.validateLinked):i(":input[name="+b.validateLinked+"]");b.valid=s.linked(b.val,e.val())}else(b.valid||"select"==b.type)&&(b.valid=t(b.type,b.val));return b.valid?d(u):(o(u,g),submit=!1),b.valid}function r(e){if(0==(e=i(e)).length)return console.warn("element not found"),!1;var t=!0;return e.find(":input").filter("[required=required], .required, .optional").not("[disabled=disabled]").each(function(){t*=n.apply(this)}),!!t}var l,s,n,o,d,u,c,h,m,p,f,v,g,b,y=/[\(\)\<\>\,\;\:\\\/\"\[\]]/,k=/^.+@.+\..{2,6}$/;return l={invalid:"invalid input",checked:"must be checked",empty:"please put something here",min:"input is too short",max:"input is too long",number_min:"too low",number_max:"too high",url:"invalid URL",number:"not a number",email:"email address is invalid",email_repeat:"emails do not match",password_repeat:"passwords do not match",repeat:"no match",complete:"input is not complete",select:"Please select an option"},window.console||(console={},console.log=console.warn=function(){}),{defaults:h={alerts:!0,classes:{item:"item",alert:"alert",bad:"bad"}},checkField:n,keypress:e,checkAll:r,mark:o=function(e,t){if(!t||!e||!e.length)return!1;var a,n=e.closest("."+h.classes.item);n.hasClass(h.classes.bad)?h.alerts&&n.find("."+h.classes.alert).html(t):h.alerts&&(a=i('<div class="'+h.classes.alert+'">').html(t),n.append(a)),n.removeClass(h.classes.bad),setTimeout(function(){n.addClass(h.classes.bad)},0)},unmark:d=function(e){if(!e||!e.length)return console.warn('no "field" argument, null or DOM object not found'),!1;e.closest("."+h.classes.item).removeClass(h.classes.bad).find("."+h.classes.alert).remove()},message:l,tests:s={sameAsPlaceholder:function(e){return i.fn.placeholder&&e.attr("placeholder")!==undefined&&b.val==e.prop("placeholder")},hasValue:function(e){return!!e||(g=l.empty,!1)},linked:function(e,t){return t==e||(g=l[b.type+"_repeat"]||l.no_match,!1)},email:function(e){return!(!k.test(e)||e.match(y))||(g=e?l.email:l.empty,!1)},text:function(e,t){if(m){var a=e.split(" "),n=function(e){for(var t=a.length;t--;)if(a[t].length<e)return!1;return!0};return!(a.length<m||!n(2))||(g=l.complete,!1)}if(!t&&p&&e.length<p[0])return g=l.min,!1;if(p&&p[1]&&e.length>p[1])return g=l.max,!1;if(f&&f.length)for(;f.length;)if(f.pop()==e.length)return g=l.complete,!1;if(v){var i,r;switch(v){case"alphanumeric":i=/^[a-zA-Z0-9]+$/i;break;case"numeric":i=/^[0-9]+$/i;break;case"phone":i=/^\+?([0-9]|[-|' '])+$/i;break;default:i=v}try{if(r=new RegExp(i).test(e),e&&!r)return!1}catch(err){return console.log(err,u,"regex is invalid"),!1}}return!0},number:function(e){return isNaN(parseFloat(e))&&!isFinite(e)?(g=l.number,!1):p&&e.length<p[0]?(g=l.min,!1):p&&p[1]&&e.length>p[1]?(g=l.max,!1):c[0]&&(0|e)<c[0]?(g=l.number_min,!1):!(c[1]&&(0|e)>c[1])||(g=l.number_max,!1)},date:function(e){var t,a,n=e.split(/[-./]/g);if(u[0].valueAsNumber)return!0;for(a=n.length;a--;)if(isNaN(parseFloat(e))&&!isFinite(e))return!1;try{return(t=new Date(n[2],n[1]-1,n[0])).getMonth()+1==n[1]&&t.getDate()==n[0]&&t}catch(i){return console.log("date test: ",err),!1}},url:function(e){function t(e){return/^(https?:\/\/)?([\w\d\-_]+\.+[A-Za-z]{2,})+\/?/.test(e)}return!!t(e)||(g=e?l.url:l.empty,!1)},hidden:function(e){if(p&&e.length<p[0])return g=l.min,!1;if(v&&("alphanumeric"==v&&!/^[a-z0-9]+$/i.test(e)))return!1;return!0},select:function(e){return!!s.hasValue(e)||(g=l.select,!1)}}}}(jQuery);