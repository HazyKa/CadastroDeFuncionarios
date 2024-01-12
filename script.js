
//IDENTIDADE
const nomeCadastro = document.getElementById("nome");
const idadeCadastro = document.getElementById("idade");
const cpfCadastro = document.getElementById("cpf");
const telefoneCadastro = document.getElementById("telefone");

//ENDERECO
const estadoCadastro = document.getElementById("estadoCadastro");
const cidadeCadastro = document.getElementById("cidadeCadastro");
const bairroCadastro = document.getElementById("bairroCadastro");
const ruaCadastro = document.getElementById("ruaCadastro");


//EMPRESA
const supervisorCadastro = document.getElementById("supervisorCadastro");
const setorCadastro = document.getElementById("setorCadastro");
const horarioCadastro = document.getElementById("horarioCadastro");
const salarioCadastro = document.getElementById("salarioCadastro");



function enviar(){

    if(nomeCadastro.value == "" || 
        idadeCadastro.value == "" || 
        cpfCadastro.value == ""  || 
        telefoneCadastro.value == "" ||
        estadoCadastro.value == "" ||
        cidadeCadastro.value == "" ||
        bairroCadastro.value == "" ||
        ruaCadastro.value == "" || 
        supervisorCadastro.value == "" ||
        setorCadastro.value == "" ||
        horarioCadastro.value == "" ||
        salarioCadastro.value == ""
        ){
            alert("Preencha todos os campos"); //MUDAR PARA SPAN, APARECER UMA JANELINHA NA TELA
        } else {
            adicionarFuncionario();
        }
}

function adicionarFuncionario() {

    let funcionarios = [];

    if(localStorage.hasOwnProperty("funcionarios")){
        funcionarios = JSON.parse(localStorage.getItem("funcionarios"));
    }

    funcionarios.push({nome: nomeCadastro.value, 
        idade: idadeCadastro.value, 
        cpf: cpfCadastro.value, 
        telefone: telefoneCadastro.value,
        estado: estadoCadastro.value,
        cidade: cidadeCadastro.value,
        bairro: bairroCadastro.value,
        rua: ruaCadastro.value
    });

    localStorage.setItem("funcionarios", JSON.stringify(funcionarios));
}
