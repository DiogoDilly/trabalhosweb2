const readline = require('readline').createInterface({
    input: process.stdin,
    output: process.stdout
});

readline.question(`digite um numero npara ver seu sucessor e antecessor`, nota1 => {
       let coisado = Number(nota1) + 1;
       let coisando = Number(nota1) - 1;
    
    console.log(`o sucessor dele é ${coisado} e o antecessor dele é ${coisando}`)
    readline.close();    
});