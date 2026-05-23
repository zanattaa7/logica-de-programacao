let contador = 0;

const Clique = document.getElementById("Clique");
const Zerar = document.getElementById("Zerar");
const cliques = document.getElementById("cliques");

 Clique.onclick = function () {
    contador++;
    cliques.textContent = contador;
};

 Zerar.onclick = function () {
    contador = 0;
    cliques.textContent = contador;
};