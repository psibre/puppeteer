"use strict";(self.webpackChunkwebsite=self.webpackChunkwebsite||[]).push([[14552],{3905:(t,e,n)=>{n.d(e,{Zo:()=>u,kt:()=>d});var r=n(67294);function a(t,e,n){return e in t?Object.defineProperty(t,e,{value:n,enumerable:!0,configurable:!0,writable:!0}):t[e]=n,t}function l(t,e){var n=Object.keys(t);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(t);e&&(r=r.filter((function(e){return Object.getOwnPropertyDescriptor(t,e).enumerable}))),n.push.apply(n,r)}return n}function o(t){for(var e=1;e<arguments.length;e++){var n=null!=arguments[e]?arguments[e]:{};e%2?l(Object(n),!0).forEach((function(e){a(t,e,n[e])})):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(n)):l(Object(n)).forEach((function(e){Object.defineProperty(t,e,Object.getOwnPropertyDescriptor(n,e))}))}return t}function p(t,e){if(null==t)return{};var n,r,a=function(t,e){if(null==t)return{};var n,r,a={},l=Object.keys(t);for(r=0;r<l.length;r++)n=l[r],e.indexOf(n)>=0||(a[n]=t[n]);return a}(t,e);if(Object.getOwnPropertySymbols){var l=Object.getOwnPropertySymbols(t);for(r=0;r<l.length;r++)n=l[r],e.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(t,n)&&(a[n]=t[n])}return a}var i=r.createContext({}),c=function(t){var e=r.useContext(i),n=e;return t&&(n="function"==typeof t?t(e):o(o({},e),t)),n},u=function(t){var e=c(t.components);return r.createElement(i.Provider,{value:e},t.children)},s={inlineCode:"code",wrapper:function(t){var e=t.children;return r.createElement(r.Fragment,{},e)}},m=r.forwardRef((function(t,e){var n=t.components,a=t.mdxType,l=t.originalType,i=t.parentName,u=p(t,["components","mdxType","originalType","parentName"]),m=c(n),d=a,k=m["".concat(i,".").concat(d)]||m[d]||s[d]||l;return n?r.createElement(k,o(o({ref:e},u),{},{components:n})):r.createElement(k,o({ref:e},u))}));function d(t,e){var n=arguments,a=e&&e.mdxType;if("string"==typeof t||a){var l=n.length,o=new Array(l);o[0]=m;var p={};for(var i in e)hasOwnProperty.call(e,i)&&(p[i]=e[i]);p.originalType=t,p.mdxType="string"==typeof t?t:a,o[1]=p;for(var c=2;c<l;c++)o[c]=n[c];return r.createElement.apply(null,o)}return r.createElement.apply(null,n)}m.displayName="MDXCreateElement"},97682:(t,e,n)=>{n.r(e),n.d(e,{assets:()=>c,contentTitle:()=>p,default:()=>m,frontMatter:()=>o,metadata:()=>i,toc:()=>u});n(67294);var r=n(3905);function a(){return a=Object.assign||function(t){for(var e=1;e<arguments.length;e++){var n=arguments[e];for(var r in n)Object.prototype.hasOwnProperty.call(n,r)&&(t[r]=n[r])}return t},a.apply(this,arguments)}function l(t,e){if(null==t)return{};var n,r,a=function(t,e){if(null==t)return{};var n,r,a={},l=Object.keys(t);for(r=0;r<l.length;r++)n=l[r],e.indexOf(n)>=0||(a[n]=t[n]);return a}(t,e);if(Object.getOwnPropertySymbols){var l=Object.getOwnPropertySymbols(t);for(r=0;r<l.length;r++)n=l[r],e.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(t,n)&&(a[n]=t[n])}return a}const o={sidebar_label:"Connection"},p="Connection class",i={unversionedId:"api/puppeteer.connection",id:"version-19.8.1/api/puppeteer.connection",title:"Connection class",description:"Signature:",source:"@site/versioned_docs/version-19.8.1/api/puppeteer.connection.md",sourceDirName:"api",slug:"/api/puppeteer.connection",permalink:"/api/puppeteer.connection",draft:!1,tags:[],version:"19.8.1",frontMatter:{sidebar_label:"Connection"},sidebar:"api",previous:{title:"connect",permalink:"/api/puppeteer.connect"},next:{title:"Connection.(constructor)",permalink:"/api/puppeteer.connection._constructor_"}},c={},u=[{value:"Signature:",id:"signature",level:4},{value:"Constructors",id:"constructors",level:2},{value:"Properties",id:"properties",level:2},{value:"Methods",id:"methods",level:2}],s={toc:u};function m(t){var{components:e}=t,n=l(t,["components"]);return(0,r.kt)("wrapper",a({},s,n,{components:e,mdxType:"MDXLayout"}),(0,r.kt)("h1",a({},{id:"connection-class"}),"Connection class"),(0,r.kt)("h4",a({},{id:"signature"}),"Signature:"),(0,r.kt)("pre",null,(0,r.kt)("code",a({parentName:"pre"},{className:"language-typescript"}),"export declare class Connection extends EventEmitter\n")),(0,r.kt)("p",null,(0,r.kt)("strong",{parentName:"p"},"Extends:")," ",(0,r.kt)("a",a({parentName:"p"},{href:"/api/puppeteer.eventemitter"}),"EventEmitter")),(0,r.kt)("h2",a({},{id:"constructors"}),"Constructors"),(0,r.kt)("table",null,(0,r.kt)("thead",{parentName:"table"},(0,r.kt)("tr",{parentName:"thead"},(0,r.kt)("th",a({parentName:"tr"},{align:null}),"Constructor"),(0,r.kt)("th",a({parentName:"tr"},{align:null}),"Modifiers"),(0,r.kt)("th",a({parentName:"tr"},{align:null}),"Description"))),(0,r.kt)("tbody",{parentName:"table"},(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",a({parentName:"tr"},{align:null}),(0,r.kt)("a",a({parentName:"td"},{href:"/api/puppeteer.connection._constructor_"}),"(constructor)(url, transport, delay, timeout)")),(0,r.kt)("td",a({parentName:"tr"},{align:null})),(0,r.kt)("td",a({parentName:"tr"},{align:null}),"Constructs a new instance of the ",(0,r.kt)("code",null,"Connection")," class")))),(0,r.kt)("h2",a({},{id:"properties"}),"Properties"),(0,r.kt)("table",null,(0,r.kt)("thead",{parentName:"table"},(0,r.kt)("tr",{parentName:"thead"},(0,r.kt)("th",a({parentName:"tr"},{align:null}),"Property"),(0,r.kt)("th",a({parentName:"tr"},{align:null}),"Modifiers"),(0,r.kt)("th",a({parentName:"tr"},{align:null}),"Type"),(0,r.kt)("th",a({parentName:"tr"},{align:null}),"Description"))),(0,r.kt)("tbody",{parentName:"table"},(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",a({parentName:"tr"},{align:null}),(0,r.kt)("a",a({parentName:"td"},{href:"/api/puppeteer.connection.timeout"}),"timeout")),(0,r.kt)("td",a({parentName:"tr"},{align:null}),(0,r.kt)("code",null,"readonly")),(0,r.kt)("td",a({parentName:"tr"},{align:null}),"number"),(0,r.kt)("td",a({parentName:"tr"},{align:null}))))),(0,r.kt)("h2",a({},{id:"methods"}),"Methods"),(0,r.kt)("table",null,(0,r.kt)("thead",{parentName:"table"},(0,r.kt)("tr",{parentName:"thead"},(0,r.kt)("th",a({parentName:"tr"},{align:null}),"Method"),(0,r.kt)("th",a({parentName:"tr"},{align:null}),"Modifiers"),(0,r.kt)("th",a({parentName:"tr"},{align:null}),"Description"))),(0,r.kt)("tbody",{parentName:"table"},(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",a({parentName:"tr"},{align:null}),(0,r.kt)("a",a({parentName:"td"},{href:"/api/puppeteer.connection.createsession"}),"createSession(targetInfo)")),(0,r.kt)("td",a({parentName:"tr"},{align:null})),(0,r.kt)("td",a({parentName:"tr"},{align:null}))),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",a({parentName:"tr"},{align:null}),(0,r.kt)("a",a({parentName:"td"},{href:"/api/puppeteer.connection.dispose"}),"dispose()")),(0,r.kt)("td",a({parentName:"tr"},{align:null})),(0,r.kt)("td",a({parentName:"tr"},{align:null}))),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",a({parentName:"tr"},{align:null}),(0,r.kt)("a",a({parentName:"td"},{href:"/api/puppeteer.connection.fromsession"}),"fromSession(session)")),(0,r.kt)("td",a({parentName:"tr"},{align:null}),(0,r.kt)("code",null,"static")),(0,r.kt)("td",a({parentName:"tr"},{align:null}))),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",a({parentName:"tr"},{align:null}),(0,r.kt)("a",a({parentName:"td"},{href:"/api/puppeteer.connection.send"}),"send(method, paramArgs)")),(0,r.kt)("td",a({parentName:"tr"},{align:null})),(0,r.kt)("td",a({parentName:"tr"},{align:null}))),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",a({parentName:"tr"},{align:null}),(0,r.kt)("a",a({parentName:"td"},{href:"/api/puppeteer.connection.session"}),"session(sessionId)")),(0,r.kt)("td",a({parentName:"tr"},{align:null})),(0,r.kt)("td",a({parentName:"tr"},{align:null}))),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",a({parentName:"tr"},{align:null}),(0,r.kt)("a",a({parentName:"td"},{href:"/api/puppeteer.connection.url"}),"url()")),(0,r.kt)("td",a({parentName:"tr"},{align:null})),(0,r.kt)("td",a({parentName:"tr"},{align:null}))))))}m.isMDXComponent=!0}}]);