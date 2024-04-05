import React, { useState,useEffect } from 'react';
import Table from 'react-bootstrap/Table';
import './Studentfine.css'
import Studentnav from '../Nav/Studentnav';
import Footer from '../Footer/Footer';
import axios from 'axios';

function Studentfine() {
  const [data,setData]=useState({})

  const id=localStorage.getItem('studentid')
const viewid = () => {
  axios
    .get(`http://localhost:4000/findname/${id}`)
    .then((response) => {
      setData(response.data.data);
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
<div class="Sbord">
    <h2 class=" Shead">STUDENT FINE AND HISTORY</h2>
    <div class="Sside">
<p>Name:  {data.firstname}</p>
<p> Roll.No: {data.rollno}</p>
<p>Due amount: </p>
</div>
<hr/>
<h4>HISTORY</h4><br/>


<Table striped bordered hover variant="white">
      <thead>
        <tr>
          <th>Sl.No</th>
          <th>TITLE</th>
          <th>AUTHOR</th>
          <th>ISSUED DATE</th>
          <th>DUE DATE</th>
          <th>RETURNED DATE</th>
          <th>FINE AMOUNT</th>
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
          <td></td>
        </tr>
        <tr>
          <td>2</td>
          <td></td>
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
          <td></td>
        </tr>
      </tbody>
    </Table>
   
    </div>
<Footer/>
    </div>
  )
}

export default Studentfine