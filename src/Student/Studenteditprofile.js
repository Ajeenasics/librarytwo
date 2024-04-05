import React, { useState,useEffect } from 'react';
import './Studenteditprofile.css';
import axios from "axios";
import { useParams,useNavigate } from "react-router-dom";
import { useNavigate } from "react-router-dom";


function Studenteditprofile() {
  const navigate=useNavigate();

const [firstname,setFirstname]=useState()
const [lastname,setLastname]=useState()
const [email,setEmail]=useState()
const [phonenumber,setPhonenumber]=useState()
const [data,setData]=useState({})

const changename=(e)=>{
  setFirstname(e.target.value)
}
const changelastname=(e)=>{
  setLastname(e.target.value)
}
const changeemail=(e)=>{
  setEmail(e.target.value)
}
    
const changephonenumber=(e)=>{
  setPhonenumber(e.target.value)
}
 
const id=localStorage.getItem('studentid')
const nameid=()=>{
    axios.get(`http://localhost:4000/findname/${id}`).then((response)=>{
        setData(response.data.data)
    })
    .catch((err)=>{
        setData(err)
    })
}
useEffect(() => {
  nameid()
}, [])

const updateid = async() => {
  
  try{
  await axios.post(`http://localhost:4000/updateone/${id}`,{firstname,lastname,email,phonenumber})
      alert('Content update successfully')

      navigate('/Shome')

  }
  catch(err){
    console.error(err.response.data.msg);
  }
}
  return (
    <div>
        
        <div class="seditborder">
            <h2 class="shead">EDIT PROFILE</h2>
            <input class="sinp" name="firstname" type="text" placeholder={data.firstname} onChange={changename}/><br/><br/>
            <input class="sinp" name="lastname" type="text" placeholder={data.lastname} onChange={changelastname}/><br/><br/>
            <input class="sinp" name="email" type="email" placeholder={data.email} onChange={changeemail}/><br/><br/>
            <input class="sinp" name="phonenumber" type="text" placeholder={data.phonenumber} onChange={changephonenumber}/><br/><br/>
            <button type="button" class="btn btn-outline-warning" onClick={updateid}>SAVE</button>
        </div>
        
    </div>
  )
}

export default Studenteditprofile