let yCarros = [40, 96, 150];
let xCarros = [600, 600, 600];
let velcidadeCarros = [2, 5, 3.5];

function mostraCarro(){
    for(let i = 0; i< imagemCarros.length; i++){
        image(imagemCarros[i], xCarros[i], yCarros[i], 50, 40);
    }
}

function movimentaCarro(){
    for(let i = 0; i<imagemCarros.length; i++){
        xCarros[i] -= velcidadeCarros[i];
    }  
}

function voltaPosicaoInicialCarro(){
    for(let i = 0; i<imagemCarros.length; i++){
        if(passouTodaTela(xCarros[i])){
            xCarros[i] = 600
        }
    }
}

function passouTodaTela(xCarro){
    return xCarro[i] < -50;
}
