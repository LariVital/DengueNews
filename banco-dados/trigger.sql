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