// NEWSLETTER
// abre a página newsletter como pop-up
// function openPopup() {
//     if (window.location.pathname === '/index.html') {
//         window.open('./public/newsletter.html', 'popup', 'width=800,height=400');
//     } else if (window.location.pathname !== '/index.html') {
//         window.open('./newsletter.html', 'popup', 'width=800,height=400');
//     }
// }

let newsPopUp = document.getElementsByClassName("news-pop")[0];
console.log(newsPopUp)

newsPopUp.addEventListener("click", () => {
    if (window.location.pathname === '/index.html') {
        window.open('./public/newsletter.html', 'popup', 'width=800,height=400');
    } else {
        window.open('./newsletter.html', 'popup', 'width=800,height=400');
    }
})

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

