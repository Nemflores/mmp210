/*
meme version one
rough draft*/
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


function preload(){
    pumpkin = loadImage("pumpkin.jpg");
}

function setup(){
    createCanvas(500,500);
}

function draw(){
    background( textcolor);
    
    image(pumpkin, 0,0,500,500);
    
    text("When you're dying inside", text1x,text1y,);
    textSize(textsize);
    fill( textcolor);
    
    text("but your mom still",text2x,text2y,);
    textSize(textsize);
    fill( textcolor);
    
    text("calls you handsome ",text3x,text3y,);
    textSize(textsize);
    fill( textcolor);
    
}