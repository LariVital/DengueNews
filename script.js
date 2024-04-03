// abre a página newsletter como pop-up
function openPopup() {
    if (window.location.pathname === '/index.html') {
        window.open('./public/newsletter.html', 'popup', 'width=800,height=400');
    } else if (window.location.pathname !== '/index.html') {
        window.open('./newsletter.html', 'popup', 'width=800,height=400');
    }
}
