const prompt = require('prompt-sync')({ sigint: true });

class Heroi {
    constructor(nome, idade, tipo) {
        this.nome = nome;
        this.idade = idade;
        this.tipo = tipo;
        this.ataque = definirAtaque(tipo);
    }

    atacar() {
        console.log(`O ${this.tipo} atacou usando ${this.ataque}!`);
    }
}

let listaHerois = [];

main();

function main() {
    menu();
}

function menu() {
    console.log("-- Criador de Heróis --\n");
    console.log("01. Criar herói");
    console.log("02. Listar heróis");

    const opcao = pegarNumero("\nDigite a opção desejada: ");

    switch (opcao) {
        case 1:
            console.clear();
            menuCriarHeroi();
            break;
        case 2:
           console.clear();
            listarHerois();
            break;
        default:
            console.log("\nDigite uma opção válida!");
            break;
    }
    loopFinalizar();
}

function loopFinalizar() {
    while (true) {
        const op = pegarNumero("\nDigite 1 para finalizar ou 0 para continuar: ");

        if (op === 1) {
            console.log("Programa encerrado!");
            break;
        } else if (op === 0) {
            console.clear();
            menu();
        }
    }
}

function menuCriarHeroi() {
    console.log("01. Criar Herói\n");

    const nome = prompt("Digite o nome: ");
    const idade = prompt("Digite a idade: ");

    console.log("Selecione o tipo do herói:");
    console.log("   1. Mago");
    console.log("   2. Guerreiro");
    console.log("   3. Monge");
    console.log("   4. Ninja\n");

    const tipo = selecionarTipo();

    const novoHeroi = new Heroi(nome, idade, tipo);
    novoHeroi.atacar();
    listaHerois.push(novoHeroi);
}

function selecionarTipo() {
    while (true) {
        const valor = pegarNumero("Digite um valor: ");

        switch (valor) {
            case 1: return "mago";
            case 2: return "guerreiro";
            case 3: return "monge";
            case 4: return "ninja";
            default:
                console.log("Digite um valor entre 1 e 4!\n");
        }
    }
}

function listarHerois() {
    console.log("02. Listar Heróis\n");

    listaHerois.forEach((heroi, index) => {
        exibirHeroi(index, heroi);
    });
}

function exibirHeroi(codigo, heroi) {
    console.log(`- Herói ${codigo}\n`);
    console.log(`Nome   : ${heroi.nome}`);
    console.log(`Idade  : ${heroi.idade}`);
    console.log(`Tipo   : ${heroi.tipo}`);
    console.log(`Ataque : ${heroi.ataque}`);
    console.log(`--------------------------`);
}

function pegarNumero(mensagem) {
    while (true) {
        const valor = parseInt(prompt(mensagem));

        if (!isNaN(valor)) {
            return valor;
        } else {
            console.log("Digite um valor numérico válido!\n");
        }
    }
}

function definirAtaque(tipo) {
    switch (tipo) {
        case "mago": return "magia";
        case "guerreiro": return "espada";
        case "monge": return "artes marciais";
        case "ninja": return "shuriken";
        default: return "ataque desconhecido";
    }
}
