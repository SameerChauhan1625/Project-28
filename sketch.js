
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;
const Constraint = Matter.Constraint; 

var ground;
var stone;
var sling;
var boy,boyImage;
var mango1,mango2,mango3,mango4,mango5,mango6,mango7,mango8;
var tree,treeImage;

function preload()
{
	boyImage = loadImage("boy.png");

	treeImage = loadImage("tree.png");
}

function setup() {
	createCanvas(1200, 700);

	engine = Engine.create();
	world = engine.world;

	ground = new Ground(600,600,1200,30);

	stone = new Stone(600,300,6);

	sling = new Sling(stone.body,{x:150,y:490});

	boy = createSprite(200,535,10,10);
	boy.addImage(boyImage);
	boy.scale = 0.09;

	mango1 = new Mango(800,200,6);
	mango2 = new Mango(900,200,6);
	mango3 = new Mango(950,300,6);
	mango4 = new Mango(850,320,6);
	mango5 = new Mango(1000,180,6);
	mango6 = new Mango(1100,340,6);
	mango7 = new Mango(1050,270,6);
	mango8 = new Mango(750,300,6);

	tree = createSprite(900,350,10,10);
	tree.addImage(treeImage);
	tree.scale = 0.4;
	tree.setCollider("rectangle",0,0,10,10);
	tree.debug = true;

	Engine.run(engine);
  
}


function draw() {
  rectMode(CENTER);
  background("white");
  
  ground.display();

  sling.display();

  drawSprites();

  stone.display();

  mango1.display();
  mango2.display();
  mango3.display();
  mango4.display();
  mango5.display();
  mango6.display();
  mango7.display();
  mango8.display();

  detectollision(stone,mango1);
  detectollision(stone,mango2);
  detectollision(stone,mango3);
  detectollision(stone,mango4);
  detectollision(stone,mango5);
  detectollision(stone,mango6);
  detectollision(stone,mango7);
  detectollision(stone,mango8);
}

function mouseDragged(){
    Matter.Body.setPosition(stone.body,{x:mouseX,y:mouseY});
}

function mouseReleased(){
    sling.fly();
}

function detectollision(lstone,lmango){
	mangoBodyPosition = lmango.body.position
	stoneBodyPosition = lstone.body.position

	var distance=dist(stoneBodyPosition.x,stoneBodyPosition.y,mangoBodyPosition.x,mangoBodyPosition.y)
		if(distance<=lmango.r+lstone.r){
			Matter.Body.setStatic(lmango.body,false);
			console.log("i am here");
		}
}