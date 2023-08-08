"use strict";(self.webpackChunkreact_native_reanimated_docs=self.webpackChunkreact_native_reanimated_docs||[]).push([[44],{4252:(e,n,t)=>{t.r(n),t.d(n,{assets:()=>l,contentTitle:()=>a,default:()=>d,frontMatter:()=>o,metadata:()=>s,toc:()=>p});var i=t(7462),r=(t(7294),t(3905));const o={id:"spring_utils",title:"SpringUtils",sidebar_label:"SpringUtils"},a=void 0,s={unversionedId:"animations/spring_utils",id:"version-1.x/animations/spring_utils",title:"SpringUtils",description:"For developers' convenience, it's possible to use a different way of configuring spring animation which follows behavior known from React Native core.",source:"@site/versioned_docs/version-1.x/animations/springUtils.md",sourceDirName:"animations",slug:"/animations/spring_utils",permalink:"/reanimated-legacy-docs/docs/1.x/animations/spring_utils",draft:!1,tags:[],version:"1.x",frontMatter:{id:"spring_utils",title:"SpringUtils",sidebar_label:"SpringUtils"},sidebar:"version-1.x/docs",previous:{title:"Spring",permalink:"/reanimated-legacy-docs/docs/1.x/animations/spring"},next:{title:"abs",permalink:"/reanimated-legacy-docs/docs/1.x/nodes/abs"}},l={},p=[{value:"<code>SpringUtils.makeDefaultConfig()</code>",id:"springutilsmakedefaultconfig",level:3},{value:"<code>SpringUtils.makeConfigFromBouncinessAndSpeed(prevConfig)</code>",id:"springutilsmakeconfigfrombouncinessandspeedprevconfig",level:3},{value:"<code>SpringUtils.makeConfigFromOrigamiTensionAndFriction(prevConfig)</code>",id:"springutilsmakeconfigfromorigamitensionandfrictionprevconfig",level:3}],c={toc:p};function d(e){let{components:n,...t}=e;return(0,r.kt)("wrapper",(0,i.Z)({},c,t,{components:n,mdxType:"MDXLayout"}),(0,r.kt)("p",null,"For developers' convenience, it's possible to use a different way of configuring ",(0,r.kt)("inlineCode",{parentName:"p"},"spring")," animation which follows behavior known from React Native core."),(0,r.kt)("h3",{id:"springutilsmakedefaultconfig"},(0,r.kt)("inlineCode",{parentName:"h3"},"SpringUtils.makeDefaultConfig()")),(0,r.kt)("p",null,"Returns an object filled with default config of animation:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-js"}," {\n   stiffness: new Value(100),\n   mass: new Value(1),\n   damping: new Value(10),\n   overshootClamping: false,\n   restSpeedThreshold: 0.001,\n   restDisplacementThreshold: 0.001,\n   toValue: new Value(0),\n }\n")),(0,r.kt)("h3",{id:"springutilsmakeconfigfrombouncinessandspeedprevconfig"},(0,r.kt)("inlineCode",{parentName:"h3"},"SpringUtils.makeConfigFromBouncinessAndSpeed(prevConfig)")),(0,r.kt)("p",null,"Transforms an object with ",(0,r.kt)("inlineCode",{parentName:"p"},"bounciness")," and ",(0,r.kt)("inlineCode",{parentName:"p"},"speed")," params into config expected by the ",(0,r.kt)("inlineCode",{parentName:"p"},"spring")," node. ",(0,r.kt)("inlineCode",{parentName:"p"},"bounciness")," and ",(0,r.kt)("inlineCode",{parentName:"p"},"speed")," might be nodes or numbers."),(0,r.kt)("h3",{id:"springutilsmakeconfigfromorigamitensionandfrictionprevconfig"},(0,r.kt)("inlineCode",{parentName:"h3"},"SpringUtils.makeConfigFromOrigamiTensionAndFriction(prevConfig)")),(0,r.kt)("p",null,"Transforms an object with ",(0,r.kt)("inlineCode",{parentName:"p"},"tension")," and ",(0,r.kt)("inlineCode",{parentName:"p"},"friction")," params into config expected by the ",(0,r.kt)("inlineCode",{parentName:"p"},"spring")," node. ",(0,r.kt)("inlineCode",{parentName:"p"},"tension")," and ",(0,r.kt)("inlineCode",{parentName:"p"},"friction")," might be nodes or numbers."),(0,r.kt)("p",null,"See an ",(0,r.kt)("a",{parentName:"p",href:"https://github.com/software-mansion/react-native-reanimated/blob/main/Example/reanimated1/differentSpringConfigs/index.js"},"Example of different configs"),"."))}d.isMDXComponent=!0},3905:(e,n,t)=>{t.d(n,{Zo:()=>c,kt:()=>f});var i=t(7294);function r(e,n,t){return n in e?Object.defineProperty(e,n,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[n]=t,e}function o(e,n){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);n&&(i=i.filter((function(n){return Object.getOwnPropertyDescriptor(e,n).enumerable}))),t.push.apply(t,i)}return t}function a(e){for(var n=1;n<arguments.length;n++){var t=null!=arguments[n]?arguments[n]:{};n%2?o(Object(t),!0).forEach((function(n){r(e,n,t[n])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):o(Object(t)).forEach((function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(t,n))}))}return e}function s(e,n){if(null==e)return{};var t,i,r=function(e,n){if(null==e)return{};var t,i,r={},o=Object.keys(e);for(i=0;i<o.length;i++)t=o[i],n.indexOf(t)>=0||(r[t]=e[t]);return r}(e,n);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(i=0;i<o.length;i++)t=o[i],n.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(r[t]=e[t])}return r}var l=i.createContext({}),p=function(e){var n=i.useContext(l),t=n;return e&&(t="function"==typeof e?e(n):a(a({},n),e)),t},c=function(e){var n=p(e.components);return i.createElement(l.Provider,{value:n},e.children)},d={inlineCode:"code",wrapper:function(e){var n=e.children;return i.createElement(i.Fragment,{},n)}},m=i.forwardRef((function(e,n){var t=e.components,r=e.mdxType,o=e.originalType,l=e.parentName,c=s(e,["components","mdxType","originalType","parentName"]),m=p(t),f=r,u=m["".concat(l,".").concat(f)]||m[f]||d[f]||o;return t?i.createElement(u,a(a({ref:n},c),{},{components:t})):i.createElement(u,a({ref:n},c))}));function f(e,n){var t=arguments,r=n&&n.mdxType;if("string"==typeof e||r){var o=t.length,a=new Array(o);a[0]=m;var s={};for(var l in n)hasOwnProperty.call(n,l)&&(s[l]=n[l]);s.originalType=e,s.mdxType="string"==typeof e?e:r,a[1]=s;for(var p=2;p<o;p++)a[p]=t[p];return i.createElement.apply(null,a)}return i.createElement.apply(null,t)}m.displayName="MDXCreateElement"}}]);