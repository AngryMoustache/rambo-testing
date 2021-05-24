/******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = {};
/******/
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/
/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId]) {
/******/ 			return installedModules[moduleId].exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			i: moduleId,
/******/ 			l: false,
/******/ 			exports: {}
/******/ 		};
/******/
/******/ 		// Execute the module function
/******/ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/
/******/ 		// Flag the module as loaded
/******/ 		module.l = true;
/******/
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/
/******/
/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;
/******/
/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;
/******/
/******/ 	// define getter function for harmony exports
/******/ 	__webpack_require__.d = function(exports, name, getter) {
/******/ 		if(!__webpack_require__.o(exports, name)) {
/******/ 			Object.defineProperty(exports, name, { enumerable: true, get: getter });
/******/ 		}
/******/ 	};
/******/
/******/ 	// define __esModule on exports
/******/ 	__webpack_require__.r = function(exports) {
/******/ 		if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 			Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 		}
/******/ 		Object.defineProperty(exports, '__esModule', { value: true });
/******/ 	};
/******/
/******/ 	// create a fake namespace object
/******/ 	// mode & 1: value is a module id, require it
/******/ 	// mode & 2: merge all properties of value into the ns
/******/ 	// mode & 4: return value when already ns object
/******/ 	// mode & 8|1: behave like require
/******/ 	__webpack_require__.t = function(value, mode) {
/******/ 		if(mode & 1) value = __webpack_require__(value);
/******/ 		if(mode & 8) return value;
/******/ 		if((mode & 4) && typeof value === 'object' && value && value.__esModule) return value;
/******/ 		var ns = Object.create(null);
/******/ 		__webpack_require__.r(ns);
/******/ 		Object.defineProperty(ns, 'default', { enumerable: true, value: value });
/******/ 		if(mode & 2 && typeof value != 'string') for(var key in value) __webpack_require__.d(ns, key, function(key) { return value[key]; }.bind(null, key));
/******/ 		return ns;
/******/ 	};
/******/
/******/ 	// getDefaultExport function for compatibility with non-harmony modules
/******/ 	__webpack_require__.n = function(module) {
/******/ 		var getter = module && module.__esModule ?
/******/ 			function getDefault() { return module['default']; } :
/******/ 			function getModuleExports() { return module; };
/******/ 		__webpack_require__.d(getter, 'a', getter);
/******/ 		return getter;
/******/ 	};
/******/
/******/ 	// Object.prototype.hasOwnProperty.call
/******/ 	__webpack_require__.o = function(object, property) { return Object.prototype.hasOwnProperty.call(object, property); };
/******/
/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "/";
/******/
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = 0);
/******/ })
/************************************************************************/
/******/ ({

/***/ "./node_modules/alpine-editor/dist/alpine-editor.js":
/*!**********************************************************!*\
  !*** ./node_modules/alpine-editor/dist/alpine-editor.js ***!
  \**********************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

/* WEBPACK VAR INJECTION */(function(global) {var __WEBPACK_AMD_DEFINE_FACTORY__, __WEBPACK_AMD_DEFINE_RESULT__;!function(t){ true?!(__WEBPACK_AMD_DEFINE_FACTORY__ = (t),
				__WEBPACK_AMD_DEFINE_RESULT__ = (typeof __WEBPACK_AMD_DEFINE_FACTORY__ === 'function' ?
				(__WEBPACK_AMD_DEFINE_FACTORY__.call(exports, __webpack_require__, exports, module)) :
				__WEBPACK_AMD_DEFINE_FACTORY__),
				__WEBPACK_AMD_DEFINE_RESULT__ !== undefined && (module.exports = __WEBPACK_AMD_DEFINE_RESULT__)):undefined}((function(){"use strict";function t(t,e){if(!(t instanceof e))throw new TypeError("Cannot call a class as a function")}function e(t,e){for(var n=0;n<e.length;n++){var r=e[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(t,r.key,r)}}function n(t,n,r){return n&&e(t.prototype,n),r&&e(t,r),t}function r(t,e){if("function"!=typeof e&&null!==e)throw new TypeError("Super expression must either be null or a function");t.prototype=Object.create(e&&e.prototype,{constructor:{value:t,writable:!0,configurable:!0}}),e&&i(t,e)}function o(t){return(o=Object.setPrototypeOf?Object.getPrototypeOf:function(t){return t.__proto__||Object.getPrototypeOf(t)})(t)}function i(t,e){return(i=Object.setPrototypeOf||function(t,e){return t.__proto__=e,t})(t,e)}function s(){if("undefined"==typeof Reflect||!Reflect.construct)return!1;if(Reflect.construct.sham)return!1;if("function"==typeof Proxy)return!0;try{return Date.prototype.toString.call(Reflect.construct(Date,[],(function(){}))),!0}catch(t){return!1}}function a(t,e,n){return(a=s()?Reflect.construct:function(t,e,n){var r=[null];r.push.apply(r,e);var o=new(Function.bind.apply(t,r));return n&&i(o,n.prototype),o}).apply(null,arguments)}function c(t){var e="function"==typeof Map?new Map:void 0;return(c=function(t){if(null===t||(n=t,-1===Function.toString.call(n).indexOf("[native code]")))return t;var n;if("function"!=typeof t)throw new TypeError("Super expression must either be null or a function");if(void 0!==e){if(e.has(t))return e.get(t);e.set(t,r)}function r(){return a(t,arguments,o(this).constructor)}return r.prototype=Object.create(t.prototype,{constructor:{value:r,enumerable:!1,writable:!0,configurable:!0}}),i(r,t)})(t)}function h(t){if(void 0===t)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return t}function p(t,e){return!e||"object"!=typeof e&&"function"!=typeof e?h(t):e}function l(t){var e=s();return function(){var n,r=o(t);if(e){var i=o(this).constructor;n=Reflect.construct(r,arguments,i)}else n=r.apply(this,arguments);return p(this,n)}}function f(t){this.content=t}f.prototype={constructor:f,find:function(t){for(var e=0;e<this.content.length;e+=2)if(this.content[e]===t)return e;return-1},get:function(t){var e=this.find(t);return-1==e?void 0:this.content[e+1]},update:function(t,e,n){var r=n&&n!=t?this.remove(n):this,o=r.find(t),i=r.content.slice();return-1==o?i.push(n||t,e):(i[o+1]=e,n&&(i[o]=n)),new f(i)},remove:function(t){var e=this.find(t);if(-1==e)return this;var n=this.content.slice();return n.splice(e,2),new f(n)},addToStart:function(t,e){return new f([t,e].concat(this.remove(t).content))},addToEnd:function(t,e){var n=this.remove(t).content.slice();return n.push(t,e),new f(n)},addBefore:function(t,e,n){var r=this.remove(e),o=r.content.slice(),i=r.find(t);return o.splice(-1==i?o.length:i,0,e,n),new f(o)},forEach:function(t){for(var e=0;e<this.content.length;e+=2)t(this.content[e],this.content[e+1])},prepend:function(t){return(t=f.from(t)).size?new f(t.content.concat(this.subtract(t).content)):this},append:function(t){return(t=f.from(t)).size?new f(this.subtract(t).content.concat(t.content)):this},subtract:function(t){var e=this;t=f.from(t);for(var n=0;n<t.content.length;n+=2)e=e.remove(t.content[n]);return e},get size(){return this.content.length>>1}},f.from=function(t){if(t instanceof f)return t;var e=[];if(t)for(var n in t)e.push(n,t[n]);return new f(e)};var u=f;function d(t,e,n){for(var r=0;;r++){if(r==t.childCount||r==e.childCount)return t.childCount==e.childCount?null:n;var o=t.child(r),i=e.child(r);if(o!=i){if(!o.sameMarkup(i))return n;if(o.isText&&o.text!=i.text){for(var s=0;o.text[s]==i.text[s];s++)n++;return n}if(o.content.size||i.content.size){var a=d(o.content,i.content,n+1);if(null!=a)return a}n+=o.nodeSize}else n+=o.nodeSize}}function m(t,e,n,r){for(var o=t.childCount,i=e.childCount;;){if(0==o||0==i)return o==i?null:{a:n,b:r};var s=t.child(--o),a=e.child(--i),c=s.nodeSize;if(s!=a){if(!s.sameMarkup(a))return{a:n,b:r};if(s.isText&&s.text!=a.text){for(var h=0,p=Math.min(s.text.length,a.text.length);h<p&&s.text[s.text.length-h-1]==a.text[a.text.length-h-1];)h++,n--,r--;return{a:n,b:r}}if(s.content.size||a.content.size){var l=m(s.content,a.content,n-1,r-1);if(l)return l}n-=c,r-=c}else n-=c,r-=c}}var v=function(t,e){if(this.content=t,this.size=e||0,null==e)for(var n=0;n<t.length;n++)this.size+=t[n].nodeSize},y={firstChild:{configurable:!0},lastChild:{configurable:!0},childCount:{configurable:!0}};v.prototype.nodesBetween=function(t,e,n,r,o){void 0===r&&(r=0);for(var i=0,s=0;s<e;i++){var a=this.content[i],c=s+a.nodeSize;if(c>t&&!1!==n(a,r+s,o,i)&&a.content.size){var h=s+1;a.nodesBetween(Math.max(0,t-h),Math.min(a.content.size,e-h),n,r+h)}s=c}},v.prototype.descendants=function(t){this.nodesBetween(0,this.size,t)},v.prototype.textBetween=function(t,e,n,r){var o="",i=!0;return this.nodesBetween(t,e,(function(s,a){s.isText?(o+=s.text.slice(Math.max(t,a)-a,e-a),i=!n):s.isLeaf&&r?(o+=r,i=!n):!i&&s.isBlock&&(o+=n,i=!0)}),0),o},v.prototype.append=function(t){if(!t.size)return this;if(!this.size)return t;var e=this.lastChild,n=t.firstChild,r=this.content.slice(),o=0;for(e.isText&&e.sameMarkup(n)&&(r[r.length-1]=e.withText(e.text+n.text),o=1);o<t.content.length;o++)r.push(t.content[o]);return new v(r,this.size+t.size)},v.prototype.cut=function(t,e){if(null==e&&(e=this.size),0==t&&e==this.size)return this;var n=[],r=0;if(e>t)for(var o=0,i=0;i<e;o++){var s=this.content[o],a=i+s.nodeSize;a>t&&((i<t||a>e)&&(s=s.isText?s.cut(Math.max(0,t-i),Math.min(s.text.length,e-i)):s.cut(Math.max(0,t-i-1),Math.min(s.content.size,e-i-1))),n.push(s),r+=s.nodeSize),i=a}return new v(n,r)},v.prototype.cutByIndex=function(t,e){return t==e?v.empty:0==t&&e==this.content.length?this:new v(this.content.slice(t,e))},v.prototype.replaceChild=function(t,e){var n=this.content[t];if(n==e)return this;var r=this.content.slice(),o=this.size+e.nodeSize-n.nodeSize;return r[t]=e,new v(r,o)},v.prototype.addToStart=function(t){return new v([t].concat(this.content),this.size+t.nodeSize)},v.prototype.addToEnd=function(t){return new v(this.content.concat(t),this.size+t.nodeSize)},v.prototype.eq=function(t){if(this.content.length!=t.content.length)return!1;for(var e=0;e<this.content.length;e++)if(!this.content[e].eq(t.content[e]))return!1;return!0},y.firstChild.get=function(){return this.content.length?this.content[0]:null},y.lastChild.get=function(){return this.content.length?this.content[this.content.length-1]:null},y.childCount.get=function(){return this.content.length},v.prototype.child=function(t){var e=this.content[t];if(!e)throw new RangeError("Index "+t+" out of range for "+this);return e},v.prototype.maybeChild=function(t){return this.content[t]},v.prototype.forEach=function(t){for(var e=0,n=0;e<this.content.length;e++){var r=this.content[e];t(r,n,e),n+=r.nodeSize}},v.prototype.findDiffStart=function(t,e){return void 0===e&&(e=0),d(this,t,e)},v.prototype.findDiffEnd=function(t,e,n){return void 0===e&&(e=this.size),void 0===n&&(n=t.size),m(this,t,e,n)},v.prototype.findIndex=function(t,e){if(void 0===e&&(e=-1),0==t)return w(0,t);if(t==this.size)return w(this.content.length,t);if(t>this.size||t<0)throw new RangeError("Position "+t+" outside of fragment ("+this+")");for(var n=0,r=0;;n++){var o=r+this.child(n).nodeSize;if(o>=t)return o==t||e>0?w(n+1,o):w(n,r);r=o}},v.prototype.toString=function(){return"<"+this.toStringInner()+">"},v.prototype.toStringInner=function(){return this.content.join(", ")},v.prototype.toJSON=function(){return this.content.length?this.content.map((function(t){return t.toJSON()})):null},v.fromJSON=function(t,e){if(!e)return v.empty;if(!Array.isArray(e))throw new RangeError("Invalid input for Fragment.fromJSON");return new v(e.map(t.nodeFromJSON))},v.fromArray=function(t){if(!t.length)return v.empty;for(var e,n=0,r=0;r<t.length;r++){var o=t[r];n+=o.nodeSize,r&&o.isText&&t[r-1].sameMarkup(o)?(e||(e=t.slice(0,r)),e[e.length-1]=o.withText(e[e.length-1].text+o.text)):e&&e.push(o)}return new v(e||t,n)},v.from=function(t){if(!t)return v.empty;if(t instanceof v)return t;if(Array.isArray(t))return this.fromArray(t);if(t.attrs)return new v([t],t.nodeSize);throw new RangeError("Can not convert "+t+" to a Fragment"+(t.nodesBetween?" (looks like multiple versions of prosemirror-model were loaded)":""))},Object.defineProperties(v.prototype,y);var g={index:0,offset:0};function w(t,e){return g.index=t,g.offset=e,g}function b(t,e){if(t===e)return!0;if(!t||"object"!=typeof t||!e||"object"!=typeof e)return!1;var n=Array.isArray(t);if(Array.isArray(e)!=n)return!1;if(n){if(t.length!=e.length)return!1;for(var r=0;r<t.length;r++)if(!b(t[r],e[r]))return!1}else{for(var o in t)if(!(o in e)||!b(t[o],e[o]))return!1;for(var i in e)if(!(i in t))return!1}return!0}v.empty=new v([],0);var k=function(t,e){this.type=t,this.attrs=e};function x(t){var e=Error.call(this,t);return e.__proto__=x.prototype,e}k.prototype.addToSet=function(t){for(var e,n=!1,r=0;r<t.length;r++){var o=t[r];if(this.eq(o))return t;if(this.type.excludes(o.type))e||(e=t.slice(0,r));else{if(o.type.excludes(this.type))return t;!n&&o.type.rank>this.type.rank&&(e||(e=t.slice(0,r)),e.push(this),n=!0),e&&e.push(o)}}return e||(e=t.slice()),n||e.push(this),e},k.prototype.removeFromSet=function(t){for(var e=0;e<t.length;e++)if(this.eq(t[e]))return t.slice(0,e).concat(t.slice(e+1));return t},k.prototype.isInSet=function(t){for(var e=0;e<t.length;e++)if(this.eq(t[e]))return!0;return!1},k.prototype.eq=function(t){return this==t||this.type==t.type&&b(this.attrs,t.attrs)},k.prototype.toJSON=function(){var t={type:this.type.name};for(var e in this.attrs){t.attrs=this.attrs;break}return t},k.fromJSON=function(t,e){if(!e)throw new RangeError("Invalid input for Mark.fromJSON");var n=t.marks[e.type];if(!n)throw new RangeError("There is no mark type "+e.type+" in this schema");return n.create(e.attrs)},k.sameSet=function(t,e){if(t==e)return!0;if(t.length!=e.length)return!1;for(var n=0;n<t.length;n++)if(!t[n].eq(e[n]))return!1;return!0},k.setFrom=function(t){if(!t||0==t.length)return k.none;if(t instanceof k)return[t];var e=t.slice();return e.sort((function(t,e){return t.type.rank-e.type.rank})),e},k.none=[],x.prototype=Object.create(Error.prototype),x.prototype.constructor=x,x.prototype.name="ReplaceError";var S=function(t,e,n){this.content=t,this.openStart=e,this.openEnd=n},O={size:{configurable:!0}};function M(t,e,n){var r=t.findIndex(e),o=r.index,i=r.offset,s=t.maybeChild(o),a=t.findIndex(n),c=a.index,h=a.offset;if(i==e||s.isText){if(h!=n&&!t.child(c).isText)throw new RangeError("Removing non-flat range");return t.cut(0,e).append(t.cut(n))}if(o!=c)throw new RangeError("Removing non-flat range");return t.replaceChild(o,s.copy(M(s.content,e-i-1,n-i-1)))}function C(t,e,n,r){var o=t.findIndex(e),i=o.index,s=o.offset,a=t.maybeChild(i);if(s==e||a.isText)return r&&!r.canReplace(i,i,n)?null:t.cut(0,e).append(n).append(t.cut(e));var c=C(a.content,e-s-1,n);return c&&t.replaceChild(i,a.copy(c))}function N(t,e,n){if(n.openStart>t.depth)throw new x("Inserted content deeper than insertion position");if(t.depth-n.openStart!=e.depth-n.openEnd)throw new x("Inconsistent open depths");return T(t,e,n,0)}function T(t,e,n,r){var o=t.index(r),i=t.node(r);if(o==e.index(r)&&r<t.depth-n.openStart){var s=T(t,e,n,r+1);return i.copy(i.content.replaceChild(o,s))}if(n.content.size){if(n.openStart||n.openEnd||t.depth!=r||e.depth!=r){var a=function(t,e){for(var n=e.depth-t.openStart,r=e.node(n).copy(t.content),o=n-1;o>=0;o--)r=e.node(o).copy(v.from(r));return{start:r.resolveNoCache(t.openStart+n),end:r.resolveNoCache(r.content.size-t.openEnd-n)}}(n,t);return I(i,z(t,a.start,a.end,e,r))}var c=t.parent,h=c.content;return I(c,h.cut(0,t.parentOffset).append(n.content).append(h.cut(e.parentOffset)))}return I(i,P(t,e,r))}function D(t,e){if(!e.type.compatibleContent(t.type))throw new x("Cannot join "+e.type.name+" onto "+t.type.name)}function E(t,e,n){var r=t.node(n);return D(r,e.node(n)),r}function A(t,e){var n=e.length-1;n>=0&&t.isText&&t.sameMarkup(e[n])?e[n]=t.withText(e[n].text+t.text):e.push(t)}function R(t,e,n,r){var o=(e||t).node(n),i=0,s=e?e.index(n):o.childCount;t&&(i=t.index(n),t.depth>n?i++:t.textOffset&&(A(t.nodeAfter,r),i++));for(var a=i;a<s;a++)A(o.child(a),r);e&&e.depth==n&&e.textOffset&&A(e.nodeBefore,r)}function I(t,e){if(!t.type.validContent(e))throw new x("Invalid content for node "+t.type.name);return t.copy(e)}function z(t,e,n,r,o){var i=t.depth>o&&E(t,e,o+1),s=r.depth>o&&E(n,r,o+1),a=[];return R(null,t,o,a),i&&s&&e.index(o)==n.index(o)?(D(i,s),A(I(i,z(t,e,n,r,o+1)),a)):(i&&A(I(i,P(t,e,o+1)),a),R(e,n,o,a),s&&A(I(s,P(n,r,o+1)),a)),R(r,null,o,a),new v(a)}function P(t,e,n){var r=[];(R(null,t,n,r),t.depth>n)&&A(I(E(t,e,n+1),P(t,e,n+1)),r);return R(e,null,n,r),new v(r)}O.size.get=function(){return this.content.size-this.openStart-this.openEnd},S.prototype.insertAt=function(t,e){var n=C(this.content,t+this.openStart,e,null);return n&&new S(n,this.openStart,this.openEnd)},S.prototype.removeBetween=function(t,e){return new S(M(this.content,t+this.openStart,e+this.openStart),this.openStart,this.openEnd)},S.prototype.eq=function(t){return this.content.eq(t.content)&&this.openStart==t.openStart&&this.openEnd==t.openEnd},S.prototype.toString=function(){return this.content+"("+this.openStart+","+this.openEnd+")"},S.prototype.toJSON=function(){if(!this.content.size)return null;var t={content:this.content.toJSON()};return this.openStart>0&&(t.openStart=this.openStart),this.openEnd>0&&(t.openEnd=this.openEnd),t},S.fromJSON=function(t,e){if(!e)return S.empty;var n=e.openStart||0,r=e.openEnd||0;if("number"!=typeof n||"number"!=typeof r)throw new RangeError("Invalid input for Slice.fromJSON");return new S(v.fromJSON(t,e.content),n,r)},S.maxOpen=function(t,e){void 0===e&&(e=!0);for(var n=0,r=0,o=t.firstChild;o&&!o.isLeaf&&(e||!o.type.spec.isolating);o=o.firstChild)n++;for(var i=t.lastChild;i&&!i.isLeaf&&(e||!i.type.spec.isolating);i=i.lastChild)r++;return new S(t,n,r)},Object.defineProperties(S.prototype,O),S.empty=new S(v.empty,0,0);var V=function(t,e,n){this.pos=t,this.path=e,this.depth=e.length/3-1,this.parentOffset=n},B={parent:{configurable:!0},doc:{configurable:!0},textOffset:{configurable:!0},nodeAfter:{configurable:!0},nodeBefore:{configurable:!0}};V.prototype.resolveDepth=function(t){return null==t?this.depth:t<0?this.depth+t:t},B.parent.get=function(){return this.node(this.depth)},B.doc.get=function(){return this.node(0)},V.prototype.node=function(t){return this.path[3*this.resolveDepth(t)]},V.prototype.index=function(t){return this.path[3*this.resolveDepth(t)+1]},V.prototype.indexAfter=function(t){return t=this.resolveDepth(t),this.index(t)+(t!=this.depth||this.textOffset?1:0)},V.prototype.start=function(t){return 0==(t=this.resolveDepth(t))?0:this.path[3*t-1]+1},V.prototype.end=function(t){return t=this.resolveDepth(t),this.start(t)+this.node(t).content.size},V.prototype.before=function(t){if(!(t=this.resolveDepth(t)))throw new RangeError("There is no position before the top-level node");return t==this.depth+1?this.pos:this.path[3*t-1]},V.prototype.after=function(t){if(!(t=this.resolveDepth(t)))throw new RangeError("There is no position after the top-level node");return t==this.depth+1?this.pos:this.path[3*t-1]+this.path[3*t].nodeSize},B.textOffset.get=function(){return this.pos-this.path[this.path.length-1]},B.nodeAfter.get=function(){var t=this.parent,e=this.index(this.depth);if(e==t.childCount)return null;var n=this.pos-this.path[this.path.length-1],r=t.child(e);return n?t.child(e).cut(n):r},B.nodeBefore.get=function(){var t=this.index(this.depth),e=this.pos-this.path[this.path.length-1];return e?this.parent.child(t).cut(0,e):0==t?null:this.parent.child(t-1)},V.prototype.posAtIndex=function(t,e){e=this.resolveDepth(e);for(var n=this.path[3*e],r=0==e?0:this.path[3*e-1]+1,o=0;o<t;o++)r+=n.child(o).nodeSize;return r},V.prototype.marks=function(){var t=this.parent,e=this.index();if(0==t.content.size)return k.none;if(this.textOffset)return t.child(e).marks;var n=t.maybeChild(e-1),r=t.maybeChild(e);if(!n){var o=n;n=r,r=o}for(var i=n.marks,s=0;s<i.length;s++)!1!==i[s].type.spec.inclusive||r&&i[s].isInSet(r.marks)||(i=i[s--].removeFromSet(i));return i},V.prototype.marksAcross=function(t){var e=this.parent.maybeChild(this.index());if(!e||!e.isInline)return null;for(var n=e.marks,r=t.parent.maybeChild(t.index()),o=0;o<n.length;o++)!1!==n[o].type.spec.inclusive||r&&n[o].isInSet(r.marks)||(n=n[o--].removeFromSet(n));return n},V.prototype.sharedDepth=function(t){for(var e=this.depth;e>0;e--)if(this.start(e)<=t&&this.end(e)>=t)return e;return 0},V.prototype.blockRange=function(t,e){if(void 0===t&&(t=this),t.pos<this.pos)return t.blockRange(this);for(var n=this.depth-(this.parent.inlineContent||this.pos==t.pos?1:0);n>=0;n--)if(t.pos<=this.end(n)&&(!e||e(this.node(n))))return new j(this,t,n)},V.prototype.sameParent=function(t){return this.pos-this.parentOffset==t.pos-t.parentOffset},V.prototype.max=function(t){return t.pos>this.pos?t:this},V.prototype.min=function(t){return t.pos<this.pos?t:this},V.prototype.toString=function(){for(var t="",e=1;e<=this.depth;e++)t+=(t?"/":"")+this.node(e).type.name+"_"+this.index(e-1);return t+":"+this.parentOffset},V.resolve=function(t,e){if(!(e>=0&&e<=t.content.size))throw new RangeError("Position "+e+" out of range");for(var n=[],r=0,o=e,i=t;;){var s=i.content.findIndex(o),a=s.index,c=s.offset,h=o-c;if(n.push(i,a,r+c),!h)break;if((i=i.child(a)).isText)break;o=h-1,r+=c+1}return new V(e,n,o)},V.resolveCached=function(t,e){for(var n=0;n<$.length;n++){var r=$[n];if(r.pos==e&&r.doc==t)return r}var o=$[F]=V.resolve(t,e);return F=(F+1)%_,o},Object.defineProperties(V.prototype,B);var $=[],F=0,_=12,j=function(t,e,n){this.$from=t,this.$to=e,this.depth=n},L={start:{configurable:!0},end:{configurable:!0},parent:{configurable:!0},startIndex:{configurable:!0},endIndex:{configurable:!0}};L.start.get=function(){return this.$from.before(this.depth+1)},L.end.get=function(){return this.$to.after(this.depth+1)},L.parent.get=function(){return this.$from.node(this.depth)},L.startIndex.get=function(){return this.$from.index(this.depth)},L.endIndex.get=function(){return this.$to.indexAfter(this.depth)},Object.defineProperties(j.prototype,L);var J=Object.create(null),q=function(t,e,n,r){this.type=t,this.attrs=e,this.content=n||v.empty,this.marks=r||k.none},W={nodeSize:{configurable:!0},childCount:{configurable:!0},textContent:{configurable:!0},firstChild:{configurable:!0},lastChild:{configurable:!0},isBlock:{configurable:!0},isTextblock:{configurable:!0},inlineContent:{configurable:!0},isInline:{configurable:!0},isText:{configurable:!0},isLeaf:{configurable:!0},isAtom:{configurable:!0}};W.nodeSize.get=function(){return this.isLeaf?1:2+this.content.size},W.childCount.get=function(){return this.content.childCount},q.prototype.child=function(t){return this.content.child(t)},q.prototype.maybeChild=function(t){return this.content.maybeChild(t)},q.prototype.forEach=function(t){this.content.forEach(t)},q.prototype.nodesBetween=function(t,e,n,r){void 0===r&&(r=0),this.content.nodesBetween(t,e,n,r,this)},q.prototype.descendants=function(t){this.nodesBetween(0,this.content.size,t)},W.textContent.get=function(){return this.textBetween(0,this.content.size,"")},q.prototype.textBetween=function(t,e,n,r){return this.content.textBetween(t,e,n,r)},W.firstChild.get=function(){return this.content.firstChild},W.lastChild.get=function(){return this.content.lastChild},q.prototype.eq=function(t){return this==t||this.sameMarkup(t)&&this.content.eq(t.content)},q.prototype.sameMarkup=function(t){return this.hasMarkup(t.type,t.attrs,t.marks)},q.prototype.hasMarkup=function(t,e,n){return this.type==t&&b(this.attrs,e||t.defaultAttrs||J)&&k.sameSet(this.marks,n||k.none)},q.prototype.copy=function(t){return void 0===t&&(t=null),t==this.content?this:new this.constructor(this.type,this.attrs,t,this.marks)},q.prototype.mark=function(t){return t==this.marks?this:new this.constructor(this.type,this.attrs,this.content,t)},q.prototype.cut=function(t,e){return 0==t&&e==this.content.size?this:this.copy(this.content.cut(t,e))},q.prototype.slice=function(t,e,n){if(void 0===e&&(e=this.content.size),void 0===n&&(n=!1),t==e)return S.empty;var r=this.resolve(t),o=this.resolve(e),i=n?0:r.sharedDepth(e),s=r.start(i),a=r.node(i).content.cut(r.pos-s,o.pos-s);return new S(a,r.depth-i,o.depth-i)},q.prototype.replace=function(t,e,n){return N(this.resolve(t),this.resolve(e),n)},q.prototype.nodeAt=function(t){for(var e=this;;){var n=e.content.findIndex(t),r=n.index,o=n.offset;if(!(e=e.maybeChild(r)))return null;if(o==t||e.isText)return e;t-=o+1}},q.prototype.childAfter=function(t){var e=this.content.findIndex(t),n=e.index,r=e.offset;return{node:this.content.maybeChild(n),index:n,offset:r}},q.prototype.childBefore=function(t){if(0==t)return{node:null,index:0,offset:0};var e=this.content.findIndex(t),n=e.index,r=e.offset;if(r<t)return{node:this.content.child(n),index:n,offset:r};var o=this.content.child(n-1);return{node:o,index:n-1,offset:r-o.nodeSize}},q.prototype.resolve=function(t){return V.resolveCached(this,t)},q.prototype.resolveNoCache=function(t){return V.resolve(this,t)},q.prototype.rangeHasMark=function(t,e,n){var r=!1;return e>t&&this.nodesBetween(t,e,(function(t){return n.isInSet(t.marks)&&(r=!0),!r})),r},W.isBlock.get=function(){return this.type.isBlock},W.isTextblock.get=function(){return this.type.isTextblock},W.inlineContent.get=function(){return this.type.inlineContent},W.isInline.get=function(){return this.type.isInline},W.isText.get=function(){return this.type.isText},W.isLeaf.get=function(){return this.type.isLeaf},W.isAtom.get=function(){return this.type.isAtom},q.prototype.toString=function(){if(this.type.spec.toDebugString)return this.type.spec.toDebugString(this);var t=this.type.name;return this.content.size&&(t+="("+this.content.toStringInner()+")"),H(this.marks,t)},q.prototype.contentMatchAt=function(t){var e=this.type.contentMatch.matchFragment(this.content,0,t);if(!e)throw new Error("Called contentMatchAt on a node with invalid content");return e},q.prototype.canReplace=function(t,e,n,r,o){void 0===n&&(n=v.empty),void 0===r&&(r=0),void 0===o&&(o=n.childCount);var i=this.contentMatchAt(t).matchFragment(n,r,o),s=i&&i.matchFragment(this.content,e);if(!s||!s.validEnd)return!1;for(var a=r;a<o;a++)if(!this.type.allowsMarks(n.child(a).marks))return!1;return!0},q.prototype.canReplaceWith=function(t,e,n,r){if(r&&!this.type.allowsMarks(r))return!1;var o=this.contentMatchAt(t).matchType(n),i=o&&o.matchFragment(this.content,e);return!!i&&i.validEnd},q.prototype.canAppend=function(t){return t.content.size?this.canReplace(this.childCount,this.childCount,t.content):this.type.compatibleContent(t.type)},q.prototype.check=function(){if(!this.type.validContent(this.content))throw new RangeError("Invalid content for node "+this.type.name+": "+this.content.toString().slice(0,50));this.content.forEach((function(t){return t.check()}))},q.prototype.toJSON=function(){var t={type:this.type.name};for(var e in this.attrs){t.attrs=this.attrs;break}return this.content.size&&(t.content=this.content.toJSON()),this.marks.length&&(t.marks=this.marks.map((function(t){return t.toJSON()}))),t},q.fromJSON=function(t,e){if(!e)throw new RangeError("Invalid input for Node.fromJSON");var n=null;if(e.marks){if(!Array.isArray(e.marks))throw new RangeError("Invalid mark data for Node.fromJSON");n=e.marks.map(t.markFromJSON)}if("text"==e.type){if("string"!=typeof e.text)throw new RangeError("Invalid text node in JSON");return t.text(e.text,n)}var r=v.fromJSON(t,e.content);return t.nodeType(e.type).create(e.attrs,r,n)},Object.defineProperties(q.prototype,W);var K=function(t){function e(e,n,r,o){if(t.call(this,e,n,null,o),!r)throw new RangeError("Empty text nodes are not allowed");this.text=r}t&&(e.__proto__=t),e.prototype=Object.create(t&&t.prototype),e.prototype.constructor=e;var n={textContent:{configurable:!0},nodeSize:{configurable:!0}};return e.prototype.toString=function(){return this.type.spec.toDebugString?this.type.spec.toDebugString(this):H(this.marks,JSON.stringify(this.text))},n.textContent.get=function(){return this.text},e.prototype.textBetween=function(t,e){return this.text.slice(t,e)},n.nodeSize.get=function(){return this.text.length},e.prototype.mark=function(t){return t==this.marks?this:new e(this.type,this.attrs,this.text,t)},e.prototype.withText=function(t){return t==this.text?this:new e(this.type,this.attrs,t,this.marks)},e.prototype.cut=function(t,e){return void 0===t&&(t=0),void 0===e&&(e=this.text.length),0==t&&e==this.text.length?this:this.withText(this.text.slice(t,e))},e.prototype.eq=function(t){return this.sameMarkup(t)&&this.text==t.text},e.prototype.toJSON=function(){var e=t.prototype.toJSON.call(this);return e.text=this.text,e},Object.defineProperties(e.prototype,n),e}(q);function H(t,e){for(var n=t.length-1;n>=0;n--)e=t[n].type.name+"("+e+")";return e}var U=function(t){this.validEnd=t,this.next=[],this.wrapCache=[]},G={inlineContent:{configurable:!0},defaultType:{configurable:!0},edgeCount:{configurable:!0}};U.parse=function(t,e){var n=new X(t,e);if(null==n.next)return U.empty;var r=Q(n);n.next&&n.err("Unexpected trailing text");var o=function(t){var e=Object.create(null);return n(ot(t,0));function n(r){var o=[];r.forEach((function(e){t[e].forEach((function(e){var n=e.term,r=e.to;if(n){var i=o.indexOf(n),s=i>-1&&o[i+1];ot(t,r).forEach((function(t){s||o.push(n,s=[]),-1==s.indexOf(t)&&s.push(t)}))}}))}));for(var i=e[r.join(",")]=new U(r.indexOf(t.length-1)>-1),s=0;s<o.length;s+=2){var a=o[s+1].sort(rt);i.next.push(o[s],e[a.join(",")]||n(a))}return i}}(function(t){var e=[[]];return o(i(t,0),n()),e;function n(){return e.push([])-1}function r(t,n,r){var o={term:r,to:n};return e[t].push(o),o}function o(t,e){t.forEach((function(t){return t.to=e}))}function i(t,e){if("choice"==t.type)return t.exprs.reduce((function(t,n){return t.concat(i(n,e))}),[]);if("seq"==t.type)for(var s=0;;s++){var a=i(t.exprs[s],e);if(s==t.exprs.length-1)return a;o(a,e=n())}else{if("star"==t.type){var c=n();return r(e,c),o(i(t.expr,c),c),[r(c)]}if("plus"==t.type){var h=n();return o(i(t.expr,e),h),o(i(t.expr,h),h),[r(h)]}if("opt"==t.type)return[r(e)].concat(i(t.expr,e));if("range"==t.type){for(var p=e,l=0;l<t.min;l++){var f=n();o(i(t.expr,p),f),p=f}if(-1==t.max)o(i(t.expr,p),p);else for(var u=t.min;u<t.max;u++){var d=n();r(p,d),o(i(t.expr,p),d),p=d}return[r(p)]}if("name"==t.type)return[r(e,null,t.value)]}}}(r));return function(t,e){for(var n=0,r=[t];n<r.length;n++){for(var o=r[n],i=!o.validEnd,s=[],a=0;a<o.next.length;a+=2){var c=o.next[a],h=o.next[a+1];s.push(c.name),!i||c.isText||c.hasRequiredAttrs()||(i=!1),-1==r.indexOf(h)&&r.push(h)}i&&e.err("Only non-generatable nodes ("+s.join(", ")+") in a required position (see https://prosemirror.net/docs/guide/#generatable)")}}(o,n),o},U.prototype.matchType=function(t){for(var e=0;e<this.next.length;e+=2)if(this.next[e]==t)return this.next[e+1];return null},U.prototype.matchFragment=function(t,e,n){void 0===e&&(e=0),void 0===n&&(n=t.childCount);for(var r=this,o=e;r&&o<n;o++)r=r.matchType(t.child(o).type);return r},G.inlineContent.get=function(){var t=this.next[0];return!!t&&t.isInline},G.defaultType.get=function(){for(var t=0;t<this.next.length;t+=2){var e=this.next[t];if(!e.isText&&!e.hasRequiredAttrs())return e}},U.prototype.compatible=function(t){for(var e=0;e<this.next.length;e+=2)for(var n=0;n<t.next.length;n+=2)if(this.next[e]==t.next[n])return!0;return!1},U.prototype.fillBefore=function(t,e,n){void 0===e&&(e=!1),void 0===n&&(n=0);var r=[this];return function o(i,s){var a=i.matchFragment(t,n);if(a&&(!e||a.validEnd))return v.from(s.map((function(t){return t.createAndFill()})));for(var c=0;c<i.next.length;c+=2){var h=i.next[c],p=i.next[c+1];if(!h.isText&&!h.hasRequiredAttrs()&&-1==r.indexOf(p)){r.push(p);var l=o(p,s.concat(h));if(l)return l}}}(this,[])},U.prototype.findWrapping=function(t){for(var e=0;e<this.wrapCache.length;e+=2)if(this.wrapCache[e]==t)return this.wrapCache[e+1];var n=this.computeWrapping(t);return this.wrapCache.push(t,n),n},U.prototype.computeWrapping=function(t){for(var e=Object.create(null),n=[{match:this,type:null,via:null}];n.length;){var r=n.shift(),o=r.match;if(o.matchType(t)){for(var i=[],s=r;s.type;s=s.via)i.push(s.type);return i.reverse()}for(var a=0;a<o.next.length;a+=2){var c=o.next[a];c.isLeaf||c.hasRequiredAttrs()||c.name in e||r.type&&!o.next[a+1].validEnd||(n.push({match:c.contentMatch,type:c,via:r}),e[c.name]=!0)}}},G.edgeCount.get=function(){return this.next.length>>1},U.prototype.edge=function(t){var e=t<<1;if(e>=this.next.length)throw new RangeError("There's no "+t+"th edge in this content match");return{type:this.next[e],next:this.next[e+1]}},U.prototype.toString=function(){var t=[];return function e(n){t.push(n);for(var r=1;r<n.next.length;r+=2)-1==t.indexOf(n.next[r])&&e(n.next[r])}(this),t.map((function(e,n){for(var r=n+(e.validEnd?"*":" ")+" ",o=0;o<e.next.length;o+=2)r+=(o?", ":"")+e.next[o].name+"->"+t.indexOf(e.next[o+1]);return r})).join("\n")},Object.defineProperties(U.prototype,G),U.empty=new U(!0);var X=function(t,e){this.string=t,this.nodeTypes=e,this.inline=null,this.pos=0,this.tokens=t.split(/\s*(?=\b|\W|$)/),""==this.tokens[this.tokens.length-1]&&this.tokens.pop(),""==this.tokens[0]&&this.tokens.unshift()},Y={next:{configurable:!0}};function Q(t){var e=[];do{e.push(Z(t))}while(t.eat("|"));return 1==e.length?e[0]:{type:"choice",exprs:e}}function Z(t){var e=[];do{e.push(tt(t))}while(t.next&&")"!=t.next&&"|"!=t.next);return 1==e.length?e[0]:{type:"seq",exprs:e}}function tt(t){for(var e=function(t){if(t.eat("(")){var e=Q(t);return t.eat(")")||t.err("Missing closing paren"),e}if(!/\W/.test(t.next)){var n=function(t,e){var n=t.nodeTypes,r=n[e];if(r)return[r];var o=[];for(var i in n){var s=n[i];s.groups.indexOf(e)>-1&&o.push(s)}0==o.length&&t.err("No node type or group '"+e+"' found");return o}(t,t.next).map((function(e){return null==t.inline?t.inline=e.isInline:t.inline!=e.isInline&&t.err("Mixing inline and block content"),{type:"name",value:e}}));return t.pos++,1==n.length?n[0]:{type:"choice",exprs:n}}t.err("Unexpected token '"+t.next+"'")}(t);;)if(t.eat("+"))e={type:"plus",expr:e};else if(t.eat("*"))e={type:"star",expr:e};else if(t.eat("?"))e={type:"opt",expr:e};else{if(!t.eat("{"))break;e=nt(t,e)}return e}function et(t){/\D/.test(t.next)&&t.err("Expected number, got '"+t.next+"'");var e=Number(t.next);return t.pos++,e}function nt(t,e){var n=et(t),r=n;return t.eat(",")&&(r="}"!=t.next?et(t):-1),t.eat("}")||t.err("Unclosed braced range"),{type:"range",min:n,max:r,expr:e}}function rt(t,e){return e-t}function ot(t,e){var n=[];return function e(r){var o=t[r];if(1==o.length&&!o[0].term)return e(o[0].to);n.push(r);for(var i=0;i<o.length;i++){var s=o[i],a=s.term,c=s.to;a||-1!=n.indexOf(c)||e(c)}}(e),n.sort(rt)}function it(t){var e=Object.create(null);for(var n in t){var r=t[n];if(!r.hasDefault)return null;e[n]=r.default}return e}function st(t,e){var n=Object.create(null);for(var r in t){var o=e&&e[r];if(void 0===o){var i=t[r];if(!i.hasDefault)throw new RangeError("No value supplied for attribute "+r);o=i.default}n[r]=o}return n}function at(t){var e=Object.create(null);if(t)for(var n in t)e[n]=new pt(t[n]);return e}Y.next.get=function(){return this.tokens[this.pos]},X.prototype.eat=function(t){return this.next==t&&(this.pos++||!0)},X.prototype.err=function(t){throw new SyntaxError(t+" (in content expression '"+this.string+"')")},Object.defineProperties(X.prototype,Y);var ct=function(t,e,n){this.name=t,this.schema=e,this.spec=n,this.groups=n.group?n.group.split(" "):[],this.attrs=at(n.attrs),this.defaultAttrs=it(this.attrs),this.contentMatch=null,this.markSet=null,this.inlineContent=null,this.isBlock=!(n.inline||"text"==t),this.isText="text"==t},ht={isInline:{configurable:!0},isTextblock:{configurable:!0},isLeaf:{configurable:!0},isAtom:{configurable:!0}};ht.isInline.get=function(){return!this.isBlock},ht.isTextblock.get=function(){return this.isBlock&&this.inlineContent},ht.isLeaf.get=function(){return this.contentMatch==U.empty},ht.isAtom.get=function(){return this.isLeaf||this.spec.atom},ct.prototype.hasRequiredAttrs=function(){for(var t in this.attrs)if(this.attrs[t].isRequired)return!0;return!1},ct.prototype.compatibleContent=function(t){return this==t||this.contentMatch.compatible(t.contentMatch)},ct.prototype.computeAttrs=function(t){return!t&&this.defaultAttrs?this.defaultAttrs:st(this.attrs,t)},ct.prototype.create=function(t,e,n){if(this.isText)throw new Error("NodeType.create can't construct text nodes");return new q(this,this.computeAttrs(t),v.from(e),k.setFrom(n))},ct.prototype.createChecked=function(t,e,n){if(e=v.from(e),!this.validContent(e))throw new RangeError("Invalid content for node "+this.name);return new q(this,this.computeAttrs(t),e,k.setFrom(n))},ct.prototype.createAndFill=function(t,e,n){if(t=this.computeAttrs(t),(e=v.from(e)).size){var r=this.contentMatch.fillBefore(e);if(!r)return null;e=r.append(e)}var o=this.contentMatch.matchFragment(e).fillBefore(v.empty,!0);return o?new q(this,t,e.append(o),k.setFrom(n)):null},ct.prototype.validContent=function(t){var e=this.contentMatch.matchFragment(t);if(!e||!e.validEnd)return!1;for(var n=0;n<t.childCount;n++)if(!this.allowsMarks(t.child(n).marks))return!1;return!0},ct.prototype.allowsMarkType=function(t){return null==this.markSet||this.markSet.indexOf(t)>-1},ct.prototype.allowsMarks=function(t){if(null==this.markSet)return!0;for(var e=0;e<t.length;e++)if(!this.allowsMarkType(t[e].type))return!1;return!0},ct.prototype.allowedMarks=function(t){if(null==this.markSet)return t;for(var e,n=0;n<t.length;n++)this.allowsMarkType(t[n].type)?e&&e.push(t[n]):e||(e=t.slice(0,n));return e?e.length?e:k.empty:t},ct.compile=function(t,e){var n=Object.create(null);t.forEach((function(t,r){return n[t]=new ct(t,e,r)}));var r=e.spec.topNode||"doc";if(!n[r])throw new RangeError("Schema is missing its top node type ('"+r+"')");if(!n.text)throw new RangeError("Every schema needs a 'text' type");for(var o in n.text.attrs)throw new RangeError("The text node type should not have attributes");return n},Object.defineProperties(ct.prototype,ht);var pt=function(t){this.hasDefault=Object.prototype.hasOwnProperty.call(t,"default"),this.default=t.default},lt={isRequired:{configurable:!0}};lt.isRequired.get=function(){return!this.hasDefault},Object.defineProperties(pt.prototype,lt);var ft=function(t,e,n,r){this.name=t,this.schema=n,this.spec=r,this.attrs=at(r.attrs),this.rank=e,this.excluded=null;var o=it(this.attrs);this.instance=o&&new k(this,o)};ft.prototype.create=function(t){return!t&&this.instance?this.instance:new k(this,st(this.attrs,t))},ft.compile=function(t,e){var n=Object.create(null),r=0;return t.forEach((function(t,o){return n[t]=new ft(t,r++,e,o)})),n},ft.prototype.removeFromSet=function(t){for(var e=0;e<t.length;e++)if(t[e].type==this)return t.slice(0,e).concat(t.slice(e+1));return t},ft.prototype.isInSet=function(t){for(var e=0;e<t.length;e++)if(t[e].type==this)return t[e]},ft.prototype.excludes=function(t){return this.excluded.indexOf(t)>-1};var ut=function(t){for(var e in this.spec={},t)this.spec[e]=t[e];this.spec.nodes=u.from(t.nodes),this.spec.marks=u.from(t.marks),this.nodes=ct.compile(this.spec.nodes,this),this.marks=ft.compile(this.spec.marks,this);var n=Object.create(null);for(var r in this.nodes){if(r in this.marks)throw new RangeError(r+" can not be both a node and a mark");var o=this.nodes[r],i=o.spec.content||"",s=o.spec.marks;o.contentMatch=n[i]||(n[i]=U.parse(i,this.nodes)),o.inlineContent=o.contentMatch.inlineContent,o.markSet="_"==s?null:s?dt(this,s.split(" ")):""!=s&&o.inlineContent?null:[]}for(var a in this.marks){var c=this.marks[a],h=c.spec.excludes;c.excluded=null==h?[c]:""==h?[]:dt(this,h.split(" "))}this.nodeFromJSON=this.nodeFromJSON.bind(this),this.markFromJSON=this.markFromJSON.bind(this),this.topNodeType=this.nodes[this.spec.topNode||"doc"],this.cached=Object.create(null),this.cached.wrappings=Object.create(null)};function dt(t,e){for(var n=[],r=0;r<e.length;r++){var o=e[r],i=t.marks[o],s=i;if(i)n.push(i);else for(var a in t.marks){var c=t.marks[a];("_"==o||c.spec.group&&c.spec.group.split(" ").indexOf(o)>-1)&&n.push(s=c)}if(!s)throw new SyntaxError("Unknown mark type: '"+e[r]+"'")}return n}ut.prototype.node=function(t,e,n,r){if("string"==typeof t)t=this.nodeType(t);else{if(!(t instanceof ct))throw new RangeError("Invalid node type: "+t);if(t.schema!=this)throw new RangeError("Node type from different schema used ("+t.name+")")}return t.createChecked(e,n,r)},ut.prototype.text=function(t,e){var n=this.nodes.text;return new K(n,n.defaultAttrs,t,k.setFrom(e))},ut.prototype.mark=function(t,e){return"string"==typeof t&&(t=this.marks[t]),t.create(e)},ut.prototype.nodeFromJSON=function(t){return q.fromJSON(this,t)},ut.prototype.markFromJSON=function(t){return k.fromJSON(this,t)},ut.prototype.nodeType=function(t){var e=this.nodes[t];if(!e)throw new RangeError("Unknown node type: "+t);return e};var mt=function(t,e){var n=this;this.schema=t,this.rules=e,this.tags=[],this.styles=[],e.forEach((function(t){t.tag?n.tags.push(t):t.style&&n.styles.push(t)})),this.normalizeLists=!this.tags.some((function(e){if(!/^(ul|ol)\b/.test(e.tag)||!e.node)return!1;var n=t.nodes[e.node];return n.contentMatch.matchType(n)}))};mt.prototype.parse=function(t,e){void 0===e&&(e={});var n=new kt(this,e,!1);return n.addAll(t,null,e.from,e.to),n.finish()},mt.prototype.parseSlice=function(t,e){void 0===e&&(e={});var n=new kt(this,e,!0);return n.addAll(t,null,e.from,e.to),S.maxOpen(n.finish())},mt.prototype.matchTag=function(t,e){for(var n=0;n<this.tags.length;n++){var r=this.tags[n];if(St(t,r.tag)&&(void 0===r.namespace||t.namespaceURI==r.namespace)&&(!r.context||e.matchesContext(r.context))){if(r.getAttrs){var o=r.getAttrs(t);if(!1===o)continue;r.attrs=o}return r}}},mt.prototype.matchStyle=function(t,e,n){for(var r=0;r<this.styles.length;r++){var o=this.styles[r];if(!(0!=o.style.indexOf(t)||o.context&&!n.matchesContext(o.context)||o.style.length>t.length&&(61!=o.style.charCodeAt(t.length)||o.style.slice(t.length+1)!=e))){if(o.getAttrs){var i=o.getAttrs(e);if(!1===i)continue;o.attrs=i}return o}}},mt.schemaRules=function(t){var e=[];function n(t){for(var n=null==t.priority?50:t.priority,r=0;r<e.length;r++){var o=e[r];if((null==o.priority?50:o.priority)<n)break}e.splice(r,0,t)}var r=function(e){var r=t.marks[e].spec.parseDOM;r&&r.forEach((function(t){n(t=Ot(t)),t.mark=e}))};for(var o in t.marks)r(o);var i;for(var s in t.nodes)i=void 0,(i=t.nodes[s].spec.parseDOM)&&i.forEach((function(t){n(t=Ot(t)),t.node=s}));return e},mt.fromSchema=function(t){return t.cached.domParser||(t.cached.domParser=new mt(t,mt.schemaRules(t)))};var vt={address:!0,article:!0,aside:!0,blockquote:!0,canvas:!0,dd:!0,div:!0,dl:!0,fieldset:!0,figcaption:!0,figure:!0,footer:!0,form:!0,h1:!0,h2:!0,h3:!0,h4:!0,h5:!0,h6:!0,header:!0,hgroup:!0,hr:!0,li:!0,noscript:!0,ol:!0,output:!0,p:!0,pre:!0,section:!0,table:!0,tfoot:!0,ul:!0},yt={head:!0,noscript:!0,object:!0,script:!0,style:!0,title:!0},gt={ol:!0,ul:!0};function wt(t){return(t?1:0)|("full"===t?2:0)}var bt=function(t,e,n,r,o,i,s){this.type=t,this.attrs=e,this.solid=o,this.match=i||(4&s?null:t.contentMatch),this.options=s,this.content=[],this.marks=n,this.activeMarks=k.none,this.pendingMarks=r,this.stashMarks=[]};bt.prototype.findWrapping=function(t){if(!this.match){if(!this.type)return[];var e=this.type.contentMatch.fillBefore(v.from(t));if(!e){var n,r=this.type.contentMatch;return(n=r.findWrapping(t.type))?(this.match=r,n):null}this.match=this.type.contentMatch.matchFragment(e)}return this.match.findWrapping(t.type)},bt.prototype.finish=function(t){if(!(1&this.options)){var e,n=this.content[this.content.length-1];n&&n.isText&&(e=/[ \t\r\n\u000c]+$/.exec(n.text))&&(n.text.length==e[0].length?this.content.pop():this.content[this.content.length-1]=n.withText(n.text.slice(0,n.text.length-e[0].length)))}var r=v.from(this.content);return!t&&this.match&&(r=r.append(this.match.fillBefore(v.empty,!0))),this.type?this.type.create(this.attrs,r,this.marks):r},bt.prototype.popFromStashMark=function(t){for(var e=this.stashMarks.length-1;e>=0;e--)if(this.stashMarks[e].type==t)return this.stashMarks.splice(e,1)[0]},bt.prototype.applyPending=function(t){for(var e=0,n=this.pendingMarks;e<n.length;e++){var r=n[e];if((this.type?this.type.allowsMarkType(r.type):Mt(r.type,t))&&!r.isInSet(this.activeMarks)){var o=Ct(r,this.activeMarks);o&&this.stashMarks.push(o),this.activeMarks=r.addToSet(this.activeMarks),this.pendingMarks=r.removeFromSet(this.pendingMarks)}}};var kt=function(t,e,n){this.parser=t,this.options=e,this.isOpen=n;var r,o=e.topNode,i=wt(e.preserveWhitespace)|(n?4:0);r=o?new bt(o.type,o.attrs,k.none,k.none,!0,e.topMatch||o.type.contentMatch,i):new bt(n?null:t.schema.topNodeType,null,k.none,k.none,!0,null,i),this.nodes=[r],this.open=0,this.find=e.findPositions,this.needsBlock=!1},xt={top:{configurable:!0},currentPos:{configurable:!0}};function St(t,e){return(t.matches||t.msMatchesSelector||t.webkitMatchesSelector||t.mozMatchesSelector).call(t,e)}function Ot(t){var e={};for(var n in t)e[n]=t[n];return e}function Mt(t,e){var n=e.schema.nodes,r=function(r){var o=n[r];if(o.allowsMarkType(t)){var i=[],s=function(t){i.push(t);for(var n=0;n<t.edgeCount;n++){var r=t.edge(n),o=r.type,a=r.next;if(o==e)return!0;if(i.indexOf(a)<0&&s(a))return!0}};return s(o.contentMatch)?{v:!0}:void 0}};for(var o in n){var i=r(o);if(i)return i.v}}function Ct(t,e){for(var n=0;n<e.length;n++)if(t.type==e[n].type)return e[n]}xt.top.get=function(){return this.nodes[this.open]},kt.prototype.addDOM=function(t){if(3==t.nodeType)this.addTextNode(t);else if(1==t.nodeType){var e=t.getAttribute("style"),n=e?this.readStyles(function(t){var e,n=/\s*([\w-]+)\s*:\s*([^;]+)/g,r=[];for(;e=n.exec(t);)r.push(e[1],e[2].trim());return r}(e)):null,r=this.top;if(null!=n)for(var o=0;o<n.length;o++)this.addPendingMark(n[o]);if(this.addElement(t),null!=n)for(var i=0;i<n.length;i++)this.removePendingMark(n[i],r)}},kt.prototype.addTextNode=function(t){var e=t.nodeValue,n=this.top;if((n.type?n.type.inlineContent:n.content.length&&n.content[0].isInline)||/[^ \t\r\n\u000c]/.test(e)){if(1&n.options)2&n.options||(e=e.replace(/\r?\n|\r/g," "));else if(e=e.replace(/[ \t\r\n\u000c]+/g," "),/^[ \t\r\n\u000c]/.test(e)&&this.open==this.nodes.length-1){var r=n.content[n.content.length-1],o=t.previousSibling;(!r||o&&"BR"==o.nodeName||r.isText&&/[ \t\r\n\u000c]$/.test(r.text))&&(e=e.slice(1))}e&&this.insertNode(this.parser.schema.text(e)),this.findInText(t)}else this.findInside(t)},kt.prototype.addElement=function(t){var e=t.nodeName.toLowerCase();gt.hasOwnProperty(e)&&this.parser.normalizeLists&&function(t){for(var e=t.firstChild,n=null;e;e=e.nextSibling){var r=1==e.nodeType?e.nodeName.toLowerCase():null;r&&gt.hasOwnProperty(r)&&n?(n.appendChild(e),e=n):"li"==r?n=e:r&&(n=null)}}(t);var n=this.options.ruleFromNode&&this.options.ruleFromNode(t)||this.parser.matchTag(t,this);if(n?n.ignore:yt.hasOwnProperty(e))this.findInside(t);else if(!n||n.skip||n.closeParent){n&&n.closeParent?this.open=Math.max(0,this.open-1):n&&n.skip.nodeType&&(t=n.skip);var r,o=this.top,i=this.needsBlock;if(vt.hasOwnProperty(e))r=!0,o.type||(this.needsBlock=!0);else if(!t.firstChild)return void this.leafFallback(t);this.addAll(t),r&&this.sync(o),this.needsBlock=i}else this.addElementByRule(t,n)},kt.prototype.leafFallback=function(t){"BR"==t.nodeName&&this.top.type&&this.top.type.inlineContent&&this.addTextNode(t.ownerDocument.createTextNode("\n"))},kt.prototype.readStyles=function(t){for(var e=k.none,n=0;n<t.length;n+=2){var r=this.parser.matchStyle(t[n],t[n+1],this);if(r){if(r.ignore)return null;e=this.parser.schema.marks[r.mark].create(r.attrs).addToSet(e)}}return e},kt.prototype.addElementByRule=function(t,e){var n,r,o,i=this;e.node?(r=this.parser.schema.nodes[e.node]).isLeaf?this.insertNode(r.create(e.attrs))||this.leafFallback(t):n=this.enter(r,e.attrs,e.preserveWhitespace):(o=this.parser.schema.marks[e.mark].create(e.attrs),this.addPendingMark(o));var s=this.top;if(r&&r.isLeaf)this.findInside(t);else if(e.getContent)this.findInside(t),e.getContent(t,this.parser.schema).forEach((function(t){return i.insertNode(t)}));else{var a=e.contentElement;"string"==typeof a?a=t.querySelector(a):"function"==typeof a&&(a=a(t)),a||(a=t),this.findAround(t,a,!0),this.addAll(a,n)}n&&(this.sync(s),this.open--),o&&this.removePendingMark(o,s)},kt.prototype.addAll=function(t,e,n,r){for(var o=n||0,i=n?t.childNodes[n]:t.firstChild,s=null==r?null:t.childNodes[r];i!=s;i=i.nextSibling,++o)this.findAtPoint(t,o),this.addDOM(i),e&&vt.hasOwnProperty(i.nodeName.toLowerCase())&&this.sync(e);this.findAtPoint(t,o)},kt.prototype.findPlace=function(t){for(var e,n,r=this.open;r>=0;r--){var o=this.nodes[r],i=o.findWrapping(t);if(i&&(!e||e.length>i.length)&&(e=i,n=o,!i.length))break;if(o.solid)break}if(!e)return!1;this.sync(n);for(var s=0;s<e.length;s++)this.enterInner(e[s],null,!1);return!0},kt.prototype.insertNode=function(t){if(t.isInline&&this.needsBlock&&!this.top.type){var e=this.textblockFromContext();e&&this.enterInner(e)}if(this.findPlace(t)){this.closeExtra();var n=this.top;n.applyPending(t.type),n.match&&(n.match=n.match.matchType(t.type));for(var r=n.activeMarks,o=0;o<t.marks.length;o++)n.type&&!n.type.allowsMarkType(t.marks[o].type)||(r=t.marks[o].addToSet(r));return n.content.push(t.mark(r)),!0}return!1},kt.prototype.enter=function(t,e,n){var r=this.findPlace(t.create(e));return r&&this.enterInner(t,e,!0,n),r},kt.prototype.enterInner=function(t,e,n,r){this.closeExtra();var o=this.top;o.applyPending(t),o.match=o.match&&o.match.matchType(t,e);var i=null==r?-5&o.options:wt(r);4&o.options&&0==o.content.length&&(i|=4),this.nodes.push(new bt(t,e,o.activeMarks,o.pendingMarks,n,null,i)),this.open++},kt.prototype.closeExtra=function(t){var e=this.nodes.length-1;if(e>this.open){for(;e>this.open;e--)this.nodes[e-1].content.push(this.nodes[e].finish(t));this.nodes.length=this.open+1}},kt.prototype.finish=function(){return this.open=0,this.closeExtra(this.isOpen),this.nodes[0].finish(this.isOpen||this.options.topOpen)},kt.prototype.sync=function(t){for(var e=this.open;e>=0;e--)if(this.nodes[e]==t)return void(this.open=e)},xt.currentPos.get=function(){this.closeExtra();for(var t=0,e=this.open;e>=0;e--){for(var n=this.nodes[e].content,r=n.length-1;r>=0;r--)t+=n[r].nodeSize;e&&t++}return t},kt.prototype.findAtPoint=function(t,e){if(this.find)for(var n=0;n<this.find.length;n++)this.find[n].node==t&&this.find[n].offset==e&&(this.find[n].pos=this.currentPos)},kt.prototype.findInside=function(t){if(this.find)for(var e=0;e<this.find.length;e++)null==this.find[e].pos&&1==t.nodeType&&t.contains(this.find[e].node)&&(this.find[e].pos=this.currentPos)},kt.prototype.findAround=function(t,e,n){if(t!=e&&this.find)for(var r=0;r<this.find.length;r++){if(null==this.find[r].pos&&1==t.nodeType&&t.contains(this.find[r].node))e.compareDocumentPosition(this.find[r].node)&(n?2:4)&&(this.find[r].pos=this.currentPos)}},kt.prototype.findInText=function(t){if(this.find)for(var e=0;e<this.find.length;e++)this.find[e].node==t&&(this.find[e].pos=this.currentPos-(t.nodeValue.length-this.find[e].offset))},kt.prototype.matchesContext=function(t){var e=this;if(t.indexOf("|")>-1)return t.split(/\s*\|\s*/).some(this.matchesContext,this);var n=t.split("/"),r=this.options.context,o=!(this.isOpen||r&&r.parent.type!=this.nodes[0].type),i=-(r?r.depth+1:0)+(o?0:1),s=function(t,a){for(;t>=0;t--){var c=n[t];if(""==c){if(t==n.length-1||0==t)continue;for(;a>=i;a--)if(s(t-1,a))return!0;return!1}var h=a>0||0==a&&o?e.nodes[a].type:r&&a>=i?r.node(a-i).type:null;if(!h||h.name!=c&&-1==h.groups.indexOf(c))return!1;a--}return!0};return s(n.length-1,this.open)},kt.prototype.textblockFromContext=function(){var t=this.options.context;if(t)for(var e=t.depth;e>=0;e--){var n=t.node(e).contentMatchAt(t.indexAfter(e)).defaultType;if(n&&n.isTextblock&&n.defaultAttrs)return n}for(var r in this.parser.schema.nodes){var o=this.parser.schema.nodes[r];if(o.isTextblock&&o.defaultAttrs)return o}},kt.prototype.addPendingMark=function(t){var e=Ct(t,this.top.pendingMarks);e&&this.top.stashMarks.push(e),this.top.pendingMarks=t.addToSet(this.top.pendingMarks)},kt.prototype.removePendingMark=function(t,e){for(var n=this.open;n>=0;n--){var r=this.nodes[n];if(r.pendingMarks.lastIndexOf(t)>-1)r.pendingMarks=t.removeFromSet(r.pendingMarks);else{r.activeMarks=t.removeFromSet(r.activeMarks);var o=r.popFromStashMark(t.type);o&&(r.activeMarks=o.addToSet(r.activeMarks))}if(r==e)break}},Object.defineProperties(kt.prototype,xt);var Nt=function(t,e){this.nodes=t||{},this.marks=e||{}};function Tt(t){var e={};for(var n in t){var r=t[n].spec.toDOM;r&&(e[n]=r)}return e}function Dt(t){return t.document||window.document}Nt.prototype.serializeFragment=function(t,e,n){var r=this;void 0===e&&(e={}),n||(n=Dt(e).createDocumentFragment());var o=n,i=null;return t.forEach((function(t){if(i||t.marks.length){i||(i=[]);for(var n=0,s=0;n<i.length&&s<t.marks.length;){var a=t.marks[s];if(r.marks[a.type.name]){if(!a.eq(i[n])||!1===a.type.spec.spanning)break;n+=2,s++}else s++}for(;n<i.length;)o=i.pop(),i.pop();for(;s<t.marks.length;){var c=t.marks[s++],h=r.serializeMark(c,t.isInline,e);h&&(i.push(c,o),o.appendChild(h.dom),o=h.contentDOM||h.dom)}}o.appendChild(r.serializeNode(t,e))})),n},Nt.prototype.serializeNode=function(t,e){void 0===e&&(e={});var n=Nt.renderSpec(Dt(e),this.nodes[t.type.name](t)),r=n.dom,o=n.contentDOM;if(o){if(t.isLeaf)throw new RangeError("Content hole not allowed in a leaf node spec");e.onContent?e.onContent(t,o,e):this.serializeFragment(t.content,e,o)}return r},Nt.prototype.serializeNodeAndMarks=function(t,e){void 0===e&&(e={});for(var n=this.serializeNode(t,e),r=t.marks.length-1;r>=0;r--){var o=this.serializeMark(t.marks[r],t.isInline,e);o&&((o.contentDOM||o.dom).appendChild(n),n=o.dom)}return n},Nt.prototype.serializeMark=function(t,e,n){void 0===n&&(n={});var r=this.marks[t.type.name];return r&&Nt.renderSpec(Dt(n),r(t,e))},Nt.renderSpec=function(t,e,n){if(void 0===n&&(n=null),"string"==typeof e)return{dom:t.createTextNode(e)};if(null!=e.nodeType)return{dom:e};var r=e[0],o=r.indexOf(" ");o>0&&(n=r.slice(0,o),r=r.slice(o+1));var i=null,s=n?t.createElementNS(n,r):t.createElement(r),a=e[1],c=1;if(a&&"object"==typeof a&&null==a.nodeType&&!Array.isArray(a))for(var h in c=2,a)if(null!=a[h]){var p=h.indexOf(" ");p>0?s.setAttributeNS(h.slice(0,p),h.slice(p+1),a[h]):s.setAttribute(h,a[h])}for(var l=c;l<e.length;l++){var f=e[l];if(0===f){if(l<e.length-1||l>c)throw new RangeError("Content hole must be the only child of its parent node");return{dom:s,contentDOM:s}}var u=Nt.renderSpec(t,f,n),d=u.dom,m=u.contentDOM;if(s.appendChild(d),m){if(i)throw new RangeError("Multiple content holes");i=m}}return{dom:s,contentDOM:i}},Nt.fromSchema=function(t){return t.cached.domSerializer||(t.cached.domSerializer=new Nt(this.nodesFromSchema(t),this.marksFromSchema(t)))},Nt.nodesFromSchema=function(t){var e=Tt(t.nodes);return e.text||(e.text=function(t){return t.text}),e},Nt.marksFromSchema=function(t){return Tt(t.marks)};var Et=Math.pow(2,16);function At(t){return 65535&t}var Rt=function(t,e,n){void 0===e&&(e=!1),void 0===n&&(n=null),this.pos=t,this.deleted=e,this.recover=n},It=function(t,e){void 0===e&&(e=!1),this.ranges=t,this.inverted=e};It.prototype.recover=function(t){var e=0,n=At(t);if(!this.inverted)for(var r=0;r<n;r++)e+=this.ranges[3*r+2]-this.ranges[3*r+1];return this.ranges[3*n]+e+function(t){return(t-(65535&t))/Et}(t)},It.prototype.mapResult=function(t,e){return void 0===e&&(e=1),this._map(t,e,!1)},It.prototype.map=function(t,e){return void 0===e&&(e=1),this._map(t,e,!0)},It.prototype._map=function(t,e,n){for(var r=0,o=this.inverted?2:1,i=this.inverted?1:2,s=0;s<this.ranges.length;s+=3){var a=this.ranges[s]-(this.inverted?r:0);if(a>t)break;var c=this.ranges[s+o],h=this.ranges[s+i],p=a+c;if(t<=p){var l=a+r+((c?t==a?-1:t==p?1:e:e)<0?0:h);if(n)return l;var f=t==(e<0?a:p)?null:s/3+(t-a)*Et;return new Rt(l,e<0?t!=a:t!=p,f)}r+=h-c}return n?t+r:new Rt(t+r)},It.prototype.touches=function(t,e){for(var n=0,r=At(e),o=this.inverted?2:1,i=this.inverted?1:2,s=0;s<this.ranges.length;s+=3){var a=this.ranges[s]-(this.inverted?n:0);if(a>t)break;var c=this.ranges[s+o];if(t<=a+c&&s==3*r)return!0;n+=this.ranges[s+i]-c}return!1},It.prototype.forEach=function(t){for(var e=this.inverted?2:1,n=this.inverted?1:2,r=0,o=0;r<this.ranges.length;r+=3){var i=this.ranges[r],s=i-(this.inverted?o:0),a=i+(this.inverted?0:o),c=this.ranges[r+e],h=this.ranges[r+n];t(s,s+c,a,a+h),o+=h-c}},It.prototype.invert=function(){return new It(this.ranges,!this.inverted)},It.prototype.toString=function(){return(this.inverted?"-":"")+JSON.stringify(this.ranges)},It.offset=function(t){return 0==t?It.empty:new It(t<0?[0,-t,0]:[0,0,t])},It.empty=new It([]);var zt=function(t,e,n,r){this.maps=t||[],this.from=n||0,this.to=null==r?this.maps.length:r,this.mirror=e};function Pt(t){var e=Error.call(this,t);return e.__proto__=Pt.prototype,e}zt.prototype.slice=function(t,e){return void 0===t&&(t=0),void 0===e&&(e=this.maps.length),new zt(this.maps,this.mirror,t,e)},zt.prototype.copy=function(){return new zt(this.maps.slice(),this.mirror&&this.mirror.slice(),this.from,this.to)},zt.prototype.appendMap=function(t,e){this.to=this.maps.push(t),null!=e&&this.setMirror(this.maps.length-1,e)},zt.prototype.appendMapping=function(t){for(var e=0,n=this.maps.length;e<t.maps.length;e++){var r=t.getMirror(e);this.appendMap(t.maps[e],null!=r&&r<e?n+r:null)}},zt.prototype.getMirror=function(t){if(this.mirror)for(var e=0;e<this.mirror.length;e++)if(this.mirror[e]==t)return this.mirror[e+(e%2?-1:1)]},zt.prototype.setMirror=function(t,e){this.mirror||(this.mirror=[]),this.mirror.push(t,e)},zt.prototype.appendMappingInverted=function(t){for(var e=t.maps.length-1,n=this.maps.length+t.maps.length;e>=0;e--){var r=t.getMirror(e);this.appendMap(t.maps[e].invert(),null!=r&&r>e?n-r-1:null)}},zt.prototype.invert=function(){var t=new zt;return t.appendMappingInverted(this),t},zt.prototype.map=function(t,e){if(void 0===e&&(e=1),this.mirror)return this._map(t,e,!0);for(var n=this.from;n<this.to;n++)t=this.maps[n].map(t,e);return t},zt.prototype.mapResult=function(t,e){return void 0===e&&(e=1),this._map(t,e,!1)},zt.prototype._map=function(t,e,n){for(var r=!1,o=this.from;o<this.to;o++){var i=this.maps[o].mapResult(t,e);if(null!=i.recover){var s=this.getMirror(o);if(null!=s&&s>o&&s<this.to){o=s,t=this.maps[s].recover(i.recover);continue}}i.deleted&&(r=!0),t=i.pos}return n?t:new Rt(t,r)},Pt.prototype=Object.create(Error.prototype),Pt.prototype.constructor=Pt,Pt.prototype.name="TransformError";var Vt=function(t){this.doc=t,this.steps=[],this.docs=[],this.mapping=new zt},Bt={before:{configurable:!0},docChanged:{configurable:!0}};function $t(){throw new Error("Override me")}Bt.before.get=function(){return this.docs.length?this.docs[0]:this.doc},Vt.prototype.step=function(t){var e=this.maybeStep(t);if(e.failed)throw new Pt(e.failed);return this},Vt.prototype.maybeStep=function(t){var e=t.apply(this.doc);return e.failed||this.addStep(t,e.doc),e},Bt.docChanged.get=function(){return this.steps.length>0},Vt.prototype.addStep=function(t,e){this.docs.push(this.doc),this.steps.push(t),this.mapping.appendMap(t.getMap()),this.doc=e},Object.defineProperties(Vt.prototype,Bt);var Ft=Object.create(null),_t=function(){};_t.prototype.apply=function(t){return $t()},_t.prototype.getMap=function(){return It.empty},_t.prototype.invert=function(t){return $t()},_t.prototype.map=function(t){return $t()},_t.prototype.merge=function(t){return null},_t.prototype.toJSON=function(){return $t()},_t.fromJSON=function(t,e){if(!e||!e.stepType)throw new RangeError("Invalid input for Step.fromJSON");var n=Ft[e.stepType];if(!n)throw new RangeError("No step type "+e.stepType+" defined");return n.fromJSON(t,e)},_t.jsonID=function(t,e){if(t in Ft)throw new RangeError("Duplicate use of step JSON ID "+t);return Ft[t]=e,e.prototype.jsonID=t,e};var jt=function(t,e){this.doc=t,this.failed=e};jt.ok=function(t){return new jt(t,null)},jt.fail=function(t){return new jt(null,t)},jt.fromReplace=function(t,e,n,r){try{return jt.ok(t.replace(e,n,r))}catch(t){if(t instanceof x)return jt.fail(t.message);throw t}};var Lt=function(t){function e(e,n,r,o){t.call(this),this.from=e,this.to=n,this.slice=r,this.structure=!!o}return t&&(e.__proto__=t),e.prototype=Object.create(t&&t.prototype),e.prototype.constructor=e,e.prototype.apply=function(t){return this.structure&&qt(t,this.from,this.to)?jt.fail("Structure replace would overwrite content"):jt.fromReplace(t,this.from,this.to,this.slice)},e.prototype.getMap=function(){return new It([this.from,this.to-this.from,this.slice.size])},e.prototype.invert=function(t){return new e(this.from,this.from+this.slice.size,t.slice(this.from,this.to))},e.prototype.map=function(t){var n=t.mapResult(this.from,1),r=t.mapResult(this.to,-1);return n.deleted&&r.deleted?null:new e(n.pos,Math.max(n.pos,r.pos),this.slice)},e.prototype.merge=function(t){if(!(t instanceof e)||t.structure!=this.structure)return null;if(this.from+this.slice.size!=t.from||this.slice.openEnd||t.slice.openStart){if(t.to!=this.from||this.slice.openStart||t.slice.openEnd)return null;var n=this.slice.size+t.slice.size==0?S.empty:new S(t.slice.content.append(this.slice.content),t.slice.openStart,this.slice.openEnd);return new e(t.from,this.to,n,this.structure)}var r=this.slice.size+t.slice.size==0?S.empty:new S(this.slice.content.append(t.slice.content),this.slice.openStart,t.slice.openEnd);return new e(this.from,this.to+(t.to-t.from),r,this.structure)},e.prototype.toJSON=function(){var t={stepType:"replace",from:this.from,to:this.to};return this.slice.size&&(t.slice=this.slice.toJSON()),this.structure&&(t.structure=!0),t},e.fromJSON=function(t,n){if("number"!=typeof n.from||"number"!=typeof n.to)throw new RangeError("Invalid input for ReplaceStep.fromJSON");return new e(n.from,n.to,S.fromJSON(t,n.slice),!!n.structure)},e}(_t);_t.jsonID("replace",Lt);var Jt=function(t){function e(e,n,r,o,i,s,a){t.call(this),this.from=e,this.to=n,this.gapFrom=r,this.gapTo=o,this.slice=i,this.insert=s,this.structure=!!a}return t&&(e.__proto__=t),e.prototype=Object.create(t&&t.prototype),e.prototype.constructor=e,e.prototype.apply=function(t){if(this.structure&&(qt(t,this.from,this.gapFrom)||qt(t,this.gapTo,this.to)))return jt.fail("Structure gap-replace would overwrite content");var e=t.slice(this.gapFrom,this.gapTo);if(e.openStart||e.openEnd)return jt.fail("Gap is not a flat range");var n=this.slice.insertAt(this.insert,e.content);return n?jt.fromReplace(t,this.from,this.to,n):jt.fail("Content does not fit in gap")},e.prototype.getMap=function(){return new It([this.from,this.gapFrom-this.from,this.insert,this.gapTo,this.to-this.gapTo,this.slice.size-this.insert])},e.prototype.invert=function(t){var n=this.gapTo-this.gapFrom;return new e(this.from,this.from+this.slice.size+n,this.from+this.insert,this.from+this.insert+n,t.slice(this.from,this.to).removeBetween(this.gapFrom-this.from,this.gapTo-this.from),this.gapFrom-this.from,this.structure)},e.prototype.map=function(t){var n=t.mapResult(this.from,1),r=t.mapResult(this.to,-1),o=t.map(this.gapFrom,-1),i=t.map(this.gapTo,1);return n.deleted&&r.deleted||o<n.pos||i>r.pos?null:new e(n.pos,r.pos,o,i,this.slice,this.insert,this.structure)},e.prototype.toJSON=function(){var t={stepType:"replaceAround",from:this.from,to:this.to,gapFrom:this.gapFrom,gapTo:this.gapTo,insert:this.insert};return this.slice.size&&(t.slice=this.slice.toJSON()),this.structure&&(t.structure=!0),t},e.fromJSON=function(t,n){if("number"!=typeof n.from||"number"!=typeof n.to||"number"!=typeof n.gapFrom||"number"!=typeof n.gapTo||"number"!=typeof n.insert)throw new RangeError("Invalid input for ReplaceAroundStep.fromJSON");return new e(n.from,n.to,n.gapFrom,n.gapTo,S.fromJSON(t,n.slice),n.insert,!!n.structure)},e}(_t);function qt(t,e,n){for(var r=t.resolve(e),o=n-e,i=r.depth;o>0&&i>0&&r.indexAfter(i)==r.node(i).childCount;)i--,o--;if(o>0)for(var s=r.node(i).maybeChild(r.indexAfter(i));o>0;){if(!s||s.isLeaf)return!0;s=s.firstChild,o--}return!1}function Wt(t,e,n){return(0==e||t.canReplace(e,t.childCount))&&(n==t.childCount||t.canReplace(0,n))}function Kt(t){for(var e=t.parent.content.cutByIndex(t.startIndex,t.endIndex),n=t.depth;;--n){var r=t.$from.node(n),o=t.$from.index(n),i=t.$to.indexAfter(n);if(n<t.depth&&r.canReplace(o,i,e))return n;if(0==n||r.type.spec.isolating||!Wt(r,o,i))break}}function Ht(t,e,n,r){void 0===r&&(r=t);var o=function(t,e){var n=t.parent,r=t.startIndex,o=t.endIndex,i=n.contentMatchAt(r).findWrapping(e);if(!i)return null;var s=i.length?i[0]:e;return n.canReplaceWith(r,o,s)?i:null}(t,e),i=o&&function(t,e){var n=t.parent,r=t.startIndex,o=t.endIndex,i=n.child(r),s=e.contentMatch.findWrapping(i.type);if(!s)return null;for(var a=(s.length?s[s.length-1]:e).contentMatch,c=r;a&&c<o;c++)a=a.matchType(n.child(c).type);if(!a||!a.validEnd)return null;return s}(r,e);return i?o.map(Ut).concat({type:e,attrs:n}).concat(i.map(Ut)):null}function Ut(t){return{type:t,attrs:null}}function Gt(t,e,n,r){void 0===n&&(n=1);var o=t.resolve(e),i=o.depth-n,s=r&&r[r.length-1]||o.parent;if(i<0||o.parent.type.spec.isolating||!o.parent.canReplace(o.index(),o.parent.childCount)||!s.type.validContent(o.parent.content.cutByIndex(o.index(),o.parent.childCount)))return!1;for(var a=o.depth-1,c=n-2;a>i;a--,c--){var h=o.node(a),p=o.index(a);if(h.type.spec.isolating)return!1;var l=h.content.cutByIndex(p,h.childCount),f=r&&r[c]||h;if(f!=h&&(l=l.replaceChild(0,f.type.create(f.attrs))),!h.canReplace(p+1,h.childCount)||!f.type.validContent(l))return!1}var u=o.indexAfter(i),d=r&&r[0];return o.node(i).canReplaceWith(u,u,d?d.type:o.node(i+1).type)}function Xt(t,e){var n=t.resolve(e),r=n.index();return Yt(n.nodeBefore,n.nodeAfter)&&n.parent.canReplace(r,r+1)}function Yt(t,e){return t&&e&&!t.isLeaf&&t.canAppend(e)}function Qt(t,e,n){void 0===n&&(n=-1);for(var r=t.resolve(e),o=r.depth;;o--){var i=void 0,s=void 0,a=r.index(o);if(o==r.depth?(i=r.nodeBefore,s=r.nodeAfter):n>0?(i=r.node(o+1),a++,s=r.node(o).maybeChild(a)):(i=r.node(o).maybeChild(a-1),s=r.node(o+1)),i&&!i.isTextblock&&Yt(i,s)&&r.node(o).canReplace(a,a+1))return e;if(0==o)break;e=n<0?r.before(o):r.after(o)}}function Zt(t,e,n){for(var r=[],o=0;o<t.childCount;o++){var i=t.child(o);i.content.size&&(i=i.copy(Zt(i.content,e,i))),i.isInline&&(i=e(i,n,o)),r.push(i)}return v.fromArray(r)}_t.jsonID("replaceAround",Jt),Vt.prototype.lift=function(t,e){for(var n=t.$from,r=t.$to,o=t.depth,i=n.before(o+1),s=r.after(o+1),a=i,c=s,h=v.empty,p=0,l=o,f=!1;l>e;l--)f||n.index(l)>0?(f=!0,h=v.from(n.node(l).copy(h)),p++):a--;for(var u=v.empty,d=0,m=o,y=!1;m>e;m--)y||r.after(m+1)<r.end(m)?(y=!0,u=v.from(r.node(m).copy(u)),d++):c++;return this.step(new Jt(a,c,i,s,new S(h.append(u),p,d),h.size-p,!0))},Vt.prototype.wrap=function(t,e){for(var n=v.empty,r=e.length-1;r>=0;r--)n=v.from(e[r].type.create(e[r].attrs,n));var o=t.start,i=t.end;return this.step(new Jt(o,i,o,i,new S(n,0,0),e.length,!0))},Vt.prototype.setBlockType=function(t,e,n,r){var o=this;if(void 0===e&&(e=t),!n.isTextblock)throw new RangeError("Type given to setBlockType should be a textblock");var i=this.steps.length;return this.doc.nodesBetween(t,e,(function(t,e){if(t.isTextblock&&!t.hasMarkup(n,r)&&function(t,e,n){var r=t.resolve(e),o=r.index();return r.parent.canReplaceWith(o,o+1,n)}(o.doc,o.mapping.slice(i).map(e),n)){o.clearIncompatible(o.mapping.slice(i).map(e,1),n);var s=o.mapping.slice(i),a=s.map(e,1),c=s.map(e+t.nodeSize,1);return o.step(new Jt(a,c,a+1,c-1,new S(v.from(n.create(r,null,t.marks)),0,0),1,!0)),!1}})),this},Vt.prototype.setNodeMarkup=function(t,e,n,r){var o=this.doc.nodeAt(t);if(!o)throw new RangeError("No node at given position");e||(e=o.type);var i=e.create(n,null,r||o.marks);if(o.isLeaf)return this.replaceWith(t,t+o.nodeSize,i);if(!e.validContent(o.content))throw new RangeError("Invalid content for node type "+e.name);return this.step(new Jt(t,t+o.nodeSize,t+1,t+o.nodeSize-1,new S(v.from(i),0,0),1,!0))},Vt.prototype.split=function(t,e,n){void 0===e&&(e=1);for(var r=this.doc.resolve(t),o=v.empty,i=v.empty,s=r.depth,a=r.depth-e,c=e-1;s>a;s--,c--){o=v.from(r.node(s).copy(o));var h=n&&n[c];i=v.from(h?h.type.create(h.attrs,i):r.node(s).copy(i))}return this.step(new Lt(t,t,new S(o.append(i),e,e),!0))},Vt.prototype.join=function(t,e){void 0===e&&(e=1);var n=new Lt(t-e,t+e,S.empty,!0);return this.step(n)};var te=function(t){function e(e,n,r){t.call(this),this.from=e,this.to=n,this.mark=r}return t&&(e.__proto__=t),e.prototype=Object.create(t&&t.prototype),e.prototype.constructor=e,e.prototype.apply=function(t){var e=this,n=t.slice(this.from,this.to),r=t.resolve(this.from),o=r.node(r.sharedDepth(this.to)),i=new S(Zt(n.content,(function(t,n){return n.type.allowsMarkType(e.mark.type)?t.mark(e.mark.addToSet(t.marks)):t}),o),n.openStart,n.openEnd);return jt.fromReplace(t,this.from,this.to,i)},e.prototype.invert=function(){return new ee(this.from,this.to,this.mark)},e.prototype.map=function(t){var n=t.mapResult(this.from,1),r=t.mapResult(this.to,-1);return n.deleted&&r.deleted||n.pos>=r.pos?null:new e(n.pos,r.pos,this.mark)},e.prototype.merge=function(t){if(t instanceof e&&t.mark.eq(this.mark)&&this.from<=t.to&&this.to>=t.from)return new e(Math.min(this.from,t.from),Math.max(this.to,t.to),this.mark)},e.prototype.toJSON=function(){return{stepType:"addMark",mark:this.mark.toJSON(),from:this.from,to:this.to}},e.fromJSON=function(t,n){if("number"!=typeof n.from||"number"!=typeof n.to)throw new RangeError("Invalid input for AddMarkStep.fromJSON");return new e(n.from,n.to,t.markFromJSON(n.mark))},e}(_t);_t.jsonID("addMark",te);var ee=function(t){function e(e,n,r){t.call(this),this.from=e,this.to=n,this.mark=r}return t&&(e.__proto__=t),e.prototype=Object.create(t&&t.prototype),e.prototype.constructor=e,e.prototype.apply=function(t){var e=this,n=t.slice(this.from,this.to),r=new S(Zt(n.content,(function(t){return t.mark(e.mark.removeFromSet(t.marks))})),n.openStart,n.openEnd);return jt.fromReplace(t,this.from,this.to,r)},e.prototype.invert=function(){return new te(this.from,this.to,this.mark)},e.prototype.map=function(t){var n=t.mapResult(this.from,1),r=t.mapResult(this.to,-1);return n.deleted&&r.deleted||n.pos>=r.pos?null:new e(n.pos,r.pos,this.mark)},e.prototype.merge=function(t){if(t instanceof e&&t.mark.eq(this.mark)&&this.from<=t.to&&this.to>=t.from)return new e(Math.min(this.from,t.from),Math.max(this.to,t.to),this.mark)},e.prototype.toJSON=function(){return{stepType:"removeMark",mark:this.mark.toJSON(),from:this.from,to:this.to}},e.fromJSON=function(t,n){if("number"!=typeof n.from||"number"!=typeof n.to)throw new RangeError("Invalid input for RemoveMarkStep.fromJSON");return new e(n.from,n.to,t.markFromJSON(n.mark))},e}(_t);function ne(t,e,n){return!n.openStart&&!n.openEnd&&t.start()==e.start()&&t.parent.canReplace(t.index(),e.index(),n.content)}_t.jsonID("removeMark",ee),Vt.prototype.addMark=function(t,e,n){var r=this,o=[],i=[],s=null,a=null;return this.doc.nodesBetween(t,e,(function(r,c,h){if(r.isInline){var p=r.marks;if(!n.isInSet(p)&&h.type.allowsMarkType(n.type)){for(var l=Math.max(c,t),f=Math.min(c+r.nodeSize,e),u=n.addToSet(p),d=0;d<p.length;d++)p[d].isInSet(u)||(s&&s.to==l&&s.mark.eq(p[d])?s.to=f:o.push(s=new ee(l,f,p[d])));a&&a.to==l?a.to=f:i.push(a=new te(l,f,n))}}})),o.forEach((function(t){return r.step(t)})),i.forEach((function(t){return r.step(t)})),this},Vt.prototype.removeMark=function(t,e,n){var r=this;void 0===n&&(n=null);var o=[],i=0;return this.doc.nodesBetween(t,e,(function(r,s){if(r.isInline){i++;var a=null;if(n instanceof ft){var c=n.isInSet(r.marks);c&&(a=[c])}else n?n.isInSet(r.marks)&&(a=[n]):a=r.marks;if(a&&a.length)for(var h=Math.min(s+r.nodeSize,e),p=0;p<a.length;p++){for(var l=a[p],f=void 0,u=0;u<o.length;u++){var d=o[u];d.step==i-1&&l.eq(o[u].style)&&(f=d)}f?(f.to=h,f.step=i):o.push({style:l,from:Math.max(s,t),to:h,step:i})}}})),o.forEach((function(t){return r.step(new ee(t.from,t.to,t.style))})),this},Vt.prototype.clearIncompatible=function(t,e,n){void 0===n&&(n=e.contentMatch);for(var r=this.doc.nodeAt(t),o=[],i=t+1,s=0;s<r.childCount;s++){var a=r.child(s),c=i+a.nodeSize,h=n.matchType(a.type,a.attrs);if(h){n=h;for(var p=0;p<a.marks.length;p++)e.allowsMarkType(a.marks[p].type)||this.step(new ee(i,c,a.marks[p]))}else o.push(new Lt(i,c,S.empty));i=c}if(!n.validEnd){var l=n.fillBefore(v.empty,!0);this.replace(i,i,new S(l,0,0))}for(var f=o.length-1;f>=0;f--)this.step(o[f]);return this},Vt.prototype.replace=function(t,e,n){void 0===e&&(e=t),void 0===n&&(n=S.empty);var r=function(t,e,n,r){if(void 0===n&&(n=e),void 0===r&&(r=S.empty),e==n&&!r.size)return null;var o=t.resolve(e),i=t.resolve(n);return ne(o,i,r)?new Lt(e,n,r):new re(o,i,r).fit()}(this.doc,t,e,n);return r&&this.step(r),this},Vt.prototype.replaceWith=function(t,e,n){return this.replace(t,e,new S(v.from(n),0,0))},Vt.prototype.delete=function(t,e){return this.replace(t,e,S.empty)},Vt.prototype.insert=function(t,e){return this.replaceWith(t,t,e)};var re=function(t,e,n){this.$to=e,this.$from=t,this.unplaced=n,this.frontier=[];for(var r=0;r<=t.depth;r++){var o=t.node(r);this.frontier.push({type:o.type,match:o.contentMatchAt(t.indexAfter(r))})}this.placed=v.empty;for(var i=t.depth;i>0;i--)this.placed=v.from(t.node(i).copy(this.placed))},oe={depth:{configurable:!0}};function ie(t,e,n){return 0==e?t.cutByIndex(n):t.replaceChild(0,t.firstChild.copy(ie(t.firstChild.content,e-1,n)))}function se(t,e,n){return 0==e?t.append(n):t.replaceChild(t.childCount-1,t.lastChild.copy(se(t.lastChild.content,e-1,n)))}function ae(t,e){for(var n=0;n<e;n++)t=t.firstChild.content;return t}function ce(t,e,n){if(e<=0)return t;var r=t.content;return e>1&&(r=r.replaceChild(0,ce(r.firstChild,e-1,1==r.childCount?n-1:0))),e>0&&(r=t.type.contentMatch.fillBefore(r).append(r),n<=0&&(r=r.append(t.type.contentMatch.matchFragment(r).fillBefore(v.empty,!0)))),t.copy(r)}function he(t,e,n,r,o){var i=t.node(e),s=o?t.indexAfter(e):t.index(e);if(s==i.childCount&&!n.compatibleContent(i.type))return null;var a=r.fillBefore(i.content,!0,s);return a&&!function(t,e,n){for(var r=n;r<e.childCount;r++)if(!t.allowsMarks(e.child(r).marks))return!0;return!1}(n,i.content,s)?a:null}function pe(t,e,n,r,o){if(e<n){var i=t.firstChild;t=t.replaceChild(0,i.copy(pe(i.content,e+1,n,r,i)))}if(e>r){var s=o.contentMatchAt(0),a=s.fillBefore(t).append(t);t=a.append(s.matchFragment(a).fillBefore(v.empty,!0))}return t}function le(t,e){for(var n=[],r=Math.min(t.depth,e.depth);r>=0;r--){var o=t.start(r);if(o<t.pos-(t.depth-r)||e.end(r)>e.pos+(e.depth-r)||t.node(r).type.spec.isolating||e.node(r).type.spec.isolating)break;o==e.start(r)&&n.push(r)}return n}oe.depth.get=function(){return this.frontier.length-1},re.prototype.fit=function(){for(;this.unplaced.size;){var t=this.findFittable();t?this.placeNodes(t):this.openMore()||this.dropNode()}var e=this.mustMoveInline(),n=this.placed.size-this.depth-this.$from.depth,r=this.$from,o=this.close(e<0?this.$to:r.doc.resolve(e));if(!o)return null;for(var i=this.placed,s=r.depth,a=o.depth;s&&a&&1==i.childCount;)i=i.firstChild.content,s--,a--;var c=new S(i,s,a);return e>-1?new Jt(r.pos,e,this.$to.pos,this.$to.end(),c,n):c.size||r.pos!=this.$to.pos?new Lt(r.pos,o.pos,c):void 0},re.prototype.findFittable=function(){for(var t=1;t<=2;t++)for(var e=this.unplaced.openStart;e>=0;e--)for(var n=void 0,r=(e?(n=ae(this.unplaced.content,e-1).firstChild).content:this.unplaced.content).firstChild,o=this.depth;o>=0;o--){var i=this.frontier[o],s=i.type,a=i.match,c=void 0,h=void 0;if(1==t&&(r?a.matchType(r.type)||(h=a.fillBefore(v.from(r),!1)):s.compatibleContent(n.type)))return{sliceDepth:e,frontierDepth:o,parent:n,inject:h};if(2==t&&r&&(c=a.findWrapping(r.type)))return{sliceDepth:e,frontierDepth:o,parent:n,wrap:c};if(n&&a.matchType(n.type))break}},re.prototype.openMore=function(){var t=this.unplaced,e=t.content,n=t.openStart,r=t.openEnd,o=ae(e,n);return!(!o.childCount||o.firstChild.isLeaf)&&(this.unplaced=new S(e,n+1,Math.max(r,o.size+n>=e.size-r?n+1:0)),!0)},re.prototype.dropNode=function(){var t=this.unplaced,e=t.content,n=t.openStart,r=t.openEnd,o=ae(e,n);if(o.childCount<=1&&n>0){var i=e.size-n<=n+o.size;this.unplaced=new S(ie(e,n-1,1),n-1,i?n-1:r)}else this.unplaced=new S(ie(e,n,1),n,r)},re.prototype.placeNodes=function(t){for(var e=t.sliceDepth,n=t.frontierDepth,r=t.parent,o=t.inject,i=t.wrap;this.depth>n;)this.closeFrontierNode();if(i)for(var s=0;s<i.length;s++)this.openFrontierNode(i[s]);var a=this.unplaced,c=r?r.content:a.content,h=a.openStart-e,p=0,l=[],f=this.frontier[n],u=f.match,d=f.type;if(o){for(var m=0;m<o.childCount;m++)l.push(o.child(m));u=u.matchFragment(o)}for(var y=c.size+e-(a.content.size-a.openEnd);p<c.childCount;){var g=c.child(p),w=u.matchType(g.type);if(!w)break;(++p>1||0==h||g.content.size)&&(u=w,l.push(ce(g.mark(d.allowedMarks(g.marks)),1==p?h:0,p==c.childCount?y:-1)))}var b=p==c.childCount;b||(y=-1),this.placed=se(this.placed,n,v.from(l)),this.frontier[n].match=u,b&&y<0&&r&&r.type==this.frontier[this.depth].type&&this.frontier.length>1&&this.closeFrontierNode();for(var k=0,x=c;k<y;k++){var O=x.lastChild;this.frontier.push({type:O.type,match:O.contentMatchAt(O.childCount)}),x=O.content}this.unplaced=b?0==e?S.empty:new S(ie(a.content,e-1,1),e-1,y<0?a.openEnd:e-1):new S(ie(a.content,e,p),a.openStart,a.openEnd)},re.prototype.mustMoveInline=function(){if(!this.$to.parent.isTextblock||this.$to.end()==this.$to.pos)return-1;var t,e=this.frontier[this.depth];if(!e.type.isTextblock||!he(this.$to,this.$to.depth,e.type,e.match,!1)||this.$to.depth==this.depth&&(t=this.findCloseLevel(this.$to))&&t.depth==this.depth)return-1;for(var n=this.$to.depth,r=this.$to.after(n);n>1&&r==this.$to.end(--n);)++r;return r},re.prototype.findCloseLevel=function(t){t:for(var e=Math.min(this.depth,t.depth);e>=0;e--){var n=this.frontier[e],r=n.match,o=n.type,i=e<t.depth&&t.end(e+1)==t.pos+(t.depth-(e+1)),s=he(t,e,o,r,i);if(s){for(var a=e-1;a>=0;a--){var c=this.frontier[a],h=c.match,p=he(t,a,c.type,h,!0);if(!p||p.childCount)continue t}return{depth:e,fit:s,move:i?t.doc.resolve(t.after(e+1)):t}}}},re.prototype.close=function(t){var e=this.findCloseLevel(t);if(!e)return null;for(;this.depth>e.depth;)this.closeFrontierNode();e.fit.childCount&&(this.placed=se(this.placed,e.depth,e.fit)),t=e.move;for(var n=e.depth+1;n<=t.depth;n++){var r=t.node(n),o=r.type.contentMatch.fillBefore(r.content,!0,t.index(n));this.openFrontierNode(r.type,r.attrs,o)}return t},re.prototype.openFrontierNode=function(t,e,n){var r=this.frontier[this.depth];r.match=r.match.matchType(t),this.placed=se(this.placed,this.depth,v.from(t.create(e,n))),this.frontier.push({type:t,match:t.contentMatch})},re.prototype.closeFrontierNode=function(){var t=this.frontier.pop().match.fillBefore(v.empty,!0);t.childCount&&(this.placed=se(this.placed,this.frontier.length,t))},Object.defineProperties(re.prototype,oe),Vt.prototype.replaceRange=function(t,e,n){if(!n.size)return this.deleteRange(t,e);var r=this.doc.resolve(t),o=this.doc.resolve(e);if(ne(r,o,n))return this.step(new Lt(t,e,n));var i=le(r,this.doc.resolve(e));0==i[i.length-1]&&i.pop();var s=-(r.depth+1);i.unshift(s);for(var a=r.depth,c=r.pos-1;a>0;a--,c--){var h=r.node(a).type.spec;if(h.defining||h.isolating)break;i.indexOf(a)>-1?s=a:r.before(a)==c&&i.splice(1,0,-a)}for(var p=i.indexOf(s),l=[],f=n.openStart,u=n.content,d=0;;d++){var m=u.firstChild;if(l.push(m),d==n.openStart)break;u=m.content}f>0&&l[f-1].type.spec.defining&&r.node(p).type!=l[f-1].type?f-=1:f>=2&&l[f-1].isTextblock&&l[f-2].type.spec.defining&&r.node(p).type!=l[f-2].type&&(f-=2);for(var v=n.openStart;v>=0;v--){var y=(v+f+1)%(n.openStart+1),g=l[y];if(g)for(var w=0;w<i.length;w++){var b=i[(w+p)%i.length],k=!0;b<0&&(k=!1,b=-b);var x=r.node(b-1),O=r.index(b-1);if(x.canReplaceWith(O,O,g.type,g.marks))return this.replace(r.before(b),k?o.after(b):e,new S(pe(n.content,0,n.openStart,y),y,n.openEnd))}}for(var M=this.steps.length,C=i.length-1;C>=0&&(this.replace(t,e,n),!(this.steps.length>M));C--){var N=i[C];C<0||(t=r.before(N),e=o.after(N))}return this},Vt.prototype.replaceRangeWith=function(t,e,n){if(!n.isInline&&t==e&&this.doc.resolve(t).parent.content.size){var r=function(t,e,n){var r=t.resolve(e);if(r.parent.canReplaceWith(r.index(),r.index(),n))return e;if(0==r.parentOffset)for(var o=r.depth-1;o>=0;o--){var i=r.index(o);if(r.node(o).canReplaceWith(i,i,n))return r.before(o+1);if(i>0)return null}if(r.parentOffset==r.parent.content.size)for(var s=r.depth-1;s>=0;s--){var a=r.indexAfter(s);if(r.node(s).canReplaceWith(a,a,n))return r.after(s+1);if(a<r.node(s).childCount)return null}}(this.doc,t,n.type);null!=r&&(t=e=r)}return this.replaceRange(t,e,new S(v.from(n),0,0))},Vt.prototype.deleteRange=function(t,e){for(var n=this.doc.resolve(t),r=this.doc.resolve(e),o=le(n,r),i=0;i<o.length;i++){var s=o[i],a=i==o.length-1;if(a&&0==s||n.node(s).type.contentMatch.validEnd)return this.delete(n.start(s),r.end(s));if(s>0&&(a||n.node(s-1).canReplace(n.index(s-1),r.indexAfter(s-1))))return this.delete(n.before(s),r.after(s))}for(var c=1;c<=n.depth&&c<=r.depth;c++)if(t-n.start(c)==n.depth-c&&e>n.end(c)&&r.end(c)-e!=r.depth-c)return this.delete(n.before(c),e);return this.delete(t,e)};var fe=Object.create(null),ue=function(t,e,n){this.ranges=n||[new me(t.min(e),t.max(e))],this.$anchor=t,this.$head=e},de={anchor:{configurable:!0},head:{configurable:!0},from:{configurable:!0},to:{configurable:!0},$from:{configurable:!0},$to:{configurable:!0},empty:{configurable:!0}};de.anchor.get=function(){return this.$anchor.pos},de.head.get=function(){return this.$head.pos},de.from.get=function(){return this.$from.pos},de.to.get=function(){return this.$to.pos},de.$from.get=function(){return this.ranges[0].$from},de.$to.get=function(){return this.ranges[0].$to},de.empty.get=function(){for(var t=this.ranges,e=0;e<t.length;e++)if(t[e].$from.pos!=t[e].$to.pos)return!1;return!0},ue.prototype.content=function(){return this.$from.node(0).slice(this.from,this.to,!0)},ue.prototype.replace=function(t,e){void 0===e&&(e=S.empty);for(var n=e.content.lastChild,r=null,o=0;o<e.openEnd;o++)r=n,n=n.lastChild;for(var i=t.steps.length,s=this.ranges,a=0;a<s.length;a++){var c=s[a],h=c.$from,p=c.$to,l=t.mapping.slice(i);t.replaceRange(l.map(h.pos),l.map(p.pos),a?S.empty:e),0==a&&Se(t,i,(n?n.isInline:r&&r.isTextblock)?-1:1)}},ue.prototype.replaceWith=function(t,e){for(var n=t.steps.length,r=this.ranges,o=0;o<r.length;o++){var i=r[o],s=i.$from,a=i.$to,c=t.mapping.slice(n),h=c.map(s.pos),p=c.map(a.pos);o?t.deleteRange(h,p):(t.replaceRangeWith(h,p,e),Se(t,n,e.isInline?-1:1))}},ue.findFrom=function(t,e,n){var r=t.parent.inlineContent?new ve(t):xe(t.node(0),t.parent,t.pos,t.index(),e,n);if(r)return r;for(var o=t.depth-1;o>=0;o--){var i=e<0?xe(t.node(0),t.node(o),t.before(o+1),t.index(o),e,n):xe(t.node(0),t.node(o),t.after(o+1),t.index(o)+1,e,n);if(i)return i}},ue.near=function(t,e){return void 0===e&&(e=1),this.findFrom(t,e)||this.findFrom(t,-e)||new be(t.node(0))},ue.atStart=function(t){return xe(t,t,0,0,1)||new be(t)},ue.atEnd=function(t){return xe(t,t,t.content.size,t.childCount,-1)||new be(t)},ue.fromJSON=function(t,e){if(!e||!e.type)throw new RangeError("Invalid input for Selection.fromJSON");var n=fe[e.type];if(!n)throw new RangeError("No selection type "+e.type+" defined");return n.fromJSON(t,e)},ue.jsonID=function(t,e){if(t in fe)throw new RangeError("Duplicate use of selection JSON ID "+t);return fe[t]=e,e.prototype.jsonID=t,e},ue.prototype.getBookmark=function(){return ve.between(this.$anchor,this.$head).getBookmark()},Object.defineProperties(ue.prototype,de),ue.prototype.visible=!0;var me=function(t,e){this.$from=t,this.$to=e},ve=function(t){function e(e,n){void 0===n&&(n=e),t.call(this,e,n)}t&&(e.__proto__=t),e.prototype=Object.create(t&&t.prototype),e.prototype.constructor=e;var n={$cursor:{configurable:!0}};return n.$cursor.get=function(){return this.$anchor.pos==this.$head.pos?this.$head:null},e.prototype.map=function(n,r){var o=n.resolve(r.map(this.head));if(!o.parent.inlineContent)return t.near(o);var i=n.resolve(r.map(this.anchor));return new e(i.parent.inlineContent?i:o,o)},e.prototype.replace=function(e,n){if(void 0===n&&(n=S.empty),t.prototype.replace.call(this,e,n),n==S.empty){var r=this.$from.marksAcross(this.$to);r&&e.ensureMarks(r)}},e.prototype.eq=function(t){return t instanceof e&&t.anchor==this.anchor&&t.head==this.head},e.prototype.getBookmark=function(){return new ye(this.anchor,this.head)},e.prototype.toJSON=function(){return{type:"text",anchor:this.anchor,head:this.head}},e.fromJSON=function(t,n){if("number"!=typeof n.anchor||"number"!=typeof n.head)throw new RangeError("Invalid input for TextSelection.fromJSON");return new e(t.resolve(n.anchor),t.resolve(n.head))},e.create=function(t,e,n){void 0===n&&(n=e);var r=t.resolve(e);return new this(r,n==e?r:t.resolve(n))},e.between=function(n,r,o){var i=n.pos-r.pos;if(o&&!i||(o=i>=0?1:-1),!r.parent.inlineContent){var s=t.findFrom(r,o,!0)||t.findFrom(r,-o,!0);if(!s)return t.near(r,o);r=s.$head}return n.parent.inlineContent||(0==i||(n=(t.findFrom(n,-o,!0)||t.findFrom(n,o,!0)).$anchor).pos<r.pos!=i<0)&&(n=r),new e(n,r)},Object.defineProperties(e.prototype,n),e}(ue);ue.jsonID("text",ve);var ye=function(t,e){this.anchor=t,this.head=e};ye.prototype.map=function(t){return new ye(t.map(this.anchor),t.map(this.head))},ye.prototype.resolve=function(t){return ve.between(t.resolve(this.anchor),t.resolve(this.head))};var ge=function(t){function e(e){var n=e.nodeAfter,r=e.node(0).resolve(e.pos+n.nodeSize);t.call(this,e,r),this.node=n}return t&&(e.__proto__=t),e.prototype=Object.create(t&&t.prototype),e.prototype.constructor=e,e.prototype.map=function(n,r){var o=r.mapResult(this.anchor),i=o.deleted,s=o.pos,a=n.resolve(s);return i?t.near(a):new e(a)},e.prototype.content=function(){return new S(v.from(this.node),0,0)},e.prototype.eq=function(t){return t instanceof e&&t.anchor==this.anchor},e.prototype.toJSON=function(){return{type:"node",anchor:this.anchor}},e.prototype.getBookmark=function(){return new we(this.anchor)},e.fromJSON=function(t,n){if("number"!=typeof n.anchor)throw new RangeError("Invalid input for NodeSelection.fromJSON");return new e(t.resolve(n.anchor))},e.create=function(t,e){return new this(t.resolve(e))},e.isSelectable=function(t){return!t.isText&&!1!==t.type.spec.selectable},e}(ue);ge.prototype.visible=!1,ue.jsonID("node",ge);var we=function(t){this.anchor=t};we.prototype.map=function(t){var e=t.mapResult(this.anchor),n=e.deleted,r=e.pos;return n?new ye(r,r):new we(r)},we.prototype.resolve=function(t){var e=t.resolve(this.anchor),n=e.nodeAfter;return n&&ge.isSelectable(n)?new ge(e):ue.near(e)};var be=function(t){function e(e){t.call(this,e.resolve(0),e.resolve(e.content.size))}return t&&(e.__proto__=t),e.prototype=Object.create(t&&t.prototype),e.prototype.constructor=e,e.prototype.replace=function(e,n){if(void 0===n&&(n=S.empty),n==S.empty){e.delete(0,e.doc.content.size);var r=t.atStart(e.doc);r.eq(e.selection)||e.setSelection(r)}else t.prototype.replace.call(this,e,n)},e.prototype.toJSON=function(){return{type:"all"}},e.fromJSON=function(t){return new e(t)},e.prototype.map=function(t){return new e(t)},e.prototype.eq=function(t){return t instanceof e},e.prototype.getBookmark=function(){return ke},e}(ue);ue.jsonID("all",be);var ke={map:function(){return this},resolve:function(t){return new be(t)}};function xe(t,e,n,r,o,i){if(e.inlineContent)return ve.create(t,n);for(var s=r-(o>0?0:1);o>0?s<e.childCount:s>=0;s+=o){var a=e.child(s);if(a.isAtom){if(!i&&ge.isSelectable(a))return ge.create(t,n-(o<0?a.nodeSize:0))}else{var c=xe(t,a,n+o,o<0?a.childCount:0,o,i);if(c)return c}n+=a.nodeSize*o}}function Se(t,e,n){var r=t.steps.length-1;if(!(r<e)){var o,i=t.steps[r];if(i instanceof Lt||i instanceof Jt)t.mapping.maps[r].forEach((function(t,e,n,r){null==o&&(o=r)})),t.setSelection(ue.near(t.doc.resolve(o),n))}}var Oe=function(t){function e(e){t.call(this,e.doc),this.time=Date.now(),this.curSelection=e.selection,this.curSelectionFor=0,this.storedMarks=e.storedMarks,this.updated=0,this.meta=Object.create(null)}t&&(e.__proto__=t),e.prototype=Object.create(t&&t.prototype),e.prototype.constructor=e;var n={selection:{configurable:!0},selectionSet:{configurable:!0},storedMarksSet:{configurable:!0},isGeneric:{configurable:!0},scrolledIntoView:{configurable:!0}};return n.selection.get=function(){return this.curSelectionFor<this.steps.length&&(this.curSelection=this.curSelection.map(this.doc,this.mapping.slice(this.curSelectionFor)),this.curSelectionFor=this.steps.length),this.curSelection},e.prototype.setSelection=function(t){if(t.$from.doc!=this.doc)throw new RangeError("Selection passed to setSelection must point at the current document");return this.curSelection=t,this.curSelectionFor=this.steps.length,this.updated=-3&(1|this.updated),this.storedMarks=null,this},n.selectionSet.get=function(){return(1&this.updated)>0},e.prototype.setStoredMarks=function(t){return this.storedMarks=t,this.updated|=2,this},e.prototype.ensureMarks=function(t){return k.sameSet(this.storedMarks||this.selection.$from.marks(),t)||this.setStoredMarks(t),this},e.prototype.addStoredMark=function(t){return this.ensureMarks(t.addToSet(this.storedMarks||this.selection.$head.marks()))},e.prototype.removeStoredMark=function(t){return this.ensureMarks(t.removeFromSet(this.storedMarks||this.selection.$head.marks()))},n.storedMarksSet.get=function(){return(2&this.updated)>0},e.prototype.addStep=function(e,n){t.prototype.addStep.call(this,e,n),this.updated=-3&this.updated,this.storedMarks=null},e.prototype.setTime=function(t){return this.time=t,this},e.prototype.replaceSelection=function(t){return this.selection.replace(this,t),this},e.prototype.replaceSelectionWith=function(t,e){var n=this.selection;return!1!==e&&(t=t.mark(this.storedMarks||(n.empty?n.$from.marks():n.$from.marksAcross(n.$to)||k.none))),n.replaceWith(this,t),this},e.prototype.deleteSelection=function(){return this.selection.replace(this),this},e.prototype.insertText=function(t,e,n){void 0===n&&(n=e);var r=this.doc.type.schema;if(null==e)return t?this.replaceSelectionWith(r.text(t),!0):this.deleteSelection();if(!t)return this.deleteRange(e,n);var o=this.storedMarks;if(!o){var i=this.doc.resolve(e);o=n==e?i.marks():i.marksAcross(this.doc.resolve(n))}return this.replaceRangeWith(e,n,r.text(t,o)),this.selection.empty||this.setSelection(ue.near(this.selection.$to)),this},e.prototype.setMeta=function(t,e){return this.meta["string"==typeof t?t:t.key]=e,this},e.prototype.getMeta=function(t){return this.meta["string"==typeof t?t:t.key]},n.isGeneric.get=function(){for(var t in this.meta)return!1;return!0},e.prototype.scrollIntoView=function(){return this.updated|=4,this},n.scrolledIntoView.get=function(){return(4&this.updated)>0},Object.defineProperties(e.prototype,n),e}(Vt);function Me(t,e){return e&&t?t.bind(e):t}var Ce=function(t,e,n){this.name=t,this.init=Me(e.init,n),this.apply=Me(e.apply,n)},Ne=[new Ce("doc",{init:function(t){return t.doc||t.schema.topNodeType.createAndFill()},apply:function(t){return t.doc}}),new Ce("selection",{init:function(t,e){return t.selection||ue.atStart(e.doc)},apply:function(t){return t.selection}}),new Ce("storedMarks",{init:function(t){return t.storedMarks||null},apply:function(t,e,n,r){return r.selection.$cursor?t.storedMarks:null}}),new Ce("scrollToSelection",{init:function(){return 0},apply:function(t,e){return t.scrolledIntoView?e+1:e}})],Te=function(t,e){var n=this;this.schema=t,this.fields=Ne.concat(),this.plugins=[],this.pluginsByKey=Object.create(null),e&&e.forEach((function(t){if(n.pluginsByKey[t.key])throw new RangeError("Adding different instances of a keyed plugin ("+t.key+")");n.plugins.push(t),n.pluginsByKey[t.key]=t,t.spec.state&&n.fields.push(new Ce(t.key,t.spec.state,t))}))},De=function(t){this.config=t},Ee={schema:{configurable:!0},plugins:{configurable:!0},tr:{configurable:!0}};Ee.schema.get=function(){return this.config.schema},Ee.plugins.get=function(){return this.config.plugins},De.prototype.apply=function(t){return this.applyTransaction(t).state},De.prototype.filterTransaction=function(t,e){void 0===e&&(e=-1);for(var n=0;n<this.config.plugins.length;n++)if(n!=e){var r=this.config.plugins[n];if(r.spec.filterTransaction&&!r.spec.filterTransaction.call(r,t,this))return!1}return!0},De.prototype.applyTransaction=function(t){if(!this.filterTransaction(t))return{state:this,transactions:[]};for(var e=[t],n=this.applyInner(t),r=null;;){for(var o=!1,i=0;i<this.config.plugins.length;i++){var s=this.config.plugins[i];if(s.spec.appendTransaction){var a=r?r[i].n:0,c=r?r[i].state:this,h=a<e.length&&s.spec.appendTransaction.call(s,a?e.slice(a):e,c,n);if(h&&n.filterTransaction(h,i)){if(h.setMeta("appendedTransaction",t),!r){r=[];for(var p=0;p<this.config.plugins.length;p++)r.push(p<i?{state:n,n:e.length}:{state:this,n:0})}e.push(h),n=n.applyInner(h),o=!0}r&&(r[i]={state:n,n:e.length})}}if(!o)return{state:n,transactions:e}}},De.prototype.applyInner=function(t){if(!t.before.eq(this.doc))throw new RangeError("Applying a mismatched transaction");for(var e=new De(this.config),n=this.config.fields,r=0;r<n.length;r++){var o=n[r];e[o.name]=o.apply(t,this[o.name],this,e)}for(var i=0;i<Ae.length;i++)Ae[i](this,t,e);return e},Ee.tr.get=function(){return new Oe(this)},De.create=function(t){for(var e=new Te(t.schema||t.doc.type.schema,t.plugins),n=new De(e),r=0;r<e.fields.length;r++)n[e.fields[r].name]=e.fields[r].init(t,n);return n},De.prototype.reconfigure=function(t){for(var e=new Te(t.schema||this.schema,t.plugins),n=e.fields,r=new De(e),o=0;o<n.length;o++){var i=n[o].name;r[i]=this.hasOwnProperty(i)?this[i]:n[o].init(t,r)}return r},De.prototype.toJSON=function(t){var e={doc:this.doc.toJSON(),selection:this.selection.toJSON()};if(this.storedMarks&&(e.storedMarks=this.storedMarks.map((function(t){return t.toJSON()}))),t&&"object"==typeof t)for(var n in t){if("doc"==n||"selection"==n)throw new RangeError("The JSON fields `doc` and `selection` are reserved");var r=t[n],o=r.spec.state;o&&o.toJSON&&(e[n]=o.toJSON.call(r,this[r.key]))}return e},De.fromJSON=function(t,e,n){if(!e)throw new RangeError("Invalid input for EditorState.fromJSON");if(!t.schema)throw new RangeError("Required config field 'schema' missing");var r=new Te(t.schema,t.plugins),o=new De(r);return r.fields.forEach((function(r){if("doc"==r.name)o.doc=q.fromJSON(t.schema,e.doc);else if("selection"==r.name)o.selection=ue.fromJSON(o.doc,e.selection);else if("storedMarks"==r.name)e.storedMarks&&(o.storedMarks=e.storedMarks.map(t.schema.markFromJSON));else{if(n)for(var i in n){var s=n[i],a=s.spec.state;if(s.key==r.name&&a&&a.fromJSON&&Object.prototype.hasOwnProperty.call(e,i))return void(o[r.name]=a.fromJSON.call(s,t,e[i],o))}o[r.name]=r.init(t,o)}})),o},De.addApplyListener=function(t){Ae.push(t)},De.removeApplyListener=function(t){var e=Ae.indexOf(t);e>-1&&Ae.splice(e,1)},Object.defineProperties(De.prototype,Ee);var Ae=[];function Re(t,e,n){for(var r in t){var o=t[r];o instanceof Function?o=o.bind(e):"handleDOMEvents"==r&&(o=Re(o,e,{})),n[r]=o}return n}var Ie=function(t){this.props={},t.props&&Re(t.props,this,this.props),this.spec=t,this.key=t.key?t.key.key:function(t){if(t in ze)return t+"$"+ ++ze[t];return ze[t]=0,t+"$"}("plugin")};Ie.prototype.getState=function(t){return t[this.key]};var ze=Object.create(null);var Pe={};if("undefined"!=typeof navigator&&"undefined"!=typeof document){var Ve=/Edge\/(\d+)/.exec(navigator.userAgent),Be=/MSIE \d/.test(navigator.userAgent),$e=/Trident\/(?:[7-9]|\d{2,})\..*rv:(\d+)/.exec(navigator.userAgent);Pe.mac=/Mac/.test(navigator.platform);var Fe=Pe.ie=!!(Be||$e||Ve);Pe.ie_version=Be?document.documentMode||6:$e?+$e[1]:Ve?+Ve[1]:null,Pe.gecko=!Fe&&/gecko\/(\d+)/i.test(navigator.userAgent),Pe.gecko_version=Pe.gecko&&+(/Firefox\/(\d+)/.exec(navigator.userAgent)||[0,0])[1];var _e=!Fe&&/Chrome\/(\d+)/.exec(navigator.userAgent);Pe.chrome=!!_e,Pe.chrome_version=_e&&+_e[1],Pe.ios=!Fe&&/AppleWebKit/.test(navigator.userAgent)&&/Mobile\/\w+/.test(navigator.userAgent),Pe.android=/Android \d/.test(navigator.userAgent),Pe.webkit="webkitFontSmoothing"in document.documentElement.style,Pe.safari=/Apple Computer/.test(navigator.vendor),Pe.webkit_version=Pe.webkit&&+(/\bAppleWebKit\/(\d+)/.exec(navigator.userAgent)||[0,0])[1]}var je=function(t){for(var e=0;;e++)if(!(t=t.previousSibling))return e},Le=function(t){var e=t.parentNode;return e&&11==e.nodeType?e.host:e},Je=null,qe=function(t,e,n){var r=Je||(Je=document.createRange());return r.setEnd(t,null==n?t.nodeValue.length:n),r.setStart(t,e||0),r},We=function(t,e,n,r){return n&&(He(t,e,n,r,-1)||He(t,e,n,r,1))},Ke=/^(img|br|input|textarea|hr)$/i;function He(t,e,n,r,o){for(;;){if(t==n&&e==r)return!0;if(e==(o<0?0:Ue(t))){var i=t.parentNode;if(1!=i.nodeType||Ge(t)||Ke.test(t.nodeName)||"false"==t.contentEditable)return!1;e=je(t)+(o<0?0:1),t=i}else{if(1!=t.nodeType)return!1;if("false"==(t=t.childNodes[e+(o<0?-1:0)]).contentEditable)return!1;e=o<0?Ue(t):0}}}function Ue(t){return 3==t.nodeType?t.nodeValue.length:t.childNodes.length}function Ge(t){for(var e,n=t;n&&!(e=n.pmViewDesc);n=n.parentNode);return e&&e.node&&e.node.isBlock&&(e.dom==t||e.contentDOM==t)}var Xe=function(t){var e=t.isCollapsed;return e&&Pe.chrome&&t.rangeCount&&!t.getRangeAt(0).collapsed&&(e=!1),e};function Ye(t,e){var n=document.createEvent("Event");return n.initEvent("keydown",!0,!0),n.keyCode=t,n.key=n.code=e,n}function Qe(t){return{left:0,right:t.documentElement.clientWidth,top:0,bottom:t.documentElement.clientHeight}}function Ze(t,e){return"number"==typeof t?t:t[e]}function tn(t){var e=t.getBoundingClientRect();return{left:e.left,right:e.left+t.clientWidth,top:e.top,bottom:e.top+t.clientHeight}}function en(t,e,n){for(var r=t.someProp("scrollThreshold")||0,o=t.someProp("scrollMargin")||5,i=t.dom.ownerDocument,s=n||t.dom;s;s=Le(s))if(1==s.nodeType){var a=s==i.body||1!=s.nodeType,c=a?Qe(i):tn(s),h=0,p=0;if(e.top<c.top+Ze(r,"top")?p=-(c.top-e.top+Ze(o,"top")):e.bottom>c.bottom-Ze(r,"bottom")&&(p=e.bottom-c.bottom+Ze(o,"bottom")),e.left<c.left+Ze(r,"left")?h=-(c.left-e.left+Ze(o,"left")):e.right>c.right-Ze(r,"right")&&(h=e.right-c.right+Ze(o,"right")),h||p)if(a)i.defaultView.scrollBy(h,p);else{var l=s.scrollLeft,f=s.scrollTop;p&&(s.scrollTop+=p),h&&(s.scrollLeft+=h);var u=s.scrollLeft-l,d=s.scrollTop-f;e={left:e.left-u,top:e.top-d,right:e.right-u,bottom:e.bottom-d}}if(a)break}}function nn(t){for(var e=[],n=t.ownerDocument;t&&(e.push({dom:t,top:t.scrollTop,left:t.scrollLeft}),t!=n);t=Le(t));return e}function rn(t,e){for(var n=0;n<t.length;n++){var r=t[n],o=r.dom,i=r.top,s=r.left;o.scrollTop!=i+e&&(o.scrollTop=i+e),o.scrollLeft!=s&&(o.scrollLeft=s)}}var on=null;function sn(t,e){for(var n,r,o=2e8,i=0,s=e.top,a=e.top,c=t.firstChild,h=0;c;c=c.nextSibling,h++){var p=void 0;if(1==c.nodeType)p=c.getClientRects();else{if(3!=c.nodeType)continue;p=qe(c).getClientRects()}for(var l=0;l<p.length;l++){var f=p[l];if(f.top<=s&&f.bottom>=a){s=Math.max(f.bottom,s),a=Math.min(f.top,a);var u=f.left>e.left?f.left-e.left:f.right<e.left?e.left-f.right:0;if(u<o){n=c,o=u,r=u&&3==n.nodeType?{left:f.right<e.left?f.right:f.left,top:e.top}:e,1==c.nodeType&&u&&(i=h+(e.left>=(f.left+f.right)/2?1:0));continue}}!n&&(e.left>=f.right&&e.top>=f.top||e.left>=f.left&&e.top>=f.bottom)&&(i=h+1)}}return n&&3==n.nodeType?function(t,e){for(var n=t.nodeValue.length,r=document.createRange(),o=0;o<n;o++){r.setEnd(t,o+1),r.setStart(t,o);var i=pn(r,1);if(i.top!=i.bottom&&an(e,i))return{node:t,offset:o+(e.left>=(i.left+i.right)/2?1:0)}}return{node:t,offset:0}}(n,r):!n||o&&1==n.nodeType?{node:t,offset:i}:sn(n,r)}function an(t,e){return t.left>=e.left-1&&t.left<=e.right+1&&t.top>=e.top-1&&t.top<=e.bottom+1}function cn(t,e,n){var r=t.childNodes.length;if(r&&n.top<n.bottom)for(var o=Math.max(0,Math.min(r-1,Math.floor(r*(e.top-n.top)/(n.bottom-n.top))-2)),i=o;;){var s=t.childNodes[i];if(1==s.nodeType)for(var a=s.getClientRects(),c=0;c<a.length;c++){var h=a[c];if(an(e,h))return cn(s,e,h)}if((i=(i+1)%r)==o)break}return t}function hn(t,e){var n,r,o,i,s=t.root;if(s.caretPositionFromPoint)try{var a=s.caretPositionFromPoint(e.left,e.top);a&&(o=(n=a).offsetNode,i=n.offset)}catch(t){}if(!o&&s.caretRangeFromPoint){var c=s.caretRangeFromPoint(e.left,e.top);c&&(o=(r=c).startContainer,i=r.startOffset)}var h,p=s.elementFromPoint(e.left,e.top+1);if(!p||!t.dom.contains(1!=p.nodeType?p.parentNode:p)){var l=t.dom.getBoundingClientRect();if(!an(e,l))return null;if(!(p=cn(t.dom,e,l)))return null}if(Pe.safari&&p.draggable&&(o=i=null),p=function(t,e){var n=t.parentNode;return n&&/^li$/i.test(n.nodeName)&&e.left<t.getBoundingClientRect().left?n:t}(p,e),o){if(Pe.gecko&&1==o.nodeType&&(i=Math.min(i,o.childNodes.length))<o.childNodes.length){var f,u=o.childNodes[i];"IMG"==u.nodeName&&(f=u.getBoundingClientRect()).right<=e.left&&f.bottom>e.top&&i++}o==t.dom&&i==o.childNodes.length-1&&1==o.lastChild.nodeType&&e.top>o.lastChild.getBoundingClientRect().bottom?h=t.state.doc.content.size:0!=i&&1==o.nodeType&&"BR"==o.childNodes[i-1].nodeName||(h=function(t,e,n,r){for(var o=-1,i=e;i!=t.dom;){var s=t.docView.nearestDesc(i,!0);if(!s)return null;if(s.node.isBlock&&s.parent){var a=s.dom.getBoundingClientRect();if(a.left>r.left||a.top>r.top)o=s.posBefore;else{if(!(a.right<r.left||a.bottom<r.top))break;o=s.posAfter}}i=s.dom.parentNode}return o>-1?o:t.docView.posFromDOM(e,n)}(t,o,i,e))}null==h&&(h=function(t,e,n){var r=sn(e,n),o=r.node,i=r.offset,s=-1;if(1==o.nodeType&&!o.firstChild){var a=o.getBoundingClientRect();s=a.left!=a.right&&n.left>(a.left+a.right)/2?1:-1}return t.docView.posFromDOM(o,i,s)}(t,p,e));var d=t.docView.nearestDesc(p,!0);return{pos:h,inside:d?d.posAtStart-d.border:-1}}function pn(t,e){var n=t.getClientRects();return n.length?n[e<0?0:n.length-1]:t.getBoundingClientRect()}var ln=/[\u0590-\u05f4\u0600-\u06ff\u0700-\u08ac]/;function fn(t,e,n){var r=t.docView.domFromPos(e),o=r.node,i=r.offset,s=t.state.doc.resolve(e),a=s.parent.inlineContent,c=Pe.webkit||Pe.gecko;if(3==o.nodeType&&c&&ln.test(o.nodeValue)){var h=pn(qe(o,i,i),n);if(Pe.gecko&&i&&/\s/.test(o.nodeValue[i-1])&&i<o.nodeValue.length){var p=pn(qe(o,i-1,i-1),-1);if(p.top==h.top){var l=pn(qe(o,i,i+1),-1);if(l.top!=h.top)return un(l,l.left<p.left)}}return h}if(a){for(var f=s.depth?t.docView.domAfterPos(s.before()):t.dom;n<0&&!i&&o!=f;)i=je(o),o=o.parentNode;for(;n>=0&&i==Ue(o)&&o!=f;)i=je(o)+1,o=o.parentNode}if(3==o.nodeType)return n<0?un(pn(qe(o,i-1,i),1),!1):un(pn(qe(o,i,i+1),-1),!0);if(!a){if(i&&(n<0||i==Ue(o))){var u=o.childNodes[i-1];if(1==u.nodeType)return dn(u.getBoundingClientRect(),!1)}if(i<Ue(o)){var d=o.childNodes[i];if(1==d.nodeType)return dn(d.getBoundingClientRect(),!0)}return dn(o.getBoundingClientRect(),n>=0)}if(i&&(n<0||i==Ue(o))){var m=o.childNodes[i-1],v=3==m.nodeType?qe(m,Ue(m)-(c?0:1)):1==m.nodeType&&"BR"!=m.nodeName?m:null;if(v)return un(pn(v,1),!1)}if(i<Ue(o)){var y=o.childNodes[i],g=3==y.nodeType?qe(y,0,c?0:1):1==y.nodeType?y:null;if(g)return un(pn(g,-1),!0)}return un(pn(3==o.nodeType?qe(o):o,-n),n>=0)}function un(t,e){if(0==t.width)return t;var n=e?t.left:t.right;return{top:t.top,bottom:t.bottom,left:n,right:n}}function dn(t,e){if(0==t.height)return t;var n=e?t.top:t.bottom;return{top:n,bottom:n,left:t.left,right:t.right}}function mn(t,e,n){var r=t.state,o=t.root.activeElement;r!=e&&t.updateState(e),o!=t.dom&&t.focus();try{return n()}finally{r!=e&&t.updateState(r),o!=t.dom&&o&&o.focus()}}var vn=/[\u0590-\u08ac]/;var yn=null,gn=null,wn=!1;function bn(t,e,n){return yn==e&&gn==n?wn:(yn=e,gn=n,wn="up"==n||"down"==n?function(t,e,n){var r=e.selection,o="up"==n?r.$anchor.min(r.$head):r.$anchor.max(r.$head);return mn(t,e,(function(){for(var e=t.docView.domFromPos(o.pos).node;;){var r=t.docView.nearestDesc(e,!0);if(!r)break;if(r.node.isBlock){e=r.dom;break}e=r.dom.parentNode}for(var i=fn(t,o.pos,1),s=e.firstChild;s;s=s.nextSibling){var a=void 0;if(1==s.nodeType)a=s.getClientRects();else{if(3!=s.nodeType)continue;a=qe(s,0,s.nodeValue.length).getClientRects()}for(var c=0;c<a.length;c++){var h=a[c];if(h.bottom>h.top&&("up"==n?h.bottom<i.top+1:h.top>i.bottom-1))return!1}}return!0}))}(t,e,n):function(t,e,n){var r=e.selection.$head;if(!r.parent.isTextblock)return!1;var o=r.parentOffset,i=!o,s=o==r.parent.content.size,a=getSelection();return vn.test(r.parent.textContent)&&a.modify?mn(t,e,(function(){var e=a.getRangeAt(0),o=a.focusNode,i=a.focusOffset,s=a.caretBidiLevel;a.modify("move",n,"character");var c=!(r.depth?t.docView.domAfterPos(r.before()):t.dom).contains(1==a.focusNode.nodeType?a.focusNode:a.focusNode.parentNode)||o==a.focusNode&&i==a.focusOffset;return a.removeAllRanges(),a.addRange(e),null!=s&&(a.caretBidiLevel=s),c})):"left"==n||"backward"==n?i:s}(t,e,n))}var kn=function(t,e,n,r){this.parent=t,this.children=e,this.dom=n,n.pmViewDesc=this,this.contentDOM=r,this.dirty=0},xn={beforePosition:{configurable:!0},size:{configurable:!0},border:{configurable:!0},posBefore:{configurable:!0},posAtStart:{configurable:!0},posAfter:{configurable:!0},posAtEnd:{configurable:!0},contentLost:{configurable:!0}};kn.prototype.matchesWidget=function(){return!1},kn.prototype.matchesMark=function(){return!1},kn.prototype.matchesNode=function(){return!1},kn.prototype.matchesHack=function(){return!1},xn.beforePosition.get=function(){return!1},kn.prototype.parseRule=function(){return null},kn.prototype.stopEvent=function(){return!1},xn.size.get=function(){for(var t=0,e=0;e<this.children.length;e++)t+=this.children[e].size;return t},xn.border.get=function(){return 0},kn.prototype.destroy=function(){this.parent=null,this.dom.pmViewDesc==this&&(this.dom.pmViewDesc=null);for(var t=0;t<this.children.length;t++)this.children[t].destroy()},kn.prototype.posBeforeChild=function(t){for(var e=0,n=this.posAtStart;e<this.children.length;e++){var r=this.children[e];if(r==t)return n;n+=r.size}},xn.posBefore.get=function(){return this.parent.posBeforeChild(this)},xn.posAtStart.get=function(){return this.parent?this.parent.posBeforeChild(this)+this.border:0},xn.posAfter.get=function(){return this.posBefore+this.size},xn.posAtEnd.get=function(){return this.posAtStart+this.size-2*this.border},kn.prototype.localPosFromDOM=function(t,e,n){if(this.contentDOM&&this.contentDOM.contains(1==t.nodeType?t:t.parentNode)){if(n<0){var r,o;if(t==this.contentDOM)r=t.childNodes[e-1];else{for(;t.parentNode!=this.contentDOM;)t=t.parentNode;r=t.previousSibling}for(;r&&(!(o=r.pmViewDesc)||o.parent!=this);)r=r.previousSibling;return r?this.posBeforeChild(o)+o.size:this.posAtStart}var i,s;if(t==this.contentDOM)i=t.childNodes[e];else{for(;t.parentNode!=this.contentDOM;)t=t.parentNode;i=t.nextSibling}for(;i&&(!(s=i.pmViewDesc)||s.parent!=this);)i=i.nextSibling;return i?this.posBeforeChild(s):this.posAtEnd}var a;if(this.contentDOM&&this.contentDOM!=this.dom&&this.dom.contains(this.contentDOM))a=2&t.compareDocumentPosition(this.contentDOM);else if(this.dom.firstChild){if(0==e)for(var c=t;;c=c.parentNode){if(c==this.dom){a=!1;break}if(c.parentNode.firstChild!=c)break}if(null==a&&e==t.childNodes.length)for(var h=t;;h=h.parentNode){if(h==this.dom){a=!0;break}if(h.parentNode.lastChild!=h)break}}return(null==a?n>0:a)?this.posAtEnd:this.posAtStart},kn.prototype.nearestDesc=function(t,e){for(var n=!0,r=t;r;r=r.parentNode){var o=this.getDesc(r);if(o&&(!e||o.node)){if(!n||!o.nodeDOM||(1==o.nodeDOM.nodeType?o.nodeDOM.contains(1==t.nodeType?t:t.parentNode):o.nodeDOM==t))return o;n=!1}}},kn.prototype.getDesc=function(t){for(var e=t.pmViewDesc,n=e;n;n=n.parent)if(n==this)return e},kn.prototype.posFromDOM=function(t,e,n){for(var r=t;r;r=r.parentNode){var o=this.getDesc(r);if(o)return o.localPosFromDOM(t,e,n)}return-1},kn.prototype.descAt=function(t){for(var e=0,n=0;e<this.children.length;e++){var r=this.children[e],o=n+r.size;if(n==t&&o!=n){for(;!r.border&&r.children.length;)r=r.children[0];return r}if(t<o)return r.descAt(t-n-r.border);n=o}},kn.prototype.domFromPos=function(t){if(!this.contentDOM)return{node:this.dom,offset:0};for(var e=0,n=0;;n++){if(e==t){for(;n<this.children.length&&(this.children[n].beforePosition||this.children[n].dom.parentNode!=this.contentDOM);)n++;return{node:this.contentDOM,offset:n==this.children.length?this.contentDOM.childNodes.length:je(this.children[n].dom)}}if(n==this.children.length)throw new Error("Invalid position "+t);var r=this.children[n],o=e+r.size;if(t<o)return r.domFromPos(t-e-r.border);e=o}},kn.prototype.parseRange=function(t,e,n){if(void 0===n&&(n=0),0==this.children.length)return{node:this.contentDOM,from:t,to:e,fromOffset:0,toOffset:this.contentDOM.childNodes.length};for(var r=-1,o=-1,i=n,s=0;;s++){var a=this.children[s],c=i+a.size;if(-1==r&&t<=c){var h=i+a.border;if(t>=h&&e<=c-a.border&&a.node&&a.contentDOM&&this.contentDOM.contains(a.contentDOM))return a.parseRange(t,e,h);t=i;for(var p=s;p>0;p--){var l=this.children[p-1];if(l.size&&l.dom.parentNode==this.contentDOM&&!l.emptyChildAt(1)){r=je(l.dom)+1;break}t-=l.size}-1==r&&(r=0)}if(r>-1&&(c>e||s==this.children.length-1)){e=c;for(var f=s+1;f<this.children.length;f++){var u=this.children[f];if(u.size&&u.dom.parentNode==this.contentDOM&&!u.emptyChildAt(-1)){o=je(u.dom);break}e+=u.size}-1==o&&(o=this.contentDOM.childNodes.length);break}i=c}return{node:this.contentDOM,from:t,to:e,fromOffset:r,toOffset:o}},kn.prototype.emptyChildAt=function(t){if(this.border||!this.contentDOM||!this.children.length)return!1;var e=this.children[t<0?0:this.children.length-1];return 0==e.size||e.emptyChildAt(t)},kn.prototype.domAfterPos=function(t){var e=this.domFromPos(t),n=e.node,r=e.offset;if(1!=n.nodeType||r==n.childNodes.length)throw new RangeError("No node after pos "+t);return n.childNodes[r]},kn.prototype.setSelection=function(t,e,n,r){for(var o=Math.min(t,e),i=Math.max(t,e),s=0,a=0;s<this.children.length;s++){var c=this.children[s],h=a+c.size;if(o>a&&i<h)return c.setSelection(t-a-c.border,e-a-c.border,n,r);a=h}var p=this.domFromPos(t),l=this.domFromPos(e),f=n.getSelection(),u=!1;if((Pe.gecko||Pe.safari)&&t==e){var d=p.node.childNodes[p.offset-1];u=d&&("BR"==d.nodeName||"false"==d.contentEditable)}if(r||u&&Pe.safari||!We(p.node,p.offset,f.anchorNode,f.anchorOffset)||!We(l.node,l.offset,f.focusNode,f.focusOffset)){var m=!1;if((f.extend||t==e)&&!u){f.collapse(p.node,p.offset);try{t!=e&&f.extend(l.node,l.offset),m=!0}catch(t){if(!(t instanceof DOMException))throw t}}if(!m){if(t>e){var v=p;p=l,l=v}var y=document.createRange();y.setEnd(l.node,l.offset),y.setStart(p.node,p.offset),f.removeAllRanges(),f.addRange(y)}}},kn.prototype.ignoreMutation=function(t){return!this.contentDOM&&"selection"!=t.type},xn.contentLost.get=function(){return this.contentDOM&&this.contentDOM!=this.dom&&!this.dom.contains(this.contentDOM)},kn.prototype.markDirty=function(t,e){for(var n=0,r=0;r<this.children.length;r++){var o=this.children[r],i=n+o.size;if(n==i?t<=i&&e>=n:t<i&&e>n){var s=n+o.border,a=i-o.border;if(t>=s&&e<=a)return this.dirty=t==n||e==i?2:1,void(t!=s||e!=a||!o.contentLost&&o.dom.parentNode==this.contentDOM?o.markDirty(t-s,e-s):o.dirty=3);o.dirty=3}n=i}this.dirty=2},kn.prototype.markParentsDirty=function(){for(var t=1,e=this.parent;e;e=e.parent,t++){var n=1==t?2:1;e.dirty<n&&(e.dirty=n)}},Object.defineProperties(kn.prototype,xn);var Sn=[],On=function(t){function e(e,n,r,o){var i,s=n.type.toDOM;if("function"==typeof s&&(s=s(r,(function(){return i?i.parent?i.parent.posBeforeChild(i):void 0:o}))),!n.type.spec.raw){if(1!=s.nodeType){var a=document.createElement("span");a.appendChild(s),s=a}s.contentEditable=!1,s.classList.add("ProseMirror-widget")}t.call(this,e,Sn,s,null),this.widget=n,i=this}t&&(e.__proto__=t),e.prototype=Object.create(t&&t.prototype),e.prototype.constructor=e;var n={beforePosition:{configurable:!0}};return n.beforePosition.get=function(){return this.widget.type.side<0},e.prototype.matchesWidget=function(t){return 0==this.dirty&&t.type.eq(this.widget.type)},e.prototype.parseRule=function(){return{ignore:!0}},e.prototype.stopEvent=function(t){var e=this.widget.spec.stopEvent;return!!e&&e(t)},e.prototype.ignoreMutation=function(t){return"selection"!=t.type||this.widget.spec.ignoreSelection},Object.defineProperties(e.prototype,n),e}(kn),Mn=function(t){function e(e,n,r,o){t.call(this,e,Sn,n,null),this.textDOM=r,this.text=o}t&&(e.__proto__=t),e.prototype=Object.create(t&&t.prototype),e.prototype.constructor=e;var n={size:{configurable:!0}};return n.size.get=function(){return this.text.length},e.prototype.localPosFromDOM=function(t,e){return t!=this.textDOM?this.posAtStart+(e?this.size:0):this.posAtStart+e},e.prototype.domFromPos=function(t){return{node:this.textDOM,offset:t}},e.prototype.ignoreMutation=function(t){return"characterData"===t.type&&t.target.nodeValue==t.oldValue},Object.defineProperties(e.prototype,n),e}(kn),Cn=function(t){function e(e,n,r,o){t.call(this,e,[],r,o),this.mark=n}return t&&(e.__proto__=t),e.prototype=Object.create(t&&t.prototype),e.prototype.constructor=e,e.create=function(t,n,r,o){var i=o.nodeViews[n.type.name],s=i&&i(n,o,r);return s&&s.dom||(s=Nt.renderSpec(document,n.type.spec.toDOM(n,r))),new e(t,n,s.dom,s.contentDOM||s.dom)},e.prototype.parseRule=function(){return{mark:this.mark.type.name,attrs:this.mark.attrs,contentElement:this.contentDOM}},e.prototype.matchesMark=function(t){return 3!=this.dirty&&this.mark.eq(t)},e.prototype.markDirty=function(e,n){if(t.prototype.markDirty.call(this,e,n),0!=this.dirty){for(var r=this.parent;!r.node;)r=r.parent;r.dirty<this.dirty&&(r.dirty=this.dirty),this.dirty=0}},e.prototype.slice=function(t,n,r){var o=e.create(this.parent,this.mark,!0,r),i=this.children,s=this.size;n<s&&(i=Jn(i,n,s,r)),t>0&&(i=Jn(i,0,t,r));for(var a=0;a<i.length;a++)i[a].parent=o;return o.children=i,o},e}(kn),Nn=function(t){function e(e,n,r,o,i,s,a,c,h){t.call(this,e,n.isLeaf?Sn:[],i,s),this.nodeDOM=a,this.node=n,this.outerDeco=r,this.innerDeco=o,s&&this.updateChildren(c,h)}t&&(e.__proto__=t),e.prototype=Object.create(t&&t.prototype),e.prototype.constructor=e;var n={size:{configurable:!0},border:{configurable:!0}};return e.create=function(t,n,r,o,i,s){var a,c,h=i.nodeViews[n.type.name],p=h&&h(n,i,(function(){return c?c.parent?c.parent.posBeforeChild(c):void 0:s}),r),l=p&&p.dom,f=p&&p.contentDOM;if(n.isText)if(l){if(3!=l.nodeType)throw new RangeError("Text must be rendered as a DOM text node")}else l=document.createTextNode(n.text);else l||(l=(a=Nt.renderSpec(document,n.type.spec.toDOM(n))).dom,f=a.contentDOM);f||n.isText||"BR"==l.nodeName||(l.hasAttribute("contenteditable")||(l.contentEditable=!1),n.type.spec.draggable&&(l.draggable=!0));var u=l;return l=$n(l,r,n),p?c=new An(t,n,r,o,l,f,u,p,i,s+1):n.isText?new Dn(t,n,r,o,l,u,i):new e(t,n,r,o,l,f,u,i,s+1)},e.prototype.parseRule=function(){var t=this;if(this.node.type.spec.reparseInView)return null;var e={node:this.node.type.name,attrs:this.node.attrs};return this.node.type.spec.code&&(e.preserveWhitespace="full"),this.contentDOM&&!this.contentLost?e.contentElement=this.contentDOM:e.getContent=function(){return t.contentDOM?v.empty:t.node.content},e},e.prototype.matchesNode=function(t,e,n){return 0==this.dirty&&t.eq(this.node)&&Fn(e,this.outerDeco)&&n.eq(this.innerDeco)},n.size.get=function(){return this.node.nodeSize},n.border.get=function(){return this.node.isLeaf?0:1},e.prototype.updateChildren=function(t,e){var n=this,r=this.node.inlineContent,o=e,i=r&&t.composing&&this.localCompositionNode(t,e),s=new jn(this,i&&i.node);!function(t,e,n,r){var o=e.locals(t),i=0;if(0==o.length){for(var s=0;s<t.childCount;s++){var a=t.child(s);r(a,o,e.forChild(i,a),s),i+=a.nodeSize}return}for(var c=0,h=[],p=null,l=0;;){if(c<o.length&&o[c].to==i){for(var f=o[c++],u=void 0;c<o.length&&o[c].to==i;)(u||(u=[f])).push(o[c++]);if(u){u.sort(Ln);for(var d=0;d<u.length;d++)n(u[d],l,!!p)}else n(f,l,!!p)}var m=void 0,v=void 0;if(p)v=-1,m=p,p=null;else{if(!(l<t.childCount))break;v=l,m=t.child(l++)}for(var y=0;y<h.length;y++)h[y].to<=i&&h.splice(y--,1);for(;c<o.length&&o[c].from<=i&&o[c].to>i;)h.push(o[c++]);var g=i+m.nodeSize;if(m.isText){var w=g;c<o.length&&o[c].from<w&&(w=o[c].from);for(var b=0;b<h.length;b++)h[b].to<w&&(w=h[b].to);w<g&&(p=m.cut(w-i),m=m.cut(0,w-i),g=w,v=-1)}r(m,h.length?m.isInline&&!m.isLeaf?h.filter((function(t){return!t.inline})):h.slice():Sn,e.forChild(i,m),v),i=g}}(this.node,this.innerDeco,(function(e,i,a){e.spec.marks?s.syncToMarks(e.spec.marks,r,t):e.type.side>=0&&!a&&s.syncToMarks(i==n.node.childCount?k.none:n.node.child(i).marks,r,t),s.placeWidget(e,t,o)}),(function(e,n,i,a){s.syncToMarks(e.marks,r,t),s.findNodeMatch(e,n,i,a)||s.updateNextNode(e,n,i,t,a)||s.addNode(e,n,i,t,o),o+=e.nodeSize})),s.syncToMarks(Sn,r,t),this.node.isTextblock&&s.addTextblockHacks(),s.destroyRest(),(s.changed||2==this.dirty)&&(i&&this.protectLocalComposition(t,i),Rn(this.contentDOM,this.children,t),Pe.ios&&function(t){if("UL"==t.nodeName||"OL"==t.nodeName){var e=t.style.cssText;t.style.cssText=e+"; list-style: square !important",window.getComputedStyle(t).listStyle,t.style.cssText=e}}(this.dom))},e.prototype.localCompositionNode=function(t,e){var n=t.state.selection,r=n.from,o=n.to;if(!(!(t.state.selection instanceof ve)||r<e||o>e+this.node.content.size)){var i=t.root.getSelection(),s=function(t,e){for(;;){if(3==t.nodeType)return t;if(1==t.nodeType&&e>0){if(t.childNodes.length>e&&3==t.childNodes[e].nodeType)return t.childNodes[e];e=Ue(t=t.childNodes[e-1])}else{if(!(1==t.nodeType&&e<t.childNodes.length))return null;t=t.childNodes[e],e=0}}}(i.focusNode,i.focusOffset);if(s&&this.dom.contains(s.parentNode)){var a=s.nodeValue,c=function(t,e,n,r){for(var o=0,i=0;o<t.childCount&&i<=r;){var s=t.child(o++),a=i;if(i+=s.nodeSize,s.isText){for(var c=s.text;o<t.childCount;){var h=t.child(o++);if(i+=h.nodeSize,!h.isText)break;c+=h.text}if(i>=n){var p=c.lastIndexOf(e,r-a);if(p>=0&&p+e.length+a>=n)return a+p}}}return-1}(this.node.content,a,r-e,o-e);return c<0?null:{node:s,pos:c,text:a}}}},e.prototype.protectLocalComposition=function(t,e){var n=e.node,r=e.pos,o=e.text;if(!this.getDesc(n)){for(var i=n;i.parentNode!=this.contentDOM;i=i.parentNode){for(;i.previousSibling;)i.parentNode.removeChild(i.previousSibling);for(;i.nextSibling;)i.parentNode.removeChild(i.nextSibling);i.pmViewDesc&&(i.pmViewDesc=null)}var s=new Mn(this,i,n,o);t.compositionNodes.push(s),this.children=Jn(this.children,r,r+o.length,t,s)}},e.prototype.update=function(t,e,n,r){return!(3==this.dirty||!t.sameMarkup(this.node))&&(this.updateInner(t,e,n,r),!0)},e.prototype.updateInner=function(t,e,n,r){this.updateOuterDeco(e),this.node=t,this.innerDeco=n,this.contentDOM&&this.updateChildren(r,this.posAtStart),this.dirty=0},e.prototype.updateOuterDeco=function(t){if(!Fn(t,this.outerDeco)){var e=1!=this.nodeDOM.nodeType,n=this.dom;this.dom=Vn(this.dom,this.nodeDOM,Pn(this.outerDeco,this.node,e),Pn(t,this.node,e)),this.dom!=n&&(n.pmViewDesc=null,this.dom.pmViewDesc=this),this.outerDeco=t}},e.prototype.selectNode=function(){this.nodeDOM.classList.add("ProseMirror-selectednode"),!this.contentDOM&&this.node.type.spec.draggable||(this.dom.draggable=!0)},e.prototype.deselectNode=function(){this.nodeDOM.classList.remove("ProseMirror-selectednode"),!this.contentDOM&&this.node.type.spec.draggable||this.dom.removeAttribute("draggable")},Object.defineProperties(e.prototype,n),e}(kn);function Tn(t,e,n,r,o){return $n(r,e,t),new Nn(null,t,e,n,r,r,r,o,0)}var Dn=function(t){function e(e,n,r,o,i,s,a){t.call(this,e,n,r,o,i,null,s,a)}return t&&(e.__proto__=t),e.prototype=Object.create(t&&t.prototype),e.prototype.constructor=e,e.prototype.parseRule=function(){for(var t=this.nodeDOM.parentNode;t&&t!=this.dom&&!t.pmIsDeco;)t=t.parentNode;return{skip:t||!0}},e.prototype.update=function(t,e,n,r){return!(3==this.dirty||0!=this.dirty&&!this.inParent()||!t.sameMarkup(this.node))&&(this.updateOuterDeco(e),0==this.dirty&&t.text==this.node.text||t.text==this.nodeDOM.nodeValue||(this.nodeDOM.nodeValue=t.text,r.trackWrites==this.nodeDOM&&(r.trackWrites=null)),this.node=t,this.dirty=0,!0)},e.prototype.inParent=function(){for(var t=this.parent.contentDOM,e=this.nodeDOM;e;e=e.parentNode)if(e==t)return!0;return!1},e.prototype.domFromPos=function(t){return{node:this.nodeDOM,offset:t}},e.prototype.localPosFromDOM=function(e,n,r){return e==this.nodeDOM?this.posAtStart+Math.min(n,this.node.text.length):t.prototype.localPosFromDOM.call(this,e,n,r)},e.prototype.ignoreMutation=function(t){return"characterData"!=t.type&&"selection"!=t.type},e.prototype.slice=function(t,n,r){var o=this.node.cut(t,n),i=document.createTextNode(o.text);return new e(this.parent,o,this.outerDeco,this.innerDeco,i,i,r)},e}(Nn),En=function(t){function e(){t.apply(this,arguments)}return t&&(e.__proto__=t),e.prototype=Object.create(t&&t.prototype),e.prototype.constructor=e,e.prototype.parseRule=function(){return{ignore:!0}},e.prototype.matchesHack=function(){return 0==this.dirty},e}(kn),An=function(t){function e(e,n,r,o,i,s,a,c,h,p){t.call(this,e,n,r,o,i,s,a,h,p),this.spec=c}return t&&(e.__proto__=t),e.prototype=Object.create(t&&t.prototype),e.prototype.constructor=e,e.prototype.update=function(e,n,r,o){if(3==this.dirty)return!1;if(this.spec.update){var i=this.spec.update(e,n);return i&&this.updateInner(e,n,r,o),i}return!(!this.contentDOM&&!e.isLeaf)&&t.prototype.update.call(this,e,n,r,o)},e.prototype.selectNode=function(){this.spec.selectNode?this.spec.selectNode():t.prototype.selectNode.call(this)},e.prototype.deselectNode=function(){this.spec.deselectNode?this.spec.deselectNode():t.prototype.deselectNode.call(this)},e.prototype.setSelection=function(e,n,r,o){this.spec.setSelection?this.spec.setSelection(e,n,r):t.prototype.setSelection.call(this,e,n,r,o)},e.prototype.destroy=function(){this.spec.destroy&&this.spec.destroy(),t.prototype.destroy.call(this)},e.prototype.stopEvent=function(t){return!!this.spec.stopEvent&&this.spec.stopEvent(t)},e.prototype.ignoreMutation=function(e){return this.spec.ignoreMutation?this.spec.ignoreMutation(e):t.prototype.ignoreMutation.call(this,e)},e}(Nn);function Rn(t,e,n){for(var r=t.firstChild,o=!1,i=0;i<e.length;i++){var s=e[i],a=s.dom;if(a.parentNode==t){for(;a!=r;)r=_n(r),o=!0;r=r.nextSibling}else o=!0,t.insertBefore(a,r);if(s instanceof Cn){var c=r?r.previousSibling:t.lastChild;Rn(s.contentDOM,s.children,n),r=c?c.nextSibling:t.firstChild}}for(;r;)r=_n(r),o=!0;o&&n.trackWrites==t&&(n.trackWrites=null)}function In(t){t&&(this.nodeName=t)}In.prototype=Object.create(null);var zn=[new In];function Pn(t,e,n){if(0==t.length)return zn;for(var r=n?zn[0]:new In,o=[r],i=0;i<t.length;i++){var s=t[i].type.attrs,a=r;if(s)for(var c in s.nodeName&&o.push(a=new In(s.nodeName)),s){var h=s[c];null!=h&&(n&&1==o.length&&o.push(a=r=new In(e.isInline?"span":"div")),"class"==c?a.class=(a.class?a.class+" ":"")+h:"style"==c?a.style=(a.style?a.style+";":"")+h:"nodeName"!=c&&(a[c]=h))}}return o}function Vn(t,e,n,r){if(n==zn&&r==zn)return e;for(var o=e,i=0;i<r.length;i++){var s=r[i],a=n[i];if(i){var c=void 0;a&&a.nodeName==s.nodeName&&o!=t&&(c=o.parentNode)&&c.tagName.toLowerCase()==s.nodeName||((c=document.createElement(s.nodeName)).pmIsDeco=!0,c.appendChild(o),a=zn[0]),o=c}Bn(o,a||zn[0],s)}return o}function Bn(t,e,n){for(var r in e)"class"==r||"style"==r||"nodeName"==r||r in n||t.removeAttribute(r);for(var o in n)"class"!=o&&"style"!=o&&"nodeName"!=o&&n[o]!=e[o]&&t.setAttribute(o,n[o]);if(e.class!=n.class){for(var i=e.class?e.class.split(" "):Sn,s=n.class?n.class.split(" "):Sn,a=0;a<i.length;a++)-1==s.indexOf(i[a])&&t.classList.remove(i[a]);for(var c=0;c<s.length;c++)-1==i.indexOf(s[c])&&t.classList.add(s[c])}if(e.style!=n.style){if(e.style)for(var h,p=/\s*([\w\-\xa1-\uffff]+)\s*:(?:"(?:\\.|[^"])*"|'(?:\\.|[^'])*'|\(.*?\)|[^;])*/g;h=p.exec(e.style);)t.style.removeProperty(h[1]);n.style&&(t.style.cssText+=n.style)}}function $n(t,e,n){return Vn(t,t,zn,Pn(e,n,1!=t.nodeType))}function Fn(t,e){if(t.length!=e.length)return!1;for(var n=0;n<t.length;n++)if(!t[n].type.eq(e[n].type))return!1;return!0}function _n(t){var e=t.nextSibling;return t.parentNode.removeChild(t),e}var jn=function(t,e){this.top=t,this.lock=e,this.index=0,this.stack=[],this.changed=!1;var n=function(t,e){for(var n=[],r=t.childCount,o=e.length-1;r>0&&o>=0;o--){var i=e[o],s=i.node;if(s){if(s!=t.child(r-1))break;n.push(i),--r}}return{nodes:n.reverse(),offset:r}}(t.node.content,t.children);this.preMatched=n.nodes,this.preMatchOffset=n.offset};function Ln(t,e){return t.type.side-e.type.side}function Jn(t,e,n,r,o){for(var i=[],s=0,a=0;s<t.length;s++){var c=t[s],h=a,p=a+=c.size;h>=n||p<=e?i.push(c):(h<e&&i.push(c.slice(0,e-h,r)),o&&(i.push(o),o=null),p>n&&i.push(c.slice(n-h,c.size,r)))}return i}function qn(t,e){var n=t.root.getSelection(),r=t.state.doc;if(!n.focusNode)return null;var o=t.docView.nearestDesc(n.focusNode),i=o&&0==o.size,s=t.docView.posFromDOM(n.focusNode,n.focusOffset);if(s<0)return null;var a,c,h=r.resolve(s);if(Xe(n)){for(a=h;o&&!o.node;)o=o.parent;if(o&&o.node.isAtom&&ge.isSelectable(o.node)&&o.parent&&(!o.node.isInline||!function(t,e,n){for(var r=0==e,o=e==Ue(t);r||o;){if(t==n)return!0;var i=je(t);if(!(t=t.parentNode))return!1;r=r&&0==i,o=o&&i==Ue(t)}}(n.focusNode,n.focusOffset,o.dom))){var p=o.posBefore;c=new ge(s==p?h:r.resolve(p))}}else{var l=t.docView.posFromDOM(n.anchorNode,n.anchorOffset);if(l<0)return null;a=r.resolve(l)}c||(c=Qn(t,a,h,"pointer"==e||t.state.selection.head<h.pos&&!i?1:-1));return c}function Wn(t,e){var n=t.state.selection;if(Xn(t,n),t.editable?t.hasFocus():Zn(t)&&document.activeElement&&document.activeElement.contains(t.dom)){if(t.domObserver.disconnectSelection(),t.cursorWrapper)!function(t){var e=t.root.getSelection(),n=document.createRange(),r=t.cursorWrapper.dom,o="IMG"==r.nodeName;o?n.setEnd(r.parentNode,je(r)+1):n.setEnd(r,0);n.collapse(!1),e.removeAllRanges(),e.addRange(n),!o&&!t.state.selection.visible&&Pe.ie&&Pe.ie_version<=11&&(r.disabled=!0,r.disabled=!1)}(t);else{var r,o,i=n.anchor,s=n.head;!Kn||n instanceof ve||(n.$from.parent.inlineContent||(r=Hn(t,n.from)),n.empty||n.$from.parent.inlineContent||(o=Hn(t,n.to))),t.docView.setSelection(i,s,t.root,e),Kn&&(r&&Gn(r),o&&Gn(o)),n.visible?t.dom.classList.remove("ProseMirror-hideselection"):(t.dom.classList.add("ProseMirror-hideselection"),"onselectionchange"in document&&function(t){var e=t.dom.ownerDocument;e.removeEventListener("selectionchange",t.hideSelectionGuard);var n=t.root.getSelection(),r=n.anchorNode,o=n.anchorOffset;e.addEventListener("selectionchange",t.hideSelectionGuard=function(){n.anchorNode==r&&n.anchorOffset==o||(e.removeEventListener("selectionchange",t.hideSelectionGuard),t.dom.classList.remove("ProseMirror-hideselection"))})}(t))}t.domObserver.setCurSelection(),t.domObserver.connectSelection()}}jn.prototype.getPreMatch=function(t){return t>=this.preMatchOffset?this.preMatched[t-this.preMatchOffset]:null},jn.prototype.destroyBetween=function(t,e){if(t!=e){for(var n=t;n<e;n++)this.top.children[n].destroy();this.top.children.splice(t,e-t),this.changed=!0}},jn.prototype.destroyRest=function(){this.destroyBetween(this.index,this.top.children.length)},jn.prototype.syncToMarks=function(t,e,n){for(var r=0,o=this.stack.length>>1,i=Math.min(o,t.length);r<i&&(r==o-1?this.top:this.stack[r+1<<1]).matchesMark(t[r])&&!1!==t[r].type.spec.spanning;)r++;for(;r<o;)this.destroyRest(),this.top.dirty=0,this.index=this.stack.pop(),this.top=this.stack.pop(),o--;for(;o<t.length;){this.stack.push(this.top,this.index+1);for(var s=-1,a=this.index;a<Math.min(this.index+3,this.top.children.length);a++)if(this.top.children[a].matchesMark(t[o])){s=a;break}if(s>-1)s>this.index&&(this.changed=!0,this.destroyBetween(this.index,s)),this.top=this.top.children[this.index];else{var c=Cn.create(this.top,t[o],e,n);this.top.children.splice(this.index,0,c),this.top=c,this.changed=!0}this.index=0,o++}},jn.prototype.findNodeMatch=function(t,e,n,r){var o=-1,i=r<0?void 0:this.getPreMatch(r),s=this.top.children;if(i&&i.matchesNode(t,e,n))o=s.indexOf(i);else for(var a=this.index,c=Math.min(s.length,a+5);a<c;a++){var h=s[a];if(h.matchesNode(t,e,n)&&this.preMatched.indexOf(h)<0){o=a;break}}return!(o<0)&&(this.destroyBetween(this.index,o),this.index++,!0)},jn.prototype.updateNextNode=function(t,e,n,r,o){for(var i=this.index;i<this.top.children.length;i++){var s=this.top.children[i];if(s instanceof Nn){var a=this.preMatched.indexOf(s);if(a>-1&&a+this.preMatchOffset!=o)return!1;var c=s.dom;if(!(this.lock&&(c==this.lock||1==c.nodeType&&c.contains(this.lock.parentNode))&&!(t.isText&&s.node&&s.node.isText&&s.nodeDOM.nodeValue==t.text&&3!=s.dirty&&Fn(e,s.outerDeco)))&&s.update(t,e,n,r))return this.destroyBetween(this.index,i),s.dom!=c&&(this.changed=!0),this.index++,!0;break}}return!1},jn.prototype.addNode=function(t,e,n,r,o){this.top.children.splice(this.index++,0,Nn.create(this.top,t,e,n,r,o)),this.changed=!0},jn.prototype.placeWidget=function(t,e,n){var r=this.index<this.top.children.length?this.top.children[this.index]:null;if(!r||!r.matchesWidget(t)||t!=r.widget&&r.widget.type.toDOM.parentNode){var o=new On(this.top,t,e,n);this.top.children.splice(this.index++,0,o),this.changed=!0}else this.index++},jn.prototype.addTextblockHacks=function(){for(var t=this.top.children[this.index-1];t instanceof Cn;)t=t.children[t.children.length-1];if(!t||!(t instanceof Dn)||/\n$/.test(t.node.text))if(this.index<this.top.children.length&&this.top.children[this.index].matchesHack())this.index++;else{var e=document.createElement("br");this.top.children.splice(this.index++,0,new En(this.top,Sn,e,null)),this.changed=!0}};var Kn=Pe.safari||Pe.chrome&&Pe.chrome_version<63;function Hn(t,e){var n=t.docView.domFromPos(e),r=n.node,o=n.offset,i=o<r.childNodes.length?r.childNodes[o]:null,s=o?r.childNodes[o-1]:null;if(Pe.safari&&i&&"false"==i.contentEditable)return Un(i);if(!(i&&"false"!=i.contentEditable||s&&"false"!=s.contentEditable)){if(i)return Un(i);if(s)return Un(s)}}function Un(t){return t.contentEditable="true",Pe.safari&&t.draggable&&(t.draggable=!1,t.wasDraggable=!0),t}function Gn(t){t.contentEditable="false",t.wasDraggable&&(t.draggable=!0,t.wasDraggable=null)}function Xn(t,e){if(e instanceof ge){var n=t.docView.descAt(e.from);n!=t.lastSelectedViewDesc&&(Yn(t),n&&n.selectNode(),t.lastSelectedViewDesc=n)}else Yn(t)}function Yn(t){t.lastSelectedViewDesc&&(t.lastSelectedViewDesc.parent&&t.lastSelectedViewDesc.deselectNode(),t.lastSelectedViewDesc=null)}function Qn(t,e,n,r){return t.someProp("createSelectionBetween",(function(r){return r(t,e,n)}))||ve.between(e,n,r)}function Zn(t){var e=t.root.getSelection();if(!e.anchorNode)return!1;try{return t.dom.contains(3==e.anchorNode.nodeType?e.anchorNode.parentNode:e.anchorNode)&&(t.editable||t.dom.contains(3==e.focusNode.nodeType?e.focusNode.parentNode:e.focusNode))}catch(t){return!1}}function tr(t,e){var n=t.selection,r=n.$anchor,o=n.$head,i=e>0?r.max(o):r.min(o),s=i.parent.inlineContent?i.depth?t.doc.resolve(e>0?i.after():i.before()):null:i;return s&&ue.findFrom(s,e)}function er(t,e){return t.dispatch(t.state.tr.setSelection(e).scrollIntoView()),!0}function nr(t,e,n){var r=t.state.selection;if(!(r instanceof ve)){if(r instanceof ge&&r.node.isInline)return er(t,new ve(e>0?r.$to:r.$from));var o=tr(t.state,e);return!!o&&er(t,o)}if(!r.empty||n.indexOf("s")>-1)return!1;if(t.endOfTextblock(e>0?"right":"left")){var i=tr(t.state,e);return!!(i&&i instanceof ge)&&er(t,i)}if(!(Pe.mac&&n.indexOf("m")>-1)){var s,a=r.$head,c=a.textOffset?null:e<0?a.nodeBefore:a.nodeAfter;if(!c||c.isText)return!1;var h=e<0?a.pos-c.nodeSize:a.pos;return!!(c.isAtom||(s=t.docView.descAt(h))&&!s.contentDOM)&&(ge.isSelectable(c)?er(t,new ge(e<0?t.state.doc.resolve(a.pos-c.nodeSize):a)):!!Pe.webkit&&er(t,new ve(t.state.doc.resolve(e<0?h:h+c.nodeSize))))}}function rr(t){return 3==t.nodeType?t.nodeValue.length:t.childNodes.length}function or(t){var e=t.pmViewDesc;return e&&0==e.size&&(t.nextSibling||"BR"!=t.nodeName)}function ir(t){var e=t.root.getSelection(),n=e.focusNode,r=e.focusOffset;if(n){var o,i,s=!1;for(Pe.gecko&&1==n.nodeType&&r<rr(n)&&or(n.childNodes[r])&&(s=!0);;)if(r>0){if(1!=n.nodeType)break;var a=n.childNodes[r-1];if(or(a))o=n,i=--r;else{if(3!=a.nodeType)break;r=(n=a).nodeValue.length}}else{if(ar(n))break;for(var c=n.previousSibling;c&&or(c);)o=n.parentNode,i=je(c),c=c.previousSibling;if(c)r=rr(n=c);else{if((n=n.parentNode)==t.dom)break;r=0}}s?cr(t,e,n,r):o&&cr(t,e,o,i)}}function sr(t){var e=t.root.getSelection(),n=e.focusNode,r=e.focusOffset;if(n){for(var o,i,s=rr(n);;)if(r<s){if(1!=n.nodeType)break;if(!or(n.childNodes[r]))break;o=n,i=++r}else{if(ar(n))break;for(var a=n.nextSibling;a&&or(a);)o=a.parentNode,i=je(a)+1,a=a.nextSibling;if(a)r=0,s=rr(n=a);else{if((n=n.parentNode)==t.dom)break;r=s=0}}o&&cr(t,e,o,i)}}function ar(t){var e=t.pmViewDesc;return e&&e.node&&e.node.isBlock}function cr(t,e,n,r){if(Xe(e)){var o=document.createRange();o.setEnd(n,r),o.setStart(n,r),e.removeAllRanges(),e.addRange(o)}else e.extend&&e.extend(n,r);t.domObserver.setCurSelection();var i=t.state;setTimeout((function(){t.state==i&&Wn(t)}),50)}function hr(t,e,n){var r=t.state.selection;if(r instanceof ve&&!r.empty||n.indexOf("s")>-1)return!1;if(Pe.mac&&n.indexOf("m")>-1)return!1;var o=r.$from,i=r.$to;if(!o.parent.inlineContent||t.endOfTextblock(e<0?"up":"down")){var s=tr(t.state,e);if(s&&s instanceof ge)return er(t,s)}if(!o.parent.inlineContent){var a=ue.findFrom(e<0?o:i,e);return!a||er(t,a)}return!1}function pr(t,e){if(!(t.state.selection instanceof ve))return!0;var n=t.state.selection,r=n.$head,o=n.$anchor,i=n.empty;if(!r.sameParent(o))return!0;if(!i)return!1;if(t.endOfTextblock(e>0?"forward":"backward"))return!0;var s=!r.textOffset&&(e<0?r.nodeBefore:r.nodeAfter);if(s&&!s.isText){var a=t.state.tr;return e<0?a.delete(r.pos-s.nodeSize,r.pos):a.delete(r.pos,r.pos+s.nodeSize),t.dispatch(a),!0}return!1}function lr(t,e,n){t.domObserver.stop(),e.contentEditable=n,t.domObserver.start()}function fr(t,e){var n=e.keyCode,r=function(t){var e="";return t.ctrlKey&&(e+="c"),t.metaKey&&(e+="m"),t.altKey&&(e+="a"),t.shiftKey&&(e+="s"),e}(e);return 8==n||Pe.mac&&72==n&&"c"==r?pr(t,-1)||ir(t):46==n||Pe.mac&&68==n&&"c"==r?pr(t,1)||sr(t):13==n||27==n||(37==n?nr(t,-1,r)||ir(t):39==n?nr(t,1,r)||sr(t):38==n?hr(t,-1,r)||ir(t):40==n?function(t){if(Pe.safari&&!(t.state.selection.$head.parentOffset>0)){var e=t.root.getSelection(),n=e.focusNode,r=e.focusOffset;if(n&&1==n.nodeType&&0==r&&n.firstChild&&"false"==n.firstChild.contentEditable){var o=n.firstChild;lr(t,o,!0),setTimeout((function(){return lr(t,o,!1)}),20)}}}(t)||hr(t,1,r)||sr(t):r==(Pe.mac?"m":"c")&&(66==n||73==n||89==n||90==n))}function ur(t){var e=t.pmViewDesc;if(e)return e.parseRule();if("BR"==t.nodeName&&t.parentNode){if(Pe.safari&&/^(ul|ol)$/i.test(t.parentNode.nodeName)){var n=document.createElement("div");return n.appendChild(document.createElement("li")),{skip:n}}if(t.parentNode.lastChild==t||Pe.safari&&/^(tr|table)$/i.test(t.parentNode.nodeName))return{ignore:!0}}else if("IMG"==t.nodeName&&t.getAttribute("mark-placeholder"))return{ignore:!0}}function dr(t,e,n,r,o){if(e<0){var i=t.lastSelectionTime>Date.now()-50?t.lastSelectionOrigin:null,s=qn(t,i);if(s&&!t.state.selection.eq(s)){var a=t.state.tr.setSelection(s);"pointer"==i?a.setMeta("pointer",!0):"key"==i&&a.scrollIntoView(),t.dispatch(a)}}else{var c=t.state.doc.resolve(e),h=c.sharedDepth(n);e=c.before(h+1),n=t.state.doc.resolve(n).after(h+1);var p,l,f=t.state.selection,u=function(t,e,n){var r=t.docView.parseRange(e,n),o=r.node,i=r.fromOffset,s=r.toOffset,a=r.from,c=r.to,h=t.root.getSelection(),p=null,l=h.anchorNode;if(l&&t.dom.contains(1==l.nodeType?l:l.parentNode)&&(p=[{node:l,offset:h.anchorOffset}],Xe(h)||p.push({node:h.focusNode,offset:h.focusOffset})),Pe.chrome&&8===t.lastKeyCode)for(var f=s;f>i;f--){var u=o.childNodes[f-1],d=u.pmViewDesc;if("BR"==u.nodeType&&!d){s=f;break}if(!d||d.size)break}var m=t.state.doc,v=t.someProp("domParser")||mt.fromSchema(t.state.schema),y=m.resolve(a),g=null,w=v.parse(o,{topNode:y.parent,topMatch:y.parent.contentMatchAt(y.index()),topOpen:!0,from:i,to:s,preserveWhitespace:!y.parent.type.spec.code||"full",editableContent:!0,findPositions:p,ruleFromNode:ur,context:y});if(p&&null!=p[0].pos){var b=p[0].pos,k=p[1]&&p[1].pos;null==k&&(k=b),g={anchor:b+a,head:k+a}}return{doc:w,sel:g,from:a,to:c}}(t,e,n),d=t.state.doc,m=d.slice(u.from,u.to);8===t.lastKeyCode&&Date.now()-100<t.lastKeyCodeTime?(p=t.state.selection.to,l="end"):(p=t.state.selection.from,l="start"),t.lastKeyCode=null;var y=function(t,e,n,r,o){var i=t.findDiffStart(e,n);if(null==i)return null;var s=t.findDiffEnd(e,n+t.size,n+e.size),a=s.a,c=s.b;if("end"==o){r-=a+Math.max(0,i-Math.min(a,c))-i}if(a<i&&t.size<e.size){c=(i-=r<=i&&r>=a?i-r:0)+(c-a),a=i}else if(c<i){a=(i-=r<=i&&r>=c?i-r:0)+(a-c),c=i}return{start:i,endA:a,endB:c}}(m.content,u.doc.content,u.from,p,l);if(!y){if(!(r&&f instanceof ve&&!f.empty&&f.$head.sameParent(f.$anchor))||t.composing||u.sel&&u.sel.anchor!=u.sel.head){if(u.sel){var g=mr(t,t.state.doc,u.sel);g&&!g.eq(t.state.selection)&&t.dispatch(t.state.tr.setSelection(g))}return}y={start:f.from,endA:f.to,endB:f.to}}t.domChangeCount++,t.state.selection.from<t.state.selection.to&&y.start==y.endB&&t.state.selection instanceof ve&&(y.start>t.state.selection.from&&y.start<=t.state.selection.from+2?y.start=t.state.selection.from:y.endA<t.state.selection.to&&y.endA>=t.state.selection.to-2&&(y.endB+=t.state.selection.to-y.endA,y.endA=t.state.selection.to)),Pe.ie&&Pe.ie_version<=11&&y.endB==y.start+1&&y.endA==y.start&&y.start>u.from&&"  "==u.doc.textBetween(y.start-u.from-1,y.start-u.from+1)&&(y.start--,y.endA--,y.endB--);var w,b=u.doc.resolveNoCache(y.start-u.from),k=u.doc.resolveNoCache(y.endB-u.from),x=b.sameParent(k)&&b.parent.inlineContent;if((Pe.ios&&t.lastIOSEnter>Date.now()-225&&(!x||o.some((function(t){return"DIV"==t.nodeName||"P"==t.nodeName})))||!x&&b.pos<u.doc.content.size&&(w=ue.findFrom(u.doc.resolve(b.pos+1),1,!0))&&w.head==k.pos)&&t.someProp("handleKeyDown",(function(e){return e(t,Ye(13,"Enter"))})))t.lastIOSEnter=0;else if(t.state.selection.anchor>y.start&&function(t,e,n,r,o){if(!r.parent.isTextblock||n-e<=o.pos-r.pos||vr(r,!0,!1)<o.pos)return!1;var i=t.resolve(e);if(i.parentOffset<i.parent.content.size||!i.parent.isTextblock)return!1;var s=t.resolve(vr(i,!0,!0));if(!s.parent.isTextblock||s.pos>n||vr(s,!0,!1)<n)return!1;return r.parent.content.cut(r.parentOffset).eq(s.parent.content)}(d,y.start,y.endA,b,k)&&t.someProp("handleKeyDown",(function(e){return e(t,Ye(8,"Backspace"))})))Pe.android&&Pe.chrome&&t.domObserver.suppressSelectionUpdates();else{Pe.android&&!x&&b.start()!=k.start()&&0==k.parentOffset&&b.depth==k.depth&&u.sel&&u.sel.anchor==u.sel.head&&u.sel.head==y.endA&&(y.endB-=2,k=u.doc.resolveNoCache(y.endB-u.from),setTimeout((function(){t.someProp("handleKeyDown",(function(e){return e(t,Ye(13,"Enter"))}))}),20));var S,O,M,C,N=y.start,T=y.endA;if(x)if(b.pos==k.pos)Pe.ie&&Pe.ie_version<=11&&0==b.parentOffset&&(t.domObserver.suppressSelectionUpdates(),setTimeout((function(){return Wn(t)}),20)),S=t.state.tr.delete(N,T),O=d.resolve(y.start).marksAcross(d.resolve(y.endA));else if(y.endA==y.endB&&(C=d.resolve(y.start))&&(M=function(t,e){for(var n,r,o,i=t.firstChild.marks,s=e.firstChild.marks,a=i,c=s,h=0;h<s.length;h++)a=s[h].removeFromSet(a);for(var p=0;p<i.length;p++)c=i[p].removeFromSet(c);if(1==a.length&&0==c.length)r=a[0],n="add",o=function(t){return t.mark(r.addToSet(t.marks))};else{if(0!=a.length||1!=c.length)return null;r=c[0],n="remove",o=function(t){return t.mark(r.removeFromSet(t.marks))}}for(var l=[],f=0;f<e.childCount;f++)l.push(o(e.child(f)));if(v.from(l).eq(t))return{mark:r,type:n}}(b.parent.content.cut(b.parentOffset,k.parentOffset),C.parent.content.cut(C.parentOffset,y.endA-C.start()))))S=t.state.tr,"add"==M.type?S.addMark(N,T,M.mark):S.removeMark(N,T,M.mark);else if(b.parent.child(b.index()).isText&&b.index()==k.index()-(k.textOffset?0:1)){var D=b.parent.textBetween(b.parentOffset,k.parentOffset);if(t.someProp("handleTextInput",(function(e){return e(t,N,T,D)})))return;S=t.state.tr.insertText(D,N,T)}if(S||(S=t.state.tr.replace(N,T,u.doc.slice(y.start-u.from,y.endB-u.from))),u.sel){var E=mr(t,S.doc,u.sel);E&&!(Pe.chrome&&Pe.android&&t.composing&&E.empty&&(E.head==N||E.head==S.mapping.map(T)-1)||Pe.ie&&E.empty&&E.head==N)&&S.setSelection(E)}O&&S.ensureMarks(O),t.dispatch(S.scrollIntoView())}}}function mr(t,e,n){return Math.max(n.anchor,n.head)>e.content.size?null:Qn(t,e.resolve(n.anchor),e.resolve(n.head))}function vr(t,e,n){for(var r=t.depth,o=e?t.end():t.pos;r>0&&(e||t.indexAfter(r)==t.node(r).childCount);)r--,o++,e=!1;if(n)for(var i=t.node(r).maybeChild(t.indexAfter(r));i&&!i.isLeaf;)i=i.firstChild,o++;return o}function yr(t,e){for(var n=[],r=e.content,o=e.openStart,i=e.openEnd;o>1&&i>1&&1==r.childCount&&1==r.firstChild.childCount;){o--,i--;var s=r.firstChild;n.push(s.type.name,s.type.hasRequiredAttrs()?s.attrs:null),r=s.content}var a=t.someProp("clipboardSerializer")||Nt.fromSchema(t.state.schema),c=Mr(),h=c.createElement("div");h.appendChild(a.serializeFragment(r,{document:c}));for(var p,l=h.firstChild;l&&1==l.nodeType&&(p=Sr[l.nodeName.toLowerCase()]);){for(var f=p.length-1;f>=0;f--){for(var u=c.createElement(p[f]);h.firstChild;)u.appendChild(h.firstChild);h.appendChild(u)}l=h.firstChild}return l&&1==l.nodeType&&l.setAttribute("data-pm-slice",o+" "+i+" "+JSON.stringify(n)),{dom:h,text:t.someProp("clipboardTextSerializer",(function(t){return t(e)}))||e.content.textBetween(0,e.content.size,"\n\n")}}function gr(t,e,n,r,o){var i,s,a=o.parent.type.spec.code;if(!n&&!e)return null;var c=e&&(r||a||!n);if(c){if(t.someProp("transformPastedText",(function(t){e=t(e,a||r)})),a)return new S(v.from(t.state.schema.text(e)),0,0);var h=t.someProp("clipboardTextParser",(function(t){return t(e,o,r)}));h?s=h:(i=document.createElement("div"),e.trim().split(/(?:\r\n?|\n)+/).forEach((function(t){i.appendChild(document.createElement("p")).textContent=t})))}else t.someProp("transformPastedHTML",(function(t){n=t(n)})),i=function(t){var e=/(\s*<meta [^>]*>)*/.exec(t);e&&(t=t.slice(e[0].length));var n,r=Mr().createElement("div"),o=/(?:<meta [^>]*>)*<([a-z][^>\s]+)/i.exec(t),i=0;(n=o&&Sr[o[1].toLowerCase()])&&(t=n.map((function(t){return"<"+t+">"})).join("")+t+n.map((function(t){return"</"+t+">"})).reverse().join(""),i=n.length);r.innerHTML=t;for(var s=0;s<i;s++)r=r.firstChild;return r}(n);var p=i&&i.querySelector("[data-pm-slice]"),l=p&&/^(\d+) (\d+) (.*)/.exec(p.getAttribute("data-pm-slice"));if(!s){var f=t.someProp("clipboardParser")||t.someProp("domParser")||mt.fromSchema(t.state.schema);s=f.parseSlice(i,{preserveWhitespace:!(!c&&!l),context:o})}return s=l?function(t,e){if(!t.size)return t;var n,r=t.content.firstChild.type.schema;try{n=JSON.parse(e)}catch(e){return t}for(var o=t.content,i=t.openStart,s=t.openEnd,a=n.length-2;a>=0;a-=2){var c=r.nodes[n[a]];if(!c||c.hasRequiredAttrs())break;o=v.from(c.create(n[a+1],o)),i++,s++}return new S(o,i,s)}(function(t,e,n){e<t.openStart&&(t=new S(xr(t.content,-1,e,t.openStart,0,t.openEnd),e,t.openEnd));n<t.openEnd&&(t=new S(xr(t.content,1,n,t.openEnd,0,0),t.openStart,n));return t}(s,+l[1],+l[2]),l[3]):S.maxOpen(function(t,e){if(t.childCount<2)return t;for(var n=function(n){var r=e.node(n).contentMatchAt(e.index(n)),o=void 0,i=[];if(t.forEach((function(t){if(i){var e,n=r.findWrapping(t.type);if(!n)return i=null;if(e=i.length&&o.length&&br(n,o,t,i[i.length-1],0))i[i.length-1]=e;else{i.length&&(i[i.length-1]=kr(i[i.length-1],o.length));var s=wr(t,n);i.push(s),r=r.matchType(s.type,s.attrs),o=n}}})),i)return{v:v.from(i)}},r=e.depth;r>=0;r--){var o=n(r);if(o)return o.v}return t}(s.content,o),!1),t.someProp("transformPasted",(function(t){s=t(s)})),s}function wr(t,e,n){void 0===n&&(n=0);for(var r=e.length-1;r>=n;r--)t=e[r].create(null,v.from(t));return t}function br(t,e,n,r,o){if(o<t.length&&o<e.length&&t[o]==e[o]){var i=br(t,e,n,r.lastChild,o+1);if(i)return r.copy(r.content.replaceChild(r.childCount-1,i));if(r.contentMatchAt(r.childCount).matchType(o==t.length-1?n.type:t[o+1]))return r.copy(r.content.append(v.from(wr(n,t,o+1))))}}function kr(t,e){if(0==e)return t;var n=t.content.replaceChild(t.childCount-1,kr(t.lastChild,e-1)),r=t.contentMatchAt(t.childCount).fillBefore(v.empty,!0);return t.copy(n.append(r))}function xr(t,e,n,r,o,i){var s=e<0?t.firstChild:t.lastChild,a=s.content;return o<r-1&&(a=xr(a,e,n,r,o+1,i)),o>=n&&(a=e<0?s.contentMatchAt(0).fillBefore(a,t.childCount>1||i<=o).append(a):a.append(s.contentMatchAt(s.childCount).fillBefore(v.empty,!0))),t.replaceChild(e<0?0:t.childCount-1,s.copy(a))}var Sr={thead:["table"],tbody:["table"],tfoot:["table"],caption:["table"],colgroup:["table"],col:["table","colgroup"],tr:["table","tbody"],td:["table","tbody","tr"],th:["table","tbody","tr"]},Or=null;function Mr(){return Or||(Or=document.implementation.createHTMLDocument("title"))}var Cr={childList:!0,characterData:!0,characterDataOldValue:!0,attributes:!0,attributeOldValue:!0,subtree:!0},Nr=Pe.ie&&Pe.ie_version<=11,Tr=function(){this.anchorNode=this.anchorOffset=this.focusNode=this.focusOffset=null};Tr.prototype.set=function(t){this.anchorNode=t.anchorNode,this.anchorOffset=t.anchorOffset,this.focusNode=t.focusNode,this.focusOffset=t.focusOffset},Tr.prototype.eq=function(t){return t.anchorNode==this.anchorNode&&t.anchorOffset==this.anchorOffset&&t.focusNode==this.focusNode&&t.focusOffset==this.focusOffset};var Dr=function(t,e){var n=this;this.view=t,this.handleDOMChange=e,this.queue=[],this.flushingSoon=-1,this.observer=window.MutationObserver&&new window.MutationObserver((function(t){for(var e=0;e<t.length;e++)n.queue.push(t[e]);Pe.ie&&Pe.ie_version<=11&&t.some((function(t){return"childList"==t.type&&t.removedNodes.length||"characterData"==t.type&&t.oldValue.length>t.target.nodeValue.length}))?n.flushSoon():n.flush()})),this.currentSelection=new Tr,Nr&&(this.onCharData=function(t){n.queue.push({target:t.target,type:"characterData",oldValue:t.prevValue}),n.flushSoon()}),this.onSelectionChange=this.onSelectionChange.bind(this),this.suppressingSelectionUpdates=!1};Dr.prototype.flushSoon=function(){var t=this;this.flushingSoon<0&&(this.flushingSoon=window.setTimeout((function(){t.flushingSoon=-1,t.flush()}),20))},Dr.prototype.forceFlush=function(){this.flushingSoon>-1&&(window.clearTimeout(this.flushingSoon),this.flushingSoon=-1,this.flush())},Dr.prototype.start=function(){this.observer&&this.observer.observe(this.view.dom,Cr),Nr&&this.view.dom.addEventListener("DOMCharacterDataModified",this.onCharData),this.connectSelection()},Dr.prototype.stop=function(){var t=this;if(this.observer){var e=this.observer.takeRecords();if(e.length){for(var n=0;n<e.length;n++)this.queue.push(e[n]);window.setTimeout((function(){return t.flush()}),20)}this.observer.disconnect()}Nr&&this.view.dom.removeEventListener("DOMCharacterDataModified",this.onCharData),this.disconnectSelection()},Dr.prototype.connectSelection=function(){this.view.dom.ownerDocument.addEventListener("selectionchange",this.onSelectionChange)},Dr.prototype.disconnectSelection=function(){this.view.dom.ownerDocument.removeEventListener("selectionchange",this.onSelectionChange)},Dr.prototype.suppressSelectionUpdates=function(){var t=this;this.suppressingSelectionUpdates=!0,setTimeout((function(){return t.suppressingSelectionUpdates=!1}),50)},Dr.prototype.onSelectionChange=function(){if((!(t=this.view).editable||t.root.activeElement==t.dom)&&Zn(t)){var t;if(this.suppressingSelectionUpdates)return Wn(this.view);if(Pe.ie&&Pe.ie_version<=11&&!this.view.state.selection.empty){var e=this.view.root.getSelection();if(e.focusNode&&We(e.focusNode,e.focusOffset,e.anchorNode,e.anchorOffset))return this.flushSoon()}this.flush()}},Dr.prototype.setCurSelection=function(){this.currentSelection.set(this.view.root.getSelection())},Dr.prototype.ignoreSelectionChange=function(t){if(0==t.rangeCount)return!0;var e=t.getRangeAt(0).commonAncestorContainer,n=this.view.docView.nearestDesc(e);return n&&n.ignoreMutation({type:"selection",target:3==e.nodeType?e.parentNode:e})?(this.setCurSelection(),!0):void 0},Dr.prototype.flush=function(){if(this.view.docView&&!(this.flushingSoon>-1)){var t=this.observer?this.observer.takeRecords():[];this.queue.length&&(t=this.queue.concat(t),this.queue.length=0);var e=this.view.root.getSelection(),n=!this.suppressingSelectionUpdates&&!this.currentSelection.eq(e)&&Zn(this.view)&&!this.ignoreSelectionChange(e),r=-1,o=-1,i=!1,s=[];if(this.view.editable)for(var a=0;a<t.length;a++){var c=this.registerMutation(t[a],s);c&&(r=r<0?c.from:Math.min(c.from,r),o=o<0?c.to:Math.max(c.to,o),c.typeOver&&(i=!0))}if(Pe.gecko&&s.length>1){var h=s.filter((function(t){return"BR"==t.nodeName}));if(2==h.length){var p=h[0],l=h[1];p.parentNode&&p.parentNode.parentNode==l.parentNode?l.remove():p.remove()}}(r>-1||n)&&(r>-1&&(this.view.docView.markDirty(r,o),function(t){if(Er)return;Er=!0,"normal"==getComputedStyle(t.dom).whiteSpace&&console.warn("ProseMirror expects the CSS white-space property to be set, preferably to 'pre-wrap'. It is recommended to load style/prosemirror.css from the prosemirror-view package.")}(this.view)),this.handleDOMChange(r,o,i,s),this.view.docView.dirty?this.view.updateState(this.view.state):this.currentSelection.eq(e)||Wn(this.view))}},Dr.prototype.registerMutation=function(t,e){if(e.indexOf(t.target)>-1)return null;var n=this.view.docView.nearestDesc(t.target);if("attributes"==t.type&&(n==this.view.docView||"contenteditable"==t.attributeName||"style"==t.attributeName&&!t.oldValue&&!t.target.getAttribute("style")))return null;if(!n||n.ignoreMutation(t))return null;if("childList"==t.type){var r=t.previousSibling,o=t.nextSibling;if(Pe.ie&&Pe.ie_version<=11&&t.addedNodes.length)for(var i=0;i<t.addedNodes.length;i++){var s=t.addedNodes[i],a=s.previousSibling,c=s.nextSibling;(!a||Array.prototype.indexOf.call(t.addedNodes,a)<0)&&(r=a),(!c||Array.prototype.indexOf.call(t.addedNodes,c)<0)&&(o=c)}for(var h=r&&r.parentNode==t.target?je(r)+1:0,p=n.localPosFromDOM(t.target,h,-1),l=o&&o.parentNode==t.target?je(o):t.target.childNodes.length,f=0;f<t.addedNodes.length;f++)e.push(t.addedNodes[f]);return{from:p,to:n.localPosFromDOM(t.target,l,1)}}return"attributes"==t.type?{from:n.posAtStart-n.border,to:n.posAtEnd+n.border}:{from:n.posAtStart,to:n.posAtEnd,typeOver:t.target.nodeValue==t.oldValue}};var Er=!1;var Ar={},Rr={};function Ir(t,e){t.lastSelectionOrigin=e,t.lastSelectionTime=Date.now()}function zr(t){t.someProp("handleDOMEvents",(function(e){for(var n in e)t.eventHandlers[n]||t.dom.addEventListener(n,t.eventHandlers[n]=function(e){return Pr(t,e)})}))}function Pr(t,e){return t.someProp("handleDOMEvents",(function(n){var r=n[e.type];return!!r&&(r(t,e)||e.defaultPrevented)}))}function Vr(t){return{left:t.clientX,top:t.clientY}}function Br(t,e,n,r,o){if(-1==r)return!1;for(var i=t.state.doc.resolve(r),s=function(r){if(t.someProp(e,(function(e){return r>i.depth?e(t,n,i.nodeAfter,i.before(r),o,!0):e(t,n,i.node(r),i.before(r),o,!1)})))return{v:!0}},a=i.depth+1;a>0;a--){var c=s(a);if(c)return c.v}return!1}function $r(t,e,n){t.focused||t.focus();var r=t.state.tr.setSelection(e);"pointer"==n&&r.setMeta("pointer",!0),t.dispatch(r)}function Fr(t,e,n,r,o){return Br(t,"handleClickOn",e,n,r)||t.someProp("handleClick",(function(n){return n(t,e,r)}))||(o?function(t,e){if(-1==e)return!1;var n,r,o=t.state.selection;o instanceof ge&&(n=o.node);for(var i=t.state.doc.resolve(e),s=i.depth+1;s>0;s--){var a=s>i.depth?i.nodeAfter:i.node(s);if(ge.isSelectable(a)){r=n&&o.$from.depth>0&&s>=o.$from.depth&&i.before(o.$from.depth+1)==o.$from.pos?i.before(o.$from.depth):i.before(s);break}}return null!=r&&($r(t,ge.create(t.state.doc,r),"pointer"),!0)}(t,n):function(t,e){if(-1==e)return!1;var n=t.state.doc.resolve(e),r=n.nodeAfter;return!!(r&&r.isAtom&&ge.isSelectable(r))&&($r(t,new ge(n),"pointer"),!0)}(t,n))}function _r(t,e,n,r){return Br(t,"handleDoubleClickOn",e,n,r)||t.someProp("handleDoubleClick",(function(n){return n(t,e,r)}))}function jr(t,e,n,r){return Br(t,"handleTripleClickOn",e,n,r)||t.someProp("handleTripleClick",(function(n){return n(t,e,r)}))||function(t,e){var n=t.state.doc;if(-1==e)return!!n.inlineContent&&($r(t,ve.create(n,0,n.content.size),"pointer"),!0);for(var r=n.resolve(e),o=r.depth+1;o>0;o--){var i=o>r.depth?r.nodeAfter:r.node(o),s=r.before(o);if(i.inlineContent)$r(t,ve.create(n,s+1,s+1+i.content.size),"pointer");else{if(!ge.isSelectable(i))continue;$r(t,ge.create(n,s),"pointer")}return!0}}(t,n)}function Lr(t){return Gr(t)}Rr.keydown=function(t,e){if(t.shiftKey=16==e.keyCode||e.shiftKey,!Wr(t,e))if(t.domObserver.forceFlush(),t.lastKeyCode=e.keyCode,t.lastKeyCodeTime=Date.now(),!Pe.ios||13!=e.keyCode||e.ctrlKey||e.altKey||e.metaKey)t.someProp("handleKeyDown",(function(n){return n(t,e)}))||fr(t,e)?e.preventDefault():Ir(t,"key");else{var n=Date.now();t.lastIOSEnter=n,t.lastIOSEnterFallbackTimeout=setTimeout((function(){t.lastIOSEnter==n&&(t.someProp("handleKeyDown",(function(e){return e(t,Ye(13,"Enter"))})),t.lastIOSEnter=0)}),200)}},Rr.keyup=function(t,e){16==e.keyCode&&(t.shiftKey=!1)},Rr.keypress=function(t,e){if(!(Wr(t,e)||!e.charCode||e.ctrlKey&&!e.altKey||Pe.mac&&e.metaKey))if(t.someProp("handleKeyPress",(function(n){return n(t,e)})))e.preventDefault();else{var n=t.state.selection;if(!(n instanceof ve&&n.$from.sameParent(n.$to))){var r=String.fromCharCode(e.charCode);t.someProp("handleTextInput",(function(e){return e(t,n.$from.pos,n.$to.pos,r)}))||t.dispatch(t.state.tr.insertText(r).scrollIntoView()),e.preventDefault()}}};var Jr=Pe.mac?"metaKey":"ctrlKey";Ar.mousedown=function(t,e){t.shiftKey=e.shiftKey;var n=Lr(t),r=Date.now(),o="singleClick";r-t.lastClick.time<500&&function(t,e){var n=e.x-t.clientX,r=e.y-t.clientY;return n*n+r*r<100}(e,t.lastClick)&&!e[Jr]&&("singleClick"==t.lastClick.type?o="doubleClick":"doubleClick"==t.lastClick.type&&(o="tripleClick")),t.lastClick={time:r,x:e.clientX,y:e.clientY,type:o};var i=t.posAtCoords(Vr(e));i&&("singleClick"==o?t.mouseDown=new qr(t,i,e,n):("doubleClick"==o?_r:jr)(t,i.pos,i.inside,e)?e.preventDefault():Ir(t,"pointer"))};var qr=function(t,e,n,r){var o,i,s=this;if(this.view=t,this.startDoc=t.state.doc,this.pos=e,this.event=n,this.flushed=r,this.selectNode=n[Jr],this.allowDefault=n.shiftKey,e.inside>-1)o=t.state.doc.nodeAt(e.inside),i=e.inside;else{var a=t.state.doc.resolve(e.pos);o=a.parent,i=a.depth?a.before():0}this.mightDrag=null;var c=r?null:n.target,h=c?t.docView.nearestDesc(c,!0):null;this.target=h?h.dom:null,(o.type.spec.draggable&&!1!==o.type.spec.selectable||t.state.selection instanceof ge&&i==t.state.selection.from)&&(this.mightDrag={node:o,pos:i,addAttr:this.target&&!this.target.draggable,setUneditable:this.target&&Pe.gecko&&!this.target.hasAttribute("contentEditable")}),this.target&&this.mightDrag&&(this.mightDrag.addAttr||this.mightDrag.setUneditable)&&(this.view.domObserver.stop(),this.mightDrag.addAttr&&(this.target.draggable=!0),this.mightDrag.setUneditable&&setTimeout((function(){return s.target.setAttribute("contentEditable","false")}),20),this.view.domObserver.start()),t.root.addEventListener("mouseup",this.up=this.up.bind(this)),t.root.addEventListener("mousemove",this.move=this.move.bind(this)),Ir(t,"pointer")};function Wr(t,e){return!!t.composing||!!(Pe.safari&&Math.abs(e.timeStamp-t.compositionEndedAt)<500)&&(t.compositionEndedAt=-2e8,!0)}qr.prototype.done=function(){this.view.root.removeEventListener("mouseup",this.up),this.view.root.removeEventListener("mousemove",this.move),this.mightDrag&&this.target&&(this.view.domObserver.stop(),this.mightDrag.addAttr&&this.target.removeAttribute("draggable"),this.mightDrag.setUneditable&&this.target.removeAttribute("contentEditable"),this.view.domObserver.start()),this.view.mouseDown=null},qr.prototype.up=function(t){if(this.done(),this.view.dom.contains(3==t.target.nodeType?t.target.parentNode:t.target)){var e=this.pos;this.view.state.doc!=this.startDoc&&(e=this.view.posAtCoords(Vr(t))),this.allowDefault||!e?Ir(this.view,"pointer"):Fr(this.view,e.pos,e.inside,t,this.selectNode)?t.preventDefault():this.flushed||Pe.safari&&this.mightDrag&&!this.mightDrag.node.isAtom||Pe.chrome&&!(this.view.state.selection instanceof ve)&&(e.pos==this.view.state.selection.from||e.pos==this.view.state.selection.to)?($r(this.view,ue.near(this.view.state.doc.resolve(e.pos)),"pointer"),t.preventDefault()):Ir(this.view,"pointer")}},qr.prototype.move=function(t){!this.allowDefault&&(Math.abs(this.event.x-t.clientX)>4||Math.abs(this.event.y-t.clientY)>4)&&(this.allowDefault=!0),Ir(this.view,"pointer")},Ar.touchdown=function(t){Lr(t),Ir(t,"pointer")},Ar.contextmenu=function(t){return Lr(t)};var Kr=Pe.android?5e3:-1;function Hr(t,e){clearTimeout(t.composingTimeout),e>-1&&(t.composingTimeout=setTimeout((function(){return Gr(t)}),e))}function Ur(t){for(t.composing=!1;t.compositionNodes.length>0;)t.compositionNodes.pop().markParentsDirty()}function Gr(t,e){if(t.domObserver.forceFlush(),Ur(t),e||t.docView.dirty){var n=qn(t);return n&&!n.eq(t.state.selection)?t.dispatch(t.state.tr.setSelection(n)):t.updateState(t.state),!0}return!1}Rr.compositionstart=Rr.compositionupdate=function(t){if(!t.composing){t.domObserver.flush();var e=t.state,n=e.selection.$from;if(e.selection.empty&&(e.storedMarks||!n.textOffset&&n.parentOffset&&n.nodeBefore.marks.some((function(t){return!1===t.type.spec.inclusive}))))t.markCursor=t.state.storedMarks||n.marks(),Gr(t,!0),t.markCursor=null;else if(Gr(t),Pe.gecko&&e.selection.empty&&n.parentOffset&&!n.textOffset&&n.nodeBefore.marks.length)for(var r=t.root.getSelection(),o=r.focusNode,i=r.focusOffset;o&&1==o.nodeType&&0!=i;){var s=i<0?o.lastChild:o.childNodes[i-1];if(!s)break;if(3==s.nodeType){r.collapse(s,s.nodeValue.length);break}o=s,i=-1}t.composing=!0}Hr(t,Kr)},Rr.compositionend=function(t,e){t.composing&&(t.composing=!1,t.compositionEndedAt=e.timeStamp,Hr(t,20))};var Xr=Pe.ie&&Pe.ie_version<15||Pe.ios&&Pe.webkit_version<604;function Yr(t,e,n,r){var o=gr(t,e,n,t.shiftKey,t.state.selection.$from);if(!t.someProp("handlePaste",(function(e){return e(t,r,o||S.empty)}))&&o){var i=function(t){return 0==t.openStart&&0==t.openEnd&&1==t.content.childCount?t.content.firstChild:null}(o),s=i?t.state.tr.replaceSelectionWith(i,t.shiftKey):t.state.tr.replaceSelection(o);t.dispatch(s.scrollIntoView().setMeta("paste",!0).setMeta("uiEvent","paste"))}}Ar.copy=Rr.cut=function(t,e){var n=t.state.selection,r="cut"==e.type;if(!n.empty){var o=Xr?null:e.clipboardData,i=yr(t,n.content()),s=i.dom,a=i.text;o?(e.preventDefault(),o.clearData(),o.setData("text/html",s.innerHTML),o.setData("text/plain",a)):function(t,e){if(t.dom.parentNode){var n=t.dom.parentNode.appendChild(document.createElement("div"));n.appendChild(e),n.style.cssText="position: fixed; left: -10000px; top: 10px";var r=getSelection(),o=document.createRange();o.selectNodeContents(e),t.dom.blur(),r.removeAllRanges(),r.addRange(o),setTimeout((function(){n.parentNode&&n.parentNode.removeChild(n),t.focus()}),50)}}(t,s),r&&t.dispatch(t.state.tr.deleteSelection().scrollIntoView().setMeta("uiEvent","cut"))}},Rr.paste=function(t,e){var n=Xr?null:e.clipboardData,r=n&&n.getData("text/html"),o=n&&n.getData("text/plain");n&&(r||o||n.files.length)?(Yr(t,o,r,e),e.preventDefault()):function(t,e){if(t.dom.parentNode){var n=t.shiftKey||t.state.selection.$from.parent.type.spec.code,r=t.dom.parentNode.appendChild(document.createElement(n?"textarea":"div"));n||(r.contentEditable="true"),r.style.cssText="position: fixed; left: -10000px; top: 10px",r.focus(),setTimeout((function(){t.focus(),r.parentNode&&r.parentNode.removeChild(r),n?Yr(t,r.value,null,e):Yr(t,r.textContent,r.innerHTML,e)}),50)}}(t,e)};var Qr=function(t,e){this.slice=t,this.move=e},Zr=Pe.mac?"altKey":"ctrlKey";for(var to in Ar.dragstart=function(t,e){var n=t.mouseDown;if(n&&n.done(),e.dataTransfer){var r=t.state.selection,o=r.empty?null:t.posAtCoords(Vr(e));if(o&&o.pos>=r.from&&o.pos<=(r instanceof ge?r.to-1:r.to));else if(n&&n.mightDrag)t.dispatch(t.state.tr.setSelection(ge.create(t.state.doc,n.mightDrag.pos)));else if(e.target&&1==e.target.nodeType){var i=t.docView.nearestDesc(e.target,!0);if(!i||!i.node.type.spec.draggable||i==t.docView)return;t.dispatch(t.state.tr.setSelection(ge.create(t.state.doc,i.posBefore)))}var s=t.state.selection.content(),a=yr(t,s),c=a.dom,h=a.text;e.dataTransfer.clearData(),e.dataTransfer.setData(Xr?"Text":"text/html",c.innerHTML),Xr||e.dataTransfer.setData("text/plain",h),t.dragging=new Qr(s,!e[Zr])}},Ar.dragend=function(t){var e=t.dragging;window.setTimeout((function(){t.dragging==e&&(t.dragging=null)}),50)},Rr.dragover=Rr.dragenter=function(t,e){return e.preventDefault()},Rr.drop=function(t,e){var n=t.dragging;if(t.dragging=null,e.dataTransfer){var r=t.posAtCoords(Vr(e));if(r){var o=t.state.doc.resolve(r.pos);if(o){var i=n&&n.slice||gr(t,e.dataTransfer.getData(Xr?"Text":"text/plain"),Xr?null:e.dataTransfer.getData("text/html"),!1,o),s=n&&!e[Zr];if(t.someProp("handleDrop",(function(n){return n(t,e,i||S.empty,s)})))e.preventDefault();else if(i){e.preventDefault();var a=i?function(t,e,n){var r=t.resolve(e);if(!n.content.size)return e;for(var o=n.content,i=0;i<n.openStart;i++)o=o.firstChild.content;for(var s=1;s<=(0==n.openStart&&n.size?2:1);s++)for(var a=r.depth;a>=0;a--){var c=a==r.depth?0:r.pos<=(r.start(a+1)+r.end(a+1))/2?-1:1,h=r.index(a)+(c>0?1:0);if(1==s?r.node(a).canReplace(h,h,o):r.node(a).contentMatchAt(h).findWrapping(o.firstChild.type))return 0==c?r.pos:c<0?r.before(a+1):r.after(a+1)}return null}(t.state.doc,o.pos,i):o.pos;null==a&&(a=o.pos);var c=t.state.tr;s&&c.deleteSelection();var h=c.mapping.map(a),p=0==i.openStart&&0==i.openEnd&&1==i.content.childCount,l=c.doc;if(p?c.replaceRangeWith(h,h,i.content.firstChild):c.replaceRange(h,h,i),!c.doc.eq(l)){var f=c.doc.resolve(h);if(p&&ge.isSelectable(i.content.firstChild)&&f.nodeAfter&&f.nodeAfter.sameMarkup(i.content.firstChild))c.setSelection(new ge(f));else{var u=c.mapping.map(a);c.mapping.maps[c.mapping.maps.length-1].forEach((function(t,e,n,r){return u=r})),c.setSelection(Qn(t,f,c.doc.resolve(u)))}t.focus(),t.dispatch(c.setMeta("uiEvent","drop"))}}}}}},Ar.focus=function(t){t.focused||(t.domObserver.stop(),t.dom.classList.add("ProseMirror-focused"),t.domObserver.start(),t.focused=!0,setTimeout((function(){t.docView&&t.hasFocus()&&!t.domObserver.currentSelection.eq(t.root.getSelection())&&Wn(t)}),20))},Ar.blur=function(t){t.focused&&(t.domObserver.stop(),t.dom.classList.remove("ProseMirror-focused"),t.domObserver.start(),t.domObserver.currentSelection.set({}),t.focused=!1)},Ar.beforeinput=function(t,e){if(Pe.chrome&&Pe.android&&"deleteContentBackward"==e.inputType){var n=t.domChangeCount;setTimeout((function(){if(t.domChangeCount==n&&(t.dom.blur(),t.focus(),!t.someProp("handleKeyDown",(function(e){return e(t,Ye(8,"Backspace"))})))){var e=t.state.selection.$cursor;e&&e.pos>0&&t.dispatch(t.state.tr.delete(e.pos-1,e.pos).scrollIntoView())}}),50)}},Rr)Ar[to]=Rr[to];function eo(t,e){if(t==e)return!0;for(var n in t)if(t[n]!==e[n])return!1;for(var r in e)if(!(r in t))return!1;return!0}var no=function(t,e){this.spec=e||co,this.side=this.spec.side||0,this.toDOM=t};no.prototype.map=function(t,e,n,r){var o=t.mapResult(e.from+r,this.side<0?-1:1),i=o.pos;return o.deleted?null:new io(i-n,i-n,this)},no.prototype.valid=function(){return!0},no.prototype.eq=function(t){return this==t||t instanceof no&&(this.spec.key&&this.spec.key==t.spec.key||this.toDOM==t.toDOM&&eo(this.spec,t.spec))};var ro=function(t,e){this.spec=e||co,this.attrs=t};ro.prototype.map=function(t,e,n,r){var o=t.map(e.from+r,this.spec.inclusiveStart?-1:1)-n,i=t.map(e.to+r,this.spec.inclusiveEnd?1:-1)-n;return o>=i?null:new io(o,i,this)},ro.prototype.valid=function(t,e){return e.from<e.to},ro.prototype.eq=function(t){return this==t||t instanceof ro&&eo(this.attrs,t.attrs)&&eo(this.spec,t.spec)},ro.is=function(t){return t.type instanceof ro};var oo=function(t,e){this.spec=e||co,this.attrs=t};oo.prototype.map=function(t,e,n,r){var o=t.mapResult(e.from+r,1);if(o.deleted)return null;var i=t.mapResult(e.to+r,-1);return i.deleted||i.pos<=o.pos?null:new io(o.pos-n,i.pos-n,this)},oo.prototype.valid=function(t,e){var n=t.content.findIndex(e.from),r=n.index,o=n.offset;return o==e.from&&o+t.child(r).nodeSize==e.to},oo.prototype.eq=function(t){return this==t||t instanceof oo&&eo(this.attrs,t.attrs)&&eo(this.spec,t.spec)};var io=function(t,e,n){this.from=t,this.to=e,this.type=n},so={spec:{configurable:!0},inline:{configurable:!0}};io.prototype.copy=function(t,e){return new io(t,e,this.type)},io.prototype.eq=function(t,e){return void 0===e&&(e=0),this.type.eq(t.type)&&this.from+e==t.from&&this.to+e==t.to},io.prototype.map=function(t,e,n){return this.type.map(t,this,e,n)},io.widget=function(t,e,n){return new io(t,t,new no(e,n))},io.inline=function(t,e,n,r){return new io(t,e,new ro(n,r))},io.node=function(t,e,n,r){return new io(t,e,new oo(n,r))},so.spec.get=function(){return this.type.spec},so.inline.get=function(){return this.type instanceof ro},Object.defineProperties(io.prototype,so);var ao=[],co={},ho=function(t,e){this.local=t&&t.length?t:ao,this.children=e&&e.length?e:ao};ho.create=function(t,e){return e.length?vo(e,t,0,co):po},ho.prototype.find=function(t,e,n){var r=[];return this.findInner(null==t?0:t,null==e?1e9:e,r,0,n),r},ho.prototype.findInner=function(t,e,n,r,o){for(var i=0;i<this.local.length;i++){var s=this.local[i];s.from<=e&&s.to>=t&&(!o||o(s.spec))&&n.push(s.copy(s.from+r,s.to+r))}for(var a=0;a<this.children.length;a+=3)if(this.children[a]<e&&this.children[a+1]>t){var c=this.children[a]+1;this.children[a+2].findInner(t-c,e-c,n,r+c,o)}},ho.prototype.map=function(t,e,n){return this==po||0==t.maps.length?this:this.mapInner(t,e,0,0,n||co)},ho.prototype.mapInner=function(t,e,n,r,o){for(var i,s=0;s<this.local.length;s++){var a=this.local[s].map(t,n,r);a&&a.type.valid(e,a)?(i||(i=[])).push(a):o.onRemove&&o.onRemove(this.local[s].spec)}return this.children.length?function(t,e,n,r,o,i,s){for(var a=t.slice(),c=function(t,e,n,r){for(var s=0;s<a.length;s+=3){var c=a[s+1],h=void 0;-1==c||t>c+i||(e>=a[s]+i?a[s+1]=-1:n>=o&&(h=r-n-(e-t))&&(a[s]+=h,a[s+1]+=h))}},h=0;h<n.maps.length;h++)n.maps[h].forEach(c);for(var p=!1,l=0;l<a.length;l+=3)if(-1==a[l+1]){var f=n.map(t[l]+i),u=f-o;if(u<0||u>=r.content.size){p=!0;continue}var d=n.map(t[l+1]+i,-1)-o,m=r.content.findIndex(u),v=m.index,y=m.offset,g=r.maybeChild(v);if(g&&y==u&&y+g.nodeSize==d){var w=a[l+2].mapInner(n,g,f+1,t[l]+i+1,s);w!=po?(a[l]=u,a[l+1]=d,a[l+2]=w):(a[l+1]=-2,p=!0)}else p=!0}if(p){var b=vo(function(t,e,n,r,o,i,s){function a(t,e){for(var i=0;i<t.local.length;i++){var c=t.local[i].map(r,o,e);c?n.push(c):s.onRemove&&s.onRemove(t.local[i].spec)}for(var h=0;h<t.children.length;h+=3)a(t.children[h+2],t.children[h]+e+1)}for(var c=0;c<t.length;c+=3)-1==t[c+1]&&a(t[c+2],e[c]+i+1);return n}(a,t,e||[],n,o,i,s),r,0,s);e=b.local;for(var k=0;k<a.length;k+=3)a[k+1]<0&&(a.splice(k,3),k-=3);for(var x=0,S=0;x<b.children.length;x+=3){for(var O=b.children[x];S<a.length&&a[S]<O;)S+=3;a.splice(S,0,b.children[x],b.children[x+1],b.children[x+2])}}return new ho(e&&e.sort(yo),a)}(this.children,i,t,e,n,r,o):i?new ho(i.sort(yo)):po},ho.prototype.add=function(t,e){return e.length?this==po?ho.create(t,e):this.addInner(t,e,0):this},ho.prototype.addInner=function(t,e,n){var r,o=this,i=0;t.forEach((function(t,s){var a,c=s+n;if(a=uo(e,t,c)){for(r||(r=o.children.slice());i<r.length&&r[i]<s;)i+=3;r[i]==s?r[i+2]=r[i+2].addInner(t,a,c+1):r.splice(i,0,s,s+t.nodeSize,vo(a,t,c+1,co)),i+=3}}));var s=fo(i?mo(e):e,-n);return new ho(s.length?this.local.concat(s).sort(yo):this.local,r||this.children)},ho.prototype.remove=function(t){return 0==t.length||this==po?this:this.removeInner(t,0)},ho.prototype.removeInner=function(t,e){for(var n=this.children,r=this.local,o=0;o<n.length;o+=3){for(var i=void 0,s=n[o]+e,a=n[o+1]+e,c=0,h=void 0;c<t.length;c++)(h=t[c])&&h.from>s&&h.to<a&&(t[c]=null,(i||(i=[])).push(h));if(i){n==this.children&&(n=this.children.slice());var p=n[o+2].removeInner(i,s+1);p!=po?n[o+2]=p:(n.splice(o,3),o-=3)}}if(r.length)for(var l=0,f=void 0;l<t.length;l++)if(f=t[l])for(var u=0;u<r.length;u++)r[u].eq(f,e)&&(r==this.local&&(r=this.local.slice()),r.splice(u--,1));return n==this.children&&r==this.local?this:r.length||n.length?new ho(r,n):po},ho.prototype.forChild=function(t,e){if(this==po)return this;if(e.isLeaf)return ho.empty;for(var n,r,o=0;o<this.children.length;o+=3)if(this.children[o]>=t){this.children[o]==t&&(n=this.children[o+2]);break}for(var i=t+1,s=i+e.content.size,a=0;a<this.local.length;a++){var c=this.local[a];if(c.from<s&&c.to>i&&c.type instanceof ro){var h=Math.max(i,c.from)-i,p=Math.min(s,c.to)-i;h<p&&(r||(r=[])).push(c.copy(h,p))}}if(r){var l=new ho(r.sort(yo));return n?new lo([l,n]):l}return n||po},ho.prototype.eq=function(t){if(this==t)return!0;if(!(t instanceof ho)||this.local.length!=t.local.length||this.children.length!=t.children.length)return!1;for(var e=0;e<this.local.length;e++)if(!this.local[e].eq(t.local[e]))return!1;for(var n=0;n<this.children.length;n+=3)if(this.children[n]!=t.children[n]||this.children[n+1]!=t.children[n+1]||!this.children[n+2].eq(t.children[n+2]))return!1;return!0},ho.prototype.locals=function(t){return go(this.localsInner(t))},ho.prototype.localsInner=function(t){if(this==po)return ao;if(t.inlineContent||!this.local.some(ro.is))return this.local;for(var e=[],n=0;n<this.local.length;n++)this.local[n].type instanceof ro||e.push(this.local[n]);return e};var po=new ho;ho.empty=po,ho.removeOverlap=go;var lo=function(t){this.members=t};function fo(t,e){if(!e||!t.length)return t;for(var n=[],r=0;r<t.length;r++){var o=t[r];n.push(new io(o.from+e,o.to+e,o.type))}return n}function uo(t,e,n){if(e.isLeaf)return null;for(var r=n+e.nodeSize,o=null,i=0,s=void 0;i<t.length;i++)(s=t[i])&&s.from>n&&s.to<r&&((o||(o=[])).push(s),t[i]=null);return o}function mo(t){for(var e=[],n=0;n<t.length;n++)null!=t[n]&&e.push(t[n]);return e}function vo(t,e,n,r){var o=[],i=!1;e.forEach((function(e,s){var a=uo(t,e,s+n);if(a){i=!0;var c=vo(a,e,n+s+1,r);c!=po&&o.push(s,s+e.nodeSize,c)}}));for(var s=fo(i?mo(t):t,-n).sort(yo),a=0;a<s.length;a++)s[a].type.valid(e,s[a])||(r.onRemove&&r.onRemove(s[a].spec),s.splice(a--,1));return s.length||o.length?new ho(s,o):po}function yo(t,e){return t.from-e.from||t.to-e.to}function go(t){for(var e=t,n=0;n<e.length-1;n++){var r=e[n];if(r.from!=r.to)for(var o=n+1;o<e.length;o++){var i=e[o];if(i.from!=r.from){i.from<r.to&&(e==t&&(e=t.slice()),e[n]=r.copy(r.from,i.from),wo(e,o,r.copy(i.from,r.to)));break}i.to!=r.to&&(e==t&&(e=t.slice()),e[o]=i.copy(i.from,r.to),wo(e,o+1,i.copy(r.to,i.to)))}}return e}function wo(t,e,n){for(;e<t.length&&yo(n,t[e])>0;)e++;t.splice(e,0,n)}function bo(t){var e=[];return t.someProp("decorations",(function(n){var r=n(t.state);r&&r!=po&&e.push(r)})),t.cursorWrapper&&e.push(ho.create(t.state.doc,[t.cursorWrapper.deco])),lo.from(e)}lo.prototype.forChild=function(t,e){if(e.isLeaf)return ho.empty;for(var n=[],r=0;r<this.members.length;r++){var o=this.members[r].forChild(t,e);o!=po&&(o instanceof lo?n=n.concat(o.members):n.push(o))}return lo.from(n)},lo.prototype.eq=function(t){if(!(t instanceof lo)||t.members.length!=this.members.length)return!1;for(var e=0;e<this.members.length;e++)if(!this.members[e].eq(t.members[e]))return!1;return!0},lo.prototype.locals=function(t){for(var e,n=!0,r=0;r<this.members.length;r++){var o=this.members[r].localsInner(t);if(o.length)if(e){n&&(e=e.slice(),n=!1);for(var i=0;i<o.length;i++)e.push(o[i])}else e=o}return e?go(n?e:e.sort(yo)):ao},lo.from=function(t){switch(t.length){case 0:return po;case 1:return t[0];default:return new lo(t)}};var ko=function(t,e){this._props=e,this.state=e.state,this.dispatch=this.dispatch.bind(this),this._root=null,this.focused=!1,this.trackWrites=null,this.dom=t&&t.mount||document.createElement("div"),t&&(t.appendChild?t.appendChild(this.dom):t.apply?t(this.dom):t.mount&&(this.mounted=!0)),this.editable=Mo(this),this.markCursor=null,this.cursorWrapper=null,Oo(this),this.nodeViews=Co(this),this.docView=Tn(this.state.doc,So(this),bo(this),this.dom,this),this.lastSelectedViewDesc=null,this.dragging=null,function(t){t.shiftKey=!1,t.mouseDown=null,t.lastKeyCode=null,t.lastKeyCodeTime=0,t.lastClick={time:0,x:0,y:0,type:""},t.lastSelectionOrigin=null,t.lastSelectionTime=0,t.lastIOSEnter=0,t.lastIOSEnterFallbackTimeout=null,t.composing=!1,t.composingTimeout=null,t.compositionNodes=[],t.compositionEndedAt=-2e8,t.domObserver=new Dr(t,(function(e,n,r,o){return dr(t,e,n,r,o)})),t.domObserver.start(),t.domChangeCount=0,t.eventHandlers=Object.create(null);var e=function(e){var n=Ar[e];t.dom.addEventListener(e,t.eventHandlers[e]=function(e){!function(t,e){if(!e.bubbles)return!0;if(e.defaultPrevented)return!1;for(var n=e.target;n!=t.dom;n=n.parentNode)if(!n||11==n.nodeType||n.pmViewDesc&&n.pmViewDesc.stopEvent(e))return!1;return!0}(t,e)||Pr(t,e)||!t.editable&&e.type in Rr||n(t,e)})};for(var n in Ar)e(n);Pe.safari&&t.dom.addEventListener("input",(function(){return null})),zr(t)}(this),this.pluginViews=[],this.updatePluginViews()},xo={props:{configurable:!0},root:{configurable:!0}};function So(t){var e=Object.create(null);return e.class="ProseMirror",e.contenteditable=String(t.editable),t.someProp("attributes",(function(n){if("function"==typeof n&&(n=n(t.state)),n)for(var r in n)"class"==r?e.class+=" "+n[r]:e[r]||"contenteditable"==r||"nodeName"==r||(e[r]=String(n[r]))})),[io.node(0,t.state.doc.content.size,e)]}function Oo(t){if(t.markCursor){var e=document.createElement("img");e.setAttribute("mark-placeholder","true"),t.cursorWrapper={dom:e,deco:io.widget(t.state.selection.head,e,{raw:!0,marks:t.markCursor})}}else t.cursorWrapper=null}function Mo(t){return!t.someProp("editable",(function(e){return!1===e(t.state)}))}function Co(t){var e={};return t.someProp("nodeViews",(function(t){for(var n in t)Object.prototype.hasOwnProperty.call(e,n)||(e[n]=t[n])})),e}function No(t,e){return!t.selection.empty&&(e&&e(t.tr.deleteSelection().scrollIntoView()),!0)}function To(t,e){for(;t;t="start"==e?t.firstChild:t.lastChild)if(t.isTextblock)return!0;return!1}function Do(t){if(!t.parent.type.spec.isolating)for(var e=t.depth-1;e>=0;e--){if(t.index(e)>0)return t.doc.resolve(t.before(e+1));if(t.node(e).type.spec.isolating)break}return null}function Eo(t){if(!t.parent.type.spec.isolating)for(var e=t.depth-1;e>=0;e--){var n=t.node(e);if(t.index(e)+1<n.childCount)return t.doc.resolve(t.after(e+1));if(n.type.spec.isolating)break}return null}function Ao(t,e){var n,r=t.selection,o=r instanceof ge;if(o){if(r.node.isTextblock||!Xt(t.doc,r.from))return!1;n=r.from}else if(null==(n=Qt(t.doc,r.from,-1)))return!1;if(e){var i=t.tr.join(n);o&&i.setSelection(ge.create(i.doc,n-t.doc.resolve(n).nodeBefore.nodeSize)),e(i.scrollIntoView())}return!0}function Ro(t,e){var n,r=t.selection;if(r instanceof ge){if(r.node.isTextblock||!Xt(t.doc,r.to))return!1;n=r.to}else if(null==(n=Qt(t.doc,r.to,1)))return!1;return e&&e(t.tr.join(n).scrollIntoView()),!0}function Io(t,e){var n=t.selection,r=n.$from,o=n.$to,i=r.blockRange(o),s=i&&Kt(i);return null!=s&&(e&&e(t.tr.lift(i,s).scrollIntoView()),!0)}function zo(t){for(var e=0;e<t.edgeCount;e++){var n=t.edge(e).type;if(n.isTextblock&&!n.hasRequiredAttrs())return n}return null}function Po(t,e,n){var r,o,i=e.nodeBefore,s=e.nodeAfter;if(i.type.spec.isolating||s.type.spec.isolating)return!1;if(function(t,e,n){var r=e.nodeBefore,o=e.nodeAfter,i=e.index();return!(!(r&&o&&r.type.compatibleContent(o.type))||(!r.content.size&&e.parent.canReplace(i-1,i)?(n&&n(t.tr.delete(e.pos-r.nodeSize,e.pos).scrollIntoView()),0):!e.parent.canReplace(i,i+1)||!o.isTextblock&&!Xt(t.doc,e.pos)||(n&&n(t.tr.clearIncompatible(e.pos,r.type,r.contentMatchAt(r.childCount)).join(e.pos).scrollIntoView()),0)))}(t,e,n))return!0;if(e.parent.canReplace(e.index(),e.index()+1)&&(r=(o=i.contentMatchAt(i.childCount)).findWrapping(s.type))&&o.matchType(r[0]||s.type).validEnd){if(n){for(var a=e.pos+s.nodeSize,c=v.empty,h=r.length-1;h>=0;h--)c=v.from(r[h].create(null,c));c=v.from(i.copy(c));var p=t.tr.step(new Jt(e.pos-1,a,e.pos,a,new S(c,1,0),r.length,!0)),l=a+2*r.length;Xt(p.doc,l)&&p.join(l),n(p.scrollIntoView())}return!0}var f=ue.findFrom(e,1),u=f&&f.$from.blockRange(f.$to),d=u&&Kt(u);return null!=d&&d>=e.depth&&(n&&n(t.tr.lift(u,d).scrollIntoView()),!0)}function Vo(t,e){return function(n,r){var o=n.selection,i=o.$from,s=o.$to,a=i.blockRange(s),c=a&&Ht(a,t,e);return!!c&&(r&&r(n.tr.wrap(a,c).scrollIntoView()),!0)}}function Bo(t,e){return function(n,r){var o=n.selection,i=o.from,s=o.to,a=!1;return n.doc.nodesBetween(i,s,(function(r,o){if(a)return!1;if(r.isTextblock&&!r.hasMarkup(t,e))if(r.type==t)a=!0;else{var i=n.doc.resolve(o),s=i.index();a=i.parent.canReplaceWith(s,s+1,t)}})),!!a&&(r&&r(n.tr.setBlockType(i,s,t,e).scrollIntoView()),!0)}}function $o(t,e){return function(n,r){var o=n.selection,i=o.empty,s=o.$cursor,a=o.ranges;if(i&&!s||!function(t,e,n){for(var r=function(r){var o=e[r],i=o.$from,s=o.$to,a=0==i.depth&&t.type.allowsMarkType(n);if(t.nodesBetween(i.pos,s.pos,(function(t){if(a)return!1;a=t.inlineContent&&t.type.allowsMarkType(n)})),a)return{v:!0}},o=0;o<e.length;o++){var i=r(o);if(i)return i.v}return!1}(n.doc,a,t))return!1;if(r)if(s)t.isInSet(n.storedMarks||s.marks())?r(n.tr.removeStoredMark(t)):r(n.tr.addStoredMark(t.create(e)));else{for(var c=!1,h=n.tr,p=0;!c&&p<a.length;p++){var l=a[p],f=l.$from,u=l.$to;c=n.doc.rangeHasMark(f.pos,u.pos,t)}for(var d=0;d<a.length;d++){var m=a[d],v=m.$from,y=m.$to;c?h.removeMark(v.pos,y.pos,t):h.addMark(v.pos,y.pos,t.create(e))}r(h.scrollIntoView())}return!0}}function Fo(){for(var t=[],e=arguments.length;e--;)t[e]=arguments[e];return function(e,n,r){for(var o=0;o<t.length;o++)if(t[o](e,n,r))return!0;return!1}}xo.props.get=function(){if(this._props.state!=this.state){var t=this._props;for(var e in this._props={},t)this._props[e]=t[e];this._props.state=this.state}return this._props},ko.prototype.update=function(t){t.handleDOMEvents!=this._props.handleDOMEvents&&zr(this),this._props=t,this.updateStateInner(t.state,!0)},ko.prototype.setProps=function(t){var e={};for(var n in this._props)e[n]=this._props[n];for(var r in e.state=this.state,t)e[r]=t[r];this.update(e)},ko.prototype.updateState=function(t){this.updateStateInner(t,this.state.plugins!=t.plugins)},ko.prototype.updateStateInner=function(t,e){var n=this,r=this.state,o=!1,i=!1;if(t.storedMarks&&this.composing&&(Ur(this),i=!0),this.state=t,e){var s=Co(this);(function(t,e){var n=0,r=0;for(var o in t){if(t[o]!=e[o])return!0;n++}for(var i in e)r++;return n!=r})(s,this.nodeViews)&&(this.nodeViews=s,o=!0),zr(this)}this.editable=Mo(this),Oo(this);var a=bo(this),c=So(this),h=e?"reset":t.scrollToSelection>r.scrollToSelection?"to selection":"preserve",p=o||!this.docView.matchesNode(t.doc,c,a);!p&&t.selection.eq(r.selection)||(i=!0);var l,f,u,d,m,v,y,g,w,b,k,x="preserve"==h&&i&&null==this.dom.style.overflowAnchor&&function(t){for(var e,n,r=t.dom.getBoundingClientRect(),o=Math.max(0,r.top),i=(r.left+r.right)/2,s=o+1;s<Math.min(innerHeight,r.bottom);s+=5){var a=t.root.elementFromPoint(i,s);if(a!=t.dom&&t.dom.contains(a)){var c=a.getBoundingClientRect();if(c.top>=o-20){e=a,n=c.top;break}}}return{refDOM:e,refTop:n,stack:nn(t.dom)}}(this);if(i){this.domObserver.stop();var S=p&&(Pe.ie||Pe.chrome)&&!this.composing&&!r.selection.empty&&!t.selection.empty&&(d=r.selection,m=t.selection,v=Math.min(d.$anchor.sharedDepth(d.head),m.$anchor.sharedDepth(m.head)),d.$anchor.start(v)!=m.$anchor.start(v));if(p){var O=Pe.chrome?this.trackWrites=this.root.getSelection().focusNode:null;!o&&this.docView.update(t.doc,c,a,this)||(this.docView.updateOuterDeco([]),this.docView.destroy(),this.docView=Tn(t.doc,c,a,this.dom,this)),O&&!this.trackWrites&&(S=!0)}S||!(this.mouseDown&&this.domObserver.currentSelection.eq(this.root.getSelection())&&(l=this,f=l.docView.domFromPos(l.state.selection.anchor),u=l.root.getSelection(),We(f.node,f.offset,u.anchorNode,u.anchorOffset)))?Wn(this,S):(Xn(this,t.selection),this.domObserver.setCurSelection()),this.domObserver.start()}if(this.updatePluginViews(r),"reset"==h)this.dom.scrollTop=0;else if("to selection"==h){var M=this.root.getSelection().focusNode;this.someProp("handleScrollToSelection",(function(t){return t(n)}))||(t.selection instanceof ge?en(this,this.docView.domAfterPos(t.selection.from).getBoundingClientRect(),M):en(this,this.coordsAtPos(t.selection.head,1),M))}else x&&(g=(y=x).refDOM,w=y.refTop,b=y.stack,k=g?g.getBoundingClientRect().top:0,rn(b,0==k?0:k-w))},ko.prototype.destroyPluginViews=function(){for(var t;t=this.pluginViews.pop();)t.destroy&&t.destroy()},ko.prototype.updatePluginViews=function(t){if(t&&t.plugins==this.state.plugins)for(var e=0;e<this.pluginViews.length;e++){var n=this.pluginViews[e];n.update&&n.update(this,t)}else{this.destroyPluginViews();for(var r=0;r<this.state.plugins.length;r++){var o=this.state.plugins[r];o.spec.view&&this.pluginViews.push(o.spec.view(this))}}},ko.prototype.someProp=function(t,e){var n,r=this._props&&this._props[t];if(null!=r&&(n=e?e(r):r))return n;var o=this.state.plugins;if(o)for(var i=0;i<o.length;i++){var s=o[i].props[t];if(null!=s&&(n=e?e(s):s))return n}},ko.prototype.hasFocus=function(){return this.root.activeElement==this.dom},ko.prototype.focus=function(){this.domObserver.stop(),this.editable&&function(t){if(t.setActive)return t.setActive();if(on)return t.focus(on);var e=nn(t);t.focus(null==on?{get preventScroll(){return on={preventScroll:!0},!0}}:void 0),on||(on=!1,rn(e,0))}(this.dom),Wn(this),this.domObserver.start()},xo.root.get=function(){var t=this._root;if(null==t)for(var e=this.dom.parentNode;e;e=e.parentNode)if(9==e.nodeType||11==e.nodeType&&e.host)return e.getSelection||(Object.getPrototypeOf(e).getSelection=function(){return document.getSelection()}),this._root=e;return t||document},ko.prototype.posAtCoords=function(t){return hn(this,t)},ko.prototype.coordsAtPos=function(t,e){return void 0===e&&(e=1),fn(this,t,e)},ko.prototype.domAtPos=function(t){return this.docView.domFromPos(t)},ko.prototype.nodeDOM=function(t){var e=this.docView.descAt(t);return e?e.nodeDOM:null},ko.prototype.posAtDOM=function(t,e,n){void 0===n&&(n=-1);var r=this.docView.posFromDOM(t,e,n);if(null==r)throw new RangeError("DOM position not inside the editor");return r},ko.prototype.endOfTextblock=function(t,e){return bn(this,e||this.state,t)},ko.prototype.destroy=function(){this.docView&&(!function(t){for(var e in t.domObserver.stop(),t.eventHandlers)t.dom.removeEventListener(e,t.eventHandlers[e]);clearTimeout(t.composingTimeout),clearTimeout(t.lastIOSEnterFallbackTimeout)}(this),this.destroyPluginViews(),this.mounted?(this.docView.update(this.state.doc,[],bo(this),this),this.dom.textContent=""):this.dom.parentNode&&this.dom.parentNode.removeChild(this.dom),this.docView.destroy(),this.docView=null)},ko.prototype.dispatchEvent=function(t){return function(t,e){Pr(t,e)||!Ar[e.type]||!t.editable&&e.type in Rr||Ar[e.type](t,e)}(this,t)},ko.prototype.dispatch=function(t){var e=this._props.dispatchTransaction;e?e.call(this,t):this.updateState(this.state.apply(t))},Object.defineProperties(ko.prototype,xo);var _o=Fo(No,(function(t,e,n){var r=t.selection.$cursor;if(!r||(n?!n.endOfTextblock("backward",t):r.parentOffset>0))return!1;var o=Do(r);if(!o){var i=r.blockRange(),s=i&&Kt(i);return null!=s&&(e&&e(t.tr.lift(i,s).scrollIntoView()),!0)}var a=o.nodeBefore;if(!a.type.spec.isolating&&Po(t,o,e))return!0;if(0==r.parent.content.size&&(To(a,"end")||ge.isSelectable(a))){if(e){var c=t.tr.deleteRange(r.before(),r.after());c.setSelection(To(a,"end")?ue.findFrom(c.doc.resolve(c.mapping.map(o.pos,-1)),-1):ge.create(c.doc,o.pos-a.nodeSize)),e(c.scrollIntoView())}return!0}return!(!a.isAtom||o.depth!=r.depth-1)&&(e&&e(t.tr.delete(o.pos-a.nodeSize,o.pos).scrollIntoView()),!0)}),(function(t,e,n){var r=t.selection,o=r.$head,i=o;if(!r.empty)return!1;if(o.parent.isTextblock){if(n?!n.endOfTextblock("backward",t):o.parentOffset>0)return!1;i=Do(o)}var s=i&&i.nodeBefore;return!(!s||!ge.isSelectable(s))&&(e&&e(t.tr.setSelection(ge.create(t.doc,i.pos-s.nodeSize)).scrollIntoView()),!0)})),jo=Fo(No,(function(t,e,n){var r=t.selection.$cursor;if(!r||(n?!n.endOfTextblock("forward",t):r.parentOffset<r.parent.content.size))return!1;var o=Eo(r);if(!o)return!1;var i=o.nodeAfter;if(Po(t,o,e))return!0;if(0==r.parent.content.size&&(To(i,"start")||ge.isSelectable(i))){if(e){var s=t.tr.deleteRange(r.before(),r.after());s.setSelection(To(i,"start")?ue.findFrom(s.doc.resolve(s.mapping.map(o.pos)),1):ge.create(s.doc,s.mapping.map(o.pos))),e(s.scrollIntoView())}return!0}return!(!i.isAtom||o.depth!=r.depth-1)&&(e&&e(t.tr.delete(o.pos,o.pos+i.nodeSize).scrollIntoView()),!0)}),(function(t,e,n){var r=t.selection,o=r.$head,i=o;if(!r.empty)return!1;if(o.parent.isTextblock){if(n?!n.endOfTextblock("forward",t):o.parentOffset<o.parent.content.size)return!1;i=Eo(o)}var s=i&&i.nodeAfter;return!(!s||!ge.isSelectable(s))&&(e&&e(t.tr.setSelection(ge.create(t.doc,i.pos)).scrollIntoView()),!0)})),Lo={Enter:Fo((function(t,e){var n=t.selection,r=n.$head,o=n.$anchor;return!(!r.parent.type.spec.code||!r.sameParent(o))&&(e&&e(t.tr.insertText("\n").scrollIntoView()),!0)}),(function(t,e){var n=t.selection,r=n.$from,o=n.$to;if(r.parent.inlineContent||o.parent.inlineContent)return!1;var i=zo(r.parent.contentMatchAt(o.indexAfter()));if(!i||!i.isTextblock)return!1;if(e){var s=(!r.parentOffset&&o.index()<o.parent.childCount?r:o).pos,a=t.tr.insert(s,i.createAndFill());a.setSelection(ve.create(a.doc,s+1)),e(a.scrollIntoView())}return!0}),(function(t,e){var n=t.selection.$cursor;if(!n||n.parent.content.size)return!1;if(n.depth>1&&n.after()!=n.end(-1)){var r=n.before();if(Gt(t.doc,r))return e&&e(t.tr.split(r).scrollIntoView()),!0}var o=n.blockRange(),i=o&&Kt(o);return null!=i&&(e&&e(t.tr.lift(o,i).scrollIntoView()),!0)}),(function(t,e){var n=t.selection,r=n.$from,o=n.$to;if(t.selection instanceof ge&&t.selection.node.isBlock)return!(!r.parentOffset||!Gt(t.doc,r.pos))&&(e&&e(t.tr.split(r.pos).scrollIntoView()),!0);if(!r.parent.isBlock)return!1;if(e){var i=o.parentOffset==o.parent.content.size,s=t.tr;t.selection instanceof ve&&s.deleteSelection();var a=0==r.depth?null:zo(r.node(-1).contentMatchAt(r.indexAfter(-1))),c=i&&a?[{type:a}]:null,h=Gt(s.doc,s.mapping.map(r.pos),1,c);c||h||!Gt(s.doc,s.mapping.map(r.pos),1,a&&[{type:a}])||(c=[{type:a}],h=!0),h&&(s.split(s.mapping.map(r.pos),1,c),i||r.parentOffset||r.parent.type==a||!r.node(-1).canReplace(r.index(-1),r.indexAfter(-1),v.from(a.create(),r.parent))||s.setNodeMarkup(s.mapping.map(r.before()),a)),e(s.scrollIntoView())}return!0})),"Mod-Enter":function(t,e){var n=t.selection,r=n.$head,o=n.$anchor;if(!r.parent.type.spec.code||!r.sameParent(o))return!1;var i=r.node(-1),s=r.indexAfter(-1),a=zo(i.contentMatchAt(s));if(!i.canReplaceWith(s,s,a))return!1;if(e){var c=r.after(),h=t.tr.replaceWith(c,c,a.createAndFill());h.setSelection(ue.near(h.doc.resolve(c),1)),e(h.scrollIntoView())}return!0},Backspace:_o,"Mod-Backspace":_o,Delete:jo,"Mod-Delete":jo,"Mod-a":function(t,e){return e&&e(t.tr.setSelection(new be(t.doc))),!0}},Jo={"Ctrl-h":Lo.Backspace,"Alt-Backspace":Lo["Mod-Backspace"],"Ctrl-d":Lo.Delete,"Ctrl-Alt-Backspace":Lo["Mod-Delete"],"Alt-Delete":Lo["Mod-Delete"],"Alt-d":Lo["Mod-Delete"]};for(var qo in Lo)Jo[qo]=Lo[qo];for(var Wo=("undefined"!=typeof navigator?/Mac/.test(navigator.platform):"undefined"!=typeof os&&"darwin"==os.platform())?Jo:Lo,Ko={8:"Backspace",9:"Tab",10:"Enter",12:"NumLock",13:"Enter",16:"Shift",17:"Control",18:"Alt",20:"CapsLock",27:"Escape",32:" ",33:"PageUp",34:"PageDown",35:"End",36:"Home",37:"ArrowLeft",38:"ArrowUp",39:"ArrowRight",40:"ArrowDown",44:"PrintScreen",45:"Insert",46:"Delete",59:";",61:"=",91:"Meta",92:"Meta",106:"*",107:"+",108:",",109:"-",110:".",111:"/",144:"NumLock",145:"ScrollLock",160:"Shift",161:"Shift",162:"Control",163:"Control",164:"Alt",165:"Alt",173:"-",186:";",187:"=",188:",",189:"-",190:".",191:"/",192:"`",219:"[",220:"\\",221:"]",222:"'",229:"q"},Ho={48:")",49:"!",50:"@",51:"#",52:"$",53:"%",54:"^",55:"&",56:"*",57:"(",59:":",61:"+",173:"_",186:":",187:"+",188:"<",189:"_",190:">",191:"?",192:"~",219:"{",220:"|",221:"}",222:'"',229:"Q"},Uo="undefined"!=typeof navigator&&/Chrome\/(\d+)/.exec(navigator.userAgent),Go="undefined"!=typeof navigator&&/Apple Computer/.test(navigator.vendor),Xo="undefined"!=typeof navigator&&/Gecko\/\d+/.test(navigator.userAgent),Yo="undefined"!=typeof navigator&&/Mac/.test(navigator.platform),Qo="undefined"!=typeof navigator&&/MSIE \d|Trident\/(?:[7-9]|\d{2,})\..*rv:(\d+)/.exec(navigator.userAgent),Zo=Uo&&(Yo||+Uo[1]<57)||Xo&&Yo,ti=0;ti<10;ti++)Ko[48+ti]=Ko[96+ti]=String(ti);for(ti=1;ti<=24;ti++)Ko[ti+111]="F"+ti;for(ti=65;ti<=90;ti++)Ko[ti]=String.fromCharCode(ti+32),Ho[ti]=String.fromCharCode(ti);for(var ei in Ko)Ho.hasOwnProperty(ei)||(Ho[ei]=Ko[ei]);var ni="undefined"!=typeof navigator&&/Mac/.test(navigator.platform);function ri(t){var e,n,r,o,i=t.split(/-(?!$)/),s=i[i.length-1];"Space"==s&&(s=" ");for(var a=0;a<i.length-1;a++){var c=i[a];if(/^(cmd|meta|m)$/i.test(c))o=!0;else if(/^a(lt)?$/i.test(c))e=!0;else if(/^(c|ctrl|control)$/i.test(c))n=!0;else if(/^s(hift)?$/i.test(c))r=!0;else{if(!/^mod$/i.test(c))throw new Error("Unrecognized modifier name: "+c);ni?o=!0:n=!0}}return e&&(s="Alt-"+s),n&&(s="Ctrl-"+s),o&&(s="Meta-"+s),r&&(s="Shift-"+s),s}function oi(t,e,n){return e.altKey&&(t="Alt-"+t),e.ctrlKey&&(t="Ctrl-"+t),e.metaKey&&(t="Meta-"+t),!1!==n&&e.shiftKey&&(t="Shift-"+t),t}function ii(t){var e=function(t){var e=Object.create(null);for(var n in t)e[ri(n)]=t[n];return e}(t);return function(t,n){var r,o=function(t){var e=!(Zo&&(t.ctrlKey||t.altKey||t.metaKey)||(Go||Qo)&&t.shiftKey&&t.key&&1==t.key.length)&&t.key||(t.shiftKey?Ho:Ko)[t.keyCode]||t.key||"Unidentified";return"Esc"==e&&(e="Escape"),"Del"==e&&(e="Delete"),"Left"==e&&(e="ArrowLeft"),"Up"==e&&(e="ArrowUp"),"Right"==e&&(e="ArrowRight"),"Down"==e&&(e="ArrowDown"),e}(n),i=1==o.length&&" "!=o,s=e[oi(o,n,!i)];if(s&&s(t.state,t.dispatch,t))return!0;if(i&&(n.shiftKey||n.altKey||n.metaKey||o.charCodeAt(0)>127)&&(r=Ko[n.keyCode])&&r!=o){var a=e[oi(r,n,!0)];if(a&&a(t.state,t.dispatch,t))return!0}else if(i&&n.shiftKey){var c=e[oi(o,n,!0)];if(c&&c(t.state,t.dispatch,t))return!0}return!1}}var si=function(){function e(n,r,o,i){t(this,e),this.menuItemNode=n,this.editorView=r,this.attrs=i,this.options=o,this.type=this.resolveType(o.command),this.registerClickListener()}return n(e,[{key:"isActive",value:function(){}},{key:"resolveType",value:function(t){}},{key:"update",value:function(){}},{key:"exec",value:function(){}},{key:"destroy",value:function(){this.unregisterClickListener()}},{key:"registerClickListener",value:function(){this.menuItemNode.addEventListener("mousedown",this.handleClickEvent.bind(this))}},{key:"unregisterClickListener",value:function(){this.menuItemNode.removeEventListener("mousedown",this.handleClickEvent)}},{key:"handleClickEvent",value:function(t){t.preventDefault(),this.exec(),this.editorView.dom.dispatchEvent(new InputEvent("input"))}},{key:"state",get:function(){return this.editorView.state}},{key:"schema",get:function(){return this.state.schema}},{key:"activeClass",get:function(){return this.options.hasOwnProperty("activeClass")?this.options.activeClass:""}}]),e}(),ai=function(e){r(i,e);var o=l(i);function i(e,n){var r,s=arguments.length>2&&void 0!==arguments[2]?arguments[2]:{};return t(this,i),(r=o.call(this,e,n,s)).run=$o(r.type),r}return n(i,[{key:"resolveType",value:function(t){return this.schema.marks["".concat(t)]}},{key:"update",value:function(){var t=this.menuItemNode.classList.contains(this.activeClass);!this.isActive()&&t&&this.menuItemNode.classList.remove(this.activeClass),this.isActive()&&!t&&this.menuItemNode.classList.add(this.activeClass)}},{key:"isActive",value:function(){var t=this.type,e=this.state.selection,n=e.from,r=e.$from,o=e.to;return e.empty?!!t.isInSet(this.state.storedMarks||r.marks()):this.state.doc.rangeHasMark(n,o,t)}},{key:"exec",value:function(){this.run(this.state,this.editorView.dispatch)}}]),i}(si),ci=function(e){r(i,e);var o=l(i);function i(e,n){var r,s=arguments.length>2&&void 0!==arguments[2]?arguments[2]:{},a=arguments.length>3&&void 0!==arguments[3]?arguments[3]:{};return t(this,i),(r=o.call(this,e,n,s,a)).run=s.run(r.type,a),r}return n(i,[{key:"resolveType",value:function(t){return this.schema.nodes["".concat(t)]}},{key:"isActive",value:function(){if(this.options.hideable)return this.run(this.state);if(this.options.activatable){var t=this.state.selection,e=t.$from,n=t.to,r=t.node;return r?r.hasMarkup(this.type,this.attrs):n<=e.end()&&e.parent.hasMarkup(this.type,this.attrs)}}},{key:"update",value:function(){if(this.options.hideable)this.menuItemNode.style.display=this.isActive()?"":"none";else if(this.options.activatable){var t=this.menuItemNode.classList.contains(this.activeClass);!this.isActive()&&t&&this.menuItemNode.classList.remove(this.activeClass),this.isActive()&&!t&&this.menuItemNode.classList.add(this.activeClass)}}},{key:"exec",value:function(){this.run(this.state,this.editorView.dispatch)}}]),i}(si),hi=function(e){r(i,e);var o=l(i);function i(e,n){var r,s=arguments.length>2&&void 0!==arguments[2]?arguments[2]:{},a=arguments.length>3&&void 0!==arguments[3]?arguments[3]:{};return t(this,i),(r=o.call(this,e,n,s,a)).run=s.run,r}return n(i,[{key:"isActive",value:function(){return this.run(this.state)}},{key:"update",value:function(){this.menuItemNode.style.display=this.isActive()?"":"none"}},{key:"exec",value:function(){return this.run(this.state,this.editorView.dispatch)}}]),i}(si),pi=["level"],li=["command","activeClass"],fi=function(){function e(n,r){t(this,e),this.editor=n,this.editorView=r,this.actionsManager=n.actionsManager,this.commandsManager=n.commandsManager,this.menuItems=[],this.initMenuNode(n.menuNode)}return n(e,[{key:"initMenuNode",value:function(t){var e=this;t.querySelectorAll("button[data-command]").forEach((function(t){var n,r=e.extractNodeAttributes(t),o=e.extractNodeOptionsFromData(t);if(e.schema.marks["".concat(o.command)])n=new ai(t,e.editorView,o);else if(e.commandsManager.hasCommand(o.command)){var i=e.commandsManager.getCommand(o.command);o.run=i.action,o.hideable=i.hideable,o.activatable=i.activatable,n=new ci(t,e.editorView,o,r)}else{if(!e.actionsManager.hasAction(o.command))throw new Error("Could not find Mark, Command or Action for: ".concat(o.command));o.run=e.actionsManager.getAction(o.command),n=new hi(t,e.editorView,o,r)}n.update(),e.menuItems.push(n)}))}},{key:"extractNodeAttributes",value:function(t){var e={};return pi.forEach((function(n){t.dataset.hasOwnProperty(n)&&(e[n]=t.dataset[n])})),e}},{key:"extractNodeOptionsFromData",value:function(t){var e={};return li.forEach((function(n){t.dataset.hasOwnProperty(n)&&(e[n]=t.dataset[n])})),e}},{key:"update",value:function(){this.menuItems.forEach((function(t){return t.update()}))}},{key:"destroy",value:function(){this.menuItems.forEach((function(t){return t.destroy()}))}},{key:"schema",get:function(){return this.editorView.state.schema}}]),e}();var ui=function(){function e(){t(this,e),this.actionsRegistry={}}return n(e,[{key:"addAction",value:function(t,e){this.actionsRegistry[t]=e}},{key:"hasAction",value:function(t){return this.actionsRegistry.hasOwnProperty(t)}},{key:"getAction",value:function(t){return!!this.hasAction(t)&&this.actionsRegistry[t]}}]),e}(),di=function(){function e(){t(this,e),this.commandsRegistry={}}return n(e,[{key:"addCommand",value:function(t,e){this.commandsRegistry[t]=e}},{key:"hasCommand",value:function(t){return this.commandsRegistry.hasOwnProperty(t)}},{key:"getCommand",value:function(t){return!!this.hasCommand(t)&&this.commandsRegistry[t]}}]),e}();function mi(t,e){return function(n,r){var o=n.selection,i=o.$from,s=o.$to,a=i.blockRange(s),c=!1,h=a;if(!a)return!1;if(a.depth>=2&&i.node(a.depth-1).type.compatibleContent(t)&&0==a.startIndex){if(0==i.index(a.depth-1))return!1;var p=n.doc.resolve(a.start-2);h=new j(p,p,a.depth),a.endIndex<a.parent.childCount&&(a=new j(i,n.doc.resolve(s.end(a.depth)),a.depth)),c=!0}var l=Ht(h,t,e,a);return!!l&&(r&&r(function(t,e,n,r,o){for(var i=v.empty,s=n.length-1;s>=0;s--)i=v.from(n[s].type.create(n[s].attrs,i));t.step(new Jt(e.start-(r?2:0),e.end,e.start,e.end,new S(i,0,0),n.length,!0));for(var a=0,c=0;c<n.length;c++)n[c].type==o&&(a=c+1);for(var h=n.length-a,p=e.start+n.length-(r?2:0),l=e.parent,f=e.startIndex,u=e.endIndex,d=!0;f<u;f++,d=!1)!d&&Gt(t.doc,p,h)&&(t.split(p,h),p+=2*h),p+=l.child(f).nodeSize;return t}(n.tr,a,l,c,t).scrollIntoView()),!0)}}function vi(t){var e=typeof t;return null!=t&&("object"==e||"function"==e)}var yi="object"==typeof global&&global&&global.Object===Object&&global,gi="object"==typeof self&&self&&self.Object===Object&&self,wi=yi||gi||Function("return this")(),bi=function(){return wi.Date.now()},ki=wi.Symbol,xi=Object.prototype,Si=xi.hasOwnProperty,Oi=xi.toString,Mi=ki?ki.toStringTag:void 0;var Ci=Object.prototype.toString;var Ni=ki?ki.toStringTag:void 0;function Ti(t){return null==t?void 0===t?"[object Undefined]":"[object Null]":Ni&&Ni in Object(t)?function(t){var e=Si.call(t,Mi),n=t[Mi];try{t[Mi]=void 0;var r=!0}catch(t){}var o=Oi.call(t);return r&&(e?t[Mi]=n:delete t[Mi]),o}(t):function(t){return Ci.call(t)}(t)}var Di=/^\s+|\s+$/g,Ei=/^[-+]0x[0-9a-f]+$/i,Ai=/^0b[01]+$/i,Ri=/^0o[0-7]+$/i,Ii=parseInt;function zi(t){if("number"==typeof t)return t;if(function(t){return"symbol"==typeof t||function(t){return null!=t&&"object"==typeof t}(t)&&"[object Symbol]"==Ti(t)}(t))return NaN;if(vi(t)){var e="function"==typeof t.valueOf?t.valueOf():t;t=vi(e)?e+"":e}if("string"!=typeof t)return 0===t?t:+t;t=t.replace(Di,"");var n=Ai.test(t);return n||Ri.test(t)?Ii(t.slice(2),n?2:8):Ei.test(t)?NaN:+t}var Pi=Math.max,Vi=Math.min;function Bi(t,e,n){var r,o,i,s,a,c,h=0,p=!1,l=!1,f=!0;if("function"!=typeof t)throw new TypeError("Expected a function");function u(e){var n=r,i=o;return r=o=void 0,h=e,s=t.apply(i,n)}function d(t){return h=t,a=setTimeout(v,e),p?u(t):s}function m(t){var n=t-c;return void 0===c||n>=e||n<0||l&&t-h>=i}function v(){var t=bi();if(m(t))return y(t);a=setTimeout(v,function(t){var n=e-(t-c);return l?Vi(n,i-(t-h)):n}(t))}function y(t){return a=void 0,f&&r?u(t):(r=o=void 0,s)}function g(){var t=bi(),n=m(t);if(r=arguments,o=this,c=t,n){if(void 0===a)return d(c);if(l)return clearTimeout(a),a=setTimeout(v,e),u(c)}return void 0===a&&(a=setTimeout(v,e)),s}return e=zi(e)||0,vi(n)&&(p=!!n.leading,i=(l="maxWait"in n)?Pi(zi(n.maxWait)||0,e):i,f="trailing"in n?!!n.trailing:f),g.cancel=function(){void 0!==a&&clearTimeout(a),h=0,r=c=o=a=void 0},g.flush=function(){return void 0===a?s:y(bi())},g}var $i=function(){function e(n){t(this,e),this.editor=n}return n(e,[{key:"init",value:function(){for(var t in this.editor.dataset)this[t]=this.editor.dataset[t]}}]),e}();var Fi=function(e){r(i,e);var o=l(i);function i(){var e;return t(this,i),(e=o.call(this)).state=null,e.view=null,e.editorNode=null,e.actionsManager=new ui,e.commandsManager=new di,e.debouncedEventHandler=Bi(e.dispatchCustomInputEvent.bind(h(e)),250),e}return n(i,[{key:"connectedCallback",value:function(){var t=this;setTimeout((function(){t.init()}),10)}},{key:"init",value:function(){this.initRootNode(),this.initMenuNode(),this.initConfig(),this.initSchema(),this.initTools(),this.generateEditorState(),this.createEditorView()}},{key:"initRootNode",value:function(){var t=this.querySelector('div[data-type="editor"]');this.editorNode=t,this.editorNode.innerHTML=this.value}},{key:"initMenuNode",value:function(){this.menuNode=this.querySelector('div[data-type="menu"]')}},{key:"initConfig",value:function(){this.config=new $i(this),this.config.init()}},{key:"initSchema",value:function(){var t,e,n,r,o,i,s,a,c,h,p,l;this.schema=(e=["em",0],n=["strong",0],r=["code",0],o=["p",{class:(t=this).config.pClasses},0],i=["blockquote",{class:t.config.bqClasses},0],s=["hr",{class:t.config.hrClasses}],a=["pre",{class:t.config.preClasses},["code",0]],c=["br"],h=["ol",{class:t.config.olClasses},0],p=["ul",{class:t.config.ulClasses},0],l=["li",{class:t.config.liClasses},0],new ut({nodes:{doc:{content:"block+"},paragraph:{content:"inline*",group:"block",parseDOM:[{tag:"p"}],toDOM:function(){return o}},blockquote:{content:"block+",group:"block",defining:!0,parseDOM:[{tag:"blockquote"}],toDOM:function(){return i}},horizontal_rule:{group:"block",parseDOM:[{tag:"hr"}],toDOM:function(){return s}},heading:{attrs:{level:{default:1}},content:"inline*",group:"block",defining:!0,parseDOM:[{tag:"h1",attrs:{level:1}},{tag:"h2",attrs:{level:2}},{tag:"h3",attrs:{level:3}},{tag:"h4",attrs:{level:4}},{tag:"h5",attrs:{level:5}},{tag:"h6",attrs:{level:6}}],toDOM:function(e){return["h"+e.attrs.level,{class:t.config["h".concat(e.attrs.level,"Classes")]},0]}},code_block:{content:"text*",marks:"",group:"block",code:!0,defining:!0,parseDOM:[{tag:"pre",preserveWhitespace:"full"}],toDOM:function(){return a}},text:{group:"inline"},image:{inline:!0,attrs:{src:{},alt:{default:null},title:{default:null}},group:"inline",draggable:!0,parseDOM:[{tag:"img[src]",getAttrs:function(t){return{src:t.getAttribute("src"),title:t.getAttribute("title"),alt:t.getAttribute("alt")}}}],toDOM:function(t){var e=t.attrs;return["img",{src:e.src,alt:e.alt,title:e.title}]}},hard_break:{inline:!0,group:"inline",selectable:!1,parseDOM:[{tag:"br"}],toDOM:function(){return c}},ordered_list:{content:"list_item+",group:"block",attrs:{order:{default:1}},parseDOM:[{tag:"ol",getAttrs:function(t){return{order:t.hasAttribute("start")?+t.getAttribute("start"):1}}}],toDOM:function(t){return 1==t.attrs.order?h:["ol",{start:t.attrs.order},0]}},bullet_list:{content:"list_item+",group:"block",parseDOM:[{tag:"ul"}],toDOM:function(){return p}},list_item:{content:"paragraph block*",parseDOM:[{tag:"li"}],toDOM:function(){return l},defining:!0}},marks:{link:{attrs:{href:{},title:{default:null}},inclusive:!1,parseDOM:[{tag:"a[href]",getAttrs:function(t){return{href:t.getAttribute("href"),title:t.getAttribute("title")}}}],toDOM:function(t){var e=t.attrs;return["a",{href:e.href,title:e.title},0]}},em:{parseDOM:[{tag:"i"},{tag:"em"},{style:"font-style=italic"}],toDOM:function(){return e}},strong:{parseDOM:[{tag:"strong"},{tag:"b",getAttrs:function(t){return"normal"!=t.style.fontWeight&&null}},{style:"font-weight",getAttrs:function(t){return/^(bold(er)?|[5-9]\d{2,})$/.test(t)&&null}}],toDOM:function(){return n}},code:{parseDOM:[{tag:"code"}],toDOM:function(){return r}}}}))}},{key:"generateEditorState",value:function(){this.state=De.create({doc:mt.fromSchema(this.schema).parse(this.editorNode),plugins:this.getPluginsList(this.menuNode)}),this.editorNode.innerText=""}},{key:"createEditorView",value:function(){var t={};this.dataset.editorClasses&&(t.class=this.dataset.editorClasses),this.view=new ko(this.editorNode,{state:this.state,attributes:t}),this.view.dom.addEventListener("input",this.handleInputEvent.bind(this))}},{key:"handleInputEvent",value:function(t){t.preventDefault(),t.stopPropagation(),this.debouncedEventHandler()}},{key:"dispatchCustomInputEvent",value:function(){var t=new CustomEvent("input",{detail:this.editorNode.firstChild.innerHTML,bubbles:!0});this.editorNode.dispatchEvent(t)}},{key:"initTools",value:function(){var t;(t=this).commandsManager.addCommand("heading",{action:Bo,activatable:!0}),t.commandsManager.addCommand("paragraph",{action:Bo,activatable:!0}),t.commandsManager.addCommand("blockquote",{action:Vo,activatable:!0}),t.commandsManager.addCommand("code_block",{action:Bo,activatable:!0}),t.commandsManager.addCommand("bullet_list",{action:mi,hideable:!0}),t.commandsManager.addCommand("ordered_list",{action:mi,hideable:!0}),t.commandsManager.addCommand("list_item",{action:mi,hideable:!0}),t.actionsManager.addAction("lift",Io),t.actionsManager.addAction("join_up",Ao),t.actionsManager.addAction("join_down",Ro),t.schemaNodeSpec}},{key:"getPluginsList",value:function(){return[(e=Wo,new Ie({props:{handleKeyDown:ii(e)}})),(t=this,new Ie({view:function(e){return new fi(t,e)}}))];var t,e}}]),i}(c(HTMLElement));customElements.define("alpine-editor",Fi)}));

/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./../../webpack/buildin/global.js */ "./node_modules/webpack/buildin/global.js")))

/***/ }),

/***/ "./node_modules/alpinejs/dist/alpine.js":
/*!**********************************************!*\
  !*** ./node_modules/alpinejs/dist/alpine.js ***!
  \**********************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

(function (global, factory) {
   true ? module.exports = factory() :
  undefined;
}(this, (function () { 'use strict';

  function _defineProperty(obj, key, value) {
    if (key in obj) {
      Object.defineProperty(obj, key, {
        value: value,
        enumerable: true,
        configurable: true,
        writable: true
      });
    } else {
      obj[key] = value;
    }

    return obj;
  }

  function ownKeys(object, enumerableOnly) {
    var keys = Object.keys(object);

    if (Object.getOwnPropertySymbols) {
      var symbols = Object.getOwnPropertySymbols(object);
      if (enumerableOnly) symbols = symbols.filter(function (sym) {
        return Object.getOwnPropertyDescriptor(object, sym).enumerable;
      });
      keys.push.apply(keys, symbols);
    }

    return keys;
  }

  function _objectSpread2(target) {
    for (var i = 1; i < arguments.length; i++) {
      var source = arguments[i] != null ? arguments[i] : {};

      if (i % 2) {
        ownKeys(Object(source), true).forEach(function (key) {
          _defineProperty(target, key, source[key]);
        });
      } else if (Object.getOwnPropertyDescriptors) {
        Object.defineProperties(target, Object.getOwnPropertyDescriptors(source));
      } else {
        ownKeys(Object(source)).forEach(function (key) {
          Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key));
        });
      }
    }

    return target;
  }

  // Thanks @stimulus:
  // https://github.com/stimulusjs/stimulus/blob/master/packages/%40stimulus/core/src/application.ts
  function domReady() {
    return new Promise(resolve => {
      if (document.readyState == "loading") {
        document.addEventListener("DOMContentLoaded", resolve);
      } else {
        resolve();
      }
    });
  }
  function arrayUnique(array) {
    return Array.from(new Set(array));
  }
  function isTesting() {
    return navigator.userAgent.includes("Node.js") || navigator.userAgent.includes("jsdom");
  }
  function checkedAttrLooseCompare(valueA, valueB) {
    return valueA == valueB;
  }
  function warnIfMalformedTemplate(el, directive) {
    if (el.tagName.toLowerCase() !== 'template') {
      console.warn(`Alpine: [${directive}] directive should only be added to <template> tags. See https://github.com/alpinejs/alpine#${directive}`);
    } else if (el.content.childElementCount !== 1) {
      console.warn(`Alpine: <template> tag with [${directive}] encountered with an unexpected number of root elements. Make sure <template> has a single root element. `);
    }
  }
  function kebabCase(subject) {
    return subject.replace(/([a-z])([A-Z])/g, '$1-$2').replace(/[_\s]/, '-').toLowerCase();
  }
  function camelCase(subject) {
    return subject.toLowerCase().replace(/-(\w)/g, (match, char) => char.toUpperCase());
  }
  function walk(el, callback) {
    if (callback(el) === false) return;
    let node = el.firstElementChild;

    while (node) {
      walk(node, callback);
      node = node.nextElementSibling;
    }
  }
  function debounce(func, wait) {
    var timeout;
    return function () {
      var context = this,
          args = arguments;

      var later = function later() {
        timeout = null;
        func.apply(context, args);
      };

      clearTimeout(timeout);
      timeout = setTimeout(later, wait);
    };
  }

  const handleError = (el, expression, error) => {
    console.warn(`Alpine Error: "${error}"\n\nExpression: "${expression}"\nElement:`, el);

    if (!isTesting()) {
      Object.assign(error, {
        el,
        expression
      });
      throw error;
    }
  };

  function tryCatch(cb, {
    el,
    expression
  }) {
    try {
      const value = cb();
      return value instanceof Promise ? value.catch(e => handleError(el, expression, e)) : value;
    } catch (e) {
      handleError(el, expression, e);
    }
  }

  function saferEval(el, expression, dataContext, additionalHelperVariables = {}) {
    return tryCatch(() => {
      if (typeof expression === 'function') {
        return expression.call(dataContext);
      }

      return new Function(['$data', ...Object.keys(additionalHelperVariables)], `var __alpine_result; with($data) { __alpine_result = ${expression} }; return __alpine_result`)(dataContext, ...Object.values(additionalHelperVariables));
    }, {
      el,
      expression
    });
  }
  function saferEvalNoReturn(el, expression, dataContext, additionalHelperVariables = {}) {
    return tryCatch(() => {
      if (typeof expression === 'function') {
        return Promise.resolve(expression.call(dataContext, additionalHelperVariables['$event']));
      }

      let AsyncFunction = Function;
      /* MODERN-ONLY:START */

      AsyncFunction = Object.getPrototypeOf(async function () {}).constructor;
      /* MODERN-ONLY:END */
      // For the cases when users pass only a function reference to the caller: `x-on:click="foo"`
      // Where "foo" is a function. Also, we'll pass the function the event instance when we call it.

      if (Object.keys(dataContext).includes(expression)) {
        let methodReference = new Function(['dataContext', ...Object.keys(additionalHelperVariables)], `with(dataContext) { return ${expression} }`)(dataContext, ...Object.values(additionalHelperVariables));

        if (typeof methodReference === 'function') {
          return Promise.resolve(methodReference.call(dataContext, additionalHelperVariables['$event']));
        } else {
          return Promise.resolve();
        }
      }

      return Promise.resolve(new AsyncFunction(['dataContext', ...Object.keys(additionalHelperVariables)], `with(dataContext) { ${expression} }`)(dataContext, ...Object.values(additionalHelperVariables)));
    }, {
      el,
      expression
    });
  }
  const xAttrRE = /^x-(on|bind|data|text|html|model|if|for|show|cloak|transition|ref|spread)\b/;
  function isXAttr(attr) {
    const name = replaceAtAndColonWithStandardSyntax(attr.name);
    return xAttrRE.test(name);
  }
  function getXAttrs(el, component, type) {
    let directives = Array.from(el.attributes).filter(isXAttr).map(parseHtmlAttribute); // Get an object of directives from x-spread.

    let spreadDirective = directives.filter(directive => directive.type === 'spread')[0];

    if (spreadDirective) {
      let spreadObject = saferEval(el, spreadDirective.expression, component.$data); // Add x-spread directives to the pile of existing directives.

      directives = directives.concat(Object.entries(spreadObject).map(([name, value]) => parseHtmlAttribute({
        name,
        value
      })));
    }

    if (type) return directives.filter(i => i.type === type);
    return sortDirectives(directives);
  }

  function sortDirectives(directives) {
    let directiveOrder = ['bind', 'model', 'show', 'catch-all'];
    return directives.sort((a, b) => {
      let typeA = directiveOrder.indexOf(a.type) === -1 ? 'catch-all' : a.type;
      let typeB = directiveOrder.indexOf(b.type) === -1 ? 'catch-all' : b.type;
      return directiveOrder.indexOf(typeA) - directiveOrder.indexOf(typeB);
    });
  }

  function parseHtmlAttribute({
    name,
    value
  }) {
    const normalizedName = replaceAtAndColonWithStandardSyntax(name);
    const typeMatch = normalizedName.match(xAttrRE);
    const valueMatch = normalizedName.match(/:([a-zA-Z0-9\-:]+)/);
    const modifiers = normalizedName.match(/\.[^.\]]+(?=[^\]]*$)/g) || [];
    return {
      type: typeMatch ? typeMatch[1] : null,
      value: valueMatch ? valueMatch[1] : null,
      modifiers: modifiers.map(i => i.replace('.', '')),
      expression: value
    };
  }
  function isBooleanAttr(attrName) {
    // As per HTML spec table https://html.spec.whatwg.org/multipage/indices.html#attributes-3:boolean-attribute
    // Array roughly ordered by estimated usage
    const booleanAttributes = ['disabled', 'checked', 'required', 'readonly', 'hidden', 'open', 'selected', 'autofocus', 'itemscope', 'multiple', 'novalidate', 'allowfullscreen', 'allowpaymentrequest', 'formnovalidate', 'autoplay', 'controls', 'loop', 'muted', 'playsinline', 'default', 'ismap', 'reversed', 'async', 'defer', 'nomodule'];
    return booleanAttributes.includes(attrName);
  }
  function replaceAtAndColonWithStandardSyntax(name) {
    if (name.startsWith('@')) {
      return name.replace('@', 'x-on:');
    } else if (name.startsWith(':')) {
      return name.replace(':', 'x-bind:');
    }

    return name;
  }
  function convertClassStringToArray(classList, filterFn = Boolean) {
    return classList.split(' ').filter(filterFn);
  }
  const TRANSITION_TYPE_IN = 'in';
  const TRANSITION_TYPE_OUT = 'out';
  const TRANSITION_CANCELLED = 'cancelled';
  function transitionIn(el, show, reject, component, forceSkip = false) {
    // We don't want to transition on the initial page load.
    if (forceSkip) return show();

    if (el.__x_transition && el.__x_transition.type === TRANSITION_TYPE_IN) {
      // there is already a similar transition going on, this was probably triggered by
      // a change in a different property, let's just leave the previous one doing its job
      return;
    }

    const attrs = getXAttrs(el, component, 'transition');
    const showAttr = getXAttrs(el, component, 'show')[0]; // If this is triggered by a x-show.transition.

    if (showAttr && showAttr.modifiers.includes('transition')) {
      let modifiers = showAttr.modifiers; // If x-show.transition.out, we'll skip the "in" transition.

      if (modifiers.includes('out') && !modifiers.includes('in')) return show();
      const settingBothSidesOfTransition = modifiers.includes('in') && modifiers.includes('out'); // If x-show.transition.in...out... only use "in" related modifiers for this transition.

      modifiers = settingBothSidesOfTransition ? modifiers.filter((i, index) => index < modifiers.indexOf('out')) : modifiers;
      transitionHelperIn(el, modifiers, show, reject); // Otherwise, we can assume x-transition:enter.
    } else if (attrs.some(attr => ['enter', 'enter-start', 'enter-end'].includes(attr.value))) {
      transitionClassesIn(el, component, attrs, show, reject);
    } else {
      // If neither, just show that damn thing.
      show();
    }
  }
  function transitionOut(el, hide, reject, component, forceSkip = false) {
    // We don't want to transition on the initial page load.
    if (forceSkip) return hide();

    if (el.__x_transition && el.__x_transition.type === TRANSITION_TYPE_OUT) {
      // there is already a similar transition going on, this was probably triggered by
      // a change in a different property, let's just leave the previous one doing its job
      return;
    }

    const attrs = getXAttrs(el, component, 'transition');
    const showAttr = getXAttrs(el, component, 'show')[0];

    if (showAttr && showAttr.modifiers.includes('transition')) {
      let modifiers = showAttr.modifiers;
      if (modifiers.includes('in') && !modifiers.includes('out')) return hide();
      const settingBothSidesOfTransition = modifiers.includes('in') && modifiers.includes('out');
      modifiers = settingBothSidesOfTransition ? modifiers.filter((i, index) => index > modifiers.indexOf('out')) : modifiers;
      transitionHelperOut(el, modifiers, settingBothSidesOfTransition, hide, reject);
    } else if (attrs.some(attr => ['leave', 'leave-start', 'leave-end'].includes(attr.value))) {
      transitionClassesOut(el, component, attrs, hide, reject);
    } else {
      hide();
    }
  }
  function transitionHelperIn(el, modifiers, showCallback, reject) {
    // Default values inspired by: https://material.io/design/motion/speed.html#duration
    const styleValues = {
      duration: modifierValue(modifiers, 'duration', 150),
      origin: modifierValue(modifiers, 'origin', 'center'),
      first: {
        opacity: 0,
        scale: modifierValue(modifiers, 'scale', 95)
      },
      second: {
        opacity: 1,
        scale: 100
      }
    };
    transitionHelper(el, modifiers, showCallback, () => {}, reject, styleValues, TRANSITION_TYPE_IN);
  }
  function transitionHelperOut(el, modifiers, settingBothSidesOfTransition, hideCallback, reject) {
    // Make the "out" transition .5x slower than the "in". (Visually better)
    // HOWEVER, if they explicitly set a duration for the "out" transition,
    // use that.
    const duration = settingBothSidesOfTransition ? modifierValue(modifiers, 'duration', 150) : modifierValue(modifiers, 'duration', 150) / 2;
    const styleValues = {
      duration: duration,
      origin: modifierValue(modifiers, 'origin', 'center'),
      first: {
        opacity: 1,
        scale: 100
      },
      second: {
        opacity: 0,
        scale: modifierValue(modifiers, 'scale', 95)
      }
    };
    transitionHelper(el, modifiers, () => {}, hideCallback, reject, styleValues, TRANSITION_TYPE_OUT);
  }

  function modifierValue(modifiers, key, fallback) {
    // If the modifier isn't present, use the default.
    if (modifiers.indexOf(key) === -1) return fallback; // If it IS present, grab the value after it: x-show.transition.duration.500ms

    const rawValue = modifiers[modifiers.indexOf(key) + 1];
    if (!rawValue) return fallback;

    if (key === 'scale') {
      // Check if the very next value is NOT a number and return the fallback.
      // If x-show.transition.scale, we'll use the default scale value.
      // That is how a user opts out of the opacity transition.
      if (!isNumeric(rawValue)) return fallback;
    }

    if (key === 'duration') {
      // Support x-show.transition.duration.500ms && duration.500
      let match = rawValue.match(/([0-9]+)ms/);
      if (match) return match[1];
    }

    if (key === 'origin') {
      // Support chaining origin directions: x-show.transition.top.right
      if (['top', 'right', 'left', 'center', 'bottom'].includes(modifiers[modifiers.indexOf(key) + 2])) {
        return [rawValue, modifiers[modifiers.indexOf(key) + 2]].join(' ');
      }
    }

    return rawValue;
  }

  function transitionHelper(el, modifiers, hook1, hook2, reject, styleValues, type) {
    // clear the previous transition if exists to avoid caching the wrong styles
    if (el.__x_transition) {
      el.__x_transition.cancel && el.__x_transition.cancel();
    } // If the user set these style values, we'll put them back when we're done with them.


    const opacityCache = el.style.opacity;
    const transformCache = el.style.transform;
    const transformOriginCache = el.style.transformOrigin; // If no modifiers are present: x-show.transition, we'll default to both opacity and scale.

    const noModifiers = !modifiers.includes('opacity') && !modifiers.includes('scale');
    const transitionOpacity = noModifiers || modifiers.includes('opacity');
    const transitionScale = noModifiers || modifiers.includes('scale'); // These are the explicit stages of a transition (same stages for in and for out).
    // This way you can get a birds eye view of the hooks, and the differences
    // between them.

    const stages = {
      start() {
        if (transitionOpacity) el.style.opacity = styleValues.first.opacity;
        if (transitionScale) el.style.transform = `scale(${styleValues.first.scale / 100})`;
      },

      during() {
        if (transitionScale) el.style.transformOrigin = styleValues.origin;
        el.style.transitionProperty = [transitionOpacity ? `opacity` : ``, transitionScale ? `transform` : ``].join(' ').trim();
        el.style.transitionDuration = `${styleValues.duration / 1000}s`;
        el.style.transitionTimingFunction = `cubic-bezier(0.4, 0.0, 0.2, 1)`;
      },

      show() {
        hook1();
      },

      end() {
        if (transitionOpacity) el.style.opacity = styleValues.second.opacity;
        if (transitionScale) el.style.transform = `scale(${styleValues.second.scale / 100})`;
      },

      hide() {
        hook2();
      },

      cleanup() {
        if (transitionOpacity) el.style.opacity = opacityCache;
        if (transitionScale) el.style.transform = transformCache;
        if (transitionScale) el.style.transformOrigin = transformOriginCache;
        el.style.transitionProperty = null;
        el.style.transitionDuration = null;
        el.style.transitionTimingFunction = null;
      }

    };
    transition(el, stages, type, reject);
  }

  const ensureStringExpression = (expression, el, component) => {
    return typeof expression === 'function' ? component.evaluateReturnExpression(el, expression) : expression;
  };

  function transitionClassesIn(el, component, directives, showCallback, reject) {
    const enter = convertClassStringToArray(ensureStringExpression((directives.find(i => i.value === 'enter') || {
      expression: ''
    }).expression, el, component));
    const enterStart = convertClassStringToArray(ensureStringExpression((directives.find(i => i.value === 'enter-start') || {
      expression: ''
    }).expression, el, component));
    const enterEnd = convertClassStringToArray(ensureStringExpression((directives.find(i => i.value === 'enter-end') || {
      expression: ''
    }).expression, el, component));
    transitionClasses(el, enter, enterStart, enterEnd, showCallback, () => {}, TRANSITION_TYPE_IN, reject);
  }
  function transitionClassesOut(el, component, directives, hideCallback, reject) {
    const leave = convertClassStringToArray(ensureStringExpression((directives.find(i => i.value === 'leave') || {
      expression: ''
    }).expression, el, component));
    const leaveStart = convertClassStringToArray(ensureStringExpression((directives.find(i => i.value === 'leave-start') || {
      expression: ''
    }).expression, el, component));
    const leaveEnd = convertClassStringToArray(ensureStringExpression((directives.find(i => i.value === 'leave-end') || {
      expression: ''
    }).expression, el, component));
    transitionClasses(el, leave, leaveStart, leaveEnd, () => {}, hideCallback, TRANSITION_TYPE_OUT, reject);
  }
  function transitionClasses(el, classesDuring, classesStart, classesEnd, hook1, hook2, type, reject) {
    // clear the previous transition if exists to avoid caching the wrong classes
    if (el.__x_transition) {
      el.__x_transition.cancel && el.__x_transition.cancel();
    }

    const originalClasses = el.__x_original_classes || [];
    const stages = {
      start() {
        el.classList.add(...classesStart);
      },

      during() {
        el.classList.add(...classesDuring);
      },

      show() {
        hook1();
      },

      end() {
        // Don't remove classes that were in the original class attribute.
        el.classList.remove(...classesStart.filter(i => !originalClasses.includes(i)));
        el.classList.add(...classesEnd);
      },

      hide() {
        hook2();
      },

      cleanup() {
        el.classList.remove(...classesDuring.filter(i => !originalClasses.includes(i)));
        el.classList.remove(...classesEnd.filter(i => !originalClasses.includes(i)));
      }

    };
    transition(el, stages, type, reject);
  }
  function transition(el, stages, type, reject) {
    const finish = once(() => {
      stages.hide(); // Adding an "isConnected" check, in case the callback
      // removed the element from the DOM.

      if (el.isConnected) {
        stages.cleanup();
      }

      delete el.__x_transition;
    });
    el.__x_transition = {
      // Set transition type so we can avoid clearing transition if the direction is the same
      type: type,
      // create a callback for the last stages of the transition so we can call it
      // from different point and early terminate it. Once will ensure that function
      // is only called one time.
      cancel: once(() => {
        reject(TRANSITION_CANCELLED);
        finish();
      }),
      finish,
      // This store the next animation frame so we can cancel it
      nextFrame: null
    };
    stages.start();
    stages.during();
    el.__x_transition.nextFrame = requestAnimationFrame(() => {
      // Note: Safari's transitionDuration property will list out comma separated transition durations
      // for every single transition property. Let's grab the first one and call it a day.
      let duration = Number(getComputedStyle(el).transitionDuration.replace(/,.*/, '').replace('s', '')) * 1000;

      if (duration === 0) {
        duration = Number(getComputedStyle(el).animationDuration.replace('s', '')) * 1000;
      }

      stages.show();
      el.__x_transition.nextFrame = requestAnimationFrame(() => {
        stages.end();
        setTimeout(el.__x_transition.finish, duration);
      });
    });
  }
  function isNumeric(subject) {
    return !Array.isArray(subject) && !isNaN(subject);
  } // Thanks @vuejs
  // https://github.com/vuejs/vue/blob/4de4649d9637262a9b007720b59f80ac72a5620c/src/shared/util.js

  function once(callback) {
    let called = false;
    return function () {
      if (!called) {
        called = true;
        callback.apply(this, arguments);
      }
    };
  }

  function handleForDirective(component, templateEl, expression, initialUpdate, extraVars) {
    warnIfMalformedTemplate(templateEl, 'x-for');
    let iteratorNames = typeof expression === 'function' ? parseForExpression(component.evaluateReturnExpression(templateEl, expression)) : parseForExpression(expression);
    let items = evaluateItemsAndReturnEmptyIfXIfIsPresentAndFalseOnElement(component, templateEl, iteratorNames, extraVars); // As we walk the array, we'll also walk the DOM (updating/creating as we go).

    let currentEl = templateEl;
    items.forEach((item, index) => {
      let iterationScopeVariables = getIterationScopeVariables(iteratorNames, item, index, items, extraVars());
      let currentKey = generateKeyForIteration(component, templateEl, index, iterationScopeVariables);
      let nextEl = lookAheadForMatchingKeyedElementAndMoveItIfFound(currentEl.nextElementSibling, currentKey); // If we haven't found a matching key, insert the element at the current position.

      if (!nextEl) {
        nextEl = addElementInLoopAfterCurrentEl(templateEl, currentEl); // And transition it in if it's not the first page load.

        transitionIn(nextEl, () => {}, () => {}, component, initialUpdate);
        nextEl.__x_for = iterationScopeVariables;
        component.initializeElements(nextEl, () => nextEl.__x_for); // Otherwise update the element we found.
      } else {
        // Temporarily remove the key indicator to allow the normal "updateElements" to work.
        delete nextEl.__x_for_key;
        nextEl.__x_for = iterationScopeVariables;
        component.updateElements(nextEl, () => nextEl.__x_for);
      }

      currentEl = nextEl;
      currentEl.__x_for_key = currentKey;
    });
    removeAnyLeftOverElementsFromPreviousUpdate(currentEl, component);
  } // This was taken from VueJS 2.* core. Thanks Vue!

  function parseForExpression(expression) {
    let forIteratorRE = /,([^,\}\]]*)(?:,([^,\}\]]*))?$/;
    let stripParensRE = /^\(|\)$/g;
    let forAliasRE = /([\s\S]*?)\s+(?:in|of)\s+([\s\S]*)/;
    let inMatch = String(expression).match(forAliasRE);
    if (!inMatch) return;
    let res = {};
    res.items = inMatch[2].trim();
    let item = inMatch[1].trim().replace(stripParensRE, '');
    let iteratorMatch = item.match(forIteratorRE);

    if (iteratorMatch) {
      res.item = item.replace(forIteratorRE, '').trim();
      res.index = iteratorMatch[1].trim();

      if (iteratorMatch[2]) {
        res.collection = iteratorMatch[2].trim();
      }
    } else {
      res.item = item;
    }

    return res;
  }

  function getIterationScopeVariables(iteratorNames, item, index, items, extraVars) {
    // We must create a new object, so each iteration has a new scope
    let scopeVariables = extraVars ? _objectSpread2({}, extraVars) : {};
    scopeVariables[iteratorNames.item] = item;
    if (iteratorNames.index) scopeVariables[iteratorNames.index] = index;
    if (iteratorNames.collection) scopeVariables[iteratorNames.collection] = items;
    return scopeVariables;
  }

  function generateKeyForIteration(component, el, index, iterationScopeVariables) {
    let bindKeyAttribute = getXAttrs(el, component, 'bind').filter(attr => attr.value === 'key')[0]; // If the dev hasn't specified a key, just return the index of the iteration.

    if (!bindKeyAttribute) return index;
    return component.evaluateReturnExpression(el, bindKeyAttribute.expression, () => iterationScopeVariables);
  }

  function evaluateItemsAndReturnEmptyIfXIfIsPresentAndFalseOnElement(component, el, iteratorNames, extraVars) {
    let ifAttribute = getXAttrs(el, component, 'if')[0];

    if (ifAttribute && !component.evaluateReturnExpression(el, ifAttribute.expression)) {
      return [];
    }

    let items = component.evaluateReturnExpression(el, iteratorNames.items, extraVars); // This adds support for the `i in n` syntax.

    if (isNumeric(items) && items >= 0) {
      items = Array.from(Array(items).keys(), i => i + 1);
    }

    return items;
  }

  function addElementInLoopAfterCurrentEl(templateEl, currentEl) {
    let clone = document.importNode(templateEl.content, true);
    currentEl.parentElement.insertBefore(clone, currentEl.nextElementSibling);
    return currentEl.nextElementSibling;
  }

  function lookAheadForMatchingKeyedElementAndMoveItIfFound(nextEl, currentKey) {
    if (!nextEl) return; // If we are already past the x-for generated elements, we don't need to look ahead.

    if (nextEl.__x_for_key === undefined) return; // If the the key's DO match, no need to look ahead.

    if (nextEl.__x_for_key === currentKey) return nextEl; // If they don't, we'll look ahead for a match.
    // If we find it, we'll move it to the current position in the loop.

    let tmpNextEl = nextEl;

    while (tmpNextEl) {
      if (tmpNextEl.__x_for_key === currentKey) {
        return tmpNextEl.parentElement.insertBefore(tmpNextEl, nextEl);
      }

      tmpNextEl = tmpNextEl.nextElementSibling && tmpNextEl.nextElementSibling.__x_for_key !== undefined ? tmpNextEl.nextElementSibling : false;
    }
  }

  function removeAnyLeftOverElementsFromPreviousUpdate(currentEl, component) {
    var nextElementFromOldLoop = currentEl.nextElementSibling && currentEl.nextElementSibling.__x_for_key !== undefined ? currentEl.nextElementSibling : false;

    while (nextElementFromOldLoop) {
      let nextElementFromOldLoopImmutable = nextElementFromOldLoop;
      let nextSibling = nextElementFromOldLoop.nextElementSibling;
      transitionOut(nextElementFromOldLoop, () => {
        nextElementFromOldLoopImmutable.remove();
      }, () => {}, component);
      nextElementFromOldLoop = nextSibling && nextSibling.__x_for_key !== undefined ? nextSibling : false;
    }
  }

  function handleAttributeBindingDirective(component, el, attrName, expression, extraVars, attrType, modifiers) {
    var value = component.evaluateReturnExpression(el, expression, extraVars);

    if (attrName === 'value') {
      if (Alpine.ignoreFocusedForValueBinding && document.activeElement.isSameNode(el)) return; // If nested model key is undefined, set the default value to empty string.

      if (value === undefined && String(expression).match(/\./)) {
        value = '';
      }

      if (el.type === 'radio') {
        // Set radio value from x-bind:value, if no "value" attribute exists.
        // If there are any initial state values, radio will have a correct
        // "checked" value since x-bind:value is processed before x-model.
        if (el.attributes.value === undefined && attrType === 'bind') {
          el.value = value;
        } else if (attrType !== 'bind') {
          el.checked = checkedAttrLooseCompare(el.value, value);
        }
      } else if (el.type === 'checkbox') {
        // If we are explicitly binding a string to the :value, set the string,
        // If the value is a boolean, leave it alone, it will be set to "on"
        // automatically.
        if (typeof value !== 'boolean' && ![null, undefined].includes(value) && attrType === 'bind') {
          el.value = String(value);
        } else if (attrType !== 'bind') {
          if (Array.isArray(value)) {
            // I'm purposely not using Array.includes here because it's
            // strict, and because of Numeric/String mis-casting, I
            // want the "includes" to be "fuzzy".
            el.checked = value.some(val => checkedAttrLooseCompare(val, el.value));
          } else {
            el.checked = !!value;
          }
        }
      } else if (el.tagName === 'SELECT') {
        updateSelect(el, value);
      } else {
        if (el.value === value) return;
        el.value = value;
      }
    } else if (attrName === 'class') {
      if (Array.isArray(value)) {
        const originalClasses = el.__x_original_classes || [];
        el.setAttribute('class', arrayUnique(originalClasses.concat(value)).join(' '));
      } else if (typeof value === 'object') {
        // Sorting the keys / class names by their boolean value will ensure that
        // anything that evaluates to `false` and needs to remove classes is run first.
        const keysSortedByBooleanValue = Object.keys(value).sort((a, b) => value[a] - value[b]);
        keysSortedByBooleanValue.forEach(classNames => {
          if (value[classNames]) {
            convertClassStringToArray(classNames).forEach(className => el.classList.add(className));
          } else {
            convertClassStringToArray(classNames).forEach(className => el.classList.remove(className));
          }
        });
      } else {
        const originalClasses = el.__x_original_classes || [];
        const newClasses = value ? convertClassStringToArray(value) : [];
        el.setAttribute('class', arrayUnique(originalClasses.concat(newClasses)).join(' '));
      }
    } else {
      attrName = modifiers.includes('camel') ? camelCase(attrName) : attrName; // If an attribute's bound value is null, undefined or false, remove the attribute

      if ([null, undefined, false].includes(value)) {
        el.removeAttribute(attrName);
      } else {
        isBooleanAttr(attrName) ? setIfChanged(el, attrName, attrName) : setIfChanged(el, attrName, value);
      }
    }
  }

  function setIfChanged(el, attrName, value) {
    if (el.getAttribute(attrName) != value) {
      el.setAttribute(attrName, value);
    }
  }

  function updateSelect(el, value) {
    const arrayWrappedValue = [].concat(value).map(value => {
      return value + '';
    });
    Array.from(el.options).forEach(option => {
      option.selected = arrayWrappedValue.includes(option.value || option.text);
    });
  }

  function handleTextDirective(el, output, expression) {
    // If nested model key is undefined, set the default value to empty string.
    if (output === undefined && String(expression).match(/\./)) {
      output = '';
    }

    el.textContent = output;
  }

  function handleHtmlDirective(component, el, expression, extraVars) {
    el.innerHTML = component.evaluateReturnExpression(el, expression, extraVars);
  }

  function handleShowDirective(component, el, value, modifiers, initialUpdate = false) {
    const hide = () => {
      el.style.display = 'none';
      el.__x_is_shown = false;
    };

    const show = () => {
      if (el.style.length === 1 && el.style.display === 'none') {
        el.removeAttribute('style');
      } else {
        el.style.removeProperty('display');
      }

      el.__x_is_shown = true;
    };

    if (initialUpdate === true) {
      if (value) {
        show();
      } else {
        hide();
      }

      return;
    }

    const handle = (resolve, reject) => {
      if (value) {
        if (el.style.display === 'none' || el.__x_transition) {
          transitionIn(el, () => {
            show();
          }, reject, component);
        }

        resolve(() => {});
      } else {
        if (el.style.display !== 'none') {
          transitionOut(el, () => {
            resolve(() => {
              hide();
            });
          }, reject, component);
        } else {
          resolve(() => {});
        }
      }
    }; // The working of x-show is a bit complex because we need to
    // wait for any child transitions to finish before hiding
    // some element. Also, this has to be done recursively.
    // If x-show.immediate, foregoe the waiting.


    if (modifiers.includes('immediate')) {
      handle(finish => finish(), () => {});
      return;
    } // x-show is encountered during a DOM tree walk. If an element
    // we encounter is NOT a child of another x-show element we
    // can execute the previous x-show stack (if one exists).


    if (component.showDirectiveLastElement && !component.showDirectiveLastElement.contains(el)) {
      component.executeAndClearRemainingShowDirectiveStack();
    }

    component.showDirectiveStack.push(handle);
    component.showDirectiveLastElement = el;
  }

  function handleIfDirective(component, el, expressionResult, initialUpdate, extraVars) {
    warnIfMalformedTemplate(el, 'x-if');
    const elementHasAlreadyBeenAdded = el.nextElementSibling && el.nextElementSibling.__x_inserted_me === true;

    if (expressionResult && (!elementHasAlreadyBeenAdded || el.__x_transition)) {
      const clone = document.importNode(el.content, true);
      el.parentElement.insertBefore(clone, el.nextElementSibling);
      transitionIn(el.nextElementSibling, () => {}, () => {}, component, initialUpdate);
      component.initializeElements(el.nextElementSibling, extraVars);
      el.nextElementSibling.__x_inserted_me = true;
    } else if (!expressionResult && elementHasAlreadyBeenAdded) {
      transitionOut(el.nextElementSibling, () => {
        el.nextElementSibling.remove();
      }, () => {}, component, initialUpdate);
    }
  }

  function registerListener(component, el, event, modifiers, expression, extraVars = {}) {
    const options = {
      passive: modifiers.includes('passive')
    };

    if (modifiers.includes('camel')) {
      event = camelCase(event);
    }

    let handler, listenerTarget;

    if (modifiers.includes('away')) {
      listenerTarget = document;

      handler = e => {
        // Don't do anything if the click came from the element or within it.
        if (el.contains(e.target)) return; // Don't do anything if this element isn't currently visible.

        if (el.offsetWidth < 1 && el.offsetHeight < 1) return; // Now that we are sure the element is visible, AND the click
        // is from outside it, let's run the expression.

        runListenerHandler(component, expression, e, extraVars);

        if (modifiers.includes('once')) {
          document.removeEventListener(event, handler, options);
        }
      };
    } else {
      listenerTarget = modifiers.includes('window') ? window : modifiers.includes('document') ? document : el;

      handler = e => {
        // Remove this global event handler if the element that declared it
        // has been removed. It's now stale.
        if (listenerTarget === window || listenerTarget === document) {
          if (!document.body.contains(el)) {
            listenerTarget.removeEventListener(event, handler, options);
            return;
          }
        }

        if (isKeyEvent(event)) {
          if (isListeningForASpecificKeyThatHasntBeenPressed(e, modifiers)) {
            return;
          }
        }

        if (modifiers.includes('prevent')) e.preventDefault();
        if (modifiers.includes('stop')) e.stopPropagation(); // If the .self modifier isn't present, or if it is present and
        // the target element matches the element we are registering the
        // event on, run the handler

        if (!modifiers.includes('self') || e.target === el) {
          const returnValue = runListenerHandler(component, expression, e, extraVars);
          returnValue.then(value => {
            if (value === false) {
              e.preventDefault();
            } else {
              if (modifiers.includes('once')) {
                listenerTarget.removeEventListener(event, handler, options);
              }
            }
          });
        }
      };
    }

    if (modifiers.includes('debounce')) {
      let nextModifier = modifiers[modifiers.indexOf('debounce') + 1] || 'invalid-wait';
      let wait = isNumeric(nextModifier.split('ms')[0]) ? Number(nextModifier.split('ms')[0]) : 250;
      handler = debounce(handler, wait);
    }

    listenerTarget.addEventListener(event, handler, options);
  }

  function runListenerHandler(component, expression, e, extraVars) {
    return component.evaluateCommandExpression(e.target, expression, () => {
      return _objectSpread2(_objectSpread2({}, extraVars()), {}, {
        '$event': e
      });
    });
  }

  function isKeyEvent(event) {
    return ['keydown', 'keyup'].includes(event);
  }

  function isListeningForASpecificKeyThatHasntBeenPressed(e, modifiers) {
    let keyModifiers = modifiers.filter(i => {
      return !['window', 'document', 'prevent', 'stop'].includes(i);
    });

    if (keyModifiers.includes('debounce')) {
      let debounceIndex = keyModifiers.indexOf('debounce');
      keyModifiers.splice(debounceIndex, isNumeric((keyModifiers[debounceIndex + 1] || 'invalid-wait').split('ms')[0]) ? 2 : 1);
    } // If no modifier is specified, we'll call it a press.


    if (keyModifiers.length === 0) return false; // If one is passed, AND it matches the key pressed, we'll call it a press.

    if (keyModifiers.length === 1 && keyModifiers[0] === keyToModifier(e.key)) return false; // The user is listening for key combinations.

    const systemKeyModifiers = ['ctrl', 'shift', 'alt', 'meta', 'cmd', 'super'];
    const selectedSystemKeyModifiers = systemKeyModifiers.filter(modifier => keyModifiers.includes(modifier));
    keyModifiers = keyModifiers.filter(i => !selectedSystemKeyModifiers.includes(i));

    if (selectedSystemKeyModifiers.length > 0) {
      const activelyPressedKeyModifiers = selectedSystemKeyModifiers.filter(modifier => {
        // Alias "cmd" and "super" to "meta"
        if (modifier === 'cmd' || modifier === 'super') modifier = 'meta';
        return e[`${modifier}Key`];
      }); // If all the modifiers selected are pressed, ...

      if (activelyPressedKeyModifiers.length === selectedSystemKeyModifiers.length) {
        // AND the remaining key is pressed as well. It's a press.
        if (keyModifiers[0] === keyToModifier(e.key)) return false;
      }
    } // We'll call it NOT a valid keypress.


    return true;
  }

  function keyToModifier(key) {
    switch (key) {
      case '/':
        return 'slash';

      case ' ':
      case 'Spacebar':
        return 'space';

      default:
        return key && kebabCase(key);
    }
  }

  function registerModelListener(component, el, modifiers, expression, extraVars) {
    // If the element we are binding to is a select, a radio, or checkbox
    // we'll listen for the change event instead of the "input" event.
    var event = el.tagName.toLowerCase() === 'select' || ['checkbox', 'radio'].includes(el.type) || modifiers.includes('lazy') ? 'change' : 'input';
    const listenerExpression = `${expression} = rightSideOfExpression($event, ${expression})`;
    registerListener(component, el, event, modifiers, listenerExpression, () => {
      return _objectSpread2(_objectSpread2({}, extraVars()), {}, {
        rightSideOfExpression: generateModelAssignmentFunction(el, modifiers, expression)
      });
    });
  }

  function generateModelAssignmentFunction(el, modifiers, expression) {
    if (el.type === 'radio') {
      // Radio buttons only work properly when they share a name attribute.
      // People might assume we take care of that for them, because
      // they already set a shared "x-model" attribute.
      if (!el.hasAttribute('name')) el.setAttribute('name', expression);
    }

    return (event, currentValue) => {
      // Check for event.detail due to an issue where IE11 handles other events as a CustomEvent.
      if (event instanceof CustomEvent && event.detail) {
        return event.detail;
      } else if (el.type === 'checkbox') {
        // If the data we are binding to is an array, toggle its value inside the array.
        if (Array.isArray(currentValue)) {
          const newValue = modifiers.includes('number') ? safeParseNumber(event.target.value) : event.target.value;
          return event.target.checked ? currentValue.concat([newValue]) : currentValue.filter(el => !checkedAttrLooseCompare(el, newValue));
        } else {
          return event.target.checked;
        }
      } else if (el.tagName.toLowerCase() === 'select' && el.multiple) {
        return modifiers.includes('number') ? Array.from(event.target.selectedOptions).map(option => {
          const rawValue = option.value || option.text;
          return safeParseNumber(rawValue);
        }) : Array.from(event.target.selectedOptions).map(option => {
          return option.value || option.text;
        });
      } else {
        const rawValue = event.target.value;
        return modifiers.includes('number') ? safeParseNumber(rawValue) : modifiers.includes('trim') ? rawValue.trim() : rawValue;
      }
    };
  }

  function safeParseNumber(rawValue) {
    const number = rawValue ? parseFloat(rawValue) : null;
    return isNumeric(number) ? number : rawValue;
  }

  /**
   * Copyright (C) 2017 salesforce.com, inc.
   */
  const { isArray } = Array;
  const { getPrototypeOf, create: ObjectCreate, defineProperty: ObjectDefineProperty, defineProperties: ObjectDefineProperties, isExtensible, getOwnPropertyDescriptor, getOwnPropertyNames, getOwnPropertySymbols, preventExtensions, hasOwnProperty, } = Object;
  const { push: ArrayPush, concat: ArrayConcat, map: ArrayMap, } = Array.prototype;
  function isUndefined(obj) {
      return obj === undefined;
  }
  function isFunction(obj) {
      return typeof obj === 'function';
  }
  function isObject(obj) {
      return typeof obj === 'object';
  }
  const proxyToValueMap = new WeakMap();
  function registerProxy(proxy, value) {
      proxyToValueMap.set(proxy, value);
  }
  const unwrap = (replicaOrAny) => proxyToValueMap.get(replicaOrAny) || replicaOrAny;

  function wrapValue(membrane, value) {
      return membrane.valueIsObservable(value) ? membrane.getProxy(value) : value;
  }
  /**
   * Unwrap property descriptors will set value on original descriptor
   * We only need to unwrap if value is specified
   * @param descriptor external descrpitor provided to define new property on original value
   */
  function unwrapDescriptor(descriptor) {
      if (hasOwnProperty.call(descriptor, 'value')) {
          descriptor.value = unwrap(descriptor.value);
      }
      return descriptor;
  }
  function lockShadowTarget(membrane, shadowTarget, originalTarget) {
      const targetKeys = ArrayConcat.call(getOwnPropertyNames(originalTarget), getOwnPropertySymbols(originalTarget));
      targetKeys.forEach((key) => {
          let descriptor = getOwnPropertyDescriptor(originalTarget, key);
          // We do not need to wrap the descriptor if configurable
          // Because we can deal with wrapping it when user goes through
          // Get own property descriptor. There is also a chance that this descriptor
          // could change sometime in the future, so we can defer wrapping
          // until we need to
          if (!descriptor.configurable) {
              descriptor = wrapDescriptor(membrane, descriptor, wrapValue);
          }
          ObjectDefineProperty(shadowTarget, key, descriptor);
      });
      preventExtensions(shadowTarget);
  }
  class ReactiveProxyHandler {
      constructor(membrane, value) {
          this.originalTarget = value;
          this.membrane = membrane;
      }
      get(shadowTarget, key) {
          const { originalTarget, membrane } = this;
          const value = originalTarget[key];
          const { valueObserved } = membrane;
          valueObserved(originalTarget, key);
          return membrane.getProxy(value);
      }
      set(shadowTarget, key, value) {
          const { originalTarget, membrane: { valueMutated } } = this;
          const oldValue = originalTarget[key];
          if (oldValue !== value) {
              originalTarget[key] = value;
              valueMutated(originalTarget, key);
          }
          else if (key === 'length' && isArray(originalTarget)) {
              // fix for issue #236: push will add the new index, and by the time length
              // is updated, the internal length is already equal to the new length value
              // therefore, the oldValue is equal to the value. This is the forking logic
              // to support this use case.
              valueMutated(originalTarget, key);
          }
          return true;
      }
      deleteProperty(shadowTarget, key) {
          const { originalTarget, membrane: { valueMutated } } = this;
          delete originalTarget[key];
          valueMutated(originalTarget, key);
          return true;
      }
      apply(shadowTarget, thisArg, argArray) {
          /* No op */
      }
      construct(target, argArray, newTarget) {
          /* No op */
      }
      has(shadowTarget, key) {
          const { originalTarget, membrane: { valueObserved } } = this;
          valueObserved(originalTarget, key);
          return key in originalTarget;
      }
      ownKeys(shadowTarget) {
          const { originalTarget } = this;
          return ArrayConcat.call(getOwnPropertyNames(originalTarget), getOwnPropertySymbols(originalTarget));
      }
      isExtensible(shadowTarget) {
          const shadowIsExtensible = isExtensible(shadowTarget);
          if (!shadowIsExtensible) {
              return shadowIsExtensible;
          }
          const { originalTarget, membrane } = this;
          const targetIsExtensible = isExtensible(originalTarget);
          if (!targetIsExtensible) {
              lockShadowTarget(membrane, shadowTarget, originalTarget);
          }
          return targetIsExtensible;
      }
      setPrototypeOf(shadowTarget, prototype) {
      }
      getPrototypeOf(shadowTarget) {
          const { originalTarget } = this;
          return getPrototypeOf(originalTarget);
      }
      getOwnPropertyDescriptor(shadowTarget, key) {
          const { originalTarget, membrane } = this;
          const { valueObserved } = this.membrane;
          // keys looked up via hasOwnProperty need to be reactive
          valueObserved(originalTarget, key);
          let desc = getOwnPropertyDescriptor(originalTarget, key);
          if (isUndefined(desc)) {
              return desc;
          }
          const shadowDescriptor = getOwnPropertyDescriptor(shadowTarget, key);
          if (!isUndefined(shadowDescriptor)) {
              return shadowDescriptor;
          }
          // Note: by accessing the descriptor, the key is marked as observed
          // but access to the value, setter or getter (if available) cannot observe
          // mutations, just like regular methods, in which case we just do nothing.
          desc = wrapDescriptor(membrane, desc, wrapValue);
          if (!desc.configurable) {
              // If descriptor from original target is not configurable,
              // We must copy the wrapped descriptor over to the shadow target.
              // Otherwise, proxy will throw an invariant error.
              // This is our last chance to lock the value.
              // https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Proxy/handler/getOwnPropertyDescriptor#Invariants
              ObjectDefineProperty(shadowTarget, key, desc);
          }
          return desc;
      }
      preventExtensions(shadowTarget) {
          const { originalTarget, membrane } = this;
          lockShadowTarget(membrane, shadowTarget, originalTarget);
          preventExtensions(originalTarget);
          return true;
      }
      defineProperty(shadowTarget, key, descriptor) {
          const { originalTarget, membrane } = this;
          const { valueMutated } = membrane;
          const { configurable } = descriptor;
          // We have to check for value in descriptor
          // because Object.freeze(proxy) calls this method
          // with only { configurable: false, writeable: false }
          // Additionally, method will only be called with writeable:false
          // if the descriptor has a value, as opposed to getter/setter
          // So we can just check if writable is present and then see if
          // value is present. This eliminates getter and setter descriptors
          if (hasOwnProperty.call(descriptor, 'writable') && !hasOwnProperty.call(descriptor, 'value')) {
              const originalDescriptor = getOwnPropertyDescriptor(originalTarget, key);
              descriptor.value = originalDescriptor.value;
          }
          ObjectDefineProperty(originalTarget, key, unwrapDescriptor(descriptor));
          if (configurable === false) {
              ObjectDefineProperty(shadowTarget, key, wrapDescriptor(membrane, descriptor, wrapValue));
          }
          valueMutated(originalTarget, key);
          return true;
      }
  }

  function wrapReadOnlyValue(membrane, value) {
      return membrane.valueIsObservable(value) ? membrane.getReadOnlyProxy(value) : value;
  }
  class ReadOnlyHandler {
      constructor(membrane, value) {
          this.originalTarget = value;
          this.membrane = membrane;
      }
      get(shadowTarget, key) {
          const { membrane, originalTarget } = this;
          const value = originalTarget[key];
          const { valueObserved } = membrane;
          valueObserved(originalTarget, key);
          return membrane.getReadOnlyProxy(value);
      }
      set(shadowTarget, key, value) {
          return false;
      }
      deleteProperty(shadowTarget, key) {
          return false;
      }
      apply(shadowTarget, thisArg, argArray) {
          /* No op */
      }
      construct(target, argArray, newTarget) {
          /* No op */
      }
      has(shadowTarget, key) {
          const { originalTarget, membrane: { valueObserved } } = this;
          valueObserved(originalTarget, key);
          return key in originalTarget;
      }
      ownKeys(shadowTarget) {
          const { originalTarget } = this;
          return ArrayConcat.call(getOwnPropertyNames(originalTarget), getOwnPropertySymbols(originalTarget));
      }
      setPrototypeOf(shadowTarget, prototype) {
      }
      getOwnPropertyDescriptor(shadowTarget, key) {
          const { originalTarget, membrane } = this;
          const { valueObserved } = membrane;
          // keys looked up via hasOwnProperty need to be reactive
          valueObserved(originalTarget, key);
          let desc = getOwnPropertyDescriptor(originalTarget, key);
          if (isUndefined(desc)) {
              return desc;
          }
          const shadowDescriptor = getOwnPropertyDescriptor(shadowTarget, key);
          if (!isUndefined(shadowDescriptor)) {
              return shadowDescriptor;
          }
          // Note: by accessing the descriptor, the key is marked as observed
          // but access to the value or getter (if available) cannot be observed,
          // just like regular methods, in which case we just do nothing.
          desc = wrapDescriptor(membrane, desc, wrapReadOnlyValue);
          if (hasOwnProperty.call(desc, 'set')) {
              desc.set = undefined; // readOnly membrane does not allow setters
          }
          if (!desc.configurable) {
              // If descriptor from original target is not configurable,
              // We must copy the wrapped descriptor over to the shadow target.
              // Otherwise, proxy will throw an invariant error.
              // This is our last chance to lock the value.
              // https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Proxy/handler/getOwnPropertyDescriptor#Invariants
              ObjectDefineProperty(shadowTarget, key, desc);
          }
          return desc;
      }
      preventExtensions(shadowTarget) {
          return false;
      }
      defineProperty(shadowTarget, key, descriptor) {
          return false;
      }
  }
  function createShadowTarget(value) {
      let shadowTarget = undefined;
      if (isArray(value)) {
          shadowTarget = [];
      }
      else if (isObject(value)) {
          shadowTarget = {};
      }
      return shadowTarget;
  }
  const ObjectDotPrototype = Object.prototype;
  function defaultValueIsObservable(value) {
      // intentionally checking for null
      if (value === null) {
          return false;
      }
      // treat all non-object types, including undefined, as non-observable values
      if (typeof value !== 'object') {
          return false;
      }
      if (isArray(value)) {
          return true;
      }
      const proto = getPrototypeOf(value);
      return (proto === ObjectDotPrototype || proto === null || getPrototypeOf(proto) === null);
  }
  const defaultValueObserved = (obj, key) => {
      /* do nothing */
  };
  const defaultValueMutated = (obj, key) => {
      /* do nothing */
  };
  const defaultValueDistortion = (value) => value;
  function wrapDescriptor(membrane, descriptor, getValue) {
      const { set, get } = descriptor;
      if (hasOwnProperty.call(descriptor, 'value')) {
          descriptor.value = getValue(membrane, descriptor.value);
      }
      else {
          if (!isUndefined(get)) {
              descriptor.get = function () {
                  // invoking the original getter with the original target
                  return getValue(membrane, get.call(unwrap(this)));
              };
          }
          if (!isUndefined(set)) {
              descriptor.set = function (value) {
                  // At this point we don't have a clear indication of whether
                  // or not a valid mutation will occur, we don't have the key,
                  // and we are not sure why and how they are invoking this setter.
                  // Nevertheless we preserve the original semantics by invoking the
                  // original setter with the original target and the unwrapped value
                  set.call(unwrap(this), membrane.unwrapProxy(value));
              };
          }
      }
      return descriptor;
  }
  class ReactiveMembrane {
      constructor(options) {
          this.valueDistortion = defaultValueDistortion;
          this.valueMutated = defaultValueMutated;
          this.valueObserved = defaultValueObserved;
          this.valueIsObservable = defaultValueIsObservable;
          this.objectGraph = new WeakMap();
          if (!isUndefined(options)) {
              const { valueDistortion, valueMutated, valueObserved, valueIsObservable } = options;
              this.valueDistortion = isFunction(valueDistortion) ? valueDistortion : defaultValueDistortion;
              this.valueMutated = isFunction(valueMutated) ? valueMutated : defaultValueMutated;
              this.valueObserved = isFunction(valueObserved) ? valueObserved : defaultValueObserved;
              this.valueIsObservable = isFunction(valueIsObservable) ? valueIsObservable : defaultValueIsObservable;
          }
      }
      getProxy(value) {
          const unwrappedValue = unwrap(value);
          const distorted = this.valueDistortion(unwrappedValue);
          if (this.valueIsObservable(distorted)) {
              const o = this.getReactiveState(unwrappedValue, distorted);
              // when trying to extract the writable version of a readonly
              // we return the readonly.
              return o.readOnly === value ? value : o.reactive;
          }
          return distorted;
      }
      getReadOnlyProxy(value) {
          value = unwrap(value);
          const distorted = this.valueDistortion(value);
          if (this.valueIsObservable(distorted)) {
              return this.getReactiveState(value, distorted).readOnly;
          }
          return distorted;
      }
      unwrapProxy(p) {
          return unwrap(p);
      }
      getReactiveState(value, distortedValue) {
          const { objectGraph, } = this;
          let reactiveState = objectGraph.get(distortedValue);
          if (reactiveState) {
              return reactiveState;
          }
          const membrane = this;
          reactiveState = {
              get reactive() {
                  const reactiveHandler = new ReactiveProxyHandler(membrane, distortedValue);
                  // caching the reactive proxy after the first time it is accessed
                  const proxy = new Proxy(createShadowTarget(distortedValue), reactiveHandler);
                  registerProxy(proxy, value);
                  ObjectDefineProperty(this, 'reactive', { value: proxy });
                  return proxy;
              },
              get readOnly() {
                  const readOnlyHandler = new ReadOnlyHandler(membrane, distortedValue);
                  // caching the readOnly proxy after the first time it is accessed
                  const proxy = new Proxy(createShadowTarget(distortedValue), readOnlyHandler);
                  registerProxy(proxy, value);
                  ObjectDefineProperty(this, 'readOnly', { value: proxy });
                  return proxy;
              }
          };
          objectGraph.set(distortedValue, reactiveState);
          return reactiveState;
      }
  }
  /** version: 0.26.0 */

  function wrap(data, mutationCallback) {

    let membrane = new ReactiveMembrane({
      valueMutated(target, key) {
        mutationCallback(target, key);
      }

    });
    return {
      data: membrane.getProxy(data),
      membrane: membrane
    };
  }
  function unwrap$1(membrane, observable) {
    let unwrappedData = membrane.unwrapProxy(observable);
    let copy = {};
    Object.keys(unwrappedData).forEach(key => {
      if (['$el', '$refs', '$nextTick', '$watch'].includes(key)) return;
      copy[key] = unwrappedData[key];
    });
    return copy;
  }

  class Component {
    constructor(el, componentForClone = null) {
      this.$el = el;
      const dataAttr = this.$el.getAttribute('x-data');
      const dataExpression = dataAttr === '' ? '{}' : dataAttr;
      const initExpression = this.$el.getAttribute('x-init');
      let dataExtras = {
        $el: this.$el
      };
      let canonicalComponentElementReference = componentForClone ? componentForClone.$el : this.$el;
      Object.entries(Alpine.magicProperties).forEach(([name, callback]) => {
        Object.defineProperty(dataExtras, `$${name}`, {
          get: function get() {
            return callback(canonicalComponentElementReference);
          }
        });
      });
      this.unobservedData = componentForClone ? componentForClone.getUnobservedData() : saferEval(el, dataExpression, dataExtras);
      // Construct a Proxy-based observable. This will be used to handle reactivity.

      let {
        membrane,
        data
      } = this.wrapDataInObservable(this.unobservedData);
      this.$data = data;
      this.membrane = membrane; // After making user-supplied data methods reactive, we can now add
      // our magic properties to the original data for access.

      this.unobservedData.$el = this.$el;
      this.unobservedData.$refs = this.getRefsProxy();
      this.nextTickStack = [];

      this.unobservedData.$nextTick = callback => {
        this.nextTickStack.push(callback);
      };

      this.watchers = {};

      this.unobservedData.$watch = (property, callback) => {
        if (!this.watchers[property]) this.watchers[property] = [];
        this.watchers[property].push(callback);
      };
      /* MODERN-ONLY:START */
      // We remove this piece of code from the legacy build.
      // In IE11, we have already defined our helpers at this point.
      // Register custom magic properties.


      Object.entries(Alpine.magicProperties).forEach(([name, callback]) => {
        Object.defineProperty(this.unobservedData, `$${name}`, {
          get: function get() {
            return callback(canonicalComponentElementReference, this.$el);
          }
        });
      });
      /* MODERN-ONLY:END */

      this.showDirectiveStack = [];
      this.showDirectiveLastElement;
      componentForClone || Alpine.onBeforeComponentInitializeds.forEach(callback => callback(this));
      var initReturnedCallback; // If x-init is present AND we aren't cloning (skip x-init on clone)

      if (initExpression && !componentForClone) {
        // We want to allow data manipulation, but not trigger DOM updates just yet.
        // We haven't even initialized the elements with their Alpine bindings. I mean c'mon.
        this.pauseReactivity = true;
        initReturnedCallback = this.evaluateReturnExpression(this.$el, initExpression);
        this.pauseReactivity = false;
      } // Register all our listeners and set all our attribute bindings.
      // If we're cloning a component, the third parameter ensures no duplicate
      // event listeners are registered (the mutation observer will take care of them)


      this.initializeElements(this.$el, () => {}, componentForClone); // Use mutation observer to detect new elements being added within this component at run-time.
      // Alpine's just so darn flexible amirite?

      this.listenForNewElementsToInitialize();

      if (typeof initReturnedCallback === 'function') {
        // Run the callback returned from the "x-init" hook to allow the user to do stuff after
        // Alpine's got it's grubby little paws all over everything.
        initReturnedCallback.call(this.$data);
      }

      componentForClone || setTimeout(() => {
        Alpine.onComponentInitializeds.forEach(callback => callback(this));
      }, 0);
    }

    getUnobservedData() {
      return unwrap$1(this.membrane, this.$data);
    }

    wrapDataInObservable(data) {
      var self = this;
      let updateDom = debounce(function () {
        self.updateElements(self.$el);
      }, 0);
      return wrap(data, (target, key) => {
        if (self.watchers[key]) {
          // If there's a watcher for this specific key, run it.
          self.watchers[key].forEach(callback => callback(target[key]));
        } else if (Array.isArray(target)) {
          // Arrays are special cases, if any of the items change, we consider the array as mutated.
          Object.keys(self.watchers).forEach(fullDotNotationKey => {
            let dotNotationParts = fullDotNotationKey.split('.'); // Ignore length mutations since they would result in duplicate calls.
            // For example, when calling push, we would get a mutation for the item's key
            // and a second mutation for the length property.

            if (key === 'length') return;
            dotNotationParts.reduce((comparisonData, part) => {
              if (Object.is(target, comparisonData[part])) {
                self.watchers[fullDotNotationKey].forEach(callback => callback(target));
              }

              return comparisonData[part];
            }, self.unobservedData);
          });
        } else {
          // Let's walk through the watchers with "dot-notation" (foo.bar) and see
          // if this mutation fits any of them.
          Object.keys(self.watchers).filter(i => i.includes('.')).forEach(fullDotNotationKey => {
            let dotNotationParts = fullDotNotationKey.split('.'); // If this dot-notation watcher's last "part" doesn't match the current
            // key, then skip it early for performance reasons.

            if (key !== dotNotationParts[dotNotationParts.length - 1]) return; // Now, walk through the dot-notation "parts" recursively to find
            // a match, and call the watcher if one's found.

            dotNotationParts.reduce((comparisonData, part) => {
              if (Object.is(target, comparisonData)) {
                // Run the watchers.
                self.watchers[fullDotNotationKey].forEach(callback => callback(target[key]));
              }

              return comparisonData[part];
            }, self.unobservedData);
          });
        } // Don't react to data changes for cases like the `x-created` hook.


        if (self.pauseReactivity) return;
        updateDom();
      });
    }

    walkAndSkipNestedComponents(el, callback, initializeComponentCallback = () => {}) {
      walk(el, el => {
        // We've hit a component.
        if (el.hasAttribute('x-data')) {
          // If it's not the current one.
          if (!el.isSameNode(this.$el)) {
            // Initialize it if it's not.
            if (!el.__x) initializeComponentCallback(el); // Now we'll let that sub-component deal with itself.

            return false;
          }
        }

        return callback(el);
      });
    }

    initializeElements(rootEl, extraVars = () => {}, componentForClone = false) {
      this.walkAndSkipNestedComponents(rootEl, el => {
        // Don't touch spawns from for loop
        if (el.__x_for_key !== undefined) return false; // Don't touch spawns from if directives

        if (el.__x_inserted_me !== undefined) return false;
        this.initializeElement(el, extraVars, componentForClone ? false : true);
      }, el => {
        if (!componentForClone) el.__x = new Component(el);
      });
      this.executeAndClearRemainingShowDirectiveStack();
      this.executeAndClearNextTickStack(rootEl);
    }

    initializeElement(el, extraVars, shouldRegisterListeners = true) {
      // To support class attribute merging, we have to know what the element's
      // original class attribute looked like for reference.
      if (el.hasAttribute('class') && getXAttrs(el, this).length > 0) {
        el.__x_original_classes = convertClassStringToArray(el.getAttribute('class'));
      }

      shouldRegisterListeners && this.registerListeners(el, extraVars);
      this.resolveBoundAttributes(el, true, extraVars);
    }

    updateElements(rootEl, extraVars = () => {}) {
      this.walkAndSkipNestedComponents(rootEl, el => {
        // Don't touch spawns from for loop (and check if the root is actually a for loop in a parent, don't skip it.)
        if (el.__x_for_key !== undefined && !el.isSameNode(this.$el)) return false;
        this.updateElement(el, extraVars);
      }, el => {
        el.__x = new Component(el);
      });
      this.executeAndClearRemainingShowDirectiveStack();
      this.executeAndClearNextTickStack(rootEl);
    }

    executeAndClearNextTickStack(el) {
      // Skip spawns from alpine directives
      if (el === this.$el && this.nextTickStack.length > 0) {
        // We run the tick stack after the next frame to allow any
        // running transitions to pass the initial show stage.
        requestAnimationFrame(() => {
          while (this.nextTickStack.length > 0) {
            this.nextTickStack.shift()();
          }
        });
      }
    }

    executeAndClearRemainingShowDirectiveStack() {
      // The goal here is to start all the x-show transitions
      // and build a nested promise chain so that elements
      // only hide when the children are finished hiding.
      this.showDirectiveStack.reverse().map(handler => {
        return new Promise((resolve, reject) => {
          handler(resolve, reject);
        });
      }).reduce((promiseChain, promise) => {
        return promiseChain.then(() => {
          return promise.then(finishElement => {
            finishElement();
          });
        });
      }, Promise.resolve(() => {})).catch(e => {
        if (e !== TRANSITION_CANCELLED) throw e;
      }); // We've processed the handler stack. let's clear it.

      this.showDirectiveStack = [];
      this.showDirectiveLastElement = undefined;
    }

    updateElement(el, extraVars) {
      this.resolveBoundAttributes(el, false, extraVars);
    }

    registerListeners(el, extraVars) {
      getXAttrs(el, this).forEach(({
        type,
        value,
        modifiers,
        expression
      }) => {
        switch (type) {
          case 'on':
            registerListener(this, el, value, modifiers, expression, extraVars);
            break;

          case 'model':
            registerModelListener(this, el, modifiers, expression, extraVars);
            break;
        }
      });
    }

    resolveBoundAttributes(el, initialUpdate = false, extraVars) {
      let attrs = getXAttrs(el, this);
      attrs.forEach(({
        type,
        value,
        modifiers,
        expression
      }) => {
        switch (type) {
          case 'model':
            handleAttributeBindingDirective(this, el, 'value', expression, extraVars, type, modifiers);
            break;

          case 'bind':
            // The :key binding on an x-for is special, ignore it.
            if (el.tagName.toLowerCase() === 'template' && value === 'key') return;
            handleAttributeBindingDirective(this, el, value, expression, extraVars, type, modifiers);
            break;

          case 'text':
            var output = this.evaluateReturnExpression(el, expression, extraVars);
            handleTextDirective(el, output, expression);
            break;

          case 'html':
            handleHtmlDirective(this, el, expression, extraVars);
            break;

          case 'show':
            var output = this.evaluateReturnExpression(el, expression, extraVars);
            handleShowDirective(this, el, output, modifiers, initialUpdate);
            break;

          case 'if':
            // If this element also has x-for on it, don't process x-if.
            // We will let the "x-for" directive handle the "if"ing.
            if (attrs.some(i => i.type === 'for')) return;
            var output = this.evaluateReturnExpression(el, expression, extraVars);
            handleIfDirective(this, el, output, initialUpdate, extraVars);
            break;

          case 'for':
            handleForDirective(this, el, expression, initialUpdate, extraVars);
            break;

          case 'cloak':
            el.removeAttribute('x-cloak');
            break;
        }
      });
    }

    evaluateReturnExpression(el, expression, extraVars = () => {}) {
      return saferEval(el, expression, this.$data, _objectSpread2(_objectSpread2({}, extraVars()), {}, {
        $dispatch: this.getDispatchFunction(el)
      }));
    }

    evaluateCommandExpression(el, expression, extraVars = () => {}) {
      return saferEvalNoReturn(el, expression, this.$data, _objectSpread2(_objectSpread2({}, extraVars()), {}, {
        $dispatch: this.getDispatchFunction(el)
      }));
    }

    getDispatchFunction(el) {
      return (event, detail = {}) => {
        el.dispatchEvent(new CustomEvent(event, {
          detail,
          bubbles: true
        }));
      };
    }

    listenForNewElementsToInitialize() {
      const targetNode = this.$el;
      const observerOptions = {
        childList: true,
        attributes: true,
        subtree: true
      };
      const observer = new MutationObserver(mutations => {
        for (let i = 0; i < mutations.length; i++) {
          // Filter out mutations triggered from child components.
          const closestParentComponent = mutations[i].target.closest('[x-data]');
          if (!(closestParentComponent && closestParentComponent.isSameNode(this.$el))) continue;

          if (mutations[i].type === 'attributes' && mutations[i].attributeName === 'x-data') {
            const xAttr = mutations[i].target.getAttribute('x-data') || '{}';
            const rawData = saferEval(this.$el, xAttr, {
              $el: this.$el
            });
            Object.keys(rawData).forEach(key => {
              if (this.$data[key] !== rawData[key]) {
                this.$data[key] = rawData[key];
              }
            });
          }

          if (mutations[i].addedNodes.length > 0) {
            mutations[i].addedNodes.forEach(node => {
              if (node.nodeType !== 1 || node.__x_inserted_me) return;

              if (node.matches('[x-data]') && !node.__x) {
                node.__x = new Component(node);
                return;
              }

              this.initializeElements(node);
            });
          }
        }
      });
      observer.observe(targetNode, observerOptions);
    }

    getRefsProxy() {
      var self = this;
      var refObj = {};
      // One of the goals of this is to not hold elements in memory, but rather re-evaluate
      // the DOM when the system needs something from it. This way, the framework is flexible and
      // friendly to outside DOM changes from libraries like Vue/Livewire.
      // For this reason, I'm using an "on-demand" proxy to fake a "$refs" object.

      return new Proxy(refObj, {
        get(object, property) {
          if (property === '$isAlpineProxy') return true;
          var ref; // We can't just query the DOM because it's hard to filter out refs in
          // nested components.

          self.walkAndSkipNestedComponents(self.$el, el => {
            if (el.hasAttribute('x-ref') && el.getAttribute('x-ref') === property) {
              ref = el;
            }
          });
          return ref;
        }

      });
    }

  }

  const Alpine = {
    version: "2.8.2",
    pauseMutationObserver: false,
    magicProperties: {},
    onComponentInitializeds: [],
    onBeforeComponentInitializeds: [],
    ignoreFocusedForValueBinding: false,
    start: async function start() {
      if (!isTesting()) {
        await domReady();
      }

      this.discoverComponents(el => {
        this.initializeComponent(el);
      }); // It's easier and more performant to just support Turbolinks than listen
      // to MutationObserver mutations at the document level.

      document.addEventListener("turbolinks:load", () => {
        this.discoverUninitializedComponents(el => {
          this.initializeComponent(el);
        });
      });
      this.listenForNewUninitializedComponentsAtRunTime();
    },
    discoverComponents: function discoverComponents(callback) {
      const rootEls = document.querySelectorAll('[x-data]');
      rootEls.forEach(rootEl => {
        callback(rootEl);
      });
    },
    discoverUninitializedComponents: function discoverUninitializedComponents(callback, el = null) {
      const rootEls = (el || document).querySelectorAll('[x-data]');
      Array.from(rootEls).filter(el => el.__x === undefined).forEach(rootEl => {
        callback(rootEl);
      });
    },
    listenForNewUninitializedComponentsAtRunTime: function listenForNewUninitializedComponentsAtRunTime() {
      const targetNode = document.querySelector('body');
      const observerOptions = {
        childList: true,
        attributes: true,
        subtree: true
      };
      const observer = new MutationObserver(mutations => {
        if (this.pauseMutationObserver) return;

        for (let i = 0; i < mutations.length; i++) {
          if (mutations[i].addedNodes.length > 0) {
            mutations[i].addedNodes.forEach(node => {
              // Discard non-element nodes (like line-breaks)
              if (node.nodeType !== 1) return; // Discard any changes happening within an existing component.
              // They will take care of themselves.

              if (node.parentElement && node.parentElement.closest('[x-data]')) return;
              this.discoverUninitializedComponents(el => {
                this.initializeComponent(el);
              }, node.parentElement);
            });
          }
        }
      });
      observer.observe(targetNode, observerOptions);
    },
    initializeComponent: function initializeComponent(el) {
      if (!el.__x) {
        // Wrap in a try/catch so that we don't prevent other components
        // from initializing when one component contains an error.
        try {
          el.__x = new Component(el);
        } catch (error) {
          setTimeout(() => {
            throw error;
          }, 0);
        }
      }
    },
    clone: function clone(component, newEl) {
      if (!newEl.__x) {
        newEl.__x = new Component(newEl, component);
      }
    },
    addMagicProperty: function addMagicProperty(name, callback) {
      this.magicProperties[name] = callback;
    },
    onComponentInitialized: function onComponentInitialized(callback) {
      this.onComponentInitializeds.push(callback);
    },
    onBeforeComponentInitialized: function onBeforeComponentInitialized(callback) {
      this.onBeforeComponentInitializeds.push(callback);
    }
  };

  if (!isTesting()) {
    window.Alpine = Alpine;

    if (window.deferLoadingAlpine) {
      window.deferLoadingAlpine(function () {
        window.Alpine.start();
      });
    } else {
      window.Alpine.start();
    }
  }

  return Alpine;

})));


/***/ }),

/***/ "./node_modules/livewire-sortable/dist/livewire-sortable.js":
/*!******************************************************************!*\
  !*** ./node_modules/livewire-sortable/dist/livewire-sortable.js ***!
  \******************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var __WEBPACK_AMD_DEFINE_FACTORY__, __WEBPACK_AMD_DEFINE_RESULT__;!function(e){ true?!(__WEBPACK_AMD_DEFINE_FACTORY__ = (e),
				__WEBPACK_AMD_DEFINE_RESULT__ = (typeof __WEBPACK_AMD_DEFINE_FACTORY__ === 'function' ?
				(__WEBPACK_AMD_DEFINE_FACTORY__.call(exports, __webpack_require__, exports, module)) :
				__WEBPACK_AMD_DEFINE_FACTORY__),
				__WEBPACK_AMD_DEFINE_RESULT__ !== undefined && (module.exports = __WEBPACK_AMD_DEFINE_RESULT__)):undefined}((function(){"use strict";var e,t=function(e,t){return e(t={exports:{}},t.exports),t.exports}((function(e,t){var r;window,r=function(){return function(e){var t={};function r(n){if(t[n])return t[n].exports;var o=t[n]={i:n,l:!1,exports:{}};return e[n].call(o.exports,o,o.exports,r),o.l=!0,o.exports}return r.m=e,r.c=t,r.d=function(e,t,n){r.o(e,t)||Object.defineProperty(e,t,{enumerable:!0,get:n})},r.r=function(e){"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},r.t=function(e,t){if(1&t&&(e=r(e)),8&t)return e;if(4&t&&"object"==typeof e&&e&&e.__esModule)return e;var n=Object.create(null);if(r.r(n),Object.defineProperty(n,"default",{enumerable:!0,value:e}),2&t&&"string"!=typeof e)for(var o in e)r.d(n,o,function(t){return e[t]}.bind(null,o));return n},r.n=function(e){var t=e&&e.__esModule?function(){return e.default}:function(){return e};return r.d(t,"a",t),t},r.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},r.p="",r(r.s=44)}([function(e,t,r){Object.defineProperty(t,"__esModule",{value:!0});var n=r(19);Object.keys(n).forEach((function(e){"default"!==e&&"__esModule"!==e&&Object.defineProperty(t,e,{enumerable:!0,get:function(){return n[e]}})}))},function(e,t,r){Object.defineProperty(t,"__esModule",{value:!0});var n,o=r(22),i=(n=o)&&n.__esModule?n:{default:n};t.default=i.default},function(e,t,r){Object.defineProperty(t,"__esModule",{value:!0});var n=r(26);Object.defineProperty(t,"closest",{enumerable:!0,get:function(){return i(n).default}});var o=r(24);function i(e){return e&&e.__esModule?e:{default:e}}Object.defineProperty(t,"requestNextAnimationFrame",{enumerable:!0,get:function(){return i(o).default}})},function(e,t,r){Object.defineProperty(t,"__esModule",{value:!0});var n,o=r(42),i=(n=o)&&n.__esModule?n:{default:n};t.default=i.default},function(e,t,r){Object.defineProperty(t,"__esModule",{value:!0});var n,o=r(35),i=(n=o)&&n.__esModule?n:{default:n};t.default=i.default},function(e,t,r){Object.defineProperty(t,"__esModule",{value:!0});var n=r(1);Object.defineProperty(t,"Sensor",{enumerable:!0,get:function(){return c(n).default}});var o=r(21);Object.defineProperty(t,"MouseSensor",{enumerable:!0,get:function(){return c(o).default}});var i=r(18);Object.defineProperty(t,"TouchSensor",{enumerable:!0,get:function(){return c(i).default}});var s=r(16);Object.defineProperty(t,"DragSensor",{enumerable:!0,get:function(){return c(s).default}});var a=r(14);Object.defineProperty(t,"ForceTouchSensor",{enumerable:!0,get:function(){return c(a).default}});var l=r(0);function c(e){return e&&e.__esModule?e:{default:e}}Object.keys(l).forEach((function(e){"default"!==e&&"__esModule"!==e&&Object.defineProperty(t,e,{enumerable:!0,get:function(){return l[e]}})}))},function(e,t,r){Object.defineProperty(t,"__esModule",{value:!0});var n=r(37);Object.defineProperty(t,"Announcement",{enumerable:!0,get:function(){return a(n).default}}),Object.defineProperty(t,"defaultAnnouncementOptions",{enumerable:!0,get:function(){return n.defaultOptions}});var o=r(34);Object.defineProperty(t,"Focusable",{enumerable:!0,get:function(){return a(o).default}});var i=r(32);Object.defineProperty(t,"Mirror",{enumerable:!0,get:function(){return a(i).default}}),Object.defineProperty(t,"defaultMirrorOptions",{enumerable:!0,get:function(){return i.defaultOptions}});var s=r(28);function a(e){return e&&e.__esModule?e:{default:e}}Object.defineProperty(t,"Scrollable",{enumerable:!0,get:function(){return a(s).default}}),Object.defineProperty(t,"defaultScrollableOptions",{enumerable:!0,get:function(){return s.defaultOptions}})},function(e,t,r){Object.defineProperty(t,"__esModule",{value:!0});var n=r(38);Object.keys(n).forEach((function(e){"default"!==e&&"__esModule"!==e&&Object.defineProperty(t,e,{enumerable:!0,get:function(){return n[e]}})}))},function(e,t,r){Object.defineProperty(t,"__esModule",{value:!0});var n=r(39);Object.keys(n).forEach((function(e){"default"!==e&&"__esModule"!==e&&Object.defineProperty(t,e,{enumerable:!0,get:function(){return n[e]}})}))},function(e,t,r){Object.defineProperty(t,"__esModule",{value:!0});var n=r(43);Object.keys(n).forEach((function(e){"default"!==e&&"__esModule"!==e&&Object.defineProperty(t,e,{enumerable:!0,get:function(){return n[e]}})}))},function(e,t,r){Object.defineProperty(t,"__esModule",{value:!0}),t.default=class{constructor(){this.callbacks={}}on(e,...t){return this.callbacks[e]||(this.callbacks[e]=[]),this.callbacks[e].push(...t),this}off(e,t){if(!this.callbacks[e])return null;const r=this.callbacks[e].slice(0);for(let n=0;n<r.length;n++)t===r[n]&&this.callbacks[e].splice(n,1);return this}trigger(e){if(!this.callbacks[e.type])return null;const t=[...this.callbacks[e.type]],r=[];for(let n=t.length-1;n>=0;n--){const o=t[n];try{o(e)}catch(e){r.push(e)}}return r.length&&console.error(`Draggable caught errors while triggering '${e.type}'`,r),this}}},function(e,t,r){Object.defineProperty(t,"__esModule",{value:!0});var n,o=r(10),i=(n=o)&&n.__esModule?n:{default:n};t.default=i.default},function(e,t,r){Object.defineProperty(t,"__esModule",{value:!0}),t.defaultOptions=void 0;var n,o=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var r=arguments[t];for(var n in r)Object.prototype.hasOwnProperty.call(r,n)&&(e[n]=r[n])}return e},i=r(2),s=r(6),a=r(11),l=(n=a)&&n.__esModule?n:{default:n},c=r(5),u=r(7),d=r(8);const g=Symbol("onDragStart"),h=Symbol("onDragMove"),f=Symbol("onDragStop"),v=Symbol("onDragPressure"),m={"drag:start":e=>`Picked up ${e.source.textContent.trim()||e.source.id||"draggable element"}`,"drag:stop":e=>`Released ${e.source.textContent.trim()||e.source.id||"draggable element"}`},p={"container:dragging":"draggable-container--is-dragging","source:dragging":"draggable-source--is-dragging","source:placed":"draggable-source--placed","container:placed":"draggable-container--placed","body:dragging":"draggable--is-dragging","draggable:over":"draggable--over","container:over":"draggable-container--over","source:original":"draggable--original",mirror:"draggable-mirror"},b=t.defaultOptions={draggable:".draggable-source",handle:null,delay:100,placedTimeout:800,plugins:[],sensors:[]};class E{constructor(e=[document.body],t={}){if(e instanceof NodeList||e instanceof Array)this.containers=[...e];else{if(!(e instanceof HTMLElement))throw new Error("Draggable containers are expected to be of type `NodeList`, `HTMLElement[]` or `HTMLElement`");this.containers=[e]}this.options=o({},b,t,{classes:o({},p,t.classes||{}),announcements:o({},m,t.announcements||{})}),this.emitter=new l.default,this.dragging=!1,this.plugins=[],this.sensors=[],this[g]=this[g].bind(this),this[h]=this[h].bind(this),this[f]=this[f].bind(this),this[v]=this[v].bind(this),document.addEventListener("drag:start",this[g],!0),document.addEventListener("drag:move",this[h],!0),document.addEventListener("drag:stop",this[f],!0),document.addEventListener("drag:pressure",this[v],!0);const r=Object.values(E.Plugins).map(e=>e),n=[c.MouseSensor,c.TouchSensor];this.addPlugin(...r,...this.options.plugins),this.addSensor(...n,...this.options.sensors);const i=new u.DraggableInitializedEvent({draggable:this});this.on("mirror:created",({mirror:e})=>this.mirror=e),this.on("mirror:destroy",()=>this.mirror=null),this.trigger(i)}destroy(){document.removeEventListener("drag:start",this[g],!0),document.removeEventListener("drag:move",this[h],!0),document.removeEventListener("drag:stop",this[f],!0),document.removeEventListener("drag:pressure",this[v],!0);const e=new u.DraggableDestroyEvent({draggable:this});this.trigger(e),this.removePlugin(...this.plugins.map(e=>e.constructor)),this.removeSensor(...this.sensors.map(e=>e.constructor))}addPlugin(...e){const t=e.map(e=>new e(this));return t.forEach(e=>e.attach()),this.plugins=[...this.plugins,...t],this}removePlugin(...e){return this.plugins.filter(t=>e.includes(t.constructor)).forEach(e=>e.detach()),this.plugins=this.plugins.filter(t=>!e.includes(t.constructor)),this}addSensor(...e){const t=e.map(e=>new e(this.containers,this.options));return t.forEach(e=>e.attach()),this.sensors=[...this.sensors,...t],this}removeSensor(...e){return this.sensors.filter(t=>e.includes(t.constructor)).forEach(e=>e.detach()),this.sensors=this.sensors.filter(t=>!e.includes(t.constructor)),this}addContainer(...e){return this.containers=[...this.containers,...e],this.sensors.forEach(t=>t.addContainer(...e)),this}removeContainer(...e){return this.containers=this.containers.filter(t=>!e.includes(t)),this.sensors.forEach(t=>t.removeContainer(...e)),this}on(e,...t){return this.emitter.on(e,...t),this}off(e,t){return this.emitter.off(e,t),this}trigger(e){return this.emitter.trigger(e),this}getClassNameFor(e){return this.options.classes[e]}isDragging(){return Boolean(this.dragging)}getDraggableElements(){return this.containers.reduce((e,t)=>[...e,...this.getDraggableElementsForContainer(t)],[])}getDraggableElementsForContainer(e){return[...e.querySelectorAll(this.options.draggable)].filter(e=>e!==this.originalSource&&e!==this.mirror)}[g](e){const t=y(e),{target:r,container:n}=t;if(!this.containers.includes(n))return;if(this.options.handle&&r&&!(0,i.closest)(r,this.options.handle))return void t.cancel();if(this.originalSource=(0,i.closest)(r,this.options.draggable),this.sourceContainer=n,!this.originalSource)return void t.cancel();this.lastPlacedSource&&this.lastPlacedContainer&&(clearTimeout(this.placedTimeoutID),this.lastPlacedSource.classList.remove(this.getClassNameFor("source:placed")),this.lastPlacedContainer.classList.remove(this.getClassNameFor("container:placed"))),this.source=this.originalSource.cloneNode(!0),this.originalSource.parentNode.insertBefore(this.source,this.originalSource),this.originalSource.style.display="none";const s=new d.DragStartEvent({source:this.source,originalSource:this.originalSource,sourceContainer:n,sensorEvent:t});if(this.trigger(s),this.dragging=!s.canceled(),s.canceled())return this.source.parentNode.removeChild(this.source),void(this.originalSource.style.display=null);this.originalSource.classList.add(this.getClassNameFor("source:original")),this.source.classList.add(this.getClassNameFor("source:dragging")),this.sourceContainer.classList.add(this.getClassNameFor("container:dragging")),document.body.classList.add(this.getClassNameFor("body:dragging")),S(document.body,"none"),requestAnimationFrame(()=>{const t=y(e).clone({target:this.source});this[h](o({},e,{detail:t}))})}[h](e){if(!this.dragging)return;const t=y(e),{container:r}=t;let n=t.target;const o=new d.DragMoveEvent({source:this.source,originalSource:this.originalSource,sourceContainer:r,sensorEvent:t});this.trigger(o),o.canceled()&&t.cancel(),n=(0,i.closest)(n,this.options.draggable);const s=(0,i.closest)(t.target,this.containers),a=t.overContainer||s,l=this.currentOverContainer&&a!==this.currentOverContainer,c=this.currentOver&&n!==this.currentOver,u=a&&this.currentOverContainer!==a,g=s&&n&&this.currentOver!==n;if(c){const e=new d.DragOutEvent({source:this.source,originalSource:this.originalSource,sourceContainer:r,sensorEvent:t,over:this.currentOver});this.currentOver.classList.remove(this.getClassNameFor("draggable:over")),this.currentOver=null,this.trigger(e)}if(l){const e=new d.DragOutContainerEvent({source:this.source,originalSource:this.originalSource,sourceContainer:r,sensorEvent:t,overContainer:this.currentOverContainer});this.currentOverContainer.classList.remove(this.getClassNameFor("container:over")),this.currentOverContainer=null,this.trigger(e)}if(u){a.classList.add(this.getClassNameFor("container:over"));const e=new d.DragOverContainerEvent({source:this.source,originalSource:this.originalSource,sourceContainer:r,sensorEvent:t,overContainer:a});this.currentOverContainer=a,this.trigger(e)}if(g){n.classList.add(this.getClassNameFor("draggable:over"));const e=new d.DragOverEvent({source:this.source,originalSource:this.originalSource,sourceContainer:r,sensorEvent:t,overContainer:a,over:n});this.currentOver=n,this.trigger(e)}}[f](e){if(!this.dragging)return;this.dragging=!1;const t=new d.DragStopEvent({source:this.source,originalSource:this.originalSource,sensorEvent:e.sensorEvent,sourceContainer:this.sourceContainer});this.trigger(t),this.source.parentNode.insertBefore(this.originalSource,this.source),this.source.parentNode.removeChild(this.source),this.originalSource.style.display="",this.source.classList.remove(this.getClassNameFor("source:dragging")),this.originalSource.classList.remove(this.getClassNameFor("source:original")),this.originalSource.classList.add(this.getClassNameFor("source:placed")),this.sourceContainer.classList.add(this.getClassNameFor("container:placed")),this.sourceContainer.classList.remove(this.getClassNameFor("container:dragging")),document.body.classList.remove(this.getClassNameFor("body:dragging")),S(document.body,""),this.currentOver&&this.currentOver.classList.remove(this.getClassNameFor("draggable:over")),this.currentOverContainer&&this.currentOverContainer.classList.remove(this.getClassNameFor("container:over")),this.lastPlacedSource=this.originalSource,this.lastPlacedContainer=this.sourceContainer,this.placedTimeoutID=setTimeout(()=>{this.lastPlacedSource&&this.lastPlacedSource.classList.remove(this.getClassNameFor("source:placed")),this.lastPlacedContainer&&this.lastPlacedContainer.classList.remove(this.getClassNameFor("container:placed")),this.lastPlacedSource=null,this.lastPlacedContainer=null},this.options.placedTimeout),this.source=null,this.originalSource=null,this.currentOverContainer=null,this.currentOver=null,this.sourceContainer=null}[v](e){if(!this.dragging)return;const t=y(e),r=this.source||(0,i.closest)(t.originalEvent.target,this.options.draggable),n=new d.DragPressureEvent({sensorEvent:t,source:r,pressure:t.pressure});this.trigger(n)}}function y(e){return e.detail}function S(e,t){e.style.webkitUserSelect=t,e.style.mozUserSelect=t,e.style.msUserSelect=t,e.style.oUserSelect=t,e.style.userSelect=t}t.default=E,E.Plugins={Announcement:s.Announcement,Focusable:s.Focusable,Mirror:s.Mirror,Scrollable:s.Scrollable}},function(e,t,r){Object.defineProperty(t,"__esModule",{value:!0});var n,o=r(1),i=(n=o)&&n.__esModule?n:{default:n},s=r(0);const a=Symbol("onMouseForceWillBegin"),l=Symbol("onMouseForceDown"),c=Symbol("onMouseDown"),u=Symbol("onMouseForceChange"),d=Symbol("onMouseMove"),g=Symbol("onMouseUp"),h=Symbol("onMouseForceGlobalChange");class f extends i.default{constructor(e=[],t={}){super(e,t),this.mightDrag=!1,this[a]=this[a].bind(this),this[l]=this[l].bind(this),this[c]=this[c].bind(this),this[u]=this[u].bind(this),this[d]=this[d].bind(this),this[g]=this[g].bind(this)}attach(){for(const e of this.containers)e.addEventListener("webkitmouseforcewillbegin",this[a],!1),e.addEventListener("webkitmouseforcedown",this[l],!1),e.addEventListener("mousedown",this[c],!0),e.addEventListener("webkitmouseforcechanged",this[u],!1);document.addEventListener("mousemove",this[d]),document.addEventListener("mouseup",this[g])}detach(){for(const e of this.containers)e.removeEventListener("webkitmouseforcewillbegin",this[a],!1),e.removeEventListener("webkitmouseforcedown",this[l],!1),e.removeEventListener("mousedown",this[c],!0),e.removeEventListener("webkitmouseforcechanged",this[u],!1);document.removeEventListener("mousemove",this[d]),document.removeEventListener("mouseup",this[g])}[a](e){e.preventDefault(),this.mightDrag=!0}[l](e){if(this.dragging)return;const t=document.elementFromPoint(e.clientX,e.clientY),r=e.currentTarget,n=new s.DragStartSensorEvent({clientX:e.clientX,clientY:e.clientY,target:t,container:r,originalEvent:e});this.trigger(r,n),this.currentContainer=r,this.dragging=!n.canceled(),this.mightDrag=!1}[g](e){if(!this.dragging)return;const t=new s.DragStopSensorEvent({clientX:e.clientX,clientY:e.clientY,target:null,container:this.currentContainer,originalEvent:e});this.trigger(this.currentContainer,t),this.currentContainer=null,this.dragging=!1,this.mightDrag=!1}[c](e){this.mightDrag&&(e.stopPropagation(),e.stopImmediatePropagation(),e.preventDefault())}[d](e){if(!this.dragging)return;const t=document.elementFromPoint(e.clientX,e.clientY),r=new s.DragMoveSensorEvent({clientX:e.clientX,clientY:e.clientY,target:t,container:this.currentContainer,originalEvent:e});this.trigger(this.currentContainer,r)}[u](e){if(this.dragging)return;const t=e.target,r=e.currentTarget,n=new s.DragPressureSensorEvent({pressure:e.webkitForce,clientX:e.clientX,clientY:e.clientY,target:t,container:r,originalEvent:e});this.trigger(r,n)}[h](e){if(!this.dragging)return;const t=e.target,r=new s.DragPressureSensorEvent({pressure:e.webkitForce,clientX:e.clientX,clientY:e.clientY,target:t,container:this.currentContainer,originalEvent:e});this.trigger(this.currentContainer,r)}}t.default=f},function(e,t,r){Object.defineProperty(t,"__esModule",{value:!0});var n,o=r(13),i=(n=o)&&n.__esModule?n:{default:n};t.default=i.default},function(e,t,r){Object.defineProperty(t,"__esModule",{value:!0});var n,o=r(2),i=r(1),s=(n=i)&&n.__esModule?n:{default:n},a=r(0);const l=Symbol("onMouseDown"),c=Symbol("onMouseUp"),u=Symbol("onDragStart"),d=Symbol("onDragOver"),g=Symbol("onDragEnd"),h=Symbol("onDrop"),f=Symbol("reset");class v extends s.default{constructor(e=[],t={}){super(e,t),this.mouseDownTimeout=null,this.draggableElement=null,this.nativeDraggableElement=null,this[l]=this[l].bind(this),this[c]=this[c].bind(this),this[u]=this[u].bind(this),this[d]=this[d].bind(this),this[g]=this[g].bind(this),this[h]=this[h].bind(this)}attach(){document.addEventListener("mousedown",this[l],!0)}detach(){document.removeEventListener("mousedown",this[l],!0)}[u](e){e.dataTransfer.setData("text",""),e.dataTransfer.effectAllowed=this.options.type;const t=document.elementFromPoint(e.clientX,e.clientY);if(this.currentContainer=(0,o.closest)(e.target,this.containers),!this.currentContainer)return;const r=new a.DragStartSensorEvent({clientX:e.clientX,clientY:e.clientY,target:t,container:this.currentContainer,originalEvent:e});setTimeout(()=>{this.trigger(this.currentContainer,r),r.canceled()?this.dragging=!1:this.dragging=!0},0)}[d](e){if(!this.dragging)return;const t=document.elementFromPoint(e.clientX,e.clientY),r=this.currentContainer,n=new a.DragMoveSensorEvent({clientX:e.clientX,clientY:e.clientY,target:t,container:r,originalEvent:e});this.trigger(r,n),n.canceled()||(e.preventDefault(),e.dataTransfer.dropEffect=this.options.type)}[g](e){if(!this.dragging)return;document.removeEventListener("mouseup",this[c],!0);const t=document.elementFromPoint(e.clientX,e.clientY),r=this.currentContainer,n=new a.DragStopSensorEvent({clientX:e.clientX,clientY:e.clientY,target:t,container:r,originalEvent:e});this.trigger(r,n),this.dragging=!1,this[f]()}[h](e){e.preventDefault()}[l](e){if(e.target&&(e.target.form||e.target.contenteditable))return;const t=(0,o.closest)(e.target,e=>e.draggable);t&&(t.draggable=!1,this.nativeDraggableElement=t),document.addEventListener("mouseup",this[c],!0),document.addEventListener("dragstart",this[u],!1),document.addEventListener("dragover",this[d],!1),document.addEventListener("dragend",this[g],!1),document.addEventListener("drop",this[h],!1);const r=(0,o.closest)(e.target,this.options.draggable);r&&(this.mouseDownTimeout=setTimeout(()=>{r.draggable=!0,this.draggableElement=r},this.options.delay))}[c](){this[f]()}[f](){clearTimeout(this.mouseDownTimeout),document.removeEventListener("mouseup",this[c],!0),document.removeEventListener("dragstart",this[u],!1),document.removeEventListener("dragover",this[d],!1),document.removeEventListener("dragend",this[g],!1),document.removeEventListener("drop",this[h],!1),this.nativeDraggableElement&&(this.nativeDraggableElement.draggable=!0,this.nativeDraggableElement=null),this.draggableElement&&(this.draggableElement.draggable=!1,this.draggableElement=null)}}t.default=v},function(e,t,r){Object.defineProperty(t,"__esModule",{value:!0});var n,o=r(15),i=(n=o)&&n.__esModule?n:{default:n};t.default=i.default},function(e,t,r){Object.defineProperty(t,"__esModule",{value:!0});var n,o=r(2),i=r(1),s=(n=i)&&n.__esModule?n:{default:n},a=r(0);const l=Symbol("onTouchStart"),c=Symbol("onTouchHold"),u=Symbol("onTouchEnd"),d=Symbol("onTouchMove");let g=!1;window.addEventListener("touchmove",e=>{g&&e.preventDefault()},{passive:!1});class h extends s.default{constructor(e=[],t={}){super(e,t),this.currentScrollableParent=null,this.tapTimeout=null,this.touchMoved=!1,this[l]=this[l].bind(this),this[c]=this[c].bind(this),this[u]=this[u].bind(this),this[d]=this[d].bind(this)}attach(){document.addEventListener("touchstart",this[l])}detach(){document.removeEventListener("touchstart",this[l])}[l](e){const t=(0,o.closest)(e.target,this.containers);t&&(document.addEventListener("touchmove",this[d]),document.addEventListener("touchend",this[u]),document.addEventListener("touchcancel",this[u]),t.addEventListener("contextmenu",f),this.currentContainer=t,this.tapTimeout=setTimeout(this[c](e,t),this.options.delay))}[c](e,t){return()=>{if(this.touchMoved)return;const r=e.touches[0]||e.changedTouches[0],n=e.target,o=new a.DragStartSensorEvent({clientX:r.pageX,clientY:r.pageY,target:n,container:t,originalEvent:e});this.trigger(t,o),this.dragging=!o.canceled(),g=this.dragging}}[d](e){if(this.touchMoved=!0,!this.dragging)return;const t=e.touches[0]||e.changedTouches[0],r=document.elementFromPoint(t.pageX-window.scrollX,t.pageY-window.scrollY),n=new a.DragMoveSensorEvent({clientX:t.pageX,clientY:t.pageY,target:r,container:this.currentContainer,originalEvent:e});this.trigger(this.currentContainer,n)}[u](e){if(this.touchMoved=!1,g=!1,document.removeEventListener("touchend",this[u]),document.removeEventListener("touchcancel",this[u]),document.removeEventListener("touchmove",this[d]),this.currentContainer&&this.currentContainer.removeEventListener("contextmenu",f),clearTimeout(this.tapTimeout),!this.dragging)return;const t=e.touches[0]||e.changedTouches[0],r=document.elementFromPoint(t.pageX-window.scrollX,t.pageY-window.scrollY);e.preventDefault();const n=new a.DragStopSensorEvent({clientX:t.pageX,clientY:t.pageY,target:r,container:this.currentContainer,originalEvent:e});this.trigger(this.currentContainer,n),this.currentContainer=null,this.dragging=!1}}function f(e){e.preventDefault(),e.stopPropagation()}t.default=h},function(e,t,r){Object.defineProperty(t,"__esModule",{value:!0});var n,o=r(17),i=(n=o)&&n.__esModule?n:{default:n};t.default=i.default},function(e,t,r){Object.defineProperty(t,"__esModule",{value:!0}),t.DragPressureSensorEvent=t.DragStopSensorEvent=t.DragMoveSensorEvent=t.DragStartSensorEvent=t.SensorEvent=void 0;var n,o=r(3),i=(n=o)&&n.__esModule?n:{default:n};class s extends i.default{get originalEvent(){return this.data.originalEvent}get clientX(){return this.data.clientX}get clientY(){return this.data.clientY}get target(){return this.data.target}get container(){return this.data.container}get pressure(){return this.data.pressure}}t.SensorEvent=s;class a extends s{}t.DragStartSensorEvent=a,a.type="drag:start";class l extends s{}t.DragMoveSensorEvent=l,l.type="drag:move";class c extends s{}t.DragStopSensorEvent=c,c.type="drag:stop";class u extends s{}t.DragPressureSensorEvent=u,u.type="drag:pressure"},function(e,t,r){Object.defineProperty(t,"__esModule",{value:!0});var n,o=r(2),i=r(1),s=(n=i)&&n.__esModule?n:{default:n},a=r(0);const l=Symbol("onContextMenuWhileDragging"),c=Symbol("onMouseDown"),u=Symbol("onMouseMove"),d=Symbol("onMouseUp");class g extends s.default{constructor(e=[],t={}){super(e,t),this.mouseDown=!1,this.mouseDownTimeout=null,this.openedContextMenu=!1,this[l]=this[l].bind(this),this[c]=this[c].bind(this),this[u]=this[u].bind(this),this[d]=this[d].bind(this)}attach(){document.addEventListener("mousedown",this[c],!0)}detach(){document.removeEventListener("mousedown",this[c],!0)}[c](e){if(0!==e.button||e.ctrlKey||e.metaKey)return;document.addEventListener("mouseup",this[d]);const t=document.elementFromPoint(e.clientX,e.clientY),r=(0,o.closest)(t,this.containers);r&&(document.addEventListener("dragstart",h),this.mouseDown=!0,clearTimeout(this.mouseDownTimeout),this.mouseDownTimeout=setTimeout(()=>{if(!this.mouseDown)return;const n=new a.DragStartSensorEvent({clientX:e.clientX,clientY:e.clientY,target:t,container:r,originalEvent:e});this.trigger(r,n),this.currentContainer=r,this.dragging=!n.canceled(),this.dragging&&(document.addEventListener("contextmenu",this[l]),document.addEventListener("mousemove",this[u]))},this.options.delay))}[u](e){if(!this.dragging)return;const t=document.elementFromPoint(e.clientX,e.clientY),r=new a.DragMoveSensorEvent({clientX:e.clientX,clientY:e.clientY,target:t,container:this.currentContainer,originalEvent:e});this.trigger(this.currentContainer,r)}[d](e){if(this.mouseDown=Boolean(this.openedContextMenu),this.openedContextMenu)return void(this.openedContextMenu=!1);if(document.removeEventListener("mouseup",this[d]),document.removeEventListener("dragstart",h),!this.dragging)return;const t=document.elementFromPoint(e.clientX,e.clientY),r=new a.DragStopSensorEvent({clientX:e.clientX,clientY:e.clientY,target:t,container:this.currentContainer,originalEvent:e});this.trigger(this.currentContainer,r),document.removeEventListener("contextmenu",this[l]),document.removeEventListener("mousemove",this[u]),this.currentContainer=null,this.dragging=!1}[l](e){e.preventDefault(),this.openedContextMenu=!0}}function h(e){e.preventDefault()}t.default=g},function(e,t,r){Object.defineProperty(t,"__esModule",{value:!0});var n,o=r(20),i=(n=o)&&n.__esModule?n:{default:n};t.default=i.default},function(e,t,r){Object.defineProperty(t,"__esModule",{value:!0});var n=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var r=arguments[t];for(var n in r)Object.prototype.hasOwnProperty.call(r,n)&&(e[n]=r[n])}return e};t.default=class{constructor(e=[],t={}){this.containers=[...e],this.options=n({},t),this.dragging=!1,this.currentContainer=null}attach(){return this}detach(){return this}addContainer(...e){this.containers=[...this.containers,...e]}removeContainer(...e){this.containers=this.containers.filter(t=>!e.includes(t))}trigger(e,t){const r=document.createEvent("Event");return r.detail=t,r.initEvent(t.type,!0,!0),e.dispatchEvent(r),this.lastEvent=t,t}}},function(e,t,r){Object.defineProperty(t,"__esModule",{value:!0}),t.default=function(e){return requestAnimationFrame(()=>{requestAnimationFrame(e)})}},function(e,t,r){Object.defineProperty(t,"__esModule",{value:!0});var n,o=r(23),i=(n=o)&&n.__esModule?n:{default:n};t.default=i.default},function(e,t,r){Object.defineProperty(t,"__esModule",{value:!0}),t.default=function(e,t){if(!e)return null;const r=t,o=t,i=t,s=t,a=Boolean("string"==typeof t),l=Boolean("function"==typeof t),c=Boolean(t instanceof NodeList||t instanceof Array),u=Boolean(t instanceof HTMLElement);let d=e;do{if(d=d.correspondingUseElement||d.correspondingElement||d,(g=d)?a?n.call(g,r):c?[...i].includes(g):u?s===g:l&&o(g):g)return d;d=d.parentNode}while(d&&d!==document.body&&d!==document);var g;return null};const n=Element.prototype.matches||Element.prototype.webkitMatchesSelector||Element.prototype.mozMatchesSelector||Element.prototype.msMatchesSelector},function(e,t,r){Object.defineProperty(t,"__esModule",{value:!0});var n,o=r(25),i=(n=o)&&n.__esModule?n:{default:n};t.default=i.default},function(e,t,r){Object.defineProperty(t,"__esModule",{value:!0}),t.defaultOptions=t.scroll=t.onDragStop=t.onDragMove=t.onDragStart=void 0;var n,o=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var r=arguments[t];for(var n in r)Object.prototype.hasOwnProperty.call(r,n)&&(e[n]=r[n])}return e},i=r(4),s=(n=i)&&n.__esModule?n:{default:n},a=r(2);const l=t.onDragStart=Symbol("onDragStart"),c=t.onDragMove=Symbol("onDragMove"),u=t.onDragStop=Symbol("onDragStop"),d=t.scroll=Symbol("scroll"),g=t.defaultOptions={speed:6,sensitivity:50,scrollableElements:[]};class h extends s.default{constructor(e){super(e),this.options=o({},g,this.getOptions()),this.currentMousePosition=null,this.scrollAnimationFrame=null,this.scrollableElement=null,this.findScrollableElementFrame=null,this[l]=this[l].bind(this),this[c]=this[c].bind(this),this[u]=this[u].bind(this),this[d]=this[d].bind(this)}attach(){this.draggable.on("drag:start",this[l]).on("drag:move",this[c]).on("drag:stop",this[u])}detach(){this.draggable.off("drag:start",this[l]).off("drag:move",this[c]).off("drag:stop",this[u])}getOptions(){return this.draggable.options.scrollable||{}}getScrollableElement(e){return this.hasDefinedScrollableElements()?(0,a.closest)(e,this.options.scrollableElements)||document.documentElement:function(e){if(!e)return f();const t=getComputedStyle(e).getPropertyValue("position"),r="absolute"===t,n=(0,a.closest)(e,e=>(!r||!function(e){return"static"===getComputedStyle(e).getPropertyValue("position")}(e))&&function(e){const t=getComputedStyle(e,null),r=t.getPropertyValue("overflow")+t.getPropertyValue("overflow-y")+t.getPropertyValue("overflow-x");return/(auto|scroll)/.test(r)}(e));return"fixed"!==t&&n?n:f()}(e)}hasDefinedScrollableElements(){return Boolean(0!==this.options.scrollableElements.length)}[l](e){this.findScrollableElementFrame=requestAnimationFrame(()=>{this.scrollableElement=this.getScrollableElement(e.source)})}[c](e){if(this.findScrollableElementFrame=requestAnimationFrame(()=>{this.scrollableElement=this.getScrollableElement(e.sensorEvent.target)}),!this.scrollableElement)return;const t=e.sensorEvent,r={x:0,y:0};"ontouchstart"in window&&(r.y=window.pageYOffset||document.documentElement.scrollTop||document.body.scrollTop||0,r.x=window.pageXOffset||document.documentElement.scrollLeft||document.body.scrollLeft||0),this.currentMousePosition={clientX:t.clientX-r.x,clientY:t.clientY-r.y},this.scrollAnimationFrame=requestAnimationFrame(this[d])}[u](){cancelAnimationFrame(this.scrollAnimationFrame),cancelAnimationFrame(this.findScrollableElementFrame),this.scrollableElement=null,this.scrollAnimationFrame=null,this.findScrollableElementFrame=null,this.currentMousePosition=null}[d](){if(!this.scrollableElement||!this.currentMousePosition)return;cancelAnimationFrame(this.scrollAnimationFrame);const{speed:e,sensitivity:t}=this.options,r=this.scrollableElement.getBoundingClientRect(),n=r.bottom>window.innerHeight,o=r.top<0||n,i=f(),s=this.scrollableElement,a=this.currentMousePosition.clientX,l=this.currentMousePosition.clientY;if(s===document.body||s===document.documentElement||o){const{innerHeight:r,innerWidth:n}=window;l<t?i.scrollTop-=e:r-l<t&&(i.scrollTop+=e),a<t?i.scrollLeft-=e:n-a<t&&(i.scrollLeft+=e)}else{const{offsetHeight:n,offsetWidth:o}=s;r.top+n-l<t?s.scrollTop+=e:l-r.top<t&&(s.scrollTop-=e),r.left+o-a<t?s.scrollLeft+=e:a-r.left<t&&(s.scrollLeft-=e)}this.scrollAnimationFrame=requestAnimationFrame(this[d])}}function f(){return document.scrollingElement||document.documentElement}t.default=h},function(e,t,r){Object.defineProperty(t,"__esModule",{value:!0}),t.defaultOptions=void 0;var n,o=r(27),i=(n=o)&&n.__esModule?n:{default:n};t.default=i.default,t.defaultOptions=o.defaultOptions},function(e,t,r){Object.defineProperty(t,"__esModule",{value:!0}),t.MirrorDestroyEvent=t.MirrorMoveEvent=t.MirrorAttachedEvent=t.MirrorCreatedEvent=t.MirrorCreateEvent=t.MirrorEvent=void 0;var n,o=r(3),i=(n=o)&&n.__esModule?n:{default:n};class s extends i.default{get source(){return this.data.source}get originalSource(){return this.data.originalSource}get sourceContainer(){return this.data.sourceContainer}get sensorEvent(){return this.data.sensorEvent}get dragEvent(){return this.data.dragEvent}get originalEvent(){return this.sensorEvent?this.sensorEvent.originalEvent:null}}t.MirrorEvent=s;class a extends s{}t.MirrorCreateEvent=a,a.type="mirror:create";class l extends s{get mirror(){return this.data.mirror}}t.MirrorCreatedEvent=l,l.type="mirror:created";class c extends s{get mirror(){return this.data.mirror}}t.MirrorAttachedEvent=c,c.type="mirror:attached";class u extends s{get mirror(){return this.data.mirror}}t.MirrorMoveEvent=u,u.type="mirror:move",u.cancelable=!0;class d extends s{get mirror(){return this.data.mirror}}t.MirrorDestroyEvent=d,d.type="mirror:destroy",d.cancelable=!0},function(e,t,r){Object.defineProperty(t,"__esModule",{value:!0});var n=r(29);Object.keys(n).forEach((function(e){"default"!==e&&"__esModule"!==e&&Object.defineProperty(t,e,{enumerable:!0,get:function(){return n[e]}})}))},function(e,t,r){Object.defineProperty(t,"__esModule",{value:!0}),t.defaultOptions=t.getAppendableContainer=t.onScroll=t.onMirrorMove=t.onMirrorCreated=t.onDragStop=t.onDragMove=t.onDragStart=void 0;var n,o=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var r=arguments[t];for(var n in r)Object.prototype.hasOwnProperty.call(r,n)&&(e[n]=r[n])}return e},i=r(4),s=(n=i)&&n.__esModule?n:{default:n},a=r(30);function l(e,t){var r={};for(var n in e)t.indexOf(n)>=0||Object.prototype.hasOwnProperty.call(e,n)&&(r[n]=e[n]);return r}const c=t.onDragStart=Symbol("onDragStart"),u=t.onDragMove=Symbol("onDragMove"),d=t.onDragStop=Symbol("onDragStop"),g=t.onMirrorCreated=Symbol("onMirrorCreated"),h=t.onMirrorMove=Symbol("onMirrorMove"),f=t.onScroll=Symbol("onScroll"),v=t.getAppendableContainer=Symbol("getAppendableContainer"),m=t.defaultOptions={constrainDimensions:!1,xAxis:!0,yAxis:!0,cursorOffsetX:null,cursorOffsetY:null};class p extends s.default{constructor(e){super(e),this.options=o({},m,this.getOptions()),this.scrollOffset={x:0,y:0},this.initialScrollOffset={x:window.scrollX,y:window.scrollY},this[c]=this[c].bind(this),this[u]=this[u].bind(this),this[d]=this[d].bind(this),this[g]=this[g].bind(this),this[h]=this[h].bind(this),this[f]=this[f].bind(this)}attach(){this.draggable.on("drag:start",this[c]).on("drag:move",this[u]).on("drag:stop",this[d]).on("mirror:created",this[g]).on("mirror:move",this[h])}detach(){this.draggable.off("drag:start",this[c]).off("drag:move",this[u]).off("drag:stop",this[d]).off("mirror:created",this[g]).off("mirror:move",this[h])}getOptions(){return this.draggable.options.mirror||{}}[c](e){if(e.canceled())return;"ontouchstart"in window&&document.addEventListener("scroll",this[f],!0),this.initialScrollOffset={x:window.scrollX,y:window.scrollY};const{source:t,originalSource:r,sourceContainer:n,sensorEvent:o}=e,i=new a.MirrorCreateEvent({source:t,originalSource:r,sourceContainer:n,sensorEvent:o,dragEvent:e});if(this.draggable.trigger(i),function(e){return/^drag/.test(e.originalEvent.type)}(o)||i.canceled())return;const s=this[v](t)||n;this.mirror=t.cloneNode(!0);const l=new a.MirrorCreatedEvent({source:t,originalSource:r,sourceContainer:n,sensorEvent:o,dragEvent:e,mirror:this.mirror}),c=new a.MirrorAttachedEvent({source:t,originalSource:r,sourceContainer:n,sensorEvent:o,dragEvent:e,mirror:this.mirror});this.draggable.trigger(l),s.appendChild(this.mirror),this.draggable.trigger(c)}[u](e){if(!this.mirror||e.canceled())return;const{source:t,originalSource:r,sourceContainer:n,sensorEvent:o}=e,i=new a.MirrorMoveEvent({source:t,originalSource:r,sourceContainer:n,sensorEvent:o,dragEvent:e,mirror:this.mirror});this.draggable.trigger(i)}[d](e){if("ontouchstart"in window&&document.removeEventListener("scroll",this[f],!0),this.initialScrollOffset={x:0,y:0},this.scrollOffset={x:0,y:0},!this.mirror)return;const{source:t,sourceContainer:r,sensorEvent:n}=e,o=new a.MirrorDestroyEvent({source:t,mirror:this.mirror,sourceContainer:r,sensorEvent:n,dragEvent:e});this.draggable.trigger(o),o.canceled()||this.mirror.parentNode.removeChild(this.mirror)}[f](){this.scrollOffset={x:window.scrollX-this.initialScrollOffset.x,y:window.scrollY-this.initialScrollOffset.y}}[g]({mirror:e,source:t,sensorEvent:r}){const n={mirror:e,source:t,sensorEvent:r,mirrorClass:this.draggable.getClassNameFor("mirror"),scrollOffset:this.scrollOffset,options:this.options};return Promise.resolve(n).then(b).then(E).then(y).then(S).then(C({initial:!0})).then(O).then(e=>{let{mirrorOffset:t,initialX:r,initialY:n}=e,i=l(e,["mirrorOffset","initialX","initialY"]);return this.mirrorOffset=t,this.initialX=r,this.initialY=n,o({mirrorOffset:t,initialX:r,initialY:n},i)})}[h](e){if(e.canceled())return null;const t={mirror:e.mirror,sensorEvent:e.sensorEvent,mirrorOffset:this.mirrorOffset,options:this.options,initialX:this.initialX,initialY:this.initialY,scrollOffset:this.scrollOffset};return Promise.resolve(t).then(C({raf:!0}))}[v](e){const t=this.options.appendTo;return"string"==typeof t?document.querySelector(t):t instanceof HTMLElement?t:"function"==typeof t?t(e):e.parentNode}}function b(e){let{source:t}=e,r=l(e,["source"]);return w(e=>{const n=t.getBoundingClientRect();e(o({source:t,sourceRect:n},r))})}function E(e){let{sensorEvent:t,sourceRect:r,options:n}=e,i=l(e,["sensorEvent","sourceRect","options"]);return w(e=>{const s=null===n.cursorOffsetY?t.clientY-r.top:n.cursorOffsetY,a=null===n.cursorOffsetX?t.clientX-r.left:n.cursorOffsetX;e(o({sensorEvent:t,sourceRect:r,mirrorOffset:{top:s,left:a},options:n},i))})}function y(e){let{mirror:t,source:r,options:n}=e,i=l(e,["mirror","source","options"]);return w(e=>{let s,a;if(n.constrainDimensions){const e=getComputedStyle(r);s=e.getPropertyValue("height"),a=e.getPropertyValue("width")}t.style.position="fixed",t.style.pointerEvents="none",t.style.top=0,t.style.left=0,t.style.margin=0,n.constrainDimensions&&(t.style.height=s,t.style.width=a),e(o({mirror:t,source:r,options:n},i))})}function S(e){let{mirror:t,mirrorClass:r}=e,n=l(e,["mirror","mirrorClass"]);return w(e=>{t.classList.add(r),e(o({mirror:t,mirrorClass:r},n))})}function O(e){let{mirror:t}=e,r=l(e,["mirror"]);return w(e=>{t.removeAttribute("id"),delete t.id,e(o({mirror:t},r))})}function C({withFrame:e=!1,initial:t=!1}={}){return r=>{let{mirror:n,sensorEvent:i,mirrorOffset:s,initialY:a,initialX:c,scrollOffset:u,options:d}=r,g=l(r,["mirror","sensorEvent","mirrorOffset","initialY","initialX","scrollOffset","options"]);return w(e=>{const r=o({mirror:n,sensorEvent:i,mirrorOffset:s,options:d},g);if(s){const e=i.clientX-s.left-u.x,o=i.clientY-s.top-u.y;d.xAxis&&d.yAxis||t?n.style.transform=`translate3d(${e}px, ${o}px, 0)`:d.xAxis&&!d.yAxis?n.style.transform=`translate3d(${e}px, ${a}px, 0)`:d.yAxis&&!d.xAxis&&(n.style.transform=`translate3d(${c}px, ${o}px, 0)`),t&&(r.initialX=e,r.initialY=o)}e(r)},{frame:e})}}function w(e,{raf:t=!1}={}){return new Promise((r,n)=>{t?requestAnimationFrame(()=>{e(r,n)}):e(r,n)})}t.default=p},function(e,t,r){Object.defineProperty(t,"__esModule",{value:!0}),t.defaultOptions=void 0;var n,o=r(31),i=(n=o)&&n.__esModule?n:{default:n};t.default=i.default,t.defaultOptions=o.defaultOptions},function(e,t,r){Object.defineProperty(t,"__esModule",{value:!0});var n,o=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var r=arguments[t];for(var n in r)Object.prototype.hasOwnProperty.call(r,n)&&(e[n]=r[n])}return e},i=r(4),s=(n=i)&&n.__esModule?n:{default:n};const a=Symbol("onInitialize"),l=Symbol("onDestroy"),c={};class u extends s.default{constructor(e){super(e),this.options=o({},c,this.getOptions()),this[a]=this[a].bind(this),this[l]=this[l].bind(this)}attach(){this.draggable.on("draggable:initialize",this[a]).on("draggable:destroy",this[l])}detach(){this.draggable.off("draggable:initialize",this[a]).off("draggable:destroy",this[l])}getOptions(){return this.draggable.options.focusable||{}}getElements(){return[...this.draggable.containers,...this.draggable.getDraggableElements()]}[a](){requestAnimationFrame(()=>{this.getElements().forEach(e=>function(e){Boolean(!e.getAttribute("tabindex")&&-1===e.tabIndex)&&(d.push(e),e.tabIndex=0)}(e))})}[l](){requestAnimationFrame(()=>{this.getElements().forEach(e=>function(e){const t=d.indexOf(e);-1!==t&&(e.tabIndex=-1,d.splice(t,1))}(e))})}}t.default=u;const d=[]},function(e,t,r){Object.defineProperty(t,"__esModule",{value:!0});var n,o=r(33),i=(n=o)&&n.__esModule?n:{default:n};t.default=i.default},function(e,t,r){Object.defineProperty(t,"__esModule",{value:!0}),t.default=class{constructor(e){this.draggable=e}attach(){throw new Error("Not Implemented")}detach(){throw new Error("Not Implemented")}}},function(e,t,r){Object.defineProperty(t,"__esModule",{value:!0}),t.defaultOptions=void 0;var n,o=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var r=arguments[t];for(var n in r)Object.prototype.hasOwnProperty.call(r,n)&&(e[n]=r[n])}return e},i=r(4),s=(n=i)&&n.__esModule?n:{default:n};const a=Symbol("onInitialize"),l=Symbol("onDestroy"),c=Symbol("announceEvent"),u=Symbol("announceMessage"),d=t.defaultOptions={expire:7e3};class g extends s.default{constructor(e){super(e),this.options=o({},d,this.getOptions()),this.originalTriggerMethod=this.draggable.trigger,this[a]=this[a].bind(this),this[l]=this[l].bind(this)}attach(){this.draggable.on("draggable:initialize",this[a])}detach(){this.draggable.off("draggable:destroy",this[l])}getOptions(){return this.draggable.options.announcements||{}}[c](e){const t=this.options[e.type];t&&"string"==typeof t&&this[u](t),t&&"function"==typeof t&&this[u](t(e))}[u](e){!function(e,{expire:t}){const r=document.createElement("div");r.textContent=e,h.appendChild(r),setTimeout(()=>{h.removeChild(r)},t)}(e,{expire:this.options.expire})}[a](){this.draggable.trigger=e=>{try{this[c](e)}finally{this.originalTriggerMethod.call(this.draggable,e)}}}[l](){this.draggable.trigger=this.originalTriggerMethod}}t.default=g;const h=function(){const e=document.createElement("div");return e.setAttribute("id","draggable-live-region"),e.setAttribute("aria-relevant","additions"),e.setAttribute("aria-atomic","true"),e.setAttribute("aria-live","assertive"),e.setAttribute("role","log"),e.style.position="fixed",e.style.width="1px",e.style.height="1px",e.style.top="-1px",e.style.overflow="hidden",e}();document.addEventListener("DOMContentLoaded",()=>{document.body.appendChild(h)})},function(e,t,r){Object.defineProperty(t,"__esModule",{value:!0}),t.defaultOptions=void 0;var n,o=r(36),i=(n=o)&&n.__esModule?n:{default:n};t.default=i.default,t.defaultOptions=o.defaultOptions},function(e,t,r){Object.defineProperty(t,"__esModule",{value:!0}),t.DraggableDestroyEvent=t.DraggableInitializedEvent=t.DraggableEvent=void 0;var n,o=r(3),i=(n=o)&&n.__esModule?n:{default:n};class s extends i.default{get draggable(){return this.data.draggable}}t.DraggableEvent=s,s.type="draggable";class a extends s{}t.DraggableInitializedEvent=a,a.type="draggable:initialize";class l extends s{}t.DraggableDestroyEvent=l,l.type="draggable:destroy"},function(e,t,r){Object.defineProperty(t,"__esModule",{value:!0}),t.DragStopEvent=t.DragPressureEvent=t.DragOutContainerEvent=t.DragOverContainerEvent=t.DragOutEvent=t.DragOverEvent=t.DragMoveEvent=t.DragStartEvent=t.DragEvent=void 0;var n,o=r(3),i=(n=o)&&n.__esModule?n:{default:n};class s extends i.default{get source(){return this.data.source}get originalSource(){return this.data.originalSource}get mirror(){return this.data.mirror}get sourceContainer(){return this.data.sourceContainer}get sensorEvent(){return this.data.sensorEvent}get originalEvent(){return this.sensorEvent?this.sensorEvent.originalEvent:null}}t.DragEvent=s,s.type="drag";class a extends s{}t.DragStartEvent=a,a.type="drag:start",a.cancelable=!0;class l extends s{}t.DragMoveEvent=l,l.type="drag:move";class c extends s{get overContainer(){return this.data.overContainer}get over(){return this.data.over}}t.DragOverEvent=c,c.type="drag:over",c.cancelable=!0;class u extends s{get overContainer(){return this.data.overContainer}get over(){return this.data.over}}t.DragOutEvent=u,u.type="drag:out";class d extends s{get overContainer(){return this.data.overContainer}}t.DragOverContainerEvent=d,d.type="drag:over:container";class g extends s{get overContainer(){return this.data.overContainer}}t.DragOutContainerEvent=g,g.type="drag:out:container";class h extends s{get pressure(){return this.data.pressure}}t.DragPressureEvent=h,h.type="drag:pressure";class f extends s{}t.DragStopEvent=f,f.type="drag:stop"},function(e,t,r){Object.defineProperty(t,"__esModule",{value:!0});var n=r(8);Object.keys(n).forEach((function(e){"default"!==e&&"__esModule"!==e&&Object.defineProperty(t,e,{enumerable:!0,get:function(){return n[e]}})}));var o=r(7);Object.keys(o).forEach((function(e){"default"!==e&&"__esModule"!==e&&Object.defineProperty(t,e,{enumerable:!0,get:function(){return o[e]}})}));var i=r(6);Object.keys(i).forEach((function(e){"default"!==e&&"__esModule"!==e&&Object.defineProperty(t,e,{enumerable:!0,get:function(){return i[e]}})}));var s=r(5);Object.keys(s).forEach((function(e){"default"!==e&&"__esModule"!==e&&Object.defineProperty(t,e,{enumerable:!0,get:function(){return s[e]}})}));var a,l=r(12),c=(a=l)&&a.__esModule?a:{default:a};t.default=c.default},function(e,t,r){Object.defineProperty(t,"__esModule",{value:!0});var n,o=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var r=arguments[t];for(var n in r)Object.prototype.hasOwnProperty.call(r,n)&&(e[n]=r[n])}return e},i=r(40),s=(n=i)&&n.__esModule?n:{default:n},a=r(9);const l=Symbol("onDragStart"),c=Symbol("onDragOverContainer"),u=Symbol("onDragOver"),d=Symbol("onDragStop"),g={"sortable:sorted":function({dragEvent:e}){const t=e.source.textContent.trim()||e.source.id||"sortable element";if(e.over){const r=e.over.textContent.trim()||e.over.id||"sortable element";return e.source.compareDocumentPosition(e.over)&Node.DOCUMENT_POSITION_FOLLOWING?`Placed ${t} after ${r}`:`Placed ${t} before ${r}`}return`Placed ${t} into a different container`}};class h extends s.default{constructor(e=[],t={}){super(e,o({},t,{announcements:o({},g,t.announcements||{})})),this.startIndex=null,this.startContainer=null,this[l]=this[l].bind(this),this[c]=this[c].bind(this),this[u]=this[u].bind(this),this[d]=this[d].bind(this),this.on("drag:start",this[l]).on("drag:over:container",this[c]).on("drag:over",this[u]).on("drag:stop",this[d])}destroy(){super.destroy(),this.off("drag:start",this[l]).off("drag:over:container",this[c]).off("drag:over",this[u]).off("drag:stop",this[d])}index(e){return this.getDraggableElementsForContainer(e.parentNode).indexOf(e)}[l](e){this.startContainer=e.source.parentNode,this.startIndex=this.index(e.source);const t=new a.SortableStartEvent({dragEvent:e,startIndex:this.startIndex,startContainer:this.startContainer});this.trigger(t),t.canceled()&&e.cancel()}[c](e){if(e.canceled())return;const{source:t,over:r,overContainer:n}=e,o=this.index(t),i=new a.SortableSortEvent({dragEvent:e,currentIndex:o,source:t,over:r});if(this.trigger(i),i.canceled())return;const s=v({source:t,over:r,overContainer:n,children:this.getDraggableElementsForContainer(n)});if(!s)return;const{oldContainer:l,newContainer:c}=s,u=this.index(e.source),d=new a.SortableSortedEvent({dragEvent:e,oldIndex:o,newIndex:u,oldContainer:l,newContainer:c});this.trigger(d)}[u](e){if(e.over===e.originalSource||e.over===e.source)return;const{source:t,over:r,overContainer:n}=e,o=this.index(t),i=new a.SortableSortEvent({dragEvent:e,currentIndex:o,source:t,over:r});if(this.trigger(i),i.canceled())return;const s=v({source:t,over:r,overContainer:n,children:this.getDraggableElementsForContainer(n)});if(!s)return;const{oldContainer:l,newContainer:c}=s,u=this.index(t),d=new a.SortableSortedEvent({dragEvent:e,oldIndex:o,newIndex:u,oldContainer:l,newContainer:c});this.trigger(d)}[d](e){const t=new a.SortableStopEvent({dragEvent:e,oldIndex:this.startIndex,newIndex:this.index(e.source),oldContainer:this.startContainer,newContainer:e.source.parentNode});this.trigger(t),this.startIndex=null,this.startContainer=null}}function f(e){return Array.prototype.indexOf.call(e.parentNode.children,e)}function v({source:e,over:t,overContainer:r,children:n}){const o=!n.length,i=e.parentNode!==r,s=t&&!i;return o?function(e,t){const r=e.parentNode;return t.appendChild(e),{oldContainer:r,newContainer:t}}(e,r):s?function(e,t){const r=f(e),n=f(t);return r<n?e.parentNode.insertBefore(e,t.nextElementSibling):e.parentNode.insertBefore(e,t),{oldContainer:e.parentNode,newContainer:e.parentNode}}(e,t):i?function(e,t,r){const n=e.parentNode;return t?t.parentNode.insertBefore(e,t):r.appendChild(e),{oldContainer:n,newContainer:e.parentNode}}(e,t,r):null}t.default=h},function(e,t,r){Object.defineProperty(t,"__esModule",{value:!0});var n=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var r=arguments[t];for(var n in r)Object.prototype.hasOwnProperty.call(r,n)&&(e[n]=r[n])}return e};const o=Symbol("canceled");class i{constructor(e){this[o]=!1,this.data=e}get type(){return this.constructor.type}get cancelable(){return this.constructor.cancelable}cancel(){this[o]=!0}canceled(){return Boolean(this[o])}clone(e){return new this.constructor(n({},this.data,e))}}t.default=i,i.type="event",i.cancelable=!1},function(e,t,r){Object.defineProperty(t,"__esModule",{value:!0}),t.SortableStopEvent=t.SortableSortedEvent=t.SortableSortEvent=t.SortableStartEvent=t.SortableEvent=void 0;var n,o=r(3),i=(n=o)&&n.__esModule?n:{default:n};class s extends i.default{get dragEvent(){return this.data.dragEvent}}t.SortableEvent=s,s.type="sortable";class a extends s{get startIndex(){return this.data.startIndex}get startContainer(){return this.data.startContainer}}t.SortableStartEvent=a,a.type="sortable:start",a.cancelable=!0;class l extends s{get currentIndex(){return this.data.currentIndex}get over(){return this.data.oldIndex}get overContainer(){return this.data.newIndex}}t.SortableSortEvent=l,l.type="sortable:sort",l.cancelable=!0;class c extends s{get oldIndex(){return this.data.oldIndex}get newIndex(){return this.data.newIndex}get oldContainer(){return this.data.oldContainer}get newContainer(){return this.data.newContainer}}t.SortableSortedEvent=c,c.type="sortable:sorted";class u extends s{get oldIndex(){return this.data.oldIndex}get newIndex(){return this.data.newIndex}get oldContainer(){return this.data.oldContainer}get newContainer(){return this.data.newContainer}}t.SortableStopEvent=u,u.type="sortable:stop"},function(e,t,r){Object.defineProperty(t,"__esModule",{value:!0});var n=r(9);Object.keys(n).forEach((function(e){"default"!==e&&"__esModule"!==e&&Object.defineProperty(t,e,{enumerable:!0,get:function(){return n[e]}})}));var o,i=r(41),s=(o=i)&&o.__esModule?o:{default:o};t.default=s.default}])},e.exports=r()})),r=(e=t)&&e.__esModule&&Object.prototype.hasOwnProperty.call(e,"default")?e.default:e;if(void 0===window.livewire)throw"Livewire Sortable Plugin: window.livewire is undefined. Make sure @livewireScripts is placed above this script include";window.livewire.directive("sortable-group",(e,t,n)=>{if(t.modifiers.includes("item-group")&&e.closest("[wire\\:sortable-group]").livewire_sortable.addContainer(e),t.modifiers.length>0)return;let o={draggable:"[wire\\:sortable-group\\.item]"};e.querySelector("[wire\\:sortable-group\\.handle]")&&(o.handle="[wire\\:sortable-group\\.handle]"),(e.livewire_sortable=new r([],o)).on("sortable:stop",()=>{setTimeout(()=>{let r=[];e.querySelectorAll("[wire\\:sortable-group\\.item-group]").forEach((e,t)=>{let n=[];e.querySelectorAll("[wire\\:sortable-group\\.item]").forEach((e,t)=>{n.push({order:t+1,value:e.getAttribute("wire:sortable-group.item")})}),r.push({order:t+1,value:e.getAttribute("wire:sortable-group.item-group"),items:n})}),n.call(t.method,r)},1)})}),window.livewire.directive("sortable",(e,t,n)=>{if(t.modifiers.length>0)return;let o={draggable:"[wire\\:sortable\\.item]"};e.querySelector("[wire\\:sortable\\.handle]")&&(o.handle="[wire\\:sortable\\.handle]"),new r(e,o).on("sortable:stop",()=>{setTimeout(()=>{let r=[];e.querySelectorAll("[wire\\:sortable\\.item]").forEach((e,t)=>{r.push({order:t+1,value:e.getAttribute("wire:sortable.item")})}),n.call(t.method,r)},1)})})}));
//# sourceMappingURL=livewire-sortable.js.map


/***/ }),

/***/ "./node_modules/webpack/buildin/global.js":
/*!***********************************!*\
  !*** (webpack)/buildin/global.js ***!
  \***********************************/
/*! no static exports found */
/***/ (function(module, exports) {

var g;

// This works in non-strict mode
g = (function() {
	return this;
})();

try {
	// This works if eval is allowed (see CSP)
	g = g || new Function("return this")();
} catch (e) {
	// This works if the window reference is available
	if (typeof window === "object") g = window;
}

// g can still be undefined, but nothing to do about it...
// We return undefined, instead of nothing here, so it's
// easier to handle this case. if(!global) { ...}

module.exports = g;


/***/ }),

/***/ "./resources/css/app.scss":
/*!********************************!*\
  !*** ./resources/css/app.scss ***!
  \********************************/
/*! no static exports found */
/***/ (function(module, exports) {

// removed by extract-text-webpack-plugin

/***/ }),

/***/ "./resources/js/index.js":
/*!*******************************!*\
  !*** ./resources/js/index.js ***!
  \*******************************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var alpinejs__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! alpinejs */ "./node_modules/alpinejs/dist/alpine.js");
/* harmony import */ var alpinejs__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(alpinejs__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var livewire_sortable__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! livewire-sortable */ "./node_modules/livewire-sortable/dist/livewire-sortable.js");
/* harmony import */ var livewire_sortable__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(livewire_sortable__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var alpine_editor__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! alpine-editor */ "./node_modules/alpine-editor/dist/alpine-editor.js");
/* harmony import */ var alpine_editor__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(alpine_editor__WEBPACK_IMPORTED_MODULE_2__);




/***/ }),

/***/ 0:
/*!**************************************************************!*\
  !*** multi ./resources/js/index.js ./resources/css/app.scss ***!
  \**************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

__webpack_require__(/*! C:\laragon\www\peril-vault\vendor\angry-moustache\rambo\resources\js\index.js */"./resources/js/index.js");
module.exports = __webpack_require__(/*! C:\laragon\www\peril-vault\vendor\angry-moustache\rambo\resources\css\app.scss */"./resources/css/app.scss");


/***/ })

/******/ });