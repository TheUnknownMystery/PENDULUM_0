
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;
const Constraint = Matter.Constraint;

var holder, ball1, ball2, ball3, ball4, thread, thread2;
//var BobDiameter=50;
function preload() {

}

function setup() {
  createCanvas(800, 900);

  var bobDiameter = 70;
  engine  = Engine.create();

  world   = engine.world;
  holder  = new Roof(250, 220, 320, 40);

  ball1   = new bob(240, 460, 50, 50);

  thread  = new chain(ball1.body, holder.body, 200, 220);


  ball2   = new bob(250, 470, 50, 50);

  thread2 = new chain(ball2.body, holder.body, 400,240);


  ball3   = new bob(250, 480, 50, 50);

  thread3 = new chain(ball3.body, holder.body, 210,220);





  Engine.run(engine);

}


function draw() {
  rectMode(CENTER);

  background(" lightgrey ");

  holder.display();

  ball1.display();

  thread.display();

  ball2.display();

  thread2.display();

  ball3.display();

  thread3.display();

}



