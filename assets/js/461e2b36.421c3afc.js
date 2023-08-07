"use strict";(self.webpackChunkreact_native_reanimated_docs=self.webpackChunkreact_native_reanimated_docs||[]).push([[6355],{2617:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>l,contentTitle:()=>r,default:()=>c,frontMatter:()=>o,metadata:()=>s,toc:()=>p});var i=n(7462),a=(n(7294),n(3905));const o={id:"transitions",title:"Transitions",sidebar_label:"Transitions"},r=void 0,s={unversionedId:"transitions",id:"version-1.x/transitions",title:"Transitions",description:"Transitions is an experimental API distributed as a part of reanimated which serves the purpose of animating between two states of view hierarchy. It is conceptually similar to LayoutAnimation concept from react native but gives much better control of what and how is going to be animated.",source:"@site/versioned_docs/version-1.x/transitions.md",sourceDirName:".",slug:"/transitions",permalink:"/react-native-reanimated/docs/1.x/transitions",draft:!1,tags:[],version:"1.x",frontMatter:{id:"transitions",title:"Transitions",sidebar_label:"Transitions"},sidebar:"version-1.x/docs",previous:{title:"Examples",permalink:"/react-native-reanimated/docs/1.x/examples"},next:{title:"Additional configuration",permalink:"/react-native-reanimated/docs/1.x/config"}},l={},p=[{value:"Transition groups",id:"transition-groups",level:2},{value:"<code>&lt;Transition.Together&gt;</code>",id:"transitiontogether",level:3},{value:"<code>&lt;Transition.Sequence&gt;</code>",id:"transitionsequence",level:3},{value:"Transitions",id:"transitions",level:2},{value:"<code>durationMs</code>",id:"durationms",level:4},{value:"<code>delayMs</code>",id:"delayms",level:4},{value:"<code>interpolation</code>",id:"interpolation",level:4},{value:"<code>propagation</code>",id:"propagation",level:4},{value:"<code>&lt;Transition.In&gt;</code>",id:"transitionin",level:3},{value:"<code>&lt;Transition.Out&gt;</code>",id:"transitionout",level:3},{value:"<code>&lt;Transition.Change&gt;</code>",id:"transitionchange",level:3},{value:"How to use it",id:"how-to-use-it",level:2}],d={toc:p};function c(e){let{components:t,...n}=e;return(0,a.kt)("wrapper",(0,i.Z)({},d,n,{components:t,mdxType:"MDXLayout"}),(0,a.kt)("p",null,"Transitions is an experimental API distributed as a part of reanimated which serves the purpose of animating between two states of view hierarchy. It is conceptually similar to ",(0,a.kt)("inlineCode",{parentName:"p"},"LayoutAnimation")," concept from react native but gives much better control of what and how is going to be animated."),(0,a.kt)("p",null,"Transitions API consists of two main building blocks. First one being ",(0,a.kt)("inlineCode",{parentName:"p"},"Transitioning.View")," which is an extension of regular react-native view, so you can use any ",(0,a.kt)("inlineCode",{parentName:"p"},"View")," props you'd like. The ",(0,a.kt)("inlineCode",{parentName:"p"},"Transitioning.View")," is a root of all the transition animations that will be happening and is used to scope the changes to its children. In order to have next transition animated you'd need to call ",(0,a.kt)("inlineCode",{parentName:"p"},"animateNextTransition()")," on the ",(0,a.kt)("inlineCode",{parentName:"p"},"Transitioning.View")," instance."),(0,a.kt)("p",null,"The second main building block is transition definition. Transitioning API uses JSX syntax that allows you to define how the transition animation should perform. You can use all the components from ",(0,a.kt)("inlineCode",{parentName:"p"},"Transition")," object to combine the animation you want. Please see the below list for the documentation of transition components."),(0,a.kt)("h2",{id:"transition-groups"},"Transition groups"),(0,a.kt)("p",null,"The below set of components can be used to group one or more transitions. You can also nest transition groups in order to achieve desirable effects."),(0,a.kt)("h3",{id:"transitiontogether"},(0,a.kt)("inlineCode",{parentName:"h3"},"<Transition.Together>")),(0,a.kt)("p",null,"Transitions nested under this component will run in parallel when the animation starts."),(0,a.kt)("h3",{id:"transitionsequence"},(0,a.kt)("inlineCode",{parentName:"h3"},"<Transition.Sequence>")),(0,a.kt)("p",null,"Transitions nested under this component will run in sequence in the order at which they are listed"),(0,a.kt)("h2",{id:"transitions"},"Transitions"),(0,a.kt)("p",null,"Transition components can be used separately or as a part of a group. Each transition component has the following common properties you can use to configure the animation:"),(0,a.kt)("h4",{id:"durationms"},(0,a.kt)("inlineCode",{parentName:"h4"},"durationMs")),(0,a.kt)("p",null,"The time animation takes to execute in milliseconds"),(0,a.kt)("h4",{id:"delayms"},(0,a.kt)("inlineCode",{parentName:"h4"},"delayMs")),(0,a.kt)("p",null,"Use this if you want the animation to start delayed (value in milliseconds)"),(0,a.kt)("h4",{id:"interpolation"},(0,a.kt)("inlineCode",{parentName:"h4"},"interpolation")),(0,a.kt)("p",null,"Specify the transition timing curve. Possible values are: ",(0,a.kt)("inlineCode",{parentName:"p"},"linear"),", ",(0,a.kt)("inlineCode",{parentName:"p"},"easeIn"),", ",(0,a.kt)("inlineCode",{parentName:"p"},"easeOut"),", ",(0,a.kt)("inlineCode",{parentName:"p"},"easeInOut")),(0,a.kt)("h4",{id:"propagation"},(0,a.kt)("inlineCode",{parentName:"h4"},"propagation")),(0,a.kt)("p",null,"Allows for the framework to automatically delay beginning of transitions across a set of different views depending on their position. The possible values are ",(0,a.kt)("inlineCode",{parentName:"p"},"top"),", ",(0,a.kt)("inlineCode",{parentName:"p"},"bottom"),", ",(0,a.kt)("inlineCode",{parentName:"p"},"left")," and ",(0,a.kt)("inlineCode",{parentName:"p"},"right"),". When ",(0,a.kt)("inlineCode",{parentName:"p"},'propagation="top"')," it means that the first element that will start animating is the one that is closest to the top of ",(0,a.kt)("inlineCode",{parentName:"p"},"Transitioning.View")," container, then the other views will be delayed by the amount which depends on their distance from the top edge."),(0,a.kt)("h3",{id:"transitionin"},(0,a.kt)("inlineCode",{parentName:"h3"},"<Transition.In>")),(0,a.kt)("p",null,"Allows to specify how views that get mounted during animation transition get animated. In addition to the above parameters you can specify the type of animation using ",(0,a.kt)("inlineCode",{parentName:"p"},"type")," prop. The possible values are: ",(0,a.kt)("inlineCode",{parentName:"p"},"fade"),", ",(0,a.kt)("inlineCode",{parentName:"p"},"scale"),", ",(0,a.kt)("inlineCode",{parentName:"p"},"slide-top"),", ",(0,a.kt)("inlineCode",{parentName:"p"},"slide-bottom"),", ",(0,a.kt)("inlineCode",{parentName:"p"},"slide-left"),", ",(0,a.kt)("inlineCode",{parentName:"p"},"slide-right"),"."),(0,a.kt)("h3",{id:"transitionout"},(0,a.kt)("inlineCode",{parentName:"h3"},"<Transition.Out>")),(0,a.kt)("p",null,"Allows to specify how the framework should animate views that are being removed during transition. In addition to the above parameters you can specify the type of animation using ",(0,a.kt)("inlineCode",{parentName:"p"},"type")," prop. The possible values are: ",(0,a.kt)("inlineCode",{parentName:"p"},"fade"),", ",(0,a.kt)("inlineCode",{parentName:"p"},"scale"),", ",(0,a.kt)("inlineCode",{parentName:"p"},"slide-top"),", ",(0,a.kt)("inlineCode",{parentName:"p"},"slide-bottom"),", ",(0,a.kt)("inlineCode",{parentName:"p"},"slide-left"),", ",(0,a.kt)("inlineCode",{parentName:"p"},"slide-right"),"."),(0,a.kt)("h3",{id:"transitionchange"},(0,a.kt)("inlineCode",{parentName:"h3"},"<Transition.Change>")),(0,a.kt)("p",null,"Use ",(0,a.kt)("inlineCode",{parentName:"p"},"Transition.Change")," component to specify how components' which properties get changed during transition should be animated. The framework currently supports an animating position, bounds and transforms."),(0,a.kt)("h2",{id:"how-to-use-it"},"How to use it"),(0,a.kt)("p",null,"This API is still experimental and is a subject to change. Please refer to our ",(0,a.kt)("a",{parentName:"p",href:"https://github.com/software-mansion/react-native-reanimated/tree/main/Example/reanimated1/transitions"},"Example app")," to see how it can be used in practice in the current shape."))}c.isMDXComponent=!0},3905:(e,t,n)=>{n.d(t,{Zo:()=>d,kt:()=>m});var i=n(7294);function a(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function o(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);t&&(i=i.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,i)}return n}function r(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?o(Object(n),!0).forEach((function(t){a(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):o(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function s(e,t){if(null==e)return{};var n,i,a=function(e,t){if(null==e)return{};var n,i,a={},o=Object.keys(e);for(i=0;i<o.length;i++)n=o[i],t.indexOf(n)>=0||(a[n]=e[n]);return a}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(i=0;i<o.length;i++)n=o[i],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}var l=i.createContext({}),p=function(e){var t=i.useContext(l),n=t;return e&&(n="function"==typeof e?e(t):r(r({},t),e)),n},d=function(e){var t=p(e.components);return i.createElement(l.Provider,{value:t},e.children)},c={inlineCode:"code",wrapper:function(e){var t=e.children;return i.createElement(i.Fragment,{},t)}},u=i.forwardRef((function(e,t){var n=e.components,a=e.mdxType,o=e.originalType,l=e.parentName,d=s(e,["components","mdxType","originalType","parentName"]),u=p(n),m=a,h=u["".concat(l,".").concat(m)]||u[m]||c[m]||o;return n?i.createElement(h,r(r({ref:t},d),{},{components:n})):i.createElement(h,r({ref:t},d))}));function m(e,t){var n=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var o=n.length,r=new Array(o);r[0]=u;var s={};for(var l in t)hasOwnProperty.call(t,l)&&(s[l]=t[l]);s.originalType=e,s.mdxType="string"==typeof e?e:a,r[1]=s;for(var p=2;p<o;p++)r[p]=n[p];return i.createElement.apply(null,r)}return i.createElement.apply(null,n)}u.displayName="MDXCreateElement"}}]);