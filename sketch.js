var paper;
var box1;
var box2;
var box3;
var ground;

const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;
const Render = Matter.Render;

function preload(){}
	

function setup() {
	createCanvas(800, 700);

	engine = Engine.create();
	world = engine.world;

	//Create a Ground
	ground = createSprite(400,650,800,20);
	ground = Bodies.rectangle(width/2, 650, width, 10 , {isStatic:true} );
	ground.shapeColor = color(0, 255, 0);
	World.add(world, ground);

	//create paper
	paper = new Paper(150,630,40);

	//create dustbin
	box1 = new Dustbin(400, 633, 20, 20);
	box2 = new Dustbin(490, 590, 20, 100);
	box3 = new Dustbin(310, 590, 20, 100);
/*
	box1 = Bodies.rectangle(400, ground.y-17, 200, 20, {isStatic:true} );
    box2 = Bodies.rectangle(490, ground.y-60, 20, 100, {isStatic:true} );
    box3 = Bodies.rectangle(310, ground.y-60, 20, 100 , {isStatic:true} );
*/	
}

function draw() {
  rectMode(CENTER);
  background(0);
  //ellipseMode(RADIUS);
  //ellipse(paper.position.x, paper.position.y, 50, 50);
  paper.display();
  box1.display();
  box2.display();
  box3.display();

  drawSprites();
 
}

function keyPressed(){
    if (keyDown === UP_ARROW){
        Matter.Body.applyForce(paper.body,paper.body.position,{x:85,y:-85})
    }
}





