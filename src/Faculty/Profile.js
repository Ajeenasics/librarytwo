import React from "react";
import './Profile.css';
import img from '../Assets/profile.jpg'

function Profile() {
  return (
    <div>
      <div class="profile">
        <div class="row">
          <div>
            <img src={img} alt="Faculty Photo" class="circle" />
            <h1>Dr. John Doe</h1>
            <b>Email :</b>
            <br />
            <p>
              <a href="" style={{"text-decoration": "none"}}>
                johndoe@gmail.com
              </a>
            </p>
            <br />
            
            <b>phone Number :</b>
            <br />
            <p>9880476384</p>
            <br />
            <b class="weight">About :</b>
            <br />
            <div class="about">
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Nulla
              quas impedit fugit praesentium magni doloremque dolore dolores
            </div>
            <br />
            <button class="probtn btn btn-success">Edit</button>
           
          </div>
        </div>
      </div>
    </div>
  );
}

export default Profile;
