class Bird extends BaseClass {
  constructor(x,y){
    super(x,y,50,50);
    this.image = loadImage("sprites/bird.png");
    this.simage = loadImage("sprites/smoke.png");
    
    this.traj = [];
  }

  display() {
    super.display();

    if(this.body.velocity.x>10&&this.body.position.x>200){
    var pos = [this.body.position.x, this.body.position.y];
    this.traj.push(pos);
    }
    //this.traj = [[100,200],[110,220],[150,230]];
    
    for(var i=0;i<this.traj.length;i++){
    image(this.simage,this.traj[i][0],this.traj[i][1]);
    }
  }
}
