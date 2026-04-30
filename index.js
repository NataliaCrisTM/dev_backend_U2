import express from 'express'; 
const app = express();

// 1. Middleware - ensina o express a ler JSON no corpo das requisições
app.use(express.json())

//2. Banco de dados em memória - um array simples no lugar de um banco real
let pets = [
    { id: 1, nome: "Paçocão", especie: "Cão", raça: "Labrador", idade: 3 },
  { id: 2, nome: "Frajola", especie: "Gato", raça: "SRD", idade: 5 }
]

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

const PORTA = 3000;
app.listen(PORTA, () => {
  console.log(`API PetShop online na porta ${PORTA}`);
});