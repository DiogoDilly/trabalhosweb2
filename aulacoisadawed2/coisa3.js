const readline = require('readline').createInterface({
    input: process.stdin,
    output: process.stdout
});

readline.question(`Qual é seu nome: `, num1 => {
    readline.question(`Qual é seu salario: `, num2 => {
        console.log(`seu nome é ${num1} seu salario ${num2}`)

        readline.close(); 
    });
});