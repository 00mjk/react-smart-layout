!function(e){var t={};function n(r){if(t[r])return t[r].exports;var o=t[r]={i:r,l:!1,exports:{}};return e[r].call(o.exports,o,o.exports,n),o.l=!0,o.exports}n.m=e,n.c=t,n.d=function(e,t,r){n.o(e,t)||Object.defineProperty(e,t,{enumerable:!0,get:r})},n.r=function(e){"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},n.t=function(e,t){if(1&t&&(e=n(e)),8&t)return e;if(4&t&&"object"==typeof e&&e&&e.__esModule)return e;var r=Object.create(null);if(n.r(r),Object.defineProperty(r,"default",{enumerable:!0,value:e}),2&t&&"string"!=typeof e)for(var o in e)n.d(r,o,function(t){return e[t]}.bind(null,o));return r},n.n=function(e){var t=e&&e.__esModule?function(){return e.default}:function(){return e};return n.d(t,"a",t),t},n.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},n.p="",n(n.s=4)}([function(e,t){e.exports=require("react")},function(e,t){e.exports=require("react-native")},function(e,t){e.exports=require("styled-components")},function(e,t){e.exports=require("lodash")},function(e,t,n){"use strict";n.r(t),n.d(t,"Padding",(function(){return c})),n.d(t,"Column",(function(){return l})),n.d(t,"Row",(function(){return b})),n.d(t,"Margin",(function(){return g})),n.d(t,"SpaceStatusBar",(function(){return O})),n.d(t,"KeyboardSafe",(function(){return m})),n.d(t,"RowBetween",(function(){return h})),n.d(t,"ThemedPadding",(function(){return P}));var r=n(2),o=n.n(r),c=o.a.View((function(e){var t=e.horizontal,n=e.vertical,r=e.left,o=e.right,c=e.top,i=e.bottom,a=e.all;return"\n    ".concat(void 0!==t?"padding-horizontal: ".concat(t,"px;"):"","\n    ").concat(void 0!==n?"padding-vertical: ".concat(n,"px;"):"","\n    ").concat(void 0!==r?"padding-left: ".concat(r,"px;"):"","\n    ").concat(void 0!==o?"padding-right: ".concat(o,"px;"):"","\n    ").concat(void 0!==c?"padding-top: ".concat(c,"px;"):"","\n    ").concat(void 0!==i?"padding-bottom: ".concat(i,"px;"):"","\n    ").concat(void 0!==a?"\n        padding-vertical: ".concat(a,"px;\n        padding-horizontal: ").concat(a,"px;\n    "):"","\n")})),i=n(0),a=n.n(i),u=n(1);var l=function(e){var t=e.children,n=e.wrapper,r=e.divider,o=e.style,c=e.space,l=a.a.Children.count(t),f=Object(i.useMemo)((function(){var e=a.a.Children.toArray(t).filter((function(e){return!!e}));return r?function(e,t){if(!t)return e;var n=[];return e.forEach((function(r,o){n.push(r),o!==e.length-1&&n.push(t)})),n}(e,r):e}),[t,r]);return a.a.createElement(u.View,{style:o},f.map((function(e,t){var o=t<l-1,i=a.a.createElement(u.View,{key:t,style:{paddingBottom:o?c:0}},e);return n&&e!==r?a.a.cloneElement(n,{key:t},i):i})))},f=n(3);function p(){return(p=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var r in n)Object.prototype.hasOwnProperty.call(n,r)&&(e[r]=n[r])}return e}).apply(this,arguments)}function d(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function s(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}var b=function(e){var t=e.children,n=e.space,r=e.alignCenter,o=e.style,c=e.scrollable,i=e.scrollProps,l=void 0===i?{}:i,b=a.a.Children.count(t),g=c?u.ScrollView:u.View;return a.a.createElement(g,p({style:Object(f.flattenDepth)([{flexDirection:"row",alignItems:r?"center":"flex-start"},o],2)},c?function(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?d(Object(n),!0).forEach((function(t){s(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):d(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}({horizontal:!0},l):{}),a.a.Children.map(t,(function(e,t){return a.a.createElement(u.View,{key:t,style:{paddingRight:t!==b?n:0}},e)})))},g=o.a.View((function(e){var t=e.horizontal,n=e.vertical,r=e.left,o=e.right,c=e.top,i=e.bottom,a=e.all;return"\n    ".concat(t?"margin-horizontal: ".concat(t,"px;"):"","\n    ").concat(n?"margin-vertical: ".concat(n,"px;"):"","\n    ").concat(r?"margin-left: ".concat(r,"px;"):"","\n    ").concat(o?"margin-right: ".concat(o,"px;"):"","\n    ").concat(c?"margin-top: ".concat(c,"px;"):"","\n    ").concat(i?"margin-bottom: ".concat(i,"px;"):"","\n    ").concat(a?"\n        margin-vertical: ".concat(a,"px;\n        margin-horizontal: ").concat(a,"px;\n    "):"","\n")})),v={statusBarHeight:u.StatusBar.currentHeight,emptyComponent:function(){return null},emptyFn:function(){}};function y(){var e=function(e,t){t||(t=e.slice(0));return Object.freeze(Object.defineProperties(e,{raw:{value:Object.freeze(t)}}))}(["\n    margin-top: ","px;\n"]);return y=function(){return e},e}var O=o.a.View(y(),v.statusBarHeight),m=function(e){var t=e.children;return a.a.createElement(u.KeyboardAvoidingView,{behavior:"padding",style:{flex:1}},t)},h=o.a.View((function(e){return"\n    flex-direction: row;\n    justify-content: space-between;\n    align-items: center;\n"}));function j(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function w(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function x(){var e=function(e,t){t||(t=e.slice(0));return Object.freeze(Object.defineProperties(e,{raw:{value:Object.freeze(t)}}))}([""]);return x=function(){return e},e}var P=o()(c).attrs((function(e){return function(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?j(Object(n),!0).forEach((function(t){w(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):j(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}({horizontal:20,vertical:15},e)}))(x())}]);