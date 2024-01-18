
//IDENTIDADE
const nomeCadastro = document.getElementById("nome");
const idadeCadastro = document.getElementById("idade");
const cpfCadastro = document.getElementById("cpf");
const telefoneCadastro = document.getElementById("telefone");
const estadoCVCadastro = document.getElementById("estadoCV");


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

    if(validarCadastro() == true){
        adicionarFuncionario();
    }else {

    }

}   



function validarCadastro(){

    if(!validaTexto(nomeCadastro.value)){
        alert("Nome preenchido incorretamente!");
    } else if(idadeCadastro.value < 18 || idadeCadastro.value  > 85){
        alert("Idade preenchida incorretamente!");
    }else if (!validaTexto(estadoCVCadastro.value)){
        alert("Estado Civil preenchido incorretamnete!");
    } else if (!validaCpf(cpfCadastro.value)){
        alert("cpf preenchido incorretamnete!");
    }else if (!validaTelefone(telefoneCadastro.value)){
        alert("telefone preenchido incorretamente!");
    }else if (!validaTexto(estadoCadastro.value)){
        alert("estado preenchido incorretamente!");
    }else if (!validaTexto(cidadeCadastro.value)){
        alert("cidade preenchida incorretamente!");
    }else if (!validaTexto(bairroCadastro.value)){
        alert("bairro preenchido incorretamente!");
    }else if (!validaTexto(ruaCadastro.value)){
        alert("rua preenchida incorretamente!");
    }else if (!validaTexto(supervisorCadastro.value)){
        alert("Supervisor preenchido incorretamente!");
    }else if (!validaTexto(setorCadastro.value)){
        alert("Setor preenchida incorretamente!");
    }else{
        return true;
    }
}

function validaTexto(texto) { 
    var padraoTexto = /[A-z]/; 
    return padraoTexto.test(texto); 
}

function validaCpf(cpf) {
    let padraoCpf = /^\d{3}\.?\d{3}\.?\d{3}\-?\d{2}$/;
    return padraoCpf.test(cpf);
}

function validaTelefone(telefone) {
    let padraoTelefone = /^(?:(?:\+|00)?(55)\s?)?(?:\(?([1-9][0-9])\)?\s?)?(?:((?:9\d|[2-9])\d{3})\-?(\d{4}))$/;
    return padraoTelefone.test(telefone);
}

let funcionarios = [];

function adicionarFuncionario() {

    if(localStorage.hasOwnProperty("funcionarios")){
        funcionarios = JSON.parse(localStorage.getItem("funcionarios"));
    }

    funcionarios.push({nome: nomeCadastro.value, 
        idade: idadeCadastro.value,
        estadoCV: estadoCVCadastro.value,
        cpf: cpfCadastro.value, 
        telefone: telefoneCadastro.value,
        estado: estadoCadastro.value,
        cidade: cidadeCadastro.value,
        bairro: bairroCadastro.value,
        rua: ruaCadastro.value
    });

    localStorage.setItem("funcionarios", JSON.stringify(funcionarios));
}


