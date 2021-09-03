const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Constraint = Matter.Constraint;


var blower, blowerMouth
var ball;
var button;

function setup() {
  createCanvas(1000,600);

  engine = Engine.create();
  world = engine.world;

  blower = new Blower(width/2 + 100, height/2 + 100, 100, 100);
  blowerMouth = new BlowerMouth(blower.body.position.x - 125, blower.body.position.y + 40, 150, 20);
  ball = new Ball(blower.body.position.x, blower.body.position.y - 200);

  button = createButton("Press To Blow Air");
  button.position(width/2, height - 100);
  button.class("blowButton")
  button.mousePressed(blow);
}

function draw() {
  background(181);

  Engine.update(engine);

  blower.show();
  blowerMouth.show();
  ball.show();
  drawSprites();
}

function blow(){
  Matter.Body.applyForce(ball.body, {x : 0, y : 0}, {x : 0, y : -0.05});
}