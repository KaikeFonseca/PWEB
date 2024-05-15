document.addEventListener('DOMContentLoaded', () => {
    const botaoNovaTarefa = document.getElementById('botaoNovaTarefa');
    const alternarIdioma = document.getElementById('alternarIdioma');
    const modalTarefa = document.getElementById('modalTarefa');
    const formTarefa = document.getElementById('formTarefa');
    const fecharModal = document.getElementById('fecharModal');
    const salvarTarefa = document.getElementById('salvarTarefa');
    const deletarTarefa = document.getElementById('deletarTarefa');

    let tarefaSendoEditada = null;
    let linguaAtual = 'pt';

    const linguas = {
        pt: {
            'title': 'Kanban para Estudantes',
            'todo-title': '1 | A Fazer →',
            'inprogress-title': '2 | Em Progresso →',
            'done-title': '3 | Concluído ✓',
            'new-task': '+ | Nova Tarefa',
            'title-label': 'Título',
            'description-label': 'Descrição',
            'priority-label': 'Prioridade',
            'duedate-label': 'Data de Conclusão',
            'assignees-label': 'Responsáveis',
            'status-label': 'Status',
            'save': 'Salvar',
            'delete': 'Excluir'
        },
        en: {
            'title': 'Kanban for Students',
            'todo-title': '1 | To Do →',
            'inprogress-title': '2 | Doing →',
            'done-title': '3 | Done ✓',
            'new-task': '+ | New Task',
            'title-label': 'Title',
            'description-label': 'Description',
            'priority-label': 'Priority',
            'duedate-label': 'Due Date',
            'assignees-label': 'Assignees',
            'status-label': 'Status',
            'save': 'Save',
            'delete': 'Delete'
        }
    };

    const mudarIdioma = () => {
        linguaAtual = linguaAtual === 'pt' ? 'en' : 'pt';
        document.querySelectorAll('h2[data-lang]').forEach(el => {
            const key = el.getAttribute('data-lang');
            el.textContent = linguas[linguaAtual][key];
        });
        document.getElementById('titulo').textContent = linguas[linguaAtual].title;
        botaoNovaTarefa.textContent = linguas[linguaAtual]['new-task'];
        alternarIdioma.textContent = linguaAtual === 'pt' ? 'English' : 'Português';

        formTarefa.querySelector('label[for="tituloTarefa"]').textContent = linguas[linguaAtual]['title-label'];
        formTarefa.querySelector('label[for="descricaoTarefa"]').textContent = linguas[linguaAtual]['description-label'];
        formTarefa.querySelector('label[for="prioridadeTarefa"]').textContent = linguas[linguaAtual]['priority-label'];
        formTarefa.querySelector('label[for="dataConclusaoTarefa"]').textContent = linguas[linguaAtual]['duedate-label'];
        formTarefa.querySelector('label[for="responsaveisTarefa"]').textContent = linguas[linguaAtual]['assignees-label'];
        formTarefa.querySelector('label[for="statusTarefa"]').textContent = linguas[linguaAtual]['status-label'];
        salvarTarefa.textContent = linguas[linguaAtual]['save'];
        deletarTarefa.textContent = linguas[linguaAtual]['delete'];
    };

    alternarIdioma.addEventListener('click', mudarIdioma);

    botaoNovaTarefa.addEventListener('click', () => {
        tarefaSendoEditada = null;
        formTarefa.reset();
        modalTarefa.style.display = 'block';
    });

    fecharModal.addEventListener('click', () => {
        modalTarefa.style.display = 'none';
    });

    window.addEventListener('click', (event) => {
        if (event.target == modalTarefa) {
            modalTarefa.style.display = 'none';
        }
    });

    formTarefa.addEventListener('submit', (event) => {
        event.preventDefault();

        const dadosTarefa = {
            titulo: formTarefa.tituloTarefa.value,
            descricao: formTarefa.descricaoTarefa.value,
            prioridade: formTarefa.prioridadeTarefa.value,
            dataConclusao: formTarefa.dataConclusaoTarefa.value,
            responsaveis: formTarefa.responsaveisTarefa.value,
            status: formTarefa.statusTarefa.value
        };

        if (tarefaSendoEditada) {
            atualizarTarefa(tarefaSendoEditada, dadosTarefa);
        } else {
            criarTarefa(dadosTarefa);
        }

        modalTarefa.style.display = 'none';
    });

    deletarTarefa.addEventListener('click', () => {
        if (tarefaSendoEditada) {
            excluirTarefa(tarefaSendoEditada);
            modalTarefa.style.display = 'none';
        }
    });

    const criarElementoTarefa = (dadosTarefa) => {
        const elementoTarefa = document.createElement('div');
        elementoTarefa.classList.add('task-item');
        elementoTarefa.draggable = true;

        const prioridadeIcon = dadosTarefa.prioridade === 'Alta' ? '!!' : dadosTarefa.prioridade === 'Média' ? '!' : '';
        elementoTarefa.innerHTML = `
            <div>
                <strong>${dadosTarefa.titulo}</strong>
                <span class="priority">${prioridadeIcon}</span>
            </div>
            <p>${dadosTarefa.descricao}</p>
            <div class="footer">
                <span>${dadosTarefa.responsaveis}</span>
                <span>${dadosTarefa.dataConclusao}</span>
            </div>
        `;

        elementoTarefa.addEventListener('dragstart', () => {
            elementoTarefa.classList.add('dragging');
        });

        elementoTarefa.addEventListener('dragend', () => {
            elementoTarefa.classList.remove('dragging');
        });

        elementoTarefa.addEventListener('click', () => {
            tarefaSendoEditada = elementoTarefa;
            abrirModalEdicao(dadosTarefa);
        });

        return elementoTarefa;
    };

    const criarTarefa = (dadosTarefa) => {
        const elementoTarefa = criarElementoTarefa(dadosTarefa);
        document.getElementById(`${dadosTarefa.status}-list`).appendChild(elementoTarefa);
    };

    const atualizarTarefa = (elementoTarefa, dadosTarefa) => {
        elementoTarefa.innerHTML = `
            <div>
                <strong>${dadosTarefa.titulo}</strong>
                <span class="priority">${dadosTarefa.prioridade === 'Alta' ? '!!' : dadosTarefa.prioridade === 'Média' ? '!' : ''}</span>
            </div>
            <p>${dadosTarefa.descricao}</p>
            <div class="footer">
                <span>${dadosTarefa.responsaveis}</span>
                <span>${dadosTarefa.dataConclusao}</span>
            </div>
        `;
        elementoTarefa.parentNode.removeChild(elementoTarefa);
        document.getElementById(`${dadosTarefa.status}-list`).appendChild(elementoTarefa);
    };

    const excluirTarefa = (elementoTarefa) => {
        elementoTarefa.parentNode.removeChild(elementoTarefa);
    };

    const abrirModalEdicao = (dadosTarefa) => {
        modalTarefa.style.display = 'block';
        formTarefa.tituloTarefa.value = dadosTarefa.titulo;
        formTarefa.descricaoTarefa.value = dadosTarefa.descricao;
        formTarefa.prioridadeTarefa.value = dadosTarefa.prioridade;
        formTarefa.dataConclusaoTarefa.value = dadosTarefa.dataConclusao;
        formTarefa.responsaveisTarefa.value = dadosTarefa.responsaveis;
        formTarefa.statusTarefa.value = dadosTarefa.status;
    };

    const listasTarefas = document.querySelectorAll('.task-list');

    listasTarefas.forEach(listaTarefas => {
        listaTarefas.addEventListener('dragover', (event) => {
            event.preventDefault();
            const tarefaArrastando = document.querySelector('.dragging');
            listaTarefas.appendChild(tarefaArrastando);
        });
    });

    mudarIdioma(); // Inicializar com o idioma padrão
});