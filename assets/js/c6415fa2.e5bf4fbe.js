/*! For license information please see c6415fa2.e5bf4fbe.js.LICENSE.txt */
"use strict";(self.webpackChunkwebsite=self.webpackChunkwebsite||[]).push([[21796],{4285:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>h,contentTitle:()=>i,default:()=>p,frontMatter:()=>l,metadata:()=>d,toc:()=>a});var r=n(85893),s=n(11151);const l={sidebar_label:"ElementHandle"},i="ElementHandle class",d={id:"api/puppeteer.elementhandle",title:"ElementHandle class",description:"ElementHandle represents an in-page DOM element.",source:"@site/versioned_docs/version-22.6.1/api/puppeteer.elementhandle.md",sourceDirName:"api",slug:"/api/puppeteer.elementhandle",permalink:"/api/puppeteer.elementhandle",draft:!1,unlisted:!1,tags:[],version:"22.6.1",frontMatter:{sidebar_label:"ElementHandle"},sidebar:"api",previous:{title:"JSHandle.toString",permalink:"/api/puppeteer.jshandle.tostring"},next:{title:"ElementHandle.$",permalink:"/api/puppeteer.elementhandle._"}},h={},a=[{value:"Signature:",id:"signature",level:4},{value:"Remarks",id:"remarks",level:2},{value:"Properties",id:"properties",level:2},{value:"Methods",id:"methods",level:2}];function c(e){const t={a:"a",code:"code",h1:"h1",h2:"h2",h4:"h4",p:"p",pre:"pre",strong:"strong",...(0,s.a)(),...e.components};return(0,r.jsxs)(r.Fragment,{children:[(0,r.jsx)(t.h1,{id:"elementhandle-class",children:"ElementHandle class"}),"\n",(0,r.jsx)(t.p,{children:"ElementHandle represents an in-page DOM element."}),"\n",(0,r.jsx)(t.h4,{id:"signature",children:"Signature:"}),"\n",(0,r.jsx)(t.pre,{children:(0,r.jsx)(t.code,{className:"language-typescript",children:"export declare abstract class ElementHandle<ElementType extends Node = Element> extends JSHandle<ElementType>\n"})}),"\n",(0,r.jsxs)(t.p,{children:[(0,r.jsx)(t.strong,{children:"Extends:"})," ",(0,r.jsx)(t.a,{href:"/api/puppeteer.jshandle",children:"JSHandle"}),"<ElementType>"]}),"\n",(0,r.jsx)(t.h2,{id:"remarks",children:"Remarks"}),"\n",(0,r.jsxs)(t.p,{children:["ElementHandles can be created with the ",(0,r.jsx)(t.a,{href:"/api/puppeteer.page._",children:"Page.$()"})," method."]}),"\n",(0,r.jsx)(t.pre,{children:(0,r.jsx)(t.code,{className:"language-ts",children:"import puppeteer from 'puppeteer';\n\n(async () => {\n  const browser = await puppeteer.launch();\n  const page = await browser.newPage();\n  await page.goto('https://example.com');\n  const hrefElement = await page.$('a');\n  await hrefElement.click();\n  // ...\n})();\n"})}),"\n",(0,r.jsxs)(t.p,{children:["ElementHandle prevents the DOM element from being garbage-collected unless the handle is ",(0,r.jsx)(t.a,{href:"/api/puppeteer.jshandle.dispose",children:"disposed"}),". ElementHandles are auto-disposed when their origin frame gets navigated."]}),"\n",(0,r.jsxs)(t.p,{children:["ElementHandle instances can be used as arguments in ",(0,r.jsx)(t.a,{href:"/api/puppeteer.page._eval",children:"Page.$eval()"})," and ",(0,r.jsx)(t.a,{href:"/api/puppeteer.page.evaluate",children:"Page.evaluate()"})," methods."]}),"\n",(0,r.jsxs)(t.p,{children:["If you're using TypeScript, ElementHandle takes a generic argument that denotes the type of element the handle is holding within. For example, if you have a handle to a ",(0,r.jsx)(t.code,{children:"<select>"})," element, you can type it as ",(0,r.jsx)(t.code,{children:"ElementHandle<HTMLSelectElement>"})," and you get some nicer type checks."]}),"\n",(0,r.jsxs)(t.p,{children:["The constructor for this class is marked as internal. Third-party code should not call the constructor directly or create subclasses that extend the ",(0,r.jsx)(t.code,{children:"ElementHandle"})," class."]}),"\n",(0,r.jsx)(t.h2,{id:"properties",children:"Properties"}),"\n",(0,r.jsxs)("table",{children:[(0,r.jsx)("thead",{children:(0,r.jsxs)("tr",{children:[(0,r.jsx)("th",{children:(0,r.jsx)(t.p,{children:"Property"})}),(0,r.jsx)("th",{children:(0,r.jsx)(t.p,{children:"Modifiers"})}),(0,r.jsx)("th",{children:(0,r.jsx)(t.p,{children:"Type"})}),(0,r.jsx)("th",{children:(0,r.jsx)(t.p,{children:"Description"})})]})}),(0,r.jsx)("tbody",{children:(0,r.jsxs)("tr",{children:[(0,r.jsx)("td",{children:(0,r.jsx)(t.p,{children:"frame"})}),(0,r.jsx)("td",{children:(0,r.jsx)(t.p,{children:(0,r.jsx)(t.code,{children:"readonly"})})}),(0,r.jsx)("td",{children:(0,r.jsx)(t.p,{children:(0,r.jsx)(t.a,{href:"/api/puppeteer.frame",children:"Frame"})})}),(0,r.jsx)("td",{children:(0,r.jsx)(t.p,{children:"Frame corresponding to the current handle."})})]})})]}),"\n",(0,r.jsx)(t.h2,{id:"methods",children:"Methods"}),"\n",(0,r.jsxs)("table",{children:[(0,r.jsx)("thead",{children:(0,r.jsxs)("tr",{children:[(0,r.jsx)("th",{children:(0,r.jsx)(t.p,{children:"Method"})}),(0,r.jsx)("th",{children:(0,r.jsx)(t.p,{children:"Modifiers"})}),(0,r.jsx)("th",{children:(0,r.jsx)(t.p,{children:"Description"})})]})}),(0,r.jsxs)("tbody",{children:[(0,r.jsxs)("tr",{children:[(0,r.jsx)("td",{children:(0,r.jsx)(t.p,{children:(0,r.jsx)(t.a,{href:"/api/puppeteer.elementhandle._",children:"$(selector)"})})}),(0,r.jsx)("td",{}),(0,r.jsx)("td",{children:(0,r.jsx)(t.p,{children:"Queries the current element for an element matching the given selector."})})]}),(0,r.jsxs)("tr",{children:[(0,r.jsx)("td",{children:(0,r.jsx)(t.p,{children:(0,r.jsx)(t.a,{href:"/api/puppeteer.elementhandle.__",children:"$$(selector)"})})}),(0,r.jsx)("td",{}),(0,r.jsx)("td",{children:(0,r.jsx)(t.p,{children:"Queries the current element for all elements matching the given selector."})})]}),(0,r.jsxs)("tr",{children:[(0,r.jsx)("td",{children:(0,r.jsx)(t.p,{children:(0,r.jsx)(t.a,{href:"/api/puppeteer.elementhandle.__eval",children:"$$eval(selector, pageFunction, args)"})})}),(0,r.jsx)("td",{}),(0,r.jsxs)("td",{children:[(0,r.jsx)(t.p,{children:"Runs the given function on an array of elements matching the given selector in the current element."}),(0,r.jsx)(t.p,{children:"If the given function returns a promise, then this method will wait till the promise resolves."})]})]}),(0,r.jsxs)("tr",{children:[(0,r.jsx)("td",{children:(0,r.jsx)(t.p,{children:(0,r.jsx)(t.a,{href:"/api/puppeteer.elementhandle._eval",children:"$eval(selector, pageFunction, args)"})})}),(0,r.jsx)("td",{}),(0,r.jsxs)("td",{children:[(0,r.jsx)(t.p,{children:"Runs the given function on the first element matching the given selector in the current element."}),(0,r.jsx)(t.p,{children:"If the given function returns a promise, then this method will wait till the promise resolves."})]})]}),(0,r.jsxs)("tr",{children:[(0,r.jsx)("td",{children:(0,r.jsx)(t.p,{children:(0,r.jsx)(t.a,{href:"/api/puppeteer.elementhandle.autofill",children:"autofill(data)"})})}),(0,r.jsx)("td",{}),(0,r.jsx)("td",{children:(0,r.jsxs)(t.p,{children:["If the element is a form input, you can use ",(0,r.jsx)(t.a,{href:"/api/puppeteer.elementhandle.autofill",children:"ElementHandle.autofill()"})," to test if the form is compatible with the browser's autofill implementation. Throws an error if the form cannot be autofilled."]})})]}),(0,r.jsxs)("tr",{children:[(0,r.jsx)("td",{children:(0,r.jsx)(t.p,{children:(0,r.jsx)(t.a,{href:"/api/puppeteer.elementhandle.boundingbox",children:"boundingBox()"})})}),(0,r.jsx)("td",{}),(0,r.jsx)("td",{children:(0,r.jsxs)(t.p,{children:["This method returns the bounding box of the element (relative to the main frame), or ",(0,r.jsx)(t.code,{children:"null"})," if the element is ",(0,r.jsx)(t.a,{href:"https://drafts.csswg.org/css-display-4/#box-generation",children:"not part of the layout"})," (example: ",(0,r.jsx)(t.code,{children:"display: none"}),")."]})})]}),(0,r.jsxs)("tr",{children:[(0,r.jsx)("td",{children:(0,r.jsx)(t.p,{children:(0,r.jsx)(t.a,{href:"/api/puppeteer.elementhandle.boxmodel",children:"boxModel()"})})}),(0,r.jsx)("td",{}),(0,r.jsx)("td",{children:(0,r.jsxs)(t.p,{children:["This method returns boxes of the element, or ",(0,r.jsx)(t.code,{children:"null"})," if the element is ",(0,r.jsx)(t.a,{href:"https://drafts.csswg.org/css-display-4/#box-generation",children:"not part of the layout"})," (example: ",(0,r.jsx)(t.code,{children:"display: none"}),")."]})})]}),(0,r.jsxs)("tr",{children:[(0,r.jsx)("td",{children:(0,r.jsx)(t.p,{children:(0,r.jsx)(t.a,{href:"/api/puppeteer.elementhandle.click",children:"click(this, options)"})})}),(0,r.jsx)("td",{}),(0,r.jsx)("td",{children:(0,r.jsxs)(t.p,{children:["This method scrolls element into view if needed, and then uses ",(0,r.jsx)(t.a,{href:"/api/puppeteer.page",children:"Page.mouse"})," to click in the center of the element. If the element is detached from DOM, the method throws an error."]})})]}),(0,r.jsxs)("tr",{children:[(0,r.jsx)("td",{children:(0,r.jsx)(t.p,{children:(0,r.jsx)(t.a,{href:"/api/puppeteer.elementhandle.clickablepoint",children:"clickablePoint(offset)"})})}),(0,r.jsx)("td",{}),(0,r.jsx)("td",{children:(0,r.jsx)(t.p,{children:"Returns the middle point within an element unless a specific offset is provided."})})]}),(0,r.jsxs)("tr",{children:[(0,r.jsx)("td",{children:(0,r.jsx)(t.p,{children:(0,r.jsx)(t.a,{href:"/api/puppeteer.elementhandle.contentframe",children:"contentFrame(this)"})})}),(0,r.jsx)("td",{}),(0,r.jsx)("td",{children:(0,r.jsx)(t.p,{children:"Resolves the frame associated with the element, if any. Always exists for HTMLIFrameElements."})})]}),(0,r.jsxs)("tr",{children:[(0,r.jsx)("td",{children:(0,r.jsx)(t.p,{children:(0,r.jsx)(t.a,{href:"/api/puppeteer.elementhandle.contentframe_1",children:"contentFrame()"})})}),(0,r.jsx)("td",{}),(0,r.jsx)("td",{})]}),(0,r.jsxs)("tr",{children:[(0,r.jsx)("td",{children:(0,r.jsx)(t.p,{children:(0,r.jsx)(t.a,{href:"/api/puppeteer.elementhandle.drag",children:"drag(this, target)"})})}),(0,r.jsx)("td",{}),(0,r.jsx)("td",{children:(0,r.jsx)(t.p,{children:"Drags an element over the given element or point."})})]}),(0,r.jsxs)("tr",{children:[(0,r.jsx)("td",{children:(0,r.jsx)(t.p,{children:(0,r.jsx)(t.a,{href:"/api/puppeteer.elementhandle.draganddrop",children:"dragAndDrop(this, target, options)"})})}),(0,r.jsx)("td",{}),(0,r.jsx)("td",{})]}),(0,r.jsxs)("tr",{children:[(0,r.jsx)("td",{children:(0,r.jsx)(t.p,{children:(0,r.jsx)(t.a,{href:"/api/puppeteer.elementhandle.dragenter",children:"dragEnter(this, data)"})})}),(0,r.jsx)("td",{}),(0,r.jsx)("td",{})]}),(0,r.jsxs)("tr",{children:[(0,r.jsx)("td",{children:(0,r.jsx)(t.p,{children:(0,r.jsx)(t.a,{href:"/api/puppeteer.elementhandle.dragover",children:"dragOver(this, data)"})})}),(0,r.jsx)("td",{}),(0,r.jsx)("td",{})]}),(0,r.jsxs)("tr",{children:[(0,r.jsx)("td",{children:(0,r.jsx)(t.p,{children:(0,r.jsx)(t.a,{href:"/api/puppeteer.elementhandle.drop",children:"drop(this, element)"})})}),(0,r.jsx)("td",{}),(0,r.jsx)("td",{children:(0,r.jsx)(t.p,{children:"Drops the given element onto the current one."})})]}),(0,r.jsxs)("tr",{children:[(0,r.jsx)("td",{children:(0,r.jsx)(t.p,{children:(0,r.jsx)(t.a,{href:"/api/puppeteer.elementhandle.drop_1",children:"drop(this, data)"})})}),(0,r.jsx)("td",{}),(0,r.jsx)("td",{})]}),(0,r.jsxs)("tr",{children:[(0,r.jsx)("td",{children:(0,r.jsx)(t.p,{children:(0,r.jsx)(t.a,{href:"/api/puppeteer.elementhandle.focus",children:"focus()"})})}),(0,r.jsx)("td",{}),(0,r.jsx)("td",{children:(0,r.jsxs)(t.p,{children:["Calls ",(0,r.jsx)(t.a,{href:"https://developer.mozilla.org/en-US/docs/Web/API/HTMLElement/focus",children:"focus"})," on the element."]})})]}),(0,r.jsxs)("tr",{children:[(0,r.jsx)("td",{children:(0,r.jsx)(t.p,{children:(0,r.jsx)(t.a,{href:"/api/puppeteer.elementhandle.hover",children:"hover(this)"})})}),(0,r.jsx)("td",{}),(0,r.jsx)("td",{children:(0,r.jsxs)(t.p,{children:["This method scrolls element into view if needed, and then uses ",(0,r.jsx)(t.a,{href:"/api/puppeteer.page",children:"Page"})," to hover over the center of the element. If the element is detached from DOM, the method throws an error."]})})]}),(0,r.jsxs)("tr",{children:[(0,r.jsx)("td",{children:(0,r.jsx)(t.p,{children:(0,r.jsx)(t.a,{href:"/api/puppeteer.elementhandle.ishidden",children:"isHidden()"})})}),(0,r.jsx)("td",{}),(0,r.jsx)("td",{children:(0,r.jsxs)(t.p,{children:["Checks if an element is hidden using the same mechanism as ",(0,r.jsx)(t.a,{href:"/api/puppeteer.elementhandle.waitforselector",children:"ElementHandle.waitForSelector()"}),"."]})})]}),(0,r.jsxs)("tr",{children:[(0,r.jsx)("td",{children:(0,r.jsx)(t.p,{children:(0,r.jsx)(t.a,{href:"/api/puppeteer.elementhandle.isintersectingviewport",children:"isIntersectingViewport(this, options)"})})}),(0,r.jsx)("td",{}),(0,r.jsx)("td",{children:(0,r.jsxs)(t.p,{children:["Resolves to true if the element is visible in the current viewport. If an element is an SVG, we check if the svg owner element is in the viewport instead. See ",(0,r.jsx)(t.a,{href:"https://crbug.com/963246",children:"https://crbug.com/963246"}),"."]})})]}),(0,r.jsxs)("tr",{children:[(0,r.jsx)("td",{children:(0,r.jsx)(t.p,{children:(0,r.jsx)(t.a,{href:"/api/puppeteer.elementhandle.isvisible",children:"isVisible()"})})}),(0,r.jsx)("td",{}),(0,r.jsx)("td",{children:(0,r.jsxs)(t.p,{children:["Checks if an element is visible using the same mechanism as ",(0,r.jsx)(t.a,{href:"/api/puppeteer.elementhandle.waitforselector",children:"ElementHandle.waitForSelector()"}),"."]})})]}),(0,r.jsxs)("tr",{children:[(0,r.jsx)("td",{children:(0,r.jsx)(t.p,{children:(0,r.jsx)(t.a,{href:"/api/puppeteer.elementhandle.press",children:"press(key, options)"})})}),(0,r.jsx)("td",{}),(0,r.jsx)("td",{children:(0,r.jsxs)(t.p,{children:["Focuses the element, and then uses ",(0,r.jsx)(t.a,{href:"/api/puppeteer.keyboard.down",children:"Keyboard.down()"})," and ",(0,r.jsx)(t.a,{href:"/api/puppeteer.keyboard.up",children:"Keyboard.up()"}),"."]})})]}),(0,r.jsxs)("tr",{children:[(0,r.jsx)("td",{children:(0,r.jsx)(t.p,{children:(0,r.jsx)(t.a,{href:"/api/puppeteer.elementhandle.screenshot",children:"screenshot(options)"})})}),(0,r.jsx)("td",{}),(0,r.jsx)("td",{children:(0,r.jsxs)(t.p,{children:["This method scrolls element into view if needed, and then uses ",(0,r.jsx)(t.a,{href:"/api/puppeteer.page.screenshot_1",children:"Page.screenshot()"})," to take a screenshot of the element. If the element is detached from DOM, the method throws an error."]})})]}),(0,r.jsxs)("tr",{children:[(0,r.jsx)("td",{children:(0,r.jsx)(t.p,{children:(0,r.jsx)(t.a,{href:"/api/puppeteer.elementhandle.screenshot_1",children:"screenshot(options)"})})}),(0,r.jsx)("td",{}),(0,r.jsx)("td",{})]}),(0,r.jsxs)("tr",{children:[(0,r.jsx)("td",{children:(0,r.jsx)(t.p,{children:(0,r.jsx)(t.a,{href:"/api/puppeteer.elementhandle.scrollintoview",children:"scrollIntoView(this)"})})}),(0,r.jsx)("td",{}),(0,r.jsx)("td",{children:(0,r.jsx)(t.p,{children:"Scrolls the element into view using either the automation protocol client or by calling element.scrollIntoView."})})]}),(0,r.jsxs)("tr",{children:[(0,r.jsx)("td",{children:(0,r.jsx)(t.p,{children:(0,r.jsx)(t.a,{href:"/api/puppeteer.elementhandle.select",children:"select(values)"})})}),(0,r.jsx)("td",{}),(0,r.jsx)("td",{children:(0,r.jsxs)(t.p,{children:["Triggers a ",(0,r.jsx)(t.code,{children:"change"})," and ",(0,r.jsx)(t.code,{children:"input"})," event once all the provided options have been selected. If there's no ",(0,r.jsx)(t.code,{children:"<select>"})," element matching ",(0,r.jsx)(t.code,{children:"selector"}),", the method throws an error."]})})]}),(0,r.jsxs)("tr",{children:[(0,r.jsx)("td",{children:(0,r.jsx)(t.p,{children:(0,r.jsx)(t.a,{href:"/api/puppeteer.elementhandle.tap",children:"tap(this)"})})}),(0,r.jsx)("td",{}),(0,r.jsx)("td",{children:(0,r.jsxs)(t.p,{children:["This method scrolls element into view if needed, and then uses ",(0,r.jsx)(t.a,{href:"/api/puppeteer.touchscreen.tap",children:"Touchscreen.tap()"})," to tap in the center of the element. If the element is detached from DOM, the method throws an error."]})})]}),(0,r.jsxs)("tr",{children:[(0,r.jsx)("td",{children:(0,r.jsx)(t.p,{children:(0,r.jsx)(t.a,{href:"/api/puppeteer.elementhandle.toelement",children:"toElement(tagName)"})})}),(0,r.jsx)("td",{}),(0,r.jsx)("td",{children:(0,r.jsx)(t.p,{children:"Converts the current handle to the given element type."})})]}),(0,r.jsxs)("tr",{children:[(0,r.jsx)("td",{children:(0,r.jsx)(t.p,{children:(0,r.jsx)(t.a,{href:"/api/puppeteer.elementhandle.touchend",children:"touchEnd(this)"})})}),(0,r.jsx)("td",{}),(0,r.jsx)("td",{})]}),(0,r.jsxs)("tr",{children:[(0,r.jsx)("td",{children:(0,r.jsx)(t.p,{children:(0,r.jsx)(t.a,{href:"/api/puppeteer.elementhandle.touchmove",children:"touchMove(this)"})})}),(0,r.jsx)("td",{}),(0,r.jsx)("td",{})]}),(0,r.jsxs)("tr",{children:[(0,r.jsx)("td",{children:(0,r.jsx)(t.p,{children:(0,r.jsx)(t.a,{href:"/api/puppeteer.elementhandle.touchstart",children:"touchStart(this)"})})}),(0,r.jsx)("td",{}),(0,r.jsx)("td",{})]}),(0,r.jsxs)("tr",{children:[(0,r.jsx)("td",{children:(0,r.jsx)(t.p,{children:(0,r.jsx)(t.a,{href:"/api/puppeteer.elementhandle.type",children:"type(text, options)"})})}),(0,r.jsx)("td",{}),(0,r.jsxs)("td",{children:[(0,r.jsxs)(t.p,{children:["Focuses the element, and then sends a ",(0,r.jsx)(t.code,{children:"keydown"}),", ",(0,r.jsx)(t.code,{children:"keypress"}),"/",(0,r.jsx)(t.code,{children:"input"}),", and ",(0,r.jsx)(t.code,{children:"keyup"})," event for each character in the text."]}),(0,r.jsxs)(t.p,{children:["To press a special key, like ",(0,r.jsx)(t.code,{children:"Control"})," or ",(0,r.jsx)(t.code,{children:"ArrowDown"}),", use ",(0,r.jsx)(t.a,{href:"/api/puppeteer.elementhandle.press",children:"ElementHandle.press()"}),"."]})]})]}),(0,r.jsxs)("tr",{children:[(0,r.jsx)("td",{children:(0,r.jsx)(t.p,{children:(0,r.jsx)(t.a,{href:"/api/puppeteer.elementhandle.uploadfile",children:"uploadFile(this, paths)"})})}),(0,r.jsx)("td",{}),(0,r.jsx)("td",{children:(0,r.jsxs)(t.p,{children:["Sets the value of an ",(0,r.jsx)(t.a,{href:"https://developer.mozilla.org/en-US/docs/Web/HTML/Element/input",children:"input element"})," to the given file paths."]})})]}),(0,r.jsxs)("tr",{children:[(0,r.jsx)("td",{children:(0,r.jsx)(t.p,{children:(0,r.jsx)(t.a,{href:"/api/puppeteer.elementhandle.waitforselector",children:"waitForSelector(selector, options)"})})}),(0,r.jsx)("td",{}),(0,r.jsxs)("td",{children:[(0,r.jsx)(t.p,{children:"Wait for an element matching the given selector to appear in the current element."}),(0,r.jsxs)(t.p,{children:["Unlike ",(0,r.jsx)(t.a,{href:"/api/puppeteer.frame.waitforselector",children:"Frame.waitForSelector()"}),", this method does not work across navigations or if the element is detached from DOM."]})]})]})]})]})]})}function p(e={}){const{wrapper:t}={...(0,s.a)(),...e.components};return t?(0,r.jsx)(t,{...e,children:(0,r.jsx)(c,{...e})}):c(e)}},75251:(e,t,n)=>{var r=n(67294),s=Symbol.for("react.element"),l=Symbol.for("react.fragment"),i=Object.prototype.hasOwnProperty,d=r.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED.ReactCurrentOwner,h={key:!0,ref:!0,__self:!0,__source:!0};function a(e,t,n){var r,l={},a=null,c=null;for(r in void 0!==n&&(a=""+n),void 0!==t.key&&(a=""+t.key),void 0!==t.ref&&(c=t.ref),t)i.call(t,r)&&!h.hasOwnProperty(r)&&(l[r]=t[r]);if(e&&e.defaultProps)for(r in t=e.defaultProps)void 0===l[r]&&(l[r]=t[r]);return{$$typeof:s,type:e,key:a,ref:c,props:l,_owner:d.current}}t.Fragment=l,t.jsx=a,t.jsxs=a},85893:(e,t,n)=>{e.exports=n(75251)},11151:(e,t,n)=>{n.d(t,{Z:()=>d,a:()=>i});var r=n(67294);const s={},l=r.createContext(s);function i(e){const t=r.useContext(l);return r.useMemo((function(){return"function"==typeof e?e(t):{...t,...e}}),[t,e])}function d(e){let t;return t=e.disableParentContext?"function"==typeof e.components?e.components(s):e.components||s:i(e.components),r.createElement(l.Provider,{value:t},e.children)}}}]);