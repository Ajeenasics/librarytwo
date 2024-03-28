import React from 'react';
import Button from "react-bootstrap/Button";
import Table from "react-bootstrap/Table";
import { useState } from "react";
import { useEffect } from "react";
import axios from "axios";
import { Link, useNavigate } from "react-router-dom";

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
        <Table striped bordered hover>
        <thead>
          <tr class="table-danger">
            <th>Sl.No</th>
            <th>First Name</th>
            <th>Last Name</th>
            <th>Email</th>
            <th>Phone Number</th>
            <th>Options</th>
          </tr>
        </thead>
        {data.map((value, index) => (
          <tbody>
            <tr>
              <td>{index + 1}</td>
              <td>{value.firstname}</td>
              <td>{value.lastname}</td>
              <td>{value.email}</td>
              <td>{value.phonenumber}</td>
              
              <Button
                variant="outline-danger"
                onClick={() => {

                  alldel(value._id);
                }}
              >
                Delete
              </Button>
            </tr>
          </tbody>
        ))}
      </Table>
      <Link to={"/staffhome"}>
      <button type='button' className='btn btn-primary'>Back</button>
      </Link>

    </div>
  )
}

export default Studentview