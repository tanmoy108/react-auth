import { AuthErrorCodes } from "firebase/auth";
import React, { useState } from "react";
import { useUserAuth } from "../context/UserAuthContext";
import { Link, useNavigate } from "react-router-dom";

const Signup = () => {
  const [email, setEmail] = useState("");
  const [error, setError] = useState("");
  const [password, setPassword] = useState("");
  const { signUp } = useUserAuth();
  const navigate = useNavigate();

  const handleSubmit = async (e) => {
    e.preventDefault();
    setError("");
    try {
      await signUp(email, password);
      navigate('/')
    } catch (err) {
      setError(err.message);
    }
  };
  return (
    <>
      <div className="row mb-5">
        <div className="col mx-auto">
        {error && <h2 style={{color:"red"}}>{error}</h2>}
          <form
            className="d-flex align-items-center flex-column mb-5"
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
              Sign up
            </button>
          </form>
          
        </div>
      </div>
    </>
  );
};

export default Signup;
