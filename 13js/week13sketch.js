//character x and y
var characterX = 100;
var characterY = 100;
// key codes for letters
var w = 87;
var s = 83;
var d = 68;
var a = 65;
// shape x and y
var shapeX = 30;
var shapeY = 50;

var shapeXSpeed;
var shapeYSpeed;

var shapeXs = [];
var shapeYs = [];
var diameters = [];
// mouse click shape
var mouseShapeX;
var mouseShapeY;
   

function setup()
{
    createCanvas(500,600);
    for (var i = 0; i < 50; i++)
    {
    shapeXSpeed = Math.floor(Math.random() * (Math.floor(Math.random() * 5)) +1);
    shapeYSpeed = Math.floor(Math.random() * (Math.floor(Math.random() * 5)) +1);
    shapeXs [i] = getRandomNumber (500);
    shapeYs [i] = getRandomNumber (600);
    diameters [i] = getRandomNumber (30);
    }
    createCharacter(200,350);
}

function draw()
{
    background(30,145,200);
    stroke(0);
    fill(0);
//createBorders function
createBorders(10);
//exit message
textSize(16);
text("Exit!", width-50, height-50)
//createCharacter(200,350);
drawCharacter();
fill(0,100,100);
circle(shapeX,shapeY,20)
characterMovement();
//enemy
fill(200,33,34);
circle(shapeX,shapeY, 10);
    shapeXSpeed = Math.floor(Math.random() * (Math.floor(Math.random() * 5)) +1);
    shapeYSpeed = Math.floor(Math.random() * (Math.floor(Math.random() * 5)) +1);
//enemy 2
fill(200,33,34);
circle(shapeX,shapeY, 10);
    shapeXSpeed = Math.floor(Math.random() * (Math.floor(Math.random() * 5)) +1);
    shapeYSpeed = Math.floor(Math.random() * (Math.floor(Math.random() * 5)) +1);
//enemy 3
fill(200,33,34);
circle(shapeX,shapeY, 10);
    shapeXSpeed = Math.floor(Math.random() * (Math.floor(Math.random() * 5)) +1);
    shapeYSpeed = Math.floor(Math.random() * (Math.floor(Math.random() * 5)) +1);
//enemy 4
fill(200,33,34);
circle(shapeX,shapeY, 10);
    shapeXSpeed = Math.floor(Math.random() * (Math.floor(Math.random() * 5)) +1);
    shapeYSpeed = Math.floor(Math.random() * (Math.floor(Math.random() * 5)) +1);
 //enemy 5
fill(200,33,34);
circle(shapeX,shapeY, 10);
    shapeXSpeed = Math.floor(Math.random() * (Math.floor(Math.random() * 5)) +1);
    shapeYSpeed = Math.floor(Math.random() * (Math.floor(Math.random() * 5)) +1);
    //move shape
shapeXs += shapeXSpeed [i];
shapeYs += shapeYSpeed [i];
// out of bounds
if(shapeXs [i] > width)
{
    shapeXs [i] = 0;
}
if(shapeXs [i] < 0)
{
    shapeXs [i] = width;
}
if(shapeYs [i] > height)
{
    shapeYs [i] = 0;
}
if(shapeYs [i] < 0)
{
    shapeYs [i] = height;
}
//exit check
if(characterX > width && characterY > width-50)
{
    fill(0);
    stroke(5);
    textSize(26);
    text("You win!", width/2-50, height/2-50);
}
//mouse click shape
fill(100,100,100);
circle(mouseShapeX, mouseShapeY, 25);
}

function characterMovement()
//key movement
{
    if(keyIsDown(w))
    { characterY -= 10;}
    if(keyIsDown(s))
    { characterY += 10;}
    if(keyIsDown(a))
    { characterX -= 10;
    console.log("movement:" + characterX);}
    if(keyIsDown(d))
    { characterX += 10;}
}

function createCharacter(x,y)
{
    characterX = x;
    characterY = y;
}

function drawCharacter()
{
    fill(13,22,26)
    circle(characterX,characterY,25);
}
function createBorders(thickness)
{
    //left
    rect(0,0,thickness,height);
    //top
    rect(0,0,width,thickness);
    //right
    rect(width-thickness,0,thickness,height-50);
    //bottom
    rect(0, height-thickness,width, thickness);
}
function mouseClicked()
{
    mouseShapeX = mouseX;
    mouseShapeY = mouseY; 
}
function getRandomNumber(number)
{
    return Math.floor(Math.random()* number) +10;
}
   
 /*
function keyPressed() {
    if (keyCode === LEFT_ARROW) {
        characterX -= 10;
    } 
    else if (keyCode === RIGHT_ARROW) {
        characterX += 10;
    }
    else if (keyCode === UP_ARROW) {
        characterY -= 10;
    }
    else if (keyCode === DOWN_ARROW) {
        characterY += 10;
    }
  }
  */