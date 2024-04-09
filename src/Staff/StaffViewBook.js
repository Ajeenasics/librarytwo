import React, { useEffect, useState } from "react";
import "./StaffViewBook.css";
import NavBar from "./Navbar";
import axios from "axios";
import { Link, useNavigate } from "react-router-dom";

function StaffViewBook() {
  const navigate = useNavigate()
  const [view, setView] = useState([]);

  const getBook = () => {
    axios
      .get("http://localhost:4000/viewbook")
      .then((res) => {
        setView(res.data.data);
        console.log(res);
      })
      .catch((err) => {
        setView(err);
      });
  };
  useEffect(() => {
    getBook();
  }, []);

  const DeleteBook = (id) => {
    axios.post("http://localhost:4000/bookdelete/" + id).then((response) => {
      console.log(response);
      getBook();
    });
  };

  const clickEdit=(bookid)=>{
      navigate('/editbook/'+bookid)
  }

  return (
    <div>
       <NavBar /> *

      <div>
        <div className="hedd d-flex justify-content-around "><h2 style={{color:"white"}}>booklist</h2>
        <Link to={"/add"}>
        <button className="btn btn-primary ">Add Book</button>
        </Link>
        </div>
        <div className="container">
          <div className="row">
            <div className="col-12">
              <table className="table table-image">
                <thead>
                  <tr>
                    <th scope="col">S.NO</th>
                    <th scope="col">Image</th>
                    <th scope="col">Title</th>
                    <th scope="col">Author</th>
                    <th scope="col">ISBN</th>
                    <th scope="col">description</th>
                    <th scope="col">Action</th>
                  </tr>
                </thead>
                {view.map((val, ind) => (
                  <tbody >
                    <tr>
                      <th scope="row">{ind + 1}</th>
                      <td className="w-25">
                        <img
                          src={`http://localhost:4000/${val.image.filename}`}
                          className="img-fluid img-thumbnail"
                          alt="book"
                        />
                      </td>
                      <td> {val.title} </td>
                      <td>{val.author} </td>
                      <td>{val.isbn}</td>
                      <td>{val.description}</td>
                      <td>
                        <svg
                          className="eBooks"
                          xmlns="http://www.w3.org/2000/svg"
                          width="30"
                          height="30"
                          color="green"
                          cursor="pointer"
                          onClick={()=>{clickEdit(val._id)} }
                          fill="currentColor"
                          // class="bi bi-pencil-square"
                          viewBox="0 0 16 16"
                        >
                          <path d="M15.502 1.94a.5.5 0 0 1 0 .706L14.459 3.69l-2-2L13.502.646a.5.5 0 0 1 .707 0l1.293 1.293zm-1.75 2.456-2-2L4.939 9.21a.5.5 0 0 0-.121.196l-.805 2.414a.25.25 0 0 0 .316.316l2.414-.805a.5.5 0 0 0 .196-.12l6.813-6.814z" />
                          <path
                            fill-rule="evenodd"
                            d="M1 13.5A1.5 1.5 0 0 0 2.5 15h11a1.5 1.5 0 0 0 1.5-1.5v-6a.5.5 0 0 0-1 0v6a.5.5 0 0 1-.5.5h-11a.5.5 0 0 1-.5-.5v-11a.5.5 0 0 1 .5-.5H9a.5.5 0 0 0 0-1H2.5A1.5 1.5 0 0 0 1 2.5z"
                          />
                        </svg>
                        <svg
                        className="dBooks"
                          onClick={() => {
                            DeleteBook(val._id);
                          }}
                          xmlns="http://www.w3.org/2000/svg"
                          width="30"
                          height="30"
                          color="red"
                          cursor="pointer"
                          fill="currentColor"
                          // class="bi bi-trash3-fill"
                          viewBox="0 0 16 16"
                        >
                          <path d="M11 1.5v1h3.5a.5.5 0 0 1 0 1h-.538l-.853 10.66A2 2 0 0 1 11.115 16h-6.23a2 2 0 0 1-1.994-1.84L2.038 3.5H1.5a.5.5 0 0 1 0-1H5v-1A1.5 1.5 0 0 1 6.5 0h3A1.5 1.5 0 0 1 11 1.5m-5 0v1h4v-1a.5.5 0 0 0-.5-.5h-3a.5.5 0 0 0-.5.5M4.5 5.029l.5 8.5a.5.5 0 1 0 .998-.06l-.5-8.5a.5.5 0 1 0-.998.06m6.53-.528a.5.5 0 0 0-.528.47l-.5 8.5a.5.5 0 0 0 .998.058l.5-8.5a.5.5 0 0 0-.47-.528M8 4.5a.5.5 0 0 0-.5.5v8.5a.5.5 0 0 0 1 0V5a.5.5 0 0 0-.5-.5" />
                        </svg>
                      </td>
                    </tr>
                  </tbody>
                ))}
              </table>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default StaffViewBook;
