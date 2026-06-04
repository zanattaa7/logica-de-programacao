function verificar() {
    let numero1 = Number(document.getElementById("numero1").value)
    let numero2 = Number(document.getElementById("numero2").value)
    let numero3 = Number(document.getElementById("numero3").value)
    let mensagem = document.getElementById("mensagem")

    if (isNaN(numero1) || isNaN(numero2) || isNaN(numero3)) {
        alert('Por favor, informe três números válidos.')
        return
    }

    let lista = [numero1, numero2, numero3]

    let maior = lista[0]

    for (let i = 1; i < lista.length; i++) {
        if (lista[i] > maior) {
            maior = lista[i]
        }
    }

    mensagem.innerHTML = `O maior número é ${maior}`
}