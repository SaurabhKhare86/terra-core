(window.webpackJsonp=window.webpackJsonp||[]).push([[73],{1019:function(e,t,n){"use strict";n.d(t,"a",(function(){return l}));var r=n(0),a=n.n(r),o=n(837),s=n.n(o),l=function(e){var t=e.url;return a.a.createElement(s.a,{src:"https://github.com/cerner/terra-core/tree/main/packages/terra-status",name:"terra-status",version:"4.38.0",url:t})}},1298:function(e,t,n){e.exports=n.p+"87ec563ff16c288f58b0747d553762d6.jpg"},1996:function(e,t,n){"use strict";n.r(t),n.d(t,"default",(function(){return ie}));var r=n(0),a=n.n(r),o=n(344),s=n(1019),l=n(904),c=n(4),i=n.n(c),p=n(905),u=n.n(p),m=i.a.bind(u.a),d=a.a.createElement("div",{className:m("text-wrapper")},"Sample text"),f=function(){return a.a.createElement("div",null,a.a.createElement(l.a,{colorClass:m(["success"]),visuallyHiddenText:"Status Success"},d))};function b(){return(b=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var r in n)Object.prototype.hasOwnProperty.call(n,r)&&(e[r]=n[r])}return e}).apply(this,arguments)}function x(e,t){if(null==e)return{};var n,r,a=function(e,t){if(null==e)return{};var n,r,a={},o=Object.keys(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||(a[n]=e[n]);return a}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}var O={};function y(e){var t=e.components,n=x(e,["components"]);return Object(o.mdx)("wrapper",b({},O,n,{components:t,mdxType:"MDXLayout"}),Object(o.mdx)("pre",null,Object(o.mdx)("code",b({parentName:"pre"},{className:"language-jsx"}),"import React from 'react';\nimport Status from 'terra-status';\nimport classNames from 'classnames/bind';\nimport styles from './colors.module.scss';\n\nconst cx = classNames.bind(styles);\n\nconst simpleText = <div className={cx('text-wrapper')}>Sample text</div>;\n\nconst StatusDefault = () => (\n  <div>\n    <Status colorClass={cx(['success'])} visuallyHiddenText=\"Status Success\">{simpleText}</Status>\n  </div>\n);\n\nexport default StatusDefault;\n\n")))}y.isMDXComponent=!0;var g=n(836),v=n.n(g);function j(){return(j=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var r in n)Object.prototype.hasOwnProperty.call(n,r)&&(e[r]=n[r])}return e}).apply(this,arguments)}function h(e,t){if(null==e)return{};var n,r,a=function(e,t){if(null==e)return{};var n,r,a={},o=Object.keys(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||(a[n]=e[n]);return a}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}var w={};function S(e){var t=e.components,n=h(e,["components"]);return Object(o.mdx)("wrapper",j({},w,n,{components:t,mdxType:"MDXLayout"}),Object(o.mdx)("pre",null,Object(o.mdx)("code",j({parentName:"pre"},{className:"language-scss"}),"@import './clinical-lowlight-theme/colors.module';\n@import './orion-fusion-theme/colors.module';\n\n:root {\n  --terra-status-attention-border-left-color: #f00;\n  --terra-status-success-border-left-color: #0f0;\n  --terra-status-info-border-left-color: rgb(0, 0, 255);\n}\n\n:local {\n  .attention {\n    border-left-color: var(--terra-status-attention-border-left-color, #f00);\n  }\n\n  .success {\n    border-left-color: var(--terra-status-success-border-left-color, #0f0);\n  }\n\n  .info {\n    border-left-color: var(--terra-status-info-border-left-color, rgb(0, 0, 255));\n  }\n\n  .image-wrapper {\n    display: block;\n  }\n\n  .text-wrapper {\n    padding: 5px;\n  }\n}\n\n")))}S.isMDXComponent=!0;var N=function(e){var t=e.title,n=e.description,r=e.isExpanded;return a.a.createElement(v.a,{title:t||"Status Default",description:n,example:a.a.createElement(f,null),exampleCssSrc:a.a.createElement(S,null),exampleSrc:a.a.createElement(y,null),isExpanded:r})},E=n(1298),T=n.n(E),_=i.a.bind(u.a),P=a.a.createElement("img",{className:_("image-wrapper"),height:"150",width:"150",src:T.a,alt:"placeholder"}),C=function(){return a.a.createElement(l.a,{colorClass:_(["attention"]),visuallyHiddenText:"Status Attention"},P)};function D(){return(D=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var r in n)Object.prototype.hasOwnProperty.call(n,r)&&(e[r]=n[r])}return e}).apply(this,arguments)}function I(e,t){if(null==e)return{};var n,r,a=function(e,t){if(null==e)return{};var n,r,a={},o=Object.keys(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||(a[n]=e[n]);return a}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}var M={};function X(e){var t=e.components,n=I(e,["components"]);return Object(o.mdx)("wrapper",D({},M,n,{components:t,mdxType:"MDXLayout"}),Object(o.mdx)("pre",null,Object(o.mdx)("code",D({parentName:"pre"},{className:"language-jsx"}),"import React from 'react';\nimport Status from 'terra-status';\nimport placeholderPic150x150 from 'terra-status/lib/terra-dev-site/doc/example/150x150.jpg';\nimport classNames from 'classnames/bind';\nimport styles from './colors.module.scss';\n\nconst cx = classNames.bind(styles);\n\nconst image = <img className={cx('image-wrapper')} height=\"150\" width=\"150\" src={placeholderPic150x150} alt=\"placeholder\" />;\n\nconst StatusImage = () => (\n  <Status colorClass={cx(['attention'])} visuallyHiddenText=\"Status Attention\">{image}</Status>\n);\n\nexport default StatusImage;\n\n")))}X.isMDXComponent=!0;var A=function(e){var t=e.title,n=e.description,r=e.isExpanded;return a.a.createElement(v.a,{title:t||"Status Image",description:n,example:a.a.createElement(C,null),exampleCssSrc:a.a.createElement(S,null),exampleSrc:a.a.createElement(X,null),isExpanded:r})},L=n(967),k=i.a.bind(u.a),H=a.a.createElement(L.a,{height:"60",width:"60"}),q=function(){return a.a.createElement(l.a,{colorClass:k(["info"]),visuallyHiddenText:"Status Info"},H)};function R(){return(R=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var r in n)Object.prototype.hasOwnProperty.call(n,r)&&(e[r]=n[r])}return e}).apply(this,arguments)}function V(e,t){if(null==e)return{};var n,r,a=function(e,t){if(null==e)return{};var n,r,a={},o=Object.keys(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||(a[n]=e[n]);return a}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}var z={};function B(e){var t=e.components,n=V(e,["components"]);return Object(o.mdx)("wrapper",R({},z,n,{components:t,mdxType:"MDXLayout"}),Object(o.mdx)("pre",null,Object(o.mdx)("code",R({parentName:"pre"},{className:"language-jsx"}),"import React from 'react';\nimport IconDue from 'terra-icon/lib/icon/IconDue';\nimport Status from 'terra-status';\nimport classNames from 'classnames/bind';\nimport styles from './colors.module.scss';\n\nconst cx = classNames.bind(styles);\n\nconst icon = <IconDue height=\"60\" width=\"60\" />;\n\nconst StatusIcon = () => (\n  <Status colorClass={cx(['info'])} visuallyHiddenText=\"Status Info\">{icon}</Status>\n);\n\nexport default StatusIcon;\n\n")))}B.isMDXComponent=!0;var F=function(e){var t=e.title,n=e.description,r=e.isExpanded;return a.a.createElement(v.a,{title:t||"Status Icon",description:n,example:a.a.createElement(q,null),exampleCssSrc:a.a.createElement(S,null),exampleSrc:a.a.createElement(B,null),isExpanded:r})},G=n(209),J=i.a.bind(u.a),K=a.a.createElement("img",{className:J("image-wrapper"),height:"150",width:"150",src:T.a,alt:"placeholder"}),Y=a.a.createElement("div",{className:J("text-wrapper")},"Sample text"),Q=function(){return a.a.createElement("div",null,a.a.createElement(l.a,{colorClass:J(["attention"]),visuallyHiddenText:"Status Attention"},a.a.createElement(G.default,{fitStart:K,fill:Y,alignFill:"center"})))};function U(){return(U=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var r in n)Object.prototype.hasOwnProperty.call(n,r)&&(e[r]=n[r])}return e}).apply(this,arguments)}function W(e,t){if(null==e)return{};var n,r,a=function(e,t){if(null==e)return{};var n,r,a={},o=Object.keys(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||(a[n]=e[n]);return a}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}var Z={};function $(e){var t=e.components,n=W(e,["components"]);return Object(o.mdx)("wrapper",U({},Z,n,{components:t,mdxType:"MDXLayout"}),Object(o.mdx)("pre",null,Object(o.mdx)("code",U({parentName:"pre"},{className:"language-jsx"}),"import React from 'react';\nimport Arrange from 'terra-arrange';\nimport Status from 'terra-status';\nimport placeholderPic150x150 from 'terra-status/lib/terra-dev-site/doc/example/150x150.jpg';\nimport classNames from 'classnames/bind';\nimport styles from './colors.module.scss';\n\nconst cx = classNames.bind(styles);\n\nconst image = <img className={cx('image-wrapper')} height=\"150\" width=\"150\" src={placeholderPic150x150} alt=\"placeholder\" />;\nconst simpleText = <div className={cx('text-wrapper')}>Sample text</div>;\n\nconst StatusArrange = () => (\n  <div>\n    <Status colorClass={cx(['attention'])} visuallyHiddenText=\"Status Attention\">\n      <Arrange fitStart={image} fill={simpleText} alignFill=\"center\" />\n    </Status>\n  </div>\n);\n\nexport default StatusArrange;\n\n")))}$.isMDXComponent=!0;var ee=function(e){var t=e.title,n=e.description,r=e.isExpanded;return a.a.createElement(v.a,{title:t||"Status Arrange",description:n,example:a.a.createElement(Q,null),exampleCssSrc:a.a.createElement(S,null),exampleSrc:a.a.createElement($,null),isExpanded:r})},te=n(839),ne=n.n(te);function re(){return(re=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var r in n)Object.prototype.hasOwnProperty.call(n,r)&&(e[r]=n[r])}return e}).apply(this,arguments)}function ae(e,t){if(null==e)return{};var n,r,a=function(e,t){if(null==e)return{};var n,r,a={},o=Object.keys(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||(a[n]=e[n]);return a}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}var oe=function(){return Object(o.mdx)(ne.a,{rows:[{name:"children",type:function(){var e={};function t(t){var n=t.components,r=ae(t,["components"]);return Object(o.mdx)("wrapper",re({},e,r,{components:n,mdxType:"MDXLayout"}),Object(o.mdx)("p",null,"node"))}return t.isMDXComponent=!0,t({})},required:!0,defaultValue:"none",description:function(){var e={};function t(t){var n=t.components,r=ae(t,["components"]);return Object(o.mdx)("wrapper",re({},e,r,{components:n,mdxType:"MDXLayout"}),Object(o.mdx)("p",null,"Child node. Component to display next to the status indicator."))}return t.isMDXComponent=!0,t({})}},{name:"visuallyHiddenText",type:function(){var e={};function t(t){var n=t.components,r=ae(t,["components"]);return Object(o.mdx)("wrapper",re({},e,r,{components:n,mdxType:"MDXLayout"}),Object(o.mdx)("p",null,"string"))}return t.isMDXComponent=!0,t({})},required:!1,defaultValue:"none",description:function(){var e={};function t(t){var n=t.components,r=ae(t,["components"]);return Object(o.mdx)("wrapper",re({},e,r,{components:n,mdxType:"MDXLayout"}),Object(o.mdx)("p",null,"Visually hidden text used to convey the meaning of the status indicator to screen readers."))}return t.isMDXComponent=!0,t({})}},{name:"colorClass",type:function(){var e={};function t(t){var n=t.components,r=ae(t,["components"]);return Object(o.mdx)("wrapper",re({},e,r,{components:n,mdxType:"MDXLayout"}),Object(o.mdx)("p",null,"string"))}return t.isMDXComponent=!0,t({})},required:!1,defaultValue:"none",description:function(){var e={};function t(t){var n=t.components,r=ae(t,["components"]);return Object(o.mdx)("wrapper",re({},e,r,{components:n,mdxType:"MDXLayout"}),Object(o.mdx)("p",null,"Sets an author defined class, to control the colors of the status indicator."),Object(o.mdx)("p",null,Object(o.mdx)("img",re({parentName:"p"},{src:"https://badgen.net/badge//IMPORTANT/blue?icon=github",alt:"IMPORTANT"})),"\nAdding ",Object(o.mdx)("inlineCode",{parentName:"p"},"var(--my-app...")," CSS variables is required for proper re-themeability when creating custom color styles ",Object(o.mdx)("em",{parentName:"p"},"(see included examples)"),"."))}return t.isMDXComponent=!0,t({})}}]})};function se(){return(se=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var r in n)Object.prototype.hasOwnProperty.call(n,r)&&(e[r]=n[r])}return e}).apply(this,arguments)}function le(e,t){if(null==e)return{};var n,r,a=function(e,t){if(null==e)return{};var n,r,a={},o=Object.keys(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||(a[n]=e[n]);return a}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}var ce={};function ie(e){var t=e.components,n=le(e,["components"]);return Object(o.mdx)("wrapper",se({},ce,n,{components:t,mdxType:"MDXLayout"}),Object(o.mdx)(s.a,{mdxType:"Badge"}),Object(o.mdx)("h1",{id:"terra-status"},"Terra Status"),Object(o.mdx)("p",null,"The status component provides a customizable color indictor to signify a specific condition."),Object(o.mdx)("h2",{id:"getting-started"},"Getting Started"),Object(o.mdx)("ul",null,Object(o.mdx)("li",{parentName:"ul"},"Install with ",Object(o.mdx)("a",se({parentName:"li"},{href:"https://www.npmjs.com/"}),"npmjs"),":",Object(o.mdx)("ul",{parentName:"li"},Object(o.mdx)("li",{parentName:"ul"},Object(o.mdx)("inlineCode",{parentName:"li"},"npm install terra-status"))))),Object(o.mdx)("h2",{id:"peer-dependencies"},"Peer Dependencies"),Object(o.mdx)("p",null,"This component requires the following peer dependencies be installed in your app for the component to properly function."),Object(o.mdx)("table",null,Object(o.mdx)("thead",{parentName:"table"},Object(o.mdx)("tr",{parentName:"thead"},Object(o.mdx)("th",se({parentName:"tr"},{align:null}),"Peer Dependency"),Object(o.mdx)("th",se({parentName:"tr"},{align:null}),"Version"))),Object(o.mdx)("tbody",{parentName:"table"},Object(o.mdx)("tr",{parentName:"tbody"},Object(o.mdx)("td",se({parentName:"tr"},{align:null}),"react"),Object(o.mdx)("td",se({parentName:"tr"},{align:null}),"^16.8.5")),Object(o.mdx)("tr",{parentName:"tbody"},Object(o.mdx)("td",se({parentName:"tr"},{align:null}),"react-dom"),Object(o.mdx)("td",se({parentName:"tr"},{align:null}),"^16.8.5")))),Object(o.mdx)("h2",{id:"usage"},"Usage"),Object(o.mdx)("pre",null,Object(o.mdx)("code",se({parentName:"pre"},{className:"language-jsx"}),"import Status from 'terra-status';\n")),Object(o.mdx)("h2",{id:"adding-custom-classname"},"Adding custom className"),Object(o.mdx)("p",null,"This component allows user to pass custom className. The variable must start with ",Object(o.mdx)("inlineCode",{parentName:"p"},"--my-app")," for proper re-themeability."),Object(o.mdx)("pre",null,Object(o.mdx)("code",se({parentName:"pre"},{className:"language-css"}),":root {\n  --my-app-status-attention-color: red;\n  --my-app-status-success-color: #00ff00;\n  --my-app-status-info-color: rgb(0,0,255);\n}\n\n.attention {\n  border-left-color: var(--my-app-status-attention-color, red);\n}\n\n.success {\n  border-left-color: var(--my-app-status-success-color, #00ff00);\n}\n\n.info {\n  border-left-color: var(--my-app-status-info-color, rgb(0,0,255));\n}\n")),Object(o.mdx)("h2",{id:"component-features"},"Component Features"),Object(o.mdx)("ul",null,Object(o.mdx)("li",{parentName:"ul"},Object(o.mdx)("a",se({parentName:"li"},{href:"https://engineering.cerner.com/terra-ui/contributing/terra-ui/component-standards#cross-browser-support"}),"Cross-Browser Support")),Object(o.mdx)("li",{parentName:"ul"},Object(o.mdx)("a",se({parentName:"li"},{href:"https://engineering.cerner.com/terra-ui/contributing/terra-ui/component-standards#responsive-support"}),"Responsive Support")),Object(o.mdx)("li",{parentName:"ul"},Object(o.mdx)("a",se({parentName:"li"},{href:"https://engineering.cerner.com/terra-ui/contributing/terra-ui/component-standards#mobile-support"}),"Mobile Support"))),Object(o.mdx)("h2",{id:"examples"},"Examples"),Object(o.mdx)(N,{title:"Status with text",mdxType:"StatusDefault"}),Object(o.mdx)(A,{title:"Status with Image",mdxType:"StatusImage"}),Object(o.mdx)(F,{title:"Status with Icon",mdxType:"StatusIcon"}),Object(o.mdx)(ee,{title:"Status with Arrange",mdxType:"StatusArrange"}),Object(o.mdx)("h2",{id:"status-props"},"Status Props"),Object(o.mdx)(oe,{mdxType:"StatusPropsTable"}))}ie.isMDXComponent=!0},840:function(e,t,n){"use strict";n.r(t);var r=n(0),a=n.n(r),o=n(12);function s(){return(s=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var r in n)Object.prototype.hasOwnProperty.call(n,r)&&(e[r]=n[r])}return e}).apply(this,arguments)}var l=function(e){var t=s({},e);return a.a.createElement(o.a,t,a.a.createElement("path",{d:"M10.3 24L33.8 0l3.9 3.8L18 24l19.7 20.2-3.9 3.8z"}))};l.displayName="IconChevronLeft",l.defaultProps={className:"",viewBox:"0 0 48 48",xmlns:"http://www.w3.org/2000/svg","data-name":"Layer 1",isBidi:!0},t.default=l},904:function(e,t,n){"use strict";var r=n(0),a=n.n(r),o=n(1),s=n.n(o),l=n(4),c=n.n(l),i=n(162),p=n(922),u=n.n(p);function m(){return(m=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var r in n)Object.prototype.hasOwnProperty.call(n,r)&&(e[r]=n[r])}return e}).apply(this,arguments)}function d(e,t){if(null==e)return{};var n,r,a=function(e,t){if(null==e)return{};var n,r,a={},o=Object.keys(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||(a[n]=e[n]);return a}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}var f=c.a.bind(u.a),b={children:s.a.node.isRequired,visuallyHiddenText:s.a.string,colorClass:s.a.string},x=function(e){var t=e.children,n=e.visuallyHiddenText,r=e.colorClass,o=d(e,["children","visuallyHiddenText","colorClass"]);return a.a.createElement("div",m({},o,{className:f("status",r,o.className)}),n&&a.a.createElement(i.default,{text:n}),t)};x.propTypes=b,t.a=x},905:function(e,t,n){e.exports={"clinical-lowlight-theme":"colors-module__clinical-lowlight-theme___GKTxL","orion-fusion-theme":"colors-module__orion-fusion-theme___3Iq9T",attention:"colors-module__attention___224PC",success:"colors-module__success___2mhi3",info:"colors-module__info___2fmX0","image-wrapper":"colors-module__image-wrapper___1Kqi9","text-wrapper":"colors-module__text-wrapper___1QYY_"}},922:function(e,t,n){e.exports={status:"Status-module__status___16AF9"}},967:function(e,t,n){"use strict";var r=n(0),a=n.n(r),o=n(12);function s(){return(s=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var r in n)Object.prototype.hasOwnProperty.call(n,r)&&(e[r]=n[r])}return e}).apply(this,arguments)}var l=function(e){var t=s({},e);return a.a.createElement(o.a,t,a.a.createElement("path",{d:"M31.1 31.4a1.51 1.51 0 11-2.1 2.1l-6.1-6.1a3 3 0 01-.5-.7.31.31 0 00-.1-.2c0-.1-.1-.3-.1-.4V15.3a1.69 1.69 0 011.5-1.8 1.69 1.69 0 011.5 1.8v10.3zm14.3-4.8a21.26 21.26 0 01-4.6 13.3A21.42 21.42 0 1120.9 5.4V2a2 2 0 012-2h2a2 2 0 012 2v3.4a18.63 18.63 0 013.4.7 24.25 24.25 0 016.4 3.3l2.2-2.2a2.05 2.05 0 012.9 0l1.4 1.4a2.05 2.05 0 010 2.9l-2.1 2.1a22 22 0 014.3 13zm-3 0A18.34 18.34 0 0029.5 9a20.32 20.32 0 00-5.5-.8A18.4 18.4 0 1038.4 38a18.16 18.16 0 004-11.4z"}))};l.displayName="IconDue",l.defaultProps={viewBox:"0 0 48 48",xmlns:"http://www.w3.org/2000/svg","data-name":"Layer 1"},t.a=l}}]);