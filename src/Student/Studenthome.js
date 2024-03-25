import React from 'react';
import './Studenthome.css';
import lib4 from '../Assets/lib4.jpg'
import Studentnav from '../Nav/Studentnav';

function Studenthome() {
  return (
    <div>

<Studentnav/>

<div class="homebord">
  <div class="homediv">
  <img class="homeimg" src={lib4}/>
  </div>
  <div class="homediv2">
    <p class="homewelcome">WELCOME</p>
    <p class="homename">NAME</p>
    <button type="button" class="btn btn-outline-warning">VIEW BOOKS</button>
  </div>
</div>

    </div>
  )
}

export default Studenthome