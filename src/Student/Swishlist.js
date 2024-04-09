import React, { useState,useEffect } from 'react';
import axios from 'axios';

function Swishlist() {
  const [book, setBook]=useState([])
  const getborrow=()=>{
    axios.get('http://localhost:4000/findwishlist').then((response)=>{
      setBook(response.data.data)
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



<table class="table">
  <thead>
    <tr>
      <th scope="col"></th>
      <th scope="col">BOOK ID</th>
      <th scope="col">STUDENT ID</th>
      <th scope="col">DATE BORROWED</th>
    </tr>
  </thead>
  
    {book.map((value,index)=>(

<tbody>
    <tr>
      <th scope="row">{index+1}</th>
      <td>{value.bookid}</td>
      <td>{value.studid}</td>
      <td>{value.Date}</td>
    </tr>
    </tbody>
     ))}

</table>


    </div>
  )
}

export default Swishlist