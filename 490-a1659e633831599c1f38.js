(window.webpackJsonp=window.webpackJsonp||[]).push([[490],{1908:function(e,t,a){"use strict";a.r(t);var n=a(0),r=a.n(n),l=a(914);function o(e,t){return function(e){if(Array.isArray(e))return e}(e)||function(e,t){if("undefined"==typeof Symbol||!(Symbol.iterator in Object(e)))return;var a=[],n=!0,r=!1,l=void 0;try{for(var o,i=e[Symbol.iterator]();!(n=(o=i.next()).done)&&(a.push(o.value),!t||a.length!==t);n=!0);}catch(e){r=!0,l=e}finally{try{n||null==i.return||i.return()}finally{if(r)throw l}}return a}(e,t)||function(e,t){if(!e)return;if("string"==typeof e)return i(e,t);var a=Object.prototype.toString.call(e).slice(8,-1);"Object"===a&&e.constructor&&(a=e.constructor.name);if("Map"===a||"Set"===a)return Array.from(e);if("Arguments"===a||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(a))return i(e,t)}(e,t)||function(){throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}()}function i(e,t){(null==t||t>e.length)&&(t=e.length);for(var a=0,n=new Array(t);a<t;a++)n[a]=e[a];return n}t.default=function(){var e=o(Object(n.useState)(!0),2),t=e[0],a=e[1];return r.a.createElement(l.a,{id:"switchWithLongLabel",isChecked:t,labelText:"Long Label Text Long Label Text  Long Label Text  Long Label Text  Long Label Text  Long Label Text  Long Label Text  Long Label TextLong Label Text Long Label TextLong Label Text Long Label TextLong Label Text Long Label TextLong Label Text Long Label TextLong Label Text Long Label TextLong Label Text Long Label TextLong Label Text Long Label Text",onChange:a})}},914:function(e,t,a){"use strict";var n=a(0),r=a.n(n),l=a(1),o=a.n(l),i=a(11),s=a.n(i),c=a(4),u=a.n(c),b=a(6),d=a.n(b),h=a(7),f=a(10),_=function(e){return e.setAttribute("data-terra-switch-show-focus-styles","true")},m=a(936),L=a.n(m);function g(){return(g=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var a=arguments[t];for(var n in a)Object.prototype.hasOwnProperty.call(a,n)&&(e[n]=a[n])}return e}).apply(this,arguments)}function w(e,t){if(null==e)return{};var a,n,r=function(e,t){if(null==e)return{};var a,n,r={},l=Object.keys(e);for(n=0;n<l.length;n++)a=l[n],t.indexOf(a)>=0||(r[a]=e[a]);return r}(e,t);if(Object.getOwnPropertySymbols){var l=Object.getOwnPropertySymbols(e);for(n=0;n<l.length;n++)a=l[n],t.indexOf(a)>=0||Object.prototype.propertyIsEnumerable.call(e,a)&&(r[a]=e[a])}return r}var x=u.a.bind(L.a),y=Object.freeze({ON:r.a.createElement(h.FormattedMessage,{id:"Terra.switch.switchstatuslabel.on"}),OFF:r.a.createElement(h.FormattedMessage,{id:"Terra.switch.switchstatuslabel.off"})}),p={isChecked:o.a.bool,isDisabled:o.a.bool,labelText:o.a.string.isRequired,isBlock:o.a.bool,onChange:o.a.func},v={isChecked:!1,isDisabled:!1,isBlock:!1,onChange:void 0},T=function(e){var t,a=e.isChecked,l=e.isDisabled,o=e.isBlock,i=e.onChange,c=e.labelText,u=w(e,["isChecked","isDisabled","isBlock","onChange","labelText"]),b=r.a.useContext(d.a),h=Object(n.useRef)(),m=Object(n.useCallback)((function(e){h.current.focus(),i&&i(!a,e)}),[a,i]),L=a?y.ON:y.OFF,p=s()(x("switch",{"is-enabled":!l},{"is-disabled":l},{"is-selected":a},{"is-block":o},b.className),u.className),v=x(["label-container",{"is-block":o}]);return t=l?{"aria-disabled":!0}:{tabIndex:"0",onBlur:function(){_(h.current)},onClick:m,onMouseDown:function(e){e.preventDefault(),function(e){e.setAttribute("data-terra-switch-show-focus-styles","false")}(h.current)},onKeyDown:function(e){e.nativeEvent.keyCode!==f.KEY_RETURN&&e.nativeEvent.keyCode!==f.KEY_SPACE||(e.preventDefault(),_(h.current),i&&i(!a,e))}},r.a.createElement("div",g({},u,t,{"aria-label":c,"aria-checked":a,role:"switch",className:p,"data-terra-switch-show-focus-styles":!0,ref:h}),r.a.createElement("div",{"aria-hidden":!0,className:v},r.a.createElement("div",{className:x("label-text")},c),r.a.createElement("div",{className:x("status-label-text")},L)),r.a.createElement("div",{"aria-hidden":!0,className:x("tray")},r.a.createElement("div",{className:x("slider")})))};T.propTypes=p,T.defaultProps=v;t.a=T},936:function(e,t,a){e.exports={"clinical-lowlight-theme":"Switch-module__clinical-lowlight-theme___3NDHQ","orion-fusion-theme":"Switch-module__orion-fusion-theme___3HBxh",switch:"Switch-module__switch___1cbh3","is-block":"Switch-module__is-block___3-X-G","label-container":"Switch-module__label-container___1qHWW","label-text":"Switch-module__label-text___-30Su","status-label-text":"Switch-module__status-label-text___1fWFd",tray:"Switch-module__tray___2Mtpi",slider:"Switch-module__slider___4s9IB","is-selected":"Switch-module__is-selected___Nc5QA","is-disabled":"Switch-module__is-disabled___2zDH6","is-enabled":"Switch-module__is-enabled___2E88L"}}}]);