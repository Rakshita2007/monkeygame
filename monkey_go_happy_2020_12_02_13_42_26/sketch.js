
var monkey , monkey_running
var banana ,bananaImage, obstacle, obstacleImage
var FoodGroup, obstacleGroup
var score

function preload(){
  
  
  monkey_running =            loadAnimation("sprite_0.png","sprite_1.png","sprite_2.png","sprite_3.png","sprite_4.png","sprite_5.png","sprite_6.png","sprite_7.png","sprite_8.png")
  
  bananaImage = loadImage("banana.png");
  obstacleImage = loadImage("obstacle.png");
 
}



function setup() {
   //create monkey
  monkey=createSprite(80,350,20,20);
  monkey.addAnimation("moving",monkey_running);
  monkey.scale=0.1
  
  //create ground
  ground=createSprite(400,350,900,10);
  ground.velocityX=-4;
  ground.x=ground.width/2;
  console.log(ground.x)
  
}


function draw() {
   background(225);
   if(keyDown("space")){
       monkey.velocityY=-12;
       
       monkey.velocityY= monkey.velocityY+0.8
      }
  
   if(ground.x <0){
     ground.x=ground.width/2;
   }
    
   monkey.collide(ground);
   
   food();
   obstacles();

 
   drawSprites(); 
 
  var survivalTime=0
    stroke("white");
    textSize(20);
    fill("white");
    text("Score:" + score,500,50);
    
    stroke("black");
    textSize(20);
    fill("black");
    survivalTime=Math.ceil(frameCount/frameRate())
    text("Survival Time:" + survivalTime,100,50);
}

  function food(){
  if(frameCount % 80 === 0){
    var banana = createSprite(100,300,40,10);
    banana.y= Math.round(random(100,200));
    banana.addImage(bananaImage);
    banana.scale=0.05;
    banana.velocityX= -3
    
    banana.lifeTime=350;
  }
  }
  function obstacles(){
    if(frameCount % 300 === 0){
      var obstacle = createSprite(500,320,20,30);
      obstacle.addImage(obstacleImage);
      obstacle.scale= 0.2;
      obstacle.lifeTime= 300;
      obstacle.velocityX=-6
    }
    
  }

     
     
     
     
   






