(window.webpackJsonp=window.webpackJsonp||[]).push([[801],{1864:function(e,t,n){"use strict";n.r(t);var r=n(0),a=n.n(r),u=n(22),i=n(345);function c(e,t){return function(e){if(Array.isArray(e))return e}(e)||function(e,t){if("undefined"==typeof Symbol||!(Symbol.iterator in Object(e)))return;var n=[],r=!0,a=!1,u=void 0;try{for(var i,c=e[Symbol.iterator]();!(r=(i=c.next()).done)&&(n.push(i.value),!t||n.length!==t);r=!0);}catch(e){a=!0,u=e}finally{try{r||null==c.return||c.return()}finally{if(a)throw u}}return n}(e,t)||function(e,t){if(!e)return;if("string"==typeof e)return o(e,t);var n=Object.prototype.toString.call(e).slice(8,-1);"Object"===n&&e.constructor&&(n=e.constructor.name);if("Map"===n||"Set"===n)return Array.from(e);if("Arguments"===n||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n))return o(e,t)}(e,t)||function(){throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}()}function o(e,t){(null==t||t>e.length)&&(t=e.length);for(var n=0,r=new Array(t);n<t;n++)r[n]=e[n];return r}t.default=function(){var e=c(Object(r.useState)(""),2),t=e[0],n=e[1],o=c(Object(r.useState)(""),2),l=o[0],f=o[1],s=c(Object(r.useState)(""),2),d=s[0],m=s[1],b=Object(r.useRef)(null);return a.a.createElement("div",null,a.a.createElement("div",null," Minimum Search Length is 3 "),a.a.createElement(i.default,{inputRef:!0,id:"searchfield",onSearch:function(e){n(e),f("Search Text: ")},onInvalidSearch:function(e){n(e),f("INVALID Search Text: ")},onChange:function(e,t){m(t)},onInput:function(e){m(e.target.value)},minimumSearchTextLength:3,value:d,inputRefCallback:function(e){b.current=e}}),a.a.createElement(u.default,{text:"Set search field text",onClick:function(){b.current&&setTimeout((function(){var e;b.current.value="IpsumLorem","function"==typeof Event?e=new Event("input",{bubbles:!0,cancelable:!1}):(e=document.createEvent("Event")).initEvent("input",!0,!1),b.current.dispatchEvent(e)}),1e3)},id:"search-field-set-text-button"}),a.a.createElement("div",{id:"search-callback-text"},l,t))}}}]);