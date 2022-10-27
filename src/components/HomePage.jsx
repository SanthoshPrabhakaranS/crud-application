import React from "react";
import { Nav } from "../Task.styles/document.styles";
import { NavLeft, NavRight, NavSides } from "../Task.styles/Homepage.styles";
import { Link, Outlet, useLocation } from "react-router-dom";

const HomePage = () => {
  const location = useLocation();
  const navColor = location.pathname.split("/")[2];

  return (
    <>
      <Nav>
        <p>Aequalis</p>
        <NavSides>
          <NavLeft>
            <Link to="/home/users">
              <p className={navColor === "users" ? "users" : false}>Users</p>
            </Link>
            <Link to="/home/networks">
              <p className={navColor === "networks" ? "networks" : false}>
                Networks
              </p>
            </Link>
          </NavLeft>
          <NavRight>
            <Link navActive={navColor === "users" ? true : false} to="/">
              <p>Log Out</p>
            </Link>
          </NavRight>
        </NavSides>
      </Nav>
      <Outlet />
    </>
  );
};

export default HomePage;
