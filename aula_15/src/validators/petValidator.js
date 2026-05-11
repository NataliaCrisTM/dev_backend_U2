import { body, param } from 'express-validator';

// Só as regras, sem verificarErros no final
export const regrasValidacaoPet = [
  body('nome')
    .trim()
    .notEmpty().withMessage('O nome é obrigatório')
    .isLength({ min: 3 }).withMessage('Mínimo 3 caracteres'),
  body('especie')
    .notEmpty().withMessage('A espécie é obrigatória'),
  body('idade')
    .isInt({ min: 0 }).withMessage('A idade deve ser um número positivo'),
];

// Validação do :id — agora UUID, não número
export const regrasValidacaoPetId = [
  param('id').isUUID().withMessage('ID deve ser um UUID válido'),
];