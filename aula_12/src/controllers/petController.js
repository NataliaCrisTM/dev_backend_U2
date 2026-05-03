import { pets } from '../data/petData.js';

export const listarPets = (req, res) => {
    res.status(200).json(pets);
};

export const buscarPetPorId = (req, res) => {
  const { id } = req.params;
  const pet = pets.find(p => p.id === Number(id));
  if (!pet) return res.status(404).json({ mensagem: "Pet não encontrado" });
  res.status(200).json(pet);
};

export const criarPet = (req, res) => {
  const novoPet = { id: Date.now(), ...req.body };
  pets.push(novoPet);
  res.status(201).json(novoPet);
};

export const editarPet = (req, res) => {
  const { id } = req.params;
  const index = pets.findIndex(p => p.id === Number(id));

  if (index === -1) {
    return res.status(404).json({ mensagem: "Pet não encontrado!" });
  }

  pets[index] = { id: Number(id), ...req.body };
  res.status(200).json(pets[index]);
}

export const editarCampoPet = (req, res) => {
  const { id } = req.params;
  const pet = pets.find(p => p.id === Number(id));

  if (!pet) {
    return res.status(404).json({ mensagem: "Pet não encontrado!" });
  }

  if (req.body.nome) pet.nome = req.body.nome;
  if (req.body.especie) pet.especie = req.body.especie;
  if (req.body.raça) pet.raça = req.body.raça;
  if (req.body.idade) pet.idade = req.body.idade;

  res.status(200).json(pet);
}

export const removerPet = (req, res) => {
  const index = pets.findIndex(p => p.id === Number(req.params.id));

  if (index === -1) {
    return res.status(404).json({ mensagem: "Pet não encontrado!" });
  }

  pets.splice(index, 1);
  //O splice modifica o array original diretamente, sem precisar reatribuir a variável.
  res.status(204).send();
};