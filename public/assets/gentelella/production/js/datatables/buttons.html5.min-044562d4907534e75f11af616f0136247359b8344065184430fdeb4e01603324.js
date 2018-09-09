!function(o){"function"==typeof define&&define.amd?define(["jquery","datatables.net","datatables.net-buttons"],function(e){return o(e,window,document)}):"object"==typeof exports?module.exports=function(e,t){return e||(e=window),t&&t.fn.dataTable||(t=require("datatables.net")(e,t).$),t.fn.dataTable.Buttons||require("datatables.net-buttons")(e,t),o(t,e,e.document)}:o(jQuery,window,document)}(function(l,u,c,m){var s,e=l.fn.dataTable;if("undefined"!=typeof navigator&&/MSIE [1-9]\./.test(navigator.userAgent))s=void 0;else{var d=u.document,h=d.createElementNS("http://www.w3.org/1999/xhtml","a"),x="download"in h,b=u.webkitRequestFileSystem,y=u.requestFileSystem||b||u.mozRequestFileSystem,i=function(e){(u.setImmediate||u.setTimeout)(function(){throw e},0)},w=0,g=function(e){var t=function(){"string"==typeof e?(u.URL||u.webkitURL||u).revokeObjectURL(e):e.remove()};u.chrome?t():setTimeout(t,500)},v=function(e,t,o){for(var n=(t=[].concat(t)).length;n--;){var r=e["on"+t[n]];if("function"==typeof r)try{r.call(e,o||e)}catch(a){i(a)}}},k=function(e){return/^\s*(?:text\/\S*|application\/xml|\S*\/\S*\+xml)\s*;.*charset\s*=\s*utf-8/i.test(e.type)?new Blob(["\xef\xbb\xbf",e],{type:e.type}):e},o=function(n,o){n=k(n);var e,r,t,a=this,i=n.type,s=!1,l=function(){v(a,["writestart","progress","write","writeend"])},c=function(){!s&&e||(e=(u.URL||u.webkitURL||u).createObjectURL(n)),r?r.location.href=e:u.open(e,"_blank")===m&&"undefined"!=typeof safari&&(u.location.href=e),a.readyState=a.DONE,l(),g(e)},p=function(e){return function(){if(a.readyState!==a.DONE)return e.apply(this,arguments)}},f={create:!0,exclusive:!1};a.readyState=a.INIT,o||(o="download"),x?(e=(u.URL||u.webkitURL||u).createObjectURL(n),h.href=e,h.download=o,(i=d.createEvent("MouseEvents")).initMouseEvent("click",!0,!1,u,0,0,0,0,0,!1,!1,!1,!1,0,null),h.dispatchEvent(i),a.readyState=a.DONE,l(),g(e)):(u.chrome&&i&&"application/octet-stream"!==i&&(t=n.slice||n.webkitSlice,n=t.call(n,0,n.size,"application/octet-stream"),s=!0),b&&"download"!==o&&(o+=".download"),("application/octet-stream"===i||b)&&(r=u),y?(w+=n.size,y(u.TEMPORARY,w,p(function(e){e.root.getDirectory("saved",f,p(function(e){var t=function(){e.getFile(o,f,p(function(o){o.createWriter(p(function(t){t.onwriteend=function(e){r.location.href=o.toURL(),a.readyState=a.DONE,v(a,"writeend",e),g(o)},t.onerror=function(){var e=t.error;e.code!==e.ABORT_ERR&&c()},["writestart","progress","write","abort"].forEach(function(e){t["on"+e]=a["on"+e]}),t.write(n),a.abort=function(){t.abort(),a.readyState=a.DONE},a.readyState=a.WRITING}),c)}),c)};e.getFile(o,{create:!1},p(function(e){e.remove(),t()}),p(function(e){e.code===e.NOT_FOUND_ERR?t():c()}))}),c)}),c)):c())},t=o.prototype;"undefined"!=typeof navigator&&navigator.msSaveOrOpenBlob?s=function(e,t){return navigator.msSaveOrOpenBlob(k(e),t)}:(t.abort=function(){this.readyState=this.DONE,v(this,"abort")},t.readyState=t.INIT=0,t.WRITING=1,t.DONE=2,t.error=t.onwritestart=t.onprogress=t.onwrite=t.onabort=t.onerror=t.onwriteend=null,s=function(e,t){return new o(e,t)})}var p=function(e,t){var o="*"===e.filename&&"*"!==e.title&&e.title!==m?e.title:e.filename;return"function"==typeof o&&(o=o()),-1!==o.indexOf("*")&&(o=o.replace("*",l("title").text())),o=o.replace(/[^a-zA-Z0-9_\u00A1-\uFFFF\.,\-_ !\(\)]/g,""),t===m||!0===t?o+e.extension:o},f=function(e){var t="Sheet1";return e.sheetName&&(t=e.sheetName.replace(/[\[\]\*\/\\\?\:]/g,"")),t},a=function(e){return"function"==typeof(e=e.title)&&(e=e()),-1!==e.indexOf("*")?e.replace("*",l("title").text()):e},S=function(e){return e.newline?e.newline:navigator.userAgent.match(/Windows/)?"\r\n":"\n"},T=function(e,t){for(var o=S(t),n=e.buttons.exportData(t.exportOptions),r=t.fieldBoundary,a=t.fieldSeparator,i=RegExp(r,"g"),s=t.escapeChar!==m?t.escapeChar:"\\",l=function(e){for(var t="",o=0,n=e.length;o<n;o++)0<o&&(t+=a),t+=r?r+(""+e[o]).replace(i,s+r)+r:e[o];return t},c=t.header?l(n.header)+o:"",p=t.footer&&n.footer?o+l(n.footer):"",f=[],u=0,d=n.body.length;u<d;u++)f.push(l(n.body[u]));return{str:c+f.join(o)+p,rows:f.length}},O=function(){return-1!==navigator.userAgent.indexOf("Safari")&&-1===navigator.userAgent.indexOf("Chrome")&&-1===navigator.userAgent.indexOf("Opera")},_={"_rels/.rels":'<?xml version="1.0" encoding="UTF-8" standalone="yes"?><Relationships xmlns="http://schemas.openxmlformats.org/package/2006/relationships">\t<Relationship Id="rId1" Type="http://schemas.openxmlformats.org/officeDocument/2006/relationships/officeDocument" Target="xl/workbook.xml"/></Relationships>',"xl/_rels/workbook.xml.rels":'<?xml version="1.0" encoding="UTF-8" standalone="yes"?><Relationships xmlns="http://schemas.openxmlformats.org/package/2006/relationships">\t<Relationship Id="rId1" Type="http://schemas.openxmlformats.org/officeDocument/2006/relationships/worksheet" Target="worksheets/sheet1.xml"/></Relationships>',"[Content_Types].xml":'<?xml version="1.0" encoding="UTF-8" standalone="yes"?><Types xmlns="http://schemas.openxmlformats.org/package/2006/content-types">\t<Default Extension="xml" ContentType="application/xml"/>\t<Default Extension="rels" ContentType="application/vnd.openxmlformats-package.relationships+xml"/>\t<Default Extension="jpeg" ContentType="image/jpeg"/>\t<Override PartName="/xl/workbook.xml" ContentType="application/vnd.openxmlformats-officedocument.spreadsheetml.sheet.main+xml"/>\t<Override PartName="/xl/worksheets/sheet1.xml" ContentType="application/vnd.openxmlformats-officedocument.spreadsheetml.worksheet+xml"/></Types>',"xl/workbook.xml":'<?xml version="1.0" encoding="UTF-8" standalone="yes"?><workbook xmlns="http://schemas.openxmlformats.org/spreadsheetml/2006/main" xmlns:r="http://schemas.openxmlformats.org/officeDocument/2006/relationships">\t<fileVersion appName="xl" lastEdited="5" lowestEdited="5" rupBuild="24816"/>\t<workbookPr showInkAnnotation="0" autoCompressPictures="0"/>\t<bookViews>\t\t<workbookView xWindow="0" yWindow="0" windowWidth="25600" windowHeight="19020" tabRatio="500"/>\t</bookViews>\t<sheets>\t\t<sheet name="__SHEET_NAME__" sheetId="1" r:id="rId1"/>\t</sheets></workbook>',"xl/worksheets/sheet1.xml":'<?xml version="1.0" encoding="UTF-8" standalone="yes"?><worksheet xmlns="http://schemas.openxmlformats.org/spreadsheetml/2006/main" xmlns:r="http://schemas.openxmlformats.org/officeDocument/2006/relationships" xmlns:mc="http://schemas.openxmlformats.org/markup-compatibility/2006" mc:Ignorable="x14ac" xmlns:x14ac="http://schemas.microsoft.com/office/spreadsheetml/2009/9/ac">\t<sheetData>\t\t__DATA__\t</sheetData></worksheet>'};return e.ext.buttons.copyHtml5={className:"buttons-copy buttons-html5",text:function(e){return e.i18n("buttons.copy","Copy")},action:function(e,t,o,n){var r=(e=T(t,n)).str;o=l("<div/>").css({height:1,width:1,overflow:"hidden",position:"fixed",top:0,left:0});if(n.customize&&(r=n.customize(r,n)),n=l("<textarea readonly/>").val(r).appendTo(o),c.queryCommandSupported("copy")){o.appendTo(t.table().container()),n[0].focus(),n[0].select();try{return c.execCommand("copy"),o.remove(),void t.buttons.info(t.i18n("buttons.copyTitle","Copy to clipboard"),t.i18n("buttons.copySuccess",{1:"Copied one row to clipboard",_:"Copied %d rows to clipboard"},e.rows),2e3)}catch(s){}}e=l("<span>"+t.i18n("buttons.copyKeys","Press <i>ctrl</i> or <i>\xe2\u0152\u02dc</i> + <i>C</i> to copy the table data<br>to your system clipboard.<br><br>To cancel, click this message or press escape.")+"</span>").append(o),t.buttons.info(t.i18n("buttons.copyTitle","Copy to clipboard"),e,0),n[0].focus(),n[0].select();var a=l(e).closest(".dt-button-info"),i=function(){a.off("click.buttons-copy"),l(c).off(".buttons-copy"),t.buttons.info(!1)};a.on("click.buttons-copy",i),l(c).on("keydown.buttons-copy",function(e){27===e.keyCode&&i()}).on("copy.buttons-copy cut.buttons-copy",function(){i()})},exportOptions:{},fieldSeparator:"\t",fieldBoundary:"",header:!0,footer:!1},e.ext.buttons.csvHtml5={className:"buttons-csv buttons-html5",available:function(){return u.FileReader!==m&&u.Blob},text:function(e){return e.i18n("buttons.csv","CSV")},action:function(e,t,o,n){S(n),e=T(t,n).str,t=n.charset,n.customize&&(e=n.customize(e,n)),!1!==t?(t||(t=c.characterSet||c.charset),t&&(t=";charset="+t)):t="",s(new Blob([e],{type:"text/csv"+t}),p(n))},filename:"*",extension:".csv",exportOptions:{},fieldSeparator:",",fieldBoundary:'"',escapeChar:'"',charset:null,header:!0,footer:!1},e.ext.buttons.excelHtml5={className:"buttons-excel buttons-html5",available:function(){return u.FileReader!==m&&u.JSZip!==m&&!O()},text:function(e){return e.i18n("buttons.excel","Excel")},action:function(e,t,o,n){e="",t=t.buttons.exportData(n.exportOptions),o=function(e){for(var t=[],o=0,n=e.length;o<n;o++)null!==e[o]&&e[o]!==m||(e[o]=""),t.push("number"==typeof e[o]||e[o].match&&l.trim(e[o]).match(/^-?\d+(\.\d+)?$/)&&"0"!==e[o].charAt(0)?'<c t="n"><v>'+e[o]+"</v></c>":'<c t="inlineStr"><is><t>'+(e[o].replace?e[o].replace(/&(?!amp;)/g,"&amp;").replace(/</g,"&lt;").replace(/>/g,"&gt;").replace(/[\x00-\x09\x0B\x0C\x0E-\x1F\x7F-\x9F]/g,""):e[o])+"</t></is></c>");return"<row>"+t.join("")+"</row>"},n.header&&(e+=o(t.header));for(var r=0,a=t.body.length;r<a;r++)e+=o(t.body[r]);n.footer&&(e+=o(t.footer));o=(t=new u.JSZip).folder("_rels"),r=t.folder("xl"),a=t.folder("xl/_rels");var i=t.folder("xl/worksheets");t.file("[Content_Types].xml",_["[Content_Types].xml"]),o.file(".rels",_["_rels/.rels"]),r.file("workbook.xml",_["xl/workbook.xml"].replace("__SHEET_NAME__",f(n))),a.file("workbook.xml.rels",_["xl/_rels/workbook.xml.rels"]),i.file("sheet1.xml",_["xl/worksheets/sheet1.xml"].replace("__DATA__",e)),s(t.generate({type:"blob",mimeType:"application/vnd.openxmlformats-officedocument.spreadsheetml.sheet"}),p(n))},filename:"*",extension:".xlsx",exportOptions:{},header:!0,footer:!1},e.ext.buttons.pdfHtml5={className:"buttons-pdf buttons-html5",available:function(){return u.FileReader!==m&&u.pdfMake},text:function(e){return e.i18n("buttons.pdf","PDF")},action:function(e,t,o,n){S(n),e=t.buttons.exportData(n.exportOptions),t=[],n.header&&t.push(l.map(e.header,function(e){return{text:"string"==typeof e?e:e+"",style:"tableHeader"}}));var r=0;for(o=e.body.length;r<o;r++)t.push(l.map(e.body[r],function(e){return{text:"string"==typeof e?e:e+"",style:r%2?"tableBodyEven":"tableBodyOdd"}}));n.footer&&t.push(l.map(e.footer,function(e){return{text:"string"==typeof e?e:e+"",style:"tableFooter"}})),e={pageSize:n.pageSize,pageOrientation:n.orientation,content:[{table:{headerRows:1,body:t},layout:"noBorders"}],styles:{tableHeader:{bold:!0,fontSize:11,color:"white",fillColor:"#2d4154",alignment:"center"},tableBodyEven:{},tableBodyOdd:{fillColor:"#f3f3f3"},tableFooter:{bold:!0,fontSize:11,color:"white",fillColor:"#2d4154"},title:{alignment:"center",fontSize:15},message:{}},defaultStyle:{fontSize:10}},n.message&&e.content.unshift({text:n.message,style:"message",margin:[0,0,0,12]}),n.title&&e.content.unshift({text:a(n,!1),style:"title",margin:[0,0,0,12]}),n.customize&&n.customize(e,n),e=u.pdfMake.createPdf(e),"open"!==n.download||O()?e.getBuffer(function(e){e=new Blob([e],{type:"application/pdf"}),s(e,p(n))}):e.open()},title:"*",filename:"*",extension:".pdf",exportOptions:{},orientation:"portrait",pageSize:"A4",header:!0,footer:!1,message:null,customize:null,download:"download"},e.Buttons});