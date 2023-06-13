import React from "react";
import { Navbar, Nav } from "react-bootstrap";
import { Link } from "react-router-dom";
import { useSelector} from "react-redux";

const Navibar = () => {

  const auth=useSelector(state=>state.reducer.Auth)
  return (
    <Navbar bg="light" expand="lg">
      <Navbar.Brand>Resume Builder</Navbar.Brand>
      <Navbar.Toggle aria-controls="basic-navbar-nav" />
      <Navbar.Collapse id="basic-navbar-nav">
        <Nav className="mr-auto">
          <Link style={{ margin: "10px" }} to="/home">
            Home
          </Link>
          <Link style={{ margin: "10px" }} to="/edit1">
            Edit
          </Link>
          <Link style={{ margin: "10px" }} to="/view">
            View
          </Link>
          <Link style={{ margin: "10px" }} to="/">
           {auth?"Signout":"Signin"}
          </Link>
        </Nav>
      </Navbar.Collapse>
    </Navbar>
  );
};

export default Navibar;
