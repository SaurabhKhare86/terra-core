(window.webpackJsonp=window.webpackJsonp||[]).push([[252],{1657:function(e,t,n){"use strict";n.r(t);var r=n(0),o=n.n(r),a=n(4),u=n.n(a),i=n(849),l=n(861),c=n.n(l);function f(e,t){return function(e){if(Array.isArray(e))return e}(e)||function(e,t){if("undefined"==typeof Symbol||!(Symbol.iterator in Object(e)))return;var n=[],r=!0,o=!1,a=void 0;try{for(var u,i=e[Symbol.iterator]();!(r=(u=i.next()).done)&&(n.push(u.value),!t||n.length!==t);r=!0);}catch(e){o=!0,a=e}finally{try{r||null==i.return||i.return()}finally{if(o)throw a}}return n}(e,t)||function(e,t){if(!e)return;if("string"==typeof e)return p(e,t);var n=Object.prototype.toString.call(e).slice(8,-1);"Object"===n&&e.constructor&&(n=e.constructor.name);if("Map"===n||"Set"===n)return Array.from(e);if("Arguments"===n||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n))return p(e,t)}(e,t)||function(){throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}()}function p(e,t){(null==t||t>e.length)&&(t=e.length);for(var n=0,r=new Array(t);n<t;n++)r[n]=e[n];return r}var s=u.a.bind(c.a);t.default=function(){var e=f(Object(r.useState)(0),2),t=e[0],n=e[1],a=f(Object(r.useState)(""),2),u=a[0],l=a[1],c=Object(r.useRef)(null);return o.a.createElement("div",{className:s("content-wrapper")},o.a.createElement("p",null,"onInput Trigger Count:"," ",o.a.createElement("span",null,t)),o.a.createElement(i.a,{onChange:function(e){l(e.target.value)},onInput:function(e){l(e.target.value),n(t+1)},value:u,ariaLabel:"label",refCallback:function(e){c.current=e}}),o.a.createElement("button",{type:"button",onClick:function(){if(c.current){c.current.value="IpsumLorem";var e=new Event("input",{bubbles:!0,cancelable:!1});c.current.dispatchEvent(e)}},id:"input-set-text-button",className:s("programmatic-button")},"Set input text"))}},849:function(e,t,n){"use strict";var r=n(0),o=n.n(r),a=n(1),u=n.n(a),i=n(11),l=n.n(i),c=n(4),f=n.n(c),p=n(6),s=n.n(p),b=n(851),y=n.n(b);function m(e){return(m="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e})(e)}function d(){return(d=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var r in n)Object.prototype.hasOwnProperty.call(n,r)&&(e[r]=n[r])}return e}).apply(this,arguments)}function v(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function h(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function O(e,t){if(null==e)return{};var n,r,o=function(e,t){if(null==e)return{};var n,r,o={},a=Object.keys(e);for(r=0;r<a.length;r++)n=a[r],t.indexOf(n)>=0||(o[n]=e[n]);return o}(e,t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(r=0;r<a.length;r++)n=a[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(o[n]=e[n])}return o}function g(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}function _(e,t){for(var n=0;n<t.length;n++){var r=t[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(e,r.key,r)}}function w(e,t){return(w=Object.setPrototypeOf||function(e,t){return e.__proto__=t,e})(e,t)}function j(e){var t=function(){if("undefined"==typeof Reflect||!Reflect.construct)return!1;if(Reflect.construct.sham)return!1;if("function"==typeof Proxy)return!0;try{return Date.prototype.toString.call(Reflect.construct(Date,[],(function(){}))),!0}catch(e){return!1}}();return function(){var n,r=P(e);if(t){var o=P(this).constructor;n=Reflect.construct(r,arguments,o)}else n=r.apply(this,arguments);return I(this,n)}}function I(e,t){return!t||"object"!==m(t)&&"function"!=typeof t?function(e){if(void 0===e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return e}(e):t}function P(e){return(P=Object.setPrototypeOf?Object.getPrototypeOf:function(e){return e.__proto__||Object.getPrototypeOf(e)})(e)}var S=f.a.bind(y.a),C={defaultValue:u.a.oneOfType([u.a.string,u.a.number]),disabled:u.a.bool,isIncomplete:u.a.bool,isInvalid:u.a.bool,onBlur:u.a.func,onChange:u.a.func,onFocus:u.a.func,onInput:u.a.func,name:u.a.string,pattern:u.a.string,refCallback:u.a.func,required:u.a.bool,type:u.a.string,value:u.a.oneOfType([u.a.string,u.a.number]),ariaLabel:u.a.string},E={defaultValue:void 0,disabled:!1,isIncomplete:!1,isInvalid:!1,onBlur:void 0,onChange:void 0,onFocus:void 0,onInput:void 0,name:null,pattern:void 0,required:!1,refCallback:void 0,type:void 0,value:void 0},k=function(e){!function(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function");e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,writable:!0,configurable:!0}}),t&&w(e,t)}(u,e);var t,n,r,a=j(u);function u(){return g(this,u),a.apply(this,arguments)}return t=u,(n=[{key:"render",value:function(){var e,t=this.props,n=t.defaultValue,r=t.disabled,a=t.isIncomplete,u=t.isInvalid,i=t.onBlur,c=t.onChange,f=t.onFocus,p=t.onInput,s=t.name,b=t.pattern,y=t.refCallback,m=t.required,g=t.type,_=t.ariaLabel,w=t.value,j=function(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?v(Object(n),!0).forEach((function(t){h(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):v(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}({},O(t,["defaultValue","disabled","isIncomplete","isInvalid","onBlur","onChange","onFocus","onInput","name","pattern","refCallback","required","type","ariaLabel","value"])),I=this.context,P=l()(S("form-input",{"form-error":u},{"form-incomplete":a&&m&&!u},I.className),j.className);return j&&Object.prototype.hasOwnProperty.call(j,"aria-label")?e=_||j["aria-label"]:_&&(e=_),j["aria-label"]=e,m&&(j["aria-required"]="true"),void 0!==w?j.value=w:void 0!==n&&(j.defaultValue=n),j.placeholder&&(j.placeholder=null),o.a.createElement("input",d({},j,{ref:function(e){y&&y(e)},name:s,type:g,pattern:b,onBlur:i,onChange:c,onFocus:f,onInput:p,disabled:r,required:m,className:P}))}}])&&_(t.prototype,n),r&&_(t,r),u}(o.a.Component);k.propTypes=C,k.defaultProps=E,k.contextType=s.a,k.isInput=!0,t.a=k},851:function(e,t,n){e.exports={"clinical-lowlight-theme":"Input-module__clinical-lowlight-theme___1fADC","orion-fusion-theme":"Input-module__orion-fusion-theme___3ND08","form-input":"Input-module__form-input___2nc2y","form-error":"Input-module__form-error___1044y","form-incomplete":"Input-module__form-incomplete___2JwG4"}},861:function(e,t,n){e.exports={"content-wrapper":"Input-test-module__content-wrapper___2x5y_","programmatic-button":"Input-test-module__programmatic-button___3CBmA"}}}]);