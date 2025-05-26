import React from "react";
import { Container } from "react-bootstrap";

export default function About() {
  return (
    <section id="about" className="py-5 bg-light">
      <Container>
        <h2 className="mb-4">Acerca de Mí</h2>
        <p>
          Soy estudiante de Ingeniería de Software en la Universidad de Cartagena,
          con formación en desarrollo backend a través del programa Oracle Next Education (ONE) de Alura.
          He adquirido habilidades en Java, Spring Boot, lógica de programación y conexión de APIs,
          incluyendo integración con inteligencia artificial.
        </p>
        <p>
          Busco una oportunidad para aplicar mis conocimientos en un entorno profesional
          y seguir creciendo como desarrollador.
        </p>
      </Container>
    </section>
  );
}
