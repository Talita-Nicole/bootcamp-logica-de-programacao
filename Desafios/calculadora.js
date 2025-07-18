const prompt = require('prompt-sync')({sigint: true});

function main(){
    console.log("-- Calculadora de partidas Rankeadas --\n");

    while(true){
        calculadora();

        let opcao;
        while(true){
            opcao = pegarValor("\nDeseja calcular outro Rank?\n[1] Sim\n[0] Não\n- ");
            if(opcao == 0 || opcao == 1){
                break;
            }
            console.log("Digite uma opção válida!");
        }
        
        if(opcao == 0){
            console.log("\nPrograma encerrado!");
            break;
        }
    }
}

function calculadora(){
    let vitorias = pegarValor("Digite o número de vitórias: ");
    let derrotas = pegarValor("Digite o número de derrotas: ");
    let saldo = calcularSaldo(vitorias, derrotas);
    let nivel = calcularNivel(vitorias);

    console.log(`\n-> O Herói tem de saldo ${saldo} e 0está no nível de ${nivel}`)
}

function pegarValor(mensagem){
    let valor;

    while(true){
        valor = parseInt(prompt(mensagem));
        
        if(isNaN(valor) || valor < 0){
            console.log("Digite um valor válido.\n");
        }else{
            break;
        }
    }
    return valor;
}

function calcularSaldo(vitorias, derrotas){
    return vitorias - derrotas;
}

function calcularNivel(vitorias){
    if(vitorias < 11){
        return "Ferro";
    }
    else if(vitorias < 21){
        return "Bronze";
    }
    else if(vitorias < 51){
        return "Prata";
    }
    else if(vitorias < 81){
        return "Ouro";
    }
    else if(vitorias < 91){
        return "Diamante";
    }
    else if(vitorias < 101){
        return "Lendário";
    }
    else{
        return "Imortal";
    }
}

main();