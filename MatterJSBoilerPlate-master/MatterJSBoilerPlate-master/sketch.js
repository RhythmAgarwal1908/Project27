
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;
const Constraint = Matter.Constraint;


var bobobject1,bobobject2,bobobject3,bobobject4;
var roof1;
var rope1,rope2,rope3,rope4;
function preload()
{
	
}

function setup() {
	createCanvas(800, 700);


	engine = Engine.create();
	world = engine.world;

	//Create the Bodies Here.
	bobobject1 = new bob(250,450,65)
	bobobject2 = new bob(315,450,65)
	bobobject3 = new bob(380,450,65)
	bobobject4 = new bob(446,450,65)
    roof1 = new roof(340,250,366,30)
	rope1 = new rope(bobobject1.body,roof1,-65*2,0);
	rope2 = new rope(bobobject1.body,roof1,-65*2,0);
	rope3 = new rope(bobobject1.body,roof1,-65*2,0);
	rope4 = new rope(bobobject1.body,roof1,-65*2,0);
	Engine.run(engine);
  
}


function draw() {
  rectMode(CENTER);
  background("grey");
  bobobject1.display();
  bobobject2.display();
  bobobject3.display();
  bobobject4.display();
  roof1.display();
  rope1.display();
  rope2.display();
  rope3.display();
  rope4.display();
  drawSprites();
 
}



