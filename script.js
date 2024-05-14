// NEWSLETTER
// abre a página newsletter como pop-up
const newsPopUp = document.getElementById("button-aside-home");
const newsPopUpFooter = document.querySelector(".news-pop");
const modalNews = document.querySelector(".body-news")
const closeModalNews = document.querySelector(".body-news .close")

newsPopUp.addEventListener("click", () => {
    modalNews.showModal()
})

newsPopUpFooter.addEventListener("click", () => {
    modalNews.showModal()
})

closeModalNews.addEventListener("click", () => {
    modalNews.close()
})

// // SOBRE A DENGUE
// // abre o flipbook como pop-up
// let bookPopUp = document.getElementsByClassName("book-pop")[0];
// console.log(bookPopUp)

// bookPopUp.addEventListener("click", (e) => {
//     if (window.location.pathname === '/index.html') {
//         window.open('./public/flipbook.html', 'popup', 'width=1920,height=1080');
//     } else {
//         window.open('./flipbook.html', 'popup', 'width=1920,height=1080');
//     }
// })

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


//Carousel página inicial
var radio = document.querySelector('.manual-btn')
var cont = 1
document.getElementById('radio1').checked = true
setInterval(() => {
    proximaImg()
}, 5000)
function proximaImg(){
    cont++
    if(cont > 3){
        cont = 1
    }
document.getElementById('radio'+cont).checked = true    
}
//Modal Página inicial - ANTIGO MODAL FALE CONOSCO 
// const openModalBtn = document.getElementById('openModalHome');
// const modal = document.getElementById('modalFaleConosco');
// const closeModalBtn = document.getElementsByClassName('close')[0];

// openModalHome.addEventListener('click', () => {
//     modal.style.display = 'block';
// });

// closeModalBtn.addEventListener('click', () => {
//     modal.style.display = 'none';
// });

// window.addEventListener('click', (event) => {
//     if (event.target === modal) {
//         modal.style.display = 'none';
//     }
// });

