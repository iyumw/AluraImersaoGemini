function pesquisar() {
    // Obtém a seção HTML onde os resultados serão exibidos
    let section = document.getElementById("resultados-pesquisa");
    // Verifica se a seção foi encontrada no DOM (para depuração)
    
    let campoPesquisa = document.getElementById("campo-pesquisa").value;

    if (!campoPesquisa) {
        section.innerHTML = "<p class='sem-resultados'>Nenhum resultado encontrado. Por favor digite sua busca na barra de pesquisa :P</p>"
        return 
    }

    campoPesquisa = campoPesquisa.toLowerCase();
    
    // Inicializa uma string vazia para armazenar os resultados da pesquisa
    let resultados = "";

    let titulo = "";
    let descricao = "";
    let tipo = "";

    // Itera sobre cada dado na lista de dados
    for (let dado of dados) {
        titulo = dado.titulo.toLowerCase();
        descricao = dado.descricao.toLowerCase();
        tipo = dado.tipo.toLowerCase();

        console.log(dado.titulo.includes(campoPesquisa));
        if (titulo.includes(campoPesquisa) || tipo.includes(campoPesquisa)){
            //Cria um novo elemento
            resultados += `
            <div class="item-resultado">
                <h2>
                    <a href="${dado.link}" target="_blank"> ${dado.titulo} </a>
                </h2>
                <p class="descricao-meta">
                    ${dado.descricao}
                </p>
                <a href="${dado.link}" target="_blank">Saiba mais</a>
            </div>
        `;
        }
    }

if(!resultados){
        resultados = "<p class='sem-resultados'>Nenhum resultado encontrado. >:D</p>"
    }

// Atribui o HTML gerado à seção de resultados
    section.innerHTML = resultados;  
}