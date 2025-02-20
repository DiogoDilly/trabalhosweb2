const readline = require('readline').createInterface({
    input: process.stdin,
    output: process.stdout
});

readline.question(`digite a altura:`, coisa => {
    readline.question(`digite a largura:`, coisa2 => {
 let area = Number(coisa) * Number(coisa2);
let tinta = Number(area) / 2;

 console.log(`a area ${area}quantidade de tinta a ser gasta${tinta}`)
 readline.close();     
});
});