import React, { useState,useEffect } from 'react';
import './Studentprofile.css'
import Studentnav from '../Nav/Studentnav';
import Footer from '../Footer/Footer';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';

function Studentprofile() {
    const navigate=useNavigate()
const [data,setData]=useState({})

const id=localStorage.getItem('studentid') 
const empdid=()=>{
    axios.get(`http://localhost:4000/findname/${id}`).then((response)=>{
        setData(response.data.data)
    })
    .catch((err)=>{
        setData(err)
    })
}
useEffect(() => {
  empdid()
}, [])

const navdata=()=>{
    navigate('/Sedit')
}


  return (
    <div>
<Studentnav/>
<div class='bord'>
        <p><svg xmlns="http://www.w3.org/2000/svg" width="120" height="120" fill="currentColor" class="bi bi-person-circle" viewBox="0 0 16 16">
  <path d="M11 6a3 3 0 1 1-6 0 3 3 0 0 1 6 0"/>
  <path fill-rule="evenodd" d="M0 8a8 8 0 1 1 16 0A8 8 0 0 1 0 8m8-7a7 7 0 0 0-5.468 11.37C3.242 11.226 4.805 10 8 10s4.757 1.225 5.468 2.37A7 7 0 0 0 8 1"/>
</svg></p>
<p class="name">{data.firstname}</p>
<p>{data.rollno}</p>
<p>{data.email}</p>
<p>{data.phonenumber}</p>
<button type="button" class="btn btn-outline-warning" onClick={navdata }>Edit</button>
        </div>

<Footer/>
    </div>
  )
}

export default Studentprofile