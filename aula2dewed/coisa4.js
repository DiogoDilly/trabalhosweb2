const readline = require('readline').createInterface({
    input: process.stdin,
    output: process.stdout
});

readline.question(`você é feminino ou masculino: `, genero => {
    readline.question(`qual é seu nome: `, nome => {
        readline.question(`qual é o preço do produto: `, compra => {
            if (genero == "feminino"){
                let coisa = Number(compra) * 0.13;
                let preco = Number(compra) - coisa;
                console.log(`o valor da compra foi de ${preco}`);
                 
                
                
                } else if (genero == "masculino"){
                    let coisa = Number(compra) * 0.05;
                    let preco = Number(compra) - coisa;
                    console.log(`ola ${nome}o valor da compra foi de ${preco}`)
                
                }        
    });
});  
readline.close();  
});