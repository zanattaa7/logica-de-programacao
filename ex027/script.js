var nomes = []
var resultado = document.getElementById('resultado')
function cadastrar(){
    let nome = document.getElementById('nome').value
    nomes.push(nome)
    resultado.innerHTML += `<p>${nome} foi cadastrado no sistema.<p>`
    resultado.innerHTML += `<p>Essa é a lista de cadastrador 
    ${nomes.toString()}<p>`
    

}