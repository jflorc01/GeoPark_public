const express = require('express');
const cors = require('cors');
const connectDB = require('./config/db');
const tdoRoutes = require('./routes/routes');

const app = express();

app.use(cors()); // Habilita CORS (desbloquea las peticiones HTTP entre diferentes dominios)
app.use(express.json()); // Permite parsear JSON en las solicitudes

// Conectar a MongoDB
connectDB();

app.use('/api/tdo', tdoRoutes);

// Ruta de prueba básica
app.get('/', (req, res) => {
  res.send('<h1>Backend funcionando correctamente :)</h1>');
});

app.use((req, res) => {
  res.status(404).json({ error: 'Ruta no encontrada' });
});

// Configurar puerto e iniciar servidor
const PORT = 3001;
app.listen(PORT, () => {
  console.log(`\n=====================================`);
  console.log(`Servidor corriendo en el puerto ${PORT}`);
  console.log(`http://localhost:${PORT}`);
  console.log(`=====================================\n`);
});