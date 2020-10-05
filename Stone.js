// created the Stone class and extended to CircleBase
class Stone extends CircleBase{
  constructor(x,y,radius){
    var options = {
      isStatic : false,
      'density':0.9
      }

// calling the parameters of CircleBase
    super(x,y,radius, 39, 42);
    this.body.options = options;
    this.radius = radius;
    this.image = loadImage("Plucking mangoes/stone.png");
  }

// displaying the function 
  display(){
    push();
    super.display();
    Matter.Body.setStatic(this.body,false);
    pop();
  }

}