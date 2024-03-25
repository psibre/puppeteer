/*! For license information please see 135a517d.71807cd6.js.LICENSE.txt */
"use strict";(self.webpackChunkwebsite=self.webpackChunkwebsite||[]).push([[50476],{78224:(e,r,n)=>{n.r(r),n.d(r,{assets:()=>l,contentTitle:()=>t,default:()=>x,frontMatter:()=>i,metadata:()=>c,toc:()=>h});var s=n(85893),d=n(11151);const i={sidebar_label:"LaunchOptions"},t="LaunchOptions interface",c={id:"api/puppeteer.launchoptions",title:"LaunchOptions interface",description:"Generic launch options that can be passed when launching any browser.",source:"@site/versioned_docs/version-22.6.1/api/puppeteer.launchoptions.md",sourceDirName:"api",slug:"/api/puppeteer.launchoptions",permalink:"/api/puppeteer.launchoptions",draft:!1,unlisted:!1,tags:[],version:"22.6.1",frontMatter:{sidebar_label:"LaunchOptions"},sidebar:"api",previous:{title:"launch",permalink:"/api/puppeteer.launch"},next:{title:"Locator",permalink:"/api/puppeteer.locator"}},l={},h=[{value:"Signature:",id:"signature",level:4},{value:"Properties",id:"properties",level:2}];function o(e){const r={a:"a",code:"code",h1:"h1",h2:"h2",h4:"h4",p:"p",pre:"pre",...(0,d.a)(),...e.components};return(0,s.jsxs)(s.Fragment,{children:[(0,s.jsx)(r.h1,{id:"launchoptions-interface",children:"LaunchOptions interface"}),"\n",(0,s.jsx)(r.p,{children:"Generic launch options that can be passed when launching any browser."}),"\n",(0,s.jsx)(r.h4,{id:"signature",children:"Signature:"}),"\n",(0,s.jsx)(r.pre,{children:(0,s.jsx)(r.code,{className:"language-typescript",children:"export interface LaunchOptions\n"})}),"\n",(0,s.jsx)(r.h2,{id:"properties",children:"Properties"}),"\n",(0,s.jsxs)("table",{children:[(0,s.jsx)("thead",{children:(0,s.jsxs)("tr",{children:[(0,s.jsx)("th",{children:(0,s.jsx)(r.p,{children:"Property"})}),(0,s.jsx)("th",{children:(0,s.jsx)(r.p,{children:"Modifiers"})}),(0,s.jsx)("th",{children:(0,s.jsx)(r.p,{children:"Type"})}),(0,s.jsx)("th",{children:(0,s.jsx)(r.p,{children:"Description"})}),(0,s.jsx)("th",{children:(0,s.jsx)(r.p,{children:"Default"})})]})}),(0,s.jsxs)("tbody",{children:[(0,s.jsxs)("tr",{children:[(0,s.jsx)("td",{children:(0,s.jsx)(r.p,{children:"channel"})}),(0,s.jsx)("td",{children:(0,s.jsx)(r.p,{children:(0,s.jsx)(r.code,{children:"optional"})})}),(0,s.jsx)("td",{children:(0,s.jsx)(r.p,{children:(0,s.jsx)(r.a,{href:"/api/puppeteer.chromereleasechannel",children:"ChromeReleaseChannel"})})}),(0,s.jsx)("td",{children:(0,s.jsx)(r.p,{children:"Chrome Release Channel"})}),(0,s.jsx)("td",{})]}),(0,s.jsxs)("tr",{children:[(0,s.jsx)("td",{children:(0,s.jsx)(r.p,{children:"dumpio"})}),(0,s.jsx)("td",{children:(0,s.jsx)(r.p,{children:(0,s.jsx)(r.code,{children:"optional"})})}),(0,s.jsx)("td",{children:(0,s.jsx)(r.p,{children:"boolean"})}),(0,s.jsx)("td",{children:(0,s.jsxs)(r.p,{children:["If true, pipes the browser process stdout and stderr to ",(0,s.jsx)(r.code,{children:"process.stdout"})," and ",(0,s.jsx)(r.code,{children:"process.stderr"}),"."]})}),(0,s.jsx)("td",{children:(0,s.jsx)(r.p,{children:(0,s.jsx)(r.code,{children:"false"})})})]}),(0,s.jsxs)("tr",{children:[(0,s.jsx)("td",{children:(0,s.jsx)(r.p,{children:"env"})}),(0,s.jsx)("td",{children:(0,s.jsx)(r.p,{children:(0,s.jsx)(r.code,{children:"optional"})})}),(0,s.jsx)("td",{children:(0,s.jsx)(r.p,{children:"Record<string, string | undefined>"})}),(0,s.jsx)("td",{children:(0,s.jsx)(r.p,{children:"Specify environment variables that will be visible to the browser."})}),(0,s.jsx)("td",{children:(0,s.jsxs)(r.p,{children:["The contents of ",(0,s.jsx)(r.code,{children:"process.env"}),"."]})})]}),(0,s.jsxs)("tr",{children:[(0,s.jsx)("td",{children:(0,s.jsx)(r.p,{children:"executablePath"})}),(0,s.jsx)("td",{children:(0,s.jsx)(r.p,{children:(0,s.jsx)(r.code,{children:"optional"})})}),(0,s.jsx)("td",{children:(0,s.jsx)(r.p,{children:"string"})}),(0,s.jsx)("td",{children:(0,s.jsx)(r.p,{children:"Path to a browser executable to use instead of the bundled Chromium. Note that Puppeteer is only guaranteed to work with the bundled Chromium, so use this setting at your own risk."})}),(0,s.jsx)("td",{})]}),(0,s.jsxs)("tr",{children:[(0,s.jsx)("td",{children:(0,s.jsx)(r.p,{children:"extraPrefsFirefox"})}),(0,s.jsx)("td",{children:(0,s.jsx)(r.p,{children:(0,s.jsx)(r.code,{children:"optional"})})}),(0,s.jsx)("td",{children:(0,s.jsx)(r.p,{children:"Record<string, unknown>"})}),(0,s.jsx)("td",{children:(0,s.jsxs)(r.p,{children:[(0,s.jsx)(r.a,{href:"https://searchfox.org/mozilla-release/source/modules/libpref/init/all.js",children:"Additional preferences"})," that can be passed when launching with Firefox."]})}),(0,s.jsx)("td",{})]}),(0,s.jsxs)("tr",{children:[(0,s.jsx)("td",{children:(0,s.jsx)(r.p,{children:"handleSIGHUP"})}),(0,s.jsx)("td",{children:(0,s.jsx)(r.p,{children:(0,s.jsx)(r.code,{children:"optional"})})}),(0,s.jsx)("td",{children:(0,s.jsx)(r.p,{children:"boolean"})}),(0,s.jsx)("td",{children:(0,s.jsxs)(r.p,{children:["Close the browser process on ",(0,s.jsx)(r.code,{children:"SIGHUP"}),"."]})}),(0,s.jsx)("td",{children:(0,s.jsx)(r.p,{children:(0,s.jsx)(r.code,{children:"true"})})})]}),(0,s.jsxs)("tr",{children:[(0,s.jsx)("td",{children:(0,s.jsx)(r.p,{children:"handleSIGINT"})}),(0,s.jsx)("td",{children:(0,s.jsx)(r.p,{children:(0,s.jsx)(r.code,{children:"optional"})})}),(0,s.jsx)("td",{children:(0,s.jsx)(r.p,{children:"boolean"})}),(0,s.jsx)("td",{children:(0,s.jsxs)(r.p,{children:["Close the browser process on ",(0,s.jsx)(r.code,{children:"Ctrl+C"}),"."]})}),(0,s.jsx)("td",{children:(0,s.jsx)(r.p,{children:(0,s.jsx)(r.code,{children:"true"})})})]}),(0,s.jsxs)("tr",{children:[(0,s.jsx)("td",{children:(0,s.jsx)(r.p,{children:"handleSIGTERM"})}),(0,s.jsx)("td",{children:(0,s.jsx)(r.p,{children:(0,s.jsx)(r.code,{children:"optional"})})}),(0,s.jsx)("td",{children:(0,s.jsx)(r.p,{children:"boolean"})}),(0,s.jsx)("td",{children:(0,s.jsxs)(r.p,{children:["Close the browser process on ",(0,s.jsx)(r.code,{children:"SIGTERM"}),"."]})}),(0,s.jsx)("td",{children:(0,s.jsx)(r.p,{children:(0,s.jsx)(r.code,{children:"true"})})})]}),(0,s.jsxs)("tr",{children:[(0,s.jsx)("td",{children:(0,s.jsx)(r.p,{children:"ignoreDefaultArgs"})}),(0,s.jsx)("td",{children:(0,s.jsx)(r.p,{children:(0,s.jsx)(r.code,{children:"optional"})})}),(0,s.jsx)("td",{children:(0,s.jsx)(r.p,{children:"boolean | string[]"})}),(0,s.jsx)("td",{children:(0,s.jsxs)(r.p,{children:["If ",(0,s.jsx)(r.code,{children:"true"}),", do not use ",(0,s.jsx)(r.code,{children:"puppeteer.defaultArgs()"})," when creating a browser. If an array is provided, these args will be filtered out. Use this with care - you probably want the default arguments Puppeteer uses."]})}),(0,s.jsx)("td",{children:(0,s.jsx)(r.p,{children:(0,s.jsx)(r.code,{children:"false"})})})]}),(0,s.jsxs)("tr",{children:[(0,s.jsx)("td",{children:(0,s.jsx)(r.p,{children:"pipe"})}),(0,s.jsx)("td",{children:(0,s.jsx)(r.p,{children:(0,s.jsx)(r.code,{children:"optional"})})}),(0,s.jsx)("td",{children:(0,s.jsx)(r.p,{children:"boolean"})}),(0,s.jsx)("td",{children:(0,s.jsx)(r.p,{children:"Connect to a browser over a pipe instead of a WebSocket."})}),(0,s.jsx)("td",{children:(0,s.jsx)(r.p,{children:(0,s.jsx)(r.code,{children:"false"})})})]}),(0,s.jsxs)("tr",{children:[(0,s.jsx)("td",{children:(0,s.jsx)(r.p,{children:"product"})}),(0,s.jsx)("td",{children:(0,s.jsx)(r.p,{children:(0,s.jsx)(r.code,{children:"optional"})})}),(0,s.jsx)("td",{children:(0,s.jsx)(r.p,{children:(0,s.jsx)(r.a,{href:"/api/puppeteer.product",children:"Product"})})}),(0,s.jsx)("td",{children:(0,s.jsx)(r.p,{children:"Which browser to launch."})}),(0,s.jsx)("td",{children:(0,s.jsx)(r.p,{children:(0,s.jsx)(r.code,{children:"chrome"})})})]}),(0,s.jsxs)("tr",{children:[(0,s.jsx)("td",{children:(0,s.jsx)(r.p,{children:"timeout"})}),(0,s.jsx)("td",{children:(0,s.jsx)(r.p,{children:(0,s.jsx)(r.code,{children:"optional"})})}),(0,s.jsx)("td",{children:(0,s.jsx)(r.p,{children:"number"})}),(0,s.jsx)("td",{children:(0,s.jsxs)(r.p,{children:["Maximum time in milliseconds to wait for the browser to start. Pass ",(0,s.jsx)(r.code,{children:"0"})," to disable the timeout."]})}),(0,s.jsx)("td",{children:(0,s.jsxs)(r.p,{children:[(0,s.jsx)(r.code,{children:"30_000"})," (30 seconds)."]})})]}),(0,s.jsxs)("tr",{children:[(0,s.jsx)("td",{children:(0,s.jsx)(r.p,{children:"waitForInitialPage"})}),(0,s.jsx)("td",{children:(0,s.jsx)(r.p,{children:(0,s.jsx)(r.code,{children:"optional"})})}),(0,s.jsx)("td",{children:(0,s.jsx)(r.p,{children:"boolean"})}),(0,s.jsx)("td",{children:(0,s.jsxs)(r.p,{children:["Whether to wait for the initial page to be ready. Useful when a user explicitly disables that (e.g. ",(0,s.jsx)(r.code,{children:"--no-startup-window"})," for Chrome)."]})}),(0,s.jsx)("td",{children:(0,s.jsx)(r.p,{children:(0,s.jsx)(r.code,{children:"true"})})})]})]})]})]})}function x(e={}){const{wrapper:r}={...(0,d.a)(),...e.components};return r?(0,s.jsx)(r,{...e,children:(0,s.jsx)(o,{...e})}):o(e)}},75251:(e,r,n)=>{var s=n(67294),d=Symbol.for("react.element"),i=Symbol.for("react.fragment"),t=Object.prototype.hasOwnProperty,c=s.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED.ReactCurrentOwner,l={key:!0,ref:!0,__self:!0,__source:!0};function h(e,r,n){var s,i={},h=null,o=null;for(s in void 0!==n&&(h=""+n),void 0!==r.key&&(h=""+r.key),void 0!==r.ref&&(o=r.ref),r)t.call(r,s)&&!l.hasOwnProperty(s)&&(i[s]=r[s]);if(e&&e.defaultProps)for(s in r=e.defaultProps)void 0===i[s]&&(i[s]=r[s]);return{$$typeof:d,type:e,key:h,ref:o,props:i,_owner:c.current}}r.Fragment=i,r.jsx=h,r.jsxs=h},85893:(e,r,n)=>{e.exports=n(75251)},11151:(e,r,n)=>{n.d(r,{Z:()=>c,a:()=>t});var s=n(67294);const d={},i=s.createContext(d);function t(e){const r=s.useContext(i);return s.useMemo((function(){return"function"==typeof e?e(r):{...r,...e}}),[r,e])}function c(e){let r;return r=e.disableParentContext?"function"==typeof e.components?e.components(d):e.components||d:t(e.components),s.createElement(i.Provider,{value:r},e.children)}}}]);