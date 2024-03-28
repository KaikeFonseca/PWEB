n1 = prompt("Informe o primeiro número: ");
n2 = prompt("Informe o segundo número: ");

soma = parseFloat(n1) + parseFloat(n2);
sub = parseFloat(n1) - parseFloat(n2);
prod = parseFloat(n1) * parseFloat(n2);
div = parseFloat(n1) / parseFloat(n2);
resto = parseFloat(n1) % parseFloat(n2);

alert(`A soma dos números é: ${soma} \n 
    A subtração dos números é: ${sub} \n
    O produto dos números é: ${prod} \n
    A divisão do primeiro pelo segundo é: ${div.toFixed(2)}\n
    O resto da divisão é: ${resto}`);