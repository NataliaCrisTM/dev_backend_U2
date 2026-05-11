import * as PetRepository from '../repositories/petRepository.js';
import { PetResponseDTO } from '../dtos/petDTO.js';

const lancerNaoEncontrado = (msg) => {
  const err = new Error(msg);
  err.statusCode = 404;
  throw err;
};

export const listarPets = async () => {
  const pets = await PetRepository.findAll();
  return pets.map(p => new PetResponseDTO(p));
};

export const buscarPetPorId = async (id) => {
  const pet = await PetRepository.findById(id);
  if (!pet) lancerNaoEncontrado('Pet não encontrado');
  return new PetResponseDTO(pet);
};

export const criarPet = async (petData) => {
  const novo = await PetRepository.create(petData);
  return new PetResponseDTO(novo);
};

export const editarPet = async (id, petData) => {
  const pet = await PetRepository.findById(id);
  if (!pet) lancerNaoEncontrado('Pet não encontrado');
  const atualizado = await PetRepository.update(id, petData);
  return new PetResponseDTO(atualizado);
};

export const editarCampoPet = async (id, campos) => {
  const pet = await PetRepository.findById(id);
  if (!pet) lancerNaoEncontrado('Pet não encontrado');
  const atualizado = await PetRepository.patch(id, campos);
  return new PetResponseDTO(atualizado);
};

export const removerPet = async (id) => {
  const pet = await PetRepository.findById(id);
  if (!pet) lancerNaoEncontrado('Pet não encontrado');
  await PetRepository.remove(id);
};