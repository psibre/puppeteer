/*! For license information please see f176fc23.2b2a5206.js.LICENSE.txt */
"use strict";(self.webpackChunkwebsite=self.webpackChunkwebsite||[]).push([[18433],{20584:(e,t,r)=>{r.r(t),r.d(t,{assets:()=>p,contentTitle:()=>i,default:()=>d,frontMatter:()=>a,metadata:()=>o,toc:()=>l});var s=r(85893),n=r(11151);const a={sidebar_label:"Page.setViewport"},i="Page.setViewport() method",o={id:"api/puppeteer.page.setviewport",title:"Page.setViewport() method",description:"page.setViewport will resize the page. A lot of websites don't expect phones to change size, so you should set the viewport before navigating to the page.",source:"@site/versioned_docs/version-22.0.0/api/puppeteer.page.setviewport.md",sourceDirName:"api",slug:"/api/puppeteer.page.setviewport",permalink:"/api/puppeteer.page.setviewport",draft:!1,unlisted:!1,tags:[],version:"22.0.0",frontMatter:{sidebar_label:"Page.setViewport"},sidebar:"api",previous:{title:"Page.setUserAgent",permalink:"/api/puppeteer.page.setuseragent"},next:{title:"Page.tap",permalink:"/api/puppeteer.page.tap"}},p={},l=[{value:"Signature:",id:"signature",level:4},{value:"Parameters",id:"parameters",level:2},{value:"Remarks",id:"remarks",level:2},{value:"Example",id:"example",level:2}];function c(e){const t={a:"a",code:"code",h1:"h1",h2:"h2",h4:"h4",p:"p",pre:"pre",strong:"strong",table:"table",tbody:"tbody",td:"td",th:"th",thead:"thead",tr:"tr",...(0,n.a)(),...e.components};return(0,s.jsxs)(s.Fragment,{children:[(0,s.jsx)(t.h1,{id:"pagesetviewport-method",children:"Page.setViewport() method"}),"\n",(0,s.jsxs)(t.p,{children:[(0,s.jsx)(t.code,{children:"page.setViewport"})," will resize the page. A lot of websites don't expect phones to change size, so you should set the viewport before navigating to the page."]}),"\n",(0,s.jsx)(t.p,{children:"In the case of multiple pages in a single browser, each page can have its own viewport size."}),"\n",(0,s.jsx)(t.h4,{id:"signature",children:"Signature:"}),"\n",(0,s.jsx)(t.pre,{children:(0,s.jsx)(t.code,{className:"language-typescript",children:"class Page {\n  abstract setViewport(viewport: Viewport): Promise<void>;\n}\n"})}),"\n",(0,s.jsx)(t.h2,{id:"parameters",children:"Parameters"}),"\n",(0,s.jsxs)(t.table,{children:[(0,s.jsx)(t.thead,{children:(0,s.jsxs)(t.tr,{children:[(0,s.jsx)(t.th,{children:"Parameter"}),(0,s.jsx)(t.th,{children:"Type"}),(0,s.jsx)(t.th,{children:"Description"})]})}),(0,s.jsx)(t.tbody,{children:(0,s.jsxs)(t.tr,{children:[(0,s.jsx)(t.td,{children:"viewport"}),(0,s.jsx)(t.td,{children:(0,s.jsx)(t.a,{href:"/api/puppeteer.viewport",children:"Viewport"})}),(0,s.jsx)(t.td,{})]})})]}),"\n",(0,s.jsx)(t.p,{children:(0,s.jsx)(t.strong,{children:"Returns:"})}),"\n",(0,s.jsx)(t.p,{children:"Promise<void>"}),"\n",(0,s.jsx)(t.h2,{id:"remarks",children:"Remarks"}),"\n",(0,s.jsx)(t.p,{children:"NOTE: in certain cases, setting viewport will reload the page in order to set the isMobile or hasTouch properties."}),"\n",(0,s.jsx)(t.h2,{id:"example",children:"Example"}),"\n",(0,s.jsx)(t.pre,{children:(0,s.jsx)(t.code,{className:"language-ts",children:"const page = await browser.newPage();\nawait page.setViewport({\n  width: 640,\n  height: 480,\n  deviceScaleFactor: 1,\n});\nawait page.goto('https://example.com');\n"})})]})}function d(e={}){const{wrapper:t}={...(0,n.a)(),...e.components};return t?(0,s.jsx)(t,{...e,children:(0,s.jsx)(c,{...e})}):c(e)}},75251:(e,t,r)=>{var s=r(67294),n=Symbol.for("react.element"),a=Symbol.for("react.fragment"),i=Object.prototype.hasOwnProperty,o=s.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED.ReactCurrentOwner,p={key:!0,ref:!0,__self:!0,__source:!0};function l(e,t,r){var s,a={},l=null,c=null;for(s in void 0!==r&&(l=""+r),void 0!==t.key&&(l=""+t.key),void 0!==t.ref&&(c=t.ref),t)i.call(t,s)&&!p.hasOwnProperty(s)&&(a[s]=t[s]);if(e&&e.defaultProps)for(s in t=e.defaultProps)void 0===a[s]&&(a[s]=t[s]);return{$$typeof:n,type:e,key:l,ref:c,props:a,_owner:o.current}}t.Fragment=a,t.jsx=l,t.jsxs=l},85893:(e,t,r)=>{e.exports=r(75251)},11151:(e,t,r)=>{r.d(t,{Z:()=>o,a:()=>i});var s=r(67294);const n={},a=s.createContext(n);function i(e){const t=s.useContext(a);return s.useMemo((function(){return"function"==typeof e?e(t):{...t,...e}}),[t,e])}function o(e){let t;return t=e.disableParentContext?"function"==typeof e.components?e.components(n):e.components||n:i(e.components),s.createElement(a.Provider,{value:t},e.children)}}}]);