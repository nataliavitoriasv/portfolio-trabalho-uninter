// Seleciona o botão "Mostrar Projetos" usando a classe CSS '.btn-mostrar-projetos'
const btnMostrarProjetos = document.querySelector('.btn-mostrar-projetos');

// Seleciona todos os elementos que têm a classe '.inativos' (projetos inativos)
const projetosInativos = document.querySelectorAll('.inativos');

// Adiciona um ouvinte de evento de clique ao botão
btnMostrarProjetos.addEventListener('click', function () {
    // Para cada projeto inativo, remove a classe '.inativos', tornando-os visíveis
    projetosInativos.forEach(function (projeto) {
        projeto.classList.remove('inativos');
    });

    // Adiciona a classe '.remover' ao botão, que provavelmente oculta o botão ou altera seu estilo
    btnMostrarProjetos.classList.add('remover');
});
