var jaxon;
var path, invisiblepath;
function preload(){
  //pre-load images
}

function setup(){
  createCanvas(400,400);
  //create sprites here
  jaxon = createSprite(200,200,380,40);
  jaxon.addAnimation("running",jaxon_running);
  jaxon.scale = 0.5;

  //moving background
  path = createSprite(200,200);
  path.addImage(pathImg);
 path.velocityY = 4;
 path.scale = 1.2;

 //create invisible ground
 invisiblepath = createSprite(200,190,400,10);
 invisiblepath.visible = false;

 

}

function draw() {
 
console.info("start of the draw function");
console.error("This is how error appers");
console.warn("A warning");

console.time();
 
for(var i=0; i<100; i++){
  console.log("Running Loop");
}
  
  
  //set backgroun color
  background(0);

 console.log("Draw frame is called:")
  console.log(jaxon.y)

  //jump when the space key is pressed
  if(keyDown("space")&& jaxon.y > = 362){
    jaxon.velocityY = -10;
  }

//add gravity
jaxon.velocityY = jaxon.velocityY + 0.8;
  
 if(path.x < 0){
   path.x = path.width/2;
 }
  
  jaxon.loadImg("Runner-1.png","Runner-2.png");
 
  //code to reset the background
 if(path.y > 400){
   path.y = height/2;
 }

//stop jaxon from fallig down
jaxon.collide(invisibleGround);

drawSprites();
console.timeEnd();
}
