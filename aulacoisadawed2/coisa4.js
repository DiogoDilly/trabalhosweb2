const readline = require('readline').createInterface({
    input: process.stdin,
    output: process.stdout
});

readline.question(`Qual o primeiro numero`, coisa1 => {
    readline.question(`Qual o segundo numero`, coisa2 => {
        let res = Number(coisa1)+Number(coisa2);
        console.log(`a soma entre ${coisa1} e ${coisa2} é = ${res}`)
        readline.close(); 
    });
});