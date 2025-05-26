import React from "react";
import { Navbar, Nav, Container } from "react-bootstrap";

export default function Header() {
  return (
    <header>
      <Navbar bg="light" expand="lg" fixed="top">
        <Container>
          <Navbar.Brand href="#hero">Daniel Martinez</Navbar.Brand>
          <Navbar.Toggle aria-controls="navbarNav" />
          <Navbar.Collapse id="navbarNav">
            <Nav className="ms-auto">
              <Nav.Link href="#about">Acerca de Mí</Nav.Link>
              <Nav.Link href="#experiencia">Experiencia</Nav.Link>
              <Nav.Link href="#educacion">Educación</Nav.Link>
              <Nav.Link href="#habilidades">Habilidades</Nav.Link>
              <Nav.Link href="#contacto">Contacto</Nav.Link>
            </Nav>
          </Navbar.Collapse>
        </Container>
      </Navbar>
    </header>
  );
}

