"use strict";(self.webpackChunkreact_native_reanimated_docs=self.webpackChunkreact_native_reanimated_docs||[]).push([[3165],{8863:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>l,contentTitle:()=>i,default:()=>m,frontMatter:()=>o,metadata:()=>c,toc:()=>s});var a=n(7462),r=(n(7294),n(3905));const o={id:"clock",title:"Clock",sidebar_label:"Clock"},i=void 0,c={unversionedId:"clock",id:"version-1.x/clock",title:"Clock",description:'Original Animated API makes an "animation" object a first class citizen.',source:"@site/versioned_docs/version-1.x/clock.md",sourceDirName:".",slug:"/clock",permalink:"/reanimated-legacy-docs/docs/1.x/clock",draft:!1,tags:[],version:"1.x",frontMatter:{id:"clock",title:"Clock",sidebar_label:"Clock"},sidebar:"version-1.x/docs",previous:{title:"Value",permalink:"/reanimated-legacy-docs/docs/1.x/value"},next:{title:"Timing",permalink:"/reanimated-legacy-docs/docs/1.x/animations/timing"}},l={},s=[],p={toc:s};function m(e){let{components:t,...n}=e;return(0,r.kt)("wrapper",(0,a.Z)({},p,n,{components:t,mdxType:"MDXLayout"}),(0,r.kt)("p",null,"Original ",(0,r.kt)("inlineCode",{parentName:"p"},"Animated"),' API makes an "animation" object a first class citizen.\n',(0,r.kt)("inlineCode",{parentName:"p"},"Animation")," object has many features and therefore requires quite a few JS<->Native bridge methods to be managed properly.\nIn ",(0,r.kt)("inlineCode",{parentName:"p"},"react-native-reanimated"),", clocks aim to replace that by providing more of a low level abstraction but also since clock nodes behave much like the animated values they make the implementation much less complex."),(0,r.kt)("p",null,(0,r.kt)("inlineCode",{parentName:"p"},"Animated.Clock")," node is a special type of ",(0,r.kt)("inlineCode",{parentName:"p"},"Animated.Value")," that can be updated in each frame to the timestamp of the current frame. When we take ",(0,r.kt)("inlineCode",{parentName:"p"},"Clock")," node as an input, the value it returns is the current frame timestamp in milliseconds. Using special methods, clock nodes can be stopped and started and we can also test if clock has been started."),(0,r.kt)("p",null,"Because ",(0,r.kt)("inlineCode",{parentName:"p"},"Animated.Clock")," just extends the ",(0,r.kt)("inlineCode",{parentName:"p"},"Animated.Value")," you can use it in the same places (operations) where you can pass any type of animated node."))}m.isMDXComponent=!0},3905:(e,t,n)=>{n.d(t,{Zo:()=>p,kt:()=>u});var a=n(7294);function r(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function o(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,a)}return n}function i(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?o(Object(n),!0).forEach((function(t){r(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):o(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function c(e,t){if(null==e)return{};var n,a,r=function(e,t){if(null==e)return{};var n,a,r={},o=Object.keys(e);for(a=0;a<o.length;a++)n=o[a],t.indexOf(n)>=0||(r[n]=e[n]);return r}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(a=0;a<o.length;a++)n=o[a],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(r[n]=e[n])}return r}var l=a.createContext({}),s=function(e){var t=a.useContext(l),n=t;return e&&(n="function"==typeof e?e(t):i(i({},t),e)),n},p=function(e){var t=s(e.components);return a.createElement(l.Provider,{value:t},e.children)},m={inlineCode:"code",wrapper:function(e){var t=e.children;return a.createElement(a.Fragment,{},t)}},d=a.forwardRef((function(e,t){var n=e.components,r=e.mdxType,o=e.originalType,l=e.parentName,p=c(e,["components","mdxType","originalType","parentName"]),d=s(n),u=r,f=d["".concat(l,".").concat(u)]||d[u]||m[u]||o;return n?a.createElement(f,i(i({ref:t},p),{},{components:n})):a.createElement(f,i({ref:t},p))}));function u(e,t){var n=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var o=n.length,i=new Array(o);i[0]=d;var c={};for(var l in t)hasOwnProperty.call(t,l)&&(c[l]=t[l]);c.originalType=e,c.mdxType="string"==typeof e?e:r,i[1]=c;for(var s=2;s<o;s++)i[s]=n[s];return a.createElement.apply(null,i)}return a.createElement.apply(null,n)}d.displayName="MDXCreateElement"}}]);