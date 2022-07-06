var player,bg;
var fondo,cohete,meteorito,cohete_2;


function preload(){
fondo = loadImage("ESPACIO.jpg");
cohete = loadImage("111.png");
meteorito = loadImage("OIP1.jpg");
cohete_2 = loadImage("descarga1.png");
}


function setup(){
  createCanvas(windowWidth,windowHeight);

 bg = createSprite(displayWidth/2-20,displayHeight/2-40,20,20)
bg.addImage(fondo)
bg.scale = 1.1



player = createSprite(displayWidth-1150, displayHeight/2, 70, 70);
   player.addImage(cohete)
   player.scale = 0.5
   player.debug = true
   player.setCollider("rectangle",0,0,300,300)



obstaculo = createSprite(500,250,700,400);
obstaculo.addImage("meteoro",meteorito);
obstaculo.scale = 0.7;

}


function draw() {
    background(0); 
  
 
   //moving the player up and down and making the game mobile compatible using touches
if(keyDown("UP_ARROW")||touches.length>0){
  player.y = player.y-30
}

if(keyDown("DOWN_ARROW")||touches. length>0){
 player.y = player.y+30
}

if(keyDown("LEFT_ARROW")||touches.length>0){
  player.x = player.x-30
}
if(keyDown("RIGHT_ARROW")||touches.length>0){
  player.x = player.x+30
}

//release bullets and change the image of shooter to shooting position when space is pressed
if(keyWentDown("space")){
 
  player.addImage(cohete_2)
   
}

//player goes back to original standing image once we stop pressing the space bar
else if(keyWentUp("space")){
  player.addImage(cohete)
}

  
drawSprites();
  
  
  }