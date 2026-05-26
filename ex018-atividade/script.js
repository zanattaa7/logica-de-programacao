function verificar() {

    let numero = document.getElementById("numero").value;

    let mensagem = document.getElementById("mensagem");

    if (numero % 2 == 0){

        mensagem.innerHTML =
        "O número " + numero + " é par";

    } 

    else {

        mensagem.innerHTML =
        "O número " + numero + " é ímpar";

    }

}