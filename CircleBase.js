// created the Circlebase class
class CircleBase{
    constructor(x,y,radius,width,height){
        var options = {
          'restitution':0.3,
          'friction':0.5,
          'density':0.5,
          isStatic:true
        }
        
// creating the circle body
        this.body = Bodies.circle(x,y,radius,options);
        World.add(world, this.body);
        this.image = loadImage("Plucking mangoes/mango.png");
        this.width = width;
        this.height = height;
    } 
      
// displaying the function
    display(){
      var pos =this.body.position;
      push();
      translate(pos.x, pos.y);
      imageMode(CENTER);
      image(this.image, 0, 0, this.width, this.height);
      pop();
    }

}