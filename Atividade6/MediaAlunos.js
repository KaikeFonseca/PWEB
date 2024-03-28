
var nomeAluno = prompt("Qual é o seu nome?"); //solicitando nome do aluno e segurando o nome

var nota1 = prompt(`Qual a nota 1 do ${nomeAluno} ?`)
var nota2 = prompt(`Qual a nota 2 do ${nomeAluno} ?`)
var nota3 = prompt(`Qual a nota 3 do ${nomeAluno} ?`)

media = ((parseFloat(nota1) + parseFloat(nota2) + parseFloat(nota3))/3).toFixed(2);
alert(media)

