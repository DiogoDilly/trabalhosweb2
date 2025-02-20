const readline = require("readline").createInterface({
  input: process.stdin,
  output: process.stdout,
});

readline.question(`digite seu salario:`, (coisa) => {
  let coisado = Number(coisa) * 1.15;
  console.log(`seu salario com aumento é ${coisado}`);
  readline.close(); 
});
