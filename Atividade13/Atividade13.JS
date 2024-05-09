function mDown(obj) {
    document.getElementById('status').innerHTML = "Janela quebrada";
    obj.src = "janelaquebra.png"
}

function mUp(obj) {
    document.getElementById('status').innerHTML = "Janela quebrada";
    obj.src = "janelaquebra.png"
}

function mMove(obj) {
    document.getElementById('status').innerHTML = "Janela Aberta";
    obj.src = "janelaaberta.png"
}

function mOut(obj) {
    document.getElementById('status').innerHTML = "Janela Fechada";
    obj.src = "janelafechada.png"
}
