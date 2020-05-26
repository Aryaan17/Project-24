class Paper {
    constructor (x, y, diameter) {
        var options = {
            isStatic : false,
            restitution : 0.3,
            friction : 0.5,
            density : 1.2
        }    
        this.body = Bodies.circle(x, y, diameter, options)
        World.add(world, this.body);
        this.diameter = diameter;
    }
    display(){
        ellipseMode(CENTER);
        var pos = this.body.position;
        push()
        translate(pos.x, pos.y)
        fill("red");
        ellipse (0, 0, this.diameter);
        pop()
    }
}