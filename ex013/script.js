function somar (){
    let num1 = Number(document.getElementById('Anum1').value);
    let num2 = Number( document.getElementById('Anum2').value);
    let soma = num1 + num2;
    let resultado = document.getElementById ('aResultado');
    resultado.innerHTML = soma;
}
function subtrair (){
    let num1 = Number (document.getElementById('Snum1').value);
    let num2 = Number (document.getElementById('Snum2').value);
    let subtrair = num1 - num2;
    let resultado = document.getElementById ('sResultado');
    resultado.innerHTML = subtrair;
}
