"use strict";(self.webpackChunkreact_native_reanimated_docs=self.webpackChunkreact_native_reanimated_docs||[]).push([[4630],{3624:(e,t,r)=>{r.r(t),r.d(t,{assets:()=>i,contentTitle:()=>l,default:()=>d,frontMatter:()=>a,metadata:()=>c,toc:()=>s});var n=r(7462),o=(r(7294),r(3905));const a={},l=void 0,c={unversionedId:"nodes/color",id:"version-1.x/nodes/color",title:"color",description:"color",source:"@site/versioned_docs/version-1.x/nodes/color.md",sourceDirName:"nodes",slug:"/nodes/color",permalink:"/reanimated-legacy-docs/docs/1.x/nodes/color",draft:!1,tags:[],version:"1.x",frontMatter:{},sidebar:"version-1.x/docs",previous:{title:"call",permalink:"/reanimated-legacy-docs/docs/1.x/nodes/call"},next:{title:"concat",permalink:"/reanimated-legacy-docs/docs/1.x/nodes/concat"}},i={},s=[{value:"<code>color</code>",id:"color",level:2},{value:"Note: In order to interpolate color output values, use <code>interpolateColors</code> instead.",id:"note-in-order-to-interpolate-color-output-values-use-interpolatecolors-instead",level:5}],p={toc:s};function d(e){let{components:t,...r}=e;return(0,o.kt)("wrapper",(0,n.Z)({},p,r,{components:t,mdxType:"MDXLayout"}),(0,o.kt)("h2",{id:"color"},(0,o.kt)("inlineCode",{parentName:"h2"},"color")),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-js"},"color(red, green, blue, alpha);\n")),(0,o.kt)("p",null,"Creates a color node in RGBA format, where the first three input nodes should have ",(0,o.kt)("em",{parentName:"p"},"integer")," values in the range 0-255 (consider using ",(0,o.kt)("inlineCode",{parentName:"p"},"round")," node if needed) and correspond to color components Red, Green and Blue respectively. Last input node should have a value between 0 and 1 and represents alpha channel (value ",(0,o.kt)("inlineCode",{parentName:"p"},"1")," means fully opaque and ",(0,o.kt)("inlineCode",{parentName:"p"},"0")," completely transparent). Alpha parameter can be omitted, then ",(0,o.kt)("inlineCode",{parentName:"p"},"1")," (fully opaque) is used as a default."),(0,o.kt)("p",null,"The returned node can be mapped to view properties that represents color (e.g. ",(0,o.kt)("a",{parentName:"p",href:"https://facebook.github.io/react-native/docs/view-style-props.html#backgroundcolor"},(0,o.kt)("inlineCode",{parentName:"a"},"backgroundColor")),")."),(0,o.kt)("h5",{id:"note-in-order-to-interpolate-color-output-values-use-interpolatecolors-instead"},"Note: In order to interpolate color output values, use ",(0,o.kt)("a",{parentName:"h5",href:"/reanimated-legacy-docs/docs/1.x/nodes/interpolateColors"},(0,o.kt)("inlineCode",{parentName:"a"},"interpolateColors"))," instead."))}d.isMDXComponent=!0},3905:(e,t,r)=>{r.d(t,{Zo:()=>p,kt:()=>m});var n=r(7294);function o(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function a(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function l(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?a(Object(r),!0).forEach((function(t){o(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):a(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function c(e,t){if(null==e)return{};var r,n,o=function(e,t){if(null==e)return{};var r,n,o={},a=Object.keys(e);for(n=0;n<a.length;n++)r=a[n],t.indexOf(r)>=0||(o[r]=e[r]);return o}(e,t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(n=0;n<a.length;n++)r=a[n],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(o[r]=e[r])}return o}var i=n.createContext({}),s=function(e){var t=n.useContext(i),r=t;return e&&(r="function"==typeof e?e(t):l(l({},t),e)),r},p=function(e){var t=s(e.components);return n.createElement(i.Provider,{value:t},e.children)},d={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},u=n.forwardRef((function(e,t){var r=e.components,o=e.mdxType,a=e.originalType,i=e.parentName,p=c(e,["components","mdxType","originalType","parentName"]),u=s(r),m=o,f=u["".concat(i,".").concat(m)]||u[m]||d[m]||a;return r?n.createElement(f,l(l({ref:t},p),{},{components:r})):n.createElement(f,l({ref:t},p))}));function m(e,t){var r=arguments,o=t&&t.mdxType;if("string"==typeof e||o){var a=r.length,l=new Array(a);l[0]=u;var c={};for(var i in t)hasOwnProperty.call(t,i)&&(c[i]=t[i]);c.originalType=e,c.mdxType="string"==typeof e?e:o,l[1]=c;for(var s=2;s<a;s++)l[s]=r[s];return n.createElement.apply(null,l)}return n.createElement.apply(null,r)}u.displayName="MDXCreateElement"}}]);