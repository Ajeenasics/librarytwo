import React, { useEffect, useState } from 'react';
import './Sbookdetails.css';
import axios from 'axios';
import { useParams } from 'react-router-dom';
import Studentnav from '../Nav/Studentnav';
import Footer from '../Footer/Footer';


function Sbookdetails() {
  const id=useParams()

  const [data,setData]=useState({
    image:{filename:''},
  })

//  borrow book
  const[task,setTask]=useState({
    bookid:id.id,
    studid:localStorage.getItem('studentid') || "",
    Date:new Date().toISOString().split('T')[0]
  })

   
  const borrowbook=(bookid)=>{
    
console.log("data",task);      
axios.post('http://localhost:4000/borbook',task).then((response)=>{
setTask(response)
console.log(response);
if (response.data.status == 200) {
  alert("Book Borrowed");
} else {
  alert("Book not borrowed");
}
})
.catch((err) => {
  setData(err);
});
  }
  // 

// Wishlist book
const[wish,setWish]=useState({
  bookid:id.id,
  studid:localStorage.getItem('studentid') || "",
  Date:new Date().toISOString().split('T')[0]
})
const wishlistbook=(bookid)=>{
    
  console.log("data",wish);      
  axios.post('http://localhost:4000/wishbook',wish).then((response)=>{
  setWish(response)
  console.log(response);
  if (response.data.status == 200) {
    alert("Wishlist added");
  } else {
    alert("Wishlist not added");
  }
  })
  .catch((err) => {
    setData(err)
  })
    }
    // 


 
console.log(id);
  const bookdata=()=>{
    axios.get(`http://localhost:4000/Bookdetails/${id.id}`).then((response)=>{
console.log(response);
setData(response.data.data)
    })
  }
  useEffect(() => {
  bookdata()
  },[])
  


  return (
    <div>
      <Studentnav/>
      <br/><br/><br/>

<div class="bookbord">
<div class="card mb-3" style={{ width: '68rem' }}>
  <div class="row g-0">
    <div class="col-md-4">
      <img
        src={`http://localhost:4000/${data.image.filename}`}
        alt="Trendy Pants and Shoes"
        class="img-fluid rounded-start"
      />
    </div>
    <div class="col-md-8">
      <div class="card-body">
        <h1 class="card-title">{data.title}</h1>
        <h2 class="card-text">{data.author}</h2>
        
        <p>{data.description}</p>
         
        <p class="card-text">
          <small class="text-muted">
          <button type="button" class="btn btn-outline-success" onClick={()=>wishlistbook(data._id)}>ADD TO WISHLIST</button>&nbsp;
          <button type="button" class="btn btn-outline-warning" onClick={()=>borrowbook(data._id)}>BORROW</button>
          </small>
        </p>
      </div>
    </div>
  </div>
</div>
</div>
<br/><br/><br/><br/><br/><br/><br/><br/>
<Footer/>
    </div>
  )
}

export default Sbookdetails