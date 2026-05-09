// src/routes/petRoutes.js
import { Router } from 'express';
import { listarPets, buscarPetPorId, criarPet, editarPet, editarCampoPet, removerPet } from '../controllers/petController.js';
import { regrasValidacaoPet } from '../validators/petValidator.js';



const router = Router();

router.get('/',    listarPets);
router.get('/:id', buscarPetPorId);
router.post('/',   regrasValidacaoPet, criarPet);
router.put('/:id', editarPet);
router.patch('/:id', editarCampoPet);
router.delete('/:id', removerPet);




export default router;