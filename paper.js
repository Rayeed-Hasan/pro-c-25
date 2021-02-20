class Paper
{
	constructor(x,y)
	{
		
		this.x=x;
		this.y=y;
		this.width=50;
		this.height=50;
		
		
		this.body=Bodies.circle(this.x, this.y, this.width,this.height);
		
		
		

		
		
		World.add(world, this.body);
		

	}
	display()
	{
			var pos = this.body.position;
			
			

			push()
			translate(posLeft.x, posLeft.y);
			ellipseMode(RADIUS)
			strokeWeight(4);
			
			fill(255)
			
			ellipse(0,0,this.width, this.height);
			pop()

			push()
			translate(posRight.x, posRight.y);
			ellipseMode(RADIUS)
			strokeWeight(4);
			
			fill(255)
			
			ellipse(0,0,this.width,this.height);
			pop()

			push()
			translate(posBottom.x, posBottom.y+10);
			ellipseMode(RADIUS)
			strokeWeight(4);
			
			fill(255)
			ellipse(0,0,this.width, this.height);
			pop()
			
	}

}