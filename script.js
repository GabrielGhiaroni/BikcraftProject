//Query Params
const parametros = new URLSearchParams(location.search);

function ativarParametro(parametro) {
    const elemento = document.getElementById(parametro);
    if (elemento) {
        elemento.checked = true;
    };
};

parametros.forEach(ativarParametro);


// Perguntas Frequentes
const botoes = document.querySelectorAll(".seguros-perguntas-frequentes button");

function ativarConteudo(event) {
    const pergunta = event.currentTarget;
    const atributoControls = pergunta.getAttribute('aria-controls');
    const resposta = document.getElementById(atributoControls);

    resposta.classList.toggle("ativa");
    const ativa = resposta.classList.contains('ativa');
    pergunta.setAttribute('aria-expanded', ativa);
};

function eventosPerguntas(botao) {
    botao.addEventListener('click', ativarConteudo);
};

botoes.forEach(eventosPerguntas);