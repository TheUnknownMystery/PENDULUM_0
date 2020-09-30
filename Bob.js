class bob {

  constructor(x, y, width, height) {

      var options = {

          isStatic: false,
          restitution: 0.2,
          density: 0.04
      }
      this.body = Bodies.rectangle(x, y, width, height, options);

      this.width = width;

      this.height = height;

      World.add(world, this.body);

  }


  display() {

      var pos = this.body.position
      fill("pink")
      strokeWeight(4)
      ellipse( pos.x, pos.y, this.width, this.height)


  }
}