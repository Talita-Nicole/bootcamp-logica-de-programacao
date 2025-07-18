let herois = [
    ["Talita", 2000],
    ["Marcos", 3000],
    ["Julia", 6000],
    ["Guilherme", 10000]
]

for (let i = 0; i < herois.length; i++){
    let nome = herois[i][0];
    let xp = herois[i][1];
    console.log(`Desafio Classificador de nível de Herói ${i+1}`);
    console.log(`O Herói de nome ${nome} está no nível de ${ClassificarNivel(xp)}\n`);
}

function ClassificarNivel (xp){
    let nivel;
    
    if(xp <= 1000){
    nivel = "Ferro";
    }
    else if(xp <= 2000){
        nivel = "Bronze";
    }
    else if( xp <= 5000){
        nivel = "Prata";
    }
    else if(xp <= 7000){
        nivel = "Ouro";
    }
    else if(xp <= 8000){
        nivel = "Platina";
    }
    else if(xp <= 9000){
        nivel = "Ascedente";
    }
    else if(xp <= 10000){
        nivel = "Imortal";
    }
    else{
        nivel = "radiante";
    }

    return nivel;
}