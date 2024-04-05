import React, { useState,useEffect } from 'react';
import './Studenthome.css';
import lib4 from '../Assets/lib4.jpg'
import Studentnav from '../Nav/Studentnav';
import Footer from '../Footer/Footer';
import axios from 'axios';

function Studenthome() {
  
const [data,setData]=useState();
const id=localStorage.getItem('studentid')
const viewid = () => {
  // console.log("id:",id);
  axios
    .get(`http://localhost:4000/findname/${id}`)
    .then((response) => {
      setData(response.data.data.firstname);
      // console.log(response.data.data.firstname);
      // console.log(data);
    })
    .catch((err) => {
      setData(err);
    });
};

useEffect(() => {
viewid()
}, [])


  return (
    <div>

<Studentnav/>

<div class="homebord">
  <div class="homediv">
  <img class="homeimg" src={lib4}/>
  </div>
  <div class="homediv2">
    <p class="homewelcome">WELCOME</p>

    <p class="homename">{data}</p>
    <button type="button" class="btn btn-outline-warning">VIEW BOOKS</button>
  </div>
</div>


<Footer/>
    </div>
  )
}

export default Studenthome