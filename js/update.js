const form = document.getElementById('form');

if(form){ //verifa se existe
    const inputId = document.getElementById('id'); //obtém a tag <input> do ID

    inputId.addEventListener('input', () => { // Add um evento de alteração. Cada alteração na tag, irá consutlar a API
        let id = Number(inputId.value);
        
        fetch(path + id)
             .then(resposta => resposta.json()) // Tenta converter a resposta para json
             .then(data => { // Caso consiga converte, preencherá os inputs de acordo com os "id" da tag
                document.getElementById('nome').value = data.nome ? data.nome : '';
                document.getElementById('email').value = data.email ? data.email : '';
                document.getElementById('fone').value = data.fone ? data.fone : '';
                document.getElementById('descricao').value = data.descricao ? data.descricao : '';
             });
    });

    form.addEventListener('submit', (e) => { // Add um evento ao formulário
        e.preventDefault(); // bloquear formulário de atualização de página

        const dados = {
            id: Number(document.getElementById('id').value),
            nome: document.getElementById('nome').value,
            email: document.getElementById('email').value,
            fone: document.getElementById('fone').value,
            descricao: document.getElementById('descricao').value,
        }

        fetch(path + inputId.value, {
            method: 'PUT',
            headers: {
                'Content-Type': 'application/json;charset=utf-8'
            },
            body: JSON.stringify(dados)
        });

        setTimeout(() => {
            window.location.replace('./view.html');
        }, 500)

    });
}