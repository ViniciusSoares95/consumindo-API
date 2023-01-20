const ul = document.getElementById('lista'); /*pegar <ul>*/

if(ul){
    fetch(patch)
        .then(resp => resp.json()) /* tentar converte para json */
        .then(dados => { //caso consiga
         let htmLi = [];

         dados.forEach(intem => { //loop de cada elemento
            htmLi.push('');
         });
         ul.innerHTML = htmLi;
        })
        .catch(erro => { //se ouver erro
            console.log(erro);
        })
}