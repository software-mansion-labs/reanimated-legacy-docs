"use strict";(self.webpackChunkreact_native_reanimated_docs=self.webpackChunkreact_native_reanimated_docs||[]).push([[2953],{3019:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>l,contentTitle:()=>i,default:()=>u,frontMatter:()=>r,metadata:()=>d,toc:()=>s});var a=n(7462),o=(n(7294),n(3905));const r={id:"useAnimatedKeyboard",title:"useAnimatedKeyboard",sidebar_label:"useAnimatedKeyboard"},i=void 0,d={unversionedId:"api/hooks/useAnimatedKeyboard",id:"version-2.x/api/hooks/useAnimatedKeyboard",title:"useAnimatedKeyboard",description:"useAnimatedKeyboard is available since v2.10.0",source:"@site/versioned_docs/version-2.x/api/hooks/useAnimatedKeyboard.md",sourceDirName:"api/hooks",slug:"/api/hooks/useAnimatedKeyboard",permalink:"/reanimated-legacy-docs/docs/2.x/api/hooks/useAnimatedKeyboard",draft:!1,tags:[],version:"2.x",frontMatter:{id:"useAnimatedKeyboard",title:"useAnimatedKeyboard",sidebar_label:"useAnimatedKeyboard"},sidebar:"docs",previous:{title:"useAnimatedGestureHandler",permalink:"/reanimated-legacy-docs/docs/2.x/api/hooks/useAnimatedGestureHandler"},next:{title:"useAnimatedProps",permalink:"/reanimated-legacy-docs/docs/2.x/api/hooks/useAnimatedProps"}},l={},s=[{value:"Arguments",id:"arguments",level:3},{value:"<code>options</code> AnimatedKeyboardOptions",id:"options-animatedkeyboardoptions",level:4},{value:"Returns",id:"returns",level:3},{value:"Types",id:"types",level:3},{value:"<code>AnimatedKeyboardInfo: [object]</code>",id:"animatedkeyboardinfo-object",level:4},{value:"<code>AnimatedKeyboardOptions: [object]</code>",id:"animatedkeyboardoptions-object",level:4},{value:"Example",id:"example",level:3}],p={toc:s};function u(e){let{components:t,...n}=e;return(0,o.kt)("wrapper",(0,a.Z)({},p,n,{components:t,mdxType:"MDXLayout"}),(0,o.kt)("admonition",{type:"tip"},(0,o.kt)("p",{parentName:"admonition"},"useAnimatedKeyboard is available since v2.10.0")),(0,o.kt)("admonition",{type:"caution"},(0,o.kt)("p",{parentName:"admonition"},"Android implementation of ",(0,o.kt)("inlineCode",{parentName:"p"},"useAnimatedKeyboard")," is an experimental feature.")),(0,o.kt)("p",null,"With the ",(0,o.kt)("inlineCode",{parentName:"p"},"useAnimatedKeyboard")," hook, you can create animations based on current keyboard position."),(0,o.kt)("p",null,"On Android, make sure to set ",(0,o.kt)("inlineCode",{parentName:"p"},"android:windowSoftInputMode")," in your ",(0,o.kt)("inlineCode",{parentName:"p"},"AndroidManifest.xml")," to ",(0,o.kt)("inlineCode",{parentName:"p"},"adjustResize"),". Then, using the ",(0,o.kt)("inlineCode",{parentName:"p"},"useAnimatedKeyboard")," hook disables\nthe default Android behavior (resizing the view to accommodate keyboard) in the whole app. Using values from ",(0,o.kt)("inlineCode",{parentName:"p"},"useAnimatedKeyboard")," hook you can handle the keyboard yourself. Unmounting all components that use ",(0,o.kt)("inlineCode",{parentName:"p"},"useAnimatedKeyboard")," hook brings back the default Android behavior."),(0,o.kt)("h3",{id:"arguments"},"Arguments"),(0,o.kt)("h4",{id:"options-animatedkeyboardoptions"},(0,o.kt)("inlineCode",{parentName:"h4"},"options")," ","[AnimatedKeyboardOptions]"),(0,o.kt)("p",null,"Optional object containing additional configuration."),(0,o.kt)("h3",{id:"returns"},"Returns"),(0,o.kt)("p",null,"Hook ",(0,o.kt)("inlineCode",{parentName:"p"},"useAnimatedKeyboard")," returns an instance of [",(0,o.kt)("a",{parentName:"p",href:"#animatedkeyboard-object"},"AnimatedKeyboardInfo"),"];"),(0,o.kt)("h3",{id:"types"},"Types"),(0,o.kt)("h4",{id:"animatedkeyboardinfo-object"},(0,o.kt)("inlineCode",{parentName:"h4"},"AnimatedKeyboardInfo: [object]")),(0,o.kt)("p",null,"Properties:"),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("inlineCode",{parentName:"li"},"height"),": [",(0,o.kt)("a",{parentName:"li",href:"../../api/hooks/useSharedValue"},"SharedValue"),"] contains ",(0,o.kt)("inlineCode",{parentName:"li"},"[number]"),"\ncontains current height of the keyboard"),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("inlineCode",{parentName:"li"},"state"),": [",(0,o.kt)("a",{parentName:"li",href:"../../api/hooks/useSharedValue"},"SharedValue"),"] contains ",(0,o.kt)("inlineCode",{parentName:"li"},"[enum]"),"\ncontains current state of the keyboard. Possible states: ",(0,o.kt)("inlineCode",{parentName:"li"},"{ CLOSED, OPEN, CLOSING, OPENING }"))),(0,o.kt)("h4",{id:"animatedkeyboardoptions-object"},(0,o.kt)("inlineCode",{parentName:"h4"},"AnimatedKeyboardOptions: [object]")),(0,o.kt)("p",null,"Properties:"),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("inlineCode",{parentName:"li"},"isStatusBarTranslucentAndroid"),"[bool]"," - if you want to use translucent status bar on Android, set this option to ",(0,o.kt)("inlineCode",{parentName:"li"},"true"),". Defaults to ",(0,o.kt)("inlineCode",{parentName:"li"},"false"),". Ignored on iOS.")),(0,o.kt)("h3",{id:"example"},"Example"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-js"},"function AnimatedKeyboardExample() {\n  const keyboard = useAnimatedKeyboard();\n  const translateStyle = useAnimatedStyle(() => {\n    return {\n      transform: [{ translateY: -keyboard.height.value }],\n    };\n  });\n\n  return (\n    <ScrollView contentContainerStyle={{flex: 1, justifyContent: 'center', alignItems: 'center' }}>\n      <Animated.View style={translateStyle}>\n        <TextInput />\n      </Animated.View>\n    </ScrollView>\n  );\n}\n")))}u.isMDXComponent=!0},3905:(e,t,n)=>{n.d(t,{Zo:()=>p,kt:()=>c});var a=n(7294);function o(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function r(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,a)}return n}function i(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?r(Object(n),!0).forEach((function(t){o(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):r(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function d(e,t){if(null==e)return{};var n,a,o=function(e,t){if(null==e)return{};var n,a,o={},r=Object.keys(e);for(a=0;a<r.length;a++)n=r[a],t.indexOf(n)>=0||(o[n]=e[n]);return o}(e,t);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);for(a=0;a<r.length;a++)n=r[a],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(o[n]=e[n])}return o}var l=a.createContext({}),s=function(e){var t=a.useContext(l),n=t;return e&&(n="function"==typeof e?e(t):i(i({},t),e)),n},p=function(e){var t=s(e.components);return a.createElement(l.Provider,{value:t},e.children)},u={inlineCode:"code",wrapper:function(e){var t=e.children;return a.createElement(a.Fragment,{},t)}},m=a.forwardRef((function(e,t){var n=e.components,o=e.mdxType,r=e.originalType,l=e.parentName,p=d(e,["components","mdxType","originalType","parentName"]),m=s(n),c=o,y=m["".concat(l,".").concat(c)]||m[c]||u[c]||r;return n?a.createElement(y,i(i({ref:t},p),{},{components:n})):a.createElement(y,i({ref:t},p))}));function c(e,t){var n=arguments,o=t&&t.mdxType;if("string"==typeof e||o){var r=n.length,i=new Array(r);i[0]=m;var d={};for(var l in t)hasOwnProperty.call(t,l)&&(d[l]=t[l]);d.originalType=e,d.mdxType="string"==typeof e?e:o,i[1]=d;for(var s=2;s<r;s++)i[s]=n[s];return a.createElement.apply(null,i)}return a.createElement.apply(null,n)}m.displayName="MDXCreateElement"}}]);