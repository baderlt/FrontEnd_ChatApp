import{X as C,e as r,j as e,a4 as S,aj as z,a5 as k,a6 as A,ah as $,$ as o,ak as b,al as y,ai as P}from"./index-2234714b.js";const M=({hansleStep:g,handelEmail:f})=>{const m=C(),[l,i]=r.useState(""),[c,d]=r.useState({email:"",valideEmail:!1}),[u,p]=r.useState(""),[j,t]=r.useState(!1),[N,w]=r.useState(),[_,v]=r.useState(!1),a=(n=l)=>n.match(/[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}/)?(d({...c,email:"",valideEmail:!0}),!0):(d({...c,email:" invalid email address"}),!1),s=n=>{if(n.preventDefault(),a()==!1)return!1;u==parseInt(N)?(f(l),g(),console.log("validated")):(m({type:"error",payload:{message:"OTP code incorect ... !",openError:!0}}),t(!1))},x=n=>{let h=n.slice(6,12);w(h),console.log(h)},E=async()=>a(l)==!1?!1:(v(!0),await k.post(`${A}/users/register/sendCode`,{email:l}).then(h=>{v(!1),x(h.data.otp),t(!0)}).catch(h=>{v(!1),m({type:"error",payload:{message:h.response.data.message,openError:!0}})}),!0);return e.jsx(e.Fragment,{children:e.jsxs("form",{className:"bg-white",onSubmit:s,children:[e.jsx("h1",{className:"text-gray-800 font-bold text-2xl flex justify-center items-center mb-1",children:e.jsx("img",{src:"logo_.png",alt:"logo wesh",width:70})}),e.jsxs("p",{className:"flex justify-center items-center font-normal text-xl text-gray-600 mb-7",children:["Welcome To ",e.jsx("b",{children:" Wesh..!"})," "]}),e.jsxs("div",{className:"flex items-center border-2 py-2 px-3 rounded-2xl ",children:[e.jsx("svg",{xmlns:"http://www.w3.org/2000/svg",className:"h-5 w-5 text-gray-400",fill:"none",viewBox:"0 0 24 24",stroke:"currentColor",children:e.jsx("path",{"stroke-linecap":"round","stroke-linejoin":"round","stroke-width":"2",d:"M16 12a4 4 0 10-8 0 4 4 0 008 0zm0 0v1.5a2.5 2.5 0 005 0V12a9 9 0 10-9 9m4.5-1.206a8.959 8.959 0 01-4.5 1.207"})}),e.jsx("input",{className:"pl-2 w-72 outline-none border-none",type:"email",name:"Email",id:"",placeholder:"Email Address",value:l,onChange:n=>{i(n.target.value)},required:!0})]}),e.jsxs("p",{className:"text-red-700 text-xs  mb-2 ",children:["  ",c.email]}),e.jsxs("div",{className:"flex flex-row ",children:[e.jsxs("div",{className:"flex items-center border-2 mb-6 py-2 px-3 rounded-2xl ",children:[e.jsx("svg",{xmlns:"http://www.w3.org/2000/svg",className:"h-5 w-5 text-gray-400",viewBox:"0 0 20 20",fill:"currentColor",children:e.jsx("path",{"fill-rule":"evenodd",d:"M5 9V7a5 5 0 0110 0v2a2 2 0 012 2v5a2 2 0 01-2 2H5a2 2 0 01-2-2v-5a2 2 0 012-2zm8-2v2H7V7a3 3 0 016 0z","clip-rule":"evenodd"})}),e.jsx("input",{className:"pl-2 outline-none w-50 border-none",type:"number",name:"code",id:"",placeholder:"Code",value:u,onChange:n=>p(n.target.value),required:!0})]}),j?e.jsx("img",{src:"Sended.gif",className:"ml-8 flex justify-center items-center w-8 h-8 mt-1.5",alt:"sended"}):e.jsxs("button",{type:"button",className:"border border-green-900  bg-gray-50 text-black font-mono gap-2 ml-2 w-full h-[30px] flex rounded-lg mt-1.5 justify-center items-center",onClick:()=>{E()},children:[e.jsx("svg",{xmlns:"http://www.w3.org/2000/svg",width:"16",height:"16",fill:"currentColor",class:"bi bi-send",viewBox:"0 0 16 16",children:e.jsx("path",{d:"M15.854.146a.5.5 0 0 1 .11.54l-5.819 14.547a.75.75 0 0 1-1.329.124l-3.178-4.995L.643 7.184a.75.75 0 0 1 .124-1.33L15.314.037a.5.5 0 0 1 .54.11ZM6.636 10.07l2.761 4.338L14.13 2.576zm6.787-8.201L1.591 6.602l4.339 2.76z"})}),_?e.jsx(S,{size:20}):"Send"]})]}),e.jsx("button",{type:"submit",className:"block w-full bg-indigo-600 mt-4 py-2 rounded-2xl text-white font-semibold mb-2",children:"Next"}),e.jsx("span",{className:"text-sm ml-2 hover:text-blue-500 cursor-pointer",children:e.jsxs(z,{to:"/login",children:["you already have an account"," ",e.jsx("b",{children:"Login"})," ","?"]})})]})})},R=({email:g})=>{const f=$(),m=C(),l=r.useRef(""),i=r.useRef(""),c=r.useRef(""),[d,u]=r.useState(!1),[p,j]=r.useState({username:"",password:"",C_Password:""}),[t,N]=r.useState({lower:!1,upper:!1,num:!1,char:!1,special:!1});let w=t.lower&&t.upper&&t.num&&t.char&&t.special;const _=async a=>{if(a.preventDefault(),u(!0),!w)return;const s=x=>{u(!1),setTimeout(()=>{f("/login")},2e3),m({type:"succes",payload:{message:"Account created with success",openSuccess:!0}})};if(!l.current.value.match(/^[a-zA-Z0-9_]{6,}$/))return j({...p,username:"Type a Valide Username !"}),u(!1),0;if(i.current.value!=c.current.value)return j({...p,C_Password:"You must confirm the password!"}),u(!1),0;await k.post(`${A}/users/register`,{name:l.current.value,email:g,password:i.current.value,C_Password:c.current.value}).then(x=>s(x.data)).catch(x=>x.response.data.Username?j({...x,username:"Username already exists !"}):m({type:"error",payload:{message:x.response.data.message,openError:!0}}))},v=a=>{let s=t;a.match(/[a-z]/)?s={...s,lower:!0}:s={...s,lower:!1},a.match(/[A-Z]/)?s={...s,upper:!0}:s={...s,upper:!1},a.match(/[0-9]/)?s={...s,num:!0}:s={...s,num:!1},a.length>=8?s={...s,char:!0}:s={...s,char:!1},a.match(/[@#$%&*+!()_-]/)?s={...s,special:!0}:s={...s,special:!1},N(s)};return e.jsx(e.Fragment,{children:e.jsxs("form",{className:"bg-white",onSubmit:_,children:[e.jsx("h1",{className:"text-gray-800 font-bold text-2xl flex justify-center items-center mb-1",children:e.jsx("img",{src:"logo_.png",alt:"logo wesh",width:70})}),e.jsxs("p",{className:"flex justify-center items-center font-normal text-xl text-gray-600 mb-7",children:["Welcome To ",e.jsx("b",{children:" Wesh..!"})," "]}),e.jsxs("div",{className:"flex items-center border-2 py-2 px-3 rounded-2xl  ",children:[e.jsx("svg",{xmlns:"http://www.w3.org/2000/svg",className:"h-5 w-5 text-gray-400",fill:"none",viewBox:"0 0 24 24",stroke:"currentColor",children:e.jsx("path",{"stroke-linecap":"round","stroke-linejoin":"round","stroke-width":"2",d:"M12 11c0 3.517-1.009 6.799-2.753 9.571m-3.44-2.04l.054-.09A13.916 13.916 0 008 11a4 4 0 118 0c0 1.017-.07 2.019-.203 3m-2.118 6.844A21.88 21.88 0 0015.171 17m3.839 1.132c.645-2.266.99-4.659.99-7.132A8 8 0 008 4.07M3 15.364c.64-1.319 1-2.8 1-4.364 0-1.457.39-2.823 1.07-4"})}),e.jsx("input",{className:"pl-2 w-72 outline-none border-none",type:"text",name:"Username",id:"",placeholder:"Username",ref:l,required:!0})]}),e.jsxs("p",{className:"text-red-700   text-xs mb-2 ",children:[" "," ",p.username]}),e.jsxs("div",{className:"flex items-center border-2 mb-6 py-2 px-3 rounded-2xl ",children:[e.jsx("svg",{xmlns:"http://www.w3.org/2000/svg",className:"h-5 w-5 text-gray-400",viewBox:"0 0 20 20",fill:"currentColor",children:e.jsx("path",{"fill-rule":"evenodd",d:"M5 9V7a5 5 0 0110 0v2a2 2 0 012 2v5a2 2 0 01-2 2H5a2 2 0 01-2-2v-5a2 2 0 012-2zm8-2v2H7V7a3 3 0 016 0z","clip-rule":"evenodd"})}),e.jsx("input",{className:"pl-2 outline-none w-72 border-none",type:"password",name:"Password",id:"",placeholder:"Password",pattern:"^.{8,}$",ref:i,onChange:a=>v(a.target.value),required:!0})]}),e.jsxs("div",{className:`m-4 ${i.current.value==""||i.current.value==null?"hidden":""} `,children:[e.jsxs("div",{className:`${t.lower?"text-green-600":"text-red-500"}`,children:[t.lower?e.jsx(o,{size:"xl",icon:b}):e.jsx(o,{size:"xl",icon:y}),"  At least ",e.jsx("b",{children:"one lowercase letter"})," "]}),e.jsxs("div",{className:`${t.upper?"text-green-600":"text-red-500"}`,children:[t.upper?e.jsx(o,{size:"xl",icon:b}):e.jsx(o,{size:"xl",icon:y}),"  At least ",e.jsx("b",{children:"one Uppercase lettre"})," "]}),e.jsxs("div",{className:`${t.num?"text-green-600":"text-red-500"}`,children:[t.num?e.jsx(o,{size:"xl",icon:b}):e.jsx(o,{size:"xl",icon:y}),"  At least ",e.jsx("b",{children:"one Number"})," "]}),e.jsxs("div",{className:`${t.char?"text-green-600":"text-red-500"}`,children:[t.char?e.jsx(o,{size:"xl",icon:b}):e.jsx(o,{size:"xl",icon:y}),"  Minimun ",e.jsx("b",{children:"8 charcters"})," "]}),e.jsxs("div",{className:`${t.special?"text-green-600":"text-red-500"}`,children:[t.special?e.jsx(o,{size:"xl",icon:b}):e.jsx(o,{size:"xl",icon:y}),"  At least ",e.jsx("b",{children:"one Special character"})," "]})]}),e.jsxs("div",{className:"flex items-center border-2 py-2 px-2 rounded-2xl ",children:[e.jsx("svg",{xmlns:"http://www.w3.org/2000/svg",className:"h-5 w-5 text-gray-400",viewBox:"0 0 20 20",fill:"currentColor",children:e.jsx("path",{"fill-rule":"evenodd",d:"M5 9V7a5 5 0 0110 0v2a2 2 0 012 2v5a2 2 0 01-2 2H5a2 2 0 01-2-2v-5a2 2 0 012-2zm8-2v2H7V7a3 3 0 016 0z","clip-rule":"evenodd"})}),e.jsx("input",{className:"pl-2 w-72 outline-none border-none",type:"password",name:"C_Password",id:"",placeholder:"Password confirmation",pattern:"^.{8,}$",ref:c,onChange:a=>{check_pass(a.target.value)},required:!0})]}),e.jsxs("p",{className:"text-red-700  text-xs",children:["  ",p.C_Password]}),e.jsx("button",{type:"submit",className:`block w-full ${w?"bg-indigo-600":"bg-gray-500"} mt-4 py-2 rounded-2xl text-white font-semibold mb-2`,disabled:!w,children:d?e.jsx(S,{size:20}):"Register"}),e.jsx("span",{className:"text-sm ml-2 hover:text-blue-500 cursor-pointer",children:e.jsxs(z,{to:"/login",children:["you already have an account"," ",e.jsx("b",{children:"Login"})," ","?"]})})]})})},L=()=>{const[g,f]=r.useState(1),[m,l]=r.useState(""),i=()=>{f(d=>d.Step+1)},c=d=>{l(d)};return e.jsx(e.Fragment,{children:e.jsx(P,{children:g==1?e.jsx(M,{handelEmail:c,hansleStep:i}):e.jsx(R,{email:m})})})};export{L as default};
