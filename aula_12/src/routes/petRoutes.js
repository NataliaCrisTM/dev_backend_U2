// src/routes/petRoutes.js
import { Router } from 'express';
import { listarPets, buscarPetPorId, criarPet, editarPet, editarCampoPet, removerPet } from '../controllers/petController.js';

const validarPet = (req, res, next) => {
  const { nome } = req.body;
  if (!nome) {
    return res.status(400).json({ mensagem: "Nome obrigatório!" });
  }
  next(); // Tudo certo, segue para o controller
};

const router = Router();

router.get('/',    listarPets);
router.get('/:id', buscarPetPorId);
router.post('/', validarPet, criarPet);
router.put('/:id', editarPet);
router.patch('/:id', editarCampoPet);
router.delete('/:id', removerPet);




export default router;