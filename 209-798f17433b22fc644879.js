(window.webpackJsonp=window.webpackJsonp||[]).push([[209],{1651:function(e,t,n){"use strict";n.r(t);var r=n(0),o=n.n(r),a=n(4),l=n.n(a),i=n(926),u=n(861),c=n.n(u),p=l.a.bind(c.a);t.default=function(){return o.a.createElement("div",{className:p("content-wrapper")},o.a.createElement(i.a,{inputId:"test-input",defaultValue:"Value",error:"Text",help:"Help",hideRequired:!0,inputAttrs:{name:"test",type:"text"},label:"Label Text",labelAttrs:{className:"label"},showOptional:!0,maxWidth:"40%"}))}},849:function(e,t,n){"use strict";var r=n(0),o=n.n(r),a=n(1),l=n.n(a),i=n(11),u=n.n(i),c=n(4),p=n.n(c),s=n(6),f=n.n(s),d=n(851),b=n.n(d);function y(e){return(y="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e})(e)}function m(){return(m=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var r in n)Object.prototype.hasOwnProperty.call(n,r)&&(e[r]=n[r])}return e}).apply(this,arguments)}function h(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function v(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function O(e,t){if(null==e)return{};var n,r,o=function(e,t){if(null==e)return{};var n,r,o={},a=Object.keys(e);for(r=0;r<a.length;r++)n=a[r],t.indexOf(n)>=0||(o[n]=e[n]);return o}(e,t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(r=0;r<a.length;r++)n=a[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(o[n]=e[n])}return o}function g(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}function I(e,t){for(var n=0;n<t.length;n++){var r=t[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(e,r.key,r)}}function _(e,t){return(_=Object.setPrototypeOf||function(e,t){return e.__proto__=t,e})(e,t)}function w(e){var t=function(){if("undefined"==typeof Reflect||!Reflect.construct)return!1;if(Reflect.construct.sham)return!1;if("function"==typeof Proxy)return!0;try{return Date.prototype.toString.call(Reflect.construct(Date,[],(function(){}))),!0}catch(e){return!1}}();return function(){var n,r=P(e);if(t){var o=P(this).constructor;n=Reflect.construct(r,arguments,o)}else n=r.apply(this,arguments);return j(this,n)}}function j(e,t){return!t||"object"!==y(t)&&"function"!=typeof t?function(e){if(void 0===e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return e}(e):t}function P(e){return(P=Object.setPrototypeOf?Object.getPrototypeOf:function(e){return e.__proto__||Object.getPrototypeOf(e)})(e)}var C=p.a.bind(b.a),x={defaultValue:l.a.oneOfType([l.a.string,l.a.number]),disabled:l.a.bool,isIncomplete:l.a.bool,isInvalid:l.a.bool,onBlur:l.a.func,onChange:l.a.func,onFocus:l.a.func,onInput:l.a.func,name:l.a.string,pattern:l.a.string,refCallback:l.a.func,required:l.a.bool,type:l.a.string,value:l.a.oneOfType([l.a.string,l.a.number]),ariaLabel:l.a.string},q={defaultValue:void 0,disabled:!1,isIncomplete:!1,isInvalid:!1,onBlur:void 0,onChange:void 0,onFocus:void 0,onInput:void 0,name:null,pattern:void 0,required:!1,refCallback:void 0,type:void 0,value:void 0},k=function(e){!function(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function");e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,writable:!0,configurable:!0}}),t&&_(e,t)}(l,e);var t,n,r,a=w(l);function l(){return g(this,l),a.apply(this,arguments)}return t=l,(n=[{key:"render",value:function(){var e,t=this.props,n=t.defaultValue,r=t.disabled,a=t.isIncomplete,l=t.isInvalid,i=t.onBlur,c=t.onChange,p=t.onFocus,s=t.onInput,f=t.name,d=t.pattern,b=t.refCallback,y=t.required,g=t.type,I=t.ariaLabel,_=t.value,w=function(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?h(Object(n),!0).forEach((function(t){v(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):h(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}({},O(t,["defaultValue","disabled","isIncomplete","isInvalid","onBlur","onChange","onFocus","onInput","name","pattern","refCallback","required","type","ariaLabel","value"])),j=this.context,P=u()(C("form-input",{"form-error":l},{"form-incomplete":a&&y&&!l},j.className),w.className);return w&&Object.prototype.hasOwnProperty.call(w,"aria-label")?e=I||w["aria-label"]:I&&(e=I),w["aria-label"]=e,y&&(w["aria-required"]="true"),void 0!==_?w.value=_:void 0!==n&&(w.defaultValue=n),w.placeholder&&(w.placeholder=null),o.a.createElement("input",m({},w,{ref:function(e){b&&b(e)},name:f,type:g,pattern:d,onBlur:i,onChange:c,onFocus:p,onInput:s,disabled:r,required:y,className:P}))}}])&&I(t.prototype,n),r&&I(t,r),l}(o.a.Component);k.propTypes=x,k.defaultProps=q,k.contextType=f.a,k.isInput=!0,t.a=k},851:function(e,t,n){e.exports={"clinical-lowlight-theme":"Input-module__clinical-lowlight-theme___1fADC","orion-fusion-theme":"Input-module__orion-fusion-theme___3ND08","form-input":"Input-module__form-input___2nc2y","form-error":"Input-module__form-error___1044y","form-incomplete":"Input-module__form-incomplete___2JwG4"}},861:function(e,t,n){e.exports={"content-wrapper":"Input-test-module__content-wrapper___2x5y_","programmatic-button":"Input-test-module__programmatic-button___3CBmA"}},926:function(e,t,n){"use strict";var r=n(0),o=n.n(r),a=n(1),l=n.n(a),i=n(207),u=n(129),c=n(849);function p(){return(p=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var r in n)Object.prototype.hasOwnProperty.call(n,r)&&(e[r]=n[r])}return e}).apply(this,arguments)}function s(e,t){if(null==e)return{};var n,r,o=function(e,t){if(null==e)return{};var n,r,o={},a=Object.keys(e);for(r=0;r<a.length;r++)n=a[r],t.indexOf(n)>=0||(o[n]=e[n]);return o}(e,t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(r=0;r<a.length;r++)n=a[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(o[n]=e[n])}return o}var f={inputId:l.a.string.isRequired,label:l.a.string.isRequired,defaultValue:l.a.oneOfType([l.a.string,l.a.number]),disabled:l.a.bool,error:l.a.node,errorIcon:l.a.element,help:l.a.node,hideRequired:l.a.bool,inputAttrs:l.a.object,isIncomplete:l.a.bool,isInline:l.a.bool,isInvalid:l.a.bool,isLabelHidden:l.a.bool,labelAttrs:l.a.object,maxWidth:l.a.string,onChange:l.a.func,onInput:l.a.func,refCallback:l.a.func,required:l.a.bool,showOptional:l.a.bool,type:l.a.string,value:l.a.oneOfType([l.a.string,l.a.number])},d={defaultValue:void 0,disabled:!1,error:null,errorIcon:o.a.createElement(u.a,null),help:null,hideRequired:!1,inputAttrs:{},isIncomplete:!1,isInline:!1,isInvalid:!1,isLabelHidden:!1,labelAttrs:{},onChange:void 0,onInput:void 0,maxWidth:void 0,refCallback:void 0,required:!1,showOptional:!1,type:void 0,value:void 0},b=function(e){var t,n=e.defaultValue,r=e.disabled,a=e.error,l=e.errorIcon,u=e.help,f=e.hideRequired,d=e.inputAttrs,b=e.inputId,y=e.isIncomplete,m=e.isInline,h=e.isInvalid,v=e.isLabelHidden,O=e.label,g=e.labelAttrs,I=e.maxWidth,_=e.onChange,w=e.onInput,j=e.refCallback,P=e.required,C=e.showOptional,x=e.type,q=e.value,k=s(e,["defaultValue","disabled","error","errorIcon","help","hideRequired","inputAttrs","inputId","isIncomplete","isInline","isInvalid","isLabelHidden","label","labelAttrs","maxWidth","onChange","onInput","refCallback","required","showOptional","type","value"]);u&&a&&h?t="".concat(b,"-error ").concat(b,"-help"):(u&&(t="".concat(b,"-help")),a&&h&&(t="".concat(b,"-error")));var R=x||d.type;return k.placeholder&&(k.placeholder=null),o.a.createElement(i.a,p({label:O,labelAttrs:g,error:a,errorIcon:l,help:u,hideRequired:f,required:P,showOptional:C,isInvalid:h,isInline:m,isLabelHidden:v,htmlFor:b,maxWidth:I},k),o.a.createElement(c.a,p({},d,{disabled:d.disabled||r,id:b,isIncomplete:y,type:R,onChange:_,onInput:w,value:q,defaultValue:n,refCallback:j,"aria-describedby":t})))};b.propTypes=f,b.defaultProps=d,t.a=b}}]);