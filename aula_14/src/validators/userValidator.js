// src/validators/userValidator.js
import { body, param } from 'express-validator';

export const regrasValidacaoUser = [
  body('nome').notEmpty().withMessage('Nome é obrigatório'),
  body('email').isEmail().withMessage('E-mail inválido'),
  body('senha').isLength({ min: 6 }).withMessage('Senha deve ter no mínimo 6 caracteres'),
];

export const regrasValidacaoUserId = [
  param('id').isNumeric().withMessage('ID deve ser numérico'),
];