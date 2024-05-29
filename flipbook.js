// abre o flipbook como pop-up
let bookPopUp = document.getElementsByClassName("book-pop")[0];
console.log(bookPopUp)

bookPopUp.addEventListener("click", (e) => {
    if (window.location.pathname === '/index.html') {
        window.open('https://username.github.io/repository/public/flipbook.html', 'popup', 'width=1920,height=1080');
    } else {
        window.open('flipbook.html', 'popup', 'width=1920,height=1080');
    }
})