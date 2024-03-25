import React, { useState } from 'react'
import './Slogin.css';
import '../Assets/s1.jpg';
import { Link } from 'react-router-dom';
import axios from 'axios';

function Slogin() {
  const [data,setData]=useState({
    email:"email",
    password:"password"
  })

  const login=(e)=>{
setData({...data,[e.target.name]:e.target.value})
  }

  const Studlogin=()=>{
    if(data.email,data.password){
    axios.post('http://localhost:4000/Slogin',data).then((response)=>{
   if(response.data.status === 200){
    alert('login sucessful');
   }
   else{
    alert('Login Failed')
   }
    })
    .catch((err)=>{
      setData(err)
    })
  }
  else{
    alert('Invalid email or password')
  }
  }
  return (
    <div>
        <div class="slogborder">
            <h2 class="sloghead">STUDENT LOGIN</h2>
            <input class="sloginp" name="email" type="email" placeholder='Email'onChange={login}/><br/><br/>
            <input class="sloginp" name="password" type="password" placeholder='Password' onChange={login}/><br/><br/>
            <button class="slogbut" type="button" onClick={Studlogin}>Log In</button><br/><br/>
            <p class="slogpara1">Forgot  Password</p>
            <p class="slogpara2">New User? <Link to={'/Sregister'}> SignUp </Link></p>
        </div>
    </div>
  )
}

export default Slogin