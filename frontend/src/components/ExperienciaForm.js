import React, { useState, useEffect } from "react";
import { Modal, Button, Form } from "react-bootstrap";

export default function ExperienciaForm({ show, handleClose, onSave, experiencia }) {
  const [formData, setFormData] = useState({
    titulo: "",
    fechaInicio: "",
    fechaFin: "",
    descripcion: "",
    tecnologias: "",
    urlProyecto: ""
  });

  useEffect(() => {
    if (experiencia) {
      setFormData({
        titulo: experiencia.titulo || "",
        fechaInicio: experiencia.fechaInicio || "",
        fechaFin: experiencia.fechaFin || "",
        descripcion: experiencia.descripcion || "",
        tecnologias: experiencia.tecnologias ? experiencia.tecnologias.join(", ") : "",
        urlProyecto: experiencia.urlProyecto || ""
      });
    } else {
      setFormData({
        titulo: "",
        fechaInicio: "",
        fechaFin: "",
        descripcion: "",
        tecnologias: "",
        urlProyecto: ""
      });
    }
  }, [experiencia]);

  const handleChange = (e) => {
    const { id, value } = e.target;
    setFormData((prev) => ({ ...prev, [id]: value }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const dataToSend = {
      ...formData,
      fechaInicio: parseInt(formData.fechaInicio, 10),
      fechaFin: formData.fechaFin ? parseInt(formData.fechaFin, 10) : null,
      tecnologias: formData.tecnologias.split(",").map(t => t.trim())
    };
    onSave(dataToSend, experiencia?._id);
    handleClose();
  };

  return (
    <Modal show={show} onHide={handleClose}>
      <Modal.Header closeButton>
        <Modal.Title>{experiencia ? "Editar Experiencia" : "Agregar Experiencia"}</Modal.Title>
      </Modal.Header>
      <Form onSubmit={handleSubmit}>
        <Modal.Body>
          <Form.Group>
            <Form.Label>Título</Form.Label>
            <Form.Control id="titulo" value={formData.titulo} onChange={handleChange} required />
          </Form.Group>

          <Form.Group>
            <Form.Label>Año Inicio</Form.Label>
            <Form.Control type="number" id="fechaInicio" value={formData.fechaInicio} onChange={handleChange} required />
          </Form.Group>

          <Form.Group>
            <Form.Label>Año Fin</Form.Label>
            <Form.Control type="number" id="fechaFin" value={formData.fechaFin} onChange={handleChange} />
          </Form.Group>

          <Form.Group>
            <Form.Label>Descripción</Form.Label>
            <Form.Control as="textarea" id="descripcion" value={formData.descripcion} onChange={handleChange} rows={3} required />
          </Form.Group>

          <Form.Group>
            <Form.Label>Tecnologías (separadas por coma)</Form.Label>
            <Form.Control id="tecnologias" value={formData.tecnologias} onChange={handleChange} required />
          </Form.Group>

          <Form.Group>
            <Form.Label>URL del Proyecto</Form.Label>
            <Form.Control type="url" id="urlProyecto" value={formData.urlProyecto} onChange={handleChange} />
          </Form.Group>
        </Modal.Body>
        <Modal.Footer>
          <Button variant="secondary" onClick={handleClose}>Cancelar</Button>
          <Button variant="primary" type="submit">Guardar</Button>
        </Modal.Footer>
      </Form>
    </Modal>
  );
}
