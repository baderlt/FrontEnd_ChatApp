import{q as Cn,t as $n,X as It,v as jn,a as ke,$ as Sn,Y as nt,r as x,w as En,_ as Mn,j as d,c as Ln,x as Rn,R as A,a0 as zn,J as Xe,V as An,I as Ot,M as Pn,U as Tn}from"./index-d71608ad.js";import{a as ge,b as ue}from"./touls-68217feb.js";import{r as Dn,i as Nn,O as Bt,A as pe,F as Se,f as Ht,a as In,h as rt,b as On}from"./Home-28d657c8.js";import"./CircularProgress-9570c230.js";function Bn(e){return String(e).match(/[\d.\-+]*\s*(.*)/)[1]||""}function Hn(e){return parseFloat(e)}function Fn(e){return Cn("MuiSkeleton",e)}$n("MuiSkeleton",["root","text","rectangular","rounded","circular","pulse","wave","withChildren","fitContent","heightAuto"]);const Un=["animation","className","component","height","style","variant","width"];let Ee=e=>e,it,ot,at,st;const Vn=e=>{const{classes:t,variant:n,animation:r,hasChildren:o,width:i,height:a}=e;return Rn({root:["root",n,r,o&&"withChildren",o&&!i&&"fitContent",o&&!a&&"heightAuto"]},Fn,t)},Wn=It(it||(it=Ee`
  0% {
    opacity: 1;
  }

  50% {
    opacity: 0.4;
  }

  100% {
    opacity: 1;
  }
`)),Kn=It(ot||(ot=Ee`
  0% {
    transform: translateX(-100%);
  }

  50% {
    /* +0.5s of delay between each loop */
    transform: translateX(100%);
  }

  100% {
    transform: translateX(100%);
  }
`)),qn=jn("span",{name:"MuiSkeleton",slot:"Root",overridesResolver:(e,t)=>{const{ownerState:n}=e;return[t.root,t[n.variant],n.animation!==!1&&t[n.animation],n.hasChildren&&t.withChildren,n.hasChildren&&!n.width&&t.fitContent,n.hasChildren&&!n.height&&t.heightAuto]}})(({theme:e,ownerState:t})=>{const n=Bn(e.shape.borderRadius)||"px",r=Hn(e.shape.borderRadius);return ke({display:"block",backgroundColor:e.vars?e.vars.palette.Skeleton.bg:Sn(e.palette.text.primary,e.palette.mode==="light"?.11:.13),height:"1.2em"},t.variant==="text"&&{marginTop:0,marginBottom:0,height:"auto",transformOrigin:"0 55%",transform:"scale(1, 0.60)",borderRadius:`${r}${n}/${Math.round(r/.6*10)/10}${n}`,"&:empty:before":{content:'"\\00a0"'}},t.variant==="circular"&&{borderRadius:"50%"},t.variant==="rounded"&&{borderRadius:(e.vars||e).shape.borderRadius},t.hasChildren&&{"& > *":{visibility:"hidden"}},t.hasChildren&&!t.width&&{maxWidth:"fit-content"},t.hasChildren&&!t.height&&{height:"auto"})},({ownerState:e})=>e.animation==="pulse"&&nt(at||(at=Ee`
      animation: ${0} 2s ease-in-out 0.5s infinite;
    `),Wn),({ownerState:e,theme:t})=>e.animation==="wave"&&nt(st||(st=Ee`
      position: relative;
      overflow: hidden;

      /* Fix bug in Safari https://bugs.webkit.org/show_bug.cgi?id=68196 */
      -webkit-mask-image: -webkit-radial-gradient(white, black);

      &::after {
        animation: ${0} 2s linear 0.5s infinite;
        background: linear-gradient(
          90deg,
          transparent,
          ${0},
          transparent
        );
        content: '';
        position: absolute;
        transform: translateX(-100%); /* Avoid flash during server-side hydration */
        bottom: 0;
        left: 0;
        right: 0;
        top: 0;
      }
    `),Kn,(t.vars||t).palette.action.hover)),Gn=x.forwardRef(function(t,n){const r=En({props:t,name:"MuiSkeleton"}),{animation:o="pulse",className:i,component:a="span",height:l,style:c,variant:u="text",width:s}=r,b=Mn(r,Un),p=ke({},r,{animation:o,component:a,variant:u,hasChildren:!!b.children}),_=Vn(p);return d.jsx(qn,ke({as:a,ref:n,className:Ln(_.root,i),ownerState:p},b,{style:ke({width:s,height:l},c)}))}),ve=Gn,Xn=()=>Array.from(Array(7)).map(t=>d.jsx(Yn,{})),Yn=()=>d.jsxs("div",{className:"flex flex-nowrap mt-2",children:[d.jsxs("span",{children:[" ",d.jsx(ve,{variant:"circular",width:50,height:50,className:"text-gray-400",sx:{marginLeft:"20px ",backgroundColor:" rgb(31 41 55)"}})]}),d.jsx("span",{className:"w-full mr-4",children:d.jsx(ve,{variant:"rounded",width:"100%",height:50,sx:{marginRight:"10px ",marginLeft:"5px",marginTop:"6px",backgroundColor:"rgb(31 41 55)"}})})]});var Ye={},Jn=Nn;Object.defineProperty(Ye,"__esModule",{value:!0});var Je=Ye.default=void 0,Zn=Jn(Dn()),Qn=d,er=(0,Zn.default)((0,Qn.jsx)("path",{d:"M12 8c1.1 0 2-.9 2-2s-.9-2-2-2-2 .9-2 2 .9 2 2 2zm0 2c-1.1 0-2 .9-2 2s.9 2 2 2 2-.9 2-2-.9-2-2-2zm0 6c-1.1 0-2 .9-2 2s.9 2 2 2 2-.9 2-2-.9-2-2-2z"}),"MoreVert");Je=Ye.default=er;function tr(e,t){t===void 0&&(t={});var n=t.insertAt;if(!(!e||typeof document>"u")){var r=document.head||document.getElementsByTagName("head")[0],o=document.createElement("style");o.type="text/css",n==="top"&&r.firstChild?r.insertBefore(o,r.firstChild):r.appendChild(o),o.styleSheet?o.styleSheet.cssText=e:o.appendChild(document.createTextNode(e))}}var nr=`.react-input-emoji--container {
  color: #4b4b4b;
  text-rendering: optimizeLegibility;
  background-color: #fff;
  border: 1px solid #fff;
  border-radius: 21px;
  margin: 5px 10px;
  box-sizing: border-box;
  flex: 1 1 auto;
  font-size: 15px;
  font-family: sans-serif;
  font-weight: 400;
  line-height: 20px;
  min-height: 20px;
  min-width: 0;
  outline: none;
  width: inherit;
  will-change: width;
  vertical-align: baseline;
  border: 1px solid #eaeaea;
  margin-right: 0;
}

.react-input-emoji--wrapper {
  display: flex;
  overflow: hidden;
  flex: 1;
  position: relative;
  padding-right: 0;
  vertical-align: baseline;
  outline: none;
  margin: 0;
  padding: 0;
  border: 0;
}

.react-input-emoji--input {
  font-weight: 400;
  max-height: 100px;
  min-height: 20px;
  outline: none;
  overflow-x: hidden;
  overflow-y: auto;
  position: relative;
  white-space: pre-wrap;
  word-wrap: break-word;
  z-index: 1;
  width: 100%;
  user-select: text;
  padding: 9px 12px 11px;
  text-align: left;
}

.react-input-emoji--input img {
  vertical-align: middle;
  width: 18px !important;
  height: 18px !important;
  display: inline !important;
  margin-left: 1px;
  margin-right: 1px;
}

.react-input-emoji--overlay {
  position: fixed;
  width: 100%;
  height: 100%;
  top: 0;
  left: 0;
  z-index: 9;
}

.react-input-emoji--placeholder {
  color: #a0a0a0;
  pointer-events: none;
  position: absolute;
  user-select: none;
  z-index: 2;
  left: 16px;
  top: 0;
  bottom: 0;
  display: flex;
  align-items: center;
  width: calc(100% - 22px);
}

.react-input-emoji--button {
  position: relative;
  display: block;
  text-align: center;
  padding: 0 10px;
  overflow: hidden;
  transition: color 0.1s ease-out;
  margin: 0;
  box-shadow: none;
  background: none;
  border: none;
  outline: none;
  cursor: pointer;
  flex-shrink: 0;
}

.react-input-emoji--button svg {
  fill: #858585;
}

.react-input-emoji--button__show svg {
  fill: #128b7e;
}

.react-emoji {
  display: flex;
  align-items: center;
  position: relative;
  width: 100%;
}

.react-emoji-picker--container {
  position: absolute;
  top: 0;
  width: 100%;
}

.react-emoji-picker--wrapper {
  position: absolute;
  bottom: 0;
  right: 0;
  height: 435px;
  width: 352px;
  overflow: hidden;
  z-index: 10;
}

.react-emoji-picker {
  position: absolute;
  top: 0;
  left: 0;
  animation: slidein 0.1s ease-in-out;
}

.react-emoji-picker__show {
  top: 0;
}

.react-input-emoji--mention--container {
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  z-index: 10;
}

.react-input-emoji--mention--list {
  background-color: #fafafa;
  border: 1px solid #eaeaea;
  border-radius: 4px;
  margin: 0;
  padding: 0;
  list-style: none;
  display: flex;
  gap: 5px;
  flex-direction: column;
  position: absolute;
  bottom: 0;
  width: 100%;
  left: 0;
}

.react-input-emoji--mention--item {
  display: flex;
  align-items: center;
  gap: 10px;
  padding: 5px 10px;
  background-color: transparent;
  width: 100%;
  margin: 0;
  border: 0;
}

.react-input-emoji--mention--item__selected {
  background-color: #eeeeee;
}

.react-input-emoji--mention--item--img {
  width: 34px;
  height: 34px;
  border-radius: 50%;
}

.react-input-emoji--mention--item--name {
  font-size: 16px;
  color: #333;
}

.react-input-emoji--mention--item--name__selected {
  color: green;
}

.react-input-emoji--mention--text {
  color: #039be5;
}

.react-input-emoji--mention--loading {
  background-color: #fafafa;
  border: 1px solid #eaeaea;
  border-radius: 4px;
  display: flex;
  align-items: center;
  justify-content: center;
  padding: 10px 0;
  position: absolute;
  bottom: 0;
  left: 0;
  width: 100%;
}

.react-input-emoji--mention--loading--spinner,
.react-input-emoji--mention--loading--spinner::after {
  border-radius: 50%;
  width: 10em;
  height: 10em;
}

.react-input-emoji--mention--loading--spinner {
  margin: 1px auto;
  font-size: 2px;
  position: relative;
  text-indent: -9999em;
  border-top: 1.1em solid rgba(0, 0, 0, 0.1);
  border-right: 1.1em solid rgba(0, 0, 0, 0.1);
  border-bottom: 1.1em solid rgba(0, 0, 0, 0.1);
  border-left: 1.1em solid rgba(0, 0, 0, 0.4);
  transform: translateZ(0);
  animation: load8 1.1s infinite linear;
}

@keyframes load8 {
  0% {
    transform: rotate(0deg);
  }
  100% {
    transform: rotate(360deg);
  }
}

@keyframes slidein {
  from {
    opacity: 0;
  }

  to {
    opacity: 1;
  }
}
`;tr(nr);function rr(e,t){var n=e==null?null:typeof Symbol<"u"&&e[Symbol.iterator]||e["@@iterator"];if(n!=null){var r,o,i,a,l=[],c=!0,u=!1;try{if(i=(n=n.call(e)).next,t===0){if(Object(n)!==n)return;c=!1}else for(;!(c=(r=i.call(n)).done)&&(l.push(r.value),l.length!==t);c=!0);}catch(s){u=!0,o=s}finally{try{if(!c&&n.return!=null&&(a=n.return(),Object(a)!==a))return}finally{if(u)throw o}}return l}}function ct(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter(function(o){return Object.getOwnPropertyDescriptor(e,o).enumerable})),n.push.apply(n,r)}return n}function lt(e){for(var t=1;t<arguments.length;t++){var n=arguments[t]!=null?arguments[t]:{};t%2?ct(Object(n),!0).forEach(function(r){ir(e,r,n[r])}):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):ct(Object(n)).forEach(function(r){Object.defineProperty(e,r,Object.getOwnPropertyDescriptor(n,r))})}return e}function me(){me=function(){return t};var e,t={},n=Object.prototype,r=n.hasOwnProperty,o=Object.defineProperty||function(f,h,y){f[h]=y.value},i=typeof Symbol=="function"?Symbol:{},a=i.iterator||"@@iterator",l=i.asyncIterator||"@@asyncIterator",c=i.toStringTag||"@@toStringTag";function u(f,h,y){return Object.defineProperty(f,h,{value:y,enumerable:!0,configurable:!0,writable:!0}),f[h]}try{u({},"")}catch{u=function(h,y,v){return h[y]=v}}function s(f,h,y,v){var w=h&&h.prototype instanceof j?h:j,M=Object.create(w.prototype),N=new z(v||[]);return o(M,"_invoke",{value:Z(f,y,N)}),M}function b(f,h,y){try{return{type:"normal",arg:f.call(h,y)}}catch(v){return{type:"throw",arg:v}}}t.wrap=s;var p="suspendedStart",_="suspendedYield",g="executing",k="completed",$={};function j(){}function L(){}function E(){}var R={};u(R,a,function(){return this});var P=Object.getPrototypeOf,I=P&&P(P(D([])));I&&I!==n&&r.call(I,a)&&(R=I);var q=E.prototype=j.prototype=Object.create(R);function V(f){["next","throw","return"].forEach(function(h){u(f,h,function(y){return this._invoke(h,y)})})}function J(f,h){function y(w,M,N,B){var F=b(f[w],f,M);if(F.type!=="throw"){var G=F.arg,ee=G.value;return ee&&typeof ee=="object"&&r.call(ee,"__await")?h.resolve(ee.__await).then(function(X){y("next",X,N,B)},function(X){y("throw",X,N,B)}):h.resolve(ee).then(function(X){G.value=X,N(G)},function(X){return y("throw",X,N,B)})}B(F.arg)}var v;o(this,"_invoke",{value:function(w,M){function N(){return new h(function(B,F){y(w,M,B,F)})}return v=v?v.then(N,N):N()}})}function Z(f,h,y){var v=p;return function(w,M){if(v===g)throw new Error("Generator is already running");if(v===k){if(w==="throw")throw M;return{value:e,done:!0}}for(y.method=w,y.arg=M;;){var N=y.delegate;if(N){var B=H(N,y);if(B){if(B===$)continue;return B}}if(y.method==="next")y.sent=y._sent=y.arg;else if(y.method==="throw"){if(v===p)throw v=k,y.arg;y.dispatchException(y.arg)}else y.method==="return"&&y.abrupt("return",y.arg);v=g;var F=b(f,h,y);if(F.type==="normal"){if(v=y.done?k:_,F.arg===$)continue;return{value:F.arg,done:y.done}}F.type==="throw"&&(v=k,y.method="throw",y.arg=F.arg)}}}function H(f,h){var y=h.method,v=f.iterator[y];if(v===e)return h.delegate=null,y==="throw"&&f.iterator.return&&(h.method="return",h.arg=e,H(f,h),h.method==="throw")||y!=="return"&&(h.method="throw",h.arg=new TypeError("The iterator does not provide a '"+y+"' method")),$;var w=b(v,f.iterator,h.arg);if(w.type==="throw")return h.method="throw",h.arg=w.arg,h.delegate=null,$;var M=w.arg;return M?M.done?(h[f.resultName]=M.value,h.next=f.nextLoc,h.method!=="return"&&(h.method="next",h.arg=e),h.delegate=null,$):M:(h.method="throw",h.arg=new TypeError("iterator result is not an object"),h.delegate=null,$)}function O(f){var h={tryLoc:f[0]};1 in f&&(h.catchLoc=f[1]),2 in f&&(h.finallyLoc=f[2],h.afterLoc=f[3]),this.tryEntries.push(h)}function C(f){var h=f.completion||{};h.type="normal",delete h.arg,f.completion=h}function z(f){this.tryEntries=[{tryLoc:"root"}],f.forEach(O,this),this.reset(!0)}function D(f){if(f||f===""){var h=f[a];if(h)return h.call(f);if(typeof f.next=="function")return f;if(!isNaN(f.length)){var y=-1,v=function w(){for(;++y<f.length;)if(r.call(f,y))return w.value=f[y],w.done=!1,w;return w.value=e,w.done=!0,w};return v.next=v}}throw new TypeError(typeof f+" is not iterable")}return L.prototype=E,o(q,"constructor",{value:E,configurable:!0}),o(E,"constructor",{value:L,configurable:!0}),L.displayName=u(E,c,"GeneratorFunction"),t.isGeneratorFunction=function(f){var h=typeof f=="function"&&f.constructor;return!!h&&(h===L||(h.displayName||h.name)==="GeneratorFunction")},t.mark=function(f){return Object.setPrototypeOf?Object.setPrototypeOf(f,E):(f.__proto__=E,u(f,c,"GeneratorFunction")),f.prototype=Object.create(q),f},t.awrap=function(f){return{__await:f}},V(J.prototype),u(J.prototype,l,function(){return this}),t.AsyncIterator=J,t.async=function(f,h,y,v,w){w===void 0&&(w=Promise);var M=new J(s(f,h,y,v),w);return t.isGeneratorFunction(h)?M:M.next().then(function(N){return N.done?N.value:M.next()})},V(q),u(q,c,"Generator"),u(q,a,function(){return this}),u(q,"toString",function(){return"[object Generator]"}),t.keys=function(f){var h=Object(f),y=[];for(var v in h)y.push(v);return y.reverse(),function w(){for(;y.length;){var M=y.pop();if(M in h)return w.value=M,w.done=!1,w}return w.done=!0,w}},t.values=D,z.prototype={constructor:z,reset:function(f){if(this.prev=0,this.next=0,this.sent=this._sent=e,this.done=!1,this.delegate=null,this.method="next",this.arg=e,this.tryEntries.forEach(C),!f)for(var h in this)h.charAt(0)==="t"&&r.call(this,h)&&!isNaN(+h.slice(1))&&(this[h]=e)},stop:function(){this.done=!0;var f=this.tryEntries[0].completion;if(f.type==="throw")throw f.arg;return this.rval},dispatchException:function(f){if(this.done)throw f;var h=this;function y(F,G){return M.type="throw",M.arg=f,h.next=F,G&&(h.method="next",h.arg=e),!!G}for(var v=this.tryEntries.length-1;v>=0;--v){var w=this.tryEntries[v],M=w.completion;if(w.tryLoc==="root")return y("end");if(w.tryLoc<=this.prev){var N=r.call(w,"catchLoc"),B=r.call(w,"finallyLoc");if(N&&B){if(this.prev<w.catchLoc)return y(w.catchLoc,!0);if(this.prev<w.finallyLoc)return y(w.finallyLoc)}else if(N){if(this.prev<w.catchLoc)return y(w.catchLoc,!0)}else{if(!B)throw new Error("try statement without catch or finally");if(this.prev<w.finallyLoc)return y(w.finallyLoc)}}}},abrupt:function(f,h){for(var y=this.tryEntries.length-1;y>=0;--y){var v=this.tryEntries[y];if(v.tryLoc<=this.prev&&r.call(v,"finallyLoc")&&this.prev<v.finallyLoc){var w=v;break}}w&&(f==="break"||f==="continue")&&w.tryLoc<=h&&h<=w.finallyLoc&&(w=null);var M=w?w.completion:{};return M.type=f,M.arg=h,w?(this.method="next",this.next=w.finallyLoc,$):this.complete(M)},complete:function(f,h){if(f.type==="throw")throw f.arg;return f.type==="break"||f.type==="continue"?this.next=f.arg:f.type==="return"?(this.rval=this.arg=f.arg,this.method="return",this.next="end"):f.type==="normal"&&h&&(this.next=h),$},finish:function(f){for(var h=this.tryEntries.length-1;h>=0;--h){var y=this.tryEntries[h];if(y.finallyLoc===f)return this.complete(y.completion,y.afterLoc),C(y),$}},catch:function(f){for(var h=this.tryEntries.length-1;h>=0;--h){var y=this.tryEntries[h];if(y.tryLoc===f){var v=y.completion;if(v.type==="throw"){var w=v.arg;C(y)}return w}}throw new Error("illegal catch attempt")},delegateYield:function(f,h,y){return this.delegate={iterator:D(f),resultName:h,nextLoc:y},this.method==="next"&&(this.arg=e),$}},t}function ut(e,t,n,r,o,i,a){try{var l=e[i](a),c=l.value}catch(u){n(u);return}l.done?t(c):Promise.resolve(c).then(r,o)}function dt(e){return function(){var t=this,n=arguments;return new Promise(function(r,o){var i=e.apply(t,n);function a(c){ut(i,r,o,a,l,"next",c)}function l(c){ut(i,r,o,a,l,"throw",c)}a(void 0)})}}function ir(e,t,n){return t=hr(t),t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function or(e,t){if(e==null)return{};var n={},r=Object.keys(e),o,i;for(i=0;i<r.length;i++)o=r[i],!(t.indexOf(o)>=0)&&(n[o]=e[o]);return n}function ar(e,t){if(e==null)return{};var n=or(e,t),r,o;if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(o=0;o<i.length;o++)r=i[o],!(t.indexOf(r)>=0)&&Object.prototype.propertyIsEnumerable.call(e,r)&&(n[r]=e[r])}return n}function oe(e,t){return cr(e)||rr(e,t)||Ut(e,t)||dr()}function Ft(e){return sr(e)||lr(e)||Ut(e)||ur()}function sr(e){if(Array.isArray(e))return He(e)}function cr(e){if(Array.isArray(e))return e}function lr(e){if(typeof Symbol<"u"&&e[Symbol.iterator]!=null||e["@@iterator"]!=null)return Array.from(e)}function Ut(e,t){if(e){if(typeof e=="string")return He(e,t);var n=Object.prototype.toString.call(e).slice(8,-1);if(n==="Object"&&e.constructor&&(n=e.constructor.name),n==="Map"||n==="Set")return Array.from(e);if(n==="Arguments"||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n))return He(e,t)}}function He(e,t){(t==null||t>e.length)&&(t=e.length);for(var n=0,r=new Array(t);n<t;n++)r[n]=e[n];return r}function ur(){throw new TypeError(`Invalid attempt to spread non-iterable instance.
In order to be iterable, non-array objects must have a [Symbol.iterator]() method.`)}function dr(){throw new TypeError(`Invalid attempt to destructure non-iterable instance.
In order to be iterable, non-array objects must have a [Symbol.iterator]() method.`)}function fr(e,t){if(typeof e!="object"||e===null)return e;var n=e[Symbol.toPrimitive];if(n!==void 0){var r=n.call(e,t||"default");if(typeof r!="object")return r;throw new TypeError("@@toPrimitive must return a primitive value.")}return(t==="string"?String:Number)(e)}function hr(e){var t=fr(e,"string");return typeof t=="symbol"?t:String(t)}var pr="data:image/gif;base64,R0lGODlhAQABAIAAAAAAAP///yH5BAEAAAAALAAAAAABAAEAAAIBRAA7";function Vt(e){var t=mr(e);return t&&(t=Ft(new Set(t)),t.forEach(function(n){e=Wt(e,n,Kt("",n))})),e}function Wt(e,t,n){return e.replace(new RegExp(t,"g"),n)}function mr(e){return e.match(/(?:[\u2700-\u27bf]|(?:\ud83c[\udde6-\uddff]){2}|[\ud800-\udbff][\udc00-\udfff])[\ufe0e\ufe0f]?(?:[\u0300-\u036f\ufe20-\ufe23\u20d0-\u20f0]|\ud83c[\udffb-\udfff])?(?:\u200d(?:[^\ud800-\udfff]|(?:\ud83c[\udde6-\uddff]){2}|[\ud800-\udbff][\udc00-\udfff])[\ufe0e\ufe0f]?(?:[\u0300-\u036f\ufe20-\ufe23\u20d0-\u20f0]|\ud83c[\udffb-\udfff])?)*/g)}function gr(e){var t,n=document.querySelector("em-emoji-picker");if(!n)return ft(e.native);var r=n==null||(t=n.shadowRoot)===null||t===void 0?void 0:t.querySelector('[title="'.concat(e.name,'"] > span > span'));if(!r)return ft(e.native);var o=Wt(r.style.cssText,'"',"'");return Kt(o,e.native)}function Kt(e,t){return'<img style="'.concat(e,'; display: inline-block" data-emoji="').concat(t,'" src="').concat(pr,'" />')}function ft(e){return'<span class="width: 18px; height: 18px; display: inline-block; margin: 0 1px;">'.concat(e,"</span>")}function Ce(e){var t=document.createElement("div");t.innerHTML=e;var n=Array.prototype.slice.call(t.querySelectorAll("img"));return n.forEach(function(r){t.innerHTML=t.innerHTML.replace(r.outerHTML,r.dataset.emoji)}),t.innerHTML}function vr(e){var t=window.getSelection();if(t!==null){for(var n=document.createElement("div"),r=0,o=t.rangeCount;r<o;++r)n.appendChild(t.getRangeAt(r).cloneContents());n=_r(n),e.clipboardData.setData("text",n.innerText),e.preventDefault()}}function br(e){var t,n;if(window.getSelection){if(t=window.getSelection(),t===null)return;if(t.getRangeAt&&t.rangeCount){n=t.getRangeAt(0),n.deleteContents();var r=document.createElement("div");r.innerHTML=e;for(var o=document.createDocumentFragment(),i,a;i=r.firstChild;)a=o.appendChild(i);n.insertNode(o),a&&(n=n.cloneRange(),n.setStartAfter(a),n.collapse(!0),t.removeAllRanges(),t.addRange(n))}}}function _r(e){var t=Array.prototype.slice.call(e.querySelectorAll("img"));return t.forEach(function(n){n.outerHTML=n.dataset.emoji}),e}function ht(e){var t=e.text,n=e.html,r=t.length,o=(n.match(/<img/g)||[]).length;return r+o}function xr(e){var t,n;document.createRange&&e.current&&(t=document.createRange(),t.selectNodeContents(e.current),t.collapse(!1),n=window.getSelection(),n&&(n.removeAllRanges(),n.addRange(t)))}function yr(e){var t=e.innerHTML.replace(/<br\s*\/?>/gi,"[BR]"),n=t.replace(/<[^>]+>/g,""),r=n.replace(/\[BR\]/gi,"</br>");return r}function qt(e){var t=x.useRef([]),n=x.useRef(""),r=x.useCallback(function(i){t.current.push(i)},[]),o=x.useCallback(function(i){var a=t.current.reduce(function(l,c){return c(l)},i);return a=wr(a,e),n.current=a,a},[]);return{addSanitizeFn:r,sanitize:o,sanitizedTextRef:n}}function wr(e,t){var n=document.createElement("div");n.innerHTML=e;var r;return t?r=yr(n):r=n.innerText||"",r=r.replace(/\n/gi,""),r}function kr(e){var t=e.ref,n=e.textInputRef,r=e.setValue,o=e.emitChange,i=qt(!1),a=i.sanitize,l=i.sanitizedTextRef;x.useImperativeHandle(t,function(){return{get value(){return l.current},set value(c){r(c)},focus:function(){n.current!==null&&n.current.focus()},blur:function(){n.current!==null&&a(n.current.html),o()}}})}function Cr(e,t,n){var r=x.useRef(null),o=x.useRef(n),i=x.useCallback(function(){if(e.current!==null){var l=r.current,c=e.current.size;(!l||l.width!==c.width||l.height!==c.height)&&typeof t=="function"&&t(c),r.current=c}},[t,e]),a=x.useCallback(function(l){typeof o.current=="function"&&o.current(l),typeof t=="function"&&i()},[i,t]);return x.useEffect(function(){e.current&&i()},[i,e]),a}var $r=["placeholder","style","tabIndex","className","onChange"],jr=function(t,n){var r=t.placeholder,o=t.style,i=t.tabIndex,a=t.className,l=t.onChange,c=ar(t,$r);x.useImperativeHandle(n,function(){return{appendContent:function(k){s.current&&s.current.focus(),br(k),s.current&&s.current.focus(),s.current&&u.current&&Ce(s.current.innerHTML)===""?u.current.style.visibility="visible":u.current&&(u.current.style.visibility="hidden"),s.current&&typeof l=="function"&&l(s.current.innerHTML)},set html(g){if(s.current&&(s.current.innerHTML=g),u.current){var k=Ce(g);k===""?u.current.style.visibility="visible":u.current.style.visibility="hidden"}typeof l=="function"&&s.current&&l(s.current.innerHTML)},get html(){return s.current?s.current.innerHTML:""},get text(){return s.current?s.current.innerText:""},get size(){return s.current?{width:s.current.offsetWidth,height:s.current.offsetHeight}:{width:0,height:0}},focus:function(){s.current&&s.current.focus()}}});var u=x.useRef(null),s=x.useRef(null);function b(g){if(g.key==="Enter"&&(g.shiftKey===!0||g.ctrlKey===!0)&&c.shouldReturn&&(g.preventDefault(),s.current)){s.current.innerHTML="".concat(s.current.innerHTML,"</br></br>"),xr(s);return}g.key==="Enter"?c.onEnter(g):g.key==="ArrowUp"?c.onArrowUp(g):g.key==="ArrowDown"?c.onArrowDown(g):g.key.length===1&&u.current&&(u.current.style.visibility="hidden"),c.onKeyDown(g)}function p(){c.onFocus()}function _(g){c.onKeyUp(g);var k=s.current;if(u.current&&k){var $=Ce(k.innerHTML);$===""?u.current.style.visibility="visible":u.current.style.visibility="hidden"}typeof l=="function"&&s.current&&l(s.current.innerHTML)}return A.createElement("div",{className:"react-input-emoji--container",style:o},A.createElement("div",{className:"react-input-emoji--wrapper",onClick:p},A.createElement("div",{ref:u,className:"react-input-emoji--placeholder"},r),A.createElement("div",{ref:s,onKeyDown:b,onKeyUp:_,tabIndex:i,contentEditable:!0,className:"react-input-emoji--input".concat(a?" ".concat(a):""),onBlur:c.onBlur,onCopy:c.onCopy,onPaste:c.onPaste,"data-testid":"react-input-emoji--input"})))},Sr=x.forwardRef(jr);function pt(e){var t=e.showPicker,n=e.toggleShowPicker,r=e.buttonElement,o=e.buttonRef,i=x.useRef(null),a=x.useState(!1),l=oe(a,2),c=l[0],u=l[1];return x.useEffect(function(){var s,b,p,_;((s=o==null||(b=o.current)===null||b===void 0||(b=b.childNodes)===null||b===void 0?void 0:b.length)!==null&&s!==void 0?s:0)>2?(i.current.appendChild(o.current.childNodes[0]),u(!0)):((p=r==null||(_=r.childNodes)===null||_===void 0?void 0:_.length)!==null&&p!==void 0?p:0)>2&&(i.current.appendChild(r==null?void 0:r.childNodes[0]),u(!0))},[r==null?void 0:r.childNodes]),A.createElement("button",{ref:i,type:"button",className:"react-input-emoji--button".concat(t?" react-input-emoji--button__show":""),onClick:n},!c&&A.createElement("svg",{xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 24 24",width:"24",height:"24",className:"react-input-emoji--button--icon"},A.createElement("path",{d:"M12 0C5.373 0 0 5.373 0 12s5.373 12 12 12 12-5.373 12-12S18.627 0 12 0m0 22C6.486 22 2 17.514 2 12S6.486 2 12 2s10 4.486 10 10-4.486 10-10 10"}),A.createElement("path",{d:"M8 7a2 2 0 1 0-.001 3.999A2 2 0 0 0 8 7M16 7a2 2 0 1 0-.001 3.999A2 2 0 0 0 16 7M15.232 15c-.693 1.195-1.87 2-3.349 2-1.477 0-2.655-.805-3.347-2H15m3-2H6a6 6 0 1 0 12 0"})))}function Gt(e){return e&&e.__esModule?e.default:e}function Q(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}var Te,S,Xt,be,Yt,mt,Me={},Jt=[],Er=/acit|ex(?:s|g|n|p|$)|rph|grid|ows|mnc|ntw|ine[ch]|zoo|^ord|itera/i;function se(e,t){for(var n in t)e[n]=t[n];return e}function Zt(e){var t=e.parentNode;t&&t.removeChild(e)}function Fe(e,t,n){var r,o,i,a={};for(i in t)i=="key"?r=t[i]:i=="ref"?o=t[i]:a[i]=t[i];if(arguments.length>2&&(a.children=arguments.length>3?Te.call(arguments,2):n),typeof e=="function"&&e.defaultProps!=null)for(i in e.defaultProps)a[i]===void 0&&(a[i]=e.defaultProps[i]);return $e(e,a,r,o,null)}function $e(e,t,n,r,o){var i={type:e,props:t,key:n,ref:r,__k:null,__:null,__b:0,__e:null,__d:void 0,__c:null,__h:null,constructor:void 0,__v:o??++Xt};return o==null&&S.vnode!=null&&S.vnode(i),i}function re(){return{current:null}}function fe(e){return e.children}function te(e,t){this.props=e,this.context=t}function he(e,t){if(t==null)return e.__?he(e.__,e.__.__k.indexOf(e)+1):null;for(var n;t<e.__k.length;t++)if((n=e.__k[t])!=null&&n.__e!=null)return n.__e;return typeof e.type=="function"?he(e):null}function Qt(e){var t,n;if((e=e.__)!=null&&e.__c!=null){for(e.__e=e.__c.base=null,t=0;t<e.__k.length;t++)if((n=e.__k[t])!=null&&n.__e!=null){e.__e=e.__c.base=n.__e;break}return Qt(e)}}function gt(e){(!e.__d&&(e.__d=!0)&&be.push(e)&&!Le.__r++||mt!==S.debounceRendering)&&((mt=S.debounceRendering)||Yt)(Le)}function Le(){for(var e;Le.__r=be.length;)e=be.sort(function(t,n){return t.__v.__b-n.__v.__b}),be=[],e.some(function(t){var n,r,o,i,a,l;t.__d&&(a=(i=(n=t).__v).__e,(l=n.__P)&&(r=[],(o=se({},i)).__v=i.__v+1,Ze(l,i,o,n.__n,l.ownerSVGElement!==void 0,i.__h!=null?[a]:null,r,a??he(i),i.__h),rn(r,i),i.__e!=a&&Qt(i)))})}function en(e,t,n,r,o,i,a,l,c,u){var s,b,p,_,g,k,$,j=r&&r.__k||Jt,L=j.length;for(n.__k=[],s=0;s<t.length;s++)if((_=n.__k[s]=(_=t[s])==null||typeof _=="boolean"?null:typeof _=="string"||typeof _=="number"||typeof _=="bigint"?$e(null,_,null,null,_):Array.isArray(_)?$e(fe,{children:_},null,null,null):_.__b>0?$e(_.type,_.props,_.key,null,_.__v):_)!=null){if(_.__=n,_.__b=n.__b+1,(p=j[s])===null||p&&_.key==p.key&&_.type===p.type)j[s]=void 0;else for(b=0;b<L;b++){if((p=j[b])&&_.key==p.key&&_.type===p.type){j[b]=void 0;break}p=null}Ze(e,_,p=p||Me,o,i,a,l,c,u),g=_.__e,(b=_.ref)&&p.ref!=b&&($||($=[]),p.ref&&$.push(p.ref,null,_),$.push(b,_.__c||g,_)),g!=null?(k==null&&(k=g),typeof _.type=="function"&&_.__k===p.__k?_.__d=c=tn(_,c,e):c=nn(e,_,p,j,g,c),typeof n.type=="function"&&(n.__d=c)):c&&p.__e==c&&c.parentNode!=e&&(c=he(p))}for(n.__e=k,s=L;s--;)j[s]!=null&&(typeof n.type=="function"&&j[s].__e!=null&&j[s].__e==n.__d&&(n.__d=he(r,s+1)),an(j[s],j[s]));if($)for(s=0;s<$.length;s++)on($[s],$[++s],$[++s])}function tn(e,t,n){for(var r,o=e.__k,i=0;o&&i<o.length;i++)(r=o[i])&&(r.__=e,t=typeof r.type=="function"?tn(r,t,n):nn(n,r,r,o,r.__e,t));return t}function Re(e,t){return t=t||[],e==null||typeof e=="boolean"||(Array.isArray(e)?e.some(function(n){Re(n,t)}):t.push(e)),t}function nn(e,t,n,r,o,i){var a,l,c;if(t.__d!==void 0)a=t.__d,t.__d=void 0;else if(n==null||o!=i||o.parentNode==null)e:if(i==null||i.parentNode!==e)e.appendChild(o),a=null;else{for(l=i,c=0;(l=l.nextSibling)&&c<r.length;c+=2)if(l==o)break e;e.insertBefore(o,i),a=i}return a!==void 0?a:o.nextSibling}function Mr(e,t,n,r,o){var i;for(i in n)i==="children"||i==="key"||i in t||ze(e,i,null,n[i],r);for(i in t)o&&typeof t[i]!="function"||i==="children"||i==="key"||i==="value"||i==="checked"||n[i]===t[i]||ze(e,i,t[i],n[i],r)}function vt(e,t,n){t[0]==="-"?e.setProperty(t,n):e[t]=n==null?"":typeof n!="number"||Er.test(t)?n:n+"px"}function ze(e,t,n,r,o){var i;e:if(t==="style")if(typeof n=="string")e.style.cssText=n;else{if(typeof r=="string"&&(e.style.cssText=r=""),r)for(t in r)n&&t in n||vt(e.style,t,"");if(n)for(t in n)r&&n[t]===r[t]||vt(e.style,t,n[t])}else if(t[0]==="o"&&t[1]==="n")i=t!==(t=t.replace(/Capture$/,"")),t=t.toLowerCase()in e?t.toLowerCase().slice(2):t.slice(2),e.l||(e.l={}),e.l[t+i]=n,n?r||e.addEventListener(t,i?_t:bt,i):e.removeEventListener(t,i?_t:bt,i);else if(t!=="dangerouslySetInnerHTML"){if(o)t=t.replace(/xlink[H:h]/,"h").replace(/sName$/,"s");else if(t!=="href"&&t!=="list"&&t!=="form"&&t!=="tabIndex"&&t!=="download"&&t in e)try{e[t]=n??"";break e}catch{}typeof n=="function"||(n!=null&&(n!==!1||t[0]==="a"&&t[1]==="r")?e.setAttribute(t,n):e.removeAttribute(t))}}function bt(e){this.l[e.type+!1](S.event?S.event(e):e)}function _t(e){this.l[e.type+!0](S.event?S.event(e):e)}function Ze(e,t,n,r,o,i,a,l,c){var u,s,b,p,_,g,k,$,j,L,E,R=t.type;if(t.constructor!==void 0)return null;n.__h!=null&&(c=n.__h,l=t.__e=n.__e,t.__h=null,i=[l]),(u=S.__b)&&u(t);try{e:if(typeof R=="function"){if($=t.props,j=(u=R.contextType)&&r[u.__c],L=u?j?j.props.value:u.__:r,n.__c?k=(s=t.__c=n.__c).__=s.__E:("prototype"in R&&R.prototype.render?t.__c=s=new R($,L):(t.__c=s=new te($,L),s.constructor=R,s.render=Rr),j&&j.sub(s),s.props=$,s.state||(s.state={}),s.context=L,s.__n=r,b=s.__d=!0,s.__h=[]),s.__s==null&&(s.__s=s.state),R.getDerivedStateFromProps!=null&&(s.__s==s.state&&(s.__s=se({},s.__s)),se(s.__s,R.getDerivedStateFromProps($,s.__s))),p=s.props,_=s.state,b)R.getDerivedStateFromProps==null&&s.componentWillMount!=null&&s.componentWillMount(),s.componentDidMount!=null&&s.__h.push(s.componentDidMount);else{if(R.getDerivedStateFromProps==null&&$!==p&&s.componentWillReceiveProps!=null&&s.componentWillReceiveProps($,L),!s.__e&&s.shouldComponentUpdate!=null&&s.shouldComponentUpdate($,s.__s,L)===!1||t.__v===n.__v){s.props=$,s.state=s.__s,t.__v!==n.__v&&(s.__d=!1),s.__v=t,t.__e=n.__e,t.__k=n.__k,t.__k.forEach(function(P){P&&(P.__=t)}),s.__h.length&&a.push(s);break e}s.componentWillUpdate!=null&&s.componentWillUpdate($,s.__s,L),s.componentDidUpdate!=null&&s.__h.push(function(){s.componentDidUpdate(p,_,g)})}s.context=L,s.props=$,s.state=s.__s,(u=S.__r)&&u(t),s.__d=!1,s.__v=t,s.__P=e,u=s.render(s.props,s.state,s.context),s.state=s.__s,s.getChildContext!=null&&(r=se(se({},r),s.getChildContext())),b||s.getSnapshotBeforeUpdate==null||(g=s.getSnapshotBeforeUpdate(p,_)),E=u!=null&&u.type===fe&&u.key==null?u.props.children:u,en(e,Array.isArray(E)?E:[E],t,n,r,o,i,a,l,c),s.base=t.__e,t.__h=null,s.__h.length&&a.push(s),k&&(s.__E=s.__=null),s.__e=!1}else i==null&&t.__v===n.__v?(t.__k=n.__k,t.__e=n.__e):t.__e=Lr(n.__e,t,n,r,o,i,a,c);(u=S.diffed)&&u(t)}catch(P){t.__v=null,(c||i!=null)&&(t.__e=l,t.__h=!!c,i[i.indexOf(l)]=null),S.__e(P,t,n)}}function rn(e,t){S.__c&&S.__c(t,e),e.some(function(n){try{e=n.__h,n.__h=[],e.some(function(r){r.call(n)})}catch(r){S.__e(r,n.__v)}})}function Lr(e,t,n,r,o,i,a,l){var c,u,s,b=n.props,p=t.props,_=t.type,g=0;if(_==="svg"&&(o=!0),i!=null){for(;g<i.length;g++)if((c=i[g])&&"setAttribute"in c==!!_&&(_?c.localName===_:c.nodeType===3)){e=c,i[g]=null;break}}if(e==null){if(_===null)return document.createTextNode(p);e=o?document.createElementNS("http://www.w3.org/2000/svg",_):document.createElement(_,p.is&&p),i=null,l=!1}if(_===null)b===p||l&&e.data===p||(e.data=p);else{if(i=i&&Te.call(e.childNodes),u=(b=n.props||Me).dangerouslySetInnerHTML,s=p.dangerouslySetInnerHTML,!l){if(i!=null)for(b={},g=0;g<e.attributes.length;g++)b[e.attributes[g].name]=e.attributes[g].value;(s||u)&&(s&&(u&&s.__html==u.__html||s.__html===e.innerHTML)||(e.innerHTML=s&&s.__html||""))}if(Mr(e,p,b,o,l),s)t.__k=[];else if(g=t.props.children,en(e,Array.isArray(g)?g:[g],t,n,r,o&&_!=="foreignObject",i,a,i?i[0]:n.__k&&he(n,0),l),i!=null)for(g=i.length;g--;)i[g]!=null&&Zt(i[g]);l||("value"in p&&(g=p.value)!==void 0&&(g!==b.value||g!==e.value||_==="progress"&&!g)&&ze(e,"value",g,b.value,!1),"checked"in p&&(g=p.checked)!==void 0&&g!==e.checked&&ze(e,"checked",g,b.checked,!1))}return e}function on(e,t,n){try{typeof e=="function"?e(t):e.current=t}catch(r){S.__e(r,n)}}function an(e,t,n){var r,o;if(S.unmount&&S.unmount(e),(r=e.ref)&&(r.current&&r.current!==e.__e||on(r,null,t)),(r=e.__c)!=null){if(r.componentWillUnmount)try{r.componentWillUnmount()}catch(i){S.__e(i,t)}r.base=r.__P=null}if(r=e.__k)for(o=0;o<r.length;o++)r[o]&&an(r[o],t,typeof e.type!="function");n||e.__e==null||Zt(e.__e),e.__e=e.__d=void 0}function Rr(e,t,n){return this.constructor(e,n)}function sn(e,t,n){var r,o,i;S.__&&S.__(e,t),o=(r=typeof n=="function")?null:n&&n.__k||t.__k,i=[],Ze(t,e=(!r&&n||t).__k=Fe(fe,null,[e]),o||Me,Me,t.ownerSVGElement!==void 0,!r&&n?[n]:o?null:t.firstChild?Te.call(t.childNodes):null,i,!r&&n?n:o?o.__e:t.firstChild,r),rn(i,e)}Te=Jt.slice,S={__e:function(e,t){for(var n,r,o;t=t.__;)if((n=t.__c)&&!n.__)try{if((r=n.constructor)&&r.getDerivedStateFromError!=null&&(n.setState(r.getDerivedStateFromError(e)),o=n.__d),n.componentDidCatch!=null&&(n.componentDidCatch(e),o=n.__d),o)return n.__E=n}catch(i){e=i}throw e}},Xt=0,te.prototype.setState=function(e,t){var n;n=this.__s!=null&&this.__s!==this.state?this.__s:this.__s=se({},this.state),typeof e=="function"&&(e=e(se({},n),this.props)),e&&se(n,e),e!=null&&this.__v&&(t&&this.__h.push(t),gt(this))},te.prototype.forceUpdate=function(e){this.__v&&(this.__e=!0,e&&this.__h.push(e),gt(this))},te.prototype.render=fe,be=[],Yt=typeof Promise=="function"?Promise.prototype.then.bind(Promise.resolve()):setTimeout,Le.__r=0;var zr=0;function m(e,t,n,r,o){var i,a,l={};for(a in t)a=="ref"?i=t[a]:l[a]=t[a];var c={type:e,props:l,key:n,ref:i,__k:null,__:null,__b:0,__e:null,__d:void 0,__c:null,__h:null,constructor:void 0,__v:--zr,__source:r,__self:o};if(typeof e=="function"&&(i=e.defaultProps))for(a in i)l[a]===void 0&&(l[a]=i[a]);return S.vnode&&S.vnode(c),c}function Ar(e,t){try{window.localStorage[`emoji-mart.${e}`]=JSON.stringify(t)}catch{}}function Pr(e){try{const t=window.localStorage[`emoji-mart.${e}`];if(t)return JSON.parse(t)}catch{}}var ce={set:Ar,get:Pr};const Ne=new Map,Tr=[{v:14,emoji:"🫠"},{v:13.1,emoji:"😶‍🌫️"},{v:13,emoji:"🥸"},{v:12.1,emoji:"🧑‍🦰"},{v:12,emoji:"🥱"},{v:11,emoji:"🥰"},{v:5,emoji:"🤩"},{v:4,emoji:"👱‍♀️"},{v:3,emoji:"🤣"},{v:2,emoji:"👋🏻"},{v:1,emoji:"🙃"}];function Dr(){for(const{v:e,emoji:t}of Tr)if(cn(t))return e}function Nr(){return!cn("🇨🇦")}function cn(e){if(Ne.has(e))return Ne.get(e);const t=Ir(e);return Ne.set(e,t),t}const Ir=(()=>{let e=null;try{navigator.userAgent.includes("jsdom")||(e=document.createElement("canvas").getContext("2d",{willReadFrequently:!0}))}catch{}if(!e)return()=>!1;const t=25,n=20,r=Math.floor(t/2);return e.font=r+"px Arial, Sans-Serif",e.textBaseline="top",e.canvas.width=n*2,e.canvas.height=t,o=>{e.clearRect(0,0,n*2,t),e.fillStyle="#FF0000",e.fillText(o,0,22),e.fillStyle="#0000FF",e.fillText(o,n,22);const i=e.getImageData(0,0,n,t).data,a=i.length;let l=0;for(;l<a&&!i[l+3];l+=4);if(l>=a)return!1;const c=n+l/4%n,u=Math.floor(l/4/n),s=e.getImageData(c,u,1,1).data;return!(i[l]!==s[0]||i[l+2]!==s[2]||e.measureText(o).width>=n)}})();var xt={latestVersion:Dr,noCountryFlags:Nr};const Ue=["+1","grinning","kissing_heart","heart_eyes","laughing","stuck_out_tongue_winking_eye","sweat_smile","joy","scream","disappointed","unamused","weary","sob","sunglasses","heart"];let W=null;function Or(e){W||(W=ce.get("frequently")||{});const t=e.id||e;t&&(W[t]||(W[t]=0),W[t]+=1,ce.set("last",t),ce.set("frequently",W))}function Br({maxFrequentRows:e,perLine:t}){if(!e)return[];W||(W=ce.get("frequently"));let n=[];if(!W){W={};for(let i in Ue.slice(0,t)){const a=Ue[i];W[a]=t-i,n.push(a)}return n}const r=e*t,o=ce.get("last");for(let i in W)n.push(i);if(n.sort((i,a)=>{const l=W[a],c=W[i];return l==c?i.localeCompare(a):l-c}),n.length>r){const i=n.slice(r);n=n.slice(0,r);for(let a of i)a!=o&&delete W[a];o&&n.indexOf(o)==-1&&(delete W[n[n.length-1]],n.splice(-1,1,o)),ce.set("frequently",W)}return n}var ln={add:Or,get:Br,DEFAULTS:Ue},un={};un=JSON.parse('{"search":"Search","search_no_results_1":"Oh no!","search_no_results_2":"That emoji couldn’t be found","pick":"Pick an emoji…","add_custom":"Add custom emoji","categories":{"activity":"Activity","custom":"Custom","flags":"Flags","foods":"Food & Drink","frequent":"Frequently used","nature":"Animals & Nature","objects":"Objects","people":"Smileys & People","places":"Travel & Places","search":"Search Results","symbols":"Symbols"},"skins":{"1":"Default","2":"Light","3":"Medium-Light","4":"Medium","5":"Medium-Dark","6":"Dark","choose":"Choose default skin tone"}}');var ie={autoFocus:{value:!1},dynamicWidth:{value:!1},emojiButtonColors:{value:null},emojiButtonRadius:{value:"100%"},emojiButtonSize:{value:36},emojiSize:{value:24},emojiVersion:{value:14,choices:[1,2,3,4,5,11,12,12.1,13,13.1,14]},exceptEmojis:{value:[]},icons:{value:"auto",choices:["auto","outline","solid"]},locale:{value:"en",choices:["en","ar","be","cs","de","es","fa","fi","fr","hi","it","ja","kr","nl","pl","pt","ru","sa","tr","uk","vi","zh"]},maxFrequentRows:{value:4},navPosition:{value:"top",choices:["top","bottom","none"]},noCountryFlags:{value:!1},noResultsEmoji:{value:null},perLine:{value:9},previewEmoji:{value:null},previewPosition:{value:"bottom",choices:["top","bottom","none"]},searchPosition:{value:"sticky",choices:["sticky","static","none"]},set:{value:"native",choices:["native","apple","facebook","google","twitter"]},skin:{value:1,choices:[1,2,3,4,5,6]},skinTonePosition:{value:"preview",choices:["preview","search","none"]},theme:{value:"auto",choices:["auto","light","dark"]},categories:null,categoryIcons:null,custom:null,data:null,i18n:null,getImageURL:null,getSpritesheetURL:null,onAddCustomEmoji:null,onClickOutside:null,onEmojiSelect:null,stickySearch:{deprecated:!0,value:!0}};let K=null,T=null;const Ie={};async function yt(e){if(Ie[e])return Ie[e];const n=await(await fetch(e)).json();return Ie[e]=n,n}let Oe=null,dn=null,fn=!1;function De(e,{caller:t}={}){return Oe||(Oe=new Promise(n=>{dn=n})),e?Hr(e):t&&!fn&&console.warn(`\`${t}\` requires data to be initialized first. Promise will be pending until \`init\` is called.`),Oe}async function Hr(e){fn=!0;let{emojiVersion:t,set:n,locale:r}=e;if(t||(t=ie.emojiVersion.value),n||(n=ie.set.value),r||(r=ie.locale.value),T)T.categories=T.categories.filter(c=>!c.name);else{T=(typeof e.data=="function"?await e.data():e.data)||await yt(`https://cdn.jsdelivr.net/npm/@emoji-mart/data@latest/sets/${t}/${n}.json`),T.emoticons={},T.natives={},T.categories.unshift({id:"frequent",emojis:[]});for(const c in T.aliases){const u=T.aliases[c],s=T.emojis[u];s&&(s.aliases||(s.aliases=[]),s.aliases.push(c))}T.originalCategories=T.categories}if(K=(typeof e.i18n=="function"?await e.i18n():e.i18n)||(r=="en"?Gt(un):await yt(`https://cdn.jsdelivr.net/npm/@emoji-mart/data@latest/i18n/${r}.json`)),e.custom)for(let c in e.custom){c=parseInt(c);const u=e.custom[c],s=e.custom[c-1];if(!(!u.emojis||!u.emojis.length)){u.id||(u.id=`custom_${c+1}`),u.name||(u.name=K.categories.custom),s&&!u.icon&&(u.target=s.target||s),T.categories.push(u);for(const b of u.emojis)T.emojis[b.id]=b}}e.categories&&(T.categories=T.originalCategories.filter(c=>e.categories.indexOf(c.id)!=-1).sort((c,u)=>{const s=e.categories.indexOf(c.id),b=e.categories.indexOf(u.id);return s-b}));let o=null,i=null;n=="native"&&(o=xt.latestVersion(),i=e.noCountryFlags||xt.noCountryFlags());let a=T.categories.length,l=!1;for(;a--;){const c=T.categories[a];if(c.id=="frequent"){let{maxFrequentRows:b,perLine:p}=e;b=b>=0?b:ie.maxFrequentRows.value,p||(p=ie.perLine.value),c.emojis=ln.get({maxFrequentRows:b,perLine:p})}if(!c.emojis||!c.emojis.length){T.categories.splice(a,1);continue}const{categoryIcons:u}=e;if(u){const b=u[c.id];b&&!c.icon&&(c.icon=b)}let s=c.emojis.length;for(;s--;){const b=c.emojis[s],p=b.id?b:T.emojis[b],_=()=>{c.emojis.splice(s,1)};if(!p||e.exceptEmojis&&e.exceptEmojis.includes(p.id)){_();continue}if(o&&p.version>o){_();continue}if(i&&c.id=="flags"&&!Kr.includes(p.id)){_();continue}if(!p.search){if(l=!0,p.search=","+[[p.id,!1],[p.name,!0],[p.keywords,!1],[p.emoticons,!1]].map(([k,$])=>{if(k)return(Array.isArray(k)?k:[k]).map(j=>($?j.split(/[-|_|\s]+/):[j]).map(L=>L.toLowerCase())).flat()}).flat().filter(k=>k&&k.trim()).join(","),p.emoticons)for(const k of p.emoticons)T.emoticons[k]||(T.emoticons[k]=p.id);let g=0;for(const k of p.skins){if(!k)continue;g++;const{native:$}=k;$&&(T.natives[$]=p.id,p.search+=`,${$}`);const j=g==1?"":`:skin-tone-${g}:`;k.shortcodes=`:${p.id}:${j}`}}}}l&&de.reset(),dn()}function hn(e,t,n){e||(e={});const r={};for(let o in t)r[o]=pn(o,e,t,n);return r}function pn(e,t,n,r){const o=n[e];let i=r&&r.getAttribute(e)||(t[e]!=null&&t[e]!=null?t[e]:null);return o&&(i!=null&&o.value&&typeof o.value!=typeof i&&(typeof o.value=="boolean"?i=i!="false":i=o.value.constructor(i)),o.transform&&i&&(i=o.transform(i)),(i==null||o.choices&&o.choices.indexOf(i)==-1)&&(i=o.value)),i}const Fr=/^(?:\:([^\:]+)\:)(?:\:skin-tone-(\d)\:)?$/;let Ve=null;function Ur(e){return e.id?e:T.emojis[e]||T.emojis[T.aliases[e]]||T.emojis[T.natives[e]]}function Vr(){Ve=null}async function Wr(e,{maxResults:t,caller:n}={}){if(!e||!e.trim().length)return null;t||(t=90),await De(null,{caller:n||"SearchIndex.search"});const r=e.toLowerCase().replace(/(\w)-/,"$1 ").split(/[\s|,]+/).filter((l,c,u)=>l.trim()&&u.indexOf(l)==c);if(!r.length)return;let o=Ve||(Ve=Object.values(T.emojis)),i,a;for(const l of r){if(!o.length)break;i=[],a={};for(const c of o){if(!c.search)continue;const u=c.search.indexOf(`,${l}`);u!=-1&&(i.push(c),a[c.id]||(a[c.id]=0),a[c.id]+=c.id==l?0:u+1)}o=i}return i.length<2||(i.sort((l,c)=>{const u=a[l.id],s=a[c.id];return u==s?l.id.localeCompare(c.id):u-s}),i.length>t&&(i=i.slice(0,t))),i}var de={search:Wr,get:Ur,reset:Vr,SHORTCODES_REGEX:Fr};const Kr=["checkered_flag","crossed_flags","pirate_flag","rainbow-flag","transgender_flag","triangular_flag_on_post","waving_black_flag","waving_white_flag"];function qr(e,t){return Array.isArray(e)&&Array.isArray(t)&&e.length===t.length&&e.every((n,r)=>n==t[r])}async function Gr(e=1){for(let t in[...Array(e).keys()])await new Promise(requestAnimationFrame)}function Xr(e,{skinIndex:t=0}={}){const n=e.skins[t]||(()=>(t=0,e.skins[t]))(),r={id:e.id,name:e.name,native:n.native,unified:n.unified,keywords:e.keywords,shortcodes:n.shortcodes||e.shortcodes};return e.skins.length>1&&(r.skin=t+1),n.src&&(r.src=n.src),e.aliases&&e.aliases.length&&(r.aliases=e.aliases),e.emoticons&&e.emoticons.length&&(r.emoticons=e.emoticons),r}const Yr={activity:{outline:m("svg",{xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 24 24",children:m("path",{d:"M12 0C5.373 0 0 5.372 0 12c0 6.627 5.373 12 12 12 6.628 0 12-5.373 12-12 0-6.628-5.372-12-12-12m9.949 11H17.05c.224-2.527 1.232-4.773 1.968-6.113A9.966 9.966 0 0 1 21.949 11M13 11V2.051a9.945 9.945 0 0 1 4.432 1.564c-.858 1.491-2.156 4.22-2.392 7.385H13zm-2 0H8.961c-.238-3.165-1.536-5.894-2.393-7.385A9.95 9.95 0 0 1 11 2.051V11zm0 2v8.949a9.937 9.937 0 0 1-4.432-1.564c.857-1.492 2.155-4.221 2.393-7.385H11zm4.04 0c.236 3.164 1.534 5.893 2.392 7.385A9.92 9.92 0 0 1 13 21.949V13h2.04zM4.982 4.887C5.718 6.227 6.726 8.473 6.951 11h-4.9a9.977 9.977 0 0 1 2.931-6.113M2.051 13h4.9c-.226 2.527-1.233 4.771-1.969 6.113A9.972 9.972 0 0 1 2.051 13m16.967 6.113c-.735-1.342-1.744-3.586-1.968-6.113h4.899a9.961 9.961 0 0 1-2.931 6.113"})}),solid:m("svg",{xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 512 512",children:m("path",{d:"M16.17 337.5c0 44.98 7.565 83.54 13.98 107.9C35.22 464.3 50.46 496 174.9 496c9.566 0 19.59-.4707 29.84-1.271L17.33 307.3C16.53 317.6 16.17 327.7 16.17 337.5zM495.8 174.5c0-44.98-7.565-83.53-13.98-107.9c-4.688-17.54-18.34-31.23-36.04-35.95C435.5 27.91 392.9 16 337 16c-9.564 0-19.59 .4707-29.84 1.271l187.5 187.5C495.5 194.4 495.8 184.3 495.8 174.5zM26.77 248.8l236.3 236.3c142-36.1 203.9-150.4 222.2-221.1L248.9 26.87C106.9 62.96 45.07 177.2 26.77 248.8zM256 335.1c0 9.141-7.474 16-16 16c-4.094 0-8.188-1.564-11.31-4.689L164.7 283.3C161.6 280.2 160 276.1 160 271.1c0-8.529 6.865-16 16-16c4.095 0 8.189 1.562 11.31 4.688l64.01 64C254.4 327.8 256 331.9 256 335.1zM304 287.1c0 9.141-7.474 16-16 16c-4.094 0-8.188-1.564-11.31-4.689L212.7 235.3C209.6 232.2 208 228.1 208 223.1c0-9.141 7.473-16 16-16c4.094 0 8.188 1.562 11.31 4.688l64.01 64.01C302.5 279.8 304 283.9 304 287.1zM256 175.1c0-9.141 7.473-16 16-16c4.094 0 8.188 1.562 11.31 4.688l64.01 64.01c3.125 3.125 4.688 7.219 4.688 11.31c0 9.133-7.468 16-16 16c-4.094 0-8.189-1.562-11.31-4.688l-64.01-64.01C257.6 184.2 256 180.1 256 175.1z"})})},custom:m("svg",{xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 448 512",children:m("path",{d:"M417.1 368c-5.937 10.27-16.69 16-27.75 16c-5.422 0-10.92-1.375-15.97-4.281L256 311.4V448c0 17.67-14.33 32-31.1 32S192 465.7 192 448V311.4l-118.3 68.29C68.67 382.6 63.17 384 57.75 384c-11.06 0-21.81-5.734-27.75-16c-8.828-15.31-3.594-34.88 11.72-43.72L159.1 256L41.72 187.7C26.41 178.9 21.17 159.3 29.1 144C36.63 132.5 49.26 126.7 61.65 128.2C65.78 128.7 69.88 130.1 73.72 132.3L192 200.6V64c0-17.67 14.33-32 32-32S256 46.33 256 64v136.6l118.3-68.29c3.838-2.213 7.939-3.539 12.07-4.051C398.7 126.7 411.4 132.5 417.1 144c8.828 15.31 3.594 34.88-11.72 43.72L288 256l118.3 68.28C421.6 333.1 426.8 352.7 417.1 368z"})}),flags:{outline:m("svg",{xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 24 24",children:m("path",{d:"M0 0l6.084 24H8L1.916 0zM21 5h-4l-1-4H4l3 12h3l1 4h13L21 5zM6.563 3h7.875l2 8H8.563l-2-8zm8.832 10l-2.856 1.904L12.063 13h3.332zM19 13l-1.5-6h1.938l2 8H16l3-2z"})}),solid:m("svg",{xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 512 512",children:m("path",{d:"M64 496C64 504.8 56.75 512 48 512h-32C7.25 512 0 504.8 0 496V32c0-17.75 14.25-32 32-32s32 14.25 32 32V496zM476.3 0c-6.365 0-13.01 1.35-19.34 4.233c-45.69 20.86-79.56 27.94-107.8 27.94c-59.96 0-94.81-31.86-163.9-31.87C160.9 .3055 131.6 4.867 96 15.75v350.5c32-9.984 59.87-14.1 84.85-14.1c73.63 0 124.9 31.78 198.6 31.78c31.91 0 68.02-5.971 111.1-23.09C504.1 355.9 512 344.4 512 332.1V30.73C512 11.1 495.3 0 476.3 0z"})})},foods:{outline:m("svg",{xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 24 24",children:m("path",{d:"M17 4.978c-1.838 0-2.876.396-3.68.934.513-1.172 1.768-2.934 4.68-2.934a1 1 0 0 0 0-2c-2.921 0-4.629 1.365-5.547 2.512-.064.078-.119.162-.18.244C11.73 1.838 10.798.023 9.207.023 8.579.022 7.85.306 7 .978 5.027 2.54 5.329 3.902 6.492 4.999 3.609 5.222 0 7.352 0 12.969c0 4.582 4.961 11.009 9 11.009 1.975 0 2.371-.486 3-1 .629.514 1.025 1 3 1 4.039 0 9-6.418 9-11 0-5.953-4.055-8-7-8M8.242 2.546c.641-.508.943-.523.965-.523.426.169.975 1.405 1.357 3.055-1.527-.629-2.741-1.352-2.98-1.846.059-.112.241-.356.658-.686M15 21.978c-1.08 0-1.21-.109-1.559-.402l-.176-.146c-.367-.302-.816-.452-1.266-.452s-.898.15-1.266.452l-.176.146c-.347.292-.477.402-1.557.402-2.813 0-7-5.389-7-9.009 0-5.823 4.488-5.991 5-5.991 1.939 0 2.484.471 3.387 1.251l.323.276a1.995 1.995 0 0 0 2.58 0l.323-.276c.902-.78 1.447-1.251 3.387-1.251.512 0 5 .168 5 6 0 3.617-4.187 9-7 9"})}),solid:m("svg",{xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 512 512",children:m("path",{d:"M481.9 270.1C490.9 279.1 496 291.3 496 304C496 316.7 490.9 328.9 481.9 337.9C472.9 346.9 460.7 352 448 352H64C51.27 352 39.06 346.9 30.06 337.9C21.06 328.9 16 316.7 16 304C16 291.3 21.06 279.1 30.06 270.1C39.06 261.1 51.27 256 64 256H448C460.7 256 472.9 261.1 481.9 270.1zM475.3 388.7C478.3 391.7 480 395.8 480 400V416C480 432.1 473.3 449.3 461.3 461.3C449.3 473.3 432.1 480 416 480H96C79.03 480 62.75 473.3 50.75 461.3C38.74 449.3 32 432.1 32 416V400C32 395.8 33.69 391.7 36.69 388.7C39.69 385.7 43.76 384 48 384H464C468.2 384 472.3 385.7 475.3 388.7zM50.39 220.8C45.93 218.6 42.03 215.5 38.97 211.6C35.91 207.7 33.79 203.2 32.75 198.4C31.71 193.5 31.8 188.5 32.99 183.7C54.98 97.02 146.5 32 256 32C365.5 32 457 97.02 479 183.7C480.2 188.5 480.3 193.5 479.2 198.4C478.2 203.2 476.1 207.7 473 211.6C469.1 215.5 466.1 218.6 461.6 220.8C457.2 222.9 452.3 224 447.3 224H64.67C59.73 224 54.84 222.9 50.39 220.8zM372.7 116.7C369.7 119.7 368 123.8 368 128C368 131.2 368.9 134.3 370.7 136.9C372.5 139.5 374.1 141.6 377.9 142.8C380.8 143.1 384 144.3 387.1 143.7C390.2 143.1 393.1 141.6 395.3 139.3C397.6 137.1 399.1 134.2 399.7 131.1C400.3 128 399.1 124.8 398.8 121.9C397.6 118.1 395.5 116.5 392.9 114.7C390.3 112.9 387.2 111.1 384 111.1C379.8 111.1 375.7 113.7 372.7 116.7V116.7zM244.7 84.69C241.7 87.69 240 91.76 240 96C240 99.16 240.9 102.3 242.7 104.9C244.5 107.5 246.1 109.6 249.9 110.8C252.8 111.1 256 112.3 259.1 111.7C262.2 111.1 265.1 109.6 267.3 107.3C269.6 105.1 271.1 102.2 271.7 99.12C272.3 96.02 271.1 92.8 270.8 89.88C269.6 86.95 267.5 84.45 264.9 82.7C262.3 80.94 259.2 79.1 256 79.1C251.8 79.1 247.7 81.69 244.7 84.69V84.69zM116.7 116.7C113.7 119.7 112 123.8 112 128C112 131.2 112.9 134.3 114.7 136.9C116.5 139.5 118.1 141.6 121.9 142.8C124.8 143.1 128 144.3 131.1 143.7C134.2 143.1 137.1 141.6 139.3 139.3C141.6 137.1 143.1 134.2 143.7 131.1C144.3 128 143.1 124.8 142.8 121.9C141.6 118.1 139.5 116.5 136.9 114.7C134.3 112.9 131.2 111.1 128 111.1C123.8 111.1 119.7 113.7 116.7 116.7L116.7 116.7z"})})},frequent:{outline:m("svg",{xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 24 24",children:[m("path",{d:"M13 4h-2l-.001 7H9v2h2v2h2v-2h4v-2h-4z"}),m("path",{d:"M12 0C5.373 0 0 5.373 0 12s5.373 12 12 12 12-5.373 12-12S18.627 0 12 0m0 22C6.486 22 2 17.514 2 12S6.486 2 12 2s10 4.486 10 10-4.486 10-10 10"})]}),solid:m("svg",{xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 512 512",children:m("path",{d:"M256 512C114.6 512 0 397.4 0 256C0 114.6 114.6 0 256 0C397.4 0 512 114.6 512 256C512 397.4 397.4 512 256 512zM232 256C232 264 236 271.5 242.7 275.1L338.7 339.1C349.7 347.3 364.6 344.3 371.1 333.3C379.3 322.3 376.3 307.4 365.3 300L280 243.2V120C280 106.7 269.3 96 255.1 96C242.7 96 231.1 106.7 231.1 120L232 256z"})})},nature:{outline:m("svg",{xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 24 24",children:[m("path",{d:"M15.5 8a1.5 1.5 0 1 0 .001 3.001A1.5 1.5 0 0 0 15.5 8M8.5 8a1.5 1.5 0 1 0 .001 3.001A1.5 1.5 0 0 0 8.5 8"}),m("path",{d:"M18.933 0h-.027c-.97 0-2.138.787-3.018 1.497-1.274-.374-2.612-.51-3.887-.51-1.285 0-2.616.133-3.874.517C7.245.79 6.069 0 5.093 0h-.027C3.352 0 .07 2.67.002 7.026c-.039 2.479.276 4.238 1.04 5.013.254.258.882.677 1.295.882.191 3.177.922 5.238 2.536 6.38.897.637 2.187.949 3.2 1.102C8.04 20.6 8 20.795 8 21c0 1.773 2.35 3 4 3 1.648 0 4-1.227 4-3 0-.201-.038-.393-.072-.586 2.573-.385 5.435-1.877 5.925-7.587.396-.22.887-.568 1.104-.788.763-.774 1.079-2.534 1.04-5.013C23.929 2.67 20.646 0 18.933 0M3.223 9.135c-.237.281-.837 1.155-.884 1.238-.15-.41-.368-1.349-.337-3.291.051-3.281 2.478-4.972 3.091-5.031.256.015.731.27 1.265.646-1.11 1.171-2.275 2.915-2.352 5.125-.133.546-.398.858-.783 1.313M12 22c-.901 0-1.954-.693-2-1 0-.654.475-1.236 1-1.602V20a1 1 0 1 0 2 0v-.602c.524.365 1 .947 1 1.602-.046.307-1.099 1-2 1m3-3.48v.02a4.752 4.752 0 0 0-1.262-1.02c1.092-.516 2.239-1.334 2.239-2.217 0-1.842-1.781-2.195-3.977-2.195-2.196 0-3.978.354-3.978 2.195 0 .883 1.148 1.701 2.238 2.217A4.8 4.8 0 0 0 9 18.539v-.025c-1-.076-2.182-.281-2.973-.842-1.301-.92-1.838-3.045-1.853-6.478l.023-.041c.496-.826 1.49-1.45 1.804-3.102 0-2.047 1.357-3.631 2.362-4.522C9.37 3.178 10.555 3 11.948 3c1.447 0 2.685.192 3.733.57 1 .9 2.316 2.465 2.316 4.48.313 1.651 1.307 2.275 1.803 3.102.035.058.068.117.102.178-.059 5.967-1.949 7.01-4.902 7.19m6.628-8.202c-.037-.065-.074-.13-.113-.195a7.587 7.587 0 0 0-.739-.987c-.385-.455-.648-.768-.782-1.313-.076-2.209-1.241-3.954-2.353-5.124.531-.376 1.004-.63 1.261-.647.636.071 3.044 1.764 3.096 5.031.027 1.81-.347 3.218-.37 3.235"})]}),solid:m("svg",{xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 576 512",children:m("path",{d:"M332.7 19.85C334.6 8.395 344.5 0 356.1 0C363.6 0 370.6 3.52 375.1 9.502L392 32H444.1C456.8 32 469.1 37.06 478.1 46.06L496 64H552C565.3 64 576 74.75 576 88V112C576 156.2 540.2 192 496 192H426.7L421.6 222.5L309.6 158.5L332.7 19.85zM448 64C439.2 64 432 71.16 432 80C432 88.84 439.2 96 448 96C456.8 96 464 88.84 464 80C464 71.16 456.8 64 448 64zM416 256.1V480C416 497.7 401.7 512 384 512H352C334.3 512 320 497.7 320 480V364.8C295.1 377.1 268.8 384 240 384C211.2 384 184 377.1 160 364.8V480C160 497.7 145.7 512 128 512H96C78.33 512 64 497.7 64 480V249.8C35.23 238.9 12.64 214.5 4.836 183.3L.9558 167.8C-3.331 150.6 7.094 133.2 24.24 128.1C41.38 124.7 58.76 135.1 63.05 152.2L66.93 167.8C70.49 182 83.29 191.1 97.97 191.1H303.8L416 256.1z"})})},objects:{outline:m("svg",{xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 24 24",children:[m("path",{d:"M12 0a9 9 0 0 0-5 16.482V21s2.035 3 5 3 5-3 5-3v-4.518A9 9 0 0 0 12 0zm0 2c3.86 0 7 3.141 7 7s-3.14 7-7 7-7-3.141-7-7 3.14-7 7-7zM9 17.477c.94.332 1.946.523 3 .523s2.06-.19 3-.523v.834c-.91.436-1.925.689-3 .689a6.924 6.924 0 0 1-3-.69v-.833zm.236 3.07A8.854 8.854 0 0 0 12 21c.965 0 1.888-.167 2.758-.451C14.155 21.173 13.153 22 12 22c-1.102 0-2.117-.789-2.764-1.453z"}),m("path",{d:"M14.745 12.449h-.004c-.852-.024-1.188-.858-1.577-1.824-.421-1.061-.703-1.561-1.182-1.566h-.009c-.481 0-.783.497-1.235 1.537-.436.982-.801 1.811-1.636 1.791l-.276-.043c-.565-.171-.853-.691-1.284-1.794-.125-.313-.202-.632-.27-.913-.051-.213-.127-.53-.195-.634C7.067 9.004 7.039 9 6.99 9A1 1 0 0 1 7 7h.01c1.662.017 2.015 1.373 2.198 2.134.486-.981 1.304-2.058 2.797-2.075 1.531.018 2.28 1.153 2.731 2.141l.002-.008C14.944 8.424 15.327 7 16.979 7h.032A1 1 0 1 1 17 9h-.011c-.149.076-.256.474-.319.709a6.484 6.484 0 0 1-.311.951c-.429.973-.79 1.789-1.614 1.789"})]}),solid:m("svg",{xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 384 512",children:m("path",{d:"M112.1 454.3c0 6.297 1.816 12.44 5.284 17.69l17.14 25.69c5.25 7.875 17.17 14.28 26.64 14.28h61.67c9.438 0 21.36-6.401 26.61-14.28l17.08-25.68c2.938-4.438 5.348-12.37 5.348-17.7L272 415.1h-160L112.1 454.3zM191.4 .0132C89.44 .3257 16 82.97 16 175.1c0 44.38 16.44 84.84 43.56 115.8c16.53 18.84 42.34 58.23 52.22 91.45c.0313 .25 .0938 .5166 .125 .7823h160.2c.0313-.2656 .0938-.5166 .125-.7823c9.875-33.22 35.69-72.61 52.22-91.45C351.6 260.8 368 220.4 368 175.1C368 78.61 288.9-.2837 191.4 .0132zM192 96.01c-44.13 0-80 35.89-80 79.1C112 184.8 104.8 192 96 192S80 184.8 80 176c0-61.76 50.25-111.1 112-111.1c8.844 0 16 7.159 16 16S200.8 96.01 192 96.01z"})})},people:{outline:m("svg",{xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 24 24",children:[m("path",{d:"M12 0C5.373 0 0 5.373 0 12s5.373 12 12 12 12-5.373 12-12S18.627 0 12 0m0 22C6.486 22 2 17.514 2 12S6.486 2 12 2s10 4.486 10 10-4.486 10-10 10"}),m("path",{d:"M8 7a2 2 0 1 0-.001 3.999A2 2 0 0 0 8 7M16 7a2 2 0 1 0-.001 3.999A2 2 0 0 0 16 7M15.232 15c-.693 1.195-1.87 2-3.349 2-1.477 0-2.655-.805-3.347-2H15m3-2H6a6 6 0 1 0 12 0"})]}),solid:m("svg",{xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 512 512",children:m("path",{d:"M0 256C0 114.6 114.6 0 256 0C397.4 0 512 114.6 512 256C512 397.4 397.4 512 256 512C114.6 512 0 397.4 0 256zM256 432C332.1 432 396.2 382 415.2 314.1C419.1 300.4 407.8 288 393.6 288H118.4C104.2 288 92.92 300.4 96.76 314.1C115.8 382 179.9 432 256 432V432zM176.4 160C158.7 160 144.4 174.3 144.4 192C144.4 209.7 158.7 224 176.4 224C194 224 208.4 209.7 208.4 192C208.4 174.3 194 160 176.4 160zM336.4 224C354 224 368.4 209.7 368.4 192C368.4 174.3 354 160 336.4 160C318.7 160 304.4 174.3 304.4 192C304.4 209.7 318.7 224 336.4 224z"})})},places:{outline:m("svg",{xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 24 24",children:[m("path",{d:"M6.5 12C5.122 12 4 13.121 4 14.5S5.122 17 6.5 17 9 15.879 9 14.5 7.878 12 6.5 12m0 3c-.275 0-.5-.225-.5-.5s.225-.5.5-.5.5.225.5.5-.225.5-.5.5M17.5 12c-1.378 0-2.5 1.121-2.5 2.5s1.122 2.5 2.5 2.5 2.5-1.121 2.5-2.5-1.122-2.5-2.5-2.5m0 3c-.275 0-.5-.225-.5-.5s.225-.5.5-.5.5.225.5.5-.225.5-.5.5"}),m("path",{d:"M22.482 9.494l-1.039-.346L21.4 9h.6c.552 0 1-.439 1-.992 0-.006-.003-.008-.003-.008H23c0-1-.889-2-1.984-2h-.642l-.731-1.717C19.262 3.012 18.091 2 16.764 2H7.236C5.909 2 4.738 3.012 4.357 4.283L3.626 6h-.642C1.889 6 1 7 1 8h.003S1 8.002 1 8.008C1 8.561 1.448 9 2 9h.6l-.043.148-1.039.346a2.001 2.001 0 0 0-1.359 2.097l.751 7.508a1 1 0 0 0 .994.901H3v1c0 1.103.896 2 2 2h2c1.104 0 2-.897 2-2v-1h6v1c0 1.103.896 2 2 2h2c1.104 0 2-.897 2-2v-1h1.096a.999.999 0 0 0 .994-.901l.751-7.508a2.001 2.001 0 0 0-1.359-2.097M6.273 4.857C6.402 4.43 6.788 4 7.236 4h9.527c.448 0 .834.43.963.857L19.313 9H4.688l1.585-4.143zM7 21H5v-1h2v1zm12 0h-2v-1h2v1zm2.189-3H2.811l-.662-6.607L3 11h18l.852.393L21.189 18z"})]}),solid:m("svg",{xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 512 512",children:m("path",{d:"M39.61 196.8L74.8 96.29C88.27 57.78 124.6 32 165.4 32H346.6C387.4 32 423.7 57.78 437.2 96.29L472.4 196.8C495.6 206.4 512 229.3 512 256V448C512 465.7 497.7 480 480 480H448C430.3 480 416 465.7 416 448V400H96V448C96 465.7 81.67 480 64 480H32C14.33 480 0 465.7 0 448V256C0 229.3 16.36 206.4 39.61 196.8V196.8zM109.1 192H402.9L376.8 117.4C372.3 104.6 360.2 96 346.6 96H165.4C151.8 96 139.7 104.6 135.2 117.4L109.1 192zM96 256C78.33 256 64 270.3 64 288C64 305.7 78.33 320 96 320C113.7 320 128 305.7 128 288C128 270.3 113.7 256 96 256zM416 320C433.7 320 448 305.7 448 288C448 270.3 433.7 256 416 256C398.3 256 384 270.3 384 288C384 305.7 398.3 320 416 320z"})})},symbols:{outline:m("svg",{xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 24 24",children:m("path",{d:"M0 0h11v2H0zM4 11h3V6h4V4H0v2h4zM15.5 17c1.381 0 2.5-1.116 2.5-2.493s-1.119-2.493-2.5-2.493S13 13.13 13 14.507 14.119 17 15.5 17m0-2.986c.276 0 .5.222.5.493 0 .272-.224.493-.5.493s-.5-.221-.5-.493.224-.493.5-.493M21.5 19.014c-1.381 0-2.5 1.116-2.5 2.493S20.119 24 21.5 24s2.5-1.116 2.5-2.493-1.119-2.493-2.5-2.493m0 2.986a.497.497 0 0 1-.5-.493c0-.271.224-.493.5-.493s.5.222.5.493a.497.497 0 0 1-.5.493M22 13l-9 9 1.513 1.5 8.99-9.009zM17 11c2.209 0 4-1.119 4-2.5V2s.985-.161 1.498.949C23.01 4.055 23 6 23 6s1-1.119 1-3.135C24-.02 21 0 21 0h-2v6.347A5.853 5.853 0 0 0 17 6c-2.209 0-4 1.119-4 2.5s1.791 2.5 4 2.5M10.297 20.482l-1.475-1.585a47.54 47.54 0 0 1-1.442 1.129c-.307-.288-.989-1.016-2.045-2.183.902-.836 1.479-1.466 1.729-1.892s.376-.871.376-1.336c0-.592-.273-1.178-.818-1.759-.546-.581-1.329-.871-2.349-.871-1.008 0-1.79.293-2.344.879-.556.587-.832 1.181-.832 1.784 0 .813.419 1.748 1.256 2.805-.847.614-1.444 1.208-1.794 1.784a3.465 3.465 0 0 0-.523 1.833c0 .857.308 1.56.924 2.107.616.549 1.423.823 2.42.823 1.173 0 2.444-.379 3.813-1.137L8.235 24h2.819l-2.09-2.383 1.333-1.135zm-6.736-6.389a1.02 1.02 0 0 1 .73-.286c.31 0 .559.085.747.254a.849.849 0 0 1 .283.659c0 .518-.419 1.112-1.257 1.784-.536-.651-.805-1.231-.805-1.742a.901.901 0 0 1 .302-.669M3.74 22c-.427 0-.778-.116-1.057-.349-.279-.232-.418-.487-.418-.766 0-.594.509-1.288 1.527-2.083.968 1.134 1.717 1.946 2.248 2.438-.921.507-1.686.76-2.3.76"})}),solid:m("svg",{xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 512 512",children:m("path",{d:"M500.3 7.251C507.7 13.33 512 22.41 512 31.1V175.1C512 202.5 483.3 223.1 447.1 223.1C412.7 223.1 383.1 202.5 383.1 175.1C383.1 149.5 412.7 127.1 447.1 127.1V71.03L351.1 90.23V207.1C351.1 234.5 323.3 255.1 287.1 255.1C252.7 255.1 223.1 234.5 223.1 207.1C223.1 181.5 252.7 159.1 287.1 159.1V63.1C287.1 48.74 298.8 35.61 313.7 32.62L473.7 .6198C483.1-1.261 492.9 1.173 500.3 7.251H500.3zM74.66 303.1L86.5 286.2C92.43 277.3 102.4 271.1 113.1 271.1H174.9C185.6 271.1 195.6 277.3 201.5 286.2L213.3 303.1H239.1C266.5 303.1 287.1 325.5 287.1 351.1V463.1C287.1 490.5 266.5 511.1 239.1 511.1H47.1C21.49 511.1-.0019 490.5-.0019 463.1V351.1C-.0019 325.5 21.49 303.1 47.1 303.1H74.66zM143.1 359.1C117.5 359.1 95.1 381.5 95.1 407.1C95.1 434.5 117.5 455.1 143.1 455.1C170.5 455.1 191.1 434.5 191.1 407.1C191.1 381.5 170.5 359.1 143.1 359.1zM440.3 367.1H496C502.7 367.1 508.6 372.1 510.1 378.4C513.3 384.6 511.6 391.7 506.5 396L378.5 508C372.9 512.1 364.6 513.3 358.6 508.9C352.6 504.6 350.3 496.6 353.3 489.7L391.7 399.1H336C329.3 399.1 323.4 395.9 321 389.6C318.7 383.4 320.4 376.3 325.5 371.1L453.5 259.1C459.1 255 467.4 254.7 473.4 259.1C479.4 263.4 481.6 271.4 478.7 278.3L440.3 367.1zM116.7 219.1L19.85 119.2C-8.112 90.26-6.614 42.31 24.85 15.34C51.82-8.137 93.26-3.642 118.2 21.83L128.2 32.32L137.7 21.83C162.7-3.642 203.6-8.137 231.6 15.34C262.6 42.31 264.1 90.26 236.1 119.2L139.7 219.1C133.2 225.6 122.7 225.6 116.7 219.1H116.7z"})})}},Jr={loupe:m("svg",{xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 20 20",children:m("path",{d:"M12.9 14.32a8 8 0 1 1 1.41-1.41l5.35 5.33-1.42 1.42-5.33-5.34zM8 14A6 6 0 1 0 8 2a6 6 0 0 0 0 12z"})}),delete:m("svg",{xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 20 20",children:m("path",{d:"M10 8.586L2.929 1.515 1.515 2.929 8.586 10l-7.071 7.071 1.414 1.414L10 11.414l7.071 7.071 1.414-1.414L11.414 10l7.071-7.071-1.414-1.414L10 8.586z"})})};var Ae={categories:Yr,search:Jr};function We(e){let{id:t,skin:n,emoji:r}=e;if(e.shortcodes){const l=e.shortcodes.match(de.SHORTCODES_REGEX);l&&(t=l[1],l[2]&&(n=l[2]))}if(r||(r=de.get(t||e.native)),!r)return e.fallback;const o=r.skins[n-1]||r.skins[0],i=o.src||(e.set!="native"&&!e.spritesheet?typeof e.getImageURL=="function"?e.getImageURL(e.set,o.unified):`https://cdn.jsdelivr.net/npm/emoji-datasource-${e.set}@14.0.0/img/${e.set}/64/${o.unified}.png`:void 0),a=typeof e.getSpritesheetURL=="function"?e.getSpritesheetURL(e.set):`https://cdn.jsdelivr.net/npm/emoji-datasource-${e.set}@14.0.0/img/${e.set}/sheets-256/64.png`;return m("span",{class:"emoji-mart-emoji","data-emoji-set":e.set,children:i?m("img",{style:{maxWidth:e.size||"1em",maxHeight:e.size||"1em",display:"inline-block"},alt:o.native||o.shortcodes,src:i}):e.set=="native"?m("span",{style:{fontSize:e.size,fontFamily:'"EmojiMart", "Segoe UI Emoji", "Segoe UI Symbol", "Segoe UI", "Apple Color Emoji", "Twemoji Mozilla", "Noto Color Emoji", "Android Emoji"'},children:o.native}):m("span",{style:{display:"block",width:e.size,height:e.size,backgroundImage:`url(${a})`,backgroundSize:`${100*T.sheet.cols}% ${100*T.sheet.rows}%`,backgroundPosition:`${100/(T.sheet.cols-1)*o.x}% ${100/(T.sheet.rows-1)*o.y}%`}})})}const Zr=typeof window<"u"&&window.HTMLElement?window.HTMLElement:Object;class mn extends Zr{static get observedAttributes(){return Object.keys(this.Props)}update(t={}){for(let n in t)this.attributeChangedCallback(n,null,t[n])}attributeChangedCallback(t,n,r){if(!this.component)return;const o=pn(t,{[t]:r},this.constructor.Props,this);this.component.componentWillReceiveProps?this.component.componentWillReceiveProps({[t]:o}):(this.component.props[t]=o,this.component.forceUpdate())}disconnectedCallback(){this.disconnected=!0,this.component&&this.component.unregister&&this.component.unregister()}constructor(t={}){if(super(),this.props=t,t.parent||t.ref){let n=null;const r=t.parent||(n=t.ref&&t.ref.current);n&&(n.innerHTML=""),r&&r.appendChild(this)}}}class Qr extends mn{setShadow(){this.attachShadow({mode:"open"})}injectStyles(t){if(!t)return;const n=document.createElement("style");n.textContent=t,this.shadowRoot.insertBefore(n,this.shadowRoot.firstChild)}constructor(t,{styles:n}={}){super(t),this.setShadow(),this.injectStyles(n)}}var gn={fallback:"",id:"",native:"",shortcodes:"",size:{value:"",transform:e=>/\D/.test(e)?e:`${e}px`},set:ie.set,skin:ie.skin};class vn extends mn{async connectedCallback(){const t=hn(this.props,gn,this);t.element=this,t.ref=n=>{this.component=n},await De(),!this.disconnected&&sn(m(We,{...t}),this)}constructor(t){super(t)}}Q(vn,"Props",gn);typeof customElements<"u"&&!customElements.get("em-emoji")&&customElements.define("em-emoji",vn);var wt,Ke=[],kt=S.__b,Ct=S.__r,$t=S.diffed,jt=S.__c,St=S.unmount;function ei(){var e;for(Ke.sort(function(t,n){return t.__v.__b-n.__v.__b});e=Ke.pop();)if(e.__P)try{e.__H.__h.forEach(je),e.__H.__h.forEach(qe),e.__H.__h=[]}catch(t){e.__H.__h=[],S.__e(t,e.__v)}}S.__b=function(e){kt&&kt(e)},S.__r=function(e){Ct&&Ct(e);var t=e.__c.__H;t&&(t.__h.forEach(je),t.__h.forEach(qe),t.__h=[])},S.diffed=function(e){$t&&$t(e);var t=e.__c;t&&t.__H&&t.__H.__h.length&&(Ke.push(t)!==1&&wt===S.requestAnimationFrame||((wt=S.requestAnimationFrame)||function(n){var r,o=function(){clearTimeout(i),Et&&cancelAnimationFrame(r),setTimeout(n)},i=setTimeout(o,100);Et&&(r=requestAnimationFrame(o))})(ei))},S.__c=function(e,t){t.some(function(n){try{n.__h.forEach(je),n.__h=n.__h.filter(function(r){return!r.__||qe(r)})}catch(r){t.some(function(o){o.__h&&(o.__h=[])}),t=[],S.__e(r,n.__v)}}),jt&&jt(e,t)},S.unmount=function(e){St&&St(e);var t,n=e.__c;n&&n.__H&&(n.__H.__.forEach(function(r){try{je(r)}catch(o){t=o}}),t&&S.__e(t,n.__v))};var Et=typeof requestAnimationFrame=="function";function je(e){var t=e.__c;typeof t=="function"&&(e.__c=void 0,t())}function qe(e){e.__c=e.__()}function ti(e,t){for(var n in t)e[n]=t[n];return e}function Mt(e,t){for(var n in e)if(n!=="__source"&&!(n in t))return!0;for(var r in t)if(r!=="__source"&&e[r]!==t[r])return!0;return!1}function Pe(e){this.props=e}(Pe.prototype=new te).isPureReactComponent=!0,Pe.prototype.shouldComponentUpdate=function(e,t){return Mt(this.props,e)||Mt(this.state,t)};var Lt=S.__b;S.__b=function(e){e.type&&e.type.__f&&e.ref&&(e.props.ref=e.ref,e.ref=null),Lt&&Lt(e)};var ni=S.__e;S.__e=function(e,t,n){if(e.then){for(var r,o=t;o=o.__;)if((r=o.__c)&&r.__c)return t.__e==null&&(t.__e=n.__e,t.__k=n.__k),r.__c(e,t)}ni(e,t,n)};var Rt=S.unmount;function Be(){this.__u=0,this.t=null,this.__b=null}function bn(e){var t=e.__.__c;return t&&t.__e&&t.__e(e)}function ye(){this.u=null,this.o=null}S.unmount=function(e){var t=e.__c;t&&t.__R&&t.__R(),t&&e.__h===!0&&(e.type=null),Rt&&Rt(e)},(Be.prototype=new te).__c=function(e,t){var n=t.__c,r=this;r.t==null&&(r.t=[]),r.t.push(n);var o=bn(r.__v),i=!1,a=function(){i||(i=!0,n.__R=null,o?o(l):l())};n.__R=a;var l=function(){if(!--r.__u){if(r.state.__e){var u=r.state.__e;r.__v.__k[0]=function b(p,_,g){return p&&(p.__v=null,p.__k=p.__k&&p.__k.map(function(k){return b(k,_,g)}),p.__c&&p.__c.__P===_&&(p.__e&&g.insertBefore(p.__e,p.__d),p.__c.__e=!0,p.__c.__P=g)),p}(u,u.__c.__P,u.__c.__O)}var s;for(r.setState({__e:r.__b=null});s=r.t.pop();)s.forceUpdate()}},c=t.__h===!0;r.__u++||c||r.setState({__e:r.__b=r.__v.__k[0]}),e.then(a,a)},Be.prototype.componentWillUnmount=function(){this.t=[]},Be.prototype.render=function(e,t){if(this.__b){if(this.__v.__k){var n=document.createElement("div"),r=this.__v.__k[0].__c;this.__v.__k[0]=function i(a,l,c){return a&&(a.__c&&a.__c.__H&&(a.__c.__H.__.forEach(function(u){typeof u.__c=="function"&&u.__c()}),a.__c.__H=null),(a=ti({},a)).__c!=null&&(a.__c.__P===c&&(a.__c.__P=l),a.__c=null),a.__k=a.__k&&a.__k.map(function(u){return i(u,l,c)})),a}(this.__b,n,r.__O=r.__P)}this.__b=null}var o=t.__e&&Fe(fe,null,e.fallback);return o&&(o.__h=null),[Fe(fe,null,t.__e?null:e.children),o]};var zt=function(e,t,n){if(++n[1]===n[0]&&e.o.delete(t),e.props.revealOrder&&(e.props.revealOrder[0]!=="t"||!e.o.size))for(n=e.u;n;){for(;n.length>3;)n.pop()();if(n[1]<n[0])break;e.u=n=n[2]}};(ye.prototype=new te).__e=function(e){var t=this,n=bn(t.__v),r=t.o.get(e);return r[0]++,function(o){var i=function(){t.props.revealOrder?(r.push(o),zt(t,e,r)):o()};n?n(i):i()}},ye.prototype.render=function(e){this.u=null,this.o=new Map;var t=Re(e.children);e.revealOrder&&e.revealOrder[0]==="b"&&t.reverse();for(var n=t.length;n--;)this.o.set(t[n],this.u=[1,0,this.u]);return e.children},ye.prototype.componentDidUpdate=ye.prototype.componentDidMount=function(){var e=this;this.o.forEach(function(t,n){zt(e,n,t)})};var ri=typeof Symbol<"u"&&Symbol.for&&Symbol.for("react.element")||60103,ii=/^(?:accent|alignment|arabic|baseline|cap|clip(?!PathU)|color|dominant|fill|flood|font|glyph(?!R)|horiz|marker(?!H|W|U)|overline|paint|stop|strikethrough|stroke|text(?!L)|underline|unicode|units|v|vector|vert|word|writing|x(?!C))[A-Z]/,oi=typeof document<"u",ai=function(e){return(typeof Symbol<"u"&&typeof Symbol()=="symbol"?/fil|che|rad/i:/fil|che|ra/i).test(e)};te.prototype.isReactComponent={},["componentWillMount","componentWillReceiveProps","componentWillUpdate"].forEach(function(e){Object.defineProperty(te.prototype,e,{configurable:!0,get:function(){return this["UNSAFE_"+e]},set:function(t){Object.defineProperty(this,e,{configurable:!0,writable:!0,value:t})}})});var At=S.event;function si(){}function ci(){return this.cancelBubble}function li(){return this.defaultPrevented}S.event=function(e){return At&&(e=At(e)),e.persist=si,e.isPropagationStopped=ci,e.isDefaultPrevented=li,e.nativeEvent=e};var Pt={configurable:!0,get:function(){return this.class}},Tt=S.vnode;S.vnode=function(e){var t=e.type,n=e.props,r=n;if(typeof t=="string"){var o=t.indexOf("-")===-1;for(var i in r={},n){var a=n[i];oi&&i==="children"&&t==="noscript"||i==="value"&&"defaultValue"in n&&a==null||(i==="defaultValue"&&"value"in n&&n.value==null?i="value":i==="download"&&a===!0?a="":/ondoubleclick/i.test(i)?i="ondblclick":/^onchange(textarea|input)/i.test(i+t)&&!ai(n.type)?i="oninput":/^onfocus$/i.test(i)?i="onfocusin":/^onblur$/i.test(i)?i="onfocusout":/^on(Ani|Tra|Tou|BeforeInp)/.test(i)?i=i.toLowerCase():o&&ii.test(i)?i=i.replace(/[A-Z0-9]/,"-$&").toLowerCase():a===null&&(a=void 0),r[i]=a)}t=="select"&&r.multiple&&Array.isArray(r.value)&&(r.value=Re(n.children).forEach(function(l){l.props.selected=r.value.indexOf(l.props.value)!=-1})),t=="select"&&r.defaultValue!=null&&(r.value=Re(n.children).forEach(function(l){l.props.selected=r.multiple?r.defaultValue.indexOf(l.props.value)!=-1:r.defaultValue==l.props.value})),e.props=r,n.class!=n.className&&(Pt.enumerable="className"in n,n.className!=null&&(r.class=n.className),Object.defineProperty(r,"className",Pt))}e.$$typeof=ri,Tt&&Tt(e)};var Dt=S.__r;S.__r=function(e){Dt&&Dt(e),e.__c};const ui={light:"outline",dark:"solid"};class di extends Pe{renderIcon(t){const{icon:n}=t;if(n){if(n.svg)return m("span",{class:"flex",dangerouslySetInnerHTML:{__html:n.svg}});if(n.src)return m("img",{src:n.src})}const r=Ae.categories[t.id]||Ae.categories.custom,o=this.props.icons=="auto"?ui[this.props.theme]:this.props.icons;return r[o]||r}render(){let t=null;return m("nav",{id:"nav",class:"padding","data-position":this.props.position,dir:this.props.dir,children:m("div",{class:"flex relative",children:[this.categories.map((n,r)=>{const o=n.name||K.categories[n.id],i=!this.props.unfocused&&n.id==this.state.categoryId;return i&&(t=r),m("button",{"aria-label":o,"aria-selected":i||void 0,title:o,type:"button",class:"flex flex-grow flex-center",onMouseDown:a=>a.preventDefault(),onClick:()=>{this.props.onClick({category:n,i:r})},children:this.renderIcon(n)})}),m("div",{class:"bar",style:{width:`${100/this.categories.length}%`,opacity:t==null?0:1,transform:this.props.dir==="rtl"?`scaleX(-1) translateX(${t*100}%)`:`translateX(${t*100}%)`}})]})})}constructor(){super(),this.categories=T.categories.filter(t=>!t.target),this.state={categoryId:this.categories[0].id}}}class fi extends Pe{shouldComponentUpdate(t){for(let n in t)if(n!="children"&&t[n]!=this.props[n])return!0;return!1}render(){return this.props.children}}const we={rowsPerRender:10};class hi extends te{getInitialState(t=this.props){return{skin:ce.get("skin")||t.skin,theme:this.initTheme(t.theme)}}componentWillMount(){this.dir=K.rtl?"rtl":"ltr",this.refs={menu:re(),navigation:re(),scroll:re(),search:re(),searchInput:re(),skinToneButton:re(),skinToneRadio:re()},this.initGrid(),this.props.stickySearch==!1&&this.props.searchPosition=="sticky"&&(console.warn("[EmojiMart] Deprecation warning: `stickySearch` has been renamed `searchPosition`."),this.props.searchPosition="static")}componentDidMount(){if(this.register(),this.shadowRoot=this.base.parentNode,this.props.autoFocus){const{searchInput:t}=this.refs;t.current&&t.current.focus()}}componentWillReceiveProps(t){this.nextState||(this.nextState={});for(const n in t)this.nextState[n]=t[n];clearTimeout(this.nextStateTimer),this.nextStateTimer=setTimeout(()=>{let n=!1;for(const o in this.nextState)this.props[o]=this.nextState[o],(o==="custom"||o==="categories")&&(n=!0);delete this.nextState;const r=this.getInitialState();if(n)return this.reset(r);this.setState(r)})}componentWillUnmount(){this.unregister()}async reset(t={}){await De(this.props),this.initGrid(),this.unobserve(),this.setState(t,()=>{this.observeCategories(),this.observeRows()})}register(){document.addEventListener("click",this.handleClickOutside),this.observe()}unregister(){document.removeEventListener("click",this.handleClickOutside),this.unobserve()}observe(){this.observeCategories(),this.observeRows()}unobserve({except:t=[]}={}){Array.isArray(t)||(t=[t]);for(const n of this.observers)t.includes(n)||n.disconnect();this.observers=[].concat(t)}initGrid(){const{categories:t}=T;this.refs.categories=new Map;const n=T.categories.map(o=>o.id).join(",");this.navKey&&this.navKey!=n&&this.refs.scroll.current&&(this.refs.scroll.current.scrollTop=0),this.navKey=n,this.grid=[],this.grid.setsize=0;const r=(o,i)=>{const a=[];a.__categoryId=i.id,a.__index=o.length,this.grid.push(a);const l=this.grid.length-1,c=l%we.rowsPerRender?{}:re();return c.index=l,c.posinset=this.grid.setsize+1,o.push(c),a};for(let o of t){const i=[];let a=r(i,o);for(let l of o.emojis)a.length==this.getPerLine()&&(a=r(i,o)),this.grid.setsize+=1,a.push(l);this.refs.categories.set(o.id,{root:re(),rows:i})}}initTheme(t){if(t!="auto")return t;if(!this.darkMedia){if(this.darkMedia=matchMedia("(prefers-color-scheme: dark)"),this.darkMedia.media.match(/^not/))return"light";this.darkMedia.addListener(()=>{this.props.theme=="auto"&&this.setState({theme:this.darkMedia.matches?"dark":"light"})})}return this.darkMedia.matches?"dark":"light"}initDynamicPerLine(t=this.props){if(!t.dynamicWidth)return;const{element:n,emojiButtonSize:r}=t,o=()=>{const{width:a}=n.getBoundingClientRect();return Math.floor(a/r)},i=new ResizeObserver(()=>{this.unobserve({except:i}),this.setState({perLine:o()},()=>{this.initGrid(),this.forceUpdate(()=>{this.observeCategories(),this.observeRows()})})});return i.observe(n),this.observers.push(i),o()}getPerLine(){return this.state.perLine||this.props.perLine}getEmojiByPos([t,n]){const r=this.state.searchResults||this.grid,o=r[t]&&r[t][n];if(o)return de.get(o)}observeCategories(){const t=this.refs.navigation.current;if(!t)return;const n=new Map,r=a=>{a!=t.state.categoryId&&t.setState({categoryId:a})},o={root:this.refs.scroll.current,threshold:[0,1]},i=new IntersectionObserver(a=>{for(const c of a){const u=c.target.dataset.id;n.set(u,c.intersectionRatio)}const l=[...n];for(const[c,u]of l)if(u){r(c);break}},o);for(const{root:a}of this.refs.categories.values())i.observe(a.current);this.observers.push(i)}observeRows(){const t={...this.state.visibleRows},n=new IntersectionObserver(r=>{for(const o of r){const i=parseInt(o.target.dataset.index);o.isIntersecting?t[i]=!0:delete t[i]}this.setState({visibleRows:t})},{root:this.refs.scroll.current,rootMargin:`${this.props.emojiButtonSize*(we.rowsPerRender+5)}px 0px ${this.props.emojiButtonSize*we.rowsPerRender}px`});for(const{rows:r}of this.refs.categories.values())for(const o of r)o.current&&n.observe(o.current);this.observers.push(n)}preventDefault(t){t.preventDefault()}unfocusSearch(){const t=this.refs.searchInput.current;t&&t.blur()}navigate({e:t,input:n,left:r,right:o,up:i,down:a}){const l=this.state.searchResults||this.grid;if(!l.length)return;let[c,u]=this.state.pos;const s=(()=>{if(c==0&&u==0&&!t.repeat&&(r||i))return null;if(c==-1)return!t.repeat&&(o||a)&&n.selectionStart==n.value.length?[0,0]:null;if(r||o){let b=l[c];const p=r?-1:1;if(u+=p,!b[u]){if(c+=p,b=l[c],!b)return c=r?0:l.length-1,u=r?0:l[c].length-1,[c,u];u=r?b.length-1:0}return[c,u]}if(i||a){c+=i?-1:1;const b=l[c];return b?(b[u]||(u=b.length-1),[c,u]):(c=i?0:l.length-1,u=i?0:l[c].length-1,[c,u])}})();if(s)t.preventDefault();else{this.state.pos[0]>-1&&this.setState({pos:[-1,-1]});return}this.setState({pos:s,keyboard:!0},()=>{this.scrollTo({row:s[0]})})}scrollTo({categoryId:t,row:n}){const r=this.state.searchResults||this.grid;if(!r.length)return;const o=this.refs.scroll.current,i=o.getBoundingClientRect();let a=0;if(n>=0&&(t=r[n].__categoryId),t&&(a=(this.refs[t]||this.refs.categories.get(t).root).current.getBoundingClientRect().top-(i.top-o.scrollTop)+1),n>=0)if(!n)a=0;else{const l=r[n].__index,c=a+l*this.props.emojiButtonSize,u=c+this.props.emojiButtonSize+this.props.emojiButtonSize*.88;if(c<o.scrollTop)a=c;else if(u>o.scrollTop+i.height)a=u-i.height;else return}this.ignoreMouse(),o.scrollTop=a}ignoreMouse(){this.mouseIsIgnored=!0,clearTimeout(this.ignoreMouseTimer),this.ignoreMouseTimer=setTimeout(()=>{delete this.mouseIsIgnored},100)}handleEmojiOver(t){this.mouseIsIgnored||this.state.showSkins||this.setState({pos:t||[-1,-1],keyboard:!1})}handleEmojiClick({e:t,emoji:n,pos:r}){if(this.props.onEmojiSelect&&(!n&&r&&(n=this.getEmojiByPos(r)),n)){const o=Xr(n,{skinIndex:this.state.skin-1});this.props.maxFrequentRows&&ln.add(o,this.props),this.props.onEmojiSelect(o,t)}}closeSkins(){this.state.showSkins&&(this.setState({showSkins:null,tempSkin:null}),this.base.removeEventListener("click",this.handleBaseClick),this.base.removeEventListener("keydown",this.handleBaseKeydown))}handleSkinMouseOver(t){this.setState({tempSkin:t})}handleSkinClick(t){this.ignoreMouse(),this.closeSkins(),this.setState({skin:t,tempSkin:null}),ce.set("skin",t)}renderNav(){return m(di,{ref:this.refs.navigation,icons:this.props.icons,theme:this.state.theme,dir:this.dir,unfocused:!!this.state.searchResults,position:this.props.navPosition,onClick:this.handleCategoryClick},this.navKey)}renderPreview(){const t=this.getEmojiByPos(this.state.pos),n=this.state.searchResults&&!this.state.searchResults.length;return m("div",{id:"preview",class:"flex flex-middle",dir:this.dir,"data-position":this.props.previewPosition,children:[m("div",{class:"flex flex-middle flex-grow",children:[m("div",{class:"flex flex-auto flex-middle flex-center",style:{height:this.props.emojiButtonSize,fontSize:this.props.emojiButtonSize},children:m(We,{emoji:t,id:n?this.props.noResultsEmoji||"cry":this.props.previewEmoji||(this.props.previewPosition=="top"?"point_down":"point_up"),set:this.props.set,size:this.props.emojiButtonSize,skin:this.state.tempSkin||this.state.skin,spritesheet:!0,getSpritesheetURL:this.props.getSpritesheetURL})}),m("div",{class:`margin-${this.dir[0]}`,children:t||n?m("div",{class:`padding-${this.dir[2]} align-${this.dir[0]}`,children:[m("div",{class:"preview-title ellipsis",children:t?t.name:K.search_no_results_1}),m("div",{class:"preview-subtitle ellipsis color-c",children:t?t.skins[0].shortcodes:K.search_no_results_2})]}):m("div",{class:"preview-placeholder color-c",children:K.pick})})]}),!t&&this.props.skinTonePosition=="preview"&&this.renderSkinToneButton()]})}renderEmojiButton(t,{pos:n,posinset:r,grid:o}){const i=this.props.emojiButtonSize,a=this.state.tempSkin||this.state.skin,c=(t.skins[a-1]||t.skins[0]).native,u=qr(this.state.pos,n),s=n.concat(t.id).join("");return m(fi,{selected:u,skin:a,size:i,children:m("button",{"aria-label":c,"aria-selected":u||void 0,"aria-posinset":r,"aria-setsize":o.setsize,"data-keyboard":this.state.keyboard,title:this.props.previewPosition=="none"?t.name:void 0,type:"button",class:"flex flex-center flex-middle",tabindex:"-1",onClick:b=>this.handleEmojiClick({e:b,emoji:t}),onMouseEnter:()=>this.handleEmojiOver(n),onMouseLeave:()=>this.handleEmojiOver(),style:{width:this.props.emojiButtonSize,height:this.props.emojiButtonSize,fontSize:this.props.emojiSize,lineHeight:0},children:[m("div",{"aria-hidden":"true",class:"background",style:{borderRadius:this.props.emojiButtonRadius,backgroundColor:this.props.emojiButtonColors?this.props.emojiButtonColors[(r-1)%this.props.emojiButtonColors.length]:void 0}}),m(We,{emoji:t,set:this.props.set,size:this.props.emojiSize,skin:a,spritesheet:!0,getSpritesheetURL:this.props.getSpritesheetURL})]})},s)}renderSearch(){const t=this.props.previewPosition=="none"||this.props.skinTonePosition=="search";return m("div",{children:[m("div",{class:"spacer"}),m("div",{class:"flex flex-middle",children:[m("div",{class:"search relative flex-grow",children:[m("input",{type:"search",ref:this.refs.searchInput,placeholder:K.search,onClick:this.handleSearchClick,onInput:this.handleSearchInput,onKeyDown:this.handleSearchKeyDown,autoComplete:"off"}),m("span",{class:"icon loupe flex",children:Ae.search.loupe}),this.state.searchResults&&m("button",{title:"Clear","aria-label":"Clear",type:"button",class:"icon delete flex",onClick:this.clearSearch,onMouseDown:this.preventDefault,children:Ae.search.delete})]}),t&&this.renderSkinToneButton()]})]})}renderSearchResults(){const{searchResults:t}=this.state;return t?m("div",{class:"category",ref:this.refs.search,children:[m("div",{class:`sticky padding-small align-${this.dir[0]}`,children:K.categories.search}),m("div",{children:t.length?t.map((n,r)=>m("div",{class:"flex",children:n.map((o,i)=>this.renderEmojiButton(o,{pos:[r,i],posinset:r*this.props.perLine+i+1,grid:t}))})):m("div",{class:`padding-small align-${this.dir[0]}`,children:this.props.onAddCustomEmoji&&m("a",{onClick:this.props.onAddCustomEmoji,children:K.add_custom})})})]}):null}renderCategories(){const{categories:t}=T,n=!!this.state.searchResults,r=this.getPerLine();return m("div",{style:{visibility:n?"hidden":void 0,display:n?"none":void 0,height:"100%"},children:t.map(o=>{const{root:i,rows:a}=this.refs.categories.get(o.id);return m("div",{"data-id":o.target?o.target.id:o.id,class:"category",ref:i,children:[m("div",{class:`sticky padding-small align-${this.dir[0]}`,children:o.name||K.categories[o.id]}),m("div",{class:"relative",style:{height:a.length*this.props.emojiButtonSize},children:a.map((l,c)=>{const u=l.index-l.index%we.rowsPerRender,s=this.state.visibleRows[u],b="current"in l?l:void 0;if(!s&&!b)return null;const p=c*r,_=p+r,g=o.emojis.slice(p,_);return g.length<r&&g.push(...new Array(r-g.length)),m("div",{"data-index":l.index,ref:b,class:"flex row",style:{top:c*this.props.emojiButtonSize},children:s&&g.map((k,$)=>{if(!k)return m("div",{style:{width:this.props.emojiButtonSize,height:this.props.emojiButtonSize}});const j=de.get(k);return this.renderEmojiButton(j,{pos:[l.index,$],posinset:l.posinset+$,grid:this.grid})})},l.index)})})]})})})}renderSkinToneButton(){return this.props.skinTonePosition=="none"?null:m("div",{class:"flex flex-auto flex-center flex-middle",style:{position:"relative",width:this.props.emojiButtonSize,height:this.props.emojiButtonSize},children:m("button",{type:"button",ref:this.refs.skinToneButton,class:"skin-tone-button flex flex-auto flex-center flex-middle","aria-selected":this.state.showSkins?"":void 0,"aria-label":K.skins.choose,title:K.skins.choose,onClick:this.openSkins,style:{width:this.props.emojiSize,height:this.props.emojiSize},children:m("span",{class:`skin-tone skin-tone-${this.state.skin}`})})})}renderLiveRegion(){const t=this.getEmojiByPos(this.state.pos),n=t?t.name:"";return m("div",{"aria-live":"polite",class:"sr-only",children:n})}renderSkins(){const n=this.refs.skinToneButton.current.getBoundingClientRect(),r=this.base.getBoundingClientRect(),o={};return this.dir=="ltr"?o.right=r.right-n.right-3:o.left=n.left-r.left-3,this.props.previewPosition=="bottom"&&this.props.skinTonePosition=="preview"?o.bottom=r.bottom-n.top+6:(o.top=n.bottom-r.top+3,o.bottom="auto"),m("div",{ref:this.refs.menu,role:"radiogroup",dir:this.dir,"aria-label":K.skins.choose,class:"menu hidden","data-position":o.top?"top":"bottom",style:o,children:[...Array(6).keys()].map(i=>{const a=i+1,l=this.state.skin==a;return m("div",{children:[m("input",{type:"radio",name:"skin-tone",value:a,"aria-label":K.skins[a],ref:l?this.refs.skinToneRadio:null,defaultChecked:l,onChange:()=>this.handleSkinMouseOver(a),onKeyDown:c=>{(c.code=="Enter"||c.code=="Space"||c.code=="Tab")&&(c.preventDefault(),this.handleSkinClick(a))}}),m("button",{"aria-hidden":"true",tabindex:"-1",onClick:()=>this.handleSkinClick(a),onMouseEnter:()=>this.handleSkinMouseOver(a),onMouseLeave:()=>this.handleSkinMouseOver(),class:"option flex flex-grow flex-middle",children:[m("span",{class:`skin-tone skin-tone-${a}`}),m("span",{class:"margin-small-lr",children:K.skins[a]})]})]})})})}render(){const t=this.props.perLine*this.props.emojiButtonSize;return m("section",{id:"root",class:"flex flex-column",dir:this.dir,style:{width:this.props.dynamicWidth?"100%":`calc(${t}px + (var(--padding) + var(--sidebar-width)))`},"data-emoji-set":this.props.set,"data-theme":this.state.theme,"data-menu":this.state.showSkins?"":void 0,children:[this.props.previewPosition=="top"&&this.renderPreview(),this.props.navPosition=="top"&&this.renderNav(),this.props.searchPosition=="sticky"&&m("div",{class:"padding-lr",children:this.renderSearch()}),m("div",{ref:this.refs.scroll,class:"scroll flex-grow padding-lr",children:m("div",{style:{width:this.props.dynamicWidth?"100%":t,height:"100%"},children:[this.props.searchPosition=="static"&&this.renderSearch(),this.renderSearchResults(),this.renderCategories()]})}),this.props.navPosition=="bottom"&&this.renderNav(),this.props.previewPosition=="bottom"&&this.renderPreview(),this.state.showSkins&&this.renderSkins(),this.renderLiveRegion()]})}constructor(t){super(),Q(this,"handleClickOutside",n=>{const{element:r}=this.props;n.target!=r&&(this.state.showSkins&&this.closeSkins(),this.props.onClickOutside&&this.props.onClickOutside(n))}),Q(this,"handleBaseClick",n=>{this.state.showSkins&&(n.target.closest(".menu")||(n.preventDefault(),n.stopImmediatePropagation(),this.closeSkins()))}),Q(this,"handleBaseKeydown",n=>{this.state.showSkins&&n.key=="Escape"&&(n.preventDefault(),n.stopImmediatePropagation(),this.closeSkins())}),Q(this,"handleSearchClick",()=>{this.getEmojiByPos(this.state.pos)&&this.setState({pos:[-1,-1]})}),Q(this,"handleSearchInput",async()=>{const n=this.refs.searchInput.current;if(!n)return;const{value:r}=n,o=await de.search(r),i=()=>{this.refs.scroll.current&&(this.refs.scroll.current.scrollTop=0)};if(!o)return this.setState({searchResults:o,pos:[-1,-1]},i);const a=n.selectionStart==n.value.length?[0,0]:[-1,-1],l=[];l.setsize=o.length;let c=null;for(let u of o)(!l.length||c.length==this.getPerLine())&&(c=[],c.__categoryId="search",c.__index=l.length,l.push(c)),c.push(u);this.ignoreMouse(),this.setState({searchResults:l,pos:a},i)}),Q(this,"handleSearchKeyDown",n=>{const r=n.currentTarget;switch(n.stopImmediatePropagation(),n.key){case"ArrowLeft":this.navigate({e:n,input:r,left:!0});break;case"ArrowRight":this.navigate({e:n,input:r,right:!0});break;case"ArrowUp":this.navigate({e:n,input:r,up:!0});break;case"ArrowDown":this.navigate({e:n,input:r,down:!0});break;case"Enter":n.preventDefault(),this.handleEmojiClick({e:n,pos:this.state.pos});break;case"Escape":n.preventDefault(),this.state.searchResults?this.clearSearch():this.unfocusSearch();break}}),Q(this,"clearSearch",()=>{const n=this.refs.searchInput.current;n&&(n.value="",n.focus(),this.handleSearchInput())}),Q(this,"handleCategoryClick",({category:n,i:r})=>{this.scrollTo(r==0?{row:-1}:{categoryId:n.id})}),Q(this,"openSkins",n=>{const{currentTarget:r}=n,o=r.getBoundingClientRect();this.setState({showSkins:o},async()=>{await Gr(2);const i=this.refs.menu.current;i&&(i.classList.remove("hidden"),this.refs.skinToneRadio.current.focus(),this.base.addEventListener("click",this.handleBaseClick,!0),this.base.addEventListener("keydown",this.handleBaseKeydown,!0))})}),this.observers=[],this.state={pos:[-1,-1],perLine:this.initDynamicPerLine(t),visibleRows:{0:!0},...this.getInitialState(t)}}}class Qe extends Qr{async connectedCallback(){const t=hn(this.props,ie,this);t.element=this,t.ref=n=>{this.component=n},await De(t),!this.disconnected&&sn(m(hi,{...t}),this.shadowRoot)}constructor(t){super(t,{styles:Gt(_n)})}}Q(Qe,"Props",ie);typeof customElements<"u"&&!customElements.get("em-emoji-picker")&&customElements.define("em-emoji-picker",Qe);var _n={};_n=`:host {
  width: min-content;
  height: 435px;
  min-height: 230px;
  border-radius: var(--border-radius);
  box-shadow: var(--shadow);
  --border-radius: 10px;
  --category-icon-size: 18px;
  --font-family: -apple-system, BlinkMacSystemFont, "Helvetica Neue", sans-serif;
  --font-size: 15px;
  --preview-placeholder-size: 21px;
  --preview-title-size: 1.1em;
  --preview-subtitle-size: .9em;
  --shadow-color: 0deg 0% 0%;
  --shadow: .3px .5px 2.7px hsl(var(--shadow-color) / .14), .4px .8px 1px -3.2px hsl(var(--shadow-color) / .14), 1px 2px 2.5px -4.5px hsl(var(--shadow-color) / .14);
  display: flex;
}

[data-theme="light"] {
  --em-rgb-color: var(--rgb-color, 34, 36, 39);
  --em-rgb-accent: var(--rgb-accent, 34, 102, 237);
  --em-rgb-background: var(--rgb-background, 255, 255, 255);
  --em-rgb-input: var(--rgb-input, 255, 255, 255);
  --em-color-border: var(--color-border, rgba(0, 0, 0, .05));
  --em-color-border-over: var(--color-border-over, rgba(0, 0, 0, .1));
}

[data-theme="dark"] {
  --em-rgb-color: var(--rgb-color, 222, 222, 221);
  --em-rgb-accent: var(--rgb-accent, 58, 130, 247);
  --em-rgb-background: var(--rgb-background, 21, 22, 23);
  --em-rgb-input: var(--rgb-input, 0, 0, 0);
  --em-color-border: var(--color-border, rgba(255, 255, 255, .1));
  --em-color-border-over: var(--color-border-over, rgba(255, 255, 255, .2));
}

#root {
  --color-a: rgb(var(--em-rgb-color));
  --color-b: rgba(var(--em-rgb-color), .65);
  --color-c: rgba(var(--em-rgb-color), .45);
  --padding: 12px;
  --padding-small: calc(var(--padding) / 2);
  --sidebar-width: 16px;
  --duration: 225ms;
  --duration-fast: 125ms;
  --duration-instant: 50ms;
  --easing: cubic-bezier(.4, 0, .2, 1);
  width: 100%;
  text-align: left;
  border-radius: var(--border-radius);
  background-color: rgb(var(--em-rgb-background));
  position: relative;
}

@media (prefers-reduced-motion) {
  #root {
    --duration: 0;
    --duration-fast: 0;
    --duration-instant: 0;
  }
}

#root[data-menu] button {
  cursor: auto;
}

#root[data-menu] .menu button {
  cursor: pointer;
}

:host, #root, input, button {
  color: rgb(var(--em-rgb-color));
  font-family: var(--font-family);
  font-size: var(--font-size);
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  line-height: normal;
}

*, :before, :after {
  box-sizing: border-box;
  min-width: 0;
  margin: 0;
  padding: 0;
}

.relative {
  position: relative;
}

.flex {
  display: flex;
}

.flex-auto {
  flex: none;
}

.flex-center {
  justify-content: center;
}

.flex-column {
  flex-direction: column;
}

.flex-grow {
  flex: auto;
}

.flex-middle {
  align-items: center;
}

.flex-wrap {
  flex-wrap: wrap;
}

.padding {
  padding: var(--padding);
}

.padding-t {
  padding-top: var(--padding);
}

.padding-lr {
  padding-left: var(--padding);
  padding-right: var(--padding);
}

.padding-r {
  padding-right: var(--padding);
}

.padding-small {
  padding: var(--padding-small);
}

.padding-small-b {
  padding-bottom: var(--padding-small);
}

.padding-small-lr {
  padding-left: var(--padding-small);
  padding-right: var(--padding-small);
}

.margin {
  margin: var(--padding);
}

.margin-r {
  margin-right: var(--padding);
}

.margin-l {
  margin-left: var(--padding);
}

.margin-small-l {
  margin-left: var(--padding-small);
}

.margin-small-lr {
  margin-left: var(--padding-small);
  margin-right: var(--padding-small);
}

.align-l {
  text-align: left;
}

.align-r {
  text-align: right;
}

.color-a {
  color: var(--color-a);
}

.color-b {
  color: var(--color-b);
}

.color-c {
  color: var(--color-c);
}

.ellipsis {
  white-space: nowrap;
  max-width: 100%;
  width: auto;
  text-overflow: ellipsis;
  overflow: hidden;
}

.sr-only {
  width: 1px;
  height: 1px;
  position: absolute;
  top: auto;
  left: -10000px;
  overflow: hidden;
}

a {
  cursor: pointer;
  color: rgb(var(--em-rgb-accent));
}

a:hover {
  text-decoration: underline;
}

.spacer {
  height: 10px;
}

[dir="rtl"] .scroll {
  padding-left: 0;
  padding-right: var(--padding);
}

.scroll {
  padding-right: 0;
  overflow-x: hidden;
  overflow-y: auto;
}

.scroll::-webkit-scrollbar {
  width: var(--sidebar-width);
  height: var(--sidebar-width);
}

.scroll::-webkit-scrollbar-track {
  border: 0;
}

.scroll::-webkit-scrollbar-button {
  width: 0;
  height: 0;
  display: none;
}

.scroll::-webkit-scrollbar-corner {
  background-color: rgba(0, 0, 0, 0);
}

.scroll::-webkit-scrollbar-thumb {
  min-height: 20%;
  min-height: 65px;
  border: 4px solid rgb(var(--em-rgb-background));
  border-radius: 8px;
}

.scroll::-webkit-scrollbar-thumb:hover {
  background-color: var(--em-color-border-over) !important;
}

.scroll:hover::-webkit-scrollbar-thumb {
  background-color: var(--em-color-border);
}

.sticky {
  z-index: 1;
  background-color: rgba(var(--em-rgb-background), .9);
  -webkit-backdrop-filter: blur(4px);
  backdrop-filter: blur(4px);
  font-weight: 500;
  position: sticky;
  top: -1px;
}

[dir="rtl"] .search input[type="search"] {
  padding: 10px 2.2em 10px 2em;
}

[dir="rtl"] .search .loupe {
  left: auto;
  right: .7em;
}

[dir="rtl"] .search .delete {
  left: .7em;
  right: auto;
}

.search {
  z-index: 2;
  position: relative;
}

.search input, .search button {
  font-size: calc(var(--font-size)  - 1px);
}

.search input[type="search"] {
  width: 100%;
  background-color: var(--em-color-border);
  transition-duration: var(--duration);
  transition-property: background-color, box-shadow;
  transition-timing-function: var(--easing);
  border: 0;
  border-radius: 10px;
  outline: 0;
  padding: 10px 2em 10px 2.2em;
  display: block;
}

.search input[type="search"]::-ms-input-placeholder {
  color: inherit;
  opacity: .6;
}

.search input[type="search"]::placeholder {
  color: inherit;
  opacity: .6;
}

.search input[type="search"], .search input[type="search"]::-webkit-search-decoration, .search input[type="search"]::-webkit-search-cancel-button, .search input[type="search"]::-webkit-search-results-button, .search input[type="search"]::-webkit-search-results-decoration {
  -webkit-appearance: none;
  -ms-appearance: none;
  appearance: none;
}

.search input[type="search"]:focus {
  background-color: rgb(var(--em-rgb-input));
  box-shadow: inset 0 0 0 1px rgb(var(--em-rgb-accent)), 0 1px 3px rgba(65, 69, 73, .2);
}

.search .icon {
  z-index: 1;
  color: rgba(var(--em-rgb-color), .7);
  position: absolute;
  top: 50%;
  transform: translateY(-50%);
}

.search .loupe {
  pointer-events: none;
  left: .7em;
}

.search .delete {
  right: .7em;
}

svg {
  fill: currentColor;
  width: 1em;
  height: 1em;
}

button {
  -webkit-appearance: none;
  -ms-appearance: none;
  appearance: none;
  cursor: pointer;
  color: currentColor;
  background-color: rgba(0, 0, 0, 0);
  border: 0;
}

#nav {
  z-index: 2;
  padding-top: 12px;
  padding-bottom: 12px;
  padding-right: var(--sidebar-width);
  position: relative;
}

#nav button {
  color: var(--color-b);
  transition: color var(--duration) var(--easing);
}

#nav button:hover {
  color: var(--color-a);
}

#nav svg, #nav img {
  width: var(--category-icon-size);
  height: var(--category-icon-size);
}

#nav[dir="rtl"] .bar {
  left: auto;
  right: 0;
}

#nav .bar {
  width: 100%;
  height: 3px;
  background-color: rgb(var(--em-rgb-accent));
  transition: transform var(--duration) var(--easing);
  border-radius: 3px 3px 0 0;
  position: absolute;
  bottom: -12px;
  left: 0;
}

#nav button[aria-selected] {
  color: rgb(var(--em-rgb-accent));
}

#preview {
  z-index: 2;
  padding: calc(var(--padding)  + 4px) var(--padding);
  padding-right: var(--sidebar-width);
  position: relative;
}

#preview .preview-placeholder {
  font-size: var(--preview-placeholder-size);
}

#preview .preview-title {
  font-size: var(--preview-title-size);
}

#preview .preview-subtitle {
  font-size: var(--preview-subtitle-size);
}

#nav:before, #preview:before {
  content: "";
  height: 2px;
  position: absolute;
  left: 0;
  right: 0;
}

#nav[data-position="top"]:before, #preview[data-position="top"]:before {
  background: linear-gradient(to bottom, var(--em-color-border), transparent);
  top: 100%;
}

#nav[data-position="bottom"]:before, #preview[data-position="bottom"]:before {
  background: linear-gradient(to top, var(--em-color-border), transparent);
  bottom: 100%;
}

.category:last-child {
  min-height: calc(100% + 1px);
}

.category button {
  font-family: -apple-system, BlinkMacSystemFont, Helvetica Neue, sans-serif;
  position: relative;
}

.category button > * {
  position: relative;
}

.category button .background {
  opacity: 0;
  background-color: var(--em-color-border);
  transition: opacity var(--duration-fast) var(--easing) var(--duration-instant);
  position: absolute;
  top: 0;
  bottom: 0;
  left: 0;
  right: 0;
}

.category button:hover .background {
  transition-duration: var(--duration-instant);
  transition-delay: 0s;
}

.category button[aria-selected] .background {
  opacity: 1;
}

.category button[data-keyboard] .background {
  transition: none;
}

.row {
  width: 100%;
  position: absolute;
  top: 0;
  left: 0;
}

.skin-tone-button {
  border: 1px solid rgba(0, 0, 0, 0);
  border-radius: 100%;
}

.skin-tone-button:hover {
  border-color: var(--em-color-border);
}

.skin-tone-button:active .skin-tone {
  transform: scale(.85) !important;
}

.skin-tone-button .skin-tone {
  transition: transform var(--duration) var(--easing);
}

.skin-tone-button[aria-selected] {
  background-color: var(--em-color-border);
  border-top-color: rgba(0, 0, 0, .05);
  border-bottom-color: rgba(0, 0, 0, 0);
  border-left-width: 0;
  border-right-width: 0;
}

.skin-tone-button[aria-selected] .skin-tone {
  transform: scale(.9);
}

.menu {
  z-index: 2;
  white-space: nowrap;
  border: 1px solid var(--em-color-border);
  background-color: rgba(var(--em-rgb-background), .9);
  -webkit-backdrop-filter: blur(4px);
  backdrop-filter: blur(4px);
  transition-property: opacity, transform;
  transition-duration: var(--duration);
  transition-timing-function: var(--easing);
  border-radius: 10px;
  padding: 4px;
  position: absolute;
  box-shadow: 1px 1px 5px rgba(0, 0, 0, .05);
}

.menu.hidden {
  opacity: 0;
}

.menu[data-position="bottom"] {
  transform-origin: 100% 100%;
}

.menu[data-position="bottom"].hidden {
  transform: scale(.9)rotate(-3deg)translateY(5%);
}

.menu[data-position="top"] {
  transform-origin: 100% 0;
}

.menu[data-position="top"].hidden {
  transform: scale(.9)rotate(3deg)translateY(-5%);
}

.menu input[type="radio"] {
  clip: rect(0 0 0 0);
  width: 1px;
  height: 1px;
  border: 0;
  margin: 0;
  padding: 0;
  position: absolute;
  overflow: hidden;
}

.menu input[type="radio"]:checked + .option {
  box-shadow: 0 0 0 2px rgb(var(--em-rgb-accent));
}

.option {
  width: 100%;
  border-radius: 6px;
  padding: 4px 6px;
}

.option:hover {
  color: #fff;
  background-color: rgb(var(--em-rgb-accent));
}

.skin-tone {
  width: 16px;
  height: 16px;
  border-radius: 100%;
  display: inline-block;
  position: relative;
  overflow: hidden;
}

.skin-tone:after {
  content: "";
  mix-blend-mode: overlay;
  background: linear-gradient(rgba(255, 255, 255, .2), rgba(0, 0, 0, 0));
  border: 1px solid rgba(0, 0, 0, .8);
  border-radius: 100%;
  position: absolute;
  top: 0;
  bottom: 0;
  left: 0;
  right: 0;
  box-shadow: inset 0 -2px 3px #000, inset 0 1px 2px #fff;
}

.skin-tone-1 {
  background-color: #ffc93a;
}

.skin-tone-2 {
  background-color: #ffdab7;
}

.skin-tone-3 {
  background-color: #e7b98f;
}

.skin-tone-4 {
  background-color: #c88c61;
}

.skin-tone-5 {
  background-color: #a46134;
}

.skin-tone-6 {
  background-color: #5d4437;
}

[data-index] {
  justify-content: space-between;
}

[data-emoji-set="twitter"] .skin-tone:after {
  box-shadow: none;
  border-color: rgba(0, 0, 0, .5);
}

[data-emoji-set="twitter"] .skin-tone-1 {
  background-color: #fade72;
}

[data-emoji-set="twitter"] .skin-tone-2 {
  background-color: #f3dfd0;
}

[data-emoji-set="twitter"] .skin-tone-3 {
  background-color: #eed3a8;
}

[data-emoji-set="twitter"] .skin-tone-4 {
  background-color: #cfad8d;
}

[data-emoji-set="twitter"] .skin-tone-5 {
  background-color: #a8805d;
}

[data-emoji-set="twitter"] .skin-tone-6 {
  background-color: #765542;
}

[data-emoji-set="google"] .skin-tone:after {
  box-shadow: inset 0 0 2px 2px rgba(0, 0, 0, .4);
}

[data-emoji-set="google"] .skin-tone-1 {
  background-color: #f5c748;
}

[data-emoji-set="google"] .skin-tone-2 {
  background-color: #f1d5aa;
}

[data-emoji-set="google"] .skin-tone-3 {
  background-color: #d4b48d;
}

[data-emoji-set="google"] .skin-tone-4 {
  background-color: #aa876b;
}

[data-emoji-set="google"] .skin-tone-5 {
  background-color: #916544;
}

[data-emoji-set="google"] .skin-tone-6 {
  background-color: #61493f;
}

[data-emoji-set="facebook"] .skin-tone:after {
  border-color: rgba(0, 0, 0, .4);
  box-shadow: inset 0 -2px 3px #000, inset 0 1px 4px #fff;
}

[data-emoji-set="facebook"] .skin-tone-1 {
  background-color: #f5c748;
}

[data-emoji-set="facebook"] .skin-tone-2 {
  background-color: #f1d5aa;
}

[data-emoji-set="facebook"] .skin-tone-3 {
  background-color: #d4b48d;
}

[data-emoji-set="facebook"] .skin-tone-4 {
  background-color: #aa876b;
}

[data-emoji-set="facebook"] .skin-tone-5 {
  background-color: #916544;
}

[data-emoji-set="facebook"] .skin-tone-6 {
  background-color: #61493f;
}

`;function pi(e){const t=x.useRef(null),n=x.useRef(null);return n.current&&n.current.update(e),x.useEffect(()=>(n.current=new Qe({...e,ref:t}),()=>{n.current=null}),[]),A.createElement("div",{ref:t})}function mi(e){var t=e.theme,n=e.onSelectEmoji,r=e.disableRecent,o=e.customEmojis,i=e.language,a=x.useMemo(function(){var c=[];return r||c.push("frequent"),c=[].concat(Ft(c),["people","nature","foods","activity","places","objects","symbols","flags"]),c},[r]),l=x.useMemo(function(){if(i)return require("@emoji-mart/data/i18n/".concat(i??"en",".json"))},[i]);return A.createElement(pi,{data:void 0,theme:t,previewPosition:"none",onEmojiSelect:n,custom:o,categories:a,set:"apple",i18n:l})}var gi=x.memo(mi);function Nt(e){var t=e.showPicker,n=e.theme,r=e.handleSelectEmoji,o=e.disableRecent,i=e.customEmojis,a=e.position,l=e.language;return A.createElement("div",{className:"react-emoji-picker--container"},t&&A.createElement("div",{className:"react-emoji-picker--wrapper",onClick:function(u){return u.stopPropagation()},style:a==="below"?{top:"40px"}:{}},A.createElement("div",{className:"react-emoji-picker"},A.createElement(gi,{theme:n,onSelectEmoji:r,disableRecent:o,customEmojis:i,language:l}))))}var vi=435,bi=function(t){var n=t.theme,r=t.keepOpened,o=t.disableRecent,i=t.customEmojis,a=t.addSanitizeFn,l=t.addPolluteFn,c=t.appendContent,u=t.buttonElement,s=t.buttonRef,b=t.language,p=x.useState(!1),_=oe(p,2),g=_[0],k=_[1],$=x.useState(),j=oe($,2),L=j[0],E=j[1],R=x.useState(),P=oe(R,2),I=P[0],q=P[1];x.useEffect(function(){a(Ce)},[a]),x.useEffect(function(){l(Vt)},[l]),x.useEffect(function(){function H(O){var C=O.target;C.classList.contains("react-input-emoji--button")||C.classList.contains("react-input-emoji--button--icon")||k(!1)}return document.addEventListener("click",H),function(){document.removeEventListener("click",H)}},[]);function V(H){H.stopPropagation(),H.preventDefault(),q(J(H)),k(function(O){return!O})}function J(H){var O=H.currentTarget,C=O.getBoundingClientRect(),z=vi;return C.top>=z?"above":"below"}function Z(H){c(gr(H)),r||k(function(O){return!O})}return x.useEffect(function(){var H;s!=null&&(H=s.current)!==null&&H!==void 0&&H.style?(s.current.style.position="relative",E(s.current)):u!=null&&u.style&&(u.style.position="relative",E(u))},[s,u]),L?zn.createPortal(A.createElement(A.Fragment,null,A.createElement(Nt,{showPicker:g,theme:n,handleSelectEmoji:Z,disableRecent:o,customEmojis:i,position:I,language:b}),A.createElement(pt,{showPicker:g,toggleShowPicker:V,buttonElement:L,buttonRef:s})),L):A.createElement(A.Fragment,null,A.createElement(Nt,{showPicker:g,theme:n,handleSelectEmoji:Z,disableRecent:o,customEmojis:i,position:I,language:b}),A.createElement(pt,{showPicker:g,toggleShowPicker:V}))};function _i(){var e=xn();if(!e)return null;var t=e.text.substring(e.begin,e.end);return t||null}function xi(){var e=xn();e&&e.element.deleteData(e.begin,e.end-e.begin)}function xn(){var e=Ge();if(!e)return null;var t=e.element,n=e.caretOffset,r=t.textContent,o=r.lastIndexOf("@");return o===-1||o>=n||o!==0&&r[o-1]!==" "?null:{begin:o,end:n,text:r,element:t}}function Ge(){var e=yi();if(e===null)return null;var t=0;if(typeof window.getSelection<"u"){var n=window.getSelection().getRangeAt(0),r=n.cloneRange();r.selectNodeContents(e),r.setEnd(n.endContainer,n.endOffset),t=r.toString().length}else if(typeof document.selection<"u"&&document.selection.type!="Control"){var o=document.selection.createRange(),i=document.body.createTextRange();i.moveToElementText(e),i.setEndPoint("EndToEnd",o),t=i.text.length}return{element:e,caretOffset:t}}function yi(){var e=document.getSelection().anchorNode;return(e==null?void 0:e.nodeType)==3?e:null}function wi(e){var t,n=x.useState(!1),r=oe(n,2),o=r[0],i=r[1],a=x.useState([]),l=oe(a,2),c=l[0],u=l[1],s=x.useState(null),b=oe(s,2),p=b[0],_=b[1],g=x.useCallback(function(){xi(),u([])},[]),k=x.useCallback(dt(me().mark(function L(){var E,R;return me().wrap(function(I){for(;;)switch(I.prev=I.next){case 0:if(E=_i(),_(E),E!==null){I.next=6;break}u([]),I.next=12;break;case 6:return i(!0),I.next=9,e(E);case 9:R=I.sent,i(!1),u(R);case 12:case"end":return I.stop()}},L)})),[e]),$=x.useCallback(function(L){return(t=t||dt(me().mark(function E(R){var P,I;return me().wrap(function(V){for(;;)switch(V.prev=V.next){case 0:if(typeof e=="function"){V.next=2;break}return V.abrupt("return");case 2:R.key==="Backspace"&&(P=Ge())!==null&&P!==void 0&&P.element.parentElement.hasAttribute("data-mention-id")?(I=Ge(),I.element.parentElement.remove()):["ArrowUp","ArrowDown","Esc","Escape"].includes(R.key)||k();case 3:case"end":return V.stop()}},E)}))).apply(this,arguments)},[k,e]),j=x.useCallback(function(){k()},[k]);return{mentionSearchText:p,mentionUsers:c,onKeyUp:$,onFocus:j,onSelectUser:g,loading:o}}var ki=function(t,n){var r=t.users,o=t.mentionSearchText,i=t.onSelect,a=t.addEventListener,l=x.useState(0),c=oe(l,2),u=c[0],s=c[1];x.useImperativeHandle(n,function(){return{prevUser:function(){s(function(k){return k===0?0:k-1})},nextUser:function(){s(function(k){return k===r.length-1?r.length-1:k+1})}}}),x.useEffect(function(){s(0)},[r]);function b(g,k){return'<span class="react-input-emoji--mention--item--name__selected" data-testid="metion-selected-word">'.concat(g,"</span>").concat(k)}var p=x.useMemo(function(){var g=o?o.substring(1).toLocaleLowerCase():"";return r.map(function(k){var $=k.name;if(o&&o.length>1)if(k.name.toLowerCase().startsWith(g))$=b(k.name.substring(0,g.length),k.name.substring(g.length));else{var j=k.name.split(" ");$=j.map(function(L){return L.toLocaleLowerCase().startsWith(g)?b(L.substring(0,g.length),L.substring(g.length)):L}).join(" ")}return lt(lt({},k),{},{nameHtml:$})})},[o,r]);function _(g){return function(k){k.stopPropagation(),k.preventDefault(),i(g)}}return x.useEffect(function(){var g=a("enter",function(k){k.stopPropagation(),k.preventDefault(),i(p[u])});return function(){g()}},[a,i,u,p]),A.createElement("ul",{className:"react-input-emoji--mention--list","data-testid":"mention-user-list"},p.map(function(g,k){return A.createElement("li",{key:g.id},A.createElement("button",{type:"button",onClick:_(g),className:"react-input-emoji--mention--item".concat(u===k?" react-input-emoji--mention--item__selected":""),onMouseOver:function(){return s(k)}},A.createElement("img",{className:"react-input-emoji--mention--item--img",src:g.image}),A.createElement("div",{className:"react-input-emoji--mention--item--name",dangerouslySetInnerHTML:{__html:g.nameHtml}})))}))},Ci=x.forwardRef(ki),$i=function(t){var n=t.searchMention,r=t.addEventListener,o=t.appendContent,i=t.addSanitizeFn,a=x.useRef(null),l=x.useState(!1),c=oe(l,2),u=c[0],s=c[1],b=wi(n),p=b.mentionSearchText,_=b.mentionUsers,g=b.loading,k=b.onKeyUp,$=b.onFocus,j=b.onSelectUser;x.useEffect(function(){i(function(E){var R=document.createElement("div");R.innerHTML=E;var P=Array.prototype.slice.call(R.querySelectorAll(".react-input-emoji--mention--text"));return P.forEach(function(I){R.innerHTML=R.innerHTML.replace(I.outerHTML,"@[".concat(I.dataset.mentionName,"](userId:").concat(I.dataset.mentionId,")"))}),R.innerHTML})},[i]),x.useEffect(function(){s(_.length>0)},[_]),x.useEffect(function(){function E(){s(!1)}return document.addEventListener("click",E),function(){document.removeEventListener("click",E)}},[]),x.useEffect(function(){var E=r("keyUp",k);return function(){E()}},[r,k]),x.useEffect(function(){function E(P){switch(P.key){case"Esc":case"Escape":s(!1);break}}var R=r("keyDown",E);return function(){R()}},[r]),x.useEffect(function(){var E=r("focus",$);return function(){E()}},[r,$]),x.useEffect(function(){if(u){var E=r("arrowUp",function(P){P.stopPropagation(),P.preventDefault(),a.current.prevUser()}),R=r("arrowDown",function(P){P.stopPropagation(),P.preventDefault(),a.current.nextUser()});return function(){E(),R()}}},[r,u]);function L(E){j(),o('<span class="react-input-emoji--mention--text" data-mention-id="'.concat(E.id,'" data-mention-name="').concat(E.name,'">@').concat(E.name,"</span> "))}return A.createElement(A.Fragment,null,g?A.createElement("div",{className:"react-input-emoji--mention--container"},A.createElement("div",{className:"react-input-emoji--mention--loading"},A.createElement("div",{className:"react-input-emoji--mention--loading--spinner"},"Loading..."))):u&&A.createElement("div",{className:"react-input-emoji--mention--container",onClick:function(R){return R.stopPropagation()}},A.createElement(Ci,{ref:a,mentionSearchText:p,users:_,onSelect:L,addEventListener:r})))};function le(){var e=[];return{subscribe:function(n){return e.push(n),function(){e=e.filter(function(r){return r!==n})}},publish:function(n){e.forEach(function(r){return r(n)})},get currentListerners(){return e}}}function ji(){var e=x.useMemo(function(){return{keyDown:le(),keyUp:le(),arrowUp:le(),arrowDown:le(),enter:le(),focus:le(),blur:le()}},[]),t=x.useCallback(function(n,r){return e[n].subscribe(r)},[e]);return{addEventListener:t,listeners:e}}function Si(){var e=x.useRef([]),t=x.useCallback(function(r){e.current.push(r)},[]),n=x.useCallback(function(r){var o=e.current.reduce(function(i,a){return a(i)},r);return o},[]);return{addPolluteFn:t,pollute:n}}function Ei(e,t){var n=e.onChange,r=e.onEnter,o=e.shouldReturn,i=e.onResize,a=e.onClick,l=e.onFocus,c=e.onBlur,u=e.onKeyDown,s=e.theme,b=e.cleanOnEnter,p=e.placeholder,_=e.maxLength,g=e.keepOpened,k=e.inputClass,$=e.disableRecent,j=e.tabIndex,L=e.value,E=e.customEmojis,R=e.language,P=e.searchMention,I=e.buttonElement,q=e.buttonRef,V=e.borderRadius,J=e.borderColor,Z=e.fontSize,H=e.fontFamily,O=x.useRef(null),C=ji(),z=C.addEventListener,D=C.listeners,f=qt(e.shouldReturn),h=f.addSanitizeFn,y=f.sanitize,v=f.sanitizedTextRef,w=Si(),M=w.addPolluteFn,N=w.pollute,B=x.useCallback(function(){var U=arguments.length>0&&arguments[0]!==void 0?arguments[0]:"";O.current!==null&&(O.current.html=Vt(U),v.current=U)},[v]),F=x.useCallback(function(U){B(U)},[B]),G=Cr(O,i,n);kr({ref:t,setValue:F,textInputRef:O,emitChange:G}),x.useEffect(function(){v.current!==L&&F(L)},[v,F,L]),x.useEffect(function(){function U(ne){if(typeof _<"u"&&ne.key!=="Backspace"&&O.current!==null&&ht(O.current)>=_&&ne.preventDefault(),ne.key==="Enter"&&O.current){ne.preventDefault();var xe=y(O.current.html);return G(v.current),typeof r=="function"&&D.enter.currentListerners.length===0&&r(xe),b&&D.enter.currentListerners.length===0&&B(""),typeof u=="function"&&u(ne.nativeEvent),!1}return typeof u=="function"&&u(ne.nativeEvent),!0}var Y=z("keyDown",U);return function(){Y()}},[z,b,G,D.enter.currentListerners.length,_,r,u,y,v,B]),x.useEffect(function(){function U(){typeof a=="function"&&a(),typeof l=="function"&&l()}var Y=z("focus",U);return function(){Y()}},[z,a,l]),x.useEffect(function(){function U(){typeof c=="function"&&c()}var Y=z("blur",U);return function(){Y()}},[z,c]);function ee(U){y(U),L!==v.current&&G(v.current)}function X(U){typeof _<"u"&&O.current!==null&&ht(O.current)>=_||O.current!==null&&O.current.appendContent(U)}function _e(U){U.preventDefault();var Y;U.clipboardData&&(Y=U.clipboardData.getData("text/plain"),Y=N(Y),document.execCommand("insertHTML",!1,Y))}return A.createElement("div",{className:"react-emoji"},A.createElement($i,{searchMention:P,addEventListener:z,appendContent:X,addSanitizeFn:h}),A.createElement(Sr,{ref:O,onCopy:vr,onPaste:_e,shouldReturn:o,onBlur:D.blur.publish,onFocus:D.focus.publish,onArrowUp:D.arrowUp.publish,onArrowDown:D.arrowDown.publish,onKeyUp:D.keyUp.publish,onKeyDown:D.keyDown.publish,onEnter:D.enter.publish,placeholder:p,style:{borderRadius:V,borderColor:J,fontSize:Z,fontFamily:H},tabIndex:j,className:k,onChange:ee}),A.createElement(bi,{theme:s,keepOpened:g,disableRecent:$,customEmojis:E,addSanitizeFn:h,addPolluteFn:M,appendContent:X,buttonElement:I,buttonRef:q,language:R}))}var yn=x.forwardRef(Ei);yn.defaultProps={theme:"auto",height:30,placeholder:"Type a message",borderRadius:21,borderColor:"#EAEAEA",fontSize:15,fontFamily:"sans-serif",tabIndex:0,shouldReturn:!1,customEmojis:[],language:void 0};function ae(t){var t=new Date(t),n=new Date;n.setHours(0,0,0,0);var r=new Date(n);r.setDate(n.getDate()-n.getDay());var o=new Date(r);if(o.setDate(r.getDate()+6),t>=r&&t<=o){var i=["Sunday","Monday","Tuesday","Wednesday","Thursday","Friday","Saturday"],a=i[t.getDay()];return t.getDay()==new Date().getDay()&&(a="Today"),a}else{var l=t.getMonth()+1+"/"+t.getDate()+"/"+t.getFullYear();return l}}const Mi=e=>{const t=new Date(e);let n=t.getHours(),r=t.getMinutes();return n=n.toString(),r=r.toString(),n.length==1&&(n=`0${n}`),r.length==1&&(r=`0${r}`),`${n}:${r}`},Li=(e,t)=>{const[n,r]=x.useState(),o=Xe(a=>a.Auth_check.user_Info);async function i(a){const l=await ge.get(`${ue}/messages/${a}`,{headers:{Authorization:`Bearer ${o.token}`}});l.error&&console.log("Error Server 501 "),l.data&&r(l.data)}return x.useEffect(()=>{e!=null&&i(e==null?void 0:e.id_Chat)},[e,t]),n},Ri=Li,zi=()=>Array.from(Array(6)).map(t=>d.jsx(Pi,{})),Ai=zi;function Pi(){return d.jsxs(d.Fragment,{children:[d.jsxs("div",{className:" col-start-1 col-end-11 p-0 rounded-lg  ",children:[d.jsx("div",{className:"  w-[100%]"}),d.jsxs("div",{className:"flex flex-row items-center",children:[d.jsx("div",{className:"flex items-center justify-center   flex-shrink-0 ",children:d.jsx("div",{className:"flex flex-nowrap mt-2",children:d.jsxs("span",{children:[" ",d.jsx(ve,{variant:"circular",width:30,height:30})]})})}),d.jsx("div",{className:" ml-2 text-sm  ",children:d.jsx("div",{className:"flex flex-nowrap mt-2",children:d.jsx("span",{className:"w-full mr-4 ",children:d.jsx(ve,{variant:"rounded",style:{borderRadius:"12px"},width:300,height:30})})})})]})]}),d.jsx("div",{className:"col-start-3 col-end-13 p-0 rounded-lg ",children:d.jsx("div",{className:"flex items-center justify-start flex-row-reverse ",children:d.jsx("div",{className:" mr-3 flex flex-row ",children:d.jsx("div",{className:"flex flex-nowrap mt-2",children:d.jsx("span",{className:"w-full mr-4 ",children:d.jsx(ve,{variant:"rounded",style:{borderRadius:"12px"},width:300,height:30})})})})})})]})}const Ti=()=>d.jsxs("div",{className:"h-screen  text-center  grid  place-content-center bg-gradient-to-tr from-blue-900 to-purple-900  ",style:{backgroundImage:"URL(bg_chat3.png)"},children:[d.jsx("img",{src:"logo_.png",alt:"Logo chat",class:"animate-pulse ml-16 grid  place-content-center  "}),d.jsx("br",{}),d.jsx("h1",{className:"text-black font-bold text-xl text-center font-sans ",children:"Your messages"}),d.jsxs("p",{className:"text-black text-xl flex flex-row gap-2",children:[d.jsx("svg",{xmlns:"http://www.w3.org/2000/svg",className:"mt-1",width:"16",height:"16",fill:"currentColor",class:"bi bi-shield-lock-fill",viewBox:"0 0 16 16",children:d.jsx("path",{"fill-rule":"evenodd",d:"M8 0c-.69 0-1.843.265-2.928.56-1.11.3-2.229.655-2.887.87a1.54 1.54 0 0 0-1.044 1.262c-.596 4.477.787 7.795 2.465 9.99a11.8 11.8 0 0 0 2.517 2.453c.386.273.744.482 1.048.625.28.132.581.24.829.24s.548-.108.829-.24a7 7 0 0 0 1.048-.625 11.8 11.8 0 0 0 2.517-2.453c1.678-2.195 3.061-5.513 2.465-9.99a1.54 1.54 0 0 0-1.044-1.263 63 63 0 0 0-2.887-.87C9.843.266 8.69 0 8 0m0 5a1.5 1.5 0 0 1 .5 2.915l.385 1.99a.5.5 0 0 1-.491.595h-.788a.5.5 0 0 1-.49-.595l.384-1.99A1.5 1.5 0 0 1 8 5"})})," ","Send private Files and messages to Your Frends"]})]}),Di=Ti;const Ni=e=>d.jsxs("label",{class:"switch",children:[d.jsx("span",{class:"sun",children:d.jsx("svg",{xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 24 24",children:d.jsxs("g",{fill:"#ffd43b",children:[d.jsx("circle",{r:"5",cy:"12",cx:"12"}),d.jsx("path",{d:"m21 13h-1a1 1 0 0 1 0-2h1a1 1 0 0 1 0 2zm-17 0h-1a1 1 0 0 1 0-2h1a1 1 0 0 1 0 2zm13.66-5.66a1 1 0 0 1 -.66-.29 1 1 0 0 1 0-1.41l.71-.71a1 1 0 1 1 1.41 1.41l-.71.71a1 1 0 0 1 -.75.29zm-12.02 12.02a1 1 0 0 1 -.71-.29 1 1 0 0 1 0-1.41l.71-.66a1 1 0 0 1 1.41 1.41l-.71.71a1 1 0 0 1 -.7.24zm6.36-14.36a1 1 0 0 1 -1-1v-1a1 1 0 0 1 2 0v1a1 1 0 0 1 -1 1zm0 17a1 1 0 0 1 -1-1v-1a1 1 0 0 1 2 0v1a1 1 0 0 1 -1 1zm-5.66-14.66a1 1 0 0 1 -.7-.29l-.71-.71a1 1 0 0 1 1.41-1.41l.71.71a1 1 0 0 1 0 1.41 1 1 0 0 1 -.71.29zm12.02 12.02a1 1 0 0 1 -.7-.29l-.66-.71a1 1 0 0 1 1.36-1.36l.71.71a1 1 0 0 1 0 1.41 1 1 0 0 1 -.71.24z"})]})})}),d.jsx("span",{class:"moon",children:d.jsx("svg",{xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 384 512",children:d.jsx("path",{d:"m223.5 32c-123.5 0-223.5 100.3-223.5 224s100 224 223.5 224c60.6 0 115.5-24.2 155.8-63.4 5-4.9 6.3-12.5 3.1-18.7s-10.1-9.7-17-8.5c-9.8 1.7-19.8 2.6-30.1 2.6-96.9 0-175.5-78.8-175.5-176 0-65.8 36-123.1 89.3-153.3 6.1-3.5 9.2-10.5 7.7-17.3s-7.3-11.9-14.3-12.5c-6.3-.5-12.6-.8-19-.8z"})})}),d.jsx("input",{type:"checkbox",class:"input",onChange:()=>{e.toggle()}}),d.jsx("span",{class:"slider"})]}),Ii=Ni;function wn(e){var Z,H,O,C,z,D,f,h,y;const[t,n]=x.useState(!1),r=[null,"green","blue","white","gray","red"],o=`${ue}/users/${(Z=e.info_chat)==null?void 0:Z.pic}`,i=An(),a=Ot(),l=Xe(v=>v.Auth_check.user_Info),[c,u]=x.useState(!1),s=Ri(e.info_chat,c),[b,p]=x.useState(),[_,g]=x.useState(),[k,$]=x.useState(),[j,L]=x.useState(),E=x.useRef(),{onlineUser:R,Socket:P}=x.useContext(Bt),{handelMessageSended:I}=x.useContext(kn);x.useEffect(()=>{$(s),L(s)},[s]);const q=v=>{let w=v.target.value.toLowerCase();const M=k.filter(N=>N.message.toLowerCase().indexOf(w)!==-1||ae(N.createdAt).indexOf(w)!==-1);L(M)};x.useEffect(()=>{var w;if(P===null)return;const v=(w=e.info_chat)==null?void 0:w._id;P.emit("sendMessage",{..._,recipientId:v})},[_]),x.useEffect(()=>{if(P!==null)return P.on("getMessage",v=>{var w;((w=e.info_chat)==null?void 0:w.id_Chat)===v.ChatId&&($(M=>[...M,v]),L(M=>[...M,v]))}),()=>{P.off("getMessage")}},[P,e.info_chat]),x.useLayoutEffect(()=>{E.current&&(E.current.scrollTop=E.current.scrollHeight)},[k,_]);const V=async()=>{var w;const v={ChatId:(w=e.info_chat)==null?void 0:w.id_Chat,SenderId:l._id,message:b};await ge.post(`${ue}/messages/`,{body:v},{headers:{Authorization:`Bearer ${l.token}`}}).then(M=>{p(""),R.some(N=>{var B;return N.userId!=((B=e==null?void 0:e.info_chat)==null?void 0:B._id)})&&u(!c),g(M.data),I()}).catch(()=>{i("/login"),window.location.reload(),a({type:"error",payload:{message:"Unauthorized",openError:!0}})})};function J(v){return v[0].toUpperCase()+v.substring(1)}return d.jsx(d.Fragment,{children:e!=null&&e.info_chat?d.jsxs("div",{className:`h-screen  main  ${t?"bg-[url('bg_chat3_dark.png')]":"bg-[url('bg_chat3.png')]"}   mr-4  `,style:{width:"100%",height:"100vh"},children:[d.jsxs("div",{className:`${t?"header_dark":"bg-white"}  flex flex-row w-full h-12  shadow-xl border-b-gary-900 mr-4`,children:[d.jsx("div",{className:"flex basis-[15%]  md:basis-[10%] lg:basis-[6%] mt-1 ml-2 md:ml-4 lg:ml-6  mb-1",onClick:()=>{a({type:"OpenDrawer",payload:e.info_chat})},children:Number.isInteger(Number((H=e.info_chat)==null?void 0:H.pic))?d.jsx(pe,{name:(O=e.info_chat)!=null&&O.name?(C=e.info_chat)==null?void 0:C.name:"user",fontSize:"small",backgroundColor:Number.isInteger(Number((z=e.info_chat)==null?void 0:z.pic))?r[(D=e.info_chat)==null?void 0:D.pic]:"red",fontColor:((f=e.info_chat)==null?void 0:f.pic)==3?"black":"azure",width:"35px",height:"35px"}):d.jsx(pe,{name:(h=e.info_chat)!=null&&h.name?(y=e.info_chat)==null?void 0:y.name:"user",fontSize:"small",src:o,width:"40px",height:"40px"})}),d.jsxs("div",{className:`basis-[45%] md:basis-[30%] lg:basis-[50%] mt-1 mb:mt-0  ${t?"text-white":"text-gray-900"}`,children:[d.jsx("div",{children:d.jsx("b",{children:J(e.info_chat.name)})}),d.jsx("div",{children:d.jsx("p",{className:"text-green-600",style:{fontSize:10},children:R.some(v=>{var w;return v.userId===((w=e==null?void 0:e.info_chat)==null?void 0:w._id)})?d.jsx("b",{children:"Onling"}):""})})]}),d.jsx("div",{className:"flex flex-row  basis-[10%] md:basis-[50%] lg:basis-[30%] ",children:d.jsx("div",{className:"flex-initial w-full r-1 pt-2  mr-2 ",children:d.jsxs("div",{className:"inline-flex w-full pl-6 pr-0 ",children:[d.jsx("span",{class:"inline-flex  items-center px-3  hover:bg-purple-200 text-sm text-gray-900 bg-white border border-r-0 border-gray-300 rounded-l-md dark:bg-white dark:text-gray-700 dark:border-gray-600",children:d.jsx("i",{className:"",children:d.jsx(Se,{icon:Ht})})}),d.jsx("input",{type:"text",id:"website-admin",class:"rounded-none rounded-r-md bg-white   border text-gray-900 focus:ring-blue-500 focus:border-blue-500 block flex-1 min-w-0 w-0 md:w-full lg:w-full text-sm border-gray-300 p-1  dark:bg-gray-50 dark:border-gray-600 dark:placeholder-gray-400  dark:focus:ring-blue-500 dark:focus:border-blue-500",placeholder:"Find a message ...",onChange:v=>{q(v)}})]})})}),d.jsx("div",{className:" basis-[10%] md:basis-[5%] lg:basis-[4%]   hover:bg-purple-200 text-center mt-1.5 pt-1.5 mb-1 pb-1.5 rounded-md  ",children:d.jsx(Se,{icon:In})}),d.jsx("button",{className:"basis-[10%] md:basis-[5%] lg:basis-[4%]    hover:bg-purple-200 text-center mt-1.5 pt-1.5 mb-1 pb-1.5 rounded-md mr-6 ",children:d.jsx(Je,{})}),d.jsx(Ii,{toggle:()=>n(!t)})]}),d.jsx("div",{class:"flex flex-col w-full flex-auto  mb-0",style:{height:"calc(100% - 100px)"},children:d.jsxs("div",{class:"flex flex-col flex-auto flex-shrink-0 rounded-b-lg  h-full pr-4 pl-4",children:[d.jsx("div",{class:"flex flex-col h-full  mb-2 overflow-y-auto overflow-x-hidden   ",ref:E,children:d.jsx("div",{class:"flex flex-col h-full    ",children:d.jsx("div",{class:"grid grid-cols-12 gap-y-2  ",children:j&&j.length>=1?j.map((v,w)=>{var M,N,B,F,G,ee,X,_e,U,Y,ne,xe,et,tt;return d.jsxs("div",{className:v.SenderId!=l._id?" col-start-1 col-end-11 p-0 rounded-lg  ":"col-start-3 col-end-13 p-0 rounded-lg ",children:[d.jsx("div",{className:`${ae((M=j[w-1])==null?void 0:M.createdAt)==ae(v.createdAt)?"hidden":""}  ${v.SenderId!=l._id?"text-right":"  w-[100%]"}  `,children:d.jsxs("div",{className:`${t?" bg-gray-900 text-gray-200":" bg-gray-200 text-gray-700"} rounded-lg w-48 text-center ${v.SenderId!=l._id?"ml-[50%]":" ml-[30%]"} mb-1.5 `,children:[" ",ae(v.createdAt)]})}),d.jsxs("div",{className:v.SenderId!=l._id?"flex flex-row items-center":"flex items-center justify-start flex-row-reverse ",children:[v.SenderId!=l._id?d.jsx("div",{className:`${((N=j[w-1])==null?void 0:N.SenderId)!==v.SenderId||ae((B=j[w-1])==null?void 0:B.createdAt)!=ae(v.createdAt)?"flex items-center justify-center   flex-shrink-0 ":" invisible "} `,children:Number.isInteger(Number((F=e.info_chat)==null?void 0:F.pic))?d.jsx(pe,{name:(G=e.info_chat)!=null&&G.name?(ee=e.info_chat)==null?void 0:ee.name:"user",fontSize:"small",backgroundColor:Number.isInteger(Number((X=e.info_chat)==null?void 0:X.pic))?r[(_e=e.info_chat)==null?void 0:_e.pic]:"red",fontColor:((U=e.info_chat)==null?void 0:U.pic)==3?"black":"azure",width:"35px",height:"35px"}):d.jsx(pe,{name:(Y=e.info_chat)!=null&&Y.name?(ne=e.info_chat)==null?void 0:ne.name:"user",fontSize:"small",src:o,width:"35px",height:"35px"})}):"",d.jsx("div",{className:v.SenderId!=l._id?` ml-2 text-sm ${t?"left-dark":"bg-white"} shadow rounded-lg`:` mr-3 flex flex-row text-sm ${t?"right-dark":"bg-indigo-100"}   shadow rounded-lg`,children:d.jsxs("div",{className:" py-0.5  px-4 pl-2 ",children:[d.jsx("p",{className:' "pb-1 font-mono pr-6  text-base/6 "',children:v.message}),d.jsx("div",{className:`${t?"text-white":"text-gray-500"}  text-right  ${((xe=j[w+1])==null?void 0:xe.SenderId)!=v.SenderId||ae((et=j[w+1])==null?void 0:et.createdAt)!=ae(v.createdAt)&&((tt=j[w+1])==null?void 0:tt.SenderId)==v.SenderId?" pb-4":"hidden"}`,style:{fontSize:9,height:"3px"},children:d.jsxs("p",{className:"basis-full pt-0.5   text-right",children:[Mi(v.createdAt)," am"]})})]})})]})]},w)}):d.jsx(Ai,{})})})}),d.jsxs("div",{class:` ${t?"footer-dark":" bg-white "} flex flex-row items-center h-16 rounded-xl w-full px-4`,children:[d.jsx("div",{children:d.jsx("button",{class:"flex items-center justify-center text-gray-400 hover:text-gray-600",children:d.jsx("svg",{class:"w-5 h-5",fill:"none",stroke:"currentColor",viewBox:"0 0 24 24",xmlns:"http://www.w3.org/2000/svg",children:d.jsx("path",{"stroke-linecap":"round","stroke-linejoin":"round","stroke-width":"2",d:"M15.172 7l-6.586 6.586a2 2 0 102.828 2.828l6.414-6.586a4 4 0 00-5.656-5.656l-6.415 6.585a6 6 0 108.486 8.486L20.5 13"})})})}),d.jsx(yn,{value:b,onChange:p,onKeyDown:v=>{v.key=="Enter"&&v.target.innerHTML!=""&&V()},fontFamily:"nonito",borderColor:"gray",borderRadius:15}),d.jsx("div",{class:"ml-4",children:d.jsxs("button",{onClick:()=>{V()},className:`flex items-center justify-center ${b!=""?"bg-indigo-500 hover:bg-indigo-600":"bg-gray-300 "} rounded-xl text-black px-4 py-1 flex-shrink-0`,disabled:b=="",children:[d.jsx("span",{children:"Send"}),d.jsx("span",{class:"ml-2",children:d.jsx("svg",{class:"w-4 h-4 transform rotate-45 -mt-px",fill:"none",stroke:"currentColor",viewBox:"0 0 24 24",xmlns:"http://www.w3.org/2000/svg",children:d.jsx("path",{"stroke-linecap":"round","stroke-linejoin":"round","stroke-width":"2",d:"M12 19l9 2-9-18-9 18 9-2zm0 0v-8"})})})]})})]})]})})]}):d.jsx(Di,{})})}const Oi=Object.freeze(Object.defineProperty({__proto__:null,default:wn},Symbol.toStringTag,{value:"Module"})),kn=x.createContext(null);function Vi(){const e=[null,"green","blue","white","gray","red"],t=Xe(C=>C.Auth_check.user_Info),[n,r]=x.useState(),[o,i]=x.useState(),[a,l]=x.useState(),[c,u]=x.useState(d.jsx(wn,{})),[s,b]=x.useState(!1),{onlineUser:p,notifications:_,updateNotification:g}=x.useContext(Bt),[k,$]=x.useState(),j=()=>{$(!k)},L=C=>{let z=0;return _.map(D=>{D.senderId==C&&D.isRead===!1&&z++}),z>=1?z:!1},E=Ot(),R=C=>{const z=_.filter(f=>f.senderId===C);return z.length<1?!1:z.reduce((f,h)=>new Date(h.date)>new Date(f.date)?h:f,z[0]).date},P=C=>{if(_.length>=1){const z=_.filter(D=>D.senderId!==C);g(z),ge.delete(`${ue}/notifications/${C}/${t._id}`,{headers:{Authorization:`Bearer ${t.token}`}}),$(!k)}else return},I=C=>{const z=_.filter(D=>D.senderId==C&&D.isRead===!1);return z.length>0?z.reduce((f,h)=>new Date(h.date)>new Date(f.date)?h:f,z[0]).message:!1},q=async()=>{await ge.get(`${ue}/chats/${t._id}`,{headers:{Authorization:`Bearer ${t.token}`}}).then(C=>{V(C.data)}).catch(C=>console.log(C))},V=async C=>{var D,f,h,y;let z=[];if(!(C.length<1)){for(let v=0;v<C.length;v++){let w=(D=C[v].chat)==null?void 0:D.members.find(N=>N!=t._id),M=await ge.get(`${ue}/users/find/${w}`,{headers:{Authorization:`Bearer ${t.token}`}});z.push({...M.data,id_Chat:(f=C[v].chat)==null?void 0:f._id,created_chat:(h=C[v].chat)==null?void 0:h.createdAt,last_message:(y=C[v])==null?void 0:y.lastMessage})}z.sort((v,w)=>{var B,F;const M=new Date((B=v.last_message)==null?void 0:B.createdAt);return new Date((F=w.last_message)==null?void 0:F.createdAt)-M}),i(z),r(z),b(!0)}},J=C=>C[0].toUpperCase()+C.substring(1),Z=C=>{let z=C.target.value.toLowerCase(),D=n.filter(f=>f.name.toLowerCase().indexOf(z)!==-1);i(D)};async function H(C){l(C.name);const z=A.lazy(()=>Pn(()=>Promise.resolve().then(()=>Oi),void 0));u(d.jsx(x.Suspense,{fallback:d.jsx(Tn,{}),children:d.jsx(z,{info_chat:C})})),E({type:"openEdChat",payload:C})}const O=C=>C.length>32?C.slice(0,37)+"...":C;return x.useEffect(()=>{q()},[k,_]),d.jsxs("main",{className:" flex flex-row  h-screen   ",style:{overflow:"hidden"},children:[d.jsxs("div",{className:" flex flex-col bg-black h-screen   basis-[30%]       border-solid   shadow-2xl ",children:[d.jsxs("div",{className:"flex flex-row pt-2 mt-12 ",children:[d.jsx("div",{className:"flex-initial  w-48 h-10  ",children:d.jsx("h5",{className:"text-xl text-white pl-2",children:d.jsx("b",{children:" Chats"})})}),d.jsx("div",{className:"flex-initial w-full   mr-2",children:d.jsxs("div",{className:"inline-flex w-full pl-6 pr-0",children:[d.jsx("span",{class:"inline-flex  items-center px-3  text-sm text-gray-900 bg-gray-200 border border-r-0 border-gray-300 rounded-l-md dark:bg-gray-600 dark:text-gray-400 dark:border-gray-600",children:d.jsx("i",{className:"",children:d.jsx(Se,{icon:Ht})})}),d.jsx("input",{type:"text",id:"website-admin",class:"rounded-none rounded-r-lg bg-gray-50 border text-gray-900 focus:ring-blue-500 focus:border-blue-500 block flex-1 min-w-0 w-full text-sm border-gray-300 p-1  dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500",placeholder:"Find a chat ...",onChange:C=>{Z(C)}})]})}),d.jsx("div",{className:"flex-auto  w-5 h-10 ",children:d.jsx("b",{className:" inline-flex text-white pt-1 ",children:d.jsx(Je,{})})})]}),d.jsx("hr",{}),d.jsx("div",{className:"overflow-y-auto",children:s?(o==null?void 0:o.length)>0?o.map((C,z)=>{var D,f,h,y;return d.jsx("div",{className:"pl-2 pr-2  ",children:d.jsxs("div",{className:`p-2 flex flex-nowrap hover:bg-gray-700  border-b-2 mt-1  ${C.name==a?"bg-gray-700":"border-gray-600/50"} rounded-md  w-full`,onClick:()=>{H(C),P(C._id)},children:[Number.isInteger(Number(C.pic))?d.jsx(pe,{name:C.name?C.name:"user",fontSize:"large",backgroundColor:Number.isInteger(Number(C.pic))?e[C.pic]:"red",fontColor:C.pic==3?"black":"azure",width:"50px",height:"50px"}):d.jsx("img",{src:`${ue}/users/${C.pic}`,alt:"User Profile ",className:"  rounded-[50%] flex-1 w-[50px] h-[50px]"}),p&&p.some(v=>v.userId===C._id)?d.jsx("div",{className:"rounded-full animate-pulse   w-3 h-2.5 bg-green-600",style:{position:"relative",right:"2%",bottom:"1%"}}):d.jsx("div",{className:"rounded-full  w-3 h-2.5 ",style:{position:"relative",right:"2%",bottom:"1%"}}),d.jsxs("div",{className:" w-full",children:[d.jsxs("span",{className:"flex flex-row ",style:{width:"100%"},children:[d.jsxs("h2",{className:" text-white pl-0 col-span-4 basis-1/2 ",children:[" ",J(C.name)]}),d.jsx("p",{className:"text-white  text-xs basis-1/2 text-right ",children:R(C._id)?rt(R(C._id||C.SendAt)).calendar():rt((D=C.last_message)==null?void 0:D.createdAt).calendar()})]}),d.jsxs("span",{className:" flex flex-row",children:[d.jsx("p",{className:`${I(C._id)?"text-white":" text-gray-300"} pl-2 col-span-4  w-full  `,style:{width:"100%"},children:O(I(C._id)?I(C._id):C.last_message?`${((f=C.last_message)==null?void 0:f.SenderId)===C._id?"":"You :"} ${(h=C.last_message)==null?void 0:h.message}`:"Send the first Message... ")}),L(C._id)?d.jsx("span",{className:"text-white pl-2 pr-2 h-6  rounded-full   bg-green-600 text-center",style:{fontSize:14},children:L(C._id)}):d.jsx("span",{className:`text-white text-xm pl-4 ${((y=C.last_message)==null?void 0:y.SenderId)===C._id?"hidden":""}`,children:d.jsx(Se,{color:"green",icon:On})})]})]})]})},z)}):d.jsxs("div",{className:"text-white text-center  mt-[10%]",children:[d.jsxs("h1",{children:[d.jsx("br",{}),d.jsx("br",{}),"No chat found ,create your first chat...!"," "]})," ",d.jsx("button",{className:"bg-blue-600 hover:bg-blue-400 rounded-lg w-40 h-10 mt-10 text-center ",children:"Create Chat"})]}):d.jsx(Xn,{})})]}),d.jsx("div",{className:"h-screen col-span-2 basis-[70%]  grid mt-12 text-black",children:d.jsx(kn.Provider,{value:{handelMessageSended:j},children:c})})]})}export{kn as MessageSnded,Vi as default};
