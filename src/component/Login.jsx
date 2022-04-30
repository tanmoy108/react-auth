import React, { useState } from "react";
import GoogleButton from "react-google-button";
// import GitHubButton from "react-github-button";
// import { AuthErrorCodes } from "firebase/auth";

import { useUserAuth } from "../context/UserAuthContext";
import { NavLink, useNavigate } from "react-router-dom";
const Login = () => {
  const [error, setError] = useState("");
  const [use, setuse] = useState({
    ename: "",
    pname: "",
  });

  const textchange = (e) => {
    let inputvalue = e.target.value;
    let inputname = e.target.name;

    setuse((e) => {
      return {
        ...e,
        [inputname]: inputvalue,
      };
    });
  };
  const { logIn, googleSignIn, githubSignIN } = useUserAuth();
  const navigate = useNavigate();

  const handleSubmit = async (e) => {
    e.preventDefault();
    setError("");
    try {
      await logIn(use.ename, use.pname);
      navigate("/home");
    } catch (err) {
      setError(err.message);
    }
  };

  const handlegoogle = async (e) => {
    e.preventDefault();
    try {
      await googleSignIn();
      navigate("/home");
    } catch (err) {
      setError(err.message);
    }
  };

  const handlegithub = async (e) => {
    e.preventDefault();
    try {
      await githubSignIN();
      navigate("/home");
    } catch (err) {
      setError(err.message);
    }
  };
  return (
    <>
      <div className="row">
        <div className="col mx-auto">
          {error && <h2 style={{ color: "red" }}>{error}</h2>}
          <form
            className="d-flex align-items-center flex-column"
            onSubmit={handleSubmit}
          >
            <div className="form-outline mb-4">
              <input
                type="email"
                id="form2Example1"
                className="form-control"
                name="ename"
                onChange={textchange}
                value={use.ename}
              />
              <label className="form-label" for="form2Example1">
                Email address
              </label>
            </div>

            <div className="form-outline mb-4">
              <input
                type="password"
                id="form2Example2"
                className="form-control"
                name="pname"
                onChange={textchange}
                value={use.pname}
              />
              <label className="form-label" for="form2Example2">
                Password
              </label>
            </div>

            <button type="Submit" className="btn btn-primary btn-block mb-4">
              Sign in
            </button>

            <div className="text-center">
              <p>
                Not a member? <NavLink to="/Signup">Register</NavLink>
              </p>
              <p>or sign up with:</p>

              <GoogleButton onClick={handlegoogle} />
              
            </div>
          </form>
        </div>
      </div>
    </>
  );
};

export default Login;
