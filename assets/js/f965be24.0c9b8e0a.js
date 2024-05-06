/*! For license information please see f965be24.0c9b8e0a.js.LICENSE.txt */
"use strict";(self.webpackChunkwebsite=self.webpackChunkwebsite||[]).push([[66154],{32779:(e,r,n)=>{n.r(r),n.d(r,{assets:()=>o,contentTitle:()=>c,default:()=>p,frontMatter:()=>i,metadata:()=>a,toc:()=>d});var t=n(85893),s=n(11151);const i={sidebar_label:"BrowserEvent"},c="BrowserEvent enum",a={id:"api/puppeteer.browserevent",title:"BrowserEvent enum",description:"All the events a browser instance may emit.",source:"@site/versioned_docs/version-22.8.0/api/puppeteer.browserevent.md",sourceDirName:"api",slug:"/api/puppeteer.browserevent",permalink:"/api/puppeteer.browserevent",draft:!1,unlisted:!1,tags:[],version:"22.8.0",frontMatter:{sidebar_label:"BrowserEvent"},sidebar:"api",previous:{title:"BrowserContextOptions",permalink:"/api/puppeteer.browsercontextoptions"},next:{title:"BrowserEvents",permalink:"/api/puppeteer.browserevents"}},o={},d=[{value:"Signature:",id:"signature",level:4},{value:"Enumeration Members",id:"enumeration-members",level:2}];function l(e){const r={a:"a",code:"code",h1:"h1",h2:"h2",h4:"h4",li:"li",p:"p",pre:"pre",strong:"strong",ul:"ul",...(0,s.a)(),...e.components};return(0,t.jsxs)(t.Fragment,{children:[(0,t.jsx)(r.h1,{id:"browserevent-enum",children:"BrowserEvent enum"}),"\n",(0,t.jsxs)(r.p,{children:["All the events a ",(0,t.jsx)(r.a,{href:"/api/puppeteer.browser",children:"browser instance"})," may emit."]}),"\n",(0,t.jsx)(r.h4,{id:"signature",children:"Signature:"}),"\n",(0,t.jsx)(r.pre,{children:(0,t.jsx)(r.code,{className:"language-typescript",children:"export declare const enum BrowserEvent\n"})}),"\n",(0,t.jsx)(r.h2,{id:"enumeration-members",children:"Enumeration Members"}),"\n",(0,t.jsxs)("table",{children:[(0,t.jsx)("thead",{children:(0,t.jsxs)("tr",{children:[(0,t.jsx)("th",{children:(0,t.jsx)(r.p,{children:"Member"})}),(0,t.jsx)("th",{children:(0,t.jsx)(r.p,{children:"Value"})}),(0,t.jsx)("th",{children:(0,t.jsx)(r.p,{children:"Description"})})]})}),(0,t.jsxs)("tbody",{children:[(0,t.jsxs)("tr",{children:[(0,t.jsx)("td",{children:(0,t.jsx)(r.p,{children:"Disconnected"})}),(0,t.jsx)("td",{children:(0,t.jsx)(r.p,{children:(0,t.jsx)(r.code,{children:'"disconnected"'})})}),(0,t.jsxs)("td",{children:[(0,t.jsx)(r.p,{children:"Emitted when Puppeteer gets disconnected from the browser instance. This might happen because either:"}),(0,t.jsxs)(r.ul,{children:["\n",(0,t.jsxs)(r.li,{children:["The browser closes/crashes or - ",(0,t.jsx)(r.a,{href:"/api/puppeteer.browser.disconnect",children:"Browser.disconnect()"})," was called."]}),"\n"]})]})]}),(0,t.jsxs)("tr",{children:[(0,t.jsx)("td",{children:(0,t.jsx)(r.p,{children:"TargetChanged"})}),(0,t.jsx)("td",{children:(0,t.jsx)(r.p,{children:(0,t.jsx)(r.code,{children:'"targetchanged"'})})}),(0,t.jsxs)("td",{children:[(0,t.jsxs)(r.p,{children:["Emitted when the URL of a target changes. Contains a ",(0,t.jsx)(r.a,{href:"/api/puppeteer.target",children:"Target"})," instance."]}),(0,t.jsx)(r.p,{children:(0,t.jsx)(r.strong,{children:"Remarks:"})}),(0,t.jsx)(r.p,{children:"Note that this includes target changes in all browser contexts."})]})]}),(0,t.jsxs)("tr",{children:[(0,t.jsx)("td",{children:(0,t.jsx)(r.p,{children:"TargetCreated"})}),(0,t.jsx)("td",{children:(0,t.jsx)(r.p,{children:(0,t.jsx)(r.code,{children:'"targetcreated"'})})}),(0,t.jsxs)("td",{children:[(0,t.jsxs)(r.p,{children:["Emitted when a target is created, for example when a new page is opened by ",(0,t.jsx)(r.a,{href:"https://developer.mozilla.org/en-US/docs/Web/API/Window/open",children:"window.open"})," or by ",(0,t.jsx)(r.a,{href:"/api/puppeteer.browser.newpage",children:"browser.newPage"})]}),(0,t.jsxs)(r.p,{children:["Contains a ",(0,t.jsx)(r.a,{href:"/api/puppeteer.target",children:"Target"})," instance."]}),(0,t.jsx)(r.p,{children:(0,t.jsx)(r.strong,{children:"Remarks:"})}),(0,t.jsx)(r.p,{children:"Note that this includes target creations in all browser contexts."})]})]}),(0,t.jsxs)("tr",{children:[(0,t.jsx)("td",{children:(0,t.jsx)(r.p,{children:"TargetDestroyed"})}),(0,t.jsx)("td",{children:(0,t.jsx)(r.p,{children:(0,t.jsx)(r.code,{children:'"targetdestroyed"'})})}),(0,t.jsxs)("td",{children:[(0,t.jsxs)(r.p,{children:["Emitted when a target is destroyed, for example when a page is closed. Contains a ",(0,t.jsx)(r.a,{href:"/api/puppeteer.target",children:"Target"})," instance."]}),(0,t.jsx)(r.p,{children:(0,t.jsx)(r.strong,{children:"Remarks:"})}),(0,t.jsx)(r.p,{children:"Note that this includes target destructions in all browser contexts."})]})]})]})]})]})}function p(e={}){const{wrapper:r}={...(0,s.a)(),...e.components};return r?(0,t.jsx)(r,{...e,children:(0,t.jsx)(l,{...e})}):l(e)}},75251:(e,r,n)=>{var t=n(67294),s=Symbol.for("react.element"),i=Symbol.for("react.fragment"),c=Object.prototype.hasOwnProperty,a=t.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED.ReactCurrentOwner,o={key:!0,ref:!0,__self:!0,__source:!0};function d(e,r,n){var t,i={},d=null,l=null;for(t in void 0!==n&&(d=""+n),void 0!==r.key&&(d=""+r.key),void 0!==r.ref&&(l=r.ref),r)c.call(r,t)&&!o.hasOwnProperty(t)&&(i[t]=r[t]);if(e&&e.defaultProps)for(t in r=e.defaultProps)void 0===i[t]&&(i[t]=r[t]);return{$$typeof:s,type:e,key:d,ref:l,props:i,_owner:a.current}}r.Fragment=i,r.jsx=d,r.jsxs=d},85893:(e,r,n)=>{e.exports=n(75251)},11151:(e,r,n)=>{n.d(r,{Z:()=>a,a:()=>c});var t=n(67294);const s={},i=t.createContext(s);function c(e){const r=t.useContext(i);return t.useMemo((function(){return"function"==typeof e?e(r):{...r,...e}}),[r,e])}function a(e){let r;return r=e.disableParentContext?"function"==typeof e.components?e.components(s):e.components||s:c(e.components),t.createElement(i.Provider,{value:r},e.children)}}}]);