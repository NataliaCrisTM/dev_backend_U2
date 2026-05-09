Aula 14:

LowDB - biblioteca JavScript que usa um arquivo .json como banco de dados. Internamente usa o módulo fs do Node.js, mas abstrai tudo. Se interage com um objeto JS normal e chama db.write para persistir.

JSONFile é o adapter - diz ao lowdb onde salvar. Low é a instância do banco: recebe o adapter e o dado padrão (usado quando o arquivo não existe).



db.read() e db.write()

await db.read() - carrega o JSON do disco para memória. 

await db.write() - salva o estado atual de db.data de volta para o disco. Esquecer o write() é o erro mais comum.



O lowdb moderno usa import/export em vez de require(). Para ativar isso no Node.js, adicione "type": "module" no package.json. Todos os arquivos do projeto passam a usar import.

Para instalar lowdb -> npm install lowdb

criar arquivo database -> Configura como o banco funciona (adapter, instância, conexão)

const defaultData = { users: \[], pets: \[] } -> 
No contexto do lowdb (e de bancos de dados em geral), cada chave do objeto defaultData corresponde a uma entidade — ou seja, um tipo de coisa que sua aplicação gerencia.
Isso é análogo a ter duas tabelas num banco relacional como PostgreSQL, ou duas coleções no MongoDB. Cada array vai guardar todos os registros daquele tipo.

Vale notar que no lowdb você não tem as garantias que um banco relacional oferece — não há chaves estrangeiras reais, não há validação de integridade automática. A relação entre pets e users (por exemplo, qual pet pertence a qual usuário) você controla manualmente via código, como o userId no exemplo acima.


A importação dos dados fica no controller porque é ele quem lê escreve os dados, então ele quem precisa saber onde os dados estão;

A cada entidade nova criada, deve-se criar um arquivo em controllers, routes e validators para essa entidade. Além de incluir a rota em app.js. Isso se deve a separação de responsabilidades

Para cada entidade nova o processo é sempre o mesmo:

validators/   → define as regras de validação dos dados recebidos

controllers/  → define o que cada operação faz (lógica)

routes/       → mapeia os endpoints para os controllers

app.js        → registra a rota para o Express reconhecer

Toda função que tem await precisa do async antes de (req, res)

