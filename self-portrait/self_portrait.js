function setup() 
{
  createCanvas(600, 600);
  background(166, 142, 212);
}


function draw() 
{
  // Colors
  let hair_base = color(43, 40, 36);
  let hair_light = color(59, 55, 49);
  let hair_dark = color(33, 31, 29);
  let skin_base = color(224, 187, 155);
  let skin_dark = color(207, 172, 143);
  let blush = color(217, 151, 128);
  let shirt = color(73, 81, 115);
  
  noStroke();
  // base hair
  fill(hair_base);
  arc(300, 250, 250, 300, radians(270), radians(90));
  fill(hair_light);
  arc(300, 250, 250, 300, radians(90), radians(270));
  // hair length
  fill(hair_light);
  stroke(hair_light);
  strokeJoin(ROUND);
  quad(190, 250, 300, 250, 300, 500, 150, 500);
  fill(hair_base);
  stroke(hair_base);
  strokeJoin(ROUND);
  quad(300, 250, 410, 250, 450, 500, 300, 500);
  // hair shading
  noStroke();
  fill(hair_dark);
  ellipse(300, 350, 200, 300);
  
  // shoulders
  fill(shirt);
  stroke(shirt);
  strokeJoin(ROUND);
  bezier(225, 400, 330, 380, 355, 395, 375, 400);
  noStroke();
  // neck
  fill(skin_dark);
  quad(280, 250, 320, 250, 330, 450, 270, 450);
  // shirt
  fill(shirt);
  stroke(shirt);
  strokeJoin(ROUND);
  quad(225, 400, 375, 400, 400, 600, 200, 600);
  noStroke();
  // how scandalous
  fill(skin_dark);
  arc(300, 396, 55, 55, radians(0), radians(180));
  
  // head base
  fill(skin_base);
  ellipse(300, 250, 200, 250);
  // blush
  fill(blush);
  stroke(blush);
  strokeWeight(2);
  line(225, 305, 235, 285);
  line(240, 305, 250, 285);
  line(255, 305, 265, 285);
  line(330, 305, 340, 285);
  line(345, 305, 355, 285);
  line(360, 305, 370, 285);
  
  // eyebrows
  stroke(hair_base);
  strokeCap(ROUND);
  strokeWeight(5);
  noFill();
  bezier(230, 218, 240, 212, 260, 212, 270, 218);
  bezier(330, 218, 340, 212, 360, 212, 370, 218);
  noStroke();
  
  // eye whites
  fill(250, 247, 242);
  ellipse(250, 250, 50, 50);
  ellipse(350, 250, 50, 50);
  // irises
  fill(48, 43, 38);
  ellipse(250, 255, 40, 40);
  ellipse(350, 255, 40, 40);
  // pupil
  fill(0);
  ellipse(250, 255, 10, 10);
  ellipse(350, 255, 10, 10);
  // eye highlight
  fill(255, 255, 255);
  ellipse(240, 245, 10, 10);
  ellipse(340, 245, 10, 10);
  
  // nose
  fill(skin_dark);
  triangle(300, 300, 300, 280, 310, 290);
  
  // mouth
  fill(150, 110, 99);
  bezier(280, 325, 275, 335, 325, 335, 320, 325)
  
  // hands
  fill(skin_base);
  ellipse(127, 575, 35, 35);
  ellipse(473, 575, 35, 35);
  // arms
  fill(shirt);
  stroke(shirt);
  strokeJoin(ROUND);
  quad(105, 570, 225, 400, 225, 460, 150, 570);
  quad(375, 400, 495, 570, 450, 570, 375, 460);
  noStroke();
  
  // bangs
  fill(hair_light);
  arc(220, 150, 140, 100, radians(325), radians(130));
  fill(hair_base);
  arc(370, 150, 200, 100, radians(60), radians(220));
  stroke(hair_light);
  fill(hair_light);
  strokeJoin(ROUND);
  quad(200, 180, 220, 180, 210, 450, 190, 450);
  fill(hair_base);
  stroke(hair_base);
  quad(380, 180, 405, 180, 410, 450, 390, 450);
}
