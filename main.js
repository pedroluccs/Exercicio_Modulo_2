const form = document.getElementById('form-compra');
const numeroIdade = document.getElementById('numero-idade');

function verificaIdade(idade) {
    return idade >= 18;
}

form.addEventListener('submit', function(e) {
    e.preventDefault();

    const idade = parseInt(numeroIdade.value);
    const containerMensagemSucesso = document.querySelector('.success-message');
    const containerMensagemErro = document.querySelector('.error-message');

    if (verificaIdade(idade)) {
        containerMensagemSucesso.textContent = 'Aguarde e será redirecionado!';
        containerMensagemSucesso.style.display = 'block';
        numeroIdade.classList.remove('error');
        containerMensagemErro.style.display = 'none';
    } else {
        numeroIdade.classList.add('error');
        containerMensagemErro.style.display = 'block';
        containerMensagemSucesso.style.display = 'none';
    }
});

numeroIdade.addEventListener('input', function() {
    const idade = parseInt(numeroIdade.value);
    const containerMensagemErro = document.querySelector('.error-message');

    if (verificaIdade(idade)) {
        numeroIdade.classList.remove('error');
        containerMensagemErro.style.display = 'none';
    } else {
        numeroIdade.classList.add('error');
        containerMensagemErro.style.display = 'block';
    }
});
