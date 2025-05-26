import React from "react";
import { Container, Row, Col, Card } from "react-bootstrap";
import udcLogo from "../assets/udc_logo.png";
import oneLogo from "../assets/ONE_logo.png"; // asegúrate de tener estos logos en /assets

export default function Educacion() {
  return (
    <section id="educacion" className="py-5">
      <Container>
        <h2 className="mb-4">Educación</h2>
        <Row className="g-4">
          <Col md={6}>
            <Card className="h-100">
              <Card.Body>
                <div className="d-flex align-items-center mb-3">
                  <img src={udcLogo} alt="Logo UDC" style={{ width: "50px", marginRight: "1rem" }} />
                  <Card.Title>Ingeniería de Software (en curso)</Card.Title>
                </div>
                <Card.Subtitle className="mb-2 text-muted">Universidad de Cartagena</Card.Subtitle>
                <Card.Text>2023 - Actualidad</Card.Text>
              </Card.Body>
            </Card>
          </Col>

          <Col md={6}>
            <Card className="h-100">
              <Card.Body>
                <div className="d-flex align-items-center mb-3">
                  <img src={oneLogo} alt="Logo ONE" style={{ width: "50px", marginRight: "1rem" }} />
                  <Card.Title>Oracle Next Education (ONE) - Alura Latam</Card.Title>
                </div>
                <Card.Text>2024 - 2025</Card.Text>
                <p className="mb-1">Cursos realizados:</p>
                <ul>
                  <li>Lógica de programación con JavaScript</li>
                  <li>Programación en Java con Orientación a Objetos</li>
                  <li>Desarrollo de aplicaciones web con Spring Boot</li>
                  <li>Inteligencia Artificial y Java (conexión con API de OpenAI)</li>
                </ul>
              </Card.Body>
            </Card>
          </Col>
        </Row>
      </Container>
    </section>
  );
}
