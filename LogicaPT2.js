const prompt = require('prompt-sync')();
console.log("Seja bem-vindo ao calculador de Partidas ranqueadas.")


function saldoDeVitorias(){
    let qtdVitorias = parseInt(prompt("Insira a sua quantidade de vitórias na ranked: "))
    let qtdDerrotas = parseInt(prompt("Insira a sua quantidade de Derrotas na ranked: "))

    let saldoVitoria = qtdVitorias - qtdDerrotas;
    let rank = rankDoJogador(qtdVitorias);
    console.log(`O Herói tem um saldo de vitórias de: ${saldoVitoria}, está no rank ${rank}`);
    return saldoVitoria;
    
    
}

function rankDoJogador(qtdVitorias){
    if(qtdVitorias <10){
        rank = "Ferro";
    }else if(qtdVitorias >=11 && qtdVitorias <=20){
        rank = "Bronze";
    }else if(qtdVitorias >=21 && qtdVitorias <=50){
        rank = "Prata";
    }else if(qtdVitorias >=51 && qtdVitorias <=80){
        rank = "Ouro";
    }else if(qtdVitorias >=81 && qtdVitorias <=90){
        rank = "Diamante";
    }else if(qtdVitorias >=91 && qtdVitorias <=100){
        rank = "Lendário";
    }else{
        rank = "Imortal";
    }
    return rank;
}

saldoDeVitorias()

