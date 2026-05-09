import db from '../config/database.js'

export const listarPets = (req, res) => {
    res.status(200).json(db.data.pets);
};

export const buscarPetPorId = (req, res) => {
  const { id } = req.params;
  const pet = db.data.pets.find(p => p.id === Number(id));
  if (!pet) return res.status(404).json({ mensagem: "Pet não encontrado" });
  res.status(200).json(pet);
};

export const criarPet = async (req, res) => {
  const novoPet = { id: Date.now(), ...req.body };
  db.data.pets.push(novoPet);
  await db.write() //<- persiste no banco
  res.status(201).json(novoPet);
};

export const editarPet = async (req, res) => {
  const { id } = req.params;
  const index = db.data.pets.findIndex(p => p.id === Number(id));

  if (index === -1) {
    return res.status(404).json({ mensagem: "Pet não encontrado!" });
  }

  db.data.pets[index] = { id: Number(id), ...req.body };
  await db.write()
  res.status(200).json(db.data.pets[index]);
}

export const editarCampoPet = async  (req, res) => {
  const { id } = req.params;
  const pet = db.data.pets.find(p => p.id === Number(id));

  if (!pet) {
    return res.status(404).json({ mensagem: "Pet não encontrado!" });
  }

  if (req.body.nome) pet.nome = req.body.nome;
  if (req.body.especie) pet.especie = req.body.especie;
  if (req.body.raça) pet.raça = req.body.raça;
  if (req.body.idade) pet.idade = req.body.idade;
  await db.write()

  res.status(200).json(pet);
}

export const removerPet = async(req, res) => {
  const index = db.data.pets.findIndex(p => p.id === Number(req.params.id));

  if (index === -1) {
    return res.status(404).json({ mensagem: "Pet não encontrado!" });
  }

  db.data.pets.splice(index, 1);
  await db.write()
  //O splice modifica o array original diretamente, sem precisar reatribuir a variável.
  res.status(204).send();
};