(window.webpackJsonp=window.webpackJsonp||[]).push([[184],{1946:function(t,e,n){"use strict";n.r(e);var i=n(0),o=n.n(i),a=n(860);e.default=function(){return o.a.createElement(a.a,{id:"iconOnlyToggleButton",closedButtonText:"Custom Text",isIconOnly:!0},o.a.createElement("p",null,"Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua."))}},846:function(t,e,n){"use strict";var i=n(0),o=n.n(i),a=n(1),r=n.n(a),s=n(4),l=n.n(s),u=n(847),c=n.n(u),h=n(848),f=n.n(h);function p(){return(p=Object.assign||function(t){for(var e=1;e<arguments.length;e++){var n=arguments[e];for(var i in n)Object.prototype.hasOwnProperty.call(n,i)&&(t[i]=n[i])}return t}).apply(this,arguments)}function m(t,e){if(null==t)return{};var n,i,o=function(t,e){if(null==t)return{};var n,i,o={},a=Object.keys(t);for(i=0;i<a.length;i++)n=a[i],e.indexOf(n)>=0||(o[n]=t[n]);return o}(t,e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(t);for(i=0;i<a.length;i++)n=a[i],e.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(t,n)&&(o[n]=t[n])}return o}var d=l.a.bind(f.a),g={children:r.a.node.isRequired,isAnimated:r.a.bool,isOpen:r.a.bool},y=function(t){var e,n=t.isAnimated,i=t.isOpen,a=t.children,r=m(t,["isAnimated","isOpen","children"]),s=i?"auto":0;return e=n?o.a.createElement(c.a,{duration:250,height:s,easing:"ease-out"},a):i&&a,o.a.createElement("div",p({},r,{className:d("toggle",r.className),"aria-hidden":!i}),e)};y.propTypes=g,y.defaultProps={isAnimated:!1,isOpen:!1},e.a=y},847:function(t,e,n){"use strict";Object.defineProperty(e,"__esModule",{value:!0});var i="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(t){return typeof t}:function(t){return t&&"function"==typeof Symbol&&t.constructor===Symbol&&t!==Symbol.prototype?"symbol":typeof t},o=Object.assign||function(t){for(var e=1;e<arguments.length;e++){var n=arguments[e];for(var i in n)Object.prototype.hasOwnProperty.call(n,i)&&(t[i]=n[i])}return t},a=function(){function t(t,e){for(var n=0;n<e.length;n++){var i=e[n];i.enumerable=i.enumerable||!1,i.configurable=!0,"value"in i&&(i.writable=!0),Object.defineProperty(t,i.key,i)}}return function(e,n,i){return n&&t(e.prototype,n),i&&t(e,i),e}}(),r=u(n(0)),s=u(n(1)),l=u(n(11));function u(t){return t&&t.__esModule?t:{default:t}}function c(t,e,n){return e in t?Object.defineProperty(t,e,{value:n,enumerable:!0,configurable:!0,writable:!0}):t[e]=n,t}var h={animating:"rah-animating",animatingUp:"rah-animating--up",animatingDown:"rah-animating--down",animatingToHeightZero:"rah-animating--to-height-zero",animatingToHeightAuto:"rah-animating--to-height-auto",animatingToHeightSpecific:"rah-animating--to-height-specific",static:"rah-static",staticHeightZero:"rah-static--height-zero",staticHeightAuto:"rah-static--height-auto",staticHeightSpecific:"rah-static--height-specific"},f=["animateOpacity","animationStateClasses","applyInlineTransitions","children","contentClassName","delay","duration","easing","height","onAnimationEnd","onAnimationStart"];function p(t){for(var e=arguments.length,n=Array(e>1?e-1:0),i=1;i<e;i++)n[i-1]=arguments[i];if(!n.length)return t;for(var o={},a=Object.keys(t),r=0;r<a.length;r++){var s=a[r];-1===n.indexOf(s)&&(o[s]=t[s])}return o}function m(t){t.forEach((function(t){return cancelAnimationFrame(t)}))}function d(t){return!isNaN(parseFloat(t))&&isFinite(t)}function g(t){return"string"==typeof t&&t.search("%")===t.length-1&&d(t.substr(0,t.length-1))}function y(t,e){t&&"function"==typeof t&&t(e)}var b=function(t){function e(t){!function(t,e){if(!(t instanceof e))throw new TypeError("Cannot call a class as a function")}(this,e);var n=function(t,e){if(!t)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return!e||"object"!=typeof e&&"function"!=typeof e?t:e}(this,(e.__proto__||Object.getPrototypeOf(e)).call(this,t));n.animationFrameIDs=[];var i="auto",a="visible";d(t.height)?(i=t.height<0||"0"===t.height?0:t.height,a="hidden"):g(t.height)&&(i="0%"===t.height?0:t.height,a="hidden"),n.animationStateClasses=o({},h,t.animationStateClasses);var r=n.getStaticStateClasses(i);return n.state={animationStateClasses:r,height:i,overflow:a,shouldUseTransitions:!1},n}return function(t,e){if("function"!=typeof e&&null!==e)throw new TypeError("Super expression must either be null or a function, not "+typeof e);t.prototype=Object.create(e&&e.prototype,{constructor:{value:t,enumerable:!1,writable:!0,configurable:!0}}),e&&(Object.setPrototypeOf?Object.setPrototypeOf(t,e):t.__proto__=e)}(e,t),a(e,[{key:"componentDidMount",value:function(){var t=this.state.height;this.contentElement&&this.contentElement.style&&this.hideContent(t)}},{key:"componentDidUpdate",value:function(t,e){var n,i,o=this,a=this.props,r=a.delay,s=a.duration,u=a.height,h=a.onAnimationEnd,f=a.onAnimationStart;if(this.contentElement&&u!==t.height){var p;this.showContent(e.height),this.contentElement.style.overflow="hidden";var b=this.contentElement.offsetHeight;this.contentElement.style.overflow="";var O=s+r,v=null,S={height:null,overflow:"hidden"},C="auto"===e.height;d(u)?(v=u<0||"0"===u?0:u,S.height=v):g(u)?(v="0%"===u?0:u,S.height=v):(v=b,S.height="auto",S.overflow=null),C&&(S.height=v,v=b);var T=(0,l.default)((c(p={},this.animationStateClasses.animating,!0),c(p,this.animationStateClasses.animatingUp,"auto"===t.height||u<t.height),c(p,this.animationStateClasses.animatingDown,"auto"===u||u>t.height),c(p,this.animationStateClasses.animatingToHeightZero,0===S.height),c(p,this.animationStateClasses.animatingToHeightAuto,"auto"===S.height),c(p,this.animationStateClasses.animatingToHeightSpecific,S.height>0),p)),_=this.getStaticStateClasses(S.height);this.setState({animationStateClasses:T,height:v,overflow:"hidden",shouldUseTransitions:!C}),clearTimeout(this.timeoutID),clearTimeout(this.animationClassesTimeoutID),C?(S.shouldUseTransitions=!0,m(this.animationFrameIDs),this.animationFrameIDs=(n=function(){o.setState(S),y(f,{newHeight:S.height})},(i=[])[0]=requestAnimationFrame((function(){i[1]=requestAnimationFrame((function(){n()}))})),i),this.animationClassesTimeoutID=setTimeout((function(){o.setState({animationStateClasses:_,shouldUseTransitions:!1}),o.hideContent(S.height),y(h,{newHeight:S.height})}),O)):(y(f,{newHeight:v}),this.timeoutID=setTimeout((function(){S.animationStateClasses=_,S.shouldUseTransitions=!1,o.setState(S),"auto"!==u&&o.hideContent(v),y(h,{newHeight:v})}),O))}}},{key:"componentWillUnmount",value:function(){m(this.animationFrameIDs),clearTimeout(this.timeoutID),clearTimeout(this.animationClassesTimeoutID),this.timeoutID=null,this.animationClassesTimeoutID=null,this.animationStateClasses=null}},{key:"showContent",value:function(t){0===t&&(this.contentElement.style.display="")}},{key:"hideContent",value:function(t){0===t&&(this.contentElement.style.display="none")}},{key:"getStaticStateClasses",value:function(t){var e;return(0,l.default)((c(e={},this.animationStateClasses.static,!0),c(e,this.animationStateClasses.staticHeightZero,0===t),c(e,this.animationStateClasses.staticHeightSpecific,t>0),c(e,this.animationStateClasses.staticHeightAuto,"auto"===t),e))}},{key:"render",value:function(){var t,e=this,n=this.props,i=n.animateOpacity,a=n.applyInlineTransitions,s=n.children,u=n.className,h=n.contentClassName,m=n.delay,d=n.duration,g=n.easing,y=n.id,b=n.style,O=this.state,v=O.height,S=O.overflow,C=O.animationStateClasses,T=O.shouldUseTransitions,_=o({},b,{height:v,overflow:S||b.overflow});T&&a&&(_.transition="height "+d+"ms "+g+" "+m+"ms",b.transition&&(_.transition=b.transition+", "+_.transition),_.WebkitTransition=_.transition);var w={};i&&(w.transition="opacity "+d+"ms "+g+" "+m+"ms",w.WebkitTransition=w.transition,0===v&&(w.opacity=0));var I=(0,l.default)((c(t={},C,!0),c(t,u,u),t)),j="undefined"!=typeof this.props["aria-hidden"]?this.props["aria-hidden"]:0===v;return r.default.createElement("div",o({},p.apply(void 0,[this.props].concat(f)),{"aria-hidden":j,className:I,id:y,style:_}),r.default.createElement("div",{className:h,style:w,ref:function(t){return e.contentElement=t}},s))}}]),e}(r.default.Component);b.propTypes={"aria-hidden":s.default.bool,animateOpacity:s.default.bool,animationStateClasses:s.default.object,applyInlineTransitions:s.default.bool,children:s.default.any.isRequired,className:s.default.string,contentClassName:s.default.string,delay:s.default.number,duration:s.default.number,easing:s.default.string,height:function(t,e,n){var o=t[e];return"number"==typeof o&&o>=0||g(o)||"auto"===o?null:new TypeError('value "'+o+'" of type "'+("undefined"==typeof o?"undefined":i(o))+'" is invalid type for '+e+" in "+n+'. It needs to be a positive number, string "auto" or percentage string (e.g. "15%").')},id:s.default.string,onAnimationEnd:s.default.func,onAnimationStart:s.default.func,style:s.default.object},b.defaultProps={animateOpacity:!1,animationStateClasses:h,applyInlineTransitions:!0,duration:250,delay:0,easing:"ease",style:{}},e.default=b},848:function(t,e,n){t.exports={toggle:"Toggle-module__toggle___18ZfB"}},860:function(t,e,n){"use strict";var i=n(0),o=n.n(i),a=n(1),r=n.n(a),s=n(4),l=n.n(s),u=n(22),c=n(161),h=n(846),f=n(868),p=n.n(f);function m(t){return(m="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(t){return typeof t}:function(t){return t&&"function"==typeof Symbol&&t.constructor===Symbol&&t!==Symbol.prototype?"symbol":typeof t})(t)}function d(){return(d=Object.assign||function(t){for(var e=1;e<arguments.length;e++){var n=arguments[e];for(var i in n)Object.prototype.hasOwnProperty.call(n,i)&&(t[i]=n[i])}return t}).apply(this,arguments)}function g(t,e){if(null==t)return{};var n,i,o=function(t,e){if(null==t)return{};var n,i,o={},a=Object.keys(t);for(i=0;i<a.length;i++)n=a[i],e.indexOf(n)>=0||(o[n]=t[n]);return o}(t,e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(t);for(i=0;i<a.length;i++)n=a[i],e.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(t,n)&&(o[n]=t[n])}return o}function y(t,e){for(var n=0;n<e.length;n++){var i=e[n];i.enumerable=i.enumerable||!1,i.configurable=!0,"value"in i&&(i.writable=!0),Object.defineProperty(t,i.key,i)}}function b(t,e){return(b=Object.setPrototypeOf||function(t,e){return t.__proto__=e,t})(t,e)}function O(t){var e=function(){if("undefined"==typeof Reflect||!Reflect.construct)return!1;if(Reflect.construct.sham)return!1;if("function"==typeof Proxy)return!0;try{return Date.prototype.toString.call(Reflect.construct(Date,[],(function(){}))),!0}catch(t){return!1}}();return function(){var n,i=C(t);if(e){var o=C(this).constructor;n=Reflect.construct(i,arguments,o)}else n=i.apply(this,arguments);return v(this,n)}}function v(t,e){return!e||"object"!==m(e)&&"function"!=typeof e?S(t):e}function S(t){if(void 0===t)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return t}function C(t){return(C=Object.setPrototypeOf?Object.getPrototypeOf:function(t){return t.__proto__||Object.getPrototypeOf(t)})(t)}var T=l.a.bind(p.a),_={children:r.a.node.isRequired,closedButtonText:r.a.string.isRequired,buttonAttrs:r.a.object,icon:r.a.element,isAnimated:r.a.bool,isIconAnimated:r.a.bool,isIconOnly:r.a.bool,isInitiallyOpen:r.a.bool,onClose:r.a.func,onOpen:r.a.func,openedButtonText:r.a.string},w={isAnimated:!1,isIconAnimated:!1,isIconOnly:!1,isInitiallyOpen:!1,icon:o.a.createElement(c.default,null)},I=function(t){!function(t,e){if("function"!=typeof e&&null!==e)throw new TypeError("Super expression must either be null or a function");t.prototype=Object.create(e&&e.prototype,{constructor:{value:t,writable:!0,configurable:!0}}),e&&b(t,e)}(r,t);var e,n,i,a=O(r);function r(t){var e;return function(t,e){if(!(t instanceof e))throw new TypeError("Cannot call a class as a function")}(this,r),(e=a.call(this,t)).state={isOpen:t.isInitiallyOpen},e.handleOnClick=e.handleOnClick.bind(S(e)),e}return e=r,(n=[{key:"handleOnClick",value:function(t){t.preventDefault(),!this.state.isOpen&&this.props.onOpen?this.props.onOpen():this.state.isOpen&&this.props.onClose&&this.props.onClose(),this.setState((function(t){return{isOpen:!t.isOpen}}))}},{key:"render",value:function(){var t=this.props,e=t.buttonAttrs,n=(t.children,t.closedButtonText),i=t.icon,a=(t.isAnimated,t.isIconAnimated),r=t.isIconOnly,s=(t.isInitiallyOpen,t.onClose,t.onOpen,t.openedButtonText),l=g(t,["buttonAttrs","children","closedButtonText","icon","isAnimated","isIconAnimated","isIconOnly","isInitiallyOpen","onClose","onOpen","openedButtonText"]),c=s||n,f=this.state.isOpen?c:n,p=r?n:f,m=T(["button",{"is-open":this.state.isOpen},{"is-icon-animated":a},l.className]),y=o.a.createElement(u.default,d({},e,{isIconOnly:r,icon:o.a.createElement("span",{className:T("icon")},i),"aria-expanded":this.state.isOpen,text:p,onClick:this.handleOnClick}));return o.a.createElement("div",d({},l,{className:m}),y,o.a.createElement(h.a,{isOpen:this.state.isOpen,isAnimated:this.props.isAnimated},this.props.children))}}])&&y(e.prototype,n),i&&y(e,i),r}(o.a.Component);I.propTypes=_,I.defaultProps=w,e.a=I},868:function(t,e,n){t.exports={"toggle-button":"ToggleButton-module__toggle-button___3i8BO",icon:"ToggleButton-module__icon___3dY2x","is-open":"ToggleButton-module__is-open___LSF-4","is-icon-animated":"ToggleButton-module__is-icon-animated___drV-n","button-text":"ToggleButton-module__button-text___1WRxB"}}}]);