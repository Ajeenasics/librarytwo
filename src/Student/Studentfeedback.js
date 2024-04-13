import React, { useEffect,useState } from 'react';
import './Studentfeedback.css'
import Studentnav from '../Nav/Studentnav';
import Footer from '../Footer/Footer';
import axios from 'axios';


function Studentfeedback() {
  const id=localStorage.getItem('studentid')
  const [data,setData]=useState({})

  const [task, setTask] = useState({
    studid:localStorage.getItem('studentid') || "",
    feedback: "",
    date:new Date().toISOString().split('T')[0]
  })
  const feed = (e) => {
    setTask({ ...task, [e.target.name]: e.target.value});
  };


  const feeddata=()=>{
    axios.post('http://localhost:4000/Studfeedback',task).then((response)=>{
      if (response.data.status === 200) {
        console.log(response);
        alert("Feedback Saved");
      } else {
        alert("Feedback not saved");
      }
    })
    .catch((err) => {
      setData(err);
    })
  }



  
const viewid = () => {
  axios
    .get(`http://localhost:4000/findname/${id}`)
    .then((response) => {
      setData(response.data.data);
      // console.log(response.data.data);
      // console.log(data);
    })
    .catch((err) => {
      setData(err);
    });
};

useEffect(() => {
 viewid()
}, [])

  return (
    <div>
        <Studentnav/>

<div class="Sfeedborder">
            <h2 class="Sfeedbkhead">STUDENT FEEDBACK FORM</h2><br/>
            <p>Name: {data.firstname} {data.lastname}</p>
            <p>Name: {data.rollno}</p>

            
            <textarea class="Sfeedbkarea" name="feedback" placeholder='Feedback Here' onChange={feed}></textarea><br/><br/><br/><br/>
            <button class="Sfeedbkbut" type="button" onClick={feeddata}>Submit</button><br/><br/>
        </div>

<Footer/>
    </div>
  )
}

export default Studentfeedback