
var walkingman
function preload(){
    walkingman=loadAnimation("walking_1.png","walking_2.png","walking_3.png","walking_4.png","walking_5.png","walking_6.png","walking_7.png","walking_8.png")
}

function setup(){
    createCanvas(400,600)
   man=createSprite(200,300)
    man.addAnimation("m",walkingman)
    man.scale=0.5


}

function draw(){
    background('black')
    drawSprites()

    var maxDrops=100;
    for(var i=0; i<maxDrops; i++){
       drops.push(new createDrop(random(0,400),random (0,400))):
    }
}   

