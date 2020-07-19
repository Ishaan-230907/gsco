var car,wall,speed,weight;

function setup() {
  createCanvas(1600,400);
 car= createSprite(50,200, 50, 50);
 wall=createSprite(1500,200,60,30);
 //wall.shapeColor(80,80,80);
 speed=random(55,90);
 weight=random(400,1500);
}

function draw() {
  background("black");  

//car.velocityX=speed;



  drawSprites();
}