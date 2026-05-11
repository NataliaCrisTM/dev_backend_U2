// src/routes/userRoutes.js
import { Router } from 'express';
import { listarUsers, buscarUserPorId, criarUser, editarUser, editarCampoUser, removerUser } from '../controllers/userController.js';
import { regrasValidacaoUser, regrasValidacaoUserId } from '../validators/userValidator.js';

const router = Router();

router.get('/',     listarUsers);
router.get('/:id',  regrasValidacaoUserId, buscarUserPorId);
router.post('/',    regrasValidacaoUser, criarUser);
router.put('/:id',  regrasValidacaoUserId, editarUser);
router.patch('/:id', regrasValidacaoUserId, editarCampoUser);
router.delete('/:id', regrasValidacaoUserId, removerUser);

export default router;