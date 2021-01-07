//creating the car and wall variables
var car, wall;

//creating the speed, weight and force variables
var weight, speed, force;

function setup() {
  //making the canvas
  createCanvas(1600,400); 
  
  //making the random variable numbers
  speed = random(50,90)
  weight = random(200,1500)

  //making the sprites
  car = createSprite(50,200,100,50);
  car.velocityX = speed;
  car.shapeColor="white";

  wall = createSprite(1500,200,60,height/2);
  wall.shapeColor=color(0, 200, 255);

}

function draw() {
  //setting the bg color
  background(0);  

  //detecting the collision between car and wall
  crashCheck();

  //displaying the sprites
  drawSprites();
}