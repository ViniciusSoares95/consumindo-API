const form = document.getElementById('form'); //pegar <form>

if (form) { //verifica se existe
    form.addEventListener('submit', (e) => {//adicionar um evento
        e.preventDefault();// bloquear formulário de atualização de página 

        const dados = {
            nome: document.getElementById('nome').value,
            instagram: document.getElementById('email').value,
            fone: document.getElementById('fone').value,
            descricao: document.getElementById('descricao').value,
        }

        fetch(path, {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json;charset=utf-8'
            },
            body: JSON.stringify(dados)
        });

        setTimeout(() => {
            window.location.reload();
        }, 500)
    });
}