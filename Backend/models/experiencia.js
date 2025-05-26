const mongoose = require('mongoose');

const experienciaSchema = new mongoose.Schema({
  titulo: { type: String },
  fechaInicio: { type: Number },
  fechaFin: { type: Number },
  descripcion: { type: String },
  urlProyecto: { type: String, default: '' },
  tecnologias: { type: [String], default: [] }
}, {
  timestamps: true
});

module.exports = mongoose.model('Experiencia', experienciaSchema);
