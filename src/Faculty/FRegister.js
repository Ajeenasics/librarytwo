import React from "react";

function FRegister() {
  return (
    <div>
      <div class="Container " style={{ width: "40%" }}>
        <h2 className="sr">Faculty Registration</h2>
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
              //   onChange={show}
              placeholder="Enter your full name"
              required
            />
          </div>
          <div class="form-groups">
            <label for="studentId" className="mm">
              faculty ID
            </label>
            <input
              type="text"
              class="form-control"
              id="studentId"
              name="id"
              //   onChange={show}
              placeholder="Enter your ID"
              required
            />
          </div>
          <div class="form-groups">
            <label for="contact" className="mmm">
              Contact
            </label>
            <input
              type="number"
              class="form-control"
              id="contact"
              name="contact"
              //   onChange={show}
              placeholder="Enter your contact number"
              required
            />
          </div>
          

          <div class="form-groups">
            <label for="email" className="mme">
              Email
            </label>
            <input
              type="email"
              class="form-control"
              id="email"
              name="email"
              //   onChange={show}
              placeholder="Enter your email address"
              required
            />
          </div>
          <div class="form-groups">
            <label for="password" className="mm">
              Password
            </label>
            <input
              type="password"
              class="form-control"
              id="password"
              name="password"
              //   onChange={show}
              placeholder="Enter a password"
              required
            />
          </div>
          <div class="form-groups">
            <label for="Confirm password">Confirm Password</label>
            <input
              type="password"
              class="form-control"
              id="Confirm password"
              name="cpassword"
              //   onChange={show}
              placeholder="Confirm Password"
              required
            />
          </div>

          <button
            type="button"
            className="regbtn btn btn-primary"
            style={{ width: "100%" }}
            // onClick={addStaff}
          >
            Register
          </button>
          <label className="alreg">
            already register?
            <a href="login.html">login</a>
          </label>
        </form>
      </div>
    </div>
  );
}

export default FRegister;
