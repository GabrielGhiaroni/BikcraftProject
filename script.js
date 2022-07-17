const parametros = new URLSearchParams(location.search);

function ativarParametro(parametro) {
    const elemento = document.getElementById(parametro);
    if (elemento) {
        elemento.checked = true;
    };
};

parametros.forEach(ativarParametro);