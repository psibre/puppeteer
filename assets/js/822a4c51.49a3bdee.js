/*! For license information please see 822a4c51.49a3bdee.js.LICENSE.txt */
"use strict";(self.webpackChunkwebsite=self.webpackChunkwebsite||[]).push([[32254],{16098:(e,n,r)=>{r.r(n),r.d(n,{assets:()=>d,contentTitle:()=>s,default:()=>p,frontMatter:()=>o,metadata:()=>a,toc:()=>l});var t=r(85893),i=r(11151);const o={sidebar_label:"Page.goForward"},s="Page.goForward() method",a={id:"api/puppeteer.page.goforward",title:"Page.goForward() method",description:"This method navigate to the next page in history.",source:"@site/versioned_docs/version-22.6.1/api/puppeteer.page.goforward.md",sourceDirName:"api",slug:"/api/puppeteer.page.goforward",permalink:"/api/puppeteer.page.goforward",draft:!1,unlisted:!1,tags:[],version:"22.6.1",frontMatter:{sidebar_label:"Page.goForward"},sidebar:"api",previous:{title:"Page.goBack",permalink:"/api/puppeteer.page.goback"},next:{title:"Page.goto",permalink:"/api/puppeteer.page.goto"}},d={},l=[{value:"Signature:",id:"signature",level:4},{value:"Parameters",id:"parameters",level:2},{value:"Remarks",id:"remarks",level:2}];function c(e){const n={a:"a",code:"code",em:"em",h1:"h1",h2:"h2",h4:"h4",li:"li",p:"p",pre:"pre",strong:"strong",ul:"ul",...(0,i.a)(),...e.components};return(0,t.jsxs)(t.Fragment,{children:[(0,t.jsx)(n.h1,{id:"pagegoforward-method",children:"Page.goForward() method"}),"\n",(0,t.jsx)(n.p,{children:"This method navigate to the next page in history."}),"\n",(0,t.jsx)(n.h4,{id:"signature",children:"Signature:"}),"\n",(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{className:"language-typescript",children:"class Page {\n  abstract goForward(options?: WaitForOptions): Promise<HTTPResponse | null>;\n}\n"})}),"\n",(0,t.jsx)(n.h2,{id:"parameters",children:"Parameters"}),"\n",(0,t.jsxs)("table",{children:[(0,t.jsx)("thead",{children:(0,t.jsxs)("tr",{children:[(0,t.jsx)("th",{children:(0,t.jsx)(n.p,{children:"Parameter"})}),(0,t.jsx)("th",{children:(0,t.jsx)(n.p,{children:"Type"})}),(0,t.jsx)("th",{children:(0,t.jsx)(n.p,{children:"Description"})})]})}),(0,t.jsx)("tbody",{children:(0,t.jsxs)("tr",{children:[(0,t.jsx)("td",{children:(0,t.jsx)(n.p,{children:"options"})}),(0,t.jsx)("td",{children:(0,t.jsx)(n.p,{children:(0,t.jsx)(n.a,{href:"/api/puppeteer.waitforoptions",children:"WaitForOptions"})})}),(0,t.jsx)("td",{children:(0,t.jsxs)(n.p,{children:[(0,t.jsx)(n.em,{children:"(Optional)"})," Navigation Parameter"]})})]})})]}),"\n",(0,t.jsx)(n.p,{children:(0,t.jsx)(n.strong,{children:"Returns:"})}),"\n",(0,t.jsxs)(n.p,{children:["Promise<",(0,t.jsx)(n.a,{href:"/api/puppeteer.httpresponse",children:"HTTPResponse"})," | null>"]}),"\n",(0,t.jsxs)(n.p,{children:["Promise which resolves to the main resource response. In case of multiple redirects, the navigation will resolve with the response of the last redirect. If can not go forward, resolves to ",(0,t.jsx)(n.code,{children:"null"}),"."]}),"\n",(0,t.jsx)(n.h2,{id:"remarks",children:"Remarks"}),"\n",(0,t.jsxs)(n.p,{children:["The argument ",(0,t.jsx)(n.code,{children:"options"})," might have the following properties:"]}),"\n",(0,t.jsxs)(n.ul,{children:["\n",(0,t.jsxs)(n.li,{children:["\n",(0,t.jsxs)(n.p,{children:[(0,t.jsx)(n.code,{children:"timeout"})," : Maximum navigation time in milliseconds, defaults to 30 seconds, pass 0 to disable timeout. The default value can be changed by using the ",(0,t.jsx)(n.a,{href:"/api/puppeteer.page.setdefaultnavigationtimeout",children:"Page.setDefaultNavigationTimeout()"})," or ",(0,t.jsx)(n.a,{href:"/api/puppeteer.page.setdefaulttimeout",children:"Page.setDefaultTimeout()"})," methods."]}),"\n"]}),"\n",(0,t.jsxs)(n.li,{children:["\n",(0,t.jsxs)(n.p,{children:[(0,t.jsx)(n.code,{children:"waitUntil"}),": When to consider navigation succeeded, defaults to ",(0,t.jsx)(n.code,{children:"load"}),". Given an array of event strings, navigation is considered to be successful after all events have been fired. Events can be either:",(0,t.jsx)("br",{})," - ",(0,t.jsx)(n.code,{children:"load"})," : consider navigation to be finished when the load event is fired.",(0,t.jsx)("br",{})," - ",(0,t.jsx)(n.code,{children:"domcontentloaded"})," : consider navigation to be finished when the DOMContentLoaded event is fired.",(0,t.jsx)("br",{})," - ",(0,t.jsx)(n.code,{children:"networkidle0"})," : consider navigation to be finished when there are no more than 0 network connections for at least ",(0,t.jsx)(n.code,{children:"500"})," ms.",(0,t.jsx)("br",{})," - ",(0,t.jsx)(n.code,{children:"networkidle2"})," : consider navigation to be finished when there are no more than 2 network connections for at least ",(0,t.jsx)(n.code,{children:"500"})," ms."]}),"\n"]}),"\n"]})]})}function p(e={}){const{wrapper:n}={...(0,i.a)(),...e.components};return n?(0,t.jsx)(n,{...e,children:(0,t.jsx)(c,{...e})}):c(e)}},75251:(e,n,r)=>{var t=r(67294),i=Symbol.for("react.element"),o=Symbol.for("react.fragment"),s=Object.prototype.hasOwnProperty,a=t.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED.ReactCurrentOwner,d={key:!0,ref:!0,__self:!0,__source:!0};function l(e,n,r){var t,o={},l=null,c=null;for(t in void 0!==r&&(l=""+r),void 0!==n.key&&(l=""+n.key),void 0!==n.ref&&(c=n.ref),n)s.call(n,t)&&!d.hasOwnProperty(t)&&(o[t]=n[t]);if(e&&e.defaultProps)for(t in n=e.defaultProps)void 0===o[t]&&(o[t]=n[t]);return{$$typeof:i,type:e,key:l,ref:c,props:o,_owner:a.current}}n.Fragment=o,n.jsx=l,n.jsxs=l},85893:(e,n,r)=>{e.exports=r(75251)},11151:(e,n,r)=>{r.d(n,{Z:()=>a,a:()=>s});var t=r(67294);const i={},o=t.createContext(i);function s(e){const n=t.useContext(o);return t.useMemo((function(){return"function"==typeof e?e(n):{...n,...e}}),[n,e])}function a(e){let n;return n=e.disableParentContext?"function"==typeof e.components?e.components(i):e.components||i:s(e.components),t.createElement(o.Provider,{value:n},e.children)}}}]);