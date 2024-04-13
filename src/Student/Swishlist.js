import React, { useState,useEffect } from 'react';
import axios from 'axios';

function Swishlist() {
  const [book, setBook]=useState([])

  const id=localStorage.getItem('studentid')
  const getborrow=()=>{
    axios.post(`http://localhost:4000/findwishlist/${id}`).then((response)=>{
      if(response.data)
      setBook(response.data.data)
    else
    setBook(null)
      console.log(response);
    })
    .catch((err)=>{
      setBook(err)
    })
  }

  useEffect(() => {
    getborrow()
  }, [])
  
  return (
    <div>


{book.length>0?(
book.map((value,index)=>(
<div class="card" style={{width: "18rem"}}>
  <img src={`http://localhost:4000/${value.bookid.image.filename}`} class="card-img-top" alt="..."/>
  <div class="card-body">
    <h5 class="card-title">{value.bookid.title}</h5>
    {/* <p class="card-text">{value.studentid.firstname}</p> */}
    <a href="#" class="btn btn-primary">BORROW</a>
  </div>
</div>
)) ):(<h1>No Books Found</h1>)}


    </div>
  )
}

export default Swishlist