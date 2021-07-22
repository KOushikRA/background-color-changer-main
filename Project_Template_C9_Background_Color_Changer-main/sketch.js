var blue,red,r,b,g;

function setup(){

  createCanvas(400,400);

  blue = createButton("BLUE");
blue.position(100,50);
blue.mousePressed(blue_bg);

red = createButton("RED");
red.position(250,50);
red.mousePressed(red_bg);
}

function draw(){



}


function red_bg()
{
background ("red");
r = 255;
g = 0;
b = 0;
}

function blue_bg(){
background ("blue");
r = 0;
g = 0;
b = 255;
}

drawSprites();