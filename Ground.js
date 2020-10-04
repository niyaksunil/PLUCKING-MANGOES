// created the Ground class and extended to RectBase
class Ground extends RectBase {
  constructor(x,y,width, height){
    super(x,y,width,height);
  }

// displaying the function
  display() {
    fill("green");
    super.display();
  }

}
