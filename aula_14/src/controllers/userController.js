// src/controllers/userController.js
import db from '../config/database.js';

export const listarUsers = (req, res) => {
  res.status(200).json(db.data.users);
};

export const buscarUserPorId = (req, res) => {
  const { id } = req.params;
  const user = db.data.users.find(u => u.id === Number(id));
  if (!user) return res.status(404).json({ mensagem: 'Usuário não encontrado' });
  res.status(200).json(user);
};

export const criarUser = async (req, res) => {
  const novoUser = { id: Date.now(), ...req.body };
  db.data.users.push(novoUser);
  await db.write();
  res.status(201).json(novoUser);
};

export const editarUser = async (req, res) => {
  const { id } = req.params;
  const index = db.data.users.findIndex(u => u.id === Number(id));

  if (index === -1) {
    return res.status(404).json({ mensagem: 'Usuário não encontrado!' });
  }

  db.data.users[index] = { id: Number(id), ...req.body };
  await db.write();
  res.status(200).json(db.data.users[index]);
};

export const editarCampoUser = async (req, res) => {
  const { id } = req.params;
  const user = db.data.users.find(u => u.id === Number(id));

  if (!user) {
    return res.status(404).json({ mensagem: 'Usuário não encontrado!' });
  }

  if (req.body.nome) user.nome = req.body.nome;
  if (req.body.email) user.email = req.body.email;
  if (req.body.senha) user.senha = req.body.senha;

  await db.write();
  res.status(200).json(user);
};

export const removerUser = async (req, res) => {
  const index = db.data.users.findIndex(u => u.id === Number(req.params.id));

  if (index === -1) {
    return res.status(404).json({ mensagem: 'Usuário não encontrado!' });
  }

  db.data.users.splice(index, 1);
  await db.write();
  res.status(204).send();
};