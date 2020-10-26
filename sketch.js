let balls=[];

function setup() {
  createCanvas(windowWidth, windowHeight);
  for(let i=0; i<2; i++){
    balls[i]=new Ball(random(width-50),random(height))
  }
  

}
function draw() {
  background(200);
  for (let ball of balls){
    ball.update();
    ball.draw();
  }
  
}

class Ball {
  constructor(x,y) {
    this.x = x;
    this.y= y;
    this.dy=0
  }
  // containsPoint(x, y) {}
  // containsMouse() {}
  update() {
    // changes the properties
    this.x += this.dy
    this.dy +=-0.25
  }
  draw() {
    circle(this.x, this.y, 50);
    if (this.x <= 0) {
      this.dy = -0.95 * this.dy;

    }

  }
}