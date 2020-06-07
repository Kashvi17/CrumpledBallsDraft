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
	paper = new Paper(150,630,40,40);

	Engine.run(engine);
  
}


function draw() {
  rectMode(CENTER);
  background(0);
  //ellipseMode(RADIUS);
  //ellipse(paper.position.x, paper.position.y, 50, 50);
  paper.display();

  drawSprites();
 
}

function keyPressed(){
    if (keyDown === UP_ARROW){
        Matter.Body.applyForce(paper.body,paper.body.position,{x:85,y:-85})
    }
}





