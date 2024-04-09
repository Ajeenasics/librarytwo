import React, { useState, useEffect } from "react";
import { useNavigate, useParams } from "react-router-dom";
import axios from "axios";

function StaffEditBook() {
  const navigate = useNavigate();

  const [title, setTitle] = useState();
  const [author, setAuthor] = useState();
  const [isbn, setIsbn] = useState();
  const [description, setDescription] = useState();
  const [image, setImage] = useState({filename:''});

  const handleTitle = (e) => {
    setTitle(e.target.value);
  };
  const handleAuthor = (e) => {
    setAuthor(e.target.value);
  };
  const handleIsbn = (e) => {
    setIsbn(e.target.value);
  };
  const handleDescription = (e) => {
    setDescription(e.target.value);
  };
  const handleImage = (e) => {
    console.log("onchange",e.target,"dove");
    if(e.target.name === "image"){
      // handleImageUpload(e);
      setImage(e.target.files[0]);
  }else {
    setImage('');
  }  };

  const { id } = useParams();
  console.log(id);

  const getValues = () => {
    axios
      .get(`http://localhost:4000/Bookdetails/${id}`)
      .then((res) => {
        console.log(res.data);
        setTitle(res.data.data.title);
        setAuthor(res.data.data.author);
        setIsbn(res.data.data.isbn);
        setDescription(res.data.data.description);
        setImage({filename:res.data.data.image.filename});
      })
      .catch((err) => {
        console.log(err.res);
      });
  };

  useEffect(() => {
    getValues();
  }, []);

  const saveEditBook = async() =>{
    console.log("image",image);
    try{
      await axios.post('http://localhost:4000/savebook/'+id,{title,author,isbn,description,image},{
        headers: {
          "Content-Type": "multipart/form-data",
        }
      })
        // setSave(res.data.data);
        alert('edit successfully')
         navigate('/viewbook')
      }
      catch(err){
        console.error(err.res);
      }
  }


  return (
    <div>
      <div className="adding " style={{ width: "40%" }}>
        <h2 className="addbook">Edit Book</h2>
        <form>
          <div className="form-group">
            <label htmlFor="fullName">Title</label>
            <input
              type="text"
              className="form-control"
              id="fullName"
              name="title"
              placeholder="Enter book title"
              value={title}
              onChange={handleTitle}
              required
            />
          </div>
          <div className="form-group">
            <label htmlFor="studentId">Author</label>
            <input
              type="text"
              className="form-control"
              id="studentId"
              name="author"
              placeholder="Enter Author name"
              value={author}
              onChange={handleAuthor}
              required
            />
          </div>
          <div className="form-group">
            <label htmlFor="contact">ISBN</label>
            <input
              type="number"
              className="form-control"
              id="contact"
              name="isbn"
              placeholder="Enter ISBN number"
              value={isbn}
              onChange={handleIsbn}
              required
            />
          </div>
          <div className="form-group">
            <label htmlFor="area">Description </label>
            <textarea
              className="form-control"
              name="description"
              id="area"
              cols="68"
              rows="5"
              placeholder="Enter description"
              value={description}
              onChange={handleDescription}
            ></textarea>
          </div>
          <div className="form-group">
            <label htmlFor="file">image</label>
            <input
              type="file"
              className="form-control"
              name="image"
              id="file"
              onChange={handleImage}
              required
            />
          </div>
          <button type="button" className="addbtn btn btn-success" onClick={saveEditBook}>
            Save
          </button>
        </form>
      </div>
    </div>
  );
}

export default StaffEditBook;
