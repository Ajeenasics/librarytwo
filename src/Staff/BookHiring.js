import React, { useState, useEffect } from "react";
import "./BookHiring.css";
import NavBar from "./Navbar";
import { Link } from "react-router-dom";
import axios from "axios";

function BookHiring() {
  const [viewborrow, setViewborrow] = useState([]);

  const borrowBookList = () => {
    axios
      .get("http://localhost:4000/viewborrowbook")
      .then((res) => {
        console.log(res.data.data);
        setViewborrow(res.data.data);
      })
      .catch((err) => {
        console.log(err.data);
      });
  };

  useEffect(() => {
    borrowBookList();
  }, []);

  return (
    <div>
      <NavBar />
      <div
        style={{ marginTop: "150px" }}
        className="d-flex justify-content-around"
      >
        <button className="btn btn-warning" /* onClick={borrowBookList} */>borrow details</button>
        <button className="btn btn-success">Requests</button>
      </div>

      <div className="container">
        <div className="col-12 d-flex justify-content-center">
          <div className="table_scroll ">
            <table className="table "  style={{height:"500px"}} >
              <thead className="thead-dark">
                <tr className=" table-primary ">
                  <th scope="col" className="scroll">
                    S no
                  </th>
                  <th scope="col" className="scroll">
                    Book name
                  </th>
                  <th scope="col" className="scroll">
                    Student name
                  </th>
                  <th scope="col" className="scroll">
                    Date
                  </th>
                </tr>
              </thead>
              {viewborrow.map((value, index) => (
                
                <tbody >
                  <tr>
                    <th>{index + 1}</th>
                    <td> {value.bookid.title} </td>
                    <td>{value.studid.firstname} </td>
                    <td className="col-3">{value.Date}</td>
                  </tr>
                </tbody>
              ))}
            </table>
          </div>
        </div>

        <div className="col-10  ">
          <table className="table ">
            <thead>
              <tr>
                <th scope="col">S no</th>
                <th scope="col">Book name</th>
                <th scope="col">Student name</th>
                <th scope="col">Date</th>
                <th scope="col">Action</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <th>1</th>
                <td> ug </td>
                <td>hgvh </td>
                <td>jhggyfgy</td>
                <td className="col-3">
                  <button
                    style={{ borderRadius: "50%" }}
                    className="btn btn-success"
                  >
                    approved
                  </button>
                  <button
                    style={{ borderRadius: "50%" }}
                    className="btn btn-danger"
                  >
                    Rejected
                  </button>
                </td>
              </tr>
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
}

export default BookHiring;
