var quadrado;



function setup() {
  createCanvas(1386,789);
  quadrado = createSprite(200,200,50,50);

}


function draw() 
{
  background(30);
  if(keyDown('w')) {
    quadrado.y += -4;
  }
  if(keyDown('s')) {
    quadrado.y += 4;
  }
  if(keyDown("d")) {
    quadrado.x += 4;
  }
  if(keyDown("a")){
    quadrado.x += -4
  }
  drawSprites();
}




