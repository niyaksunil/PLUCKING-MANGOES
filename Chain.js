// created the Chain class
class Chain {
    constructor(bodyA,pointB){ 
        var options = {
            bodyA:bodyA,
            pointB:pointB,
            stiffness:0.02,
            length:0.1,
        }

// created the chain constraint 
        this.chain = Constraint.create(options);
        World.add(world,this.chain);
    }
    
// disconnect the chain and the body
    fly(){
        this.chain.bodyA= null; 
    }
    
// displaying the function
    display(){
        if(this.chain.bodyA ){

            var pointA = this.chain.bodyA.position;
            var pointB = this.chain.pointB;
            
            strokeWeight(4);
            line(pointA.x,pointA.y,pointB.x,pointB.y);
            
        }
    }

// attaching the stone with chain again
    attach(stoneBody){
        this.chain.bodyA = stoneBody;
    }
}

 
