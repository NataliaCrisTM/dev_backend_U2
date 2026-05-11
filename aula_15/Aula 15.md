Aula 15:Arquitetura em Camadas e

separação de responsabilidades

Estrutura da aula 14:
Validator -> Rota -> Controller + DB



Estrutura da aula 15:
Validator -> Rota -> Controller -> Service -> Repository -> DB



petController.js hoje:

Acessa db.data.pets diretamente. Gera ID com Date.now(). Contém toda a lógica de persistência. Não tem camada de serviço.

Depois da Aula 15

Controller só chama o Service. Service aplica regras de negócio. Repository faz o acesso ao banco. DTO formata a resposta.

Validator - Define o que a API aceita (entrada)
DTO -> Define o que a API retorna (saída)

São contratos em direções opostas, e essa distinção costuma confundir no começo.

Validação:
Validator - Define as regras de validação dos dados de entrada usando express-validator. Não contém lógica de negócio. Apenas verifica o formato e presença dos campos.
✓ Faz: Garante que os dados chegam corretos antes de qualquer processamento.

✗ Não faz: Lógica de negócio, acesso ao banco, respostas HTTP.



Rota - Mapeia URL + Método HTTP para um controller. Aplica middlewares de validação na ordem correta. Não contém lógica de negócio.

✓ Faz: Define endpoints e encadeia middlewares.

✗ Não faz: Sabe o que acontece dentro do Controller ou Service.

