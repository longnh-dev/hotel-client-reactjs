import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { Form, Alert } from "react-bootstrap";
import styled from "styled-components";
import "react-phone-number-input/style.css";
import { message } from "antd";
import axios from "axios";

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

const Signup = () => {
  const [error, setError] = useState("");
  const[credential, setCredentials] = useState({
    email: undefined,
    name: undefined,
    phoneNumber: undefined,
    password: undefined
  });
  let navigate = useNavigate();

  const handleSubmit = async (e) => {
    e.preventDefault();
    setError("");
    try {
      await axios.post("http://localhost:5200/api/v1/users/register", credential)
      .then(function (response) {
        if(response) {
          alert(response.data.message);
        }
      });
    } catch (err) {
      if(err){
        alert(err.response.data.message);
      }
    }
  };

  const handleChange = (e) =>{
    setCredentials((prev) => ({...prev, [e.target.id]: e.target.value}));
  };


  return (
    <>
      <div className="p-4 box" style={{ width: "70%", margin: "100px auto" }}>
        <h2 className="mb-3">Create your account.</h2>
        {error && <Alert variant="danger">{error}</Alert>}
        <Form onSubmit={handleSubmit}>
          <Form.Group className="mb-4">
            <Form.Control
              id = "name"
              type="text"
              placeholder="Name"
              onChange={handleChange}
            />
          </Form.Group>

          <Form.Group className="mb-4">
            <Form.Control
              id = "email"
              type="email"
              placeholder="Email address"
              onChange={handleChange}
            />
          </Form.Group>
          <Form.Group className="mb-4">
            <Form.Control
              id = "phoneNumber"
              type="phoneNumber"
              placeholder="Phone Number"
              onChange={handleChange}
            />
          </Form.Group>

          <Form.Group className="mb-4">
            <Form.Control
              id = "password"
              type="password"
              placeholder="Password"
              onChange={handleChange}
            />
          </Form.Group>

          <div className="d-grid gap-2">
            <Button variant="primary" type="Submit">
              Sign up
            </Button>
          </div>
        </Form>
        <div className="p-4 box mt-3 text-center">
          Already have an account? <Link to="/signin">Log In</Link>
        </div>
      </div>
    </>
  );
};

export default Signup;
