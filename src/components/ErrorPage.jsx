import React from "react";
import { Container } from "@mui/material";
import { Link } from "react-router-dom";

const ErrorPage = () => {
  return (
    <>
      <Container>
        <h1>Error</h1>
        <p>404</p>
        <p>Page not found</p>
        <Link to="/">Back to Login Page</Link>
      </Container>
    </>
  );
};

export default ErrorPage;
