class Ball {
    constructor(x, y) {
      var options = {
        restitution: 0.8,
        isStatic: false
      };
      this.r = 30
      this.body = Bodies.circle(x, y, this.r, options);
      World.add(world, this.body);
    }
    show() {
      var pos = this.body.position;
      push();
      translate(pos.x, pos.y);
      fill("yellow");
      ellipseMode(RADIUS);
      ellipse(0, 0, this.r);
      pop();
    }
  }