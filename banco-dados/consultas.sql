--classificar perguntas frequentes por assunto
SELECT assunto, pergunta
FROM categoria
JOIN faq
ON categoria.id = faq.id_categoria;

--
--listas as opções de respostas escolhidas pelo usuário
SELECT pergunta.pergunta, opcao.opcao, opcao.e_correta
FROM interacao_usuario
JOIN opcao on interacao_usuario.id_opcao = opcao.id_opcao
JOIN pergunta ON opcao.id_pergunta = pergunta.id_pergunta;