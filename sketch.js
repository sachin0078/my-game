var bg_img
var screen2,img1


function preload(){
bg_img=loadImage("bg1.png")
img1=loadImage("bg2.png")
}

function setup() {
  createCanvas(displayWidth-50,displayHeight-150);
 screen2=createSprite(displayWidth/2,displayHeight-300,1000,300);
 screen2.addImage(img1)
 screen2.width=displayWidth
 
}

function draw() {
  background(bg_img);  

  
  drawSprites();

}
