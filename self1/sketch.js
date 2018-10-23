//Using variables// 
function setup() {
	createCanvas(800, 500);
}

function draw() {
var outeye = "white";//big outer white eye
	background(outeye); //outeye is white
    
var facecolor = "#cc9966";
var outeye = "white";//big outer white eye
var ineye = "black";//inner black eye
var nosecolor = "orange";
    
var headx = 420;
var heady = 280;
var headWidth = 320;
var headHeight = 350;
    
var eye1x = 350;
var eye2x = 480;
var eyesy  = 260;
var weyeWidth = 100;
var weyeHeight = 120;
var beyeWidthHeight = 40;
    
var nose1x = 420;
var nose1y = 300;
var nose2x = 400;
var nose2y = 360;
var nose3x = 461;
var nose3y = 361;
    
var mouth1x = 340;
var mouth1y = 380;
var mouth2x = 500;
var mouth2y = 380;
var mouth3x = 450;
var mouth3y = 440;
var mouth4x = 380;
var mouth4y = 440;
    
var top1x = 360;
var top1y = 90;
var top2x = 450;
var top2y = 90;
var top3x = 542;
var top3y = 150;
var top4x = 294;
var top4y = 150;
    
var right1x = 520;
var right1y = 148;
var right2x = 540;
var right2y = 148;
var right3x = 582;
var right3y = 250;
var right4x = 545;
var right4y = 250;

var left1x = 293; 
var left1y = 150;
var left2x = 310;
var left2y = 150;
var left3x = 295;
var left3y = 250;
var left4x = 258;
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
fill(ineye);
quad(top1x,top1y,top2x,top2y,top3x,top3y,top4x,top4y); // top hair
quad(right1x,right1y,right2x,right2y,right3x,right3y,right4x,right4y); // right hair
quad(left1x,left1y,left2x,left2y,left3x,left3y,left4x,left4y); // left hair
    
    

}