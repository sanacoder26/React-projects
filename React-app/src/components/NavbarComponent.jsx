import React from "react";
import { Navbar, Nav, NavDropdown, Container } from "react-bootstrap";
import { LiaReact } from "react-icons/lia";
import { FaHome, FaInfoCircle, FaServicestack, FaUser } from "react-icons/fa";


const NavbarComponent = () => {
  return (
    <Navbar bg="light" expand="lg" sticky="top">
      <Container>
        <Navbar.Brand href="#home">
   <LiaReact style={{ marginLeft: "6px" }} size={25} color="#5dc2df" />ReactApp
</Navbar.Brand>

        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="me-auto">
            <Nav.Link href="#home">
              <FaHome style={{ marginLeft: "5px" }} /> Home
            </Nav.Link>
            <Nav.Link href="#about">
              <FaInfoCircle style={{ marginLeft: "5px" }} /> About
            </Nav.Link>
            <Nav.Link href="#services">
              <FaServicestack style={{ marginLeft: "5px" }} /> Services
            </Nav.Link>
            <NavDropdown title={<span><FaUser style={{ marginLeft: "5px" }} /> Account</span>} id="basic-nav-dropdown">
              <NavDropdown.Item href="#profile">Profile</NavDropdown.Item>
              <NavDropdown.Item href="#settings">Settings</NavDropdown.Item>
              <NavDropdown.Divider />
              <NavDropdown.Item href="#logout">Logout</NavDropdown.Item>
            </NavDropdown>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
};

export default NavbarComponent;
