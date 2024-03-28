import React from "react";
import logo from "../Assets/logo5.png";
import "./Navbar.css";
import { Link } from "react-router-dom";

function NavBar() {
  return (
    <div>
      <nav class="navbar navbar-expand-lg bg-body-secondary header">
        <div class="container-fluid">
          <img src={logo} className="logo" alt="lib" />
          <button
            class="navbar-toggler"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#navbarNav"
            aria-controls="navbarNav"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span class="navbar-toggler-icon"></span>
          </button>
          <div class="collapse navbar-collapse" id="navbarNav">
            <ul class="navbar-nav navlist">
              <li class="nav-item">
              <Link to={'/Sview'} style={{textDecoration:"none"}}>
                <a class="nav-link active line" aria-current="page" href="#">
                  Student
                </a></Link>
              </li>
              <li class="nav-item">
                <a class="nav-link active line" href="#">
                  Books
                </a>
              </li>
              <li class="nav-item">
                <a class="nav-link active line" href="#">
                  Hiring Details
                </a>
              </li>
            </ul>
            <div class="dropdown">
              <a
                href="#"
                role="button"
                data-bs-toggle="dropdown"
                aria-expanded="false"
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="50"
                  height="40"
                  fill="currentColor"
                  class="bi bi-person-fill"
                  viewBox="0 0 16 16"
                >
                  <path d="M3 14s-1 0-1-1 1-4 6-4 6 3 6 4-1 1-1 1zm5-6a3 3 0 1 0 0-6 3 3 0 0 0 0 6" />
                </svg>
              </a>
              <ul class="dropdown-menu dropdown-menu-lg-end">
                <li><Link to={'/staffprofile'} style={{textDecoration:"none"}}>
                  <a href="#" class="dropdown-item">
                    Profile
                  </a></Link>
                </li>
                <li>
                  <a href="#" class="dropdown-item">
                    Settings
                  </a>
                </li>
                <li>
                  <hr class="dropdown-divider"></hr>
                </li>
                <li>
                  <a href="#" class="dropdown-item">
                    Logout
                  </a>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </nav>
    </div>
  );
}

export default NavBar;
