// created the Boy class and extended to RectBase
class Boy extends RectBase {
  constructor(x,y,width,height){
    super(x,y,width,height);
    this.image = loadImage("Plucking mangoes/boy.png");
  }

// displaying the function
  display() {
    push();
    translate(this.body.position.x, this.body.position.y);
    imageMode(CENTER);
    image(this.image, 0, 0,150, 250);
    super.display();
    pop();
  }

}