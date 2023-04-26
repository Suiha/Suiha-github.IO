var ballX, ballY;
var ballSize = 40;
var score = 0;
var hiScore = 0;
var r1 = 300;
var r2 = 350;   
var moveX = 0;
var h1 = 200;
var gap = 150;
var pillarDist = 250;
var gameState = "IDLE";

function preload()
{
    birb = loadImage("birb.png");
    cloud = loadImage("cloud.png");
    sun = loadImage("sun.png");
    spikes = loadImage("spikes.png");
}

function setup() 
{
    createCanvas(600, 600);
    ballX = width/2;
    ballY = height/2;
    textAlign(CENTER);
    textSize(20);
} // end setup

function draw() 
{
    background(153, 224, 255);
    image(sun, 450, 50);
    sun.resize(100, 100);
    image(cloud, 40, 70);
    image(spikes, 0, 400);
    fill(255);
    stroke(0);
    strokeWeight(2);
    if (gameState == "IDLE")
    {
       text("Press Any Button to Start", width/2, height/2);
       if (keyIsPressed)
       {
          gameState = "L1"; 
       }
    } else if (gameState == "LOSE") {
       text("GAME OVER", width/2, height/2 - 10);
       text("Press Any Button to Restart", width/2, height/2 + 10);
       if (keyIsPressed)
       {
          gameState ="L1";
          score = 0;
          ballX = width/2;
          ballY = height/2;
       }
    } else {
      image(birb, ballX-20, ballY-20);
      birb.resize(40, 40);
      
      // Draw green pillars
      fill(0, 168, 45);
      stroke(0, 168, 45);
      drawPillars(r1, r2, h1);
      
      // Reset colors for text
      fill(255);
      stroke(0);
      strokeWeight(2);
      if (score > hiScore) { hiScore = score; }
      if (keyIsPressed)
       {
         if (ballY - 10 < 0)
         {
           ballY = 2; 
         } else {
           ballY -= 10;
         }
       } else {
         ballY += 2;
       }
      if (gameState == "L1") 
      { 
        levelOne();
       } else if (gameState == "L2") {
         levelTwo();
       } else if (gameState == "L3") {
         levelThree(); 
       } else if (gameState == "L4") {
         levelFour();
       } else if (gameState == "L5") {
         levelFive();
       } else if (gameState == "L6") {
          levelSix(); 
       }
     }
    
    textAlign(RIGHT);
    text("High Score: " + hiScore, width-20, 40);
    text("Score: " + score, width-20, 60);
    textAlign(CENTER);
    if (ballY >= height) { gameState = "LOSE"; }
} // end draw

function levelOne()
{
    h1 = 200;
    gap = 150;
    text("Level 1", 50, height - 20); 
    if (score >= 5) { gameState = "L2"; }
} // end level 1

function levelTwo()
{
    h1 = 150;
    text("Level 2", 50, height - 20);
    if (score >= 10) { gameState = "L3"; }
} // end level 2

function levelThree()
{
     h1 = 250;
     text("Level 3", 50, height - 20);
     if (score >= 15) { gameState = "L4"; }
} // end level 3

function levelFour()
{
     h1 = 200;
     gap = 125;
     text("Level 4", 50, height - 20);
     if (score >= 20) { gameState = "L5"; }
} // end level 4

function levelFive()
{
     h1 = 150;
     text("Level 5", 50, height - 20);
     if (score >= 25) { gameState = "L6"; }
} // end level 5

function levelSix()
{
     h1 = 250;
     text("Level 6", 50, height - 20);
} // end level 6

function drawPillars(x1, x2, h1)
{
    var pillarPos1 = x1 - moveX;
    var pillarPos2 = x2 - moveX;  
    
    // Pillar 1
    rect(pillarPos1, 0, 50, h1);
    quad(pillarPos1, h1 + gap, pillarPos2, h1 + gap, 
        pillarPos2, height, pillarPos1, height);
    
    // Pillar 2
    rect(pillarPos1 + pillarDist, 0, 50, h1);
    quad(pillarPos1 + pillarDist, h1 + gap, pillarPos2 + pillarDist, h1 + gap, 
        pillarPos2 + pillarDist, height, pillarPos1 + pillarDist, height);
    
    // Move pillars left, if the 2nd pillar gets to the center of the canvas draw new pillars
    moveX += 2;
    if ((pillarPos1 + pillarDist) == width/2)
    {
      moveX = 0;
      drawPillars(x1, x2);
    }
    
    // Rectangle around the ball
    var bX1 = ballX - (ballSize / 2);
    var bX2 = ballX + (ballSize / 2);
    var bY1 = ballY - (ballSize / 2);
    var bY2 = ballY + (ballSize / 2);
    
    // Get coordinates of the gap of the current obstacle
    var gapLeft, gapRight;
    if (abs(pillarPos1 - ballX) < abs(pillarPos1 + pillarDist - ballX))
    {
       gapLeft = pillarPos1; 
       gapRight = pillarPos2;
    } else {
       gapLeft = pillarPos1 + pillarDist; 
       gapRight = pillarPos2 + pillarDist;
    }
    
    // Check if the ball hits the pillars
    if (bX1 >= gapLeft && bX2 <= gapRight)
    {
       if (bY1 <= h1 || bY2 >= (h1 + gap)) 
       { 
         gameState = "LOSE"; 
       }
    }
    
    // Check if the player scored
    if (bX1 == gapRight)
    {
       score++; 
    }
}
