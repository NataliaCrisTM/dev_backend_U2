// src/app.js — configura middlewares e rotas
import express from 'express';
import petRoutes from './routes/petRoutes.js';
import userRoutes from './routes/userRoutes.js';

const app = express();
app.use(express.json());

// Prefixo /api/pets para todas as rotas de pets
app.use('/api/pets', petRoutes);
app.use('/users', userRoutes)

// Middleware de log global — em src/app.js
const meuLog = (req, res, next) => {
  const data = new Date().toISOString();
  console.log(`[${data}] ${req.method} ${req.url}`);
  next(); // OBRIGATÓRIO: passa para o próximo
};
app.use(meuLog);

export default app;