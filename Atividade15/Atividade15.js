function validarCampos() {

    var form = document.querySelector(".formAtividade15");
    var nome = form.querySelector(".campo_nome").value;
    var email = form.querySelector(".campo_E-mail").value;
    var comentario = form.querySelector(".campo_comentario").value;
    var visita = form.querySelectorAll(".campo_visita, .campo_visita_nao");
    var radioSelecionado = false;
    

    if (nome.length < 10) { //Nome não pode ter menos que 10 caracteres
        alert("Por favor, o nome deve conter pelo menos 10 caracteres.");
        return false;
    }

    if (email.indexOf('@') === -1 || email.indexOf('.') === -1) { //Email deve teroscaracteres @ e . (Validação)
        alert("Este e-mail não é válido, por favor preencha de forma correta!");
        return false;
    }

    if (comentario.length < 20) { //Comentário deve ter no mínimo 20 caracteres.
        alert("Digite algo a mais, o comentário deve ter pelo menos 20 caracteres.");
        return false;
    }


    visita.forEach(function(visita) {      //verificação do radio button
        if (visita.checked) {
            radioSelecionado = true;
            if (visita.value === "sim") {
                    alert("Volte sempre a esta página!");
            } else {
                    alert("Que bom que você voltou a visitar esta página!");
            }
        }
    });
    
    if (!radioSelecionado) {
        alert("Por favor, selecione uma opção na pesquisa.");
        return false;
    }
}

