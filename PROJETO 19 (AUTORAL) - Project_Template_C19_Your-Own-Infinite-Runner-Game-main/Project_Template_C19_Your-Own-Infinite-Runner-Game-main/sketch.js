var space, spaceImg
var foguete, fogueteImg
var asteroide, asteroideImg
var gameState = "play"
var pontos = 0




function preload(){
  fogueteImg = loadImage("foguete.png")
  spaceImg = loadImage("space.png")
  asteroideImg = loadImage("asteroide.png")

}

function setup() {
  createCanvas(600, 600);
  space = createSprite(600,600,600,600)
  space.addImage("space", spaceImg)
  foguete = createSprite(300,400)
  foguete.addImage("foguete", fogueteImg)
  foguete.scale = 0.08
  space.velocityY = 2
  asteroideGroup = new Group()
  

  


  
}

function draw() {
  background("white")

  if (gameState == "play") {

    if (space.y > 600) {
    space.y = 100
    }
  
    asteroides()

    if(keyDown("left_arrow")){
    foguete.velocityX = -2
    }

    if(keyDown("right_arrow")){
    foguete.velocityX = 2
    }
  
    if(foguete.isTouching(asteroideGroup)) {
    foguete.destroy()
    gameState = "end"
    }

    if(frameCount % 100 == 0) {
      pontos = pontos + 10
      textSize(20)
      fill("red")
      text("score:"+pontos, 50,50)
      

    }
    
    drawSprites()

  } else if(gameState == "end") {
    background("black")
    textSize(40)
    text("Game over", 170,300)
    fill("red")

  }
  


}



function asteroides() {

  if(frameCount % 200 == 0) {
    asteroide = createSprite(Math.round(random(100, 500)), -100)
    asteroide.velocityY = 3
    asteroide.lifetime = 800
    asteroide.addImage(asteroideImg)
    asteroide.scale = 0.15
    asteroideGroup.add(asteroide)
  }

}  
