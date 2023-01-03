
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
  circle.beginDraw();
  circle.background(152,190,100);
  circle.ellipse(50, 50, 130/2, 130/2);
  circle.endDraw();
  Wrap();
  
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
