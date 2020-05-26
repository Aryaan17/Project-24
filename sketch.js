var ground, engine, world, body, d1, d2, d3;
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;
const Render = Matter.Render;
var paperObject;

function setup() {
	var canvas = createCanvas(800, 400);
	engine = Engine.create();
	world = engine.world;
		
	paperObject = new Paper(100, 150, 15);
	ground = new Ground(400, 400, 1000, 20);

	d1 = Bodies.rectangle(400, 350, 10, 80, {isStatic : true});
	World.add(world, d1);
	d2 = Bodies.rectangle(475, 390 , 140, 10, {isStatic : true})
	World.add(world, d2);
	d3 = Bodies.rectangle(550, 350, 10, 80, {isStatic : true});
	World.add(world, d3);

	
	Engine.run(engine);
  
}


function draw() {
	background("yellow");
	Engine.update(engine);
	paperObject.display();
	ground.display();

	rect(d1.position.x, d1.position.y, 10, 80);
	rect(d2.position.x, d2.position.y, 140, 10);
	rect(d3.position.x, d3.position.y, 10, 80);

	keyPressed();
}

function keyPressed() {
	if(keyCode === UP_ARROW){
		Matter.Body.applyForce(paperObject.body, paperObject.body.position,{x:1,y:-3});
	}
}



