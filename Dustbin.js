class Dustbin {
    constructor() {
      var options = {
          isStatic : true,
          restitution:0.3,
          friction:0.5,
          density:1.2
      }
      this.body = Bodies.rectangle(200,200,5,options); 
      this.width = 50;
      this.height = 50;
      
      World.add(world, this.body);
    }
      display(){
        push();
        rectMode(CENTER);
        fill("white");
        pop();
      }
    };
  
