import db from '../config/database.js';
import { v4 as uuidv4 } from 'uuid';

export const findAll = async () => {
  await db.read();
  return db.data.pets;
};

export const findById = async (id) => {
  await db.read();
  // Comparação string com string (UUID)
  return db.data.pets.find(p => p.id === id);
};

export const create = async (petData) => {
  const novoPet = {
    id: uuidv4(), // UUID no lugar de Date.now()
    nome:    petData.nome,
    especie: petData.especie,
    raca:    petData.raca,
    idade:   petData.idade,
  };
  db.data.pets.push(novoPet);
  await db.write();
  return novoPet;
};

export const update = async (id, petData) => {
  const index = db.data.pets.findIndex(p => p.id === id);
  db.data.pets[index] = { id, ...petData };
  await db.write();
  return db.data.pets[index];
};

export const patch = async (id, campos) => {
  const pet = db.data.pets.find(p => p.id === id);
  if (campos.nome)    pet.nome    = campos.nome;
  if (campos.especie) pet.especie = campos.especie;
  if (campos.raca)    pet.raca    = campos.raca;
  if (campos.idade)   pet.idade   = campos.idade;
  await db.write();
  return pet;
};

export const remove = async (id) => {
  const index = db.data.pets.findIndex(p => p.id === id);
  db.data.pets.splice(index, 1);
  await db.write();
};