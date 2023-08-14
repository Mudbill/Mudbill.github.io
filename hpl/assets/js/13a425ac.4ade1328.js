"use strict";(self.webpackChunkdocusaurus_test=self.webpackChunkdocusaurus_test||[]).push([[703],{3905:(e,t,r)=>{r.d(t,{Zo:()=>p,kt:()=>f});var n=r(7294);function o(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function a(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function i(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?a(Object(r),!0).forEach((function(t){o(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):a(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function l(e,t){if(null==e)return{};var r,n,o=function(e,t){if(null==e)return{};var r,n,o={},a=Object.keys(e);for(n=0;n<a.length;n++)r=a[n],t.indexOf(r)>=0||(o[r]=e[r]);return o}(e,t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(n=0;n<a.length;n++)r=a[n],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(o[r]=e[r])}return o}var s=n.createContext({}),u=function(e){var t=n.useContext(s),r=t;return e&&(r="function"==typeof e?e(t):i(i({},t),e)),r},p=function(e){var t=u(e.components);return n.createElement(s.Provider,{value:t},e.children)},d="mdxType",c={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},g=n.forwardRef((function(e,t){var r=e.components,o=e.mdxType,a=e.originalType,s=e.parentName,p=l(e,["components","mdxType","originalType","parentName"]),d=u(r),g=o,f=d["".concat(s,".").concat(g)]||d[g]||c[g]||a;return r?n.createElement(f,i(i({ref:t},p),{},{components:r})):n.createElement(f,i({ref:t},p))}));function f(e,t){var r=arguments,o=t&&t.mdxType;if("string"==typeof e||o){var a=r.length,i=new Array(a);i[0]=g;var l={};for(var s in t)hasOwnProperty.call(t,s)&&(l[s]=t[s]);l.originalType=e,l[d]="string"==typeof e?e:o,i[1]=l;for(var u=2;u<a;u++)i[u]=r[u];return n.createElement.apply(null,i)}return n.createElement.apply(null,r)}g.displayName="MDXCreateElement"},5440:(e,t,r)=>{r.r(t),r.d(t,{assets:()=>s,contentTitle:()=>i,default:()=>c,frontMatter:()=>a,metadata:()=>l,toc:()=>u});var n=r(7462),o=(r(7294),r(3905));const a={sidebar_position:2},i="Getting started",l={unversionedId:"hpl2/getting-started",id:"hpl2/getting-started",title:"Getting started",description:"This page will guide you through the basic steps to get started modding HPL2. This guide will have you use Amnesia \u2013 The Dark Descent (TDD), not Amnesia \u2013 A Machine For Pigs (AMFP), as TDD is the one that is officially supported for modding.",source:"@site/docs/hpl2/getting-started.md",sourceDirName:"hpl2",slug:"/hpl2/getting-started",permalink:"/hpl/docs/hpl2/getting-started",draft:!1,tags:[],version:"current",sidebarPosition:2,frontMatter:{sidebar_position:2},sidebar:"tutorialSidebar",previous:{title:"Overview",permalink:"/hpl/docs/hpl2/"},next:{title:"File specifications",permalink:"/hpl/docs/category/file-specifications"}},s={},u=[{value:"Prerequisites",id:"prerequisites",level:2},{value:"Setting up your game",id:"setting-up-your-game",level:2},{value:"Additional reading",id:"additional-reading",level:2}],p={toc:u},d="wrapper";function c(e){let{components:t,...r}=e;return(0,o.kt)(d,(0,n.Z)({},p,r,{components:t,mdxType:"MDXLayout"}),(0,o.kt)("h1",{id:"getting-started"},"Getting started"),(0,o.kt)("p",null,"This page will guide you through the basic steps to get started modding HPL2. This guide will have you use Amnesia \u2013 The Dark Descent (TDD), not Amnesia \u2013 A Machine For Pigs (AMFP), as TDD is the one that is officially supported for modding."),(0,o.kt)("h2",{id:"prerequisites"},"Prerequisites"),(0,o.kt)("p",null,"Before you get started, you should already have the following:"),(0,o.kt)("ol",null,(0,o.kt)("li",{parentName:"ol"},"A legal copy of Amnesia \u2013 The Dark Descent installed, ideally updated to the latest version. All platforms should work, including Steam, GOG and retail DVDs, on Windows, Mac OS X (versions EARLIER than 10.15 Catalina), and most Linux distros."),(0,o.kt)("li",{parentName:"ol"},"A code editor of your choice installed. ",(0,o.kt)("a",{parentName:"li",href:"https://notepad-plus-plus.org/downloads/"},"Notepad++")," works great, but you can also use something more modern, like ",(0,o.kt)("a",{parentName:"li",href:"https://code.visualstudio.com/"},"VS Code"),".")),(0,o.kt)("h2",{id:"setting-up-your-game"},"Setting up your game"),(0,o.kt)("p",null,"Before you dive in, you should set up a few things:"),(0,o.kt)("ol",null,(0,o.kt)("li",{parentName:"ol"},(0,o.kt)("a",{parentName:"li",href:"./tools"},"Install the development tools")," for your platform."),(0,o.kt)("li",{parentName:"ol"},"Configure your game to use the ",(0,o.kt)("a",{parentName:"li",href:"./dev-env"},"development environment")," (optional, but highly recommended)."),(0,o.kt)("li",{parentName:"ol"},"Bookmark the ",(0,o.kt)("a",{parentName:"li",href:"./script-functions"},"engine scripts")," page. This page is a great reference for when you create your scripts.")),(0,o.kt)("h2",{id:"additional-reading"},"Additional reading"),(0,o.kt)("p",null,"Here are a few additional things you can do that are very useful to check out:"),(0,o.kt)("ol",null,(0,o.kt)("li",{parentName:"ol"},"Join the official ",(0,o.kt)("a",{parentName:"li",href:"https://discord.gg/frictionalgames"},"Discord server")," and ask questions if you need help.")),(0,o.kt)("p",null,"You are now ready to start ",(0,o.kt)("a",{parentName:"p",href:"../category/tutorial"},"your first custom story"),"!"))}c.isMDXComponent=!0}}]);