$(function(){"use strict";var s=window.console||{log:function(){}},o=$(".docs-alert"),a=o.find(".message"),u=function(e,t){a.text(e),t&&a.addClass(t),o.fadeIn(),setTimeout(function(){o.fadeOut()},3e3)};!function(){var n=$(".img-container > img"),t=$("#dataX"),o=$("#dataY"),a=$("#dataHeight"),r=$("#dataWidth"),i=$("#dataRotate"),c={aspectRatio:16/9,preview:".img-preview",crop:function(e){t.val(Math.round(e.x)),o.val(Math.round(e.y)),a.val(Math.round(e.height)),r.val(Math.round(e.width)),i.val(Math.round(e.rotate))}};n.on({"build.cropper":function(e){s.log(e.type)},"built.cropper":function(e){s.log(e.type)}}).cropper(c),$(document.body).on("click","[data-method]",function(){var e,t,o=$(this).data();if(o.method){if("undefined"!=typeof(o=$.extend({},o)).target&&(e=$(o.target),"undefined"==typeof o.option))try{o.option=JSON.parse(e.val())}catch(a){s.log(a.message)}if(t=n.cropper(o.method,o.option),"getDataURL"===o.method&&$("#getDataURLModal").modal().find(".modal-body").html('<img src="'+t+'">'),$.isPlainObject(t)&&e)try{e.val(JSON.stringify(t))}catch(a){s.log(a.message)}}}).on("keydown",function(e){switch(e.which){case 37:e.preventDefault(),n.cropper("move",-1,0);break;case 38:e.preventDefault(),n.cropper("move",0,-1);break;case 39:e.preventDefault(),n.cropper("move",1,0);break;case 40:e.preventDefault(),n.cropper("move",0,1)}});var p,d=$("#inputImage"),l=window.URL||window.webkitURL;l?d.change(function(){var e,t=this.files;t&&t.length&&(e=t[0],/^image\/\w+$/.test(e.type)?(p=l.createObjectURL(e),n.one("built.cropper",function(){l.revokeObjectURL(p)}).cropper("reset",!0).cropper("replace",p),d.val("")):u("Please choose an image file."))}):d.parent().remove(),$(".docs-options :checkbox").on("change",function(){var e=$(this);c[e.val()]=e.prop("checked"),n.cropper("destroy").cropper(c)}),$('[data-toggle="tooltip"]').tooltip()}()});