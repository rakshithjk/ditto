(this["webpackJsonpopen-react-template"]=this["webpackJsonpopen-react-template"]||[]).push([[0],{23:function(e,t,a){e.exports=a(44)},33:function(e,t,a){e.exports=a.p+"static/media/logo.1dcdf725.svg"},34:function(e,t,a){e.exports=a.p+"static/media/feature-tile-icon-01.0f9928d7.svg"},35:function(e,t,a){e.exports=a.p+"static/media/feature-tile-icon-02.bd39f304.svg"},36:function(e,t,a){e.exports=a.p+"static/media/feature-tile-icon-03.66f37ba5.svg"},37:function(e,t,a){e.exports=a.p+"static/media/feature-tile-icon-04.836acd10.svg"},38:function(e,t,a){e.exports=a.p+"static/media/feature-tile-icon-05.fa9ba00b.svg"},39:function(e,t,a){e.exports=a.p+"static/media/feature-tile-icon-06.6a177696.svg"},40:function(e,t,a){e.exports=a.p+"static/media/features-split-image-01.3e274bbd.png"},41:function(e,t,a){e.exports=a.p+"static/media/features-split-image-02.5c8ee34b.png"},42:function(e,t,a){e.exports=a.p+"static/media/features-split-image-03.9552a203.png"},43:function(e,t,a){},44:function(e,t,a){"use strict";a.r(t);var r=a(0),i=a.n(r),n=a(20),l=a.n(n),s=a(10),o=a(7),c=a(2),m=function(e){var t=e.component,a=e.layout,r=Object(c.a)(e,["component","layout"]);return a=void 0===a?function(e){return i.a.createElement(i.a.Fragment,null,e.children)}:a,i.a.createElement(s.a,Object.assign({},r,{render:function(e){return i.a.createElement(a,null,i.a.createElement(t,e))}}))},d=a(11),u=a(4),v=a.n(u),h=a(16),p=i.a.forwardRef((function(e,t){var a=Object(r.useState)(window.innerHeight),n=Object(d.a)(a,2),l=n[0],s=n[1],o=Object(r.useState)([]),c=Object(d.a)(o,2),m=c[0],u=c[1],v=function(){return m.length<=document.querySelectorAll("[class*=reveal-].is-revealed").length},p=function(){if(!v())for(var e=function(e){var t=m[e],a=t.getAttribute("data-reveal-delay"),r=t.getAttribute("data-reveal-offset")?t.getAttribute("data-reveal-offset"):"200";(function(e,t){return e.getBoundingClientRect().top<=l-t})(t.getAttribute("data-reveal-container")?t.closest(t.getAttribute("data-reveal-container")):t,r)&&!t.classList.contains("is-revealed")&&(a&&0!==a?setTimeout((function(){t.classList.add("is-revealed")}),a):t.classList.add("is-revealed"))},t=0;t<m.length;t++)e(t)};Object(r.useImperativeHandle)(t,(function(){return{init:function(){u(document.querySelectorAll("[class*=reveal-]"))}}})),Object(r.useEffect)((function(){"undefined"!==typeof m&&m.length>0&&(v()||(window.addEventListener("scroll",E),window.addEventListener("resize",b)),p())}),[m]);var f=function(){v()&&(window.removeEventListener("scroll",E),window.removeEventListener("resize",b))},E=Object(h.throttle)((function(){f(),p()}),30),b=Object(h.throttle)((function(){s(window.innerHeight)}),30);return Object(r.useEffect)((function(){f(),p()}),[l]),i.a.createElement(i.a.Fragment,null,e.children())}));p.propTypes={children:v.a.func.isRequired};var f=p,E=a(1),b=a.n(E),g=a(6),N=function(e){var t=e.className,a=e.src,n=e.width,l=e.height,s=e.alt,o=Object(c.a)(e,["className","src","width","height","alt"]),m=Object(r.useState)(!1),u=Object(d.a)(m,2),v=u[0],h=u[1],p=Object(r.useRef)(null);Object(r.useEffect)((function(){f(p.current)}),[]);var f=function(e){var t,a,r=document.createElement("img");v||(e.style.display="none",e.before(r),r.src=(t=e.getAttribute("width")||0,a=e.getAttribute("height")||0,'data:image/svg+xml,%3Csvg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 '.concat(t," ").concat(a,'"%3E%3C/svg%3E')),r.width=e.getAttribute("width"),r.height=e.getAttribute("height"),r.style.opacity="0",e.className&&r.classList.add(e.className),r.remove(),e.style.display="")};return i.a.createElement("img",Object.assign({},o,{ref:p,className:t,src:a,width:n,height:l,alt:s,onLoad:function(){h(!0)}}))};N.defaultProps={src:void 0,width:void 0,height:void 0,alt:void 0};var y=N,O=function(e){var t=e.className,r=Object(c.a)(e,["className"]),n=b()("brand",t);return i.a.createElement("div",Object.assign({},r,{className:n}),i.a.createElement("h1",{className:"m-0"},i.a.createElement(g.a,{to:"/"},i.a.createElement(y,{src:a(33),alt:"Open",width:32,height:32}))))},w=function(e){var t=e.className,a=Object(c.a)(e,["className"]),r=b()("footer-nav",t);return i.a.createElement("nav",Object.assign({},a,{className:r}),i.a.createElement("ul",{className:"list-reset"},i.a.createElement("li",null,i.a.createElement(g.a,{to:"#0"},"Contact")),i.a.createElement("li",null,i.a.createElement(g.a,{to:"#0"},"About us")),i.a.createElement("li",null,i.a.createElement(g.a,{to:"#0"},"FAQ's")),i.a.createElement("li",null,i.a.createElement(g.a,{to:"#0"},"Support"))))},D=function(e){var t=e.className,a=Object(c.a)(e,["className"]),r=b()("footer-social",t);return i.a.createElement("div",Object.assign({},a,{className:r}),i.a.createElement("ul",{className:"list-reset"},i.a.createElement("li",null,i.a.createElement("a",{href:"https://facebook.com/"},i.a.createElement("svg",{width:"16",height:"16",viewBox:"0 0 16 16",xmlns:"http://www.w3.org/2000/svg"},i.a.createElement("title",null,"Facebook"),i.a.createElement("path",{d:"M6.023 16L6 9H3V6h3V4c0-2.7 1.672-4 4.08-4 1.153 0 2.144.086 2.433.124v2.821h-1.67c-1.31 0-1.563.623-1.563 1.536V6H13l-1 3H9.28v7H6.023z"})))),i.a.createElement("li",null,i.a.createElement("a",{href:"https://twitter.com/"},i.a.createElement("svg",{width:"16",height:"16",viewBox:"0 0 16 16",xmlns:"http://www.w3.org/2000/svg"},i.a.createElement("title",null,"Twitter"),i.a.createElement("path",{d:"M16 3c-.6.3-1.2.4-1.9.5.7-.4 1.2-1 1.4-1.8-.6.4-1.3.6-2.1.8-.6-.6-1.5-1-2.4-1-1.7 0-3.2 1.5-3.2 3.3 0 .3 0 .5.1.7-2.7-.1-5.2-1.4-6.8-3.4-.3.5-.4 1-.4 1.7 0 1.1.6 2.1 1.5 2.7-.5 0-1-.2-1.5-.4C.7 7.7 1.8 9 3.3 9.3c-.3.1-.6.1-.9.1-.2 0-.4 0-.6-.1.4 1.3 1.6 2.3 3.1 2.3-1.1.9-2.5 1.4-4.1 1.4H0c1.5.9 3.2 1.5 5 1.5 6 0 9.3-5 9.3-9.3v-.4C15 4.3 15.6 3.7 16 3z"})))),i.a.createElement("li",null,i.a.createElement("a",{href:"https://google.com/"},i.a.createElement("svg",{width:"16",height:"16",viewBox:"0 0 16 16",xmlns:"http://www.w3.org/2000/svg"},i.a.createElement("title",null,"Instagram"),i.a.createElement("g",null,i.a.createElement("circle",{cx:"12.145",cy:"3.892",r:"1"}),i.a.createElement("path",{d:"M8 12c-2.206 0-4-1.794-4-4s1.794-4 4-4 4 1.794 4 4-1.794 4-4 4zm0-6c-1.103 0-2 .897-2 2s.897 2 2 2 2-.897 2-2-.897-2-2-2z"}),i.a.createElement("path",{d:"M12 16H4c-2.056 0-4-1.944-4-4V4c0-2.056 1.944-4 4-4h8c2.056 0 4 1.944 4 4v8c0 2.056-1.944 4-4 4zM4 2c-.935 0-2 1.065-2 2v8c0 .953 1.047 2 2 2h8c.935 0 2-1.065 2-2V4c0-.935-1.065-2-2-2H4z"})))))))},j=function(e){var t=e.className,a=e.topOuterDivider,r=e.topDivider,n=Object(c.a)(e,["className","topOuterDivider","topDivider"]),l=b()("site-footer center-content-mobile",a&&"has-top-divider",t);return i.a.createElement("footer",Object.assign({},n,{className:l}),i.a.createElement("div",{className:"container"},i.a.createElement("div",{className:b()("site-footer-inner",r&&"has-top-divider")},i.a.createElement("div",{className:"footer-top space-between text-xxs"},i.a.createElement("div",{className:"footer-blocks"},i.a.createElement("span",null,i.a.createElement(O,null))," ",i.a.createElement("span",{className:"p0"},"DITTO")),i.a.createElement(D,null)),i.a.createElement("div",{className:"footer-bottom space-between text-xxs invert-order-desktop"},i.a.createElement(w,null)))))};j.defaultProps={topOuterDivider:!1,topDivider:!1};var x=j,C=function(e){var t=e.children;return i.a.createElement(i.a.Fragment,null,i.a.createElement("main",{className:"site-content"},t),i.a.createElement(x,null))},A=a(3),F={types:{topOuterDivider:v.a.bool,bottomOuterDivider:v.a.bool,topDivider:v.a.bool,bottomDivider:v.a.bool,hasBgColor:v.a.bool,invertColor:v.a.bool},defaults:{topOuterDivider:!1,bottomOuterDivider:!1,topDivider:!1,bottomDivider:!1,hasBgColor:!1,invertColor:!1}},k={types:Object(A.a)({},F.types),defaults:Object(A.a)({},F.defaults)},L={types:Object(A.a)({},F.types,{invertMobile:v.a.bool,invertDesktop:v.a.bool,alignTop:v.a.bool,imageFill:v.a.bool}),defaults:Object(A.a)({},F.defaults,{invertMobile:!1,invertDesktop:!1,alignTop:!1,imageFill:!1})},B={types:Object(A.a)({},F.types,{pushLeft:v.a.bool}),defaults:Object(A.a)({},F.defaults,{pushLeft:!1})},T=Object(A.a)({},k.defaults),P=function(e){var t=e.className,a=e.topOuterDivider,r=e.bottomOuterDivider,n=e.topDivider,l=e.bottomDivider,s=e.hasBgColor,o=e.invertColor,m=Object(c.a)(e,["className","topOuterDivider","bottomOuterDivider","topDivider","bottomDivider","hasBgColor","invertColor"]),d=b()("hero section center-content",a&&"has-top-divider",r&&"has-bottom-divider",s&&"has-bg-color",o&&"invert-color",t),u=b()("hero-inner section-inner",n&&"has-top-divider",l&&"has-bottom-divider");return i.a.createElement("section",Object.assign({},m,{className:d}),i.a.createElement("div",{className:"container-sm"},i.a.createElement("div",{className:u},i.a.createElement("div",{className:"hero-content"},i.a.createElement("h1",{className:"mt-0 mb-16 reveal-from-bottom","data-reveal-delay":"200"},i.a.createElement("span",{className:"text-color-primary"},"DITTO")),i.a.createElement("div",{className:"container-xs"},i.a.createElement("p",{className:"m-0 mb-32 reveal-from-bottom","data-reveal-delay":"400"},"India's own Agriculture Marketplace"))),i.a.createElement("div",{className:"hero-figure reveal-from-bottom illustration-element-01","data-reveal-value":"20px","data-reveal-delay":"800"}))))};P.defaultProps=T;var S=P,R=function(e){var t=e.className,a=e.data,r=e.children,n=e.tag,l=e.containerSize,s=Object(c.a)(e,["className","data","children","tag","containerSize"]),o=b()("section-header",t),m=n;return i.a.createElement(i.a.Fragment,null,(a.title||a.paragraph)&&i.a.createElement("div",Object.assign({},s,{className:o}),i.a.createElement("div",{className:null!==l&&void 0!==l?l:"container-xs"},r,a.title&&i.a.createElement(m,{className:b()("mt-0",a.paragraph?"mb-16":"mb-0")},a.title),a.paragraph&&i.a.createElement("p",{className:"m-0"},a.paragraph))))};R.defaultProps={children:null,tag:"h2"};var H=R,M=Object(A.a)({},B.defaults),I=function(e){var t=e.className,r=e.topOuterDivider,n=e.bottomOuterDivider,l=e.topDivider,s=e.bottomDivider,o=e.hasBgColor,m=e.invertColor,d=e.pushLeft,u=Object(c.a)(e,["className","topOuterDivider","bottomOuterDivider","topDivider","bottomDivider","hasBgColor","invertColor","pushLeft"]),v=b()("features-tiles section",r&&"has-top-divider",n&&"has-bottom-divider",o&&"has-bg-color",m&&"invert-color",t),h=b()("features-tiles-inner section-inner pt-0",l&&"has-top-divider",s&&"has-bottom-divider"),p=b()("tiles-wrap center-content",d&&"push-left");return i.a.createElement("section",Object.assign({},u,{className:v}),i.a.createElement("div",{className:"container"},i.a.createElement("div",{className:h},i.a.createElement(H,{data:{title:"",paragraph:"A B2B DIGITAL MARKETPLACE WHERE FAIR FOOD TRADE IS MADE EASY, FAST AND TRANSPARENT!"},className:"center-content"}),i.a.createElement("div",{className:p},i.a.createElement("div",{className:"tiles-item reveal-from-bottom"},i.a.createElement("div",{className:"tiles-item-inner"},i.a.createElement("div",{className:"features-tiles-item-header"},i.a.createElement("div",{className:"features-tiles-item-image mb-16"},i.a.createElement(y,{src:a(34),alt:"Features tile icon 01",width:64,height:64}))),i.a.createElement("div",{className:"features-tiles-item-content"},i.a.createElement("h4",{className:"mt-0 mb-8"},"Transparency"),i.a.createElement("p",{className:"m-0 text-sm"},"get complete insights on the procurement side")))),i.a.createElement("div",{className:"tiles-item reveal-from-bottom","data-reveal-delay":"200"},i.a.createElement("div",{className:"tiles-item-inner"},i.a.createElement("div",{className:"features-tiles-item-header"},i.a.createElement("div",{className:"features-tiles-item-image mb-16"},i.a.createElement(y,{src:a(35),alt:"Features tile icon 02",width:64,height:64}))),i.a.createElement("div",{className:"features-tiles-item-content"},i.a.createElement("h4",{className:"mt-0 mb-8"},"Competitive Pricing"),i.a.createElement("p",{className:"m-0 text-sm"},"Elimination of middle-men benefits the pricing")))),i.a.createElement("div",{className:"tiles-item reveal-from-bottom","data-reveal-delay":"400"},i.a.createElement("div",{className:"tiles-item-inner"},i.a.createElement("div",{className:"features-tiles-item-header"},i.a.createElement("div",{className:"features-tiles-item-image mb-16"},i.a.createElement(y,{src:a(36),alt:"Features tile icon 03",width:64,height:64}))),i.a.createElement("div",{className:"features-tiles-item-content"},i.a.createElement("h4",{className:"mt-0 mb-8"},"Handpick Procurement"),i.a.createElement("p",{className:"m-0 text-sm"},"Get to choose from which farms/seller you'd want to buy")))),i.a.createElement("div",{className:"tiles-item reveal-from-bottom"},i.a.createElement("div",{className:"tiles-item-inner"},i.a.createElement("div",{className:"features-tiles-item-header"},i.a.createElement("div",{className:"features-tiles-item-image mb-16"},i.a.createElement(y,{src:a(37),alt:"Features tile icon 04",width:64,height:64}))),i.a.createElement("div",{className:"features-tiles-item-content"},i.a.createElement("h4",{className:"mt-0 mb-8"},"Connected supply and Logistical support"),i.a.createElement("p",{className:"m-0 text-sm"},"Free from the overhead of logistics. All from the comfort of your home.")))),i.a.createElement("div",{className:"tiles-item reveal-from-bottom","data-reveal-delay":"200"},i.a.createElement("div",{className:"tiles-item-inner"},i.a.createElement("div",{className:"features-tiles-item-header"},i.a.createElement("div",{className:"features-tiles-item-image mb-16"},i.a.createElement(y,{src:a(38),alt:"Features tile icon 05",width:64,height:64}))),i.a.createElement("div",{className:"features-tiles-item-content"},i.a.createElement("h4",{className:"mt-0 mb-8"},"No Contract hassles"),i.a.createElement("p",{className:"m-0 text-sm"},"Avoids the need to enter into contracts, fair pricing based on market conditions")))),i.a.createElement("div",{className:"tiles-item reveal-from-bottom","data-reveal-delay":"400"},i.a.createElement("div",{className:"tiles-item-inner"},i.a.createElement("div",{className:"features-tiles-item-header"},i.a.createElement("div",{className:"features-tiles-item-image mb-16"},i.a.createElement(y,{src:a(39),alt:"Features tile icon 06",width:64,height:64}))),i.a.createElement("div",{className:"features-tiles-item-content"},i.a.createElement("h4",{className:"mt-0 mb-8"},"Secure"),i.a.createElement("p",{className:"m-0 text-sm"},"A market with only verified buyers and sellers."))))))))};I.defaultProps=M;var z=I,q=function(){return i.a.createElement(i.a.Fragment,null,i.a.createElement(S,{className:"illustration-section-01"}),i.a.createElement(z,null),i.a.createElement(H,{data:{paragraph:"Reach out to us to be a part of the Digital revolution"},className:"center-content"}))},W=Object(A.a)({},L.defaults),V=function(e){var t=e.className,r=e.topOuterDivider,n=e.bottomOuterDivider,l=e.topDivider,s=e.bottomDivider,o=e.hasBgColor,m=e.invertColor,d=e.invertMobile,u=e.invertDesktop,v=e.alignTop,h=e.imageFill,p=Object(c.a)(e,["className","topOuterDivider","bottomOuterDivider","topDivider","bottomDivider","hasBgColor","invertColor","invertMobile","invertDesktop","alignTop","imageFill"]),f=b()("features-split section",r&&"has-top-divider",n&&"has-bottom-divider",o&&"has-bg-color",m&&"invert-color",t),E=b()("features-split-inner section-inner",l&&"has-top-divider",s&&"has-bottom-divider"),g=b()("split-wrap",d&&"invert-mobile",u&&"invert-desktop",v&&"align-top");return i.a.createElement("section",Object.assign({},p,{className:f}),i.a.createElement("div",{className:"container"},i.a.createElement("div",{className:E},i.a.createElement(H,{data:{title:"Stay Ahead of the Competition"},className:"center-content"}),i.a.createElement("div",{className:g},i.a.createElement("div",{className:"split-item"},i.a.createElement("div",{className:"split-item-content center-content-mobile reveal-from-left","data-reveal-container":".split-item"},i.a.createElement("h3",{className:"mt-0 mb-12"},"Ease of Business"),i.a.createElement("p",{className:"m-0"},"Do you want an opportunity to easily step up your business with better quality products and at a cheaper cost? ",i.a.createElement("br",null),"DITTO would be involved in procuring the highest quality items and providing a supply chain environment to deliver the same to you. ")),i.a.createElement("div",{className:b()("split-item-image center-content-mobile reveal-from-bottom",h&&"split-item-image-fill"),"data-reveal-container":".split-item"},i.a.createElement(y,{src:a(40),alt:"Features split 01",width:528,height:396}))),i.a.createElement("div",{className:"split-item"},i.a.createElement("div",{className:"split-item-content center-content-mobile reveal-from-right","data-reveal-container":".split-item"},i.a.createElement("h3",{className:"mt-0 mb-12"},"Take your business to the next level"),i.a.createElement("p",{className:"m-0"},"A methodological system to fight and beat huge corporate supply chain systems and procure quality products without the hassles of contracts")),i.a.createElement("div",{className:b()("split-item-image center-content-mobile reveal-from-bottom",h&&"split-item-image-fill"),"data-reveal-container":".split-item"},i.a.createElement(y,{src:a(41),alt:"Features split 02",width:528,height:396}))),i.a.createElement("div",{className:"split-item"},i.a.createElement("div",{className:"split-item-content center-content-mobile reveal-from-left","data-reveal-container":".split-item"},i.a.createElement("h3",{className:"mt-0 mb-12"},"Guarantee"),i.a.createElement("p",{className:"m-0"},"What sets us apart is that every shipment of ours would contain geotagged data indicating where the produce has been picked, the supplier ( ie. Farmer ) providing the goods along with other necessary information")),i.a.createElement("div",{className:b()("split-item-image center-content-mobile reveal-from-bottom",h&&"split-item-image-fill"),"data-reveal-container":".split-item"},i.a.createElement(y,{src:a(42),alt:"Features split 03",width:528,height:396})))))))};V.defaultProps=W;var J=V,G=Object(A.a)({},B.defaults),Y=function(e){var t=e.className,a=e.topOuterDivider,r=e.bottomOuterDivider,n=e.topDivider,l=e.bottomDivider,s=e.hasBgColor,o=e.invertColor,m=e.pushLeft,d=Object(c.a)(e,["className","topOuterDivider","bottomOuterDivider","topDivider","bottomDivider","hasBgColor","invertColor","pushLeft"]),u=b()("testimonial section",a&&"has-top-divider",r&&"has-bottom-divider",s&&"has-bg-color",o&&"invert-color",t),v=b()("testimonial-inner section-inner",n&&"has-top-divider",l&&"has-bottom-divider"),h=b()("tiles-wrap",m&&"push-left");return i.a.createElement("section",Object.assign({},d,{className:u}),i.a.createElement("div",{className:"container"},i.a.createElement("div",{className:v},i.a.createElement("div",{className:h},i.a.createElement("div",{className:"tiles-item reveal-from-right","data-reveal-delay":"200"},i.a.createElement("div",{className:"tiles-item-inner"},i.a.createElement("div",{className:"testimonial-item-content"},i.a.createElement("p",{className:"text-sm mb-0"},"Facing difficulty in selling items while competing with large brands trying to dominate the market with their own food and supply chain management?")))),i.a.createElement("div",{className:"tiles-item reveal-from-bottom"},i.a.createElement("div",{className:"tiles-item-inner"},i.a.createElement("div",{className:"testimonial-item-content"},i.a.createElement("p",{className:"text-sm mb-0"},"Do you want an opportunity to easily step up your business with better quality products and at a cheaper cost?")))),i.a.createElement("div",{className:"tiles-item reveal-from-left","data-reveal-delay":"200"},i.a.createElement("div",{className:"tiles-item-inner"},i.a.createElement("div",{className:"testimonial-item-content"},i.a.createElement("p",{className:"text-sm mb-0"},"Do you not want to undertake the hassle of procurement, but yet be open to availing better products?"))))))))};Y.defaultProps=G;var K=Y,Q={paragraph:"Join us in empowering our farming community and ensuring better prices for them"},U=function(){return i.a.createElement(i.a.Fragment,null,i.a.createElement(K,null),i.a.createElement(J,{invertMobile:!0,topDivider:!0,imageFill:!0,className:"illustration-section-02"}),i.a.createElement("div",{className:"container"},i.a.createElement(H,{data:Q,className:"center-content",containerSize:"container-l"}),i.a.createElement(H,{data:{paragraph:"Reach out to us to be a part of the Digital revolution"},className:"center-content"})))},$=Object(A.a)({},B.defaults),X=function(e){var t=e.className,a=e.topOuterDivider,r=e.bottomOuterDivider,n=e.topDivider,l=e.bottomDivider,s=e.hasBgColor,o=e.invertColor,m=e.pushLeft,d=Object(c.a)(e,["className","topOuterDivider","bottomOuterDivider","topDivider","bottomDivider","hasBgColor","invertColor","pushLeft"]),u=b()("testimonial section",a&&"has-top-divider",r&&"has-bottom-divider",s&&"has-bg-color",o&&"invert-color",t),v=b()("testimonial-inner section-inner",n&&"has-top-divider",l&&"has-bottom-divider"),h=b()("tiles-wrap",m&&"push-left");return i.a.createElement("section",Object.assign({},d,{className:u}),i.a.createElement("div",{className:"container"},i.a.createElement("div",{className:v},i.a.createElement(H,{data:{title:"What's on your plate?",paragraph:"Be aware of what you consume"},className:"center-content"}),i.a.createElement("div",{className:h},i.a.createElement("ul",null,i.a.createElement("li",null,"Ever faced difficulty in sourcing food products that you consume on a day to day basis?"),i.a.createElement("li",null,"Have you felt the need for better quality items, but faced difficulty in sourcing them?"),i.a.createElement("li",null,"Have you ever pondered regarding how true the term \u201cOrganic\u201d is when buying products labeled so?")),i.a.createElement("div",{className:"tiles-item reveal-from-right","data-reveal-delay":"200"},i.a.createElement("div",{className:"tiles-item-inner"},i.a.createElement("div",{className:"testimonial-item-content"},i.a.createElement("p",{className:"text-sm mb-0"},"Procure directly from farmers.. Freedom to buy from a specific area ",i.a.createElement("br",null),i.a.createElement("br",null),"Choose to buy coffee for Chikamagaluru, Pepper from waynad and experience the authentic and tastes the geo offers")))),i.a.createElement("div",{className:"tiles-item reveal-from-bottom"},i.a.createElement("div",{className:"tiles-item-inner"},i.a.createElement("div",{className:"testimonial-item-content"},i.a.createElement("p",{className:"text-sm mb-0"},"Be a part of this digital revolution, empower farmers by trading directly through them, removing the role of middlemen",i.a.createElement("br",null),i.a.createElement("br",null),"Every fruit is traceable back to the farm, so farmers can benefit from online payments and a profit-sharing model")))),i.a.createElement("div",{className:"tiles-item reveal-from-left","data-reveal-delay":"200"},i.a.createElement("div",{className:"tiles-item-inner"},i.a.createElement("div",{className:"testimonial-item-content"},i.a.createElement("p",{className:"text-sm mb-0"},"Experience true Organic products at the comfort of your home",i.a.createElement("br",null),i.a.createElement("br",null),"With so much tainted and contaminated food around, it\u2019s hard to ensure food safety in what you and your family are eating."))))))),i.a.createElement(H,{data:{paragraph:"Reach out to us to be a part of the Digital revolution"},className:"center-content"}))};X.defaultProps=$;var Z=X,_=function(){return i.a.createElement(i.a.Fragment,null,i.a.createElement(Z,{topDivider:!0}))},ee=Object(A.a)({},B.defaults),te=function(e){var t=e.className,a=e.topOuterDivider,r=e.bottomOuterDivider,n=e.topDivider,l=e.bottomDivider,s=e.hasBgColor,o=e.invertColor,m=(e.pushLeft,Object(c.a)(e,["className","topOuterDivider","bottomOuterDivider","topDivider","bottomDivider","hasBgColor","invertColor","pushLeft"])),d=b()("testimonial section",a&&"has-top-divider",r&&"has-bottom-divider",s&&"has-bg-color",o&&"invert-color",t),u=b()("testimonial-inner section-inner",n&&"has-top-divider",l&&"has-bottom-divider");return i.a.createElement("section",Object.assign({},m,{className:d}),i.a.createElement("div",{className:"container"},i.a.createElement("div",{className:u},[{title:"Our Vision",paragraph:"Ditto's vision is to become the largest agricultural fair-trade platform,connecting farmers to industrial all around the world."},{paragraph:"We aim drive agricultural transactions through our digital platform in combination with our service partnership network. DITTO would accommodate online payments between buyer and seller, product quality check options, and end-to-end logistic services."},{title:"HAPPY FARMERS",paragraph:"\u201cAgriculture is our wisest pursuit, because it will in the end contribute most to real wealth, good morals, and happiness.\u201d \u2013 Thomas Jefferson"}].map((function(e){return i.a.createElement(H,{data:e,className:"center-content",containerSize:"container-xl"})})))),i.a.createElement(H,{data:{paragraph:"Reach out to us to be a part of the Digital revolution"},className:"center-content"}),i.a.createElement("ul",null))};te.defaultProps=ee;var ae=te,re=function(){return i.a.createElement(i.a.Fragment,null,i.a.createElement(ae,{topDivider:!0}))},ie=function(e){var t=e.className,a=e.navPosition,n=e.hideNav,l=(e.hideSignin,e.bottomOuterDivider),s=e.bottomDivider,o=Object(c.a)(e,["className","navPosition","hideNav","hideSignin","bottomOuterDivider","bottomDivider"]),m=Object(r.useState)(!1),u=Object(d.a)(m,2),v=u[0],h=u[1],p=Object(r.useRef)(null),f=Object(r.useRef)(null);Object(r.useEffect)((function(){return v&&E(),document.addEventListener("keydown",y),document.addEventListener("click",w),function(){document.removeEventListener("keydown",y),document.removeEventListener("click",w),N()}}));var E=function(){document.body.classList.add("off-nav-is-active"),p.current.style.maxHeight=p.current.scrollHeight+"px",h(!0)},N=function(){document.body.classList.remove("off-nav-is-active"),p.current&&(p.current.style.maxHeight=null),h(!1)},y=function(e){v&&27===e.keyCode&&N()},w=function(e){p.current&&v&&!p.current.contains(e.target)&&e.target!==f.current&&N()},D=b()("site-header",l&&"has-bottom-divider",t);return i.a.createElement("header",Object.assign({},o,{className:D}),i.a.createElement("div",{className:"container"},i.a.createElement("div",{className:b()("site-header-inner",s&&"has-bottom-divider")},i.a.createElement(O,null),i.a.createElement(g.a,{to:"/"},"DITTO"),!n&&i.a.createElement(i.a.Fragment,null,i.a.createElement("button",{ref:f,className:"header-nav-toggle",onClick:v?N:E},i.a.createElement("span",{className:"screen-reader"},"Menu"),i.a.createElement("span",{className:"hamburger"},i.a.createElement("span",{className:"hamburger-inner"}))),i.a.createElement("nav",{ref:p,className:b()("header-nav",v&&"is-active")},i.a.createElement("div",{className:"header-nav-inner"},i.a.createElement("ul",{className:b()("list-reset text-xs",a&&"header-nav-".concat(a))},i.a.createElement("li",{onClick:function(){return N()}},i.a.createElement(g.a,{to:"/retailers"},"Retailers"))),i.a.createElement("ul",{className:"list-reset header-nav-right"},i.a.createElement("li",null,i.a.createElement(g.a,{to:"/individuals",className:b()("list-reset text-xs",a&&"header-nav-".concat(a))},"Individuals"))),i.a.createElement("ul",{className:b()("list-reset text-xs",a&&"header-nav-".concat(a))},i.a.createElement("li",null,i.a.createElement(g.a,{to:"/about-us"},"About Us")))))))))};ie.defaultProps={navPosition:"",hideNav:!1,hideSignin:!1,bottomOuterDivider:!1,bottomDivider:!1};var ne=ie,le=function(){var e=Object(r.useRef)(),t=Object(s.f)();return Object(r.useEffect)((function(){document.body.classList.add("is-loaded"),e.current.init()}),[t]),i.a.createElement(f,{ref:e,children:function(){return i.a.createElement(i.a.Fragment,null,i.a.createElement(ne,{navPosition:"right",className:"reveal-from-bottom"}),i.a.createElement(s.c,null,i.a.createElement(m,{exact:!0,path:"/about-us",component:re,layout:C}),i.a.createElement(m,{exact:!0,path:"/individuals",component:_,layout:C}),i.a.createElement(m,{exact:!0,path:"/retailers",component:U,layout:C}),i.a.createElement(m,{path:"/",component:q,layout:C})))}})};Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));a(43);var se=Object(o.a)();l.a.render(i.a.createElement(s.b,{history:se},i.a.createElement(le,null)),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then((function(e){e.unregister()}))}},[[23,1,2]]]);
//# sourceMappingURL=main.162e3f1a.chunk.js.map