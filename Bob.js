class Bob{

    constructor(x,y,r){
        var options ={
            isStatic: false,
            'restitution': 0.05,
            'friction':0,
            'density':1
        };

        this.r = 20;
        this.x = x;
        this.y = y;
        this.body = Bodies.circle(this.x,this.y,this.r/2,options);
        World.add(world,this.body);
        
    }

    display(){
        //var angle = this.body.angle;

        push()
        ellipseMode(RADIUS);
        fill(255);
        translate(this.body.position.x, this.body.position.y);
        //rotate(angle);
        ellipse(0,0,this.r,this.r); 
        pop()
  
      }
};