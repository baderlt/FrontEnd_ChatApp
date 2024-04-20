import{q as Ge,t as Xe,J as xe,v as ne,h as H,b as F,K as Te,r as Qe,w as Ze,_ as Ye,j as W,c as et,x as tt}from"./index-94532d36.js";function rt(e){return Ge("MuiCircularProgress",e)}Xe("MuiCircularProgress",["root","determinate","indeterminate","colorPrimary","colorSecondary","svg","circle","circleDeterminate","circleIndeterminate","circleDisableShrink"]);const nt=["className","color","disableShrink","size","style","thickness","value","variant"];let q=e=>e,ue,fe,de,pe;const P=44,st=xe(ue||(ue=q`
  0% {
    transform: rotate(0deg);
  }

  100% {
    transform: rotate(360deg);
  }
`)),ot=xe(fe||(fe=q`
  0% {
    stroke-dasharray: 1px, 200px;
    stroke-dashoffset: 0;
  }

  50% {
    stroke-dasharray: 100px, 200px;
    stroke-dashoffset: -15px;
  }

  100% {
    stroke-dasharray: 100px, 200px;
    stroke-dashoffset: -125px;
  }
`)),it=e=>{const{classes:t,variant:r,color:n,disableShrink:s}=e,o={root:["root",r,`color${H(n)}`],svg:["svg"],circle:["circle",`circle${H(r)}`,s&&"circleDisableShrink"]};return tt(o,rt,t)},at=ne("span",{name:"MuiCircularProgress",slot:"Root",overridesResolver:(e,t)=>{const{ownerState:r}=e;return[t.root,t[r.variant],t[`color${H(r.color)}`]]}})(({ownerState:e,theme:t})=>F({display:"inline-block"},e.variant==="determinate"&&{transition:t.transitions.create("transform")},e.color!=="inherit"&&{color:(t.vars||t).palette[e.color].main}),({ownerState:e})=>e.variant==="indeterminate"&&Te(de||(de=q`
      animation: ${0} 1.4s linear infinite;
    `),st)),ct=ne("svg",{name:"MuiCircularProgress",slot:"Svg",overridesResolver:(e,t)=>t.svg})({display:"block"}),lt=ne("circle",{name:"MuiCircularProgress",slot:"Circle",overridesResolver:(e,t)=>{const{ownerState:r}=e;return[t.circle,t[`circle${H(r.variant)}`],r.disableShrink&&t.circleDisableShrink]}})(({ownerState:e,theme:t})=>F({stroke:"currentColor"},e.variant==="determinate"&&{transition:t.transitions.create("stroke-dashoffset")},e.variant==="indeterminate"&&{strokeDasharray:"80px, 200px",strokeDashoffset:0}),({ownerState:e})=>e.variant==="indeterminate"&&!e.disableShrink&&Te(pe||(pe=q`
      animation: ${0} 1.4s ease-in-out infinite;
    `),ot)),ut=Qe.forwardRef(function(t,r){const n=Ze({props:t,name:"MuiCircularProgress"}),{className:s,color:o="primary",disableShrink:i=!1,size:c=40,style:h,thickness:p=3.6,value:u=0,variant:l="indeterminate"}=n,y=Ye(n,nt),S=F({},n,{color:o,disableShrink:i,size:c,thickness:p,value:u,variant:l}),f=it(S),d={},b={},E={};if(l==="determinate"){const O=2*Math.PI*((P-p)/2);d.strokeDasharray=O.toFixed(3),E["aria-valuenow"]=Math.round(u),d.strokeDashoffset=`${((100-u)/100*O).toFixed(3)}px`,b.transform="rotate(-90deg)"}return W.jsx(at,F({className:et(f.root,s),style:F({width:c,height:c},b,h),ownerState:S,ref:r,role:"progressbar"},E,y,{children:W.jsx(ct,{className:f.svg,ownerState:S,viewBox:`${P/2} ${P/2} ${P} ${P}`,children:W.jsx(lt,{className:f.circle,style:d,ownerState:S,cx:P,cy:P,r:(P-p)/2,fill:"none",strokeWidth:p})})}))}),Nr=ut;function Pe(e,t){return function(){return e.apply(t,arguments)}}const{toString:ft}=Object.prototype,{getPrototypeOf:se}=Object,$=(e=>t=>{const r=ft.call(t);return e[r]||(e[r]=r.slice(8,-1).toLowerCase())})(Object.create(null)),A=e=>(e=e.toLowerCase(),t=>$(t)===e),z=e=>t=>typeof t===e,{isArray:k}=Array,D=z("undefined");function dt(e){return e!==null&&!D(e)&&e.constructor!==null&&!D(e.constructor)&&R(e.constructor.isBuffer)&&e.constructor.isBuffer(e)}const Ce=A("ArrayBuffer");function pt(e){let t;return typeof ArrayBuffer<"u"&&ArrayBuffer.isView?t=ArrayBuffer.isView(e):t=e&&e.buffer&&Ce(e.buffer),t}const ht=z("string"),R=z("function"),Ne=z("number"),v=e=>e!==null&&typeof e=="object",mt=e=>e===!0||e===!1,L=e=>{if($(e)!=="object")return!1;const t=se(e);return(t===null||t===Object.prototype||Object.getPrototypeOf(t)===null)&&!(Symbol.toStringTag in e)&&!(Symbol.iterator in e)},yt=A("Date"),bt=A("File"),wt=A("Blob"),Et=A("FileList"),St=e=>v(e)&&R(e.pipe),Rt=e=>{let t;return e&&(typeof FormData=="function"&&e instanceof FormData||R(e.append)&&((t=$(e))==="formdata"||t==="object"&&R(e.toString)&&e.toString()==="[object FormData]"))},Ot=A("URLSearchParams"),gt=e=>e.trim?e.trim():e.replace(/^[\s\uFEFF\xA0]+|[\s\uFEFF\xA0]+$/g,"");function U(e,t,{allOwnKeys:r=!1}={}){if(e===null||typeof e>"u")return;let n,s;if(typeof e!="object"&&(e=[e]),k(e))for(n=0,s=e.length;n<s;n++)t.call(null,e[n],n,e);else{const o=r?Object.getOwnPropertyNames(e):Object.keys(e),i=o.length;let c;for(n=0;n<i;n++)c=o[n],t.call(null,e[c],c,e)}}function ke(e,t){t=t.toLowerCase();const r=Object.keys(e);let n=r.length,s;for(;n-- >0;)if(s=r[n],t===s.toLowerCase())return s;return null}const _e=(()=>typeof globalThis<"u"?globalThis:typeof self<"u"?self:typeof window<"u"?window:global)(),Fe=e=>!D(e)&&e!==_e;function Z(){const{caseless:e}=Fe(this)&&this||{},t={},r=(n,s)=>{const o=e&&ke(t,s)||s;L(t[o])&&L(n)?t[o]=Z(t[o],n):L(n)?t[o]=Z({},n):k(n)?t[o]=n.slice():t[o]=n};for(let n=0,s=arguments.length;n<s;n++)arguments[n]&&U(arguments[n],r);return t}const At=(e,t,r,{allOwnKeys:n}={})=>(U(t,(s,o)=>{r&&R(s)?e[o]=Pe(s,r):e[o]=s},{allOwnKeys:n}),e),xt=e=>(e.charCodeAt(0)===65279&&(e=e.slice(1)),e),Tt=(e,t,r,n)=>{e.prototype=Object.create(t.prototype,n),e.prototype.constructor=e,Object.defineProperty(e,"super",{value:t.prototype}),r&&Object.assign(e.prototype,r)},Pt=(e,t,r,n)=>{let s,o,i;const c={};if(t=t||{},e==null)return t;do{for(s=Object.getOwnPropertyNames(e),o=s.length;o-- >0;)i=s[o],(!n||n(i,e,t))&&!c[i]&&(t[i]=e[i],c[i]=!0);e=r!==!1&&se(e)}while(e&&(!r||r(e,t))&&e!==Object.prototype);return t},Ct=(e,t,r)=>{e=String(e),(r===void 0||r>e.length)&&(r=e.length),r-=t.length;const n=e.indexOf(t,r);return n!==-1&&n===r},Nt=e=>{if(!e)return null;if(k(e))return e;let t=e.length;if(!Ne(t))return null;const r=new Array(t);for(;t-- >0;)r[t]=e[t];return r},kt=(e=>t=>e&&t instanceof e)(typeof Uint8Array<"u"&&se(Uint8Array)),_t=(e,t)=>{const n=(e&&e[Symbol.iterator]).call(e);let s;for(;(s=n.next())&&!s.done;){const o=s.value;t.call(e,o[0],o[1])}},Ft=(e,t)=>{let r;const n=[];for(;(r=e.exec(t))!==null;)n.push(r);return n},Dt=A("HTMLFormElement"),Ut=e=>e.toLowerCase().replace(/[-_\s]([a-z\d])(\w*)/g,function(r,n,s){return n.toUpperCase()+s}),he=(({hasOwnProperty:e})=>(t,r)=>e.call(t,r))(Object.prototype),Bt=A("RegExp"),De=(e,t)=>{const r=Object.getOwnPropertyDescriptors(e),n={};U(r,(s,o)=>{let i;(i=t(s,o,e))!==!1&&(n[o]=i||s)}),Object.defineProperties(e,n)},Lt=e=>{De(e,(t,r)=>{if(R(e)&&["arguments","caller","callee"].indexOf(r)!==-1)return!1;const n=e[r];if(R(n)){if(t.enumerable=!1,"writable"in t){t.writable=!1;return}t.set||(t.set=()=>{throw Error("Can not rewrite read-only method '"+r+"'")})}})},jt=(e,t)=>{const r={},n=s=>{s.forEach(o=>{r[o]=!0})};return k(e)?n(e):n(String(e).split(t)),r},Mt=()=>{},Ht=(e,t)=>(e=+e,Number.isFinite(e)?e:t),K="abcdefghijklmnopqrstuvwxyz",me="0123456789",Ue={DIGIT:me,ALPHA:K,ALPHA_DIGIT:K+K.toUpperCase()+me},It=(e=16,t=Ue.ALPHA_DIGIT)=>{let r="";const{length:n}=t;for(;e--;)r+=t[Math.random()*n|0];return r};function qt(e){return!!(e&&R(e.append)&&e[Symbol.toStringTag]==="FormData"&&e[Symbol.iterator])}const $t=e=>{const t=new Array(10),r=(n,s)=>{if(v(n)){if(t.indexOf(n)>=0)return;if(!("toJSON"in n)){t[s]=n;const o=k(n)?[]:{};return U(n,(i,c)=>{const h=r(i,s+1);!D(h)&&(o[c]=h)}),t[s]=void 0,o}}return n};return r(e,0)},zt=A("AsyncFunction"),vt=e=>e&&(v(e)||R(e))&&R(e.then)&&R(e.catch),a={isArray:k,isArrayBuffer:Ce,isBuffer:dt,isFormData:Rt,isArrayBufferView:pt,isString:ht,isNumber:Ne,isBoolean:mt,isObject:v,isPlainObject:L,isUndefined:D,isDate:yt,isFile:bt,isBlob:wt,isRegExp:Bt,isFunction:R,isStream:St,isURLSearchParams:Ot,isTypedArray:kt,isFileList:Et,forEach:U,merge:Z,extend:At,trim:gt,stripBOM:xt,inherits:Tt,toFlatObject:Pt,kindOf:$,kindOfTest:A,endsWith:Ct,toArray:Nt,forEachEntry:_t,matchAll:Ft,isHTMLForm:Dt,hasOwnProperty:he,hasOwnProp:he,reduceDescriptors:De,freezeMethods:Lt,toObjectSet:jt,toCamelCase:Ut,noop:Mt,toFiniteNumber:Ht,findKey:ke,global:_e,isContextDefined:Fe,ALPHABET:Ue,generateString:It,isSpecCompliantForm:qt,toJSONObject:$t,isAsyncFn:zt,isThenable:vt};function m(e,t,r,n,s){Error.call(this),Error.captureStackTrace?Error.captureStackTrace(this,this.constructor):this.stack=new Error().stack,this.message=e,this.name="AxiosError",t&&(this.code=t),r&&(this.config=r),n&&(this.request=n),s&&(this.response=s)}a.inherits(m,Error,{toJSON:function(){return{message:this.message,name:this.name,description:this.description,number:this.number,fileName:this.fileName,lineNumber:this.lineNumber,columnNumber:this.columnNumber,stack:this.stack,config:a.toJSONObject(this.config),code:this.code,status:this.response&&this.response.status?this.response.status:null}}});const Be=m.prototype,Le={};["ERR_BAD_OPTION_VALUE","ERR_BAD_OPTION","ECONNABORTED","ETIMEDOUT","ERR_NETWORK","ERR_FR_TOO_MANY_REDIRECTS","ERR_DEPRECATED","ERR_BAD_RESPONSE","ERR_BAD_REQUEST","ERR_CANCELED","ERR_NOT_SUPPORT","ERR_INVALID_URL"].forEach(e=>{Le[e]={value:e}});Object.defineProperties(m,Le);Object.defineProperty(Be,"isAxiosError",{value:!0});m.from=(e,t,r,n,s,o)=>{const i=Object.create(Be);return a.toFlatObject(e,i,function(h){return h!==Error.prototype},c=>c!=="isAxiosError"),m.call(i,e.message,t,r,n,s),i.cause=e,i.name=e.name,o&&Object.assign(i,o),i};const Jt=null;function Y(e){return a.isPlainObject(e)||a.isArray(e)}function je(e){return a.endsWith(e,"[]")?e.slice(0,-2):e}function ye(e,t,r){return e?e.concat(t).map(function(s,o){return s=je(s),!r&&o?"["+s+"]":s}).join(r?".":""):t}function Vt(e){return a.isArray(e)&&!e.some(Y)}const Wt=a.toFlatObject(a,{},null,function(t){return/^is[A-Z]/.test(t)});function J(e,t,r){if(!a.isObject(e))throw new TypeError("target must be an object");t=t||new FormData,r=a.toFlatObject(r,{metaTokens:!0,dots:!1,indexes:!1},!1,function(d,b){return!a.isUndefined(b[d])});const n=r.metaTokens,s=r.visitor||u,o=r.dots,i=r.indexes,h=(r.Blob||typeof Blob<"u"&&Blob)&&a.isSpecCompliantForm(t);if(!a.isFunction(s))throw new TypeError("visitor must be a function");function p(f){if(f===null)return"";if(a.isDate(f))return f.toISOString();if(!h&&a.isBlob(f))throw new m("Blob is not supported. Use a Buffer instead.");return a.isArrayBuffer(f)||a.isTypedArray(f)?h&&typeof Blob=="function"?new Blob([f]):Buffer.from(f):f}function u(f,d,b){let E=f;if(f&&!b&&typeof f=="object"){if(a.endsWith(d,"{}"))d=n?d:d.slice(0,-2),f=JSON.stringify(f);else if(a.isArray(f)&&Vt(f)||(a.isFileList(f)||a.endsWith(d,"[]"))&&(E=a.toArray(f)))return d=je(d),E.forEach(function(T,Ke){!(a.isUndefined(T)||T===null)&&t.append(i===!0?ye([d],Ke,o):i===null?d:d+"[]",p(T))}),!1}return Y(f)?!0:(t.append(ye(b,d,o),p(f)),!1)}const l=[],y=Object.assign(Wt,{defaultVisitor:u,convertValue:p,isVisitable:Y});function S(f,d){if(!a.isUndefined(f)){if(l.indexOf(f)!==-1)throw Error("Circular reference detected in "+d.join("."));l.push(f),a.forEach(f,function(E,O){(!(a.isUndefined(E)||E===null)&&s.call(t,E,a.isString(O)?O.trim():O,d,y))===!0&&S(E,d?d.concat(O):[O])}),l.pop()}}if(!a.isObject(e))throw new TypeError("data must be an object");return S(e),t}function be(e){const t={"!":"%21","'":"%27","(":"%28",")":"%29","~":"%7E","%20":"+","%00":"\0"};return encodeURIComponent(e).replace(/[!'()~]|%20|%00/g,function(n){return t[n]})}function oe(e,t){this._pairs=[],e&&J(e,this,t)}const Me=oe.prototype;Me.append=function(t,r){this._pairs.push([t,r])};Me.toString=function(t){const r=t?function(n){return t.call(this,n,be)}:be;return this._pairs.map(function(s){return r(s[0])+"="+r(s[1])},"").join("&")};function Kt(e){return encodeURIComponent(e).replace(/%3A/gi,":").replace(/%24/g,"$").replace(/%2C/gi,",").replace(/%20/g,"+").replace(/%5B/gi,"[").replace(/%5D/gi,"]")}function He(e,t,r){if(!t)return e;const n=r&&r.encode||Kt,s=r&&r.serialize;let o;if(s?o=s(t,r):o=a.isURLSearchParams(t)?t.toString():new oe(t,r).toString(n),o){const i=e.indexOf("#");i!==-1&&(e=e.slice(0,i)),e+=(e.indexOf("?")===-1?"?":"&")+o}return e}class Gt{constructor(){this.handlers=[]}use(t,r,n){return this.handlers.push({fulfilled:t,rejected:r,synchronous:n?n.synchronous:!1,runWhen:n?n.runWhen:null}),this.handlers.length-1}eject(t){this.handlers[t]&&(this.handlers[t]=null)}clear(){this.handlers&&(this.handlers=[])}forEach(t){a.forEach(this.handlers,function(n){n!==null&&t(n)})}}const we=Gt,Ie={silentJSONParsing:!0,forcedJSONParsing:!0,clarifyTimeoutError:!1},Xt=typeof URLSearchParams<"u"?URLSearchParams:oe,Qt=typeof FormData<"u"?FormData:null,Zt=typeof Blob<"u"?Blob:null,Yt={isBrowser:!0,classes:{URLSearchParams:Xt,FormData:Qt,Blob:Zt},protocols:["http","https","file","blob","url","data"]},qe=typeof window<"u"&&typeof document<"u",er=(e=>qe&&["ReactNative","NativeScript","NS"].indexOf(e)<0)(typeof navigator<"u"&&navigator.product),tr=(()=>typeof WorkerGlobalScope<"u"&&self instanceof WorkerGlobalScope&&typeof self.importScripts=="function")(),rr=Object.freeze(Object.defineProperty({__proto__:null,hasBrowserEnv:qe,hasStandardBrowserEnv:er,hasStandardBrowserWebWorkerEnv:tr},Symbol.toStringTag,{value:"Module"})),g={...rr,...Yt};function nr(e,t){return J(e,new g.classes.URLSearchParams,Object.assign({visitor:function(r,n,s,o){return g.isNode&&a.isBuffer(r)?(this.append(n,r.toString("base64")),!1):o.defaultVisitor.apply(this,arguments)}},t))}function sr(e){return a.matchAll(/\w+|\[(\w*)]/g,e).map(t=>t[0]==="[]"?"":t[1]||t[0])}function or(e){const t={},r=Object.keys(e);let n;const s=r.length;let o;for(n=0;n<s;n++)o=r[n],t[o]=e[o];return t}function $e(e){function t(r,n,s,o){let i=r[o++];if(i==="__proto__")return!0;const c=Number.isFinite(+i),h=o>=r.length;return i=!i&&a.isArray(s)?s.length:i,h?(a.hasOwnProp(s,i)?s[i]=[s[i],n]:s[i]=n,!c):((!s[i]||!a.isObject(s[i]))&&(s[i]=[]),t(r,n,s[i],o)&&a.isArray(s[i])&&(s[i]=or(s[i])),!c)}if(a.isFormData(e)&&a.isFunction(e.entries)){const r={};return a.forEachEntry(e,(n,s)=>{t(sr(n),s,r,0)}),r}return null}function ir(e,t,r){if(a.isString(e))try{return(t||JSON.parse)(e),a.trim(e)}catch(n){if(n.name!=="SyntaxError")throw n}return(r||JSON.stringify)(e)}const ie={transitional:Ie,adapter:["xhr","http"],transformRequest:[function(t,r){const n=r.getContentType()||"",s=n.indexOf("application/json")>-1,o=a.isObject(t);if(o&&a.isHTMLForm(t)&&(t=new FormData(t)),a.isFormData(t))return s?JSON.stringify($e(t)):t;if(a.isArrayBuffer(t)||a.isBuffer(t)||a.isStream(t)||a.isFile(t)||a.isBlob(t))return t;if(a.isArrayBufferView(t))return t.buffer;if(a.isURLSearchParams(t))return r.setContentType("application/x-www-form-urlencoded;charset=utf-8",!1),t.toString();let c;if(o){if(n.indexOf("application/x-www-form-urlencoded")>-1)return nr(t,this.formSerializer).toString();if((c=a.isFileList(t))||n.indexOf("multipart/form-data")>-1){const h=this.env&&this.env.FormData;return J(c?{"files[]":t}:t,h&&new h,this.formSerializer)}}return o||s?(r.setContentType("application/json",!1),ir(t)):t}],transformResponse:[function(t){const r=this.transitional||ie.transitional,n=r&&r.forcedJSONParsing,s=this.responseType==="json";if(t&&a.isString(t)&&(n&&!this.responseType||s)){const i=!(r&&r.silentJSONParsing)&&s;try{return JSON.parse(t)}catch(c){if(i)throw c.name==="SyntaxError"?m.from(c,m.ERR_BAD_RESPONSE,this,null,this.response):c}}return t}],timeout:0,xsrfCookieName:"XSRF-TOKEN",xsrfHeaderName:"X-XSRF-TOKEN",maxContentLength:-1,maxBodyLength:-1,env:{FormData:g.classes.FormData,Blob:g.classes.Blob},validateStatus:function(t){return t>=200&&t<300},headers:{common:{Accept:"application/json, text/plain, */*","Content-Type":void 0}}};a.forEach(["delete","get","head","post","put","patch"],e=>{ie.headers[e]={}});const ae=ie,ar=a.toObjectSet(["age","authorization","content-length","content-type","etag","expires","from","host","if-modified-since","if-unmodified-since","last-modified","location","max-forwards","proxy-authorization","referer","retry-after","user-agent"]),cr=e=>{const t={};let r,n,s;return e&&e.split(`
`).forEach(function(i){s=i.indexOf(":"),r=i.substring(0,s).trim().toLowerCase(),n=i.substring(s+1).trim(),!(!r||t[r]&&ar[r])&&(r==="set-cookie"?t[r]?t[r].push(n):t[r]=[n]:t[r]=t[r]?t[r]+", "+n:n)}),t},Ee=Symbol("internals");function _(e){return e&&String(e).trim().toLowerCase()}function j(e){return e===!1||e==null?e:a.isArray(e)?e.map(j):String(e)}function lr(e){const t=Object.create(null),r=/([^\s,;=]+)\s*(?:=\s*([^,;]+))?/g;let n;for(;n=r.exec(e);)t[n[1]]=n[2];return t}const ur=e=>/^[-_a-zA-Z0-9^`|~,!#$%&'*+.]+$/.test(e.trim());function G(e,t,r,n,s){if(a.isFunction(n))return n.call(this,t,r);if(s&&(t=r),!!a.isString(t)){if(a.isString(n))return t.indexOf(n)!==-1;if(a.isRegExp(n))return n.test(t)}}function fr(e){return e.trim().toLowerCase().replace(/([a-z\d])(\w*)/g,(t,r,n)=>r.toUpperCase()+n)}function dr(e,t){const r=a.toCamelCase(" "+t);["get","set","has"].forEach(n=>{Object.defineProperty(e,n+r,{value:function(s,o,i){return this[n].call(this,t,s,o,i)},configurable:!0})})}class V{constructor(t){t&&this.set(t)}set(t,r,n){const s=this;function o(c,h,p){const u=_(h);if(!u)throw new Error("header name must be a non-empty string");const l=a.findKey(s,u);(!l||s[l]===void 0||p===!0||p===void 0&&s[l]!==!1)&&(s[l||h]=j(c))}const i=(c,h)=>a.forEach(c,(p,u)=>o(p,u,h));return a.isPlainObject(t)||t instanceof this.constructor?i(t,r):a.isString(t)&&(t=t.trim())&&!ur(t)?i(cr(t),r):t!=null&&o(r,t,n),this}get(t,r){if(t=_(t),t){const n=a.findKey(this,t);if(n){const s=this[n];if(!r)return s;if(r===!0)return lr(s);if(a.isFunction(r))return r.call(this,s,n);if(a.isRegExp(r))return r.exec(s);throw new TypeError("parser must be boolean|regexp|function")}}}has(t,r){if(t=_(t),t){const n=a.findKey(this,t);return!!(n&&this[n]!==void 0&&(!r||G(this,this[n],n,r)))}return!1}delete(t,r){const n=this;let s=!1;function o(i){if(i=_(i),i){const c=a.findKey(n,i);c&&(!r||G(n,n[c],c,r))&&(delete n[c],s=!0)}}return a.isArray(t)?t.forEach(o):o(t),s}clear(t){const r=Object.keys(this);let n=r.length,s=!1;for(;n--;){const o=r[n];(!t||G(this,this[o],o,t,!0))&&(delete this[o],s=!0)}return s}normalize(t){const r=this,n={};return a.forEach(this,(s,o)=>{const i=a.findKey(n,o);if(i){r[i]=j(s),delete r[o];return}const c=t?fr(o):String(o).trim();c!==o&&delete r[o],r[c]=j(s),n[c]=!0}),this}concat(...t){return this.constructor.concat(this,...t)}toJSON(t){const r=Object.create(null);return a.forEach(this,(n,s)=>{n!=null&&n!==!1&&(r[s]=t&&a.isArray(n)?n.join(", "):n)}),r}[Symbol.iterator](){return Object.entries(this.toJSON())[Symbol.iterator]()}toString(){return Object.entries(this.toJSON()).map(([t,r])=>t+": "+r).join(`
`)}get[Symbol.toStringTag](){return"AxiosHeaders"}static from(t){return t instanceof this?t:new this(t)}static concat(t,...r){const n=new this(t);return r.forEach(s=>n.set(s)),n}static accessor(t){const n=(this[Ee]=this[Ee]={accessors:{}}).accessors,s=this.prototype;function o(i){const c=_(i);n[c]||(dr(s,i),n[c]=!0)}return a.isArray(t)?t.forEach(o):o(t),this}}V.accessor(["Content-Type","Content-Length","Accept","Accept-Encoding","User-Agent","Authorization"]);a.reduceDescriptors(V.prototype,({value:e},t)=>{let r=t[0].toUpperCase()+t.slice(1);return{get:()=>e,set(n){this[r]=n}}});a.freezeMethods(V);const x=V;function X(e,t){const r=this||ae,n=t||r,s=x.from(n.headers);let o=n.data;return a.forEach(e,function(c){o=c.call(r,o,s.normalize(),t?t.status:void 0)}),s.normalize(),o}function ze(e){return!!(e&&e.__CANCEL__)}function B(e,t,r){m.call(this,e??"canceled",m.ERR_CANCELED,t,r),this.name="CanceledError"}a.inherits(B,m,{__CANCEL__:!0});function pr(e,t,r){const n=r.config.validateStatus;!r.status||!n||n(r.status)?e(r):t(new m("Request failed with status code "+r.status,[m.ERR_BAD_REQUEST,m.ERR_BAD_RESPONSE][Math.floor(r.status/100)-4],r.config,r.request,r))}const hr=g.hasStandardBrowserEnv?{write(e,t,r,n,s,o){const i=[e+"="+encodeURIComponent(t)];a.isNumber(r)&&i.push("expires="+new Date(r).toGMTString()),a.isString(n)&&i.push("path="+n),a.isString(s)&&i.push("domain="+s),o===!0&&i.push("secure"),document.cookie=i.join("; ")},read(e){const t=document.cookie.match(new RegExp("(^|;\\s*)("+e+")=([^;]*)"));return t?decodeURIComponent(t[3]):null},remove(e){this.write(e,"",Date.now()-864e5)}}:{write(){},read(){return null},remove(){}};function mr(e){return/^([a-z][a-z\d+\-.]*:)?\/\//i.test(e)}function yr(e,t){return t?e.replace(/\/?\/$/,"")+"/"+t.replace(/^\/+/,""):e}function ve(e,t){return e&&!mr(t)?yr(e,t):t}const br=g.hasStandardBrowserEnv?function(){const t=/(msie|trident)/i.test(navigator.userAgent),r=document.createElement("a");let n;function s(o){let i=o;return t&&(r.setAttribute("href",i),i=r.href),r.setAttribute("href",i),{href:r.href,protocol:r.protocol?r.protocol.replace(/:$/,""):"",host:r.host,search:r.search?r.search.replace(/^\?/,""):"",hash:r.hash?r.hash.replace(/^#/,""):"",hostname:r.hostname,port:r.port,pathname:r.pathname.charAt(0)==="/"?r.pathname:"/"+r.pathname}}return n=s(window.location.href),function(i){const c=a.isString(i)?s(i):i;return c.protocol===n.protocol&&c.host===n.host}}():function(){return function(){return!0}}();function wr(e){const t=/^([-+\w]{1,25})(:?\/\/|:)/.exec(e);return t&&t[1]||""}function Er(e,t){e=e||10;const r=new Array(e),n=new Array(e);let s=0,o=0,i;return t=t!==void 0?t:1e3,function(h){const p=Date.now(),u=n[o];i||(i=p),r[s]=h,n[s]=p;let l=o,y=0;for(;l!==s;)y+=r[l++],l=l%e;if(s=(s+1)%e,s===o&&(o=(o+1)%e),p-i<t)return;const S=u&&p-u;return S?Math.round(y*1e3/S):void 0}}function Se(e,t){let r=0;const n=Er(50,250);return s=>{const o=s.loaded,i=s.lengthComputable?s.total:void 0,c=o-r,h=n(c),p=o<=i;r=o;const u={loaded:o,total:i,progress:i?o/i:void 0,bytes:c,rate:h||void 0,estimated:h&&i&&p?(i-o)/h:void 0,event:s};u[t?"download":"upload"]=!0,e(u)}}const Sr=typeof XMLHttpRequest<"u",Rr=Sr&&function(e){return new Promise(function(r,n){let s=e.data;const o=x.from(e.headers).normalize();let{responseType:i,withXSRFToken:c}=e,h;function p(){e.cancelToken&&e.cancelToken.unsubscribe(h),e.signal&&e.signal.removeEventListener("abort",h)}let u;if(a.isFormData(s)){if(g.hasStandardBrowserEnv||g.hasStandardBrowserWebWorkerEnv)o.setContentType(!1);else if((u=o.getContentType())!==!1){const[d,...b]=u?u.split(";").map(E=>E.trim()).filter(Boolean):[];o.setContentType([d||"multipart/form-data",...b].join("; "))}}let l=new XMLHttpRequest;if(e.auth){const d=e.auth.username||"",b=e.auth.password?unescape(encodeURIComponent(e.auth.password)):"";o.set("Authorization","Basic "+btoa(d+":"+b))}const y=ve(e.baseURL,e.url);l.open(e.method.toUpperCase(),He(y,e.params,e.paramsSerializer),!0),l.timeout=e.timeout;function S(){if(!l)return;const d=x.from("getAllResponseHeaders"in l&&l.getAllResponseHeaders()),E={data:!i||i==="text"||i==="json"?l.responseText:l.response,status:l.status,statusText:l.statusText,headers:d,config:e,request:l};pr(function(T){r(T),p()},function(T){n(T),p()},E),l=null}if("onloadend"in l?l.onloadend=S:l.onreadystatechange=function(){!l||l.readyState!==4||l.status===0&&!(l.responseURL&&l.responseURL.indexOf("file:")===0)||setTimeout(S)},l.onabort=function(){l&&(n(new m("Request aborted",m.ECONNABORTED,e,l)),l=null)},l.onerror=function(){n(new m("Network Error",m.ERR_NETWORK,e,l)),l=null},l.ontimeout=function(){let b=e.timeout?"timeout of "+e.timeout+"ms exceeded":"timeout exceeded";const E=e.transitional||Ie;e.timeoutErrorMessage&&(b=e.timeoutErrorMessage),n(new m(b,E.clarifyTimeoutError?m.ETIMEDOUT:m.ECONNABORTED,e,l)),l=null},g.hasStandardBrowserEnv&&(c&&a.isFunction(c)&&(c=c(e)),c||c!==!1&&br(y))){const d=e.xsrfHeaderName&&e.xsrfCookieName&&hr.read(e.xsrfCookieName);d&&o.set(e.xsrfHeaderName,d)}s===void 0&&o.setContentType(null),"setRequestHeader"in l&&a.forEach(o.toJSON(),function(b,E){l.setRequestHeader(E,b)}),a.isUndefined(e.withCredentials)||(l.withCredentials=!!e.withCredentials),i&&i!=="json"&&(l.responseType=e.responseType),typeof e.onDownloadProgress=="function"&&l.addEventListener("progress",Se(e.onDownloadProgress,!0)),typeof e.onUploadProgress=="function"&&l.upload&&l.upload.addEventListener("progress",Se(e.onUploadProgress)),(e.cancelToken||e.signal)&&(h=d=>{l&&(n(!d||d.type?new B(null,e,l):d),l.abort(),l=null)},e.cancelToken&&e.cancelToken.subscribe(h),e.signal&&(e.signal.aborted?h():e.signal.addEventListener("abort",h)));const f=wr(y);if(f&&g.protocols.indexOf(f)===-1){n(new m("Unsupported protocol "+f+":",m.ERR_BAD_REQUEST,e));return}l.send(s||null)})},ee={http:Jt,xhr:Rr};a.forEach(ee,(e,t)=>{if(e){try{Object.defineProperty(e,"name",{value:t})}catch{}Object.defineProperty(e,"adapterName",{value:t})}});const Re=e=>`- ${e}`,Or=e=>a.isFunction(e)||e===null||e===!1,Je={getAdapter:e=>{e=a.isArray(e)?e:[e];const{length:t}=e;let r,n;const s={};for(let o=0;o<t;o++){r=e[o];let i;if(n=r,!Or(r)&&(n=ee[(i=String(r)).toLowerCase()],n===void 0))throw new m(`Unknown adapter '${i}'`);if(n)break;s[i||"#"+o]=n}if(!n){const o=Object.entries(s).map(([c,h])=>`adapter ${c} `+(h===!1?"is not supported by the environment":"is not available in the build"));let i=t?o.length>1?`since :
`+o.map(Re).join(`
`):" "+Re(o[0]):"as no adapter specified";throw new m("There is no suitable adapter to dispatch the request "+i,"ERR_NOT_SUPPORT")}return n},adapters:ee};function Q(e){if(e.cancelToken&&e.cancelToken.throwIfRequested(),e.signal&&e.signal.aborted)throw new B(null,e)}function Oe(e){return Q(e),e.headers=x.from(e.headers),e.data=X.call(e,e.transformRequest),["post","put","patch"].indexOf(e.method)!==-1&&e.headers.setContentType("application/x-www-form-urlencoded",!1),Je.getAdapter(e.adapter||ae.adapter)(e).then(function(n){return Q(e),n.data=X.call(e,e.transformResponse,n),n.headers=x.from(n.headers),n},function(n){return ze(n)||(Q(e),n&&n.response&&(n.response.data=X.call(e,e.transformResponse,n.response),n.response.headers=x.from(n.response.headers))),Promise.reject(n)})}const ge=e=>e instanceof x?{...e}:e;function N(e,t){t=t||{};const r={};function n(p,u,l){return a.isPlainObject(p)&&a.isPlainObject(u)?a.merge.call({caseless:l},p,u):a.isPlainObject(u)?a.merge({},u):a.isArray(u)?u.slice():u}function s(p,u,l){if(a.isUndefined(u)){if(!a.isUndefined(p))return n(void 0,p,l)}else return n(p,u,l)}function o(p,u){if(!a.isUndefined(u))return n(void 0,u)}function i(p,u){if(a.isUndefined(u)){if(!a.isUndefined(p))return n(void 0,p)}else return n(void 0,u)}function c(p,u,l){if(l in t)return n(p,u);if(l in e)return n(void 0,p)}const h={url:o,method:o,data:o,baseURL:i,transformRequest:i,transformResponse:i,paramsSerializer:i,timeout:i,timeoutMessage:i,withCredentials:i,withXSRFToken:i,adapter:i,responseType:i,xsrfCookieName:i,xsrfHeaderName:i,onUploadProgress:i,onDownloadProgress:i,decompress:i,maxContentLength:i,maxBodyLength:i,beforeRedirect:i,transport:i,httpAgent:i,httpsAgent:i,cancelToken:i,socketPath:i,responseEncoding:i,validateStatus:c,headers:(p,u)=>s(ge(p),ge(u),!0)};return a.forEach(Object.keys(Object.assign({},e,t)),function(u){const l=h[u]||s,y=l(e[u],t[u],u);a.isUndefined(y)&&l!==c||(r[u]=y)}),r}const Ve="1.6.8",ce={};["object","boolean","number","function","string","symbol"].forEach((e,t)=>{ce[e]=function(n){return typeof n===e||"a"+(t<1?"n ":" ")+e}});const Ae={};ce.transitional=function(t,r,n){function s(o,i){return"[Axios v"+Ve+"] Transitional option '"+o+"'"+i+(n?". "+n:"")}return(o,i,c)=>{if(t===!1)throw new m(s(i," has been removed"+(r?" in "+r:"")),m.ERR_DEPRECATED);return r&&!Ae[i]&&(Ae[i]=!0,console.warn(s(i," has been deprecated since v"+r+" and will be removed in the near future"))),t?t(o,i,c):!0}};function gr(e,t,r){if(typeof e!="object")throw new m("options must be an object",m.ERR_BAD_OPTION_VALUE);const n=Object.keys(e);let s=n.length;for(;s-- >0;){const o=n[s],i=t[o];if(i){const c=e[o],h=c===void 0||i(c,o,e);if(h!==!0)throw new m("option "+o+" must be "+h,m.ERR_BAD_OPTION_VALUE);continue}if(r!==!0)throw new m("Unknown option "+o,m.ERR_BAD_OPTION)}}const te={assertOptions:gr,validators:ce},C=te.validators;class I{constructor(t){this.defaults=t,this.interceptors={request:new we,response:new we}}async request(t,r){try{return await this._request(t,r)}catch(n){if(n instanceof Error){let s;Error.captureStackTrace?Error.captureStackTrace(s={}):s=new Error;const o=s.stack?s.stack.replace(/^.+\n/,""):"";n.stack?o&&!String(n.stack).endsWith(o.replace(/^.+\n.+\n/,""))&&(n.stack+=`
`+o):n.stack=o}throw n}}_request(t,r){typeof t=="string"?(r=r||{},r.url=t):r=t||{},r=N(this.defaults,r);const{transitional:n,paramsSerializer:s,headers:o}=r;n!==void 0&&te.assertOptions(n,{silentJSONParsing:C.transitional(C.boolean),forcedJSONParsing:C.transitional(C.boolean),clarifyTimeoutError:C.transitional(C.boolean)},!1),s!=null&&(a.isFunction(s)?r.paramsSerializer={serialize:s}:te.assertOptions(s,{encode:C.function,serialize:C.function},!0)),r.method=(r.method||this.defaults.method||"get").toLowerCase();let i=o&&a.merge(o.common,o[r.method]);o&&a.forEach(["delete","get","head","post","put","patch","common"],f=>{delete o[f]}),r.headers=x.concat(i,o);const c=[];let h=!0;this.interceptors.request.forEach(function(d){typeof d.runWhen=="function"&&d.runWhen(r)===!1||(h=h&&d.synchronous,c.unshift(d.fulfilled,d.rejected))});const p=[];this.interceptors.response.forEach(function(d){p.push(d.fulfilled,d.rejected)});let u,l=0,y;if(!h){const f=[Oe.bind(this),void 0];for(f.unshift.apply(f,c),f.push.apply(f,p),y=f.length,u=Promise.resolve(r);l<y;)u=u.then(f[l++],f[l++]);return u}y=c.length;let S=r;for(l=0;l<y;){const f=c[l++],d=c[l++];try{S=f(S)}catch(b){d.call(this,b);break}}try{u=Oe.call(this,S)}catch(f){return Promise.reject(f)}for(l=0,y=p.length;l<y;)u=u.then(p[l++],p[l++]);return u}getUri(t){t=N(this.defaults,t);const r=ve(t.baseURL,t.url);return He(r,t.params,t.paramsSerializer)}}a.forEach(["delete","get","head","options"],function(t){I.prototype[t]=function(r,n){return this.request(N(n||{},{method:t,url:r,data:(n||{}).data}))}});a.forEach(["post","put","patch"],function(t){function r(n){return function(o,i,c){return this.request(N(c||{},{method:t,headers:n?{"Content-Type":"multipart/form-data"}:{},url:o,data:i}))}}I.prototype[t]=r(),I.prototype[t+"Form"]=r(!0)});const M=I;class le{constructor(t){if(typeof t!="function")throw new TypeError("executor must be a function.");let r;this.promise=new Promise(function(o){r=o});const n=this;this.promise.then(s=>{if(!n._listeners)return;let o=n._listeners.length;for(;o-- >0;)n._listeners[o](s);n._listeners=null}),this.promise.then=s=>{let o;const i=new Promise(c=>{n.subscribe(c),o=c}).then(s);return i.cancel=function(){n.unsubscribe(o)},i},t(function(o,i,c){n.reason||(n.reason=new B(o,i,c),r(n.reason))})}throwIfRequested(){if(this.reason)throw this.reason}subscribe(t){if(this.reason){t(this.reason);return}this._listeners?this._listeners.push(t):this._listeners=[t]}unsubscribe(t){if(!this._listeners)return;const r=this._listeners.indexOf(t);r!==-1&&this._listeners.splice(r,1)}static source(){let t;return{token:new le(function(s){t=s}),cancel:t}}}const Ar=le;function xr(e){return function(r){return e.apply(null,r)}}function Tr(e){return a.isObject(e)&&e.isAxiosError===!0}const re={Continue:100,SwitchingProtocols:101,Processing:102,EarlyHints:103,Ok:200,Created:201,Accepted:202,NonAuthoritativeInformation:203,NoContent:204,ResetContent:205,PartialContent:206,MultiStatus:207,AlreadyReported:208,ImUsed:226,MultipleChoices:300,MovedPermanently:301,Found:302,SeeOther:303,NotModified:304,UseProxy:305,Unused:306,TemporaryRedirect:307,PermanentRedirect:308,BadRequest:400,Unauthorized:401,PaymentRequired:402,Forbidden:403,NotFound:404,MethodNotAllowed:405,NotAcceptable:406,ProxyAuthenticationRequired:407,RequestTimeout:408,Conflict:409,Gone:410,LengthRequired:411,PreconditionFailed:412,PayloadTooLarge:413,UriTooLong:414,UnsupportedMediaType:415,RangeNotSatisfiable:416,ExpectationFailed:417,ImATeapot:418,MisdirectedRequest:421,UnprocessableEntity:422,Locked:423,FailedDependency:424,TooEarly:425,UpgradeRequired:426,PreconditionRequired:428,TooManyRequests:429,RequestHeaderFieldsTooLarge:431,UnavailableForLegalReasons:451,InternalServerError:500,NotImplemented:501,BadGateway:502,ServiceUnavailable:503,GatewayTimeout:504,HttpVersionNotSupported:505,VariantAlsoNegotiates:506,InsufficientStorage:507,LoopDetected:508,NotExtended:510,NetworkAuthenticationRequired:511};Object.entries(re).forEach(([e,t])=>{re[t]=e});const Pr=re;function We(e){const t=new M(e),r=Pe(M.prototype.request,t);return a.extend(r,M.prototype,t,{allOwnKeys:!0}),a.extend(r,t,null,{allOwnKeys:!0}),r.create=function(s){return We(N(e,s))},r}const w=We(ae);w.Axios=M;w.CanceledError=B;w.CancelToken=Ar;w.isCancel=ze;w.VERSION=Ve;w.toFormData=J;w.AxiosError=m;w.Cancel=w.CanceledError;w.all=function(t){return Promise.all(t)};w.spread=xr;w.isAxiosError=Tr;w.mergeConfig=N;w.AxiosHeaders=x;w.formToJSON=e=>$e(a.isHTMLForm(e)?new FormData(e):e);w.getAdapter=Je.getAdapter;w.HttpStatusCode=Pr;w.default=w;const kr=w,_r="https://chat-app-x2of.onrender.com/api",Fr="https://socket-y0xj.onrender.com/",Dr=[null,"green","blue","white","gray","red"];export{Nr as C,Fr as S,kr as a,_r as b,Dr as c};