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

let funcionarios = [];

class Funcionario {

    constructor(nome, idade, cpf, telefone, estadoCV, estado, cidade, bairro, rua, supervisor, setor, horario, salario) {
        this.nome = nome;
        this.idade = idade;
        this.cpf = cpf;
        this.telefone = telefone;
        this.estadoCV = estadoCV;
        this.estado = estado;
        this.cidade = cidade;
        this.bairro = bairro;
        this.rua = rua;
        this.supervisor = supervisor;
        this.setor = setor;
        this.horario = horario;
        this.salario = salario;
    }

    adicionarFuncionario() {
        if (!Validacao.validarNome(this.nome) ||
            !Validacao.validarIdade(this.idade) ||
            !Validacao.validarCPF(this.cpf) ||
            !Validacao.validarTelefone(this.telefone) ||
            !Validacao.validarEstadoCivil(this.estadoCV) ||
            !Validacao.validarEndereco(this.estado, this.cidade, this.bairro, this.rua) ||
            !Validacao.validarSupervisorSetorHorario(this.supervisor, this.setor, this.horario) ||
            !Validacao.validarSalario(this.salario)) {
            console.error("Dados do funcionário inválidos. Verifique os campos.");
            return;
        }

        if (localStorage.hasOwnProperty("funcionarios")) {
            funcionarios = JSON.parse(localStorage.getItem("funcionarios"));
        }

        funcionarios.push(this);
        localStorage.setItem("funcionarios", JSON.stringify(funcionarios));
        alert("O funcionario foi adicionado!");
        limparInput();
    }

}

class Validacao {

    static validarNome(nome) {
        return /^[a-zA-Z\s]{2,}$/.test(nome);
    }

    static validarIdade(idade) {
        return /^\d+$/.test(idade) && idade > 0;
    }

    static validarCPF(cpf) {
        return /^\d{11}$/.test(cpf);
    }

    static validarTelefone(telefone) {
        return /^\d{11}$/.test(telefone);
    }

    static validarEstadoCivil(estadoCV) {
        return /^[a-zA-Z]+$/.test(estadoCV);
    }

    static validarEndereco(estado, cidade, bairro, rua) {
        return /^[a-zA-Z\s]+$/.test(estado) &&
            /^[a-zA-Z\s]+$/.test(cidade) &&
            /^[a-zA-Z\s]+$/.test(bairro) &&
            /^[a-zA-Z\s\d]+$/.test(rua);
    }

    static validarSupervisorSetorHorario(supervisor, setor, horario) {
        return /^[a-zA-Z\s]+$/.test(supervisor) &&
            /^[a-zA-Z\s]+$/.test(setor) &&
            /^\d+$/.test(horario);
    }

    static validarSalario(salario) {
        return /^\d+$/.test(salario) && salario >= 0;
    }
}

function enviar() {
    let novoFuncionario = new Funcionario(nomeCadastro.value, idadeCadastro.value, cpfCadastro.value, telefoneCadastro.value, estadoCVCadastro.value, estadoCadastro.value, cidadeCadastro.value, bairroCadastro.value, ruaCadastro.value, supervisorCadastro.value, setorCadastro.value, horarioCadastro.value, salarioCadastro.value);
    novoFuncionario.adicionarFuncionario();
}

function limparInput() {
    nomeCadastro.value = "";
    idadeCadastro.value = "";
    cpfCadastro.value = "";
    telefoneCadastro.value = "";
    estadoCVCadastro.value = "";
    estadoCadastro.value = "";
    cidadeCadastro.value = "";
    bairroCadastro.value = "";
    ruaCadastro.value = "";
    supervisorCadastro.value = "";
    setorCadastro.value = "";
    horarioCadastro.value = "";
    salarioCadastro.value = "";
}