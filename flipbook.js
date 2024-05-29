// abre o flipbook como pop-up
// let bookPopUp = document.getElementsByClassName("book-pop")[0];
// console.log(bookPopUp)

// bookPopUp.addEventListener("click", (e) => {
//     if (window.location.pathname === 'index.html') {
//         window.open('./public/flipbook.html', 'popup', 'width=1920,height=1080');
//     } else {
//         window.open('./flipbook.html', 'popup', 'width=1920,height=1080');
//     }
// })
// document.addEventListener('DOMContentLoaded', () => {
//     let bookPopUp = document.getElementsByClassName("pop-book")[0];
//     console.log(bookPopUp);

//     bookPopUp.addEventListener("click", (e) => {
//         e.preventDefault(); // Previne o comportamento padrão do link
//         if (window.location.pathname === '/index.html' || window.location.pathname === '/' || window.location.pathname.endsWith('/index.html')) {
//             window.open('https://larivital.github.io/DengueNews/public/flipbook.html', 'popup', 'width=1920,height=1080');
//         } else {
//             window.open('public/flipbook.html', 'popup', 'width=1920,height=1080');
//         }
//     });
// });

document.addEventListener('DOMContentLoaded', () => {
    let bookPopUp = document.getElementsByClassName("pop-book")[0];
    console.log(bookPopUp);

    bookPopUp.addEventListener("click", (e) => {
        e.preventDefault(); // Previne o comportamento padrão do link
        window.open('public/flipbook.html', 'popup', 'width=1920,height=1080');
    });
});

document.addEventListener('DOMContentLoaded', () => {
    let bookPopUp = document.getElementsByClassName("book-pop")[0];
    console.log(bookPopUp);

    bookPopUp.addEventListener("click", (e) => {
        e.preventDefault(); // Previne o comportamento padrão do link
        window.open('flipbook.html', 'popup', 'width=1920,height=1080');
    });
});