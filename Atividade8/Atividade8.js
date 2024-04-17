function pesquisa() {
    var qtdPessoas = 45;
    var idades = [];
    var sexos = [];
    var opinioes = [];
    var h = 0;
    var m = 0;
    var pessimo = 0;
    var regular = 0;
    var bom = 0;
    var otimo = 0;
    var mediaIdade;
    var idadeMVelha;
    var idadeMNova;
    var porcentBom;
    var porcentOtimo;

    for (var i = 0; i < qtdPessoas; i++) {
        idades[i] = parseInt(prompt("Digite a idade " + (i + 1) + ":"));
        
        sexos[i] = prompt("Digite o sexo (M/F) " + (i + 1) + ":").toUpperCase();
        if (sexos[i] === "M") {
            h++;
        } else if (sexos[i] === "F") {
            m++;
        } else {
            alert("Sexo inválido. Selecione M para masculino ou F para feminino");
            i--;
            continue;
        }

        opinioes[i] = parseInt(prompt("Digite a opinião da pessoa " + (i + 1) + ":" + "\n" + "1 - Péssimo" + "\n" + "2 - Regular" + "\n" + "3 - Bom" + "\n" + "4 - Ótimo"));
        if (opinioes[i] === 1) {
            pessimo++;
        } else if (opinioes[i] === 2) {
            regular++;
        } else if (opinioes[i] === 3) {
            bom++;
        } else if (opinioes[i] === 4) {
            otimo++;
        }
    }

    var soma = 0;
    for (var j = 0; j < idades.length; j++) {
        soma += idades[j];
    }
    mediaIdade = soma / idades.length;
    idadeMVelha = Math.max(idades);
    idadeMNova = Math.min(idades);
    porcentBom = (bom / qtdPessoas) * 100;
    porcentOtimo = (otimo / qtdPessoas) * 100;

    alert("Média de idade das pessoas: " + mediaIdade);
    alert("Idade da pessoa mais velha: " + idadeMVelha);
    alert("Idade da pessoa mais nova: " + idadeMNova);
    alert("Quantidade de pessoas que responderam péssimo: " + pessimo);
    alert("Porcentagem de pessoas que responderam bom: " + porcentBom + "%");
    alert("Porcentagem de pessoas que responderam ótimo: " + porcentOtimo + "%");
    alert("Número de mulheres que responderam a pesquisa: " + m);
    alert("Número de h que responderam a pesquisa: " + h);
}

pesquisa();