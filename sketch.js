var runner, runner_running, edges;
var path;
var drink;
var coin;
var bomb;
function preload(){
  //pre-load images
  pathI = loadImage("path.png");
  runner_running = loadAnimation("Runner-1.png","Runner-2.png");
  drink = loadImage("energyDrink.png");
  coin = loadImage("coin.png");
  bomb = loadImage("bomb.png");
}

function setup(){
  createCanvas(400,400);
  //create sprites here
  path = createSprite(200,400);
  runner = createSprite(200,200,10,30)
  
  path.y = path.width /2;
path.velocityY = 4;
  
  runner.addAnimation("running", runner_running);
  edges = createEdgeSprites();
 
  path.addImage(pathI);
  
  
}

function draw() {
  background(220);
  //path.velocityY = 4;
  //path.scale = 1.2;
  runner.scale = 0.1
  if(keyDown("right")){
    runner.x = runner.x + 2;
  }
 
  if(keyDown("left")){
    runner.x = runner. x -2;
   }

    if(keyDown("up")){
      runner.y = runner.y - 2;

      
    }
    if(keyDown("down")){
    runner.y = runner.y + 2;

    path.velocityY = 2

    if (path.y < 0) {
      path.y = path.width / 2;
      }
  }
            
  

  drawSprites();
} 

