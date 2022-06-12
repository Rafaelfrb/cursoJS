function verificar() {
var pais = document.getElementById('pais');
var paisResultado = pais.value;
var res = document.getElementById('res');

res.innerHTML = `<p>Você veio de ${paisResultado}.</p>`;

if (paisResultado == 'Brasil') {
    res.innerHTML += `<p>Você é brasileiro. Bem vindo de volta.</p>`
} else {
    res.innerHTML += `<p>Você é estrangeiro. Bem vindo ao Brasil.</p>`
};
};