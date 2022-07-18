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

//Galeria Imagens
const imagemPrincipal = document.querySelector('.bicicleta-imagens img');
const bicicletas = document.querySelectorAll('.bicicleta-imagens img');

function alterarImagem(event) {
    const imagemClicada = event.currentTarget;
    const imagemPrincipalSrc = imagemPrincipal.src;
    imagemPrincipal.src = imagemClicada.src;
    imagemClicada.src = imagemPrincipalSrc;
};

function ouvinteEvento(img) {
    img.addEventListener('click', alterarImagem);
};

bicicletas.forEach(ouvinteEvento);