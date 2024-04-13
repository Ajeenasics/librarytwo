import React, { useState, useEffect } from "react";
import "./BookHiring.css";
import NavBar from "./Navbar";
import { Link } from "react-router-dom";
import axios from "axios";

function BookHiring() {
  const [viewborrow, setViewborrow] = useState([]);


  // const [approv, setApprove] = useState([]);

  // const acceptBook = async (id) => {
  //   try {
  //     const res = await axios.post(`http://localhost:4000/acceptbook/${id}`);
  //     if (res.status === 200) {
  //       console.log(res.data);
  //       alert('approve successfully')
  //     }
  //   } catch (error) {
  //     console.error(error);
  //     alert("failed")
  //   }
  // };

  const borrowBookList = () => {
    axios
      .get("http://localhost:4000/viewborrowbook")
      .then((res) => {
        console.log(res.data.data);
        setViewborrow(res.data.data);
      })
      .catch((err) => {
        console.log(err.data);
      });
  };

  useEffect(() => {
    borrowBookList();
    // approve()
  }, []);

  // const approve = (id) => {
  //   axios
  //     .get(`http://localhost:4000/notapprove/${id}`)
  //     .then((res) => {
  //       console.log(res.data.data);
  //       setApprove(res.data.data)
  //     })
  //     .catch((err) => {
  //       console.log(err.data);
  //     });
  // };


  

  return (
    <div>
      <NavBar />
      <div
        style={{ marginTop: "150px" }}
        className="d-flex justify-content-around"
      >
        <button type="button" className="btn btn-warning" /* onClick={borrowBookList} */>
          borrow details
        </button>
        <Link to={'/requests'}>
        <button type="button" className="btn btn-success">Requests</button></Link>
      </div>

      <div className="container">
        <div className="col-12 d-flex justify-content-center">
          <div className="table_scroll ">
            <table className="table" /* style={{ height: "500px" }} */>
              <thead>
                <tr className=" table-primary ">
                  <th scope="col" className="scroll">
                    S no
                  </th>
                  <th scope="col" className="scroll">
                    Book name
                  </th>
                  <th scope="col" className="scroll">
                    Student name
                  </th>
                  <th scope="col" className="scroll">
                    Date
                  </th>
                </tr>
              </thead>
              {viewborrow.map((value, index) => (
                <tbody>
                  <tr>
                    <th>{index + 1}</th>
                    <td> {value.bookid.title} </td>
                    <td>
                      {value.studid.firstname} {value.studid.lastname}{" "}
                    </td>
                    <td className="col-3">{value.Date}</td>
                  </tr>
                </tbody>
              ))}
            </table>
          </div>
        </div>

        
      </div>
    </div>
  );
}

export default BookHiring;
