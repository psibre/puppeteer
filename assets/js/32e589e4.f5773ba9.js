"use strict";(self.webpackChunkwebsite=self.webpackChunkwebsite||[]).push([[87027],{3905:(e,t,r)=>{r.d(t,{Zo:()=>u,kt:()=>m});var n=r(67294);function a(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function p(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function o(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?p(Object(r),!0).forEach((function(t){a(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):p(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function s(e,t){if(null==e)return{};var r,n,a=function(e,t){if(null==e)return{};var r,n,a={},p=Object.keys(e);for(n=0;n<p.length;n++)r=p[n],t.indexOf(r)>=0||(a[r]=e[r]);return a}(e,t);if(Object.getOwnPropertySymbols){var p=Object.getOwnPropertySymbols(e);for(n=0;n<p.length;n++)r=p[n],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(a[r]=e[r])}return a}var i=n.createContext({}),l=function(e){var t=n.useContext(i),r=t;return e&&(r="function"==typeof e?e(t):o(o({},t),e)),r},u=function(e){var t=l(e.components);return n.createElement(i.Provider,{value:t},e.children)},c={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},d=n.forwardRef((function(e,t){var r=e.components,a=e.mdxType,p=e.originalType,i=e.parentName,u=s(e,["components","mdxType","originalType","parentName"]),d=l(r),m=a,f=d["".concat(i,".").concat(m)]||d[m]||c[m]||p;return r?n.createElement(f,o(o({ref:t},u),{},{components:r})):n.createElement(f,o({ref:t},u))}));function m(e,t){var r=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var p=r.length,o=new Array(p);o[0]=d;var s={};for(var i in t)hasOwnProperty.call(t,i)&&(s[i]=t[i]);s.originalType=e,s.mdxType="string"==typeof e?e:a,o[1]=s;for(var l=2;l<p;l++)o[l]=r[l];return n.createElement.apply(null,o)}return n.createElement.apply(null,r)}d.displayName="MDXCreateElement"},5367:(e,t,r)=>{r.r(t),r.d(t,{assets:()=>l,contentTitle:()=>s,default:()=>d,frontMatter:()=>o,metadata:()=>i,toc:()=>u});r(67294);var n=r(3905);function a(){return a=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var r=arguments[t];for(var n in r)Object.prototype.hasOwnProperty.call(r,n)&&(e[n]=r[n])}return e},a.apply(this,arguments)}function p(e,t){if(null==e)return{};var r,n,a=function(e,t){if(null==e)return{};var r,n,a={},p=Object.keys(e);for(n=0;n<p.length;n++)r=p[n],t.indexOf(r)>=0||(a[r]=e[r]);return a}(e,t);if(Object.getOwnPropertySymbols){var p=Object.getOwnPropertySymbols(e);for(n=0;n<p.length;n++)r=p[n],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(a[r]=e[r])}return a}const o={sidebar_label:"HTTPRequest.respond"},s="HTTPRequest.respond() method",i={unversionedId:"api/puppeteer.httprequest.respond",id:"version-21.3.2/api/puppeteer.httprequest.respond",title:"HTTPRequest.respond() method",description:"Fulfills a request with the given response.",source:"@site/versioned_docs/version-21.3.2/api/puppeteer.httprequest.respond.md",sourceDirName:"api",slug:"/api/puppeteer.httprequest.respond",permalink:"/api/puppeteer.httprequest.respond",draft:!1,tags:[],version:"21.3.2",frontMatter:{sidebar_label:"HTTPRequest.respond"},sidebar:"api",previous:{title:"HTTPRequest.resourceType",permalink:"/api/puppeteer.httprequest.resourcetype"},next:{title:"HTTPRequest.response",permalink:"/api/puppeteer.httprequest.response"}},l={},u=[{value:"Signature:",id:"signature",level:4},{value:"Parameters",id:"parameters",level:2},{value:"Remarks",id:"remarks",level:2},{value:"Example",id:"example",level:2}],c={toc:u};function d(e){var{components:t}=e,r=p(e,["components"]);return(0,n.kt)("wrapper",a({},c,r,{components:t,mdxType:"MDXLayout"}),(0,n.kt)("h1",a({},{id:"httprequestrespond-method"}),"HTTPRequest.respond() method"),(0,n.kt)("p",null,"Fulfills a request with the given response."),(0,n.kt)("h4",a({},{id:"signature"}),"Signature:"),(0,n.kt)("pre",null,(0,n.kt)("code",a({parentName:"pre"},{className:"language-typescript"}),"class HTTPRequest {\n  respond(\n    response: Partial<ResponseForRequest>,\n    priority?: number\n  ): Promise<void>;\n}\n")),(0,n.kt)("h2",a({},{id:"parameters"}),"Parameters"),(0,n.kt)("table",null,(0,n.kt)("thead",{parentName:"table"},(0,n.kt)("tr",{parentName:"thead"},(0,n.kt)("th",a({parentName:"tr"},{align:null}),"Parameter"),(0,n.kt)("th",a({parentName:"tr"},{align:null}),"Type"),(0,n.kt)("th",a({parentName:"tr"},{align:null}),"Description"))),(0,n.kt)("tbody",{parentName:"table"},(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",a({parentName:"tr"},{align:null}),"response"),(0,n.kt)("td",a({parentName:"tr"},{align:null}),"Partial","<",(0,n.kt)("a",a({parentName:"td"},{href:"/api/puppeteer.responseforrequest"}),"ResponseForRequest"),">"),(0,n.kt)("td",a({parentName:"tr"},{align:null}),"the response to fulfill the request with.")),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",a({parentName:"tr"},{align:null}),"priority"),(0,n.kt)("td",a({parentName:"tr"},{align:null}),"number"),(0,n.kt)("td",a({parentName:"tr"},{align:null}),(0,n.kt)("em",{parentName:"td"},"(Optional)")," If provided, intercept is resolved using cooperative handling rules. Otherwise, intercept is resolved immediately.")))),(0,n.kt)("p",null,(0,n.kt)("strong",{parentName:"p"},"Returns:")),(0,n.kt)("p",null,"Promise","<","void",">"),(0,n.kt)("h2",a({},{id:"remarks"}),"Remarks"),(0,n.kt)("p",null,"To use this, request interception should be enabled with ",(0,n.kt)("a",a({parentName:"p"},{href:"/api/puppeteer.page.setrequestinterception"}),"Page.setRequestInterception()"),"."),(0,n.kt)("p",null,"Exception is immediately thrown if the request interception is not enabled."),(0,n.kt)("h2",a({},{id:"example"}),"Example"),(0,n.kt)("p",null,"An example of fulfilling all requests with 404 responses:"),(0,n.kt)("pre",null,(0,n.kt)("code",a({parentName:"pre"},{className:"language-ts"}),"await page.setRequestInterception(true);\npage.on('request', request => {\n  request.respond({\n    status: 404,\n    contentType: 'text/plain',\n    body: 'Not Found!',\n  });\n});\n")),(0,n.kt)("p",null,"NOTE: Mocking responses for dataURL requests is not supported. Calling ",(0,n.kt)("inlineCode",{parentName:"p"},"request.respond")," for a dataURL request is a noop."))}d.isMDXComponent=!0}}]);