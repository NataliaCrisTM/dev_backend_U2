Aula 13:

Validação com express-validator



Sem validação, sua API aceita qualquer dado — nome vazio, e-mail inválido, idade negativa. Isso gera erros silenciosos no banco de dados e uma experiência ruim para quem consome a API.



Validar manualmente (com if/else) gera código repetitivo e poluído nos controllers. A solução é usar a biblioteca express-validator, que atua como middleware declarativo.





Benefícios: Controllers limpos, regras de negócio centralizadas e dados confiáveis chegando ao banco.



Como funciona o express-validator (três passos essenciais):

Cada middleware de validação não interrompe a requisição imediatamente ao encontrar o erro. Ele acumula os erros dentro do objeto req e chama next(). Só no final ele decide o que fazer. 



validatorMiddleware -> o arquivo é reutilizável para **qualquer** rota do sistema. Ele lê os erros acumulados no req e decide o que fazer

\->Por que 400? O erro é do cliente (dados inválidos), não do servidor. Use 400 Bad Request sempre que a requisição vier com dados malformados ou faltando.







petValidator -> É onde se define o "contrato" do que é um pet válido. As regras ficam separadas da lógica da resposta



O validador é inserido como middleware antes do controller. Se a validação falhar, o controller nunca é executado.

