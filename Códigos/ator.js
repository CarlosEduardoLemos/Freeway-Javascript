//Código do ator

let yAtor = 366;

function mostraAtor(){
    image(imagemDoAtor, 100, 366, 30, 30);
}

function movimentaAtor(){
    if(keyIsDown(UP_ARROW)){
        yAtor -= 3;
    }
    if(keyIsDown(DOWN_ARROW)){
        yAtor += 3;
    }
}
