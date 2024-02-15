import React, { useState } from 'react'
import axios from 'axios'
import './SignUp.css'
function SignUp() {
const [name,setName]=useState("")
const [email,setEmail]=useState("")
const [password,setPassword]=useState("")
const [role,setRole]=useState("") 


    const sign=()=>{
        axios.post("http://localhost:8000/auth/signup",{
            name:name,
            email:email,
            password:password,
            role:role 
        }).then((res)=>{
           console.log(res,"seccsesfuly");
        }).catch((err)=>{
            console.log(err);
        })
    }
  return (
   

    <div>
      <div className="SignUp w-[1440px] h-[1561px] relative bg-white">
 
  <div className="Header left-[135px] top-[86px] absolute justify-start items-center gap-[210px] inline-flex">
    <div className="Frame556 justify-start items-start gap-[232px] flex">
      <div className="Logo w-[118px] h-6 justify-center items-center flex">
        <div className="Exclusive text-black text-2xl font-bold font-['Inter'] leading-normal tracking-wide">Exclusive</div>
      </div>
      <div className="Frame554 justify-start items-start gap-12 flex">
      <button className="Header w-12 h-6 justify-center items-center flex">
  <div className="Home text-center text-black text-base font-normal font-['Poppins'] leading-normal">Home</div>
</button>

<button className="Header w-[66px] h-6 justify-center items-center flex">
  <div className="Contact text-center text-black text-base font-normal font-['Poppins'] leading-normal">Contact</div>
</button>

<button className="Header w-12 h-6 justify-center items-center flex">
  <div className="About text-center text-black text-base font-normal font-['Poppins'] leading-normal">About</div>
</button>

<button className="Header flex-col justify-start items-center inline-flex">
  <div className="SignUp text-center text-black text-base font-normal font-['Poppins'] leading-normal">Sign Up</div>
  <div className="Underline w-[61px] h-[0px] opacity-50 justify-center items-center inline-flex">
    <div className="Line1 w-[61px] h-[0px] border border-black"></div>
  </div>
</button>

      </div>
    </div>
    <div className="Frame552 justify-start items-center gap-6 flex">
      <div className="SearchComponentSet pl-5 pr-3 py-[7px] bg-neutral-100 rounded flex-col justify-center items-center gap-2.5 inline-flex">
        <div className="Frame550 justify-center items-center gap-[34px] inline-flex">
          <div className="WhatAreYouLookingFor opacity-50 text-black text-xs font-normal font-['Poppins'] leading-[18px]">What are you looking for?</div>
          <div className="Component2 w-6 h-6 p-1 justify-center items-center flex" />
        </div>
      </div>
    </div>
  </div>
  <div className="Line3 w-[1440px] h-[0px] left-0 top-[140px] absolute justify-center items-center inline-flex">
    <div className="Line3 w-[1440px] h-[0px] origin-top-left rotate-180 opacity-30 border border-black"></div>
  </div>
  <div className="Frame760 left-0 top-[200px] absolute justify-start items-center gap-[129px] inline-flex">
    <div className="SideImage pt-[75px] bg-slate-300 rounded-tr rounded-br justify-end items-center flex">
      <img className="DlBeatsnoop1 w-[919px] h-[706px]" src="https://media.istockphoto.com/id/1213907347/vector/3d-smartphone-online-shopping-concepts.jpg?s=612x612&w=0&k=20&c=aTMEyPgfWIdltv0uQoZa_QkgMoitcZDaHaSQOX3L47A=" />
    </div>
    <div className="Frame759 flex-col justify-start items-start gap-12 inline-flex">
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
        placeholder=" name"
        onChange={(e)=>{setName(e.target.value)}}
      />
    </div>
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
    <div className="flex-col justify-start items-start gap-2 flex">
  <div className="opacity-40 text-black text-base font-normal font-['Poppins'] leading-normal">Role</div>
  
  <div className="flex items-center gap-4">
    
    
    <label className="radio-container">
      User
      <input
        type="radio"
        name="role"
        value="user"
        checked={role === "user"}
        onChange={() => setRole("user")}
      />
      <span className="checkmark"></span>
    </label>
    
    <label className="radio-container">
      Seller
      <input
        type="radio"
        name="role"
        value="seller"
        checked={role === "seller"}
        onChange={() => setRole("seller")}
      />
      <span className="checkmark"></span>
    </label>
  </div>
</div>


        </div>
        <div className="Frame752 flex-col justify-start items-start gap-4 flex">
        <button className="Button px-[122px] py-4 bg-red-500 rounded justify-center items-center gap-2.5 inline-flex" onClick={()=> sign()} >
  <div className="ViewAllProducts text-neutral-50 text-base font-medium font-['Poppins'] leading-normal">
    Create Account
  </div>
</button> 
        </div>
      </div>
    </div>
  </div>
</div>
    </div>
  )
}

export default SignUp



