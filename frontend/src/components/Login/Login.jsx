import React from "react";
import { Form, InputGroup, FormControl, Button } from "react-bootstrap";
import { FcLock, FcFeedback } from "react-icons/fc";
// import { Box, TextField, Button } from "@mui/material";
// import MailOutlineIcon from "@mui/icons-material/MailOutline";
// import KeyIcon from "@mui/icons-material/Key";
import { Link } from "react-router-dom";
import "./Login.scss";

const Login = () => {
  return (
    <div className="login-page">
      <nav>
        <a href="/" className="login_logo">
          <img
            src="./assets/img/clickupLogo.svg"
            alt="clickup Home"
            className="clickup_logo"
          />
        </a>
        <div className="login-page-right">
          <div className="right-text"> Don&apos;t have an account? </div>
          <a href="/" className="rightButton">
            Sign up
          </a>
        </div>
      </nav>
      <div className="top-divider"> </div>
      <div className="login-main-body">
        <div className="login-main-bg"> </div>
        <div className="main-container">
          <div className="form-container">
            <div className="brand">
              <h1 className="form-title"> Welcome Back! </h1>
            </div>
            <Form>
              <Form.Group controlId="email">
                <Form.Label className="login-lable">Email</Form.Label>
                <InputGroup className="mb-3">
                  <InputGroup.Text className="input-icon">
                    <FcFeedback />
                  </InputGroup.Text>
                  <FormControl
                    className="login-input-email"
                    type="email"
                    placeholder="Enter your Email"
                    required
                  />
                </InputGroup>
              </Form.Group>
              <Form.Group controlId="password">
                <Form.Label className="login-lable">Password</Form.Label>
                <InputGroup className="mb-3">
                  <InputGroup.Text className="input-icon">
                    <FcLock />
                  </InputGroup.Text>
                  <FormControl
                    className="login-input-password"
                    type="password"
                    placeholder="Enter Password"
                    required
                  />
                  <InputGroup.Text className="forgotPassword">
                    <Link className="forgotLink">Forgot Password?</Link>
                  </InputGroup.Text>
                </InputGroup>
              </Form.Group>
              <Button className="purple-btn-lg mb-3 mt-3">Log In</Button>
            </Form>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Login;
