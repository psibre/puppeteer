/*! For license information please see 7d78127a.5b8235ee.js.LICENSE.txt */
"use strict";(self.webpackChunkwebsite=self.webpackChunkwebsite||[]).push([[47260],{66295:(e,n,r)=>{r.r(n),r.d(n,{assets:()=>d,contentTitle:()=>i,default:()=>p,frontMatter:()=>s,metadata:()=>l,toc:()=>c});var t=r(85893),a=r(11151);const s={sidebar_label:"Frame.evaluateHandle"},i="Frame.evaluateHandle() method",l={id:"api/puppeteer.frame.evaluatehandle",title:"Frame.evaluateHandle() method",description:"Behaves identically to Page.evaluateHandle() except it's run within the context of this frame.",source:"@site/versioned_docs/version-22.6.1/api/puppeteer.frame.evaluatehandle.md",sourceDirName:"api",slug:"/api/puppeteer.frame.evaluatehandle",permalink:"/api/puppeteer.frame.evaluatehandle",draft:!1,unlisted:!1,tags:[],version:"22.6.1",frontMatter:{sidebar_label:"Frame.evaluateHandle"},sidebar:"api",previous:{title:"Frame.evaluate",permalink:"/api/puppeteer.frame.evaluate"},next:{title:"Frame.focus",permalink:"/api/puppeteer.frame.focus"}},d={},c=[{value:"Signature:",id:"signature",level:4},{value:"Parameters",id:"parameters",level:2}];function o(e){const n={a:"a",code:"code",h1:"h1",h2:"h2",h4:"h4",p:"p",pre:"pre",strong:"strong",...(0,a.a)(),...e.components};return(0,t.jsxs)(t.Fragment,{children:[(0,t.jsx)(n.h1,{id:"frameevaluatehandle-method",children:"Frame.evaluateHandle() method"}),"\n",(0,t.jsxs)(n.p,{children:["Behaves identically to ",(0,t.jsx)(n.a,{href:"/api/puppeteer.page.evaluatehandle",children:"Page.evaluateHandle()"})," except it's run within the context of this frame."]}),"\n",(0,t.jsx)(n.h4,{id:"signature",children:"Signature:"}),"\n",(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{className:"language-typescript",children:"class Frame {\n  evaluateHandle<\n    Params extends unknown[],\n    Func extends EvaluateFunc<Params> = EvaluateFunc<Params>,\n  >(\n    pageFunction: Func | string,\n    ...args: Params\n  ): Promise<HandleFor<Awaited<ReturnType<Func>>>>;\n}\n"})}),"\n",(0,t.jsx)(n.h2,{id:"parameters",children:"Parameters"}),"\n",(0,t.jsxs)("table",{children:[(0,t.jsx)("thead",{children:(0,t.jsxs)("tr",{children:[(0,t.jsx)("th",{children:(0,t.jsx)(n.p,{children:"Parameter"})}),(0,t.jsx)("th",{children:(0,t.jsx)(n.p,{children:"Type"})}),(0,t.jsx)("th",{children:(0,t.jsx)(n.p,{children:"Description"})})]})}),(0,t.jsxs)("tbody",{children:[(0,t.jsxs)("tr",{children:[(0,t.jsx)("td",{children:(0,t.jsx)(n.p,{children:"pageFunction"})}),(0,t.jsx)("td",{children:(0,t.jsx)(n.p,{children:"Func | string"})}),(0,t.jsx)("td",{})]}),(0,t.jsxs)("tr",{children:[(0,t.jsx)("td",{children:(0,t.jsx)(n.p,{children:"args"})}),(0,t.jsx)("td",{children:(0,t.jsx)(n.p,{children:"Params"})}),(0,t.jsx)("td",{})]})]})]}),"\n",(0,t.jsx)(n.p,{children:(0,t.jsx)(n.strong,{children:"Returns:"})}),"\n",(0,t.jsxs)(n.p,{children:["Promise<",(0,t.jsx)(n.a,{href:"/api/puppeteer.handlefor",children:"HandleFor"}),"<Awaited<ReturnType<Func>>>>"]})]})}function p(e={}){const{wrapper:n}={...(0,a.a)(),...e.components};return n?(0,t.jsx)(n,{...e,children:(0,t.jsx)(o,{...e})}):o(e)}},75251:(e,n,r)=>{var t=r(67294),a=Symbol.for("react.element"),s=Symbol.for("react.fragment"),i=Object.prototype.hasOwnProperty,l=t.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED.ReactCurrentOwner,d={key:!0,ref:!0,__self:!0,__source:!0};function c(e,n,r){var t,s={},c=null,o=null;for(t in void 0!==r&&(c=""+r),void 0!==n.key&&(c=""+n.key),void 0!==n.ref&&(o=n.ref),n)i.call(n,t)&&!d.hasOwnProperty(t)&&(s[t]=n[t]);if(e&&e.defaultProps)for(t in n=e.defaultProps)void 0===s[t]&&(s[t]=n[t]);return{$$typeof:a,type:e,key:c,ref:o,props:s,_owner:l.current}}n.Fragment=s,n.jsx=c,n.jsxs=c},85893:(e,n,r)=>{e.exports=r(75251)},11151:(e,n,r)=>{r.d(n,{Z:()=>l,a:()=>i});var t=r(67294);const a={},s=t.createContext(a);function i(e){const n=t.useContext(s);return t.useMemo((function(){return"function"==typeof e?e(n):{...n,...e}}),[n,e])}function l(e){let n;return n=e.disableParentContext?"function"==typeof e.components?e.components(a):e.components||a:i(e.components),t.createElement(s.Provider,{value:n},e.children)}}}]);