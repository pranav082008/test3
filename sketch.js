var runner1,runner2, path, jackson, left_boundary, right_boundary;

function preload(){
 
  jakeImg=loadAnimation("Runner1.png", "Runner2.png")
  path=loadImage("path.png");


function setup(){
  createCanvas(400,400);
  
  path=createSprite(200,200);
  path.addImage(pathImg);
  path.velocityY=5;
  path.y=path.height/30;
  
  jackson=createSprite(180,340,50,170);
  jackson.addAnimation("running", jakeImg);
  left_boundary=createSprite(0,300,100,600);
 
  right_boundary=createSprite(390,300,80,600);
 
  left_boundary.visible=false;

  right_boundary.visible=false;
}

function draw() {
  background(0);
  textSize(10);
  
  path.velocityY=5;
  jackson.x=World.mouseX;
 
  if(path.y>400) {
  path.y=height/2 ;
  
 }
  
}
  jackson.collide(left_boundary);
  jackson.collide(right_boundary);
  edges=createEdgeSprites();
  jackson.collide(edges[3]);

 
  drawSprites();
}

