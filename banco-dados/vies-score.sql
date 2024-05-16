CREATE VIEW points_sum AS
SELECT sum(score) AS
pontos_recebidos, COUNT(score) AS
pontos_disponiveis
FROM interacao_usuario

SELECT * from points_sum;