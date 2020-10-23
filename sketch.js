let balls=[];
// let ball0;
// let ball1;
function setup() {
  createCanvas(windowWidth, windowHeight);
  ball0 = {
    x: random(width-50),
    y: random(height),
    dy: 0,
  }
  ball1 = {
    x: random(width-50),
    y: random(height),
    dy: 0,
  }
  balls.push[ball0];
  balls.push[ball1];
}
function draw() {
  background(200);
  ball0.x += ball0.dy;
  ball0.dy += -0.25;
  circle(ball0.x, ball0.y, 50);
  ball1.x += ball1.dy;
  ball1.dy += -0.25;
  circle(ball1.x, ball1.y, 50);
  // if the object hits the bottom of the canvas
  // make it go up instead of down
  if (ball0.x <= 0) {
    ball0.dy = -0.95 * ball0.dy;
  }
  if (ball1.x<= 0) {
    ball1.dy = -0.95 * ball1.dy;
  }
}