
    const alunos = [
    { nome: 'João', nota: 5.5 },
    { nome: 'Maria', nota: 7.0 },
    { nome: 'Pedro', nota: 4.0 },
    { nome: 'Ana', nota: 6.5 },
    { nome: 'Lucas', nota: 8.0 }
    ];


    function filtrarAprovados(alunos) {
    return alunos.filter(aluno => aluno.nota >= 6);
    }


    const aprovados = filtrarAprovados(alunos);
    console.log(aprovados);
