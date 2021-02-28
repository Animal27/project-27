
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;
var bob,bob2,bob3,bob4,bob5

function preload()
{
	
}

function setup() {
	createCanvas(800, 700);


	engine = Engine.create();
	world = engine.world;

	bob = new Bob(50,100,100);
	bob2 = new Bob(50,100,30);
	bob3 = new Bob(80,100,30);
	bob4 = new Bob(110,100,30);
	bob5 = new Bob(140,100,30);
	ground= new Ground(400,300,500,30);


	Engine.run(engine);
  
}


function draw() {
  rectMode(CENTER);
  background(0);
  

  bob.display();
  bob2.display();
  bob3.display();
  bob4.display();
  bob5.display();
  ground.display();

  drawSprites();
 
}



