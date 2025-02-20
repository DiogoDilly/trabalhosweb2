const readline = require('readline').createInterface({
    input: process.stdin,
    output: process.stdout
});

readline.question(`digite seu dinehiro:`, coisa => {
        let dolar = Number(coisa) * 0.17;
        console.log(`você pode comprar ${dolar} dolares`)
        readline.close(); 
    });