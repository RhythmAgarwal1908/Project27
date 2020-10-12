class rope{
    constructor(body1,body2,offestX,offestY){
        this.offestX=offestX
        this.offestY= offestY
        var option={
            bodyA:body1,
            bodyB:body2,
            pointB:{x:this.offestX,y:this.offestY}
        }
this.rope=Constraint.create(option);
        World.add(world,this.rope)
    }
    display(){
var pointA = this.rope.bodyA.position
var pointB = this.rope.bodyB.position
strokeWeight(2)
var Anchor1X=pointA.x
var Anchor1Y=pointA.y

var Anchor2X=pointA.x+this.offestX
var Anchor2Y=pointA.y+this.offestY

line(Anchor1X,Anchor1Y,Anchor2X,Anchor2Y);

    }
}

    