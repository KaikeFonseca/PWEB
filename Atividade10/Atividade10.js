//------------Receber 3 numeros e retonar o maior------------
/*var n1 = prompt("Informe o número 1");
var n2 = prompt("Informe o número 2");
var n3 = prompt("Informe o número 3");

function maiorNum(n1,n2,n3){
    var maiorNumero = (n3<n1>n2)?n1:(n1<n2>n3)?n2:n3;
    return alert("O maior número é: " + maiorNumero);
}

maiorNum(n1,n2,n3);*/ 

//------------Receber 3 numeros e retonar em ordem crescente------------
/*var numbers = [];
for(i = 0; i < 3; i++){
    numbers[i] = prompt("Informe o número " + (i+1));
}

function ordernarNum(matriz){
    matriz.sort(function(a,b){return a-b}); //ordenando a matriz

    for(j = 0; j < 3; j++){
        alert("O " + (j+1) + "º número em ordem crescente é: " + matriz[j] );
    } //alert da matriz
}

ordernarNum(numbers);*/

//------------Receber uma string e retornar se é palíndromo ou não-----------
/*var stringCliente = prompt("Informe uma String: ");

function isPalindromo(palavra){
    const palavraFormatada = palavra.toUpperCase().replace(/[\W_]/g ,'');
    const  invertidade = palavraFormatada.split('').reverse().join('');
    if(palavraFormatada === invertidade){
        return alert("É palindromo! \n" + palavraFormatada + "=" + invertidade);
    } else{
        return alert("Não é palindromo! \n" + palavraFormatada + "=" + invertidade);
    }
}

isPalindromo(stringCliente);*/

//------------Receber 3 valores, falar se é triangulo e qual tipo de trianqulo-----------
var varNumberA = parseInt(prompt("Digite o 1º valor: "));
var varNumberB = parseInt(prompt("Digite o 2º valor: "));
var varNumberC = parseInt(prompt("Digite o 3º valor: "));


function triangulo(varNumberA,varNumberB,varNumberC){
    if(Math.abs(varNumberB - varNumberC) < varNumberA && varNumberA < (varNumberB + varNumberC) && Math.abs(varNumberA - varNumberC) < varNumberB && varNumberB < (varNumberA + varNumberC) && Math.abs(varNumberA - varNumberB) < varNumberC && varNumberC < (varNumberA + varNumberB)){
        if(varNumberA == varNumberB && varNumberB == varNumberC){
            return ("é um triangulo equilatero");
        }else if(varNumberA != varNumberB && varNumberB != varNumberC && varNumberA != varNumberC){
            return ("é um triangulo escaleno");
        }else{
            return ("é um trinagulo isoceles");
        }
    } else{
            return ("Não é triangulo")
        }


}

    alert("Os números digitados são: " + triangulo(varNumberA, varNumberB, varNumberC));