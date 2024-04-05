import React from "react";
import "./Home.css";
import NavBar from "./Navbar";
import img from "../Assets/libHome.png"
import Footer from "./footer";

function Homes() {
  return (
    <div>
      <NavBar/>
      <div className="home">
          <div className="homeimg">
            <img src={img} alt="" className="bookimg" />
          </div>
          <div className="content">
            <h1 className="text-primary">WELCOME TO LIBRARY</h1>
            <h5> Where Every Page is a New Adventure</h5>
            <p>&#128216; Start your reading journey today</p>
            {/* <button className="btn btn-success">Books</button> */}
          </div>
      </div>
      <Footer/>
    </div>
  );
}

export default Homes;
