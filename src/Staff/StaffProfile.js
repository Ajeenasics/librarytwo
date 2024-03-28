import React, { useEffect, useState } from "react";
import "../Staff/StaffProfile.css";
import img from "../Assets/staffProfile.png";
import axios from "axios";
import { Link, useNavigate } from "react-router-dom";

function StaffProfile() {
    const navigate = useNavigate()
  const [details, setDetails] = useState({});

  const id = localStorage.getItem("staffid");
  const getData = () => {
    axios
      .get(`http://localhost:4000/findvalues/${id}`)
      .then((res) => {
        console.log(res);
        setDetails(res.data.data);
        
      })
      .catch((err) => {
        setDetails(err);
      });
  };
  const navi = () =>{
    navigate('/editprofile')
  }
  useEffect(() => {
    getData();
  }, []);

  return (
    <div>
      <div className="pro">
        <img src={img} alt="" className="image" />
        <div className="align">
          <div>
            <h1>{details.name}</h1>
            <b>Email :</b>
            <br />
            <p>
              <a href="" style={{ "text-decoration": "none" }}>
                {details.email}
              </a>
            </p>
            <b>phone Number :</b>
            <br />
            <p>{details.contact} </p>
            
            <button type="button" className="btn btn-success" onClick={navi}>
              Edit
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}

export default StaffProfile;
