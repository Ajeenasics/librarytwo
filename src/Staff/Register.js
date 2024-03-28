import React, { useState, useEffect } from "react";
import "./Register.css";
import img from "../Assets/lib 2.png"
import { Link, useNavigate } from "react-router-dom";
import axios from 'axios'

function Register() {
  const navigate = useNavigate()
  const [register, setRegister] = useState({
    name: "",
    id: "",
    contact: "",
    dob: "",
    email: "",
    password: "",
    cpassword: "",
  });

  const show = (e) => {
    setRegister({...register,[e.target.name]:e.target.value})
  }
  
  const addStaff = () =>{
    if ((register.name,register.id,register.contact,register.dob,register.email,register.password,register.cpassword, register.password === register.cpassword)){
      
      axios.post("http://localhost:4000/addstaff",register).then((res)=>{
        if(res.data.status === 200){

          alert("Register Successful")
          navigate('/login')
        }
        else{
          alert('Registration Failed')
        }
      })
      .catch((err)=>{
        setRegister(err)
      })
    }
    else{
      alert('you did not enter values (or) password incorrect')
    }
  }

  return (
    <div >
    <img src={img} alt="" className="regbg" />
      <div class="Container " style={{ width: "40%" }}>
        <h2 className="sr">Staff Registration</h2>
        <form>
          <div class="form-groups">
            <label for="fullName" className="mm">
              Full Name
            </label>
            <input
              type="text"
              class="form-control"
              id="fullName"
              name="name"
              onChange={show}
              placeholder="Enter your full name"
              required
            />
          </div>
          <div class="form-groups">
            <label for="studentId" className="mm">
              Staff ID
            </label>
            <input
              type="text"
              class="form-control"
              id="studentId"
              name="id"
              onChange={show}
              placeholder="Enter your ID"
              required
            />
          </div>
          <div class="form-groups">
            <label for="contact" className="mmm">
              Contact
            </label>
            <input
              type="number"
              class="form-control"
              id="contact"
              name="contact"
              onChange={show}
              placeholder="Enter your contact number"
              required
            />
          </div>
          <div class="form-groups">
            <label for="dob" className="mmd">
              Date of Birth
            </label>
            <input
              type="date"
              class="form-control"
              name="dob"
              id="dob"
              onChange={show}
              required
            />
          </div>

          <div class="form-groups">
            <label for="email" className="mme">
              Email
            </label>
            <input
              type="email"
              class="form-control"
              id="email"
              name="email"
              onChange={show}
              placeholder="Enter your email address"
              required
            />
          </div>
          <div class="form-groups">
            <label for="password" className="mm">
              Password
            </label>
            <input
              type="password"
              class="form-control"
              id="password"
              name="password"
              onChange={show}
              placeholder="Enter a password"
              required
            />
          </div>
          <div class="form-groups">
            <label for="Confirm password" >
              Confirm Password
            </label>
            <input
              type="password"
              class="form-control"
              id="Confirm password"
              name="cpassword"
              onChange={show}
              placeholder="Confirm Password"
              required
            />
          </div>

          <button
            type="button"
            className="regbtn btn btn-primary"
            style={{ width: "100%" }}
            onClick={addStaff}
          >
            Register
          </button>
          <label className="alreg">
            already register?
              <a href="login.html">login</a>
          </label>
        </form>
      </div>
    </div>
  );
}

export default Register;
