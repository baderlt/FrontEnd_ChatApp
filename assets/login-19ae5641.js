import{X as j,a8 as b,e as o,j as e,a9 as v}from"./index-c5a8ead7.js";import{C as f,a as N,b as y}from"./touls-49a9c05d.js";import{decryptData as _}from"./EncryptData-df9ec7ea.js";const C=()=>{const l=j(),p=b(),[g,t]=o.useState(!1),[r,x]=o.useState(""),[n,h]=o.useState(""),u=async s=>{t(!0);const a=_(s);l({type:"isauth",payload:a}),localStorage.setItem("info_User",s),p("/home/"),window.location.reload()},w=async s=>{s.preventDefault(),t(!0),await N.post(`${y}/users/login`,{email:r,password:n}).then(a=>{u(a.data),t(!1)}).catch(a=>{var i,c,d,m;l({type:"error",payload:{message:(c=(i=a.response)==null?void 0:i.data)!=null&&c.message?(m=(d=a.response)==null?void 0:d.data)==null?void 0:m.message:"Server Error  Try Again ..!",openError:!0}}),t(!1)})};return e.jsx(e.Fragment,{children:e.jsxs("div",{className:"h-screen md:flex",children:[e.jsxs("div",{className:"relative overflow-hidden md:flex w-1/2 bg-gradient-to-tr from-blue-900 to-purple-900 i justify-around items-center hidden",children:[e.jsx("img",{src:"gif.gif",alt:"backgroud",className:"w-[60%] h-[60%]"}),e.jsx("div",{className:"  absolute bottom-[30%] left-[80%]  ",children:e.jsx("img",{src:"logo_.png",className:"w-[40%] h-[40%]",alt:"logo chat app"})}),e.jsx("div",{className:"  absolute bottom-[60%] left-[30%]  ",children:e.jsx("img",{src:"logo_.png",className:"w-[40%] h-[40%]",alt:"logo chat app"})}),e.jsx("div",{className:"  absolute bottom-[20%] left-[10%]  ",children:e.jsx("img",{src:"logo_.png",className:"w-[40%] h-[40%]",alt:"logo chat app"})}),e.jsx("div",{className:"  absolute bottom-[5%] left-[70%]  ",children:e.jsx("img",{src:"logo_.png",className:"w-[40%] h-[40%]",alt:"logo chat app"})}),e.jsx("div",{className:"  absolute bottom-[80%] left-[70%]  ",children:e.jsx("img",{src:"logo_.png",className:"w-[40%] h-[40%]",alt:"logo chat app"})}),e.jsx("div",{className:"  absolute bottom-[70%] left-[10%]  ",children:e.jsx("img",{src:"logo_.png",className:"w-[40%] h-[40%]",alt:"logo chat app"})})]}),e.jsx("div",{className:"flex md:w-1/2 justify-center py-10 items-center bg-white",children:e.jsxs("form",{className:"bg-white",onSubmit:w,children:[e.jsx("h1",{className:"text-gray-800 font-bold text-2xl mb-1",children:"Hello Again!"}),e.jsx("p",{className:"text-sm font-normal text-gray-600 mb-7",children:"Welcome Back"}),e.jsxs("div",{className:"flex items-center border-2 py-2 px-3 rounded-2xl mb-4 ",children:[e.jsx("svg",{xmlns:"http://www.w3.org/2000/svg",className:"h-5 w-5 text-gray-400",fill:"none",viewBox:"0 0 24 24",stroke:"currentColor",children:e.jsx("path",{"stroke-linecap":"round","stroke-linejoin":"round","stroke-width":"2",d:"M16 12a4 4 0 10-8 0 4 4 0 008 0zm0 0v1.5a2.5 2.5 0 005 0V12a9 9 0 10-9 9m4.5-1.206a8.959 8.959 0 01-4.5 1.207"})}),e.jsx("input",{className:"pl-2 outline-none w-72 border-none",type:"text",value:r,name:"Email",id:"email",placeholder:"Email Address",onChange:s=>x(s.target.value),required:!0})]}),e.jsxs("div",{className:"flex items-center border-2 py-2 px-3 rounded-2xl",children:[e.jsx("svg",{xmlns:"http://www.w3.org/2000/svg",className:"h-5 w-5 text-gray-400",viewBox:"0 0 20 20",fill:"currentColor",children:e.jsx("path",{"fill-rule":"evenodd",d:"M5 9V7a5 5 0 0110 0v2a2 2 0 012 2v5a2 2 0 01-2 2H5a2 2 0 01-2-2v-5a2 2 0 012-2zm8-2v2H7V7a3 3 0 016 0z","clip-rule":"evenodd"})}),e.jsx("input",{className:"pl-2 outline-none w-72 border-none",type:"password",value:n,name:"password",id:"password",placeholder:"Password",onChange:s=>h(s.target.value),required:!0})]}),e.jsx("button",{type:"submit",className:"block w-full bg-indigo-600 mt-4 py-2 rounded-2xl text-white font-semibold mb-2",children:g?e.jsx(f,{size:20}):"Login"}),e.jsxs("span",{className:"text-sm ml-2 hover:text-blue-500 cursor-pointer",children:[e.jsxs(v,{to:"/register",children:["	You don't have an account",e.jsx("b",{children:" Register"})]})," ?"]})]})})]})})};export{C as default};