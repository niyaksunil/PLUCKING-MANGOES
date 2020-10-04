// created the constant variables
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;
const Constraint = Matter.Constraint;

// creating the variables
var tree;
var ground;
var boy,chain;
var mango1,mango2,mango3,mango4,mango5,mango6,mango7,mango8,mango9,mango10,mango11;
var chain;

function setup() {
	createCanvas(800, 600);

// created the engine and the world
	engine = Engine.create();
	world = engine.world;

// created the ground, tree and the boy
	ground = new Ground(width/2, height-23, width, 10);
  tree = new Tree(540,397, 1,1);
  boy = new Boy(106,513,10, 10);
  
// created the mangoes
	mango1 = new Mango(526,310,10);
	mango2 = new Mango(668,337,10);
	mango3 = new Mango(504,363,10);
	mango4 = new Mango(540,253,10);
	mango5 = new Mango(435,342,10);
	mango6 = new Mango(589,298,10);
	mango7 = new Mango(580,341,10);
	mango8 = new Mango(612,321,10);
	mango9 = new Mango(479,279,10);
	mango10 = new Mango(580,254,10);

// created the stone and the chain  
  stone =  new Stone(60,448,20);
	chain = new Chain(stone.body,{x:60,y:448});
  
	Engine.run(engine);
  
}

function draw() {
  rectMode(CENTER);
  background(255);
  
// displaying the text 
  textSize(25);
  fill("black")
  text('Click and drag the stone to throw', 45, 37);
  text('Click SPACE BAR to replay', 45, 70);

//displaying the ground, tree and boy 
  ground.display();
  tree.display();
  boy.display();

// displaying the mangoes
  mango1.display();
  mango2.display();
  mango3.display();
  mango4.display();
  mango5.display();
  mango6.display();
  mango7.display();
  mango8.display();
  mango9.display();
  mango10.display();

// displaying the stone, chain 
  stone.display();
  chain.display();

// detect the collision between the stone and mango 
  detectCollision(stone,mango1);
  detectCollision(stone,mango2);
  detectCollision(stone,mango3);
  detectCollision(stone,mango4);
  detectCollision(stone,mango5);
  detectCollision(stone,mango6);
  detectCollision(stone,mango7);
  detectCollision(stone,mango8);
  detectCollision(stone,mango9);
  detectCollision(stone,mango10);

  drawSprites();
 
}

// creating the function mouseDragged
function mouseDragged(){
	
  Matter.Body.setPosition(stone.body, {x:mouseX,y:mouseY});
   
}
  
// creating the function mouseReleased
function mouseReleased(){

  chain.fly();  

}

// creating the function detectCollision
function detectCollision (lstone,lmango){

  mangoBodyPosition = lmango.body.position
  stoneBodyPosition = lstone.body.position

  var distance = dist(stoneBodyPosition.x, stoneBodyPosition.y,mangoBodyPosition.x,mangoBodyPosition.y);

  if(distance<=lmango.radius+lstone.radius){
    Matter.Body.setStatic(lmango.body,false)
  }
}

// creating the function keyPressed
function keyPressed(){
  if(keyCode === 32 ){
    Matter.Body.setPosition(stone.body,{x:60,y:448});
    chain.attach(stone.body);
  }
} 
