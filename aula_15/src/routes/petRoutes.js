import { Router } from 'express';
import * as PetController from '../controllers/petController.js';
import { regrasValidacaoPet, regrasValidacaoPetId }
  from '../validators/petValidator.js';
import { verificarErros } from '../middlewares/validatorMiddleware.js';

const router = Router();

router.get('/',         PetController.listarPets);
router.get('/:id',      regrasValidacaoPetId, verificarErros, PetController.buscarPetPorId);
router.post('/',        regrasValidacaoPet,   verificarErros, PetController.criarPet);
router.put('/:id',      regrasValidacaoPetId, verificarErros, PetController.editarPet);
router.patch('/:id',    regrasValidacaoPetId, verificarErros, PetController.editarCampoPet);
router.delete('/:id',   regrasValidacaoPetId, verificarErros, PetController.removerPet);

export default router;