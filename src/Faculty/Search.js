import React from "react";
import "./Search.css";
import book1 from "../Assets/book 1.jpg";
import book2 from "../Assets/book 2.png";

function Search() {
  return (
    <div>
      <div class="containers px-2 pt-2 pb-5">
        <h2>Search and View Books</h2>

        <div class="input-group">
          <input
            type="text"
            class="form-control"
            placeholder="search book title, author, keyword"
          />
          <button class="btn btn-outline-warning hello" type="button">
            <b>Search</b>
          </button>
        </div>
      </div>
      <div id="container">
        <div class="book1">
          <img src={book1} alt="" class="img" />
          <label class="mt-5 m-3">
            <b>Book title</b> : 1 <br />
            <b>Author</b> : Author name 1 <br />
            <b>ISBN</b> : 1234567890 <br />
            <b>Published year</b> : 2020
          </label>
          <button class="btn btn-outline-info btns" type="button">
            <b>View</b>
          </button>
        </div>

        <div class="book1">
          <img src={book2} alt="" class="img" />
          <label className="m-3">
            <b>Book title</b> : 2 <br />
            <b>Author</b> : Author name 2 <br />
            <b>ISBN</b> : 1234567580 <br />
            <b>Published year</b> : 2018
          </label>
          <button class="btn btn-outline-info btns" type="button">
            <b>View</b>
          </button>
        </div>
      </div>
    </div>
  );
}

export default Search;
