let imagemDaEstrada;
let imagemDoAtor;
let imagemCarro;

//Carro
let xCarro = 420;

function preLoad(){
    imagemDaEstrada = loadImage("imagens/estrada.png");
    imagemDoAtor = loadImage("imagens/ator-1.png");
    imagemCarro = loadImage("Imagens/carro-1.png");
}

function setup(){
    createCanvas(500,400);
}

function draw(){
    background(imagemDaEstrada);
    mostraAtor();
    mostraCarro();
    movimentaCarro();
}

function mostraAtor(){
    image(imagemDoAtor, 100, 366, 30, 30);
}

function mostraCarro(){
    image(imagemCarro, xCarro, 40, 50, 40);
}

function movimentaCarro(){
    
}

