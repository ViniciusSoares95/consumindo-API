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
                                <label>Instagram:</label>
                                ${intem.instagram} 
                            </li>
      
                            <li>
                                <span class="fa fa-phone m-r-xs"></span>
                                <label>Fone:</label>
                                 ${intem.fone} 
                            </li>
                        </ul>
                        <div class="pull-right btn-group-sm">
                            <a href="#" class="btn btn-primary a-btn-slide-text">
                                <span class="glyphicon glyphicon-pencil" aria-hidden="true"></span>
                                <span><strong>Editar</strong></span>            
                            </a>
                            <a href="#" class="btn btn-primary a-btn-slide-text">
                                <span class="glyphicon glyphicon-remove" aria-hidden="true"></span>
                                 <span><strong>Excluir</strong></span>            
                             </a>
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