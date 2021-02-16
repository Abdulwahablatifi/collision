 var movingRect,fixedRect;
 function setup() {
  createCanvas(800,400);
 movingRect= createSprite (400, 200, 50, 50);
 movingRect.shapeColor="red";
 movingRect.velocityX=5;
 fixedRect=createSprite (650,200,50,50);
 fixedRect.shapeColor="yellow";
}

function draw() {
  background(255,255,255);  
  
    isTouching(fixedRect,movingRect);
bounceOff(fixedRect,movingRect);
  drawSprites();
}
function isTouching(object1,object2){
  if(
    (object1.x-object2.x<object1.width/2+object2.width/2)
    &&(object2.x-object1.x<object1.width/2+object2.width/2)
    &&(object1.y-object2.y<object1.height/2+object2.height/2)
    &&(object2.y-object1.y<object1.height/2+object2.height/2)
  )
    {
      object2.shapeColor="blue";
      object1.shapeColor="blue";

    }
    else{
      object2.shapeColor="yellow";
      object1.shapeColor="yellow";
    }
}
function bounceOff(object1,object2){
  if(
    (object1.x-object2.x<object1.width/2+object2.width/2)
    &&(object2.x-object1.x<object1.width/2+object2.width/2)
  ){
    object2.velocityX=(-1)*object2.velocityX;
  }
}
