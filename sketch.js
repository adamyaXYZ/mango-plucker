
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;
const Constraint = Matter.Constraint;

function preload()
{
	boy = loadImage("boy.png")
	tree = loadImage("tree.png")
}

function setup() {
	createCanvas(1600, 700);


	engine = Engine.create();
	world = engine.world;

	//Create the Bodies Here.
	surface = new Ground(800,600,width,30)
	
	rock = new stone(60,400)


	sling = new SlingShot(rock.body,{x:60,y:430})

	mango1 = new Mango(863,271)
	mango2 = new Mango(991,272)
	mango3 = new Mango(1016,218)
	mango4 = new Mango(1123,340)
	mango5 = new Mango(964,350)
  
}


function draw() {

  Engine.update(engine);

  rectMode(CENTER);
  background(200);

  imageMode(CENTER)
  image(boy,75,530)
  image(tree,900,600)
  
  surface.display()

  rock.display()

  sling.display();

  mango1.display()
  mango2.display()
  mango4.display();
  mango3.display();
  mango5.display()
  

  static(rock,mango1)
  static(rock,mango2)
  static(rock,mango3)
  static(rock,mango4)
  static(rock,mango5)

  drawSprites()

  console.log(mouseX);
  console.log(mouseY);

  

}

function mouseDragged () {
    Matter.Body.setPosition(rock.body,{x:mouseX,y:mouseY})
}
function mouseReleased (){
    sling.fly()
}

function keyPressed() {
    if (keyCode === 32) {
        sling.attach(rock.body);
    }
}
function static(a,b) {	
	m = b.body.position;
	s = a.body.position
	var distance = dist(s.x,s.y,m.x,m.y)
	if(distance<=b.r+a.r)
	{
		Matter.body.setStatic(b.body,false)
	}

}

