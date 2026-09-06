# 🚗 PROJETO – Controle de Estacionamento (Padrão Singleton)

> **Disciplina:** Técnicas de Programação II  
> **Linguagem:** JavaScript (HTML5 / DOM API)  
> **Design Pattern:** Singleton (Padrão GoF Criacional)  

---

## 📌 Sobre o Projeto

Este projeto tem como objetivo implementar um sistema web para gerenciamento de controle de entrada e saída de veículos em um estacionamento com capacidade máxima de **10 vagas**.

Todo o estado e a lógica do estacionamento são centralizados e gerenciados por uma **única instância** utilizando o padrão de projeto criacional **Singleton**. A interface gráfica permite ao usuário registrar entradas, saídas, limpar campos e acompanhar as estatísticas de vagas e os veículos estacionados em tempo real.

---

## 🎯 Padrão de Projeto Utilizado: Singleton

O **Singleton** é um padrão de projeto criacional da Gang of Four (GoF) que garante que uma classe tenha apenas uma única instância em toda a aplicação e fornece um ponto de acesso global a ela.

### Por que usar o Singleton neste caso?
- **Consistência de Estado:** Garante que todas as ações (entradas, saídas e atualizações de tela) manipulem exatamente a mesma lista de veículos e contagem de vagas.
- **Ponto Único de Controle:** Impede que instâncias duplicadas do gerenciador sejam criadas acidentalmente por partes diferentes do código, o que causaria divergência nos dados das vagas.

---

## 💻 Estrutura e Funcionamento do Código

O projeto é composto por dois arquivos principais:

1. **`script.js` (Lógica e Padrão Singleton):**
   - **`GerenciaEstacionamento`:** Classe Singleton que armazena a lista de veículos (`veiculos`) e controla as regras do estacionamento.
     - `getInstance()`: Método estático que retorna a instância única da classe.
     - `entrarVeiculo(placa, modelo)`: Valida os dados, checa duplicação de placa, verifica o limite de 10 vagas e registra a entrada.
     - `sairVeiculo(placa)`: Localiza e remove o veículo pelo número da placa.
   - **Funções de Interface:** `entrarVeiculo()`, `sairVeiculo()`, `limparCampos()` e `atualizarInterface()` integram os eventos do HTML com os métodos do Singleton e atualizam a DOM.

2. **`index.html` (Interface do Usuário):**
   - Estrutura contendo formulário de entrada (campos de Placa e Modelo), botões de ação (**ENTRAR**, **SAIR**, **LIMPAR**), painel estatístico de vagas, mensagens de feedback e listagem dos veículos estacionados.

---

## ⚡ Regras de Negócio e Validações

- 🛑 **Validação de Campos:** Impede a adição de veículos sem o preenchimento de placa e modelo.
- 🚫 **Placas Duplicadas:** Não permite o registro de dois veículos com a mesma placa.
- ⚠️ **Limite de Vagas:** Bloqueia novas entradas exibindo a mensagem `"Estacionamento Lotado!"` quando atinge 10 veículos.
- 🔄 **Atualização Dinâmica:** Atualiza instantaneamente a contagem de vagas ocupadas/disponíveis e a lista de veículos após cada operação.
- 📋 **Console de Operações:** Exibe logs no console do navegador a cada adição ou remoção de veículo.

---

## 🧪 Teste de Instância Única no Console

Conforme os requisitos da aplicação, o arquivo `script.js` inclui um teste que comprova o funcionamento do **Singleton**:

```javascript
const veiculo1 = GerenciaEstacionamento.getInstance();
const veiculo2 = GerenciaEstacionamento.getInstance();

console.log("Veículo 1", veiculo1);
console.log("Veículo 2", veiculo2);
console.log("Mesma Instância: ", veiculo1 === veiculo2); // Retorna true
```

---

## 🚀 Como Executar o Projeto

### Pré-requisitos
- Qualquer navegador web moderno (Google Chrome, Firefox, Edge, Safari).

### Passo a Passo

1. **Clone o repositório:**
   ```bash
   git clone https://github.com/yasminandrade8/Projeto4-TPII.git
   ```

2. **Acesse a pasta do projeto:**
   ```bash
   cd Projeto4-TPII
   ```

3. **Execute o projeto:**
   - Basta dar um duplo clique no arquivo `index.html` ou abri-lo diretamente em seu navegador preferido.
   - Abra o **DevTools** do navegador (`F12` ou `Ctrl + Shift + I`) na aba **Console** para verificar os logs das operações e a confirmação da instância única.

---

## 👩‍💻 Autora

Feito com 💜 por **Yasmin Andrade**
