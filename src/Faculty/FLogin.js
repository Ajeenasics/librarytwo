import React from 'react'
import { Link } from 'react-router-dom'

function FLogin() {
  return (
    <div>
    <form action="">
    <div className="login">
      <h3 className="head">FACULTY LOGIN</h3>
      <input
        type="email"
        placeholder="Enter email"
        className="form-control type"
        name="email"
        // onChange={datas}
      />
      <br />
      <input
        type="password"
        placeholder="Enter password"
        className="form-control type"
        name="password"
        // onChange={datas}
      />
      <a href="#" className="fp link-danger ">
        forgot password?
      </a>
      <br />
      <button className="button" type="button" /*onClick={details}*/>
        Login
      </button>
      <div className="d-flex mb-3 width">
        <input type="checkbox" />
        <span className="p-1">Remember me</span>
        <span className="nh">Need help?</span>

        <a href="#" className="cm link-primary ">
          call us help
        </a>
      </div>

      <div className="text">
        New user?{" "}
        <Link to={"/register"}>
          <a
            href="register.jsl"
            className="link-success link-underline-opacity-0 link-underline-opacity-75-hover"
          >
            Register here
          </a>
        </Link>
      </div>
    </div>
  </form>
    </div>
  )
}

export default FLogin