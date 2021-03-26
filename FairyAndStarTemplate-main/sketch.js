const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;


var fairy,fairyImage;
var star,starImage;
var starNight,starNightImage

function preload()
{
   //preload the images here
fairyImage=loadImage("images/c.png");
starImage=loadImage("images/b.png");
starNightImage=loadImage("images/A.jpg");
}

function setup() {
	createCanvas(800, 750);


  engine = Engine.create();
	world = engine.world;

  var fairy_options={isStatic:true}

starNight=createSprite(400,375,800,750);
starNight.addImage(starNightImage);

star=createSprite(690,40,10,10);
star.addImage(starImage);

fairy=createSprite(50,690,10,10);
fairy.addImage(fairyImage);
World.add
Engine.run(engine);
  

}


function draw() {

  background("black");


if(keyDown("right")){
fairy.velocityX=fairy.velocityX+2
}

if(keyDown("left")){
fairy.velocityX=fairy.velocityX-2
}
if(fairy.body.positon.x>690){
  Body.isStatic(fairy,false)
}
drawSprites();
}






