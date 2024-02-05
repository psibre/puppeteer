/*! For license information please see 10f5199a.d6f0ddde.js.LICENSE.txt */
"use strict";(self.webpackChunkwebsite=self.webpackChunkwebsite||[]).push([[11693],{50975:(e,t,r)=>{r.r(t),r.d(t,{assets:()=>i,contentTitle:()=>a,default:()=>p,frontMatter:()=>l,metadata:()=>c,toc:()=>o});var s=r(85893),n=r(11151);const l={sidebar_label:"Page.select"},a="Page.select() method",c={id:"api/puppeteer.page.select",title:"Page.select() method",description:"Triggers a change and input event once all the provided options have been selected. If there's no ` element matching selector`, the method throws an error.",source:"@site/versioned_docs/version-22.0.0/api/puppeteer.page.select.md",sourceDirName:"api",slug:"/api/puppeteer.page.select",permalink:"/api/puppeteer.page.select",draft:!1,unlisted:!1,tags:[],version:"22.0.0",frontMatter:{sidebar_label:"Page.select"},sidebar:"api",previous:{title:"Page.screenshot_1",permalink:"/api/puppeteer.page.screenshot_1"},next:{title:"Page.setBypassCSP",permalink:"/api/puppeteer.page.setbypasscsp"}},i={},o=[{value:"Signature:",id:"signature",level:4},{value:"Parameters",id:"parameters",level:2},{value:"Remarks",id:"remarks",level:2},{value:"Example",id:"example",level:2}];function d(e){const t={a:"a",code:"code",h1:"h1",h2:"h2",h4:"h4",p:"p",pre:"pre",strong:"strong",table:"table",tbody:"tbody",td:"td",th:"th",thead:"thead",tr:"tr",...(0,n.a)(),...e.components};return(0,s.jsxs)(s.Fragment,{children:[(0,s.jsx)(t.h1,{id:"pageselect-method",children:"Page.select() method"}),"\n",(0,s.jsxs)(t.p,{children:["Triggers a ",(0,s.jsx)(t.code,{children:"change"})," and ",(0,s.jsx)(t.code,{children:"input"})," event once all the provided options have been selected. If there's no ",(0,s.jsx)(t.code,{children:"<select>"})," element matching ",(0,s.jsx)(t.code,{children:"selector"}),", the method throws an error."]}),"\n",(0,s.jsx)(t.h4,{id:"signature",children:"Signature:"}),"\n",(0,s.jsx)(t.pre,{children:(0,s.jsx)(t.code,{className:"language-typescript",children:"class Page {\n  select(selector: string, ...values: string[]): Promise<string[]>;\n}\n"})}),"\n",(0,s.jsx)(t.h2,{id:"parameters",children:"Parameters"}),"\n",(0,s.jsxs)(t.table,{children:[(0,s.jsx)(t.thead,{children:(0,s.jsxs)(t.tr,{children:[(0,s.jsx)(t.th,{children:"Parameter"}),(0,s.jsx)(t.th,{children:"Type"}),(0,s.jsx)(t.th,{children:"Description"})]})}),(0,s.jsxs)(t.tbody,{children:[(0,s.jsxs)(t.tr,{children:[(0,s.jsx)(t.td,{children:"selector"}),(0,s.jsx)(t.td,{children:"string"}),(0,s.jsxs)(t.td,{children:["A ",(0,s.jsx)(t.a,{href:"https://developer.mozilla.org/en-US/docs/Web/CSS/CSS_Selectors",children:"Selector"})," to query the page for"]})]}),(0,s.jsxs)(t.tr,{children:[(0,s.jsx)(t.td,{children:"values"}),(0,s.jsx)(t.td,{children:"string[]"}),(0,s.jsxs)(t.td,{children:["Values of options to select. If the ",(0,s.jsx)("code",{children:"<select>"})," has the ",(0,s.jsx)("code",{children:"multiple"})," attribute, all values are considered, otherwise only the first one is taken into account."]})]})]})]}),"\n",(0,s.jsx)(t.p,{children:(0,s.jsx)(t.strong,{children:"Returns:"})}),"\n",(0,s.jsx)(t.p,{children:"Promise<string[]>"}),"\n",(0,s.jsx)(t.h2,{id:"remarks",children:"Remarks"}),"\n",(0,s.jsxs)(t.p,{children:["Shortcut for ",(0,s.jsx)(t.a,{href:"/api/puppeteer.frame.select",children:"page.mainFrame().select()"})]}),"\n",(0,s.jsx)(t.h2,{id:"example",children:"Example"}),"\n",(0,s.jsx)(t.pre,{children:(0,s.jsx)(t.code,{className:"language-ts",children:"page.select('select#colors', 'blue'); // single selection\npage.select('select#colors', 'red', 'green', 'blue'); // multiple selections\n"})})]})}function p(e={}){const{wrapper:t}={...(0,n.a)(),...e.components};return t?(0,s.jsx)(t,{...e,children:(0,s.jsx)(d,{...e})}):d(e)}},75251:(e,t,r)=>{var s=r(67294),n=Symbol.for("react.element"),l=Symbol.for("react.fragment"),a=Object.prototype.hasOwnProperty,c=s.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED.ReactCurrentOwner,i={key:!0,ref:!0,__self:!0,__source:!0};function o(e,t,r){var s,l={},o=null,d=null;for(s in void 0!==r&&(o=""+r),void 0!==t.key&&(o=""+t.key),void 0!==t.ref&&(d=t.ref),t)a.call(t,s)&&!i.hasOwnProperty(s)&&(l[s]=t[s]);if(e&&e.defaultProps)for(s in t=e.defaultProps)void 0===l[s]&&(l[s]=t[s]);return{$$typeof:n,type:e,key:o,ref:d,props:l,_owner:c.current}}t.Fragment=l,t.jsx=o,t.jsxs=o},85893:(e,t,r)=>{e.exports=r(75251)},11151:(e,t,r)=>{r.d(t,{Z:()=>c,a:()=>a});var s=r(67294);const n={},l=s.createContext(n);function a(e){const t=s.useContext(l);return s.useMemo((function(){return"function"==typeof e?e(t):{...t,...e}}),[t,e])}function c(e){let t;return t=e.disableParentContext?"function"==typeof e.components?e.components(n):e.components||n:a(e.components),s.createElement(l.Provider,{value:t},e.children)}}}]);