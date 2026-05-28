function verificar() {

    let nascimento = document.getElementById('nascimento').value;

    let doencaSelecionada = document.querySelector('input[name="sick"]:checked');

    let peso = Number(document.getElementById('peso').value);

    let tattooSelecionada = document.querySelector('input[name="tattoo"]:checked');

    let medicineSelecionada = document.querySelector('input[name="medicine"]:checked');

    // VERIFICA SE TODOS OS CAMPOS FORAM PREENCHIDOS
    if (!nascimento || !doencaSelecionada || !tattooSelecionada || !medicineSelecionada || peso <= 0) {

        alert("Preencha todos os campos.");

        return;
    }

    console.log(`Nascimento: ${nascimento}`);
    console.log(`Doença: ${doencaSelecionada.value}`);
    console.log(`Peso: ${peso}`);
    console.log(`Tatuagem: ${tattooSelecionada.value}`);
    console.log(`Medicamento: ${medicineSelecionada.value}`);

    let dataNascimento = new Date(nascimento + "T00:00:00");

    let hoje = new Date();

    let idade = hoje.getFullYear() - dataNascimento.getFullYear();

    let mesAtual = hoje.getMonth();
    let diaAtual = hoje.getDate();

    let mesNascimento = dataNascimento.getMonth();
    let diaNascimento = dataNascimento.getDate();

    if (mesAtual < mesNascimento ||
        (mesAtual == mesNascimento && diaAtual < diaNascimento)) {
        idade--;
    }


    console.log(idade);

    let apto = true;

    if (idade >= 18) {
    }
    else {
        apto = false;
    }

    if (doencaSelecionada.value == "no") {
    }
    else {
    apto = false;
    }

    if (peso >= 50) {
    }
    else {
        apto = false;
    }

    if (tattooSelecionada.value == "no") {
    }
    else {
        apto = false;
    }

    if (medicineSelecionada.value == "no") {
    }
    else {
        apto = false;
    }

    let resultado = document.getElementById('resultado');
    if (!apto) {
        resultado.innerHTML = "Você NÃO está apto para doar sangue.";
    }
    else {
        resultado.innerHTML = "Você está APTO para doar sangue.";
    }
}
