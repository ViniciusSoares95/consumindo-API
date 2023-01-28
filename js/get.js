const ul = document.getElementById('lista'); /*pegar <ul>*/

if(ul){
    fetch(path)
        .then(resp => resp.json()) /* tentar converte para json */
        .then(dados => { //caso consiga
         let htmlLi = [];

         dados.forEach(item => { //loop de cada elemento
            htmlLi.push(`
                <div class="row">
                <div class="col-md-4">
                    <div class="widget lazur-bg p-x1">
                        <h2>${item.nome}</h2>
                        <ul class="list-unstyled m-t-md">
                            <li>
                                <span class="fa fa-envelope m-r-xs"></span>
                                <label>Email:</label>
                                ${item.email} 
                            </li>
                            <li>
                                <span class="fa fa-phone m-r-xs"></span>
                                <label>Fone:</label>
                                 ${item.fone} 
                            </li>
                            <li>
                            <span class="fa fa-phone m-r-xs"></span>
                            <label>Descrição:</label>
                             ${item.descricao} 
                            </li>
                        </ul>
                        <div class="pull-right btn-group-sm d-flex justify-content-end">
                            <button type="button" class="btn btn-primary" onclick="deleteItem(${item.id})">Excluir</button>
                        </div>
                    </div>   
                </div>
            </div>`);
         });
         ul.innerHTML = htmlLi;
        })
        .catch(erro => { //se ouver erro
            console.log(erro);
        })
        
}