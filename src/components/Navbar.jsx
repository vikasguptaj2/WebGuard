import React from "react";
import { Navbar, Container } from "react-bootstrap";

function NavbarComponent() {
  return (
    <Navbar bg="dark" variant="dark" expand="lg">
      <Container>
        <Navbar.Brand href="/">🌐 Website Fault Detector</Navbar.Brand>
      </Container>
    </Navbar>
  );
}

export default NavbarComponent;
