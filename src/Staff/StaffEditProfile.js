import React, { useEffect, useState } from "react";
import axios from "axios";
import { useNavigate, useParams } from "react-router-dom";


function StaffEditProfile() {
    const navigate = useNavigate()

    const [name,setName] = useState()
    const [email,setEmail] = useState()
    const [contact,setContact] = useState()

    const [value,setValue] = useState({})

    const handleName = (e) =>{
      setName(e.target.value)
    }
    const handleEmail = (e) =>{
      setEmail(e.target.value)
    }
    const handleContact = (e) =>{
      setContact(e.target.value)
    }



    const id = localStorage.getItem("staffid");

    const getingData = () =>{

        axios.get(`http://localhost:4000/findvalues/${id}`).then((response) => {
          console.log(response.data.data);
             setValue(response.data.data)
        })
        .catch((err)=>{
          setValue(err)
        })
    };
    useEffect(() => {
        getingData()
    }, [])


     const saveData = async() =>{
         try{
             await axios.post(`http://localhost:4000/editprofile/${id}`,{name,email,contact})
              alert('edit successfully')
              navigate('/staffprofile')
             }
             catch(err){
               console.error(err);
             }
           }
    
  return (
    <div>
      <div className="Container " style={{ width: "40%", margin:"100px 0px 0px 150px" }}>
        <h2 className="sr">Edit Profile</h2>
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
              //  value={value.name}
              placeholder={value.name}
               onChange={handleName}
              
              required
            />
          </div>
          <div class="form-groups">
            <label for="fullName" className="mm">
              Email
            </label>
            <input
              type="text"
              class="form-control"
              id="fullName"
              name="email"
              // value={value.email}
               placeholder={value.email}
              onChange={handleEmail}
              required
            />
          </div>
          <div class="form-groups">
            <label for="fullName" className="mm">
              contact
            </label>
            <input
              type="number"
              class="form-control"
              id="fullName"
              name="contact"
              // value={value.contact}
               placeholder={value.contact}
              onChange={handleContact}
              required
            />
          </div>
          <div><button type="button" className="btn btn-success" style={{marginLeft:"200px"}} onClick={saveData} >Save</button></div>
        </form>
      </div>
    </div>
  );
}

export default StaffEditProfile;
