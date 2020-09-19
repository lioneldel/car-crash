

var car,wall;
var speed ,wieght;



function setup() {
  createCanvas(1600,400);
   car =createSprite(50, 200, 50, 50);
   wall=createSprite(1550,200,100,20);
   
   speed=random(50,90);
   wieght=radom(400,1500);
   wieght.shapeColor(80,80,80);
car.velocityX=speed;

}

function draw() {
  background(255,255,255);
if(wall.x-car.x<(wall.width+car.width)/2)
{
  car.velocityX=0;
  var deformation =0.5*speed*wieght*speed/22500;
  if(deformation>180){
    car.shapeColor=color(250,0,0);

  }
if(deformation<180&&deformation>100)
{
  car.shapeColor=color(200,230,0);

}
if(deformation<100)
{
  car.shapeColor=color(0,250,0)

}

}  
  





  drawSprites();
}