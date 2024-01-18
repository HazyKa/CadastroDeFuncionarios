document.addEventListener("DOMContentLoaded", function () {
  const ladoEsquerdo = document.getElementById("ladoEsquerdo");
  const ladoDireito = document.getElementById("ladoDireito");
  let funcionarios = JSON.parse(localStorage.getItem("funcionarios"));

  atualizarLista();

  function atualizarLista() {
    ladoEsquerdo.innerHTML = "";

    for (let i = 0; i < funcionarios.length; i++) {

      adicionarPessoa(funcionarios[i].nome);
    }
  }

  function adicionarPessoa(nome) {
    const pessoaDiv = document.createElement("div");
    pessoaDiv.classList.add("pessoa");
    
    const nomeElement = document.createElement("h3");
    nomeElement.textContent = nome;

    const editarLink = document.createElement("a");
    editarLink.href = "#";
    editarLink.textContent = "🖊️";
    editarLink.id = "editarPessoa";

    pessoaDiv.appendChild(nomeElement);
    pessoaDiv.appendChild(editarLink);

    const pessoasEsquerda = ladoEsquerdo.querySelectorAll(".pessoa").length;
    const pessoasDireita = ladoDireito.querySelectorAll(".pessoa").length;

    if (pessoasEsquerda < 5) {
            ladoEsquerdo.appendChild(pessoaDiv);
        } else{
            ladoDireito.appendChild(pessoaDiv);
        }
    }

  });