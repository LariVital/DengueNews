// abre a página newsletter como pop-up
if (window.location.pathname === '/index.html') {
    function openPopup() {
        window.open("./public/newsletter.html", "popup", "width=800,height=400");
    }
} else {
    function openPopup() {
        window.open("./newsletter.html", "popup", "width=800,height=400");
    }
}
