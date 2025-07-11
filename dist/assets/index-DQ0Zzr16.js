function db(e,r){for(var s=0;s<r.length;s++){const i=r[s];if(typeof i!="string"&&!Array.isArray(i)){for(const o in i)if(o!=="default"&&!(o in e)){const c=Object.getOwnPropertyDescriptor(i,o);c&&Object.defineProperty(e,o,c.get?c:{enumerable:!0,get:()=>i[o]})}}}return Object.freeze(Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}))}(function(){const r=document.createElement("link").relList;if(r&&r.supports&&r.supports("modulepreload"))return;for(const o of document.querySelectorAll('link[rel="modulepreload"]'))i(o);new MutationObserver(o=>{for(const c of o)if(c.type==="childList")for(const d of c.addedNodes)d.tagName==="LINK"&&d.rel==="modulepreload"&&i(d)}).observe(document,{childList:!0,subtree:!0});function s(o){const c={};return o.integrity&&(c.integrity=o.integrity),o.referrerPolicy&&(c.referrerPolicy=o.referrerPolicy),o.crossOrigin==="use-credentials"?c.credentials="include":o.crossOrigin==="anonymous"?c.credentials="omit":c.credentials="same-origin",c}function i(o){if(o.ep)return;o.ep=!0;const c=s(o);fetch(o.href,c)}})();function ug(e){return e&&e.__esModule&&Object.prototype.hasOwnProperty.call(e,"default")?e.default:e}var iu={exports:{}},la={},au={exports:{}},De={};/**
 * @license React
 * react.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var gh;function fb(){if(gh)return De;gh=1;var e=Symbol.for("react.element"),r=Symbol.for("react.portal"),s=Symbol.for("react.fragment"),i=Symbol.for("react.strict_mode"),o=Symbol.for("react.profiler"),c=Symbol.for("react.provider"),d=Symbol.for("react.context"),p=Symbol.for("react.forward_ref"),h=Symbol.for("react.suspense"),g=Symbol.for("react.memo"),v=Symbol.for("react.lazy"),b=Symbol.iterator;function w(C){return C===null||typeof C!="object"?null:(C=b&&C[b]||C["@@iterator"],typeof C=="function"?C:null)}var j={isMounted:function(){return!1},enqueueForceUpdate:function(){},enqueueReplaceState:function(){},enqueueSetState:function(){}},L=Object.assign,N={};function I(C,U,oe){this.props=C,this.context=U,this.refs=N,this.updater=oe||j}I.prototype.isReactComponent={},I.prototype.setState=function(C,U){if(typeof C!="object"&&typeof C!="function"&&C!=null)throw Error("setState(...): takes an object of state variables to update or a function which returns an object of state variables.");this.updater.enqueueSetState(this,C,U,"setState")},I.prototype.forceUpdate=function(C){this.updater.enqueueForceUpdate(this,C,"forceUpdate")};function Z(){}Z.prototype=I.prototype;function V(C,U,oe){this.props=C,this.context=U,this.refs=N,this.updater=oe||j}var F=V.prototype=new Z;F.constructor=V,L(F,I.prototype),F.isPureReactComponent=!0;var z=Array.isArray,T=Object.prototype.hasOwnProperty,Q={current:null},ye={key:!0,ref:!0,__self:!0,__source:!0};function he(C,U,oe){var Te,le={},Pe=null,Le=null;if(U!=null)for(Te in U.ref!==void 0&&(Le=U.ref),U.key!==void 0&&(Pe=""+U.key),U)T.call(U,Te)&&!ye.hasOwnProperty(Te)&&(le[Te]=U[Te]);var Ie=arguments.length-2;if(Ie===1)le.children=oe;else if(1<Ie){for(var je=Array(Ie),ht=0;ht<Ie;ht++)je[ht]=arguments[ht+2];le.children=je}if(C&&C.defaultProps)for(Te in Ie=C.defaultProps,Ie)le[Te]===void 0&&(le[Te]=Ie[Te]);return{$$typeof:e,type:C,key:Pe,ref:Le,props:le,_owner:Q.current}}function be(C,U){return{$$typeof:e,type:C.type,key:U,ref:C.ref,props:C.props,_owner:C._owner}}function Ve(C){return typeof C=="object"&&C!==null&&C.$$typeof===e}function Ce(C){var U={"=":"=0",":":"=2"};return"$"+C.replace(/[=:]/g,function(oe){return U[oe]})}var xe=/\/+/g;function we(C,U){return typeof C=="object"&&C!==null&&C.key!=null?Ce(""+C.key):U.toString(36)}function Oe(C,U,oe,Te,le){var Pe=typeof C;(Pe==="undefined"||Pe==="boolean")&&(C=null);var Le=!1;if(C===null)Le=!0;else switch(Pe){case"string":case"number":Le=!0;break;case"object":switch(C.$$typeof){case e:case r:Le=!0}}if(Le)return Le=C,le=le(Le),C=Te===""?"."+we(Le,0):Te,z(le)?(oe="",C!=null&&(oe=C.replace(xe,"$&/")+"/"),Oe(le,U,oe,"",function(ht){return ht})):le!=null&&(Ve(le)&&(le=be(le,oe+(!le.key||Le&&Le.key===le.key?"":(""+le.key).replace(xe,"$&/")+"/")+C)),U.push(le)),1;if(Le=0,Te=Te===""?".":Te+":",z(C))for(var Ie=0;Ie<C.length;Ie++){Pe=C[Ie];var je=Te+we(Pe,Ie);Le+=Oe(Pe,U,oe,je,le)}else if(je=w(C),typeof je=="function")for(C=je.call(C),Ie=0;!(Pe=C.next()).done;)Pe=Pe.value,je=Te+we(Pe,Ie++),Le+=Oe(Pe,U,oe,je,le);else if(Pe==="object")throw U=String(C),Error("Objects are not valid as a React child (found: "+(U==="[object Object]"?"object with keys {"+Object.keys(C).join(", ")+"}":U)+"). If you meant to render a collection of children, use an array instead.");return Le}function Ye(C,U,oe){if(C==null)return C;var Te=[],le=0;return Oe(C,Te,"","",function(Pe){return U.call(oe,Pe,le++)}),Te}function He(C){if(C._status===-1){var U=C._result;U=U(),U.then(function(oe){(C._status===0||C._status===-1)&&(C._status=1,C._result=oe)},function(oe){(C._status===0||C._status===-1)&&(C._status=2,C._result=oe)}),C._status===-1&&(C._status=0,C._result=U)}if(C._status===1)return C._result.default;throw C._result}var Re={current:null},K={transition:null},fe={ReactCurrentDispatcher:Re,ReactCurrentBatchConfig:K,ReactCurrentOwner:Q};function J(){throw Error("act(...) is not supported in production builds of React.")}return De.Children={map:Ye,forEach:function(C,U,oe){Ye(C,function(){U.apply(this,arguments)},oe)},count:function(C){var U=0;return Ye(C,function(){U++}),U},toArray:function(C){return Ye(C,function(U){return U})||[]},only:function(C){if(!Ve(C))throw Error("React.Children.only expected to receive a single React element child.");return C}},De.Component=I,De.Fragment=s,De.Profiler=o,De.PureComponent=V,De.StrictMode=i,De.Suspense=h,De.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED=fe,De.act=J,De.cloneElement=function(C,U,oe){if(C==null)throw Error("React.cloneElement(...): The argument must be a React element, but you passed "+C+".");var Te=L({},C.props),le=C.key,Pe=C.ref,Le=C._owner;if(U!=null){if(U.ref!==void 0&&(Pe=U.ref,Le=Q.current),U.key!==void 0&&(le=""+U.key),C.type&&C.type.defaultProps)var Ie=C.type.defaultProps;for(je in U)T.call(U,je)&&!ye.hasOwnProperty(je)&&(Te[je]=U[je]===void 0&&Ie!==void 0?Ie[je]:U[je])}var je=arguments.length-2;if(je===1)Te.children=oe;else if(1<je){Ie=Array(je);for(var ht=0;ht<je;ht++)Ie[ht]=arguments[ht+2];Te.children=Ie}return{$$typeof:e,type:C.type,key:le,ref:Pe,props:Te,_owner:Le}},De.createContext=function(C){return C={$$typeof:d,_currentValue:C,_currentValue2:C,_threadCount:0,Provider:null,Consumer:null,_defaultValue:null,_globalName:null},C.Provider={$$typeof:c,_context:C},C.Consumer=C},De.createElement=he,De.createFactory=function(C){var U=he.bind(null,C);return U.type=C,U},De.createRef=function(){return{current:null}},De.forwardRef=function(C){return{$$typeof:p,render:C}},De.isValidElement=Ve,De.lazy=function(C){return{$$typeof:v,_payload:{_status:-1,_result:C},_init:He}},De.memo=function(C,U){return{$$typeof:g,type:C,compare:U===void 0?null:U}},De.startTransition=function(C){var U=K.transition;K.transition={};try{C()}finally{K.transition=U}},De.unstable_act=J,De.useCallback=function(C,U){return Re.current.useCallback(C,U)},De.useContext=function(C){return Re.current.useContext(C)},De.useDebugValue=function(){},De.useDeferredValue=function(C){return Re.current.useDeferredValue(C)},De.useEffect=function(C,U){return Re.current.useEffect(C,U)},De.useId=function(){return Re.current.useId()},De.useImperativeHandle=function(C,U,oe){return Re.current.useImperativeHandle(C,U,oe)},De.useInsertionEffect=function(C,U){return Re.current.useInsertionEffect(C,U)},De.useLayoutEffect=function(C,U){return Re.current.useLayoutEffect(C,U)},De.useMemo=function(C,U){return Re.current.useMemo(C,U)},De.useReducer=function(C,U,oe){return Re.current.useReducer(C,U,oe)},De.useRef=function(C){return Re.current.useRef(C)},De.useState=function(C){return Re.current.useState(C)},De.useSyncExternalStore=function(C,U,oe){return Re.current.useSyncExternalStore(C,U,oe)},De.useTransition=function(){return Re.current.useTransition()},De.version="18.3.1",De}var vh;function pd(){return vh||(vh=1,au.exports=fb()),au.exports}/**
 * @license React
 * react-jsx-runtime.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var yh;function pb(){if(yh)return la;yh=1;var e=pd(),r=Symbol.for("react.element"),s=Symbol.for("react.fragment"),i=Object.prototype.hasOwnProperty,o=e.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED.ReactCurrentOwner,c={key:!0,ref:!0,__self:!0,__source:!0};function d(p,h,g){var v,b={},w=null,j=null;g!==void 0&&(w=""+g),h.key!==void 0&&(w=""+h.key),h.ref!==void 0&&(j=h.ref);for(v in h)i.call(h,v)&&!c.hasOwnProperty(v)&&(b[v]=h[v]);if(p&&p.defaultProps)for(v in h=p.defaultProps,h)b[v]===void 0&&(b[v]=h[v]);return{$$typeof:r,type:p,key:w,ref:j,props:b,_owner:o.current}}return la.Fragment=s,la.jsx=d,la.jsxs=d,la}var bh;function hb(){return bh||(bh=1,iu.exports=pb()),iu.exports}var y=hb(),O=pd();const Vt=ug(O),mb=db({__proto__:null,default:Vt},[O]);var Yo={},ou={exports:{}},tr={},lu={exports:{}},cu={};/**
 * @license React
 * scheduler.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var xh;function gb(){return xh||(xh=1,function(e){function r(K,fe){var J=K.length;K.push(fe);e:for(;0<J;){var C=J-1>>>1,U=K[C];if(0<o(U,fe))K[C]=fe,K[J]=U,J=C;else break e}}function s(K){return K.length===0?null:K[0]}function i(K){if(K.length===0)return null;var fe=K[0],J=K.pop();if(J!==fe){K[0]=J;e:for(var C=0,U=K.length,oe=U>>>1;C<oe;){var Te=2*(C+1)-1,le=K[Te],Pe=Te+1,Le=K[Pe];if(0>o(le,J))Pe<U&&0>o(Le,le)?(K[C]=Le,K[Pe]=J,C=Pe):(K[C]=le,K[Te]=J,C=Te);else if(Pe<U&&0>o(Le,J))K[C]=Le,K[Pe]=J,C=Pe;else break e}}return fe}function o(K,fe){var J=K.sortIndex-fe.sortIndex;return J!==0?J:K.id-fe.id}if(typeof performance=="object"&&typeof performance.now=="function"){var c=performance;e.unstable_now=function(){return c.now()}}else{var d=Date,p=d.now();e.unstable_now=function(){return d.now()-p}}var h=[],g=[],v=1,b=null,w=3,j=!1,L=!1,N=!1,I=typeof setTimeout=="function"?setTimeout:null,Z=typeof clearTimeout=="function"?clearTimeout:null,V=typeof setImmediate<"u"?setImmediate:null;typeof navigator<"u"&&navigator.scheduling!==void 0&&navigator.scheduling.isInputPending!==void 0&&navigator.scheduling.isInputPending.bind(navigator.scheduling);function F(K){for(var fe=s(g);fe!==null;){if(fe.callback===null)i(g);else if(fe.startTime<=K)i(g),fe.sortIndex=fe.expirationTime,r(h,fe);else break;fe=s(g)}}function z(K){if(N=!1,F(K),!L)if(s(h)!==null)L=!0,He(T);else{var fe=s(g);fe!==null&&Re(z,fe.startTime-K)}}function T(K,fe){L=!1,N&&(N=!1,Z(he),he=-1),j=!0;var J=w;try{for(F(fe),b=s(h);b!==null&&(!(b.expirationTime>fe)||K&&!Ce());){var C=b.callback;if(typeof C=="function"){b.callback=null,w=b.priorityLevel;var U=C(b.expirationTime<=fe);fe=e.unstable_now(),typeof U=="function"?b.callback=U:b===s(h)&&i(h),F(fe)}else i(h);b=s(h)}if(b!==null)var oe=!0;else{var Te=s(g);Te!==null&&Re(z,Te.startTime-fe),oe=!1}return oe}finally{b=null,w=J,j=!1}}var Q=!1,ye=null,he=-1,be=5,Ve=-1;function Ce(){return!(e.unstable_now()-Ve<be)}function xe(){if(ye!==null){var K=e.unstable_now();Ve=K;var fe=!0;try{fe=ye(!0,K)}finally{fe?we():(Q=!1,ye=null)}}else Q=!1}var we;if(typeof V=="function")we=function(){V(xe)};else if(typeof MessageChannel<"u"){var Oe=new MessageChannel,Ye=Oe.port2;Oe.port1.onmessage=xe,we=function(){Ye.postMessage(null)}}else we=function(){I(xe,0)};function He(K){ye=K,Q||(Q=!0,we())}function Re(K,fe){he=I(function(){K(e.unstable_now())},fe)}e.unstable_IdlePriority=5,e.unstable_ImmediatePriority=1,e.unstable_LowPriority=4,e.unstable_NormalPriority=3,e.unstable_Profiling=null,e.unstable_UserBlockingPriority=2,e.unstable_cancelCallback=function(K){K.callback=null},e.unstable_continueExecution=function(){L||j||(L=!0,He(T))},e.unstable_forceFrameRate=function(K){0>K||125<K?console.error("forceFrameRate takes a positive int between 0 and 125, forcing frame rates higher than 125 fps is not supported"):be=0<K?Math.floor(1e3/K):5},e.unstable_getCurrentPriorityLevel=function(){return w},e.unstable_getFirstCallbackNode=function(){return s(h)},e.unstable_next=function(K){switch(w){case 1:case 2:case 3:var fe=3;break;default:fe=w}var J=w;w=fe;try{return K()}finally{w=J}},e.unstable_pauseExecution=function(){},e.unstable_requestPaint=function(){},e.unstable_runWithPriority=function(K,fe){switch(K){case 1:case 2:case 3:case 4:case 5:break;default:K=3}var J=w;w=K;try{return fe()}finally{w=J}},e.unstable_scheduleCallback=function(K,fe,J){var C=e.unstable_now();switch(typeof J=="object"&&J!==null?(J=J.delay,J=typeof J=="number"&&0<J?C+J:C):J=C,K){case 1:var U=-1;break;case 2:U=250;break;case 5:U=1073741823;break;case 4:U=1e4;break;default:U=5e3}return U=J+U,K={id:v++,callback:fe,priorityLevel:K,startTime:J,expirationTime:U,sortIndex:-1},J>C?(K.sortIndex=J,r(g,K),s(h)===null&&K===s(g)&&(N?(Z(he),he=-1):N=!0,Re(z,J-C))):(K.sortIndex=U,r(h,K),L||j||(L=!0,He(T))),K},e.unstable_shouldYield=Ce,e.unstable_wrapCallback=function(K){var fe=w;return function(){var J=w;w=fe;try{return K.apply(this,arguments)}finally{w=J}}}}(cu)),cu}var wh;function vb(){return wh||(wh=1,lu.exports=gb()),lu.exports}/**
 * @license React
 * react-dom.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var _h;function yb(){if(_h)return tr;_h=1;var e=pd(),r=vb();function s(t){for(var n="https://reactjs.org/docs/error-decoder.html?invariant="+t,a=1;a<arguments.length;a++)n+="&args[]="+encodeURIComponent(arguments[a]);return"Minified React error #"+t+"; visit "+n+" for the full message or use the non-minified dev environment for full errors and additional helpful warnings."}var i=new Set,o={};function c(t,n){d(t,n),d(t+"Capture",n)}function d(t,n){for(o[t]=n,t=0;t<n.length;t++)i.add(n[t])}var p=!(typeof window>"u"||typeof window.document>"u"||typeof window.document.createElement>"u"),h=Object.prototype.hasOwnProperty,g=/^[:A-Z_a-z\u00C0-\u00D6\u00D8-\u00F6\u00F8-\u02FF\u0370-\u037D\u037F-\u1FFF\u200C-\u200D\u2070-\u218F\u2C00-\u2FEF\u3001-\uD7FF\uF900-\uFDCF\uFDF0-\uFFFD][:A-Z_a-z\u00C0-\u00D6\u00D8-\u00F6\u00F8-\u02FF\u0370-\u037D\u037F-\u1FFF\u200C-\u200D\u2070-\u218F\u2C00-\u2FEF\u3001-\uD7FF\uF900-\uFDCF\uFDF0-\uFFFD\-.0-9\u00B7\u0300-\u036F\u203F-\u2040]*$/,v={},b={};function w(t){return h.call(b,t)?!0:h.call(v,t)?!1:g.test(t)?b[t]=!0:(v[t]=!0,!1)}function j(t,n,a,l){if(a!==null&&a.type===0)return!1;switch(typeof n){case"function":case"symbol":return!0;case"boolean":return l?!1:a!==null?!a.acceptsBooleans:(t=t.toLowerCase().slice(0,5),t!=="data-"&&t!=="aria-");default:return!1}}function L(t,n,a,l){if(n===null||typeof n>"u"||j(t,n,a,l))return!0;if(l)return!1;if(a!==null)switch(a.type){case 3:return!n;case 4:return n===!1;case 5:return isNaN(n);case 6:return isNaN(n)||1>n}return!1}function N(t,n,a,l,u,f,m){this.acceptsBooleans=n===2||n===3||n===4,this.attributeName=l,this.attributeNamespace=u,this.mustUseProperty=a,this.propertyName=t,this.type=n,this.sanitizeURL=f,this.removeEmptyString=m}var I={};"children dangerouslySetInnerHTML defaultValue defaultChecked innerHTML suppressContentEditableWarning suppressHydrationWarning style".split(" ").forEach(function(t){I[t]=new N(t,0,!1,t,null,!1,!1)}),[["acceptCharset","accept-charset"],["className","class"],["htmlFor","for"],["httpEquiv","http-equiv"]].forEach(function(t){var n=t[0];I[n]=new N(n,1,!1,t[1],null,!1,!1)}),["contentEditable","draggable","spellCheck","value"].forEach(function(t){I[t]=new N(t,2,!1,t.toLowerCase(),null,!1,!1)}),["autoReverse","externalResourcesRequired","focusable","preserveAlpha"].forEach(function(t){I[t]=new N(t,2,!1,t,null,!1,!1)}),"allowFullScreen async autoFocus autoPlay controls default defer disabled disablePictureInPicture disableRemotePlayback formNoValidate hidden loop noModule noValidate open playsInline readOnly required reversed scoped seamless itemScope".split(" ").forEach(function(t){I[t]=new N(t,3,!1,t.toLowerCase(),null,!1,!1)}),["checked","multiple","muted","selected"].forEach(function(t){I[t]=new N(t,3,!0,t,null,!1,!1)}),["capture","download"].forEach(function(t){I[t]=new N(t,4,!1,t,null,!1,!1)}),["cols","rows","size","span"].forEach(function(t){I[t]=new N(t,6,!1,t,null,!1,!1)}),["rowSpan","start"].forEach(function(t){I[t]=new N(t,5,!1,t.toLowerCase(),null,!1,!1)});var Z=/[\-:]([a-z])/g;function V(t){return t[1].toUpperCase()}"accent-height alignment-baseline arabic-form baseline-shift cap-height clip-path clip-rule color-interpolation color-interpolation-filters color-profile color-rendering dominant-baseline enable-background fill-opacity fill-rule flood-color flood-opacity font-family font-size font-size-adjust font-stretch font-style font-variant font-weight glyph-name glyph-orientation-horizontal glyph-orientation-vertical horiz-adv-x horiz-origin-x image-rendering letter-spacing lighting-color marker-end marker-mid marker-start overline-position overline-thickness paint-order panose-1 pointer-events rendering-intent shape-rendering stop-color stop-opacity strikethrough-position strikethrough-thickness stroke-dasharray stroke-dashoffset stroke-linecap stroke-linejoin stroke-miterlimit stroke-opacity stroke-width text-anchor text-decoration text-rendering underline-position underline-thickness unicode-bidi unicode-range units-per-em v-alphabetic v-hanging v-ideographic v-mathematical vector-effect vert-adv-y vert-origin-x vert-origin-y word-spacing writing-mode xmlns:xlink x-height".split(" ").forEach(function(t){var n=t.replace(Z,V);I[n]=new N(n,1,!1,t,null,!1,!1)}),"xlink:actuate xlink:arcrole xlink:role xlink:show xlink:title xlink:type".split(" ").forEach(function(t){var n=t.replace(Z,V);I[n]=new N(n,1,!1,t,"http://www.w3.org/1999/xlink",!1,!1)}),["xml:base","xml:lang","xml:space"].forEach(function(t){var n=t.replace(Z,V);I[n]=new N(n,1,!1,t,"http://www.w3.org/XML/1998/namespace",!1,!1)}),["tabIndex","crossOrigin"].forEach(function(t){I[t]=new N(t,1,!1,t.toLowerCase(),null,!1,!1)}),I.xlinkHref=new N("xlinkHref",1,!1,"xlink:href","http://www.w3.org/1999/xlink",!0,!1),["src","href","action","formAction"].forEach(function(t){I[t]=new N(t,1,!1,t.toLowerCase(),null,!0,!0)});function F(t,n,a,l){var u=I.hasOwnProperty(n)?I[n]:null;(u!==null?u.type!==0:l||!(2<n.length)||n[0]!=="o"&&n[0]!=="O"||n[1]!=="n"&&n[1]!=="N")&&(L(n,a,u,l)&&(a=null),l||u===null?w(n)&&(a===null?t.removeAttribute(n):t.setAttribute(n,""+a)):u.mustUseProperty?t[u.propertyName]=a===null?u.type===3?!1:"":a:(n=u.attributeName,l=u.attributeNamespace,a===null?t.removeAttribute(n):(u=u.type,a=u===3||u===4&&a===!0?"":""+a,l?t.setAttributeNS(l,n,a):t.setAttribute(n,a))))}var z=e.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED,T=Symbol.for("react.element"),Q=Symbol.for("react.portal"),ye=Symbol.for("react.fragment"),he=Symbol.for("react.strict_mode"),be=Symbol.for("react.profiler"),Ve=Symbol.for("react.provider"),Ce=Symbol.for("react.context"),xe=Symbol.for("react.forward_ref"),we=Symbol.for("react.suspense"),Oe=Symbol.for("react.suspense_list"),Ye=Symbol.for("react.memo"),He=Symbol.for("react.lazy"),Re=Symbol.for("react.offscreen"),K=Symbol.iterator;function fe(t){return t===null||typeof t!="object"?null:(t=K&&t[K]||t["@@iterator"],typeof t=="function"?t:null)}var J=Object.assign,C;function U(t){if(C===void 0)try{throw Error()}catch(a){var n=a.stack.trim().match(/\n( *(at )?)/);C=n&&n[1]||""}return`
`+C+t}var oe=!1;function Te(t,n){if(!t||oe)return"";oe=!0;var a=Error.prepareStackTrace;Error.prepareStackTrace=void 0;try{if(n)if(n=function(){throw Error()},Object.defineProperty(n.prototype,"props",{set:function(){throw Error()}}),typeof Reflect=="object"&&Reflect.construct){try{Reflect.construct(n,[])}catch(M){var l=M}Reflect.construct(t,[],n)}else{try{n.call()}catch(M){l=M}t.call(n.prototype)}else{try{throw Error()}catch(M){l=M}t()}}catch(M){if(M&&l&&typeof M.stack=="string"){for(var u=M.stack.split(`
`),f=l.stack.split(`
`),m=u.length-1,x=f.length-1;1<=m&&0<=x&&u[m]!==f[x];)x--;for(;1<=m&&0<=x;m--,x--)if(u[m]!==f[x]){if(m!==1||x!==1)do if(m--,x--,0>x||u[m]!==f[x]){var S=`
`+u[m].replace(" at new "," at ");return t.displayName&&S.includes("<anonymous>")&&(S=S.replace("<anonymous>",t.displayName)),S}while(1<=m&&0<=x);break}}}finally{oe=!1,Error.prepareStackTrace=a}return(t=t?t.displayName||t.name:"")?U(t):""}function le(t){switch(t.tag){case 5:return U(t.type);case 16:return U("Lazy");case 13:return U("Suspense");case 19:return U("SuspenseList");case 0:case 2:case 15:return t=Te(t.type,!1),t;case 11:return t=Te(t.type.render,!1),t;case 1:return t=Te(t.type,!0),t;default:return""}}function Pe(t){if(t==null)return null;if(typeof t=="function")return t.displayName||t.name||null;if(typeof t=="string")return t;switch(t){case ye:return"Fragment";case Q:return"Portal";case be:return"Profiler";case he:return"StrictMode";case we:return"Suspense";case Oe:return"SuspenseList"}if(typeof t=="object")switch(t.$$typeof){case Ce:return(t.displayName||"Context")+".Consumer";case Ve:return(t._context.displayName||"Context")+".Provider";case xe:var n=t.render;return t=t.displayName,t||(t=n.displayName||n.name||"",t=t!==""?"ForwardRef("+t+")":"ForwardRef"),t;case Ye:return n=t.displayName||null,n!==null?n:Pe(t.type)||"Memo";case He:n=t._payload,t=t._init;try{return Pe(t(n))}catch{}}return null}function Le(t){var n=t.type;switch(t.tag){case 24:return"Cache";case 9:return(n.displayName||"Context")+".Consumer";case 10:return(n._context.displayName||"Context")+".Provider";case 18:return"DehydratedFragment";case 11:return t=n.render,t=t.displayName||t.name||"",n.displayName||(t!==""?"ForwardRef("+t+")":"ForwardRef");case 7:return"Fragment";case 5:return n;case 4:return"Portal";case 3:return"Root";case 6:return"Text";case 16:return Pe(n);case 8:return n===he?"StrictMode":"Mode";case 22:return"Offscreen";case 12:return"Profiler";case 21:return"Scope";case 13:return"Suspense";case 19:return"SuspenseList";case 25:return"TracingMarker";case 1:case 0:case 17:case 2:case 14:case 15:if(typeof n=="function")return n.displayName||n.name||null;if(typeof n=="string")return n}return null}function Ie(t){switch(typeof t){case"boolean":case"number":case"string":case"undefined":return t;case"object":return t;default:return""}}function je(t){var n=t.type;return(t=t.nodeName)&&t.toLowerCase()==="input"&&(n==="checkbox"||n==="radio")}function ht(t){var n=je(t)?"checked":"value",a=Object.getOwnPropertyDescriptor(t.constructor.prototype,n),l=""+t[n];if(!t.hasOwnProperty(n)&&typeof a<"u"&&typeof a.get=="function"&&typeof a.set=="function"){var u=a.get,f=a.set;return Object.defineProperty(t,n,{configurable:!0,get:function(){return u.call(this)},set:function(m){l=""+m,f.call(this,m)}}),Object.defineProperty(t,n,{enumerable:a.enumerable}),{getValue:function(){return l},setValue:function(m){l=""+m},stopTracking:function(){t._valueTracker=null,delete t[n]}}}}function tn(t){t._valueTracker||(t._valueTracker=ht(t))}function cr(t){if(!t)return!1;var n=t._valueTracker;if(!n)return!0;var a=n.getValue(),l="";return t&&(l=je(t)?t.checked?"true":"false":t.value),t=l,t!==a?(n.setValue(t),!0):!1}function Cr(t){if(t=t||(typeof document<"u"?document:void 0),typeof t>"u")return null;try{return t.activeElement||t.body}catch{return t.body}}function Kt(t,n){var a=n.checked;return J({},n,{defaultChecked:void 0,defaultValue:void 0,value:void 0,checked:a??t._wrapperState.initialChecked})}function rn(t,n){var a=n.defaultValue==null?"":n.defaultValue,l=n.checked!=null?n.checked:n.defaultChecked;a=Ie(n.value!=null?n.value:a),t._wrapperState={initialChecked:l,initialValue:a,controlled:n.type==="checkbox"||n.type==="radio"?n.checked!=null:n.value!=null}}function xn(t,n){n=n.checked,n!=null&&F(t,"checked",n,!1)}function ur(t,n){xn(t,n);var a=Ie(n.value),l=n.type;if(a!=null)l==="number"?(a===0&&t.value===""||t.value!=a)&&(t.value=""+a):t.value!==""+a&&(t.value=""+a);else if(l==="submit"||l==="reset"){t.removeAttribute("value");return}n.hasOwnProperty("value")?Er(t,n.type,a):n.hasOwnProperty("defaultValue")&&Er(t,n.type,Ie(n.defaultValue)),n.checked==null&&n.defaultChecked!=null&&(t.defaultChecked=!!n.defaultChecked)}function wn(t,n,a){if(n.hasOwnProperty("value")||n.hasOwnProperty("defaultValue")){var l=n.type;if(!(l!=="submit"&&l!=="reset"||n.value!==void 0&&n.value!==null))return;n=""+t._wrapperState.initialValue,a||n===t.value||(t.value=n),t.defaultValue=n}a=t.name,a!==""&&(t.name=""),t.defaultChecked=!!t._wrapperState.initialChecked,a!==""&&(t.name=a)}function Er(t,n,a){(n!=="number"||Cr(t.ownerDocument)!==t)&&(a==null?t.defaultValue=""+t._wrapperState.initialValue:t.defaultValue!==""+a&&(t.defaultValue=""+a))}var _=Array.isArray;function R(t,n,a,l){if(t=t.options,n){n={};for(var u=0;u<a.length;u++)n["$"+a[u]]=!0;for(a=0;a<t.length;a++)u=n.hasOwnProperty("$"+t[a].value),t[a].selected!==u&&(t[a].selected=u),u&&l&&(t[a].defaultSelected=!0)}else{for(a=""+Ie(a),n=null,u=0;u<t.length;u++){if(t[u].value===a){t[u].selected=!0,l&&(t[u].defaultSelected=!0);return}n!==null||t[u].disabled||(n=t[u])}n!==null&&(n.selected=!0)}}function D(t,n){if(n.dangerouslySetInnerHTML!=null)throw Error(s(91));return J({},n,{value:void 0,defaultValue:void 0,children:""+t._wrapperState.initialValue})}function ee(t,n){var a=n.value;if(a==null){if(a=n.children,n=n.defaultValue,a!=null){if(n!=null)throw Error(s(92));if(_(a)){if(1<a.length)throw Error(s(93));a=a[0]}n=a}n==null&&(n=""),a=n}t._wrapperState={initialValue:Ie(a)}}function Y(t,n){var a=Ie(n.value),l=Ie(n.defaultValue);a!=null&&(a=""+a,a!==t.value&&(t.value=a),n.defaultValue==null&&t.defaultValue!==a&&(t.defaultValue=a)),l!=null&&(t.defaultValue=""+l)}function W(t){var n=t.textContent;n===t._wrapperState.initialValue&&n!==""&&n!==null&&(t.value=n)}function se(t){switch(t){case"svg":return"http://www.w3.org/2000/svg";case"math":return"http://www.w3.org/1998/Math/MathML";default:return"http://www.w3.org/1999/xhtml"}}function $e(t,n){return t==null||t==="http://www.w3.org/1999/xhtml"?se(n):t==="http://www.w3.org/2000/svg"&&n==="foreignObject"?"http://www.w3.org/1999/xhtml":t}var ze,St=function(t){return typeof MSApp<"u"&&MSApp.execUnsafeLocalFunction?function(n,a,l,u){MSApp.execUnsafeLocalFunction(function(){return t(n,a,l,u)})}:t}(function(t,n){if(t.namespaceURI!=="http://www.w3.org/2000/svg"||"innerHTML"in t)t.innerHTML=n;else{for(ze=ze||document.createElement("div"),ze.innerHTML="<svg>"+n.valueOf().toString()+"</svg>",n=ze.firstChild;t.firstChild;)t.removeChild(t.firstChild);for(;n.firstChild;)t.appendChild(n.firstChild)}});function qt(t,n){if(n){var a=t.firstChild;if(a&&a===t.lastChild&&a.nodeType===3){a.nodeValue=n;return}}t.textContent=n}var At={animationIterationCount:!0,aspectRatio:!0,borderImageOutset:!0,borderImageSlice:!0,borderImageWidth:!0,boxFlex:!0,boxFlexGroup:!0,boxOrdinalGroup:!0,columnCount:!0,columns:!0,flex:!0,flexGrow:!0,flexPositive:!0,flexShrink:!0,flexNegative:!0,flexOrder:!0,gridArea:!0,gridRow:!0,gridRowEnd:!0,gridRowSpan:!0,gridRowStart:!0,gridColumn:!0,gridColumnEnd:!0,gridColumnSpan:!0,gridColumnStart:!0,fontWeight:!0,lineClamp:!0,lineHeight:!0,opacity:!0,order:!0,orphans:!0,tabSize:!0,widows:!0,zIndex:!0,zoom:!0,fillOpacity:!0,floodOpacity:!0,stopOpacity:!0,strokeDasharray:!0,strokeDashoffset:!0,strokeMiterlimit:!0,strokeOpacity:!0,strokeWidth:!0},_n=["Webkit","ms","Moz","O"];Object.keys(At).forEach(function(t){_n.forEach(function(n){n=n+t.charAt(0).toUpperCase()+t.substring(1),At[n]=At[t]})});function Tr(t,n,a){return n==null||typeof n=="boolean"||n===""?"":a||typeof n!="number"||n===0||At.hasOwnProperty(t)&&At[t]?(""+n).trim():n+"px"}function Mt(t,n){t=t.style;for(var a in n)if(n.hasOwnProperty(a)){var l=a.indexOf("--")===0,u=Tr(a,n[a],l);a==="float"&&(a="cssFloat"),l?t.setProperty(a,u):t[a]=u}}var Vr=J({menuitem:!0},{area:!0,base:!0,br:!0,col:!0,embed:!0,hr:!0,img:!0,input:!0,keygen:!0,link:!0,meta:!0,param:!0,source:!0,track:!0,wbr:!0});function Ur(t,n){if(n){if(Vr[t]&&(n.children!=null||n.dangerouslySetInnerHTML!=null))throw Error(s(137,t));if(n.dangerouslySetInnerHTML!=null){if(n.children!=null)throw Error(s(60));if(typeof n.dangerouslySetInnerHTML!="object"||!("__html"in n.dangerouslySetInnerHTML))throw Error(s(61))}if(n.style!=null&&typeof n.style!="object")throw Error(s(62))}}function nn(t,n){if(t.indexOf("-")===-1)return typeof n.is=="string";switch(t){case"annotation-xml":case"color-profile":case"font-face":case"font-face-src":case"font-face-uri":case"font-face-format":case"font-face-name":case"missing-glyph":return!1;default:return!0}}var Sn=null;function kn(t){return t=t.target||t.srcElement||window,t.correspondingUseElement&&(t=t.correspondingUseElement),t.nodeType===3?t.parentNode:t}var Cn=null,En=null,dr=null;function Ba(t){if(t=Gi(t)){if(typeof Cn!="function")throw Error(s(280));var n=t.stateNode;n&&(n=fo(n),Cn(t.stateNode,t.type,n))}}function za(t){En?dr?dr.push(t):dr=[t]:En=t}function dt(){if(En){var t=En,n=dr;if(dr=En=null,Ba(t),n)for(t=0;t<n.length;t++)Ba(n[t])}}function sn(t,n){return t(n)}function Za(){}var Ls=!1;function js(t,n,a){if(Ls)return t(n,a);Ls=!0;try{return sn(t,n,a)}finally{Ls=!1,(En!==null||dr!==null)&&(Za(),dt())}}function Tn(t,n){var a=t.stateNode;if(a===null)return null;var l=fo(a);if(l===null)return null;a=l[n];e:switch(n){case"onClick":case"onClickCapture":case"onDoubleClick":case"onDoubleClickCapture":case"onMouseDown":case"onMouseDownCapture":case"onMouseMove":case"onMouseMoveCapture":case"onMouseUp":case"onMouseUpCapture":case"onMouseEnter":(l=!l.disabled)||(t=t.type,l=!(t==="button"||t==="input"||t==="select"||t==="textarea")),t=!l;break e;default:t=!1}if(t)return null;if(a&&typeof a!="function")throw Error(s(231,n,typeof a));return a}var Ds=!1;if(p)try{var os={};Object.defineProperty(os,"passive",{get:function(){Ds=!0}}),window.addEventListener("test",os,os),window.removeEventListener("test",os,os)}catch{Ds=!1}function fr(t,n,a,l,u,f,m,x,S){var M=Array.prototype.slice.call(arguments,3);try{n.apply(a,M)}catch(B){this.onError(B)}}var pr=!1,ls=null,cs=!1,us=null,Ha={onError:function(t){pr=!0,ls=t}};function Pr(t,n,a,l,u,f,m,x,S){pr=!1,ls=null,fr.apply(Ha,arguments)}function Wa(t,n,a,l,u,f,m,x,S){if(Pr.apply(this,arguments),pr){if(pr){var M=ls;pr=!1,ls=null}else throw Error(s(198));cs||(cs=!0,us=M)}}function $r(t){var n=t,a=t;if(t.alternate)for(;n.return;)n=n.return;else{t=n;do n=t,(n.flags&4098)!==0&&(a=n.return),t=n.return;while(t)}return n.tag===3?a:null}function Ei(t){if(t.tag===13){var n=t.memoizedState;if(n===null&&(t=t.alternate,t!==null&&(n=t.memoizedState)),n!==null)return n.dehydrated}return null}function Ti(t){if($r(t)!==t)throw Error(s(188))}function Cl(t){var n=t.alternate;if(!n){if(n=$r(t),n===null)throw Error(s(188));return n!==t?null:t}for(var a=t,l=n;;){var u=a.return;if(u===null)break;var f=u.alternate;if(f===null){if(l=u.return,l!==null){a=l;continue}break}if(u.child===f.child){for(f=u.child;f;){if(f===a)return Ti(u),t;if(f===l)return Ti(u),n;f=f.sibling}throw Error(s(188))}if(a.return!==l.return)a=u,l=f;else{for(var m=!1,x=u.child;x;){if(x===a){m=!0,a=u,l=f;break}if(x===l){m=!0,l=u,a=f;break}x=x.sibling}if(!m){for(x=f.child;x;){if(x===a){m=!0,a=f,l=u;break}if(x===l){m=!0,l=f,a=u;break}x=x.sibling}if(!m)throw Error(s(189))}}if(a.alternate!==l)throw Error(s(190))}if(a.tag!==3)throw Error(s(188));return a.stateNode.current===a?t:n}function ve(t){return t=Cl(t),t!==null?k(t):null}function k(t){if(t.tag===5||t.tag===6)return t;for(t=t.child;t!==null;){var n=k(t);if(n!==null)return n;t=t.sibling}return null}var G=r.unstable_scheduleCallback,ce=r.unstable_cancelCallback,et=r.unstable_shouldYield,kt=r.unstable_requestPaint,Me=r.unstable_now,Ot=r.unstable_getCurrentPriorityLevel,nr=r.unstable_ImmediatePriority,Pn=r.unstable_UserBlockingPriority,Rn=r.unstable_NormalPriority,Ct=r.unstable_LowPriority,Pi=r.unstable_IdlePriority,ds=null,Br=null;function E0(t){if(Br&&typeof Br.onCommitFiberRoot=="function")try{Br.onCommitFiberRoot(ds,t,void 0,(t.current.flags&128)===128)}catch{}}var Rr=Math.clz32?Math.clz32:R0,T0=Math.log,P0=Math.LN2;function R0(t){return t>>>=0,t===0?32:31-(T0(t)/P0|0)|0}var Ga=64,Ka=4194304;function Ri(t){switch(t&-t){case 1:return 1;case 2:return 2;case 4:return 4;case 8:return 8;case 16:return 16;case 32:return 32;case 64:case 128:case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:return t&4194240;case 4194304:case 8388608:case 16777216:case 33554432:case 67108864:return t&130023424;case 134217728:return 134217728;case 268435456:return 268435456;case 536870912:return 536870912;case 1073741824:return 1073741824;default:return t}}function qa(t,n){var a=t.pendingLanes;if(a===0)return 0;var l=0,u=t.suspendedLanes,f=t.pingedLanes,m=a&268435455;if(m!==0){var x=m&~u;x!==0?l=Ri(x):(f&=m,f!==0&&(l=Ri(f)))}else m=a&~u,m!==0?l=Ri(m):f!==0&&(l=Ri(f));if(l===0)return 0;if(n!==0&&n!==l&&(n&u)===0&&(u=l&-l,f=n&-n,u>=f||u===16&&(f&4194240)!==0))return n;if((l&4)!==0&&(l|=a&16),n=t.entangledLanes,n!==0)for(t=t.entanglements,n&=l;0<n;)a=31-Rr(n),u=1<<a,l|=t[a],n&=~u;return l}function A0(t,n){switch(t){case 1:case 2:case 4:return n+250;case 8:case 16:case 32:case 64:case 128:case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:return n+5e3;case 4194304:case 8388608:case 16777216:case 33554432:case 67108864:return-1;case 134217728:case 268435456:case 536870912:case 1073741824:return-1;default:return-1}}function N0(t,n){for(var a=t.suspendedLanes,l=t.pingedLanes,u=t.expirationTimes,f=t.pendingLanes;0<f;){var m=31-Rr(f),x=1<<m,S=u[m];S===-1?((x&a)===0||(x&l)!==0)&&(u[m]=A0(x,n)):S<=n&&(t.expiredLanes|=x),f&=~x}}function El(t){return t=t.pendingLanes&-1073741825,t!==0?t:t&1073741824?1073741824:0}function Wd(){var t=Ga;return Ga<<=1,(Ga&4194240)===0&&(Ga=64),t}function Tl(t){for(var n=[],a=0;31>a;a++)n.push(t);return n}function Ai(t,n,a){t.pendingLanes|=n,n!==536870912&&(t.suspendedLanes=0,t.pingedLanes=0),t=t.eventTimes,n=31-Rr(n),t[n]=a}function I0(t,n){var a=t.pendingLanes&~n;t.pendingLanes=n,t.suspendedLanes=0,t.pingedLanes=0,t.expiredLanes&=n,t.mutableReadLanes&=n,t.entangledLanes&=n,n=t.entanglements;var l=t.eventTimes;for(t=t.expirationTimes;0<a;){var u=31-Rr(a),f=1<<u;n[u]=0,l[u]=-1,t[u]=-1,a&=~f}}function Pl(t,n){var a=t.entangledLanes|=n;for(t=t.entanglements;a;){var l=31-Rr(a),u=1<<l;u&n|t[l]&n&&(t[l]|=n),a&=~u}}var Qe=0;function Gd(t){return t&=-t,1<t?4<t?(t&268435455)!==0?16:536870912:4:1}var Kd,Rl,qd,Xd,Yd,Al=!1,Xa=[],An=null,Nn=null,In=null,Ni=new Map,Ii=new Map,Mn=[],M0="mousedown mouseup touchcancel touchend touchstart auxclick dblclick pointercancel pointerdown pointerup dragend dragstart drop compositionend compositionstart keydown keypress keyup input textInput copy cut paste click change contextmenu reset submit".split(" ");function Qd(t,n){switch(t){case"focusin":case"focusout":An=null;break;case"dragenter":case"dragleave":Nn=null;break;case"mouseover":case"mouseout":In=null;break;case"pointerover":case"pointerout":Ni.delete(n.pointerId);break;case"gotpointercapture":case"lostpointercapture":Ii.delete(n.pointerId)}}function Mi(t,n,a,l,u,f){return t===null||t.nativeEvent!==f?(t={blockedOn:n,domEventName:a,eventSystemFlags:l,nativeEvent:f,targetContainers:[u]},n!==null&&(n=Gi(n),n!==null&&Rl(n)),t):(t.eventSystemFlags|=l,n=t.targetContainers,u!==null&&n.indexOf(u)===-1&&n.push(u),t)}function O0(t,n,a,l,u){switch(n){case"focusin":return An=Mi(An,t,n,a,l,u),!0;case"dragenter":return Nn=Mi(Nn,t,n,a,l,u),!0;case"mouseover":return In=Mi(In,t,n,a,l,u),!0;case"pointerover":var f=u.pointerId;return Ni.set(f,Mi(Ni.get(f)||null,t,n,a,l,u)),!0;case"gotpointercapture":return f=u.pointerId,Ii.set(f,Mi(Ii.get(f)||null,t,n,a,l,u)),!0}return!1}function Jd(t){var n=fs(t.target);if(n!==null){var a=$r(n);if(a!==null){if(n=a.tag,n===13){if(n=Ei(a),n!==null){t.blockedOn=n,Yd(t.priority,function(){qd(a)});return}}else if(n===3&&a.stateNode.current.memoizedState.isDehydrated){t.blockedOn=a.tag===3?a.stateNode.containerInfo:null;return}}}t.blockedOn=null}function Ya(t){if(t.blockedOn!==null)return!1;for(var n=t.targetContainers;0<n.length;){var a=Il(t.domEventName,t.eventSystemFlags,n[0],t.nativeEvent);if(a===null){a=t.nativeEvent;var l=new a.constructor(a.type,a);Sn=l,a.target.dispatchEvent(l),Sn=null}else return n=Gi(a),n!==null&&Rl(n),t.blockedOn=a,!1;n.shift()}return!0}function ef(t,n,a){Ya(t)&&a.delete(n)}function L0(){Al=!1,An!==null&&Ya(An)&&(An=null),Nn!==null&&Ya(Nn)&&(Nn=null),In!==null&&Ya(In)&&(In=null),Ni.forEach(ef),Ii.forEach(ef)}function Oi(t,n){t.blockedOn===n&&(t.blockedOn=null,Al||(Al=!0,r.unstable_scheduleCallback(r.unstable_NormalPriority,L0)))}function Li(t){function n(u){return Oi(u,t)}if(0<Xa.length){Oi(Xa[0],t);for(var a=1;a<Xa.length;a++){var l=Xa[a];l.blockedOn===t&&(l.blockedOn=null)}}for(An!==null&&Oi(An,t),Nn!==null&&Oi(Nn,t),In!==null&&Oi(In,t),Ni.forEach(n),Ii.forEach(n),a=0;a<Mn.length;a++)l=Mn[a],l.blockedOn===t&&(l.blockedOn=null);for(;0<Mn.length&&(a=Mn[0],a.blockedOn===null);)Jd(a),a.blockedOn===null&&Mn.shift()}var Fs=z.ReactCurrentBatchConfig,Qa=!0;function j0(t,n,a,l){var u=Qe,f=Fs.transition;Fs.transition=null;try{Qe=1,Nl(t,n,a,l)}finally{Qe=u,Fs.transition=f}}function D0(t,n,a,l){var u=Qe,f=Fs.transition;Fs.transition=null;try{Qe=4,Nl(t,n,a,l)}finally{Qe=u,Fs.transition=f}}function Nl(t,n,a,l){if(Qa){var u=Il(t,n,a,l);if(u===null)ql(t,n,l,Ja,a),Qd(t,l);else if(O0(u,t,n,a,l))l.stopPropagation();else if(Qd(t,l),n&4&&-1<M0.indexOf(t)){for(;u!==null;){var f=Gi(u);if(f!==null&&Kd(f),f=Il(t,n,a,l),f===null&&ql(t,n,l,Ja,a),f===u)break;u=f}u!==null&&l.stopPropagation()}else ql(t,n,l,null,a)}}var Ja=null;function Il(t,n,a,l){if(Ja=null,t=kn(l),t=fs(t),t!==null)if(n=$r(t),n===null)t=null;else if(a=n.tag,a===13){if(t=Ei(n),t!==null)return t;t=null}else if(a===3){if(n.stateNode.current.memoizedState.isDehydrated)return n.tag===3?n.stateNode.containerInfo:null;t=null}else n!==t&&(t=null);return Ja=t,null}function tf(t){switch(t){case"cancel":case"click":case"close":case"contextmenu":case"copy":case"cut":case"auxclick":case"dblclick":case"dragend":case"dragstart":case"drop":case"focusin":case"focusout":case"input":case"invalid":case"keydown":case"keypress":case"keyup":case"mousedown":case"mouseup":case"paste":case"pause":case"play":case"pointercancel":case"pointerdown":case"pointerup":case"ratechange":case"reset":case"resize":case"seeked":case"submit":case"touchcancel":case"touchend":case"touchstart":case"volumechange":case"change":case"selectionchange":case"textInput":case"compositionstart":case"compositionend":case"compositionupdate":case"beforeblur":case"afterblur":case"beforeinput":case"blur":case"fullscreenchange":case"focus":case"hashchange":case"popstate":case"select":case"selectstart":return 1;case"drag":case"dragenter":case"dragexit":case"dragleave":case"dragover":case"mousemove":case"mouseout":case"mouseover":case"pointermove":case"pointerout":case"pointerover":case"scroll":case"toggle":case"touchmove":case"wheel":case"mouseenter":case"mouseleave":case"pointerenter":case"pointerleave":return 4;case"message":switch(Ot()){case nr:return 1;case Pn:return 4;case Rn:case Ct:return 16;case Pi:return 536870912;default:return 16}default:return 16}}var On=null,Ml=null,eo=null;function rf(){if(eo)return eo;var t,n=Ml,a=n.length,l,u="value"in On?On.value:On.textContent,f=u.length;for(t=0;t<a&&n[t]===u[t];t++);var m=a-t;for(l=1;l<=m&&n[a-l]===u[f-l];l++);return eo=u.slice(t,1<l?1-l:void 0)}function to(t){var n=t.keyCode;return"charCode"in t?(t=t.charCode,t===0&&n===13&&(t=13)):t=n,t===10&&(t=13),32<=t||t===13?t:0}function ro(){return!0}function nf(){return!1}function sr(t){function n(a,l,u,f,m){this._reactName=a,this._targetInst=u,this.type=l,this.nativeEvent=f,this.target=m,this.currentTarget=null;for(var x in t)t.hasOwnProperty(x)&&(a=t[x],this[x]=a?a(f):f[x]);return this.isDefaultPrevented=(f.defaultPrevented!=null?f.defaultPrevented:f.returnValue===!1)?ro:nf,this.isPropagationStopped=nf,this}return J(n.prototype,{preventDefault:function(){this.defaultPrevented=!0;var a=this.nativeEvent;a&&(a.preventDefault?a.preventDefault():typeof a.returnValue!="unknown"&&(a.returnValue=!1),this.isDefaultPrevented=ro)},stopPropagation:function(){var a=this.nativeEvent;a&&(a.stopPropagation?a.stopPropagation():typeof a.cancelBubble!="unknown"&&(a.cancelBubble=!0),this.isPropagationStopped=ro)},persist:function(){},isPersistent:ro}),n}var Vs={eventPhase:0,bubbles:0,cancelable:0,timeStamp:function(t){return t.timeStamp||Date.now()},defaultPrevented:0,isTrusted:0},Ol=sr(Vs),ji=J({},Vs,{view:0,detail:0}),F0=sr(ji),Ll,jl,Di,no=J({},ji,{screenX:0,screenY:0,clientX:0,clientY:0,pageX:0,pageY:0,ctrlKey:0,shiftKey:0,altKey:0,metaKey:0,getModifierState:Fl,button:0,buttons:0,relatedTarget:function(t){return t.relatedTarget===void 0?t.fromElement===t.srcElement?t.toElement:t.fromElement:t.relatedTarget},movementX:function(t){return"movementX"in t?t.movementX:(t!==Di&&(Di&&t.type==="mousemove"?(Ll=t.screenX-Di.screenX,jl=t.screenY-Di.screenY):jl=Ll=0,Di=t),Ll)},movementY:function(t){return"movementY"in t?t.movementY:jl}}),sf=sr(no),V0=J({},no,{dataTransfer:0}),U0=sr(V0),$0=J({},ji,{relatedTarget:0}),Dl=sr($0),B0=J({},Vs,{animationName:0,elapsedTime:0,pseudoElement:0}),z0=sr(B0),Z0=J({},Vs,{clipboardData:function(t){return"clipboardData"in t?t.clipboardData:window.clipboardData}}),H0=sr(Z0),W0=J({},Vs,{data:0}),af=sr(W0),G0={Esc:"Escape",Spacebar:" ",Left:"ArrowLeft",Up:"ArrowUp",Right:"ArrowRight",Down:"ArrowDown",Del:"Delete",Win:"OS",Menu:"ContextMenu",Apps:"ContextMenu",Scroll:"ScrollLock",MozPrintableKey:"Unidentified"},K0={8:"Backspace",9:"Tab",12:"Clear",13:"Enter",16:"Shift",17:"Control",18:"Alt",19:"Pause",20:"CapsLock",27:"Escape",32:" ",33:"PageUp",34:"PageDown",35:"End",36:"Home",37:"ArrowLeft",38:"ArrowUp",39:"ArrowRight",40:"ArrowDown",45:"Insert",46:"Delete",112:"F1",113:"F2",114:"F3",115:"F4",116:"F5",117:"F6",118:"F7",119:"F8",120:"F9",121:"F10",122:"F11",123:"F12",144:"NumLock",145:"ScrollLock",224:"Meta"},q0={Alt:"altKey",Control:"ctrlKey",Meta:"metaKey",Shift:"shiftKey"};function X0(t){var n=this.nativeEvent;return n.getModifierState?n.getModifierState(t):(t=q0[t])?!!n[t]:!1}function Fl(){return X0}var Y0=J({},ji,{key:function(t){if(t.key){var n=G0[t.key]||t.key;if(n!=="Unidentified")return n}return t.type==="keypress"?(t=to(t),t===13?"Enter":String.fromCharCode(t)):t.type==="keydown"||t.type==="keyup"?K0[t.keyCode]||"Unidentified":""},code:0,location:0,ctrlKey:0,shiftKey:0,altKey:0,metaKey:0,repeat:0,locale:0,getModifierState:Fl,charCode:function(t){return t.type==="keypress"?to(t):0},keyCode:function(t){return t.type==="keydown"||t.type==="keyup"?t.keyCode:0},which:function(t){return t.type==="keypress"?to(t):t.type==="keydown"||t.type==="keyup"?t.keyCode:0}}),Q0=sr(Y0),J0=J({},no,{pointerId:0,width:0,height:0,pressure:0,tangentialPressure:0,tiltX:0,tiltY:0,twist:0,pointerType:0,isPrimary:0}),of=sr(J0),ey=J({},ji,{touches:0,targetTouches:0,changedTouches:0,altKey:0,metaKey:0,ctrlKey:0,shiftKey:0,getModifierState:Fl}),ty=sr(ey),ry=J({},Vs,{propertyName:0,elapsedTime:0,pseudoElement:0}),ny=sr(ry),sy=J({},no,{deltaX:function(t){return"deltaX"in t?t.deltaX:"wheelDeltaX"in t?-t.wheelDeltaX:0},deltaY:function(t){return"deltaY"in t?t.deltaY:"wheelDeltaY"in t?-t.wheelDeltaY:"wheelDelta"in t?-t.wheelDelta:0},deltaZ:0,deltaMode:0}),iy=sr(sy),ay=[9,13,27,32],Vl=p&&"CompositionEvent"in window,Fi=null;p&&"documentMode"in document&&(Fi=document.documentMode);var oy=p&&"TextEvent"in window&&!Fi,lf=p&&(!Vl||Fi&&8<Fi&&11>=Fi),cf=" ",uf=!1;function df(t,n){switch(t){case"keyup":return ay.indexOf(n.keyCode)!==-1;case"keydown":return n.keyCode!==229;case"keypress":case"mousedown":case"focusout":return!0;default:return!1}}function ff(t){return t=t.detail,typeof t=="object"&&"data"in t?t.data:null}var Us=!1;function ly(t,n){switch(t){case"compositionend":return ff(n);case"keypress":return n.which!==32?null:(uf=!0,cf);case"textInput":return t=n.data,t===cf&&uf?null:t;default:return null}}function cy(t,n){if(Us)return t==="compositionend"||!Vl&&df(t,n)?(t=rf(),eo=Ml=On=null,Us=!1,t):null;switch(t){case"paste":return null;case"keypress":if(!(n.ctrlKey||n.altKey||n.metaKey)||n.ctrlKey&&n.altKey){if(n.char&&1<n.char.length)return n.char;if(n.which)return String.fromCharCode(n.which)}return null;case"compositionend":return lf&&n.locale!=="ko"?null:n.data;default:return null}}var uy={color:!0,date:!0,datetime:!0,"datetime-local":!0,email:!0,month:!0,number:!0,password:!0,range:!0,search:!0,tel:!0,text:!0,time:!0,url:!0,week:!0};function pf(t){var n=t&&t.nodeName&&t.nodeName.toLowerCase();return n==="input"?!!uy[t.type]:n==="textarea"}function hf(t,n,a,l){za(l),n=lo(n,"onChange"),0<n.length&&(a=new Ol("onChange","change",null,a,l),t.push({event:a,listeners:n}))}var Vi=null,Ui=null;function dy(t){If(t,0)}function so(t){var n=Hs(t);if(cr(n))return t}function fy(t,n){if(t==="change")return n}var mf=!1;if(p){var Ul;if(p){var $l="oninput"in document;if(!$l){var gf=document.createElement("div");gf.setAttribute("oninput","return;"),$l=typeof gf.oninput=="function"}Ul=$l}else Ul=!1;mf=Ul&&(!document.documentMode||9<document.documentMode)}function vf(){Vi&&(Vi.detachEvent("onpropertychange",yf),Ui=Vi=null)}function yf(t){if(t.propertyName==="value"&&so(Ui)){var n=[];hf(n,Ui,t,kn(t)),js(dy,n)}}function py(t,n,a){t==="focusin"?(vf(),Vi=n,Ui=a,Vi.attachEvent("onpropertychange",yf)):t==="focusout"&&vf()}function hy(t){if(t==="selectionchange"||t==="keyup"||t==="keydown")return so(Ui)}function my(t,n){if(t==="click")return so(n)}function gy(t,n){if(t==="input"||t==="change")return so(n)}function vy(t,n){return t===n&&(t!==0||1/t===1/n)||t!==t&&n!==n}var Ar=typeof Object.is=="function"?Object.is:vy;function $i(t,n){if(Ar(t,n))return!0;if(typeof t!="object"||t===null||typeof n!="object"||n===null)return!1;var a=Object.keys(t),l=Object.keys(n);if(a.length!==l.length)return!1;for(l=0;l<a.length;l++){var u=a[l];if(!h.call(n,u)||!Ar(t[u],n[u]))return!1}return!0}function bf(t){for(;t&&t.firstChild;)t=t.firstChild;return t}function xf(t,n){var a=bf(t);t=0;for(var l;a;){if(a.nodeType===3){if(l=t+a.textContent.length,t<=n&&l>=n)return{node:a,offset:n-t};t=l}e:{for(;a;){if(a.nextSibling){a=a.nextSibling;break e}a=a.parentNode}a=void 0}a=bf(a)}}function wf(t,n){return t&&n?t===n?!0:t&&t.nodeType===3?!1:n&&n.nodeType===3?wf(t,n.parentNode):"contains"in t?t.contains(n):t.compareDocumentPosition?!!(t.compareDocumentPosition(n)&16):!1:!1}function _f(){for(var t=window,n=Cr();n instanceof t.HTMLIFrameElement;){try{var a=typeof n.contentWindow.location.href=="string"}catch{a=!1}if(a)t=n.contentWindow;else break;n=Cr(t.document)}return n}function Bl(t){var n=t&&t.nodeName&&t.nodeName.toLowerCase();return n&&(n==="input"&&(t.type==="text"||t.type==="search"||t.type==="tel"||t.type==="url"||t.type==="password")||n==="textarea"||t.contentEditable==="true")}function yy(t){var n=_f(),a=t.focusedElem,l=t.selectionRange;if(n!==a&&a&&a.ownerDocument&&wf(a.ownerDocument.documentElement,a)){if(l!==null&&Bl(a)){if(n=l.start,t=l.end,t===void 0&&(t=n),"selectionStart"in a)a.selectionStart=n,a.selectionEnd=Math.min(t,a.value.length);else if(t=(n=a.ownerDocument||document)&&n.defaultView||window,t.getSelection){t=t.getSelection();var u=a.textContent.length,f=Math.min(l.start,u);l=l.end===void 0?f:Math.min(l.end,u),!t.extend&&f>l&&(u=l,l=f,f=u),u=xf(a,f);var m=xf(a,l);u&&m&&(t.rangeCount!==1||t.anchorNode!==u.node||t.anchorOffset!==u.offset||t.focusNode!==m.node||t.focusOffset!==m.offset)&&(n=n.createRange(),n.setStart(u.node,u.offset),t.removeAllRanges(),f>l?(t.addRange(n),t.extend(m.node,m.offset)):(n.setEnd(m.node,m.offset),t.addRange(n)))}}for(n=[],t=a;t=t.parentNode;)t.nodeType===1&&n.push({element:t,left:t.scrollLeft,top:t.scrollTop});for(typeof a.focus=="function"&&a.focus(),a=0;a<n.length;a++)t=n[a],t.element.scrollLeft=t.left,t.element.scrollTop=t.top}}var by=p&&"documentMode"in document&&11>=document.documentMode,$s=null,zl=null,Bi=null,Zl=!1;function Sf(t,n,a){var l=a.window===a?a.document:a.nodeType===9?a:a.ownerDocument;Zl||$s==null||$s!==Cr(l)||(l=$s,"selectionStart"in l&&Bl(l)?l={start:l.selectionStart,end:l.selectionEnd}:(l=(l.ownerDocument&&l.ownerDocument.defaultView||window).getSelection(),l={anchorNode:l.anchorNode,anchorOffset:l.anchorOffset,focusNode:l.focusNode,focusOffset:l.focusOffset}),Bi&&$i(Bi,l)||(Bi=l,l=lo(zl,"onSelect"),0<l.length&&(n=new Ol("onSelect","select",null,n,a),t.push({event:n,listeners:l}),n.target=$s)))}function io(t,n){var a={};return a[t.toLowerCase()]=n.toLowerCase(),a["Webkit"+t]="webkit"+n,a["Moz"+t]="moz"+n,a}var Bs={animationend:io("Animation","AnimationEnd"),animationiteration:io("Animation","AnimationIteration"),animationstart:io("Animation","AnimationStart"),transitionend:io("Transition","TransitionEnd")},Hl={},kf={};p&&(kf=document.createElement("div").style,"AnimationEvent"in window||(delete Bs.animationend.animation,delete Bs.animationiteration.animation,delete Bs.animationstart.animation),"TransitionEvent"in window||delete Bs.transitionend.transition);function ao(t){if(Hl[t])return Hl[t];if(!Bs[t])return t;var n=Bs[t],a;for(a in n)if(n.hasOwnProperty(a)&&a in kf)return Hl[t]=n[a];return t}var Cf=ao("animationend"),Ef=ao("animationiteration"),Tf=ao("animationstart"),Pf=ao("transitionend"),Rf=new Map,Af="abort auxClick cancel canPlay canPlayThrough click close contextMenu copy cut drag dragEnd dragEnter dragExit dragLeave dragOver dragStart drop durationChange emptied encrypted ended error gotPointerCapture input invalid keyDown keyPress keyUp load loadedData loadedMetadata loadStart lostPointerCapture mouseDown mouseMove mouseOut mouseOver mouseUp paste pause play playing pointerCancel pointerDown pointerMove pointerOut pointerOver pointerUp progress rateChange reset resize seeked seeking stalled submit suspend timeUpdate touchCancel touchEnd touchStart volumeChange scroll toggle touchMove waiting wheel".split(" ");function Ln(t,n){Rf.set(t,n),c(n,[t])}for(var Wl=0;Wl<Af.length;Wl++){var Gl=Af[Wl],xy=Gl.toLowerCase(),wy=Gl[0].toUpperCase()+Gl.slice(1);Ln(xy,"on"+wy)}Ln(Cf,"onAnimationEnd"),Ln(Ef,"onAnimationIteration"),Ln(Tf,"onAnimationStart"),Ln("dblclick","onDoubleClick"),Ln("focusin","onFocus"),Ln("focusout","onBlur"),Ln(Pf,"onTransitionEnd"),d("onMouseEnter",["mouseout","mouseover"]),d("onMouseLeave",["mouseout","mouseover"]),d("onPointerEnter",["pointerout","pointerover"]),d("onPointerLeave",["pointerout","pointerover"]),c("onChange","change click focusin focusout input keydown keyup selectionchange".split(" ")),c("onSelect","focusout contextmenu dragend focusin keydown keyup mousedown mouseup selectionchange".split(" ")),c("onBeforeInput",["compositionend","keypress","textInput","paste"]),c("onCompositionEnd","compositionend focusout keydown keypress keyup mousedown".split(" ")),c("onCompositionStart","compositionstart focusout keydown keypress keyup mousedown".split(" ")),c("onCompositionUpdate","compositionupdate focusout keydown keypress keyup mousedown".split(" "));var zi="abort canplay canplaythrough durationchange emptied encrypted ended error loadeddata loadedmetadata loadstart pause play playing progress ratechange resize seeked seeking stalled suspend timeupdate volumechange waiting".split(" "),_y=new Set("cancel close invalid load scroll toggle".split(" ").concat(zi));function Nf(t,n,a){var l=t.type||"unknown-event";t.currentTarget=a,Wa(l,n,void 0,t),t.currentTarget=null}function If(t,n){n=(n&4)!==0;for(var a=0;a<t.length;a++){var l=t[a],u=l.event;l=l.listeners;e:{var f=void 0;if(n)for(var m=l.length-1;0<=m;m--){var x=l[m],S=x.instance,M=x.currentTarget;if(x=x.listener,S!==f&&u.isPropagationStopped())break e;Nf(u,x,M),f=S}else for(m=0;m<l.length;m++){if(x=l[m],S=x.instance,M=x.currentTarget,x=x.listener,S!==f&&u.isPropagationStopped())break e;Nf(u,x,M),f=S}}}if(cs)throw t=us,cs=!1,us=null,t}function rt(t,n){var a=n[tc];a===void 0&&(a=n[tc]=new Set);var l=t+"__bubble";a.has(l)||(Mf(n,t,2,!1),a.add(l))}function Kl(t,n,a){var l=0;n&&(l|=4),Mf(a,t,l,n)}var oo="_reactListening"+Math.random().toString(36).slice(2);function Zi(t){if(!t[oo]){t[oo]=!0,i.forEach(function(a){a!=="selectionchange"&&(_y.has(a)||Kl(a,!1,t),Kl(a,!0,t))});var n=t.nodeType===9?t:t.ownerDocument;n===null||n[oo]||(n[oo]=!0,Kl("selectionchange",!1,n))}}function Mf(t,n,a,l){switch(tf(n)){case 1:var u=j0;break;case 4:u=D0;break;default:u=Nl}a=u.bind(null,n,a,t),u=void 0,!Ds||n!=="touchstart"&&n!=="touchmove"&&n!=="wheel"||(u=!0),l?u!==void 0?t.addEventListener(n,a,{capture:!0,passive:u}):t.addEventListener(n,a,!0):u!==void 0?t.addEventListener(n,a,{passive:u}):t.addEventListener(n,a,!1)}function ql(t,n,a,l,u){var f=l;if((n&1)===0&&(n&2)===0&&l!==null)e:for(;;){if(l===null)return;var m=l.tag;if(m===3||m===4){var x=l.stateNode.containerInfo;if(x===u||x.nodeType===8&&x.parentNode===u)break;if(m===4)for(m=l.return;m!==null;){var S=m.tag;if((S===3||S===4)&&(S=m.stateNode.containerInfo,S===u||S.nodeType===8&&S.parentNode===u))return;m=m.return}for(;x!==null;){if(m=fs(x),m===null)return;if(S=m.tag,S===5||S===6){l=f=m;continue e}x=x.parentNode}}l=l.return}js(function(){var M=f,B=kn(a),H=[];e:{var $=Rf.get(t);if($!==void 0){var te=Ol,ie=t;switch(t){case"keypress":if(to(a)===0)break e;case"keydown":case"keyup":te=Q0;break;case"focusin":ie="focus",te=Dl;break;case"focusout":ie="blur",te=Dl;break;case"beforeblur":case"afterblur":te=Dl;break;case"click":if(a.button===2)break e;case"auxclick":case"dblclick":case"mousedown":case"mousemove":case"mouseup":case"mouseout":case"mouseover":case"contextmenu":te=sf;break;case"drag":case"dragend":case"dragenter":case"dragexit":case"dragleave":case"dragover":case"dragstart":case"drop":te=U0;break;case"touchcancel":case"touchend":case"touchmove":case"touchstart":te=ty;break;case Cf:case Ef:case Tf:te=z0;break;case Pf:te=ny;break;case"scroll":te=F0;break;case"wheel":te=iy;break;case"copy":case"cut":case"paste":te=H0;break;case"gotpointercapture":case"lostpointercapture":case"pointercancel":case"pointerdown":case"pointermove":case"pointerout":case"pointerover":case"pointerup":te=of}var ue=(n&4)!==0,ft=!ue&&t==="scroll",P=ue?$!==null?$+"Capture":null:$;ue=[];for(var E=M,A;E!==null;){A=E;var q=A.stateNode;if(A.tag===5&&q!==null&&(A=q,P!==null&&(q=Tn(E,P),q!=null&&ue.push(Hi(E,q,A)))),ft)break;E=E.return}0<ue.length&&($=new te($,ie,null,a,B),H.push({event:$,listeners:ue}))}}if((n&7)===0){e:{if($=t==="mouseover"||t==="pointerover",te=t==="mouseout"||t==="pointerout",$&&a!==Sn&&(ie=a.relatedTarget||a.fromElement)&&(fs(ie)||ie[an]))break e;if((te||$)&&($=B.window===B?B:($=B.ownerDocument)?$.defaultView||$.parentWindow:window,te?(ie=a.relatedTarget||a.toElement,te=M,ie=ie?fs(ie):null,ie!==null&&(ft=$r(ie),ie!==ft||ie.tag!==5&&ie.tag!==6)&&(ie=null)):(te=null,ie=M),te!==ie)){if(ue=sf,q="onMouseLeave",P="onMouseEnter",E="mouse",(t==="pointerout"||t==="pointerover")&&(ue=of,q="onPointerLeave",P="onPointerEnter",E="pointer"),ft=te==null?$:Hs(te),A=ie==null?$:Hs(ie),$=new ue(q,E+"leave",te,a,B),$.target=ft,$.relatedTarget=A,q=null,fs(B)===M&&(ue=new ue(P,E+"enter",ie,a,B),ue.target=A,ue.relatedTarget=ft,q=ue),ft=q,te&&ie)t:{for(ue=te,P=ie,E=0,A=ue;A;A=zs(A))E++;for(A=0,q=P;q;q=zs(q))A++;for(;0<E-A;)ue=zs(ue),E--;for(;0<A-E;)P=zs(P),A--;for(;E--;){if(ue===P||P!==null&&ue===P.alternate)break t;ue=zs(ue),P=zs(P)}ue=null}else ue=null;te!==null&&Of(H,$,te,ue,!1),ie!==null&&ft!==null&&Of(H,ft,ie,ue,!0)}}e:{if($=M?Hs(M):window,te=$.nodeName&&$.nodeName.toLowerCase(),te==="select"||te==="input"&&$.type==="file")var me=fy;else if(pf($))if(mf)me=gy;else{me=hy;var _e=py}else(te=$.nodeName)&&te.toLowerCase()==="input"&&($.type==="checkbox"||$.type==="radio")&&(me=my);if(me&&(me=me(t,M))){hf(H,me,a,B);break e}_e&&_e(t,$,M),t==="focusout"&&(_e=$._wrapperState)&&_e.controlled&&$.type==="number"&&Er($,"number",$.value)}switch(_e=M?Hs(M):window,t){case"focusin":(pf(_e)||_e.contentEditable==="true")&&($s=_e,zl=M,Bi=null);break;case"focusout":Bi=zl=$s=null;break;case"mousedown":Zl=!0;break;case"contextmenu":case"mouseup":case"dragend":Zl=!1,Sf(H,a,B);break;case"selectionchange":if(by)break;case"keydown":case"keyup":Sf(H,a,B)}var Se;if(Vl)e:{switch(t){case"compositionstart":var ke="onCompositionStart";break e;case"compositionend":ke="onCompositionEnd";break e;case"compositionupdate":ke="onCompositionUpdate";break e}ke=void 0}else Us?df(t,a)&&(ke="onCompositionEnd"):t==="keydown"&&a.keyCode===229&&(ke="onCompositionStart");ke&&(lf&&a.locale!=="ko"&&(Us||ke!=="onCompositionStart"?ke==="onCompositionEnd"&&Us&&(Se=rf()):(On=B,Ml="value"in On?On.value:On.textContent,Us=!0)),_e=lo(M,ke),0<_e.length&&(ke=new af(ke,t,null,a,B),H.push({event:ke,listeners:_e}),Se?ke.data=Se:(Se=ff(a),Se!==null&&(ke.data=Se)))),(Se=oy?ly(t,a):cy(t,a))&&(M=lo(M,"onBeforeInput"),0<M.length&&(B=new af("onBeforeInput","beforeinput",null,a,B),H.push({event:B,listeners:M}),B.data=Se))}If(H,n)})}function Hi(t,n,a){return{instance:t,listener:n,currentTarget:a}}function lo(t,n){for(var a=n+"Capture",l=[];t!==null;){var u=t,f=u.stateNode;u.tag===5&&f!==null&&(u=f,f=Tn(t,a),f!=null&&l.unshift(Hi(t,f,u)),f=Tn(t,n),f!=null&&l.push(Hi(t,f,u))),t=t.return}return l}function zs(t){if(t===null)return null;do t=t.return;while(t&&t.tag!==5);return t||null}function Of(t,n,a,l,u){for(var f=n._reactName,m=[];a!==null&&a!==l;){var x=a,S=x.alternate,M=x.stateNode;if(S!==null&&S===l)break;x.tag===5&&M!==null&&(x=M,u?(S=Tn(a,f),S!=null&&m.unshift(Hi(a,S,x))):u||(S=Tn(a,f),S!=null&&m.push(Hi(a,S,x)))),a=a.return}m.length!==0&&t.push({event:n,listeners:m})}var Sy=/\r\n?/g,ky=/\u0000|\uFFFD/g;function Lf(t){return(typeof t=="string"?t:""+t).replace(Sy,`
`).replace(ky,"")}function co(t,n,a){if(n=Lf(n),Lf(t)!==n&&a)throw Error(s(425))}function uo(){}var Xl=null,Yl=null;function Ql(t,n){return t==="textarea"||t==="noscript"||typeof n.children=="string"||typeof n.children=="number"||typeof n.dangerouslySetInnerHTML=="object"&&n.dangerouslySetInnerHTML!==null&&n.dangerouslySetInnerHTML.__html!=null}var Jl=typeof setTimeout=="function"?setTimeout:void 0,Cy=typeof clearTimeout=="function"?clearTimeout:void 0,jf=typeof Promise=="function"?Promise:void 0,Ey=typeof queueMicrotask=="function"?queueMicrotask:typeof jf<"u"?function(t){return jf.resolve(null).then(t).catch(Ty)}:Jl;function Ty(t){setTimeout(function(){throw t})}function ec(t,n){var a=n,l=0;do{var u=a.nextSibling;if(t.removeChild(a),u&&u.nodeType===8)if(a=u.data,a==="/$"){if(l===0){t.removeChild(u),Li(n);return}l--}else a!=="$"&&a!=="$?"&&a!=="$!"||l++;a=u}while(a);Li(n)}function jn(t){for(;t!=null;t=t.nextSibling){var n=t.nodeType;if(n===1||n===3)break;if(n===8){if(n=t.data,n==="$"||n==="$!"||n==="$?")break;if(n==="/$")return null}}return t}function Df(t){t=t.previousSibling;for(var n=0;t;){if(t.nodeType===8){var a=t.data;if(a==="$"||a==="$!"||a==="$?"){if(n===0)return t;n--}else a==="/$"&&n++}t=t.previousSibling}return null}var Zs=Math.random().toString(36).slice(2),zr="__reactFiber$"+Zs,Wi="__reactProps$"+Zs,an="__reactContainer$"+Zs,tc="__reactEvents$"+Zs,Py="__reactListeners$"+Zs,Ry="__reactHandles$"+Zs;function fs(t){var n=t[zr];if(n)return n;for(var a=t.parentNode;a;){if(n=a[an]||a[zr]){if(a=n.alternate,n.child!==null||a!==null&&a.child!==null)for(t=Df(t);t!==null;){if(a=t[zr])return a;t=Df(t)}return n}t=a,a=t.parentNode}return null}function Gi(t){return t=t[zr]||t[an],!t||t.tag!==5&&t.tag!==6&&t.tag!==13&&t.tag!==3?null:t}function Hs(t){if(t.tag===5||t.tag===6)return t.stateNode;throw Error(s(33))}function fo(t){return t[Wi]||null}var rc=[],Ws=-1;function Dn(t){return{current:t}}function nt(t){0>Ws||(t.current=rc[Ws],rc[Ws]=null,Ws--)}function tt(t,n){Ws++,rc[Ws]=t.current,t.current=n}var Fn={},Lt=Dn(Fn),Xt=Dn(!1),ps=Fn;function Gs(t,n){var a=t.type.contextTypes;if(!a)return Fn;var l=t.stateNode;if(l&&l.__reactInternalMemoizedUnmaskedChildContext===n)return l.__reactInternalMemoizedMaskedChildContext;var u={},f;for(f in a)u[f]=n[f];return l&&(t=t.stateNode,t.__reactInternalMemoizedUnmaskedChildContext=n,t.__reactInternalMemoizedMaskedChildContext=u),u}function Yt(t){return t=t.childContextTypes,t!=null}function po(){nt(Xt),nt(Lt)}function Ff(t,n,a){if(Lt.current!==Fn)throw Error(s(168));tt(Lt,n),tt(Xt,a)}function Vf(t,n,a){var l=t.stateNode;if(n=n.childContextTypes,typeof l.getChildContext!="function")return a;l=l.getChildContext();for(var u in l)if(!(u in n))throw Error(s(108,Le(t)||"Unknown",u));return J({},a,l)}function ho(t){return t=(t=t.stateNode)&&t.__reactInternalMemoizedMergedChildContext||Fn,ps=Lt.current,tt(Lt,t),tt(Xt,Xt.current),!0}function Uf(t,n,a){var l=t.stateNode;if(!l)throw Error(s(169));a?(t=Vf(t,n,ps),l.__reactInternalMemoizedMergedChildContext=t,nt(Xt),nt(Lt),tt(Lt,t)):nt(Xt),tt(Xt,a)}var on=null,mo=!1,nc=!1;function $f(t){on===null?on=[t]:on.push(t)}function Ay(t){mo=!0,$f(t)}function Vn(){if(!nc&&on!==null){nc=!0;var t=0,n=Qe;try{var a=on;for(Qe=1;t<a.length;t++){var l=a[t];do l=l(!0);while(l!==null)}on=null,mo=!1}catch(u){throw on!==null&&(on=on.slice(t+1)),G(nr,Vn),u}finally{Qe=n,nc=!1}}return null}var Ks=[],qs=0,go=null,vo=0,hr=[],mr=0,hs=null,ln=1,cn="";function ms(t,n){Ks[qs++]=vo,Ks[qs++]=go,go=t,vo=n}function Bf(t,n,a){hr[mr++]=ln,hr[mr++]=cn,hr[mr++]=hs,hs=t;var l=ln;t=cn;var u=32-Rr(l)-1;l&=~(1<<u),a+=1;var f=32-Rr(n)+u;if(30<f){var m=u-u%5;f=(l&(1<<m)-1).toString(32),l>>=m,u-=m,ln=1<<32-Rr(n)+u|a<<u|l,cn=f+t}else ln=1<<f|a<<u|l,cn=t}function sc(t){t.return!==null&&(ms(t,1),Bf(t,1,0))}function ic(t){for(;t===go;)go=Ks[--qs],Ks[qs]=null,vo=Ks[--qs],Ks[qs]=null;for(;t===hs;)hs=hr[--mr],hr[mr]=null,cn=hr[--mr],hr[mr]=null,ln=hr[--mr],hr[mr]=null}var ir=null,ar=null,it=!1,Nr=null;function zf(t,n){var a=br(5,null,null,0);a.elementType="DELETED",a.stateNode=n,a.return=t,n=t.deletions,n===null?(t.deletions=[a],t.flags|=16):n.push(a)}function Zf(t,n){switch(t.tag){case 5:var a=t.type;return n=n.nodeType!==1||a.toLowerCase()!==n.nodeName.toLowerCase()?null:n,n!==null?(t.stateNode=n,ir=t,ar=jn(n.firstChild),!0):!1;case 6:return n=t.pendingProps===""||n.nodeType!==3?null:n,n!==null?(t.stateNode=n,ir=t,ar=null,!0):!1;case 13:return n=n.nodeType!==8?null:n,n!==null?(a=hs!==null?{id:ln,overflow:cn}:null,t.memoizedState={dehydrated:n,treeContext:a,retryLane:1073741824},a=br(18,null,null,0),a.stateNode=n,a.return=t,t.child=a,ir=t,ar=null,!0):!1;default:return!1}}function ac(t){return(t.mode&1)!==0&&(t.flags&128)===0}function oc(t){if(it){var n=ar;if(n){var a=n;if(!Zf(t,n)){if(ac(t))throw Error(s(418));n=jn(a.nextSibling);var l=ir;n&&Zf(t,n)?zf(l,a):(t.flags=t.flags&-4097|2,it=!1,ir=t)}}else{if(ac(t))throw Error(s(418));t.flags=t.flags&-4097|2,it=!1,ir=t}}}function Hf(t){for(t=t.return;t!==null&&t.tag!==5&&t.tag!==3&&t.tag!==13;)t=t.return;ir=t}function yo(t){if(t!==ir)return!1;if(!it)return Hf(t),it=!0,!1;var n;if((n=t.tag!==3)&&!(n=t.tag!==5)&&(n=t.type,n=n!=="head"&&n!=="body"&&!Ql(t.type,t.memoizedProps)),n&&(n=ar)){if(ac(t))throw Wf(),Error(s(418));for(;n;)zf(t,n),n=jn(n.nextSibling)}if(Hf(t),t.tag===13){if(t=t.memoizedState,t=t!==null?t.dehydrated:null,!t)throw Error(s(317));e:{for(t=t.nextSibling,n=0;t;){if(t.nodeType===8){var a=t.data;if(a==="/$"){if(n===0){ar=jn(t.nextSibling);break e}n--}else a!=="$"&&a!=="$!"&&a!=="$?"||n++}t=t.nextSibling}ar=null}}else ar=ir?jn(t.stateNode.nextSibling):null;return!0}function Wf(){for(var t=ar;t;)t=jn(t.nextSibling)}function Xs(){ar=ir=null,it=!1}function lc(t){Nr===null?Nr=[t]:Nr.push(t)}var Ny=z.ReactCurrentBatchConfig;function Ki(t,n,a){if(t=a.ref,t!==null&&typeof t!="function"&&typeof t!="object"){if(a._owner){if(a=a._owner,a){if(a.tag!==1)throw Error(s(309));var l=a.stateNode}if(!l)throw Error(s(147,t));var u=l,f=""+t;return n!==null&&n.ref!==null&&typeof n.ref=="function"&&n.ref._stringRef===f?n.ref:(n=function(m){var x=u.refs;m===null?delete x[f]:x[f]=m},n._stringRef=f,n)}if(typeof t!="string")throw Error(s(284));if(!a._owner)throw Error(s(290,t))}return t}function bo(t,n){throw t=Object.prototype.toString.call(n),Error(s(31,t==="[object Object]"?"object with keys {"+Object.keys(n).join(", ")+"}":t))}function Gf(t){var n=t._init;return n(t._payload)}function Kf(t){function n(P,E){if(t){var A=P.deletions;A===null?(P.deletions=[E],P.flags|=16):A.push(E)}}function a(P,E){if(!t)return null;for(;E!==null;)n(P,E),E=E.sibling;return null}function l(P,E){for(P=new Map;E!==null;)E.key!==null?P.set(E.key,E):P.set(E.index,E),E=E.sibling;return P}function u(P,E){return P=Gn(P,E),P.index=0,P.sibling=null,P}function f(P,E,A){return P.index=A,t?(A=P.alternate,A!==null?(A=A.index,A<E?(P.flags|=2,E):A):(P.flags|=2,E)):(P.flags|=1048576,E)}function m(P){return t&&P.alternate===null&&(P.flags|=2),P}function x(P,E,A,q){return E===null||E.tag!==6?(E=Jc(A,P.mode,q),E.return=P,E):(E=u(E,A),E.return=P,E)}function S(P,E,A,q){var me=A.type;return me===ye?B(P,E,A.props.children,q,A.key):E!==null&&(E.elementType===me||typeof me=="object"&&me!==null&&me.$$typeof===He&&Gf(me)===E.type)?(q=u(E,A.props),q.ref=Ki(P,E,A),q.return=P,q):(q=zo(A.type,A.key,A.props,null,P.mode,q),q.ref=Ki(P,E,A),q.return=P,q)}function M(P,E,A,q){return E===null||E.tag!==4||E.stateNode.containerInfo!==A.containerInfo||E.stateNode.implementation!==A.implementation?(E=eu(A,P.mode,q),E.return=P,E):(E=u(E,A.children||[]),E.return=P,E)}function B(P,E,A,q,me){return E===null||E.tag!==7?(E=Ss(A,P.mode,q,me),E.return=P,E):(E=u(E,A),E.return=P,E)}function H(P,E,A){if(typeof E=="string"&&E!==""||typeof E=="number")return E=Jc(""+E,P.mode,A),E.return=P,E;if(typeof E=="object"&&E!==null){switch(E.$$typeof){case T:return A=zo(E.type,E.key,E.props,null,P.mode,A),A.ref=Ki(P,null,E),A.return=P,A;case Q:return E=eu(E,P.mode,A),E.return=P,E;case He:var q=E._init;return H(P,q(E._payload),A)}if(_(E)||fe(E))return E=Ss(E,P.mode,A,null),E.return=P,E;bo(P,E)}return null}function $(P,E,A,q){var me=E!==null?E.key:null;if(typeof A=="string"&&A!==""||typeof A=="number")return me!==null?null:x(P,E,""+A,q);if(typeof A=="object"&&A!==null){switch(A.$$typeof){case T:return A.key===me?S(P,E,A,q):null;case Q:return A.key===me?M(P,E,A,q):null;case He:return me=A._init,$(P,E,me(A._payload),q)}if(_(A)||fe(A))return me!==null?null:B(P,E,A,q,null);bo(P,A)}return null}function te(P,E,A,q,me){if(typeof q=="string"&&q!==""||typeof q=="number")return P=P.get(A)||null,x(E,P,""+q,me);if(typeof q=="object"&&q!==null){switch(q.$$typeof){case T:return P=P.get(q.key===null?A:q.key)||null,S(E,P,q,me);case Q:return P=P.get(q.key===null?A:q.key)||null,M(E,P,q,me);case He:var _e=q._init;return te(P,E,A,_e(q._payload),me)}if(_(q)||fe(q))return P=P.get(A)||null,B(E,P,q,me,null);bo(E,q)}return null}function ie(P,E,A,q){for(var me=null,_e=null,Se=E,ke=E=0,Pt=null;Se!==null&&ke<A.length;ke++){Se.index>ke?(Pt=Se,Se=null):Pt=Se.sibling;var Ke=$(P,Se,A[ke],q);if(Ke===null){Se===null&&(Se=Pt);break}t&&Se&&Ke.alternate===null&&n(P,Se),E=f(Ke,E,ke),_e===null?me=Ke:_e.sibling=Ke,_e=Ke,Se=Pt}if(ke===A.length)return a(P,Se),it&&ms(P,ke),me;if(Se===null){for(;ke<A.length;ke++)Se=H(P,A[ke],q),Se!==null&&(E=f(Se,E,ke),_e===null?me=Se:_e.sibling=Se,_e=Se);return it&&ms(P,ke),me}for(Se=l(P,Se);ke<A.length;ke++)Pt=te(Se,P,ke,A[ke],q),Pt!==null&&(t&&Pt.alternate!==null&&Se.delete(Pt.key===null?ke:Pt.key),E=f(Pt,E,ke),_e===null?me=Pt:_e.sibling=Pt,_e=Pt);return t&&Se.forEach(function(Kn){return n(P,Kn)}),it&&ms(P,ke),me}function ue(P,E,A,q){var me=fe(A);if(typeof me!="function")throw Error(s(150));if(A=me.call(A),A==null)throw Error(s(151));for(var _e=me=null,Se=E,ke=E=0,Pt=null,Ke=A.next();Se!==null&&!Ke.done;ke++,Ke=A.next()){Se.index>ke?(Pt=Se,Se=null):Pt=Se.sibling;var Kn=$(P,Se,Ke.value,q);if(Kn===null){Se===null&&(Se=Pt);break}t&&Se&&Kn.alternate===null&&n(P,Se),E=f(Kn,E,ke),_e===null?me=Kn:_e.sibling=Kn,_e=Kn,Se=Pt}if(Ke.done)return a(P,Se),it&&ms(P,ke),me;if(Se===null){for(;!Ke.done;ke++,Ke=A.next())Ke=H(P,Ke.value,q),Ke!==null&&(E=f(Ke,E,ke),_e===null?me=Ke:_e.sibling=Ke,_e=Ke);return it&&ms(P,ke),me}for(Se=l(P,Se);!Ke.done;ke++,Ke=A.next())Ke=te(Se,P,ke,Ke.value,q),Ke!==null&&(t&&Ke.alternate!==null&&Se.delete(Ke.key===null?ke:Ke.key),E=f(Ke,E,ke),_e===null?me=Ke:_e.sibling=Ke,_e=Ke);return t&&Se.forEach(function(ub){return n(P,ub)}),it&&ms(P,ke),me}function ft(P,E,A,q){if(typeof A=="object"&&A!==null&&A.type===ye&&A.key===null&&(A=A.props.children),typeof A=="object"&&A!==null){switch(A.$$typeof){case T:e:{for(var me=A.key,_e=E;_e!==null;){if(_e.key===me){if(me=A.type,me===ye){if(_e.tag===7){a(P,_e.sibling),E=u(_e,A.props.children),E.return=P,P=E;break e}}else if(_e.elementType===me||typeof me=="object"&&me!==null&&me.$$typeof===He&&Gf(me)===_e.type){a(P,_e.sibling),E=u(_e,A.props),E.ref=Ki(P,_e,A),E.return=P,P=E;break e}a(P,_e);break}else n(P,_e);_e=_e.sibling}A.type===ye?(E=Ss(A.props.children,P.mode,q,A.key),E.return=P,P=E):(q=zo(A.type,A.key,A.props,null,P.mode,q),q.ref=Ki(P,E,A),q.return=P,P=q)}return m(P);case Q:e:{for(_e=A.key;E!==null;){if(E.key===_e)if(E.tag===4&&E.stateNode.containerInfo===A.containerInfo&&E.stateNode.implementation===A.implementation){a(P,E.sibling),E=u(E,A.children||[]),E.return=P,P=E;break e}else{a(P,E);break}else n(P,E);E=E.sibling}E=eu(A,P.mode,q),E.return=P,P=E}return m(P);case He:return _e=A._init,ft(P,E,_e(A._payload),q)}if(_(A))return ie(P,E,A,q);if(fe(A))return ue(P,E,A,q);bo(P,A)}return typeof A=="string"&&A!==""||typeof A=="number"?(A=""+A,E!==null&&E.tag===6?(a(P,E.sibling),E=u(E,A),E.return=P,P=E):(a(P,E),E=Jc(A,P.mode,q),E.return=P,P=E),m(P)):a(P,E)}return ft}var Ys=Kf(!0),qf=Kf(!1),xo=Dn(null),wo=null,Qs=null,cc=null;function uc(){cc=Qs=wo=null}function dc(t){var n=xo.current;nt(xo),t._currentValue=n}function fc(t,n,a){for(;t!==null;){var l=t.alternate;if((t.childLanes&n)!==n?(t.childLanes|=n,l!==null&&(l.childLanes|=n)):l!==null&&(l.childLanes&n)!==n&&(l.childLanes|=n),t===a)break;t=t.return}}function Js(t,n){wo=t,cc=Qs=null,t=t.dependencies,t!==null&&t.firstContext!==null&&((t.lanes&n)!==0&&(Qt=!0),t.firstContext=null)}function gr(t){var n=t._currentValue;if(cc!==t)if(t={context:t,memoizedValue:n,next:null},Qs===null){if(wo===null)throw Error(s(308));Qs=t,wo.dependencies={lanes:0,firstContext:t}}else Qs=Qs.next=t;return n}var gs=null;function pc(t){gs===null?gs=[t]:gs.push(t)}function Xf(t,n,a,l){var u=n.interleaved;return u===null?(a.next=a,pc(n)):(a.next=u.next,u.next=a),n.interleaved=a,un(t,l)}function un(t,n){t.lanes|=n;var a=t.alternate;for(a!==null&&(a.lanes|=n),a=t,t=t.return;t!==null;)t.childLanes|=n,a=t.alternate,a!==null&&(a.childLanes|=n),a=t,t=t.return;return a.tag===3?a.stateNode:null}var Un=!1;function hc(t){t.updateQueue={baseState:t.memoizedState,firstBaseUpdate:null,lastBaseUpdate:null,shared:{pending:null,interleaved:null,lanes:0},effects:null}}function Yf(t,n){t=t.updateQueue,n.updateQueue===t&&(n.updateQueue={baseState:t.baseState,firstBaseUpdate:t.firstBaseUpdate,lastBaseUpdate:t.lastBaseUpdate,shared:t.shared,effects:t.effects})}function dn(t,n){return{eventTime:t,lane:n,tag:0,payload:null,callback:null,next:null}}function $n(t,n,a){var l=t.updateQueue;if(l===null)return null;if(l=l.shared,(We&2)!==0){var u=l.pending;return u===null?n.next=n:(n.next=u.next,u.next=n),l.pending=n,un(t,a)}return u=l.interleaved,u===null?(n.next=n,pc(l)):(n.next=u.next,u.next=n),l.interleaved=n,un(t,a)}function _o(t,n,a){if(n=n.updateQueue,n!==null&&(n=n.shared,(a&4194240)!==0)){var l=n.lanes;l&=t.pendingLanes,a|=l,n.lanes=a,Pl(t,a)}}function Qf(t,n){var a=t.updateQueue,l=t.alternate;if(l!==null&&(l=l.updateQueue,a===l)){var u=null,f=null;if(a=a.firstBaseUpdate,a!==null){do{var m={eventTime:a.eventTime,lane:a.lane,tag:a.tag,payload:a.payload,callback:a.callback,next:null};f===null?u=f=m:f=f.next=m,a=a.next}while(a!==null);f===null?u=f=n:f=f.next=n}else u=f=n;a={baseState:l.baseState,firstBaseUpdate:u,lastBaseUpdate:f,shared:l.shared,effects:l.effects},t.updateQueue=a;return}t=a.lastBaseUpdate,t===null?a.firstBaseUpdate=n:t.next=n,a.lastBaseUpdate=n}function So(t,n,a,l){var u=t.updateQueue;Un=!1;var f=u.firstBaseUpdate,m=u.lastBaseUpdate,x=u.shared.pending;if(x!==null){u.shared.pending=null;var S=x,M=S.next;S.next=null,m===null?f=M:m.next=M,m=S;var B=t.alternate;B!==null&&(B=B.updateQueue,x=B.lastBaseUpdate,x!==m&&(x===null?B.firstBaseUpdate=M:x.next=M,B.lastBaseUpdate=S))}if(f!==null){var H=u.baseState;m=0,B=M=S=null,x=f;do{var $=x.lane,te=x.eventTime;if((l&$)===$){B!==null&&(B=B.next={eventTime:te,lane:0,tag:x.tag,payload:x.payload,callback:x.callback,next:null});e:{var ie=t,ue=x;switch($=n,te=a,ue.tag){case 1:if(ie=ue.payload,typeof ie=="function"){H=ie.call(te,H,$);break e}H=ie;break e;case 3:ie.flags=ie.flags&-65537|128;case 0:if(ie=ue.payload,$=typeof ie=="function"?ie.call(te,H,$):ie,$==null)break e;H=J({},H,$);break e;case 2:Un=!0}}x.callback!==null&&x.lane!==0&&(t.flags|=64,$=u.effects,$===null?u.effects=[x]:$.push(x))}else te={eventTime:te,lane:$,tag:x.tag,payload:x.payload,callback:x.callback,next:null},B===null?(M=B=te,S=H):B=B.next=te,m|=$;if(x=x.next,x===null){if(x=u.shared.pending,x===null)break;$=x,x=$.next,$.next=null,u.lastBaseUpdate=$,u.shared.pending=null}}while(!0);if(B===null&&(S=H),u.baseState=S,u.firstBaseUpdate=M,u.lastBaseUpdate=B,n=u.shared.interleaved,n!==null){u=n;do m|=u.lane,u=u.next;while(u!==n)}else f===null&&(u.shared.lanes=0);bs|=m,t.lanes=m,t.memoizedState=H}}function Jf(t,n,a){if(t=n.effects,n.effects=null,t!==null)for(n=0;n<t.length;n++){var l=t[n],u=l.callback;if(u!==null){if(l.callback=null,l=a,typeof u!="function")throw Error(s(191,u));u.call(l)}}}var qi={},Zr=Dn(qi),Xi=Dn(qi),Yi=Dn(qi);function vs(t){if(t===qi)throw Error(s(174));return t}function mc(t,n){switch(tt(Yi,n),tt(Xi,t),tt(Zr,qi),t=n.nodeType,t){case 9:case 11:n=(n=n.documentElement)?n.namespaceURI:$e(null,"");break;default:t=t===8?n.parentNode:n,n=t.namespaceURI||null,t=t.tagName,n=$e(n,t)}nt(Zr),tt(Zr,n)}function ei(){nt(Zr),nt(Xi),nt(Yi)}function ep(t){vs(Yi.current);var n=vs(Zr.current),a=$e(n,t.type);n!==a&&(tt(Xi,t),tt(Zr,a))}function gc(t){Xi.current===t&&(nt(Zr),nt(Xi))}var ot=Dn(0);function ko(t){for(var n=t;n!==null;){if(n.tag===13){var a=n.memoizedState;if(a!==null&&(a=a.dehydrated,a===null||a.data==="$?"||a.data==="$!"))return n}else if(n.tag===19&&n.memoizedProps.revealOrder!==void 0){if((n.flags&128)!==0)return n}else if(n.child!==null){n.child.return=n,n=n.child;continue}if(n===t)break;for(;n.sibling===null;){if(n.return===null||n.return===t)return null;n=n.return}n.sibling.return=n.return,n=n.sibling}return null}var vc=[];function yc(){for(var t=0;t<vc.length;t++)vc[t]._workInProgressVersionPrimary=null;vc.length=0}var Co=z.ReactCurrentDispatcher,bc=z.ReactCurrentBatchConfig,ys=0,lt=null,wt=null,Et=null,Eo=!1,Qi=!1,Ji=0,Iy=0;function jt(){throw Error(s(321))}function xc(t,n){if(n===null)return!1;for(var a=0;a<n.length&&a<t.length;a++)if(!Ar(t[a],n[a]))return!1;return!0}function wc(t,n,a,l,u,f){if(ys=f,lt=n,n.memoizedState=null,n.updateQueue=null,n.lanes=0,Co.current=t===null||t.memoizedState===null?jy:Dy,t=a(l,u),Qi){f=0;do{if(Qi=!1,Ji=0,25<=f)throw Error(s(301));f+=1,Et=wt=null,n.updateQueue=null,Co.current=Fy,t=a(l,u)}while(Qi)}if(Co.current=Ro,n=wt!==null&&wt.next!==null,ys=0,Et=wt=lt=null,Eo=!1,n)throw Error(s(300));return t}function _c(){var t=Ji!==0;return Ji=0,t}function Hr(){var t={memoizedState:null,baseState:null,baseQueue:null,queue:null,next:null};return Et===null?lt.memoizedState=Et=t:Et=Et.next=t,Et}function vr(){if(wt===null){var t=lt.alternate;t=t!==null?t.memoizedState:null}else t=wt.next;var n=Et===null?lt.memoizedState:Et.next;if(n!==null)Et=n,wt=t;else{if(t===null)throw Error(s(310));wt=t,t={memoizedState:wt.memoizedState,baseState:wt.baseState,baseQueue:wt.baseQueue,queue:wt.queue,next:null},Et===null?lt.memoizedState=Et=t:Et=Et.next=t}return Et}function ea(t,n){return typeof n=="function"?n(t):n}function Sc(t){var n=vr(),a=n.queue;if(a===null)throw Error(s(311));a.lastRenderedReducer=t;var l=wt,u=l.baseQueue,f=a.pending;if(f!==null){if(u!==null){var m=u.next;u.next=f.next,f.next=m}l.baseQueue=u=f,a.pending=null}if(u!==null){f=u.next,l=l.baseState;var x=m=null,S=null,M=f;do{var B=M.lane;if((ys&B)===B)S!==null&&(S=S.next={lane:0,action:M.action,hasEagerState:M.hasEagerState,eagerState:M.eagerState,next:null}),l=M.hasEagerState?M.eagerState:t(l,M.action);else{var H={lane:B,action:M.action,hasEagerState:M.hasEagerState,eagerState:M.eagerState,next:null};S===null?(x=S=H,m=l):S=S.next=H,lt.lanes|=B,bs|=B}M=M.next}while(M!==null&&M!==f);S===null?m=l:S.next=x,Ar(l,n.memoizedState)||(Qt=!0),n.memoizedState=l,n.baseState=m,n.baseQueue=S,a.lastRenderedState=l}if(t=a.interleaved,t!==null){u=t;do f=u.lane,lt.lanes|=f,bs|=f,u=u.next;while(u!==t)}else u===null&&(a.lanes=0);return[n.memoizedState,a.dispatch]}function kc(t){var n=vr(),a=n.queue;if(a===null)throw Error(s(311));a.lastRenderedReducer=t;var l=a.dispatch,u=a.pending,f=n.memoizedState;if(u!==null){a.pending=null;var m=u=u.next;do f=t(f,m.action),m=m.next;while(m!==u);Ar(f,n.memoizedState)||(Qt=!0),n.memoizedState=f,n.baseQueue===null&&(n.baseState=f),a.lastRenderedState=f}return[f,l]}function tp(){}function rp(t,n){var a=lt,l=vr(),u=n(),f=!Ar(l.memoizedState,u);if(f&&(l.memoizedState=u,Qt=!0),l=l.queue,Cc(ip.bind(null,a,l,t),[t]),l.getSnapshot!==n||f||Et!==null&&Et.memoizedState.tag&1){if(a.flags|=2048,ta(9,sp.bind(null,a,l,u,n),void 0,null),Tt===null)throw Error(s(349));(ys&30)!==0||np(a,n,u)}return u}function np(t,n,a){t.flags|=16384,t={getSnapshot:n,value:a},n=lt.updateQueue,n===null?(n={lastEffect:null,stores:null},lt.updateQueue=n,n.stores=[t]):(a=n.stores,a===null?n.stores=[t]:a.push(t))}function sp(t,n,a,l){n.value=a,n.getSnapshot=l,ap(n)&&op(t)}function ip(t,n,a){return a(function(){ap(n)&&op(t)})}function ap(t){var n=t.getSnapshot;t=t.value;try{var a=n();return!Ar(t,a)}catch{return!0}}function op(t){var n=un(t,1);n!==null&&Lr(n,t,1,-1)}function lp(t){var n=Hr();return typeof t=="function"&&(t=t()),n.memoizedState=n.baseState=t,t={pending:null,interleaved:null,lanes:0,dispatch:null,lastRenderedReducer:ea,lastRenderedState:t},n.queue=t,t=t.dispatch=Ly.bind(null,lt,t),[n.memoizedState,t]}function ta(t,n,a,l){return t={tag:t,create:n,destroy:a,deps:l,next:null},n=lt.updateQueue,n===null?(n={lastEffect:null,stores:null},lt.updateQueue=n,n.lastEffect=t.next=t):(a=n.lastEffect,a===null?n.lastEffect=t.next=t:(l=a.next,a.next=t,t.next=l,n.lastEffect=t)),t}function cp(){return vr().memoizedState}function To(t,n,a,l){var u=Hr();lt.flags|=t,u.memoizedState=ta(1|n,a,void 0,l===void 0?null:l)}function Po(t,n,a,l){var u=vr();l=l===void 0?null:l;var f=void 0;if(wt!==null){var m=wt.memoizedState;if(f=m.destroy,l!==null&&xc(l,m.deps)){u.memoizedState=ta(n,a,f,l);return}}lt.flags|=t,u.memoizedState=ta(1|n,a,f,l)}function up(t,n){return To(8390656,8,t,n)}function Cc(t,n){return Po(2048,8,t,n)}function dp(t,n){return Po(4,2,t,n)}function fp(t,n){return Po(4,4,t,n)}function pp(t,n){if(typeof n=="function")return t=t(),n(t),function(){n(null)};if(n!=null)return t=t(),n.current=t,function(){n.current=null}}function hp(t,n,a){return a=a!=null?a.concat([t]):null,Po(4,4,pp.bind(null,n,t),a)}function Ec(){}function mp(t,n){var a=vr();n=n===void 0?null:n;var l=a.memoizedState;return l!==null&&n!==null&&xc(n,l[1])?l[0]:(a.memoizedState=[t,n],t)}function gp(t,n){var a=vr();n=n===void 0?null:n;var l=a.memoizedState;return l!==null&&n!==null&&xc(n,l[1])?l[0]:(t=t(),a.memoizedState=[t,n],t)}function vp(t,n,a){return(ys&21)===0?(t.baseState&&(t.baseState=!1,Qt=!0),t.memoizedState=a):(Ar(a,n)||(a=Wd(),lt.lanes|=a,bs|=a,t.baseState=!0),n)}function My(t,n){var a=Qe;Qe=a!==0&&4>a?a:4,t(!0);var l=bc.transition;bc.transition={};try{t(!1),n()}finally{Qe=a,bc.transition=l}}function yp(){return vr().memoizedState}function Oy(t,n,a){var l=Hn(t);if(a={lane:l,action:a,hasEagerState:!1,eagerState:null,next:null},bp(t))xp(n,a);else if(a=Xf(t,n,a,l),a!==null){var u=$t();Lr(a,t,l,u),wp(a,n,l)}}function Ly(t,n,a){var l=Hn(t),u={lane:l,action:a,hasEagerState:!1,eagerState:null,next:null};if(bp(t))xp(n,u);else{var f=t.alternate;if(t.lanes===0&&(f===null||f.lanes===0)&&(f=n.lastRenderedReducer,f!==null))try{var m=n.lastRenderedState,x=f(m,a);if(u.hasEagerState=!0,u.eagerState=x,Ar(x,m)){var S=n.interleaved;S===null?(u.next=u,pc(n)):(u.next=S.next,S.next=u),n.interleaved=u;return}}catch{}finally{}a=Xf(t,n,u,l),a!==null&&(u=$t(),Lr(a,t,l,u),wp(a,n,l))}}function bp(t){var n=t.alternate;return t===lt||n!==null&&n===lt}function xp(t,n){Qi=Eo=!0;var a=t.pending;a===null?n.next=n:(n.next=a.next,a.next=n),t.pending=n}function wp(t,n,a){if((a&4194240)!==0){var l=n.lanes;l&=t.pendingLanes,a|=l,n.lanes=a,Pl(t,a)}}var Ro={readContext:gr,useCallback:jt,useContext:jt,useEffect:jt,useImperativeHandle:jt,useInsertionEffect:jt,useLayoutEffect:jt,useMemo:jt,useReducer:jt,useRef:jt,useState:jt,useDebugValue:jt,useDeferredValue:jt,useTransition:jt,useMutableSource:jt,useSyncExternalStore:jt,useId:jt,unstable_isNewReconciler:!1},jy={readContext:gr,useCallback:function(t,n){return Hr().memoizedState=[t,n===void 0?null:n],t},useContext:gr,useEffect:up,useImperativeHandle:function(t,n,a){return a=a!=null?a.concat([t]):null,To(4194308,4,pp.bind(null,n,t),a)},useLayoutEffect:function(t,n){return To(4194308,4,t,n)},useInsertionEffect:function(t,n){return To(4,2,t,n)},useMemo:function(t,n){var a=Hr();return n=n===void 0?null:n,t=t(),a.memoizedState=[t,n],t},useReducer:function(t,n,a){var l=Hr();return n=a!==void 0?a(n):n,l.memoizedState=l.baseState=n,t={pending:null,interleaved:null,lanes:0,dispatch:null,lastRenderedReducer:t,lastRenderedState:n},l.queue=t,t=t.dispatch=Oy.bind(null,lt,t),[l.memoizedState,t]},useRef:function(t){var n=Hr();return t={current:t},n.memoizedState=t},useState:lp,useDebugValue:Ec,useDeferredValue:function(t){return Hr().memoizedState=t},useTransition:function(){var t=lp(!1),n=t[0];return t=My.bind(null,t[1]),Hr().memoizedState=t,[n,t]},useMutableSource:function(){},useSyncExternalStore:function(t,n,a){var l=lt,u=Hr();if(it){if(a===void 0)throw Error(s(407));a=a()}else{if(a=n(),Tt===null)throw Error(s(349));(ys&30)!==0||np(l,n,a)}u.memoizedState=a;var f={value:a,getSnapshot:n};return u.queue=f,up(ip.bind(null,l,f,t),[t]),l.flags|=2048,ta(9,sp.bind(null,l,f,a,n),void 0,null),a},useId:function(){var t=Hr(),n=Tt.identifierPrefix;if(it){var a=cn,l=ln;a=(l&~(1<<32-Rr(l)-1)).toString(32)+a,n=":"+n+"R"+a,a=Ji++,0<a&&(n+="H"+a.toString(32)),n+=":"}else a=Iy++,n=":"+n+"r"+a.toString(32)+":";return t.memoizedState=n},unstable_isNewReconciler:!1},Dy={readContext:gr,useCallback:mp,useContext:gr,useEffect:Cc,useImperativeHandle:hp,useInsertionEffect:dp,useLayoutEffect:fp,useMemo:gp,useReducer:Sc,useRef:cp,useState:function(){return Sc(ea)},useDebugValue:Ec,useDeferredValue:function(t){var n=vr();return vp(n,wt.memoizedState,t)},useTransition:function(){var t=Sc(ea)[0],n=vr().memoizedState;return[t,n]},useMutableSource:tp,useSyncExternalStore:rp,useId:yp,unstable_isNewReconciler:!1},Fy={readContext:gr,useCallback:mp,useContext:gr,useEffect:Cc,useImperativeHandle:hp,useInsertionEffect:dp,useLayoutEffect:fp,useMemo:gp,useReducer:kc,useRef:cp,useState:function(){return kc(ea)},useDebugValue:Ec,useDeferredValue:function(t){var n=vr();return wt===null?n.memoizedState=t:vp(n,wt.memoizedState,t)},useTransition:function(){var t=kc(ea)[0],n=vr().memoizedState;return[t,n]},useMutableSource:tp,useSyncExternalStore:rp,useId:yp,unstable_isNewReconciler:!1};function Ir(t,n){if(t&&t.defaultProps){n=J({},n),t=t.defaultProps;for(var a in t)n[a]===void 0&&(n[a]=t[a]);return n}return n}function Tc(t,n,a,l){n=t.memoizedState,a=a(l,n),a=a==null?n:J({},n,a),t.memoizedState=a,t.lanes===0&&(t.updateQueue.baseState=a)}var Ao={isMounted:function(t){return(t=t._reactInternals)?$r(t)===t:!1},enqueueSetState:function(t,n,a){t=t._reactInternals;var l=$t(),u=Hn(t),f=dn(l,u);f.payload=n,a!=null&&(f.callback=a),n=$n(t,f,u),n!==null&&(Lr(n,t,u,l),_o(n,t,u))},enqueueReplaceState:function(t,n,a){t=t._reactInternals;var l=$t(),u=Hn(t),f=dn(l,u);f.tag=1,f.payload=n,a!=null&&(f.callback=a),n=$n(t,f,u),n!==null&&(Lr(n,t,u,l),_o(n,t,u))},enqueueForceUpdate:function(t,n){t=t._reactInternals;var a=$t(),l=Hn(t),u=dn(a,l);u.tag=2,n!=null&&(u.callback=n),n=$n(t,u,l),n!==null&&(Lr(n,t,l,a),_o(n,t,l))}};function _p(t,n,a,l,u,f,m){return t=t.stateNode,typeof t.shouldComponentUpdate=="function"?t.shouldComponentUpdate(l,f,m):n.prototype&&n.prototype.isPureReactComponent?!$i(a,l)||!$i(u,f):!0}function Sp(t,n,a){var l=!1,u=Fn,f=n.contextType;return typeof f=="object"&&f!==null?f=gr(f):(u=Yt(n)?ps:Lt.current,l=n.contextTypes,f=(l=l!=null)?Gs(t,u):Fn),n=new n(a,f),t.memoizedState=n.state!==null&&n.state!==void 0?n.state:null,n.updater=Ao,t.stateNode=n,n._reactInternals=t,l&&(t=t.stateNode,t.__reactInternalMemoizedUnmaskedChildContext=u,t.__reactInternalMemoizedMaskedChildContext=f),n}function kp(t,n,a,l){t=n.state,typeof n.componentWillReceiveProps=="function"&&n.componentWillReceiveProps(a,l),typeof n.UNSAFE_componentWillReceiveProps=="function"&&n.UNSAFE_componentWillReceiveProps(a,l),n.state!==t&&Ao.enqueueReplaceState(n,n.state,null)}function Pc(t,n,a,l){var u=t.stateNode;u.props=a,u.state=t.memoizedState,u.refs={},hc(t);var f=n.contextType;typeof f=="object"&&f!==null?u.context=gr(f):(f=Yt(n)?ps:Lt.current,u.context=Gs(t,f)),u.state=t.memoizedState,f=n.getDerivedStateFromProps,typeof f=="function"&&(Tc(t,n,f,a),u.state=t.memoizedState),typeof n.getDerivedStateFromProps=="function"||typeof u.getSnapshotBeforeUpdate=="function"||typeof u.UNSAFE_componentWillMount!="function"&&typeof u.componentWillMount!="function"||(n=u.state,typeof u.componentWillMount=="function"&&u.componentWillMount(),typeof u.UNSAFE_componentWillMount=="function"&&u.UNSAFE_componentWillMount(),n!==u.state&&Ao.enqueueReplaceState(u,u.state,null),So(t,a,u,l),u.state=t.memoizedState),typeof u.componentDidMount=="function"&&(t.flags|=4194308)}function ti(t,n){try{var a="",l=n;do a+=le(l),l=l.return;while(l);var u=a}catch(f){u=`
Error generating stack: `+f.message+`
`+f.stack}return{value:t,source:n,stack:u,digest:null}}function Rc(t,n,a){return{value:t,source:null,stack:a??null,digest:n??null}}function Ac(t,n){try{console.error(n.value)}catch(a){setTimeout(function(){throw a})}}var Vy=typeof WeakMap=="function"?WeakMap:Map;function Cp(t,n,a){a=dn(-1,a),a.tag=3,a.payload={element:null};var l=n.value;return a.callback=function(){Do||(Do=!0,Hc=l),Ac(t,n)},a}function Ep(t,n,a){a=dn(-1,a),a.tag=3;var l=t.type.getDerivedStateFromError;if(typeof l=="function"){var u=n.value;a.payload=function(){return l(u)},a.callback=function(){Ac(t,n)}}var f=t.stateNode;return f!==null&&typeof f.componentDidCatch=="function"&&(a.callback=function(){Ac(t,n),typeof l!="function"&&(zn===null?zn=new Set([this]):zn.add(this));var m=n.stack;this.componentDidCatch(n.value,{componentStack:m!==null?m:""})}),a}function Tp(t,n,a){var l=t.pingCache;if(l===null){l=t.pingCache=new Vy;var u=new Set;l.set(n,u)}else u=l.get(n),u===void 0&&(u=new Set,l.set(n,u));u.has(a)||(u.add(a),t=Jy.bind(null,t,n,a),n.then(t,t))}function Pp(t){do{var n;if((n=t.tag===13)&&(n=t.memoizedState,n=n!==null?n.dehydrated!==null:!0),n)return t;t=t.return}while(t!==null);return null}function Rp(t,n,a,l,u){return(t.mode&1)===0?(t===n?t.flags|=65536:(t.flags|=128,a.flags|=131072,a.flags&=-52805,a.tag===1&&(a.alternate===null?a.tag=17:(n=dn(-1,1),n.tag=2,$n(a,n,1))),a.lanes|=1),t):(t.flags|=65536,t.lanes=u,t)}var Uy=z.ReactCurrentOwner,Qt=!1;function Ut(t,n,a,l){n.child=t===null?qf(n,null,a,l):Ys(n,t.child,a,l)}function Ap(t,n,a,l,u){a=a.render;var f=n.ref;return Js(n,u),l=wc(t,n,a,l,f,u),a=_c(),t!==null&&!Qt?(n.updateQueue=t.updateQueue,n.flags&=-2053,t.lanes&=~u,fn(t,n,u)):(it&&a&&sc(n),n.flags|=1,Ut(t,n,l,u),n.child)}function Np(t,n,a,l,u){if(t===null){var f=a.type;return typeof f=="function"&&!Qc(f)&&f.defaultProps===void 0&&a.compare===null&&a.defaultProps===void 0?(n.tag=15,n.type=f,Ip(t,n,f,l,u)):(t=zo(a.type,null,l,n,n.mode,u),t.ref=n.ref,t.return=n,n.child=t)}if(f=t.child,(t.lanes&u)===0){var m=f.memoizedProps;if(a=a.compare,a=a!==null?a:$i,a(m,l)&&t.ref===n.ref)return fn(t,n,u)}return n.flags|=1,t=Gn(f,l),t.ref=n.ref,t.return=n,n.child=t}function Ip(t,n,a,l,u){if(t!==null){var f=t.memoizedProps;if($i(f,l)&&t.ref===n.ref)if(Qt=!1,n.pendingProps=l=f,(t.lanes&u)!==0)(t.flags&131072)!==0&&(Qt=!0);else return n.lanes=t.lanes,fn(t,n,u)}return Nc(t,n,a,l,u)}function Mp(t,n,a){var l=n.pendingProps,u=l.children,f=t!==null?t.memoizedState:null;if(l.mode==="hidden")if((n.mode&1)===0)n.memoizedState={baseLanes:0,cachePool:null,transitions:null},tt(ni,or),or|=a;else{if((a&1073741824)===0)return t=f!==null?f.baseLanes|a:a,n.lanes=n.childLanes=1073741824,n.memoizedState={baseLanes:t,cachePool:null,transitions:null},n.updateQueue=null,tt(ni,or),or|=t,null;n.memoizedState={baseLanes:0,cachePool:null,transitions:null},l=f!==null?f.baseLanes:a,tt(ni,or),or|=l}else f!==null?(l=f.baseLanes|a,n.memoizedState=null):l=a,tt(ni,or),or|=l;return Ut(t,n,u,a),n.child}function Op(t,n){var a=n.ref;(t===null&&a!==null||t!==null&&t.ref!==a)&&(n.flags|=512,n.flags|=2097152)}function Nc(t,n,a,l,u){var f=Yt(a)?ps:Lt.current;return f=Gs(n,f),Js(n,u),a=wc(t,n,a,l,f,u),l=_c(),t!==null&&!Qt?(n.updateQueue=t.updateQueue,n.flags&=-2053,t.lanes&=~u,fn(t,n,u)):(it&&l&&sc(n),n.flags|=1,Ut(t,n,a,u),n.child)}function Lp(t,n,a,l,u){if(Yt(a)){var f=!0;ho(n)}else f=!1;if(Js(n,u),n.stateNode===null)Io(t,n),Sp(n,a,l),Pc(n,a,l,u),l=!0;else if(t===null){var m=n.stateNode,x=n.memoizedProps;m.props=x;var S=m.context,M=a.contextType;typeof M=="object"&&M!==null?M=gr(M):(M=Yt(a)?ps:Lt.current,M=Gs(n,M));var B=a.getDerivedStateFromProps,H=typeof B=="function"||typeof m.getSnapshotBeforeUpdate=="function";H||typeof m.UNSAFE_componentWillReceiveProps!="function"&&typeof m.componentWillReceiveProps!="function"||(x!==l||S!==M)&&kp(n,m,l,M),Un=!1;var $=n.memoizedState;m.state=$,So(n,l,m,u),S=n.memoizedState,x!==l||$!==S||Xt.current||Un?(typeof B=="function"&&(Tc(n,a,B,l),S=n.memoizedState),(x=Un||_p(n,a,x,l,$,S,M))?(H||typeof m.UNSAFE_componentWillMount!="function"&&typeof m.componentWillMount!="function"||(typeof m.componentWillMount=="function"&&m.componentWillMount(),typeof m.UNSAFE_componentWillMount=="function"&&m.UNSAFE_componentWillMount()),typeof m.componentDidMount=="function"&&(n.flags|=4194308)):(typeof m.componentDidMount=="function"&&(n.flags|=4194308),n.memoizedProps=l,n.memoizedState=S),m.props=l,m.state=S,m.context=M,l=x):(typeof m.componentDidMount=="function"&&(n.flags|=4194308),l=!1)}else{m=n.stateNode,Yf(t,n),x=n.memoizedProps,M=n.type===n.elementType?x:Ir(n.type,x),m.props=M,H=n.pendingProps,$=m.context,S=a.contextType,typeof S=="object"&&S!==null?S=gr(S):(S=Yt(a)?ps:Lt.current,S=Gs(n,S));var te=a.getDerivedStateFromProps;(B=typeof te=="function"||typeof m.getSnapshotBeforeUpdate=="function")||typeof m.UNSAFE_componentWillReceiveProps!="function"&&typeof m.componentWillReceiveProps!="function"||(x!==H||$!==S)&&kp(n,m,l,S),Un=!1,$=n.memoizedState,m.state=$,So(n,l,m,u);var ie=n.memoizedState;x!==H||$!==ie||Xt.current||Un?(typeof te=="function"&&(Tc(n,a,te,l),ie=n.memoizedState),(M=Un||_p(n,a,M,l,$,ie,S)||!1)?(B||typeof m.UNSAFE_componentWillUpdate!="function"&&typeof m.componentWillUpdate!="function"||(typeof m.componentWillUpdate=="function"&&m.componentWillUpdate(l,ie,S),typeof m.UNSAFE_componentWillUpdate=="function"&&m.UNSAFE_componentWillUpdate(l,ie,S)),typeof m.componentDidUpdate=="function"&&(n.flags|=4),typeof m.getSnapshotBeforeUpdate=="function"&&(n.flags|=1024)):(typeof m.componentDidUpdate!="function"||x===t.memoizedProps&&$===t.memoizedState||(n.flags|=4),typeof m.getSnapshotBeforeUpdate!="function"||x===t.memoizedProps&&$===t.memoizedState||(n.flags|=1024),n.memoizedProps=l,n.memoizedState=ie),m.props=l,m.state=ie,m.context=S,l=M):(typeof m.componentDidUpdate!="function"||x===t.memoizedProps&&$===t.memoizedState||(n.flags|=4),typeof m.getSnapshotBeforeUpdate!="function"||x===t.memoizedProps&&$===t.memoizedState||(n.flags|=1024),l=!1)}return Ic(t,n,a,l,f,u)}function Ic(t,n,a,l,u,f){Op(t,n);var m=(n.flags&128)!==0;if(!l&&!m)return u&&Uf(n,a,!1),fn(t,n,f);l=n.stateNode,Uy.current=n;var x=m&&typeof a.getDerivedStateFromError!="function"?null:l.render();return n.flags|=1,t!==null&&m?(n.child=Ys(n,t.child,null,f),n.child=Ys(n,null,x,f)):Ut(t,n,x,f),n.memoizedState=l.state,u&&Uf(n,a,!0),n.child}function jp(t){var n=t.stateNode;n.pendingContext?Ff(t,n.pendingContext,n.pendingContext!==n.context):n.context&&Ff(t,n.context,!1),mc(t,n.containerInfo)}function Dp(t,n,a,l,u){return Xs(),lc(u),n.flags|=256,Ut(t,n,a,l),n.child}var Mc={dehydrated:null,treeContext:null,retryLane:0};function Oc(t){return{baseLanes:t,cachePool:null,transitions:null}}function Fp(t,n,a){var l=n.pendingProps,u=ot.current,f=!1,m=(n.flags&128)!==0,x;if((x=m)||(x=t!==null&&t.memoizedState===null?!1:(u&2)!==0),x?(f=!0,n.flags&=-129):(t===null||t.memoizedState!==null)&&(u|=1),tt(ot,u&1),t===null)return oc(n),t=n.memoizedState,t!==null&&(t=t.dehydrated,t!==null)?((n.mode&1)===0?n.lanes=1:t.data==="$!"?n.lanes=8:n.lanes=1073741824,null):(m=l.children,t=l.fallback,f?(l=n.mode,f=n.child,m={mode:"hidden",children:m},(l&1)===0&&f!==null?(f.childLanes=0,f.pendingProps=m):f=Zo(m,l,0,null),t=Ss(t,l,a,null),f.return=n,t.return=n,f.sibling=t,n.child=f,n.child.memoizedState=Oc(a),n.memoizedState=Mc,t):Lc(n,m));if(u=t.memoizedState,u!==null&&(x=u.dehydrated,x!==null))return $y(t,n,m,l,x,u,a);if(f){f=l.fallback,m=n.mode,u=t.child,x=u.sibling;var S={mode:"hidden",children:l.children};return(m&1)===0&&n.child!==u?(l=n.child,l.childLanes=0,l.pendingProps=S,n.deletions=null):(l=Gn(u,S),l.subtreeFlags=u.subtreeFlags&14680064),x!==null?f=Gn(x,f):(f=Ss(f,m,a,null),f.flags|=2),f.return=n,l.return=n,l.sibling=f,n.child=l,l=f,f=n.child,m=t.child.memoizedState,m=m===null?Oc(a):{baseLanes:m.baseLanes|a,cachePool:null,transitions:m.transitions},f.memoizedState=m,f.childLanes=t.childLanes&~a,n.memoizedState=Mc,l}return f=t.child,t=f.sibling,l=Gn(f,{mode:"visible",children:l.children}),(n.mode&1)===0&&(l.lanes=a),l.return=n,l.sibling=null,t!==null&&(a=n.deletions,a===null?(n.deletions=[t],n.flags|=16):a.push(t)),n.child=l,n.memoizedState=null,l}function Lc(t,n){return n=Zo({mode:"visible",children:n},t.mode,0,null),n.return=t,t.child=n}function No(t,n,a,l){return l!==null&&lc(l),Ys(n,t.child,null,a),t=Lc(n,n.pendingProps.children),t.flags|=2,n.memoizedState=null,t}function $y(t,n,a,l,u,f,m){if(a)return n.flags&256?(n.flags&=-257,l=Rc(Error(s(422))),No(t,n,m,l)):n.memoizedState!==null?(n.child=t.child,n.flags|=128,null):(f=l.fallback,u=n.mode,l=Zo({mode:"visible",children:l.children},u,0,null),f=Ss(f,u,m,null),f.flags|=2,l.return=n,f.return=n,l.sibling=f,n.child=l,(n.mode&1)!==0&&Ys(n,t.child,null,m),n.child.memoizedState=Oc(m),n.memoizedState=Mc,f);if((n.mode&1)===0)return No(t,n,m,null);if(u.data==="$!"){if(l=u.nextSibling&&u.nextSibling.dataset,l)var x=l.dgst;return l=x,f=Error(s(419)),l=Rc(f,l,void 0),No(t,n,m,l)}if(x=(m&t.childLanes)!==0,Qt||x){if(l=Tt,l!==null){switch(m&-m){case 4:u=2;break;case 16:u=8;break;case 64:case 128:case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:case 4194304:case 8388608:case 16777216:case 33554432:case 67108864:u=32;break;case 536870912:u=268435456;break;default:u=0}u=(u&(l.suspendedLanes|m))!==0?0:u,u!==0&&u!==f.retryLane&&(f.retryLane=u,un(t,u),Lr(l,t,u,-1))}return Yc(),l=Rc(Error(s(421))),No(t,n,m,l)}return u.data==="$?"?(n.flags|=128,n.child=t.child,n=eb.bind(null,t),u._reactRetry=n,null):(t=f.treeContext,ar=jn(u.nextSibling),ir=n,it=!0,Nr=null,t!==null&&(hr[mr++]=ln,hr[mr++]=cn,hr[mr++]=hs,ln=t.id,cn=t.overflow,hs=n),n=Lc(n,l.children),n.flags|=4096,n)}function Vp(t,n,a){t.lanes|=n;var l=t.alternate;l!==null&&(l.lanes|=n),fc(t.return,n,a)}function jc(t,n,a,l,u){var f=t.memoizedState;f===null?t.memoizedState={isBackwards:n,rendering:null,renderingStartTime:0,last:l,tail:a,tailMode:u}:(f.isBackwards=n,f.rendering=null,f.renderingStartTime=0,f.last=l,f.tail=a,f.tailMode=u)}function Up(t,n,a){var l=n.pendingProps,u=l.revealOrder,f=l.tail;if(Ut(t,n,l.children,a),l=ot.current,(l&2)!==0)l=l&1|2,n.flags|=128;else{if(t!==null&&(t.flags&128)!==0)e:for(t=n.child;t!==null;){if(t.tag===13)t.memoizedState!==null&&Vp(t,a,n);else if(t.tag===19)Vp(t,a,n);else if(t.child!==null){t.child.return=t,t=t.child;continue}if(t===n)break e;for(;t.sibling===null;){if(t.return===null||t.return===n)break e;t=t.return}t.sibling.return=t.return,t=t.sibling}l&=1}if(tt(ot,l),(n.mode&1)===0)n.memoizedState=null;else switch(u){case"forwards":for(a=n.child,u=null;a!==null;)t=a.alternate,t!==null&&ko(t)===null&&(u=a),a=a.sibling;a=u,a===null?(u=n.child,n.child=null):(u=a.sibling,a.sibling=null),jc(n,!1,u,a,f);break;case"backwards":for(a=null,u=n.child,n.child=null;u!==null;){if(t=u.alternate,t!==null&&ko(t)===null){n.child=u;break}t=u.sibling,u.sibling=a,a=u,u=t}jc(n,!0,a,null,f);break;case"together":jc(n,!1,null,null,void 0);break;default:n.memoizedState=null}return n.child}function Io(t,n){(n.mode&1)===0&&t!==null&&(t.alternate=null,n.alternate=null,n.flags|=2)}function fn(t,n,a){if(t!==null&&(n.dependencies=t.dependencies),bs|=n.lanes,(a&n.childLanes)===0)return null;if(t!==null&&n.child!==t.child)throw Error(s(153));if(n.child!==null){for(t=n.child,a=Gn(t,t.pendingProps),n.child=a,a.return=n;t.sibling!==null;)t=t.sibling,a=a.sibling=Gn(t,t.pendingProps),a.return=n;a.sibling=null}return n.child}function By(t,n,a){switch(n.tag){case 3:jp(n),Xs();break;case 5:ep(n);break;case 1:Yt(n.type)&&ho(n);break;case 4:mc(n,n.stateNode.containerInfo);break;case 10:var l=n.type._context,u=n.memoizedProps.value;tt(xo,l._currentValue),l._currentValue=u;break;case 13:if(l=n.memoizedState,l!==null)return l.dehydrated!==null?(tt(ot,ot.current&1),n.flags|=128,null):(a&n.child.childLanes)!==0?Fp(t,n,a):(tt(ot,ot.current&1),t=fn(t,n,a),t!==null?t.sibling:null);tt(ot,ot.current&1);break;case 19:if(l=(a&n.childLanes)!==0,(t.flags&128)!==0){if(l)return Up(t,n,a);n.flags|=128}if(u=n.memoizedState,u!==null&&(u.rendering=null,u.tail=null,u.lastEffect=null),tt(ot,ot.current),l)break;return null;case 22:case 23:return n.lanes=0,Mp(t,n,a)}return fn(t,n,a)}var $p,Dc,Bp,zp;$p=function(t,n){for(var a=n.child;a!==null;){if(a.tag===5||a.tag===6)t.appendChild(a.stateNode);else if(a.tag!==4&&a.child!==null){a.child.return=a,a=a.child;continue}if(a===n)break;for(;a.sibling===null;){if(a.return===null||a.return===n)return;a=a.return}a.sibling.return=a.return,a=a.sibling}},Dc=function(){},Bp=function(t,n,a,l){var u=t.memoizedProps;if(u!==l){t=n.stateNode,vs(Zr.current);var f=null;switch(a){case"input":u=Kt(t,u),l=Kt(t,l),f=[];break;case"select":u=J({},u,{value:void 0}),l=J({},l,{value:void 0}),f=[];break;case"textarea":u=D(t,u),l=D(t,l),f=[];break;default:typeof u.onClick!="function"&&typeof l.onClick=="function"&&(t.onclick=uo)}Ur(a,l);var m;a=null;for(M in u)if(!l.hasOwnProperty(M)&&u.hasOwnProperty(M)&&u[M]!=null)if(M==="style"){var x=u[M];for(m in x)x.hasOwnProperty(m)&&(a||(a={}),a[m]="")}else M!=="dangerouslySetInnerHTML"&&M!=="children"&&M!=="suppressContentEditableWarning"&&M!=="suppressHydrationWarning"&&M!=="autoFocus"&&(o.hasOwnProperty(M)?f||(f=[]):(f=f||[]).push(M,null));for(M in l){var S=l[M];if(x=u?.[M],l.hasOwnProperty(M)&&S!==x&&(S!=null||x!=null))if(M==="style")if(x){for(m in x)!x.hasOwnProperty(m)||S&&S.hasOwnProperty(m)||(a||(a={}),a[m]="");for(m in S)S.hasOwnProperty(m)&&x[m]!==S[m]&&(a||(a={}),a[m]=S[m])}else a||(f||(f=[]),f.push(M,a)),a=S;else M==="dangerouslySetInnerHTML"?(S=S?S.__html:void 0,x=x?x.__html:void 0,S!=null&&x!==S&&(f=f||[]).push(M,S)):M==="children"?typeof S!="string"&&typeof S!="number"||(f=f||[]).push(M,""+S):M!=="suppressContentEditableWarning"&&M!=="suppressHydrationWarning"&&(o.hasOwnProperty(M)?(S!=null&&M==="onScroll"&&rt("scroll",t),f||x===S||(f=[])):(f=f||[]).push(M,S))}a&&(f=f||[]).push("style",a);var M=f;(n.updateQueue=M)&&(n.flags|=4)}},zp=function(t,n,a,l){a!==l&&(n.flags|=4)};function ra(t,n){if(!it)switch(t.tailMode){case"hidden":n=t.tail;for(var a=null;n!==null;)n.alternate!==null&&(a=n),n=n.sibling;a===null?t.tail=null:a.sibling=null;break;case"collapsed":a=t.tail;for(var l=null;a!==null;)a.alternate!==null&&(l=a),a=a.sibling;l===null?n||t.tail===null?t.tail=null:t.tail.sibling=null:l.sibling=null}}function Dt(t){var n=t.alternate!==null&&t.alternate.child===t.child,a=0,l=0;if(n)for(var u=t.child;u!==null;)a|=u.lanes|u.childLanes,l|=u.subtreeFlags&14680064,l|=u.flags&14680064,u.return=t,u=u.sibling;else for(u=t.child;u!==null;)a|=u.lanes|u.childLanes,l|=u.subtreeFlags,l|=u.flags,u.return=t,u=u.sibling;return t.subtreeFlags|=l,t.childLanes=a,n}function zy(t,n,a){var l=n.pendingProps;switch(ic(n),n.tag){case 2:case 16:case 15:case 0:case 11:case 7:case 8:case 12:case 9:case 14:return Dt(n),null;case 1:return Yt(n.type)&&po(),Dt(n),null;case 3:return l=n.stateNode,ei(),nt(Xt),nt(Lt),yc(),l.pendingContext&&(l.context=l.pendingContext,l.pendingContext=null),(t===null||t.child===null)&&(yo(n)?n.flags|=4:t===null||t.memoizedState.isDehydrated&&(n.flags&256)===0||(n.flags|=1024,Nr!==null&&(Kc(Nr),Nr=null))),Dc(t,n),Dt(n),null;case 5:gc(n);var u=vs(Yi.current);if(a=n.type,t!==null&&n.stateNode!=null)Bp(t,n,a,l,u),t.ref!==n.ref&&(n.flags|=512,n.flags|=2097152);else{if(!l){if(n.stateNode===null)throw Error(s(166));return Dt(n),null}if(t=vs(Zr.current),yo(n)){l=n.stateNode,a=n.type;var f=n.memoizedProps;switch(l[zr]=n,l[Wi]=f,t=(n.mode&1)!==0,a){case"dialog":rt("cancel",l),rt("close",l);break;case"iframe":case"object":case"embed":rt("load",l);break;case"video":case"audio":for(u=0;u<zi.length;u++)rt(zi[u],l);break;case"source":rt("error",l);break;case"img":case"image":case"link":rt("error",l),rt("load",l);break;case"details":rt("toggle",l);break;case"input":rn(l,f),rt("invalid",l);break;case"select":l._wrapperState={wasMultiple:!!f.multiple},rt("invalid",l);break;case"textarea":ee(l,f),rt("invalid",l)}Ur(a,f),u=null;for(var m in f)if(f.hasOwnProperty(m)){var x=f[m];m==="children"?typeof x=="string"?l.textContent!==x&&(f.suppressHydrationWarning!==!0&&co(l.textContent,x,t),u=["children",x]):typeof x=="number"&&l.textContent!==""+x&&(f.suppressHydrationWarning!==!0&&co(l.textContent,x,t),u=["children",""+x]):o.hasOwnProperty(m)&&x!=null&&m==="onScroll"&&rt("scroll",l)}switch(a){case"input":tn(l),wn(l,f,!0);break;case"textarea":tn(l),W(l);break;case"select":case"option":break;default:typeof f.onClick=="function"&&(l.onclick=uo)}l=u,n.updateQueue=l,l!==null&&(n.flags|=4)}else{m=u.nodeType===9?u:u.ownerDocument,t==="http://www.w3.org/1999/xhtml"&&(t=se(a)),t==="http://www.w3.org/1999/xhtml"?a==="script"?(t=m.createElement("div"),t.innerHTML="<script><\/script>",t=t.removeChild(t.firstChild)):typeof l.is=="string"?t=m.createElement(a,{is:l.is}):(t=m.createElement(a),a==="select"&&(m=t,l.multiple?m.multiple=!0:l.size&&(m.size=l.size))):t=m.createElementNS(t,a),t[zr]=n,t[Wi]=l,$p(t,n,!1,!1),n.stateNode=t;e:{switch(m=nn(a,l),a){case"dialog":rt("cancel",t),rt("close",t),u=l;break;case"iframe":case"object":case"embed":rt("load",t),u=l;break;case"video":case"audio":for(u=0;u<zi.length;u++)rt(zi[u],t);u=l;break;case"source":rt("error",t),u=l;break;case"img":case"image":case"link":rt("error",t),rt("load",t),u=l;break;case"details":rt("toggle",t),u=l;break;case"input":rn(t,l),u=Kt(t,l),rt("invalid",t);break;case"option":u=l;break;case"select":t._wrapperState={wasMultiple:!!l.multiple},u=J({},l,{value:void 0}),rt("invalid",t);break;case"textarea":ee(t,l),u=D(t,l),rt("invalid",t);break;default:u=l}Ur(a,u),x=u;for(f in x)if(x.hasOwnProperty(f)){var S=x[f];f==="style"?Mt(t,S):f==="dangerouslySetInnerHTML"?(S=S?S.__html:void 0,S!=null&&St(t,S)):f==="children"?typeof S=="string"?(a!=="textarea"||S!=="")&&qt(t,S):typeof S=="number"&&qt(t,""+S):f!=="suppressContentEditableWarning"&&f!=="suppressHydrationWarning"&&f!=="autoFocus"&&(o.hasOwnProperty(f)?S!=null&&f==="onScroll"&&rt("scroll",t):S!=null&&F(t,f,S,m))}switch(a){case"input":tn(t),wn(t,l,!1);break;case"textarea":tn(t),W(t);break;case"option":l.value!=null&&t.setAttribute("value",""+Ie(l.value));break;case"select":t.multiple=!!l.multiple,f=l.value,f!=null?R(t,!!l.multiple,f,!1):l.defaultValue!=null&&R(t,!!l.multiple,l.defaultValue,!0);break;default:typeof u.onClick=="function"&&(t.onclick=uo)}switch(a){case"button":case"input":case"select":case"textarea":l=!!l.autoFocus;break e;case"img":l=!0;break e;default:l=!1}}l&&(n.flags|=4)}n.ref!==null&&(n.flags|=512,n.flags|=2097152)}return Dt(n),null;case 6:if(t&&n.stateNode!=null)zp(t,n,t.memoizedProps,l);else{if(typeof l!="string"&&n.stateNode===null)throw Error(s(166));if(a=vs(Yi.current),vs(Zr.current),yo(n)){if(l=n.stateNode,a=n.memoizedProps,l[zr]=n,(f=l.nodeValue!==a)&&(t=ir,t!==null))switch(t.tag){case 3:co(l.nodeValue,a,(t.mode&1)!==0);break;case 5:t.memoizedProps.suppressHydrationWarning!==!0&&co(l.nodeValue,a,(t.mode&1)!==0)}f&&(n.flags|=4)}else l=(a.nodeType===9?a:a.ownerDocument).createTextNode(l),l[zr]=n,n.stateNode=l}return Dt(n),null;case 13:if(nt(ot),l=n.memoizedState,t===null||t.memoizedState!==null&&t.memoizedState.dehydrated!==null){if(it&&ar!==null&&(n.mode&1)!==0&&(n.flags&128)===0)Wf(),Xs(),n.flags|=98560,f=!1;else if(f=yo(n),l!==null&&l.dehydrated!==null){if(t===null){if(!f)throw Error(s(318));if(f=n.memoizedState,f=f!==null?f.dehydrated:null,!f)throw Error(s(317));f[zr]=n}else Xs(),(n.flags&128)===0&&(n.memoizedState=null),n.flags|=4;Dt(n),f=!1}else Nr!==null&&(Kc(Nr),Nr=null),f=!0;if(!f)return n.flags&65536?n:null}return(n.flags&128)!==0?(n.lanes=a,n):(l=l!==null,l!==(t!==null&&t.memoizedState!==null)&&l&&(n.child.flags|=8192,(n.mode&1)!==0&&(t===null||(ot.current&1)!==0?_t===0&&(_t=3):Yc())),n.updateQueue!==null&&(n.flags|=4),Dt(n),null);case 4:return ei(),Dc(t,n),t===null&&Zi(n.stateNode.containerInfo),Dt(n),null;case 10:return dc(n.type._context),Dt(n),null;case 17:return Yt(n.type)&&po(),Dt(n),null;case 19:if(nt(ot),f=n.memoizedState,f===null)return Dt(n),null;if(l=(n.flags&128)!==0,m=f.rendering,m===null)if(l)ra(f,!1);else{if(_t!==0||t!==null&&(t.flags&128)!==0)for(t=n.child;t!==null;){if(m=ko(t),m!==null){for(n.flags|=128,ra(f,!1),l=m.updateQueue,l!==null&&(n.updateQueue=l,n.flags|=4),n.subtreeFlags=0,l=a,a=n.child;a!==null;)f=a,t=l,f.flags&=14680066,m=f.alternate,m===null?(f.childLanes=0,f.lanes=t,f.child=null,f.subtreeFlags=0,f.memoizedProps=null,f.memoizedState=null,f.updateQueue=null,f.dependencies=null,f.stateNode=null):(f.childLanes=m.childLanes,f.lanes=m.lanes,f.child=m.child,f.subtreeFlags=0,f.deletions=null,f.memoizedProps=m.memoizedProps,f.memoizedState=m.memoizedState,f.updateQueue=m.updateQueue,f.type=m.type,t=m.dependencies,f.dependencies=t===null?null:{lanes:t.lanes,firstContext:t.firstContext}),a=a.sibling;return tt(ot,ot.current&1|2),n.child}t=t.sibling}f.tail!==null&&Me()>si&&(n.flags|=128,l=!0,ra(f,!1),n.lanes=4194304)}else{if(!l)if(t=ko(m),t!==null){if(n.flags|=128,l=!0,a=t.updateQueue,a!==null&&(n.updateQueue=a,n.flags|=4),ra(f,!0),f.tail===null&&f.tailMode==="hidden"&&!m.alternate&&!it)return Dt(n),null}else 2*Me()-f.renderingStartTime>si&&a!==1073741824&&(n.flags|=128,l=!0,ra(f,!1),n.lanes=4194304);f.isBackwards?(m.sibling=n.child,n.child=m):(a=f.last,a!==null?a.sibling=m:n.child=m,f.last=m)}return f.tail!==null?(n=f.tail,f.rendering=n,f.tail=n.sibling,f.renderingStartTime=Me(),n.sibling=null,a=ot.current,tt(ot,l?a&1|2:a&1),n):(Dt(n),null);case 22:case 23:return Xc(),l=n.memoizedState!==null,t!==null&&t.memoizedState!==null!==l&&(n.flags|=8192),l&&(n.mode&1)!==0?(or&1073741824)!==0&&(Dt(n),n.subtreeFlags&6&&(n.flags|=8192)):Dt(n),null;case 24:return null;case 25:return null}throw Error(s(156,n.tag))}function Zy(t,n){switch(ic(n),n.tag){case 1:return Yt(n.type)&&po(),t=n.flags,t&65536?(n.flags=t&-65537|128,n):null;case 3:return ei(),nt(Xt),nt(Lt),yc(),t=n.flags,(t&65536)!==0&&(t&128)===0?(n.flags=t&-65537|128,n):null;case 5:return gc(n),null;case 13:if(nt(ot),t=n.memoizedState,t!==null&&t.dehydrated!==null){if(n.alternate===null)throw Error(s(340));Xs()}return t=n.flags,t&65536?(n.flags=t&-65537|128,n):null;case 19:return nt(ot),null;case 4:return ei(),null;case 10:return dc(n.type._context),null;case 22:case 23:return Xc(),null;case 24:return null;default:return null}}var Mo=!1,Ft=!1,Hy=typeof WeakSet=="function"?WeakSet:Set,ne=null;function ri(t,n){var a=t.ref;if(a!==null)if(typeof a=="function")try{a(null)}catch(l){ct(t,n,l)}else a.current=null}function Fc(t,n,a){try{a()}catch(l){ct(t,n,l)}}var Zp=!1;function Wy(t,n){if(Xl=Qa,t=_f(),Bl(t)){if("selectionStart"in t)var a={start:t.selectionStart,end:t.selectionEnd};else e:{a=(a=t.ownerDocument)&&a.defaultView||window;var l=a.getSelection&&a.getSelection();if(l&&l.rangeCount!==0){a=l.anchorNode;var u=l.anchorOffset,f=l.focusNode;l=l.focusOffset;try{a.nodeType,f.nodeType}catch{a=null;break e}var m=0,x=-1,S=-1,M=0,B=0,H=t,$=null;t:for(;;){for(var te;H!==a||u!==0&&H.nodeType!==3||(x=m+u),H!==f||l!==0&&H.nodeType!==3||(S=m+l),H.nodeType===3&&(m+=H.nodeValue.length),(te=H.firstChild)!==null;)$=H,H=te;for(;;){if(H===t)break t;if($===a&&++M===u&&(x=m),$===f&&++B===l&&(S=m),(te=H.nextSibling)!==null)break;H=$,$=H.parentNode}H=te}a=x===-1||S===-1?null:{start:x,end:S}}else a=null}a=a||{start:0,end:0}}else a=null;for(Yl={focusedElem:t,selectionRange:a},Qa=!1,ne=n;ne!==null;)if(n=ne,t=n.child,(n.subtreeFlags&1028)!==0&&t!==null)t.return=n,ne=t;else for(;ne!==null;){n=ne;try{var ie=n.alternate;if((n.flags&1024)!==0)switch(n.tag){case 0:case 11:case 15:break;case 1:if(ie!==null){var ue=ie.memoizedProps,ft=ie.memoizedState,P=n.stateNode,E=P.getSnapshotBeforeUpdate(n.elementType===n.type?ue:Ir(n.type,ue),ft);P.__reactInternalSnapshotBeforeUpdate=E}break;case 3:var A=n.stateNode.containerInfo;A.nodeType===1?A.textContent="":A.nodeType===9&&A.documentElement&&A.removeChild(A.documentElement);break;case 5:case 6:case 4:case 17:break;default:throw Error(s(163))}}catch(q){ct(n,n.return,q)}if(t=n.sibling,t!==null){t.return=n.return,ne=t;break}ne=n.return}return ie=Zp,Zp=!1,ie}function na(t,n,a){var l=n.updateQueue;if(l=l!==null?l.lastEffect:null,l!==null){var u=l=l.next;do{if((u.tag&t)===t){var f=u.destroy;u.destroy=void 0,f!==void 0&&Fc(n,a,f)}u=u.next}while(u!==l)}}function Oo(t,n){if(n=n.updateQueue,n=n!==null?n.lastEffect:null,n!==null){var a=n=n.next;do{if((a.tag&t)===t){var l=a.create;a.destroy=l()}a=a.next}while(a!==n)}}function Vc(t){var n=t.ref;if(n!==null){var a=t.stateNode;switch(t.tag){case 5:t=a;break;default:t=a}typeof n=="function"?n(t):n.current=t}}function Hp(t){var n=t.alternate;n!==null&&(t.alternate=null,Hp(n)),t.child=null,t.deletions=null,t.sibling=null,t.tag===5&&(n=t.stateNode,n!==null&&(delete n[zr],delete n[Wi],delete n[tc],delete n[Py],delete n[Ry])),t.stateNode=null,t.return=null,t.dependencies=null,t.memoizedProps=null,t.memoizedState=null,t.pendingProps=null,t.stateNode=null,t.updateQueue=null}function Wp(t){return t.tag===5||t.tag===3||t.tag===4}function Gp(t){e:for(;;){for(;t.sibling===null;){if(t.return===null||Wp(t.return))return null;t=t.return}for(t.sibling.return=t.return,t=t.sibling;t.tag!==5&&t.tag!==6&&t.tag!==18;){if(t.flags&2||t.child===null||t.tag===4)continue e;t.child.return=t,t=t.child}if(!(t.flags&2))return t.stateNode}}function Uc(t,n,a){var l=t.tag;if(l===5||l===6)t=t.stateNode,n?a.nodeType===8?a.parentNode.insertBefore(t,n):a.insertBefore(t,n):(a.nodeType===8?(n=a.parentNode,n.insertBefore(t,a)):(n=a,n.appendChild(t)),a=a._reactRootContainer,a!=null||n.onclick!==null||(n.onclick=uo));else if(l!==4&&(t=t.child,t!==null))for(Uc(t,n,a),t=t.sibling;t!==null;)Uc(t,n,a),t=t.sibling}function $c(t,n,a){var l=t.tag;if(l===5||l===6)t=t.stateNode,n?a.insertBefore(t,n):a.appendChild(t);else if(l!==4&&(t=t.child,t!==null))for($c(t,n,a),t=t.sibling;t!==null;)$c(t,n,a),t=t.sibling}var Nt=null,Mr=!1;function Bn(t,n,a){for(a=a.child;a!==null;)Kp(t,n,a),a=a.sibling}function Kp(t,n,a){if(Br&&typeof Br.onCommitFiberUnmount=="function")try{Br.onCommitFiberUnmount(ds,a)}catch{}switch(a.tag){case 5:Ft||ri(a,n);case 6:var l=Nt,u=Mr;Nt=null,Bn(t,n,a),Nt=l,Mr=u,Nt!==null&&(Mr?(t=Nt,a=a.stateNode,t.nodeType===8?t.parentNode.removeChild(a):t.removeChild(a)):Nt.removeChild(a.stateNode));break;case 18:Nt!==null&&(Mr?(t=Nt,a=a.stateNode,t.nodeType===8?ec(t.parentNode,a):t.nodeType===1&&ec(t,a),Li(t)):ec(Nt,a.stateNode));break;case 4:l=Nt,u=Mr,Nt=a.stateNode.containerInfo,Mr=!0,Bn(t,n,a),Nt=l,Mr=u;break;case 0:case 11:case 14:case 15:if(!Ft&&(l=a.updateQueue,l!==null&&(l=l.lastEffect,l!==null))){u=l=l.next;do{var f=u,m=f.destroy;f=f.tag,m!==void 0&&((f&2)!==0||(f&4)!==0)&&Fc(a,n,m),u=u.next}while(u!==l)}Bn(t,n,a);break;case 1:if(!Ft&&(ri(a,n),l=a.stateNode,typeof l.componentWillUnmount=="function"))try{l.props=a.memoizedProps,l.state=a.memoizedState,l.componentWillUnmount()}catch(x){ct(a,n,x)}Bn(t,n,a);break;case 21:Bn(t,n,a);break;case 22:a.mode&1?(Ft=(l=Ft)||a.memoizedState!==null,Bn(t,n,a),Ft=l):Bn(t,n,a);break;default:Bn(t,n,a)}}function qp(t){var n=t.updateQueue;if(n!==null){t.updateQueue=null;var a=t.stateNode;a===null&&(a=t.stateNode=new Hy),n.forEach(function(l){var u=tb.bind(null,t,l);a.has(l)||(a.add(l),l.then(u,u))})}}function Or(t,n){var a=n.deletions;if(a!==null)for(var l=0;l<a.length;l++){var u=a[l];try{var f=t,m=n,x=m;e:for(;x!==null;){switch(x.tag){case 5:Nt=x.stateNode,Mr=!1;break e;case 3:Nt=x.stateNode.containerInfo,Mr=!0;break e;case 4:Nt=x.stateNode.containerInfo,Mr=!0;break e}x=x.return}if(Nt===null)throw Error(s(160));Kp(f,m,u),Nt=null,Mr=!1;var S=u.alternate;S!==null&&(S.return=null),u.return=null}catch(M){ct(u,n,M)}}if(n.subtreeFlags&12854)for(n=n.child;n!==null;)Xp(n,t),n=n.sibling}function Xp(t,n){var a=t.alternate,l=t.flags;switch(t.tag){case 0:case 11:case 14:case 15:if(Or(n,t),Wr(t),l&4){try{na(3,t,t.return),Oo(3,t)}catch(ue){ct(t,t.return,ue)}try{na(5,t,t.return)}catch(ue){ct(t,t.return,ue)}}break;case 1:Or(n,t),Wr(t),l&512&&a!==null&&ri(a,a.return);break;case 5:if(Or(n,t),Wr(t),l&512&&a!==null&&ri(a,a.return),t.flags&32){var u=t.stateNode;try{qt(u,"")}catch(ue){ct(t,t.return,ue)}}if(l&4&&(u=t.stateNode,u!=null)){var f=t.memoizedProps,m=a!==null?a.memoizedProps:f,x=t.type,S=t.updateQueue;if(t.updateQueue=null,S!==null)try{x==="input"&&f.type==="radio"&&f.name!=null&&xn(u,f),nn(x,m);var M=nn(x,f);for(m=0;m<S.length;m+=2){var B=S[m],H=S[m+1];B==="style"?Mt(u,H):B==="dangerouslySetInnerHTML"?St(u,H):B==="children"?qt(u,H):F(u,B,H,M)}switch(x){case"input":ur(u,f);break;case"textarea":Y(u,f);break;case"select":var $=u._wrapperState.wasMultiple;u._wrapperState.wasMultiple=!!f.multiple;var te=f.value;te!=null?R(u,!!f.multiple,te,!1):$!==!!f.multiple&&(f.defaultValue!=null?R(u,!!f.multiple,f.defaultValue,!0):R(u,!!f.multiple,f.multiple?[]:"",!1))}u[Wi]=f}catch(ue){ct(t,t.return,ue)}}break;case 6:if(Or(n,t),Wr(t),l&4){if(t.stateNode===null)throw Error(s(162));u=t.stateNode,f=t.memoizedProps;try{u.nodeValue=f}catch(ue){ct(t,t.return,ue)}}break;case 3:if(Or(n,t),Wr(t),l&4&&a!==null&&a.memoizedState.isDehydrated)try{Li(n.containerInfo)}catch(ue){ct(t,t.return,ue)}break;case 4:Or(n,t),Wr(t);break;case 13:Or(n,t),Wr(t),u=t.child,u.flags&8192&&(f=u.memoizedState!==null,u.stateNode.isHidden=f,!f||u.alternate!==null&&u.alternate.memoizedState!==null||(Zc=Me())),l&4&&qp(t);break;case 22:if(B=a!==null&&a.memoizedState!==null,t.mode&1?(Ft=(M=Ft)||B,Or(n,t),Ft=M):Or(n,t),Wr(t),l&8192){if(M=t.memoizedState!==null,(t.stateNode.isHidden=M)&&!B&&(t.mode&1)!==0)for(ne=t,B=t.child;B!==null;){for(H=ne=B;ne!==null;){switch($=ne,te=$.child,$.tag){case 0:case 11:case 14:case 15:na(4,$,$.return);break;case 1:ri($,$.return);var ie=$.stateNode;if(typeof ie.componentWillUnmount=="function"){l=$,a=$.return;try{n=l,ie.props=n.memoizedProps,ie.state=n.memoizedState,ie.componentWillUnmount()}catch(ue){ct(l,a,ue)}}break;case 5:ri($,$.return);break;case 22:if($.memoizedState!==null){Jp(H);continue}}te!==null?(te.return=$,ne=te):Jp(H)}B=B.sibling}e:for(B=null,H=t;;){if(H.tag===5){if(B===null){B=H;try{u=H.stateNode,M?(f=u.style,typeof f.setProperty=="function"?f.setProperty("display","none","important"):f.display="none"):(x=H.stateNode,S=H.memoizedProps.style,m=S!=null&&S.hasOwnProperty("display")?S.display:null,x.style.display=Tr("display",m))}catch(ue){ct(t,t.return,ue)}}}else if(H.tag===6){if(B===null)try{H.stateNode.nodeValue=M?"":H.memoizedProps}catch(ue){ct(t,t.return,ue)}}else if((H.tag!==22&&H.tag!==23||H.memoizedState===null||H===t)&&H.child!==null){H.child.return=H,H=H.child;continue}if(H===t)break e;for(;H.sibling===null;){if(H.return===null||H.return===t)break e;B===H&&(B=null),H=H.return}B===H&&(B=null),H.sibling.return=H.return,H=H.sibling}}break;case 19:Or(n,t),Wr(t),l&4&&qp(t);break;case 21:break;default:Or(n,t),Wr(t)}}function Wr(t){var n=t.flags;if(n&2){try{e:{for(var a=t.return;a!==null;){if(Wp(a)){var l=a;break e}a=a.return}throw Error(s(160))}switch(l.tag){case 5:var u=l.stateNode;l.flags&32&&(qt(u,""),l.flags&=-33);var f=Gp(t);$c(t,f,u);break;case 3:case 4:var m=l.stateNode.containerInfo,x=Gp(t);Uc(t,x,m);break;default:throw Error(s(161))}}catch(S){ct(t,t.return,S)}t.flags&=-3}n&4096&&(t.flags&=-4097)}function Gy(t,n,a){ne=t,Yp(t)}function Yp(t,n,a){for(var l=(t.mode&1)!==0;ne!==null;){var u=ne,f=u.child;if(u.tag===22&&l){var m=u.memoizedState!==null||Mo;if(!m){var x=u.alternate,S=x!==null&&x.memoizedState!==null||Ft;x=Mo;var M=Ft;if(Mo=m,(Ft=S)&&!M)for(ne=u;ne!==null;)m=ne,S=m.child,m.tag===22&&m.memoizedState!==null?eh(u):S!==null?(S.return=m,ne=S):eh(u);for(;f!==null;)ne=f,Yp(f),f=f.sibling;ne=u,Mo=x,Ft=M}Qp(t)}else(u.subtreeFlags&8772)!==0&&f!==null?(f.return=u,ne=f):Qp(t)}}function Qp(t){for(;ne!==null;){var n=ne;if((n.flags&8772)!==0){var a=n.alternate;try{if((n.flags&8772)!==0)switch(n.tag){case 0:case 11:case 15:Ft||Oo(5,n);break;case 1:var l=n.stateNode;if(n.flags&4&&!Ft)if(a===null)l.componentDidMount();else{var u=n.elementType===n.type?a.memoizedProps:Ir(n.type,a.memoizedProps);l.componentDidUpdate(u,a.memoizedState,l.__reactInternalSnapshotBeforeUpdate)}var f=n.updateQueue;f!==null&&Jf(n,f,l);break;case 3:var m=n.updateQueue;if(m!==null){if(a=null,n.child!==null)switch(n.child.tag){case 5:a=n.child.stateNode;break;case 1:a=n.child.stateNode}Jf(n,m,a)}break;case 5:var x=n.stateNode;if(a===null&&n.flags&4){a=x;var S=n.memoizedProps;switch(n.type){case"button":case"input":case"select":case"textarea":S.autoFocus&&a.focus();break;case"img":S.src&&(a.src=S.src)}}break;case 6:break;case 4:break;case 12:break;case 13:if(n.memoizedState===null){var M=n.alternate;if(M!==null){var B=M.memoizedState;if(B!==null){var H=B.dehydrated;H!==null&&Li(H)}}}break;case 19:case 17:case 21:case 22:case 23:case 25:break;default:throw Error(s(163))}Ft||n.flags&512&&Vc(n)}catch($){ct(n,n.return,$)}}if(n===t){ne=null;break}if(a=n.sibling,a!==null){a.return=n.return,ne=a;break}ne=n.return}}function Jp(t){for(;ne!==null;){var n=ne;if(n===t){ne=null;break}var a=n.sibling;if(a!==null){a.return=n.return,ne=a;break}ne=n.return}}function eh(t){for(;ne!==null;){var n=ne;try{switch(n.tag){case 0:case 11:case 15:var a=n.return;try{Oo(4,n)}catch(S){ct(n,a,S)}break;case 1:var l=n.stateNode;if(typeof l.componentDidMount=="function"){var u=n.return;try{l.componentDidMount()}catch(S){ct(n,u,S)}}var f=n.return;try{Vc(n)}catch(S){ct(n,f,S)}break;case 5:var m=n.return;try{Vc(n)}catch(S){ct(n,m,S)}}}catch(S){ct(n,n.return,S)}if(n===t){ne=null;break}var x=n.sibling;if(x!==null){x.return=n.return,ne=x;break}ne=n.return}}var Ky=Math.ceil,Lo=z.ReactCurrentDispatcher,Bc=z.ReactCurrentOwner,yr=z.ReactCurrentBatchConfig,We=0,Tt=null,mt=null,It=0,or=0,ni=Dn(0),_t=0,sa=null,bs=0,jo=0,zc=0,ia=null,Jt=null,Zc=0,si=1/0,pn=null,Do=!1,Hc=null,zn=null,Fo=!1,Zn=null,Vo=0,aa=0,Wc=null,Uo=-1,$o=0;function $t(){return(We&6)!==0?Me():Uo!==-1?Uo:Uo=Me()}function Hn(t){return(t.mode&1)===0?1:(We&2)!==0&&It!==0?It&-It:Ny.transition!==null?($o===0&&($o=Wd()),$o):(t=Qe,t!==0||(t=window.event,t=t===void 0?16:tf(t.type)),t)}function Lr(t,n,a,l){if(50<aa)throw aa=0,Wc=null,Error(s(185));Ai(t,a,l),((We&2)===0||t!==Tt)&&(t===Tt&&((We&2)===0&&(jo|=a),_t===4&&Wn(t,It)),er(t,l),a===1&&We===0&&(n.mode&1)===0&&(si=Me()+500,mo&&Vn()))}function er(t,n){var a=t.callbackNode;N0(t,n);var l=qa(t,t===Tt?It:0);if(l===0)a!==null&&ce(a),t.callbackNode=null,t.callbackPriority=0;else if(n=l&-l,t.callbackPriority!==n){if(a!=null&&ce(a),n===1)t.tag===0?Ay(rh.bind(null,t)):$f(rh.bind(null,t)),Ey(function(){(We&6)===0&&Vn()}),a=null;else{switch(Gd(l)){case 1:a=nr;break;case 4:a=Pn;break;case 16:a=Rn;break;case 536870912:a=Pi;break;default:a=Rn}a=uh(a,th.bind(null,t))}t.callbackPriority=n,t.callbackNode=a}}function th(t,n){if(Uo=-1,$o=0,(We&6)!==0)throw Error(s(327));var a=t.callbackNode;if(ii()&&t.callbackNode!==a)return null;var l=qa(t,t===Tt?It:0);if(l===0)return null;if((l&30)!==0||(l&t.expiredLanes)!==0||n)n=Bo(t,l);else{n=l;var u=We;We|=2;var f=sh();(Tt!==t||It!==n)&&(pn=null,si=Me()+500,ws(t,n));do try{Yy();break}catch(x){nh(t,x)}while(!0);uc(),Lo.current=f,We=u,mt!==null?n=0:(Tt=null,It=0,n=_t)}if(n!==0){if(n===2&&(u=El(t),u!==0&&(l=u,n=Gc(t,u))),n===1)throw a=sa,ws(t,0),Wn(t,l),er(t,Me()),a;if(n===6)Wn(t,l);else{if(u=t.current.alternate,(l&30)===0&&!qy(u)&&(n=Bo(t,l),n===2&&(f=El(t),f!==0&&(l=f,n=Gc(t,f))),n===1))throw a=sa,ws(t,0),Wn(t,l),er(t,Me()),a;switch(t.finishedWork=u,t.finishedLanes=l,n){case 0:case 1:throw Error(s(345));case 2:_s(t,Jt,pn);break;case 3:if(Wn(t,l),(l&130023424)===l&&(n=Zc+500-Me(),10<n)){if(qa(t,0)!==0)break;if(u=t.suspendedLanes,(u&l)!==l){$t(),t.pingedLanes|=t.suspendedLanes&u;break}t.timeoutHandle=Jl(_s.bind(null,t,Jt,pn),n);break}_s(t,Jt,pn);break;case 4:if(Wn(t,l),(l&4194240)===l)break;for(n=t.eventTimes,u=-1;0<l;){var m=31-Rr(l);f=1<<m,m=n[m],m>u&&(u=m),l&=~f}if(l=u,l=Me()-l,l=(120>l?120:480>l?480:1080>l?1080:1920>l?1920:3e3>l?3e3:4320>l?4320:1960*Ky(l/1960))-l,10<l){t.timeoutHandle=Jl(_s.bind(null,t,Jt,pn),l);break}_s(t,Jt,pn);break;case 5:_s(t,Jt,pn);break;default:throw Error(s(329))}}}return er(t,Me()),t.callbackNode===a?th.bind(null,t):null}function Gc(t,n){var a=ia;return t.current.memoizedState.isDehydrated&&(ws(t,n).flags|=256),t=Bo(t,n),t!==2&&(n=Jt,Jt=a,n!==null&&Kc(n)),t}function Kc(t){Jt===null?Jt=t:Jt.push.apply(Jt,t)}function qy(t){for(var n=t;;){if(n.flags&16384){var a=n.updateQueue;if(a!==null&&(a=a.stores,a!==null))for(var l=0;l<a.length;l++){var u=a[l],f=u.getSnapshot;u=u.value;try{if(!Ar(f(),u))return!1}catch{return!1}}}if(a=n.child,n.subtreeFlags&16384&&a!==null)a.return=n,n=a;else{if(n===t)break;for(;n.sibling===null;){if(n.return===null||n.return===t)return!0;n=n.return}n.sibling.return=n.return,n=n.sibling}}return!0}function Wn(t,n){for(n&=~zc,n&=~jo,t.suspendedLanes|=n,t.pingedLanes&=~n,t=t.expirationTimes;0<n;){var a=31-Rr(n),l=1<<a;t[a]=-1,n&=~l}}function rh(t){if((We&6)!==0)throw Error(s(327));ii();var n=qa(t,0);if((n&1)===0)return er(t,Me()),null;var a=Bo(t,n);if(t.tag!==0&&a===2){var l=El(t);l!==0&&(n=l,a=Gc(t,l))}if(a===1)throw a=sa,ws(t,0),Wn(t,n),er(t,Me()),a;if(a===6)throw Error(s(345));return t.finishedWork=t.current.alternate,t.finishedLanes=n,_s(t,Jt,pn),er(t,Me()),null}function qc(t,n){var a=We;We|=1;try{return t(n)}finally{We=a,We===0&&(si=Me()+500,mo&&Vn())}}function xs(t){Zn!==null&&Zn.tag===0&&(We&6)===0&&ii();var n=We;We|=1;var a=yr.transition,l=Qe;try{if(yr.transition=null,Qe=1,t)return t()}finally{Qe=l,yr.transition=a,We=n,(We&6)===0&&Vn()}}function Xc(){or=ni.current,nt(ni)}function ws(t,n){t.finishedWork=null,t.finishedLanes=0;var a=t.timeoutHandle;if(a!==-1&&(t.timeoutHandle=-1,Cy(a)),mt!==null)for(a=mt.return;a!==null;){var l=a;switch(ic(l),l.tag){case 1:l=l.type.childContextTypes,l!=null&&po();break;case 3:ei(),nt(Xt),nt(Lt),yc();break;case 5:gc(l);break;case 4:ei();break;case 13:nt(ot);break;case 19:nt(ot);break;case 10:dc(l.type._context);break;case 22:case 23:Xc()}a=a.return}if(Tt=t,mt=t=Gn(t.current,null),It=or=n,_t=0,sa=null,zc=jo=bs=0,Jt=ia=null,gs!==null){for(n=0;n<gs.length;n++)if(a=gs[n],l=a.interleaved,l!==null){a.interleaved=null;var u=l.next,f=a.pending;if(f!==null){var m=f.next;f.next=u,l.next=m}a.pending=l}gs=null}return t}function nh(t,n){do{var a=mt;try{if(uc(),Co.current=Ro,Eo){for(var l=lt.memoizedState;l!==null;){var u=l.queue;u!==null&&(u.pending=null),l=l.next}Eo=!1}if(ys=0,Et=wt=lt=null,Qi=!1,Ji=0,Bc.current=null,a===null||a.return===null){_t=1,sa=n,mt=null;break}e:{var f=t,m=a.return,x=a,S=n;if(n=It,x.flags|=32768,S!==null&&typeof S=="object"&&typeof S.then=="function"){var M=S,B=x,H=B.tag;if((B.mode&1)===0&&(H===0||H===11||H===15)){var $=B.alternate;$?(B.updateQueue=$.updateQueue,B.memoizedState=$.memoizedState,B.lanes=$.lanes):(B.updateQueue=null,B.memoizedState=null)}var te=Pp(m);if(te!==null){te.flags&=-257,Rp(te,m,x,f,n),te.mode&1&&Tp(f,M,n),n=te,S=M;var ie=n.updateQueue;if(ie===null){var ue=new Set;ue.add(S),n.updateQueue=ue}else ie.add(S);break e}else{if((n&1)===0){Tp(f,M,n),Yc();break e}S=Error(s(426))}}else if(it&&x.mode&1){var ft=Pp(m);if(ft!==null){(ft.flags&65536)===0&&(ft.flags|=256),Rp(ft,m,x,f,n),lc(ti(S,x));break e}}f=S=ti(S,x),_t!==4&&(_t=2),ia===null?ia=[f]:ia.push(f),f=m;do{switch(f.tag){case 3:f.flags|=65536,n&=-n,f.lanes|=n;var P=Cp(f,S,n);Qf(f,P);break e;case 1:x=S;var E=f.type,A=f.stateNode;if((f.flags&128)===0&&(typeof E.getDerivedStateFromError=="function"||A!==null&&typeof A.componentDidCatch=="function"&&(zn===null||!zn.has(A)))){f.flags|=65536,n&=-n,f.lanes|=n;var q=Ep(f,x,n);Qf(f,q);break e}}f=f.return}while(f!==null)}ah(a)}catch(me){n=me,mt===a&&a!==null&&(mt=a=a.return);continue}break}while(!0)}function sh(){var t=Lo.current;return Lo.current=Ro,t===null?Ro:t}function Yc(){(_t===0||_t===3||_t===2)&&(_t=4),Tt===null||(bs&268435455)===0&&(jo&268435455)===0||Wn(Tt,It)}function Bo(t,n){var a=We;We|=2;var l=sh();(Tt!==t||It!==n)&&(pn=null,ws(t,n));do try{Xy();break}catch(u){nh(t,u)}while(!0);if(uc(),We=a,Lo.current=l,mt!==null)throw Error(s(261));return Tt=null,It=0,_t}function Xy(){for(;mt!==null;)ih(mt)}function Yy(){for(;mt!==null&&!et();)ih(mt)}function ih(t){var n=ch(t.alternate,t,or);t.memoizedProps=t.pendingProps,n===null?ah(t):mt=n,Bc.current=null}function ah(t){var n=t;do{var a=n.alternate;if(t=n.return,(n.flags&32768)===0){if(a=zy(a,n,or),a!==null){mt=a;return}}else{if(a=Zy(a,n),a!==null){a.flags&=32767,mt=a;return}if(t!==null)t.flags|=32768,t.subtreeFlags=0,t.deletions=null;else{_t=6,mt=null;return}}if(n=n.sibling,n!==null){mt=n;return}mt=n=t}while(n!==null);_t===0&&(_t=5)}function _s(t,n,a){var l=Qe,u=yr.transition;try{yr.transition=null,Qe=1,Qy(t,n,a,l)}finally{yr.transition=u,Qe=l}return null}function Qy(t,n,a,l){do ii();while(Zn!==null);if((We&6)!==0)throw Error(s(327));a=t.finishedWork;var u=t.finishedLanes;if(a===null)return null;if(t.finishedWork=null,t.finishedLanes=0,a===t.current)throw Error(s(177));t.callbackNode=null,t.callbackPriority=0;var f=a.lanes|a.childLanes;if(I0(t,f),t===Tt&&(mt=Tt=null,It=0),(a.subtreeFlags&2064)===0&&(a.flags&2064)===0||Fo||(Fo=!0,uh(Rn,function(){return ii(),null})),f=(a.flags&15990)!==0,(a.subtreeFlags&15990)!==0||f){f=yr.transition,yr.transition=null;var m=Qe;Qe=1;var x=We;We|=4,Bc.current=null,Wy(t,a),Xp(a,t),yy(Yl),Qa=!!Xl,Yl=Xl=null,t.current=a,Gy(a),kt(),We=x,Qe=m,yr.transition=f}else t.current=a;if(Fo&&(Fo=!1,Zn=t,Vo=u),f=t.pendingLanes,f===0&&(zn=null),E0(a.stateNode),er(t,Me()),n!==null)for(l=t.onRecoverableError,a=0;a<n.length;a++)u=n[a],l(u.value,{componentStack:u.stack,digest:u.digest});if(Do)throw Do=!1,t=Hc,Hc=null,t;return(Vo&1)!==0&&t.tag!==0&&ii(),f=t.pendingLanes,(f&1)!==0?t===Wc?aa++:(aa=0,Wc=t):aa=0,Vn(),null}function ii(){if(Zn!==null){var t=Gd(Vo),n=yr.transition,a=Qe;try{if(yr.transition=null,Qe=16>t?16:t,Zn===null)var l=!1;else{if(t=Zn,Zn=null,Vo=0,(We&6)!==0)throw Error(s(331));var u=We;for(We|=4,ne=t.current;ne!==null;){var f=ne,m=f.child;if((ne.flags&16)!==0){var x=f.deletions;if(x!==null){for(var S=0;S<x.length;S++){var M=x[S];for(ne=M;ne!==null;){var B=ne;switch(B.tag){case 0:case 11:case 15:na(8,B,f)}var H=B.child;if(H!==null)H.return=B,ne=H;else for(;ne!==null;){B=ne;var $=B.sibling,te=B.return;if(Hp(B),B===M){ne=null;break}if($!==null){$.return=te,ne=$;break}ne=te}}}var ie=f.alternate;if(ie!==null){var ue=ie.child;if(ue!==null){ie.child=null;do{var ft=ue.sibling;ue.sibling=null,ue=ft}while(ue!==null)}}ne=f}}if((f.subtreeFlags&2064)!==0&&m!==null)m.return=f,ne=m;else e:for(;ne!==null;){if(f=ne,(f.flags&2048)!==0)switch(f.tag){case 0:case 11:case 15:na(9,f,f.return)}var P=f.sibling;if(P!==null){P.return=f.return,ne=P;break e}ne=f.return}}var E=t.current;for(ne=E;ne!==null;){m=ne;var A=m.child;if((m.subtreeFlags&2064)!==0&&A!==null)A.return=m,ne=A;else e:for(m=E;ne!==null;){if(x=ne,(x.flags&2048)!==0)try{switch(x.tag){case 0:case 11:case 15:Oo(9,x)}}catch(me){ct(x,x.return,me)}if(x===m){ne=null;break e}var q=x.sibling;if(q!==null){q.return=x.return,ne=q;break e}ne=x.return}}if(We=u,Vn(),Br&&typeof Br.onPostCommitFiberRoot=="function")try{Br.onPostCommitFiberRoot(ds,t)}catch{}l=!0}return l}finally{Qe=a,yr.transition=n}}return!1}function oh(t,n,a){n=ti(a,n),n=Cp(t,n,1),t=$n(t,n,1),n=$t(),t!==null&&(Ai(t,1,n),er(t,n))}function ct(t,n,a){if(t.tag===3)oh(t,t,a);else for(;n!==null;){if(n.tag===3){oh(n,t,a);break}else if(n.tag===1){var l=n.stateNode;if(typeof n.type.getDerivedStateFromError=="function"||typeof l.componentDidCatch=="function"&&(zn===null||!zn.has(l))){t=ti(a,t),t=Ep(n,t,1),n=$n(n,t,1),t=$t(),n!==null&&(Ai(n,1,t),er(n,t));break}}n=n.return}}function Jy(t,n,a){var l=t.pingCache;l!==null&&l.delete(n),n=$t(),t.pingedLanes|=t.suspendedLanes&a,Tt===t&&(It&a)===a&&(_t===4||_t===3&&(It&130023424)===It&&500>Me()-Zc?ws(t,0):zc|=a),er(t,n)}function lh(t,n){n===0&&((t.mode&1)===0?n=1:(n=Ka,Ka<<=1,(Ka&130023424)===0&&(Ka=4194304)));var a=$t();t=un(t,n),t!==null&&(Ai(t,n,a),er(t,a))}function eb(t){var n=t.memoizedState,a=0;n!==null&&(a=n.retryLane),lh(t,a)}function tb(t,n){var a=0;switch(t.tag){case 13:var l=t.stateNode,u=t.memoizedState;u!==null&&(a=u.retryLane);break;case 19:l=t.stateNode;break;default:throw Error(s(314))}l!==null&&l.delete(n),lh(t,a)}var ch;ch=function(t,n,a){if(t!==null)if(t.memoizedProps!==n.pendingProps||Xt.current)Qt=!0;else{if((t.lanes&a)===0&&(n.flags&128)===0)return Qt=!1,By(t,n,a);Qt=(t.flags&131072)!==0}else Qt=!1,it&&(n.flags&1048576)!==0&&Bf(n,vo,n.index);switch(n.lanes=0,n.tag){case 2:var l=n.type;Io(t,n),t=n.pendingProps;var u=Gs(n,Lt.current);Js(n,a),u=wc(null,n,l,t,u,a);var f=_c();return n.flags|=1,typeof u=="object"&&u!==null&&typeof u.render=="function"&&u.$$typeof===void 0?(n.tag=1,n.memoizedState=null,n.updateQueue=null,Yt(l)?(f=!0,ho(n)):f=!1,n.memoizedState=u.state!==null&&u.state!==void 0?u.state:null,hc(n),u.updater=Ao,n.stateNode=u,u._reactInternals=n,Pc(n,l,t,a),n=Ic(null,n,l,!0,f,a)):(n.tag=0,it&&f&&sc(n),Ut(null,n,u,a),n=n.child),n;case 16:l=n.elementType;e:{switch(Io(t,n),t=n.pendingProps,u=l._init,l=u(l._payload),n.type=l,u=n.tag=nb(l),t=Ir(l,t),u){case 0:n=Nc(null,n,l,t,a);break e;case 1:n=Lp(null,n,l,t,a);break e;case 11:n=Ap(null,n,l,t,a);break e;case 14:n=Np(null,n,l,Ir(l.type,t),a);break e}throw Error(s(306,l,""))}return n;case 0:return l=n.type,u=n.pendingProps,u=n.elementType===l?u:Ir(l,u),Nc(t,n,l,u,a);case 1:return l=n.type,u=n.pendingProps,u=n.elementType===l?u:Ir(l,u),Lp(t,n,l,u,a);case 3:e:{if(jp(n),t===null)throw Error(s(387));l=n.pendingProps,f=n.memoizedState,u=f.element,Yf(t,n),So(n,l,null,a);var m=n.memoizedState;if(l=m.element,f.isDehydrated)if(f={element:l,isDehydrated:!1,cache:m.cache,pendingSuspenseBoundaries:m.pendingSuspenseBoundaries,transitions:m.transitions},n.updateQueue.baseState=f,n.memoizedState=f,n.flags&256){u=ti(Error(s(423)),n),n=Dp(t,n,l,a,u);break e}else if(l!==u){u=ti(Error(s(424)),n),n=Dp(t,n,l,a,u);break e}else for(ar=jn(n.stateNode.containerInfo.firstChild),ir=n,it=!0,Nr=null,a=qf(n,null,l,a),n.child=a;a;)a.flags=a.flags&-3|4096,a=a.sibling;else{if(Xs(),l===u){n=fn(t,n,a);break e}Ut(t,n,l,a)}n=n.child}return n;case 5:return ep(n),t===null&&oc(n),l=n.type,u=n.pendingProps,f=t!==null?t.memoizedProps:null,m=u.children,Ql(l,u)?m=null:f!==null&&Ql(l,f)&&(n.flags|=32),Op(t,n),Ut(t,n,m,a),n.child;case 6:return t===null&&oc(n),null;case 13:return Fp(t,n,a);case 4:return mc(n,n.stateNode.containerInfo),l=n.pendingProps,t===null?n.child=Ys(n,null,l,a):Ut(t,n,l,a),n.child;case 11:return l=n.type,u=n.pendingProps,u=n.elementType===l?u:Ir(l,u),Ap(t,n,l,u,a);case 7:return Ut(t,n,n.pendingProps,a),n.child;case 8:return Ut(t,n,n.pendingProps.children,a),n.child;case 12:return Ut(t,n,n.pendingProps.children,a),n.child;case 10:e:{if(l=n.type._context,u=n.pendingProps,f=n.memoizedProps,m=u.value,tt(xo,l._currentValue),l._currentValue=m,f!==null)if(Ar(f.value,m)){if(f.children===u.children&&!Xt.current){n=fn(t,n,a);break e}}else for(f=n.child,f!==null&&(f.return=n);f!==null;){var x=f.dependencies;if(x!==null){m=f.child;for(var S=x.firstContext;S!==null;){if(S.context===l){if(f.tag===1){S=dn(-1,a&-a),S.tag=2;var M=f.updateQueue;if(M!==null){M=M.shared;var B=M.pending;B===null?S.next=S:(S.next=B.next,B.next=S),M.pending=S}}f.lanes|=a,S=f.alternate,S!==null&&(S.lanes|=a),fc(f.return,a,n),x.lanes|=a;break}S=S.next}}else if(f.tag===10)m=f.type===n.type?null:f.child;else if(f.tag===18){if(m=f.return,m===null)throw Error(s(341));m.lanes|=a,x=m.alternate,x!==null&&(x.lanes|=a),fc(m,a,n),m=f.sibling}else m=f.child;if(m!==null)m.return=f;else for(m=f;m!==null;){if(m===n){m=null;break}if(f=m.sibling,f!==null){f.return=m.return,m=f;break}m=m.return}f=m}Ut(t,n,u.children,a),n=n.child}return n;case 9:return u=n.type,l=n.pendingProps.children,Js(n,a),u=gr(u),l=l(u),n.flags|=1,Ut(t,n,l,a),n.child;case 14:return l=n.type,u=Ir(l,n.pendingProps),u=Ir(l.type,u),Np(t,n,l,u,a);case 15:return Ip(t,n,n.type,n.pendingProps,a);case 17:return l=n.type,u=n.pendingProps,u=n.elementType===l?u:Ir(l,u),Io(t,n),n.tag=1,Yt(l)?(t=!0,ho(n)):t=!1,Js(n,a),Sp(n,l,u),Pc(n,l,u,a),Ic(null,n,l,!0,t,a);case 19:return Up(t,n,a);case 22:return Mp(t,n,a)}throw Error(s(156,n.tag))};function uh(t,n){return G(t,n)}function rb(t,n,a,l){this.tag=t,this.key=a,this.sibling=this.child=this.return=this.stateNode=this.type=this.elementType=null,this.index=0,this.ref=null,this.pendingProps=n,this.dependencies=this.memoizedState=this.updateQueue=this.memoizedProps=null,this.mode=l,this.subtreeFlags=this.flags=0,this.deletions=null,this.childLanes=this.lanes=0,this.alternate=null}function br(t,n,a,l){return new rb(t,n,a,l)}function Qc(t){return t=t.prototype,!(!t||!t.isReactComponent)}function nb(t){if(typeof t=="function")return Qc(t)?1:0;if(t!=null){if(t=t.$$typeof,t===xe)return 11;if(t===Ye)return 14}return 2}function Gn(t,n){var a=t.alternate;return a===null?(a=br(t.tag,n,t.key,t.mode),a.elementType=t.elementType,a.type=t.type,a.stateNode=t.stateNode,a.alternate=t,t.alternate=a):(a.pendingProps=n,a.type=t.type,a.flags=0,a.subtreeFlags=0,a.deletions=null),a.flags=t.flags&14680064,a.childLanes=t.childLanes,a.lanes=t.lanes,a.child=t.child,a.memoizedProps=t.memoizedProps,a.memoizedState=t.memoizedState,a.updateQueue=t.updateQueue,n=t.dependencies,a.dependencies=n===null?null:{lanes:n.lanes,firstContext:n.firstContext},a.sibling=t.sibling,a.index=t.index,a.ref=t.ref,a}function zo(t,n,a,l,u,f){var m=2;if(l=t,typeof t=="function")Qc(t)&&(m=1);else if(typeof t=="string")m=5;else e:switch(t){case ye:return Ss(a.children,u,f,n);case he:m=8,u|=8;break;case be:return t=br(12,a,n,u|2),t.elementType=be,t.lanes=f,t;case we:return t=br(13,a,n,u),t.elementType=we,t.lanes=f,t;case Oe:return t=br(19,a,n,u),t.elementType=Oe,t.lanes=f,t;case Re:return Zo(a,u,f,n);default:if(typeof t=="object"&&t!==null)switch(t.$$typeof){case Ve:m=10;break e;case Ce:m=9;break e;case xe:m=11;break e;case Ye:m=14;break e;case He:m=16,l=null;break e}throw Error(s(130,t==null?t:typeof t,""))}return n=br(m,a,n,u),n.elementType=t,n.type=l,n.lanes=f,n}function Ss(t,n,a,l){return t=br(7,t,l,n),t.lanes=a,t}function Zo(t,n,a,l){return t=br(22,t,l,n),t.elementType=Re,t.lanes=a,t.stateNode={isHidden:!1},t}function Jc(t,n,a){return t=br(6,t,null,n),t.lanes=a,t}function eu(t,n,a){return n=br(4,t.children!==null?t.children:[],t.key,n),n.lanes=a,n.stateNode={containerInfo:t.containerInfo,pendingChildren:null,implementation:t.implementation},n}function sb(t,n,a,l,u){this.tag=n,this.containerInfo=t,this.finishedWork=this.pingCache=this.current=this.pendingChildren=null,this.timeoutHandle=-1,this.callbackNode=this.pendingContext=this.context=null,this.callbackPriority=0,this.eventTimes=Tl(0),this.expirationTimes=Tl(-1),this.entangledLanes=this.finishedLanes=this.mutableReadLanes=this.expiredLanes=this.pingedLanes=this.suspendedLanes=this.pendingLanes=0,this.entanglements=Tl(0),this.identifierPrefix=l,this.onRecoverableError=u,this.mutableSourceEagerHydrationData=null}function tu(t,n,a,l,u,f,m,x,S){return t=new sb(t,n,a,x,S),n===1?(n=1,f===!0&&(n|=8)):n=0,f=br(3,null,null,n),t.current=f,f.stateNode=t,f.memoizedState={element:l,isDehydrated:a,cache:null,transitions:null,pendingSuspenseBoundaries:null},hc(f),t}function ib(t,n,a){var l=3<arguments.length&&arguments[3]!==void 0?arguments[3]:null;return{$$typeof:Q,key:l==null?null:""+l,children:t,containerInfo:n,implementation:a}}function dh(t){if(!t)return Fn;t=t._reactInternals;e:{if($r(t)!==t||t.tag!==1)throw Error(s(170));var n=t;do{switch(n.tag){case 3:n=n.stateNode.context;break e;case 1:if(Yt(n.type)){n=n.stateNode.__reactInternalMemoizedMergedChildContext;break e}}n=n.return}while(n!==null);throw Error(s(171))}if(t.tag===1){var a=t.type;if(Yt(a))return Vf(t,a,n)}return n}function fh(t,n,a,l,u,f,m,x,S){return t=tu(a,l,!0,t,u,f,m,x,S),t.context=dh(null),a=t.current,l=$t(),u=Hn(a),f=dn(l,u),f.callback=n??null,$n(a,f,u),t.current.lanes=u,Ai(t,u,l),er(t,l),t}function Ho(t,n,a,l){var u=n.current,f=$t(),m=Hn(u);return a=dh(a),n.context===null?n.context=a:n.pendingContext=a,n=dn(f,m),n.payload={element:t},l=l===void 0?null:l,l!==null&&(n.callback=l),t=$n(u,n,m),t!==null&&(Lr(t,u,m,f),_o(t,u,m)),m}function Wo(t){if(t=t.current,!t.child)return null;switch(t.child.tag){case 5:return t.child.stateNode;default:return t.child.stateNode}}function ph(t,n){if(t=t.memoizedState,t!==null&&t.dehydrated!==null){var a=t.retryLane;t.retryLane=a!==0&&a<n?a:n}}function ru(t,n){ph(t,n),(t=t.alternate)&&ph(t,n)}function ab(){return null}var hh=typeof reportError=="function"?reportError:function(t){console.error(t)};function nu(t){this._internalRoot=t}Go.prototype.render=nu.prototype.render=function(t){var n=this._internalRoot;if(n===null)throw Error(s(409));Ho(t,n,null,null)},Go.prototype.unmount=nu.prototype.unmount=function(){var t=this._internalRoot;if(t!==null){this._internalRoot=null;var n=t.containerInfo;xs(function(){Ho(null,t,null,null)}),n[an]=null}};function Go(t){this._internalRoot=t}Go.prototype.unstable_scheduleHydration=function(t){if(t){var n=Xd();t={blockedOn:null,target:t,priority:n};for(var a=0;a<Mn.length&&n!==0&&n<Mn[a].priority;a++);Mn.splice(a,0,t),a===0&&Jd(t)}};function su(t){return!(!t||t.nodeType!==1&&t.nodeType!==9&&t.nodeType!==11)}function Ko(t){return!(!t||t.nodeType!==1&&t.nodeType!==9&&t.nodeType!==11&&(t.nodeType!==8||t.nodeValue!==" react-mount-point-unstable "))}function mh(){}function ob(t,n,a,l,u){if(u){if(typeof l=="function"){var f=l;l=function(){var M=Wo(m);f.call(M)}}var m=fh(n,l,t,0,null,!1,!1,"",mh);return t._reactRootContainer=m,t[an]=m.current,Zi(t.nodeType===8?t.parentNode:t),xs(),m}for(;u=t.lastChild;)t.removeChild(u);if(typeof l=="function"){var x=l;l=function(){var M=Wo(S);x.call(M)}}var S=tu(t,0,!1,null,null,!1,!1,"",mh);return t._reactRootContainer=S,t[an]=S.current,Zi(t.nodeType===8?t.parentNode:t),xs(function(){Ho(n,S,a,l)}),S}function qo(t,n,a,l,u){var f=a._reactRootContainer;if(f){var m=f;if(typeof u=="function"){var x=u;u=function(){var S=Wo(m);x.call(S)}}Ho(n,m,t,u)}else m=ob(a,n,t,u,l);return Wo(m)}Kd=function(t){switch(t.tag){case 3:var n=t.stateNode;if(n.current.memoizedState.isDehydrated){var a=Ri(n.pendingLanes);a!==0&&(Pl(n,a|1),er(n,Me()),(We&6)===0&&(si=Me()+500,Vn()))}break;case 13:xs(function(){var l=un(t,1);if(l!==null){var u=$t();Lr(l,t,1,u)}}),ru(t,1)}},Rl=function(t){if(t.tag===13){var n=un(t,134217728);if(n!==null){var a=$t();Lr(n,t,134217728,a)}ru(t,134217728)}},qd=function(t){if(t.tag===13){var n=Hn(t),a=un(t,n);if(a!==null){var l=$t();Lr(a,t,n,l)}ru(t,n)}},Xd=function(){return Qe},Yd=function(t,n){var a=Qe;try{return Qe=t,n()}finally{Qe=a}},Cn=function(t,n,a){switch(n){case"input":if(ur(t,a),n=a.name,a.type==="radio"&&n!=null){for(a=t;a.parentNode;)a=a.parentNode;for(a=a.querySelectorAll("input[name="+JSON.stringify(""+n)+'][type="radio"]'),n=0;n<a.length;n++){var l=a[n];if(l!==t&&l.form===t.form){var u=fo(l);if(!u)throw Error(s(90));cr(l),ur(l,u)}}}break;case"textarea":Y(t,a);break;case"select":n=a.value,n!=null&&R(t,!!a.multiple,n,!1)}},sn=qc,Za=xs;var lb={usingClientEntryPoint:!1,Events:[Gi,Hs,fo,za,dt,qc]},oa={findFiberByHostInstance:fs,bundleType:0,version:"18.3.1",rendererPackageName:"react-dom"},cb={bundleType:oa.bundleType,version:oa.version,rendererPackageName:oa.rendererPackageName,rendererConfig:oa.rendererConfig,overrideHookState:null,overrideHookStateDeletePath:null,overrideHookStateRenamePath:null,overrideProps:null,overridePropsDeletePath:null,overridePropsRenamePath:null,setErrorHandler:null,setSuspenseHandler:null,scheduleUpdate:null,currentDispatcherRef:z.ReactCurrentDispatcher,findHostInstanceByFiber:function(t){return t=ve(t),t===null?null:t.stateNode},findFiberByHostInstance:oa.findFiberByHostInstance||ab,findHostInstancesForRefresh:null,scheduleRefresh:null,scheduleRoot:null,setRefreshHandler:null,getCurrentFiber:null,reconcilerVersion:"18.3.1-next-f1338f8080-20240426"};if(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__<"u"){var Xo=__REACT_DEVTOOLS_GLOBAL_HOOK__;if(!Xo.isDisabled&&Xo.supportsFiber)try{ds=Xo.inject(cb),Br=Xo}catch{}}return tr.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED=lb,tr.createPortal=function(t,n){var a=2<arguments.length&&arguments[2]!==void 0?arguments[2]:null;if(!su(n))throw Error(s(200));return ib(t,n,null,a)},tr.createRoot=function(t,n){if(!su(t))throw Error(s(299));var a=!1,l="",u=hh;return n!=null&&(n.unstable_strictMode===!0&&(a=!0),n.identifierPrefix!==void 0&&(l=n.identifierPrefix),n.onRecoverableError!==void 0&&(u=n.onRecoverableError)),n=tu(t,1,!1,null,null,a,!1,l,u),t[an]=n.current,Zi(t.nodeType===8?t.parentNode:t),new nu(n)},tr.findDOMNode=function(t){if(t==null)return null;if(t.nodeType===1)return t;var n=t._reactInternals;if(n===void 0)throw typeof t.render=="function"?Error(s(188)):(t=Object.keys(t).join(","),Error(s(268,t)));return t=ve(n),t=t===null?null:t.stateNode,t},tr.flushSync=function(t){return xs(t)},tr.hydrate=function(t,n,a){if(!Ko(n))throw Error(s(200));return qo(null,t,n,!0,a)},tr.hydrateRoot=function(t,n,a){if(!su(t))throw Error(s(405));var l=a!=null&&a.hydratedSources||null,u=!1,f="",m=hh;if(a!=null&&(a.unstable_strictMode===!0&&(u=!0),a.identifierPrefix!==void 0&&(f=a.identifierPrefix),a.onRecoverableError!==void 0&&(m=a.onRecoverableError)),n=fh(n,null,t,1,a??null,u,!1,f,m),t[an]=n.current,Zi(t),l)for(t=0;t<l.length;t++)a=l[t],u=a._getVersion,u=u(a._source),n.mutableSourceEagerHydrationData==null?n.mutableSourceEagerHydrationData=[a,u]:n.mutableSourceEagerHydrationData.push(a,u);return new Go(n)},tr.render=function(t,n,a){if(!Ko(n))throw Error(s(200));return qo(null,t,n,!1,a)},tr.unmountComponentAtNode=function(t){if(!Ko(t))throw Error(s(40));return t._reactRootContainer?(xs(function(){qo(null,null,t,!1,function(){t._reactRootContainer=null,t[an]=null})}),!0):!1},tr.unstable_batchedUpdates=qc,tr.unstable_renderSubtreeIntoContainer=function(t,n,a,l){if(!Ko(a))throw Error(s(200));if(t==null||t._reactInternals===void 0)throw Error(s(38));return qo(t,n,a,!1,l)},tr.version="18.3.1-next-f1338f8080-20240426",tr}var Sh;function dg(){if(Sh)return ou.exports;Sh=1;function e(){if(!(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__>"u"||typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE!="function"))try{__REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE(e)}catch(r){console.error(r)}}return e(),ou.exports=yb(),ou.exports}var kh;function bb(){if(kh)return Yo;kh=1;var e=dg();return Yo.createRoot=e.createRoot,Yo.hydrateRoot=e.hydrateRoot,Yo}var xb=bb();const fg=ug(xb);dg();/**
 * @remix-run/router v1.23.0
 *
 * Copyright (c) Remix Software Inc.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE.md file in the root directory of this source tree.
 *
 * @license MIT
 */function Sa(){return Sa=Object.assign?Object.assign.bind():function(e){for(var r=1;r<arguments.length;r++){var s=arguments[r];for(var i in s)Object.prototype.hasOwnProperty.call(s,i)&&(e[i]=s[i])}return e},Sa.apply(this,arguments)}var Qn;(function(e){e.Pop="POP",e.Push="PUSH",e.Replace="REPLACE"})(Qn||(Qn={}));const Ch="popstate";function wb(e){e===void 0&&(e={});function r(i,o){let{pathname:c,search:d,hash:p}=i.location;return Ru("",{pathname:c,search:d,hash:p},o.state&&o.state.usr||null,o.state&&o.state.key||"default")}function s(i,o){return typeof o=="string"?o:dl(o)}return Sb(r,s,null,e)}function xt(e,r){if(e===!1||e===null||typeof e>"u")throw new Error(r)}function pg(e,r){if(!e){typeof console<"u"&&console.warn(r);try{throw new Error(r)}catch{}}}function _b(){return Math.random().toString(36).substr(2,8)}function Eh(e,r){return{usr:e.state,key:e.key,idx:r}}function Ru(e,r,s,i){return s===void 0&&(s=null),Sa({pathname:typeof e=="string"?e:e.pathname,search:"",hash:""},typeof r=="string"?yi(r):r,{state:s,key:r&&r.key||i||_b()})}function dl(e){let{pathname:r="/",search:s="",hash:i=""}=e;return s&&s!=="?"&&(r+=s.charAt(0)==="?"?s:"?"+s),i&&i!=="#"&&(r+=i.charAt(0)==="#"?i:"#"+i),r}function yi(e){let r={};if(e){let s=e.indexOf("#");s>=0&&(r.hash=e.substr(s),e=e.substr(0,s));let i=e.indexOf("?");i>=0&&(r.search=e.substr(i),e=e.substr(0,i)),e&&(r.pathname=e)}return r}function Sb(e,r,s,i){i===void 0&&(i={});let{window:o=document.defaultView,v5Compat:c=!1}=i,d=o.history,p=Qn.Pop,h=null,g=v();g==null&&(g=0,d.replaceState(Sa({},d.state,{idx:g}),""));function v(){return(d.state||{idx:null}).idx}function b(){p=Qn.Pop;let I=v(),Z=I==null?null:I-g;g=I,h&&h({action:p,location:N.location,delta:Z})}function w(I,Z){p=Qn.Push;let V=Ru(N.location,I,Z);g=v()+1;let F=Eh(V,g),z=N.createHref(V);try{d.pushState(F,"",z)}catch(T){if(T instanceof DOMException&&T.name==="DataCloneError")throw T;o.location.assign(z)}c&&h&&h({action:p,location:N.location,delta:1})}function j(I,Z){p=Qn.Replace;let V=Ru(N.location,I,Z);g=v();let F=Eh(V,g),z=N.createHref(V);d.replaceState(F,"",z),c&&h&&h({action:p,location:N.location,delta:0})}function L(I){let Z=o.location.origin!=="null"?o.location.origin:o.location.href,V=typeof I=="string"?I:dl(I);return V=V.replace(/ $/,"%20"),xt(Z,"No window.location.(origin|href) available to create URL for href: "+V),new URL(V,Z)}let N={get action(){return p},get location(){return e(o,d)},listen(I){if(h)throw new Error("A history only accepts one active listener");return o.addEventListener(Ch,b),h=I,()=>{o.removeEventListener(Ch,b),h=null}},createHref(I){return r(o,I)},createURL:L,encodeLocation(I){let Z=L(I);return{pathname:Z.pathname,search:Z.search,hash:Z.hash}},push:w,replace:j,go(I){return d.go(I)}};return N}var Th;(function(e){e.data="data",e.deferred="deferred",e.redirect="redirect",e.error="error"})(Th||(Th={}));function kb(e,r,s){return s===void 0&&(s="/"),Cb(e,r,s)}function Cb(e,r,s,i){let o=typeof r=="string"?yi(r):r,c=hd(o.pathname||"/",s);if(c==null)return null;let d=hg(e);Eb(d);let p=null;for(let h=0;p==null&&h<d.length;++h){let g=Fb(c);p=Lb(d[h],g)}return p}function hg(e,r,s,i){r===void 0&&(r=[]),s===void 0&&(s=[]),i===void 0&&(i="");let o=(c,d,p)=>{let h={relativePath:p===void 0?c.path||"":p,caseSensitive:c.caseSensitive===!0,childrenIndex:d,route:c};h.relativePath.startsWith("/")&&(xt(h.relativePath.startsWith(i),'Absolute route path "'+h.relativePath+'" nested under path '+('"'+i+'" is not valid. An absolute child route path ')+"must start with the combined path of all its parent routes."),h.relativePath=h.relativePath.slice(i.length));let g=es([i,h.relativePath]),v=s.concat(h);c.children&&c.children.length>0&&(xt(c.index!==!0,"Index routes must not have child routes. Please remove "+('all child routes from route path "'+g+'".')),hg(c.children,r,v,g)),!(c.path==null&&!c.index)&&r.push({path:g,score:Mb(g,c.index),routesMeta:v})};return e.forEach((c,d)=>{var p;if(c.path===""||!((p=c.path)!=null&&p.includes("?")))o(c,d);else for(let h of mg(c.path))o(c,d,h)}),r}function mg(e){let r=e.split("/");if(r.length===0)return[];let[s,...i]=r,o=s.endsWith("?"),c=s.replace(/\?$/,"");if(i.length===0)return o?[c,""]:[c];let d=mg(i.join("/")),p=[];return p.push(...d.map(h=>h===""?c:[c,h].join("/"))),o&&p.push(...d),p.map(h=>e.startsWith("/")&&h===""?"/":h)}function Eb(e){e.sort((r,s)=>r.score!==s.score?s.score-r.score:Ob(r.routesMeta.map(i=>i.childrenIndex),s.routesMeta.map(i=>i.childrenIndex)))}const Tb=/^:[\w-]+$/,Pb=3,Rb=2,Ab=1,Nb=10,Ib=-2,Ph=e=>e==="*";function Mb(e,r){let s=e.split("/"),i=s.length;return s.some(Ph)&&(i+=Ib),r&&(i+=Rb),s.filter(o=>!Ph(o)).reduce((o,c)=>o+(Tb.test(c)?Pb:c===""?Ab:Nb),i)}function Ob(e,r){return e.length===r.length&&e.slice(0,-1).every((i,o)=>i===r[o])?e[e.length-1]-r[r.length-1]:0}function Lb(e,r,s){let{routesMeta:i}=e,o={},c="/",d=[];for(let p=0;p<i.length;++p){let h=i[p],g=p===i.length-1,v=c==="/"?r:r.slice(c.length)||"/",b=jb({path:h.relativePath,caseSensitive:h.caseSensitive,end:g},v),w=h.route;if(!b)return null;Object.assign(o,b.params),d.push({params:o,pathname:es([c,b.pathname]),pathnameBase:Bb(es([c,b.pathnameBase])),route:w}),b.pathnameBase!=="/"&&(c=es([c,b.pathnameBase]))}return d}function jb(e,r){typeof e=="string"&&(e={path:e,caseSensitive:!1,end:!0});let[s,i]=Db(e.path,e.caseSensitive,e.end),o=r.match(s);if(!o)return null;let c=o[0],d=c.replace(/(.)\/+$/,"$1"),p=o.slice(1);return{params:i.reduce((g,v,b)=>{let{paramName:w,isOptional:j}=v;if(w==="*"){let N=p[b]||"";d=c.slice(0,c.length-N.length).replace(/(.)\/+$/,"$1")}const L=p[b];return j&&!L?g[w]=void 0:g[w]=(L||"").replace(/%2F/g,"/"),g},{}),pathname:c,pathnameBase:d,pattern:e}}function Db(e,r,s){r===void 0&&(r=!1),s===void 0&&(s=!0),pg(e==="*"||!e.endsWith("*")||e.endsWith("/*"),'Route path "'+e+'" will be treated as if it were '+('"'+e.replace(/\*$/,"/*")+'" because the `*` character must ')+"always follow a `/` in the pattern. To get rid of this warning, "+('please change the route path to "'+e.replace(/\*$/,"/*")+'".'));let i=[],o="^"+e.replace(/\/*\*?$/,"").replace(/^\/*/,"/").replace(/[\\.*+^${}|()[\]]/g,"\\$&").replace(/\/:([\w-]+)(\?)?/g,(d,p,h)=>(i.push({paramName:p,isOptional:h!=null}),h?"/?([^\\/]+)?":"/([^\\/]+)"));return e.endsWith("*")?(i.push({paramName:"*"}),o+=e==="*"||e==="/*"?"(.*)$":"(?:\\/(.+)|\\/*)$"):s?o+="\\/*$":e!==""&&e!=="/"&&(o+="(?:(?=\\/|$))"),[new RegExp(o,r?void 0:"i"),i]}function Fb(e){try{return e.split("/").map(r=>decodeURIComponent(r).replace(/\//g,"%2F")).join("/")}catch(r){return pg(!1,'The URL path "'+e+'" could not be decoded because it is is a malformed URL segment. This is probably due to a bad percent '+("encoding ("+r+").")),e}}function hd(e,r){if(r==="/")return e;if(!e.toLowerCase().startsWith(r.toLowerCase()))return null;let s=r.endsWith("/")?r.length-1:r.length,i=e.charAt(s);return i&&i!=="/"?null:e.slice(s)||"/"}function Vb(e,r){r===void 0&&(r="/");let{pathname:s,search:i="",hash:o=""}=typeof e=="string"?yi(e):e;return{pathname:s?s.startsWith("/")?s:Ub(s,r):r,search:zb(i),hash:Zb(o)}}function Ub(e,r){let s=r.replace(/\/+$/,"").split("/");return e.split("/").forEach(o=>{o===".."?s.length>1&&s.pop():o!=="."&&s.push(o)}),s.length>1?s.join("/"):"/"}function uu(e,r,s,i){return"Cannot include a '"+e+"' character in a manually specified "+("`to."+r+"` field ["+JSON.stringify(i)+"].  Please separate it out to the ")+("`to."+s+"` field. Alternatively you may provide the full path as ")+'a string in <Link to="..."> and the router will parse it for you.'}function $b(e){return e.filter((r,s)=>s===0||r.route.path&&r.route.path.length>0)}function gg(e,r){let s=$b(e);return r?s.map((i,o)=>o===s.length-1?i.pathname:i.pathnameBase):s.map(i=>i.pathnameBase)}function vg(e,r,s,i){i===void 0&&(i=!1);let o;typeof e=="string"?o=yi(e):(o=Sa({},e),xt(!o.pathname||!o.pathname.includes("?"),uu("?","pathname","search",o)),xt(!o.pathname||!o.pathname.includes("#"),uu("#","pathname","hash",o)),xt(!o.search||!o.search.includes("#"),uu("#","search","hash",o)));let c=e===""||o.pathname==="",d=c?"/":o.pathname,p;if(d==null)p=s;else{let b=r.length-1;if(!i&&d.startsWith("..")){let w=d.split("/");for(;w[0]==="..";)w.shift(),b-=1;o.pathname=w.join("/")}p=b>=0?r[b]:"/"}let h=Vb(o,p),g=d&&d!=="/"&&d.endsWith("/"),v=(c||d===".")&&s.endsWith("/");return!h.pathname.endsWith("/")&&(g||v)&&(h.pathname+="/"),h}const es=e=>e.join("/").replace(/\/\/+/g,"/"),Bb=e=>e.replace(/\/+$/,"").replace(/^\/*/,"/"),zb=e=>!e||e==="?"?"":e.startsWith("?")?e:"?"+e,Zb=e=>!e||e==="#"?"":e.startsWith("#")?e:"#"+e;function Hb(e){return e!=null&&typeof e.status=="number"&&typeof e.statusText=="string"&&typeof e.internal=="boolean"&&"data"in e}const yg=["post","put","patch","delete"];new Set(yg);const Wb=["get",...yg];new Set(Wb);/**
 * React Router v6.30.1
 *
 * Copyright (c) Remix Software Inc.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE.md file in the root directory of this source tree.
 *
 * @license MIT
 */function ka(){return ka=Object.assign?Object.assign.bind():function(e){for(var r=1;r<arguments.length;r++){var s=arguments[r];for(var i in s)Object.prototype.hasOwnProperty.call(s,i)&&(e[i]=s[i])}return e},ka.apply(this,arguments)}const md=O.createContext(null),Gb=O.createContext(null),Ms=O.createContext(null),Sl=O.createContext(null),Os=O.createContext({outlet:null,matches:[],isDataRoute:!1}),bg=O.createContext(null);function Kb(e,r){let{relative:s}=r===void 0?{}:r;Ma()||xt(!1);let{basename:i,navigator:o}=O.useContext(Ms),{hash:c,pathname:d,search:p}=wg(e,{relative:s}),h=d;return i!=="/"&&(h=d==="/"?i:es([i,d])),o.createHref({pathname:h,search:p,hash:c})}function Ma(){return O.useContext(Sl)!=null}function Oa(){return Ma()||xt(!1),O.useContext(Sl).location}function xg(e){O.useContext(Ms).static||O.useLayoutEffect(e)}function qb(){let{isDataRoute:e}=O.useContext(Os);return e?lx():Xb()}function Xb(){Ma()||xt(!1);let e=O.useContext(md),{basename:r,future:s,navigator:i}=O.useContext(Ms),{matches:o}=O.useContext(Os),{pathname:c}=Oa(),d=JSON.stringify(gg(o,s.v7_relativeSplatPath)),p=O.useRef(!1);return xg(()=>{p.current=!0}),O.useCallback(function(g,v){if(v===void 0&&(v={}),!p.current)return;if(typeof g=="number"){i.go(g);return}let b=vg(g,JSON.parse(d),c,v.relative==="path");e==null&&r!=="/"&&(b.pathname=b.pathname==="/"?r:es([r,b.pathname])),(v.replace?i.replace:i.push)(b,v.state,v)},[r,i,d,c,e])}function wg(e,r){let{relative:s}=r===void 0?{}:r,{future:i}=O.useContext(Ms),{matches:o}=O.useContext(Os),{pathname:c}=Oa(),d=JSON.stringify(gg(o,i.v7_relativeSplatPath));return O.useMemo(()=>vg(e,JSON.parse(d),c,s==="path"),[e,d,c,s])}function Yb(e,r){return Qb(e,r)}function Qb(e,r,s,i){Ma()||xt(!1);let{navigator:o}=O.useContext(Ms),{matches:c}=O.useContext(Os),d=c[c.length-1],p=d?d.params:{};d&&d.pathname;let h=d?d.pathnameBase:"/";d&&d.route;let g=Oa(),v;if(r){var b;let I=typeof r=="string"?yi(r):r;h==="/"||(b=I.pathname)!=null&&b.startsWith(h)||xt(!1),v=I}else v=g;let w=v.pathname||"/",j=w;if(h!=="/"){let I=h.replace(/^\//,"").split("/");j="/"+w.replace(/^\//,"").split("/").slice(I.length).join("/")}let L=kb(e,{pathname:j}),N=nx(L&&L.map(I=>Object.assign({},I,{params:Object.assign({},p,I.params),pathname:es([h,o.encodeLocation?o.encodeLocation(I.pathname).pathname:I.pathname]),pathnameBase:I.pathnameBase==="/"?h:es([h,o.encodeLocation?o.encodeLocation(I.pathnameBase).pathname:I.pathnameBase])})),c,s,i);return r&&N?O.createElement(Sl.Provider,{value:{location:ka({pathname:"/",search:"",hash:"",state:null,key:"default"},v),navigationType:Qn.Pop}},N):N}function Jb(){let e=ox(),r=Hb(e)?e.status+" "+e.statusText:e instanceof Error?e.message:JSON.stringify(e),s=e instanceof Error?e.stack:null,o={padding:"0.5rem",backgroundColor:"rgba(200,200,200, 0.5)"};return O.createElement(O.Fragment,null,O.createElement("h2",null,"Unexpected Application Error!"),O.createElement("h3",{style:{fontStyle:"italic"}},r),s?O.createElement("pre",{style:o},s):null,null)}const ex=O.createElement(Jb,null);class tx extends O.Component{constructor(r){super(r),this.state={location:r.location,revalidation:r.revalidation,error:r.error}}static getDerivedStateFromError(r){return{error:r}}static getDerivedStateFromProps(r,s){return s.location!==r.location||s.revalidation!=="idle"&&r.revalidation==="idle"?{error:r.error,location:r.location,revalidation:r.revalidation}:{error:r.error!==void 0?r.error:s.error,location:s.location,revalidation:r.revalidation||s.revalidation}}componentDidCatch(r,s){console.error("React Router caught the following error during render",r,s)}render(){return this.state.error!==void 0?O.createElement(Os.Provider,{value:this.props.routeContext},O.createElement(bg.Provider,{value:this.state.error,children:this.props.component})):this.props.children}}function rx(e){let{routeContext:r,match:s,children:i}=e,o=O.useContext(md);return o&&o.static&&o.staticContext&&(s.route.errorElement||s.route.ErrorBoundary)&&(o.staticContext._deepestRenderedBoundaryId=s.route.id),O.createElement(Os.Provider,{value:r},i)}function nx(e,r,s,i){var o;if(r===void 0&&(r=[]),s===void 0&&(s=null),i===void 0&&(i=null),e==null){var c;if(!s)return null;if(s.errors)e=s.matches;else if((c=i)!=null&&c.v7_partialHydration&&r.length===0&&!s.initialized&&s.matches.length>0)e=s.matches;else return null}let d=e,p=(o=s)==null?void 0:o.errors;if(p!=null){let v=d.findIndex(b=>b.route.id&&p?.[b.route.id]!==void 0);v>=0||xt(!1),d=d.slice(0,Math.min(d.length,v+1))}let h=!1,g=-1;if(s&&i&&i.v7_partialHydration)for(let v=0;v<d.length;v++){let b=d[v];if((b.route.HydrateFallback||b.route.hydrateFallbackElement)&&(g=v),b.route.id){let{loaderData:w,errors:j}=s,L=b.route.loader&&w[b.route.id]===void 0&&(!j||j[b.route.id]===void 0);if(b.route.lazy||L){h=!0,g>=0?d=d.slice(0,g+1):d=[d[0]];break}}}return d.reduceRight((v,b,w)=>{let j,L=!1,N=null,I=null;s&&(j=p&&b.route.id?p[b.route.id]:void 0,N=b.route.errorElement||ex,h&&(g<0&&w===0?(cx("route-fallback"),L=!0,I=null):g===w&&(L=!0,I=b.route.hydrateFallbackElement||null)));let Z=r.concat(d.slice(0,w+1)),V=()=>{let F;return j?F=N:L?F=I:b.route.Component?F=O.createElement(b.route.Component,null):b.route.element?F=b.route.element:F=v,O.createElement(rx,{match:b,routeContext:{outlet:v,matches:Z,isDataRoute:s!=null},children:F})};return s&&(b.route.ErrorBoundary||b.route.errorElement||w===0)?O.createElement(tx,{location:s.location,revalidation:s.revalidation,component:N,error:j,children:V(),routeContext:{outlet:null,matches:Z,isDataRoute:!0}}):V()},null)}var _g=function(e){return e.UseBlocker="useBlocker",e.UseRevalidator="useRevalidator",e.UseNavigateStable="useNavigate",e}(_g||{}),Sg=function(e){return e.UseBlocker="useBlocker",e.UseLoaderData="useLoaderData",e.UseActionData="useActionData",e.UseRouteError="useRouteError",e.UseNavigation="useNavigation",e.UseRouteLoaderData="useRouteLoaderData",e.UseMatches="useMatches",e.UseRevalidator="useRevalidator",e.UseNavigateStable="useNavigate",e.UseRouteId="useRouteId",e}(Sg||{});function sx(e){let r=O.useContext(md);return r||xt(!1),r}function ix(e){let r=O.useContext(Gb);return r||xt(!1),r}function ax(e){let r=O.useContext(Os);return r||xt(!1),r}function kg(e){let r=ax(),s=r.matches[r.matches.length-1];return s.route.id||xt(!1),s.route.id}function ox(){var e;let r=O.useContext(bg),s=ix(),i=kg();return r!==void 0?r:(e=s.errors)==null?void 0:e[i]}function lx(){let{router:e}=sx(_g.UseNavigateStable),r=kg(Sg.UseNavigateStable),s=O.useRef(!1);return xg(()=>{s.current=!0}),O.useCallback(function(o,c){c===void 0&&(c={}),s.current&&(typeof o=="number"?e.navigate(o):e.navigate(o,ka({fromRouteId:r},c)))},[e,r])}const Rh={};function cx(e,r,s){Rh[e]||(Rh[e]=!0)}function ux(e,r){e?.v7_startTransition,e?.v7_relativeSplatPath}function oi(e){xt(!1)}function dx(e){let{basename:r="/",children:s=null,location:i,navigationType:o=Qn.Pop,navigator:c,static:d=!1,future:p}=e;Ma()&&xt(!1);let h=r.replace(/^\/*/,"/"),g=O.useMemo(()=>({basename:h,navigator:c,static:d,future:ka({v7_relativeSplatPath:!1},p)}),[h,p,c,d]);typeof i=="string"&&(i=yi(i));let{pathname:v="/",search:b="",hash:w="",state:j=null,key:L="default"}=i,N=O.useMemo(()=>{let I=hd(v,h);return I==null?null:{location:{pathname:I,search:b,hash:w,state:j,key:L},navigationType:o}},[h,v,b,w,j,L,o]);return N==null?null:O.createElement(Ms.Provider,{value:g},O.createElement(Sl.Provider,{children:s,value:N}))}function fx(e){let{children:r,location:s}=e;return Yb(Au(r),s)}new Promise(()=>{});function Au(e,r){r===void 0&&(r=[]);let s=[];return O.Children.forEach(e,(i,o)=>{if(!O.isValidElement(i))return;let c=[...r,o];if(i.type===O.Fragment){s.push.apply(s,Au(i.props.children,c));return}i.type!==oi&&xt(!1),!i.props.index||!i.props.children||xt(!1);let d={id:i.props.id||c.join("-"),caseSensitive:i.props.caseSensitive,element:i.props.element,Component:i.props.Component,index:i.props.index,path:i.props.path,loader:i.props.loader,action:i.props.action,errorElement:i.props.errorElement,ErrorBoundary:i.props.ErrorBoundary,hasErrorBoundary:i.props.ErrorBoundary!=null||i.props.errorElement!=null,shouldRevalidate:i.props.shouldRevalidate,handle:i.props.handle,lazy:i.props.lazy};i.props.children&&(d.children=Au(i.props.children,c)),s.push(d)}),s}/**
 * React Router DOM v6.30.1
 *
 * Copyright (c) Remix Software Inc.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE.md file in the root directory of this source tree.
 *
 * @license MIT
 */function Nu(){return Nu=Object.assign?Object.assign.bind():function(e){for(var r=1;r<arguments.length;r++){var s=arguments[r];for(var i in s)Object.prototype.hasOwnProperty.call(s,i)&&(e[i]=s[i])}return e},Nu.apply(this,arguments)}function px(e,r){if(e==null)return{};var s={},i=Object.keys(e),o,c;for(c=0;c<i.length;c++)o=i[c],!(r.indexOf(o)>=0)&&(s[o]=e[o]);return s}function hx(e){return!!(e.metaKey||e.altKey||e.ctrlKey||e.shiftKey)}function mx(e,r){return e.button===0&&(!r||r==="_self")&&!hx(e)}const gx=["onClick","relative","reloadDocument","replace","state","target","to","preventScrollReset","viewTransition"],vx="6";try{window.__reactRouterVersion=vx}catch{}const yx="startTransition",Ah=mb[yx];function bx(e){let{basename:r,children:s,future:i,window:o}=e,c=O.useRef();c.current==null&&(c.current=wb({window:o,v5Compat:!0}));let d=c.current,[p,h]=O.useState({action:d.action,location:d.location}),{v7_startTransition:g}=i||{},v=O.useCallback(b=>{g&&Ah?Ah(()=>h(b)):h(b)},[h,g]);return O.useLayoutEffect(()=>d.listen(v),[d,v]),O.useEffect(()=>ux(i),[i]),O.createElement(dx,{basename:r,children:s,location:p.location,navigationType:p.action,navigator:d,future:i})}const xx=typeof window<"u"&&typeof window.document<"u"&&typeof window.document.createElement<"u",wx=/^(?:[a-z][a-z0-9+.-]*:|\/\/)/i,ya=O.forwardRef(function(r,s){let{onClick:i,relative:o,reloadDocument:c,replace:d,state:p,target:h,to:g,preventScrollReset:v,viewTransition:b}=r,w=px(r,gx),{basename:j}=O.useContext(Ms),L,N=!1;if(typeof g=="string"&&wx.test(g)&&(L=g,xx))try{let F=new URL(window.location.href),z=g.startsWith("//")?new URL(F.protocol+g):new URL(g),T=hd(z.pathname,j);z.origin===F.origin&&T!=null?g=T+z.search+z.hash:N=!0}catch{}let I=Kb(g,{relative:o}),Z=_x(g,{replace:d,state:p,target:h,preventScrollReset:v,relative:o,viewTransition:b});function V(F){i&&i(F),F.defaultPrevented||Z(F)}return O.createElement("a",Nu({},w,{href:L||I,onClick:N||c?i:V,ref:s,target:h}))});var Nh;(function(e){e.UseScrollRestoration="useScrollRestoration",e.UseSubmit="useSubmit",e.UseSubmitFetcher="useSubmitFetcher",e.UseFetcher="useFetcher",e.useViewTransitionState="useViewTransitionState"})(Nh||(Nh={}));var Ih;(function(e){e.UseFetcher="useFetcher",e.UseFetchers="useFetchers",e.UseScrollRestoration="useScrollRestoration"})(Ih||(Ih={}));function _x(e,r){let{target:s,replace:i,state:o,preventScrollReset:c,relative:d,viewTransition:p}=r===void 0?{}:r,h=qb(),g=Oa(),v=wg(e,{relative:d});return O.useCallback(b=>{if(mx(b,s)){b.preventDefault();let w=i!==void 0?i:dl(g)===dl(v);h(e,{replace:w,state:o,preventScrollReset:c,relative:d,viewTransition:p})}},[g,h,v,i,o,s,e,c,d,p])}const Sx=()=>{const[e,r]=O.useState(()=>localStorage.getItem("locale")||navigator.language||"zh-TW"),s=[{code:"zh-TW",label:"繁體中文",flag:"🇹🇼"},{code:"en-US",label:"English",flag:"🇺🇸"},{code:"ja-JP",label:"日本語",flag:"🇯🇵"}],i=o=>{const c=o.target.value;r(c),localStorage.setItem("locale",c),window.location.reload()};return y.jsx("select",{className:"language-switcher",value:e,onChange:i,"aria-label":"切換語言",style:{marginLeft:16},children:s.map(o=>y.jsxs("option",{value:o.code,children:[o.flag," ",o.label]},o.code))})},kx=()=>{const[e,r]=O.useState(!1),s=Oa(),i=[{path:"/",label:"首頁"},{path:"/about",label:"關於我"},{path:"/projects",label:"專案作品"},{path:"/contact",label:"聯絡我"}],o=()=>{r(!e)};return y.jsx("header",{className:"header",children:y.jsx("div",{className:"container",children:y.jsxs("div",{className:"header-content",children:[y.jsx(ya,{to:"/",className:"logo",children:y.jsx("h1",{children:"Chang Jung Lu"})}),y.jsx("nav",{className:`nav ${e?"nav-open":""}`,"aria-label":"主選單",children:y.jsx("ul",{className:"nav-list",children:i.map(c=>y.jsx("li",{className:"nav-item",children:y.jsx(ya,{to:c.path,className:`nav-link ${s.pathname===c.path?"active":""}`,onClick:()=>r(!1),children:c.label})},c.path))})}),y.jsx(Sx,{}),y.jsx("button",{className:"mobile-menu-btn",onClick:o,"aria-label":"切換選單",children:y.jsx("span",{className:`hamburger ${e?"open":""}`})})]})})})},Cx=()=>{const e=new Date().getFullYear();return y.jsx("footer",{className:"footer",children:y.jsxs("div",{className:"container",children:[y.jsxs("div",{className:"footer-content",children:[y.jsxs("div",{className:"footer-section",children:[y.jsx("h3",{children:"Chang Jung Lu"}),y.jsx("p",{children:"專業的軟體開發工程師，致力於創造優秀的數位體驗。"})]}),y.jsxs("div",{className:"footer-section",children:[y.jsx("h4",{children:"聯絡資訊"}),y.jsxs("ul",{className:"footer-links",children:[y.jsx("li",{children:y.jsx("a",{href:"mailto:chang.jung.lu@example.com",children:"chang.jung.lu@example.com"})}),y.jsx("li",{children:y.jsx("a",{href:"https://linkedin.com/in/yourprofile",target:"_blank",rel:"noopener noreferrer",children:"LinkedIn"})}),y.jsx("li",{children:y.jsx("a",{href:"https://github.com/yourusername",target:"_blank",rel:"noopener noreferrer",children:"GitHub"})})]})]}),y.jsxs("div",{className:"footer-section",children:[y.jsx("h4",{children:"快速連結"}),y.jsxs("ul",{className:"footer-links",children:[y.jsx("li",{children:y.jsx("a",{href:"/about",children:"關於我"})}),y.jsx("li",{children:y.jsx("a",{href:"/projects",children:"專案作品"})}),y.jsx("li",{children:y.jsx("a",{href:"/contact",children:"聯絡我"})})]})]})]}),y.jsx("div",{className:"footer-bottom",children:y.jsxs("p",{children:["© ",e," Chang Jung Lu. 保留所有權利。"]})})]})})};var Iu=function(e,r){return Iu=Object.setPrototypeOf||{__proto__:[]}instanceof Array&&function(s,i){s.__proto__=i}||function(s,i){for(var o in i)Object.prototype.hasOwnProperty.call(i,o)&&(s[o]=i[o])},Iu(e,r)};function _r(e,r){if(typeof r!="function"&&r!==null)throw new TypeError("Class extends value "+String(r)+" is not a constructor or null");Iu(e,r);function s(){this.constructor=e}e.prototype=r===null?Object.create(r):(s.prototype=r.prototype,new s)}var pe=function(){return pe=Object.assign||function(r){for(var s,i=1,o=arguments.length;i<o;i++){s=arguments[i];for(var c in s)Object.prototype.hasOwnProperty.call(s,c)&&(r[c]=s[c])}return r},pe.apply(this,arguments)};function fi(e,r){var s={};for(var i in e)Object.prototype.hasOwnProperty.call(e,i)&&r.indexOf(i)<0&&(s[i]=e[i]);if(e!=null&&typeof Object.getOwnPropertySymbols=="function")for(var o=0,i=Object.getOwnPropertySymbols(e);o<i.length;o++)r.indexOf(i[o])<0&&Object.prototype.propertyIsEnumerable.call(e,i[o])&&(s[i[o]]=e[i[o]]);return s}function Xr(e,r,s){if(s||arguments.length===2)for(var i=0,o=r.length,c;i<o;i++)(c||!(i in r))&&(c||(c=Array.prototype.slice.call(r,0,i)),c[i]=r[i]);return e.concat(c||Array.prototype.slice.call(r))}function Gr(e,r){var s=r&&r.cache?r.cache:Ix,i=r&&r.serializer?r.serializer:Ax,o=r&&r.strategy?r.strategy:Px;return o(e,{cache:s,serializer:i})}function Ex(e){return e==null||typeof e=="number"||typeof e=="boolean"}function Tx(e,r,s,i){var o=Ex(i)?i:s(i),c=r.get(o);return typeof c>"u"&&(c=e.call(this,i),r.set(o,c)),c}function Cg(e,r,s){var i=Array.prototype.slice.call(arguments,3),o=s(i),c=r.get(o);return typeof c>"u"&&(c=e.apply(this,i),r.set(o,c)),c}function Eg(e,r,s,i,o){return s.bind(r,e,i,o)}function Px(e,r){var s=e.length===1?Tx:Cg;return Eg(e,this,s,r.cache.create(),r.serializer)}function Rx(e,r){return Eg(e,this,Cg,r.cache.create(),r.serializer)}var Ax=function(){return JSON.stringify(arguments)},Nx=function(){function e(){this.cache=Object.create(null)}return e.prototype.get=function(r){return this.cache[r]},e.prototype.set=function(r,s){this.cache[r]=s},e}(),Ix={create:function(){return new Nx}},Kr={variadic:Rx},Be;(function(e){e[e.EXPECT_ARGUMENT_CLOSING_BRACE=1]="EXPECT_ARGUMENT_CLOSING_BRACE",e[e.EMPTY_ARGUMENT=2]="EMPTY_ARGUMENT",e[e.MALFORMED_ARGUMENT=3]="MALFORMED_ARGUMENT",e[e.EXPECT_ARGUMENT_TYPE=4]="EXPECT_ARGUMENT_TYPE",e[e.INVALID_ARGUMENT_TYPE=5]="INVALID_ARGUMENT_TYPE",e[e.EXPECT_ARGUMENT_STYLE=6]="EXPECT_ARGUMENT_STYLE",e[e.INVALID_NUMBER_SKELETON=7]="INVALID_NUMBER_SKELETON",e[e.INVALID_DATE_TIME_SKELETON=8]="INVALID_DATE_TIME_SKELETON",e[e.EXPECT_NUMBER_SKELETON=9]="EXPECT_NUMBER_SKELETON",e[e.EXPECT_DATE_TIME_SKELETON=10]="EXPECT_DATE_TIME_SKELETON",e[e.UNCLOSED_QUOTE_IN_ARGUMENT_STYLE=11]="UNCLOSED_QUOTE_IN_ARGUMENT_STYLE",e[e.EXPECT_SELECT_ARGUMENT_OPTIONS=12]="EXPECT_SELECT_ARGUMENT_OPTIONS",e[e.EXPECT_PLURAL_ARGUMENT_OFFSET_VALUE=13]="EXPECT_PLURAL_ARGUMENT_OFFSET_VALUE",e[e.INVALID_PLURAL_ARGUMENT_OFFSET_VALUE=14]="INVALID_PLURAL_ARGUMENT_OFFSET_VALUE",e[e.EXPECT_SELECT_ARGUMENT_SELECTOR=15]="EXPECT_SELECT_ARGUMENT_SELECTOR",e[e.EXPECT_PLURAL_ARGUMENT_SELECTOR=16]="EXPECT_PLURAL_ARGUMENT_SELECTOR",e[e.EXPECT_SELECT_ARGUMENT_SELECTOR_FRAGMENT=17]="EXPECT_SELECT_ARGUMENT_SELECTOR_FRAGMENT",e[e.EXPECT_PLURAL_ARGUMENT_SELECTOR_FRAGMENT=18]="EXPECT_PLURAL_ARGUMENT_SELECTOR_FRAGMENT",e[e.INVALID_PLURAL_ARGUMENT_SELECTOR=19]="INVALID_PLURAL_ARGUMENT_SELECTOR",e[e.DUPLICATE_PLURAL_ARGUMENT_SELECTOR=20]="DUPLICATE_PLURAL_ARGUMENT_SELECTOR",e[e.DUPLICATE_SELECT_ARGUMENT_SELECTOR=21]="DUPLICATE_SELECT_ARGUMENT_SELECTOR",e[e.MISSING_OTHER_CLAUSE=22]="MISSING_OTHER_CLAUSE",e[e.INVALID_TAG=23]="INVALID_TAG",e[e.INVALID_TAG_NAME=25]="INVALID_TAG_NAME",e[e.UNMATCHED_CLOSING_TAG=26]="UNMATCHED_CLOSING_TAG",e[e.UNCLOSED_TAG=27]="UNCLOSED_TAG"})(Be||(Be={}));var st;(function(e){e[e.literal=0]="literal",e[e.argument=1]="argument",e[e.number=2]="number",e[e.date=3]="date",e[e.time=4]="time",e[e.select=5]="select",e[e.plural=6]="plural",e[e.pound=7]="pound",e[e.tag=8]="tag"})(st||(st={}));var pi;(function(e){e[e.number=0]="number",e[e.dateTime=1]="dateTime"})(pi||(pi={}));function Mh(e){return e.type===st.literal}function Mx(e){return e.type===st.argument}function Tg(e){return e.type===st.number}function Pg(e){return e.type===st.date}function Rg(e){return e.type===st.time}function Ag(e){return e.type===st.select}function Ng(e){return e.type===st.plural}function Ox(e){return e.type===st.pound}function Ig(e){return e.type===st.tag}function Mg(e){return!!(e&&typeof e=="object"&&e.type===pi.number)}function Mu(e){return!!(e&&typeof e=="object"&&e.type===pi.dateTime)}var Og=/[ \xA0\u1680\u2000-\u200A\u202F\u205F\u3000]/,Lx=/(?:[Eec]{1,6}|G{1,5}|[Qq]{1,5}|(?:[yYur]+|U{1,5})|[ML]{1,5}|d{1,2}|D{1,3}|F{1}|[abB]{1,5}|[hkHK]{1,2}|w{1,2}|W{1}|m{1,2}|s{1,2}|[zZOvVxX]{1,4})(?=([^']*'[^']*')*[^']*$)/g;function jx(e){var r={};return e.replace(Lx,function(s){var i=s.length;switch(s[0]){case"G":r.era=i===4?"long":i===5?"narrow":"short";break;case"y":r.year=i===2?"2-digit":"numeric";break;case"Y":case"u":case"U":case"r":throw new RangeError("`Y/u/U/r` (year) patterns are not supported, use `y` instead");case"q":case"Q":throw new RangeError("`q/Q` (quarter) patterns are not supported");case"M":case"L":r.month=["numeric","2-digit","short","long","narrow"][i-1];break;case"w":case"W":throw new RangeError("`w/W` (week) patterns are not supported");case"d":r.day=["numeric","2-digit"][i-1];break;case"D":case"F":case"g":throw new RangeError("`D/F/g` (day) patterns are not supported, use `d` instead");case"E":r.weekday=i===4?"long":i===5?"narrow":"short";break;case"e":if(i<4)throw new RangeError("`e..eee` (weekday) patterns are not supported");r.weekday=["short","long","narrow","short"][i-4];break;case"c":if(i<4)throw new RangeError("`c..ccc` (weekday) patterns are not supported");r.weekday=["short","long","narrow","short"][i-4];break;case"a":r.hour12=!0;break;case"b":case"B":throw new RangeError("`b/B` (period) patterns are not supported, use `a` instead");case"h":r.hourCycle="h12",r.hour=["numeric","2-digit"][i-1];break;case"H":r.hourCycle="h23",r.hour=["numeric","2-digit"][i-1];break;case"K":r.hourCycle="h11",r.hour=["numeric","2-digit"][i-1];break;case"k":r.hourCycle="h24",r.hour=["numeric","2-digit"][i-1];break;case"j":case"J":case"C":throw new RangeError("`j/J/C` (hour) patterns are not supported, use `h/H/K/k` instead");case"m":r.minute=["numeric","2-digit"][i-1];break;case"s":r.second=["numeric","2-digit"][i-1];break;case"S":case"A":throw new RangeError("`S/A` (second) patterns are not supported, use `s` instead");case"z":r.timeZoneName=i<4?"short":"long";break;case"Z":case"O":case"v":case"V":case"X":case"x":throw new RangeError("`Z/O/v/V/X/x` (timeZone) patterns are not supported, use `z` instead")}return""}),r}var Dx=/[\t-\r \x85\u200E\u200F\u2028\u2029]/i;function Fx(e){if(e.length===0)throw new Error("Number skeleton cannot be empty");for(var r=e.split(Dx).filter(function(w){return w.length>0}),s=[],i=0,o=r;i<o.length;i++){var c=o[i],d=c.split("/");if(d.length===0)throw new Error("Invalid number skeleton");for(var p=d[0],h=d.slice(1),g=0,v=h;g<v.length;g++){var b=v[g];if(b.length===0)throw new Error("Invalid number skeleton")}s.push({stem:p,options:h})}return s}function Vx(e){return e.replace(/^(.*?)-/,"")}var Oh=/^\.(?:(0+)(\*)?|(#+)|(0+)(#+))$/g,Lg=/^(@+)?(\+|#+)?[rs]?$/g,Ux=/(\*)(0+)|(#+)(0+)|(0+)/g,jg=/^(0+)$/;function Lh(e){var r={};return e[e.length-1]==="r"?r.roundingPriority="morePrecision":e[e.length-1]==="s"&&(r.roundingPriority="lessPrecision"),e.replace(Lg,function(s,i,o){return typeof o!="string"?(r.minimumSignificantDigits=i.length,r.maximumSignificantDigits=i.length):o==="+"?r.minimumSignificantDigits=i.length:i[0]==="#"?r.maximumSignificantDigits=i.length:(r.minimumSignificantDigits=i.length,r.maximumSignificantDigits=i.length+(typeof o=="string"?o.length:0)),""}),r}function Dg(e){switch(e){case"sign-auto":return{signDisplay:"auto"};case"sign-accounting":case"()":return{currencySign:"accounting"};case"sign-always":case"+!":return{signDisplay:"always"};case"sign-accounting-always":case"()!":return{signDisplay:"always",currencySign:"accounting"};case"sign-except-zero":case"+?":return{signDisplay:"exceptZero"};case"sign-accounting-except-zero":case"()?":return{signDisplay:"exceptZero",currencySign:"accounting"};case"sign-never":case"+_":return{signDisplay:"never"}}}function $x(e){var r;if(e[0]==="E"&&e[1]==="E"?(r={notation:"engineering"},e=e.slice(2)):e[0]==="E"&&(r={notation:"scientific"},e=e.slice(1)),r){var s=e.slice(0,2);if(s==="+!"?(r.signDisplay="always",e=e.slice(2)):s==="+?"&&(r.signDisplay="exceptZero",e=e.slice(2)),!jg.test(e))throw new Error("Malformed concise eng/scientific notation");r.minimumIntegerDigits=e.length}return r}function jh(e){var r={},s=Dg(e);return s||r}function Bx(e){for(var r={},s=0,i=e;s<i.length;s++){var o=i[s];switch(o.stem){case"percent":case"%":r.style="percent";continue;case"%x100":r.style="percent",r.scale=100;continue;case"currency":r.style="currency",r.currency=o.options[0];continue;case"group-off":case",_":r.useGrouping=!1;continue;case"precision-integer":case".":r.maximumFractionDigits=0;continue;case"measure-unit":case"unit":r.style="unit",r.unit=Vx(o.options[0]);continue;case"compact-short":case"K":r.notation="compact",r.compactDisplay="short";continue;case"compact-long":case"KK":r.notation="compact",r.compactDisplay="long";continue;case"scientific":r=pe(pe(pe({},r),{notation:"scientific"}),o.options.reduce(function(h,g){return pe(pe({},h),jh(g))},{}));continue;case"engineering":r=pe(pe(pe({},r),{notation:"engineering"}),o.options.reduce(function(h,g){return pe(pe({},h),jh(g))},{}));continue;case"notation-simple":r.notation="standard";continue;case"unit-width-narrow":r.currencyDisplay="narrowSymbol",r.unitDisplay="narrow";continue;case"unit-width-short":r.currencyDisplay="code",r.unitDisplay="short";continue;case"unit-width-full-name":r.currencyDisplay="name",r.unitDisplay="long";continue;case"unit-width-iso-code":r.currencyDisplay="symbol";continue;case"scale":r.scale=parseFloat(o.options[0]);continue;case"rounding-mode-floor":r.roundingMode="floor";continue;case"rounding-mode-ceiling":r.roundingMode="ceil";continue;case"rounding-mode-down":r.roundingMode="trunc";continue;case"rounding-mode-up":r.roundingMode="expand";continue;case"rounding-mode-half-even":r.roundingMode="halfEven";continue;case"rounding-mode-half-down":r.roundingMode="halfTrunc";continue;case"rounding-mode-half-up":r.roundingMode="halfExpand";continue;case"integer-width":if(o.options.length>1)throw new RangeError("integer-width stems only accept a single optional option");o.options[0].replace(Ux,function(h,g,v,b,w,j){if(g)r.minimumIntegerDigits=v.length;else{if(b&&w)throw new Error("We currently do not support maximum integer digits");if(j)throw new Error("We currently do not support exact integer digits")}return""});continue}if(jg.test(o.stem)){r.minimumIntegerDigits=o.stem.length;continue}if(Oh.test(o.stem)){if(o.options.length>1)throw new RangeError("Fraction-precision stems only accept a single optional option");o.stem.replace(Oh,function(h,g,v,b,w,j){return v==="*"?r.minimumFractionDigits=g.length:b&&b[0]==="#"?r.maximumFractionDigits=b.length:w&&j?(r.minimumFractionDigits=w.length,r.maximumFractionDigits=w.length+j.length):(r.minimumFractionDigits=g.length,r.maximumFractionDigits=g.length),""});var c=o.options[0];c==="w"?r=pe(pe({},r),{trailingZeroDisplay:"stripIfInteger"}):c&&(r=pe(pe({},r),Lh(c)));continue}if(Lg.test(o.stem)){r=pe(pe({},r),Lh(o.stem));continue}var d=Dg(o.stem);d&&(r=pe(pe({},r),d));var p=$x(o.stem);p&&(r=pe(pe({},r),p))}return r}var Qo={"001":["H","h"],419:["h","H","hB","hb"],AC:["H","h","hb","hB"],AD:["H","hB"],AE:["h","hB","hb","H"],AF:["H","hb","hB","h"],AG:["h","hb","H","hB"],AI:["H","h","hb","hB"],AL:["h","H","hB"],AM:["H","hB"],AO:["H","hB"],AR:["h","H","hB","hb"],AS:["h","H"],AT:["H","hB"],AU:["h","hb","H","hB"],AW:["H","hB"],AX:["H"],AZ:["H","hB","h"],BA:["H","hB","h"],BB:["h","hb","H","hB"],BD:["h","hB","H"],BE:["H","hB"],BF:["H","hB"],BG:["H","hB","h"],BH:["h","hB","hb","H"],BI:["H","h"],BJ:["H","hB"],BL:["H","hB"],BM:["h","hb","H","hB"],BN:["hb","hB","h","H"],BO:["h","H","hB","hb"],BQ:["H"],BR:["H","hB"],BS:["h","hb","H","hB"],BT:["h","H"],BW:["H","h","hb","hB"],BY:["H","h"],BZ:["H","h","hb","hB"],CA:["h","hb","H","hB"],CC:["H","h","hb","hB"],CD:["hB","H"],CF:["H","h","hB"],CG:["H","hB"],CH:["H","hB","h"],CI:["H","hB"],CK:["H","h","hb","hB"],CL:["h","H","hB","hb"],CM:["H","h","hB"],CN:["H","hB","hb","h"],CO:["h","H","hB","hb"],CP:["H"],CR:["h","H","hB","hb"],CU:["h","H","hB","hb"],CV:["H","hB"],CW:["H","hB"],CX:["H","h","hb","hB"],CY:["h","H","hb","hB"],CZ:["H"],DE:["H","hB"],DG:["H","h","hb","hB"],DJ:["h","H"],DK:["H"],DM:["h","hb","H","hB"],DO:["h","H","hB","hb"],DZ:["h","hB","hb","H"],EA:["H","h","hB","hb"],EC:["h","H","hB","hb"],EE:["H","hB"],EG:["h","hB","hb","H"],EH:["h","hB","hb","H"],ER:["h","H"],ES:["H","hB","h","hb"],ET:["hB","hb","h","H"],FI:["H"],FJ:["h","hb","H","hB"],FK:["H","h","hb","hB"],FM:["h","hb","H","hB"],FO:["H","h"],FR:["H","hB"],GA:["H","hB"],GB:["H","h","hb","hB"],GD:["h","hb","H","hB"],GE:["H","hB","h"],GF:["H","hB"],GG:["H","h","hb","hB"],GH:["h","H"],GI:["H","h","hb","hB"],GL:["H","h"],GM:["h","hb","H","hB"],GN:["H","hB"],GP:["H","hB"],GQ:["H","hB","h","hb"],GR:["h","H","hb","hB"],GT:["h","H","hB","hb"],GU:["h","hb","H","hB"],GW:["H","hB"],GY:["h","hb","H","hB"],HK:["h","hB","hb","H"],HN:["h","H","hB","hb"],HR:["H","hB"],HU:["H","h"],IC:["H","h","hB","hb"],ID:["H"],IE:["H","h","hb","hB"],IL:["H","hB"],IM:["H","h","hb","hB"],IN:["h","H"],IO:["H","h","hb","hB"],IQ:["h","hB","hb","H"],IR:["hB","H"],IS:["H"],IT:["H","hB"],JE:["H","h","hb","hB"],JM:["h","hb","H","hB"],JO:["h","hB","hb","H"],JP:["H","K","h"],KE:["hB","hb","H","h"],KG:["H","h","hB","hb"],KH:["hB","h","H","hb"],KI:["h","hb","H","hB"],KM:["H","h","hB","hb"],KN:["h","hb","H","hB"],KP:["h","H","hB","hb"],KR:["h","H","hB","hb"],KW:["h","hB","hb","H"],KY:["h","hb","H","hB"],KZ:["H","hB"],LA:["H","hb","hB","h"],LB:["h","hB","hb","H"],LC:["h","hb","H","hB"],LI:["H","hB","h"],LK:["H","h","hB","hb"],LR:["h","hb","H","hB"],LS:["h","H"],LT:["H","h","hb","hB"],LU:["H","h","hB"],LV:["H","hB","hb","h"],LY:["h","hB","hb","H"],MA:["H","h","hB","hb"],MC:["H","hB"],MD:["H","hB"],ME:["H","hB","h"],MF:["H","hB"],MG:["H","h"],MH:["h","hb","H","hB"],MK:["H","h","hb","hB"],ML:["H"],MM:["hB","hb","H","h"],MN:["H","h","hb","hB"],MO:["h","hB","hb","H"],MP:["h","hb","H","hB"],MQ:["H","hB"],MR:["h","hB","hb","H"],MS:["H","h","hb","hB"],MT:["H","h"],MU:["H","h"],MV:["H","h"],MW:["h","hb","H","hB"],MX:["h","H","hB","hb"],MY:["hb","hB","h","H"],MZ:["H","hB"],NA:["h","H","hB","hb"],NC:["H","hB"],NE:["H"],NF:["H","h","hb","hB"],NG:["H","h","hb","hB"],NI:["h","H","hB","hb"],NL:["H","hB"],NO:["H","h"],NP:["H","h","hB"],NR:["H","h","hb","hB"],NU:["H","h","hb","hB"],NZ:["h","hb","H","hB"],OM:["h","hB","hb","H"],PA:["h","H","hB","hb"],PE:["h","H","hB","hb"],PF:["H","h","hB"],PG:["h","H"],PH:["h","hB","hb","H"],PK:["h","hB","H"],PL:["H","h"],PM:["H","hB"],PN:["H","h","hb","hB"],PR:["h","H","hB","hb"],PS:["h","hB","hb","H"],PT:["H","hB"],PW:["h","H"],PY:["h","H","hB","hb"],QA:["h","hB","hb","H"],RE:["H","hB"],RO:["H","hB"],RS:["H","hB","h"],RU:["H"],RW:["H","h"],SA:["h","hB","hb","H"],SB:["h","hb","H","hB"],SC:["H","h","hB"],SD:["h","hB","hb","H"],SE:["H"],SG:["h","hb","H","hB"],SH:["H","h","hb","hB"],SI:["H","hB"],SJ:["H"],SK:["H"],SL:["h","hb","H","hB"],SM:["H","h","hB"],SN:["H","h","hB"],SO:["h","H"],SR:["H","hB"],SS:["h","hb","H","hB"],ST:["H","hB"],SV:["h","H","hB","hb"],SX:["H","h","hb","hB"],SY:["h","hB","hb","H"],SZ:["h","hb","H","hB"],TA:["H","h","hb","hB"],TC:["h","hb","H","hB"],TD:["h","H","hB"],TF:["H","h","hB"],TG:["H","hB"],TH:["H","h"],TJ:["H","h"],TL:["H","hB","hb","h"],TM:["H","h"],TN:["h","hB","hb","H"],TO:["h","H"],TR:["H","hB"],TT:["h","hb","H","hB"],TW:["hB","hb","h","H"],TZ:["hB","hb","H","h"],UA:["H","hB","h"],UG:["hB","hb","H","h"],UM:["h","hb","H","hB"],US:["h","hb","H","hB"],UY:["h","H","hB","hb"],UZ:["H","hB","h"],VA:["H","h","hB"],VC:["h","hb","H","hB"],VE:["h","H","hB","hb"],VG:["h","hb","H","hB"],VI:["h","hb","H","hB"],VN:["H","h"],VU:["h","H"],WF:["H","hB"],WS:["h","H"],XK:["H","hB","h"],YE:["h","hB","hb","H"],YT:["H","hB"],ZA:["H","h","hb","hB"],ZM:["h","hb","H","hB"],ZW:["H","h"],"af-ZA":["H","h","hB","hb"],"ar-001":["h","hB","hb","H"],"ca-ES":["H","h","hB"],"en-001":["h","hb","H","hB"],"en-HK":["h","hb","H","hB"],"en-IL":["H","h","hb","hB"],"en-MY":["h","hb","H","hB"],"es-BR":["H","h","hB","hb"],"es-ES":["H","h","hB","hb"],"es-GQ":["H","h","hB","hb"],"fr-CA":["H","h","hB"],"gl-ES":["H","h","hB"],"gu-IN":["hB","hb","h","H"],"hi-IN":["hB","h","H"],"it-CH":["H","h","hB"],"it-IT":["H","h","hB"],"kn-IN":["hB","h","H"],"ml-IN":["hB","h","H"],"mr-IN":["hB","hb","h","H"],"pa-IN":["hB","hb","h","H"],"ta-IN":["hB","h","hb","H"],"te-IN":["hB","h","H"],"zu-ZA":["H","hB","hb","h"]};function zx(e,r){for(var s="",i=0;i<e.length;i++){var o=e.charAt(i);if(o==="j"){for(var c=0;i+1<e.length&&e.charAt(i+1)===o;)c++,i++;var d=1+(c&1),p=c<2?1:3+(c>>1),h="a",g=Zx(r);for((g=="H"||g=="k")&&(p=0);p-- >0;)s+=h;for(;d-- >0;)s=g+s}else o==="J"?s+="H":s+=o}return s}function Zx(e){var r=e.hourCycle;if(r===void 0&&e.hourCycles&&e.hourCycles.length&&(r=e.hourCycles[0]),r)switch(r){case"h24":return"k";case"h23":return"H";case"h12":return"h";case"h11":return"K";default:throw new Error("Invalid hourCycle")}var s=e.language,i;s!=="root"&&(i=e.maximize().region);var o=Qo[i||""]||Qo[s||""]||Qo["".concat(s,"-001")]||Qo["001"];return o[0]}var du,Hx=new RegExp("^".concat(Og.source,"*")),Wx=new RegExp("".concat(Og.source,"*$"));function Ze(e,r){return{start:e,end:r}}var Gx=!!String.prototype.startsWith&&"_a".startsWith("a",1),Kx=!!String.fromCodePoint,qx=!!Object.fromEntries,Xx=!!String.prototype.codePointAt,Yx=!!String.prototype.trimStart,Qx=!!String.prototype.trimEnd,Jx=!!Number.isSafeInteger,ew=Jx?Number.isSafeInteger:function(e){return typeof e=="number"&&isFinite(e)&&Math.floor(e)===e&&Math.abs(e)<=9007199254740991},Ou=!0;try{var tw=Vg("([^\\p{White_Space}\\p{Pattern_Syntax}]*)","yu");Ou=((du=tw.exec("a"))===null||du===void 0?void 0:du[0])==="a"}catch{Ou=!1}var Dh=Gx?function(r,s,i){return r.startsWith(s,i)}:function(r,s,i){return r.slice(i,i+s.length)===s},Lu=Kx?String.fromCodePoint:function(){for(var r=[],s=0;s<arguments.length;s++)r[s]=arguments[s];for(var i="",o=r.length,c=0,d;o>c;){if(d=r[c++],d>1114111)throw RangeError(d+" is not a valid code point");i+=d<65536?String.fromCharCode(d):String.fromCharCode(((d-=65536)>>10)+55296,d%1024+56320)}return i},Fh=qx?Object.fromEntries:function(r){for(var s={},i=0,o=r;i<o.length;i++){var c=o[i],d=c[0],p=c[1];s[d]=p}return s},Fg=Xx?function(r,s){return r.codePointAt(s)}:function(r,s){var i=r.length;if(!(s<0||s>=i)){var o=r.charCodeAt(s),c;return o<55296||o>56319||s+1===i||(c=r.charCodeAt(s+1))<56320||c>57343?o:(o-55296<<10)+(c-56320)+65536}},rw=Yx?function(r){return r.trimStart()}:function(r){return r.replace(Hx,"")},nw=Qx?function(r){return r.trimEnd()}:function(r){return r.replace(Wx,"")};function Vg(e,r){return new RegExp(e,r)}var ju;if(Ou){var Vh=Vg("([^\\p{White_Space}\\p{Pattern_Syntax}]*)","yu");ju=function(r,s){var i;Vh.lastIndex=s;var o=Vh.exec(r);return(i=o[1])!==null&&i!==void 0?i:""}}else ju=function(r,s){for(var i=[];;){var o=Fg(r,s);if(o===void 0||Ug(o)||ow(o))break;i.push(o),s+=o>=65536?2:1}return Lu.apply(void 0,i)};var sw=function(){function e(r,s){s===void 0&&(s={}),this.message=r,this.position={offset:0,line:1,column:1},this.ignoreTag=!!s.ignoreTag,this.locale=s.locale,this.requiresOtherClause=!!s.requiresOtherClause,this.shouldParseSkeletons=!!s.shouldParseSkeletons}return e.prototype.parse=function(){if(this.offset()!==0)throw Error("parser can only be used once");return this.parseMessage(0,"",!1)},e.prototype.parseMessage=function(r,s,i){for(var o=[];!this.isEOF();){var c=this.char();if(c===123){var d=this.parseArgument(r,i);if(d.err)return d;o.push(d.val)}else{if(c===125&&r>0)break;if(c===35&&(s==="plural"||s==="selectordinal")){var p=this.clonePosition();this.bump(),o.push({type:st.pound,location:Ze(p,this.clonePosition())})}else if(c===60&&!this.ignoreTag&&this.peek()===47){if(i)break;return this.error(Be.UNMATCHED_CLOSING_TAG,Ze(this.clonePosition(),this.clonePosition()))}else if(c===60&&!this.ignoreTag&&Du(this.peek()||0)){var d=this.parseTag(r,s);if(d.err)return d;o.push(d.val)}else{var d=this.parseLiteral(r,s);if(d.err)return d;o.push(d.val)}}}return{val:o,err:null}},e.prototype.parseTag=function(r,s){var i=this.clonePosition();this.bump();var o=this.parseTagName();if(this.bumpSpace(),this.bumpIf("/>"))return{val:{type:st.literal,value:"<".concat(o,"/>"),location:Ze(i,this.clonePosition())},err:null};if(this.bumpIf(">")){var c=this.parseMessage(r+1,s,!0);if(c.err)return c;var d=c.val,p=this.clonePosition();if(this.bumpIf("</")){if(this.isEOF()||!Du(this.char()))return this.error(Be.INVALID_TAG,Ze(p,this.clonePosition()));var h=this.clonePosition(),g=this.parseTagName();return o!==g?this.error(Be.UNMATCHED_CLOSING_TAG,Ze(h,this.clonePosition())):(this.bumpSpace(),this.bumpIf(">")?{val:{type:st.tag,value:o,children:d,location:Ze(i,this.clonePosition())},err:null}:this.error(Be.INVALID_TAG,Ze(p,this.clonePosition())))}else return this.error(Be.UNCLOSED_TAG,Ze(i,this.clonePosition()))}else return this.error(Be.INVALID_TAG,Ze(i,this.clonePosition()))},e.prototype.parseTagName=function(){var r=this.offset();for(this.bump();!this.isEOF()&&aw(this.char());)this.bump();return this.message.slice(r,this.offset())},e.prototype.parseLiteral=function(r,s){for(var i=this.clonePosition(),o="";;){var c=this.tryParseQuote(s);if(c){o+=c;continue}var d=this.tryParseUnquoted(r,s);if(d){o+=d;continue}var p=this.tryParseLeftAngleBracket();if(p){o+=p;continue}break}var h=Ze(i,this.clonePosition());return{val:{type:st.literal,value:o,location:h},err:null}},e.prototype.tryParseLeftAngleBracket=function(){return!this.isEOF()&&this.char()===60&&(this.ignoreTag||!iw(this.peek()||0))?(this.bump(),"<"):null},e.prototype.tryParseQuote=function(r){if(this.isEOF()||this.char()!==39)return null;switch(this.peek()){case 39:return this.bump(),this.bump(),"'";case 123:case 60:case 62:case 125:break;case 35:if(r==="plural"||r==="selectordinal")break;return null;default:return null}this.bump();var s=[this.char()];for(this.bump();!this.isEOF();){var i=this.char();if(i===39)if(this.peek()===39)s.push(39),this.bump();else{this.bump();break}else s.push(i);this.bump()}return Lu.apply(void 0,s)},e.prototype.tryParseUnquoted=function(r,s){if(this.isEOF())return null;var i=this.char();return i===60||i===123||i===35&&(s==="plural"||s==="selectordinal")||i===125&&r>0?null:(this.bump(),Lu(i))},e.prototype.parseArgument=function(r,s){var i=this.clonePosition();if(this.bump(),this.bumpSpace(),this.isEOF())return this.error(Be.EXPECT_ARGUMENT_CLOSING_BRACE,Ze(i,this.clonePosition()));if(this.char()===125)return this.bump(),this.error(Be.EMPTY_ARGUMENT,Ze(i,this.clonePosition()));var o=this.parseIdentifierIfPossible().value;if(!o)return this.error(Be.MALFORMED_ARGUMENT,Ze(i,this.clonePosition()));if(this.bumpSpace(),this.isEOF())return this.error(Be.EXPECT_ARGUMENT_CLOSING_BRACE,Ze(i,this.clonePosition()));switch(this.char()){case 125:return this.bump(),{val:{type:st.argument,value:o,location:Ze(i,this.clonePosition())},err:null};case 44:return this.bump(),this.bumpSpace(),this.isEOF()?this.error(Be.EXPECT_ARGUMENT_CLOSING_BRACE,Ze(i,this.clonePosition())):this.parseArgumentOptions(r,s,o,i);default:return this.error(Be.MALFORMED_ARGUMENT,Ze(i,this.clonePosition()))}},e.prototype.parseIdentifierIfPossible=function(){var r=this.clonePosition(),s=this.offset(),i=ju(this.message,s),o=s+i.length;this.bumpTo(o);var c=this.clonePosition(),d=Ze(r,c);return{value:i,location:d}},e.prototype.parseArgumentOptions=function(r,s,i,o){var c,d=this.clonePosition(),p=this.parseIdentifierIfPossible().value,h=this.clonePosition();switch(p){case"":return this.error(Be.EXPECT_ARGUMENT_TYPE,Ze(d,h));case"number":case"date":case"time":{this.bumpSpace();var g=null;if(this.bumpIf(",")){this.bumpSpace();var v=this.clonePosition(),b=this.parseSimpleArgStyleIfPossible();if(b.err)return b;var w=nw(b.val);if(w.length===0)return this.error(Be.EXPECT_ARGUMENT_STYLE,Ze(this.clonePosition(),this.clonePosition()));var j=Ze(v,this.clonePosition());g={style:w,styleLocation:j}}var L=this.tryParseArgumentClose(o);if(L.err)return L;var N=Ze(o,this.clonePosition());if(g&&Dh(g?.style,"::",0)){var I=rw(g.style.slice(2));if(p==="number"){var b=this.parseNumberSkeletonFromString(I,g.styleLocation);return b.err?b:{val:{type:st.number,value:i,location:N,style:b.val},err:null}}else{if(I.length===0)return this.error(Be.EXPECT_DATE_TIME_SKELETON,N);var Z=I;this.locale&&(Z=zx(I,this.locale));var w={type:pi.dateTime,pattern:Z,location:g.styleLocation,parsedOptions:this.shouldParseSkeletons?jx(Z):{}},V=p==="date"?st.date:st.time;return{val:{type:V,value:i,location:N,style:w},err:null}}}return{val:{type:p==="number"?st.number:p==="date"?st.date:st.time,value:i,location:N,style:(c=g?.style)!==null&&c!==void 0?c:null},err:null}}case"plural":case"selectordinal":case"select":{var F=this.clonePosition();if(this.bumpSpace(),!this.bumpIf(","))return this.error(Be.EXPECT_SELECT_ARGUMENT_OPTIONS,Ze(F,pe({},F)));this.bumpSpace();var z=this.parseIdentifierIfPossible(),T=0;if(p!=="select"&&z.value==="offset"){if(!this.bumpIf(":"))return this.error(Be.EXPECT_PLURAL_ARGUMENT_OFFSET_VALUE,Ze(this.clonePosition(),this.clonePosition()));this.bumpSpace();var b=this.tryParseDecimalInteger(Be.EXPECT_PLURAL_ARGUMENT_OFFSET_VALUE,Be.INVALID_PLURAL_ARGUMENT_OFFSET_VALUE);if(b.err)return b;this.bumpSpace(),z=this.parseIdentifierIfPossible(),T=b.val}var Q=this.tryParsePluralOrSelectOptions(r,p,s,z);if(Q.err)return Q;var L=this.tryParseArgumentClose(o);if(L.err)return L;var ye=Ze(o,this.clonePosition());return p==="select"?{val:{type:st.select,value:i,options:Fh(Q.val),location:ye},err:null}:{val:{type:st.plural,value:i,options:Fh(Q.val),offset:T,pluralType:p==="plural"?"cardinal":"ordinal",location:ye},err:null}}default:return this.error(Be.INVALID_ARGUMENT_TYPE,Ze(d,h))}},e.prototype.tryParseArgumentClose=function(r){return this.isEOF()||this.char()!==125?this.error(Be.EXPECT_ARGUMENT_CLOSING_BRACE,Ze(r,this.clonePosition())):(this.bump(),{val:!0,err:null})},e.prototype.parseSimpleArgStyleIfPossible=function(){for(var r=0,s=this.clonePosition();!this.isEOF();){var i=this.char();switch(i){case 39:{this.bump();var o=this.clonePosition();if(!this.bumpUntil("'"))return this.error(Be.UNCLOSED_QUOTE_IN_ARGUMENT_STYLE,Ze(o,this.clonePosition()));this.bump();break}case 123:{r+=1,this.bump();break}case 125:{if(r>0)r-=1;else return{val:this.message.slice(s.offset,this.offset()),err:null};break}default:this.bump();break}}return{val:this.message.slice(s.offset,this.offset()),err:null}},e.prototype.parseNumberSkeletonFromString=function(r,s){var i=[];try{i=Fx(r)}catch{return this.error(Be.INVALID_NUMBER_SKELETON,s)}return{val:{type:pi.number,tokens:i,location:s,parsedOptions:this.shouldParseSkeletons?Bx(i):{}},err:null}},e.prototype.tryParsePluralOrSelectOptions=function(r,s,i,o){for(var c,d=!1,p=[],h=new Set,g=o.value,v=o.location;;){if(g.length===0){var b=this.clonePosition();if(s!=="select"&&this.bumpIf("=")){var w=this.tryParseDecimalInteger(Be.EXPECT_PLURAL_ARGUMENT_SELECTOR,Be.INVALID_PLURAL_ARGUMENT_SELECTOR);if(w.err)return w;v=Ze(b,this.clonePosition()),g=this.message.slice(b.offset,this.offset())}else break}if(h.has(g))return this.error(s==="select"?Be.DUPLICATE_SELECT_ARGUMENT_SELECTOR:Be.DUPLICATE_PLURAL_ARGUMENT_SELECTOR,v);g==="other"&&(d=!0),this.bumpSpace();var j=this.clonePosition();if(!this.bumpIf("{"))return this.error(s==="select"?Be.EXPECT_SELECT_ARGUMENT_SELECTOR_FRAGMENT:Be.EXPECT_PLURAL_ARGUMENT_SELECTOR_FRAGMENT,Ze(this.clonePosition(),this.clonePosition()));var L=this.parseMessage(r+1,s,i);if(L.err)return L;var N=this.tryParseArgumentClose(j);if(N.err)return N;p.push([g,{value:L.val,location:Ze(j,this.clonePosition())}]),h.add(g),this.bumpSpace(),c=this.parseIdentifierIfPossible(),g=c.value,v=c.location}return p.length===0?this.error(s==="select"?Be.EXPECT_SELECT_ARGUMENT_SELECTOR:Be.EXPECT_PLURAL_ARGUMENT_SELECTOR,Ze(this.clonePosition(),this.clonePosition())):this.requiresOtherClause&&!d?this.error(Be.MISSING_OTHER_CLAUSE,Ze(this.clonePosition(),this.clonePosition())):{val:p,err:null}},e.prototype.tryParseDecimalInteger=function(r,s){var i=1,o=this.clonePosition();this.bumpIf("+")||this.bumpIf("-")&&(i=-1);for(var c=!1,d=0;!this.isEOF();){var p=this.char();if(p>=48&&p<=57)c=!0,d=d*10+(p-48),this.bump();else break}var h=Ze(o,this.clonePosition());return c?(d*=i,ew(d)?{val:d,err:null}:this.error(s,h)):this.error(r,h)},e.prototype.offset=function(){return this.position.offset},e.prototype.isEOF=function(){return this.offset()===this.message.length},e.prototype.clonePosition=function(){return{offset:this.position.offset,line:this.position.line,column:this.position.column}},e.prototype.char=function(){var r=this.position.offset;if(r>=this.message.length)throw Error("out of bound");var s=Fg(this.message,r);if(s===void 0)throw Error("Offset ".concat(r," is at invalid UTF-16 code unit boundary"));return s},e.prototype.error=function(r,s){return{val:null,err:{kind:r,message:this.message,location:s}}},e.prototype.bump=function(){if(!this.isEOF()){var r=this.char();r===10?(this.position.line+=1,this.position.column=1,this.position.offset+=1):(this.position.column+=1,this.position.offset+=r<65536?1:2)}},e.prototype.bumpIf=function(r){if(Dh(this.message,r,this.offset())){for(var s=0;s<r.length;s++)this.bump();return!0}return!1},e.prototype.bumpUntil=function(r){var s=this.offset(),i=this.message.indexOf(r,s);return i>=0?(this.bumpTo(i),!0):(this.bumpTo(this.message.length),!1)},e.prototype.bumpTo=function(r){if(this.offset()>r)throw Error("targetOffset ".concat(r," must be greater than or equal to the current offset ").concat(this.offset()));for(r=Math.min(r,this.message.length);;){var s=this.offset();if(s===r)break;if(s>r)throw Error("targetOffset ".concat(r," is at invalid UTF-16 code unit boundary"));if(this.bump(),this.isEOF())break}},e.prototype.bumpSpace=function(){for(;!this.isEOF()&&Ug(this.char());)this.bump()},e.prototype.peek=function(){if(this.isEOF())return null;var r=this.char(),s=this.offset(),i=this.message.charCodeAt(s+(r>=65536?2:1));return i??null},e}();function Du(e){return e>=97&&e<=122||e>=65&&e<=90}function iw(e){return Du(e)||e===47}function aw(e){return e===45||e===46||e>=48&&e<=57||e===95||e>=97&&e<=122||e>=65&&e<=90||e==183||e>=192&&e<=214||e>=216&&e<=246||e>=248&&e<=893||e>=895&&e<=8191||e>=8204&&e<=8205||e>=8255&&e<=8256||e>=8304&&e<=8591||e>=11264&&e<=12271||e>=12289&&e<=55295||e>=63744&&e<=64975||e>=65008&&e<=65533||e>=65536&&e<=983039}function Ug(e){return e>=9&&e<=13||e===32||e===133||e>=8206&&e<=8207||e===8232||e===8233}function ow(e){return e>=33&&e<=35||e===36||e>=37&&e<=39||e===40||e===41||e===42||e===43||e===44||e===45||e>=46&&e<=47||e>=58&&e<=59||e>=60&&e<=62||e>=63&&e<=64||e===91||e===92||e===93||e===94||e===96||e===123||e===124||e===125||e===126||e===161||e>=162&&e<=165||e===166||e===167||e===169||e===171||e===172||e===174||e===176||e===177||e===182||e===187||e===191||e===215||e===247||e>=8208&&e<=8213||e>=8214&&e<=8215||e===8216||e===8217||e===8218||e>=8219&&e<=8220||e===8221||e===8222||e===8223||e>=8224&&e<=8231||e>=8240&&e<=8248||e===8249||e===8250||e>=8251&&e<=8254||e>=8257&&e<=8259||e===8260||e===8261||e===8262||e>=8263&&e<=8273||e===8274||e===8275||e>=8277&&e<=8286||e>=8592&&e<=8596||e>=8597&&e<=8601||e>=8602&&e<=8603||e>=8604&&e<=8607||e===8608||e>=8609&&e<=8610||e===8611||e>=8612&&e<=8613||e===8614||e>=8615&&e<=8621||e===8622||e>=8623&&e<=8653||e>=8654&&e<=8655||e>=8656&&e<=8657||e===8658||e===8659||e===8660||e>=8661&&e<=8691||e>=8692&&e<=8959||e>=8960&&e<=8967||e===8968||e===8969||e===8970||e===8971||e>=8972&&e<=8991||e>=8992&&e<=8993||e>=8994&&e<=9e3||e===9001||e===9002||e>=9003&&e<=9083||e===9084||e>=9085&&e<=9114||e>=9115&&e<=9139||e>=9140&&e<=9179||e>=9180&&e<=9185||e>=9186&&e<=9254||e>=9255&&e<=9279||e>=9280&&e<=9290||e>=9291&&e<=9311||e>=9472&&e<=9654||e===9655||e>=9656&&e<=9664||e===9665||e>=9666&&e<=9719||e>=9720&&e<=9727||e>=9728&&e<=9838||e===9839||e>=9840&&e<=10087||e===10088||e===10089||e===10090||e===10091||e===10092||e===10093||e===10094||e===10095||e===10096||e===10097||e===10098||e===10099||e===10100||e===10101||e>=10132&&e<=10175||e>=10176&&e<=10180||e===10181||e===10182||e>=10183&&e<=10213||e===10214||e===10215||e===10216||e===10217||e===10218||e===10219||e===10220||e===10221||e===10222||e===10223||e>=10224&&e<=10239||e>=10240&&e<=10495||e>=10496&&e<=10626||e===10627||e===10628||e===10629||e===10630||e===10631||e===10632||e===10633||e===10634||e===10635||e===10636||e===10637||e===10638||e===10639||e===10640||e===10641||e===10642||e===10643||e===10644||e===10645||e===10646||e===10647||e===10648||e>=10649&&e<=10711||e===10712||e===10713||e===10714||e===10715||e>=10716&&e<=10747||e===10748||e===10749||e>=10750&&e<=11007||e>=11008&&e<=11055||e>=11056&&e<=11076||e>=11077&&e<=11078||e>=11079&&e<=11084||e>=11085&&e<=11123||e>=11124&&e<=11125||e>=11126&&e<=11157||e===11158||e>=11159&&e<=11263||e>=11776&&e<=11777||e===11778||e===11779||e===11780||e===11781||e>=11782&&e<=11784||e===11785||e===11786||e===11787||e===11788||e===11789||e>=11790&&e<=11798||e===11799||e>=11800&&e<=11801||e===11802||e===11803||e===11804||e===11805||e>=11806&&e<=11807||e===11808||e===11809||e===11810||e===11811||e===11812||e===11813||e===11814||e===11815||e===11816||e===11817||e>=11818&&e<=11822||e===11823||e>=11824&&e<=11833||e>=11834&&e<=11835||e>=11836&&e<=11839||e===11840||e===11841||e===11842||e>=11843&&e<=11855||e>=11856&&e<=11857||e===11858||e>=11859&&e<=11903||e>=12289&&e<=12291||e===12296||e===12297||e===12298||e===12299||e===12300||e===12301||e===12302||e===12303||e===12304||e===12305||e>=12306&&e<=12307||e===12308||e===12309||e===12310||e===12311||e===12312||e===12313||e===12314||e===12315||e===12316||e===12317||e>=12318&&e<=12319||e===12320||e===12336||e===64830||e===64831||e>=65093&&e<=65094}function Fu(e){e.forEach(function(r){if(delete r.location,Ag(r)||Ng(r))for(var s in r.options)delete r.options[s].location,Fu(r.options[s].value);else Tg(r)&&Mg(r.style)||(Pg(r)||Rg(r))&&Mu(r.style)?delete r.style.location:Ig(r)&&Fu(r.children)})}function lw(e,r){r===void 0&&(r={}),r=pe({shouldParseSkeletons:!0,requiresOtherClause:!0},r);var s=new sw(e,r).parse();if(s.err){var i=SyntaxError(Be[s.err.kind]);throw i.location=s.err.location,i.originalMessage=s.err.message,i}return r?.captureLocation||Fu(s.val),s.val}var en;(function(e){e.MISSING_VALUE="MISSING_VALUE",e.INVALID_VALUE="INVALID_VALUE",e.MISSING_INTL_API="MISSING_INTL_API"})(en||(en={}));var is=function(e){_r(r,e);function r(s,i,o){var c=e.call(this,s)||this;return c.code=i,c.originalMessage=o,c}return r.prototype.toString=function(){return"[formatjs Error: ".concat(this.code,"] ").concat(this.message)},r}(Error),Uh=function(e){_r(r,e);function r(s,i,o,c){return e.call(this,'Invalid values for "'.concat(s,'": "').concat(i,'". Options are "').concat(Object.keys(o).join('", "'),'"'),en.INVALID_VALUE,c)||this}return r}(is),cw=function(e){_r(r,e);function r(s,i,o){return e.call(this,'Value for "'.concat(s,'" must be of type ').concat(i),en.INVALID_VALUE,o)||this}return r}(is),uw=function(e){_r(r,e);function r(s,i){return e.call(this,'The intl string context variable "'.concat(s,'" was not provided to the string "').concat(i,'"'),en.MISSING_VALUE,i)||this}return r}(is),zt;(function(e){e[e.literal=0]="literal",e[e.object=1]="object"})(zt||(zt={}));function dw(e){return e.length<2?e:e.reduce(function(r,s){var i=r[r.length-1];return!i||i.type!==zt.literal||s.type!==zt.literal?r.push(s):i.value+=s.value,r},[])}function $g(e){return typeof e=="function"}function al(e,r,s,i,o,c,d){if(e.length===1&&Mh(e[0]))return[{type:zt.literal,value:e[0].value}];for(var p=[],h=0,g=e;h<g.length;h++){var v=g[h];if(Mh(v)){p.push({type:zt.literal,value:v.value});continue}if(Ox(v)){typeof c=="number"&&p.push({type:zt.literal,value:s.getNumberFormat(r).format(c)});continue}var b=v.value;if(!(o&&b in o))throw new uw(b,d);var w=o[b];if(Mx(v)){(!w||typeof w=="string"||typeof w=="number")&&(w=typeof w=="string"||typeof w=="number"?String(w):""),p.push({type:typeof w=="string"?zt.literal:zt.object,value:w});continue}if(Pg(v)){var j=typeof v.style=="string"?i.date[v.style]:Mu(v.style)?v.style.parsedOptions:void 0;p.push({type:zt.literal,value:s.getDateTimeFormat(r,j).format(w)});continue}if(Rg(v)){var j=typeof v.style=="string"?i.time[v.style]:Mu(v.style)?v.style.parsedOptions:i.time.medium;p.push({type:zt.literal,value:s.getDateTimeFormat(r,j).format(w)});continue}if(Tg(v)){var j=typeof v.style=="string"?i.number[v.style]:Mg(v.style)?v.style.parsedOptions:void 0;j&&j.scale&&(w=w*(j.scale||1)),p.push({type:zt.literal,value:s.getNumberFormat(r,j).format(w)});continue}if(Ig(v)){var L=v.children,N=v.value,I=o[N];if(!$g(I))throw new cw(N,"function",d);var Z=al(L,r,s,i,o,c),V=I(Z.map(function(T){return T.value}));Array.isArray(V)||(V=[V]),p.push.apply(p,V.map(function(T){return{type:typeof T=="string"?zt.literal:zt.object,value:T}}))}if(Ag(v)){var F=v.options[w]||v.options.other;if(!F)throw new Uh(v.value,w,Object.keys(v.options),d);p.push.apply(p,al(F.value,r,s,i,o));continue}if(Ng(v)){var F=v.options["=".concat(w)];if(!F){if(!Intl.PluralRules)throw new is(`Intl.PluralRules is not available in this environment.
Try polyfilling it using "@formatjs/intl-pluralrules"
`,en.MISSING_INTL_API,d);var z=s.getPluralRules(r,{type:v.pluralType}).select(w-(v.offset||0));F=v.options[z]||v.options.other}if(!F)throw new Uh(v.value,w,Object.keys(v.options),d);p.push.apply(p,al(F.value,r,s,i,o,w-(v.offset||0)));continue}}return dw(p)}function fw(e,r){return r?pe(pe(pe({},e||{}),r||{}),Object.keys(e).reduce(function(s,i){return s[i]=pe(pe({},e[i]),r[i]||{}),s},{})):e}function pw(e,r){return r?Object.keys(e).reduce(function(s,i){return s[i]=fw(e[i],r[i]),s},pe({},e)):e}function fu(e){return{create:function(){return{get:function(r){return e[r]},set:function(r,s){e[r]=s}}}}}function hw(e){return e===void 0&&(e={number:{},dateTime:{},pluralRules:{}}),{getNumberFormat:Gr(function(){for(var r,s=[],i=0;i<arguments.length;i++)s[i]=arguments[i];return new((r=Intl.NumberFormat).bind.apply(r,Xr([void 0],s,!1)))},{cache:fu(e.number),strategy:Kr.variadic}),getDateTimeFormat:Gr(function(){for(var r,s=[],i=0;i<arguments.length;i++)s[i]=arguments[i];return new((r=Intl.DateTimeFormat).bind.apply(r,Xr([void 0],s,!1)))},{cache:fu(e.dateTime),strategy:Kr.variadic}),getPluralRules:Gr(function(){for(var r,s=[],i=0;i<arguments.length;i++)s[i]=arguments[i];return new((r=Intl.PluralRules).bind.apply(r,Xr([void 0],s,!1)))},{cache:fu(e.pluralRules),strategy:Kr.variadic})}}var Bg=function(){function e(r,s,i,o){s===void 0&&(s=e.defaultLocale);var c=this;if(this.formatterCache={number:{},dateTime:{},pluralRules:{}},this.format=function(h){var g=c.formatToParts(h);if(g.length===1)return g[0].value;var v=g.reduce(function(b,w){return!b.length||w.type!==zt.literal||typeof b[b.length-1]!="string"?b.push(w.value):b[b.length-1]+=w.value,b},[]);return v.length<=1?v[0]||"":v},this.formatToParts=function(h){return al(c.ast,c.locales,c.formatters,c.formats,h,void 0,c.message)},this.resolvedOptions=function(){var h;return{locale:((h=c.resolvedLocale)===null||h===void 0?void 0:h.toString())||Intl.NumberFormat.supportedLocalesOf(c.locales)[0]}},this.getAst=function(){return c.ast},this.locales=s,this.resolvedLocale=e.resolveLocale(s),typeof r=="string"){if(this.message=r,!e.__parse)throw new TypeError("IntlMessageFormat.__parse must be set to process `message` of type `string`");var d=o||{};d.formatters;var p=fi(d,["formatters"]);this.ast=e.__parse(r,pe(pe({},p),{locale:this.resolvedLocale}))}else this.ast=r;if(!Array.isArray(this.ast))throw new TypeError("A message must be provided as a String or AST.");this.formats=pw(e.formats,i),this.formatters=o&&o.formatters||hw(this.formatterCache)}return Object.defineProperty(e,"defaultLocale",{get:function(){return e.memoizedDefaultLocale||(e.memoizedDefaultLocale=new Intl.NumberFormat().resolvedOptions().locale),e.memoizedDefaultLocale},enumerable:!1,configurable:!0}),e.memoizedDefaultLocale=null,e.resolveLocale=function(r){if(!(typeof Intl.Locale>"u")){var s=Intl.NumberFormat.supportedLocalesOf(r);return s.length>0?new Intl.Locale(s[0]):new Intl.Locale(typeof r=="string"?r:r[0])}},e.__parse=lw,e.formats={number:{integer:{maximumFractionDigits:0},currency:{style:"currency"},percent:{style:"percent"}},date:{short:{month:"numeric",day:"numeric",year:"2-digit"},medium:{month:"short",day:"numeric",year:"numeric"},long:{month:"long",day:"numeric",year:"numeric"},full:{weekday:"long",month:"long",day:"numeric",year:"numeric"}},time:{short:{hour:"numeric",minute:"numeric"},medium:{hour:"numeric",minute:"numeric",second:"numeric"},long:{hour:"numeric",minute:"numeric",second:"numeric",timeZoneName:"short"},full:{hour:"numeric",minute:"numeric",second:"numeric",timeZoneName:"short"}}},e}(),As;(function(e){e.FORMAT_ERROR="FORMAT_ERROR",e.UNSUPPORTED_FORMATTER="UNSUPPORTED_FORMATTER",e.INVALID_CONFIG="INVALID_CONFIG",e.MISSING_DATA="MISSING_DATA",e.MISSING_TRANSLATION="MISSING_TRANSLATION"})(As||(As={}));var La=function(e){_r(r,e);function r(s,i,o){var c=this,d=o?o instanceof Error?o:new Error(String(o)):void 0;return c=e.call(this,"[@formatjs/intl Error ".concat(s,"] ").concat(i,`
`).concat(d?`
`.concat(d.message,`
`).concat(d.stack):""))||this,c.code=s,typeof Error.captureStackTrace=="function"&&Error.captureStackTrace(c,r),c}return r}(Error),mw=function(e){_r(r,e);function r(s,i){return e.call(this,As.UNSUPPORTED_FORMATTER,s,i)||this}return r}(La),gw=function(e){_r(r,e);function r(s,i){return e.call(this,As.INVALID_CONFIG,s,i)||this}return r}(La),$h=function(e){_r(r,e);function r(s,i){return e.call(this,As.MISSING_DATA,s,i)||this}return r}(La),Sr=function(e){_r(r,e);function r(s,i,o){var c=e.call(this,As.FORMAT_ERROR,"".concat(s,`
Locale: `).concat(i,`
`),o)||this;return c.locale=i,c}return r}(La),pu=function(e){_r(r,e);function r(s,i,o,c){var d=e.call(this,"".concat(s,`
MessageID: `).concat(o?.id,`
Default Message: `).concat(o?.defaultMessage,`
Description: `).concat(o?.description,`
`),i,c)||this;return d.descriptor=o,d.locale=i,d}return r}(Sr),vw=function(e){_r(r,e);function r(s,i){var o=e.call(this,As.MISSING_TRANSLATION,'Missing message: "'.concat(s.id,'" for locale "').concat(i,'", using ').concat(s.defaultMessage?"default message (".concat(typeof s.defaultMessage=="string"?s.defaultMessage:s.defaultMessage.map(function(c){var d;return(d=c.value)!==null&&d!==void 0?d:JSON.stringify(c)}).join(),")"):"id"," as fallback."))||this;return o.descriptor=s,o}return r}(La);function yw(e,r,s){if(s===void 0&&(s=Error),!e)throw new s(r)}function bi(e,r,s){return s===void 0&&(s={}),r.reduce(function(i,o){return o in e?i[o]=e[o]:o in s&&(i[o]=s[o]),i},{})}var bw=function(e){},xw=function(e){},zg={formats:{},messages:{},timeZone:void 0,defaultLocale:"en",defaultFormats:{},fallbackOnEmptyString:!0,onError:bw,onWarn:xw};function Zg(){return{dateTime:{},number:{},message:{},relativeTime:{},pluralRules:{},list:{},displayNames:{}}}function ks(e){return{create:function(){return{get:function(r){return e[r]},set:function(r,s){e[r]=s}}}}}function ww(e){e===void 0&&(e=Zg());var r=Intl.RelativeTimeFormat,s=Intl.ListFormat,i=Intl.DisplayNames,o=Gr(function(){for(var p,h=[],g=0;g<arguments.length;g++)h[g]=arguments[g];return new((p=Intl.DateTimeFormat).bind.apply(p,Xr([void 0],h,!1)))},{cache:ks(e.dateTime),strategy:Kr.variadic}),c=Gr(function(){for(var p,h=[],g=0;g<arguments.length;g++)h[g]=arguments[g];return new((p=Intl.NumberFormat).bind.apply(p,Xr([void 0],h,!1)))},{cache:ks(e.number),strategy:Kr.variadic}),d=Gr(function(){for(var p,h=[],g=0;g<arguments.length;g++)h[g]=arguments[g];return new((p=Intl.PluralRules).bind.apply(p,Xr([void 0],h,!1)))},{cache:ks(e.pluralRules),strategy:Kr.variadic});return{getDateTimeFormat:o,getNumberFormat:c,getMessageFormat:Gr(function(p,h,g,v){return new Bg(p,h,g,pe({formatters:{getNumberFormat:c,getDateTimeFormat:o,getPluralRules:d}},v||{}))},{cache:ks(e.message),strategy:Kr.variadic}),getRelativeTimeFormat:Gr(function(){for(var p=[],h=0;h<arguments.length;h++)p[h]=arguments[h];return new(r.bind.apply(r,Xr([void 0],p,!1)))},{cache:ks(e.relativeTime),strategy:Kr.variadic}),getPluralRules:d,getListFormat:Gr(function(){for(var p=[],h=0;h<arguments.length;h++)p[h]=arguments[h];return new(s.bind.apply(s,Xr([void 0],p,!1)))},{cache:ks(e.list),strategy:Kr.variadic}),getDisplayNames:Gr(function(){for(var p=[],h=0;h<arguments.length;h++)p[h]=arguments[h];return new(i.bind.apply(i,Xr([void 0],p,!1)))},{cache:ks(e.displayNames),strategy:Kr.variadic})}}function gd(e,r,s,i){var o=e&&e[r],c;if(o&&(c=o[s]),c)return c;i(new mw("No ".concat(r," format named: ").concat(s)))}function Jo(e,r){return Object.keys(e).reduce(function(s,i){return s[i]=pe({timeZone:r},e[i]),s},{})}function Bh(e,r){var s=Object.keys(pe(pe({},e),r));return s.reduce(function(i,o){return i[o]=pe(pe({},e[o]||{}),r[o]||{}),i},{})}function zh(e,r){if(!r)return e;var s=Bg.formats;return pe(pe(pe({},s),e),{date:Bh(Jo(s.date,r),Jo(e.date||{},r)),time:Bh(Jo(s.time,r),Jo(e.time||{},r))})}var Vu=function(e,r,s,i,o){var c=e.locale,d=e.formats,p=e.messages,h=e.defaultLocale,g=e.defaultFormats,v=e.fallbackOnEmptyString,b=e.onError,w=e.timeZone,j=e.defaultRichTextElements;s===void 0&&(s={id:""});var L=s.id,N=s.defaultMessage;yw(!!L,"[@formatjs/intl] An `id` must be provided to format a message. You can either:\n1. Configure your build toolchain with [babel-plugin-formatjs](https://formatjs.github.io/docs/tooling/babel-plugin)\nor [@formatjs/ts-transformer](https://formatjs.github.io/docs/tooling/ts-transformer) OR\n2. Configure your `eslint` config to include [eslint-plugin-formatjs](https://formatjs.github.io/docs/tooling/linter#enforce-id)\nto autofix this issue");var I=String(L),Z=p&&Object.prototype.hasOwnProperty.call(p,I)&&p[I];if(Array.isArray(Z)&&Z.length===1&&Z[0].type===st.literal)return Z[0].value;if(!i&&Z&&typeof Z=="string"&&!j)return Z.replace(/'\{(.*?)\}'/gi,"{$1}");if(i=pe(pe({},j),i||{}),d=zh(d,w),g=zh(g,w),!Z){if(v===!1&&Z==="")return Z;if((!N||c&&c.toLowerCase()!==h.toLowerCase())&&b(new vw(s,c)),N)try{var V=r.getMessageFormat(N,h,g,o);return V.format(i)}catch(F){return b(new pu('Error formatting default message for: "'.concat(I,'", rendering default message verbatim'),c,s,F)),typeof N=="string"?N:I}return I}try{var V=r.getMessageFormat(Z,c,d,pe({formatters:r},o||{}));return V.format(i)}catch(F){b(new pu('Error formatting message: "'.concat(I,'", using ').concat(N?"default message":"id"," as fallback."),c,s,F))}if(N)try{var V=r.getMessageFormat(N,h,g,o);return V.format(i)}catch(F){b(new pu('Error formatting the default message for: "'.concat(I,'", rendering message verbatim'),c,s,F))}return typeof Z=="string"?Z:typeof N=="string"?N:I},_w=["formatMatcher","timeZone","hour12","weekday","era","year","month","day","hour","minute","second","timeZoneName","hourCycle","dateStyle","timeStyle","calendar","numberingSystem","fractionalSecondDigits"];function ja(e,r,s,i){var o=e.locale,c=e.formats,d=e.onError,p=e.timeZone;i===void 0&&(i={});var h=i.format,g=pe(pe({},p&&{timeZone:p}),h&&gd(c,r,h,d)),v=bi(i,_w,g);return r==="time"&&!v.hour&&!v.minute&&!v.second&&!v.timeStyle&&!v.dateStyle&&(v=pe(pe({},v),{hour:"numeric",minute:"numeric"})),s(o,v)}function Sw(e,r){for(var s=[],i=2;i<arguments.length;i++)s[i-2]=arguments[i];var o=s[0],c=s[1],d=c===void 0?{}:c,p=typeof o=="string"?new Date(o||0):o;try{return ja(e,"date",r,d).format(p)}catch(h){e.onError(new Sr("Error formatting date.",e.locale,h))}return String(p)}function kw(e,r){for(var s=[],i=2;i<arguments.length;i++)s[i-2]=arguments[i];var o=s[0],c=s[1],d=c===void 0?{}:c,p=typeof o=="string"?new Date(o||0):o;try{return ja(e,"time",r,d).format(p)}catch(h){e.onError(new Sr("Error formatting time.",e.locale,h))}return String(p)}function Cw(e,r){for(var s=[],i=2;i<arguments.length;i++)s[i-2]=arguments[i];var o=s[0],c=s[1],d=s[2],p=d===void 0?{}:d,h=typeof o=="string"?new Date(o||0):o,g=typeof c=="string"?new Date(c||0):c;try{return ja(e,"dateTimeRange",r,p).formatRange(h,g)}catch(v){e.onError(new Sr("Error formatting date time range.",e.locale,v))}return String(h)}function Ew(e,r){for(var s=[],i=2;i<arguments.length;i++)s[i-2]=arguments[i];var o=s[0],c=s[1],d=c===void 0?{}:c,p=typeof o=="string"?new Date(o||0):o;try{return ja(e,"date",r,d).formatToParts(p)}catch(h){e.onError(new Sr("Error formatting date.",e.locale,h))}return[]}function Tw(e,r){for(var s=[],i=2;i<arguments.length;i++)s[i-2]=arguments[i];var o=s[0],c=s[1],d=c===void 0?{}:c,p=typeof o=="string"?new Date(o||0):o;try{return ja(e,"time",r,d).formatToParts(p)}catch(h){e.onError(new Sr("Error formatting time.",e.locale,h))}return[]}var Pw=["style","type","fallback","languageDisplay"];function Rw(e,r,s,i){var o=e.locale,c=e.onError,d=Intl.DisplayNames;d||c(new is(`Intl.DisplayNames is not available in this environment.
Try polyfilling it using "@formatjs/intl-displaynames"
`,en.MISSING_INTL_API));var p=bi(i,Pw);try{return r(o,p).of(s)}catch(h){c(new Sr("Error formatting display name.",o,h))}}var Aw=["type","style"],Zh=Date.now();function Nw(e){return"".concat(Zh,"_").concat(e,"_").concat(Zh)}function Iw(e,r,s,i){i===void 0&&(i={});var o=Hg(e,r,s,i).reduce(function(c,d){var p=d.value;return typeof p!="string"?c.push(p):typeof c[c.length-1]=="string"?c[c.length-1]+=p:c.push(p),c},[]);return o.length===1?o[0]:o.length===0?"":o}function Hg(e,r,s,i){var o=e.locale,c=e.onError;i===void 0&&(i={});var d=Intl.ListFormat;d||c(new is(`Intl.ListFormat is not available in this environment.
Try polyfilling it using "@formatjs/intl-listformat"
`,en.MISSING_INTL_API));var p=bi(i,Aw);try{var h={},g=s.map(function(v,b){if(typeof v=="object"){var w=Nw(b);return h[w]=v,w}return String(v)});return r(o,p).formatToParts(g).map(function(v){return v.type==="literal"?v:pe(pe({},v),{value:h[v.value]||v.value})})}catch(v){c(new Sr("Error formatting list.",o,v))}return s}var Mw=["type"];function Ow(e,r,s,i){var o=e.locale,c=e.onError;i===void 0&&(i={}),Intl.PluralRules||c(new is(`Intl.PluralRules is not available in this environment.
Try polyfilling it using "@formatjs/intl-pluralrules"
`,en.MISSING_INTL_API));var d=bi(i,Mw);try{return r(o,d).select(s)}catch(p){c(new Sr("Error formatting plural.",o,p))}return"other"}var Lw=["numeric","style"];function jw(e,r,s){var i=e.locale,o=e.formats,c=e.onError;s===void 0&&(s={});var d=s.format,p=!!d&&gd(o,"relative",d,c)||{},h=bi(s,Lw,p);return r(i,h)}function Dw(e,r,s,i,o){o===void 0&&(o={}),i||(i="second");var c=Intl.RelativeTimeFormat;c||e.onError(new is(`Intl.RelativeTimeFormat is not available in this environment.
Try polyfilling it using "@formatjs/intl-relativetimeformat"
`,en.MISSING_INTL_API));try{return jw(e,r,o).format(s,i)}catch(d){e.onError(new Sr("Error formatting relative time.",e.locale,d))}return String(s)}var Fw=["style","currency","unit","unitDisplay","useGrouping","minimumIntegerDigits","minimumFractionDigits","maximumFractionDigits","minimumSignificantDigits","maximumSignificantDigits","compactDisplay","currencyDisplay","currencySign","notation","signDisplay","unit","unitDisplay","numberingSystem","trailingZeroDisplay","roundingPriority","roundingIncrement","roundingMode"];function Wg(e,r,s){var i=e.locale,o=e.formats,c=e.onError;s===void 0&&(s={});var d=s.format,p=d&&gd(o,"number",d,c)||{},h=bi(s,Fw,p);return r(i,h)}function Vw(e,r,s,i){i===void 0&&(i={});try{return Wg(e,r,i).format(s)}catch(o){e.onError(new Sr("Error formatting number.",e.locale,o))}return String(s)}function Uw(e,r,s,i){i===void 0&&(i={});try{return Wg(e,r,i).formatToParts(s)}catch(o){e.onError(new Sr("Error formatting number.",e.locale,o))}return[]}function $w(e){var r=e?e[Object.keys(e)[0]]:void 0;return typeof r=="string"}function Bw(e){e.onWarn&&e.defaultRichTextElements&&$w(e.messages||{})&&e.onWarn(`[@formatjs/intl] "defaultRichTextElements" was specified but "message" was not pre-compiled. 
Please consider using "@formatjs/cli" to pre-compile your messages for performance.
For more details see https://formatjs.github.io/docs/getting-started/message-distribution`)}function zw(e,r){var s=ww(r),i=pe(pe({},zg),e),o=i.locale,c=i.defaultLocale,d=i.onError;return o?!Intl.NumberFormat.supportedLocalesOf(o).length&&d?d(new $h('Missing locale data for locale: "'.concat(o,'" in Intl.NumberFormat. Using default locale: "').concat(c,'" as fallback. See https://formatjs.github.io/docs/react-intl#runtime-requirements for more details'))):!Intl.DateTimeFormat.supportedLocalesOf(o).length&&d&&d(new $h('Missing locale data for locale: "'.concat(o,'" in Intl.DateTimeFormat. Using default locale: "').concat(c,'" as fallback. See https://formatjs.github.io/docs/react-intl#runtime-requirements for more details'))):(d&&d(new gw('"locale" was not configured, using "'.concat(c,'" as fallback. See https://formatjs.github.io/docs/react-intl/api#intlshape for more details'))),i.locale=i.defaultLocale||"en"),Bw(i),pe(pe({},i),{formatters:s,formatNumber:Vw.bind(null,i,s.getNumberFormat),formatNumberToParts:Uw.bind(null,i,s.getNumberFormat),formatRelativeTime:Dw.bind(null,i,s.getRelativeTimeFormat),formatDate:Sw.bind(null,i,s.getDateTimeFormat),formatDateToParts:Ew.bind(null,i,s.getDateTimeFormat),formatTime:kw.bind(null,i,s.getDateTimeFormat),formatDateTimeRange:Cw.bind(null,i,s.getDateTimeFormat),formatTimeToParts:Tw.bind(null,i,s.getDateTimeFormat),formatPlural:Ow.bind(null,i,s.getPluralRules),formatMessage:Vu.bind(null,i,s),$t:Vu.bind(null,i,s),formatList:Iw.bind(null,i,s.getListFormat),formatListToParts:Hg.bind(null,i,s.getListFormat),formatDisplayName:Rw.bind(null,i,s.getDisplayNames)})}function Zw(e,r,s){if(s===void 0&&(s=Error),!e)throw new s(r)}function Gg(e){Zw(e,"[React Intl] Could not find required `intl` object. <IntlProvider> needs to exist in the component ancestry.")}var Kg=pe(pe({},zg),{textComponent:O.Fragment}),Hw={key:42},Ww=function(e){return O.isValidElement(e)?O.createElement(O.Fragment,Hw,e):e},Gw=function(e){var r;return(r=O.Children.map(e,Ww))!==null&&r!==void 0?r:[]};function Kw(e){return function(r){return e(O.Children.toArray(r))}}function Uu(e,r){if(e===r)return!0;if(!e||!r)return!1;var s=Object.keys(e),i=Object.keys(r),o=s.length;if(i.length!==o)return!1;for(var c=0;c<o;c++){var d=s[c];if(e[d]!==r[d]||!Object.prototype.hasOwnProperty.call(r,d))return!1}return!0}var hu={exports:{}},Xe={};/** @license React v16.13.1
 * react-is.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var Hh;function qw(){if(Hh)return Xe;Hh=1;var e=typeof Symbol=="function"&&Symbol.for,r=e?Symbol.for("react.element"):60103,s=e?Symbol.for("react.portal"):60106,i=e?Symbol.for("react.fragment"):60107,o=e?Symbol.for("react.strict_mode"):60108,c=e?Symbol.for("react.profiler"):60114,d=e?Symbol.for("react.provider"):60109,p=e?Symbol.for("react.context"):60110,h=e?Symbol.for("react.async_mode"):60111,g=e?Symbol.for("react.concurrent_mode"):60111,v=e?Symbol.for("react.forward_ref"):60112,b=e?Symbol.for("react.suspense"):60113,w=e?Symbol.for("react.suspense_list"):60120,j=e?Symbol.for("react.memo"):60115,L=e?Symbol.for("react.lazy"):60116,N=e?Symbol.for("react.block"):60121,I=e?Symbol.for("react.fundamental"):60117,Z=e?Symbol.for("react.responder"):60118,V=e?Symbol.for("react.scope"):60119;function F(T){if(typeof T=="object"&&T!==null){var Q=T.$$typeof;switch(Q){case r:switch(T=T.type,T){case h:case g:case i:case c:case o:case b:return T;default:switch(T=T&&T.$$typeof,T){case p:case v:case L:case j:case d:return T;default:return Q}}case s:return Q}}}function z(T){return F(T)===g}return Xe.AsyncMode=h,Xe.ConcurrentMode=g,Xe.ContextConsumer=p,Xe.ContextProvider=d,Xe.Element=r,Xe.ForwardRef=v,Xe.Fragment=i,Xe.Lazy=L,Xe.Memo=j,Xe.Portal=s,Xe.Profiler=c,Xe.StrictMode=o,Xe.Suspense=b,Xe.isAsyncMode=function(T){return z(T)||F(T)===h},Xe.isConcurrentMode=z,Xe.isContextConsumer=function(T){return F(T)===p},Xe.isContextProvider=function(T){return F(T)===d},Xe.isElement=function(T){return typeof T=="object"&&T!==null&&T.$$typeof===r},Xe.isForwardRef=function(T){return F(T)===v},Xe.isFragment=function(T){return F(T)===i},Xe.isLazy=function(T){return F(T)===L},Xe.isMemo=function(T){return F(T)===j},Xe.isPortal=function(T){return F(T)===s},Xe.isProfiler=function(T){return F(T)===c},Xe.isStrictMode=function(T){return F(T)===o},Xe.isSuspense=function(T){return F(T)===b},Xe.isValidElementType=function(T){return typeof T=="string"||typeof T=="function"||T===i||T===g||T===c||T===o||T===b||T===w||typeof T=="object"&&T!==null&&(T.$$typeof===L||T.$$typeof===j||T.$$typeof===d||T.$$typeof===p||T.$$typeof===v||T.$$typeof===I||T.$$typeof===Z||T.$$typeof===V||T.$$typeof===N)},Xe.typeOf=F,Xe}var Wh;function Xw(){return Wh||(Wh=1,hu.exports=qw()),hu.exports}var mu,Gh;function Yw(){if(Gh)return mu;Gh=1;var e=Xw(),r={childContextTypes:!0,contextType:!0,contextTypes:!0,defaultProps:!0,displayName:!0,getDefaultProps:!0,getDerivedStateFromError:!0,getDerivedStateFromProps:!0,mixins:!0,propTypes:!0,type:!0},s={name:!0,length:!0,prototype:!0,caller:!0,callee:!0,arguments:!0,arity:!0},i={$$typeof:!0,render:!0,defaultProps:!0,displayName:!0,propTypes:!0},o={$$typeof:!0,compare:!0,defaultProps:!0,displayName:!0,propTypes:!0,type:!0},c={};c[e.ForwardRef]=i,c[e.Memo]=o;function d(L){return e.isMemo(L)?o:c[L.$$typeof]||r}var p=Object.defineProperty,h=Object.getOwnPropertyNames,g=Object.getOwnPropertySymbols,v=Object.getOwnPropertyDescriptor,b=Object.getPrototypeOf,w=Object.prototype;function j(L,N,I){if(typeof N!="string"){if(w){var Z=b(N);Z&&Z!==w&&j(L,Z,I)}var V=h(N);g&&(V=V.concat(g(N)));for(var F=d(L),z=d(N),T=0;T<V.length;++T){var Q=V[T];if(!s[Q]&&!(I&&I[Q])&&!(z&&z[Q])&&!(F&&F[Q])){var ye=v(N,Q);try{p(L,Q,ye)}catch{}}}}return L}return mu=j,mu}Yw();var vd=typeof window<"u"&&!window.__REACT_INTL_BYPASS_GLOBAL_CONTEXT__?window.__REACT_INTL_CONTEXT__||(window.__REACT_INTL_CONTEXT__=O.createContext(null)):O.createContext(null);vd.Consumer;var Qw=vd.Provider,Jw=Qw,e1=vd;function yd(){var e=O.useContext(e1);return Gg(e),e}var $u;(function(e){e.formatDate="FormattedDate",e.formatTime="FormattedTime",e.formatNumber="FormattedNumber",e.formatList="FormattedList",e.formatDisplayName="FormattedDisplayName"})($u||($u={}));var Bu;(function(e){e.formatDate="FormattedDateParts",e.formatTime="FormattedTimeParts",e.formatNumber="FormattedNumberParts",e.formatList="FormattedListParts"})(Bu||(Bu={}));function qg(e){var r=function(s){var i=yd(),o=s.value,c=s.children,d=fi(s,["value","children"]),p=typeof o=="string"?new Date(o||0):o,h=e==="formatDate"?i.formatDateToParts(p,d):i.formatTimeToParts(p,d);return c(h)};return r.displayName=Bu[e],r}function Da(e){var r=function(s){var i=yd(),o=s.value,c=s.children,d=fi(s,["value","children"]),p=i[e](o,d);if(typeof c=="function")return c(p);var h=i.textComponent||O.Fragment;return O.createElement(h,null,p)};return r.displayName=$u[e],r}function Xg(e){return e&&Object.keys(e).reduce(function(r,s){var i=e[s];return r[s]=$g(i)?Kw(i):i,r},{})}var Kh=function(e,r,s,i){for(var o=[],c=4;c<arguments.length;c++)o[c-4]=arguments[c];var d=Xg(i),p=Vu.apply(void 0,Xr([e,r,s,d],o,!1));return Array.isArray(p)?Gw(p):p},qh=function(e,r){var s=e.defaultRichTextElements,i=fi(e,["defaultRichTextElements"]),o=Xg(s),c=zw(pe(pe(pe({},Kg),i),{defaultRichTextElements:o}),r),d={locale:c.locale,timeZone:c.timeZone,fallbackOnEmptyString:c.fallbackOnEmptyString,formats:c.formats,defaultLocale:c.defaultLocale,defaultFormats:c.defaultFormats,messages:c.messages,onError:c.onError,defaultRichTextElements:o};return pe(pe({},c),{formatMessage:Kh.bind(null,d,c.formatters),$t:Kh.bind(null,d,c.formatters)})};function t1(e,r){var s=e.values,i=fi(e,["values"]),o=r.values,c=fi(r,["values"]);return Uu(o,s)&&Uu(i,c)}function Yg(e){var r=yd(),s=r.formatMessage,i=r.textComponent,o=i===void 0?O.Fragment:i,c=e.id,d=e.description,p=e.defaultMessage,h=e.values,g=e.children,v=e.tagName,b=v===void 0?o:v,w=e.ignoreTag,j={id:c,description:d,defaultMessage:p},L=s(j,h,{ignoreTag:w});return typeof g=="function"?g(Array.isArray(L)?L:[L]):b?O.createElement(b,null,L):O.createElement(O.Fragment,null,L)}Yg.displayName="FormattedMessage";var at=O.memo(Yg,t1);at.displayName="MemoizedFormattedMessage";function gu(e){return{locale:e.locale,timeZone:e.timeZone,fallbackOnEmptyString:e.fallbackOnEmptyString,formats:e.formats,textComponent:e.textComponent,messages:e.messages,defaultLocale:e.defaultLocale,defaultFormats:e.defaultFormats,onError:e.onError,onWarn:e.onWarn,wrapRichTextChunksInFragment:e.wrapRichTextChunksInFragment,defaultRichTextElements:e.defaultRichTextElements}}var r1=function(e){_r(r,e);function r(){var s=e!==null&&e.apply(this,arguments)||this;return s.cache=Zg(),s.state={cache:s.cache,intl:qh(gu(s.props),s.cache),prevConfig:gu(s.props)},s}return r.getDerivedStateFromProps=function(s,i){var o=i.prevConfig,c=i.cache,d=gu(s);return Uu(o,d)?null:{intl:qh(d,c),prevConfig:d}},r.prototype.render=function(){return Gg(this.state.intl),O.createElement(Jw,{value:this.state.intl},this.props.children)},r.displayName="IntlProvider",r.defaultProps=Kg,r}(O.PureComponent);Da("formatDate");Da("formatTime");Da("formatNumber");Da("formatList");Da("formatDisplayName");qg("formatDate");qg("formatTime");const Qg="/assets/images-C0vQTYhy.jpeg";function ts(...e){return e.filter(Boolean).join(" ")}const n1=typeof window<"u";function s1(e,r){e.indexOf(r)===-1&&e.push(r)}function Jg(e,r){const s=e.indexOf(r);s>-1&&e.splice(s,1)}const Ns=(e,r,s)=>s>r?r:s<e?e:s;let bd=()=>{};const vn={},ev=e=>/^-?(?:\d+(?:\.\d+)?|\.\d+)$/u.test(e);function tv(e){return typeof e=="object"&&e!==null}const rv=e=>/^0[^.\s]+$/u.test(e);function xd(e){let r;return()=>(r===void 0&&(r=e()),r)}const xi=e=>e,i1=(e,r)=>s=>r(e(s)),wd=(...e)=>e.reduce(i1),_d=(e,r,s)=>{const i=r-e;return i===0?1:(s-e)/i};class nv{constructor(){this.subscriptions=[]}add(r){return s1(this.subscriptions,r),()=>Jg(this.subscriptions,r)}notify(r,s,i){const o=this.subscriptions.length;if(o)if(o===1)this.subscriptions[0](r,s,i);else for(let c=0;c<o;c++){const d=this.subscriptions[c];d&&d(r,s,i)}}getSize(){return this.subscriptions.length}clear(){this.subscriptions.length=0}}const Qr=e=>e*1e3,gn=e=>e/1e3;function sv(e,r){return r?e*(1e3/r):0}const a1=(e,r,s)=>{const i=r-e;return((s-e)%i+i)%i+e},iv=(e,r,s)=>(((1-3*s+3*r)*e+(3*s-6*r))*e+3*r)*e,o1=1e-7,l1=12;function c1(e,r,s,i,o){let c,d,p=0;do d=r+(s-r)/2,c=iv(d,i,o)-e,c>0?s=d:r=d;while(Math.abs(c)>o1&&++p<l1);return d}function Fa(e,r,s,i){if(e===r&&s===i)return xi;const o=c=>c1(c,0,1,e,s);return c=>c===0||c===1?c:iv(o(c),r,i)}const av=e=>r=>r<=.5?e(2*r)/2:(2-e(2*(1-r)))/2,ov=e=>r=>1-e(1-r),lv=Fa(.33,1.53,.69,.99),Sd=ov(lv),cv=av(Sd),uv=e=>(e*=2)<1?.5*Sd(e):.5*(2-Math.pow(2,-10*(e-1))),kd=e=>1-Math.sin(Math.acos(e)),u1=ov(kd),dv=av(kd),d1=Fa(.42,0,1,1),f1=Fa(0,0,.58,1),fv=Fa(.42,0,.58,1),pv=e=>Array.isArray(e)&&typeof e[0]!="number";function hv(e,r){return pv(e)?e[a1(0,e.length,r)]:e}const mv=e=>Array.isArray(e)&&typeof e[0]=="number",p1={linear:xi,easeIn:d1,easeInOut:fv,easeOut:f1,circIn:kd,circInOut:dv,circOut:u1,backIn:Sd,backInOut:cv,backOut:lv,anticipate:uv},h1=e=>typeof e=="string",Xh=e=>{if(mv(e)){bd(e.length===4);const[r,s,i,o]=e;return Fa(r,s,i,o)}else if(h1(e))return p1[e];return e},el=["setup","read","resolveKeyframes","preUpdate","update","preRender","render","postRender"];function m1(e,r){let s=new Set,i=new Set,o=!1,c=!1;const d=new WeakSet;let p={delta:0,timestamp:0,isProcessing:!1};function h(v){d.has(v)&&(g.schedule(v),e()),v(p)}const g={schedule:(v,b=!1,w=!1)=>{const L=w&&o?s:i;return b&&d.add(v),L.has(v)||L.add(v),v},cancel:v=>{i.delete(v),d.delete(v)},process:v=>{if(p=v,o){c=!0;return}o=!0,[s,i]=[i,s],s.forEach(h),s.clear(),o=!1,c&&(c=!1,g.process(v))}};return g}const g1=40;function v1(e,r){let s=!1,i=!0;const o={delta:0,timestamp:0,isProcessing:!1},c=()=>s=!0,d=el.reduce((F,z)=>(F[z]=m1(c),F),{}),{setup:p,read:h,resolveKeyframes:g,preUpdate:v,update:b,preRender:w,render:j,postRender:L}=d,N=()=>{const F=vn.useManualTiming?o.timestamp:performance.now();s=!1,vn.useManualTiming||(o.delta=i?1e3/60:Math.max(Math.min(F-o.timestamp,g1),1)),o.timestamp=F,o.isProcessing=!0,p.process(o),h.process(o),g.process(o),v.process(o),b.process(o),w.process(o),j.process(o),L.process(o),o.isProcessing=!1,s&&r&&(i=!1,e(N))},I=()=>{s=!0,i=!0,o.isProcessing||e(N)};return{schedule:el.reduce((F,z)=>{const T=d[z];return F[z]=(Q,ye=!1,he=!1)=>(s||I(),T.schedule(Q,ye,he)),F},{}),cancel:F=>{for(let z=0;z<el.length;z++)d[el[z]].cancel(F)},state:o,steps:d}}const{schedule:yn,cancel:zu,state:fl}=v1(typeof requestAnimationFrame<"u"?requestAnimationFrame:xi,!0);let ol;function y1(){ol=void 0}const xr={now:()=>(ol===void 0&&xr.set(fl.isProcessing||vn.useManualTiming?fl.timestamp:performance.now()),ol),set:e=>{ol=e,queueMicrotask(y1)}},gv=e=>r=>typeof r=="string"&&r.startsWith(e),vv=gv("--"),b1=gv("var(--"),Cd=e=>b1(e)?x1.test(e.split("/*")[0].trim()):!1,x1=/var\(--(?:[\w-]+\s*|[\w-]+\s*,(?:\s*[^)(\s]|\s*\((?:[^)(]|\([^)(]*\))*\))+\s*)\)$/iu,wi={test:e=>typeof e=="number",parse:parseFloat,transform:e=>e},Ca={...wi,transform:e=>Ns(0,1,e)},tl={...wi,default:1},ba=e=>Math.round(e*1e5)/1e5,Ed=/-?(?:\d+(?:\.\d+)?|\.\d+)/gu;function w1(e){return e==null}const _1=/^(?:#[\da-f]{3,8}|(?:rgb|hsl)a?\((?:-?[\d.]+%?[,\s]+){2}-?[\d.]+%?\s*(?:[,/]\s*)?(?:\b\d+(?:\.\d+)?|\.\d+)?%?\))$/iu,Td=(e,r)=>s=>!!(typeof s=="string"&&_1.test(s)&&s.startsWith(e)||r&&!w1(s)&&Object.prototype.hasOwnProperty.call(s,r)),yv=(e,r,s)=>i=>{if(typeof i!="string")return i;const[o,c,d,p]=i.match(Ed);return{[e]:parseFloat(o),[r]:parseFloat(c),[s]:parseFloat(d),alpha:p!==void 0?parseFloat(p):1}},S1=e=>Ns(0,255,e),vu={...wi,transform:e=>Math.round(S1(e))},Cs={test:Td("rgb","red"),parse:yv("red","green","blue"),transform:({red:e,green:r,blue:s,alpha:i=1})=>"rgba("+vu.transform(e)+", "+vu.transform(r)+", "+vu.transform(s)+", "+ba(Ca.transform(i))+")"};function k1(e){let r="",s="",i="",o="";return e.length>5?(r=e.substring(1,3),s=e.substring(3,5),i=e.substring(5,7),o=e.substring(7,9)):(r=e.substring(1,2),s=e.substring(2,3),i=e.substring(3,4),o=e.substring(4,5),r+=r,s+=s,i+=i,o+=o),{red:parseInt(r,16),green:parseInt(s,16),blue:parseInt(i,16),alpha:o?parseInt(o,16)/255:1}}const Zu={test:Td("#"),parse:k1,transform:Cs.transform},Va=e=>({test:r=>typeof r=="string"&&r.endsWith(e)&&r.split(" ").length===1,parse:parseFloat,transform:r=>`${r}${e}`}),qn=Va("deg"),di=Va("%"),Ee=Va("px"),C1=Va("vh"),E1=Va("vw"),Yh={...di,parse:e=>di.parse(e)/100,transform:e=>di.transform(e*100)},ci={test:Td("hsl","hue"),parse:yv("hue","saturation","lightness"),transform:({hue:e,saturation:r,lightness:s,alpha:i=1})=>"hsla("+Math.round(e)+", "+di.transform(ba(r))+", "+di.transform(ba(s))+", "+ba(Ca.transform(i))+")"},vt={test:e=>Cs.test(e)||Zu.test(e)||ci.test(e),parse:e=>Cs.test(e)?Cs.parse(e):ci.test(e)?ci.parse(e):Zu.parse(e),transform:e=>typeof e=="string"?e:e.hasOwnProperty("red")?Cs.transform(e):ci.transform(e),getAnimatableNone:e=>{const r=vt.parse(e);return r.alpha=0,vt.transform(r)}},T1=/(?:#[\da-f]{3,8}|(?:rgb|hsl)a?\((?:-?[\d.]+%?[,\s]+){2}-?[\d.]+%?\s*(?:[,/]\s*)?(?:\b\d+(?:\.\d+)?|\.\d+)?%?\))/giu;function P1(e){return isNaN(e)&&typeof e=="string"&&(e.match(Ed)?.length||0)+(e.match(T1)?.length||0)>0}const bv="number",xv="color",R1="var",A1="var(",Qh="${}",N1=/var\s*\(\s*--(?:[\w-]+\s*|[\w-]+\s*,(?:\s*[^)(\s]|\s*\((?:[^)(]|\([^)(]*\))*\))+\s*)\)|#[\da-f]{3,8}|(?:rgb|hsl)a?\((?:-?[\d.]+%?[,\s]+){2}-?[\d.]+%?\s*(?:[,/]\s*)?(?:\b\d+(?:\.\d+)?|\.\d+)?%?\)|-?(?:\d+(?:\.\d+)?|\.\d+)/giu;function Ea(e){const r=e.toString(),s=[],i={color:[],number:[],var:[]},o=[];let c=0;const p=r.replace(N1,h=>(vt.test(h)?(i.color.push(c),o.push(xv),s.push(vt.parse(h))):h.startsWith(A1)?(i.var.push(c),o.push(R1),s.push(h)):(i.number.push(c),o.push(bv),s.push(parseFloat(h))),++c,Qh)).split(Qh);return{values:s,split:p,indexes:i,types:o}}function wv(e){return Ea(e).values}function _v(e){const{split:r,types:s}=Ea(e),i=r.length;return o=>{let c="";for(let d=0;d<i;d++)if(c+=r[d],o[d]!==void 0){const p=s[d];p===bv?c+=ba(o[d]):p===xv?c+=vt.transform(o[d]):c+=o[d]}return c}}const I1=e=>typeof e=="number"?0:vt.test(e)?vt.getAnimatableNone(e):e;function M1(e){const r=wv(e);return _v(e)(r.map(I1))}const _i={test:P1,parse:wv,createTransformer:_v,getAnimatableNone:M1};function yu(e,r,s){return s<0&&(s+=1),s>1&&(s-=1),s<1/6?e+(r-e)*6*s:s<1/2?r:s<2/3?e+(r-e)*(2/3-s)*6:e}function O1({hue:e,saturation:r,lightness:s,alpha:i}){e/=360,r/=100,s/=100;let o=0,c=0,d=0;if(!r)o=c=d=s;else{const p=s<.5?s*(1+r):s+r-s*r,h=2*s-p;o=yu(h,p,e+1/3),c=yu(h,p,e),d=yu(h,p,e-1/3)}return{red:Math.round(o*255),green:Math.round(c*255),blue:Math.round(d*255),alpha:i}}function pl(e,r){return s=>s>0?r:e}const Ua=(e,r,s)=>e+(r-e)*s,bu=(e,r,s)=>{const i=e*e,o=s*(r*r-i)+i;return o<0?0:Math.sqrt(o)},L1=[Zu,Cs,ci],j1=e=>L1.find(r=>r.test(e));function Jh(e){const r=j1(e);if(!r)return!1;let s=r.parse(e);return r===ci&&(s=O1(s)),s}const em=(e,r)=>{const s=Jh(e),i=Jh(r);if(!s||!i)return pl(e,r);const o={...s};return c=>(o.red=bu(s.red,i.red,c),o.green=bu(s.green,i.green,c),o.blue=bu(s.blue,i.blue,c),o.alpha=Ua(s.alpha,i.alpha,c),Cs.transform(o))},Hu=new Set(["none","hidden"]);function D1(e,r){return Hu.has(e)?s=>s<=0?e:r:s=>s>=1?r:e}function F1(e,r){return s=>Ua(e,r,s)}function Pd(e){return typeof e=="number"?F1:typeof e=="string"?Cd(e)?pl:vt.test(e)?em:$1:Array.isArray(e)?Sv:typeof e=="object"?vt.test(e)?em:V1:pl}function Sv(e,r){const s=[...e],i=s.length,o=e.map((c,d)=>Pd(c)(c,r[d]));return c=>{for(let d=0;d<i;d++)s[d]=o[d](c);return s}}function V1(e,r){const s={...e,...r},i={};for(const o in s)e[o]!==void 0&&r[o]!==void 0&&(i[o]=Pd(e[o])(e[o],r[o]));return o=>{for(const c in i)s[c]=i[c](o);return s}}function U1(e,r){const s=[],i={color:0,var:0,number:0};for(let o=0;o<r.values.length;o++){const c=r.types[o],d=e.indexes[c][i[c]],p=e.values[d]??0;s[o]=p,i[c]++}return s}const $1=(e,r)=>{const s=_i.createTransformer(r),i=Ea(e),o=Ea(r);return i.indexes.var.length===o.indexes.var.length&&i.indexes.color.length===o.indexes.color.length&&i.indexes.number.length>=o.indexes.number.length?Hu.has(e)&&!o.values.length||Hu.has(r)&&!i.values.length?D1(e,r):wd(Sv(U1(i,o),o.values),s):pl(e,r)};function kv(e,r,s){return typeof e=="number"&&typeof r=="number"&&typeof s=="number"?Ua(e,r,s):Pd(e)(e,r)}const B1=e=>{const r=({timestamp:s})=>e(s);return{start:(s=!0)=>yn.update(r,s),stop:()=>zu(r),now:()=>fl.isProcessing?fl.timestamp:xr.now()}},Cv=(e,r,s=10)=>{let i="";const o=Math.max(Math.round(r/s),2);for(let c=0;c<o;c++)i+=Math.round(e(c/(o-1))*1e4)/1e4+", ";return`linear(${i.substring(0,i.length-2)})`},hl=2e4;function Rd(e){let r=0;const s=50;let i=e.next(r);for(;!i.done&&r<hl;)r+=s,i=e.next(r);return r>=hl?1/0:r}function Ev(e,r=100,s){const i=s({...e,keyframes:[0,r]}),o=Math.min(Rd(i),hl);return{type:"keyframes",ease:c=>i.next(o*c).value/r,duration:gn(o)}}const z1=5;function Tv(e,r,s){const i=Math.max(r-z1,0);return sv(s-e(i),r-i)}const ut={stiffness:100,damping:10,mass:1,velocity:0,duration:800,bounce:.3,visualDuration:.3,restSpeed:{granular:.01,default:2},restDelta:{granular:.005,default:.5},minDuration:.01,maxDuration:10,minDamping:.05,maxDamping:1},xu=.001;function Z1({duration:e=ut.duration,bounce:r=ut.bounce,velocity:s=ut.velocity,mass:i=ut.mass}){let o,c,d=1-r;d=Ns(ut.minDamping,ut.maxDamping,d),e=Ns(ut.minDuration,ut.maxDuration,gn(e)),d<1?(o=g=>{const v=g*d,b=v*e,w=v-s,j=Wu(g,d),L=Math.exp(-b);return xu-w/j*L},c=g=>{const b=g*d*e,w=b*s+s,j=Math.pow(d,2)*Math.pow(g,2)*e,L=Math.exp(-b),N=Wu(Math.pow(g,2),d);return(-o(g)+xu>0?-1:1)*((w-j)*L)/N}):(o=g=>{const v=Math.exp(-g*e),b=(g-s)*e+1;return-xu+v*b},c=g=>{const v=Math.exp(-g*e),b=(s-g)*(e*e);return v*b});const p=5/e,h=W1(o,c,p);if(e=Qr(e),isNaN(h))return{stiffness:ut.stiffness,damping:ut.damping,duration:e};{const g=Math.pow(h,2)*i;return{stiffness:g,damping:d*2*Math.sqrt(i*g),duration:e}}}const H1=12;function W1(e,r,s){let i=s;for(let o=1;o<H1;o++)i=i-e(i)/r(i);return i}function Wu(e,r){return e*Math.sqrt(1-r*r)}const G1=["duration","bounce"],K1=["stiffness","damping","mass"];function tm(e,r){return r.some(s=>e[s]!==void 0)}function q1(e){let r={velocity:ut.velocity,stiffness:ut.stiffness,damping:ut.damping,mass:ut.mass,isResolvedFromDuration:!1,...e};if(!tm(e,K1)&&tm(e,G1))if(e.visualDuration){const s=e.visualDuration,i=2*Math.PI/(s*1.2),o=i*i,c=2*Ns(.05,1,1-(e.bounce||0))*Math.sqrt(o);r={...r,mass:ut.mass,stiffness:o,damping:c}}else{const s=Z1(e);r={...r,...s,mass:ut.mass},r.isResolvedFromDuration=!0}return r}function Ta(e=ut.visualDuration,r=ut.bounce){const s=typeof e!="object"?{visualDuration:e,keyframes:[0,1],bounce:r}:e;let{restSpeed:i,restDelta:o}=s;const c=s.keyframes[0],d=s.keyframes[s.keyframes.length-1],p={done:!1,value:c},{stiffness:h,damping:g,mass:v,duration:b,velocity:w,isResolvedFromDuration:j}=q1({...s,velocity:-gn(s.velocity||0)}),L=w||0,N=g/(2*Math.sqrt(h*v)),I=d-c,Z=gn(Math.sqrt(h/v)),V=Math.abs(I)<5;i||(i=V?ut.restSpeed.granular:ut.restSpeed.default),o||(o=V?ut.restDelta.granular:ut.restDelta.default);let F;if(N<1){const T=Wu(Z,N);F=Q=>{const ye=Math.exp(-N*Z*Q);return d-ye*((L+N*Z*I)/T*Math.sin(T*Q)+I*Math.cos(T*Q))}}else if(N===1)F=T=>d-Math.exp(-Z*T)*(I+(L+Z*I)*T);else{const T=Z*Math.sqrt(N*N-1);F=Q=>{const ye=Math.exp(-N*Z*Q),he=Math.min(T*Q,300);return d-ye*((L+N*Z*I)*Math.sinh(he)+T*I*Math.cosh(he))/T}}const z={calculatedDuration:j&&b||null,next:T=>{const Q=F(T);if(j)p.done=T>=b;else{let ye=T===0?L:0;N<1&&(ye=T===0?Qr(L):Tv(F,T,Q));const he=Math.abs(ye)<=i,be=Math.abs(d-Q)<=o;p.done=he&&be}return p.value=p.done?d:Q,p},toString:()=>{const T=Math.min(Rd(z),hl),Q=Cv(ye=>z.next(T*ye).value,T,30);return T+"ms "+Q},toTransition:()=>{}};return z}Ta.applyToOptions=e=>{const r=Ev(e,100,Ta);return e.ease=r.ease,e.duration=Qr(r.duration),e.type="keyframes",e};function Gu({keyframes:e,velocity:r=0,power:s=.8,timeConstant:i=325,bounceDamping:o=10,bounceStiffness:c=500,modifyTarget:d,min:p,max:h,restDelta:g=.5,restSpeed:v}){const b=e[0],w={done:!1,value:b},j=he=>p!==void 0&&he<p||h!==void 0&&he>h,L=he=>p===void 0?h:h===void 0||Math.abs(p-he)<Math.abs(h-he)?p:h;let N=s*r;const I=b+N,Z=d===void 0?I:d(I);Z!==I&&(N=Z-b);const V=he=>-N*Math.exp(-he/i),F=he=>Z+V(he),z=he=>{const be=V(he),Ve=F(he);w.done=Math.abs(be)<=g,w.value=w.done?Z:Ve};let T,Q;const ye=he=>{j(w.value)&&(T=he,Q=Ta({keyframes:[w.value,L(w.value)],velocity:Tv(F,he,w.value),damping:o,stiffness:c,restDelta:g,restSpeed:v}))};return ye(0),{calculatedDuration:null,next:he=>{let be=!1;return!Q&&T===void 0&&(be=!0,z(he),ye(he)),T!==void 0&&he>=T?Q.next(he-T):(!be&&z(he),w)}}}function X1(e,r,s){const i=[],o=s||vn.mix||kv,c=e.length-1;for(let d=0;d<c;d++){let p=o(e[d],e[d+1]);if(r){const h=Array.isArray(r)?r[d]||xi:r;p=wd(h,p)}i.push(p)}return i}function Y1(e,r,{clamp:s=!0,ease:i,mixer:o}={}){const c=e.length;if(bd(c===r.length),c===1)return()=>r[0];if(c===2&&r[0]===r[1])return()=>r[1];const d=e[0]===e[1];e[0]>e[c-1]&&(e=[...e].reverse(),r=[...r].reverse());const p=X1(r,i,o),h=p.length,g=v=>{if(d&&v<e[0])return r[0];let b=0;if(h>1)for(;b<e.length-2&&!(v<e[b+1]);b++);const w=_d(e[b],e[b+1],v);return p[b](w)};return s?v=>g(Ns(e[0],e[c-1],v)):g}function Pv(e,r){const s=e[e.length-1];for(let i=1;i<=r;i++){const o=_d(0,r,i);e.push(Ua(s,1,o))}}function Rv(e){const r=[0];return Pv(r,e.length-1),r}function Q1(e,r){return e.map(s=>s*r)}function J1(e,r){return e.map(()=>r||fv).splice(0,e.length-1)}function xa({duration:e=300,keyframes:r,times:s,ease:i="easeInOut"}){const o=pv(i)?i.map(Xh):Xh(i),c={done:!1,value:r[0]},d=Q1(s&&s.length===r.length?s:Rv(r),e),p=Y1(d,r,{ease:Array.isArray(o)?o:J1(r,o)});return{calculatedDuration:e,next:h=>(c.value=p(h),c.done=h>=e,c)}}const e2=e=>e!==null;function Ad(e,{repeat:r,repeatType:s="loop"},i,o=1){const c=e.filter(e2),p=o<0||r&&s!=="loop"&&r%2===1?0:c.length-1;return!p||i===void 0?c[p]:i}const t2={decay:Gu,inertia:Gu,tween:xa,keyframes:xa,spring:Ta};function Av(e){typeof e.type=="string"&&(e.type=t2[e.type])}class Nd{constructor(){this.updateFinished()}get finished(){return this._finished}updateFinished(){this._finished=new Promise(r=>{this.resolve=r})}notifyFinished(){this.resolve()}then(r,s){return this.finished.then(r,s)}}const r2=e=>e/100;class Id extends Nd{constructor(r){super(),this.state="idle",this.startTime=null,this.isStopped=!1,this.currentTime=0,this.holdTime=null,this.playbackSpeed=1,this.stop=()=>{const{motionValue:s}=this.options;s&&s.updatedAt!==xr.now()&&this.tick(xr.now()),this.isStopped=!0,this.state!=="idle"&&(this.teardown(),this.options.onStop?.())},this.options=r,this.initAnimation(),this.play(),r.autoplay===!1&&this.pause()}initAnimation(){const{options:r}=this;Av(r);const{type:s=xa,repeat:i=0,repeatDelay:o=0,repeatType:c,velocity:d=0}=r;let{keyframes:p}=r;const h=s||xa;h!==xa&&typeof p[0]!="number"&&(this.mixKeyframes=wd(r2,kv(p[0],p[1])),p=[0,100]);const g=h({...r,keyframes:p});c==="mirror"&&(this.mirroredGenerator=h({...r,keyframes:[...p].reverse(),velocity:-d})),g.calculatedDuration===null&&(g.calculatedDuration=Rd(g));const{calculatedDuration:v}=g;this.calculatedDuration=v,this.resolvedDuration=v+o,this.totalDuration=this.resolvedDuration*(i+1)-o,this.generator=g}updateTime(r){const s=Math.round(r-this.startTime)*this.playbackSpeed;this.holdTime!==null?this.currentTime=this.holdTime:this.currentTime=s}tick(r,s=!1){const{generator:i,totalDuration:o,mixKeyframes:c,mirroredGenerator:d,resolvedDuration:p,calculatedDuration:h}=this;if(this.startTime===null)return i.next(0);const{delay:g=0,keyframes:v,repeat:b,repeatType:w,repeatDelay:j,type:L,onUpdate:N,finalKeyframe:I}=this.options;this.speed>0?this.startTime=Math.min(this.startTime,r):this.speed<0&&(this.startTime=Math.min(r-o/this.speed,this.startTime)),s?this.currentTime=r:this.updateTime(r);const Z=this.currentTime-g*(this.playbackSpeed>=0?1:-1),V=this.playbackSpeed>=0?Z<0:Z>o;this.currentTime=Math.max(Z,0),this.state==="finished"&&this.holdTime===null&&(this.currentTime=o);let F=this.currentTime,z=i;if(b){const he=Math.min(this.currentTime,o)/p;let be=Math.floor(he),Ve=he%1;!Ve&&he>=1&&(Ve=1),Ve===1&&be--,be=Math.min(be,b+1),!!(be%2)&&(w==="reverse"?(Ve=1-Ve,j&&(Ve-=j/p)):w==="mirror"&&(z=d)),F=Ns(0,1,Ve)*p}const T=V?{done:!1,value:v[0]}:z.next(F);c&&(T.value=c(T.value));let{done:Q}=T;!V&&h!==null&&(Q=this.playbackSpeed>=0?this.currentTime>=o:this.currentTime<=0);const ye=this.holdTime===null&&(this.state==="finished"||this.state==="running"&&Q);return ye&&L!==Gu&&(T.value=Ad(v,this.options,I,this.speed)),N&&N(T.value),ye&&this.finish(),T}then(r,s){return this.finished.then(r,s)}get duration(){return gn(this.calculatedDuration)}get time(){return gn(this.currentTime)}set time(r){r=Qr(r),this.currentTime=r,this.startTime===null||this.holdTime!==null||this.playbackSpeed===0?this.holdTime=r:this.driver&&(this.startTime=this.driver.now()-r/this.playbackSpeed),this.driver?.start(!1)}get speed(){return this.playbackSpeed}set speed(r){this.updateTime(xr.now());const s=this.playbackSpeed!==r;this.playbackSpeed=r,s&&(this.time=gn(this.currentTime))}play(){if(this.isStopped)return;const{driver:r=B1,startTime:s}=this.options;this.driver||(this.driver=r(o=>this.tick(o))),this.options.onPlay?.();const i=this.driver.now();this.state==="finished"?(this.updateFinished(),this.startTime=i):this.holdTime!==null?this.startTime=i-this.holdTime:this.startTime||(this.startTime=s??i),this.state==="finished"&&this.speed<0&&(this.startTime+=this.calculatedDuration),this.holdTime=null,this.state="running",this.driver.start()}pause(){this.state="paused",this.updateTime(xr.now()),this.holdTime=this.currentTime}complete(){this.state!=="running"&&this.play(),this.state="finished",this.holdTime=null}finish(){this.notifyFinished(),this.teardown(),this.state="finished",this.options.onComplete?.()}cancel(){this.holdTime=null,this.startTime=0,this.tick(0),this.teardown(),this.options.onCancel?.()}teardown(){this.state="idle",this.stopDriver(),this.startTime=this.holdTime=null}stopDriver(){this.driver&&(this.driver.stop(),this.driver=void 0)}sample(r){return this.startTime=0,this.tick(r,!0)}attachTimeline(r){return this.options.allowFlatten&&(this.options.type="keyframes",this.options.ease="linear",this.initAnimation()),this.driver?.stop(),r.observe(this)}}function n2(e){for(let r=1;r<e.length;r++)e[r]??(e[r]=e[r-1])}const Es=e=>e*180/Math.PI,Ku=e=>{const r=Es(Math.atan2(e[1],e[0]));return qu(r)},s2={x:4,y:5,translateX:4,translateY:5,scaleX:0,scaleY:3,scale:e=>(Math.abs(e[0])+Math.abs(e[3]))/2,rotate:Ku,rotateZ:Ku,skewX:e=>Es(Math.atan(e[1])),skewY:e=>Es(Math.atan(e[2])),skew:e=>(Math.abs(e[1])+Math.abs(e[2]))/2},qu=e=>(e=e%360,e<0&&(e+=360),e),rm=Ku,nm=e=>Math.sqrt(e[0]*e[0]+e[1]*e[1]),sm=e=>Math.sqrt(e[4]*e[4]+e[5]*e[5]),i2={x:12,y:13,z:14,translateX:12,translateY:13,translateZ:14,scaleX:nm,scaleY:sm,scale:e=>(nm(e)+sm(e))/2,rotateX:e=>qu(Es(Math.atan2(e[6],e[5]))),rotateY:e=>qu(Es(Math.atan2(-e[2],e[0]))),rotateZ:rm,rotate:rm,skewX:e=>Es(Math.atan(e[4])),skewY:e=>Es(Math.atan(e[1])),skew:e=>(Math.abs(e[1])+Math.abs(e[4]))/2};function Xu(e){return e.includes("scale")?1:0}function Yu(e,r){if(!e||e==="none")return Xu(r);const s=e.match(/^matrix3d\(([-\d.e\s,]+)\)$/u);let i,o;if(s)i=i2,o=s;else{const p=e.match(/^matrix\(([-\d.e\s,]+)\)$/u);i=s2,o=p}if(!o)return Xu(r);const c=i[r],d=o[1].split(",").map(o2);return typeof c=="function"?c(d):d[c]}const a2=(e,r)=>{const{transform:s="none"}=getComputedStyle(e);return Yu(s,r)};function o2(e){return parseFloat(e.trim())}const Si=["transformPerspective","x","y","z","translateX","translateY","translateZ","scale","scaleX","scaleY","rotate","rotateX","rotateY","rotateZ","skew","skewX","skewY"],ki=new Set(Si),im=e=>e===wi||e===Ee,l2=new Set(["x","y","z"]),c2=Si.filter(e=>!l2.has(e));function u2(e){const r=[];return c2.forEach(s=>{const i=e.getValue(s);i!==void 0&&(r.push([s,i.get()]),i.set(s.startsWith("scale")?1:0))}),r}const Ps={width:({x:e},{paddingLeft:r="0",paddingRight:s="0"})=>e.max-e.min-parseFloat(r)-parseFloat(s),height:({y:e},{paddingTop:r="0",paddingBottom:s="0"})=>e.max-e.min-parseFloat(r)-parseFloat(s),top:(e,{top:r})=>parseFloat(r),left:(e,{left:r})=>parseFloat(r),bottom:({y:e},{top:r})=>parseFloat(r)+(e.max-e.min),right:({x:e},{left:r})=>parseFloat(r)+(e.max-e.min),x:(e,{transform:r})=>Yu(r,"x"),y:(e,{transform:r})=>Yu(r,"y")};Ps.translateX=Ps.x;Ps.translateY=Ps.y;const Rs=new Set;let Qu=!1,Ju=!1,ed=!1;function Nv(){if(Ju){const e=Array.from(Rs).filter(i=>i.needsMeasurement),r=new Set(e.map(i=>i.element)),s=new Map;r.forEach(i=>{const o=u2(i);o.length&&(s.set(i,o),i.render())}),e.forEach(i=>i.measureInitialState()),r.forEach(i=>{i.render();const o=s.get(i);o&&o.forEach(([c,d])=>{i.getValue(c)?.set(d)})}),e.forEach(i=>i.measureEndState()),e.forEach(i=>{i.suspendedScrollY!==void 0&&window.scrollTo(0,i.suspendedScrollY)})}Ju=!1,Qu=!1,Rs.forEach(e=>e.complete(ed)),Rs.clear()}function Iv(){Rs.forEach(e=>{e.readKeyframes(),e.needsMeasurement&&(Ju=!0)})}function d2(){ed=!0,Iv(),Nv(),ed=!1}class Md{constructor(r,s,i,o,c,d=!1){this.state="pending",this.isAsync=!1,this.needsMeasurement=!1,this.unresolvedKeyframes=[...r],this.onComplete=s,this.name=i,this.motionValue=o,this.element=c,this.isAsync=d}scheduleResolve(){this.state="scheduled",this.isAsync?(Rs.add(this),Qu||(Qu=!0,yn.read(Iv),yn.resolveKeyframes(Nv))):(this.readKeyframes(),this.complete())}readKeyframes(){const{unresolvedKeyframes:r,name:s,element:i,motionValue:o}=this;if(r[0]===null){const c=o?.get(),d=r[r.length-1];if(c!==void 0)r[0]=c;else if(i&&s){const p=i.readValue(s,d);p!=null&&(r[0]=p)}r[0]===void 0&&(r[0]=d),o&&c===void 0&&o.set(r[0])}n2(r)}setFinalKeyframe(){}measureInitialState(){}renderEndStyles(){}measureEndState(){}complete(r=!1){this.state="complete",this.onComplete(this.unresolvedKeyframes,this.finalKeyframe,r),Rs.delete(this)}cancel(){this.state==="scheduled"&&(Rs.delete(this),this.state="pending")}resume(){this.state==="pending"&&this.scheduleResolve()}}const f2=e=>e.startsWith("--");function p2(e,r,s){f2(r)?e.style.setProperty(r,s):e.style[r]=s}const h2=xd(()=>window.ScrollTimeline!==void 0),m2={};function g2(e,r){const s=xd(e);return()=>m2[r]??s()}const Mv=g2(()=>{try{document.createElement("div").animate({opacity:0},{easing:"linear(0, 1)"})}catch{return!1}return!0},"linearEasing"),ga=([e,r,s,i])=>`cubic-bezier(${e}, ${r}, ${s}, ${i})`,am={linear:"linear",ease:"ease",easeIn:"ease-in",easeOut:"ease-out",easeInOut:"ease-in-out",circIn:ga([0,.65,.55,1]),circOut:ga([.55,0,1,.45]),backIn:ga([.31,.01,.66,-.59]),backOut:ga([.33,1.53,.69,.99])};function Ov(e,r){if(e)return typeof e=="function"?Mv()?Cv(e,r):"ease-out":mv(e)?ga(e):Array.isArray(e)?e.map(s=>Ov(s,r)||am.easeOut):am[e]}function v2(e,r,s,{delay:i=0,duration:o=300,repeat:c=0,repeatType:d="loop",ease:p="easeOut",times:h}={},g=void 0){const v={[r]:s};h&&(v.offset=h);const b=Ov(p,o);Array.isArray(b)&&(v.easing=b);const w={delay:i,duration:o,easing:Array.isArray(b)?"linear":b,fill:"both",iterations:c+1,direction:d==="reverse"?"alternate":"normal"};return g&&(w.pseudoElement=g),e.animate(v,w)}function Od(e){return typeof e=="function"&&"applyToOptions"in e}function y2({type:e,...r}){return Od(e)&&Mv()?e.applyToOptions(r):(r.duration??(r.duration=300),r.ease??(r.ease="easeOut"),r)}class b2 extends Nd{constructor(r){if(super(),this.finishedTime=null,this.isStopped=!1,!r)return;const{element:s,name:i,keyframes:o,pseudoElement:c,allowFlatten:d=!1,finalKeyframe:p,onComplete:h}=r;this.isPseudoElement=!!c,this.allowFlatten=d,this.options=r,bd(typeof r.type!="string");const g=y2(r);this.animation=v2(s,i,o,g,c),g.autoplay===!1&&this.animation.pause(),this.animation.onfinish=()=>{if(this.finishedTime=this.time,!c){const v=Ad(o,this.options,p,this.speed);this.updateMotionValue?this.updateMotionValue(v):p2(s,i,v),this.animation.cancel()}h?.(),this.notifyFinished()}}play(){this.isStopped||(this.animation.play(),this.state==="finished"&&this.updateFinished())}pause(){this.animation.pause()}complete(){this.animation.finish?.()}cancel(){try{this.animation.cancel()}catch{}}stop(){if(this.isStopped)return;this.isStopped=!0;const{state:r}=this;r==="idle"||r==="finished"||(this.updateMotionValue?this.updateMotionValue():this.commitStyles(),this.isPseudoElement||this.cancel())}commitStyles(){this.isPseudoElement||this.animation.commitStyles?.()}get duration(){const r=this.animation.effect?.getComputedTiming?.().duration||0;return gn(Number(r))}get time(){return gn(Number(this.animation.currentTime)||0)}set time(r){this.finishedTime=null,this.animation.currentTime=Qr(r)}get speed(){return this.animation.playbackRate}set speed(r){r<0&&(this.finishedTime=null),this.animation.playbackRate=r}get state(){return this.finishedTime!==null?"finished":this.animation.playState}get startTime(){return Number(this.animation.startTime)}set startTime(r){this.animation.startTime=r}attachTimeline({timeline:r,observe:s}){return this.allowFlatten&&this.animation.effect?.updateTiming({easing:"linear"}),this.animation.onfinish=null,r&&h2()?(this.animation.timeline=r,xi):s(this)}}const Lv={anticipate:uv,backInOut:cv,circInOut:dv};function x2(e){return e in Lv}function w2(e){typeof e.ease=="string"&&x2(e.ease)&&(e.ease=Lv[e.ease])}const om=10;class _2 extends b2{constructor(r){w2(r),Av(r),super(r),r.startTime&&(this.startTime=r.startTime),this.options=r}updateMotionValue(r){const{motionValue:s,onUpdate:i,onComplete:o,element:c,...d}=this.options;if(!s)return;if(r!==void 0){s.set(r);return}const p=new Id({...d,autoplay:!1}),h=Qr(this.finishedTime??this.time);s.setWithVelocity(p.sample(h-om).value,p.sample(h).value,om),p.stop()}}const lm=(e,r)=>r==="zIndex"?!1:!!(typeof e=="number"||Array.isArray(e)||typeof e=="string"&&(_i.test(e)||e==="0")&&!e.startsWith("url("));function S2(e){const r=e[0];if(e.length===1)return!0;for(let s=0;s<e.length;s++)if(e[s]!==r)return!0}function k2(e,r,s,i){const o=e[0];if(o===null)return!1;if(r==="display"||r==="visibility")return!0;const c=e[e.length-1],d=lm(o,r),p=lm(c,r);return!d||!p?!1:S2(e)||(s==="spring"||Od(s))&&i}function C2(e){return tv(e)&&"offsetHeight"in e}const E2=new Set(["opacity","clipPath","filter","transform"]),T2=xd(()=>Object.hasOwnProperty.call(Element.prototype,"animate"));function P2(e){const{motionValue:r,name:s,repeatDelay:i,repeatType:o,damping:c,type:d}=e;if(!C2(r?.owner?.current))return!1;const{onUpdate:p,transformTemplate:h}=r.owner.getProps();return T2()&&s&&E2.has(s)&&(s!=="transform"||!h)&&!p&&!i&&o!=="mirror"&&c!==0&&d!=="inertia"}const R2=40;class A2 extends Nd{constructor({autoplay:r=!0,delay:s=0,type:i="keyframes",repeat:o=0,repeatDelay:c=0,repeatType:d="loop",keyframes:p,name:h,motionValue:g,element:v,...b}){super(),this.stop=()=>{this._animation&&(this._animation.stop(),this.stopTimeline?.()),this.keyframeResolver?.cancel()},this.createdAt=xr.now();const w={autoplay:r,delay:s,type:i,repeat:o,repeatDelay:c,repeatType:d,name:h,motionValue:g,element:v,...b},j=v?.KeyframeResolver||Md;this.keyframeResolver=new j(p,(L,N,I)=>this.onKeyframesResolved(L,N,w,!I),h,g,v),this.keyframeResolver?.scheduleResolve()}onKeyframesResolved(r,s,i,o){this.keyframeResolver=void 0;const{name:c,type:d,velocity:p,delay:h,isHandoff:g,onUpdate:v}=i;this.resolvedAt=xr.now(),k2(r,c,d,p)||((vn.instantAnimations||!h)&&v?.(Ad(r,i,s)),r[0]=r[r.length-1],i.duration=0,i.repeat=0);const w={startTime:o?this.resolvedAt?this.resolvedAt-this.createdAt>R2?this.resolvedAt:this.createdAt:this.createdAt:void 0,finalKeyframe:s,...i,keyframes:r},j=!g&&P2(w)?new _2({...w,element:w.motionValue.owner.current}):new Id(w);j.finished.then(()=>this.notifyFinished()).catch(xi),this.pendingTimeline&&(this.stopTimeline=j.attachTimeline(this.pendingTimeline),this.pendingTimeline=void 0),this._animation=j}get finished(){return this._animation?this.animation.finished:this._finished}then(r,s){return this.finished.finally(r).then(()=>{})}get animation(){return this._animation||(this.keyframeResolver?.resume(),d2()),this._animation}get duration(){return this.animation.duration}get time(){return this.animation.time}set time(r){this.animation.time=r}get speed(){return this.animation.speed}get state(){return this.animation.state}set speed(r){this.animation.speed=r}get startTime(){return this.animation.startTime}attachTimeline(r){return this._animation?this.stopTimeline=this.animation.attachTimeline(r):this.pendingTimeline=r,()=>this.stop()}play(){this.animation.play()}pause(){this.animation.pause()}complete(){this.animation.complete()}cancel(){this._animation&&this.animation.cancel(),this.keyframeResolver?.cancel()}}class N2{constructor(r){this.stop=()=>this.runAll("stop"),this.animations=r.filter(Boolean)}get finished(){return Promise.all(this.animations.map(r=>r.finished))}getAll(r){return this.animations[0][r]}setAll(r,s){for(let i=0;i<this.animations.length;i++)this.animations[i][r]=s}attachTimeline(r){const s=this.animations.map(i=>i.attachTimeline(r));return()=>{s.forEach((i,o)=>{i&&i(),this.animations[o].stop()})}}get time(){return this.getAll("time")}set time(r){this.setAll("time",r)}get speed(){return this.getAll("speed")}set speed(r){this.setAll("speed",r)}get state(){return this.getAll("state")}get startTime(){return this.getAll("startTime")}get duration(){let r=0;for(let s=0;s<this.animations.length;s++)r=Math.max(r,this.animations[s].duration);return r}runAll(r){this.animations.forEach(s=>s[r]())}play(){this.runAll("play")}pause(){this.runAll("pause")}cancel(){this.runAll("cancel")}complete(){this.runAll("complete")}}class I2 extends N2{then(r,s){return this.finished.finally(r).then(()=>{})}}const M2=/^var\(--(?:([\w-]+)|([\w-]+), ?([a-zA-Z\d ()%#.,-]+))\)/u;function O2(e){const r=M2.exec(e);if(!r)return[,];const[,s,i,o]=r;return[`--${s??i}`,o]}function jv(e,r,s=1){const[i,o]=O2(e);if(!i)return;const c=window.getComputedStyle(r).getPropertyValue(i);if(c){const d=c.trim();return ev(d)?parseFloat(d):d}return Cd(o)?jv(o,r,s+1):o}function Dv(e,r){return e?.[r]??e?.default??e}const Fv=new Set(["width","height","top","left","right","bottom",...Si]),L2={test:e=>e==="auto",parse:e=>e},Vv=e=>r=>r.test(e),Uv=[wi,Ee,di,qn,E1,C1,L2],cm=e=>Uv.find(Vv(e));function j2(e){return typeof e=="number"?e===0:e!==null?e==="none"||e==="0"||rv(e):!0}const D2=new Set(["brightness","contrast","saturate","opacity"]);function F2(e){const[r,s]=e.slice(0,-1).split("(");if(r==="drop-shadow")return e;const[i]=s.match(Ed)||[];if(!i)return e;const o=s.replace(i,"");let c=D2.has(r)?1:0;return i!==s&&(c*=100),r+"("+c+o+")"}const V2=/\b([a-z-]*)\(.*?\)/gu,td={..._i,getAnimatableNone:e=>{const r=e.match(V2);return r?r.map(F2).join(" "):e}},um={...wi,transform:Math.round},U2={rotate:qn,rotateX:qn,rotateY:qn,rotateZ:qn,scale:tl,scaleX:tl,scaleY:tl,scaleZ:tl,skew:qn,skewX:qn,skewY:qn,distance:Ee,translateX:Ee,translateY:Ee,translateZ:Ee,x:Ee,y:Ee,z:Ee,perspective:Ee,transformPerspective:Ee,opacity:Ca,originX:Yh,originY:Yh,originZ:Ee},Ld={borderWidth:Ee,borderTopWidth:Ee,borderRightWidth:Ee,borderBottomWidth:Ee,borderLeftWidth:Ee,borderRadius:Ee,radius:Ee,borderTopLeftRadius:Ee,borderTopRightRadius:Ee,borderBottomRightRadius:Ee,borderBottomLeftRadius:Ee,width:Ee,maxWidth:Ee,height:Ee,maxHeight:Ee,top:Ee,right:Ee,bottom:Ee,left:Ee,padding:Ee,paddingTop:Ee,paddingRight:Ee,paddingBottom:Ee,paddingLeft:Ee,margin:Ee,marginTop:Ee,marginRight:Ee,marginBottom:Ee,marginLeft:Ee,backgroundPositionX:Ee,backgroundPositionY:Ee,...U2,zIndex:um,fillOpacity:Ca,strokeOpacity:Ca,numOctaves:um},$2={...Ld,color:vt,backgroundColor:vt,outlineColor:vt,fill:vt,stroke:vt,borderColor:vt,borderTopColor:vt,borderRightColor:vt,borderBottomColor:vt,borderLeftColor:vt,filter:td,WebkitFilter:td},$v=e=>$2[e];function Bv(e,r){let s=$v(e);return s!==td&&(s=_i),s.getAnimatableNone?s.getAnimatableNone(r):void 0}const B2=new Set(["auto","none","0"]);function z2(e,r,s){let i=0,o;for(;i<e.length&&!o;){const c=e[i];typeof c=="string"&&!B2.has(c)&&Ea(c).values.length&&(o=e[i]),i++}if(o&&s)for(const c of r)e[c]=Bv(s,o)}class Z2 extends Md{constructor(r,s,i,o,c){super(r,s,i,o,c,!0)}readKeyframes(){const{unresolvedKeyframes:r,element:s,name:i}=this;if(!s||!s.current)return;super.readKeyframes();for(let h=0;h<r.length;h++){let g=r[h];if(typeof g=="string"&&(g=g.trim(),Cd(g))){const v=jv(g,s.current);v!==void 0&&(r[h]=v),h===r.length-1&&(this.finalKeyframe=g)}}if(this.resolveNoneKeyframes(),!Fv.has(i)||r.length!==2)return;const[o,c]=r,d=cm(o),p=cm(c);if(d!==p)if(im(d)&&im(p))for(let h=0;h<r.length;h++){const g=r[h];typeof g=="string"&&(r[h]=parseFloat(g))}else Ps[i]&&(this.needsMeasurement=!0)}resolveNoneKeyframes(){const{unresolvedKeyframes:r,name:s}=this,i=[];for(let o=0;o<r.length;o++)(r[o]===null||j2(r[o]))&&i.push(o);i.length&&z2(r,i,s)}measureInitialState(){const{element:r,unresolvedKeyframes:s,name:i}=this;if(!r||!r.current)return;i==="height"&&(this.suspendedScrollY=window.pageYOffset),this.measuredOrigin=Ps[i](r.measureViewportBox(),window.getComputedStyle(r.current)),s[0]=this.measuredOrigin;const o=s[s.length-1];o!==void 0&&r.getValue(i,o).jump(o,!1)}measureEndState(){const{element:r,name:s,unresolvedKeyframes:i}=this;if(!r||!r.current)return;const o=r.getValue(s);o&&o.jump(this.measuredOrigin,!1);const c=i.length-1,d=i[c];i[c]=Ps[s](r.measureViewportBox(),window.getComputedStyle(r.current)),d!==null&&this.finalKeyframe===void 0&&(this.finalKeyframe=d),this.removedTransforms?.length&&this.removedTransforms.forEach(([p,h])=>{r.getValue(p).set(h)}),this.resolveNoneKeyframes()}}function H2(e,r,s){if(e instanceof EventTarget)return[e];if(typeof e=="string"){let i=document;const o=s?.[e]??i.querySelectorAll(e);return o?Array.from(o):[]}return Array.from(e)}const zv=(e,r)=>r&&typeof e=="number"?r.transform(e):e,dm=30,W2=e=>!isNaN(parseFloat(e));class G2{constructor(r,s={}){this.canTrackVelocity=null,this.events={},this.updateAndNotify=(i,o=!0)=>{const c=xr.now();if(this.updatedAt!==c&&this.setPrevFrameValue(),this.prev=this.current,this.setCurrent(i),this.current!==this.prev&&(this.events.change?.notify(this.current),this.dependents))for(const d of this.dependents)d.dirty();o&&this.events.renderRequest?.notify(this.current)},this.hasAnimated=!1,this.setCurrent(r),this.owner=s.owner}setCurrent(r){this.current=r,this.updatedAt=xr.now(),this.canTrackVelocity===null&&r!==void 0&&(this.canTrackVelocity=W2(this.current))}setPrevFrameValue(r=this.current){this.prevFrameValue=r,this.prevUpdatedAt=this.updatedAt}onChange(r){return this.on("change",r)}on(r,s){this.events[r]||(this.events[r]=new nv);const i=this.events[r].add(s);return r==="change"?()=>{i(),yn.read(()=>{this.events.change.getSize()||this.stop()})}:i}clearListeners(){for(const r in this.events)this.events[r].clear()}attach(r,s){this.passiveEffect=r,this.stopPassiveEffect=s}set(r,s=!0){!s||!this.passiveEffect?this.updateAndNotify(r,s):this.passiveEffect(r,this.updateAndNotify)}setWithVelocity(r,s,i){this.set(s),this.prev=void 0,this.prevFrameValue=r,this.prevUpdatedAt=this.updatedAt-i}jump(r,s=!0){this.updateAndNotify(r),this.prev=r,this.prevUpdatedAt=this.prevFrameValue=void 0,s&&this.stop(),this.stopPassiveEffect&&this.stopPassiveEffect()}dirty(){this.events.change?.notify(this.current)}addDependent(r){this.dependents||(this.dependents=new Set),this.dependents.add(r)}removeDependent(r){this.dependents&&this.dependents.delete(r)}get(){return this.current}getPrevious(){return this.prev}getVelocity(){const r=xr.now();if(!this.canTrackVelocity||this.prevFrameValue===void 0||r-this.updatedAt>dm)return 0;const s=Math.min(this.updatedAt-this.prevUpdatedAt,dm);return sv(parseFloat(this.current)-parseFloat(this.prevFrameValue),s)}start(r){return this.stop(),new Promise(s=>{this.hasAnimated=!0,this.animation=r(s),this.events.animationStart&&this.events.animationStart.notify()}).then(()=>{this.events.animationComplete&&this.events.animationComplete.notify(),this.clearAnimation()})}stop(){this.animation&&(this.animation.stop(),this.events.animationCancel&&this.events.animationCancel.notify()),this.clearAnimation()}isAnimating(){return!!this.animation}clearAnimation(){delete this.animation}destroy(){this.dependents?.clear(),this.events.destroy?.notify(),this.clearListeners(),this.stop(),this.stopPassiveEffect&&this.stopPassiveEffect()}}function Pa(e,r){return new G2(e,r)}function Zv(e){return tv(e)&&"ownerSVGElement"in e}function K2(e){return Zv(e)&&e.tagName==="svg"}const Ht=e=>!!(e&&e.getVelocity),q2=[...Uv,vt,_i],X2=e=>q2.find(Vv(e)),fm={animation:["animate","variants","whileHover","whileTap","exit","whileInView","whileFocus","whileDrag"],exit:["exit"],drag:["drag","dragControls"],focus:["whileFocus"],hover:["whileHover","onHoverStart","onHoverEnd"],tap:["whileTap","onTap","onTapStart","onTapCancel"],pan:["onPan","onPanStart","onPanSessionStart","onPanEnd"],inView:["whileInView","onViewportEnter","onViewportLeave"],layout:["layout","layoutId"]},rd={};for(const e in fm)rd[e]={isEnabled:r=>fm[e].some(s=>!!r[s])};function Y2(e){return e!==null&&typeof e=="object"&&typeof e.start=="function"}function Q2(e){return typeof e=="string"||Array.isArray(e)}const J2=["animate","whileInView","whileFocus","whileHover","whileTap","whileDrag","exit"],e_=["initial",...J2];function Hv(e){return Y2(e.animate)||e_.some(r=>Q2(e[r]))}function t_(e){return!!(Hv(e)||e.variants)}const jd=e=>e.replace(/([a-z])([A-Z])/gu,"$1-$2").toLowerCase(),r_="framerAppearId",n_="data-"+jd(r_),s_={};function i_(e,{layout:r,layoutId:s}){return ki.has(e)||e.startsWith("origin")||(r||s!==void 0)&&(!!s_[e]||e==="opacity")}const a_={x:"translateX",y:"translateY",z:"translateZ",transformPerspective:"perspective"},o_=Si.length;function l_(e,r,s){let i="",o=!0;for(let c=0;c<o_;c++){const d=Si[c],p=e[d];if(p===void 0)continue;let h=!0;if(typeof p=="number"?h=p===(d.startsWith("scale")?1:0):h=parseFloat(p)===0,!h||s){const g=zv(p,Ld[d]);if(!h){o=!1;const v=a_[d]||d;i+=`${v}(${g}) `}s&&(r[d]=g)}}return i=i.trim(),s?i=s(r,o?"":i):o&&(i="none"),i}function Wv(e,r,s){const{style:i,vars:o,transformOrigin:c}=e;let d=!1,p=!1;for(const h in r){const g=r[h];if(ki.has(h)){d=!0;continue}else if(vv(h)){o[h]=g;continue}else{const v=zv(g,Ld[h]);h.startsWith("origin")?(p=!0,c[h]=v):i[h]=v}}if(r.transform||(d||s?i.transform=l_(r,e.transform,s):i.transform&&(i.transform="none")),p){const{originX:h="50%",originY:g="50%",originZ:v=0}=c;i.transformOrigin=`${h} ${g} ${v}`}}const c_={offset:"stroke-dashoffset",array:"stroke-dasharray"},u_={offset:"strokeDashoffset",array:"strokeDasharray"};function d_(e,r,s=1,i=0,o=!0){e.pathLength=1;const c=o?c_:u_;e[c.offset]=Ee.transform(-i);const d=Ee.transform(r),p=Ee.transform(s);e[c.array]=`${d} ${p}`}function f_(e,{attrX:r,attrY:s,attrScale:i,pathLength:o,pathSpacing:c=1,pathOffset:d=0,...p},h,g,v){if(Wv(e,p,g),h){e.style.viewBox&&(e.attrs.viewBox=e.style.viewBox);return}e.attrs=e.style,e.style={};const{attrs:b,style:w}=e;b.transform&&(w.transform=b.transform,delete b.transform),(w.transform||b.transformOrigin)&&(w.transformOrigin=b.transformOrigin??"50% 50%",delete b.transformOrigin),w.transform&&(w.transformBox=v?.transformBox??"fill-box",delete b.transformBox),r!==void 0&&(b.x=r),s!==void 0&&(b.y=s),i!==void 0&&(b.scale=i),o!==void 0&&d_(b,o,c,d,!1)}const p_=e=>typeof e=="string"&&e.toLowerCase()==="svg";function pm(e){const r=[{},{}];return e?.values.forEach((s,i)=>{r[0][i]=s.get(),r[1][i]=s.getVelocity()}),r}function Gv(e,r,s,i){if(typeof r=="function"){const[o,c]=pm(i);r=r(s!==void 0?s:e.custom,o,c)}if(typeof r=="string"&&(r=e.variants&&e.variants[r]),typeof r=="function"){const[o,c]=pm(i);r=r(s!==void 0?s:e.custom,o,c)}return r}function Kv(e,r,s){const{style:i}=e,o={};for(const c in i)(Ht(i[c])||r.style&&Ht(r.style[c])||i_(c,e)||s?.getValue(c)?.liveStyle!==void 0)&&(o[c]=i[c]);return o}function h_(e,r,s){const i=Kv(e,r,s);for(const o in e)if(Ht(e[o])||Ht(r[o])){const c=Si.indexOf(o)!==-1?"attr"+o.charAt(0).toUpperCase()+o.substring(1):o;i[c]=e[o]}return i}function m_(e,r,s){const i=e.getProps();return Gv(i,r,i.custom,e)}const g_=e=>Array.isArray(e);function v_(e,r,s){e.hasValue(r)?e.getValue(r).set(s):e.addValue(r,Pa(s))}function y_(e){return g_(e)?e[e.length-1]||0:e}function b_(e,r){const s=m_(e,r);let{transitionEnd:i={},transition:o={},...c}=s||{};c={...c,...i};for(const d in c){const p=y_(c[d]);v_(e,d,p)}}function x_(e){return!!(Ht(e)&&e.add)}function w_(e,r){const s=e.getValue("willChange");if(x_(s))return s.add(r);if(!s&&vn.WillChange){const i=new vn.WillChange("auto");e.addValue("willChange",i),i.add(r)}}function __(e){return e.props[n_]}const S_=e=>e!==null;function k_(e,{repeat:r,repeatType:s="loop"},i){const o=e.filter(S_),c=r&&s!=="loop"&&r%2===1?0:o.length-1;return o[c]}const C_={type:"spring",stiffness:500,damping:25,restSpeed:10},E_=e=>({type:"spring",stiffness:550,damping:e===0?2*Math.sqrt(550):30,restSpeed:10}),T_={type:"keyframes",duration:.8},P_={type:"keyframes",ease:[.25,.1,.35,1],duration:.3},R_=(e,{keyframes:r})=>r.length>2?T_:ki.has(e)?e.startsWith("scale")?E_(r[1]):C_:P_;function A_({when:e,delay:r,delayChildren:s,staggerChildren:i,staggerDirection:o,repeat:c,repeatType:d,repeatDelay:p,from:h,elapsed:g,...v}){return!!Object.keys(v).length}const qv=(e,r,s,i={},o,c)=>d=>{const p=Dv(i,e)||{},h=p.delay||i.delay||0;let{elapsed:g=0}=i;g=g-Qr(h);const v={keyframes:Array.isArray(s)?s:[null,s],ease:"easeOut",velocity:r.getVelocity(),...p,delay:-g,onUpdate:w=>{r.set(w),p.onUpdate&&p.onUpdate(w)},onComplete:()=>{d(),p.onComplete&&p.onComplete()},name:e,motionValue:r,element:c?void 0:o};A_(p)||Object.assign(v,R_(e,v)),v.duration&&(v.duration=Qr(v.duration)),v.repeatDelay&&(v.repeatDelay=Qr(v.repeatDelay)),v.from!==void 0&&(v.keyframes[0]=v.from);let b=!1;if((v.type===!1||v.duration===0&&!v.repeatDelay)&&(v.duration=0,v.delay===0&&(b=!0)),(vn.instantAnimations||vn.skipAnimations)&&(b=!0,v.duration=0,v.delay=0),v.allowFlatten=!p.type&&!p.ease,b&&!c&&r.get()!==void 0){const w=k_(v.keyframes,p);if(w!==void 0){yn.update(()=>{v.onUpdate(w),v.onComplete()});return}}return p.isSync?new Id(v):new A2(v)};function N_({protectedKeys:e,needsAnimating:r},s){const i=e.hasOwnProperty(s)&&r[s]!==!0;return r[s]=!1,i}function I_(e,r,{delay:s=0,transitionOverride:i,type:o}={}){let{transition:c=e.getDefaultTransition(),transitionEnd:d,...p}=r;i&&(c=i);const h=[],g=o&&e.animationState&&e.animationState.getState()[o];for(const v in p){const b=e.getValue(v,e.latestValues[v]??null),w=p[v];if(w===void 0||g&&N_(g,v))continue;const j={delay:s,...Dv(c||{},v)},L=b.get();if(L!==void 0&&!b.isAnimating&&!Array.isArray(w)&&w===L&&!j.velocity)continue;let N=!1;if(window.MotionHandoffAnimation){const Z=__(e);if(Z){const V=window.MotionHandoffAnimation(Z,v,yn);V!==null&&(j.startTime=V,N=!0)}}w_(e,v),b.start(qv(v,b,w,e.shouldReduceMotion&&Fv.has(v)?{type:!1}:j,e,N));const I=b.animation;I&&h.push(I)}return d&&Promise.all(h).then(()=>{yn.update(()=>{d&&b_(e,d)})}),h}function M_({top:e,left:r,right:s,bottom:i}){return{x:{min:r,max:s},y:{min:e,max:i}}}function O_(e,r){if(!r)return e;const s=r({x:e.left,y:e.top}),i=r({x:e.right,y:e.bottom});return{top:s.y,left:s.x,bottom:i.y,right:i.x}}const hm=()=>({min:0,max:0}),Dd=()=>({x:hm(),y:hm()});function L_(e,r){return M_(O_(e.getBoundingClientRect(),r))}function j_(e,r,s){const i=Ht(e)?e:Pa(e);return i.start(qv("",i,r,s)),i.animation}const nd={current:null},Xv={current:!1};function D_(){if(Xv.current=!0,!!n1)if(window.matchMedia){const e=window.matchMedia("(prefers-reduced-motion)"),r=()=>nd.current=e.matches;e.addEventListener("change",r),r()}else nd.current=!1}const Ra=new WeakMap;function F_(e,r,s){for(const i in r){const o=r[i],c=s[i];if(Ht(o))e.addValue(i,o);else if(Ht(c))e.addValue(i,Pa(o,{owner:e}));else if(c!==o)if(e.hasValue(i)){const d=e.getValue(i);d.liveStyle===!0?d.jump(o):d.hasAnimated||d.set(o)}else{const d=e.getStaticValue(i);e.addValue(i,Pa(d!==void 0?d:o,{owner:e}))}}for(const i in s)r[i]===void 0&&e.removeValue(i);return r}const mm=["AnimationStart","AnimationComplete","Update","BeforeLayoutMeasure","LayoutMeasure","LayoutAnimationStart","LayoutAnimationComplete"];class Yv{scrapeMotionValuesFromProps(r,s,i){return{}}constructor({parent:r,props:s,presenceContext:i,reducedMotionConfig:o,blockInitialAnimation:c,visualState:d},p={}){this.current=null,this.children=new Set,this.isVariantNode=!1,this.isControllingVariants=!1,this.shouldReduceMotion=null,this.values=new Map,this.KeyframeResolver=Md,this.features={},this.valueSubscriptions=new Map,this.prevMotionValues={},this.events={},this.propEventSubscriptions={},this.notifyUpdate=()=>this.notify("Update",this.latestValues),this.render=()=>{this.current&&(this.triggerBuild(),this.renderInstance(this.current,this.renderState,this.props.style,this.projection))},this.renderScheduledAt=0,this.scheduleRender=()=>{const w=xr.now();this.renderScheduledAt<w&&(this.renderScheduledAt=w,yn.render(this.render,!1,!0))};const{latestValues:h,renderState:g}=d;this.latestValues=h,this.baseTarget={...h},this.initialValues=s.initial?{...h}:{},this.renderState=g,this.parent=r,this.props=s,this.presenceContext=i,this.depth=r?r.depth+1:0,this.reducedMotionConfig=o,this.options=p,this.blockInitialAnimation=!!c,this.isControllingVariants=Hv(s),this.isVariantNode=t_(s),this.isVariantNode&&(this.variantChildren=new Set),this.manuallyAnimateOnMount=!!(r&&r.current);const{willChange:v,...b}=this.scrapeMotionValuesFromProps(s,{},this);for(const w in b){const j=b[w];h[w]!==void 0&&Ht(j)&&j.set(h[w],!1)}}mount(r){this.current=r,Ra.set(r,this),this.projection&&!this.projection.instance&&this.projection.mount(r),this.parent&&this.isVariantNode&&!this.isControllingVariants&&(this.removeFromVariantTree=this.parent.addVariantChild(this)),this.values.forEach((s,i)=>this.bindToMotionValue(i,s)),Xv.current||D_(),this.shouldReduceMotion=this.reducedMotionConfig==="never"?!1:this.reducedMotionConfig==="always"?!0:nd.current,this.parent&&this.parent.children.add(this),this.update(this.props,this.presenceContext)}unmount(){this.projection&&this.projection.unmount(),zu(this.notifyUpdate),zu(this.render),this.valueSubscriptions.forEach(r=>r()),this.valueSubscriptions.clear(),this.removeFromVariantTree&&this.removeFromVariantTree(),this.parent&&this.parent.children.delete(this);for(const r in this.events)this.events[r].clear();for(const r in this.features){const s=this.features[r];s&&(s.unmount(),s.isMounted=!1)}this.current=null}bindToMotionValue(r,s){this.valueSubscriptions.has(r)&&this.valueSubscriptions.get(r)();const i=ki.has(r);i&&this.onBindTransform&&this.onBindTransform();const o=s.on("change",p=>{this.latestValues[r]=p,this.props.onUpdate&&yn.preRender(this.notifyUpdate),i&&this.projection&&(this.projection.isTransformDirty=!0)}),c=s.on("renderRequest",this.scheduleRender);let d;window.MotionCheckAppearSync&&(d=window.MotionCheckAppearSync(this,r,s)),this.valueSubscriptions.set(r,()=>{o(),c(),d&&d(),s.owner&&s.stop()})}sortNodePosition(r){return!this.current||!this.sortInstanceNodePosition||this.type!==r.type?0:this.sortInstanceNodePosition(this.current,r.current)}updateFeatures(){let r="animation";for(r in rd){const s=rd[r];if(!s)continue;const{isEnabled:i,Feature:o}=s;if(!this.features[r]&&o&&i(this.props)&&(this.features[r]=new o(this)),this.features[r]){const c=this.features[r];c.isMounted?c.update():(c.mount(),c.isMounted=!0)}}}triggerBuild(){this.build(this.renderState,this.latestValues,this.props)}measureViewportBox(){return this.current?this.measureInstanceViewportBox(this.current,this.props):Dd()}getStaticValue(r){return this.latestValues[r]}setStaticValue(r,s){this.latestValues[r]=s}update(r,s){(r.transformTemplate||this.props.transformTemplate)&&this.scheduleRender(),this.prevProps=this.props,this.props=r,this.prevPresenceContext=this.presenceContext,this.presenceContext=s;for(let i=0;i<mm.length;i++){const o=mm[i];this.propEventSubscriptions[o]&&(this.propEventSubscriptions[o](),delete this.propEventSubscriptions[o]);const c="on"+o,d=r[c];d&&(this.propEventSubscriptions[o]=this.on(o,d))}this.prevMotionValues=F_(this,this.scrapeMotionValuesFromProps(r,this.prevProps,this),this.prevMotionValues),this.handleChildMotionValue&&this.handleChildMotionValue()}getProps(){return this.props}getVariant(r){return this.props.variants?this.props.variants[r]:void 0}getDefaultTransition(){return this.props.transition}getTransformPagePoint(){return this.props.transformPagePoint}getClosestVariantNode(){return this.isVariantNode?this:this.parent?this.parent.getClosestVariantNode():void 0}addVariantChild(r){const s=this.getClosestVariantNode();if(s)return s.variantChildren&&s.variantChildren.add(r),()=>s.variantChildren.delete(r)}addValue(r,s){const i=this.values.get(r);s!==i&&(i&&this.removeValue(r),this.bindToMotionValue(r,s),this.values.set(r,s),this.latestValues[r]=s.get())}removeValue(r){this.values.delete(r);const s=this.valueSubscriptions.get(r);s&&(s(),this.valueSubscriptions.delete(r)),delete this.latestValues[r],this.removeValueFromRenderState(r,this.renderState)}hasValue(r){return this.values.has(r)}getValue(r,s){if(this.props.values&&this.props.values[r])return this.props.values[r];let i=this.values.get(r);return i===void 0&&s!==void 0&&(i=Pa(s===null?void 0:s,{owner:this}),this.addValue(r,i)),i}readValue(r,s){let i=this.latestValues[r]!==void 0||!this.current?this.latestValues[r]:this.getBaseTargetFromProps(this.props,r)??this.readValueFromInstance(this.current,r,this.options);return i!=null&&(typeof i=="string"&&(ev(i)||rv(i))?i=parseFloat(i):!X2(i)&&_i.test(s)&&(i=Bv(r,s)),this.setBaseTarget(r,Ht(i)?i.get():i)),Ht(i)?i.get():i}setBaseTarget(r,s){this.baseTarget[r]=s}getBaseTarget(r){const{initial:s}=this.props;let i;if(typeof s=="string"||typeof s=="object"){const c=Gv(this.props,s,this.presenceContext?.custom);c&&(i=c[r])}if(s&&i!==void 0)return i;const o=this.getBaseTargetFromProps(this.props,r);return o!==void 0&&!Ht(o)?o:this.initialValues[r]!==void 0&&i===void 0?void 0:this.baseTarget[r]}on(r,s){return this.events[r]||(this.events[r]=new nv),this.events[r].add(s)}notify(r,...s){this.events[r]&&this.events[r].notify(...s)}}class Qv extends Yv{constructor(){super(...arguments),this.KeyframeResolver=Z2}sortInstanceNodePosition(r,s){return r.compareDocumentPosition(s)&2?1:-1}getBaseTargetFromProps(r,s){return r.style?r.style[s]:void 0}removeValueFromRenderState(r,{vars:s,style:i}){delete s[r],delete i[r]}handleChildMotionValue(){this.childSubscription&&(this.childSubscription(),delete this.childSubscription);const{children:r}=this.props;Ht(r)&&(this.childSubscription=r.on("change",s=>{this.current&&(this.current.textContent=`${s}`)}))}}function Jv(e,{style:r,vars:s},i,o){const c=e.style;let d;for(d in r)c[d]=r[d];o?.applyProjectionStyles(c,i);for(d in s)c.setProperty(d,s[d])}function V_(e){return window.getComputedStyle(e)}class U_ extends Qv{constructor(){super(...arguments),this.type="html",this.renderInstance=Jv}readValueFromInstance(r,s){if(ki.has(s))return this.projection?.isProjecting?Xu(s):a2(r,s);{const i=V_(r),o=(vv(s)?i.getPropertyValue(s):i[s])||0;return typeof o=="string"?o.trim():o}}measureInstanceViewportBox(r,{transformPagePoint:s}){return L_(r,s)}build(r,s,i){Wv(r,s,i.transformTemplate)}scrapeMotionValuesFromProps(r,s,i){return Kv(r,s,i)}}const e0=new Set(["baseFrequency","diffuseConstant","kernelMatrix","kernelUnitLength","keySplines","keyTimes","limitingConeAngle","markerHeight","markerWidth","numOctaves","targetX","targetY","surfaceScale","specularConstant","specularExponent","stdDeviation","tableValues","viewBox","gradientTransform","pathLength","startOffset","textLength","lengthAdjust"]);function $_(e,r,s,i){Jv(e,r,void 0,i);for(const o in r.attrs)e.setAttribute(e0.has(o)?o:jd(o),r.attrs[o])}class B_ extends Qv{constructor(){super(...arguments),this.type="svg",this.isSVGTag=!1,this.measureInstanceViewportBox=Dd}getBaseTargetFromProps(r,s){return r[s]}readValueFromInstance(r,s){if(ki.has(s)){const i=$v(s);return i&&i.default||0}return s=e0.has(s)?s:jd(s),r.getAttribute(s)}scrapeMotionValuesFromProps(r,s,i){return h_(r,s,i)}build(r,s,i){f_(r,s,this.isSVGTag,i.transformTemplate,i.style)}renderInstance(r,s,i,o){$_(r,s,i,o)}mount(r){this.isSVGTag=p_(r.tagName),super.mount(r)}}function Fd(e){return typeof e=="object"&&!Array.isArray(e)}function t0(e,r,s,i){return typeof e=="string"&&Fd(r)?H2(e,s,i):e instanceof NodeList?Array.from(e):Array.isArray(e)?e:[e]}function z_(e,r,s){return e*(r+1)}function gm(e,r,s,i){return typeof r=="number"?r:r.startsWith("-")||r.startsWith("+")?Math.max(0,e+parseFloat(r)):r==="<"?s:r.startsWith("<")?Math.max(0,s+parseFloat(r.slice(1))):i.get(r)??e}function Z_(e,r,s){for(let i=0;i<e.length;i++){const o=e[i];o.at>r&&o.at<s&&(Jg(e,o),i--)}}function H_(e,r,s,i,o,c){Z_(e,o,c);for(let d=0;d<r.length;d++)e.push({value:r[d],at:Ua(o,c,i[d]),easing:hv(s,d)})}function W_(e,r){for(let s=0;s<e.length;s++)e[s]=e[s]/(r+1)}function G_(e,r){return e.at===r.at?e.value===null?1:r.value===null?-1:0:e.at-r.at}const K_="easeInOut";function q_(e,{defaultTransition:r={},...s}={},i,o){const c=r.duration||.3,d=new Map,p=new Map,h={},g=new Map;let v=0,b=0,w=0;for(let j=0;j<e.length;j++){const L=e[j];if(typeof L=="string"){g.set(L,b);continue}else if(!Array.isArray(L)){g.set(L.name,gm(b,L.at,v,g));continue}let[N,I,Z={}]=L;Z.at!==void 0&&(b=gm(b,Z.at,v,g));let V=0;const F=(z,T,Q,ye=0,he=0)=>{const be=X_(z),{delay:Ve=0,times:Ce=Rv(be),type:xe="keyframes",repeat:we,repeatType:Oe,repeatDelay:Ye=0,...He}=T;let{ease:Re=r.ease||"easeOut",duration:K}=T;const fe=typeof Ve=="function"?Ve(ye,he):Ve,J=be.length,C=Od(xe)?xe:o?.[xe||"keyframes"];if(J<=2&&C){let le=100;if(J===2&&J_(be)){const Ie=be[1]-be[0];le=Math.abs(Ie)}const Pe={...He};K!==void 0&&(Pe.duration=Qr(K));const Le=Ev(Pe,le,C);Re=Le.ease,K=Le.duration}K??(K=c);const U=b+fe;Ce.length===1&&Ce[0]===0&&(Ce[1]=1);const oe=Ce.length-be.length;if(oe>0&&Pv(Ce,oe),be.length===1&&be.unshift(null),we){K=z_(K,we);const le=[...be],Pe=[...Ce];Re=Array.isArray(Re)?[...Re]:[Re];const Le=[...Re];for(let Ie=0;Ie<we;Ie++){be.push(...le);for(let je=0;je<le.length;je++)Ce.push(Pe[je]+(Ie+1)),Re.push(je===0?"linear":hv(Le,je-1))}W_(Ce,we)}const Te=U+K;H_(Q,be,Re,Ce,U,Te),V=Math.max(fe+K,V),w=Math.max(Te,w)};if(Ht(N)){const z=vm(N,p);F(I,Z,ym("default",z))}else{const z=t0(N,I,i,h),T=z.length;for(let Q=0;Q<T;Q++){I=I,Z=Z;const ye=z[Q],he=vm(ye,p);for(const be in I)F(I[be],Y_(Z,be),ym(be,he),Q,T)}}v=b,b+=V}return p.forEach((j,L)=>{for(const N in j){const I=j[N];I.sort(G_);const Z=[],V=[],F=[];for(let T=0;T<I.length;T++){const{at:Q,value:ye,easing:he}=I[T];Z.push(ye),V.push(_d(0,w,Q)),F.push(he||"easeOut")}V[0]!==0&&(V.unshift(0),Z.unshift(Z[0]),F.unshift(K_)),V[V.length-1]!==1&&(V.push(1),Z.push(null)),d.has(L)||d.set(L,{keyframes:{},transition:{}});const z=d.get(L);z.keyframes[N]=Z,z.transition[N]={...r,duration:w,ease:F,times:V,...s}}}),d}function vm(e,r){return!r.has(e)&&r.set(e,{}),r.get(e)}function ym(e,r){return r[e]||(r[e]=[]),r[e]}function X_(e){return Array.isArray(e)?e:[e]}function Y_(e,r){return e&&e[r]?{...e,...e[r]}:{...e}}const Q_=e=>typeof e=="number",J_=e=>e.every(Q_);function eS(e,r){return e in r}class tS extends Yv{constructor(){super(...arguments),this.type="object"}readValueFromInstance(r,s){if(eS(s,r)){const i=r[s];if(typeof i=="string"||typeof i=="number")return i}}getBaseTargetFromProps(){}removeValueFromRenderState(r,s){delete s.output[r]}measureInstanceViewportBox(){return Dd()}build(r,s){Object.assign(r.output,s)}renderInstance(r,{output:s}){Object.assign(r,s)}sortInstanceNodePosition(){return 0}}function rS(e){const r={presenceContext:null,props:{},visualState:{renderState:{transform:{},transformOrigin:{},style:{},vars:{},attrs:{}},latestValues:{}}},s=Zv(e)&&!K2(e)?new B_(r):new U_(r);s.mount(e),Ra.set(e,s)}function nS(e){const r={presenceContext:null,props:{},visualState:{renderState:{output:{}},latestValues:{}}},s=new tS(r);s.mount(e),Ra.set(e,s)}function sS(e,r){return Ht(e)||typeof e=="number"||typeof e=="string"&&!Fd(r)}function r0(e,r,s,i){const o=[];if(sS(e,r))o.push(j_(e,Fd(r)&&r.default||r,s&&(s.default||s)));else{const c=t0(e,r,i),d=c.length;for(let p=0;p<d;p++){const h=c[p],g=h instanceof Element?rS:nS;Ra.has(h)||g(h);const v=Ra.get(h),b={...s};"delay"in b&&typeof b.delay=="function"&&(b.delay=b.delay(p,d)),o.push(...I_(v,{...r,transition:b},{}))}}return o}function iS(e,r,s){const i=[];return q_(e,r,s,{spring:Ta}).forEach(({keyframes:c,transition:d},p)=>{i.push(...r0(p,c,d))}),i}function aS(e){return Array.isArray(e)&&e.some(Array.isArray)}function oS(e){function r(s,i,o){let c=[];return aS(s)?c=iS(s,i,e):c=r0(s,i,o,e),new I2(c)}return r}const lS=oS(),ui=O.memo(({blur:e=0,inactiveZone:r=.7,proximity:s=0,spread:i=20,variant:o="default",glow:c=!1,className:d,movementDuration:p=2,borderWidth:h=1,disabled:g=!0})=>{const v=O.useRef(null),b=O.useRef({x:0,y:0}),w=O.useRef(0),j=O.useCallback(L=>{v.current&&(w.current&&cancelAnimationFrame(w.current),w.current=requestAnimationFrame(()=>{const N=v.current;if(!N)return;const{left:I,top:Z,width:V,height:F}=N.getBoundingClientRect(),z=L?.x??b.current.x,T=L?.y??b.current.y;L&&(b.current={x:z,y:T});const Q=[I+V*.5,Z+F*.5],ye=Math.hypot(z-Q[0],T-Q[1]),he=.5*Math.min(V,F)*r;if(ye<he){N.style.setProperty("--active","0");return}const be=z>I-s&&z<I+V+s&&T>Z-s&&T<Z+F+s;if(N.style.setProperty("--active",be?"1":"0"),!be)return;const Ve=parseFloat(N.style.getPropertyValue("--start"))||0,xe=(180*Math.atan2(T-Q[1],z-Q[0])/Math.PI+90-Ve+180)%360-180,we=Ve+xe;lS(Ve,we,{duration:p,ease:[.16,1,.3,1],onUpdate:Oe=>{N.style.setProperty("--start",String(Oe))}})}))},[r,s,p]);return O.useEffect(()=>{if(g)return;const L=()=>j(),N=I=>j(I);return window.addEventListener("scroll",L,{passive:!0}),document.body.addEventListener("pointermove",N,{passive:!0}),()=>{w.current&&cancelAnimationFrame(w.current),window.removeEventListener("scroll",L),document.body.removeEventListener("pointermove",N)}},[j,g]),y.jsxs(y.Fragment,{children:[y.jsx("div",{className:ts("pointer-events-none absolute -inset-px rounded-[inherit] border border-primary/60 shadow-lg transition-opacity duration-300",c&&"opacity-100",o==="white"&&"border-white",g&&"!block")}),y.jsx("div",{ref:v,style:{"--blur":`${e}px`,"--spread":i,"--start":"0","--active":"0","--glowingeffect-border-width":`${h}px`,"--repeating-conic-gradient-times":"5","--gradient":o==="white"?`repeating-conic-gradient(
                  from 236.84deg at 50% 50%,
                  var(--black),
                  var(--black) calc(25% / var(--repeating-conic-gradient-times))
                )`:`radial-gradient(circle, #dd7bbb 10%, #dd7bbb00 20%),
                radial-gradient(circle at 40% 40%, #d79f1e 5%, #d79f1e00 15%),
                radial-gradient(circle at 60% 60%, #5a922c 10%, #5a922c00 20%), 
                radial-gradient(circle at 40% 60%, #4c7894 10%, #4c789400 20%),
                repeating-conic-gradient(
                  from 236.84deg at 50% 50%,
                  #dd7bbb 0%,
                  #d79f1e calc(25% / var(--repeating-conic-gradient-times)),
                  #5a922c calc(50% / var(--repeating-conic-gradient-times)), 
                  #4c7894 calc(75% / var(--repeating-conic-gradient-times)),
                  #dd7bbb calc(100% / var(--repeating-conic-gradient-times))
                )`},className:ts("pointer-events-none absolute inset-0 rounded-[inherit] opacity-100 transition-opacity",c&&"opacity-100",e>0&&"blur-[var(--blur)] ",d,g&&"!hidden"),children:y.jsx("div",{className:ts("glow","rounded-[inherit]",'after:content-["""] after:rounded-[inherit] after:absolute after:inset-[calc(-1*var(--glowingeffect-border-width))]',"after:[border:var(--glowingeffect-border-width)_solid_transparent]","after:[background:var(--gradient)] after:[background-attachment:fixed]","after:opacity-[var(--active)] after:transition-opacity after:duration-300","after:[mask-clip:padding-box,border-box]","after:[mask-composite:intersect]","after:[mask-image:linear-gradient(#0000,#0000),conic-gradient(from_calc((var(--start)-var(--spread))*1deg),#00000000_0deg,#fff,#00000000_calc(var(--spread)*2deg))]")})})]})});ui.displayName="GlowingEffect";const cS=()=>y.jsxs("div",{className:"home",children:[y.jsx("section",{className:"hero",children:y.jsx("div",{className:"container",children:y.jsxs("div",{className:"hero-content",children:[y.jsxs("div",{className:"hero-text",children:[y.jsxs("h1",{className:"hero-title",children:[y.jsx(at,{id:"home.greeting",defaultMessage:"你好，我是 "}),y.jsx("span",{className:"highlight",children:"Chang Jung Lu"})]}),y.jsx("p",{className:"hero-subtitle",children:y.jsx(at,{id:"home.subtitle",defaultMessage:"專業的軟體開發工程師，專精於 React.js、Node.js 和雲端技術"})}),y.jsx("p",{className:"hero-description",children:y.jsx(at,{id:"home.description",defaultMessage:"我致力於創造優秀的數位體驗，結合創新技術與用戶需求，為企業提供高品質的軟體解決方案。"})}),y.jsxs("div",{className:"hero-buttons",children:[y.jsx(ya,{to:"/projects",className:"btn btn-primary",children:y.jsx(at,{id:"home.viewProjects",defaultMessage:"查看作品"})}),y.jsx(ya,{to:"/contact",className:"btn btn-secondary",children:y.jsx(at,{id:"home.contactMe",defaultMessage:"聯絡我"})})]})]}),y.jsx("div",{className:"hero-image",children:y.jsx("div",{className:"profile-placeholder",children:y.jsx("img",{src:Qg,alt:"開發者",style:{width:128,height:128,display:"block",borderRadius:"50%",objectFit:"cover"}})})})]})})}),y.jsx("section",{className:"skills-section",children:y.jsxs("div",{className:"container",children:[y.jsx("h2",{className:"section-title",children:"核心技能"}),y.jsx("p",{className:"section-subtitle",children:"我擅長的技術領域"}),y.jsxs("div",{className:"skills-grid",children:[y.jsxs("div",{className:"skill-card relative overflow-visible rounded-xl border border-gray-200 bg-white p-8 shadow-md transition-all duration-300 hover:shadow-xl",children:[y.jsx(ui,{spread:40,glow:!0,disabled:!1,proximity:64,inactiveZone:.01,borderWidth:3}),y.jsx("div",{className:"skill-icon",children:"⚛️"}),y.jsx("h3",{children:"前端開發"}),y.jsx("p",{children:"React.js, Vue.js, HTML5, CSS3, JavaScript, TypeScript"})]}),y.jsxs("div",{className:"skill-card relative overflow-visible rounded-xl border border-gray-200 bg-white p-8 shadow-md transition-all duration-300 hover:shadow-xl",children:[y.jsx(ui,{spread:40,glow:!0,disabled:!1,proximity:64,inactiveZone:.01,borderWidth:3}),y.jsx("div",{className:"skill-icon",children:"🚀"}),y.jsx("h3",{children:"後端開發"}),y.jsx("p",{children:"Node.js, Express, Django, Spring Boot, RESTful APIs"})]}),y.jsxs("div",{className:"skill-card relative overflow-visible rounded-xl border border-gray-200 bg-white p-8 shadow-md transition-all duration-300 hover:shadow-xl",children:[y.jsx(ui,{spread:40,glow:!0,disabled:!1,proximity:64,inactiveZone:.01,borderWidth:3}),y.jsx("div",{className:"skill-icon",children:"🗄️"}),y.jsx("h3",{children:"資料庫"}),y.jsx("p",{children:"MySQL, PostgreSQL, MongoDB, Redis"})]}),y.jsxs("div",{className:"skill-card relative overflow-visible rounded-xl border border-gray-200 bg-white p-8 shadow-md transition-all duration-300 hover:shadow-xl",children:[y.jsx(ui,{spread:40,glow:!0,disabled:!1,proximity:64,inactiveZone:.01,borderWidth:3}),y.jsx("div",{className:"skill-icon",children:"☁️"}),y.jsx("h3",{children:"雲端服務"}),y.jsx("p",{children:"AWS, Google Cloud Platform, Azure, Docker, Kubernetes"})]})]})]})}),y.jsx("section",{className:"projects-preview",children:y.jsxs("div",{className:"container",children:[y.jsx("h2",{className:"section-title",children:"最新專案"}),y.jsx("p",{className:"section-subtitle",children:"我最近完成的作品"}),y.jsxs("div",{className:"projects-grid",children:[y.jsxs("div",{className:"project-card",children:[y.jsx("div",{className:"project-image",children:y.jsx("div",{className:"project-placeholder",children:"🛒"})}),y.jsxs("div",{className:"project-content",children:[y.jsx("h3",{children:"企業級電商平台"}),y.jsx("p",{children:"使用 React + Node.js 技術棧，提升系統效能 40%，改善用戶體驗。"}),y.jsxs("div",{className:"project-tags",children:[y.jsx("span",{className:"tag",children:"React"}),y.jsx("span",{className:"tag",children:"Node.js"}),y.jsx("span",{className:"tag",children:"MongoDB"})]})]})]}),y.jsxs("div",{className:"project-card",children:[y.jsx("div",{className:"project-image",children:y.jsx("div",{className:"project-placeholder",children:"🤖"})}),y.jsxs("div",{className:"project-content",children:[y.jsx("h3",{children:"AI 數據分析平台"}),y.jsx("p",{children:"負責機器學習模型開發，實現數據處理自動化，節省 60% 人工時間。"}),y.jsxs("div",{className:"project-tags",children:[y.jsx("span",{className:"tag",children:"Python"}),y.jsx("span",{className:"tag",children:"TensorFlow"}),y.jsx("span",{className:"tag",children:"AWS"})]})]})]})]}),y.jsx("div",{className:"text-center",children:y.jsx(ya,{to:"/projects",className:"btn btn-primary",children:"查看更多專案"})})]})})]}),uS=()=>y.jsxs("div",{className:"about",children:[y.jsx("section",{className:"about-hero",children:y.jsxs("div",{className:"container",children:[y.jsx("div",{className:"profile-placeholder",children:y.jsx("img",{src:Qg,alt:"開發者",style:{width:80,height:80,display:"block",borderRadius:"50%",objectFit:"cover"}})}),y.jsx("h1",{className:"section-title",children:y.jsx(at,{id:"about.title",defaultMessage:"關於我"})}),y.jsx("p",{className:"section-subtitle",children:y.jsx(at,{id:"about.subtitle",defaultMessage:"了解更多關於我的背景和專業經驗"})})]})}),y.jsx("section",{className:"about-content",children:y.jsx("div",{className:"container",children:y.jsxs("div",{className:"about-grid",children:[y.jsxs("div",{className:"about-text",children:[y.jsx("h2",{children:"專業概述"}),y.jsx("p",{children:"我是一名充滿熱情的軟體開發工程師，擁有豐富的全端開發經驗。 我專注於使用現代技術棧創建高效能、可擴展的應用程式。"}),y.jsx("p",{children:"在過去的幾年裡，我參與了多個大型專案的開發，從電商平台到企業級管理系統， 每個專案都讓我更深入地理解如何將技術與業務需求完美結合。"}),y.jsx("p",{children:"我熱愛學習新技術，並且善於將複雜的技術概念轉化為簡單易懂的解決方案。 我相信優秀的程式碼不僅要能運行，更要易於維護和擴展。"})]}),y.jsxs("div",{className:"about-stats",children:[y.jsx(ui,{spread:40,glow:!0,disabled:!1,proximity:64,inactiveZone:.01,borderWidth:3}),y.jsxs("div",{className:"stat-card",children:[y.jsx("div",{className:"stat-number",children:"5+"}),y.jsx("div",{className:"stat-label",children:"年開發經驗"})]}),y.jsxs("div",{className:"stat-card",children:[y.jsx("div",{className:"stat-number",children:"20+"}),y.jsx("div",{className:"stat-label",children:"完成專案"})]}),y.jsxs("div",{className:"stat-card",children:[y.jsx("div",{className:"stat-number",children:"15+"}),y.jsx("div",{className:"stat-label",children:"技術技能"})]}),y.jsxs("div",{className:"stat-card",children:[y.jsx("div",{className:"stat-number",children:"100%"}),y.jsx("div",{className:"stat-label",children:"客戶滿意度"})]})]})]})})}),y.jsx("section",{className:"experience-section",children:y.jsxs("div",{className:"container",children:[y.jsx("h2",{className:"section-title",children:"工作經驗"}),y.jsxs("div",{className:"timeline",children:[y.jsx("div",{className:"timeline-item",children:y.jsxs("div",{className:"timeline-content",children:[y.jsx("h3",{children:"資深全端工程師"}),y.jsx("h4",{children:"科技公司 | 2022 - 現在"}),y.jsxs("ul",{children:[y.jsx("li",{children:"負責企業級應用程式的架構設計和開發"}),y.jsx("li",{children:"帶領 5 人開發團隊，提升專案交付效率 30%"}),y.jsx("li",{children:"優化系統效能，減少載入時間 50%"}),y.jsx("li",{children:"實施 CI/CD 流程，縮短部署時間 70%"})]})]})}),y.jsx("div",{className:"timeline-item",children:y.jsxs("div",{className:"timeline-content",children:[y.jsx("h3",{children:"前端工程師"}),y.jsx("h4",{children:"新創公司 | 2020 - 2022"}),y.jsxs("ul",{children:[y.jsx("li",{children:"開發響應式網頁應用程式"}),y.jsx("li",{children:"與設計師和後端工程師密切合作"}),y.jsx("li",{children:"實現複雜的用戶介面互動功能"}),y.jsx("li",{children:"參與產品需求分析和技術選型"})]})]})}),y.jsx("div",{className:"timeline-item",children:y.jsxs("div",{className:"timeline-content",children:[y.jsx("h3",{children:"實習工程師"}),y.jsx("h4",{children:"軟體公司 | 2019 - 2020"}),y.jsxs("ul",{children:[y.jsx("li",{children:"協助開發內部管理系統"}),y.jsx("li",{children:"學習現代前端框架和開發工具"}),y.jsx("li",{children:"參與程式碼審查和測試"}),y.jsx("li",{children:"撰寫技術文件和用戶手冊"})]})]})})]})]})}),y.jsx("section",{className:"education-section",children:y.jsxs("div",{className:"container",children:[y.jsx("h2",{className:"section-title",children:"教育背景"}),y.jsxs("div",{className:"education-grid",children:[y.jsxs("div",{className:"education-card",children:[y.jsx("div",{className:"education-icon",children:"🎓"}),y.jsx("h3",{children:"碩士學位"}),y.jsx("h4",{children:"資訊工程學系"}),y.jsx("p",{children:"國立台灣大學"}),y.jsx("p",{children:"2017 - 2019"})]}),y.jsxs("div",{className:"education-card",children:[y.jsx("div",{className:"education-icon",children:"🎓"}),y.jsx("h3",{children:"學士學位"}),y.jsx("h4",{children:"電腦科學系"}),y.jsx("p",{children:"國立清華大學"}),y.jsx("p",{children:"2013 - 2017"})]})]})]})})]}),dS=[{id:"1",title:"個人網站",description:"使用 React、TypeScript 與 Vite 打造的現代化個人網站。",technologies:["React","TypeScript","Vite","CSS"],links:[{label:"GitHub",url:"https://github.com/yourusername/personal-site"}]}],fS=Vt.memo(({project:e})=>y.jsxs("div",{className:"project-card-large",children:[y.jsx("div",{className:"project-image-large",children:y.jsx("span",{className:"project-placeholder-large",role:"img","aria-label":"專案",children:"💻"})}),y.jsxs("div",{className:"project-content-large",children:[y.jsx("h3",{children:e.title}),y.jsx("p",{children:e.description}),y.jsx("div",{className:"project-technologies",children:e.technologies.map(r=>y.jsx("span",{className:"tech-tag",children:r},r))}),y.jsxs("div",{className:"project-links",children:[e.links.map(r=>y.jsx("a",{href:r.url,target:"_blank",rel:"noopener noreferrer",className:"btn btn-secondary",children:r.label},r.url)),y.jsx("a",{href:"/demo",className:"btn btn-secondary",children:"Demo"})]})]})]})),pS=()=>{const e=O.useMemo(()=>dS,[]);return y.jsxs("div",{className:"projects",children:[y.jsx("section",{className:"projects-hero",children:y.jsxs("div",{className:"container",children:[y.jsx("h1",{className:"section-title",children:y.jsx(at,{id:"projects.title",defaultMessage:"專案作品"})}),y.jsx("p",{className:"section-subtitle",children:y.jsx(at,{id:"projects.subtitle",defaultMessage:"精選專案與技術實踐"})})]})}),y.jsx("section",{className:"projects-grid-section",children:y.jsx("div",{className:"container projects-grid",children:e.map(r=>y.jsx(fS,{project:r},r.id))})})]})};var $a=e=>e.type==="checkbox",Ts=e=>e instanceof Date,Zt=e=>e==null;const n0=e=>typeof e=="object";var pt=e=>!Zt(e)&&!Array.isArray(e)&&n0(e)&&!Ts(e),hS=e=>pt(e)&&e.target?$a(e.target)?e.target.checked:e.target.value:e,mS=e=>e.substring(0,e.search(/\.\d+(\.|$)/))||e,gS=(e,r)=>e.has(mS(r)),vS=e=>{const r=e.constructor&&e.constructor.prototype;return pt(r)&&r.hasOwnProperty("isPrototypeOf")},Vd=typeof window<"u"&&typeof window.HTMLElement<"u"&&typeof document<"u";function Rt(e){let r;const s=Array.isArray(e),i=typeof FileList<"u"?e instanceof FileList:!1;if(e instanceof Date)r=new Date(e);else if(!(Vd&&(e instanceof Blob||i))&&(s||pt(e)))if(r=s?[]:{},!s&&!vS(e))r=e;else for(const o in e)e.hasOwnProperty(o)&&(r[o]=Rt(e[o]));else return e;return r}var kl=e=>/^\w*$/.test(e),bt=e=>e===void 0,Ud=e=>Array.isArray(e)?e.filter(Boolean):[],$d=e=>Ud(e.replace(/["|']|\]/g,"").split(/\.|\[/)),ae=(e,r,s)=>{if(!r||!pt(e))return s;const i=(kl(r)?[r]:$d(r)).reduce((o,c)=>Zt(o)?o:o[c],e);return bt(i)||i===e?bt(e[r])?s:e[r]:i},qr=e=>typeof e=="boolean",Je=(e,r,s)=>{let i=-1;const o=kl(r)?[r]:$d(r),c=o.length,d=c-1;for(;++i<c;){const p=o[i];let h=s;if(i!==d){const g=e[p];h=pt(g)||Array.isArray(g)?g:isNaN(+o[i+1])?{}:[]}if(p==="__proto__"||p==="constructor"||p==="prototype")return;e[p]=h,e=e[p]}};const bm={BLUR:"blur",FOCUS_OUT:"focusout"},Dr={onBlur:"onBlur",onChange:"onChange",onSubmit:"onSubmit",onTouched:"onTouched",all:"all"},hn={max:"max",min:"min",maxLength:"maxLength",minLength:"minLength",pattern:"pattern",required:"required",validate:"validate"},yS=Vt.createContext(null);yS.displayName="HookFormContext";var bS=(e,r,s,i=!0)=>{const o={defaultValues:r._defaultValues};for(const c in e)Object.defineProperty(o,c,{get:()=>{const d=c;return r._proxyFormState[d]!==Dr.all&&(r._proxyFormState[d]=!i||Dr.all),e[d]}});return o};const xS=typeof window<"u"?O.useLayoutEffect:O.useEffect;var Yr=e=>typeof e=="string",wS=(e,r,s,i,o)=>Yr(e)?(i&&r.watch.add(e),ae(s,e,o)):Array.isArray(e)?e.map(c=>(i&&r.watch.add(c),ae(s,c))):(i&&(r.watchAll=!0),s),Bd=(e,r,s,i,o)=>r?{...s[e],types:{...s[e]&&s[e].types?s[e].types:{},[i]:o||!0}}:{},wa=e=>Array.isArray(e)?e:[e],xm=()=>{let e=[];return{get observers(){return e},next:o=>{for(const c of e)c.next&&c.next(o)},subscribe:o=>(e.push(o),{unsubscribe:()=>{e=e.filter(c=>c!==o)}}),unsubscribe:()=>{e=[]}}},sd=e=>Zt(e)||!n0(e);function Yn(e,r,s=new WeakSet){if(sd(e)||sd(r))return e===r;if(Ts(e)&&Ts(r))return e.getTime()===r.getTime();const i=Object.keys(e),o=Object.keys(r);if(i.length!==o.length)return!1;if(s.has(e)||s.has(r))return!0;s.add(e),s.add(r);for(const c of i){const d=e[c];if(!o.includes(c))return!1;if(c!=="ref"){const p=r[c];if(Ts(d)&&Ts(p)||pt(d)&&pt(p)||Array.isArray(d)&&Array.isArray(p)?!Yn(d,p,s):d!==p)return!1}}return!0}var rr=e=>pt(e)&&!Object.keys(e).length,zd=e=>e.type==="file",Fr=e=>typeof e=="function",ml=e=>{if(!Vd)return!1;const r=e?e.ownerDocument:0;return e instanceof(r&&r.defaultView?r.defaultView.HTMLElement:HTMLElement)},s0=e=>e.type==="select-multiple",Zd=e=>e.type==="radio",_S=e=>Zd(e)||$a(e),wu=e=>ml(e)&&e.isConnected;function SS(e,r){const s=r.slice(0,-1).length;let i=0;for(;i<s;)e=bt(e)?i++:e[r[i++]];return e}function kS(e){for(const r in e)if(e.hasOwnProperty(r)&&!bt(e[r]))return!1;return!0}function gt(e,r){const s=Array.isArray(r)?r:kl(r)?[r]:$d(r),i=s.length===1?e:SS(e,s),o=s.length-1,c=s[o];return i&&delete i[c],o!==0&&(pt(i)&&rr(i)||Array.isArray(i)&&kS(i))&&gt(e,s.slice(0,-1)),e}var i0=e=>{for(const r in e)if(Fr(e[r]))return!0;return!1};function gl(e,r={}){const s=Array.isArray(e);if(pt(e)||s)for(const i in e)Array.isArray(e[i])||pt(e[i])&&!i0(e[i])?(r[i]=Array.isArray(e[i])?[]:{},gl(e[i],r[i])):Zt(e[i])||(r[i]=!0);return r}function a0(e,r,s){const i=Array.isArray(e);if(pt(e)||i)for(const o in e)Array.isArray(e[o])||pt(e[o])&&!i0(e[o])?bt(r)||sd(s[o])?s[o]=Array.isArray(e[o])?gl(e[o],[]):{...gl(e[o])}:a0(e[o],Zt(r)?{}:r[o],s[o]):s[o]=!Yn(e[o],r[o]);return s}var ca=(e,r)=>a0(e,r,gl(r));const wm={value:!1,isValid:!1},_m={value:!0,isValid:!0};var o0=e=>{if(Array.isArray(e)){if(e.length>1){const r=e.filter(s=>s&&s.checked&&!s.disabled).map(s=>s.value);return{value:r,isValid:!!r.length}}return e[0].checked&&!e[0].disabled?e[0].attributes&&!bt(e[0].attributes.value)?bt(e[0].value)||e[0].value===""?_m:{value:e[0].value,isValid:!0}:_m:wm}return wm},l0=(e,{valueAsNumber:r,valueAsDate:s,setValueAs:i})=>bt(e)?e:r?e===""?NaN:e&&+e:s&&Yr(e)?new Date(e):i?i(e):e;const Sm={isValid:!1,value:null};var c0=e=>Array.isArray(e)?e.reduce((r,s)=>s&&s.checked&&!s.disabled?{isValid:!0,value:s.value}:r,Sm):Sm;function km(e){const r=e.ref;return zd(r)?r.files:Zd(r)?c0(e.refs).value:s0(r)?[...r.selectedOptions].map(({value:s})=>s):$a(r)?o0(e.refs).value:l0(bt(r.value)?e.ref.value:r.value,e)}var CS=(e,r,s,i)=>{const o={};for(const c of e){const d=ae(r,c);d&&Je(o,c,d._f)}return{criteriaMode:s,names:[...e],fields:o,shouldUseNativeValidation:i}},vl=e=>e instanceof RegExp,ua=e=>bt(e)?e:vl(e)?e.source:pt(e)?vl(e.value)?e.value.source:e.value:e,Cm=e=>({isOnSubmit:!e||e===Dr.onSubmit,isOnBlur:e===Dr.onBlur,isOnChange:e===Dr.onChange,isOnAll:e===Dr.all,isOnTouch:e===Dr.onTouched});const Em="AsyncFunction";var ES=e=>!!e&&!!e.validate&&!!(Fr(e.validate)&&e.validate.constructor.name===Em||pt(e.validate)&&Object.values(e.validate).find(r=>r.constructor.name===Em)),TS=e=>e.mount&&(e.required||e.min||e.max||e.maxLength||e.minLength||e.pattern||e.validate),Tm=(e,r,s)=>!s&&(r.watchAll||r.watch.has(e)||[...r.watch].some(i=>e.startsWith(i)&&/^\.\w+/.test(e.slice(i.length))));const _a=(e,r,s,i)=>{for(const o of s||Object.keys(e)){const c=ae(e,o);if(c){const{_f:d,...p}=c;if(d){if(d.refs&&d.refs[0]&&r(d.refs[0],o)&&!i)return!0;if(d.ref&&r(d.ref,d.name)&&!i)return!0;if(_a(p,r))break}else if(pt(p)&&_a(p,r))break}}};function Pm(e,r,s){const i=ae(e,s);if(i||kl(s))return{error:i,name:s};const o=s.split(".");for(;o.length;){const c=o.join("."),d=ae(r,c),p=ae(e,c);if(d&&!Array.isArray(d)&&s!==c)return{name:s};if(p&&p.type)return{name:c,error:p};if(p&&p.root&&p.root.type)return{name:`${c}.root`,error:p.root};o.pop()}return{name:s}}var PS=(e,r,s,i)=>{s(e);const{name:o,...c}=e;return rr(c)||Object.keys(c).length>=Object.keys(r).length||Object.keys(c).find(d=>r[d]===(!i||Dr.all))},RS=(e,r,s)=>!e||!r||e===r||wa(e).some(i=>i&&(s?i===r:i.startsWith(r)||r.startsWith(i))),AS=(e,r,s,i,o)=>o.isOnAll?!1:!s&&o.isOnTouch?!(r||e):(s?i.isOnBlur:o.isOnBlur)?!e:(s?i.isOnChange:o.isOnChange)?e:!0,NS=(e,r)=>!Ud(ae(e,r)).length&&gt(e,r),IS=(e,r,s)=>{const i=wa(ae(e,s));return Je(i,"root",r[s]),Je(e,s,i),e},ll=e=>Yr(e);function Rm(e,r,s="validate"){if(ll(e)||Array.isArray(e)&&e.every(ll)||qr(e)&&!e)return{type:s,message:ll(e)?e:"",ref:r}}var ai=e=>pt(e)&&!vl(e)?e:{value:e,message:""},Am=async(e,r,s,i,o,c)=>{const{ref:d,refs:p,required:h,maxLength:g,minLength:v,min:b,max:w,pattern:j,validate:L,name:N,valueAsNumber:I,mount:Z}=e._f,V=ae(s,N);if(!Z||r.has(N))return{};const F=p?p[0]:d,z=xe=>{o&&F.reportValidity&&(F.setCustomValidity(qr(xe)?"":xe||""),F.reportValidity())},T={},Q=Zd(d),ye=$a(d),he=Q||ye,be=(I||zd(d))&&bt(d.value)&&bt(V)||ml(d)&&d.value===""||V===""||Array.isArray(V)&&!V.length,Ve=Bd.bind(null,N,i,T),Ce=(xe,we,Oe,Ye=hn.maxLength,He=hn.minLength)=>{const Re=xe?we:Oe;T[N]={type:xe?Ye:He,message:Re,ref:d,...Ve(xe?Ye:He,Re)}};if(c?!Array.isArray(V)||!V.length:h&&(!he&&(be||Zt(V))||qr(V)&&!V||ye&&!o0(p).isValid||Q&&!c0(p).isValid)){const{value:xe,message:we}=ll(h)?{value:!!h,message:h}:ai(h);if(xe&&(T[N]={type:hn.required,message:we,ref:F,...Ve(hn.required,we)},!i))return z(we),T}if(!be&&(!Zt(b)||!Zt(w))){let xe,we;const Oe=ai(w),Ye=ai(b);if(!Zt(V)&&!isNaN(V)){const He=d.valueAsNumber||V&&+V;Zt(Oe.value)||(xe=He>Oe.value),Zt(Ye.value)||(we=He<Ye.value)}else{const He=d.valueAsDate||new Date(V),Re=J=>new Date(new Date().toDateString()+" "+J),K=d.type=="time",fe=d.type=="week";Yr(Oe.value)&&V&&(xe=K?Re(V)>Re(Oe.value):fe?V>Oe.value:He>new Date(Oe.value)),Yr(Ye.value)&&V&&(we=K?Re(V)<Re(Ye.value):fe?V<Ye.value:He<new Date(Ye.value))}if((xe||we)&&(Ce(!!xe,Oe.message,Ye.message,hn.max,hn.min),!i))return z(T[N].message),T}if((g||v)&&!be&&(Yr(V)||c&&Array.isArray(V))){const xe=ai(g),we=ai(v),Oe=!Zt(xe.value)&&V.length>+xe.value,Ye=!Zt(we.value)&&V.length<+we.value;if((Oe||Ye)&&(Ce(Oe,xe.message,we.message),!i))return z(T[N].message),T}if(j&&!be&&Yr(V)){const{value:xe,message:we}=ai(j);if(vl(xe)&&!V.match(xe)&&(T[N]={type:hn.pattern,message:we,ref:d,...Ve(hn.pattern,we)},!i))return z(we),T}if(L){if(Fr(L)){const xe=await L(V,s),we=Rm(xe,F);if(we&&(T[N]={...we,...Ve(hn.validate,we.message)},!i))return z(we.message),T}else if(pt(L)){let xe={};for(const we in L){if(!rr(xe)&&!i)break;const Oe=Rm(await L[we](V,s),F,we);Oe&&(xe={...Oe,...Ve(we,Oe.message)},z(Oe.message),i&&(T[N]=xe))}if(!rr(xe)&&(T[N]={ref:F,...xe},!i))return T}}return z(!0),T};const MS={mode:Dr.onSubmit,reValidateMode:Dr.onChange,shouldFocusError:!0};function OS(e={}){let r={...MS,...e},s={submitCount:0,isDirty:!1,isReady:!1,isLoading:Fr(r.defaultValues),isValidating:!1,isSubmitted:!1,isSubmitting:!1,isSubmitSuccessful:!1,isValid:!1,touchedFields:{},dirtyFields:{},validatingFields:{},errors:r.errors||{},disabled:r.disabled||!1},i={},o=pt(r.defaultValues)||pt(r.values)?Rt(r.defaultValues||r.values)||{}:{},c=r.shouldUnregister?{}:Rt(o),d={action:!1,mount:!1,watch:!1},p={mount:new Set,disabled:new Set,unMount:new Set,array:new Set,watch:new Set},h,g=0;const v={isDirty:!1,dirtyFields:!1,validatingFields:!1,touchedFields:!1,isValidating:!1,isValid:!1,errors:!1};let b={...v};const w={array:xm(),state:xm()},j=r.criteriaMode===Dr.all,L=_=>R=>{clearTimeout(g),g=setTimeout(_,R)},N=async _=>{if(!r.disabled&&(v.isValid||b.isValid||_)){const R=r.resolver?rr((await ye()).errors):await be(i,!0);R!==s.isValid&&w.state.next({isValid:R})}},I=(_,R)=>{!r.disabled&&(v.isValidating||v.validatingFields||b.isValidating||b.validatingFields)&&((_||Array.from(p.mount)).forEach(D=>{D&&(R?Je(s.validatingFields,D,R):gt(s.validatingFields,D))}),w.state.next({validatingFields:s.validatingFields,isValidating:!rr(s.validatingFields)}))},Z=(_,R=[],D,ee,Y=!0,W=!0)=>{if(ee&&D&&!r.disabled){if(d.action=!0,W&&Array.isArray(ae(i,_))){const se=D(ae(i,_),ee.argA,ee.argB);Y&&Je(i,_,se)}if(W&&Array.isArray(ae(s.errors,_))){const se=D(ae(s.errors,_),ee.argA,ee.argB);Y&&Je(s.errors,_,se),NS(s.errors,_)}if((v.touchedFields||b.touchedFields)&&W&&Array.isArray(ae(s.touchedFields,_))){const se=D(ae(s.touchedFields,_),ee.argA,ee.argB);Y&&Je(s.touchedFields,_,se)}(v.dirtyFields||b.dirtyFields)&&(s.dirtyFields=ca(o,c)),w.state.next({name:_,isDirty:Ce(_,R),dirtyFields:s.dirtyFields,errors:s.errors,isValid:s.isValid})}else Je(c,_,R)},V=(_,R)=>{Je(s.errors,_,R),w.state.next({errors:s.errors})},F=_=>{s.errors=_,w.state.next({errors:s.errors,isValid:!1})},z=(_,R,D,ee)=>{const Y=ae(i,_);if(Y){const W=ae(c,_,bt(D)?ae(o,_):D);bt(W)||ee&&ee.defaultChecked||R?Je(c,_,R?W:km(Y._f)):Oe(_,W),d.mount&&N()}},T=(_,R,D,ee,Y)=>{let W=!1,se=!1;const $e={name:_};if(!r.disabled){if(!D||ee){(v.isDirty||b.isDirty)&&(se=s.isDirty,s.isDirty=$e.isDirty=Ce(),W=se!==$e.isDirty);const ze=Yn(ae(o,_),R);se=!!ae(s.dirtyFields,_),ze?gt(s.dirtyFields,_):Je(s.dirtyFields,_,!0),$e.dirtyFields=s.dirtyFields,W=W||(v.dirtyFields||b.dirtyFields)&&se!==!ze}if(D){const ze=ae(s.touchedFields,_);ze||(Je(s.touchedFields,_,D),$e.touchedFields=s.touchedFields,W=W||(v.touchedFields||b.touchedFields)&&ze!==D)}W&&Y&&w.state.next($e)}return W?$e:{}},Q=(_,R,D,ee)=>{const Y=ae(s.errors,_),W=(v.isValid||b.isValid)&&qr(R)&&s.isValid!==R;if(r.delayError&&D?(h=L(()=>V(_,D)),h(r.delayError)):(clearTimeout(g),h=null,D?Je(s.errors,_,D):gt(s.errors,_)),(D?!Yn(Y,D):Y)||!rr(ee)||W){const se={...ee,...W&&qr(R)?{isValid:R}:{},errors:s.errors,name:_};s={...s,...se},w.state.next(se)}},ye=async _=>{I(_,!0);const R=await r.resolver(c,r.context,CS(_||p.mount,i,r.criteriaMode,r.shouldUseNativeValidation));return I(_),R},he=async _=>{const{errors:R}=await ye(_);if(_)for(const D of _){const ee=ae(R,D);ee?Je(s.errors,D,ee):gt(s.errors,D)}else s.errors=R;return R},be=async(_,R,D={valid:!0})=>{for(const ee in _){const Y=_[ee];if(Y){const{_f:W,...se}=Y;if(W){const $e=p.array.has(W.name),ze=Y._f&&ES(Y._f);ze&&v.validatingFields&&I([ee],!0);const St=await Am(Y,p.disabled,c,j,r.shouldUseNativeValidation&&!R,$e);if(ze&&v.validatingFields&&I([ee]),St[W.name]&&(D.valid=!1,R))break;!R&&(ae(St,W.name)?$e?IS(s.errors,St,W.name):Je(s.errors,W.name,St[W.name]):gt(s.errors,W.name))}!rr(se)&&await be(se,R,D)}}return D.valid},Ve=()=>{for(const _ of p.unMount){const R=ae(i,_);R&&(R._f.refs?R._f.refs.every(D=>!wu(D)):!wu(R._f.ref))&&Le(_)}p.unMount=new Set},Ce=(_,R)=>!r.disabled&&(_&&R&&Je(c,_,R),!Yn(J(),o)),xe=(_,R,D)=>wS(_,p,{...d.mount?c:bt(R)?o:Yr(_)?{[_]:R}:R},D,R),we=_=>Ud(ae(d.mount?c:o,_,r.shouldUnregister?ae(o,_,[]):[])),Oe=(_,R,D={})=>{const ee=ae(i,_);let Y=R;if(ee){const W=ee._f;W&&(!W.disabled&&Je(c,_,l0(R,W)),Y=ml(W.ref)&&Zt(R)?"":R,s0(W.ref)?[...W.ref.options].forEach(se=>se.selected=Y.includes(se.value)):W.refs?$a(W.ref)?W.refs.forEach(se=>{(!se.defaultChecked||!se.disabled)&&(Array.isArray(Y)?se.checked=!!Y.find($e=>$e===se.value):se.checked=Y===se.value||!!Y)}):W.refs.forEach(se=>se.checked=se.value===Y):zd(W.ref)?W.ref.value="":(W.ref.value=Y,W.ref.type||w.state.next({name:_,values:Rt(c)})))}(D.shouldDirty||D.shouldTouch)&&T(_,Y,D.shouldTouch,D.shouldDirty,!0),D.shouldValidate&&fe(_)},Ye=(_,R,D)=>{for(const ee in R){if(!R.hasOwnProperty(ee))return;const Y=R[ee],W=_+"."+ee,se=ae(i,W);(p.array.has(_)||pt(Y)||se&&!se._f)&&!Ts(Y)?Ye(W,Y,D):Oe(W,Y,D)}},He=(_,R,D={})=>{const ee=ae(i,_),Y=p.array.has(_),W=Rt(R);Je(c,_,W),Y?(w.array.next({name:_,values:Rt(c)}),(v.isDirty||v.dirtyFields||b.isDirty||b.dirtyFields)&&D.shouldDirty&&w.state.next({name:_,dirtyFields:ca(o,c),isDirty:Ce(_,W)})):ee&&!ee._f&&!Zt(W)?Ye(_,W,D):Oe(_,W,D),Tm(_,p)&&w.state.next({...s}),w.state.next({name:d.mount?_:void 0,values:Rt(c)})},Re=async _=>{d.mount=!0;const R=_.target;let D=R.name,ee=!0;const Y=ae(i,D),W=ze=>{ee=Number.isNaN(ze)||Ts(ze)&&isNaN(ze.getTime())||Yn(ze,ae(c,D,ze))},se=Cm(r.mode),$e=Cm(r.reValidateMode);if(Y){let ze,St;const qt=R.type?km(Y._f):hS(_),At=_.type===bm.BLUR||_.type===bm.FOCUS_OUT,_n=!TS(Y._f)&&!r.resolver&&!ae(s.errors,D)&&!Y._f.deps||AS(At,ae(s.touchedFields,D),s.isSubmitted,$e,se),Tr=Tm(D,p,At);Je(c,D,qt),At?(Y._f.onBlur&&Y._f.onBlur(_),h&&h(0)):Y._f.onChange&&Y._f.onChange(_);const Mt=T(D,qt,At),Vr=!rr(Mt)||Tr;if(!At&&w.state.next({name:D,type:_.type,values:Rt(c)}),_n)return(v.isValid||b.isValid)&&(r.mode==="onBlur"?At&&N():At||N()),Vr&&w.state.next({name:D,...Tr?{}:Mt});if(!At&&Tr&&w.state.next({...s}),r.resolver){const{errors:Ur}=await ye([D]);if(W(qt),ee){const nn=Pm(s.errors,i,D),Sn=Pm(Ur,i,nn.name||D);ze=Sn.error,D=Sn.name,St=rr(Ur)}}else I([D],!0),ze=(await Am(Y,p.disabled,c,j,r.shouldUseNativeValidation))[D],I([D]),W(qt),ee&&(ze?St=!1:(v.isValid||b.isValid)&&(St=await be(i,!0)));ee&&(Y._f.deps&&fe(Y._f.deps),Q(D,St,ze,Mt))}},K=(_,R)=>{if(ae(s.errors,R)&&_.focus)return _.focus(),1},fe=async(_,R={})=>{let D,ee;const Y=wa(_);if(r.resolver){const W=await he(bt(_)?_:Y);D=rr(W),ee=_?!Y.some(se=>ae(W,se)):D}else _?(ee=(await Promise.all(Y.map(async W=>{const se=ae(i,W);return await be(se&&se._f?{[W]:se}:se)}))).every(Boolean),!(!ee&&!s.isValid)&&N()):ee=D=await be(i);return w.state.next({...!Yr(_)||(v.isValid||b.isValid)&&D!==s.isValid?{}:{name:_},...r.resolver||!_?{isValid:D}:{},errors:s.errors}),R.shouldFocus&&!ee&&_a(i,K,_?Y:p.mount),ee},J=_=>{const R={...d.mount?c:o};return bt(_)?R:Yr(_)?ae(R,_):_.map(D=>ae(R,D))},C=(_,R)=>({invalid:!!ae((R||s).errors,_),isDirty:!!ae((R||s).dirtyFields,_),error:ae((R||s).errors,_),isValidating:!!ae(s.validatingFields,_),isTouched:!!ae((R||s).touchedFields,_)}),U=_=>{_&&wa(_).forEach(R=>gt(s.errors,R)),w.state.next({errors:_?s.errors:{}})},oe=(_,R,D)=>{const ee=(ae(i,_,{_f:{}})._f||{}).ref,Y=ae(s.errors,_)||{},{ref:W,message:se,type:$e,...ze}=Y;Je(s.errors,_,{...ze,...R,ref:ee}),w.state.next({name:_,errors:s.errors,isValid:!1}),D&&D.shouldFocus&&ee&&ee.focus&&ee.focus()},Te=(_,R)=>Fr(_)?w.state.subscribe({next:D=>_(xe(void 0,R),D)}):xe(_,R,!0),le=_=>w.state.subscribe({next:R=>{RS(_.name,R.name,_.exact)&&PS(R,_.formState||v,ur,_.reRenderRoot)&&_.callback({values:{...c},...s,...R})}}).unsubscribe,Pe=_=>(d.mount=!0,b={...b,..._.formState},le({..._,formState:b})),Le=(_,R={})=>{for(const D of _?wa(_):p.mount)p.mount.delete(D),p.array.delete(D),R.keepValue||(gt(i,D),gt(c,D)),!R.keepError&&gt(s.errors,D),!R.keepDirty&&gt(s.dirtyFields,D),!R.keepTouched&&gt(s.touchedFields,D),!R.keepIsValidating&&gt(s.validatingFields,D),!r.shouldUnregister&&!R.keepDefaultValue&&gt(o,D);w.state.next({values:Rt(c)}),w.state.next({...s,...R.keepDirty?{isDirty:Ce()}:{}}),!R.keepIsValid&&N()},Ie=({disabled:_,name:R})=>{(qr(_)&&d.mount||_||p.disabled.has(R))&&(_?p.disabled.add(R):p.disabled.delete(R))},je=(_,R={})=>{let D=ae(i,_);const ee=qr(R.disabled)||qr(r.disabled);return Je(i,_,{...D||{},_f:{...D&&D._f?D._f:{ref:{name:_}},name:_,mount:!0,...R}}),p.mount.add(_),D?Ie({disabled:qr(R.disabled)?R.disabled:r.disabled,name:_}):z(_,!0,R.value),{...ee?{disabled:R.disabled||r.disabled}:{},...r.progressive?{required:!!R.required,min:ua(R.min),max:ua(R.max),minLength:ua(R.minLength),maxLength:ua(R.maxLength),pattern:ua(R.pattern)}:{},name:_,onChange:Re,onBlur:Re,ref:Y=>{if(Y){je(_,R),D=ae(i,_);const W=bt(Y.value)&&Y.querySelectorAll&&Y.querySelectorAll("input,select,textarea")[0]||Y,se=_S(W),$e=D._f.refs||[];if(se?$e.find(ze=>ze===W):W===D._f.ref)return;Je(i,_,{_f:{...D._f,...se?{refs:[...$e.filter(wu),W,...Array.isArray(ae(o,_))?[{}]:[]],ref:{type:W.type,name:_}}:{ref:W}}}),z(_,!1,void 0,W)}else D=ae(i,_,{}),D._f&&(D._f.mount=!1),(r.shouldUnregister||R.shouldUnregister)&&!(gS(p.array,_)&&d.action)&&p.unMount.add(_)}}},ht=()=>r.shouldFocusError&&_a(i,K,p.mount),tn=_=>{qr(_)&&(w.state.next({disabled:_}),_a(i,(R,D)=>{const ee=ae(i,D);ee&&(R.disabled=ee._f.disabled||_,Array.isArray(ee._f.refs)&&ee._f.refs.forEach(Y=>{Y.disabled=ee._f.disabled||_}))},0,!1))},cr=(_,R)=>async D=>{let ee;D&&(D.preventDefault&&D.preventDefault(),D.persist&&D.persist());let Y=Rt(c);if(w.state.next({isSubmitting:!0}),r.resolver){const{errors:W,values:se}=await ye();s.errors=W,Y=Rt(se)}else await be(i);if(p.disabled.size)for(const W of p.disabled)gt(Y,W);if(gt(s.errors,"root"),rr(s.errors)){w.state.next({errors:{}});try{await _(Y,D)}catch(W){ee=W}}else R&&await R({...s.errors},D),ht(),setTimeout(ht);if(w.state.next({isSubmitted:!0,isSubmitting:!1,isSubmitSuccessful:rr(s.errors)&&!ee,submitCount:s.submitCount+1,errors:s.errors}),ee)throw ee},Cr=(_,R={})=>{ae(i,_)&&(bt(R.defaultValue)?He(_,Rt(ae(o,_))):(He(_,R.defaultValue),Je(o,_,Rt(R.defaultValue))),R.keepTouched||gt(s.touchedFields,_),R.keepDirty||(gt(s.dirtyFields,_),s.isDirty=R.defaultValue?Ce(_,Rt(ae(o,_))):Ce()),R.keepError||(gt(s.errors,_),v.isValid&&N()),w.state.next({...s}))},Kt=(_,R={})=>{const D=_?Rt(_):o,ee=Rt(D),Y=rr(_),W=Y?o:ee;if(R.keepDefaultValues||(o=D),!R.keepValues){if(R.keepDirtyValues){const se=new Set([...p.mount,...Object.keys(ca(o,c))]);for(const $e of Array.from(se))ae(s.dirtyFields,$e)?Je(W,$e,ae(c,$e)):He($e,ae(W,$e))}else{if(Vd&&bt(_))for(const se of p.mount){const $e=ae(i,se);if($e&&$e._f){const ze=Array.isArray($e._f.refs)?$e._f.refs[0]:$e._f.ref;if(ml(ze)){const St=ze.closest("form");if(St){St.reset();break}}}}if(R.keepFieldsRef)for(const se of p.mount)He(se,ae(W,se));else i={}}c=r.shouldUnregister?R.keepDefaultValues?Rt(o):{}:Rt(W),w.array.next({values:{...W}}),w.state.next({values:{...W}})}p={mount:R.keepDirtyValues?p.mount:new Set,unMount:new Set,array:new Set,disabled:new Set,watch:new Set,watchAll:!1,focus:""},d.mount=!v.isValid||!!R.keepIsValid||!!R.keepDirtyValues,d.watch=!!r.shouldUnregister,w.state.next({submitCount:R.keepSubmitCount?s.submitCount:0,isDirty:Y?!1:R.keepDirty?s.isDirty:!!(R.keepDefaultValues&&!Yn(_,o)),isSubmitted:R.keepIsSubmitted?s.isSubmitted:!1,dirtyFields:Y?{}:R.keepDirtyValues?R.keepDefaultValues&&c?ca(o,c):s.dirtyFields:R.keepDefaultValues&&_?ca(o,_):R.keepDirty?s.dirtyFields:{},touchedFields:R.keepTouched?s.touchedFields:{},errors:R.keepErrors?s.errors:{},isSubmitSuccessful:R.keepIsSubmitSuccessful?s.isSubmitSuccessful:!1,isSubmitting:!1})},rn=(_,R)=>Kt(Fr(_)?_(c):_,R),xn=(_,R={})=>{const D=ae(i,_),ee=D&&D._f;if(ee){const Y=ee.refs?ee.refs[0]:ee.ref;Y.focus&&(Y.focus(),R.shouldSelect&&Fr(Y.select)&&Y.select())}},ur=_=>{s={...s,..._}},Er={control:{register:je,unregister:Le,getFieldState:C,handleSubmit:cr,setError:oe,_subscribe:le,_runSchema:ye,_focusError:ht,_getWatch:xe,_getDirty:Ce,_setValid:N,_setFieldArray:Z,_setDisabledField:Ie,_setErrors:F,_getFieldArray:we,_reset:Kt,_resetDefaultValues:()=>Fr(r.defaultValues)&&r.defaultValues().then(_=>{rn(_,r.resetOptions),w.state.next({isLoading:!1})}),_removeUnmounted:Ve,_disableForm:tn,_subjects:w,_proxyFormState:v,get _fields(){return i},get _formValues(){return c},get _state(){return d},set _state(_){d=_},get _defaultValues(){return o},get _names(){return p},set _names(_){p=_},get _formState(){return s},get _options(){return r},set _options(_){r={...r,..._}}},subscribe:Pe,trigger:fe,register:je,handleSubmit:cr,watch:Te,setValue:He,getValues:J,reset:rn,resetField:Cr,clearErrors:U,unregister:Le,setError:oe,setFocus:xn,getFieldState:C};return{...Er,formControl:Er}}function LS(e={}){const r=Vt.useRef(void 0),s=Vt.useRef(void 0),[i,o]=Vt.useState({isDirty:!1,isValidating:!1,isLoading:Fr(e.defaultValues),isSubmitted:!1,isSubmitting:!1,isSubmitSuccessful:!1,isValid:!1,submitCount:0,dirtyFields:{},touchedFields:{},validatingFields:{},errors:e.errors||{},disabled:e.disabled||!1,isReady:!1,defaultValues:Fr(e.defaultValues)?void 0:e.defaultValues});if(!r.current)if(e.formControl)r.current={...e.formControl,formState:i},e.defaultValues&&!Fr(e.defaultValues)&&e.formControl.reset(e.defaultValues,e.resetOptions);else{const{formControl:d,...p}=OS(e);r.current={...p,formState:i}}const c=r.current.control;return c._options=e,xS(()=>{const d=c._subscribe({formState:c._proxyFormState,callback:()=>o({...c._formState}),reRenderRoot:!0});return o(p=>({...p,isReady:!0})),c._formState.isReady=!0,d},[c]),Vt.useEffect(()=>c._disableForm(e.disabled),[c,e.disabled]),Vt.useEffect(()=>{e.mode&&(c._options.mode=e.mode),e.reValidateMode&&(c._options.reValidateMode=e.reValidateMode)},[c,e.mode,e.reValidateMode]),Vt.useEffect(()=>{e.errors&&(c._setErrors(e.errors),c._focusError())},[c,e.errors]),Vt.useEffect(()=>{e.shouldUnregister&&c._subjects.state.next({values:c._getWatch()})},[c,e.shouldUnregister]),Vt.useEffect(()=>{if(c._proxyFormState.isDirty){const d=c._getDirty();d!==i.isDirty&&c._subjects.state.next({isDirty:d})}},[c,i.isDirty]),Vt.useEffect(()=>{e.values&&!Yn(e.values,s.current)?(c._reset(e.values,{keepFieldsRef:!0,...c._options.resetOptions}),s.current=e.values,o(d=>({...d}))):c._resetDefaultValues()},[c,e.values]),Vt.useEffect(()=>{c._state.mount||(c._setValid(),c._state.mount=!0),c._state.watch&&(c._state.watch=!1,c._subjects.state.next({...c._formState})),c._removeUnmounted()}),r.current.formState=bS(i,c),r.current}var qe;(function(e){e.assertEqual=o=>{};function r(o){}e.assertIs=r;function s(o){throw new Error}e.assertNever=s,e.arrayToEnum=o=>{const c={};for(const d of o)c[d]=d;return c},e.getValidEnumValues=o=>{const c=e.objectKeys(o).filter(p=>typeof o[o[p]]!="number"),d={};for(const p of c)d[p]=o[p];return e.objectValues(d)},e.objectValues=o=>e.objectKeys(o).map(function(c){return o[c]}),e.objectKeys=typeof Object.keys=="function"?o=>Object.keys(o):o=>{const c=[];for(const d in o)Object.prototype.hasOwnProperty.call(o,d)&&c.push(d);return c},e.find=(o,c)=>{for(const d of o)if(c(d))return d},e.isInteger=typeof Number.isInteger=="function"?o=>Number.isInteger(o):o=>typeof o=="number"&&Number.isFinite(o)&&Math.floor(o)===o;function i(o,c=" | "){return o.map(d=>typeof d=="string"?`'${d}'`:d).join(c)}e.joinValues=i,e.jsonStringifyReplacer=(o,c)=>typeof c=="bigint"?c.toString():c})(qe||(qe={}));var Nm;(function(e){e.mergeShapes=(r,s)=>({...r,...s})})(Nm||(Nm={}));const de=qe.arrayToEnum(["string","nan","number","integer","float","boolean","date","bigint","symbol","function","undefined","null","array","object","unknown","promise","void","never","map","set"]),Xn=e=>{switch(typeof e){case"undefined":return de.undefined;case"string":return de.string;case"number":return Number.isNaN(e)?de.nan:de.number;case"boolean":return de.boolean;case"function":return de.function;case"bigint":return de.bigint;case"symbol":return de.symbol;case"object":return Array.isArray(e)?de.array:e===null?de.null:e.then&&typeof e.then=="function"&&e.catch&&typeof e.catch=="function"?de.promise:typeof Map<"u"&&e instanceof Map?de.map:typeof Set<"u"&&e instanceof Set?de.set:typeof Date<"u"&&e instanceof Date?de.date:de.object;default:return de.unknown}},X=qe.arrayToEnum(["invalid_type","invalid_literal","custom","invalid_union","invalid_union_discriminator","invalid_enum_value","unrecognized_keys","invalid_arguments","invalid_return_type","invalid_date","invalid_string","too_small","too_big","invalid_intersection_types","not_multiple_of","not_finite"]);class bn extends Error{get errors(){return this.issues}constructor(r){super(),this.issues=[],this.addIssue=i=>{this.issues=[...this.issues,i]},this.addIssues=(i=[])=>{this.issues=[...this.issues,...i]};const s=new.target.prototype;Object.setPrototypeOf?Object.setPrototypeOf(this,s):this.__proto__=s,this.name="ZodError",this.issues=r}format(r){const s=r||function(c){return c.message},i={_errors:[]},o=c=>{for(const d of c.issues)if(d.code==="invalid_union")d.unionErrors.map(o);else if(d.code==="invalid_return_type")o(d.returnTypeError);else if(d.code==="invalid_arguments")o(d.argumentsError);else if(d.path.length===0)i._errors.push(s(d));else{let p=i,h=0;for(;h<d.path.length;){const g=d.path[h];h===d.path.length-1?(p[g]=p[g]||{_errors:[]},p[g]._errors.push(s(d))):p[g]=p[g]||{_errors:[]},p=p[g],h++}}};return o(this),i}static assert(r){if(!(r instanceof bn))throw new Error(`Not a ZodError: ${r}`)}toString(){return this.message}get message(){return JSON.stringify(this.issues,qe.jsonStringifyReplacer,2)}get isEmpty(){return this.issues.length===0}flatten(r=s=>s.message){const s={},i=[];for(const o of this.issues)if(o.path.length>0){const c=o.path[0];s[c]=s[c]||[],s[c].push(r(o))}else i.push(r(o));return{formErrors:i,fieldErrors:s}}get formErrors(){return this.flatten()}}bn.create=e=>new bn(e);const id=(e,r)=>{let s;switch(e.code){case X.invalid_type:e.received===de.undefined?s="Required":s=`Expected ${e.expected}, received ${e.received}`;break;case X.invalid_literal:s=`Invalid literal value, expected ${JSON.stringify(e.expected,qe.jsonStringifyReplacer)}`;break;case X.unrecognized_keys:s=`Unrecognized key(s) in object: ${qe.joinValues(e.keys,", ")}`;break;case X.invalid_union:s="Invalid input";break;case X.invalid_union_discriminator:s=`Invalid discriminator value. Expected ${qe.joinValues(e.options)}`;break;case X.invalid_enum_value:s=`Invalid enum value. Expected ${qe.joinValues(e.options)}, received '${e.received}'`;break;case X.invalid_arguments:s="Invalid function arguments";break;case X.invalid_return_type:s="Invalid function return type";break;case X.invalid_date:s="Invalid date";break;case X.invalid_string:typeof e.validation=="object"?"includes"in e.validation?(s=`Invalid input: must include "${e.validation.includes}"`,typeof e.validation.position=="number"&&(s=`${s} at one or more positions greater than or equal to ${e.validation.position}`)):"startsWith"in e.validation?s=`Invalid input: must start with "${e.validation.startsWith}"`:"endsWith"in e.validation?s=`Invalid input: must end with "${e.validation.endsWith}"`:qe.assertNever(e.validation):e.validation!=="regex"?s=`Invalid ${e.validation}`:s="Invalid";break;case X.too_small:e.type==="array"?s=`Array must contain ${e.exact?"exactly":e.inclusive?"at least":"more than"} ${e.minimum} element(s)`:e.type==="string"?s=`String must contain ${e.exact?"exactly":e.inclusive?"at least":"over"} ${e.minimum} character(s)`:e.type==="number"?s=`Number must be ${e.exact?"exactly equal to ":e.inclusive?"greater than or equal to ":"greater than "}${e.minimum}`:e.type==="bigint"?s=`Number must be ${e.exact?"exactly equal to ":e.inclusive?"greater than or equal to ":"greater than "}${e.minimum}`:e.type==="date"?s=`Date must be ${e.exact?"exactly equal to ":e.inclusive?"greater than or equal to ":"greater than "}${new Date(Number(e.minimum))}`:s="Invalid input";break;case X.too_big:e.type==="array"?s=`Array must contain ${e.exact?"exactly":e.inclusive?"at most":"less than"} ${e.maximum} element(s)`:e.type==="string"?s=`String must contain ${e.exact?"exactly":e.inclusive?"at most":"under"} ${e.maximum} character(s)`:e.type==="number"?s=`Number must be ${e.exact?"exactly":e.inclusive?"less than or equal to":"less than"} ${e.maximum}`:e.type==="bigint"?s=`BigInt must be ${e.exact?"exactly":e.inclusive?"less than or equal to":"less than"} ${e.maximum}`:e.type==="date"?s=`Date must be ${e.exact?"exactly":e.inclusive?"smaller than or equal to":"smaller than"} ${new Date(Number(e.maximum))}`:s="Invalid input";break;case X.custom:s="Invalid input";break;case X.invalid_intersection_types:s="Intersection results could not be merged";break;case X.not_multiple_of:s=`Number must be a multiple of ${e.multipleOf}`;break;case X.not_finite:s="Number must be finite";break;default:s=r.defaultError,qe.assertNever(e)}return{message:s}};let jS=id;function DS(){return jS}const FS=e=>{const{data:r,path:s,errorMaps:i,issueData:o}=e,c=[...s,...o.path||[]],d={...o,path:c};if(o.message!==void 0)return{...o,path:c,message:o.message};let p="";const h=i.filter(g=>!!g).slice().reverse();for(const g of h)p=g(d,{data:r,defaultError:p}).message;return{...o,path:c,message:p}};function re(e,r){const s=DS(),i=FS({issueData:r,data:e.data,path:e.path,errorMaps:[e.common.contextualErrorMap,e.schemaErrorMap,s,s===id?void 0:id].filter(o=>!!o)});e.common.issues.push(i)}class lr{constructor(){this.value="valid"}dirty(){this.value==="valid"&&(this.value="dirty")}abort(){this.value!=="aborted"&&(this.value="aborted")}static mergeArray(r,s){const i=[];for(const o of s){if(o.status==="aborted")return Ae;o.status==="dirty"&&r.dirty(),i.push(o.value)}return{status:r.value,value:i}}static async mergeObjectAsync(r,s){const i=[];for(const o of s){const c=await o.key,d=await o.value;i.push({key:c,value:d})}return lr.mergeObjectSync(r,i)}static mergeObjectSync(r,s){const i={};for(const o of s){const{key:c,value:d}=o;if(c.status==="aborted"||d.status==="aborted")return Ae;c.status==="dirty"&&r.dirty(),d.status==="dirty"&&r.dirty(),c.value!=="__proto__"&&(typeof d.value<"u"||o.alwaysSet)&&(i[c.value]=d.value)}return{status:r.value,value:i}}}const Ae=Object.freeze({status:"aborted"}),va=e=>({status:"dirty",value:e}),kr=e=>({status:"valid",value:e}),Im=e=>e.status==="aborted",Mm=e=>e.status==="dirty",hi=e=>e.status==="valid",yl=e=>typeof Promise<"u"&&e instanceof Promise;var ge;(function(e){e.errToObj=r=>typeof r=="string"?{message:r}:r||{},e.toString=r=>typeof r=="string"?r:r?.message})(ge||(ge={}));class ns{constructor(r,s,i,o){this._cachedPath=[],this.parent=r,this.data=s,this._path=i,this._key=o}get path(){return this._cachedPath.length||(Array.isArray(this._key)?this._cachedPath.push(...this._path,...this._key):this._cachedPath.push(...this._path,this._key)),this._cachedPath}}const Om=(e,r)=>{if(hi(r))return{success:!0,data:r.value};if(!e.common.issues.length)throw new Error("Validation failed but no issues detected.");return{success:!1,get error(){if(this._error)return this._error;const s=new bn(e.common.issues);return this._error=s,this._error}}};function Fe(e){if(!e)return{};const{errorMap:r,invalid_type_error:s,required_error:i,description:o}=e;if(r&&(s||i))throw new Error(`Can't use "invalid_type_error" or "required_error" in conjunction with custom error map.`);return r?{errorMap:r,description:o}:{errorMap:(d,p)=>{const{message:h}=e;return d.code==="invalid_enum_value"?{message:h??p.defaultError}:typeof p.data>"u"?{message:h??i??p.defaultError}:d.code!=="invalid_type"?{message:p.defaultError}:{message:h??s??p.defaultError}},description:o}}class Ge{get description(){return this._def.description}_getType(r){return Xn(r.data)}_getOrReturnCtx(r,s){return s||{common:r.parent.common,data:r.data,parsedType:Xn(r.data),schemaErrorMap:this._def.errorMap,path:r.path,parent:r.parent}}_processInputParams(r){return{status:new lr,ctx:{common:r.parent.common,data:r.data,parsedType:Xn(r.data),schemaErrorMap:this._def.errorMap,path:r.path,parent:r.parent}}}_parseSync(r){const s=this._parse(r);if(yl(s))throw new Error("Synchronous parse encountered promise.");return s}_parseAsync(r){const s=this._parse(r);return Promise.resolve(s)}parse(r,s){const i=this.safeParse(r,s);if(i.success)return i.data;throw i.error}safeParse(r,s){const i={common:{issues:[],async:s?.async??!1,contextualErrorMap:s?.errorMap},path:s?.path||[],schemaErrorMap:this._def.errorMap,parent:null,data:r,parsedType:Xn(r)},o=this._parseSync({data:r,path:i.path,parent:i});return Om(i,o)}"~validate"(r){const s={common:{issues:[],async:!!this["~standard"].async},path:[],schemaErrorMap:this._def.errorMap,parent:null,data:r,parsedType:Xn(r)};if(!this["~standard"].async)try{const i=this._parseSync({data:r,path:[],parent:s});return hi(i)?{value:i.value}:{issues:s.common.issues}}catch(i){i?.message?.toLowerCase()?.includes("encountered")&&(this["~standard"].async=!0),s.common={issues:[],async:!0}}return this._parseAsync({data:r,path:[],parent:s}).then(i=>hi(i)?{value:i.value}:{issues:s.common.issues})}async parseAsync(r,s){const i=await this.safeParseAsync(r,s);if(i.success)return i.data;throw i.error}async safeParseAsync(r,s){const i={common:{issues:[],contextualErrorMap:s?.errorMap,async:!0},path:s?.path||[],schemaErrorMap:this._def.errorMap,parent:null,data:r,parsedType:Xn(r)},o=this._parse({data:r,path:i.path,parent:i}),c=await(yl(o)?o:Promise.resolve(o));return Om(i,c)}refine(r,s){const i=o=>typeof s=="string"||typeof s>"u"?{message:s}:typeof s=="function"?s(o):s;return this._refinement((o,c)=>{const d=r(o),p=()=>c.addIssue({code:X.custom,...i(o)});return typeof Promise<"u"&&d instanceof Promise?d.then(h=>h?!0:(p(),!1)):d?!0:(p(),!1)})}refinement(r,s){return this._refinement((i,o)=>r(i)?!0:(o.addIssue(typeof s=="function"?s(i,o):s),!1))}_refinement(r){return new gi({schema:this,typeName:Ne.ZodEffects,effect:{type:"refinement",refinement:r}})}superRefine(r){return this._refinement(r)}constructor(r){this.spa=this.safeParseAsync,this._def=r,this.parse=this.parse.bind(this),this.safeParse=this.safeParse.bind(this),this.parseAsync=this.parseAsync.bind(this),this.safeParseAsync=this.safeParseAsync.bind(this),this.spa=this.spa.bind(this),this.refine=this.refine.bind(this),this.refinement=this.refinement.bind(this),this.superRefine=this.superRefine.bind(this),this.optional=this.optional.bind(this),this.nullable=this.nullable.bind(this),this.nullish=this.nullish.bind(this),this.array=this.array.bind(this),this.promise=this.promise.bind(this),this.or=this.or.bind(this),this.and=this.and.bind(this),this.transform=this.transform.bind(this),this.brand=this.brand.bind(this),this.default=this.default.bind(this),this.catch=this.catch.bind(this),this.describe=this.describe.bind(this),this.pipe=this.pipe.bind(this),this.readonly=this.readonly.bind(this),this.isNullable=this.isNullable.bind(this),this.isOptional=this.isOptional.bind(this),this["~standard"]={version:1,vendor:"zod",validate:s=>this["~validate"](s)}}optional(){return rs.create(this,this._def)}nullable(){return vi.create(this,this._def)}nullish(){return this.nullable().optional()}array(){return Jr.create(this)}promise(){return _l.create(this,this._def)}or(r){return xl.create([this,r],this._def)}and(r){return wl.create(this,r,this._def)}transform(r){return new gi({...Fe(this._def),schema:this,typeName:Ne.ZodEffects,effect:{type:"transform",transform:r}})}default(r){const s=typeof r=="function"?r:()=>r;return new od({...Fe(this._def),innerType:this,defaultValue:s,typeName:Ne.ZodDefault})}brand(){return new ok({typeName:Ne.ZodBranded,type:this,...Fe(this._def)})}catch(r){const s=typeof r=="function"?r:()=>r;return new ld({...Fe(this._def),innerType:this,catchValue:s,typeName:Ne.ZodCatch})}describe(r){const s=this.constructor;return new s({...this._def,description:r})}pipe(r){return Hd.create(this,r)}readonly(){return cd.create(this)}isOptional(){return this.safeParse(void 0).success}isNullable(){return this.safeParse(null).success}}const VS=/^c[^\s-]{8,}$/i,US=/^[0-9a-z]+$/,$S=/^[0-9A-HJKMNP-TV-Z]{26}$/i,BS=/^[0-9a-fA-F]{8}\b-[0-9a-fA-F]{4}\b-[0-9a-fA-F]{4}\b-[0-9a-fA-F]{4}\b-[0-9a-fA-F]{12}$/i,zS=/^[a-z0-9_-]{21}$/i,ZS=/^[A-Za-z0-9-_]+\.[A-Za-z0-9-_]+\.[A-Za-z0-9-_]*$/,HS=/^[-+]?P(?!$)(?:(?:[-+]?\d+Y)|(?:[-+]?\d+[.,]\d+Y$))?(?:(?:[-+]?\d+M)|(?:[-+]?\d+[.,]\d+M$))?(?:(?:[-+]?\d+W)|(?:[-+]?\d+[.,]\d+W$))?(?:(?:[-+]?\d+D)|(?:[-+]?\d+[.,]\d+D$))?(?:T(?=[\d+-])(?:(?:[-+]?\d+H)|(?:[-+]?\d+[.,]\d+H$))?(?:(?:[-+]?\d+M)|(?:[-+]?\d+[.,]\d+M$))?(?:[-+]?\d+(?:[.,]\d+)?S)?)??$/,WS=/^(?!\.)(?!.*\.\.)([A-Z0-9_'+\-\.]*)[A-Z0-9_+-]@([A-Z0-9][A-Z0-9\-]*\.)+[A-Z]{2,}$/i,GS="^(\\p{Extended_Pictographic}|\\p{Emoji_Component})+$";let _u;const KS=/^(?:(?:25[0-5]|2[0-4][0-9]|1[0-9][0-9]|[1-9][0-9]|[0-9])\.){3}(?:25[0-5]|2[0-4][0-9]|1[0-9][0-9]|[1-9][0-9]|[0-9])$/,qS=/^(?:(?:25[0-5]|2[0-4][0-9]|1[0-9][0-9]|[1-9][0-9]|[0-9])\.){3}(?:25[0-5]|2[0-4][0-9]|1[0-9][0-9]|[1-9][0-9]|[0-9])\/(3[0-2]|[12]?[0-9])$/,XS=/^(([0-9a-fA-F]{1,4}:){7,7}[0-9a-fA-F]{1,4}|([0-9a-fA-F]{1,4}:){1,7}:|([0-9a-fA-F]{1,4}:){1,6}:[0-9a-fA-F]{1,4}|([0-9a-fA-F]{1,4}:){1,5}(:[0-9a-fA-F]{1,4}){1,2}|([0-9a-fA-F]{1,4}:){1,4}(:[0-9a-fA-F]{1,4}){1,3}|([0-9a-fA-F]{1,4}:){1,3}(:[0-9a-fA-F]{1,4}){1,4}|([0-9a-fA-F]{1,4}:){1,2}(:[0-9a-fA-F]{1,4}){1,5}|[0-9a-fA-F]{1,4}:((:[0-9a-fA-F]{1,4}){1,6})|:((:[0-9a-fA-F]{1,4}){1,7}|:)|fe80:(:[0-9a-fA-F]{0,4}){0,4}%[0-9a-zA-Z]{1,}|::(ffff(:0{1,4}){0,1}:){0,1}((25[0-5]|(2[0-4]|1{0,1}[0-9]){0,1}[0-9])\.){3,3}(25[0-5]|(2[0-4]|1{0,1}[0-9]){0,1}[0-9])|([0-9a-fA-F]{1,4}:){1,4}:((25[0-5]|(2[0-4]|1{0,1}[0-9]){0,1}[0-9])\.){3,3}(25[0-5]|(2[0-4]|1{0,1}[0-9]){0,1}[0-9]))$/,YS=/^(([0-9a-fA-F]{1,4}:){7,7}[0-9a-fA-F]{1,4}|([0-9a-fA-F]{1,4}:){1,7}:|([0-9a-fA-F]{1,4}:){1,6}:[0-9a-fA-F]{1,4}|([0-9a-fA-F]{1,4}:){1,5}(:[0-9a-fA-F]{1,4}){1,2}|([0-9a-fA-F]{1,4}:){1,4}(:[0-9a-fA-F]{1,4}){1,3}|([0-9a-fA-F]{1,4}:){1,3}(:[0-9a-fA-F]{1,4}){1,4}|([0-9a-fA-F]{1,4}:){1,2}(:[0-9a-fA-F]{1,4}){1,5}|[0-9a-fA-F]{1,4}:((:[0-9a-fA-F]{1,4}){1,6})|:((:[0-9a-fA-F]{1,4}){1,7}|:)|fe80:(:[0-9a-fA-F]{0,4}){0,4}%[0-9a-zA-Z]{1,}|::(ffff(:0{1,4}){0,1}:){0,1}((25[0-5]|(2[0-4]|1{0,1}[0-9]){0,1}[0-9])\.){3,3}(25[0-5]|(2[0-4]|1{0,1}[0-9]){0,1}[0-9])|([0-9a-fA-F]{1,4}:){1,4}:((25[0-5]|(2[0-4]|1{0,1}[0-9]){0,1}[0-9])\.){3,3}(25[0-5]|(2[0-4]|1{0,1}[0-9]){0,1}[0-9]))\/(12[0-8]|1[01][0-9]|[1-9]?[0-9])$/,QS=/^([0-9a-zA-Z+/]{4})*(([0-9a-zA-Z+/]{2}==)|([0-9a-zA-Z+/]{3}=))?$/,JS=/^([0-9a-zA-Z-_]{4})*(([0-9a-zA-Z-_]{2}(==)?)|([0-9a-zA-Z-_]{3}(=)?))?$/,u0="((\\d\\d[2468][048]|\\d\\d[13579][26]|\\d\\d0[48]|[02468][048]00|[13579][26]00)-02-29|\\d{4}-((0[13578]|1[02])-(0[1-9]|[12]\\d|3[01])|(0[469]|11)-(0[1-9]|[12]\\d|30)|(02)-(0[1-9]|1\\d|2[0-8])))",ek=new RegExp(`^${u0}$`);function d0(e){let r="[0-5]\\d";e.precision?r=`${r}\\.\\d{${e.precision}}`:e.precision==null&&(r=`${r}(\\.\\d+)?`);const s=e.precision?"+":"?";return`([01]\\d|2[0-3]):[0-5]\\d(:${r})${s}`}function tk(e){return new RegExp(`^${d0(e)}$`)}function rk(e){let r=`${u0}T${d0(e)}`;const s=[];return s.push(e.local?"Z?":"Z"),e.offset&&s.push("([+-]\\d{2}:?\\d{2})"),r=`${r}(${s.join("|")})`,new RegExp(`^${r}$`)}function nk(e,r){return!!((r==="v4"||!r)&&KS.test(e)||(r==="v6"||!r)&&XS.test(e))}function sk(e,r){if(!ZS.test(e))return!1;try{const[s]=e.split(".");if(!s)return!1;const i=s.replace(/-/g,"+").replace(/_/g,"/").padEnd(s.length+(4-s.length%4)%4,"="),o=JSON.parse(atob(i));return!(typeof o!="object"||o===null||"typ"in o&&o?.typ!=="JWT"||!o.alg||r&&o.alg!==r)}catch{return!1}}function ik(e,r){return!!((r==="v4"||!r)&&qS.test(e)||(r==="v6"||!r)&&YS.test(e))}class Jn extends Ge{_parse(r){if(this._def.coerce&&(r.data=String(r.data)),this._getType(r)!==de.string){const c=this._getOrReturnCtx(r);return re(c,{code:X.invalid_type,expected:de.string,received:c.parsedType}),Ae}const i=new lr;let o;for(const c of this._def.checks)if(c.kind==="min")r.data.length<c.value&&(o=this._getOrReturnCtx(r,o),re(o,{code:X.too_small,minimum:c.value,type:"string",inclusive:!0,exact:!1,message:c.message}),i.dirty());else if(c.kind==="max")r.data.length>c.value&&(o=this._getOrReturnCtx(r,o),re(o,{code:X.too_big,maximum:c.value,type:"string",inclusive:!0,exact:!1,message:c.message}),i.dirty());else if(c.kind==="length"){const d=r.data.length>c.value,p=r.data.length<c.value;(d||p)&&(o=this._getOrReturnCtx(r,o),d?re(o,{code:X.too_big,maximum:c.value,type:"string",inclusive:!0,exact:!0,message:c.message}):p&&re(o,{code:X.too_small,minimum:c.value,type:"string",inclusive:!0,exact:!0,message:c.message}),i.dirty())}else if(c.kind==="email")WS.test(r.data)||(o=this._getOrReturnCtx(r,o),re(o,{validation:"email",code:X.invalid_string,message:c.message}),i.dirty());else if(c.kind==="emoji")_u||(_u=new RegExp(GS,"u")),_u.test(r.data)||(o=this._getOrReturnCtx(r,o),re(o,{validation:"emoji",code:X.invalid_string,message:c.message}),i.dirty());else if(c.kind==="uuid")BS.test(r.data)||(o=this._getOrReturnCtx(r,o),re(o,{validation:"uuid",code:X.invalid_string,message:c.message}),i.dirty());else if(c.kind==="nanoid")zS.test(r.data)||(o=this._getOrReturnCtx(r,o),re(o,{validation:"nanoid",code:X.invalid_string,message:c.message}),i.dirty());else if(c.kind==="cuid")VS.test(r.data)||(o=this._getOrReturnCtx(r,o),re(o,{validation:"cuid",code:X.invalid_string,message:c.message}),i.dirty());else if(c.kind==="cuid2")US.test(r.data)||(o=this._getOrReturnCtx(r,o),re(o,{validation:"cuid2",code:X.invalid_string,message:c.message}),i.dirty());else if(c.kind==="ulid")$S.test(r.data)||(o=this._getOrReturnCtx(r,o),re(o,{validation:"ulid",code:X.invalid_string,message:c.message}),i.dirty());else if(c.kind==="url")try{new URL(r.data)}catch{o=this._getOrReturnCtx(r,o),re(o,{validation:"url",code:X.invalid_string,message:c.message}),i.dirty()}else c.kind==="regex"?(c.regex.lastIndex=0,c.regex.test(r.data)||(o=this._getOrReturnCtx(r,o),re(o,{validation:"regex",code:X.invalid_string,message:c.message}),i.dirty())):c.kind==="trim"?r.data=r.data.trim():c.kind==="includes"?r.data.includes(c.value,c.position)||(o=this._getOrReturnCtx(r,o),re(o,{code:X.invalid_string,validation:{includes:c.value,position:c.position},message:c.message}),i.dirty()):c.kind==="toLowerCase"?r.data=r.data.toLowerCase():c.kind==="toUpperCase"?r.data=r.data.toUpperCase():c.kind==="startsWith"?r.data.startsWith(c.value)||(o=this._getOrReturnCtx(r,o),re(o,{code:X.invalid_string,validation:{startsWith:c.value},message:c.message}),i.dirty()):c.kind==="endsWith"?r.data.endsWith(c.value)||(o=this._getOrReturnCtx(r,o),re(o,{code:X.invalid_string,validation:{endsWith:c.value},message:c.message}),i.dirty()):c.kind==="datetime"?rk(c).test(r.data)||(o=this._getOrReturnCtx(r,o),re(o,{code:X.invalid_string,validation:"datetime",message:c.message}),i.dirty()):c.kind==="date"?ek.test(r.data)||(o=this._getOrReturnCtx(r,o),re(o,{code:X.invalid_string,validation:"date",message:c.message}),i.dirty()):c.kind==="time"?tk(c).test(r.data)||(o=this._getOrReturnCtx(r,o),re(o,{code:X.invalid_string,validation:"time",message:c.message}),i.dirty()):c.kind==="duration"?HS.test(r.data)||(o=this._getOrReturnCtx(r,o),re(o,{validation:"duration",code:X.invalid_string,message:c.message}),i.dirty()):c.kind==="ip"?nk(r.data,c.version)||(o=this._getOrReturnCtx(r,o),re(o,{validation:"ip",code:X.invalid_string,message:c.message}),i.dirty()):c.kind==="jwt"?sk(r.data,c.alg)||(o=this._getOrReturnCtx(r,o),re(o,{validation:"jwt",code:X.invalid_string,message:c.message}),i.dirty()):c.kind==="cidr"?ik(r.data,c.version)||(o=this._getOrReturnCtx(r,o),re(o,{validation:"cidr",code:X.invalid_string,message:c.message}),i.dirty()):c.kind==="base64"?QS.test(r.data)||(o=this._getOrReturnCtx(r,o),re(o,{validation:"base64",code:X.invalid_string,message:c.message}),i.dirty()):c.kind==="base64url"?JS.test(r.data)||(o=this._getOrReturnCtx(r,o),re(o,{validation:"base64url",code:X.invalid_string,message:c.message}),i.dirty()):qe.assertNever(c);return{status:i.value,value:r.data}}_regex(r,s,i){return this.refinement(o=>r.test(o),{validation:s,code:X.invalid_string,...ge.errToObj(i)})}_addCheck(r){return new Jn({...this._def,checks:[...this._def.checks,r]})}email(r){return this._addCheck({kind:"email",...ge.errToObj(r)})}url(r){return this._addCheck({kind:"url",...ge.errToObj(r)})}emoji(r){return this._addCheck({kind:"emoji",...ge.errToObj(r)})}uuid(r){return this._addCheck({kind:"uuid",...ge.errToObj(r)})}nanoid(r){return this._addCheck({kind:"nanoid",...ge.errToObj(r)})}cuid(r){return this._addCheck({kind:"cuid",...ge.errToObj(r)})}cuid2(r){return this._addCheck({kind:"cuid2",...ge.errToObj(r)})}ulid(r){return this._addCheck({kind:"ulid",...ge.errToObj(r)})}base64(r){return this._addCheck({kind:"base64",...ge.errToObj(r)})}base64url(r){return this._addCheck({kind:"base64url",...ge.errToObj(r)})}jwt(r){return this._addCheck({kind:"jwt",...ge.errToObj(r)})}ip(r){return this._addCheck({kind:"ip",...ge.errToObj(r)})}cidr(r){return this._addCheck({kind:"cidr",...ge.errToObj(r)})}datetime(r){return typeof r=="string"?this._addCheck({kind:"datetime",precision:null,offset:!1,local:!1,message:r}):this._addCheck({kind:"datetime",precision:typeof r?.precision>"u"?null:r?.precision,offset:r?.offset??!1,local:r?.local??!1,...ge.errToObj(r?.message)})}date(r){return this._addCheck({kind:"date",message:r})}time(r){return typeof r=="string"?this._addCheck({kind:"time",precision:null,message:r}):this._addCheck({kind:"time",precision:typeof r?.precision>"u"?null:r?.precision,...ge.errToObj(r?.message)})}duration(r){return this._addCheck({kind:"duration",...ge.errToObj(r)})}regex(r,s){return this._addCheck({kind:"regex",regex:r,...ge.errToObj(s)})}includes(r,s){return this._addCheck({kind:"includes",value:r,position:s?.position,...ge.errToObj(s?.message)})}startsWith(r,s){return this._addCheck({kind:"startsWith",value:r,...ge.errToObj(s)})}endsWith(r,s){return this._addCheck({kind:"endsWith",value:r,...ge.errToObj(s)})}min(r,s){return this._addCheck({kind:"min",value:r,...ge.errToObj(s)})}max(r,s){return this._addCheck({kind:"max",value:r,...ge.errToObj(s)})}length(r,s){return this._addCheck({kind:"length",value:r,...ge.errToObj(s)})}nonempty(r){return this.min(1,ge.errToObj(r))}trim(){return new Jn({...this._def,checks:[...this._def.checks,{kind:"trim"}]})}toLowerCase(){return new Jn({...this._def,checks:[...this._def.checks,{kind:"toLowerCase"}]})}toUpperCase(){return new Jn({...this._def,checks:[...this._def.checks,{kind:"toUpperCase"}]})}get isDatetime(){return!!this._def.checks.find(r=>r.kind==="datetime")}get isDate(){return!!this._def.checks.find(r=>r.kind==="date")}get isTime(){return!!this._def.checks.find(r=>r.kind==="time")}get isDuration(){return!!this._def.checks.find(r=>r.kind==="duration")}get isEmail(){return!!this._def.checks.find(r=>r.kind==="email")}get isURL(){return!!this._def.checks.find(r=>r.kind==="url")}get isEmoji(){return!!this._def.checks.find(r=>r.kind==="emoji")}get isUUID(){return!!this._def.checks.find(r=>r.kind==="uuid")}get isNANOID(){return!!this._def.checks.find(r=>r.kind==="nanoid")}get isCUID(){return!!this._def.checks.find(r=>r.kind==="cuid")}get isCUID2(){return!!this._def.checks.find(r=>r.kind==="cuid2")}get isULID(){return!!this._def.checks.find(r=>r.kind==="ulid")}get isIP(){return!!this._def.checks.find(r=>r.kind==="ip")}get isCIDR(){return!!this._def.checks.find(r=>r.kind==="cidr")}get isBase64(){return!!this._def.checks.find(r=>r.kind==="base64")}get isBase64url(){return!!this._def.checks.find(r=>r.kind==="base64url")}get minLength(){let r=null;for(const s of this._def.checks)s.kind==="min"&&(r===null||s.value>r)&&(r=s.value);return r}get maxLength(){let r=null;for(const s of this._def.checks)s.kind==="max"&&(r===null||s.value<r)&&(r=s.value);return r}}Jn.create=e=>new Jn({checks:[],typeName:Ne.ZodString,coerce:e?.coerce??!1,...Fe(e)});function ak(e,r){const s=(e.toString().split(".")[1]||"").length,i=(r.toString().split(".")[1]||"").length,o=s>i?s:i,c=Number.parseInt(e.toFixed(o).replace(".","")),d=Number.parseInt(r.toFixed(o).replace(".",""));return c%d/10**o}class Aa extends Ge{constructor(){super(...arguments),this.min=this.gte,this.max=this.lte,this.step=this.multipleOf}_parse(r){if(this._def.coerce&&(r.data=Number(r.data)),this._getType(r)!==de.number){const c=this._getOrReturnCtx(r);return re(c,{code:X.invalid_type,expected:de.number,received:c.parsedType}),Ae}let i;const o=new lr;for(const c of this._def.checks)c.kind==="int"?qe.isInteger(r.data)||(i=this._getOrReturnCtx(r,i),re(i,{code:X.invalid_type,expected:"integer",received:"float",message:c.message}),o.dirty()):c.kind==="min"?(c.inclusive?r.data<c.value:r.data<=c.value)&&(i=this._getOrReturnCtx(r,i),re(i,{code:X.too_small,minimum:c.value,type:"number",inclusive:c.inclusive,exact:!1,message:c.message}),o.dirty()):c.kind==="max"?(c.inclusive?r.data>c.value:r.data>=c.value)&&(i=this._getOrReturnCtx(r,i),re(i,{code:X.too_big,maximum:c.value,type:"number",inclusive:c.inclusive,exact:!1,message:c.message}),o.dirty()):c.kind==="multipleOf"?ak(r.data,c.value)!==0&&(i=this._getOrReturnCtx(r,i),re(i,{code:X.not_multiple_of,multipleOf:c.value,message:c.message}),o.dirty()):c.kind==="finite"?Number.isFinite(r.data)||(i=this._getOrReturnCtx(r,i),re(i,{code:X.not_finite,message:c.message}),o.dirty()):qe.assertNever(c);return{status:o.value,value:r.data}}gte(r,s){return this.setLimit("min",r,!0,ge.toString(s))}gt(r,s){return this.setLimit("min",r,!1,ge.toString(s))}lte(r,s){return this.setLimit("max",r,!0,ge.toString(s))}lt(r,s){return this.setLimit("max",r,!1,ge.toString(s))}setLimit(r,s,i,o){return new Aa({...this._def,checks:[...this._def.checks,{kind:r,value:s,inclusive:i,message:ge.toString(o)}]})}_addCheck(r){return new Aa({...this._def,checks:[...this._def.checks,r]})}int(r){return this._addCheck({kind:"int",message:ge.toString(r)})}positive(r){return this._addCheck({kind:"min",value:0,inclusive:!1,message:ge.toString(r)})}negative(r){return this._addCheck({kind:"max",value:0,inclusive:!1,message:ge.toString(r)})}nonpositive(r){return this._addCheck({kind:"max",value:0,inclusive:!0,message:ge.toString(r)})}nonnegative(r){return this._addCheck({kind:"min",value:0,inclusive:!0,message:ge.toString(r)})}multipleOf(r,s){return this._addCheck({kind:"multipleOf",value:r,message:ge.toString(s)})}finite(r){return this._addCheck({kind:"finite",message:ge.toString(r)})}safe(r){return this._addCheck({kind:"min",inclusive:!0,value:Number.MIN_SAFE_INTEGER,message:ge.toString(r)})._addCheck({kind:"max",inclusive:!0,value:Number.MAX_SAFE_INTEGER,message:ge.toString(r)})}get minValue(){let r=null;for(const s of this._def.checks)s.kind==="min"&&(r===null||s.value>r)&&(r=s.value);return r}get maxValue(){let r=null;for(const s of this._def.checks)s.kind==="max"&&(r===null||s.value<r)&&(r=s.value);return r}get isInt(){return!!this._def.checks.find(r=>r.kind==="int"||r.kind==="multipleOf"&&qe.isInteger(r.value))}get isFinite(){let r=null,s=null;for(const i of this._def.checks){if(i.kind==="finite"||i.kind==="int"||i.kind==="multipleOf")return!0;i.kind==="min"?(s===null||i.value>s)&&(s=i.value):i.kind==="max"&&(r===null||i.value<r)&&(r=i.value)}return Number.isFinite(s)&&Number.isFinite(r)}}Aa.create=e=>new Aa({checks:[],typeName:Ne.ZodNumber,coerce:e?.coerce||!1,...Fe(e)});class Na extends Ge{constructor(){super(...arguments),this.min=this.gte,this.max=this.lte}_parse(r){if(this._def.coerce)try{r.data=BigInt(r.data)}catch{return this._getInvalidInput(r)}if(this._getType(r)!==de.bigint)return this._getInvalidInput(r);let i;const o=new lr;for(const c of this._def.checks)c.kind==="min"?(c.inclusive?r.data<c.value:r.data<=c.value)&&(i=this._getOrReturnCtx(r,i),re(i,{code:X.too_small,type:"bigint",minimum:c.value,inclusive:c.inclusive,message:c.message}),o.dirty()):c.kind==="max"?(c.inclusive?r.data>c.value:r.data>=c.value)&&(i=this._getOrReturnCtx(r,i),re(i,{code:X.too_big,type:"bigint",maximum:c.value,inclusive:c.inclusive,message:c.message}),o.dirty()):c.kind==="multipleOf"?r.data%c.value!==BigInt(0)&&(i=this._getOrReturnCtx(r,i),re(i,{code:X.not_multiple_of,multipleOf:c.value,message:c.message}),o.dirty()):qe.assertNever(c);return{status:o.value,value:r.data}}_getInvalidInput(r){const s=this._getOrReturnCtx(r);return re(s,{code:X.invalid_type,expected:de.bigint,received:s.parsedType}),Ae}gte(r,s){return this.setLimit("min",r,!0,ge.toString(s))}gt(r,s){return this.setLimit("min",r,!1,ge.toString(s))}lte(r,s){return this.setLimit("max",r,!0,ge.toString(s))}lt(r,s){return this.setLimit("max",r,!1,ge.toString(s))}setLimit(r,s,i,o){return new Na({...this._def,checks:[...this._def.checks,{kind:r,value:s,inclusive:i,message:ge.toString(o)}]})}_addCheck(r){return new Na({...this._def,checks:[...this._def.checks,r]})}positive(r){return this._addCheck({kind:"min",value:BigInt(0),inclusive:!1,message:ge.toString(r)})}negative(r){return this._addCheck({kind:"max",value:BigInt(0),inclusive:!1,message:ge.toString(r)})}nonpositive(r){return this._addCheck({kind:"max",value:BigInt(0),inclusive:!0,message:ge.toString(r)})}nonnegative(r){return this._addCheck({kind:"min",value:BigInt(0),inclusive:!0,message:ge.toString(r)})}multipleOf(r,s){return this._addCheck({kind:"multipleOf",value:r,message:ge.toString(s)})}get minValue(){let r=null;for(const s of this._def.checks)s.kind==="min"&&(r===null||s.value>r)&&(r=s.value);return r}get maxValue(){let r=null;for(const s of this._def.checks)s.kind==="max"&&(r===null||s.value<r)&&(r=s.value);return r}}Na.create=e=>new Na({checks:[],typeName:Ne.ZodBigInt,coerce:e?.coerce??!1,...Fe(e)});class Lm extends Ge{_parse(r){if(this._def.coerce&&(r.data=!!r.data),this._getType(r)!==de.boolean){const i=this._getOrReturnCtx(r);return re(i,{code:X.invalid_type,expected:de.boolean,received:i.parsedType}),Ae}return kr(r.data)}}Lm.create=e=>new Lm({typeName:Ne.ZodBoolean,coerce:e?.coerce||!1,...Fe(e)});class bl extends Ge{_parse(r){if(this._def.coerce&&(r.data=new Date(r.data)),this._getType(r)!==de.date){const c=this._getOrReturnCtx(r);return re(c,{code:X.invalid_type,expected:de.date,received:c.parsedType}),Ae}if(Number.isNaN(r.data.getTime())){const c=this._getOrReturnCtx(r);return re(c,{code:X.invalid_date}),Ae}const i=new lr;let o;for(const c of this._def.checks)c.kind==="min"?r.data.getTime()<c.value&&(o=this._getOrReturnCtx(r,o),re(o,{code:X.too_small,message:c.message,inclusive:!0,exact:!1,minimum:c.value,type:"date"}),i.dirty()):c.kind==="max"?r.data.getTime()>c.value&&(o=this._getOrReturnCtx(r,o),re(o,{code:X.too_big,message:c.message,inclusive:!0,exact:!1,maximum:c.value,type:"date"}),i.dirty()):qe.assertNever(c);return{status:i.value,value:new Date(r.data.getTime())}}_addCheck(r){return new bl({...this._def,checks:[...this._def.checks,r]})}min(r,s){return this._addCheck({kind:"min",value:r.getTime(),message:ge.toString(s)})}max(r,s){return this._addCheck({kind:"max",value:r.getTime(),message:ge.toString(s)})}get minDate(){let r=null;for(const s of this._def.checks)s.kind==="min"&&(r===null||s.value>r)&&(r=s.value);return r!=null?new Date(r):null}get maxDate(){let r=null;for(const s of this._def.checks)s.kind==="max"&&(r===null||s.value<r)&&(r=s.value);return r!=null?new Date(r):null}}bl.create=e=>new bl({checks:[],coerce:e?.coerce||!1,typeName:Ne.ZodDate,...Fe(e)});class jm extends Ge{_parse(r){if(this._getType(r)!==de.symbol){const i=this._getOrReturnCtx(r);return re(i,{code:X.invalid_type,expected:de.symbol,received:i.parsedType}),Ae}return kr(r.data)}}jm.create=e=>new jm({typeName:Ne.ZodSymbol,...Fe(e)});class Dm extends Ge{_parse(r){if(this._getType(r)!==de.undefined){const i=this._getOrReturnCtx(r);return re(i,{code:X.invalid_type,expected:de.undefined,received:i.parsedType}),Ae}return kr(r.data)}}Dm.create=e=>new Dm({typeName:Ne.ZodUndefined,...Fe(e)});class Fm extends Ge{_parse(r){if(this._getType(r)!==de.null){const i=this._getOrReturnCtx(r);return re(i,{code:X.invalid_type,expected:de.null,received:i.parsedType}),Ae}return kr(r.data)}}Fm.create=e=>new Fm({typeName:Ne.ZodNull,...Fe(e)});class Vm extends Ge{constructor(){super(...arguments),this._any=!0}_parse(r){return kr(r.data)}}Vm.create=e=>new Vm({typeName:Ne.ZodAny,...Fe(e)});class Um extends Ge{constructor(){super(...arguments),this._unknown=!0}_parse(r){return kr(r.data)}}Um.create=e=>new Um({typeName:Ne.ZodUnknown,...Fe(e)});class ss extends Ge{_parse(r){const s=this._getOrReturnCtx(r);return re(s,{code:X.invalid_type,expected:de.never,received:s.parsedType}),Ae}}ss.create=e=>new ss({typeName:Ne.ZodNever,...Fe(e)});class $m extends Ge{_parse(r){if(this._getType(r)!==de.undefined){const i=this._getOrReturnCtx(r);return re(i,{code:X.invalid_type,expected:de.void,received:i.parsedType}),Ae}return kr(r.data)}}$m.create=e=>new $m({typeName:Ne.ZodVoid,...Fe(e)});class Jr extends Ge{_parse(r){const{ctx:s,status:i}=this._processInputParams(r),o=this._def;if(s.parsedType!==de.array)return re(s,{code:X.invalid_type,expected:de.array,received:s.parsedType}),Ae;if(o.exactLength!==null){const d=s.data.length>o.exactLength.value,p=s.data.length<o.exactLength.value;(d||p)&&(re(s,{code:d?X.too_big:X.too_small,minimum:p?o.exactLength.value:void 0,maximum:d?o.exactLength.value:void 0,type:"array",inclusive:!0,exact:!0,message:o.exactLength.message}),i.dirty())}if(o.minLength!==null&&s.data.length<o.minLength.value&&(re(s,{code:X.too_small,minimum:o.minLength.value,type:"array",inclusive:!0,exact:!1,message:o.minLength.message}),i.dirty()),o.maxLength!==null&&s.data.length>o.maxLength.value&&(re(s,{code:X.too_big,maximum:o.maxLength.value,type:"array",inclusive:!0,exact:!1,message:o.maxLength.message}),i.dirty()),s.common.async)return Promise.all([...s.data].map((d,p)=>o.type._parseAsync(new ns(s,d,s.path,p)))).then(d=>lr.mergeArray(i,d));const c=[...s.data].map((d,p)=>o.type._parseSync(new ns(s,d,s.path,p)));return lr.mergeArray(i,c)}get element(){return this._def.type}min(r,s){return new Jr({...this._def,minLength:{value:r,message:ge.toString(s)}})}max(r,s){return new Jr({...this._def,maxLength:{value:r,message:ge.toString(s)}})}length(r,s){return new Jr({...this._def,exactLength:{value:r,message:ge.toString(s)}})}nonempty(r){return this.min(1,r)}}Jr.create=(e,r)=>new Jr({type:e,minLength:null,maxLength:null,exactLength:null,typeName:Ne.ZodArray,...Fe(r)});function li(e){if(e instanceof yt){const r={};for(const s in e.shape){const i=e.shape[s];r[s]=rs.create(li(i))}return new yt({...e._def,shape:()=>r})}else return e instanceof Jr?new Jr({...e._def,type:li(e.element)}):e instanceof rs?rs.create(li(e.unwrap())):e instanceof vi?vi.create(li(e.unwrap())):e instanceof Is?Is.create(e.items.map(r=>li(r))):e}class yt extends Ge{constructor(){super(...arguments),this._cached=null,this.nonstrict=this.passthrough,this.augment=this.extend}_getCached(){if(this._cached!==null)return this._cached;const r=this._def.shape(),s=qe.objectKeys(r);return this._cached={shape:r,keys:s},this._cached}_parse(r){if(this._getType(r)!==de.object){const g=this._getOrReturnCtx(r);return re(g,{code:X.invalid_type,expected:de.object,received:g.parsedType}),Ae}const{status:i,ctx:o}=this._processInputParams(r),{shape:c,keys:d}=this._getCached(),p=[];if(!(this._def.catchall instanceof ss&&this._def.unknownKeys==="strip"))for(const g in o.data)d.includes(g)||p.push(g);const h=[];for(const g of d){const v=c[g],b=o.data[g];h.push({key:{status:"valid",value:g},value:v._parse(new ns(o,b,o.path,g)),alwaysSet:g in o.data})}if(this._def.catchall instanceof ss){const g=this._def.unknownKeys;if(g==="passthrough")for(const v of p)h.push({key:{status:"valid",value:v},value:{status:"valid",value:o.data[v]}});else if(g==="strict")p.length>0&&(re(o,{code:X.unrecognized_keys,keys:p}),i.dirty());else if(g!=="strip")throw new Error("Internal ZodObject error: invalid unknownKeys value.")}else{const g=this._def.catchall;for(const v of p){const b=o.data[v];h.push({key:{status:"valid",value:v},value:g._parse(new ns(o,b,o.path,v)),alwaysSet:v in o.data})}}return o.common.async?Promise.resolve().then(async()=>{const g=[];for(const v of h){const b=await v.key,w=await v.value;g.push({key:b,value:w,alwaysSet:v.alwaysSet})}return g}).then(g=>lr.mergeObjectSync(i,g)):lr.mergeObjectSync(i,h)}get shape(){return this._def.shape()}strict(r){return ge.errToObj,new yt({...this._def,unknownKeys:"strict",...r!==void 0?{errorMap:(s,i)=>{const o=this._def.errorMap?.(s,i).message??i.defaultError;return s.code==="unrecognized_keys"?{message:ge.errToObj(r).message??o}:{message:o}}}:{}})}strip(){return new yt({...this._def,unknownKeys:"strip"})}passthrough(){return new yt({...this._def,unknownKeys:"passthrough"})}extend(r){return new yt({...this._def,shape:()=>({...this._def.shape(),...r})})}merge(r){return new yt({unknownKeys:r._def.unknownKeys,catchall:r._def.catchall,shape:()=>({...this._def.shape(),...r._def.shape()}),typeName:Ne.ZodObject})}setKey(r,s){return this.augment({[r]:s})}catchall(r){return new yt({...this._def,catchall:r})}pick(r){const s={};for(const i of qe.objectKeys(r))r[i]&&this.shape[i]&&(s[i]=this.shape[i]);return new yt({...this._def,shape:()=>s})}omit(r){const s={};for(const i of qe.objectKeys(this.shape))r[i]||(s[i]=this.shape[i]);return new yt({...this._def,shape:()=>s})}deepPartial(){return li(this)}partial(r){const s={};for(const i of qe.objectKeys(this.shape)){const o=this.shape[i];r&&!r[i]?s[i]=o:s[i]=o.optional()}return new yt({...this._def,shape:()=>s})}required(r){const s={};for(const i of qe.objectKeys(this.shape))if(r&&!r[i])s[i]=this.shape[i];else{let c=this.shape[i];for(;c instanceof rs;)c=c._def.innerType;s[i]=c}return new yt({...this._def,shape:()=>s})}keyof(){return f0(qe.objectKeys(this.shape))}}yt.create=(e,r)=>new yt({shape:()=>e,unknownKeys:"strip",catchall:ss.create(),typeName:Ne.ZodObject,...Fe(r)});yt.strictCreate=(e,r)=>new yt({shape:()=>e,unknownKeys:"strict",catchall:ss.create(),typeName:Ne.ZodObject,...Fe(r)});yt.lazycreate=(e,r)=>new yt({shape:e,unknownKeys:"strip",catchall:ss.create(),typeName:Ne.ZodObject,...Fe(r)});class xl extends Ge{_parse(r){const{ctx:s}=this._processInputParams(r),i=this._def.options;function o(c){for(const p of c)if(p.result.status==="valid")return p.result;for(const p of c)if(p.result.status==="dirty")return s.common.issues.push(...p.ctx.common.issues),p.result;const d=c.map(p=>new bn(p.ctx.common.issues));return re(s,{code:X.invalid_union,unionErrors:d}),Ae}if(s.common.async)return Promise.all(i.map(async c=>{const d={...s,common:{...s.common,issues:[]},parent:null};return{result:await c._parseAsync({data:s.data,path:s.path,parent:d}),ctx:d}})).then(o);{let c;const d=[];for(const h of i){const g={...s,common:{...s.common,issues:[]},parent:null},v=h._parseSync({data:s.data,path:s.path,parent:g});if(v.status==="valid")return v;v.status==="dirty"&&!c&&(c={result:v,ctx:g}),g.common.issues.length&&d.push(g.common.issues)}if(c)return s.common.issues.push(...c.ctx.common.issues),c.result;const p=d.map(h=>new bn(h));return re(s,{code:X.invalid_union,unionErrors:p}),Ae}}get options(){return this._def.options}}xl.create=(e,r)=>new xl({options:e,typeName:Ne.ZodUnion,...Fe(r)});function ad(e,r){const s=Xn(e),i=Xn(r);if(e===r)return{valid:!0,data:e};if(s===de.object&&i===de.object){const o=qe.objectKeys(r),c=qe.objectKeys(e).filter(p=>o.indexOf(p)!==-1),d={...e,...r};for(const p of c){const h=ad(e[p],r[p]);if(!h.valid)return{valid:!1};d[p]=h.data}return{valid:!0,data:d}}else if(s===de.array&&i===de.array){if(e.length!==r.length)return{valid:!1};const o=[];for(let c=0;c<e.length;c++){const d=e[c],p=r[c],h=ad(d,p);if(!h.valid)return{valid:!1};o.push(h.data)}return{valid:!0,data:o}}else return s===de.date&&i===de.date&&+e==+r?{valid:!0,data:e}:{valid:!1}}class wl extends Ge{_parse(r){const{status:s,ctx:i}=this._processInputParams(r),o=(c,d)=>{if(Im(c)||Im(d))return Ae;const p=ad(c.value,d.value);return p.valid?((Mm(c)||Mm(d))&&s.dirty(),{status:s.value,value:p.data}):(re(i,{code:X.invalid_intersection_types}),Ae)};return i.common.async?Promise.all([this._def.left._parseAsync({data:i.data,path:i.path,parent:i}),this._def.right._parseAsync({data:i.data,path:i.path,parent:i})]).then(([c,d])=>o(c,d)):o(this._def.left._parseSync({data:i.data,path:i.path,parent:i}),this._def.right._parseSync({data:i.data,path:i.path,parent:i}))}}wl.create=(e,r,s)=>new wl({left:e,right:r,typeName:Ne.ZodIntersection,...Fe(s)});class Is extends Ge{_parse(r){const{status:s,ctx:i}=this._processInputParams(r);if(i.parsedType!==de.array)return re(i,{code:X.invalid_type,expected:de.array,received:i.parsedType}),Ae;if(i.data.length<this._def.items.length)return re(i,{code:X.too_small,minimum:this._def.items.length,inclusive:!0,exact:!1,type:"array"}),Ae;!this._def.rest&&i.data.length>this._def.items.length&&(re(i,{code:X.too_big,maximum:this._def.items.length,inclusive:!0,exact:!1,type:"array"}),s.dirty());const c=[...i.data].map((d,p)=>{const h=this._def.items[p]||this._def.rest;return h?h._parse(new ns(i,d,i.path,p)):null}).filter(d=>!!d);return i.common.async?Promise.all(c).then(d=>lr.mergeArray(s,d)):lr.mergeArray(s,c)}get items(){return this._def.items}rest(r){return new Is({...this._def,rest:r})}}Is.create=(e,r)=>{if(!Array.isArray(e))throw new Error("You must pass an array of schemas to z.tuple([ ... ])");return new Is({items:e,typeName:Ne.ZodTuple,rest:null,...Fe(r)})};class Bm extends Ge{get keySchema(){return this._def.keyType}get valueSchema(){return this._def.valueType}_parse(r){const{status:s,ctx:i}=this._processInputParams(r);if(i.parsedType!==de.map)return re(i,{code:X.invalid_type,expected:de.map,received:i.parsedType}),Ae;const o=this._def.keyType,c=this._def.valueType,d=[...i.data.entries()].map(([p,h],g)=>({key:o._parse(new ns(i,p,i.path,[g,"key"])),value:c._parse(new ns(i,h,i.path,[g,"value"]))}));if(i.common.async){const p=new Map;return Promise.resolve().then(async()=>{for(const h of d){const g=await h.key,v=await h.value;if(g.status==="aborted"||v.status==="aborted")return Ae;(g.status==="dirty"||v.status==="dirty")&&s.dirty(),p.set(g.value,v.value)}return{status:s.value,value:p}})}else{const p=new Map;for(const h of d){const g=h.key,v=h.value;if(g.status==="aborted"||v.status==="aborted")return Ae;(g.status==="dirty"||v.status==="dirty")&&s.dirty(),p.set(g.value,v.value)}return{status:s.value,value:p}}}}Bm.create=(e,r,s)=>new Bm({valueType:r,keyType:e,typeName:Ne.ZodMap,...Fe(s)});class Ia extends Ge{_parse(r){const{status:s,ctx:i}=this._processInputParams(r);if(i.parsedType!==de.set)return re(i,{code:X.invalid_type,expected:de.set,received:i.parsedType}),Ae;const o=this._def;o.minSize!==null&&i.data.size<o.minSize.value&&(re(i,{code:X.too_small,minimum:o.minSize.value,type:"set",inclusive:!0,exact:!1,message:o.minSize.message}),s.dirty()),o.maxSize!==null&&i.data.size>o.maxSize.value&&(re(i,{code:X.too_big,maximum:o.maxSize.value,type:"set",inclusive:!0,exact:!1,message:o.maxSize.message}),s.dirty());const c=this._def.valueType;function d(h){const g=new Set;for(const v of h){if(v.status==="aborted")return Ae;v.status==="dirty"&&s.dirty(),g.add(v.value)}return{status:s.value,value:g}}const p=[...i.data.values()].map((h,g)=>c._parse(new ns(i,h,i.path,g)));return i.common.async?Promise.all(p).then(h=>d(h)):d(p)}min(r,s){return new Ia({...this._def,minSize:{value:r,message:ge.toString(s)}})}max(r,s){return new Ia({...this._def,maxSize:{value:r,message:ge.toString(s)}})}size(r,s){return this.min(r,s).max(r,s)}nonempty(r){return this.min(1,r)}}Ia.create=(e,r)=>new Ia({valueType:e,minSize:null,maxSize:null,typeName:Ne.ZodSet,...Fe(r)});class zm extends Ge{get schema(){return this._def.getter()}_parse(r){const{ctx:s}=this._processInputParams(r);return this._def.getter()._parse({data:s.data,path:s.path,parent:s})}}zm.create=(e,r)=>new zm({getter:e,typeName:Ne.ZodLazy,...Fe(r)});class Zm extends Ge{_parse(r){if(r.data!==this._def.value){const s=this._getOrReturnCtx(r);return re(s,{received:s.data,code:X.invalid_literal,expected:this._def.value}),Ae}return{status:"valid",value:r.data}}get value(){return this._def.value}}Zm.create=(e,r)=>new Zm({value:e,typeName:Ne.ZodLiteral,...Fe(r)});function f0(e,r){return new mi({values:e,typeName:Ne.ZodEnum,...Fe(r)})}class mi extends Ge{_parse(r){if(typeof r.data!="string"){const s=this._getOrReturnCtx(r),i=this._def.values;return re(s,{expected:qe.joinValues(i),received:s.parsedType,code:X.invalid_type}),Ae}if(this._cache||(this._cache=new Set(this._def.values)),!this._cache.has(r.data)){const s=this._getOrReturnCtx(r),i=this._def.values;return re(s,{received:s.data,code:X.invalid_enum_value,options:i}),Ae}return kr(r.data)}get options(){return this._def.values}get enum(){const r={};for(const s of this._def.values)r[s]=s;return r}get Values(){const r={};for(const s of this._def.values)r[s]=s;return r}get Enum(){const r={};for(const s of this._def.values)r[s]=s;return r}extract(r,s=this._def){return mi.create(r,{...this._def,...s})}exclude(r,s=this._def){return mi.create(this.options.filter(i=>!r.includes(i)),{...this._def,...s})}}mi.create=f0;class Hm extends Ge{_parse(r){const s=qe.getValidEnumValues(this._def.values),i=this._getOrReturnCtx(r);if(i.parsedType!==de.string&&i.parsedType!==de.number){const o=qe.objectValues(s);return re(i,{expected:qe.joinValues(o),received:i.parsedType,code:X.invalid_type}),Ae}if(this._cache||(this._cache=new Set(qe.getValidEnumValues(this._def.values))),!this._cache.has(r.data)){const o=qe.objectValues(s);return re(i,{received:i.data,code:X.invalid_enum_value,options:o}),Ae}return kr(r.data)}get enum(){return this._def.values}}Hm.create=(e,r)=>new Hm({values:e,typeName:Ne.ZodNativeEnum,...Fe(r)});class _l extends Ge{unwrap(){return this._def.type}_parse(r){const{ctx:s}=this._processInputParams(r);if(s.parsedType!==de.promise&&s.common.async===!1)return re(s,{code:X.invalid_type,expected:de.promise,received:s.parsedType}),Ae;const i=s.parsedType===de.promise?s.data:Promise.resolve(s.data);return kr(i.then(o=>this._def.type.parseAsync(o,{path:s.path,errorMap:s.common.contextualErrorMap})))}}_l.create=(e,r)=>new _l({type:e,typeName:Ne.ZodPromise,...Fe(r)});class gi extends Ge{innerType(){return this._def.schema}sourceType(){return this._def.schema._def.typeName===Ne.ZodEffects?this._def.schema.sourceType():this._def.schema}_parse(r){const{status:s,ctx:i}=this._processInputParams(r),o=this._def.effect||null,c={addIssue:d=>{re(i,d),d.fatal?s.abort():s.dirty()},get path(){return i.path}};if(c.addIssue=c.addIssue.bind(c),o.type==="preprocess"){const d=o.transform(i.data,c);if(i.common.async)return Promise.resolve(d).then(async p=>{if(s.value==="aborted")return Ae;const h=await this._def.schema._parseAsync({data:p,path:i.path,parent:i});return h.status==="aborted"?Ae:h.status==="dirty"||s.value==="dirty"?va(h.value):h});{if(s.value==="aborted")return Ae;const p=this._def.schema._parseSync({data:d,path:i.path,parent:i});return p.status==="aborted"?Ae:p.status==="dirty"||s.value==="dirty"?va(p.value):p}}if(o.type==="refinement"){const d=p=>{const h=o.refinement(p,c);if(i.common.async)return Promise.resolve(h);if(h instanceof Promise)throw new Error("Async refinement encountered during synchronous parse operation. Use .parseAsync instead.");return p};if(i.common.async===!1){const p=this._def.schema._parseSync({data:i.data,path:i.path,parent:i});return p.status==="aborted"?Ae:(p.status==="dirty"&&s.dirty(),d(p.value),{status:s.value,value:p.value})}else return this._def.schema._parseAsync({data:i.data,path:i.path,parent:i}).then(p=>p.status==="aborted"?Ae:(p.status==="dirty"&&s.dirty(),d(p.value).then(()=>({status:s.value,value:p.value}))))}if(o.type==="transform")if(i.common.async===!1){const d=this._def.schema._parseSync({data:i.data,path:i.path,parent:i});if(!hi(d))return Ae;const p=o.transform(d.value,c);if(p instanceof Promise)throw new Error("Asynchronous transform encountered during synchronous parse operation. Use .parseAsync instead.");return{status:s.value,value:p}}else return this._def.schema._parseAsync({data:i.data,path:i.path,parent:i}).then(d=>hi(d)?Promise.resolve(o.transform(d.value,c)).then(p=>({status:s.value,value:p})):Ae);qe.assertNever(o)}}gi.create=(e,r,s)=>new gi({schema:e,typeName:Ne.ZodEffects,effect:r,...Fe(s)});gi.createWithPreprocess=(e,r,s)=>new gi({schema:r,effect:{type:"preprocess",transform:e},typeName:Ne.ZodEffects,...Fe(s)});class rs extends Ge{_parse(r){return this._getType(r)===de.undefined?kr(void 0):this._def.innerType._parse(r)}unwrap(){return this._def.innerType}}rs.create=(e,r)=>new rs({innerType:e,typeName:Ne.ZodOptional,...Fe(r)});class vi extends Ge{_parse(r){return this._getType(r)===de.null?kr(null):this._def.innerType._parse(r)}unwrap(){return this._def.innerType}}vi.create=(e,r)=>new vi({innerType:e,typeName:Ne.ZodNullable,...Fe(r)});class od extends Ge{_parse(r){const{ctx:s}=this._processInputParams(r);let i=s.data;return s.parsedType===de.undefined&&(i=this._def.defaultValue()),this._def.innerType._parse({data:i,path:s.path,parent:s})}removeDefault(){return this._def.innerType}}od.create=(e,r)=>new od({innerType:e,typeName:Ne.ZodDefault,defaultValue:typeof r.default=="function"?r.default:()=>r.default,...Fe(r)});class ld extends Ge{_parse(r){const{ctx:s}=this._processInputParams(r),i={...s,common:{...s.common,issues:[]}},o=this._def.innerType._parse({data:i.data,path:i.path,parent:{...i}});return yl(o)?o.then(c=>({status:"valid",value:c.status==="valid"?c.value:this._def.catchValue({get error(){return new bn(i.common.issues)},input:i.data})})):{status:"valid",value:o.status==="valid"?o.value:this._def.catchValue({get error(){return new bn(i.common.issues)},input:i.data})}}removeCatch(){return this._def.innerType}}ld.create=(e,r)=>new ld({innerType:e,typeName:Ne.ZodCatch,catchValue:typeof r.catch=="function"?r.catch:()=>r.catch,...Fe(r)});class Wm extends Ge{_parse(r){if(this._getType(r)!==de.nan){const i=this._getOrReturnCtx(r);return re(i,{code:X.invalid_type,expected:de.nan,received:i.parsedType}),Ae}return{status:"valid",value:r.data}}}Wm.create=e=>new Wm({typeName:Ne.ZodNaN,...Fe(e)});class ok extends Ge{_parse(r){const{ctx:s}=this._processInputParams(r),i=s.data;return this._def.type._parse({data:i,path:s.path,parent:s})}unwrap(){return this._def.type}}class Hd extends Ge{_parse(r){const{status:s,ctx:i}=this._processInputParams(r);if(i.common.async)return(async()=>{const c=await this._def.in._parseAsync({data:i.data,path:i.path,parent:i});return c.status==="aborted"?Ae:c.status==="dirty"?(s.dirty(),va(c.value)):this._def.out._parseAsync({data:c.value,path:i.path,parent:i})})();{const o=this._def.in._parseSync({data:i.data,path:i.path,parent:i});return o.status==="aborted"?Ae:o.status==="dirty"?(s.dirty(),{status:"dirty",value:o.value}):this._def.out._parseSync({data:o.value,path:i.path,parent:i})}}static create(r,s){return new Hd({in:r,out:s,typeName:Ne.ZodPipeline})}}class cd extends Ge{_parse(r){const s=this._def.innerType._parse(r),i=o=>(hi(o)&&(o.value=Object.freeze(o.value)),o);return yl(s)?s.then(o=>i(o)):i(s)}unwrap(){return this._def.innerType}}cd.create=(e,r)=>new cd({innerType:e,typeName:Ne.ZodReadonly,...Fe(r)});var Ne;(function(e){e.ZodString="ZodString",e.ZodNumber="ZodNumber",e.ZodNaN="ZodNaN",e.ZodBigInt="ZodBigInt",e.ZodBoolean="ZodBoolean",e.ZodDate="ZodDate",e.ZodSymbol="ZodSymbol",e.ZodUndefined="ZodUndefined",e.ZodNull="ZodNull",e.ZodAny="ZodAny",e.ZodUnknown="ZodUnknown",e.ZodNever="ZodNever",e.ZodVoid="ZodVoid",e.ZodArray="ZodArray",e.ZodObject="ZodObject",e.ZodUnion="ZodUnion",e.ZodDiscriminatedUnion="ZodDiscriminatedUnion",e.ZodIntersection="ZodIntersection",e.ZodTuple="ZodTuple",e.ZodRecord="ZodRecord",e.ZodMap="ZodMap",e.ZodSet="ZodSet",e.ZodFunction="ZodFunction",e.ZodLazy="ZodLazy",e.ZodLiteral="ZodLiteral",e.ZodEnum="ZodEnum",e.ZodEffects="ZodEffects",e.ZodNativeEnum="ZodNativeEnum",e.ZodOptional="ZodOptional",e.ZodNullable="ZodNullable",e.ZodDefault="ZodDefault",e.ZodCatch="ZodCatch",e.ZodPromise="ZodPromise",e.ZodBranded="ZodBranded",e.ZodPipeline="ZodPipeline",e.ZodReadonly="ZodReadonly"})(Ne||(Ne={}));const rl=Jn.create;ss.create;Jr.create;const lk=yt.create;xl.create;wl.create;Is.create;mi.create;_l.create;rs.create;vi.create;const Gm=(e,r,s)=>{if(e&&"reportValidity"in e){const i=ae(s,r);e.setCustomValidity(i&&i.message||""),e.reportValidity()}},ud=(e,r)=>{for(const s in r.fields){const i=r.fields[s];i&&i.ref&&"reportValidity"in i.ref?Gm(i.ref,s,e):i&&i.refs&&i.refs.forEach(o=>Gm(o,s,e))}},Km=(e,r)=>{r.shouldUseNativeValidation&&ud(e,r);const s={};for(const i in e){const o=ae(r.fields,i),c=Object.assign(e[i]||{},{ref:o&&o.ref});if(ck(r.names||Object.keys(e),i)){const d=Object.assign({},ae(s,i));Je(d,"root",c),Je(s,i,d)}else Je(s,i,c)}return s},ck=(e,r)=>{const s=qm(r);return e.some(i=>qm(i).match(`^${s}\\.\\d+`))};function qm(e){return e.replace(/\]|\[/g,"")}function p0(e,r,s){function i(p,h){var g;Object.defineProperty(p,"_zod",{value:p._zod??{},enumerable:!1}),(g=p._zod).traits??(g.traits=new Set),p._zod.traits.add(e),r(p,h);for(const v in d.prototype)v in p||Object.defineProperty(p,v,{value:d.prototype[v].bind(p)});p._zod.constr=d,p._zod.def=h}const o=s?.Parent??Object;class c extends o{}Object.defineProperty(c,"name",{value:e});function d(p){var h;const g=s?.Parent?new c:this;i(g,p),(h=g._zod).deferred??(h.deferred=[]);for(const v of g._zod.deferred)v();return g}return Object.defineProperty(d,"init",{value:i}),Object.defineProperty(d,Symbol.hasInstance,{value:p=>s?.Parent&&p instanceof s.Parent?!0:p?._zod?.traits?.has(e)}),Object.defineProperty(d,"name",{value:e}),d}class uk extends Error{constructor(){super("Encountered Promise during synchronous parse. Use .parseAsync() instead.")}}const dk={};function h0(e){return dk}function fk(e,r){return typeof r=="bigint"?r.toString():r}const m0=Error.captureStackTrace?Error.captureStackTrace:(...e)=>{};function nl(e){return typeof e=="string"?e:e?.message}function g0(e,r,s){const i={...e,path:e.path??[]};if(!e.message){const o=nl(e.inst?._zod.def?.error?.(e))??nl(r?.error?.(e))??nl(s.customError?.(e))??nl(s.localeError?.(e))??"Invalid input";i.message=o}return delete i.inst,delete i.continue,r?.reportInput||delete i.input,i}const v0=(e,r)=>{e.name="$ZodError",Object.defineProperty(e,"_zod",{value:e._zod,enumerable:!1}),Object.defineProperty(e,"issues",{value:r,enumerable:!1}),Object.defineProperty(e,"message",{get(){return JSON.stringify(r,fk,2)},enumerable:!0})},pk=p0("$ZodError",v0),y0=p0("$ZodError",v0,{Parent:Error}),hk=e=>(r,s,i,o)=>{const c=i?Object.assign(i,{async:!1}):{async:!1},d=r._zod.run({value:s,issues:[]},c);if(d instanceof Promise)throw new uk;if(d.issues.length){const p=new(o?.Err??e)(d.issues.map(h=>g0(h,c,h0())));throw m0(p,o?.callee),p}return d.value},mk=hk(y0),gk=e=>async(r,s,i,o)=>{const c=i?Object.assign(i,{async:!0}):{async:!0};let d=r._zod.run({value:s,issues:[]},c);if(d instanceof Promise&&(d=await d),d.issues.length){const p=new(o?.Err??e)(d.issues.map(h=>g0(h,c,h0())));throw m0(p,o?.callee),p}return d.value},vk=gk(y0);function Xm(e,r){try{var s=e()}catch(i){return r(i)}return s&&s.then?s.then(void 0,r):s}function yk(e,r){for(var s={};e.length;){var i=e[0],o=i.code,c=i.message,d=i.path.join(".");if(!s[d])if("unionErrors"in i){var p=i.unionErrors[0].errors[0];s[d]={message:p.message,type:p.code}}else s[d]={message:c,type:o};if("unionErrors"in i&&i.unionErrors.forEach(function(v){return v.errors.forEach(function(b){return e.push(b)})}),r){var h=s[d].types,g=h&&h[i.code];s[d]=Bd(d,r,s,o,g?[].concat(g,i.message):i.message)}e.shift()}return s}function bk(e,r){for(var s={};e.length;){var i=e[0],o=i.code,c=i.message,d=i.path.join(".");if(!s[d])if(i.code==="invalid_union"){var p=i.errors[0][0];s[d]={message:p.message,type:p.code}}else s[d]={message:c,type:o};if(i.code==="invalid_union"&&i.errors.forEach(function(v){return v.forEach(function(b){return e.push(b)})}),r){var h=s[d].types,g=h&&h[i.code];s[d]=Bd(d,r,s,o,g?[].concat(g,i.message):i.message)}e.shift()}return s}function xk(e,r,s){if(s===void 0&&(s={}),function(i){return"_def"in i&&typeof i._def=="object"&&"typeName"in i._def}(e))return function(i,o,c){try{return Promise.resolve(Xm(function(){return Promise.resolve(e[s.mode==="sync"?"parse":"parseAsync"](i,r)).then(function(d){return c.shouldUseNativeValidation&&ud({},c),{errors:{},values:s.raw?Object.assign({},i):d}})},function(d){if(function(p){return Array.isArray(p?.issues)}(d))return{values:{},errors:Km(yk(d.errors,!c.shouldUseNativeValidation&&c.criteriaMode==="all"),c)};throw d}))}catch(d){return Promise.reject(d)}};if(function(i){return"_zod"in i&&typeof i._zod=="object"}(e))return function(i,o,c){try{return Promise.resolve(Xm(function(){return Promise.resolve((s.mode==="sync"?mk:vk)(e,i,r)).then(function(d){return c.shouldUseNativeValidation&&ud({},c),{errors:{},values:s.raw?Object.assign({},i):d}})},function(d){if(function(p){return p instanceof pk}(d))return{values:{},errors:Km(bk(d.issues,!c.shouldUseNativeValidation&&c.criteriaMode==="all"),c)};throw d}))}catch(d){return Promise.reject(d)}};throw new Error("Invalid input: not a Zod schema")}/*! @license DOMPurify 3.2.6 | (c) Cure53 and other contributors | Released under the Apache license 2.0 and Mozilla Public License 2.0 | github.com/cure53/DOMPurify/blob/3.2.6/LICENSE */const{entries:b0,setPrototypeOf:Ym,isFrozen:wk,getPrototypeOf:_k,getOwnPropertyDescriptor:Sk}=Object;let{freeze:Wt,seal:wr,create:x0}=Object,{apply:dd,construct:fd}=typeof Reflect<"u"&&Reflect;Wt||(Wt=function(r){return r});wr||(wr=function(r){return r});dd||(dd=function(r,s,i){return r.apply(s,i)});fd||(fd=function(r,s){return new r(...s)});const sl=Gt(Array.prototype.forEach),kk=Gt(Array.prototype.lastIndexOf),Qm=Gt(Array.prototype.pop),da=Gt(Array.prototype.push),Ck=Gt(Array.prototype.splice),cl=Gt(String.prototype.toLowerCase),Su=Gt(String.prototype.toString),Jm=Gt(String.prototype.match),fa=Gt(String.prototype.replace),Ek=Gt(String.prototype.indexOf),Tk=Gt(String.prototype.trim),jr=Gt(Object.prototype.hasOwnProperty),Bt=Gt(RegExp.prototype.test),pa=Pk(TypeError);function Gt(e){return function(r){r instanceof RegExp&&(r.lastIndex=0);for(var s=arguments.length,i=new Array(s>1?s-1:0),o=1;o<s;o++)i[o-1]=arguments[o];return dd(e,r,i)}}function Pk(e){return function(){for(var r=arguments.length,s=new Array(r),i=0;i<r;i++)s[i]=arguments[i];return fd(e,s)}}function Ue(e,r){let s=arguments.length>2&&arguments[2]!==void 0?arguments[2]:cl;Ym&&Ym(e,null);let i=r.length;for(;i--;){let o=r[i];if(typeof o=="string"){const c=s(o);c!==o&&(wk(r)||(r[i]=c),o=c)}e[o]=!0}return e}function Rk(e){for(let r=0;r<e.length;r++)jr(e,r)||(e[r]=null);return e}function mn(e){const r=x0(null);for(const[s,i]of b0(e))jr(e,s)&&(Array.isArray(i)?r[s]=Rk(i):i&&typeof i=="object"&&i.constructor===Object?r[s]=mn(i):r[s]=i);return r}function ha(e,r){for(;e!==null;){const i=Sk(e,r);if(i){if(i.get)return Gt(i.get);if(typeof i.value=="function")return Gt(i.value)}e=_k(e)}function s(){return null}return s}const eg=Wt(["a","abbr","acronym","address","area","article","aside","audio","b","bdi","bdo","big","blink","blockquote","body","br","button","canvas","caption","center","cite","code","col","colgroup","content","data","datalist","dd","decorator","del","details","dfn","dialog","dir","div","dl","dt","element","em","fieldset","figcaption","figure","font","footer","form","h1","h2","h3","h4","h5","h6","head","header","hgroup","hr","html","i","img","input","ins","kbd","label","legend","li","main","map","mark","marquee","menu","menuitem","meter","nav","nobr","ol","optgroup","option","output","p","picture","pre","progress","q","rp","rt","ruby","s","samp","section","select","shadow","small","source","spacer","span","strike","strong","style","sub","summary","sup","table","tbody","td","template","textarea","tfoot","th","thead","time","tr","track","tt","u","ul","var","video","wbr"]),ku=Wt(["svg","a","altglyph","altglyphdef","altglyphitem","animatecolor","animatemotion","animatetransform","circle","clippath","defs","desc","ellipse","filter","font","g","glyph","glyphref","hkern","image","line","lineargradient","marker","mask","metadata","mpath","path","pattern","polygon","polyline","radialgradient","rect","stop","style","switch","symbol","text","textpath","title","tref","tspan","view","vkern"]),Cu=Wt(["feBlend","feColorMatrix","feComponentTransfer","feComposite","feConvolveMatrix","feDiffuseLighting","feDisplacementMap","feDistantLight","feDropShadow","feFlood","feFuncA","feFuncB","feFuncG","feFuncR","feGaussianBlur","feImage","feMerge","feMergeNode","feMorphology","feOffset","fePointLight","feSpecularLighting","feSpotLight","feTile","feTurbulence"]),Ak=Wt(["animate","color-profile","cursor","discard","font-face","font-face-format","font-face-name","font-face-src","font-face-uri","foreignobject","hatch","hatchpath","mesh","meshgradient","meshpatch","meshrow","missing-glyph","script","set","solidcolor","unknown","use"]),Eu=Wt(["math","menclose","merror","mfenced","mfrac","mglyph","mi","mlabeledtr","mmultiscripts","mn","mo","mover","mpadded","mphantom","mroot","mrow","ms","mspace","msqrt","mstyle","msub","msup","msubsup","mtable","mtd","mtext","mtr","munder","munderover","mprescripts"]),Nk=Wt(["maction","maligngroup","malignmark","mlongdiv","mscarries","mscarry","msgroup","mstack","msline","msrow","semantics","annotation","annotation-xml","mprescripts","none"]),tg=Wt(["#text"]),rg=Wt(["accept","action","align","alt","autocapitalize","autocomplete","autopictureinpicture","autoplay","background","bgcolor","border","capture","cellpadding","cellspacing","checked","cite","class","clear","color","cols","colspan","controls","controlslist","coords","crossorigin","datetime","decoding","default","dir","disabled","disablepictureinpicture","disableremoteplayback","download","draggable","enctype","enterkeyhint","face","for","headers","height","hidden","high","href","hreflang","id","inputmode","integrity","ismap","kind","label","lang","list","loading","loop","low","max","maxlength","media","method","min","minlength","multiple","muted","name","nonce","noshade","novalidate","nowrap","open","optimum","pattern","placeholder","playsinline","popover","popovertarget","popovertargetaction","poster","preload","pubdate","radiogroup","readonly","rel","required","rev","reversed","role","rows","rowspan","spellcheck","scope","selected","shape","size","sizes","span","srclang","start","src","srcset","step","style","summary","tabindex","title","translate","type","usemap","valign","value","width","wrap","xmlns","slot"]),Tu=Wt(["accent-height","accumulate","additive","alignment-baseline","amplitude","ascent","attributename","attributetype","azimuth","basefrequency","baseline-shift","begin","bias","by","class","clip","clippathunits","clip-path","clip-rule","color","color-interpolation","color-interpolation-filters","color-profile","color-rendering","cx","cy","d","dx","dy","diffuseconstant","direction","display","divisor","dur","edgemode","elevation","end","exponent","fill","fill-opacity","fill-rule","filter","filterunits","flood-color","flood-opacity","font-family","font-size","font-size-adjust","font-stretch","font-style","font-variant","font-weight","fx","fy","g1","g2","glyph-name","glyphref","gradientunits","gradienttransform","height","href","id","image-rendering","in","in2","intercept","k","k1","k2","k3","k4","kerning","keypoints","keysplines","keytimes","lang","lengthadjust","letter-spacing","kernelmatrix","kernelunitlength","lighting-color","local","marker-end","marker-mid","marker-start","markerheight","markerunits","markerwidth","maskcontentunits","maskunits","max","mask","media","method","mode","min","name","numoctaves","offset","operator","opacity","order","orient","orientation","origin","overflow","paint-order","path","pathlength","patterncontentunits","patterntransform","patternunits","points","preservealpha","preserveaspectratio","primitiveunits","r","rx","ry","radius","refx","refy","repeatcount","repeatdur","restart","result","rotate","scale","seed","shape-rendering","slope","specularconstant","specularexponent","spreadmethod","startoffset","stddeviation","stitchtiles","stop-color","stop-opacity","stroke-dasharray","stroke-dashoffset","stroke-linecap","stroke-linejoin","stroke-miterlimit","stroke-opacity","stroke","stroke-width","style","surfacescale","systemlanguage","tabindex","tablevalues","targetx","targety","transform","transform-origin","text-anchor","text-decoration","text-rendering","textlength","type","u1","u2","unicode","values","viewbox","visibility","version","vert-adv-y","vert-origin-x","vert-origin-y","width","word-spacing","wrap","writing-mode","xchannelselector","ychannelselector","x","x1","x2","xmlns","y","y1","y2","z","zoomandpan"]),ng=Wt(["accent","accentunder","align","bevelled","close","columnsalign","columnlines","columnspan","denomalign","depth","dir","display","displaystyle","encoding","fence","frame","height","href","id","largeop","length","linethickness","lspace","lquote","mathbackground","mathcolor","mathsize","mathvariant","maxsize","minsize","movablelimits","notation","numalign","open","rowalign","rowlines","rowspacing","rowspan","rspace","rquote","scriptlevel","scriptminsize","scriptsizemultiplier","selection","separator","separators","stretchy","subscriptshift","supscriptshift","symmetric","voffset","width","xmlns"]),il=Wt(["xlink:href","xml:id","xlink:title","xml:space","xmlns:xlink"]),Ik=wr(/\{\{[\w\W]*|[\w\W]*\}\}/gm),Mk=wr(/<%[\w\W]*|[\w\W]*%>/gm),Ok=wr(/\$\{[\w\W]*/gm),Lk=wr(/^data-[\-\w.\u00B7-\uFFFF]+$/),jk=wr(/^aria-[\-\w]+$/),w0=wr(/^(?:(?:(?:f|ht)tps?|mailto|tel|callto|sms|cid|xmpp|matrix):|[^a-z]|[a-z+.\-]+(?:[^a-z+.\-:]|$))/i),Dk=wr(/^(?:\w+script|data):/i),Fk=wr(/[\u0000-\u0020\u00A0\u1680\u180E\u2000-\u2029\u205F\u3000]/g),_0=wr(/^html$/i),Vk=wr(/^[a-z][.\w]*(-[.\w]+)+$/i);var sg=Object.freeze({__proto__:null,ARIA_ATTR:jk,ATTR_WHITESPACE:Fk,CUSTOM_ELEMENT:Vk,DATA_ATTR:Lk,DOCTYPE_NAME:_0,ERB_EXPR:Mk,IS_ALLOWED_URI:w0,IS_SCRIPT_OR_DATA:Dk,MUSTACHE_EXPR:Ik,TMPLIT_EXPR:Ok});const ma={element:1,text:3,progressingInstruction:7,comment:8,document:9},Uk=function(){return typeof window>"u"?null:window},$k=function(r,s){if(typeof r!="object"||typeof r.createPolicy!="function")return null;let i=null;const o="data-tt-policy-suffix";s&&s.hasAttribute(o)&&(i=s.getAttribute(o));const c="dompurify"+(i?"#"+i:"");try{return r.createPolicy(c,{createHTML(d){return d},createScriptURL(d){return d}})}catch{return console.warn("TrustedTypes policy "+c+" could not be created."),null}},ig=function(){return{afterSanitizeAttributes:[],afterSanitizeElements:[],afterSanitizeShadowDOM:[],beforeSanitizeAttributes:[],beforeSanitizeElements:[],beforeSanitizeShadowDOM:[],uponSanitizeAttribute:[],uponSanitizeElement:[],uponSanitizeShadowNode:[]}};function S0(){let e=arguments.length>0&&arguments[0]!==void 0?arguments[0]:Uk();const r=ve=>S0(ve);if(r.version="3.2.6",r.removed=[],!e||!e.document||e.document.nodeType!==ma.document||!e.Element)return r.isSupported=!1,r;let{document:s}=e;const i=s,o=i.currentScript,{DocumentFragment:c,HTMLTemplateElement:d,Node:p,Element:h,NodeFilter:g,NamedNodeMap:v=e.NamedNodeMap||e.MozNamedAttrMap,HTMLFormElement:b,DOMParser:w,trustedTypes:j}=e,L=h.prototype,N=ha(L,"cloneNode"),I=ha(L,"remove"),Z=ha(L,"nextSibling"),V=ha(L,"childNodes"),F=ha(L,"parentNode");if(typeof d=="function"){const ve=s.createElement("template");ve.content&&ve.content.ownerDocument&&(s=ve.content.ownerDocument)}let z,T="";const{implementation:Q,createNodeIterator:ye,createDocumentFragment:he,getElementsByTagName:be}=s,{importNode:Ve}=i;let Ce=ig();r.isSupported=typeof b0=="function"&&typeof F=="function"&&Q&&Q.createHTMLDocument!==void 0;const{MUSTACHE_EXPR:xe,ERB_EXPR:we,TMPLIT_EXPR:Oe,DATA_ATTR:Ye,ARIA_ATTR:He,IS_SCRIPT_OR_DATA:Re,ATTR_WHITESPACE:K,CUSTOM_ELEMENT:fe}=sg;let{IS_ALLOWED_URI:J}=sg,C=null;const U=Ue({},[...eg,...ku,...Cu,...Eu,...tg]);let oe=null;const Te=Ue({},[...rg,...Tu,...ng,...il]);let le=Object.seal(x0(null,{tagNameCheck:{writable:!0,configurable:!1,enumerable:!0,value:null},attributeNameCheck:{writable:!0,configurable:!1,enumerable:!0,value:null},allowCustomizedBuiltInElements:{writable:!0,configurable:!1,enumerable:!0,value:!1}})),Pe=null,Le=null,Ie=!0,je=!0,ht=!1,tn=!0,cr=!1,Cr=!0,Kt=!1,rn=!1,xn=!1,ur=!1,wn=!1,Er=!1,_=!0,R=!1;const D="user-content-";let ee=!0,Y=!1,W={},se=null;const $e=Ue({},["annotation-xml","audio","colgroup","desc","foreignobject","head","iframe","math","mi","mn","mo","ms","mtext","noembed","noframes","noscript","plaintext","script","style","svg","template","thead","title","video","xmp"]);let ze=null;const St=Ue({},["audio","video","img","source","image","track"]);let qt=null;const At=Ue({},["alt","class","for","id","label","name","pattern","placeholder","role","summary","title","value","style","xmlns"]),_n="http://www.w3.org/1998/Math/MathML",Tr="http://www.w3.org/2000/svg",Mt="http://www.w3.org/1999/xhtml";let Vr=Mt,Ur=!1,nn=null;const Sn=Ue({},[_n,Tr,Mt],Su);let kn=Ue({},["mi","mo","mn","ms","mtext"]),Cn=Ue({},["annotation-xml"]);const En=Ue({},["title","style","font","a","script"]);let dr=null;const Ba=["application/xhtml+xml","text/html"],za="text/html";let dt=null,sn=null;const Za=s.createElement("form"),Ls=function(k){return k instanceof RegExp||k instanceof Function},js=function(){let k=arguments.length>0&&arguments[0]!==void 0?arguments[0]:{};if(!(sn&&sn===k)){if((!k||typeof k!="object")&&(k={}),k=mn(k),dr=Ba.indexOf(k.PARSER_MEDIA_TYPE)===-1?za:k.PARSER_MEDIA_TYPE,dt=dr==="application/xhtml+xml"?Su:cl,C=jr(k,"ALLOWED_TAGS")?Ue({},k.ALLOWED_TAGS,dt):U,oe=jr(k,"ALLOWED_ATTR")?Ue({},k.ALLOWED_ATTR,dt):Te,nn=jr(k,"ALLOWED_NAMESPACES")?Ue({},k.ALLOWED_NAMESPACES,Su):Sn,qt=jr(k,"ADD_URI_SAFE_ATTR")?Ue(mn(At),k.ADD_URI_SAFE_ATTR,dt):At,ze=jr(k,"ADD_DATA_URI_TAGS")?Ue(mn(St),k.ADD_DATA_URI_TAGS,dt):St,se=jr(k,"FORBID_CONTENTS")?Ue({},k.FORBID_CONTENTS,dt):$e,Pe=jr(k,"FORBID_TAGS")?Ue({},k.FORBID_TAGS,dt):mn({}),Le=jr(k,"FORBID_ATTR")?Ue({},k.FORBID_ATTR,dt):mn({}),W=jr(k,"USE_PROFILES")?k.USE_PROFILES:!1,Ie=k.ALLOW_ARIA_ATTR!==!1,je=k.ALLOW_DATA_ATTR!==!1,ht=k.ALLOW_UNKNOWN_PROTOCOLS||!1,tn=k.ALLOW_SELF_CLOSE_IN_ATTR!==!1,cr=k.SAFE_FOR_TEMPLATES||!1,Cr=k.SAFE_FOR_XML!==!1,Kt=k.WHOLE_DOCUMENT||!1,ur=k.RETURN_DOM||!1,wn=k.RETURN_DOM_FRAGMENT||!1,Er=k.RETURN_TRUSTED_TYPE||!1,xn=k.FORCE_BODY||!1,_=k.SANITIZE_DOM!==!1,R=k.SANITIZE_NAMED_PROPS||!1,ee=k.KEEP_CONTENT!==!1,Y=k.IN_PLACE||!1,J=k.ALLOWED_URI_REGEXP||w0,Vr=k.NAMESPACE||Mt,kn=k.MATHML_TEXT_INTEGRATION_POINTS||kn,Cn=k.HTML_INTEGRATION_POINTS||Cn,le=k.CUSTOM_ELEMENT_HANDLING||{},k.CUSTOM_ELEMENT_HANDLING&&Ls(k.CUSTOM_ELEMENT_HANDLING.tagNameCheck)&&(le.tagNameCheck=k.CUSTOM_ELEMENT_HANDLING.tagNameCheck),k.CUSTOM_ELEMENT_HANDLING&&Ls(k.CUSTOM_ELEMENT_HANDLING.attributeNameCheck)&&(le.attributeNameCheck=k.CUSTOM_ELEMENT_HANDLING.attributeNameCheck),k.CUSTOM_ELEMENT_HANDLING&&typeof k.CUSTOM_ELEMENT_HANDLING.allowCustomizedBuiltInElements=="boolean"&&(le.allowCustomizedBuiltInElements=k.CUSTOM_ELEMENT_HANDLING.allowCustomizedBuiltInElements),cr&&(je=!1),wn&&(ur=!0),W&&(C=Ue({},tg),oe=[],W.html===!0&&(Ue(C,eg),Ue(oe,rg)),W.svg===!0&&(Ue(C,ku),Ue(oe,Tu),Ue(oe,il)),W.svgFilters===!0&&(Ue(C,Cu),Ue(oe,Tu),Ue(oe,il)),W.mathMl===!0&&(Ue(C,Eu),Ue(oe,ng),Ue(oe,il))),k.ADD_TAGS&&(C===U&&(C=mn(C)),Ue(C,k.ADD_TAGS,dt)),k.ADD_ATTR&&(oe===Te&&(oe=mn(oe)),Ue(oe,k.ADD_ATTR,dt)),k.ADD_URI_SAFE_ATTR&&Ue(qt,k.ADD_URI_SAFE_ATTR,dt),k.FORBID_CONTENTS&&(se===$e&&(se=mn(se)),Ue(se,k.FORBID_CONTENTS,dt)),ee&&(C["#text"]=!0),Kt&&Ue(C,["html","head","body"]),C.table&&(Ue(C,["tbody"]),delete Pe.tbody),k.TRUSTED_TYPES_POLICY){if(typeof k.TRUSTED_TYPES_POLICY.createHTML!="function")throw pa('TRUSTED_TYPES_POLICY configuration option must provide a "createHTML" hook.');if(typeof k.TRUSTED_TYPES_POLICY.createScriptURL!="function")throw pa('TRUSTED_TYPES_POLICY configuration option must provide a "createScriptURL" hook.');z=k.TRUSTED_TYPES_POLICY,T=z.createHTML("")}else z===void 0&&(z=$k(j,o)),z!==null&&typeof T=="string"&&(T=z.createHTML(""));Wt&&Wt(k),sn=k}},Tn=Ue({},[...ku,...Cu,...Ak]),Ds=Ue({},[...Eu,...Nk]),os=function(k){let G=F(k);(!G||!G.tagName)&&(G={namespaceURI:Vr,tagName:"template"});const ce=cl(k.tagName),et=cl(G.tagName);return nn[k.namespaceURI]?k.namespaceURI===Tr?G.namespaceURI===Mt?ce==="svg":G.namespaceURI===_n?ce==="svg"&&(et==="annotation-xml"||kn[et]):!!Tn[ce]:k.namespaceURI===_n?G.namespaceURI===Mt?ce==="math":G.namespaceURI===Tr?ce==="math"&&Cn[et]:!!Ds[ce]:k.namespaceURI===Mt?G.namespaceURI===Tr&&!Cn[et]||G.namespaceURI===_n&&!kn[et]?!1:!Ds[ce]&&(En[ce]||!Tn[ce]):!!(dr==="application/xhtml+xml"&&nn[k.namespaceURI]):!1},fr=function(k){da(r.removed,{element:k});try{F(k).removeChild(k)}catch{I(k)}},pr=function(k,G){try{da(r.removed,{attribute:G.getAttributeNode(k),from:G})}catch{da(r.removed,{attribute:null,from:G})}if(G.removeAttribute(k),k==="is")if(ur||wn)try{fr(G)}catch{}else try{G.setAttribute(k,"")}catch{}},ls=function(k){let G=null,ce=null;if(xn)k="<remove></remove>"+k;else{const Me=Jm(k,/^[\r\n\t ]+/);ce=Me&&Me[0]}dr==="application/xhtml+xml"&&Vr===Mt&&(k='<html xmlns="http://www.w3.org/1999/xhtml"><head></head><body>'+k+"</body></html>");const et=z?z.createHTML(k):k;if(Vr===Mt)try{G=new w().parseFromString(et,dr)}catch{}if(!G||!G.documentElement){G=Q.createDocument(Vr,"template",null);try{G.documentElement.innerHTML=Ur?T:et}catch{}}const kt=G.body||G.documentElement;return k&&ce&&kt.insertBefore(s.createTextNode(ce),kt.childNodes[0]||null),Vr===Mt?be.call(G,Kt?"html":"body")[0]:Kt?G.documentElement:kt},cs=function(k){return ye.call(k.ownerDocument||k,k,g.SHOW_ELEMENT|g.SHOW_COMMENT|g.SHOW_TEXT|g.SHOW_PROCESSING_INSTRUCTION|g.SHOW_CDATA_SECTION,null)},us=function(k){return k instanceof b&&(typeof k.nodeName!="string"||typeof k.textContent!="string"||typeof k.removeChild!="function"||!(k.attributes instanceof v)||typeof k.removeAttribute!="function"||typeof k.setAttribute!="function"||typeof k.namespaceURI!="string"||typeof k.insertBefore!="function"||typeof k.hasChildNodes!="function")},Ha=function(k){return typeof p=="function"&&k instanceof p};function Pr(ve,k,G){sl(ve,ce=>{ce.call(r,k,G,sn)})}const Wa=function(k){let G=null;if(Pr(Ce.beforeSanitizeElements,k,null),us(k))return fr(k),!0;const ce=dt(k.nodeName);if(Pr(Ce.uponSanitizeElement,k,{tagName:ce,allowedTags:C}),Cr&&k.hasChildNodes()&&!Ha(k.firstElementChild)&&Bt(/<[/\w!]/g,k.innerHTML)&&Bt(/<[/\w!]/g,k.textContent)||k.nodeType===ma.progressingInstruction||Cr&&k.nodeType===ma.comment&&Bt(/<[/\w]/g,k.data))return fr(k),!0;if(!C[ce]||Pe[ce]){if(!Pe[ce]&&Ei(ce)&&(le.tagNameCheck instanceof RegExp&&Bt(le.tagNameCheck,ce)||le.tagNameCheck instanceof Function&&le.tagNameCheck(ce)))return!1;if(ee&&!se[ce]){const et=F(k)||k.parentNode,kt=V(k)||k.childNodes;if(kt&&et){const Me=kt.length;for(let Ot=Me-1;Ot>=0;--Ot){const nr=N(kt[Ot],!0);nr.__removalCount=(k.__removalCount||0)+1,et.insertBefore(nr,Z(k))}}}return fr(k),!0}return k instanceof h&&!os(k)||(ce==="noscript"||ce==="noembed"||ce==="noframes")&&Bt(/<\/no(script|embed|frames)/i,k.innerHTML)?(fr(k),!0):(cr&&k.nodeType===ma.text&&(G=k.textContent,sl([xe,we,Oe],et=>{G=fa(G,et," ")}),k.textContent!==G&&(da(r.removed,{element:k.cloneNode()}),k.textContent=G)),Pr(Ce.afterSanitizeElements,k,null),!1)},$r=function(k,G,ce){if(_&&(G==="id"||G==="name")&&(ce in s||ce in Za))return!1;if(!(je&&!Le[G]&&Bt(Ye,G))){if(!(Ie&&Bt(He,G))){if(!oe[G]||Le[G]){if(!(Ei(k)&&(le.tagNameCheck instanceof RegExp&&Bt(le.tagNameCheck,k)||le.tagNameCheck instanceof Function&&le.tagNameCheck(k))&&(le.attributeNameCheck instanceof RegExp&&Bt(le.attributeNameCheck,G)||le.attributeNameCheck instanceof Function&&le.attributeNameCheck(G))||G==="is"&&le.allowCustomizedBuiltInElements&&(le.tagNameCheck instanceof RegExp&&Bt(le.tagNameCheck,ce)||le.tagNameCheck instanceof Function&&le.tagNameCheck(ce))))return!1}else if(!qt[G]){if(!Bt(J,fa(ce,K,""))){if(!((G==="src"||G==="xlink:href"||G==="href")&&k!=="script"&&Ek(ce,"data:")===0&&ze[k])){if(!(ht&&!Bt(Re,fa(ce,K,"")))){if(ce)return!1}}}}}}return!0},Ei=function(k){return k!=="annotation-xml"&&Jm(k,fe)},Ti=function(k){Pr(Ce.beforeSanitizeAttributes,k,null);const{attributes:G}=k;if(!G||us(k))return;const ce={attrName:"",attrValue:"",keepAttr:!0,allowedAttributes:oe,forceKeepAttr:void 0};let et=G.length;for(;et--;){const kt=G[et],{name:Me,namespaceURI:Ot,value:nr}=kt,Pn=dt(Me),Rn=nr;let Ct=Me==="value"?Rn:Tk(Rn);if(ce.attrName=Pn,ce.attrValue=Ct,ce.keepAttr=!0,ce.forceKeepAttr=void 0,Pr(Ce.uponSanitizeAttribute,k,ce),Ct=ce.attrValue,R&&(Pn==="id"||Pn==="name")&&(pr(Me,k),Ct=D+Ct),Cr&&Bt(/((--!?|])>)|<\/(style|title)/i,Ct)){pr(Me,k);continue}if(ce.forceKeepAttr)continue;if(!ce.keepAttr){pr(Me,k);continue}if(!tn&&Bt(/\/>/i,Ct)){pr(Me,k);continue}cr&&sl([xe,we,Oe],ds=>{Ct=fa(Ct,ds," ")});const Pi=dt(k.nodeName);if(!$r(Pi,Pn,Ct)){pr(Me,k);continue}if(z&&typeof j=="object"&&typeof j.getAttributeType=="function"&&!Ot)switch(j.getAttributeType(Pi,Pn)){case"TrustedHTML":{Ct=z.createHTML(Ct);break}case"TrustedScriptURL":{Ct=z.createScriptURL(Ct);break}}if(Ct!==Rn)try{Ot?k.setAttributeNS(Ot,Me,Ct):k.setAttribute(Me,Ct),us(k)?fr(k):Qm(r.removed)}catch{pr(Me,k)}}Pr(Ce.afterSanitizeAttributes,k,null)},Cl=function ve(k){let G=null;const ce=cs(k);for(Pr(Ce.beforeSanitizeShadowDOM,k,null);G=ce.nextNode();)Pr(Ce.uponSanitizeShadowNode,G,null),Wa(G),Ti(G),G.content instanceof c&&ve(G.content);Pr(Ce.afterSanitizeShadowDOM,k,null)};return r.sanitize=function(ve){let k=arguments.length>1&&arguments[1]!==void 0?arguments[1]:{},G=null,ce=null,et=null,kt=null;if(Ur=!ve,Ur&&(ve="<!-->"),typeof ve!="string"&&!Ha(ve))if(typeof ve.toString=="function"){if(ve=ve.toString(),typeof ve!="string")throw pa("dirty is not a string, aborting")}else throw pa("toString is not a function");if(!r.isSupported)return ve;if(rn||js(k),r.removed=[],typeof ve=="string"&&(Y=!1),Y){if(ve.nodeName){const nr=dt(ve.nodeName);if(!C[nr]||Pe[nr])throw pa("root node is forbidden and cannot be sanitized in-place")}}else if(ve instanceof p)G=ls("<!---->"),ce=G.ownerDocument.importNode(ve,!0),ce.nodeType===ma.element&&ce.nodeName==="BODY"||ce.nodeName==="HTML"?G=ce:G.appendChild(ce);else{if(!ur&&!cr&&!Kt&&ve.indexOf("<")===-1)return z&&Er?z.createHTML(ve):ve;if(G=ls(ve),!G)return ur?null:Er?T:""}G&&xn&&fr(G.firstChild);const Me=cs(Y?ve:G);for(;et=Me.nextNode();)Wa(et),Ti(et),et.content instanceof c&&Cl(et.content);if(Y)return ve;if(ur){if(wn)for(kt=he.call(G.ownerDocument);G.firstChild;)kt.appendChild(G.firstChild);else kt=G;return(oe.shadowroot||oe.shadowrootmode)&&(kt=Ve.call(i,kt,!0)),kt}let Ot=Kt?G.outerHTML:G.innerHTML;return Kt&&C["!doctype"]&&G.ownerDocument&&G.ownerDocument.doctype&&G.ownerDocument.doctype.name&&Bt(_0,G.ownerDocument.doctype.name)&&(Ot="<!DOCTYPE "+G.ownerDocument.doctype.name+`>
`+Ot),cr&&sl([xe,we,Oe],nr=>{Ot=fa(Ot,nr," ")}),z&&Er?z.createHTML(Ot):Ot},r.setConfig=function(){let ve=arguments.length>0&&arguments[0]!==void 0?arguments[0]:{};js(ve),rn=!0},r.clearConfig=function(){sn=null,rn=!1},r.isValidAttribute=function(ve,k,G){sn||js({});const ce=dt(ve),et=dt(k);return $r(ce,et,G)},r.addHook=function(ve,k){typeof k=="function"&&da(Ce[ve],k)},r.removeHook=function(ve,k){if(k!==void 0){const G=kk(Ce[ve],k);return G===-1?void 0:Ck(Ce[ve],G,1)[0]}return Qm(Ce[ve])},r.removeHooks=function(ve){Ce[ve]=[]},r.removeAllHooks=function(){Ce=ig()},r}var Pu=S0();const Bk=lk({name:rl().min(2,"contact.nameMin"),email:rl().email("contact.emailInvalid"),phone:rl().optional(),message:rl().min(10,"contact.messageMin")}),zk=()=>{const{register:e,handleSubmit:r,formState:{errors:s,isSubmitting:i},reset:o}=LS({resolver:xk(Bk)}),c=async d=>{Pu.sanitize(d.name),Pu.sanitize(d.email),Pu.sanitize(d.message),await new Promise(p=>setTimeout(p,800)),alert("訊息已送出！"),o()};return y.jsxs("div",{className:"contact",children:[y.jsx("section",{className:"contact-hero",children:y.jsxs("div",{className:"container",children:[y.jsx("h1",{className:"section-title",children:y.jsx(at,{id:"contact.title",defaultMessage:"聯絡我"})}),y.jsx("p",{className:"section-subtitle",children:y.jsx(at,{id:"contact.subtitle",defaultMessage:"歡迎透過下列表單與我聯繫！"})})]})}),y.jsx("section",{className:"contact-content",children:y.jsxs("div",{className:"container contact-grid",children:[y.jsxs("div",{className:"contact-info",children:[y.jsx("h2",{children:y.jsx(at,{id:"contact.infoTitle",defaultMessage:"聯絡資訊"})}),y.jsx("p",{children:y.jsx(at,{id:"contact.infoDesc",defaultMessage:"您可以填寫表單或直接來信/社群聯絡我。"})}),y.jsxs("div",{className:"contact-methods",children:[y.jsxs("div",{className:"contact-method",children:[y.jsx("span",{className:"contact-icon","aria-label":"Email",children:"📧"}),y.jsxs("div",{className:"contact-details",children:[y.jsx("h3",{children:"Email"}),y.jsx("p",{children:y.jsx("a",{href:"mailto:chang.jung.lu@example.com",children:"chang.jung.lu@example.com"})})]})]}),y.jsxs("div",{className:"contact-method",children:[y.jsx("span",{className:"contact-icon","aria-label":"LinkedIn",children:"💼"}),y.jsxs("div",{className:"contact-details",children:[y.jsx("h3",{children:"LinkedIn"}),y.jsx("p",{children:y.jsx("a",{href:"https://linkedin.com/in/yourprofile",target:"_blank",rel:"noopener noreferrer",children:"linkedin.com/in/yourprofile"})})]})]})]})]}),y.jsxs("form",{className:"contact-form",onSubmit:r(c),noValidate:!0,"aria-label":"聯絡表單",children:[y.jsx("h2",{children:y.jsx(at,{id:"contact.formTitle",defaultMessage:"聯絡表單"})}),y.jsxs("div",{className:"form-group",children:[y.jsxs("label",{htmlFor:"name",children:[y.jsx(at,{id:"contact.name",defaultMessage:"姓名"}),y.jsx("span",{"aria-label":"必填",children:"*"})]}),y.jsx("input",{id:"name",type:"text",...e("name"),"aria-invalid":!!s.name,"aria-describedby":s.name?"name-error":void 0,autoComplete:"name"}),s.name&&y.jsx("span",{id:"name-error",role:"alert",className:"error-message",children:y.jsx(at,{id:s.name.message||"contact.nameMin",defaultMessage:"姓名至少2個字元"})})]}),y.jsxs("div",{className:"form-group",children:[y.jsx("label",{htmlFor:"phone",children:y.jsx(at,{id:"contact.phone",defaultMessage:"電話"})}),y.jsx("input",{id:"phone",type:"tel",...e("phone"),autoComplete:"tel",placeholder:"請輸入電話號碼"})]}),y.jsxs("div",{className:"form-group",children:[y.jsxs("label",{htmlFor:"email",children:[y.jsx(at,{id:"contact.email",defaultMessage:"電子郵件"}),y.jsx("span",{"aria-label":"必填",children:"*"})]}),y.jsx("input",{id:"email",type:"email",...e("email"),"aria-invalid":!!s.email,"aria-describedby":s.email?"email-error":void 0,autoComplete:"email"}),s.email&&y.jsx("span",{id:"email-error",role:"alert",className:"error-message",children:y.jsx(at,{id:s.email.message||"contact.emailInvalid",defaultMessage:"請輸入有效的電子郵件"})})]}),y.jsxs("div",{className:"form-group",children:[y.jsxs("label",{htmlFor:"message",children:[y.jsx(at,{id:"contact.message",defaultMessage:"訊息內容"}),y.jsx("span",{"aria-label":"必填",children:"*"})]}),y.jsx("textarea",{id:"message",...e("message"),"aria-invalid":!!s.message,"aria-describedby":s.message?"message-error":void 0,minLength:10}),s.message&&y.jsx("span",{id:"message-error",role:"alert",className:"error-message",children:y.jsx(at,{id:s.message.message||"contact.messageMin",defaultMessage:"訊息至少10個字元"})})]}),y.jsx("button",{type:"submit",className:"btn btn-primary",disabled:i,"aria-busy":i,children:i?y.jsx(at,{id:"contact.sending",defaultMessage:"送出中..."}):y.jsx(at,{id:"contact.send",defaultMessage:"送出"})})]})]})})]})},Zk=()=>y.jsxs("div",{className:"relative flex flex-col items-center justify-center w-[350px] h-[300px] rounded-2xl bg-white/20 backdrop-blur-md shadow-xl border border-white/30 p-8",children:[y.jsx("h2",{className:"text-2xl font-bold mb-2 text-zinc-800 dark:text-zinc-100",children:"Glass Card"}),y.jsx("p",{className:"text-zinc-600 dark:text-zinc-300 text-center",children:"這是一個玻璃擬態（Glassmorphism）卡片元件範例。你可以在這裡放任何內容。"})]});function Ci(e,r){if(e==null)return{};var s={},i=Object.keys(e),o,c;for(c=0;c<i.length;c++)o=i[c],!(r.indexOf(o)>=0)&&(s[o]=e[o]);return s}var Hk=["color"],Wk=O.forwardRef(function(e,r){var s=e.color,i=s===void 0?"currentColor":s,o=Ci(e,Hk);return O.createElement("svg",Object.assign({width:"15",height:"15",viewBox:"0 0 15 15",fill:"none",xmlns:"http://www.w3.org/2000/svg"},o,{ref:r}),O.createElement("path",{d:"M8.14645 3.14645C8.34171 2.95118 8.65829 2.95118 8.85355 3.14645L12.8536 7.14645C13.0488 7.34171 13.0488 7.65829 12.8536 7.85355L8.85355 11.8536C8.65829 12.0488 8.34171 12.0488 8.14645 11.8536C7.95118 11.6583 7.95118 11.3417 8.14645 11.1464L11.2929 8H2.5C2.22386 8 2 7.77614 2 7.5C2 7.22386 2.22386 7 2.5 7H11.2929L8.14645 3.85355C7.95118 3.65829 7.95118 3.34171 8.14645 3.14645Z",fill:i,fillRule:"evenodd",clipRule:"evenodd"}))}),Gk=["color"],Kk=O.forwardRef(function(e,r){var s=e.color,i=s===void 0?"currentColor":s,o=Ci(e,Gk);return O.createElement("svg",Object.assign({width:"15",height:"15",viewBox:"0 0 15 15",fill:"none",xmlns:"http://www.w3.org/2000/svg"},o,{ref:r}),O.createElement("path",{d:"M8.60124 1.25086C8.60124 1.75459 8.26278 2.17927 7.80087 2.30989C10.1459 2.4647 12 4.41582 12 6.79999V10.25C12 11.0563 12.0329 11.7074 12.7236 12.0528C12.931 12.1565 13.0399 12.3892 12.9866 12.6149C12.9333 12.8406 12.7319 13 12.5 13H8.16144C8.36904 13.1832 8.49997 13.4513 8.49997 13.75C8.49997 14.3023 8.05226 14.75 7.49997 14.75C6.94769 14.75 6.49997 14.3023 6.49997 13.75C6.49997 13.4513 6.63091 13.1832 6.83851 13H2.49999C2.2681 13 2.06664 12.8406 2.01336 12.6149C1.96009 12.3892 2.06897 12.1565 2.27638 12.0528C2.96708 11.7074 2.99999 11.0563 2.99999 10.25V6.79999C2.99999 4.41537 4.85481 2.46396 7.20042 2.3098C6.73867 2.17908 6.40036 1.75448 6.40036 1.25086C6.40036 0.643104 6.89304 0.150421 7.5008 0.150421C8.10855 0.150421 8.60124 0.643104 8.60124 1.25086ZM7.49999 3.29999C5.56699 3.29999 3.99999 4.86699 3.99999 6.79999V10.25L4.00002 10.3009C4.0005 10.7463 4.00121 11.4084 3.69929 12H11.3007C10.9988 11.4084 10.9995 10.7463 11 10.3009L11 10.25V6.79999C11 4.86699 9.43299 3.29999 7.49999 3.29999Z",fill:i,fillRule:"evenodd",clipRule:"evenodd"}))}),qk=["color"],Xk=O.forwardRef(function(e,r){var s=e.color,i=s===void 0?"currentColor":s,o=Ci(e,qk);return O.createElement("svg",Object.assign({width:"15",height:"15",viewBox:"0 0 15 15",fill:"none",xmlns:"http://www.w3.org/2000/svg"},o,{ref:r}),O.createElement("path",{d:"M4.5 1C4.77614 1 5 1.22386 5 1.5V2H10V1.5C10 1.22386 10.2239 1 10.5 1C10.7761 1 11 1.22386 11 1.5V2H12.5C13.3284 2 14 2.67157 14 3.5V12.5C14 13.3284 13.3284 14 12.5 14H2.5C1.67157 14 1 13.3284 1 12.5V3.5C1 2.67157 1.67157 2 2.5 2H4V1.5C4 1.22386 4.22386 1 4.5 1ZM10 3V3.5C10 3.77614 10.2239 4 10.5 4C10.7761 4 11 3.77614 11 3.5V3H12.5C12.7761 3 13 3.22386 13 3.5V5H2V3.5C2 3.22386 2.22386 3 2.5 3H4V3.5C4 3.77614 4.22386 4 4.5 4C4.77614 4 5 3.77614 5 3.5V3H10ZM2 6V12.5C2 12.7761 2.22386 13 2.5 13H12.5C12.7761 13 13 12.7761 13 12.5V6H2ZM7 7.5C7 7.22386 7.22386 7 7.5 7C7.77614 7 8 7.22386 8 7.5C8 7.77614 7.77614 8 7.5 8C7.22386 8 7 7.77614 7 7.5ZM9.5 7C9.22386 7 9 7.22386 9 7.5C9 7.77614 9.22386 8 9.5 8C9.77614 8 10 7.77614 10 7.5C10 7.22386 9.77614 7 9.5 7ZM11 7.5C11 7.22386 11.2239 7 11.5 7C11.7761 7 12 7.22386 12 7.5C12 7.77614 11.7761 8 11.5 8C11.2239 8 11 7.77614 11 7.5ZM11.5 9C11.2239 9 11 9.22386 11 9.5C11 9.77614 11.2239 10 11.5 10C11.7761 10 12 9.77614 12 9.5C12 9.22386 11.7761 9 11.5 9ZM9 9.5C9 9.22386 9.22386 9 9.5 9C9.77614 9 10 9.22386 10 9.5C10 9.77614 9.77614 10 9.5 10C9.22386 10 9 9.77614 9 9.5ZM7.5 9C7.22386 9 7 9.22386 7 9.5C7 9.77614 7.22386 10 7.5 10C7.77614 10 8 9.77614 8 9.5C8 9.22386 7.77614 9 7.5 9ZM5 9.5C5 9.22386 5.22386 9 5.5 9C5.77614 9 6 9.22386 6 9.5C6 9.77614 5.77614 10 5.5 10C5.22386 10 5 9.77614 5 9.5ZM3.5 9C3.22386 9 3 9.22386 3 9.5C3 9.77614 3.22386 10 3.5 10C3.77614 10 4 9.77614 4 9.5C4 9.22386 3.77614 9 3.5 9ZM3 11.5C3 11.2239 3.22386 11 3.5 11C3.77614 11 4 11.2239 4 11.5C4 11.7761 3.77614 12 3.5 12C3.22386 12 3 11.7761 3 11.5ZM5.5 11C5.22386 11 5 11.2239 5 11.5C5 11.7761 5.22386 12 5.5 12C5.77614 12 6 11.7761 6 11.5C6 11.2239 5.77614 11 5.5 11ZM7 11.5C7 11.2239 7.22386 11 7.5 11C7.77614 11 8 11.2239 8 11.5C8 11.7761 7.77614 12 7.5 12C7.22386 12 7 11.7761 7 11.5ZM9.5 11C9.22386 11 9 11.2239 9 11.5C9 11.7761 9.22386 12 9.5 12C9.77614 12 10 11.7761 10 11.5C10 11.2239 9.77614 11 9.5 11Z",fill:i,fillRule:"evenodd",clipRule:"evenodd"}))}),Yk=["color"],Qk=O.forwardRef(function(e,r){var s=e.color,i=s===void 0?"currentColor":s,o=Ci(e,Yk);return O.createElement("svg",Object.assign({width:"15",height:"15",viewBox:"0 0 15 15",fill:"none",xmlns:"http://www.w3.org/2000/svg"},o,{ref:r}),O.createElement("path",{d:"M3 2.5C3 2.22386 3.22386 2 3.5 2H9.08579C9.21839 2 9.34557 2.05268 9.43934 2.14645L11.8536 4.56066C11.9473 4.65443 12 4.78161 12 4.91421V12.5C12 12.7761 11.7761 13 11.5 13H3.5C3.22386 13 3 12.7761 3 12.5V2.5ZM3.5 1C2.67157 1 2 1.67157 2 2.5V12.5C2 13.3284 2.67157 14 3.5 14H11.5C12.3284 14 13 13.3284 13 12.5V4.91421C13 4.51639 12.842 4.13486 12.5607 3.85355L10.1464 1.43934C9.86514 1.15804 9.48361 1 9.08579 1H3.5ZM4.5 4C4.22386 4 4 4.22386 4 4.5C4 4.77614 4.22386 5 4.5 5H7.5C7.77614 5 8 4.77614 8 4.5C8 4.22386 7.77614 4 7.5 4H4.5ZM4.5 7C4.22386 7 4 7.22386 4 7.5C4 7.77614 4.22386 8 4.5 8H10.5C10.7761 8 11 7.77614 11 7.5C11 7.22386 10.7761 7 10.5 7H4.5ZM4.5 10C4.22386 10 4 10.2239 4 10.5C4 10.7761 4.22386 11 4.5 11H10.5C10.7761 11 11 10.7761 11 10.5C11 10.2239 10.7761 10 10.5 10H4.5Z",fill:i,fillRule:"evenodd",clipRule:"evenodd"}))}),Jk=["color"],eC=O.forwardRef(function(e,r){var s=e.color,i=s===void 0?"currentColor":s,o=Ci(e,Jk);return O.createElement("svg",Object.assign({width:"15",height:"15",viewBox:"0 0 15 15",fill:"none",xmlns:"http://www.w3.org/2000/svg"},o,{ref:r}),O.createElement("path",{d:"M7.49996 1.80002C4.35194 1.80002 1.79996 4.352 1.79996 7.50002C1.79996 10.648 4.35194 13.2 7.49996 13.2C10.648 13.2 13.2 10.648 13.2 7.50002C13.2 4.352 10.648 1.80002 7.49996 1.80002ZM0.899963 7.50002C0.899963 3.85494 3.85488 0.900024 7.49996 0.900024C11.145 0.900024 14.1 3.85494 14.1 7.50002C14.1 11.1451 11.145 14.1 7.49996 14.1C3.85488 14.1 0.899963 11.1451 0.899963 7.50002Z",fill:i,fillRule:"evenodd",clipRule:"evenodd"}),O.createElement("path",{d:"M13.4999 7.89998H1.49994V7.09998H13.4999V7.89998Z",fill:i,fillRule:"evenodd",clipRule:"evenodd"}),O.createElement("path",{d:"M7.09991 13.5V1.5H7.89991V13.5H7.09991zM10.375 7.49998C10.375 5.32724 9.59364 3.17778 8.06183 1.75656L8.53793 1.24341C10.2396 2.82218 11.075 5.17273 11.075 7.49998 11.075 9.82724 10.2396 12.1778 8.53793 13.7566L8.06183 13.2434C9.59364 11.8222 10.375 9.67273 10.375 7.49998zM3.99969 7.5C3.99969 5.17611 4.80786 2.82678 6.45768 1.24719L6.94177 1.75281C5.4582 3.17323 4.69969 5.32389 4.69969 7.5 4.6997 9.67611 5.45822 11.8268 6.94179 13.2472L6.45769 13.7528C4.80788 12.1732 3.9997 9.8239 3.99969 7.5z",fill:i,fillRule:"evenodd",clipRule:"evenodd"}),O.createElement("path",{d:"M7.49996 3.95801C9.66928 3.95801 11.8753 4.35915 13.3706 5.19448 13.5394 5.28875 13.5998 5.50197 13.5055 5.67073 13.4113 5.83948 13.198 5.89987 13.0293 5.8056 11.6794 5.05155 9.60799 4.65801 7.49996 4.65801 5.39192 4.65801 3.32052 5.05155 1.97064 5.8056 1.80188 5.89987 1.58866 5.83948 1.49439 5.67073 1.40013 5.50197 1.46051 5.28875 1.62927 5.19448 3.12466 4.35915 5.33063 3.95801 7.49996 3.95801zM7.49996 10.85C9.66928 10.85 11.8753 10.4488 13.3706 9.6135 13.5394 9.51924 13.5998 9.30601 13.5055 9.13726 13.4113 8.9685 13.198 8.90812 13.0293 9.00238 11.6794 9.75643 9.60799 10.15 7.49996 10.15 5.39192 10.15 3.32052 9.75643 1.97064 9.00239 1.80188 8.90812 1.58866 8.9685 1.49439 9.13726 1.40013 9.30601 1.46051 9.51924 1.62927 9.6135 3.12466 10.4488 5.33063 10.85 7.49996 10.85z",fill:i,fillRule:"evenodd",clipRule:"evenodd"}))}),tC=["color"],rC=O.forwardRef(function(e,r){var s=e.color,i=s===void 0?"currentColor":s,o=Ci(e,tC);return O.createElement("svg",Object.assign({width:"15",height:"15",viewBox:"0 0 15 15",fill:"none",xmlns:"http://www.w3.org/2000/svg"},o,{ref:r}),O.createElement("path",{d:"M6.5 1C6.22386 1 6 1.22386 6 1.5C6 1.77614 6.22386 2 6.5 2C7.12671 2 7.45718 2.20028 7.65563 2.47812C7.8781 2.78957 8 3.28837 8 4V11C8 11.7116 7.8781 12.2104 7.65563 12.5219C7.45718 12.7997 7.12671 13 6.5 13C6.22386 13 6 13.2239 6 13.5C6 13.7761 6.22386 14 6.5 14C7.37329 14 8.04282 13.7003 8.46937 13.1031C8.47976 13.0886 8.48997 13.0739 8.5 13.0591C8.51003 13.0739 8.52024 13.0886 8.53063 13.1031C8.95718 13.7003 9.62671 14 10.5 14C10.7761 14 11 13.7761 11 13.5C11 13.2239 10.7761 13 10.5 13C9.87329 13 9.54282 12.7997 9.34437 12.5219C9.1219 12.2104 9 11.7116 9 11V4C9 3.28837 9.1219 2.78957 9.34437 2.47812C9.54282 2.20028 9.87329 2 10.5 2C10.7761 2 11 1.77614 11 1.5C11 1.22386 10.7761 1 10.5 1C9.62671 1 8.95718 1.29972 8.53063 1.89688C8.52024 1.91143 8.51003 1.92611 8.5 1.9409C8.48997 1.92611 8.47976 1.91143 8.46937 1.89688C8.04282 1.29972 7.37329 1 6.5 1ZM14 5H11V4H14C14.5523 4 15 4.44772 15 5V10C15 10.5523 14.5523 11 14 11H11V10H14V5ZM6 4V5H1L1 10H6V11H1C0.447715 11 0 10.5523 0 10V5C0 4.44772 0.447715 4 1 4H6Z",fill:i,fillRule:"evenodd",clipRule:"evenodd"}))});function ag(e,r){if(typeof e=="function")return e(r);e!=null&&(e.current=r)}function nC(...e){return r=>{let s=!1;const i=e.map(o=>{const c=ag(o,r);return!s&&typeof c=="function"&&(s=!0),c});if(s)return()=>{for(let o=0;o<i.length;o++){const c=i[o];typeof c=="function"?c():ag(e[o],null)}}}}function sC(e){const r=aC(e),s=O.forwardRef((i,o)=>{const{children:c,...d}=i,p=O.Children.toArray(c),h=p.find(lC);if(h){const g=h.props.children,v=p.map(b=>b===h?O.Children.count(g)>1?O.Children.only(null):O.isValidElement(g)?g.props.children:null:b);return y.jsx(r,{...d,ref:o,children:O.isValidElement(g)?O.cloneElement(g,void 0,v):null})}return y.jsx(r,{...d,ref:o,children:c})});return s.displayName=`${e}.Slot`,s}var iC=sC("Slot");function aC(e){const r=O.forwardRef((s,i)=>{const{children:o,...c}=s;if(O.isValidElement(o)){const d=uC(o),p=cC(c,o.props);return o.type!==O.Fragment&&(p.ref=i?nC(i,d):d),O.cloneElement(o,p)}return O.Children.count(o)>1?O.Children.only(null):null});return r.displayName=`${e}.SlotClone`,r}var oC=Symbol("radix.slottable");function lC(e){return O.isValidElement(e)&&typeof e.type=="function"&&"__radixId"in e.type&&e.type.__radixId===oC}function cC(e,r){const s={...r};for(const i in r){const o=e[i],c=r[i];/^on[A-Z]/.test(i)?o&&c?s[i]=(...p)=>{const h=c(...p);return o(...p),h}:o&&(s[i]=o):i==="style"?s[i]={...o,...c}:i==="className"&&(s[i]=[o,c].filter(Boolean).join(" "))}return{...e,...s}}function uC(e){let r=Object.getOwnPropertyDescriptor(e.props,"ref")?.get,s=r&&"isReactWarning"in r&&r.isReactWarning;return s?e.ref:(r=Object.getOwnPropertyDescriptor(e,"ref")?.get,s=r&&"isReactWarning"in r&&r.isReactWarning,s?e.props.ref:e.props.ref||e.ref)}function k0(e){var r,s,i="";if(typeof e=="string"||typeof e=="number")i+=e;else if(typeof e=="object")if(Array.isArray(e)){var o=e.length;for(r=0;r<o;r++)e[r]&&(s=k0(e[r]))&&(i&&(i+=" "),i+=s)}else for(s in e)e[s]&&(i&&(i+=" "),i+=s);return i}function dC(){for(var e,r,s=0,i="",o=arguments.length;s<o;s++)(e=arguments[s])&&(r=k0(e))&&(i&&(i+=" "),i+=r);return i}const og=e=>typeof e=="boolean"?`${e}`:e===0?"0":e,lg=dC,fC=(e,r)=>s=>{var i;if(r?.variants==null)return lg(e,s?.class,s?.className);const{variants:o,defaultVariants:c}=r,d=Object.keys(o).map(g=>{const v=s?.[g],b=c?.[g];if(v===null)return null;const w=og(v)||og(b);return o[g][w]}),p=s&&Object.entries(s).reduce((g,v)=>{let[b,w]=v;return w===void 0||(g[b]=w),g},{}),h=r==null||(i=r.compoundVariants)===null||i===void 0?void 0:i.reduce((g,v)=>{let{class:b,className:w,...j}=v;return Object.entries(j).every(L=>{let[N,I]=L;return Array.isArray(I)?I.includes({...c,...p}[N]):{...c,...p}[N]===I})?[...g,b,w]:g},[]);return lg(e,d,h,s?.class,s?.className)},pC=fC("inline-flex items-center justify-center whitespace-nowrap rounded-md text-sm font-medium ring-offset-background transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50",{variants:{variant:{default:"bg-primary text-primary-foreground hover:bg-primary/90",destructive:"bg-destructive text-destructive-foreground hover:bg-destructive/90",outline:"border border-input bg-background hover:bg-accent hover:text-accent-foreground",secondary:"bg-secondary text-secondary-foreground hover:bg-secondary/80",ghost:"hover:bg-accent hover:text-accent-foreground",link:"text-primary underline-offset-4 hover:underline"},size:{default:"h-10 px-4 py-2",sm:"h-9 rounded-md px-3",lg:"h-11 rounded-md px-8",icon:"h-10 w-10"}},defaultVariants:{variant:"default",size:"default"}}),C0=O.forwardRef(({className:e,variant:r,size:s,asChild:i=!1,...o},c)=>{const d=i?iC:"button";return y.jsx(d,{className:ts(pC({variant:r,size:s,className:e})),ref:c,...o})});C0.displayName="Button";const hC=({children:e,className:r})=>y.jsx("div",{className:ts("grid w-full auto-rows-[22rem] grid-cols-3 gap-4",r),children:e}),mC=({name:e,className:r,background:s,Icon:i,description:o,href:c,cta:d})=>y.jsxs("div",{className:ts("group relative col-span-3 flex flex-col justify-between overflow-hidden rounded-xl","bg-white [box-shadow:0_0_0_1px_rgba(0,0,0,.03),0_2px_4px_rgba(0,0,0,.05),0_12px_24px_rgba(0,0,0,.05)]","transform-gpu dark:bg-black dark:[border:1px_solid_rgba(255,255,255,.1)] dark:[box-shadow:0_-20px_80px_-20px_#ffffff1f_inset]",r),children:[y.jsx("div",{children:s}),y.jsxs("div",{className:"pointer-events-none z-10 flex transform-gpu flex-col gap-1 p-6 transition-all duration-300 group-hover:-translate-y-10",children:[y.jsx(i,{className:"h-12 w-12 origin-left transform-gpu text-neutral-700 transition-all duration-300 ease-in-out group-hover:scale-75"}),y.jsx("h3",{className:"text-xl font-semibold text-neutral-700 dark:text-neutral-300",children:e}),y.jsx("p",{className:"max-w-lg text-neutral-400",children:o})]}),y.jsx("div",{className:ts("pointer-events-none absolute bottom-0 flex w-full translate-y-10 transform-gpu flex-row items-center p-4 opacity-0 transition-all duration-300 group-hover:translate-y-0 group-hover:opacity-100"),children:y.jsx(C0,{variant:"ghost",asChild:!0,size:"sm",className:"pointer-events-auto",children:y.jsxs("a",{href:c,children:[d,y.jsx(Wk,{className:"ml-2 h-4 w-4"})]})})}),y.jsx("div",{className:"pointer-events-none absolute inset-0 transform-gpu transition-all duration-300 group-hover:bg-black/[.03] group-hover:dark:bg-neutral-800/10"})]},e),gC=[{Icon:Qk,name:"Save your files",description:"We automatically save your files as you type.",href:"/",cta:"Learn more",background:y.jsx("img",{className:"absolute -right-20 -top-20 opacity-60",src:"https://images.unsplash.com/photo-1461749280684-dccba630e2f6?auto=format&fit=crop&w=400&q=80",alt:""}),className:"lg:row-start-1 lg:row-end-4 lg:col-start-2 lg:col-end-3"},{Icon:rC,name:"Full text search",description:"Search through all your files in one place.",href:"/",cta:"Learn more",background:y.jsx("img",{className:"absolute -right-20 -top-20 opacity-60",src:"https://images.unsplash.com/photo-1506744038136-46273834b3fb?auto=format&fit=crop&w=400&q=80",alt:""}),className:"lg:col-start-1 lg:col-end-2 lg:row-start-1 lg:row-end-3"},{Icon:eC,name:"Multilingual",description:"Supports 100+ languages and counting.",href:"/",cta:"Learn more",background:y.jsx("img",{className:"absolute -right-20 -top-20 opacity-60",src:"https://images.unsplash.com/photo-1465101046530-73398c7f28ca?auto=format&fit=crop&w=400&q=80",alt:""}),className:"lg:col-start-1 lg:col-end-2 lg:row-start-3 lg:row-end-4"},{Icon:Xk,name:"Calendar",description:"Use the calendar to filter your files by date.",href:"/",cta:"Learn more",background:y.jsx("img",{className:"absolute -right-20 -top-20 opacity-60",src:"https://images.unsplash.com/photo-1519125323398-675f0ddb6308?auto=format&fit=crop&w=400&q=80",alt:""}),className:"lg:col-start-3 lg:col-end-3 lg:row-start-1 lg:row-end-2"},{Icon:Kk,name:"Notifications",description:"Get notified when someone shares a file or mentions you in a comment.",href:"/",cta:"Learn more",background:y.jsx("img",{className:"absolute -right-20 -top-20 opacity-60",src:"https://images.unsplash.com/photo-1465101178521-c1a9136a3b99?auto=format&fit=crop&w=400&q=80",alt:""}),className:"lg:col-start-3 lg:col-end-3 lg:row-start-2 lg:row-end-4"}];function vC(){return y.jsx(hC,{className:"lg:grid-rows-3",children:gC.map(e=>y.jsx(mC,{...e},e.name))})}/**
 * @license @tabler/icons-react v3.34.0 - MIT
 *
 * This source code is licensed under the MIT license.
 * See the LICENSE file in the root directory of this source tree.
 */var yC={outline:{xmlns:"http://www.w3.org/2000/svg",width:24,height:24,viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:2,strokeLinecap:"round",strokeLinejoin:"round"},filled:{xmlns:"http://www.w3.org/2000/svg",width:24,height:24,viewBox:"0 0 24 24",fill:"currentColor",stroke:"none"}};/**
 * @license @tabler/icons-react v3.34.0 - MIT
 *
 * This source code is licensed under the MIT license.
 * See the LICENSE file in the root directory of this source tree.
 */const as=(e,r,s,i)=>{const o=O.forwardRef(({color:c="currentColor",size:d=24,stroke:p=2,title:h,className:g,children:v,...b},w)=>O.createElement("svg",{ref:w,...yC[e],width:d,height:d,className:["tabler-icon",`tabler-icon-${r}`,g].join(" "),strokeWidth:p,stroke:c,...b},[h&&O.createElement("title",{key:"svg-title"},h),...i.map(([j,L])=>O.createElement(j,L)),...Array.isArray(v)?v:[v]]));return o.displayName=`${s}`,o};/**
 * @license @tabler/icons-react v3.34.0 - MIT
 *
 * This source code is licensed under the MIT license.
 * See the LICENSE file in the root directory of this source tree.
 */var bC=as("outline","adjustments-bolt","IconAdjustmentsBolt",[["path",{d:"M4 10a2 2 0 1 0 4 0a2 2 0 0 0 -4 0",key:"svg-0"}],["path",{d:"M6 4v4",key:"svg-1"}],["path",{d:"M6 12v8",key:"svg-2"}],["path",{d:"M10 16a2 2 0 1 0 4 0a2 2 0 0 0 -4 0",key:"svg-3"}],["path",{d:"M12 4v10",key:"svg-4"}],["path",{d:"M19 16l-2 3h4l-2 3",key:"svg-5"}],["path",{d:"M12 18v2",key:"svg-6"}],["path",{d:"M16 7a2 2 0 1 0 4 0a2 2 0 0 0 -4 0",key:"svg-7"}],["path",{d:"M18 4v1",key:"svg-8"}],["path",{d:"M18 9v3",key:"svg-9"}]]);/**
 * @license @tabler/icons-react v3.34.0 - MIT
 *
 * This source code is licensed under the MIT license.
 * See the LICENSE file in the root directory of this source tree.
 */var xC=as("outline","cloud","IconCloud",[["path",{d:"M6.657 18c-2.572 0 -4.657 -2.007 -4.657 -4.483c0 -2.475 2.085 -4.482 4.657 -4.482c.393 -1.762 1.794 -3.2 3.675 -3.773c1.88 -.572 3.956 -.193 5.444 1c1.488 1.19 2.162 3.007 1.77 4.769h.99c1.913 0 3.464 1.56 3.464 3.486c0 1.927 -1.551 3.487 -3.465 3.487h-11.878",key:"svg-0"}]]);/**
 * @license @tabler/icons-react v3.34.0 - MIT
 *
 * This source code is licensed under the MIT license.
 * See the LICENSE file in the root directory of this source tree.
 */var wC=as("outline","currency-dollar","IconCurrencyDollar",[["path",{d:"M16.7 8a3 3 0 0 0 -2.7 -2h-4a3 3 0 0 0 0 6h4a3 3 0 0 1 0 6h-4a3 3 0 0 1 -2.7 -2",key:"svg-0"}],["path",{d:"M12 3v3m0 12v3",key:"svg-1"}]]);/**
 * @license @tabler/icons-react v3.34.0 - MIT
 *
 * This source code is licensed under the MIT license.
 * See the LICENSE file in the root directory of this source tree.
 */var _C=as("outline","ease-in-out","IconEaseInOut",[["path",{d:"M3 20c8 0 10 -16 18 -16",key:"svg-0"}]]);/**
 * @license @tabler/icons-react v3.34.0 - MIT
 *
 * This source code is licensed under the MIT license.
 * See the LICENSE file in the root directory of this source tree.
 */var SC=as("outline","heart","IconHeart",[["path",{d:"M19.5 12.572l-7.5 7.428l-7.5 -7.428a5 5 0 1 1 7.5 -6.566a5 5 0 1 1 7.5 6.572",key:"svg-0"}]]);/**
 * @license @tabler/icons-react v3.34.0 - MIT
 *
 * This source code is licensed under the MIT license.
 * See the LICENSE file in the root directory of this source tree.
 */var kC=as("outline","help","IconHelp",[["path",{d:"M12 12m-9 0a9 9 0 1 0 18 0a9 9 0 1 0 -18 0",key:"svg-0"}],["path",{d:"M12 17l0 .01",key:"svg-1"}],["path",{d:"M12 13.5a1.5 1.5 0 0 1 1 -1.5a2.6 2.6 0 1 0 -3 -4",key:"svg-2"}]]);/**
 * @license @tabler/icons-react v3.34.0 - MIT
 *
 * This source code is licensed under the MIT license.
 * See the LICENSE file in the root directory of this source tree.
 */var CC=as("outline","route-alt-left","IconRouteAltLeft",[["path",{d:"M8 3h-5v5",key:"svg-0"}],["path",{d:"M16 3h5v5",key:"svg-1"}],["path",{d:"M3 3l7.536 7.536a5 5 0 0 1 1.464 3.534v6.93",key:"svg-2"}],["path",{d:"M18 6.01v-.01",key:"svg-3"}],["path",{d:"M16 8.02v-.01",key:"svg-4"}],["path",{d:"M14 10v.01",key:"svg-5"}]]);/**
 * @license @tabler/icons-react v3.34.0 - MIT
 *
 * This source code is licensed under the MIT license.
 * See the LICENSE file in the root directory of this source tree.
 */var EC=as("outline","terminal-2","IconTerminal2",[["path",{d:"M8 9l3 3l-3 3",key:"svg-0"}],["path",{d:"M13 15l3 0",key:"svg-1"}],["path",{d:"M3 4m0 2a2 2 0 0 1 2 -2h14a2 2 0 0 1 2 2v12a2 2 0 0 1 -2 2h-14a2 2 0 0 1 -2 -2z",key:"svg-2"}]]);function TC(){const e=[{title:"Built for developers",description:"Built for engineers, developers, dreamers, thinkers and doers.",icon:y.jsx(EC,{})},{title:"Ease of use",description:"It's as easy as using an Apple, and as expensive as buying one.",icon:y.jsx(_C,{})},{title:"Pricing like no other",description:"Our prices are best in the market. No cap, no lock, no credit card required.",icon:y.jsx(wC,{})},{title:"100% Uptime guarantee",description:"We just cannot be taken down by anyone.",icon:y.jsx(xC,{})},{title:"Multi-tenant Architecture",description:"You can simply share passwords instead of buying new seats",icon:y.jsx(CC,{})},{title:"24/7 Customer Support",description:"We are available a 100% of the time. Atleast our AI Agents are.",icon:y.jsx(kC,{})},{title:"Money back guarantee",description:"If you donot like EveryAI, we will convince you to like us.",icon:y.jsx(bC,{})},{title:"And everything else",description:"I just ran out of copy ideas. Accept my sincere apologies",icon:y.jsx(SC,{})}];return y.jsx("div",{className:"grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4  relative z-10 py-10 max-w-7xl mx-auto",children:e.map((r,s)=>y.jsx(PC,{...r,index:s},r.title))})}const PC=({title:e,description:r,icon:s,index:i})=>y.jsxs("div",{className:ts("flex flex-col lg:border-r  py-10 relative group/feature dark:border-neutral-800",(i===0||i===4)&&"lg:border-l dark:border-neutral-800",i<4&&"lg:border-b dark:border-neutral-800"),children:[i<4&&y.jsx("div",{className:"opacity-0 group-hover/feature:opacity-100 transition duration-200 absolute inset-0 h-full w-full bg-gradient-to-t from-neutral-100 dark:from-neutral-800 to-transparent pointer-events-none"}),i>=4&&y.jsx("div",{className:"opacity-0 group-hover/feature:opacity-100 transition duration-200 absolute inset-0 h-full w-full bg-gradient-to-b from-neutral-100 dark:from-neutral-800 to-transparent pointer-events-none"}),y.jsx("div",{className:"mb-4 relative z-10 px-10 text-neutral-600 dark:text-neutral-400",children:s}),y.jsxs("div",{className:"text-lg font-bold mb-2 relative z-10 px-10",children:[y.jsx("div",{className:"absolute left-0 inset-y-0 h-6 group-hover/feature:h-8 w-1 rounded-tr-full rounded-br-full bg-neutral-300 dark:bg-neutral-700 group-hover/feature:bg-blue-500 transition-all duration-200 origin-center"}),y.jsx("span",{className:"group-hover/feature:translate-x-2 transition duration-200 inline-block text-neutral-800 dark:text-neutral-100",children:e})]}),y.jsx("p",{className:"text-sm text-neutral-600 dark:text-neutral-300 max-w-xs relative z-10 px-10",children:r})]});function RC(){return y.jsx("div",{className:"min-h-screen w-full",children:y.jsx("div",{className:"absolute top-0 left-0 w-full",children:y.jsx(TC,{})})})}const AC=()=>{const[e,r]=O.useState("glass");return y.jsxs("div",{className:"w-full min-h-screen bg-zinc-100 dark:bg-zinc-800 p-10",children:[y.jsxs("div",{className:"flex justify-center gap-4 mb-8",children:[y.jsx("button",{className:`px-4 py-2 rounded ${e==="glass"?"bg-blue-600 text-white":"bg-white text-blue-600 border"}`,onClick:()=>r("glass"),children:"GlassCard Demo"}),y.jsx("button",{className:`px-4 py-2 rounded ${e==="glow"?"bg-blue-600 text-white":"bg-white text-blue-600 border"}`,onClick:()=>r("glow"),children:"GlowingEffect Demo"}),y.jsx("button",{className:`px-4 py-2 rounded ${e==="feature"?"bg-blue-600 text-white":"bg-white text-blue-600 border"}`,onClick:()=>r("feature"),children:"FeaturesSectionWithHoverEffects Demo"})]}),e==="glass"&&y.jsx("div",{className:"flex h-[450px] w-full items-center justify-center",children:y.jsx(Zk,{})}),e==="glow"&&y.jsx("div",{className:"flex w-full items-center justify-center",children:y.jsx(vC,{})}),e==="feature"&&y.jsx("div",{className:"flex w-full items-center justify-center",children:y.jsx(RC,{})})]})},NC=()=>y.jsx(bx,{children:y.jsxs("div",{className:"App",children:[y.jsx(kx,{}),y.jsx("main",{className:"main-content",children:y.jsxs(fx,{children:[y.jsx(oi,{path:"/",element:y.jsx(cS,{})}),y.jsx(oi,{path:"/about",element:y.jsx(uS,{})}),y.jsx(oi,{path:"/projects",element:y.jsx(pS,{})}),y.jsx(oi,{path:"/contact",element:y.jsx(zk,{})}),y.jsx(oi,{path:"/demo",element:y.jsx(AC,{})})]})}),y.jsx(Cx,{})]})});var IC={"panel-BpInY05d.js":`import { jsx, jsxs } from "react/jsx-runtime";
import { createContext, useState, useEffect, useContext, useRef, useCallback, useMemo } from "react";
var generateId$1 = (length = 16) => Math.random().toString(36).substring(2, length + 2), DEFAULT_OPTIONS = {
  maxReconnectAttempts: 5,
  reconnectDelay: 1e3,
  requestTimeout: 3e4
  // Extended timeout for longer operations
}, WebSocketRpcBridge = class {
  constructor(options = {}) {
    this.ws = null, this.pendingRequests = /* @__PURE__ */ new Map(), this.reconnectAttempts = 0, this.methods = {}, this.isIntentionalClose = !1, this.options = { ...DEFAULT_OPTIONS, ...options };
  }
  /**
   * Register RPC method handlers
   * @param methodHandlers Object containing method handlers
   */
  register(methodHandlers) {
    Object.entries(methodHandlers).forEach(([methodName, handler]) => {
      this.methods[methodName] = { handler };
    });
  }
  /**
   * Generic method to call a remote procedure with support for streaming updates
   * @param method Method name to call
   * @param payload Request payload
   * @param onUpdate Optional callback for progress updates
   * @returns Promise resolving with the response
   */
  callMethod(method, payload, onUpdate) {
    if (!this.ws)
      throw new Error("WebSocket is not connected");
    const id = generateId$1(), requestMessage = {
      id,
      messageType: "request",
      method,
      payload
    };
    return new Promise((resolve, reject) => {
      var _a;
      const timeout = setTimeout(() => {
        this.pendingRequests.delete(id), reject(new Error(\`Request timed out: \${method}\`));
      }, this.options.requestTimeout);
      this.pendingRequests.set(id, { resolve, reject, timeout, onUpdate }), (_a = this.ws) == null || _a.send(JSON.stringify(requestMessage));
    });
  }
  /**
   * Sets up WebSocket event handlers
   * @param ws WebSocket instance
   */
  setupWebSocketHandlers(ws) {
    ws.onmessage = (event) => {
      try {
        const message = JSON.parse(event.data);
        this.handleMessage(message);
      } catch (error) {
        console.error("Error handling WebSocket message:", error);
      }
    }, ws.onclose = () => {
      this.handleDisconnect();
    }, ws.onerror = (event) => {
      console.error("WebSocket error:", event);
    };
  }
  /**
   * Handles incoming WebSocket messages
   * @param message The message to handle
   */
  handleMessage(message) {
    const { messageType, id } = message;
    switch (messageType) {
      case "request":
        this.handleRequest(message);
        break;
      case "response":
        this.handleResponse(id, message.payload);
        break;
      case "update":
        this.handleUpdate(id, message.payload);
        break;
      case "error":
        this.handleError(id, message.error.message);
        break;
      default:
        console.warn(\`Unknown message type: \${messageType}\`);
    }
  }
  /**
   * Handle incoming requests by invoking the registered method
   * @param message Request message
   */
  async handleRequest(message) {
    const { id, method, payload } = message;
    if (!method) {
      this.sendError(id, "Method name is required");
      return;
    }
    const methodDef = this.methods[method];
    if (!methodDef) {
      this.sendError(id, \`Method not found: \${method}\`);
      return;
    }
    try {
      const sendUpdate = (update) => {
        this.sendUpdate(id, method, update);
      }, result = await methodDef.handler(payload, sendUpdate);
      this.sendResponse(id, method, result);
    } catch (error) {
      this.sendError(
        id,
        error instanceof Error ? error.message : String(error)
      );
    }
  }
  /**
   * Handle response messages by resolving the pending request
   * @param id Request ID
   * @param payload Response payload
   */
  handleResponse(id, payload) {
    const pendingRequest = this.pendingRequests.get(id);
    if (!pendingRequest) {
      console.warn(\`Received response for unknown request ID: \${id}\`);
      return;
    }
    clearTimeout(pendingRequest.timeout), this.pendingRequests.delete(id), pendingRequest.resolve(payload);
  }
  /**
   * Handle update messages by calling the update callback
   * @param id Request ID
   * @param payload Update payload
   */
  handleUpdate(id, payload) {
    const pendingRequest = this.pendingRequests.get(id);
    if (!pendingRequest || !pendingRequest.onUpdate) {
      console.warn(\`Received update for unknown request ID: \${id}\`);
      return;
    }
    pendingRequest.onUpdate(payload);
  }
  /**
   * Handle error messages by rejecting the pending request
   * @param id Request ID
   * @param error Error message
   */
  handleError(id, error) {
    const pendingRequest = this.pendingRequests.get(id);
    if (!pendingRequest) {
      console.warn(\`Received error for unknown request ID: \${id}\`);
      return;
    }
    clearTimeout(pendingRequest.timeout), this.pendingRequests.delete(id), pendingRequest.reject(new Error(error));
  }
  /**
   * Send a response message
   * @param id Request ID
   * @param method Method name
   * @param payload Response payload
   */
  sendResponse(id, method, payload) {
    if (!this.ws)
      throw new Error("WebSocket is not connected");
    const responseMessage = {
      id,
      messageType: "response",
      method,
      payload
    };
    this.ws.send(JSON.stringify(responseMessage));
  }
  /**
   * Send an update message for streaming
   * @param id Request ID
   * @param method Method name
   * @param payload Update payload
   */
  sendUpdate(id, method, payload) {
    if (!this.ws)
      throw new Error("WebSocket is not connected");
    const updateMessage = {
      id,
      messageType: "update",
      method,
      payload
    };
    this.ws.send(JSON.stringify(updateMessage));
  }
  /**
   * Send an error message
   * @param id Request ID
   * @param errorMessage Error message
   */
  sendError(id, errorMessage) {
    if (!this.ws)
      throw new Error("WebSocket is not connected");
    const errorResponse = {
      id,
      messageType: "error",
      error: {
        message: errorMessage
      }
    };
    this.ws.send(JSON.stringify(errorResponse));
  }
  /**
   * Handle disconnection by attempting to reconnect
   */
  handleDisconnect() {
    if (this.isIntentionalClose) {
      console.log(
        "WebSocket closed intentionally, not attempting to reconnect"
      ), this.clearPendingRequests(new Error("Connection closed by user"));
      return;
    }
    this.reconnectAttempts < this.options.maxReconnectAttempts ? (this.reconnectAttempts++, console.log(
      \`Attempting to reconnect (\${this.reconnectAttempts}/\${this.options.maxReconnectAttempts})...\`
    ), setTimeout(
      () => this.reconnect(),
      this.options.reconnectDelay * this.reconnectAttempts
    )) : (console.error("Max reconnection attempts reached"), this.clearPendingRequests(new Error("Connection closed")));
  }
  /**
   * Clear all pending requests with an error
   * @param error Error to reject with
   */
  clearPendingRequests(error) {
    this.pendingRequests.forEach(({ reject }) => {
      reject(error);
    }), this.pendingRequests.clear();
  }
  /**
   * Close the WebSocket connection
   * @returns Promise that resolves when the connection is closed
   */
  async close() {
    this.isIntentionalClose = !0, this.ws && (this.ws.close(), this.ws = null), this.clearPendingRequests(new Error("Connection closed by user"));
  }
};
function validateWithZod(schema, data, context, silent = !1) {
  const result = schema.safeParse(data);
  if (!result.success) {
    const error = new Error(
      \`Validation failed for \${context}: \${result.error.message}\`
    );
    if (silent)
      return console.error(error), data;
    throw error;
  }
  return result.data;
}
var ZodTypedBridge = class {
  constructor(bridge, contract2) {
    this.bridge = bridge, this.contract = contract2, this.call = new Proxy({}, {
      get: (_target, prop) => (request, options) => this.callMethod(prop, request, options)
    });
  }
  async callMethod(method, request, options) {
    const methodContract = this.contract.consumes[method];
    if (!methodContract)
      throw new Error(\`Method \${String(method)} not found in contract\`);
    const validatedRequest = validateWithZod(
      methodContract.request,
      request,
      \`request for method \${String(method)}\`
    ), onUpdate = options != null && options.onUpdate && methodContract.update ? (update) => {
      var _a;
      if (methodContract.update)
        try {
          const validatedUpdate = validateWithZod(
            methodContract.update,
            update,
            \`update for method \${String(method)}\`,
            !0
            // silently log validation errors
          );
          (_a = options.onUpdate) == null || _a.call(options, validatedUpdate);
        } catch (error) {
          console.error("Update validation failed:", error);
        }
    } : void 0, response = await this.bridge.callMethod(
      method,
      validatedRequest,
      onUpdate
    );
    return validateWithZod(
      methodContract.response,
      response,
      \`response for method \${String(method)}\`
    );
  }
  register(implementations) {
    const wrappedImplementations = {};
    for (const [method, implementation] of Object.entries(implementations)) {
      const methodContract = this.contract.serves[method];
      if (!methodContract)
        throw new Error(\`Method \${method} not found in contract\`);
      wrappedImplementations[method] = async (request, sendUpdate) => {
        const validatedRequest = validateWithZod(
          methodContract.request,
          request,
          \`request for method \${method}\`
        ), wrappedSendUpdate = methodContract.update && sendUpdate ? (update) => {
          if (methodContract.update)
            try {
              const validatedUpdate = validateWithZod(
                methodContract.update,
                update,
                \`update for method \${method}\`,
                !0
                // silently log validation errors
              );
              sendUpdate(validatedUpdate);
            } catch (error) {
              console.error("Update validation failed:", error);
            }
        } : void 0, response = await implementation(validatedRequest, {
          sendUpdate: wrappedSendUpdate
        });
        return validateWithZod(
          methodContract.response,
          response,
          \`response for method \${method}\`
        );
      };
    }
    this.bridge.register(wrappedImplementations);
  }
  async close() {
    await this.bridge.close();
  }
}, ClientBridge = class extends WebSocketRpcBridge {
  constructor(url, options) {
    super(options), this.reconnectTimer = null, this.url = url;
  }
  call(method, payload, onUpdate) {
    return this.callMethod(method, payload, onUpdate);
  }
  reconnect() {
    this.reconnectTimer && clearTimeout(this.reconnectTimer), this.reconnectTimer = setTimeout(async () => {
      try {
        await this.connect();
      } catch {
        this.reconnect();
      }
    }, this.options.reconnectDelay);
  }
  connect() {
    return new Promise((resolve, reject) => {
      try {
        const ws = new window.WebSocket(this.url);
        ws.onopen = () => {
          this.ws = ws, this.setupWebSocketHandlers(ws), resolve();
        }, ws.onerror = () => {
          reject(new Error("Failed to connect to WebSocket server"));
        };
      } catch (error) {
        reject(error);
      }
    });
  }
}, ZodClient = class extends ZodTypedBridge {
  constructor(url, contract2, options) {
    super(new ClientBridge(url, options), {
      serves: contract2.client || {},
      consumes: contract2.server || {}
    });
  }
  connect() {
    return this.bridge.connect();
  }
};
function createSRPCClientBridge(url, contract2, options) {
  return new ZodClient(url, contract2, options);
}
var util;
(function(util2) {
  util2.assertEqual = (_) => {
  };
  function assertIs(_arg) {
  }
  util2.assertIs = assertIs;
  function assertNever(_x) {
    throw new Error();
  }
  util2.assertNever = assertNever, util2.arrayToEnum = (items) => {
    const obj = {};
    for (const item of items)
      obj[item] = item;
    return obj;
  }, util2.getValidEnumValues = (obj) => {
    const validKeys = util2.objectKeys(obj).filter((k) => typeof obj[obj[k]] != "number"), filtered = {};
    for (const k of validKeys)
      filtered[k] = obj[k];
    return util2.objectValues(filtered);
  }, util2.objectValues = (obj) => util2.objectKeys(obj).map(function(e) {
    return obj[e];
  }), util2.objectKeys = typeof Object.keys == "function" ? (obj) => Object.keys(obj) : (object) => {
    const keys = [];
    for (const key in object)
      Object.prototype.hasOwnProperty.call(object, key) && keys.push(key);
    return keys;
  }, util2.find = (arr, checker) => {
    for (const item of arr)
      if (checker(item))
        return item;
  }, util2.isInteger = typeof Number.isInteger == "function" ? (val) => Number.isInteger(val) : (val) => typeof val == "number" && Number.isFinite(val) && Math.floor(val) === val;
  function joinValues(array, separator = " | ") {
    return array.map((val) => typeof val == "string" ? \`'\${val}'\` : val).join(separator);
  }
  util2.joinValues = joinValues, util2.jsonStringifyReplacer = (_, value) => typeof value == "bigint" ? value.toString() : value;
})(util || (util = {}));
var objectUtil;
(function(objectUtil2) {
  objectUtil2.mergeShapes = (first, second) => ({
    ...first,
    ...second
    // second overwrites first
  });
})(objectUtil || (objectUtil = {}));
const ZodParsedType = util.arrayToEnum([
  "string",
  "nan",
  "number",
  "integer",
  "float",
  "boolean",
  "date",
  "bigint",
  "symbol",
  "function",
  "undefined",
  "null",
  "array",
  "object",
  "unknown",
  "promise",
  "void",
  "never",
  "map",
  "set"
]), getParsedType = (data) => {
  switch (typeof data) {
    case "undefined":
      return ZodParsedType.undefined;
    case "string":
      return ZodParsedType.string;
    case "number":
      return Number.isNaN(data) ? ZodParsedType.nan : ZodParsedType.number;
    case "boolean":
      return ZodParsedType.boolean;
    case "function":
      return ZodParsedType.function;
    case "bigint":
      return ZodParsedType.bigint;
    case "symbol":
      return ZodParsedType.symbol;
    case "object":
      return Array.isArray(data) ? ZodParsedType.array : data === null ? ZodParsedType.null : data.then && typeof data.then == "function" && data.catch && typeof data.catch == "function" ? ZodParsedType.promise : typeof Map < "u" && data instanceof Map ? ZodParsedType.map : typeof Set < "u" && data instanceof Set ? ZodParsedType.set : typeof Date < "u" && data instanceof Date ? ZodParsedType.date : ZodParsedType.object;
    default:
      return ZodParsedType.unknown;
  }
}, ZodIssueCode = util.arrayToEnum([
  "invalid_type",
  "invalid_literal",
  "custom",
  "invalid_union",
  "invalid_union_discriminator",
  "invalid_enum_value",
  "unrecognized_keys",
  "invalid_arguments",
  "invalid_return_type",
  "invalid_date",
  "invalid_string",
  "too_small",
  "too_big",
  "invalid_intersection_types",
  "not_multiple_of",
  "not_finite"
]);
class ZodError extends Error {
  get errors() {
    return this.issues;
  }
  constructor(issues) {
    super(), this.issues = [], this.addIssue = (sub) => {
      this.issues = [...this.issues, sub];
    }, this.addIssues = (subs = []) => {
      this.issues = [...this.issues, ...subs];
    };
    const actualProto = new.target.prototype;
    Object.setPrototypeOf ? Object.setPrototypeOf(this, actualProto) : this.__proto__ = actualProto, this.name = "ZodError", this.issues = issues;
  }
  format(_mapper) {
    const mapper = _mapper || function(issue) {
      return issue.message;
    }, fieldErrors = { _errors: [] }, processError = (error) => {
      for (const issue of error.issues)
        if (issue.code === "invalid_union")
          issue.unionErrors.map(processError);
        else if (issue.code === "invalid_return_type")
          processError(issue.returnTypeError);
        else if (issue.code === "invalid_arguments")
          processError(issue.argumentsError);
        else if (issue.path.length === 0)
          fieldErrors._errors.push(mapper(issue));
        else {
          let curr = fieldErrors, i = 0;
          for (; i < issue.path.length; ) {
            const el = issue.path[i];
            i === issue.path.length - 1 ? (curr[el] = curr[el] || { _errors: [] }, curr[el]._errors.push(mapper(issue))) : curr[el] = curr[el] || { _errors: [] }, curr = curr[el], i++;
          }
        }
    };
    return processError(this), fieldErrors;
  }
  static assert(value) {
    if (!(value instanceof ZodError))
      throw new Error(\`Not a ZodError: \${value}\`);
  }
  toString() {
    return this.message;
  }
  get message() {
    return JSON.stringify(this.issues, util.jsonStringifyReplacer, 2);
  }
  get isEmpty() {
    return this.issues.length === 0;
  }
  flatten(mapper = (issue) => issue.message) {
    const fieldErrors = {}, formErrors = [];
    for (const sub of this.issues)
      sub.path.length > 0 ? (fieldErrors[sub.path[0]] = fieldErrors[sub.path[0]] || [], fieldErrors[sub.path[0]].push(mapper(sub))) : formErrors.push(mapper(sub));
    return { formErrors, fieldErrors };
  }
  get formErrors() {
    return this.flatten();
  }
}
ZodError.create = (issues) => new ZodError(issues);
const errorMap = (issue, _ctx) => {
  let message;
  switch (issue.code) {
    case ZodIssueCode.invalid_type:
      issue.received === ZodParsedType.undefined ? message = "Required" : message = \`Expected \${issue.expected}, received \${issue.received}\`;
      break;
    case ZodIssueCode.invalid_literal:
      message = \`Invalid literal value, expected \${JSON.stringify(issue.expected, util.jsonStringifyReplacer)}\`;
      break;
    case ZodIssueCode.unrecognized_keys:
      message = \`Unrecognized key(s) in object: \${util.joinValues(issue.keys, ", ")}\`;
      break;
    case ZodIssueCode.invalid_union:
      message = "Invalid input";
      break;
    case ZodIssueCode.invalid_union_discriminator:
      message = \`Invalid discriminator value. Expected \${util.joinValues(issue.options)}\`;
      break;
    case ZodIssueCode.invalid_enum_value:
      message = \`Invalid enum value. Expected \${util.joinValues(issue.options)}, received '\${issue.received}'\`;
      break;
    case ZodIssueCode.invalid_arguments:
      message = "Invalid function arguments";
      break;
    case ZodIssueCode.invalid_return_type:
      message = "Invalid function return type";
      break;
    case ZodIssueCode.invalid_date:
      message = "Invalid date";
      break;
    case ZodIssueCode.invalid_string:
      typeof issue.validation == "object" ? "includes" in issue.validation ? (message = \`Invalid input: must include "\${issue.validation.includes}"\`, typeof issue.validation.position == "number" && (message = \`\${message} at one or more positions greater than or equal to \${issue.validation.position}\`)) : "startsWith" in issue.validation ? message = \`Invalid input: must start with "\${issue.validation.startsWith}"\` : "endsWith" in issue.validation ? message = \`Invalid input: must end with "\${issue.validation.endsWith}"\` : util.assertNever(issue.validation) : issue.validation !== "regex" ? message = \`Invalid \${issue.validation}\` : message = "Invalid";
      break;
    case ZodIssueCode.too_small:
      issue.type === "array" ? message = \`Array must contain \${issue.exact ? "exactly" : issue.inclusive ? "at least" : "more than"} \${issue.minimum} element(s)\` : issue.type === "string" ? message = \`String must contain \${issue.exact ? "exactly" : issue.inclusive ? "at least" : "over"} \${issue.minimum} character(s)\` : issue.type === "number" ? message = \`Number must be \${issue.exact ? "exactly equal to " : issue.inclusive ? "greater than or equal to " : "greater than "}\${issue.minimum}\` : issue.type === "date" ? message = \`Date must be \${issue.exact ? "exactly equal to " : issue.inclusive ? "greater than or equal to " : "greater than "}\${new Date(Number(issue.minimum))}\` : message = "Invalid input";
      break;
    case ZodIssueCode.too_big:
      issue.type === "array" ? message = \`Array must contain \${issue.exact ? "exactly" : issue.inclusive ? "at most" : "less than"} \${issue.maximum} element(s)\` : issue.type === "string" ? message = \`String must contain \${issue.exact ? "exactly" : issue.inclusive ? "at most" : "under"} \${issue.maximum} character(s)\` : issue.type === "number" ? message = \`Number must be \${issue.exact ? "exactly" : issue.inclusive ? "less than or equal to" : "less than"} \${issue.maximum}\` : issue.type === "bigint" ? message = \`BigInt must be \${issue.exact ? "exactly" : issue.inclusive ? "less than or equal to" : "less than"} \${issue.maximum}\` : issue.type === "date" ? message = \`Date must be \${issue.exact ? "exactly" : issue.inclusive ? "smaller than or equal to" : "smaller than"} \${new Date(Number(issue.maximum))}\` : message = "Invalid input";
      break;
    case ZodIssueCode.custom:
      message = "Invalid input";
      break;
    case ZodIssueCode.invalid_intersection_types:
      message = "Intersection results could not be merged";
      break;
    case ZodIssueCode.not_multiple_of:
      message = \`Number must be a multiple of \${issue.multipleOf}\`;
      break;
    case ZodIssueCode.not_finite:
      message = "Number must be finite";
      break;
    default:
      message = _ctx.defaultError, util.assertNever(issue);
  }
  return { message };
};
let overrideErrorMap = errorMap;
function getErrorMap() {
  return overrideErrorMap;
}
const makeIssue = (params) => {
  const { data, path, errorMaps, issueData } = params, fullPath = [...path, ...issueData.path || []], fullIssue = {
    ...issueData,
    path: fullPath
  };
  if (issueData.message !== void 0)
    return {
      ...issueData,
      path: fullPath,
      message: issueData.message
    };
  let errorMessage = "";
  const maps = errorMaps.filter((m) => !!m).slice().reverse();
  for (const map of maps)
    errorMessage = map(fullIssue, { data, defaultError: errorMessage }).message;
  return {
    ...issueData,
    path: fullPath,
    message: errorMessage
  };
};
function addIssueToContext(ctx, issueData) {
  const overrideMap = getErrorMap(), issue = makeIssue({
    issueData,
    data: ctx.data,
    path: ctx.path,
    errorMaps: [
      ctx.common.contextualErrorMap,
      // contextual error map is first priority
      ctx.schemaErrorMap,
      // then schema-bound map if available
      overrideMap,
      // then global override map
      overrideMap === errorMap ? void 0 : errorMap
      // then global default map
    ].filter((x) => !!x)
  });
  ctx.common.issues.push(issue);
}
class ParseStatus {
  constructor() {
    this.value = "valid";
  }
  dirty() {
    this.value === "valid" && (this.value = "dirty");
  }
  abort() {
    this.value !== "aborted" && (this.value = "aborted");
  }
  static mergeArray(status, results) {
    const arrayValue = [];
    for (const s of results) {
      if (s.status === "aborted")
        return INVALID;
      s.status === "dirty" && status.dirty(), arrayValue.push(s.value);
    }
    return { status: status.value, value: arrayValue };
  }
  static async mergeObjectAsync(status, pairs) {
    const syncPairs = [];
    for (const pair of pairs) {
      const key = await pair.key, value = await pair.value;
      syncPairs.push({
        key,
        value
      });
    }
    return ParseStatus.mergeObjectSync(status, syncPairs);
  }
  static mergeObjectSync(status, pairs) {
    const finalObject = {};
    for (const pair of pairs) {
      const { key, value } = pair;
      if (key.status === "aborted" || value.status === "aborted")
        return INVALID;
      key.status === "dirty" && status.dirty(), value.status === "dirty" && status.dirty(), key.value !== "__proto__" && (typeof value.value < "u" || pair.alwaysSet) && (finalObject[key.value] = value.value);
    }
    return { status: status.value, value: finalObject };
  }
}
const INVALID = Object.freeze({
  status: "aborted"
}), DIRTY = (value) => ({ status: "dirty", value }), OK = (value) => ({ status: "valid", value }), isAborted = (x) => x.status === "aborted", isDirty = (x) => x.status === "dirty", isValid = (x) => x.status === "valid", isAsync = (x) => typeof Promise < "u" && x instanceof Promise;
var errorUtil;
(function(errorUtil2) {
  errorUtil2.errToObj = (message) => typeof message == "string" ? { message } : message || {}, errorUtil2.toString = (message) => typeof message == "string" ? message : message == null ? void 0 : message.message;
})(errorUtil || (errorUtil = {}));
class ParseInputLazyPath {
  constructor(parent, value, path, key) {
    this._cachedPath = [], this.parent = parent, this.data = value, this._path = path, this._key = key;
  }
  get path() {
    return this._cachedPath.length || (Array.isArray(this._key) ? this._cachedPath.push(...this._path, ...this._key) : this._cachedPath.push(...this._path, this._key)), this._cachedPath;
  }
}
const handleResult = (ctx, result) => {
  if (isValid(result))
    return { success: !0, data: result.value };
  if (!ctx.common.issues.length)
    throw new Error("Validation failed but no issues detected.");
  return {
    success: !1,
    get error() {
      if (this._error)
        return this._error;
      const error = new ZodError(ctx.common.issues);
      return this._error = error, this._error;
    }
  };
};
function processCreateParams(params) {
  if (!params)
    return {};
  const { errorMap: errorMap2, invalid_type_error, required_error, description } = params;
  if (errorMap2 && (invalid_type_error || required_error))
    throw new Error(\`Can't use "invalid_type_error" or "required_error" in conjunction with custom error map.\`);
  return errorMap2 ? { errorMap: errorMap2, description } : { errorMap: (iss, ctx) => {
    const { message } = params;
    return iss.code === "invalid_enum_value" ? { message: message ?? ctx.defaultError } : typeof ctx.data > "u" ? { message: message ?? required_error ?? ctx.defaultError } : iss.code !== "invalid_type" ? { message: ctx.defaultError } : { message: message ?? invalid_type_error ?? ctx.defaultError };
  }, description };
}
class ZodType {
  get description() {
    return this._def.description;
  }
  _getType(input) {
    return getParsedType(input.data);
  }
  _getOrReturnCtx(input, ctx) {
    return ctx || {
      common: input.parent.common,
      data: input.data,
      parsedType: getParsedType(input.data),
      schemaErrorMap: this._def.errorMap,
      path: input.path,
      parent: input.parent
    };
  }
  _processInputParams(input) {
    return {
      status: new ParseStatus(),
      ctx: {
        common: input.parent.common,
        data: input.data,
        parsedType: getParsedType(input.data),
        schemaErrorMap: this._def.errorMap,
        path: input.path,
        parent: input.parent
      }
    };
  }
  _parseSync(input) {
    const result = this._parse(input);
    if (isAsync(result))
      throw new Error("Synchronous parse encountered promise.");
    return result;
  }
  _parseAsync(input) {
    const result = this._parse(input);
    return Promise.resolve(result);
  }
  parse(data, params) {
    const result = this.safeParse(data, params);
    if (result.success)
      return result.data;
    throw result.error;
  }
  safeParse(data, params) {
    const ctx = {
      common: {
        issues: [],
        async: (params == null ? void 0 : params.async) ?? !1,
        contextualErrorMap: params == null ? void 0 : params.errorMap
      },
      path: (params == null ? void 0 : params.path) || [],
      schemaErrorMap: this._def.errorMap,
      parent: null,
      data,
      parsedType: getParsedType(data)
    }, result = this._parseSync({ data, path: ctx.path, parent: ctx });
    return handleResult(ctx, result);
  }
  "~validate"(data) {
    var _a, _b;
    const ctx = {
      common: {
        issues: [],
        async: !!this["~standard"].async
      },
      path: [],
      schemaErrorMap: this._def.errorMap,
      parent: null,
      data,
      parsedType: getParsedType(data)
    };
    if (!this["~standard"].async)
      try {
        const result = this._parseSync({ data, path: [], parent: ctx });
        return isValid(result) ? {
          value: result.value
        } : {
          issues: ctx.common.issues
        };
      } catch (err) {
        (_b = (_a = err == null ? void 0 : err.message) == null ? void 0 : _a.toLowerCase()) != null && _b.includes("encountered") && (this["~standard"].async = !0), ctx.common = {
          issues: [],
          async: !0
        };
      }
    return this._parseAsync({ data, path: [], parent: ctx }).then((result) => isValid(result) ? {
      value: result.value
    } : {
      issues: ctx.common.issues
    });
  }
  async parseAsync(data, params) {
    const result = await this.safeParseAsync(data, params);
    if (result.success)
      return result.data;
    throw result.error;
  }
  async safeParseAsync(data, params) {
    const ctx = {
      common: {
        issues: [],
        contextualErrorMap: params == null ? void 0 : params.errorMap,
        async: !0
      },
      path: (params == null ? void 0 : params.path) || [],
      schemaErrorMap: this._def.errorMap,
      parent: null,
      data,
      parsedType: getParsedType(data)
    }, maybeAsyncResult = this._parse({ data, path: ctx.path, parent: ctx }), result = await (isAsync(maybeAsyncResult) ? maybeAsyncResult : Promise.resolve(maybeAsyncResult));
    return handleResult(ctx, result);
  }
  refine(check, message) {
    const getIssueProperties = (val) => typeof message == "string" || typeof message > "u" ? { message } : typeof message == "function" ? message(val) : message;
    return this._refinement((val, ctx) => {
      const result = check(val), setError = () => ctx.addIssue({
        code: ZodIssueCode.custom,
        ...getIssueProperties(val)
      });
      return typeof Promise < "u" && result instanceof Promise ? result.then((data) => data ? !0 : (setError(), !1)) : result ? !0 : (setError(), !1);
    });
  }
  refinement(check, refinementData) {
    return this._refinement((val, ctx) => check(val) ? !0 : (ctx.addIssue(typeof refinementData == "function" ? refinementData(val, ctx) : refinementData), !1));
  }
  _refinement(refinement) {
    return new ZodEffects({
      schema: this,
      typeName: ZodFirstPartyTypeKind.ZodEffects,
      effect: { type: "refinement", refinement }
    });
  }
  superRefine(refinement) {
    return this._refinement(refinement);
  }
  constructor(def) {
    this.spa = this.safeParseAsync, this._def = def, this.parse = this.parse.bind(this), this.safeParse = this.safeParse.bind(this), this.parseAsync = this.parseAsync.bind(this), this.safeParseAsync = this.safeParseAsync.bind(this), this.spa = this.spa.bind(this), this.refine = this.refine.bind(this), this.refinement = this.refinement.bind(this), this.superRefine = this.superRefine.bind(this), this.optional = this.optional.bind(this), this.nullable = this.nullable.bind(this), this.nullish = this.nullish.bind(this), this.array = this.array.bind(this), this.promise = this.promise.bind(this), this.or = this.or.bind(this), this.and = this.and.bind(this), this.transform = this.transform.bind(this), this.brand = this.brand.bind(this), this.default = this.default.bind(this), this.catch = this.catch.bind(this), this.describe = this.describe.bind(this), this.pipe = this.pipe.bind(this), this.readonly = this.readonly.bind(this), this.isNullable = this.isNullable.bind(this), this.isOptional = this.isOptional.bind(this), this["~standard"] = {
      version: 1,
      vendor: "zod",
      validate: (data) => this["~validate"](data)
    };
  }
  optional() {
    return ZodOptional.create(this, this._def);
  }
  nullable() {
    return ZodNullable.create(this, this._def);
  }
  nullish() {
    return this.nullable().optional();
  }
  array() {
    return ZodArray.create(this);
  }
  promise() {
    return ZodPromise.create(this, this._def);
  }
  or(option) {
    return ZodUnion.create([this, option], this._def);
  }
  and(incoming) {
    return ZodIntersection.create(this, incoming, this._def);
  }
  transform(transform) {
    return new ZodEffects({
      ...processCreateParams(this._def),
      schema: this,
      typeName: ZodFirstPartyTypeKind.ZodEffects,
      effect: { type: "transform", transform }
    });
  }
  default(def) {
    const defaultValueFunc = typeof def == "function" ? def : () => def;
    return new ZodDefault({
      ...processCreateParams(this._def),
      innerType: this,
      defaultValue: defaultValueFunc,
      typeName: ZodFirstPartyTypeKind.ZodDefault
    });
  }
  brand() {
    return new ZodBranded({
      typeName: ZodFirstPartyTypeKind.ZodBranded,
      type: this,
      ...processCreateParams(this._def)
    });
  }
  catch(def) {
    const catchValueFunc = typeof def == "function" ? def : () => def;
    return new ZodCatch({
      ...processCreateParams(this._def),
      innerType: this,
      catchValue: catchValueFunc,
      typeName: ZodFirstPartyTypeKind.ZodCatch
    });
  }
  describe(description) {
    const This = this.constructor;
    return new This({
      ...this._def,
      description
    });
  }
  pipe(target) {
    return ZodPipeline.create(this, target);
  }
  readonly() {
    return ZodReadonly.create(this);
  }
  isOptional() {
    return this.safeParse(void 0).success;
  }
  isNullable() {
    return this.safeParse(null).success;
  }
}
const cuidRegex = /^c[^\\s-]{8,}$/i, cuid2Regex = /^[0-9a-z]+$/, ulidRegex = /^[0-9A-HJKMNP-TV-Z]{26}$/i, uuidRegex = /^[0-9a-fA-F]{8}\\b-[0-9a-fA-F]{4}\\b-[0-9a-fA-F]{4}\\b-[0-9a-fA-F]{4}\\b-[0-9a-fA-F]{12}$/i, nanoidRegex = /^[a-z0-9_-]{21}$/i, jwtRegex = /^[A-Za-z0-9-_]+\\.[A-Za-z0-9-_]+\\.[A-Za-z0-9-_]*$/, durationRegex = /^[-+]?P(?!$)(?:(?:[-+]?\\d+Y)|(?:[-+]?\\d+[.,]\\d+Y$))?(?:(?:[-+]?\\d+M)|(?:[-+]?\\d+[.,]\\d+M$))?(?:(?:[-+]?\\d+W)|(?:[-+]?\\d+[.,]\\d+W$))?(?:(?:[-+]?\\d+D)|(?:[-+]?\\d+[.,]\\d+D$))?(?:T(?=[\\d+-])(?:(?:[-+]?\\d+H)|(?:[-+]?\\d+[.,]\\d+H$))?(?:(?:[-+]?\\d+M)|(?:[-+]?\\d+[.,]\\d+M$))?(?:[-+]?\\d+(?:[.,]\\d+)?S)?)??$/, emailRegex = /^(?!\\.)(?!.*\\.\\.)([A-Z0-9_'+\\-\\.]*)[A-Z0-9_+-]@([A-Z0-9][A-Z0-9\\-]*\\.)+[A-Z]{2,}$/i, _emojiRegex = "^(\\\\p{Extended_Pictographic}|\\\\p{Emoji_Component})+$";
let emojiRegex;
const ipv4Regex = /^(?:(?:25[0-5]|2[0-4][0-9]|1[0-9][0-9]|[1-9][0-9]|[0-9])\\.){3}(?:25[0-5]|2[0-4][0-9]|1[0-9][0-9]|[1-9][0-9]|[0-9])$/, ipv4CidrRegex = /^(?:(?:25[0-5]|2[0-4][0-9]|1[0-9][0-9]|[1-9][0-9]|[0-9])\\.){3}(?:25[0-5]|2[0-4][0-9]|1[0-9][0-9]|[1-9][0-9]|[0-9])\\/(3[0-2]|[12]?[0-9])$/, ipv6Regex = /^(([0-9a-fA-F]{1,4}:){7,7}[0-9a-fA-F]{1,4}|([0-9a-fA-F]{1,4}:){1,7}:|([0-9a-fA-F]{1,4}:){1,6}:[0-9a-fA-F]{1,4}|([0-9a-fA-F]{1,4}:){1,5}(:[0-9a-fA-F]{1,4}){1,2}|([0-9a-fA-F]{1,4}:){1,4}(:[0-9a-fA-F]{1,4}){1,3}|([0-9a-fA-F]{1,4}:){1,3}(:[0-9a-fA-F]{1,4}){1,4}|([0-9a-fA-F]{1,4}:){1,2}(:[0-9a-fA-F]{1,4}){1,5}|[0-9a-fA-F]{1,4}:((:[0-9a-fA-F]{1,4}){1,6})|:((:[0-9a-fA-F]{1,4}){1,7}|:)|fe80:(:[0-9a-fA-F]{0,4}){0,4}%[0-9a-zA-Z]{1,}|::(ffff(:0{1,4}){0,1}:){0,1}((25[0-5]|(2[0-4]|1{0,1}[0-9]){0,1}[0-9])\\.){3,3}(25[0-5]|(2[0-4]|1{0,1}[0-9]){0,1}[0-9])|([0-9a-fA-F]{1,4}:){1,4}:((25[0-5]|(2[0-4]|1{0,1}[0-9]){0,1}[0-9])\\.){3,3}(25[0-5]|(2[0-4]|1{0,1}[0-9]){0,1}[0-9]))$/, ipv6CidrRegex = /^(([0-9a-fA-F]{1,4}:){7,7}[0-9a-fA-F]{1,4}|([0-9a-fA-F]{1,4}:){1,7}:|([0-9a-fA-F]{1,4}:){1,6}:[0-9a-fA-F]{1,4}|([0-9a-fA-F]{1,4}:){1,5}(:[0-9a-fA-F]{1,4}){1,2}|([0-9a-fA-F]{1,4}:){1,4}(:[0-9a-fA-F]{1,4}){1,3}|([0-9a-fA-F]{1,4}:){1,3}(:[0-9a-fA-F]{1,4}){1,4}|([0-9a-fA-F]{1,4}:){1,2}(:[0-9a-fA-F]{1,4}){1,5}|[0-9a-fA-F]{1,4}:((:[0-9a-fA-F]{1,4}){1,6})|:((:[0-9a-fA-F]{1,4}){1,7}|:)|fe80:(:[0-9a-fA-F]{0,4}){0,4}%[0-9a-zA-Z]{1,}|::(ffff(:0{1,4}){0,1}:){0,1}((25[0-5]|(2[0-4]|1{0,1}[0-9]){0,1}[0-9])\\.){3,3}(25[0-5]|(2[0-4]|1{0,1}[0-9]){0,1}[0-9])|([0-9a-fA-F]{1,4}:){1,4}:((25[0-5]|(2[0-4]|1{0,1}[0-9]){0,1}[0-9])\\.){3,3}(25[0-5]|(2[0-4]|1{0,1}[0-9]){0,1}[0-9]))\\/(12[0-8]|1[01][0-9]|[1-9]?[0-9])$/, base64Regex = /^([0-9a-zA-Z+/]{4})*(([0-9a-zA-Z+/]{2}==)|([0-9a-zA-Z+/]{3}=))?$/, base64urlRegex = /^([0-9a-zA-Z-_]{4})*(([0-9a-zA-Z-_]{2}(==)?)|([0-9a-zA-Z-_]{3}(=)?))?$/, dateRegexSource = "((\\\\d\\\\d[2468][048]|\\\\d\\\\d[13579][26]|\\\\d\\\\d0[48]|[02468][048]00|[13579][26]00)-02-29|\\\\d{4}-((0[13578]|1[02])-(0[1-9]|[12]\\\\d|3[01])|(0[469]|11)-(0[1-9]|[12]\\\\d|30)|(02)-(0[1-9]|1\\\\d|2[0-8])))", dateRegex = new RegExp(\`^\${dateRegexSource}$\`);
function timeRegexSource(args) {
  let secondsRegexSource = "[0-5]\\\\d";
  args.precision ? secondsRegexSource = \`\${secondsRegexSource}\\\\.\\\\d{\${args.precision}}\` : args.precision == null && (secondsRegexSource = \`\${secondsRegexSource}(\\\\.\\\\d+)?\`);
  const secondsQuantifier = args.precision ? "+" : "?";
  return \`([01]\\\\d|2[0-3]):[0-5]\\\\d(:\${secondsRegexSource})\${secondsQuantifier}\`;
}
function timeRegex(args) {
  return new RegExp(\`^\${timeRegexSource(args)}$\`);
}
function datetimeRegex(args) {
  let regex = \`\${dateRegexSource}T\${timeRegexSource(args)}\`;
  const opts = [];
  return opts.push(args.local ? "Z?" : "Z"), args.offset && opts.push("([+-]\\\\d{2}:?\\\\d{2})"), regex = \`\${regex}(\${opts.join("|")})\`, new RegExp(\`^\${regex}$\`);
}
function isValidIP(ip, version) {
  return !!((version === "v4" || !version) && ipv4Regex.test(ip) || (version === "v6" || !version) && ipv6Regex.test(ip));
}
function isValidJWT(jwt, alg) {
  if (!jwtRegex.test(jwt))
    return !1;
  try {
    const [header] = jwt.split("."), base64 = header.replace(/-/g, "+").replace(/_/g, "/").padEnd(header.length + (4 - header.length % 4) % 4, "="), decoded = JSON.parse(atob(base64));
    return !(typeof decoded != "object" || decoded === null || "typ" in decoded && (decoded == null ? void 0 : decoded.typ) !== "JWT" || !decoded.alg || alg && decoded.alg !== alg);
  } catch {
    return !1;
  }
}
function isValidCidr(ip, version) {
  return !!((version === "v4" || !version) && ipv4CidrRegex.test(ip) || (version === "v6" || !version) && ipv6CidrRegex.test(ip));
}
class ZodString extends ZodType {
  _parse(input) {
    if (this._def.coerce && (input.data = String(input.data)), this._getType(input) !== ZodParsedType.string) {
      const ctx2 = this._getOrReturnCtx(input);
      return addIssueToContext(ctx2, {
        code: ZodIssueCode.invalid_type,
        expected: ZodParsedType.string,
        received: ctx2.parsedType
      }), INVALID;
    }
    const status = new ParseStatus();
    let ctx;
    for (const check of this._def.checks)
      if (check.kind === "min")
        input.data.length < check.value && (ctx = this._getOrReturnCtx(input, ctx), addIssueToContext(ctx, {
          code: ZodIssueCode.too_small,
          minimum: check.value,
          type: "string",
          inclusive: !0,
          exact: !1,
          message: check.message
        }), status.dirty());
      else if (check.kind === "max")
        input.data.length > check.value && (ctx = this._getOrReturnCtx(input, ctx), addIssueToContext(ctx, {
          code: ZodIssueCode.too_big,
          maximum: check.value,
          type: "string",
          inclusive: !0,
          exact: !1,
          message: check.message
        }), status.dirty());
      else if (check.kind === "length") {
        const tooBig = input.data.length > check.value, tooSmall = input.data.length < check.value;
        (tooBig || tooSmall) && (ctx = this._getOrReturnCtx(input, ctx), tooBig ? addIssueToContext(ctx, {
          code: ZodIssueCode.too_big,
          maximum: check.value,
          type: "string",
          inclusive: !0,
          exact: !0,
          message: check.message
        }) : tooSmall && addIssueToContext(ctx, {
          code: ZodIssueCode.too_small,
          minimum: check.value,
          type: "string",
          inclusive: !0,
          exact: !0,
          message: check.message
        }), status.dirty());
      } else if (check.kind === "email")
        emailRegex.test(input.data) || (ctx = this._getOrReturnCtx(input, ctx), addIssueToContext(ctx, {
          validation: "email",
          code: ZodIssueCode.invalid_string,
          message: check.message
        }), status.dirty());
      else if (check.kind === "emoji")
        emojiRegex || (emojiRegex = new RegExp(_emojiRegex, "u")), emojiRegex.test(input.data) || (ctx = this._getOrReturnCtx(input, ctx), addIssueToContext(ctx, {
          validation: "emoji",
          code: ZodIssueCode.invalid_string,
          message: check.message
        }), status.dirty());
      else if (check.kind === "uuid")
        uuidRegex.test(input.data) || (ctx = this._getOrReturnCtx(input, ctx), addIssueToContext(ctx, {
          validation: "uuid",
          code: ZodIssueCode.invalid_string,
          message: check.message
        }), status.dirty());
      else if (check.kind === "nanoid")
        nanoidRegex.test(input.data) || (ctx = this._getOrReturnCtx(input, ctx), addIssueToContext(ctx, {
          validation: "nanoid",
          code: ZodIssueCode.invalid_string,
          message: check.message
        }), status.dirty());
      else if (check.kind === "cuid")
        cuidRegex.test(input.data) || (ctx = this._getOrReturnCtx(input, ctx), addIssueToContext(ctx, {
          validation: "cuid",
          code: ZodIssueCode.invalid_string,
          message: check.message
        }), status.dirty());
      else if (check.kind === "cuid2")
        cuid2Regex.test(input.data) || (ctx = this._getOrReturnCtx(input, ctx), addIssueToContext(ctx, {
          validation: "cuid2",
          code: ZodIssueCode.invalid_string,
          message: check.message
        }), status.dirty());
      else if (check.kind === "ulid")
        ulidRegex.test(input.data) || (ctx = this._getOrReturnCtx(input, ctx), addIssueToContext(ctx, {
          validation: "ulid",
          code: ZodIssueCode.invalid_string,
          message: check.message
        }), status.dirty());
      else if (check.kind === "url")
        try {
          new URL(input.data);
        } catch {
          ctx = this._getOrReturnCtx(input, ctx), addIssueToContext(ctx, {
            validation: "url",
            code: ZodIssueCode.invalid_string,
            message: check.message
          }), status.dirty();
        }
      else check.kind === "regex" ? (check.regex.lastIndex = 0, check.regex.test(input.data) || (ctx = this._getOrReturnCtx(input, ctx), addIssueToContext(ctx, {
        validation: "regex",
        code: ZodIssueCode.invalid_string,
        message: check.message
      }), status.dirty())) : check.kind === "trim" ? input.data = input.data.trim() : check.kind === "includes" ? input.data.includes(check.value, check.position) || (ctx = this._getOrReturnCtx(input, ctx), addIssueToContext(ctx, {
        code: ZodIssueCode.invalid_string,
        validation: { includes: check.value, position: check.position },
        message: check.message
      }), status.dirty()) : check.kind === "toLowerCase" ? input.data = input.data.toLowerCase() : check.kind === "toUpperCase" ? input.data = input.data.toUpperCase() : check.kind === "startsWith" ? input.data.startsWith(check.value) || (ctx = this._getOrReturnCtx(input, ctx), addIssueToContext(ctx, {
        code: ZodIssueCode.invalid_string,
        validation: { startsWith: check.value },
        message: check.message
      }), status.dirty()) : check.kind === "endsWith" ? input.data.endsWith(check.value) || (ctx = this._getOrReturnCtx(input, ctx), addIssueToContext(ctx, {
        code: ZodIssueCode.invalid_string,
        validation: { endsWith: check.value },
        message: check.message
      }), status.dirty()) : check.kind === "datetime" ? datetimeRegex(check).test(input.data) || (ctx = this._getOrReturnCtx(input, ctx), addIssueToContext(ctx, {
        code: ZodIssueCode.invalid_string,
        validation: "datetime",
        message: check.message
      }), status.dirty()) : check.kind === "date" ? dateRegex.test(input.data) || (ctx = this._getOrReturnCtx(input, ctx), addIssueToContext(ctx, {
        code: ZodIssueCode.invalid_string,
        validation: "date",
        message: check.message
      }), status.dirty()) : check.kind === "time" ? timeRegex(check).test(input.data) || (ctx = this._getOrReturnCtx(input, ctx), addIssueToContext(ctx, {
        code: ZodIssueCode.invalid_string,
        validation: "time",
        message: check.message
      }), status.dirty()) : check.kind === "duration" ? durationRegex.test(input.data) || (ctx = this._getOrReturnCtx(input, ctx), addIssueToContext(ctx, {
        validation: "duration",
        code: ZodIssueCode.invalid_string,
        message: check.message
      }), status.dirty()) : check.kind === "ip" ? isValidIP(input.data, check.version) || (ctx = this._getOrReturnCtx(input, ctx), addIssueToContext(ctx, {
        validation: "ip",
        code: ZodIssueCode.invalid_string,
        message: check.message
      }), status.dirty()) : check.kind === "jwt" ? isValidJWT(input.data, check.alg) || (ctx = this._getOrReturnCtx(input, ctx), addIssueToContext(ctx, {
        validation: "jwt",
        code: ZodIssueCode.invalid_string,
        message: check.message
      }), status.dirty()) : check.kind === "cidr" ? isValidCidr(input.data, check.version) || (ctx = this._getOrReturnCtx(input, ctx), addIssueToContext(ctx, {
        validation: "cidr",
        code: ZodIssueCode.invalid_string,
        message: check.message
      }), status.dirty()) : check.kind === "base64" ? base64Regex.test(input.data) || (ctx = this._getOrReturnCtx(input, ctx), addIssueToContext(ctx, {
        validation: "base64",
        code: ZodIssueCode.invalid_string,
        message: check.message
      }), status.dirty()) : check.kind === "base64url" ? base64urlRegex.test(input.data) || (ctx = this._getOrReturnCtx(input, ctx), addIssueToContext(ctx, {
        validation: "base64url",
        code: ZodIssueCode.invalid_string,
        message: check.message
      }), status.dirty()) : util.assertNever(check);
    return { status: status.value, value: input.data };
  }
  _regex(regex, validation, message) {
    return this.refinement((data) => regex.test(data), {
      validation,
      code: ZodIssueCode.invalid_string,
      ...errorUtil.errToObj(message)
    });
  }
  _addCheck(check) {
    return new ZodString({
      ...this._def,
      checks: [...this._def.checks, check]
    });
  }
  email(message) {
    return this._addCheck({ kind: "email", ...errorUtil.errToObj(message) });
  }
  url(message) {
    return this._addCheck({ kind: "url", ...errorUtil.errToObj(message) });
  }
  emoji(message) {
    return this._addCheck({ kind: "emoji", ...errorUtil.errToObj(message) });
  }
  uuid(message) {
    return this._addCheck({ kind: "uuid", ...errorUtil.errToObj(message) });
  }
  nanoid(message) {
    return this._addCheck({ kind: "nanoid", ...errorUtil.errToObj(message) });
  }
  cuid(message) {
    return this._addCheck({ kind: "cuid", ...errorUtil.errToObj(message) });
  }
  cuid2(message) {
    return this._addCheck({ kind: "cuid2", ...errorUtil.errToObj(message) });
  }
  ulid(message) {
    return this._addCheck({ kind: "ulid", ...errorUtil.errToObj(message) });
  }
  base64(message) {
    return this._addCheck({ kind: "base64", ...errorUtil.errToObj(message) });
  }
  base64url(message) {
    return this._addCheck({
      kind: "base64url",
      ...errorUtil.errToObj(message)
    });
  }
  jwt(options) {
    return this._addCheck({ kind: "jwt", ...errorUtil.errToObj(options) });
  }
  ip(options) {
    return this._addCheck({ kind: "ip", ...errorUtil.errToObj(options) });
  }
  cidr(options) {
    return this._addCheck({ kind: "cidr", ...errorUtil.errToObj(options) });
  }
  datetime(options) {
    return typeof options == "string" ? this._addCheck({
      kind: "datetime",
      precision: null,
      offset: !1,
      local: !1,
      message: options
    }) : this._addCheck({
      kind: "datetime",
      precision: typeof (options == null ? void 0 : options.precision) > "u" ? null : options == null ? void 0 : options.precision,
      offset: (options == null ? void 0 : options.offset) ?? !1,
      local: (options == null ? void 0 : options.local) ?? !1,
      ...errorUtil.errToObj(options == null ? void 0 : options.message)
    });
  }
  date(message) {
    return this._addCheck({ kind: "date", message });
  }
  time(options) {
    return typeof options == "string" ? this._addCheck({
      kind: "time",
      precision: null,
      message: options
    }) : this._addCheck({
      kind: "time",
      precision: typeof (options == null ? void 0 : options.precision) > "u" ? null : options == null ? void 0 : options.precision,
      ...errorUtil.errToObj(options == null ? void 0 : options.message)
    });
  }
  duration(message) {
    return this._addCheck({ kind: "duration", ...errorUtil.errToObj(message) });
  }
  regex(regex, message) {
    return this._addCheck({
      kind: "regex",
      regex,
      ...errorUtil.errToObj(message)
    });
  }
  includes(value, options) {
    return this._addCheck({
      kind: "includes",
      value,
      position: options == null ? void 0 : options.position,
      ...errorUtil.errToObj(options == null ? void 0 : options.message)
    });
  }
  startsWith(value, message) {
    return this._addCheck({
      kind: "startsWith",
      value,
      ...errorUtil.errToObj(message)
    });
  }
  endsWith(value, message) {
    return this._addCheck({
      kind: "endsWith",
      value,
      ...errorUtil.errToObj(message)
    });
  }
  min(minLength, message) {
    return this._addCheck({
      kind: "min",
      value: minLength,
      ...errorUtil.errToObj(message)
    });
  }
  max(maxLength, message) {
    return this._addCheck({
      kind: "max",
      value: maxLength,
      ...errorUtil.errToObj(message)
    });
  }
  length(len, message) {
    return this._addCheck({
      kind: "length",
      value: len,
      ...errorUtil.errToObj(message)
    });
  }
  /**
   * Equivalent to \`.min(1)\`
   */
  nonempty(message) {
    return this.min(1, errorUtil.errToObj(message));
  }
  trim() {
    return new ZodString({
      ...this._def,
      checks: [...this._def.checks, { kind: "trim" }]
    });
  }
  toLowerCase() {
    return new ZodString({
      ...this._def,
      checks: [...this._def.checks, { kind: "toLowerCase" }]
    });
  }
  toUpperCase() {
    return new ZodString({
      ...this._def,
      checks: [...this._def.checks, { kind: "toUpperCase" }]
    });
  }
  get isDatetime() {
    return !!this._def.checks.find((ch) => ch.kind === "datetime");
  }
  get isDate() {
    return !!this._def.checks.find((ch) => ch.kind === "date");
  }
  get isTime() {
    return !!this._def.checks.find((ch) => ch.kind === "time");
  }
  get isDuration() {
    return !!this._def.checks.find((ch) => ch.kind === "duration");
  }
  get isEmail() {
    return !!this._def.checks.find((ch) => ch.kind === "email");
  }
  get isURL() {
    return !!this._def.checks.find((ch) => ch.kind === "url");
  }
  get isEmoji() {
    return !!this._def.checks.find((ch) => ch.kind === "emoji");
  }
  get isUUID() {
    return !!this._def.checks.find((ch) => ch.kind === "uuid");
  }
  get isNANOID() {
    return !!this._def.checks.find((ch) => ch.kind === "nanoid");
  }
  get isCUID() {
    return !!this._def.checks.find((ch) => ch.kind === "cuid");
  }
  get isCUID2() {
    return !!this._def.checks.find((ch) => ch.kind === "cuid2");
  }
  get isULID() {
    return !!this._def.checks.find((ch) => ch.kind === "ulid");
  }
  get isIP() {
    return !!this._def.checks.find((ch) => ch.kind === "ip");
  }
  get isCIDR() {
    return !!this._def.checks.find((ch) => ch.kind === "cidr");
  }
  get isBase64() {
    return !!this._def.checks.find((ch) => ch.kind === "base64");
  }
  get isBase64url() {
    return !!this._def.checks.find((ch) => ch.kind === "base64url");
  }
  get minLength() {
    let min = null;
    for (const ch of this._def.checks)
      ch.kind === "min" && (min === null || ch.value > min) && (min = ch.value);
    return min;
  }
  get maxLength() {
    let max = null;
    for (const ch of this._def.checks)
      ch.kind === "max" && (max === null || ch.value < max) && (max = ch.value);
    return max;
  }
}
ZodString.create = (params) => new ZodString({
  checks: [],
  typeName: ZodFirstPartyTypeKind.ZodString,
  coerce: (params == null ? void 0 : params.coerce) ?? !1,
  ...processCreateParams(params)
});
function floatSafeRemainder(val, step) {
  const valDecCount = (val.toString().split(".")[1] || "").length, stepDecCount = (step.toString().split(".")[1] || "").length, decCount = valDecCount > stepDecCount ? valDecCount : stepDecCount, valInt = Number.parseInt(val.toFixed(decCount).replace(".", "")), stepInt = Number.parseInt(step.toFixed(decCount).replace(".", ""));
  return valInt % stepInt / 10 ** decCount;
}
class ZodNumber extends ZodType {
  constructor() {
    super(...arguments), this.min = this.gte, this.max = this.lte, this.step = this.multipleOf;
  }
  _parse(input) {
    if (this._def.coerce && (input.data = Number(input.data)), this._getType(input) !== ZodParsedType.number) {
      const ctx2 = this._getOrReturnCtx(input);
      return addIssueToContext(ctx2, {
        code: ZodIssueCode.invalid_type,
        expected: ZodParsedType.number,
        received: ctx2.parsedType
      }), INVALID;
    }
    let ctx;
    const status = new ParseStatus();
    for (const check of this._def.checks)
      check.kind === "int" ? util.isInteger(input.data) || (ctx = this._getOrReturnCtx(input, ctx), addIssueToContext(ctx, {
        code: ZodIssueCode.invalid_type,
        expected: "integer",
        received: "float",
        message: check.message
      }), status.dirty()) : check.kind === "min" ? (check.inclusive ? input.data < check.value : input.data <= check.value) && (ctx = this._getOrReturnCtx(input, ctx), addIssueToContext(ctx, {
        code: ZodIssueCode.too_small,
        minimum: check.value,
        type: "number",
        inclusive: check.inclusive,
        exact: !1,
        message: check.message
      }), status.dirty()) : check.kind === "max" ? (check.inclusive ? input.data > check.value : input.data >= check.value) && (ctx = this._getOrReturnCtx(input, ctx), addIssueToContext(ctx, {
        code: ZodIssueCode.too_big,
        maximum: check.value,
        type: "number",
        inclusive: check.inclusive,
        exact: !1,
        message: check.message
      }), status.dirty()) : check.kind === "multipleOf" ? floatSafeRemainder(input.data, check.value) !== 0 && (ctx = this._getOrReturnCtx(input, ctx), addIssueToContext(ctx, {
        code: ZodIssueCode.not_multiple_of,
        multipleOf: check.value,
        message: check.message
      }), status.dirty()) : check.kind === "finite" ? Number.isFinite(input.data) || (ctx = this._getOrReturnCtx(input, ctx), addIssueToContext(ctx, {
        code: ZodIssueCode.not_finite,
        message: check.message
      }), status.dirty()) : util.assertNever(check);
    return { status: status.value, value: input.data };
  }
  gte(value, message) {
    return this.setLimit("min", value, !0, errorUtil.toString(message));
  }
  gt(value, message) {
    return this.setLimit("min", value, !1, errorUtil.toString(message));
  }
  lte(value, message) {
    return this.setLimit("max", value, !0, errorUtil.toString(message));
  }
  lt(value, message) {
    return this.setLimit("max", value, !1, errorUtil.toString(message));
  }
  setLimit(kind, value, inclusive, message) {
    return new ZodNumber({
      ...this._def,
      checks: [
        ...this._def.checks,
        {
          kind,
          value,
          inclusive,
          message: errorUtil.toString(message)
        }
      ]
    });
  }
  _addCheck(check) {
    return new ZodNumber({
      ...this._def,
      checks: [...this._def.checks, check]
    });
  }
  int(message) {
    return this._addCheck({
      kind: "int",
      message: errorUtil.toString(message)
    });
  }
  positive(message) {
    return this._addCheck({
      kind: "min",
      value: 0,
      inclusive: !1,
      message: errorUtil.toString(message)
    });
  }
  negative(message) {
    return this._addCheck({
      kind: "max",
      value: 0,
      inclusive: !1,
      message: errorUtil.toString(message)
    });
  }
  nonpositive(message) {
    return this._addCheck({
      kind: "max",
      value: 0,
      inclusive: !0,
      message: errorUtil.toString(message)
    });
  }
  nonnegative(message) {
    return this._addCheck({
      kind: "min",
      value: 0,
      inclusive: !0,
      message: errorUtil.toString(message)
    });
  }
  multipleOf(value, message) {
    return this._addCheck({
      kind: "multipleOf",
      value,
      message: errorUtil.toString(message)
    });
  }
  finite(message) {
    return this._addCheck({
      kind: "finite",
      message: errorUtil.toString(message)
    });
  }
  safe(message) {
    return this._addCheck({
      kind: "min",
      inclusive: !0,
      value: Number.MIN_SAFE_INTEGER,
      message: errorUtil.toString(message)
    })._addCheck({
      kind: "max",
      inclusive: !0,
      value: Number.MAX_SAFE_INTEGER,
      message: errorUtil.toString(message)
    });
  }
  get minValue() {
    let min = null;
    for (const ch of this._def.checks)
      ch.kind === "min" && (min === null || ch.value > min) && (min = ch.value);
    return min;
  }
  get maxValue() {
    let max = null;
    for (const ch of this._def.checks)
      ch.kind === "max" && (max === null || ch.value < max) && (max = ch.value);
    return max;
  }
  get isInt() {
    return !!this._def.checks.find((ch) => ch.kind === "int" || ch.kind === "multipleOf" && util.isInteger(ch.value));
  }
  get isFinite() {
    let max = null, min = null;
    for (const ch of this._def.checks) {
      if (ch.kind === "finite" || ch.kind === "int" || ch.kind === "multipleOf")
        return !0;
      ch.kind === "min" ? (min === null || ch.value > min) && (min = ch.value) : ch.kind === "max" && (max === null || ch.value < max) && (max = ch.value);
    }
    return Number.isFinite(min) && Number.isFinite(max);
  }
}
ZodNumber.create = (params) => new ZodNumber({
  checks: [],
  typeName: ZodFirstPartyTypeKind.ZodNumber,
  coerce: (params == null ? void 0 : params.coerce) || !1,
  ...processCreateParams(params)
});
class ZodBigInt extends ZodType {
  constructor() {
    super(...arguments), this.min = this.gte, this.max = this.lte;
  }
  _parse(input) {
    if (this._def.coerce)
      try {
        input.data = BigInt(input.data);
      } catch {
        return this._getInvalidInput(input);
      }
    if (this._getType(input) !== ZodParsedType.bigint)
      return this._getInvalidInput(input);
    let ctx;
    const status = new ParseStatus();
    for (const check of this._def.checks)
      check.kind === "min" ? (check.inclusive ? input.data < check.value : input.data <= check.value) && (ctx = this._getOrReturnCtx(input, ctx), addIssueToContext(ctx, {
        code: ZodIssueCode.too_small,
        type: "bigint",
        minimum: check.value,
        inclusive: check.inclusive,
        message: check.message
      }), status.dirty()) : check.kind === "max" ? (check.inclusive ? input.data > check.value : input.data >= check.value) && (ctx = this._getOrReturnCtx(input, ctx), addIssueToContext(ctx, {
        code: ZodIssueCode.too_big,
        type: "bigint",
        maximum: check.value,
        inclusive: check.inclusive,
        message: check.message
      }), status.dirty()) : check.kind === "multipleOf" ? input.data % check.value !== BigInt(0) && (ctx = this._getOrReturnCtx(input, ctx), addIssueToContext(ctx, {
        code: ZodIssueCode.not_multiple_of,
        multipleOf: check.value,
        message: check.message
      }), status.dirty()) : util.assertNever(check);
    return { status: status.value, value: input.data };
  }
  _getInvalidInput(input) {
    const ctx = this._getOrReturnCtx(input);
    return addIssueToContext(ctx, {
      code: ZodIssueCode.invalid_type,
      expected: ZodParsedType.bigint,
      received: ctx.parsedType
    }), INVALID;
  }
  gte(value, message) {
    return this.setLimit("min", value, !0, errorUtil.toString(message));
  }
  gt(value, message) {
    return this.setLimit("min", value, !1, errorUtil.toString(message));
  }
  lte(value, message) {
    return this.setLimit("max", value, !0, errorUtil.toString(message));
  }
  lt(value, message) {
    return this.setLimit("max", value, !1, errorUtil.toString(message));
  }
  setLimit(kind, value, inclusive, message) {
    return new ZodBigInt({
      ...this._def,
      checks: [
        ...this._def.checks,
        {
          kind,
          value,
          inclusive,
          message: errorUtil.toString(message)
        }
      ]
    });
  }
  _addCheck(check) {
    return new ZodBigInt({
      ...this._def,
      checks: [...this._def.checks, check]
    });
  }
  positive(message) {
    return this._addCheck({
      kind: "min",
      value: BigInt(0),
      inclusive: !1,
      message: errorUtil.toString(message)
    });
  }
  negative(message) {
    return this._addCheck({
      kind: "max",
      value: BigInt(0),
      inclusive: !1,
      message: errorUtil.toString(message)
    });
  }
  nonpositive(message) {
    return this._addCheck({
      kind: "max",
      value: BigInt(0),
      inclusive: !0,
      message: errorUtil.toString(message)
    });
  }
  nonnegative(message) {
    return this._addCheck({
      kind: "min",
      value: BigInt(0),
      inclusive: !0,
      message: errorUtil.toString(message)
    });
  }
  multipleOf(value, message) {
    return this._addCheck({
      kind: "multipleOf",
      value,
      message: errorUtil.toString(message)
    });
  }
  get minValue() {
    let min = null;
    for (const ch of this._def.checks)
      ch.kind === "min" && (min === null || ch.value > min) && (min = ch.value);
    return min;
  }
  get maxValue() {
    let max = null;
    for (const ch of this._def.checks)
      ch.kind === "max" && (max === null || ch.value < max) && (max = ch.value);
    return max;
  }
}
ZodBigInt.create = (params) => new ZodBigInt({
  checks: [],
  typeName: ZodFirstPartyTypeKind.ZodBigInt,
  coerce: (params == null ? void 0 : params.coerce) ?? !1,
  ...processCreateParams(params)
});
class ZodBoolean extends ZodType {
  _parse(input) {
    if (this._def.coerce && (input.data = !!input.data), this._getType(input) !== ZodParsedType.boolean) {
      const ctx = this._getOrReturnCtx(input);
      return addIssueToContext(ctx, {
        code: ZodIssueCode.invalid_type,
        expected: ZodParsedType.boolean,
        received: ctx.parsedType
      }), INVALID;
    }
    return OK(input.data);
  }
}
ZodBoolean.create = (params) => new ZodBoolean({
  typeName: ZodFirstPartyTypeKind.ZodBoolean,
  coerce: (params == null ? void 0 : params.coerce) || !1,
  ...processCreateParams(params)
});
class ZodDate extends ZodType {
  _parse(input) {
    if (this._def.coerce && (input.data = new Date(input.data)), this._getType(input) !== ZodParsedType.date) {
      const ctx2 = this._getOrReturnCtx(input);
      return addIssueToContext(ctx2, {
        code: ZodIssueCode.invalid_type,
        expected: ZodParsedType.date,
        received: ctx2.parsedType
      }), INVALID;
    }
    if (Number.isNaN(input.data.getTime())) {
      const ctx2 = this._getOrReturnCtx(input);
      return addIssueToContext(ctx2, {
        code: ZodIssueCode.invalid_date
      }), INVALID;
    }
    const status = new ParseStatus();
    let ctx;
    for (const check of this._def.checks)
      check.kind === "min" ? input.data.getTime() < check.value && (ctx = this._getOrReturnCtx(input, ctx), addIssueToContext(ctx, {
        code: ZodIssueCode.too_small,
        message: check.message,
        inclusive: !0,
        exact: !1,
        minimum: check.value,
        type: "date"
      }), status.dirty()) : check.kind === "max" ? input.data.getTime() > check.value && (ctx = this._getOrReturnCtx(input, ctx), addIssueToContext(ctx, {
        code: ZodIssueCode.too_big,
        message: check.message,
        inclusive: !0,
        exact: !1,
        maximum: check.value,
        type: "date"
      }), status.dirty()) : util.assertNever(check);
    return {
      status: status.value,
      value: new Date(input.data.getTime())
    };
  }
  _addCheck(check) {
    return new ZodDate({
      ...this._def,
      checks: [...this._def.checks, check]
    });
  }
  min(minDate, message) {
    return this._addCheck({
      kind: "min",
      value: minDate.getTime(),
      message: errorUtil.toString(message)
    });
  }
  max(maxDate, message) {
    return this._addCheck({
      kind: "max",
      value: maxDate.getTime(),
      message: errorUtil.toString(message)
    });
  }
  get minDate() {
    let min = null;
    for (const ch of this._def.checks)
      ch.kind === "min" && (min === null || ch.value > min) && (min = ch.value);
    return min != null ? new Date(min) : null;
  }
  get maxDate() {
    let max = null;
    for (const ch of this._def.checks)
      ch.kind === "max" && (max === null || ch.value < max) && (max = ch.value);
    return max != null ? new Date(max) : null;
  }
}
ZodDate.create = (params) => new ZodDate({
  checks: [],
  coerce: (params == null ? void 0 : params.coerce) || !1,
  typeName: ZodFirstPartyTypeKind.ZodDate,
  ...processCreateParams(params)
});
class ZodSymbol extends ZodType {
  _parse(input) {
    if (this._getType(input) !== ZodParsedType.symbol) {
      const ctx = this._getOrReturnCtx(input);
      return addIssueToContext(ctx, {
        code: ZodIssueCode.invalid_type,
        expected: ZodParsedType.symbol,
        received: ctx.parsedType
      }), INVALID;
    }
    return OK(input.data);
  }
}
ZodSymbol.create = (params) => new ZodSymbol({
  typeName: ZodFirstPartyTypeKind.ZodSymbol,
  ...processCreateParams(params)
});
class ZodUndefined extends ZodType {
  _parse(input) {
    if (this._getType(input) !== ZodParsedType.undefined) {
      const ctx = this._getOrReturnCtx(input);
      return addIssueToContext(ctx, {
        code: ZodIssueCode.invalid_type,
        expected: ZodParsedType.undefined,
        received: ctx.parsedType
      }), INVALID;
    }
    return OK(input.data);
  }
}
ZodUndefined.create = (params) => new ZodUndefined({
  typeName: ZodFirstPartyTypeKind.ZodUndefined,
  ...processCreateParams(params)
});
class ZodNull extends ZodType {
  _parse(input) {
    if (this._getType(input) !== ZodParsedType.null) {
      const ctx = this._getOrReturnCtx(input);
      return addIssueToContext(ctx, {
        code: ZodIssueCode.invalid_type,
        expected: ZodParsedType.null,
        received: ctx.parsedType
      }), INVALID;
    }
    return OK(input.data);
  }
}
ZodNull.create = (params) => new ZodNull({
  typeName: ZodFirstPartyTypeKind.ZodNull,
  ...processCreateParams(params)
});
class ZodAny extends ZodType {
  constructor() {
    super(...arguments), this._any = !0;
  }
  _parse(input) {
    return OK(input.data);
  }
}
ZodAny.create = (params) => new ZodAny({
  typeName: ZodFirstPartyTypeKind.ZodAny,
  ...processCreateParams(params)
});
class ZodUnknown extends ZodType {
  constructor() {
    super(...arguments), this._unknown = !0;
  }
  _parse(input) {
    return OK(input.data);
  }
}
ZodUnknown.create = (params) => new ZodUnknown({
  typeName: ZodFirstPartyTypeKind.ZodUnknown,
  ...processCreateParams(params)
});
class ZodNever extends ZodType {
  _parse(input) {
    const ctx = this._getOrReturnCtx(input);
    return addIssueToContext(ctx, {
      code: ZodIssueCode.invalid_type,
      expected: ZodParsedType.never,
      received: ctx.parsedType
    }), INVALID;
  }
}
ZodNever.create = (params) => new ZodNever({
  typeName: ZodFirstPartyTypeKind.ZodNever,
  ...processCreateParams(params)
});
class ZodVoid extends ZodType {
  _parse(input) {
    if (this._getType(input) !== ZodParsedType.undefined) {
      const ctx = this._getOrReturnCtx(input);
      return addIssueToContext(ctx, {
        code: ZodIssueCode.invalid_type,
        expected: ZodParsedType.void,
        received: ctx.parsedType
      }), INVALID;
    }
    return OK(input.data);
  }
}
ZodVoid.create = (params) => new ZodVoid({
  typeName: ZodFirstPartyTypeKind.ZodVoid,
  ...processCreateParams(params)
});
class ZodArray extends ZodType {
  _parse(input) {
    const { ctx, status } = this._processInputParams(input), def = this._def;
    if (ctx.parsedType !== ZodParsedType.array)
      return addIssueToContext(ctx, {
        code: ZodIssueCode.invalid_type,
        expected: ZodParsedType.array,
        received: ctx.parsedType
      }), INVALID;
    if (def.exactLength !== null) {
      const tooBig = ctx.data.length > def.exactLength.value, tooSmall = ctx.data.length < def.exactLength.value;
      (tooBig || tooSmall) && (addIssueToContext(ctx, {
        code: tooBig ? ZodIssueCode.too_big : ZodIssueCode.too_small,
        minimum: tooSmall ? def.exactLength.value : void 0,
        maximum: tooBig ? def.exactLength.value : void 0,
        type: "array",
        inclusive: !0,
        exact: !0,
        message: def.exactLength.message
      }), status.dirty());
    }
    if (def.minLength !== null && ctx.data.length < def.minLength.value && (addIssueToContext(ctx, {
      code: ZodIssueCode.too_small,
      minimum: def.minLength.value,
      type: "array",
      inclusive: !0,
      exact: !1,
      message: def.minLength.message
    }), status.dirty()), def.maxLength !== null && ctx.data.length > def.maxLength.value && (addIssueToContext(ctx, {
      code: ZodIssueCode.too_big,
      maximum: def.maxLength.value,
      type: "array",
      inclusive: !0,
      exact: !1,
      message: def.maxLength.message
    }), status.dirty()), ctx.common.async)
      return Promise.all([...ctx.data].map((item, i) => def.type._parseAsync(new ParseInputLazyPath(ctx, item, ctx.path, i)))).then((result2) => ParseStatus.mergeArray(status, result2));
    const result = [...ctx.data].map((item, i) => def.type._parseSync(new ParseInputLazyPath(ctx, item, ctx.path, i)));
    return ParseStatus.mergeArray(status, result);
  }
  get element() {
    return this._def.type;
  }
  min(minLength, message) {
    return new ZodArray({
      ...this._def,
      minLength: { value: minLength, message: errorUtil.toString(message) }
    });
  }
  max(maxLength, message) {
    return new ZodArray({
      ...this._def,
      maxLength: { value: maxLength, message: errorUtil.toString(message) }
    });
  }
  length(len, message) {
    return new ZodArray({
      ...this._def,
      exactLength: { value: len, message: errorUtil.toString(message) }
    });
  }
  nonempty(message) {
    return this.min(1, message);
  }
}
ZodArray.create = (schema, params) => new ZodArray({
  type: schema,
  minLength: null,
  maxLength: null,
  exactLength: null,
  typeName: ZodFirstPartyTypeKind.ZodArray,
  ...processCreateParams(params)
});
function deepPartialify(schema) {
  if (schema instanceof ZodObject) {
    const newShape = {};
    for (const key in schema.shape) {
      const fieldSchema = schema.shape[key];
      newShape[key] = ZodOptional.create(deepPartialify(fieldSchema));
    }
    return new ZodObject({
      ...schema._def,
      shape: () => newShape
    });
  } else return schema instanceof ZodArray ? new ZodArray({
    ...schema._def,
    type: deepPartialify(schema.element)
  }) : schema instanceof ZodOptional ? ZodOptional.create(deepPartialify(schema.unwrap())) : schema instanceof ZodNullable ? ZodNullable.create(deepPartialify(schema.unwrap())) : schema instanceof ZodTuple ? ZodTuple.create(schema.items.map((item) => deepPartialify(item))) : schema;
}
class ZodObject extends ZodType {
  constructor() {
    super(...arguments), this._cached = null, this.nonstrict = this.passthrough, this.augment = this.extend;
  }
  _getCached() {
    if (this._cached !== null)
      return this._cached;
    const shape = this._def.shape(), keys = util.objectKeys(shape);
    return this._cached = { shape, keys }, this._cached;
  }
  _parse(input) {
    if (this._getType(input) !== ZodParsedType.object) {
      const ctx2 = this._getOrReturnCtx(input);
      return addIssueToContext(ctx2, {
        code: ZodIssueCode.invalid_type,
        expected: ZodParsedType.object,
        received: ctx2.parsedType
      }), INVALID;
    }
    const { status, ctx } = this._processInputParams(input), { shape, keys: shapeKeys } = this._getCached(), extraKeys = [];
    if (!(this._def.catchall instanceof ZodNever && this._def.unknownKeys === "strip"))
      for (const key in ctx.data)
        shapeKeys.includes(key) || extraKeys.push(key);
    const pairs = [];
    for (const key of shapeKeys) {
      const keyValidator = shape[key], value = ctx.data[key];
      pairs.push({
        key: { status: "valid", value: key },
        value: keyValidator._parse(new ParseInputLazyPath(ctx, value, ctx.path, key)),
        alwaysSet: key in ctx.data
      });
    }
    if (this._def.catchall instanceof ZodNever) {
      const unknownKeys = this._def.unknownKeys;
      if (unknownKeys === "passthrough")
        for (const key of extraKeys)
          pairs.push({
            key: { status: "valid", value: key },
            value: { status: "valid", value: ctx.data[key] }
          });
      else if (unknownKeys === "strict")
        extraKeys.length > 0 && (addIssueToContext(ctx, {
          code: ZodIssueCode.unrecognized_keys,
          keys: extraKeys
        }), status.dirty());
      else if (unknownKeys !== "strip") throw new Error("Internal ZodObject error: invalid unknownKeys value.");
    } else {
      const catchall = this._def.catchall;
      for (const key of extraKeys) {
        const value = ctx.data[key];
        pairs.push({
          key: { status: "valid", value: key },
          value: catchall._parse(
            new ParseInputLazyPath(ctx, value, ctx.path, key)
            //, ctx.child(key), value, getParsedType(value)
          ),
          alwaysSet: key in ctx.data
        });
      }
    }
    return ctx.common.async ? Promise.resolve().then(async () => {
      const syncPairs = [];
      for (const pair of pairs) {
        const key = await pair.key, value = await pair.value;
        syncPairs.push({
          key,
          value,
          alwaysSet: pair.alwaysSet
        });
      }
      return syncPairs;
    }).then((syncPairs) => ParseStatus.mergeObjectSync(status, syncPairs)) : ParseStatus.mergeObjectSync(status, pairs);
  }
  get shape() {
    return this._def.shape();
  }
  strict(message) {
    return errorUtil.errToObj, new ZodObject({
      ...this._def,
      unknownKeys: "strict",
      ...message !== void 0 ? {
        errorMap: (issue, ctx) => {
          var _a, _b;
          const defaultError = ((_b = (_a = this._def).errorMap) == null ? void 0 : _b.call(_a, issue, ctx).message) ?? ctx.defaultError;
          return issue.code === "unrecognized_keys" ? {
            message: errorUtil.errToObj(message).message ?? defaultError
          } : {
            message: defaultError
          };
        }
      } : {}
    });
  }
  strip() {
    return new ZodObject({
      ...this._def,
      unknownKeys: "strip"
    });
  }
  passthrough() {
    return new ZodObject({
      ...this._def,
      unknownKeys: "passthrough"
    });
  }
  // const AugmentFactory =
  //   <Def extends ZodObjectDef>(def: Def) =>
  //   <Augmentation extends ZodRawShape>(
  //     augmentation: Augmentation
  //   ): ZodObject<
  //     extendShape<ReturnType<Def["shape"]>, Augmentation>,
  //     Def["unknownKeys"],
  //     Def["catchall"]
  //   > => {
  //     return new ZodObject({
  //       ...def,
  //       shape: () => ({
  //         ...def.shape(),
  //         ...augmentation,
  //       }),
  //     }) as any;
  //   };
  extend(augmentation) {
    return new ZodObject({
      ...this._def,
      shape: () => ({
        ...this._def.shape(),
        ...augmentation
      })
    });
  }
  /**
   * Prior to zod@1.0.12 there was a bug in the
   * inferred type of merged objects. Please
   * upgrade if you are experiencing issues.
   */
  merge(merging) {
    return new ZodObject({
      unknownKeys: merging._def.unknownKeys,
      catchall: merging._def.catchall,
      shape: () => ({
        ...this._def.shape(),
        ...merging._def.shape()
      }),
      typeName: ZodFirstPartyTypeKind.ZodObject
    });
  }
  // merge<
  //   Incoming extends AnyZodObject,
  //   Augmentation extends Incoming["shape"],
  //   NewOutput extends {
  //     [k in keyof Augmentation | keyof Output]: k extends keyof Augmentation
  //       ? Augmentation[k]["_output"]
  //       : k extends keyof Output
  //       ? Output[k]
  //       : never;
  //   },
  //   NewInput extends {
  //     [k in keyof Augmentation | keyof Input]: k extends keyof Augmentation
  //       ? Augmentation[k]["_input"]
  //       : k extends keyof Input
  //       ? Input[k]
  //       : never;
  //   }
  // >(
  //   merging: Incoming
  // ): ZodObject<
  //   extendShape<T, ReturnType<Incoming["_def"]["shape"]>>,
  //   Incoming["_def"]["unknownKeys"],
  //   Incoming["_def"]["catchall"],
  //   NewOutput,
  //   NewInput
  // > {
  //   const merged: any = new ZodObject({
  //     unknownKeys: merging._def.unknownKeys,
  //     catchall: merging._def.catchall,
  //     shape: () =>
  //       objectUtil.mergeShapes(this._def.shape(), merging._def.shape()),
  //     typeName: ZodFirstPartyTypeKind.ZodObject,
  //   }) as any;
  //   return merged;
  // }
  setKey(key, schema) {
    return this.augment({ [key]: schema });
  }
  // merge<Incoming extends AnyZodObject>(
  //   merging: Incoming
  // ): //ZodObject<T & Incoming["_shape"], UnknownKeys, Catchall> = (merging) => {
  // ZodObject<
  //   extendShape<T, ReturnType<Incoming["_def"]["shape"]>>,
  //   Incoming["_def"]["unknownKeys"],
  //   Incoming["_def"]["catchall"]
  // > {
  //   // const mergedShape = objectUtil.mergeShapes(
  //   //   this._def.shape(),
  //   //   merging._def.shape()
  //   // );
  //   const merged: any = new ZodObject({
  //     unknownKeys: merging._def.unknownKeys,
  //     catchall: merging._def.catchall,
  //     shape: () =>
  //       objectUtil.mergeShapes(this._def.shape(), merging._def.shape()),
  //     typeName: ZodFirstPartyTypeKind.ZodObject,
  //   }) as any;
  //   return merged;
  // }
  catchall(index) {
    return new ZodObject({
      ...this._def,
      catchall: index
    });
  }
  pick(mask) {
    const shape = {};
    for (const key of util.objectKeys(mask))
      mask[key] && this.shape[key] && (shape[key] = this.shape[key]);
    return new ZodObject({
      ...this._def,
      shape: () => shape
    });
  }
  omit(mask) {
    const shape = {};
    for (const key of util.objectKeys(this.shape))
      mask[key] || (shape[key] = this.shape[key]);
    return new ZodObject({
      ...this._def,
      shape: () => shape
    });
  }
  /**
   * @deprecated
   */
  deepPartial() {
    return deepPartialify(this);
  }
  partial(mask) {
    const newShape = {};
    for (const key of util.objectKeys(this.shape)) {
      const fieldSchema = this.shape[key];
      mask && !mask[key] ? newShape[key] = fieldSchema : newShape[key] = fieldSchema.optional();
    }
    return new ZodObject({
      ...this._def,
      shape: () => newShape
    });
  }
  required(mask) {
    const newShape = {};
    for (const key of util.objectKeys(this.shape))
      if (mask && !mask[key])
        newShape[key] = this.shape[key];
      else {
        let newField = this.shape[key];
        for (; newField instanceof ZodOptional; )
          newField = newField._def.innerType;
        newShape[key] = newField;
      }
    return new ZodObject({
      ...this._def,
      shape: () => newShape
    });
  }
  keyof() {
    return createZodEnum(util.objectKeys(this.shape));
  }
}
ZodObject.create = (shape, params) => new ZodObject({
  shape: () => shape,
  unknownKeys: "strip",
  catchall: ZodNever.create(),
  typeName: ZodFirstPartyTypeKind.ZodObject,
  ...processCreateParams(params)
});
ZodObject.strictCreate = (shape, params) => new ZodObject({
  shape: () => shape,
  unknownKeys: "strict",
  catchall: ZodNever.create(),
  typeName: ZodFirstPartyTypeKind.ZodObject,
  ...processCreateParams(params)
});
ZodObject.lazycreate = (shape, params) => new ZodObject({
  shape,
  unknownKeys: "strip",
  catchall: ZodNever.create(),
  typeName: ZodFirstPartyTypeKind.ZodObject,
  ...processCreateParams(params)
});
class ZodUnion extends ZodType {
  _parse(input) {
    const { ctx } = this._processInputParams(input), options = this._def.options;
    function handleResults(results) {
      for (const result of results)
        if (result.result.status === "valid")
          return result.result;
      for (const result of results)
        if (result.result.status === "dirty")
          return ctx.common.issues.push(...result.ctx.common.issues), result.result;
      const unionErrors = results.map((result) => new ZodError(result.ctx.common.issues));
      return addIssueToContext(ctx, {
        code: ZodIssueCode.invalid_union,
        unionErrors
      }), INVALID;
    }
    if (ctx.common.async)
      return Promise.all(options.map(async (option) => {
        const childCtx = {
          ...ctx,
          common: {
            ...ctx.common,
            issues: []
          },
          parent: null
        };
        return {
          result: await option._parseAsync({
            data: ctx.data,
            path: ctx.path,
            parent: childCtx
          }),
          ctx: childCtx
        };
      })).then(handleResults);
    {
      let dirty;
      const issues = [];
      for (const option of options) {
        const childCtx = {
          ...ctx,
          common: {
            ...ctx.common,
            issues: []
          },
          parent: null
        }, result = option._parseSync({
          data: ctx.data,
          path: ctx.path,
          parent: childCtx
        });
        if (result.status === "valid")
          return result;
        result.status === "dirty" && !dirty && (dirty = { result, ctx: childCtx }), childCtx.common.issues.length && issues.push(childCtx.common.issues);
      }
      if (dirty)
        return ctx.common.issues.push(...dirty.ctx.common.issues), dirty.result;
      const unionErrors = issues.map((issues2) => new ZodError(issues2));
      return addIssueToContext(ctx, {
        code: ZodIssueCode.invalid_union,
        unionErrors
      }), INVALID;
    }
  }
  get options() {
    return this._def.options;
  }
}
ZodUnion.create = (types, params) => new ZodUnion({
  options: types,
  typeName: ZodFirstPartyTypeKind.ZodUnion,
  ...processCreateParams(params)
});
function mergeValues(a, b) {
  const aType = getParsedType(a), bType = getParsedType(b);
  if (a === b)
    return { valid: !0, data: a };
  if (aType === ZodParsedType.object && bType === ZodParsedType.object) {
    const bKeys = util.objectKeys(b), sharedKeys = util.objectKeys(a).filter((key) => bKeys.indexOf(key) !== -1), newObj = { ...a, ...b };
    for (const key of sharedKeys) {
      const sharedValue = mergeValues(a[key], b[key]);
      if (!sharedValue.valid)
        return { valid: !1 };
      newObj[key] = sharedValue.data;
    }
    return { valid: !0, data: newObj };
  } else if (aType === ZodParsedType.array && bType === ZodParsedType.array) {
    if (a.length !== b.length)
      return { valid: !1 };
    const newArray = [];
    for (let index = 0; index < a.length; index++) {
      const itemA = a[index], itemB = b[index], sharedValue = mergeValues(itemA, itemB);
      if (!sharedValue.valid)
        return { valid: !1 };
      newArray.push(sharedValue.data);
    }
    return { valid: !0, data: newArray };
  } else return aType === ZodParsedType.date && bType === ZodParsedType.date && +a == +b ? { valid: !0, data: a } : { valid: !1 };
}
class ZodIntersection extends ZodType {
  _parse(input) {
    const { status, ctx } = this._processInputParams(input), handleParsed = (parsedLeft, parsedRight) => {
      if (isAborted(parsedLeft) || isAborted(parsedRight))
        return INVALID;
      const merged = mergeValues(parsedLeft.value, parsedRight.value);
      return merged.valid ? ((isDirty(parsedLeft) || isDirty(parsedRight)) && status.dirty(), { status: status.value, value: merged.data }) : (addIssueToContext(ctx, {
        code: ZodIssueCode.invalid_intersection_types
      }), INVALID);
    };
    return ctx.common.async ? Promise.all([
      this._def.left._parseAsync({
        data: ctx.data,
        path: ctx.path,
        parent: ctx
      }),
      this._def.right._parseAsync({
        data: ctx.data,
        path: ctx.path,
        parent: ctx
      })
    ]).then(([left, right]) => handleParsed(left, right)) : handleParsed(this._def.left._parseSync({
      data: ctx.data,
      path: ctx.path,
      parent: ctx
    }), this._def.right._parseSync({
      data: ctx.data,
      path: ctx.path,
      parent: ctx
    }));
  }
}
ZodIntersection.create = (left, right, params) => new ZodIntersection({
  left,
  right,
  typeName: ZodFirstPartyTypeKind.ZodIntersection,
  ...processCreateParams(params)
});
class ZodTuple extends ZodType {
  _parse(input) {
    const { status, ctx } = this._processInputParams(input);
    if (ctx.parsedType !== ZodParsedType.array)
      return addIssueToContext(ctx, {
        code: ZodIssueCode.invalid_type,
        expected: ZodParsedType.array,
        received: ctx.parsedType
      }), INVALID;
    if (ctx.data.length < this._def.items.length)
      return addIssueToContext(ctx, {
        code: ZodIssueCode.too_small,
        minimum: this._def.items.length,
        inclusive: !0,
        exact: !1,
        type: "array"
      }), INVALID;
    !this._def.rest && ctx.data.length > this._def.items.length && (addIssueToContext(ctx, {
      code: ZodIssueCode.too_big,
      maximum: this._def.items.length,
      inclusive: !0,
      exact: !1,
      type: "array"
    }), status.dirty());
    const items = [...ctx.data].map((item, itemIndex) => {
      const schema = this._def.items[itemIndex] || this._def.rest;
      return schema ? schema._parse(new ParseInputLazyPath(ctx, item, ctx.path, itemIndex)) : null;
    }).filter((x) => !!x);
    return ctx.common.async ? Promise.all(items).then((results) => ParseStatus.mergeArray(status, results)) : ParseStatus.mergeArray(status, items);
  }
  get items() {
    return this._def.items;
  }
  rest(rest) {
    return new ZodTuple({
      ...this._def,
      rest
    });
  }
}
ZodTuple.create = (schemas, params) => {
  if (!Array.isArray(schemas))
    throw new Error("You must pass an array of schemas to z.tuple([ ... ])");
  return new ZodTuple({
    items: schemas,
    typeName: ZodFirstPartyTypeKind.ZodTuple,
    rest: null,
    ...processCreateParams(params)
  });
};
class ZodMap extends ZodType {
  get keySchema() {
    return this._def.keyType;
  }
  get valueSchema() {
    return this._def.valueType;
  }
  _parse(input) {
    const { status, ctx } = this._processInputParams(input);
    if (ctx.parsedType !== ZodParsedType.map)
      return addIssueToContext(ctx, {
        code: ZodIssueCode.invalid_type,
        expected: ZodParsedType.map,
        received: ctx.parsedType
      }), INVALID;
    const keyType = this._def.keyType, valueType = this._def.valueType, pairs = [...ctx.data.entries()].map(([key, value], index) => ({
      key: keyType._parse(new ParseInputLazyPath(ctx, key, ctx.path, [index, "key"])),
      value: valueType._parse(new ParseInputLazyPath(ctx, value, ctx.path, [index, "value"]))
    }));
    if (ctx.common.async) {
      const finalMap = /* @__PURE__ */ new Map();
      return Promise.resolve().then(async () => {
        for (const pair of pairs) {
          const key = await pair.key, value = await pair.value;
          if (key.status === "aborted" || value.status === "aborted")
            return INVALID;
          (key.status === "dirty" || value.status === "dirty") && status.dirty(), finalMap.set(key.value, value.value);
        }
        return { status: status.value, value: finalMap };
      });
    } else {
      const finalMap = /* @__PURE__ */ new Map();
      for (const pair of pairs) {
        const key = pair.key, value = pair.value;
        if (key.status === "aborted" || value.status === "aborted")
          return INVALID;
        (key.status === "dirty" || value.status === "dirty") && status.dirty(), finalMap.set(key.value, value.value);
      }
      return { status: status.value, value: finalMap };
    }
  }
}
ZodMap.create = (keyType, valueType, params) => new ZodMap({
  valueType,
  keyType,
  typeName: ZodFirstPartyTypeKind.ZodMap,
  ...processCreateParams(params)
});
class ZodSet extends ZodType {
  _parse(input) {
    const { status, ctx } = this._processInputParams(input);
    if (ctx.parsedType !== ZodParsedType.set)
      return addIssueToContext(ctx, {
        code: ZodIssueCode.invalid_type,
        expected: ZodParsedType.set,
        received: ctx.parsedType
      }), INVALID;
    const def = this._def;
    def.minSize !== null && ctx.data.size < def.minSize.value && (addIssueToContext(ctx, {
      code: ZodIssueCode.too_small,
      minimum: def.minSize.value,
      type: "set",
      inclusive: !0,
      exact: !1,
      message: def.minSize.message
    }), status.dirty()), def.maxSize !== null && ctx.data.size > def.maxSize.value && (addIssueToContext(ctx, {
      code: ZodIssueCode.too_big,
      maximum: def.maxSize.value,
      type: "set",
      inclusive: !0,
      exact: !1,
      message: def.maxSize.message
    }), status.dirty());
    const valueType = this._def.valueType;
    function finalizeSet(elements2) {
      const parsedSet = /* @__PURE__ */ new Set();
      for (const element of elements2) {
        if (element.status === "aborted")
          return INVALID;
        element.status === "dirty" && status.dirty(), parsedSet.add(element.value);
      }
      return { status: status.value, value: parsedSet };
    }
    const elements = [...ctx.data.values()].map((item, i) => valueType._parse(new ParseInputLazyPath(ctx, item, ctx.path, i)));
    return ctx.common.async ? Promise.all(elements).then((elements2) => finalizeSet(elements2)) : finalizeSet(elements);
  }
  min(minSize, message) {
    return new ZodSet({
      ...this._def,
      minSize: { value: minSize, message: errorUtil.toString(message) }
    });
  }
  max(maxSize, message) {
    return new ZodSet({
      ...this._def,
      maxSize: { value: maxSize, message: errorUtil.toString(message) }
    });
  }
  size(size, message) {
    return this.min(size, message).max(size, message);
  }
  nonempty(message) {
    return this.min(1, message);
  }
}
ZodSet.create = (valueType, params) => new ZodSet({
  valueType,
  minSize: null,
  maxSize: null,
  typeName: ZodFirstPartyTypeKind.ZodSet,
  ...processCreateParams(params)
});
class ZodLazy extends ZodType {
  get schema() {
    return this._def.getter();
  }
  _parse(input) {
    const { ctx } = this._processInputParams(input);
    return this._def.getter()._parse({ data: ctx.data, path: ctx.path, parent: ctx });
  }
}
ZodLazy.create = (getter, params) => new ZodLazy({
  getter,
  typeName: ZodFirstPartyTypeKind.ZodLazy,
  ...processCreateParams(params)
});
class ZodLiteral extends ZodType {
  _parse(input) {
    if (input.data !== this._def.value) {
      const ctx = this._getOrReturnCtx(input);
      return addIssueToContext(ctx, {
        received: ctx.data,
        code: ZodIssueCode.invalid_literal,
        expected: this._def.value
      }), INVALID;
    }
    return { status: "valid", value: input.data };
  }
  get value() {
    return this._def.value;
  }
}
ZodLiteral.create = (value, params) => new ZodLiteral({
  value,
  typeName: ZodFirstPartyTypeKind.ZodLiteral,
  ...processCreateParams(params)
});
function createZodEnum(values, params) {
  return new ZodEnum({
    values,
    typeName: ZodFirstPartyTypeKind.ZodEnum,
    ...processCreateParams(params)
  });
}
class ZodEnum extends ZodType {
  _parse(input) {
    if (typeof input.data != "string") {
      const ctx = this._getOrReturnCtx(input), expectedValues = this._def.values;
      return addIssueToContext(ctx, {
        expected: util.joinValues(expectedValues),
        received: ctx.parsedType,
        code: ZodIssueCode.invalid_type
      }), INVALID;
    }
    if (this._cache || (this._cache = new Set(this._def.values)), !this._cache.has(input.data)) {
      const ctx = this._getOrReturnCtx(input), expectedValues = this._def.values;
      return addIssueToContext(ctx, {
        received: ctx.data,
        code: ZodIssueCode.invalid_enum_value,
        options: expectedValues
      }), INVALID;
    }
    return OK(input.data);
  }
  get options() {
    return this._def.values;
  }
  get enum() {
    const enumValues = {};
    for (const val of this._def.values)
      enumValues[val] = val;
    return enumValues;
  }
  get Values() {
    const enumValues = {};
    for (const val of this._def.values)
      enumValues[val] = val;
    return enumValues;
  }
  get Enum() {
    const enumValues = {};
    for (const val of this._def.values)
      enumValues[val] = val;
    return enumValues;
  }
  extract(values, newDef = this._def) {
    return ZodEnum.create(values, {
      ...this._def,
      ...newDef
    });
  }
  exclude(values, newDef = this._def) {
    return ZodEnum.create(this.options.filter((opt) => !values.includes(opt)), {
      ...this._def,
      ...newDef
    });
  }
}
ZodEnum.create = createZodEnum;
class ZodNativeEnum extends ZodType {
  _parse(input) {
    const nativeEnumValues = util.getValidEnumValues(this._def.values), ctx = this._getOrReturnCtx(input);
    if (ctx.parsedType !== ZodParsedType.string && ctx.parsedType !== ZodParsedType.number) {
      const expectedValues = util.objectValues(nativeEnumValues);
      return addIssueToContext(ctx, {
        expected: util.joinValues(expectedValues),
        received: ctx.parsedType,
        code: ZodIssueCode.invalid_type
      }), INVALID;
    }
    if (this._cache || (this._cache = new Set(util.getValidEnumValues(this._def.values))), !this._cache.has(input.data)) {
      const expectedValues = util.objectValues(nativeEnumValues);
      return addIssueToContext(ctx, {
        received: ctx.data,
        code: ZodIssueCode.invalid_enum_value,
        options: expectedValues
      }), INVALID;
    }
    return OK(input.data);
  }
  get enum() {
    return this._def.values;
  }
}
ZodNativeEnum.create = (values, params) => new ZodNativeEnum({
  values,
  typeName: ZodFirstPartyTypeKind.ZodNativeEnum,
  ...processCreateParams(params)
});
class ZodPromise extends ZodType {
  unwrap() {
    return this._def.type;
  }
  _parse(input) {
    const { ctx } = this._processInputParams(input);
    if (ctx.parsedType !== ZodParsedType.promise && ctx.common.async === !1)
      return addIssueToContext(ctx, {
        code: ZodIssueCode.invalid_type,
        expected: ZodParsedType.promise,
        received: ctx.parsedType
      }), INVALID;
    const promisified = ctx.parsedType === ZodParsedType.promise ? ctx.data : Promise.resolve(ctx.data);
    return OK(promisified.then((data) => this._def.type.parseAsync(data, {
      path: ctx.path,
      errorMap: ctx.common.contextualErrorMap
    })));
  }
}
ZodPromise.create = (schema, params) => new ZodPromise({
  type: schema,
  typeName: ZodFirstPartyTypeKind.ZodPromise,
  ...processCreateParams(params)
});
class ZodEffects extends ZodType {
  innerType() {
    return this._def.schema;
  }
  sourceType() {
    return this._def.schema._def.typeName === ZodFirstPartyTypeKind.ZodEffects ? this._def.schema.sourceType() : this._def.schema;
  }
  _parse(input) {
    const { status, ctx } = this._processInputParams(input), effect = this._def.effect || null, checkCtx = {
      addIssue: (arg) => {
        addIssueToContext(ctx, arg), arg.fatal ? status.abort() : status.dirty();
      },
      get path() {
        return ctx.path;
      }
    };
    if (checkCtx.addIssue = checkCtx.addIssue.bind(checkCtx), effect.type === "preprocess") {
      const processed = effect.transform(ctx.data, checkCtx);
      if (ctx.common.async)
        return Promise.resolve(processed).then(async (processed2) => {
          if (status.value === "aborted")
            return INVALID;
          const result = await this._def.schema._parseAsync({
            data: processed2,
            path: ctx.path,
            parent: ctx
          });
          return result.status === "aborted" ? INVALID : result.status === "dirty" || status.value === "dirty" ? DIRTY(result.value) : result;
        });
      {
        if (status.value === "aborted")
          return INVALID;
        const result = this._def.schema._parseSync({
          data: processed,
          path: ctx.path,
          parent: ctx
        });
        return result.status === "aborted" ? INVALID : result.status === "dirty" || status.value === "dirty" ? DIRTY(result.value) : result;
      }
    }
    if (effect.type === "refinement") {
      const executeRefinement = (acc) => {
        const result = effect.refinement(acc, checkCtx);
        if (ctx.common.async)
          return Promise.resolve(result);
        if (result instanceof Promise)
          throw new Error("Async refinement encountered during synchronous parse operation. Use .parseAsync instead.");
        return acc;
      };
      if (ctx.common.async === !1) {
        const inner = this._def.schema._parseSync({
          data: ctx.data,
          path: ctx.path,
          parent: ctx
        });
        return inner.status === "aborted" ? INVALID : (inner.status === "dirty" && status.dirty(), executeRefinement(inner.value), { status: status.value, value: inner.value });
      } else
        return this._def.schema._parseAsync({ data: ctx.data, path: ctx.path, parent: ctx }).then((inner) => inner.status === "aborted" ? INVALID : (inner.status === "dirty" && status.dirty(), executeRefinement(inner.value).then(() => ({ status: status.value, value: inner.value }))));
    }
    if (effect.type === "transform")
      if (ctx.common.async === !1) {
        const base = this._def.schema._parseSync({
          data: ctx.data,
          path: ctx.path,
          parent: ctx
        });
        if (!isValid(base))
          return INVALID;
        const result = effect.transform(base.value, checkCtx);
        if (result instanceof Promise)
          throw new Error("Asynchronous transform encountered during synchronous parse operation. Use .parseAsync instead.");
        return { status: status.value, value: result };
      } else
        return this._def.schema._parseAsync({ data: ctx.data, path: ctx.path, parent: ctx }).then((base) => isValid(base) ? Promise.resolve(effect.transform(base.value, checkCtx)).then((result) => ({
          status: status.value,
          value: result
        })) : INVALID);
    util.assertNever(effect);
  }
}
ZodEffects.create = (schema, effect, params) => new ZodEffects({
  schema,
  typeName: ZodFirstPartyTypeKind.ZodEffects,
  effect,
  ...processCreateParams(params)
});
ZodEffects.createWithPreprocess = (preprocess, schema, params) => new ZodEffects({
  schema,
  effect: { type: "preprocess", transform: preprocess },
  typeName: ZodFirstPartyTypeKind.ZodEffects,
  ...processCreateParams(params)
});
class ZodOptional extends ZodType {
  _parse(input) {
    return this._getType(input) === ZodParsedType.undefined ? OK(void 0) : this._def.innerType._parse(input);
  }
  unwrap() {
    return this._def.innerType;
  }
}
ZodOptional.create = (type, params) => new ZodOptional({
  innerType: type,
  typeName: ZodFirstPartyTypeKind.ZodOptional,
  ...processCreateParams(params)
});
class ZodNullable extends ZodType {
  _parse(input) {
    return this._getType(input) === ZodParsedType.null ? OK(null) : this._def.innerType._parse(input);
  }
  unwrap() {
    return this._def.innerType;
  }
}
ZodNullable.create = (type, params) => new ZodNullable({
  innerType: type,
  typeName: ZodFirstPartyTypeKind.ZodNullable,
  ...processCreateParams(params)
});
class ZodDefault extends ZodType {
  _parse(input) {
    const { ctx } = this._processInputParams(input);
    let data = ctx.data;
    return ctx.parsedType === ZodParsedType.undefined && (data = this._def.defaultValue()), this._def.innerType._parse({
      data,
      path: ctx.path,
      parent: ctx
    });
  }
  removeDefault() {
    return this._def.innerType;
  }
}
ZodDefault.create = (type, params) => new ZodDefault({
  innerType: type,
  typeName: ZodFirstPartyTypeKind.ZodDefault,
  defaultValue: typeof params.default == "function" ? params.default : () => params.default,
  ...processCreateParams(params)
});
class ZodCatch extends ZodType {
  _parse(input) {
    const { ctx } = this._processInputParams(input), newCtx = {
      ...ctx,
      common: {
        ...ctx.common,
        issues: []
      }
    }, result = this._def.innerType._parse({
      data: newCtx.data,
      path: newCtx.path,
      parent: {
        ...newCtx
      }
    });
    return isAsync(result) ? result.then((result2) => ({
      status: "valid",
      value: result2.status === "valid" ? result2.value : this._def.catchValue({
        get error() {
          return new ZodError(newCtx.common.issues);
        },
        input: newCtx.data
      })
    })) : {
      status: "valid",
      value: result.status === "valid" ? result.value : this._def.catchValue({
        get error() {
          return new ZodError(newCtx.common.issues);
        },
        input: newCtx.data
      })
    };
  }
  removeCatch() {
    return this._def.innerType;
  }
}
ZodCatch.create = (type, params) => new ZodCatch({
  innerType: type,
  typeName: ZodFirstPartyTypeKind.ZodCatch,
  catchValue: typeof params.catch == "function" ? params.catch : () => params.catch,
  ...processCreateParams(params)
});
class ZodNaN extends ZodType {
  _parse(input) {
    if (this._getType(input) !== ZodParsedType.nan) {
      const ctx = this._getOrReturnCtx(input);
      return addIssueToContext(ctx, {
        code: ZodIssueCode.invalid_type,
        expected: ZodParsedType.nan,
        received: ctx.parsedType
      }), INVALID;
    }
    return { status: "valid", value: input.data };
  }
}
ZodNaN.create = (params) => new ZodNaN({
  typeName: ZodFirstPartyTypeKind.ZodNaN,
  ...processCreateParams(params)
});
class ZodBranded extends ZodType {
  _parse(input) {
    const { ctx } = this._processInputParams(input), data = ctx.data;
    return this._def.type._parse({
      data,
      path: ctx.path,
      parent: ctx
    });
  }
  unwrap() {
    return this._def.type;
  }
}
class ZodPipeline extends ZodType {
  _parse(input) {
    const { status, ctx } = this._processInputParams(input);
    if (ctx.common.async)
      return (async () => {
        const inResult = await this._def.in._parseAsync({
          data: ctx.data,
          path: ctx.path,
          parent: ctx
        });
        return inResult.status === "aborted" ? INVALID : inResult.status === "dirty" ? (status.dirty(), DIRTY(inResult.value)) : this._def.out._parseAsync({
          data: inResult.value,
          path: ctx.path,
          parent: ctx
        });
      })();
    {
      const inResult = this._def.in._parseSync({
        data: ctx.data,
        path: ctx.path,
        parent: ctx
      });
      return inResult.status === "aborted" ? INVALID : inResult.status === "dirty" ? (status.dirty(), {
        status: "dirty",
        value: inResult.value
      }) : this._def.out._parseSync({
        data: inResult.value,
        path: ctx.path,
        parent: ctx
      });
    }
  }
  static create(a, b) {
    return new ZodPipeline({
      in: a,
      out: b,
      typeName: ZodFirstPartyTypeKind.ZodPipeline
    });
  }
}
class ZodReadonly extends ZodType {
  _parse(input) {
    const result = this._def.innerType._parse(input), freeze = (data) => (isValid(data) && (data.value = Object.freeze(data.value)), data);
    return isAsync(result) ? result.then((data) => freeze(data)) : freeze(result);
  }
  unwrap() {
    return this._def.innerType;
  }
}
ZodReadonly.create = (type, params) => new ZodReadonly({
  innerType: type,
  typeName: ZodFirstPartyTypeKind.ZodReadonly,
  ...processCreateParams(params)
});
var ZodFirstPartyTypeKind;
(function(ZodFirstPartyTypeKind2) {
  ZodFirstPartyTypeKind2.ZodString = "ZodString", ZodFirstPartyTypeKind2.ZodNumber = "ZodNumber", ZodFirstPartyTypeKind2.ZodNaN = "ZodNaN", ZodFirstPartyTypeKind2.ZodBigInt = "ZodBigInt", ZodFirstPartyTypeKind2.ZodBoolean = "ZodBoolean", ZodFirstPartyTypeKind2.ZodDate = "ZodDate", ZodFirstPartyTypeKind2.ZodSymbol = "ZodSymbol", ZodFirstPartyTypeKind2.ZodUndefined = "ZodUndefined", ZodFirstPartyTypeKind2.ZodNull = "ZodNull", ZodFirstPartyTypeKind2.ZodAny = "ZodAny", ZodFirstPartyTypeKind2.ZodUnknown = "ZodUnknown", ZodFirstPartyTypeKind2.ZodNever = "ZodNever", ZodFirstPartyTypeKind2.ZodVoid = "ZodVoid", ZodFirstPartyTypeKind2.ZodArray = "ZodArray", ZodFirstPartyTypeKind2.ZodObject = "ZodObject", ZodFirstPartyTypeKind2.ZodUnion = "ZodUnion", ZodFirstPartyTypeKind2.ZodDiscriminatedUnion = "ZodDiscriminatedUnion", ZodFirstPartyTypeKind2.ZodIntersection = "ZodIntersection", ZodFirstPartyTypeKind2.ZodTuple = "ZodTuple", ZodFirstPartyTypeKind2.ZodRecord = "ZodRecord", ZodFirstPartyTypeKind2.ZodMap = "ZodMap", ZodFirstPartyTypeKind2.ZodSet = "ZodSet", ZodFirstPartyTypeKind2.ZodFunction = "ZodFunction", ZodFirstPartyTypeKind2.ZodLazy = "ZodLazy", ZodFirstPartyTypeKind2.ZodLiteral = "ZodLiteral", ZodFirstPartyTypeKind2.ZodEnum = "ZodEnum", ZodFirstPartyTypeKind2.ZodEffects = "ZodEffects", ZodFirstPartyTypeKind2.ZodNativeEnum = "ZodNativeEnum", ZodFirstPartyTypeKind2.ZodOptional = "ZodOptional", ZodFirstPartyTypeKind2.ZodNullable = "ZodNullable", ZodFirstPartyTypeKind2.ZodDefault = "ZodDefault", ZodFirstPartyTypeKind2.ZodCatch = "ZodCatch", ZodFirstPartyTypeKind2.ZodPromise = "ZodPromise", ZodFirstPartyTypeKind2.ZodBranded = "ZodBranded", ZodFirstPartyTypeKind2.ZodPipeline = "ZodPipeline", ZodFirstPartyTypeKind2.ZodReadonly = "ZodReadonly";
})(ZodFirstPartyTypeKind || (ZodFirstPartyTypeKind = {}));
const stringType = ZodString.create, numberType = ZodNumber.create, booleanType = ZodBoolean.create;
ZodNever.create;
const arrayType = ZodArray.create, objectType = ZodObject.create;
ZodUnion.create;
ZodIntersection.create;
ZodTuple.create;
const enumType = ZodEnum.create;
ZodPromise.create;
ZodOptional.create;
ZodNullable.create;
var DEFAULT_PORT = 5746, PING_ENDPOINT = "/ping/stagewise", PING_RESPONSE = "stagewise", contract = {
  server: {
    getSessionInfo: {
      request: objectType({}),
      response: objectType({
        sessionId: stringType().optional(),
        appName: stringType().describe('The name of the application, e.g. "VS Code" or "Cursor"'),
        displayName: stringType().describe("Human-readable window identifier for UI display"),
        port: numberType().describe("Port number this VS Code instance is running on")
      }),
      update: objectType({})
    },
    triggerAgentPrompt: {
      request: objectType({
        sessionId: stringType().optional(),
        prompt: stringType(),
        model: stringType().optional().describe("The model to use for the agent prompt"),
        files: arrayType(stringType()).optional().describe("Link project files to the agent prompt"),
        mode: enumType(["agent", "ask", "manual"]).optional().describe("The mode to use for the agent prompt"),
        images: arrayType(stringType()).optional().describe("Upload files like images, videos, etc.")
      }),
      response: objectType({
        sessionId: stringType().optional(),
        result: objectType({
          success: booleanType(),
          error: stringType().optional(),
          errorCode: enumType(["session_mismatch"]).optional(),
          output: stringType().optional()
        })
      }),
      update: objectType({
        sessionId: stringType().optional(),
        updateText: stringType()
      })
    }
  }
};
const MAX_CONSECUTIVE_ERRORS = 2;
async function discoverVSCodeWindows(maxAttempts = 10, timeout = 300) {
  const windows = [];
  let consecutiveErrors = 0;
  for (let attempt = 0; attempt < maxAttempts; attempt++) {
    const port = DEFAULT_PORT + attempt;
    try {
      const controller = new AbortController(), timeoutId = setTimeout(() => controller.abort(), timeout), response = await fetch(\`http://localhost:\${port}\${PING_ENDPOINT}\`, {
        signal: controller.signal
      });
      if (clearTimeout(timeoutId), consecutiveErrors = 0, response.ok && await response.text() === PING_RESPONSE)
        try {
          const bridge = createSRPCClientBridge(
            \`ws://localhost:\${port}\`,
            contract
          );
          await bridge.connect();
          const sessionInfo = await bridge.call.getSessionInfo(
            {},
            {
              onUpdate: () => {
              }
            }
          );
          windows.push(sessionInfo), await bridge.close();
        } catch (_error) {
          console.warn(\`Failed to get session info from port \${port}:\`, _error);
        }
      else
        continue;
    } catch {
      if (consecutiveErrors++, consecutiveErrors >= MAX_CONSECUTIVE_ERRORS) {
        console.warn(
          "⬆️⬆️⬆️ Those two errors are expected! (Everything is fine, they are part of stagewise's discovery mechanism!) ✅"
        );
        break;
      }
      continue;
    }
  }
  return windows.length === 0 && console.warn(
    "No IDE windows found, please start an IDE with the stagewise extension installed! ❌"
  ), windows;
}
const getCurrentPort = () => typeof window < "u" && window.parent.location && window.parent.location.port || "80", getStorageKey = () => \`ide-selected-session-id-on-browser-port-\${getCurrentPort()}\`, getStoredSessionId = () => {
  try {
    return localStorage.getItem(getStorageKey()) || void 0;
  } catch {
    return;
  }
}, setStoredSessionId = (sessionId) => {
  try {
    sessionId ? localStorage.setItem(getStorageKey(), sessionId) : localStorage.removeItem(getStorageKey());
  } catch {
  }
}, VSCodeContext = createContext({
  windows: [],
  isDiscovering: !1,
  discoveryError: null,
  selectedSession: void 0,
  shouldPromptWindowSelection: !1,
  setShouldPromptWindowSelection: () => {
  },
  discover: async () => {
  },
  selectSession: () => {
  },
  refreshSession: async () => {
  },
  appName: void 0
});
function VSCodeProvider({ children }) {
  const [windows, setWindows] = useState([]), [isDiscovering, setIsDiscovering] = useState(!1), [discoveryError, setDiscoveryError] = useState(null), [selectedSessionId, setSelectedSessionId] = useState(getStoredSessionId()), [shouldPromptWindowSelection, setShouldPromptWindowSelection] = useState(!1), discover = async () => {
    setIsDiscovering(!0), setDiscoveryError(null);
    try {
      const discoveredWindows = await discoverVSCodeWindows();
      setWindows(discoveredWindows);
      const storedSessionId = getStoredSessionId();
      if (discoveredWindows.length === 1) {
        const singleWindow = discoveredWindows[0];
        (!storedSessionId || storedSessionId !== singleWindow.sessionId) && (setSelectedSessionId(singleWindow.sessionId), setStoredSessionId(singleWindow.sessionId)), setShouldPromptWindowSelection(!1);
      } else {
        const noSessionIdSavedForCurrentPort = discoveredWindows.length > 1 && !storedSessionId || // No saved sessionId for current port
        storedSessionId && !discoveredWindows.some((w) => w.sessionId === storedSessionId);
        setShouldPromptWindowSelection(noSessionIdSavedForCurrentPort), noSessionIdSavedForCurrentPort && (setSelectedSessionId(void 0), setStoredSessionId(void 0));
      }
    } catch (err) {
      setDiscoveryError(
        err instanceof Error ? err.message : "Failed to discover windows"
      );
    } finally {
      setIsDiscovering(!1);
    }
  }, selectSession = (sessionId) => {
    if (!sessionId || sessionId === "") {
      setStoredSessionId(void 0), setSelectedSessionId(void 0);
      return;
    }
    setSelectedSessionId(sessionId), setStoredSessionId(sessionId), sessionId && setShouldPromptWindowSelection(!1);
  }, refreshSession = async () => {
    selectedSessionId && await discover();
  };
  useEffect(() => {
    discover();
  }, []);
  const selectedSession = windows.find(
    (w) => w.sessionId === selectedSessionId
  ), value = {
    windows,
    isDiscovering,
    discoveryError,
    selectedSession,
    shouldPromptWindowSelection,
    setShouldPromptWindowSelection,
    discover,
    selectSession,
    refreshSession,
    appName: selectedSession == null ? void 0 : selectedSession.appName
  };
  return /* @__PURE__ */ jsx(VSCodeContext.Provider, { value, children });
}
function useVSCode() {
  return useContext(VSCodeContext);
}
const SRPCBridgeContext = createContext({
  bridge: null,
  isConnecting: !1,
  error: null
});
function SRPCBridgeProvider({ children }) {
  const [state, setState] = useState({
    bridge: null,
    isConnecting: !0,
    error: null
  }), { selectedSession } = useVSCode(), bridgeRef = useRef(null), initializeBridge = useCallback(async (port) => {
    bridgeRef.current && await bridgeRef.current.close();
    try {
      const bridge = createSRPCClientBridge(\`ws://localhost:\${port}\`, contract);
      await bridge.connect(), bridgeRef.current = bridge, setState({
        bridge,
        isConnecting: !1,
        error: null
      });
    } catch (error) {
      bridgeRef.current = null, setState({
        bridge: null,
        isConnecting: !1,
        error: error instanceof Error ? error : new Error(String(error))
      });
    }
  }, []);
  return useEffect(() => {
    selectedSession && initializeBridge(selectedSession.port);
  }, [selectedSession, initializeBridge]), /* @__PURE__ */ jsx(SRPCBridgeContext.Provider, { value: state, children });
}
function useSRPCBridge() {
  const context = useContext(SRPCBridgeContext);
  if (!context)
    throw new Error("useSRPCBridge must be used within an SRPCBridgeProvider");
  return context;
}
const ConfigContext = createContext({
  config: void 0
});
function ConfigProvider({
  children,
  config
}) {
  const value = useMemo(() => ({
    config
  }), [config]);
  return /* @__PURE__ */ jsx(ConfigContext.Provider, { value, children });
}
function useConfig() {
  return useContext(ConfigContext);
}
const PluginContext = createContext({
  plugins: [],
  toolbarContext: {
    sendPrompt: () => {
    },
    mainAppWindow: window.parent
  }
});
function PluginProvider({ children }) {
  const { bridge } = useSRPCBridge(), { selectedSession } = useVSCode(), { config } = useConfig(), plugins = (config == null ? void 0 : config.plugins) || [], toolbarContext = useMemo(() => ({
    sendPrompt: async (prompt) => {
      if (!bridge) throw new Error("No connection to the agent");
      return await bridge.call.triggerAgentPrompt(
        typeof prompt == "string" ? {
          prompt,
          ...selectedSession && {
            sessionId: selectedSession.sessionId
          }
        } : {
          prompt: prompt.prompt,
          model: prompt.model,
          files: prompt.files,
          images: prompt.images,
          mode: prompt.mode,
          ...selectedSession && {
            sessionId: selectedSession.sessionId
          }
        },
        {
          onUpdate: (_update) => {
          }
        }
      );
    },
    mainAppWindow: window.parent
  }), [bridge, selectedSession]), pluginsLoadedRef = useRef(!1);
  useEffect(() => {
    pluginsLoadedRef.current || (pluginsLoadedRef.current = !0, console.log("plugins", plugins), plugins.forEach((plugin) => {
      var _a;
      (_a = plugin.onLoad) == null || _a.call(plugin, toolbarContext);
    }));
  }, [plugins, toolbarContext]);
  const value = useMemo(() => ({
    plugins,
    toolbarContext
  }), [plugins, toolbarContext]);
  return /* @__PURE__ */ jsx(PluginContext.Provider, { value, children });
}
function usePlugins() {
  return useContext(PluginContext);
}
function r(e) {
  var t, f, n = "";
  if (typeof e == "string" || typeof e == "number") n += e;
  else if (typeof e == "object") if (Array.isArray(e)) {
    var o = e.length;
    for (t = 0; t < o; t++) e[t] && (f = r(e[t])) && (n && (n += " "), n += f);
  } else for (f in e) e[f] && (n && (n += " "), n += f);
  return n;
}
function clsx() {
  for (var e, t, f = 0, n = "", o = arguments.length; f < o; f++) (e = arguments[f]) && (t = r(e)) && (n && (n += " "), n += t);
  return n;
}
const CLASS_PART_SEPARATOR = "-", createClassGroupUtils = (config) => {
  const classMap = createClassMap(config), {
    conflictingClassGroups,
    conflictingClassGroupModifiers
  } = config;
  return {
    getClassGroupId: (className) => {
      const classParts = className.split(CLASS_PART_SEPARATOR);
      return classParts[0] === "" && classParts.length !== 1 && classParts.shift(), getGroupRecursive(classParts, classMap) || getGroupIdForArbitraryProperty(className);
    },
    getConflictingClassGroupIds: (classGroupId, hasPostfixModifier) => {
      const conflicts = conflictingClassGroups[classGroupId] || [];
      return hasPostfixModifier && conflictingClassGroupModifiers[classGroupId] ? [...conflicts, ...conflictingClassGroupModifiers[classGroupId]] : conflicts;
    }
  };
}, getGroupRecursive = (classParts, classPartObject) => {
  var _a;
  if (classParts.length === 0)
    return classPartObject.classGroupId;
  const currentClassPart = classParts[0], nextClassPartObject = classPartObject.nextPart.get(currentClassPart), classGroupFromNextClassPart = nextClassPartObject ? getGroupRecursive(classParts.slice(1), nextClassPartObject) : void 0;
  if (classGroupFromNextClassPart)
    return classGroupFromNextClassPart;
  if (classPartObject.validators.length === 0)
    return;
  const classRest = classParts.join(CLASS_PART_SEPARATOR);
  return (_a = classPartObject.validators.find(({
    validator
  }) => validator(classRest))) == null ? void 0 : _a.classGroupId;
}, arbitraryPropertyRegex = /^\\[(.+)\\]$/, getGroupIdForArbitraryProperty = (className) => {
  if (arbitraryPropertyRegex.test(className)) {
    const arbitraryPropertyClassName = arbitraryPropertyRegex.exec(className)[1], property = arbitraryPropertyClassName == null ? void 0 : arbitraryPropertyClassName.substring(0, arbitraryPropertyClassName.indexOf(":"));
    if (property)
      return "arbitrary.." + property;
  }
}, createClassMap = (config) => {
  const {
    theme,
    classGroups
  } = config, classMap = {
    nextPart: /* @__PURE__ */ new Map(),
    validators: []
  };
  for (const classGroupId in classGroups)
    processClassesRecursively(classGroups[classGroupId], classMap, classGroupId, theme);
  return classMap;
}, processClassesRecursively = (classGroup, classPartObject, classGroupId, theme) => {
  classGroup.forEach((classDefinition) => {
    if (typeof classDefinition == "string") {
      const classPartObjectToEdit = classDefinition === "" ? classPartObject : getPart(classPartObject, classDefinition);
      classPartObjectToEdit.classGroupId = classGroupId;
      return;
    }
    if (typeof classDefinition == "function") {
      if (isThemeGetter(classDefinition)) {
        processClassesRecursively(classDefinition(theme), classPartObject, classGroupId, theme);
        return;
      }
      classPartObject.validators.push({
        validator: classDefinition,
        classGroupId
      });
      return;
    }
    Object.entries(classDefinition).forEach(([key, classGroup2]) => {
      processClassesRecursively(classGroup2, getPart(classPartObject, key), classGroupId, theme);
    });
  });
}, getPart = (classPartObject, path) => {
  let currentClassPartObject = classPartObject;
  return path.split(CLASS_PART_SEPARATOR).forEach((pathPart) => {
    currentClassPartObject.nextPart.has(pathPart) || currentClassPartObject.nextPart.set(pathPart, {
      nextPart: /* @__PURE__ */ new Map(),
      validators: []
    }), currentClassPartObject = currentClassPartObject.nextPart.get(pathPart);
  }), currentClassPartObject;
}, isThemeGetter = (func) => func.isThemeGetter, createLruCache = (maxCacheSize) => {
  if (maxCacheSize < 1)
    return {
      get: () => {
      },
      set: () => {
      }
    };
  let cacheSize = 0, cache = /* @__PURE__ */ new Map(), previousCache = /* @__PURE__ */ new Map();
  const update = (key, value) => {
    cache.set(key, value), cacheSize++, cacheSize > maxCacheSize && (cacheSize = 0, previousCache = cache, cache = /* @__PURE__ */ new Map());
  };
  return {
    get(key) {
      let value = cache.get(key);
      if (value !== void 0)
        return value;
      if ((value = previousCache.get(key)) !== void 0)
        return update(key, value), value;
    },
    set(key, value) {
      cache.has(key) ? cache.set(key, value) : update(key, value);
    }
  };
}, IMPORTANT_MODIFIER = "!", MODIFIER_SEPARATOR = ":", MODIFIER_SEPARATOR_LENGTH = MODIFIER_SEPARATOR.length, createParseClassName = (config) => {
  const {
    prefix,
    experimentalParseClassName
  } = config;
  let parseClassName = (className) => {
    const modifiers = [];
    let bracketDepth = 0, parenDepth = 0, modifierStart = 0, postfixModifierPosition;
    for (let index = 0; index < className.length; index++) {
      let currentCharacter = className[index];
      if (bracketDepth === 0 && parenDepth === 0) {
        if (currentCharacter === MODIFIER_SEPARATOR) {
          modifiers.push(className.slice(modifierStart, index)), modifierStart = index + MODIFIER_SEPARATOR_LENGTH;
          continue;
        }
        if (currentCharacter === "/") {
          postfixModifierPosition = index;
          continue;
        }
      }
      currentCharacter === "[" ? bracketDepth++ : currentCharacter === "]" ? bracketDepth-- : currentCharacter === "(" ? parenDepth++ : currentCharacter === ")" && parenDepth--;
    }
    const baseClassNameWithImportantModifier = modifiers.length === 0 ? className : className.substring(modifierStart), baseClassName = stripImportantModifier(baseClassNameWithImportantModifier), hasImportantModifier = baseClassName !== baseClassNameWithImportantModifier, maybePostfixModifierPosition = postfixModifierPosition && postfixModifierPosition > modifierStart ? postfixModifierPosition - modifierStart : void 0;
    return {
      modifiers,
      hasImportantModifier,
      baseClassName,
      maybePostfixModifierPosition
    };
  };
  if (prefix) {
    const fullPrefix = prefix + MODIFIER_SEPARATOR, parseClassNameOriginal = parseClassName;
    parseClassName = (className) => className.startsWith(fullPrefix) ? parseClassNameOriginal(className.substring(fullPrefix.length)) : {
      isExternal: !0,
      modifiers: [],
      hasImportantModifier: !1,
      baseClassName: className,
      maybePostfixModifierPosition: void 0
    };
  }
  if (experimentalParseClassName) {
    const parseClassNameOriginal = parseClassName;
    parseClassName = (className) => experimentalParseClassName({
      className,
      parseClassName: parseClassNameOriginal
    });
  }
  return parseClassName;
}, stripImportantModifier = (baseClassName) => baseClassName.endsWith(IMPORTANT_MODIFIER) ? baseClassName.substring(0, baseClassName.length - 1) : baseClassName.startsWith(IMPORTANT_MODIFIER) ? baseClassName.substring(1) : baseClassName, createSortModifiers = (config) => {
  const orderSensitiveModifiers = Object.fromEntries(config.orderSensitiveModifiers.map((modifier) => [modifier, !0]));
  return (modifiers) => {
    if (modifiers.length <= 1)
      return modifiers;
    const sortedModifiers = [];
    let unsortedModifiers = [];
    return modifiers.forEach((modifier) => {
      modifier[0] === "[" || orderSensitiveModifiers[modifier] ? (sortedModifiers.push(...unsortedModifiers.sort(), modifier), unsortedModifiers = []) : unsortedModifiers.push(modifier);
    }), sortedModifiers.push(...unsortedModifiers.sort()), sortedModifiers;
  };
}, createConfigUtils = (config) => ({
  cache: createLruCache(config.cacheSize),
  parseClassName: createParseClassName(config),
  sortModifiers: createSortModifiers(config),
  ...createClassGroupUtils(config)
}), SPLIT_CLASSES_REGEX = /\\s+/, mergeClassList = (classList, configUtils) => {
  const {
    parseClassName,
    getClassGroupId,
    getConflictingClassGroupIds,
    sortModifiers
  } = configUtils, classGroupsInConflict = [], classNames = classList.trim().split(SPLIT_CLASSES_REGEX);
  let result = "";
  for (let index = classNames.length - 1; index >= 0; index -= 1) {
    const originalClassName = classNames[index], {
      isExternal,
      modifiers,
      hasImportantModifier,
      baseClassName,
      maybePostfixModifierPosition
    } = parseClassName(originalClassName);
    if (isExternal) {
      result = originalClassName + (result.length > 0 ? " " + result : result);
      continue;
    }
    let hasPostfixModifier = !!maybePostfixModifierPosition, classGroupId = getClassGroupId(hasPostfixModifier ? baseClassName.substring(0, maybePostfixModifierPosition) : baseClassName);
    if (!classGroupId) {
      if (!hasPostfixModifier) {
        result = originalClassName + (result.length > 0 ? " " + result : result);
        continue;
      }
      if (classGroupId = getClassGroupId(baseClassName), !classGroupId) {
        result = originalClassName + (result.length > 0 ? " " + result : result);
        continue;
      }
      hasPostfixModifier = !1;
    }
    const variantModifier = sortModifiers(modifiers).join(":"), modifierId = hasImportantModifier ? variantModifier + IMPORTANT_MODIFIER : variantModifier, classId = modifierId + classGroupId;
    if (classGroupsInConflict.includes(classId))
      continue;
    classGroupsInConflict.push(classId);
    const conflictGroups = getConflictingClassGroupIds(classGroupId, hasPostfixModifier);
    for (let i = 0; i < conflictGroups.length; ++i) {
      const group = conflictGroups[i];
      classGroupsInConflict.push(modifierId + group);
    }
    result = originalClassName + (result.length > 0 ? " " + result : result);
  }
  return result;
};
function twJoin() {
  let index = 0, argument, resolvedValue, string = "";
  for (; index < arguments.length; )
    (argument = arguments[index++]) && (resolvedValue = toValue(argument)) && (string && (string += " "), string += resolvedValue);
  return string;
}
const toValue = (mix) => {
  if (typeof mix == "string")
    return mix;
  let resolvedValue, string = "";
  for (let k = 0; k < mix.length; k++)
    mix[k] && (resolvedValue = toValue(mix[k])) && (string && (string += " "), string += resolvedValue);
  return string;
};
function createTailwindMerge(createConfigFirst, ...createConfigRest) {
  let configUtils, cacheGet, cacheSet, functionToCall = initTailwindMerge;
  function initTailwindMerge(classList) {
    const config = createConfigRest.reduce((previousConfig, createConfigCurrent) => createConfigCurrent(previousConfig), createConfigFirst());
    return configUtils = createConfigUtils(config), cacheGet = configUtils.cache.get, cacheSet = configUtils.cache.set, functionToCall = tailwindMerge, tailwindMerge(classList);
  }
  function tailwindMerge(classList) {
    const cachedResult = cacheGet(classList);
    if (cachedResult)
      return cachedResult;
    const result = mergeClassList(classList, configUtils);
    return cacheSet(classList, result), result;
  }
  return function() {
    return functionToCall(twJoin.apply(null, arguments));
  };
}
const fromTheme = (key) => {
  const themeGetter = (theme) => theme[key] || [];
  return themeGetter.isThemeGetter = !0, themeGetter;
}, arbitraryValueRegex = /^\\[(?:(\\w[\\w-]*):)?(.+)\\]$/i, arbitraryVariableRegex = /^\\((?:(\\w[\\w-]*):)?(.+)\\)$/i, fractionRegex = /^\\d+\\/\\d+$/, tshirtUnitRegex = /^(\\d+(\\.\\d+)?)?(xs|sm|md|lg|xl)$/, lengthUnitRegex = /\\d+(%|px|r?em|[sdl]?v([hwib]|min|max)|pt|pc|in|cm|mm|cap|ch|ex|r?lh|cq(w|h|i|b|min|max))|\\b(calc|min|max|clamp)\\(.+\\)|^0$/, colorFunctionRegex = /^(rgba?|hsla?|hwb|(ok)?(lab|lch)|color-mix)\\(.+\\)$/, shadowRegex = /^(inset_)?-?((\\d+)?\\.?(\\d+)[a-z]+|0)_-?((\\d+)?\\.?(\\d+)[a-z]+|0)/, imageRegex = /^(url|image|image-set|cross-fade|element|(repeating-)?(linear|radial|conic)-gradient)\\(.+\\)$/, isFraction = (value) => fractionRegex.test(value), isNumber = (value) => !!value && !Number.isNaN(Number(value)), isInteger = (value) => !!value && Number.isInteger(Number(value)), isPercent = (value) => value.endsWith("%") && isNumber(value.slice(0, -1)), isTshirtSize = (value) => tshirtUnitRegex.test(value), isAny = () => !0, isLengthOnly = (value) => (
  // \`colorFunctionRegex\` check is necessary because color functions can have percentages in them which which would be incorrectly classified as lengths.
  // For example, \`hsl(0 0% 0%)\` would be classified as a length without this check.
  // I could also use lookbehind assertion in \`lengthUnitRegex\` but that isn't supported widely enough.
  lengthUnitRegex.test(value) && !colorFunctionRegex.test(value)
), isNever = () => !1, isShadow = (value) => shadowRegex.test(value), isImage = (value) => imageRegex.test(value), isAnyNonArbitrary = (value) => !isArbitraryValue(value) && !isArbitraryVariable(value), isArbitrarySize = (value) => getIsArbitraryValue(value, isLabelSize, isNever), isArbitraryValue = (value) => arbitraryValueRegex.test(value), isArbitraryLength = (value) => getIsArbitraryValue(value, isLabelLength, isLengthOnly), isArbitraryNumber = (value) => getIsArbitraryValue(value, isLabelNumber, isNumber), isArbitraryPosition = (value) => getIsArbitraryValue(value, isLabelPosition, isNever), isArbitraryImage = (value) => getIsArbitraryValue(value, isLabelImage, isImage), isArbitraryShadow = (value) => getIsArbitraryValue(value, isLabelShadow, isShadow), isArbitraryVariable = (value) => arbitraryVariableRegex.test(value), isArbitraryVariableLength = (value) => getIsArbitraryVariable(value, isLabelLength), isArbitraryVariableFamilyName = (value) => getIsArbitraryVariable(value, isLabelFamilyName), isArbitraryVariablePosition = (value) => getIsArbitraryVariable(value, isLabelPosition), isArbitraryVariableSize = (value) => getIsArbitraryVariable(value, isLabelSize), isArbitraryVariableImage = (value) => getIsArbitraryVariable(value, isLabelImage), isArbitraryVariableShadow = (value) => getIsArbitraryVariable(value, isLabelShadow, !0), getIsArbitraryValue = (value, testLabel, testValue) => {
  const result = arbitraryValueRegex.exec(value);
  return result ? result[1] ? testLabel(result[1]) : testValue(result[2]) : !1;
}, getIsArbitraryVariable = (value, testLabel, shouldMatchNoLabel = !1) => {
  const result = arbitraryVariableRegex.exec(value);
  return result ? result[1] ? testLabel(result[1]) : shouldMatchNoLabel : !1;
}, isLabelPosition = (label) => label === "position" || label === "percentage", isLabelImage = (label) => label === "image" || label === "url", isLabelSize = (label) => label === "length" || label === "size" || label === "bg-size", isLabelLength = (label) => label === "length", isLabelNumber = (label) => label === "number", isLabelFamilyName = (label) => label === "family-name", isLabelShadow = (label) => label === "shadow", getDefaultConfig = () => {
  const themeColor = fromTheme("color"), themeFont = fromTheme("font"), themeText = fromTheme("text"), themeFontWeight = fromTheme("font-weight"), themeTracking = fromTheme("tracking"), themeLeading = fromTheme("leading"), themeBreakpoint = fromTheme("breakpoint"), themeContainer = fromTheme("container"), themeSpacing = fromTheme("spacing"), themeRadius = fromTheme("radius"), themeShadow = fromTheme("shadow"), themeInsetShadow = fromTheme("inset-shadow"), themeTextShadow = fromTheme("text-shadow"), themeDropShadow = fromTheme("drop-shadow"), themeBlur = fromTheme("blur"), themePerspective = fromTheme("perspective"), themeAspect = fromTheme("aspect"), themeEase = fromTheme("ease"), themeAnimate = fromTheme("animate"), scaleBreak = () => ["auto", "avoid", "all", "avoid-page", "page", "left", "right", "column"], scalePosition = () => [
    "center",
    "top",
    "bottom",
    "left",
    "right",
    "top-left",
    // Deprecated since Tailwind CSS v4.1.0, see https://github.com/tailwindlabs/tailwindcss/pull/17378
    "left-top",
    "top-right",
    // Deprecated since Tailwind CSS v4.1.0, see https://github.com/tailwindlabs/tailwindcss/pull/17378
    "right-top",
    "bottom-right",
    // Deprecated since Tailwind CSS v4.1.0, see https://github.com/tailwindlabs/tailwindcss/pull/17378
    "right-bottom",
    "bottom-left",
    // Deprecated since Tailwind CSS v4.1.0, see https://github.com/tailwindlabs/tailwindcss/pull/17378
    "left-bottom"
  ], scalePositionWithArbitrary = () => [...scalePosition(), isArbitraryVariable, isArbitraryValue], scaleOverflow = () => ["auto", "hidden", "clip", "visible", "scroll"], scaleOverscroll = () => ["auto", "contain", "none"], scaleUnambiguousSpacing = () => [isArbitraryVariable, isArbitraryValue, themeSpacing], scaleInset = () => [isFraction, "full", "auto", ...scaleUnambiguousSpacing()], scaleGridTemplateColsRows = () => [isInteger, "none", "subgrid", isArbitraryVariable, isArbitraryValue], scaleGridColRowStartAndEnd = () => ["auto", {
    span: ["full", isInteger, isArbitraryVariable, isArbitraryValue]
  }, isInteger, isArbitraryVariable, isArbitraryValue], scaleGridColRowStartOrEnd = () => [isInteger, "auto", isArbitraryVariable, isArbitraryValue], scaleGridAutoColsRows = () => ["auto", "min", "max", "fr", isArbitraryVariable, isArbitraryValue], scaleAlignPrimaryAxis = () => ["start", "end", "center", "between", "around", "evenly", "stretch", "baseline", "center-safe", "end-safe"], scaleAlignSecondaryAxis = () => ["start", "end", "center", "stretch", "center-safe", "end-safe"], scaleMargin = () => ["auto", ...scaleUnambiguousSpacing()], scaleSizing = () => [isFraction, "auto", "full", "dvw", "dvh", "lvw", "lvh", "svw", "svh", "min", "max", "fit", ...scaleUnambiguousSpacing()], scaleColor = () => [themeColor, isArbitraryVariable, isArbitraryValue], scaleBgPosition = () => [...scalePosition(), isArbitraryVariablePosition, isArbitraryPosition, {
    position: [isArbitraryVariable, isArbitraryValue]
  }], scaleBgRepeat = () => ["no-repeat", {
    repeat: ["", "x", "y", "space", "round"]
  }], scaleBgSize = () => ["auto", "cover", "contain", isArbitraryVariableSize, isArbitrarySize, {
    size: [isArbitraryVariable, isArbitraryValue]
  }], scaleGradientStopPosition = () => [isPercent, isArbitraryVariableLength, isArbitraryLength], scaleRadius = () => [
    // Deprecated since Tailwind CSS v4.0.0
    "",
    "none",
    "full",
    themeRadius,
    isArbitraryVariable,
    isArbitraryValue
  ], scaleBorderWidth = () => ["", isNumber, isArbitraryVariableLength, isArbitraryLength], scaleLineStyle = () => ["solid", "dashed", "dotted", "double"], scaleBlendMode = () => ["normal", "multiply", "screen", "overlay", "darken", "lighten", "color-dodge", "color-burn", "hard-light", "soft-light", "difference", "exclusion", "hue", "saturation", "color", "luminosity"], scaleMaskImagePosition = () => [isNumber, isPercent, isArbitraryVariablePosition, isArbitraryPosition], scaleBlur = () => [
    // Deprecated since Tailwind CSS v4.0.0
    "",
    "none",
    themeBlur,
    isArbitraryVariable,
    isArbitraryValue
  ], scaleRotate = () => ["none", isNumber, isArbitraryVariable, isArbitraryValue], scaleScale = () => ["none", isNumber, isArbitraryVariable, isArbitraryValue], scaleSkew = () => [isNumber, isArbitraryVariable, isArbitraryValue], scaleTranslate = () => [isFraction, "full", ...scaleUnambiguousSpacing()];
  return {
    cacheSize: 500,
    theme: {
      animate: ["spin", "ping", "pulse", "bounce"],
      aspect: ["video"],
      blur: [isTshirtSize],
      breakpoint: [isTshirtSize],
      color: [isAny],
      container: [isTshirtSize],
      "drop-shadow": [isTshirtSize],
      ease: ["in", "out", "in-out"],
      font: [isAnyNonArbitrary],
      "font-weight": ["thin", "extralight", "light", "normal", "medium", "semibold", "bold", "extrabold", "black"],
      "inset-shadow": [isTshirtSize],
      leading: ["none", "tight", "snug", "normal", "relaxed", "loose"],
      perspective: ["dramatic", "near", "normal", "midrange", "distant", "none"],
      radius: [isTshirtSize],
      shadow: [isTshirtSize],
      spacing: ["px", isNumber],
      text: [isTshirtSize],
      "text-shadow": [isTshirtSize],
      tracking: ["tighter", "tight", "normal", "wide", "wider", "widest"]
    },
    classGroups: {
      // --------------
      // --- Layout ---
      // --------------
      /**
       * Aspect Ratio
       * @see https://tailwindcss.com/docs/aspect-ratio
       */
      aspect: [{
        aspect: ["auto", "square", isFraction, isArbitraryValue, isArbitraryVariable, themeAspect]
      }],
      /**
       * Container
       * @see https://tailwindcss.com/docs/container
       * @deprecated since Tailwind CSS v4.0.0
       */
      container: ["container"],
      /**
       * Columns
       * @see https://tailwindcss.com/docs/columns
       */
      columns: [{
        columns: [isNumber, isArbitraryValue, isArbitraryVariable, themeContainer]
      }],
      /**
       * Break After
       * @see https://tailwindcss.com/docs/break-after
       */
      "break-after": [{
        "break-after": scaleBreak()
      }],
      /**
       * Break Before
       * @see https://tailwindcss.com/docs/break-before
       */
      "break-before": [{
        "break-before": scaleBreak()
      }],
      /**
       * Break Inside
       * @see https://tailwindcss.com/docs/break-inside
       */
      "break-inside": [{
        "break-inside": ["auto", "avoid", "avoid-page", "avoid-column"]
      }],
      /**
       * Box Decoration Break
       * @see https://tailwindcss.com/docs/box-decoration-break
       */
      "box-decoration": [{
        "box-decoration": ["slice", "clone"]
      }],
      /**
       * Box Sizing
       * @see https://tailwindcss.com/docs/box-sizing
       */
      box: [{
        box: ["border", "content"]
      }],
      /**
       * Display
       * @see https://tailwindcss.com/docs/display
       */
      display: ["block", "inline-block", "inline", "flex", "inline-flex", "table", "inline-table", "table-caption", "table-cell", "table-column", "table-column-group", "table-footer-group", "table-header-group", "table-row-group", "table-row", "flow-root", "grid", "inline-grid", "contents", "list-item", "hidden"],
      /**
       * Screen Reader Only
       * @see https://tailwindcss.com/docs/display#screen-reader-only
       */
      sr: ["sr-only", "not-sr-only"],
      /**
       * Floats
       * @see https://tailwindcss.com/docs/float
       */
      float: [{
        float: ["right", "left", "none", "start", "end"]
      }],
      /**
       * Clear
       * @see https://tailwindcss.com/docs/clear
       */
      clear: [{
        clear: ["left", "right", "both", "none", "start", "end"]
      }],
      /**
       * Isolation
       * @see https://tailwindcss.com/docs/isolation
       */
      isolation: ["isolate", "isolation-auto"],
      /**
       * Object Fit
       * @see https://tailwindcss.com/docs/object-fit
       */
      "object-fit": [{
        object: ["contain", "cover", "fill", "none", "scale-down"]
      }],
      /**
       * Object Position
       * @see https://tailwindcss.com/docs/object-position
       */
      "object-position": [{
        object: scalePositionWithArbitrary()
      }],
      /**
       * Overflow
       * @see https://tailwindcss.com/docs/overflow
       */
      overflow: [{
        overflow: scaleOverflow()
      }],
      /**
       * Overflow X
       * @see https://tailwindcss.com/docs/overflow
       */
      "overflow-x": [{
        "overflow-x": scaleOverflow()
      }],
      /**
       * Overflow Y
       * @see https://tailwindcss.com/docs/overflow
       */
      "overflow-y": [{
        "overflow-y": scaleOverflow()
      }],
      /**
       * Overscroll Behavior
       * @see https://tailwindcss.com/docs/overscroll-behavior
       */
      overscroll: [{
        overscroll: scaleOverscroll()
      }],
      /**
       * Overscroll Behavior X
       * @see https://tailwindcss.com/docs/overscroll-behavior
       */
      "overscroll-x": [{
        "overscroll-x": scaleOverscroll()
      }],
      /**
       * Overscroll Behavior Y
       * @see https://tailwindcss.com/docs/overscroll-behavior
       */
      "overscroll-y": [{
        "overscroll-y": scaleOverscroll()
      }],
      /**
       * Position
       * @see https://tailwindcss.com/docs/position
       */
      position: ["static", "fixed", "absolute", "relative", "sticky"],
      /**
       * Top / Right / Bottom / Left
       * @see https://tailwindcss.com/docs/top-right-bottom-left
       */
      inset: [{
        inset: scaleInset()
      }],
      /**
       * Right / Left
       * @see https://tailwindcss.com/docs/top-right-bottom-left
       */
      "inset-x": [{
        "inset-x": scaleInset()
      }],
      /**
       * Top / Bottom
       * @see https://tailwindcss.com/docs/top-right-bottom-left
       */
      "inset-y": [{
        "inset-y": scaleInset()
      }],
      /**
       * Start
       * @see https://tailwindcss.com/docs/top-right-bottom-left
       */
      start: [{
        start: scaleInset()
      }],
      /**
       * End
       * @see https://tailwindcss.com/docs/top-right-bottom-left
       */
      end: [{
        end: scaleInset()
      }],
      /**
       * Top
       * @see https://tailwindcss.com/docs/top-right-bottom-left
       */
      top: [{
        top: scaleInset()
      }],
      /**
       * Right
       * @see https://tailwindcss.com/docs/top-right-bottom-left
       */
      right: [{
        right: scaleInset()
      }],
      /**
       * Bottom
       * @see https://tailwindcss.com/docs/top-right-bottom-left
       */
      bottom: [{
        bottom: scaleInset()
      }],
      /**
       * Left
       * @see https://tailwindcss.com/docs/top-right-bottom-left
       */
      left: [{
        left: scaleInset()
      }],
      /**
       * Visibility
       * @see https://tailwindcss.com/docs/visibility
       */
      visibility: ["visible", "invisible", "collapse"],
      /**
       * Z-Index
       * @see https://tailwindcss.com/docs/z-index
       */
      z: [{
        z: [isInteger, "auto", isArbitraryVariable, isArbitraryValue]
      }],
      // ------------------------
      // --- Flexbox and Grid ---
      // ------------------------
      /**
       * Flex Basis
       * @see https://tailwindcss.com/docs/flex-basis
       */
      basis: [{
        basis: [isFraction, "full", "auto", themeContainer, ...scaleUnambiguousSpacing()]
      }],
      /**
       * Flex Direction
       * @see https://tailwindcss.com/docs/flex-direction
       */
      "flex-direction": [{
        flex: ["row", "row-reverse", "col", "col-reverse"]
      }],
      /**
       * Flex Wrap
       * @see https://tailwindcss.com/docs/flex-wrap
       */
      "flex-wrap": [{
        flex: ["nowrap", "wrap", "wrap-reverse"]
      }],
      /**
       * Flex
       * @see https://tailwindcss.com/docs/flex
       */
      flex: [{
        flex: [isNumber, isFraction, "auto", "initial", "none", isArbitraryValue]
      }],
      /**
       * Flex Grow
       * @see https://tailwindcss.com/docs/flex-grow
       */
      grow: [{
        grow: ["", isNumber, isArbitraryVariable, isArbitraryValue]
      }],
      /**
       * Flex Shrink
       * @see https://tailwindcss.com/docs/flex-shrink
       */
      shrink: [{
        shrink: ["", isNumber, isArbitraryVariable, isArbitraryValue]
      }],
      /**
       * Order
       * @see https://tailwindcss.com/docs/order
       */
      order: [{
        order: [isInteger, "first", "last", "none", isArbitraryVariable, isArbitraryValue]
      }],
      /**
       * Grid Template Columns
       * @see https://tailwindcss.com/docs/grid-template-columns
       */
      "grid-cols": [{
        "grid-cols": scaleGridTemplateColsRows()
      }],
      /**
       * Grid Column Start / End
       * @see https://tailwindcss.com/docs/grid-column
       */
      "col-start-end": [{
        col: scaleGridColRowStartAndEnd()
      }],
      /**
       * Grid Column Start
       * @see https://tailwindcss.com/docs/grid-column
       */
      "col-start": [{
        "col-start": scaleGridColRowStartOrEnd()
      }],
      /**
       * Grid Column End
       * @see https://tailwindcss.com/docs/grid-column
       */
      "col-end": [{
        "col-end": scaleGridColRowStartOrEnd()
      }],
      /**
       * Grid Template Rows
       * @see https://tailwindcss.com/docs/grid-template-rows
       */
      "grid-rows": [{
        "grid-rows": scaleGridTemplateColsRows()
      }],
      /**
       * Grid Row Start / End
       * @see https://tailwindcss.com/docs/grid-row
       */
      "row-start-end": [{
        row: scaleGridColRowStartAndEnd()
      }],
      /**
       * Grid Row Start
       * @see https://tailwindcss.com/docs/grid-row
       */
      "row-start": [{
        "row-start": scaleGridColRowStartOrEnd()
      }],
      /**
       * Grid Row End
       * @see https://tailwindcss.com/docs/grid-row
       */
      "row-end": [{
        "row-end": scaleGridColRowStartOrEnd()
      }],
      /**
       * Grid Auto Flow
       * @see https://tailwindcss.com/docs/grid-auto-flow
       */
      "grid-flow": [{
        "grid-flow": ["row", "col", "dense", "row-dense", "col-dense"]
      }],
      /**
       * Grid Auto Columns
       * @see https://tailwindcss.com/docs/grid-auto-columns
       */
      "auto-cols": [{
        "auto-cols": scaleGridAutoColsRows()
      }],
      /**
       * Grid Auto Rows
       * @see https://tailwindcss.com/docs/grid-auto-rows
       */
      "auto-rows": [{
        "auto-rows": scaleGridAutoColsRows()
      }],
      /**
       * Gap
       * @see https://tailwindcss.com/docs/gap
       */
      gap: [{
        gap: scaleUnambiguousSpacing()
      }],
      /**
       * Gap X
       * @see https://tailwindcss.com/docs/gap
       */
      "gap-x": [{
        "gap-x": scaleUnambiguousSpacing()
      }],
      /**
       * Gap Y
       * @see https://tailwindcss.com/docs/gap
       */
      "gap-y": [{
        "gap-y": scaleUnambiguousSpacing()
      }],
      /**
       * Justify Content
       * @see https://tailwindcss.com/docs/justify-content
       */
      "justify-content": [{
        justify: [...scaleAlignPrimaryAxis(), "normal"]
      }],
      /**
       * Justify Items
       * @see https://tailwindcss.com/docs/justify-items
       */
      "justify-items": [{
        "justify-items": [...scaleAlignSecondaryAxis(), "normal"]
      }],
      /**
       * Justify Self
       * @see https://tailwindcss.com/docs/justify-self
       */
      "justify-self": [{
        "justify-self": ["auto", ...scaleAlignSecondaryAxis()]
      }],
      /**
       * Align Content
       * @see https://tailwindcss.com/docs/align-content
       */
      "align-content": [{
        content: ["normal", ...scaleAlignPrimaryAxis()]
      }],
      /**
       * Align Items
       * @see https://tailwindcss.com/docs/align-items
       */
      "align-items": [{
        items: [...scaleAlignSecondaryAxis(), {
          baseline: ["", "last"]
        }]
      }],
      /**
       * Align Self
       * @see https://tailwindcss.com/docs/align-self
       */
      "align-self": [{
        self: ["auto", ...scaleAlignSecondaryAxis(), {
          baseline: ["", "last"]
        }]
      }],
      /**
       * Place Content
       * @see https://tailwindcss.com/docs/place-content
       */
      "place-content": [{
        "place-content": scaleAlignPrimaryAxis()
      }],
      /**
       * Place Items
       * @see https://tailwindcss.com/docs/place-items
       */
      "place-items": [{
        "place-items": [...scaleAlignSecondaryAxis(), "baseline"]
      }],
      /**
       * Place Self
       * @see https://tailwindcss.com/docs/place-self
       */
      "place-self": [{
        "place-self": ["auto", ...scaleAlignSecondaryAxis()]
      }],
      // Spacing
      /**
       * Padding
       * @see https://tailwindcss.com/docs/padding
       */
      p: [{
        p: scaleUnambiguousSpacing()
      }],
      /**
       * Padding X
       * @see https://tailwindcss.com/docs/padding
       */
      px: [{
        px: scaleUnambiguousSpacing()
      }],
      /**
       * Padding Y
       * @see https://tailwindcss.com/docs/padding
       */
      py: [{
        py: scaleUnambiguousSpacing()
      }],
      /**
       * Padding Start
       * @see https://tailwindcss.com/docs/padding
       */
      ps: [{
        ps: scaleUnambiguousSpacing()
      }],
      /**
       * Padding End
       * @see https://tailwindcss.com/docs/padding
       */
      pe: [{
        pe: scaleUnambiguousSpacing()
      }],
      /**
       * Padding Top
       * @see https://tailwindcss.com/docs/padding
       */
      pt: [{
        pt: scaleUnambiguousSpacing()
      }],
      /**
       * Padding Right
       * @see https://tailwindcss.com/docs/padding
       */
      pr: [{
        pr: scaleUnambiguousSpacing()
      }],
      /**
       * Padding Bottom
       * @see https://tailwindcss.com/docs/padding
       */
      pb: [{
        pb: scaleUnambiguousSpacing()
      }],
      /**
       * Padding Left
       * @see https://tailwindcss.com/docs/padding
       */
      pl: [{
        pl: scaleUnambiguousSpacing()
      }],
      /**
       * Margin
       * @see https://tailwindcss.com/docs/margin
       */
      m: [{
        m: scaleMargin()
      }],
      /**
       * Margin X
       * @see https://tailwindcss.com/docs/margin
       */
      mx: [{
        mx: scaleMargin()
      }],
      /**
       * Margin Y
       * @see https://tailwindcss.com/docs/margin
       */
      my: [{
        my: scaleMargin()
      }],
      /**
       * Margin Start
       * @see https://tailwindcss.com/docs/margin
       */
      ms: [{
        ms: scaleMargin()
      }],
      /**
       * Margin End
       * @see https://tailwindcss.com/docs/margin
       */
      me: [{
        me: scaleMargin()
      }],
      /**
       * Margin Top
       * @see https://tailwindcss.com/docs/margin
       */
      mt: [{
        mt: scaleMargin()
      }],
      /**
       * Margin Right
       * @see https://tailwindcss.com/docs/margin
       */
      mr: [{
        mr: scaleMargin()
      }],
      /**
       * Margin Bottom
       * @see https://tailwindcss.com/docs/margin
       */
      mb: [{
        mb: scaleMargin()
      }],
      /**
       * Margin Left
       * @see https://tailwindcss.com/docs/margin
       */
      ml: [{
        ml: scaleMargin()
      }],
      /**
       * Space Between X
       * @see https://tailwindcss.com/docs/margin#adding-space-between-children
       */
      "space-x": [{
        "space-x": scaleUnambiguousSpacing()
      }],
      /**
       * Space Between X Reverse
       * @see https://tailwindcss.com/docs/margin#adding-space-between-children
       */
      "space-x-reverse": ["space-x-reverse"],
      /**
       * Space Between Y
       * @see https://tailwindcss.com/docs/margin#adding-space-between-children
       */
      "space-y": [{
        "space-y": scaleUnambiguousSpacing()
      }],
      /**
       * Space Between Y Reverse
       * @see https://tailwindcss.com/docs/margin#adding-space-between-children
       */
      "space-y-reverse": ["space-y-reverse"],
      // --------------
      // --- Sizing ---
      // --------------
      /**
       * Size
       * @see https://tailwindcss.com/docs/width#setting-both-width-and-height
       */
      size: [{
        size: scaleSizing()
      }],
      /**
       * Width
       * @see https://tailwindcss.com/docs/width
       */
      w: [{
        w: [themeContainer, "screen", ...scaleSizing()]
      }],
      /**
       * Min-Width
       * @see https://tailwindcss.com/docs/min-width
       */
      "min-w": [{
        "min-w": [
          themeContainer,
          "screen",
          /** Deprecated. @see https://github.com/tailwindlabs/tailwindcss.com/issues/2027#issuecomment-2620152757 */
          "none",
          ...scaleSizing()
        ]
      }],
      /**
       * Max-Width
       * @see https://tailwindcss.com/docs/max-width
       */
      "max-w": [{
        "max-w": [
          themeContainer,
          "screen",
          "none",
          /** Deprecated since Tailwind CSS v4.0.0. @see https://github.com/tailwindlabs/tailwindcss.com/issues/2027#issuecomment-2620152757 */
          "prose",
          /** Deprecated since Tailwind CSS v4.0.0. @see https://github.com/tailwindlabs/tailwindcss.com/issues/2027#issuecomment-2620152757 */
          {
            screen: [themeBreakpoint]
          },
          ...scaleSizing()
        ]
      }],
      /**
       * Height
       * @see https://tailwindcss.com/docs/height
       */
      h: [{
        h: ["screen", "lh", ...scaleSizing()]
      }],
      /**
       * Min-Height
       * @see https://tailwindcss.com/docs/min-height
       */
      "min-h": [{
        "min-h": ["screen", "lh", "none", ...scaleSizing()]
      }],
      /**
       * Max-Height
       * @see https://tailwindcss.com/docs/max-height
       */
      "max-h": [{
        "max-h": ["screen", "lh", ...scaleSizing()]
      }],
      // ------------------
      // --- Typography ---
      // ------------------
      /**
       * Font Size
       * @see https://tailwindcss.com/docs/font-size
       */
      "font-size": [{
        text: ["base", themeText, isArbitraryVariableLength, isArbitraryLength]
      }],
      /**
       * Font Smoothing
       * @see https://tailwindcss.com/docs/font-smoothing
       */
      "font-smoothing": ["antialiased", "subpixel-antialiased"],
      /**
       * Font Style
       * @see https://tailwindcss.com/docs/font-style
       */
      "font-style": ["italic", "not-italic"],
      /**
       * Font Weight
       * @see https://tailwindcss.com/docs/font-weight
       */
      "font-weight": [{
        font: [themeFontWeight, isArbitraryVariable, isArbitraryNumber]
      }],
      /**
       * Font Stretch
       * @see https://tailwindcss.com/docs/font-stretch
       */
      "font-stretch": [{
        "font-stretch": ["ultra-condensed", "extra-condensed", "condensed", "semi-condensed", "normal", "semi-expanded", "expanded", "extra-expanded", "ultra-expanded", isPercent, isArbitraryValue]
      }],
      /**
       * Font Family
       * @see https://tailwindcss.com/docs/font-family
       */
      "font-family": [{
        font: [isArbitraryVariableFamilyName, isArbitraryValue, themeFont]
      }],
      /**
       * Font Variant Numeric
       * @see https://tailwindcss.com/docs/font-variant-numeric
       */
      "fvn-normal": ["normal-nums"],
      /**
       * Font Variant Numeric
       * @see https://tailwindcss.com/docs/font-variant-numeric
       */
      "fvn-ordinal": ["ordinal"],
      /**
       * Font Variant Numeric
       * @see https://tailwindcss.com/docs/font-variant-numeric
       */
      "fvn-slashed-zero": ["slashed-zero"],
      /**
       * Font Variant Numeric
       * @see https://tailwindcss.com/docs/font-variant-numeric
       */
      "fvn-figure": ["lining-nums", "oldstyle-nums"],
      /**
       * Font Variant Numeric
       * @see https://tailwindcss.com/docs/font-variant-numeric
       */
      "fvn-spacing": ["proportional-nums", "tabular-nums"],
      /**
       * Font Variant Numeric
       * @see https://tailwindcss.com/docs/font-variant-numeric
       */
      "fvn-fraction": ["diagonal-fractions", "stacked-fractions"],
      /**
       * Letter Spacing
       * @see https://tailwindcss.com/docs/letter-spacing
       */
      tracking: [{
        tracking: [themeTracking, isArbitraryVariable, isArbitraryValue]
      }],
      /**
       * Line Clamp
       * @see https://tailwindcss.com/docs/line-clamp
       */
      "line-clamp": [{
        "line-clamp": [isNumber, "none", isArbitraryVariable, isArbitraryNumber]
      }],
      /**
       * Line Height
       * @see https://tailwindcss.com/docs/line-height
       */
      leading: [{
        leading: [
          /** Deprecated since Tailwind CSS v4.0.0. @see https://github.com/tailwindlabs/tailwindcss.com/issues/2027#issuecomment-2620152757 */
          themeLeading,
          ...scaleUnambiguousSpacing()
        ]
      }],
      /**
       * List Style Image
       * @see https://tailwindcss.com/docs/list-style-image
       */
      "list-image": [{
        "list-image": ["none", isArbitraryVariable, isArbitraryValue]
      }],
      /**
       * List Style Position
       * @see https://tailwindcss.com/docs/list-style-position
       */
      "list-style-position": [{
        list: ["inside", "outside"]
      }],
      /**
       * List Style Type
       * @see https://tailwindcss.com/docs/list-style-type
       */
      "list-style-type": [{
        list: ["disc", "decimal", "none", isArbitraryVariable, isArbitraryValue]
      }],
      /**
       * Text Alignment
       * @see https://tailwindcss.com/docs/text-align
       */
      "text-alignment": [{
        text: ["left", "center", "right", "justify", "start", "end"]
      }],
      /**
       * Placeholder Color
       * @deprecated since Tailwind CSS v3.0.0
       * @see https://v3.tailwindcss.com/docs/placeholder-color
       */
      "placeholder-color": [{
        placeholder: scaleColor()
      }],
      /**
       * Text Color
       * @see https://tailwindcss.com/docs/text-color
       */
      "text-color": [{
        text: scaleColor()
      }],
      /**
       * Text Decoration
       * @see https://tailwindcss.com/docs/text-decoration
       */
      "text-decoration": ["underline", "overline", "line-through", "no-underline"],
      /**
       * Text Decoration Style
       * @see https://tailwindcss.com/docs/text-decoration-style
       */
      "text-decoration-style": [{
        decoration: [...scaleLineStyle(), "wavy"]
      }],
      /**
       * Text Decoration Thickness
       * @see https://tailwindcss.com/docs/text-decoration-thickness
       */
      "text-decoration-thickness": [{
        decoration: [isNumber, "from-font", "auto", isArbitraryVariable, isArbitraryLength]
      }],
      /**
       * Text Decoration Color
       * @see https://tailwindcss.com/docs/text-decoration-color
       */
      "text-decoration-color": [{
        decoration: scaleColor()
      }],
      /**
       * Text Underline Offset
       * @see https://tailwindcss.com/docs/text-underline-offset
       */
      "underline-offset": [{
        "underline-offset": [isNumber, "auto", isArbitraryVariable, isArbitraryValue]
      }],
      /**
       * Text Transform
       * @see https://tailwindcss.com/docs/text-transform
       */
      "text-transform": ["uppercase", "lowercase", "capitalize", "normal-case"],
      /**
       * Text Overflow
       * @see https://tailwindcss.com/docs/text-overflow
       */
      "text-overflow": ["truncate", "text-ellipsis", "text-clip"],
      /**
       * Text Wrap
       * @see https://tailwindcss.com/docs/text-wrap
       */
      "text-wrap": [{
        text: ["wrap", "nowrap", "balance", "pretty"]
      }],
      /**
       * Text Indent
       * @see https://tailwindcss.com/docs/text-indent
       */
      indent: [{
        indent: scaleUnambiguousSpacing()
      }],
      /**
       * Vertical Alignment
       * @see https://tailwindcss.com/docs/vertical-align
       */
      "vertical-align": [{
        align: ["baseline", "top", "middle", "bottom", "text-top", "text-bottom", "sub", "super", isArbitraryVariable, isArbitraryValue]
      }],
      /**
       * Whitespace
       * @see https://tailwindcss.com/docs/whitespace
       */
      whitespace: [{
        whitespace: ["normal", "nowrap", "pre", "pre-line", "pre-wrap", "break-spaces"]
      }],
      /**
       * Word Break
       * @see https://tailwindcss.com/docs/word-break
       */
      break: [{
        break: ["normal", "words", "all", "keep"]
      }],
      /**
       * Overflow Wrap
       * @see https://tailwindcss.com/docs/overflow-wrap
       */
      wrap: [{
        wrap: ["break-word", "anywhere", "normal"]
      }],
      /**
       * Hyphens
       * @see https://tailwindcss.com/docs/hyphens
       */
      hyphens: [{
        hyphens: ["none", "manual", "auto"]
      }],
      /**
       * Content
       * @see https://tailwindcss.com/docs/content
       */
      content: [{
        content: ["none", isArbitraryVariable, isArbitraryValue]
      }],
      // -------------------
      // --- Backgrounds ---
      // -------------------
      /**
       * Background Attachment
       * @see https://tailwindcss.com/docs/background-attachment
       */
      "bg-attachment": [{
        bg: ["fixed", "local", "scroll"]
      }],
      /**
       * Background Clip
       * @see https://tailwindcss.com/docs/background-clip
       */
      "bg-clip": [{
        "bg-clip": ["border", "padding", "content", "text"]
      }],
      /**
       * Background Origin
       * @see https://tailwindcss.com/docs/background-origin
       */
      "bg-origin": [{
        "bg-origin": ["border", "padding", "content"]
      }],
      /**
       * Background Position
       * @see https://tailwindcss.com/docs/background-position
       */
      "bg-position": [{
        bg: scaleBgPosition()
      }],
      /**
       * Background Repeat
       * @see https://tailwindcss.com/docs/background-repeat
       */
      "bg-repeat": [{
        bg: scaleBgRepeat()
      }],
      /**
       * Background Size
       * @see https://tailwindcss.com/docs/background-size
       */
      "bg-size": [{
        bg: scaleBgSize()
      }],
      /**
       * Background Image
       * @see https://tailwindcss.com/docs/background-image
       */
      "bg-image": [{
        bg: ["none", {
          linear: [{
            to: ["t", "tr", "r", "br", "b", "bl", "l", "tl"]
          }, isInteger, isArbitraryVariable, isArbitraryValue],
          radial: ["", isArbitraryVariable, isArbitraryValue],
          conic: [isInteger, isArbitraryVariable, isArbitraryValue]
        }, isArbitraryVariableImage, isArbitraryImage]
      }],
      /**
       * Background Color
       * @see https://tailwindcss.com/docs/background-color
       */
      "bg-color": [{
        bg: scaleColor()
      }],
      /**
       * Gradient Color Stops From Position
       * @see https://tailwindcss.com/docs/gradient-color-stops
       */
      "gradient-from-pos": [{
        from: scaleGradientStopPosition()
      }],
      /**
       * Gradient Color Stops Via Position
       * @see https://tailwindcss.com/docs/gradient-color-stops
       */
      "gradient-via-pos": [{
        via: scaleGradientStopPosition()
      }],
      /**
       * Gradient Color Stops To Position
       * @see https://tailwindcss.com/docs/gradient-color-stops
       */
      "gradient-to-pos": [{
        to: scaleGradientStopPosition()
      }],
      /**
       * Gradient Color Stops From
       * @see https://tailwindcss.com/docs/gradient-color-stops
       */
      "gradient-from": [{
        from: scaleColor()
      }],
      /**
       * Gradient Color Stops Via
       * @see https://tailwindcss.com/docs/gradient-color-stops
       */
      "gradient-via": [{
        via: scaleColor()
      }],
      /**
       * Gradient Color Stops To
       * @see https://tailwindcss.com/docs/gradient-color-stops
       */
      "gradient-to": [{
        to: scaleColor()
      }],
      // ---------------
      // --- Borders ---
      // ---------------
      /**
       * Border Radius
       * @see https://tailwindcss.com/docs/border-radius
       */
      rounded: [{
        rounded: scaleRadius()
      }],
      /**
       * Border Radius Start
       * @see https://tailwindcss.com/docs/border-radius
       */
      "rounded-s": [{
        "rounded-s": scaleRadius()
      }],
      /**
       * Border Radius End
       * @see https://tailwindcss.com/docs/border-radius
       */
      "rounded-e": [{
        "rounded-e": scaleRadius()
      }],
      /**
       * Border Radius Top
       * @see https://tailwindcss.com/docs/border-radius
       */
      "rounded-t": [{
        "rounded-t": scaleRadius()
      }],
      /**
       * Border Radius Right
       * @see https://tailwindcss.com/docs/border-radius
       */
      "rounded-r": [{
        "rounded-r": scaleRadius()
      }],
      /**
       * Border Radius Bottom
       * @see https://tailwindcss.com/docs/border-radius
       */
      "rounded-b": [{
        "rounded-b": scaleRadius()
      }],
      /**
       * Border Radius Left
       * @see https://tailwindcss.com/docs/border-radius
       */
      "rounded-l": [{
        "rounded-l": scaleRadius()
      }],
      /**
       * Border Radius Start Start
       * @see https://tailwindcss.com/docs/border-radius
       */
      "rounded-ss": [{
        "rounded-ss": scaleRadius()
      }],
      /**
       * Border Radius Start End
       * @see https://tailwindcss.com/docs/border-radius
       */
      "rounded-se": [{
        "rounded-se": scaleRadius()
      }],
      /**
       * Border Radius End End
       * @see https://tailwindcss.com/docs/border-radius
       */
      "rounded-ee": [{
        "rounded-ee": scaleRadius()
      }],
      /**
       * Border Radius End Start
       * @see https://tailwindcss.com/docs/border-radius
       */
      "rounded-es": [{
        "rounded-es": scaleRadius()
      }],
      /**
       * Border Radius Top Left
       * @see https://tailwindcss.com/docs/border-radius
       */
      "rounded-tl": [{
        "rounded-tl": scaleRadius()
      }],
      /**
       * Border Radius Top Right
       * @see https://tailwindcss.com/docs/border-radius
       */
      "rounded-tr": [{
        "rounded-tr": scaleRadius()
      }],
      /**
       * Border Radius Bottom Right
       * @see https://tailwindcss.com/docs/border-radius
       */
      "rounded-br": [{
        "rounded-br": scaleRadius()
      }],
      /**
       * Border Radius Bottom Left
       * @see https://tailwindcss.com/docs/border-radius
       */
      "rounded-bl": [{
        "rounded-bl": scaleRadius()
      }],
      /**
       * Border Width
       * @see https://tailwindcss.com/docs/border-width
       */
      "border-w": [{
        border: scaleBorderWidth()
      }],
      /**
       * Border Width X
       * @see https://tailwindcss.com/docs/border-width
       */
      "border-w-x": [{
        "border-x": scaleBorderWidth()
      }],
      /**
       * Border Width Y
       * @see https://tailwindcss.com/docs/border-width
       */
      "border-w-y": [{
        "border-y": scaleBorderWidth()
      }],
      /**
       * Border Width Start
       * @see https://tailwindcss.com/docs/border-width
       */
      "border-w-s": [{
        "border-s": scaleBorderWidth()
      }],
      /**
       * Border Width End
       * @see https://tailwindcss.com/docs/border-width
       */
      "border-w-e": [{
        "border-e": scaleBorderWidth()
      }],
      /**
       * Border Width Top
       * @see https://tailwindcss.com/docs/border-width
       */
      "border-w-t": [{
        "border-t": scaleBorderWidth()
      }],
      /**
       * Border Width Right
       * @see https://tailwindcss.com/docs/border-width
       */
      "border-w-r": [{
        "border-r": scaleBorderWidth()
      }],
      /**
       * Border Width Bottom
       * @see https://tailwindcss.com/docs/border-width
       */
      "border-w-b": [{
        "border-b": scaleBorderWidth()
      }],
      /**
       * Border Width Left
       * @see https://tailwindcss.com/docs/border-width
       */
      "border-w-l": [{
        "border-l": scaleBorderWidth()
      }],
      /**
       * Divide Width X
       * @see https://tailwindcss.com/docs/border-width#between-children
       */
      "divide-x": [{
        "divide-x": scaleBorderWidth()
      }],
      /**
       * Divide Width X Reverse
       * @see https://tailwindcss.com/docs/border-width#between-children
       */
      "divide-x-reverse": ["divide-x-reverse"],
      /**
       * Divide Width Y
       * @see https://tailwindcss.com/docs/border-width#between-children
       */
      "divide-y": [{
        "divide-y": scaleBorderWidth()
      }],
      /**
       * Divide Width Y Reverse
       * @see https://tailwindcss.com/docs/border-width#between-children
       */
      "divide-y-reverse": ["divide-y-reverse"],
      /**
       * Border Style
       * @see https://tailwindcss.com/docs/border-style
       */
      "border-style": [{
        border: [...scaleLineStyle(), "hidden", "none"]
      }],
      /**
       * Divide Style
       * @see https://tailwindcss.com/docs/border-style#setting-the-divider-style
       */
      "divide-style": [{
        divide: [...scaleLineStyle(), "hidden", "none"]
      }],
      /**
       * Border Color
       * @see https://tailwindcss.com/docs/border-color
       */
      "border-color": [{
        border: scaleColor()
      }],
      /**
       * Border Color X
       * @see https://tailwindcss.com/docs/border-color
       */
      "border-color-x": [{
        "border-x": scaleColor()
      }],
      /**
       * Border Color Y
       * @see https://tailwindcss.com/docs/border-color
       */
      "border-color-y": [{
        "border-y": scaleColor()
      }],
      /**
       * Border Color S
       * @see https://tailwindcss.com/docs/border-color
       */
      "border-color-s": [{
        "border-s": scaleColor()
      }],
      /**
       * Border Color E
       * @see https://tailwindcss.com/docs/border-color
       */
      "border-color-e": [{
        "border-e": scaleColor()
      }],
      /**
       * Border Color Top
       * @see https://tailwindcss.com/docs/border-color
       */
      "border-color-t": [{
        "border-t": scaleColor()
      }],
      /**
       * Border Color Right
       * @see https://tailwindcss.com/docs/border-color
       */
      "border-color-r": [{
        "border-r": scaleColor()
      }],
      /**
       * Border Color Bottom
       * @see https://tailwindcss.com/docs/border-color
       */
      "border-color-b": [{
        "border-b": scaleColor()
      }],
      /**
       * Border Color Left
       * @see https://tailwindcss.com/docs/border-color
       */
      "border-color-l": [{
        "border-l": scaleColor()
      }],
      /**
       * Divide Color
       * @see https://tailwindcss.com/docs/divide-color
       */
      "divide-color": [{
        divide: scaleColor()
      }],
      /**
       * Outline Style
       * @see https://tailwindcss.com/docs/outline-style
       */
      "outline-style": [{
        outline: [...scaleLineStyle(), "none", "hidden"]
      }],
      /**
       * Outline Offset
       * @see https://tailwindcss.com/docs/outline-offset
       */
      "outline-offset": [{
        "outline-offset": [isNumber, isArbitraryVariable, isArbitraryValue]
      }],
      /**
       * Outline Width
       * @see https://tailwindcss.com/docs/outline-width
       */
      "outline-w": [{
        outline: ["", isNumber, isArbitraryVariableLength, isArbitraryLength]
      }],
      /**
       * Outline Color
       * @see https://tailwindcss.com/docs/outline-color
       */
      "outline-color": [{
        outline: scaleColor()
      }],
      // ---------------
      // --- Effects ---
      // ---------------
      /**
       * Box Shadow
       * @see https://tailwindcss.com/docs/box-shadow
       */
      shadow: [{
        shadow: [
          // Deprecated since Tailwind CSS v4.0.0
          "",
          "none",
          themeShadow,
          isArbitraryVariableShadow,
          isArbitraryShadow
        ]
      }],
      /**
       * Box Shadow Color
       * @see https://tailwindcss.com/docs/box-shadow#setting-the-shadow-color
       */
      "shadow-color": [{
        shadow: scaleColor()
      }],
      /**
       * Inset Box Shadow
       * @see https://tailwindcss.com/docs/box-shadow#adding-an-inset-shadow
       */
      "inset-shadow": [{
        "inset-shadow": ["none", themeInsetShadow, isArbitraryVariableShadow, isArbitraryShadow]
      }],
      /**
       * Inset Box Shadow Color
       * @see https://tailwindcss.com/docs/box-shadow#setting-the-inset-shadow-color
       */
      "inset-shadow-color": [{
        "inset-shadow": scaleColor()
      }],
      /**
       * Ring Width
       * @see https://tailwindcss.com/docs/box-shadow#adding-a-ring
       */
      "ring-w": [{
        ring: scaleBorderWidth()
      }],
      /**
       * Ring Width Inset
       * @see https://v3.tailwindcss.com/docs/ring-width#inset-rings
       * @deprecated since Tailwind CSS v4.0.0
       * @see https://github.com/tailwindlabs/tailwindcss/blob/v4.0.0/packages/tailwindcss/src/utilities.ts#L4158
       */
      "ring-w-inset": ["ring-inset"],
      /**
       * Ring Color
       * @see https://tailwindcss.com/docs/box-shadow#setting-the-ring-color
       */
      "ring-color": [{
        ring: scaleColor()
      }],
      /**
       * Ring Offset Width
       * @see https://v3.tailwindcss.com/docs/ring-offset-width
       * @deprecated since Tailwind CSS v4.0.0
       * @see https://github.com/tailwindlabs/tailwindcss/blob/v4.0.0/packages/tailwindcss/src/utilities.ts#L4158
       */
      "ring-offset-w": [{
        "ring-offset": [isNumber, isArbitraryLength]
      }],
      /**
       * Ring Offset Color
       * @see https://v3.tailwindcss.com/docs/ring-offset-color
       * @deprecated since Tailwind CSS v4.0.0
       * @see https://github.com/tailwindlabs/tailwindcss/blob/v4.0.0/packages/tailwindcss/src/utilities.ts#L4158
       */
      "ring-offset-color": [{
        "ring-offset": scaleColor()
      }],
      /**
       * Inset Ring Width
       * @see https://tailwindcss.com/docs/box-shadow#adding-an-inset-ring
       */
      "inset-ring-w": [{
        "inset-ring": scaleBorderWidth()
      }],
      /**
       * Inset Ring Color
       * @see https://tailwindcss.com/docs/box-shadow#setting-the-inset-ring-color
       */
      "inset-ring-color": [{
        "inset-ring": scaleColor()
      }],
      /**
       * Text Shadow
       * @see https://tailwindcss.com/docs/text-shadow
       */
      "text-shadow": [{
        "text-shadow": ["none", themeTextShadow, isArbitraryVariableShadow, isArbitraryShadow]
      }],
      /**
       * Text Shadow Color
       * @see https://tailwindcss.com/docs/text-shadow#setting-the-shadow-color
       */
      "text-shadow-color": [{
        "text-shadow": scaleColor()
      }],
      /**
       * Opacity
       * @see https://tailwindcss.com/docs/opacity
       */
      opacity: [{
        opacity: [isNumber, isArbitraryVariable, isArbitraryValue]
      }],
      /**
       * Mix Blend Mode
       * @see https://tailwindcss.com/docs/mix-blend-mode
       */
      "mix-blend": [{
        "mix-blend": [...scaleBlendMode(), "plus-darker", "plus-lighter"]
      }],
      /**
       * Background Blend Mode
       * @see https://tailwindcss.com/docs/background-blend-mode
       */
      "bg-blend": [{
        "bg-blend": scaleBlendMode()
      }],
      /**
       * Mask Clip
       * @see https://tailwindcss.com/docs/mask-clip
       */
      "mask-clip": [{
        "mask-clip": ["border", "padding", "content", "fill", "stroke", "view"]
      }, "mask-no-clip"],
      /**
       * Mask Composite
       * @see https://tailwindcss.com/docs/mask-composite
       */
      "mask-composite": [{
        mask: ["add", "subtract", "intersect", "exclude"]
      }],
      /**
       * Mask Image
       * @see https://tailwindcss.com/docs/mask-image
       */
      "mask-image-linear-pos": [{
        "mask-linear": [isNumber]
      }],
      "mask-image-linear-from-pos": [{
        "mask-linear-from": scaleMaskImagePosition()
      }],
      "mask-image-linear-to-pos": [{
        "mask-linear-to": scaleMaskImagePosition()
      }],
      "mask-image-linear-from-color": [{
        "mask-linear-from": scaleColor()
      }],
      "mask-image-linear-to-color": [{
        "mask-linear-to": scaleColor()
      }],
      "mask-image-t-from-pos": [{
        "mask-t-from": scaleMaskImagePosition()
      }],
      "mask-image-t-to-pos": [{
        "mask-t-to": scaleMaskImagePosition()
      }],
      "mask-image-t-from-color": [{
        "mask-t-from": scaleColor()
      }],
      "mask-image-t-to-color": [{
        "mask-t-to": scaleColor()
      }],
      "mask-image-r-from-pos": [{
        "mask-r-from": scaleMaskImagePosition()
      }],
      "mask-image-r-to-pos": [{
        "mask-r-to": scaleMaskImagePosition()
      }],
      "mask-image-r-from-color": [{
        "mask-r-from": scaleColor()
      }],
      "mask-image-r-to-color": [{
        "mask-r-to": scaleColor()
      }],
      "mask-image-b-from-pos": [{
        "mask-b-from": scaleMaskImagePosition()
      }],
      "mask-image-b-to-pos": [{
        "mask-b-to": scaleMaskImagePosition()
      }],
      "mask-image-b-from-color": [{
        "mask-b-from": scaleColor()
      }],
      "mask-image-b-to-color": [{
        "mask-b-to": scaleColor()
      }],
      "mask-image-l-from-pos": [{
        "mask-l-from": scaleMaskImagePosition()
      }],
      "mask-image-l-to-pos": [{
        "mask-l-to": scaleMaskImagePosition()
      }],
      "mask-image-l-from-color": [{
        "mask-l-from": scaleColor()
      }],
      "mask-image-l-to-color": [{
        "mask-l-to": scaleColor()
      }],
      "mask-image-x-from-pos": [{
        "mask-x-from": scaleMaskImagePosition()
      }],
      "mask-image-x-to-pos": [{
        "mask-x-to": scaleMaskImagePosition()
      }],
      "mask-image-x-from-color": [{
        "mask-x-from": scaleColor()
      }],
      "mask-image-x-to-color": [{
        "mask-x-to": scaleColor()
      }],
      "mask-image-y-from-pos": [{
        "mask-y-from": scaleMaskImagePosition()
      }],
      "mask-image-y-to-pos": [{
        "mask-y-to": scaleMaskImagePosition()
      }],
      "mask-image-y-from-color": [{
        "mask-y-from": scaleColor()
      }],
      "mask-image-y-to-color": [{
        "mask-y-to": scaleColor()
      }],
      "mask-image-radial": [{
        "mask-radial": [isArbitraryVariable, isArbitraryValue]
      }],
      "mask-image-radial-from-pos": [{
        "mask-radial-from": scaleMaskImagePosition()
      }],
      "mask-image-radial-to-pos": [{
        "mask-radial-to": scaleMaskImagePosition()
      }],
      "mask-image-radial-from-color": [{
        "mask-radial-from": scaleColor()
      }],
      "mask-image-radial-to-color": [{
        "mask-radial-to": scaleColor()
      }],
      "mask-image-radial-shape": [{
        "mask-radial": ["circle", "ellipse"]
      }],
      "mask-image-radial-size": [{
        "mask-radial": [{
          closest: ["side", "corner"],
          farthest: ["side", "corner"]
        }]
      }],
      "mask-image-radial-pos": [{
        "mask-radial-at": scalePosition()
      }],
      "mask-image-conic-pos": [{
        "mask-conic": [isNumber]
      }],
      "mask-image-conic-from-pos": [{
        "mask-conic-from": scaleMaskImagePosition()
      }],
      "mask-image-conic-to-pos": [{
        "mask-conic-to": scaleMaskImagePosition()
      }],
      "mask-image-conic-from-color": [{
        "mask-conic-from": scaleColor()
      }],
      "mask-image-conic-to-color": [{
        "mask-conic-to": scaleColor()
      }],
      /**
       * Mask Mode
       * @see https://tailwindcss.com/docs/mask-mode
       */
      "mask-mode": [{
        mask: ["alpha", "luminance", "match"]
      }],
      /**
       * Mask Origin
       * @see https://tailwindcss.com/docs/mask-origin
       */
      "mask-origin": [{
        "mask-origin": ["border", "padding", "content", "fill", "stroke", "view"]
      }],
      /**
       * Mask Position
       * @see https://tailwindcss.com/docs/mask-position
       */
      "mask-position": [{
        mask: scaleBgPosition()
      }],
      /**
       * Mask Repeat
       * @see https://tailwindcss.com/docs/mask-repeat
       */
      "mask-repeat": [{
        mask: scaleBgRepeat()
      }],
      /**
       * Mask Size
       * @see https://tailwindcss.com/docs/mask-size
       */
      "mask-size": [{
        mask: scaleBgSize()
      }],
      /**
       * Mask Type
       * @see https://tailwindcss.com/docs/mask-type
       */
      "mask-type": [{
        "mask-type": ["alpha", "luminance"]
      }],
      /**
       * Mask Image
       * @see https://tailwindcss.com/docs/mask-image
       */
      "mask-image": [{
        mask: ["none", isArbitraryVariable, isArbitraryValue]
      }],
      // ---------------
      // --- Filters ---
      // ---------------
      /**
       * Filter
       * @see https://tailwindcss.com/docs/filter
       */
      filter: [{
        filter: [
          // Deprecated since Tailwind CSS v3.0.0
          "",
          "none",
          isArbitraryVariable,
          isArbitraryValue
        ]
      }],
      /**
       * Blur
       * @see https://tailwindcss.com/docs/blur
       */
      blur: [{
        blur: scaleBlur()
      }],
      /**
       * Brightness
       * @see https://tailwindcss.com/docs/brightness
       */
      brightness: [{
        brightness: [isNumber, isArbitraryVariable, isArbitraryValue]
      }],
      /**
       * Contrast
       * @see https://tailwindcss.com/docs/contrast
       */
      contrast: [{
        contrast: [isNumber, isArbitraryVariable, isArbitraryValue]
      }],
      /**
       * Drop Shadow
       * @see https://tailwindcss.com/docs/drop-shadow
       */
      "drop-shadow": [{
        "drop-shadow": [
          // Deprecated since Tailwind CSS v4.0.0
          "",
          "none",
          themeDropShadow,
          isArbitraryVariableShadow,
          isArbitraryShadow
        ]
      }],
      /**
       * Drop Shadow Color
       * @see https://tailwindcss.com/docs/filter-drop-shadow#setting-the-shadow-color
       */
      "drop-shadow-color": [{
        "drop-shadow": scaleColor()
      }],
      /**
       * Grayscale
       * @see https://tailwindcss.com/docs/grayscale
       */
      grayscale: [{
        grayscale: ["", isNumber, isArbitraryVariable, isArbitraryValue]
      }],
      /**
       * Hue Rotate
       * @see https://tailwindcss.com/docs/hue-rotate
       */
      "hue-rotate": [{
        "hue-rotate": [isNumber, isArbitraryVariable, isArbitraryValue]
      }],
      /**
       * Invert
       * @see https://tailwindcss.com/docs/invert
       */
      invert: [{
        invert: ["", isNumber, isArbitraryVariable, isArbitraryValue]
      }],
      /**
       * Saturate
       * @see https://tailwindcss.com/docs/saturate
       */
      saturate: [{
        saturate: [isNumber, isArbitraryVariable, isArbitraryValue]
      }],
      /**
       * Sepia
       * @see https://tailwindcss.com/docs/sepia
       */
      sepia: [{
        sepia: ["", isNumber, isArbitraryVariable, isArbitraryValue]
      }],
      /**
       * Backdrop Filter
       * @see https://tailwindcss.com/docs/backdrop-filter
       */
      "backdrop-filter": [{
        "backdrop-filter": [
          // Deprecated since Tailwind CSS v3.0.0
          "",
          "none",
          isArbitraryVariable,
          isArbitraryValue
        ]
      }],
      /**
       * Backdrop Blur
       * @see https://tailwindcss.com/docs/backdrop-blur
       */
      "backdrop-blur": [{
        "backdrop-blur": scaleBlur()
      }],
      /**
       * Backdrop Brightness
       * @see https://tailwindcss.com/docs/backdrop-brightness
       */
      "backdrop-brightness": [{
        "backdrop-brightness": [isNumber, isArbitraryVariable, isArbitraryValue]
      }],
      /**
       * Backdrop Contrast
       * @see https://tailwindcss.com/docs/backdrop-contrast
       */
      "backdrop-contrast": [{
        "backdrop-contrast": [isNumber, isArbitraryVariable, isArbitraryValue]
      }],
      /**
       * Backdrop Grayscale
       * @see https://tailwindcss.com/docs/backdrop-grayscale
       */
      "backdrop-grayscale": [{
        "backdrop-grayscale": ["", isNumber, isArbitraryVariable, isArbitraryValue]
      }],
      /**
       * Backdrop Hue Rotate
       * @see https://tailwindcss.com/docs/backdrop-hue-rotate
       */
      "backdrop-hue-rotate": [{
        "backdrop-hue-rotate": [isNumber, isArbitraryVariable, isArbitraryValue]
      }],
      /**
       * Backdrop Invert
       * @see https://tailwindcss.com/docs/backdrop-invert
       */
      "backdrop-invert": [{
        "backdrop-invert": ["", isNumber, isArbitraryVariable, isArbitraryValue]
      }],
      /**
       * Backdrop Opacity
       * @see https://tailwindcss.com/docs/backdrop-opacity
       */
      "backdrop-opacity": [{
        "backdrop-opacity": [isNumber, isArbitraryVariable, isArbitraryValue]
      }],
      /**
       * Backdrop Saturate
       * @see https://tailwindcss.com/docs/backdrop-saturate
       */
      "backdrop-saturate": [{
        "backdrop-saturate": [isNumber, isArbitraryVariable, isArbitraryValue]
      }],
      /**
       * Backdrop Sepia
       * @see https://tailwindcss.com/docs/backdrop-sepia
       */
      "backdrop-sepia": [{
        "backdrop-sepia": ["", isNumber, isArbitraryVariable, isArbitraryValue]
      }],
      // --------------
      // --- Tables ---
      // --------------
      /**
       * Border Collapse
       * @see https://tailwindcss.com/docs/border-collapse
       */
      "border-collapse": [{
        border: ["collapse", "separate"]
      }],
      /**
       * Border Spacing
       * @see https://tailwindcss.com/docs/border-spacing
       */
      "border-spacing": [{
        "border-spacing": scaleUnambiguousSpacing()
      }],
      /**
       * Border Spacing X
       * @see https://tailwindcss.com/docs/border-spacing
       */
      "border-spacing-x": [{
        "border-spacing-x": scaleUnambiguousSpacing()
      }],
      /**
       * Border Spacing Y
       * @see https://tailwindcss.com/docs/border-spacing
       */
      "border-spacing-y": [{
        "border-spacing-y": scaleUnambiguousSpacing()
      }],
      /**
       * Table Layout
       * @see https://tailwindcss.com/docs/table-layout
       */
      "table-layout": [{
        table: ["auto", "fixed"]
      }],
      /**
       * Caption Side
       * @see https://tailwindcss.com/docs/caption-side
       */
      caption: [{
        caption: ["top", "bottom"]
      }],
      // ---------------------------------
      // --- Transitions and Animation ---
      // ---------------------------------
      /**
       * Transition Property
       * @see https://tailwindcss.com/docs/transition-property
       */
      transition: [{
        transition: ["", "all", "colors", "opacity", "shadow", "transform", "none", isArbitraryVariable, isArbitraryValue]
      }],
      /**
       * Transition Behavior
       * @see https://tailwindcss.com/docs/transition-behavior
       */
      "transition-behavior": [{
        transition: ["normal", "discrete"]
      }],
      /**
       * Transition Duration
       * @see https://tailwindcss.com/docs/transition-duration
       */
      duration: [{
        duration: [isNumber, "initial", isArbitraryVariable, isArbitraryValue]
      }],
      /**
       * Transition Timing Function
       * @see https://tailwindcss.com/docs/transition-timing-function
       */
      ease: [{
        ease: ["linear", "initial", themeEase, isArbitraryVariable, isArbitraryValue]
      }],
      /**
       * Transition Delay
       * @see https://tailwindcss.com/docs/transition-delay
       */
      delay: [{
        delay: [isNumber, isArbitraryVariable, isArbitraryValue]
      }],
      /**
       * Animation
       * @see https://tailwindcss.com/docs/animation
       */
      animate: [{
        animate: ["none", themeAnimate, isArbitraryVariable, isArbitraryValue]
      }],
      // ------------------
      // --- Transforms ---
      // ------------------
      /**
       * Backface Visibility
       * @see https://tailwindcss.com/docs/backface-visibility
       */
      backface: [{
        backface: ["hidden", "visible"]
      }],
      /**
       * Perspective
       * @see https://tailwindcss.com/docs/perspective
       */
      perspective: [{
        perspective: [themePerspective, isArbitraryVariable, isArbitraryValue]
      }],
      /**
       * Perspective Origin
       * @see https://tailwindcss.com/docs/perspective-origin
       */
      "perspective-origin": [{
        "perspective-origin": scalePositionWithArbitrary()
      }],
      /**
       * Rotate
       * @see https://tailwindcss.com/docs/rotate
       */
      rotate: [{
        rotate: scaleRotate()
      }],
      /**
       * Rotate X
       * @see https://tailwindcss.com/docs/rotate
       */
      "rotate-x": [{
        "rotate-x": scaleRotate()
      }],
      /**
       * Rotate Y
       * @see https://tailwindcss.com/docs/rotate
       */
      "rotate-y": [{
        "rotate-y": scaleRotate()
      }],
      /**
       * Rotate Z
       * @see https://tailwindcss.com/docs/rotate
       */
      "rotate-z": [{
        "rotate-z": scaleRotate()
      }],
      /**
       * Scale
       * @see https://tailwindcss.com/docs/scale
       */
      scale: [{
        scale: scaleScale()
      }],
      /**
       * Scale X
       * @see https://tailwindcss.com/docs/scale
       */
      "scale-x": [{
        "scale-x": scaleScale()
      }],
      /**
       * Scale Y
       * @see https://tailwindcss.com/docs/scale
       */
      "scale-y": [{
        "scale-y": scaleScale()
      }],
      /**
       * Scale Z
       * @see https://tailwindcss.com/docs/scale
       */
      "scale-z": [{
        "scale-z": scaleScale()
      }],
      /**
       * Scale 3D
       * @see https://tailwindcss.com/docs/scale
       */
      "scale-3d": ["scale-3d"],
      /**
       * Skew
       * @see https://tailwindcss.com/docs/skew
       */
      skew: [{
        skew: scaleSkew()
      }],
      /**
       * Skew X
       * @see https://tailwindcss.com/docs/skew
       */
      "skew-x": [{
        "skew-x": scaleSkew()
      }],
      /**
       * Skew Y
       * @see https://tailwindcss.com/docs/skew
       */
      "skew-y": [{
        "skew-y": scaleSkew()
      }],
      /**
       * Transform
       * @see https://tailwindcss.com/docs/transform
       */
      transform: [{
        transform: [isArbitraryVariable, isArbitraryValue, "", "none", "gpu", "cpu"]
      }],
      /**
       * Transform Origin
       * @see https://tailwindcss.com/docs/transform-origin
       */
      "transform-origin": [{
        origin: scalePositionWithArbitrary()
      }],
      /**
       * Transform Style
       * @see https://tailwindcss.com/docs/transform-style
       */
      "transform-style": [{
        transform: ["3d", "flat"]
      }],
      /**
       * Translate
       * @see https://tailwindcss.com/docs/translate
       */
      translate: [{
        translate: scaleTranslate()
      }],
      /**
       * Translate X
       * @see https://tailwindcss.com/docs/translate
       */
      "translate-x": [{
        "translate-x": scaleTranslate()
      }],
      /**
       * Translate Y
       * @see https://tailwindcss.com/docs/translate
       */
      "translate-y": [{
        "translate-y": scaleTranslate()
      }],
      /**
       * Translate Z
       * @see https://tailwindcss.com/docs/translate
       */
      "translate-z": [{
        "translate-z": scaleTranslate()
      }],
      /**
       * Translate None
       * @see https://tailwindcss.com/docs/translate
       */
      "translate-none": ["translate-none"],
      // ---------------------
      // --- Interactivity ---
      // ---------------------
      /**
       * Accent Color
       * @see https://tailwindcss.com/docs/accent-color
       */
      accent: [{
        accent: scaleColor()
      }],
      /**
       * Appearance
       * @see https://tailwindcss.com/docs/appearance
       */
      appearance: [{
        appearance: ["none", "auto"]
      }],
      /**
       * Caret Color
       * @see https://tailwindcss.com/docs/just-in-time-mode#caret-color-utilities
       */
      "caret-color": [{
        caret: scaleColor()
      }],
      /**
       * Color Scheme
       * @see https://tailwindcss.com/docs/color-scheme
       */
      "color-scheme": [{
        scheme: ["normal", "dark", "light", "light-dark", "only-dark", "only-light"]
      }],
      /**
       * Cursor
       * @see https://tailwindcss.com/docs/cursor
       */
      cursor: [{
        cursor: ["auto", "default", "pointer", "wait", "text", "move", "help", "not-allowed", "none", "context-menu", "progress", "cell", "crosshair", "vertical-text", "alias", "copy", "no-drop", "grab", "grabbing", "all-scroll", "col-resize", "row-resize", "n-resize", "e-resize", "s-resize", "w-resize", "ne-resize", "nw-resize", "se-resize", "sw-resize", "ew-resize", "ns-resize", "nesw-resize", "nwse-resize", "zoom-in", "zoom-out", isArbitraryVariable, isArbitraryValue]
      }],
      /**
       * Field Sizing
       * @see https://tailwindcss.com/docs/field-sizing
       */
      "field-sizing": [{
        "field-sizing": ["fixed", "content"]
      }],
      /**
       * Pointer Events
       * @see https://tailwindcss.com/docs/pointer-events
       */
      "pointer-events": [{
        "pointer-events": ["auto", "none"]
      }],
      /**
       * Resize
       * @see https://tailwindcss.com/docs/resize
       */
      resize: [{
        resize: ["none", "", "y", "x"]
      }],
      /**
       * Scroll Behavior
       * @see https://tailwindcss.com/docs/scroll-behavior
       */
      "scroll-behavior": [{
        scroll: ["auto", "smooth"]
      }],
      /**
       * Scroll Margin
       * @see https://tailwindcss.com/docs/scroll-margin
       */
      "scroll-m": [{
        "scroll-m": scaleUnambiguousSpacing()
      }],
      /**
       * Scroll Margin X
       * @see https://tailwindcss.com/docs/scroll-margin
       */
      "scroll-mx": [{
        "scroll-mx": scaleUnambiguousSpacing()
      }],
      /**
       * Scroll Margin Y
       * @see https://tailwindcss.com/docs/scroll-margin
       */
      "scroll-my": [{
        "scroll-my": scaleUnambiguousSpacing()
      }],
      /**
       * Scroll Margin Start
       * @see https://tailwindcss.com/docs/scroll-margin
       */
      "scroll-ms": [{
        "scroll-ms": scaleUnambiguousSpacing()
      }],
      /**
       * Scroll Margin End
       * @see https://tailwindcss.com/docs/scroll-margin
       */
      "scroll-me": [{
        "scroll-me": scaleUnambiguousSpacing()
      }],
      /**
       * Scroll Margin Top
       * @see https://tailwindcss.com/docs/scroll-margin
       */
      "scroll-mt": [{
        "scroll-mt": scaleUnambiguousSpacing()
      }],
      /**
       * Scroll Margin Right
       * @see https://tailwindcss.com/docs/scroll-margin
       */
      "scroll-mr": [{
        "scroll-mr": scaleUnambiguousSpacing()
      }],
      /**
       * Scroll Margin Bottom
       * @see https://tailwindcss.com/docs/scroll-margin
       */
      "scroll-mb": [{
        "scroll-mb": scaleUnambiguousSpacing()
      }],
      /**
       * Scroll Margin Left
       * @see https://tailwindcss.com/docs/scroll-margin
       */
      "scroll-ml": [{
        "scroll-ml": scaleUnambiguousSpacing()
      }],
      /**
       * Scroll Padding
       * @see https://tailwindcss.com/docs/scroll-padding
       */
      "scroll-p": [{
        "scroll-p": scaleUnambiguousSpacing()
      }],
      /**
       * Scroll Padding X
       * @see https://tailwindcss.com/docs/scroll-padding
       */
      "scroll-px": [{
        "scroll-px": scaleUnambiguousSpacing()
      }],
      /**
       * Scroll Padding Y
       * @see https://tailwindcss.com/docs/scroll-padding
       */
      "scroll-py": [{
        "scroll-py": scaleUnambiguousSpacing()
      }],
      /**
       * Scroll Padding Start
       * @see https://tailwindcss.com/docs/scroll-padding
       */
      "scroll-ps": [{
        "scroll-ps": scaleUnambiguousSpacing()
      }],
      /**
       * Scroll Padding End
       * @see https://tailwindcss.com/docs/scroll-padding
       */
      "scroll-pe": [{
        "scroll-pe": scaleUnambiguousSpacing()
      }],
      /**
       * Scroll Padding Top
       * @see https://tailwindcss.com/docs/scroll-padding
       */
      "scroll-pt": [{
        "scroll-pt": scaleUnambiguousSpacing()
      }],
      /**
       * Scroll Padding Right
       * @see https://tailwindcss.com/docs/scroll-padding
       */
      "scroll-pr": [{
        "scroll-pr": scaleUnambiguousSpacing()
      }],
      /**
       * Scroll Padding Bottom
       * @see https://tailwindcss.com/docs/scroll-padding
       */
      "scroll-pb": [{
        "scroll-pb": scaleUnambiguousSpacing()
      }],
      /**
       * Scroll Padding Left
       * @see https://tailwindcss.com/docs/scroll-padding
       */
      "scroll-pl": [{
        "scroll-pl": scaleUnambiguousSpacing()
      }],
      /**
       * Scroll Snap Align
       * @see https://tailwindcss.com/docs/scroll-snap-align
       */
      "snap-align": [{
        snap: ["start", "end", "center", "align-none"]
      }],
      /**
       * Scroll Snap Stop
       * @see https://tailwindcss.com/docs/scroll-snap-stop
       */
      "snap-stop": [{
        snap: ["normal", "always"]
      }],
      /**
       * Scroll Snap Type
       * @see https://tailwindcss.com/docs/scroll-snap-type
       */
      "snap-type": [{
        snap: ["none", "x", "y", "both"]
      }],
      /**
       * Scroll Snap Type Strictness
       * @see https://tailwindcss.com/docs/scroll-snap-type
       */
      "snap-strictness": [{
        snap: ["mandatory", "proximity"]
      }],
      /**
       * Touch Action
       * @see https://tailwindcss.com/docs/touch-action
       */
      touch: [{
        touch: ["auto", "none", "manipulation"]
      }],
      /**
       * Touch Action X
       * @see https://tailwindcss.com/docs/touch-action
       */
      "touch-x": [{
        "touch-pan": ["x", "left", "right"]
      }],
      /**
       * Touch Action Y
       * @see https://tailwindcss.com/docs/touch-action
       */
      "touch-y": [{
        "touch-pan": ["y", "up", "down"]
      }],
      /**
       * Touch Action Pinch Zoom
       * @see https://tailwindcss.com/docs/touch-action
       */
      "touch-pz": ["touch-pinch-zoom"],
      /**
       * User Select
       * @see https://tailwindcss.com/docs/user-select
       */
      select: [{
        select: ["none", "text", "all", "auto"]
      }],
      /**
       * Will Change
       * @see https://tailwindcss.com/docs/will-change
       */
      "will-change": [{
        "will-change": ["auto", "scroll", "contents", "transform", isArbitraryVariable, isArbitraryValue]
      }],
      // -----------
      // --- SVG ---
      // -----------
      /**
       * Fill
       * @see https://tailwindcss.com/docs/fill
       */
      fill: [{
        fill: ["none", ...scaleColor()]
      }],
      /**
       * Stroke Width
       * @see https://tailwindcss.com/docs/stroke-width
       */
      "stroke-w": [{
        stroke: [isNumber, isArbitraryVariableLength, isArbitraryLength, isArbitraryNumber]
      }],
      /**
       * Stroke
       * @see https://tailwindcss.com/docs/stroke
       */
      stroke: [{
        stroke: ["none", ...scaleColor()]
      }],
      // ---------------------
      // --- Accessibility ---
      // ---------------------
      /**
       * Forced Color Adjust
       * @see https://tailwindcss.com/docs/forced-color-adjust
       */
      "forced-color-adjust": [{
        "forced-color-adjust": ["auto", "none"]
      }]
    },
    conflictingClassGroups: {
      overflow: ["overflow-x", "overflow-y"],
      overscroll: ["overscroll-x", "overscroll-y"],
      inset: ["inset-x", "inset-y", "start", "end", "top", "right", "bottom", "left"],
      "inset-x": ["right", "left"],
      "inset-y": ["top", "bottom"],
      flex: ["basis", "grow", "shrink"],
      gap: ["gap-x", "gap-y"],
      p: ["px", "py", "ps", "pe", "pt", "pr", "pb", "pl"],
      px: ["pr", "pl"],
      py: ["pt", "pb"],
      m: ["mx", "my", "ms", "me", "mt", "mr", "mb", "ml"],
      mx: ["mr", "ml"],
      my: ["mt", "mb"],
      size: ["w", "h"],
      "font-size": ["leading"],
      "fvn-normal": ["fvn-ordinal", "fvn-slashed-zero", "fvn-figure", "fvn-spacing", "fvn-fraction"],
      "fvn-ordinal": ["fvn-normal"],
      "fvn-slashed-zero": ["fvn-normal"],
      "fvn-figure": ["fvn-normal"],
      "fvn-spacing": ["fvn-normal"],
      "fvn-fraction": ["fvn-normal"],
      "line-clamp": ["display", "overflow"],
      rounded: ["rounded-s", "rounded-e", "rounded-t", "rounded-r", "rounded-b", "rounded-l", "rounded-ss", "rounded-se", "rounded-ee", "rounded-es", "rounded-tl", "rounded-tr", "rounded-br", "rounded-bl"],
      "rounded-s": ["rounded-ss", "rounded-es"],
      "rounded-e": ["rounded-se", "rounded-ee"],
      "rounded-t": ["rounded-tl", "rounded-tr"],
      "rounded-r": ["rounded-tr", "rounded-br"],
      "rounded-b": ["rounded-br", "rounded-bl"],
      "rounded-l": ["rounded-tl", "rounded-bl"],
      "border-spacing": ["border-spacing-x", "border-spacing-y"],
      "border-w": ["border-w-x", "border-w-y", "border-w-s", "border-w-e", "border-w-t", "border-w-r", "border-w-b", "border-w-l"],
      "border-w-x": ["border-w-r", "border-w-l"],
      "border-w-y": ["border-w-t", "border-w-b"],
      "border-color": ["border-color-x", "border-color-y", "border-color-s", "border-color-e", "border-color-t", "border-color-r", "border-color-b", "border-color-l"],
      "border-color-x": ["border-color-r", "border-color-l"],
      "border-color-y": ["border-color-t", "border-color-b"],
      translate: ["translate-x", "translate-y", "translate-none"],
      "translate-none": ["translate", "translate-x", "translate-y", "translate-z"],
      "scroll-m": ["scroll-mx", "scroll-my", "scroll-ms", "scroll-me", "scroll-mt", "scroll-mr", "scroll-mb", "scroll-ml"],
      "scroll-mx": ["scroll-mr", "scroll-ml"],
      "scroll-my": ["scroll-mt", "scroll-mb"],
      "scroll-p": ["scroll-px", "scroll-py", "scroll-ps", "scroll-pe", "scroll-pt", "scroll-pr", "scroll-pb", "scroll-pl"],
      "scroll-px": ["scroll-pr", "scroll-pl"],
      "scroll-py": ["scroll-pt", "scroll-pb"],
      touch: ["touch-x", "touch-y", "touch-pz"],
      "touch-x": ["touch"],
      "touch-y": ["touch"],
      "touch-pz": ["touch"]
    },
    conflictingClassGroupModifiers: {
      "font-size": ["leading"]
    },
    orderSensitiveModifiers: ["*", "**", "after", "backdrop", "before", "details-content", "file", "first-letter", "first-line", "marker", "placeholder", "selection"]
  };
}, mergeConfigs = (baseConfig, {
  cacheSize,
  prefix,
  experimentalParseClassName,
  extend = {},
  override = {}
}) => (overrideProperty(baseConfig, "cacheSize", cacheSize), overrideProperty(baseConfig, "prefix", prefix), overrideProperty(baseConfig, "experimentalParseClassName", experimentalParseClassName), overrideConfigProperties(baseConfig.theme, override.theme), overrideConfigProperties(baseConfig.classGroups, override.classGroups), overrideConfigProperties(baseConfig.conflictingClassGroups, override.conflictingClassGroups), overrideConfigProperties(baseConfig.conflictingClassGroupModifiers, override.conflictingClassGroupModifiers), overrideProperty(baseConfig, "orderSensitiveModifiers", override.orderSensitiveModifiers), mergeConfigProperties(baseConfig.theme, extend.theme), mergeConfigProperties(baseConfig.classGroups, extend.classGroups), mergeConfigProperties(baseConfig.conflictingClassGroups, extend.conflictingClassGroups), mergeConfigProperties(baseConfig.conflictingClassGroupModifiers, extend.conflictingClassGroupModifiers), mergeArrayProperties(baseConfig, extend, "orderSensitiveModifiers"), baseConfig), overrideProperty = (baseObject, overrideKey, overrideValue) => {
  overrideValue !== void 0 && (baseObject[overrideKey] = overrideValue);
}, overrideConfigProperties = (baseObject, overrideObject) => {
  if (overrideObject)
    for (const key in overrideObject)
      overrideProperty(baseObject, key, overrideObject[key]);
}, mergeConfigProperties = (baseObject, mergeObject) => {
  if (mergeObject)
    for (const key in mergeObject)
      mergeArrayProperties(baseObject, mergeObject, key);
}, mergeArrayProperties = (baseObject, mergeObject, key) => {
  const mergeValue = mergeObject[key];
  mergeValue !== void 0 && (baseObject[key] = baseObject[key] ? baseObject[key].concat(mergeValue) : mergeValue);
}, extendTailwindMerge = (configExtension, ...createConfig) => typeof configExtension == "function" ? createTailwindMerge(getDefaultConfig, configExtension, ...createConfig) : createTailwindMerge(() => mergeConfigs(getDefaultConfig(), configExtension), ...createConfig);
function getElementAtPoint(x, y) {
  return window.parent.document.elementsFromPoint(
    x,
    y
  ).find(
    (element) => !element.closest("svg") && !element.closest("STAGEWISE-TOOLBAR") && isElementAtPoint(element, x, y)
  ) || window.parent.document.body;
}
const isElementAtPoint = (element, clientX, clientY) => {
  const boundingRect = element.getBoundingClientRect(), isInHorizontalBounds = clientX > boundingRect.left && clientX < boundingRect.left + boundingRect.width, isInVerticalBounds = clientY > boundingRect.top && clientY < boundingRect.top + boundingRect.height;
  return isInHorizontalBounds && isInVerticalBounds;
};
var HotkeyActions = /* @__PURE__ */ ((HotkeyActions2) => (HotkeyActions2[HotkeyActions2.ESC = 0] = "ESC", HotkeyActions2[HotkeyActions2.CTRL_ALT_C = 1] = "CTRL_ALT_C", HotkeyActions2))(HotkeyActions || {});
const hotkeyActionDefinitions = {
  0: {
    keyComboDefault: "Esc",
    keyComboMac: "esc",
    isEventMatching: (ev) => ev.code === "Escape"
  },
  1: {
    keyComboDefault: "Ctrl+Alt+C",
    keyComboMac: "⌘+⌥+C",
    isEventMatching: (ev) => ev.code === "KeyC" && (ev.ctrlKey || ev.metaKey) && ev.altKey
  }
}, customTwMerge = extendTailwindMerge({
  extend: {
    classGroups: {
      "bg-image": [
        "bg-gradient",
        "bg-gradient-light-1",
        "bg-gradient-light-2",
        "bg-gradient-light-3"
      ]
    }
  }
});
function cn(...inputs) {
  return customTwMerge(clsx(inputs));
}
const generateId = (length = 16) => Math.random().toString(36).substring(2, length + 2);
function Panel({
  children,
  alwaysFullHeight = !1
}) {
  return console.log("Hello from Panel!"), /* @__PURE__ */ jsx(
    "section",
    {
      className: cn(
        "flex max-h-full min-h-48 flex-col items-stretch justify-start rounded-2xl border border-border/30 bg-zinc-50/80 p-4 shadow-md backdrop-blur-md",
        alwaysFullHeight && "h-full"
      ),
      children
    }
  );
}
function PanelHeader({
  title,
  description
}) {
  return /* @__PURE__ */ jsxs("header", { className: "mb-3 flex flex-col gap-1 text-zinc-950", children: [
    title && /* @__PURE__ */ jsx("h3", { className: "font-semibold text-lg ", children: title }),
    description && /* @__PURE__ */ jsx("p", { className: "font-medium text-zinc-600", children: description })
  ] });
}
function PanelContent({ children }) {
  return /* @__PURE__ */ jsx("div", { className: "-mx-4 flex flex-col gap-2 overflow-y-auto border-border/30 border-t px-4 pt-4 text-zinc-950", children });
}
function PanelFooter({ children }) {
  return /* @__PURE__ */ jsx("footer", { className: "flex flex-row items-end justify-end gap-2 text-sm text-zinc-600", children });
}
export {
  ConfigProvider as C,
  HotkeyActions as H,
  PluginProvider as P,
  SRPCBridgeProvider as S,
  VSCodeProvider as V,
  useSRPCBridge as a,
  usePlugins as b,
  cn as c,
  Panel as d,
  PanelHeader as e,
  PanelContent as f,
  generateId as g,
  hotkeyActionDefinitions as h,
  getElementAtPoint as i,
  clsx as j,
  PanelFooter as k,
  useVSCode as u
};
`,"index.js":`import React, { createContext, useState, createRef, useEffect, useCallback, useContext, useMemo, useRef, useLayoutEffect, forwardRef, Fragment, isValidElement, cloneElement, createElement, useId, StrictMode } from "react";
import { createRoot } from "react-dom/client";
import { jsx, jsxs, Fragment as Fragment$1 } from "react/jsx-runtime";
import { u as useVSCode, a as useSRPCBridge, g as generateId, b as usePlugins, C as ConfigProvider, V as VSCodeProvider, S as SRPCBridgeProvider, P as PluginProvider, H as HotkeyActions, h as hotkeyActionDefinitions, c as cn, d as Panel, e as PanelHeader, f as PanelContent, i as getElementAtPoint } from "panel-BpInY05d.js";
import config from "@stagewise/toolbar/config";
const appStyle = '/*! tailwindcss v4.1.11 | MIT License | https://tailwindcss.com */@layer properties{@supports ((-webkit-hyphens:none) and (not (margin-trim:inline))) or ((-moz-orient:inline) and (not (color:rgb(from red r g b)))){*,:before,:after,::backdrop{--tw-scale-x:1;--tw-scale-y:1;--tw-scale-z:1;--tw-space-y-reverse:0;--tw-space-x-reverse:0;--tw-divide-y-reverse:0;--tw-border-style:solid;--tw-gradient-position:initial;--tw-gradient-from:#0000;--tw-gradient-via:#0000;--tw-gradient-to:#0000;--tw-gradient-stops:initial;--tw-gradient-via-stops:initial;--tw-gradient-from-position:0%;--tw-gradient-via-position:50%;--tw-gradient-to-position:100%;--tw-font-weight:initial;--tw-shadow:0 0 #0000;--tw-shadow-color:initial;--tw-shadow-alpha:100%;--tw-inset-shadow:0 0 #0000;--tw-inset-shadow-color:initial;--tw-inset-shadow-alpha:100%;--tw-ring-color:initial;--tw-ring-shadow:0 0 #0000;--tw-inset-ring-color:initial;--tw-inset-ring-shadow:0 0 #0000;--tw-ring-inset:initial;--tw-ring-offset-width:0px;--tw-ring-offset-color:#fff;--tw-ring-offset-shadow:0 0 #0000;--tw-outline-style:solid;--tw-blur:initial;--tw-brightness:initial;--tw-contrast:initial;--tw-grayscale:initial;--tw-hue-rotate:initial;--tw-invert:initial;--tw-opacity:initial;--tw-saturate:initial;--tw-sepia:initial;--tw-drop-shadow:initial;--tw-drop-shadow-color:initial;--tw-drop-shadow-alpha:100%;--tw-drop-shadow-size:initial;--tw-backdrop-blur:initial;--tw-backdrop-brightness:initial;--tw-backdrop-contrast:initial;--tw-backdrop-grayscale:initial;--tw-backdrop-hue-rotate:initial;--tw-backdrop-invert:initial;--tw-backdrop-opacity:initial;--tw-backdrop-saturate:initial;--tw-backdrop-sepia:initial;--tw-duration:initial;--tw-ease:initial}}}@layer theme{:root,:host{--font-sans:ui-sans-serif,system-ui,sans-serif,"Apple Color Emoji","Segoe UI Emoji","Segoe UI Symbol","Noto Color Emoji";--font-mono:ui-monospace,SFMono-Regular,Menlo,Monaco,Consolas,"Liberation Mono","Courier New",monospace;--color-red-100:oklch(93.6% .032 17.717);--color-red-200:oklch(88.5% .062 18.334);--color-red-500:oklch(63.7% .237 25.331);--color-red-600:oklch(57.7% .245 27.325);--color-red-700:oklch(50.5% .213 27.518);--color-orange-50:oklch(98% .016 73.684);--color-orange-100:oklch(95.4% .038 75.164);--color-orange-200:oklch(90.1% .076 70.697);--color-orange-300:oklch(83.7% .128 66.29);--color-orange-500:oklch(70.5% .213 47.604);--color-orange-600:oklch(64.6% .222 41.116);--color-orange-700:oklch(55.3% .195 38.402);--color-orange-800:oklch(47% .157 37.304);--color-amber-50:oklch(98.7% .022 95.277);--color-amber-800:oklch(47.3% .137 46.201);--color-yellow-500:oklch(79.5% .184 86.047);--color-green-500:oklch(72.3% .219 149.579);--color-green-600:oklch(62.7% .194 149.214);--color-teal-500:oklch(70.4% .14 182.503);--color-sky-600:oklch(58.8% .158 241.966);--color-sky-700:oklch(50% .134 242.749);--color-blue-50:oklch(97% .014 254.604);--color-blue-100:oklch(93.2% .032 255.585);--color-blue-200:oklch(88.2% .059 254.128);--color-blue-300:oklch(80.9% .105 251.813);--color-blue-500:oklch(62.3% .214 259.815);--color-blue-600:oklch(54.6% .245 262.881);--color-blue-700:oklch(48.8% .243 264.376);--color-blue-800:oklch(42.4% .199 265.638);--color-indigo-700:oklch(45.7% .24 277.023);--color-indigo-950:oklch(25.7% .09 281.288);--color-violet-700:oklch(49.1% .27 292.581);--color-purple-500:oklch(62.7% .265 303.9);--color-fuchsia-700:oklch(51.8% .253 323.949);--color-pink-500:oklch(65.6% .241 354.308);--color-rose-600:oklch(58.6% .253 17.585);--color-zinc-50:oklch(98.5% 0 0);--color-zinc-100:oklch(96.7% .001 286.375);--color-zinc-300:oklch(87.1% .006 286.286);--color-zinc-400:oklch(70.5% .015 286.067);--color-zinc-500:oklch(55.2% .016 285.938);--color-zinc-600:oklch(44.2% .017 285.786);--color-zinc-700:oklch(37% .013 285.805);--color-zinc-900:oklch(21% .006 285.885);--color-zinc-950:oklch(14.1% .005 285.823);--color-black:#000;--color-white:#fff;--spacing:.25rem;--text-xs:.75rem;--text-xs--line-height:calc(1/.75);--text-sm:.875rem;--text-sm--line-height:calc(1.25/.875);--text-base:1rem;--text-base--line-height: 1.5 ;--text-lg:1.125rem;--text-lg--line-height:calc(1.75/1.125);--font-weight-normal:400;--font-weight-medium:500;--font-weight-semibold:600;--font-weight-bold:700;--radius-md:.375rem;--radius-lg:.5rem;--radius-2xl:1rem;--radius-3xl:1.5rem;--drop-shadow-xs:0 1px 1px #0000000d;--drop-shadow-md:0 3px 3px #0000001f;--drop-shadow-xl:0 9px 7px #0000001a;--ease-out:cubic-bezier(0,0,.2,1);--animate-spin:spin 1s linear infinite;--animate-pulse:pulse 2s cubic-bezier(.4,0,.6,1)infinite;--blur-md:12px;--default-transition-duration:.15s;--default-transition-timing-function:cubic-bezier(.4,0,.2,1);--default-font-family:var(--font-sans);--default-mono-font-family:var(--font-mono);--color-background:var(--color-white);--color-foreground:var(--color-zinc-950);--color-border:var(--color-zinc-500)}}@layer base{*,:after,:before,::backdrop{box-sizing:border-box;border:0 solid;margin:0;padding:0}::file-selector-button{box-sizing:border-box;border:0 solid;margin:0;padding:0}html,:host{-webkit-text-size-adjust:100%;-moz-tab-size:4;-o-tab-size:4;tab-size:4;line-height:1.5;font-family:var(--default-font-family,ui-sans-serif,system-ui,sans-serif,"Apple Color Emoji","Segoe UI Emoji","Segoe UI Symbol","Noto Color Emoji");font-feature-settings:var(--default-font-feature-settings,normal);font-variation-settings:var(--default-font-variation-settings,normal);-webkit-tap-highlight-color:transparent}hr{height:0;color:inherit;border-top-width:1px}abbr:where([title]){-webkit-text-decoration:underline dotted;text-decoration:underline dotted}h1,h2,h3,h4,h5,h6{font-size:inherit;font-weight:inherit}a{color:inherit;-webkit-text-decoration:inherit;text-decoration:inherit}b,strong{font-weight:bolder}code,kbd,samp,pre{font-family:var(--default-mono-font-family,ui-monospace,SFMono-Regular,Menlo,Monaco,Consolas,"Liberation Mono","Courier New",monospace);font-feature-settings:var(--default-mono-font-feature-settings,normal);font-variation-settings:var(--default-mono-font-variation-settings,normal);font-size:1em}small{font-size:80%}sub,sup{vertical-align:baseline;font-size:75%;line-height:0;position:relative}sub{bottom:-.25em}sup{top:-.5em}table{text-indent:0;border-color:inherit;border-collapse:collapse}:-moz-focusring{outline:auto}progress{vertical-align:baseline}summary{display:list-item}ol,ul,menu{list-style:none}img,svg,video,canvas,audio,iframe,embed,object{vertical-align:middle;display:block}img,video{max-width:100%;height:auto}button,input,select,optgroup,textarea{font:inherit;font-feature-settings:inherit;font-variation-settings:inherit;letter-spacing:inherit;color:inherit;opacity:1;background-color:#0000;border-radius:0}::file-selector-button{font:inherit;font-feature-settings:inherit;font-variation-settings:inherit;letter-spacing:inherit;color:inherit;opacity:1;background-color:#0000;border-radius:0}:where(select:is([multiple],[size])) optgroup{font-weight:bolder}:where(select:is([multiple],[size])) optgroup option{padding-inline-start:20px}::file-selector-button{margin-inline-end:4px}::-moz-placeholder{opacity:1}::placeholder{opacity:1}@supports (not (-webkit-appearance:-apple-pay-button)) or (contain-intrinsic-size:1px){::-moz-placeholder{color:currentColor}::placeholder{color:currentColor}@supports (color:color-mix(in lab,red,red)){::-moz-placeholder{color:color-mix(in oklab,currentcolor 50%,transparent)}::placeholder{color:color-mix(in oklab,currentcolor 50%,transparent)}}}textarea{resize:vertical}::-webkit-search-decoration{-webkit-appearance:none}::-webkit-date-and-time-value{min-height:1lh;text-align:inherit}::-webkit-datetime-edit{display:inline-flex}::-webkit-datetime-edit-fields-wrapper{padding:0}::-webkit-datetime-edit{padding-block:0}::-webkit-datetime-edit-year-field{padding-block:0}::-webkit-datetime-edit-month-field{padding-block:0}::-webkit-datetime-edit-day-field{padding-block:0}::-webkit-datetime-edit-hour-field{padding-block:0}::-webkit-datetime-edit-minute-field{padding-block:0}::-webkit-datetime-edit-second-field{padding-block:0}::-webkit-datetime-edit-millisecond-field{padding-block:0}::-webkit-datetime-edit-meridiem-field{padding-block:0}:-moz-ui-invalid{box-shadow:none}button,input:where([type=button],[type=reset],[type=submit]){-webkit-appearance:button;-moz-appearance:button;appearance:button}::file-selector-button{-webkit-appearance:button;-moz-appearance:button;appearance:button}::-webkit-inner-spin-button{height:auto}::-webkit-outer-spin-button{height:auto}[hidden]:where(:not([hidden=until-found])){display:none!important}*{min-width:0;min-height:0;position:relative}body{all:initial;color:var(--color-zinc-950);letter-spacing:normal!important;font-family:Inter,Noto Color Emoji,-apple-system,BlinkMacSystemFont,Segoe UI,Roboto,SF Compact,SF Pro,Helvetica Neue,sans-serif!important;font-weight:400!important;line-height:normal!important}@supports (font-variation-settings:normal){body{font-optical-sizing:auto!important;font-family:InterVariable,Noto Color Emoji,-apple-system,BlinkMacSystemFont,Segoe UI,Roboto,SF Compact,SF Pro,Helvetica Neue,sans-serif!important}}}@layer components{.chat-loading-gradient{background:linear-gradient(#f8fafccc,#f8fafccc) padding-box padding-box,linear-gradient(45deg,#8b5cf6,#06b6d4,#8b5cf6) 0 0/400% 400% border-box;border:2px solid #0000;animation:2s infinite gradient-animation}.chat-success-border{animation:2s ease-out blink-green-fade}.chat-error-border{animation:1s ease-out blink-red-fade}@keyframes blink-green-fade{0%,50%{box-shadow:0 0 0 2px #22c55eb3}to{box-shadow:0 0 0 2px #22c55e00}}@keyframes blink-red-fade{0%,50%{box-shadow:0 0 0 2px #ef4444}to{box-shadow:0 0 0 2px #ef444400}}}@layer utilities{.pointer-events-auto{pointer-events:auto}.pointer-events-none{pointer-events:none}.visible{visibility:visible}.absolute{position:absolute}.fixed{position:fixed}.relative{position:relative}.inset-0{inset:calc(var(--spacing)*0)}.inset-4{inset:calc(var(--spacing)*4)}.top-0{top:calc(var(--spacing)*0)}.top-0\\\\.5{top:calc(var(--spacing)*.5)}.top-1\\\\/2{top:50%}.top-\\\\[-20\\\\%\\\\]{top:-20%}.top-\\\\[25\\\\%\\\\]{top:25%}.right-0{right:calc(var(--spacing)*0)}.right-1\\\\/2{right:50%}.right-\\\\[100\\\\%\\\\]{right:100%}.bottom-0{bottom:calc(var(--spacing)*0)}.bottom-1\\\\/2{bottom:50%}.bottom-3{bottom:calc(var(--spacing)*3)}.left-0{left:calc(var(--spacing)*0)}.left-0\\\\.5{left:calc(var(--spacing)*.5)}.left-1\\\\/2{left:50%}.left-3{left:calc(var(--spacing)*3)}.left-\\\\[-10\\\\%\\\\]{left:-10%}.left-\\\\[25\\\\%\\\\]{left:25%}.left-\\\\[100\\\\%\\\\]{left:100%}.z-20{z-index:20}.z-50{z-index:50}.container{width:100%}@media (min-width:40rem){.container{max-width:40rem}}@media (min-width:48rem){.container{max-width:48rem}}@media (min-width:64rem){.container{max-width:64rem}}@media (min-width:80rem){.container{max-width:80rem}}@media (min-width:96rem){.container{max-width:96rem}}.-mx-4{margin-inline:calc(var(--spacing)*-4)}.my-2{margin-block:calc(var(--spacing)*2)}.mt-1{margin-top:calc(var(--spacing)*1)}.mt-2{margin-top:calc(var(--spacing)*2)}.mb-2{margin-bottom:calc(var(--spacing)*2)}.mb-3{margin-bottom:calc(var(--spacing)*3)}.block{display:block}.contents{display:contents}.flex{display:flex}.hidden{display:none}.inline{display:inline}.aspect-square{aspect-ratio:1}.size-0{width:calc(var(--spacing)*0);height:calc(var(--spacing)*0)}.size-1\\\\.5{width:calc(var(--spacing)*1.5);height:calc(var(--spacing)*1.5)}.size-2\\\\/3{width:66.6667%;height:66.6667%}.size-3{width:calc(var(--spacing)*3);height:calc(var(--spacing)*3)}.size-4{width:calc(var(--spacing)*4);height:calc(var(--spacing)*4)}.size-4\\\\.5{width:calc(var(--spacing)*4.5);height:calc(var(--spacing)*4.5)}.size-5{width:calc(var(--spacing)*5);height:calc(var(--spacing)*5)}.size-6{width:calc(var(--spacing)*6);height:calc(var(--spacing)*6)}.size-8{width:calc(var(--spacing)*8);height:calc(var(--spacing)*8)}.size-9{width:calc(var(--spacing)*9);height:calc(var(--spacing)*9)}.size-9\\\\/12{width:75%;height:75%}.size-12{width:calc(var(--spacing)*12);height:calc(var(--spacing)*12)}.size-\\\\[120\\\\%\\\\]{width:120%;height:120%}.size-full{width:100%;height:100%}.h-0{height:calc(var(--spacing)*0)}.h-3{height:calc(var(--spacing)*3)}.h-5{height:calc(var(--spacing)*5)}.h-8{height:calc(var(--spacing)*8)}.h-9\\\\.5{height:calc(var(--spacing)*9.5)}.h-12{height:calc(var(--spacing)*12)}.h-16{height:calc(var(--spacing)*16)}.h-24{height:calc(var(--spacing)*24)}.h-\\\\[50\\\\%\\\\]{height:50%}.h-\\\\[120\\\\%\\\\]{height:120%}.h-\\\\[calc\\\\(100vh-32px\\\\)\\\\]{height:calc(100vh - 32px)}.h-\\\\[calc-size\\\\(auto\\\\)\\\\]{height:calc-size(auto)}.h-\\\\[calc-size\\\\(auto\\\\,size\\\\)\\\\]{height:calc-size(auto,size)}.h-auto{height:auto}.h-full{height:100%}.h-screen{height:100vh}.max-h-full{max-height:100%}.min-h-0{min-height:calc(var(--spacing)*0)}.min-h-48{min-height:calc(var(--spacing)*48)}.w-8{width:calc(var(--spacing)*8)}.w-9\\\\.5{width:calc(var(--spacing)*9.5)}.w-96{width:calc(var(--spacing)*96)}.w-\\\\[50\\\\%\\\\]{width:50%}.w-auto{width:auto}.w-fit{width:-moz-fit-content;width:fit-content}.w-full{width:100%}.w-max{width:-moz-max-content;width:max-content}.w-screen{width:100vw}.max-w-8{max-width:calc(var(--spacing)*8)}.max-w-90{max-width:calc(var(--spacing)*90)}.max-w-\\\\[40vw\\\\]{max-width:40vw}.max-w-full{max-width:100%}.min-w-0{min-width:calc(var(--spacing)*0)}.min-w-3{min-width:calc(var(--spacing)*3)}.min-w-24{min-width:calc(var(--spacing)*24)}.flex-1{flex:1}.flex-shrink-0,.shrink-0{flex-shrink:0}.origin-bottom{transform-origin:bottom}.origin-bottom-left{transform-origin:0 100%}.origin-bottom-right{transform-origin:100% 100%}.origin-center{transform-origin:50%}.origin-top{transform-origin:top}.origin-top-left{transform-origin:0 0}.origin-top-right{transform-origin:100% 0}.scale-25{--tw-scale-x:25%;--tw-scale-y:25%;--tw-scale-z:25%;scale:var(--tw-scale-x)var(--tw-scale-y)}.scale-50{--tw-scale-x:50%;--tw-scale-y:50%;--tw-scale-z:50%;scale:var(--tw-scale-x)var(--tw-scale-y)}.scale-100{--tw-scale-x:100%;--tw-scale-y:100%;--tw-scale-z:100%;scale:var(--tw-scale-x)var(--tw-scale-y)}.animate-pulse{animation:var(--animate-pulse)}.animate-spin{animation:var(--animate-spin)}.cursor-copy{cursor:copy}.cursor-not-allowed{cursor:not-allowed}.cursor-pointer{cursor:pointer}.resize{resize:both}.resize-none{resize:none}.snap-start{scroll-snap-align:start}.list-inside{list-style-position:inside}.list-decimal{list-style-type:decimal}.flex-col{flex-direction:column}.flex-col-reverse{flex-direction:column-reverse}.flex-row{flex-direction:row}.flex-wrap{flex-wrap:wrap}.items-center{align-items:center}.items-end{align-items:flex-end}.items-start{align-items:flex-start}.items-stretch{align-items:stretch}.justify-between{justify-content:space-between}.justify-center{justify-content:center}.justify-end{justify-content:flex-end}.justify-start{justify-content:flex-start}.gap-0\\\\.5{gap:calc(var(--spacing)*.5)}.gap-1{gap:calc(var(--spacing)*1)}.gap-2{gap:calc(var(--spacing)*2)}.gap-3{gap:calc(var(--spacing)*3)}:where(.space-y-1>:not(:last-child)){--tw-space-y-reverse:0;margin-block-start:calc(calc(var(--spacing)*1)*var(--tw-space-y-reverse));margin-block-end:calc(calc(var(--spacing)*1)*calc(1 - var(--tw-space-y-reverse)))}:where(.space-y-2>:not(:last-child)){--tw-space-y-reverse:0;margin-block-start:calc(calc(var(--spacing)*2)*var(--tw-space-y-reverse));margin-block-end:calc(calc(var(--spacing)*2)*calc(1 - var(--tw-space-y-reverse)))}:where(.space-y-3>:not(:last-child)){--tw-space-y-reverse:0;margin-block-start:calc(calc(var(--spacing)*3)*var(--tw-space-y-reverse));margin-block-end:calc(calc(var(--spacing)*3)*calc(1 - var(--tw-space-y-reverse)))}:where(.space-y-4>:not(:last-child)){--tw-space-y-reverse:0;margin-block-start:calc(calc(var(--spacing)*4)*var(--tw-space-y-reverse));margin-block-end:calc(calc(var(--spacing)*4)*calc(1 - var(--tw-space-y-reverse)))}:where(.space-x-2>:not(:last-child)){--tw-space-x-reverse:0;margin-inline-start:calc(calc(var(--spacing)*2)*var(--tw-space-x-reverse));margin-inline-end:calc(calc(var(--spacing)*2)*calc(1 - var(--tw-space-x-reverse)))}:where(.divide-y>:not(:last-child)){--tw-divide-y-reverse:0;border-bottom-style:var(--tw-border-style);border-top-style:var(--tw-border-style);border-top-width:calc(1px*var(--tw-divide-y-reverse));border-bottom-width:calc(1px*calc(1 - var(--tw-divide-y-reverse)))}:where(.divide-y-reverse>:not(:last-child)){--tw-divide-y-reverse:1}:where(.divide-blue-200>:not(:last-child)){border-color:var(--color-blue-200)}:where(.divide-border\\\\/20>:not(:last-child)){border-color:#71717b33}@supports (color:color-mix(in lab,red,red)){:where(.divide-border\\\\/20>:not(:last-child)){border-color:color-mix(in oklab,var(--color-border)20%,transparent)}}:where(.divide-orange-200>:not(:last-child)){border-color:var(--color-orange-200)}.truncate{text-overflow:ellipsis;white-space:nowrap;overflow:hidden}.overflow-hidden{overflow:hidden}.overflow-visible{overflow:visible}.overflow-y-auto{overflow-y:auto}.rounded{border-radius:.25rem}.rounded-2xl{border-radius:var(--radius-2xl)}.rounded-full{border-radius:3.40282e38px}.rounded-lg{border-radius:var(--radius-lg)}.rounded-md{border-radius:var(--radius-md)}.rounded-t-3xl{border-top-left-radius:var(--radius-3xl);border-top-right-radius:var(--radius-3xl)}.rounded-t-lg{border-top-left-radius:var(--radius-lg);border-top-right-radius:var(--radius-lg)}.rounded-b-3xl{border-bottom-right-radius:var(--radius-3xl);border-bottom-left-radius:var(--radius-3xl)}.rounded-b-lg{border-bottom-right-radius:var(--radius-lg);border-bottom-left-radius:var(--radius-lg)}.border{border-style:var(--tw-border-style);border-width:1px}.border-2{border-style:var(--tw-border-style);border-width:2px}.border-t{border-top-style:var(--tw-border-style);border-top-width:1px}.border-solid{--tw-border-style:solid;border-style:solid}.border-blue-200{border-color:var(--color-blue-200)}.border-blue-300{border-color:var(--color-blue-300)}.border-blue-500{border-color:var(--color-blue-500)}.border-blue-600\\\\/80{border-color:#155dfccc}@supports (color:color-mix(in lab,red,red)){.border-blue-600\\\\/80{border-color:color-mix(in oklab,var(--color-blue-600)80%,transparent)}}.border-border\\\\/30{border-color:#71717b4d}@supports (color:color-mix(in lab,red,red)){.border-border\\\\/30{border-color:color-mix(in oklab,var(--color-border)30%,transparent)}}.border-green-500{border-color:var(--color-green-500)}.border-green-600\\\\/80{border-color:#00a544cc}@supports (color:color-mix(in lab,red,red)){.border-green-600\\\\/80{border-color:color-mix(in oklab,var(--color-green-600)80%,transparent)}}.border-orange-200{border-color:var(--color-orange-200)}.border-orange-300{border-color:var(--color-orange-300)}.border-orange-500{border-color:var(--color-orange-500)}.border-pink-500{border-color:var(--color-pink-500)}.border-purple-500{border-color:var(--color-purple-500)}.border-red-200{border-color:var(--color-red-200)}.border-red-500{border-color:var(--color-red-500)}.border-transparent{border-color:#0000}.border-yellow-500{border-color:var(--color-yellow-500)}.border-zinc-300{border-color:var(--color-zinc-300)}.border-zinc-500{border-color:var(--color-zinc-500)}.bg-amber-50{background-color:var(--color-amber-50)}.bg-background\\\\/60{background-color:#fff9}@supports (color:color-mix(in lab,red,red)){.bg-background\\\\/60{background-color:color-mix(in oklab,var(--color-background)60%,transparent)}}.bg-blue-50{background-color:var(--color-blue-50)}.bg-blue-50\\\\/90{background-color:#eff6ffe6}@supports (color:color-mix(in lab,red,red)){.bg-blue-50\\\\/90{background-color:color-mix(in oklab,var(--color-blue-50)90%,transparent)}}.bg-blue-100\\\\/80{background-color:#dbeafecc}@supports (color:color-mix(in lab,red,red)){.bg-blue-100\\\\/80{background-color:color-mix(in oklab,var(--color-blue-100)80%,transparent)}}.bg-blue-500{background-color:var(--color-blue-500)}.bg-blue-600{background-color:var(--color-blue-600)}.bg-blue-600\\\\/20{background-color:#155dfc33}@supports (color:color-mix(in lab,red,red)){.bg-blue-600\\\\/20{background-color:color-mix(in oklab,var(--color-blue-600)20%,transparent)}}.bg-green-500{background-color:var(--color-green-500)}.bg-green-600\\\\/5{background-color:#00a5440d}@supports (color:color-mix(in lab,red,red)){.bg-green-600\\\\/5{background-color:color-mix(in oklab,var(--color-green-600)5%,transparent)}}.bg-orange-50\\\\/90{background-color:#fff7ede6}@supports (color:color-mix(in lab,red,red)){.bg-orange-50\\\\/90{background-color:color-mix(in oklab,var(--color-orange-50)90%,transparent)}}.bg-orange-100\\\\/80{background-color:#ffedd5cc}@supports (color:color-mix(in lab,red,red)){.bg-orange-100\\\\/80{background-color:color-mix(in oklab,var(--color-orange-100)80%,transparent)}}.bg-orange-500{background-color:var(--color-orange-500)}.bg-orange-600{background-color:var(--color-orange-600)}.bg-pink-500{background-color:var(--color-pink-500)}.bg-purple-500{background-color:var(--color-purple-500)}.bg-red-100{background-color:var(--color-red-100)}.bg-red-500{background-color:var(--color-red-500)}.bg-rose-600{background-color:var(--color-rose-600)}.bg-transparent{background-color:#0000}.bg-white{background-color:var(--color-white)}.bg-white\\\\/40{background-color:#fff6}@supports (color:color-mix(in lab,red,red)){.bg-white\\\\/40{background-color:color-mix(in oklab,var(--color-white)40%,transparent)}}.bg-white\\\\/80{background-color:#fffc}@supports (color:color-mix(in lab,red,red)){.bg-white\\\\/80{background-color:color-mix(in oklab,var(--color-white)80%,transparent)}}.bg-white\\\\/90{background-color:#ffffffe6}@supports (color:color-mix(in lab,red,red)){.bg-white\\\\/90{background-color:color-mix(in oklab,var(--color-white)90%,transparent)}}.bg-yellow-500{background-color:var(--color-yellow-500)}.bg-zinc-50\\\\/80{background-color:#fafafacc}@supports (color:color-mix(in lab,red,red)){.bg-zinc-50\\\\/80{background-color:color-mix(in oklab,var(--color-zinc-50)80%,transparent)}}.bg-zinc-300{background-color:var(--color-zinc-300)}.bg-zinc-500{background-color:var(--color-zinc-500)}.bg-zinc-500\\\\/10{background-color:#71717b1a}@supports (color:color-mix(in lab,red,red)){.bg-zinc-500\\\\/10{background-color:color-mix(in oklab,var(--color-zinc-500)10%,transparent)}}.bg-zinc-500\\\\/40{background-color:#71717b66}@supports (color:color-mix(in lab,red,red)){.bg-zinc-500\\\\/40{background-color:color-mix(in oklab,var(--color-zinc-500)40%,transparent)}}.bg-zinc-700\\\\/80{background-color:#3f3f46cc}@supports (color:color-mix(in lab,red,red)){.bg-zinc-700\\\\/80{background-color:color-mix(in oklab,var(--color-zinc-700)80%,transparent)}}.bg-gradient-to-tr{--tw-gradient-position:to top right in oklab;background-image:linear-gradient(var(--tw-gradient-stops))}.bg-\\\\[radial-gradient\\\\(circle\\\\,rgba\\\\(55\\\\,48\\\\,163\\\\,0\\\\)_55\\\\%\\\\,rgba\\\\(55\\\\,48\\\\,163\\\\,0\\\\.35\\\\)_73\\\\%\\\\)\\\\]{background-image:radial-gradient(circle,#3730a300 55%,#3730a359 73%)}.bg-\\\\[radial-gradient\\\\(circle\\\\,rgba\\\\(219\\\\,39\\\\,119\\\\,0\\\\.2\\\\)_0\\\\%\\\\,rgba\\\\(219\\\\,39\\\\,119\\\\,0\\\\)_100\\\\%\\\\)\\\\]{background-image:radial-gradient(circle,#db277733,#db277700)}.bg-\\\\[radial-gradient\\\\(circle\\\\,rgba\\\\(255\\\\,255\\\\,255\\\\,0\\\\)_60\\\\%\\\\,rgba\\\\(255\\\\,255\\\\,255\\\\,0\\\\.2\\\\)_70\\\\%\\\\)\\\\]{background-image:radial-gradient(circle,#fff0 60%,#fff3 70%)}.from-blue-600{--tw-gradient-from:var(--color-blue-600);--tw-gradient-stops:var(--tw-gradient-via-stops,var(--tw-gradient-position),var(--tw-gradient-from)var(--tw-gradient-from-position),var(--tw-gradient-to)var(--tw-gradient-to-position))}.from-indigo-700{--tw-gradient-from:var(--color-indigo-700);--tw-gradient-stops:var(--tw-gradient-via-stops,var(--tw-gradient-position),var(--tw-gradient-from)var(--tw-gradient-from-position),var(--tw-gradient-to)var(--tw-gradient-to-position))}.from-orange-600{--tw-gradient-from:var(--color-orange-600);--tw-gradient-stops:var(--tw-gradient-via-stops,var(--tw-gradient-position),var(--tw-gradient-from)var(--tw-gradient-from-position),var(--tw-gradient-to)var(--tw-gradient-to-position))}.from-sky-700{--tw-gradient-from:var(--color-sky-700);--tw-gradient-stops:var(--tw-gradient-via-stops,var(--tw-gradient-position),var(--tw-gradient-from)var(--tw-gradient-from-position),var(--tw-gradient-to)var(--tw-gradient-to-position))}.via-blue-500{--tw-gradient-via:var(--color-blue-500);--tw-gradient-via-stops:var(--tw-gradient-position),var(--tw-gradient-from)var(--tw-gradient-from-position),var(--tw-gradient-via)var(--tw-gradient-via-position),var(--tw-gradient-to)var(--tw-gradient-to-position);--tw-gradient-stops:var(--tw-gradient-via-stops)}.to-fuchsia-700{--tw-gradient-to:var(--color-fuchsia-700);--tw-gradient-stops:var(--tw-gradient-via-stops,var(--tw-gradient-position),var(--tw-gradient-from)var(--tw-gradient-from-position),var(--tw-gradient-to)var(--tw-gradient-to-position))}.to-red-600{--tw-gradient-to:var(--color-red-600);--tw-gradient-stops:var(--tw-gradient-via-stops,var(--tw-gradient-position),var(--tw-gradient-from)var(--tw-gradient-from-position),var(--tw-gradient-to)var(--tw-gradient-to-position))}.to-sky-600{--tw-gradient-to:var(--color-sky-600);--tw-gradient-stops:var(--tw-gradient-via-stops,var(--tw-gradient-position),var(--tw-gradient-from)var(--tw-gradient-from-position),var(--tw-gradient-to)var(--tw-gradient-to-position))}.to-teal-500{--tw-gradient-to:var(--color-teal-500);--tw-gradient-stops:var(--tw-gradient-via-stops,var(--tw-gradient-position),var(--tw-gradient-from)var(--tw-gradient-from-position),var(--tw-gradient-to)var(--tw-gradient-to-position))}.fill-current{fill:currentColor}.fill-white{fill:var(--color-white)}.fill-zinc-500\\\\/50{fill:#71717b80}@supports (color:color-mix(in lab,red,red)){.fill-zinc-500\\\\/50{fill:color-mix(in oklab,var(--color-zinc-500)50%,transparent)}}.fill-zinc-950{fill:var(--color-zinc-950)}.stroke-black\\\\/30{stroke:#0000004d}@supports (color:color-mix(in lab,red,red)){.stroke-black\\\\/30{stroke:color-mix(in oklab,var(--color-black)30%,transparent)}}.stroke-none{stroke:none}.stroke-white{stroke:var(--color-white)}.stroke-zinc-950{stroke:var(--color-zinc-950)}.stroke-1{stroke-width:1px}.p-0\\\\.5{padding:calc(var(--spacing)*.5)}.p-1{padding:calc(var(--spacing)*1)}.p-2{padding:calc(var(--spacing)*2)}.p-3{padding:calc(var(--spacing)*3)}.p-4{padding:calc(var(--spacing)*4)}.px-0\\\\.5{padding-inline:calc(var(--spacing)*.5)}.px-1{padding-inline:calc(var(--spacing)*1)}.px-2{padding-inline:calc(var(--spacing)*2)}.px-3{padding-inline:calc(var(--spacing)*3)}.px-4{padding-inline:calc(var(--spacing)*4)}.py-0{padding-block:calc(var(--spacing)*0)}.py-0\\\\.5{padding-block:calc(var(--spacing)*.5)}.py-2{padding-block:calc(var(--spacing)*2)}.pt-2{padding-top:calc(var(--spacing)*2)}.pt-4{padding-top:calc(var(--spacing)*4)}.pr-6{padding-right:calc(var(--spacing)*6)}.pb-4{padding-bottom:calc(var(--spacing)*4)}.pl-2{padding-left:calc(var(--spacing)*2)}.text-base{font-size:var(--text-base);line-height:var(--tw-leading,var(--text-base--line-height))}.text-lg{font-size:var(--text-lg);line-height:var(--tw-leading,var(--text-lg--line-height))}.text-sm{font-size:var(--text-sm);line-height:var(--tw-leading,var(--text-sm--line-height))}.text-xs{font-size:var(--text-xs);line-height:var(--tw-leading,var(--text-xs--line-height))}.text-\\\\[0\\\\.5em\\\\]{font-size:.5em}.font-bold{--tw-font-weight:var(--font-weight-bold);font-weight:var(--font-weight-bold)}.font-medium{--tw-font-weight:var(--font-weight-medium);font-weight:var(--font-weight-medium)}.font-normal{--tw-font-weight:var(--font-weight-normal);font-weight:var(--font-weight-normal)}.font-semibold{--tw-font-weight:var(--font-weight-semibold);font-weight:var(--font-weight-semibold)}.text-amber-800{color:var(--color-amber-800)}.text-blue-500{color:var(--color-blue-500)}.text-blue-600{color:var(--color-blue-600)}.text-blue-700{color:var(--color-blue-700)}.text-blue-800{color:var(--color-blue-800)}.text-foreground{color:var(--color-foreground)}.text-indigo-700{color:var(--color-indigo-700)}.text-orange-600{color:var(--color-orange-600)}.text-orange-700{color:var(--color-orange-700)}.text-orange-800{color:var(--color-orange-800)}.text-red-600{color:var(--color-red-600)}.text-red-700{color:var(--color-red-700)}.text-transparent{color:#0000}.text-violet-700{color:var(--color-violet-700)}.text-white{color:var(--color-white)}.text-zinc-500{color:var(--color-zinc-500)}.text-zinc-600{color:var(--color-zinc-600)}.text-zinc-700{color:var(--color-zinc-700)}.text-zinc-950{color:var(--color-zinc-950)}.opacity-0{opacity:0}.opacity-20{opacity:.2}.opacity-30{opacity:.3}.opacity-80{opacity:.8}.opacity-100{opacity:1}.shadow-lg{--tw-shadow:0 10px 15px -3px var(--tw-shadow-color,#0000001a),0 4px 6px -4px var(--tw-shadow-color,#0000001a);box-shadow:var(--tw-inset-shadow),var(--tw-inset-ring-shadow),var(--tw-ring-offset-shadow),var(--tw-ring-shadow),var(--tw-shadow)}.shadow-md{--tw-shadow:0 4px 6px -1px var(--tw-shadow-color,#0000001a),0 2px 4px -2px var(--tw-shadow-color,#0000001a);box-shadow:var(--tw-inset-shadow),var(--tw-inset-ring-shadow),var(--tw-ring-offset-shadow),var(--tw-ring-shadow),var(--tw-shadow)}.shadow-sm{--tw-shadow:0 1px 3px 0 var(--tw-shadow-color,#0000001a),0 1px 2px -1px var(--tw-shadow-color,#0000001a);box-shadow:var(--tw-inset-shadow),var(--tw-inset-ring-shadow),var(--tw-ring-offset-shadow),var(--tw-ring-shadow),var(--tw-shadow)}.ring{--tw-ring-shadow:var(--tw-ring-inset,)0 0 0 calc(1px + var(--tw-ring-offset-width))var(--tw-ring-color,currentcolor);box-shadow:var(--tw-inset-shadow),var(--tw-inset-ring-shadow),var(--tw-ring-offset-shadow),var(--tw-ring-shadow),var(--tw-shadow)}.shadow-black\\\\/50{--tw-shadow-color:#00000080}@supports (color:color-mix(in lab,red,red)){.shadow-black\\\\/50{--tw-shadow-color:color-mix(in oklab,color-mix(in oklab,var(--color-black)50%,transparent)var(--tw-shadow-alpha),transparent)}}.ring-transparent{--tw-ring-color:transparent}.ring-zinc-950\\\\/20{--tw-ring-color:#09090b33}@supports (color:color-mix(in lab,red,red)){.ring-zinc-950\\\\/20{--tw-ring-color:color-mix(in oklab,var(--color-zinc-950)20%,transparent)}}.outline{outline-style:var(--tw-outline-style);outline-width:1px}.blur{--tw-blur:blur(8px);filter:var(--tw-blur,)var(--tw-brightness,)var(--tw-contrast,)var(--tw-grayscale,)var(--tw-hue-rotate,)var(--tw-invert,)var(--tw-saturate,)var(--tw-sepia,)var(--tw-drop-shadow,)}.blur-md{--tw-blur:blur(var(--blur-md));filter:var(--tw-blur,)var(--tw-brightness,)var(--tw-contrast,)var(--tw-grayscale,)var(--tw-hue-rotate,)var(--tw-invert,)var(--tw-saturate,)var(--tw-sepia,)var(--tw-drop-shadow,)}.blur-none{--tw-blur: ;filter:var(--tw-blur,)var(--tw-brightness,)var(--tw-contrast,)var(--tw-grayscale,)var(--tw-hue-rotate,)var(--tw-invert,)var(--tw-saturate,)var(--tw-sepia,)var(--tw-drop-shadow,)}.drop-shadow-md{--tw-drop-shadow-size:drop-shadow(0 3px 3px var(--tw-drop-shadow-color,#0000001f));--tw-drop-shadow:drop-shadow(var(--drop-shadow-md));filter:var(--tw-blur,)var(--tw-brightness,)var(--tw-contrast,)var(--tw-grayscale,)var(--tw-hue-rotate,)var(--tw-invert,)var(--tw-saturate,)var(--tw-sepia,)var(--tw-drop-shadow,)}.drop-shadow-xl{--tw-drop-shadow-size:drop-shadow(0 9px 7px var(--tw-drop-shadow-color,#0000001a));--tw-drop-shadow:drop-shadow(var(--drop-shadow-xl));filter:var(--tw-blur,)var(--tw-brightness,)var(--tw-contrast,)var(--tw-grayscale,)var(--tw-hue-rotate,)var(--tw-invert,)var(--tw-saturate,)var(--tw-sepia,)var(--tw-drop-shadow,)}.drop-shadow-xs{--tw-drop-shadow-size:drop-shadow(0 1px 1px var(--tw-drop-shadow-color,#0000000d));--tw-drop-shadow:drop-shadow(var(--drop-shadow-xs));filter:var(--tw-blur,)var(--tw-brightness,)var(--tw-contrast,)var(--tw-grayscale,)var(--tw-hue-rotate,)var(--tw-invert,)var(--tw-saturate,)var(--tw-sepia,)var(--tw-drop-shadow,)}.drop-shadow-black{--tw-drop-shadow-color:#000}@supports (color:color-mix(in lab,red,red)){.drop-shadow-black{--tw-drop-shadow-color:color-mix(in oklab,var(--color-black)var(--tw-drop-shadow-alpha),transparent)}}.drop-shadow-black{--tw-drop-shadow:var(--tw-drop-shadow-size)}.drop-shadow-indigo-950{--tw-drop-shadow-color:oklch(25.7% .09 281.288)}@supports (color:color-mix(in lab,red,red)){.drop-shadow-indigo-950{--tw-drop-shadow-color:color-mix(in oklab,var(--color-indigo-950)var(--tw-drop-shadow-alpha),transparent)}}.drop-shadow-indigo-950{--tw-drop-shadow:var(--tw-drop-shadow-size)}.backdrop-blur{--tw-backdrop-blur:blur(8px);-webkit-backdrop-filter:var(--tw-backdrop-blur,)var(--tw-backdrop-brightness,)var(--tw-backdrop-contrast,)var(--tw-backdrop-grayscale,)var(--tw-backdrop-hue-rotate,)var(--tw-backdrop-invert,)var(--tw-backdrop-opacity,)var(--tw-backdrop-saturate,)var(--tw-backdrop-sepia,);backdrop-filter:var(--tw-backdrop-blur,)var(--tw-backdrop-brightness,)var(--tw-backdrop-contrast,)var(--tw-backdrop-grayscale,)var(--tw-backdrop-hue-rotate,)var(--tw-backdrop-invert,)var(--tw-backdrop-opacity,)var(--tw-backdrop-saturate,)var(--tw-backdrop-sepia,)}.backdrop-blur-md{--tw-backdrop-blur:blur(var(--blur-md));-webkit-backdrop-filter:var(--tw-backdrop-blur,)var(--tw-backdrop-brightness,)var(--tw-backdrop-contrast,)var(--tw-backdrop-grayscale,)var(--tw-backdrop-hue-rotate,)var(--tw-backdrop-invert,)var(--tw-backdrop-opacity,)var(--tw-backdrop-saturate,)var(--tw-backdrop-sepia,);backdrop-filter:var(--tw-backdrop-blur,)var(--tw-backdrop-brightness,)var(--tw-backdrop-contrast,)var(--tw-backdrop-grayscale,)var(--tw-backdrop-hue-rotate,)var(--tw-backdrop-invert,)var(--tw-backdrop-opacity,)var(--tw-backdrop-saturate,)var(--tw-backdrop-sepia,)}.backdrop-saturate-150{--tw-backdrop-saturate:saturate(150%);-webkit-backdrop-filter:var(--tw-backdrop-blur,)var(--tw-backdrop-brightness,)var(--tw-backdrop-contrast,)var(--tw-backdrop-grayscale,)var(--tw-backdrop-hue-rotate,)var(--tw-backdrop-invert,)var(--tw-backdrop-opacity,)var(--tw-backdrop-saturate,)var(--tw-backdrop-sepia,);backdrop-filter:var(--tw-backdrop-blur,)var(--tw-backdrop-brightness,)var(--tw-backdrop-contrast,)var(--tw-backdrop-grayscale,)var(--tw-backdrop-hue-rotate,)var(--tw-backdrop-invert,)var(--tw-backdrop-opacity,)var(--tw-backdrop-saturate,)var(--tw-backdrop-sepia,)}.transition{transition-property:color,background-color,border-color,outline-color,text-decoration-color,fill,stroke,--tw-gradient-from,--tw-gradient-via,--tw-gradient-to,opacity,box-shadow,transform,translate,scale,rotate,filter,-webkit-backdrop-filter,backdrop-filter,display,visibility,content-visibility,overlay,pointer-events;transition-timing-function:var(--tw-ease,var(--default-transition-timing-function));transition-duration:var(--tw-duration,var(--default-transition-duration))}.transition-all{transition-property:all;transition-timing-function:var(--tw-ease,var(--default-transition-timing-function));transition-duration:var(--tw-duration,var(--default-transition-duration))}.transition-colors{transition-property:color,background-color,border-color,outline-color,text-decoration-color,fill,stroke,--tw-gradient-from,--tw-gradient-via,--tw-gradient-to;transition-timing-function:var(--tw-ease,var(--default-transition-timing-function));transition-duration:var(--tw-duration,var(--default-transition-duration))}.duration-0{--tw-duration:0s;transition-duration:0s}.duration-100{--tw-duration:.1s;transition-duration:.1s}.duration-150{--tw-duration:.15s;transition-duration:.15s}.duration-300{--tw-duration:.3s;transition-duration:.3s}.duration-500{--tw-duration:.5s;transition-duration:.5s}.ease-out{--tw-ease:var(--ease-out);transition-timing-function:var(--ease-out)}.outline-none{--tw-outline-style:none;outline-style:none}.select-none{-webkit-user-select:none;-moz-user-select:none;user-select:none}:is(.\\\\*\\\\:size-full>*){width:100%;height:100%}.placeholder\\\\:text-zinc-400::-moz-placeholder{color:var(--color-zinc-400)}.placeholder\\\\:text-zinc-400::placeholder{color:var(--color-zinc-400)}.placeholder\\\\:text-zinc-950\\\\/50::-moz-placeholder{color:#09090b80}.placeholder\\\\:text-zinc-950\\\\/50::placeholder{color:#09090b80}@supports (color:color-mix(in lab,red,red)){.placeholder\\\\:text-zinc-950\\\\/50::-moz-placeholder{color:color-mix(in oklab,var(--color-zinc-950)50%,transparent)}.placeholder\\\\:text-zinc-950\\\\/50::placeholder{color:color-mix(in oklab,var(--color-zinc-950)50%,transparent)}}.placeholder\\\\:text-zinc-950\\\\/70::-moz-placeholder{color:#09090bb3}.placeholder\\\\:text-zinc-950\\\\/70::placeholder{color:#09090bb3}@supports (color:color-mix(in lab,red,red)){.placeholder\\\\:text-zinc-950\\\\/70::-moz-placeholder{color:color-mix(in oklab,var(--color-zinc-950)70%,transparent)}.placeholder\\\\:text-zinc-950\\\\/70::placeholder{color:color-mix(in oklab,var(--color-zinc-950)70%,transparent)}}@media (hover:hover){.hover\\\\:border-red-600\\\\/80:hover{border-color:#e40014cc}@supports (color:color-mix(in lab,red,red)){.hover\\\\:border-red-600\\\\/80:hover{border-color:color-mix(in oklab,var(--color-red-600)80%,transparent)}}.hover\\\\:bg-blue-200\\\\/80:hover{background-color:#bedbffcc}@supports (color:color-mix(in lab,red,red)){.hover\\\\:bg-blue-200\\\\/80:hover{background-color:color-mix(in oklab,var(--color-blue-200)80%,transparent)}}.hover\\\\:bg-orange-200:hover{background-color:var(--color-orange-200)}.hover\\\\:bg-orange-700:hover{background-color:var(--color-orange-700)}.hover\\\\:bg-red-600\\\\/20:hover{background-color:#e4001433}@supports (color:color-mix(in lab,red,red)){.hover\\\\:bg-red-600\\\\/20:hover{background-color:color-mix(in oklab,var(--color-red-600)20%,transparent)}}.hover\\\\:bg-zinc-500\\\\/20:hover{background-color:#71717b33}@supports (color:color-mix(in lab,red,red)){.hover\\\\:bg-zinc-500\\\\/20:hover{background-color:color-mix(in oklab,var(--color-zinc-500)20%,transparent)}}.hover\\\\:bg-zinc-950\\\\/5:hover{background-color:#09090b0d}@supports (color:color-mix(in lab,red,red)){.hover\\\\:bg-zinc-950\\\\/5:hover{background-color:color-mix(in oklab,var(--color-zinc-950)5%,transparent)}}.hover\\\\:bg-zinc-950\\\\/10:hover{background-color:#09090b1a}@supports (color:color-mix(in lab,red,red)){.hover\\\\:bg-zinc-950\\\\/10:hover{background-color:color-mix(in oklab,var(--color-zinc-950)10%,transparent)}}.hover\\\\:text-orange-800:hover{color:var(--color-orange-800)}.hover\\\\:text-white:hover{color:var(--color-white)}.hover\\\\:underline:hover{text-decoration-line:underline}.hover\\\\:opacity-100:hover{opacity:1}.hover\\\\:shadow-lg:hover{--tw-shadow:0 10px 15px -3px var(--tw-shadow-color,#0000001a),0 4px 6px -4px var(--tw-shadow-color,#0000001a);box-shadow:var(--tw-inset-shadow),var(--tw-inset-ring-shadow),var(--tw-ring-offset-shadow),var(--tw-ring-shadow),var(--tw-shadow)}}.focus\\\\:border-blue-500:focus{border-color:var(--color-blue-500)}.focus\\\\:border-zinc-500:focus{border-color:var(--color-zinc-500)}.focus\\\\:text-zinc-900:focus{color:var(--color-zinc-900)}.focus\\\\:outline-none:focus{--tw-outline-style:none;outline-style:none}.disabled\\\\:opacity-50:disabled{opacity:.5}.data-focus\\\\:outline-none[data-focus]{--tw-outline-style:none;outline-style:none}.animate-shake{animation:.5s ease-in-out 2 shake}}:root{color-scheme:normal;font-feature-settings:"liga" 1,"calt" 1;background-color:#0000}body{background-color:#0000}@keyframes shake{0%,to{transform:translate(0)}10%,30%,50%,70%,90%{transform:translate(-2px)}20%,40%,60%,80%{transform:translate(2px)}}@keyframes gradient-animation{0%{background-position:0%}50%{background-position:100%}to{background-position:0%}}#headlessui-portal-root{z-index:50;width:100vw;height:100vh;position:fixed}#headlessui-portal-root>*{pointer-events:auto}@property --tw-scale-x{syntax:"*";inherits:false;initial-value:1}@property --tw-scale-y{syntax:"*";inherits:false;initial-value:1}@property --tw-scale-z{syntax:"*";inherits:false;initial-value:1}@property --tw-space-y-reverse{syntax:"*";inherits:false;initial-value:0}@property --tw-space-x-reverse{syntax:"*";inherits:false;initial-value:0}@property --tw-divide-y-reverse{syntax:"*";inherits:false;initial-value:0}@property --tw-border-style{syntax:"*";inherits:false;initial-value:solid}@property --tw-gradient-position{syntax:"*";inherits:false}@property --tw-gradient-from{syntax:"<color>";inherits:false;initial-value:#0000}@property --tw-gradient-via{syntax:"<color>";inherits:false;initial-value:#0000}@property --tw-gradient-to{syntax:"<color>";inherits:false;initial-value:#0000}@property --tw-gradient-stops{syntax:"*";inherits:false}@property --tw-gradient-via-stops{syntax:"*";inherits:false}@property --tw-gradient-from-position{syntax:"<length-percentage>";inherits:false;initial-value:0%}@property --tw-gradient-via-position{syntax:"<length-percentage>";inherits:false;initial-value:50%}@property --tw-gradient-to-position{syntax:"<length-percentage>";inherits:false;initial-value:100%}@property --tw-font-weight{syntax:"*";inherits:false}@property --tw-shadow{syntax:"*";inherits:false;initial-value:0 0 #0000}@property --tw-shadow-color{syntax:"*";inherits:false}@property --tw-shadow-alpha{syntax:"<percentage>";inherits:false;initial-value:100%}@property --tw-inset-shadow{syntax:"*";inherits:false;initial-value:0 0 #0000}@property --tw-inset-shadow-color{syntax:"*";inherits:false}@property --tw-inset-shadow-alpha{syntax:"<percentage>";inherits:false;initial-value:100%}@property --tw-ring-color{syntax:"*";inherits:false}@property --tw-ring-shadow{syntax:"*";inherits:false;initial-value:0 0 #0000}@property --tw-inset-ring-color{syntax:"*";inherits:false}@property --tw-inset-ring-shadow{syntax:"*";inherits:false;initial-value:0 0 #0000}@property --tw-ring-inset{syntax:"*";inherits:false}@property --tw-ring-offset-width{syntax:"<length>";inherits:false;initial-value:0}@property --tw-ring-offset-color{syntax:"*";inherits:false;initial-value:#fff}@property --tw-ring-offset-shadow{syntax:"*";inherits:false;initial-value:0 0 #0000}@property --tw-outline-style{syntax:"*";inherits:false;initial-value:solid}@property --tw-blur{syntax:"*";inherits:false}@property --tw-brightness{syntax:"*";inherits:false}@property --tw-contrast{syntax:"*";inherits:false}@property --tw-grayscale{syntax:"*";inherits:false}@property --tw-hue-rotate{syntax:"*";inherits:false}@property --tw-invert{syntax:"*";inherits:false}@property --tw-opacity{syntax:"*";inherits:false}@property --tw-saturate{syntax:"*";inherits:false}@property --tw-sepia{syntax:"*";inherits:false}@property --tw-drop-shadow{syntax:"*";inherits:false}@property --tw-drop-shadow-color{syntax:"*";inherits:false}@property --tw-drop-shadow-alpha{syntax:"<percentage>";inherits:false;initial-value:100%}@property --tw-drop-shadow-size{syntax:"*";inherits:false}@property --tw-backdrop-blur{syntax:"*";inherits:false}@property --tw-backdrop-brightness{syntax:"*";inherits:false}@property --tw-backdrop-contrast{syntax:"*";inherits:false}@property --tw-backdrop-grayscale{syntax:"*";inherits:false}@property --tw-backdrop-hue-rotate{syntax:"*";inherits:false}@property --tw-backdrop-invert{syntax:"*";inherits:false}@property --tw-backdrop-opacity{syntax:"*";inherits:false}@property --tw-backdrop-saturate{syntax:"*";inherits:false}@property --tw-backdrop-sepia{syntax:"*";inherits:false}@property --tw-duration{syntax:"*";inherits:false}@property --tw-ease{syntax:"*";inherits:false}@keyframes spin{to{transform:rotate(360deg)}}@keyframes pulse{50%{opacity:.5}}';
function getElementAttributes(element) {
  const attrs = {}, priorityAttrs = [
    "id",
    "class",
    "name",
    "type",
    "href",
    "src",
    "alt",
    "for",
    "placeholder"
  ], dataAttrs = [];
  for (let i2 = 0; i2 < element.attributes.length; i2++) {
    const attr = element.attributes[i2];
    attr.name.startsWith("data-") ? dataAttrs.push({ name: attr.name, value: attr.value }) : (priorityAttrs.includes(attr.name.toLowerCase()) || attr.name.toLowerCase() !== "style") && (attrs[attr.name] = attr.value);
  }
  return dataAttrs.forEach((da) => {
    attrs[da.name] = da.value;
  }), attrs;
}
function generateElementContext(element, index) {
  var _a;
  let context = \`<element index="\${index + 1}">
\`;
  context += \`  <tag>\${element.tagName.toLowerCase()}</tag>
\`;
  const id = element.id;
  id && (context += \`  <id>\${id}</id>
\`);
  const classes = Array.from(element.classList).join(", ");
  classes && (context += \`  <classes>\${classes}</classes>
\`);
  const attributes = getElementAttributes(element);
  if (Object.keys(attributes).length > 0) {
    context += \`  <attributes>
\`;
    for (const [key, value] of Object.entries(attributes))
      (key.toLowerCase() !== "class" || !classes) && (context += \`    <\${key}>\${value}</\${key}>
\`);
    context += \`  </attributes>
\`;
  }
  const text = (_a = element.innerText) == null ? void 0 : _a.trim();
  if (text && (context += \`  <text>\${text.length > 100 ? \`\${text.substring(0, 100)}...\` : text}</text>
\`), context += \`  <structural_context>
\`, element.parentElement) {
    const parent = element.parentElement;
    context += \`    <parent>
\`, context += \`      <tag>\${parent.tagName.toLowerCase()}</tag>
\`, parent.id && (context += \`      <id>\${parent.id}</id>
\`);
    const parentClasses = Array.from(parent.classList).join(", ");
    parentClasses && (context += \`      <classes>\${parentClasses}</classes>
\`), context += \`    </parent>
\`;
  } else
    context += \`    <parent>No parent element found (likely root or disconnected)</parent>
\`;
  context += \`  </structural_context>
\`;
  try {
    const styles = window.getComputedStyle(element), relevantStyles = {
      color: styles.color,
      backgroundColor: styles.backgroundColor,
      fontSize: styles.fontSize,
      fontWeight: styles.fontWeight,
      display: styles.display
    };
    context += \`  <styles>
\`;
    for (const [key, value] of Object.entries(relevantStyles))
      context += \`    <\${key}>\${value}</\${key}>
\`;
    context += \`  </styles>
\`;
  } catch {
    context += \`  <styles>Could not retrieve computed styles</styles>
\`;
  }
  return context += \`</element>
\`, context;
}
function createPrompt(selectedElements, userPrompt, url, contextSnippets) {
  const pluginContext = contextSnippets.map(
    (snippet) => \`
      <plugin_contexts>
<\${snippet.pluginName}>
\${snippet.contextSnippets.map((snippet2) => \`    <\${snippet2.promptContextName}>\${snippet2.content}</\${snippet2.promptContextName}>\`).join(\`
\`)}
</\${snippet.pluginName}>
</plugin_contexts>
\`.trim()
  ).join(\`
\`);
  if (!selectedElements || selectedElements.length === 0)
    return \`
    <request>
      <user_goal>\${userPrompt}</user_goal>
      <url>\${url}</url>
  <context>No specific element was selected on the page. Please analyze the page code in general or ask for clarification.</context>
  \${pluginContext}
</request>\`.trim();
  let detailedContext = "";
  return selectedElements.forEach((element, index) => {
    detailedContext += generateElementContext(element, index);
  }), \`
<request>
  <user_goal>\${userPrompt}</user_goal>
  <url>\${url}</url>
  <selected_elements>
    \${detailedContext.trim()}
  </selected_elements>
  \${pluginContext}
</request>\`.trim();
}
const AppContext = createContext(null), STORAGE_KEY = "stgws:companion";
function loadStateFromStorage() {
  try {
    const stored = sessionStorage.getItem(STORAGE_KEY);
    return stored ? JSON.parse(stored) : {};
  } catch (error) {
    return console.error("Failed to load state from storage:", error), {};
  }
}
function saveStateToStorage(state) {
  try {
    sessionStorage.setItem(STORAGE_KEY, JSON.stringify(state));
  } catch (error) {
    console.error("Failed to save state to storage:", error);
  }
}
function AppStateProvider({ children }) {
  const [state, setState] = useState(() => {
    const storedState = loadStateFromStorage();
    return {
      appBlockRequestList: [],
      appUnblockRequestList: [],
      lastBlockRequestNumber: 0,
      lastUnblockRequestNumber: 0,
      isMainAppBlocked: !1,
      toolbarBoxRef: createRef(),
      minimized: storedState.minimized ?? !1,
      requestMainAppBlock: () => 0,
      // These will be replaced by the actual implementations
      requestMainAppUnblock: () => 0,
      discardMainAppBlock: () => {
      },
      discardMainAppUnblock: () => {
      },
      setToolbarBoxRef: () => {
      },
      unsetToolbarBoxRef: () => {
      },
      minimize: () => {
      },
      expand: () => {
      }
    };
  });
  useEffect(() => {
    saveStateToStorage({
      minimized: state.minimized
    });
  }, [state.minimized]);
  const requestMainAppBlock = useCallback(() => {
    let newHandleValue = 0;
    return setState((prev) => (newHandleValue = prev.lastBlockRequestNumber + 1, {
      ...prev,
      appBlockRequestList: [...prev.appBlockRequestList, newHandleValue],
      lastBlockRequestNumber: newHandleValue,
      isMainAppBlocked: prev.appUnblockRequestList.length === 0
    })), newHandleValue;
  }, []), requestMainAppUnblock = useCallback(() => {
    let newHandleValue = 0;
    return setState((prev) => (newHandleValue = prev.lastUnblockRequestNumber + 1, {
      ...prev,
      appUnblockRequestList: [...prev.appUnblockRequestList, newHandleValue],
      lastUnblockRequestNumber: newHandleValue,
      isMainAppBlocked: !1
    })), newHandleValue;
  }, []), discardMainAppBlock = useCallback((handle) => {
    setState((prev) => {
      const newBlockRequestList = prev.appBlockRequestList.filter(
        (h2) => h2 !== handle
      );
      return {
        ...prev,
        appBlockRequestList: newBlockRequestList,
        isMainAppBlocked: newBlockRequestList.length > 0 && prev.appUnblockRequestList.length === 0
      };
    });
  }, []), discardMainAppUnblock = useCallback((handle) => {
    setState((prev) => {
      const newUnblockRequestList = prev.appUnblockRequestList.filter(
        (h2) => h2 !== handle
      );
      return {
        ...prev,
        appUnblockRequestList: newUnblockRequestList,
        isMainAppBlocked: prev.appBlockRequestList.length > 0 && newUnblockRequestList.length === 0
      };
    });
  }, []), setToolbarBoxRef = useCallback((ref) => {
    setState((prev) => ({ ...prev, toolbarBoxRef: ref }));
  }, []), unsetToolbarBoxRef = useCallback(() => {
    setState((prev) => ({ ...prev, toolbarBoxRef: createRef() }));
  }, []), minimize = useCallback(() => {
    setState((prev) => ({ ...prev, minimized: !0 }));
  }, []), expand = useCallback(() => {
    setState((prev) => ({ ...prev, minimized: !1 }));
  }, []), value = {
    requestMainAppBlock,
    requestMainAppUnblock,
    discardMainAppBlock,
    discardMainAppUnblock,
    isMainAppBlocked: state.isMainAppBlocked,
    toolbarBoxRef: state.toolbarBoxRef,
    setToolbarBoxRef,
    unsetToolbarBoxRef,
    minimized: state.minimized,
    minimize,
    expand
  };
  return /* @__PURE__ */ jsx(AppContext.Provider, { value, children });
}
function useAppState() {
  const context = useContext(AppContext);
  if (!context)
    throw new Error("useAppState must be used within an AppStateProvider");
  return context;
}
const ChatContext = createContext({
  chats: [],
  currentChatId: null,
  createChat: () => "",
  deleteChat: () => {
  },
  setCurrentChat: () => {
  },
  setChatInput: () => {
  },
  addChatDomContext: () => {
  },
  removeChatDomContext: () => {
  },
  addMessage: () => {
  },
  chatAreaState: "hidden",
  setChatAreaState: () => {
  },
  isPromptCreationActive: !1,
  startPromptCreation: () => {
  },
  stopPromptCreation: () => {
  },
  promptState: "idle",
  resetPromptState: () => {
  }
}), ChatStateProvider = ({ children }) => {
  const [chats, setChats] = useState([
    {
      id: "new_chat",
      messages: [],
      title: "New chat",
      inputValue: "",
      domContextElements: []
    }
  ]), [currentChatId, setCurrentChatId] = useState("new_chat"), [chatAreaState, internalSetChatAreaState] = useState("hidden"), [isPromptCreationMode, setIsPromptCreationMode] = useState(!1), [promptState, setPromptState] = useState("idle"), resetPromptState = useCallback(() => {
    setPromptState("idle");
  }, []), { minimized } = useAppState(), { selectedSession, setShouldPromptWindowSelection } = useVSCode();
  useEffect(() => {
    minimized && (setIsPromptCreationMode(!1), internalSetChatAreaState("hidden"));
  }, [minimized]);
  const { bridge } = useSRPCBridge(), createChat = useCallback(() => {
    const newChatId = generateId(), newChat = {
      id: newChatId,
      title: null,
      messages: [],
      inputValue: "",
      domContextElements: []
    };
    return setChats((prev) => [...prev, newChat]), setCurrentChatId(newChatId), newChatId;
  }, []), deleteChat = useCallback(
    (chatId) => {
      setChats((prev) => {
        const filteredChats = prev.filter((chat) => chat.id !== chatId);
        return filteredChats.length === 0 ? [
          {
            id: "new_chat",
            messages: [],
            title: "New chat",
            inputValue: "",
            domContextElements: []
          }
        ] : filteredChats;
      }), currentChatId === chatId && setChats((prev) => (setCurrentChatId(prev[0].id), prev));
    },
    [currentChatId]
  ), setCurrentChat = useCallback((chatId) => {
    setCurrentChatId(chatId);
  }, []), setChatInput = useCallback((chatId, value2) => {
    setChats(
      (prev) => prev.map(
        (chat) => chat.id === chatId ? { ...chat, inputValue: value2 } : chat
      )
    );
  }, []), { plugins } = usePlugins(), startPromptCreation = useCallback(() => {
    setIsPromptCreationMode(!0), chatAreaState === "hidden" && internalSetChatAreaState("compact"), plugins.forEach((plugin) => {
      var _a;
      (_a = plugin.onPromptingStart) == null || _a.call(plugin);
    });
  }, [chatAreaState]), stopPromptCreation = useCallback(() => {
    setIsPromptCreationMode(!1), setPromptState("idle"), setChats(
      (prev) => prev.map(
        (chat) => chat.id === currentChatId ? { ...chat, domContextElements: [] } : chat
      )
    ), chatAreaState === "compact" && internalSetChatAreaState("hidden"), plugins.forEach((plugin) => {
      var _a;
      (_a = plugin.onPromptingAbort) == null || _a.call(plugin);
    });
  }, [currentChatId, chatAreaState]), setChatAreaState = useCallback(
    (state) => {
      internalSetChatAreaState(state), state === "hidden" && stopPromptCreation();
    },
    [internalSetChatAreaState, stopPromptCreation]
  ), addChatDomContext = useCallback(
    (chatId, element) => {
      const pluginsWithContextGetters = plugins.filter(
        (plugin) => plugin.onContextElementSelect
      );
      setChats(
        (prev) => prev.map((chat) => chat.id === chatId ? {
          ...chat,
          domContextElements: [
            ...chat.domContextElements,
            {
              element,
              pluginContext: pluginsWithContextGetters.map((plugin) => {
                var _a;
                return {
                  pluginName: plugin.pluginName,
                  context: (_a = plugin.onContextElementSelect) == null ? void 0 : _a.call(plugin, element)
                };
              })
            }
          ]
        } : chat)
      );
    },
    [plugins]
  ), removeChatDomContext = useCallback(
    (chatId, element) => {
      setChats(
        (prev) => prev.map(
          (chat) => chat.id === chatId ? {
            ...chat,
            domContextElements: chat.domContextElements.filter(
              (e2) => e2.element !== element
            )
          } : chat
        )
      );
    },
    []
  ), addMessage = useCallback(
    async (chatId, content, pluginTriggered = !1) => {
      if (!content.trim() || promptState === "loading") return;
      const chat = chats.find((chat2) => chat2.id === chatId);
      setPromptState("loading");
      const pluginContextSnippets = [], pluginProcessingPromises = plugins.map(async (plugin) => {
        var _a;
        const userMessagePayload = {
          id: generateId(),
          text: content,
          contextElements: (chat == null ? void 0 : chat.domContextElements.map((el) => el.element)) || [],
          sentByPlugin: pluginTriggered
        }, handlerResult = await ((_a = plugin.onPromptSend) == null ? void 0 : _a.call(plugin, userMessagePayload));
        if (!handlerResult || !handlerResult.contextSnippets || handlerResult.contextSnippets.length === 0)
          return null;
        const snippetPromises = handlerResult.contextSnippets.map(
          async (snippet) => {
            const resolvedContent = typeof snippet.content == "string" ? snippet.content : await snippet.content();
            return {
              promptContextName: snippet.promptContextName,
              content: resolvedContent
            };
          }
        ), resolvedSnippets = await Promise.all(snippetPromises);
        return resolvedSnippets.length > 0 ? {
          pluginName: plugin.pluginName,
          contextSnippets: resolvedSnippets
        } : null;
      });
      (await Promise.all(pluginProcessingPromises)).forEach((pluginCtx) => {
        pluginCtx && pluginContextSnippets.push(pluginCtx);
      });
      const prompt = createPrompt(
        chat == null ? void 0 : chat.domContextElements.map((e2) => e2.element),
        content,
        window.parent.location.href,
        pluginContextSnippets
      ), newMessage = {
        id: generateId(),
        content: content.trim(),
        sender: "user",
        type: "regular",
        timestamp: /* @__PURE__ */ new Date()
      };
      async function triggerAgentPrompt() {
        if (bridge)
          try {
            const result = await bridge.call.triggerAgentPrompt(
              {
                prompt,
                sessionId: selectedSession == null ? void 0 : selectedSession.sessionId
              },
              { onUpdate: (_update) => {
              } }
            );
            result.result.success ? (setTimeout(() => {
              setPromptState("success");
            }, 1e3), setChats(
              (prev) => prev.map(
                (chat2) => chat2.id === chatId ? { ...chat2, inputValue: "" } : chat2
              )
            )) : (result.result.errorCode && result.result.errorCode === "session_mismatch" && setShouldPromptWindowSelection(!0), setPromptState("error"), setTimeout(() => {
              setPromptState("idle"), setIsPromptCreationMode(!1), setChats(
                (prev) => prev.map(
                  (chat2) => chat2.id === chatId ? { ...chat2, inputValue: "" } : chat2
                )
              );
            }, 300));
          } catch {
            setPromptState("error"), setTimeout(() => {
              setPromptState("idle"), setIsPromptCreationMode(!1), setChats(
                (prev) => prev.map(
                  (chat2) => chat2.id === chatId ? { ...chat2, inputValue: "" } : chat2
                )
              );
            }, 300);
          }
        else
          setShouldPromptWindowSelection(!0), setPromptState("error"), setTimeout(() => {
            setPromptState("idle"), setIsPromptCreationMode(!1), setChats(
              (prev) => prev.map(
                (chat2) => chat2.id === chatId ? { ...chat2, inputValue: "" } : chat2
              )
            );
          }, 300);
      }
      triggerAgentPrompt(), chatAreaState === "hidden" && internalSetChatAreaState("compact"), setChats(
        (prev) => prev.map(
          (chat2) => chat2.id === chatId ? {
            ...chat2,
            messages: [...chat2.messages, newMessage],
            inputValue: content.trim(),
            // Keep the original prompt instead of clearing
            domContextElements: []
          } : chat2
        )
      );
    },
    [
      chatAreaState,
      bridge,
      chats,
      setIsPromptCreationMode,
      internalSetChatAreaState,
      selectedSession,
      promptState,
      setPromptState,
      plugins
    ]
  ), value = {
    chats,
    currentChatId,
    createChat,
    deleteChat,
    setCurrentChat,
    setChatInput,
    addMessage,
    chatAreaState,
    setChatAreaState,
    isPromptCreationActive: isPromptCreationMode,
    startPromptCreation,
    stopPromptCreation,
    addChatDomContext,
    removeChatDomContext,
    promptState,
    resetPromptState
  };
  return /* @__PURE__ */ jsx(ChatContext.Provider, { value, children });
};
function useChatState() {
  const context = useContext(ChatContext);
  if (!context)
    throw new Error("useChatState must be used within a ChatStateProvider");
  return context;
}
function ContextProviders({
  children,
  config: config2
}) {
  return /* @__PURE__ */ jsx(ConfigProvider, { config: config2, children: /* @__PURE__ */ jsx(VSCodeProvider, { children: /* @__PURE__ */ jsx(SRPCBridgeProvider, { children: /* @__PURE__ */ jsx(PluginProvider, { children: /* @__PURE__ */ jsx(ChatStateProvider, { children }) }) }) }) });
}
function useEventListener(eventName, handler, options, element = window) {
  useEffect(() => {
    if (!(typeof window > "u") && element)
      return element.addEventListener(eventName, handler, options), () => element.removeEventListener(eventName, handler, options);
  }, [eventName, handler, element, options]);
}
function HotkeyListener() {
  const { startPromptCreation, stopPromptCreation, isPromptCreationActive } = useChatState(), hotKeyHandlerMap = useMemo(
    () => ({
      // Functions that return true will prevent further propagation of the event.
      [HotkeyActions.CTRL_ALT_C]: () => isPromptCreationActive ? !1 : (startPromptCreation(), !0),
      [HotkeyActions.ESC]: () => isPromptCreationActive ? (stopPromptCreation(), !0) : !1
    }),
    [startPromptCreation, stopPromptCreation, isPromptCreationActive]
  ), hotKeyListener = useCallback(
    (ev) => {
      for (const [action, definition] of Object.entries(
        hotkeyActionDefinitions
      ))
        if (definition.isEventMatching(ev)) {
          hotKeyHandlerMap[action]() && (ev.preventDefault(), ev.stopPropagation());
          break;
        }
    },
    [hotKeyHandlerMap]
  );
  return useEventListener("keydown", hotKeyListener, {
    capture: !0
  }), null;
}
const $f0a04ccd8dbdd83b$export$e5c5a5f917a5871c = typeof document < "u" ? React.useLayoutEffect : () => {
};
function $8ae05eaa5c114e9c$export$7f54fc3180508a52(fn) {
  const ref = useRef(null);
  return $f0a04ccd8dbdd83b$export$e5c5a5f917a5871c(() => {
    ref.current = fn;
  }, [
    fn
  ]), useCallback((...args) => {
    const f2 = ref.current;
    return f2 == null ? void 0 : f2(...args);
  }, []);
}
const $431fbd86ca7dc216$export$b204af158042fbac = (el) => {
  var _el_ownerDocument;
  return (_el_ownerDocument = el == null ? void 0 : el.ownerDocument) !== null && _el_ownerDocument !== void 0 ? _el_ownerDocument : document;
}, $431fbd86ca7dc216$export$f21a1ffae260145a = (el) => el && "window" in el && el.window === el ? el : $431fbd86ca7dc216$export$b204af158042fbac(el).defaultView || window;
function $431fbd86ca7dc216$var$isNode(value) {
  return value !== null && typeof value == "object" && "nodeType" in value && typeof value.nodeType == "number";
}
function $431fbd86ca7dc216$export$af51f0f06c0f328a(node) {
  return $431fbd86ca7dc216$var$isNode(node) && node.nodeType === Node.DOCUMENT_FRAGMENT_NODE && "host" in node;
}
let $f4e2df6bd15f8569$var$_shadowDOM = !1;
function $f4e2df6bd15f8569$export$98658e8c59125e6a() {
  return $f4e2df6bd15f8569$var$_shadowDOM;
}
function $d4ee10de306f2510$export$4282f70798064fe0(node, otherNode) {
  if (!$f4e2df6bd15f8569$export$98658e8c59125e6a()) return otherNode && node ? node.contains(otherNode) : !1;
  if (!node || !otherNode) return !1;
  let currentNode = otherNode;
  for (; currentNode !== null; ) {
    if (currentNode === node) return !0;
    currentNode.tagName === "SLOT" && currentNode.assignedSlot ? currentNode = currentNode.assignedSlot.parentNode : $431fbd86ca7dc216$export$af51f0f06c0f328a(currentNode) ? currentNode = currentNode.host : currentNode = currentNode.parentNode;
  }
  return !1;
}
const $d4ee10de306f2510$export$cd4e5573fbe2b576 = (doc = document) => {
  var _activeElement_shadowRoot;
  if (!$f4e2df6bd15f8569$export$98658e8c59125e6a()) return doc.activeElement;
  let activeElement = doc.activeElement;
  for (; activeElement && "shadowRoot" in activeElement && (!((_activeElement_shadowRoot = activeElement.shadowRoot) === null || _activeElement_shadowRoot === void 0) && _activeElement_shadowRoot.activeElement); ) activeElement = activeElement.shadowRoot.activeElement;
  return activeElement;
};
function $d4ee10de306f2510$export$e58f029f0fbfdb29(event) {
  return $f4e2df6bd15f8569$export$98658e8c59125e6a() && event.target.shadowRoot && event.composedPath ? event.composedPath()[0] : event.target;
}
var define_process_env_default$2 = {};
function $c87311424ea30a05$var$testUserAgent(re) {
  var _window_navigator_userAgentData;
  return typeof window > "u" || window.navigator == null ? !1 : ((_window_navigator_userAgentData = window.navigator.userAgentData) === null || _window_navigator_userAgentData === void 0 ? void 0 : _window_navigator_userAgentData.brands.some((brand) => re.test(brand.brand))) || re.test(window.navigator.userAgent);
}
function $c87311424ea30a05$var$testPlatform(re) {
  var _window_navigator_userAgentData;
  return typeof window < "u" && window.navigator != null ? re.test(((_window_navigator_userAgentData = window.navigator.userAgentData) === null || _window_navigator_userAgentData === void 0 ? void 0 : _window_navigator_userAgentData.platform) || window.navigator.platform) : !1;
}
function $c87311424ea30a05$var$cached(fn) {
  if (define_process_env_default$2.NODE_ENV === "test") return fn;
  let res = null;
  return () => (res == null && (res = fn()), res);
}
const $c87311424ea30a05$export$9ac100e40613ea10 = $c87311424ea30a05$var$cached(function() {
  return $c87311424ea30a05$var$testPlatform(/^Mac/i);
}), $c87311424ea30a05$export$a11b0059900ceec8 = $c87311424ea30a05$var$cached(function() {
  return $c87311424ea30a05$var$testUserAgent(/Android/i);
});
function $03deb23ff14920c4$export$4eaf04e54aa8eed6() {
  let globalListeners = useRef(/* @__PURE__ */ new Map()), addGlobalListener = useCallback((eventTarget, type, listener, options) => {
    let fn = options != null && options.once ? (...args) => {
      globalListeners.current.delete(listener), listener(...args);
    } : listener;
    globalListeners.current.set(listener, {
      type,
      eventTarget,
      fn,
      options
    }), eventTarget.addEventListener(type, fn, options);
  }, []), removeGlobalListener = useCallback((eventTarget, type, listener, options) => {
    var _globalListeners_current_get;
    let fn = ((_globalListeners_current_get = globalListeners.current.get(listener)) === null || _globalListeners_current_get === void 0 ? void 0 : _globalListeners_current_get.fn) || listener;
    eventTarget.removeEventListener(type, fn, options), globalListeners.current.delete(listener);
  }, []), removeAllGlobalListeners = useCallback(() => {
    globalListeners.current.forEach((value, key) => {
      removeGlobalListener(value.eventTarget, value.type, key, value.options);
    });
  }, [
    removeGlobalListener
  ]);
  return useEffect(() => removeAllGlobalListeners, [
    removeAllGlobalListeners
  ]), {
    addGlobalListener,
    removeGlobalListener,
    removeAllGlobalListeners
  };
}
function $6a7db85432448f7f$export$60278871457622de(event) {
  return event.mozInputSource === 0 && event.isTrusted ? !0 : $c87311424ea30a05$export$a11b0059900ceec8() && event.pointerType ? event.type === "click" && event.buttons === 1 : event.detail === 0 && !event.pointerType;
}
function $8a9cb279dc87e130$export$525bc4921d56d4a(nativeEvent) {
  let event = nativeEvent;
  return event.nativeEvent = nativeEvent, event.isDefaultPrevented = () => event.defaultPrevented, event.isPropagationStopped = () => event.cancelBubble, event.persist = () => {
  }, event;
}
function $8a9cb279dc87e130$export$c2b7abe5d61ec696(event, target) {
  Object.defineProperty(event, "target", {
    value: target
  }), Object.defineProperty(event, "currentTarget", {
    value: target
  });
}
function $8a9cb279dc87e130$export$715c682d09d639cc(onBlur) {
  let stateRef = useRef({
    isFocused: !1,
    observer: null
  });
  $f0a04ccd8dbdd83b$export$e5c5a5f917a5871c(() => {
    const state = stateRef.current;
    return () => {
      state.observer && (state.observer.disconnect(), state.observer = null);
    };
  }, []);
  let dispatchBlur = $8ae05eaa5c114e9c$export$7f54fc3180508a52((e2) => {
    onBlur == null || onBlur(e2);
  });
  return useCallback((e2) => {
    if (e2.target instanceof HTMLButtonElement || e2.target instanceof HTMLInputElement || e2.target instanceof HTMLTextAreaElement || e2.target instanceof HTMLSelectElement) {
      stateRef.current.isFocused = !0;
      let target = e2.target, onBlurHandler = (e3) => {
        if (stateRef.current.isFocused = !1, target.disabled) {
          let event = $8a9cb279dc87e130$export$525bc4921d56d4a(e3);
          dispatchBlur(event);
        }
        stateRef.current.observer && (stateRef.current.observer.disconnect(), stateRef.current.observer = null);
      };
      target.addEventListener("focusout", onBlurHandler, {
        once: !0
      }), stateRef.current.observer = new MutationObserver(() => {
        if (stateRef.current.isFocused && target.disabled) {
          var _stateRef_current_observer;
          (_stateRef_current_observer = stateRef.current.observer) === null || _stateRef_current_observer === void 0 || _stateRef_current_observer.disconnect();
          let relatedTargetEl = target === document.activeElement ? null : document.activeElement;
          target.dispatchEvent(new FocusEvent("blur", {
            relatedTarget: relatedTargetEl
          })), target.dispatchEvent(new FocusEvent("focusout", {
            bubbles: !0,
            relatedTarget: relatedTargetEl
          }));
        }
      }), stateRef.current.observer.observe(target, {
        attributes: !0,
        attributeFilter: [
          "disabled"
        ]
      });
    }
  }, [
    dispatchBlur
  ]);
}
let $8a9cb279dc87e130$export$fda7da73ab5d4c48 = !1;
var define_process_env_default$1 = {};
let $507fabe10e71c6fb$var$currentModality = null, $507fabe10e71c6fb$var$changeHandlers = /* @__PURE__ */ new Set(), $507fabe10e71c6fb$export$d90243b58daecda7 = /* @__PURE__ */ new Map(), $507fabe10e71c6fb$var$hasEventBeforeFocus = !1, $507fabe10e71c6fb$var$hasBlurredWindowRecently = !1;
const $507fabe10e71c6fb$var$FOCUS_VISIBLE_INPUT_KEYS = {
  Tab: !0,
  Escape: !0
};
function $507fabe10e71c6fb$var$triggerChangeHandlers(modality, e2) {
  for (let handler of $507fabe10e71c6fb$var$changeHandlers) handler(modality, e2);
}
function $507fabe10e71c6fb$var$isValidKey(e2) {
  return !(e2.metaKey || !$c87311424ea30a05$export$9ac100e40613ea10() && e2.altKey || e2.ctrlKey || e2.key === "Control" || e2.key === "Shift" || e2.key === "Meta");
}
function $507fabe10e71c6fb$var$handleKeyboardEvent(e2) {
  $507fabe10e71c6fb$var$hasEventBeforeFocus = !0, $507fabe10e71c6fb$var$isValidKey(e2) && ($507fabe10e71c6fb$var$currentModality = "keyboard", $507fabe10e71c6fb$var$triggerChangeHandlers("keyboard", e2));
}
function $507fabe10e71c6fb$var$handlePointerEvent(e2) {
  $507fabe10e71c6fb$var$currentModality = "pointer", (e2.type === "mousedown" || e2.type === "pointerdown") && ($507fabe10e71c6fb$var$hasEventBeforeFocus = !0, $507fabe10e71c6fb$var$triggerChangeHandlers("pointer", e2));
}
function $507fabe10e71c6fb$var$handleClickEvent(e2) {
  $6a7db85432448f7f$export$60278871457622de(e2) && ($507fabe10e71c6fb$var$hasEventBeforeFocus = !0, $507fabe10e71c6fb$var$currentModality = "virtual");
}
function $507fabe10e71c6fb$var$handleFocusEvent(e2) {
  e2.target === window || e2.target === document || $8a9cb279dc87e130$export$fda7da73ab5d4c48 || !e2.isTrusted || (!$507fabe10e71c6fb$var$hasEventBeforeFocus && !$507fabe10e71c6fb$var$hasBlurredWindowRecently && ($507fabe10e71c6fb$var$currentModality = "virtual", $507fabe10e71c6fb$var$triggerChangeHandlers("virtual", e2)), $507fabe10e71c6fb$var$hasEventBeforeFocus = !1, $507fabe10e71c6fb$var$hasBlurredWindowRecently = !1);
}
function $507fabe10e71c6fb$var$handleWindowBlur() {
  $507fabe10e71c6fb$var$hasEventBeforeFocus = !1, $507fabe10e71c6fb$var$hasBlurredWindowRecently = !0;
}
function $507fabe10e71c6fb$var$setupGlobalFocusEvents(element) {
  if (typeof window > "u" || $507fabe10e71c6fb$export$d90243b58daecda7.get($431fbd86ca7dc216$export$f21a1ffae260145a(element))) return;
  const windowObject = $431fbd86ca7dc216$export$f21a1ffae260145a(element), documentObject = $431fbd86ca7dc216$export$b204af158042fbac(element);
  let focus = windowObject.HTMLElement.prototype.focus;
  windowObject.HTMLElement.prototype.focus = function() {
    $507fabe10e71c6fb$var$hasEventBeforeFocus = !0, focus.apply(this, arguments);
  }, documentObject.addEventListener("keydown", $507fabe10e71c6fb$var$handleKeyboardEvent, !0), documentObject.addEventListener("keyup", $507fabe10e71c6fb$var$handleKeyboardEvent, !0), documentObject.addEventListener("click", $507fabe10e71c6fb$var$handleClickEvent, !0), windowObject.addEventListener("focus", $507fabe10e71c6fb$var$handleFocusEvent, !0), windowObject.addEventListener("blur", $507fabe10e71c6fb$var$handleWindowBlur, !1), typeof PointerEvent < "u" ? (documentObject.addEventListener("pointerdown", $507fabe10e71c6fb$var$handlePointerEvent, !0), documentObject.addEventListener("pointermove", $507fabe10e71c6fb$var$handlePointerEvent, !0), documentObject.addEventListener("pointerup", $507fabe10e71c6fb$var$handlePointerEvent, !0)) : define_process_env_default$1.NODE_ENV === "test" && (documentObject.addEventListener("mousedown", $507fabe10e71c6fb$var$handlePointerEvent, !0), documentObject.addEventListener("mousemove", $507fabe10e71c6fb$var$handlePointerEvent, !0), documentObject.addEventListener("mouseup", $507fabe10e71c6fb$var$handlePointerEvent, !0)), windowObject.addEventListener("beforeunload", () => {
    $507fabe10e71c6fb$var$tearDownWindowFocusTracking(element);
  }, {
    once: !0
  }), $507fabe10e71c6fb$export$d90243b58daecda7.set(windowObject, {
    focus
  });
}
const $507fabe10e71c6fb$var$tearDownWindowFocusTracking = (element, loadListener) => {
  const windowObject = $431fbd86ca7dc216$export$f21a1ffae260145a(element), documentObject = $431fbd86ca7dc216$export$b204af158042fbac(element);
  loadListener && documentObject.removeEventListener("DOMContentLoaded", loadListener), $507fabe10e71c6fb$export$d90243b58daecda7.has(windowObject) && (windowObject.HTMLElement.prototype.focus = $507fabe10e71c6fb$export$d90243b58daecda7.get(windowObject).focus, documentObject.removeEventListener("keydown", $507fabe10e71c6fb$var$handleKeyboardEvent, !0), documentObject.removeEventListener("keyup", $507fabe10e71c6fb$var$handleKeyboardEvent, !0), documentObject.removeEventListener("click", $507fabe10e71c6fb$var$handleClickEvent, !0), windowObject.removeEventListener("focus", $507fabe10e71c6fb$var$handleFocusEvent, !0), windowObject.removeEventListener("blur", $507fabe10e71c6fb$var$handleWindowBlur, !1), typeof PointerEvent < "u" ? (documentObject.removeEventListener("pointerdown", $507fabe10e71c6fb$var$handlePointerEvent, !0), documentObject.removeEventListener("pointermove", $507fabe10e71c6fb$var$handlePointerEvent, !0), documentObject.removeEventListener("pointerup", $507fabe10e71c6fb$var$handlePointerEvent, !0)) : define_process_env_default$1.NODE_ENV === "test" && (documentObject.removeEventListener("mousedown", $507fabe10e71c6fb$var$handlePointerEvent, !0), documentObject.removeEventListener("mousemove", $507fabe10e71c6fb$var$handlePointerEvent, !0), documentObject.removeEventListener("mouseup", $507fabe10e71c6fb$var$handlePointerEvent, !0)), $507fabe10e71c6fb$export$d90243b58daecda7.delete(windowObject));
};
function $507fabe10e71c6fb$export$2f1888112f558a7d(element) {
  const documentObject = $431fbd86ca7dc216$export$b204af158042fbac(element);
  let loadListener;
  return documentObject.readyState !== "loading" ? $507fabe10e71c6fb$var$setupGlobalFocusEvents(element) : (loadListener = () => {
    $507fabe10e71c6fb$var$setupGlobalFocusEvents(element);
  }, documentObject.addEventListener("DOMContentLoaded", loadListener)), () => $507fabe10e71c6fb$var$tearDownWindowFocusTracking(element, loadListener);
}
typeof document < "u" && $507fabe10e71c6fb$export$2f1888112f558a7d();
function $507fabe10e71c6fb$export$b9b3dfddab17db27() {
  return $507fabe10e71c6fb$var$currentModality !== "pointer";
}
const $507fabe10e71c6fb$var$nonTextInputTypes = /* @__PURE__ */ new Set([
  "checkbox",
  "radio",
  "range",
  "color",
  "file",
  "image",
  "button",
  "submit",
  "reset"
]);
function $507fabe10e71c6fb$var$isKeyboardFocusEvent(isTextInput, modality, e2) {
  let document1 = $431fbd86ca7dc216$export$b204af158042fbac(e2 == null ? void 0 : e2.target);
  const IHTMLInputElement = typeof window < "u" ? $431fbd86ca7dc216$export$f21a1ffae260145a(e2 == null ? void 0 : e2.target).HTMLInputElement : HTMLInputElement, IHTMLTextAreaElement = typeof window < "u" ? $431fbd86ca7dc216$export$f21a1ffae260145a(e2 == null ? void 0 : e2.target).HTMLTextAreaElement : HTMLTextAreaElement, IHTMLElement = typeof window < "u" ? $431fbd86ca7dc216$export$f21a1ffae260145a(e2 == null ? void 0 : e2.target).HTMLElement : HTMLElement, IKeyboardEvent = typeof window < "u" ? $431fbd86ca7dc216$export$f21a1ffae260145a(e2 == null ? void 0 : e2.target).KeyboardEvent : KeyboardEvent;
  return isTextInput = isTextInput || document1.activeElement instanceof IHTMLInputElement && !$507fabe10e71c6fb$var$nonTextInputTypes.has(document1.activeElement.type) || document1.activeElement instanceof IHTMLTextAreaElement || document1.activeElement instanceof IHTMLElement && document1.activeElement.isContentEditable, !(isTextInput && modality === "keyboard" && e2 instanceof IKeyboardEvent && !$507fabe10e71c6fb$var$FOCUS_VISIBLE_INPUT_KEYS[e2.key]);
}
function $507fabe10e71c6fb$export$ec71b4b83ac08ec3(fn, deps, opts) {
  $507fabe10e71c6fb$var$setupGlobalFocusEvents(), useEffect(() => {
    let handler = (modality, e2) => {
      $507fabe10e71c6fb$var$isKeyboardFocusEvent(!!(opts != null && opts.isTextInput), modality, e2) && fn($507fabe10e71c6fb$export$b9b3dfddab17db27());
    };
    return $507fabe10e71c6fb$var$changeHandlers.add(handler), () => {
      $507fabe10e71c6fb$var$changeHandlers.delete(handler);
    };
  }, deps);
}
function $a1ea59d68270f0dd$export$f8168d8dd8fd66e6(props) {
  let { isDisabled, onFocus: onFocusProp, onBlur: onBlurProp, onFocusChange } = props;
  const onBlur = useCallback((e2) => {
    if (e2.target === e2.currentTarget)
      return onBlurProp && onBlurProp(e2), onFocusChange && onFocusChange(!1), !0;
  }, [
    onBlurProp,
    onFocusChange
  ]), onSyntheticFocus = $8a9cb279dc87e130$export$715c682d09d639cc(onBlur), onFocus = useCallback((e2) => {
    const ownerDocument = $431fbd86ca7dc216$export$b204af158042fbac(e2.target), activeElement = ownerDocument ? $d4ee10de306f2510$export$cd4e5573fbe2b576(ownerDocument) : $d4ee10de306f2510$export$cd4e5573fbe2b576();
    e2.target === e2.currentTarget && activeElement === $d4ee10de306f2510$export$e58f029f0fbfdb29(e2.nativeEvent) && (onFocusProp && onFocusProp(e2), onFocusChange && onFocusChange(!0), onSyntheticFocus(e2));
  }, [
    onFocusChange,
    onFocusProp,
    onSyntheticFocus
  ]);
  return {
    focusProps: {
      onFocus: !isDisabled && (onFocusProp || onFocusChange || onBlurProp) ? onFocus : void 0,
      onBlur: !isDisabled && (onBlurProp || onFocusChange) ? onBlur : void 0
    }
  };
}
function $9ab94262bd0047c7$export$420e68273165f4ec(props) {
  let { isDisabled, onBlurWithin, onFocusWithin, onFocusWithinChange } = props, state = useRef({
    isFocusWithin: !1
  }), { addGlobalListener, removeAllGlobalListeners } = $03deb23ff14920c4$export$4eaf04e54aa8eed6(), onBlur = useCallback((e2) => {
    e2.currentTarget.contains(e2.target) && state.current.isFocusWithin && !e2.currentTarget.contains(e2.relatedTarget) && (state.current.isFocusWithin = !1, removeAllGlobalListeners(), onBlurWithin && onBlurWithin(e2), onFocusWithinChange && onFocusWithinChange(!1));
  }, [
    onBlurWithin,
    onFocusWithinChange,
    state,
    removeAllGlobalListeners
  ]), onSyntheticFocus = $8a9cb279dc87e130$export$715c682d09d639cc(onBlur), onFocus = useCallback((e2) => {
    if (!e2.currentTarget.contains(e2.target)) return;
    const ownerDocument = $431fbd86ca7dc216$export$b204af158042fbac(e2.target), activeElement = $d4ee10de306f2510$export$cd4e5573fbe2b576(ownerDocument);
    if (!state.current.isFocusWithin && activeElement === $d4ee10de306f2510$export$e58f029f0fbfdb29(e2.nativeEvent)) {
      onFocusWithin && onFocusWithin(e2), onFocusWithinChange && onFocusWithinChange(!0), state.current.isFocusWithin = !0, onSyntheticFocus(e2);
      let currentTarget = e2.currentTarget;
      addGlobalListener(ownerDocument, "focus", (e3) => {
        if (state.current.isFocusWithin && !$d4ee10de306f2510$export$4282f70798064fe0(currentTarget, e3.target)) {
          let nativeEvent = new ownerDocument.defaultView.FocusEvent("blur", {
            relatedTarget: e3.target
          });
          $8a9cb279dc87e130$export$c2b7abe5d61ec696(nativeEvent, currentTarget);
          let event = $8a9cb279dc87e130$export$525bc4921d56d4a(nativeEvent);
          onBlur(event);
        }
      }, {
        capture: !0
      });
    }
  }, [
    onFocusWithin,
    onFocusWithinChange,
    onSyntheticFocus,
    addGlobalListener,
    onBlur
  ]);
  return isDisabled ? {
    focusWithinProps: {
      // These cannot be null, that would conflict in mergeProps
      onFocus: void 0,
      onBlur: void 0
    }
  } : {
    focusWithinProps: {
      onFocus,
      onBlur
    }
  };
}
var define_process_env_default = {};
let $6179b936705e76d3$var$globalIgnoreEmulatedMouseEvents = !1, $6179b936705e76d3$var$hoverCount = 0;
function $6179b936705e76d3$var$setGlobalIgnoreEmulatedMouseEvents() {
  $6179b936705e76d3$var$globalIgnoreEmulatedMouseEvents = !0, setTimeout(() => {
    $6179b936705e76d3$var$globalIgnoreEmulatedMouseEvents = !1;
  }, 50);
}
function $6179b936705e76d3$var$handleGlobalPointerEvent(e2) {
  e2.pointerType === "touch" && $6179b936705e76d3$var$setGlobalIgnoreEmulatedMouseEvents();
}
function $6179b936705e76d3$var$setupGlobalTouchEvents() {
  if (!(typeof document > "u"))
    return typeof PointerEvent < "u" ? document.addEventListener("pointerup", $6179b936705e76d3$var$handleGlobalPointerEvent) : define_process_env_default.NODE_ENV === "test" && document.addEventListener("touchend", $6179b936705e76d3$var$setGlobalIgnoreEmulatedMouseEvents), $6179b936705e76d3$var$hoverCount++, () => {
      $6179b936705e76d3$var$hoverCount--, !($6179b936705e76d3$var$hoverCount > 0) && (typeof PointerEvent < "u" ? document.removeEventListener("pointerup", $6179b936705e76d3$var$handleGlobalPointerEvent) : define_process_env_default.NODE_ENV === "test" && document.removeEventListener("touchend", $6179b936705e76d3$var$setGlobalIgnoreEmulatedMouseEvents));
    };
}
function $6179b936705e76d3$export$ae780daf29e6d456(props) {
  let { onHoverStart, onHoverChange, onHoverEnd, isDisabled } = props, [isHovered, setHovered] = useState(!1), state = useRef({
    isHovered: !1,
    ignoreEmulatedMouseEvents: !1,
    pointerType: "",
    target: null
  }).current;
  useEffect($6179b936705e76d3$var$setupGlobalTouchEvents, []);
  let { addGlobalListener, removeAllGlobalListeners } = $03deb23ff14920c4$export$4eaf04e54aa8eed6(), { hoverProps, triggerHoverEnd } = useMemo(() => {
    let triggerHoverStart = (event, pointerType) => {
      if (state.pointerType = pointerType, isDisabled || pointerType === "touch" || state.isHovered || !event.currentTarget.contains(event.target)) return;
      state.isHovered = !0;
      let target = event.currentTarget;
      state.target = target, addGlobalListener($431fbd86ca7dc216$export$b204af158042fbac(event.target), "pointerover", (e2) => {
        state.isHovered && state.target && !$d4ee10de306f2510$export$4282f70798064fe0(state.target, e2.target) && triggerHoverEnd2(e2, e2.pointerType);
      }, {
        capture: !0
      }), onHoverStart && onHoverStart({
        type: "hoverstart",
        target,
        pointerType
      }), onHoverChange && onHoverChange(!0), setHovered(!0);
    }, triggerHoverEnd2 = (event, pointerType) => {
      let target = state.target;
      state.pointerType = "", state.target = null, !(pointerType === "touch" || !state.isHovered || !target) && (state.isHovered = !1, removeAllGlobalListeners(), onHoverEnd && onHoverEnd({
        type: "hoverend",
        target,
        pointerType
      }), onHoverChange && onHoverChange(!1), setHovered(!1));
    }, hoverProps2 = {};
    return typeof PointerEvent < "u" ? (hoverProps2.onPointerEnter = (e2) => {
      $6179b936705e76d3$var$globalIgnoreEmulatedMouseEvents && e2.pointerType === "mouse" || triggerHoverStart(e2, e2.pointerType);
    }, hoverProps2.onPointerLeave = (e2) => {
      !isDisabled && e2.currentTarget.contains(e2.target) && triggerHoverEnd2(e2, e2.pointerType);
    }) : define_process_env_default.NODE_ENV === "test" && (hoverProps2.onTouchStart = () => {
      state.ignoreEmulatedMouseEvents = !0;
    }, hoverProps2.onMouseEnter = (e2) => {
      !state.ignoreEmulatedMouseEvents && !$6179b936705e76d3$var$globalIgnoreEmulatedMouseEvents && triggerHoverStart(e2, "mouse"), state.ignoreEmulatedMouseEvents = !1;
    }, hoverProps2.onMouseLeave = (e2) => {
      !isDisabled && e2.currentTarget.contains(e2.target) && triggerHoverEnd2(e2, "mouse");
    }), {
      hoverProps: hoverProps2,
      triggerHoverEnd: triggerHoverEnd2
    };
  }, [
    onHoverStart,
    onHoverChange,
    onHoverEnd,
    isDisabled,
    state,
    addGlobalListener,
    removeAllGlobalListeners
  ]);
  return useEffect(() => {
    isDisabled && triggerHoverEnd({
      currentTarget: state.target
    }, state.pointerType);
  }, [
    isDisabled
  ]), {
    hoverProps,
    isHovered
  };
}
function $f7dceffc5ad7768b$export$4e328f61c538687f(props = {}) {
  let { autoFocus = !1, isTextInput, within } = props, state = useRef({
    isFocused: !1,
    isFocusVisible: autoFocus || $507fabe10e71c6fb$export$b9b3dfddab17db27()
  }), [isFocused, setFocused] = useState(!1), [isFocusVisibleState, setFocusVisible] = useState(() => state.current.isFocused && state.current.isFocusVisible), updateState = useCallback(() => setFocusVisible(state.current.isFocused && state.current.isFocusVisible), []), onFocusChange = useCallback((isFocused2) => {
    state.current.isFocused = isFocused2, setFocused(isFocused2), updateState();
  }, [
    updateState
  ]);
  $507fabe10e71c6fb$export$ec71b4b83ac08ec3((isFocusVisible) => {
    state.current.isFocusVisible = isFocusVisible, updateState();
  }, [], {
    isTextInput
  });
  let { focusProps } = $a1ea59d68270f0dd$export$f8168d8dd8fd66e6({
    isDisabled: within,
    onFocusChange
  }), { focusWithinProps } = $9ab94262bd0047c7$export$420e68273165f4ec({
    isDisabled: !within,
    onFocusWithinChange: onFocusChange
  });
  return {
    isFocused,
    isFocusVisible: isFocusVisibleState,
    focusProps: within ? focusWithinProps : focusProps
  };
}
var i = Object.defineProperty, d = (t2, e2, n2) => e2 in t2 ? i(t2, e2, { enumerable: !0, configurable: !0, writable: !0, value: n2 }) : t2[e2] = n2, r = (t2, e2, n2) => (d(t2, typeof e2 != "symbol" ? e2 + "" : e2, n2), n2);
let o$3 = class {
  constructor() {
    r(this, "current", this.detect()), r(this, "handoffState", "pending"), r(this, "currentId", 0);
  }
  set(e2) {
    this.current !== e2 && (this.handoffState = "pending", this.currentId = 0, this.current = e2);
  }
  reset() {
    this.set(this.detect());
  }
  nextId() {
    return ++this.currentId;
  }
  get isServer() {
    return this.current === "server";
  }
  get isClient() {
    return this.current === "client";
  }
  detect() {
    return typeof window > "u" || typeof document > "u" ? "server" : "client";
  }
  handoff() {
    this.handoffState === "pending" && (this.handoffState = "complete");
  }
  get isHandoffComplete() {
    return this.handoffState === "complete";
  }
}, s$1 = new o$3();
function o$2(n2) {
  var e2, r2;
  return s$1.isServer ? null : n2 ? "ownerDocument" in n2 ? n2.ownerDocument : "current" in n2 ? (r2 = (e2 = n2.current) == null ? void 0 : e2.ownerDocument) != null ? r2 : document : null : document;
}
function t$1(e2) {
  typeof queueMicrotask == "function" ? queueMicrotask(e2) : Promise.resolve().then(e2).catch((o3) => setTimeout(() => {
    throw o3;
  }));
}
function o$1() {
  let n2 = [], r2 = { addEventListener(e2, t2, s2, a2) {
    return e2.addEventListener(t2, s2, a2), r2.add(() => e2.removeEventListener(t2, s2, a2));
  }, requestAnimationFrame(...e2) {
    let t2 = requestAnimationFrame(...e2);
    return r2.add(() => cancelAnimationFrame(t2));
  }, nextFrame(...e2) {
    return r2.requestAnimationFrame(() => r2.requestAnimationFrame(...e2));
  }, setTimeout(...e2) {
    let t2 = setTimeout(...e2);
    return r2.add(() => clearTimeout(t2));
  }, microTask(...e2) {
    let t2 = { current: !0 };
    return t$1(() => {
      t2.current && e2[0]();
    }), r2.add(() => {
      t2.current = !1;
    });
  }, style(e2, t2, s2) {
    let a2 = e2.style.getPropertyValue(t2);
    return Object.assign(e2.style, { [t2]: s2 }), this.add(() => {
      Object.assign(e2.style, { [t2]: a2 });
    });
  }, group(e2) {
    let t2 = o$1();
    return e2(t2), this.add(() => t2.dispose());
  }, add(e2) {
    return n2.includes(e2) || n2.push(e2), () => {
      let t2 = n2.indexOf(e2);
      if (t2 >= 0) for (let s2 of n2.splice(t2, 1)) s2();
    };
  }, dispose() {
    for (let e2 of n2.splice(0)) e2();
  } };
  return r2;
}
function p() {
  let [e2] = useState(o$1);
  return useEffect(() => () => e2.dispose(), [e2]), e2;
}
let n = (e2, t2) => {
  s$1.isServer ? useEffect(e2, t2) : useLayoutEffect(e2, t2);
};
function s(e2) {
  let r2 = useRef(e2);
  return n(() => {
    r2.current = e2;
  }, [e2]), r2;
}
let o2 = function(t2) {
  let e2 = s(t2);
  return React.useCallback((...r2) => e2.current(...r2), [e2]);
};
function E(e2) {
  let t2 = e2.width / 2, n2 = e2.height / 2;
  return { top: e2.clientY - n2, right: e2.clientX + t2, bottom: e2.clientY + n2, left: e2.clientX - t2 };
}
function P$2(e2, t2) {
  return !(!e2 || !t2 || e2.right < t2.left || e2.left > t2.right || e2.bottom < t2.top || e2.top > t2.bottom);
}
function w({ disabled: e2 = !1 } = {}) {
  let t2 = useRef(null), [n2, l] = useState(!1), r2 = p(), o$12 = o2(() => {
    t2.current = null, l(!1), r2.dispose();
  }), f2 = o2((s2) => {
    if (r2.dispose(), t2.current === null) {
      t2.current = s2.currentTarget, l(!0);
      {
        let i2 = o$2(s2.currentTarget);
        r2.addEventListener(i2, "pointerup", o$12, !1), r2.addEventListener(i2, "pointermove", (c2) => {
          if (t2.current) {
            let p2 = E(c2);
            l(P$2(p2, t2.current.getBoundingClientRect()));
          }
        }, !1), r2.addEventListener(i2, "pointercancel", o$12, !1);
      }
    }
  });
  return { pressed: n2, pressProps: e2 ? {} : { onPointerDown: f2, onPointerUp: o$12, onClick: o$12 } };
}
let e$1 = createContext(void 0);
function a$1() {
  return useContext(e$1);
}
function t(...r2) {
  return Array.from(new Set(r2.flatMap((n2) => typeof n2 == "string" ? n2.split(" ") : []))).filter(Boolean).join(" ");
}
function u$2(r2, n2, ...a2) {
  if (r2 in n2) {
    let e2 = n2[r2];
    return typeof e2 == "function" ? e2(...a2) : e2;
  }
  let t2 = new Error(\`Tried to handle "\${r2}" but there is no handler defined. Only defined handlers are: \${Object.keys(n2).map((e2) => \`"\${e2}"\`).join(", ")}.\`);
  throw Error.captureStackTrace && Error.captureStackTrace(t2, u$2), t2;
}
var O = ((a2) => (a2[a2.None = 0] = "None", a2[a2.RenderStrategy = 1] = "RenderStrategy", a2[a2.Static = 2] = "Static", a2))(O || {}), A = ((e2) => (e2[e2.Unmount = 0] = "Unmount", e2[e2.Hidden = 1] = "Hidden", e2))(A || {});
function L$1() {
  let n2 = U$2();
  return useCallback((r2) => C$1({ mergeRefs: n2, ...r2 }), [n2]);
}
function C$1({ ourProps: n2, theirProps: r2, slot: e2, defaultTag: a2, features: s2, visible: t2 = !0, name: l, mergeRefs: i2 }) {
  i2 = i2 ?? $;
  let o3 = P$1(r2, n2);
  if (t2) return F(o3, e2, a2, l, i2);
  let y2 = s2 ?? 0;
  if (y2 & 2) {
    let { static: f2 = !1, ...u2 } = o3;
    if (f2) return F(u2, e2, a2, l, i2);
  }
  if (y2 & 1) {
    let { unmount: f2 = !0, ...u2 } = o3;
    return u$2(f2 ? 0 : 1, { 0() {
      return null;
    }, 1() {
      return F({ ...u2, hidden: !0, style: { display: "none" } }, e2, a2, l, i2);
    } });
  }
  return F(o3, e2, a2, l, i2);
}
function F(n2, r2 = {}, e2, a2, s2) {
  let { as: t$12 = e2, children: l, refName: i2 = "ref", ...o3 } = h(n2, ["unmount", "static"]), y2 = n2.ref !== void 0 ? { [i2]: n2.ref } : {}, f2 = typeof l == "function" ? l(r2) : l;
  "className" in o3 && o3.className && typeof o3.className == "function" && (o3.className = o3.className(r2)), o3["aria-labelledby"] && o3["aria-labelledby"] === o3.id && (o3["aria-labelledby"] = void 0);
  let u2 = {};
  if (r2) {
    let d2 = !1, p2 = [];
    for (let [c2, T] of Object.entries(r2)) typeof T == "boolean" && (d2 = !0), T === !0 && p2.push(c2.replace(/([A-Z])/g, (g) => \`-\${g.toLowerCase()}\`));
    if (d2) {
      u2["data-headlessui-state"] = p2.join(" ");
      for (let c2 of p2) u2[\`data-\${c2}\`] = "";
    }
  }
  if (t$12 === Fragment && (Object.keys(m(o3)).length > 0 || Object.keys(m(u2)).length > 0)) if (!isValidElement(f2) || Array.isArray(f2) && f2.length > 1) {
    if (Object.keys(m(o3)).length > 0) throw new Error(['Passing props on "Fragment"!', "", \`The current component <\${a2} /> is rendering a "Fragment".\`, "However we need to passthrough the following props:", Object.keys(m(o3)).concat(Object.keys(m(u2))).map((d2) => \`  - \${d2}\`).join(\`
\`), "", "You can apply a few solutions:", ['Add an \`as="..."\` prop, to ensure that we render an actual element instead of a "Fragment".', "Render a single element as the child so that we can forward the props onto that element."].map((d2) => \`  - \${d2}\`).join(\`
\`)].join(\`
\`));
  } else {
    let d2 = f2.props, p2 = d2 == null ? void 0 : d2.className, c2 = typeof p2 == "function" ? (...R2) => t(p2(...R2), o3.className) : t(p2, o3.className), T = c2 ? { className: c2 } : {}, g = P$1(f2.props, m(h(o3, ["ref"])));
    for (let R2 in u2) R2 in g && delete u2[R2];
    return cloneElement(f2, Object.assign({}, g, u2, y2, { ref: s2(H$2(f2), y2.ref) }, T));
  }
  return createElement(t$12, Object.assign({}, h(o3, ["ref"]), t$12 !== Fragment && y2, t$12 !== Fragment && u2), f2);
}
function U$2() {
  let n2 = useRef([]), r2 = useCallback((e2) => {
    for (let a2 of n2.current) a2 != null && (typeof a2 == "function" ? a2(e2) : a2.current = e2);
  }, []);
  return (...e2) => {
    if (!e2.every((a2) => a2 == null)) return n2.current = e2, r2;
  };
}
function $(...n2) {
  return n2.every((r2) => r2 == null) ? void 0 : (r2) => {
    for (let e2 of n2) e2 != null && (typeof e2 == "function" ? e2(r2) : e2.current = r2);
  };
}
function P$1(...n2) {
  if (n2.length === 0) return {};
  if (n2.length === 1) return n2[0];
  let r2 = {}, e2 = {};
  for (let s2 of n2) for (let t2 in s2) t2.startsWith("on") && typeof s2[t2] == "function" ? (e2[t2] != null || (e2[t2] = []), e2[t2].push(s2[t2])) : r2[t2] = s2[t2];
  if (r2.disabled || r2["aria-disabled"]) for (let s2 in e2) /^(on(?:Click|Pointer|Mouse|Key)(?:Down|Up|Press)?)$/.test(s2) && (e2[s2] = [(t2) => {
    var l;
    return (l = t2 == null ? void 0 : t2.preventDefault) == null ? void 0 : l.call(t2);
  }]);
  for (let s2 in e2) Object.assign(r2, { [s2](t2, ...l) {
    let i2 = e2[s2];
    for (let o3 of i2) {
      if ((t2 instanceof Event || (t2 == null ? void 0 : t2.nativeEvent) instanceof Event) && t2.defaultPrevented) return;
      o3(t2, ...l);
    }
  } });
  return r2;
}
function _$1(...n2) {
  if (n2.length === 0) return {};
  if (n2.length === 1) return n2[0];
  let r2 = {}, e2 = {};
  for (let s2 of n2) for (let t2 in s2) t2.startsWith("on") && typeof s2[t2] == "function" ? (e2[t2] != null || (e2[t2] = []), e2[t2].push(s2[t2])) : r2[t2] = s2[t2];
  for (let s2 in e2) Object.assign(r2, { [s2](...t2) {
    let l = e2[s2];
    for (let i2 of l) i2 == null || i2(...t2);
  } });
  return r2;
}
function K(n2) {
  var r2;
  return Object.assign(forwardRef(n2), { displayName: (r2 = n2.displayName) != null ? r2 : n2.name });
}
function m(n2) {
  let r2 = Object.assign({}, n2);
  for (let e2 in r2) r2[e2] === void 0 && delete r2[e2];
  return r2;
}
function h(n2, r2 = []) {
  let e2 = Object.assign({}, n2);
  for (let a2 of r2) a2 in e2 && delete e2[a2];
  return e2;
}
function H$2(n2) {
  return React.version.split(".")[0] >= "19" ? n2.props.ref : n2.ref;
}
let R = "button";
function v(a2, u2) {
  var p2;
  let l = a$1(), { disabled: e2 = l || !1, autoFocus: t2 = !1, ...o3 } = a2, { isFocusVisible: r2, focusProps: i2 } = $f7dceffc5ad7768b$export$4e328f61c538687f({ autoFocus: t2 }), { isHovered: s2, hoverProps: T } = $6179b936705e76d3$export$ae780daf29e6d456({ isDisabled: e2 }), { pressed: n2, pressProps: d2 } = w({ disabled: e2 }), f2 = _$1({ ref: u2, type: (p2 = o3.type) != null ? p2 : "button", disabled: e2 || void 0, autoFocus: t2 }, i2, T, d2), m2 = useMemo(() => ({ disabled: e2, hover: s2, focus: r2, active: n2, autofocus: t2 }), [e2, s2, r2, n2, t2]);
  return L$1()({ ourProps: f2, theirProps: o3, slot: m2, defaultTag: R, name: "Button" });
}
let H$1 = K(v), e = createContext(void 0);
function u$1() {
  return useContext(e);
}
let u = Symbol();
function y(...t2) {
  let n2 = useRef(t2);
  useEffect(() => {
    n2.current = t2;
  }, [t2]);
  let c2 = o2((e2) => {
    for (let o3 of n2.current) o3 != null && (typeof o3 == "function" ? o3(e2) : o3.current = e2);
  });
  return t2.every((e2) => e2 == null || (e2 == null ? void 0 : e2[u])) ? void 0 : c2;
}
let a = createContext(null);
a.displayName = "DescriptionContext";
function f() {
  let r2 = useContext(a);
  if (r2 === null) {
    let e2 = new Error("You used a <Description /> component, but it is not inside a relevant parent.");
    throw Error.captureStackTrace && Error.captureStackTrace(e2, f), e2;
  }
  return r2;
}
function U$1() {
  var r2, e2;
  return (e2 = (r2 = useContext(a)) == null ? void 0 : r2.value) != null ? e2 : void 0;
}
let S = "p";
function C(r2, e2) {
  let d2 = useId(), t2 = a$1(), { id: i2 = \`headlessui-description-\${d2}\`, ...l } = r2, n$1 = f(), s2 = y(e2);
  n(() => n$1.register(i2), [i2, n$1.register]);
  let o3 = t2 || !1, p2 = useMemo(() => ({ ...n$1.slot, disabled: o3 }), [n$1.slot, o3]), D = { ref: s2, ...n$1.props, id: i2 };
  return L$1()({ ourProps: D, theirProps: l, slot: p2, defaultTag: S, name: n$1.name || "Description" });
}
let _ = K(C);
Object.assign(_, {});
let c = createContext(null);
c.displayName = "LabelContext";
function P() {
  let r2 = useContext(c);
  if (r2 === null) {
    let l = new Error("You used a <Label /> component, but it is not inside a relevant parent.");
    throw Error.captureStackTrace && Error.captureStackTrace(l, P), l;
  }
  return r2;
}
function I(r2) {
  var a2, e2, o3;
  let l = (e2 = (a2 = useContext(c)) == null ? void 0 : a2.value) != null ? e2 : void 0;
  return ((o3 = void 0) != null ? o3 : 0) > 0 ? [l, ...r2].filter(Boolean).join(" ") : l;
}
let N = "label";
function G(r2, l) {
  var y$1;
  let a2 = useId(), e2 = P(), o$12 = u$1(), g = a$1(), { id: t2 = \`headlessui-label-\${a2}\`, htmlFor: s2 = o$12 ?? ((y$1 = e2.props) == null ? void 0 : y$1.htmlFor), passive: m2 = !1, ...i2 } = r2, p2 = y(l);
  n(() => e2.register(t2), [t2, e2.register]);
  let u2 = o2((L2) => {
    let b = L2.currentTarget;
    if (b instanceof HTMLLabelElement && L2.preventDefault(), e2.props && "onClick" in e2.props && typeof e2.props.onClick == "function" && e2.props.onClick(L2), b instanceof HTMLLabelElement) {
      let n2 = document.getElementById(b.htmlFor);
      if (n2) {
        let E2 = n2.getAttribute("disabled");
        if (E2 === "true" || E2 === "") return;
        let x = n2.getAttribute("aria-disabled");
        if (x === "true" || x === "") return;
        (n2 instanceof HTMLInputElement && (n2.type === "radio" || n2.type === "checkbox") || n2.role === "radio" || n2.role === "checkbox" || n2.role === "switch") && n2.click(), n2.focus({ preventScroll: !0 });
      }
    }
  }), d2 = g || !1, C2 = useMemo(() => ({ ...e2.slot, disabled: d2 }), [e2.slot, d2]), f2 = { ref: p2, ...e2.props, id: t2, htmlFor: s2, onClick: u2 };
  return m2 && ("onClick" in f2 && (delete f2.htmlFor, delete f2.onClick), "onClick" in i2 && delete i2.onClick), L$1()({ ourProps: f2, theirProps: i2, slot: C2, defaultTag: s2 ? N : "div", name: e2.name || "Label" });
}
let U = K(G);
Object.assign(U, {});
let L = "textarea";
function H(s2, l) {
  let i2 = useId(), d2 = u$1(), n2 = a$1(), { id: p2 = d2 || \`headlessui-textarea-\${i2}\`, disabled: e2 = n2 || !1, autoFocus: r2 = !1, invalid: a2 = !1, ...T } = s2, f2 = I(), m2 = U$1(), { isFocused: o3, focusProps: u2 } = $f7dceffc5ad7768b$export$4e328f61c538687f({ autoFocus: r2 }), { isHovered: t2, hoverProps: b } = $6179b936705e76d3$export$ae780daf29e6d456({ isDisabled: e2 }), y2 = _$1({ ref: l, id: p2, "aria-labelledby": f2, "aria-describedby": m2, "aria-invalid": a2 ? "true" : void 0, disabled: e2 || void 0, autoFocus: r2 }, u2, b), x = useMemo(() => ({ disabled: e2, invalid: a2, hover: t2, focus: o3, autofocus: r2 }), [e2, a2, t2, o3, r2]);
  return L$1()({ ourProps: y2, theirProps: T, slot: x, defaultTag: L, name: "Textarea" });
}
let J = K(H);
/**
 * @license lucide-react v0.523.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
const toKebabCase = (string) => string.replace(/([a-z0-9])([A-Z])/g, "$1-$2").toLowerCase(), toCamelCase = (string) => string.replace(
  /^([A-Z])|[\\s-_]+(\\w)/g,
  (match, p1, p2) => p2 ? p2.toUpperCase() : p1.toLowerCase()
), toPascalCase = (string) => {
  const camelCase = toCamelCase(string);
  return camelCase.charAt(0).toUpperCase() + camelCase.slice(1);
}, mergeClasses = (...classes) => classes.filter((className, index, array) => !!className && className.trim() !== "" && array.indexOf(className) === index).join(" ").trim(), hasA11yProp = (props) => {
  for (const prop in props)
    if (prop.startsWith("aria-") || prop === "role" || prop === "title")
      return !0;
};
/**
 * @license lucide-react v0.523.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
var defaultAttributes = {
  xmlns: "http://www.w3.org/2000/svg",
  width: 24,
  height: 24,
  viewBox: "0 0 24 24",
  fill: "none",
  stroke: "currentColor",
  strokeWidth: 2,
  strokeLinecap: "round",
  strokeLinejoin: "round"
};
/**
 * @license lucide-react v0.523.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
const Icon = forwardRef(
  ({
    color = "currentColor",
    size = 24,
    strokeWidth = 2,
    absoluteStrokeWidth,
    className = "",
    children,
    iconNode,
    ...rest
  }, ref) => createElement(
    "svg",
    {
      ref,
      ...defaultAttributes,
      width: size,
      height: size,
      stroke: color,
      strokeWidth: absoluteStrokeWidth ? Number(strokeWidth) * 24 / Number(size) : strokeWidth,
      className: mergeClasses("lucide", className),
      ...!children && !hasA11yProp(rest) && { "aria-hidden": "true" },
      ...rest
    },
    [
      ...iconNode.map(([tag, attrs]) => createElement(tag, attrs)),
      ...Array.isArray(children) ? children : [children]
    ]
  )
);
/**
 * @license lucide-react v0.523.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
const createLucideIcon = (iconName, iconNode) => {
  const Component = forwardRef(
    ({ className, ...props }, ref) => createElement(Icon, {
      ref,
      iconNode,
      className: mergeClasses(
        \`lucide-\${toKebabCase(toPascalCase(iconName))}\`,
        \`lucide-\${iconName}\`,
        className
      ),
      ...props
    })
  );
  return Component.displayName = toPascalCase(iconName), Component;
};
/**
 * @license lucide-react v0.523.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
const __iconNode$9 = [["path", { d: "m6 9 6 6 6-6", key: "qrunsl" }]], ChevronDown = createLucideIcon("chevron-down", __iconNode$9);
/**
 * @license lucide-react v0.523.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
const __iconNode$8 = [["path", { d: "m18 15-6-6-6 6", key: "153udz" }]], ChevronUp = createLucideIcon("chevron-up", __iconNode$8);
/**
 * @license lucide-react v0.523.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
const __iconNode$7 = [
  ["path", { d: "M7.9 20A9 9 0 1 0 4 16.1L2 22Z", key: "vv11sd" }]
], MessageCircle = createLucideIcon("message-circle", __iconNode$7);
/**
 * @license lucide-react v0.523.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
const __iconNode$6 = [
  ["path", { d: "M5 12h14", key: "1ays0h" }],
  ["path", { d: "M12 5v14", key: "s699le" }]
], Plus = createLucideIcon("plus", __iconNode$6);
/**
 * @license lucide-react v0.523.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
const __iconNode$5 = [
  [
    "path",
    {
      d: "M15.39 4.39a1 1 0 0 0 1.68-.474 2.5 2.5 0 1 1 3.014 3.015 1 1 0 0 0-.474 1.68l1.683 1.682a2.414 2.414 0 0 1 0 3.414L19.61 15.39a1 1 0 0 1-1.68-.474 2.5 2.5 0 1 0-3.014 3.015 1 1 0 0 1 .474 1.68l-1.683 1.682a2.414 2.414 0 0 1-3.414 0L8.61 19.61a1 1 0 0 0-1.68.474 2.5 2.5 0 1 1-3.014-3.015 1 1 0 0 0 .474-1.68l-1.683-1.682a2.414 2.414 0 0 1 0-3.414L4.39 8.61a1 1 0 0 1 1.68.474 2.5 2.5 0 1 0 3.014-3.015 1 1 0 0 1-.474-1.68l1.683-1.682a2.414 2.414 0 0 1 3.414 0z",
      key: "w46dr5"
    }
  ]
], Puzzle = createLucideIcon("puzzle", __iconNode$5);
/**
 * @license lucide-react v0.523.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
const __iconNode$4 = [
  ["path", { d: "M3 12a9 9 0 0 1 9-9 9.75 9.75 0 0 1 6.74 2.74L21 8", key: "v9h5vc" }],
  ["path", { d: "M21 3v5h-5", key: "1q7to0" }],
  ["path", { d: "M21 12a9 9 0 0 1-9 9 9.75 9.75 0 0 1-6.74-2.74L3 16", key: "3uifl3" }],
  ["path", { d: "M8 16H3v5", key: "1cv678" }]
], RefreshCw = createLucideIcon("refresh-cw", __iconNode$4);
/**
 * @license lucide-react v0.523.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
const __iconNode$3 = [
  [
    "path",
    {
      d: "M14.536 21.686a.5.5 0 0 0 .937-.024l6.5-19a.496.496 0 0 0-.635-.635l-19 6.5a.5.5 0 0 0-.024.937l7.93 3.18a2 2 0 0 1 1.112 1.11z",
      key: "1ffxy3"
    }
  ],
  ["path", { d: "m21.854 2.147-10.94 10.939", key: "12cjpa" }]
], Send = createLucideIcon("send", __iconNode$3);
/**
 * @license lucide-react v0.523.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
const __iconNode$2 = [
  [
    "path",
    {
      d: "M12.22 2h-.44a2 2 0 0 0-2 2v.18a2 2 0 0 1-1 1.73l-.43.25a2 2 0 0 1-2 0l-.15-.08a2 2 0 0 0-2.73.73l-.22.38a2 2 0 0 0 .73 2.73l.15.1a2 2 0 0 1 1 1.72v.51a2 2 0 0 1-1 1.74l-.15.09a2 2 0 0 0-.73 2.73l.22.38a2 2 0 0 0 2.73.73l.15-.08a2 2 0 0 1 2 0l.43.25a2 2 0 0 1 1 1.73V20a2 2 0 0 0 2 2h.44a2 2 0 0 0 2-2v-.18a2 2 0 0 1 1-1.73l.43-.25a2 2 0 0 1 2 0l.15.08a2 2 0 0 0 2.73-.73l.22-.39a2 2 0 0 0-.73-2.73l-.15-.08a2 2 0 0 1-1-1.74v-.5a2 2 0 0 1 1-1.74l.15-.09a2 2 0 0 0 .73-2.73l-.22-.38a2 2 0 0 0-2.73-.73l-.15.08a2 2 0 0 1-2 0l-.43-.25a2 2 0 0 1-1-1.73V4a2 2 0 0 0-2-2z",
      key: "1qme2f"
    }
  ],
  ["circle", { cx: "12", cy: "12", r: "3", key: "1v7zrd" }]
], Settings = createLucideIcon("settings", __iconNode$2);
/**
 * @license lucide-react v0.523.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
const __iconNode$1 = [
  ["path", { d: "M3 6h18", key: "d0wm0j" }],
  ["path", { d: "M19 6v14c0 1-1 2-2 2H7c-1 0-2-1-2-2V6", key: "4alrt4" }],
  ["path", { d: "M8 6V4c0-1 1-2 2-2h4c1 0 2 1 2 2v2", key: "v07s0e" }],
  ["line", { x1: "10", x2: "10", y1: "11", y2: "17", key: "1uufr5" }],
  ["line", { x1: "14", x2: "14", y1: "11", y2: "17", key: "xtxkd" }]
], Trash2 = createLucideIcon("trash-2", __iconNode$1);
/**
 * @license lucide-react v0.523.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
const __iconNode = [
  ["path", { d: "M12 20h.01", key: "zekei9" }],
  ["path", { d: "M8.5 16.429a5 5 0 0 1 7 0", key: "1bycff" }],
  ["path", { d: "M5 12.859a10 10 0 0 1 5.17-2.69", key: "1dl1wf" }],
  ["path", { d: "M19 12.859a10 10 0 0 0-2.007-1.523", key: "4k23kn" }],
  ["path", { d: "M2 8.82a15 15 0 0 1 4.177-2.643", key: "1grhjp" }],
  ["path", { d: "M22 8.82a15 15 0 0 0-11.288-3.764", key: "z3jwby" }],
  ["path", { d: "m2 2 20 20", key: "1ooewy" }]
], WifiOff = createLucideIcon("wifi-off", __iconNode), BROWSER_ALIASES_MAP = {
  "Amazon Silk": "amazon_silk",
  "Android Browser": "android",
  Bada: "bada",
  BlackBerry: "blackberry",
  Chrome: "chrome",
  Chromium: "chromium",
  Electron: "electron",
  Epiphany: "epiphany",
  Firefox: "firefox",
  Focus: "focus",
  Generic: "generic",
  "Google Search": "google_search",
  Googlebot: "googlebot",
  "Internet Explorer": "ie",
  "K-Meleon": "k_meleon",
  Maxthon: "maxthon",
  "Microsoft Edge": "edge",
  "MZ Browser": "mz",
  "NAVER Whale Browser": "naver",
  Opera: "opera",
  "Opera Coast": "opera_coast",
  PhantomJS: "phantomjs",
  Puffin: "puffin",
  QupZilla: "qupzilla",
  QQ: "qq",
  QQLite: "qqlite",
  Safari: "safari",
  Sailfish: "sailfish",
  "Samsung Internet for Android": "samsung_internet",
  SeaMonkey: "seamonkey",
  Sleipnir: "sleipnir",
  Swing: "swing",
  Tizen: "tizen",
  "UC Browser": "uc",
  Vivaldi: "vivaldi",
  "WebOS Browser": "webos",
  WeChat: "wechat",
  "Yandex Browser": "yandex",
  Roku: "roku"
}, BROWSER_MAP = {
  amazon_silk: "Amazon Silk",
  android: "Android Browser",
  bada: "Bada",
  blackberry: "BlackBerry",
  chrome: "Chrome",
  chromium: "Chromium",
  electron: "Electron",
  epiphany: "Epiphany",
  firefox: "Firefox",
  focus: "Focus",
  generic: "Generic",
  googlebot: "Googlebot",
  google_search: "Google Search",
  ie: "Internet Explorer",
  k_meleon: "K-Meleon",
  maxthon: "Maxthon",
  edge: "Microsoft Edge",
  mz: "MZ Browser",
  naver: "NAVER Whale Browser",
  opera: "Opera",
  opera_coast: "Opera Coast",
  phantomjs: "PhantomJS",
  puffin: "Puffin",
  qupzilla: "QupZilla",
  qq: "QQ Browser",
  qqlite: "QQ Browser Lite",
  safari: "Safari",
  sailfish: "Sailfish",
  samsung_internet: "Samsung Internet for Android",
  seamonkey: "SeaMonkey",
  sleipnir: "Sleipnir",
  swing: "Swing",
  tizen: "Tizen",
  uc: "UC Browser",
  vivaldi: "Vivaldi",
  webos: "WebOS Browser",
  wechat: "WeChat",
  yandex: "Yandex Browser"
}, PLATFORMS_MAP = {
  tablet: "tablet",
  mobile: "mobile",
  desktop: "desktop",
  tv: "tv"
}, OS_MAP = {
  WindowsPhone: "Windows Phone",
  Windows: "Windows",
  MacOS: "macOS",
  iOS: "iOS",
  Android: "Android",
  WebOS: "WebOS",
  BlackBerry: "BlackBerry",
  Bada: "Bada",
  Tizen: "Tizen",
  Linux: "Linux",
  ChromeOS: "Chrome OS",
  PlayStation4: "PlayStation 4",
  Roku: "Roku"
}, ENGINE_MAP = {
  EdgeHTML: "EdgeHTML",
  Blink: "Blink",
  Trident: "Trident",
  Presto: "Presto",
  Gecko: "Gecko",
  WebKit: "WebKit"
};
class Utils {
  /**
   * Get first matched item for a string
   * @param {RegExp} regexp
   * @param {String} ua
   * @return {Array|{index: number, input: string}|*|boolean|string}
   */
  static getFirstMatch(regexp, ua) {
    const match = ua.match(regexp);
    return match && match.length > 0 && match[1] || "";
  }
  /**
   * Get second matched item for a string
   * @param regexp
   * @param {String} ua
   * @return {Array|{index: number, input: string}|*|boolean|string}
   */
  static getSecondMatch(regexp, ua) {
    const match = ua.match(regexp);
    return match && match.length > 1 && match[2] || "";
  }
  /**
   * Match a regexp and return a constant or undefined
   * @param {RegExp} regexp
   * @param {String} ua
   * @param {*} _const Any const that will be returned if regexp matches the string
   * @return {*}
   */
  static matchAndReturnConst(regexp, ua, _const) {
    if (regexp.test(ua))
      return _const;
  }
  static getWindowsVersionName(version) {
    switch (version) {
      case "NT":
        return "NT";
      case "XP":
        return "XP";
      case "NT 5.0":
        return "2000";
      case "NT 5.1":
        return "XP";
      case "NT 5.2":
        return "2003";
      case "NT 6.0":
        return "Vista";
      case "NT 6.1":
        return "7";
      case "NT 6.2":
        return "8";
      case "NT 6.3":
        return "8.1";
      case "NT 10.0":
        return "10";
      default:
        return;
    }
  }
  /**
   * Get macOS version name
   *    10.5 - Leopard
   *    10.6 - Snow Leopard
   *    10.7 - Lion
   *    10.8 - Mountain Lion
   *    10.9 - Mavericks
   *    10.10 - Yosemite
   *    10.11 - El Capitan
   *    10.12 - Sierra
   *    10.13 - High Sierra
   *    10.14 - Mojave
   *    10.15 - Catalina
   *
   * @example
   *   getMacOSVersionName("10.14") // 'Mojave'
   *
   * @param  {string} version
   * @return {string} versionName
   */
  static getMacOSVersionName(version) {
    const v2 = version.split(".").splice(0, 2).map((s2) => parseInt(s2, 10) || 0);
    if (v2.push(0), v2[0] === 10)
      switch (v2[1]) {
        case 5:
          return "Leopard";
        case 6:
          return "Snow Leopard";
        case 7:
          return "Lion";
        case 8:
          return "Mountain Lion";
        case 9:
          return "Mavericks";
        case 10:
          return "Yosemite";
        case 11:
          return "El Capitan";
        case 12:
          return "Sierra";
        case 13:
          return "High Sierra";
        case 14:
          return "Mojave";
        case 15:
          return "Catalina";
        default:
          return;
      }
  }
  /**
   * Get Android version name
   *    1.5 - Cupcake
   *    1.6 - Donut
   *    2.0 - Eclair
   *    2.1 - Eclair
   *    2.2 - Froyo
   *    2.x - Gingerbread
   *    3.x - Honeycomb
   *    4.0 - Ice Cream Sandwich
   *    4.1 - Jelly Bean
   *    4.4 - KitKat
   *    5.x - Lollipop
   *    6.x - Marshmallow
   *    7.x - Nougat
   *    8.x - Oreo
   *    9.x - Pie
   *
   * @example
   *   getAndroidVersionName("7.0") // 'Nougat'
   *
   * @param  {string} version
   * @return {string} versionName
   */
  static getAndroidVersionName(version) {
    const v2 = version.split(".").splice(0, 2).map((s2) => parseInt(s2, 10) || 0);
    if (v2.push(0), !(v2[0] === 1 && v2[1] < 5)) {
      if (v2[0] === 1 && v2[1] < 6) return "Cupcake";
      if (v2[0] === 1 && v2[1] >= 6) return "Donut";
      if (v2[0] === 2 && v2[1] < 2) return "Eclair";
      if (v2[0] === 2 && v2[1] === 2) return "Froyo";
      if (v2[0] === 2 && v2[1] > 2) return "Gingerbread";
      if (v2[0] === 3) return "Honeycomb";
      if (v2[0] === 4 && v2[1] < 1) return "Ice Cream Sandwich";
      if (v2[0] === 4 && v2[1] < 4) return "Jelly Bean";
      if (v2[0] === 4 && v2[1] >= 4) return "KitKat";
      if (v2[0] === 5) return "Lollipop";
      if (v2[0] === 6) return "Marshmallow";
      if (v2[0] === 7) return "Nougat";
      if (v2[0] === 8) return "Oreo";
      if (v2[0] === 9) return "Pie";
    }
  }
  /**
   * Get version precisions count
   *
   * @example
   *   getVersionPrecision("1.10.3") // 3
   *
   * @param  {string} version
   * @return {number}
   */
  static getVersionPrecision(version) {
    return version.split(".").length;
  }
  /**
   * Calculate browser version weight
   *
   * @example
   *   compareVersions('1.10.2.1',  '1.8.2.1.90')    // 1
   *   compareVersions('1.010.2.1', '1.09.2.1.90');  // 1
   *   compareVersions('1.10.2.1',  '1.10.2.1');     // 0
   *   compareVersions('1.10.2.1',  '1.0800.2');     // -1
   *   compareVersions('1.10.2.1',  '1.10',  true);  // 0
   *
   * @param {String} versionA versions versions to compare
   * @param {String} versionB versions versions to compare
   * @param {boolean} [isLoose] enable loose comparison
   * @return {Number} comparison result: -1 when versionA is lower,
   * 1 when versionA is bigger, 0 when both equal
   */
  /* eslint consistent-return: 1 */
  static compareVersions(versionA, versionB, isLoose = !1) {
    const versionAPrecision = Utils.getVersionPrecision(versionA), versionBPrecision = Utils.getVersionPrecision(versionB);
    let precision = Math.max(versionAPrecision, versionBPrecision), lastPrecision = 0;
    const chunks = Utils.map([versionA, versionB], (version) => {
      const delta = precision - Utils.getVersionPrecision(version), _version = version + new Array(delta + 1).join(".0");
      return Utils.map(_version.split("."), (chunk) => new Array(20 - chunk.length).join("0") + chunk).reverse();
    });
    for (isLoose && (lastPrecision = precision - Math.min(versionAPrecision, versionBPrecision)), precision -= 1; precision >= lastPrecision; ) {
      if (chunks[0][precision] > chunks[1][precision])
        return 1;
      if (chunks[0][precision] === chunks[1][precision]) {
        if (precision === lastPrecision)
          return 0;
        precision -= 1;
      } else if (chunks[0][precision] < chunks[1][precision])
        return -1;
    }
  }
  /**
   * Array::map polyfill
   *
   * @param  {Array} arr
   * @param  {Function} iterator
   * @return {Array}
   */
  static map(arr, iterator) {
    const result = [];
    let i2;
    if (Array.prototype.map)
      return Array.prototype.map.call(arr, iterator);
    for (i2 = 0; i2 < arr.length; i2 += 1)
      result.push(iterator(arr[i2]));
    return result;
  }
  /**
   * Array::find polyfill
   *
   * @param  {Array} arr
   * @param  {Function} predicate
   * @return {Array}
   */
  static find(arr, predicate) {
    let i2, l;
    if (Array.prototype.find)
      return Array.prototype.find.call(arr, predicate);
    for (i2 = 0, l = arr.length; i2 < l; i2 += 1) {
      const value = arr[i2];
      if (predicate(value, i2))
        return value;
    }
  }
  /**
   * Object::assign polyfill
   *
   * @param  {Object} obj
   * @param  {Object} ...objs
   * @return {Object}
   */
  static assign(obj, ...assigners) {
    const result = obj;
    let i2, l;
    if (Object.assign)
      return Object.assign(obj, ...assigners);
    for (i2 = 0, l = assigners.length; i2 < l; i2 += 1) {
      const assigner = assigners[i2];
      typeof assigner == "object" && assigner !== null && Object.keys(assigner).forEach((key) => {
        result[key] = assigner[key];
      });
    }
    return obj;
  }
  /**
   * Get short version/alias for a browser name
   *
   * @example
   *   getBrowserAlias('Microsoft Edge') // edge
   *
   * @param  {string} browserName
   * @return {string}
   */
  static getBrowserAlias(browserName) {
    return BROWSER_ALIASES_MAP[browserName];
  }
  /**
   * Get short version/alias for a browser name
   *
   * @example
   *   getBrowserAlias('edge') // Microsoft Edge
   *
   * @param  {string} browserAlias
   * @return {string}
   */
  static getBrowserTypeByAlias(browserAlias) {
    return BROWSER_MAP[browserAlias] || "";
  }
}
const commonVersionIdentifier = /version\\/(\\d+(\\.?_?\\d+)+)/i, browsersList = [
  /* Googlebot */
  {
    test: [/googlebot/i],
    describe(ua) {
      const browser = {
        name: "Googlebot"
      }, version = Utils.getFirstMatch(/googlebot\\/(\\d+(\\.\\d+))/i, ua) || Utils.getFirstMatch(commonVersionIdentifier, ua);
      return version && (browser.version = version), browser;
    }
  },
  /* Opera < 13.0 */
  {
    test: [/opera/i],
    describe(ua) {
      const browser = {
        name: "Opera"
      }, version = Utils.getFirstMatch(commonVersionIdentifier, ua) || Utils.getFirstMatch(/(?:opera)[\\s/](\\d+(\\.?_?\\d+)+)/i, ua);
      return version && (browser.version = version), browser;
    }
  },
  /* Opera > 13.0 */
  {
    test: [/opr\\/|opios/i],
    describe(ua) {
      const browser = {
        name: "Opera"
      }, version = Utils.getFirstMatch(/(?:opr|opios)[\\s/](\\S+)/i, ua) || Utils.getFirstMatch(commonVersionIdentifier, ua);
      return version && (browser.version = version), browser;
    }
  },
  {
    test: [/SamsungBrowser/i],
    describe(ua) {
      const browser = {
        name: "Samsung Internet for Android"
      }, version = Utils.getFirstMatch(commonVersionIdentifier, ua) || Utils.getFirstMatch(/(?:SamsungBrowser)[\\s/](\\d+(\\.?_?\\d+)+)/i, ua);
      return version && (browser.version = version), browser;
    }
  },
  {
    test: [/Whale/i],
    describe(ua) {
      const browser = {
        name: "NAVER Whale Browser"
      }, version = Utils.getFirstMatch(commonVersionIdentifier, ua) || Utils.getFirstMatch(/(?:whale)[\\s/](\\d+(?:\\.\\d+)+)/i, ua);
      return version && (browser.version = version), browser;
    }
  },
  {
    test: [/MZBrowser/i],
    describe(ua) {
      const browser = {
        name: "MZ Browser"
      }, version = Utils.getFirstMatch(/(?:MZBrowser)[\\s/](\\d+(?:\\.\\d+)+)/i, ua) || Utils.getFirstMatch(commonVersionIdentifier, ua);
      return version && (browser.version = version), browser;
    }
  },
  {
    test: [/focus/i],
    describe(ua) {
      const browser = {
        name: "Focus"
      }, version = Utils.getFirstMatch(/(?:focus)[\\s/](\\d+(?:\\.\\d+)+)/i, ua) || Utils.getFirstMatch(commonVersionIdentifier, ua);
      return version && (browser.version = version), browser;
    }
  },
  {
    test: [/swing/i],
    describe(ua) {
      const browser = {
        name: "Swing"
      }, version = Utils.getFirstMatch(/(?:swing)[\\s/](\\d+(?:\\.\\d+)+)/i, ua) || Utils.getFirstMatch(commonVersionIdentifier, ua);
      return version && (browser.version = version), browser;
    }
  },
  {
    test: [/coast/i],
    describe(ua) {
      const browser = {
        name: "Opera Coast"
      }, version = Utils.getFirstMatch(commonVersionIdentifier, ua) || Utils.getFirstMatch(/(?:coast)[\\s/](\\d+(\\.?_?\\d+)+)/i, ua);
      return version && (browser.version = version), browser;
    }
  },
  {
    test: [/opt\\/\\d+(?:.?_?\\d+)+/i],
    describe(ua) {
      const browser = {
        name: "Opera Touch"
      }, version = Utils.getFirstMatch(/(?:opt)[\\s/](\\d+(\\.?_?\\d+)+)/i, ua) || Utils.getFirstMatch(commonVersionIdentifier, ua);
      return version && (browser.version = version), browser;
    }
  },
  {
    test: [/yabrowser/i],
    describe(ua) {
      const browser = {
        name: "Yandex Browser"
      }, version = Utils.getFirstMatch(/(?:yabrowser)[\\s/](\\d+(\\.?_?\\d+)+)/i, ua) || Utils.getFirstMatch(commonVersionIdentifier, ua);
      return version && (browser.version = version), browser;
    }
  },
  {
    test: [/ucbrowser/i],
    describe(ua) {
      const browser = {
        name: "UC Browser"
      }, version = Utils.getFirstMatch(commonVersionIdentifier, ua) || Utils.getFirstMatch(/(?:ucbrowser)[\\s/](\\d+(\\.?_?\\d+)+)/i, ua);
      return version && (browser.version = version), browser;
    }
  },
  {
    test: [/Maxthon|mxios/i],
    describe(ua) {
      const browser = {
        name: "Maxthon"
      }, version = Utils.getFirstMatch(commonVersionIdentifier, ua) || Utils.getFirstMatch(/(?:Maxthon|mxios)[\\s/](\\d+(\\.?_?\\d+)+)/i, ua);
      return version && (browser.version = version), browser;
    }
  },
  {
    test: [/epiphany/i],
    describe(ua) {
      const browser = {
        name: "Epiphany"
      }, version = Utils.getFirstMatch(commonVersionIdentifier, ua) || Utils.getFirstMatch(/(?:epiphany)[\\s/](\\d+(\\.?_?\\d+)+)/i, ua);
      return version && (browser.version = version), browser;
    }
  },
  {
    test: [/puffin/i],
    describe(ua) {
      const browser = {
        name: "Puffin"
      }, version = Utils.getFirstMatch(commonVersionIdentifier, ua) || Utils.getFirstMatch(/(?:puffin)[\\s/](\\d+(\\.?_?\\d+)+)/i, ua);
      return version && (browser.version = version), browser;
    }
  },
  {
    test: [/sleipnir/i],
    describe(ua) {
      const browser = {
        name: "Sleipnir"
      }, version = Utils.getFirstMatch(commonVersionIdentifier, ua) || Utils.getFirstMatch(/(?:sleipnir)[\\s/](\\d+(\\.?_?\\d+)+)/i, ua);
      return version && (browser.version = version), browser;
    }
  },
  {
    test: [/k-meleon/i],
    describe(ua) {
      const browser = {
        name: "K-Meleon"
      }, version = Utils.getFirstMatch(commonVersionIdentifier, ua) || Utils.getFirstMatch(/(?:k-meleon)[\\s/](\\d+(\\.?_?\\d+)+)/i, ua);
      return version && (browser.version = version), browser;
    }
  },
  {
    test: [/micromessenger/i],
    describe(ua) {
      const browser = {
        name: "WeChat"
      }, version = Utils.getFirstMatch(/(?:micromessenger)[\\s/](\\d+(\\.?_?\\d+)+)/i, ua) || Utils.getFirstMatch(commonVersionIdentifier, ua);
      return version && (browser.version = version), browser;
    }
  },
  {
    test: [/qqbrowser/i],
    describe(ua) {
      const browser = {
        name: /qqbrowserlite/i.test(ua) ? "QQ Browser Lite" : "QQ Browser"
      }, version = Utils.getFirstMatch(/(?:qqbrowserlite|qqbrowser)[/](\\d+(\\.?_?\\d+)+)/i, ua) || Utils.getFirstMatch(commonVersionIdentifier, ua);
      return version && (browser.version = version), browser;
    }
  },
  {
    test: [/msie|trident/i],
    describe(ua) {
      const browser = {
        name: "Internet Explorer"
      }, version = Utils.getFirstMatch(/(?:msie |rv:)(\\d+(\\.?_?\\d+)+)/i, ua);
      return version && (browser.version = version), browser;
    }
  },
  {
    test: [/\\sedg\\//i],
    describe(ua) {
      const browser = {
        name: "Microsoft Edge"
      }, version = Utils.getFirstMatch(/\\sedg\\/(\\d+(\\.?_?\\d+)+)/i, ua);
      return version && (browser.version = version), browser;
    }
  },
  {
    test: [/edg([ea]|ios)/i],
    describe(ua) {
      const browser = {
        name: "Microsoft Edge"
      }, version = Utils.getSecondMatch(/edg([ea]|ios)\\/(\\d+(\\.?_?\\d+)+)/i, ua);
      return version && (browser.version = version), browser;
    }
  },
  {
    test: [/vivaldi/i],
    describe(ua) {
      const browser = {
        name: "Vivaldi"
      }, version = Utils.getFirstMatch(/vivaldi\\/(\\d+(\\.?_?\\d+)+)/i, ua);
      return version && (browser.version = version), browser;
    }
  },
  {
    test: [/seamonkey/i],
    describe(ua) {
      const browser = {
        name: "SeaMonkey"
      }, version = Utils.getFirstMatch(/seamonkey\\/(\\d+(\\.?_?\\d+)+)/i, ua);
      return version && (browser.version = version), browser;
    }
  },
  {
    test: [/sailfish/i],
    describe(ua) {
      const browser = {
        name: "Sailfish"
      }, version = Utils.getFirstMatch(/sailfish\\s?browser\\/(\\d+(\\.\\d+)?)/i, ua);
      return version && (browser.version = version), browser;
    }
  },
  {
    test: [/silk/i],
    describe(ua) {
      const browser = {
        name: "Amazon Silk"
      }, version = Utils.getFirstMatch(/silk\\/(\\d+(\\.?_?\\d+)+)/i, ua);
      return version && (browser.version = version), browser;
    }
  },
  {
    test: [/phantom/i],
    describe(ua) {
      const browser = {
        name: "PhantomJS"
      }, version = Utils.getFirstMatch(/phantomjs\\/(\\d+(\\.?_?\\d+)+)/i, ua);
      return version && (browser.version = version), browser;
    }
  },
  {
    test: [/slimerjs/i],
    describe(ua) {
      const browser = {
        name: "SlimerJS"
      }, version = Utils.getFirstMatch(/slimerjs\\/(\\d+(\\.?_?\\d+)+)/i, ua);
      return version && (browser.version = version), browser;
    }
  },
  {
    test: [/blackberry|\\bbb\\d+/i, /rim\\stablet/i],
    describe(ua) {
      const browser = {
        name: "BlackBerry"
      }, version = Utils.getFirstMatch(commonVersionIdentifier, ua) || Utils.getFirstMatch(/blackberry[\\d]+\\/(\\d+(\\.?_?\\d+)+)/i, ua);
      return version && (browser.version = version), browser;
    }
  },
  {
    test: [/(web|hpw)[o0]s/i],
    describe(ua) {
      const browser = {
        name: "WebOS Browser"
      }, version = Utils.getFirstMatch(commonVersionIdentifier, ua) || Utils.getFirstMatch(/w(?:eb)?[o0]sbrowser\\/(\\d+(\\.?_?\\d+)+)/i, ua);
      return version && (browser.version = version), browser;
    }
  },
  {
    test: [/bada/i],
    describe(ua) {
      const browser = {
        name: "Bada"
      }, version = Utils.getFirstMatch(/dolfin\\/(\\d+(\\.?_?\\d+)+)/i, ua);
      return version && (browser.version = version), browser;
    }
  },
  {
    test: [/tizen/i],
    describe(ua) {
      const browser = {
        name: "Tizen"
      }, version = Utils.getFirstMatch(/(?:tizen\\s?)?browser\\/(\\d+(\\.?_?\\d+)+)/i, ua) || Utils.getFirstMatch(commonVersionIdentifier, ua);
      return version && (browser.version = version), browser;
    }
  },
  {
    test: [/qupzilla/i],
    describe(ua) {
      const browser = {
        name: "QupZilla"
      }, version = Utils.getFirstMatch(/(?:qupzilla)[\\s/](\\d+(\\.?_?\\d+)+)/i, ua) || Utils.getFirstMatch(commonVersionIdentifier, ua);
      return version && (browser.version = version), browser;
    }
  },
  {
    test: [/firefox|iceweasel|fxios/i],
    describe(ua) {
      const browser = {
        name: "Firefox"
      }, version = Utils.getFirstMatch(/(?:firefox|iceweasel|fxios)[\\s/](\\d+(\\.?_?\\d+)+)/i, ua);
      return version && (browser.version = version), browser;
    }
  },
  {
    test: [/electron/i],
    describe(ua) {
      const browser = {
        name: "Electron"
      }, version = Utils.getFirstMatch(/(?:electron)\\/(\\d+(\\.?_?\\d+)+)/i, ua);
      return version && (browser.version = version), browser;
    }
  },
  {
    test: [/MiuiBrowser/i],
    describe(ua) {
      const browser = {
        name: "Miui"
      }, version = Utils.getFirstMatch(/(?:MiuiBrowser)[\\s/](\\d+(\\.?_?\\d+)+)/i, ua);
      return version && (browser.version = version), browser;
    }
  },
  {
    test: [/chromium/i],
    describe(ua) {
      const browser = {
        name: "Chromium"
      }, version = Utils.getFirstMatch(/(?:chromium)[\\s/](\\d+(\\.?_?\\d+)+)/i, ua) || Utils.getFirstMatch(commonVersionIdentifier, ua);
      return version && (browser.version = version), browser;
    }
  },
  {
    test: [/chrome|crios|crmo/i],
    describe(ua) {
      const browser = {
        name: "Chrome"
      }, version = Utils.getFirstMatch(/(?:chrome|crios|crmo)\\/(\\d+(\\.?_?\\d+)+)/i, ua);
      return version && (browser.version = version), browser;
    }
  },
  {
    test: [/GSA/i],
    describe(ua) {
      const browser = {
        name: "Google Search"
      }, version = Utils.getFirstMatch(/(?:GSA)\\/(\\d+(\\.?_?\\d+)+)/i, ua);
      return version && (browser.version = version), browser;
    }
  },
  /* Android Browser */
  {
    test(parser) {
      const notLikeAndroid = !parser.test(/like android/i), butAndroid = parser.test(/android/i);
      return notLikeAndroid && butAndroid;
    },
    describe(ua) {
      const browser = {
        name: "Android Browser"
      }, version = Utils.getFirstMatch(commonVersionIdentifier, ua);
      return version && (browser.version = version), browser;
    }
  },
  /* PlayStation 4 */
  {
    test: [/playstation 4/i],
    describe(ua) {
      const browser = {
        name: "PlayStation 4"
      }, version = Utils.getFirstMatch(commonVersionIdentifier, ua);
      return version && (browser.version = version), browser;
    }
  },
  /* Safari */
  {
    test: [/safari|applewebkit/i],
    describe(ua) {
      const browser = {
        name: "Safari"
      }, version = Utils.getFirstMatch(commonVersionIdentifier, ua);
      return version && (browser.version = version), browser;
    }
  },
  /* Something else */
  {
    test: [/.*/i],
    describe(ua) {
      const regexpWithoutDeviceSpec = /^(.*)\\/(.*) /, regexpWithDeviceSpec = /^(.*)\\/(.*)[ \\t]\\((.*)/, regexp = ua.search("\\\\(") !== -1 ? regexpWithDeviceSpec : regexpWithoutDeviceSpec;
      return {
        name: Utils.getFirstMatch(regexp, ua),
        version: Utils.getSecondMatch(regexp, ua)
      };
    }
  }
], osParsersList = [
  /* Roku */
  {
    test: [/Roku\\/DVP/],
    describe(ua) {
      const version = Utils.getFirstMatch(/Roku\\/DVP-(\\d+\\.\\d+)/i, ua);
      return {
        name: OS_MAP.Roku,
        version
      };
    }
  },
  /* Windows Phone */
  {
    test: [/windows phone/i],
    describe(ua) {
      const version = Utils.getFirstMatch(/windows phone (?:os)?\\s?(\\d+(\\.\\d+)*)/i, ua);
      return {
        name: OS_MAP.WindowsPhone,
        version
      };
    }
  },
  /* Windows */
  {
    test: [/windows /i],
    describe(ua) {
      const version = Utils.getFirstMatch(/Windows ((NT|XP)( \\d\\d?.\\d)?)/i, ua), versionName = Utils.getWindowsVersionName(version);
      return {
        name: OS_MAP.Windows,
        version,
        versionName
      };
    }
  },
  /* Firefox on iPad */
  {
    test: [/Macintosh(.*?) FxiOS(.*?)\\//],
    describe(ua) {
      const result = {
        name: OS_MAP.iOS
      }, version = Utils.getSecondMatch(/(Version\\/)(\\d[\\d.]+)/, ua);
      return version && (result.version = version), result;
    }
  },
  /* macOS */
  {
    test: [/macintosh/i],
    describe(ua) {
      const version = Utils.getFirstMatch(/mac os x (\\d+(\\.?_?\\d+)+)/i, ua).replace(/[_\\s]/g, "."), versionName = Utils.getMacOSVersionName(version), os = {
        name: OS_MAP.MacOS,
        version
      };
      return versionName && (os.versionName = versionName), os;
    }
  },
  /* iOS */
  {
    test: [/(ipod|iphone|ipad)/i],
    describe(ua) {
      const version = Utils.getFirstMatch(/os (\\d+([_\\s]\\d+)*) like mac os x/i, ua).replace(/[_\\s]/g, ".");
      return {
        name: OS_MAP.iOS,
        version
      };
    }
  },
  /* Android */
  {
    test(parser) {
      const notLikeAndroid = !parser.test(/like android/i), butAndroid = parser.test(/android/i);
      return notLikeAndroid && butAndroid;
    },
    describe(ua) {
      const version = Utils.getFirstMatch(/android[\\s/-](\\d+(\\.\\d+)*)/i, ua), versionName = Utils.getAndroidVersionName(version), os = {
        name: OS_MAP.Android,
        version
      };
      return versionName && (os.versionName = versionName), os;
    }
  },
  /* WebOS */
  {
    test: [/(web|hpw)[o0]s/i],
    describe(ua) {
      const version = Utils.getFirstMatch(/(?:web|hpw)[o0]s\\/(\\d+(\\.\\d+)*)/i, ua), os = {
        name: OS_MAP.WebOS
      };
      return version && version.length && (os.version = version), os;
    }
  },
  /* BlackBerry */
  {
    test: [/blackberry|\\bbb\\d+/i, /rim\\stablet/i],
    describe(ua) {
      const version = Utils.getFirstMatch(/rim\\stablet\\sos\\s(\\d+(\\.\\d+)*)/i, ua) || Utils.getFirstMatch(/blackberry\\d+\\/(\\d+([_\\s]\\d+)*)/i, ua) || Utils.getFirstMatch(/\\bbb(\\d+)/i, ua);
      return {
        name: OS_MAP.BlackBerry,
        version
      };
    }
  },
  /* Bada */
  {
    test: [/bada/i],
    describe(ua) {
      const version = Utils.getFirstMatch(/bada\\/(\\d+(\\.\\d+)*)/i, ua);
      return {
        name: OS_MAP.Bada,
        version
      };
    }
  },
  /* Tizen */
  {
    test: [/tizen/i],
    describe(ua) {
      const version = Utils.getFirstMatch(/tizen[/\\s](\\d+(\\.\\d+)*)/i, ua);
      return {
        name: OS_MAP.Tizen,
        version
      };
    }
  },
  /* Linux */
  {
    test: [/linux/i],
    describe() {
      return {
        name: OS_MAP.Linux
      };
    }
  },
  /* Chrome OS */
  {
    test: [/CrOS/],
    describe() {
      return {
        name: OS_MAP.ChromeOS
      };
    }
  },
  /* Playstation 4 */
  {
    test: [/PlayStation 4/],
    describe(ua) {
      const version = Utils.getFirstMatch(/PlayStation 4[/\\s](\\d+(\\.\\d+)*)/i, ua);
      return {
        name: OS_MAP.PlayStation4,
        version
      };
    }
  }
], platformParsersList = [
  /* Googlebot */
  {
    test: [/googlebot/i],
    describe() {
      return {
        type: "bot",
        vendor: "Google"
      };
    }
  },
  /* Huawei */
  {
    test: [/huawei/i],
    describe(ua) {
      const model = Utils.getFirstMatch(/(can-l01)/i, ua) && "Nova", platform = {
        type: PLATFORMS_MAP.mobile,
        vendor: "Huawei"
      };
      return model && (platform.model = model), platform;
    }
  },
  /* Nexus Tablet */
  {
    test: [/nexus\\s*(?:7|8|9|10).*/i],
    describe() {
      return {
        type: PLATFORMS_MAP.tablet,
        vendor: "Nexus"
      };
    }
  },
  /* iPad */
  {
    test: [/ipad/i],
    describe() {
      return {
        type: PLATFORMS_MAP.tablet,
        vendor: "Apple",
        model: "iPad"
      };
    }
  },
  /* Firefox on iPad */
  {
    test: [/Macintosh(.*?) FxiOS(.*?)\\//],
    describe() {
      return {
        type: PLATFORMS_MAP.tablet,
        vendor: "Apple",
        model: "iPad"
      };
    }
  },
  /* Amazon Kindle Fire */
  {
    test: [/kftt build/i],
    describe() {
      return {
        type: PLATFORMS_MAP.tablet,
        vendor: "Amazon",
        model: "Kindle Fire HD 7"
      };
    }
  },
  /* Another Amazon Tablet with Silk */
  {
    test: [/silk/i],
    describe() {
      return {
        type: PLATFORMS_MAP.tablet,
        vendor: "Amazon"
      };
    }
  },
  /* Tablet */
  {
    test: [/tablet(?! pc)/i],
    describe() {
      return {
        type: PLATFORMS_MAP.tablet
      };
    }
  },
  /* iPod/iPhone */
  {
    test(parser) {
      const iDevice = parser.test(/ipod|iphone/i), likeIDevice = parser.test(/like (ipod|iphone)/i);
      return iDevice && !likeIDevice;
    },
    describe(ua) {
      const model = Utils.getFirstMatch(/(ipod|iphone)/i, ua);
      return {
        type: PLATFORMS_MAP.mobile,
        vendor: "Apple",
        model
      };
    }
  },
  /* Nexus Mobile */
  {
    test: [/nexus\\s*[0-6].*/i, /galaxy nexus/i],
    describe() {
      return {
        type: PLATFORMS_MAP.mobile,
        vendor: "Nexus"
      };
    }
  },
  /* Mobile */
  {
    test: [/[^-]mobi/i],
    describe() {
      return {
        type: PLATFORMS_MAP.mobile
      };
    }
  },
  /* BlackBerry */
  {
    test(parser) {
      return parser.getBrowserName(!0) === "blackberry";
    },
    describe() {
      return {
        type: PLATFORMS_MAP.mobile,
        vendor: "BlackBerry"
      };
    }
  },
  /* Bada */
  {
    test(parser) {
      return parser.getBrowserName(!0) === "bada";
    },
    describe() {
      return {
        type: PLATFORMS_MAP.mobile
      };
    }
  },
  /* Windows Phone */
  {
    test(parser) {
      return parser.getBrowserName() === "windows phone";
    },
    describe() {
      return {
        type: PLATFORMS_MAP.mobile,
        vendor: "Microsoft"
      };
    }
  },
  /* Android Tablet */
  {
    test(parser) {
      const osMajorVersion = Number(String(parser.getOSVersion()).split(".")[0]);
      return parser.getOSName(!0) === "android" && osMajorVersion >= 3;
    },
    describe() {
      return {
        type: PLATFORMS_MAP.tablet
      };
    }
  },
  /* Android Mobile */
  {
    test(parser) {
      return parser.getOSName(!0) === "android";
    },
    describe() {
      return {
        type: PLATFORMS_MAP.mobile
      };
    }
  },
  /* desktop */
  {
    test(parser) {
      return parser.getOSName(!0) === "macos";
    },
    describe() {
      return {
        type: PLATFORMS_MAP.desktop,
        vendor: "Apple"
      };
    }
  },
  /* Windows */
  {
    test(parser) {
      return parser.getOSName(!0) === "windows";
    },
    describe() {
      return {
        type: PLATFORMS_MAP.desktop
      };
    }
  },
  /* Linux */
  {
    test(parser) {
      return parser.getOSName(!0) === "linux";
    },
    describe() {
      return {
        type: PLATFORMS_MAP.desktop
      };
    }
  },
  /* PlayStation 4 */
  {
    test(parser) {
      return parser.getOSName(!0) === "playstation 4";
    },
    describe() {
      return {
        type: PLATFORMS_MAP.tv
      };
    }
  },
  /* Roku */
  {
    test(parser) {
      return parser.getOSName(!0) === "roku";
    },
    describe() {
      return {
        type: PLATFORMS_MAP.tv
      };
    }
  }
], enginesParsersList = [
  /* EdgeHTML */
  {
    test(parser) {
      return parser.getBrowserName(!0) === "microsoft edge";
    },
    describe(ua) {
      if (/\\sedg\\//i.test(ua))
        return {
          name: ENGINE_MAP.Blink
        };
      const version = Utils.getFirstMatch(/edge\\/(\\d+(\\.?_?\\d+)+)/i, ua);
      return {
        name: ENGINE_MAP.EdgeHTML,
        version
      };
    }
  },
  /* Trident */
  {
    test: [/trident/i],
    describe(ua) {
      const engine = {
        name: ENGINE_MAP.Trident
      }, version = Utils.getFirstMatch(/trident\\/(\\d+(\\.?_?\\d+)+)/i, ua);
      return version && (engine.version = version), engine;
    }
  },
  /* Presto */
  {
    test(parser) {
      return parser.test(/presto/i);
    },
    describe(ua) {
      const engine = {
        name: ENGINE_MAP.Presto
      }, version = Utils.getFirstMatch(/presto\\/(\\d+(\\.?_?\\d+)+)/i, ua);
      return version && (engine.version = version), engine;
    }
  },
  /* Gecko */
  {
    test(parser) {
      const isGecko = parser.test(/gecko/i), likeGecko = parser.test(/like gecko/i);
      return isGecko && !likeGecko;
    },
    describe(ua) {
      const engine = {
        name: ENGINE_MAP.Gecko
      }, version = Utils.getFirstMatch(/gecko\\/(\\d+(\\.?_?\\d+)+)/i, ua);
      return version && (engine.version = version), engine;
    }
  },
  /* Blink */
  {
    test: [/(apple)?webkit\\/537\\.36/i],
    describe() {
      return {
        name: ENGINE_MAP.Blink
      };
    }
  },
  /* WebKit */
  {
    test: [/(apple)?webkit/i],
    describe(ua) {
      const engine = {
        name: ENGINE_MAP.WebKit
      }, version = Utils.getFirstMatch(/webkit\\/(\\d+(\\.?_?\\d+)+)/i, ua);
      return version && (engine.version = version), engine;
    }
  }
];
class Parser {
  /**
   * Create instance of Parser
   *
   * @param {String} UA User-Agent string
   * @param {Boolean} [skipParsing=false] parser can skip parsing in purpose of performance
   * improvements if you need to make a more particular parsing
   * like {@link Parser#parseBrowser} or {@link Parser#parsePlatform}
   *
   * @throw {Error} in case of empty UA String
   *
   * @constructor
   */
  constructor(UA, skipParsing = !1) {
    if (UA == null || UA === "")
      throw new Error("UserAgent parameter can't be empty");
    this._ua = UA, this.parsedResult = {}, skipParsing !== !0 && this.parse();
  }
  /**
   * Get UserAgent string of current Parser instance
   * @return {String} User-Agent String of the current <Parser> object
   *
   * @public
   */
  getUA() {
    return this._ua;
  }
  /**
   * Test a UA string for a regexp
   * @param {RegExp} regex
   * @return {Boolean}
   */
  test(regex) {
    return regex.test(this._ua);
  }
  /**
   * Get parsed browser object
   * @return {Object}
   */
  parseBrowser() {
    this.parsedResult.browser = {};
    const browserDescriptor = Utils.find(browsersList, (_browser) => {
      if (typeof _browser.test == "function")
        return _browser.test(this);
      if (_browser.test instanceof Array)
        return _browser.test.some((condition) => this.test(condition));
      throw new Error("Browser's test function is not valid");
    });
    return browserDescriptor && (this.parsedResult.browser = browserDescriptor.describe(this.getUA())), this.parsedResult.browser;
  }
  /**
   * Get parsed browser object
   * @return {Object}
   *
   * @public
   */
  getBrowser() {
    return this.parsedResult.browser ? this.parsedResult.browser : this.parseBrowser();
  }
  /**
   * Get browser's name
   * @return {String} Browser's name or an empty string
   *
   * @public
   */
  getBrowserName(toLowerCase) {
    return toLowerCase ? String(this.getBrowser().name).toLowerCase() || "" : this.getBrowser().name || "";
  }
  /**
   * Get browser's version
   * @return {String} version of browser
   *
   * @public
   */
  getBrowserVersion() {
    return this.getBrowser().version;
  }
  /**
   * Get OS
   * @return {Object}
   *
   * @example
   * this.getOS();
   * {
   *   name: 'macOS',
   *   version: '10.11.12'
   * }
   */
  getOS() {
    return this.parsedResult.os ? this.parsedResult.os : this.parseOS();
  }
  /**
   * Parse OS and save it to this.parsedResult.os
   * @return {*|{}}
   */
  parseOS() {
    this.parsedResult.os = {};
    const os = Utils.find(osParsersList, (_os) => {
      if (typeof _os.test == "function")
        return _os.test(this);
      if (_os.test instanceof Array)
        return _os.test.some((condition) => this.test(condition));
      throw new Error("Browser's test function is not valid");
    });
    return os && (this.parsedResult.os = os.describe(this.getUA())), this.parsedResult.os;
  }
  /**
   * Get OS name
   * @param {Boolean} [toLowerCase] return lower-cased value
   * @return {String} name of the OS — macOS, Windows, Linux, etc.
   */
  getOSName(toLowerCase) {
    const { name } = this.getOS();
    return toLowerCase ? String(name).toLowerCase() || "" : name || "";
  }
  /**
   * Get OS version
   * @return {String} full version with dots ('10.11.12', '5.6', etc)
   */
  getOSVersion() {
    return this.getOS().version;
  }
  /**
   * Get parsed platform
   * @return {{}}
   */
  getPlatform() {
    return this.parsedResult.platform ? this.parsedResult.platform : this.parsePlatform();
  }
  /**
   * Get platform name
   * @param {Boolean} [toLowerCase=false]
   * @return {*}
   */
  getPlatformType(toLowerCase = !1) {
    const { type } = this.getPlatform();
    return toLowerCase ? String(type).toLowerCase() || "" : type || "";
  }
  /**
   * Get parsed platform
   * @return {{}}
   */
  parsePlatform() {
    this.parsedResult.platform = {};
    const platform = Utils.find(platformParsersList, (_platform) => {
      if (typeof _platform.test == "function")
        return _platform.test(this);
      if (_platform.test instanceof Array)
        return _platform.test.some((condition) => this.test(condition));
      throw new Error("Browser's test function is not valid");
    });
    return platform && (this.parsedResult.platform = platform.describe(this.getUA())), this.parsedResult.platform;
  }
  /**
   * Get parsed engine
   * @return {{}}
   */
  getEngine() {
    return this.parsedResult.engine ? this.parsedResult.engine : this.parseEngine();
  }
  /**
   * Get engines's name
   * @return {String} Engines's name or an empty string
   *
   * @public
   */
  getEngineName(toLowerCase) {
    return toLowerCase ? String(this.getEngine().name).toLowerCase() || "" : this.getEngine().name || "";
  }
  /**
   * Get parsed platform
   * @return {{}}
   */
  parseEngine() {
    this.parsedResult.engine = {};
    const engine = Utils.find(enginesParsersList, (_engine) => {
      if (typeof _engine.test == "function")
        return _engine.test(this);
      if (_engine.test instanceof Array)
        return _engine.test.some((condition) => this.test(condition));
      throw new Error("Browser's test function is not valid");
    });
    return engine && (this.parsedResult.engine = engine.describe(this.getUA())), this.parsedResult.engine;
  }
  /**
   * Parse full information about the browser
   * @returns {Parser}
   */
  parse() {
    return this.parseBrowser(), this.parseOS(), this.parsePlatform(), this.parseEngine(), this;
  }
  /**
   * Get parsed result
   * @return {ParsedResult}
   */
  getResult() {
    return Utils.assign({}, this.parsedResult);
  }
  /**
   * Check if parsed browser matches certain conditions
   *
   * @param {Object} checkTree It's one or two layered object,
   * which can include a platform or an OS on the first layer
   * and should have browsers specs on the bottom-laying layer
   *
   * @returns {Boolean|undefined} Whether the browser satisfies the set conditions or not.
   * Returns \`undefined\` when the browser is no described in the checkTree object.
   *
   * @example
   * const browser = Bowser.getParser(window.navigator.userAgent);
   * if (browser.satisfies({chrome: '>118.01.1322' }))
   * // or with os
   * if (browser.satisfies({windows: { chrome: '>118.01.1322' } }))
   * // or with platforms
   * if (browser.satisfies({desktop: { chrome: '>118.01.1322' } }))
   */
  satisfies(checkTree) {
    const platformsAndOSes = {};
    let platformsAndOSCounter = 0;
    const browsers = {};
    let browsersCounter = 0;
    if (Object.keys(checkTree).forEach((key) => {
      const currentDefinition = checkTree[key];
      typeof currentDefinition == "string" ? (browsers[key] = currentDefinition, browsersCounter += 1) : typeof currentDefinition == "object" && (platformsAndOSes[key] = currentDefinition, platformsAndOSCounter += 1);
    }), platformsAndOSCounter > 0) {
      const platformsAndOSNames = Object.keys(platformsAndOSes), OSMatchingDefinition = Utils.find(platformsAndOSNames, (name) => this.isOS(name));
      if (OSMatchingDefinition) {
        const osResult = this.satisfies(platformsAndOSes[OSMatchingDefinition]);
        if (osResult !== void 0)
          return osResult;
      }
      const platformMatchingDefinition = Utils.find(
        platformsAndOSNames,
        (name) => this.isPlatform(name)
      );
      if (platformMatchingDefinition) {
        const platformResult = this.satisfies(platformsAndOSes[platformMatchingDefinition]);
        if (platformResult !== void 0)
          return platformResult;
      }
    }
    if (browsersCounter > 0) {
      const browserNames = Object.keys(browsers), matchingDefinition = Utils.find(browserNames, (name) => this.isBrowser(name, !0));
      if (matchingDefinition !== void 0)
        return this.compareVersion(browsers[matchingDefinition]);
    }
  }
  /**
   * Check if the browser name equals the passed string
   * @param browserName The string to compare with the browser name
   * @param [includingAlias=false] The flag showing whether alias will be included into comparison
   * @returns {boolean}
   */
  isBrowser(browserName, includingAlias = !1) {
    const defaultBrowserName = this.getBrowserName().toLowerCase();
    let browserNameLower = browserName.toLowerCase();
    const alias = Utils.getBrowserTypeByAlias(browserNameLower);
    return includingAlias && alias && (browserNameLower = alias.toLowerCase()), browserNameLower === defaultBrowserName;
  }
  compareVersion(version) {
    let expectedResults = [0], comparableVersion = version, isLoose = !1;
    const currentBrowserVersion = this.getBrowserVersion();
    if (typeof currentBrowserVersion == "string")
      return version[0] === ">" || version[0] === "<" ? (comparableVersion = version.substr(1), version[1] === "=" ? (isLoose = !0, comparableVersion = version.substr(2)) : expectedResults = [], version[0] === ">" ? expectedResults.push(1) : expectedResults.push(-1)) : version[0] === "=" ? comparableVersion = version.substr(1) : version[0] === "~" && (isLoose = !0, comparableVersion = version.substr(1)), expectedResults.indexOf(
        Utils.compareVersions(currentBrowserVersion, comparableVersion, isLoose)
      ) > -1;
  }
  isOS(osName) {
    return this.getOSName(!0) === String(osName).toLowerCase();
  }
  isPlatform(platformType) {
    return this.getPlatformType(!0) === String(platformType).toLowerCase();
  }
  isEngine(engineName) {
    return this.getEngineName(!0) === String(engineName).toLowerCase();
  }
  /**
   * Is anything? Check if the browser is called "anything",
   * the OS called "anything" or the platform called "anything"
   * @param {String} anything
   * @param [includingAlias=false] The flag showing whether alias will be included into comparison
   * @returns {Boolean}
   */
  is(anything, includingAlias = !1) {
    return this.isBrowser(anything, includingAlias) || this.isOS(anything) || this.isPlatform(anything);
  }
  /**
   * Check if any of the given values satisfies this.is(anything)
   * @param {String[]} anythings
   * @returns {Boolean}
   */
  some(anythings = []) {
    return anythings.some((anything) => this.is(anything));
  }
}
/*!
 * Bowser - a browser detector
 * https://github.com/lancedikson/bowser
 * MIT License | (c) Dustin Diaz 2012-2015
 * MIT License | (c) Denis Demchenko 2015-2019
 */
class Bowser {
  /**
   * Creates a {@link Parser} instance
   *
   * @param {String} UA UserAgent string
   * @param {Boolean} [skipParsing=false] Will make the Parser postpone parsing until you ask it
   * explicitly. Same as \`skipParsing\` for {@link Parser}.
   * @returns {Parser}
   * @throws {Error} when UA is not a String
   *
   * @example
   * const parser = Bowser.getParser(window.navigator.userAgent);
   * const result = parser.getResult();
   */
  static getParser(UA, skipParsing = !1) {
    if (typeof UA != "string")
      throw new Error("UserAgent should be a string");
    return new Parser(UA, skipParsing);
  }
  /**
   * Creates a {@link Parser} instance and runs {@link Parser.getResult} immediately
   *
   * @param UA
   * @return {ParsedResult}
   *
   * @example
   * const result = Bowser.parse(window.navigator.userAgent);
   */
  static parse(UA) {
    return new Parser(UA).getResult();
  }
  static get BROWSER_MAP() {
    return BROWSER_MAP;
  }
  static get ENGINE_MAP() {
    return ENGINE_MAP;
  }
  static get OS_MAP() {
    return OS_MAP;
  }
  static get PLATFORMS_MAP() {
    return PLATFORMS_MAP;
  }
}
const useBrowserInfo = () => useMemo(() => {
  {
    const result = Bowser.parse(window.navigator.userAgent);
    return {
      browser: result.browser,
      engine: result.engine,
      os: result.os
    };
  }
}, []);
function useHotkeyListenerComboText(action) {
  return useBrowserInfo().os.name.toLowerCase().includes("mac") ? hotkeyActionDefinitions[action].keyComboMac : hotkeyActionDefinitions[action].keyComboDefault;
}
function ToolbarChatArea() {
  const chatState = useChatState(), [isComposing, setIsComposing] = useState(!1), currentChat = useMemo(
    () => chatState.chats.find((c2) => c2.id === chatState.currentChatId),
    [chatState.chats, chatState.currentChatId]
  ), currentInput = useMemo(
    () => (currentChat == null ? void 0 : currentChat.inputValue) || "",
    [currentChat == null ? void 0 : currentChat.inputValue]
  ), handleInputChange = useCallback(
    (value) => {
      chatState.setChatInput(chatState.currentChatId, value);
    },
    [chatState.setChatInput, chatState.currentChatId]
  ), handleSubmit = useCallback(() => {
    !currentChat || !currentInput.trim() || chatState.addMessage(currentChat.id, currentInput);
  }, [currentChat, currentInput, chatState.addMessage]), handleKeyDown = useCallback(
    (e2) => {
      e2.key === "Enter" && !e2.shiftKey && !isComposing && (e2.preventDefault(), handleSubmit());
    },
    [handleSubmit, isComposing]
  ), handleCompositionStart = useCallback(() => {
    setIsComposing(!0);
  }, []), handleCompositionEnd = useCallback(() => {
    setIsComposing(!1);
  }, []), inputRef = useRef(null);
  useEffect(() => {
    var _a, _b, _c;
    const blurHandler = () => {
      var _a2;
      return (_a2 = inputRef.current) == null ? void 0 : _a2.focus();
    };
    return chatState.isPromptCreationActive ? ((_a = inputRef.current) == null || _a.focus(), (_b = inputRef.current) == null || _b.addEventListener("blur", blurHandler)) : (_c = inputRef.current) == null || _c.blur(), () => {
      var _a2;
      (_a2 = inputRef.current) == null || _a2.removeEventListener("blur", blurHandler);
    };
  }, [chatState.isPromptCreationActive]);
  const buttonClassName = useMemo(
    () => cn(
      "flex size-8 items-center justify-center rounded-full bg-transparent p-1 text-zinc-950 opacity-20 transition-all duration-150",
      currentInput.length > 0 && "bg-blue-600 text-white opacity-100",
      chatState.promptState === "loading" && "cursor-not-allowed bg-zinc-300 text-zinc-500 opacity-30"
    ),
    [currentInput.length, chatState.promptState]
  ), textareaClassName = useMemo(
    () => cn(
      "h-full w-full flex-1 resize-none bg-transparent text-zinc-950 transition-all duration-150 placeholder:text-zinc-950/50 focus:outline-none",
      chatState.promptState === "loading" && "text-zinc-500 placeholder:text-zinc-400"
    ),
    [chatState.promptState]
  ), containerClassName = useMemo(() => {
    const baseClasses = "flex h-24 w-full flex-1 flex-row items-end gap-1 rounded-2xl p-4 text-sm text-zinc-950 shadow-md backdrop-blur transition-all duration-150 placeholder:text-zinc-950/70";
    switch (chatState.promptState) {
      case "loading":
        return cn(
          baseClasses,
          "border-2 border-transparent bg-zinc-50/80",
          "chat-loading-gradient"
        );
      case "success":
        return cn(
          baseClasses,
          "border-2 border-transparent bg-zinc-50/80",
          "chat-success-border"
        );
      case "error":
        return cn(
          baseClasses,
          "border-2 border-transparent bg-zinc-50/80",
          "chat-error-border animate-shake"
        );
      default:
        return cn(baseClasses, "border border-border/30 bg-zinc-50/80");
    }
  }, [chatState.promptState]), ctrlAltCText = useHotkeyListenerComboText(HotkeyActions.CTRL_ALT_C);
  return /* @__PURE__ */ jsxs(
    "div",
    {
      className: containerClassName,
      onClick: () => chatState.startPromptCreation(),
      role: "button",
      tabIndex: 0,
      children: [
        /* @__PURE__ */ jsx(
          J,
          {
            ref: inputRef,
            className: textareaClassName,
            value: currentInput,
            onChange: (e2) => handleInputChange(e2.currentTarget.value),
            onKeyDown: handleKeyDown,
            onCompositionStart: handleCompositionStart,
            onCompositionEnd: handleCompositionEnd,
            placeholder: chatState.isPromptCreationActive ? chatState.promptState === "loading" ? "Processing..." : "Enter prompt..." : \`What do you want to change? (\${ctrlAltCText})\`,
            disabled: chatState.promptState === "loading"
          }
        ),
        /* @__PURE__ */ jsx(
          H$1,
          {
            className: buttonClassName,
            disabled: currentInput.length === 0 || chatState.promptState === "loading",
            onClick: handleSubmit,
            children: /* @__PURE__ */ jsx(Send, { className: "size-4" })
          }
        )
      ]
    }
  );
}
const DraggableContext = createContext(
  null
), DraggableProvider = ({
  containerRef,
  children,
  snapAreas,
  onDragStart,
  onDragEnd
}) => {
  const [borderLocation, setBorderLocation] = useState({
    top: 0,
    left: 0,
    right: 0,
    bottom: 0
  });
  useEffect(() => {
    if (!containerRef.current) return;
    const updateBorderLocation = () => {
      if (containerRef.current) {
        const rect = containerRef.current.getBoundingClientRect();
        setBorderLocation({
          top: rect.top,
          left: rect.left,
          right: rect.right,
          bottom: rect.bottom
        });
      }
    };
    updateBorderLocation();
    const resizeObserver = new ResizeObserver(updateBorderLocation);
    return resizeObserver.observe(containerRef.current), window.addEventListener("resize", updateBorderLocation), () => {
      containerRef.current && resizeObserver.unobserve(containerRef.current), resizeObserver.disconnect(), window.removeEventListener("resize", updateBorderLocation);
    };
  }, [containerRef]);
  const dragStartListeners = useRef(/* @__PURE__ */ new Set()), dragEndListeners = useRef(/* @__PURE__ */ new Set()), registerDragStart = useCallback((cb) => (dragStartListeners.current.add(cb), () => dragStartListeners.current.delete(cb)), []), registerDragEnd = useCallback((cb) => (dragEndListeners.current.add(cb), () => dragEndListeners.current.delete(cb)), []), emitDragStart = useCallback(() => {
    onDragStart && onDragStart(), dragStartListeners.current.forEach((cb) => cb());
  }, [onDragStart]), emitDragEnd = useCallback(() => {
    onDragEnd && onDragEnd(), dragEndListeners.current.forEach((cb) => cb());
  }, [onDragEnd]), contextValue = {
    borderLocation,
    snapAreas,
    registerDragStart,
    registerDragEnd,
    emitDragStart,
    emitDragEnd
  };
  return /* @__PURE__ */ jsx(DraggableContext.Provider, { value: contextValue, children });
};
function useDraggable(config2) {
  const providerData = useContext(DraggableContext), latestProviderDataRef = useRef(providerData);
  useEffect(() => {
    latestProviderDataRef.current = providerData;
  }, [providerData]);
  const movingElementRef = useRef(null), dragInitiatorRef = useRef(null), [movingElementNode, setMovingElementNode] = useState(null), [dragInitiatorNode, setDragInitiatorNode] = useState(null), mouseToDraggableCenterOffsetRef = useRef(null), mouseDownPosRef = useRef(null), currentMousePosRef = useRef(null), isDraggingRef = useRef(!1), persistedRelativeCenterRef = useRef(config2.initialRelativeCenter), [currentSnapArea, setCurrentSnapArea] = useState(null), {
    startThreshold = 3,
    areaSnapThreshold = 60,
    // px, default threshold for snapping
    onDragStart,
    onDragEnd,
    initialSnapArea,
    springStiffness = 0.2,
    // Default spring stiffness
    springDampness = 0.55
    // Default spring dampness
    // initialRelativeCenter is used to initialize persistedRelativeCenterRef
  } = config2, animatedPositionRef = useRef(null), velocityRef = useRef({ x: 0, y: 0 }), hasAnimatedOnceRef = useRef(!1);
  useEffect(() => {
    if (initialSnapArea && providerData && providerData.borderLocation && providerData.snapAreas && providerData.snapAreas[initialSnapArea] && !isDraggingRef.current) {
      const { top, left, right, bottom } = providerData.borderLocation, width = right - left, height = bottom - top, center = {
        topLeft: { x: left, y: top },
        topRight: { x: right, y: top },
        bottomLeft: { x: left, y: bottom },
        bottomRight: { x: right, y: bottom }
      }[initialSnapArea];
      if (center && width > 0 && height > 0) {
        const relX = (center.x - left) / width, relY = (center.y - top) / height;
        persistedRelativeCenterRef.current = { x: relX, y: relY };
      } else center && console.warn(
        "useDraggable: Container for initialSnapArea has zero width or height. Cannot calculate relative center from snap area. Falling back to initialRelativeCenter or undefined."
      );
    }
  }, [initialSnapArea, providerData]);
  function getSnapAreaCenters(borderLocation) {
    const { top, left, right, bottom } = borderLocation, centerX = (left + right) / 2;
    return {
      topLeft: { x: left, y: top },
      topCenter: { x: centerX, y: top },
      topRight: { x: right, y: top },
      bottomLeft: { x: left, y: bottom },
      bottomCenter: { x: centerX, y: bottom },
      bottomRight: { x: right, y: bottom }
    };
  }
  const updateDraggablePosition = useCallback(() => {
    var _a, _b;
    const draggableEl = movingElementRef.current;
    if (!draggableEl) return;
    const draggableWidth = draggableEl.offsetWidth, draggableHeight = draggableEl.offsetHeight, offsetParent = draggableEl.offsetParent;
    let parentViewportLeft = 0, parentViewportTop = 0, parentWidth = window.innerWidth, parentHeight = window.innerHeight;
    if (offsetParent) {
      const opRect = offsetParent.getBoundingClientRect();
      parentViewportLeft = opRect.left, parentViewportTop = opRect.top, parentWidth = offsetParent.offsetWidth || window.innerWidth, parentHeight = offsetParent.offsetHeight || window.innerHeight;
    }
    let targetViewportCenterX = null, targetViewportCenterY = null;
    const currentDesiredRelativeCenter = persistedRelativeCenterRef.current;
    let snapArea = null, snapTarget = null;
    const provider = latestProviderDataRef.current;
    let isTopHalf = !0, isLeftHalf = !0;
    if (isDraggingRef.current && mouseToDraggableCenterOffsetRef.current && currentMousePosRef.current && provider && provider.borderLocation && provider.snapAreas) {
      const dragCenter = {
        x: currentMousePosRef.current.x - mouseToDraggableCenterOffsetRef.current.x,
        y: currentMousePosRef.current.y - mouseToDraggableCenterOffsetRef.current.y
      }, areaCenters = getSnapAreaCenters(provider.borderLocation);
      let minDist = Number.POSITIVE_INFINITY, closestArea = null, closestCenter = null;
      for (const area in provider.snapAreas)
        if (provider.snapAreas[area]) {
          const center = areaCenters[area];
          if (!center) continue;
          const dist = Math.hypot(
            center.x - dragCenter.x,
            center.y - dragCenter.y
          );
          dist < minDist && (minDist = dist, closestArea = area, closestCenter = center);
        }
      closestArea && closestCenter && minDist <= areaSnapThreshold && (snapArea = closestArea, snapTarget = closestCenter), isLeftHalf = (dragCenter.x - parentViewportLeft) / parentWidth <= 0.5, isTopHalf = (dragCenter.y - parentViewportTop) / parentHeight <= 0.5;
    }
    if (isDraggingRef.current && snapTarget)
      targetViewportCenterX = snapTarget.x, targetViewportCenterY = snapTarget.y, setCurrentSnapArea(snapArea), isLeftHalf = (snapTarget.x - parentViewportLeft) / parentWidth <= 0.5, isTopHalf = (snapTarget.y - parentViewportTop) / parentHeight <= 0.5;
    else if (isDraggingRef.current && mouseToDraggableCenterOffsetRef.current && currentMousePosRef.current)
      targetViewportCenterX = currentMousePosRef.current.x - mouseToDraggableCenterOffsetRef.current.x, targetViewportCenterY = currentMousePosRef.current.y - mouseToDraggableCenterOffsetRef.current.y, setCurrentSnapArea(null), isLeftHalf = (targetViewportCenterX - parentViewportLeft) / parentWidth <= 0.5, isTopHalf = (targetViewportCenterY - parentViewportTop) / parentHeight <= 0.5;
    else {
      if (currentDesiredRelativeCenter && parentWidth > 0 && parentHeight > 0) {
        if (isTopHalf = currentDesiredRelativeCenter.y <= 0.5, isLeftHalf = currentDesiredRelativeCenter.x <= 0.5, isLeftHalf) {
          const targetCenterXInParent = parentWidth * currentDesiredRelativeCenter.x;
          targetViewportCenterX = parentViewportLeft + targetCenterXInParent;
        } else {
          const targetCenterXInParent = parentWidth * (1 - currentDesiredRelativeCenter.x);
          targetViewportCenterX = parentViewportLeft + parentWidth - targetCenterXInParent;
        }
        if (isTopHalf) {
          const targetCenterYInParent = parentHeight * currentDesiredRelativeCenter.y;
          targetViewportCenterY = parentViewportTop + targetCenterYInParent;
        } else {
          const targetCenterYInParent = parentHeight * (1 - currentDesiredRelativeCenter.y);
          targetViewportCenterY = parentViewportTop + parentHeight - targetCenterYInParent;
        }
      } else {
        !((_a = movingElementRef.current) != null && _a.style.left) && !((_b = movingElementRef.current) != null && _b.style.top) && console.warn(
          "useDraggable: Cannot determine position. Parent has no dimensions or initialRelativeCenter was not effectively set."
        );
        return;
      }
      setCurrentSnapArea(null);
    }
    if (targetViewportCenterX === null || targetViewportCenterY === null)
      return;
    const { borderLocation } = latestProviderDataRef.current || {
      borderLocation: void 0
    };
    if (borderLocation && draggableWidth > 0 && draggableHeight > 0) {
      const providerRectWidth = borderLocation.right - borderLocation.left, providerRectHeight = borderLocation.bottom - borderLocation.top;
      let clampedCenterX = targetViewportCenterX, clampedCenterY = targetViewportCenterY;
      if (draggableWidth >= providerRectWidth)
        clampedCenterX = borderLocation.left + providerRectWidth / 2;
      else {
        const minX = borderLocation.left + draggableWidth / 2, maxX = borderLocation.right - draggableWidth / 2;
        clampedCenterX = Math.max(minX, Math.min(clampedCenterX, maxX));
      }
      if (draggableHeight >= providerRectHeight)
        clampedCenterY = borderLocation.top + providerRectHeight / 2;
      else {
        const minY = borderLocation.top + draggableHeight / 2, maxY = borderLocation.bottom - draggableHeight / 2;
        clampedCenterY = Math.max(minY, Math.min(clampedCenterY, maxY));
      }
      targetViewportCenterX = clampedCenterX, targetViewportCenterY = clampedCenterY;
    }
    if (!animatedPositionRef.current) {
      animatedPositionRef.current = {
        x: targetViewportCenterX,
        y: targetViewportCenterY
      }, velocityRef.current = { x: 0, y: 0 };
      const targetElementStyleX2 = targetViewportCenterX - draggableWidth / 2, targetElementStyleY2 = targetViewportCenterY - draggableHeight / 2, elStyle2 = draggableEl.style;
      if (elStyle2.right = "", elStyle2.bottom = "", elStyle2.left = "", elStyle2.top = "", isLeftHalf) {
        const styleLeftPx = targetElementStyleX2 - parentViewportLeft;
        elStyle2.left = parentWidth > 0 ? \`\${(styleLeftPx / parentWidth * 100).toFixed(2)}%\` : "0px", elStyle2.right = "";
      } else {
        const styleRightPx = parentViewportLeft + parentWidth - (targetElementStyleX2 + draggableWidth);
        elStyle2.right = parentWidth > 0 ? \`\${(styleRightPx / parentWidth * 100).toFixed(2)}%\` : "0px", elStyle2.left = "";
      }
      if (isTopHalf) {
        const styleTopPx = targetElementStyleY2 - parentViewportTop;
        elStyle2.top = parentHeight > 0 ? \`\${(styleTopPx / parentHeight * 100).toFixed(2)}%\` : "0px", elStyle2.bottom = "";
      } else {
        const styleBottomPx = parentViewportTop + parentHeight - (targetElementStyleY2 + draggableHeight);
        elStyle2.bottom = parentHeight > 0 ? \`\${(styleBottomPx / parentHeight * 100).toFixed(2)}%\` : "0px", elStyle2.top = "";
      }
      hasAnimatedOnceRef.current = !0;
      return;
    }
    if (!hasAnimatedOnceRef.current) {
      hasAnimatedOnceRef.current = !0;
      return;
    }
    const pos = animatedPositionRef.current, vel = velocityRef.current, dx = targetViewportCenterX - pos.x, dy = targetViewportCenterY - pos.y, ax = springStiffness * dx - springDampness * vel.x, ay = springStiffness * dy - springDampness * vel.y;
    vel.x += ax, vel.y += ay, pos.x += vel.x, pos.y += vel.y;
    const threshold = 0.5;
    Math.abs(dx) < threshold && Math.abs(dy) < threshold && Math.abs(vel.x) < threshold && Math.abs(vel.y) < threshold && (pos.x = targetViewportCenterX, pos.y = targetViewportCenterY, vel.x = 0, vel.y = 0), animatedPositionRef.current = { ...pos }, velocityRef.current = { ...vel };
    const targetElementStyleX = pos.x - draggableWidth / 2, targetElementStyleY = pos.y - draggableHeight / 2, elStyle = draggableEl.style;
    if (elStyle.right = "", elStyle.bottom = "", elStyle.left = "", elStyle.top = "", isLeftHalf) {
      const styleLeftPx = targetElementStyleX - parentViewportLeft;
      elStyle.left = parentWidth > 0 ? \`\${(styleLeftPx / parentWidth * 100).toFixed(2)}%\` : "0px", elStyle.right = "";
    } else {
      const styleRightPx = parentViewportLeft + parentWidth - (targetElementStyleX + draggableWidth);
      elStyle.right = parentWidth > 0 ? \`\${(styleRightPx / parentWidth * 100).toFixed(2)}%\` : "0px", elStyle.left = "";
    }
    if (isTopHalf) {
      const styleTopPx = targetElementStyleY - parentViewportTop;
      elStyle.top = parentHeight > 0 ? \`\${(styleTopPx / parentHeight * 100).toFixed(2)}%\` : "0px", elStyle.bottom = "";
    } else {
      const styleBottomPx = parentViewportTop + parentHeight - (targetElementStyleY + draggableHeight);
      elStyle.bottom = parentHeight > 0 ? \`\${(styleBottomPx / parentHeight * 100).toFixed(2)}%\` : "0px", elStyle.top = "";
    }
    (Math.abs(pos.x - targetViewportCenterX) > threshold || Math.abs(pos.y - targetViewportCenterY) > threshold || Math.abs(vel.x) > threshold || Math.abs(vel.y) > threshold || isDraggingRef.current) && requestAnimationFrame(updateDraggablePosition);
  }, [areaSnapThreshold, springStiffness, springDampness]), [wasDragged, setWasDragged] = useState(!1), mouseUpHandler = useCallback(
    (_e) => {
      var _a;
      if (isDraggingRef.current) {
        onDragEnd && onDragEnd(), (_a = latestProviderDataRef.current) != null && _a.emitDragEnd && latestProviderDataRef.current.emitDragEnd(), setWasDragged(!0), setTimeout(() => setWasDragged(!1), 0);
        const draggableEl = movingElementRef.current, provider = latestProviderDataRef.current;
        if (draggableEl && provider && provider.borderLocation) {
          const draggableWidth = draggableEl.offsetWidth, draggableHeight = draggableEl.offsetHeight, offsetParent = draggableEl.offsetParent;
          let parentViewportLeft = 0, parentViewportTop = 0, parentWidth = window.innerWidth, parentHeight = window.innerHeight;
          if (offsetParent) {
            const opRect = offsetParent.getBoundingClientRect();
            parentViewportLeft = opRect.left, parentViewportTop = opRect.top, parentWidth = offsetParent.offsetWidth || window.innerWidth, parentHeight = offsetParent.offsetHeight || window.innerHeight;
          }
          let releasedCenterX = 0, releasedCenterY = 0;
          currentMousePosRef.current && mouseToDraggableCenterOffsetRef.current ? (releasedCenterX = currentMousePosRef.current.x - mouseToDraggableCenterOffsetRef.current.x, releasedCenterY = currentMousePosRef.current.y - mouseToDraggableCenterOffsetRef.current.y) : animatedPositionRef.current && (releasedCenterX = animatedPositionRef.current.x, releasedCenterY = animatedPositionRef.current.y);
          const borderLocation = provider.borderLocation, minX = borderLocation.left + draggableWidth / 2, maxX = borderLocation.right - draggableWidth / 2, minY = borderLocation.top + draggableHeight / 2, maxY = borderLocation.bottom - draggableHeight / 2;
          releasedCenterX = Math.max(minX, Math.min(releasedCenterX, maxX)), releasedCenterY = Math.max(minY, Math.min(releasedCenterY, maxY));
          const areaCenters = getSnapAreaCenters(borderLocation);
          let minDist = Number.POSITIVE_INFINITY, closestArea = null, closestCenter = null;
          for (const area in provider.snapAreas)
            if (provider.snapAreas[area]) {
              const center = areaCenters[area];
              if (!center) continue;
              const dist = Math.hypot(
                center.x - releasedCenterX,
                center.y - releasedCenterY
              );
              dist < minDist && (minDist = dist, closestArea = area, closestCenter = center);
            }
          if (closestArea && closestCenter) {
            setCurrentSnapArea(closestArea);
            const relX = (closestCenter.x - parentViewportLeft) / parentWidth, relY = (closestCenter.y - parentViewportTop) / parentHeight;
            persistedRelativeCenterRef.current = { x: relX, y: relY };
          } else {
            setCurrentSnapArea(null);
            const relX = (releasedCenterX - parentViewportLeft) / parentWidth, relY = (releasedCenterY - parentViewportTop) / parentHeight;
            persistedRelativeCenterRef.current = { x: relX, y: relY };
          }
        }
      }
      mouseDownPosRef.current = null, isDraggingRef.current = !1, window.removeEventListener("mousemove", mouseMoveHandler, {
        capture: !0
      }), window.removeEventListener("mouseup", mouseUpHandler, {
        capture: !0
      }), movingElementRef.current && (movingElementRef.current.style.userSelect = ""), document.body.style.userSelect = "", document.body.style.cursor = "";
    },
    [onDragEnd]
  ), mouseMoveHandler = useCallback(
    (e2) => {
      var _a;
      if (!mouseDownPosRef.current) return;
      Math.hypot(
        e2.clientX - mouseDownPosRef.current.x,
        e2.clientY - mouseDownPosRef.current.y
      ) > startThreshold && !isDraggingRef.current && (isDraggingRef.current = !0, movingElementRef.current && (movingElementRef.current.style.userSelect = "none"), document.body.style.userSelect = "none", document.body.style.cursor = "grabbing", onDragStart && onDragStart(), (_a = latestProviderDataRef.current) != null && _a.emitDragStart && latestProviderDataRef.current.emitDragStart(), requestAnimationFrame(updateDraggablePosition)), currentMousePosRef.current = { x: e2.clientX, y: e2.clientY };
    },
    [startThreshold, onDragStart, updateDraggablePosition]
  ), mouseDownHandler = useCallback(
    (e2) => {
      if (e2.button !== 0)
        return;
      const handleNode = dragInitiatorRef.current, draggableItemNode = movingElementRef.current;
      if (handleNode) {
        if (!handleNode.contains(e2.target) && e2.target !== handleNode)
          return;
      } else if (draggableItemNode) {
        if (!draggableItemNode.contains(e2.target) && e2.target !== draggableItemNode)
          return;
      } else {
        console.error(
          "Draggable element or handle ref not set in mouseDownHandler"
        );
        return;
      }
      if (mouseDownPosRef.current = { x: e2.clientX, y: e2.clientY }, !movingElementRef.current) {
        console.error("Draggable element ref not set in mouseDownHandler");
        return;
      }
      const rect = movingElementRef.current.getBoundingClientRect(), currentDraggableCenterX = rect.left + rect.width / 2, currentDraggableCenterY = rect.top + rect.height / 2;
      mouseToDraggableCenterOffsetRef.current = {
        x: e2.clientX - currentDraggableCenterX,
        y: e2.clientY - currentDraggableCenterY
      }, window.addEventListener("mousemove", mouseMoveHandler, {
        capture: !0
      }), window.addEventListener("mouseup", mouseUpHandler, {
        capture: !0
      });
    },
    [mouseMoveHandler, mouseUpHandler]
  );
  useEffect(() => {
    const elementToListenOn = dragInitiatorNode || movingElementNode;
    return elementToListenOn && elementToListenOn.addEventListener("mousedown", mouseDownHandler), () => {
      elementToListenOn && elementToListenOn.removeEventListener("mousedown", mouseDownHandler), isDraggingRef.current && (onDragEnd && onDragEnd(), isDraggingRef.current = !1, movingElementNode && (movingElementNode.style.userSelect = ""), document.body.style.userSelect = "", document.body.style.cursor = "", window.removeEventListener("mousemove", mouseMoveHandler, {
        capture: !0
      }), window.removeEventListener("mouseup", mouseUpHandler, {
        capture: !0
      }));
    };
  }, [
    movingElementNode,
    dragInitiatorNode,
    mouseDownHandler,
    onDragEnd,
    mouseMoveHandler,
    mouseUpHandler
  ]), useEffect(() => {
    movingElementRef.current && providerData && providerData.borderLocation && // Needed for calculations within updateDraggablePosition
    persistedRelativeCenterRef.current && // Ensure we have a center to position to
    !isDraggingRef.current && // Not currently dragging
    !hasAnimatedOnceRef.current && requestAnimationFrame(() => {
      movingElementRef.current && updateDraggablePosition();
    });
  }, [
    movingElementNode,
    // Run when element is available/changes
    providerData,
    // Run if provider context changes (for borderLocation)
    config2.initialRelativeCenter,
    // If this changes, persistedRelativeCenterRef might be re-initialized
    initialSnapArea,
    // If this changes, an effect updates persistedRelativeCenterRef
    updateDraggablePosition
    // Memoized callback for positioning
    // hasAnimatedOnceRef is intentionally not a dep, its current value is checked inside.
  ]);
  const draggableRefCallback = useCallback((node) => {
    setMovingElementNode(node), movingElementRef.current = node;
  }, []), handleRefCallback = useCallback((node) => {
    setDragInitiatorNode(node), dragInitiatorRef.current = node;
  }, []);
  return {
    draggableRef: draggableRefCallback,
    handleRef: handleRefCallback,
    position: {
      snapArea: currentSnapArea,
      isTopHalf: persistedRelativeCenterRef.current ? persistedRelativeCenterRef.current.y <= 0.5 : !0,
      isLeftHalf: persistedRelativeCenterRef.current ? persistedRelativeCenterRef.current.x <= 0.5 : !0
    },
    wasDragged
  };
}
function ToolbarSection({ children }) {
  return /* @__PURE__ */ jsx("div", { className: "fade-in slide-in-from-right-2 flex max-h-sm max-w-full animate-in snap-start flex-col items-center justify-between gap-1 py-0.5", children });
}
function ToolbarItem(props) {
  return /* @__PURE__ */ jsxs("div", { className: "relative flex w-full shrink-0 items-center justify-center", children: [
    props.children,
    props.badgeContent && /* @__PURE__ */ jsx(
      "div",
      {
        className: cn(
          "bg-blue-600 text-white",
          props.badgeClassName,
          "pointer-events-none absolute right-0 bottom-0 flex h-3 w-max min-w-3 max-w-8 select-none items-center justify-center truncate rounded-full px-0.5 font-semibold text-[0.5em]"
        ),
        children: props.badgeContent
      }
    ),
    props.statusDot && /* @__PURE__ */ jsx(
      "div",
      {
        className: cn(
          "bg-rose-600",
          props.statusDotClassName,
          "pointer-events-none absolute top-0 right-0 size-1.5 rounded-full"
        )
      }
    )
  ] });
}
const ToolbarButton = forwardRef(
  ({
    badgeContent,
    badgeClassName,
    statusDot,
    statusDotClassName,
    tooltipHint,
    variant = "default",
    active,
    ...props
  }, ref) => {
    const button = /* @__PURE__ */ jsx(
      H$1,
      {
        ref,
        ...props,
        className: cn(
          "flex items-center justify-center rounded-full p-1 text-zinc-950 ring ring-transparent transition-all duration-150 hover:bg-zinc-950/5",
          variant === "default" ? "size-8" : "h-8 rounded-full",
          active && "bg-white/40 ring-zinc-950/20",
          props.className
        )
      }
    );
    return /* @__PURE__ */ jsx(
      ToolbarItem,
      {
        badgeContent,
        badgeClassName,
        statusDot,
        statusDotClassName,
        children: button
      }
    );
  }
);
ToolbarButton.displayName = "ToolbarButton";
const Logo = ({
  color = "default",
  loading = !1,
  loadingSpeed = "slow",
  ...props
}) => {
  const colorStyle = {
    default: "fill-stagewise-700 stroke-none",
    black: "fill-zinc-950 stroke-none",
    white: "fill-white stroke-none",
    zinc: "fill-zinc-500/50 stroke-none",
    current: "fill-current stroke-none",
    gradient: "fill-white stroke-black/30 stroke-1"
  };
  return /* @__PURE__ */ jsxs(
    "div",
    {
      className: \`relative \${color === "gradient" ? "overflow-hidden rounded-full" : "overflow-visible"} \${props.className || ""} \${loading ? "drop-shadow-xl" : ""} aspect-square\`,
      children: [
        color === "gradient" && /* @__PURE__ */ jsxs("div", { className: "absolute inset-0", children: [
          /* @__PURE__ */ jsx("div", { className: "absolute inset-0 size-full bg-gradient-to-tr from-indigo-700 via-blue-500 to-teal-500" }),
          /* @__PURE__ */ jsx("div", { className: "absolute top-1/2 left-1/2 size-9/12 bg-[radial-gradient(circle,rgba(219,39,119,0.2)_0%,rgba(219,39,119,0)_100%)]" }),
          /* @__PURE__ */ jsx("div", { className: "absolute right-1/2 bottom-1/2 size-full bg-[radial-gradient(circle,rgba(219,39,119,0.2)_0%,rgba(219,39,119,0)_100%)]" }),
          /* @__PURE__ */ jsx("div", { className: "absolute top-0 left-[-10%] size-[120%] bg-[radial-gradient(circle,rgba(255,255,255,0)_60%,rgba(255,255,255,0.2)_70%)]" }),
          /* @__PURE__ */ jsx("div", { className: "absolute top-[-20%] left-0 h-[120%] w-full bg-[radial-gradient(circle,rgba(55,48,163,0)_55%,rgba(55,48,163,0.35)_73%)]" })
        ] }),
        /* @__PURE__ */ jsxs(
          "svg",
          {
            className: \`absolute overflow-visible \${color === "gradient" ? "top-[25%] left-[25%] h-[50%] w-[50%] drop-shadow-indigo-950 drop-shadow-xs" : "top-0 left-0 h-full w-full"}\`,
            viewBox: "0 0 2048 2048",
            children: [
              /* @__PURE__ */ jsx("title", { children: "stagewise" }),
              /* @__PURE__ */ jsx(
                "ellipse",
                {
                  className: colorStyle[color] + (loading ? " animate-pulse" : ""),
                  id: "path3",
                  ry: "624",
                  rx: "624",
                  cy: "1024",
                  cx: "1024"
                }
              )
            ]
          }
        ),
        /* @__PURE__ */ jsx(
          "svg",
          {
            className: \`absolute overflow-visible \${color === "gradient" ? "top-[25%] left-[25%] h-[50%] w-[50%]" : "top-0 left-0 h-full w-full"}\`,
            viewBox: "0 0 2048 2048",
            children: /* @__PURE__ */ jsx(
              "path",
              {
                id: "path4",
                className: \`origin-center \${colorStyle[color]}\${loading ? loadingSpeed === "fast" ? " animate-spin-fast" : " animate-spin-slow" : ""}\`,
                d: "M 1024 0 A 1024 1024 0 0 0 0 1024 A 1024 1024 0 0 0 1024 2048 L 1736 2048 L 1848 2048 C 1958.7998 2048 2048 1958.7998 2048 1848 L 2048 1736 L 2048 1024 A 1024 1024 0 0 0 1024 0 z M 1024.9414 200 A 824 824 0 0 1 1848.9414 1024 A 824 824 0 0 1 1024.9414 1848 A 824 824 0 0 1 200.94141 1024 A 824 824 0 0 1 1024.9414 200 z "
              }
            )
          }
        )
      ]
    }
  );
}, SettingsButton = ({
  onOpenPanel,
  isActive = !1
}) => /* @__PURE__ */ jsx(ToolbarSection, { children: /* @__PURE__ */ jsx(ToolbarButton, { onClick: onOpenPanel, active: isActive, children: /* @__PURE__ */ jsx(Settings, { className: "size-4" }) }) }), SettingsPanel = () => /* @__PURE__ */ jsxs(Panel, { children: [
  /* @__PURE__ */ jsx(PanelHeader, { title: "Settings" }),
  /* @__PURE__ */ jsx(PanelContent, { children: /* @__PURE__ */ jsx(ConnectionSettings, {}) }),
  /* @__PURE__ */ jsx(PanelContent, { children: /* @__PURE__ */ jsx(ProjectInfoSection, {}) })
] }), ConnectionSettings = () => {
  const {
    windows,
    isDiscovering,
    discoveryError,
    discover,
    selectedSession,
    selectSession
  } = useVSCode(), handleSessionChange = (e2) => {
    const target = e2.target, selectedSessionId = target.value === "" ? void 0 : target.value;
    selectSession(selectedSessionId);
  }, { appName } = useVSCode(), handleRefresh = () => {
    discover();
  };
  return /* @__PURE__ */ jsxs("div", { className: "space-y-4 pb-4", children: [
    /* @__PURE__ */ jsxs("div", { children: [
      /* @__PURE__ */ jsxs(
        "label",
        {
          htmlFor: "session-select",
          className: "mb-2 block font-medium text-sm text-zinc-700",
          children: [
            "IDE Window ",
            appName && \`(\${appName})\`
          ]
        }
      ),
      /* @__PURE__ */ jsxs("div", { className: "flex w-full items-center space-x-2", children: [
        /* @__PURE__ */ jsxs(
          "select",
          {
            id: "session-select",
            value: (selectedSession == null ? void 0 : selectedSession.sessionId) || "",
            onChange: handleSessionChange,
            className: "h-8 min-w-0 flex-1 rounded-lg border border-zinc-300 bg-zinc-500/10 px-3 text-sm backdrop-saturate-150 focus:border-zinc-500 focus:outline-none",
            disabled: isDiscovering,
            children: [
              /* @__PURE__ */ jsx("option", { value: "", disabled: !0, children: windows.length > 0 ? "Select an IDE window..." : "No windows available" }),
              windows.map((window2) => /* @__PURE__ */ jsxs("option", { value: window2.sessionId, children: [
                window2.displayName,
                " - Port ",
                window2.port
              ] }, window2.sessionId))
            ]
          }
        ),
        /* @__PURE__ */ jsx(
          "button",
          {
            type: "button",
            onClick: handleRefresh,
            disabled: isDiscovering,
            className: "flex h-8 w-8 flex-shrink-0 items-center justify-center rounded-lg bg-zinc-500/10 backdrop-saturate-150 transition-colors hover:bg-zinc-500/20 disabled:opacity-50",
            title: "Refresh window list",
            children: /* @__PURE__ */ jsx(
              RefreshCw,
              {
                className: \`size-4 \${isDiscovering ? "animate-spin" : ""}\`
              }
            )
          }
        )
      ] }),
      discoveryError && /* @__PURE__ */ jsxs("p", { className: "mt-1 text-red-600 text-sm", children: [
        "Error discovering windows: ",
        discoveryError
      ] }),
      !isDiscovering && windows.length === 0 && !discoveryError && /* @__PURE__ */ jsx("p", { className: "mt-1 text-sm text-zinc-500", children: "No IDE windows found. Make sure the Stagewise extension is installed and running." })
    ] }),
    selectedSession && /* @__PURE__ */ jsxs("div", { className: "rounded-lg bg-blue-50 p-3", children: [
      /* @__PURE__ */ jsxs("p", { className: "text-blue-800 text-sm", children: [
        /* @__PURE__ */ jsx("strong", { children: "Selected:" }),
        " ",
        selectedSession.displayName
      ] }),
      /* @__PURE__ */ jsxs("p", { className: "mt-1 text-blue-600 text-xs", children: [
        "Session ID: ",
        selectedSession.sessionId.substring(0, 8),
        "..."
      ] })
    ] }),
    !selectedSession && windows.length > 0 && /* @__PURE__ */ jsx("div", { className: "rounded-lg bg-amber-50 p-3", children: /* @__PURE__ */ jsxs("p", { className: "text-amber-800 text-sm", children: [
      /* @__PURE__ */ jsx("strong", { children: "No window selected:" }),
      " Please select an IDE window above to connect."
    ] }) })
  ] });
}, ProjectInfoSection = () => /* @__PURE__ */ jsxs("div", { className: "space-y-2 text-xs text-zinc-700", children: [
  /* @__PURE__ */ jsxs("div", { className: "my-2 flex flex-wrap items-center gap-3", children: [
    /* @__PURE__ */ jsxs(
      "a",
      {
        href: "https://github.com/stagewise-io/stagewise",
        target: "_blank",
        rel: "noopener noreferrer",
        className: "flex items-center gap-1 text-blue-700 hover:underline",
        title: "GitHub Repository",
        children: [
          /* @__PURE__ */ jsx("svg", { width: "16", height: "16", fill: "currentColor", viewBox: "0 0 24 24", children: /* @__PURE__ */ jsx("path", { d: "M12 .5C5.73.5.5 5.73.5 12c0 5.08 3.29 9.39 7.86 10.91.58.11.79-.25.79-.56 0-.28-.01-1.02-.02-2-3.2.7-3.88-1.54-3.88-1.54-.53-1.34-1.3-1.7-1.3-1.7-1.06-.72.08-.71.08-.71 1.17.08 1.78 1.2 1.78 1.2 1.04 1.78 2.73 1.27 3.4.97.11-.75.41-1.27.74-1.56-2.56-.29-5.26-1.28-5.26-5.7 0-1.26.45-2.29 1.19-3.1-.12-.29-.52-1.46.11-3.05 0 0 .98-.31 3.2 1.18a11.1 11.1 0 0 1 2.92-.39c.99 0 1.99.13 2.92.39 2.22-1.49 3.2-1.18 3.2-1.18.63 1.59.23 2.76.11 3.05.74.81 1.19 1.84 1.19 3.1 0 4.43-2.7 5.41-5.27 5.7.42.36.79 1.08.79 2.18 0 1.57-.01 2.84-.01 3.23 0 .31.21.68.8.56C20.71 21.39 24 17.08 24 12c0-6.27-5.23-11.5-12-11.5z" }) }),
          "GitHub"
        ]
      }
    ),
    /* @__PURE__ */ jsxs(
      "a",
      {
        href: "https://discord.gg/gkdGsDYaKA",
        target: "_blank",
        rel: "noopener noreferrer",
        className: "flex items-center gap-1 text-indigo-700 hover:underline",
        title: "Join our Discord",
        children: [
          /* @__PURE__ */ jsx("svg", { width: "16", height: "16", fill: "currentColor", viewBox: "0 0 24 24", children: /* @__PURE__ */ jsx("path", { d: "M20.317 4.369A19.791 19.791 0 0 0 16.885 3.2a.117.117 0 0 0-.124.06c-.537.96-1.13 2.22-1.552 3.2a18.524 18.524 0 0 0-5.418 0c-.423-.98-1.016-2.24-1.553-3.2a.117.117 0 0 0-.124-.06A19.736 19.736 0 0 0 3.683 4.369a.105.105 0 0 0-.047.043C.533 9.043-.32 13.579.099 18.057a.12.12 0 0 0 .045.083c1.934 1.426 3.81 2.288 5.671 2.857a.116.116 0 0 0 .127-.043c.438-.602.827-1.24 1.165-1.908a.112.112 0 0 0-.062-.158c-.619-.234-1.205-.52-1.77-.853a.117.117 0 0 1-.012-.194c.119-.09.238-.183.353-.277a.112.112 0 0 1 .114-.013c3.747 1.71 7.789 1.71 11.533 0a.112.112 0 0 1 .115.012c.115.094.234.188.353.278a.117.117 0 0 1-.012.194c-.565.333-1.151.619-1.77.853a.112.112 0 0 0-.062.158c.34.668.728 1.306 1.165 1.908a.115.115 0 0 0 .127.043c1.861-.569 3.737-1.431 5.671-2.857a.12.12 0 0 0 .045-.083c.5-5.177-.838-9.673-3.636-13.645a.105.105 0 0 0-.047-.043zM8.02 15.331c-1.183 0-2.156-1.085-2.156-2.419 0-1.333.955-2.418 2.156-2.418 1.21 0 2.175 1.095 2.156 2.418 0 1.334-.955 2.419-2.156 2.419zm7.96 0c-1.183 0-2.156-1.085-2.156-2.419 0-1.333.955-2.418 2.156-2.418 1.21 0 2.175 1.095 2.156 2.418 0 1.334-.946 2.419-2.156 2.419z" }) }),
          "Discord"
        ]
      }
    ),
    /* @__PURE__ */ jsxs(
      "a",
      {
        href: "https://marketplace.visualstudio.com/items?itemName=stagewise.stagewise-vscode-extension",
        target: "_blank",
        rel: "noopener noreferrer",
        className: "flex items-center gap-1 text-violet-700 hover:underline",
        title: "VS Code Marketplace",
        children: [
          /* @__PURE__ */ jsx("svg", { width: "16", height: "16", fill: "currentColor", viewBox: "0 0 24 24", children: /* @__PURE__ */ jsx("path", { d: "M21.805 2.29a2.25 2.25 0 0 0-2.45-.49l-7.5 3.25a2.25 2.25 0 0 0-1.31 2.06v1.13l-5.13 2.22a2.25 2.25 0 0 0-1.31 2.06v3.5a2.25 2.25 0 0 0 1.31 2.06l5.13 2.22v1.13a2.25 2.25 0 0 0 1.31 2.06l7.5 3.25a2.25 2.25 0 0 0 2.45-.49A2.25 2.25 0 0 0 23 20.25V3.75a2.25 2.25 0 0 0-1.195-1.46zM12 20.25v-16.5l7.5 3.25v10l-7.5 3.25z" }) }),
          "VS Code Marketplace"
        ]
      }
    )
  ] }),
  /* @__PURE__ */ jsxs("div", { className: "mt-2", children: [
    /* @__PURE__ */ jsx("span", { className: "font-semibold", children: "Contact:" }),
    " ",
    /* @__PURE__ */ jsx(
      "a",
      {
        href: "mailto:sales@stagewise.io",
        className: "text-blue-700 hover:underline",
        children: "sales@stagewise.io"
      }
    )
  ] }),
  /* @__PURE__ */ jsx("div", { className: "mt-2 text-zinc-500", children: /* @__PURE__ */ jsxs("span", { children: [
    "Licensed under AGPL v3.",
    " ",
    /* @__PURE__ */ jsx(
      "a",
      {
        href: "https://github.com/stagewise-io/stagewise/blob/main/LICENSE",
        target: "_blank",
        rel: "noopener noreferrer",
        className: "hover:underline",
        children: "View license"
      }
    )
  ] }) })
] });
function DisconnectedStatePanel({
  discover,
  discoveryError
}) {
  return /* @__PURE__ */ jsxs("div", { className: "rounded-lg border border-orange-200 bg-orange-50/90 p-4 shadow-lg backdrop-blur", children: [
    /* @__PURE__ */ jsxs("div", { className: "mb-3 flex items-center gap-3", children: [
      /* @__PURE__ */ jsx(WifiOff, { className: "size-5 text-orange-600" }),
      /* @__PURE__ */ jsx("h3", { className: "font-semibold text-orange-800", children: "Not Connected" })
    ] }),
    /* @__PURE__ */ jsxs("div", { className: "space-y-3 text-orange-700 text-sm", children: [
      /* @__PURE__ */ jsx("p", { children: "The stagewise toolbar isn't connected to any IDE window." }),
      discoveryError && /* @__PURE__ */ jsxs("div", { className: "rounded border border-red-200 bg-red-100 p-2 text-red-700", children: [
        /* @__PURE__ */ jsx("strong", { children: "Error:" }),
        " ",
        discoveryError
      ] }),
      /* @__PURE__ */ jsxs("div", { className: "space-y-2", children: [
        /* @__PURE__ */ jsx("p", { className: "font-medium", children: "To connect:" }),
        /* @__PURE__ */ jsxs("ol", { className: "list-inside list-decimal space-y-1 pl-2 text-xs", children: [
          /* @__PURE__ */ jsx("li", { children: "Open your IDE (Cursor, Windsurf, etc.)" }),
          /* @__PURE__ */ jsx("li", { children: "Install the stagewise extension" }),
          /* @__PURE__ */ jsx("li", { children: "Make sure the extension is active" }),
          /* @__PURE__ */ jsx("li", { children: "Click refresh below" })
        ] })
      ] }),
      /* @__PURE__ */ jsxs(
        "button",
        {
          type: "button",
          onClick: discover,
          className: "flex w-full items-center justify-center gap-2 rounded-md bg-orange-600 px-3 py-2 font-medium text-sm text-white transition-colors hover:bg-orange-700",
          children: [
            /* @__PURE__ */ jsx(RefreshCw, { className: "size-4" }),
            "Retry Connection"
          ]
        }
      ),
      /* @__PURE__ */ jsx("div", { className: "border-orange-200 border-t pt-2", children: /* @__PURE__ */ jsx(
        "a",
        {
          href: "https://marketplace.visualstudio.com/items?itemName=stagewise.stagewise-vscode-extension",
          target: "_blank",
          rel: "noopener noreferrer",
          className: "text-orange-600 text-xs hover:text-orange-800 hover:underline",
          children: "Get VS Code Extension →"
        }
      ) })
    ] })
  ] });
}
function ConnectingStatePanel() {
  return /* @__PURE__ */ jsxs("div", { className: "rounded-lg border border-blue-200 bg-blue-50/90 p-4 shadow-lg backdrop-blur", children: [
    /* @__PURE__ */ jsxs("div", { className: "mb-3 flex items-center gap-3", children: [
      /* @__PURE__ */ jsx(RefreshCw, { className: "size-5 animate-spin text-blue-600" }),
      /* @__PURE__ */ jsx("h3", { className: "font-semibold text-blue-800", children: "Connecting..." })
    ] }),
    /* @__PURE__ */ jsx("div", { className: "text-blue-700 text-sm", children: /* @__PURE__ */ jsxs("p", { children: [
      "Looking for active agent instances...",
      /* @__PURE__ */ jsx("br", {}),
      /* @__PURE__ */ jsx("span", { className: "text-blue-500 text-xs", children: "VS Code, Cursor, Windsurf ..." })
    ] }) })
  ] });
}
function WindowSelectionPanel() {
  const {
    windows,
    isDiscovering,
    discoveryError,
    discover,
    selectedSession,
    selectSession,
    appName
  } = useVSCode(), handleSessionChange = (e2) => {
    const target = e2.target, selectedSessionId = target.value === "" ? void 0 : target.value;
    selectSession(selectedSessionId);
  }, handleRefresh = () => {
    discover();
  };
  return /* @__PURE__ */ jsxs("div", { className: "rounded-lg border border-blue-200 bg-blue-50/90 p-4 shadow-lg backdrop-blur", children: [
    /* @__PURE__ */ jsx("div", { className: "mb-3", children: /* @__PURE__ */ jsx("h3", { className: "font-semibold text-blue-800", children: "Select IDE Window" }) }),
    /* @__PURE__ */ jsxs("div", { className: "space-y-3", children: [
      /* @__PURE__ */ jsxs("div", { children: [
        /* @__PURE__ */ jsxs(
          "label",
          {
            htmlFor: "window-selection-select",
            className: "mb-2 block font-medium text-blue-700 text-sm",
            children: [
              "IDE Window ",
              appName && \`(\${appName})\`
            ]
          }
        ),
        /* @__PURE__ */ jsxs("div", { className: "flex w-full items-center space-x-2", children: [
          /* @__PURE__ */ jsxs(
            "select",
            {
              id: "window-selection-select",
              value: (selectedSession == null ? void 0 : selectedSession.sessionId) || "",
              onChange: handleSessionChange,
              className: "h-8 min-w-0 flex-1 rounded-lg border border-blue-300 bg-white/80 px-3 text-sm backdrop-saturate-150 focus:border-blue-500 focus:outline-none",
              disabled: isDiscovering,
              children: [
                /* @__PURE__ */ jsx("option", { value: "", disabled: !0, children: windows.length > 0 ? "Select an IDE window..." : "No windows available" }),
                windows.map((window2) => /* @__PURE__ */ jsxs("option", { value: window2.sessionId, children: [
                  window2.displayName,
                  " - Port ",
                  window2.port
                ] }, window2.sessionId))
              ]
            }
          ),
          /* @__PURE__ */ jsx(
            "button",
            {
              type: "button",
              onClick: handleRefresh,
              disabled: isDiscovering,
              className: "flex h-8 w-8 flex-shrink-0 items-center justify-center rounded-lg bg-blue-100/80 backdrop-saturate-150 transition-colors hover:bg-blue-200/80 disabled:opacity-50",
              title: "Refresh window list",
              children: /* @__PURE__ */ jsx(
                RefreshCw,
                {
                  className: \`size-4 text-blue-600 \${isDiscovering ? "animate-spin" : ""}\`
                }
              )
            }
          )
        ] }),
        discoveryError && /* @__PURE__ */ jsxs("p", { className: "mt-1 text-red-600 text-sm", children: [
          "Error discovering windows: ",
          discoveryError
        ] }),
        !isDiscovering && windows.length === 0 && !discoveryError && /* @__PURE__ */ jsx("p", { className: "mt-1 text-blue-600 text-sm", children: "No IDE windows found. Make sure the Stagewise extension is installed and running." })
      ] }),
      selectedSession && /* @__PURE__ */ jsxs("div", { className: "rounded-lg bg-blue-100/80 p-3", children: [
        /* @__PURE__ */ jsxs("p", { className: "text-blue-800 text-sm", children: [
          /* @__PURE__ */ jsx("strong", { children: "Selected:" }),
          " ",
          selectedSession.displayName
        ] }),
        /* @__PURE__ */ jsxs("p", { className: "mt-1 text-blue-600 text-xs", children: [
          "Session ID: ",
          selectedSession.sessionId.substring(0, 8),
          "..."
        ] })
      ] }),
      !selectedSession && /* @__PURE__ */ jsx("div", { className: "rounded-lg border border-blue-200 bg-white/90 p-3", children: /* @__PURE__ */ jsxs("p", { className: "text-blue-800 text-sm", children: [
        /* @__PURE__ */ jsx("strong", { children: "No window selected:" }),
        " Please select an IDE window above to connect."
      ] }) })
    ] })
  ] });
}
function NormalStateButtons({
  handleButtonClick,
  pluginBox,
  setPluginBox,
  openPanel,
  setOpenPanel,
  chatState
}) {
  const pluginsWithActions = usePlugins().plugins.filter(
    (plugin) => plugin.onActionClick
  );
  return /* @__PURE__ */ jsxs(Fragment$1, { children: [
    /* @__PURE__ */ jsx(
      SettingsButton,
      {
        onOpenPanel: () => setOpenPanel(openPanel === "settings" ? null : "settings"),
        isActive: openPanel === "settings"
      }
    ),
    pluginsWithActions.length > 0 && /* @__PURE__ */ jsx(ToolbarSection, { children: pluginsWithActions.map((plugin) => /* @__PURE__ */ jsx(
      ToolbarButton,
      {
        onClick: handleButtonClick(() => {
          (pluginBox == null ? void 0 : pluginBox.pluginName) !== plugin.pluginName ? plugin.onActionClick() && setPluginBox({
            component: plugin.onActionClick(),
            pluginName: plugin.pluginName
          }) : setPluginBox(null);
        }),
        active: (pluginBox == null ? void 0 : pluginBox.pluginName) === plugin.pluginName,
        children: plugin.iconSvg ? /* @__PURE__ */ jsx("span", { className: "size-4 stroke-zinc-950 text-zinc-950 *:size-full", children: plugin.iconSvg }) : /* @__PURE__ */ jsx(Puzzle, { className: "size-4" })
      },
      plugin.pluginName
    )) }),
    /* @__PURE__ */ jsx(ToolbarSection, { children: /* @__PURE__ */ jsx(
      ToolbarButton,
      {
        onClick: handleButtonClick(
          () => chatState.isPromptCreationActive ? chatState.stopPromptCreation() : chatState.startPromptCreation()
        ),
        active: chatState.isPromptCreationActive,
        children: /* @__PURE__ */ jsx(MessageCircle, { className: "size-4 stroke-zinc-950" })
      }
    ) })
  ] });
}
function DisconnectedStateButtons() {
  const { discover, isDiscovering } = useVSCode();
  return /* @__PURE__ */ jsx(ToolbarSection, { children: /* @__PURE__ */ jsx(
    ToolbarButton,
    {
      onClick: isDiscovering ? void 0 : () => discover(),
      className: cn(
        isDiscovering ? "text-blue-700" : "text-orange-700 hover:bg-orange-200"
      ),
      children: /* @__PURE__ */ jsx(
        RefreshCw,
        {
          className: cn("size-4", isDiscovering && "animate-spin")
        }
      )
    }
  ) });
}
function ToolbarDraggableBox() {
  const provider = useContext(DraggableContext), borderLocation = provider == null ? void 0 : provider.borderLocation, isReady = !!borderLocation && borderLocation.right - borderLocation.left > 0 && borderLocation.bottom - borderLocation.top > 0, draggable = useDraggable({
    startThreshold: 10,
    initialSnapArea: "bottomRight"
  }), {
    windows,
    isDiscovering,
    discoveryError,
    discover,
    shouldPromptWindowSelection
  } = useVSCode(), isConnected = windows.length > 0, [pluginBox, setPluginBox] = useState(null), [openPanel, setOpenPanel] = useState(null), chatState = useChatState(), { minimized, minimize, expand } = useAppState();
  useEffect(() => {
    minimized && (setPluginBox(null), setOpenPanel(null));
  }, [minimized]);
  const handleButtonClick = (handler) => (e2) => {
    if (draggable.wasDragged) {
      e2.preventDefault(), e2.stopPropagation();
      return;
    }
    handler();
  };
  if (!isReady) return null;
  const isLoadingState = isDiscovering, isDisconnectedState = !isConnected && !isDiscovering, isConnectedState = isConnected, shouldShowWindowSelection = shouldPromptWindowSelection && isConnectedState, theme = isLoadingState ? {
    border: "border-blue-300",
    bg: "bg-blue-100/80",
    divideBorder: "divide-blue-200",
    buttonBg: "from-blue-600 to-sky-600",
    buttonColor: "text-blue-700"
  } : isDisconnectedState ? {
    border: "border-orange-300",
    bg: "bg-orange-100/80",
    divideBorder: "divide-orange-200",
    buttonBg: "from-orange-600 to-red-600",
    buttonColor: "text-orange-700"
  } : {
    border: "border-border/30",
    bg: "bg-zinc-50/80",
    divideBorder: "divide-border/20",
    buttonBg: "from-sky-700 to-fuchsia-700",
    buttonColor: "stroke-zinc-950"
  }, getMinimizedIcon = () => isLoadingState ? /* @__PURE__ */ jsx(RefreshCw, { className: "size-4 animate-spin text-white" }) : isDisconnectedState ? /* @__PURE__ */ jsx(WifiOff, { className: "size-4 text-white" }) : /* @__PURE__ */ jsx(Logo, { className: "size-4.5", color: "white" });
  return /* @__PURE__ */ jsxs("div", { ref: draggable.draggableRef, className: "absolute p-0.5", children: [
    /* @__PURE__ */ jsxs(
      "div",
      {
        className: cn(
          "absolute flex h-[calc(100vh-32px)] w-96 max-w-[40vw] items-stretch justify-end transition-all duration-300 ease-out",
          draggable.position.isTopHalf ? "top-0 flex-col-reverse" : "bottom-0 flex-col",
          draggable.position.isLeftHalf ? "left-[100%]" : "right-[100%]"
        ),
        children: [
          /* @__PURE__ */ jsxs(
            "div",
            {
              className: cn(
                "flex min-h-0 flex-1 origin-bottom-right flex-col items-stretch px-2 transition-all duration-300 ease-out",
                (pluginBox || openPanel === "settings" || !isConnectedState || shouldShowWindowSelection) && !minimized ? "pointer-events-auto scale-100 opacity-100 blur-none" : "pointer-events-none h-0 scale-50 opacity-0 blur-md",
                draggable.position.isTopHalf ? "justify-start" : "justify-end",
                draggable.position.isTopHalf ? draggable.position.isLeftHalf ? "origin-top-left" : "origin-top-right" : draggable.position.isLeftHalf ? "origin-bottom-left" : "origin-bottom-right"
              ),
              children: [
                isLoadingState && /* @__PURE__ */ jsx(ConnectingStatePanel, {}),
                isDisconnectedState && /* @__PURE__ */ jsx(
                  DisconnectedStatePanel,
                  {
                    discover,
                    discoveryError
                  }
                ),
                shouldShowWindowSelection && /* @__PURE__ */ jsx(WindowSelectionPanel, {}),
                isConnectedState && openPanel === "settings" && !shouldShowWindowSelection && /* @__PURE__ */ jsx(SettingsPanel, {}),
                isConnectedState && !shouldShowWindowSelection && (pluginBox == null ? void 0 : pluginBox.component)
              ]
            }
          ),
          isConnectedState && /* @__PURE__ */ jsx(
            "div",
            {
              className: cn(
                "z-20 w-full px-2 transition-all duration-300 ease-out",
                chatState.isPromptCreationActive && !minimized ? "pointer-events-auto scale-100 opacity-100 blur-none" : "pointer-events-none h-0 scale-50 opacity-0 blur-md",
                draggable.position.isTopHalf ? "mb-2" : "mt-2",
                draggable.position.isTopHalf ? draggable.position.isLeftHalf ? "origin-top-left" : "origin-top-right" : draggable.position.isLeftHalf ? "origin-bottom-left" : "origin-bottom-right"
              ),
              children: /* @__PURE__ */ jsx(ToolbarChatArea, {})
            }
          )
        ]
      }
    ),
    /* @__PURE__ */ jsxs(
      "div",
      {
        ref: draggable.handleRef,
        className: cn(
          "pointer-events-auto z-50 rounded-full border px-0.5 shadow-md backdrop-blur transition-all duration-300 ease-out",
          theme.border,
          theme.bg,
          draggable.position.isTopHalf ? "flex-col-reverse divide-y-reverse" : "flex-col",
          minimized ? "h-9.5 w-9.5" : "h-[calc-size(auto,size)] h-auto w-auto"
        ),
        children: [
          /* @__PURE__ */ jsx(
            H$1,
            {
              onClick: () => expand(),
              className: cn(
                "absolute right-0 left-0 z-50 flex size-9 origin-center cursor-pointer items-center justify-center rounded-full bg-gradient-to-tr transition-all duration-300 ease-out",
                theme.buttonBg,
                minimized ? "pointer-events-auto scale-100 opacity-100 blur-none" : "pointer-events-none scale-25 opacity-0 blur-md",
                draggable.position.isTopHalf ? "top-0" : "bottom-0"
              ),
              children: getMinimizedIcon()
            }
          ),
          /* @__PURE__ */ jsxs(
            "div",
            {
              className: cn(
                "flex h-[calc-size(auto)] scale-100 items-center justify-center divide-y transition-all duration-300 ease-out",
                theme.divideBorder,
                draggable.position.isTopHalf ? "origin-top flex-col-reverse divide-y-reverse" : "origin-bottom flex-col",
                minimized && "pointer-events-none h-0 scale-50 opacity-0 blur-md"
              ),
              children: [
                isConnectedState ? /* @__PURE__ */ jsx(
                  NormalStateButtons,
                  {
                    handleButtonClick,
                    pluginBox,
                    setPluginBox,
                    openPanel,
                    setOpenPanel,
                    chatState
                  }
                ) : /* @__PURE__ */ jsx(DisconnectedStateButtons, {}),
                /* @__PURE__ */ jsx(ToolbarSection, { children: /* @__PURE__ */ jsx(
                  ToolbarButton,
                  {
                    onClick: handleButtonClick(() => minimize()),
                    className: cn(
                      "h-5",
                      theme.buttonColor,
                      draggable.position.isTopHalf ? "rounded-t-3xl rounded-b-lg" : "rounded-t-lg rounded-b-3xl"
                    ),
                    children: draggable.position.isTopHalf ? /* @__PURE__ */ jsx(ChevronUp, { className: "size-4" }) : /* @__PURE__ */ jsx(ChevronDown, { className: "size-4" })
                  }
                ) })
              ]
            }
          )
        ]
      }
    )
  ] });
}
function ToolbarArea() {
  const containerRef = useRef(null);
  return /* @__PURE__ */ jsx("div", { className: "absolute size-full", children: /* @__PURE__ */ jsx("div", { className: "absolute inset-4", ref: containerRef, children: /* @__PURE__ */ jsx(
    DraggableProvider,
    {
      containerRef,
      snapAreas: {
        topLeft: !0,
        topRight: !0,
        bottomLeft: !0,
        bottomRight: !0,
        topCenter: !0,
        bottomCenter: !0
      },
      children: /* @__PURE__ */ jsx(ToolbarDraggableBox, {})
    }
  ) }) });
}
function ElementSelector(props) {
  const lastHoveredElement = useRef(null), handleMouseMove = useCallback(
    (event) => {
      if (event.target.closest(".companion")) return;
      const refElement = getElementAtPoint(event.clientX, event.clientY);
      props.ignoreList.includes(refElement) || lastHoveredElement.current !== refElement && (lastHoveredElement.current = refElement, props.onElementHovered(refElement));
    },
    [props]
  ), handleMouseLeave = useCallback(() => {
    lastHoveredElement.current = null, props.onElementUnhovered();
  }, [props]), handleMouseClick = useCallback(
    (event) => {
      event.preventDefault(), event.stopPropagation(), lastHoveredElement.current && (props.ignoreList.includes(lastHoveredElement.current) || props.onElementSelected(lastHoveredElement.current));
    },
    [props]
  );
  return /* @__PURE__ */ jsx(
    "div",
    {
      className: "pointer-events-auto fixed inset-0 h-screen w-screen cursor-copy",
      onMouseMove: handleMouseMove,
      onMouseLeave: handleMouseLeave,
      onClick: handleMouseClick,
      role: "button",
      tabIndex: 0
    }
  );
}
function useWindowSize() {
  const [size, setSize] = useState({
    width: window.innerWidth,
    height: window.innerHeight
  }), handleResize = useCallback(
    () => setSize({
      width: window.innerWidth,
      height: window.innerHeight
    }),
    []
  );
  return useEventListener("resize", handleResize), size;
}
function useCyclicUpdate(func, frameRate) {
  const animationFrameHandle = useRef(void 0), timeBetweenFrames = useMemo(
    () => 1e3 / frameRate,
    [frameRate]
  ), lastCallFrameTime = useRef(0), update = useCallback(
    (frameTime) => {
      frameTime - lastCallFrameTime.current >= timeBetweenFrames && (func(), lastCallFrameTime.current = frameTime), animationFrameHandle.current = requestAnimationFrame(update);
    },
    [func, timeBetweenFrames]
  );
  useEffect(() => (animationFrameHandle.current = requestAnimationFrame(update), () => {
    animationFrameHandle.current && (cancelAnimationFrame(animationFrameHandle.current), animationFrameHandle.current = void 0);
  }), [frameRate, update]);
}
function ContextItemProposal({
  refElement,
  ...props
}) {
  const boxRef = useRef(null), windowSize = useWindowSize(), { plugins } = usePlugins(), hoveredElementPluginContext = useMemo(() => refElement ? plugins.filter(
    (plugin) => plugin.onContextElementSelect
  ).map((plugin) => {
    var _a;
    return {
      pluginName: plugin.pluginName,
      context: (_a = plugin.onContextElementSelect) == null ? void 0 : _a.call(plugin, refElement)
    };
  }) : [], [refElement]), updateBoxPosition = useCallback(() => {
    if (boxRef.current)
      if (refElement) {
        const referenceRect = refElement.getBoundingClientRect();
        boxRef.current.style.top = \`\${referenceRect.top - 2}px\`, boxRef.current.style.left = \`\${referenceRect.left - 2}px\`, boxRef.current.style.width = \`\${referenceRect.width + 4}px\`, boxRef.current.style.height = \`\${referenceRect.height + 4}px\`, boxRef.current.style.display = void 0;
      } else
        boxRef.current.style.height = "0px", boxRef.current.style.width = "0px", boxRef.current.style.top = \`\${windowSize.height / 2}px\`, boxRef.current.style.left = \`\${windowSize.width / 2}px\`, boxRef.current.style.display = "none";
  }, [refElement, windowSize.height, windowSize.width]);
  return useCyclicUpdate(updateBoxPosition, 30), /* @__PURE__ */ jsxs(
    "div",
    {
      ...props,
      className: "fixed flex items-center justify-center rounded-lg border-2 border-blue-600/80 bg-blue-600/20 text-white transition-all duration-100",
      style: { zIndex: 1e3 },
      ref: boxRef,
      children: [
        /* @__PURE__ */ jsxs("div", { className: "absolute top-0.5 left-0.5 flex w-full flex-row items-start justify-start gap-1", children: [
          /* @__PURE__ */ jsx("div", { className: "flex flex-row items-center justify-center gap-0.5 overflow-hidden rounded-md bg-zinc-700/80 px-1 py-0 font-medium text-white text-xs", children: /* @__PURE__ */ jsx("span", { className: "truncate", children: refElement.tagName.toLowerCase() }) }),
          hoveredElementPluginContext.filter((plugin) => plugin.context.annotation).map((plugin) => {
            var _a;
            return /* @__PURE__ */ jsxs("div", { className: "flex flex-row items-center justify-center gap-0.5 overflow-hidden rounded-md bg-zinc-700/80 px-1 py-0 font-medium text-white text-xs", children: [
              /* @__PURE__ */ jsx("span", { className: "size-3 shrink-0 stroke-white text-white *:size-full", children: (_a = plugins.find((p2) => p2.pluginName === plugin.pluginName)) == null ? void 0 : _a.iconSvg }),
              /* @__PURE__ */ jsx("span", { className: "truncate", children: plugin.context.annotation })
            ] });
          })
        ] }),
        /* @__PURE__ */ jsx(Plus, { className: "size-6 drop-shadow-black drop-shadow-md" })
      ]
    }
  );
}
function ContextItem({
  refElement,
  pluginContext,
  ...props
}) {
  const boxRef = useRef(null), windowSize = useWindowSize(), updateBoxPosition = useCallback(() => {
    if (boxRef.current)
      if (refElement) {
        const referenceRect = refElement.getBoundingClientRect();
        boxRef.current.style.top = \`\${referenceRect.top}px\`, boxRef.current.style.left = \`\${referenceRect.left}px\`, boxRef.current.style.width = \`\${referenceRect.width}px\`, boxRef.current.style.height = \`\${referenceRect.height}px\`, boxRef.current.style.display = void 0;
      } else
        boxRef.current.style.height = "0px", boxRef.current.style.width = "0px", boxRef.current.style.top = \`\${windowSize.height / 2}px\`, boxRef.current.style.left = \`\${windowSize.width / 2}px\`, boxRef.current.style.display = "none";
  }, [refElement, windowSize.height, windowSize.width]);
  useCyclicUpdate(updateBoxPosition, 30);
  const chatState = useChatState(), handleDeleteClick = useCallback(() => {
    chatState.removeChatDomContext(chatState.currentChatId, refElement);
  }, [chatState, refElement]), { plugins } = usePlugins();
  return /* @__PURE__ */ jsxs(
    "div",
    {
      ...props,
      className: "pointer-events-auto fixed flex cursor-pointer items-center justify-center rounded-lg border-2 border-green-600/80 bg-green-600/5 text-transparent transition-all duration-0 hover:border-red-600/80 hover:bg-red-600/20 hover:text-white",
      ref: boxRef,
      onClick: handleDeleteClick,
      role: "button",
      tabIndex: 0,
      children: [
        /* @__PURE__ */ jsxs("div", { className: "absolute top-0.5 left-0.5 flex w-full flex-row items-start justify-start gap-1", children: [
          /* @__PURE__ */ jsx("div", { className: "flex flex-row items-center justify-center gap-0.5 overflow-hidden rounded-md bg-zinc-700/80 px-1 py-0 font-medium text-white text-xs", children: /* @__PURE__ */ jsx("span", { className: "truncate", children: refElement.tagName.toLowerCase() }) }),
          pluginContext.filter((plugin) => plugin.context.annotation).map((plugin) => {
            var _a;
            return /* @__PURE__ */ jsxs("div", { className: "flex flex-row items-center justify-center gap-0.5 overflow-hidden rounded-md bg-zinc-700/80 px-1 py-0 font-medium text-white text-xs", children: [
              /* @__PURE__ */ jsx("span", { className: "size-3 shrink-0 stroke-white text-white *:size-full", children: (_a = plugins.find((p2) => p2.pluginName === plugin.pluginName)) == null ? void 0 : _a.iconSvg }),
              /* @__PURE__ */ jsx("span", { className: "truncate", children: plugin.context.annotation })
            ] });
          })
        ] }),
        /* @__PURE__ */ jsx(Trash2, { className: "size-6 drop-shadow-black drop-shadow-md" })
      ]
    }
  );
}
function SelectorCanvas() {
  const {
    chats,
    currentChatId,
    addChatDomContext,
    isPromptCreationActive,
    promptState
  } = useChatState(), currentChat = useMemo(
    () => chats.find((chat) => chat.id === currentChatId),
    [currentChatId, chats]
  ), shouldShow = isPromptCreationActive && promptState !== "loading", contextElements = useMemo(() => (currentChat == null ? void 0 : currentChat.domContextElements) || [], [currentChat]), [hoveredElement, setHoveredElement] = useState(
    null
  ), addElementToContext = useCallback(
    (el) => {
      addChatDomContext(currentChatId, el);
    },
    [addChatDomContext, currentChatId]
  );
  return shouldShow ? /* @__PURE__ */ jsxs(Fragment$1, { children: [
    hoveredElement && /* @__PURE__ */ jsx(ContextItemProposal, { refElement: hoveredElement }),
    /* @__PURE__ */ jsx(
      ElementSelector,
      {
        ignoreList: contextElements.map((el) => el.element),
        onElementHovered: setHoveredElement,
        onElementSelected: addElementToContext,
        onElementUnhovered: () => setHoveredElement(null)
      }
    ),
    contextElements.map((el) => /* @__PURE__ */ jsx(ContextItem, { refElement: el.element, pluginContext: el.pluginContext }))
  ] }) : null;
}
function DesktopLayout() {
  return /* @__PURE__ */ jsxs("div", { className: cn("fixed inset-0 h-screen w-screen"), children: [
    /* @__PURE__ */ jsx(SelectorCanvas, {}),
    /* @__PURE__ */ jsx(ToolbarArea, {})
  ] });
}
function MainAppBlocker() {
  const { isMainAppBlocked } = useAppState();
  return /* @__PURE__ */ jsx(
    "div",
    {
      className: cn(
        "fixed inset-0 h-screen w-screen",
        isMainAppBlocked ? "pointer-events-auto" : "pointer-events-none"
      ),
      role: "button",
      tabIndex: 0
    }
  );
}
function App(config2) {
  return /* @__PURE__ */ jsxs(AppStateProvider, { children: [
    /* @__PURE__ */ jsx(MainAppBlocker, {}),
    /* @__PURE__ */ jsxs(ContextProviders, { config: config2, children: [
      /* @__PURE__ */ jsx(HotkeyListener, {}),
      /* @__PURE__ */ jsx(DesktopLayout, {})
    ] })
  ] });
}
const styleNode = document.createElement("style");
styleNode.textContent = appStyle;
document.head.appendChild(styleNode);
createRoot(document.body).render(
  createElement(StrictMode, null, createElement(App, config))
);
`,"plugin-ui.js":`import { j as clsx, c as cn, b as usePlugins } from "panel-BpInY05d.js";
import { d, f, k, e } from "panel-BpInY05d.js";
import { jsx } from "react/jsx-runtime";
const falsyToString = (value) => typeof value == "boolean" ? \`\${value}\` : value === 0 ? "0" : value, cx = clsx, cva = (base, config) => (props) => {
  var _config_compoundVariants;
  if ((config == null ? void 0 : config.variants) == null) return cx(base, props == null ? void 0 : props.class, props == null ? void 0 : props.className);
  const { variants, defaultVariants } = config, getVariantClassNames = Object.keys(variants).map((variant) => {
    const variantProp = props == null ? void 0 : props[variant], defaultVariantProp = defaultVariants == null ? void 0 : defaultVariants[variant];
    if (variantProp === null) return null;
    const variantKey = falsyToString(variantProp) || falsyToString(defaultVariantProp);
    return variants[variant][variantKey];
  }), propsWithoutUndefined = props && Object.entries(props).reduce((acc, param) => {
    let [key, value] = param;
    return value === void 0 || (acc[key] = value), acc;
  }, {}), getCompoundVariantClassNames = config == null || (_config_compoundVariants = config.compoundVariants) === null || _config_compoundVariants === void 0 ? void 0 : _config_compoundVariants.reduce((acc, param) => {
    let { class: cvClass, className: cvClassName, ...compoundVariantOptions } = param;
    return Object.entries(compoundVariantOptions).every((param2) => {
      let [key, value] = param2;
      return Array.isArray(value) ? value.includes({
        ...defaultVariants,
        ...propsWithoutUndefined
      }[key]) : {
        ...defaultVariants,
        ...propsWithoutUndefined
      }[key] === value;
    }) ? [
      ...acc,
      cvClass,
      cvClassName
    ] : acc;
  }, []);
  return cx(base, getVariantClassNames, getCompoundVariantClassNames, props == null ? void 0 : props.class, props == null ? void 0 : props.className);
}, badgeVariants = cva("rounded-md p-2", {
  variants: {
    color: {
      blue: "",
      green: "",
      red: "",
      yellow: "",
      purple: "",
      orange: "",
      pink: ""
    },
    style: {
      default: "text-white",
      outline: "border text-zinc-950"
    }
  },
  compoundVariants: [
    {
      style: "default",
      color: "blue",
      className: "bg-blue-500"
    },
    {
      style: "default",
      color: "green",
      className: "bg-green-500"
    },
    {
      style: "default",
      color: "red",
      className: "bg-red-500"
    },
    {
      style: "default",
      color: "yellow",
      className: "bg-yellow-500"
    },
    {
      style: "default",
      color: "purple",
      className: "bg-purple-500"
    },
    {
      style: "default",
      color: "orange",
      className: "bg-orange-500"
    },
    {
      style: "default",
      color: "pink",
      className: "bg-pink-500"
    },
    {
      style: "outline",
      color: "blue",
      className: "border-blue-500"
    },
    {
      style: "outline",
      color: "green",
      className: "border-green-500"
    },
    {
      style: "outline",
      color: "red",
      className: "border-red-500"
    },
    {
      style: "outline",
      color: "yellow",
      className: "border-yellow-500"
    },
    {
      style: "outline",
      color: "purple",
      className: "border-purple-500"
    },
    {
      style: "outline",
      color: "orange",
      className: "border-orange-500"
    },
    {
      style: "outline",
      color: "pink",
      className: "border-pink-500"
    }
  ],
  defaultVariants: {
    color: "blue",
    style: "default"
  }
});
function Badge({ children, color, style, className }) {
  return /* @__PURE__ */ jsx("span", { className: cn(badgeVariants({ color, style }), className), children });
}
function Button({
  children,
  variant = "primary",
  size = "md",
  asChild,
  ...props
}) {
  return asChild ? /* @__PURE__ */ jsx("button", { ...props, className: "cursor-pointer", children }) : /* @__PURE__ */ jsx(
    "button",
    {
      ...props,
      className: cn(
        "flex h-12 cursor-pointer items-center justify-center rounded-lg px-4 py-2 font-medium text-sm text-white",
        size === "sm" && "h-8",
        size === "md" && "h-12",
        size === "lg" && "h-16",
        variant === "primary" && "bg-blue-600",
        variant === "secondary" && "bg-zinc-500/40",
        variant === "outline" && "border border-zinc-500 bg-white text-blue-500",
        variant === "ghost" && "bg-transparent text-blue-500"
      ),
      type: "submit",
      children
    }
  );
}
const useToolbar = () => usePlugins().toolbarContext;
export {
  Badge,
  Button,
  d as Panel,
  f as PanelContent,
  k as PanelFooter,
  e as PanelHeader,
  useToolbar
};
`};function MC(e={}){if(!(typeof window<"u")){console.warn("Stagewise Toolbar is not supported in non-browser environments.");return}if(document.querySelector("stagewise-toolbar")){console.warn("Stagewise Toolbar is already loaded - aborting init.");return}const r=document.createElement("stagewise-toolbar");r.style.display="block",r.style.position="fixed",r.style.top="0",r.style.left="0",r.style.right="0",r.style.bottom="0",r.style.width="100vw",r.style.height="100vh",r.style.zIndex="2147483647",r.style.pointerEvents="none";const s=document.createElement("iframe");s.style.display="block",s.style.border="none",s.style.overflow="hidden",s.style.margin="0",s.style.padding="0",s.style.width="100vw",s.style.height="100vh",s.style.backgroundColor="transparent",s.style.pointerEvents="none",s.style.colorScheme="normal",s.sandbox.add("allow-same-origin"),s.sandbox.add("allow-scripts"),s.sandbox.add("allow-presentation"),s.sandbox.add("allow-pointer-lock"),s.setAttribute("allowtransparency","true"),s.srcdoc='<!DOCTYPE html><html><head><meta charset="UTF-8"><meta name="viewport" content="width=device-width, initial-scale=1.0"><link rel="preconnect" href="https://rsms.me/"><link rel="stylesheet" href="https://rsms.me/inter/inter.css"></head><body style="pointer-events: none;"></body></html>',s.addEventListener("load",()=>{let i=!1;const o=b=>{const w=s.contentDocument.elementFromPoint(b.clientX,b.clientY),j=w&&w!==document.body&&w.tagName!=="HTML";j!==i&&(s.style.pointerEvents=j?"auto":"none",i=j)};window.addEventListener("mousemove",o,{capture:!0}),s.contentWindow.addEventListener("mousemove",o,{capture:!0});const c="",d=Object.fromEntries(Object.entries(IC).map(([b,w])=>[b,URL.createObjectURL(new Blob([w],{type:"text/javascript"}))]));if(d["@stagewise/toolbar/plugin-ui"]=URL.createObjectURL(new Blob(["export * from 'plugin-ui.js'"],{type:"text/javascript"})),e.plugins)for(const[b,w]of e.plugins.entries()){const j=URL.createObjectURL(new Blob([w.mainPlugin],{type:"text/javascript"}));d[`plugin-entry-${b}`]=j}const p=URL.createObjectURL(new Blob([OC(e)],{type:"text/javascript"}));d["@stagewise/toolbar/config"]=p;const h={react:`https://esm.sh/react@19.1.0${c}`,"react-dom":`https://esm.sh/react-dom@19.1.0${c}`,"react-dom/client":`https://esm.sh/react-dom@19.1.0/client${c}`,"react/jsx-runtime":`https://esm.sh/react@19.1.0/jsx-runtime${c}`,...d},g=s.contentDocument.createElement("script");g.type="importmap",g.textContent=`{"imports":${JSON.stringify(h)}}`,s.contentDocument.head.appendChild(g);const v=s.contentDocument.createElement("script");v.type="module",v.textContent="import('index.js');",s.contentDocument.head.appendChild(v)}),r.appendChild(s),document.body.appendChild(r)}function OC(e){var r,s;const i=((r=e.plugins)==null?void 0:r.map((p,h)=>`import plugin${h} from 'plugin-entry-${h}'`).join(`
`))??"",o=`[${((s=e.plugins)==null?void 0:s.map((p,h)=>`plugin${h}`).join(","))??""}]`,c={...e,plugins:"__PLUGIN_PLACEHOLDER__"};let d=JSON.stringify(c);return d=d.replace('"__PLUGIN_PLACEHOLDER__"',o),`${i}

const config = ${d};

export default config;
`}function LC({config:e,enabled:r=!1}){const s=O.useRef(!1);return O.useEffect(()=>{s.current||!r||(s.current=!0,MC(e))},[e,r]),null}const ul={"zh-TW":{"home.greeting":"你好，我是 ","home.subtitle":"專業的軟體開發工程師，專精於 React.js、Node.js 和雲端技術","home.description":"我致力於創造優秀的數位體驗，結合創新技術與用戶需求，為企業提供高品質的軟體解決方案。","home.viewProjects":"查看作品","home.contactMe":"聯絡我","about.title":"關於我","about.subtitle":"了解更多關於我的背景和專業經驗","projects.title":"專案作品","projects.subtitle":"精選專案與技術實踐","contact.title":"聯絡我","contact.subtitle":"歡迎透過下列表單與我聯繫！","contact.infoTitle":"聯絡資訊","contact.infoDesc":"您可以填寫表單或直接來信/社群聯絡我。","contact.formTitle":"聯絡表單","contact.name":"姓名","contact.email":"電子郵件","contact.message":"訊息內容","contact.send":"送出","contact.sending":"送出中...","contact.nameMin":"姓名至少2個字元","contact.emailInvalid":"請輸入有效的電子郵件","contact.messageMin":"訊息至少10個字元","contact.phone":"電話"},"en-US":{"home.greeting":"Hello, I am ","home.subtitle":"Professional software engineer specializing in React.js, Node.js, and cloud technologies","home.description":"I am dedicated to creating excellent digital experiences, combining innovative technology and user needs to deliver high-quality software solutions for enterprises.","home.viewProjects":"View Projects","home.contactMe":"Contact Me","about.title":"About Me","about.subtitle":"Learn more about my background and professional experience","projects.title":"Projects","projects.subtitle":"Selected projects and technical practices","contact.title":"Contact","contact.subtitle":"Feel free to reach out via the form below!","contact.infoTitle":"Contact Info","contact.infoDesc":"You can fill out the form or contact me directly via email/social.","contact.formTitle":"Contact Form","contact.name":"Name","contact.email":"Email","contact.message":"Message","contact.send":"Send","contact.sending":"Sending...","contact.nameMin":"Name must be at least 2 characters","contact.emailInvalid":"Please enter a valid email address","contact.messageMin":"Message must be at least 10 characters","contact.phone":"Phone"},"ja-JP":{"home.greeting":"こんにちは、私は","home.subtitle":"React.js、Node.js、クラウド技術に特化したソフトウェアエンジニア","home.description":"革新的な技術とユーザーのニーズを組み合わせ、企業向けに高品質なソフトウェアソリューションを提供します。","home.viewProjects":"プロジェクトを見る","home.contactMe":"お問い合わせ","about.title":"私について","about.subtitle":"私の経歴と専門経験について詳しく知る","projects.title":"プロジェクト","projects.subtitle":"厳選されたプロジェクトと技術実践","contact.title":"お問い合わせ","contact.subtitle":"下記のフォームからお気軽にご連絡ください！","contact.infoTitle":"連絡先情報","contact.infoDesc":"フォームまたはメール/ソーシャルで直接ご連絡いただけます。","contact.formTitle":"お問い合わせフォーム","contact.name":"お名前","contact.email":"メールアドレス","contact.message":"メッセージ","contact.send":"送信","contact.sending":"送信中...","contact.nameMin":"お名前は2文字以上で入力してください","contact.emailInvalid":"有効なメールアドレスを入力してください","contact.messageMin":"メッセージは10文字以上で入力してください","contact.phone":"電話"}};function jC(){const e=localStorage.getItem("locale");if(e&&ul[e])return e;const r=navigator.language;if(ul[r])return r;const s=r.split("-")[0];return Object.keys(ul).find(o=>o.startsWith(s))||"zh-TW"}const cg=jC(),DC=fg.createRoot(document.getElementById("root"));DC.render(y.jsx(Vt.StrictMode,{children:Vt.createElement(r1,{locale:cg,messages:ul[cg],defaultLocale:"zh-TW"},y.jsx(NC,{}))}));const FC={plugins:[]};document.addEventListener("DOMContentLoaded",()=>{const e=document.createElement("div");e.id="stagewise-toolbar-root",document.body.appendChild(e),fg.createRoot(e).render(y.jsx(Vt.StrictMode,{children:y.jsx(LC,{config:FC})}))});
