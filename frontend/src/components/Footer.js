import React from "react";
import { Container } from "react-bootstrap";

export default function Footer() {
  return (
    <footer className="bg-dark text-white py-4">
      <Container className="text-center">
        <p className="mb-1">&copy; {new Date().getFullYear()} Daniel David Martinez Barrios</p>
        <p className="mb-0">
          Hecho con React & Bootstrap
        </p>
      </Container>
    </footer>
  );
}
