class Snow {
    constructor(x, y) {
      var options = {
          'restitution':0.8,
          'friction':0.3,
        'isStatic':false  
      }
      this.body = Bodies.circle(x, y, 3,options);
     this.image=loadImage("snow5.webp")
      
      World.add(world, this.body);
    }
    display(){
      var pos =this.body.position;
      push();
      imageMode(CENTER);
      fill(255);
      image(this.image,pos.x, pos.y, 50,50);
      pop();
    }
  };
  