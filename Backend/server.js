const express = require('express');
const mongoose = require('mongoose');
const bodyParser = require('body-parser');
const cors = require('cors');
const userRoutes = require('./routes/experienciaRuta');


const app = express();
const PORT = 3000;

// Middlewares
app.use(cors());
app.use(cors({
  origin: ['https://tu-frontend.vercel.app', 'http://localhost:3000'],
  methods: ['GET', 'POST', 'PUT', 'DELETE']
}));
app.use(bodyParser.json());

// Rutas
app.use('/api/experiencias', userRoutes);
app.use(express.static('public'));

// Conectar a MongoDB
require('dotenv').config();

mongoose.connect(process.env.MONGO_URI,{
  serverSelectionTimeoutMS: 5000,
      socketTimeoutMS: 45000
})
.then(()=> console.log('🟢 Conectado a MongoDB'))
.catch(err => console.error('🔴 Error al conectar a MongoDB:', err));

app.listen(PORT, () => {
  console.log(`Servidor escuchando en http://localhost:${PORT}`);
});
