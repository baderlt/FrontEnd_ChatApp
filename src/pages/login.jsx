import axios from 'axios';
import { useState } from 'react';
import { Link } from 'react-router-dom';
import {useDispatch} from 'react-redux';
import { useNavigate } from 'react-router-dom';
import { CircularProgress } from '@mui/material';
import { decryptData } from '../EncryptData';
import { baseUrl } from '../touls';
const Login = () => {
	const dispatch=useDispatch();
	const navigate=useNavigate();
    const [isload,setisload]=useState(false);
    const [Email,SetEmail]=useState('');
    const  [Password,setpassword]=useState('');
	// const test =import.meta.env.Base_URL;
	const succes_Login=async (data)=>{
		setisload(true);
		const data_decrypted=decryptData(data);
		dispatch({type:'isauth',payload:data_decrypted});
		localStorage.setItem('info_User',data)
		navigate('/home');
		window.location.reload();
	}

   const handelLogin= async(e)=>{
    e.preventDefault()
 await axios.post(`${baseUrl}/users/login`,{email:Email,password:Password})
 .then((res)=>succes_Login(res.data))
 .catch(err=>	dispatch({type:"error",payload:{message:err.response?.data?.message ? err.response?.data?.message :"Server Error Try Again ..!",openError:true}}));
}
    
    return ( <>

<div className="h-screen md:flex">
	<div
		className="relative overflow-hidden md:flex w-1/2 bg-gradient-to-tr from-blue-900 to-purple-900 i justify-around items-center hidden">
		<div>
			<h1 className="text-white font-bold text-4xl font-sans">&lt; /X-CHAT &gt;</h1>
			<p className="text-white text-center mt-1">APP Chat</p>

		</div>
		<div className=" absolute -bottom-32 -left-40 w-80 h-80 border-4 rounded-full border-opacity-30 border-t-8"></div>
		<div className="animate-pulse    absolute -bottom-42 -left-30 w-80 h-80 border-4 rounded-full border-opacity-30 border-t-8" style={{borderRadius: '50%',background: '#5b5fc2',boxShadow: '8px -8px 21px #3a3d7c, -8px 8px 21px #7c81ff',}}></div>
		<div className="  absolute -bottom-52 -left-50 w-80 h-80 border-4 rounded-full border-opacity-30 border-t-8"></div>
		<div className="  absolute -bottom-62 -left-60 w-80 h-80 border-4 rounded-full border-opacity-30 border-t-8"></div>

		<div className="  absolute -top-32 -right-40 w-80 h-80 border-4 rounded-full border-opacity-30 border-t-8"></div>
		<div className="  absolute -top-42 -right-30 w-80 h-80 border-4 rounded-full border-opacity-30 border-t-8"></div>
		<div className="  absolute -top-52 -right-50 w-80 h-80 border-4 rounded-full border-opacity-30 border-t-8"></div>
		<div className="  absolute -top-62 -right-60 w-80 h-80 border-4 rounded-full border-opacity-30 border-t-8"></div>
	</div>
	<div className="flex md:w-1/2 justify-center py-10 items-center bg-white">
		<form className="bg-white" onSubmit={handelLogin}>
			<h1 className="text-gray-800 font-bold text-2xl mb-1">Hello Again!</h1>
			<p className="text-sm font-normal text-gray-600 mb-7">Welcome Back</p>
		
					<div className="flex items-center border-2 py-2 px-3 rounded-2xl mb-4 ">
						<svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 text-gray-400" fill="none"
							viewBox="0 0 24 24" stroke="currentColor">
							<path stroke-linecap="round" stroke-linejoin="round" stroke-width="2"
								d="M16 12a4 4 0 10-8 0 4 4 0 008 0zm0 0v1.5a2.5 2.5 0 005 0V12a9 9 0 10-9 9m4.5-1.206a8.959 8.959 0 01-4.5 1.207" />
						</svg>
						<input className="pl-2 outline-none w-72 border-none" type="text"  value={Email} name="Email" id="email" placeholder="Email Address" onChange={(e)=>SetEmail(e.target.value)} required />
      </div>
						<div className="flex items-center border-2 py-2 px-3 rounded-2xl">
							<svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 text-gray-400" viewBox="0 0 20 20"
								fill="currentColor">
								<path fill-rule="evenodd"
									d="M5 9V7a5 5 0 0110 0v2a2 2 0 012 2v5a2 2 0 01-2 2H5a2 2 0 01-2-2v-5a2 2 0 012-2zm8-2v2H7V7a3 3 0 016 0z"
									clip-rule="evenodd" />
							</svg>
							<input className="pl-2 outline-none w-72 border-none" type="password" value={Password} name="password" id="password" placeholder="Password" onChange={(e)=>setpassword(e.target.value)} required/>
      </div>
							<button type="submit" className="block w-full bg-indigo-600 mt-4 py-2 rounded-2xl text-white font-semibold mb-2">{isload?<CircularProgress size={20} />:'Login'}</button>
							<span className="text-sm ml-2 hover:text-blue-500 cursor-pointer"><Link to='/register'>	You don't have an account<b> Register</b></Link> ?</span>
		</form>
	</div>
</div>
    </> );
}
 
export default Login;