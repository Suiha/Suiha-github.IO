var img, tmp;
var initials ='vh'; // your initials
var choice;// = '1'; // starting choice, so it is not empty
var screenbg = 250; // off white background
var lastscreenshot=61; // last screenshot never taken

function setup() 
{
  var canvas = createCanvas(600, 600);  // canvas size
  background(screenbg);   // use our background screen color
  noStroke();
  // Create a color-picker
  colorPicker = createColorPicker("black");
  colorPicker.position(width+5, 0);
}

function draw() 
{
  if (keyIsPressed) {
    choice = key; // set choice to the key that was pressed
    clear_print(); // check to see if it is clear screen or save image
  }
  if (mouseIsPressed) 
  {
    if ((mouseX > 0 && mouseX < width) && (mouseY > 0 && mouseY < height))
    {
      tmp = colorPicker.color();
      newkeyChoice(choice);  // if the mouse is pressed call newkeyChoice
    }
  }
}

function newkeyChoice(toolChoice) { 
  // toolchoice is the key that was pressed
  // the key mapping if statements that you can change to do anything you want.
  // just make sure each key option has the a stroke or fill and then what type of 
  // graphic function

  if (toolChoice == '1' ) // base head
  {  
    noStroke();
    fill(colorPicker.color()); //232, 195, 151
    ellipse(mouseX, mouseY, 200, 250);
    noStroke();
  } else if (toolChoice == '2') // bright anime eyes
  { 
    // eye base
    fill(tmp); //18, 31, 122
    ellipse(mouseX, mouseY, 40, 50);
    // pupil
    fill(10); //0, 7, 56
    ellipse(mouseX, mouseY, 10, 10);
    // highlights
    fill(255);
    ellipse(mouseX-10, mouseY-10, 10, 10);
    ellipse(mouseX-5, mouseY-15, 5, 5);
  } else if (toolChoice == '3') // bored anime eyes
  { 
    // base eye
    fill(tmp);
    arc(mouseX, mouseY-10, 40, 70, radians(0), radians(180));
    // pupil
    fill(10);
    ellipse(mouseX, mouseY+5, 10, 10);
    // highlight
    fill(255);
    ellipse(mouseX-10, mouseY, 5, 5);
  } else if (toolChoice == '4') // oshi no ko eyes
  { 
    // eye base
    fill(tmp);
    ellipse(mouseX, mouseY, 40, 50);
    // oshi no ko pupil
    fill(240);
    beginShape();
    vertex(mouseX-3, mouseY-5);
    vertex(mouseX, mouseY-20);
    vertex(mouseX+3, mouseY-5);
    vertex(mouseX+10, mouseY-10);
    vertex(mouseX+5, mouseY-2);
    vertex(mouseX+15, mouseY);
    vertex(mouseX+5, mouseY+2);
    vertex(mouseX+10, mouseY+10);
    vertex(mouseX+3, mouseY+5);
    vertex(mouseX, mouseY+20);
    vertex(mouseX-3, mouseY+5);
    vertex(mouseX-10,mouseY+10);
    vertex(mouseX-5, mouseY+2);
    vertex(mouseX-15, mouseY);
    vertex(mouseX-5, mouseY-2);
    vertex(mouseX-10, mouseY-10);
    vertex(mouseX-3, mouseY-5);
    endShape(CLOSE);
    // highlight
    fill(255);
    ellipse(mouseX-10, mouseY-10, 10, 10);
  } else if (key == '5') // simple nose 1
  { 
    fill(tmp);
    triangle(mouseX-5, mouseY-10, mouseX-5, mouseY+10, mouseX+5, mouseY);
  } else if (toolChoice == '6') // simple nose 2
  { 
    stroke(tmp);
    strokeWeight(2);
    strokeJoin(ROUND);
    line(mouseX, mouseY-10, mouseX-5, mouseY);
    line(mouseX-5, mouseY, mouseX, mouseY+5);
    noStroke();
  } else if (toolChoice == '7') // open smile
  { 
    fill(tmp);
    arc(mouseX, mouseY-10, 50, 30, radians(0), radians(180));
  } else if (toolChoice == '8') // pout
  { 
    stroke(tmp);
    noFill();
    bezier(mouseX-25, mouseY+10, mouseX-10, mouseY, mouseX+10, mouseY, mouseX+25, mouseY+10);
    bezier(mouseX+30, mouseY+25, mouseX+25, mouseY+20, mouseX+25, mouseY-5, mouseX+30, mouseY-5);
    noStroke();
  } else if (toolChoice == '9') // sticking tongue out
  { 
    stroke(tmp);
    noFill();
    bezier(mouseX-25, mouseY-10, mouseX-10, mouseY, mouseX+10, mouseY, mouseX+25, mouseY-10);
    noStroke();
    fill(tmp);
    arc(mouseX, mouseY-5, 20, 40, radians(0), radians(180));
  } else if (toolChoice == '0') // line tool
  { 
    stroke(tmp);
    line(mouseX, mouseY, pmouseX, pmouseY);
    noStroke();
  } else if (toolChoice == 'e' || toolChoice == 'E') // eraser
  { 
    stroke(250);
    strokeWeight(10);
    line(mouseX, mouseY, pmouseX, pmouseY);
    noStroke();
  }
}

// this will do one of two things, x clears the screen by resetting the background
// p calls the routine saveme, which saves a copy of the screen
function clear_print() 
{
  if (key == 'x' || key == 'X') 
  {
    background(screenbg); // set the screen back to the background color
  } else if (key == 'p' || key == 'P') 
  {
     saveme();  // call saveme which saves an image of the screen
  }
}

// this will save the name as the intials, date, time and a millis counting number.
// it will always be larger in value then the last one.
function saveme()
{
  filename=initials+day() + hour() + minute() +second();
  if (second()!=lastscreenshot) // don't take a screenshot if you just took one
  { 
    saveCanvas(filename, 'jpg');
  }
  // set this to the current second so no more than one per second 
  lastscreenshot=second(); 
}
