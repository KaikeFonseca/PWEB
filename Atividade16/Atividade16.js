function confirmarCurso() {
    const curso = document.getElementById('curso').value;
    const cursoNome = document.getElementById('cursoNome');

    if (curso !== '') {
        cursoNome.textContent = curso;
        document.getElementById('confirmacao').style.display = 'block';
        
    }
}

function abrirCurso() {
    const curso = document.getElementById('curso').value;
    const url = linkCurso(curso);
    window.open(url, '_blank', 'width=1980,height=1080');
    document.getElementById('confirmacao').style.display = 'none';
}

function cancelarConfirmacao() {
    document.getElementById('confirmacao').style.display = 'none';
    document.getElementById('.aviso').style.display = 'none';
}

function linkCurso(curso) {
    switch (curso) {
        case 'ADS':
            return "https://fatecsorocaba.edu.br/curso_ads.asp";
        case 'Biomedicos':
            return "https://fatecsorocaba.edu.br/curso_sb.asp";
        case 'Fabricacao':
            return "https://fatecsorocaba.edu.br/curso_fm.asp";
        case 'Logistica':
            return "https://fatecsorocaba.edu.br/curso_log.asp";
        case 'Projetos':
            return "https://fatecsorocaba.edu.br/curso_proj.asp";
        default:
            return '';
    }
}
