var movingRect;
var fixedRect;
var gameobject1;
var gameobject2;


function setup() {
  createCanvas(400,400);
  movingRect = createSprite(300, 200, 50, 50);
  movingRect.shapeColor = "red";
 // movingRect.velocityX=-1;
  fixedRect = createSprite(200, 200, 50, 50);
  fixedRect.shapeColor = "red";
 // fixedRect.velocityX=1;
 gameobject1 = createSprite(80,229,10,30);
 gameobject1.shapeColor = "red";
 gameobject2 = createSprite(120,329,10,30);
 gameobject2.shapeColor = "red";

}

function draw() {
  background(255,255,255);  
  movingRect.x = World.mouseX;
  movingRect.y = World.mouseY;
  
if(isTouching(movingRect,gameobject1)){

movingRect.shapeColor = "green"
gameobject1.shapeColor = "green"

}
else{
  movingRect.shapeColor = "red"
  gameobject1.shapeColor = "red"


}

  drawSprites();
}
