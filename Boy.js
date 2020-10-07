class Boy{
constructor(x,y){
var options = {
isStatic :false,
}
this.body = Bodies.rectangle(x,y,30, 100, options)
this.width = 30;
this.height = 100;
World.add(world, this.body)
}
display(){
var pos = this.body.position;
push()
translate(pos.x, pos.y)
rectMode(CENTER)
fill("white")
rect(0, 0, 30, 100)
pop();
}
}