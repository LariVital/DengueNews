--CRIAR TABELAS
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
 pergunta VARCHAR(100) NOt NULL
); 

CREATE TABLE opcao ( 
 id_pergunta INT not NULL, 
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