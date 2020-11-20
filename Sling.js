class Sling{

    constructor(bodyA,pointB){
        var options={
            bodyA:bodyA,
            pointB:pointB,
            stiffness:0.05,
            length:5
        }

        this.pointB = pointB;
        this.Sling = Constraint.create(options);
        World.add(world,this.Sling);
    }

    display(){
        if(this.Sling.bodyA){
        strokeWeight(7);
        line (this.Sling.bodyA.position.x,this.Sling.bodyA.position.y,this.pointB.x,this.pointB.y);
    }
    }


    fly(){
        this.Sling.bodyA = null;
    }
}