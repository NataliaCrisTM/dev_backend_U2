import * as UserService from '../services/userService.js';

export const listarUsers = async (req, res, next) => {
  try {
    const users = await UserService.listarUsers();
    res.status(200).json(users);
  } catch (err) { next(err); }
};

export const buscarUserPorId = async (req, res, next) => {
  try {
    const user = await UserService.buscarUserPorId(req.params.id);
    res.status(200).json(user);
  } catch (err) { next(err); }
};

export const criarUser = async (req, res, next) => {
  try {
    const novoUser = await UserService.criarUser(req.body);
    res.status(201).json(novoUser);
  } catch (err) { next(err); }
};

export const editarUser = async (req, res, next) => {
  try {
    const user = await UserService.editarUser(req.params.id, req.body);
    res.status(200).json(user);
  } catch (err) { next(err); }
};

export const editarCampoUser = async (req, res, next) => {
  try {
    const user = await UserService.editarCampoUser(req.params.id, req.body);
    res.status(200).json(user);
  } catch (err) { next(err); }
};

export const removerUser = async (req, res, next) => {
  try {
    await UserService.removerUser(req.params.id);
    res.status(204).send();
  } catch (err) { next(err); }
};