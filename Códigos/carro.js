//Carro 1
let xCarro = 600;
let yCarro = 40;

// Carro 2
let xCarro2 = 600;
let yCarro2 = 96;

//Carro 3
let xCarro3 = 600;
let yCarro3 = 150;

function mostraCarro(){
    image(imagemCarro, xCarro, yCarro, 50, 40);
    image(imagemCarro2, xCarro2, yCarro2, 50, 40);
    image(imagemCarro3, xCarro3, yCarro3, 50, 40);
}

function movimentaCarro(){
    xCarro -= 2;
    xCarro2 -= 5;
    xCarro3 -= 3.5;
}

function voltaPosicaoInicialCarro(){
    if(xCarro < -50){
        xCarro = 600
    }
    if(xCarro2 < -50){
        xCarro2 = 600
    }
    if(xCarro3 < -50){
        xCarro3 = 600
    }
}