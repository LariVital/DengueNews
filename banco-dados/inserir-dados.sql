INSERT INTO atendimento (nome, email, mensagem) VALUES
	('Aline Santos', 'aline.santos@example.com', 'Sou formada em jornalismo, gostaria de enviar meu currículo para que fosse considerada para alguma oportunidade enquanto colunista. A quem devo me reportar?'),
	('Ricardo Oliveira', 'ricardo.oliveira@example.com', 'Boa tarde! Gostaria de sugerir que incluíssem informações sobre os postos de saúde mais próximos.'),
	('Patrícia Lima', 'patricia.lima@example.com', 'Eu sou professora de Ciências e gostaria de saber se possuem material educativo para escolas. Obrigada.'),
	('Lucas Silva', 'lucas.silva@example.com', 'TESTE TESTE');
    
INSERT INTO assinante (nome, email) VALUES
	('João da Silva', 'joao.silva@example.com'),
	('Maria Oliveira', 'maria.oliveira@example.com'),
	('Pedro Santos', 'pedro.santos@example.com'),
	('Ana Costa', 'ana.costa@example.com'),
	('Carlos Souza', 'carlos.souza@example.com'),
	('Fernanda Pereira', 'fernanda.pereira@example.com'),
	('Rafaela Martins', 'rafaela.martins@example.com'),
	('Rodrigo Almeida', 'rodrigo.almeida@example.com'),
	('Juliana Lima', 'juliana.lima@example.com'),
	('Gustavo Ferreira', 'gustavo.ferreira@example.com');

INSERT INTO equipe (nome, profissao, descricao, linkedin, github) VALUES
	('Caiki Luiz', 'Estudante', 'Buscando desafios na área tecnológica.', 
     'https://www.linkedin.com/in/caiki-luiz/', 
     'https://github.com/caiki14/'),
    ('Giovanna Campos', 'Cientista de dados em formação', 
     'Fotógrafa, bacharela em Direito, buscando transição de carreira para a área de TI.', 
     'https://www.linkedin.com/in/alcangio/', 
     'https://github.com/alcangio/'),
    ('Larissa Vital', 'Advogada, desenvolvedora em formação', 
     'Em uma empolgante transição de carreira para se tornar desenvolvedora.', 
     'https://www.linkedin.com/in/larissavital/', 
     'https://github.com/LariVital/'),
    ('Lorena de Castro', 'Instrutora de Informática', 
     'Bacharel em Direito e em transição de carreira para a área de TI.', 
     'https://www.linkedin.com/in/username/', 
     'https://www.github.com/username/');

INSERT INTO categoria (assunto) VALUES
	('Mosquito'),
    ('Dengue'),
    ('Vacinação (Dengue)'),
    ('Chikungunya'),
    ('Zika');

INSERT INTO faq (numero, pergunta, resposta, id_categoria) VALUES
	(1, 'Como controlar o aedes aegypti?', 'O controle mais efetivo da proliferação do mosquito é a manutenção ambiental principalmente
     nas residências, para isso é necessário tirar ao menos 10 minutos para verificar o telhado, as calhas entupidas, piscina, 
     garrafas, pneus e demais itens que possam acumular água e se tornar criadouros do transmissor. Mesmo em lugares que necessitem
     de armazenamento de água é importante não deixar os reservatórios destampados. Nesse sentido, algumas medidas são necessárias,
     tais como: Destinação correta de lixo e outros resíduos; Tampar as caixas dágua; Não deixar água acumulada;Manter os lixos 
     fechados; Utilizar areia nos vasos de plantas; Deixar garrafas e outros recipientes de cabeça para baixo; Deixar as lonas 
     esticadas; Retirar a água dos pneus.', 1),
    (12, 'O que é dengue?', 'A dengue é a arbovirose urbana mais prevalente nas Américas, principalmente no Brasil. É uma doença febril
     que tem se mostrado de grande importância em saúde pública nos últimos anos. O vírus dengue (DENV) é um arbovírus transmitido
     pela picada da fêmea do mosquito Aedes aegypti e possui quatro sorotipos diferentes (DENV-1, DENV-2, DENV-3 e DENV-4).
     O período do ano com maior transmissão da doença ocorre nos meses mais chuvosos de cada região, geralmente de novembro a maio.
     O acúmulo de água parada contribui para a proliferação do mosquito e, consequentemente, maior disseminação da doença. É 
     importante evitar água parada, todos os dias, porque os ovos do mosquito podem sobreviver por um ano no ambiente. Todas as 
     faixas etárias são igualmente suscetíveis à doença, porém as pessoas mais velhas e aquelas que possuem doenças crônicas, como
     diabetes e hipertensão arterial, têm maior risco de evoluir para casos graves e outras complicações que podem levar à morte.',
     2),
    (23, 'Por que a vacina não é para toda a população?', 'A expansão da estratégia de vacinação contra a dengue no país será 
     gradativa, à medida que novas doses da vacina sejam disponibilizadas pelo fabricante ao Ministério da Saúde. Nesse momento, 
     a estratégia inicial para a vacinação contra a dengue contemplará indivíduos na faixa etária de 10 a 14 anos, 11 meses e 29 
     dias, que residem em localidades prioritárias, com critérios definidos a partir do cenário epidemiológico da doença no país.
     O Ministério da Saúde comprou o quantitativo total de doses disponibilizadas ao Programa Nacional de Imunização (PNI), pelo 
     fabricante, neste primeiro momento. Para 2024, foram encomendadas 5,2 milhões de doses e para 2025, mais 9 milhões de doses. 
     Neste ano, ao todo, o Brasil receberá 6,5 milhões de doses da vacina, sendo 1,3 milhão de doação pelo laboratório fornecedor 
     e 5,2 milhões compradas pelo Ministério da Saúde. A distribuição das doses deverá ser escalonada ao longo do ano, conforme o 
     cronograma de entregas da empresa. Com esse quantitativo total, a expectativa é vacinar cerca de 3,2 milhões de pessoas, uma 
     vez que o esquema da vacina compreende duas doses por indivíduo.', 3),
    (40, 'O que é chikungunya?', 'É uma arbovirose transmitida pela picada do mosquito do gênero Aedes aegypti infectado. Destaca-se
     que a doença pode evoluir em três fases: Febril ou aguda: tem duração de 5 a 14 dias; Pós-aguda: tem um curso de até 3 meses; 
     Crônica: Se os sintomas persistirem por mais de 3 meses após o início da doença, considera-se instalada a fase crônica. Em mais 
     de 50% dos casos, a artralgia (dor nas articulações) torna-se crônica, podendo persistir por anos.', 4),
    (48, 'O que é zika?', 'É uma arbovirose causada pelo vírus Zika (ZIKV). Arboviroses são doenças causadas por vírus (arbovírus)
     transmitidos por meio da picada de mosquitos infectados da espécie Aedes aegypti. A maioria das infecções pelo Zika Virus são 
     assintomáticas ou representam uma doença febril autolimitada semelhante às infecções por chikungunya e dengue. Entretanto, a 
     associação da infecção viral com complicações neurológicas como microcefalia congênita e síndrome de Guillain-Barré (SGB) foi 
     demonstrada por estudos realizados durante surtos da doença no Brasil e na Polinésia Francesa. IMPORTANTE: Todos os sexos e 
     faixas etárias são igualmente suscetíveis ao vírus Zika, porém mulheres grávidas e pessoas acima de 60 anos têm maiores riscos 
     de desenvolver complicações da doença. Esses riscos podem aumentar quando a pessoa tem alguma comorbidade.', 5);
       

INSERT INTO noticia (data, titulo, resumo, url) VALUES
	('2015-12-29 09:27:00','Veja como combater o Aedes aegypti','O Aedes aegypti transmite a dengue, chikungunya e zika vírus. Com a temporada de chuvas se aproximando é crucial estar preparado para combater a Dengue. Descubra agora as medidas preventivas essenciais para proteger você e sua família contra esta doença transmitida por mosquitos. De dicas simples a estratégias eficazes, saiba como eliminar criadouros, usar repelentes e manter-se informado sobre os sintomas.', 'https://g1.globo.com/bemestar/noticia/2015/12/veja-como-combater-o-aedes-aegypti-e-entenda-vacina-contra-dengue.html'),
    ('2024-03-20 09:27:00', 'Alerta para o mundo: como dengue no Brasil virou preocupação internacional', 'O número de casos de dengue em 2024 no país é recorde na série histórica oficial — e o total registrado (casos prováveis e confirmados) se aproxima dos milhões em meados de março, segundo o Ministério da Saúde. As reportagens e veículos estrangeiros discutem, principalmente, o que o avanço recorde de casos dengue no Brasil e em outros lugares significa para a saúde global nos próximos anos.', 'https://www.bbc.com/portuguese/articles/c7201vvv7lno'),
	('2024-03-20 09:27:00', 'Tecnologias inovadoras para combater a dengue', 'Drones, camisetas repelentes... diante de um vírus perigoso e de um mosquito altamente adaptado ao nosso meio, surgem formas modernas de prevenção.', 'https://www.bbc.com/portuguese/articles/c7201vvv7lno'),
	('2024-03-15 10:44:00','Em menos de três meses, Brasil supera casos de dengue de 2023', 'Antes de fechar os três primeiros meses de 2024, o número de casos de dengue no Brasil ultrapassou os registros de todo o ano de 2023, segundo atualização do painel de arboviroses do Ministério da Saúde.', 'https://veja.abril.com.br/saude/em-menos-de-tres-meses-brasil-supera-casos-de-dengue-de-2023/'),
	('2024-03-21 09:27:00','Vacina contra dengue é solução de longo prazo', 'A vacinação contra a dengue é uma estratégia essencial para o controle a longo prazo dessa doença que afeta milhares de pessoas todos os anos. Através da imunização é possível reduzir significativamente a incidência da dengue, protegenda população e evitando surtos e epidemias.','https://www.estadao.com.br/saude/vacina-contra-a-dengue-e-solucao-de-longo-prazo/'),
	('2024-04-11 21:05:00','Avanço de casos de dengue aumenta significativamente o registro de doenças raras provocadas pela infecção','Em pouco mais de três meses, o país registrou mais de 3 milhões de casos. Já é o pior ano da série histórica, que começou em 2000.','https://g1.globo.com/jornal-nacional/noticia/2024/04/11/avanco-de-casos-de-dengue-aumenta-significativamente-o-registro-de-doencas-raras-provocadas-pela-infeccao.ghtml'),
	('2024-04-22 12:01:00', 'Minas Gerais bate recorde de mortes por dengue', 'Estado já confirmou 288 óbitos em 2024. Último recorde foi em 2016, quando 281 mortes foram registradas.','https://g1.globo.com/mg/minas-gerais/noticia/2024/04/22/minas-gerais-bate-recorde-de-mortes-por-dengue.ghtml');

INSERT INTO mapa (sigla, estado, url) VALUES
	('AC', 'Acre', 'https://info.dengue.mat.br/alerta/AC/dengue'),
	('AL', 'Alagoas', 'https://info.dengue.mat.br/alerta/AL/dengue'),
	('AP', 'Amapá', 'https://info.dengue.mat.br/alerta/AP/dengue'),
	('AM', 'Amazonas', 'https://info.dengue.mat.br/alerta/AM/dengue'),
	('BA', 'Bahia', 'https://info.dengue.mat.br/alerta/BA/dengue'),
	('CE', 'Ceará', 'https://info.dengue.mat.br/alerta/CE/dengue'),
	('DF', 'Distrito Federal','https://info.dengue.mat.br/alerta/DT/dengue'),
	('ES', 'Espírito Santo', 'https://info.dengue.mat.br/alerta/ES/dengue'),
	('GO', 'Goiás', 'https://info.dengue.mat.br/alerta/GO/dengue'),
	('MA', 'Maranhão', 'https://info.dengue.mat.br/alerta/MA/dengue'),
	('MT', 'Mato Grosso', 'https://info.dengue.mat.br/alerta/MT/dengue'),
	('MS', 'Mato Grosso do Sul', 'https://info.dengue.mat.br/alerta/MS/dengue'),
	('MG', 'Minas Gerais', 'https://info.dengue.mat.br/alerta/MG/dengue'),
	('PA', 'Pará', 'https://info.dengue.mat.br/alerta/PA/dengue'),
	('PB', 'Paraíba', 'https://info.dengue.mat.br/alerta/PB/dengue'),
	('PR', 'Paraná', 'https://info.dengue.mat.br/alerta/PR/dengue'),
	('PE', 'Pernambuco', 'https://info.dengue.mat.br/alerta/PE/dengue'),
	('PI', 'Piauí', 'https://info.dengue.mat.br/alerta/PI/dengue'),
	('RJ', 'Rio de Janeiro', 'https://info.dengue.mat.br/alerta/RJ/dengue'),
	('RN', 'Rio Grande do Norte', 'https://info.dengue.mat.br/alerta/RN/dengue'),
	('RS', 'Rio Grande do Sul', 'https://info.dengue.mat.br/alerta/RS/dengue'),
	('RO', 'Rondônia', 'https://info.dengue.mat.br/alerta/RO/dengue'),
	('RR', 'Roraima', 'https://info.dengue.mat.br/alerta/RR/dengue'),
	('SC', 'Santa Catarina', 'https://info.dengue.mat.br/alerta/SC/dengue'),
	('SP', 'São Paulo', 'https://info.dengue.mat.br/alerta/SP/dengue'),
	('SE', 'Sergipe', 'https://info.dengue.mat.br/alerta/SE/dengue'),
	('TO', 'Tocantins', 'https://info.dengue.mat.br/alerta/TO/dengue');
    
INSERT INTO pergunta (id_pergunta, pergunta) VALUES
	('q1','Qual é o agente transmissor da dengue?'),
    ('q2','Qual é o principal sintoma da dengue?'),
    ('q3','Qual é a melhor maneira de prevenir a dengue?'),
    ('q4','Qual é o período de incubação da dengue?'),
    ('q5','Qual é o nome do exame usado para diagnosticar a dengue?'),
    ('q6','Qual é a complicação mais grave da dengue?'),
    ('q7','Qual é o tratamento recomendado para a dengue?'),
    ('q8','Quais são os quatro tipos de vírus da dengue?'),
    ('q9','Qual é o nome do processo de transmissão do vírus da dengue de uma pessoa para outra através do mosquito?'),
    ('q10','Qual é o período de vida aproximado de um mosquito Aedes aegypti?');
  
INSERT INTO opcao (id_pergunta, id_opcao, opcao, e_correta) VALUES
  	('q1', 'q1a', 'A) Aedes aegypti', TRUE),
    ('q1', 'q1b', 'B) Culex quinquefasciatus', FALSE),
    ('q1', 'q1c', 'C) Anopheles gambiae', FALSE),
    ('q1', 'q1d', 'D) Ixodes ricinus', FALSE),
  	('q2', 'q2a', 'A) Dor de cabeça', FALSE),
    ('q2', 'q2b', 'B) Febre alta', TRUE),
    ('q2', 'q2c', 'C) Erupção cutânea', FALSE),
    ('q2', 'q2d', 'D) Tosse persistente', FALSE),
  	('q3', 'q3a', 'A) Beber água de coco', FALSE),
    ('q3', 'q3b', 'B) Usar repelente', TRUE),
    ('q3', 'q3c', 'C) Tomar banho de sol', FALSE),
    ('q3', 'q3d', 'D) Consumir vitamina C', FALSE),
  	('q4', 'q4a', 'A) 24 horas', FALSE),
    ('q4', 'q4b', 'B) 7 dias', FALSE),
    ('q4', 'q4c', 'C) 14 dias', TRUE),
    ('q4', 'q4d', 'D) 21 dias', FALSE),
    ('q5', 'q5a', 'A) Hemograma completo', FALSE),
    ('q5', 'q5b', 'B) Tomografia computadorizada', FALSE),
    ('q5', 'q5c', 'C) Teste de gravidez', FALSE),
    ('q5', 'q5d', 'D) ELISA', TRUE),
   	('q6', 'q6a', 'A) Diarreia', FALSE),
    ('q6', 'q6b', 'B) Insuficiência renal', TRUE),
    ('q6', 'q6c', 'C) Dor de garganta', FALSE),
    ('q6', 'q6d', 'D) Dermatite', FALSE),
    ('q7', 'q7a', 'A) Antibióticos', FALSE),
    ('q7', 'q7b', 'B) Anti-histamínicos', FALSE),
    ('q7', 'q7c', 'C) Hidratação e Repouso', TRUE),
    ('q7', 'q7d', 'D) Dermatite', FALSE),  
    ('q8', 'q8a', 'A) DENV-1, DENV-2, DENV-3, DENV-4', TRUE),
    ('q8', 'q8b', 'B) DENV-A, DENV-B, DENV-C, DENV-D', FALSE),
    ('q8', 'q8c', 'C) DENV-alpha, DENV-beta, DENV-gamma, DENV-delta', FALSE),
    ('q8', 'q8d', 'D) DENV-I, DENV-II, DENV-III, DENV-IV', FALSE), 
    ('q9', 'q9a', 'A) Transmissão vertical', TRUE),
    ('q9', 'q9b', 'B) Transmissão sexual', FALSE),
    ('q9', 'q9c', 'C) Transmissão vetorial', FALSE),
    ('q9', 'q9d', 'D) Transmissão oral', FALSE),
    ('q10', 'q10a', 'A) 1 semana', FALSE),
    ('q10', 'q10b', 'B) 1 mês', FALSE),
    ('q10', 'q10c', 'C) 3 semanas', FALSE),
    ('q10', 'q10d', 'D) 3 meses', TRUE);     

INSERT INTO interacao_usuario (id_pergunta, id_opcao, score) VALUES
	('q1','q1a', 1),
    ('q2','q2b', 1),
    ('q3','q3b', 1),
    ('q4','q4d', 0),
    ('q5','q5d', 1),
    ('q6','q6b', 1),
    ('q7','q7c', 1),
    ('q8','q8a', 1),
    ('q9','q9c', 0),
    ('q10','q10b', 0);
