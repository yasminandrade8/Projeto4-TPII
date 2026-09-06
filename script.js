class GerenciaEstacionamento {
    constructor() {
        if (GerenciaEstacionamento.instancia) {
            return GerenciaEstacionamento.instancia;
        }
        this.veiculos = [];
        GerenciaEstacionamento.instancia = this;
    }

    static getInstance() {
        if (!GerenciaEstacionamento.instancia) {
            GerenciaEstacionamento.instancia = new GerenciaEstacionamento();
        }
        return GerenciaEstacionamento.instancia;
    }

    entrarVeiculo(placa, modelo) {
        if (!placa || !modelo) {
            return "Preencha placa e modelo."
        }

        const veiculoEstacionado = this.veiculos.some(v => v.placa === placa);
        if (veiculoEstacionado) {
            return "Esse veículo já está estacionado!";
        }

        if (this.veiculos.length >= 10) {
            return "Estacionamento Lotado!";
        }

        const veiculo = {placa: placa, modelo: modelo};
        this.veiculos.push(veiculo);

        console.log("VEÍCULO ADICIONADO ========");
        console.log(`${placa} - ${modelo}`);

        return "Veículo estacionado com sucesso.";
    }

    sairVeiculo(placa) {
        const indice = this.veiculos.findIndex(v => v.placa === placa);

        if (indice === -1) {
            return "Placa não encontrada.";
        }

        const veiculoRemovido = this.veiculos[indice];
        this.veiculos.splice(indice, 1);

        console.log("VEÍCULO REMOVIDO ========");
        console.log(`${veiculoRemovido.placa} - ${veiculoRemovido.modelo}`);

        return "Veículo removido com sucesso!";
    }
}

const veiculo1 = GerenciaEstacionamento.getInstance();
const veiculo2 = GerenciaEstacionamento.getInstance();

console.log("Veículo 1", veiculo1);
console.log("Veículo 2", veiculo2);
console.log("Mesma Instância: ", veiculo1 === veiculo2);

function entrarVeiculo() {
    const placa = document.getElementById("placa").value;
    const modelo = document.getElementById("modelo").value;

    const estacionamento = GerenciaEstacionamento.getInstance();
    const resultado = estacionamento.entrarVeiculo(placa, modelo);

    document.getElementById("mensagem").textContent = resultado;
    atualizarInterface();
}

function sairVeiculo() {
    const placa = document.getElementById("placa").value;

    const estacionamento = GerenciaEstacionamento.getInstance();
    const resultado = estacionamento.sairVeiculo(placa);

    document.getElementById("mensagem").textContent = resultado;
    atualizarInterface();
}

function limparCampos() {
    document.getElementById("placa").value = "";
    document.getElementById("modelo").value = "";
    document.getElementById("mensagem").textContent = "Nenhuma operação realizada.";

}

function atualizarInterface() {
    const estacionamento = GerenciaEstacionamento.getInstance();
    const ocupadas = estacionamento.veiculos.length;

    document.getElementById("vagasOcupadas").textContent = ocupadas;
    document.getElementById("vagasDisponiveis").textContent = 10 - ocupadas;

    const lista = document.getElementById("listaVeiculos");

    if (ocupadas === 0) {
        lista.innerHTML = "<li>Nenhum veículo estacionado</li>";
    }else {
        lista.innerHTML = estacionamento.veiculos
            .map(v => `<li>${v.placa} - ${v.modelo}</li>`)
            .join("");
    }
}

