
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



let funcionarios = [];

function enviar(){

    if(nomeCadastro.value == "" || 
        idadeCadastro.value == "" || 
        cpfCadastro.value == ""  || 
        telefoneCadastro.value == "" ||
        estadoCadastro.value == "" ||
        cidadeCadastro.value == "" ||
        bairroCadastro.value == "" ||
        ruaCadastro.value == ""
        ){
            alert("preenche");
        }else{
            funcionarios.push({nome: nomeCadastro.value, 
                idade: idadeCadastro.value, 
                cpf: cpfCadastro.value, 
                telefone: telefoneCadastro.value,
                estado: estadoCadastro.value,
                cidade: cidadeCadastro.value,
                bairro: bairroCadastro.value,
                rua: ruaCadastro.value
            })
        }

    console.log(funcionarios);

}

