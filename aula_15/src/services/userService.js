import * as UserRepository from '../repositories/userRepository.js';
import { UserResponseDTO } from '../dtos/userDTO.js';

const lancerNaoEncontrado = (msg) => {
  const err = new Error(msg);
  err.statusCode = 404;
  throw err;
};

export const listarUsers = async () => {
  const users = await UserRepository.findAll();
  return users.map(u => new UserResponseDTO(u));
};

export const buscarUserPorId = async (id) => {
  const user = await UserRepository.findById(id);
  if (!user) lancerNaoEncontrado('Usuário não encontrado');
  return new UserResponseDTO(user);
};

export const criarUser = async (userData) => {
  const novo = await UserRepository.create(userData);
  return new UserResponseDTO(novo);
};

export const editarUser = async (id, userData) => {
  const user = await UserRepository.findById(id);
  if (!user) lancerNaoEncontrado('Usuário não encontrado');
  const atualizado = await UserRepository.update(id, userData);
  return new UserResponseDTO(atualizado);
};

export const editarCampoUser = async (id, campos) => {
  const user = await UserRepository.findById(id);
  if (!user) lancerNaoEncontrado('Usuário não encontrado');
  const atualizado = await UserRepository.patch(id, campos);
  return new UserResponseDTO(atualizado);
};

export const removerUser = async (id) => {
  const user = await UserRepository.findById(id);
  if (!user) lancerNaoEncontrado('Usuário não encontrado');
  await UserRepository.remove(id);
};