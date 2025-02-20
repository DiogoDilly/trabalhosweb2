const readline = require('readline').createInterface({
    input: process.stdin,
    output: process.stdout
});

readline.question(`digite sua idade`, idade => {
if (idade < 18){
let coisa = 18 - Number(idade);
console.log (`faltam ${coisa} para o alistamento`)

}else if(idade > 18){
let coisa = Number(idade) - 18
console.log(`ja passou ${coisa} do alistamento`)

}

    readline.close(); 
    });