class Paper {
    constructor() {
      var options = {
          isStatic : false,
          restitution:0.3,
          friction:0.5,
          density:1.2
      }
      
      this.width = 50;
      this.height = 50;
      this.body = Bodies.circle(200, 200, 50, options); 
      
      World.add(world, this.body);
    }
    display(){
      push();
      rectMode(CENTER);
      fill("blue");
      ellipse(170,610,50,50);
      //Matter.Bodies.circle(0, 0, 20);
      
      pop();
    }
  };
