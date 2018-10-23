//portrait with interaction. Final.
var b = 255;
var r = 255;
var g = 255;



function setup() {
	createCanvas(800, 500);
}

function draw() {
    g = map(mouseX, 0, 400, 0, 255)//background green color
    r = map(mouseY,0,500,0,255)//background red color
    
	background(r, g, b);
    


var facecolor = "#cc9966";
var outeye = "white";
var ineye = "black";
var nosecolor = "orange";
    
var headx = 1 + mouseX ;
var heady = 280 ;
var headWidth = 320;
var headHeight = 350;
    
var eye1x = -69 + mouseX  ;
var eye2x = 69 + mouseX ;
var eyesy  = 260 ;
var weyeWidth = 100;
var weyeHeight = 120;
var beyeWidthHeight = 40;
    
var nose1x = 1 + mouseX;
var nose1y = 300;
var nose2x = 30 + mouseX;
var nose2y = 360;
var nose3x = -50 + mouseX;
var nose3y = 361;
    
var mouth1x = -69 + mouseX;
var mouth1y = 380;
var mouth2x = 80 + mouseX;
var mouth2y = 380;
var mouth3x = 45 + mouseX;
var mouth3y = 440;
var mouth4x = -20 + mouseX;
var mouth4y = 440;
    
var top1x = -60 + mouseX;
var top1y = 90;
var top2x = 70 + mouseX;
var top2y = 90;
var top3x = 130 + mouseX;
var top3y = 150;
var top4x = -130 + mouseX;
var top4y = 150;
    
var right1x = 80 + mouseX;
var right1y = 148;
var right2x = 130 + mouseX;
var right2y = 148;
var right3x = 160 + mouseX;
var right3y = 250;
var right4x = 135 + mouseX;
var right4y = 250;

var left1x = -130 + mouseX; 
var left1y = 150;
var left2x = -80 + mouseX;
var left2y = 150;
var left3x = -130 + mouseX;
var left3y = 250;
var left4x = -160 + mouseX;
var left4y = 250;



//face
fill(facecolor);
ellipse(headx,heady,headWidth,headHeight);
    
//eye1
fill(outeye);
ellipse(eye1x,eyesy,weyeWidth,weyeHeight);
fill(ineye);
ellipse(eye1x,eyesy,beyeWidthHeight,beyeWidthHeight); 

//eye2
fill(outeye);
ellipse(eye2x,eyesy,weyeWidth,weyeHeight);
fill(ineye);
ellipse(eye2x,eyesy,beyeWidthHeight,beyeWidthHeight); 
    
//nose
fill(nosecolor);
triangle(nose1x,nose1y, nose2x, nose2y, nose3x,nose3y);
    
//mouth
fill(ineye);
quad(mouth1x,mouth1y,mouth2x,mouth2y,mouth3x,mouth3y,mouth4x,mouth4y);
    
//hair
fill(r,g,0); //chages red and green value of hair
quad(top1x,top1y,top2x,top2y,top3x,top3y,top4x,top4y); // top hair quad
quad(right1x,right1y,right2x,right2y,right3x,right3y,right4x,right4y); // right hair quad
quad(left1x,left1y,left2x,left2y,left3x,left3y,left4x,left4y); // left hair quad
    
    

}