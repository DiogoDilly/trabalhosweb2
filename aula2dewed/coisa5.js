const readline = require('readline').createInterface({
    input: process.stdin,
    output: process.stdout
});

readline.question('digite quantos quilometros você deseja viajar: ', coisa => {
if (coisa <= 200){
coisado = Number(coisa) * 0.50;
console.log(`sua passagem deu ${coisado}`)


}else if(coisa > 200) {
coisado = Number(coisa) * 0.45;
console.log (`sua passagem deu ${coisado}`)    

}
readline.close(); 
    });