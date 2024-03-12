import React, { useState } from 'react';
import './Staffaddbook.css';
import '../Assets/s1.jpg';
import Button from 'react-bootstrap/Button';
import Table from 'react-bootstrap/Table';


function Staffaddbook() {
const [data,setData]=useState({
  booktitle:"",
  author:"",
  genre:"",
  year:"",
  quantity:""
});

const inp=(e)=>
{
setData({...data,[e.target.name]:[e.target.value]})
}
const here=()=>{
  console.log(data);
}

  return (
    <div>
        <div className="Staffaddborder">
            <h2 className="Staffhead">STAFF ADD BOOK</h2>
            <div className="Staffaddside">
                <div className="add">
            <p>Book Title : <input className="title" name="booktitle" type="text" onChange={inp}/></p>
            <p>Author : <input className="author" name="author" type="text"  onChange={inp}/></p>
            <p>Genre : <input className="genre" name="genre" type="text"  onChange={inp}/></p>
            </div>
            <div className="side">
            <p>Year : <input className="year" name="year" type="text"  onChange={inp}/></p>
            <p>Quantity  : <input className="quantity" name="quantity" type="text"  onChange={inp}/></p>
            </div>
 </div>

<div className="space">
            <Button type="button" variant="outline-success" onClick={here}>Add Book</Button>
       <Button type="button" variant="outline-warning">Clear All</Button>
       </div>
   

<div className="table">
 <Table striped bordered hover>
      <thead>
        <tr>
          <th>Sl.No</th>
          <th>Title</th>
          <th>Author</th>
          <th>Genre</th>
          <th>Year</th>
          <th>Quantity</th>
        </tr>
      </thead>
      <tbody>
        <tr>
          <td>1</td>
          <td></td>
          <td></td>
          <td></td>
          <td></td>
          <td></td>
        </tr>
        <tr>
          <td>2</td>
          <td></td>
          <td></td>
          <td></td>
          <td></td>
          <td></td>
        </tr>
        <tr>
          <td>3</td>
          <td></td>
          <td></td>
          <td></td>
          <td></td>
          <td></td>
        </tr>
        <tr>
          <td>4</td>
          <td></td>
          <td></td>
          <td></td>
          <td></td>
          <td></td>
        </tr>
        
      </tbody>
    </Table>
    </div>
</div>
    </div>
  )
}

export default Staffaddbook