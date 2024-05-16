
# Implementando o Banco de Dados em SQL
## 🛠 Ferramentas Utilizadas
* [BR Modelo WEB](https://app.brmodeloweb.com/#!/main)
* [SQLite Online](https://sqliteonline.com)
* Linguagem utilizada ANSI SQL
## 📝 Análise de Requisitos
Entender os requisitos do website e quais dados precisam ser armazenados:
- [ ] identificar as entidades principais

| Fale Conosco | Newsletter | FAQ       | Mapa de Casos | Notícias | Quem Somos   | Quiz                  |
| ------------ | ---------- | ----------| ------------- | -------- | ------------ | --------------------- |
| nome         | nome       | categoria | sigla         | título   | nome         | pergunta              |
| e-mail       | e-mail     | pergunta  | estado        | data     | profissao    | 4 opções de resposta  |
| mensagem     |            | resposta  | url           | resumo   | descricao    | score                 |
|              |            |           |               | url      | linkedin     |                       |
|              |            |           |               |          | github       |                       |

### Normalização
**Minimizar erros**) O atributo 'categoria' da tabela FAQ possui mais de duas opções. Para minimizar erros de digitação é recomendável que seja promovido a entidade (tabela de referência).

**1FN**) Transformar o atributo multivalorado 'opção de resposta' em nova tabela pois o mesmo contém 4 valores distintos.
  
**2FN**) Em confomidade: não há atributos não-chave com dependência parcial da chave primária da tabela.
  
**3FN**) Na tabela Quiz, o atributo 'score' tem dependência com outro atributo não-chave (opção de resposta). Disso surge a necessidade de definir outra entidade da qual 'score' é característica - Interação do Usuário. Logo a tabela Quiz será substituída por: Pergunta, Opção e Interação do Usuário.

## 🧩 Modelagem de Dados
### [Projeto Conceitual](https://app.brmodeloweb.com/#!/publicview/6645e4209c4fbe1c0ef2029d)
![image](https://github.com/LariVital/PDI-DengueNews/assets/142796669/fe6743a2-4c61-4b50-a72e-99ac0c83cd30)
### [Projeto Lógico](https://app.brmodeloweb.com/#!/publicview/66460f2b9c4fbe1c0ef21e1c)
![image](https://github.com/LariVital/PDI-DengueNews/assets/142796669/4cce42c2-5a9d-4b13-b804-15fcb90e4314)
## 🗃 Criação do Esquema do Banco de Dados (Projeto Físico) 
Escolher o SGBD - Sistema de Gerenciamento de Banco de Dados para criar o esquema do banco de dados:
- [ ] criar as tabelas
  * definir os domínios dos atributos
  * definir chaves primárias PK
  * definir chaves estrangeiras FK
  * definir as restrições de integridade
- [ ] realizar consultas SQL para recuperar, inserir, atualizar e excluir dados conforme necessário
### Scripts
* [Criação das tabelas](https://github.com/LariVital/PDI-DengueNews/tree/main/banco-dados/criar_tabelas.sql)

  ![image](https://github.com/LariVital/PDI-DengueNews/assets/142796669/3850500d-73c5-490b-9c9a-153c1bad38c2)

* [Inserção de valores nas tabelas](https://github.com/LariVital/PDI-DengueNews/tree/main/banco-dados/inserir_valores.sql)

**Assinante**
```
SELECT * FROM assinante;
```
![image](https://github.com/LariVital/PDI-DengueNews/assets/142796669/4b74b2e8-69a4-4e71-98b5-b431c260a233)

**Atendimento**
```
SELECT * FROM atendimento;
```
![image](https://github.com/LariVital/PDI-DengueNews/assets/142796669/d40760da-b038-4280-968b-58c19c8fea59)

**Equipe**
```
SELECT * FROM equipe;
```
![image](https://github.com/LariVital/PDI-DengueNews/assets/142796669/30ae710a-79ba-494c-9694-a6fbe2eabcd4)

**FAQ**
```
SELECT * FROM faq;
```
![image](https://github.com/LariVital/PDI-DengueNews/assets/142796669/38f05cef-7c21-4651-a1b3-e58b6e6d4cbf)


**Categoria**
```
SELECT * FROM categoria;
```
![image](https://github.com/LariVital/PDI-DengueNews/assets/142796669/1838df05-b436-4c5d-ba96-b2fbfa40306c)

**Mapa**
```
SELECT * FROM mapa;
```
![image](https://github.com/LariVital/PDI-DengueNews/assets/142796669/73b7f3fa-db67-4289-8749-1acbcb74670c)

**Noticia**
```
SELECT * FROM noticia;
```
![image](https://github.com/LariVital/PDI-DengueNews/assets/142796669/2988943f-b743-4f3f-a69b-1e861bde9592)

**Pergunta**
```
SELECT * FROM pergunta;
```
![image](https://github.com/LariVital/PDI-DengueNews/assets/142796669/57627b67-0541-4602-8004-00c0e30f8af5)

**Opção**
```
SELECT * FROM opcao;
```
![image](https://github.com/LariVital/PDI-DengueNews/assets/142796669/a2ed987d-8562-4592-b7a8-8b618c8d788c)

**Interação do Usuário**
```
SELECT * FROM interacao_usuario;
```
