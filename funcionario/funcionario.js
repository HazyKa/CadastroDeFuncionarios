document.addEventListener("DOMContentLoaded", carregarPagina);
const funcionariosArmazenados = JSON.parse(localStorage.getItem("funcionarios"));

class GerenciadorFuncionarios {
  atualizarLista() {
    for (let i = 0; i < funcionariosArmazenados.length; i++) {
      this.mostrarFuncionarios(funcionariosArmazenados[i].nome, i);
    }
  }

  limparColaborador(){
    const todosColaboradores = document.getElementById("todosColaboradores");
    todosColaboradores.style.display = "none";
  }

  limparDados(){
    const todosColaboradores = document.getElementById("todosColaboradores");
    todosColaboradores.style.display = "flex";
    const detalhesColaborador = document.getElementById("detalhesColaborador");
    detalhesColaborador.style.display = "none";
  }

  mostrarFuncionarios(nome, id) {
    const pessoaDiv = document.createElement("div");
    pessoaDiv.classList.add("pessoa");
    pessoaDiv.id = id;

    const nomeElement = document.createElement("h3");
    nomeElement.textContent = nome;

    const editarLink = document.createElement("a");
    editarLink.textContent = "👁️‍🗨️";
    editarLink.id = "editarPessoa";
    editarLink.classList.add("editarPessoa");
    editarLink.addEventListener("click", () => this.dadosFuncionario(id));

    pessoaDiv.appendChild(nomeElement);
    pessoaDiv.appendChild(editarLink);

    const pessoasEsquerda = ladoEsquerdo.querySelectorAll(".pessoa").length;

    if (pessoasEsquerda < 5) {
      ladoEsquerdo.appendChild(pessoaDiv);
    } else {
      ladoDireito.appendChild(pessoaDiv);
    }
  }

  dadosFuncionario(id) {
    let idPessoa = id;
    this.limparColaborador();

    const detalhesColaborador = document.getElementById("detalhesColaborador");
    detalhesColaborador.innerHTML = `
    <div class="areaColaboradores">

    <div class="nomeEdit">
      <h2 id="nomeColaborador">${funcionariosArmazenados[id].nome}</h2>

      <div class="bntDetalhes">
        <button id="btnEditar" class="btnEditar">Editar Funcionario</button>
        <button id="btnDeletar" class="btnDeletar">Deletar Funcionario</button>
      </div>
    </div>
    
    <div class="colaborador">

        <div class="identidade">

            <div class="titulo">
                <h3>Identidade</h3>
            </div>
            <p>Idade: ${funcionariosArmazenados[id].idade}</p>
            <p>Estado Civil: ${funcionariosArmazenados[id].estadoCV}</p>
            <p>Telefone: ${funcionariosArmazenados[id].telefone}</p>
            <p>CPF: ${funcionariosArmazenados[id].cpf}</p>
        </div>
        
        <div class="padrao">
            <div class="titulo">
                <h3>Endereco</h3>
            </div>
            <p>Estado: ${funcionariosArmazenados[id].estado}</p>
            <p>Cidade: ${funcionariosArmazenados[id].cidade}</p>
            <p>Bairro: ${funcionariosArmazenados[id].bairro}</p>
            <p>Rua: ${funcionariosArmazenados[id].rua}</p>
        </div>

        <div class="padrao">
            <div class="titulo">
                <h3>Empresa</h3>
            </div>
            <p>Supervisor: ${funcionariosArmazenados[id].supervisor}</p>
            <p>Setor: ${funcionariosArmazenados[id].setor}</p>
            <p>Horario: ${funcionariosArmazenados[id].horario}</p>
            <p>Salario: ${funcionariosArmazenados[id].salario}</p>
        </div>
    </div>
  </div>
  `;
  }
}

function carregarPagina() {
  const gerenciador = new GerenciadorFuncionarios();
  gerenciador.atualizarLista();
}

document.getElementById("colaboradores").addEventListener("click", function(){
  const gerenciador = new GerenciadorFuncionarios();
  gerenciador.limparDados();
})


















/*
document.addEventListener("DOMContentLoaded", function () {
  const ladoEsquerdo = document.getElementById("ladoEsquerdo");
  const ladoDireito = document.getElementById("ladoDireito");
  let funcionarios = JSON.parse(localStorage.getItem("funcionarios"));

  let array = [];

  atualizarLista();

  function atualizarLista() {
    
    ladoEsquerdo.innerHTML = "";
    ladoDireito.innerHTML = "";

    if (funcionarios[0] == undefined) {
      alert("Nao ha funcionarios cadastrados")
    }

    for (let i = 0; i < funcionarios.length; i++) {

      adicionarPessoa(funcionarios[i].nome, i);
    }
  }

  function adicionarPessoa(nome, id) {
    const pessoaDiv = document.createElement("div");
    pessoaDiv.classList.add("pessoa");
    pessoaDiv.id = id;

    const nomeElement = document.createElement("h3");
    nomeElement.textContent = nome;

    const editarLink = document.createElement("a");
    editarLink.textContent = "👁️‍🗨️";
    editarLink.id = "editarPessoa";
    editarLink.classList.add("editarPessoa");

    pessoaDiv.appendChild(nomeElement);
    pessoaDiv.appendChild(editarLink);

    const pessoasEsquerda = ladoEsquerdo.querySelectorAll(".pessoa").length;
    const pessoasDireita = ladoDireito.querySelectorAll(".pessoa").length;

    if (pessoasEsquerda < 5) {
      ladoEsquerdo.appendChild(pessoaDiv);
    } else {
      ladoDireito.appendChild(pessoaDiv);
    }
  }


  //Ajuda do CHATGPT (compreendido)
  document.addEventListener("click", function (event) {
    if (event.target.classList.contains("editarPessoa")) {
      editarPessoa(event.target.parentElement.id);
    }
  });


 const todosColaboradores = document.getElementById("todosColaboradores");

 const colaboradoresTitulo = document.getElementById("colaboradoresTitulo");

 function editarPessoa(idPessoaClicada) {

    let seletorArray = parseInt(idPessoaClicada);
    todosColaboradores.innerHTML = "";
    console.log(seletorArray)

    colaboradoresTitulo.textContent = "Colaborador: ";

    todosColaboradores.innerHTML = `
        <div class="areaColaboradores">

        <div class="nomeEdit">
          <h2 id="nomeColaborador">${funcionarios[idPessoaClicada].nome}</h2>
          <button id="">Editar Funcionario</button>
        </div>
        
        <div class="colaborador">

            <div class="identidade">

                <div class="titulo">
                    <h3>Identidade</h3>
                </div>
                <p>Idade: ${funcionarios[idPessoaClicada].idade}</p>
                <p>Estado Civil: ${funcionarios[idPessoaClicada].estadoCV}</p>
                <p>Telefone: ${funcionarios[idPessoaClicada].telefone}</p>
                <p>CPF: ${funcionarios[idPessoaClicada].cpf}</p>
            </div>
            
            <div class="padrao">
                <div class="titulo">
                    <h3>Endereco</h3>
                </div>
                <p>Estado: ${funcionarios[idPessoaClicada].estado}</p>
                <p>Cidade: ${funcionarios[idPessoaClicada].cidade}</p>
                <p>Bairro: ${funcionarios[idPessoaClicada].bairro}</p>
                <p>Rua: ${funcionarios[idPessoaClicada].rua}</p>
            </div>

            <div class="padrao">
                <div class="titulo">
                    <h3>Empresa</h3>
                </div>
                <p>Supervisor: ${funcionarios[idPessoaClicada].supervisor}</p>
                <p>Setor: ${funcionarios[idPessoaClicada].setor}</p>
                <p>Horario: ${funcionarios[idPessoaClicada].horario}</p>
                <p>Salario: ${funcionarios[idPessoaClicada].salario}</p>
            </div>
        </div>
      </div>
      `;

 }

  //BOTAO AREA BUSCA

  document.getElementById("adicionar").onclick = function () {
    window.location.href = 'http://127.0.0.1:5500/cadastro/cadastro.html'
  };



  let col = document.getElementById("colaboradores");
  col.addEventListener("click", teste);

  function teste(){
    for (let i = 0; i < funcionarios.length; i++) {

      adicionarPessoa(funcionarios[i].nome, i);
    }
  }


  let deletar = document.getElementById("deletar");
  deletar.addEventListener("click", deletarFuncionario);

  function deletarFuncionario() {
    
  }


});
*/