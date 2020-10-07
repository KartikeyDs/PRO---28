class Mango{
constructor(x, y, width, height){
var options = {
isStatic :false
}
this.body = Bodies.rectangle(x,y,this.width, this.height, options)
this.width = width;
this.height = height;
World.add(world, this.body)
}
display(){
var pos = this.body.position;
push()
translate(pos.x, pos.y)
rectMode(CENTER)
rect(0,0, this.width,this.height);

}
}