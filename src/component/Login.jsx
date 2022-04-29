import React, { useState } from "react";
import GoogleButton from "react-google-button";
import { AuthErrorCodes } from "firebase/auth";

import { useUserAuth } from "../context/UserAuthContext";
import { NavLink, useNavigate } from "react-router-dom";
const Login = () => {
  const [email, setEmail] = useState("");
  const [error, setError] = useState("");
  const [password, setPassword] = useState("");
  const { logIn,googleSignIn } = useUserAuth();
  const navigate = useNavigate();

  const handleSubmit = async (e) => {
    e.preventDefault();
    setError("");
    try {
      await logIn(email, password);
      navigate("/home");
    } catch (err) {
      setError(err.message);
    }
  };

  const handlegoogle = async (e) =>{
    e.preventDefault();
    try {
      await googleSignIn();
      navigate("/home");
    }catch(err)
    {
      setError(err.message);
    }
  }
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
                onChange={(e) => setEmail(e.target.value)}
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
                onChange={(e) => setPassword(e.target.value)}
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

              <GoogleButton
                onClick={handlegoogle}
              />
            </div>
          </form>
        </div>
      </div>
    </>
  );
};

export default Login;
