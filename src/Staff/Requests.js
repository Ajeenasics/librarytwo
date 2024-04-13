import React from "react";
import NavBar from "./Navbar";
import axios from "axios";
import { useState, useEffect } from "react";
import { Link, useNavigate } from "react-router-dom";

function Requests() {
  const navigate = useNavigate();
  const [approv, setApprove] = useState([]);
  useEffect(() => {
    approve();
  }, [approv]);


  const acceptBook = async (id) => {
    try {
      const res = await axios.post(`http://localhost:4000/acceptbook/${id}`);
      if (res.status === 200) {
        console.log(res.data);
        alert("approve successfully");
        navigate("/hirebook");
      }
    } catch (error) {
      console.error(error);
      alert("failed");
    }
  };

  const approve = () => {
    axios
      .get(`http://localhost:4000/notapprove`)
      .then((res) => {
        console.log(res.data.data);
        setApprove(res.data.data);
      })
      .catch((err) => {
        console.log(err.data);
      });
  };



   const rejectBorrow=(bid)=>{
    axios.post(`http://localhost:4000/deleteborrow/${bid}`).then((res)=>{
      console.log(res.data)
      alert("borrow deleted")
    })
    .catch((err)=>{
      console.log(err.err);
    })
  }

  return (
    <div>
      <NavBar />
      <div
        style={{ marginTop: "150px" }}
        className="d-flex justify-content-around"
      >
        <Link to={"/hirebook"}>
          <button className="btn btn-warning" /* onClick={borrowBookList} */>
            borrow details
          </button>
        </Link>
        <button className="btn btn-success">Requests</button>
      </div>

      <div className="container">
        <div className="col-12  d-flex justify-content-center">
          <table className="table ">
            <thead>
              <tr>
                <th scope="col">S no</th>
                <th scope="col">Book name</th>
                <th scope="col">Student name</th>
                <th scope="col">Date</th>
                <th scope="col">Action</th>
              </tr>
            </thead>
            {approv.map((value, index) => (
              <tbody>
                <tr>

                  <th>{index + 1}</th>
                  <td>{value.bookid.title} </td>
                  <td>{value.studid.firstname} {value.studid.lastname}</td>
                  <td>{value.Date}</td>
                  <td className="col-3">
                    <button
                      type="button"
                      style={{ borderRadius: "50%", margin: "0px 2px" }}
                      className="btn btn-success"
                      onClick={() => {
                        acceptBook(value._id)
                      }}
                    >
                      approv
                    </button>
                    <button
                      type="button"
                      style={{ borderRadius: "50%" }}
                      className="btn btn-danger"
                      onClick={()=>rejectBorrow(value._id)}
                    >
                      Reject
                    </button>
                  </td>
                </tr>
              </tbody>
            ))}
          </table>
        </div>
      </div>
    </div>
  );
}

export default Requests;
