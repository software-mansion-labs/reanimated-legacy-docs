"use strict";(self.webpackChunkreact_native_reanimated_docs=self.webpackChunkreact_native_reanimated_docs||[]).push([[291],{9448:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>l,contentTitle:()=>o,default:()=>c,frontMatter:()=>r,metadata:()=>s,toc:()=>p});var a=n(7462),i=(n(7294),n(3905));const r={id:"testing",title:"Testing with Jest",sidebar_label:"Testing with Jest"},o=void 0,s={unversionedId:"guide/testing",id:"guide/testing",title:"Testing with Jest",description:"Reanimated test mocks use web implementation of Reanimated2. Before you begin using Reanimated mocks you need some setup actions.",source:"@site/docs/guide/testing.md",sourceDirName:"guide",slug:"/guide/testing",permalink:"/reanimated-legacy-docs/docs/guide/testing",draft:!1,tags:[],version:"current",frontMatter:{id:"testing",title:"Testing with Jest",sidebar_label:"Testing with Jest"},sidebar:"docs",previous:{title:"interpolateColor",permalink:"/reanimated-legacy-docs/docs/api/miscellaneous/interpolateColors"},next:{title:"Debugging worklets",permalink:"/reanimated-legacy-docs/docs/guide/debugging"}},l={},p=[{value:"Setup",id:"setup",level:2},{value:"API",id:"api",level:2},{value:"Style checker",id:"style-checker",level:4},{value:"Timers",id:"timers",level:4},{value:"Example",id:"example",level:2},{value:"Recommended testing library",id:"recommended-testing-library",level:2}],m={toc:p};function c(e){let{components:t,...n}=e;return(0,i.kt)("wrapper",(0,a.Z)({},m,n,{components:t,mdxType:"MDXLayout"}),(0,i.kt)("p",null,"Reanimated test mocks use web implementation of Reanimated2. Before you begin using Reanimated mocks you need some setup actions."),(0,i.kt)("h2",{id:"setup"},"Setup"),(0,i.kt)("p",null,"First, make sure that your tests run with Node version 16 or newer."),(0,i.kt)("p",null,"Add the following line to your ",(0,i.kt)("inlineCode",{parentName:"p"},"jest-setup.js")," file:"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-js"},"require('react-native-reanimated').setUpTests();\n")),(0,i.kt)("p",null,(0,i.kt)("inlineCode",{parentName:"p"},"setUpTests()")," can take optional config argument. Default config is ",(0,i.kt)("inlineCode",{parentName:"p"},"{ fps: 60 }"),", setting framerate to 60fps."),(0,i.kt)("p",null,"To be sure, check if your ",(0,i.kt)("inlineCode",{parentName:"p"},"jest.config.js")," file contains:"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-js"},"...\npreset: 'react-native',\nsetupFilesAfterEnv: ['./jest-setup.js'],\n...\n")),(0,i.kt)("admonition",{type:"caution"},(0,i.kt)("p",{parentName:"admonition"},"If you use Jest in a version ",(0,i.kt)("strong",{parentName:"p"},"older than 28"),", you should set ",(0,i.kt)("inlineCode",{parentName:"p"},"setupFiles")," property instead of ",(0,i.kt)("inlineCode",{parentName:"p"},"setupFilesAfterEnv"))),(0,i.kt)("p",null,"If you have custom babel configuration for testing, make sure that Reanimated's babel plugin is enabled in that environment."),(0,i.kt)("h2",{id:"api"},"API"),(0,i.kt)("h4",{id:"style-checker"},"Style checker"),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("p",{parentName:"li"},"Checking equality of selected styles with current component styles"),(0,i.kt)("h4",{parentName:"li",id:"expectcomponenttohaveanimatedstyleexpectedstyle"},(0,i.kt)("inlineCode",{parentName:"h4"},"expect(component).toHaveAnimatedStyle(expectedStyle)")),(0,i.kt)("p",{parentName:"li"},(0,i.kt)("inlineCode",{parentName:"p"},"component")," - tested component\n",(0,i.kt)("inlineCode",{parentName:"p"},"expectedStyle")," - contains expected styles of testing component, for example ",(0,i.kt)("inlineCode",{parentName:"p"},"{ width: 100 }"))),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("p",{parentName:"li"},"Checking equality of all current component styles with expected styles"),(0,i.kt)("h4",{parentName:"li",id:"expectcomponenttohaveanimatedstyleexpectedstyle-exact-true"},(0,i.kt)("inlineCode",{parentName:"h4"},"expect(component).toHaveAnimatedStyle(expectedStyle, {exact: true})"))),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("p",{parentName:"li"},"You can get all styles of tested component by using ",(0,i.kt)("inlineCode",{parentName:"p"},"getDefaultStyle")),(0,i.kt)("h4",{parentName:"li",id:"getdefaultstylecomponent"},(0,i.kt)("inlineCode",{parentName:"h4"},"getDefaultStyle(component)")),(0,i.kt)("p",{parentName:"li"},(0,i.kt)("inlineCode",{parentName:"p"},"component")," - tested component"))),(0,i.kt)("h4",{id:"timers"},"Timers"),(0,i.kt)("p",null,"You can use Jest's fake timers to control animation progress.\nCheck ",(0,i.kt)("a",{parentName:"p",href:"https://jestjs.io/docs/timer-mocks"},"the full guide about mocking timers on Jest documentation website"),"."),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-js"},"jest.useFakeTimers();\n// call animation\njest.runAllTimers();\n")),(0,i.kt)("p",null,"If you want more control over animation, you can use ",(0,i.kt)("inlineCode",{parentName:"p"},"jest.advanceTimersByTime")," to move to a certain point in the animation:"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-js"},"jest.useFakeTimers();\n// call animation\njest.advanceTimersByTime(250);\n// make assertions on what you expect the styles of a component should be after 250ms\n")),(0,i.kt)("h2",{id:"example"},"Example"),(0,i.kt)("p",null,"The below code shows an example of test that runs a 250ms of animation and verifies the component style after that point in time."),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-js"},"// Setup fake timers \u2013 this can be done before the tests are run\njest.useFakeTimers();\n\ntest('stop in the middle of animation', () => {\n  const style = { width: 0 };\n\n  const { getByTestId } = render(<AnimatedComponent />);\n  const view = getByTestId('view');\n  const button = getByTestId('button');\n\n  expect(view.props.style.width).toBe(0);\n  expect(view).toHaveAnimatedStyle(style);\n\n  fireEvent.press(button);\n  jest.advanceTimersByTime(250); // if whole animation duration is a 500ms\n  style.width = 50; // value of component width after 250ms of animation\n  expect(view).toHaveAnimatedStyle(style);\n});\n")),(0,i.kt)("p",null,"Check links below for full examples of tests from Reanimated repo"),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("a",{parentName:"li",href:"https://github.com/software-mansion/react-native-reanimated/tree/main/__tests__/SharedValue.test.js"},"SharedValue.test.js")),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("a",{parentName:"li",href:"https://github.com/software-mansion/react-native-reanimated/tree/main/__tests__/Animation.test.js"},"Animation.test.js"))),(0,i.kt)("h2",{id:"recommended-testing-library"},"Recommended testing library"),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("a",{parentName:"li",href:"https://testing-library.com/docs/react-native-testing-library"},"@testing-library/react-native")),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("a",{parentName:"li",href:"https://react-hooks-testing-library.com/"},"@testing-library/react-hooks")," - for dealing with hooks")))}c.isMDXComponent=!0},3905:(e,t,n)=>{n.d(t,{Zo:()=>m,kt:()=>d});var a=n(7294);function i(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function r(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,a)}return n}function o(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?r(Object(n),!0).forEach((function(t){i(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):r(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function s(e,t){if(null==e)return{};var n,a,i=function(e,t){if(null==e)return{};var n,a,i={},r=Object.keys(e);for(a=0;a<r.length;a++)n=r[a],t.indexOf(n)>=0||(i[n]=e[n]);return i}(e,t);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);for(a=0;a<r.length;a++)n=r[a],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(i[n]=e[n])}return i}var l=a.createContext({}),p=function(e){var t=a.useContext(l),n=t;return e&&(n="function"==typeof e?e(t):o(o({},t),e)),n},m=function(e){var t=p(e.components);return a.createElement(l.Provider,{value:t},e.children)},c={inlineCode:"code",wrapper:function(e){var t=e.children;return a.createElement(a.Fragment,{},t)}},u=a.forwardRef((function(e,t){var n=e.components,i=e.mdxType,r=e.originalType,l=e.parentName,m=s(e,["components","mdxType","originalType","parentName"]),u=p(n),d=i,k=u["".concat(l,".").concat(d)]||u[d]||c[d]||r;return n?a.createElement(k,o(o({ref:t},m),{},{components:n})):a.createElement(k,o({ref:t},m))}));function d(e,t){var n=arguments,i=t&&t.mdxType;if("string"==typeof e||i){var r=n.length,o=new Array(r);o[0]=u;var s={};for(var l in t)hasOwnProperty.call(t,l)&&(s[l]=t[l]);s.originalType=e,s.mdxType="string"==typeof e?e:i,o[1]=s;for(var p=2;p<r;p++)o[p]=n[p];return a.createElement.apply(null,o)}return a.createElement.apply(null,n)}u.displayName="MDXCreateElement"}}]);