//nome
let usernameInput = document.getElementById("username");
let usernameLabel = document.querySelector('label[for="username"]');
let usernameSpans = document.getElementById("spans");

//email
let emailLabel = document.querySelector('label[for="email"]');
let emailInput = document.getElementById("email");
let emailSpans = document.getElementById("spans");


// Campo obrigatório para o User name
usernameInput.addEventListener("focus", function(){
    usernameLabel.classList.add("required-popup");
})
//----------Ocultar popup de campo obrigatório----------//
usernameInput.addEventListener("blur", function(){
    usernameLabel.classList.remove("required-popup");
})
//----------Validar valor do input Username----------//
usernameInput.addEventListener("input", function(e){
let valor = e.target.value;
// console.log(valor);
// Adicionar condição
if(valor.length < 3){
    usernameInput.classList.add("error");
    usernameSpans.classList.add("visible");
    usernameSpans.innerText = "O nome de usuário deve ter no mínimo 3 caracteres";
    usernameInput.classList.remove("correct");
}else{
    usernameInput.classList.remove("error");
    usernameInput.classList.add("correct");
    usernameSpans.classList.remove("visible");
}
})

// Campo obrigatório para o Email
emailInput.addEventListener("focus", () => {
    emailLabel.classList.add("required-popup");
})
//----------Ocultar popup de campo obrigatório----------//
emailInput.addEventListener("blur", () => {
    emailLabel.classList.remove("required-popup");
})
//----------Validar valor do input----------//
emailInput.addEventListener("change", (e) =>{
let valor = e.target.value;
// condição
if(valor.includes("@") && valor.includes(".com")){
    emailInput.classList.add("correct");
    emailSpans.classList.remove("visible");
    emailInput.classList.remove("correct");
}else{
    emailInput.classList.add("error");
    emailSpans.classList.add("visible");
    emailSpans.innerText = "Insira um e-mail válido";
}
})