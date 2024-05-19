
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

## 👁‍🗨 [Modelo Conceitual](https://app.brmodeloweb.com/#!/publicview/6645e4209c4fbe1c0ef2029d)
![image](https://github.com/LariVital/PDI-DengueNews/assets/142796669/fe6743a2-4c61-4b50-a72e-99ac0c83cd30)
## 🧠 [Modelo Lógico](https://app.brmodeloweb.com/#!/publicview/66460f2b9c4fbe1c0ef21e1c)
![image](https://github.com/LariVital/PDI-DengueNews/assets/142796669/e40a0670-9715-43e1-949d-1c769d8f95b9)

## 💪🏼 Modelo Físico 
Escolher o SGBD - Sistema de Gerenciamento de Banco de Dados para criar o esquema do banco de dados:
- [ ] criar as tabelas
  * definir os domínios dos atributos
  * definir chaves primárias PK
  * definir chaves estrangeiras FK
  * definir as restrições de integridade

### Scripts
* [Criação das tabelas](https://github.com/LariVital/PDI-DengueNews/tree/main/banco-dados/criar-tabelas.sql)

  ![image](https://github.com/LariVital/PDI-DengueNews/assets/142796669/3850500d-73c5-490b-9c9a-153c1bad38c2)

* [Inserção de valores nas tabelas](https://github.com/LariVital/PDI-DengueNews/tree/main/banco-dados/inserir-dados.sql)

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
![image](https://github.com/LariVital/PDI-DengueNews/assets/142796669/21110863-294d-4a96-8e50-59b1a20de56f)

**Opção**
```
SELECT * FROM opcao;
```
![image](https://github.com/LariVital/PDI-DengueNews/assets/142796669/b2b2d84d-4f6f-498f-8b24-0b86139a712c)

**Interação do Usuário**
```
SELECT * FROM interacao_usuario;
```
![image](https://github.com/LariVital/PDI-DengueNews/assets/142796669/9c8d6a20-84c3-49a8-81bb-a4d92fd0dd3b)

* [*Trigger* para atribuir pontos às respostas]()
```
CREATE OR REPLACE FUNCTION atualiza_score() RETURNS TRIGGER AS $$
BEGIN
  IF NEW.e_correta THEN
    NEW.score := 1;
  ELSE
    NEW.score := 0;
  END IF;
  RETURN NEW;
END;
$$ LANGUAGE plpgsql;

CREATE TRIGGER score_trigger
BEFORE INSERT OR UPDATE ON interacao_usuario
FOR EACH ROW EXECUTE PROCEDURE atualiza_score();
```
![image](https://github.com/LariVital/PDI-DengueNews/assets/142796669/6f109c2f-a988-4b22-adb8-9c9577a87a02)

* [*View* com a pontuação total do jogador](https://github.com/LariVital/PDI-DengueNews/tree/main/banco-dados/view-score.sql)
```
CREATE VIEW points_sum AS
SELECT sum(score) AS
pontos_recebidos, COUNT(score) AS
pontos_disponiveis
FROM interacao_usuario
```
![image](https://github.com/LariVital/PDI-DengueNews/assets/142796669/bcf8554b-971d-4ee1-a5f8-5c23e56bd867)

Projetar a *view* 'points_sum':
```
SELECT * from points_sum;
```
![image](https://github.com/LariVital/PDI-DengueNews/assets/142796669/ae7d5376-06ef-4735-aac6-66f7b400c19a)

### [Consultas](https://github.com/LariVital/PDI-DengueNews/tree/main/banco-dados/consultas.sql)
- [ ] realizar consultas SQL para recuperar, inserir, atualizar e excluir dados conforme necessário

**Classificar as perguntas frequentes por assunto**
```
SELECT assunto, pergunta
FROM categoria
JOIN faq
ON categoria.id = faq.id_categoria;
```
![image](https://github.com/LariVital/PDI-DengueNews/assets/142796669/d0cf1013-74dd-43de-89fa-1bdfd0cdf0ff)

**Listar as perguntas com as respostas do usuário e conferir se estão corretas**
```
SELECT pergunta.pergunta, opcao.opcao, opcao.e_correta
FROM interacao_usuario
JOIN opcao on interacao_usuario.id_opcao = opcao.id_opcao
JOIN pergunta ON opcao.id_pergunta = pergunta.id_pergunta;
```
![image](https://github.com/LariVital/PDI-DengueNews/assets/142796669/b5ea5ec5-eac0-47ea-9767-5dcf2764f89d)


