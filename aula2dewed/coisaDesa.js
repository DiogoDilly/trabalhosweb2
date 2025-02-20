const readline = require('readline').createInterface({
    input: process.stdin,
    output: process.stdout
});

readline.question('digite seu primeiro comprimento: ', coisa1 => {
    readline.question('digite seu segundo comprimento: ', coisa2 => {
        readline.question('digite seu terceiro comprimento: ', coisa3 => {
let coisado = Number(coisa2) + Number(coisa3);
let coisado2 = Number(coisa1) + Number(coisa3);
let coisado3 = Number(coisa1) + Number(coisa2);
if (coisa1 < coisado && coisa2 < coisado2 && coisa3 < coisado3){
console.log ("é um triangulo")

}else{
    console.log ("não é um triangulo >:( ")
}
readline.close(); 
});
});
});
