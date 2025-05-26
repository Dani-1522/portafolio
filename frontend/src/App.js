
import React, { useEffect, useState } from "react";
import { Container, Button } from "react-bootstrap";
import './App.css'
import ExperienciaCard from "./components/ExperienciaCard";
import ExperienciaForm from "./components/ExperienciaForm";
import {
  getExperiencias,
  createExperiencia,
  updateExperiencia,
  deleteExperiencia,
} from "./api";
import About from "./components/About";
import Hero from "../src/components/Hero";
import Header from "./components/Header";
import Educacion from "../src/components/Educacion";
import Habilidades from "../src/components/Habilidades";
import Contacto from "../src/components/Contacto";
import Footer from "../src/components/Footer";

function App() {
  const [experiencias, setExperiencias] = useState([]);
  const [showModal, setShowModal] = useState(false);
  const [experienciaSeleccionada, setExperienciaSeleccionada] = useState(null);

  // Cargar experiencias desde la API
  const cargarExperiencias = async () => {
    try {
      const data = await getExperiencias();
      setExperiencias(data);
    } catch (error) {
      console.error("Error al cargar experiencias:", error);
    }
  };

  useEffect(() => {
    cargarExperiencias();
  }, []);

  // Guardar experiencia (nuevo o editar)
  const handleSave = async (data, id) => {
    try {
      if (id) {
        await updateExperiencia(id, data);
      } else {
        await createExperiencia(data);
      }
      cargarExperiencias();
    } catch (error) {
      console.error("Error al guardar experiencia:", error);
    }
  };

  // Eliminar experiencia
  const handleDelete = async (id) => {
    if (window.confirm("¿Estás seguro de eliminar esta experiencia?")) {
      try {
        await deleteExperiencia(id);
        cargarExperiencias();
      } catch (error) {
        console.error("Error al eliminar experiencia:", error);
      }
    }
  };

  // Abrir modal para nueva experiencia
  const handleAgregar = () => {
    setExperienciaSeleccionada(null);
    setShowModal(true);
  };

  // Abrir modal para editar
  const handleEditar = (exp) => {
    setExperienciaSeleccionada(exp);
    setShowModal(true);
  };

  return (
<>
    <Header />
    <Hero />
    <About />
    
    <Container className="py-4">
      <div className="d-flex justify-content-between align-items-center mb-4">
        <h2>Proyectos Personales</h2>
        <Button variant="success" onClick={handleAgregar}>
          Agregar Experiencia
        </Button>
      </div>

      {experiencias.length === 0 && <p>No hay experiencias registradas.</p>}

      {experiencias.map((exp) => (
        <ExperienciaCard
          key={exp._id}
          exp={exp}
          onEdit={handleEditar}
          onDelete={handleDelete}
        />
      ))}

      <ExperienciaForm
        show={showModal}
        handleClose={() => setShowModal(false)}
        onSave={handleSave}
        experiencia={experienciaSeleccionada}
      />
    </Container>
    <Educacion />
    <Habilidades />
    <Contacto />
    <Footer />
    </>
  );
}

export default App;




