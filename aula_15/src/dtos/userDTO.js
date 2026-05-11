export class UserResponseDTO {
  constructor(user) {
    this.id    = user.id;
    this.nome  = user.nome;
    this.email = user.email;
    // 'senha' deliberadamente omitida — nunca deve ser exposta.
  }
}