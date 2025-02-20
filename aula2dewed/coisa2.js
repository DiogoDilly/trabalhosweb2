const readline = require('readline').createInterface({
    input: process.stdin,
    output: process.stdout
});

readline.question(`digite o ano`, ano => {
if (ano / 4){
console.log ('o ano digitado é bissexto')
} else{
console.log ('o ano digitado não é bissexto')
}
    readline.close(); 
    });