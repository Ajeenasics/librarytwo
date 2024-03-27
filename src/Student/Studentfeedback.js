import React from 'react';
import './Studentfeedback.css'
import Studentnav from '../Nav/Studentnav';
import Footer from '../Footer/Footer';

function Studentfeedback() {
  return (
    <div>
        <Studentnav/>

<div class="Sfeedborder">
            <h2 class="Sfeedbkhead">STUDENT FEEDBACK FORM</h2><br/>
            <input class="Sfeedbkinp" type="text" placeholder='Full Name'/><br/><br/>
            <input class="Sfeedbkinp" type="text" placeholder='ID'/><br/><br/>
            <textarea class="Sfeedbkarea" placeholder='Feedback Here'></textarea><br/><br/><br/><br/>
            <button class="Sfeedbkbut" type="button">Submit</button><br/><br/>
        </div>

<Footer/>
    </div>
  )
}

export default Studentfeedback