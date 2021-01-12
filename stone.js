class stone {
  constructor(x,y){
    var options = {
      isStatic:false,
      retitution:0,
      friction:1,
      density:1.2
    }
    this.body = Bodies.circle(x,y,10,options)
    World.add(world,this.body);
    this.image = loadImage("stone.png")
    
  }
  display() {
    var pos = this.body.position
    push()
      translate(pos.x,pos.y)
      imageMode(CENTER)
      image(this.image,0,0)
    pop()
  }
}