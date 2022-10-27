import React, { useState } from "react";
import { Container } from "@mui/material";
import { useDispatch, useSelector } from "react-redux";
import {
  LoginBtn,
  Input,
  ValidPopUp,
  LoginModal,
} from "../Task.styles/document.styles";
import { useNavigate } from "react-router-dom";
import NavBar from "./Navbar";
import { validSuccess } from "./features/ModalSlice";

const LoginPage = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const authLogin = useSelector((state) => state.users);

  const [values, setValues] = useState({
    name: "",
    password: "",
  });

  const [submitted, setSubmitted] = useState(false);
  const [showModal, setShowModal] = useState(false);

  const submitHandler = (e) => {
    e.preventDefault();
    if (values.name === "" && values.password === "") {
      setSubmitted(true);
      return
    }
    // else if (values.name === "" || values.password === "") {
    //   setSubmitted(true);
    // } 
    if (
      authLogin.some(
        (user) =>
          user.username === values.name && user.password === values.password
      )
    ) {
      dispatch(validSuccess());
      navigate("/home/users");
    } else {
      setShowModal(true);
    }
  };

  const cancelHandler = () => {
    setValues({ name: "", password: "" });
    setSubmitted(false);
    setShowModal(false);
  };

  return (
    <>
      <NavBar />
      <Container
        sx={{
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
          height: "35vh",
          marginTop: "1rem",
        }}
      >
        <div>
          {showModal ? (
            <>
              <LoginModal>
                <p>Login or Password is incorrect</p>
                <svg
                  onClick={cancelHandler}
                  style={{
                    height: "20px",
                    width: "20px",
                    margin: "2px 20px 0 0",
                    cursor: "pointer",
                  }}
                  xmlns="http://www.w3.org/2000/svg"
                  className="h-6 w-6"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                  strokeWidth={2}
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M6 18L18 6M6 6l12 12"
                  />
                </svg>
              </LoginModal>
            </>
          ) : null}

          <form onSubmit={submitHandler}>
            <div
              style={{ display: "flex", flexDirection: "column", gap: "7px" }}
            >
              <label htmlFor="name">Login</label>
              <Input
                type="text"
                isInvalid={submitted && !values.name ? true : false}
                id="name"
                placeholder="Enter login"
                value={values.name}
                onChange={(e) => {
                  setValues({ ...values, name: e.target.value });
                }}
              />
            </div>
            {submitted && !values.name ? (
              <ValidPopUp style={{ marginBottom: "-15px" }}>
                Username Required!
              </ValidPopUp>
            ) : null}

            <div
              style={{
                display: "flex",
                flexDirection: "column",
                marginTop: "20px",
                gap: "7px",
              }}
            >
              <label htmlFor="password">Password</label>
              <Input
                type="password"
                id="password"
                placeholder="Enter Password"
                isInvalid={submitted && !values.password ? true : false}
                value={values.password}
                onChange={(e) => {
                  setValues({ ...values, password: e.target.value });
                }}
              />
            </div>
            {submitted && !values.password ? (
              <ValidPopUp>Password Required!</ValidPopUp>
            ) : null}
            <LoginBtn type="submit">Log in</LoginBtn>
          </form>
        </div>
      </Container>
    </>
  );
};

export default LoginPage;
