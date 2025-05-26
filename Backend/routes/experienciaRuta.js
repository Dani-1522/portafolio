const express = require('express');
const router = express.Router();
const Experiencia = require('../models/experiencia')

// Nueva Experiencia
router.post('/', async (req, res) => {
    try{
        const experienciaNueva = new Experiencia(req.body);
        const experienciaGuardada = await experienciaNueva.save();
        res.status(201).json(experienciaGuardada);
    } catch (err) {
        res.status(400).json({ error: err.message });
      }
})

// Ver todas las Experiencia 
router.get('/', async (req, res) =>{
    try{
        const experiencia = await Experiencia.find();
        res.json(experiencia)
    }catch(err){
        res.status(500).json({ error: err.message});
    }
});

// Ver experiencia por id
router.get('/:id', async (req, res) => {
    try {
      const experiencia = await Experiencia.findById(req.params.id);
      if (!experiencia) return res.status(404).json({ error: 'Experiencia no encontrada' });
      res.json(experiencia);
    } catch (err) {
      res.status(500).json({ error: err.message });
    }
  });
  
  // Actualizar experiencia
  router.put('/:id', async (req, res) => {
    try {
      const experienciaActualizada = await Experiencia.findByIdAndUpdate(req.params.id, req.body, { new: true });
      res.json(experienciaActualizada);
    } catch (err) {
      res.status(400).json({ error: err.message });
    }
  });
  
  // Eliminar experiencia
  router.delete('/:id', async (req, res) => {
    try {
      await Experiencia.findByIdAndDelete(req.params.id);
      res.json({ mensaje: 'Usuario eliminado correctamente' });
    } catch (err) {
      res.status(500).json({ error: err.message });
    }
  });
  
  module.exports = router;