alert ('Seja bem-vindo ao meu site')

const botao = document.getElementById("calcular");
const resultado = document.getElementById("resultado");

botao.onclick = function () {

    let numero = Number(prompt("Digite um número:"));

    let dobro = numero * 2;
    let metade = numero / 2;

    resultado.textContent =
        "Dobro: " + dobro + " | Metade: " + metade;
};