/*
meme version one
rough draft*/
var eyes;
var pumpkin; // global
var canvas = 500;
var textcolor = 250;
var textsize = 40;
var text1x = 25;
var text1y = 50;
var text2x = 90;
var text2y = 400;
var text3x = 70;
var text3y = 450;
var s = 50;


function preload(){
    pumpkin = loadImage("pumpkin.jpg");
    eyes = loadImage("eyes.jpg");
    crack = loadImage("crack.jpg");
    kid = loadImage("kid.jpg");
}

function setup(){
    createCanvas(500,500);
}

function draw(){
    background( textcolor);
    s += 2;
    if (mouseX < width/2 && mouseY < height/2){
    image(pumpkin, -90,0,width,height);
        if(s > 1000){
        s = 100;
    }
    
    text("When you're dying inside", text1x,text1y,);
    textSize(textsize);
    fill( textcolor);
    
   
    text("but your mom still",text2x,text2y,);
    textSize(textsize);
    fill( textcolor);
    
    text("calls you handsome ",text3x,text3y,);
    textSize(textsize);
    fill( textcolor);
    } else if (mouseX > width/2 && mouseY < height/2) {
    image(eyes,-10,0,width,height);
        if(s > 600){
            s=100;
            
        }
        
    text("When you're dying inside", text1x,text1y,);
    textSize(textsize);
    fill( textcolor);
    
   
    text("but your Dad still",text2x,text2y,);
    textSize(textsize);
    fill( textcolor);
    
    text("calls you handsome ",text3x,text3y,);
    textSize(textsize);
    fill( textcolor);
    } else if (mouseX < width/2 && mouseY > height/2){
    image(crack,0,0,width,height);
        if(s>600){
            s +=1;
            s = 100;
        }
        
    text("When you're dying inside", text1x,text1y,);
    textSize(textsize);
    fill( textcolor);
    
   
    text("but the stranger your",55,360,);
    textSize(textsize);
    fill( textcolor);
    
    text("Dad told you to stay away",15,400,);
    textSize(textsize);
    fill( textcolor);
        
    text("from calls you handsome",20,440);
    textSize(textsize);
    fill(textcolor);
        
    
    } else if(mouseX > width/2 && mouseY > height/2) {
    image(kid,0,-70,width,height);
        if(s > 1000){
            s = 100 ;
            
        }
        
    text("When your crush calls you ",15,410);
    textSize(textsize);
    fill(textcolor);
        
    text("handsome",120,460);
    textSize(textsize);
    fill(textcolor);

    }
}

    