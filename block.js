class block{
    constructor(x, y, width, height, angle) {
        var options = {
            'restitution':0.7,
            'friction':0.1,
            'density':0.3
        }
        this.body = Bodies.rectangle(x, y, width, height, options);
        this.width = width;
        this.height = height;
        this.Visiblity = 255
        World.add(world, this.body);
        
      }
      display(){
        var angle = this.body.angle;
        push();
        translate(this.body.position.x, this.body.position.y);
        rotate(angle);
        rectMode(CENTER);
        if(this.body.speed<4){
          rect( 0, 0, this.width, this.height);
          }
          else{
            World.remove(world, this.body);
            push()
            this.Visiblity = this.Visiblity - 5;
            tint(255,this.Visiblity);
           // rect(this.body.position.x,this.body.position.y,50,50)
          pop()
          }

       
        pop();
      }
      score(){
        if(this.Visiblity<0 && this.Visiblity>-5.26315789474){
          score = score+1
        }
      }
}
