(window.webpackJsonp=window.webpackJsonp||[]).push([[234],{1023:function(e,t,n){"use strict";n.d(t,"a",(function(){return l}));var r=n(0),o=n.n(r),a=n(837),i=n.n(a),l=function(e){var t=e.url;return o.a.createElement(i.a,{src:"https://github.com/cerner/terra-core/tree/main/packages/terra-toggle",name:"terra-toggle",version:"3.41.0",url:t})}},2032:function(e,t,n){"use strict";n.r(t),n.d(t,"default",(function(){return X}));var r=n(0),o=n.n(r),a=n(344),i=n(1023),l=n(846),c=n(219);function u(e,t){return function(e){if(Array.isArray(e))return e}(e)||function(e,t){if("undefined"==typeof Symbol||!(Symbol.iterator in Object(e)))return;var n=[],r=!0,o=!1,a=void 0;try{for(var i,l=e[Symbol.iterator]();!(r=(i=l.next()).done)&&(n.push(i.value),!t||n.length!==t);r=!0);}catch(e){o=!0,a=e}finally{try{r||null==l.return||l.return()}finally{if(o)throw a}}return n}(e,t)||function(e,t){if(!e)return;if("string"==typeof e)return p(e,t);var n=Object.prototype.toString.call(e).slice(8,-1);"Object"===n&&e.constructor&&(n=e.constructor.name);if("Map"===n||"Set"===n)return Array.from(e);if("Arguments"===n||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n))return p(e,t)}(e,t)||function(){throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}()}function p(e,t){(null==t||t>e.length)&&(t=e.length);for(var n=0,r=new Array(t);n<t;n++)r[n]=e[n];return r}var s=function(){var e=u(Object(r.useState)(!1),2),t=e[0],n=e[1];return o.a.createElement("div",null,o.a.createElement(c.a,{onClick:function(){n(!t)},"aria-expanded":t,"aria-controls":"toggle"}),o.a.createElement(l.a,{id:"default-toggle",isOpen:t},o.a.createElement("p",null,"Lorem ipsum dolor sit amet,",o.a.createElement("a",{href:"#test"},"consectetur")," ","adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.")))};function m(){return(m=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var r in n)Object.prototype.hasOwnProperty.call(n,r)&&(e[r]=n[r])}return e}).apply(this,arguments)}function d(e,t){if(null==e)return{};var n,r,o=function(e,t){if(null==e)return{};var n,r,o={},a=Object.keys(e);for(r=0;r<a.length;r++)n=a[r],t.indexOf(n)>=0||(o[n]=e[n]);return o}(e,t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(r=0;r<a.length;r++)n=a[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(o[n]=e[n])}return o}var f={};function g(e){var t=e.components,n=d(e,["components"]);return Object(a.mdx)("wrapper",m({},f,n,{components:t,mdxType:"MDXLayout"}),Object(a.mdx)("pre",null,Object(a.mdx)("code",m({parentName:"pre"},{className:"language-jsx"}),"import React, { useState } from 'react';\nimport Toggle from 'terra-toggle';\nimport IconInformation from 'terra-icon/lib/icon/IconInformation';\n\nconst ToggleDefault = () => {\n  const [isOpen, setIsOpen] = useState(false);\n\n  const handleOnClick = () => {\n    setIsOpen(!isOpen);\n  };\n\n  return (\n    <div>\n      <IconInformation onClick={handleOnClick} aria-expanded={isOpen} aria-controls=\"toggle\" />\n      {/**\n      * The aria-expanded state is used on the triggering component to indicate the contents are collapsible, and whether a region is currently expanded or collapsed\n      */}\n      <Toggle id=\"default-toggle\" isOpen={isOpen}>\n        <p>\n          Lorem ipsum dolor sit amet,\n          <a href=\"#test\">consectetur</a>\n          {' '}\n          adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.\n        </p>\n      </Toggle>\n    </div>\n  );\n};\n\nexport default ToggleDefault;\n\n")))}g.isMDXComponent=!0;var b=n(836),O=n.n(b),x=function(e){var t=e.title,n=e.description,r=e.isExpanded;return o.a.createElement(O.a,{title:t||"Default Toggle",description:n,example:o.a.createElement(s,null),exampleSrc:o.a.createElement(g,null),isExpanded:r})};function y(e,t){return function(e){if(Array.isArray(e))return e}(e)||function(e,t){if("undefined"==typeof Symbol||!(Symbol.iterator in Object(e)))return;var n=[],r=!0,o=!1,a=void 0;try{for(var i,l=e[Symbol.iterator]();!(r=(i=l.next()).done)&&(n.push(i.value),!t||n.length!==t);r=!0);}catch(e){o=!0,a=e}finally{try{r||null==l.return||l.return()}finally{if(o)throw a}}return n}(e,t)||function(e,t){if(!e)return;if("string"==typeof e)return h(e,t);var n=Object.prototype.toString.call(e).slice(8,-1);"Object"===n&&e.constructor&&(n=e.constructor.name);if("Map"===n||"Set"===n)return Array.from(e);if("Arguments"===n||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n))return h(e,t)}(e,t)||function(){throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}()}function h(e,t){(null==t||t>e.length)&&(t=e.length);for(var n=0,r=new Array(t);n<t;n++)r[n]=e[n];return r}var j=function(){var e=y(Object(r.useState)(!1),2),t=e[0],n=e[1];return o.a.createElement("div",null,o.a.createElement(c.a,{onClick:function(){n(!t)},"aria-expanded":t,"aria-controls":"toggle"}),o.a.createElement(l.a,{id:"animated-toggle",isOpen:t,isAnimated:!0},o.a.createElement("p",null,"Lorem ipsum dolor sit amet,",o.a.createElement("a",{href:"#test"},"consectetur")," ","adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.")))};function v(){return(v=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var r in n)Object.prototype.hasOwnProperty.call(n,r)&&(e[r]=n[r])}return e}).apply(this,arguments)}function w(e,t){if(null==e)return{};var n,r,o=function(e,t){if(null==e)return{};var n,r,o={},a=Object.keys(e);for(r=0;r<a.length;r++)n=a[r],t.indexOf(n)>=0||(o[n]=e[n]);return o}(e,t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(r=0;r<a.length;r++)n=a[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(o[n]=e[n])}return o}var T={};function E(e){var t=e.components,n=w(e,["components"]);return Object(a.mdx)("wrapper",v({},T,n,{components:t,mdxType:"MDXLayout"}),Object(a.mdx)("pre",null,Object(a.mdx)("code",v({parentName:"pre"},{className:"language-jsx"}),"import React, { useState } from 'react';\nimport IconInformation from 'terra-icon/lib/icon/IconInformation';\nimport Toggle from 'terra-toggle';\n\nconst ToggleDefault = () => {\n  const [isOpen, setIsOpen] = useState(false);\n\n  const handleOnClick = () => {\n    setIsOpen(!isOpen);\n  };\n\n  return (\n    <div>\n      <IconInformation onClick={handleOnClick} aria-expanded={isOpen} aria-controls=\"toggle\" />\n      {/**\n      * The aria-expanded state is used on the triggering component to indicate the contents are collapsible, and whether a region is currently expanded or collapsed\n      */}\n      <Toggle id=\"animated-toggle\" isOpen={isOpen} isAnimated>\n        <p>\n          Lorem ipsum dolor sit amet,\n          <a href=\"#test\">consectetur</a>\n          {' '}\n          adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.\n        </p>\n      </Toggle>\n    </div>\n  );\n};\n\nexport default ToggleDefault;\n\n")))}E.isMDXComponent=!0;var N=function(e){var t=e.title,n=e.description,r=e.isExpanded;return o.a.createElement(O.a,{title:t||"Animated Toggle",description:n,example:o.a.createElement(j,null),exampleSrc:o.a.createElement(E,null),isExpanded:r})},S=n(839),D=n.n(S);function I(){return(I=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var r in n)Object.prototype.hasOwnProperty.call(n,r)&&(e[r]=n[r])}return e}).apply(this,arguments)}function C(e,t){if(null==e)return{};var n,r,o=function(e,t){if(null==e)return{};var n,r,o={},a=Object.keys(e);for(r=0;r<a.length;r++)n=a[r],t.indexOf(n)>=0||(o[n]=e[n]);return o}(e,t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(r=0;r<a.length;r++)n=a[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(o[n]=e[n])}return o}var q=function(){return Object(a.mdx)(D.a,{rows:[{name:"children",type:function(){var e={};function t(t){var n=t.components,r=C(t,["components"]);return Object(a.mdx)("wrapper",I({},e,r,{components:n,mdxType:"MDXLayout"}),Object(a.mdx)("p",null,"node"))}return t.isMDXComponent=!0,t({})},required:!0,defaultValue:"none",description:function(){var e={};function t(t){var n=t.components,r=C(t,["components"]);return Object(a.mdx)("wrapper",I({},e,r,{components:n,mdxType:"MDXLayout"}),Object(a.mdx)("p",null,"Content in the body of the toggle component that will be expanded or collapsed"))}return t.isMDXComponent=!0,t({})}},{name:"isAnimated",type:function(){var e={};function t(t){var n=t.components,r=C(t,["components"]);return Object(a.mdx)("wrapper",I({},e,r,{components:n,mdxType:"MDXLayout"}),Object(a.mdx)("p",null,"bool"))}return t.isMDXComponent=!0,t({})},required:!1,defaultValue:"false",description:function(){var e={};function t(t){var n=t.components,r=C(t,["components"]);return Object(a.mdx)("wrapper",I({},e,r,{components:n,mdxType:"MDXLayout"}),Object(a.mdx)("p",null,"When set, will animate the toggle component as it is expanded or collapsed"))}return t.isMDXComponent=!0,t({})}},{name:"isOpen",type:function(){var e={};function t(t){var n=t.components,r=C(t,["components"]);return Object(a.mdx)("wrapper",I({},e,r,{components:n,mdxType:"MDXLayout"}),Object(a.mdx)("p",null,"bool"))}return t.isMDXComponent=!0,t({})},required:!1,defaultValue:"false",description:function(){var e={};function t(t){var n=t.components,r=C(t,["components"]);return Object(a.mdx)("wrapper",I({},e,r,{components:n,mdxType:"MDXLayout"}),Object(a.mdx)("p",null,"Used to expand or collapse toggle content"))}return t.isMDXComponent=!0,t({})}}]})};function A(){return(A=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var r in n)Object.prototype.hasOwnProperty.call(n,r)&&(e[r]=n[r])}return e}).apply(this,arguments)}function M(e,t){if(null==e)return{};var n,r,o=function(e,t){if(null==e)return{};var n,r,o={},a=Object.keys(e);for(r=0;r<a.length;r++)n=a[r],t.indexOf(n)>=0||(o[n]=e[n]);return o}(e,t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(r=0;r<a.length;r++)n=a[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(o[n]=e[n])}return o}var P={};function X(e){var t=e.components,n=M(e,["components"]);return Object(a.mdx)("wrapper",A({},P,n,{components:t,mdxType:"MDXLayout"}),Object(a.mdx)(i.a,{mdxType:"Badge"}),Object(a.mdx)("h1",{id:"terra-toggle"},"Terra Toggle"),Object(a.mdx)("p",null,"Toggle component that transitions content in and out. Use ",Object(a.mdx)("inlineCode",{parentName:"p"},"aria-expanded")," and ",Object(a.mdx)("inlineCode",{parentName:"p"},"aria-controls")," state on the triggering component. The objective of ",Object(a.mdx)("inlineCode",{parentName:"p"},"aria-expanded")," state is to indicate whether regions of the content are collapsible, and to expose whether a region is currently expanded or collapsed.The ",Object(a.mdx)("inlineCode",{parentName:"p"},"aria-controls")," state indicates the element (terra-toggle) that is controlled by the triggering element. For toggle button functionality, see ",Object(a.mdx)("a",A({parentName:"p"},{href:"https://engineering.cerner.com/terra-ui/#/components/terra-toggle-button/toggle-button/toggle-button"}),"terra-toggle-button"),"."),Object(a.mdx)("h2",{id:"getting-started"},"Getting Started"),Object(a.mdx)("ul",null,Object(a.mdx)("li",{parentName:"ul"},"Install with ",Object(a.mdx)("a",A({parentName:"li"},{href:"https://www.npmjs.com/"}),"npmjs"),":",Object(a.mdx)("ul",{parentName:"li"},Object(a.mdx)("li",{parentName:"ul"},Object(a.mdx)("inlineCode",{parentName:"li"},"npm install terra-toggle"))))),Object(a.mdx)("h2",{id:"peer-dependencies"},"Peer Dependencies"),Object(a.mdx)("p",null,"This component requires the following peer dependencies be installed in your app for the component to properly function."),Object(a.mdx)("table",null,Object(a.mdx)("thead",{parentName:"table"},Object(a.mdx)("tr",{parentName:"thead"},Object(a.mdx)("th",A({parentName:"tr"},{align:null}),"Peer Dependency"),Object(a.mdx)("th",A({parentName:"tr"},{align:null}),"Version"))),Object(a.mdx)("tbody",{parentName:"table"},Object(a.mdx)("tr",{parentName:"tbody"},Object(a.mdx)("td",A({parentName:"tr"},{align:null}),"react"),Object(a.mdx)("td",A({parentName:"tr"},{align:null}),"^16.8.5")),Object(a.mdx)("tr",{parentName:"tbody"},Object(a.mdx)("td",A({parentName:"tr"},{align:null}),"react-dom"),Object(a.mdx)("td",A({parentName:"tr"},{align:null}),"^16.8.5")))),Object(a.mdx)("h2",{id:"usage"},"Usage"),Object(a.mdx)("pre",null,Object(a.mdx)("code",A({parentName:"pre"},{className:"language-jsx"}),"import Toggle from 'terra-toggle/lib/Toggle';\n")),Object(a.mdx)("h2",{id:"component-features"},"Component Features"),Object(a.mdx)("ul",null,Object(a.mdx)("li",{parentName:"ul"},Object(a.mdx)("a",A({parentName:"li"},{href:"https://engineering.cerner.com/terra-ui/contributing/terra-ui/component-standards#cross-browser-support"}),"Cross-Browser Support")),Object(a.mdx)("li",{parentName:"ul"},Object(a.mdx)("a",A({parentName:"li"},{href:"https://engineering.cerner.com/terra-ui/contributing/terra-ui/component-standards#responsive-support"}),"Responsive Support")),Object(a.mdx)("li",{parentName:"ul"},Object(a.mdx)("a",A({parentName:"li"},{href:"https://engineering.cerner.com/terra-ui/contributing/terra-ui/component-standards#mobile-support"}),"Mobile Support"))),Object(a.mdx)("h2",{id:"examples"},"Examples"),Object(a.mdx)(x,{mdxType:"DefaultToggle"}),Object(a.mdx)(N,{title:"isAnimated Toggle",mdxType:"AnimatedToggle"}),Object(a.mdx)("h2",{id:"toggle-props"},"Toggle Props"),Object(a.mdx)(q,{mdxType:"TogglePropsTable"}))}X.isMDXComponent=!0},840:function(e,t,n){"use strict";n.r(t);var r=n(0),o=n.n(r),a=n(12);function i(){return(i=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var r in n)Object.prototype.hasOwnProperty.call(n,r)&&(e[r]=n[r])}return e}).apply(this,arguments)}var l=function(e){var t=i({},e);return o.a.createElement(a.a,t,o.a.createElement("path",{d:"M10.3 24L33.8 0l3.9 3.8L18 24l19.7 20.2-3.9 3.8z"}))};l.displayName="IconChevronLeft",l.defaultProps={className:"",viewBox:"0 0 48 48",xmlns:"http://www.w3.org/2000/svg","data-name":"Layer 1",isBidi:!0},t.default=l},846:function(e,t,n){"use strict";var r=n(0),o=n.n(r),a=n(1),i=n.n(a),l=n(4),c=n.n(l),u=n(847),p=n.n(u),s=n(848),m=n.n(s);function d(){return(d=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var r in n)Object.prototype.hasOwnProperty.call(n,r)&&(e[r]=n[r])}return e}).apply(this,arguments)}function f(e,t){if(null==e)return{};var n,r,o=function(e,t){if(null==e)return{};var n,r,o={},a=Object.keys(e);for(r=0;r<a.length;r++)n=a[r],t.indexOf(n)>=0||(o[n]=e[n]);return o}(e,t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(r=0;r<a.length;r++)n=a[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(o[n]=e[n])}return o}var g=c.a.bind(m.a),b={children:i.a.node.isRequired,isAnimated:i.a.bool,isOpen:i.a.bool},O=function(e){var t,n=e.isAnimated,r=e.isOpen,a=e.children,i=f(e,["isAnimated","isOpen","children"]),l=r?"auto":0;return t=n?o.a.createElement(p.a,{duration:250,height:l,easing:"ease-out"},a):r&&a,o.a.createElement("div",d({},i,{className:g("toggle",i.className),"aria-hidden":!r}),t)};O.propTypes=b,O.defaultProps={isAnimated:!1,isOpen:!1},t.a=O},848:function(e,t,n){e.exports={toggle:"Toggle-module__toggle___18ZfB"}}}]);