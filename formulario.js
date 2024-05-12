//Validação formulário Fale conosco 
const formHome = document.getElementById('formHome');
console.log(formHome);
const nameInput = document.querySelector("#campoName");
console.log(campoName); 
const emailInput = document.querySelector("#email");
console.log(email);
const spanInput = document.querySelectorAll("spans");
console.log(spans);


formHome.addEventListener("submit", (event) => {
    event.preventDefault();
    //Verificar se o nome está vazio
    if (nameInput.value === "") {
        alert("Por favor, preencha o seu nome");
        return;
    }
    //Verificar se o e-mail está preenchido e se é válido
    if(emailInput.value === "" || !isEmailValid(emailInput.value) ){
        alert("Por favor, preencha o seu email");
        return;
    }

    //Se todos os campos estiverem corretamente preenchidos, envie o form
    formHome.submit();
});

// Função que válida e-mail
function isEmailValid(email){
    const emailRegex = new RegExp(
        /^[a-zA-Z0-9._-]+@[a-zA-Z0-9._-]+\.[a-zA-Z]{2,}$/
    );
    if(emailRegex.test(email)) {
        return true
    }
    return false;
}
nameInput.addEventListener("change", (e)=>{
    let valor = e.target.value
    if(valor.length < 3){
      spanInput.innerText = "Seu "
    }
})







// const required = document.querySelectorAll('.required');
// console.log(required);
// const spans = document.querySelectorAll('.span-required');
// console.log(span-required)
// const emailRegex = /^[a-z0-9.]+@[a-z0-9]+\.[a-z]+\.([a-z]+)?$/i;

// function nameValidate(){
//     if(campos[0].value.length < 3){

//     } else {
        
//     }
// }
 