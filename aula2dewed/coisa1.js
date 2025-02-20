const readline = require('readline').createInterface({
    input: process.stdin,
    output: process.stdout
});

readline.question(`digite sua velocidade`, velo => {
if (velo > 80){
let velomulta = Number(velo) - 80;
let multa = Number(velomulta) * 5;
console.log(`você passou da velocidade permitida sua multa e de ${multa}`)
} else{
    console.log ("menos de 80km continue asssim")
}
    readline.close(); 
    });