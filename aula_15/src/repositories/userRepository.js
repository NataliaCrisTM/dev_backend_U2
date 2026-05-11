import db from '../config/database.js';
import { v4 as uuidv4 } from 'uuid';

export const findAll  = async () => { await db.read(); return db.data.users; };
export const findById = async (id) => { await db.read(); return db.data.users.find(u => u.id === id); };

export const create = async (userData) => {
  const novoUser = { id: uuidv4(), ...userData };
  db.data.users.push(novoUser);
  await db.write();
  return novoUser;
};

export const update = async (id, userData) => {
  const index = db.data.users.findIndex(u => u.id === id);
  db.data.users[index] = { id, ...userData };
  await db.write();
  return db.data.users[index];
};

export const patch = async (id, campos) => {
  const user = db.data.users.find(u => u.id === id);
  if (campos.nome)  user.nome  = campos.nome;
  if (campos.email) user.email = campos.email;
  if (campos.senha) user.senha = campos.senha;
  await db.write();
  return user;
};

export const remove = async (id) => {
  const index = db.data.users.findIndex(u => u.id === id);
  db.data.users.splice(index, 1);
  await db.write();
};