
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;

var tree1;
var ground;
var boy;
var mango1, mango2, mango3, mango4, mango5, mango6, mango7, mango8, mango9, mango10, mango11;

function preload(){

}

function setup() {
	createCanvas(800, 700);

  

	engine = Engine.create();
	world = engine.world;

  tree1 = new tree(700,680,30,150)

  ground = new Ground(400,height,800,20)

  boy = new Boy(200,680,30,100)

  mango1 = new Mango(400,350,50,50)
     
	Engine.run(engine);
  
}


function draw() {
  rectMode(CENTER);
  background(0);
  Engine.update(engine);

  
  

  ground.display()
  tree1.display();
  boy.display();
  mango1.display();


  
  drawSprites();
 
}



