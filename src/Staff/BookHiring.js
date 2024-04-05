import React from "react";
import "./BookHiring.css";
import NavBar from "./Navbar";
import { Link } from "react-router-dom";

function BookHiring() {
  return (
    <div>
      <NavBar />
      <div className="HBook">
        <button className="btn btn-warning" style={{ marginLeft: "150px" }}>
          book details
        </button>
        <button className="btn btn-success" style={{ marginLeft: "800px" }}>
          Requested
        </button>
      </div>

      <div className="container">
        <div className="row">
          <div className="col-10">
            <table className="table">
              <thead>
                <tr>
                  <th scope="col">S no</th>
                  <th scope="col">Book name</th>
                  <th scope="col">Student name</th>
                  <th scope="col">Date</th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <th>1</th>
                  <td> ug </td>
                  <td>hgvh </td>
                  <td>jhggyfgy</td>
                </tr>
              </tbody>
            </table>
            <table className="table">
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
                  <td><button className="btn btn-success">approved</button><button className="btn btn-danger">Rejected</button></td>
                </tr>
              </tbody>
            </table>
          </div>
        </div>
      </div>
    </div>
  );
}

export default BookHiring;
