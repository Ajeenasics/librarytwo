import React, { useState } from "react";
import "./Sregister.css";
import "../Assets/s1.jpg";

function Sregister() {
  const [data, setData] = useState({
    firstname: "",
    lastname: "",
    rollno: "",
    email: "",
    phonenumber: "",
    password: "",
  });
  const ar = (e) => {
    setData({ ...data, [e.target.name]: [e.target.value] });
    console.log(data,"kkkk");
  };
  const onSubmitfun = () => {
    if (!data.firstname) {
      alert("fname required");
    } else if (!data.lastname) {
      alert("lastname required");
    } else if (!data.rollno) {
      alert("rollno required");
    } else if (!data.email) {
      alert("email required");
    } else if (!data.phonenumber) {
      alert("phonenumber required");
    } else if (!data.password) {
      alert("password requires");
    }
  };

  return (
    <div>
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
        <p class="sregpara1">Forgotten Password</p>
        <p class="sregpara2">New User? Sign Up</p>
      </div>
    </div>
  );
}

export default Sregister;
