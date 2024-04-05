import React, { useState,useEffect } from 'react';
import b1 from '../Assets/b1.jpg';
import './Studentviewbooks.css'
import Studentnav from '../Nav/Studentnav';
import Footer from '../Footer/Footer';
import axios from 'axios';
import { Link } from 'react-router-dom';


function Studentviewbook() {
  const [data,setData]=useState([])

  const viewhere=()=>{
  axios.get('http://localhost:4000/viewbook').then((response)=>{
    // console.log(response); 
    setData(response.data.data)
    // localStorage.setItem('bookid',response);
    // console.log(localStorage.getItem('bookid'));
  })
  .catch((err)=>{
    setData(err)
  })
}

useEffect(() => {
  viewhere()
}, [])

  return (
    <div> 

      <Studentnav/>

      <h2 class='hbook'>BOOKS</h2>



  <div class="col">
{data.map((value, index) => (
      <div class="card" style={{ width: '18rem' }}>
  <img src={`http://localhost:4000/${value.image.filename}`} class="card-img-top" alt="..."/>
  {/* <div class="card-body"> */}
<h5 class="card-title">{value.title}</h5>
    <p class="card-text">{value.description}</p>
<Link to={`/Bookdetails/${value._id}`}>VIEW</Link>   {/* </div> */}
 </div>
   ))}
</div>
<br/><br/><br/>



<Footer/>
    </div>
  )
}

export default Studentviewbook