class Chain{
    constructor(bodyA,bodyB){
        var options = {
            bodyA:bob.body,
            bodyB:ground.body,
            stiffness:0.04,
            length:10
        }
    
       this.chain= Constraint.create(options);
       World.add(world,this.chain);
    }
    display(){
    var posA=this.chain.bodyA.position;
    var posB= this.chain.bodyB.position;
    push();
    strokeWeight(5);
    line(posA.x,posA.y,posB.x,posB.y);
    pop();
    
    }
    }