var slide = 0;

var bird, fish, sensor, kid;

function preload() {
    bird = loadImage("bird.jpg");
    fish = loadImage("fish.jpg");
    sensor = loadImage("sensor.jpg")
    kid = loadImage("coolkiid.png")
}

function setup() {
    createCanvas(900, 500);
    textSize(60);
    textFont('monospace');
    textAlign(CENTER, CENTER);
    rectMode(CENTER);
}

function draw() {
    background(220);
    
    if (slide == 0) {
        text("Final Project Idea", width/2, height/2);
    } else if (slide == 1) {
        textSize(30);
        text("Rain Sensor", 200, 100);
        image(sensor,200,160);
        // fsr graphic
       
    } else if (slide == 2) {
        text("Theme:Rain", 200, 20);
        image(bird, 00, 100,width/2, height/2);
        image(fish, 400, 100,width/2, height/2);
    }else if (slide == 3){
        textSize(40);
        text("We are gonna make it rain!",400,200);
        text("When the rain sensor detects water,",450,240);
        text("our character will be in the rain.",450,280);
    }
    else if (slide == 4) { 
        image(kid, 400, 100, 200, 400);
        
    }
}

function mousePressed() {
    if (mouseX > width/2) {
        if (slide < 4) {
            slide++;
        }
    } else {
        if (slide > 0) {
            slide--;
        }
    }
}