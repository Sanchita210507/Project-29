class Block{
  constructor(x, y, width, height) {
      var options = {
          
          
          'friction':9
      }
          
      this.body = Bodies.rectangle(x, y, width, height, options);
      this.width = width;
      this.height = height;
      var  random =("pink","blue","red")
      World.add(world, this.body);
    }
    display(){
     
      push();
     
      translate(this.body.position.x, this.body.position.y);
      stroke (0,0,0)
      strokeWeight(2)
      fill (245,4,107)
      rectMode(CENTER);
      rect( 0, 0, this.width, this.height);
      pop();
    }
}