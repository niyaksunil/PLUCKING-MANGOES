// created the Mango class and extended to CircleBase
class Mango extends CircleBase{
  constructor(x,y,radius){
    super(x,y,radius, 39, 42);
    this.radius = radius;
    this.image = loadImage("Plucking mangoes/mango.png");
  }

// displaying the function
  display(){
    push();
    super.display();
    pop();
  }

}