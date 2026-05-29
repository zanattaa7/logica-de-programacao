function verificar(){
    let numero = Number(document.getElementById("numero").value);
    let mensagem = document.getElementById("mensagem");
    mensagem.innerHTML = ""

    mensagem.innerHTML = `<strong>Tabuada de ${numero}</strong><br><br>`

    for (let contador = 1; contador <= 10; contador++) {

    mensagem.innerHTML += `${numero} x ${contador} = ${numero * contador} <br>`;
    }
}
