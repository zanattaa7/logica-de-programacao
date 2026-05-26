function verificar() {

    let numero = document.getElementById("numero").value;

    let mensagem = document.getElementById("mensagem");

    mensagem.innerHTML =
    "Sua velocidade atual é de <strong> " + numero + " Km/h<br>";

    if (numero > 80) {

        mensagem.innerHTML +=
        "Você ultrapassou o limite de velocidade. <span id='multa'> Vai receber uma multa por ser apressadinho. </span> <br>"


    } else {

        mensagem.innerHTML +=
        "Você está dentro do limite de velocidade. <strong> Boa viagem.<br>";

    }

}
let mensagem = document.getElementById ("mensagem");
mensagem.innerHTML += "<p> Use sempre cinto de segurança <p>"

