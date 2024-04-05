import React, { useState } from 'react'
import './Slogin.css';
import '../Assets/s1.jpg';
import { Link } from 'react-router-dom';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';
import Studentnav from '../Nav/Studentnav';
import Footer from '../Footer/Footer';


function Slogin() {
  const navigate=useNavigate();
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

    localStorage.setItem('studentid',response.data.data._id)
    console.log(localStorage.getItem('studentid'));

    alert('login sucessful');
    navigate('/Shome')
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
      <Studentnav/>
        <div class="slogborder">
            <h2 class="sloghead">STUDENT LOGIN</h2>
            <input class="sloginp" name="email" type="email" placeholder='Email'onChange={login}/><br/><br/>
            <input class="sloginp" name="password" type="password" placeholder='Password' onChange={login}/><br/><br/>
            <button class="slogbut" type="button" onClick={Studlogin}>Log In</button><br/><br/>
            <p class="slogpara1">Forgot  Password</p>
            <p class="slogpara2">New User? <Link to={'/Sregister'}> SignUp </Link></p>
        </div>
<br/>
        <Footer/>
    </div>
  )
}

export default Slogin