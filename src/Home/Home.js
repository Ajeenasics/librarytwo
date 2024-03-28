import React from 'react';
import Studentnav from '../Nav/Studentnav';
import lib1 from '../Assets/lib1.jpg' ;
import lib2 from '../Assets/lib2.jpg';
import lib3 from '../Assets/lib3.jpg';
import Drseuss from '../Assets/Drseuss.jpg';
import Sirstephenhawking from '../Assets/Sirstephenhawking.jpg';
import Sirwaltdisney from '../Assets/Sirwaltdisney.jpg';
import './Home.css'
import Footer from '../Footer/Footer';
import { Link } from 'react-router-dom';

function Home() {
  return (
    <div>


{/* Navbar */}

<nav class="navbar navbar-expand-lg bg-body-tertiary fixed-top">
  <div class="container-fluid">
    <a class="navbar-brand"><svg xmlns="http://www.w3.org/2000/svg" width="30" height="30" fill="currentColor" class="bi bi-book-half" viewBox="0 0 16 16">
  <path d="M8.5 2.687c.654-.689 1.782-.886 3.112-.752 1.234.124 2.503.523 3.388.893v9.923c-.918-.35-2.107-.692-3.287-.81-1.094-.111-2.278-.039-3.213.492zM8 1.783C7.015.936 5.587.81 4.287.94c-1.514.153-3.042.672-3.994 1.105A.5.5 0 0 0 0 2.5v11a.5.5 0 0 0 .707.455c.882-.4 2.303-.881 3.68-1.02 1.409-.142 2.59.087 3.223.877a.5.5 0 0 0 .78 0c.633-.79 1.814-1.019 3.222-.877 1.378.139 2.8.62 3.681 1.02A.5.5 0 0 0 16 13.5v-11a.5.5 0 0 0-.293-.455c-.952-.433-2.48-.952-3.994-1.105C10.413.809 8.985.936 8 1.783"/>
</svg></a>
    <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNavDropdown" aria-controls="navbarNavDropdown" aria-expanded="false" aria-label="Toggle navigation">
      <span class="navbar-toggler-icon"></span>
    </button>
    <div class="nav justify-content-end">
    <div class="collapse navbar-collapse" id="navbarNavDropdown">
      <ul class="navbar-nav">
        <li class="nav-item dropdown">
    <a class="nav-link dropdown-toggle" data-bs-toggle="dropdown" role="button" aria-expanded="false">LOGIN</a>
    <ul class="dropdown-menu">
    
      <li><a class="dropdown-item">FACULTY</a></li>
      <Link to={"/login"} style={{textDecoration:"none"}}>
      <li><a class="dropdown-item">STAFF</a></li>
      </Link>
      <li><a class="dropdown-item">STUDENT</a></li>
    </ul>
  </li>

  <li class="nav-item dropdown">
    <a class="nav-link dropdown-toggle" data-bs-toggle="dropdown"  role="button" aria-expanded="false">REGISTER</a>
    <ul class="dropdown-menu">
      <li><a class="dropdown-item">FACULTY</a></li>
      <li><a class="dropdown-item">STAFF</a></li>
      <li><a class="dropdown-item">STUDENT</a></li>
    </ul>
  </li>
  <li class="nav-item">
          <a class="nav-link">CONTACT US</a>
        </li>
      </ul>
    </div>
    </div>
  </div>
</nav>


{/*  */}
<div id="carouselExampleInterval" class="carousel slide" data-bs-ride="carousel">
  <div class="carousel-inner">
    
    <div class="carousel-item active" data-bs-interval="3000">
      
      <img src={lib1} class="d-block w-100" alt="..." height='700'/>
      <div class="carousel-caption d-none d-md-block">
      <div class="disp">
        <div class="name">
       <p class="welcome">WELCOME</p>
       <p class="para">TO LIBRARY</p><br/><br/>
       <button type="button" class="btn btn-outline-danger">ABOUT US</button>
       </div>
</div>

        <h5>"Read a lot. Expect something big, something exalting or deepening from a book. No book is worth reading that isn't worth re-reading."</h5>
      </div>
    </div>
    <div class="carousel-item" data-bs-interval="3000">
      <img src={lib2}  class="d-block w-100" alt="..." height='700'/>
      <div class="carousel-caption d-none d-md-block">
      <div class="disp">
        <div class="name">
       <p class="cap">READY TO CHANGE</p>
       <p class="para">READ WITH US</p>
       <button type="button" class="btn btn-outline-danger">VIEW BOOKS</button>
       </div>
</div>
        <h5>"A great book should leave you with many experiences, and slightly exhausted at the end. You live several lives while reading."</h5>
      </div>
    </div>
    <div class="carousel-item" data-bs-interval="3000">
      <img src={lib3}  class="d-block w-100" alt="..." height='700'/>
      <div class="carousel-caption d-none d-md-block">


{/* Card */}
      <div class="bord">
        <div class="cardname">
       <p><div class="row row-cols-1 row-cols-md-3 g-6">
  <div class="col">
    <div class="card h-100">
      <img src={Drseuss} class="card-img-top" alt="..."/>
      <div class="card-body">
        <h5 class="card-title"> “You can find magic wherever you look. Sit back and relax, all you need is a book.”</h5>
        <p class="card-text">-Dr.Seuss</p>
      </div>
    </div>
  </div>
  <div class="col">
    <div class="card h-100">
      <img src={Sirwaltdisney} class="card-img-top" alt="..."/>
      <div class="card-body">
        <h5 class="card-title">“There is more treasure in books than in all the pirates' loot on Treasure Island and best of all, you can enjoy these riches every day of your life.”</h5>
        <p class="card-text">-Walt Disney</p>
      </div>
    </div>
  </div>
  <div class="col">
    <div class="card h-100">
      <img src={Sirstephenhawking} class="card-img-top" alt="..."/>
      <div class="card-body">
        <h5 class="card-title">“Nothing is better than reading and gaining more and more knowledge.”</h5>
        <p class="card-text">-Stephen Hawking</p>
      </div>
    </div>
  </div>
</div></p>
{/*  */}
       <button type="button" class="btn btn-outline-danger">EXPLORE</button>
       </div>
</div>
      </div>
    </div>
  </div>
  
  <button class="carousel-control-prev" type="button" data-bs-target="#carouselExampleInterval" data-bs-slide="prev">
    <span class="carousel-control-prev-icon" aria-hidden="true"></span>
    <span class="visually-hidden">Previous</span>
  </button>
  <button class="carousel-control-next" type="button" data-bs-target="#carouselExampleInterval" data-bs-slide="next">
    <span class="carousel-control-next-icon" aria-hidden="true"></span>
    <span class="visually-hidden">Next</span>
  </button>
 
</div>
<Footer/>
    </div>
  )
}

export default Home