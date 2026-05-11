import express from 'express';
import petRoutes from './routes/petRoutes.js';
import userRoutes from './routes/userRoutes.js';
import { errorMiddleware } from './middlewares/errorMiddleware.js';

const app = express();
app.use(express.json());

// Log ANTES das rotas para interceptar as requisições
const meuLog = (req, res, next) => {
  const data = new Date().toISOString();
  console.log(`[${data}] ${req.method} ${req.url}`);
  next();
};
app.use(meuLog);

app.use('/api/pets', petRoutes);
app.use('/users', userRoutes);

// Middleware de erro SEMPRE no final — após as rotas
app.use(errorMiddleware);

export default app;