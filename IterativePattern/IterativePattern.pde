
int x=0;
PGraphics circle;

void setup()
{
  
  size(520,520);
  circle = createGraphics(130, 130);
  
}

void draw()
{
  line(width/2,0,width/2,height);
  line(0,height/2,width,height/2);
  
  /*
  circle.beginDraw();
  circle.background(152,190,100);
  circle.rect(120, 80, 200, 200);
  circle.scale(-1,1);
  
  circle.rect(120, 80, 200, 200);
  
  circle.endDraw();
  */
  translate(width/2, height/2);
  rect(20,20,100,50);
  scale(1,-1);
  rect(20,20,100,50);
  scale(-1,1);
  rect(20,20,100,50);
  scale(1,-1);
  rect(20,20,100,50);
  
  
  
  
  
}

void Wrap()
{
  for(int i=0;i<width;i+=width/5)
  {
    for(int j=0;j<height;j+=height/5)
    {
    
      image(circle, i, j);
    }
  }
}

void mirror()
{
  
}
