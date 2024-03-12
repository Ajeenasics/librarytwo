import React from 'react';
import '../Assets/s1.jpg';
import './Ffeedback.css';

function Ffeedbk() {
  return (
    <div>
         <div class="Ffeedbkborder">
            <h2 class="Ffeedbkhead">FACULTY FEEDBACK FORM</h2><br/>
            <input class="Ffeedbkinp" type="text" placeholder='Full Name'/><br/><br/>
            <input class="Ffeedbkinp" type="text" placeholder='ID'/><br/><br/>
            <textarea class="Ffeedbkarea" placeholder='Feedback Here'></textarea><br/><br/><br/><br/>
            <button class="Ffeedbkbut" type="button">Submit</button><br/><br/>
        </div>
    </div>
  )
}

export default Ffeedbk