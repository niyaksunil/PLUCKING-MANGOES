// created the RectBase class
class RectBase{
  constructor(x, y, width, height) {
    var options = {
      'friction':1.0,
      'density':1.0,
       isStatic:true
    }

// creating the rectangle body
    this.body = Bodies.rectangle(x, y, width, height, options);
    this.width = width;
    this.height = height;
    World.add(world, this.body);

  }

// displaying the function
  display(){
    var pos =this.body.position;
    push();
    rectMode(CENTER);
    rect(pos.x, pos.y, this.width, this.height);
    pop();
  }

}