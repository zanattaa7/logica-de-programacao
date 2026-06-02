console.log (`LOOP COM WHILE`)
/* let senha = '';
while (senha !=='12345'){
    senha = prompt (`Digite sua senha: `)
} */


console.log(`LOOP COM DO WHILE`)
/* let i = 7;
do {
    console.log(`Passo ${i}`)
    i++;
} while (i<=5) */


let opc;

do {
     opc = prompt (`1 - Ver saldo \n
                    2 - Fazer depósito \n
                    3 - Sair`);
    console.log(`Você escolheu a opção ${opc}`) 

}while (opc !== "3")

console.log(`Programa Encerrado`)