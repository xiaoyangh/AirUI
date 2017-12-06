/*!
 * Air UI v0.0.1 (https://github.com/ccqiuqiu/air-ui)
 * (c) 2017 ccqiuqiu 
 * Released under the MIT License.
 */
!function(e,t){"object"==typeof exports&&"object"==typeof module?module.exports=t():"function"==typeof define&&define.amd?define([],t):"object"==typeof exports?exports.AirUI=t():e.AirUI=t()}("undefined"!=typeof self?self:this,function(){return function(e){function t(o){if(n[o])return n[o].exports;var r=n[o]={i:o,l:!1,exports:{}};return e[o].call(r.exports,r,r.exports,t),r.l=!0,r.exports}var n={};return t.m=e,t.c=n,t.d=function(e,n,o){t.o(e,n)||Object.defineProperty(e,n,{configurable:!1,enumerable:!0,get:o})},t.n=function(e){var n=e&&e.__esModule?function(){return e.default}:function(){return e};return t.d(n,"a",n),n},t.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},t.p="/",t(t.s=0)}([function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0});var o=n(1),r=[o.a],i=function e(t){e.installed||r.map(function(e){return t.component(e.name,e)})};"undefined"!=typeof window&&window.Vue&&i(window.Vue),t.default={install:i,WButton:o.a}},function(e,t,n){"use strict";var o=n(2);o.a.install=function(e){e.component(o.a.name,o.a)},t.a=o.a},function(e,t,n){"use strict";var o=n(4),r=n(5),i=n(3),s=i(o.a,r.a,!1,null,null,null);s.options.__file="packages/button/src/button.vue",s.esModule&&Object.keys(s.esModule).some(function(e){return"default"!==e&&"__"!==e.substr(0,2)})&&console.error("named exports are not supported in *.vue files."),t.a=s.exports},function(e,t){e.exports=function(e,t,n,o,r,i){var s,u=e=e||{},a=typeof e.default;"object"!==a&&"function"!==a||(s=e,u=e.default);var c="function"==typeof u?u.options:u;t&&(c.render=t.render,c.staticRenderFns=t.staticRenderFns,c._compiled=!0),n&&(c.functional=!0),r&&(c._scopeId=r);var d;if(i?(d=function(e){e=e||this.$vnode&&this.$vnode.ssrContext||this.parent&&this.parent.$vnode&&this.parent.$vnode.ssrContext,e||"undefined"==typeof __VUE_SSR_CONTEXT__||(e=__VUE_SSR_CONTEXT__),o&&o.call(this,e),e&&e._registeredComponents&&e._registeredComponents.add(i)},c._ssrRegister=d):o&&(d=o),d){var l=c.functional,f=l?c.render:c.beforeCreate;l?(c._injectStyles=d,c.render=function(e,t){return d.call(t),f(e,t)}):c.beforeCreate=f?[].concat(f,d):[d]}return{esModule:s,exports:u,options:c}}},function(e,t,n){"use strict";t.a={name:"AirButton",props:{type:{type:String,default:"default"},size:{type:String,default:"default"},icon:{type:String,default:""},plain:Boolean,disabled:Boolean,round:Boolean},data:function(){return{msg:"button"}}}},function(e,t,n){"use strict";var o=function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("button",{staticClass:"w__button",class:["w__button--"+e.type,{"is-plain":e.plain,"is-disabled":e.disabled,"is-round":e.round},"w__button--size-"+e.size],attrs:{disabled:e.disabled},on:{click:function(t){e.$emit("click")}}},[""!==e.icon?n("i",{class:e.icon}):e._e(),e._v(" "),e._t("default")],2)},r=[];o._withStripped=!0;var i={render:o,staticRenderFns:r};t.a=i}])});