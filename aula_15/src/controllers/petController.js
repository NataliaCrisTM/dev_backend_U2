import * as PetService from '../services/petService.js';

export const listarPets = async (req, res, next) => {
  try {
    const pets = await PetService.listarPets();
    res.status(200).json(pets);
  } catch (err) { next(err); }
};

export const buscarPetPorId = async (req, res, next) => {
  try {
    const pet = await PetService.buscarPetPorId(req.params.id);
    res.status(200).json(pet);
  } catch (err) { next(err); }
};

export const criarPet = async (req, res, next) => {
  try {
    const novoPet = await PetService.criarPet(req.body);
    res.status(201).json(novoPet);
  } catch (err) { next(err); }
};

export const editarPet = async (req, res, next) => {
  try {
    const pet = await PetService.editarPet(req.params.id, req.body);
    res.status(200).json(pet);
  } catch (err) { next(err); }
};

export const editarCampoPet = async (req, res, next) => {
  try {
    const pet = await PetService.editarCampoPet(req.params.id, req.body);
    res.status(200).json(pet);
  } catch (err) { next(err); }
};

export const removerPet = async (req, res, next) => {
  try {
    await PetService.removerPet(req.params.id);
    res.status(204).send();
  } catch (err) { next(err); }
};