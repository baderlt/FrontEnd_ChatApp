import React, { Suspense } from 'react'
import { useEffect, useState } from 'react'
import {Routes,Route,useNavigate, Navigate} from 'react-router-dom' 

import Home from './pages/Home';
import Login from './pages/login';
import Register from './pages/Reagister';
import { useSelector } from 'react-redux';
import { useDispatch } from 'react-redux'; 
import NewChat from './pages/NewChat';
import Loading_App from './Loding/Loading_App';


const LazyHome = React.lazy(()=>import("./pages/Home"))
const LazyLogin = React.lazy(()=>import("./pages/login"))
const LazyNewChat = React.lazy(()=>import('./pages/NewChat'))
const LazyRegister = React.lazy(()=>import("./pages/Reagister"))

function App() {
let url_Curent=window.location.href;
 const navigate=useNavigate();
 const dispatch=useDispatch();
 const globale_State=useSelector(state=>state.alert.composant);

const [isauth,setisauth]=useState(false);


 const check_Auth_User=async()=>{
   const info=localStorage.getItem('info_User');
  
  if(!info) return navigate('/login');
  const info_decrypted= await import("./EncryptData").then(({decryptData})=>decryptData(info)) ;
  if(!info_decrypted.isauth) { return navigate('/login')};
  const currentTime = new Date().getTime();
  const dataTimestamp = info_decrypted.timestamp;
  // Calculate the age of the data in milliseconds (1 days = 86 400 000 milliseconds)
  const dataAge = currentTime - dataTimestamp;
  if (dataAge >= 86400000) {
    // Data is older than 1 days, remove it
    localStorage.removeItem('info_User');
    return ;
    
  }else{
 
     setisauth(true);
    dispatch({type:'isauth',payload:info_decrypted});
     return ;
  }
}

useEffect(()=>{
check_Auth_User();
},[])



  return (
    <>

{globale_State}


  <Routes>
  
    <Route path={url_Curent+'/home'}  element={<MiddlewareAuth isAuth={isauth} >
                                      <Suspense fallback={<Loading_App/>} >
                                          <LazyHome/>
                                          </Suspense>
                               </MiddlewareAuth>}/>

    <Route path={url_Curent+'/newChat'} element={<MiddlewareAuth isAuth={isauth} >
      <Suspense fallback={<Loading_App/>}>
        <LazyNewChat/>
      </Suspense>
      </MiddlewareAuth>}/>

     <Route path={url_Curent+'/Login'} element={ <MiddleWarePrevent isAuth={isauth}  >
        <LazyLogin/>
     </MiddleWarePrevent> 
     }/>
      <Route path={url_Curent+'/Register'} element={<Suspense fallback={<Loading_App/>} >
       <LazyRegister/>
     </Suspense> }/>

         <Route path='*' element={isauth?<Home/>:<Login/>}/>
  
    
  </Routes>
  

     
    </>
  )
}

export default App


function MiddlewareAuth({children,isAuth}){

        return  isAuth ? children : <Suspense fallback={<Loading_App/>} >
          <LazyLogin />
        </Suspense> 
}

function MiddleWarePrevent({children,isAuth}){
    return !isAuth ? children : <Navigate to={"/home"} />
}