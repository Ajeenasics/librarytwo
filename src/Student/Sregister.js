import React, { useState } from "react";
import "./Sregister.css";
import "../Assets/s1.jpg";
import { Link } from "react-router-dom";
import Slogin from "./Slogin";
import axios from "axios";
import { useNavigate } from "react-router-dom";
import Studentnav from "../Nav/Studentnav";
import Footer from "../Footer/Footer";

function Sregister() {
 const navigate=useNavigate();
  const [data, setData] = useState({
    firstname: "",
    lastname: "",
    rollno: "",
    email: "",
    phonenumber: "",
    password: "",
  })
  const ar = (e) => {
    setData({ ...data, [e.target.name]: e.target.value});
  };
  const onSubmitfun = () => {
    if (!data.firstname) {
      alert("First Name required");
    } else if (!data.lastname) {
      alert("Last Name required");
    } else if (!data.rollno) {
      alert("Rollno required");
    } else if (!data.email) {
      alert("Email required");
    } else if (!data.phonenumber) {
      alert("Phonenumber required");
    } else if (!data.password) {
      alert("Password required");
    } 
    else {
      
      axios
          .post("http://localhost:4000/Sregister",data)
          .then((response) => {
            console.log(response);
            if (response.data.status == 200) {
              alert("Registration Successful");
              navigate('/Slogin')
            } else {
              alert("Registration Failed");
            }
          })
          .catch((err) => {
            setData(err);
          });
    }
  };

  return (
    <div>

    <Studentnav/>
      <h1 id="hii">.</h1>
      <div class="sregborder">
        <h2 class="sreghead">STUDENT REGISTRATION FORM</h2>
        <br />
        <input
          class="sreginp"
          type="text"
          name="firstname"
          onChange={ar}
          placeholder="First Name"
          required
        />
        <br />
        <br />
        <input
          class="sreginp"
          type="text"
          name="lastname"
          onChange={ar}
          placeholder="Last Name"
        />
        <br />
        <br />
        <input
          class="sreginp"
          type="Text"
          name="rollno"
          onChange={ar}
          placeholder="Roll No"
        />
        <br />
        <br />
        <input
          class="sreginp"
          type="email"
          name="email"
          onChange={ar}
          placeholder="Email"
        />
        <br />
        <br />
        <input
          class="sreginp"
          type="text"
          name="phonenumber"
          onChange={ar}
          placeholder="Phone Number"
        />
        <br />
        <br />
        <input
          class="sreginp"
          type="password"
          name="password"
          onChange={ar}
          placeholder="Password"
        />
        <br />
        <br />
        <button class="sregbut" type="button" onClick={onSubmitfun}>
          Sign Up
        </button>
        <br />
        <br />
        <p class="sregpara1">Forgot Password</p>
        <p class="sregpara2">
          Already Registered? <Link to={"/Slogin"}>Sign In</Link>
        </p>
      </div>
<br/>
      <Footer/>
    </div>
  );
}

export default Sregister;
