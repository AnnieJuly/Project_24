
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;

var engine, world;
var ball;
var box1,box2,box3;
var ball;

function setup(){
  +createCanvas(1200,400);
  engine = Engine.create();
  world = engine.world;

  ball=createSprite(200,300,20,20);
  ball.shapeColor="violet"
  
  box1=createSprite(400,650,200,20);
  box1.shapeColor="lightblue";
  
  box2=createSprite(300,620,20,100);
  box2.shapeColor="lightblue";

  box3=createSprite(500,620,20,100);
  box3.shapeColor="lightblue";

  
  groundSprite=createSprite(width/2, height-35, width,10);
  groundSprite.shapeColor=color(255)

  ball = Bodies.circle(width/2 , 200 , 5 , {restitution:0, isStatic:true});
  World.add(world, ball);
  
  box1 = Bodies.rectangle(width/2 , 200 , 5 , {restitution:0, isStatic:true});
  World.add(world, box1);
  
    ground = Bodies.rectangle(width/2, 650, width, 10 , {isStatic:true} );
   World.add(world, ground);


}

function draw(){
  background(0);
  Engine.update(engine);
 
  drawSprites();
}
function keyPressed() {
    if (keyCode === UP_ARROW) {
     
       Matter.Body.applyForce(ball.body,ball.body.position,{x:85,y:85});
     }
   }
