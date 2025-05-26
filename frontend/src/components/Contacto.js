import React, { useState } from "react";
import { Container, Form, Button, Alert } from "react-bootstrap";
import emailjs from "@emailjs/browser";

export default function Contacto() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  });

  const [status, setStatus] = useState({ success: null, message: "" });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
    setStatus({ success: null, message: "" });
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    if (!formData.name || !formData.email || !formData.message) {
      setStatus({ success: false, message: "Por favor completa todos los campos." });
      return;
    }

    emailjs
      .send(
        "service_nr9q30i",     // reemplaza esto
        "template_pve1sj5",    // reemplaza esto
        formData,
        "npACe_08g_Xld_so-"      // reemplaza esto
      )
      .then(() => {
        setStatus({ success: true, message: "¡Mensaje enviado con éxito!" });
        setFormData({ name: "", email: "", message: "" });
      })
      .catch(() => {
        setStatus({ success: false, message: "Error al enviar el mensaje. Intenta más tarde." });
      });
  };

  return (
    <section id="contacto" className="py-5">
      <Container>
        <h2 className="mb-4">Contacto</h2>
        <p className="lead">¡No dudes en ponerte en contacto conmigo!</p>

        <Form onSubmit={handleSubmit}>
          <Form.Group className="mb-3">
            <Form.Label>Nombre</Form.Label>
            <Form.Control
              type="text"
              name="name"
              value={formData.name}
              onChange={handleChange}
              placeholder="Tu nombre"
              required
            />
          </Form.Group>

          <Form.Group className="mb-3">
            <Form.Label>Correo Electrónico</Form.Label>
            <Form.Control
              type="email"
              name="email"
              value={formData.email}
              onChange={handleChange}
              placeholder="nombre@ejemplo.com"
              required
            />
          </Form.Group>

          <Form.Group className="mb-3">
            <Form.Label>Mensaje</Form.Label>
            <Form.Control
              as="textarea"
              rows={4}
              name="message"
              value={formData.message}
              onChange={handleChange}
              placeholder="Escribe tu mensaje aquí..."
              required
            />
          </Form.Group>

          <Button type="submit" variant="primary">Enviar mensaje</Button>

          {status.message && (
            <Alert className="mt-3" variant={status.success ? "success" : "danger"}>
              {status.message}
            </Alert>
          )}
        </Form>
      </Container>
    </section>
  );
}
