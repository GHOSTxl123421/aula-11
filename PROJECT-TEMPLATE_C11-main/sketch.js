var Mar,barco;

function preload(){
   barcoImg = loadAnimation('ship-1.png','ship-2.png','ship-3.png','ship-4.png'); 
   MarImg = loadImage ('sea.png');
}

function setup(){
  createCanvas(400,400);
  Mar =  createSprite(100,0.50,50,60);
  Mar.addImage(MarImg)
  barco= createSprite (100, 170, 5, 5);
  barco.addAnimation ('ship',barcoImg);
  Mar.velocityX= -2;
  Mar.x=2000;
  Mar.Scale= 0.2;
  barco.scale = 0.1;
  
  }

function draw() {
  background("blue");
  if(Mar.x < 0 ){
    Mar.x= Mar.Width/2;
  }
  
  
  
  
  
    
    
  
  
  
  
  drawSprites();

 
}
