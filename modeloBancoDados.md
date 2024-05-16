
# Implementando o Banco de Dados em SQL
## 🛠 Ferramentas Utilizadas
* [BR Modelo WEB](https://app.brmodeloweb.com/#!/main)
* [SQLite Online](https://sqliteonline.com)
* Linguagem utilizada ANSI SQL
## 📝 Análise de Requisitos
Entender os requisitos do website e quais dados precisam ser armazenados:
- [ ] identificar as entidades principais
- [ ] identificar os relacionamentos entre elas
- [ ] identificar os tipos de consultas que serão executadas no banco de dados
## 🧩 Modelagem de Dados
### [Projeto Conceitual](https://app.brmodeloweb.com/#!/publicview/6645e4209c4fbe1c0ef2029d)
![image](https://github.com/LariVital/PDI-DengueNews/assets/142796669/8987f848-4a7d-4d34-9dfa-c9abef12bac5)

### [Projeto Lógico](https://app.brmodeloweb.com/#!/publicview/66460f2b9c4fbe1c0ef21e1c)
![image](https://github.com/LariVital/PDI-DengueNews/assets/142796669/05435258-33d7-4e44-b772-dd4364ec749e)

## 🗃 Criação do Esquema do Banco de Dados (Projeto Físico) 
Escolher o SGBD - Sistema de Gerenciamento de Banco de Dados para criar o esquema do banco de dados:
- [ ] criar as tabelas
  * definir os domínios dos atributos
  * definir chaves primárias PK
  * definir chaves estrangeiras FK
  * definir as restrições de integridade
- [ ] realizar consultas SQL para recuperar, inserir, atualizar e excluir dados conforme necessário
### [Script de criação das tabelas](https://github.com/LariVital/PDI-DengueNews/tree/main/banco-dados/criar_tabelas.sql)
```
--Fale Conosco
CREATE TABLE atendimento ( 
 protocolo SERIAL PRIMARY KEY,  
 nome VARCHAR(50) NOT NULL,  
 email VARCHAR(30) NOT NULL,  
 mensagem VARCHAR(255) NOT NULL
); 

--Newsletter
CREATE TABLE assinante  ( 
 id SERIAL PRIMARY KEY,  
 nome VARCHAR(50) NOT NULL,  
 email VARCHAR(30) NOT NULL 
); 

--Quem Somos
CREATE TABLE equipe (  
 id SERIAL PRIMARY KEY,
 nome VARCHAR(20) NOT NULL,
 profissao VARCHAR(50) NOT NULL, 
 descricao VARCHAR(100) NOT NULL 
); 

--FAQ
CREATE TABLE categoria ( 
 id SERIAL PRIMARY KEY,  
 assunto VARCHAR(20) not NULL
); 

CREATE TABLE faq ( 
 numero SERIAL PRIMARY KEY,  
 pergunta TEXT NOT NULL,  
 resposta TEXT NOT NULL,  
 id_categoria INT NOT NULL,
  CONSTRAINT fk_categoria FOREIGN KEY (id_categoria)
  	REFERENCES categoria(id)
); 

CREATE TABLE noticia ( 
 id SERIAL PRIMARY KEY,  
 data DATE NOT NULL,  
 titulo VARCHAR(100) NOT NULL,  
 resumo VARCHAR(255) NOT NULL,  
 url VARCHAR(255) NOT NULL  
); 

CREATE TABLE mapa ( 
 sigla VARCHAR(2) PRIMARY KEY,  
 estado VARCHAR(20) NOT NULL, 
 url VARCHAR(50) NOT NULL 
); 

--QUIZ
CREATE TABLE pergunta ( 
 id_pergunta SERIAL PRIMARY KEY,  
 pergunta VARCHAR(100) NOT NULL
); 

CREATE TABLE opcao ( 
 id_pergunta INT NOT NULL, 
 id_opcao VARCHAR(2) PRIMARY KEY,  
 opcao VARCHAR(50) NOT NULL,  
 e_correta INT NOT NULL,
  CONSTRAINT fk_pergunta FOREIGN KEY (id_pergunta)
  	REFERENCES pergunta(id_pergunta)
); 

CREATE TABLE interacao_usuario ( 
 id_interacao SERIAL PRIMARY KEY,  
 id_pergunta INT NOT NULL,  
 id_opcao VARCHAR(2) NOT NULL,
 score INT,
  CONSTRAINT fk_id_pergunta FOREIGN KEY (id_pergunta)
  	REFERENCES pergunta (id_pergunta),
  CONSTRAINT fk_opcao foreign key (id_opcao)
  	REFERENCES opcao(id_opcao)
); 

```
