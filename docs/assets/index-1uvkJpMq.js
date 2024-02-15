function CA(t,e){for(var n=0;n<e.length;n++){const r=e[n];if(typeof r!="string"&&!Array.isArray(r)){for(const i in r)if(i!=="default"&&!(i in t)){const s=Object.getOwnPropertyDescriptor(r,i);s&&Object.defineProperty(t,i,s.get?s:{enumerable:!0,get:()=>r[i]})}}}return Object.freeze(Object.defineProperty(t,Symbol.toStringTag,{value:"Module"}))}(function(){const e=document.createElement("link").relList;if(e&&e.supports&&e.supports("modulepreload"))return;for(const i of document.querySelectorAll('link[rel="modulepreload"]'))r(i);new MutationObserver(i=>{for(const s of i)if(s.type==="childList")for(const o of s.addedNodes)o.tagName==="LINK"&&o.rel==="modulepreload"&&r(o)}).observe(document,{childList:!0,subtree:!0});function n(i){const s={};return i.integrity&&(s.integrity=i.integrity),i.referrerPolicy&&(s.referrerPolicy=i.referrerPolicy),i.crossOrigin==="use-credentials"?s.credentials="include":i.crossOrigin==="anonymous"?s.credentials="omit":s.credentials="same-origin",s}function r(i){if(i.ep)return;i.ep=!0;const s=n(i);fetch(i.href,s)}})();var nl=typeof globalThis<"u"?globalThis:typeof window<"u"?window:typeof global<"u"?global:typeof self<"u"?self:{};function Q0(t){return t&&t.__esModule&&Object.prototype.hasOwnProperty.call(t,"default")?t.default:t}var Y0={exports:{}},fc={},X0={exports:{}},Q={};/**
 * @license React
 * react.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var ma=Symbol.for("react.element"),RA=Symbol.for("react.portal"),bA=Symbol.for("react.fragment"),xA=Symbol.for("react.strict_mode"),NA=Symbol.for("react.profiler"),OA=Symbol.for("react.provider"),DA=Symbol.for("react.context"),LA=Symbol.for("react.forward_ref"),MA=Symbol.for("react.suspense"),VA=Symbol.for("react.memo"),FA=Symbol.for("react.lazy"),dv=Symbol.iterator;function $A(t){return t===null||typeof t!="object"?null:(t=dv&&t[dv]||t["@@iterator"],typeof t=="function"?t:null)}var J0={isMounted:function(){return!1},enqueueForceUpdate:function(){},enqueueReplaceState:function(){},enqueueSetState:function(){}},Z0=Object.assign,ew={};function ws(t,e,n){this.props=t,this.context=e,this.refs=ew,this.updater=n||J0}ws.prototype.isReactComponent={};ws.prototype.setState=function(t,e){if(typeof t!="object"&&typeof t!="function"&&t!=null)throw Error("setState(...): takes an object of state variables to update or a function which returns an object of state variables.");this.updater.enqueueSetState(this,t,e,"setState")};ws.prototype.forceUpdate=function(t){this.updater.enqueueForceUpdate(this,t,"forceUpdate")};function tw(){}tw.prototype=ws.prototype;function bp(t,e,n){this.props=t,this.context=e,this.refs=ew,this.updater=n||J0}var xp=bp.prototype=new tw;xp.constructor=bp;Z0(xp,ws.prototype);xp.isPureReactComponent=!0;var pv=Array.isArray,nw=Object.prototype.hasOwnProperty,Np={current:null},rw={key:!0,ref:!0,__self:!0,__source:!0};function iw(t,e,n){var r,i={},s=null,o=null;if(e!=null)for(r in e.ref!==void 0&&(o=e.ref),e.key!==void 0&&(s=""+e.key),e)nw.call(e,r)&&!rw.hasOwnProperty(r)&&(i[r]=e[r]);var a=arguments.length-2;if(a===1)i.children=n;else if(1<a){for(var l=Array(a),u=0;u<a;u++)l[u]=arguments[u+2];i.children=l}if(t&&t.defaultProps)for(r in a=t.defaultProps,a)i[r]===void 0&&(i[r]=a[r]);return{$$typeof:ma,type:t,key:s,ref:o,props:i,_owner:Np.current}}function UA(t,e){return{$$typeof:ma,type:t.type,key:e,ref:t.ref,props:t.props,_owner:t._owner}}function Op(t){return typeof t=="object"&&t!==null&&t.$$typeof===ma}function jA(t){var e={"=":"=0",":":"=2"};return"$"+t.replace(/[=:]/g,function(n){return e[n]})}var mv=/\/+/g;function Df(t,e){return typeof t=="object"&&t!==null&&t.key!=null?jA(""+t.key):e.toString(36)}function Bl(t,e,n,r,i){var s=typeof t;(s==="undefined"||s==="boolean")&&(t=null);var o=!1;if(t===null)o=!0;else switch(s){case"string":case"number":o=!0;break;case"object":switch(t.$$typeof){case ma:case RA:o=!0}}if(o)return o=t,i=i(o),t=r===""?"."+Df(o,0):r,pv(i)?(n="",t!=null&&(n=t.replace(mv,"$&/")+"/"),Bl(i,e,n,"",function(u){return u})):i!=null&&(Op(i)&&(i=UA(i,n+(!i.key||o&&o.key===i.key?"":(""+i.key).replace(mv,"$&/")+"/")+t)),e.push(i)),1;if(o=0,r=r===""?".":r+":",pv(t))for(var a=0;a<t.length;a++){s=t[a];var l=r+Df(s,a);o+=Bl(s,e,n,l,i)}else if(l=$A(t),typeof l=="function")for(t=l.call(t),a=0;!(s=t.next()).done;)s=s.value,l=r+Df(s,a++),o+=Bl(s,e,n,l,i);else if(s==="object")throw e=String(t),Error("Objects are not valid as a React child (found: "+(e==="[object Object]"?"object with keys {"+Object.keys(t).join(", ")+"}":e)+"). If you meant to render a collection of children, use an array instead.");return o}function rl(t,e,n){if(t==null)return t;var r=[],i=0;return Bl(t,r,"","",function(s){return e.call(n,s,i++)}),r}function zA(t){if(t._status===-1){var e=t._result;e=e(),e.then(function(n){(t._status===0||t._status===-1)&&(t._status=1,t._result=n)},function(n){(t._status===0||t._status===-1)&&(t._status=2,t._result=n)}),t._status===-1&&(t._status=0,t._result=e)}if(t._status===1)return t._result.default;throw t._result}var ut={current:null},Hl={transition:null},BA={ReactCurrentDispatcher:ut,ReactCurrentBatchConfig:Hl,ReactCurrentOwner:Np};Q.Children={map:rl,forEach:function(t,e,n){rl(t,function(){e.apply(this,arguments)},n)},count:function(t){var e=0;return rl(t,function(){e++}),e},toArray:function(t){return rl(t,function(e){return e})||[]},only:function(t){if(!Op(t))throw Error("React.Children.only expected to receive a single React element child.");return t}};Q.Component=ws;Q.Fragment=bA;Q.Profiler=NA;Q.PureComponent=bp;Q.StrictMode=xA;Q.Suspense=MA;Q.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED=BA;Q.cloneElement=function(t,e,n){if(t==null)throw Error("React.cloneElement(...): The argument must be a React element, but you passed "+t+".");var r=Z0({},t.props),i=t.key,s=t.ref,o=t._owner;if(e!=null){if(e.ref!==void 0&&(s=e.ref,o=Np.current),e.key!==void 0&&(i=""+e.key),t.type&&t.type.defaultProps)var a=t.type.defaultProps;for(l in e)nw.call(e,l)&&!rw.hasOwnProperty(l)&&(r[l]=e[l]===void 0&&a!==void 0?a[l]:e[l])}var l=arguments.length-2;if(l===1)r.children=n;else if(1<l){a=Array(l);for(var u=0;u<l;u++)a[u]=arguments[u+2];r.children=a}return{$$typeof:ma,type:t.type,key:i,ref:s,props:r,_owner:o}};Q.createContext=function(t){return t={$$typeof:DA,_currentValue:t,_currentValue2:t,_threadCount:0,Provider:null,Consumer:null,_defaultValue:null,_globalName:null},t.Provider={$$typeof:OA,_context:t},t.Consumer=t};Q.createElement=iw;Q.createFactory=function(t){var e=iw.bind(null,t);return e.type=t,e};Q.createRef=function(){return{current:null}};Q.forwardRef=function(t){return{$$typeof:LA,render:t}};Q.isValidElement=Op;Q.lazy=function(t){return{$$typeof:FA,_payload:{_status:-1,_result:t},_init:zA}};Q.memo=function(t,e){return{$$typeof:VA,type:t,compare:e===void 0?null:e}};Q.startTransition=function(t){var e=Hl.transition;Hl.transition={};try{t()}finally{Hl.transition=e}};Q.unstable_act=function(){throw Error("act(...) is not supported in production builds of React.")};Q.useCallback=function(t,e){return ut.current.useCallback(t,e)};Q.useContext=function(t){return ut.current.useContext(t)};Q.useDebugValue=function(){};Q.useDeferredValue=function(t){return ut.current.useDeferredValue(t)};Q.useEffect=function(t,e){return ut.current.useEffect(t,e)};Q.useId=function(){return ut.current.useId()};Q.useImperativeHandle=function(t,e,n){return ut.current.useImperativeHandle(t,e,n)};Q.useInsertionEffect=function(t,e){return ut.current.useInsertionEffect(t,e)};Q.useLayoutEffect=function(t,e){return ut.current.useLayoutEffect(t,e)};Q.useMemo=function(t,e){return ut.current.useMemo(t,e)};Q.useReducer=function(t,e,n){return ut.current.useReducer(t,e,n)};Q.useRef=function(t){return ut.current.useRef(t)};Q.useState=function(t){return ut.current.useState(t)};Q.useSyncExternalStore=function(t,e,n){return ut.current.useSyncExternalStore(t,e,n)};Q.useTransition=function(){return ut.current.useTransition()};Q.version="18.2.0";X0.exports=Q;var A=X0.exports;const hc=Q0(A),HA=CA({__proto__:null,default:hc},[A]);/**
 * @license React
 * react-jsx-runtime.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var WA=A,qA=Symbol.for("react.element"),KA=Symbol.for("react.fragment"),GA=Object.prototype.hasOwnProperty,QA=WA.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED.ReactCurrentOwner,YA={key:!0,ref:!0,__self:!0,__source:!0};function sw(t,e,n){var r,i={},s=null,o=null;n!==void 0&&(s=""+n),e.key!==void 0&&(s=""+e.key),e.ref!==void 0&&(o=e.ref);for(r in e)GA.call(e,r)&&!YA.hasOwnProperty(r)&&(i[r]=e[r]);if(t&&t.defaultProps)for(r in e=t.defaultProps,e)i[r]===void 0&&(i[r]=e[r]);return{$$typeof:qA,type:t,key:s,ref:o,props:i,_owner:QA.current}}fc.Fragment=KA;fc.jsx=sw;fc.jsxs=sw;Y0.exports=fc;var v=Y0.exports,Mh={},ow={exports:{}},At={},aw={exports:{}},lw={};/**
 * @license React
 * scheduler.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */(function(t){function e(L,W){var q=L.length;L.push(W);e:for(;0<q;){var Te=q-1>>>1,Le=L[Te];if(0<i(Le,W))L[Te]=W,L[q]=Le,q=Te;else break e}}function n(L){return L.length===0?null:L[0]}function r(L){if(L.length===0)return null;var W=L[0],q=L.pop();if(q!==W){L[0]=q;e:for(var Te=0,Le=L.length,el=Le>>>1;Te<el;){var Lr=2*(Te+1)-1,Of=L[Lr],Mr=Lr+1,tl=L[Mr];if(0>i(Of,q))Mr<Le&&0>i(tl,Of)?(L[Te]=tl,L[Mr]=q,Te=Mr):(L[Te]=Of,L[Lr]=q,Te=Lr);else if(Mr<Le&&0>i(tl,q))L[Te]=tl,L[Mr]=q,Te=Mr;else break e}}return W}function i(L,W){var q=L.sortIndex-W.sortIndex;return q!==0?q:L.id-W.id}if(typeof performance=="object"&&typeof performance.now=="function"){var s=performance;t.unstable_now=function(){return s.now()}}else{var o=Date,a=o.now();t.unstable_now=function(){return o.now()-a}}var l=[],u=[],c=1,f=null,h=3,p=!1,y=!1,_=!1,w=typeof setTimeout=="function"?setTimeout:null,m=typeof clearTimeout=="function"?clearTimeout:null,d=typeof setImmediate<"u"?setImmediate:null;typeof navigator<"u"&&navigator.scheduling!==void 0&&navigator.scheduling.isInputPending!==void 0&&navigator.scheduling.isInputPending.bind(navigator.scheduling);function g(L){for(var W=n(u);W!==null;){if(W.callback===null)r(u);else if(W.startTime<=L)r(u),W.sortIndex=W.expirationTime,e(l,W);else break;W=n(u)}}function E(L){if(_=!1,g(L),!y)if(n(l)!==null)y=!0,xf(I);else{var W=n(u);W!==null&&Nf(E,W.startTime-L)}}function I(L,W){y=!1,_&&(_=!1,m(N),N=-1),p=!0;var q=h;try{for(g(W),f=n(l);f!==null&&(!(f.expirationTime>W)||L&&!ft());){var Te=f.callback;if(typeof Te=="function"){f.callback=null,h=f.priorityLevel;var Le=Te(f.expirationTime<=W);W=t.unstable_now(),typeof Le=="function"?f.callback=Le:f===n(l)&&r(l),g(W)}else r(l);f=n(l)}if(f!==null)var el=!0;else{var Lr=n(u);Lr!==null&&Nf(E,Lr.startTime-W),el=!1}return el}finally{f=null,h=q,p=!1}}var k=!1,C=null,N=-1,B=5,F=-1;function ft(){return!(t.unstable_now()-F<B)}function Ln(){if(C!==null){var L=t.unstable_now();F=L;var W=!0;try{W=C(!0,L)}finally{W?Dr():(k=!1,C=null)}}else k=!1}var Dr;if(typeof d=="function")Dr=function(){d(Ln)};else if(typeof MessageChannel<"u"){var Ls=new MessageChannel,bf=Ls.port2;Ls.port1.onmessage=Ln,Dr=function(){bf.postMessage(null)}}else Dr=function(){w(Ln,0)};function xf(L){C=L,k||(k=!0,Dr())}function Nf(L,W){N=w(function(){L(t.unstable_now())},W)}t.unstable_IdlePriority=5,t.unstable_ImmediatePriority=1,t.unstable_LowPriority=4,t.unstable_NormalPriority=3,t.unstable_Profiling=null,t.unstable_UserBlockingPriority=2,t.unstable_cancelCallback=function(L){L.callback=null},t.unstable_continueExecution=function(){y||p||(y=!0,xf(I))},t.unstable_forceFrameRate=function(L){0>L||125<L?console.error("forceFrameRate takes a positive int between 0 and 125, forcing frame rates higher than 125 fps is not supported"):B=0<L?Math.floor(1e3/L):5},t.unstable_getCurrentPriorityLevel=function(){return h},t.unstable_getFirstCallbackNode=function(){return n(l)},t.unstable_next=function(L){switch(h){case 1:case 2:case 3:var W=3;break;default:W=h}var q=h;h=W;try{return L()}finally{h=q}},t.unstable_pauseExecution=function(){},t.unstable_requestPaint=function(){},t.unstable_runWithPriority=function(L,W){switch(L){case 1:case 2:case 3:case 4:case 5:break;default:L=3}var q=h;h=L;try{return W()}finally{h=q}},t.unstable_scheduleCallback=function(L,W,q){var Te=t.unstable_now();switch(typeof q=="object"&&q!==null?(q=q.delay,q=typeof q=="number"&&0<q?Te+q:Te):q=Te,L){case 1:var Le=-1;break;case 2:Le=250;break;case 5:Le=1073741823;break;case 4:Le=1e4;break;default:Le=5e3}return Le=q+Le,L={id:c++,callback:W,priorityLevel:L,startTime:q,expirationTime:Le,sortIndex:-1},q>Te?(L.sortIndex=q,e(u,L),n(l)===null&&L===n(u)&&(_?(m(N),N=-1):_=!0,Nf(E,q-Te))):(L.sortIndex=Le,e(l,L),y||p||(y=!0,xf(I))),L},t.unstable_shouldYield=ft,t.unstable_wrapCallback=function(L){var W=h;return function(){var q=h;h=W;try{return L.apply(this,arguments)}finally{h=q}}}})(lw);aw.exports=lw;var XA=aw.exports;/**
 * @license React
 * react-dom.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var uw=A,It=XA;function P(t){for(var e="https://reactjs.org/docs/error-decoder.html?invariant="+t,n=1;n<arguments.length;n++)e+="&args[]="+encodeURIComponent(arguments[n]);return"Minified React error #"+t+"; visit "+e+" for the full message or use the non-minified dev environment for full errors and additional helpful warnings."}var cw=new Set,So={};function mi(t,e){ns(t,e),ns(t+"Capture",e)}function ns(t,e){for(So[t]=e,t=0;t<e.length;t++)cw.add(e[t])}var En=!(typeof window>"u"||typeof window.document>"u"||typeof window.document.createElement>"u"),Vh=Object.prototype.hasOwnProperty,JA=/^[:A-Z_a-z\u00C0-\u00D6\u00D8-\u00F6\u00F8-\u02FF\u0370-\u037D\u037F-\u1FFF\u200C-\u200D\u2070-\u218F\u2C00-\u2FEF\u3001-\uD7FF\uF900-\uFDCF\uFDF0-\uFFFD][:A-Z_a-z\u00C0-\u00D6\u00D8-\u00F6\u00F8-\u02FF\u0370-\u037D\u037F-\u1FFF\u200C-\u200D\u2070-\u218F\u2C00-\u2FEF\u3001-\uD7FF\uF900-\uFDCF\uFDF0-\uFFFD\-.0-9\u00B7\u0300-\u036F\u203F-\u2040]*$/,gv={},vv={};function ZA(t){return Vh.call(vv,t)?!0:Vh.call(gv,t)?!1:JA.test(t)?vv[t]=!0:(gv[t]=!0,!1)}function ek(t,e,n,r){if(n!==null&&n.type===0)return!1;switch(typeof e){case"function":case"symbol":return!0;case"boolean":return r?!1:n!==null?!n.acceptsBooleans:(t=t.toLowerCase().slice(0,5),t!=="data-"&&t!=="aria-");default:return!1}}function tk(t,e,n,r){if(e===null||typeof e>"u"||ek(t,e,n,r))return!0;if(r)return!1;if(n!==null)switch(n.type){case 3:return!e;case 4:return e===!1;case 5:return isNaN(e);case 6:return isNaN(e)||1>e}return!1}function ct(t,e,n,r,i,s,o){this.acceptsBooleans=e===2||e===3||e===4,this.attributeName=r,this.attributeNamespace=i,this.mustUseProperty=n,this.propertyName=t,this.type=e,this.sanitizeURL=s,this.removeEmptyString=o}var Ge={};"children dangerouslySetInnerHTML defaultValue defaultChecked innerHTML suppressContentEditableWarning suppressHydrationWarning style".split(" ").forEach(function(t){Ge[t]=new ct(t,0,!1,t,null,!1,!1)});[["acceptCharset","accept-charset"],["className","class"],["htmlFor","for"],["httpEquiv","http-equiv"]].forEach(function(t){var e=t[0];Ge[e]=new ct(e,1,!1,t[1],null,!1,!1)});["contentEditable","draggable","spellCheck","value"].forEach(function(t){Ge[t]=new ct(t,2,!1,t.toLowerCase(),null,!1,!1)});["autoReverse","externalResourcesRequired","focusable","preserveAlpha"].forEach(function(t){Ge[t]=new ct(t,2,!1,t,null,!1,!1)});"allowFullScreen async autoFocus autoPlay controls default defer disabled disablePictureInPicture disableRemotePlayback formNoValidate hidden loop noModule noValidate open playsInline readOnly required reversed scoped seamless itemScope".split(" ").forEach(function(t){Ge[t]=new ct(t,3,!1,t.toLowerCase(),null,!1,!1)});["checked","multiple","muted","selected"].forEach(function(t){Ge[t]=new ct(t,3,!0,t,null,!1,!1)});["capture","download"].forEach(function(t){Ge[t]=new ct(t,4,!1,t,null,!1,!1)});["cols","rows","size","span"].forEach(function(t){Ge[t]=new ct(t,6,!1,t,null,!1,!1)});["rowSpan","start"].forEach(function(t){Ge[t]=new ct(t,5,!1,t.toLowerCase(),null,!1,!1)});var Dp=/[\-:]([a-z])/g;function Lp(t){return t[1].toUpperCase()}"accent-height alignment-baseline arabic-form baseline-shift cap-height clip-path clip-rule color-interpolation color-interpolation-filters color-profile color-rendering dominant-baseline enable-background fill-opacity fill-rule flood-color flood-opacity font-family font-size font-size-adjust font-stretch font-style font-variant font-weight glyph-name glyph-orientation-horizontal glyph-orientation-vertical horiz-adv-x horiz-origin-x image-rendering letter-spacing lighting-color marker-end marker-mid marker-start overline-position overline-thickness paint-order panose-1 pointer-events rendering-intent shape-rendering stop-color stop-opacity strikethrough-position strikethrough-thickness stroke-dasharray stroke-dashoffset stroke-linecap stroke-linejoin stroke-miterlimit stroke-opacity stroke-width text-anchor text-decoration text-rendering underline-position underline-thickness unicode-bidi unicode-range units-per-em v-alphabetic v-hanging v-ideographic v-mathematical vector-effect vert-adv-y vert-origin-x vert-origin-y word-spacing writing-mode xmlns:xlink x-height".split(" ").forEach(function(t){var e=t.replace(Dp,Lp);Ge[e]=new ct(e,1,!1,t,null,!1,!1)});"xlink:actuate xlink:arcrole xlink:role xlink:show xlink:title xlink:type".split(" ").forEach(function(t){var e=t.replace(Dp,Lp);Ge[e]=new ct(e,1,!1,t,"http://www.w3.org/1999/xlink",!1,!1)});["xml:base","xml:lang","xml:space"].forEach(function(t){var e=t.replace(Dp,Lp);Ge[e]=new ct(e,1,!1,t,"http://www.w3.org/XML/1998/namespace",!1,!1)});["tabIndex","crossOrigin"].forEach(function(t){Ge[t]=new ct(t,1,!1,t.toLowerCase(),null,!1,!1)});Ge.xlinkHref=new ct("xlinkHref",1,!1,"xlink:href","http://www.w3.org/1999/xlink",!0,!1);["src","href","action","formAction"].forEach(function(t){Ge[t]=new ct(t,1,!1,t.toLowerCase(),null,!0,!0)});function Mp(t,e,n,r){var i=Ge.hasOwnProperty(e)?Ge[e]:null;(i!==null?i.type!==0:r||!(2<e.length)||e[0]!=="o"&&e[0]!=="O"||e[1]!=="n"&&e[1]!=="N")&&(tk(e,n,i,r)&&(n=null),r||i===null?ZA(e)&&(n===null?t.removeAttribute(e):t.setAttribute(e,""+n)):i.mustUseProperty?t[i.propertyName]=n===null?i.type===3?!1:"":n:(e=i.attributeName,r=i.attributeNamespace,n===null?t.removeAttribute(e):(i=i.type,n=i===3||i===4&&n===!0?"":""+n,r?t.setAttributeNS(r,e,n):t.setAttribute(e,n))))}var xn=uw.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED,il=Symbol.for("react.element"),Pi=Symbol.for("react.portal"),Ci=Symbol.for("react.fragment"),Vp=Symbol.for("react.strict_mode"),Fh=Symbol.for("react.profiler"),fw=Symbol.for("react.provider"),hw=Symbol.for("react.context"),Fp=Symbol.for("react.forward_ref"),$h=Symbol.for("react.suspense"),Uh=Symbol.for("react.suspense_list"),$p=Symbol.for("react.memo"),jn=Symbol.for("react.lazy"),dw=Symbol.for("react.offscreen"),yv=Symbol.iterator;function Ms(t){return t===null||typeof t!="object"?null:(t=yv&&t[yv]||t["@@iterator"],typeof t=="function"?t:null)}var ge=Object.assign,Lf;function Ks(t){if(Lf===void 0)try{throw Error()}catch(n){var e=n.stack.trim().match(/\n( *(at )?)/);Lf=e&&e[1]||""}return`
`+Lf+t}var Mf=!1;function Vf(t,e){if(!t||Mf)return"";Mf=!0;var n=Error.prepareStackTrace;Error.prepareStackTrace=void 0;try{if(e)if(e=function(){throw Error()},Object.defineProperty(e.prototype,"props",{set:function(){throw Error()}}),typeof Reflect=="object"&&Reflect.construct){try{Reflect.construct(e,[])}catch(u){var r=u}Reflect.construct(t,[],e)}else{try{e.call()}catch(u){r=u}t.call(e.prototype)}else{try{throw Error()}catch(u){r=u}t()}}catch(u){if(u&&r&&typeof u.stack=="string"){for(var i=u.stack.split(`
`),s=r.stack.split(`
`),o=i.length-1,a=s.length-1;1<=o&&0<=a&&i[o]!==s[a];)a--;for(;1<=o&&0<=a;o--,a--)if(i[o]!==s[a]){if(o!==1||a!==1)do if(o--,a--,0>a||i[o]!==s[a]){var l=`
`+i[o].replace(" at new "," at ");return t.displayName&&l.includes("<anonymous>")&&(l=l.replace("<anonymous>",t.displayName)),l}while(1<=o&&0<=a);break}}}finally{Mf=!1,Error.prepareStackTrace=n}return(t=t?t.displayName||t.name:"")?Ks(t):""}function nk(t){switch(t.tag){case 5:return Ks(t.type);case 16:return Ks("Lazy");case 13:return Ks("Suspense");case 19:return Ks("SuspenseList");case 0:case 2:case 15:return t=Vf(t.type,!1),t;case 11:return t=Vf(t.type.render,!1),t;case 1:return t=Vf(t.type,!0),t;default:return""}}function jh(t){if(t==null)return null;if(typeof t=="function")return t.displayName||t.name||null;if(typeof t=="string")return t;switch(t){case Ci:return"Fragment";case Pi:return"Portal";case Fh:return"Profiler";case Vp:return"StrictMode";case $h:return"Suspense";case Uh:return"SuspenseList"}if(typeof t=="object")switch(t.$$typeof){case hw:return(t.displayName||"Context")+".Consumer";case fw:return(t._context.displayName||"Context")+".Provider";case Fp:var e=t.render;return t=t.displayName,t||(t=e.displayName||e.name||"",t=t!==""?"ForwardRef("+t+")":"ForwardRef"),t;case $p:return e=t.displayName||null,e!==null?e:jh(t.type)||"Memo";case jn:e=t._payload,t=t._init;try{return jh(t(e))}catch{}}return null}function rk(t){var e=t.type;switch(t.tag){case 24:return"Cache";case 9:return(e.displayName||"Context")+".Consumer";case 10:return(e._context.displayName||"Context")+".Provider";case 18:return"DehydratedFragment";case 11:return t=e.render,t=t.displayName||t.name||"",e.displayName||(t!==""?"ForwardRef("+t+")":"ForwardRef");case 7:return"Fragment";case 5:return e;case 4:return"Portal";case 3:return"Root";case 6:return"Text";case 16:return jh(e);case 8:return e===Vp?"StrictMode":"Mode";case 22:return"Offscreen";case 12:return"Profiler";case 21:return"Scope";case 13:return"Suspense";case 19:return"SuspenseList";case 25:return"TracingMarker";case 1:case 0:case 17:case 2:case 14:case 15:if(typeof e=="function")return e.displayName||e.name||null;if(typeof e=="string")return e}return null}function dr(t){switch(typeof t){case"boolean":case"number":case"string":case"undefined":return t;case"object":return t;default:return""}}function pw(t){var e=t.type;return(t=t.nodeName)&&t.toLowerCase()==="input"&&(e==="checkbox"||e==="radio")}function ik(t){var e=pw(t)?"checked":"value",n=Object.getOwnPropertyDescriptor(t.constructor.prototype,e),r=""+t[e];if(!t.hasOwnProperty(e)&&typeof n<"u"&&typeof n.get=="function"&&typeof n.set=="function"){var i=n.get,s=n.set;return Object.defineProperty(t,e,{configurable:!0,get:function(){return i.call(this)},set:function(o){r=""+o,s.call(this,o)}}),Object.defineProperty(t,e,{enumerable:n.enumerable}),{getValue:function(){return r},setValue:function(o){r=""+o},stopTracking:function(){t._valueTracker=null,delete t[e]}}}}function sl(t){t._valueTracker||(t._valueTracker=ik(t))}function mw(t){if(!t)return!1;var e=t._valueTracker;if(!e)return!0;var n=e.getValue(),r="";return t&&(r=pw(t)?t.checked?"true":"false":t.value),t=r,t!==n?(e.setValue(t),!0):!1}function hu(t){if(t=t||(typeof document<"u"?document:void 0),typeof t>"u")return null;try{return t.activeElement||t.body}catch{return t.body}}function zh(t,e){var n=e.checked;return ge({},e,{defaultChecked:void 0,defaultValue:void 0,value:void 0,checked:n??t._wrapperState.initialChecked})}function _v(t,e){var n=e.defaultValue==null?"":e.defaultValue,r=e.checked!=null?e.checked:e.defaultChecked;n=dr(e.value!=null?e.value:n),t._wrapperState={initialChecked:r,initialValue:n,controlled:e.type==="checkbox"||e.type==="radio"?e.checked!=null:e.value!=null}}function gw(t,e){e=e.checked,e!=null&&Mp(t,"checked",e,!1)}function Bh(t,e){gw(t,e);var n=dr(e.value),r=e.type;if(n!=null)r==="number"?(n===0&&t.value===""||t.value!=n)&&(t.value=""+n):t.value!==""+n&&(t.value=""+n);else if(r==="submit"||r==="reset"){t.removeAttribute("value");return}e.hasOwnProperty("value")?Hh(t,e.type,n):e.hasOwnProperty("defaultValue")&&Hh(t,e.type,dr(e.defaultValue)),e.checked==null&&e.defaultChecked!=null&&(t.defaultChecked=!!e.defaultChecked)}function wv(t,e,n){if(e.hasOwnProperty("value")||e.hasOwnProperty("defaultValue")){var r=e.type;if(!(r!=="submit"&&r!=="reset"||e.value!==void 0&&e.value!==null))return;e=""+t._wrapperState.initialValue,n||e===t.value||(t.value=e),t.defaultValue=e}n=t.name,n!==""&&(t.name=""),t.defaultChecked=!!t._wrapperState.initialChecked,n!==""&&(t.name=n)}function Hh(t,e,n){(e!=="number"||hu(t.ownerDocument)!==t)&&(n==null?t.defaultValue=""+t._wrapperState.initialValue:t.defaultValue!==""+n&&(t.defaultValue=""+n))}var Gs=Array.isArray;function Hi(t,e,n,r){if(t=t.options,e){e={};for(var i=0;i<n.length;i++)e["$"+n[i]]=!0;for(n=0;n<t.length;n++)i=e.hasOwnProperty("$"+t[n].value),t[n].selected!==i&&(t[n].selected=i),i&&r&&(t[n].defaultSelected=!0)}else{for(n=""+dr(n),e=null,i=0;i<t.length;i++){if(t[i].value===n){t[i].selected=!0,r&&(t[i].defaultSelected=!0);return}e!==null||t[i].disabled||(e=t[i])}e!==null&&(e.selected=!0)}}function Wh(t,e){if(e.dangerouslySetInnerHTML!=null)throw Error(P(91));return ge({},e,{value:void 0,defaultValue:void 0,children:""+t._wrapperState.initialValue})}function Ev(t,e){var n=e.value;if(n==null){if(n=e.children,e=e.defaultValue,n!=null){if(e!=null)throw Error(P(92));if(Gs(n)){if(1<n.length)throw Error(P(93));n=n[0]}e=n}e==null&&(e=""),n=e}t._wrapperState={initialValue:dr(n)}}function vw(t,e){var n=dr(e.value),r=dr(e.defaultValue);n!=null&&(n=""+n,n!==t.value&&(t.value=n),e.defaultValue==null&&t.defaultValue!==n&&(t.defaultValue=n)),r!=null&&(t.defaultValue=""+r)}function Tv(t){var e=t.textContent;e===t._wrapperState.initialValue&&e!==""&&e!==null&&(t.value=e)}function yw(t){switch(t){case"svg":return"http://www.w3.org/2000/svg";case"math":return"http://www.w3.org/1998/Math/MathML";default:return"http://www.w3.org/1999/xhtml"}}function qh(t,e){return t==null||t==="http://www.w3.org/1999/xhtml"?yw(e):t==="http://www.w3.org/2000/svg"&&e==="foreignObject"?"http://www.w3.org/1999/xhtml":t}var ol,_w=function(t){return typeof MSApp<"u"&&MSApp.execUnsafeLocalFunction?function(e,n,r,i){MSApp.execUnsafeLocalFunction(function(){return t(e,n,r,i)})}:t}(function(t,e){if(t.namespaceURI!=="http://www.w3.org/2000/svg"||"innerHTML"in t)t.innerHTML=e;else{for(ol=ol||document.createElement("div"),ol.innerHTML="<svg>"+e.valueOf().toString()+"</svg>",e=ol.firstChild;t.firstChild;)t.removeChild(t.firstChild);for(;e.firstChild;)t.appendChild(e.firstChild)}});function Ao(t,e){if(e){var n=t.firstChild;if(n&&n===t.lastChild&&n.nodeType===3){n.nodeValue=e;return}}t.textContent=e}var so={animationIterationCount:!0,aspectRatio:!0,borderImageOutset:!0,borderImageSlice:!0,borderImageWidth:!0,boxFlex:!0,boxFlexGroup:!0,boxOrdinalGroup:!0,columnCount:!0,columns:!0,flex:!0,flexGrow:!0,flexPositive:!0,flexShrink:!0,flexNegative:!0,flexOrder:!0,gridArea:!0,gridRow:!0,gridRowEnd:!0,gridRowSpan:!0,gridRowStart:!0,gridColumn:!0,gridColumnEnd:!0,gridColumnSpan:!0,gridColumnStart:!0,fontWeight:!0,lineClamp:!0,lineHeight:!0,opacity:!0,order:!0,orphans:!0,tabSize:!0,widows:!0,zIndex:!0,zoom:!0,fillOpacity:!0,floodOpacity:!0,stopOpacity:!0,strokeDasharray:!0,strokeDashoffset:!0,strokeMiterlimit:!0,strokeOpacity:!0,strokeWidth:!0},sk=["Webkit","ms","Moz","O"];Object.keys(so).forEach(function(t){sk.forEach(function(e){e=e+t.charAt(0).toUpperCase()+t.substring(1),so[e]=so[t]})});function ww(t,e,n){return e==null||typeof e=="boolean"||e===""?"":n||typeof e!="number"||e===0||so.hasOwnProperty(t)&&so[t]?(""+e).trim():e+"px"}function Ew(t,e){t=t.style;for(var n in e)if(e.hasOwnProperty(n)){var r=n.indexOf("--")===0,i=ww(n,e[n],r);n==="float"&&(n="cssFloat"),r?t.setProperty(n,i):t[n]=i}}var ok=ge({menuitem:!0},{area:!0,base:!0,br:!0,col:!0,embed:!0,hr:!0,img:!0,input:!0,keygen:!0,link:!0,meta:!0,param:!0,source:!0,track:!0,wbr:!0});function Kh(t,e){if(e){if(ok[t]&&(e.children!=null||e.dangerouslySetInnerHTML!=null))throw Error(P(137,t));if(e.dangerouslySetInnerHTML!=null){if(e.children!=null)throw Error(P(60));if(typeof e.dangerouslySetInnerHTML!="object"||!("__html"in e.dangerouslySetInnerHTML))throw Error(P(61))}if(e.style!=null&&typeof e.style!="object")throw Error(P(62))}}function Gh(t,e){if(t.indexOf("-")===-1)return typeof e.is=="string";switch(t){case"annotation-xml":case"color-profile":case"font-face":case"font-face-src":case"font-face-uri":case"font-face-format":case"font-face-name":case"missing-glyph":return!1;default:return!0}}var Qh=null;function Up(t){return t=t.target||t.srcElement||window,t.correspondingUseElement&&(t=t.correspondingUseElement),t.nodeType===3?t.parentNode:t}var Yh=null,Wi=null,qi=null;function Iv(t){if(t=ya(t)){if(typeof Yh!="function")throw Error(P(280));var e=t.stateNode;e&&(e=vc(e),Yh(t.stateNode,t.type,e))}}function Tw(t){Wi?qi?qi.push(t):qi=[t]:Wi=t}function Iw(){if(Wi){var t=Wi,e=qi;if(qi=Wi=null,Iv(t),e)for(t=0;t<e.length;t++)Iv(e[t])}}function Sw(t,e){return t(e)}function Aw(){}var Ff=!1;function kw(t,e,n){if(Ff)return t(e,n);Ff=!0;try{return Sw(t,e,n)}finally{Ff=!1,(Wi!==null||qi!==null)&&(Aw(),Iw())}}function ko(t,e){var n=t.stateNode;if(n===null)return null;var r=vc(n);if(r===null)return null;n=r[e];e:switch(e){case"onClick":case"onClickCapture":case"onDoubleClick":case"onDoubleClickCapture":case"onMouseDown":case"onMouseDownCapture":case"onMouseMove":case"onMouseMoveCapture":case"onMouseUp":case"onMouseUpCapture":case"onMouseEnter":(r=!r.disabled)||(t=t.type,r=!(t==="button"||t==="input"||t==="select"||t==="textarea")),t=!r;break e;default:t=!1}if(t)return null;if(n&&typeof n!="function")throw Error(P(231,e,typeof n));return n}var Xh=!1;if(En)try{var Vs={};Object.defineProperty(Vs,"passive",{get:function(){Xh=!0}}),window.addEventListener("test",Vs,Vs),window.removeEventListener("test",Vs,Vs)}catch{Xh=!1}function ak(t,e,n,r,i,s,o,a,l){var u=Array.prototype.slice.call(arguments,3);try{e.apply(n,u)}catch(c){this.onError(c)}}var oo=!1,du=null,pu=!1,Jh=null,lk={onError:function(t){oo=!0,du=t}};function uk(t,e,n,r,i,s,o,a,l){oo=!1,du=null,ak.apply(lk,arguments)}function ck(t,e,n,r,i,s,o,a,l){if(uk.apply(this,arguments),oo){if(oo){var u=du;oo=!1,du=null}else throw Error(P(198));pu||(pu=!0,Jh=u)}}function gi(t){var e=t,n=t;if(t.alternate)for(;e.return;)e=e.return;else{t=e;do e=t,e.flags&4098&&(n=e.return),t=e.return;while(t)}return e.tag===3?n:null}function Pw(t){if(t.tag===13){var e=t.memoizedState;if(e===null&&(t=t.alternate,t!==null&&(e=t.memoizedState)),e!==null)return e.dehydrated}return null}function Sv(t){if(gi(t)!==t)throw Error(P(188))}function fk(t){var e=t.alternate;if(!e){if(e=gi(t),e===null)throw Error(P(188));return e!==t?null:t}for(var n=t,r=e;;){var i=n.return;if(i===null)break;var s=i.alternate;if(s===null){if(r=i.return,r!==null){n=r;continue}break}if(i.child===s.child){for(s=i.child;s;){if(s===n)return Sv(i),t;if(s===r)return Sv(i),e;s=s.sibling}throw Error(P(188))}if(n.return!==r.return)n=i,r=s;else{for(var o=!1,a=i.child;a;){if(a===n){o=!0,n=i,r=s;break}if(a===r){o=!0,r=i,n=s;break}a=a.sibling}if(!o){for(a=s.child;a;){if(a===n){o=!0,n=s,r=i;break}if(a===r){o=!0,r=s,n=i;break}a=a.sibling}if(!o)throw Error(P(189))}}if(n.alternate!==r)throw Error(P(190))}if(n.tag!==3)throw Error(P(188));return n.stateNode.current===n?t:e}function Cw(t){return t=fk(t),t!==null?Rw(t):null}function Rw(t){if(t.tag===5||t.tag===6)return t;for(t=t.child;t!==null;){var e=Rw(t);if(e!==null)return e;t=t.sibling}return null}var bw=It.unstable_scheduleCallback,Av=It.unstable_cancelCallback,hk=It.unstable_shouldYield,dk=It.unstable_requestPaint,Ie=It.unstable_now,pk=It.unstable_getCurrentPriorityLevel,jp=It.unstable_ImmediatePriority,xw=It.unstable_UserBlockingPriority,mu=It.unstable_NormalPriority,mk=It.unstable_LowPriority,Nw=It.unstable_IdlePriority,dc=null,nn=null;function gk(t){if(nn&&typeof nn.onCommitFiberRoot=="function")try{nn.onCommitFiberRoot(dc,t,void 0,(t.current.flags&128)===128)}catch{}}var Ut=Math.clz32?Math.clz32:_k,vk=Math.log,yk=Math.LN2;function _k(t){return t>>>=0,t===0?32:31-(vk(t)/yk|0)|0}var al=64,ll=4194304;function Qs(t){switch(t&-t){case 1:return 1;case 2:return 2;case 4:return 4;case 8:return 8;case 16:return 16;case 32:return 32;case 64:case 128:case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:return t&4194240;case 4194304:case 8388608:case 16777216:case 33554432:case 67108864:return t&130023424;case 134217728:return 134217728;case 268435456:return 268435456;case 536870912:return 536870912;case 1073741824:return 1073741824;default:return t}}function gu(t,e){var n=t.pendingLanes;if(n===0)return 0;var r=0,i=t.suspendedLanes,s=t.pingedLanes,o=n&268435455;if(o!==0){var a=o&~i;a!==0?r=Qs(a):(s&=o,s!==0&&(r=Qs(s)))}else o=n&~i,o!==0?r=Qs(o):s!==0&&(r=Qs(s));if(r===0)return 0;if(e!==0&&e!==r&&!(e&i)&&(i=r&-r,s=e&-e,i>=s||i===16&&(s&4194240)!==0))return e;if(r&4&&(r|=n&16),e=t.entangledLanes,e!==0)for(t=t.entanglements,e&=r;0<e;)n=31-Ut(e),i=1<<n,r|=t[n],e&=~i;return r}function wk(t,e){switch(t){case 1:case 2:case 4:return e+250;case 8:case 16:case 32:case 64:case 128:case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:return e+5e3;case 4194304:case 8388608:case 16777216:case 33554432:case 67108864:return-1;case 134217728:case 268435456:case 536870912:case 1073741824:return-1;default:return-1}}function Ek(t,e){for(var n=t.suspendedLanes,r=t.pingedLanes,i=t.expirationTimes,s=t.pendingLanes;0<s;){var o=31-Ut(s),a=1<<o,l=i[o];l===-1?(!(a&n)||a&r)&&(i[o]=wk(a,e)):l<=e&&(t.expiredLanes|=a),s&=~a}}function Zh(t){return t=t.pendingLanes&-1073741825,t!==0?t:t&1073741824?1073741824:0}function Ow(){var t=al;return al<<=1,!(al&4194240)&&(al=64),t}function $f(t){for(var e=[],n=0;31>n;n++)e.push(t);return e}function ga(t,e,n){t.pendingLanes|=e,e!==536870912&&(t.suspendedLanes=0,t.pingedLanes=0),t=t.eventTimes,e=31-Ut(e),t[e]=n}function Tk(t,e){var n=t.pendingLanes&~e;t.pendingLanes=e,t.suspendedLanes=0,t.pingedLanes=0,t.expiredLanes&=e,t.mutableReadLanes&=e,t.entangledLanes&=e,e=t.entanglements;var r=t.eventTimes;for(t=t.expirationTimes;0<n;){var i=31-Ut(n),s=1<<i;e[i]=0,r[i]=-1,t[i]=-1,n&=~s}}function zp(t,e){var n=t.entangledLanes|=e;for(t=t.entanglements;n;){var r=31-Ut(n),i=1<<r;i&e|t[r]&e&&(t[r]|=e),n&=~i}}var ee=0;function Dw(t){return t&=-t,1<t?4<t?t&268435455?16:536870912:4:1}var Lw,Bp,Mw,Vw,Fw,ed=!1,ul=[],er=null,tr=null,nr=null,Po=new Map,Co=new Map,Bn=[],Ik="mousedown mouseup touchcancel touchend touchstart auxclick dblclick pointercancel pointerdown pointerup dragend dragstart drop compositionend compositionstart keydown keypress keyup input textInput copy cut paste click change contextmenu reset submit".split(" ");function kv(t,e){switch(t){case"focusin":case"focusout":er=null;break;case"dragenter":case"dragleave":tr=null;break;case"mouseover":case"mouseout":nr=null;break;case"pointerover":case"pointerout":Po.delete(e.pointerId);break;case"gotpointercapture":case"lostpointercapture":Co.delete(e.pointerId)}}function Fs(t,e,n,r,i,s){return t===null||t.nativeEvent!==s?(t={blockedOn:e,domEventName:n,eventSystemFlags:r,nativeEvent:s,targetContainers:[i]},e!==null&&(e=ya(e),e!==null&&Bp(e)),t):(t.eventSystemFlags|=r,e=t.targetContainers,i!==null&&e.indexOf(i)===-1&&e.push(i),t)}function Sk(t,e,n,r,i){switch(e){case"focusin":return er=Fs(er,t,e,n,r,i),!0;case"dragenter":return tr=Fs(tr,t,e,n,r,i),!0;case"mouseover":return nr=Fs(nr,t,e,n,r,i),!0;case"pointerover":var s=i.pointerId;return Po.set(s,Fs(Po.get(s)||null,t,e,n,r,i)),!0;case"gotpointercapture":return s=i.pointerId,Co.set(s,Fs(Co.get(s)||null,t,e,n,r,i)),!0}return!1}function $w(t){var e=zr(t.target);if(e!==null){var n=gi(e);if(n!==null){if(e=n.tag,e===13){if(e=Pw(n),e!==null){t.blockedOn=e,Fw(t.priority,function(){Mw(n)});return}}else if(e===3&&n.stateNode.current.memoizedState.isDehydrated){t.blockedOn=n.tag===3?n.stateNode.containerInfo:null;return}}}t.blockedOn=null}function Wl(t){if(t.blockedOn!==null)return!1;for(var e=t.targetContainers;0<e.length;){var n=td(t.domEventName,t.eventSystemFlags,e[0],t.nativeEvent);if(n===null){n=t.nativeEvent;var r=new n.constructor(n.type,n);Qh=r,n.target.dispatchEvent(r),Qh=null}else return e=ya(n),e!==null&&Bp(e),t.blockedOn=n,!1;e.shift()}return!0}function Pv(t,e,n){Wl(t)&&n.delete(e)}function Ak(){ed=!1,er!==null&&Wl(er)&&(er=null),tr!==null&&Wl(tr)&&(tr=null),nr!==null&&Wl(nr)&&(nr=null),Po.forEach(Pv),Co.forEach(Pv)}function $s(t,e){t.blockedOn===e&&(t.blockedOn=null,ed||(ed=!0,It.unstable_scheduleCallback(It.unstable_NormalPriority,Ak)))}function Ro(t){function e(i){return $s(i,t)}if(0<ul.length){$s(ul[0],t);for(var n=1;n<ul.length;n++){var r=ul[n];r.blockedOn===t&&(r.blockedOn=null)}}for(er!==null&&$s(er,t),tr!==null&&$s(tr,t),nr!==null&&$s(nr,t),Po.forEach(e),Co.forEach(e),n=0;n<Bn.length;n++)r=Bn[n],r.blockedOn===t&&(r.blockedOn=null);for(;0<Bn.length&&(n=Bn[0],n.blockedOn===null);)$w(n),n.blockedOn===null&&Bn.shift()}var Ki=xn.ReactCurrentBatchConfig,vu=!0;function kk(t,e,n,r){var i=ee,s=Ki.transition;Ki.transition=null;try{ee=1,Hp(t,e,n,r)}finally{ee=i,Ki.transition=s}}function Pk(t,e,n,r){var i=ee,s=Ki.transition;Ki.transition=null;try{ee=4,Hp(t,e,n,r)}finally{ee=i,Ki.transition=s}}function Hp(t,e,n,r){if(vu){var i=td(t,e,n,r);if(i===null)Qf(t,e,r,yu,n),kv(t,r);else if(Sk(i,t,e,n,r))r.stopPropagation();else if(kv(t,r),e&4&&-1<Ik.indexOf(t)){for(;i!==null;){var s=ya(i);if(s!==null&&Lw(s),s=td(t,e,n,r),s===null&&Qf(t,e,r,yu,n),s===i)break;i=s}i!==null&&r.stopPropagation()}else Qf(t,e,r,null,n)}}var yu=null;function td(t,e,n,r){if(yu=null,t=Up(r),t=zr(t),t!==null)if(e=gi(t),e===null)t=null;else if(n=e.tag,n===13){if(t=Pw(e),t!==null)return t;t=null}else if(n===3){if(e.stateNode.current.memoizedState.isDehydrated)return e.tag===3?e.stateNode.containerInfo:null;t=null}else e!==t&&(t=null);return yu=t,null}function Uw(t){switch(t){case"cancel":case"click":case"close":case"contextmenu":case"copy":case"cut":case"auxclick":case"dblclick":case"dragend":case"dragstart":case"drop":case"focusin":case"focusout":case"input":case"invalid":case"keydown":case"keypress":case"keyup":case"mousedown":case"mouseup":case"paste":case"pause":case"play":case"pointercancel":case"pointerdown":case"pointerup":case"ratechange":case"reset":case"resize":case"seeked":case"submit":case"touchcancel":case"touchend":case"touchstart":case"volumechange":case"change":case"selectionchange":case"textInput":case"compositionstart":case"compositionend":case"compositionupdate":case"beforeblur":case"afterblur":case"beforeinput":case"blur":case"fullscreenchange":case"focus":case"hashchange":case"popstate":case"select":case"selectstart":return 1;case"drag":case"dragenter":case"dragexit":case"dragleave":case"dragover":case"mousemove":case"mouseout":case"mouseover":case"pointermove":case"pointerout":case"pointerover":case"scroll":case"toggle":case"touchmove":case"wheel":case"mouseenter":case"mouseleave":case"pointerenter":case"pointerleave":return 4;case"message":switch(pk()){case jp:return 1;case xw:return 4;case mu:case mk:return 16;case Nw:return 536870912;default:return 16}default:return 16}}var Qn=null,Wp=null,ql=null;function jw(){if(ql)return ql;var t,e=Wp,n=e.length,r,i="value"in Qn?Qn.value:Qn.textContent,s=i.length;for(t=0;t<n&&e[t]===i[t];t++);var o=n-t;for(r=1;r<=o&&e[n-r]===i[s-r];r++);return ql=i.slice(t,1<r?1-r:void 0)}function Kl(t){var e=t.keyCode;return"charCode"in t?(t=t.charCode,t===0&&e===13&&(t=13)):t=e,t===10&&(t=13),32<=t||t===13?t:0}function cl(){return!0}function Cv(){return!1}function kt(t){function e(n,r,i,s,o){this._reactName=n,this._targetInst=i,this.type=r,this.nativeEvent=s,this.target=o,this.currentTarget=null;for(var a in t)t.hasOwnProperty(a)&&(n=t[a],this[a]=n?n(s):s[a]);return this.isDefaultPrevented=(s.defaultPrevented!=null?s.defaultPrevented:s.returnValue===!1)?cl:Cv,this.isPropagationStopped=Cv,this}return ge(e.prototype,{preventDefault:function(){this.defaultPrevented=!0;var n=this.nativeEvent;n&&(n.preventDefault?n.preventDefault():typeof n.returnValue!="unknown"&&(n.returnValue=!1),this.isDefaultPrevented=cl)},stopPropagation:function(){var n=this.nativeEvent;n&&(n.stopPropagation?n.stopPropagation():typeof n.cancelBubble!="unknown"&&(n.cancelBubble=!0),this.isPropagationStopped=cl)},persist:function(){},isPersistent:cl}),e}var Es={eventPhase:0,bubbles:0,cancelable:0,timeStamp:function(t){return t.timeStamp||Date.now()},defaultPrevented:0,isTrusted:0},qp=kt(Es),va=ge({},Es,{view:0,detail:0}),Ck=kt(va),Uf,jf,Us,pc=ge({},va,{screenX:0,screenY:0,clientX:0,clientY:0,pageX:0,pageY:0,ctrlKey:0,shiftKey:0,altKey:0,metaKey:0,getModifierState:Kp,button:0,buttons:0,relatedTarget:function(t){return t.relatedTarget===void 0?t.fromElement===t.srcElement?t.toElement:t.fromElement:t.relatedTarget},movementX:function(t){return"movementX"in t?t.movementX:(t!==Us&&(Us&&t.type==="mousemove"?(Uf=t.screenX-Us.screenX,jf=t.screenY-Us.screenY):jf=Uf=0,Us=t),Uf)},movementY:function(t){return"movementY"in t?t.movementY:jf}}),Rv=kt(pc),Rk=ge({},pc,{dataTransfer:0}),bk=kt(Rk),xk=ge({},va,{relatedTarget:0}),zf=kt(xk),Nk=ge({},Es,{animationName:0,elapsedTime:0,pseudoElement:0}),Ok=kt(Nk),Dk=ge({},Es,{clipboardData:function(t){return"clipboardData"in t?t.clipboardData:window.clipboardData}}),Lk=kt(Dk),Mk=ge({},Es,{data:0}),bv=kt(Mk),Vk={Esc:"Escape",Spacebar:" ",Left:"ArrowLeft",Up:"ArrowUp",Right:"ArrowRight",Down:"ArrowDown",Del:"Delete",Win:"OS",Menu:"ContextMenu",Apps:"ContextMenu",Scroll:"ScrollLock",MozPrintableKey:"Unidentified"},Fk={8:"Backspace",9:"Tab",12:"Clear",13:"Enter",16:"Shift",17:"Control",18:"Alt",19:"Pause",20:"CapsLock",27:"Escape",32:" ",33:"PageUp",34:"PageDown",35:"End",36:"Home",37:"ArrowLeft",38:"ArrowUp",39:"ArrowRight",40:"ArrowDown",45:"Insert",46:"Delete",112:"F1",113:"F2",114:"F3",115:"F4",116:"F5",117:"F6",118:"F7",119:"F8",120:"F9",121:"F10",122:"F11",123:"F12",144:"NumLock",145:"ScrollLock",224:"Meta"},$k={Alt:"altKey",Control:"ctrlKey",Meta:"metaKey",Shift:"shiftKey"};function Uk(t){var e=this.nativeEvent;return e.getModifierState?e.getModifierState(t):(t=$k[t])?!!e[t]:!1}function Kp(){return Uk}var jk=ge({},va,{key:function(t){if(t.key){var e=Vk[t.key]||t.key;if(e!=="Unidentified")return e}return t.type==="keypress"?(t=Kl(t),t===13?"Enter":String.fromCharCode(t)):t.type==="keydown"||t.type==="keyup"?Fk[t.keyCode]||"Unidentified":""},code:0,location:0,ctrlKey:0,shiftKey:0,altKey:0,metaKey:0,repeat:0,locale:0,getModifierState:Kp,charCode:function(t){return t.type==="keypress"?Kl(t):0},keyCode:function(t){return t.type==="keydown"||t.type==="keyup"?t.keyCode:0},which:function(t){return t.type==="keypress"?Kl(t):t.type==="keydown"||t.type==="keyup"?t.keyCode:0}}),zk=kt(jk),Bk=ge({},pc,{pointerId:0,width:0,height:0,pressure:0,tangentialPressure:0,tiltX:0,tiltY:0,twist:0,pointerType:0,isPrimary:0}),xv=kt(Bk),Hk=ge({},va,{touches:0,targetTouches:0,changedTouches:0,altKey:0,metaKey:0,ctrlKey:0,shiftKey:0,getModifierState:Kp}),Wk=kt(Hk),qk=ge({},Es,{propertyName:0,elapsedTime:0,pseudoElement:0}),Kk=kt(qk),Gk=ge({},pc,{deltaX:function(t){return"deltaX"in t?t.deltaX:"wheelDeltaX"in t?-t.wheelDeltaX:0},deltaY:function(t){return"deltaY"in t?t.deltaY:"wheelDeltaY"in t?-t.wheelDeltaY:"wheelDelta"in t?-t.wheelDelta:0},deltaZ:0,deltaMode:0}),Qk=kt(Gk),Yk=[9,13,27,32],Gp=En&&"CompositionEvent"in window,ao=null;En&&"documentMode"in document&&(ao=document.documentMode);var Xk=En&&"TextEvent"in window&&!ao,zw=En&&(!Gp||ao&&8<ao&&11>=ao),Nv=" ",Ov=!1;function Bw(t,e){switch(t){case"keyup":return Yk.indexOf(e.keyCode)!==-1;case"keydown":return e.keyCode!==229;case"keypress":case"mousedown":case"focusout":return!0;default:return!1}}function Hw(t){return t=t.detail,typeof t=="object"&&"data"in t?t.data:null}var Ri=!1;function Jk(t,e){switch(t){case"compositionend":return Hw(e);case"keypress":return e.which!==32?null:(Ov=!0,Nv);case"textInput":return t=e.data,t===Nv&&Ov?null:t;default:return null}}function Zk(t,e){if(Ri)return t==="compositionend"||!Gp&&Bw(t,e)?(t=jw(),ql=Wp=Qn=null,Ri=!1,t):null;switch(t){case"paste":return null;case"keypress":if(!(e.ctrlKey||e.altKey||e.metaKey)||e.ctrlKey&&e.altKey){if(e.char&&1<e.char.length)return e.char;if(e.which)return String.fromCharCode(e.which)}return null;case"compositionend":return zw&&e.locale!=="ko"?null:e.data;default:return null}}var eP={color:!0,date:!0,datetime:!0,"datetime-local":!0,email:!0,month:!0,number:!0,password:!0,range:!0,search:!0,tel:!0,text:!0,time:!0,url:!0,week:!0};function Dv(t){var e=t&&t.nodeName&&t.nodeName.toLowerCase();return e==="input"?!!eP[t.type]:e==="textarea"}function Ww(t,e,n,r){Tw(r),e=_u(e,"onChange"),0<e.length&&(n=new qp("onChange","change",null,n,r),t.push({event:n,listeners:e}))}var lo=null,bo=null;function tP(t){n1(t,0)}function mc(t){var e=Ni(t);if(mw(e))return t}function nP(t,e){if(t==="change")return e}var qw=!1;if(En){var Bf;if(En){var Hf="oninput"in document;if(!Hf){var Lv=document.createElement("div");Lv.setAttribute("oninput","return;"),Hf=typeof Lv.oninput=="function"}Bf=Hf}else Bf=!1;qw=Bf&&(!document.documentMode||9<document.documentMode)}function Mv(){lo&&(lo.detachEvent("onpropertychange",Kw),bo=lo=null)}function Kw(t){if(t.propertyName==="value"&&mc(bo)){var e=[];Ww(e,bo,t,Up(t)),kw(tP,e)}}function rP(t,e,n){t==="focusin"?(Mv(),lo=e,bo=n,lo.attachEvent("onpropertychange",Kw)):t==="focusout"&&Mv()}function iP(t){if(t==="selectionchange"||t==="keyup"||t==="keydown")return mc(bo)}function sP(t,e){if(t==="click")return mc(e)}function oP(t,e){if(t==="input"||t==="change")return mc(e)}function aP(t,e){return t===e&&(t!==0||1/t===1/e)||t!==t&&e!==e}var Ht=typeof Object.is=="function"?Object.is:aP;function xo(t,e){if(Ht(t,e))return!0;if(typeof t!="object"||t===null||typeof e!="object"||e===null)return!1;var n=Object.keys(t),r=Object.keys(e);if(n.length!==r.length)return!1;for(r=0;r<n.length;r++){var i=n[r];if(!Vh.call(e,i)||!Ht(t[i],e[i]))return!1}return!0}function Vv(t){for(;t&&t.firstChild;)t=t.firstChild;return t}function Fv(t,e){var n=Vv(t);t=0;for(var r;n;){if(n.nodeType===3){if(r=t+n.textContent.length,t<=e&&r>=e)return{node:n,offset:e-t};t=r}e:{for(;n;){if(n.nextSibling){n=n.nextSibling;break e}n=n.parentNode}n=void 0}n=Vv(n)}}function Gw(t,e){return t&&e?t===e?!0:t&&t.nodeType===3?!1:e&&e.nodeType===3?Gw(t,e.parentNode):"contains"in t?t.contains(e):t.compareDocumentPosition?!!(t.compareDocumentPosition(e)&16):!1:!1}function Qw(){for(var t=window,e=hu();e instanceof t.HTMLIFrameElement;){try{var n=typeof e.contentWindow.location.href=="string"}catch{n=!1}if(n)t=e.contentWindow;else break;e=hu(t.document)}return e}function Qp(t){var e=t&&t.nodeName&&t.nodeName.toLowerCase();return e&&(e==="input"&&(t.type==="text"||t.type==="search"||t.type==="tel"||t.type==="url"||t.type==="password")||e==="textarea"||t.contentEditable==="true")}function lP(t){var e=Qw(),n=t.focusedElem,r=t.selectionRange;if(e!==n&&n&&n.ownerDocument&&Gw(n.ownerDocument.documentElement,n)){if(r!==null&&Qp(n)){if(e=r.start,t=r.end,t===void 0&&(t=e),"selectionStart"in n)n.selectionStart=e,n.selectionEnd=Math.min(t,n.value.length);else if(t=(e=n.ownerDocument||document)&&e.defaultView||window,t.getSelection){t=t.getSelection();var i=n.textContent.length,s=Math.min(r.start,i);r=r.end===void 0?s:Math.min(r.end,i),!t.extend&&s>r&&(i=r,r=s,s=i),i=Fv(n,s);var o=Fv(n,r);i&&o&&(t.rangeCount!==1||t.anchorNode!==i.node||t.anchorOffset!==i.offset||t.focusNode!==o.node||t.focusOffset!==o.offset)&&(e=e.createRange(),e.setStart(i.node,i.offset),t.removeAllRanges(),s>r?(t.addRange(e),t.extend(o.node,o.offset)):(e.setEnd(o.node,o.offset),t.addRange(e)))}}for(e=[],t=n;t=t.parentNode;)t.nodeType===1&&e.push({element:t,left:t.scrollLeft,top:t.scrollTop});for(typeof n.focus=="function"&&n.focus(),n=0;n<e.length;n++)t=e[n],t.element.scrollLeft=t.left,t.element.scrollTop=t.top}}var uP=En&&"documentMode"in document&&11>=document.documentMode,bi=null,nd=null,uo=null,rd=!1;function $v(t,e,n){var r=n.window===n?n.document:n.nodeType===9?n:n.ownerDocument;rd||bi==null||bi!==hu(r)||(r=bi,"selectionStart"in r&&Qp(r)?r={start:r.selectionStart,end:r.selectionEnd}:(r=(r.ownerDocument&&r.ownerDocument.defaultView||window).getSelection(),r={anchorNode:r.anchorNode,anchorOffset:r.anchorOffset,focusNode:r.focusNode,focusOffset:r.focusOffset}),uo&&xo(uo,r)||(uo=r,r=_u(nd,"onSelect"),0<r.length&&(e=new qp("onSelect","select",null,e,n),t.push({event:e,listeners:r}),e.target=bi)))}function fl(t,e){var n={};return n[t.toLowerCase()]=e.toLowerCase(),n["Webkit"+t]="webkit"+e,n["Moz"+t]="moz"+e,n}var xi={animationend:fl("Animation","AnimationEnd"),animationiteration:fl("Animation","AnimationIteration"),animationstart:fl("Animation","AnimationStart"),transitionend:fl("Transition","TransitionEnd")},Wf={},Yw={};En&&(Yw=document.createElement("div").style,"AnimationEvent"in window||(delete xi.animationend.animation,delete xi.animationiteration.animation,delete xi.animationstart.animation),"TransitionEvent"in window||delete xi.transitionend.transition);function gc(t){if(Wf[t])return Wf[t];if(!xi[t])return t;var e=xi[t],n;for(n in e)if(e.hasOwnProperty(n)&&n in Yw)return Wf[t]=e[n];return t}var Xw=gc("animationend"),Jw=gc("animationiteration"),Zw=gc("animationstart"),e1=gc("transitionend"),t1=new Map,Uv="abort auxClick cancel canPlay canPlayThrough click close contextMenu copy cut drag dragEnd dragEnter dragExit dragLeave dragOver dragStart drop durationChange emptied encrypted ended error gotPointerCapture input invalid keyDown keyPress keyUp load loadedData loadedMetadata loadStart lostPointerCapture mouseDown mouseMove mouseOut mouseOver mouseUp paste pause play playing pointerCancel pointerDown pointerMove pointerOut pointerOver pointerUp progress rateChange reset resize seeked seeking stalled submit suspend timeUpdate touchCancel touchEnd touchStart volumeChange scroll toggle touchMove waiting wheel".split(" ");function Ir(t,e){t1.set(t,e),mi(e,[t])}for(var qf=0;qf<Uv.length;qf++){var Kf=Uv[qf],cP=Kf.toLowerCase(),fP=Kf[0].toUpperCase()+Kf.slice(1);Ir(cP,"on"+fP)}Ir(Xw,"onAnimationEnd");Ir(Jw,"onAnimationIteration");Ir(Zw,"onAnimationStart");Ir("dblclick","onDoubleClick");Ir("focusin","onFocus");Ir("focusout","onBlur");Ir(e1,"onTransitionEnd");ns("onMouseEnter",["mouseout","mouseover"]);ns("onMouseLeave",["mouseout","mouseover"]);ns("onPointerEnter",["pointerout","pointerover"]);ns("onPointerLeave",["pointerout","pointerover"]);mi("onChange","change click focusin focusout input keydown keyup selectionchange".split(" "));mi("onSelect","focusout contextmenu dragend focusin keydown keyup mousedown mouseup selectionchange".split(" "));mi("onBeforeInput",["compositionend","keypress","textInput","paste"]);mi("onCompositionEnd","compositionend focusout keydown keypress keyup mousedown".split(" "));mi("onCompositionStart","compositionstart focusout keydown keypress keyup mousedown".split(" "));mi("onCompositionUpdate","compositionupdate focusout keydown keypress keyup mousedown".split(" "));var Ys="abort canplay canplaythrough durationchange emptied encrypted ended error loadeddata loadedmetadata loadstart pause play playing progress ratechange resize seeked seeking stalled suspend timeupdate volumechange waiting".split(" "),hP=new Set("cancel close invalid load scroll toggle".split(" ").concat(Ys));function jv(t,e,n){var r=t.type||"unknown-event";t.currentTarget=n,ck(r,e,void 0,t),t.currentTarget=null}function n1(t,e){e=(e&4)!==0;for(var n=0;n<t.length;n++){var r=t[n],i=r.event;r=r.listeners;e:{var s=void 0;if(e)for(var o=r.length-1;0<=o;o--){var a=r[o],l=a.instance,u=a.currentTarget;if(a=a.listener,l!==s&&i.isPropagationStopped())break e;jv(i,a,u),s=l}else for(o=0;o<r.length;o++){if(a=r[o],l=a.instance,u=a.currentTarget,a=a.listener,l!==s&&i.isPropagationStopped())break e;jv(i,a,u),s=l}}}if(pu)throw t=Jh,pu=!1,Jh=null,t}function ie(t,e){var n=e[ld];n===void 0&&(n=e[ld]=new Set);var r=t+"__bubble";n.has(r)||(r1(e,t,2,!1),n.add(r))}function Gf(t,e,n){var r=0;e&&(r|=4),r1(n,t,r,e)}var hl="_reactListening"+Math.random().toString(36).slice(2);function No(t){if(!t[hl]){t[hl]=!0,cw.forEach(function(n){n!=="selectionchange"&&(hP.has(n)||Gf(n,!1,t),Gf(n,!0,t))});var e=t.nodeType===9?t:t.ownerDocument;e===null||e[hl]||(e[hl]=!0,Gf("selectionchange",!1,e))}}function r1(t,e,n,r){switch(Uw(e)){case 1:var i=kk;break;case 4:i=Pk;break;default:i=Hp}n=i.bind(null,e,n,t),i=void 0,!Xh||e!=="touchstart"&&e!=="touchmove"&&e!=="wheel"||(i=!0),r?i!==void 0?t.addEventListener(e,n,{capture:!0,passive:i}):t.addEventListener(e,n,!0):i!==void 0?t.addEventListener(e,n,{passive:i}):t.addEventListener(e,n,!1)}function Qf(t,e,n,r,i){var s=r;if(!(e&1)&&!(e&2)&&r!==null)e:for(;;){if(r===null)return;var o=r.tag;if(o===3||o===4){var a=r.stateNode.containerInfo;if(a===i||a.nodeType===8&&a.parentNode===i)break;if(o===4)for(o=r.return;o!==null;){var l=o.tag;if((l===3||l===4)&&(l=o.stateNode.containerInfo,l===i||l.nodeType===8&&l.parentNode===i))return;o=o.return}for(;a!==null;){if(o=zr(a),o===null)return;if(l=o.tag,l===5||l===6){r=s=o;continue e}a=a.parentNode}}r=r.return}kw(function(){var u=s,c=Up(n),f=[];e:{var h=t1.get(t);if(h!==void 0){var p=qp,y=t;switch(t){case"keypress":if(Kl(n)===0)break e;case"keydown":case"keyup":p=zk;break;case"focusin":y="focus",p=zf;break;case"focusout":y="blur",p=zf;break;case"beforeblur":case"afterblur":p=zf;break;case"click":if(n.button===2)break e;case"auxclick":case"dblclick":case"mousedown":case"mousemove":case"mouseup":case"mouseout":case"mouseover":case"contextmenu":p=Rv;break;case"drag":case"dragend":case"dragenter":case"dragexit":case"dragleave":case"dragover":case"dragstart":case"drop":p=bk;break;case"touchcancel":case"touchend":case"touchmove":case"touchstart":p=Wk;break;case Xw:case Jw:case Zw:p=Ok;break;case e1:p=Kk;break;case"scroll":p=Ck;break;case"wheel":p=Qk;break;case"copy":case"cut":case"paste":p=Lk;break;case"gotpointercapture":case"lostpointercapture":case"pointercancel":case"pointerdown":case"pointermove":case"pointerout":case"pointerover":case"pointerup":p=xv}var _=(e&4)!==0,w=!_&&t==="scroll",m=_?h!==null?h+"Capture":null:h;_=[];for(var d=u,g;d!==null;){g=d;var E=g.stateNode;if(g.tag===5&&E!==null&&(g=E,m!==null&&(E=ko(d,m),E!=null&&_.push(Oo(d,E,g)))),w)break;d=d.return}0<_.length&&(h=new p(h,y,null,n,c),f.push({event:h,listeners:_}))}}if(!(e&7)){e:{if(h=t==="mouseover"||t==="pointerover",p=t==="mouseout"||t==="pointerout",h&&n!==Qh&&(y=n.relatedTarget||n.fromElement)&&(zr(y)||y[Tn]))break e;if((p||h)&&(h=c.window===c?c:(h=c.ownerDocument)?h.defaultView||h.parentWindow:window,p?(y=n.relatedTarget||n.toElement,p=u,y=y?zr(y):null,y!==null&&(w=gi(y),y!==w||y.tag!==5&&y.tag!==6)&&(y=null)):(p=null,y=u),p!==y)){if(_=Rv,E="onMouseLeave",m="onMouseEnter",d="mouse",(t==="pointerout"||t==="pointerover")&&(_=xv,E="onPointerLeave",m="onPointerEnter",d="pointer"),w=p==null?h:Ni(p),g=y==null?h:Ni(y),h=new _(E,d+"leave",p,n,c),h.target=w,h.relatedTarget=g,E=null,zr(c)===u&&(_=new _(m,d+"enter",y,n,c),_.target=g,_.relatedTarget=w,E=_),w=E,p&&y)t:{for(_=p,m=y,d=0,g=_;g;g=Ei(g))d++;for(g=0,E=m;E;E=Ei(E))g++;for(;0<d-g;)_=Ei(_),d--;for(;0<g-d;)m=Ei(m),g--;for(;d--;){if(_===m||m!==null&&_===m.alternate)break t;_=Ei(_),m=Ei(m)}_=null}else _=null;p!==null&&zv(f,h,p,_,!1),y!==null&&w!==null&&zv(f,w,y,_,!0)}}e:{if(h=u?Ni(u):window,p=h.nodeName&&h.nodeName.toLowerCase(),p==="select"||p==="input"&&h.type==="file")var I=nP;else if(Dv(h))if(qw)I=oP;else{I=iP;var k=rP}else(p=h.nodeName)&&p.toLowerCase()==="input"&&(h.type==="checkbox"||h.type==="radio")&&(I=sP);if(I&&(I=I(t,u))){Ww(f,I,n,c);break e}k&&k(t,h,u),t==="focusout"&&(k=h._wrapperState)&&k.controlled&&h.type==="number"&&Hh(h,"number",h.value)}switch(k=u?Ni(u):window,t){case"focusin":(Dv(k)||k.contentEditable==="true")&&(bi=k,nd=u,uo=null);break;case"focusout":uo=nd=bi=null;break;case"mousedown":rd=!0;break;case"contextmenu":case"mouseup":case"dragend":rd=!1,$v(f,n,c);break;case"selectionchange":if(uP)break;case"keydown":case"keyup":$v(f,n,c)}var C;if(Gp)e:{switch(t){case"compositionstart":var N="onCompositionStart";break e;case"compositionend":N="onCompositionEnd";break e;case"compositionupdate":N="onCompositionUpdate";break e}N=void 0}else Ri?Bw(t,n)&&(N="onCompositionEnd"):t==="keydown"&&n.keyCode===229&&(N="onCompositionStart");N&&(zw&&n.locale!=="ko"&&(Ri||N!=="onCompositionStart"?N==="onCompositionEnd"&&Ri&&(C=jw()):(Qn=c,Wp="value"in Qn?Qn.value:Qn.textContent,Ri=!0)),k=_u(u,N),0<k.length&&(N=new bv(N,t,null,n,c),f.push({event:N,listeners:k}),C?N.data=C:(C=Hw(n),C!==null&&(N.data=C)))),(C=Xk?Jk(t,n):Zk(t,n))&&(u=_u(u,"onBeforeInput"),0<u.length&&(c=new bv("onBeforeInput","beforeinput",null,n,c),f.push({event:c,listeners:u}),c.data=C))}n1(f,e)})}function Oo(t,e,n){return{instance:t,listener:e,currentTarget:n}}function _u(t,e){for(var n=e+"Capture",r=[];t!==null;){var i=t,s=i.stateNode;i.tag===5&&s!==null&&(i=s,s=ko(t,n),s!=null&&r.unshift(Oo(t,s,i)),s=ko(t,e),s!=null&&r.push(Oo(t,s,i))),t=t.return}return r}function Ei(t){if(t===null)return null;do t=t.return;while(t&&t.tag!==5);return t||null}function zv(t,e,n,r,i){for(var s=e._reactName,o=[];n!==null&&n!==r;){var a=n,l=a.alternate,u=a.stateNode;if(l!==null&&l===r)break;a.tag===5&&u!==null&&(a=u,i?(l=ko(n,s),l!=null&&o.unshift(Oo(n,l,a))):i||(l=ko(n,s),l!=null&&o.push(Oo(n,l,a)))),n=n.return}o.length!==0&&t.push({event:e,listeners:o})}var dP=/\r\n?/g,pP=/\u0000|\uFFFD/g;function Bv(t){return(typeof t=="string"?t:""+t).replace(dP,`
`).replace(pP,"")}function dl(t,e,n){if(e=Bv(e),Bv(t)!==e&&n)throw Error(P(425))}function wu(){}var id=null,sd=null;function od(t,e){return t==="textarea"||t==="noscript"||typeof e.children=="string"||typeof e.children=="number"||typeof e.dangerouslySetInnerHTML=="object"&&e.dangerouslySetInnerHTML!==null&&e.dangerouslySetInnerHTML.__html!=null}var ad=typeof setTimeout=="function"?setTimeout:void 0,mP=typeof clearTimeout=="function"?clearTimeout:void 0,Hv=typeof Promise=="function"?Promise:void 0,gP=typeof queueMicrotask=="function"?queueMicrotask:typeof Hv<"u"?function(t){return Hv.resolve(null).then(t).catch(vP)}:ad;function vP(t){setTimeout(function(){throw t})}function Yf(t,e){var n=e,r=0;do{var i=n.nextSibling;if(t.removeChild(n),i&&i.nodeType===8)if(n=i.data,n==="/$"){if(r===0){t.removeChild(i),Ro(e);return}r--}else n!=="$"&&n!=="$?"&&n!=="$!"||r++;n=i}while(n);Ro(e)}function rr(t){for(;t!=null;t=t.nextSibling){var e=t.nodeType;if(e===1||e===3)break;if(e===8){if(e=t.data,e==="$"||e==="$!"||e==="$?")break;if(e==="/$")return null}}return t}function Wv(t){t=t.previousSibling;for(var e=0;t;){if(t.nodeType===8){var n=t.data;if(n==="$"||n==="$!"||n==="$?"){if(e===0)return t;e--}else n==="/$"&&e++}t=t.previousSibling}return null}var Ts=Math.random().toString(36).slice(2),Xt="__reactFiber$"+Ts,Do="__reactProps$"+Ts,Tn="__reactContainer$"+Ts,ld="__reactEvents$"+Ts,yP="__reactListeners$"+Ts,_P="__reactHandles$"+Ts;function zr(t){var e=t[Xt];if(e)return e;for(var n=t.parentNode;n;){if(e=n[Tn]||n[Xt]){if(n=e.alternate,e.child!==null||n!==null&&n.child!==null)for(t=Wv(t);t!==null;){if(n=t[Xt])return n;t=Wv(t)}return e}t=n,n=t.parentNode}return null}function ya(t){return t=t[Xt]||t[Tn],!t||t.tag!==5&&t.tag!==6&&t.tag!==13&&t.tag!==3?null:t}function Ni(t){if(t.tag===5||t.tag===6)return t.stateNode;throw Error(P(33))}function vc(t){return t[Do]||null}var ud=[],Oi=-1;function Sr(t){return{current:t}}function le(t){0>Oi||(t.current=ud[Oi],ud[Oi]=null,Oi--)}function ne(t,e){Oi++,ud[Oi]=t.current,t.current=e}var pr={},it=Sr(pr),mt=Sr(!1),ti=pr;function rs(t,e){var n=t.type.contextTypes;if(!n)return pr;var r=t.stateNode;if(r&&r.__reactInternalMemoizedUnmaskedChildContext===e)return r.__reactInternalMemoizedMaskedChildContext;var i={},s;for(s in n)i[s]=e[s];return r&&(t=t.stateNode,t.__reactInternalMemoizedUnmaskedChildContext=e,t.__reactInternalMemoizedMaskedChildContext=i),i}function gt(t){return t=t.childContextTypes,t!=null}function Eu(){le(mt),le(it)}function qv(t,e,n){if(it.current!==pr)throw Error(P(168));ne(it,e),ne(mt,n)}function i1(t,e,n){var r=t.stateNode;if(e=e.childContextTypes,typeof r.getChildContext!="function")return n;r=r.getChildContext();for(var i in r)if(!(i in e))throw Error(P(108,rk(t)||"Unknown",i));return ge({},n,r)}function Tu(t){return t=(t=t.stateNode)&&t.__reactInternalMemoizedMergedChildContext||pr,ti=it.current,ne(it,t),ne(mt,mt.current),!0}function Kv(t,e,n){var r=t.stateNode;if(!r)throw Error(P(169));n?(t=i1(t,e,ti),r.__reactInternalMemoizedMergedChildContext=t,le(mt),le(it),ne(it,t)):le(mt),ne(mt,n)}var pn=null,yc=!1,Xf=!1;function s1(t){pn===null?pn=[t]:pn.push(t)}function wP(t){yc=!0,s1(t)}function Ar(){if(!Xf&&pn!==null){Xf=!0;var t=0,e=ee;try{var n=pn;for(ee=1;t<n.length;t++){var r=n[t];do r=r(!0);while(r!==null)}pn=null,yc=!1}catch(i){throw pn!==null&&(pn=pn.slice(t+1)),bw(jp,Ar),i}finally{ee=e,Xf=!1}}return null}var Di=[],Li=0,Iu=null,Su=0,Ct=[],Rt=0,ni=null,mn=1,gn="";function Fr(t,e){Di[Li++]=Su,Di[Li++]=Iu,Iu=t,Su=e}function o1(t,e,n){Ct[Rt++]=mn,Ct[Rt++]=gn,Ct[Rt++]=ni,ni=t;var r=mn;t=gn;var i=32-Ut(r)-1;r&=~(1<<i),n+=1;var s=32-Ut(e)+i;if(30<s){var o=i-i%5;s=(r&(1<<o)-1).toString(32),r>>=o,i-=o,mn=1<<32-Ut(e)+i|n<<i|r,gn=s+t}else mn=1<<s|n<<i|r,gn=t}function Yp(t){t.return!==null&&(Fr(t,1),o1(t,1,0))}function Xp(t){for(;t===Iu;)Iu=Di[--Li],Di[Li]=null,Su=Di[--Li],Di[Li]=null;for(;t===ni;)ni=Ct[--Rt],Ct[Rt]=null,gn=Ct[--Rt],Ct[Rt]=null,mn=Ct[--Rt],Ct[Rt]=null}var Et=null,_t=null,fe=!1,Ft=null;function a1(t,e){var n=xt(5,null,null,0);n.elementType="DELETED",n.stateNode=e,n.return=t,e=t.deletions,e===null?(t.deletions=[n],t.flags|=16):e.push(n)}function Gv(t,e){switch(t.tag){case 5:var n=t.type;return e=e.nodeType!==1||n.toLowerCase()!==e.nodeName.toLowerCase()?null:e,e!==null?(t.stateNode=e,Et=t,_t=rr(e.firstChild),!0):!1;case 6:return e=t.pendingProps===""||e.nodeType!==3?null:e,e!==null?(t.stateNode=e,Et=t,_t=null,!0):!1;case 13:return e=e.nodeType!==8?null:e,e!==null?(n=ni!==null?{id:mn,overflow:gn}:null,t.memoizedState={dehydrated:e,treeContext:n,retryLane:1073741824},n=xt(18,null,null,0),n.stateNode=e,n.return=t,t.child=n,Et=t,_t=null,!0):!1;default:return!1}}function cd(t){return(t.mode&1)!==0&&(t.flags&128)===0}function fd(t){if(fe){var e=_t;if(e){var n=e;if(!Gv(t,e)){if(cd(t))throw Error(P(418));e=rr(n.nextSibling);var r=Et;e&&Gv(t,e)?a1(r,n):(t.flags=t.flags&-4097|2,fe=!1,Et=t)}}else{if(cd(t))throw Error(P(418));t.flags=t.flags&-4097|2,fe=!1,Et=t}}}function Qv(t){for(t=t.return;t!==null&&t.tag!==5&&t.tag!==3&&t.tag!==13;)t=t.return;Et=t}function pl(t){if(t!==Et)return!1;if(!fe)return Qv(t),fe=!0,!1;var e;if((e=t.tag!==3)&&!(e=t.tag!==5)&&(e=t.type,e=e!=="head"&&e!=="body"&&!od(t.type,t.memoizedProps)),e&&(e=_t)){if(cd(t))throw l1(),Error(P(418));for(;e;)a1(t,e),e=rr(e.nextSibling)}if(Qv(t),t.tag===13){if(t=t.memoizedState,t=t!==null?t.dehydrated:null,!t)throw Error(P(317));e:{for(t=t.nextSibling,e=0;t;){if(t.nodeType===8){var n=t.data;if(n==="/$"){if(e===0){_t=rr(t.nextSibling);break e}e--}else n!=="$"&&n!=="$!"&&n!=="$?"||e++}t=t.nextSibling}_t=null}}else _t=Et?rr(t.stateNode.nextSibling):null;return!0}function l1(){for(var t=_t;t;)t=rr(t.nextSibling)}function is(){_t=Et=null,fe=!1}function Jp(t){Ft===null?Ft=[t]:Ft.push(t)}var EP=xn.ReactCurrentBatchConfig;function Mt(t,e){if(t&&t.defaultProps){e=ge({},e),t=t.defaultProps;for(var n in t)e[n]===void 0&&(e[n]=t[n]);return e}return e}var Au=Sr(null),ku=null,Mi=null,Zp=null;function em(){Zp=Mi=ku=null}function tm(t){var e=Au.current;le(Au),t._currentValue=e}function hd(t,e,n){for(;t!==null;){var r=t.alternate;if((t.childLanes&e)!==e?(t.childLanes|=e,r!==null&&(r.childLanes|=e)):r!==null&&(r.childLanes&e)!==e&&(r.childLanes|=e),t===n)break;t=t.return}}function Gi(t,e){ku=t,Zp=Mi=null,t=t.dependencies,t!==null&&t.firstContext!==null&&(t.lanes&e&&(pt=!0),t.firstContext=null)}function Ot(t){var e=t._currentValue;if(Zp!==t)if(t={context:t,memoizedValue:e,next:null},Mi===null){if(ku===null)throw Error(P(308));Mi=t,ku.dependencies={lanes:0,firstContext:t}}else Mi=Mi.next=t;return e}var Br=null;function nm(t){Br===null?Br=[t]:Br.push(t)}function u1(t,e,n,r){var i=e.interleaved;return i===null?(n.next=n,nm(e)):(n.next=i.next,i.next=n),e.interleaved=n,In(t,r)}function In(t,e){t.lanes|=e;var n=t.alternate;for(n!==null&&(n.lanes|=e),n=t,t=t.return;t!==null;)t.childLanes|=e,n=t.alternate,n!==null&&(n.childLanes|=e),n=t,t=t.return;return n.tag===3?n.stateNode:null}var zn=!1;function rm(t){t.updateQueue={baseState:t.memoizedState,firstBaseUpdate:null,lastBaseUpdate:null,shared:{pending:null,interleaved:null,lanes:0},effects:null}}function c1(t,e){t=t.updateQueue,e.updateQueue===t&&(e.updateQueue={baseState:t.baseState,firstBaseUpdate:t.firstBaseUpdate,lastBaseUpdate:t.lastBaseUpdate,shared:t.shared,effects:t.effects})}function wn(t,e){return{eventTime:t,lane:e,tag:0,payload:null,callback:null,next:null}}function ir(t,e,n){var r=t.updateQueue;if(r===null)return null;if(r=r.shared,J&2){var i=r.pending;return i===null?e.next=e:(e.next=i.next,i.next=e),r.pending=e,In(t,n)}return i=r.interleaved,i===null?(e.next=e,nm(r)):(e.next=i.next,i.next=e),r.interleaved=e,In(t,n)}function Gl(t,e,n){if(e=e.updateQueue,e!==null&&(e=e.shared,(n&4194240)!==0)){var r=e.lanes;r&=t.pendingLanes,n|=r,e.lanes=n,zp(t,n)}}function Yv(t,e){var n=t.updateQueue,r=t.alternate;if(r!==null&&(r=r.updateQueue,n===r)){var i=null,s=null;if(n=n.firstBaseUpdate,n!==null){do{var o={eventTime:n.eventTime,lane:n.lane,tag:n.tag,payload:n.payload,callback:n.callback,next:null};s===null?i=s=o:s=s.next=o,n=n.next}while(n!==null);s===null?i=s=e:s=s.next=e}else i=s=e;n={baseState:r.baseState,firstBaseUpdate:i,lastBaseUpdate:s,shared:r.shared,effects:r.effects},t.updateQueue=n;return}t=n.lastBaseUpdate,t===null?n.firstBaseUpdate=e:t.next=e,n.lastBaseUpdate=e}function Pu(t,e,n,r){var i=t.updateQueue;zn=!1;var s=i.firstBaseUpdate,o=i.lastBaseUpdate,a=i.shared.pending;if(a!==null){i.shared.pending=null;var l=a,u=l.next;l.next=null,o===null?s=u:o.next=u,o=l;var c=t.alternate;c!==null&&(c=c.updateQueue,a=c.lastBaseUpdate,a!==o&&(a===null?c.firstBaseUpdate=u:a.next=u,c.lastBaseUpdate=l))}if(s!==null){var f=i.baseState;o=0,c=u=l=null,a=s;do{var h=a.lane,p=a.eventTime;if((r&h)===h){c!==null&&(c=c.next={eventTime:p,lane:0,tag:a.tag,payload:a.payload,callback:a.callback,next:null});e:{var y=t,_=a;switch(h=e,p=n,_.tag){case 1:if(y=_.payload,typeof y=="function"){f=y.call(p,f,h);break e}f=y;break e;case 3:y.flags=y.flags&-65537|128;case 0:if(y=_.payload,h=typeof y=="function"?y.call(p,f,h):y,h==null)break e;f=ge({},f,h);break e;case 2:zn=!0}}a.callback!==null&&a.lane!==0&&(t.flags|=64,h=i.effects,h===null?i.effects=[a]:h.push(a))}else p={eventTime:p,lane:h,tag:a.tag,payload:a.payload,callback:a.callback,next:null},c===null?(u=c=p,l=f):c=c.next=p,o|=h;if(a=a.next,a===null){if(a=i.shared.pending,a===null)break;h=a,a=h.next,h.next=null,i.lastBaseUpdate=h,i.shared.pending=null}}while(!0);if(c===null&&(l=f),i.baseState=l,i.firstBaseUpdate=u,i.lastBaseUpdate=c,e=i.shared.interleaved,e!==null){i=e;do o|=i.lane,i=i.next;while(i!==e)}else s===null&&(i.shared.lanes=0);ii|=o,t.lanes=o,t.memoizedState=f}}function Xv(t,e,n){if(t=e.effects,e.effects=null,t!==null)for(e=0;e<t.length;e++){var r=t[e],i=r.callback;if(i!==null){if(r.callback=null,r=n,typeof i!="function")throw Error(P(191,i));i.call(r)}}}var f1=new uw.Component().refs;function dd(t,e,n,r){e=t.memoizedState,n=n(r,e),n=n==null?e:ge({},e,n),t.memoizedState=n,t.lanes===0&&(t.updateQueue.baseState=n)}var _c={isMounted:function(t){return(t=t._reactInternals)?gi(t)===t:!1},enqueueSetState:function(t,e,n){t=t._reactInternals;var r=lt(),i=or(t),s=wn(r,i);s.payload=e,n!=null&&(s.callback=n),e=ir(t,s,i),e!==null&&(jt(e,t,i,r),Gl(e,t,i))},enqueueReplaceState:function(t,e,n){t=t._reactInternals;var r=lt(),i=or(t),s=wn(r,i);s.tag=1,s.payload=e,n!=null&&(s.callback=n),e=ir(t,s,i),e!==null&&(jt(e,t,i,r),Gl(e,t,i))},enqueueForceUpdate:function(t,e){t=t._reactInternals;var n=lt(),r=or(t),i=wn(n,r);i.tag=2,e!=null&&(i.callback=e),e=ir(t,i,r),e!==null&&(jt(e,t,r,n),Gl(e,t,r))}};function Jv(t,e,n,r,i,s,o){return t=t.stateNode,typeof t.shouldComponentUpdate=="function"?t.shouldComponentUpdate(r,s,o):e.prototype&&e.prototype.isPureReactComponent?!xo(n,r)||!xo(i,s):!0}function h1(t,e,n){var r=!1,i=pr,s=e.contextType;return typeof s=="object"&&s!==null?s=Ot(s):(i=gt(e)?ti:it.current,r=e.contextTypes,s=(r=r!=null)?rs(t,i):pr),e=new e(n,s),t.memoizedState=e.state!==null&&e.state!==void 0?e.state:null,e.updater=_c,t.stateNode=e,e._reactInternals=t,r&&(t=t.stateNode,t.__reactInternalMemoizedUnmaskedChildContext=i,t.__reactInternalMemoizedMaskedChildContext=s),e}function Zv(t,e,n,r){t=e.state,typeof e.componentWillReceiveProps=="function"&&e.componentWillReceiveProps(n,r),typeof e.UNSAFE_componentWillReceiveProps=="function"&&e.UNSAFE_componentWillReceiveProps(n,r),e.state!==t&&_c.enqueueReplaceState(e,e.state,null)}function pd(t,e,n,r){var i=t.stateNode;i.props=n,i.state=t.memoizedState,i.refs=f1,rm(t);var s=e.contextType;typeof s=="object"&&s!==null?i.context=Ot(s):(s=gt(e)?ti:it.current,i.context=rs(t,s)),i.state=t.memoizedState,s=e.getDerivedStateFromProps,typeof s=="function"&&(dd(t,e,s,n),i.state=t.memoizedState),typeof e.getDerivedStateFromProps=="function"||typeof i.getSnapshotBeforeUpdate=="function"||typeof i.UNSAFE_componentWillMount!="function"&&typeof i.componentWillMount!="function"||(e=i.state,typeof i.componentWillMount=="function"&&i.componentWillMount(),typeof i.UNSAFE_componentWillMount=="function"&&i.UNSAFE_componentWillMount(),e!==i.state&&_c.enqueueReplaceState(i,i.state,null),Pu(t,n,i,r),i.state=t.memoizedState),typeof i.componentDidMount=="function"&&(t.flags|=4194308)}function js(t,e,n){if(t=n.ref,t!==null&&typeof t!="function"&&typeof t!="object"){if(n._owner){if(n=n._owner,n){if(n.tag!==1)throw Error(P(309));var r=n.stateNode}if(!r)throw Error(P(147,t));var i=r,s=""+t;return e!==null&&e.ref!==null&&typeof e.ref=="function"&&e.ref._stringRef===s?e.ref:(e=function(o){var a=i.refs;a===f1&&(a=i.refs={}),o===null?delete a[s]:a[s]=o},e._stringRef=s,e)}if(typeof t!="string")throw Error(P(284));if(!n._owner)throw Error(P(290,t))}return t}function ml(t,e){throw t=Object.prototype.toString.call(e),Error(P(31,t==="[object Object]"?"object with keys {"+Object.keys(e).join(", ")+"}":t))}function ey(t){var e=t._init;return e(t._payload)}function d1(t){function e(m,d){if(t){var g=m.deletions;g===null?(m.deletions=[d],m.flags|=16):g.push(d)}}function n(m,d){if(!t)return null;for(;d!==null;)e(m,d),d=d.sibling;return null}function r(m,d){for(m=new Map;d!==null;)d.key!==null?m.set(d.key,d):m.set(d.index,d),d=d.sibling;return m}function i(m,d){return m=ar(m,d),m.index=0,m.sibling=null,m}function s(m,d,g){return m.index=g,t?(g=m.alternate,g!==null?(g=g.index,g<d?(m.flags|=2,d):g):(m.flags|=2,d)):(m.flags|=1048576,d)}function o(m){return t&&m.alternate===null&&(m.flags|=2),m}function a(m,d,g,E){return d===null||d.tag!==6?(d=ih(g,m.mode,E),d.return=m,d):(d=i(d,g),d.return=m,d)}function l(m,d,g,E){var I=g.type;return I===Ci?c(m,d,g.props.children,E,g.key):d!==null&&(d.elementType===I||typeof I=="object"&&I!==null&&I.$$typeof===jn&&ey(I)===d.type)?(E=i(d,g.props),E.ref=js(m,d,g),E.return=m,E):(E=eu(g.type,g.key,g.props,null,m.mode,E),E.ref=js(m,d,g),E.return=m,E)}function u(m,d,g,E){return d===null||d.tag!==4||d.stateNode.containerInfo!==g.containerInfo||d.stateNode.implementation!==g.implementation?(d=sh(g,m.mode,E),d.return=m,d):(d=i(d,g.children||[]),d.return=m,d)}function c(m,d,g,E,I){return d===null||d.tag!==7?(d=Jr(g,m.mode,E,I),d.return=m,d):(d=i(d,g),d.return=m,d)}function f(m,d,g){if(typeof d=="string"&&d!==""||typeof d=="number")return d=ih(""+d,m.mode,g),d.return=m,d;if(typeof d=="object"&&d!==null){switch(d.$$typeof){case il:return g=eu(d.type,d.key,d.props,null,m.mode,g),g.ref=js(m,null,d),g.return=m,g;case Pi:return d=sh(d,m.mode,g),d.return=m,d;case jn:var E=d._init;return f(m,E(d._payload),g)}if(Gs(d)||Ms(d))return d=Jr(d,m.mode,g,null),d.return=m,d;ml(m,d)}return null}function h(m,d,g,E){var I=d!==null?d.key:null;if(typeof g=="string"&&g!==""||typeof g=="number")return I!==null?null:a(m,d,""+g,E);if(typeof g=="object"&&g!==null){switch(g.$$typeof){case il:return g.key===I?l(m,d,g,E):null;case Pi:return g.key===I?u(m,d,g,E):null;case jn:return I=g._init,h(m,d,I(g._payload),E)}if(Gs(g)||Ms(g))return I!==null?null:c(m,d,g,E,null);ml(m,g)}return null}function p(m,d,g,E,I){if(typeof E=="string"&&E!==""||typeof E=="number")return m=m.get(g)||null,a(d,m,""+E,I);if(typeof E=="object"&&E!==null){switch(E.$$typeof){case il:return m=m.get(E.key===null?g:E.key)||null,l(d,m,E,I);case Pi:return m=m.get(E.key===null?g:E.key)||null,u(d,m,E,I);case jn:var k=E._init;return p(m,d,g,k(E._payload),I)}if(Gs(E)||Ms(E))return m=m.get(g)||null,c(d,m,E,I,null);ml(d,E)}return null}function y(m,d,g,E){for(var I=null,k=null,C=d,N=d=0,B=null;C!==null&&N<g.length;N++){C.index>N?(B=C,C=null):B=C.sibling;var F=h(m,C,g[N],E);if(F===null){C===null&&(C=B);break}t&&C&&F.alternate===null&&e(m,C),d=s(F,d,N),k===null?I=F:k.sibling=F,k=F,C=B}if(N===g.length)return n(m,C),fe&&Fr(m,N),I;if(C===null){for(;N<g.length;N++)C=f(m,g[N],E),C!==null&&(d=s(C,d,N),k===null?I=C:k.sibling=C,k=C);return fe&&Fr(m,N),I}for(C=r(m,C);N<g.length;N++)B=p(C,m,N,g[N],E),B!==null&&(t&&B.alternate!==null&&C.delete(B.key===null?N:B.key),d=s(B,d,N),k===null?I=B:k.sibling=B,k=B);return t&&C.forEach(function(ft){return e(m,ft)}),fe&&Fr(m,N),I}function _(m,d,g,E){var I=Ms(g);if(typeof I!="function")throw Error(P(150));if(g=I.call(g),g==null)throw Error(P(151));for(var k=I=null,C=d,N=d=0,B=null,F=g.next();C!==null&&!F.done;N++,F=g.next()){C.index>N?(B=C,C=null):B=C.sibling;var ft=h(m,C,F.value,E);if(ft===null){C===null&&(C=B);break}t&&C&&ft.alternate===null&&e(m,C),d=s(ft,d,N),k===null?I=ft:k.sibling=ft,k=ft,C=B}if(F.done)return n(m,C),fe&&Fr(m,N),I;if(C===null){for(;!F.done;N++,F=g.next())F=f(m,F.value,E),F!==null&&(d=s(F,d,N),k===null?I=F:k.sibling=F,k=F);return fe&&Fr(m,N),I}for(C=r(m,C);!F.done;N++,F=g.next())F=p(C,m,N,F.value,E),F!==null&&(t&&F.alternate!==null&&C.delete(F.key===null?N:F.key),d=s(F,d,N),k===null?I=F:k.sibling=F,k=F);return t&&C.forEach(function(Ln){return e(m,Ln)}),fe&&Fr(m,N),I}function w(m,d,g,E){if(typeof g=="object"&&g!==null&&g.type===Ci&&g.key===null&&(g=g.props.children),typeof g=="object"&&g!==null){switch(g.$$typeof){case il:e:{for(var I=g.key,k=d;k!==null;){if(k.key===I){if(I=g.type,I===Ci){if(k.tag===7){n(m,k.sibling),d=i(k,g.props.children),d.return=m,m=d;break e}}else if(k.elementType===I||typeof I=="object"&&I!==null&&I.$$typeof===jn&&ey(I)===k.type){n(m,k.sibling),d=i(k,g.props),d.ref=js(m,k,g),d.return=m,m=d;break e}n(m,k);break}else e(m,k);k=k.sibling}g.type===Ci?(d=Jr(g.props.children,m.mode,E,g.key),d.return=m,m=d):(E=eu(g.type,g.key,g.props,null,m.mode,E),E.ref=js(m,d,g),E.return=m,m=E)}return o(m);case Pi:e:{for(k=g.key;d!==null;){if(d.key===k)if(d.tag===4&&d.stateNode.containerInfo===g.containerInfo&&d.stateNode.implementation===g.implementation){n(m,d.sibling),d=i(d,g.children||[]),d.return=m,m=d;break e}else{n(m,d);break}else e(m,d);d=d.sibling}d=sh(g,m.mode,E),d.return=m,m=d}return o(m);case jn:return k=g._init,w(m,d,k(g._payload),E)}if(Gs(g))return y(m,d,g,E);if(Ms(g))return _(m,d,g,E);ml(m,g)}return typeof g=="string"&&g!==""||typeof g=="number"?(g=""+g,d!==null&&d.tag===6?(n(m,d.sibling),d=i(d,g),d.return=m,m=d):(n(m,d),d=ih(g,m.mode,E),d.return=m,m=d),o(m)):n(m,d)}return w}var ss=d1(!0),p1=d1(!1),_a={},rn=Sr(_a),Lo=Sr(_a),Mo=Sr(_a);function Hr(t){if(t===_a)throw Error(P(174));return t}function im(t,e){switch(ne(Mo,e),ne(Lo,t),ne(rn,_a),t=e.nodeType,t){case 9:case 11:e=(e=e.documentElement)?e.namespaceURI:qh(null,"");break;default:t=t===8?e.parentNode:e,e=t.namespaceURI||null,t=t.tagName,e=qh(e,t)}le(rn),ne(rn,e)}function os(){le(rn),le(Lo),le(Mo)}function m1(t){Hr(Mo.current);var e=Hr(rn.current),n=qh(e,t.type);e!==n&&(ne(Lo,t),ne(rn,n))}function sm(t){Lo.current===t&&(le(rn),le(Lo))}var pe=Sr(0);function Cu(t){for(var e=t;e!==null;){if(e.tag===13){var n=e.memoizedState;if(n!==null&&(n=n.dehydrated,n===null||n.data==="$?"||n.data==="$!"))return e}else if(e.tag===19&&e.memoizedProps.revealOrder!==void 0){if(e.flags&128)return e}else if(e.child!==null){e.child.return=e,e=e.child;continue}if(e===t)break;for(;e.sibling===null;){if(e.return===null||e.return===t)return null;e=e.return}e.sibling.return=e.return,e=e.sibling}return null}var Jf=[];function om(){for(var t=0;t<Jf.length;t++)Jf[t]._workInProgressVersionPrimary=null;Jf.length=0}var Ql=xn.ReactCurrentDispatcher,Zf=xn.ReactCurrentBatchConfig,ri=0,me=null,be=null,Ve=null,Ru=!1,co=!1,Vo=0,TP=0;function Qe(){throw Error(P(321))}function am(t,e){if(e===null)return!1;for(var n=0;n<e.length&&n<t.length;n++)if(!Ht(t[n],e[n]))return!1;return!0}function lm(t,e,n,r,i,s){if(ri=s,me=e,e.memoizedState=null,e.updateQueue=null,e.lanes=0,Ql.current=t===null||t.memoizedState===null?kP:PP,t=n(r,i),co){s=0;do{if(co=!1,Vo=0,25<=s)throw Error(P(301));s+=1,Ve=be=null,e.updateQueue=null,Ql.current=CP,t=n(r,i)}while(co)}if(Ql.current=bu,e=be!==null&&be.next!==null,ri=0,Ve=be=me=null,Ru=!1,e)throw Error(P(300));return t}function um(){var t=Vo!==0;return Vo=0,t}function Qt(){var t={memoizedState:null,baseState:null,baseQueue:null,queue:null,next:null};return Ve===null?me.memoizedState=Ve=t:Ve=Ve.next=t,Ve}function Dt(){if(be===null){var t=me.alternate;t=t!==null?t.memoizedState:null}else t=be.next;var e=Ve===null?me.memoizedState:Ve.next;if(e!==null)Ve=e,be=t;else{if(t===null)throw Error(P(310));be=t,t={memoizedState:be.memoizedState,baseState:be.baseState,baseQueue:be.baseQueue,queue:be.queue,next:null},Ve===null?me.memoizedState=Ve=t:Ve=Ve.next=t}return Ve}function Fo(t,e){return typeof e=="function"?e(t):e}function eh(t){var e=Dt(),n=e.queue;if(n===null)throw Error(P(311));n.lastRenderedReducer=t;var r=be,i=r.baseQueue,s=n.pending;if(s!==null){if(i!==null){var o=i.next;i.next=s.next,s.next=o}r.baseQueue=i=s,n.pending=null}if(i!==null){s=i.next,r=r.baseState;var a=o=null,l=null,u=s;do{var c=u.lane;if((ri&c)===c)l!==null&&(l=l.next={lane:0,action:u.action,hasEagerState:u.hasEagerState,eagerState:u.eagerState,next:null}),r=u.hasEagerState?u.eagerState:t(r,u.action);else{var f={lane:c,action:u.action,hasEagerState:u.hasEagerState,eagerState:u.eagerState,next:null};l===null?(a=l=f,o=r):l=l.next=f,me.lanes|=c,ii|=c}u=u.next}while(u!==null&&u!==s);l===null?o=r:l.next=a,Ht(r,e.memoizedState)||(pt=!0),e.memoizedState=r,e.baseState=o,e.baseQueue=l,n.lastRenderedState=r}if(t=n.interleaved,t!==null){i=t;do s=i.lane,me.lanes|=s,ii|=s,i=i.next;while(i!==t)}else i===null&&(n.lanes=0);return[e.memoizedState,n.dispatch]}function th(t){var e=Dt(),n=e.queue;if(n===null)throw Error(P(311));n.lastRenderedReducer=t;var r=n.dispatch,i=n.pending,s=e.memoizedState;if(i!==null){n.pending=null;var o=i=i.next;do s=t(s,o.action),o=o.next;while(o!==i);Ht(s,e.memoizedState)||(pt=!0),e.memoizedState=s,e.baseQueue===null&&(e.baseState=s),n.lastRenderedState=s}return[s,r]}function g1(){}function v1(t,e){var n=me,r=Dt(),i=e(),s=!Ht(r.memoizedState,i);if(s&&(r.memoizedState=i,pt=!0),r=r.queue,cm(w1.bind(null,n,r,t),[t]),r.getSnapshot!==e||s||Ve!==null&&Ve.memoizedState.tag&1){if(n.flags|=2048,$o(9,_1.bind(null,n,r,i,e),void 0,null),Fe===null)throw Error(P(349));ri&30||y1(n,e,i)}return i}function y1(t,e,n){t.flags|=16384,t={getSnapshot:e,value:n},e=me.updateQueue,e===null?(e={lastEffect:null,stores:null},me.updateQueue=e,e.stores=[t]):(n=e.stores,n===null?e.stores=[t]:n.push(t))}function _1(t,e,n,r){e.value=n,e.getSnapshot=r,E1(e)&&T1(t)}function w1(t,e,n){return n(function(){E1(e)&&T1(t)})}function E1(t){var e=t.getSnapshot;t=t.value;try{var n=e();return!Ht(t,n)}catch{return!0}}function T1(t){var e=In(t,1);e!==null&&jt(e,t,1,-1)}function ty(t){var e=Qt();return typeof t=="function"&&(t=t()),e.memoizedState=e.baseState=t,t={pending:null,interleaved:null,lanes:0,dispatch:null,lastRenderedReducer:Fo,lastRenderedState:t},e.queue=t,t=t.dispatch=AP.bind(null,me,t),[e.memoizedState,t]}function $o(t,e,n,r){return t={tag:t,create:e,destroy:n,deps:r,next:null},e=me.updateQueue,e===null?(e={lastEffect:null,stores:null},me.updateQueue=e,e.lastEffect=t.next=t):(n=e.lastEffect,n===null?e.lastEffect=t.next=t:(r=n.next,n.next=t,t.next=r,e.lastEffect=t)),t}function I1(){return Dt().memoizedState}function Yl(t,e,n,r){var i=Qt();me.flags|=t,i.memoizedState=$o(1|e,n,void 0,r===void 0?null:r)}function wc(t,e,n,r){var i=Dt();r=r===void 0?null:r;var s=void 0;if(be!==null){var o=be.memoizedState;if(s=o.destroy,r!==null&&am(r,o.deps)){i.memoizedState=$o(e,n,s,r);return}}me.flags|=t,i.memoizedState=$o(1|e,n,s,r)}function ny(t,e){return Yl(8390656,8,t,e)}function cm(t,e){return wc(2048,8,t,e)}function S1(t,e){return wc(4,2,t,e)}function A1(t,e){return wc(4,4,t,e)}function k1(t,e){if(typeof e=="function")return t=t(),e(t),function(){e(null)};if(e!=null)return t=t(),e.current=t,function(){e.current=null}}function P1(t,e,n){return n=n!=null?n.concat([t]):null,wc(4,4,k1.bind(null,e,t),n)}function fm(){}function C1(t,e){var n=Dt();e=e===void 0?null:e;var r=n.memoizedState;return r!==null&&e!==null&&am(e,r[1])?r[0]:(n.memoizedState=[t,e],t)}function R1(t,e){var n=Dt();e=e===void 0?null:e;var r=n.memoizedState;return r!==null&&e!==null&&am(e,r[1])?r[0]:(t=t(),n.memoizedState=[t,e],t)}function b1(t,e,n){return ri&21?(Ht(n,e)||(n=Ow(),me.lanes|=n,ii|=n,t.baseState=!0),e):(t.baseState&&(t.baseState=!1,pt=!0),t.memoizedState=n)}function IP(t,e){var n=ee;ee=n!==0&&4>n?n:4,t(!0);var r=Zf.transition;Zf.transition={};try{t(!1),e()}finally{ee=n,Zf.transition=r}}function x1(){return Dt().memoizedState}function SP(t,e,n){var r=or(t);if(n={lane:r,action:n,hasEagerState:!1,eagerState:null,next:null},N1(t))O1(e,n);else if(n=u1(t,e,n,r),n!==null){var i=lt();jt(n,t,r,i),D1(n,e,r)}}function AP(t,e,n){var r=or(t),i={lane:r,action:n,hasEagerState:!1,eagerState:null,next:null};if(N1(t))O1(e,i);else{var s=t.alternate;if(t.lanes===0&&(s===null||s.lanes===0)&&(s=e.lastRenderedReducer,s!==null))try{var o=e.lastRenderedState,a=s(o,n);if(i.hasEagerState=!0,i.eagerState=a,Ht(a,o)){var l=e.interleaved;l===null?(i.next=i,nm(e)):(i.next=l.next,l.next=i),e.interleaved=i;return}}catch{}finally{}n=u1(t,e,i,r),n!==null&&(i=lt(),jt(n,t,r,i),D1(n,e,r))}}function N1(t){var e=t.alternate;return t===me||e!==null&&e===me}function O1(t,e){co=Ru=!0;var n=t.pending;n===null?e.next=e:(e.next=n.next,n.next=e),t.pending=e}function D1(t,e,n){if(n&4194240){var r=e.lanes;r&=t.pendingLanes,n|=r,e.lanes=n,zp(t,n)}}var bu={readContext:Ot,useCallback:Qe,useContext:Qe,useEffect:Qe,useImperativeHandle:Qe,useInsertionEffect:Qe,useLayoutEffect:Qe,useMemo:Qe,useReducer:Qe,useRef:Qe,useState:Qe,useDebugValue:Qe,useDeferredValue:Qe,useTransition:Qe,useMutableSource:Qe,useSyncExternalStore:Qe,useId:Qe,unstable_isNewReconciler:!1},kP={readContext:Ot,useCallback:function(t,e){return Qt().memoizedState=[t,e===void 0?null:e],t},useContext:Ot,useEffect:ny,useImperativeHandle:function(t,e,n){return n=n!=null?n.concat([t]):null,Yl(4194308,4,k1.bind(null,e,t),n)},useLayoutEffect:function(t,e){return Yl(4194308,4,t,e)},useInsertionEffect:function(t,e){return Yl(4,2,t,e)},useMemo:function(t,e){var n=Qt();return e=e===void 0?null:e,t=t(),n.memoizedState=[t,e],t},useReducer:function(t,e,n){var r=Qt();return e=n!==void 0?n(e):e,r.memoizedState=r.baseState=e,t={pending:null,interleaved:null,lanes:0,dispatch:null,lastRenderedReducer:t,lastRenderedState:e},r.queue=t,t=t.dispatch=SP.bind(null,me,t),[r.memoizedState,t]},useRef:function(t){var e=Qt();return t={current:t},e.memoizedState=t},useState:ty,useDebugValue:fm,useDeferredValue:function(t){return Qt().memoizedState=t},useTransition:function(){var t=ty(!1),e=t[0];return t=IP.bind(null,t[1]),Qt().memoizedState=t,[e,t]},useMutableSource:function(){},useSyncExternalStore:function(t,e,n){var r=me,i=Qt();if(fe){if(n===void 0)throw Error(P(407));n=n()}else{if(n=e(),Fe===null)throw Error(P(349));ri&30||y1(r,e,n)}i.memoizedState=n;var s={value:n,getSnapshot:e};return i.queue=s,ny(w1.bind(null,r,s,t),[t]),r.flags|=2048,$o(9,_1.bind(null,r,s,n,e),void 0,null),n},useId:function(){var t=Qt(),e=Fe.identifierPrefix;if(fe){var n=gn,r=mn;n=(r&~(1<<32-Ut(r)-1)).toString(32)+n,e=":"+e+"R"+n,n=Vo++,0<n&&(e+="H"+n.toString(32)),e+=":"}else n=TP++,e=":"+e+"r"+n.toString(32)+":";return t.memoizedState=e},unstable_isNewReconciler:!1},PP={readContext:Ot,useCallback:C1,useContext:Ot,useEffect:cm,useImperativeHandle:P1,useInsertionEffect:S1,useLayoutEffect:A1,useMemo:R1,useReducer:eh,useRef:I1,useState:function(){return eh(Fo)},useDebugValue:fm,useDeferredValue:function(t){var e=Dt();return b1(e,be.memoizedState,t)},useTransition:function(){var t=eh(Fo)[0],e=Dt().memoizedState;return[t,e]},useMutableSource:g1,useSyncExternalStore:v1,useId:x1,unstable_isNewReconciler:!1},CP={readContext:Ot,useCallback:C1,useContext:Ot,useEffect:cm,useImperativeHandle:P1,useInsertionEffect:S1,useLayoutEffect:A1,useMemo:R1,useReducer:th,useRef:I1,useState:function(){return th(Fo)},useDebugValue:fm,useDeferredValue:function(t){var e=Dt();return be===null?e.memoizedState=t:b1(e,be.memoizedState,t)},useTransition:function(){var t=th(Fo)[0],e=Dt().memoizedState;return[t,e]},useMutableSource:g1,useSyncExternalStore:v1,useId:x1,unstable_isNewReconciler:!1};function as(t,e){try{var n="",r=e;do n+=nk(r),r=r.return;while(r);var i=n}catch(s){i=`
Error generating stack: `+s.message+`
`+s.stack}return{value:t,source:e,stack:i,digest:null}}function nh(t,e,n){return{value:t,source:null,stack:n??null,digest:e??null}}function md(t,e){try{console.error(e.value)}catch(n){setTimeout(function(){throw n})}}var RP=typeof WeakMap=="function"?WeakMap:Map;function L1(t,e,n){n=wn(-1,n),n.tag=3,n.payload={element:null};var r=e.value;return n.callback=function(){Nu||(Nu=!0,Ad=r),md(t,e)},n}function M1(t,e,n){n=wn(-1,n),n.tag=3;var r=t.type.getDerivedStateFromError;if(typeof r=="function"){var i=e.value;n.payload=function(){return r(i)},n.callback=function(){md(t,e)}}var s=t.stateNode;return s!==null&&typeof s.componentDidCatch=="function"&&(n.callback=function(){md(t,e),typeof r!="function"&&(sr===null?sr=new Set([this]):sr.add(this));var o=e.stack;this.componentDidCatch(e.value,{componentStack:o!==null?o:""})}),n}function ry(t,e,n){var r=t.pingCache;if(r===null){r=t.pingCache=new RP;var i=new Set;r.set(e,i)}else i=r.get(e),i===void 0&&(i=new Set,r.set(e,i));i.has(n)||(i.add(n),t=BP.bind(null,t,e,n),e.then(t,t))}function iy(t){do{var e;if((e=t.tag===13)&&(e=t.memoizedState,e=e!==null?e.dehydrated!==null:!0),e)return t;t=t.return}while(t!==null);return null}function sy(t,e,n,r,i){return t.mode&1?(t.flags|=65536,t.lanes=i,t):(t===e?t.flags|=65536:(t.flags|=128,n.flags|=131072,n.flags&=-52805,n.tag===1&&(n.alternate===null?n.tag=17:(e=wn(-1,1),e.tag=2,ir(n,e,1))),n.lanes|=1),t)}var bP=xn.ReactCurrentOwner,pt=!1;function ot(t,e,n,r){e.child=t===null?p1(e,null,n,r):ss(e,t.child,n,r)}function oy(t,e,n,r,i){n=n.render;var s=e.ref;return Gi(e,i),r=lm(t,e,n,r,s,i),n=um(),t!==null&&!pt?(e.updateQueue=t.updateQueue,e.flags&=-2053,t.lanes&=~i,Sn(t,e,i)):(fe&&n&&Yp(e),e.flags|=1,ot(t,e,r,i),e.child)}function ay(t,e,n,r,i){if(t===null){var s=n.type;return typeof s=="function"&&!_m(s)&&s.defaultProps===void 0&&n.compare===null&&n.defaultProps===void 0?(e.tag=15,e.type=s,V1(t,e,s,r,i)):(t=eu(n.type,null,r,e,e.mode,i),t.ref=e.ref,t.return=e,e.child=t)}if(s=t.child,!(t.lanes&i)){var o=s.memoizedProps;if(n=n.compare,n=n!==null?n:xo,n(o,r)&&t.ref===e.ref)return Sn(t,e,i)}return e.flags|=1,t=ar(s,r),t.ref=e.ref,t.return=e,e.child=t}function V1(t,e,n,r,i){if(t!==null){var s=t.memoizedProps;if(xo(s,r)&&t.ref===e.ref)if(pt=!1,e.pendingProps=r=s,(t.lanes&i)!==0)t.flags&131072&&(pt=!0);else return e.lanes=t.lanes,Sn(t,e,i)}return gd(t,e,n,r,i)}function F1(t,e,n){var r=e.pendingProps,i=r.children,s=t!==null?t.memoizedState:null;if(r.mode==="hidden")if(!(e.mode&1))e.memoizedState={baseLanes:0,cachePool:null,transitions:null},ne(Fi,yt),yt|=n;else{if(!(n&1073741824))return t=s!==null?s.baseLanes|n:n,e.lanes=e.childLanes=1073741824,e.memoizedState={baseLanes:t,cachePool:null,transitions:null},e.updateQueue=null,ne(Fi,yt),yt|=t,null;e.memoizedState={baseLanes:0,cachePool:null,transitions:null},r=s!==null?s.baseLanes:n,ne(Fi,yt),yt|=r}else s!==null?(r=s.baseLanes|n,e.memoizedState=null):r=n,ne(Fi,yt),yt|=r;return ot(t,e,i,n),e.child}function $1(t,e){var n=e.ref;(t===null&&n!==null||t!==null&&t.ref!==n)&&(e.flags|=512,e.flags|=2097152)}function gd(t,e,n,r,i){var s=gt(n)?ti:it.current;return s=rs(e,s),Gi(e,i),n=lm(t,e,n,r,s,i),r=um(),t!==null&&!pt?(e.updateQueue=t.updateQueue,e.flags&=-2053,t.lanes&=~i,Sn(t,e,i)):(fe&&r&&Yp(e),e.flags|=1,ot(t,e,n,i),e.child)}function ly(t,e,n,r,i){if(gt(n)){var s=!0;Tu(e)}else s=!1;if(Gi(e,i),e.stateNode===null)Xl(t,e),h1(e,n,r),pd(e,n,r,i),r=!0;else if(t===null){var o=e.stateNode,a=e.memoizedProps;o.props=a;var l=o.context,u=n.contextType;typeof u=="object"&&u!==null?u=Ot(u):(u=gt(n)?ti:it.current,u=rs(e,u));var c=n.getDerivedStateFromProps,f=typeof c=="function"||typeof o.getSnapshotBeforeUpdate=="function";f||typeof o.UNSAFE_componentWillReceiveProps!="function"&&typeof o.componentWillReceiveProps!="function"||(a!==r||l!==u)&&Zv(e,o,r,u),zn=!1;var h=e.memoizedState;o.state=h,Pu(e,r,o,i),l=e.memoizedState,a!==r||h!==l||mt.current||zn?(typeof c=="function"&&(dd(e,n,c,r),l=e.memoizedState),(a=zn||Jv(e,n,a,r,h,l,u))?(f||typeof o.UNSAFE_componentWillMount!="function"&&typeof o.componentWillMount!="function"||(typeof o.componentWillMount=="function"&&o.componentWillMount(),typeof o.UNSAFE_componentWillMount=="function"&&o.UNSAFE_componentWillMount()),typeof o.componentDidMount=="function"&&(e.flags|=4194308)):(typeof o.componentDidMount=="function"&&(e.flags|=4194308),e.memoizedProps=r,e.memoizedState=l),o.props=r,o.state=l,o.context=u,r=a):(typeof o.componentDidMount=="function"&&(e.flags|=4194308),r=!1)}else{o=e.stateNode,c1(t,e),a=e.memoizedProps,u=e.type===e.elementType?a:Mt(e.type,a),o.props=u,f=e.pendingProps,h=o.context,l=n.contextType,typeof l=="object"&&l!==null?l=Ot(l):(l=gt(n)?ti:it.current,l=rs(e,l));var p=n.getDerivedStateFromProps;(c=typeof p=="function"||typeof o.getSnapshotBeforeUpdate=="function")||typeof o.UNSAFE_componentWillReceiveProps!="function"&&typeof o.componentWillReceiveProps!="function"||(a!==f||h!==l)&&Zv(e,o,r,l),zn=!1,h=e.memoizedState,o.state=h,Pu(e,r,o,i);var y=e.memoizedState;a!==f||h!==y||mt.current||zn?(typeof p=="function"&&(dd(e,n,p,r),y=e.memoizedState),(u=zn||Jv(e,n,u,r,h,y,l)||!1)?(c||typeof o.UNSAFE_componentWillUpdate!="function"&&typeof o.componentWillUpdate!="function"||(typeof o.componentWillUpdate=="function"&&o.componentWillUpdate(r,y,l),typeof o.UNSAFE_componentWillUpdate=="function"&&o.UNSAFE_componentWillUpdate(r,y,l)),typeof o.componentDidUpdate=="function"&&(e.flags|=4),typeof o.getSnapshotBeforeUpdate=="function"&&(e.flags|=1024)):(typeof o.componentDidUpdate!="function"||a===t.memoizedProps&&h===t.memoizedState||(e.flags|=4),typeof o.getSnapshotBeforeUpdate!="function"||a===t.memoizedProps&&h===t.memoizedState||(e.flags|=1024),e.memoizedProps=r,e.memoizedState=y),o.props=r,o.state=y,o.context=l,r=u):(typeof o.componentDidUpdate!="function"||a===t.memoizedProps&&h===t.memoizedState||(e.flags|=4),typeof o.getSnapshotBeforeUpdate!="function"||a===t.memoizedProps&&h===t.memoizedState||(e.flags|=1024),r=!1)}return vd(t,e,n,r,s,i)}function vd(t,e,n,r,i,s){$1(t,e);var o=(e.flags&128)!==0;if(!r&&!o)return i&&Kv(e,n,!1),Sn(t,e,s);r=e.stateNode,bP.current=e;var a=o&&typeof n.getDerivedStateFromError!="function"?null:r.render();return e.flags|=1,t!==null&&o?(e.child=ss(e,t.child,null,s),e.child=ss(e,null,a,s)):ot(t,e,a,s),e.memoizedState=r.state,i&&Kv(e,n,!0),e.child}function U1(t){var e=t.stateNode;e.pendingContext?qv(t,e.pendingContext,e.pendingContext!==e.context):e.context&&qv(t,e.context,!1),im(t,e.containerInfo)}function uy(t,e,n,r,i){return is(),Jp(i),e.flags|=256,ot(t,e,n,r),e.child}var yd={dehydrated:null,treeContext:null,retryLane:0};function _d(t){return{baseLanes:t,cachePool:null,transitions:null}}function j1(t,e,n){var r=e.pendingProps,i=pe.current,s=!1,o=(e.flags&128)!==0,a;if((a=o)||(a=t!==null&&t.memoizedState===null?!1:(i&2)!==0),a?(s=!0,e.flags&=-129):(t===null||t.memoizedState!==null)&&(i|=1),ne(pe,i&1),t===null)return fd(e),t=e.memoizedState,t!==null&&(t=t.dehydrated,t!==null)?(e.mode&1?t.data==="$!"?e.lanes=8:e.lanes=1073741824:e.lanes=1,null):(o=r.children,t=r.fallback,s?(r=e.mode,s=e.child,o={mode:"hidden",children:o},!(r&1)&&s!==null?(s.childLanes=0,s.pendingProps=o):s=Ic(o,r,0,null),t=Jr(t,r,n,null),s.return=e,t.return=e,s.sibling=t,e.child=s,e.child.memoizedState=_d(n),e.memoizedState=yd,t):hm(e,o));if(i=t.memoizedState,i!==null&&(a=i.dehydrated,a!==null))return xP(t,e,o,r,a,i,n);if(s){s=r.fallback,o=e.mode,i=t.child,a=i.sibling;var l={mode:"hidden",children:r.children};return!(o&1)&&e.child!==i?(r=e.child,r.childLanes=0,r.pendingProps=l,e.deletions=null):(r=ar(i,l),r.subtreeFlags=i.subtreeFlags&14680064),a!==null?s=ar(a,s):(s=Jr(s,o,n,null),s.flags|=2),s.return=e,r.return=e,r.sibling=s,e.child=r,r=s,s=e.child,o=t.child.memoizedState,o=o===null?_d(n):{baseLanes:o.baseLanes|n,cachePool:null,transitions:o.transitions},s.memoizedState=o,s.childLanes=t.childLanes&~n,e.memoizedState=yd,r}return s=t.child,t=s.sibling,r=ar(s,{mode:"visible",children:r.children}),!(e.mode&1)&&(r.lanes=n),r.return=e,r.sibling=null,t!==null&&(n=e.deletions,n===null?(e.deletions=[t],e.flags|=16):n.push(t)),e.child=r,e.memoizedState=null,r}function hm(t,e){return e=Ic({mode:"visible",children:e},t.mode,0,null),e.return=t,t.child=e}function gl(t,e,n,r){return r!==null&&Jp(r),ss(e,t.child,null,n),t=hm(e,e.pendingProps.children),t.flags|=2,e.memoizedState=null,t}function xP(t,e,n,r,i,s,o){if(n)return e.flags&256?(e.flags&=-257,r=nh(Error(P(422))),gl(t,e,o,r)):e.memoizedState!==null?(e.child=t.child,e.flags|=128,null):(s=r.fallback,i=e.mode,r=Ic({mode:"visible",children:r.children},i,0,null),s=Jr(s,i,o,null),s.flags|=2,r.return=e,s.return=e,r.sibling=s,e.child=r,e.mode&1&&ss(e,t.child,null,o),e.child.memoizedState=_d(o),e.memoizedState=yd,s);if(!(e.mode&1))return gl(t,e,o,null);if(i.data==="$!"){if(r=i.nextSibling&&i.nextSibling.dataset,r)var a=r.dgst;return r=a,s=Error(P(419)),r=nh(s,r,void 0),gl(t,e,o,r)}if(a=(o&t.childLanes)!==0,pt||a){if(r=Fe,r!==null){switch(o&-o){case 4:i=2;break;case 16:i=8;break;case 64:case 128:case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:case 4194304:case 8388608:case 16777216:case 33554432:case 67108864:i=32;break;case 536870912:i=268435456;break;default:i=0}i=i&(r.suspendedLanes|o)?0:i,i!==0&&i!==s.retryLane&&(s.retryLane=i,In(t,i),jt(r,t,i,-1))}return ym(),r=nh(Error(P(421))),gl(t,e,o,r)}return i.data==="$?"?(e.flags|=128,e.child=t.child,e=HP.bind(null,t),i._reactRetry=e,null):(t=s.treeContext,_t=rr(i.nextSibling),Et=e,fe=!0,Ft=null,t!==null&&(Ct[Rt++]=mn,Ct[Rt++]=gn,Ct[Rt++]=ni,mn=t.id,gn=t.overflow,ni=e),e=hm(e,r.children),e.flags|=4096,e)}function cy(t,e,n){t.lanes|=e;var r=t.alternate;r!==null&&(r.lanes|=e),hd(t.return,e,n)}function rh(t,e,n,r,i){var s=t.memoizedState;s===null?t.memoizedState={isBackwards:e,rendering:null,renderingStartTime:0,last:r,tail:n,tailMode:i}:(s.isBackwards=e,s.rendering=null,s.renderingStartTime=0,s.last=r,s.tail=n,s.tailMode=i)}function z1(t,e,n){var r=e.pendingProps,i=r.revealOrder,s=r.tail;if(ot(t,e,r.children,n),r=pe.current,r&2)r=r&1|2,e.flags|=128;else{if(t!==null&&t.flags&128)e:for(t=e.child;t!==null;){if(t.tag===13)t.memoizedState!==null&&cy(t,n,e);else if(t.tag===19)cy(t,n,e);else if(t.child!==null){t.child.return=t,t=t.child;continue}if(t===e)break e;for(;t.sibling===null;){if(t.return===null||t.return===e)break e;t=t.return}t.sibling.return=t.return,t=t.sibling}r&=1}if(ne(pe,r),!(e.mode&1))e.memoizedState=null;else switch(i){case"forwards":for(n=e.child,i=null;n!==null;)t=n.alternate,t!==null&&Cu(t)===null&&(i=n),n=n.sibling;n=i,n===null?(i=e.child,e.child=null):(i=n.sibling,n.sibling=null),rh(e,!1,i,n,s);break;case"backwards":for(n=null,i=e.child,e.child=null;i!==null;){if(t=i.alternate,t!==null&&Cu(t)===null){e.child=i;break}t=i.sibling,i.sibling=n,n=i,i=t}rh(e,!0,n,null,s);break;case"together":rh(e,!1,null,null,void 0);break;default:e.memoizedState=null}return e.child}function Xl(t,e){!(e.mode&1)&&t!==null&&(t.alternate=null,e.alternate=null,e.flags|=2)}function Sn(t,e,n){if(t!==null&&(e.dependencies=t.dependencies),ii|=e.lanes,!(n&e.childLanes))return null;if(t!==null&&e.child!==t.child)throw Error(P(153));if(e.child!==null){for(t=e.child,n=ar(t,t.pendingProps),e.child=n,n.return=e;t.sibling!==null;)t=t.sibling,n=n.sibling=ar(t,t.pendingProps),n.return=e;n.sibling=null}return e.child}function NP(t,e,n){switch(e.tag){case 3:U1(e),is();break;case 5:m1(e);break;case 1:gt(e.type)&&Tu(e);break;case 4:im(e,e.stateNode.containerInfo);break;case 10:var r=e.type._context,i=e.memoizedProps.value;ne(Au,r._currentValue),r._currentValue=i;break;case 13:if(r=e.memoizedState,r!==null)return r.dehydrated!==null?(ne(pe,pe.current&1),e.flags|=128,null):n&e.child.childLanes?j1(t,e,n):(ne(pe,pe.current&1),t=Sn(t,e,n),t!==null?t.sibling:null);ne(pe,pe.current&1);break;case 19:if(r=(n&e.childLanes)!==0,t.flags&128){if(r)return z1(t,e,n);e.flags|=128}if(i=e.memoizedState,i!==null&&(i.rendering=null,i.tail=null,i.lastEffect=null),ne(pe,pe.current),r)break;return null;case 22:case 23:return e.lanes=0,F1(t,e,n)}return Sn(t,e,n)}var B1,wd,H1,W1;B1=function(t,e){for(var n=e.child;n!==null;){if(n.tag===5||n.tag===6)t.appendChild(n.stateNode);else if(n.tag!==4&&n.child!==null){n.child.return=n,n=n.child;continue}if(n===e)break;for(;n.sibling===null;){if(n.return===null||n.return===e)return;n=n.return}n.sibling.return=n.return,n=n.sibling}};wd=function(){};H1=function(t,e,n,r){var i=t.memoizedProps;if(i!==r){t=e.stateNode,Hr(rn.current);var s=null;switch(n){case"input":i=zh(t,i),r=zh(t,r),s=[];break;case"select":i=ge({},i,{value:void 0}),r=ge({},r,{value:void 0}),s=[];break;case"textarea":i=Wh(t,i),r=Wh(t,r),s=[];break;default:typeof i.onClick!="function"&&typeof r.onClick=="function"&&(t.onclick=wu)}Kh(n,r);var o;n=null;for(u in i)if(!r.hasOwnProperty(u)&&i.hasOwnProperty(u)&&i[u]!=null)if(u==="style"){var a=i[u];for(o in a)a.hasOwnProperty(o)&&(n||(n={}),n[o]="")}else u!=="dangerouslySetInnerHTML"&&u!=="children"&&u!=="suppressContentEditableWarning"&&u!=="suppressHydrationWarning"&&u!=="autoFocus"&&(So.hasOwnProperty(u)?s||(s=[]):(s=s||[]).push(u,null));for(u in r){var l=r[u];if(a=i!=null?i[u]:void 0,r.hasOwnProperty(u)&&l!==a&&(l!=null||a!=null))if(u==="style")if(a){for(o in a)!a.hasOwnProperty(o)||l&&l.hasOwnProperty(o)||(n||(n={}),n[o]="");for(o in l)l.hasOwnProperty(o)&&a[o]!==l[o]&&(n||(n={}),n[o]=l[o])}else n||(s||(s=[]),s.push(u,n)),n=l;else u==="dangerouslySetInnerHTML"?(l=l?l.__html:void 0,a=a?a.__html:void 0,l!=null&&a!==l&&(s=s||[]).push(u,l)):u==="children"?typeof l!="string"&&typeof l!="number"||(s=s||[]).push(u,""+l):u!=="suppressContentEditableWarning"&&u!=="suppressHydrationWarning"&&(So.hasOwnProperty(u)?(l!=null&&u==="onScroll"&&ie("scroll",t),s||a===l||(s=[])):(s=s||[]).push(u,l))}n&&(s=s||[]).push("style",n);var u=s;(e.updateQueue=u)&&(e.flags|=4)}};W1=function(t,e,n,r){n!==r&&(e.flags|=4)};function zs(t,e){if(!fe)switch(t.tailMode){case"hidden":e=t.tail;for(var n=null;e!==null;)e.alternate!==null&&(n=e),e=e.sibling;n===null?t.tail=null:n.sibling=null;break;case"collapsed":n=t.tail;for(var r=null;n!==null;)n.alternate!==null&&(r=n),n=n.sibling;r===null?e||t.tail===null?t.tail=null:t.tail.sibling=null:r.sibling=null}}function Ye(t){var e=t.alternate!==null&&t.alternate.child===t.child,n=0,r=0;if(e)for(var i=t.child;i!==null;)n|=i.lanes|i.childLanes,r|=i.subtreeFlags&14680064,r|=i.flags&14680064,i.return=t,i=i.sibling;else for(i=t.child;i!==null;)n|=i.lanes|i.childLanes,r|=i.subtreeFlags,r|=i.flags,i.return=t,i=i.sibling;return t.subtreeFlags|=r,t.childLanes=n,e}function OP(t,e,n){var r=e.pendingProps;switch(Xp(e),e.tag){case 2:case 16:case 15:case 0:case 11:case 7:case 8:case 12:case 9:case 14:return Ye(e),null;case 1:return gt(e.type)&&Eu(),Ye(e),null;case 3:return r=e.stateNode,os(),le(mt),le(it),om(),r.pendingContext&&(r.context=r.pendingContext,r.pendingContext=null),(t===null||t.child===null)&&(pl(e)?e.flags|=4:t===null||t.memoizedState.isDehydrated&&!(e.flags&256)||(e.flags|=1024,Ft!==null&&(Cd(Ft),Ft=null))),wd(t,e),Ye(e),null;case 5:sm(e);var i=Hr(Mo.current);if(n=e.type,t!==null&&e.stateNode!=null)H1(t,e,n,r,i),t.ref!==e.ref&&(e.flags|=512,e.flags|=2097152);else{if(!r){if(e.stateNode===null)throw Error(P(166));return Ye(e),null}if(t=Hr(rn.current),pl(e)){r=e.stateNode,n=e.type;var s=e.memoizedProps;switch(r[Xt]=e,r[Do]=s,t=(e.mode&1)!==0,n){case"dialog":ie("cancel",r),ie("close",r);break;case"iframe":case"object":case"embed":ie("load",r);break;case"video":case"audio":for(i=0;i<Ys.length;i++)ie(Ys[i],r);break;case"source":ie("error",r);break;case"img":case"image":case"link":ie("error",r),ie("load",r);break;case"details":ie("toggle",r);break;case"input":_v(r,s),ie("invalid",r);break;case"select":r._wrapperState={wasMultiple:!!s.multiple},ie("invalid",r);break;case"textarea":Ev(r,s),ie("invalid",r)}Kh(n,s),i=null;for(var o in s)if(s.hasOwnProperty(o)){var a=s[o];o==="children"?typeof a=="string"?r.textContent!==a&&(s.suppressHydrationWarning!==!0&&dl(r.textContent,a,t),i=["children",a]):typeof a=="number"&&r.textContent!==""+a&&(s.suppressHydrationWarning!==!0&&dl(r.textContent,a,t),i=["children",""+a]):So.hasOwnProperty(o)&&a!=null&&o==="onScroll"&&ie("scroll",r)}switch(n){case"input":sl(r),wv(r,s,!0);break;case"textarea":sl(r),Tv(r);break;case"select":case"option":break;default:typeof s.onClick=="function"&&(r.onclick=wu)}r=i,e.updateQueue=r,r!==null&&(e.flags|=4)}else{o=i.nodeType===9?i:i.ownerDocument,t==="http://www.w3.org/1999/xhtml"&&(t=yw(n)),t==="http://www.w3.org/1999/xhtml"?n==="script"?(t=o.createElement("div"),t.innerHTML="<script><\/script>",t=t.removeChild(t.firstChild)):typeof r.is=="string"?t=o.createElement(n,{is:r.is}):(t=o.createElement(n),n==="select"&&(o=t,r.multiple?o.multiple=!0:r.size&&(o.size=r.size))):t=o.createElementNS(t,n),t[Xt]=e,t[Do]=r,B1(t,e,!1,!1),e.stateNode=t;e:{switch(o=Gh(n,r),n){case"dialog":ie("cancel",t),ie("close",t),i=r;break;case"iframe":case"object":case"embed":ie("load",t),i=r;break;case"video":case"audio":for(i=0;i<Ys.length;i++)ie(Ys[i],t);i=r;break;case"source":ie("error",t),i=r;break;case"img":case"image":case"link":ie("error",t),ie("load",t),i=r;break;case"details":ie("toggle",t),i=r;break;case"input":_v(t,r),i=zh(t,r),ie("invalid",t);break;case"option":i=r;break;case"select":t._wrapperState={wasMultiple:!!r.multiple},i=ge({},r,{value:void 0}),ie("invalid",t);break;case"textarea":Ev(t,r),i=Wh(t,r),ie("invalid",t);break;default:i=r}Kh(n,i),a=i;for(s in a)if(a.hasOwnProperty(s)){var l=a[s];s==="style"?Ew(t,l):s==="dangerouslySetInnerHTML"?(l=l?l.__html:void 0,l!=null&&_w(t,l)):s==="children"?typeof l=="string"?(n!=="textarea"||l!=="")&&Ao(t,l):typeof l=="number"&&Ao(t,""+l):s!=="suppressContentEditableWarning"&&s!=="suppressHydrationWarning"&&s!=="autoFocus"&&(So.hasOwnProperty(s)?l!=null&&s==="onScroll"&&ie("scroll",t):l!=null&&Mp(t,s,l,o))}switch(n){case"input":sl(t),wv(t,r,!1);break;case"textarea":sl(t),Tv(t);break;case"option":r.value!=null&&t.setAttribute("value",""+dr(r.value));break;case"select":t.multiple=!!r.multiple,s=r.value,s!=null?Hi(t,!!r.multiple,s,!1):r.defaultValue!=null&&Hi(t,!!r.multiple,r.defaultValue,!0);break;default:typeof i.onClick=="function"&&(t.onclick=wu)}switch(n){case"button":case"input":case"select":case"textarea":r=!!r.autoFocus;break e;case"img":r=!0;break e;default:r=!1}}r&&(e.flags|=4)}e.ref!==null&&(e.flags|=512,e.flags|=2097152)}return Ye(e),null;case 6:if(t&&e.stateNode!=null)W1(t,e,t.memoizedProps,r);else{if(typeof r!="string"&&e.stateNode===null)throw Error(P(166));if(n=Hr(Mo.current),Hr(rn.current),pl(e)){if(r=e.stateNode,n=e.memoizedProps,r[Xt]=e,(s=r.nodeValue!==n)&&(t=Et,t!==null))switch(t.tag){case 3:dl(r.nodeValue,n,(t.mode&1)!==0);break;case 5:t.memoizedProps.suppressHydrationWarning!==!0&&dl(r.nodeValue,n,(t.mode&1)!==0)}s&&(e.flags|=4)}else r=(n.nodeType===9?n:n.ownerDocument).createTextNode(r),r[Xt]=e,e.stateNode=r}return Ye(e),null;case 13:if(le(pe),r=e.memoizedState,t===null||t.memoizedState!==null&&t.memoizedState.dehydrated!==null){if(fe&&_t!==null&&e.mode&1&&!(e.flags&128))l1(),is(),e.flags|=98560,s=!1;else if(s=pl(e),r!==null&&r.dehydrated!==null){if(t===null){if(!s)throw Error(P(318));if(s=e.memoizedState,s=s!==null?s.dehydrated:null,!s)throw Error(P(317));s[Xt]=e}else is(),!(e.flags&128)&&(e.memoizedState=null),e.flags|=4;Ye(e),s=!1}else Ft!==null&&(Cd(Ft),Ft=null),s=!0;if(!s)return e.flags&65536?e:null}return e.flags&128?(e.lanes=n,e):(r=r!==null,r!==(t!==null&&t.memoizedState!==null)&&r&&(e.child.flags|=8192,e.mode&1&&(t===null||pe.current&1?xe===0&&(xe=3):ym())),e.updateQueue!==null&&(e.flags|=4),Ye(e),null);case 4:return os(),wd(t,e),t===null&&No(e.stateNode.containerInfo),Ye(e),null;case 10:return tm(e.type._context),Ye(e),null;case 17:return gt(e.type)&&Eu(),Ye(e),null;case 19:if(le(pe),s=e.memoizedState,s===null)return Ye(e),null;if(r=(e.flags&128)!==0,o=s.rendering,o===null)if(r)zs(s,!1);else{if(xe!==0||t!==null&&t.flags&128)for(t=e.child;t!==null;){if(o=Cu(t),o!==null){for(e.flags|=128,zs(s,!1),r=o.updateQueue,r!==null&&(e.updateQueue=r,e.flags|=4),e.subtreeFlags=0,r=n,n=e.child;n!==null;)s=n,t=r,s.flags&=14680066,o=s.alternate,o===null?(s.childLanes=0,s.lanes=t,s.child=null,s.subtreeFlags=0,s.memoizedProps=null,s.memoizedState=null,s.updateQueue=null,s.dependencies=null,s.stateNode=null):(s.childLanes=o.childLanes,s.lanes=o.lanes,s.child=o.child,s.subtreeFlags=0,s.deletions=null,s.memoizedProps=o.memoizedProps,s.memoizedState=o.memoizedState,s.updateQueue=o.updateQueue,s.type=o.type,t=o.dependencies,s.dependencies=t===null?null:{lanes:t.lanes,firstContext:t.firstContext}),n=n.sibling;return ne(pe,pe.current&1|2),e.child}t=t.sibling}s.tail!==null&&Ie()>ls&&(e.flags|=128,r=!0,zs(s,!1),e.lanes=4194304)}else{if(!r)if(t=Cu(o),t!==null){if(e.flags|=128,r=!0,n=t.updateQueue,n!==null&&(e.updateQueue=n,e.flags|=4),zs(s,!0),s.tail===null&&s.tailMode==="hidden"&&!o.alternate&&!fe)return Ye(e),null}else 2*Ie()-s.renderingStartTime>ls&&n!==1073741824&&(e.flags|=128,r=!0,zs(s,!1),e.lanes=4194304);s.isBackwards?(o.sibling=e.child,e.child=o):(n=s.last,n!==null?n.sibling=o:e.child=o,s.last=o)}return s.tail!==null?(e=s.tail,s.rendering=e,s.tail=e.sibling,s.renderingStartTime=Ie(),e.sibling=null,n=pe.current,ne(pe,r?n&1|2:n&1),e):(Ye(e),null);case 22:case 23:return vm(),r=e.memoizedState!==null,t!==null&&t.memoizedState!==null!==r&&(e.flags|=8192),r&&e.mode&1?yt&1073741824&&(Ye(e),e.subtreeFlags&6&&(e.flags|=8192)):Ye(e),null;case 24:return null;case 25:return null}throw Error(P(156,e.tag))}function DP(t,e){switch(Xp(e),e.tag){case 1:return gt(e.type)&&Eu(),t=e.flags,t&65536?(e.flags=t&-65537|128,e):null;case 3:return os(),le(mt),le(it),om(),t=e.flags,t&65536&&!(t&128)?(e.flags=t&-65537|128,e):null;case 5:return sm(e),null;case 13:if(le(pe),t=e.memoizedState,t!==null&&t.dehydrated!==null){if(e.alternate===null)throw Error(P(340));is()}return t=e.flags,t&65536?(e.flags=t&-65537|128,e):null;case 19:return le(pe),null;case 4:return os(),null;case 10:return tm(e.type._context),null;case 22:case 23:return vm(),null;case 24:return null;default:return null}}var vl=!1,Ze=!1,LP=typeof WeakSet=="function"?WeakSet:Set,D=null;function Vi(t,e){var n=t.ref;if(n!==null)if(typeof n=="function")try{n(null)}catch(r){_e(t,e,r)}else n.current=null}function Ed(t,e,n){try{n()}catch(r){_e(t,e,r)}}var fy=!1;function MP(t,e){if(id=vu,t=Qw(),Qp(t)){if("selectionStart"in t)var n={start:t.selectionStart,end:t.selectionEnd};else e:{n=(n=t.ownerDocument)&&n.defaultView||window;var r=n.getSelection&&n.getSelection();if(r&&r.rangeCount!==0){n=r.anchorNode;var i=r.anchorOffset,s=r.focusNode;r=r.focusOffset;try{n.nodeType,s.nodeType}catch{n=null;break e}var o=0,a=-1,l=-1,u=0,c=0,f=t,h=null;t:for(;;){for(var p;f!==n||i!==0&&f.nodeType!==3||(a=o+i),f!==s||r!==0&&f.nodeType!==3||(l=o+r),f.nodeType===3&&(o+=f.nodeValue.length),(p=f.firstChild)!==null;)h=f,f=p;for(;;){if(f===t)break t;if(h===n&&++u===i&&(a=o),h===s&&++c===r&&(l=o),(p=f.nextSibling)!==null)break;f=h,h=f.parentNode}f=p}n=a===-1||l===-1?null:{start:a,end:l}}else n=null}n=n||{start:0,end:0}}else n=null;for(sd={focusedElem:t,selectionRange:n},vu=!1,D=e;D!==null;)if(e=D,t=e.child,(e.subtreeFlags&1028)!==0&&t!==null)t.return=e,D=t;else for(;D!==null;){e=D;try{var y=e.alternate;if(e.flags&1024)switch(e.tag){case 0:case 11:case 15:break;case 1:if(y!==null){var _=y.memoizedProps,w=y.memoizedState,m=e.stateNode,d=m.getSnapshotBeforeUpdate(e.elementType===e.type?_:Mt(e.type,_),w);m.__reactInternalSnapshotBeforeUpdate=d}break;case 3:var g=e.stateNode.containerInfo;g.nodeType===1?g.textContent="":g.nodeType===9&&g.documentElement&&g.removeChild(g.documentElement);break;case 5:case 6:case 4:case 17:break;default:throw Error(P(163))}}catch(E){_e(e,e.return,E)}if(t=e.sibling,t!==null){t.return=e.return,D=t;break}D=e.return}return y=fy,fy=!1,y}function fo(t,e,n){var r=e.updateQueue;if(r=r!==null?r.lastEffect:null,r!==null){var i=r=r.next;do{if((i.tag&t)===t){var s=i.destroy;i.destroy=void 0,s!==void 0&&Ed(e,n,s)}i=i.next}while(i!==r)}}function Ec(t,e){if(e=e.updateQueue,e=e!==null?e.lastEffect:null,e!==null){var n=e=e.next;do{if((n.tag&t)===t){var r=n.create;n.destroy=r()}n=n.next}while(n!==e)}}function Td(t){var e=t.ref;if(e!==null){var n=t.stateNode;switch(t.tag){case 5:t=n;break;default:t=n}typeof e=="function"?e(t):e.current=t}}function q1(t){var e=t.alternate;e!==null&&(t.alternate=null,q1(e)),t.child=null,t.deletions=null,t.sibling=null,t.tag===5&&(e=t.stateNode,e!==null&&(delete e[Xt],delete e[Do],delete e[ld],delete e[yP],delete e[_P])),t.stateNode=null,t.return=null,t.dependencies=null,t.memoizedProps=null,t.memoizedState=null,t.pendingProps=null,t.stateNode=null,t.updateQueue=null}function K1(t){return t.tag===5||t.tag===3||t.tag===4}function hy(t){e:for(;;){for(;t.sibling===null;){if(t.return===null||K1(t.return))return null;t=t.return}for(t.sibling.return=t.return,t=t.sibling;t.tag!==5&&t.tag!==6&&t.tag!==18;){if(t.flags&2||t.child===null||t.tag===4)continue e;t.child.return=t,t=t.child}if(!(t.flags&2))return t.stateNode}}function Id(t,e,n){var r=t.tag;if(r===5||r===6)t=t.stateNode,e?n.nodeType===8?n.parentNode.insertBefore(t,e):n.insertBefore(t,e):(n.nodeType===8?(e=n.parentNode,e.insertBefore(t,n)):(e=n,e.appendChild(t)),n=n._reactRootContainer,n!=null||e.onclick!==null||(e.onclick=wu));else if(r!==4&&(t=t.child,t!==null))for(Id(t,e,n),t=t.sibling;t!==null;)Id(t,e,n),t=t.sibling}function Sd(t,e,n){var r=t.tag;if(r===5||r===6)t=t.stateNode,e?n.insertBefore(t,e):n.appendChild(t);else if(r!==4&&(t=t.child,t!==null))for(Sd(t,e,n),t=t.sibling;t!==null;)Sd(t,e,n),t=t.sibling}var je=null,Vt=!1;function Mn(t,e,n){for(n=n.child;n!==null;)G1(t,e,n),n=n.sibling}function G1(t,e,n){if(nn&&typeof nn.onCommitFiberUnmount=="function")try{nn.onCommitFiberUnmount(dc,n)}catch{}switch(n.tag){case 5:Ze||Vi(n,e);case 6:var r=je,i=Vt;je=null,Mn(t,e,n),je=r,Vt=i,je!==null&&(Vt?(t=je,n=n.stateNode,t.nodeType===8?t.parentNode.removeChild(n):t.removeChild(n)):je.removeChild(n.stateNode));break;case 18:je!==null&&(Vt?(t=je,n=n.stateNode,t.nodeType===8?Yf(t.parentNode,n):t.nodeType===1&&Yf(t,n),Ro(t)):Yf(je,n.stateNode));break;case 4:r=je,i=Vt,je=n.stateNode.containerInfo,Vt=!0,Mn(t,e,n),je=r,Vt=i;break;case 0:case 11:case 14:case 15:if(!Ze&&(r=n.updateQueue,r!==null&&(r=r.lastEffect,r!==null))){i=r=r.next;do{var s=i,o=s.destroy;s=s.tag,o!==void 0&&(s&2||s&4)&&Ed(n,e,o),i=i.next}while(i!==r)}Mn(t,e,n);break;case 1:if(!Ze&&(Vi(n,e),r=n.stateNode,typeof r.componentWillUnmount=="function"))try{r.props=n.memoizedProps,r.state=n.memoizedState,r.componentWillUnmount()}catch(a){_e(n,e,a)}Mn(t,e,n);break;case 21:Mn(t,e,n);break;case 22:n.mode&1?(Ze=(r=Ze)||n.memoizedState!==null,Mn(t,e,n),Ze=r):Mn(t,e,n);break;default:Mn(t,e,n)}}function dy(t){var e=t.updateQueue;if(e!==null){t.updateQueue=null;var n=t.stateNode;n===null&&(n=t.stateNode=new LP),e.forEach(function(r){var i=WP.bind(null,t,r);n.has(r)||(n.add(r),r.then(i,i))})}}function Lt(t,e){var n=e.deletions;if(n!==null)for(var r=0;r<n.length;r++){var i=n[r];try{var s=t,o=e,a=o;e:for(;a!==null;){switch(a.tag){case 5:je=a.stateNode,Vt=!1;break e;case 3:je=a.stateNode.containerInfo,Vt=!0;break e;case 4:je=a.stateNode.containerInfo,Vt=!0;break e}a=a.return}if(je===null)throw Error(P(160));G1(s,o,i),je=null,Vt=!1;var l=i.alternate;l!==null&&(l.return=null),i.return=null}catch(u){_e(i,e,u)}}if(e.subtreeFlags&12854)for(e=e.child;e!==null;)Q1(e,t),e=e.sibling}function Q1(t,e){var n=t.alternate,r=t.flags;switch(t.tag){case 0:case 11:case 14:case 15:if(Lt(e,t),Gt(t),r&4){try{fo(3,t,t.return),Ec(3,t)}catch(_){_e(t,t.return,_)}try{fo(5,t,t.return)}catch(_){_e(t,t.return,_)}}break;case 1:Lt(e,t),Gt(t),r&512&&n!==null&&Vi(n,n.return);break;case 5:if(Lt(e,t),Gt(t),r&512&&n!==null&&Vi(n,n.return),t.flags&32){var i=t.stateNode;try{Ao(i,"")}catch(_){_e(t,t.return,_)}}if(r&4&&(i=t.stateNode,i!=null)){var s=t.memoizedProps,o=n!==null?n.memoizedProps:s,a=t.type,l=t.updateQueue;if(t.updateQueue=null,l!==null)try{a==="input"&&s.type==="radio"&&s.name!=null&&gw(i,s),Gh(a,o);var u=Gh(a,s);for(o=0;o<l.length;o+=2){var c=l[o],f=l[o+1];c==="style"?Ew(i,f):c==="dangerouslySetInnerHTML"?_w(i,f):c==="children"?Ao(i,f):Mp(i,c,f,u)}switch(a){case"input":Bh(i,s);break;case"textarea":vw(i,s);break;case"select":var h=i._wrapperState.wasMultiple;i._wrapperState.wasMultiple=!!s.multiple;var p=s.value;p!=null?Hi(i,!!s.multiple,p,!1):h!==!!s.multiple&&(s.defaultValue!=null?Hi(i,!!s.multiple,s.defaultValue,!0):Hi(i,!!s.multiple,s.multiple?[]:"",!1))}i[Do]=s}catch(_){_e(t,t.return,_)}}break;case 6:if(Lt(e,t),Gt(t),r&4){if(t.stateNode===null)throw Error(P(162));i=t.stateNode,s=t.memoizedProps;try{i.nodeValue=s}catch(_){_e(t,t.return,_)}}break;case 3:if(Lt(e,t),Gt(t),r&4&&n!==null&&n.memoizedState.isDehydrated)try{Ro(e.containerInfo)}catch(_){_e(t,t.return,_)}break;case 4:Lt(e,t),Gt(t);break;case 13:Lt(e,t),Gt(t),i=t.child,i.flags&8192&&(s=i.memoizedState!==null,i.stateNode.isHidden=s,!s||i.alternate!==null&&i.alternate.memoizedState!==null||(mm=Ie())),r&4&&dy(t);break;case 22:if(c=n!==null&&n.memoizedState!==null,t.mode&1?(Ze=(u=Ze)||c,Lt(e,t),Ze=u):Lt(e,t),Gt(t),r&8192){if(u=t.memoizedState!==null,(t.stateNode.isHidden=u)&&!c&&t.mode&1)for(D=t,c=t.child;c!==null;){for(f=D=c;D!==null;){switch(h=D,p=h.child,h.tag){case 0:case 11:case 14:case 15:fo(4,h,h.return);break;case 1:Vi(h,h.return);var y=h.stateNode;if(typeof y.componentWillUnmount=="function"){r=h,n=h.return;try{e=r,y.props=e.memoizedProps,y.state=e.memoizedState,y.componentWillUnmount()}catch(_){_e(r,n,_)}}break;case 5:Vi(h,h.return);break;case 22:if(h.memoizedState!==null){my(f);continue}}p!==null?(p.return=h,D=p):my(f)}c=c.sibling}e:for(c=null,f=t;;){if(f.tag===5){if(c===null){c=f;try{i=f.stateNode,u?(s=i.style,typeof s.setProperty=="function"?s.setProperty("display","none","important"):s.display="none"):(a=f.stateNode,l=f.memoizedProps.style,o=l!=null&&l.hasOwnProperty("display")?l.display:null,a.style.display=ww("display",o))}catch(_){_e(t,t.return,_)}}}else if(f.tag===6){if(c===null)try{f.stateNode.nodeValue=u?"":f.memoizedProps}catch(_){_e(t,t.return,_)}}else if((f.tag!==22&&f.tag!==23||f.memoizedState===null||f===t)&&f.child!==null){f.child.return=f,f=f.child;continue}if(f===t)break e;for(;f.sibling===null;){if(f.return===null||f.return===t)break e;c===f&&(c=null),f=f.return}c===f&&(c=null),f.sibling.return=f.return,f=f.sibling}}break;case 19:Lt(e,t),Gt(t),r&4&&dy(t);break;case 21:break;default:Lt(e,t),Gt(t)}}function Gt(t){var e=t.flags;if(e&2){try{e:{for(var n=t.return;n!==null;){if(K1(n)){var r=n;break e}n=n.return}throw Error(P(160))}switch(r.tag){case 5:var i=r.stateNode;r.flags&32&&(Ao(i,""),r.flags&=-33);var s=hy(t);Sd(t,s,i);break;case 3:case 4:var o=r.stateNode.containerInfo,a=hy(t);Id(t,a,o);break;default:throw Error(P(161))}}catch(l){_e(t,t.return,l)}t.flags&=-3}e&4096&&(t.flags&=-4097)}function VP(t,e,n){D=t,Y1(t)}function Y1(t,e,n){for(var r=(t.mode&1)!==0;D!==null;){var i=D,s=i.child;if(i.tag===22&&r){var o=i.memoizedState!==null||vl;if(!o){var a=i.alternate,l=a!==null&&a.memoizedState!==null||Ze;a=vl;var u=Ze;if(vl=o,(Ze=l)&&!u)for(D=i;D!==null;)o=D,l=o.child,o.tag===22&&o.memoizedState!==null?gy(i):l!==null?(l.return=o,D=l):gy(i);for(;s!==null;)D=s,Y1(s),s=s.sibling;D=i,vl=a,Ze=u}py(t)}else i.subtreeFlags&8772&&s!==null?(s.return=i,D=s):py(t)}}function py(t){for(;D!==null;){var e=D;if(e.flags&8772){var n=e.alternate;try{if(e.flags&8772)switch(e.tag){case 0:case 11:case 15:Ze||Ec(5,e);break;case 1:var r=e.stateNode;if(e.flags&4&&!Ze)if(n===null)r.componentDidMount();else{var i=e.elementType===e.type?n.memoizedProps:Mt(e.type,n.memoizedProps);r.componentDidUpdate(i,n.memoizedState,r.__reactInternalSnapshotBeforeUpdate)}var s=e.updateQueue;s!==null&&Xv(e,s,r);break;case 3:var o=e.updateQueue;if(o!==null){if(n=null,e.child!==null)switch(e.child.tag){case 5:n=e.child.stateNode;break;case 1:n=e.child.stateNode}Xv(e,o,n)}break;case 5:var a=e.stateNode;if(n===null&&e.flags&4){n=a;var l=e.memoizedProps;switch(e.type){case"button":case"input":case"select":case"textarea":l.autoFocus&&n.focus();break;case"img":l.src&&(n.src=l.src)}}break;case 6:break;case 4:break;case 12:break;case 13:if(e.memoizedState===null){var u=e.alternate;if(u!==null){var c=u.memoizedState;if(c!==null){var f=c.dehydrated;f!==null&&Ro(f)}}}break;case 19:case 17:case 21:case 22:case 23:case 25:break;default:throw Error(P(163))}Ze||e.flags&512&&Td(e)}catch(h){_e(e,e.return,h)}}if(e===t){D=null;break}if(n=e.sibling,n!==null){n.return=e.return,D=n;break}D=e.return}}function my(t){for(;D!==null;){var e=D;if(e===t){D=null;break}var n=e.sibling;if(n!==null){n.return=e.return,D=n;break}D=e.return}}function gy(t){for(;D!==null;){var e=D;try{switch(e.tag){case 0:case 11:case 15:var n=e.return;try{Ec(4,e)}catch(l){_e(e,n,l)}break;case 1:var r=e.stateNode;if(typeof r.componentDidMount=="function"){var i=e.return;try{r.componentDidMount()}catch(l){_e(e,i,l)}}var s=e.return;try{Td(e)}catch(l){_e(e,s,l)}break;case 5:var o=e.return;try{Td(e)}catch(l){_e(e,o,l)}}}catch(l){_e(e,e.return,l)}if(e===t){D=null;break}var a=e.sibling;if(a!==null){a.return=e.return,D=a;break}D=e.return}}var FP=Math.ceil,xu=xn.ReactCurrentDispatcher,dm=xn.ReactCurrentOwner,Nt=xn.ReactCurrentBatchConfig,J=0,Fe=null,Pe=null,We=0,yt=0,Fi=Sr(0),xe=0,Uo=null,ii=0,Tc=0,pm=0,ho=null,ht=null,mm=0,ls=1/0,dn=null,Nu=!1,Ad=null,sr=null,yl=!1,Yn=null,Ou=0,po=0,kd=null,Jl=-1,Zl=0;function lt(){return J&6?Ie():Jl!==-1?Jl:Jl=Ie()}function or(t){return t.mode&1?J&2&&We!==0?We&-We:EP.transition!==null?(Zl===0&&(Zl=Ow()),Zl):(t=ee,t!==0||(t=window.event,t=t===void 0?16:Uw(t.type)),t):1}function jt(t,e,n,r){if(50<po)throw po=0,kd=null,Error(P(185));ga(t,n,r),(!(J&2)||t!==Fe)&&(t===Fe&&(!(J&2)&&(Tc|=n),xe===4&&Hn(t,We)),vt(t,r),n===1&&J===0&&!(e.mode&1)&&(ls=Ie()+500,yc&&Ar()))}function vt(t,e){var n=t.callbackNode;Ek(t,e);var r=gu(t,t===Fe?We:0);if(r===0)n!==null&&Av(n),t.callbackNode=null,t.callbackPriority=0;else if(e=r&-r,t.callbackPriority!==e){if(n!=null&&Av(n),e===1)t.tag===0?wP(vy.bind(null,t)):s1(vy.bind(null,t)),gP(function(){!(J&6)&&Ar()}),n=null;else{switch(Dw(r)){case 1:n=jp;break;case 4:n=xw;break;case 16:n=mu;break;case 536870912:n=Nw;break;default:n=mu}n=iE(n,X1.bind(null,t))}t.callbackPriority=e,t.callbackNode=n}}function X1(t,e){if(Jl=-1,Zl=0,J&6)throw Error(P(327));var n=t.callbackNode;if(Qi()&&t.callbackNode!==n)return null;var r=gu(t,t===Fe?We:0);if(r===0)return null;if(r&30||r&t.expiredLanes||e)e=Du(t,r);else{e=r;var i=J;J|=2;var s=Z1();(Fe!==t||We!==e)&&(dn=null,ls=Ie()+500,Xr(t,e));do try{jP();break}catch(a){J1(t,a)}while(!0);em(),xu.current=s,J=i,Pe!==null?e=0:(Fe=null,We=0,e=xe)}if(e!==0){if(e===2&&(i=Zh(t),i!==0&&(r=i,e=Pd(t,i))),e===1)throw n=Uo,Xr(t,0),Hn(t,r),vt(t,Ie()),n;if(e===6)Hn(t,r);else{if(i=t.current.alternate,!(r&30)&&!$P(i)&&(e=Du(t,r),e===2&&(s=Zh(t),s!==0&&(r=s,e=Pd(t,s))),e===1))throw n=Uo,Xr(t,0),Hn(t,r),vt(t,Ie()),n;switch(t.finishedWork=i,t.finishedLanes=r,e){case 0:case 1:throw Error(P(345));case 2:$r(t,ht,dn);break;case 3:if(Hn(t,r),(r&130023424)===r&&(e=mm+500-Ie(),10<e)){if(gu(t,0)!==0)break;if(i=t.suspendedLanes,(i&r)!==r){lt(),t.pingedLanes|=t.suspendedLanes&i;break}t.timeoutHandle=ad($r.bind(null,t,ht,dn),e);break}$r(t,ht,dn);break;case 4:if(Hn(t,r),(r&4194240)===r)break;for(e=t.eventTimes,i=-1;0<r;){var o=31-Ut(r);s=1<<o,o=e[o],o>i&&(i=o),r&=~s}if(r=i,r=Ie()-r,r=(120>r?120:480>r?480:1080>r?1080:1920>r?1920:3e3>r?3e3:4320>r?4320:1960*FP(r/1960))-r,10<r){t.timeoutHandle=ad($r.bind(null,t,ht,dn),r);break}$r(t,ht,dn);break;case 5:$r(t,ht,dn);break;default:throw Error(P(329))}}}return vt(t,Ie()),t.callbackNode===n?X1.bind(null,t):null}function Pd(t,e){var n=ho;return t.current.memoizedState.isDehydrated&&(Xr(t,e).flags|=256),t=Du(t,e),t!==2&&(e=ht,ht=n,e!==null&&Cd(e)),t}function Cd(t){ht===null?ht=t:ht.push.apply(ht,t)}function $P(t){for(var e=t;;){if(e.flags&16384){var n=e.updateQueue;if(n!==null&&(n=n.stores,n!==null))for(var r=0;r<n.length;r++){var i=n[r],s=i.getSnapshot;i=i.value;try{if(!Ht(s(),i))return!1}catch{return!1}}}if(n=e.child,e.subtreeFlags&16384&&n!==null)n.return=e,e=n;else{if(e===t)break;for(;e.sibling===null;){if(e.return===null||e.return===t)return!0;e=e.return}e.sibling.return=e.return,e=e.sibling}}return!0}function Hn(t,e){for(e&=~pm,e&=~Tc,t.suspendedLanes|=e,t.pingedLanes&=~e,t=t.expirationTimes;0<e;){var n=31-Ut(e),r=1<<n;t[n]=-1,e&=~r}}function vy(t){if(J&6)throw Error(P(327));Qi();var e=gu(t,0);if(!(e&1))return vt(t,Ie()),null;var n=Du(t,e);if(t.tag!==0&&n===2){var r=Zh(t);r!==0&&(e=r,n=Pd(t,r))}if(n===1)throw n=Uo,Xr(t,0),Hn(t,e),vt(t,Ie()),n;if(n===6)throw Error(P(345));return t.finishedWork=t.current.alternate,t.finishedLanes=e,$r(t,ht,dn),vt(t,Ie()),null}function gm(t,e){var n=J;J|=1;try{return t(e)}finally{J=n,J===0&&(ls=Ie()+500,yc&&Ar())}}function si(t){Yn!==null&&Yn.tag===0&&!(J&6)&&Qi();var e=J;J|=1;var n=Nt.transition,r=ee;try{if(Nt.transition=null,ee=1,t)return t()}finally{ee=r,Nt.transition=n,J=e,!(J&6)&&Ar()}}function vm(){yt=Fi.current,le(Fi)}function Xr(t,e){t.finishedWork=null,t.finishedLanes=0;var n=t.timeoutHandle;if(n!==-1&&(t.timeoutHandle=-1,mP(n)),Pe!==null)for(n=Pe.return;n!==null;){var r=n;switch(Xp(r),r.tag){case 1:r=r.type.childContextTypes,r!=null&&Eu();break;case 3:os(),le(mt),le(it),om();break;case 5:sm(r);break;case 4:os();break;case 13:le(pe);break;case 19:le(pe);break;case 10:tm(r.type._context);break;case 22:case 23:vm()}n=n.return}if(Fe=t,Pe=t=ar(t.current,null),We=yt=e,xe=0,Uo=null,pm=Tc=ii=0,ht=ho=null,Br!==null){for(e=0;e<Br.length;e++)if(n=Br[e],r=n.interleaved,r!==null){n.interleaved=null;var i=r.next,s=n.pending;if(s!==null){var o=s.next;s.next=i,r.next=o}n.pending=r}Br=null}return t}function J1(t,e){do{var n=Pe;try{if(em(),Ql.current=bu,Ru){for(var r=me.memoizedState;r!==null;){var i=r.queue;i!==null&&(i.pending=null),r=r.next}Ru=!1}if(ri=0,Ve=be=me=null,co=!1,Vo=0,dm.current=null,n===null||n.return===null){xe=1,Uo=e,Pe=null;break}e:{var s=t,o=n.return,a=n,l=e;if(e=We,a.flags|=32768,l!==null&&typeof l=="object"&&typeof l.then=="function"){var u=l,c=a,f=c.tag;if(!(c.mode&1)&&(f===0||f===11||f===15)){var h=c.alternate;h?(c.updateQueue=h.updateQueue,c.memoizedState=h.memoizedState,c.lanes=h.lanes):(c.updateQueue=null,c.memoizedState=null)}var p=iy(o);if(p!==null){p.flags&=-257,sy(p,o,a,s,e),p.mode&1&&ry(s,u,e),e=p,l=u;var y=e.updateQueue;if(y===null){var _=new Set;_.add(l),e.updateQueue=_}else y.add(l);break e}else{if(!(e&1)){ry(s,u,e),ym();break e}l=Error(P(426))}}else if(fe&&a.mode&1){var w=iy(o);if(w!==null){!(w.flags&65536)&&(w.flags|=256),sy(w,o,a,s,e),Jp(as(l,a));break e}}s=l=as(l,a),xe!==4&&(xe=2),ho===null?ho=[s]:ho.push(s),s=o;do{switch(s.tag){case 3:s.flags|=65536,e&=-e,s.lanes|=e;var m=L1(s,l,e);Yv(s,m);break e;case 1:a=l;var d=s.type,g=s.stateNode;if(!(s.flags&128)&&(typeof d.getDerivedStateFromError=="function"||g!==null&&typeof g.componentDidCatch=="function"&&(sr===null||!sr.has(g)))){s.flags|=65536,e&=-e,s.lanes|=e;var E=M1(s,a,e);Yv(s,E);break e}}s=s.return}while(s!==null)}tE(n)}catch(I){e=I,Pe===n&&n!==null&&(Pe=n=n.return);continue}break}while(!0)}function Z1(){var t=xu.current;return xu.current=bu,t===null?bu:t}function ym(){(xe===0||xe===3||xe===2)&&(xe=4),Fe===null||!(ii&268435455)&&!(Tc&268435455)||Hn(Fe,We)}function Du(t,e){var n=J;J|=2;var r=Z1();(Fe!==t||We!==e)&&(dn=null,Xr(t,e));do try{UP();break}catch(i){J1(t,i)}while(!0);if(em(),J=n,xu.current=r,Pe!==null)throw Error(P(261));return Fe=null,We=0,xe}function UP(){for(;Pe!==null;)eE(Pe)}function jP(){for(;Pe!==null&&!hk();)eE(Pe)}function eE(t){var e=rE(t.alternate,t,yt);t.memoizedProps=t.pendingProps,e===null?tE(t):Pe=e,dm.current=null}function tE(t){var e=t;do{var n=e.alternate;if(t=e.return,e.flags&32768){if(n=DP(n,e),n!==null){n.flags&=32767,Pe=n;return}if(t!==null)t.flags|=32768,t.subtreeFlags=0,t.deletions=null;else{xe=6,Pe=null;return}}else if(n=OP(n,e,yt),n!==null){Pe=n;return}if(e=e.sibling,e!==null){Pe=e;return}Pe=e=t}while(e!==null);xe===0&&(xe=5)}function $r(t,e,n){var r=ee,i=Nt.transition;try{Nt.transition=null,ee=1,zP(t,e,n,r)}finally{Nt.transition=i,ee=r}return null}function zP(t,e,n,r){do Qi();while(Yn!==null);if(J&6)throw Error(P(327));n=t.finishedWork;var i=t.finishedLanes;if(n===null)return null;if(t.finishedWork=null,t.finishedLanes=0,n===t.current)throw Error(P(177));t.callbackNode=null,t.callbackPriority=0;var s=n.lanes|n.childLanes;if(Tk(t,s),t===Fe&&(Pe=Fe=null,We=0),!(n.subtreeFlags&2064)&&!(n.flags&2064)||yl||(yl=!0,iE(mu,function(){return Qi(),null})),s=(n.flags&15990)!==0,n.subtreeFlags&15990||s){s=Nt.transition,Nt.transition=null;var o=ee;ee=1;var a=J;J|=4,dm.current=null,MP(t,n),Q1(n,t),lP(sd),vu=!!id,sd=id=null,t.current=n,VP(n),dk(),J=a,ee=o,Nt.transition=s}else t.current=n;if(yl&&(yl=!1,Yn=t,Ou=i),s=t.pendingLanes,s===0&&(sr=null),gk(n.stateNode),vt(t,Ie()),e!==null)for(r=t.onRecoverableError,n=0;n<e.length;n++)i=e[n],r(i.value,{componentStack:i.stack,digest:i.digest});if(Nu)throw Nu=!1,t=Ad,Ad=null,t;return Ou&1&&t.tag!==0&&Qi(),s=t.pendingLanes,s&1?t===kd?po++:(po=0,kd=t):po=0,Ar(),null}function Qi(){if(Yn!==null){var t=Dw(Ou),e=Nt.transition,n=ee;try{if(Nt.transition=null,ee=16>t?16:t,Yn===null)var r=!1;else{if(t=Yn,Yn=null,Ou=0,J&6)throw Error(P(331));var i=J;for(J|=4,D=t.current;D!==null;){var s=D,o=s.child;if(D.flags&16){var a=s.deletions;if(a!==null){for(var l=0;l<a.length;l++){var u=a[l];for(D=u;D!==null;){var c=D;switch(c.tag){case 0:case 11:case 15:fo(8,c,s)}var f=c.child;if(f!==null)f.return=c,D=f;else for(;D!==null;){c=D;var h=c.sibling,p=c.return;if(q1(c),c===u){D=null;break}if(h!==null){h.return=p,D=h;break}D=p}}}var y=s.alternate;if(y!==null){var _=y.child;if(_!==null){y.child=null;do{var w=_.sibling;_.sibling=null,_=w}while(_!==null)}}D=s}}if(s.subtreeFlags&2064&&o!==null)o.return=s,D=o;else e:for(;D!==null;){if(s=D,s.flags&2048)switch(s.tag){case 0:case 11:case 15:fo(9,s,s.return)}var m=s.sibling;if(m!==null){m.return=s.return,D=m;break e}D=s.return}}var d=t.current;for(D=d;D!==null;){o=D;var g=o.child;if(o.subtreeFlags&2064&&g!==null)g.return=o,D=g;else e:for(o=d;D!==null;){if(a=D,a.flags&2048)try{switch(a.tag){case 0:case 11:case 15:Ec(9,a)}}catch(I){_e(a,a.return,I)}if(a===o){D=null;break e}var E=a.sibling;if(E!==null){E.return=a.return,D=E;break e}D=a.return}}if(J=i,Ar(),nn&&typeof nn.onPostCommitFiberRoot=="function")try{nn.onPostCommitFiberRoot(dc,t)}catch{}r=!0}return r}finally{ee=n,Nt.transition=e}}return!1}function yy(t,e,n){e=as(n,e),e=L1(t,e,1),t=ir(t,e,1),e=lt(),t!==null&&(ga(t,1,e),vt(t,e))}function _e(t,e,n){if(t.tag===3)yy(t,t,n);else for(;e!==null;){if(e.tag===3){yy(e,t,n);break}else if(e.tag===1){var r=e.stateNode;if(typeof e.type.getDerivedStateFromError=="function"||typeof r.componentDidCatch=="function"&&(sr===null||!sr.has(r))){t=as(n,t),t=M1(e,t,1),e=ir(e,t,1),t=lt(),e!==null&&(ga(e,1,t),vt(e,t));break}}e=e.return}}function BP(t,e,n){var r=t.pingCache;r!==null&&r.delete(e),e=lt(),t.pingedLanes|=t.suspendedLanes&n,Fe===t&&(We&n)===n&&(xe===4||xe===3&&(We&130023424)===We&&500>Ie()-mm?Xr(t,0):pm|=n),vt(t,e)}function nE(t,e){e===0&&(t.mode&1?(e=ll,ll<<=1,!(ll&130023424)&&(ll=4194304)):e=1);var n=lt();t=In(t,e),t!==null&&(ga(t,e,n),vt(t,n))}function HP(t){var e=t.memoizedState,n=0;e!==null&&(n=e.retryLane),nE(t,n)}function WP(t,e){var n=0;switch(t.tag){case 13:var r=t.stateNode,i=t.memoizedState;i!==null&&(n=i.retryLane);break;case 19:r=t.stateNode;break;default:throw Error(P(314))}r!==null&&r.delete(e),nE(t,n)}var rE;rE=function(t,e,n){if(t!==null)if(t.memoizedProps!==e.pendingProps||mt.current)pt=!0;else{if(!(t.lanes&n)&&!(e.flags&128))return pt=!1,NP(t,e,n);pt=!!(t.flags&131072)}else pt=!1,fe&&e.flags&1048576&&o1(e,Su,e.index);switch(e.lanes=0,e.tag){case 2:var r=e.type;Xl(t,e),t=e.pendingProps;var i=rs(e,it.current);Gi(e,n),i=lm(null,e,r,t,i,n);var s=um();return e.flags|=1,typeof i=="object"&&i!==null&&typeof i.render=="function"&&i.$$typeof===void 0?(e.tag=1,e.memoizedState=null,e.updateQueue=null,gt(r)?(s=!0,Tu(e)):s=!1,e.memoizedState=i.state!==null&&i.state!==void 0?i.state:null,rm(e),i.updater=_c,e.stateNode=i,i._reactInternals=e,pd(e,r,t,n),e=vd(null,e,r,!0,s,n)):(e.tag=0,fe&&s&&Yp(e),ot(null,e,i,n),e=e.child),e;case 16:r=e.elementType;e:{switch(Xl(t,e),t=e.pendingProps,i=r._init,r=i(r._payload),e.type=r,i=e.tag=KP(r),t=Mt(r,t),i){case 0:e=gd(null,e,r,t,n);break e;case 1:e=ly(null,e,r,t,n);break e;case 11:e=oy(null,e,r,t,n);break e;case 14:e=ay(null,e,r,Mt(r.type,t),n);break e}throw Error(P(306,r,""))}return e;case 0:return r=e.type,i=e.pendingProps,i=e.elementType===r?i:Mt(r,i),gd(t,e,r,i,n);case 1:return r=e.type,i=e.pendingProps,i=e.elementType===r?i:Mt(r,i),ly(t,e,r,i,n);case 3:e:{if(U1(e),t===null)throw Error(P(387));r=e.pendingProps,s=e.memoizedState,i=s.element,c1(t,e),Pu(e,r,null,n);var o=e.memoizedState;if(r=o.element,s.isDehydrated)if(s={element:r,isDehydrated:!1,cache:o.cache,pendingSuspenseBoundaries:o.pendingSuspenseBoundaries,transitions:o.transitions},e.updateQueue.baseState=s,e.memoizedState=s,e.flags&256){i=as(Error(P(423)),e),e=uy(t,e,r,n,i);break e}else if(r!==i){i=as(Error(P(424)),e),e=uy(t,e,r,n,i);break e}else for(_t=rr(e.stateNode.containerInfo.firstChild),Et=e,fe=!0,Ft=null,n=p1(e,null,r,n),e.child=n;n;)n.flags=n.flags&-3|4096,n=n.sibling;else{if(is(),r===i){e=Sn(t,e,n);break e}ot(t,e,r,n)}e=e.child}return e;case 5:return m1(e),t===null&&fd(e),r=e.type,i=e.pendingProps,s=t!==null?t.memoizedProps:null,o=i.children,od(r,i)?o=null:s!==null&&od(r,s)&&(e.flags|=32),$1(t,e),ot(t,e,o,n),e.child;case 6:return t===null&&fd(e),null;case 13:return j1(t,e,n);case 4:return im(e,e.stateNode.containerInfo),r=e.pendingProps,t===null?e.child=ss(e,null,r,n):ot(t,e,r,n),e.child;case 11:return r=e.type,i=e.pendingProps,i=e.elementType===r?i:Mt(r,i),oy(t,e,r,i,n);case 7:return ot(t,e,e.pendingProps,n),e.child;case 8:return ot(t,e,e.pendingProps.children,n),e.child;case 12:return ot(t,e,e.pendingProps.children,n),e.child;case 10:e:{if(r=e.type._context,i=e.pendingProps,s=e.memoizedProps,o=i.value,ne(Au,r._currentValue),r._currentValue=o,s!==null)if(Ht(s.value,o)){if(s.children===i.children&&!mt.current){e=Sn(t,e,n);break e}}else for(s=e.child,s!==null&&(s.return=e);s!==null;){var a=s.dependencies;if(a!==null){o=s.child;for(var l=a.firstContext;l!==null;){if(l.context===r){if(s.tag===1){l=wn(-1,n&-n),l.tag=2;var u=s.updateQueue;if(u!==null){u=u.shared;var c=u.pending;c===null?l.next=l:(l.next=c.next,c.next=l),u.pending=l}}s.lanes|=n,l=s.alternate,l!==null&&(l.lanes|=n),hd(s.return,n,e),a.lanes|=n;break}l=l.next}}else if(s.tag===10)o=s.type===e.type?null:s.child;else if(s.tag===18){if(o=s.return,o===null)throw Error(P(341));o.lanes|=n,a=o.alternate,a!==null&&(a.lanes|=n),hd(o,n,e),o=s.sibling}else o=s.child;if(o!==null)o.return=s;else for(o=s;o!==null;){if(o===e){o=null;break}if(s=o.sibling,s!==null){s.return=o.return,o=s;break}o=o.return}s=o}ot(t,e,i.children,n),e=e.child}return e;case 9:return i=e.type,r=e.pendingProps.children,Gi(e,n),i=Ot(i),r=r(i),e.flags|=1,ot(t,e,r,n),e.child;case 14:return r=e.type,i=Mt(r,e.pendingProps),i=Mt(r.type,i),ay(t,e,r,i,n);case 15:return V1(t,e,e.type,e.pendingProps,n);case 17:return r=e.type,i=e.pendingProps,i=e.elementType===r?i:Mt(r,i),Xl(t,e),e.tag=1,gt(r)?(t=!0,Tu(e)):t=!1,Gi(e,n),h1(e,r,i),pd(e,r,i,n),vd(null,e,r,!0,t,n);case 19:return z1(t,e,n);case 22:return F1(t,e,n)}throw Error(P(156,e.tag))};function iE(t,e){return bw(t,e)}function qP(t,e,n,r){this.tag=t,this.key=n,this.sibling=this.child=this.return=this.stateNode=this.type=this.elementType=null,this.index=0,this.ref=null,this.pendingProps=e,this.dependencies=this.memoizedState=this.updateQueue=this.memoizedProps=null,this.mode=r,this.subtreeFlags=this.flags=0,this.deletions=null,this.childLanes=this.lanes=0,this.alternate=null}function xt(t,e,n,r){return new qP(t,e,n,r)}function _m(t){return t=t.prototype,!(!t||!t.isReactComponent)}function KP(t){if(typeof t=="function")return _m(t)?1:0;if(t!=null){if(t=t.$$typeof,t===Fp)return 11;if(t===$p)return 14}return 2}function ar(t,e){var n=t.alternate;return n===null?(n=xt(t.tag,e,t.key,t.mode),n.elementType=t.elementType,n.type=t.type,n.stateNode=t.stateNode,n.alternate=t,t.alternate=n):(n.pendingProps=e,n.type=t.type,n.flags=0,n.subtreeFlags=0,n.deletions=null),n.flags=t.flags&14680064,n.childLanes=t.childLanes,n.lanes=t.lanes,n.child=t.child,n.memoizedProps=t.memoizedProps,n.memoizedState=t.memoizedState,n.updateQueue=t.updateQueue,e=t.dependencies,n.dependencies=e===null?null:{lanes:e.lanes,firstContext:e.firstContext},n.sibling=t.sibling,n.index=t.index,n.ref=t.ref,n}function eu(t,e,n,r,i,s){var o=2;if(r=t,typeof t=="function")_m(t)&&(o=1);else if(typeof t=="string")o=5;else e:switch(t){case Ci:return Jr(n.children,i,s,e);case Vp:o=8,i|=8;break;case Fh:return t=xt(12,n,e,i|2),t.elementType=Fh,t.lanes=s,t;case $h:return t=xt(13,n,e,i),t.elementType=$h,t.lanes=s,t;case Uh:return t=xt(19,n,e,i),t.elementType=Uh,t.lanes=s,t;case dw:return Ic(n,i,s,e);default:if(typeof t=="object"&&t!==null)switch(t.$$typeof){case fw:o=10;break e;case hw:o=9;break e;case Fp:o=11;break e;case $p:o=14;break e;case jn:o=16,r=null;break e}throw Error(P(130,t==null?t:typeof t,""))}return e=xt(o,n,e,i),e.elementType=t,e.type=r,e.lanes=s,e}function Jr(t,e,n,r){return t=xt(7,t,r,e),t.lanes=n,t}function Ic(t,e,n,r){return t=xt(22,t,r,e),t.elementType=dw,t.lanes=n,t.stateNode={isHidden:!1},t}function ih(t,e,n){return t=xt(6,t,null,e),t.lanes=n,t}function sh(t,e,n){return e=xt(4,t.children!==null?t.children:[],t.key,e),e.lanes=n,e.stateNode={containerInfo:t.containerInfo,pendingChildren:null,implementation:t.implementation},e}function GP(t,e,n,r,i){this.tag=e,this.containerInfo=t,this.finishedWork=this.pingCache=this.current=this.pendingChildren=null,this.timeoutHandle=-1,this.callbackNode=this.pendingContext=this.context=null,this.callbackPriority=0,this.eventTimes=$f(0),this.expirationTimes=$f(-1),this.entangledLanes=this.finishedLanes=this.mutableReadLanes=this.expiredLanes=this.pingedLanes=this.suspendedLanes=this.pendingLanes=0,this.entanglements=$f(0),this.identifierPrefix=r,this.onRecoverableError=i,this.mutableSourceEagerHydrationData=null}function wm(t,e,n,r,i,s,o,a,l){return t=new GP(t,e,n,a,l),e===1?(e=1,s===!0&&(e|=8)):e=0,s=xt(3,null,null,e),t.current=s,s.stateNode=t,s.memoizedState={element:r,isDehydrated:n,cache:null,transitions:null,pendingSuspenseBoundaries:null},rm(s),t}function QP(t,e,n){var r=3<arguments.length&&arguments[3]!==void 0?arguments[3]:null;return{$$typeof:Pi,key:r==null?null:""+r,children:t,containerInfo:e,implementation:n}}function sE(t){if(!t)return pr;t=t._reactInternals;e:{if(gi(t)!==t||t.tag!==1)throw Error(P(170));var e=t;do{switch(e.tag){case 3:e=e.stateNode.context;break e;case 1:if(gt(e.type)){e=e.stateNode.__reactInternalMemoizedMergedChildContext;break e}}e=e.return}while(e!==null);throw Error(P(171))}if(t.tag===1){var n=t.type;if(gt(n))return i1(t,n,e)}return e}function oE(t,e,n,r,i,s,o,a,l){return t=wm(n,r,!0,t,i,s,o,a,l),t.context=sE(null),n=t.current,r=lt(),i=or(n),s=wn(r,i),s.callback=e??null,ir(n,s,i),t.current.lanes=i,ga(t,i,r),vt(t,r),t}function Sc(t,e,n,r){var i=e.current,s=lt(),o=or(i);return n=sE(n),e.context===null?e.context=n:e.pendingContext=n,e=wn(s,o),e.payload={element:t},r=r===void 0?null:r,r!==null&&(e.callback=r),t=ir(i,e,o),t!==null&&(jt(t,i,o,s),Gl(t,i,o)),o}function Lu(t){if(t=t.current,!t.child)return null;switch(t.child.tag){case 5:return t.child.stateNode;default:return t.child.stateNode}}function _y(t,e){if(t=t.memoizedState,t!==null&&t.dehydrated!==null){var n=t.retryLane;t.retryLane=n!==0&&n<e?n:e}}function Em(t,e){_y(t,e),(t=t.alternate)&&_y(t,e)}function YP(){return null}var aE=typeof reportError=="function"?reportError:function(t){console.error(t)};function Tm(t){this._internalRoot=t}Ac.prototype.render=Tm.prototype.render=function(t){var e=this._internalRoot;if(e===null)throw Error(P(409));Sc(t,e,null,null)};Ac.prototype.unmount=Tm.prototype.unmount=function(){var t=this._internalRoot;if(t!==null){this._internalRoot=null;var e=t.containerInfo;si(function(){Sc(null,t,null,null)}),e[Tn]=null}};function Ac(t){this._internalRoot=t}Ac.prototype.unstable_scheduleHydration=function(t){if(t){var e=Vw();t={blockedOn:null,target:t,priority:e};for(var n=0;n<Bn.length&&e!==0&&e<Bn[n].priority;n++);Bn.splice(n,0,t),n===0&&$w(t)}};function Im(t){return!(!t||t.nodeType!==1&&t.nodeType!==9&&t.nodeType!==11)}function kc(t){return!(!t||t.nodeType!==1&&t.nodeType!==9&&t.nodeType!==11&&(t.nodeType!==8||t.nodeValue!==" react-mount-point-unstable "))}function wy(){}function XP(t,e,n,r,i){if(i){if(typeof r=="function"){var s=r;r=function(){var u=Lu(o);s.call(u)}}var o=oE(e,r,t,0,null,!1,!1,"",wy);return t._reactRootContainer=o,t[Tn]=o.current,No(t.nodeType===8?t.parentNode:t),si(),o}for(;i=t.lastChild;)t.removeChild(i);if(typeof r=="function"){var a=r;r=function(){var u=Lu(l);a.call(u)}}var l=wm(t,0,!1,null,null,!1,!1,"",wy);return t._reactRootContainer=l,t[Tn]=l.current,No(t.nodeType===8?t.parentNode:t),si(function(){Sc(e,l,n,r)}),l}function Pc(t,e,n,r,i){var s=n._reactRootContainer;if(s){var o=s;if(typeof i=="function"){var a=i;i=function(){var l=Lu(o);a.call(l)}}Sc(e,o,t,i)}else o=XP(n,e,t,i,r);return Lu(o)}Lw=function(t){switch(t.tag){case 3:var e=t.stateNode;if(e.current.memoizedState.isDehydrated){var n=Qs(e.pendingLanes);n!==0&&(zp(e,n|1),vt(e,Ie()),!(J&6)&&(ls=Ie()+500,Ar()))}break;case 13:si(function(){var r=In(t,1);if(r!==null){var i=lt();jt(r,t,1,i)}}),Em(t,1)}};Bp=function(t){if(t.tag===13){var e=In(t,134217728);if(e!==null){var n=lt();jt(e,t,134217728,n)}Em(t,134217728)}};Mw=function(t){if(t.tag===13){var e=or(t),n=In(t,e);if(n!==null){var r=lt();jt(n,t,e,r)}Em(t,e)}};Vw=function(){return ee};Fw=function(t,e){var n=ee;try{return ee=t,e()}finally{ee=n}};Yh=function(t,e,n){switch(e){case"input":if(Bh(t,n),e=n.name,n.type==="radio"&&e!=null){for(n=t;n.parentNode;)n=n.parentNode;for(n=n.querySelectorAll("input[name="+JSON.stringify(""+e)+'][type="radio"]'),e=0;e<n.length;e++){var r=n[e];if(r!==t&&r.form===t.form){var i=vc(r);if(!i)throw Error(P(90));mw(r),Bh(r,i)}}}break;case"textarea":vw(t,n);break;case"select":e=n.value,e!=null&&Hi(t,!!n.multiple,e,!1)}};Sw=gm;Aw=si;var JP={usingClientEntryPoint:!1,Events:[ya,Ni,vc,Tw,Iw,gm]},Bs={findFiberByHostInstance:zr,bundleType:0,version:"18.2.0",rendererPackageName:"react-dom"},ZP={bundleType:Bs.bundleType,version:Bs.version,rendererPackageName:Bs.rendererPackageName,rendererConfig:Bs.rendererConfig,overrideHookState:null,overrideHookStateDeletePath:null,overrideHookStateRenamePath:null,overrideProps:null,overridePropsDeletePath:null,overridePropsRenamePath:null,setErrorHandler:null,setSuspenseHandler:null,scheduleUpdate:null,currentDispatcherRef:xn.ReactCurrentDispatcher,findHostInstanceByFiber:function(t){return t=Cw(t),t===null?null:t.stateNode},findFiberByHostInstance:Bs.findFiberByHostInstance||YP,findHostInstancesForRefresh:null,scheduleRefresh:null,scheduleRoot:null,setRefreshHandler:null,getCurrentFiber:null,reconcilerVersion:"18.2.0-next-9e3b772b8-20220608"};if(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__<"u"){var _l=__REACT_DEVTOOLS_GLOBAL_HOOK__;if(!_l.isDisabled&&_l.supportsFiber)try{dc=_l.inject(ZP),nn=_l}catch{}}At.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED=JP;At.createPortal=function(t,e){var n=2<arguments.length&&arguments[2]!==void 0?arguments[2]:null;if(!Im(e))throw Error(P(200));return QP(t,e,null,n)};At.createRoot=function(t,e){if(!Im(t))throw Error(P(299));var n=!1,r="",i=aE;return e!=null&&(e.unstable_strictMode===!0&&(n=!0),e.identifierPrefix!==void 0&&(r=e.identifierPrefix),e.onRecoverableError!==void 0&&(i=e.onRecoverableError)),e=wm(t,1,!1,null,null,n,!1,r,i),t[Tn]=e.current,No(t.nodeType===8?t.parentNode:t),new Tm(e)};At.findDOMNode=function(t){if(t==null)return null;if(t.nodeType===1)return t;var e=t._reactInternals;if(e===void 0)throw typeof t.render=="function"?Error(P(188)):(t=Object.keys(t).join(","),Error(P(268,t)));return t=Cw(e),t=t===null?null:t.stateNode,t};At.flushSync=function(t){return si(t)};At.hydrate=function(t,e,n){if(!kc(e))throw Error(P(200));return Pc(null,t,e,!0,n)};At.hydrateRoot=function(t,e,n){if(!Im(t))throw Error(P(405));var r=n!=null&&n.hydratedSources||null,i=!1,s="",o=aE;if(n!=null&&(n.unstable_strictMode===!0&&(i=!0),n.identifierPrefix!==void 0&&(s=n.identifierPrefix),n.onRecoverableError!==void 0&&(o=n.onRecoverableError)),e=oE(e,null,t,1,n??null,i,!1,s,o),t[Tn]=e.current,No(t),r)for(t=0;t<r.length;t++)n=r[t],i=n._getVersion,i=i(n._source),e.mutableSourceEagerHydrationData==null?e.mutableSourceEagerHydrationData=[n,i]:e.mutableSourceEagerHydrationData.push(n,i);return new Ac(e)};At.render=function(t,e,n){if(!kc(e))throw Error(P(200));return Pc(null,t,e,!1,n)};At.unmountComponentAtNode=function(t){if(!kc(t))throw Error(P(40));return t._reactRootContainer?(si(function(){Pc(null,null,t,!1,function(){t._reactRootContainer=null,t[Tn]=null})}),!0):!1};At.unstable_batchedUpdates=gm;At.unstable_renderSubtreeIntoContainer=function(t,e,n,r){if(!kc(n))throw Error(P(200));if(t==null||t._reactInternals===void 0)throw Error(P(38));return Pc(t,e,n,!1,r)};At.version="18.2.0-next-9e3b772b8-20220608";function lE(){if(!(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__>"u"||typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE!="function"))try{__REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE(lE)}catch(t){console.error(t)}}lE(),ow.exports=At;var uE=ow.exports,Ey=uE;Mh.createRoot=Ey.createRoot,Mh.hydrateRoot=Ey.hydrateRoot;/**
 * @remix-run/router v1.15.0
 *
 * Copyright (c) Remix Software Inc.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE.md file in the root directory of this source tree.
 *
 * @license MIT
 */function jo(){return jo=Object.assign?Object.assign.bind():function(t){for(var e=1;e<arguments.length;e++){var n=arguments[e];for(var r in n)Object.prototype.hasOwnProperty.call(n,r)&&(t[r]=n[r])}return t},jo.apply(this,arguments)}var Xn;(function(t){t.Pop="POP",t.Push="PUSH",t.Replace="REPLACE"})(Xn||(Xn={}));const Ty="popstate";function eC(t){t===void 0&&(t={});function e(r,i){let{pathname:s,search:o,hash:a}=r.location;return Rd("",{pathname:s,search:o,hash:a},i.state&&i.state.usr||null,i.state&&i.state.key||"default")}function n(r,i){return typeof i=="string"?i:Mu(i)}return nC(e,n,null,t)}function Se(t,e){if(t===!1||t===null||typeof t>"u")throw new Error(e)}function Sm(t,e){if(!t){typeof console<"u"&&console.warn(e);try{throw new Error(e)}catch{}}}function tC(){return Math.random().toString(36).substr(2,8)}function Iy(t,e){return{usr:t.state,key:t.key,idx:e}}function Rd(t,e,n,r){return n===void 0&&(n=null),jo({pathname:typeof t=="string"?t:t.pathname,search:"",hash:""},typeof e=="string"?Is(e):e,{state:n,key:e&&e.key||r||tC()})}function Mu(t){let{pathname:e="/",search:n="",hash:r=""}=t;return n&&n!=="?"&&(e+=n.charAt(0)==="?"?n:"?"+n),r&&r!=="#"&&(e+=r.charAt(0)==="#"?r:"#"+r),e}function Is(t){let e={};if(t){let n=t.indexOf("#");n>=0&&(e.hash=t.substr(n),t=t.substr(0,n));let r=t.indexOf("?");r>=0&&(e.search=t.substr(r),t=t.substr(0,r)),t&&(e.pathname=t)}return e}function nC(t,e,n,r){r===void 0&&(r={});let{window:i=document.defaultView,v5Compat:s=!1}=r,o=i.history,a=Xn.Pop,l=null,u=c();u==null&&(u=0,o.replaceState(jo({},o.state,{idx:u}),""));function c(){return(o.state||{idx:null}).idx}function f(){a=Xn.Pop;let w=c(),m=w==null?null:w-u;u=w,l&&l({action:a,location:_.location,delta:m})}function h(w,m){a=Xn.Push;let d=Rd(_.location,w,m);n&&n(d,w),u=c()+1;let g=Iy(d,u),E=_.createHref(d);try{o.pushState(g,"",E)}catch(I){if(I instanceof DOMException&&I.name==="DataCloneError")throw I;i.location.assign(E)}s&&l&&l({action:a,location:_.location,delta:1})}function p(w,m){a=Xn.Replace;let d=Rd(_.location,w,m);n&&n(d,w),u=c();let g=Iy(d,u),E=_.createHref(d);o.replaceState(g,"",E),s&&l&&l({action:a,location:_.location,delta:0})}function y(w){let m=i.location.origin!=="null"?i.location.origin:i.location.href,d=typeof w=="string"?w:Mu(w);return Se(m,"No window.location.(origin|href) available to create URL for href: "+d),new URL(d,m)}let _={get action(){return a},get location(){return t(i,o)},listen(w){if(l)throw new Error("A history only accepts one active listener");return i.addEventListener(Ty,f),l=w,()=>{i.removeEventListener(Ty,f),l=null}},createHref(w){return e(i,w)},createURL:y,encodeLocation(w){let m=y(w);return{pathname:m.pathname,search:m.search,hash:m.hash}},push:h,replace:p,go(w){return o.go(w)}};return _}var Sy;(function(t){t.data="data",t.deferred="deferred",t.redirect="redirect",t.error="error"})(Sy||(Sy={}));function rC(t,e,n){n===void 0&&(n="/");let r=typeof e=="string"?Is(e):e,i=Am(r.pathname||"/",n);if(i==null)return null;let s=cE(t);iC(s);let o=null;for(let a=0;o==null&&a<s.length;++a)o=dC(s[a],gC(i));return o}function cE(t,e,n,r){e===void 0&&(e=[]),n===void 0&&(n=[]),r===void 0&&(r="");let i=(s,o,a)=>{let l={relativePath:a===void 0?s.path||"":a,caseSensitive:s.caseSensitive===!0,childrenIndex:o,route:s};l.relativePath.startsWith("/")&&(Se(l.relativePath.startsWith(r),'Absolute route path "'+l.relativePath+'" nested under path '+('"'+r+'" is not valid. An absolute child route path ')+"must start with the combined path of all its parent routes."),l.relativePath=l.relativePath.slice(r.length));let u=lr([r,l.relativePath]),c=n.concat(l);s.children&&s.children.length>0&&(Se(s.index!==!0,"Index routes must not have child routes. Please remove "+('all child routes from route path "'+u+'".')),cE(s.children,e,c,u)),!(s.path==null&&!s.index)&&e.push({path:u,score:fC(u,s.index),routesMeta:c})};return t.forEach((s,o)=>{var a;if(s.path===""||!((a=s.path)!=null&&a.includes("?")))i(s,o);else for(let l of fE(s.path))i(s,o,l)}),e}function fE(t){let e=t.split("/");if(e.length===0)return[];let[n,...r]=e,i=n.endsWith("?"),s=n.replace(/\?$/,"");if(r.length===0)return i?[s,""]:[s];let o=fE(r.join("/")),a=[];return a.push(...o.map(l=>l===""?s:[s,l].join("/"))),i&&a.push(...o),a.map(l=>t.startsWith("/")&&l===""?"/":l)}function iC(t){t.sort((e,n)=>e.score!==n.score?n.score-e.score:hC(e.routesMeta.map(r=>r.childrenIndex),n.routesMeta.map(r=>r.childrenIndex)))}const sC=/^:[\w-]+$/,oC=3,aC=2,lC=1,uC=10,cC=-2,Ay=t=>t==="*";function fC(t,e){let n=t.split("/"),r=n.length;return n.some(Ay)&&(r+=cC),e&&(r+=aC),n.filter(i=>!Ay(i)).reduce((i,s)=>i+(sC.test(s)?oC:s===""?lC:uC),r)}function hC(t,e){return t.length===e.length&&t.slice(0,-1).every((r,i)=>r===e[i])?t[t.length-1]-e[e.length-1]:0}function dC(t,e){let{routesMeta:n}=t,r={},i="/",s=[];for(let o=0;o<n.length;++o){let a=n[o],l=o===n.length-1,u=i==="/"?e:e.slice(i.length)||"/",c=pC({path:a.relativePath,caseSensitive:a.caseSensitive,end:l},u);if(!c)return null;Object.assign(r,c.params);let f=a.route;s.push({params:r,pathname:lr([i,c.pathname]),pathnameBase:EC(lr([i,c.pathnameBase])),route:f}),c.pathnameBase!=="/"&&(i=lr([i,c.pathnameBase]))}return s}function pC(t,e){typeof t=="string"&&(t={path:t,caseSensitive:!1,end:!0});let[n,r]=mC(t.path,t.caseSensitive,t.end),i=e.match(n);if(!i)return null;let s=i[0],o=s.replace(/(.)\/+$/,"$1"),a=i.slice(1);return{params:r.reduce((u,c,f)=>{let{paramName:h,isOptional:p}=c;if(h==="*"){let _=a[f]||"";o=s.slice(0,s.length-_.length).replace(/(.)\/+$/,"$1")}const y=a[f];return p&&!y?u[h]=void 0:u[h]=vC(y||"",h),u},{}),pathname:s,pathnameBase:o,pattern:t}}function mC(t,e,n){e===void 0&&(e=!1),n===void 0&&(n=!0),Sm(t==="*"||!t.endsWith("*")||t.endsWith("/*"),'Route path "'+t+'" will be treated as if it were '+('"'+t.replace(/\*$/,"/*")+'" because the `*` character must ')+"always follow a `/` in the pattern. To get rid of this warning, "+('please change the route path to "'+t.replace(/\*$/,"/*")+'".'));let r=[],i="^"+t.replace(/\/*\*?$/,"").replace(/^\/*/,"/").replace(/[\\.*+^${}|()[\]]/g,"\\$&").replace(/\/:([\w-]+)(\?)?/g,(o,a,l)=>(r.push({paramName:a,isOptional:l!=null}),l?"/?([^\\/]+)?":"/([^\\/]+)"));return t.endsWith("*")?(r.push({paramName:"*"}),i+=t==="*"||t==="/*"?"(.*)$":"(?:\\/(.+)|\\/*)$"):n?i+="\\/*$":t!==""&&t!=="/"&&(i+="(?:(?=\\/|$))"),[new RegExp(i,e?void 0:"i"),r]}function gC(t){try{return decodeURI(t)}catch(e){return Sm(!1,'The URL path "'+t+'" could not be decoded because it is is a malformed URL segment. This is probably due to a bad percent '+("encoding ("+e+").")),t}}function vC(t,e){try{return decodeURIComponent(t)}catch(n){return Sm(!1,'The value for the URL param "'+e+'" will not be decoded because'+(' the string "'+t+'" is a malformed URL segment. This is probably')+(" due to a bad percent encoding ("+n+").")),t}}function Am(t,e){if(e==="/")return t;if(!t.toLowerCase().startsWith(e.toLowerCase()))return null;let n=e.endsWith("/")?e.length-1:e.length,r=t.charAt(n);return r&&r!=="/"?null:t.slice(n)||"/"}function yC(t,e){e===void 0&&(e="/");let{pathname:n,search:r="",hash:i=""}=typeof t=="string"?Is(t):t;return{pathname:n?n.startsWith("/")?n:_C(n,e):e,search:TC(r),hash:IC(i)}}function _C(t,e){let n=e.replace(/\/+$/,"").split("/");return t.split("/").forEach(i=>{i===".."?n.length>1&&n.pop():i!=="."&&n.push(i)}),n.length>1?n.join("/"):"/"}function oh(t,e,n,r){return"Cannot include a '"+t+"' character in a manually specified "+("`to."+e+"` field ["+JSON.stringify(r)+"].  Please separate it out to the ")+("`to."+n+"` field. Alternatively you may provide the full path as ")+'a string in <Link to="..."> and the router will parse it for you.'}function wC(t){return t.filter((e,n)=>n===0||e.route.path&&e.route.path.length>0)}function km(t,e){let n=wC(t);return e?n.map((r,i)=>i===t.length-1?r.pathname:r.pathnameBase):n.map(r=>r.pathnameBase)}function Pm(t,e,n,r){r===void 0&&(r=!1);let i;typeof t=="string"?i=Is(t):(i=jo({},t),Se(!i.pathname||!i.pathname.includes("?"),oh("?","pathname","search",i)),Se(!i.pathname||!i.pathname.includes("#"),oh("#","pathname","hash",i)),Se(!i.search||!i.search.includes("#"),oh("#","search","hash",i)));let s=t===""||i.pathname==="",o=s?"/":i.pathname,a;if(o==null)a=n;else{let f=e.length-1;if(!r&&o.startsWith("..")){let h=o.split("/");for(;h[0]==="..";)h.shift(),f-=1;i.pathname=h.join("/")}a=f>=0?e[f]:"/"}let l=yC(i,a),u=o&&o!=="/"&&o.endsWith("/"),c=(s||o===".")&&n.endsWith("/");return!l.pathname.endsWith("/")&&(u||c)&&(l.pathname+="/"),l}const lr=t=>t.join("/").replace(/\/\/+/g,"/"),EC=t=>t.replace(/\/+$/,"").replace(/^\/*/,"/"),TC=t=>!t||t==="?"?"":t.startsWith("?")?t:"?"+t,IC=t=>!t||t==="#"?"":t.startsWith("#")?t:"#"+t;function SC(t){return t!=null&&typeof t.status=="number"&&typeof t.statusText=="string"&&typeof t.internal=="boolean"&&"data"in t}const hE=["post","put","patch","delete"];new Set(hE);const AC=["get",...hE];new Set(AC);/**
 * React Router v6.22.0
 *
 * Copyright (c) Remix Software Inc.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE.md file in the root directory of this source tree.
 *
 * @license MIT
 */function zo(){return zo=Object.assign?Object.assign.bind():function(t){for(var e=1;e<arguments.length;e++){var n=arguments[e];for(var r in n)Object.prototype.hasOwnProperty.call(n,r)&&(t[r]=n[r])}return t},zo.apply(this,arguments)}const Cm=A.createContext(null),kC=A.createContext(null),kr=A.createContext(null),Cc=A.createContext(null),Pr=A.createContext({outlet:null,matches:[],isDataRoute:!1}),dE=A.createContext(null);function PC(t,e){let{relative:n}=e===void 0?{}:e;Ss()||Se(!1);let{basename:r,navigator:i}=A.useContext(kr),{hash:s,pathname:o,search:a}=mE(t,{relative:n}),l=o;return r!=="/"&&(l=o==="/"?r:lr([r,o])),i.createHref({pathname:l,search:a,hash:s})}function Ss(){return A.useContext(Cc)!=null}function wa(){return Ss()||Se(!1),A.useContext(Cc).location}function pE(t){A.useContext(kr).static||A.useLayoutEffect(t)}function Rc(){let{isDataRoute:t}=A.useContext(Pr);return t?UC():CC()}function CC(){Ss()||Se(!1);let t=A.useContext(Cm),{basename:e,future:n,navigator:r}=A.useContext(kr),{matches:i}=A.useContext(Pr),{pathname:s}=wa(),o=JSON.stringify(km(i,n.v7_relativeSplatPath)),a=A.useRef(!1);return pE(()=>{a.current=!0}),A.useCallback(function(u,c){if(c===void 0&&(c={}),!a.current)return;if(typeof u=="number"){r.go(u);return}let f=Pm(u,JSON.parse(o),s,c.relative==="path");t==null&&e!=="/"&&(f.pathname=f.pathname==="/"?e:lr([e,f.pathname])),(c.replace?r.replace:r.push)(f,c.state,c)},[e,r,o,s,t])}function mE(t,e){let{relative:n}=e===void 0?{}:e,{future:r}=A.useContext(kr),{matches:i}=A.useContext(Pr),{pathname:s}=wa(),o=JSON.stringify(km(i,r.v7_relativeSplatPath));return A.useMemo(()=>Pm(t,JSON.parse(o),s,n==="path"),[t,o,s,n])}function RC(t,e){return bC(t,e)}function bC(t,e,n,r){Ss()||Se(!1);let{navigator:i}=A.useContext(kr),{matches:s}=A.useContext(Pr),o=s[s.length-1],a=o?o.params:{};o&&o.pathname;let l=o?o.pathnameBase:"/";o&&o.route;let u=wa(),c;if(e){var f;let w=typeof e=="string"?Is(e):e;l==="/"||(f=w.pathname)!=null&&f.startsWith(l)||Se(!1),c=w}else c=u;let h=c.pathname||"/",p=l==="/"?h:h.slice(l.length)||"/",y=rC(t,{pathname:p}),_=LC(y&&y.map(w=>Object.assign({},w,{params:Object.assign({},a,w.params),pathname:lr([l,i.encodeLocation?i.encodeLocation(w.pathname).pathname:w.pathname]),pathnameBase:w.pathnameBase==="/"?l:lr([l,i.encodeLocation?i.encodeLocation(w.pathnameBase).pathname:w.pathnameBase])})),s,n,r);return e&&_?A.createElement(Cc.Provider,{value:{location:zo({pathname:"/",search:"",hash:"",state:null,key:"default"},c),navigationType:Xn.Pop}},_):_}function xC(){let t=$C(),e=SC(t)?t.status+" "+t.statusText:t instanceof Error?t.message:JSON.stringify(t),n=t instanceof Error?t.stack:null,i={padding:"0.5rem",backgroundColor:"rgba(200,200,200, 0.5)"};return A.createElement(A.Fragment,null,A.createElement("h2",null,"Unexpected Application Error!"),A.createElement("h3",{style:{fontStyle:"italic"}},e),n?A.createElement("pre",{style:i},n):null,null)}const NC=A.createElement(xC,null);class OC extends A.Component{constructor(e){super(e),this.state={location:e.location,revalidation:e.revalidation,error:e.error}}static getDerivedStateFromError(e){return{error:e}}static getDerivedStateFromProps(e,n){return n.location!==e.location||n.revalidation!=="idle"&&e.revalidation==="idle"?{error:e.error,location:e.location,revalidation:e.revalidation}:{error:e.error!==void 0?e.error:n.error,location:n.location,revalidation:e.revalidation||n.revalidation}}componentDidCatch(e,n){console.error("React Router caught the following error during render",e,n)}render(){return this.state.error!==void 0?A.createElement(Pr.Provider,{value:this.props.routeContext},A.createElement(dE.Provider,{value:this.state.error,children:this.props.component})):this.props.children}}function DC(t){let{routeContext:e,match:n,children:r}=t,i=A.useContext(Cm);return i&&i.static&&i.staticContext&&(n.route.errorElement||n.route.ErrorBoundary)&&(i.staticContext._deepestRenderedBoundaryId=n.route.id),A.createElement(Pr.Provider,{value:e},r)}function LC(t,e,n,r){var i;if(e===void 0&&(e=[]),n===void 0&&(n=null),r===void 0&&(r=null),t==null){var s;if((s=n)!=null&&s.errors)t=n.matches;else return null}let o=t,a=(i=n)==null?void 0:i.errors;if(a!=null){let c=o.findIndex(f=>f.route.id&&(a==null?void 0:a[f.route.id]));c>=0||Se(!1),o=o.slice(0,Math.min(o.length,c+1))}let l=!1,u=-1;if(n&&r&&r.v7_partialHydration)for(let c=0;c<o.length;c++){let f=o[c];if((f.route.HydrateFallback||f.route.hydrateFallbackElement)&&(u=c),f.route.id){let{loaderData:h,errors:p}=n,y=f.route.loader&&h[f.route.id]===void 0&&(!p||p[f.route.id]===void 0);if(f.route.lazy||y){l=!0,u>=0?o=o.slice(0,u+1):o=[o[0]];break}}}return o.reduceRight((c,f,h)=>{let p,y=!1,_=null,w=null;n&&(p=a&&f.route.id?a[f.route.id]:void 0,_=f.route.errorElement||NC,l&&(u<0&&h===0?(jC("route-fallback",!1),y=!0,w=null):u===h&&(y=!0,w=f.route.hydrateFallbackElement||null)));let m=e.concat(o.slice(0,h+1)),d=()=>{let g;return p?g=_:y?g=w:f.route.Component?g=A.createElement(f.route.Component,null):f.route.element?g=f.route.element:g=c,A.createElement(DC,{match:f,routeContext:{outlet:c,matches:m,isDataRoute:n!=null},children:g})};return n&&(f.route.ErrorBoundary||f.route.errorElement||h===0)?A.createElement(OC,{location:n.location,revalidation:n.revalidation,component:_,error:p,children:d(),routeContext:{outlet:null,matches:m,isDataRoute:!0}}):d()},null)}var gE=function(t){return t.UseBlocker="useBlocker",t.UseRevalidator="useRevalidator",t.UseNavigateStable="useNavigate",t}(gE||{}),Vu=function(t){return t.UseBlocker="useBlocker",t.UseLoaderData="useLoaderData",t.UseActionData="useActionData",t.UseRouteError="useRouteError",t.UseNavigation="useNavigation",t.UseRouteLoaderData="useRouteLoaderData",t.UseMatches="useMatches",t.UseRevalidator="useRevalidator",t.UseNavigateStable="useNavigate",t.UseRouteId="useRouteId",t}(Vu||{});function MC(t){let e=A.useContext(Cm);return e||Se(!1),e}function VC(t){let e=A.useContext(kC);return e||Se(!1),e}function FC(t){let e=A.useContext(Pr);return e||Se(!1),e}function vE(t){let e=FC(),n=e.matches[e.matches.length-1];return n.route.id||Se(!1),n.route.id}function $C(){var t;let e=A.useContext(dE),n=VC(Vu.UseRouteError),r=vE(Vu.UseRouteError);return e!==void 0?e:(t=n.errors)==null?void 0:t[r]}function UC(){let{router:t}=MC(gE.UseNavigateStable),e=vE(Vu.UseNavigateStable),n=A.useRef(!1);return pE(()=>{n.current=!0}),A.useCallback(function(i,s){s===void 0&&(s={}),n.current&&(typeof i=="number"?t.navigate(i):t.navigate(i,zo({fromRouteId:e},s)))},[t,e])}const ky={};function jC(t,e,n){!e&&!ky[t]&&(ky[t]=!0)}function zC(t){let{to:e,replace:n,state:r,relative:i}=t;Ss()||Se(!1);let{future:s,static:o}=A.useContext(kr),{matches:a}=A.useContext(Pr),{pathname:l}=wa(),u=Rc(),c=Pm(e,km(a,s.v7_relativeSplatPath),l,i==="path"),f=JSON.stringify(c);return A.useEffect(()=>u(JSON.parse(f),{replace:n,state:r,relative:i}),[u,f,i,n,r]),null}function Ii(t){Se(!1)}function BC(t){let{basename:e="/",children:n=null,location:r,navigationType:i=Xn.Pop,navigator:s,static:o=!1,future:a}=t;Ss()&&Se(!1);let l=e.replace(/^\/*/,"/"),u=A.useMemo(()=>({basename:l,navigator:s,static:o,future:zo({v7_relativeSplatPath:!1},a)}),[l,a,s,o]);typeof r=="string"&&(r=Is(r));let{pathname:c="/",search:f="",hash:h="",state:p=null,key:y="default"}=r,_=A.useMemo(()=>{let w=Am(c,l);return w==null?null:{location:{pathname:w,search:f,hash:h,state:p,key:y},navigationType:i}},[l,c,f,h,p,y,i]);return _==null?null:A.createElement(kr.Provider,{value:u},A.createElement(Cc.Provider,{children:n,value:_}))}function HC(t){let{children:e,location:n}=t;return RC(bd(e),n)}new Promise(()=>{});function bd(t,e){e===void 0&&(e=[]);let n=[];return A.Children.forEach(t,(r,i)=>{if(!A.isValidElement(r))return;let s=[...e,i];if(r.type===A.Fragment){n.push.apply(n,bd(r.props.children,s));return}r.type!==Ii&&Se(!1),!r.props.index||!r.props.children||Se(!1);let o={id:r.props.id||s.join("-"),caseSensitive:r.props.caseSensitive,element:r.props.element,Component:r.props.Component,index:r.props.index,path:r.props.path,loader:r.props.loader,action:r.props.action,errorElement:r.props.errorElement,ErrorBoundary:r.props.ErrorBoundary,hasErrorBoundary:r.props.ErrorBoundary!=null||r.props.errorElement!=null,shouldRevalidate:r.props.shouldRevalidate,handle:r.props.handle,lazy:r.props.lazy};r.props.children&&(o.children=bd(r.props.children,s)),n.push(o)}),n}/**
 * React Router DOM v6.22.0
 *
 * Copyright (c) Remix Software Inc.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE.md file in the root directory of this source tree.
 *
 * @license MIT
 */function xd(){return xd=Object.assign?Object.assign.bind():function(t){for(var e=1;e<arguments.length;e++){var n=arguments[e];for(var r in n)Object.prototype.hasOwnProperty.call(n,r)&&(t[r]=n[r])}return t},xd.apply(this,arguments)}function WC(t,e){if(t==null)return{};var n={},r=Object.keys(t),i,s;for(s=0;s<r.length;s++)i=r[s],!(e.indexOf(i)>=0)&&(n[i]=t[i]);return n}function qC(t){return!!(t.metaKey||t.altKey||t.ctrlKey||t.shiftKey)}function KC(t,e){return t.button===0&&(!e||e==="_self")&&!qC(t)}const GC=["onClick","relative","reloadDocument","replace","state","target","to","preventScrollReset","unstable_viewTransition"],QC="6";try{window.__reactRouterVersion=QC}catch{}const YC="startTransition",Py=HA[YC];function XC(t){let{basename:e,children:n,future:r,window:i}=t,s=A.useRef();s.current==null&&(s.current=eC({window:i,v5Compat:!0}));let o=s.current,[a,l]=A.useState({action:o.action,location:o.location}),{v7_startTransition:u}=r||{},c=A.useCallback(f=>{u&&Py?Py(()=>l(f)):l(f)},[l,u]);return A.useLayoutEffect(()=>o.listen(c),[o,c]),A.createElement(BC,{basename:e,children:n,location:a.location,navigationType:a.action,navigator:o,future:r})}const JC=typeof window<"u"&&typeof window.document<"u"&&typeof window.document.createElement<"u",ZC=/^(?:[a-z][a-z0-9+.-]*:|\/\/)/i,yE=A.forwardRef(function(e,n){let{onClick:r,relative:i,reloadDocument:s,replace:o,state:a,target:l,to:u,preventScrollReset:c,unstable_viewTransition:f}=e,h=WC(e,GC),{basename:p}=A.useContext(kr),y,_=!1;if(typeof u=="string"&&ZC.test(u)&&(y=u,JC))try{let g=new URL(window.location.href),E=u.startsWith("//")?new URL(g.protocol+u):new URL(u),I=Am(E.pathname,p);E.origin===g.origin&&I!=null?u=I+E.search+E.hash:_=!0}catch{}let w=PC(u,{relative:i}),m=eR(u,{replace:o,state:a,target:l,preventScrollReset:c,relative:i,unstable_viewTransition:f});function d(g){r&&r(g),g.defaultPrevented||m(g)}return A.createElement("a",xd({},h,{href:y||w,onClick:_||s?r:d,ref:n,target:l}))});var Cy;(function(t){t.UseScrollRestoration="useScrollRestoration",t.UseSubmit="useSubmit",t.UseSubmitFetcher="useSubmitFetcher",t.UseFetcher="useFetcher",t.useViewTransitionState="useViewTransitionState"})(Cy||(Cy={}));var Ry;(function(t){t.UseFetcher="useFetcher",t.UseFetchers="useFetchers",t.UseScrollRestoration="useScrollRestoration"})(Ry||(Ry={}));function eR(t,e){let{target:n,replace:r,state:i,preventScrollReset:s,relative:o,unstable_viewTransition:a}=e===void 0?{}:e,l=Rc(),u=wa(),c=mE(t,{relative:o});return A.useCallback(f=>{if(KC(f,n)){f.preventDefault();let h=r!==void 0?r:Mu(u)===Mu(c);l(t,{replace:h,state:i,preventScrollReset:s,relative:o,unstable_viewTransition:a})}},[u,l,c,r,i,n,t,s,o,a])}var by={};/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const _E=function(t){const e=[];let n=0;for(let r=0;r<t.length;r++){let i=t.charCodeAt(r);i<128?e[n++]=i:i<2048?(e[n++]=i>>6|192,e[n++]=i&63|128):(i&64512)===55296&&r+1<t.length&&(t.charCodeAt(r+1)&64512)===56320?(i=65536+((i&1023)<<10)+(t.charCodeAt(++r)&1023),e[n++]=i>>18|240,e[n++]=i>>12&63|128,e[n++]=i>>6&63|128,e[n++]=i&63|128):(e[n++]=i>>12|224,e[n++]=i>>6&63|128,e[n++]=i&63|128)}return e},tR=function(t){const e=[];let n=0,r=0;for(;n<t.length;){const i=t[n++];if(i<128)e[r++]=String.fromCharCode(i);else if(i>191&&i<224){const s=t[n++];e[r++]=String.fromCharCode((i&31)<<6|s&63)}else if(i>239&&i<365){const s=t[n++],o=t[n++],a=t[n++],l=((i&7)<<18|(s&63)<<12|(o&63)<<6|a&63)-65536;e[r++]=String.fromCharCode(55296+(l>>10)),e[r++]=String.fromCharCode(56320+(l&1023))}else{const s=t[n++],o=t[n++];e[r++]=String.fromCharCode((i&15)<<12|(s&63)<<6|o&63)}}return e.join("")},wE={byteToCharMap_:null,charToByteMap_:null,byteToCharMapWebSafe_:null,charToByteMapWebSafe_:null,ENCODED_VALS_BASE:"ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789",get ENCODED_VALS(){return this.ENCODED_VALS_BASE+"+/="},get ENCODED_VALS_WEBSAFE(){return this.ENCODED_VALS_BASE+"-_."},HAS_NATIVE_SUPPORT:typeof atob=="function",encodeByteArray(t,e){if(!Array.isArray(t))throw Error("encodeByteArray takes an array as a parameter");this.init_();const n=e?this.byteToCharMapWebSafe_:this.byteToCharMap_,r=[];for(let i=0;i<t.length;i+=3){const s=t[i],o=i+1<t.length,a=o?t[i+1]:0,l=i+2<t.length,u=l?t[i+2]:0,c=s>>2,f=(s&3)<<4|a>>4;let h=(a&15)<<2|u>>6,p=u&63;l||(p=64,o||(h=64)),r.push(n[c],n[f],n[h],n[p])}return r.join("")},encodeString(t,e){return this.HAS_NATIVE_SUPPORT&&!e?btoa(t):this.encodeByteArray(_E(t),e)},decodeString(t,e){return this.HAS_NATIVE_SUPPORT&&!e?atob(t):tR(this.decodeStringToByteArray(t,e))},decodeStringToByteArray(t,e){this.init_();const n=e?this.charToByteMapWebSafe_:this.charToByteMap_,r=[];for(let i=0;i<t.length;){const s=n[t.charAt(i++)],a=i<t.length?n[t.charAt(i)]:0;++i;const u=i<t.length?n[t.charAt(i)]:64;++i;const f=i<t.length?n[t.charAt(i)]:64;if(++i,s==null||a==null||u==null||f==null)throw new nR;const h=s<<2|a>>4;if(r.push(h),u!==64){const p=a<<4&240|u>>2;if(r.push(p),f!==64){const y=u<<6&192|f;r.push(y)}}}return r},init_(){if(!this.byteToCharMap_){this.byteToCharMap_={},this.charToByteMap_={},this.byteToCharMapWebSafe_={},this.charToByteMapWebSafe_={};for(let t=0;t<this.ENCODED_VALS.length;t++)this.byteToCharMap_[t]=this.ENCODED_VALS.charAt(t),this.charToByteMap_[this.byteToCharMap_[t]]=t,this.byteToCharMapWebSafe_[t]=this.ENCODED_VALS_WEBSAFE.charAt(t),this.charToByteMapWebSafe_[this.byteToCharMapWebSafe_[t]]=t,t>=this.ENCODED_VALS_BASE.length&&(this.charToByteMap_[this.ENCODED_VALS_WEBSAFE.charAt(t)]=t,this.charToByteMapWebSafe_[this.ENCODED_VALS.charAt(t)]=t)}}};class nR extends Error{constructor(){super(...arguments),this.name="DecodeBase64StringError"}}const rR=function(t){const e=_E(t);return wE.encodeByteArray(e,!0)},Fu=function(t){return rR(t).replace(/\./g,"")},EE=function(t){try{return wE.decodeString(t,!0)}catch(e){console.error("base64Decode failed: ",e)}return null};/**
 * @license
 * Copyright 2022 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function iR(){if(typeof self<"u")return self;if(typeof window<"u")return window;if(typeof global<"u")return global;throw new Error("Unable to locate global object.")}/**
 * @license
 * Copyright 2022 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const sR=()=>iR().__FIREBASE_DEFAULTS__,oR=()=>{if(typeof process>"u"||typeof by>"u")return;const t=by.__FIREBASE_DEFAULTS__;if(t)return JSON.parse(t)},aR=()=>{if(typeof document>"u")return;let t;try{t=document.cookie.match(/__FIREBASE_DEFAULTS__=([^;]+)/)}catch{return}const e=t&&EE(t[1]);return e&&JSON.parse(e)},bc=()=>{try{return sR()||oR()||aR()}catch(t){console.info(`Unable to get __FIREBASE_DEFAULTS__ due to: ${t}`);return}},TE=t=>{var e,n;return(n=(e=bc())===null||e===void 0?void 0:e.emulatorHosts)===null||n===void 0?void 0:n[t]},lR=t=>{const e=TE(t);if(!e)return;const n=e.lastIndexOf(":");if(n<=0||n+1===e.length)throw new Error(`Invalid host ${e} with no separate hostname and port!`);const r=parseInt(e.substring(n+1),10);return e[0]==="["?[e.substring(1,n-1),r]:[e.substring(0,n),r]},IE=()=>{var t;return(t=bc())===null||t===void 0?void 0:t.config},SE=t=>{var e;return(e=bc())===null||e===void 0?void 0:e[`_${t}`]};/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class uR{constructor(){this.reject=()=>{},this.resolve=()=>{},this.promise=new Promise((e,n)=>{this.resolve=e,this.reject=n})}wrapCallback(e){return(n,r)=>{n?this.reject(n):this.resolve(r),typeof e=="function"&&(this.promise.catch(()=>{}),e.length===1?e(n):e(n,r))}}}/**
 * @license
 * Copyright 2021 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function cR(t,e){if(t.uid)throw new Error('The "uid" field is no longer supported by mockUserToken. Please use "sub" instead for Firebase Auth User ID.');const n={alg:"none",type:"JWT"},r=e||"demo-project",i=t.iat||0,s=t.sub||t.user_id;if(!s)throw new Error("mockUserToken must contain 'sub' or 'user_id' field!");const o=Object.assign({iss:`https://securetoken.google.com/${r}`,aud:r,iat:i,exp:i+3600,auth_time:i,sub:s,user_id:s,firebase:{sign_in_provider:"custom",identities:{}}},t);return[Fu(JSON.stringify(n)),Fu(JSON.stringify(o)),""].join(".")}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Re(){return typeof navigator<"u"&&typeof navigator.userAgent=="string"?navigator.userAgent:""}function fR(){return typeof window<"u"&&!!(window.cordova||window.phonegap||window.PhoneGap)&&/ios|iphone|ipod|ipad|android|blackberry|iemobile/i.test(Re())}function hR(){var t;const e=(t=bc())===null||t===void 0?void 0:t.forceEnvironment;if(e==="node")return!0;if(e==="browser")return!1;try{return Object.prototype.toString.call(global.process)==="[object process]"}catch{return!1}}function dR(){const t=typeof chrome=="object"?chrome.runtime:typeof browser=="object"?browser.runtime:void 0;return typeof t=="object"&&t.id!==void 0}function pR(){return typeof navigator=="object"&&navigator.product==="ReactNative"}function mR(){const t=Re();return t.indexOf("MSIE ")>=0||t.indexOf("Trident/")>=0}function gR(){return!hR()&&!!navigator.userAgent&&navigator.userAgent.includes("Safari")&&!navigator.userAgent.includes("Chrome")}function AE(){try{return typeof indexedDB=="object"}catch{return!1}}function vR(){return new Promise((t,e)=>{try{let n=!0;const r="validate-browser-context-for-indexeddb-analytics-module",i=self.indexedDB.open(r);i.onsuccess=()=>{i.result.close(),n||self.indexedDB.deleteDatabase(r),t(!0)},i.onupgradeneeded=()=>{n=!1},i.onerror=()=>{var s;e(((s=i.error)===null||s===void 0?void 0:s.message)||"")}}catch(n){e(n)}})}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const yR="FirebaseError";class Nn extends Error{constructor(e,n,r){super(n),this.code=e,this.customData=r,this.name=yR,Object.setPrototypeOf(this,Nn.prototype),Error.captureStackTrace&&Error.captureStackTrace(this,Ea.prototype.create)}}class Ea{constructor(e,n,r){this.service=e,this.serviceName=n,this.errors=r}create(e,...n){const r=n[0]||{},i=`${this.service}/${e}`,s=this.errors[e],o=s?_R(s,r):"Error",a=`${this.serviceName}: ${o} (${i}).`;return new Nn(i,a,r)}}function _R(t,e){return t.replace(wR,(n,r)=>{const i=e[r];return i!=null?String(i):`<${r}?>`})}const wR=/\{\$([^}]+)}/g;function ER(t){for(const e in t)if(Object.prototype.hasOwnProperty.call(t,e))return!1;return!0}function $u(t,e){if(t===e)return!0;const n=Object.keys(t),r=Object.keys(e);for(const i of n){if(!r.includes(i))return!1;const s=t[i],o=e[i];if(xy(s)&&xy(o)){if(!$u(s,o))return!1}else if(s!==o)return!1}for(const i of r)if(!n.includes(i))return!1;return!0}function xy(t){return t!==null&&typeof t=="object"}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Ta(t){const e=[];for(const[n,r]of Object.entries(t))Array.isArray(r)?r.forEach(i=>{e.push(encodeURIComponent(n)+"="+encodeURIComponent(i))}):e.push(encodeURIComponent(n)+"="+encodeURIComponent(r));return e.length?"&"+e.join("&"):""}function Xs(t){const e={};return t.replace(/^\?/,"").split("&").forEach(r=>{if(r){const[i,s]=r.split("=");e[decodeURIComponent(i)]=decodeURIComponent(s)}}),e}function Js(t){const e=t.indexOf("?");if(!e)return"";const n=t.indexOf("#",e);return t.substring(e,n>0?n:void 0)}function TR(t,e){const n=new IR(t,e);return n.subscribe.bind(n)}class IR{constructor(e,n){this.observers=[],this.unsubscribes=[],this.observerCount=0,this.task=Promise.resolve(),this.finalized=!1,this.onNoObservers=n,this.task.then(()=>{e(this)}).catch(r=>{this.error(r)})}next(e){this.forEachObserver(n=>{n.next(e)})}error(e){this.forEachObserver(n=>{n.error(e)}),this.close(e)}complete(){this.forEachObserver(e=>{e.complete()}),this.close()}subscribe(e,n,r){let i;if(e===void 0&&n===void 0&&r===void 0)throw new Error("Missing Observer.");SR(e,["next","error","complete"])?i=e:i={next:e,error:n,complete:r},i.next===void 0&&(i.next=ah),i.error===void 0&&(i.error=ah),i.complete===void 0&&(i.complete=ah);const s=this.unsubscribeOne.bind(this,this.observers.length);return this.finalized&&this.task.then(()=>{try{this.finalError?i.error(this.finalError):i.complete()}catch{}}),this.observers.push(i),s}unsubscribeOne(e){this.observers===void 0||this.observers[e]===void 0||(delete this.observers[e],this.observerCount-=1,this.observerCount===0&&this.onNoObservers!==void 0&&this.onNoObservers(this))}forEachObserver(e){if(!this.finalized)for(let n=0;n<this.observers.length;n++)this.sendOne(n,e)}sendOne(e,n){this.task.then(()=>{if(this.observers!==void 0&&this.observers[e]!==void 0)try{n(this.observers[e])}catch(r){typeof console<"u"&&console.error&&console.error(r)}})}close(e){this.finalized||(this.finalized=!0,e!==void 0&&(this.finalError=e),this.task.then(()=>{this.observers=void 0,this.onNoObservers=void 0}))}}function SR(t,e){if(typeof t!="object"||t===null)return!1;for(const n of e)if(n in t&&typeof t[n]=="function")return!0;return!1}function ah(){}/**
 * @license
 * Copyright 2021 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Oe(t){return t&&t._delegate?t._delegate:t}class oi{constructor(e,n,r){this.name=e,this.instanceFactory=n,this.type=r,this.multipleInstances=!1,this.serviceProps={},this.instantiationMode="LAZY",this.onInstanceCreated=null}setInstantiationMode(e){return this.instantiationMode=e,this}setMultipleInstances(e){return this.multipleInstances=e,this}setServiceProps(e){return this.serviceProps=e,this}setInstanceCreatedCallback(e){return this.onInstanceCreated=e,this}}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Ur="[DEFAULT]";/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class AR{constructor(e,n){this.name=e,this.container=n,this.component=null,this.instances=new Map,this.instancesDeferred=new Map,this.instancesOptions=new Map,this.onInitCallbacks=new Map}get(e){const n=this.normalizeInstanceIdentifier(e);if(!this.instancesDeferred.has(n)){const r=new uR;if(this.instancesDeferred.set(n,r),this.isInitialized(n)||this.shouldAutoInitialize())try{const i=this.getOrInitializeService({instanceIdentifier:n});i&&r.resolve(i)}catch{}}return this.instancesDeferred.get(n).promise}getImmediate(e){var n;const r=this.normalizeInstanceIdentifier(e==null?void 0:e.identifier),i=(n=e==null?void 0:e.optional)!==null&&n!==void 0?n:!1;if(this.isInitialized(r)||this.shouldAutoInitialize())try{return this.getOrInitializeService({instanceIdentifier:r})}catch(s){if(i)return null;throw s}else{if(i)return null;throw Error(`Service ${this.name} is not available`)}}getComponent(){return this.component}setComponent(e){if(e.name!==this.name)throw Error(`Mismatching Component ${e.name} for Provider ${this.name}.`);if(this.component)throw Error(`Component for ${this.name} has already been provided`);if(this.component=e,!!this.shouldAutoInitialize()){if(PR(e))try{this.getOrInitializeService({instanceIdentifier:Ur})}catch{}for(const[n,r]of this.instancesDeferred.entries()){const i=this.normalizeInstanceIdentifier(n);try{const s=this.getOrInitializeService({instanceIdentifier:i});r.resolve(s)}catch{}}}}clearInstance(e=Ur){this.instancesDeferred.delete(e),this.instancesOptions.delete(e),this.instances.delete(e)}async delete(){const e=Array.from(this.instances.values());await Promise.all([...e.filter(n=>"INTERNAL"in n).map(n=>n.INTERNAL.delete()),...e.filter(n=>"_delete"in n).map(n=>n._delete())])}isComponentSet(){return this.component!=null}isInitialized(e=Ur){return this.instances.has(e)}getOptions(e=Ur){return this.instancesOptions.get(e)||{}}initialize(e={}){const{options:n={}}=e,r=this.normalizeInstanceIdentifier(e.instanceIdentifier);if(this.isInitialized(r))throw Error(`${this.name}(${r}) has already been initialized`);if(!this.isComponentSet())throw Error(`Component ${this.name} has not been registered yet`);const i=this.getOrInitializeService({instanceIdentifier:r,options:n});for(const[s,o]of this.instancesDeferred.entries()){const a=this.normalizeInstanceIdentifier(s);r===a&&o.resolve(i)}return i}onInit(e,n){var r;const i=this.normalizeInstanceIdentifier(n),s=(r=this.onInitCallbacks.get(i))!==null&&r!==void 0?r:new Set;s.add(e),this.onInitCallbacks.set(i,s);const o=this.instances.get(i);return o&&e(o,i),()=>{s.delete(e)}}invokeOnInitCallbacks(e,n){const r=this.onInitCallbacks.get(n);if(r)for(const i of r)try{i(e,n)}catch{}}getOrInitializeService({instanceIdentifier:e,options:n={}}){let r=this.instances.get(e);if(!r&&this.component&&(r=this.component.instanceFactory(this.container,{instanceIdentifier:kR(e),options:n}),this.instances.set(e,r),this.instancesOptions.set(e,n),this.invokeOnInitCallbacks(r,e),this.component.onInstanceCreated))try{this.component.onInstanceCreated(this.container,e,r)}catch{}return r||null}normalizeInstanceIdentifier(e=Ur){return this.component?this.component.multipleInstances?e:Ur:e}shouldAutoInitialize(){return!!this.component&&this.component.instantiationMode!=="EXPLICIT"}}function kR(t){return t===Ur?void 0:t}function PR(t){return t.instantiationMode==="EAGER"}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class CR{constructor(e){this.name=e,this.providers=new Map}addComponent(e){const n=this.getProvider(e.name);if(n.isComponentSet())throw new Error(`Component ${e.name} has already been registered with ${this.name}`);n.setComponent(e)}addOrOverwriteComponent(e){this.getProvider(e.name).isComponentSet()&&this.providers.delete(e.name),this.addComponent(e)}getProvider(e){if(this.providers.has(e))return this.providers.get(e);const n=new AR(e,this);return this.providers.set(e,n),n}getProviders(){return Array.from(this.providers.values())}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */var Y;(function(t){t[t.DEBUG=0]="DEBUG",t[t.VERBOSE=1]="VERBOSE",t[t.INFO=2]="INFO",t[t.WARN=3]="WARN",t[t.ERROR=4]="ERROR",t[t.SILENT=5]="SILENT"})(Y||(Y={}));const RR={debug:Y.DEBUG,verbose:Y.VERBOSE,info:Y.INFO,warn:Y.WARN,error:Y.ERROR,silent:Y.SILENT},bR=Y.INFO,xR={[Y.DEBUG]:"log",[Y.VERBOSE]:"log",[Y.INFO]:"info",[Y.WARN]:"warn",[Y.ERROR]:"error"},NR=(t,e,...n)=>{if(e<t.logLevel)return;const r=new Date().toISOString(),i=xR[e];if(i)console[i](`[${r}]  ${t.name}:`,...n);else throw new Error(`Attempted to log a message with an invalid logType (value: ${e})`)};class Rm{constructor(e){this.name=e,this._logLevel=bR,this._logHandler=NR,this._userLogHandler=null}get logLevel(){return this._logLevel}set logLevel(e){if(!(e in Y))throw new TypeError(`Invalid value "${e}" assigned to \`logLevel\``);this._logLevel=e}setLogLevel(e){this._logLevel=typeof e=="string"?RR[e]:e}get logHandler(){return this._logHandler}set logHandler(e){if(typeof e!="function")throw new TypeError("Value assigned to `logHandler` must be a function");this._logHandler=e}get userLogHandler(){return this._userLogHandler}set userLogHandler(e){this._userLogHandler=e}debug(...e){this._userLogHandler&&this._userLogHandler(this,Y.DEBUG,...e),this._logHandler(this,Y.DEBUG,...e)}log(...e){this._userLogHandler&&this._userLogHandler(this,Y.VERBOSE,...e),this._logHandler(this,Y.VERBOSE,...e)}info(...e){this._userLogHandler&&this._userLogHandler(this,Y.INFO,...e),this._logHandler(this,Y.INFO,...e)}warn(...e){this._userLogHandler&&this._userLogHandler(this,Y.WARN,...e),this._logHandler(this,Y.WARN,...e)}error(...e){this._userLogHandler&&this._userLogHandler(this,Y.ERROR,...e),this._logHandler(this,Y.ERROR,...e)}}const OR=(t,e)=>e.some(n=>t instanceof n);let Ny,Oy;function DR(){return Ny||(Ny=[IDBDatabase,IDBObjectStore,IDBIndex,IDBCursor,IDBTransaction])}function LR(){return Oy||(Oy=[IDBCursor.prototype.advance,IDBCursor.prototype.continue,IDBCursor.prototype.continuePrimaryKey])}const kE=new WeakMap,Nd=new WeakMap,PE=new WeakMap,lh=new WeakMap,bm=new WeakMap;function MR(t){const e=new Promise((n,r)=>{const i=()=>{t.removeEventListener("success",s),t.removeEventListener("error",o)},s=()=>{n(ur(t.result)),i()},o=()=>{r(t.error),i()};t.addEventListener("success",s),t.addEventListener("error",o)});return e.then(n=>{n instanceof IDBCursor&&kE.set(n,t)}).catch(()=>{}),bm.set(e,t),e}function VR(t){if(Nd.has(t))return;const e=new Promise((n,r)=>{const i=()=>{t.removeEventListener("complete",s),t.removeEventListener("error",o),t.removeEventListener("abort",o)},s=()=>{n(),i()},o=()=>{r(t.error||new DOMException("AbortError","AbortError")),i()};t.addEventListener("complete",s),t.addEventListener("error",o),t.addEventListener("abort",o)});Nd.set(t,e)}let Od={get(t,e,n){if(t instanceof IDBTransaction){if(e==="done")return Nd.get(t);if(e==="objectStoreNames")return t.objectStoreNames||PE.get(t);if(e==="store")return n.objectStoreNames[1]?void 0:n.objectStore(n.objectStoreNames[0])}return ur(t[e])},set(t,e,n){return t[e]=n,!0},has(t,e){return t instanceof IDBTransaction&&(e==="done"||e==="store")?!0:e in t}};function FR(t){Od=t(Od)}function $R(t){return t===IDBDatabase.prototype.transaction&&!("objectStoreNames"in IDBTransaction.prototype)?function(e,...n){const r=t.call(uh(this),e,...n);return PE.set(r,e.sort?e.sort():[e]),ur(r)}:LR().includes(t)?function(...e){return t.apply(uh(this),e),ur(kE.get(this))}:function(...e){return ur(t.apply(uh(this),e))}}function UR(t){return typeof t=="function"?$R(t):(t instanceof IDBTransaction&&VR(t),OR(t,DR())?new Proxy(t,Od):t)}function ur(t){if(t instanceof IDBRequest)return MR(t);if(lh.has(t))return lh.get(t);const e=UR(t);return e!==t&&(lh.set(t,e),bm.set(e,t)),e}const uh=t=>bm.get(t);function jR(t,e,{blocked:n,upgrade:r,blocking:i,terminated:s}={}){const o=indexedDB.open(t,e),a=ur(o);return r&&o.addEventListener("upgradeneeded",l=>{r(ur(o.result),l.oldVersion,l.newVersion,ur(o.transaction),l)}),n&&o.addEventListener("blocked",l=>n(l.oldVersion,l.newVersion,l)),a.then(l=>{s&&l.addEventListener("close",()=>s()),i&&l.addEventListener("versionchange",u=>i(u.oldVersion,u.newVersion,u))}).catch(()=>{}),a}const zR=["get","getKey","getAll","getAllKeys","count"],BR=["put","add","delete","clear"],ch=new Map;function Dy(t,e){if(!(t instanceof IDBDatabase&&!(e in t)&&typeof e=="string"))return;if(ch.get(e))return ch.get(e);const n=e.replace(/FromIndex$/,""),r=e!==n,i=BR.includes(n);if(!(n in(r?IDBIndex:IDBObjectStore).prototype)||!(i||zR.includes(n)))return;const s=async function(o,...a){const l=this.transaction(o,i?"readwrite":"readonly");let u=l.store;return r&&(u=u.index(a.shift())),(await Promise.all([u[n](...a),i&&l.done]))[0]};return ch.set(e,s),s}FR(t=>({...t,get:(e,n,r)=>Dy(e,n)||t.get(e,n,r),has:(e,n)=>!!Dy(e,n)||t.has(e,n)}));/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class HR{constructor(e){this.container=e}getPlatformInfoString(){return this.container.getProviders().map(n=>{if(WR(n)){const r=n.getImmediate();return`${r.library}/${r.version}`}else return null}).filter(n=>n).join(" ")}}function WR(t){const e=t.getComponent();return(e==null?void 0:e.type)==="VERSION"}const Dd="@firebase/app",Ly="0.9.27";/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const ai=new Rm("@firebase/app"),qR="@firebase/app-compat",KR="@firebase/analytics-compat",GR="@firebase/analytics",QR="@firebase/app-check-compat",YR="@firebase/app-check",XR="@firebase/auth",JR="@firebase/auth-compat",ZR="@firebase/database",e2="@firebase/database-compat",t2="@firebase/functions",n2="@firebase/functions-compat",r2="@firebase/installations",i2="@firebase/installations-compat",s2="@firebase/messaging",o2="@firebase/messaging-compat",a2="@firebase/performance",l2="@firebase/performance-compat",u2="@firebase/remote-config",c2="@firebase/remote-config-compat",f2="@firebase/storage",h2="@firebase/storage-compat",d2="@firebase/firestore",p2="@firebase/firestore-compat",m2="firebase",g2="10.8.0";/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Ld="[DEFAULT]",v2={[Dd]:"fire-core",[qR]:"fire-core-compat",[GR]:"fire-analytics",[KR]:"fire-analytics-compat",[YR]:"fire-app-check",[QR]:"fire-app-check-compat",[XR]:"fire-auth",[JR]:"fire-auth-compat",[ZR]:"fire-rtdb",[e2]:"fire-rtdb-compat",[t2]:"fire-fn",[n2]:"fire-fn-compat",[r2]:"fire-iid",[i2]:"fire-iid-compat",[s2]:"fire-fcm",[o2]:"fire-fcm-compat",[a2]:"fire-perf",[l2]:"fire-perf-compat",[u2]:"fire-rc",[c2]:"fire-rc-compat",[f2]:"fire-gcs",[h2]:"fire-gcs-compat",[d2]:"fire-fst",[p2]:"fire-fst-compat","fire-js":"fire-js",[m2]:"fire-js-all"};/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Uu=new Map,Md=new Map;function y2(t,e){try{t.container.addComponent(e)}catch(n){ai.debug(`Component ${e.name} failed to register with FirebaseApp ${t.name}`,n)}}function us(t){const e=t.name;if(Md.has(e))return ai.debug(`There were multiple attempts to register component ${e}.`),!1;Md.set(e,t);for(const n of Uu.values())y2(n,t);return!0}function xm(t,e){const n=t.container.getProvider("heartbeat").getImmediate({optional:!0});return n&&n.triggerHeartbeat(),t.container.getProvider(e)}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const _2={"no-app":"No Firebase App '{$appName}' has been created - call initializeApp() first","bad-app-name":"Illegal App name: '{$appName}","duplicate-app":"Firebase App named '{$appName}' already exists with different options or config","app-deleted":"Firebase App named '{$appName}' already deleted","no-options":"Need to provide options, when not being deployed to hosting via source.","invalid-app-argument":"firebase.{$appName}() takes either no argument or a Firebase App instance.","invalid-log-argument":"First argument to `onLog` must be null or a function.","idb-open":"Error thrown when opening IndexedDB. Original error: {$originalErrorMessage}.","idb-get":"Error thrown when reading from IndexedDB. Original error: {$originalErrorMessage}.","idb-set":"Error thrown when writing to IndexedDB. Original error: {$originalErrorMessage}.","idb-delete":"Error thrown when deleting from IndexedDB. Original error: {$originalErrorMessage}."},cr=new Ea("app","Firebase",_2);/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class w2{constructor(e,n,r){this._isDeleted=!1,this._options=Object.assign({},e),this._config=Object.assign({},n),this._name=n.name,this._automaticDataCollectionEnabled=n.automaticDataCollectionEnabled,this._container=r,this.container.addComponent(new oi("app",()=>this,"PUBLIC"))}get automaticDataCollectionEnabled(){return this.checkDestroyed(),this._automaticDataCollectionEnabled}set automaticDataCollectionEnabled(e){this.checkDestroyed(),this._automaticDataCollectionEnabled=e}get name(){return this.checkDestroyed(),this._name}get options(){return this.checkDestroyed(),this._options}get config(){return this.checkDestroyed(),this._config}get container(){return this._container}get isDeleted(){return this._isDeleted}set isDeleted(e){this._isDeleted=e}checkDestroyed(){if(this.isDeleted)throw cr.create("app-deleted",{appName:this._name})}}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const As=g2;function CE(t,e={}){let n=t;typeof e!="object"&&(e={name:e});const r=Object.assign({name:Ld,automaticDataCollectionEnabled:!1},e),i=r.name;if(typeof i!="string"||!i)throw cr.create("bad-app-name",{appName:String(i)});if(n||(n=IE()),!n)throw cr.create("no-options");const s=Uu.get(i);if(s){if($u(n,s.options)&&$u(r,s.config))return s;throw cr.create("duplicate-app",{appName:i})}const o=new CR(i);for(const l of Md.values())o.addComponent(l);const a=new w2(n,r,o);return Uu.set(i,a),a}function RE(t=Ld){const e=Uu.get(t);if(!e&&t===Ld&&IE())return CE();if(!e)throw cr.create("no-app",{appName:t});return e}function fr(t,e,n){var r;let i=(r=v2[t])!==null&&r!==void 0?r:t;n&&(i+=`-${n}`);const s=i.match(/\s|\//),o=e.match(/\s|\//);if(s||o){const a=[`Unable to register library "${i}" with version "${e}":`];s&&a.push(`library name "${i}" contains illegal characters (whitespace or "/")`),s&&o&&a.push("and"),o&&a.push(`version name "${e}" contains illegal characters (whitespace or "/")`),ai.warn(a.join(" "));return}us(new oi(`${i}-version`,()=>({library:i,version:e}),"VERSION"))}/**
 * @license
 * Copyright 2021 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const E2="firebase-heartbeat-database",T2=1,Bo="firebase-heartbeat-store";let fh=null;function bE(){return fh||(fh=jR(E2,T2,{upgrade:(t,e)=>{switch(e){case 0:try{t.createObjectStore(Bo)}catch(n){console.warn(n)}}}}).catch(t=>{throw cr.create("idb-open",{originalErrorMessage:t.message})})),fh}async function I2(t){try{const n=(await bE()).transaction(Bo),r=await n.objectStore(Bo).get(xE(t));return await n.done,r}catch(e){if(e instanceof Nn)ai.warn(e.message);else{const n=cr.create("idb-get",{originalErrorMessage:e==null?void 0:e.message});ai.warn(n.message)}}}async function My(t,e){try{const r=(await bE()).transaction(Bo,"readwrite");await r.objectStore(Bo).put(e,xE(t)),await r.done}catch(n){if(n instanceof Nn)ai.warn(n.message);else{const r=cr.create("idb-set",{originalErrorMessage:n==null?void 0:n.message});ai.warn(r.message)}}}function xE(t){return`${t.name}!${t.options.appId}`}/**
 * @license
 * Copyright 2021 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const S2=1024,A2=30*24*60*60*1e3;class k2{constructor(e){this.container=e,this._heartbeatsCache=null;const n=this.container.getProvider("app").getImmediate();this._storage=new C2(n),this._heartbeatsCachePromise=this._storage.read().then(r=>(this._heartbeatsCache=r,r))}async triggerHeartbeat(){var e,n;const i=this.container.getProvider("platform-logger").getImmediate().getPlatformInfoString(),s=Vy();if(!(((e=this._heartbeatsCache)===null||e===void 0?void 0:e.heartbeats)==null&&(this._heartbeatsCache=await this._heartbeatsCachePromise,((n=this._heartbeatsCache)===null||n===void 0?void 0:n.heartbeats)==null))&&!(this._heartbeatsCache.lastSentHeartbeatDate===s||this._heartbeatsCache.heartbeats.some(o=>o.date===s)))return this._heartbeatsCache.heartbeats.push({date:s,agent:i}),this._heartbeatsCache.heartbeats=this._heartbeatsCache.heartbeats.filter(o=>{const a=new Date(o.date).valueOf();return Date.now()-a<=A2}),this._storage.overwrite(this._heartbeatsCache)}async getHeartbeatsHeader(){var e;if(this._heartbeatsCache===null&&await this._heartbeatsCachePromise,((e=this._heartbeatsCache)===null||e===void 0?void 0:e.heartbeats)==null||this._heartbeatsCache.heartbeats.length===0)return"";const n=Vy(),{heartbeatsToSend:r,unsentEntries:i}=P2(this._heartbeatsCache.heartbeats),s=Fu(JSON.stringify({version:2,heartbeats:r}));return this._heartbeatsCache.lastSentHeartbeatDate=n,i.length>0?(this._heartbeatsCache.heartbeats=i,await this._storage.overwrite(this._heartbeatsCache)):(this._heartbeatsCache.heartbeats=[],this._storage.overwrite(this._heartbeatsCache)),s}}function Vy(){return new Date().toISOString().substring(0,10)}function P2(t,e=S2){const n=[];let r=t.slice();for(const i of t){const s=n.find(o=>o.agent===i.agent);if(s){if(s.dates.push(i.date),Fy(n)>e){s.dates.pop();break}}else if(n.push({agent:i.agent,dates:[i.date]}),Fy(n)>e){n.pop();break}r=r.slice(1)}return{heartbeatsToSend:n,unsentEntries:r}}class C2{constructor(e){this.app=e,this._canUseIndexedDBPromise=this.runIndexedDBEnvironmentCheck()}async runIndexedDBEnvironmentCheck(){return AE()?vR().then(()=>!0).catch(()=>!1):!1}async read(){if(await this._canUseIndexedDBPromise){const n=await I2(this.app);return n!=null&&n.heartbeats?n:{heartbeats:[]}}else return{heartbeats:[]}}async overwrite(e){var n;if(await this._canUseIndexedDBPromise){const i=await this.read();return My(this.app,{lastSentHeartbeatDate:(n=e.lastSentHeartbeatDate)!==null&&n!==void 0?n:i.lastSentHeartbeatDate,heartbeats:e.heartbeats})}else return}async add(e){var n;if(await this._canUseIndexedDBPromise){const i=await this.read();return My(this.app,{lastSentHeartbeatDate:(n=e.lastSentHeartbeatDate)!==null&&n!==void 0?n:i.lastSentHeartbeatDate,heartbeats:[...i.heartbeats,...e.heartbeats]})}else return}}function Fy(t){return Fu(JSON.stringify({version:2,heartbeats:t})).length}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function R2(t){us(new oi("platform-logger",e=>new HR(e),"PRIVATE")),us(new oi("heartbeat",e=>new k2(e),"PRIVATE")),fr(Dd,Ly,t),fr(Dd,Ly,"esm2017"),fr("fire-js","")}R2("");function Nm(t,e){var n={};for(var r in t)Object.prototype.hasOwnProperty.call(t,r)&&e.indexOf(r)<0&&(n[r]=t[r]);if(t!=null&&typeof Object.getOwnPropertySymbols=="function")for(var i=0,r=Object.getOwnPropertySymbols(t);i<r.length;i++)e.indexOf(r[i])<0&&Object.prototype.propertyIsEnumerable.call(t,r[i])&&(n[r[i]]=t[r[i]]);return n}function NE(){return{"dependent-sdk-initialized-before-auth":"Another Firebase SDK was initialized and is trying to use Auth before Auth is initialized. Please be sure to call `initializeAuth` or `getAuth` before starting any other Firebase SDK."}}const b2=NE,OE=new Ea("auth","Firebase",NE());/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const ju=new Rm("@firebase/auth");function x2(t,...e){ju.logLevel<=Y.WARN&&ju.warn(`Auth (${As}): ${t}`,...e)}function tu(t,...e){ju.logLevel<=Y.ERROR&&ju.error(`Auth (${As}): ${t}`,...e)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Wt(t,...e){throw Om(t,...e)}function sn(t,...e){return Om(t,...e)}function N2(t,e,n){const r=Object.assign(Object.assign({},b2()),{[e]:n});return new Ea("auth","Firebase",r).create(e,{appName:t.name})}function Om(t,...e){if(typeof t!="string"){const n=e[0],r=[...e.slice(1)];return r[0]&&(r[0].appName=t.name),t._errorFactory.create(n,...r)}return OE.create(t,...e)}function $(t,e,...n){if(!t)throw Om(e,...n)}function vn(t){const e="INTERNAL ASSERTION FAILED: "+t;throw tu(e),new Error(e)}function An(t,e){t||vn(e)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Vd(){var t;return typeof self<"u"&&((t=self.location)===null||t===void 0?void 0:t.href)||""}function O2(){return $y()==="http:"||$y()==="https:"}function $y(){var t;return typeof self<"u"&&((t=self.location)===null||t===void 0?void 0:t.protocol)||null}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function D2(){return typeof navigator<"u"&&navigator&&"onLine"in navigator&&typeof navigator.onLine=="boolean"&&(O2()||dR()||"connection"in navigator)?navigator.onLine:!0}function L2(){if(typeof navigator>"u")return null;const t=navigator;return t.languages&&t.languages[0]||t.language||null}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Ia{constructor(e,n){this.shortDelay=e,this.longDelay=n,An(n>e,"Short delay should be less than long delay!"),this.isMobile=fR()||pR()}get(){return D2()?this.isMobile?this.longDelay:this.shortDelay:Math.min(5e3,this.shortDelay)}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Dm(t,e){An(t.emulator,"Emulator should always be set here");const{url:n}=t.emulator;return e?`${n}${e.startsWith("/")?e.slice(1):e}`:n}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class DE{static initialize(e,n,r){this.fetchImpl=e,n&&(this.headersImpl=n),r&&(this.responseImpl=r)}static fetch(){if(this.fetchImpl)return this.fetchImpl;if(typeof self<"u"&&"fetch"in self)return self.fetch;if(typeof globalThis<"u"&&globalThis.fetch)return globalThis.fetch;if(typeof fetch<"u")return fetch;vn("Could not find fetch implementation, make sure you call FetchProvider.initialize() with an appropriate polyfill")}static headers(){if(this.headersImpl)return this.headersImpl;if(typeof self<"u"&&"Headers"in self)return self.Headers;if(typeof globalThis<"u"&&globalThis.Headers)return globalThis.Headers;if(typeof Headers<"u")return Headers;vn("Could not find Headers implementation, make sure you call FetchProvider.initialize() with an appropriate polyfill")}static response(){if(this.responseImpl)return this.responseImpl;if(typeof self<"u"&&"Response"in self)return self.Response;if(typeof globalThis<"u"&&globalThis.Response)return globalThis.Response;if(typeof Response<"u")return Response;vn("Could not find Response implementation, make sure you call FetchProvider.initialize() with an appropriate polyfill")}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const M2={CREDENTIAL_MISMATCH:"custom-token-mismatch",MISSING_CUSTOM_TOKEN:"internal-error",INVALID_IDENTIFIER:"invalid-email",MISSING_CONTINUE_URI:"internal-error",INVALID_PASSWORD:"wrong-password",MISSING_PASSWORD:"missing-password",INVALID_LOGIN_CREDENTIALS:"invalid-credential",EMAIL_EXISTS:"email-already-in-use",PASSWORD_LOGIN_DISABLED:"operation-not-allowed",INVALID_IDP_RESPONSE:"invalid-credential",INVALID_PENDING_TOKEN:"invalid-credential",FEDERATED_USER_ID_ALREADY_LINKED:"credential-already-in-use",MISSING_REQ_TYPE:"internal-error",EMAIL_NOT_FOUND:"user-not-found",RESET_PASSWORD_EXCEED_LIMIT:"too-many-requests",EXPIRED_OOB_CODE:"expired-action-code",INVALID_OOB_CODE:"invalid-action-code",MISSING_OOB_CODE:"internal-error",CREDENTIAL_TOO_OLD_LOGIN_AGAIN:"requires-recent-login",INVALID_ID_TOKEN:"invalid-user-token",TOKEN_EXPIRED:"user-token-expired",USER_NOT_FOUND:"user-token-expired",TOO_MANY_ATTEMPTS_TRY_LATER:"too-many-requests",PASSWORD_DOES_NOT_MEET_REQUIREMENTS:"password-does-not-meet-requirements",INVALID_CODE:"invalid-verification-code",INVALID_SESSION_INFO:"invalid-verification-id",INVALID_TEMPORARY_PROOF:"invalid-credential",MISSING_SESSION_INFO:"missing-verification-id",SESSION_EXPIRED:"code-expired",MISSING_ANDROID_PACKAGE_NAME:"missing-android-pkg-name",UNAUTHORIZED_DOMAIN:"unauthorized-continue-uri",INVALID_OAUTH_CLIENT_ID:"invalid-oauth-client-id",ADMIN_ONLY_OPERATION:"admin-restricted-operation",INVALID_MFA_PENDING_CREDENTIAL:"invalid-multi-factor-session",MFA_ENROLLMENT_NOT_FOUND:"multi-factor-info-not-found",MISSING_MFA_ENROLLMENT_ID:"missing-multi-factor-info",MISSING_MFA_PENDING_CREDENTIAL:"missing-multi-factor-session",SECOND_FACTOR_EXISTS:"second-factor-already-in-use",SECOND_FACTOR_LIMIT_EXCEEDED:"maximum-second-factor-count-exceeded",BLOCKING_FUNCTION_ERROR_RESPONSE:"internal-error",RECAPTCHA_NOT_ENABLED:"recaptcha-not-enabled",MISSING_RECAPTCHA_TOKEN:"missing-recaptcha-token",INVALID_RECAPTCHA_TOKEN:"invalid-recaptcha-token",INVALID_RECAPTCHA_ACTION:"invalid-recaptcha-action",MISSING_CLIENT_TYPE:"missing-client-type",MISSING_RECAPTCHA_VERSION:"missing-recaptcha-version",INVALID_RECAPTCHA_VERSION:"invalid-recaptcha-version",INVALID_REQ_TYPE:"invalid-req-type"};/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const V2=new Ia(3e4,6e4);function Cr(t,e){return t.tenantId&&!e.tenantId?Object.assign(Object.assign({},e),{tenantId:t.tenantId}):e}async function Rr(t,e,n,r,i={}){return LE(t,i,async()=>{let s={},o={};r&&(e==="GET"?o=r:s={body:JSON.stringify(r)});const a=Ta(Object.assign({key:t.config.apiKey},o)).slice(1),l=await t._getAdditionalHeaders();return l["Content-Type"]="application/json",t.languageCode&&(l["X-Firebase-Locale"]=t.languageCode),DE.fetch()(ME(t,t.config.apiHost,n,a),Object.assign({method:e,headers:l,referrerPolicy:"no-referrer"},s))})}async function LE(t,e,n){t._canInitEmulator=!1;const r=Object.assign(Object.assign({},M2),e);try{const i=new $2(t),s=await Promise.race([n(),i.promise]);i.clearNetworkTimeout();const o=await s.json();if("needConfirmation"in o)throw wl(t,"account-exists-with-different-credential",o);if(s.ok&&!("errorMessage"in o))return o;{const a=s.ok?o.errorMessage:o.error.message,[l,u]=a.split(" : ");if(l==="FEDERATED_USER_ID_ALREADY_LINKED")throw wl(t,"credential-already-in-use",o);if(l==="EMAIL_EXISTS")throw wl(t,"email-already-in-use",o);if(l==="USER_DISABLED")throw wl(t,"user-disabled",o);const c=r[l]||l.toLowerCase().replace(/[_\s]+/g,"-");if(u)throw N2(t,c,u);Wt(t,c)}}catch(i){if(i instanceof Nn)throw i;Wt(t,"network-request-failed",{message:String(i)})}}async function Sa(t,e,n,r,i={}){const s=await Rr(t,e,n,r,i);return"mfaPendingCredential"in s&&Wt(t,"multi-factor-auth-required",{_serverResponse:s}),s}function ME(t,e,n,r){const i=`${e}${n}?${r}`;return t.config.emulator?Dm(t.config,i):`${t.config.apiScheme}://${i}`}function F2(t){switch(t){case"ENFORCE":return"ENFORCE";case"AUDIT":return"AUDIT";case"OFF":return"OFF";default:return"ENFORCEMENT_STATE_UNSPECIFIED"}}class $2{constructor(e){this.auth=e,this.timer=null,this.promise=new Promise((n,r)=>{this.timer=setTimeout(()=>r(sn(this.auth,"network-request-failed")),V2.get())})}clearNetworkTimeout(){clearTimeout(this.timer)}}function wl(t,e,n){const r={appName:t.name};n.email&&(r.email=n.email),n.phoneNumber&&(r.phoneNumber=n.phoneNumber);const i=sn(t,e,r);return i.customData._tokenResponse=n,i}function Uy(t){return t!==void 0&&t.enterprise!==void 0}class U2{constructor(e){if(this.siteKey="",this.recaptchaEnforcementState=[],e.recaptchaKey===void 0)throw new Error("recaptchaKey undefined");this.siteKey=e.recaptchaKey.split("/")[3],this.recaptchaEnforcementState=e.recaptchaEnforcementState}getProviderEnforcementState(e){if(!this.recaptchaEnforcementState||this.recaptchaEnforcementState.length===0)return null;for(const n of this.recaptchaEnforcementState)if(n.provider&&n.provider===e)return F2(n.enforcementState);return null}isProviderEnabled(e){return this.getProviderEnforcementState(e)==="ENFORCE"||this.getProviderEnforcementState(e)==="AUDIT"}}async function j2(t,e){return Rr(t,"GET","/v2/recaptchaConfig",Cr(t,e))}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function z2(t,e){return Rr(t,"POST","/v1/accounts:delete",e)}async function B2(t,e){return Rr(t,"POST","/v1/accounts:lookup",e)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function mo(t){if(t)try{const e=new Date(Number(t));if(!isNaN(e.getTime()))return e.toUTCString()}catch{}}async function H2(t,e=!1){const n=Oe(t),r=await n.getIdToken(e),i=Lm(r);$(i&&i.exp&&i.auth_time&&i.iat,n.auth,"internal-error");const s=typeof i.firebase=="object"?i.firebase:void 0,o=s==null?void 0:s.sign_in_provider;return{claims:i,token:r,authTime:mo(hh(i.auth_time)),issuedAtTime:mo(hh(i.iat)),expirationTime:mo(hh(i.exp)),signInProvider:o||null,signInSecondFactor:(s==null?void 0:s.sign_in_second_factor)||null}}function hh(t){return Number(t)*1e3}function Lm(t){const[e,n,r]=t.split(".");if(e===void 0||n===void 0||r===void 0)return tu("JWT malformed, contained fewer than 3 sections"),null;try{const i=EE(n);return i?JSON.parse(i):(tu("Failed to decode base64 JWT payload"),null)}catch(i){return tu("Caught error parsing JWT payload as JSON",i==null?void 0:i.toString()),null}}function W2(t){const e=Lm(t);return $(e,"internal-error"),$(typeof e.exp<"u","internal-error"),$(typeof e.iat<"u","internal-error"),Number(e.exp)-Number(e.iat)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function Ho(t,e,n=!1){if(n)return e;try{return await e}catch(r){throw r instanceof Nn&&q2(r)&&t.auth.currentUser===t&&await t.auth.signOut(),r}}function q2({code:t}){return t==="auth/user-disabled"||t==="auth/user-token-expired"}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class K2{constructor(e){this.user=e,this.isRunning=!1,this.timerId=null,this.errorBackoff=3e4}_start(){this.isRunning||(this.isRunning=!0,this.schedule())}_stop(){this.isRunning&&(this.isRunning=!1,this.timerId!==null&&clearTimeout(this.timerId))}getInterval(e){var n;if(e){const r=this.errorBackoff;return this.errorBackoff=Math.min(this.errorBackoff*2,96e4),r}else{this.errorBackoff=3e4;const i=((n=this.user.stsTokenManager.expirationTime)!==null&&n!==void 0?n:0)-Date.now()-3e5;return Math.max(0,i)}}schedule(e=!1){if(!this.isRunning)return;const n=this.getInterval(e);this.timerId=setTimeout(async()=>{await this.iteration()},n)}async iteration(){try{await this.user.getIdToken(!0)}catch(e){(e==null?void 0:e.code)==="auth/network-request-failed"&&this.schedule(!0);return}this.schedule()}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class VE{constructor(e,n){this.createdAt=e,this.lastLoginAt=n,this._initializeTime()}_initializeTime(){this.lastSignInTime=mo(this.lastLoginAt),this.creationTime=mo(this.createdAt)}_copy(e){this.createdAt=e.createdAt,this.lastLoginAt=e.lastLoginAt,this._initializeTime()}toJSON(){return{createdAt:this.createdAt,lastLoginAt:this.lastLoginAt}}}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function zu(t){var e;const n=t.auth,r=await t.getIdToken(),i=await Ho(t,B2(n,{idToken:r}));$(i==null?void 0:i.users.length,n,"internal-error");const s=i.users[0];t._notifyReloadListener(s);const o=!((e=s.providerUserInfo)===null||e===void 0)&&e.length?Y2(s.providerUserInfo):[],a=Q2(t.providerData,o),l=t.isAnonymous,u=!(t.email&&s.passwordHash)&&!(a!=null&&a.length),c=l?u:!1,f={uid:s.localId,displayName:s.displayName||null,photoURL:s.photoUrl||null,email:s.email||null,emailVerified:s.emailVerified||!1,phoneNumber:s.phoneNumber||null,tenantId:s.tenantId||null,providerData:a,metadata:new VE(s.createdAt,s.lastLoginAt),isAnonymous:c};Object.assign(t,f)}async function G2(t){const e=Oe(t);await zu(e),await e.auth._persistUserIfCurrent(e),e.auth._notifyListenersIfCurrent(e)}function Q2(t,e){return[...t.filter(r=>!e.some(i=>i.providerId===r.providerId)),...e]}function Y2(t){return t.map(e=>{var{providerId:n}=e,r=Nm(e,["providerId"]);return{providerId:n,uid:r.rawId||"",displayName:r.displayName||null,email:r.email||null,phoneNumber:r.phoneNumber||null,photoURL:r.photoUrl||null}})}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function X2(t,e){const n=await LE(t,{},async()=>{const r=Ta({grant_type:"refresh_token",refresh_token:e}).slice(1),{tokenApiHost:i,apiKey:s}=t.config,o=ME(t,i,"/v1/token",`key=${s}`),a=await t._getAdditionalHeaders();return a["Content-Type"]="application/x-www-form-urlencoded",DE.fetch()(o,{method:"POST",headers:a,body:r})});return{accessToken:n.access_token,expiresIn:n.expires_in,refreshToken:n.refresh_token}}async function J2(t,e){return Rr(t,"POST","/v2/accounts:revokeToken",Cr(t,e))}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Wo{constructor(){this.refreshToken=null,this.accessToken=null,this.expirationTime=null}get isExpired(){return!this.expirationTime||Date.now()>this.expirationTime-3e4}updateFromServerResponse(e){$(e.idToken,"internal-error"),$(typeof e.idToken<"u","internal-error"),$(typeof e.refreshToken<"u","internal-error");const n="expiresIn"in e&&typeof e.expiresIn<"u"?Number(e.expiresIn):W2(e.idToken);this.updateTokensAndExpiration(e.idToken,e.refreshToken,n)}async getToken(e,n=!1){return $(!this.accessToken||this.refreshToken,e,"user-token-expired"),!n&&this.accessToken&&!this.isExpired?this.accessToken:this.refreshToken?(await this.refresh(e,this.refreshToken),this.accessToken):null}clearRefreshToken(){this.refreshToken=null}async refresh(e,n){const{accessToken:r,refreshToken:i,expiresIn:s}=await X2(e,n);this.updateTokensAndExpiration(r,i,Number(s))}updateTokensAndExpiration(e,n,r){this.refreshToken=n||null,this.accessToken=e||null,this.expirationTime=Date.now()+r*1e3}static fromJSON(e,n){const{refreshToken:r,accessToken:i,expirationTime:s}=n,o=new Wo;return r&&($(typeof r=="string","internal-error",{appName:e}),o.refreshToken=r),i&&($(typeof i=="string","internal-error",{appName:e}),o.accessToken=i),s&&($(typeof s=="number","internal-error",{appName:e}),o.expirationTime=s),o}toJSON(){return{refreshToken:this.refreshToken,accessToken:this.accessToken,expirationTime:this.expirationTime}}_assign(e){this.accessToken=e.accessToken,this.refreshToken=e.refreshToken,this.expirationTime=e.expirationTime}_clone(){return Object.assign(new Wo,this.toJSON())}_performRefresh(){return vn("not implemented")}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Vn(t,e){$(typeof t=="string"||typeof t>"u","internal-error",{appName:e})}class Zr{constructor(e){var{uid:n,auth:r,stsTokenManager:i}=e,s=Nm(e,["uid","auth","stsTokenManager"]);this.providerId="firebase",this.proactiveRefresh=new K2(this),this.reloadUserInfo=null,this.reloadListener=null,this.uid=n,this.auth=r,this.stsTokenManager=i,this.accessToken=i.accessToken,this.displayName=s.displayName||null,this.email=s.email||null,this.emailVerified=s.emailVerified||!1,this.phoneNumber=s.phoneNumber||null,this.photoURL=s.photoURL||null,this.isAnonymous=s.isAnonymous||!1,this.tenantId=s.tenantId||null,this.providerData=s.providerData?[...s.providerData]:[],this.metadata=new VE(s.createdAt||void 0,s.lastLoginAt||void 0)}async getIdToken(e){const n=await Ho(this,this.stsTokenManager.getToken(this.auth,e));return $(n,this.auth,"internal-error"),this.accessToken!==n&&(this.accessToken=n,await this.auth._persistUserIfCurrent(this),this.auth._notifyListenersIfCurrent(this)),n}getIdTokenResult(e){return H2(this,e)}reload(){return G2(this)}_assign(e){this!==e&&($(this.uid===e.uid,this.auth,"internal-error"),this.displayName=e.displayName,this.photoURL=e.photoURL,this.email=e.email,this.emailVerified=e.emailVerified,this.phoneNumber=e.phoneNumber,this.isAnonymous=e.isAnonymous,this.tenantId=e.tenantId,this.providerData=e.providerData.map(n=>Object.assign({},n)),this.metadata._copy(e.metadata),this.stsTokenManager._assign(e.stsTokenManager))}_clone(e){const n=new Zr(Object.assign(Object.assign({},this),{auth:e,stsTokenManager:this.stsTokenManager._clone()}));return n.metadata._copy(this.metadata),n}_onReload(e){$(!this.reloadListener,this.auth,"internal-error"),this.reloadListener=e,this.reloadUserInfo&&(this._notifyReloadListener(this.reloadUserInfo),this.reloadUserInfo=null)}_notifyReloadListener(e){this.reloadListener?this.reloadListener(e):this.reloadUserInfo=e}_startProactiveRefresh(){this.proactiveRefresh._start()}_stopProactiveRefresh(){this.proactiveRefresh._stop()}async _updateTokensIfNecessary(e,n=!1){let r=!1;e.idToken&&e.idToken!==this.stsTokenManager.accessToken&&(this.stsTokenManager.updateFromServerResponse(e),r=!0),n&&await zu(this),await this.auth._persistUserIfCurrent(this),r&&this.auth._notifyListenersIfCurrent(this)}async delete(){const e=await this.getIdToken();return await Ho(this,z2(this.auth,{idToken:e})),this.stsTokenManager.clearRefreshToken(),this.auth.signOut()}toJSON(){return Object.assign(Object.assign({uid:this.uid,email:this.email||void 0,emailVerified:this.emailVerified,displayName:this.displayName||void 0,isAnonymous:this.isAnonymous,photoURL:this.photoURL||void 0,phoneNumber:this.phoneNumber||void 0,tenantId:this.tenantId||void 0,providerData:this.providerData.map(e=>Object.assign({},e)),stsTokenManager:this.stsTokenManager.toJSON(),_redirectEventId:this._redirectEventId},this.metadata.toJSON()),{apiKey:this.auth.config.apiKey,appName:this.auth.name})}get refreshToken(){return this.stsTokenManager.refreshToken||""}static _fromJSON(e,n){var r,i,s,o,a,l,u,c;const f=(r=n.displayName)!==null&&r!==void 0?r:void 0,h=(i=n.email)!==null&&i!==void 0?i:void 0,p=(s=n.phoneNumber)!==null&&s!==void 0?s:void 0,y=(o=n.photoURL)!==null&&o!==void 0?o:void 0,_=(a=n.tenantId)!==null&&a!==void 0?a:void 0,w=(l=n._redirectEventId)!==null&&l!==void 0?l:void 0,m=(u=n.createdAt)!==null&&u!==void 0?u:void 0,d=(c=n.lastLoginAt)!==null&&c!==void 0?c:void 0,{uid:g,emailVerified:E,isAnonymous:I,providerData:k,stsTokenManager:C}=n;$(g&&C,e,"internal-error");const N=Wo.fromJSON(this.name,C);$(typeof g=="string",e,"internal-error"),Vn(f,e.name),Vn(h,e.name),$(typeof E=="boolean",e,"internal-error"),$(typeof I=="boolean",e,"internal-error"),Vn(p,e.name),Vn(y,e.name),Vn(_,e.name),Vn(w,e.name),Vn(m,e.name),Vn(d,e.name);const B=new Zr({uid:g,auth:e,email:h,emailVerified:E,displayName:f,isAnonymous:I,photoURL:y,phoneNumber:p,tenantId:_,stsTokenManager:N,createdAt:m,lastLoginAt:d});return k&&Array.isArray(k)&&(B.providerData=k.map(F=>Object.assign({},F))),w&&(B._redirectEventId=w),B}static async _fromIdTokenResponse(e,n,r=!1){const i=new Wo;i.updateFromServerResponse(n);const s=new Zr({uid:n.localId,auth:e,stsTokenManager:i,isAnonymous:r});return await zu(s),s}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const jy=new Map;function yn(t){An(t instanceof Function,"Expected a class definition");let e=jy.get(t);return e?(An(e instanceof t,"Instance stored in cache mismatched with class"),e):(e=new t,jy.set(t,e),e)}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class FE{constructor(){this.type="NONE",this.storage={}}async _isAvailable(){return!0}async _set(e,n){this.storage[e]=n}async _get(e){const n=this.storage[e];return n===void 0?null:n}async _remove(e){delete this.storage[e]}_addListener(e,n){}_removeListener(e,n){}}FE.type="NONE";const zy=FE;/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function nu(t,e,n){return`firebase:${t}:${e}:${n}`}class Yi{constructor(e,n,r){this.persistence=e,this.auth=n,this.userKey=r;const{config:i,name:s}=this.auth;this.fullUserKey=nu(this.userKey,i.apiKey,s),this.fullPersistenceKey=nu("persistence",i.apiKey,s),this.boundEventHandler=n._onStorageEvent.bind(n),this.persistence._addListener(this.fullUserKey,this.boundEventHandler)}setCurrentUser(e){return this.persistence._set(this.fullUserKey,e.toJSON())}async getCurrentUser(){const e=await this.persistence._get(this.fullUserKey);return e?Zr._fromJSON(this.auth,e):null}removeCurrentUser(){return this.persistence._remove(this.fullUserKey)}savePersistenceForRedirect(){return this.persistence._set(this.fullPersistenceKey,this.persistence.type)}async setPersistence(e){if(this.persistence===e)return;const n=await this.getCurrentUser();if(await this.removeCurrentUser(),this.persistence=e,n)return this.setCurrentUser(n)}delete(){this.persistence._removeListener(this.fullUserKey,this.boundEventHandler)}static async create(e,n,r="authUser"){if(!n.length)return new Yi(yn(zy),e,r);const i=(await Promise.all(n.map(async u=>{if(await u._isAvailable())return u}))).filter(u=>u);let s=i[0]||yn(zy);const o=nu(r,e.config.apiKey,e.name);let a=null;for(const u of n)try{const c=await u._get(o);if(c){const f=Zr._fromJSON(e,c);u!==s&&(a=f),s=u;break}}catch{}const l=i.filter(u=>u._shouldAllowMigration);return!s._shouldAllowMigration||!l.length?new Yi(s,e,r):(s=l[0],a&&await s._set(o,a.toJSON()),await Promise.all(n.map(async u=>{if(u!==s)try{await u._remove(o)}catch{}})),new Yi(s,e,r))}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function By(t){const e=t.toLowerCase();if(e.includes("opera/")||e.includes("opr/")||e.includes("opios/"))return"Opera";if(jE(e))return"IEMobile";if(e.includes("msie")||e.includes("trident/"))return"IE";if(e.includes("edge/"))return"Edge";if($E(e))return"Firefox";if(e.includes("silk/"))return"Silk";if(BE(e))return"Blackberry";if(HE(e))return"Webos";if(Mm(e))return"Safari";if((e.includes("chrome/")||UE(e))&&!e.includes("edge/"))return"Chrome";if(zE(e))return"Android";{const n=/([a-zA-Z\d\.]+)\/[a-zA-Z\d\.]*$/,r=t.match(n);if((r==null?void 0:r.length)===2)return r[1]}return"Other"}function $E(t=Re()){return/firefox\//i.test(t)}function Mm(t=Re()){const e=t.toLowerCase();return e.includes("safari/")&&!e.includes("chrome/")&&!e.includes("crios/")&&!e.includes("android")}function UE(t=Re()){return/crios\//i.test(t)}function jE(t=Re()){return/iemobile/i.test(t)}function zE(t=Re()){return/android/i.test(t)}function BE(t=Re()){return/blackberry/i.test(t)}function HE(t=Re()){return/webos/i.test(t)}function xc(t=Re()){return/iphone|ipad|ipod/i.test(t)||/macintosh/i.test(t)&&/mobile/i.test(t)}function Z2(t=Re()){var e;return xc(t)&&!!(!((e=window.navigator)===null||e===void 0)&&e.standalone)}function eb(){return mR()&&document.documentMode===10}function WE(t=Re()){return xc(t)||zE(t)||HE(t)||BE(t)||/windows phone/i.test(t)||jE(t)}function tb(){try{return!!(window&&window!==window.top)}catch{return!1}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function qE(t,e=[]){let n;switch(t){case"Browser":n=By(Re());break;case"Worker":n=`${By(Re())}-${t}`;break;default:n=t}const r=e.length?e.join(","):"FirebaseCore-web";return`${n}/JsCore/${As}/${r}`}/**
 * @license
 * Copyright 2022 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class nb{constructor(e){this.auth=e,this.queue=[]}pushCallback(e,n){const r=s=>new Promise((o,a)=>{try{const l=e(s);o(l)}catch(l){a(l)}});r.onAbort=n,this.queue.push(r);const i=this.queue.length-1;return()=>{this.queue[i]=()=>Promise.resolve()}}async runMiddleware(e){if(this.auth.currentUser===e)return;const n=[];try{for(const r of this.queue)await r(e),r.onAbort&&n.push(r.onAbort)}catch(r){n.reverse();for(const i of n)try{i()}catch{}throw this.auth._errorFactory.create("login-blocked",{originalMessage:r==null?void 0:r.message})}}}/**
 * @license
 * Copyright 2023 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function rb(t,e={}){return Rr(t,"GET","/v2/passwordPolicy",Cr(t,e))}/**
 * @license
 * Copyright 2023 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const ib=6;class sb{constructor(e){var n,r,i,s;const o=e.customStrengthOptions;this.customStrengthOptions={},this.customStrengthOptions.minPasswordLength=(n=o.minPasswordLength)!==null&&n!==void 0?n:ib,o.maxPasswordLength&&(this.customStrengthOptions.maxPasswordLength=o.maxPasswordLength),o.containsLowercaseCharacter!==void 0&&(this.customStrengthOptions.containsLowercaseLetter=o.containsLowercaseCharacter),o.containsUppercaseCharacter!==void 0&&(this.customStrengthOptions.containsUppercaseLetter=o.containsUppercaseCharacter),o.containsNumericCharacter!==void 0&&(this.customStrengthOptions.containsNumericCharacter=o.containsNumericCharacter),o.containsNonAlphanumericCharacter!==void 0&&(this.customStrengthOptions.containsNonAlphanumericCharacter=o.containsNonAlphanumericCharacter),this.enforcementState=e.enforcementState,this.enforcementState==="ENFORCEMENT_STATE_UNSPECIFIED"&&(this.enforcementState="OFF"),this.allowedNonAlphanumericCharacters=(i=(r=e.allowedNonAlphanumericCharacters)===null||r===void 0?void 0:r.join(""))!==null&&i!==void 0?i:"",this.forceUpgradeOnSignin=(s=e.forceUpgradeOnSignin)!==null&&s!==void 0?s:!1,this.schemaVersion=e.schemaVersion}validatePassword(e){var n,r,i,s,o,a;const l={isValid:!0,passwordPolicy:this};return this.validatePasswordLengthOptions(e,l),this.validatePasswordCharacterOptions(e,l),l.isValid&&(l.isValid=(n=l.meetsMinPasswordLength)!==null&&n!==void 0?n:!0),l.isValid&&(l.isValid=(r=l.meetsMaxPasswordLength)!==null&&r!==void 0?r:!0),l.isValid&&(l.isValid=(i=l.containsLowercaseLetter)!==null&&i!==void 0?i:!0),l.isValid&&(l.isValid=(s=l.containsUppercaseLetter)!==null&&s!==void 0?s:!0),l.isValid&&(l.isValid=(o=l.containsNumericCharacter)!==null&&o!==void 0?o:!0),l.isValid&&(l.isValid=(a=l.containsNonAlphanumericCharacter)!==null&&a!==void 0?a:!0),l}validatePasswordLengthOptions(e,n){const r=this.customStrengthOptions.minPasswordLength,i=this.customStrengthOptions.maxPasswordLength;r&&(n.meetsMinPasswordLength=e.length>=r),i&&(n.meetsMaxPasswordLength=e.length<=i)}validatePasswordCharacterOptions(e,n){this.updatePasswordCharacterOptionsStatuses(n,!1,!1,!1,!1);let r;for(let i=0;i<e.length;i++)r=e.charAt(i),this.updatePasswordCharacterOptionsStatuses(n,r>="a"&&r<="z",r>="A"&&r<="Z",r>="0"&&r<="9",this.allowedNonAlphanumericCharacters.includes(r))}updatePasswordCharacterOptionsStatuses(e,n,r,i,s){this.customStrengthOptions.containsLowercaseLetter&&(e.containsLowercaseLetter||(e.containsLowercaseLetter=n)),this.customStrengthOptions.containsUppercaseLetter&&(e.containsUppercaseLetter||(e.containsUppercaseLetter=r)),this.customStrengthOptions.containsNumericCharacter&&(e.containsNumericCharacter||(e.containsNumericCharacter=i)),this.customStrengthOptions.containsNonAlphanumericCharacter&&(e.containsNonAlphanumericCharacter||(e.containsNonAlphanumericCharacter=s))}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class ob{constructor(e,n,r,i){this.app=e,this.heartbeatServiceProvider=n,this.appCheckServiceProvider=r,this.config=i,this.currentUser=null,this.emulatorConfig=null,this.operations=Promise.resolve(),this.authStateSubscription=new Hy(this),this.idTokenSubscription=new Hy(this),this.beforeStateQueue=new nb(this),this.redirectUser=null,this.isProactiveRefreshEnabled=!1,this.EXPECTED_PASSWORD_POLICY_SCHEMA_VERSION=1,this._canInitEmulator=!0,this._isInitialized=!1,this._deleted=!1,this._initializationPromise=null,this._popupRedirectResolver=null,this._errorFactory=OE,this._agentRecaptchaConfig=null,this._tenantRecaptchaConfigs={},this._projectPasswordPolicy=null,this._tenantPasswordPolicies={},this.lastNotifiedUid=void 0,this.languageCode=null,this.tenantId=null,this.settings={appVerificationDisabledForTesting:!1},this.frameworks=[],this.name=e.name,this.clientVersion=i.sdkClientVersion}_initializeWithPersistence(e,n){return n&&(this._popupRedirectResolver=yn(n)),this._initializationPromise=this.queue(async()=>{var r,i;if(!this._deleted&&(this.persistenceManager=await Yi.create(this,e),!this._deleted)){if(!((r=this._popupRedirectResolver)===null||r===void 0)&&r._shouldInitProactively)try{await this._popupRedirectResolver._initialize(this)}catch{}await this.initializeCurrentUser(n),this.lastNotifiedUid=((i=this.currentUser)===null||i===void 0?void 0:i.uid)||null,!this._deleted&&(this._isInitialized=!0)}}),this._initializationPromise}async _onStorageEvent(){if(this._deleted)return;const e=await this.assertedPersistence.getCurrentUser();if(!(!this.currentUser&&!e)){if(this.currentUser&&e&&this.currentUser.uid===e.uid){this._currentUser._assign(e),await this.currentUser.getIdToken();return}await this._updateCurrentUser(e,!0)}}async initializeCurrentUser(e){var n;const r=await this.assertedPersistence.getCurrentUser();let i=r,s=!1;if(e&&this.config.authDomain){await this.getOrInitRedirectPersistenceManager();const o=(n=this.redirectUser)===null||n===void 0?void 0:n._redirectEventId,a=i==null?void 0:i._redirectEventId,l=await this.tryRedirectSignIn(e);(!o||o===a)&&(l!=null&&l.user)&&(i=l.user,s=!0)}if(!i)return this.directlySetCurrentUser(null);if(!i._redirectEventId){if(s)try{await this.beforeStateQueue.runMiddleware(i)}catch(o){i=r,this._popupRedirectResolver._overrideRedirectResult(this,()=>Promise.reject(o))}return i?this.reloadAndSetCurrentUserOrClear(i):this.directlySetCurrentUser(null)}return $(this._popupRedirectResolver,this,"argument-error"),await this.getOrInitRedirectPersistenceManager(),this.redirectUser&&this.redirectUser._redirectEventId===i._redirectEventId?this.directlySetCurrentUser(i):this.reloadAndSetCurrentUserOrClear(i)}async tryRedirectSignIn(e){let n=null;try{n=await this._popupRedirectResolver._completeRedirectFn(this,e,!0)}catch{await this._setRedirectUser(null)}return n}async reloadAndSetCurrentUserOrClear(e){try{await zu(e)}catch(n){if((n==null?void 0:n.code)!=="auth/network-request-failed")return this.directlySetCurrentUser(null)}return this.directlySetCurrentUser(e)}useDeviceLanguage(){this.languageCode=L2()}async _delete(){this._deleted=!0}async updateCurrentUser(e){const n=e?Oe(e):null;return n&&$(n.auth.config.apiKey===this.config.apiKey,this,"invalid-user-token"),this._updateCurrentUser(n&&n._clone(this))}async _updateCurrentUser(e,n=!1){if(!this._deleted)return e&&$(this.tenantId===e.tenantId,this,"tenant-id-mismatch"),n||await this.beforeStateQueue.runMiddleware(e),this.queue(async()=>{await this.directlySetCurrentUser(e),this.notifyAuthListeners()})}async signOut(){return await this.beforeStateQueue.runMiddleware(null),(this.redirectPersistenceManager||this._popupRedirectResolver)&&await this._setRedirectUser(null),this._updateCurrentUser(null,!0)}setPersistence(e){return this.queue(async()=>{await this.assertedPersistence.setPersistence(yn(e))})}_getRecaptchaConfig(){return this.tenantId==null?this._agentRecaptchaConfig:this._tenantRecaptchaConfigs[this.tenantId]}async validatePassword(e){this._getPasswordPolicyInternal()||await this._updatePasswordPolicy();const n=this._getPasswordPolicyInternal();return n.schemaVersion!==this.EXPECTED_PASSWORD_POLICY_SCHEMA_VERSION?Promise.reject(this._errorFactory.create("unsupported-password-policy-schema-version",{})):n.validatePassword(e)}_getPasswordPolicyInternal(){return this.tenantId===null?this._projectPasswordPolicy:this._tenantPasswordPolicies[this.tenantId]}async _updatePasswordPolicy(){const e=await rb(this),n=new sb(e);this.tenantId===null?this._projectPasswordPolicy=n:this._tenantPasswordPolicies[this.tenantId]=n}_getPersistence(){return this.assertedPersistence.persistence.type}_updateErrorMap(e){this._errorFactory=new Ea("auth","Firebase",e())}onAuthStateChanged(e,n,r){return this.registerStateListener(this.authStateSubscription,e,n,r)}beforeAuthStateChanged(e,n){return this.beforeStateQueue.pushCallback(e,n)}onIdTokenChanged(e,n,r){return this.registerStateListener(this.idTokenSubscription,e,n,r)}authStateReady(){return new Promise((e,n)=>{if(this.currentUser)e();else{const r=this.onAuthStateChanged(()=>{r(),e()},n)}})}async revokeAccessToken(e){if(this.currentUser){const n=await this.currentUser.getIdToken(),r={providerId:"apple.com",tokenType:"ACCESS_TOKEN",token:e,idToken:n};this.tenantId!=null&&(r.tenantId=this.tenantId),await J2(this,r)}}toJSON(){var e;return{apiKey:this.config.apiKey,authDomain:this.config.authDomain,appName:this.name,currentUser:(e=this._currentUser)===null||e===void 0?void 0:e.toJSON()}}async _setRedirectUser(e,n){const r=await this.getOrInitRedirectPersistenceManager(n);return e===null?r.removeCurrentUser():r.setCurrentUser(e)}async getOrInitRedirectPersistenceManager(e){if(!this.redirectPersistenceManager){const n=e&&yn(e)||this._popupRedirectResolver;$(n,this,"argument-error"),this.redirectPersistenceManager=await Yi.create(this,[yn(n._redirectPersistence)],"redirectUser"),this.redirectUser=await this.redirectPersistenceManager.getCurrentUser()}return this.redirectPersistenceManager}async _redirectUserForId(e){var n,r;return this._isInitialized&&await this.queue(async()=>{}),((n=this._currentUser)===null||n===void 0?void 0:n._redirectEventId)===e?this._currentUser:((r=this.redirectUser)===null||r===void 0?void 0:r._redirectEventId)===e?this.redirectUser:null}async _persistUserIfCurrent(e){if(e===this.currentUser)return this.queue(async()=>this.directlySetCurrentUser(e))}_notifyListenersIfCurrent(e){e===this.currentUser&&this.notifyAuthListeners()}_key(){return`${this.config.authDomain}:${this.config.apiKey}:${this.name}`}_startProactiveRefresh(){this.isProactiveRefreshEnabled=!0,this.currentUser&&this._currentUser._startProactiveRefresh()}_stopProactiveRefresh(){this.isProactiveRefreshEnabled=!1,this.currentUser&&this._currentUser._stopProactiveRefresh()}get _currentUser(){return this.currentUser}notifyAuthListeners(){var e,n;if(!this._isInitialized)return;this.idTokenSubscription.next(this.currentUser);const r=(n=(e=this.currentUser)===null||e===void 0?void 0:e.uid)!==null&&n!==void 0?n:null;this.lastNotifiedUid!==r&&(this.lastNotifiedUid=r,this.authStateSubscription.next(this.currentUser))}registerStateListener(e,n,r,i){if(this._deleted)return()=>{};const s=typeof n=="function"?n:n.next.bind(n);let o=!1;const a=this._isInitialized?Promise.resolve():this._initializationPromise;if($(a,this,"internal-error"),a.then(()=>{o||s(this.currentUser)}),typeof n=="function"){const l=e.addObserver(n,r,i);return()=>{o=!0,l()}}else{const l=e.addObserver(n);return()=>{o=!0,l()}}}async directlySetCurrentUser(e){this.currentUser&&this.currentUser!==e&&this._currentUser._stopProactiveRefresh(),e&&this.isProactiveRefreshEnabled&&e._startProactiveRefresh(),this.currentUser=e,e?await this.assertedPersistence.setCurrentUser(e):await this.assertedPersistence.removeCurrentUser()}queue(e){return this.operations=this.operations.then(e,e),this.operations}get assertedPersistence(){return $(this.persistenceManager,this,"internal-error"),this.persistenceManager}_logFramework(e){!e||this.frameworks.includes(e)||(this.frameworks.push(e),this.frameworks.sort(),this.clientVersion=qE(this.config.clientPlatform,this._getFrameworks()))}_getFrameworks(){return this.frameworks}async _getAdditionalHeaders(){var e;const n={"X-Client-Version":this.clientVersion};this.app.options.appId&&(n["X-Firebase-gmpid"]=this.app.options.appId);const r=await((e=this.heartbeatServiceProvider.getImmediate({optional:!0}))===null||e===void 0?void 0:e.getHeartbeatsHeader());r&&(n["X-Firebase-Client"]=r);const i=await this._getAppCheckToken();return i&&(n["X-Firebase-AppCheck"]=i),n}async _getAppCheckToken(){var e;const n=await((e=this.appCheckServiceProvider.getImmediate({optional:!0}))===null||e===void 0?void 0:e.getToken());return n!=null&&n.error&&x2(`Error while retrieving App Check token: ${n.error}`),n==null?void 0:n.token}}function vi(t){return Oe(t)}class Hy{constructor(e){this.auth=e,this.observer=null,this.addObserver=TR(n=>this.observer=n)}get next(){return $(this.observer,this.auth,"internal-error"),this.observer.next.bind(this.observer)}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */let Nc={async loadJS(){throw new Error("Unable to load external scripts")},recaptchaV2Script:"",recaptchaEnterpriseScript:"",gapiScript:""};function ab(t){Nc=t}function KE(t){return Nc.loadJS(t)}function lb(){return Nc.recaptchaEnterpriseScript}function ub(){return Nc.gapiScript}function cb(t){return`__${t}${Math.floor(Math.random()*1e6)}`}const fb="recaptcha-enterprise",hb="NO_RECAPTCHA";class db{constructor(e){this.type=fb,this.auth=vi(e)}async verify(e="verify",n=!1){async function r(s){if(!n){if(s.tenantId==null&&s._agentRecaptchaConfig!=null)return s._agentRecaptchaConfig.siteKey;if(s.tenantId!=null&&s._tenantRecaptchaConfigs[s.tenantId]!==void 0)return s._tenantRecaptchaConfigs[s.tenantId].siteKey}return new Promise(async(o,a)=>{j2(s,{clientType:"CLIENT_TYPE_WEB",version:"RECAPTCHA_ENTERPRISE"}).then(l=>{if(l.recaptchaKey===void 0)a(new Error("recaptcha Enterprise site key undefined"));else{const u=new U2(l);return s.tenantId==null?s._agentRecaptchaConfig=u:s._tenantRecaptchaConfigs[s.tenantId]=u,o(u.siteKey)}}).catch(l=>{a(l)})})}function i(s,o,a){const l=window.grecaptcha;Uy(l)?l.enterprise.ready(()=>{l.enterprise.execute(s,{action:e}).then(u=>{o(u)}).catch(()=>{o(hb)})}):a(Error("No reCAPTCHA enterprise script loaded."))}return new Promise((s,o)=>{r(this.auth).then(a=>{if(!n&&Uy(window.grecaptcha))i(a,s,o);else{if(typeof window>"u"){o(new Error("RecaptchaVerifier is only supported in browser"));return}let l=lb();l.length!==0&&(l+=a),KE(l).then(()=>{i(a,s,o)}).catch(u=>{o(u)})}}).catch(a=>{o(a)})})}}async function Wy(t,e,n,r=!1){const i=new db(t);let s;try{s=await i.verify(n)}catch{s=await i.verify(n,!0)}const o=Object.assign({},e);return r?Object.assign(o,{captchaResp:s}):Object.assign(o,{captchaResponse:s}),Object.assign(o,{clientType:"CLIENT_TYPE_WEB"}),Object.assign(o,{recaptchaVersion:"RECAPTCHA_ENTERPRISE"}),o}async function Fd(t,e,n,r){var i;if(!((i=t._getRecaptchaConfig())===null||i===void 0)&&i.isProviderEnabled("EMAIL_PASSWORD_PROVIDER")){const s=await Wy(t,e,n,n==="getOobCode");return r(t,s)}else return r(t,e).catch(async s=>{if(s.code==="auth/missing-recaptcha-token"){console.log(`${n} is protected by reCAPTCHA Enterprise for this project. Automatically triggering the reCAPTCHA flow and restarting the flow.`);const o=await Wy(t,e,n,n==="getOobCode");return r(t,o)}else return Promise.reject(s)})}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function pb(t,e){const n=xm(t,"auth");if(n.isInitialized()){const i=n.getImmediate(),s=n.getOptions();if($u(s,e??{}))return i;Wt(i,"already-initialized")}return n.initialize({options:e})}function mb(t,e){const n=(e==null?void 0:e.persistence)||[],r=(Array.isArray(n)?n:[n]).map(yn);e!=null&&e.errorMap&&t._updateErrorMap(e.errorMap),t._initializeWithPersistence(r,e==null?void 0:e.popupRedirectResolver)}function gb(t,e,n){const r=vi(t);$(r._canInitEmulator,r,"emulator-config-failed"),$(/^https?:\/\//.test(e),r,"invalid-emulator-scheme");const i=!!(n!=null&&n.disableWarnings),s=GE(e),{host:o,port:a}=vb(e),l=a===null?"":`:${a}`;r.config.emulator={url:`${s}//${o}${l}/`},r.settings.appVerificationDisabledForTesting=!0,r.emulatorConfig=Object.freeze({host:o,port:a,protocol:s.replace(":",""),options:Object.freeze({disableWarnings:i})}),i||yb()}function GE(t){const e=t.indexOf(":");return e<0?"":t.substr(0,e+1)}function vb(t){const e=GE(t),n=/(\/\/)?([^?#/]+)/.exec(t.substr(e.length));if(!n)return{host:"",port:null};const r=n[2].split("@").pop()||"",i=/^(\[[^\]]+\])(:|$)/.exec(r);if(i){const s=i[1];return{host:s,port:qy(r.substr(s.length+1))}}else{const[s,o]=r.split(":");return{host:s,port:qy(o)}}}function qy(t){if(!t)return null;const e=Number(t);return isNaN(e)?null:e}function yb(){function t(){const e=document.createElement("p"),n=e.style;e.innerText="Running in emulator mode. Do not use with production credentials.",n.position="fixed",n.width="100%",n.backgroundColor="#ffffff",n.border=".1em solid #000000",n.color="#b50000",n.bottom="0px",n.left="0px",n.margin="0px",n.zIndex="10000",n.textAlign="center",e.classList.add("firebase-emulator-warning"),document.body.appendChild(e)}typeof console<"u"&&typeof console.info=="function"&&console.info("WARNING: You are using the Auth Emulator, which is intended for local testing only.  Do not use with production credentials."),typeof window<"u"&&typeof document<"u"&&(document.readyState==="loading"?window.addEventListener("DOMContentLoaded",t):t())}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Vm{constructor(e,n){this.providerId=e,this.signInMethod=n}toJSON(){return vn("not implemented")}_getIdTokenResponse(e){return vn("not implemented")}_linkToIdToken(e,n){return vn("not implemented")}_getReauthenticationResolver(e){return vn("not implemented")}}async function _b(t,e){return Rr(t,"POST","/v1/accounts:signUp",e)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function wb(t,e){return Sa(t,"POST","/v1/accounts:signInWithPassword",Cr(t,e))}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function Eb(t,e){return Sa(t,"POST","/v1/accounts:signInWithEmailLink",Cr(t,e))}async function Tb(t,e){return Sa(t,"POST","/v1/accounts:signInWithEmailLink",Cr(t,e))}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class qo extends Vm{constructor(e,n,r,i=null){super("password",r),this._email=e,this._password=n,this._tenantId=i}static _fromEmailAndPassword(e,n){return new qo(e,n,"password")}static _fromEmailAndCode(e,n,r=null){return new qo(e,n,"emailLink",r)}toJSON(){return{email:this._email,password:this._password,signInMethod:this.signInMethod,tenantId:this._tenantId}}static fromJSON(e){const n=typeof e=="string"?JSON.parse(e):e;if(n!=null&&n.email&&(n!=null&&n.password)){if(n.signInMethod==="password")return this._fromEmailAndPassword(n.email,n.password);if(n.signInMethod==="emailLink")return this._fromEmailAndCode(n.email,n.password,n.tenantId)}return null}async _getIdTokenResponse(e){switch(this.signInMethod){case"password":const n={returnSecureToken:!0,email:this._email,password:this._password,clientType:"CLIENT_TYPE_WEB"};return Fd(e,n,"signInWithPassword",wb);case"emailLink":return Eb(e,{email:this._email,oobCode:this._password});default:Wt(e,"internal-error")}}async _linkToIdToken(e,n){switch(this.signInMethod){case"password":const r={idToken:n,returnSecureToken:!0,email:this._email,password:this._password,clientType:"CLIENT_TYPE_WEB"};return Fd(e,r,"signUpPassword",_b);case"emailLink":return Tb(e,{idToken:n,email:this._email,oobCode:this._password});default:Wt(e,"internal-error")}}_getReauthenticationResolver(e){return this._getIdTokenResponse(e)}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function Xi(t,e){return Sa(t,"POST","/v1/accounts:signInWithIdp",Cr(t,e))}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Ib="http://localhost";class li extends Vm{constructor(){super(...arguments),this.pendingToken=null}static _fromParams(e){const n=new li(e.providerId,e.signInMethod);return e.idToken||e.accessToken?(e.idToken&&(n.idToken=e.idToken),e.accessToken&&(n.accessToken=e.accessToken),e.nonce&&!e.pendingToken&&(n.nonce=e.nonce),e.pendingToken&&(n.pendingToken=e.pendingToken)):e.oauthToken&&e.oauthTokenSecret?(n.accessToken=e.oauthToken,n.secret=e.oauthTokenSecret):Wt("argument-error"),n}toJSON(){return{idToken:this.idToken,accessToken:this.accessToken,secret:this.secret,nonce:this.nonce,pendingToken:this.pendingToken,providerId:this.providerId,signInMethod:this.signInMethod}}static fromJSON(e){const n=typeof e=="string"?JSON.parse(e):e,{providerId:r,signInMethod:i}=n,s=Nm(n,["providerId","signInMethod"]);if(!r||!i)return null;const o=new li(r,i);return o.idToken=s.idToken||void 0,o.accessToken=s.accessToken||void 0,o.secret=s.secret,o.nonce=s.nonce,o.pendingToken=s.pendingToken||null,o}_getIdTokenResponse(e){const n=this.buildRequest();return Xi(e,n)}_linkToIdToken(e,n){const r=this.buildRequest();return r.idToken=n,Xi(e,r)}_getReauthenticationResolver(e){const n=this.buildRequest();return n.autoCreate=!1,Xi(e,n)}buildRequest(){const e={requestUri:Ib,returnSecureToken:!0};if(this.pendingToken)e.pendingToken=this.pendingToken;else{const n={};this.idToken&&(n.id_token=this.idToken),this.accessToken&&(n.access_token=this.accessToken),this.secret&&(n.oauth_token_secret=this.secret),n.providerId=this.providerId,this.nonce&&!this.pendingToken&&(n.nonce=this.nonce),e.postBody=Ta(n)}return e}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Sb(t){switch(t){case"recoverEmail":return"RECOVER_EMAIL";case"resetPassword":return"PASSWORD_RESET";case"signIn":return"EMAIL_SIGNIN";case"verifyEmail":return"VERIFY_EMAIL";case"verifyAndChangeEmail":return"VERIFY_AND_CHANGE_EMAIL";case"revertSecondFactorAddition":return"REVERT_SECOND_FACTOR_ADDITION";default:return null}}function Ab(t){const e=Xs(Js(t)).link,n=e?Xs(Js(e)).deep_link_id:null,r=Xs(Js(t)).deep_link_id;return(r?Xs(Js(r)).link:null)||r||n||e||t}class Fm{constructor(e){var n,r,i,s,o,a;const l=Xs(Js(e)),u=(n=l.apiKey)!==null&&n!==void 0?n:null,c=(r=l.oobCode)!==null&&r!==void 0?r:null,f=Sb((i=l.mode)!==null&&i!==void 0?i:null);$(u&&c&&f,"argument-error"),this.apiKey=u,this.operation=f,this.code=c,this.continueUrl=(s=l.continueUrl)!==null&&s!==void 0?s:null,this.languageCode=(o=l.languageCode)!==null&&o!==void 0?o:null,this.tenantId=(a=l.tenantId)!==null&&a!==void 0?a:null}static parseLink(e){const n=Ab(e);try{return new Fm(n)}catch{return null}}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class ks{constructor(){this.providerId=ks.PROVIDER_ID}static credential(e,n){return qo._fromEmailAndPassword(e,n)}static credentialWithLink(e,n){const r=Fm.parseLink(n);return $(r,"argument-error"),qo._fromEmailAndCode(e,r.code,r.tenantId)}}ks.PROVIDER_ID="password";ks.EMAIL_PASSWORD_SIGN_IN_METHOD="password";ks.EMAIL_LINK_SIGN_IN_METHOD="emailLink";/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class QE{constructor(e){this.providerId=e,this.defaultLanguageCode=null,this.customParameters={}}setDefaultLanguage(e){this.defaultLanguageCode=e}setCustomParameters(e){return this.customParameters=e,this}getCustomParameters(){return this.customParameters}}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Aa extends QE{constructor(){super(...arguments),this.scopes=[]}addScope(e){return this.scopes.includes(e)||this.scopes.push(e),this}getScopes(){return[...this.scopes]}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Wn extends Aa{constructor(){super("facebook.com")}static credential(e){return li._fromParams({providerId:Wn.PROVIDER_ID,signInMethod:Wn.FACEBOOK_SIGN_IN_METHOD,accessToken:e})}static credentialFromResult(e){return Wn.credentialFromTaggedObject(e)}static credentialFromError(e){return Wn.credentialFromTaggedObject(e.customData||{})}static credentialFromTaggedObject({_tokenResponse:e}){if(!e||!("oauthAccessToken"in e)||!e.oauthAccessToken)return null;try{return Wn.credential(e.oauthAccessToken)}catch{return null}}}Wn.FACEBOOK_SIGN_IN_METHOD="facebook.com";Wn.PROVIDER_ID="facebook.com";/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class qn extends Aa{constructor(){super("google.com"),this.addScope("profile")}static credential(e,n){return li._fromParams({providerId:qn.PROVIDER_ID,signInMethod:qn.GOOGLE_SIGN_IN_METHOD,idToken:e,accessToken:n})}static credentialFromResult(e){return qn.credentialFromTaggedObject(e)}static credentialFromError(e){return qn.credentialFromTaggedObject(e.customData||{})}static credentialFromTaggedObject({_tokenResponse:e}){if(!e)return null;const{oauthIdToken:n,oauthAccessToken:r}=e;if(!n&&!r)return null;try{return qn.credential(n,r)}catch{return null}}}qn.GOOGLE_SIGN_IN_METHOD="google.com";qn.PROVIDER_ID="google.com";/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Kn extends Aa{constructor(){super("github.com")}static credential(e){return li._fromParams({providerId:Kn.PROVIDER_ID,signInMethod:Kn.GITHUB_SIGN_IN_METHOD,accessToken:e})}static credentialFromResult(e){return Kn.credentialFromTaggedObject(e)}static credentialFromError(e){return Kn.credentialFromTaggedObject(e.customData||{})}static credentialFromTaggedObject({_tokenResponse:e}){if(!e||!("oauthAccessToken"in e)||!e.oauthAccessToken)return null;try{return Kn.credential(e.oauthAccessToken)}catch{return null}}}Kn.GITHUB_SIGN_IN_METHOD="github.com";Kn.PROVIDER_ID="github.com";/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Gn extends Aa{constructor(){super("twitter.com")}static credential(e,n){return li._fromParams({providerId:Gn.PROVIDER_ID,signInMethod:Gn.TWITTER_SIGN_IN_METHOD,oauthToken:e,oauthTokenSecret:n})}static credentialFromResult(e){return Gn.credentialFromTaggedObject(e)}static credentialFromError(e){return Gn.credentialFromTaggedObject(e.customData||{})}static credentialFromTaggedObject({_tokenResponse:e}){if(!e)return null;const{oauthAccessToken:n,oauthTokenSecret:r}=e;if(!n||!r)return null;try{return Gn.credential(n,r)}catch{return null}}}Gn.TWITTER_SIGN_IN_METHOD="twitter.com";Gn.PROVIDER_ID="twitter.com";/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function kb(t,e){return Sa(t,"POST","/v1/accounts:signUp",Cr(t,e))}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class ui{constructor(e){this.user=e.user,this.providerId=e.providerId,this._tokenResponse=e._tokenResponse,this.operationType=e.operationType}static async _fromIdTokenResponse(e,n,r,i=!1){const s=await Zr._fromIdTokenResponse(e,r,i),o=Ky(r);return new ui({user:s,providerId:o,_tokenResponse:r,operationType:n})}static async _forOperation(e,n,r){await e._updateTokensIfNecessary(r,!0);const i=Ky(r);return new ui({user:e,providerId:i,_tokenResponse:r,operationType:n})}}function Ky(t){return t.providerId?t.providerId:"phoneNumber"in t?"phone":null}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Bu extends Nn{constructor(e,n,r,i){var s;super(n.code,n.message),this.operationType=r,this.user=i,Object.setPrototypeOf(this,Bu.prototype),this.customData={appName:e.name,tenantId:(s=e.tenantId)!==null&&s!==void 0?s:void 0,_serverResponse:n.customData._serverResponse,operationType:r}}static _fromErrorAndOperation(e,n,r,i){return new Bu(e,n,r,i)}}function YE(t,e,n,r){return(e==="reauthenticate"?n._getReauthenticationResolver(t):n._getIdTokenResponse(t)).catch(s=>{throw s.code==="auth/multi-factor-auth-required"?Bu._fromErrorAndOperation(t,s,e,r):s})}async function Pb(t,e,n=!1){const r=await Ho(t,e._linkToIdToken(t.auth,await t.getIdToken()),n);return ui._forOperation(t,"link",r)}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function Cb(t,e,n=!1){const{auth:r}=t,i="reauthenticate";try{const s=await Ho(t,YE(r,i,e,t),n);$(s.idToken,r,"internal-error");const o=Lm(s.idToken);$(o,r,"internal-error");const{sub:a}=o;return $(t.uid===a,r,"user-mismatch"),ui._forOperation(t,i,s)}catch(s){throw(s==null?void 0:s.code)==="auth/user-not-found"&&Wt(r,"user-mismatch"),s}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function XE(t,e,n=!1){const r="signIn",i=await YE(t,r,e),s=await ui._fromIdTokenResponse(t,r,i);return n||await t._updateCurrentUser(s.user),s}async function Rb(t,e){return XE(vi(t),e)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function JE(t){const e=vi(t);e._getPasswordPolicyInternal()&&await e._updatePasswordPolicy()}async function bb(t,e,n){const r=vi(t),o=await Fd(r,{returnSecureToken:!0,email:e,password:n,clientType:"CLIENT_TYPE_WEB"},"signUpPassword",kb).catch(l=>{throw l.code==="auth/password-does-not-meet-requirements"&&JE(t),l}),a=await ui._fromIdTokenResponse(r,"signIn",o);return await r._updateCurrentUser(a.user),a}function xb(t,e,n){return Rb(Oe(t),ks.credential(e,n)).catch(async r=>{throw r.code==="auth/password-does-not-meet-requirements"&&JE(t),r})}function Nb(t,e,n,r){return Oe(t).onIdTokenChanged(e,n,r)}function Ob(t,e,n){return Oe(t).beforeAuthStateChanged(e,n)}function Db(t,e,n,r){return Oe(t).onAuthStateChanged(e,n,r)}function Lb(t){return Oe(t).signOut()}const Hu="__sak";/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class ZE{constructor(e,n){this.storageRetriever=e,this.type=n}_isAvailable(){try{return this.storage?(this.storage.setItem(Hu,"1"),this.storage.removeItem(Hu),Promise.resolve(!0)):Promise.resolve(!1)}catch{return Promise.resolve(!1)}}_set(e,n){return this.storage.setItem(e,JSON.stringify(n)),Promise.resolve()}_get(e){const n=this.storage.getItem(e);return Promise.resolve(n?JSON.parse(n):null)}_remove(e){return this.storage.removeItem(e),Promise.resolve()}get storage(){return this.storageRetriever()}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Mb(){const t=Re();return Mm(t)||xc(t)}const Vb=1e3,Fb=10;class eT extends ZE{constructor(){super(()=>window.localStorage,"LOCAL"),this.boundEventHandler=(e,n)=>this.onStorageEvent(e,n),this.listeners={},this.localCache={},this.pollTimer=null,this.safariLocalStorageNotSynced=Mb()&&tb(),this.fallbackToPolling=WE(),this._shouldAllowMigration=!0}forAllChangedKeys(e){for(const n of Object.keys(this.listeners)){const r=this.storage.getItem(n),i=this.localCache[n];r!==i&&e(n,i,r)}}onStorageEvent(e,n=!1){if(!e.key){this.forAllChangedKeys((o,a,l)=>{this.notifyListeners(o,l)});return}const r=e.key;if(n?this.detachListener():this.stopPolling(),this.safariLocalStorageNotSynced){const o=this.storage.getItem(r);if(e.newValue!==o)e.newValue!==null?this.storage.setItem(r,e.newValue):this.storage.removeItem(r);else if(this.localCache[r]===e.newValue&&!n)return}const i=()=>{const o=this.storage.getItem(r);!n&&this.localCache[r]===o||this.notifyListeners(r,o)},s=this.storage.getItem(r);eb()&&s!==e.newValue&&e.newValue!==e.oldValue?setTimeout(i,Fb):i()}notifyListeners(e,n){this.localCache[e]=n;const r=this.listeners[e];if(r)for(const i of Array.from(r))i(n&&JSON.parse(n))}startPolling(){this.stopPolling(),this.pollTimer=setInterval(()=>{this.forAllChangedKeys((e,n,r)=>{this.onStorageEvent(new StorageEvent("storage",{key:e,oldValue:n,newValue:r}),!0)})},Vb)}stopPolling(){this.pollTimer&&(clearInterval(this.pollTimer),this.pollTimer=null)}attachListener(){window.addEventListener("storage",this.boundEventHandler)}detachListener(){window.removeEventListener("storage",this.boundEventHandler)}_addListener(e,n){Object.keys(this.listeners).length===0&&(this.fallbackToPolling?this.startPolling():this.attachListener()),this.listeners[e]||(this.listeners[e]=new Set,this.localCache[e]=this.storage.getItem(e)),this.listeners[e].add(n)}_removeListener(e,n){this.listeners[e]&&(this.listeners[e].delete(n),this.listeners[e].size===0&&delete this.listeners[e]),Object.keys(this.listeners).length===0&&(this.detachListener(),this.stopPolling())}async _set(e,n){await super._set(e,n),this.localCache[e]=JSON.stringify(n)}async _get(e){const n=await super._get(e);return this.localCache[e]=JSON.stringify(n),n}async _remove(e){await super._remove(e),delete this.localCache[e]}}eT.type="LOCAL";const $b=eT;/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class tT extends ZE{constructor(){super(()=>window.sessionStorage,"SESSION")}_addListener(e,n){}_removeListener(e,n){}}tT.type="SESSION";const nT=tT;/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Ub(t){return Promise.all(t.map(async e=>{try{return{fulfilled:!0,value:await e}}catch(n){return{fulfilled:!1,reason:n}}}))}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Oc{constructor(e){this.eventTarget=e,this.handlersMap={},this.boundEventHandler=this.handleEvent.bind(this)}static _getInstance(e){const n=this.receivers.find(i=>i.isListeningto(e));if(n)return n;const r=new Oc(e);return this.receivers.push(r),r}isListeningto(e){return this.eventTarget===e}async handleEvent(e){const n=e,{eventId:r,eventType:i,data:s}=n.data,o=this.handlersMap[i];if(!(o!=null&&o.size))return;n.ports[0].postMessage({status:"ack",eventId:r,eventType:i});const a=Array.from(o).map(async u=>u(n.origin,s)),l=await Ub(a);n.ports[0].postMessage({status:"done",eventId:r,eventType:i,response:l})}_subscribe(e,n){Object.keys(this.handlersMap).length===0&&this.eventTarget.addEventListener("message",this.boundEventHandler),this.handlersMap[e]||(this.handlersMap[e]=new Set),this.handlersMap[e].add(n)}_unsubscribe(e,n){this.handlersMap[e]&&n&&this.handlersMap[e].delete(n),(!n||this.handlersMap[e].size===0)&&delete this.handlersMap[e],Object.keys(this.handlersMap).length===0&&this.eventTarget.removeEventListener("message",this.boundEventHandler)}}Oc.receivers=[];/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function $m(t="",e=10){let n="";for(let r=0;r<e;r++)n+=Math.floor(Math.random()*10);return t+n}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class jb{constructor(e){this.target=e,this.handlers=new Set}removeMessageHandler(e){e.messageChannel&&(e.messageChannel.port1.removeEventListener("message",e.onMessage),e.messageChannel.port1.close()),this.handlers.delete(e)}async _send(e,n,r=50){const i=typeof MessageChannel<"u"?new MessageChannel:null;if(!i)throw new Error("connection_unavailable");let s,o;return new Promise((a,l)=>{const u=$m("",20);i.port1.start();const c=setTimeout(()=>{l(new Error("unsupported_event"))},r);o={messageChannel:i,onMessage(f){const h=f;if(h.data.eventId===u)switch(h.data.status){case"ack":clearTimeout(c),s=setTimeout(()=>{l(new Error("timeout"))},3e3);break;case"done":clearTimeout(s),a(h.data.response);break;default:clearTimeout(c),clearTimeout(s),l(new Error("invalid_response"));break}}},this.handlers.add(o),i.port1.addEventListener("message",o.onMessage),this.target.postMessage({eventType:e,eventId:u,data:n},[i.port2])}).finally(()=>{o&&this.removeMessageHandler(o)})}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function on(){return window}function zb(t){on().location.href=t}/**
 * @license
 * Copyright 2020 Google LLC.
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function rT(){return typeof on().WorkerGlobalScope<"u"&&typeof on().importScripts=="function"}async function Bb(){if(!(navigator!=null&&navigator.serviceWorker))return null;try{return(await navigator.serviceWorker.ready).active}catch{return null}}function Hb(){var t;return((t=navigator==null?void 0:navigator.serviceWorker)===null||t===void 0?void 0:t.controller)||null}function Wb(){return rT()?self:null}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const iT="firebaseLocalStorageDb",qb=1,Wu="firebaseLocalStorage",sT="fbase_key";class ka{constructor(e){this.request=e}toPromise(){return new Promise((e,n)=>{this.request.addEventListener("success",()=>{e(this.request.result)}),this.request.addEventListener("error",()=>{n(this.request.error)})})}}function Dc(t,e){return t.transaction([Wu],e?"readwrite":"readonly").objectStore(Wu)}function Kb(){const t=indexedDB.deleteDatabase(iT);return new ka(t).toPromise()}function $d(){const t=indexedDB.open(iT,qb);return new Promise((e,n)=>{t.addEventListener("error",()=>{n(t.error)}),t.addEventListener("upgradeneeded",()=>{const r=t.result;try{r.createObjectStore(Wu,{keyPath:sT})}catch(i){n(i)}}),t.addEventListener("success",async()=>{const r=t.result;r.objectStoreNames.contains(Wu)?e(r):(r.close(),await Kb(),e(await $d()))})})}async function Gy(t,e,n){const r=Dc(t,!0).put({[sT]:e,value:n});return new ka(r).toPromise()}async function Gb(t,e){const n=Dc(t,!1).get(e),r=await new ka(n).toPromise();return r===void 0?null:r.value}function Qy(t,e){const n=Dc(t,!0).delete(e);return new ka(n).toPromise()}const Qb=800,Yb=3;class oT{constructor(){this.type="LOCAL",this._shouldAllowMigration=!0,this.listeners={},this.localCache={},this.pollTimer=null,this.pendingWrites=0,this.receiver=null,this.sender=null,this.serviceWorkerReceiverAvailable=!1,this.activeServiceWorker=null,this._workerInitializationPromise=this.initializeServiceWorkerMessaging().then(()=>{},()=>{})}async _openDb(){return this.db?this.db:(this.db=await $d(),this.db)}async _withRetries(e){let n=0;for(;;)try{const r=await this._openDb();return await e(r)}catch(r){if(n++>Yb)throw r;this.db&&(this.db.close(),this.db=void 0)}}async initializeServiceWorkerMessaging(){return rT()?this.initializeReceiver():this.initializeSender()}async initializeReceiver(){this.receiver=Oc._getInstance(Wb()),this.receiver._subscribe("keyChanged",async(e,n)=>({keyProcessed:(await this._poll()).includes(n.key)})),this.receiver._subscribe("ping",async(e,n)=>["keyChanged"])}async initializeSender(){var e,n;if(this.activeServiceWorker=await Bb(),!this.activeServiceWorker)return;this.sender=new jb(this.activeServiceWorker);const r=await this.sender._send("ping",{},800);r&&!((e=r[0])===null||e===void 0)&&e.fulfilled&&!((n=r[0])===null||n===void 0)&&n.value.includes("keyChanged")&&(this.serviceWorkerReceiverAvailable=!0)}async notifyServiceWorker(e){if(!(!this.sender||!this.activeServiceWorker||Hb()!==this.activeServiceWorker))try{await this.sender._send("keyChanged",{key:e},this.serviceWorkerReceiverAvailable?800:50)}catch{}}async _isAvailable(){try{if(!indexedDB)return!1;const e=await $d();return await Gy(e,Hu,"1"),await Qy(e,Hu),!0}catch{}return!1}async _withPendingWrite(e){this.pendingWrites++;try{await e()}finally{this.pendingWrites--}}async _set(e,n){return this._withPendingWrite(async()=>(await this._withRetries(r=>Gy(r,e,n)),this.localCache[e]=n,this.notifyServiceWorker(e)))}async _get(e){const n=await this._withRetries(r=>Gb(r,e));return this.localCache[e]=n,n}async _remove(e){return this._withPendingWrite(async()=>(await this._withRetries(n=>Qy(n,e)),delete this.localCache[e],this.notifyServiceWorker(e)))}async _poll(){const e=await this._withRetries(i=>{const s=Dc(i,!1).getAll();return new ka(s).toPromise()});if(!e)return[];if(this.pendingWrites!==0)return[];const n=[],r=new Set;if(e.length!==0)for(const{fbase_key:i,value:s}of e)r.add(i),JSON.stringify(this.localCache[i])!==JSON.stringify(s)&&(this.notifyListeners(i,s),n.push(i));for(const i of Object.keys(this.localCache))this.localCache[i]&&!r.has(i)&&(this.notifyListeners(i,null),n.push(i));return n}notifyListeners(e,n){this.localCache[e]=n;const r=this.listeners[e];if(r)for(const i of Array.from(r))i(n)}startPolling(){this.stopPolling(),this.pollTimer=setInterval(async()=>this._poll(),Qb)}stopPolling(){this.pollTimer&&(clearInterval(this.pollTimer),this.pollTimer=null)}_addListener(e,n){Object.keys(this.listeners).length===0&&this.startPolling(),this.listeners[e]||(this.listeners[e]=new Set,this._get(e)),this.listeners[e].add(n)}_removeListener(e,n){this.listeners[e]&&(this.listeners[e].delete(n),this.listeners[e].size===0&&delete this.listeners[e]),Object.keys(this.listeners).length===0&&this.stopPolling()}}oT.type="LOCAL";const Xb=oT;new Ia(3e4,6e4);/**
 * @license
 * Copyright 2021 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Jb(t,e){return e?yn(e):($(t._popupRedirectResolver,t,"argument-error"),t._popupRedirectResolver)}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Um extends Vm{constructor(e){super("custom","custom"),this.params=e}_getIdTokenResponse(e){return Xi(e,this._buildIdpRequest())}_linkToIdToken(e,n){return Xi(e,this._buildIdpRequest(n))}_getReauthenticationResolver(e){return Xi(e,this._buildIdpRequest())}_buildIdpRequest(e){const n={requestUri:this.params.requestUri,sessionId:this.params.sessionId,postBody:this.params.postBody,tenantId:this.params.tenantId,pendingToken:this.params.pendingToken,returnSecureToken:!0,returnIdpCredential:!0};return e&&(n.idToken=e),n}}function Zb(t){return XE(t.auth,new Um(t),t.bypassAuthState)}function ex(t){const{auth:e,user:n}=t;return $(n,e,"internal-error"),Cb(n,new Um(t),t.bypassAuthState)}async function tx(t){const{auth:e,user:n}=t;return $(n,e,"internal-error"),Pb(n,new Um(t),t.bypassAuthState)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class aT{constructor(e,n,r,i,s=!1){this.auth=e,this.resolver=r,this.user=i,this.bypassAuthState=s,this.pendingPromise=null,this.eventManager=null,this.filter=Array.isArray(n)?n:[n]}execute(){return new Promise(async(e,n)=>{this.pendingPromise={resolve:e,reject:n};try{this.eventManager=await this.resolver._initialize(this.auth),await this.onExecution(),this.eventManager.registerConsumer(this)}catch(r){this.reject(r)}})}async onAuthEvent(e){const{urlResponse:n,sessionId:r,postBody:i,tenantId:s,error:o,type:a}=e;if(o){this.reject(o);return}const l={auth:this.auth,requestUri:n,sessionId:r,tenantId:s||void 0,postBody:i||void 0,user:this.user,bypassAuthState:this.bypassAuthState};try{this.resolve(await this.getIdpTask(a)(l))}catch(u){this.reject(u)}}onError(e){this.reject(e)}getIdpTask(e){switch(e){case"signInViaPopup":case"signInViaRedirect":return Zb;case"linkViaPopup":case"linkViaRedirect":return tx;case"reauthViaPopup":case"reauthViaRedirect":return ex;default:Wt(this.auth,"internal-error")}}resolve(e){An(this.pendingPromise,"Pending promise was never set"),this.pendingPromise.resolve(e),this.unregisterAndCleanUp()}reject(e){An(this.pendingPromise,"Pending promise was never set"),this.pendingPromise.reject(e),this.unregisterAndCleanUp()}unregisterAndCleanUp(){this.eventManager&&this.eventManager.unregisterConsumer(this),this.pendingPromise=null,this.cleanUp()}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const nx=new Ia(2e3,1e4);class $i extends aT{constructor(e,n,r,i,s){super(e,n,i,s),this.provider=r,this.authWindow=null,this.pollId=null,$i.currentPopupAction&&$i.currentPopupAction.cancel(),$i.currentPopupAction=this}async executeNotNull(){const e=await this.execute();return $(e,this.auth,"internal-error"),e}async onExecution(){An(this.filter.length===1,"Popup operations only handle one event");const e=$m();this.authWindow=await this.resolver._openPopup(this.auth,this.provider,this.filter[0],e),this.authWindow.associatedEvent=e,this.resolver._originValidation(this.auth).catch(n=>{this.reject(n)}),this.resolver._isIframeWebStorageSupported(this.auth,n=>{n||this.reject(sn(this.auth,"web-storage-unsupported"))}),this.pollUserCancellation()}get eventId(){var e;return((e=this.authWindow)===null||e===void 0?void 0:e.associatedEvent)||null}cancel(){this.reject(sn(this.auth,"cancelled-popup-request"))}cleanUp(){this.authWindow&&this.authWindow.close(),this.pollId&&window.clearTimeout(this.pollId),this.authWindow=null,this.pollId=null,$i.currentPopupAction=null}pollUserCancellation(){const e=()=>{var n,r;if(!((r=(n=this.authWindow)===null||n===void 0?void 0:n.window)===null||r===void 0)&&r.closed){this.pollId=window.setTimeout(()=>{this.pollId=null,this.reject(sn(this.auth,"popup-closed-by-user"))},8e3);return}this.pollId=window.setTimeout(e,nx.get())};e()}}$i.currentPopupAction=null;/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const rx="pendingRedirect",ru=new Map;class ix extends aT{constructor(e,n,r=!1){super(e,["signInViaRedirect","linkViaRedirect","reauthViaRedirect","unknown"],n,void 0,r),this.eventId=null}async execute(){let e=ru.get(this.auth._key());if(!e){try{const r=await sx(this.resolver,this.auth)?await super.execute():null;e=()=>Promise.resolve(r)}catch(n){e=()=>Promise.reject(n)}ru.set(this.auth._key(),e)}return this.bypassAuthState||ru.set(this.auth._key(),()=>Promise.resolve(null)),e()}async onAuthEvent(e){if(e.type==="signInViaRedirect")return super.onAuthEvent(e);if(e.type==="unknown"){this.resolve(null);return}if(e.eventId){const n=await this.auth._redirectUserForId(e.eventId);if(n)return this.user=n,super.onAuthEvent(e);this.resolve(null)}}async onExecution(){}cleanUp(){}}async function sx(t,e){const n=lx(e),r=ax(t);if(!await r._isAvailable())return!1;const i=await r._get(n)==="true";return await r._remove(n),i}function ox(t,e){ru.set(t._key(),e)}function ax(t){return yn(t._redirectPersistence)}function lx(t){return nu(rx,t.config.apiKey,t.name)}async function ux(t,e,n=!1){const r=vi(t),i=Jb(r,e),o=await new ix(r,i,n).execute();return o&&!n&&(delete o.user._redirectEventId,await r._persistUserIfCurrent(o.user),await r._setRedirectUser(null,e)),o}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const cx=10*60*1e3;class fx{constructor(e){this.auth=e,this.cachedEventUids=new Set,this.consumers=new Set,this.queuedRedirectEvent=null,this.hasHandledPotentialRedirect=!1,this.lastProcessedEventTime=Date.now()}registerConsumer(e){this.consumers.add(e),this.queuedRedirectEvent&&this.isEventForConsumer(this.queuedRedirectEvent,e)&&(this.sendToConsumer(this.queuedRedirectEvent,e),this.saveEventToCache(this.queuedRedirectEvent),this.queuedRedirectEvent=null)}unregisterConsumer(e){this.consumers.delete(e)}onEvent(e){if(this.hasEventBeenHandled(e))return!1;let n=!1;return this.consumers.forEach(r=>{this.isEventForConsumer(e,r)&&(n=!0,this.sendToConsumer(e,r),this.saveEventToCache(e))}),this.hasHandledPotentialRedirect||!hx(e)||(this.hasHandledPotentialRedirect=!0,n||(this.queuedRedirectEvent=e,n=!0)),n}sendToConsumer(e,n){var r;if(e.error&&!lT(e)){const i=((r=e.error.code)===null||r===void 0?void 0:r.split("auth/")[1])||"internal-error";n.onError(sn(this.auth,i))}else n.onAuthEvent(e)}isEventForConsumer(e,n){const r=n.eventId===null||!!e.eventId&&e.eventId===n.eventId;return n.filter.includes(e.type)&&r}hasEventBeenHandled(e){return Date.now()-this.lastProcessedEventTime>=cx&&this.cachedEventUids.clear(),this.cachedEventUids.has(Yy(e))}saveEventToCache(e){this.cachedEventUids.add(Yy(e)),this.lastProcessedEventTime=Date.now()}}function Yy(t){return[t.type,t.eventId,t.sessionId,t.tenantId].filter(e=>e).join("-")}function lT({type:t,error:e}){return t==="unknown"&&(e==null?void 0:e.code)==="auth/no-auth-event"}function hx(t){switch(t.type){case"signInViaRedirect":case"linkViaRedirect":case"reauthViaRedirect":return!0;case"unknown":return lT(t);default:return!1}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function dx(t,e={}){return Rr(t,"GET","/v1/projects",e)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const px=/^\d{1,3}\.\d{1,3}\.\d{1,3}\.\d{1,3}$/,mx=/^https?/;async function gx(t){if(t.config.emulator)return;const{authorizedDomains:e}=await dx(t);for(const n of e)try{if(vx(n))return}catch{}Wt(t,"unauthorized-domain")}function vx(t){const e=Vd(),{protocol:n,hostname:r}=new URL(e);if(t.startsWith("chrome-extension://")){const o=new URL(t);return o.hostname===""&&r===""?n==="chrome-extension:"&&t.replace("chrome-extension://","")===e.replace("chrome-extension://",""):n==="chrome-extension:"&&o.hostname===r}if(!mx.test(n))return!1;if(px.test(t))return r===t;const i=t.replace(/\./g,"\\.");return new RegExp("^(.+\\."+i+"|"+i+")$","i").test(r)}/**
 * @license
 * Copyright 2020 Google LLC.
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const yx=new Ia(3e4,6e4);function Xy(){const t=on().___jsl;if(t!=null&&t.H){for(const e of Object.keys(t.H))if(t.H[e].r=t.H[e].r||[],t.H[e].L=t.H[e].L||[],t.H[e].r=[...t.H[e].L],t.CP)for(let n=0;n<t.CP.length;n++)t.CP[n]=null}}function _x(t){return new Promise((e,n)=>{var r,i,s;function o(){Xy(),gapi.load("gapi.iframes",{callback:()=>{e(gapi.iframes.getContext())},ontimeout:()=>{Xy(),n(sn(t,"network-request-failed"))},timeout:yx.get()})}if(!((i=(r=on().gapi)===null||r===void 0?void 0:r.iframes)===null||i===void 0)&&i.Iframe)e(gapi.iframes.getContext());else if(!((s=on().gapi)===null||s===void 0)&&s.load)o();else{const a=cb("iframefcb");return on()[a]=()=>{gapi.load?o():n(sn(t,"network-request-failed"))},KE(`${ub()}?onload=${a}`).catch(l=>n(l))}}).catch(e=>{throw iu=null,e})}let iu=null;function wx(t){return iu=iu||_x(t),iu}/**
 * @license
 * Copyright 2020 Google LLC.
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Ex=new Ia(5e3,15e3),Tx="__/auth/iframe",Ix="emulator/auth/iframe",Sx={style:{position:"absolute",top:"-100px",width:"1px",height:"1px"},"aria-hidden":"true",tabindex:"-1"},Ax=new Map([["identitytoolkit.googleapis.com","p"],["staging-identitytoolkit.sandbox.googleapis.com","s"],["test-identitytoolkit.sandbox.googleapis.com","t"]]);function kx(t){const e=t.config;$(e.authDomain,t,"auth-domain-config-required");const n=e.emulator?Dm(e,Ix):`https://${t.config.authDomain}/${Tx}`,r={apiKey:e.apiKey,appName:t.name,v:As},i=Ax.get(t.config.apiHost);i&&(r.eid=i);const s=t._getFrameworks();return s.length&&(r.fw=s.join(",")),`${n}?${Ta(r).slice(1)}`}async function Px(t){const e=await wx(t),n=on().gapi;return $(n,t,"internal-error"),e.open({where:document.body,url:kx(t),messageHandlersFilter:n.iframes.CROSS_ORIGIN_IFRAMES_FILTER,attributes:Sx,dontclear:!0},r=>new Promise(async(i,s)=>{await r.restyle({setHideOnLeave:!1});const o=sn(t,"network-request-failed"),a=on().setTimeout(()=>{s(o)},Ex.get());function l(){on().clearTimeout(a),i(r)}r.ping(l).then(l,()=>{s(o)})}))}/**
 * @license
 * Copyright 2020 Google LLC.
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Cx={location:"yes",resizable:"yes",statusbar:"yes",toolbar:"no"},Rx=500,bx=600,xx="_blank",Nx="http://localhost";class Jy{constructor(e){this.window=e,this.associatedEvent=null}close(){if(this.window)try{this.window.close()}catch{}}}function Ox(t,e,n,r=Rx,i=bx){const s=Math.max((window.screen.availHeight-i)/2,0).toString(),o=Math.max((window.screen.availWidth-r)/2,0).toString();let a="";const l=Object.assign(Object.assign({},Cx),{width:r.toString(),height:i.toString(),top:s,left:o}),u=Re().toLowerCase();n&&(a=UE(u)?xx:n),$E(u)&&(e=e||Nx,l.scrollbars="yes");const c=Object.entries(l).reduce((h,[p,y])=>`${h}${p}=${y},`,"");if(Z2(u)&&a!=="_self")return Dx(e||"",a),new Jy(null);const f=window.open(e||"",a,c);$(f,t,"popup-blocked");try{f.focus()}catch{}return new Jy(f)}function Dx(t,e){const n=document.createElement("a");n.href=t,n.target=e;const r=document.createEvent("MouseEvent");r.initMouseEvent("click",!0,!0,window,1,0,0,0,0,!1,!1,!1,!1,1,null),n.dispatchEvent(r)}/**
 * @license
 * Copyright 2021 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Lx="__/auth/handler",Mx="emulator/auth/handler",Vx=encodeURIComponent("fac");async function Zy(t,e,n,r,i,s){$(t.config.authDomain,t,"auth-domain-config-required"),$(t.config.apiKey,t,"invalid-api-key");const o={apiKey:t.config.apiKey,appName:t.name,authType:n,redirectUrl:r,v:As,eventId:i};if(e instanceof QE){e.setDefaultLanguage(t.languageCode),o.providerId=e.providerId||"",ER(e.getCustomParameters())||(o.customParameters=JSON.stringify(e.getCustomParameters()));for(const[c,f]of Object.entries(s||{}))o[c]=f}if(e instanceof Aa){const c=e.getScopes().filter(f=>f!=="");c.length>0&&(o.scopes=c.join(","))}t.tenantId&&(o.tid=t.tenantId);const a=o;for(const c of Object.keys(a))a[c]===void 0&&delete a[c];const l=await t._getAppCheckToken(),u=l?`#${Vx}=${encodeURIComponent(l)}`:"";return`${Fx(t)}?${Ta(a).slice(1)}${u}`}function Fx({config:t}){return t.emulator?Dm(t,Mx):`https://${t.authDomain}/${Lx}`}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const dh="webStorageSupport";class $x{constructor(){this.eventManagers={},this.iframes={},this.originValidationPromises={},this._redirectPersistence=nT,this._completeRedirectFn=ux,this._overrideRedirectResult=ox}async _openPopup(e,n,r,i){var s;An((s=this.eventManagers[e._key()])===null||s===void 0?void 0:s.manager,"_initialize() not called before _openPopup()");const o=await Zy(e,n,r,Vd(),i);return Ox(e,o,$m())}async _openRedirect(e,n,r,i){await this._originValidation(e);const s=await Zy(e,n,r,Vd(),i);return zb(s),new Promise(()=>{})}_initialize(e){const n=e._key();if(this.eventManagers[n]){const{manager:i,promise:s}=this.eventManagers[n];return i?Promise.resolve(i):(An(s,"If manager is not set, promise should be"),s)}const r=this.initAndGetManager(e);return this.eventManagers[n]={promise:r},r.catch(()=>{delete this.eventManagers[n]}),r}async initAndGetManager(e){const n=await Px(e),r=new fx(e);return n.register("authEvent",i=>($(i==null?void 0:i.authEvent,e,"invalid-auth-event"),{status:r.onEvent(i.authEvent)?"ACK":"ERROR"}),gapi.iframes.CROSS_ORIGIN_IFRAMES_FILTER),this.eventManagers[e._key()]={manager:r},this.iframes[e._key()]=n,r}_isIframeWebStorageSupported(e,n){this.iframes[e._key()].send(dh,{type:dh},i=>{var s;const o=(s=i==null?void 0:i[0])===null||s===void 0?void 0:s[dh];o!==void 0&&n(!!o),Wt(e,"internal-error")},gapi.iframes.CROSS_ORIGIN_IFRAMES_FILTER)}_originValidation(e){const n=e._key();return this.originValidationPromises[n]||(this.originValidationPromises[n]=gx(e)),this.originValidationPromises[n]}get _shouldInitProactively(){return WE()||Mm()||xc()}}const Ux=$x;var e_="@firebase/auth",t_="1.6.0";/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class jx{constructor(e){this.auth=e,this.internalListeners=new Map}getUid(){var e;return this.assertAuthConfigured(),((e=this.auth.currentUser)===null||e===void 0?void 0:e.uid)||null}async getToken(e){return this.assertAuthConfigured(),await this.auth._initializationPromise,this.auth.currentUser?{accessToken:await this.auth.currentUser.getIdToken(e)}:null}addAuthTokenListener(e){if(this.assertAuthConfigured(),this.internalListeners.has(e))return;const n=this.auth.onIdTokenChanged(r=>{e((r==null?void 0:r.stsTokenManager.accessToken)||null)});this.internalListeners.set(e,n),this.updateProactiveRefresh()}removeAuthTokenListener(e){this.assertAuthConfigured();const n=this.internalListeners.get(e);n&&(this.internalListeners.delete(e),n(),this.updateProactiveRefresh())}assertAuthConfigured(){$(this.auth._initializationPromise,"dependent-sdk-initialized-before-auth")}updateProactiveRefresh(){this.internalListeners.size>0?this.auth._startProactiveRefresh():this.auth._stopProactiveRefresh()}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function zx(t){switch(t){case"Node":return"node";case"ReactNative":return"rn";case"Worker":return"webworker";case"Cordova":return"cordova";case"WebExtension":return"web-extension";default:return}}function Bx(t){us(new oi("auth",(e,{options:n})=>{const r=e.getProvider("app").getImmediate(),i=e.getProvider("heartbeat"),s=e.getProvider("app-check-internal"),{apiKey:o,authDomain:a}=r.options;$(o&&!o.includes(":"),"invalid-api-key",{appName:r.name});const l={apiKey:o,authDomain:a,clientPlatform:t,apiHost:"identitytoolkit.googleapis.com",tokenApiHost:"securetoken.googleapis.com",apiScheme:"https",sdkClientVersion:qE(t)},u=new ob(r,i,s,l);return mb(u,n),u},"PUBLIC").setInstantiationMode("EXPLICIT").setInstanceCreatedCallback((e,n,r)=>{e.getProvider("auth-internal").initialize()})),us(new oi("auth-internal",e=>{const n=vi(e.getProvider("auth").getImmediate());return(r=>new jx(r))(n)},"PRIVATE").setInstantiationMode("EXPLICIT")),fr(e_,t_,zx(t)),fr(e_,t_,"esm2017")}/**
 * @license
 * Copyright 2021 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Hx=5*60,Wx=SE("authIdTokenMaxAge")||Hx;let n_=null;const qx=t=>async e=>{const n=e&&await e.getIdTokenResult(),r=n&&(new Date().getTime()-Date.parse(n.issuedAtTime))/1e3;if(r&&r>Wx)return;const i=n==null?void 0:n.token;n_!==i&&(n_=i,await fetch(t,{method:i?"POST":"DELETE",headers:i?{Authorization:`Bearer ${i}`}:{}}))};function Kx(t=RE()){const e=xm(t,"auth");if(e.isInitialized())return e.getImmediate();const n=pb(t,{popupRedirectResolver:Ux,persistence:[Xb,$b,nT]}),r=SE("authTokenSyncURL");if(r){const s=qx(r);Ob(n,s,()=>s(n.currentUser)),Nb(n,o=>s(o))}const i=TE("auth");return i&&gb(n,`http://${i}`),n}function Gx(){var t,e;return(e=(t=document.getElementsByTagName("head"))===null||t===void 0?void 0:t[0])!==null&&e!==void 0?e:document}ab({loadJS(t){return new Promise((e,n)=>{const r=document.createElement("script");r.setAttribute("src",t),r.onload=e,r.onerror=i=>{const s=sn("internal-error");s.customData=i,n(s)},r.type="text/javascript",r.charset="UTF-8",Gx().appendChild(r)})},gapiScript:"https://apis.google.com/js/api.js",recaptchaV2Script:"https://www.google.com/recaptcha/api.js",recaptchaEnterpriseScript:"https://www.google.com/recaptcha/enterprise.js?render="});Bx("Browser");const Lc="/assets/user-1jlpOAOe.svg";var Qx="firebase",Yx="10.8.0";/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */fr(Qx,Yx,"app");var Xx=typeof globalThis<"u"?globalThis:typeof window<"u"?window:typeof global<"u"?global:typeof self<"u"?self:{},b,jm=jm||{},j=Xx||self;function Mc(t){var e=typeof t;return e=e!="object"?e:t?Array.isArray(t)?"array":e:"null",e=="array"||e=="object"&&typeof t.length=="number"}function Pa(t){var e=typeof t;return e=="object"&&t!=null||e=="function"}function Jx(t){return Object.prototype.hasOwnProperty.call(t,ph)&&t[ph]||(t[ph]=++Zx)}var ph="closure_uid_"+(1e9*Math.random()>>>0),Zx=0;function eN(t,e,n){return t.call.apply(t.bind,arguments)}function tN(t,e,n){if(!t)throw Error();if(2<arguments.length){var r=Array.prototype.slice.call(arguments,2);return function(){var i=Array.prototype.slice.call(arguments);return Array.prototype.unshift.apply(i,r),t.apply(e,i)}}return function(){return t.apply(e,arguments)}}function tt(t,e,n){return Function.prototype.bind&&Function.prototype.bind.toString().indexOf("native code")!=-1?tt=eN:tt=tN,tt.apply(null,arguments)}function El(t,e){var n=Array.prototype.slice.call(arguments,1);return function(){var r=n.slice();return r.push.apply(r,arguments),t.apply(this,r)}}function Ue(t,e){function n(){}n.prototype=e.prototype,t.$=e.prototype,t.prototype=new n,t.prototype.constructor=t,t.ac=function(r,i,s){for(var o=Array(arguments.length-2),a=2;a<arguments.length;a++)o[a-2]=arguments[a];return e.prototype[i].apply(r,o)}}function br(){this.s=this.s,this.o=this.o}var nN=0;br.prototype.s=!1;br.prototype.sa=function(){!this.s&&(this.s=!0,this.N(),nN!=0)&&Jx(this)};br.prototype.N=function(){if(this.o)for(;this.o.length;)this.o.shift()()};const uT=Array.prototype.indexOf?function(t,e){return Array.prototype.indexOf.call(t,e,void 0)}:function(t,e){if(typeof t=="string")return typeof e!="string"||e.length!=1?-1:t.indexOf(e,0);for(let n=0;n<t.length;n++)if(n in t&&t[n]===e)return n;return-1};function zm(t){const e=t.length;if(0<e){const n=Array(e);for(let r=0;r<e;r++)n[r]=t[r];return n}return[]}function r_(t,e){for(let n=1;n<arguments.length;n++){const r=arguments[n];if(Mc(r)){const i=t.length||0,s=r.length||0;t.length=i+s;for(let o=0;o<s;o++)t[i+o]=r[o]}else t.push(r)}}function nt(t,e){this.type=t,this.g=this.target=e,this.defaultPrevented=!1}nt.prototype.h=function(){this.defaultPrevented=!0};var rN=function(){if(!j.addEventListener||!Object.defineProperty)return!1;var t=!1,e=Object.defineProperty({},"passive",{get:function(){t=!0}});try{const n=()=>{};j.addEventListener("test",n,e),j.removeEventListener("test",n,e)}catch{}return t}();function Ko(t){return/^[\s\xa0]*$/.test(t)}function Vc(){var t=j.navigator;return t&&(t=t.userAgent)?t:""}function Jt(t){return Vc().indexOf(t)!=-1}function Bm(t){return Bm[" "](t),t}Bm[" "]=function(){};function iN(t,e){var n=YN;return Object.prototype.hasOwnProperty.call(n,t)?n[t]:n[t]=e(t)}var sN=Jt("Opera"),cs=Jt("Trident")||Jt("MSIE"),cT=Jt("Edge"),Ud=cT||cs,fT=Jt("Gecko")&&!(Vc().toLowerCase().indexOf("webkit")!=-1&&!Jt("Edge"))&&!(Jt("Trident")||Jt("MSIE"))&&!Jt("Edge"),oN=Vc().toLowerCase().indexOf("webkit")!=-1&&!Jt("Edge");function hT(){var t=j.document;return t?t.documentMode:void 0}var jd;e:{var mh="",gh=function(){var t=Vc();if(fT)return/rv:([^\);]+)(\)|;)/.exec(t);if(cT)return/Edge\/([\d\.]+)/.exec(t);if(cs)return/\b(?:MSIE|rv)[: ]([^\);]+)(\)|;)/.exec(t);if(oN)return/WebKit\/(\S+)/.exec(t);if(sN)return/(?:Version)[ \/]?(\S+)/.exec(t)}();if(gh&&(mh=gh?gh[1]:""),cs){var vh=hT();if(vh!=null&&vh>parseFloat(mh)){jd=String(vh);break e}}jd=mh}var zd;if(j.document&&cs){var i_=hT();zd=i_||parseInt(jd,10)||void 0}else zd=void 0;var aN=zd;function Go(t,e){if(nt.call(this,t?t.type:""),this.relatedTarget=this.g=this.target=null,this.button=this.screenY=this.screenX=this.clientY=this.clientX=0,this.key="",this.metaKey=this.shiftKey=this.altKey=this.ctrlKey=!1,this.state=null,this.pointerId=0,this.pointerType="",this.i=null,t){var n=this.type=t.type,r=t.changedTouches&&t.changedTouches.length?t.changedTouches[0]:null;if(this.target=t.target||t.srcElement,this.g=e,e=t.relatedTarget){if(fT){e:{try{Bm(e.nodeName);var i=!0;break e}catch{}i=!1}i||(e=null)}}else n=="mouseover"?e=t.fromElement:n=="mouseout"&&(e=t.toElement);this.relatedTarget=e,r?(this.clientX=r.clientX!==void 0?r.clientX:r.pageX,this.clientY=r.clientY!==void 0?r.clientY:r.pageY,this.screenX=r.screenX||0,this.screenY=r.screenY||0):(this.clientX=t.clientX!==void 0?t.clientX:t.pageX,this.clientY=t.clientY!==void 0?t.clientY:t.pageY,this.screenX=t.screenX||0,this.screenY=t.screenY||0),this.button=t.button,this.key=t.key||"",this.ctrlKey=t.ctrlKey,this.altKey=t.altKey,this.shiftKey=t.shiftKey,this.metaKey=t.metaKey,this.pointerId=t.pointerId||0,this.pointerType=typeof t.pointerType=="string"?t.pointerType:lN[t.pointerType]||"",this.state=t.state,this.i=t,t.defaultPrevented&&Go.$.h.call(this)}}Ue(Go,nt);var lN={2:"touch",3:"pen",4:"mouse"};Go.prototype.h=function(){Go.$.h.call(this);var t=this.i;t.preventDefault?t.preventDefault():t.returnValue=!1};var Ca="closure_listenable_"+(1e6*Math.random()|0),uN=0;function cN(t,e,n,r,i){this.listener=t,this.proxy=null,this.src=e,this.type=n,this.capture=!!r,this.la=i,this.key=++uN,this.fa=this.ia=!1}function Fc(t){t.fa=!0,t.listener=null,t.proxy=null,t.src=null,t.la=null}function Hm(t,e,n){for(const r in t)e.call(n,t[r],r,t)}function fN(t,e){for(const n in t)e.call(void 0,t[n],n,t)}function dT(t){const e={};for(const n in t)e[n]=t[n];return e}const s_="constructor hasOwnProperty isPrototypeOf propertyIsEnumerable toLocaleString toString valueOf".split(" ");function pT(t,e){let n,r;for(let i=1;i<arguments.length;i++){r=arguments[i];for(n in r)t[n]=r[n];for(let s=0;s<s_.length;s++)n=s_[s],Object.prototype.hasOwnProperty.call(r,n)&&(t[n]=r[n])}}function $c(t){this.src=t,this.g={},this.h=0}$c.prototype.add=function(t,e,n,r,i){var s=t.toString();t=this.g[s],t||(t=this.g[s]=[],this.h++);var o=Hd(t,e,r,i);return-1<o?(e=t[o],n||(e.ia=!1)):(e=new cN(e,this.src,s,!!r,i),e.ia=n,t.push(e)),e};function Bd(t,e){var n=e.type;if(n in t.g){var r=t.g[n],i=uT(r,e),s;(s=0<=i)&&Array.prototype.splice.call(r,i,1),s&&(Fc(e),t.g[n].length==0&&(delete t.g[n],t.h--))}}function Hd(t,e,n,r){for(var i=0;i<t.length;++i){var s=t[i];if(!s.fa&&s.listener==e&&s.capture==!!n&&s.la==r)return i}return-1}var Wm="closure_lm_"+(1e6*Math.random()|0),yh={};function mT(t,e,n,r,i){if(r&&r.once)return vT(t,e,n,r,i);if(Array.isArray(e)){for(var s=0;s<e.length;s++)mT(t,e[s],n,r,i);return null}return n=Gm(n),t&&t[Ca]?t.O(e,n,Pa(r)?!!r.capture:!!r,i):gT(t,e,n,!1,r,i)}function gT(t,e,n,r,i,s){if(!e)throw Error("Invalid event type");var o=Pa(i)?!!i.capture:!!i,a=Km(t);if(a||(t[Wm]=a=new $c(t)),n=a.add(e,n,r,o,s),n.proxy)return n;if(r=hN(),n.proxy=r,r.src=t,r.listener=n,t.addEventListener)rN||(i=o),i===void 0&&(i=!1),t.addEventListener(e.toString(),r,i);else if(t.attachEvent)t.attachEvent(_T(e.toString()),r);else if(t.addListener&&t.removeListener)t.addListener(r);else throw Error("addEventListener and attachEvent are unavailable.");return n}function hN(){function t(n){return e.call(t.src,t.listener,n)}const e=dN;return t}function vT(t,e,n,r,i){if(Array.isArray(e)){for(var s=0;s<e.length;s++)vT(t,e[s],n,r,i);return null}return n=Gm(n),t&&t[Ca]?t.P(e,n,Pa(r)?!!r.capture:!!r,i):gT(t,e,n,!0,r,i)}function yT(t,e,n,r,i){if(Array.isArray(e))for(var s=0;s<e.length;s++)yT(t,e[s],n,r,i);else r=Pa(r)?!!r.capture:!!r,n=Gm(n),t&&t[Ca]?(t=t.i,e=String(e).toString(),e in t.g&&(s=t.g[e],n=Hd(s,n,r,i),-1<n&&(Fc(s[n]),Array.prototype.splice.call(s,n,1),s.length==0&&(delete t.g[e],t.h--)))):t&&(t=Km(t))&&(e=t.g[e.toString()],t=-1,e&&(t=Hd(e,n,r,i)),(n=-1<t?e[t]:null)&&qm(n))}function qm(t){if(typeof t!="number"&&t&&!t.fa){var e=t.src;if(e&&e[Ca])Bd(e.i,t);else{var n=t.type,r=t.proxy;e.removeEventListener?e.removeEventListener(n,r,t.capture):e.detachEvent?e.detachEvent(_T(n),r):e.addListener&&e.removeListener&&e.removeListener(r),(n=Km(e))?(Bd(n,t),n.h==0&&(n.src=null,e[Wm]=null)):Fc(t)}}}function _T(t){return t in yh?yh[t]:yh[t]="on"+t}function dN(t,e){if(t.fa)t=!0;else{e=new Go(e,this);var n=t.listener,r=t.la||t.src;t.ia&&qm(t),t=n.call(r,e)}return t}function Km(t){return t=t[Wm],t instanceof $c?t:null}var _h="__closure_events_fn_"+(1e9*Math.random()>>>0);function Gm(t){return typeof t=="function"?t:(t[_h]||(t[_h]=function(e){return t.handleEvent(e)}),t[_h])}function $e(){br.call(this),this.i=new $c(this),this.S=this,this.J=null}Ue($e,br);$e.prototype[Ca]=!0;$e.prototype.removeEventListener=function(t,e,n,r){yT(this,t,e,n,r)};function qe(t,e){var n,r=t.J;if(r)for(n=[];r;r=r.J)n.push(r);if(t=t.S,r=e.type||e,typeof e=="string")e=new nt(e,t);else if(e instanceof nt)e.target=e.target||t;else{var i=e;e=new nt(r,t),pT(e,i)}if(i=!0,n)for(var s=n.length-1;0<=s;s--){var o=e.g=n[s];i=Tl(o,r,!0,e)&&i}if(o=e.g=t,i=Tl(o,r,!0,e)&&i,i=Tl(o,r,!1,e)&&i,n)for(s=0;s<n.length;s++)o=e.g=n[s],i=Tl(o,r,!1,e)&&i}$e.prototype.N=function(){if($e.$.N.call(this),this.i){var t=this.i,e;for(e in t.g){for(var n=t.g[e],r=0;r<n.length;r++)Fc(n[r]);delete t.g[e],t.h--}}this.J=null};$e.prototype.O=function(t,e,n,r){return this.i.add(String(t),e,!1,n,r)};$e.prototype.P=function(t,e,n,r){return this.i.add(String(t),e,!0,n,r)};function Tl(t,e,n,r){if(e=t.i.g[String(e)],!e)return!0;e=e.concat();for(var i=!0,s=0;s<e.length;++s){var o=e[s];if(o&&!o.fa&&o.capture==n){var a=o.listener,l=o.la||o.src;o.ia&&Bd(t.i,o),i=a.call(l,r)!==!1&&i}}return i&&!r.defaultPrevented}var Qm=j.JSON.stringify;class pN{constructor(e,n){this.i=e,this.j=n,this.h=0,this.g=null}get(){let e;return 0<this.h?(this.h--,e=this.g,this.g=e.next,e.next=null):e=this.i(),e}}function mN(){var t=Ym;let e=null;return t.g&&(e=t.g,t.g=t.g.next,t.g||(t.h=null),e.next=null),e}class gN{constructor(){this.h=this.g=null}add(e,n){const r=wT.get();r.set(e,n),this.h?this.h.next=r:this.g=r,this.h=r}}var wT=new pN(()=>new vN,t=>t.reset());class vN{constructor(){this.next=this.g=this.h=null}set(e,n){this.h=e,this.g=n,this.next=null}reset(){this.next=this.g=this.h=null}}function yN(t){var e=1;t=t.split(":");const n=[];for(;0<e&&t.length;)n.push(t.shift()),e--;return t.length&&n.push(t.join(":")),n}function _N(t){j.setTimeout(()=>{throw t},0)}let Qo,Yo=!1,Ym=new gN,ET=()=>{const t=j.Promise.resolve(void 0);Qo=()=>{t.then(wN)}};var wN=()=>{for(var t;t=mN();){try{t.h.call(t.g)}catch(n){_N(n)}var e=wT;e.j(t),100>e.h&&(e.h++,t.next=e.g,e.g=t)}Yo=!1};function Uc(t,e){$e.call(this),this.h=t||1,this.g=e||j,this.j=tt(this.qb,this),this.l=Date.now()}Ue(Uc,$e);b=Uc.prototype;b.ga=!1;b.T=null;b.qb=function(){if(this.ga){var t=Date.now()-this.l;0<t&&t<.8*this.h?this.T=this.g.setTimeout(this.j,this.h-t):(this.T&&(this.g.clearTimeout(this.T),this.T=null),qe(this,"tick"),this.ga&&(Xm(this),this.start()))}};b.start=function(){this.ga=!0,this.T||(this.T=this.g.setTimeout(this.j,this.h),this.l=Date.now())};function Xm(t){t.ga=!1,t.T&&(t.g.clearTimeout(t.T),t.T=null)}b.N=function(){Uc.$.N.call(this),Xm(this),delete this.g};function Jm(t,e,n){if(typeof t=="function")n&&(t=tt(t,n));else if(t&&typeof t.handleEvent=="function")t=tt(t.handleEvent,t);else throw Error("Invalid listener argument");return 2147483647<Number(e)?-1:j.setTimeout(t,e||0)}function TT(t){t.g=Jm(()=>{t.g=null,t.i&&(t.i=!1,TT(t))},t.j);const e=t.h;t.h=null,t.m.apply(null,e)}class EN extends br{constructor(e,n){super(),this.m=e,this.j=n,this.h=null,this.i=!1,this.g=null}l(e){this.h=arguments,this.g?this.i=!0:TT(this)}N(){super.N(),this.g&&(j.clearTimeout(this.g),this.g=null,this.i=!1,this.h=null)}}function Xo(t){br.call(this),this.h=t,this.g={}}Ue(Xo,br);var o_=[];function IT(t,e,n,r){Array.isArray(n)||(n&&(o_[0]=n.toString()),n=o_);for(var i=0;i<n.length;i++){var s=mT(e,n[i],r||t.handleEvent,!1,t.h||t);if(!s)break;t.g[s.key]=s}}function ST(t){Hm(t.g,function(e,n){this.g.hasOwnProperty(n)&&qm(e)},t),t.g={}}Xo.prototype.N=function(){Xo.$.N.call(this),ST(this)};Xo.prototype.handleEvent=function(){throw Error("EventHandler.handleEvent not implemented")};function jc(){this.g=!0}jc.prototype.Ea=function(){this.g=!1};function TN(t,e,n,r,i,s){t.info(function(){if(t.g)if(s)for(var o="",a=s.split("&"),l=0;l<a.length;l++){var u=a[l].split("=");if(1<u.length){var c=u[0];u=u[1];var f=c.split("_");o=2<=f.length&&f[1]=="type"?o+(c+"="+u+"&"):o+(c+"=redacted&")}}else o=null;else o=s;return"XMLHTTP REQ ("+r+") [attempt "+i+"]: "+e+`
`+n+`
`+o})}function IN(t,e,n,r,i,s,o){t.info(function(){return"XMLHTTP RESP ("+r+") [ attempt "+i+"]: "+e+`
`+n+`
`+s+" "+o})}function Ui(t,e,n,r){t.info(function(){return"XMLHTTP TEXT ("+e+"): "+AN(t,n)+(r?" "+r:"")})}function SN(t,e){t.info(function(){return"TIMEOUT: "+e})}jc.prototype.info=function(){};function AN(t,e){if(!t.g)return e;if(!e)return null;try{var n=JSON.parse(e);if(n){for(t=0;t<n.length;t++)if(Array.isArray(n[t])){var r=n[t];if(!(2>r.length)){var i=r[1];if(Array.isArray(i)&&!(1>i.length)){var s=i[0];if(s!="noop"&&s!="stop"&&s!="close")for(var o=1;o<i.length;o++)i[o]=""}}}}return Qm(n)}catch{return e}}var yi={},a_=null;function zc(){return a_=a_||new $e}yi.Ta="serverreachability";function AT(t){nt.call(this,yi.Ta,t)}Ue(AT,nt);function Jo(t){const e=zc();qe(e,new AT(e))}yi.STAT_EVENT="statevent";function kT(t,e){nt.call(this,yi.STAT_EVENT,t),this.stat=e}Ue(kT,nt);function at(t){const e=zc();qe(e,new kT(e,t))}yi.Ua="timingevent";function PT(t,e){nt.call(this,yi.Ua,t),this.size=e}Ue(PT,nt);function Ra(t,e){if(typeof t!="function")throw Error("Fn must not be null and must be a function");return j.setTimeout(function(){t()},e)}var Bc={NO_ERROR:0,rb:1,Eb:2,Db:3,yb:4,Cb:5,Fb:6,Qa:7,TIMEOUT:8,Ib:9},CT={wb:"complete",Sb:"success",Ra:"error",Qa:"abort",Kb:"ready",Lb:"readystatechange",TIMEOUT:"timeout",Gb:"incrementaldata",Jb:"progress",zb:"downloadprogress",$b:"uploadprogress"};function Zm(){}Zm.prototype.h=null;function l_(t){return t.h||(t.h=t.i())}function RT(){}var ba={OPEN:"a",vb:"b",Ra:"c",Hb:"d"};function eg(){nt.call(this,"d")}Ue(eg,nt);function tg(){nt.call(this,"c")}Ue(tg,nt);var Wd;function Hc(){}Ue(Hc,Zm);Hc.prototype.g=function(){return new XMLHttpRequest};Hc.prototype.i=function(){return{}};Wd=new Hc;function xa(t,e,n,r){this.l=t,this.j=e,this.m=n,this.W=r||1,this.U=new Xo(this),this.P=kN,t=Ud?125:void 0,this.V=new Uc(t),this.I=null,this.i=!1,this.u=this.B=this.A=this.L=this.G=this.Y=this.C=null,this.F=[],this.g=null,this.o=0,this.s=this.v=null,this.ca=-1,this.J=!1,this.O=0,this.M=null,this.ba=this.K=this.aa=this.S=!1,this.h=new bT}function bT(){this.i=null,this.g="",this.h=!1}var kN=45e3,xT={},qd={};b=xa.prototype;b.setTimeout=function(t){this.P=t};function Kd(t,e,n){t.L=1,t.A=qc(kn(e)),t.u=n,t.S=!0,NT(t,null)}function NT(t,e){t.G=Date.now(),Na(t),t.B=kn(t.A);var n=t.B,r=t.W;Array.isArray(r)||(r=[String(r)]),UT(n.i,"t",r),t.o=0,n=t.l.J,t.h=new bT,t.g=aI(t.l,n?e:null,!t.u),0<t.O&&(t.M=new EN(tt(t.Pa,t,t.g),t.O)),IT(t.U,t.g,"readystatechange",t.nb),e=t.I?dT(t.I):{},t.u?(t.v||(t.v="POST"),e["Content-Type"]="application/x-www-form-urlencoded",t.g.ha(t.B,t.v,t.u,e)):(t.v="GET",t.g.ha(t.B,t.v,null,e)),Jo(),TN(t.j,t.v,t.B,t.m,t.W,t.u)}b.nb=function(t){t=t.target;const e=this.M;e&&Zt(t)==3?e.l():this.Pa(t)};b.Pa=function(t){try{if(t==this.g)e:{const c=Zt(this.g);var e=this.g.Ia();const f=this.g.da();if(!(3>c)&&(c!=3||Ud||this.g&&(this.h.h||this.g.ja()||h_(this.g)))){this.J||c!=4||e==7||(e==8||0>=f?Jo(3):Jo(2)),Wc(this);var n=this.g.da();this.ca=n;t:if(OT(this)){var r=h_(this.g);t="";var i=r.length,s=Zt(this.g)==4;if(!this.h.i){if(typeof TextDecoder>"u"){Wr(this),go(this);var o="";break t}this.h.i=new j.TextDecoder}for(e=0;e<i;e++)this.h.h=!0,t+=this.h.i.decode(r[e],{stream:s&&e==i-1});r.length=0,this.h.g+=t,this.o=0,o=this.h.g}else o=this.g.ja();if(this.i=n==200,IN(this.j,this.v,this.B,this.m,this.W,c,n),this.i){if(this.aa&&!this.K){t:{if(this.g){var a,l=this.g;if((a=l.g?l.g.getResponseHeader("X-HTTP-Initial-Response"):null)&&!Ko(a)){var u=a;break t}}u=null}if(n=u)Ui(this.j,this.m,n,"Initial handshake response via X-HTTP-Initial-Response"),this.K=!0,Gd(this,n);else{this.i=!1,this.s=3,at(12),Wr(this),go(this);break e}}this.S?(DT(this,c,o),Ud&&this.i&&c==3&&(IT(this.U,this.V,"tick",this.mb),this.V.start())):(Ui(this.j,this.m,o,null),Gd(this,o)),c==4&&Wr(this),this.i&&!this.J&&(c==4?rI(this.l,this):(this.i=!1,Na(this)))}else KN(this.g),n==400&&0<o.indexOf("Unknown SID")?(this.s=3,at(12)):(this.s=0,at(13)),Wr(this),go(this)}}}catch{}finally{}};function OT(t){return t.g?t.v=="GET"&&t.L!=2&&t.l.Ha:!1}function DT(t,e,n){let r=!0,i;for(;!t.J&&t.o<n.length;)if(i=PN(t,n),i==qd){e==4&&(t.s=4,at(14),r=!1),Ui(t.j,t.m,null,"[Incomplete Response]");break}else if(i==xT){t.s=4,at(15),Ui(t.j,t.m,n,"[Invalid Chunk]"),r=!1;break}else Ui(t.j,t.m,i,null),Gd(t,i);OT(t)&&t.o!=0&&(t.h.g=t.h.g.slice(t.o),t.o=0),e!=4||n.length!=0||t.h.h||(t.s=1,at(16),r=!1),t.i=t.i&&r,r?0<n.length&&!t.ba&&(t.ba=!0,e=t.l,e.g==t&&e.ca&&!e.M&&(e.l.info("Great, no buffering proxy detected. Bytes received: "+n.length),ag(e),e.M=!0,at(11))):(Ui(t.j,t.m,n,"[Invalid Chunked Response]"),Wr(t),go(t))}b.mb=function(){if(this.g){var t=Zt(this.g),e=this.g.ja();this.o<e.length&&(Wc(this),DT(this,t,e),this.i&&t!=4&&Na(this))}};function PN(t,e){var n=t.o,r=e.indexOf(`
`,n);return r==-1?qd:(n=Number(e.substring(n,r)),isNaN(n)?xT:(r+=1,r+n>e.length?qd:(e=e.slice(r,r+n),t.o=r+n,e)))}b.cancel=function(){this.J=!0,Wr(this)};function Na(t){t.Y=Date.now()+t.P,LT(t,t.P)}function LT(t,e){if(t.C!=null)throw Error("WatchDog timer not null");t.C=Ra(tt(t.lb,t),e)}function Wc(t){t.C&&(j.clearTimeout(t.C),t.C=null)}b.lb=function(){this.C=null;const t=Date.now();0<=t-this.Y?(SN(this.j,this.B),this.L!=2&&(Jo(),at(17)),Wr(this),this.s=2,go(this)):LT(this,this.Y-t)};function go(t){t.l.H==0||t.J||rI(t.l,t)}function Wr(t){Wc(t);var e=t.M;e&&typeof e.sa=="function"&&e.sa(),t.M=null,Xm(t.V),ST(t.U),t.g&&(e=t.g,t.g=null,e.abort(),e.sa())}function Gd(t,e){try{var n=t.l;if(n.H!=0&&(n.g==t||Qd(n.i,t))){if(!t.K&&Qd(n.i,t)&&n.H==3){try{var r=n.Ja.g.parse(e)}catch{r=null}if(Array.isArray(r)&&r.length==3){var i=r;if(i[0]==0){e:if(!n.u){if(n.g)if(n.g.G+3e3<t.G)Gu(n),Yc(n);else break e;og(n),at(18)}}else n.Fa=i[1],0<n.Fa-n.V&&37500>i[2]&&n.G&&n.A==0&&!n.v&&(n.v=Ra(tt(n.ib,n),6e3));if(1>=BT(n.i)&&n.oa){try{n.oa()}catch{}n.oa=void 0}}else qr(n,11)}else if((t.K||n.g==t)&&Gu(n),!Ko(e))for(i=n.Ja.g.parse(e),e=0;e<i.length;e++){let u=i[e];if(n.V=u[0],u=u[1],n.H==2)if(u[0]=="c"){n.K=u[1],n.pa=u[2];const c=u[3];c!=null&&(n.ra=c,n.l.info("VER="+n.ra));const f=u[4];f!=null&&(n.Ga=f,n.l.info("SVER="+n.Ga));const h=u[5];h!=null&&typeof h=="number"&&0<h&&(r=1.5*h,n.L=r,n.l.info("backChannelRequestTimeoutMs_="+r)),r=n;const p=t.g;if(p){const y=p.g?p.g.getResponseHeader("X-Client-Wire-Protocol"):null;if(y){var s=r.i;s.g||y.indexOf("spdy")==-1&&y.indexOf("quic")==-1&&y.indexOf("h2")==-1||(s.j=s.l,s.g=new Set,s.h&&(ng(s,s.h),s.h=null))}if(r.F){const _=p.g?p.g.getResponseHeader("X-HTTP-Session-Id"):null;_&&(r.Da=_,oe(r.I,r.F,_))}}n.H=3,n.h&&n.h.Ba(),n.ca&&(n.S=Date.now()-t.G,n.l.info("Handshake RTT: "+n.S+"ms")),r=n;var o=t;if(r.wa=oI(r,r.J?r.pa:null,r.Y),o.K){HT(r.i,o);var a=o,l=r.L;l&&a.setTimeout(l),a.C&&(Wc(a),Na(a)),r.g=o}else tI(r);0<n.j.length&&Xc(n)}else u[0]!="stop"&&u[0]!="close"||qr(n,7);else n.H==3&&(u[0]=="stop"||u[0]=="close"?u[0]=="stop"?qr(n,7):sg(n):u[0]!="noop"&&n.h&&n.h.Aa(u),n.A=0)}}Jo(4)}catch{}}function CN(t){if(t.Z&&typeof t.Z=="function")return t.Z();if(typeof Map<"u"&&t instanceof Map||typeof Set<"u"&&t instanceof Set)return Array.from(t.values());if(typeof t=="string")return t.split("");if(Mc(t)){for(var e=[],n=t.length,r=0;r<n;r++)e.push(t[r]);return e}e=[],n=0;for(r in t)e[n++]=t[r];return e}function RN(t){if(t.ta&&typeof t.ta=="function")return t.ta();if(!t.Z||typeof t.Z!="function"){if(typeof Map<"u"&&t instanceof Map)return Array.from(t.keys());if(!(typeof Set<"u"&&t instanceof Set)){if(Mc(t)||typeof t=="string"){var e=[];t=t.length;for(var n=0;n<t;n++)e.push(n);return e}e=[],n=0;for(const r in t)e[n++]=r;return e}}}function MT(t,e){if(t.forEach&&typeof t.forEach=="function")t.forEach(e,void 0);else if(Mc(t)||typeof t=="string")Array.prototype.forEach.call(t,e,void 0);else for(var n=RN(t),r=CN(t),i=r.length,s=0;s<i;s++)e.call(void 0,r[s],n&&n[s],t)}var VT=RegExp("^(?:([^:/?#.]+):)?(?://(?:([^\\\\/?#]*)@)?([^\\\\/?#]*?)(?::([0-9]+))?(?=[\\\\/?#]|$))?([^?#]+)?(?:\\?([^#]*))?(?:#([\\s\\S]*))?$");function bN(t,e){if(t){t=t.split("&");for(var n=0;n<t.length;n++){var r=t[n].indexOf("="),i=null;if(0<=r){var s=t[n].substring(0,r);i=t[n].substring(r+1)}else s=t[n];e(s,i?decodeURIComponent(i.replace(/\+/g," ")):"")}}}function ei(t){if(this.g=this.s=this.j="",this.m=null,this.o=this.l="",this.h=!1,t instanceof ei){this.h=t.h,qu(this,t.j),this.s=t.s,this.g=t.g,Ku(this,t.m),this.l=t.l;var e=t.i,n=new Zo;n.i=e.i,e.g&&(n.g=new Map(e.g),n.h=e.h),u_(this,n),this.o=t.o}else t&&(e=String(t).match(VT))?(this.h=!1,qu(this,e[1]||"",!0),this.s=Zs(e[2]||""),this.g=Zs(e[3]||"",!0),Ku(this,e[4]),this.l=Zs(e[5]||"",!0),u_(this,e[6]||"",!0),this.o=Zs(e[7]||"")):(this.h=!1,this.i=new Zo(null,this.h))}ei.prototype.toString=function(){var t=[],e=this.j;e&&t.push(eo(e,c_,!0),":");var n=this.g;return(n||e=="file")&&(t.push("//"),(e=this.s)&&t.push(eo(e,c_,!0),"@"),t.push(encodeURIComponent(String(n)).replace(/%25([0-9a-fA-F]{2})/g,"%$1")),n=this.m,n!=null&&t.push(":",String(n))),(n=this.l)&&(this.g&&n.charAt(0)!="/"&&t.push("/"),t.push(eo(n,n.charAt(0)=="/"?ON:NN,!0))),(n=this.i.toString())&&t.push("?",n),(n=this.o)&&t.push("#",eo(n,LN)),t.join("")};function kn(t){return new ei(t)}function qu(t,e,n){t.j=n?Zs(e,!0):e,t.j&&(t.j=t.j.replace(/:$/,""))}function Ku(t,e){if(e){if(e=Number(e),isNaN(e)||0>e)throw Error("Bad port number "+e);t.m=e}else t.m=null}function u_(t,e,n){e instanceof Zo?(t.i=e,MN(t.i,t.h)):(n||(e=eo(e,DN)),t.i=new Zo(e,t.h))}function oe(t,e,n){t.i.set(e,n)}function qc(t){return oe(t,"zx",Math.floor(2147483648*Math.random()).toString(36)+Math.abs(Math.floor(2147483648*Math.random())^Date.now()).toString(36)),t}function Zs(t,e){return t?e?decodeURI(t.replace(/%25/g,"%2525")):decodeURIComponent(t):""}function eo(t,e,n){return typeof t=="string"?(t=encodeURI(t).replace(e,xN),n&&(t=t.replace(/%25([0-9a-fA-F]{2})/g,"%$1")),t):null}function xN(t){return t=t.charCodeAt(0),"%"+(t>>4&15).toString(16)+(t&15).toString(16)}var c_=/[#\/\?@]/g,NN=/[#\?:]/g,ON=/[#\?]/g,DN=/[#\?@]/g,LN=/#/g;function Zo(t,e){this.h=this.g=null,this.i=t||null,this.j=!!e}function xr(t){t.g||(t.g=new Map,t.h=0,t.i&&bN(t.i,function(e,n){t.add(decodeURIComponent(e.replace(/\+/g," ")),n)}))}b=Zo.prototype;b.add=function(t,e){xr(this),this.i=null,t=Ps(this,t);var n=this.g.get(t);return n||this.g.set(t,n=[]),n.push(e),this.h+=1,this};function FT(t,e){xr(t),e=Ps(t,e),t.g.has(e)&&(t.i=null,t.h-=t.g.get(e).length,t.g.delete(e))}function $T(t,e){return xr(t),e=Ps(t,e),t.g.has(e)}b.forEach=function(t,e){xr(this),this.g.forEach(function(n,r){n.forEach(function(i){t.call(e,i,r,this)},this)},this)};b.ta=function(){xr(this);const t=Array.from(this.g.values()),e=Array.from(this.g.keys()),n=[];for(let r=0;r<e.length;r++){const i=t[r];for(let s=0;s<i.length;s++)n.push(e[r])}return n};b.Z=function(t){xr(this);let e=[];if(typeof t=="string")$T(this,t)&&(e=e.concat(this.g.get(Ps(this,t))));else{t=Array.from(this.g.values());for(let n=0;n<t.length;n++)e=e.concat(t[n])}return e};b.set=function(t,e){return xr(this),this.i=null,t=Ps(this,t),$T(this,t)&&(this.h-=this.g.get(t).length),this.g.set(t,[e]),this.h+=1,this};b.get=function(t,e){return t?(t=this.Z(t),0<t.length?String(t[0]):e):e};function UT(t,e,n){FT(t,e),0<n.length&&(t.i=null,t.g.set(Ps(t,e),zm(n)),t.h+=n.length)}b.toString=function(){if(this.i)return this.i;if(!this.g)return"";const t=[],e=Array.from(this.g.keys());for(var n=0;n<e.length;n++){var r=e[n];const s=encodeURIComponent(String(r)),o=this.Z(r);for(r=0;r<o.length;r++){var i=s;o[r]!==""&&(i+="="+encodeURIComponent(String(o[r]))),t.push(i)}}return this.i=t.join("&")};function Ps(t,e){return e=String(e),t.j&&(e=e.toLowerCase()),e}function MN(t,e){e&&!t.j&&(xr(t),t.i=null,t.g.forEach(function(n,r){var i=r.toLowerCase();r!=i&&(FT(this,r),UT(this,i,n))},t)),t.j=e}var VN=class{constructor(t,e){this.g=t,this.map=e}};function jT(t){this.l=t||FN,j.PerformanceNavigationTiming?(t=j.performance.getEntriesByType("navigation"),t=0<t.length&&(t[0].nextHopProtocol=="hq"||t[0].nextHopProtocol=="h2")):t=!!(j.g&&j.g.Ka&&j.g.Ka()&&j.g.Ka().dc),this.j=t?this.l:1,this.g=null,1<this.j&&(this.g=new Set),this.h=null,this.i=[]}var FN=10;function zT(t){return t.h?!0:t.g?t.g.size>=t.j:!1}function BT(t){return t.h?1:t.g?t.g.size:0}function Qd(t,e){return t.h?t.h==e:t.g?t.g.has(e):!1}function ng(t,e){t.g?t.g.add(e):t.h=e}function HT(t,e){t.h&&t.h==e?t.h=null:t.g&&t.g.has(e)&&t.g.delete(e)}jT.prototype.cancel=function(){if(this.i=WT(this),this.h)this.h.cancel(),this.h=null;else if(this.g&&this.g.size!==0){for(const t of this.g.values())t.cancel();this.g.clear()}};function WT(t){if(t.h!=null)return t.i.concat(t.h.F);if(t.g!=null&&t.g.size!==0){let e=t.i;for(const n of t.g.values())e=e.concat(n.F);return e}return zm(t.i)}var $N=class{stringify(t){return j.JSON.stringify(t,void 0)}parse(t){return j.JSON.parse(t,void 0)}};function UN(){this.g=new $N}function jN(t,e,n){const r=n||"";try{MT(t,function(i,s){let o=i;Pa(i)&&(o=Qm(i)),e.push(r+s+"="+encodeURIComponent(o))})}catch(i){throw e.push(r+"type="+encodeURIComponent("_badmap")),i}}function zN(t,e){const n=new jc;if(j.Image){const r=new Image;r.onload=El(Il,n,r,"TestLoadImage: loaded",!0,e),r.onerror=El(Il,n,r,"TestLoadImage: error",!1,e),r.onabort=El(Il,n,r,"TestLoadImage: abort",!1,e),r.ontimeout=El(Il,n,r,"TestLoadImage: timeout",!1,e),j.setTimeout(function(){r.ontimeout&&r.ontimeout()},1e4),r.src=t}else e(!1)}function Il(t,e,n,r,i){try{e.onload=null,e.onerror=null,e.onabort=null,e.ontimeout=null,i(r)}catch{}}function Kc(t){this.l=t.ec||null,this.j=t.ob||!1}Ue(Kc,Zm);Kc.prototype.g=function(){return new Gc(this.l,this.j)};Kc.prototype.i=function(t){return function(){return t}}({});function Gc(t,e){$e.call(this),this.F=t,this.u=e,this.m=void 0,this.readyState=rg,this.status=0,this.responseType=this.responseText=this.response=this.statusText="",this.onreadystatechange=null,this.v=new Headers,this.h=null,this.C="GET",this.B="",this.g=!1,this.A=this.j=this.l=null}Ue(Gc,$e);var rg=0;b=Gc.prototype;b.open=function(t,e){if(this.readyState!=rg)throw this.abort(),Error("Error reopening a connection");this.C=t,this.B=e,this.readyState=1,ea(this)};b.send=function(t){if(this.readyState!=1)throw this.abort(),Error("need to call open() first. ");this.g=!0;const e={headers:this.v,method:this.C,credentials:this.m,cache:void 0};t&&(e.body=t),(this.F||j).fetch(new Request(this.B,e)).then(this.$a.bind(this),this.ka.bind(this))};b.abort=function(){this.response=this.responseText="",this.v=new Headers,this.status=0,this.j&&this.j.cancel("Request was aborted.").catch(()=>{}),1<=this.readyState&&this.g&&this.readyState!=4&&(this.g=!1,Oa(this)),this.readyState=rg};b.$a=function(t){if(this.g&&(this.l=t,this.h||(this.status=this.l.status,this.statusText=this.l.statusText,this.h=t.headers,this.readyState=2,ea(this)),this.g&&(this.readyState=3,ea(this),this.g)))if(this.responseType==="arraybuffer")t.arrayBuffer().then(this.Ya.bind(this),this.ka.bind(this));else if(typeof j.ReadableStream<"u"&&"body"in t){if(this.j=t.body.getReader(),this.u){if(this.responseType)throw Error('responseType must be empty for "streamBinaryChunks" mode responses.');this.response=[]}else this.response=this.responseText="",this.A=new TextDecoder;qT(this)}else t.text().then(this.Za.bind(this),this.ka.bind(this))};function qT(t){t.j.read().then(t.Xa.bind(t)).catch(t.ka.bind(t))}b.Xa=function(t){if(this.g){if(this.u&&t.value)this.response.push(t.value);else if(!this.u){var e=t.value?t.value:new Uint8Array(0);(e=this.A.decode(e,{stream:!t.done}))&&(this.response=this.responseText+=e)}t.done?Oa(this):ea(this),this.readyState==3&&qT(this)}};b.Za=function(t){this.g&&(this.response=this.responseText=t,Oa(this))};b.Ya=function(t){this.g&&(this.response=t,Oa(this))};b.ka=function(){this.g&&Oa(this)};function Oa(t){t.readyState=4,t.l=null,t.j=null,t.A=null,ea(t)}b.setRequestHeader=function(t,e){this.v.append(t,e)};b.getResponseHeader=function(t){return this.h&&this.h.get(t.toLowerCase())||""};b.getAllResponseHeaders=function(){if(!this.h)return"";const t=[],e=this.h.entries();for(var n=e.next();!n.done;)n=n.value,t.push(n[0]+": "+n[1]),n=e.next();return t.join(`\r
`)};function ea(t){t.onreadystatechange&&t.onreadystatechange.call(t)}Object.defineProperty(Gc.prototype,"withCredentials",{get:function(){return this.m==="include"},set:function(t){this.m=t?"include":"same-origin"}});var BN=j.JSON.parse;function Ee(t){$e.call(this),this.headers=new Map,this.u=t||null,this.h=!1,this.C=this.g=null,this.I="",this.m=0,this.j="",this.l=this.G=this.v=this.F=!1,this.B=0,this.A=null,this.K=KT,this.L=this.M=!1}Ue(Ee,$e);var KT="",HN=/^https?$/i,WN=["POST","PUT"];b=Ee.prototype;b.Oa=function(t){this.M=t};b.ha=function(t,e,n,r){if(this.g)throw Error("[goog.net.XhrIo] Object is active with another request="+this.I+"; newUri="+t);e=e?e.toUpperCase():"GET",this.I=t,this.j="",this.m=0,this.F=!1,this.h=!0,this.g=this.u?this.u.g():Wd.g(),this.C=this.u?l_(this.u):l_(Wd),this.g.onreadystatechange=tt(this.La,this);try{this.G=!0,this.g.open(e,String(t),!0),this.G=!1}catch(s){f_(this,s);return}if(t=n||"",n=new Map(this.headers),r)if(Object.getPrototypeOf(r)===Object.prototype)for(var i in r)n.set(i,r[i]);else if(typeof r.keys=="function"&&typeof r.get=="function")for(const s of r.keys())n.set(s,r.get(s));else throw Error("Unknown input type for opt_headers: "+String(r));r=Array.from(n.keys()).find(s=>s.toLowerCase()=="content-type"),i=j.FormData&&t instanceof j.FormData,!(0<=uT(WN,e))||r||i||n.set("Content-Type","application/x-www-form-urlencoded;charset=utf-8");for(const[s,o]of n)this.g.setRequestHeader(s,o);this.K&&(this.g.responseType=this.K),"withCredentials"in this.g&&this.g.withCredentials!==this.M&&(this.g.withCredentials=this.M);try{YT(this),0<this.B&&((this.L=qN(this.g))?(this.g.timeout=this.B,this.g.ontimeout=tt(this.ua,this)):this.A=Jm(this.ua,this.B,this)),this.v=!0,this.g.send(t),this.v=!1}catch(s){f_(this,s)}};function qN(t){return cs&&typeof t.timeout=="number"&&t.ontimeout!==void 0}b.ua=function(){typeof jm<"u"&&this.g&&(this.j="Timed out after "+this.B+"ms, aborting",this.m=8,qe(this,"timeout"),this.abort(8))};function f_(t,e){t.h=!1,t.g&&(t.l=!0,t.g.abort(),t.l=!1),t.j=e,t.m=5,GT(t),Qc(t)}function GT(t){t.F||(t.F=!0,qe(t,"complete"),qe(t,"error"))}b.abort=function(t){this.g&&this.h&&(this.h=!1,this.l=!0,this.g.abort(),this.l=!1,this.m=t||7,qe(this,"complete"),qe(this,"abort"),Qc(this))};b.N=function(){this.g&&(this.h&&(this.h=!1,this.l=!0,this.g.abort(),this.l=!1),Qc(this,!0)),Ee.$.N.call(this)};b.La=function(){this.s||(this.G||this.v||this.l?QT(this):this.kb())};b.kb=function(){QT(this)};function QT(t){if(t.h&&typeof jm<"u"&&(!t.C[1]||Zt(t)!=4||t.da()!=2)){if(t.v&&Zt(t)==4)Jm(t.La,0,t);else if(qe(t,"readystatechange"),Zt(t)==4){t.h=!1;try{const o=t.da();e:switch(o){case 200:case 201:case 202:case 204:case 206:case 304:case 1223:var e=!0;break e;default:e=!1}var n;if(!(n=e)){var r;if(r=o===0){var i=String(t.I).match(VT)[1]||null;!i&&j.self&&j.self.location&&(i=j.self.location.protocol.slice(0,-1)),r=!HN.test(i?i.toLowerCase():"")}n=r}if(n)qe(t,"complete"),qe(t,"success");else{t.m=6;try{var s=2<Zt(t)?t.g.statusText:""}catch{s=""}t.j=s+" ["+t.da()+"]",GT(t)}}finally{Qc(t)}}}}function Qc(t,e){if(t.g){YT(t);const n=t.g,r=t.C[0]?()=>{}:null;t.g=null,t.C=null,e||qe(t,"ready");try{n.onreadystatechange=r}catch{}}}function YT(t){t.g&&t.L&&(t.g.ontimeout=null),t.A&&(j.clearTimeout(t.A),t.A=null)}b.isActive=function(){return!!this.g};function Zt(t){return t.g?t.g.readyState:0}b.da=function(){try{return 2<Zt(this)?this.g.status:-1}catch{return-1}};b.ja=function(){try{return this.g?this.g.responseText:""}catch{return""}};b.Wa=function(t){if(this.g){var e=this.g.responseText;return t&&e.indexOf(t)==0&&(e=e.substring(t.length)),BN(e)}};function h_(t){try{if(!t.g)return null;if("response"in t.g)return t.g.response;switch(t.K){case KT:case"text":return t.g.responseText;case"arraybuffer":if("mozResponseArrayBuffer"in t.g)return t.g.mozResponseArrayBuffer}return null}catch{return null}}function KN(t){const e={};t=(t.g&&2<=Zt(t)&&t.g.getAllResponseHeaders()||"").split(`\r
`);for(let r=0;r<t.length;r++){if(Ko(t[r]))continue;var n=yN(t[r]);const i=n[0];if(n=n[1],typeof n!="string")continue;n=n.trim();const s=e[i]||[];e[i]=s,s.push(n)}fN(e,function(r){return r.join(", ")})}b.Ia=function(){return this.m};b.Sa=function(){return typeof this.j=="string"?this.j:String(this.j)};function XT(t){let e="";return Hm(t,function(n,r){e+=r,e+=":",e+=n,e+=`\r
`}),e}function ig(t,e,n){e:{for(r in n){var r=!1;break e}r=!0}r||(n=XT(n),typeof t=="string"?n!=null&&encodeURIComponent(String(n)):oe(t,e,n))}function Hs(t,e,n){return n&&n.internalChannelParams&&n.internalChannelParams[t]||e}function JT(t){this.Ga=0,this.j=[],this.l=new jc,this.pa=this.wa=this.I=this.Y=this.g=this.Da=this.F=this.na=this.o=this.U=this.s=null,this.fb=this.W=0,this.cb=Hs("failFast",!1,t),this.G=this.v=this.u=this.m=this.h=null,this.aa=!0,this.Fa=this.V=-1,this.ba=this.A=this.C=0,this.ab=Hs("baseRetryDelayMs",5e3,t),this.hb=Hs("retryDelaySeedMs",1e4,t),this.eb=Hs("forwardChannelMaxRetries",2,t),this.xa=Hs("forwardChannelRequestTimeoutMs",2e4,t),this.va=t&&t.xmlHttpFactory||void 0,this.Ha=t&&t.useFetchStreams||!1,this.L=void 0,this.J=t&&t.supportsCrossDomainXhr||!1,this.K="",this.i=new jT(t&&t.concurrentRequestLimit),this.Ja=new UN,this.P=t&&t.fastHandshake||!1,this.O=t&&t.encodeInitMessageHeaders||!1,this.P&&this.O&&(this.O=!1),this.bb=t&&t.bc||!1,t&&t.Ea&&this.l.Ea(),t&&t.forceLongPolling&&(this.aa=!1),this.ca=!this.P&&this.aa&&t&&t.detectBufferingProxy||!1,this.qa=void 0,t&&t.longPollingTimeout&&0<t.longPollingTimeout&&(this.qa=t.longPollingTimeout),this.oa=void 0,this.S=0,this.M=!1,this.ma=this.B=null}b=JT.prototype;b.ra=8;b.H=1;function sg(t){if(ZT(t),t.H==3){var e=t.W++,n=kn(t.I);if(oe(n,"SID",t.K),oe(n,"RID",e),oe(n,"TYPE","terminate"),Da(t,n),e=new xa(t,t.l,e),e.L=2,e.A=qc(kn(n)),n=!1,j.navigator&&j.navigator.sendBeacon)try{n=j.navigator.sendBeacon(e.A.toString(),"")}catch{}!n&&j.Image&&(new Image().src=e.A,n=!0),n||(e.g=aI(e.l,null),e.g.ha(e.A)),e.G=Date.now(),Na(e)}sI(t)}function Yc(t){t.g&&(ag(t),t.g.cancel(),t.g=null)}function ZT(t){Yc(t),t.u&&(j.clearTimeout(t.u),t.u=null),Gu(t),t.i.cancel(),t.m&&(typeof t.m=="number"&&j.clearTimeout(t.m),t.m=null)}function Xc(t){if(!zT(t.i)&&!t.m){t.m=!0;var e=t.Na;Qo||ET(),Yo||(Qo(),Yo=!0),Ym.add(e,t),t.C=0}}function GN(t,e){return BT(t.i)>=t.i.j-(t.m?1:0)?!1:t.m?(t.j=e.F.concat(t.j),!0):t.H==1||t.H==2||t.C>=(t.cb?0:t.eb)?!1:(t.m=Ra(tt(t.Na,t,e),iI(t,t.C)),t.C++,!0)}b.Na=function(t){if(this.m)if(this.m=null,this.H==1){if(!t){this.W=Math.floor(1e5*Math.random()),t=this.W++;const i=new xa(this,this.l,t);let s=this.s;if(this.U&&(s?(s=dT(s),pT(s,this.U)):s=this.U),this.o!==null||this.O||(i.I=s,s=null),this.P)e:{for(var e=0,n=0;n<this.j.length;n++){t:{var r=this.j[n];if("__data__"in r.map&&(r=r.map.__data__,typeof r=="string")){r=r.length;break t}r=void 0}if(r===void 0)break;if(e+=r,4096<e){e=n;break e}if(e===4096||n===this.j.length-1){e=n+1;break e}}e=1e3}else e=1e3;e=eI(this,i,e),n=kn(this.I),oe(n,"RID",t),oe(n,"CVER",22),this.F&&oe(n,"X-HTTP-Session-Id",this.F),Da(this,n),s&&(this.O?e="headers="+encodeURIComponent(String(XT(s)))+"&"+e:this.o&&ig(n,this.o,s)),ng(this.i,i),this.bb&&oe(n,"TYPE","init"),this.P?(oe(n,"$req",e),oe(n,"SID","null"),i.aa=!0,Kd(i,n,null)):Kd(i,n,e),this.H=2}}else this.H==3&&(t?d_(this,t):this.j.length==0||zT(this.i)||d_(this))};function d_(t,e){var n;e?n=e.m:n=t.W++;const r=kn(t.I);oe(r,"SID",t.K),oe(r,"RID",n),oe(r,"AID",t.V),Da(t,r),t.o&&t.s&&ig(r,t.o,t.s),n=new xa(t,t.l,n,t.C+1),t.o===null&&(n.I=t.s),e&&(t.j=e.F.concat(t.j)),e=eI(t,n,1e3),n.setTimeout(Math.round(.5*t.xa)+Math.round(.5*t.xa*Math.random())),ng(t.i,n),Kd(n,r,e)}function Da(t,e){t.na&&Hm(t.na,function(n,r){oe(e,r,n)}),t.h&&MT({},function(n,r){oe(e,r,n)})}function eI(t,e,n){n=Math.min(t.j.length,n);var r=t.h?tt(t.h.Va,t.h,t):null;e:{var i=t.j;let s=-1;for(;;){const o=["count="+n];s==-1?0<n?(s=i[0].g,o.push("ofs="+s)):s=0:o.push("ofs="+s);let a=!0;for(let l=0;l<n;l++){let u=i[l].g;const c=i[l].map;if(u-=s,0>u)s=Math.max(0,i[l].g-100),a=!1;else try{jN(c,o,"req"+u+"_")}catch{r&&r(c)}}if(a){r=o.join("&");break e}}}return t=t.j.splice(0,n),e.F=t,r}function tI(t){if(!t.g&&!t.u){t.ba=1;var e=t.Ma;Qo||ET(),Yo||(Qo(),Yo=!0),Ym.add(e,t),t.A=0}}function og(t){return t.g||t.u||3<=t.A?!1:(t.ba++,t.u=Ra(tt(t.Ma,t),iI(t,t.A)),t.A++,!0)}b.Ma=function(){if(this.u=null,nI(this),this.ca&&!(this.M||this.g==null||0>=this.S)){var t=2*this.S;this.l.info("BP detection timer enabled: "+t),this.B=Ra(tt(this.jb,this),t)}};b.jb=function(){this.B&&(this.B=null,this.l.info("BP detection timeout reached."),this.l.info("Buffering proxy detected and switch to long-polling!"),this.G=!1,this.M=!0,at(10),Yc(this),nI(this))};function ag(t){t.B!=null&&(j.clearTimeout(t.B),t.B=null)}function nI(t){t.g=new xa(t,t.l,"rpc",t.ba),t.o===null&&(t.g.I=t.s),t.g.O=0;var e=kn(t.wa);oe(e,"RID","rpc"),oe(e,"SID",t.K),oe(e,"AID",t.V),oe(e,"CI",t.G?"0":"1"),!t.G&&t.qa&&oe(e,"TO",t.qa),oe(e,"TYPE","xmlhttp"),Da(t,e),t.o&&t.s&&ig(e,t.o,t.s),t.L&&t.g.setTimeout(t.L);var n=t.g;t=t.pa,n.L=1,n.A=qc(kn(e)),n.u=null,n.S=!0,NT(n,t)}b.ib=function(){this.v!=null&&(this.v=null,Yc(this),og(this),at(19))};function Gu(t){t.v!=null&&(j.clearTimeout(t.v),t.v=null)}function rI(t,e){var n=null;if(t.g==e){Gu(t),ag(t),t.g=null;var r=2}else if(Qd(t.i,e))n=e.F,HT(t.i,e),r=1;else return;if(t.H!=0){if(e.i)if(r==1){n=e.u?e.u.length:0,e=Date.now()-e.G;var i=t.C;r=zc(),qe(r,new PT(r,n)),Xc(t)}else tI(t);else if(i=e.s,i==3||i==0&&0<e.ca||!(r==1&&GN(t,e)||r==2&&og(t)))switch(n&&0<n.length&&(e=t.i,e.i=e.i.concat(n)),i){case 1:qr(t,5);break;case 4:qr(t,10);break;case 3:qr(t,6);break;default:qr(t,2)}}}function iI(t,e){let n=t.ab+Math.floor(Math.random()*t.hb);return t.isActive()||(n*=2),n*e}function qr(t,e){if(t.l.info("Error code "+e),e==2){var n=null;t.h&&(n=null);var r=tt(t.pb,t);n||(n=new ei("//www.google.com/images/cleardot.gif"),j.location&&j.location.protocol=="http"||qu(n,"https"),qc(n)),zN(n.toString(),r)}else at(2);t.H=0,t.h&&t.h.za(e),sI(t),ZT(t)}b.pb=function(t){t?(this.l.info("Successfully pinged google.com"),at(2)):(this.l.info("Failed to ping google.com"),at(1))};function sI(t){if(t.H=0,t.ma=[],t.h){const e=WT(t.i);(e.length!=0||t.j.length!=0)&&(r_(t.ma,e),r_(t.ma,t.j),t.i.i.length=0,zm(t.j),t.j.length=0),t.h.ya()}}function oI(t,e,n){var r=n instanceof ei?kn(n):new ei(n);if(r.g!="")e&&(r.g=e+"."+r.g),Ku(r,r.m);else{var i=j.location;r=i.protocol,e=e?e+"."+i.hostname:i.hostname,i=+i.port;var s=new ei(null);r&&qu(s,r),e&&(s.g=e),i&&Ku(s,i),n&&(s.l=n),r=s}return n=t.F,e=t.Da,n&&e&&oe(r,n,e),oe(r,"VER",t.ra),Da(t,r),r}function aI(t,e,n){if(e&&!t.J)throw Error("Can't create secondary domain capable XhrIo object.");return e=t.Ha&&!t.va?new Ee(new Kc({ob:n})):new Ee(t.va),e.Oa(t.J),e}b.isActive=function(){return!!this.h&&this.h.isActive(this)};function lI(){}b=lI.prototype;b.Ba=function(){};b.Aa=function(){};b.za=function(){};b.ya=function(){};b.isActive=function(){return!0};b.Va=function(){};function Qu(){if(cs&&!(10<=Number(aN)))throw Error("Environmental error: no available transport.")}Qu.prototype.g=function(t,e){return new St(t,e)};function St(t,e){$e.call(this),this.g=new JT(e),this.l=t,this.h=e&&e.messageUrlParams||null,t=e&&e.messageHeaders||null,e&&e.clientProtocolHeaderRequired&&(t?t["X-Client-Protocol"]="webchannel":t={"X-Client-Protocol":"webchannel"}),this.g.s=t,t=e&&e.initMessageHeaders||null,e&&e.messageContentType&&(t?t["X-WebChannel-Content-Type"]=e.messageContentType:t={"X-WebChannel-Content-Type":e.messageContentType}),e&&e.Ca&&(t?t["X-WebChannel-Client-Profile"]=e.Ca:t={"X-WebChannel-Client-Profile":e.Ca}),this.g.U=t,(t=e&&e.cc)&&!Ko(t)&&(this.g.o=t),this.A=e&&e.supportsCrossDomainXhr||!1,this.v=e&&e.sendRawJson||!1,(e=e&&e.httpSessionIdParam)&&!Ko(e)&&(this.g.F=e,t=this.h,t!==null&&e in t&&(t=this.h,e in t&&delete t[e])),this.j=new Cs(this)}Ue(St,$e);St.prototype.m=function(){this.g.h=this.j,this.A&&(this.g.J=!0);var t=this.g,e=this.l,n=this.h||void 0;at(0),t.Y=e,t.na=n||{},t.G=t.aa,t.I=oI(t,null,t.Y),Xc(t)};St.prototype.close=function(){sg(this.g)};St.prototype.u=function(t){var e=this.g;if(typeof t=="string"){var n={};n.__data__=t,t=n}else this.v&&(n={},n.__data__=Qm(t),t=n);e.j.push(new VN(e.fb++,t)),e.H==3&&Xc(e)};St.prototype.N=function(){this.g.h=null,delete this.j,sg(this.g),delete this.g,St.$.N.call(this)};function uI(t){eg.call(this),t.__headers__&&(this.headers=t.__headers__,this.statusCode=t.__status__,delete t.__headers__,delete t.__status__);var e=t.__sm__;if(e){e:{for(const n in e){t=n;break e}t=void 0}(this.i=t)&&(t=this.i,e=e!==null&&t in e?e[t]:void 0),this.data=e}else this.data=t}Ue(uI,eg);function cI(){tg.call(this),this.status=1}Ue(cI,tg);function Cs(t){this.g=t}Ue(Cs,lI);Cs.prototype.Ba=function(){qe(this.g,"a")};Cs.prototype.Aa=function(t){qe(this.g,new uI(t))};Cs.prototype.za=function(t){qe(this.g,new cI)};Cs.prototype.ya=function(){qe(this.g,"b")};function QN(){this.blockSize=-1}function qt(){this.blockSize=-1,this.blockSize=64,this.g=Array(4),this.m=Array(this.blockSize),this.i=this.h=0,this.reset()}Ue(qt,QN);qt.prototype.reset=function(){this.g[0]=1732584193,this.g[1]=4023233417,this.g[2]=2562383102,this.g[3]=271733878,this.i=this.h=0};function wh(t,e,n){n||(n=0);var r=Array(16);if(typeof e=="string")for(var i=0;16>i;++i)r[i]=e.charCodeAt(n++)|e.charCodeAt(n++)<<8|e.charCodeAt(n++)<<16|e.charCodeAt(n++)<<24;else for(i=0;16>i;++i)r[i]=e[n++]|e[n++]<<8|e[n++]<<16|e[n++]<<24;e=t.g[0],n=t.g[1],i=t.g[2];var s=t.g[3],o=e+(s^n&(i^s))+r[0]+3614090360&4294967295;e=n+(o<<7&4294967295|o>>>25),o=s+(i^e&(n^i))+r[1]+3905402710&4294967295,s=e+(o<<12&4294967295|o>>>20),o=i+(n^s&(e^n))+r[2]+606105819&4294967295,i=s+(o<<17&4294967295|o>>>15),o=n+(e^i&(s^e))+r[3]+3250441966&4294967295,n=i+(o<<22&4294967295|o>>>10),o=e+(s^n&(i^s))+r[4]+4118548399&4294967295,e=n+(o<<7&4294967295|o>>>25),o=s+(i^e&(n^i))+r[5]+1200080426&4294967295,s=e+(o<<12&4294967295|o>>>20),o=i+(n^s&(e^n))+r[6]+2821735955&4294967295,i=s+(o<<17&4294967295|o>>>15),o=n+(e^i&(s^e))+r[7]+4249261313&4294967295,n=i+(o<<22&4294967295|o>>>10),o=e+(s^n&(i^s))+r[8]+1770035416&4294967295,e=n+(o<<7&4294967295|o>>>25),o=s+(i^e&(n^i))+r[9]+2336552879&4294967295,s=e+(o<<12&4294967295|o>>>20),o=i+(n^s&(e^n))+r[10]+4294925233&4294967295,i=s+(o<<17&4294967295|o>>>15),o=n+(e^i&(s^e))+r[11]+2304563134&4294967295,n=i+(o<<22&4294967295|o>>>10),o=e+(s^n&(i^s))+r[12]+1804603682&4294967295,e=n+(o<<7&4294967295|o>>>25),o=s+(i^e&(n^i))+r[13]+4254626195&4294967295,s=e+(o<<12&4294967295|o>>>20),o=i+(n^s&(e^n))+r[14]+2792965006&4294967295,i=s+(o<<17&4294967295|o>>>15),o=n+(e^i&(s^e))+r[15]+1236535329&4294967295,n=i+(o<<22&4294967295|o>>>10),o=e+(i^s&(n^i))+r[1]+4129170786&4294967295,e=n+(o<<5&4294967295|o>>>27),o=s+(n^i&(e^n))+r[6]+3225465664&4294967295,s=e+(o<<9&4294967295|o>>>23),o=i+(e^n&(s^e))+r[11]+643717713&4294967295,i=s+(o<<14&4294967295|o>>>18),o=n+(s^e&(i^s))+r[0]+3921069994&4294967295,n=i+(o<<20&4294967295|o>>>12),o=e+(i^s&(n^i))+r[5]+3593408605&4294967295,e=n+(o<<5&4294967295|o>>>27),o=s+(n^i&(e^n))+r[10]+38016083&4294967295,s=e+(o<<9&4294967295|o>>>23),o=i+(e^n&(s^e))+r[15]+3634488961&4294967295,i=s+(o<<14&4294967295|o>>>18),o=n+(s^e&(i^s))+r[4]+3889429448&4294967295,n=i+(o<<20&4294967295|o>>>12),o=e+(i^s&(n^i))+r[9]+568446438&4294967295,e=n+(o<<5&4294967295|o>>>27),o=s+(n^i&(e^n))+r[14]+3275163606&4294967295,s=e+(o<<9&4294967295|o>>>23),o=i+(e^n&(s^e))+r[3]+4107603335&4294967295,i=s+(o<<14&4294967295|o>>>18),o=n+(s^e&(i^s))+r[8]+1163531501&4294967295,n=i+(o<<20&4294967295|o>>>12),o=e+(i^s&(n^i))+r[13]+2850285829&4294967295,e=n+(o<<5&4294967295|o>>>27),o=s+(n^i&(e^n))+r[2]+4243563512&4294967295,s=e+(o<<9&4294967295|o>>>23),o=i+(e^n&(s^e))+r[7]+1735328473&4294967295,i=s+(o<<14&4294967295|o>>>18),o=n+(s^e&(i^s))+r[12]+2368359562&4294967295,n=i+(o<<20&4294967295|o>>>12),o=e+(n^i^s)+r[5]+4294588738&4294967295,e=n+(o<<4&4294967295|o>>>28),o=s+(e^n^i)+r[8]+2272392833&4294967295,s=e+(o<<11&4294967295|o>>>21),o=i+(s^e^n)+r[11]+1839030562&4294967295,i=s+(o<<16&4294967295|o>>>16),o=n+(i^s^e)+r[14]+4259657740&4294967295,n=i+(o<<23&4294967295|o>>>9),o=e+(n^i^s)+r[1]+2763975236&4294967295,e=n+(o<<4&4294967295|o>>>28),o=s+(e^n^i)+r[4]+1272893353&4294967295,s=e+(o<<11&4294967295|o>>>21),o=i+(s^e^n)+r[7]+4139469664&4294967295,i=s+(o<<16&4294967295|o>>>16),o=n+(i^s^e)+r[10]+3200236656&4294967295,n=i+(o<<23&4294967295|o>>>9),o=e+(n^i^s)+r[13]+681279174&4294967295,e=n+(o<<4&4294967295|o>>>28),o=s+(e^n^i)+r[0]+3936430074&4294967295,s=e+(o<<11&4294967295|o>>>21),o=i+(s^e^n)+r[3]+3572445317&4294967295,i=s+(o<<16&4294967295|o>>>16),o=n+(i^s^e)+r[6]+76029189&4294967295,n=i+(o<<23&4294967295|o>>>9),o=e+(n^i^s)+r[9]+3654602809&4294967295,e=n+(o<<4&4294967295|o>>>28),o=s+(e^n^i)+r[12]+3873151461&4294967295,s=e+(o<<11&4294967295|o>>>21),o=i+(s^e^n)+r[15]+530742520&4294967295,i=s+(o<<16&4294967295|o>>>16),o=n+(i^s^e)+r[2]+3299628645&4294967295,n=i+(o<<23&4294967295|o>>>9),o=e+(i^(n|~s))+r[0]+4096336452&4294967295,e=n+(o<<6&4294967295|o>>>26),o=s+(n^(e|~i))+r[7]+1126891415&4294967295,s=e+(o<<10&4294967295|o>>>22),o=i+(e^(s|~n))+r[14]+2878612391&4294967295,i=s+(o<<15&4294967295|o>>>17),o=n+(s^(i|~e))+r[5]+4237533241&4294967295,n=i+(o<<21&4294967295|o>>>11),o=e+(i^(n|~s))+r[12]+1700485571&4294967295,e=n+(o<<6&4294967295|o>>>26),o=s+(n^(e|~i))+r[3]+2399980690&4294967295,s=e+(o<<10&4294967295|o>>>22),o=i+(e^(s|~n))+r[10]+4293915773&4294967295,i=s+(o<<15&4294967295|o>>>17),o=n+(s^(i|~e))+r[1]+2240044497&4294967295,n=i+(o<<21&4294967295|o>>>11),o=e+(i^(n|~s))+r[8]+1873313359&4294967295,e=n+(o<<6&4294967295|o>>>26),o=s+(n^(e|~i))+r[15]+4264355552&4294967295,s=e+(o<<10&4294967295|o>>>22),o=i+(e^(s|~n))+r[6]+2734768916&4294967295,i=s+(o<<15&4294967295|o>>>17),o=n+(s^(i|~e))+r[13]+1309151649&4294967295,n=i+(o<<21&4294967295|o>>>11),o=e+(i^(n|~s))+r[4]+4149444226&4294967295,e=n+(o<<6&4294967295|o>>>26),o=s+(n^(e|~i))+r[11]+3174756917&4294967295,s=e+(o<<10&4294967295|o>>>22),o=i+(e^(s|~n))+r[2]+718787259&4294967295,i=s+(o<<15&4294967295|o>>>17),o=n+(s^(i|~e))+r[9]+3951481745&4294967295,t.g[0]=t.g[0]+e&4294967295,t.g[1]=t.g[1]+(i+(o<<21&4294967295|o>>>11))&4294967295,t.g[2]=t.g[2]+i&4294967295,t.g[3]=t.g[3]+s&4294967295}qt.prototype.j=function(t,e){e===void 0&&(e=t.length);for(var n=e-this.blockSize,r=this.m,i=this.h,s=0;s<e;){if(i==0)for(;s<=n;)wh(this,t,s),s+=this.blockSize;if(typeof t=="string"){for(;s<e;)if(r[i++]=t.charCodeAt(s++),i==this.blockSize){wh(this,r),i=0;break}}else for(;s<e;)if(r[i++]=t[s++],i==this.blockSize){wh(this,r),i=0;break}}this.h=i,this.i+=e};qt.prototype.l=function(){var t=Array((56>this.h?this.blockSize:2*this.blockSize)-this.h);t[0]=128;for(var e=1;e<t.length-8;++e)t[e]=0;var n=8*this.i;for(e=t.length-8;e<t.length;++e)t[e]=n&255,n/=256;for(this.j(t),t=Array(16),e=n=0;4>e;++e)for(var r=0;32>r;r+=8)t[n++]=this.g[e]>>>r&255;return t};function te(t,e){this.h=e;for(var n=[],r=!0,i=t.length-1;0<=i;i--){var s=t[i]|0;r&&s==e||(n[i]=s,r=!1)}this.g=n}var YN={};function lg(t){return-128<=t&&128>t?iN(t,function(e){return new te([e|0],0>e?-1:0)}):new te([t|0],0>t?-1:0)}function en(t){if(isNaN(t)||!isFinite(t))return Ji;if(0>t)return Be(en(-t));for(var e=[],n=1,r=0;t>=n;r++)e[r]=t/n|0,n*=Yd;return new te(e,0)}function fI(t,e){if(t.length==0)throw Error("number format error: empty string");if(e=e||10,2>e||36<e)throw Error("radix out of range: "+e);if(t.charAt(0)=="-")return Be(fI(t.substring(1),e));if(0<=t.indexOf("-"))throw Error('number format error: interior "-" character');for(var n=en(Math.pow(e,8)),r=Ji,i=0;i<t.length;i+=8){var s=Math.min(8,t.length-i),o=parseInt(t.substring(i,i+s),e);8>s?(s=en(Math.pow(e,s)),r=r.R(s).add(en(o))):(r=r.R(n),r=r.add(en(o)))}return r}var Yd=4294967296,Ji=lg(0),Xd=lg(1),p_=lg(16777216);b=te.prototype;b.ea=function(){if(bt(this))return-Be(this).ea();for(var t=0,e=1,n=0;n<this.g.length;n++){var r=this.D(n);t+=(0<=r?r:Yd+r)*e,e*=Yd}return t};b.toString=function(t){if(t=t||10,2>t||36<t)throw Error("radix out of range: "+t);if(_n(this))return"0";if(bt(this))return"-"+Be(this).toString(t);for(var e=en(Math.pow(t,6)),n=this,r="";;){var i=Xu(n,e).g;n=Yu(n,i.R(e));var s=((0<n.g.length?n.g[0]:n.h)>>>0).toString(t);if(n=i,_n(n))return s+r;for(;6>s.length;)s="0"+s;r=s+r}};b.D=function(t){return 0>t?0:t<this.g.length?this.g[t]:this.h};function _n(t){if(t.h!=0)return!1;for(var e=0;e<t.g.length;e++)if(t.g[e]!=0)return!1;return!0}function bt(t){return t.h==-1}b.X=function(t){return t=Yu(this,t),bt(t)?-1:_n(t)?0:1};function Be(t){for(var e=t.g.length,n=[],r=0;r<e;r++)n[r]=~t.g[r];return new te(n,~t.h).add(Xd)}b.abs=function(){return bt(this)?Be(this):this};b.add=function(t){for(var e=Math.max(this.g.length,t.g.length),n=[],r=0,i=0;i<=e;i++){var s=r+(this.D(i)&65535)+(t.D(i)&65535),o=(s>>>16)+(this.D(i)>>>16)+(t.D(i)>>>16);r=o>>>16,s&=65535,o&=65535,n[i]=o<<16|s}return new te(n,n[n.length-1]&-2147483648?-1:0)};function Yu(t,e){return t.add(Be(e))}b.R=function(t){if(_n(this)||_n(t))return Ji;if(bt(this))return bt(t)?Be(this).R(Be(t)):Be(Be(this).R(t));if(bt(t))return Be(this.R(Be(t)));if(0>this.X(p_)&&0>t.X(p_))return en(this.ea()*t.ea());for(var e=this.g.length+t.g.length,n=[],r=0;r<2*e;r++)n[r]=0;for(r=0;r<this.g.length;r++)for(var i=0;i<t.g.length;i++){var s=this.D(r)>>>16,o=this.D(r)&65535,a=t.D(i)>>>16,l=t.D(i)&65535;n[2*r+2*i]+=o*l,Sl(n,2*r+2*i),n[2*r+2*i+1]+=s*l,Sl(n,2*r+2*i+1),n[2*r+2*i+1]+=o*a,Sl(n,2*r+2*i+1),n[2*r+2*i+2]+=s*a,Sl(n,2*r+2*i+2)}for(r=0;r<e;r++)n[r]=n[2*r+1]<<16|n[2*r];for(r=e;r<2*e;r++)n[r]=0;return new te(n,0)};function Sl(t,e){for(;(t[e]&65535)!=t[e];)t[e+1]+=t[e]>>>16,t[e]&=65535,e++}function Ws(t,e){this.g=t,this.h=e}function Xu(t,e){if(_n(e))throw Error("division by zero");if(_n(t))return new Ws(Ji,Ji);if(bt(t))return e=Xu(Be(t),e),new Ws(Be(e.g),Be(e.h));if(bt(e))return e=Xu(t,Be(e)),new Ws(Be(e.g),e.h);if(30<t.g.length){if(bt(t)||bt(e))throw Error("slowDivide_ only works with positive integers.");for(var n=Xd,r=e;0>=r.X(t);)n=m_(n),r=m_(r);var i=Ti(n,1),s=Ti(r,1);for(r=Ti(r,2),n=Ti(n,2);!_n(r);){var o=s.add(r);0>=o.X(t)&&(i=i.add(n),s=o),r=Ti(r,1),n=Ti(n,1)}return e=Yu(t,i.R(e)),new Ws(i,e)}for(i=Ji;0<=t.X(e);){for(n=Math.max(1,Math.floor(t.ea()/e.ea())),r=Math.ceil(Math.log(n)/Math.LN2),r=48>=r?1:Math.pow(2,r-48),s=en(n),o=s.R(e);bt(o)||0<o.X(t);)n-=r,s=en(n),o=s.R(e);_n(s)&&(s=Xd),i=i.add(s),t=Yu(t,o)}return new Ws(i,t)}b.gb=function(t){return Xu(this,t).h};b.and=function(t){for(var e=Math.max(this.g.length,t.g.length),n=[],r=0;r<e;r++)n[r]=this.D(r)&t.D(r);return new te(n,this.h&t.h)};b.or=function(t){for(var e=Math.max(this.g.length,t.g.length),n=[],r=0;r<e;r++)n[r]=this.D(r)|t.D(r);return new te(n,this.h|t.h)};b.xor=function(t){for(var e=Math.max(this.g.length,t.g.length),n=[],r=0;r<e;r++)n[r]=this.D(r)^t.D(r);return new te(n,this.h^t.h)};function m_(t){for(var e=t.g.length+1,n=[],r=0;r<e;r++)n[r]=t.D(r)<<1|t.D(r-1)>>>31;return new te(n,t.h)}function Ti(t,e){var n=e>>5;e%=32;for(var r=t.g.length-n,i=[],s=0;s<r;s++)i[s]=0<e?t.D(s+n)>>>e|t.D(s+n+1)<<32-e:t.D(s+n);return new te(i,t.h)}Qu.prototype.createWebChannel=Qu.prototype.g;St.prototype.send=St.prototype.u;St.prototype.open=St.prototype.m;St.prototype.close=St.prototype.close;Bc.NO_ERROR=0;Bc.TIMEOUT=8;Bc.HTTP_ERROR=6;CT.COMPLETE="complete";RT.EventType=ba;ba.OPEN="a";ba.CLOSE="b";ba.ERROR="c";ba.MESSAGE="d";$e.prototype.listen=$e.prototype.O;Ee.prototype.listenOnce=Ee.prototype.P;Ee.prototype.getLastError=Ee.prototype.Sa;Ee.prototype.getLastErrorCode=Ee.prototype.Ia;Ee.prototype.getStatus=Ee.prototype.da;Ee.prototype.getResponseJson=Ee.prototype.Wa;Ee.prototype.getResponseText=Ee.prototype.ja;Ee.prototype.send=Ee.prototype.ha;Ee.prototype.setWithCredentials=Ee.prototype.Oa;qt.prototype.digest=qt.prototype.l;qt.prototype.reset=qt.prototype.reset;qt.prototype.update=qt.prototype.j;te.prototype.add=te.prototype.add;te.prototype.multiply=te.prototype.R;te.prototype.modulo=te.prototype.gb;te.prototype.compare=te.prototype.X;te.prototype.toNumber=te.prototype.ea;te.prototype.toString=te.prototype.toString;te.prototype.getBits=te.prototype.D;te.fromNumber=en;te.fromString=fI;var XN=function(){return new Qu},JN=function(){return zc()},Eh=Bc,ZN=CT,eO=yi,g_={xb:0,Ab:1,Bb:2,Ub:3,Zb:4,Wb:5,Xb:6,Vb:7,Tb:8,Yb:9,PROXY:10,NOPROXY:11,Rb:12,Nb:13,Ob:14,Mb:15,Pb:16,Qb:17,tb:18,sb:19,ub:20},Al=RT,tO=Ee,nO=qt,Zi=te;const v_="@firebase/firestore";/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Je{constructor(e){this.uid=e}isAuthenticated(){return this.uid!=null}toKey(){return this.isAuthenticated()?"uid:"+this.uid:"anonymous-user"}isEqual(e){return e.uid===this.uid}}Je.UNAUTHENTICATED=new Je(null),Je.GOOGLE_CREDENTIALS=new Je("google-credentials-uid"),Je.FIRST_PARTY=new Je("first-party-uid"),Je.MOCK_USER=new Je("mock-user");/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */let Rs="10.8.0";/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const ci=new Rm("@firebase/firestore");function qs(){return ci.logLevel}function R(t,...e){if(ci.logLevel<=Y.DEBUG){const n=e.map(ug);ci.debug(`Firestore (${Rs}): ${t}`,...n)}}function cn(t,...e){if(ci.logLevel<=Y.ERROR){const n=e.map(ug);ci.error(`Firestore (${Rs}): ${t}`,...n)}}function fs(t,...e){if(ci.logLevel<=Y.WARN){const n=e.map(ug);ci.warn(`Firestore (${Rs}): ${t}`,...n)}}function ug(t){if(typeof t=="string")return t;try{/**
* @license
* Copyright 2020 Google LLC
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*   http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*/return function(n){return JSON.stringify(n)}(t)}catch{return t}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function U(t="Unexpected state"){const e=`FIRESTORE (${Rs}) INTERNAL ASSERTION FAILED: `+t;throw cn(e),new Error(e)}function re(t,e){t||U()}function H(t,e){return t}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const T={OK:"ok",CANCELLED:"cancelled",UNKNOWN:"unknown",INVALID_ARGUMENT:"invalid-argument",DEADLINE_EXCEEDED:"deadline-exceeded",NOT_FOUND:"not-found",ALREADY_EXISTS:"already-exists",PERMISSION_DENIED:"permission-denied",UNAUTHENTICATED:"unauthenticated",RESOURCE_EXHAUSTED:"resource-exhausted",FAILED_PRECONDITION:"failed-precondition",ABORTED:"aborted",OUT_OF_RANGE:"out-of-range",UNIMPLEMENTED:"unimplemented",INTERNAL:"internal",UNAVAILABLE:"unavailable",DATA_LOSS:"data-loss"};class x extends Nn{constructor(e,n){super(e,n),this.code=e,this.message=n,this.toString=()=>`${this.name}: [code=${this.code}]: ${this.message}`}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class an{constructor(){this.promise=new Promise((e,n)=>{this.resolve=e,this.reject=n})}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class hI{constructor(e,n){this.user=n,this.type="OAuth",this.headers=new Map,this.headers.set("Authorization",`Bearer ${e}`)}}class rO{getToken(){return Promise.resolve(null)}invalidateToken(){}start(e,n){e.enqueueRetryable(()=>n(Je.UNAUTHENTICATED))}shutdown(){}}class iO{constructor(e){this.token=e,this.changeListener=null}getToken(){return Promise.resolve(this.token)}invalidateToken(){}start(e,n){this.changeListener=n,e.enqueueRetryable(()=>n(this.token.user))}shutdown(){this.changeListener=null}}class sO{constructor(e){this.t=e,this.currentUser=Je.UNAUTHENTICATED,this.i=0,this.forceRefresh=!1,this.auth=null}start(e,n){let r=this.i;const i=l=>this.i!==r?(r=this.i,n(l)):Promise.resolve();let s=new an;this.o=()=>{this.i++,this.currentUser=this.u(),s.resolve(),s=new an,e.enqueueRetryable(()=>i(this.currentUser))};const o=()=>{const l=s;e.enqueueRetryable(async()=>{await l.promise,await i(this.currentUser)})},a=l=>{R("FirebaseAuthCredentialsProvider","Auth detected"),this.auth=l,this.auth.addAuthTokenListener(this.o),o()};this.t.onInit(l=>a(l)),setTimeout(()=>{if(!this.auth){const l=this.t.getImmediate({optional:!0});l?a(l):(R("FirebaseAuthCredentialsProvider","Auth not yet detected"),s.resolve(),s=new an)}},0),o()}getToken(){const e=this.i,n=this.forceRefresh;return this.forceRefresh=!1,this.auth?this.auth.getToken(n).then(r=>this.i!==e?(R("FirebaseAuthCredentialsProvider","getToken aborted due to token change."),this.getToken()):r?(re(typeof r.accessToken=="string"),new hI(r.accessToken,this.currentUser)):null):Promise.resolve(null)}invalidateToken(){this.forceRefresh=!0}shutdown(){this.auth&&this.auth.removeAuthTokenListener(this.o)}u(){const e=this.auth&&this.auth.getUid();return re(e===null||typeof e=="string"),new Je(e)}}class oO{constructor(e,n,r){this.l=e,this.h=n,this.P=r,this.type="FirstParty",this.user=Je.FIRST_PARTY,this.I=new Map}T(){return this.P?this.P():null}get headers(){this.I.set("X-Goog-AuthUser",this.l);const e=this.T();return e&&this.I.set("Authorization",e),this.h&&this.I.set("X-Goog-Iam-Authorization-Token",this.h),this.I}}class aO{constructor(e,n,r){this.l=e,this.h=n,this.P=r}getToken(){return Promise.resolve(new oO(this.l,this.h,this.P))}start(e,n){e.enqueueRetryable(()=>n(Je.FIRST_PARTY))}shutdown(){}invalidateToken(){}}class lO{constructor(e){this.value=e,this.type="AppCheck",this.headers=new Map,e&&e.length>0&&this.headers.set("x-firebase-appcheck",this.value)}}class uO{constructor(e){this.A=e,this.forceRefresh=!1,this.appCheck=null,this.R=null}start(e,n){const r=s=>{s.error!=null&&R("FirebaseAppCheckTokenProvider",`Error getting App Check token; using placeholder token instead. Error: ${s.error.message}`);const o=s.token!==this.R;return this.R=s.token,R("FirebaseAppCheckTokenProvider",`Received ${o?"new":"existing"} token.`),o?n(s.token):Promise.resolve()};this.o=s=>{e.enqueueRetryable(()=>r(s))};const i=s=>{R("FirebaseAppCheckTokenProvider","AppCheck detected"),this.appCheck=s,this.appCheck.addTokenListener(this.o)};this.A.onInit(s=>i(s)),setTimeout(()=>{if(!this.appCheck){const s=this.A.getImmediate({optional:!0});s?i(s):R("FirebaseAppCheckTokenProvider","AppCheck not yet detected")}},0)}getToken(){const e=this.forceRefresh;return this.forceRefresh=!1,this.appCheck?this.appCheck.getToken(e).then(n=>n?(re(typeof n.token=="string"),this.R=n.token,new lO(n.token)):null):Promise.resolve(null)}invalidateToken(){this.forceRefresh=!0}shutdown(){this.appCheck&&this.appCheck.removeTokenListener(this.o)}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function cO(t){const e=typeof self<"u"&&(self.crypto||self.msCrypto),n=new Uint8Array(t);if(e&&typeof e.getRandomValues=="function")e.getRandomValues(n);else for(let r=0;r<t;r++)n[r]=Math.floor(256*Math.random());return n}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class dI{static newId(){const e="ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789",n=Math.floor(256/e.length)*e.length;let r="";for(;r.length<20;){const i=cO(40);for(let s=0;s<i.length;++s)r.length<20&&i[s]<n&&(r+=e.charAt(i[s]%e.length))}return r}}function Z(t,e){return t<e?-1:t>e?1:0}function hs(t,e,n){return t.length===e.length&&t.every((r,i)=>n(r,e[i]))}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Ne{constructor(e,n){if(this.seconds=e,this.nanoseconds=n,n<0)throw new x(T.INVALID_ARGUMENT,"Timestamp nanoseconds out of range: "+n);if(n>=1e9)throw new x(T.INVALID_ARGUMENT,"Timestamp nanoseconds out of range: "+n);if(e<-62135596800)throw new x(T.INVALID_ARGUMENT,"Timestamp seconds out of range: "+e);if(e>=253402300800)throw new x(T.INVALID_ARGUMENT,"Timestamp seconds out of range: "+e)}static now(){return Ne.fromMillis(Date.now())}static fromDate(e){return Ne.fromMillis(e.getTime())}static fromMillis(e){const n=Math.floor(e/1e3),r=Math.floor(1e6*(e-1e3*n));return new Ne(n,r)}toDate(){return new Date(this.toMillis())}toMillis(){return 1e3*this.seconds+this.nanoseconds/1e6}_compareTo(e){return this.seconds===e.seconds?Z(this.nanoseconds,e.nanoseconds):Z(this.seconds,e.seconds)}isEqual(e){return e.seconds===this.seconds&&e.nanoseconds===this.nanoseconds}toString(){return"Timestamp(seconds="+this.seconds+", nanoseconds="+this.nanoseconds+")"}toJSON(){return{seconds:this.seconds,nanoseconds:this.nanoseconds}}valueOf(){const e=this.seconds- -62135596800;return String(e).padStart(12,"0")+"."+String(this.nanoseconds).padStart(9,"0")}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class z{constructor(e){this.timestamp=e}static fromTimestamp(e){return new z(e)}static min(){return new z(new Ne(0,0))}static max(){return new z(new Ne(253402300799,999999999))}compareTo(e){return this.timestamp._compareTo(e.timestamp)}isEqual(e){return this.timestamp.isEqual(e.timestamp)}toMicroseconds(){return 1e6*this.timestamp.seconds+this.timestamp.nanoseconds/1e3}toString(){return"SnapshotVersion("+this.timestamp.toString()+")"}toTimestamp(){return this.timestamp}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class ta{constructor(e,n,r){n===void 0?n=0:n>e.length&&U(),r===void 0?r=e.length-n:r>e.length-n&&U(),this.segments=e,this.offset=n,this.len=r}get length(){return this.len}isEqual(e){return ta.comparator(this,e)===0}child(e){const n=this.segments.slice(this.offset,this.limit());return e instanceof ta?e.forEach(r=>{n.push(r)}):n.push(e),this.construct(n)}limit(){return this.offset+this.length}popFirst(e){return e=e===void 0?1:e,this.construct(this.segments,this.offset+e,this.length-e)}popLast(){return this.construct(this.segments,this.offset,this.length-1)}firstSegment(){return this.segments[this.offset]}lastSegment(){return this.get(this.length-1)}get(e){return this.segments[this.offset+e]}isEmpty(){return this.length===0}isPrefixOf(e){if(e.length<this.length)return!1;for(let n=0;n<this.length;n++)if(this.get(n)!==e.get(n))return!1;return!0}isImmediateParentOf(e){if(this.length+1!==e.length)return!1;for(let n=0;n<this.length;n++)if(this.get(n)!==e.get(n))return!1;return!0}forEach(e){for(let n=this.offset,r=this.limit();n<r;n++)e(this.segments[n])}toArray(){return this.segments.slice(this.offset,this.limit())}static comparator(e,n){const r=Math.min(e.length,n.length);for(let i=0;i<r;i++){const s=e.get(i),o=n.get(i);if(s<o)return-1;if(s>o)return 1}return e.length<n.length?-1:e.length>n.length?1:0}}class ae extends ta{construct(e,n,r){return new ae(e,n,r)}canonicalString(){return this.toArray().join("/")}toString(){return this.canonicalString()}toUriEncodedString(){return this.toArray().map(encodeURIComponent).join("/")}static fromString(...e){const n=[];for(const r of e){if(r.indexOf("//")>=0)throw new x(T.INVALID_ARGUMENT,`Invalid segment (${r}). Paths must not contain // in them.`);n.push(...r.split("/").filter(i=>i.length>0))}return new ae(n)}static emptyPath(){return new ae([])}}const fO=/^[_a-zA-Z][_a-zA-Z0-9]*$/;class He extends ta{construct(e,n,r){return new He(e,n,r)}static isValidIdentifier(e){return fO.test(e)}canonicalString(){return this.toArray().map(e=>(e=e.replace(/\\/g,"\\\\").replace(/`/g,"\\`"),He.isValidIdentifier(e)||(e="`"+e+"`"),e)).join(".")}toString(){return this.canonicalString()}isKeyField(){return this.length===1&&this.get(0)==="__name__"}static keyField(){return new He(["__name__"])}static fromServerFormat(e){const n=[];let r="",i=0;const s=()=>{if(r.length===0)throw new x(T.INVALID_ARGUMENT,`Invalid field path (${e}). Paths must not be empty, begin with '.', end with '.', or contain '..'`);n.push(r),r=""};let o=!1;for(;i<e.length;){const a=e[i];if(a==="\\"){if(i+1===e.length)throw new x(T.INVALID_ARGUMENT,"Path has trailing escape character: "+e);const l=e[i+1];if(l!=="\\"&&l!=="."&&l!=="`")throw new x(T.INVALID_ARGUMENT,"Path has invalid escape sequence: "+e);r+=l,i+=2}else a==="`"?(o=!o,i++):a!=="."||o?(r+=a,i++):(s(),i++)}if(s(),o)throw new x(T.INVALID_ARGUMENT,"Unterminated ` in path: "+e);return new He(n)}static emptyPath(){return new He([])}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class V{constructor(e){this.path=e}static fromPath(e){return new V(ae.fromString(e))}static fromName(e){return new V(ae.fromString(e).popFirst(5))}static empty(){return new V(ae.emptyPath())}get collectionGroup(){return this.path.popLast().lastSegment()}hasCollectionId(e){return this.path.length>=2&&this.path.get(this.path.length-2)===e}getCollectionGroup(){return this.path.get(this.path.length-2)}getCollectionPath(){return this.path.popLast()}isEqual(e){return e!==null&&ae.comparator(this.path,e.path)===0}toString(){return this.path.toString()}static comparator(e,n){return ae.comparator(e.path,n.path)}static isDocumentKey(e){return e.length%2==0}static fromSegments(e){return new V(new ae(e.slice()))}}function hO(t,e){const n=t.toTimestamp().seconds,r=t.toTimestamp().nanoseconds+1,i=z.fromTimestamp(r===1e9?new Ne(n+1,0):new Ne(n,r));return new mr(i,V.empty(),e)}function dO(t){return new mr(t.readTime,t.key,-1)}class mr{constructor(e,n,r){this.readTime=e,this.documentKey=n,this.largestBatchId=r}static min(){return new mr(z.min(),V.empty(),-1)}static max(){return new mr(z.max(),V.empty(),-1)}}function pO(t,e){let n=t.readTime.compareTo(e.readTime);return n!==0?n:(n=V.comparator(t.documentKey,e.documentKey),n!==0?n:Z(t.largestBatchId,e.largestBatchId))}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const mO="The current tab is not in the required state to perform this operation. It might be necessary to refresh the browser tab.";class gO{constructor(){this.onCommittedListeners=[]}addOnCommittedListener(e){this.onCommittedListeners.push(e)}raiseOnCommittedEvent(){this.onCommittedListeners.forEach(e=>e())}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function La(t){if(t.code!==T.FAILED_PRECONDITION||t.message!==mO)throw t;R("LocalStore","Unexpectedly lost primary lease")}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class S{constructor(e){this.nextCallback=null,this.catchCallback=null,this.result=void 0,this.error=void 0,this.isDone=!1,this.callbackAttached=!1,e(n=>{this.isDone=!0,this.result=n,this.nextCallback&&this.nextCallback(n)},n=>{this.isDone=!0,this.error=n,this.catchCallback&&this.catchCallback(n)})}catch(e){return this.next(void 0,e)}next(e,n){return this.callbackAttached&&U(),this.callbackAttached=!0,this.isDone?this.error?this.wrapFailure(n,this.error):this.wrapSuccess(e,this.result):new S((r,i)=>{this.nextCallback=s=>{this.wrapSuccess(e,s).next(r,i)},this.catchCallback=s=>{this.wrapFailure(n,s).next(r,i)}})}toPromise(){return new Promise((e,n)=>{this.next(e,n)})}wrapUserFunction(e){try{const n=e();return n instanceof S?n:S.resolve(n)}catch(n){return S.reject(n)}}wrapSuccess(e,n){return e?this.wrapUserFunction(()=>e(n)):S.resolve(n)}wrapFailure(e,n){return e?this.wrapUserFunction(()=>e(n)):S.reject(n)}static resolve(e){return new S((n,r)=>{n(e)})}static reject(e){return new S((n,r)=>{r(e)})}static waitFor(e){return new S((n,r)=>{let i=0,s=0,o=!1;e.forEach(a=>{++i,a.next(()=>{++s,o&&s===i&&n()},l=>r(l))}),o=!0,s===i&&n()})}static or(e){let n=S.resolve(!1);for(const r of e)n=n.next(i=>i?S.resolve(i):r());return n}static forEach(e,n){const r=[];return e.forEach((i,s)=>{r.push(n.call(this,i,s))}),this.waitFor(r)}static mapArray(e,n){return new S((r,i)=>{const s=e.length,o=new Array(s);let a=0;for(let l=0;l<s;l++){const u=l;n(e[u]).next(c=>{o[u]=c,++a,a===s&&r(o)},c=>i(c))}})}static doWhile(e,n){return new S((r,i)=>{const s=()=>{e()===!0?n().next(()=>{s()},i):r()};s()})}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class cg{constructor(e,n){this.action=e,this.transaction=n,this.aborted=!1,this.V=new an,this.transaction.oncomplete=()=>{this.V.resolve()},this.transaction.onabort=()=>{n.error?this.V.reject(new vo(e,n.error)):this.V.resolve()},this.transaction.onerror=r=>{const i=fg(r.target.error);this.V.reject(new vo(e,i))}}static open(e,n,r,i){try{return new cg(n,e.transaction(i,r))}catch(s){throw new vo(n,s)}}get m(){return this.V.promise}abort(e){e&&this.V.reject(e),this.aborted||(R("SimpleDb","Aborting transaction:",e?e.message:"Client-initiated abort"),this.aborted=!0,this.transaction.abort())}g(){const e=this.transaction;this.aborted||typeof e.commit!="function"||e.commit()}store(e){const n=this.transaction.objectStore(e);return new yO(n)}}class Kr{constructor(e,n,r){this.name=e,this.version=n,this.p=r,Kr.S(Re())===12.2&&cn("Firestore persistence suffers from a bug in iOS 12.2 Safari that may cause your app to stop working. See https://stackoverflow.com/q/56496296/110915 for details and a potential workaround.")}static delete(e){return R("SimpleDb","Removing database:",e),jr(window.indexedDB.deleteDatabase(e)).toPromise()}static D(){if(!AE())return!1;if(Kr.C())return!0;const e=Re(),n=Kr.S(e),r=0<n&&n<10,i=Kr.v(e),s=0<i&&i<4.5;return!(e.indexOf("MSIE ")>0||e.indexOf("Trident/")>0||e.indexOf("Edge/")>0||r||s)}static C(){var e;return typeof process<"u"&&((e=process.__PRIVATE_env)===null||e===void 0?void 0:e.F)==="YES"}static M(e,n){return e.store(n)}static S(e){const n=e.match(/i(?:phone|pad|pod) os ([\d_]+)/i),r=n?n[1].split("_").slice(0,2).join("."):"-1";return Number(r)}static v(e){const n=e.match(/Android ([\d.]+)/i),r=n?n[1].split(".").slice(0,2).join("."):"-1";return Number(r)}async O(e){return this.db||(R("SimpleDb","Opening database:",this.name),this.db=await new Promise((n,r)=>{const i=indexedDB.open(this.name,this.version);i.onsuccess=s=>{const o=s.target.result;n(o)},i.onblocked=()=>{r(new vo(e,"Cannot upgrade IndexedDB schema while another tab is open. Close all tabs that access Firestore and reload this page to proceed."))},i.onerror=s=>{const o=s.target.error;o.name==="VersionError"?r(new x(T.FAILED_PRECONDITION,"A newer version of the Firestore SDK was previously used and so the persisted data is not compatible with the version of the SDK you are now using. The SDK will operate with persistence disabled. If you need persistence, please re-upgrade to a newer version of the SDK or else clear the persisted IndexedDB data for your app to start fresh.")):o.name==="InvalidStateError"?r(new x(T.FAILED_PRECONDITION,"Unable to open an IndexedDB connection. This could be due to running in a private browsing session on a browser whose private browsing sessions do not support IndexedDB: "+o)):r(new vo(e,o))},i.onupgradeneeded=s=>{R("SimpleDb",'Database "'+this.name+'" requires upgrade from version:',s.oldVersion);const o=s.target.result;this.p.N(o,i.transaction,s.oldVersion,this.version).next(()=>{R("SimpleDb","Database upgrade to version "+this.version+" complete")})}})),this.B&&(this.db.onversionchange=n=>this.B(n)),this.db}L(e){this.B=e,this.db&&(this.db.onversionchange=n=>e(n))}async runTransaction(e,n,r,i){const s=n==="readonly";let o=0;for(;;){++o;try{this.db=await this.O(e);const a=cg.open(this.db,e,s?"readonly":"readwrite",r),l=i(a).next(u=>(a.g(),u)).catch(u=>(a.abort(u),S.reject(u))).toPromise();return l.catch(()=>{}),await a.m,l}catch(a){const l=a,u=l.name!=="FirebaseError"&&o<3;if(R("SimpleDb","Transaction failed with error:",l.message,"Retrying:",u),this.close(),!u)return Promise.reject(l)}}}close(){this.db&&this.db.close(),this.db=void 0}}class vO{constructor(e){this.k=e,this.q=!1,this.K=null}get isDone(){return this.q}get $(){return this.K}set cursor(e){this.k=e}done(){this.q=!0}U(e){this.K=e}delete(){return jr(this.k.delete())}}class vo extends x{constructor(e,n){super(T.UNAVAILABLE,`IndexedDB transaction '${e}' failed: ${n}`),this.name="IndexedDbTransactionError"}}function Ma(t){return t.name==="IndexedDbTransactionError"}class yO{constructor(e){this.store=e}put(e,n){let r;return n!==void 0?(R("SimpleDb","PUT",this.store.name,e,n),r=this.store.put(n,e)):(R("SimpleDb","PUT",this.store.name,"<auto-key>",e),r=this.store.put(e)),jr(r)}add(e){return R("SimpleDb","ADD",this.store.name,e,e),jr(this.store.add(e))}get(e){return jr(this.store.get(e)).next(n=>(n===void 0&&(n=null),R("SimpleDb","GET",this.store.name,e,n),n))}delete(e){return R("SimpleDb","DELETE",this.store.name,e),jr(this.store.delete(e))}count(){return R("SimpleDb","COUNT",this.store.name),jr(this.store.count())}W(e,n){const r=this.options(e,n),i=r.index?this.store.index(r.index):this.store;if(typeof i.getAll=="function"){const s=i.getAll(r.range);return new S((o,a)=>{s.onerror=l=>{a(l.target.error)},s.onsuccess=l=>{o(l.target.result)}})}{const s=this.cursor(r),o=[];return this.G(s,(a,l)=>{o.push(l)}).next(()=>o)}}j(e,n){const r=this.store.getAll(e,n===null?void 0:n);return new S((i,s)=>{r.onerror=o=>{s(o.target.error)},r.onsuccess=o=>{i(o.target.result)}})}H(e,n){R("SimpleDb","DELETE ALL",this.store.name);const r=this.options(e,n);r.J=!1;const i=this.cursor(r);return this.G(i,(s,o,a)=>a.delete())}Y(e,n){let r;n?r=e:(r={},n=e);const i=this.cursor(r);return this.G(i,n)}Z(e){const n=this.cursor({});return new S((r,i)=>{n.onerror=s=>{const o=fg(s.target.error);i(o)},n.onsuccess=s=>{const o=s.target.result;o?e(o.primaryKey,o.value).next(a=>{a?o.continue():r()}):r()}})}G(e,n){const r=[];return new S((i,s)=>{e.onerror=o=>{s(o.target.error)},e.onsuccess=o=>{const a=o.target.result;if(!a)return void i();const l=new vO(a),u=n(a.primaryKey,a.value,l);if(u instanceof S){const c=u.catch(f=>(l.done(),S.reject(f)));r.push(c)}l.isDone?i():l.$===null?a.continue():a.continue(l.$)}}).next(()=>S.waitFor(r))}options(e,n){let r;return e!==void 0&&(typeof e=="string"?r=e:n=e),{index:r,range:n}}cursor(e){let n="next";if(e.reverse&&(n="prev"),e.index){const r=this.store.index(e.index);return e.J?r.openKeyCursor(e.range,n):r.openCursor(e.range,n)}return this.store.openCursor(e.range,n)}}function jr(t){return new S((e,n)=>{t.onsuccess=r=>{const i=r.target.result;e(i)},t.onerror=r=>{const i=fg(r.target.error);n(i)}})}let y_=!1;function fg(t){const e=Kr.S(Re());if(e>=12.2&&e<13){const n="An internal error was encountered in the Indexed Database server";if(t.message.indexOf(n)>=0){const r=new x("internal",`IOS_INDEXEDDB_BUG1: IndexedDb has thrown '${n}'. This is likely due to an unavoidable bug in iOS. See https://stackoverflow.com/q/56496296/110915 for details and a potential workaround.`);return y_||(y_=!0,setTimeout(()=>{throw r},0)),r}}return t}/**
 * @license
 * Copyright 2018 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class hg{constructor(e,n){this.previousValue=e,n&&(n.sequenceNumberHandler=r=>this.se(r),this.oe=r=>n.writeSequenceNumber(r))}se(e){return this.previousValue=Math.max(e,this.previousValue),this.previousValue}next(){const e=++this.previousValue;return this.oe&&this.oe(e),e}}hg._e=-1;function Jc(t){return t==null}function Ju(t){return t===0&&1/t==-1/0}function _O(t){return typeof t=="number"&&Number.isInteger(t)&&!Ju(t)&&t<=Number.MAX_SAFE_INTEGER&&t>=Number.MIN_SAFE_INTEGER}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function __(t){let e=0;for(const n in t)Object.prototype.hasOwnProperty.call(t,n)&&e++;return e}function _i(t,e){for(const n in t)Object.prototype.hasOwnProperty.call(t,n)&&e(n,t[n])}function pI(t){for(const e in t)if(Object.prototype.hasOwnProperty.call(t,e))return!1;return!0}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class ve{constructor(e,n){this.comparator=e,this.root=n||ze.EMPTY}insert(e,n){return new ve(this.comparator,this.root.insert(e,n,this.comparator).copy(null,null,ze.BLACK,null,null))}remove(e){return new ve(this.comparator,this.root.remove(e,this.comparator).copy(null,null,ze.BLACK,null,null))}get(e){let n=this.root;for(;!n.isEmpty();){const r=this.comparator(e,n.key);if(r===0)return n.value;r<0?n=n.left:r>0&&(n=n.right)}return null}indexOf(e){let n=0,r=this.root;for(;!r.isEmpty();){const i=this.comparator(e,r.key);if(i===0)return n+r.left.size;i<0?r=r.left:(n+=r.left.size+1,r=r.right)}return-1}isEmpty(){return this.root.isEmpty()}get size(){return this.root.size}minKey(){return this.root.minKey()}maxKey(){return this.root.maxKey()}inorderTraversal(e){return this.root.inorderTraversal(e)}forEach(e){this.inorderTraversal((n,r)=>(e(n,r),!1))}toString(){const e=[];return this.inorderTraversal((n,r)=>(e.push(`${n}:${r}`),!1)),`{${e.join(", ")}}`}reverseTraversal(e){return this.root.reverseTraversal(e)}getIterator(){return new kl(this.root,null,this.comparator,!1)}getIteratorFrom(e){return new kl(this.root,e,this.comparator,!1)}getReverseIterator(){return new kl(this.root,null,this.comparator,!0)}getReverseIteratorFrom(e){return new kl(this.root,e,this.comparator,!0)}}class kl{constructor(e,n,r,i){this.isReverse=i,this.nodeStack=[];let s=1;for(;!e.isEmpty();)if(s=n?r(e.key,n):1,n&&i&&(s*=-1),s<0)e=this.isReverse?e.left:e.right;else{if(s===0){this.nodeStack.push(e);break}this.nodeStack.push(e),e=this.isReverse?e.right:e.left}}getNext(){let e=this.nodeStack.pop();const n={key:e.key,value:e.value};if(this.isReverse)for(e=e.left;!e.isEmpty();)this.nodeStack.push(e),e=e.right;else for(e=e.right;!e.isEmpty();)this.nodeStack.push(e),e=e.left;return n}hasNext(){return this.nodeStack.length>0}peek(){if(this.nodeStack.length===0)return null;const e=this.nodeStack[this.nodeStack.length-1];return{key:e.key,value:e.value}}}class ze{constructor(e,n,r,i,s){this.key=e,this.value=n,this.color=r??ze.RED,this.left=i??ze.EMPTY,this.right=s??ze.EMPTY,this.size=this.left.size+1+this.right.size}copy(e,n,r,i,s){return new ze(e??this.key,n??this.value,r??this.color,i??this.left,s??this.right)}isEmpty(){return!1}inorderTraversal(e){return this.left.inorderTraversal(e)||e(this.key,this.value)||this.right.inorderTraversal(e)}reverseTraversal(e){return this.right.reverseTraversal(e)||e(this.key,this.value)||this.left.reverseTraversal(e)}min(){return this.left.isEmpty()?this:this.left.min()}minKey(){return this.min().key}maxKey(){return this.right.isEmpty()?this.key:this.right.maxKey()}insert(e,n,r){let i=this;const s=r(e,i.key);return i=s<0?i.copy(null,null,null,i.left.insert(e,n,r),null):s===0?i.copy(null,n,null,null,null):i.copy(null,null,null,null,i.right.insert(e,n,r)),i.fixUp()}removeMin(){if(this.left.isEmpty())return ze.EMPTY;let e=this;return e.left.isRed()||e.left.left.isRed()||(e=e.moveRedLeft()),e=e.copy(null,null,null,e.left.removeMin(),null),e.fixUp()}remove(e,n){let r,i=this;if(n(e,i.key)<0)i.left.isEmpty()||i.left.isRed()||i.left.left.isRed()||(i=i.moveRedLeft()),i=i.copy(null,null,null,i.left.remove(e,n),null);else{if(i.left.isRed()&&(i=i.rotateRight()),i.right.isEmpty()||i.right.isRed()||i.right.left.isRed()||(i=i.moveRedRight()),n(e,i.key)===0){if(i.right.isEmpty())return ze.EMPTY;r=i.right.min(),i=i.copy(r.key,r.value,null,null,i.right.removeMin())}i=i.copy(null,null,null,null,i.right.remove(e,n))}return i.fixUp()}isRed(){return this.color}fixUp(){let e=this;return e.right.isRed()&&!e.left.isRed()&&(e=e.rotateLeft()),e.left.isRed()&&e.left.left.isRed()&&(e=e.rotateRight()),e.left.isRed()&&e.right.isRed()&&(e=e.colorFlip()),e}moveRedLeft(){let e=this.colorFlip();return e.right.left.isRed()&&(e=e.copy(null,null,null,null,e.right.rotateRight()),e=e.rotateLeft(),e=e.colorFlip()),e}moveRedRight(){let e=this.colorFlip();return e.left.left.isRed()&&(e=e.rotateRight(),e=e.colorFlip()),e}rotateLeft(){const e=this.copy(null,null,ze.RED,null,this.right.left);return this.right.copy(null,null,this.color,e,null)}rotateRight(){const e=this.copy(null,null,ze.RED,this.left.right,null);return this.left.copy(null,null,this.color,null,e)}colorFlip(){const e=this.left.copy(null,null,!this.left.color,null,null),n=this.right.copy(null,null,!this.right.color,null,null);return this.copy(null,null,!this.color,e,n)}checkMaxDepth(){const e=this.check();return Math.pow(2,e)<=this.size+1}check(){if(this.isRed()&&this.left.isRed()||this.right.isRed())throw U();const e=this.left.check();if(e!==this.right.check())throw U();return e+(this.isRed()?0:1)}}ze.EMPTY=null,ze.RED=!0,ze.BLACK=!1;ze.EMPTY=new class{constructor(){this.size=0}get key(){throw U()}get value(){throw U()}get color(){throw U()}get left(){throw U()}get right(){throw U()}copy(e,n,r,i,s){return this}insert(e,n,r){return new ze(e,n)}remove(e,n){return this}isEmpty(){return!0}inorderTraversal(e){return!1}reverseTraversal(e){return!1}minKey(){return null}maxKey(){return null}isRed(){return!1}checkMaxDepth(){return!0}check(){return 0}};/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Ke{constructor(e){this.comparator=e,this.data=new ve(this.comparator)}has(e){return this.data.get(e)!==null}first(){return this.data.minKey()}last(){return this.data.maxKey()}get size(){return this.data.size}indexOf(e){return this.data.indexOf(e)}forEach(e){this.data.inorderTraversal((n,r)=>(e(n),!1))}forEachInRange(e,n){const r=this.data.getIteratorFrom(e[0]);for(;r.hasNext();){const i=r.getNext();if(this.comparator(i.key,e[1])>=0)return;n(i.key)}}forEachWhile(e,n){let r;for(r=n!==void 0?this.data.getIteratorFrom(n):this.data.getIterator();r.hasNext();)if(!e(r.getNext().key))return}firstAfterOrEqual(e){const n=this.data.getIteratorFrom(e);return n.hasNext()?n.getNext().key:null}getIterator(){return new w_(this.data.getIterator())}getIteratorFrom(e){return new w_(this.data.getIteratorFrom(e))}add(e){return this.copy(this.data.remove(e).insert(e,!0))}delete(e){return this.has(e)?this.copy(this.data.remove(e)):this}isEmpty(){return this.data.isEmpty()}unionWith(e){let n=this;return n.size<e.size&&(n=e,e=this),e.forEach(r=>{n=n.add(r)}),n}isEqual(e){if(!(e instanceof Ke)||this.size!==e.size)return!1;const n=this.data.getIterator(),r=e.data.getIterator();for(;n.hasNext();){const i=n.getNext().key,s=r.getNext().key;if(this.comparator(i,s)!==0)return!1}return!0}toArray(){const e=[];return this.forEach(n=>{e.push(n)}),e}toString(){const e=[];return this.forEach(n=>e.push(n)),"SortedSet("+e.toString()+")"}copy(e){const n=new Ke(this.comparator);return n.data=e,n}}class w_{constructor(e){this.iter=e}getNext(){return this.iter.getNext().key}hasNext(){return this.iter.hasNext()}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class wt{constructor(e){this.fields=e,e.sort(He.comparator)}static empty(){return new wt([])}unionWith(e){let n=new Ke(He.comparator);for(const r of this.fields)n=n.add(r);for(const r of e)n=n.add(r);return new wt(n.toArray())}covers(e){for(const n of this.fields)if(n.isPrefixOf(e))return!0;return!1}isEqual(e){return hs(this.fields,e.fields,(n,r)=>n.isEqual(r))}}/**
 * @license
 * Copyright 2023 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class mI extends Error{constructor(){super(...arguments),this.name="Base64DecodeError"}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class st{constructor(e){this.binaryString=e}static fromBase64String(e){const n=function(i){try{return atob(i)}catch(s){throw typeof DOMException<"u"&&s instanceof DOMException?new mI("Invalid base64 string: "+s):s}}(e);return new st(n)}static fromUint8Array(e){const n=function(i){let s="";for(let o=0;o<i.length;++o)s+=String.fromCharCode(i[o]);return s}(e);return new st(n)}[Symbol.iterator](){let e=0;return{next:()=>e<this.binaryString.length?{value:this.binaryString.charCodeAt(e++),done:!1}:{value:void 0,done:!0}}}toBase64(){return function(n){return btoa(n)}(this.binaryString)}toUint8Array(){return function(n){const r=new Uint8Array(n.length);for(let i=0;i<n.length;i++)r[i]=n.charCodeAt(i);return r}(this.binaryString)}approximateByteSize(){return 2*this.binaryString.length}compareTo(e){return Z(this.binaryString,e.binaryString)}isEqual(e){return this.binaryString===e.binaryString}}st.EMPTY_BYTE_STRING=new st("");const wO=new RegExp(/^\d{4}-\d\d-\d\dT\d\d:\d\d:\d\d(?:\.(\d+))?Z$/);function gr(t){if(re(!!t),typeof t=="string"){let e=0;const n=wO.exec(t);if(re(!!n),n[1]){let i=n[1];i=(i+"000000000").substr(0,9),e=Number(i)}const r=new Date(t);return{seconds:Math.floor(r.getTime()/1e3),nanos:e}}return{seconds:ke(t.seconds),nanos:ke(t.nanos)}}function ke(t){return typeof t=="number"?t:typeof t=="string"?Number(t):0}function fi(t){return typeof t=="string"?st.fromBase64String(t):st.fromUint8Array(t)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function dg(t){var e,n;return((n=(((e=t==null?void 0:t.mapValue)===null||e===void 0?void 0:e.fields)||{}).__type__)===null||n===void 0?void 0:n.stringValue)==="server_timestamp"}function pg(t){const e=t.mapValue.fields.__previous_value__;return dg(e)?pg(e):e}function na(t){const e=gr(t.mapValue.fields.__local_write_time__.timestampValue);return new Ne(e.seconds,e.nanos)}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class EO{constructor(e,n,r,i,s,o,a,l,u){this.databaseId=e,this.appId=n,this.persistenceKey=r,this.host=i,this.ssl=s,this.forceLongPolling=o,this.autoDetectLongPolling=a,this.longPollingOptions=l,this.useFetchStreams=u}}class ra{constructor(e,n){this.projectId=e,this.database=n||"(default)"}static empty(){return new ra("","")}get isDefaultDatabase(){return this.database==="(default)"}isEqual(e){return e instanceof ra&&e.projectId===this.projectId&&e.database===this.database}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Pl={mapValue:{fields:{__type__:{stringValue:"__max__"}}}};function hi(t){return"nullValue"in t?0:"booleanValue"in t?1:"integerValue"in t||"doubleValue"in t?2:"timestampValue"in t?3:"stringValue"in t?5:"bytesValue"in t?6:"referenceValue"in t?7:"geoPointValue"in t?8:"arrayValue"in t?9:"mapValue"in t?dg(t)?4:TO(t)?9007199254740991:10:U()}function fn(t,e){if(t===e)return!0;const n=hi(t);if(n!==hi(e))return!1;switch(n){case 0:case 9007199254740991:return!0;case 1:return t.booleanValue===e.booleanValue;case 4:return na(t).isEqual(na(e));case 3:return function(i,s){if(typeof i.timestampValue=="string"&&typeof s.timestampValue=="string"&&i.timestampValue.length===s.timestampValue.length)return i.timestampValue===s.timestampValue;const o=gr(i.timestampValue),a=gr(s.timestampValue);return o.seconds===a.seconds&&o.nanos===a.nanos}(t,e);case 5:return t.stringValue===e.stringValue;case 6:return function(i,s){return fi(i.bytesValue).isEqual(fi(s.bytesValue))}(t,e);case 7:return t.referenceValue===e.referenceValue;case 8:return function(i,s){return ke(i.geoPointValue.latitude)===ke(s.geoPointValue.latitude)&&ke(i.geoPointValue.longitude)===ke(s.geoPointValue.longitude)}(t,e);case 2:return function(i,s){if("integerValue"in i&&"integerValue"in s)return ke(i.integerValue)===ke(s.integerValue);if("doubleValue"in i&&"doubleValue"in s){const o=ke(i.doubleValue),a=ke(s.doubleValue);return o===a?Ju(o)===Ju(a):isNaN(o)&&isNaN(a)}return!1}(t,e);case 9:return hs(t.arrayValue.values||[],e.arrayValue.values||[],fn);case 10:return function(i,s){const o=i.mapValue.fields||{},a=s.mapValue.fields||{};if(__(o)!==__(a))return!1;for(const l in o)if(o.hasOwnProperty(l)&&(a[l]===void 0||!fn(o[l],a[l])))return!1;return!0}(t,e);default:return U()}}function ia(t,e){return(t.values||[]).find(n=>fn(n,e))!==void 0}function ds(t,e){if(t===e)return 0;const n=hi(t),r=hi(e);if(n!==r)return Z(n,r);switch(n){case 0:case 9007199254740991:return 0;case 1:return Z(t.booleanValue,e.booleanValue);case 2:return function(s,o){const a=ke(s.integerValue||s.doubleValue),l=ke(o.integerValue||o.doubleValue);return a<l?-1:a>l?1:a===l?0:isNaN(a)?isNaN(l)?0:-1:1}(t,e);case 3:return E_(t.timestampValue,e.timestampValue);case 4:return E_(na(t),na(e));case 5:return Z(t.stringValue,e.stringValue);case 6:return function(s,o){const a=fi(s),l=fi(o);return a.compareTo(l)}(t.bytesValue,e.bytesValue);case 7:return function(s,o){const a=s.split("/"),l=o.split("/");for(let u=0;u<a.length&&u<l.length;u++){const c=Z(a[u],l[u]);if(c!==0)return c}return Z(a.length,l.length)}(t.referenceValue,e.referenceValue);case 8:return function(s,o){const a=Z(ke(s.latitude),ke(o.latitude));return a!==0?a:Z(ke(s.longitude),ke(o.longitude))}(t.geoPointValue,e.geoPointValue);case 9:return function(s,o){const a=s.values||[],l=o.values||[];for(let u=0;u<a.length&&u<l.length;++u){const c=ds(a[u],l[u]);if(c)return c}return Z(a.length,l.length)}(t.arrayValue,e.arrayValue);case 10:return function(s,o){if(s===Pl.mapValue&&o===Pl.mapValue)return 0;if(s===Pl.mapValue)return 1;if(o===Pl.mapValue)return-1;const a=s.fields||{},l=Object.keys(a),u=o.fields||{},c=Object.keys(u);l.sort(),c.sort();for(let f=0;f<l.length&&f<c.length;++f){const h=Z(l[f],c[f]);if(h!==0)return h;const p=ds(a[l[f]],u[c[f]]);if(p!==0)return p}return Z(l.length,c.length)}(t.mapValue,e.mapValue);default:throw U()}}function E_(t,e){if(typeof t=="string"&&typeof e=="string"&&t.length===e.length)return Z(t,e);const n=gr(t),r=gr(e),i=Z(n.seconds,r.seconds);return i!==0?i:Z(n.nanos,r.nanos)}function ps(t){return Jd(t)}function Jd(t){return"nullValue"in t?"null":"booleanValue"in t?""+t.booleanValue:"integerValue"in t?""+t.integerValue:"doubleValue"in t?""+t.doubleValue:"timestampValue"in t?function(n){const r=gr(n);return`time(${r.seconds},${r.nanos})`}(t.timestampValue):"stringValue"in t?t.stringValue:"bytesValue"in t?function(n){return fi(n).toBase64()}(t.bytesValue):"referenceValue"in t?function(n){return V.fromName(n).toString()}(t.referenceValue):"geoPointValue"in t?function(n){return`geo(${n.latitude},${n.longitude})`}(t.geoPointValue):"arrayValue"in t?function(n){let r="[",i=!0;for(const s of n.values||[])i?i=!1:r+=",",r+=Jd(s);return r+"]"}(t.arrayValue):"mapValue"in t?function(n){const r=Object.keys(n.fields||{}).sort();let i="{",s=!0;for(const o of r)s?s=!1:i+=",",i+=`${o}:${Jd(n.fields[o])}`;return i+"}"}(t.mapValue):U()}function T_(t,e){return{referenceValue:`projects/${t.projectId}/databases/${t.database}/documents/${e.path.canonicalString()}`}}function Zd(t){return!!t&&"integerValue"in t}function mg(t){return!!t&&"arrayValue"in t}function I_(t){return!!t&&"nullValue"in t}function S_(t){return!!t&&"doubleValue"in t&&isNaN(Number(t.doubleValue))}function su(t){return!!t&&"mapValue"in t}function yo(t){if(t.geoPointValue)return{geoPointValue:Object.assign({},t.geoPointValue)};if(t.timestampValue&&typeof t.timestampValue=="object")return{timestampValue:Object.assign({},t.timestampValue)};if(t.mapValue){const e={mapValue:{fields:{}}};return _i(t.mapValue.fields,(n,r)=>e.mapValue.fields[n]=yo(r)),e}if(t.arrayValue){const e={arrayValue:{values:[]}};for(let n=0;n<(t.arrayValue.values||[]).length;++n)e.arrayValue.values[n]=yo(t.arrayValue.values[n]);return e}return Object.assign({},t)}function TO(t){return(((t.mapValue||{}).fields||{}).__type__||{}).stringValue==="__max__"}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class dt{constructor(e){this.value=e}static empty(){return new dt({mapValue:{}})}field(e){if(e.isEmpty())return this.value;{let n=this.value;for(let r=0;r<e.length-1;++r)if(n=(n.mapValue.fields||{})[e.get(r)],!su(n))return null;return n=(n.mapValue.fields||{})[e.lastSegment()],n||null}}set(e,n){this.getFieldsMap(e.popLast())[e.lastSegment()]=yo(n)}setAll(e){let n=He.emptyPath(),r={},i=[];e.forEach((o,a)=>{if(!n.isImmediateParentOf(a)){const l=this.getFieldsMap(n);this.applyChanges(l,r,i),r={},i=[],n=a.popLast()}o?r[a.lastSegment()]=yo(o):i.push(a.lastSegment())});const s=this.getFieldsMap(n);this.applyChanges(s,r,i)}delete(e){const n=this.field(e.popLast());su(n)&&n.mapValue.fields&&delete n.mapValue.fields[e.lastSegment()]}isEqual(e){return fn(this.value,e.value)}getFieldsMap(e){let n=this.value;n.mapValue.fields||(n.mapValue={fields:{}});for(let r=0;r<e.length;++r){let i=n.mapValue.fields[e.get(r)];su(i)&&i.mapValue.fields||(i={mapValue:{fields:{}}},n.mapValue.fields[e.get(r)]=i),n=i}return n.mapValue.fields}applyChanges(e,n,r){_i(n,(i,s)=>e[i]=s);for(const i of r)delete e[i]}clone(){return new dt(yo(this.value))}}function gI(t){const e=[];return _i(t.fields,(n,r)=>{const i=new He([n]);if(su(r)){const s=gI(r.mapValue).fields;if(s.length===0)e.push(i);else for(const o of s)e.push(i.child(o))}else e.push(i)}),new wt(e)}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class et{constructor(e,n,r,i,s,o,a){this.key=e,this.documentType=n,this.version=r,this.readTime=i,this.createTime=s,this.data=o,this.documentState=a}static newInvalidDocument(e){return new et(e,0,z.min(),z.min(),z.min(),dt.empty(),0)}static newFoundDocument(e,n,r,i){return new et(e,1,n,z.min(),r,i,0)}static newNoDocument(e,n){return new et(e,2,n,z.min(),z.min(),dt.empty(),0)}static newUnknownDocument(e,n){return new et(e,3,n,z.min(),z.min(),dt.empty(),2)}convertToFoundDocument(e,n){return!this.createTime.isEqual(z.min())||this.documentType!==2&&this.documentType!==0||(this.createTime=e),this.version=e,this.documentType=1,this.data=n,this.documentState=0,this}convertToNoDocument(e){return this.version=e,this.documentType=2,this.data=dt.empty(),this.documentState=0,this}convertToUnknownDocument(e){return this.version=e,this.documentType=3,this.data=dt.empty(),this.documentState=2,this}setHasCommittedMutations(){return this.documentState=2,this}setHasLocalMutations(){return this.documentState=1,this.version=z.min(),this}setReadTime(e){return this.readTime=e,this}get hasLocalMutations(){return this.documentState===1}get hasCommittedMutations(){return this.documentState===2}get hasPendingWrites(){return this.hasLocalMutations||this.hasCommittedMutations}isValidDocument(){return this.documentType!==0}isFoundDocument(){return this.documentType===1}isNoDocument(){return this.documentType===2}isUnknownDocument(){return this.documentType===3}isEqual(e){return e instanceof et&&this.key.isEqual(e.key)&&this.version.isEqual(e.version)&&this.documentType===e.documentType&&this.documentState===e.documentState&&this.data.isEqual(e.data)}mutableCopy(){return new et(this.key,this.documentType,this.version,this.readTime,this.createTime,this.data.clone(),this.documentState)}toString(){return`Document(${this.key}, ${this.version}, ${JSON.stringify(this.data.value)}, {createTime: ${this.createTime}}), {documentType: ${this.documentType}}), {documentState: ${this.documentState}})`}}/**
 * @license
 * Copyright 2022 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Zu{constructor(e,n){this.position=e,this.inclusive=n}}function A_(t,e,n){let r=0;for(let i=0;i<t.position.length;i++){const s=e[i],o=t.position[i];if(s.field.isKeyField()?r=V.comparator(V.fromName(o.referenceValue),n.key):r=ds(o,n.data.field(s.field)),s.dir==="desc"&&(r*=-1),r!==0)break}return r}function k_(t,e){if(t===null)return e===null;if(e===null||t.inclusive!==e.inclusive||t.position.length!==e.position.length)return!1;for(let n=0;n<t.position.length;n++)if(!fn(t.position[n],e.position[n]))return!1;return!0}/**
 * @license
 * Copyright 2022 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class sa{constructor(e,n="asc"){this.field=e,this.dir=n}}function IO(t,e){return t.dir===e.dir&&t.field.isEqual(e.field)}/**
 * @license
 * Copyright 2022 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class vI{}class Ce extends vI{constructor(e,n,r){super(),this.field=e,this.op=n,this.value=r}static create(e,n,r){return e.isKeyField()?n==="in"||n==="not-in"?this.createKeyFieldInFilter(e,n,r):new AO(e,n,r):n==="array-contains"?new CO(e,r):n==="in"?new RO(e,r):n==="not-in"?new bO(e,r):n==="array-contains-any"?new xO(e,r):new Ce(e,n,r)}static createKeyFieldInFilter(e,n,r){return n==="in"?new kO(e,r):new PO(e,r)}matches(e){const n=e.data.field(this.field);return this.op==="!="?n!==null&&this.matchesComparison(ds(n,this.value)):n!==null&&hi(this.value)===hi(n)&&this.matchesComparison(ds(n,this.value))}matchesComparison(e){switch(this.op){case"<":return e<0;case"<=":return e<=0;case"==":return e===0;case"!=":return e!==0;case">":return e>0;case">=":return e>=0;default:return U()}}isInequality(){return["<","<=",">",">=","!=","not-in"].indexOf(this.op)>=0}getFlattenedFilters(){return[this]}getFilters(){return[this]}}class Kt extends vI{constructor(e,n){super(),this.filters=e,this.op=n,this.ue=null}static create(e,n){return new Kt(e,n)}matches(e){return yI(this)?this.filters.find(n=>!n.matches(e))===void 0:this.filters.find(n=>n.matches(e))!==void 0}getFlattenedFilters(){return this.ue!==null||(this.ue=this.filters.reduce((e,n)=>e.concat(n.getFlattenedFilters()),[])),this.ue}getFilters(){return Object.assign([],this.filters)}}function yI(t){return t.op==="and"}function _I(t){return SO(t)&&yI(t)}function SO(t){for(const e of t.filters)if(e instanceof Kt)return!1;return!0}function ep(t){if(t instanceof Ce)return t.field.canonicalString()+t.op.toString()+ps(t.value);if(_I(t))return t.filters.map(e=>ep(e)).join(",");{const e=t.filters.map(n=>ep(n)).join(",");return`${t.op}(${e})`}}function wI(t,e){return t instanceof Ce?function(r,i){return i instanceof Ce&&r.op===i.op&&r.field.isEqual(i.field)&&fn(r.value,i.value)}(t,e):t instanceof Kt?function(r,i){return i instanceof Kt&&r.op===i.op&&r.filters.length===i.filters.length?r.filters.reduce((s,o,a)=>s&&wI(o,i.filters[a]),!0):!1}(t,e):void U()}function EI(t){return t instanceof Ce?function(n){return`${n.field.canonicalString()} ${n.op} ${ps(n.value)}`}(t):t instanceof Kt?function(n){return n.op.toString()+" {"+n.getFilters().map(EI).join(" ,")+"}"}(t):"Filter"}class AO extends Ce{constructor(e,n,r){super(e,n,r),this.key=V.fromName(r.referenceValue)}matches(e){const n=V.comparator(e.key,this.key);return this.matchesComparison(n)}}class kO extends Ce{constructor(e,n){super(e,"in",n),this.keys=TI("in",n)}matches(e){return this.keys.some(n=>n.isEqual(e.key))}}class PO extends Ce{constructor(e,n){super(e,"not-in",n),this.keys=TI("not-in",n)}matches(e){return!this.keys.some(n=>n.isEqual(e.key))}}function TI(t,e){var n;return(((n=e.arrayValue)===null||n===void 0?void 0:n.values)||[]).map(r=>V.fromName(r.referenceValue))}class CO extends Ce{constructor(e,n){super(e,"array-contains",n)}matches(e){const n=e.data.field(this.field);return mg(n)&&ia(n.arrayValue,this.value)}}class RO extends Ce{constructor(e,n){super(e,"in",n)}matches(e){const n=e.data.field(this.field);return n!==null&&ia(this.value.arrayValue,n)}}class bO extends Ce{constructor(e,n){super(e,"not-in",n)}matches(e){if(ia(this.value.arrayValue,{nullValue:"NULL_VALUE"}))return!1;const n=e.data.field(this.field);return n!==null&&!ia(this.value.arrayValue,n)}}class xO extends Ce{constructor(e,n){super(e,"array-contains-any",n)}matches(e){const n=e.data.field(this.field);return!(!mg(n)||!n.arrayValue.values)&&n.arrayValue.values.some(r=>ia(this.value.arrayValue,r))}}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class NO{constructor(e,n=null,r=[],i=[],s=null,o=null,a=null){this.path=e,this.collectionGroup=n,this.orderBy=r,this.filters=i,this.limit=s,this.startAt=o,this.endAt=a,this.ce=null}}function P_(t,e=null,n=[],r=[],i=null,s=null,o=null){return new NO(t,e,n,r,i,s,o)}function gg(t){const e=H(t);if(e.ce===null){let n=e.path.canonicalString();e.collectionGroup!==null&&(n+="|cg:"+e.collectionGroup),n+="|f:",n+=e.filters.map(r=>ep(r)).join(","),n+="|ob:",n+=e.orderBy.map(r=>function(s){return s.field.canonicalString()+s.dir}(r)).join(","),Jc(e.limit)||(n+="|l:",n+=e.limit),e.startAt&&(n+="|lb:",n+=e.startAt.inclusive?"b:":"a:",n+=e.startAt.position.map(r=>ps(r)).join(",")),e.endAt&&(n+="|ub:",n+=e.endAt.inclusive?"a:":"b:",n+=e.endAt.position.map(r=>ps(r)).join(",")),e.ce=n}return e.ce}function vg(t,e){if(t.limit!==e.limit||t.orderBy.length!==e.orderBy.length)return!1;for(let n=0;n<t.orderBy.length;n++)if(!IO(t.orderBy[n],e.orderBy[n]))return!1;if(t.filters.length!==e.filters.length)return!1;for(let n=0;n<t.filters.length;n++)if(!wI(t.filters[n],e.filters[n]))return!1;return t.collectionGroup===e.collectionGroup&&!!t.path.isEqual(e.path)&&!!k_(t.startAt,e.startAt)&&k_(t.endAt,e.endAt)}function tp(t){return V.isDocumentKey(t.path)&&t.collectionGroup===null&&t.filters.length===0}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class bs{constructor(e,n=null,r=[],i=[],s=null,o="F",a=null,l=null){this.path=e,this.collectionGroup=n,this.explicitOrderBy=r,this.filters=i,this.limit=s,this.limitType=o,this.startAt=a,this.endAt=l,this.le=null,this.he=null,this.Pe=null,this.startAt,this.endAt}}function OO(t,e,n,r,i,s,o,a){return new bs(t,e,n,r,i,s,o,a)}function Zc(t){return new bs(t)}function C_(t){return t.filters.length===0&&t.limit===null&&t.startAt==null&&t.endAt==null&&(t.explicitOrderBy.length===0||t.explicitOrderBy.length===1&&t.explicitOrderBy[0].field.isKeyField())}function II(t){return t.collectionGroup!==null}function _o(t){const e=H(t);if(e.le===null){e.le=[];const n=new Set;for(const s of e.explicitOrderBy)e.le.push(s),n.add(s.field.canonicalString());const r=e.explicitOrderBy.length>0?e.explicitOrderBy[e.explicitOrderBy.length-1].dir:"asc";(function(o){let a=new Ke(He.comparator);return o.filters.forEach(l=>{l.getFlattenedFilters().forEach(u=>{u.isInequality()&&(a=a.add(u.field))})}),a})(e).forEach(s=>{n.has(s.canonicalString())||s.isKeyField()||e.le.push(new sa(s,r))}),n.has(He.keyField().canonicalString())||e.le.push(new sa(He.keyField(),r))}return e.le}function ln(t){const e=H(t);return e.he||(e.he=DO(e,_o(t))),e.he}function DO(t,e){if(t.limitType==="F")return P_(t.path,t.collectionGroup,e,t.filters,t.limit,t.startAt,t.endAt);{e=e.map(i=>{const s=i.dir==="desc"?"asc":"desc";return new sa(i.field,s)});const n=t.endAt?new Zu(t.endAt.position,t.endAt.inclusive):null,r=t.startAt?new Zu(t.startAt.position,t.startAt.inclusive):null;return P_(t.path,t.collectionGroup,e,t.filters,t.limit,n,r)}}function np(t,e){const n=t.filters.concat([e]);return new bs(t.path,t.collectionGroup,t.explicitOrderBy.slice(),n,t.limit,t.limitType,t.startAt,t.endAt)}function rp(t,e,n){return new bs(t.path,t.collectionGroup,t.explicitOrderBy.slice(),t.filters.slice(),e,n,t.startAt,t.endAt)}function ef(t,e){return vg(ln(t),ln(e))&&t.limitType===e.limitType}function SI(t){return`${gg(ln(t))}|lt:${t.limitType}`}function Si(t){return`Query(target=${function(n){let r=n.path.canonicalString();return n.collectionGroup!==null&&(r+=" collectionGroup="+n.collectionGroup),n.filters.length>0&&(r+=`, filters: [${n.filters.map(i=>EI(i)).join(", ")}]`),Jc(n.limit)||(r+=", limit: "+n.limit),n.orderBy.length>0&&(r+=`, orderBy: [${n.orderBy.map(i=>function(o){return`${o.field.canonicalString()} (${o.dir})`}(i)).join(", ")}]`),n.startAt&&(r+=", startAt: ",r+=n.startAt.inclusive?"b:":"a:",r+=n.startAt.position.map(i=>ps(i)).join(",")),n.endAt&&(r+=", endAt: ",r+=n.endAt.inclusive?"a:":"b:",r+=n.endAt.position.map(i=>ps(i)).join(",")),`Target(${r})`}(ln(t))}; limitType=${t.limitType})`}function tf(t,e){return e.isFoundDocument()&&function(r,i){const s=i.key.path;return r.collectionGroup!==null?i.key.hasCollectionId(r.collectionGroup)&&r.path.isPrefixOf(s):V.isDocumentKey(r.path)?r.path.isEqual(s):r.path.isImmediateParentOf(s)}(t,e)&&function(r,i){for(const s of _o(r))if(!s.field.isKeyField()&&i.data.field(s.field)===null)return!1;return!0}(t,e)&&function(r,i){for(const s of r.filters)if(!s.matches(i))return!1;return!0}(t,e)&&function(r,i){return!(r.startAt&&!function(o,a,l){const u=A_(o,a,l);return o.inclusive?u<=0:u<0}(r.startAt,_o(r),i)||r.endAt&&!function(o,a,l){const u=A_(o,a,l);return o.inclusive?u>=0:u>0}(r.endAt,_o(r),i))}(t,e)}function LO(t){return t.collectionGroup||(t.path.length%2==1?t.path.lastSegment():t.path.get(t.path.length-2))}function AI(t){return(e,n)=>{let r=!1;for(const i of _o(t)){const s=MO(i,e,n);if(s!==0)return s;r=r||i.field.isKeyField()}return 0}}function MO(t,e,n){const r=t.field.isKeyField()?V.comparator(e.key,n.key):function(s,o,a){const l=o.data.field(s),u=a.data.field(s);return l!==null&&u!==null?ds(l,u):U()}(t.field,e,n);switch(t.dir){case"asc":return r;case"desc":return-1*r;default:return U()}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class xs{constructor(e,n){this.mapKeyFn=e,this.equalsFn=n,this.inner={},this.innerSize=0}get(e){const n=this.mapKeyFn(e),r=this.inner[n];if(r!==void 0){for(const[i,s]of r)if(this.equalsFn(i,e))return s}}has(e){return this.get(e)!==void 0}set(e,n){const r=this.mapKeyFn(e),i=this.inner[r];if(i===void 0)return this.inner[r]=[[e,n]],void this.innerSize++;for(let s=0;s<i.length;s++)if(this.equalsFn(i[s][0],e))return void(i[s]=[e,n]);i.push([e,n]),this.innerSize++}delete(e){const n=this.mapKeyFn(e),r=this.inner[n];if(r===void 0)return!1;for(let i=0;i<r.length;i++)if(this.equalsFn(r[i][0],e))return r.length===1?delete this.inner[n]:r.splice(i,1),this.innerSize--,!0;return!1}forEach(e){_i(this.inner,(n,r)=>{for(const[i,s]of r)e(i,s)})}isEmpty(){return pI(this.inner)}size(){return this.innerSize}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const VO=new ve(V.comparator);function Pn(){return VO}const kI=new ve(V.comparator);function to(...t){let e=kI;for(const n of t)e=e.insert(n.key,n);return e}function PI(t){let e=kI;return t.forEach((n,r)=>e=e.insert(n,r.overlayedDocument)),e}function Gr(){return wo()}function CI(){return wo()}function wo(){return new xs(t=>t.toString(),(t,e)=>t.isEqual(e))}const FO=new ve(V.comparator),$O=new Ke(V.comparator);function G(...t){let e=$O;for(const n of t)e=e.add(n);return e}const UO=new Ke(Z);function jO(){return UO}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function RI(t,e){if(t.useProto3Json){if(isNaN(e))return{doubleValue:"NaN"};if(e===1/0)return{doubleValue:"Infinity"};if(e===-1/0)return{doubleValue:"-Infinity"}}return{doubleValue:Ju(e)?"-0":e}}function bI(t){return{integerValue:""+t}}function zO(t,e){return _O(e)?bI(e):RI(t,e)}/**
 * @license
 * Copyright 2018 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class nf{constructor(){this._=void 0}}function BO(t,e,n){return t instanceof oa?function(i,s){const o={fields:{__type__:{stringValue:"server_timestamp"},__local_write_time__:{timestampValue:{seconds:i.seconds,nanos:i.nanoseconds}}}};return s&&dg(s)&&(s=pg(s)),s&&(o.fields.__previous_value__=s),{mapValue:o}}(n,e):t instanceof aa?NI(t,e):t instanceof la?OI(t,e):function(i,s){const o=xI(i,s),a=R_(o)+R_(i.Ie);return Zd(o)&&Zd(i.Ie)?bI(a):RI(i.serializer,a)}(t,e)}function HO(t,e,n){return t instanceof aa?NI(t,e):t instanceof la?OI(t,e):n}function xI(t,e){return t instanceof ec?function(r){return Zd(r)||function(s){return!!s&&"doubleValue"in s}(r)}(e)?e:{integerValue:0}:null}class oa extends nf{}class aa extends nf{constructor(e){super(),this.elements=e}}function NI(t,e){const n=DI(e);for(const r of t.elements)n.some(i=>fn(i,r))||n.push(r);return{arrayValue:{values:n}}}class la extends nf{constructor(e){super(),this.elements=e}}function OI(t,e){let n=DI(e);for(const r of t.elements)n=n.filter(i=>!fn(i,r));return{arrayValue:{values:n}}}class ec extends nf{constructor(e,n){super(),this.serializer=e,this.Ie=n}}function R_(t){return ke(t.integerValue||t.doubleValue)}function DI(t){return mg(t)&&t.arrayValue.values?t.arrayValue.values.slice():[]}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class WO{constructor(e,n){this.field=e,this.transform=n}}function qO(t,e){return t.field.isEqual(e.field)&&function(r,i){return r instanceof aa&&i instanceof aa||r instanceof la&&i instanceof la?hs(r.elements,i.elements,fn):r instanceof ec&&i instanceof ec?fn(r.Ie,i.Ie):r instanceof oa&&i instanceof oa}(t.transform,e.transform)}class KO{constructor(e,n){this.version=e,this.transformResults=n}}class zt{constructor(e,n){this.updateTime=e,this.exists=n}static none(){return new zt}static exists(e){return new zt(void 0,e)}static updateTime(e){return new zt(e)}get isNone(){return this.updateTime===void 0&&this.exists===void 0}isEqual(e){return this.exists===e.exists&&(this.updateTime?!!e.updateTime&&this.updateTime.isEqual(e.updateTime):!e.updateTime)}}function ou(t,e){return t.updateTime!==void 0?e.isFoundDocument()&&e.version.isEqual(t.updateTime):t.exists===void 0||t.exists===e.isFoundDocument()}class rf{}function LI(t,e){if(!t.hasLocalMutations||e&&e.fields.length===0)return null;if(e===null)return t.isNoDocument()?new VI(t.key,zt.none()):new Va(t.key,t.data,zt.none());{const n=t.data,r=dt.empty();let i=new Ke(He.comparator);for(let s of e.fields)if(!i.has(s)){let o=n.field(s);o===null&&s.length>1&&(s=s.popLast(),o=n.field(s)),o===null?r.delete(s):r.set(s,o),i=i.add(s)}return new Nr(t.key,r,new wt(i.toArray()),zt.none())}}function GO(t,e,n){t instanceof Va?function(i,s,o){const a=i.value.clone(),l=x_(i.fieldTransforms,s,o.transformResults);a.setAll(l),s.convertToFoundDocument(o.version,a).setHasCommittedMutations()}(t,e,n):t instanceof Nr?function(i,s,o){if(!ou(i.precondition,s))return void s.convertToUnknownDocument(o.version);const a=x_(i.fieldTransforms,s,o.transformResults),l=s.data;l.setAll(MI(i)),l.setAll(a),s.convertToFoundDocument(o.version,l).setHasCommittedMutations()}(t,e,n):function(i,s,o){s.convertToNoDocument(o.version).setHasCommittedMutations()}(0,e,n)}function Eo(t,e,n,r){return t instanceof Va?function(s,o,a,l){if(!ou(s.precondition,o))return a;const u=s.value.clone(),c=N_(s.fieldTransforms,l,o);return u.setAll(c),o.convertToFoundDocument(o.version,u).setHasLocalMutations(),null}(t,e,n,r):t instanceof Nr?function(s,o,a,l){if(!ou(s.precondition,o))return a;const u=N_(s.fieldTransforms,l,o),c=o.data;return c.setAll(MI(s)),c.setAll(u),o.convertToFoundDocument(o.version,c).setHasLocalMutations(),a===null?null:a.unionWith(s.fieldMask.fields).unionWith(s.fieldTransforms.map(f=>f.field))}(t,e,n,r):function(s,o,a){return ou(s.precondition,o)?(o.convertToNoDocument(o.version).setHasLocalMutations(),null):a}(t,e,n)}function QO(t,e){let n=null;for(const r of t.fieldTransforms){const i=e.data.field(r.field),s=xI(r.transform,i||null);s!=null&&(n===null&&(n=dt.empty()),n.set(r.field,s))}return n||null}function b_(t,e){return t.type===e.type&&!!t.key.isEqual(e.key)&&!!t.precondition.isEqual(e.precondition)&&!!function(r,i){return r===void 0&&i===void 0||!(!r||!i)&&hs(r,i,(s,o)=>qO(s,o))}(t.fieldTransforms,e.fieldTransforms)&&(t.type===0?t.value.isEqual(e.value):t.type!==1||t.data.isEqual(e.data)&&t.fieldMask.isEqual(e.fieldMask))}class Va extends rf{constructor(e,n,r,i=[]){super(),this.key=e,this.value=n,this.precondition=r,this.fieldTransforms=i,this.type=0}getFieldMask(){return null}}class Nr extends rf{constructor(e,n,r,i,s=[]){super(),this.key=e,this.data=n,this.fieldMask=r,this.precondition=i,this.fieldTransforms=s,this.type=1}getFieldMask(){return this.fieldMask}}function MI(t){const e=new Map;return t.fieldMask.fields.forEach(n=>{if(!n.isEmpty()){const r=t.data.field(n);e.set(n,r)}}),e}function x_(t,e,n){const r=new Map;re(t.length===n.length);for(let i=0;i<n.length;i++){const s=t[i],o=s.transform,a=e.data.field(s.field);r.set(s.field,HO(o,a,n[i]))}return r}function N_(t,e,n){const r=new Map;for(const i of t){const s=i.transform,o=n.data.field(i.field);r.set(i.field,BO(s,o,e))}return r}class VI extends rf{constructor(e,n){super(),this.key=e,this.precondition=n,this.type=2,this.fieldTransforms=[]}getFieldMask(){return null}}class YO extends rf{constructor(e,n){super(),this.key=e,this.precondition=n,this.type=3,this.fieldTransforms=[]}getFieldMask(){return null}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class XO{constructor(e,n,r,i){this.batchId=e,this.localWriteTime=n,this.baseMutations=r,this.mutations=i}applyToRemoteDocument(e,n){const r=n.mutationResults;for(let i=0;i<this.mutations.length;i++){const s=this.mutations[i];s.key.isEqual(e.key)&&GO(s,e,r[i])}}applyToLocalView(e,n){for(const r of this.baseMutations)r.key.isEqual(e.key)&&(n=Eo(r,e,n,this.localWriteTime));for(const r of this.mutations)r.key.isEqual(e.key)&&(n=Eo(r,e,n,this.localWriteTime));return n}applyToLocalDocumentSet(e,n){const r=CI();return this.mutations.forEach(i=>{const s=e.get(i.key),o=s.overlayedDocument;let a=this.applyToLocalView(o,s.mutatedFields);a=n.has(i.key)?null:a;const l=LI(o,a);l!==null&&r.set(i.key,l),o.isValidDocument()||o.convertToNoDocument(z.min())}),r}keys(){return this.mutations.reduce((e,n)=>e.add(n.key),G())}isEqual(e){return this.batchId===e.batchId&&hs(this.mutations,e.mutations,(n,r)=>b_(n,r))&&hs(this.baseMutations,e.baseMutations,(n,r)=>b_(n,r))}}class yg{constructor(e,n,r,i){this.batch=e,this.commitVersion=n,this.mutationResults=r,this.docVersions=i}static from(e,n,r){re(e.mutations.length===r.length);let i=function(){return FO}();const s=e.mutations;for(let o=0;o<s.length;o++)i=i.insert(s[o].key,r[o].version);return new yg(e,n,r,i)}}/**
 * @license
 * Copyright 2022 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class JO{constructor(e,n){this.largestBatchId=e,this.mutation=n}getKey(){return this.mutation.key}isEqual(e){return e!==null&&this.mutation===e.mutation}toString(){return`Overlay{
      largestBatchId: ${this.largestBatchId},
      mutation: ${this.mutation.toString()}
    }`}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class ZO{constructor(e,n){this.count=e,this.unchangedNames=n}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */var Ae,X;function eD(t){switch(t){default:return U();case T.CANCELLED:case T.UNKNOWN:case T.DEADLINE_EXCEEDED:case T.RESOURCE_EXHAUSTED:case T.INTERNAL:case T.UNAVAILABLE:case T.UNAUTHENTICATED:return!1;case T.INVALID_ARGUMENT:case T.NOT_FOUND:case T.ALREADY_EXISTS:case T.PERMISSION_DENIED:case T.FAILED_PRECONDITION:case T.ABORTED:case T.OUT_OF_RANGE:case T.UNIMPLEMENTED:case T.DATA_LOSS:return!0}}function FI(t){if(t===void 0)return cn("GRPC error has no .code"),T.UNKNOWN;switch(t){case Ae.OK:return T.OK;case Ae.CANCELLED:return T.CANCELLED;case Ae.UNKNOWN:return T.UNKNOWN;case Ae.DEADLINE_EXCEEDED:return T.DEADLINE_EXCEEDED;case Ae.RESOURCE_EXHAUSTED:return T.RESOURCE_EXHAUSTED;case Ae.INTERNAL:return T.INTERNAL;case Ae.UNAVAILABLE:return T.UNAVAILABLE;case Ae.UNAUTHENTICATED:return T.UNAUTHENTICATED;case Ae.INVALID_ARGUMENT:return T.INVALID_ARGUMENT;case Ae.NOT_FOUND:return T.NOT_FOUND;case Ae.ALREADY_EXISTS:return T.ALREADY_EXISTS;case Ae.PERMISSION_DENIED:return T.PERMISSION_DENIED;case Ae.FAILED_PRECONDITION:return T.FAILED_PRECONDITION;case Ae.ABORTED:return T.ABORTED;case Ae.OUT_OF_RANGE:return T.OUT_OF_RANGE;case Ae.UNIMPLEMENTED:return T.UNIMPLEMENTED;case Ae.DATA_LOSS:return T.DATA_LOSS;default:return U()}}(X=Ae||(Ae={}))[X.OK=0]="OK",X[X.CANCELLED=1]="CANCELLED",X[X.UNKNOWN=2]="UNKNOWN",X[X.INVALID_ARGUMENT=3]="INVALID_ARGUMENT",X[X.DEADLINE_EXCEEDED=4]="DEADLINE_EXCEEDED",X[X.NOT_FOUND=5]="NOT_FOUND",X[X.ALREADY_EXISTS=6]="ALREADY_EXISTS",X[X.PERMISSION_DENIED=7]="PERMISSION_DENIED",X[X.UNAUTHENTICATED=16]="UNAUTHENTICATED",X[X.RESOURCE_EXHAUSTED=8]="RESOURCE_EXHAUSTED",X[X.FAILED_PRECONDITION=9]="FAILED_PRECONDITION",X[X.ABORTED=10]="ABORTED",X[X.OUT_OF_RANGE=11]="OUT_OF_RANGE",X[X.UNIMPLEMENTED=12]="UNIMPLEMENTED",X[X.INTERNAL=13]="INTERNAL",X[X.UNAVAILABLE=14]="UNAVAILABLE",X[X.DATA_LOSS=15]="DATA_LOSS";/**
 * @license
 * Copyright 2023 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function tD(){return new TextEncoder}/**
 * @license
 * Copyright 2022 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const nD=new Zi([4294967295,4294967295],0);function O_(t){const e=tD().encode(t),n=new nO;return n.update(e),new Uint8Array(n.digest())}function D_(t){const e=new DataView(t.buffer),n=e.getUint32(0,!0),r=e.getUint32(4,!0),i=e.getUint32(8,!0),s=e.getUint32(12,!0);return[new Zi([n,r],0),new Zi([i,s],0)]}class _g{constructor(e,n,r){if(this.bitmap=e,this.padding=n,this.hashCount=r,n<0||n>=8)throw new no(`Invalid padding: ${n}`);if(r<0)throw new no(`Invalid hash count: ${r}`);if(e.length>0&&this.hashCount===0)throw new no(`Invalid hash count: ${r}`);if(e.length===0&&n!==0)throw new no(`Invalid padding when bitmap length is 0: ${n}`);this.Te=8*e.length-n,this.Ee=Zi.fromNumber(this.Te)}de(e,n,r){let i=e.add(n.multiply(Zi.fromNumber(r)));return i.compare(nD)===1&&(i=new Zi([i.getBits(0),i.getBits(1)],0)),i.modulo(this.Ee).toNumber()}Ae(e){return(this.bitmap[Math.floor(e/8)]&1<<e%8)!=0}mightContain(e){if(this.Te===0)return!1;const n=O_(e),[r,i]=D_(n);for(let s=0;s<this.hashCount;s++){const o=this.de(r,i,s);if(!this.Ae(o))return!1}return!0}static create(e,n,r){const i=e%8==0?0:8-e%8,s=new Uint8Array(Math.ceil(e/8)),o=new _g(s,i,n);return r.forEach(a=>o.insert(a)),o}insert(e){if(this.Te===0)return;const n=O_(e),[r,i]=D_(n);for(let s=0;s<this.hashCount;s++){const o=this.de(r,i,s);this.Re(o)}}Re(e){const n=Math.floor(e/8),r=e%8;this.bitmap[n]|=1<<r}}class no extends Error{constructor(){super(...arguments),this.name="BloomFilterError"}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class sf{constructor(e,n,r,i,s){this.snapshotVersion=e,this.targetChanges=n,this.targetMismatches=r,this.documentUpdates=i,this.resolvedLimboDocuments=s}static createSynthesizedRemoteEventForCurrentChange(e,n,r){const i=new Map;return i.set(e,Fa.createSynthesizedTargetChangeForCurrentChange(e,n,r)),new sf(z.min(),i,new ve(Z),Pn(),G())}}class Fa{constructor(e,n,r,i,s){this.resumeToken=e,this.current=n,this.addedDocuments=r,this.modifiedDocuments=i,this.removedDocuments=s}static createSynthesizedTargetChangeForCurrentChange(e,n,r){return new Fa(r,n,G(),G(),G())}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class au{constructor(e,n,r,i){this.Ve=e,this.removedTargetIds=n,this.key=r,this.me=i}}class $I{constructor(e,n){this.targetId=e,this.fe=n}}class UI{constructor(e,n,r=st.EMPTY_BYTE_STRING,i=null){this.state=e,this.targetIds=n,this.resumeToken=r,this.cause=i}}class L_{constructor(){this.ge=0,this.pe=V_(),this.ye=st.EMPTY_BYTE_STRING,this.we=!1,this.Se=!0}get current(){return this.we}get resumeToken(){return this.ye}get be(){return this.ge!==0}get De(){return this.Se}Ce(e){e.approximateByteSize()>0&&(this.Se=!0,this.ye=e)}ve(){let e=G(),n=G(),r=G();return this.pe.forEach((i,s)=>{switch(s){case 0:e=e.add(i);break;case 2:n=n.add(i);break;case 1:r=r.add(i);break;default:U()}}),new Fa(this.ye,this.we,e,n,r)}Fe(){this.Se=!1,this.pe=V_()}Me(e,n){this.Se=!0,this.pe=this.pe.insert(e,n)}xe(e){this.Se=!0,this.pe=this.pe.remove(e)}Oe(){this.ge+=1}Ne(){this.ge-=1,re(this.ge>=0)}Be(){this.Se=!0,this.we=!0}}class rD{constructor(e){this.Le=e,this.ke=new Map,this.qe=Pn(),this.Qe=M_(),this.Ke=new ve(Z)}$e(e){for(const n of e.Ve)e.me&&e.me.isFoundDocument()?this.Ue(n,e.me):this.We(n,e.key,e.me);for(const n of e.removedTargetIds)this.We(n,e.key,e.me)}Ge(e){this.forEachTarget(e,n=>{const r=this.ze(n);switch(e.state){case 0:this.je(n)&&r.Ce(e.resumeToken);break;case 1:r.Ne(),r.be||r.Fe(),r.Ce(e.resumeToken);break;case 2:r.Ne(),r.be||this.removeTarget(n);break;case 3:this.je(n)&&(r.Be(),r.Ce(e.resumeToken));break;case 4:this.je(n)&&(this.He(n),r.Ce(e.resumeToken));break;default:U()}})}forEachTarget(e,n){e.targetIds.length>0?e.targetIds.forEach(n):this.ke.forEach((r,i)=>{this.je(i)&&n(i)})}Je(e){const n=e.targetId,r=e.fe.count,i=this.Ye(n);if(i){const s=i.target;if(tp(s))if(r===0){const o=new V(s.path);this.We(n,o,et.newNoDocument(o,z.min()))}else re(r===1);else{const o=this.Ze(n);if(o!==r){const a=this.Xe(e),l=a?this.et(a,e,o):1;if(l!==0){this.He(n);const u=l===2?"TargetPurposeExistenceFilterMismatchBloom":"TargetPurposeExistenceFilterMismatch";this.Ke=this.Ke.insert(n,u)}}}}}Xe(e){const n=e.fe.unchangedNames;if(!n||!n.bits)return null;const{bits:{bitmap:r="",padding:i=0},hashCount:s=0}=n;let o,a;try{o=fi(r).toUint8Array()}catch(l){if(l instanceof mI)return fs("Decoding the base64 bloom filter in existence filter failed ("+l.message+"); ignoring the bloom filter and falling back to full re-query."),null;throw l}try{a=new _g(o,i,s)}catch(l){return fs(l instanceof no?"BloomFilter error: ":"Applying bloom filter failed: ",l),null}return a.Te===0?null:a}et(e,n,r){return n.fe.count===r-this.rt(e,n.targetId)?0:2}rt(e,n){const r=this.Le.getRemoteKeysForTarget(n);let i=0;return r.forEach(s=>{const o=this.Le.nt(),a=`projects/${o.projectId}/databases/${o.database}/documents/${s.path.canonicalString()}`;e.mightContain(a)||(this.We(n,s,null),i++)}),i}it(e){const n=new Map;this.ke.forEach((s,o)=>{const a=this.Ye(o);if(a){if(s.current&&tp(a.target)){const l=new V(a.target.path);this.qe.get(l)!==null||this.st(o,l)||this.We(o,l,et.newNoDocument(l,e))}s.De&&(n.set(o,s.ve()),s.Fe())}});let r=G();this.Qe.forEach((s,o)=>{let a=!0;o.forEachWhile(l=>{const u=this.Ye(l);return!u||u.purpose==="TargetPurposeLimboResolution"||(a=!1,!1)}),a&&(r=r.add(s))}),this.qe.forEach((s,o)=>o.setReadTime(e));const i=new sf(e,n,this.Ke,this.qe,r);return this.qe=Pn(),this.Qe=M_(),this.Ke=new ve(Z),i}Ue(e,n){if(!this.je(e))return;const r=this.st(e,n.key)?2:0;this.ze(e).Me(n.key,r),this.qe=this.qe.insert(n.key,n),this.Qe=this.Qe.insert(n.key,this.ot(n.key).add(e))}We(e,n,r){if(!this.je(e))return;const i=this.ze(e);this.st(e,n)?i.Me(n,1):i.xe(n),this.Qe=this.Qe.insert(n,this.ot(n).delete(e)),r&&(this.qe=this.qe.insert(n,r))}removeTarget(e){this.ke.delete(e)}Ze(e){const n=this.ze(e).ve();return this.Le.getRemoteKeysForTarget(e).size+n.addedDocuments.size-n.removedDocuments.size}Oe(e){this.ze(e).Oe()}ze(e){let n=this.ke.get(e);return n||(n=new L_,this.ke.set(e,n)),n}ot(e){let n=this.Qe.get(e);return n||(n=new Ke(Z),this.Qe=this.Qe.insert(e,n)),n}je(e){const n=this.Ye(e)!==null;return n||R("WatchChangeAggregator","Detected inactive target",e),n}Ye(e){const n=this.ke.get(e);return n&&n.be?null:this.Le._t(e)}He(e){this.ke.set(e,new L_),this.Le.getRemoteKeysForTarget(e).forEach(n=>{this.We(e,n,null)})}st(e,n){return this.Le.getRemoteKeysForTarget(e).has(n)}}function M_(){return new ve(V.comparator)}function V_(){return new ve(V.comparator)}const iD={asc:"ASCENDING",desc:"DESCENDING"},sD={"<":"LESS_THAN","<=":"LESS_THAN_OR_EQUAL",">":"GREATER_THAN",">=":"GREATER_THAN_OR_EQUAL","==":"EQUAL","!=":"NOT_EQUAL","array-contains":"ARRAY_CONTAINS",in:"IN","not-in":"NOT_IN","array-contains-any":"ARRAY_CONTAINS_ANY"},oD={and:"AND",or:"OR"};class aD{constructor(e,n){this.databaseId=e,this.useProto3Json=n}}function ip(t,e){return t.useProto3Json||Jc(e)?e:{value:e}}function tc(t,e){return t.useProto3Json?`${new Date(1e3*e.seconds).toISOString().replace(/\.\d*/,"").replace("Z","")}.${("000000000"+e.nanoseconds).slice(-9)}Z`:{seconds:""+e.seconds,nanos:e.nanoseconds}}function jI(t,e){return t.useProto3Json?e.toBase64():e.toUint8Array()}function lD(t,e){return tc(t,e.toTimestamp())}function un(t){return re(!!t),z.fromTimestamp(function(n){const r=gr(n);return new Ne(r.seconds,r.nanos)}(t))}function wg(t,e){return sp(t,e).canonicalString()}function sp(t,e){const n=function(i){return new ae(["projects",i.projectId,"databases",i.database])}(t).child("documents");return e===void 0?n:n.child(e)}function zI(t){const e=ae.fromString(t);return re(KI(e)),e}function op(t,e){return wg(t.databaseId,e.path)}function Th(t,e){const n=zI(e);if(n.get(1)!==t.databaseId.projectId)throw new x(T.INVALID_ARGUMENT,"Tried to deserialize key from different project: "+n.get(1)+" vs "+t.databaseId.projectId);if(n.get(3)!==t.databaseId.database)throw new x(T.INVALID_ARGUMENT,"Tried to deserialize key from different database: "+n.get(3)+" vs "+t.databaseId.database);return new V(HI(n))}function BI(t,e){return wg(t.databaseId,e)}function uD(t){const e=zI(t);return e.length===4?ae.emptyPath():HI(e)}function ap(t){return new ae(["projects",t.databaseId.projectId,"databases",t.databaseId.database]).canonicalString()}function HI(t){return re(t.length>4&&t.get(4)==="documents"),t.popFirst(5)}function F_(t,e,n){return{name:op(t,e),fields:n.value.mapValue.fields}}function cD(t,e){let n;if("targetChange"in e){e.targetChange;const r=function(u){return u==="NO_CHANGE"?0:u==="ADD"?1:u==="REMOVE"?2:u==="CURRENT"?3:u==="RESET"?4:U()}(e.targetChange.targetChangeType||"NO_CHANGE"),i=e.targetChange.targetIds||[],s=function(u,c){return u.useProto3Json?(re(c===void 0||typeof c=="string"),st.fromBase64String(c||"")):(re(c===void 0||c instanceof Uint8Array),st.fromUint8Array(c||new Uint8Array))}(t,e.targetChange.resumeToken),o=e.targetChange.cause,a=o&&function(u){const c=u.code===void 0?T.UNKNOWN:FI(u.code);return new x(c,u.message||"")}(o);n=new UI(r,i,s,a||null)}else if("documentChange"in e){e.documentChange;const r=e.documentChange;r.document,r.document.name,r.document.updateTime;const i=Th(t,r.document.name),s=un(r.document.updateTime),o=r.document.createTime?un(r.document.createTime):z.min(),a=new dt({mapValue:{fields:r.document.fields}}),l=et.newFoundDocument(i,s,o,a),u=r.targetIds||[],c=r.removedTargetIds||[];n=new au(u,c,l.key,l)}else if("documentDelete"in e){e.documentDelete;const r=e.documentDelete;r.document;const i=Th(t,r.document),s=r.readTime?un(r.readTime):z.min(),o=et.newNoDocument(i,s),a=r.removedTargetIds||[];n=new au([],a,o.key,o)}else if("documentRemove"in e){e.documentRemove;const r=e.documentRemove;r.document;const i=Th(t,r.document),s=r.removedTargetIds||[];n=new au([],s,i,null)}else{if(!("filter"in e))return U();{e.filter;const r=e.filter;r.targetId;const{count:i=0,unchangedNames:s}=r,o=new ZO(i,s),a=r.targetId;n=new $I(a,o)}}return n}function fD(t,e){let n;if(e instanceof Va)n={update:F_(t,e.key,e.value)};else if(e instanceof VI)n={delete:op(t,e.key)};else if(e instanceof Nr)n={update:F_(t,e.key,e.data),updateMask:wD(e.fieldMask)};else{if(!(e instanceof YO))return U();n={verify:op(t,e.key)}}return e.fieldTransforms.length>0&&(n.updateTransforms=e.fieldTransforms.map(r=>function(s,o){const a=o.transform;if(a instanceof oa)return{fieldPath:o.field.canonicalString(),setToServerValue:"REQUEST_TIME"};if(a instanceof aa)return{fieldPath:o.field.canonicalString(),appendMissingElements:{values:a.elements}};if(a instanceof la)return{fieldPath:o.field.canonicalString(),removeAllFromArray:{values:a.elements}};if(a instanceof ec)return{fieldPath:o.field.canonicalString(),increment:a.Ie};throw U()}(0,r))),e.precondition.isNone||(n.currentDocument=function(i,s){return s.updateTime!==void 0?{updateTime:lD(i,s.updateTime)}:s.exists!==void 0?{exists:s.exists}:U()}(t,e.precondition)),n}function hD(t,e){return t&&t.length>0?(re(e!==void 0),t.map(n=>function(i,s){let o=i.updateTime?un(i.updateTime):un(s);return o.isEqual(z.min())&&(o=un(s)),new KO(o,i.transformResults||[])}(n,e))):[]}function dD(t,e){return{documents:[BI(t,e.path)]}}function pD(t,e){const n={structuredQuery:{}},r=e.path;let i;e.collectionGroup!==null?(i=r,n.structuredQuery.from=[{collectionId:e.collectionGroup,allDescendants:!0}]):(i=r.popLast(),n.structuredQuery.from=[{collectionId:r.lastSegment()}]),n.parent=BI(t,i);const s=function(u){if(u.length!==0)return qI(Kt.create(u,"and"))}(e.filters);s&&(n.structuredQuery.where=s);const o=function(u){if(u.length!==0)return u.map(c=>function(h){return{field:Ai(h.field),direction:vD(h.dir)}}(c))}(e.orderBy);o&&(n.structuredQuery.orderBy=o);const a=ip(t,e.limit);return a!==null&&(n.structuredQuery.limit=a),e.startAt&&(n.structuredQuery.startAt=function(u){return{before:u.inclusive,values:u.position}}(e.startAt)),e.endAt&&(n.structuredQuery.endAt=function(u){return{before:!u.inclusive,values:u.position}}(e.endAt)),{ut:n,parent:i}}function mD(t){let e=uD(t.parent);const n=t.structuredQuery,r=n.from?n.from.length:0;let i=null;if(r>0){re(r===1);const c=n.from[0];c.allDescendants?i=c.collectionId:e=e.child(c.collectionId)}let s=[];n.where&&(s=function(f){const h=WI(f);return h instanceof Kt&&_I(h)?h.getFilters():[h]}(n.where));let o=[];n.orderBy&&(o=function(f){return f.map(h=>function(y){return new sa(ki(y.field),function(w){switch(w){case"ASCENDING":return"asc";case"DESCENDING":return"desc";default:return}}(y.direction))}(h))}(n.orderBy));let a=null;n.limit&&(a=function(f){let h;return h=typeof f=="object"?f.value:f,Jc(h)?null:h}(n.limit));let l=null;n.startAt&&(l=function(f){const h=!!f.before,p=f.values||[];return new Zu(p,h)}(n.startAt));let u=null;return n.endAt&&(u=function(f){const h=!f.before,p=f.values||[];return new Zu(p,h)}(n.endAt)),OO(e,i,o,s,a,"F",l,u)}function gD(t,e){const n=function(i){switch(i){case"TargetPurposeListen":return null;case"TargetPurposeExistenceFilterMismatch":return"existence-filter-mismatch";case"TargetPurposeExistenceFilterMismatchBloom":return"existence-filter-mismatch-bloom";case"TargetPurposeLimboResolution":return"limbo-document";default:return U()}}(e.purpose);return n==null?null:{"goog-listen-tags":n}}function WI(t){return t.unaryFilter!==void 0?function(n){switch(n.unaryFilter.op){case"IS_NAN":const r=ki(n.unaryFilter.field);return Ce.create(r,"==",{doubleValue:NaN});case"IS_NULL":const i=ki(n.unaryFilter.field);return Ce.create(i,"==",{nullValue:"NULL_VALUE"});case"IS_NOT_NAN":const s=ki(n.unaryFilter.field);return Ce.create(s,"!=",{doubleValue:NaN});case"IS_NOT_NULL":const o=ki(n.unaryFilter.field);return Ce.create(o,"!=",{nullValue:"NULL_VALUE"});default:return U()}}(t):t.fieldFilter!==void 0?function(n){return Ce.create(ki(n.fieldFilter.field),function(i){switch(i){case"EQUAL":return"==";case"NOT_EQUAL":return"!=";case"GREATER_THAN":return">";case"GREATER_THAN_OR_EQUAL":return">=";case"LESS_THAN":return"<";case"LESS_THAN_OR_EQUAL":return"<=";case"ARRAY_CONTAINS":return"array-contains";case"IN":return"in";case"NOT_IN":return"not-in";case"ARRAY_CONTAINS_ANY":return"array-contains-any";default:return U()}}(n.fieldFilter.op),n.fieldFilter.value)}(t):t.compositeFilter!==void 0?function(n){return Kt.create(n.compositeFilter.filters.map(r=>WI(r)),function(i){switch(i){case"AND":return"and";case"OR":return"or";default:return U()}}(n.compositeFilter.op))}(t):U()}function vD(t){return iD[t]}function yD(t){return sD[t]}function _D(t){return oD[t]}function Ai(t){return{fieldPath:t.canonicalString()}}function ki(t){return He.fromServerFormat(t.fieldPath)}function qI(t){return t instanceof Ce?function(n){if(n.op==="=="){if(S_(n.value))return{unaryFilter:{field:Ai(n.field),op:"IS_NAN"}};if(I_(n.value))return{unaryFilter:{field:Ai(n.field),op:"IS_NULL"}}}else if(n.op==="!="){if(S_(n.value))return{unaryFilter:{field:Ai(n.field),op:"IS_NOT_NAN"}};if(I_(n.value))return{unaryFilter:{field:Ai(n.field),op:"IS_NOT_NULL"}}}return{fieldFilter:{field:Ai(n.field),op:yD(n.op),value:n.value}}}(t):t instanceof Kt?function(n){const r=n.getFilters().map(i=>qI(i));return r.length===1?r[0]:{compositeFilter:{op:_D(n.op),filters:r}}}(t):U()}function wD(t){const e=[];return t.fields.forEach(n=>e.push(n.canonicalString())),{fieldPaths:e}}function KI(t){return t.length>=4&&t.get(0)==="projects"&&t.get(2)==="databases"}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Jn{constructor(e,n,r,i,s=z.min(),o=z.min(),a=st.EMPTY_BYTE_STRING,l=null){this.target=e,this.targetId=n,this.purpose=r,this.sequenceNumber=i,this.snapshotVersion=s,this.lastLimboFreeSnapshotVersion=o,this.resumeToken=a,this.expectedCount=l}withSequenceNumber(e){return new Jn(this.target,this.targetId,this.purpose,e,this.snapshotVersion,this.lastLimboFreeSnapshotVersion,this.resumeToken,this.expectedCount)}withResumeToken(e,n){return new Jn(this.target,this.targetId,this.purpose,this.sequenceNumber,n,this.lastLimboFreeSnapshotVersion,e,null)}withExpectedCount(e){return new Jn(this.target,this.targetId,this.purpose,this.sequenceNumber,this.snapshotVersion,this.lastLimboFreeSnapshotVersion,this.resumeToken,e)}withLastLimboFreeSnapshotVersion(e){return new Jn(this.target,this.targetId,this.purpose,this.sequenceNumber,this.snapshotVersion,e,this.resumeToken,this.expectedCount)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class ED{constructor(e){this.ct=e}}function TD(t){const e=mD({parent:t.parent,structuredQuery:t.structuredQuery});return t.limitType==="LAST"?rp(e,e.limit,"L"):e}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class ID{constructor(){this._n=new SD}addToCollectionParentIndex(e,n){return this._n.add(n),S.resolve()}getCollectionParents(e,n){return S.resolve(this._n.getEntries(n))}addFieldIndex(e,n){return S.resolve()}deleteFieldIndex(e,n){return S.resolve()}deleteAllFieldIndexes(e){return S.resolve()}createTargetIndexes(e,n){return S.resolve()}getDocumentsMatchingTarget(e,n){return S.resolve(null)}getIndexType(e,n){return S.resolve(0)}getFieldIndexes(e,n){return S.resolve([])}getNextCollectionGroupToUpdate(e){return S.resolve(null)}getMinOffset(e,n){return S.resolve(mr.min())}getMinOffsetFromCollectionGroup(e,n){return S.resolve(mr.min())}updateCollectionGroup(e,n,r){return S.resolve()}updateIndexEntries(e,n){return S.resolve()}}class SD{constructor(){this.index={}}add(e){const n=e.lastSegment(),r=e.popLast(),i=this.index[n]||new Ke(ae.comparator),s=!i.has(r);return this.index[n]=i.add(r),s}has(e){const n=e.lastSegment(),r=e.popLast(),i=this.index[n];return i&&i.has(r)}getEntries(e){return(this.index[e]||new Ke(ae.comparator)).toArray()}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class ms{constructor(e){this.On=e}next(){return this.On+=2,this.On}static Nn(){return new ms(0)}static Bn(){return new ms(-1)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class AD{constructor(){this.changes=new xs(e=>e.toString(),(e,n)=>e.isEqual(n)),this.changesApplied=!1}addEntry(e){this.assertNotApplied(),this.changes.set(e.key,e)}removeEntry(e,n){this.assertNotApplied(),this.changes.set(e,et.newInvalidDocument(e).setReadTime(n))}getEntry(e,n){this.assertNotApplied();const r=this.changes.get(n);return r!==void 0?S.resolve(r):this.getFromCache(e,n)}getEntries(e,n){return this.getAllFromCache(e,n)}apply(e){return this.assertNotApplied(),this.changesApplied=!0,this.applyChanges(e)}assertNotApplied(){}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 *//**
 * @license
 * Copyright 2022 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class kD{constructor(e,n){this.overlayedDocument=e,this.mutatedFields=n}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class PD{constructor(e,n,r,i){this.remoteDocumentCache=e,this.mutationQueue=n,this.documentOverlayCache=r,this.indexManager=i}getDocument(e,n){let r=null;return this.documentOverlayCache.getOverlay(e,n).next(i=>(r=i,this.remoteDocumentCache.getEntry(e,n))).next(i=>(r!==null&&Eo(r.mutation,i,wt.empty(),Ne.now()),i))}getDocuments(e,n){return this.remoteDocumentCache.getEntries(e,n).next(r=>this.getLocalViewOfDocuments(e,r,G()).next(()=>r))}getLocalViewOfDocuments(e,n,r=G()){const i=Gr();return this.populateOverlays(e,i,n).next(()=>this.computeViews(e,n,i,r).next(s=>{let o=to();return s.forEach((a,l)=>{o=o.insert(a,l.overlayedDocument)}),o}))}getOverlayedDocuments(e,n){const r=Gr();return this.populateOverlays(e,r,n).next(()=>this.computeViews(e,n,r,G()))}populateOverlays(e,n,r){const i=[];return r.forEach(s=>{n.has(s)||i.push(s)}),this.documentOverlayCache.getOverlays(e,i).next(s=>{s.forEach((o,a)=>{n.set(o,a)})})}computeViews(e,n,r,i){let s=Pn();const o=wo(),a=function(){return wo()}();return n.forEach((l,u)=>{const c=r.get(u.key);i.has(u.key)&&(c===void 0||c.mutation instanceof Nr)?s=s.insert(u.key,u):c!==void 0?(o.set(u.key,c.mutation.getFieldMask()),Eo(c.mutation,u,c.mutation.getFieldMask(),Ne.now())):o.set(u.key,wt.empty())}),this.recalculateAndSaveOverlays(e,s).next(l=>(l.forEach((u,c)=>o.set(u,c)),n.forEach((u,c)=>{var f;return a.set(u,new kD(c,(f=o.get(u))!==null&&f!==void 0?f:null))}),a))}recalculateAndSaveOverlays(e,n){const r=wo();let i=new ve((o,a)=>o-a),s=G();return this.mutationQueue.getAllMutationBatchesAffectingDocumentKeys(e,n).next(o=>{for(const a of o)a.keys().forEach(l=>{const u=n.get(l);if(u===null)return;let c=r.get(l)||wt.empty();c=a.applyToLocalView(u,c),r.set(l,c);const f=(i.get(a.batchId)||G()).add(l);i=i.insert(a.batchId,f)})}).next(()=>{const o=[],a=i.getReverseIterator();for(;a.hasNext();){const l=a.getNext(),u=l.key,c=l.value,f=CI();c.forEach(h=>{if(!s.has(h)){const p=LI(n.get(h),r.get(h));p!==null&&f.set(h,p),s=s.add(h)}}),o.push(this.documentOverlayCache.saveOverlays(e,u,f))}return S.waitFor(o)}).next(()=>r)}recalculateAndSaveOverlaysForDocumentKeys(e,n){return this.remoteDocumentCache.getEntries(e,n).next(r=>this.recalculateAndSaveOverlays(e,r))}getDocumentsMatchingQuery(e,n,r,i){return function(o){return V.isDocumentKey(o.path)&&o.collectionGroup===null&&o.filters.length===0}(n)?this.getDocumentsMatchingDocumentQuery(e,n.path):II(n)?this.getDocumentsMatchingCollectionGroupQuery(e,n,r,i):this.getDocumentsMatchingCollectionQuery(e,n,r,i)}getNextDocuments(e,n,r,i){return this.remoteDocumentCache.getAllFromCollectionGroup(e,n,r,i).next(s=>{const o=i-s.size>0?this.documentOverlayCache.getOverlaysForCollectionGroup(e,n,r.largestBatchId,i-s.size):S.resolve(Gr());let a=-1,l=s;return o.next(u=>S.forEach(u,(c,f)=>(a<f.largestBatchId&&(a=f.largestBatchId),s.get(c)?S.resolve():this.remoteDocumentCache.getEntry(e,c).next(h=>{l=l.insert(c,h)}))).next(()=>this.populateOverlays(e,u,s)).next(()=>this.computeViews(e,l,u,G())).next(c=>({batchId:a,changes:PI(c)})))})}getDocumentsMatchingDocumentQuery(e,n){return this.getDocument(e,new V(n)).next(r=>{let i=to();return r.isFoundDocument()&&(i=i.insert(r.key,r)),i})}getDocumentsMatchingCollectionGroupQuery(e,n,r,i){const s=n.collectionGroup;let o=to();return this.indexManager.getCollectionParents(e,s).next(a=>S.forEach(a,l=>{const u=function(f,h){return new bs(h,null,f.explicitOrderBy.slice(),f.filters.slice(),f.limit,f.limitType,f.startAt,f.endAt)}(n,l.child(s));return this.getDocumentsMatchingCollectionQuery(e,u,r,i).next(c=>{c.forEach((f,h)=>{o=o.insert(f,h)})})}).next(()=>o))}getDocumentsMatchingCollectionQuery(e,n,r,i){let s;return this.documentOverlayCache.getOverlaysForCollection(e,n.path,r.largestBatchId).next(o=>(s=o,this.remoteDocumentCache.getDocumentsMatchingQuery(e,n,r,s,i))).next(o=>{s.forEach((l,u)=>{const c=u.getKey();o.get(c)===null&&(o=o.insert(c,et.newInvalidDocument(c)))});let a=to();return o.forEach((l,u)=>{const c=s.get(l);c!==void 0&&Eo(c.mutation,u,wt.empty(),Ne.now()),tf(n,u)&&(a=a.insert(l,u))}),a})}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class CD{constructor(e){this.serializer=e,this.cr=new Map,this.lr=new Map}getBundleMetadata(e,n){return S.resolve(this.cr.get(n))}saveBundleMetadata(e,n){return this.cr.set(n.id,function(i){return{id:i.id,version:i.version,createTime:un(i.createTime)}}(n)),S.resolve()}getNamedQuery(e,n){return S.resolve(this.lr.get(n))}saveNamedQuery(e,n){return this.lr.set(n.name,function(i){return{name:i.name,query:TD(i.bundledQuery),readTime:un(i.readTime)}}(n)),S.resolve()}}/**
 * @license
 * Copyright 2022 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class RD{constructor(){this.overlays=new ve(V.comparator),this.hr=new Map}getOverlay(e,n){return S.resolve(this.overlays.get(n))}getOverlays(e,n){const r=Gr();return S.forEach(n,i=>this.getOverlay(e,i).next(s=>{s!==null&&r.set(i,s)})).next(()=>r)}saveOverlays(e,n,r){return r.forEach((i,s)=>{this.ht(e,n,s)}),S.resolve()}removeOverlaysForBatchId(e,n,r){const i=this.hr.get(r);return i!==void 0&&(i.forEach(s=>this.overlays=this.overlays.remove(s)),this.hr.delete(r)),S.resolve()}getOverlaysForCollection(e,n,r){const i=Gr(),s=n.length+1,o=new V(n.child("")),a=this.overlays.getIteratorFrom(o);for(;a.hasNext();){const l=a.getNext().value,u=l.getKey();if(!n.isPrefixOf(u.path))break;u.path.length===s&&l.largestBatchId>r&&i.set(l.getKey(),l)}return S.resolve(i)}getOverlaysForCollectionGroup(e,n,r,i){let s=new ve((u,c)=>u-c);const o=this.overlays.getIterator();for(;o.hasNext();){const u=o.getNext().value;if(u.getKey().getCollectionGroup()===n&&u.largestBatchId>r){let c=s.get(u.largestBatchId);c===null&&(c=Gr(),s=s.insert(u.largestBatchId,c)),c.set(u.getKey(),u)}}const a=Gr(),l=s.getIterator();for(;l.hasNext()&&(l.getNext().value.forEach((u,c)=>a.set(u,c)),!(a.size()>=i)););return S.resolve(a)}ht(e,n,r){const i=this.overlays.get(r.key);if(i!==null){const o=this.hr.get(i.largestBatchId).delete(r.key);this.hr.set(i.largestBatchId,o)}this.overlays=this.overlays.insert(r.key,new JO(n,r));let s=this.hr.get(n);s===void 0&&(s=G(),this.hr.set(n,s)),this.hr.set(n,s.add(r.key))}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Eg{constructor(){this.Pr=new Ke(Me.Ir),this.Tr=new Ke(Me.Er)}isEmpty(){return this.Pr.isEmpty()}addReference(e,n){const r=new Me(e,n);this.Pr=this.Pr.add(r),this.Tr=this.Tr.add(r)}dr(e,n){e.forEach(r=>this.addReference(r,n))}removeReference(e,n){this.Ar(new Me(e,n))}Rr(e,n){e.forEach(r=>this.removeReference(r,n))}Vr(e){const n=new V(new ae([])),r=new Me(n,e),i=new Me(n,e+1),s=[];return this.Tr.forEachInRange([r,i],o=>{this.Ar(o),s.push(o.key)}),s}mr(){this.Pr.forEach(e=>this.Ar(e))}Ar(e){this.Pr=this.Pr.delete(e),this.Tr=this.Tr.delete(e)}gr(e){const n=new V(new ae([])),r=new Me(n,e),i=new Me(n,e+1);let s=G();return this.Tr.forEachInRange([r,i],o=>{s=s.add(o.key)}),s}containsKey(e){const n=new Me(e,0),r=this.Pr.firstAfterOrEqual(n);return r!==null&&e.isEqual(r.key)}}class Me{constructor(e,n){this.key=e,this.pr=n}static Ir(e,n){return V.comparator(e.key,n.key)||Z(e.pr,n.pr)}static Er(e,n){return Z(e.pr,n.pr)||V.comparator(e.key,n.key)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class bD{constructor(e,n){this.indexManager=e,this.referenceDelegate=n,this.mutationQueue=[],this.yr=1,this.wr=new Ke(Me.Ir)}checkEmpty(e){return S.resolve(this.mutationQueue.length===0)}addMutationBatch(e,n,r,i){const s=this.yr;this.yr++,this.mutationQueue.length>0&&this.mutationQueue[this.mutationQueue.length-1];const o=new XO(s,n,r,i);this.mutationQueue.push(o);for(const a of i)this.wr=this.wr.add(new Me(a.key,s)),this.indexManager.addToCollectionParentIndex(e,a.key.path.popLast());return S.resolve(o)}lookupMutationBatch(e,n){return S.resolve(this.Sr(n))}getNextMutationBatchAfterBatchId(e,n){const r=n+1,i=this.br(r),s=i<0?0:i;return S.resolve(this.mutationQueue.length>s?this.mutationQueue[s]:null)}getHighestUnacknowledgedBatchId(){return S.resolve(this.mutationQueue.length===0?-1:this.yr-1)}getAllMutationBatches(e){return S.resolve(this.mutationQueue.slice())}getAllMutationBatchesAffectingDocumentKey(e,n){const r=new Me(n,0),i=new Me(n,Number.POSITIVE_INFINITY),s=[];return this.wr.forEachInRange([r,i],o=>{const a=this.Sr(o.pr);s.push(a)}),S.resolve(s)}getAllMutationBatchesAffectingDocumentKeys(e,n){let r=new Ke(Z);return n.forEach(i=>{const s=new Me(i,0),o=new Me(i,Number.POSITIVE_INFINITY);this.wr.forEachInRange([s,o],a=>{r=r.add(a.pr)})}),S.resolve(this.Dr(r))}getAllMutationBatchesAffectingQuery(e,n){const r=n.path,i=r.length+1;let s=r;V.isDocumentKey(s)||(s=s.child(""));const o=new Me(new V(s),0);let a=new Ke(Z);return this.wr.forEachWhile(l=>{const u=l.key.path;return!!r.isPrefixOf(u)&&(u.length===i&&(a=a.add(l.pr)),!0)},o),S.resolve(this.Dr(a))}Dr(e){const n=[];return e.forEach(r=>{const i=this.Sr(r);i!==null&&n.push(i)}),n}removeMutationBatch(e,n){re(this.Cr(n.batchId,"removed")===0),this.mutationQueue.shift();let r=this.wr;return S.forEach(n.mutations,i=>{const s=new Me(i.key,n.batchId);return r=r.delete(s),this.referenceDelegate.markPotentiallyOrphaned(e,i.key)}).next(()=>{this.wr=r})}Mn(e){}containsKey(e,n){const r=new Me(n,0),i=this.wr.firstAfterOrEqual(r);return S.resolve(n.isEqual(i&&i.key))}performConsistencyCheck(e){return this.mutationQueue.length,S.resolve()}Cr(e,n){return this.br(e)}br(e){return this.mutationQueue.length===0?0:e-this.mutationQueue[0].batchId}Sr(e){const n=this.br(e);return n<0||n>=this.mutationQueue.length?null:this.mutationQueue[n]}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class xD{constructor(e){this.vr=e,this.docs=function(){return new ve(V.comparator)}(),this.size=0}setIndexManager(e){this.indexManager=e}addEntry(e,n){const r=n.key,i=this.docs.get(r),s=i?i.size:0,o=this.vr(n);return this.docs=this.docs.insert(r,{document:n.mutableCopy(),size:o}),this.size+=o-s,this.indexManager.addToCollectionParentIndex(e,r.path.popLast())}removeEntry(e){const n=this.docs.get(e);n&&(this.docs=this.docs.remove(e),this.size-=n.size)}getEntry(e,n){const r=this.docs.get(n);return S.resolve(r?r.document.mutableCopy():et.newInvalidDocument(n))}getEntries(e,n){let r=Pn();return n.forEach(i=>{const s=this.docs.get(i);r=r.insert(i,s?s.document.mutableCopy():et.newInvalidDocument(i))}),S.resolve(r)}getDocumentsMatchingQuery(e,n,r,i){let s=Pn();const o=n.path,a=new V(o.child("")),l=this.docs.getIteratorFrom(a);for(;l.hasNext();){const{key:u,value:{document:c}}=l.getNext();if(!o.isPrefixOf(u.path))break;u.path.length>o.length+1||pO(dO(c),r)<=0||(i.has(c.key)||tf(n,c))&&(s=s.insert(c.key,c.mutableCopy()))}return S.resolve(s)}getAllFromCollectionGroup(e,n,r,i){U()}Fr(e,n){return S.forEach(this.docs,r=>n(r))}newChangeBuffer(e){return new ND(this)}getSize(e){return S.resolve(this.size)}}class ND extends AD{constructor(e){super(),this.ar=e}applyChanges(e){const n=[];return this.changes.forEach((r,i)=>{i.isValidDocument()?n.push(this.ar.addEntry(e,i)):this.ar.removeEntry(r)}),S.waitFor(n)}getFromCache(e,n){return this.ar.getEntry(e,n)}getAllFromCache(e,n){return this.ar.getEntries(e,n)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class OD{constructor(e){this.persistence=e,this.Mr=new xs(n=>gg(n),vg),this.lastRemoteSnapshotVersion=z.min(),this.highestTargetId=0,this.Or=0,this.Nr=new Eg,this.targetCount=0,this.Br=ms.Nn()}forEachTarget(e,n){return this.Mr.forEach((r,i)=>n(i)),S.resolve()}getLastRemoteSnapshotVersion(e){return S.resolve(this.lastRemoteSnapshotVersion)}getHighestSequenceNumber(e){return S.resolve(this.Or)}allocateTargetId(e){return this.highestTargetId=this.Br.next(),S.resolve(this.highestTargetId)}setTargetsMetadata(e,n,r){return r&&(this.lastRemoteSnapshotVersion=r),n>this.Or&&(this.Or=n),S.resolve()}qn(e){this.Mr.set(e.target,e);const n=e.targetId;n>this.highestTargetId&&(this.Br=new ms(n),this.highestTargetId=n),e.sequenceNumber>this.Or&&(this.Or=e.sequenceNumber)}addTargetData(e,n){return this.qn(n),this.targetCount+=1,S.resolve()}updateTargetData(e,n){return this.qn(n),S.resolve()}removeTargetData(e,n){return this.Mr.delete(n.target),this.Nr.Vr(n.targetId),this.targetCount-=1,S.resolve()}removeTargets(e,n,r){let i=0;const s=[];return this.Mr.forEach((o,a)=>{a.sequenceNumber<=n&&r.get(a.targetId)===null&&(this.Mr.delete(o),s.push(this.removeMatchingKeysForTargetId(e,a.targetId)),i++)}),S.waitFor(s).next(()=>i)}getTargetCount(e){return S.resolve(this.targetCount)}getTargetData(e,n){const r=this.Mr.get(n)||null;return S.resolve(r)}addMatchingKeys(e,n,r){return this.Nr.dr(n,r),S.resolve()}removeMatchingKeys(e,n,r){this.Nr.Rr(n,r);const i=this.persistence.referenceDelegate,s=[];return i&&n.forEach(o=>{s.push(i.markPotentiallyOrphaned(e,o))}),S.waitFor(s)}removeMatchingKeysForTargetId(e,n){return this.Nr.Vr(n),S.resolve()}getMatchingKeysForTargetId(e,n){const r=this.Nr.gr(n);return S.resolve(r)}containsKey(e,n){return S.resolve(this.Nr.containsKey(n))}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class DD{constructor(e,n){this.Lr={},this.overlays={},this.kr=new hg(0),this.qr=!1,this.qr=!0,this.referenceDelegate=e(this),this.Qr=new OD(this),this.indexManager=new ID,this.remoteDocumentCache=function(i){return new xD(i)}(r=>this.referenceDelegate.Kr(r)),this.serializer=new ED(n),this.$r=new CD(this.serializer)}start(){return Promise.resolve()}shutdown(){return this.qr=!1,Promise.resolve()}get started(){return this.qr}setDatabaseDeletedListener(){}setNetworkEnabled(){}getIndexManager(e){return this.indexManager}getDocumentOverlayCache(e){let n=this.overlays[e.toKey()];return n||(n=new RD,this.overlays[e.toKey()]=n),n}getMutationQueue(e,n){let r=this.Lr[e.toKey()];return r||(r=new bD(n,this.referenceDelegate),this.Lr[e.toKey()]=r),r}getTargetCache(){return this.Qr}getRemoteDocumentCache(){return this.remoteDocumentCache}getBundleCache(){return this.$r}runTransaction(e,n,r){R("MemoryPersistence","Starting transaction:",e);const i=new LD(this.kr.next());return this.referenceDelegate.Ur(),r(i).next(s=>this.referenceDelegate.Wr(i).next(()=>s)).toPromise().then(s=>(i.raiseOnCommittedEvent(),s))}Gr(e,n){return S.or(Object.values(this.Lr).map(r=>()=>r.containsKey(e,n)))}}class LD extends gO{constructor(e){super(),this.currentSequenceNumber=e}}class Tg{constructor(e){this.persistence=e,this.zr=new Eg,this.jr=null}static Hr(e){return new Tg(e)}get Jr(){if(this.jr)return this.jr;throw U()}addReference(e,n,r){return this.zr.addReference(r,n),this.Jr.delete(r.toString()),S.resolve()}removeReference(e,n,r){return this.zr.removeReference(r,n),this.Jr.add(r.toString()),S.resolve()}markPotentiallyOrphaned(e,n){return this.Jr.add(n.toString()),S.resolve()}removeTarget(e,n){this.zr.Vr(n.targetId).forEach(i=>this.Jr.add(i.toString()));const r=this.persistence.getTargetCache();return r.getMatchingKeysForTargetId(e,n.targetId).next(i=>{i.forEach(s=>this.Jr.add(s.toString()))}).next(()=>r.removeTargetData(e,n))}Ur(){this.jr=new Set}Wr(e){const n=this.persistence.getRemoteDocumentCache().newChangeBuffer();return S.forEach(this.Jr,r=>{const i=V.fromPath(r);return this.Yr(e,i).next(s=>{s||n.removeEntry(i,z.min())})}).next(()=>(this.jr=null,n.apply(e)))}updateLimboDocument(e,n){return this.Yr(e,n).next(r=>{r?this.Jr.delete(n.toString()):this.Jr.add(n.toString())})}Kr(e){return 0}Yr(e,n){return S.or([()=>S.resolve(this.zr.containsKey(n)),()=>this.persistence.getTargetCache().containsKey(e,n),()=>this.persistence.Gr(e,n)])}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Ig{constructor(e,n,r,i){this.targetId=e,this.fromCache=n,this.qi=r,this.Qi=i}static Ki(e,n){let r=G(),i=G();for(const s of n.docChanges)switch(s.type){case 0:r=r.add(s.doc.key);break;case 1:i=i.add(s.doc.key)}return new Ig(e,n.fromCache,r,i)}}/**
 * @license
 * Copyright 2023 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class MD{constructor(){this._documentReadCount=0}get documentReadCount(){return this._documentReadCount}incrementDocumentReadCount(e){this._documentReadCount+=e}}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class VD{constructor(){this.$i=!1,this.Ui=!1,this.Wi=100,this.Gi=function(){return gR()?8:Kr.v(Re())>0?6:4}()}initialize(e,n){this.zi=e,this.indexManager=n,this.$i=!0}getDocumentsMatchingQuery(e,n,r,i){const s={result:null};return this.ji(e,n).next(o=>{s.result=o}).next(()=>{if(!s.result)return this.Hi(e,n,i,r).next(o=>{s.result=o})}).next(()=>{if(s.result)return;const o=new MD;return this.Ji(e,n,o).next(a=>{if(s.result=a,this.Ui)return this.Yi(e,n,o,a.size)})}).next(()=>s.result)}Yi(e,n,r,i){return r.documentReadCount<this.Wi?(qs()<=Y.DEBUG&&R("QueryEngine","SDK will not create cache indexes for query:",Si(n),"since it only creates cache indexes for collection contains","more than or equal to",this.Wi,"documents"),S.resolve()):(qs()<=Y.DEBUG&&R("QueryEngine","Query:",Si(n),"scans",r.documentReadCount,"local documents and returns",i,"documents as results."),r.documentReadCount>this.Gi*i?(qs()<=Y.DEBUG&&R("QueryEngine","The SDK decides to create cache indexes for query:",Si(n),"as using cache indexes may help improve performance."),this.indexManager.createTargetIndexes(e,ln(n))):S.resolve())}ji(e,n){if(C_(n))return S.resolve(null);let r=ln(n);return this.indexManager.getIndexType(e,r).next(i=>i===0?null:(n.limit!==null&&i===1&&(n=rp(n,null,"F"),r=ln(n)),this.indexManager.getDocumentsMatchingTarget(e,r).next(s=>{const o=G(...s);return this.zi.getDocuments(e,o).next(a=>this.indexManager.getMinOffset(e,r).next(l=>{const u=this.Zi(n,a);return this.Xi(n,u,o,l.readTime)?this.ji(e,rp(n,null,"F")):this.es(e,u,n,l)}))})))}Hi(e,n,r,i){return C_(n)||i.isEqual(z.min())?S.resolve(null):this.zi.getDocuments(e,r).next(s=>{const o=this.Zi(n,s);return this.Xi(n,o,r,i)?S.resolve(null):(qs()<=Y.DEBUG&&R("QueryEngine","Re-using previous result from %s to execute query: %s",i.toString(),Si(n)),this.es(e,o,n,hO(i,-1)).next(a=>a))})}Zi(e,n){let r=new Ke(AI(e));return n.forEach((i,s)=>{tf(e,s)&&(r=r.add(s))}),r}Xi(e,n,r,i){if(e.limit===null)return!1;if(r.size!==n.size)return!0;const s=e.limitType==="F"?n.last():n.first();return!!s&&(s.hasPendingWrites||s.version.compareTo(i)>0)}Ji(e,n,r){return qs()<=Y.DEBUG&&R("QueryEngine","Using full collection scan to execute query:",Si(n)),this.zi.getDocumentsMatchingQuery(e,n,mr.min(),r)}es(e,n,r,i){return this.zi.getDocumentsMatchingQuery(e,r,i).next(s=>(n.forEach(o=>{s=s.insert(o.key,o)}),s))}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class FD{constructor(e,n,r,i){this.persistence=e,this.ts=n,this.serializer=i,this.ns=new ve(Z),this.rs=new xs(s=>gg(s),vg),this.ss=new Map,this.os=e.getRemoteDocumentCache(),this.Qr=e.getTargetCache(),this.$r=e.getBundleCache(),this._s(r)}_s(e){this.documentOverlayCache=this.persistence.getDocumentOverlayCache(e),this.indexManager=this.persistence.getIndexManager(e),this.mutationQueue=this.persistence.getMutationQueue(e,this.indexManager),this.localDocuments=new PD(this.os,this.mutationQueue,this.documentOverlayCache,this.indexManager),this.os.setIndexManager(this.indexManager),this.ts.initialize(this.localDocuments,this.indexManager)}collectGarbage(e){return this.persistence.runTransaction("Collect garbage","readwrite-primary",n=>e.collect(n,this.ns))}}function $D(t,e,n,r){return new FD(t,e,n,r)}async function GI(t,e){const n=H(t);return await n.persistence.runTransaction("Handle user change","readonly",r=>{let i;return n.mutationQueue.getAllMutationBatches(r).next(s=>(i=s,n._s(e),n.mutationQueue.getAllMutationBatches(r))).next(s=>{const o=[],a=[];let l=G();for(const u of i){o.push(u.batchId);for(const c of u.mutations)l=l.add(c.key)}for(const u of s){a.push(u.batchId);for(const c of u.mutations)l=l.add(c.key)}return n.localDocuments.getDocuments(r,l).next(u=>({us:u,removedBatchIds:o,addedBatchIds:a}))})})}function UD(t,e){const n=H(t);return n.persistence.runTransaction("Acknowledge batch","readwrite-primary",r=>{const i=e.batch.keys(),s=n.os.newChangeBuffer({trackRemovals:!0});return function(a,l,u,c){const f=u.batch,h=f.keys();let p=S.resolve();return h.forEach(y=>{p=p.next(()=>c.getEntry(l,y)).next(_=>{const w=u.docVersions.get(y);re(w!==null),_.version.compareTo(w)<0&&(f.applyToRemoteDocument(_,u),_.isValidDocument()&&(_.setReadTime(u.commitVersion),c.addEntry(_)))})}),p.next(()=>a.mutationQueue.removeMutationBatch(l,f))}(n,r,e,s).next(()=>s.apply(r)).next(()=>n.mutationQueue.performConsistencyCheck(r)).next(()=>n.documentOverlayCache.removeOverlaysForBatchId(r,i,e.batch.batchId)).next(()=>n.localDocuments.recalculateAndSaveOverlaysForDocumentKeys(r,function(a){let l=G();for(let u=0;u<a.mutationResults.length;++u)a.mutationResults[u].transformResults.length>0&&(l=l.add(a.batch.mutations[u].key));return l}(e))).next(()=>n.localDocuments.getDocuments(r,i))})}function QI(t){const e=H(t);return e.persistence.runTransaction("Get last remote snapshot version","readonly",n=>e.Qr.getLastRemoteSnapshotVersion(n))}function jD(t,e){const n=H(t),r=e.snapshotVersion;let i=n.ns;return n.persistence.runTransaction("Apply remote event","readwrite-primary",s=>{const o=n.os.newChangeBuffer({trackRemovals:!0});i=n.ns;const a=[];e.targetChanges.forEach((c,f)=>{const h=i.get(f);if(!h)return;a.push(n.Qr.removeMatchingKeys(s,c.removedDocuments,f).next(()=>n.Qr.addMatchingKeys(s,c.addedDocuments,f)));let p=h.withSequenceNumber(s.currentSequenceNumber);e.targetMismatches.get(f)!==null?p=p.withResumeToken(st.EMPTY_BYTE_STRING,z.min()).withLastLimboFreeSnapshotVersion(z.min()):c.resumeToken.approximateByteSize()>0&&(p=p.withResumeToken(c.resumeToken,r)),i=i.insert(f,p),function(_,w,m){return _.resumeToken.approximateByteSize()===0||w.snapshotVersion.toMicroseconds()-_.snapshotVersion.toMicroseconds()>=3e8?!0:m.addedDocuments.size+m.modifiedDocuments.size+m.removedDocuments.size>0}(h,p,c)&&a.push(n.Qr.updateTargetData(s,p))});let l=Pn(),u=G();if(e.documentUpdates.forEach(c=>{e.resolvedLimboDocuments.has(c)&&a.push(n.persistence.referenceDelegate.updateLimboDocument(s,c))}),a.push(zD(s,o,e.documentUpdates).next(c=>{l=c.cs,u=c.ls})),!r.isEqual(z.min())){const c=n.Qr.getLastRemoteSnapshotVersion(s).next(f=>n.Qr.setTargetsMetadata(s,s.currentSequenceNumber,r));a.push(c)}return S.waitFor(a).next(()=>o.apply(s)).next(()=>n.localDocuments.getLocalViewOfDocuments(s,l,u)).next(()=>l)}).then(s=>(n.ns=i,s))}function zD(t,e,n){let r=G(),i=G();return n.forEach(s=>r=r.add(s)),e.getEntries(t,r).next(s=>{let o=Pn();return n.forEach((a,l)=>{const u=s.get(a);l.isFoundDocument()!==u.isFoundDocument()&&(i=i.add(a)),l.isNoDocument()&&l.version.isEqual(z.min())?(e.removeEntry(a,l.readTime),o=o.insert(a,l)):!u.isValidDocument()||l.version.compareTo(u.version)>0||l.version.compareTo(u.version)===0&&u.hasPendingWrites?(e.addEntry(l),o=o.insert(a,l)):R("LocalStore","Ignoring outdated watch update for ",a,". Current version:",u.version," Watch version:",l.version)}),{cs:o,ls:i}})}function BD(t,e){const n=H(t);return n.persistence.runTransaction("Get next mutation batch","readonly",r=>(e===void 0&&(e=-1),n.mutationQueue.getNextMutationBatchAfterBatchId(r,e)))}function HD(t,e){const n=H(t);return n.persistence.runTransaction("Allocate target","readwrite",r=>{let i;return n.Qr.getTargetData(r,e).next(s=>s?(i=s,S.resolve(i)):n.Qr.allocateTargetId(r).next(o=>(i=new Jn(e,o,"TargetPurposeListen",r.currentSequenceNumber),n.Qr.addTargetData(r,i).next(()=>i))))}).then(r=>{const i=n.ns.get(r.targetId);return(i===null||r.snapshotVersion.compareTo(i.snapshotVersion)>0)&&(n.ns=n.ns.insert(r.targetId,r),n.rs.set(e,r.targetId)),r})}async function lp(t,e,n){const r=H(t),i=r.ns.get(e),s=n?"readwrite":"readwrite-primary";try{n||await r.persistence.runTransaction("Release target",s,o=>r.persistence.referenceDelegate.removeTarget(o,i))}catch(o){if(!Ma(o))throw o;R("LocalStore",`Failed to update sequence numbers for target ${e}: ${o}`)}r.ns=r.ns.remove(e),r.rs.delete(i.target)}function $_(t,e,n){const r=H(t);let i=z.min(),s=G();return r.persistence.runTransaction("Execute query","readwrite",o=>function(l,u,c){const f=H(l),h=f.rs.get(c);return h!==void 0?S.resolve(f.ns.get(h)):f.Qr.getTargetData(u,c)}(r,o,ln(e)).next(a=>{if(a)return i=a.lastLimboFreeSnapshotVersion,r.Qr.getMatchingKeysForTargetId(o,a.targetId).next(l=>{s=l})}).next(()=>r.ts.getDocumentsMatchingQuery(o,e,n?i:z.min(),n?s:G())).next(a=>(WD(r,LO(e),a),{documents:a,hs:s})))}function WD(t,e,n){let r=t.ss.get(e)||z.min();n.forEach((i,s)=>{s.readTime.compareTo(r)>0&&(r=s.readTime)}),t.ss.set(e,r)}class U_{constructor(){this.activeTargetIds=jO()}As(e){this.activeTargetIds=this.activeTargetIds.add(e)}Rs(e){this.activeTargetIds=this.activeTargetIds.delete(e)}ds(){const e={activeTargetIds:this.activeTargetIds.toArray(),updateTimeMs:Date.now()};return JSON.stringify(e)}}class qD{constructor(){this.no=new U_,this.ro={},this.onlineStateHandler=null,this.sequenceNumberHandler=null}addPendingMutation(e){}updateMutationState(e,n,r){}addLocalQueryTarget(e){return this.no.As(e),this.ro[e]||"not-current"}updateQueryState(e,n,r){this.ro[e]=n}removeLocalQueryTarget(e){this.no.Rs(e)}isLocalQueryTarget(e){return this.no.activeTargetIds.has(e)}clearQueryState(e){delete this.ro[e]}getAllActiveQueryTargets(){return this.no.activeTargetIds}isActiveQueryTarget(e){return this.no.activeTargetIds.has(e)}start(){return this.no=new U_,Promise.resolve()}handleUserChange(e,n,r){}setOnlineState(e){}shutdown(){}writeSequenceNumber(e){}notifyBundleLoaded(e){}}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class KD{io(e){}shutdown(){}}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class j_{constructor(){this.so=()=>this.oo(),this._o=()=>this.ao(),this.uo=[],this.co()}io(e){this.uo.push(e)}shutdown(){window.removeEventListener("online",this.so),window.removeEventListener("offline",this._o)}co(){window.addEventListener("online",this.so),window.addEventListener("offline",this._o)}oo(){R("ConnectivityMonitor","Network connectivity changed: AVAILABLE");for(const e of this.uo)e(0)}ao(){R("ConnectivityMonitor","Network connectivity changed: UNAVAILABLE");for(const e of this.uo)e(1)}static D(){return typeof window<"u"&&window.addEventListener!==void 0&&window.removeEventListener!==void 0}}/**
 * @license
 * Copyright 2023 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */let Cl=null;function Ih(){return Cl===null?Cl=function(){return 268435456+Math.round(2147483648*Math.random())}():Cl++,"0x"+Cl.toString(16)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const GD={BatchGetDocuments:"batchGet",Commit:"commit",RunQuery:"runQuery",RunAggregationQuery:"runAggregationQuery"};/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class QD{constructor(e){this.lo=e.lo,this.ho=e.ho}Po(e){this.Io=e}To(e){this.Eo=e}onMessage(e){this.Ao=e}close(){this.ho()}send(e){this.lo(e)}Ro(){this.Io()}Vo(e){this.Eo(e)}mo(e){this.Ao(e)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Xe="WebChannelConnection";class YD extends class{constructor(n){this.databaseInfo=n,this.databaseId=n.databaseId;const r=n.ssl?"https":"http",i=encodeURIComponent(this.databaseId.projectId),s=encodeURIComponent(this.databaseId.database);this.fo=r+"://"+n.host,this.po=`projects/${i}/databases/${s}`,this.yo=this.databaseId.database==="(default)"?`project_id=${i}`:`project_id=${i}&database_id=${s}`}get wo(){return!1}So(n,r,i,s,o){const a=Ih(),l=this.bo(n,r.toUriEncodedString());R("RestConnection",`Sending RPC '${n}' ${a}:`,l,i);const u={"google-cloud-resource-prefix":this.po,"x-goog-request-params":this.yo};return this.Do(u,s,o),this.Co(n,l,u,i).then(c=>(R("RestConnection",`Received RPC '${n}' ${a}: `,c),c),c=>{throw fs("RestConnection",`RPC '${n}' ${a} failed with error: `,c,"url: ",l,"request:",i),c})}vo(n,r,i,s,o,a){return this.So(n,r,i,s,o)}Do(n,r,i){n["X-Goog-Api-Client"]=function(){return"gl-js/ fire/"+Rs}(),n["Content-Type"]="text/plain",this.databaseInfo.appId&&(n["X-Firebase-GMPID"]=this.databaseInfo.appId),r&&r.headers.forEach((s,o)=>n[o]=s),i&&i.headers.forEach((s,o)=>n[o]=s)}bo(n,r){const i=GD[n];return`${this.fo}/v1/${r}:${i}`}terminate(){}}{constructor(e){super(e),this.forceLongPolling=e.forceLongPolling,this.autoDetectLongPolling=e.autoDetectLongPolling,this.useFetchStreams=e.useFetchStreams,this.longPollingOptions=e.longPollingOptions}Co(e,n,r,i){const s=Ih();return new Promise((o,a)=>{const l=new tO;l.setWithCredentials(!0),l.listenOnce(ZN.COMPLETE,()=>{try{switch(l.getLastErrorCode()){case Eh.NO_ERROR:const c=l.getResponseJson();R(Xe,`XHR for RPC '${e}' ${s} received:`,JSON.stringify(c)),o(c);break;case Eh.TIMEOUT:R(Xe,`RPC '${e}' ${s} timed out`),a(new x(T.DEADLINE_EXCEEDED,"Request time out"));break;case Eh.HTTP_ERROR:const f=l.getStatus();if(R(Xe,`RPC '${e}' ${s} failed with status:`,f,"response text:",l.getResponseText()),f>0){let h=l.getResponseJson();Array.isArray(h)&&(h=h[0]);const p=h==null?void 0:h.error;if(p&&p.status&&p.message){const y=function(w){const m=w.toLowerCase().replace(/_/g,"-");return Object.values(T).indexOf(m)>=0?m:T.UNKNOWN}(p.status);a(new x(y,p.message))}else a(new x(T.UNKNOWN,"Server responded with status "+l.getStatus()))}else a(new x(T.UNAVAILABLE,"Connection failed."));break;default:U()}}finally{R(Xe,`RPC '${e}' ${s} completed.`)}});const u=JSON.stringify(i);R(Xe,`RPC '${e}' ${s} sending request:`,i),l.send(n,"POST",u,r,15)})}Fo(e,n,r){const i=Ih(),s=[this.fo,"/","google.firestore.v1.Firestore","/",e,"/channel"],o=XN(),a=JN(),l={httpSessionIdParam:"gsessionid",initMessageHeaders:{},messageUrlParams:{database:`projects/${this.databaseId.projectId}/databases/${this.databaseId.database}`},sendRawJson:!0,supportsCrossDomainXhr:!0,internalChannelParams:{forwardChannelRequestTimeoutMs:6e5},forceLongPolling:this.forceLongPolling,detectBufferingProxy:this.autoDetectLongPolling},u=this.longPollingOptions.timeoutSeconds;u!==void 0&&(l.longPollingTimeout=Math.round(1e3*u)),this.useFetchStreams&&(l.useFetchStreams=!0),this.Do(l.initMessageHeaders,n,r),l.encodeInitMessageHeaders=!0;const c=s.join("");R(Xe,`Creating RPC '${e}' stream ${i}: ${c}`,l);const f=o.createWebChannel(c,l);let h=!1,p=!1;const y=new QD({lo:w=>{p?R(Xe,`Not sending because RPC '${e}' stream ${i} is closed:`,w):(h||(R(Xe,`Opening RPC '${e}' stream ${i} transport.`),f.open(),h=!0),R(Xe,`RPC '${e}' stream ${i} sending:`,w),f.send(w))},ho:()=>f.close()}),_=(w,m,d)=>{w.listen(m,g=>{try{d(g)}catch(E){setTimeout(()=>{throw E},0)}})};return _(f,Al.EventType.OPEN,()=>{p||R(Xe,`RPC '${e}' stream ${i} transport opened.`)}),_(f,Al.EventType.CLOSE,()=>{p||(p=!0,R(Xe,`RPC '${e}' stream ${i} transport closed`),y.Vo())}),_(f,Al.EventType.ERROR,w=>{p||(p=!0,fs(Xe,`RPC '${e}' stream ${i} transport errored:`,w),y.Vo(new x(T.UNAVAILABLE,"The operation could not be completed")))}),_(f,Al.EventType.MESSAGE,w=>{var m;if(!p){const d=w.data[0];re(!!d);const g=d,E=g.error||((m=g[0])===null||m===void 0?void 0:m.error);if(E){R(Xe,`RPC '${e}' stream ${i} received error:`,E);const I=E.status;let k=function(B){const F=Ae[B];if(F!==void 0)return FI(F)}(I),C=E.message;k===void 0&&(k=T.INTERNAL,C="Unknown error status: "+I+" with message "+E.message),p=!0,y.Vo(new x(k,C)),f.close()}else R(Xe,`RPC '${e}' stream ${i} received:`,d),y.mo(d)}}),_(a,eO.STAT_EVENT,w=>{w.stat===g_.PROXY?R(Xe,`RPC '${e}' stream ${i} detected buffering proxy`):w.stat===g_.NOPROXY&&R(Xe,`RPC '${e}' stream ${i} detected no buffering proxy`)}),setTimeout(()=>{y.Ro()},0),y}}function Sh(){return typeof document<"u"?document:null}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function of(t){return new aD(t,!0)}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class YI{constructor(e,n,r=1e3,i=1.5,s=6e4){this.oi=e,this.timerId=n,this.Mo=r,this.xo=i,this.Oo=s,this.No=0,this.Bo=null,this.Lo=Date.now(),this.reset()}reset(){this.No=0}ko(){this.No=this.Oo}qo(e){this.cancel();const n=Math.floor(this.No+this.Qo()),r=Math.max(0,Date.now()-this.Lo),i=Math.max(0,n-r);i>0&&R("ExponentialBackoff",`Backing off for ${i} ms (base delay: ${this.No} ms, delay with jitter: ${n} ms, last attempt: ${r} ms ago)`),this.Bo=this.oi.enqueueAfterDelay(this.timerId,i,()=>(this.Lo=Date.now(),e())),this.No*=this.xo,this.No<this.Mo&&(this.No=this.Mo),this.No>this.Oo&&(this.No=this.Oo)}Ko(){this.Bo!==null&&(this.Bo.skipDelay(),this.Bo=null)}cancel(){this.Bo!==null&&(this.Bo.cancel(),this.Bo=null)}Qo(){return(Math.random()-.5)*this.No}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class XI{constructor(e,n,r,i,s,o,a,l){this.oi=e,this.$o=r,this.Uo=i,this.connection=s,this.authCredentialsProvider=o,this.appCheckCredentialsProvider=a,this.listener=l,this.state=0,this.Wo=0,this.Go=null,this.zo=null,this.stream=null,this.jo=new YI(e,n)}Ho(){return this.state===1||this.state===5||this.Jo()}Jo(){return this.state===2||this.state===3}start(){this.state!==4?this.auth():this.Yo()}async stop(){this.Ho()&&await this.close(0)}Zo(){this.state=0,this.jo.reset()}Xo(){this.Jo()&&this.Go===null&&(this.Go=this.oi.enqueueAfterDelay(this.$o,6e4,()=>this.e_()))}t_(e){this.n_(),this.stream.send(e)}async e_(){if(this.Jo())return this.close(0)}n_(){this.Go&&(this.Go.cancel(),this.Go=null)}r_(){this.zo&&(this.zo.cancel(),this.zo=null)}async close(e,n){this.n_(),this.r_(),this.jo.cancel(),this.Wo++,e!==4?this.jo.reset():n&&n.code===T.RESOURCE_EXHAUSTED?(cn(n.toString()),cn("Using maximum backoff delay to prevent overloading the backend."),this.jo.ko()):n&&n.code===T.UNAUTHENTICATED&&this.state!==3&&(this.authCredentialsProvider.invalidateToken(),this.appCheckCredentialsProvider.invalidateToken()),this.stream!==null&&(this.i_(),this.stream.close(),this.stream=null),this.state=e,await this.listener.To(n)}i_(){}auth(){this.state=1;const e=this.s_(this.Wo),n=this.Wo;Promise.all([this.authCredentialsProvider.getToken(),this.appCheckCredentialsProvider.getToken()]).then(([r,i])=>{this.Wo===n&&this.o_(r,i)},r=>{e(()=>{const i=new x(T.UNKNOWN,"Fetching auth token failed: "+r.message);return this.__(i)})})}o_(e,n){const r=this.s_(this.Wo);this.stream=this.a_(e,n),this.stream.Po(()=>{r(()=>(this.state=2,this.zo=this.oi.enqueueAfterDelay(this.Uo,1e4,()=>(this.Jo()&&(this.state=3),Promise.resolve())),this.listener.Po()))}),this.stream.To(i=>{r(()=>this.__(i))}),this.stream.onMessage(i=>{r(()=>this.onMessage(i))})}Yo(){this.state=5,this.jo.qo(async()=>{this.state=0,this.start()})}__(e){return R("PersistentStream",`close with error: ${e}`),this.stream=null,this.close(4,e)}s_(e){return n=>{this.oi.enqueueAndForget(()=>this.Wo===e?n():(R("PersistentStream","stream callback skipped by getCloseGuardedDispatcher."),Promise.resolve()))}}}class XD extends XI{constructor(e,n,r,i,s,o){super(e,"listen_stream_connection_backoff","listen_stream_idle","health_check_timeout",n,r,i,o),this.serializer=s}a_(e,n){return this.connection.Fo("Listen",e,n)}onMessage(e){this.jo.reset();const n=cD(this.serializer,e),r=function(s){if(!("targetChange"in s))return z.min();const o=s.targetChange;return o.targetIds&&o.targetIds.length?z.min():o.readTime?un(o.readTime):z.min()}(e);return this.listener.u_(n,r)}c_(e){const n={};n.database=ap(this.serializer),n.addTarget=function(s,o){let a;const l=o.target;if(a=tp(l)?{documents:dD(s,l)}:{query:pD(s,l).ut},a.targetId=o.targetId,o.resumeToken.approximateByteSize()>0){a.resumeToken=jI(s,o.resumeToken);const u=ip(s,o.expectedCount);u!==null&&(a.expectedCount=u)}else if(o.snapshotVersion.compareTo(z.min())>0){a.readTime=tc(s,o.snapshotVersion.toTimestamp());const u=ip(s,o.expectedCount);u!==null&&(a.expectedCount=u)}return a}(this.serializer,e);const r=gD(this.serializer,e);r&&(n.labels=r),this.t_(n)}l_(e){const n={};n.database=ap(this.serializer),n.removeTarget=e,this.t_(n)}}class JD extends XI{constructor(e,n,r,i,s,o){super(e,"write_stream_connection_backoff","write_stream_idle","health_check_timeout",n,r,i,o),this.serializer=s,this.h_=!1}get P_(){return this.h_}start(){this.h_=!1,this.lastStreamToken=void 0,super.start()}i_(){this.h_&&this.I_([])}a_(e,n){return this.connection.Fo("Write",e,n)}onMessage(e){if(re(!!e.streamToken),this.lastStreamToken=e.streamToken,this.h_){this.jo.reset();const n=hD(e.writeResults,e.commitTime),r=un(e.commitTime);return this.listener.T_(r,n)}return re(!e.writeResults||e.writeResults.length===0),this.h_=!0,this.listener.E_()}d_(){const e={};e.database=ap(this.serializer),this.t_(e)}I_(e){const n={streamToken:this.lastStreamToken,writes:e.map(r=>fD(this.serializer,r))};this.t_(n)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class ZD extends class{}{constructor(e,n,r,i){super(),this.authCredentials=e,this.appCheckCredentials=n,this.connection=r,this.serializer=i,this.A_=!1}R_(){if(this.A_)throw new x(T.FAILED_PRECONDITION,"The client has already been terminated.")}So(e,n,r,i){return this.R_(),Promise.all([this.authCredentials.getToken(),this.appCheckCredentials.getToken()]).then(([s,o])=>this.connection.So(e,sp(n,r),i,s,o)).catch(s=>{throw s.name==="FirebaseError"?(s.code===T.UNAUTHENTICATED&&(this.authCredentials.invalidateToken(),this.appCheckCredentials.invalidateToken()),s):new x(T.UNKNOWN,s.toString())})}vo(e,n,r,i,s){return this.R_(),Promise.all([this.authCredentials.getToken(),this.appCheckCredentials.getToken()]).then(([o,a])=>this.connection.vo(e,sp(n,r),i,o,a,s)).catch(o=>{throw o.name==="FirebaseError"?(o.code===T.UNAUTHENTICATED&&(this.authCredentials.invalidateToken(),this.appCheckCredentials.invalidateToken()),o):new x(T.UNKNOWN,o.toString())})}terminate(){this.A_=!0,this.connection.terminate()}}class eL{constructor(e,n){this.asyncQueue=e,this.onlineStateHandler=n,this.state="Unknown",this.m_=0,this.f_=null,this.g_=!0}p_(){this.m_===0&&(this.y_("Unknown"),this.f_=this.asyncQueue.enqueueAfterDelay("online_state_timeout",1e4,()=>(this.f_=null,this.w_("Backend didn't respond within 10 seconds."),this.y_("Offline"),Promise.resolve())))}S_(e){this.state==="Online"?this.y_("Unknown"):(this.m_++,this.m_>=1&&(this.b_(),this.w_(`Connection failed 1 times. Most recent error: ${e.toString()}`),this.y_("Offline")))}set(e){this.b_(),this.m_=0,e==="Online"&&(this.g_=!1),this.y_(e)}y_(e){e!==this.state&&(this.state=e,this.onlineStateHandler(e))}w_(e){const n=`Could not reach Cloud Firestore backend. ${e}
This typically indicates that your device does not have a healthy Internet connection at the moment. The client will operate in offline mode until it is able to successfully connect to the backend.`;this.g_?(cn(n),this.g_=!1):R("OnlineStateTracker",n)}b_(){this.f_!==null&&(this.f_.cancel(),this.f_=null)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class tL{constructor(e,n,r,i,s){this.localStore=e,this.datastore=n,this.asyncQueue=r,this.remoteSyncer={},this.D_=[],this.C_=new Map,this.v_=new Set,this.F_=[],this.M_=s,this.M_.io(o=>{r.enqueueAndForget(async()=>{wi(this)&&(R("RemoteStore","Restarting streams for network reachability change."),await async function(l){const u=H(l);u.v_.add(4),await $a(u),u.x_.set("Unknown"),u.v_.delete(4),await af(u)}(this))})}),this.x_=new eL(r,i)}}async function af(t){if(wi(t))for(const e of t.F_)await e(!0)}async function $a(t){for(const e of t.F_)await e(!1)}function JI(t,e){const n=H(t);n.C_.has(e.targetId)||(n.C_.set(e.targetId,e),kg(n)?Ag(n):Ns(n).Jo()&&Sg(n,e))}function ZI(t,e){const n=H(t),r=Ns(n);n.C_.delete(e),r.Jo()&&eS(n,e),n.C_.size===0&&(r.Jo()?r.Xo():wi(n)&&n.x_.set("Unknown"))}function Sg(t,e){if(t.O_.Oe(e.targetId),e.resumeToken.approximateByteSize()>0||e.snapshotVersion.compareTo(z.min())>0){const n=t.remoteSyncer.getRemoteKeysForTarget(e.targetId).size;e=e.withExpectedCount(n)}Ns(t).c_(e)}function eS(t,e){t.O_.Oe(e),Ns(t).l_(e)}function Ag(t){t.O_=new rD({getRemoteKeysForTarget:e=>t.remoteSyncer.getRemoteKeysForTarget(e),_t:e=>t.C_.get(e)||null,nt:()=>t.datastore.serializer.databaseId}),Ns(t).start(),t.x_.p_()}function kg(t){return wi(t)&&!Ns(t).Ho()&&t.C_.size>0}function wi(t){return H(t).v_.size===0}function tS(t){t.O_=void 0}async function nL(t){t.C_.forEach((e,n)=>{Sg(t,e)})}async function rL(t,e){tS(t),kg(t)?(t.x_.S_(e),Ag(t)):t.x_.set("Unknown")}async function iL(t,e,n){if(t.x_.set("Online"),e instanceof UI&&e.state===2&&e.cause)try{await async function(i,s){const o=s.cause;for(const a of s.targetIds)i.C_.has(a)&&(await i.remoteSyncer.rejectListen(a,o),i.C_.delete(a),i.O_.removeTarget(a))}(t,e)}catch(r){R("RemoteStore","Failed to remove targets %s: %s ",e.targetIds.join(","),r),await nc(t,r)}else if(e instanceof au?t.O_.$e(e):e instanceof $I?t.O_.Je(e):t.O_.Ge(e),!n.isEqual(z.min()))try{const r=await QI(t.localStore);n.compareTo(r)>=0&&await function(s,o){const a=s.O_.it(o);return a.targetChanges.forEach((l,u)=>{if(l.resumeToken.approximateByteSize()>0){const c=s.C_.get(u);c&&s.C_.set(u,c.withResumeToken(l.resumeToken,o))}}),a.targetMismatches.forEach((l,u)=>{const c=s.C_.get(l);if(!c)return;s.C_.set(l,c.withResumeToken(st.EMPTY_BYTE_STRING,c.snapshotVersion)),eS(s,l);const f=new Jn(c.target,l,u,c.sequenceNumber);Sg(s,f)}),s.remoteSyncer.applyRemoteEvent(a)}(t,n)}catch(r){R("RemoteStore","Failed to raise snapshot:",r),await nc(t,r)}}async function nc(t,e,n){if(!Ma(e))throw e;t.v_.add(1),await $a(t),t.x_.set("Offline"),n||(n=()=>QI(t.localStore)),t.asyncQueue.enqueueRetryable(async()=>{R("RemoteStore","Retrying IndexedDB access"),await n(),t.v_.delete(1),await af(t)})}function nS(t,e){return e().catch(n=>nc(t,n,e))}async function lf(t){const e=H(t),n=vr(e);let r=e.D_.length>0?e.D_[e.D_.length-1].batchId:-1;for(;sL(e);)try{const i=await BD(e.localStore,r);if(i===null){e.D_.length===0&&n.Xo();break}r=i.batchId,oL(e,i)}catch(i){await nc(e,i)}rS(e)&&iS(e)}function sL(t){return wi(t)&&t.D_.length<10}function oL(t,e){t.D_.push(e);const n=vr(t);n.Jo()&&n.P_&&n.I_(e.mutations)}function rS(t){return wi(t)&&!vr(t).Ho()&&t.D_.length>0}function iS(t){vr(t).start()}async function aL(t){vr(t).d_()}async function lL(t){const e=vr(t);for(const n of t.D_)e.I_(n.mutations)}async function uL(t,e,n){const r=t.D_.shift(),i=yg.from(r,e,n);await nS(t,()=>t.remoteSyncer.applySuccessfulWrite(i)),await lf(t)}async function cL(t,e){e&&vr(t).P_&&await async function(r,i){if(function(o){return eD(o)&&o!==T.ABORTED}(i.code)){const s=r.D_.shift();vr(r).Zo(),await nS(r,()=>r.remoteSyncer.rejectFailedWrite(s.batchId,i)),await lf(r)}}(t,e),rS(t)&&iS(t)}async function z_(t,e){const n=H(t);n.asyncQueue.verifyOperationInProgress(),R("RemoteStore","RemoteStore received new credentials");const r=wi(n);n.v_.add(3),await $a(n),r&&n.x_.set("Unknown"),await n.remoteSyncer.handleCredentialChange(e),n.v_.delete(3),await af(n)}async function fL(t,e){const n=H(t);e?(n.v_.delete(2),await af(n)):e||(n.v_.add(2),await $a(n),n.x_.set("Unknown"))}function Ns(t){return t.N_||(t.N_=function(n,r,i){const s=H(n);return s.R_(),new XD(r,s.connection,s.authCredentials,s.appCheckCredentials,s.serializer,i)}(t.datastore,t.asyncQueue,{Po:nL.bind(null,t),To:rL.bind(null,t),u_:iL.bind(null,t)}),t.F_.push(async e=>{e?(t.N_.Zo(),kg(t)?Ag(t):t.x_.set("Unknown")):(await t.N_.stop(),tS(t))})),t.N_}function vr(t){return t.B_||(t.B_=function(n,r,i){const s=H(n);return s.R_(),new JD(r,s.connection,s.authCredentials,s.appCheckCredentials,s.serializer,i)}(t.datastore,t.asyncQueue,{Po:aL.bind(null,t),To:cL.bind(null,t),E_:lL.bind(null,t),T_:uL.bind(null,t)}),t.F_.push(async e=>{e?(t.B_.Zo(),await lf(t)):(await t.B_.stop(),t.D_.length>0&&(R("RemoteStore",`Stopping write stream with ${t.D_.length} pending writes`),t.D_=[]))})),t.B_}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Pg{constructor(e,n,r,i,s){this.asyncQueue=e,this.timerId=n,this.targetTimeMs=r,this.op=i,this.removalCallback=s,this.deferred=new an,this.then=this.deferred.promise.then.bind(this.deferred.promise),this.deferred.promise.catch(o=>{})}get promise(){return this.deferred.promise}static createAndSchedule(e,n,r,i,s){const o=Date.now()+r,a=new Pg(e,n,o,i,s);return a.start(r),a}start(e){this.timerHandle=setTimeout(()=>this.handleDelayElapsed(),e)}skipDelay(){return this.handleDelayElapsed()}cancel(e){this.timerHandle!==null&&(this.clearTimeout(),this.deferred.reject(new x(T.CANCELLED,"Operation cancelled"+(e?": "+e:""))))}handleDelayElapsed(){this.asyncQueue.enqueueAndForget(()=>this.timerHandle!==null?(this.clearTimeout(),this.op().then(e=>this.deferred.resolve(e))):Promise.resolve())}clearTimeout(){this.timerHandle!==null&&(this.removalCallback(this),clearTimeout(this.timerHandle),this.timerHandle=null)}}function Cg(t,e){if(cn("AsyncQueue",`${e}: ${t}`),Ma(t))return new x(T.UNAVAILABLE,`${e}: ${t}`);throw t}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class es{constructor(e){this.comparator=e?(n,r)=>e(n,r)||V.comparator(n.key,r.key):(n,r)=>V.comparator(n.key,r.key),this.keyedMap=to(),this.sortedSet=new ve(this.comparator)}static emptySet(e){return new es(e.comparator)}has(e){return this.keyedMap.get(e)!=null}get(e){return this.keyedMap.get(e)}first(){return this.sortedSet.minKey()}last(){return this.sortedSet.maxKey()}isEmpty(){return this.sortedSet.isEmpty()}indexOf(e){const n=this.keyedMap.get(e);return n?this.sortedSet.indexOf(n):-1}get size(){return this.sortedSet.size}forEach(e){this.sortedSet.inorderTraversal((n,r)=>(e(n),!1))}add(e){const n=this.delete(e.key);return n.copy(n.keyedMap.insert(e.key,e),n.sortedSet.insert(e,null))}delete(e){const n=this.get(e);return n?this.copy(this.keyedMap.remove(e),this.sortedSet.remove(n)):this}isEqual(e){if(!(e instanceof es)||this.size!==e.size)return!1;const n=this.sortedSet.getIterator(),r=e.sortedSet.getIterator();for(;n.hasNext();){const i=n.getNext().key,s=r.getNext().key;if(!i.isEqual(s))return!1}return!0}toString(){const e=[];return this.forEach(n=>{e.push(n.toString())}),e.length===0?"DocumentSet ()":`DocumentSet (
  `+e.join(`  
`)+`
)`}copy(e,n){const r=new es;return r.comparator=this.comparator,r.keyedMap=e,r.sortedSet=n,r}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class B_{constructor(){this.L_=new ve(V.comparator)}track(e){const n=e.doc.key,r=this.L_.get(n);r?e.type!==0&&r.type===3?this.L_=this.L_.insert(n,e):e.type===3&&r.type!==1?this.L_=this.L_.insert(n,{type:r.type,doc:e.doc}):e.type===2&&r.type===2?this.L_=this.L_.insert(n,{type:2,doc:e.doc}):e.type===2&&r.type===0?this.L_=this.L_.insert(n,{type:0,doc:e.doc}):e.type===1&&r.type===0?this.L_=this.L_.remove(n):e.type===1&&r.type===2?this.L_=this.L_.insert(n,{type:1,doc:r.doc}):e.type===0&&r.type===1?this.L_=this.L_.insert(n,{type:2,doc:e.doc}):U():this.L_=this.L_.insert(n,e)}k_(){const e=[];return this.L_.inorderTraversal((n,r)=>{e.push(r)}),e}}class gs{constructor(e,n,r,i,s,o,a,l,u){this.query=e,this.docs=n,this.oldDocs=r,this.docChanges=i,this.mutatedKeys=s,this.fromCache=o,this.syncStateChanged=a,this.excludesMetadataChanges=l,this.hasCachedResults=u}static fromInitialDocuments(e,n,r,i,s){const o=[];return n.forEach(a=>{o.push({type:0,doc:a})}),new gs(e,n,es.emptySet(n),o,r,i,!0,!1,s)}get hasPendingWrites(){return!this.mutatedKeys.isEmpty()}isEqual(e){if(!(this.fromCache===e.fromCache&&this.hasCachedResults===e.hasCachedResults&&this.syncStateChanged===e.syncStateChanged&&this.mutatedKeys.isEqual(e.mutatedKeys)&&ef(this.query,e.query)&&this.docs.isEqual(e.docs)&&this.oldDocs.isEqual(e.oldDocs)))return!1;const n=this.docChanges,r=e.docChanges;if(n.length!==r.length)return!1;for(let i=0;i<n.length;i++)if(n[i].type!==r[i].type||!n[i].doc.isEqual(r[i].doc))return!1;return!0}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class hL{constructor(){this.q_=void 0,this.Q_=[]}}class dL{constructor(){this.queries=new xs(e=>SI(e),ef),this.onlineState="Unknown",this.K_=new Set}}async function Rg(t,e){const n=H(t),r=e.query;let i=!1,s=n.queries.get(r);if(s||(i=!0,s=new hL),i)try{s.q_=await n.onListen(r)}catch(o){const a=Cg(o,`Initialization of query '${Si(e.query)}' failed`);return void e.onError(a)}n.queries.set(r,s),s.Q_.push(e),e.U_(n.onlineState),s.q_&&e.W_(s.q_)&&xg(n)}async function bg(t,e){const n=H(t),r=e.query;let i=!1;const s=n.queries.get(r);if(s){const o=s.Q_.indexOf(e);o>=0&&(s.Q_.splice(o,1),i=s.Q_.length===0)}if(i)return n.queries.delete(r),n.onUnlisten(r)}function pL(t,e){const n=H(t);let r=!1;for(const i of e){const s=i.query,o=n.queries.get(s);if(o){for(const a of o.Q_)a.W_(i)&&(r=!0);o.q_=i}}r&&xg(n)}function mL(t,e,n){const r=H(t),i=r.queries.get(e);if(i)for(const s of i.Q_)s.onError(n);r.queries.delete(e)}function xg(t){t.K_.forEach(e=>{e.next()})}class Ng{constructor(e,n,r){this.query=e,this.G_=n,this.z_=!1,this.j_=null,this.onlineState="Unknown",this.options=r||{}}W_(e){if(!this.options.includeMetadataChanges){const r=[];for(const i of e.docChanges)i.type!==3&&r.push(i);e=new gs(e.query,e.docs,e.oldDocs,r,e.mutatedKeys,e.fromCache,e.syncStateChanged,!0,e.hasCachedResults)}let n=!1;return this.z_?this.H_(e)&&(this.G_.next(e),n=!0):this.J_(e,this.onlineState)&&(this.Y_(e),n=!0),this.j_=e,n}onError(e){this.G_.error(e)}U_(e){this.onlineState=e;let n=!1;return this.j_&&!this.z_&&this.J_(this.j_,e)&&(this.Y_(this.j_),n=!0),n}J_(e,n){if(!e.fromCache)return!0;const r=n!=="Offline";return(!this.options.Z_||!r)&&(!e.docs.isEmpty()||e.hasCachedResults||n==="Offline")}H_(e){if(e.docChanges.length>0)return!0;const n=this.j_&&this.j_.hasPendingWrites!==e.hasPendingWrites;return!(!e.syncStateChanged&&!n)&&this.options.includeMetadataChanges===!0}Y_(e){e=gs.fromInitialDocuments(e.query,e.docs,e.mutatedKeys,e.fromCache,e.hasCachedResults),this.z_=!0,this.G_.next(e)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class sS{constructor(e){this.key=e}}class oS{constructor(e){this.key=e}}class gL{constructor(e,n){this.query=e,this.oa=n,this._a=null,this.hasCachedResults=!1,this.current=!1,this.aa=G(),this.mutatedKeys=G(),this.ua=AI(e),this.ca=new es(this.ua)}get la(){return this.oa}ha(e,n){const r=n?n.Pa:new B_,i=n?n.ca:this.ca;let s=n?n.mutatedKeys:this.mutatedKeys,o=i,a=!1;const l=this.query.limitType==="F"&&i.size===this.query.limit?i.last():null,u=this.query.limitType==="L"&&i.size===this.query.limit?i.first():null;if(e.inorderTraversal((c,f)=>{const h=i.get(c),p=tf(this.query,f)?f:null,y=!!h&&this.mutatedKeys.has(h.key),_=!!p&&(p.hasLocalMutations||this.mutatedKeys.has(p.key)&&p.hasCommittedMutations);let w=!1;h&&p?h.data.isEqual(p.data)?y!==_&&(r.track({type:3,doc:p}),w=!0):this.Ia(h,p)||(r.track({type:2,doc:p}),w=!0,(l&&this.ua(p,l)>0||u&&this.ua(p,u)<0)&&(a=!0)):!h&&p?(r.track({type:0,doc:p}),w=!0):h&&!p&&(r.track({type:1,doc:h}),w=!0,(l||u)&&(a=!0)),w&&(p?(o=o.add(p),s=_?s.add(c):s.delete(c)):(o=o.delete(c),s=s.delete(c)))}),this.query.limit!==null)for(;o.size>this.query.limit;){const c=this.query.limitType==="F"?o.last():o.first();o=o.delete(c.key),s=s.delete(c.key),r.track({type:1,doc:c})}return{ca:o,Pa:r,Xi:a,mutatedKeys:s}}Ia(e,n){return e.hasLocalMutations&&n.hasCommittedMutations&&!n.hasLocalMutations}applyChanges(e,n,r,i){const s=this.ca;this.ca=e.ca,this.mutatedKeys=e.mutatedKeys;const o=e.Pa.k_();o.sort((c,f)=>function(p,y){const _=w=>{switch(w){case 0:return 1;case 2:case 3:return 2;case 1:return 0;default:return U()}};return _(p)-_(y)}(c.type,f.type)||this.ua(c.doc,f.doc)),this.Ta(r),i=i!=null&&i;const a=n&&!i?this.Ea():[],l=this.aa.size===0&&this.current&&!i?1:0,u=l!==this._a;return this._a=l,o.length!==0||u?{snapshot:new gs(this.query,e.ca,s,o,e.mutatedKeys,l===0,u,!1,!!r&&r.resumeToken.approximateByteSize()>0),da:a}:{da:a}}U_(e){return this.current&&e==="Offline"?(this.current=!1,this.applyChanges({ca:this.ca,Pa:new B_,mutatedKeys:this.mutatedKeys,Xi:!1},!1)):{da:[]}}Aa(e){return!this.oa.has(e)&&!!this.ca.has(e)&&!this.ca.get(e).hasLocalMutations}Ta(e){e&&(e.addedDocuments.forEach(n=>this.oa=this.oa.add(n)),e.modifiedDocuments.forEach(n=>{}),e.removedDocuments.forEach(n=>this.oa=this.oa.delete(n)),this.current=e.current)}Ea(){if(!this.current)return[];const e=this.aa;this.aa=G(),this.ca.forEach(r=>{this.Aa(r.key)&&(this.aa=this.aa.add(r.key))});const n=[];return e.forEach(r=>{this.aa.has(r)||n.push(new oS(r))}),this.aa.forEach(r=>{e.has(r)||n.push(new sS(r))}),n}Ra(e){this.oa=e.hs,this.aa=G();const n=this.ha(e.documents);return this.applyChanges(n,!0)}Va(){return gs.fromInitialDocuments(this.query,this.ca,this.mutatedKeys,this._a===0,this.hasCachedResults)}}class vL{constructor(e,n,r){this.query=e,this.targetId=n,this.view=r}}class yL{constructor(e){this.key=e,this.ma=!1}}class _L{constructor(e,n,r,i,s,o){this.localStore=e,this.remoteStore=n,this.eventManager=r,this.sharedClientState=i,this.currentUser=s,this.maxConcurrentLimboResolutions=o,this.fa={},this.ga=new xs(a=>SI(a),ef),this.pa=new Map,this.ya=new Set,this.wa=new ve(V.comparator),this.Sa=new Map,this.ba=new Eg,this.Da={},this.Ca=new Map,this.va=ms.Bn(),this.onlineState="Unknown",this.Fa=void 0}get isPrimaryClient(){return this.Fa===!0}}async function wL(t,e){const n=bL(t);let r,i;const s=n.ga.get(e);if(s)r=s.targetId,n.sharedClientState.addLocalQueryTarget(r),i=s.view.Va();else{const o=await HD(n.localStore,ln(e)),a=n.sharedClientState.addLocalQueryTarget(o.targetId);r=o.targetId,i=await EL(n,e,r,a==="current",o.resumeToken),n.isPrimaryClient&&JI(n.remoteStore,o)}return i}async function EL(t,e,n,r,i){t.Ma=(f,h,p)=>async function(_,w,m,d){let g=w.view.ha(m);g.Xi&&(g=await $_(_.localStore,w.query,!1).then(({documents:C})=>w.view.ha(C,g)));const E=d&&d.targetChanges.get(w.targetId),I=d&&d.targetMismatches.get(w.targetId)!=null,k=w.view.applyChanges(g,_.isPrimaryClient,E,I);return W_(_,w.targetId,k.da),k.snapshot}(t,f,h,p);const s=await $_(t.localStore,e,!0),o=new gL(e,s.hs),a=o.ha(s.documents),l=Fa.createSynthesizedTargetChangeForCurrentChange(n,r&&t.onlineState!=="Offline",i),u=o.applyChanges(a,t.isPrimaryClient,l);W_(t,n,u.da);const c=new vL(e,n,o);return t.ga.set(e,c),t.pa.has(n)?t.pa.get(n).push(e):t.pa.set(n,[e]),u.snapshot}async function TL(t,e){const n=H(t),r=n.ga.get(e),i=n.pa.get(r.targetId);if(i.length>1)return n.pa.set(r.targetId,i.filter(s=>!ef(s,e))),void n.ga.delete(e);n.isPrimaryClient?(n.sharedClientState.removeLocalQueryTarget(r.targetId),n.sharedClientState.isActiveQueryTarget(r.targetId)||await lp(n.localStore,r.targetId,!1).then(()=>{n.sharedClientState.clearQueryState(r.targetId),ZI(n.remoteStore,r.targetId),up(n,r.targetId)}).catch(La)):(up(n,r.targetId),await lp(n.localStore,r.targetId,!0))}async function IL(t,e,n){const r=xL(t);try{const i=await function(o,a){const l=H(o),u=Ne.now(),c=a.reduce((p,y)=>p.add(y.key),G());let f,h;return l.persistence.runTransaction("Locally write mutations","readwrite",p=>{let y=Pn(),_=G();return l.os.getEntries(p,c).next(w=>{y=w,y.forEach((m,d)=>{d.isValidDocument()||(_=_.add(m))})}).next(()=>l.localDocuments.getOverlayedDocuments(p,y)).next(w=>{f=w;const m=[];for(const d of a){const g=QO(d,f.get(d.key).overlayedDocument);g!=null&&m.push(new Nr(d.key,g,gI(g.value.mapValue),zt.exists(!0)))}return l.mutationQueue.addMutationBatch(p,u,m,a)}).next(w=>{h=w;const m=w.applyToLocalDocumentSet(f,_);return l.documentOverlayCache.saveOverlays(p,w.batchId,m)})}).then(()=>({batchId:h.batchId,changes:PI(f)}))}(r.localStore,e);r.sharedClientState.addPendingMutation(i.batchId),function(o,a,l){let u=o.Da[o.currentUser.toKey()];u||(u=new ve(Z)),u=u.insert(a,l),o.Da[o.currentUser.toKey()]=u}(r,i.batchId,n),await Ua(r,i.changes),await lf(r.remoteStore)}catch(i){const s=Cg(i,"Failed to persist write");n.reject(s)}}async function aS(t,e){const n=H(t);try{const r=await jD(n.localStore,e);e.targetChanges.forEach((i,s)=>{const o=n.Sa.get(s);o&&(re(i.addedDocuments.size+i.modifiedDocuments.size+i.removedDocuments.size<=1),i.addedDocuments.size>0?o.ma=!0:i.modifiedDocuments.size>0?re(o.ma):i.removedDocuments.size>0&&(re(o.ma),o.ma=!1))}),await Ua(n,r,e)}catch(r){await La(r)}}function H_(t,e,n){const r=H(t);if(r.isPrimaryClient&&n===0||!r.isPrimaryClient&&n===1){const i=[];r.ga.forEach((s,o)=>{const a=o.view.U_(e);a.snapshot&&i.push(a.snapshot)}),function(o,a){const l=H(o);l.onlineState=a;let u=!1;l.queries.forEach((c,f)=>{for(const h of f.Q_)h.U_(a)&&(u=!0)}),u&&xg(l)}(r.eventManager,e),i.length&&r.fa.u_(i),r.onlineState=e,r.isPrimaryClient&&r.sharedClientState.setOnlineState(e)}}async function SL(t,e,n){const r=H(t);r.sharedClientState.updateQueryState(e,"rejected",n);const i=r.Sa.get(e),s=i&&i.key;if(s){let o=new ve(V.comparator);o=o.insert(s,et.newNoDocument(s,z.min()));const a=G().add(s),l=new sf(z.min(),new Map,new ve(Z),o,a);await aS(r,l),r.wa=r.wa.remove(s),r.Sa.delete(e),Og(r)}else await lp(r.localStore,e,!1).then(()=>up(r,e,n)).catch(La)}async function AL(t,e){const n=H(t),r=e.batch.batchId;try{const i=await UD(n.localStore,e);uS(n,r,null),lS(n,r),n.sharedClientState.updateMutationState(r,"acknowledged"),await Ua(n,i)}catch(i){await La(i)}}async function kL(t,e,n){const r=H(t);try{const i=await function(o,a){const l=H(o);return l.persistence.runTransaction("Reject batch","readwrite-primary",u=>{let c;return l.mutationQueue.lookupMutationBatch(u,a).next(f=>(re(f!==null),c=f.keys(),l.mutationQueue.removeMutationBatch(u,f))).next(()=>l.mutationQueue.performConsistencyCheck(u)).next(()=>l.documentOverlayCache.removeOverlaysForBatchId(u,c,a)).next(()=>l.localDocuments.recalculateAndSaveOverlaysForDocumentKeys(u,c)).next(()=>l.localDocuments.getDocuments(u,c))})}(r.localStore,e);uS(r,e,n),lS(r,e),r.sharedClientState.updateMutationState(e,"rejected",n),await Ua(r,i)}catch(i){await La(i)}}function lS(t,e){(t.Ca.get(e)||[]).forEach(n=>{n.resolve()}),t.Ca.delete(e)}function uS(t,e,n){const r=H(t);let i=r.Da[r.currentUser.toKey()];if(i){const s=i.get(e);s&&(n?s.reject(n):s.resolve(),i=i.remove(e)),r.Da[r.currentUser.toKey()]=i}}function up(t,e,n=null){t.sharedClientState.removeLocalQueryTarget(e);for(const r of t.pa.get(e))t.ga.delete(r),n&&t.fa.xa(r,n);t.pa.delete(e),t.isPrimaryClient&&t.ba.Vr(e).forEach(r=>{t.ba.containsKey(r)||cS(t,r)})}function cS(t,e){t.ya.delete(e.path.canonicalString());const n=t.wa.get(e);n!==null&&(ZI(t.remoteStore,n),t.wa=t.wa.remove(e),t.Sa.delete(n),Og(t))}function W_(t,e,n){for(const r of n)r instanceof sS?(t.ba.addReference(r.key,e),PL(t,r)):r instanceof oS?(R("SyncEngine","Document no longer in limbo: "+r.key),t.ba.removeReference(r.key,e),t.ba.containsKey(r.key)||cS(t,r.key)):U()}function PL(t,e){const n=e.key,r=n.path.canonicalString();t.wa.get(n)||t.ya.has(r)||(R("SyncEngine","New document in limbo: "+n),t.ya.add(r),Og(t))}function Og(t){for(;t.ya.size>0&&t.wa.size<t.maxConcurrentLimboResolutions;){const e=t.ya.values().next().value;t.ya.delete(e);const n=new V(ae.fromString(e)),r=t.va.next();t.Sa.set(r,new yL(n)),t.wa=t.wa.insert(n,r),JI(t.remoteStore,new Jn(ln(Zc(n.path)),r,"TargetPurposeLimboResolution",hg._e))}}async function Ua(t,e,n){const r=H(t),i=[],s=[],o=[];r.ga.isEmpty()||(r.ga.forEach((a,l)=>{o.push(r.Ma(l,e,n).then(u=>{if((u||n)&&r.isPrimaryClient&&r.sharedClientState.updateQueryState(l.targetId,u!=null&&u.fromCache?"not-current":"current"),u){i.push(u);const c=Ig.Ki(l.targetId,u);s.push(c)}}))}),await Promise.all(o),r.fa.u_(i),await async function(l,u){const c=H(l);try{await c.persistence.runTransaction("notifyLocalViewChanges","readwrite",f=>S.forEach(u,h=>S.forEach(h.qi,p=>c.persistence.referenceDelegate.addReference(f,h.targetId,p)).next(()=>S.forEach(h.Qi,p=>c.persistence.referenceDelegate.removeReference(f,h.targetId,p)))))}catch(f){if(!Ma(f))throw f;R("LocalStore","Failed to update sequence numbers: "+f)}for(const f of u){const h=f.targetId;if(!f.fromCache){const p=c.ns.get(h),y=p.snapshotVersion,_=p.withLastLimboFreeSnapshotVersion(y);c.ns=c.ns.insert(h,_)}}}(r.localStore,s))}async function CL(t,e){const n=H(t);if(!n.currentUser.isEqual(e)){R("SyncEngine","User change. New user:",e.toKey());const r=await GI(n.localStore,e);n.currentUser=e,function(s,o){s.Ca.forEach(a=>{a.forEach(l=>{l.reject(new x(T.CANCELLED,o))})}),s.Ca.clear()}(n,"'waitForPendingWrites' promise is rejected due to a user change."),n.sharedClientState.handleUserChange(e,r.removedBatchIds,r.addedBatchIds),await Ua(n,r.us)}}function RL(t,e){const n=H(t),r=n.Sa.get(e);if(r&&r.ma)return G().add(r.key);{let i=G();const s=n.pa.get(e);if(!s)return i;for(const o of s){const a=n.ga.get(o);i=i.unionWith(a.view.la)}return i}}function bL(t){const e=H(t);return e.remoteStore.remoteSyncer.applyRemoteEvent=aS.bind(null,e),e.remoteStore.remoteSyncer.getRemoteKeysForTarget=RL.bind(null,e),e.remoteStore.remoteSyncer.rejectListen=SL.bind(null,e),e.fa.u_=pL.bind(null,e.eventManager),e.fa.xa=mL.bind(null,e.eventManager),e}function xL(t){const e=H(t);return e.remoteStore.remoteSyncer.applySuccessfulWrite=AL.bind(null,e),e.remoteStore.remoteSyncer.rejectFailedWrite=kL.bind(null,e),e}class q_{constructor(){this.synchronizeTabs=!1}async initialize(e){this.serializer=of(e.databaseInfo.databaseId),this.sharedClientState=this.createSharedClientState(e),this.persistence=this.createPersistence(e),await this.persistence.start(),this.localStore=this.createLocalStore(e),this.gcScheduler=this.createGarbageCollectionScheduler(e,this.localStore),this.indexBackfillerScheduler=this.createIndexBackfillerScheduler(e,this.localStore)}createGarbageCollectionScheduler(e,n){return null}createIndexBackfillerScheduler(e,n){return null}createLocalStore(e){return $D(this.persistence,new VD,e.initialUser,this.serializer)}createPersistence(e){return new DD(Tg.Hr,this.serializer)}createSharedClientState(e){return new qD}async terminate(){var e,n;(e=this.gcScheduler)===null||e===void 0||e.stop(),(n=this.indexBackfillerScheduler)===null||n===void 0||n.stop(),this.sharedClientState.shutdown(),await this.persistence.shutdown()}}class NL{async initialize(e,n){this.localStore||(this.localStore=e.localStore,this.sharedClientState=e.sharedClientState,this.datastore=this.createDatastore(n),this.remoteStore=this.createRemoteStore(n),this.eventManager=this.createEventManager(n),this.syncEngine=this.createSyncEngine(n,!e.synchronizeTabs),this.sharedClientState.onlineStateHandler=r=>H_(this.syncEngine,r,1),this.remoteStore.remoteSyncer.handleCredentialChange=CL.bind(null,this.syncEngine),await fL(this.remoteStore,this.syncEngine.isPrimaryClient))}createEventManager(e){return function(){return new dL}()}createDatastore(e){const n=of(e.databaseInfo.databaseId),r=function(s){return new YD(s)}(e.databaseInfo);return function(s,o,a,l){return new ZD(s,o,a,l)}(e.authCredentials,e.appCheckCredentials,r,n)}createRemoteStore(e){return function(r,i,s,o,a){return new tL(r,i,s,o,a)}(this.localStore,this.datastore,e.asyncQueue,n=>H_(this.syncEngine,n,0),function(){return j_.D()?new j_:new KD}())}createSyncEngine(e,n){return function(i,s,o,a,l,u,c){const f=new _L(i,s,o,a,l,u);return c&&(f.Fa=!0),f}(this.localStore,this.remoteStore,this.eventManager,this.sharedClientState,e.initialUser,e.maxConcurrentLimboResolutions,n)}async terminate(){var e;await async function(r){const i=H(r);R("RemoteStore","RemoteStore shutting down."),i.v_.add(5),await $a(i),i.M_.shutdown(),i.x_.set("Unknown")}(this.remoteStore),(e=this.datastore)===null||e===void 0||e.terminate()}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 *//**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Dg{constructor(e){this.observer=e,this.muted=!1}next(e){this.observer.next&&this.Ba(this.observer.next,e)}error(e){this.observer.error?this.Ba(this.observer.error,e):cn("Uncaught Error in snapshot listener:",e.toString())}La(){this.muted=!0}Ba(e,n){this.muted||setTimeout(()=>{this.muted||e(n)},0)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class OL{constructor(e,n,r,i){this.authCredentials=e,this.appCheckCredentials=n,this.asyncQueue=r,this.databaseInfo=i,this.user=Je.UNAUTHENTICATED,this.clientId=dI.newId(),this.authCredentialListener=()=>Promise.resolve(),this.appCheckCredentialListener=()=>Promise.resolve(),this.authCredentials.start(r,async s=>{R("FirestoreClient","Received user=",s.uid),await this.authCredentialListener(s),this.user=s}),this.appCheckCredentials.start(r,s=>(R("FirestoreClient","Received new app check token=",s),this.appCheckCredentialListener(s,this.user)))}get configuration(){return{asyncQueue:this.asyncQueue,databaseInfo:this.databaseInfo,clientId:this.clientId,authCredentials:this.authCredentials,appCheckCredentials:this.appCheckCredentials,initialUser:this.user,maxConcurrentLimboResolutions:100}}setCredentialChangeListener(e){this.authCredentialListener=e}setAppCheckTokenChangeListener(e){this.appCheckCredentialListener=e}verifyNotTerminated(){if(this.asyncQueue.isShuttingDown)throw new x(T.FAILED_PRECONDITION,"The client has already been terminated.")}terminate(){this.asyncQueue.enterRestrictedMode();const e=new an;return this.asyncQueue.enqueueAndForgetEvenWhileRestricted(async()=>{try{this._onlineComponents&&await this._onlineComponents.terminate(),this._offlineComponents&&await this._offlineComponents.terminate(),this.authCredentials.shutdown(),this.appCheckCredentials.shutdown(),e.resolve()}catch(n){const r=Cg(n,"Failed to shutdown persistence");e.reject(r)}}),e.promise}}async function Ah(t,e){t.asyncQueue.verifyOperationInProgress(),R("FirestoreClient","Initializing OfflineComponentProvider");const n=t.configuration;await e.initialize(n);let r=n.initialUser;t.setCredentialChangeListener(async i=>{r.isEqual(i)||(await GI(e.localStore,i),r=i)}),e.persistence.setDatabaseDeletedListener(()=>t.terminate()),t._offlineComponents=e}async function K_(t,e){t.asyncQueue.verifyOperationInProgress();const n=await LL(t);R("FirestoreClient","Initializing OnlineComponentProvider"),await e.initialize(n,t.configuration),t.setCredentialChangeListener(r=>z_(e.remoteStore,r)),t.setAppCheckTokenChangeListener((r,i)=>z_(e.remoteStore,i)),t._onlineComponents=e}function DL(t){return t.name==="FirebaseError"?t.code===T.FAILED_PRECONDITION||t.code===T.UNIMPLEMENTED:!(typeof DOMException<"u"&&t instanceof DOMException)||t.code===22||t.code===20||t.code===11}async function LL(t){if(!t._offlineComponents)if(t._uninitializedComponentsProvider){R("FirestoreClient","Using user provided OfflineComponentProvider");try{await Ah(t,t._uninitializedComponentsProvider._offline)}catch(e){const n=e;if(!DL(n))throw n;fs("Error using user provided cache. Falling back to memory cache: "+n),await Ah(t,new q_)}}else R("FirestoreClient","Using default OfflineComponentProvider"),await Ah(t,new q_);return t._offlineComponents}async function fS(t){return t._onlineComponents||(t._uninitializedComponentsProvider?(R("FirestoreClient","Using user provided OnlineComponentProvider"),await K_(t,t._uninitializedComponentsProvider._online)):(R("FirestoreClient","Using default OnlineComponentProvider"),await K_(t,new NL))),t._onlineComponents}function ML(t){return fS(t).then(e=>e.syncEngine)}async function rc(t){const e=await fS(t),n=e.eventManager;return n.onListen=wL.bind(null,e.syncEngine),n.onUnlisten=TL.bind(null,e.syncEngine),n}function VL(t,e,n={}){const r=new an;return t.asyncQueue.enqueueAndForget(async()=>function(s,o,a,l,u){const c=new Dg({next:h=>{o.enqueueAndForget(()=>bg(s,f));const p=h.docs.has(a);!p&&h.fromCache?u.reject(new x(T.UNAVAILABLE,"Failed to get document because the client is offline.")):p&&h.fromCache&&l&&l.source==="server"?u.reject(new x(T.UNAVAILABLE,'Failed to get document from server. (However, this document does exist in the local cache. Run again without setting source to "server" to retrieve the cached document.)')):u.resolve(h)},error:h=>u.reject(h)}),f=new Ng(Zc(a.path),c,{includeMetadataChanges:!0,Z_:!0});return Rg(s,f)}(await rc(t),t.asyncQueue,e,n,r)),r.promise}function FL(t,e,n={}){const r=new an;return t.asyncQueue.enqueueAndForget(async()=>function(s,o,a,l,u){const c=new Dg({next:h=>{o.enqueueAndForget(()=>bg(s,f)),h.fromCache&&l.source==="server"?u.reject(new x(T.UNAVAILABLE,'Failed to get documents from server. (However, these documents may exist in the local cache. Run again without setting source to "server" to retrieve the cached documents.)')):u.resolve(h)},error:h=>u.reject(h)}),f=new Ng(a,c,{includeMetadataChanges:!0,Z_:!0});return Rg(s,f)}(await rc(t),t.asyncQueue,e,n,r)),r.promise}/**
 * @license
 * Copyright 2023 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function hS(t){const e={};return t.timeoutSeconds!==void 0&&(e.timeoutSeconds=t.timeoutSeconds),e}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const G_=new Map;/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function dS(t,e,n){if(!n)throw new x(T.INVALID_ARGUMENT,`Function ${t}() cannot be called with an empty ${e}.`)}function $L(t,e,n,r){if(e===!0&&r===!0)throw new x(T.INVALID_ARGUMENT,`${t} and ${n} cannot be used together.`)}function Q_(t){if(!V.isDocumentKey(t))throw new x(T.INVALID_ARGUMENT,`Invalid document reference. Document references must have an even number of segments, but ${t} has ${t.length}.`)}function Y_(t){if(V.isDocumentKey(t))throw new x(T.INVALID_ARGUMENT,`Invalid collection reference. Collection references must have an odd number of segments, but ${t} has ${t.length}.`)}function uf(t){if(t===void 0)return"undefined";if(t===null)return"null";if(typeof t=="string")return t.length>20&&(t=`${t.substring(0,20)}...`),JSON.stringify(t);if(typeof t=="number"||typeof t=="boolean")return""+t;if(typeof t=="object"){if(t instanceof Array)return"an array";{const e=function(r){return r.constructor?r.constructor.name:null}(t);return e?`a custom ${e} object`:"an object"}}return typeof t=="function"?"a function":U()}function Tt(t,e){if("_delegate"in t&&(t=t._delegate),!(t instanceof e)){if(e.name===t.constructor.name)throw new x(T.INVALID_ARGUMENT,"Type does not match the expected instance. Did you pass a reference from a different Firestore SDK?");{const n=uf(t);throw new x(T.INVALID_ARGUMENT,`Expected type '${e.name}', but it was: ${n}`)}}return t}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class X_{constructor(e){var n,r;if(e.host===void 0){if(e.ssl!==void 0)throw new x(T.INVALID_ARGUMENT,"Can't provide ssl option if host option is not set");this.host="firestore.googleapis.com",this.ssl=!0}else this.host=e.host,this.ssl=(n=e.ssl)===null||n===void 0||n;if(this.credentials=e.credentials,this.ignoreUndefinedProperties=!!e.ignoreUndefinedProperties,this.localCache=e.localCache,e.cacheSizeBytes===void 0)this.cacheSizeBytes=41943040;else{if(e.cacheSizeBytes!==-1&&e.cacheSizeBytes<1048576)throw new x(T.INVALID_ARGUMENT,"cacheSizeBytes must be at least 1048576");this.cacheSizeBytes=e.cacheSizeBytes}$L("experimentalForceLongPolling",e.experimentalForceLongPolling,"experimentalAutoDetectLongPolling",e.experimentalAutoDetectLongPolling),this.experimentalForceLongPolling=!!e.experimentalForceLongPolling,this.experimentalForceLongPolling?this.experimentalAutoDetectLongPolling=!1:e.experimentalAutoDetectLongPolling===void 0?this.experimentalAutoDetectLongPolling=!0:this.experimentalAutoDetectLongPolling=!!e.experimentalAutoDetectLongPolling,this.experimentalLongPollingOptions=hS((r=e.experimentalLongPollingOptions)!==null&&r!==void 0?r:{}),function(s){if(s.timeoutSeconds!==void 0){if(isNaN(s.timeoutSeconds))throw new x(T.INVALID_ARGUMENT,`invalid long polling timeout: ${s.timeoutSeconds} (must not be NaN)`);if(s.timeoutSeconds<5)throw new x(T.INVALID_ARGUMENT,`invalid long polling timeout: ${s.timeoutSeconds} (minimum allowed value is 5)`);if(s.timeoutSeconds>30)throw new x(T.INVALID_ARGUMENT,`invalid long polling timeout: ${s.timeoutSeconds} (maximum allowed value is 30)`)}}(this.experimentalLongPollingOptions),this.useFetchStreams=!!e.useFetchStreams}isEqual(e){return this.host===e.host&&this.ssl===e.ssl&&this.credentials===e.credentials&&this.cacheSizeBytes===e.cacheSizeBytes&&this.experimentalForceLongPolling===e.experimentalForceLongPolling&&this.experimentalAutoDetectLongPolling===e.experimentalAutoDetectLongPolling&&function(r,i){return r.timeoutSeconds===i.timeoutSeconds}(this.experimentalLongPollingOptions,e.experimentalLongPollingOptions)&&this.ignoreUndefinedProperties===e.ignoreUndefinedProperties&&this.useFetchStreams===e.useFetchStreams}}class cf{constructor(e,n,r,i){this._authCredentials=e,this._appCheckCredentials=n,this._databaseId=r,this._app=i,this.type="firestore-lite",this._persistenceKey="(lite)",this._settings=new X_({}),this._settingsFrozen=!1}get app(){if(!this._app)throw new x(T.FAILED_PRECONDITION,"Firestore was not initialized using the Firebase SDK. 'app' is not available");return this._app}get _initialized(){return this._settingsFrozen}get _terminated(){return this._terminateTask!==void 0}_setSettings(e){if(this._settingsFrozen)throw new x(T.FAILED_PRECONDITION,"Firestore has already been started and its settings can no longer be changed. You can only modify settings before calling any other methods on a Firestore object.");this._settings=new X_(e),e.credentials!==void 0&&(this._authCredentials=function(r){if(!r)return new rO;switch(r.type){case"firstParty":return new aO(r.sessionIndex||"0",r.iamToken||null,r.authTokenFactory||null);case"provider":return r.client;default:throw new x(T.INVALID_ARGUMENT,"makeAuthCredentialsProvider failed due to invalid credential type")}}(e.credentials))}_getSettings(){return this._settings}_freezeSettings(){return this._settingsFrozen=!0,this._settings}_delete(){return this._terminateTask||(this._terminateTask=this._terminate()),this._terminateTask}toJSON(){return{app:this._app,databaseId:this._databaseId,settings:this._settings}}_terminate(){return function(n){const r=G_.get(n);r&&(R("ComponentProvider","Removing Datastore"),G_.delete(n),r.terminate())}(this),Promise.resolve()}}function UL(t,e,n,r={}){var i;const s=(t=Tt(t,cf))._getSettings(),o=`${e}:${n}`;if(s.host!=="firestore.googleapis.com"&&s.host!==o&&fs("Host has been set in both settings() and connectFirestoreEmulator(), emulator host will be used."),t._setSettings(Object.assign(Object.assign({},s),{host:o,ssl:!1})),r.mockUserToken){let a,l;if(typeof r.mockUserToken=="string")a=r.mockUserToken,l=Je.MOCK_USER;else{a=cR(r.mockUserToken,(i=t._app)===null||i===void 0?void 0:i.options.projectId);const u=r.mockUserToken.sub||r.mockUserToken.user_id;if(!u)throw new x(T.INVALID_ARGUMENT,"mockUserToken must contain 'sub' or 'user_id' field!");l=new Je(u)}t._authCredentials=new iO(new hI(a,l))}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Or{constructor(e,n,r){this.converter=n,this._query=r,this.type="query",this.firestore=e}withConverter(e){return new Or(this.firestore,e,this._query)}}class rt{constructor(e,n,r){this.converter=n,this._key=r,this.type="document",this.firestore=e}get _path(){return this._key.path}get id(){return this._key.path.lastSegment()}get path(){return this._key.path.canonicalString()}get parent(){return new hr(this.firestore,this.converter,this._key.path.popLast())}withConverter(e){return new rt(this.firestore,e,this._key)}}class hr extends Or{constructor(e,n,r){super(e,n,Zc(r)),this._path=r,this.type="collection"}get id(){return this._query.path.lastSegment()}get path(){return this._query.path.canonicalString()}get parent(){const e=this._path.popLast();return e.isEmpty()?null:new rt(this.firestore,null,new V(e))}withConverter(e){return new hr(this.firestore,e,this._path)}}function ff(t,e,...n){if(t=Oe(t),dS("collection","path",e),t instanceof cf){const r=ae.fromString(e,...n);return Y_(r),new hr(t,null,r)}{if(!(t instanceof rt||t instanceof hr))throw new x(T.INVALID_ARGUMENT,"Expected first argument to collection() to be a CollectionReference, a DocumentReference or FirebaseFirestore");const r=t._path.child(ae.fromString(e,...n));return Y_(r),new hr(t.firestore,null,r)}}function yr(t,e,...n){if(t=Oe(t),arguments.length===1&&(e=dI.newId()),dS("doc","path",e),t instanceof cf){const r=ae.fromString(e,...n);return Q_(r),new rt(t,null,new V(r))}{if(!(t instanceof rt||t instanceof hr))throw new x(T.INVALID_ARGUMENT,"Expected first argument to collection() to be a CollectionReference, a DocumentReference or FirebaseFirestore");const r=t._path.child(ae.fromString(e,...n));return Q_(r),new rt(t.firestore,t instanceof hr?t.converter:null,new V(r))}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class jL{constructor(){this.Xa=Promise.resolve(),this.eu=[],this.tu=!1,this.nu=[],this.ru=null,this.iu=!1,this.su=!1,this.ou=[],this.jo=new YI(this,"async_queue_retry"),this._u=()=>{const n=Sh();n&&R("AsyncQueue","Visibility state changed to "+n.visibilityState),this.jo.Ko()};const e=Sh();e&&typeof e.addEventListener=="function"&&e.addEventListener("visibilitychange",this._u)}get isShuttingDown(){return this.tu}enqueueAndForget(e){this.enqueue(e)}enqueueAndForgetEvenWhileRestricted(e){this.au(),this.uu(e)}enterRestrictedMode(e){if(!this.tu){this.tu=!0,this.su=e||!1;const n=Sh();n&&typeof n.removeEventListener=="function"&&n.removeEventListener("visibilitychange",this._u)}}enqueue(e){if(this.au(),this.tu)return new Promise(()=>{});const n=new an;return this.uu(()=>this.tu&&this.su?Promise.resolve():(e().then(n.resolve,n.reject),n.promise)).then(()=>n.promise)}enqueueRetryable(e){this.enqueueAndForget(()=>(this.eu.push(e),this.cu()))}async cu(){if(this.eu.length!==0){try{await this.eu[0](),this.eu.shift(),this.jo.reset()}catch(e){if(!Ma(e))throw e;R("AsyncQueue","Operation failed with retryable error: "+e)}this.eu.length>0&&this.jo.qo(()=>this.cu())}}uu(e){const n=this.Xa.then(()=>(this.iu=!0,e().catch(r=>{this.ru=r,this.iu=!1;const i=function(o){let a=o.message||"";return o.stack&&(a=o.stack.includes(o.message)?o.stack:o.message+`
`+o.stack),a}(r);throw cn("INTERNAL UNHANDLED ERROR: ",i),r}).then(r=>(this.iu=!1,r))));return this.Xa=n,n}enqueueAfterDelay(e,n,r){this.au(),this.ou.indexOf(e)>-1&&(n=0);const i=Pg.createAndSchedule(this,e,n,r,s=>this.lu(s));return this.nu.push(i),i}au(){this.ru&&U()}verifyOperationInProgress(){}async hu(){let e;do e=this.Xa,await e;while(e!==this.Xa)}Pu(e){for(const n of this.nu)if(n.timerId===e)return!0;return!1}Iu(e){return this.hu().then(()=>{this.nu.sort((n,r)=>n.targetTimeMs-r.targetTimeMs);for(const n of this.nu)if(n.skipDelay(),e!=="all"&&n.timerId===e)break;return this.hu()})}Tu(e){this.ou.push(e)}lu(e){const n=this.nu.indexOf(e);this.nu.splice(n,1)}}function J_(t){return function(n,r){if(typeof n!="object"||n===null)return!1;const i=n;for(const s of r)if(s in i&&typeof i[s]=="function")return!0;return!1}(t,["next","error","complete"])}class _r extends cf{constructor(e,n,r,i){super(e,n,r,i),this.type="firestore",this._queue=function(){return new jL}(),this._persistenceKey=(i==null?void 0:i.name)||"[DEFAULT]"}_terminate(){return this._firestoreClient||pS(this),this._firestoreClient.terminate()}}function zL(t,e){const n=typeof t=="object"?t:RE(),r=typeof t=="string"?t:e||"(default)",i=xm(n,"firestore").getImmediate({identifier:r});if(!i._initialized){const s=lR("firestore");s&&UL(i,...s)}return i}function hf(t){return t._firestoreClient||pS(t),t._firestoreClient.verifyNotTerminated(),t._firestoreClient}function pS(t){var e,n,r;const i=t._freezeSettings(),s=function(a,l,u,c){return new EO(a,l,u,c.host,c.ssl,c.experimentalForceLongPolling,c.experimentalAutoDetectLongPolling,hS(c.experimentalLongPollingOptions),c.useFetchStreams)}(t._databaseId,((e=t._app)===null||e===void 0?void 0:e.options.appId)||"",t._persistenceKey,i);t._firestoreClient=new OL(t._authCredentials,t._appCheckCredentials,t._queue,s),!((n=i.localCache)===null||n===void 0)&&n._offlineComponentProvider&&(!((r=i.localCache)===null||r===void 0)&&r._onlineComponentProvider)&&(t._firestoreClient._uninitializedComponentsProvider={_offlineKind:i.localCache.kind,_offline:i.localCache._offlineComponentProvider,_online:i.localCache._onlineComponentProvider})}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class vs{constructor(e){this._byteString=e}static fromBase64String(e){try{return new vs(st.fromBase64String(e))}catch(n){throw new x(T.INVALID_ARGUMENT,"Failed to construct data from Base64 string: "+n)}}static fromUint8Array(e){return new vs(st.fromUint8Array(e))}toBase64(){return this._byteString.toBase64()}toUint8Array(){return this._byteString.toUint8Array()}toString(){return"Bytes(base64: "+this.toBase64()+")"}isEqual(e){return this._byteString.isEqual(e._byteString)}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class df{constructor(...e){for(let n=0;n<e.length;++n)if(e[n].length===0)throw new x(T.INVALID_ARGUMENT,"Invalid field name at argument $(i + 1). Field names must not be empty.");this._internalPath=new He(e)}isEqual(e){return this._internalPath.isEqual(e._internalPath)}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class pf{constructor(e){this._methodName=e}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Lg{constructor(e,n){if(!isFinite(e)||e<-90||e>90)throw new x(T.INVALID_ARGUMENT,"Latitude must be a number between -90 and 90, but was: "+e);if(!isFinite(n)||n<-180||n>180)throw new x(T.INVALID_ARGUMENT,"Longitude must be a number between -180 and 180, but was: "+n);this._lat=e,this._long=n}get latitude(){return this._lat}get longitude(){return this._long}isEqual(e){return this._lat===e._lat&&this._long===e._long}toJSON(){return{latitude:this._lat,longitude:this._long}}_compareTo(e){return Z(this._lat,e._lat)||Z(this._long,e._long)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const BL=/^__.*__$/;class HL{constructor(e,n,r){this.data=e,this.fieldMask=n,this.fieldTransforms=r}toMutation(e,n){return this.fieldMask!==null?new Nr(e,this.data,this.fieldMask,n,this.fieldTransforms):new Va(e,this.data,n,this.fieldTransforms)}}class mS{constructor(e,n,r){this.data=e,this.fieldMask=n,this.fieldTransforms=r}toMutation(e,n){return new Nr(e,this.data,this.fieldMask,n,this.fieldTransforms)}}function gS(t){switch(t){case 0:case 2:case 1:return!0;case 3:case 4:return!1;default:throw U()}}class Mg{constructor(e,n,r,i,s,o){this.settings=e,this.databaseId=n,this.serializer=r,this.ignoreUndefinedProperties=i,s===void 0&&this.Eu(),this.fieldTransforms=s||[],this.fieldMask=o||[]}get path(){return this.settings.path}get du(){return this.settings.du}Au(e){return new Mg(Object.assign(Object.assign({},this.settings),e),this.databaseId,this.serializer,this.ignoreUndefinedProperties,this.fieldTransforms,this.fieldMask)}Ru(e){var n;const r=(n=this.path)===null||n===void 0?void 0:n.child(e),i=this.Au({path:r,Vu:!1});return i.mu(e),i}fu(e){var n;const r=(n=this.path)===null||n===void 0?void 0:n.child(e),i=this.Au({path:r,Vu:!1});return i.Eu(),i}gu(e){return this.Au({path:void 0,Vu:!0})}pu(e){return ic(e,this.settings.methodName,this.settings.yu||!1,this.path,this.settings.wu)}contains(e){return this.fieldMask.find(n=>e.isPrefixOf(n))!==void 0||this.fieldTransforms.find(n=>e.isPrefixOf(n.field))!==void 0}Eu(){if(this.path)for(let e=0;e<this.path.length;e++)this.mu(this.path.get(e))}mu(e){if(e.length===0)throw this.pu("Document fields must not be empty");if(gS(this.du)&&BL.test(e))throw this.pu('Document fields cannot begin and end with "__"')}}class WL{constructor(e,n,r){this.databaseId=e,this.ignoreUndefinedProperties=n,this.serializer=r||of(e)}Su(e,n,r,i=!1){return new Mg({du:e,methodName:n,wu:r,path:He.emptyPath(),Vu:!1,yu:i},this.databaseId,this.serializer,this.ignoreUndefinedProperties)}}function mf(t){const e=t._freezeSettings(),n=of(t._databaseId);return new WL(t._databaseId,!!e.ignoreUndefinedProperties,n)}function vS(t,e,n,r,i,s={}){const o=t.Su(s.merge||s.mergeFields?2:0,e,n,i);Fg("Data must be an object, but it was:",o,r);const a=yS(r,o);let l,u;if(s.merge)l=new wt(o.fieldMask),u=o.fieldTransforms;else if(s.mergeFields){const c=[];for(const f of s.mergeFields){const h=cp(e,f,n);if(!o.contains(h))throw new x(T.INVALID_ARGUMENT,`Field '${h}' is specified in your field mask but missing from your input data.`);wS(c,h)||c.push(h)}l=new wt(c),u=o.fieldTransforms.filter(f=>l.covers(f.field))}else l=null,u=o.fieldTransforms;return new HL(new dt(a),l,u)}class gf extends pf{_toFieldTransform(e){if(e.du!==2)throw e.du===1?e.pu(`${this._methodName}() can only appear at the top level of your update data`):e.pu(`${this._methodName}() cannot be used with set() unless you pass {merge:true}`);return e.fieldMask.push(e.path),null}isEqual(e){return e instanceof gf}}class Vg extends pf{_toFieldTransform(e){return new WO(e.path,new oa)}isEqual(e){return e instanceof Vg}}function qL(t,e,n,r){const i=t.Su(1,e,n);Fg("Data must be an object, but it was:",i,r);const s=[],o=dt.empty();_i(r,(l,u)=>{const c=$g(e,l,n);u=Oe(u);const f=i.fu(c);if(u instanceof gf)s.push(c);else{const h=ja(u,f);h!=null&&(s.push(c),o.set(c,h))}});const a=new wt(s);return new mS(o,a,i.fieldTransforms)}function KL(t,e,n,r,i,s){const o=t.Su(1,e,n),a=[cp(e,r,n)],l=[i];if(s.length%2!=0)throw new x(T.INVALID_ARGUMENT,`Function ${e}() needs to be called with an even number of arguments that alternate between field names and values.`);for(let h=0;h<s.length;h+=2)a.push(cp(e,s[h])),l.push(s[h+1]);const u=[],c=dt.empty();for(let h=a.length-1;h>=0;--h)if(!wS(u,a[h])){const p=a[h];let y=l[h];y=Oe(y);const _=o.fu(p);if(y instanceof gf)u.push(p);else{const w=ja(y,_);w!=null&&(u.push(p),c.set(p,w))}}const f=new wt(u);return new mS(c,f,o.fieldTransforms)}function GL(t,e,n,r=!1){return ja(n,t.Su(r?4:3,e))}function ja(t,e){if(_S(t=Oe(t)))return Fg("Unsupported field value:",e,t),yS(t,e);if(t instanceof pf)return function(r,i){if(!gS(i.du))throw i.pu(`${r._methodName}() can only be used with update() and set()`);if(!i.path)throw i.pu(`${r._methodName}() is not currently supported inside arrays`);const s=r._toFieldTransform(i);s&&i.fieldTransforms.push(s)}(t,e),null;if(t===void 0&&e.ignoreUndefinedProperties)return null;if(e.path&&e.fieldMask.push(e.path),t instanceof Array){if(e.settings.Vu&&e.du!==4)throw e.pu("Nested arrays are not supported");return function(r,i){const s=[];let o=0;for(const a of r){let l=ja(a,i.gu(o));l==null&&(l={nullValue:"NULL_VALUE"}),s.push(l),o++}return{arrayValue:{values:s}}}(t,e)}return function(r,i){if((r=Oe(r))===null)return{nullValue:"NULL_VALUE"};if(typeof r=="number")return zO(i.serializer,r);if(typeof r=="boolean")return{booleanValue:r};if(typeof r=="string")return{stringValue:r};if(r instanceof Date){const s=Ne.fromDate(r);return{timestampValue:tc(i.serializer,s)}}if(r instanceof Ne){const s=new Ne(r.seconds,1e3*Math.floor(r.nanoseconds/1e3));return{timestampValue:tc(i.serializer,s)}}if(r instanceof Lg)return{geoPointValue:{latitude:r.latitude,longitude:r.longitude}};if(r instanceof vs)return{bytesValue:jI(i.serializer,r._byteString)};if(r instanceof rt){const s=i.databaseId,o=r.firestore._databaseId;if(!o.isEqual(s))throw i.pu(`Document reference is for database ${o.projectId}/${o.database} but should be for database ${s.projectId}/${s.database}`);return{referenceValue:wg(r.firestore._databaseId||i.databaseId,r._key.path)}}throw i.pu(`Unsupported field value: ${uf(r)}`)}(t,e)}function yS(t,e){const n={};return pI(t)?e.path&&e.path.length>0&&e.fieldMask.push(e.path):_i(t,(r,i)=>{const s=ja(i,e.Ru(r));s!=null&&(n[r]=s)}),{mapValue:{fields:n}}}function _S(t){return!(typeof t!="object"||t===null||t instanceof Array||t instanceof Date||t instanceof Ne||t instanceof Lg||t instanceof vs||t instanceof rt||t instanceof pf)}function Fg(t,e,n){if(!_S(n)||!function(i){return typeof i=="object"&&i!==null&&(Object.getPrototypeOf(i)===Object.prototype||Object.getPrototypeOf(i)===null)}(n)){const r=uf(n);throw r==="an object"?e.pu(t+" a custom object"):e.pu(t+" "+r)}}function cp(t,e,n){if((e=Oe(e))instanceof df)return e._internalPath;if(typeof e=="string")return $g(t,e);throw ic("Field path arguments must be of type string or ",t,!1,void 0,n)}const QL=new RegExp("[~\\*/\\[\\]]");function $g(t,e,n){if(e.search(QL)>=0)throw ic(`Invalid field path (${e}). Paths must not contain '~', '*', '/', '[', or ']'`,t,!1,void 0,n);try{return new df(...e.split("."))._internalPath}catch{throw ic(`Invalid field path (${e}). Paths must not be empty, begin with '.', end with '.', or contain '..'`,t,!1,void 0,n)}}function ic(t,e,n,r,i){const s=r&&!r.isEmpty(),o=i!==void 0;let a=`Function ${e}() called with invalid data`;n&&(a+=" (via `toFirestore()`)"),a+=". ";let l="";return(s||o)&&(l+=" (found",s&&(l+=` in field ${r}`),o&&(l+=` in document ${i}`),l+=")"),new x(T.INVALID_ARGUMENT,a+t+l)}function wS(t,e){return t.some(n=>n.isEqual(e))}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class ES{constructor(e,n,r,i,s){this._firestore=e,this._userDataWriter=n,this._key=r,this._document=i,this._converter=s}get id(){return this._key.path.lastSegment()}get ref(){return new rt(this._firestore,this._converter,this._key)}exists(){return this._document!==null}data(){if(this._document){if(this._converter){const e=new YL(this._firestore,this._userDataWriter,this._key,this._document,null);return this._converter.fromFirestore(e)}return this._userDataWriter.convertValue(this._document.data.value)}}get(e){if(this._document){const n=this._document.data.field(vf("DocumentSnapshot.get",e));if(n!==null)return this._userDataWriter.convertValue(n)}}}class YL extends ES{data(){return super.data()}}function vf(t,e){return typeof e=="string"?$g(t,e):e instanceof df?e._internalPath:e._delegate._internalPath}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function TS(t){if(t.limitType==="L"&&t.explicitOrderBy.length===0)throw new x(T.UNIMPLEMENTED,"limitToLast() queries require specifying at least one orderBy() clause")}class Ug{}class IS extends Ug{}function jg(t,e,...n){let r=[];e instanceof Ug&&r.push(e),r=r.concat(n),function(s){const o=s.filter(l=>l instanceof zg).length,a=s.filter(l=>l instanceof yf).length;if(o>1||o>0&&a>0)throw new x(T.INVALID_ARGUMENT,"InvalidQuery. When using composite filters, you cannot use more than one filter at the top level. Consider nesting the multiple filters within an `and(...)` statement. For example: change `query(query, where(...), or(...))` to `query(query, and(where(...), or(...)))`.")}(r);for(const i of r)t=i._apply(t);return t}class yf extends IS{constructor(e,n,r){super(),this._field=e,this._op=n,this._value=r,this.type="where"}static _create(e,n,r){return new yf(e,n,r)}_apply(e){const n=this._parse(e);return AS(e._query,n),new Or(e.firestore,e.converter,np(e._query,n))}_parse(e){const n=mf(e.firestore);return function(s,o,a,l,u,c,f){let h;if(u.isKeyField()){if(c==="array-contains"||c==="array-contains-any")throw new x(T.INVALID_ARGUMENT,`Invalid Query. You can't perform '${c}' queries on documentId().`);if(c==="in"||c==="not-in"){e0(f,c);const p=[];for(const y of f)p.push(Z_(l,s,y));h={arrayValue:{values:p}}}else h=Z_(l,s,f)}else c!=="in"&&c!=="not-in"&&c!=="array-contains-any"||e0(f,c),h=GL(a,o,f,c==="in"||c==="not-in");return Ce.create(u,c,h)}(e._query,"where",n,e.firestore._databaseId,this._field,this._op,this._value)}}function XL(t,e,n){const r=e,i=vf("where",t);return yf._create(i,r,n)}class zg extends Ug{constructor(e,n){super(),this.type=e,this._queryConstraints=n}static _create(e,n){return new zg(e,n)}_parse(e){const n=this._queryConstraints.map(r=>r._parse(e)).filter(r=>r.getFilters().length>0);return n.length===1?n[0]:Kt.create(n,this._getOperator())}_apply(e){const n=this._parse(e);return n.getFilters().length===0?e:(function(i,s){let o=i;const a=s.getFlattenedFilters();for(const l of a)AS(o,l),o=np(o,l)}(e._query,n),new Or(e.firestore,e.converter,np(e._query,n)))}_getQueryConstraints(){return this._queryConstraints}_getOperator(){return this.type==="and"?"and":"or"}}class Bg extends IS{constructor(e,n){super(),this._field=e,this._direction=n,this.type="orderBy"}static _create(e,n){return new Bg(e,n)}_apply(e){const n=function(i,s,o){if(i.startAt!==null)throw new x(T.INVALID_ARGUMENT,"Invalid query. You must not call startAt() or startAfter() before calling orderBy().");if(i.endAt!==null)throw new x(T.INVALID_ARGUMENT,"Invalid query. You must not call endAt() or endBefore() before calling orderBy().");return new sa(s,o)}(e._query,this._field,this._direction);return new Or(e.firestore,e.converter,function(i,s){const o=i.explicitOrderBy.concat([s]);return new bs(i.path,i.collectionGroup,o,i.filters.slice(),i.limit,i.limitType,i.startAt,i.endAt)}(e._query,n))}}function SS(t,e="asc"){const n=e,r=vf("orderBy",t);return Bg._create(r,n)}function Z_(t,e,n){if(typeof(n=Oe(n))=="string"){if(n==="")throw new x(T.INVALID_ARGUMENT,"Invalid query. When querying with documentId(), you must provide a valid document ID, but it was an empty string.");if(!II(e)&&n.indexOf("/")!==-1)throw new x(T.INVALID_ARGUMENT,`Invalid query. When querying a collection by documentId(), you must provide a plain document ID, but '${n}' contains a '/' character.`);const r=e.path.child(ae.fromString(n));if(!V.isDocumentKey(r))throw new x(T.INVALID_ARGUMENT,`Invalid query. When querying a collection group by documentId(), the value provided must result in a valid document path, but '${r}' is not because it has an odd number of segments (${r.length}).`);return T_(t,new V(r))}if(n instanceof rt)return T_(t,n._key);throw new x(T.INVALID_ARGUMENT,`Invalid query. When querying with documentId(), you must provide a valid string or a DocumentReference, but it was: ${uf(n)}.`)}function e0(t,e){if(!Array.isArray(t)||t.length===0)throw new x(T.INVALID_ARGUMENT,`Invalid Query. A non-empty array is required for '${e.toString()}' filters.`)}function AS(t,e){const n=function(i,s){for(const o of i)for(const a of o.getFlattenedFilters())if(s.indexOf(a.op)>=0)return a.op;return null}(t.filters,function(i){switch(i){case"!=":return["!=","not-in"];case"array-contains-any":case"in":return["not-in"];case"not-in":return["array-contains-any","in","not-in","!="];default:return[]}}(e.op));if(n!==null)throw n===e.op?new x(T.INVALID_ARGUMENT,`Invalid query. You cannot use more than one '${e.op.toString()}' filter.`):new x(T.INVALID_ARGUMENT,`Invalid query. You cannot use '${e.op.toString()}' filters with '${n.toString()}' filters.`)}class JL{convertValue(e,n="none"){switch(hi(e)){case 0:return null;case 1:return e.booleanValue;case 2:return ke(e.integerValue||e.doubleValue);case 3:return this.convertTimestamp(e.timestampValue);case 4:return this.convertServerTimestamp(e,n);case 5:return e.stringValue;case 6:return this.convertBytes(fi(e.bytesValue));case 7:return this.convertReference(e.referenceValue);case 8:return this.convertGeoPoint(e.geoPointValue);case 9:return this.convertArray(e.arrayValue,n);case 10:return this.convertObject(e.mapValue,n);default:throw U()}}convertObject(e,n){return this.convertObjectMap(e.fields,n)}convertObjectMap(e,n="none"){const r={};return _i(e,(i,s)=>{r[i]=this.convertValue(s,n)}),r}convertGeoPoint(e){return new Lg(ke(e.latitude),ke(e.longitude))}convertArray(e,n){return(e.values||[]).map(r=>this.convertValue(r,n))}convertServerTimestamp(e,n){switch(n){case"previous":const r=pg(e);return r==null?null:this.convertValue(r,n);case"estimate":return this.convertTimestamp(na(e));default:return null}}convertTimestamp(e){const n=gr(e);return new Ne(n.seconds,n.nanos)}convertDocumentKey(e,n){const r=ae.fromString(e);re(KI(r));const i=new ra(r.get(1),r.get(3)),s=new V(r.popFirst(5));return i.isEqual(n)||cn(`Document ${s} contains a document reference within a different database (${i.projectId}/${i.database}) which is not supported. It will be treated as a reference in the current database (${n.projectId}/${n.database}) instead.`),s}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function kS(t,e,n){let r;return r=t?n&&(n.merge||n.mergeFields)?t.toFirestore(e,n):t.toFirestore(e):e,r}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class ro{constructor(e,n){this.hasPendingWrites=e,this.fromCache=n}isEqual(e){return this.hasPendingWrites===e.hasPendingWrites&&this.fromCache===e.fromCache}}class PS extends ES{constructor(e,n,r,i,s,o){super(e,n,r,i,o),this._firestore=e,this._firestoreImpl=e,this.metadata=s}exists(){return super.exists()}data(e={}){if(this._document){if(this._converter){const n=new lu(this._firestore,this._userDataWriter,this._key,this._document,this.metadata,null);return this._converter.fromFirestore(n,e)}return this._userDataWriter.convertValue(this._document.data.value,e.serverTimestamps)}}get(e,n={}){if(this._document){const r=this._document.data.field(vf("DocumentSnapshot.get",e));if(r!==null)return this._userDataWriter.convertValue(r,n.serverTimestamps)}}}class lu extends PS{data(e={}){return super.data(e)}}class CS{constructor(e,n,r,i){this._firestore=e,this._userDataWriter=n,this._snapshot=i,this.metadata=new ro(i.hasPendingWrites,i.fromCache),this.query=r}get docs(){const e=[];return this.forEach(n=>e.push(n)),e}get size(){return this._snapshot.docs.size}get empty(){return this.size===0}forEach(e,n){this._snapshot.docs.forEach(r=>{e.call(n,new lu(this._firestore,this._userDataWriter,r.key,r,new ro(this._snapshot.mutatedKeys.has(r.key),this._snapshot.fromCache),this.query.converter))})}docChanges(e={}){const n=!!e.includeMetadataChanges;if(n&&this._snapshot.excludesMetadataChanges)throw new x(T.INVALID_ARGUMENT,"To include metadata changes with your document changes, you must also pass { includeMetadataChanges:true } to onSnapshot().");return this._cachedChanges&&this._cachedChangesIncludeMetadataChanges===n||(this._cachedChanges=function(i,s){if(i._snapshot.oldDocs.isEmpty()){let o=0;return i._snapshot.docChanges.map(a=>{const l=new lu(i._firestore,i._userDataWriter,a.doc.key,a.doc,new ro(i._snapshot.mutatedKeys.has(a.doc.key),i._snapshot.fromCache),i.query.converter);return a.doc,{type:"added",doc:l,oldIndex:-1,newIndex:o++}})}{let o=i._snapshot.oldDocs;return i._snapshot.docChanges.filter(a=>s||a.type!==3).map(a=>{const l=new lu(i._firestore,i._userDataWriter,a.doc.key,a.doc,new ro(i._snapshot.mutatedKeys.has(a.doc.key),i._snapshot.fromCache),i.query.converter);let u=-1,c=-1;return a.type!==0&&(u=o.indexOf(a.doc.key),o=o.delete(a.doc.key)),a.type!==1&&(o=o.add(a.doc),c=o.indexOf(a.doc.key)),{type:ZL(a.type),doc:l,oldIndex:u,newIndex:c}})}}(this,n),this._cachedChangesIncludeMetadataChanges=n),this._cachedChanges}}function ZL(t){switch(t){case 0:return"added";case 2:case 3:return"modified";case 1:return"removed";default:return U()}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function ua(t){t=Tt(t,rt);const e=Tt(t.firestore,_r);return VL(hf(e),t._key).then(n=>bS(e,t,n))}class Hg extends JL{constructor(e){super(),this.firestore=e}convertBytes(e){return new vs(e)}convertReference(e){const n=this.convertDocumentKey(e,this.firestore._databaseId);return new rt(this.firestore,null,n)}}function eM(t){t=Tt(t,Or);const e=Tt(t.firestore,_r),n=hf(e),r=new Hg(e);return TS(t._query),FL(n,t._query).then(i=>new CS(e,r,t,i))}function sc(t,e,n){t=Tt(t,rt);const r=Tt(t.firestore,_r),i=kS(t.converter,e,n);return Wg(r,[vS(mf(r),"setDoc",t._key,i,t.converter!==null,n).toMutation(t._key,zt.none())])}function t0(t,e,n,...r){t=Tt(t,rt);const i=Tt(t.firestore,_r),s=mf(i);let o;return o=typeof(e=Oe(e))=="string"||e instanceof df?KL(s,"updateDoc",t._key,e,n,r):qL(s,"updateDoc",t._key,e),Wg(i,[o.toMutation(t._key,zt.exists(!0))])}function tM(t,e){const n=Tt(t.firestore,_r),r=yr(t),i=kS(t.converter,e);return Wg(n,[vS(mf(t.firestore),"addDoc",r._key,i,t.converter!==null,{}).toMutation(r._key,zt.exists(!1))]).then(()=>r)}function RS(t,...e){var n,r,i;t=Oe(t);let s={includeMetadataChanges:!1},o=0;typeof e[o]!="object"||J_(e[o])||(s=e[o],o++);const a={includeMetadataChanges:s.includeMetadataChanges};if(J_(e[o])){const f=e[o];e[o]=(n=f.next)===null||n===void 0?void 0:n.bind(f),e[o+1]=(r=f.error)===null||r===void 0?void 0:r.bind(f),e[o+2]=(i=f.complete)===null||i===void 0?void 0:i.bind(f)}let l,u,c;if(t instanceof rt)u=Tt(t.firestore,_r),c=Zc(t._key.path),l={next:f=>{e[o]&&e[o](bS(u,t,f))},error:e[o+1],complete:e[o+2]};else{const f=Tt(t,Or);u=Tt(f.firestore,_r),c=f._query;const h=new Hg(u);l={next:p=>{e[o]&&e[o](new CS(u,h,f,p))},error:e[o+1],complete:e[o+2]},TS(t._query)}return function(h,p,y,_){const w=new Dg(_),m=new Ng(p,w,y);return h.asyncQueue.enqueueAndForget(async()=>Rg(await rc(h),m)),()=>{w.La(),h.asyncQueue.enqueueAndForget(async()=>bg(await rc(h),m))}}(hf(u),c,a,l)}function Wg(t,e){return function(r,i){const s=new an;return r.asyncQueue.enqueueAndForget(async()=>IL(await ML(r),i,s)),s.promise}(hf(t),e)}function bS(t,e,n){const r=n.docs.get(e._key),i=new Hg(t);return new PS(t,i,e._key,r,new ro(n.hasPendingWrites,n.fromCache),e.converter)}function fp(){return new Vg("serverTimestamp")}(function(e,n=!0){(function(i){Rs=i})(As),us(new oi("firestore",(r,{instanceIdentifier:i,options:s})=>{const o=r.getProvider("app").getImmediate(),a=new _r(new sO(r.getProvider("auth-internal")),new uO(r.getProvider("app-check-internal")),function(u,c){if(!Object.prototype.hasOwnProperty.apply(u.options,["projectId"]))throw new x(T.INVALID_ARGUMENT,'"projectId" not provided in firebase.initializeApp.');return new ra(u.options.projectId,c)}(o,i),o);return s=Object.assign({useFetchStreams:n},s),a._setSettings(s),a},"PUBLIC").setMultipleInstances(!0)),fr(v_,"4.4.2",e),fr(v_,"4.4.2","esm2017")})();const nM={apiKey:"AIzaSyDfwvLVCB7gUL37yYvb_lF8cSPBw7_YIt8",authDomain:"quickchat-706d3.firebaseapp.com",projectId:"quickchat-706d3",storageBucket:"quickchat-706d3.appspot.com",messagingSenderId:"119582055250",appId:"1:119582055250:web:67a9218dfa4c34529e788b",measurementId:"G-JQGJDTNY4P"};CE(nM);const _f=Kx(),Bt=zL(),On=A.createContext(),rM=({children:t})=>{const[e,n]=A.useState({});return A.useEffect(()=>{const r=Db(_f,i=>{n(i)});return()=>{r()}},[]),v.jsx(On.Provider,{value:{currentUser:e},children:t})};function iM(){const{currentUser:t}=A.useContext(On),[e,n]=A.useState(null);return A.useEffect(()=>{t&&(async()=>{try{const i=yr(Bt,"users",t.uid),s=await ua(i);s.exists()&&n(s.data().displayName)}catch(i){console.error(i)}})()},[t]),v.jsx("div",{className:"navbar-container",children:v.jsxs("div",{className:"user-container",children:[v.jsx("img",{src:Lc,alt:"user profile picture"}),v.jsx("h1",{className:"username",children:e}),v.jsx("div",{className:"logout-button-continainer",children:v.jsx("button",{onClick:()=>Lb(_f),children:"Logout"})})]})})}function sM(){const[t,e]=A.useState(""),[n,r]=A.useState(null),{currentUser:i}=A.useContext(On),s=async()=>{const l=ff(Bt,"users"),u=jg(l,XL("displayName","==",t));try{const c=await eM(u);c.empty?r(null):c.forEach(f=>{r(f.data())})}catch(c){console.error("Error searching user:",c),r(null)}},o=l=>{l.key==="Enter"&&s()},a=async l=>{if(i&&l){const u=i.uid>l.uid?i.uid+l.uid:l.uid+i.uid;try{const c=yr(Bt,"userChats",i.uid),f=await ua(c);f.exists()||await sc(c,{messages:[]});const h=yr(Bt,"userChats",l.uid),p=await ua(h);p.exists()||await sc(h,{messages:[]}),f.data()[u]||await t0(c,{[u]:{userInfo:{uid:l.uid,displayName:l.displayName},date:fp()}}),p.data()[u]||await t0(h,{[u]:{userInfo:{uid:i.uid,displayName:i.displayName},date:fp()}})}catch(c){console.error("Error selecting user:",c)}}};return v.jsxs("div",{className:"search-container",children:[v.jsxs("div",{className:"search-input-container",children:[v.jsx("span",{className:"material-symbols-outlined",children:"search"}),v.jsx("input",{type:"text",id:"search",placeholder:"Search user",onKeyDown:o,onChange:l=>e(l.target.value),value:t})]}),n&&v.jsxs("div",{className:"search-user",onClick:()=>a(n),children:[v.jsx("img",{src:Lc,alt:"user profile picture"}),v.jsx("div",{className:"user-name-text",children:v.jsx("h1",{className:"user-name",children:n.displayName})})]})]})}const ys=A.createContext(),oM=({children:t})=>{const{currentUser:e}=A.useContext(On),n={chatId:"null",user:{}},r=(o,a)=>{switch(a.type){case"CHANGE_USER":return{user:a.payload,chatId:e.uid>a.payload.uid?e.uid+a.payload.uid:a.payload.uid+e.uid};default:return o}},[i,s]=A.useReducer(r,n);return v.jsx(ys.Provider,{value:{data:i,dispatch:s},children:t})};function aM(){const[t,e]=A.useState([]),{currentUser:n}=A.useContext(On),{dispatch:r}=A.useContext(ys);A.useEffect(()=>{const l=async()=>{try{const u=yr(Bt,"userChats",n.uid),c=await ua(u);if(c.exists()){const f=c.data(),h=Object.entries(f).filter(([p,y])=>p!=="messages").map(([p,y])=>({id:p,...y}));e(h)}else console.log("User's chat document does not exist")}catch(u){console.error("Error fetching chats:",u)}};n.uid&&l()},[n.uid]);const i=l=>{r({type:"CHANGE_USER",payload:l.userInfo})},[s,o]=A.useState([]),{data:a}=A.useContext(ys);return A.useEffect(()=>{if(a&&a.chatId){const l=ff(Bt,"userMessages",a.chatId,"messages"),u=jg(l,SS("timestamp","desc")),c=RS(u,f=>{const h=[];f.forEach(p=>{h.push({id:p.id,...p.data()})}),o(h)});return()=>{c()}}},[a]),v.jsx(v.Fragment,{children:t.map(l=>{var u;return v.jsxs("div",{className:"contact-container",onClick:()=>i(l),children:[v.jsx("img",{src:Lc,alt:"user profile picture"}),v.jsxs("div",{className:"user-name-text",children:[v.jsx("h1",{className:"user-name",children:l.userInfo.displayName}),v.jsx("p",{className:"latest-text"})]}),v.jsx("div",{className:"text-time",children:v.jsx("p",{children:(u=l.date)==null?void 0:u.toDate().toLocaleTimeString()})})]},l.id)})})}function lM(){return v.jsxs("div",{className:"info",children:[v.jsx(iM,{}),v.jsx(sM,{}),v.jsx(aM,{})]})}function uM(){const{data:t}=A.useContext(ys),{currentUser:e}=A.useContext(On),[n,r]=A.useState(null);return A.useEffect(()=>{const i=async()=>{try{const s=yr(Bt,"users",t.user.uid),o=await ua(s);o.exists()&&r(o.data())}catch(s){console.error("Error fetching user data:",s)}};t&&t.user&&e&&i()},[t,e]),v.jsx("div",{className:"chatheader-container",children:n?v.jsxs(v.Fragment,{children:[v.jsx("img",{src:Lc,alt:"user profile picture"}),v.jsxs("div",{className:"user-name-text",children:[v.jsx("h1",{className:"user-name",children:n.displayName}),v.jsx("p",{className:"status",children:n.status})]})]}):v.jsx("p",{children:"Loading..."})})}function cM(){const[t,e]=A.useState(""),{data:n}=A.useContext(ys),{currentUser:r}=A.useContext(On),i=a=>{e(a.target.value)},s=async a=>{if(a.trim()!=="")try{const l=ff(Bt,"userMessages",n.chatId,"messages");await tM(l,{content:a,senderId:r.uid,timestamp:fp()})}catch(l){console.error("Error sending message:",l)}},o=()=>{s(t),e("")};return v.jsxs("div",{className:"input-container",children:[v.jsx("input",{type:"text",value:t,onChange:i,placeholder:"Message..."}),v.jsx("button",{className:"send-button",onClick:o,children:v.jsx("span",{className:"material-symbols-outlined",children:"send"})})]})}function fM(t){const{currentUser:e}=A.useContext(On);return v.jsx("div",{className:"message-container",children:v.jsxs("div",{className:"info-container",children:[v.jsxs("div",{className:"sender-container",children:[t.message.senderId===e.uid&&v.jsx("div",{className:"text-container",children:v.jsx("p",{children:t.message.content})}),t.message.senderId===e.uid&&v.jsx("div",{className:"timestamp2",children:v.jsx("p",{children:t.message.timestamp&&t.message.timestamp.toDate().toLocaleTimeString()})})]}),v.jsxs("div",{className:"receiver-container",children:[t.message.senderId!=e.uid&&v.jsx("div",{className:"text-container2",children:v.jsx("p",{children:t.message.content})}),t.message.senderId!=e.uid&&v.jsx("div",{className:"timestamp",children:v.jsx("p",{children:t.message.timestamp&&t.message.timestamp.toDate().toLocaleTimeString()})})]})]})})}function hM(){const[t,e]=A.useState([]),{data:n}=A.useContext(ys),r=A.useRef(null);A.useEffect(()=>{if(n&&n.chatId){const s=ff(Bt,"userMessages",n.chatId,"messages"),o=jg(s,SS("timestamp","asc")),a=RS(o,l=>{const u=[];l.forEach(c=>{u.push({id:c.id,...c.data()})}),e(u),i()});return()=>{a()}}},[n]);const i=()=>{r.current&&(r.current.scrollTop=r.current.scrollHeight)};return v.jsx("div",{className:"messages-container",ref:r,children:t&&t.map(s=>v.jsx(fM,{message:s},s.id))})}function dM(){return v.jsxs("div",{className:"chat",children:[v.jsx(uM,{}),v.jsx("div",{className:"text-bar",children:v.jsx(hM,{})}),v.jsx(cM,{})]})}function pM(){return v.jsx("div",{className:"chat-page",children:v.jsxs("div",{className:"chat-container",children:[v.jsx(lM,{}),v.jsx(dM,{})]})})}function mM(){const t=Rc(),e=async n=>{n.preventDefault();const r=n.target[0].value,i=n.target[1].value;try{await xb(_f,r,i),t("/home")}catch(s){console.log(s)}};return v.jsx("div",{className:"limiter",children:v.jsx("div",{className:"container-login",children:v.jsxs("div",{className:"wrap-login",children:[v.jsx("h1",{className:"title",children:"QuickChat"}),v.jsxs("form",{onSubmit:e,className:"login-form validate-form",children:[v.jsx("span",{className:"login-form-title",children:"Login"}),v.jsxs("div",{className:"wrap-input validate-input","data-validate":"Valid email is required: ex@abc.xyz",children:[v.jsx("input",{className:"input",type:"text",name:"email",placeholder:"Email"}),v.jsx("span",{className:"focus-input"})]}),v.jsxs("div",{className:"wrap-input validate-input","data-validate":"Password is required",children:[v.jsx("input",{className:"input",type:"password",name:"pass",placeholder:"Password"}),v.jsx("span",{className:"focus-input"})]}),v.jsx("div",{className:"container-login-form-btn",children:v.jsx("button",{className:"login-form-btn",children:"Login"})}),v.jsxs("div",{className:"text-center",children:[v.jsx("span",{className:"txt1",children:"Forgot"}),v.jsx("a",{className:"txt2",href:"#",children:"Username / Password?"})]}),v.jsx("div",{className:"text-center p-t-136",children:v.jsx("p",{className:"txt2",href:"#",children:v.jsx(yE,{to:"/signup",children:"Create your Account"})})})]})]})})})}function gM(){const t=Rc(),e=async n=>{n.preventDefault();const r=n.target[0].value,i=n.target[1].value,s=n.target[2].value;try{const o=await bb(_f,i,s);await sc(yr(Bt,"users",o.user.uid),{uid:o.user.uid,displayName:r,email:i}),await sc(yr(Bt,"userMessages",o.user.uid),{}),t("/home")}catch(o){console.log(o)}};return v.jsx("div",{className:"limiter",children:v.jsx("div",{className:"container-login",children:v.jsxs("div",{className:"wrap-login",children:[v.jsx("h1",{className:"title",children:"QuickChat"}),v.jsxs("form",{className:"login-form validate-form",onSubmit:e,children:[v.jsx("span",{className:"login-form-title",children:"Sign Up"}),v.jsxs("div",{className:"wrap-input validate-input","data-validate":"Username is required",children:[v.jsx("input",{className:"input",type:"text",name:"user",placeholder:"Create Username"}),v.jsx("span",{className:"focus-input"})]}),v.jsxs("div",{className:"wrap-input validate-input","data-validate":"Valid email is required: ex@abc.xyz",children:[v.jsx("input",{className:"input",type:"text",name:"email",placeholder:"Email"}),v.jsx("span",{className:"focus-input"})]}),v.jsxs("div",{className:"wrap-input validate-input","data-validate":"Password is required",children:[v.jsx("input",{className:"input",type:"password",name:"pass",placeholder:"Password"}),v.jsx("span",{className:"focus-input"})]}),v.jsx("div",{className:"container-login-form-btn",children:v.jsx("button",{className:"login-form-btn",children:"Sign Up"})}),v.jsx("div",{className:"text-center",children:v.jsx("span",{className:"txt1",children:v.jsx(yE,{to:"/login",children:"Already have an account?"})})})]})]})})})}const vM="/assets/hero1-zuaj9fsq.jpg",yM="/assets/dev-sdQyolQQ.jpg",_M="/assets/login-yTYnZlR_.mp4",wM="/assets/appdemo2-AkLKo0D_.mp4";function n0(t,e){var n=Object.keys(t);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(t);e&&(r=r.filter(function(i){return Object.getOwnPropertyDescriptor(t,i).enumerable})),n.push.apply(n,r)}return n}function O(t){for(var e=1;e<arguments.length;e++){var n=arguments[e]!=null?arguments[e]:{};e%2?n0(Object(n),!0).forEach(function(r){De(t,r,n[r])}):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(n)):n0(Object(n)).forEach(function(r){Object.defineProperty(t,r,Object.getOwnPropertyDescriptor(n,r))})}return t}function oc(t){"@babel/helpers - typeof";return oc=typeof Symbol=="function"&&typeof Symbol.iterator=="symbol"?function(e){return typeof e}:function(e){return e&&typeof Symbol=="function"&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e},oc(t)}function EM(t,e){if(!(t instanceof e))throw new TypeError("Cannot call a class as a function")}function r0(t,e){for(var n=0;n<e.length;n++){var r=e[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(t,r.key,r)}}function TM(t,e,n){return e&&r0(t.prototype,e),n&&r0(t,n),Object.defineProperty(t,"prototype",{writable:!1}),t}function De(t,e,n){return e in t?Object.defineProperty(t,e,{value:n,enumerable:!0,configurable:!0,writable:!0}):t[e]=n,t}function qg(t,e){return SM(t)||kM(t,e)||xS(t,e)||CM()}function za(t){return IM(t)||AM(t)||xS(t)||PM()}function IM(t){if(Array.isArray(t))return hp(t)}function SM(t){if(Array.isArray(t))return t}function AM(t){if(typeof Symbol<"u"&&t[Symbol.iterator]!=null||t["@@iterator"]!=null)return Array.from(t)}function kM(t,e){var n=t==null?null:typeof Symbol<"u"&&t[Symbol.iterator]||t["@@iterator"];if(n!=null){var r=[],i=!0,s=!1,o,a;try{for(n=n.call(t);!(i=(o=n.next()).done)&&(r.push(o.value),!(e&&r.length===e));i=!0);}catch(l){s=!0,a=l}finally{try{!i&&n.return!=null&&n.return()}finally{if(s)throw a}}return r}}function xS(t,e){if(t){if(typeof t=="string")return hp(t,e);var n=Object.prototype.toString.call(t).slice(8,-1);if(n==="Object"&&t.constructor&&(n=t.constructor.name),n==="Map"||n==="Set")return Array.from(t);if(n==="Arguments"||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n))return hp(t,e)}}function hp(t,e){(e==null||e>t.length)&&(e=t.length);for(var n=0,r=new Array(e);n<e;n++)r[n]=t[n];return r}function PM(){throw new TypeError(`Invalid attempt to spread non-iterable instance.
In order to be iterable, non-array objects must have a [Symbol.iterator]() method.`)}function CM(){throw new TypeError(`Invalid attempt to destructure non-iterable instance.
In order to be iterable, non-array objects must have a [Symbol.iterator]() method.`)}var i0=function(){},Kg={},NS={},OS=null,DS={mark:i0,measure:i0};try{typeof window<"u"&&(Kg=window),typeof document<"u"&&(NS=document),typeof MutationObserver<"u"&&(OS=MutationObserver),typeof performance<"u"&&(DS=performance)}catch{}var RM=Kg.navigator||{},s0=RM.userAgent,o0=s0===void 0?"":s0,wr=Kg,ue=NS,a0=OS,Rl=DS;wr.document;var Dn=!!ue.documentElement&&!!ue.head&&typeof ue.addEventListener=="function"&&typeof ue.createElement=="function",LS=~o0.indexOf("MSIE")||~o0.indexOf("Trident/"),bl,xl,Nl,Ol,Dl,Cn="___FONT_AWESOME___",dp=16,MS="fa",VS="svg-inline--fa",di="data-fa-i2svg",pp="data-fa-pseudo-element",bM="data-fa-pseudo-element-pending",Gg="data-prefix",Qg="data-icon",l0="fontawesome-i2svg",xM="async",NM=["HTML","HEAD","STYLE","SCRIPT"],FS=function(){try{return!0}catch{return!1}}(),se="classic",we="sharp",Yg=[se,we];function Ba(t){return new Proxy(t,{get:function(n,r){return r in n?n[r]:n[se]}})}var ca=Ba((bl={},De(bl,se,{fa:"solid",fas:"solid","fa-solid":"solid",far:"regular","fa-regular":"regular",fal:"light","fa-light":"light",fat:"thin","fa-thin":"thin",fad:"duotone","fa-duotone":"duotone",fab:"brands","fa-brands":"brands",fak:"kit",fakd:"kit","fa-kit":"kit","fa-kit-duotone":"kit"}),De(bl,we,{fa:"solid",fass:"solid","fa-solid":"solid",fasr:"regular","fa-regular":"regular",fasl:"light","fa-light":"light",fast:"thin","fa-thin":"thin"}),bl)),fa=Ba((xl={},De(xl,se,{solid:"fas",regular:"far",light:"fal",thin:"fat",duotone:"fad",brands:"fab",kit:"fak"}),De(xl,we,{solid:"fass",regular:"fasr",light:"fasl",thin:"fast"}),xl)),ha=Ba((Nl={},De(Nl,se,{fab:"fa-brands",fad:"fa-duotone",fak:"fa-kit",fal:"fa-light",far:"fa-regular",fas:"fa-solid",fat:"fa-thin"}),De(Nl,we,{fass:"fa-solid",fasr:"fa-regular",fasl:"fa-light",fast:"fa-thin"}),Nl)),OM=Ba((Ol={},De(Ol,se,{"fa-brands":"fab","fa-duotone":"fad","fa-kit":"fak","fa-light":"fal","fa-regular":"far","fa-solid":"fas","fa-thin":"fat"}),De(Ol,we,{"fa-solid":"fass","fa-regular":"fasr","fa-light":"fasl","fa-thin":"fast"}),Ol)),DM=/fa(s|r|l|t|d|b|k|ss|sr|sl|st)?[\-\ ]/,$S="fa-layers-text",LM=/Font ?Awesome ?([56 ]*)(Solid|Regular|Light|Thin|Duotone|Brands|Free|Pro|Sharp|Kit)?.*/i,MM=Ba((Dl={},De(Dl,se,{900:"fas",400:"far",normal:"far",300:"fal",100:"fat"}),De(Dl,we,{900:"fass",400:"fasr",300:"fasl",100:"fast"}),Dl)),US=[1,2,3,4,5,6,7,8,9,10],VM=US.concat([11,12,13,14,15,16,17,18,19,20]),FM=["class","data-prefix","data-icon","data-fa-transform","data-fa-mask"],Qr={GROUP:"duotone-group",SWAP_OPACITY:"swap-opacity",PRIMARY:"primary",SECONDARY:"secondary"},da=new Set;Object.keys(fa[se]).map(da.add.bind(da));Object.keys(fa[we]).map(da.add.bind(da));var $M=[].concat(Yg,za(da),["2xs","xs","sm","lg","xl","2xl","beat","border","fade","beat-fade","bounce","flip-both","flip-horizontal","flip-vertical","flip","fw","inverse","layers-counter","layers-text","layers","li","pull-left","pull-right","pulse","rotate-180","rotate-270","rotate-90","rotate-by","shake","spin-pulse","spin-reverse","spin","stack-1x","stack-2x","stack","ul",Qr.GROUP,Qr.SWAP_OPACITY,Qr.PRIMARY,Qr.SECONDARY]).concat(US.map(function(t){return"".concat(t,"x")})).concat(VM.map(function(t){return"w-".concat(t)})),To=wr.FontAwesomeConfig||{};function UM(t){var e=ue.querySelector("script["+t+"]");if(e)return e.getAttribute(t)}function jM(t){return t===""?!0:t==="false"?!1:t==="true"?!0:t}if(ue&&typeof ue.querySelector=="function"){var zM=[["data-family-prefix","familyPrefix"],["data-css-prefix","cssPrefix"],["data-family-default","familyDefault"],["data-style-default","styleDefault"],["data-replacement-class","replacementClass"],["data-auto-replace-svg","autoReplaceSvg"],["data-auto-add-css","autoAddCss"],["data-auto-a11y","autoA11y"],["data-search-pseudo-elements","searchPseudoElements"],["data-observe-mutations","observeMutations"],["data-mutate-approach","mutateApproach"],["data-keep-original-source","keepOriginalSource"],["data-measure-performance","measurePerformance"],["data-show-missing-icons","showMissingIcons"]];zM.forEach(function(t){var e=qg(t,2),n=e[0],r=e[1],i=jM(UM(n));i!=null&&(To[r]=i)})}var jS={styleDefault:"solid",familyDefault:"classic",cssPrefix:MS,replacementClass:VS,autoReplaceSvg:!0,autoAddCss:!0,autoA11y:!0,searchPseudoElements:!1,observeMutations:!0,mutateApproach:"async",keepOriginalSource:!0,measurePerformance:!1,showMissingIcons:!0};To.familyPrefix&&(To.cssPrefix=To.familyPrefix);var _s=O(O({},jS),To);_s.autoReplaceSvg||(_s.observeMutations=!1);var M={};Object.keys(jS).forEach(function(t){Object.defineProperty(M,t,{enumerable:!0,set:function(n){_s[t]=n,Io.forEach(function(r){return r(M)})},get:function(){return _s[t]}})});Object.defineProperty(M,"familyPrefix",{enumerable:!0,set:function(e){_s.cssPrefix=e,Io.forEach(function(n){return n(M)})},get:function(){return _s.cssPrefix}});wr.FontAwesomeConfig=M;var Io=[];function BM(t){return Io.push(t),function(){Io.splice(Io.indexOf(t),1)}}var Fn=dp,tn={size:16,x:0,y:0,rotate:0,flipX:!1,flipY:!1};function HM(t){if(!(!t||!Dn)){var e=ue.createElement("style");e.setAttribute("type","text/css"),e.innerHTML=t;for(var n=ue.head.childNodes,r=null,i=n.length-1;i>-1;i--){var s=n[i],o=(s.tagName||"").toUpperCase();["STYLE","LINK"].indexOf(o)>-1&&(r=s)}return ue.head.insertBefore(e,r),t}}var WM="0123456789abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ";function pa(){for(var t=12,e="";t-- >0;)e+=WM[Math.random()*62|0];return e}function Os(t){for(var e=[],n=(t||[]).length>>>0;n--;)e[n]=t[n];return e}function Xg(t){return t.classList?Os(t.classList):(t.getAttribute("class")||"").split(" ").filter(function(e){return e})}function zS(t){return"".concat(t).replace(/&/g,"&amp;").replace(/"/g,"&quot;").replace(/'/g,"&#39;").replace(/</g,"&lt;").replace(/>/g,"&gt;")}function qM(t){return Object.keys(t||{}).reduce(function(e,n){return e+"".concat(n,'="').concat(zS(t[n]),'" ')},"").trim()}function wf(t){return Object.keys(t||{}).reduce(function(e,n){return e+"".concat(n,": ").concat(t[n].trim(),";")},"")}function Jg(t){return t.size!==tn.size||t.x!==tn.x||t.y!==tn.y||t.rotate!==tn.rotate||t.flipX||t.flipY}function KM(t){var e=t.transform,n=t.containerWidth,r=t.iconWidth,i={transform:"translate(".concat(n/2," 256)")},s="translate(".concat(e.x*32,", ").concat(e.y*32,") "),o="scale(".concat(e.size/16*(e.flipX?-1:1),", ").concat(e.size/16*(e.flipY?-1:1),") "),a="rotate(".concat(e.rotate," 0 0)"),l={transform:"".concat(s," ").concat(o," ").concat(a)},u={transform:"translate(".concat(r/2*-1," -256)")};return{outer:i,inner:l,path:u}}function GM(t){var e=t.transform,n=t.width,r=n===void 0?dp:n,i=t.height,s=i===void 0?dp:i,o=t.startCentered,a=o===void 0?!1:o,l="";return a&&LS?l+="translate(".concat(e.x/Fn-r/2,"em, ").concat(e.y/Fn-s/2,"em) "):a?l+="translate(calc(-50% + ".concat(e.x/Fn,"em), calc(-50% + ").concat(e.y/Fn,"em)) "):l+="translate(".concat(e.x/Fn,"em, ").concat(e.y/Fn,"em) "),l+="scale(".concat(e.size/Fn*(e.flipX?-1:1),", ").concat(e.size/Fn*(e.flipY?-1:1),") "),l+="rotate(".concat(e.rotate,"deg) "),l}var QM=`:root, :host {
  --fa-font-solid: normal 900 1em/1 "Font Awesome 6 Solid";
  --fa-font-regular: normal 400 1em/1 "Font Awesome 6 Regular";
  --fa-font-light: normal 300 1em/1 "Font Awesome 6 Light";
  --fa-font-thin: normal 100 1em/1 "Font Awesome 6 Thin";
  --fa-font-duotone: normal 900 1em/1 "Font Awesome 6 Duotone";
  --fa-font-sharp-solid: normal 900 1em/1 "Font Awesome 6 Sharp";
  --fa-font-sharp-regular: normal 400 1em/1 "Font Awesome 6 Sharp";
  --fa-font-sharp-light: normal 300 1em/1 "Font Awesome 6 Sharp";
  --fa-font-sharp-thin: normal 100 1em/1 "Font Awesome 6 Sharp";
  --fa-font-brands: normal 400 1em/1 "Font Awesome 6 Brands";
}

svg:not(:root).svg-inline--fa, svg:not(:host).svg-inline--fa {
  overflow: visible;
  box-sizing: content-box;
}

.svg-inline--fa {
  display: var(--fa-display, inline-block);
  height: 1em;
  overflow: visible;
  vertical-align: -0.125em;
}
.svg-inline--fa.fa-2xs {
  vertical-align: 0.1em;
}
.svg-inline--fa.fa-xs {
  vertical-align: 0em;
}
.svg-inline--fa.fa-sm {
  vertical-align: -0.0714285705em;
}
.svg-inline--fa.fa-lg {
  vertical-align: -0.2em;
}
.svg-inline--fa.fa-xl {
  vertical-align: -0.25em;
}
.svg-inline--fa.fa-2xl {
  vertical-align: -0.3125em;
}
.svg-inline--fa.fa-pull-left {
  margin-right: var(--fa-pull-margin, 0.3em);
  width: auto;
}
.svg-inline--fa.fa-pull-right {
  margin-left: var(--fa-pull-margin, 0.3em);
  width: auto;
}
.svg-inline--fa.fa-li {
  width: var(--fa-li-width, 2em);
  top: 0.25em;
}
.svg-inline--fa.fa-fw {
  width: var(--fa-fw-width, 1.25em);
}

.fa-layers svg.svg-inline--fa {
  bottom: 0;
  left: 0;
  margin: auto;
  position: absolute;
  right: 0;
  top: 0;
}

.fa-layers-counter, .fa-layers-text {
  display: inline-block;
  position: absolute;
  text-align: center;
}

.fa-layers {
  display: inline-block;
  height: 1em;
  position: relative;
  text-align: center;
  vertical-align: -0.125em;
  width: 1em;
}
.fa-layers svg.svg-inline--fa {
  -webkit-transform-origin: center center;
          transform-origin: center center;
}

.fa-layers-text {
  left: 50%;
  top: 50%;
  -webkit-transform: translate(-50%, -50%);
          transform: translate(-50%, -50%);
  -webkit-transform-origin: center center;
          transform-origin: center center;
}

.fa-layers-counter {
  background-color: var(--fa-counter-background-color, #ff253a);
  border-radius: var(--fa-counter-border-radius, 1em);
  box-sizing: border-box;
  color: var(--fa-inverse, #fff);
  line-height: var(--fa-counter-line-height, 1);
  max-width: var(--fa-counter-max-width, 5em);
  min-width: var(--fa-counter-min-width, 1.5em);
  overflow: hidden;
  padding: var(--fa-counter-padding, 0.25em 0.5em);
  right: var(--fa-right, 0);
  text-overflow: ellipsis;
  top: var(--fa-top, 0);
  -webkit-transform: scale(var(--fa-counter-scale, 0.25));
          transform: scale(var(--fa-counter-scale, 0.25));
  -webkit-transform-origin: top right;
          transform-origin: top right;
}

.fa-layers-bottom-right {
  bottom: var(--fa-bottom, 0);
  right: var(--fa-right, 0);
  top: auto;
  -webkit-transform: scale(var(--fa-layers-scale, 0.25));
          transform: scale(var(--fa-layers-scale, 0.25));
  -webkit-transform-origin: bottom right;
          transform-origin: bottom right;
}

.fa-layers-bottom-left {
  bottom: var(--fa-bottom, 0);
  left: var(--fa-left, 0);
  right: auto;
  top: auto;
  -webkit-transform: scale(var(--fa-layers-scale, 0.25));
          transform: scale(var(--fa-layers-scale, 0.25));
  -webkit-transform-origin: bottom left;
          transform-origin: bottom left;
}

.fa-layers-top-right {
  top: var(--fa-top, 0);
  right: var(--fa-right, 0);
  -webkit-transform: scale(var(--fa-layers-scale, 0.25));
          transform: scale(var(--fa-layers-scale, 0.25));
  -webkit-transform-origin: top right;
          transform-origin: top right;
}

.fa-layers-top-left {
  left: var(--fa-left, 0);
  right: auto;
  top: var(--fa-top, 0);
  -webkit-transform: scale(var(--fa-layers-scale, 0.25));
          transform: scale(var(--fa-layers-scale, 0.25));
  -webkit-transform-origin: top left;
          transform-origin: top left;
}

.fa-1x {
  font-size: 1em;
}

.fa-2x {
  font-size: 2em;
}

.fa-3x {
  font-size: 3em;
}

.fa-4x {
  font-size: 4em;
}

.fa-5x {
  font-size: 5em;
}

.fa-6x {
  font-size: 6em;
}

.fa-7x {
  font-size: 7em;
}

.fa-8x {
  font-size: 8em;
}

.fa-9x {
  font-size: 9em;
}

.fa-10x {
  font-size: 10em;
}

.fa-2xs {
  font-size: 0.625em;
  line-height: 0.1em;
  vertical-align: 0.225em;
}

.fa-xs {
  font-size: 0.75em;
  line-height: 0.0833333337em;
  vertical-align: 0.125em;
}

.fa-sm {
  font-size: 0.875em;
  line-height: 0.0714285718em;
  vertical-align: 0.0535714295em;
}

.fa-lg {
  font-size: 1.25em;
  line-height: 0.05em;
  vertical-align: -0.075em;
}

.fa-xl {
  font-size: 1.5em;
  line-height: 0.0416666682em;
  vertical-align: -0.125em;
}

.fa-2xl {
  font-size: 2em;
  line-height: 0.03125em;
  vertical-align: -0.1875em;
}

.fa-fw {
  text-align: center;
  width: 1.25em;
}

.fa-ul {
  list-style-type: none;
  margin-left: var(--fa-li-margin, 2.5em);
  padding-left: 0;
}
.fa-ul > li {
  position: relative;
}

.fa-li {
  left: calc(var(--fa-li-width, 2em) * -1);
  position: absolute;
  text-align: center;
  width: var(--fa-li-width, 2em);
  line-height: inherit;
}

.fa-border {
  border-color: var(--fa-border-color, #eee);
  border-radius: var(--fa-border-radius, 0.1em);
  border-style: var(--fa-border-style, solid);
  border-width: var(--fa-border-width, 0.08em);
  padding: var(--fa-border-padding, 0.2em 0.25em 0.15em);
}

.fa-pull-left {
  float: left;
  margin-right: var(--fa-pull-margin, 0.3em);
}

.fa-pull-right {
  float: right;
  margin-left: var(--fa-pull-margin, 0.3em);
}

.fa-beat {
  -webkit-animation-name: fa-beat;
          animation-name: fa-beat;
  -webkit-animation-delay: var(--fa-animation-delay, 0s);
          animation-delay: var(--fa-animation-delay, 0s);
  -webkit-animation-direction: var(--fa-animation-direction, normal);
          animation-direction: var(--fa-animation-direction, normal);
  -webkit-animation-duration: var(--fa-animation-duration, 1s);
          animation-duration: var(--fa-animation-duration, 1s);
  -webkit-animation-iteration-count: var(--fa-animation-iteration-count, infinite);
          animation-iteration-count: var(--fa-animation-iteration-count, infinite);
  -webkit-animation-timing-function: var(--fa-animation-timing, ease-in-out);
          animation-timing-function: var(--fa-animation-timing, ease-in-out);
}

.fa-bounce {
  -webkit-animation-name: fa-bounce;
          animation-name: fa-bounce;
  -webkit-animation-delay: var(--fa-animation-delay, 0s);
          animation-delay: var(--fa-animation-delay, 0s);
  -webkit-animation-direction: var(--fa-animation-direction, normal);
          animation-direction: var(--fa-animation-direction, normal);
  -webkit-animation-duration: var(--fa-animation-duration, 1s);
          animation-duration: var(--fa-animation-duration, 1s);
  -webkit-animation-iteration-count: var(--fa-animation-iteration-count, infinite);
          animation-iteration-count: var(--fa-animation-iteration-count, infinite);
  -webkit-animation-timing-function: var(--fa-animation-timing, cubic-bezier(0.28, 0.84, 0.42, 1));
          animation-timing-function: var(--fa-animation-timing, cubic-bezier(0.28, 0.84, 0.42, 1));
}

.fa-fade {
  -webkit-animation-name: fa-fade;
          animation-name: fa-fade;
  -webkit-animation-delay: var(--fa-animation-delay, 0s);
          animation-delay: var(--fa-animation-delay, 0s);
  -webkit-animation-direction: var(--fa-animation-direction, normal);
          animation-direction: var(--fa-animation-direction, normal);
  -webkit-animation-duration: var(--fa-animation-duration, 1s);
          animation-duration: var(--fa-animation-duration, 1s);
  -webkit-animation-iteration-count: var(--fa-animation-iteration-count, infinite);
          animation-iteration-count: var(--fa-animation-iteration-count, infinite);
  -webkit-animation-timing-function: var(--fa-animation-timing, cubic-bezier(0.4, 0, 0.6, 1));
          animation-timing-function: var(--fa-animation-timing, cubic-bezier(0.4, 0, 0.6, 1));
}

.fa-beat-fade {
  -webkit-animation-name: fa-beat-fade;
          animation-name: fa-beat-fade;
  -webkit-animation-delay: var(--fa-animation-delay, 0s);
          animation-delay: var(--fa-animation-delay, 0s);
  -webkit-animation-direction: var(--fa-animation-direction, normal);
          animation-direction: var(--fa-animation-direction, normal);
  -webkit-animation-duration: var(--fa-animation-duration, 1s);
          animation-duration: var(--fa-animation-duration, 1s);
  -webkit-animation-iteration-count: var(--fa-animation-iteration-count, infinite);
          animation-iteration-count: var(--fa-animation-iteration-count, infinite);
  -webkit-animation-timing-function: var(--fa-animation-timing, cubic-bezier(0.4, 0, 0.6, 1));
          animation-timing-function: var(--fa-animation-timing, cubic-bezier(0.4, 0, 0.6, 1));
}

.fa-flip {
  -webkit-animation-name: fa-flip;
          animation-name: fa-flip;
  -webkit-animation-delay: var(--fa-animation-delay, 0s);
          animation-delay: var(--fa-animation-delay, 0s);
  -webkit-animation-direction: var(--fa-animation-direction, normal);
          animation-direction: var(--fa-animation-direction, normal);
  -webkit-animation-duration: var(--fa-animation-duration, 1s);
          animation-duration: var(--fa-animation-duration, 1s);
  -webkit-animation-iteration-count: var(--fa-animation-iteration-count, infinite);
          animation-iteration-count: var(--fa-animation-iteration-count, infinite);
  -webkit-animation-timing-function: var(--fa-animation-timing, ease-in-out);
          animation-timing-function: var(--fa-animation-timing, ease-in-out);
}

.fa-shake {
  -webkit-animation-name: fa-shake;
          animation-name: fa-shake;
  -webkit-animation-delay: var(--fa-animation-delay, 0s);
          animation-delay: var(--fa-animation-delay, 0s);
  -webkit-animation-direction: var(--fa-animation-direction, normal);
          animation-direction: var(--fa-animation-direction, normal);
  -webkit-animation-duration: var(--fa-animation-duration, 1s);
          animation-duration: var(--fa-animation-duration, 1s);
  -webkit-animation-iteration-count: var(--fa-animation-iteration-count, infinite);
          animation-iteration-count: var(--fa-animation-iteration-count, infinite);
  -webkit-animation-timing-function: var(--fa-animation-timing, linear);
          animation-timing-function: var(--fa-animation-timing, linear);
}

.fa-spin {
  -webkit-animation-name: fa-spin;
          animation-name: fa-spin;
  -webkit-animation-delay: var(--fa-animation-delay, 0s);
          animation-delay: var(--fa-animation-delay, 0s);
  -webkit-animation-direction: var(--fa-animation-direction, normal);
          animation-direction: var(--fa-animation-direction, normal);
  -webkit-animation-duration: var(--fa-animation-duration, 2s);
          animation-duration: var(--fa-animation-duration, 2s);
  -webkit-animation-iteration-count: var(--fa-animation-iteration-count, infinite);
          animation-iteration-count: var(--fa-animation-iteration-count, infinite);
  -webkit-animation-timing-function: var(--fa-animation-timing, linear);
          animation-timing-function: var(--fa-animation-timing, linear);
}

.fa-spin-reverse {
  --fa-animation-direction: reverse;
}

.fa-pulse,
.fa-spin-pulse {
  -webkit-animation-name: fa-spin;
          animation-name: fa-spin;
  -webkit-animation-direction: var(--fa-animation-direction, normal);
          animation-direction: var(--fa-animation-direction, normal);
  -webkit-animation-duration: var(--fa-animation-duration, 1s);
          animation-duration: var(--fa-animation-duration, 1s);
  -webkit-animation-iteration-count: var(--fa-animation-iteration-count, infinite);
          animation-iteration-count: var(--fa-animation-iteration-count, infinite);
  -webkit-animation-timing-function: var(--fa-animation-timing, steps(8));
          animation-timing-function: var(--fa-animation-timing, steps(8));
}

@media (prefers-reduced-motion: reduce) {
  .fa-beat,
.fa-bounce,
.fa-fade,
.fa-beat-fade,
.fa-flip,
.fa-pulse,
.fa-shake,
.fa-spin,
.fa-spin-pulse {
    -webkit-animation-delay: -1ms;
            animation-delay: -1ms;
    -webkit-animation-duration: 1ms;
            animation-duration: 1ms;
    -webkit-animation-iteration-count: 1;
            animation-iteration-count: 1;
    -webkit-transition-delay: 0s;
            transition-delay: 0s;
    -webkit-transition-duration: 0s;
            transition-duration: 0s;
  }
}
@-webkit-keyframes fa-beat {
  0%, 90% {
    -webkit-transform: scale(1);
            transform: scale(1);
  }
  45% {
    -webkit-transform: scale(var(--fa-beat-scale, 1.25));
            transform: scale(var(--fa-beat-scale, 1.25));
  }
}
@keyframes fa-beat {
  0%, 90% {
    -webkit-transform: scale(1);
            transform: scale(1);
  }
  45% {
    -webkit-transform: scale(var(--fa-beat-scale, 1.25));
            transform: scale(var(--fa-beat-scale, 1.25));
  }
}
@-webkit-keyframes fa-bounce {
  0% {
    -webkit-transform: scale(1, 1) translateY(0);
            transform: scale(1, 1) translateY(0);
  }
  10% {
    -webkit-transform: scale(var(--fa-bounce-start-scale-x, 1.1), var(--fa-bounce-start-scale-y, 0.9)) translateY(0);
            transform: scale(var(--fa-bounce-start-scale-x, 1.1), var(--fa-bounce-start-scale-y, 0.9)) translateY(0);
  }
  30% {
    -webkit-transform: scale(var(--fa-bounce-jump-scale-x, 0.9), var(--fa-bounce-jump-scale-y, 1.1)) translateY(var(--fa-bounce-height, -0.5em));
            transform: scale(var(--fa-bounce-jump-scale-x, 0.9), var(--fa-bounce-jump-scale-y, 1.1)) translateY(var(--fa-bounce-height, -0.5em));
  }
  50% {
    -webkit-transform: scale(var(--fa-bounce-land-scale-x, 1.05), var(--fa-bounce-land-scale-y, 0.95)) translateY(0);
            transform: scale(var(--fa-bounce-land-scale-x, 1.05), var(--fa-bounce-land-scale-y, 0.95)) translateY(0);
  }
  57% {
    -webkit-transform: scale(1, 1) translateY(var(--fa-bounce-rebound, -0.125em));
            transform: scale(1, 1) translateY(var(--fa-bounce-rebound, -0.125em));
  }
  64% {
    -webkit-transform: scale(1, 1) translateY(0);
            transform: scale(1, 1) translateY(0);
  }
  100% {
    -webkit-transform: scale(1, 1) translateY(0);
            transform: scale(1, 1) translateY(0);
  }
}
@keyframes fa-bounce {
  0% {
    -webkit-transform: scale(1, 1) translateY(0);
            transform: scale(1, 1) translateY(0);
  }
  10% {
    -webkit-transform: scale(var(--fa-bounce-start-scale-x, 1.1), var(--fa-bounce-start-scale-y, 0.9)) translateY(0);
            transform: scale(var(--fa-bounce-start-scale-x, 1.1), var(--fa-bounce-start-scale-y, 0.9)) translateY(0);
  }
  30% {
    -webkit-transform: scale(var(--fa-bounce-jump-scale-x, 0.9), var(--fa-bounce-jump-scale-y, 1.1)) translateY(var(--fa-bounce-height, -0.5em));
            transform: scale(var(--fa-bounce-jump-scale-x, 0.9), var(--fa-bounce-jump-scale-y, 1.1)) translateY(var(--fa-bounce-height, -0.5em));
  }
  50% {
    -webkit-transform: scale(var(--fa-bounce-land-scale-x, 1.05), var(--fa-bounce-land-scale-y, 0.95)) translateY(0);
            transform: scale(var(--fa-bounce-land-scale-x, 1.05), var(--fa-bounce-land-scale-y, 0.95)) translateY(0);
  }
  57% {
    -webkit-transform: scale(1, 1) translateY(var(--fa-bounce-rebound, -0.125em));
            transform: scale(1, 1) translateY(var(--fa-bounce-rebound, -0.125em));
  }
  64% {
    -webkit-transform: scale(1, 1) translateY(0);
            transform: scale(1, 1) translateY(0);
  }
  100% {
    -webkit-transform: scale(1, 1) translateY(0);
            transform: scale(1, 1) translateY(0);
  }
}
@-webkit-keyframes fa-fade {
  50% {
    opacity: var(--fa-fade-opacity, 0.4);
  }
}
@keyframes fa-fade {
  50% {
    opacity: var(--fa-fade-opacity, 0.4);
  }
}
@-webkit-keyframes fa-beat-fade {
  0%, 100% {
    opacity: var(--fa-beat-fade-opacity, 0.4);
    -webkit-transform: scale(1);
            transform: scale(1);
  }
  50% {
    opacity: 1;
    -webkit-transform: scale(var(--fa-beat-fade-scale, 1.125));
            transform: scale(var(--fa-beat-fade-scale, 1.125));
  }
}
@keyframes fa-beat-fade {
  0%, 100% {
    opacity: var(--fa-beat-fade-opacity, 0.4);
    -webkit-transform: scale(1);
            transform: scale(1);
  }
  50% {
    opacity: 1;
    -webkit-transform: scale(var(--fa-beat-fade-scale, 1.125));
            transform: scale(var(--fa-beat-fade-scale, 1.125));
  }
}
@-webkit-keyframes fa-flip {
  50% {
    -webkit-transform: rotate3d(var(--fa-flip-x, 0), var(--fa-flip-y, 1), var(--fa-flip-z, 0), var(--fa-flip-angle, -180deg));
            transform: rotate3d(var(--fa-flip-x, 0), var(--fa-flip-y, 1), var(--fa-flip-z, 0), var(--fa-flip-angle, -180deg));
  }
}
@keyframes fa-flip {
  50% {
    -webkit-transform: rotate3d(var(--fa-flip-x, 0), var(--fa-flip-y, 1), var(--fa-flip-z, 0), var(--fa-flip-angle, -180deg));
            transform: rotate3d(var(--fa-flip-x, 0), var(--fa-flip-y, 1), var(--fa-flip-z, 0), var(--fa-flip-angle, -180deg));
  }
}
@-webkit-keyframes fa-shake {
  0% {
    -webkit-transform: rotate(-15deg);
            transform: rotate(-15deg);
  }
  4% {
    -webkit-transform: rotate(15deg);
            transform: rotate(15deg);
  }
  8%, 24% {
    -webkit-transform: rotate(-18deg);
            transform: rotate(-18deg);
  }
  12%, 28% {
    -webkit-transform: rotate(18deg);
            transform: rotate(18deg);
  }
  16% {
    -webkit-transform: rotate(-22deg);
            transform: rotate(-22deg);
  }
  20% {
    -webkit-transform: rotate(22deg);
            transform: rotate(22deg);
  }
  32% {
    -webkit-transform: rotate(-12deg);
            transform: rotate(-12deg);
  }
  36% {
    -webkit-transform: rotate(12deg);
            transform: rotate(12deg);
  }
  40%, 100% {
    -webkit-transform: rotate(0deg);
            transform: rotate(0deg);
  }
}
@keyframes fa-shake {
  0% {
    -webkit-transform: rotate(-15deg);
            transform: rotate(-15deg);
  }
  4% {
    -webkit-transform: rotate(15deg);
            transform: rotate(15deg);
  }
  8%, 24% {
    -webkit-transform: rotate(-18deg);
            transform: rotate(-18deg);
  }
  12%, 28% {
    -webkit-transform: rotate(18deg);
            transform: rotate(18deg);
  }
  16% {
    -webkit-transform: rotate(-22deg);
            transform: rotate(-22deg);
  }
  20% {
    -webkit-transform: rotate(22deg);
            transform: rotate(22deg);
  }
  32% {
    -webkit-transform: rotate(-12deg);
            transform: rotate(-12deg);
  }
  36% {
    -webkit-transform: rotate(12deg);
            transform: rotate(12deg);
  }
  40%, 100% {
    -webkit-transform: rotate(0deg);
            transform: rotate(0deg);
  }
}
@-webkit-keyframes fa-spin {
  0% {
    -webkit-transform: rotate(0deg);
            transform: rotate(0deg);
  }
  100% {
    -webkit-transform: rotate(360deg);
            transform: rotate(360deg);
  }
}
@keyframes fa-spin {
  0% {
    -webkit-transform: rotate(0deg);
            transform: rotate(0deg);
  }
  100% {
    -webkit-transform: rotate(360deg);
            transform: rotate(360deg);
  }
}
.fa-rotate-90 {
  -webkit-transform: rotate(90deg);
          transform: rotate(90deg);
}

.fa-rotate-180 {
  -webkit-transform: rotate(180deg);
          transform: rotate(180deg);
}

.fa-rotate-270 {
  -webkit-transform: rotate(270deg);
          transform: rotate(270deg);
}

.fa-flip-horizontal {
  -webkit-transform: scale(-1, 1);
          transform: scale(-1, 1);
}

.fa-flip-vertical {
  -webkit-transform: scale(1, -1);
          transform: scale(1, -1);
}

.fa-flip-both,
.fa-flip-horizontal.fa-flip-vertical {
  -webkit-transform: scale(-1, -1);
          transform: scale(-1, -1);
}

.fa-rotate-by {
  -webkit-transform: rotate(var(--fa-rotate-angle, none));
          transform: rotate(var(--fa-rotate-angle, none));
}

.fa-stack {
  display: inline-block;
  vertical-align: middle;
  height: 2em;
  position: relative;
  width: 2.5em;
}

.fa-stack-1x,
.fa-stack-2x {
  bottom: 0;
  left: 0;
  margin: auto;
  position: absolute;
  right: 0;
  top: 0;
  z-index: var(--fa-stack-z-index, auto);
}

.svg-inline--fa.fa-stack-1x {
  height: 1em;
  width: 1.25em;
}
.svg-inline--fa.fa-stack-2x {
  height: 2em;
  width: 2.5em;
}

.fa-inverse {
  color: var(--fa-inverse, #fff);
}

.sr-only,
.fa-sr-only {
  position: absolute;
  width: 1px;
  height: 1px;
  padding: 0;
  margin: -1px;
  overflow: hidden;
  clip: rect(0, 0, 0, 0);
  white-space: nowrap;
  border-width: 0;
}

.sr-only-focusable:not(:focus),
.fa-sr-only-focusable:not(:focus) {
  position: absolute;
  width: 1px;
  height: 1px;
  padding: 0;
  margin: -1px;
  overflow: hidden;
  clip: rect(0, 0, 0, 0);
  white-space: nowrap;
  border-width: 0;
}

.svg-inline--fa .fa-primary {
  fill: var(--fa-primary-color, currentColor);
  opacity: var(--fa-primary-opacity, 1);
}

.svg-inline--fa .fa-secondary {
  fill: var(--fa-secondary-color, currentColor);
  opacity: var(--fa-secondary-opacity, 0.4);
}

.svg-inline--fa.fa-swap-opacity .fa-primary {
  opacity: var(--fa-secondary-opacity, 0.4);
}

.svg-inline--fa.fa-swap-opacity .fa-secondary {
  opacity: var(--fa-primary-opacity, 1);
}

.svg-inline--fa mask .fa-primary,
.svg-inline--fa mask .fa-secondary {
  fill: black;
}

.fad.fa-inverse,
.fa-duotone.fa-inverse {
  color: var(--fa-inverse, #fff);
}`;function BS(){var t=MS,e=VS,n=M.cssPrefix,r=M.replacementClass,i=QM;if(n!==t||r!==e){var s=new RegExp("\\.".concat(t,"\\-"),"g"),o=new RegExp("\\--".concat(t,"\\-"),"g"),a=new RegExp("\\.".concat(e),"g");i=i.replace(s,".".concat(n,"-")).replace(o,"--".concat(n,"-")).replace(a,".".concat(r))}return i}var u0=!1;function kh(){M.autoAddCss&&!u0&&(HM(BS()),u0=!0)}var YM={mixout:function(){return{dom:{css:BS,insertCss:kh}}},hooks:function(){return{beforeDOMElementCreation:function(){kh()},beforeI2svg:function(){kh()}}}},Rn=wr||{};Rn[Cn]||(Rn[Cn]={});Rn[Cn].styles||(Rn[Cn].styles={});Rn[Cn].hooks||(Rn[Cn].hooks={});Rn[Cn].shims||(Rn[Cn].shims=[]);var $t=Rn[Cn],HS=[],XM=function t(){ue.removeEventListener("DOMContentLoaded",t),ac=1,HS.map(function(e){return e()})},ac=!1;Dn&&(ac=(ue.documentElement.doScroll?/^loaded|^c/:/^loaded|^i|^c/).test(ue.readyState),ac||ue.addEventListener("DOMContentLoaded",XM));function JM(t){Dn&&(ac?setTimeout(t,0):HS.push(t))}function Ha(t){var e=t.tag,n=t.attributes,r=n===void 0?{}:n,i=t.children,s=i===void 0?[]:i;return typeof t=="string"?zS(t):"<".concat(e," ").concat(qM(r),">").concat(s.map(Ha).join(""),"</").concat(e,">")}function c0(t,e,n){if(t&&t[e]&&t[e][n])return{prefix:e,iconName:n,icon:t[e][n]}}var ZM=function(e,n){return function(r,i,s,o){return e.call(n,r,i,s,o)}},Ph=function(e,n,r,i){var s=Object.keys(e),o=s.length,a=i!==void 0?ZM(n,i):n,l,u,c;for(r===void 0?(l=1,c=e[s[0]]):(l=0,c=r);l<o;l++)u=s[l],c=a(c,e[u],u,e);return c};function eV(t){for(var e=[],n=0,r=t.length;n<r;){var i=t.charCodeAt(n++);if(i>=55296&&i<=56319&&n<r){var s=t.charCodeAt(n++);(s&64512)==56320?e.push(((i&1023)<<10)+(s&1023)+65536):(e.push(i),n--)}else e.push(i)}return e}function mp(t){var e=eV(t);return e.length===1?e[0].toString(16):null}function tV(t,e){var n=t.length,r=t.charCodeAt(e),i;return r>=55296&&r<=56319&&n>e+1&&(i=t.charCodeAt(e+1),i>=56320&&i<=57343)?(r-55296)*1024+i-56320+65536:r}function f0(t){return Object.keys(t).reduce(function(e,n){var r=t[n],i=!!r.icon;return i?e[r.iconName]=r.icon:e[n]=r,e},{})}function gp(t,e){var n=arguments.length>2&&arguments[2]!==void 0?arguments[2]:{},r=n.skipHooks,i=r===void 0?!1:r,s=f0(e);typeof $t.hooks.addPack=="function"&&!i?$t.hooks.addPack(t,f0(e)):$t.styles[t]=O(O({},$t.styles[t]||{}),s),t==="fas"&&gp("fa",e)}var Ll,Ml,Vl,ji=$t.styles,nV=$t.shims,rV=(Ll={},De(Ll,se,Object.values(ha[se])),De(Ll,we,Object.values(ha[we])),Ll),Zg=null,WS={},qS={},KS={},GS={},QS={},iV=(Ml={},De(Ml,se,Object.keys(ca[se])),De(Ml,we,Object.keys(ca[we])),Ml);function sV(t){return~$M.indexOf(t)}function oV(t,e){var n=e.split("-"),r=n[0],i=n.slice(1).join("-");return r===t&&i!==""&&!sV(i)?i:null}var YS=function(){var e=function(s){return Ph(ji,function(o,a,l){return o[l]=Ph(a,s,{}),o},{})};WS=e(function(i,s,o){if(s[3]&&(i[s[3]]=o),s[2]){var a=s[2].filter(function(l){return typeof l=="number"});a.forEach(function(l){i[l.toString(16)]=o})}return i}),qS=e(function(i,s,o){if(i[o]=o,s[2]){var a=s[2].filter(function(l){return typeof l=="string"});a.forEach(function(l){i[l]=o})}return i}),QS=e(function(i,s,o){var a=s[2];return i[o]=o,a.forEach(function(l){i[l]=o}),i});var n="far"in ji||M.autoFetchSvg,r=Ph(nV,function(i,s){var o=s[0],a=s[1],l=s[2];return a==="far"&&!n&&(a="fas"),typeof o=="string"&&(i.names[o]={prefix:a,iconName:l}),typeof o=="number"&&(i.unicodes[o.toString(16)]={prefix:a,iconName:l}),i},{names:{},unicodes:{}});KS=r.names,GS=r.unicodes,Zg=Ef(M.styleDefault,{family:M.familyDefault})};BM(function(t){Zg=Ef(t.styleDefault,{family:M.familyDefault})});YS();function ev(t,e){return(WS[t]||{})[e]}function aV(t,e){return(qS[t]||{})[e]}function Yr(t,e){return(QS[t]||{})[e]}function XS(t){return KS[t]||{prefix:null,iconName:null}}function lV(t){var e=GS[t],n=ev("fas",t);return e||(n?{prefix:"fas",iconName:n}:null)||{prefix:null,iconName:null}}function Er(){return Zg}var tv=function(){return{prefix:null,iconName:null,rest:[]}};function Ef(t){var e=arguments.length>1&&arguments[1]!==void 0?arguments[1]:{},n=e.family,r=n===void 0?se:n,i=ca[r][t],s=fa[r][t]||fa[r][i],o=t in $t.styles?t:null;return s||o||null}var h0=(Vl={},De(Vl,se,Object.keys(ha[se])),De(Vl,we,Object.keys(ha[we])),Vl);function Tf(t){var e,n=arguments.length>1&&arguments[1]!==void 0?arguments[1]:{},r=n.skipLookups,i=r===void 0?!1:r,s=(e={},De(e,se,"".concat(M.cssPrefix,"-").concat(se)),De(e,we,"".concat(M.cssPrefix,"-").concat(we)),e),o=null,a=se;(t.includes(s[se])||t.some(function(u){return h0[se].includes(u)}))&&(a=se),(t.includes(s[we])||t.some(function(u){return h0[we].includes(u)}))&&(a=we);var l=t.reduce(function(u,c){var f=oV(M.cssPrefix,c);if(ji[c]?(c=rV[a].includes(c)?OM[a][c]:c,o=c,u.prefix=c):iV[a].indexOf(c)>-1?(o=c,u.prefix=Ef(c,{family:a})):f?u.iconName=f:c!==M.replacementClass&&c!==s[se]&&c!==s[we]&&u.rest.push(c),!i&&u.prefix&&u.iconName){var h=o==="fa"?XS(u.iconName):{},p=Yr(u.prefix,u.iconName);h.prefix&&(o=null),u.iconName=h.iconName||p||u.iconName,u.prefix=h.prefix||u.prefix,u.prefix==="far"&&!ji.far&&ji.fas&&!M.autoFetchSvg&&(u.prefix="fas")}return u},tv());return(t.includes("fa-brands")||t.includes("fab"))&&(l.prefix="fab"),(t.includes("fa-duotone")||t.includes("fad"))&&(l.prefix="fad"),!l.prefix&&a===we&&(ji.fass||M.autoFetchSvg)&&(l.prefix="fass",l.iconName=Yr(l.prefix,l.iconName)||l.iconName),(l.prefix==="fa"||o==="fa")&&(l.prefix=Er()||"fas"),l}var uV=function(){function t(){EM(this,t),this.definitions={}}return TM(t,[{key:"add",value:function(){for(var n=this,r=arguments.length,i=new Array(r),s=0;s<r;s++)i[s]=arguments[s];var o=i.reduce(this._pullDefinitions,{});Object.keys(o).forEach(function(a){n.definitions[a]=O(O({},n.definitions[a]||{}),o[a]),gp(a,o[a]);var l=ha[se][a];l&&gp(l,o[a]),YS()})}},{key:"reset",value:function(){this.definitions={}}},{key:"_pullDefinitions",value:function(n,r){var i=r.prefix&&r.iconName&&r.icon?{0:r}:r;return Object.keys(i).map(function(s){var o=i[s],a=o.prefix,l=o.iconName,u=o.icon,c=u[2];n[a]||(n[a]={}),c.length>0&&c.forEach(function(f){typeof f=="string"&&(n[a][f]=u)}),n[a][l]=u}),n}}]),t}(),d0=[],zi={},ts={},cV=Object.keys(ts);function fV(t,e){var n=e.mixoutsTo;return d0=t,zi={},Object.keys(ts).forEach(function(r){cV.indexOf(r)===-1&&delete ts[r]}),d0.forEach(function(r){var i=r.mixout?r.mixout():{};if(Object.keys(i).forEach(function(o){typeof i[o]=="function"&&(n[o]=i[o]),oc(i[o])==="object"&&Object.keys(i[o]).forEach(function(a){n[o]||(n[o]={}),n[o][a]=i[o][a]})}),r.hooks){var s=r.hooks();Object.keys(s).forEach(function(o){zi[o]||(zi[o]=[]),zi[o].push(s[o])})}r.provides&&r.provides(ts)}),n}function vp(t,e){for(var n=arguments.length,r=new Array(n>2?n-2:0),i=2;i<n;i++)r[i-2]=arguments[i];var s=zi[t]||[];return s.forEach(function(o){e=o.apply(null,[e].concat(r))}),e}function pi(t){for(var e=arguments.length,n=new Array(e>1?e-1:0),r=1;r<e;r++)n[r-1]=arguments[r];var i=zi[t]||[];i.forEach(function(s){s.apply(null,n)})}function bn(){var t=arguments[0],e=Array.prototype.slice.call(arguments,1);return ts[t]?ts[t].apply(null,e):void 0}function yp(t){t.prefix==="fa"&&(t.prefix="fas");var e=t.iconName,n=t.prefix||Er();if(e)return e=Yr(n,e)||e,c0(JS.definitions,n,e)||c0($t.styles,n,e)}var JS=new uV,hV=function(){M.autoReplaceSvg=!1,M.observeMutations=!1,pi("noAuto")},dV={i2svg:function(){var e=arguments.length>0&&arguments[0]!==void 0?arguments[0]:{};return Dn?(pi("beforeI2svg",e),bn("pseudoElements2svg",e),bn("i2svg",e)):Promise.reject("Operation requires a DOM of some kind.")},watch:function(){var e=arguments.length>0&&arguments[0]!==void 0?arguments[0]:{},n=e.autoReplaceSvgRoot;M.autoReplaceSvg===!1&&(M.autoReplaceSvg=!0),M.observeMutations=!0,JM(function(){mV({autoReplaceSvgRoot:n}),pi("watch",e)})}},pV={icon:function(e){if(e===null)return null;if(oc(e)==="object"&&e.prefix&&e.iconName)return{prefix:e.prefix,iconName:Yr(e.prefix,e.iconName)||e.iconName};if(Array.isArray(e)&&e.length===2){var n=e[1].indexOf("fa-")===0?e[1].slice(3):e[1],r=Ef(e[0]);return{prefix:r,iconName:Yr(r,n)||n}}if(typeof e=="string"&&(e.indexOf("".concat(M.cssPrefix,"-"))>-1||e.match(DM))){var i=Tf(e.split(" "),{skipLookups:!0});return{prefix:i.prefix||Er(),iconName:Yr(i.prefix,i.iconName)||i.iconName}}if(typeof e=="string"){var s=Er();return{prefix:s,iconName:Yr(s,e)||e}}}},Pt={noAuto:hV,config:M,dom:dV,parse:pV,library:JS,findIconDefinition:yp,toHtml:Ha},mV=function(){var e=arguments.length>0&&arguments[0]!==void 0?arguments[0]:{},n=e.autoReplaceSvgRoot,r=n===void 0?ue:n;(Object.keys($t.styles).length>0||M.autoFetchSvg)&&Dn&&M.autoReplaceSvg&&Pt.dom.i2svg({node:r})};function If(t,e){return Object.defineProperty(t,"abstract",{get:e}),Object.defineProperty(t,"html",{get:function(){return t.abstract.map(function(r){return Ha(r)})}}),Object.defineProperty(t,"node",{get:function(){if(Dn){var r=ue.createElement("div");return r.innerHTML=t.html,r.children}}}),t}function gV(t){var e=t.children,n=t.main,r=t.mask,i=t.attributes,s=t.styles,o=t.transform;if(Jg(o)&&n.found&&!r.found){var a=n.width,l=n.height,u={x:a/l/2,y:.5};i.style=wf(O(O({},s),{},{"transform-origin":"".concat(u.x+o.x/16,"em ").concat(u.y+o.y/16,"em")}))}return[{tag:"svg",attributes:i,children:e}]}function vV(t){var e=t.prefix,n=t.iconName,r=t.children,i=t.attributes,s=t.symbol,o=s===!0?"".concat(e,"-").concat(M.cssPrefix,"-").concat(n):s;return[{tag:"svg",attributes:{style:"display: none;"},children:[{tag:"symbol",attributes:O(O({},i),{},{id:o}),children:r}]}]}function nv(t){var e=t.icons,n=e.main,r=e.mask,i=t.prefix,s=t.iconName,o=t.transform,a=t.symbol,l=t.title,u=t.maskId,c=t.titleId,f=t.extra,h=t.watchable,p=h===void 0?!1:h,y=r.found?r:n,_=y.width,w=y.height,m=i==="fak",d=[M.replacementClass,s?"".concat(M.cssPrefix,"-").concat(s):""].filter(function(B){return f.classes.indexOf(B)===-1}).filter(function(B){return B!==""||!!B}).concat(f.classes).join(" "),g={children:[],attributes:O(O({},f.attributes),{},{"data-prefix":i,"data-icon":s,class:d,role:f.attributes.role||"img",xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 ".concat(_," ").concat(w)})},E=m&&!~f.classes.indexOf("fa-fw")?{width:"".concat(_/w*16*.0625,"em")}:{};p&&(g.attributes[di]=""),l&&(g.children.push({tag:"title",attributes:{id:g.attributes["aria-labelledby"]||"title-".concat(c||pa())},children:[l]}),delete g.attributes.title);var I=O(O({},g),{},{prefix:i,iconName:s,main:n,mask:r,maskId:u,transform:o,symbol:a,styles:O(O({},E),f.styles)}),k=r.found&&n.found?bn("generateAbstractMask",I)||{children:[],attributes:{}}:bn("generateAbstractIcon",I)||{children:[],attributes:{}},C=k.children,N=k.attributes;return I.children=C,I.attributes=N,a?vV(I):gV(I)}function p0(t){var e=t.content,n=t.width,r=t.height,i=t.transform,s=t.title,o=t.extra,a=t.watchable,l=a===void 0?!1:a,u=O(O(O({},o.attributes),s?{title:s}:{}),{},{class:o.classes.join(" ")});l&&(u[di]="");var c=O({},o.styles);Jg(i)&&(c.transform=GM({transform:i,startCentered:!0,width:n,height:r}),c["-webkit-transform"]=c.transform);var f=wf(c);f.length>0&&(u.style=f);var h=[];return h.push({tag:"span",attributes:u,children:[e]}),s&&h.push({tag:"span",attributes:{class:"sr-only"},children:[s]}),h}function yV(t){var e=t.content,n=t.title,r=t.extra,i=O(O(O({},r.attributes),n?{title:n}:{}),{},{class:r.classes.join(" ")}),s=wf(r.styles);s.length>0&&(i.style=s);var o=[];return o.push({tag:"span",attributes:i,children:[e]}),n&&o.push({tag:"span",attributes:{class:"sr-only"},children:[n]}),o}var Ch=$t.styles;function _p(t){var e=t[0],n=t[1],r=t.slice(4),i=qg(r,1),s=i[0],o=null;return Array.isArray(s)?o={tag:"g",attributes:{class:"".concat(M.cssPrefix,"-").concat(Qr.GROUP)},children:[{tag:"path",attributes:{class:"".concat(M.cssPrefix,"-").concat(Qr.SECONDARY),fill:"currentColor",d:s[0]}},{tag:"path",attributes:{class:"".concat(M.cssPrefix,"-").concat(Qr.PRIMARY),fill:"currentColor",d:s[1]}}]}:o={tag:"path",attributes:{fill:"currentColor",d:s}},{found:!0,width:e,height:n,icon:o}}var _V={found:!1,width:512,height:512};function wV(t,e){!FS&&!M.showMissingIcons&&t&&console.error('Icon with name "'.concat(t,'" and prefix "').concat(e,'" is missing.'))}function wp(t,e){var n=e;return e==="fa"&&M.styleDefault!==null&&(e=Er()),new Promise(function(r,i){if(bn("missingIconAbstract"),n==="fa"){var s=XS(t)||{};t=s.iconName||t,e=s.prefix||e}if(t&&e&&Ch[e]&&Ch[e][t]){var o=Ch[e][t];return r(_p(o))}wV(t,e),r(O(O({},_V),{},{icon:M.showMissingIcons&&t?bn("missingIconAbstract")||{}:{}}))})}var m0=function(){},Ep=M.measurePerformance&&Rl&&Rl.mark&&Rl.measure?Rl:{mark:m0,measure:m0},io='FA "6.5.1"',EV=function(e){return Ep.mark("".concat(io," ").concat(e," begins")),function(){return ZS(e)}},ZS=function(e){Ep.mark("".concat(io," ").concat(e," ends")),Ep.measure("".concat(io," ").concat(e),"".concat(io," ").concat(e," begins"),"".concat(io," ").concat(e," ends"))},rv={begin:EV,end:ZS},uu=function(){};function g0(t){var e=t.getAttribute?t.getAttribute(di):null;return typeof e=="string"}function TV(t){var e=t.getAttribute?t.getAttribute(Gg):null,n=t.getAttribute?t.getAttribute(Qg):null;return e&&n}function IV(t){return t&&t.classList&&t.classList.contains&&t.classList.contains(M.replacementClass)}function SV(){if(M.autoReplaceSvg===!0)return cu.replace;var t=cu[M.autoReplaceSvg];return t||cu.replace}function AV(t){return ue.createElementNS("http://www.w3.org/2000/svg",t)}function kV(t){return ue.createElement(t)}function eA(t){var e=arguments.length>1&&arguments[1]!==void 0?arguments[1]:{},n=e.ceFn,r=n===void 0?t.tag==="svg"?AV:kV:n;if(typeof t=="string")return ue.createTextNode(t);var i=r(t.tag);Object.keys(t.attributes||[]).forEach(function(o){i.setAttribute(o,t.attributes[o])});var s=t.children||[];return s.forEach(function(o){i.appendChild(eA(o,{ceFn:r}))}),i}function PV(t){var e=" ".concat(t.outerHTML," ");return e="".concat(e,"Font Awesome fontawesome.com "),e}var cu={replace:function(e){var n=e[0];if(n.parentNode)if(e[1].forEach(function(i){n.parentNode.insertBefore(eA(i),n)}),n.getAttribute(di)===null&&M.keepOriginalSource){var r=ue.createComment(PV(n));n.parentNode.replaceChild(r,n)}else n.remove()},nest:function(e){var n=e[0],r=e[1];if(~Xg(n).indexOf(M.replacementClass))return cu.replace(e);var i=new RegExp("".concat(M.cssPrefix,"-.*"));if(delete r[0].attributes.id,r[0].attributes.class){var s=r[0].attributes.class.split(" ").reduce(function(a,l){return l===M.replacementClass||l.match(i)?a.toSvg.push(l):a.toNode.push(l),a},{toNode:[],toSvg:[]});r[0].attributes.class=s.toSvg.join(" "),s.toNode.length===0?n.removeAttribute("class"):n.setAttribute("class",s.toNode.join(" "))}var o=r.map(function(a){return Ha(a)}).join(`
`);n.setAttribute(di,""),n.innerHTML=o}};function v0(t){t()}function tA(t,e){var n=typeof e=="function"?e:uu;if(t.length===0)n();else{var r=v0;M.mutateApproach===xM&&(r=wr.requestAnimationFrame||v0),r(function(){var i=SV(),s=rv.begin("mutate");t.map(i),s(),n()})}}var iv=!1;function nA(){iv=!0}function Tp(){iv=!1}var lc=null;function y0(t){if(a0&&M.observeMutations){var e=t.treeCallback,n=e===void 0?uu:e,r=t.nodeCallback,i=r===void 0?uu:r,s=t.pseudoElementsCallback,o=s===void 0?uu:s,a=t.observeMutationsRoot,l=a===void 0?ue:a;lc=new a0(function(u){if(!iv){var c=Er();Os(u).forEach(function(f){if(f.type==="childList"&&f.addedNodes.length>0&&!g0(f.addedNodes[0])&&(M.searchPseudoElements&&o(f.target),n(f.target)),f.type==="attributes"&&f.target.parentNode&&M.searchPseudoElements&&o(f.target.parentNode),f.type==="attributes"&&g0(f.target)&&~FM.indexOf(f.attributeName))if(f.attributeName==="class"&&TV(f.target)){var h=Tf(Xg(f.target)),p=h.prefix,y=h.iconName;f.target.setAttribute(Gg,p||c),y&&f.target.setAttribute(Qg,y)}else IV(f.target)&&i(f.target)})}}),Dn&&lc.observe(l,{childList:!0,attributes:!0,characterData:!0,subtree:!0})}}function CV(){lc&&lc.disconnect()}function RV(t){var e=t.getAttribute("style"),n=[];return e&&(n=e.split(";").reduce(function(r,i){var s=i.split(":"),o=s[0],a=s.slice(1);return o&&a.length>0&&(r[o]=a.join(":").trim()),r},{})),n}function bV(t){var e=t.getAttribute("data-prefix"),n=t.getAttribute("data-icon"),r=t.innerText!==void 0?t.innerText.trim():"",i=Tf(Xg(t));return i.prefix||(i.prefix=Er()),e&&n&&(i.prefix=e,i.iconName=n),i.iconName&&i.prefix||(i.prefix&&r.length>0&&(i.iconName=aV(i.prefix,t.innerText)||ev(i.prefix,mp(t.innerText))),!i.iconName&&M.autoFetchSvg&&t.firstChild&&t.firstChild.nodeType===Node.TEXT_NODE&&(i.iconName=t.firstChild.data)),i}function xV(t){var e=Os(t.attributes).reduce(function(i,s){return i.name!=="class"&&i.name!=="style"&&(i[s.name]=s.value),i},{}),n=t.getAttribute("title"),r=t.getAttribute("data-fa-title-id");return M.autoA11y&&(n?e["aria-labelledby"]="".concat(M.replacementClass,"-title-").concat(r||pa()):(e["aria-hidden"]="true",e.focusable="false")),e}function NV(){return{iconName:null,title:null,titleId:null,prefix:null,transform:tn,symbol:!1,mask:{iconName:null,prefix:null,rest:[]},maskId:null,extra:{classes:[],styles:{},attributes:{}}}}function _0(t){var e=arguments.length>1&&arguments[1]!==void 0?arguments[1]:{styleParser:!0},n=bV(t),r=n.iconName,i=n.prefix,s=n.rest,o=xV(t),a=vp("parseNodeAttributes",{},t),l=e.styleParser?RV(t):[];return O({iconName:r,title:t.getAttribute("title"),titleId:t.getAttribute("data-fa-title-id"),prefix:i,transform:tn,mask:{iconName:null,prefix:null,rest:[]},maskId:null,symbol:!1,extra:{classes:s,styles:l,attributes:o}},a)}var OV=$t.styles;function rA(t){var e=M.autoReplaceSvg==="nest"?_0(t,{styleParser:!1}):_0(t);return~e.extra.classes.indexOf($S)?bn("generateLayersText",t,e):bn("generateSvgReplacementMutation",t,e)}var Tr=new Set;Yg.map(function(t){Tr.add("fa-".concat(t))});Object.keys(ca[se]).map(Tr.add.bind(Tr));Object.keys(ca[we]).map(Tr.add.bind(Tr));Tr=za(Tr);function w0(t){var e=arguments.length>1&&arguments[1]!==void 0?arguments[1]:null;if(!Dn)return Promise.resolve();var n=ue.documentElement.classList,r=function(f){return n.add("".concat(l0,"-").concat(f))},i=function(f){return n.remove("".concat(l0,"-").concat(f))},s=M.autoFetchSvg?Tr:Yg.map(function(c){return"fa-".concat(c)}).concat(Object.keys(OV));s.includes("fa")||s.push("fa");var o=[".".concat($S,":not([").concat(di,"])")].concat(s.map(function(c){return".".concat(c,":not([").concat(di,"])")})).join(", ");if(o.length===0)return Promise.resolve();var a=[];try{a=Os(t.querySelectorAll(o))}catch{}if(a.length>0)r("pending"),i("complete");else return Promise.resolve();var l=rv.begin("onTree"),u=a.reduce(function(c,f){try{var h=rA(f);h&&c.push(h)}catch(p){FS||p.name==="MissingIcon"&&console.error(p)}return c},[]);return new Promise(function(c,f){Promise.all(u).then(function(h){tA(h,function(){r("active"),r("complete"),i("pending"),typeof e=="function"&&e(),l(),c()})}).catch(function(h){l(),f(h)})})}function DV(t){var e=arguments.length>1&&arguments[1]!==void 0?arguments[1]:null;rA(t).then(function(n){n&&tA([n],e)})}function LV(t){return function(e){var n=arguments.length>1&&arguments[1]!==void 0?arguments[1]:{},r=(e||{}).icon?e:yp(e||{}),i=n.mask;return i&&(i=(i||{}).icon?i:yp(i||{})),t(r,O(O({},n),{},{mask:i}))}}var MV=function(e){var n=arguments.length>1&&arguments[1]!==void 0?arguments[1]:{},r=n.transform,i=r===void 0?tn:r,s=n.symbol,o=s===void 0?!1:s,a=n.mask,l=a===void 0?null:a,u=n.maskId,c=u===void 0?null:u,f=n.title,h=f===void 0?null:f,p=n.titleId,y=p===void 0?null:p,_=n.classes,w=_===void 0?[]:_,m=n.attributes,d=m===void 0?{}:m,g=n.styles,E=g===void 0?{}:g;if(e){var I=e.prefix,k=e.iconName,C=e.icon;return If(O({type:"icon"},e),function(){return pi("beforeDOMElementCreation",{iconDefinition:e,params:n}),M.autoA11y&&(h?d["aria-labelledby"]="".concat(M.replacementClass,"-title-").concat(y||pa()):(d["aria-hidden"]="true",d.focusable="false")),nv({icons:{main:_p(C),mask:l?_p(l.icon):{found:!1,width:null,height:null,icon:{}}},prefix:I,iconName:k,transform:O(O({},tn),i),symbol:o,title:h,maskId:c,titleId:y,extra:{attributes:d,styles:E,classes:w}})})}},VV={mixout:function(){return{icon:LV(MV)}},hooks:function(){return{mutationObserverCallbacks:function(n){return n.treeCallback=w0,n.nodeCallback=DV,n}}},provides:function(e){e.i2svg=function(n){var r=n.node,i=r===void 0?ue:r,s=n.callback,o=s===void 0?function(){}:s;return w0(i,o)},e.generateSvgReplacementMutation=function(n,r){var i=r.iconName,s=r.title,o=r.titleId,a=r.prefix,l=r.transform,u=r.symbol,c=r.mask,f=r.maskId,h=r.extra;return new Promise(function(p,y){Promise.all([wp(i,a),c.iconName?wp(c.iconName,c.prefix):Promise.resolve({found:!1,width:512,height:512,icon:{}})]).then(function(_){var w=qg(_,2),m=w[0],d=w[1];p([n,nv({icons:{main:m,mask:d},prefix:a,iconName:i,transform:l,symbol:u,maskId:f,title:s,titleId:o,extra:h,watchable:!0})])}).catch(y)})},e.generateAbstractIcon=function(n){var r=n.children,i=n.attributes,s=n.main,o=n.transform,a=n.styles,l=wf(a);l.length>0&&(i.style=l);var u;return Jg(o)&&(u=bn("generateAbstractTransformGrouping",{main:s,transform:o,containerWidth:s.width,iconWidth:s.width})),r.push(u||s.icon),{children:r,attributes:i}}}},FV={mixout:function(){return{layer:function(n){var r=arguments.length>1&&arguments[1]!==void 0?arguments[1]:{},i=r.classes,s=i===void 0?[]:i;return If({type:"layer"},function(){pi("beforeDOMElementCreation",{assembler:n,params:r});var o=[];return n(function(a){Array.isArray(a)?a.map(function(l){o=o.concat(l.abstract)}):o=o.concat(a.abstract)}),[{tag:"span",attributes:{class:["".concat(M.cssPrefix,"-layers")].concat(za(s)).join(" ")},children:o}]})}}}},$V={mixout:function(){return{counter:function(n){var r=arguments.length>1&&arguments[1]!==void 0?arguments[1]:{},i=r.title,s=i===void 0?null:i,o=r.classes,a=o===void 0?[]:o,l=r.attributes,u=l===void 0?{}:l,c=r.styles,f=c===void 0?{}:c;return If({type:"counter",content:n},function(){return pi("beforeDOMElementCreation",{content:n,params:r}),yV({content:n.toString(),title:s,extra:{attributes:u,styles:f,classes:["".concat(M.cssPrefix,"-layers-counter")].concat(za(a))}})})}}}},UV={mixout:function(){return{text:function(n){var r=arguments.length>1&&arguments[1]!==void 0?arguments[1]:{},i=r.transform,s=i===void 0?tn:i,o=r.title,a=o===void 0?null:o,l=r.classes,u=l===void 0?[]:l,c=r.attributes,f=c===void 0?{}:c,h=r.styles,p=h===void 0?{}:h;return If({type:"text",content:n},function(){return pi("beforeDOMElementCreation",{content:n,params:r}),p0({content:n,transform:O(O({},tn),s),title:a,extra:{attributes:f,styles:p,classes:["".concat(M.cssPrefix,"-layers-text")].concat(za(u))}})})}}},provides:function(e){e.generateLayersText=function(n,r){var i=r.title,s=r.transform,o=r.extra,a=null,l=null;if(LS){var u=parseInt(getComputedStyle(n).fontSize,10),c=n.getBoundingClientRect();a=c.width/u,l=c.height/u}return M.autoA11y&&!i&&(o.attributes["aria-hidden"]="true"),Promise.resolve([n,p0({content:n.innerHTML,width:a,height:l,transform:s,title:i,extra:o,watchable:!0})])}}},jV=new RegExp('"',"ug"),E0=[1105920,1112319];function zV(t){var e=t.replace(jV,""),n=tV(e,0),r=n>=E0[0]&&n<=E0[1],i=e.length===2?e[0]===e[1]:!1;return{value:mp(i?e[0]:e),isSecondary:r||i}}function T0(t,e){var n="".concat(bM).concat(e.replace(":","-"));return new Promise(function(r,i){if(t.getAttribute(n)!==null)return r();var s=Os(t.children),o=s.filter(function(C){return C.getAttribute(pp)===e})[0],a=wr.getComputedStyle(t,e),l=a.getPropertyValue("font-family").match(LM),u=a.getPropertyValue("font-weight"),c=a.getPropertyValue("content");if(o&&!l)return t.removeChild(o),r();if(l&&c!=="none"&&c!==""){var f=a.getPropertyValue("content"),h=~["Sharp"].indexOf(l[2])?we:se,p=~["Solid","Regular","Light","Thin","Duotone","Brands","Kit"].indexOf(l[2])?fa[h][l[2].toLowerCase()]:MM[h][u],y=zV(f),_=y.value,w=y.isSecondary,m=l[0].startsWith("FontAwesome"),d=ev(p,_),g=d;if(m){var E=lV(_);E.iconName&&E.prefix&&(d=E.iconName,p=E.prefix)}if(d&&!w&&(!o||o.getAttribute(Gg)!==p||o.getAttribute(Qg)!==g)){t.setAttribute(n,g),o&&t.removeChild(o);var I=NV(),k=I.extra;k.attributes[pp]=e,wp(d,p).then(function(C){var N=nv(O(O({},I),{},{icons:{main:C,mask:tv()},prefix:p,iconName:g,extra:k,watchable:!0})),B=ue.createElementNS("http://www.w3.org/2000/svg","svg");e==="::before"?t.insertBefore(B,t.firstChild):t.appendChild(B),B.outerHTML=N.map(function(F){return Ha(F)}).join(`
`),t.removeAttribute(n),r()}).catch(i)}else r()}else r()})}function BV(t){return Promise.all([T0(t,"::before"),T0(t,"::after")])}function HV(t){return t.parentNode!==document.head&&!~NM.indexOf(t.tagName.toUpperCase())&&!t.getAttribute(pp)&&(!t.parentNode||t.parentNode.tagName!=="svg")}function I0(t){if(Dn)return new Promise(function(e,n){var r=Os(t.querySelectorAll("*")).filter(HV).map(BV),i=rv.begin("searchPseudoElements");nA(),Promise.all(r).then(function(){i(),Tp(),e()}).catch(function(){i(),Tp(),n()})})}var WV={hooks:function(){return{mutationObserverCallbacks:function(n){return n.pseudoElementsCallback=I0,n}}},provides:function(e){e.pseudoElements2svg=function(n){var r=n.node,i=r===void 0?ue:r;M.searchPseudoElements&&I0(i)}}},S0=!1,qV={mixout:function(){return{dom:{unwatch:function(){nA(),S0=!0}}}},hooks:function(){return{bootstrap:function(){y0(vp("mutationObserverCallbacks",{}))},noAuto:function(){CV()},watch:function(n){var r=n.observeMutationsRoot;S0?Tp():y0(vp("mutationObserverCallbacks",{observeMutationsRoot:r}))}}}},A0=function(e){var n={size:16,x:0,y:0,flipX:!1,flipY:!1,rotate:0};return e.toLowerCase().split(" ").reduce(function(r,i){var s=i.toLowerCase().split("-"),o=s[0],a=s.slice(1).join("-");if(o&&a==="h")return r.flipX=!0,r;if(o&&a==="v")return r.flipY=!0,r;if(a=parseFloat(a),isNaN(a))return r;switch(o){case"grow":r.size=r.size+a;break;case"shrink":r.size=r.size-a;break;case"left":r.x=r.x-a;break;case"right":r.x=r.x+a;break;case"up":r.y=r.y-a;break;case"down":r.y=r.y+a;break;case"rotate":r.rotate=r.rotate+a;break}return r},n)},KV={mixout:function(){return{parse:{transform:function(n){return A0(n)}}}},hooks:function(){return{parseNodeAttributes:function(n,r){var i=r.getAttribute("data-fa-transform");return i&&(n.transform=A0(i)),n}}},provides:function(e){e.generateAbstractTransformGrouping=function(n){var r=n.main,i=n.transform,s=n.containerWidth,o=n.iconWidth,a={transform:"translate(".concat(s/2," 256)")},l="translate(".concat(i.x*32,", ").concat(i.y*32,") "),u="scale(".concat(i.size/16*(i.flipX?-1:1),", ").concat(i.size/16*(i.flipY?-1:1),") "),c="rotate(".concat(i.rotate," 0 0)"),f={transform:"".concat(l," ").concat(u," ").concat(c)},h={transform:"translate(".concat(o/2*-1," -256)")},p={outer:a,inner:f,path:h};return{tag:"g",attributes:O({},p.outer),children:[{tag:"g",attributes:O({},p.inner),children:[{tag:r.icon.tag,children:r.icon.children,attributes:O(O({},r.icon.attributes),p.path)}]}]}}}},Rh={x:0,y:0,width:"100%",height:"100%"};function k0(t){var e=arguments.length>1&&arguments[1]!==void 0?arguments[1]:!0;return t.attributes&&(t.attributes.fill||e)&&(t.attributes.fill="black"),t}function GV(t){return t.tag==="g"?t.children:[t]}var QV={hooks:function(){return{parseNodeAttributes:function(n,r){var i=r.getAttribute("data-fa-mask"),s=i?Tf(i.split(" ").map(function(o){return o.trim()})):tv();return s.prefix||(s.prefix=Er()),n.mask=s,n.maskId=r.getAttribute("data-fa-mask-id"),n}}},provides:function(e){e.generateAbstractMask=function(n){var r=n.children,i=n.attributes,s=n.main,o=n.mask,a=n.maskId,l=n.transform,u=s.width,c=s.icon,f=o.width,h=o.icon,p=KM({transform:l,containerWidth:f,iconWidth:u}),y={tag:"rect",attributes:O(O({},Rh),{},{fill:"white"})},_=c.children?{children:c.children.map(k0)}:{},w={tag:"g",attributes:O({},p.inner),children:[k0(O({tag:c.tag,attributes:O(O({},c.attributes),p.path)},_))]},m={tag:"g",attributes:O({},p.outer),children:[w]},d="mask-".concat(a||pa()),g="clip-".concat(a||pa()),E={tag:"mask",attributes:O(O({},Rh),{},{id:d,maskUnits:"userSpaceOnUse",maskContentUnits:"userSpaceOnUse"}),children:[y,m]},I={tag:"defs",children:[{tag:"clipPath",attributes:{id:g},children:GV(h)},E]};return r.push(I,{tag:"rect",attributes:O({fill:"currentColor","clip-path":"url(#".concat(g,")"),mask:"url(#".concat(d,")")},Rh)}),{children:r,attributes:i}}}},YV={provides:function(e){var n=!1;wr.matchMedia&&(n=wr.matchMedia("(prefers-reduced-motion: reduce)").matches),e.missingIconAbstract=function(){var r=[],i={fill:"currentColor"},s={attributeType:"XML",repeatCount:"indefinite",dur:"2s"};r.push({tag:"path",attributes:O(O({},i),{},{d:"M156.5,447.7l-12.6,29.5c-18.7-9.5-35.9-21.2-51.5-34.9l22.7-22.7C127.6,430.5,141.5,440,156.5,447.7z M40.6,272H8.5 c1.4,21.2,5.4,41.7,11.7,61.1L50,321.2C45.1,305.5,41.8,289,40.6,272z M40.6,240c1.4-18.8,5.2-37,11.1-54.1l-29.5-12.6 C14.7,194.3,10,216.7,8.5,240H40.6z M64.3,156.5c7.8-14.9,17.2-28.8,28.1-41.5L69.7,92.3c-13.7,15.6-25.5,32.8-34.9,51.5 L64.3,156.5z M397,419.6c-13.9,12-29.4,22.3-46.1,30.4l11.9,29.8c20.7-9.9,39.8-22.6,56.9-37.6L397,419.6z M115,92.4 c13.9-12,29.4-22.3,46.1-30.4l-11.9-29.8c-20.7,9.9-39.8,22.6-56.8,37.6L115,92.4z M447.7,355.5c-7.8,14.9-17.2,28.8-28.1,41.5 l22.7,22.7c13.7-15.6,25.5-32.9,34.9-51.5L447.7,355.5z M471.4,272c-1.4,18.8-5.2,37-11.1,54.1l29.5,12.6 c7.5-21.1,12.2-43.5,13.6-66.8H471.4z M321.2,462c-15.7,5-32.2,8.2-49.2,9.4v32.1c21.2-1.4,41.7-5.4,61.1-11.7L321.2,462z M240,471.4c-18.8-1.4-37-5.2-54.1-11.1l-12.6,29.5c21.1,7.5,43.5,12.2,66.8,13.6V471.4z M462,190.8c5,15.7,8.2,32.2,9.4,49.2h32.1 c-1.4-21.2-5.4-41.7-11.7-61.1L462,190.8z M92.4,397c-12-13.9-22.3-29.4-30.4-46.1l-29.8,11.9c9.9,20.7,22.6,39.8,37.6,56.9 L92.4,397z M272,40.6c18.8,1.4,36.9,5.2,54.1,11.1l12.6-29.5C317.7,14.7,295.3,10,272,8.5V40.6z M190.8,50 c15.7-5,32.2-8.2,49.2-9.4V8.5c-21.2,1.4-41.7,5.4-61.1,11.7L190.8,50z M442.3,92.3L419.6,115c12,13.9,22.3,29.4,30.5,46.1 l29.8-11.9C470,128.5,457.3,109.4,442.3,92.3z M397,92.4l22.7-22.7c-15.6-13.7-32.8-25.5-51.5-34.9l-12.6,29.5 C370.4,72.1,384.4,81.5,397,92.4z"})});var o=O(O({},s),{},{attributeName:"opacity"}),a={tag:"circle",attributes:O(O({},i),{},{cx:"256",cy:"364",r:"28"}),children:[]};return n||a.children.push({tag:"animate",attributes:O(O({},s),{},{attributeName:"r",values:"28;14;28;28;14;28;"})},{tag:"animate",attributes:O(O({},o),{},{values:"1;0;1;1;0;1;"})}),r.push(a),r.push({tag:"path",attributes:O(O({},i),{},{opacity:"1",d:"M263.7,312h-16c-6.6,0-12-5.4-12-12c0-71,77.4-63.9,77.4-107.8c0-20-17.8-40.2-57.4-40.2c-29.1,0-44.3,9.6-59.2,28.7 c-3.9,5-11.1,6-16.2,2.4l-13.1-9.2c-5.6-3.9-6.9-11.8-2.6-17.2c21.2-27.2,46.4-44.7,91.2-44.7c52.3,0,97.4,29.8,97.4,80.2 c0,67.6-77.4,63.5-77.4,107.8C275.7,306.6,270.3,312,263.7,312z"}),children:n?[]:[{tag:"animate",attributes:O(O({},o),{},{values:"1;0;0;0;0;1;"})}]}),n||r.push({tag:"path",attributes:O(O({},i),{},{opacity:"0",d:"M232.5,134.5l7,168c0.3,6.4,5.6,11.5,12,11.5h9c6.4,0,11.7-5.1,12-11.5l7-168c0.3-6.8-5.2-12.5-12-12.5h-23 C237.7,122,232.2,127.7,232.5,134.5z"}),children:[{tag:"animate",attributes:O(O({},o),{},{values:"0;0;1;1;0;0;"})}]}),{tag:"g",attributes:{class:"missing"},children:r}}}},XV={hooks:function(){return{parseNodeAttributes:function(n,r){var i=r.getAttribute("data-fa-symbol"),s=i===null?!1:i===""?!0:i;return n.symbol=s,n}}}},JV=[YM,VV,FV,$V,UV,WV,qV,KV,QV,YV,XV];fV(JV,{mixoutsTo:Pt});Pt.noAuto;Pt.config;Pt.library;Pt.dom;var Ip=Pt.parse;Pt.findIconDefinition;Pt.toHtml;var ZV=Pt.icon;Pt.layer;Pt.text;Pt.counter;var iA={exports:{}},e4="SECRET_DO_NOT_PASS_THIS_OR_YOU_WILL_BE_FIRED",t4=e4,n4=t4;function sA(){}function oA(){}oA.resetWarningCache=sA;var r4=function(){function t(r,i,s,o,a,l){if(l!==n4){var u=new Error("Calling PropTypes validators directly is not supported by the `prop-types` package. Use PropTypes.checkPropTypes() to call them. Read more at http://fb.me/use-check-prop-types");throw u.name="Invariant Violation",u}}t.isRequired=t;function e(){return t}var n={array:t,bigint:t,bool:t,func:t,number:t,object:t,string:t,symbol:t,any:t,arrayOf:e,element:t,elementType:t,instanceOf:e,node:t,objectOf:e,oneOf:e,oneOfType:e,shape:e,exact:e,checkPropTypes:oA,resetWarningCache:sA};return n.PropTypes=n,n};iA.exports=r4();var Wa=iA.exports;const K=Q0(Wa);function P0(t,e){var n=Object.keys(t);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(t);e&&(r=r.filter(function(i){return Object.getOwnPropertyDescriptor(t,i).enumerable})),n.push.apply(n,r)}return n}function Zn(t){for(var e=1;e<arguments.length;e++){var n=arguments[e]!=null?arguments[e]:{};e%2?P0(Object(n),!0).forEach(function(r){Bi(t,r,n[r])}):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(n)):P0(Object(n)).forEach(function(r){Object.defineProperty(t,r,Object.getOwnPropertyDescriptor(n,r))})}return t}function uc(t){"@babel/helpers - typeof";return uc=typeof Symbol=="function"&&typeof Symbol.iterator=="symbol"?function(e){return typeof e}:function(e){return e&&typeof Symbol=="function"&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e},uc(t)}function Bi(t,e,n){return e in t?Object.defineProperty(t,e,{value:n,enumerable:!0,configurable:!0,writable:!0}):t[e]=n,t}function i4(t,e){if(t==null)return{};var n={},r=Object.keys(t),i,s;for(s=0;s<r.length;s++)i=r[s],!(e.indexOf(i)>=0)&&(n[i]=t[i]);return n}function s4(t,e){if(t==null)return{};var n=i4(t,e),r,i;if(Object.getOwnPropertySymbols){var s=Object.getOwnPropertySymbols(t);for(i=0;i<s.length;i++)r=s[i],!(e.indexOf(r)>=0)&&Object.prototype.propertyIsEnumerable.call(t,r)&&(n[r]=t[r])}return n}function Sp(t){return o4(t)||a4(t)||l4(t)||u4()}function o4(t){if(Array.isArray(t))return Ap(t)}function a4(t){if(typeof Symbol<"u"&&t[Symbol.iterator]!=null||t["@@iterator"]!=null)return Array.from(t)}function l4(t,e){if(t){if(typeof t=="string")return Ap(t,e);var n=Object.prototype.toString.call(t).slice(8,-1);if(n==="Object"&&t.constructor&&(n=t.constructor.name),n==="Map"||n==="Set")return Array.from(t);if(n==="Arguments"||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n))return Ap(t,e)}}function Ap(t,e){(e==null||e>t.length)&&(e=t.length);for(var n=0,r=new Array(e);n<e;n++)r[n]=t[n];return r}function u4(){throw new TypeError(`Invalid attempt to spread non-iterable instance.
In order to be iterable, non-array objects must have a [Symbol.iterator]() method.`)}function c4(t){var e,n=t.beat,r=t.fade,i=t.beatFade,s=t.bounce,o=t.shake,a=t.flash,l=t.spin,u=t.spinPulse,c=t.spinReverse,f=t.pulse,h=t.fixedWidth,p=t.inverse,y=t.border,_=t.listItem,w=t.flip,m=t.size,d=t.rotation,g=t.pull,E=(e={"fa-beat":n,"fa-fade":r,"fa-beat-fade":i,"fa-bounce":s,"fa-shake":o,"fa-flash":a,"fa-spin":l,"fa-spin-reverse":c,"fa-spin-pulse":u,"fa-pulse":f,"fa-fw":h,"fa-inverse":p,"fa-border":y,"fa-li":_,"fa-flip":w===!0,"fa-flip-horizontal":w==="horizontal"||w==="both","fa-flip-vertical":w==="vertical"||w==="both"},Bi(e,"fa-".concat(m),typeof m<"u"&&m!==null),Bi(e,"fa-rotate-".concat(d),typeof d<"u"&&d!==null&&d!==0),Bi(e,"fa-pull-".concat(g),typeof g<"u"&&g!==null),Bi(e,"fa-swap-opacity",t.swapOpacity),e);return Object.keys(E).map(function(I){return E[I]?I:null}).filter(function(I){return I})}function f4(t){return t=t-0,t===t}function aA(t){return f4(t)?t:(t=t.replace(/[\-_\s]+(.)?/g,function(e,n){return n?n.toUpperCase():""}),t.substr(0,1).toLowerCase()+t.substr(1))}var h4=["style"];function d4(t){return t.charAt(0).toUpperCase()+t.slice(1)}function p4(t){return t.split(";").map(function(e){return e.trim()}).filter(function(e){return e}).reduce(function(e,n){var r=n.indexOf(":"),i=aA(n.slice(0,r)),s=n.slice(r+1).trim();return i.startsWith("webkit")?e[d4(i)]=s:e[i]=s,e},{})}function lA(t,e){var n=arguments.length>2&&arguments[2]!==void 0?arguments[2]:{};if(typeof e=="string")return e;var r=(e.children||[]).map(function(l){return lA(t,l)}),i=Object.keys(e.attributes||{}).reduce(function(l,u){var c=e.attributes[u];switch(u){case"class":l.attrs.className=c,delete e.attributes.class;break;case"style":l.attrs.style=p4(c);break;default:u.indexOf("aria-")===0||u.indexOf("data-")===0?l.attrs[u.toLowerCase()]=c:l.attrs[aA(u)]=c}return l},{attrs:{}}),s=n.style,o=s===void 0?{}:s,a=s4(n,h4);return i.attrs.style=Zn(Zn({},i.attrs.style),o),t.apply(void 0,[e.tag,Zn(Zn({},i.attrs),a)].concat(Sp(r)))}var uA=!1;try{uA=!0}catch{}function m4(){if(!uA&&console&&typeof console.error=="function"){var t;(t=console).error.apply(t,arguments)}}function C0(t){if(t&&uc(t)==="object"&&t.prefix&&t.iconName&&t.icon)return t;if(Ip.icon)return Ip.icon(t);if(t===null)return null;if(t&&uc(t)==="object"&&t.prefix&&t.iconName)return t;if(Array.isArray(t)&&t.length===2)return{prefix:t[0],iconName:t[1]};if(typeof t=="string")return{prefix:"fas",iconName:t}}function bh(t,e){return Array.isArray(e)&&e.length>0||!Array.isArray(e)&&e?Bi({},t,e):{}}var qa=hc.forwardRef(function(t,e){var n=t.icon,r=t.mask,i=t.symbol,s=t.className,o=t.title,a=t.titleId,l=t.maskId,u=C0(n),c=bh("classes",[].concat(Sp(c4(t)),Sp(s.split(" ")))),f=bh("transform",typeof t.transform=="string"?Ip.transform(t.transform):t.transform),h=bh("mask",C0(r)),p=ZV(u,Zn(Zn(Zn(Zn({},c),f),h),{},{symbol:i,title:o,titleId:a,maskId:l}));if(!p)return m4("Could not find icon",u),null;var y=p.abstract,_={ref:e};return Object.keys(t).forEach(function(w){qa.defaultProps.hasOwnProperty(w)||(_[w]=t[w])}),g4(y[0],_)});qa.displayName="FontAwesomeIcon";qa.propTypes={beat:K.bool,border:K.bool,beatFade:K.bool,bounce:K.bool,className:K.string,fade:K.bool,flash:K.bool,mask:K.oneOfType([K.object,K.array,K.string]),maskId:K.string,fixedWidth:K.bool,inverse:K.bool,flip:K.oneOf([!0,!1,"horizontal","vertical","both"]),icon:K.oneOfType([K.object,K.array,K.string]),listItem:K.bool,pull:K.oneOf(["right","left"]),pulse:K.bool,rotation:K.oneOf([0,90,180,270]),shake:K.bool,size:K.oneOf(["2xs","xs","sm","lg","xl","2xl","1x","2x","3x","4x","5x","6x","7x","8x","9x","10x"]),spin:K.bool,spinPulse:K.bool,spinReverse:K.bool,symbol:K.oneOfType([K.bool,K.string]),title:K.string,titleId:K.string,transform:K.oneOfType([K.string,K.object]),swapOpacity:K.bool};qa.defaultProps={border:!1,className:"",mask:null,maskId:null,fixedWidth:!1,inverse:!1,flip:!1,icon:null,listItem:!1,pull:null,pulse:!1,rotation:null,size:null,spin:!1,spinPulse:!1,spinReverse:!1,beat:!1,fade:!1,beatFade:!1,bounce:!1,shake:!1,symbol:!1,title:"",titleId:null,transform:null,swapOpacity:!1};var g4=lA.bind(null,hc.createElement),v4={prefix:"fab",iconName:"github",icon:[496,512,[],"f09b","M165.9 397.4c0 2-2.3 3.6-5.2 3.6-3.3.3-5.6-1.3-5.6-3.6 0-2 2.3-3.6 5.2-3.6 3-.3 5.6 1.3 5.6 3.6zm-31.1-4.5c-.7 2 1.3 4.3 4.3 4.9 2.6 1 5.6 0 6.2-2s-1.3-4.3-4.3-5.2c-2.6-.7-5.5.3-6.2 2.3zm44.2-1.7c-2.9.7-4.9 2.6-4.6 4.9.3 2 2.9 3.3 5.9 2.6 2.9-.7 4.9-2.6 4.6-4.6-.3-1.9-3-3.2-5.9-2.9zM244.8 8C106.1 8 0 113.3 0 252c0 110.9 69.8 205.8 169.5 239.2 12.8 2.3 17.3-5.6 17.3-12.1 0-6.2-.3-40.4-.3-61.4 0 0-70 15-84.7-29.8 0 0-11.4-29.1-27.8-36.6 0 0-22.9-15.7 1.6-15.4 0 0 24.9 2 38.6 25.8 21.9 38.6 58.6 27.5 72.9 20.9 2.3-16 8.8-27.1 16-33.7-55.9-6.2-112.3-14.3-112.3-110.5 0-27.5 7.6-41.3 23.6-58.9-2.6-6.5-11.1-33.3 2.6-67.9 20.9-6.5 69 27 69 27 20-5.6 41.5-8.5 62.8-8.5s42.8 2.9 62.8 8.5c0 0 48.1-33.6 69-27 13.7 34.7 5.2 61.4 2.6 67.9 16 17.7 25.8 31.5 25.8 58.9 0 96.5-58.9 104.2-114.8 110.5 9.2 7.9 17 22.9 17 46.4 0 33.7-.3 75.4-.3 83.6 0 6.5 4.6 14.4 17.3 12.1C428.2 457.8 496 362.9 496 252 496 113.3 383.5 8 244.8 8zM97.2 352.9c-1.3 1-1 3.3.7 5.2 1.6 1.6 3.9 2.3 5.2 1 1.3-1 1-3.3-.7-5.2-1.6-1.6-3.9-2.3-5.2-1zm-10.8-8.1c-.7 1.3.3 2.9 2.3 3.9 1.6 1 3.6.7 4.3-.7.7-1.3-.3-2.9-2.3-3.9-2-.6-3.6-.3-4.3.7zm32.4 35.6c-1.6 1.3-1 4.3 1.3 6.2 2.3 2.3 5.2 2.6 6.5 1 1.3-1.3.7-4.3-1.3-6.2-2.2-2.3-5.2-2.6-6.5-1zm-11.4-14.7c-1.6 1-1.6 3.6 0 5.9 1.6 2.3 4.3 3.3 5.6 2.3 1.6-1.3 1.6-3.9 0-6.2-1.4-2.3-4-3.3-5.6-2z"]},ye={},sv={},Ka={},Ga={},cA="Expected a function",R0=NaN,y4="[object Symbol]",_4=/^\s+|\s+$/g,w4=/^[-+]0x[0-9a-f]+$/i,E4=/^0b[01]+$/i,T4=/^0o[0-7]+$/i,I4=parseInt,S4=typeof nl=="object"&&nl&&nl.Object===Object&&nl,A4=typeof self=="object"&&self&&self.Object===Object&&self,k4=S4||A4||Function("return this")(),P4=Object.prototype,C4=P4.toString,R4=Math.max,b4=Math.min,xh=function(){return k4.Date.now()};function x4(t,e,n){var r,i,s,o,a,l,u=0,c=!1,f=!1,h=!0;if(typeof t!="function")throw new TypeError(cA);e=b0(e)||0,cc(n)&&(c=!!n.leading,f="maxWait"in n,s=f?R4(b0(n.maxWait)||0,e):s,h="trailing"in n?!!n.trailing:h);function p(k){var C=r,N=i;return r=i=void 0,u=k,o=t.apply(N,C),o}function y(k){return u=k,a=setTimeout(m,e),c?p(k):o}function _(k){var C=k-l,N=k-u,B=e-C;return f?b4(B,s-N):B}function w(k){var C=k-l,N=k-u;return l===void 0||C>=e||C<0||f&&N>=s}function m(){var k=xh();if(w(k))return d(k);a=setTimeout(m,_(k))}function d(k){return a=void 0,h&&r?p(k):(r=i=void 0,o)}function g(){a!==void 0&&clearTimeout(a),u=0,r=l=i=a=void 0}function E(){return a===void 0?o:d(xh())}function I(){var k=xh(),C=w(k);if(r=arguments,i=this,l=k,C){if(a===void 0)return y(l);if(f)return a=setTimeout(m,e),p(l)}return a===void 0&&(a=setTimeout(m,e)),o}return I.cancel=g,I.flush=E,I}function N4(t,e,n){var r=!0,i=!0;if(typeof t!="function")throw new TypeError(cA);return cc(n)&&(r="leading"in n?!!n.leading:r,i="trailing"in n?!!n.trailing:i),x4(t,e,{leading:r,maxWait:e,trailing:i})}function cc(t){var e=typeof t;return!!t&&(e=="object"||e=="function")}function O4(t){return!!t&&typeof t=="object"}function D4(t){return typeof t=="symbol"||O4(t)&&C4.call(t)==y4}function b0(t){if(typeof t=="number")return t;if(D4(t))return R0;if(cc(t)){var e=typeof t.valueOf=="function"?t.valueOf():t;t=cc(e)?e+"":e}if(typeof t!="string")return t===0?t:+t;t=t.replace(_4,"");var n=E4.test(t);return n||T4.test(t)?I4(t.slice(2),n?2:8):w4.test(t)?R0:+t}var L4=N4,Qa={};Object.defineProperty(Qa,"__esModule",{value:!0});Qa.addPassiveEventListener=function(e,n,r){var i=r.name;i||(i=n,console.warn("Listener must be a named function.")),fu.has(n)||fu.set(n,new Set);var s=fu.get(n);if(!s.has(i)){var o=function(){var a=!1;try{var l=Object.defineProperty({},"passive",{get:function(){a=!0}});window.addEventListener("test",null,l)}catch{}return a}();e.addEventListener(n,r,o?{passive:!0}:!1),s.add(i)}};Qa.removePassiveEventListener=function(e,n,r){e.removeEventListener(n,r),fu.get(n).delete(r.name||n)};var fu=new Map;Object.defineProperty(Ga,"__esModule",{value:!0});var M4=L4,V4=$4(M4),F4=Qa;function $4(t){return t&&t.__esModule?t:{default:t}}var U4=function(e){var n=arguments.length>1&&arguments[1]!==void 0?arguments[1]:66;return(0,V4.default)(e,n)},he={spyCallbacks:[],spySetState:[],scrollSpyContainers:[],mount:function(e,n){if(e){var r=U4(function(i){he.scrollHandler(e)},n);he.scrollSpyContainers.push(e),(0,F4.addPassiveEventListener)(e,"scroll",r)}},isMounted:function(e){return he.scrollSpyContainers.indexOf(e)!==-1},currentPositionX:function(e){if(e===document){var n=window.pageYOffset!==void 0,r=(document.compatMode||"")==="CSS1Compat";return n?window.pageXOffset:r?document.documentElement.scrollLeft:document.body.scrollLeft}else return e.scrollLeft},currentPositionY:function(e){if(e===document){var n=window.pageXOffset!==void 0,r=(document.compatMode||"")==="CSS1Compat";return n?window.pageYOffset:r?document.documentElement.scrollTop:document.body.scrollTop}else return e.scrollTop},scrollHandler:function(e){var n=he.scrollSpyContainers[he.scrollSpyContainers.indexOf(e)].spyCallbacks||[];n.forEach(function(r){return r(he.currentPositionX(e),he.currentPositionY(e))})},addStateHandler:function(e){he.spySetState.push(e)},addSpyHandler:function(e,n){var r=he.scrollSpyContainers[he.scrollSpyContainers.indexOf(n)];r.spyCallbacks||(r.spyCallbacks=[]),r.spyCallbacks.push(e),e(he.currentPositionX(n),he.currentPositionY(n))},updateStates:function(){he.spySetState.forEach(function(e){return e()})},unmount:function(e,n){he.scrollSpyContainers.forEach(function(r){return r.spyCallbacks&&r.spyCallbacks.length&&r.spyCallbacks.indexOf(n)>-1&&r.spyCallbacks.splice(r.spyCallbacks.indexOf(n),1)}),he.spySetState&&he.spySetState.length&&he.spySetState.indexOf(e)>-1&&he.spySetState.splice(he.spySetState.indexOf(e),1),document.removeEventListener("scroll",he.scrollHandler)},update:function(){return he.scrollSpyContainers.forEach(function(e){return he.scrollHandler(e)})}};Ga.default=he;var Ds={},Ya={};Object.defineProperty(Ya,"__esModule",{value:!0});var j4=function(e,n){var r=e.indexOf("#")===0?e.substring(1):e,i=r?"#"+r:"",s=window&&window.location,o=i?s.pathname+s.search+i:s.pathname+s.search;n?history.pushState(history.state,"",o):history.replaceState(history.state,"",o)},z4=function(){return window.location.hash.replace(/^#/,"")},B4=function(e){return function(n){return e.contains?e!=n&&e.contains(n):!!(e.compareDocumentPosition(n)&16)}},H4=function(e){return getComputedStyle(e).position!=="static"},Nh=function(e,n){for(var r=e.offsetTop,i=e.offsetParent;i&&!n(i);)r+=i.offsetTop,i=i.offsetParent;return{offsetTop:r,offsetParent:i}},W4=function(e,n,r){if(r)return e===document?n.getBoundingClientRect().left+(window.scrollX||window.pageXOffset):getComputedStyle(e).position!=="static"?n.offsetLeft:n.offsetLeft-e.offsetLeft;if(e===document)return n.getBoundingClientRect().top+(window.scrollY||window.pageYOffset);if(H4(e)){if(n.offsetParent!==e){var i=function(c){return c===e||c===document},s=Nh(n,i),o=s.offsetTop,a=s.offsetParent;if(a!==e)throw new Error("Seems containerElement is not an ancestor of the Element");return o}return n.offsetTop}if(n.offsetParent===e.offsetParent)return n.offsetTop-e.offsetTop;var l=function(c){return c===document};return Nh(n,l).offsetTop-Nh(e,l).offsetTop};Ya.default={updateHash:j4,getHash:z4,filterElementInContainer:B4,scrollOffset:W4};var Sf={},ov={};Object.defineProperty(ov,"__esModule",{value:!0});ov.default={defaultEasing:function(e){return e<.5?Math.pow(e*2,2)/2:1-Math.pow((1-e)*2,2)/2},linear:function(e){return e},easeInQuad:function(e){return e*e},easeOutQuad:function(e){return e*(2-e)},easeInOutQuad:function(e){return e<.5?2*e*e:-1+(4-2*e)*e},easeInCubic:function(e){return e*e*e},easeOutCubic:function(e){return--e*e*e+1},easeInOutCubic:function(e){return e<.5?4*e*e*e:(e-1)*(2*e-2)*(2*e-2)+1},easeInQuart:function(e){return e*e*e*e},easeOutQuart:function(e){return 1- --e*e*e*e},easeInOutQuart:function(e){return e<.5?8*e*e*e*e:1-8*--e*e*e*e},easeInQuint:function(e){return e*e*e*e*e},easeOutQuint:function(e){return 1+--e*e*e*e*e},easeInOutQuint:function(e){return e<.5?16*e*e*e*e*e:1+16*--e*e*e*e*e}};var av={};Object.defineProperty(av,"__esModule",{value:!0});var q4=Qa,K4=["mousedown","mousewheel","touchmove","keydown"];av.default={subscribe:function(e){return typeof document<"u"&&K4.forEach(function(n){return(0,q4.addPassiveEventListener)(document,n,e)})}};var Xa={};Object.defineProperty(Xa,"__esModule",{value:!0});var kp={registered:{},scrollEvent:{register:function(e,n){kp.registered[e]=n},remove:function(e){kp.registered[e]=null}}};Xa.default=kp;Object.defineProperty(Sf,"__esModule",{value:!0});var G4=Object.assign||function(t){for(var e=1;e<arguments.length;e++){var n=arguments[e];for(var r in n)Object.prototype.hasOwnProperty.call(n,r)&&(t[r]=n[r])}return t},Q4=Ya;Af(Q4);var Y4=ov,x0=Af(Y4),X4=av,J4=Af(X4),Z4=Xa,Yt=Af(Z4);function Af(t){return t&&t.__esModule?t:{default:t}}var fA=function(e){return x0.default[e.smooth]||x0.default.defaultEasing},eF=function(e){return typeof e=="function"?e:function(){return e}},tF=function(){if(typeof window<"u")return window.requestAnimationFrame||window.webkitRequestAnimationFrame},Pp=function(){return tF()||function(t,e,n){window.setTimeout(t,n||1e3/60,new Date().getTime())}}(),hA=function(){return{currentPosition:0,startPosition:0,targetPosition:0,progress:0,duration:0,cancel:!1,target:null,containerElement:null,to:null,start:null,delta:null,percent:null,delayTimeout:null}},dA=function(e){var n=e.data.containerElement;if(n&&n!==document&&n!==document.body)return n.scrollLeft;var r=window.pageXOffset!==void 0,i=(document.compatMode||"")==="CSS1Compat";return r?window.pageXOffset:i?document.documentElement.scrollLeft:document.body.scrollLeft},pA=function(e){var n=e.data.containerElement;if(n&&n!==document&&n!==document.body)return n.scrollTop;var r=window.pageXOffset!==void 0,i=(document.compatMode||"")==="CSS1Compat";return r?window.pageYOffset:i?document.documentElement.scrollTop:document.body.scrollTop},nF=function(e){var n=e.data.containerElement;if(n&&n!==document&&n!==document.body)return n.scrollWidth-n.offsetWidth;var r=document.body,i=document.documentElement;return Math.max(r.scrollWidth,r.offsetWidth,i.clientWidth,i.scrollWidth,i.offsetWidth)},rF=function(e){var n=e.data.containerElement;if(n&&n!==document&&n!==document.body)return n.scrollHeight-n.offsetHeight;var r=document.body,i=document.documentElement;return Math.max(r.scrollHeight,r.offsetHeight,i.clientHeight,i.scrollHeight,i.offsetHeight)},iF=function t(e,n,r){var i=n.data;if(!n.ignoreCancelEvents&&i.cancel){Yt.default.registered.end&&Yt.default.registered.end(i.to,i.target,i.currentPositionY);return}if(i.delta=Math.round(i.targetPosition-i.startPosition),i.start===null&&(i.start=r),i.progress=r-i.start,i.percent=i.progress>=i.duration?1:e(i.progress/i.duration),i.currentPosition=i.startPosition+Math.ceil(i.delta*i.percent),i.containerElement&&i.containerElement!==document&&i.containerElement!==document.body?n.horizontal?i.containerElement.scrollLeft=i.currentPosition:i.containerElement.scrollTop=i.currentPosition:n.horizontal?window.scrollTo(i.currentPosition,0):window.scrollTo(0,i.currentPosition),i.percent<1){var s=t.bind(null,e,n);Pp.call(window,s);return}Yt.default.registered.end&&Yt.default.registered.end(i.to,i.target,i.currentPosition)},lv=function(e){e.data.containerElement=e?e.containerId?document.getElementById(e.containerId):e.container&&e.container.nodeType?e.container:document:null},Ja=function(e,n,r,i){n.data=n.data||hA(),window.clearTimeout(n.data.delayTimeout);var s=function(){n.data.cancel=!0};if(J4.default.subscribe(s),lv(n),n.data.start=null,n.data.cancel=!1,n.data.startPosition=n.horizontal?dA(n):pA(n),n.data.targetPosition=n.absolute?e:e+n.data.startPosition,n.data.startPosition===n.data.targetPosition){Yt.default.registered.end&&Yt.default.registered.end(n.data.to,n.data.target,n.data.currentPosition);return}n.data.delta=Math.round(n.data.targetPosition-n.data.startPosition),n.data.duration=eF(n.duration)(n.data.delta),n.data.duration=isNaN(parseFloat(n.data.duration))?1e3:parseFloat(n.data.duration),n.data.to=r,n.data.target=i;var o=fA(n),a=iF.bind(null,o,n);if(n&&n.delay>0){n.data.delayTimeout=window.setTimeout(function(){Yt.default.registered.begin&&Yt.default.registered.begin(n.data.to,n.data.target),Pp.call(window,a)},n.delay);return}Yt.default.registered.begin&&Yt.default.registered.begin(n.data.to,n.data.target),Pp.call(window,a)},kf=function(e){return e=G4({},e),e.data=e.data||hA(),e.absolute=!0,e},sF=function(e){Ja(0,kf(e))},oF=function(e,n){Ja(e,kf(n))},aF=function(e){e=kf(e),lv(e),Ja(e.horizontal?nF(e):rF(e),e)},lF=function(e,n){n=kf(n),lv(n);var r=n.horizontal?dA(n):pA(n);Ja(e+r,n)};Sf.default={animateTopScroll:Ja,getAnimationType:fA,scrollToTop:sF,scrollToBottom:aF,scrollTo:oF,scrollMore:lF};Object.defineProperty(Ds,"__esModule",{value:!0});var uF=Object.assign||function(t){for(var e=1;e<arguments.length;e++){var n=arguments[e];for(var r in n)Object.prototype.hasOwnProperty.call(n,r)&&(t[r]=n[r])}return t},cF=Ya,fF=uv(cF),hF=Sf,dF=uv(hF),pF=Xa,Fl=uv(pF);function uv(t){return t&&t.__esModule?t:{default:t}}var $l={},N0=void 0;Ds.default={unmount:function(){$l={}},register:function(e,n){$l[e]=n},unregister:function(e){delete $l[e]},get:function(e){return $l[e]||document.getElementById(e)||document.getElementsByName(e)[0]||document.getElementsByClassName(e)[0]},setActiveLink:function(e){return N0=e},getActiveLink:function(){return N0},scrollTo:function(e,n){var r=this.get(e);if(!r){console.warn("target Element not found");return}n=uF({},n,{absolute:!1});var i=n.containerId,s=n.container,o=void 0;i?o=document.getElementById(i):s&&s.nodeType?o=s:o=document,n.absolute=!0;var a=n.horizontal,l=fF.default.scrollOffset(o,r,a)+(n.offset||0);if(!n.smooth){Fl.default.registered.begin&&Fl.default.registered.begin(e,r),o===document?n.horizontal?window.scrollTo(l,0):window.scrollTo(0,l):o.scrollTop=l,Fl.default.registered.end&&Fl.default.registered.end(e,r);return}dF.default.animateTopScroll(l,n,e,r)}};var Pf={};Object.defineProperty(Pf,"__esModule",{value:!0});var mF=Ya,Oh=gF(mF);function gF(t){return t&&t.__esModule?t:{default:t}}var vF={mountFlag:!1,initialized:!1,scroller:null,containers:{},mount:function(e){this.scroller=e,this.handleHashChange=this.handleHashChange.bind(this),window.addEventListener("hashchange",this.handleHashChange),this.initStateFromHash(),this.mountFlag=!0},mapContainer:function(e,n){this.containers[e]=n},isMounted:function(){return this.mountFlag},isInitialized:function(){return this.initialized},initStateFromHash:function(){var e=this,n=this.getHash();n?window.setTimeout(function(){e.scrollTo(n,!0),e.initialized=!0},10):this.initialized=!0},scrollTo:function(e,n){var r=this.scroller,i=r.get(e);if(i&&(n||e!==r.getActiveLink())){var s=this.containers[e]||document;r.scrollTo(e,{container:s})}},getHash:function(){return Oh.default.getHash()},changeHash:function(e,n){this.isInitialized()&&Oh.default.getHash()!==e&&Oh.default.updateHash(e,n)},handleHashChange:function(){this.scrollTo(this.getHash())},unmount:function(){this.scroller=null,this.containers=null,window.removeEventListener("hashchange",this.handleHashChange)}};Pf.default=vF;Object.defineProperty(Ka,"__esModule",{value:!0});var Ul=Object.assign||function(t){for(var e=1;e<arguments.length;e++){var n=arguments[e];for(var r in n)Object.prototype.hasOwnProperty.call(n,r)&&(t[r]=n[r])}return t},yF=function(){function t(e,n){for(var r=0;r<n.length;r++){var i=n[r];i.enumerable=i.enumerable||!1,i.configurable=!0,"value"in i&&(i.writable=!0),Object.defineProperty(e,i.key,i)}}return function(e,n,r){return n&&t(e.prototype,n),r&&t(e,r),e}}(),_F=A,O0=Za(_F),wF=Ga,jl=Za(wF),EF=Ds,TF=Za(EF),IF=Wa,ce=Za(IF),SF=Pf,$n=Za(SF);function Za(t){return t&&t.__esModule?t:{default:t}}function AF(t,e){if(!(t instanceof e))throw new TypeError("Cannot call a class as a function")}function kF(t,e){if(!t)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return e&&(typeof e=="object"||typeof e=="function")?e:t}function PF(t,e){if(typeof e!="function"&&e!==null)throw new TypeError("Super expression must either be null or a function, not "+typeof e);t.prototype=Object.create(e&&e.prototype,{constructor:{value:t,enumerable:!1,writable:!0,configurable:!0}}),e&&(Object.setPrototypeOf?Object.setPrototypeOf(t,e):t.__proto__=e)}var D0={to:ce.default.string.isRequired,containerId:ce.default.string,container:ce.default.object,activeClass:ce.default.string,activeStyle:ce.default.object,spy:ce.default.bool,horizontal:ce.default.bool,smooth:ce.default.oneOfType([ce.default.bool,ce.default.string]),offset:ce.default.number,delay:ce.default.number,isDynamic:ce.default.bool,onClick:ce.default.func,duration:ce.default.oneOfType([ce.default.number,ce.default.func]),absolute:ce.default.bool,onSetActive:ce.default.func,onSetInactive:ce.default.func,ignoreCancelEvents:ce.default.bool,hashSpy:ce.default.bool,saveHashHistory:ce.default.bool,spyThrottle:ce.default.number};Ka.default=function(t,e){var n=e||TF.default,r=function(s){PF(o,s);function o(a){AF(this,o);var l=kF(this,(o.__proto__||Object.getPrototypeOf(o)).call(this,a));return i.call(l),l.state={active:!1},l}return yF(o,[{key:"getScrollSpyContainer",value:function(){var l=this.props.containerId,u=this.props.container;return l&&!u?document.getElementById(l):u&&u.nodeType?u:document}},{key:"componentDidMount",value:function(){if(this.props.spy||this.props.hashSpy){var l=this.getScrollSpyContainer();jl.default.isMounted(l)||jl.default.mount(l,this.props.spyThrottle),this.props.hashSpy&&($n.default.isMounted()||$n.default.mount(n),$n.default.mapContainer(this.props.to,l)),jl.default.addSpyHandler(this.spyHandler,l),this.setState({container:l})}}},{key:"componentWillUnmount",value:function(){jl.default.unmount(this.stateHandler,this.spyHandler)}},{key:"render",value:function(){var l="";this.state&&this.state.active?l=((this.props.className||"")+" "+(this.props.activeClass||"active")).trim():l=this.props.className;var u={};this.state&&this.state.active?u=Ul({},this.props.style,this.props.activeStyle):u=Ul({},this.props.style);var c=Ul({},this.props);for(var f in D0)c.hasOwnProperty(f)&&delete c[f];return c.className=l,c.style=u,c.onClick=this.handleClick,O0.default.createElement(t,c)}}]),o}(O0.default.PureComponent),i=function(){var o=this;this.scrollTo=function(a,l){n.scrollTo(a,Ul({},o.state,l))},this.handleClick=function(a){o.props.onClick&&o.props.onClick(a),a.stopPropagation&&a.stopPropagation(),a.preventDefault&&a.preventDefault(),o.scrollTo(o.props.to,o.props)},this.spyHandler=function(a,l){var u=o.getScrollSpyContainer();if(!($n.default.isMounted()&&!$n.default.isInitialized())){var c=o.props.horizontal,f=o.props.to,h=null,p=void 0,y=void 0;if(c){var _=0,w=0,m=0;if(u.getBoundingClientRect){var d=u.getBoundingClientRect();m=d.left}if(!h||o.props.isDynamic){if(h=n.get(f),!h)return;var g=h.getBoundingClientRect();_=g.left-m+a,w=_+g.width}var E=a-o.props.offset;p=E>=Math.floor(_)&&E<Math.floor(w),y=E<Math.floor(_)||E>=Math.floor(w)}else{var I=0,k=0,C=0;if(u.getBoundingClientRect){var N=u.getBoundingClientRect();C=N.top}if(!h||o.props.isDynamic){if(h=n.get(f),!h)return;var B=h.getBoundingClientRect();I=B.top-C+l,k=I+B.height}var F=l-o.props.offset;p=F>=Math.floor(I)&&F<Math.floor(k),y=F<Math.floor(I)||F>=Math.floor(k)}var ft=n.getActiveLink();if(y){if(f===ft&&n.setActiveLink(void 0),o.props.hashSpy&&$n.default.getHash()===f){var Ln=o.props.saveHashHistory,Dr=Ln===void 0?!1:Ln;$n.default.changeHash("",Dr)}o.props.spy&&o.state.active&&(o.setState({active:!1}),o.props.onSetInactive&&o.props.onSetInactive(f,h))}if(p&&(ft!==f||o.state.active===!1)){n.setActiveLink(f);var Ls=o.props.saveHashHistory,bf=Ls===void 0?!1:Ls;o.props.hashSpy&&$n.default.changeHash(f,bf),o.props.spy&&(o.setState({active:!0}),o.props.onSetActive&&o.props.onSetActive(f,h))}}}};return r.propTypes=D0,r.defaultProps={offset:0},r};Object.defineProperty(sv,"__esModule",{value:!0});var CF=A,L0=mA(CF),RF=Ka,bF=mA(RF);function mA(t){return t&&t.__esModule?t:{default:t}}function xF(t,e){if(!(t instanceof e))throw new TypeError("Cannot call a class as a function")}function M0(t,e){if(!t)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return e&&(typeof e=="object"||typeof e=="function")?e:t}function NF(t,e){if(typeof e!="function"&&e!==null)throw new TypeError("Super expression must either be null or a function, not "+typeof e);t.prototype=Object.create(e&&e.prototype,{constructor:{value:t,enumerable:!1,writable:!0,configurable:!0}}),e&&(Object.setPrototypeOf?Object.setPrototypeOf(t,e):t.__proto__=e)}var OF=function(t){NF(e,t);function e(){var n,r,i,s;xF(this,e);for(var o=arguments.length,a=Array(o),l=0;l<o;l++)a[l]=arguments[l];return s=(r=(i=M0(this,(n=e.__proto__||Object.getPrototypeOf(e)).call.apply(n,[this].concat(a))),i),i.render=function(){return L0.default.createElement("a",i.props,i.props.children)},r),M0(i,s)}return e}(L0.default.Component);sv.default=(0,bF.default)(OF);var cv={};Object.defineProperty(cv,"__esModule",{value:!0});var DF=function(){function t(e,n){for(var r=0;r<n.length;r++){var i=n[r];i.enumerable=i.enumerable||!1,i.configurable=!0,"value"in i&&(i.writable=!0),Object.defineProperty(e,i.key,i)}}return function(e,n,r){return n&&t(e.prototype,n),r&&t(e,r),e}}(),LF=A,V0=gA(LF),MF=Ka,VF=gA(MF);function gA(t){return t&&t.__esModule?t:{default:t}}function FF(t,e){if(!(t instanceof e))throw new TypeError("Cannot call a class as a function")}function $F(t,e){if(!t)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return e&&(typeof e=="object"||typeof e=="function")?e:t}function UF(t,e){if(typeof e!="function"&&e!==null)throw new TypeError("Super expression must either be null or a function, not "+typeof e);t.prototype=Object.create(e&&e.prototype,{constructor:{value:t,enumerable:!1,writable:!0,configurable:!0}}),e&&(Object.setPrototypeOf?Object.setPrototypeOf(t,e):t.__proto__=e)}var jF=function(t){UF(e,t);function e(){return FF(this,e),$F(this,(e.__proto__||Object.getPrototypeOf(e)).apply(this,arguments))}return DF(e,[{key:"render",value:function(){return V0.default.createElement("button",this.props,this.props.children)}}]),e}(V0.default.Component);cv.default=(0,VF.default)(jF);var fv={},Cf={};Object.defineProperty(Cf,"__esModule",{value:!0});var zF=Object.assign||function(t){for(var e=1;e<arguments.length;e++){var n=arguments[e];for(var r in n)Object.prototype.hasOwnProperty.call(n,r)&&(t[r]=n[r])}return t},BF=function(){function t(e,n){for(var r=0;r<n.length;r++){var i=n[r];i.enumerable=i.enumerable||!1,i.configurable=!0,"value"in i&&(i.writable=!0),Object.defineProperty(e,i.key,i)}}return function(e,n,r){return n&&t(e.prototype,n),r&&t(e,r),e}}(),HF=A,F0=Rf(HF),WF=uE;Rf(WF);var qF=Ds,$0=Rf(qF),KF=Wa,U0=Rf(KF);function Rf(t){return t&&t.__esModule?t:{default:t}}function GF(t,e){if(!(t instanceof e))throw new TypeError("Cannot call a class as a function")}function QF(t,e){if(!t)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return e&&(typeof e=="object"||typeof e=="function")?e:t}function YF(t,e){if(typeof e!="function"&&e!==null)throw new TypeError("Super expression must either be null or a function, not "+typeof e);t.prototype=Object.create(e&&e.prototype,{constructor:{value:t,enumerable:!1,writable:!0,configurable:!0}}),e&&(Object.setPrototypeOf?Object.setPrototypeOf(t,e):t.__proto__=e)}Cf.default=function(t){var e=function(n){YF(r,n);function r(i){GF(this,r);var s=QF(this,(r.__proto__||Object.getPrototypeOf(r)).call(this,i));return s.childBindings={domNode:null},s}return BF(r,[{key:"componentDidMount",value:function(){if(typeof window>"u")return!1;this.registerElems(this.props.name)}},{key:"componentDidUpdate",value:function(s){this.props.name!==s.name&&this.registerElems(this.props.name)}},{key:"componentWillUnmount",value:function(){if(typeof window>"u")return!1;$0.default.unregister(this.props.name)}},{key:"registerElems",value:function(s){$0.default.register(s,this.childBindings.domNode)}},{key:"render",value:function(){return F0.default.createElement(t,zF({},this.props,{parentBindings:this.childBindings}))}}]),r}(F0.default.Component);return e.propTypes={name:U0.default.string,id:U0.default.string},e};Object.defineProperty(fv,"__esModule",{value:!0});var j0=Object.assign||function(t){for(var e=1;e<arguments.length;e++){var n=arguments[e];for(var r in n)Object.prototype.hasOwnProperty.call(n,r)&&(t[r]=n[r])}return t},XF=function(){function t(e,n){for(var r=0;r<n.length;r++){var i=n[r];i.enumerable=i.enumerable||!1,i.configurable=!0,"value"in i&&(i.writable=!0),Object.defineProperty(e,i.key,i)}}return function(e,n,r){return n&&t(e.prototype,n),r&&t(e,r),e}}(),JF=A,z0=hv(JF),ZF=Cf,e3=hv(ZF),t3=Wa,B0=hv(t3);function hv(t){return t&&t.__esModule?t:{default:t}}function n3(t,e){if(!(t instanceof e))throw new TypeError("Cannot call a class as a function")}function r3(t,e){if(!t)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return e&&(typeof e=="object"||typeof e=="function")?e:t}function i3(t,e){if(typeof e!="function"&&e!==null)throw new TypeError("Super expression must either be null or a function, not "+typeof e);t.prototype=Object.create(e&&e.prototype,{constructor:{value:t,enumerable:!1,writable:!0,configurable:!0}}),e&&(Object.setPrototypeOf?Object.setPrototypeOf(t,e):t.__proto__=e)}var vA=function(t){i3(e,t);function e(){return n3(this,e),r3(this,(e.__proto__||Object.getPrototypeOf(e)).apply(this,arguments))}return XF(e,[{key:"render",value:function(){var r=this,i=j0({},this.props);return delete i.name,i.parentBindings&&delete i.parentBindings,z0.default.createElement("div",j0({},i,{ref:function(o){r.props.parentBindings.domNode=o}}),this.props.children)}}]),e}(z0.default.Component);vA.propTypes={name:B0.default.string,id:B0.default.string};fv.default=(0,e3.default)(vA);var Dh=Object.assign||function(t){for(var e=1;e<arguments.length;e++){var n=arguments[e];for(var r in n)Object.prototype.hasOwnProperty.call(n,r)&&(t[r]=n[r])}return t},H0=function(){function t(e,n){for(var r=0;r<n.length;r++){var i=n[r];i.enumerable=i.enumerable||!1,i.configurable=!0,"value"in i&&(i.writable=!0),Object.defineProperty(e,i.key,i)}}return function(e,n,r){return n&&t(e.prototype,n),r&&t(e,r),e}}();function W0(t,e){if(!(t instanceof e))throw new TypeError("Cannot call a class as a function")}function q0(t,e){if(!t)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return e&&(typeof e=="object"||typeof e=="function")?e:t}function K0(t,e){if(typeof e!="function"&&e!==null)throw new TypeError("Super expression must either be null or a function, not "+typeof e);t.prototype=Object.create(e&&e.prototype,{constructor:{value:t,enumerable:!1,writable:!0,configurable:!0}}),e&&(Object.setPrototypeOf?Object.setPrototypeOf(t,e):t.__proto__=e)}var zl=A,Vr=Ga,Lh=Ds,de=Wa,Un=Pf,G0={to:de.string.isRequired,containerId:de.string,container:de.object,activeClass:de.string,spy:de.bool,smooth:de.oneOfType([de.bool,de.string]),offset:de.number,delay:de.number,isDynamic:de.bool,onClick:de.func,duration:de.oneOfType([de.number,de.func]),absolute:de.bool,onSetActive:de.func,onSetInactive:de.func,ignoreCancelEvents:de.bool,hashSpy:de.bool,spyThrottle:de.number},s3={Scroll:function(e,n){console.warn("Helpers.Scroll is deprecated since v1.7.0");var r=n||Lh,i=function(o){K0(a,o);function a(l){W0(this,a);var u=q0(this,(a.__proto__||Object.getPrototypeOf(a)).call(this,l));return s.call(u),u.state={active:!1},u}return H0(a,[{key:"getScrollSpyContainer",value:function(){var u=this.props.containerId,c=this.props.container;return u?document.getElementById(u):c&&c.nodeType?c:document}},{key:"componentDidMount",value:function(){if(this.props.spy||this.props.hashSpy){var u=this.getScrollSpyContainer();Vr.isMounted(u)||Vr.mount(u,this.props.spyThrottle),this.props.hashSpy&&(Un.isMounted()||Un.mount(r),Un.mapContainer(this.props.to,u)),this.props.spy&&Vr.addStateHandler(this.stateHandler),Vr.addSpyHandler(this.spyHandler,u),this.setState({container:u})}}},{key:"componentWillUnmount",value:function(){Vr.unmount(this.stateHandler,this.spyHandler)}},{key:"render",value:function(){var u="";this.state&&this.state.active?u=((this.props.className||"")+" "+(this.props.activeClass||"active")).trim():u=this.props.className;var c=Dh({},this.props);for(var f in G0)c.hasOwnProperty(f)&&delete c[f];return c.className=u,c.onClick=this.handleClick,zl.createElement(e,c)}}]),a}(zl.Component),s=function(){var a=this;this.scrollTo=function(l,u){r.scrollTo(l,Dh({},a.state,u))},this.handleClick=function(l){a.props.onClick&&a.props.onClick(l),l.stopPropagation&&l.stopPropagation(),l.preventDefault&&l.preventDefault(),a.scrollTo(a.props.to,a.props)},this.stateHandler=function(){r.getActiveLink()!==a.props.to&&(a.state!==null&&a.state.active&&a.props.onSetInactive&&a.props.onSetInactive(),a.setState({active:!1}))},this.spyHandler=function(l){var u=a.getScrollSpyContainer();if(!(Un.isMounted()&&!Un.isInitialized())){var c=a.props.to,f=null,h=0,p=0,y=0;if(u.getBoundingClientRect){var _=u.getBoundingClientRect();y=_.top}if(!f||a.props.isDynamic){if(f=r.get(c),!f)return;var w=f.getBoundingClientRect();h=w.top-y+l,p=h+w.height}var m=l-a.props.offset,d=m>=Math.floor(h)&&m<Math.floor(p),g=m<Math.floor(h)||m>=Math.floor(p),E=r.getActiveLink();if(g)return c===E&&r.setActiveLink(void 0),a.props.hashSpy&&Un.getHash()===c&&Un.changeHash(),a.props.spy&&a.state.active&&(a.setState({active:!1}),a.props.onSetInactive&&a.props.onSetInactive()),Vr.updateStates();if(d&&E!==c)return r.setActiveLink(c),a.props.hashSpy&&Un.changeHash(c),a.props.spy&&(a.setState({active:!0}),a.props.onSetActive&&a.props.onSetActive(c)),Vr.updateStates()}}};return i.propTypes=G0,i.defaultProps={offset:0},i},Element:function(e){console.warn("Helpers.Element is deprecated since v1.7.0");var n=function(r){K0(i,r);function i(s){W0(this,i);var o=q0(this,(i.__proto__||Object.getPrototypeOf(i)).call(this,s));return o.childBindings={domNode:null},o}return H0(i,[{key:"componentDidMount",value:function(){if(typeof window>"u")return!1;this.registerElems(this.props.name)}},{key:"componentDidUpdate",value:function(o){this.props.name!==o.name&&this.registerElems(this.props.name)}},{key:"componentWillUnmount",value:function(){if(typeof window>"u")return!1;Lh.unregister(this.props.name)}},{key:"registerElems",value:function(o){Lh.register(o,this.childBindings.domNode)}},{key:"render",value:function(){return zl.createElement(e,Dh({},this.props,{parentBindings:this.childBindings}))}}]),i}(zl.Component);return n.propTypes={name:de.string,id:de.string},n}},o3=s3;Object.defineProperty(ye,"__esModule",{value:!0});ye.Helpers=ye.ScrollElement=ye.ScrollLink=ye.animateScroll=ye.scrollSpy=ye.Events=ye.scroller=Rp=ye.Element=ye.Button=Cp=ye.Link=void 0;var a3=sv,yA=hn(a3),l3=cv,_A=hn(l3),u3=fv,wA=hn(u3),c3=Ds,EA=hn(c3),f3=Xa,TA=hn(f3),h3=Ga,IA=hn(h3),d3=Sf,SA=hn(d3),p3=Ka,AA=hn(p3),m3=Cf,kA=hn(m3),g3=o3,PA=hn(g3);function hn(t){return t&&t.__esModule?t:{default:t}}var Cp=ye.Link=yA.default;ye.Button=_A.default;var Rp=ye.Element=wA.default;ye.scroller=EA.default;ye.Events=TA.default;ye.scrollSpy=IA.default;ye.animateScroll=SA.default;ye.ScrollLink=AA.default;ye.ScrollElement=kA.default;ye.Helpers=PA.default;ye.default={Link:yA.default,Button:_A.default,Element:wA.default,scroller:EA.default,Events:TA.default,scrollSpy:IA.default,animateScroll:SA.default,ScrollLink:AA.default,ScrollElement:kA.default,Helpers:PA.default};const v3={width:"100%",height:"100%",objectFit:"cover"},y3={width:"100%",height:"100%",objectFit:"fit"};function _3(){return v.jsxs("div",{className:"landing-container",children:[v.jsxs("div",{className:"navBar",children:[v.jsx("div",{className:"landing-title-container",children:v.jsx("h1",{className:"landing-title",children:"QuickChat"})}),v.jsxs("div",{className:"links",children:[v.jsx(Cp,{className:"featureslink",activeClass:"active",to:"section1",spy:!0,smooth:!0,offset:-70,duration:500,children:v.jsx("h4",{children:"Features"})}),v.jsx(Cp,{className:"AboutUs",activeClass:"active",to:"section2",spy:!0,smooth:!0,offset:-70,duration:500,children:v.jsx("h4",{children:"About"})}),v.jsx("a",{href:"https://github.com/lawrencemasilo/QuickChat",target:"_blank",rel:"noopener noreferrer",className:"github",children:v.jsx(qa,{icon:v4})})]}),v.jsxs("div",{className:"landing-button-container",children:[v.jsx("a",{href:"/Login",className:"landing-login-button",children:"Login"}),v.jsx("a",{href:"/SignUp",className:"landing-signup-button",children:"SignUp"})]})]}),v.jsxs("div",{className:"hero",children:[v.jsx("div",{className:"hero-image-container",children:v.jsx("img",{src:vM,alt:"",className:"hero-image"})}),v.jsxs("div",{className:"call-to-action-container",children:[v.jsxs("h1",{className:"hero-title",children:["For a simple, ",v.jsx("span",{className:"hero-title2",children:"Instant life..."})]}),v.jsxs("div",{className:"hero-button-container",children:[v.jsx("a",{href:"/Login",className:"hero-login-button",children:"LOGIN"}),v.jsx("a",{href:"/SignUp",className:"hero-signup-button",children:"TRY FOR FREE"})]})]})]}),v.jsx(Rp,{name:"section1",className:"element",children:v.jsxs("div",{className:"features-container",children:[v.jsxs("div",{className:"user-auth-feature-container",children:[v.jsxs("div",{className:"feature-desc-container",children:[v.jsx("h1",{className:"feature-desc-title",children:"Your Security Is Our Priorty"}),v.jsxs("p",{className:"feature-desc",children:["A simple and secure user authentication system, ",v.jsx("span",{className:"feature-desc-link",children:"try it out for yourself"})]})]}),v.jsx("div",{className:"feature-image-container",children:v.jsx("video",{autoPlay:!0,loop:!0,controls:!0,style:v3,children:v.jsx("source",{src:_M,type:"video/mp4"})})})]}),v.jsxs("div",{className:"user-auth-feature-container",children:[v.jsx("div",{className:"feature-image-container2",children:v.jsx("video",{autoPlay:!0,loop:!0,controls:!0,style:y3,children:v.jsx("source",{src:wM,type:"video/mp4"})})}),v.jsxs("div",{className:"feature-desc-container2",children:[v.jsx("h1",{className:"feature-desc-title",children:"Instant messaging..."}),v.jsxs("p",{className:"feature-desc",children:["Send and receive messages in Real-Time, ",v.jsx("span",{className:"feature-desc-link",children:"try it out for yourself"})]})]})]})]})}),v.jsx(Rp,{name:"section2",className:"element",children:v.jsxs("div",{className:"about-us-container",children:[v.jsxs("div",{className:"team-container",children:[v.jsx("div",{className:"team-title-container",children:v.jsx("h2",{className:"team-title",children:"Meet The Team"})}),v.jsxs("div",{className:"team-member-container",children:[v.jsx("div",{className:"member-image-container",children:v.jsx("img",{src:yM,alt:"",className:"member-image"})}),v.jsxs("div",{className:"member-info",children:[v.jsx("h3",{className:"member-name",children:"Neo Masilo"}),v.jsx("p",{className:"member-role",children:"Full stack developer"}),v.jsxs("ul",{className:"member-role-desc",children:[v.jsx("li",{children:"Designed the UI/UX"}),v.jsx("li",{children:"Developed the front-end"}),v.jsx("li",{children:"Developed the back-end"})]})]})]})]}),v.jsxs("div",{className:"desc-container",children:[v.jsx("h2",{className:"desc-title",children:"QuickChat"}),v.jsx("p",{className:"desc",children:"I developed QuickChat as a demonstration of my skills in full-stack web development, showcasing my ability to integrate technologies like Flask, ReactJS, and Firebase to create real-time communication platforms. It serves as a testament to my proficiency in building user-friendly and responsive web applications, contributing to my portfolio and highlighting my capabilities to potential employers and collaborators."})]})]})})]})}function w3(){const{currentUser:t}=A.useContext(On),e=({children:n})=>t?n:v.jsx(zC,{to:"/login/"});return v.jsx(XC,{children:v.jsx(HC,{children:v.jsxs(Ii,{children:[v.jsx(Ii,{path:"/",element:v.jsx(_3,{})}),v.jsx(Ii,{path:"/login",element:v.jsx(mM,{})}),v.jsx(Ii,{path:"/signup",element:v.jsx(gM,{})}),v.jsx(Ii,{path:"/home",element:v.jsx(e,{children:v.jsx(pM,{})})})]})})})}Mh.createRoot(document.getElementById("root")).render(v.jsx(hc.StrictMode,{children:v.jsx(rM,{children:v.jsx(oM,{children:v.jsx(w3,{})})})}));
