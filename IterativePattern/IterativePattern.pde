
int x=0;
float scale = 0;
PGraphics surface;

void setup()
{
  
  size(520,520);
  
  surface = createGraphics(130, 130);
  scale = (float) surface.width/ (float) width;

  
}

void draw()
{
  //line(width/2,0,width/2,height);
  //line(0,height/2,width,height/2);
  
  
  surface.beginDraw();
  surface.background(152,190,100);
  surface.line(surface.width/2,0,surface.width/2,surface.height);
  surface.line(0,surface.height/2,surface.width,surface.height/2);
  surface.translate(surface.width/2,surface.height/2);
  surface.scale(scale,scale);
  
  DrawMirrorPart();
  surface.scale(1,-1);
  DrawMirrorPart();
  surface.scale(-1,1);
  DrawMirrorPart();
  surface.scale(1,-1);
  DrawMirrorPart();
  surface.endDraw();
  Wrap();
  
  
  /*
  translate(width/2, height/2);
  rect(20,20,100,50);
  scale(1,-1);
  rect(20,20,100,50);
  scale(-1,1);
  rect(20,20,100,50);
  scale(1,-1);
  rect(20,20,100,50);
  */
  
  
  
  
}

void Wrap()
{
  for(int i=0;i<width;i+=width/5)
  {
    for(int j=0;j<height;j+=height/5)
    {
    
      image(surface, i, j);
      //break;
    }
    //break;
  }
}

void DrawMirrorPart()
{
  surface.noFill();
  surface.rect(20,20,100,100);
  //surface.circle(20, 20, 200); 
}
