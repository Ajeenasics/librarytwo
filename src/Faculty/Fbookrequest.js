import React from 'react';
import '../Assets/s1.jpg';
import './Fbookrequest.css';

function Fbookreq() {
  return (
    <div>
         <div class="Fbookreqborder">
            <h2 class="Fbookreqhead">FACULTY BOOK REQUEST FORM</h2><br/>
            <input class="Fbookreqinp" type="text" placeholder='Full Name'/><br/><br/>
            <input class="Fbookreqinp" type="text" placeholder='ID'/><br/><br/>
            <input class="Fbookreqinp" type="text" placeholder='BOOK No.'/><br/><br/>
            <input class="Fbookreqinp" type="text" placeholder='Book title'/><br/><br/>
            <input class="Fbookreqinp" type="text" placeholder='Author'/><br/><br/><br/><br/>
            <button class="Fbookreqbut" type="button">Request</button><br/><br/>
        </div>
    </div>
  )
}

export default Fbookreq