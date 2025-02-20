const readline = require('readline').createInterface({
    input: process.stdin,
    output: process.stdout
});

readline.question(`os seus dias trabalhados:`, coisa => {
let horas = Number(coisa) * 8;
let salario = Number(horas) * 25.;

 console.log(`seu salario é ${salario}`)
 readline.close();    
});
