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
    pumpkin = loadImage("pumpkin.jpg"); // regular picture
    eyes = loadImage("eyes.jpg"); // weird eyes picture
    crack = loadImage("crack.jpg"); // cracked glasses picture
    kid = loadImage("kid.jpg"); // little kid picture
}

function setup(){
    createCanvas(500,500);
}

function draw(){
    background( textcolor);
    s += 2;
    // regular picture top left
    if (mouseX < width/2 && mouseY < height/2){
    image(pumpkin, 0,0,width,height);
        
    
    text("When you're dying inside", text1x,text1y,);
    textSize(textsize);
    fill( textcolor);
    
   
    text("but your mom still",text2x,text2y,);
    textSize(textsize);
    fill( textcolor);
    
    text("calls you handsome ",text3x,text3y,);
    textSize(textsize);
    fill( textcolor);
    // weird eyes picture top right
    } else if (mouseX > width/2 && mouseY < height/2) {
    image(eyes,0,0,width,height);
        
        
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
    image(crack,0,0,width,height); //cracked glasses bottom left
        
        
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
    image(kid,0,0,width,height); // kid picture bottom right
        
    text("When your crush calls you ",15,410);
    textSize(textsize);
    fill(textcolor);
        
    text("handsome",120,460);
    textSize(textsize);
    fill(textcolor);

    }
}

    