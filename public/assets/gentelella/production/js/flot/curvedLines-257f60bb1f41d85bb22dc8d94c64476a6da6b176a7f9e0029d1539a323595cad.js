!function(e){function n(e){function n(e,n){n.series.curvedLines.active&&e.hooks.processDatapoints.unshift(r)}function r(e,n,r){var i=r.points.length/r.pointsize,t=.005;if(!h(n.curvedLines)&&1==n.curvedLines.apply&&n.originSeries===undefined&&1+t<i)if(n.lines.fill){var o=v(r,n.curvedLines,1),s=v(r,n.curvedLines,2);r.pointsize=3,r.points=[];for(var u=0,p=0,a=0,f=2;a<o.length||u<s.length;)o[a]==s[u]?(r.points[p]=o[a],r.points[p+1]=o[a+1],r.points[p+2]=s[u+1],u+=f,a+=f):o[a]<s[u]?(r.points[p]=o[a],r.points[p+1]=o[a+1],r.points[p+2]=0<p?r.points[p-1]:null,a+=f):(r.points[p]=s[u],r.points[p+1]=1<p?r.points[p-2]:null,r.points[p+2]=s[u+1],u+=f),p+=3}else 0<n.lines.lineWidth&&(r.points=v(r,n.curvedLines,1),r.pointsize=2)}function v(e,n,r){if("undefined"!=typeof n.legacyOverride&&0!=n.legacyOverride){var i={fit:!1,curvePointFactor:20,fitPointDist:undefined};return o(e,jQuery.extend(i,n.legacyOverride),r)}return t(e,n,r)}function t(e,n,r){for(var i=e.points,t=e.pointsize,o=d(e,n,r),s=[],u=0,p=0;p<i.length-t;p+=t){var a=p,f=p+r,v=i[a],h=i[a+t],l=(h-v)/Number(n.nrSplinePoints);s.push(i[a]),s.push(i[f]);for(var c=v+=l;c<h;c+=l)s.push(c),s.push(o[u](c));u++}return s.push(i[i.length-t]),s.push(i[i.length-t+r]),s}function d(e,n,r){for(var i=e.points,t=e.pointsize,o=[],s=[],u=0;u<i.length-t;u+=t){var p=u+r,a=i[(y=u)+t]-i[y],f=i[p+t]-i[p];o.push(a),s.push(f/a)}var v=[s[0]];if(n.monotonicFit)for(u=1;u<o.length;u++){var h=s[u],l=s[u-1];if(h*l<=0)v.push(0);else{var c=o[u],d=o[u-1],g=c+d;v.push(3*g/((g+c)/l+(g+d)/h))}}else for(u=t;u<i.length-t;u+=t){var y=u;p=u+r;v.push(Number(n.tension)*(i[p+t]-i[p-t])/(i[y+t]-i[y-t]))}v.push(s[s.length-1]);var w=[],L=[];for(u=0;u<o.length;u++){var P=v[u],m=v[u+1],A=(h=s[u],1/o[u]);g=P+m-h-h;w.push(g*A*A),L.push((h-g-P)*A)}var z=[];for(u=0;u<o.length;u++){var b=function(i,t,o,s,u){return function(e){var n=e-i,r=n*n;return t*n*r+o*r+s*n+u}};z.push(b(i[u*t],w[u],L[u],v[u],i[u*t+r]))}return z}function o(e,n,r){var i=e.points,t=e.pointsize,o=Number(n.curvePointFactor)*(i.length/t),s=new Array,u=new Array,p=-1,a=-1,f=0;if(n.fit){var v;if("undefined"==typeof n.fitPointDist){var h=i[0];v=(i[i.length-t]-h)/5e4}else v=Number(n.fitPointDist);for(var l=0;l<i.length;l+=t){var c,d;a=(p=l)+r,c=i[p]-v,d=i[p]+v;for(var g=2;c==i[p]||d==i[p];)c=i[p]-v*g,d=i[p]+v*g,g++;s[f]=c,u[f]=i[a],s[++f]=i[p],u[f]=i[a],s[++f]=d,u[f]=i[a],f++}}else for(l=0;l<i.length;l+=t)a=(p=l)+r,s[f]=i[p],u[f]=i[a],f++;var y=s.length,w=new Array,L=new Array;w[0]=0,L[w[y-1]=0]=0;for(l=1;l<y-1;++l){var P=s[l+1]-s[l-1];if(0==P)return[];var m=(s[l]-s[l-1])/P,A=m*w[l-1]+2;w[l]=(m-1)/A,L[l]=(u[l+1]-u[l])/(s[l+1]-s[l])-(u[l]-u[l-1])/(s[l]-s[l-1]),L[l]=(6*L[l]/(s[l+1]-s[l-1])-m*L[l-1])/A}for(f=y-2;0<=f;--f)w[f]=w[f]*w[f+1]+L[f];var z=(s[y-1]-s[0])/(o-1),b=new Array,D=new Array,F=new Array;for(b[0]=s[0],D[0]=u[0],F.push(b[0]),F.push(D[0]),f=1;f<o;++f){b[f]=b[0]+f*z;for(var O=y-1,N=0;1<O-N;){var j=Math.round((O+N)/2);s[j]>b[f]?O=j:N=j}var k=s[O]-s[N];if(0==k)return[];var S=(s[O]-b[f])/k,C=(b[f]-s[N])/k;D[f]=S*u[N]+C*u[O]+((S*S*S-S)*w[N]+(C*C*C-C)*w[O])*(k*k)/6,F.push(b[f]),F.push(D[f])}return F}function h(e){if("undefined"!=typeof e.fit||"undefined"!=typeof e.curvePointFactor||"undefined"!=typeof e.fitPointDist)throw new Error("CurvedLines detected illegal parameters. The CurvedLines API changed with version 1.0.0 please check the options object.");return!1}e.hooks.processOptions.push(n)}var r={series:{curvedLines:{active:!1,apply:!1,monotonicFit:!1,tension:.5,nrSplinePoints:20,legacyOverride:undefined}}};e.plot.plugins.push({init:n,options:r,name:"curvedLines",version:"1.1.1"})}(jQuery);