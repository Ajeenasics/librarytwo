import React from 'react'
import './Slogin.css';
import '../Assets/s1.jpg';

function Slogin() {
  return (
    <div>
        <div class="slogborder">
            <h2 class="sloghead">STUDENT LOGIN</h2>
            <input class="sloginp" type="text" placeholder='Username'/><br/><br/>
            <input class="sloginp" type="password" placeholder='Password'/><br/><br/>
            <button class="slogbut" type="button">Log In</button><br/><br/>
            <p class="slogpara1">Forgot  Password</p>
            <p class="slogpara2">New User? Sign Up</p>
        </div>
    </div>
  )
}

export default Slogin