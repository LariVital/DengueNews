// NOTICIAS
// Função para calcular o tempo decorrido desde a publicação da notícia
function calcularTempoDecorrido(dataPublicacao) {
    const agora = new Date();
    const publicacao = new Date(dataPublicacao);
    const diferenca = agora - publicacao;

    // Converter a diferença de milissegundos para minutos
    const minutos = Math.floor(diferenca / (1000 * 60));

    if (minutos < 60) {
        return minutos + " minutos";
    } else if (minutos < 1440) {
        return Math.floor(minutos / 60) + " horas";
    } else {
        return Math.floor(minutos / 1440) + " dias";
    }
}

// Atualizar o texto de cada elemento .tempo-publicacao com o tempo decorrido desde a publicação
document.querySelectorAll('.noticia').forEach(noticia => {
    const dataPublicacao = noticia.getAttribute('data-publicacao');
    const tempoDecorrido = calcularTempoDecorrido(dataPublicacao);
    noticia.querySelector('.tempo-publicacao span').textContent = tempoDecorrido;
});