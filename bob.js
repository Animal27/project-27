class Bob{
    constructor(x,y,radius)
    {
        var options={
            isStatic :false,
            restitution :0.3,
            friction :0.5,
            densitiy :1.2
        }
        this.body = Bodies.circle(x, y,radius,options);
        this.x=x;
        this.y=y;
        this.radius=radius;
        World.add(world,this.body);
        
    }
    display(){
        push()
        translate(this.body.position.x,this.body.position.y);
        imageMode(CENTER);
        fill("purple");
        pop()
    }
}
