//O que validar

import { body } from 'express-validator';
import { verificarErros } from '../middlewares/validatorMiddleware.js';

export const regrasValidacaoPet = [
  body('nome')
    .trim()                // remove espaços extras
    .notEmpty().withMessage('O nome é obrigatório')
    .isLength({ min: 3 }).withMessage('Mínimo 3 caracteres'),

  body('especie')
    .notEmpty().withMessage('A espécie é obrigatória'),

  body('idade')
    .isInt({ min: 0 }).withMessage('A idade deve ser um número positivo'),

  verificarErros  // middleware genérico no final do array
];