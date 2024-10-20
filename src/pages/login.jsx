import axios from 'axios';
import { useState } from 'react';
import { Link } from 'react-router-dom';
import {useDispatch} from 'react-redux';
import { useNavigate } from 'react-router-dom';
import { CircularProgress } from '@mui/material';
import { decryptData } from '../EncryptData';
import { baseUrl } from '../touls';
import Left_Side_Auth from './left_Side_Auth';
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
		navigate('/home/');
		window.location.reload();
	}

   const handelLogin= async(e)=>{
    e.preventDefault()
	setisload(true);
 await axios.post(`${baseUrl}/users/login`,{email:Email,password:Password})
 .then((res)=>{succes_Login(res.data);setisload(false)})
 .catch(err=>{	dispatch({type:"error",payload:{message:err.response?.data?.message ? err.response?.data?.message :"Server Error  Try Again ..!",openError:true}});
 setisload(false)});
}
    
    return ( <>

<Left_Side_Auth>
		<form className="bg-white" onSubmit={handelLogin}>
		<h1 className="text-gray-800 font-bold text-2xl flex justify-center items-center mb-1"><img src="logo_.png" alt="logo wesh" width={70} /></h1>
			<p className="text-xl flex justify-center items-center font-normal text-gray-600 mb-7">Welcome Back</p>
		
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
							<span className="text-sm ml-2 mb-2 mt-4 flex justify-center items-center hover:text-blue-500 cursor-pointer"><Link to='/register'>	You don't have an account<b> Register</b></Link> ?</span>
							<hr />
							<span className="text-sm ml-2 mt-2 flex justify-center items-center hover:text-blue-500 cursor-pointer"><Link to='/ForgotPassword'>Forgot your password ?</Link> ?</span>

							
		</form>
		</Left_Side_Auth>
    </> );
}
 
export default Login;