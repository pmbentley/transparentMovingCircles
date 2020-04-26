var x=300;
var y=200;
function setup() {
  createCanvas(800, 800);
}
function draw() {
  background(204);
  noStroke();

  //yellow circle
  fill(255, 255, 0);
  ellipse(300, 300, 400, 400);
  //blue circle
  fill(0, 255, 255,100);
  ellipse(550, 550, 400, 400);
  //pink circle is on top of the others
  if (mouseX>150&&mouseY>250){
    x+=1;
    y+=1;
  }
  else if (mouseX<350&&mouseY<350){
    x-=1;
    y-=1;
  }
  else{
  //this controls the ellipse moving
    x=300;
    y=300;
  }
  noStroke();
  fill(255, 0, 255, 60);
  ellipse(x, y, 400, 400);

noFill();
stroke(255);
ellipse(100,700,150,150);
}
