const readline = require('readline').createInterface({
    input: process.stdin,
    output: process.stdout
});

readline.question(`digite a sua nota do primeiro trimestre`, nota1 => {
    readline.question(`digite sua nota do segundo trimestre`, nota2 => {
        let coisa = Number(nota1)+Number(nota2);
        let coisado = Number(coisa) / 2;
        console.log(`a media é ${coisado}`)
        readline.close(); 
    });
});