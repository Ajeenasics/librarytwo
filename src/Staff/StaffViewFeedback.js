import React, { useState, useEffect } from "react";
import NavBar from "./Navbar";
import "./StaffViewFeedback.css";
import axios from "axios";

function StaffViewFeedback() {
  const [feed, setFeed] = useState([]);

  const getFeedback = () => {
    axios
      .get("http://localhost:4000/showfeedback")
      .then((res) => {
        console.log(res.data.datas);
        setFeed(res.data.datas);
      })
      .catch((error) => {
        console.log(error);
      });
  };

  useEffect(() => {
    getFeedback();
  }, []);

  return (
    <div>
      <NavBar />


      <div className="container">
      <h2 className="text-center">All Feedbacks</h2>
      <div className="row">
        <div className="col-12">
          <table className="table">
            <thead>
              <tr>
                <th scope="col">S.NO</th>
                <th scope="col">First Name</th>
                <th scope="col">Last Name</th>
                <th scope="col">Feedback</th>
                <th scope="col">Date</th>
              </tr>
            </thead>
            {feed.map((value, index) => (
              <tbody >
                <tr>
                  <th scope="row">{index + 1}</th>
                  <td>{value.studid.firstname} </td>
                  <td>{value.studid.lastname} </td>
                  <td>{value.feedback}</td>
                  <td>{value.date}</td>
                  
                </tr>
              </tbody>
            ))}
          </table>
        </div>
      </div>
    </div>
    </div>
  );
}

export default StaffViewFeedback;
