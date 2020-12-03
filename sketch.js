var paperSprite, d1, d2, d3, ground, paper;
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;

function preload()
{
	
}

function setup() {
	createCanvas(1200, 300);
	background(0);
	
	engine = Engine.create();
	world = engine.world;

	//Create the Bodies Here.

	ground = new Ground(400,280,1800,height);
	
	d1 = new Dustbin(1000, 250, 200,20);
	d2 = new Dustbin(900, 200, 20,100);
	d3 = new Dustbin(1100, 200, 20,100);

	paper = Bodies.circle(200 , 260 , 5 , {isStatic:false, density:1.2, friction:0.5, restitution:0.3});
	World.add(world, paper);

	




	Engine.run(engine);
  
}


function draw() {
  rectMode(CENTER);
  background(0);
  Engine.update(engine);
  ground.display();
  d2.display();
  d3.display();
  d1.display();
  ellipseMode(CENTER);
  fill ("purple");
  ellipse(paper.position.x, paper.position.y,paper.radius);

  
  drawSprites();
 
}


