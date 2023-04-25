//Código do carro
let xCarro = 600;

function mostraCarro(){
    image(imagemCarro, xCarro, 40, 50, 40);
}

function movimentaCarro(){
    xCarro -= 2;
}
