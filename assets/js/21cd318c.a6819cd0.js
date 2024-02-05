/*! For license information please see 21cd318c.a6819cd0.js.LICENSE.txt */
"use strict";(self.webpackChunkwebsite=self.webpackChunkwebsite||[]).push([[86043],{67048:(e,r,t)=>{t.r(r),t.d(r,{assets:()=>d,contentTitle:()=>i,default:()=>c,frontMatter:()=>o,metadata:()=>a,toc:()=>p});var s=t(85893),n=t(11151);const o={sidebar_label:"HTTPRequest.abort"},i="HTTPRequest.abort() method",a={id:"api/puppeteer.httprequest.abort",title:"HTTPRequest.abort() method",description:"Aborts a request.",source:"@site/versioned_docs/version-22.0.0/api/puppeteer.httprequest.abort.md",sourceDirName:"api",slug:"/api/puppeteer.httprequest.abort",permalink:"/api/puppeteer.httprequest.abort",draft:!1,unlisted:!1,tags:[],version:"22.0.0",frontMatter:{sidebar_label:"HTTPRequest.abort"},sidebar:"api",previous:{title:"HTTPRequest",permalink:"/api/puppeteer.httprequest"},next:{title:"HTTPRequest.abortErrorReason",permalink:"/api/puppeteer.httprequest.aborterrorreason"}},d={},p=[{value:"Signature:",id:"signature",level:4},{value:"Parameters",id:"parameters",level:2},{value:"Remarks",id:"remarks",level:2}];function l(e){const r={a:"a",code:"code",em:"em",h1:"h1",h2:"h2",h4:"h4",p:"p",pre:"pre",strong:"strong",table:"table",tbody:"tbody",td:"td",th:"th",thead:"thead",tr:"tr",...(0,n.a)(),...e.components};return(0,s.jsxs)(s.Fragment,{children:[(0,s.jsx)(r.h1,{id:"httprequestabort-method",children:"HTTPRequest.abort() method"}),"\n",(0,s.jsx)(r.p,{children:"Aborts a request."}),"\n",(0,s.jsx)(r.h4,{id:"signature",children:"Signature:"}),"\n",(0,s.jsx)(r.pre,{children:(0,s.jsx)(r.code,{className:"language-typescript",children:"class HTTPRequest {\n  abstract abort(errorCode?: ErrorCode, priority?: number): Promise<void>;\n}\n"})}),"\n",(0,s.jsx)(r.h2,{id:"parameters",children:"Parameters"}),"\n",(0,s.jsxs)(r.table,{children:[(0,s.jsx)(r.thead,{children:(0,s.jsxs)(r.tr,{children:[(0,s.jsx)(r.th,{children:"Parameter"}),(0,s.jsx)(r.th,{children:"Type"}),(0,s.jsx)(r.th,{children:"Description"})]})}),(0,s.jsxs)(r.tbody,{children:[(0,s.jsxs)(r.tr,{children:[(0,s.jsx)(r.td,{children:"errorCode"}),(0,s.jsx)(r.td,{children:(0,s.jsx)(r.a,{href:"/api/puppeteer.errorcode",children:"ErrorCode"})}),(0,s.jsxs)(r.td,{children:[(0,s.jsx)(r.em,{children:"(Optional)"})," optional error code to provide."]})]}),(0,s.jsxs)(r.tr,{children:[(0,s.jsx)(r.td,{children:"priority"}),(0,s.jsx)(r.td,{children:"number"}),(0,s.jsxs)(r.td,{children:[(0,s.jsx)(r.em,{children:"(Optional)"})," If provided, intercept is resolved using cooperative handling rules. Otherwise, intercept is resolved immediately."]})]})]})]}),"\n",(0,s.jsx)(r.p,{children:(0,s.jsx)(r.strong,{children:"Returns:"})}),"\n",(0,s.jsx)(r.p,{children:"Promise<void>"}),"\n",(0,s.jsx)(r.h2,{id:"remarks",children:"Remarks"}),"\n",(0,s.jsxs)(r.p,{children:["To use this, request interception should be enabled with ",(0,s.jsx)(r.a,{href:"/api/puppeteer.page.setrequestinterception",children:"Page.setRequestInterception()"}),". If it is not enabled, this method will throw an exception immediately."]})]})}function c(e={}){const{wrapper:r}={...(0,n.a)(),...e.components};return r?(0,s.jsx)(r,{...e,children:(0,s.jsx)(l,{...e})}):l(e)}},75251:(e,r,t)=>{var s=t(67294),n=Symbol.for("react.element"),o=Symbol.for("react.fragment"),i=Object.prototype.hasOwnProperty,a=s.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED.ReactCurrentOwner,d={key:!0,ref:!0,__self:!0,__source:!0};function p(e,r,t){var s,o={},p=null,l=null;for(s in void 0!==t&&(p=""+t),void 0!==r.key&&(p=""+r.key),void 0!==r.ref&&(l=r.ref),r)i.call(r,s)&&!d.hasOwnProperty(s)&&(o[s]=r[s]);if(e&&e.defaultProps)for(s in r=e.defaultProps)void 0===o[s]&&(o[s]=r[s]);return{$$typeof:n,type:e,key:p,ref:l,props:o,_owner:a.current}}r.Fragment=o,r.jsx=p,r.jsxs=p},85893:(e,r,t)=>{e.exports=t(75251)},11151:(e,r,t)=>{t.d(r,{Z:()=>a,a:()=>i});var s=t(67294);const n={},o=s.createContext(n);function i(e){const r=s.useContext(o);return s.useMemo((function(){return"function"==typeof e?e(r):{...r,...e}}),[r,e])}function a(e){let r;return r=e.disableParentContext?"function"==typeof e.components?e.components(n):e.components||n:i(e.components),s.createElement(o.Provider,{value:r},e.children)}}}]);