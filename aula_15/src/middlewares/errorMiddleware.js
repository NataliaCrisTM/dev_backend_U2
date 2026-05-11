// 4 parâmetros obrigatórios — Express identifica middleware de erro assim
export const errorMiddleware = (err, req, res, next) => {
  const status = err.statusCode || 500;
  const mensagem = err.message || 'Erro interno do servidor';

  res.status(status).json({ sucesso: false, mensagem });
};