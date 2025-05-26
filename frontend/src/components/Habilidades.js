import React from "react";
import { Container, Row, Col, Card } from "react-bootstrap";

export default function Habilidades() {
  return (
    <section id="habilidades" className="py-5 bg-light">
      <Container>
        <h2 className="mb-4">Habilidades</h2>
        <Row>
          <Col md={6}>
            <Card className="mb-3">
              <Card.Body>
                <Card.Title>Habilidades Técnicas</Card.Title>

                <div className="mb-2">
                  <strong>Lenguajes:</strong>
                  <ul className="mb-0">
                    <li>Java</li>
                    <li>JavaScript</li>
                    <li>HTML</li>
                    <li>CSS</li>
                  </ul>
                </div>

                <div className="mb-2">
                  <strong>Frameworks:</strong>
                  <ul className="mb-0">
                    <li>Spring Framework</li>
                  </ul>
                </div>

                <div className="mb-2">
                  <strong>Bases de datos:</strong>
                  <ul className="mb-0">
                    <li>MySQL</li>
                    <li>PostgreSQL</li>
                  </ul>
                </div>

                <div>
                  <strong>Herramientas:</strong>
                  <ul className="mb-0">
                    <li>Git</li>
                    <li>GitHub</li>
                    <li>Postman</li>
                    <li>Insomnia</li>
                  </ul>
                </div>
              </Card.Body>
            </Card>
          </Col>

          <Col md={6}>
            <Card className="mb-3">
              <Card.Body>
                <Card.Title>Otros</Card.Title>
                <ul className="mb-0">
                  <li>API REST</li>
                  <li>Programación orientada a objetos (POO)</li>
                  <li>Integración con APIs de inteligencia artificial</li>
                </ul>
              </Card.Body>
            </Card>
          </Col>
        </Row>
      </Container>
    </section>
  );
}
