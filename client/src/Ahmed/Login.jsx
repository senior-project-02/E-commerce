import React, {useEffect, useState } from 'react'
import { jwtDecode } from 'jwt-decode' 
import Cookies from 'js-cookie';
import axios from 'axios';


import './SignUp.css'
import Nav from '../Aymen/Nav'
import Footer from '../Aymen/Footer'
import { useNavigate } from 'react-router-dom';

function Login() {
  const navigate = useNavigate();
    const [email,setEmail]=useState("")
    const [password,setPassword]=useState("")
const [token,setToken]=useState("")
// const user = jwtDecode(token)
const [user, setUser] = useState(null) 
console.log(user,"the token decoded");

Cookies.set('token', token, { expires: 7, secure: true });
const header={
  headers: {
        Authorization : `Bearer ${token}`
    }
   
}
console.log(header,"this is header");
const sajl=()=>{  
        axios.post("http://localhost:8000/auth/login",{
           email: email,

           password: password
       },header
        ).then((response)=>{
           setToken(response.data.token)
           const tkn = jwtDecode(response.data.token)
           setUser(tkn)
          
       })
       
       const { role } = user;
       if (role === 'admin') {
         navigate(`/Admin/All`);
       } else if (role === 'user') {
         navigate(`/:${user.iduser}`);
       } else if (role === 'seller') {
         navigate('/Seller');
       } else {
        
         navigate('/');
       }
     }
       
       
       
     

useEffect(() => {
   const allCookies = Cookies.get("token");
   console.log('All Cookies:', allCookies);
 }, []);

  return (
   

    <div>
      <Nav/>
      <div className="SignUp w-full   bg-white" >
 
  
  <div className="Line3 w-full h-0 left-0   justify-center items-center inline-flex">
    <div className="Line3 w-full h-[0px] origin-top-left rotate-180 opacity-30 border border-black"></div>
  </div>
  <div className="Frame760  justify-around   items-center flex">
    <div className="SideImage rounded-tr rounded-br justify-end items-center flex">
      <img className="DlBeatsnoop1 w-full h-1/4" src="https://media.istockphoto.com/id/1213907347/vector/3d-smartphone-online-shopping-concepts.jpg?s=612x612&w=0&k=20&c=aTMEyPgfWIdltv0uQoZa_QkgMoitcZDaHaSQOX3L47A=" />
    </div>
    <div className="Frame759 flex-col justify-start items-start gap-12 flex">
      <div className="Frame753 flex-col justify-start items-start gap-6 flex">
        <div className="CreateAnAccount text-black text-4xl font-medium font-['Inter'] leading-[30px] tracking-wider">Create an account</div>
        <div className="EnterYourDetailsBelow text-black text-base font-normal font-['Poppins'] leading-normal">Enter your details below</div>
      </div>
      <div className="Frame758 flex-col justify-start items-center gap-10 flex">
        <div className="Frame757 flex-col justify-start items-start gap-10 flex">
       
    <div className="flex-col justify-start items-start gap-2 flex">
      <div className="opacity-40 text-black text-base font-normal font-['Poppins'] leading-normal"></div>
      <input
        type="text"
        className="login__input"
        placeholder="email"
        onChange={(e)=>{setEmail(e.target.value)}}
    />
    </div> 
    <div className="flex-col justify-start items-start gap-2 flex">
      <div className="opacity-40 text-black text-base font-normal font-['Poppins'] leading-normal"></div>
      <input
        type="password"
        className="login__input"
        placeholder=" password"
        onChange={(e)=>{setPassword(e.target.value)}}
      />
    </div>
        </div>
        <div className="Frame752 flex-col justify-start items-start gap-4 flex">
        <button className="Button px-[122px] py-4 bg-red-500 rounded justify-center items-center gap-2.5 inline-flex" onClick={()=> sajl()  } >
  <div className="ViewAllProducts text-neutral-50 text-base font-medium font-['Poppins'] leading-normal">
    Login 
  </div>
</button> 
        </div>
      </div>
    </div>
  </div>
  
</div>
<Footer/>
    </div>
   
  )
}

export default Login



