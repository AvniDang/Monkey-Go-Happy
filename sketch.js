//Global Variables
var BananaImage;
var ObstacleImage;
var backg,BackgroundImage;
var Monkey;
var score = 0;

function preload(){
  
 monkey =  loadAnimation("Monkey_01.png",             "Monkey_02.png","Monkey_03.png","Monkey_04.png","Monkey_05.png","Monkey_06.png", "Monkey_04.png", "Monkey_05.png", "Monkey_09.png", "Monkey_10.png");

  BackgroundImage = loadAnimation("jungle.jpg");
  
  ObstacleImage = loadImage("stone.png");
  
  BananaImage = loadImage("Banana.png");
}


function setup() {
  createCanvas(600,300);
  
  backg = createSprite(200,10,90,30);
  backg.addAnimation("background", BackgroundImage);
  
  
  Monkey = createSprite(50,200);
  Monkey.addAnimation("running", monkey);
  Monkey.scale = 0.2;
  
  ObstacleGroup = new Group();
  
  BananaGroup = new Group();
  
}

function draw(){
  
  background(255); 

  backg.velocityX = -5;
  if(backg.x < 100){
   backg.x = backg.width/2;
  }
  
  if(BananaGroup.isTouching(Monkey)){
    BananaGroup.destroyEach();
    score = score+4;
  } 
  
  if(ObstacleGroup.isTouching(Monkey)){
    Monkey.scale = 0.2;
    score = score-2;
  }
  
  Food();
  Obstacle();
  
  drawSprites();
  stroke("white");
  textSize(20);
  fill("white");
  text("score:" + score, 400,100);
  
}

function Food(){
  if(frameCount % 80 === 0){
    var banana = createSprite(600,250,40,10);
    banana.y = random(120,200);
    banana.addImage(BananaImage);
    banana.scale = 0.05;
    banana.velocityX = -4;
    banana.lifetime = 300;
    BananaGroup.add(banana);
  }
}

function Obstacle(){
  if(frameCount % 80 === 0){
    var obstacle = createSprite(800,250)
    //obstacle.y = random(400);
    obstacle.addImage(ObstacleImage);
    obstacle.scale = 0.2
    obstacle.velocityX = -5;
    obstacle.lifetime = 300;
    ObstacleGroup.add(obstacle);
  }
}



