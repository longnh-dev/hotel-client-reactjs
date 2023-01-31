import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { Form, Alert } from "react-bootstrap";
import GoogleButton from "react-google-button";
import styled from "styled-components";
import { message } from "antd";
import { useUserAuth } from "../contexts/UserAuthContext";

const Button = styled.button`
  background-color: blue;
  padding: 10px;
  border-radius: 5px;
  color: white;
  border: none;
  font-size: 20px;
  width: 100%;

  &:hover {
    background-color: white;
    color: blue;
    border: 2px solid blue;
  }
`;

  const Login = () => {
    const [error, setError] = useState("");
    const navigate = useNavigate();
    const { logIn, googleSignIn } = useUserAuth();
    

    const [credentials, setCredentials] = useState({
      username: undefined,
      password: undefined,
      rememberMe: false
    });

    const handleChange = (e) =>{
      setCredentials((prev) => ({...prev, [e.target.id]: e.target.value}));
    };


    const handleSubmit = async (e) => {
      e.preventDefault();
      setError("");
      try {
        await logIn(credentials.username, credentials.password, credentials.rememberMe);
      } catch (err) {
        setError(err.message);
      }
    };
  

    const handleGoogleSignIn = async (e) => {
      e.preventDefault();
      try {
        await googleSignIn();
        navigate("/");
      } catch (error) {
        console.log(error.message);
      }
    };

    return (
      <>
        <div className="p-4 box" style={{ width: "70%", margin: "100px auto" }}>
          <h2 className="mb-3 text-center">Login</h2>
          {error && <Alert variant="danger">{error}</Alert>}
          <Form onSubmit={handleSubmit}>
            <Form.Group className="mb-3">
              <Form.Control
              id="username"
                type="email"
                placeholder="Email address"
                onChange={handleChange}
              />
            </Form.Group>

            <Form.Group className="mb-3">
              <Form.Control
                id="password"
                type="password"
                placeholder="Password"
                onChange={handleChange}
              />
            </Form.Group>
            
            <div className="d-grid gap-2">
              <Button variant="primary" type="Submit">
                Log In
              </Button>
            </div>
          </Form>
          <hr />
          <div>
            <GoogleButton
              className="g-btn"
              style={{ width: "100%" }}
              type="dark"
              onClick={handleGoogleSignIn}
            />
          </div>
          <div className="p-4 box mt-3 text-center">
            Don't have an account? <Link to="/signup">Sign up</Link>
          </div>
        </div>
      </>
    );
};

export default Login;
