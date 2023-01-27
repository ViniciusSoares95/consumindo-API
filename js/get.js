const ul = document.getElementById('lista'); /*pegar <ul>*/

if(ul){
    fetch(path)
        .then(resp => resp.json()) /* tentar converte para json */
        .then(dados => { //caso consiga
         let htmlLi = [];

         dados.forEach(intem => { //loop de cada elemento
            htmlLi.push(`
                <div class="row">
                <div class="col-md-4">
                    <div class="widget lazur-bg p-x1">
                        <h2>${intem.nome}</h2>
                        <ul class="list-unstyled m-t-md">
                            <li>
                                <span class="fa fa-envelope m-r-xs"></span>
                                <label>Email:</label>
                                ${intem.email} 
                            </li>
      
                            <li>
                                <span class="fa fa-phone m-r-xs"></span>
                                <label>Fone:</label>
                                 ${intem.fone} 
                            </li>
                            <li>
                            <span class="fa fa-phone m-r-xs"></span>
                            <label>Descrição:</label>
                             ${intem.descricao} 
                        </li>
                        </ul>
                        <div class="pull-right btn-group-sm">
                        <button type="button" class="btn btn-primary">Editar</button>
                            <button type="button" class="btn btn-primary" onclick="deleteItem(${intem.id})">Excluir</button>
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