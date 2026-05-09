// src/server.js — ponto de entrada, só inicializa
import app from './app.js';

const PORT = 3000;
app.listen(PORT, () => {
  console.log(`🚀 Servidor em http://localhost:${PORT}/api/pets`);
});