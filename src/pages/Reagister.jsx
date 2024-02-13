import { useRef, useState } from "react";
import { Link,useNavigate } from "react-router-dom";
import axios from 'axios';
import { useDispatch } from "react-redux";
import { baseUrl } from "../touls";
const Register = () => {
	const navigate=useNavigate();
	const dispatch=useDispatch();
    const Username=useRef('');
    const Email=useRef('');
    const Password=useRef('');
    const C_Password=useRef('');
	const [err,seterr]=useState({username:'',email:'',password:'',C_Password:''});

    const handelRegister= async(e)=>{
        e.preventDefault();
	const success=(res)=>{
		 setTimeout(() => {
			navigate('/login');
		  }, 2000);
		dispatch({type:"succes",payload:{message:"Account created with success" ,openSuccess:true}})
		return ;
	}	
	if(! Username.current.value.match(/^[a-zA-Z0-9_]{6,}$/) ) {seterr({...err,username:'Type a Valide Username !'}); return 0;}
	if(! Email.current.value.match(/[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}/) ) {seterr({...err,username:'Type a Valide Email !'}); return 0;}
		if(Password.current.value!=C_Password.current.value ) {seterr({...err,C_Password:'You must confirm the password!'}); return 0;}
       await axios.post(`${baseUrl}/users/register`,{
		name:Username.current.value,
		email:Email.current.value,
		password:Password.current.value,
		C_Password:C_Password.current.value
	   }).then(res=>	success(res.data))
	   .catch(err=> err.response.data.Username ? seterr({...err,username:'Username already exists !'}) :	dispatch({type:"error",payload:{message:err.response.data.message,openError:true}}))
    }
    return ( <>
   
<div class="h-screen md:flex">
<div
		class="relative overflow-hidden md:flex w-1/2 bg-gradient-to-tr from-blue-900 to-purple-900 i justify-around items-center hidden">
		<div>
			<h1 class="text-white font-bold text-4xl font-sans">&lt; /X-CHAT &gt;</h1>
			<p class="text-white text-center mt-1">APP Chat</p>

		</div>
		<div class=" absolute -bottom-32 -left-40 w-80 h-80 border-4 rounded-full border-opacity-30 border-t-8"></div>
		<div class="animate-pulse    absolute -bottom-42 -left-30 w-80 h-80 border-4 rounded-full border-opacity-30 border-t-8" style={{borderRadius: '50%',background: '#5b5fc2',boxShadow: '8px -8px 21px #3a3d7c, -8px 8px 21px #7c81ff',}}></div>
		<div class="  absolute -bottom-52 -left-50 w-80 h-80 border-4 rounded-full border-opacity-30 border-t-8"></div>
		<div class="  absolute -bottom-62 -left-60 w-80 h-80 border-4 rounded-full border-opacity-30 border-t-8"></div>

		<div class="  absolute -top-32 -right-40 w-80 h-80 border-4 rounded-full border-opacity-30 border-t-8"></div>
		<div class="  absolute -top-42 -right-30 w-80 h-80 border-4 rounded-full border-opacity-30 border-t-8"></div>
		<div class="  absolute -top-52 -right-50 w-80 h-80 border-4 rounded-full border-opacity-30 border-t-8"></div>
		<div class="  absolute -top-62 -right-60 w-80 h-80 border-4 rounded-full border-opacity-30 border-t-8"></div>
	</div>
	<div class="flex md:w-1/2 justify-center py-10 items-center bg-white">
		<form class="bg-white" onSubmit={handelRegister}>
			<h1 class="text-gray-800 font-bold text-2xl mb-1">Hello !</h1>
			<p class="text-sm font-normal text-gray-600 mb-7">Welcome To<b> X-CHAT</b> </p>
				<div class="flex items-center border-2 py-2 px-3 rounded-2xl  ">
					<svg xmlns="http://www.w3.org/2000/svg" class="h-5 w-5 text-gray-400" fill="none"
						viewBox="0 0 24 24" stroke="currentColor">
						<path stroke-linecap="round" stroke-linejoin="round" stroke-width="2"
							d="M12 11c0 3.517-1.009 6.799-2.753 9.571m-3.44-2.04l.054-.09A13.916 13.916 0 008 11a4 4 0 118 0c0 1.017-.07 2.019-.203 3m-2.118 6.844A21.88 21.88 0 0015.171 17m3.839 1.132c.645-2.266.99-4.659.99-7.132A8 8 0 008 4.07M3 15.364c.64-1.319 1-2.8 1-4.364 0-1.457.39-2.823 1.07-4" />
					</svg>
					<input class="pl-2 w-72 outline-none border-none" type="text" name="Username" id="" placeholder="Username" ref={Username}  required />
				
      </div>
	 <p className="text-red-700   text-xs mb-2 "> &ensp;{err.username}</p>	
	
					<div class="flex items-center border-2 py-2 px-3 rounded-2xl ">
						<svg xmlns="http://www.w3.org/2000/svg" class="h-5 w-5 text-gray-400" fill="none"
							viewBox="0 0 24 24" stroke="currentColor">
							<path stroke-linecap="round" stroke-linejoin="round" stroke-width="2"
								d="M16 12a4 4 0 10-8 0 4 4 0 008 0zm0 0v1.5a2.5 2.5 0 005 0V12a9 9 0 10-9 9m4.5-1.206a8.959 8.959 0 01-4.5 1.207" />
						</svg>
						<input class="pl-2 w-72 outline-none border-none" type="email"  name="Email" id="" placeholder="Email Address" ref={Email}  required />
      </div>
	  <p className="text-red-700 text-xs  mb-2 "> &ensp;{err.email}</p>	
						<div class="flex items-center border-2 py-2 px-3 rounded-2xl ">
							<svg xmlns="http://www.w3.org/2000/svg" class="h-5 w-5 text-gray-400" viewBox="0 0 20 20"
								fill="currentColor">
								<path fill-rule="evenodd"
									d="M5 9V7a5 5 0 0110 0v2a2 2 0 012 2v5a2 2 0 01-2 2H5a2 2 0 01-2-2v-5a2 2 0 012-2zm8-2v2H7V7a3 3 0 016 0z"
									clip-rule="evenodd" />
							</svg>
							<input class="pl-2 outline-none w-72 border-none" type="password"  name="Password" id="" placeholder="Password" pattern="^.{8,}$" ref={Password} required />
      </div>
	  <p className="text-red-700 text-xs  mb-2 "> &ensp;{err.password}</p>	

      
      <div class="flex items-center border-2 py-2 px-2 rounded-2xl">
							<svg xmlns="http://www.w3.org/2000/svg" class="h-5 w-5 text-gray-400" viewBox="0 0 20 20"
								fill="currentColor">
								<path fill-rule="evenodd"
									d="M5 9V7a5 5 0 0110 0v2a2 2 0 012 2v5a2 2 0 01-2 2H5a2 2 0 01-2-2v-5a2 2 0 012-2zm8-2v2H7V7a3 3 0 016 0z"
									clip-rule="evenodd" />
							</svg>
							<input class="pl-2 w-72 outline-none border-none" type="password" name="C_Password" id="" placeholder="Password confirmation" pattern="^.{8,}$" ref={C_Password}  required/>
      </div>
	  <p className="text-red-700  text-xs"> &ensp;{err.C_Password}</p>	


							<button type="submit" class="block w-full bg-indigo-600 mt-4 py-2 rounded-2xl text-white font-semibold mb-2">Reagister</button>
							<span class="text-sm ml-2 hover:text-blue-500 cursor-pointer">you already have an account <b><Link to='/login'>Login</Link></b> ?</span>
		</form>
	</div>
</div>
    </> );
}
 
export default Register;