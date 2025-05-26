import React from "react";
import { Carousel, Container, Button } from "react-bootstrap";
import perfil from "../assets/foto-perfil.jpg"; 
import slide2 from "../assets/java.png";
import slide3 from "../assets/js.png";


export default function Hero() {
    return (
      <section id="hero">
        <Carousel fade controls indicators>
          {/* Slide 1: Presentación personalizada */}
          <Carousel.Item>
            <div className="d-flex flex-column justify-content-center align-items-center text-center bg-dark text-white" style={{ height: '100vh' }}>
              <img
                src={perfil}
                alt="Perfil"
                className="rounded-circle mb-3"
                style={{ width: "200px", height: "200px", objectFit: "cover", border: "4px solid white" }}
              />
              <h1 className="display-5">Daniel David Martinez Barrios</h1>
              <p className="lead">Estudiante de Ingeniería de Software apasionado por el desarrollo backend y la IA</p>
              <Button
                variant="light"
                href="/CV Daniel Martinez.pdf"
                download
              >
                Descargar Hoja de Vida
              </Button>
            </div>
          </Carousel.Item>
  
          {/* Slide 2 (opcional) */}
          <Carousel.Item>
            <img className="d-block w-100" src={slide2} alt="Slide 2" style={{ height: '100vh', objectFit: 'cover' }} />
            <Carousel.Caption className="bg-dark bg-opacity-50 p-3 rounded">
              <h3>Oracle Next Education</h3>
              <p>Java, Spring Boot, API REST y más</p>
            </Carousel.Caption>
          </Carousel.Item>
  
          {/* Slide 3 (opcional) */}
          <Carousel.Item>
            <img className="d-block w-100" src={slide3} alt="Slide 3" style={{ height: '100vh', objectFit: 'cover' }} />
            <Carousel.Caption className="bg-dark bg-opacity-50 p-3 rounded">
              <h3>Conectado al futuro</h3>
              <p>Integrando APIs, IA y pasión por el código</p>
            </Carousel.Caption>
          </Carousel.Item>
        </Carousel>
      </section>
    );
}
