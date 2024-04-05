import React, { useState } from "react";
import "./Add.css";
import axios from "axios";
import { useNavigate } from "react-router-dom";

function Add() {
  const navigate = useNavigate()
  const [add, setAdd] = useState({
    title: "",
    author: "",
    isbn: "",
    description: "",
    image:null
  });

  const showBook = (e) => {
    if(e.target.name === "image"){
        // handleImageUpload(e);
        setAdd({...add,image:e.target.files[0]});
    }else {
    setAdd({ ...add, [e.target.name]: e.target.value });
    }
  };

  const addbook = () => {
    if ((add.title, add.author, add.isbn, add.description, add.image)) {
      axios
        .post("http://localhost:4000/addbook", add,{
            headers: {
              "Content-Type": "multipart/form-data",
            }
          })
        .then((response) => {
          if (response.data.status == 200) {
            // console.log("book added successfully", response);
            alert('book add success')
            navigate('/viewbook')
          } else {
            alert("book add failed");
          }
        })
        .catch((error) => {
          setAdd(error);
        });
    } else {
      alert("you did not enter all fields");
    }
  };

  return (
    <div>
      <div className="adding " style={{ width: "40%" }}>
        <h2 className="addbook">Add Book</h2>
        <form>
          <div className="form-group">
            <label for="fullName">Title</label>
            <input
              type="text"
              className="form-control"
              id="fullName"
              name="title"
              placeholder="Enter book title"
              onChange={showBook}
              required
            />
          </div>
          <div className="form-group">
            <label for="studentId">Author</label>
            <input
              type="text"
              className="form-control"
              id="studentId"
              name="author"
              placeholder="Enter Author name"
              onChange={showBook}
              required
            />
          </div>
          <div className="form-group">
            <label for="contact">ISBN</label>
            <input
              type="number"
              className="form-control"
              id="contact"
              name="isbn"
              placeholder="Enter ISBN number"
              onChange={showBook}
              required
            />
          </div>
          <div className="form-group">
            <label for="area">Description </label>
            <textarea
              className="form-control"
              name="description"
              id="area"
              cols="68"
              rows="5"
              placeholder="Enter description"
              onChange={showBook}
            ></textarea>
          </div>
          <div className="form-group">
            <label for="file">image</label>
            <input type="file" className="form-control" name="image" onChange={showBook} id="file" required />
          </div>
          <button
            type="button"
            className="addbtn btn btn-success"
            onClick={addbook}
          >
            Add
          </button>
        </form>
      </div>
    </div>
  );
}

export default Add;
