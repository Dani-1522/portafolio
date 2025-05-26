const API_URL = "https://mi-portafolio-sjh4.onrender.com";

export const getExperiencias = () => fetch(API_URL).then(res => res.json());

export const createExperiencia = (data) =>
  fetch(API_URL, {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify(data),
  });

export const updateExperiencia = (id, data) =>
  fetch(`${API_URL}/${id}`, {
    method: "PUT",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify(data),
  });

export const deleteExperiencia = (id) =>
  fetch(`${API_URL}/${id}`, { method: "DELETE" });
