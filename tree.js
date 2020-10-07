class tree {
constructor(x,y){
var options = {
    isStatic :false,
    restitution: 0,
    friction:1,
    density:1.2
}
this.body = Bodies.rectangle(x, y ,30,150, options);
this.width = 30;
this.height = 150;
this.image = loadImage("sprites/tree.png");
World.add(world, this.body);
}
display(){
var pos = this.body.position;
push()
translate(pos.x, pos.y)
rectMode(CENTER);
fill("green");
rect(0,0,30, 150)
pop()
};
};