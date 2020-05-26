class Ground{
    constructor(x,y,width,height){
        var options={
            isStatic : true
        }
        this.body= Bodies.rectangle(x,y,width,height,options);
        World.add(world, this.body);
        this.width = width;
        this.height = height;
    }

    display(){
        rectMode(CENTER);
        var pos = this.body.position;
        push()
        translate(pos.x, pos.y)
        fill("black");
        stroke("black");
        strokeWeight(6);
        rect (0, 0, this.width, this.height);
        pop()
    }
}