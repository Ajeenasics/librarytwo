import React from 'react'
import './Add.css'

function Add() {
  return (
    <div>
        <div className="adding " style={{"width": "40%"}}>
        <h2 className='addbook'>Add Book</h2>
        <form>
            <div className="form-group">
                <label for="fullName">Title</label>
                <input type="text" className="form-control" id="fullName" placeholder="Enter book title" required />
            </div>
            <div className="form-group">
                <label for="studentId">Author</label>
                <input type="text" className="form-control" id="studentId" placeholder="Enter Author name" required />
            </div>
            <div className="form-group">
                <label for="contact">ISBN</label>
                <input type="number" className="form-control" id="contact" placeholder="Enter ISBN number" required />
            </div>
            <div className="form-group">
                <label for="area">Description </label>
                <textarea className="form-control" name="" id="area" cols="68" rows="5" placeholder="Enter description"></textarea>
            </div>
            <button type="submit" className="addbtn btn btn-success" >Add</button>
        </form>
    </div>
    </div>
  )
}

export default Add