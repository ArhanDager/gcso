var car

var wall

var speed = random(10,20)

var weight = random(400,1500)

var deformation = 0.5*weight*speed*speed/22500

function setup() {
  createCanvas(800,400);
  car = createSprite(400, 200, 50, 50);
  wall = createSprite(700,200)
  car.velocityX = speed
}

function draw() {
  background(255,255,255);  
  
  if(car.isTouching(wall) && deformation>180 ){
car.shapecolour = "red"

  }
  else if (deformation < 180 && deformation >80 ){
    car.shapecolour = "yellow"
  }
  else if(deformation < 80){

   car.shapecolour = "green" 
  }
  
  
  drawSprites();
}