import React from "react";
import logo from "../../../images/logo.png";
import { Container, Nav, Navbar } from "react-bootstrap";
import { NavLink } from "react-router-dom";
import useAuth from "../../../Hooks/useAuth";

const Header = () => {
  const { logOut, user } = useAuth();

  const active = {
    color: "#F91944",
    fontWeight: "600",
  };
  return (
    <Navbar
      className="sticky-top"
      collapseOnSelect
      expand="lg"
      bg="dark"
      variant="dark"
    >
      <Container className="text-dark">
        <Navbar.Brand href="#home">
          <img className="logo" src={logo} alt="" />
        </Navbar.Brand>
        <Navbar.Toggle aria-controls="responsive-navbar-nav" />
        <Navbar.Collapse id="responsive-navbar-nav">
          <Nav className="ms-auto align-items-center">
            <NavLink activeStyle={active} className="mx-3" to="/home">
              Home
            </NavLink>
            <NavLink activeStyle={active} className="mx-3" to="/doctors">
              Doctors
            </NavLink>
            <NavLink activeStyle={active} className="mx-3" to="/departments">
              Departments
            </NavLink>
            <NavLink activeStyle={active} className="mx-3" to="*">
              Home care
            </NavLink>

            {!user.displayName ? (
              <NavLink activeStyle={active} className="mx-3" to="/login">
                Login
              </NavLink>
            ) : (
              <div>
                <NavLink className="mx-3" to="/home">
                  <button onClick={logOut} className="btn btn-danger">
                    Logout
                  </button>
                </NavLink>
                <small className="fw-light text-light border border-1 rounded-pill p-3">
                  {user.displayName}
                </small>
              </div>
            )}
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
};

export default Header;
