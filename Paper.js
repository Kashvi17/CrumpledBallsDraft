class Paper {
    constructor() {
      var options = {
          isStatic : false,
          restitution:0.3,
          friction:0.5,
          density:1.2
      }
      this.body = Bodies.circle(200, 200, 50, options); 
      this.width = 50;
      this.height = 50;
      
      World.add(world, this.body);
    }
    display(){
      rectMode(CENTER);
      fill("blue");
      Matter.Bodies.circle(0, 0, 20);
      
      push();
      pop();
    }
  };
