
int x=0;
float scaleWidth = 0;
float scaleHeight = 0;
int splitNumber = 5;
PGraphics surface;

void setup()
{
  
 
  fullScreen();
  surface = createGraphics(width/splitNumber, height/splitNumber);
  scaleWidth = (float) surface.width / (float) width;
  scaleHeight = (float) surface.height / (float) height;
  
  surface.beginDraw();
  surface.line(surface.width/2,0,surface.width/2,surface.height);
  surface.line(0,surface.height/2,surface.width,surface.height/2);
  surface.translate(surface.width/2,surface.height/2);
  surface.scale(scaleWidth,scaleHeight);
  
  DrawMirrorPart();
  surface.scale(1,-1);
  DrawMirrorPart();
  surface.scale(-1,1);
  DrawMirrorPart();
  surface.scale(1,-1);
  DrawMirrorPart();
  surface.endDraw();
  Wrap();
  
  
}

void draw()
{
  //line(width/2,0,width/2,height);
  //line(0,height/2,width,height/2);
  
  
 
  
  
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
  for(int i=0;i<width;i+=width/splitNumber)
  {
    for(int j=0;j<height;j+=height/splitNumber)
    {
    
      image(surface, i, j);
      //break;
    }
    //break;
  }
}

void DrawMirrorPart()
{
  
  //surface.rect(20,20,100,100);
  surface.noFill();
  surface.circle(20, 20, 100);
  
  surface.line(60,50,120,50);
  surface.line(120,50,120,0);
  
  surface.line(55,55,70,60);
  surface.line(120,50,160,60);
  
  surface.line(70,60,160,60);
  surface.line(160,60,160,0);
  
  surface.line(0,160,40,160);
  surface.line(40,160,40,110);
  surface.line(0,110,40,110);
  
  surface.line(0,190,20,200);
  
}
