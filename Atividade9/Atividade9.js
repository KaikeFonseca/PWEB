var altura = prompt("Informe a altura em metros: ");
var peso = prompt("Informe o peso em kg: ");
peso = parseFloat(peso);
altura = parseFloat(altura);

function imc(a,p){
    var imc = parseFloat(p/Math.pow(a,2)).toFixed(2);
    

    switch(true){
        case imc < 18.5:
            alert("Magreza");
            break;

        case imc >= 18.5 && imc < 25:
            alert("Normal");
            break;

        case imc >= 25 && imc < 30:
            alert("Sobrepeso");
            break;

        case imc >= 30 && imc < 40:
            alert("Obesidade");
            break;
        
        default:
            alert("Obesidade grave");
    };

    alert("Seu imc é: " + imc)
}

imc(altura,peso);