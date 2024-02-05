/*! For license information please see c7393b04.e00c011e.js.LICENSE.txt */
"use strict";(self.webpackChunkwebsite=self.webpackChunkwebsite||[]).push([[45386],{12639:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>i,contentTitle:()=>s,default:()=>p,frontMatter:()=>a,metadata:()=>o,toc:()=>d});var r=n(85893),l=n(11151);const a={sidebar_label:"ElementHandle.$$"},s="ElementHandle.$$() method",o={id:"api/puppeteer.elementhandle.__",title:"ElementHandle.$$() method",description:"Queries the current element for all elements matching the given selector.",source:"@site/versioned_docs/version-22.0.0/api/puppeteer.elementhandle.__.md",sourceDirName:"api",slug:"/api/puppeteer.elementhandle.__",permalink:"/api/puppeteer.elementhandle.__",draft:!1,unlisted:!1,tags:[],version:"22.0.0",frontMatter:{sidebar_label:"ElementHandle.$$"},sidebar:"api",previous:{title:"ElementHandle.$",permalink:"/api/puppeteer.elementhandle._"},next:{title:"ElementHandle.$$eval",permalink:"/api/puppeteer.elementhandle.__eval"}},i={},d=[{value:"Signature:",id:"signature",level:4},{value:"Parameters",id:"parameters",level:2}];function c(e){const t={a:"a",code:"code",h1:"h1",h2:"h2",h4:"h4",p:"p",pre:"pre",strong:"strong",table:"table",tbody:"tbody",td:"td",th:"th",thead:"thead",tr:"tr",...(0,l.a)(),...e.components};return(0,r.jsxs)(r.Fragment,{children:[(0,r.jsx)(t.h1,{id:"elementhandle-method",children:"ElementHandle.$$() method"}),"\n",(0,r.jsx)(t.p,{children:"Queries the current element for all elements matching the given selector."}),"\n",(0,r.jsx)(t.h4,{id:"signature",children:"Signature:"}),"\n",(0,r.jsx)(t.pre,{children:(0,r.jsx)(t.code,{className:"language-typescript",children:"class ElementHandle {\n  $$<Selector extends string>(\n    selector: Selector\n  ): Promise<Array<ElementHandle<NodeFor<Selector>>>>;\n}\n"})}),"\n",(0,r.jsx)(t.h2,{id:"parameters",children:"Parameters"}),"\n",(0,r.jsxs)(t.table,{children:[(0,r.jsx)(t.thead,{children:(0,r.jsxs)(t.tr,{children:[(0,r.jsx)(t.th,{children:"Parameter"}),(0,r.jsx)(t.th,{children:"Type"}),(0,r.jsx)(t.th,{children:"Description"})]})}),(0,r.jsx)(t.tbody,{children:(0,r.jsxs)(t.tr,{children:[(0,r.jsx)(t.td,{children:"selector"}),(0,r.jsx)(t.td,{children:"Selector"}),(0,r.jsx)(t.td,{children:"The selector to query for."})]})})]}),"\n",(0,r.jsx)(t.p,{children:(0,r.jsx)(t.strong,{children:"Returns:"})}),"\n",(0,r.jsxs)(t.p,{children:["Promise<Array<",(0,r.jsx)(t.a,{href:"/api/puppeteer.elementhandle",children:"ElementHandle"}),"<",(0,r.jsx)(t.a,{href:"/api/puppeteer.nodefor",children:"NodeFor"}),"<Selector>>>>"]}),"\n",(0,r.jsxs)(t.p,{children:["An array of ",(0,r.jsx)(t.a,{href:"/api/puppeteer.elementhandle",children:"element handles"})," that point to elements matching the given selector."]})]})}function p(e={}){const{wrapper:t}={...(0,l.a)(),...e.components};return t?(0,r.jsx)(t,{...e,children:(0,r.jsx)(c,{...e})}):c(e)}},75251:(e,t,n)=>{var r=n(67294),l=Symbol.for("react.element"),a=Symbol.for("react.fragment"),s=Object.prototype.hasOwnProperty,o=r.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED.ReactCurrentOwner,i={key:!0,ref:!0,__self:!0,__source:!0};function d(e,t,n){var r,a={},d=null,c=null;for(r in void 0!==n&&(d=""+n),void 0!==t.key&&(d=""+t.key),void 0!==t.ref&&(c=t.ref),t)s.call(t,r)&&!i.hasOwnProperty(r)&&(a[r]=t[r]);if(e&&e.defaultProps)for(r in t=e.defaultProps)void 0===a[r]&&(a[r]=t[r]);return{$$typeof:l,type:e,key:d,ref:c,props:a,_owner:o.current}}t.Fragment=a,t.jsx=d,t.jsxs=d},85893:(e,t,n)=>{e.exports=n(75251)},11151:(e,t,n)=>{n.d(t,{Z:()=>o,a:()=>s});var r=n(67294);const l={},a=r.createContext(l);function s(e){const t=r.useContext(a);return r.useMemo((function(){return"function"==typeof e?e(t):{...t,...e}}),[t,e])}function o(e){let t;return t=e.disableParentContext?"function"==typeof e.components?e.components(l):e.components||l:s(e.components),r.createElement(a.Provider,{value:t},e.children)}}}]);