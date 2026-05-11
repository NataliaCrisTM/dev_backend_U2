export class PetResponseDTO {
  constructor(pet) {
    this.id      = pet.id;
    this.nome    = pet.nome;
    this.especie = pet.especie;
    this.raca    = pet.raca;
    this.idade   = pet.idade;
  }
}