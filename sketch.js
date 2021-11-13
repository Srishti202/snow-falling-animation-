var bg;
var snow =[];
const Engine = Matter.Engine
const World = Matter.World
const Bodies = Matter.Bodies;
var world, engine;
function preload(){
bg= loadImage("snow3.jpg")
}
function setup() {
  createCanvas(800,400);
  engine=Engine.create()
  world= engine.world
  createSprite(400, 200, 50, 50);
}


function draw() {
  background(bg);  
  Engine.update(engine);
  if(frameCount%10==0){
    snow.push(new Snow(random(10,800),random(0,50)))
  }
  for(i=0;i<snow.length;i++){
    snow[i].display();
  }
  drawSprites();
}