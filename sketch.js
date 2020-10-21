
var food;
var dog;
var bg;
function preload()
{
dogImage=loadImage("images/dogImg.png")
bedRoomImage=loadImage("images/Bed Room.png")
washImage=loadImage("images/Wash Room.png")
runningImage=loadImage("images/runningleft.png")
vaccinationImage=loadImage("images/Vaccination.jpg")
foodImage=loadImage("Food Stock.png")
gardenImage=loadImage("Garden.png")
lazyImage=loadImage("Lazy.png")
livingImage=loadImage("Living Room.png")
}

function setup() {
	createCanvas(800, 700);
  database = firebase.database();
  database.ref("food").on("value", (data) => {
    food = data.val();
    console.log("Get count "+ food);
})
// dog=createSprite(400,200,40,30)
// dog.addImage(dogImage)
// dog.scale=0.1
 bg=livingImage
}


function draw() { 
  background(bg) 
  text(food,30,30)
if (keyWentDown("DOWN_ARROW")) {
  bg=bedRoomImage
}
if (keyWentDown("UP_ARROW")) {
  bg=gardenImage
}
if (keyWentDown("RIGHT_ARROW")) {
  bg=washImage
}
if (keyWentDown("LEFT_ARROW")) {
  background("white")
  bg=lazyImage

}
if (keyWentDown("H")) {
  bg=vaccinationImage
}
if (keyWentDown("F")) {
  background("white")
  bg=foodImage
}
  drawSprites();
  

}



