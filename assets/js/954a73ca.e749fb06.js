"use strict";(self.webpackChunkwebsite=self.webpackChunkwebsite||[]).push([[83055],{3905:(e,n,a)=>{a.d(n,{Zo:()=>s,kt:()=>P});var r=a(67294);function i(e,n,a){return n in e?Object.defineProperty(e,n,{value:a,enumerable:!0,configurable:!0,writable:!0}):e[n]=a,e}function t(e,n){var a=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);n&&(r=r.filter((function(n){return Object.getOwnPropertyDescriptor(e,n).enumerable}))),a.push.apply(a,r)}return a}function o(e){for(var n=1;n<arguments.length;n++){var a=null!=arguments[n]?arguments[n]:{};n%2?t(Object(a),!0).forEach((function(n){i(e,n,a[n])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(a)):t(Object(a)).forEach((function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(a,n))}))}return e}function l(e,n){if(null==e)return{};var a,r,i=function(e,n){if(null==e)return{};var a,r,i={},t=Object.keys(e);for(r=0;r<t.length;r++)a=t[r],n.indexOf(a)>=0||(i[a]=e[a]);return i}(e,n);if(Object.getOwnPropertySymbols){var t=Object.getOwnPropertySymbols(e);for(r=0;r<t.length;r++)a=t[r],n.indexOf(a)>=0||Object.prototype.propertyIsEnumerable.call(e,a)&&(i[a]=e[a])}return i}var p=r.createContext({}),c=function(e){var n=r.useContext(p),a=n;return e&&(a="function"==typeof e?e(n):o(o({},n),e)),a},s=function(e){var n=c(e.components);return r.createElement(p.Provider,{value:n},e.children)},d={inlineCode:"code",wrapper:function(e){var n=e.children;return r.createElement(r.Fragment,{},n)}},u=r.forwardRef((function(e,n){var a=e.components,i=e.mdxType,t=e.originalType,p=e.parentName,s=l(e,["components","mdxType","originalType","parentName"]),u=c(a),P=i,h=u["".concat(p,".").concat(P)]||u[P]||d[P]||t;return a?r.createElement(h,o(o({ref:n},s),{},{components:a})):r.createElement(h,o({ref:n},s))}));function P(e,n){var a=arguments,i=n&&n.mdxType;if("string"==typeof e||i){var t=a.length,o=new Array(t);o[0]=u;var l={};for(var p in n)hasOwnProperty.call(n,p)&&(l[p]=n[p]);l.originalType=e,l.mdxType="string"==typeof e?e:i,o[1]=l;for(var c=2;c<t;c++)o[c]=a[c];return r.createElement.apply(null,o)}return r.createElement.apply(null,a)}u.displayName="MDXCreateElement"},97423:(e,n,a)=>{a.r(n),a.d(n,{assets:()=>c,contentTitle:()=>l,default:()=>u,frontMatter:()=>o,metadata:()=>p,toc:()=>s});a(67294);var r=a(3905);function i(){return i=Object.assign||function(e){for(var n=1;n<arguments.length;n++){var a=arguments[n];for(var r in a)Object.prototype.hasOwnProperty.call(a,r)&&(e[r]=a[r])}return e},i.apply(this,arguments)}function t(e,n){if(null==e)return{};var a,r,i=function(e,n){if(null==e)return{};var a,r,i={},t=Object.keys(e);for(r=0;r<t.length;r++)a=t[r],n.indexOf(a)>=0||(i[a]=e[a]);return i}(e,n);if(Object.getOwnPropertySymbols){var t=Object.getOwnPropertySymbols(e);for(r=0;r<t.length;r++)a=t[r],n.indexOf(a)>=0||Object.prototype.propertyIsEnumerable.call(e,a)&&(i[a]=e[a])}return i}const o={sidebar_label:"devices"},l="devices variable",p={unversionedId:"api/puppeteer.devices",id:"version-19.8.1/api/puppeteer.devices",title:"devices variable",description:"Warning: This API is now obsolete.",source:"@site/versioned_docs/version-19.8.1/api/puppeteer.devices.md",sourceDirName:"api",slug:"/api/puppeteer.devices",permalink:"/api/puppeteer.devices",draft:!1,tags:[],version:"19.8.1",frontMatter:{sidebar_label:"devices"},sidebar:"api",previous:{title:"DeviceRequestPromptDevice.name",permalink:"/api/puppeteer.devicerequestpromptdevice.name"},next:{title:"ElementFor",permalink:"/api/puppeteer.elementfor"}},c={},s=[{value:"Signature:",id:"signature",level:4}],d={toc:s};function u(e){var{components:n}=e,a=t(e,["components"]);return(0,r.kt)("wrapper",i({},d,a,{components:n,mdxType:"MDXLayout"}),(0,r.kt)("h1",i({},{id:"devices-variable"}),"devices variable"),(0,r.kt)("blockquote",null,(0,r.kt)("p",{parentName:"blockquote"},"Warning: This API is now obsolete."),(0,r.kt)("p",{parentName:"blockquote"},"Import ",(0,r.kt)("a",i({parentName:"p"},{href:"/api/puppeteer.knowndevices"}),"KnownDevices"))),(0,r.kt)("h4",i({},{id:"signature"}),"Signature:"),(0,r.kt)("pre",null,(0,r.kt)("code",i({parentName:"pre"},{className:"language-typescript"}),"devices: Readonly<\n  Record<\n    | 'Blackberry PlayBook'\n    | 'Blackberry PlayBook landscape'\n    | 'BlackBerry Z30'\n    | 'BlackBerry Z30 landscape'\n    | 'Galaxy Note 3'\n    | 'Galaxy Note 3 landscape'\n    | 'Galaxy Note II'\n    | 'Galaxy Note II landscape'\n    | 'Galaxy S III'\n    | 'Galaxy S III landscape'\n    | 'Galaxy S5'\n    | 'Galaxy S5 landscape'\n    | 'Galaxy S8'\n    | 'Galaxy S8 landscape'\n    | 'Galaxy S9+'\n    | 'Galaxy S9+ landscape'\n    | 'Galaxy Tab S4'\n    | 'Galaxy Tab S4 landscape'\n    | 'iPad'\n    | 'iPad landscape'\n    | 'iPad (gen 6)'\n    | 'iPad (gen 6) landscape'\n    | 'iPad (gen 7)'\n    | 'iPad (gen 7) landscape'\n    | 'iPad Mini'\n    | 'iPad Mini landscape'\n    | 'iPad Pro'\n    | 'iPad Pro landscape'\n    | 'iPad Pro 11'\n    | 'iPad Pro 11 landscape'\n    | 'iPhone 4'\n    | 'iPhone 4 landscape'\n    | 'iPhone 5'\n    | 'iPhone 5 landscape'\n    | 'iPhone 6'\n    | 'iPhone 6 landscape'\n    | 'iPhone 6 Plus'\n    | 'iPhone 6 Plus landscape'\n    | 'iPhone 7'\n    | 'iPhone 7 landscape'\n    | 'iPhone 7 Plus'\n    | 'iPhone 7 Plus landscape'\n    | 'iPhone 8'\n    | 'iPhone 8 landscape'\n    | 'iPhone 8 Plus'\n    | 'iPhone 8 Plus landscape'\n    | 'iPhone SE'\n    | 'iPhone SE landscape'\n    | 'iPhone X'\n    | 'iPhone X landscape'\n    | 'iPhone XR'\n    | 'iPhone XR landscape'\n    | 'iPhone 11'\n    | 'iPhone 11 landscape'\n    | 'iPhone 11 Pro'\n    | 'iPhone 11 Pro landscape'\n    | 'iPhone 11 Pro Max'\n    | 'iPhone 11 Pro Max landscape'\n    | 'iPhone 12'\n    | 'iPhone 12 landscape'\n    | 'iPhone 12 Pro'\n    | 'iPhone 12 Pro landscape'\n    | 'iPhone 12 Pro Max'\n    | 'iPhone 12 Pro Max landscape'\n    | 'iPhone 12 Mini'\n    | 'iPhone 12 Mini landscape'\n    | 'iPhone 13'\n    | 'iPhone 13 landscape'\n    | 'iPhone 13 Pro'\n    | 'iPhone 13 Pro landscape'\n    | 'iPhone 13 Pro Max'\n    | 'iPhone 13 Pro Max landscape'\n    | 'iPhone 13 Mini'\n    | 'iPhone 13 Mini landscape'\n    | 'JioPhone 2'\n    | 'JioPhone 2 landscape'\n    | 'Kindle Fire HDX'\n    | 'Kindle Fire HDX landscape'\n    | 'LG Optimus L70'\n    | 'LG Optimus L70 landscape'\n    | 'Microsoft Lumia 550'\n    | 'Microsoft Lumia 950'\n    | 'Microsoft Lumia 950 landscape'\n    | 'Nexus 10'\n    | 'Nexus 10 landscape'\n    | 'Nexus 4'\n    | 'Nexus 4 landscape'\n    | 'Nexus 5'\n    | 'Nexus 5 landscape'\n    | 'Nexus 5X'\n    | 'Nexus 5X landscape'\n    | 'Nexus 6'\n    | 'Nexus 6 landscape'\n    | 'Nexus 6P'\n    | 'Nexus 6P landscape'\n    | 'Nexus 7'\n    | 'Nexus 7 landscape'\n    | 'Nokia Lumia 520'\n    | 'Nokia Lumia 520 landscape'\n    | 'Nokia N9'\n    | 'Nokia N9 landscape'\n    | 'Pixel 2'\n    | 'Pixel 2 landscape'\n    | 'Pixel 2 XL'\n    | 'Pixel 2 XL landscape'\n    | 'Pixel 3'\n    | 'Pixel 3 landscape'\n    | 'Pixel 4'\n    | 'Pixel 4 landscape'\n    | 'Pixel 4a (5G)'\n    | 'Pixel 4a (5G) landscape'\n    | 'Pixel 5'\n    | 'Pixel 5 landscape'\n    | 'Moto G4'\n    | 'Moto G4 landscape',\n    Device\n  >\n>;\n")))}u.isMDXComponent=!0}}]);