import React from "react";

export default function ExperienciaCard({ exp, onEdit, onDelete }) {
  return (
    <div className="card mb-3 position-relative">
      <div className="position-absolute top-0 end-0 m-2">
        <i className="bi bi-pencil-square me-2 text-info" style={{ cursor: 'pointer' }} onClick={() => onEdit(exp)}></i>
        <i className="bi bi-trash text-danger" style={{ cursor: 'pointer' }} onClick={() => onDelete(exp._id)}></i>
      </div>
      <div className="card-body">
        <h5>{exp.titulo}</h5>
        <p><strong>{exp.fechaInicio || "Sin fecha"} - {exp.fechaFin || "Actualidad"}</strong></p>
        <p>{exp.descripcion}</p>
        <p><strong>Tecnologías:</strong> {exp.tecnologias?.join(", ")}</p>
        {exp.urlProyecto && (
          <p><a href={exp.urlProyecto} target="_blank" rel="noreferrer">{exp.urlProyecto}</a></p>
        )}
      </div>
    </div>
  );
}
