import React from 'react';
import Button from "react-bootstrap/Button";
import Table from "react-bootstrap/Table";
import { useState } from "react";
import { useEffect } from "react";
import axios from "axios";
import { Link, useNavigate } from "react-router-dom";
import NavBar from '../Staff/Navbar';
import './StudentView.css'

function Studentview() {
    const [data, setData] = useState([]);

  const getdata = () => {
    axios
      .get("http://localhost:4000/all")
      .then((response) => {
        setData(response.data.data);
      })
      .catch((err) => {
        setData(err);
      });
  };

  const alldel = (empid) => {
    axios.post("http://localhost:4000/delone/" + empid).then((response) => {
      console.log(response);
      getdata();
    });
  };

  useEffect(() => {
    getdata();
  }, []);

  

  return (
    

    
<div>
<NavBar/>
    <div class="header_fixed">
    
    <div className='col-11'>
        <table className='table ' style={{marginTop:"100px"}}>
            <thead>
                <tr className='Str'>
                    <th scope='col'>S No.</th>
                    <th scope='col'>First Name</th>
                    <th scope='col'>Last Name</th>
                    <th scope='col'>Email</th>
                    <th scope='col'>contact</th>
                    <th scope='col'>Action</th>
                </tr>
            </thead>
            {data.map((value, index) => (
            <tbody>
                <tr className='Str'>
                    <td>{index + 1}</td>
                    <td>{value.firstname}</td>
                    <td>{value.lastname}</td>
                    <td>{value.email}</td>
                    <td>{value.phonenumber}</td>
                    <td><svg  onClick={() => {alldel(value._id)}} xmlns="http://www.w3.org/2000/svg" width="30" height="30" color="red" cursor="pointer" fill="currentColor" class="bi bi-trash3-fill" viewBox="0 0 16 16">
                    <path d="M11 1.5v1h3.5a.5.5 0 0 1 0 1h-.538l-.853 10.66A2 2 0 0 1 11.115 16h-6.23a2 2 0 0 1-1.994-1.84L2.038 3.5H1.5a.5.5 0 0 1 0-1H5v-1A1.5 1.5 0 0 1 6.5 0h3A1.5 1.5 0 0 1 11 1.5m-5 0v1h4v-1a.5.5 0 0 0-.5-.5h-3a.5.5 0 0 0-.5.5M4.5 5.029l.5 8.5a.5.5 0 1 0 .998-.06l-.5-8.5a.5.5 0 1 0-.998.06m6.53-.528a.5.5 0 0 0-.528.47l-.5 8.5a.5.5 0 0 0 .998.058l.5-8.5a.5.5 0 0 0-.47-.528M8 4.5a.5.5 0 0 0-.5.5v8.5a.5.5 0 0 0 1 0V5a.5.5 0 0 0-.5-.5"/>
                   </svg></td>
                </tr>
            </tbody>))}
        </table>
        </div>
        </div>
    </div>
  )
}

export default Studentview