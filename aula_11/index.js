import express from 'express'; 
const app = express();

// 1. Middleware - ensina o express a ler JSON no corpo das requisições
app.use(express.json())

//2. Banco de dados em memória - um array simples no lugar de um banco real
let pets = [
    { id: 1, nome: "Paçocão", especie: "Cão", raça: "Labrador", idade: 3 },
  { id: 2, nome: "Frajola", especie: "Gato", raça: "SRD", idade: 5 }
]

app.use((req, res, next) => {
  console.log(`[${new Date().toISOString()}] ${req.method} ${req.url}`);
  next();
});

//3. Rota GET - Retorna todos os pets
app.get('/pets', (req, res) => {
    res.status(200).json(pets)
});

//4. rota para buscar um pet especifico pelo ID
app.get('/pets/:id', (req, res) => {
    const {id} = req.params;
    const pet = pets.find(p => p.id === Number(id));

    if (!pet) {
        return res.status(404).json({mensagem: "pet não encontrado"})
    }
    res.status(200).json(pet);
})

app.post('/pets', (req, res) => {
  const { nome, especie, raça, idade } = req.body;

  if (!nome) {
    return res.status(400).json({ mensagem: "O nome é obrigatório!" });
  }

  const novoPet = { id: pets.length + 1, nome, especie, raça, idade };
  pets.push(novoPet);
  res.status(201).json(novoPet);
});

app.put('/pets/:id', (req, res) => {
  const { id } = req.params;
  const index = pets.findIndex(p => p.id === Number(id));

  if (index === -1) {
    return res.status(404).json({ mensagem: "Pet não encontrado!" });
  }

  pets[index] = { id: Number(id), ...req.body };
  res.status(200).json(pets[index]);
});

app.patch('/pets/:id', (req, res) => {
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
});

app.delete('/pets/:id', (req, res) => {
  const { id } = req.params;
  const tamanhoInicial = pets.length;

  pets = pets.filter(p => p.id !== Number(id));

  if (pets.length === tamanhoInicial) {
    return res.status(404).json({ mensagem: "Pet não encontrado!" });
  }

  res.status(204).send();
});

app.use((req, res) => {
  res.status(404).json({ mensagem: "A rota solicitada não existe." });
});

const PORTA = 3000;
app.listen(PORTA, () => {
  console.log(`API PetShop online na porta ${PORTA}`);
});