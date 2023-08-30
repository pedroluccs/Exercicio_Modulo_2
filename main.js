$(document).ready(function() {
    $('#telefone').mask('(00) 00000-0000');
    $('#cpf').mask('000.000.000-00');
    $('#cep').mask('00000-000');

    $('form').validate({
        rules: {
            nome: 'required',  
            email: {
                required: true,
                email: true
            },
            cpf: 'required',   
            telefone: 'required',  
            cep: 'required'    
        },
        messages: {
            nome: 'Por favor, insira seu nome',
            email: {
                required: 'Por favor, insira um endereço de email válido',
                email: 'Por favor, insira um endereço de email válido'
            },
            cpf: 'Por favor, insira um CPF válido',
            telefone: 'Por favor, insira um número de telefone',
            cep: 'Por favor, insira um CEP'
        },
        submitHandler: function(form) {

            alert('Cadastro enviado com sucesso!');
            form.reset(); 
        }
    });
});
