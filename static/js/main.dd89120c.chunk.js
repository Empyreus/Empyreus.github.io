(this["webpackJsonpempyreus.github.io"]=this["webpackJsonpempyreus.github.io"]||[]).push([[0],{14:function(e,t,n){},15:function(e,t,n){},17:function(e,t,n){},18:function(e,t,n){"use strict";n.r(t);var o=n(0),r=n(1),i=n(8),a=n.n(i),c=(n(14),n(2)),s=n(3),l=n(5),u=n(4),h=n.p+"static/media/logo.2d27ead7.svg",d=(n(15),n(6)),p=n.n(d),f=(n(16),n(17),function(e){var t=e.dataUri,n=e.isFullscreen?"demo-image-preview-fullscreen":"";return Object(o.jsx)("div",{className:"demo-image-preview "+n,children:Object(o.jsx)("img",{src:t})})}),g=function(e){Object(l.a)(n,e);var t=Object(u.a)(n);function n(){var e;Object(c.a)(this,n);for(var o=arguments.length,r=new Array(o),i=0;i<o;i++)r[i]=arguments[i];return(e=t.call.apply(t,[this].concat(r))).state={photo:null,error:0},e.handleTakePhoto=function(t){console.log("takePhoto"),console.log(t),e.setState({photo:t})},e.handleCameraError=function(t){e.setState({error:1})},e}return Object(s.a)(n,[{key:"render",value:function(){var e=this,t=!0;return this.state.error?Object(o.jsx)("p",{children:"Bogged Camera"}):null===this.state.photo?Object(o.jsx)(p.a,{onTakePhoto:function(t){e.handleTakePhoto(t)},onCameraError:function(t){e.handleCameraError(t)},imageType:d.IMAGE_TYPES.JPG,isFullscreen:t}):null!==this.state.photo?Object(o.jsx)(o.Fragment,{children:this.state.photo?Object(o.jsx)(f,{dataUri:this.state.photo,isFullscreen:t}):Object(o.jsx)(p.a,{onTakePhotoAnimationDone:handleTakePhotoAnimationDone,isFullscreen:t})}):void 0}}]),n}(r.Component),j=function(e){Object(l.a)(n,e);var t=Object(u.a)(n);function n(){return Object(c.a)(this,n),t.apply(this,arguments)}return Object(s.a)(n,[{key:"render",value:function(){return Object(o.jsxs)("div",{className:"App",children:[Object(o.jsxs)("header",{className:"App-header",children:[Object(o.jsx)("img",{src:h,className:"App-logo",alt:"logo"}),Object(o.jsx)("h1",{className:"App-title",children:"Welcome to RJ Souza's Website"})]}),Object(o.jsx)(g,{}),Object(o.jsx)("p",{className:"App-intro",children:"Kyle and Martin's Test Camera"})]})}}]),n}(r.Component),m=Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));function v(e){navigator.serviceWorker.register(e).then((function(e){e.onupdatefound=function(){var t=e.installing;t.onstatechange=function(){"installed"===t.state&&(navigator.serviceWorker.controller?console.log("New content is available; please refresh."):console.log("Content is cached for offline use."))}}})).catch((function(e){console.error("Error during service worker registration:",e)}))}a.a.render(Object(o.jsx)(j,{}),document.getElementById("root")),function(){if("serviceWorker"in navigator){if(new URL("/empyreus.github.io",window.location).origin!==window.location.origin)return;window.addEventListener("load",(function(){var e="".concat("/empyreus.github.io","/service-worker.js");m?(!function(e){fetch(e).then((function(t){404===t.status||-1===t.headers.get("content-type").indexOf("javascript")?navigator.serviceWorker.ready.then((function(e){e.unregister().then((function(){window.location.reload()}))})):v(e)})).catch((function(){console.log("No internet connection found. App is running in offline mode.")}))}(e),navigator.serviceWorker.ready.then((function(){console.log("This web app is being served cache-first by a service worker. To learn more, visit https://goo.gl/SC7cgQ")}))):v(e)}))}}()}},[[18,1,2]]]);
//# sourceMappingURL=main.dd89120c.chunk.js.map