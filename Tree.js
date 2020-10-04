// created the Tree class and extended to RectBase
class Tree extends RectBase {
  constructor(x,y,width,height){
    super(x,y,width,height);
    this.image = loadImage("Plucking mangoes/tree.png");
  }

// displaying the function
  display() {
    push();
    translate(this.body.position.x, this.body.position.y);
    imageMode(CENTER);
    image(this.image, 0, 0,365, 373);
    super.display();
    pop();
  }

  
}