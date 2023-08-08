"use strict";(self.webpackChunkreact_native_reanimated_docs=self.webpackChunkreact_native_reanimated_docs||[]).push([[9491],{3836:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>u,contentTitle:()=>i,default:()=>m,frontMatter:()=>r,metadata:()=>s,toc:()=>c});var a=n(7462),o=(n(7294),n(3905));const r={id:"layout_animations",title:"Layout Animations",sidebar_label:"Layout Animations"},i=void 0,s={unversionedId:"fundamentals/layout_animations",id:"fundamentals/layout_animations",title:"Layout Animations",description:"Layout Animations - the easiest way to animate the entering/exiting/layout of your components.",source:"@site/docs/fundamentals/layout_animations.md",sourceDirName:"fundamentals",slug:"/fundamentals/layout_animations",permalink:"/reanimated-legacy-docs/docs/fundamentals/layout_animations",draft:!1,tags:[],version:"current",frontMatter:{id:"layout_animations",title:"Layout Animations",sidebar_label:"Layout Animations"},sidebar:"docs",previous:{title:"Custom Events",permalink:"/reanimated-legacy-docs/docs/fundamentals/custom_events"},next:{title:"Architecture",permalink:"/reanimated-legacy-docs/docs/fundamentals/architecture"}},u={},c=[{value:"Layout Animations - the easiest way to animate the entering/exiting/layout of your components.",id:"layout-animations---the-easiest-way-to-animate-the-enteringexitinglayout-of-your-components",level:4},{value:"Read more about LayoutAnimations",id:"read-more-about-layoutanimations",level:3}],l={toc:c};function m(e){let{components:t,...n}=e;return(0,o.kt)("wrapper",(0,a.Z)({},l,n,{components:t,mdxType:"MDXLayout"}),(0,o.kt)("h4",{id:"layout-animations---the-easiest-way-to-animate-the-enteringexitinglayout-of-your-components"},"Layout Animations - the easiest way to animate the entering/exiting/layout of your components."),(0,o.kt)("p",null,"In React Native every component appears instantly whenever you add it to the component hierarchy. It's not something we are used to in the real world. Layout Animations are here to address the problem and help you animate the appearance of any view."),(0,o.kt)("p",null,"When unmounting a component from the hierarchy of views, it just disappears in the next frame. However you can beautify this process using Exiting Animations. Reanimated includes gorgeous exit animations for your components."),(0,o.kt)("h3",{id:"read-more-about-layoutanimations"},(0,o.kt)("a",{parentName:"h3",href:"./../api/LayoutAnimations/entryAnimations"},"Read more about LayoutAnimations")),(0,o.kt)("iframe",{width:"940px",height:"557px",src:"https://www.youtube.com/embed/6UXfS6FI674",frameborder:"0",allow:"accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture",allowfullscreen:!0}))}m.isMDXComponent=!0},3905:(e,t,n)=>{n.d(t,{Zo:()=>l,kt:()=>p});var a=n(7294);function o(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function r(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,a)}return n}function i(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?r(Object(n),!0).forEach((function(t){o(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):r(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function s(e,t){if(null==e)return{};var n,a,o=function(e,t){if(null==e)return{};var n,a,o={},r=Object.keys(e);for(a=0;a<r.length;a++)n=r[a],t.indexOf(n)>=0||(o[n]=e[n]);return o}(e,t);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);for(a=0;a<r.length;a++)n=r[a],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(o[n]=e[n])}return o}var u=a.createContext({}),c=function(e){var t=a.useContext(u),n=t;return e&&(n="function"==typeof e?e(t):i(i({},t),e)),n},l=function(e){var t=c(e.components);return a.createElement(u.Provider,{value:t},e.children)},m={inlineCode:"code",wrapper:function(e){var t=e.children;return a.createElement(a.Fragment,{},t)}},y=a.forwardRef((function(e,t){var n=e.components,o=e.mdxType,r=e.originalType,u=e.parentName,l=s(e,["components","mdxType","originalType","parentName"]),y=c(n),p=o,d=y["".concat(u,".").concat(p)]||y[p]||m[p]||r;return n?a.createElement(d,i(i({ref:t},l),{},{components:n})):a.createElement(d,i({ref:t},l))}));function p(e,t){var n=arguments,o=t&&t.mdxType;if("string"==typeof e||o){var r=n.length,i=new Array(r);i[0]=y;var s={};for(var u in t)hasOwnProperty.call(t,u)&&(s[u]=t[u]);s.originalType=e,s.mdxType="string"==typeof e?e:o,i[1]=s;for(var c=2;c<r;c++)i[c]=n[c];return a.createElement.apply(null,i)}return a.createElement.apply(null,n)}y.displayName="MDXCreateElement"}}]);