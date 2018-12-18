/*
    global variables
*/
var serial;
var portName = "COM8";
var sensorValue;
var rain;
var player;
var player_speed = 10;

var idle_sheet, idle_animation;
var run_sheet, run_animation;
var run2_sheet, run2_animation;
var rain6_sheet, rain6_animation;
var idle_wet_sheet, idle_wet_animation;

var nRainVal;
var bIsRaining = false;
var strRaining;

var numRain = 3;
var rainSpeed = 1 * 0.05;
var rainYMin = 10;
var rainYMax = 35;

//Music
var rainMusic;

function preload() {

    // PNG images for our character and rain
    rain = loadImage("rain2.png");
    background = loadImage("rainbackground.jpg")
    idle_sheet = loadSpriteSheet("sprites/main_character/210.png", 200, 250, 10);
    idle_animation = loadAnimation(idle_sheet);

    run_sheet = loadSpriteSheet("sprites/main_character/210_running.png", 200, 250, 6);
    run_animation = loadAnimation(run_sheet);

    run2_sheet = loadSpriteSheet("sprites/main_character/210_running2.png", 200, 250, 6);
    run2_animation = loadAnimation(run2_sheet);

    rain6_sheet = loadSpriteSheet("sprites/scenery/rain6.png", 750, 360, 3);
    rain6_animation = loadAnimation(rain6_sheet);
    
    idle_wet_sheet = loadSpriteSheet("sprites/main_character/210_wet.png", 200, 250, 8);
    idle_wet_animation = loadAnimation(idle_wet_sheet);
    
    rainMusic = loadSound("sfx/rain.wav");
}

function setup() {
    createCanvas(750, 360);

    // set up player/character
    player = createSprite(320, 220);
    player.addAnimation('idle', idle_animation);
    player.addAnimation('run', run_animation);
    player.addAnimation('run2', run2_animation);
    player.addAnimation('idle2', idle_wet_animation);



    serial = new p5.SerialPort();
    serial.on('connected', serverConnected);
    serial.on('open', portOpen);
    serial.on('data', serialEvent);
    serial.on('error', serialError);
    serial.on('close', portClose);

    serial.open("COM8");
}

function serverConnected() {
    console.log("connected");
}

function portOpen() {
    console.log("port open");
}

function portClose() {
    console.log("port close");
}

function serialError() {
    console.log("error");
}

function serialEvent() {
    var currentString = serial.readLine();
    trim(currentString);
    if (!currentString) {
        return;
    }
    sensorValue = currentString;

}




function draw() {
    //    console.log(sensorValue);

    image(background, 0, 0, 750, 360);


    // jump event
    /*if (keyDown('space')) {
        player.changeAnimation('jump');
        player.position.y -= player_speed;
    }*/

    // Character Movement
    if (keyDown('right')) {
        player.changeAnimation('run');
        player.position.x += player_speed;
    } else if (keyDown('left')) {
        player.changeAnimation('run2');
        player.position.x -= player_speed;
    } else {
//        player.changeAnimation('idle');
    }
    
    
    
    

    drawSprites();

    raindown();
    
    //If it is not raining, it will warn that it could rain soon//
    warning();
}



function raindown() {


    if (sensorValue == 1) {
    player.changeAnimation('idle2');
    //Text that will appear if it is raining and mouse is pressed//
    if(mouseIsPressed){
    fill("red")
    textSize(100);
	text("It Is!", 20, 80);
    }
        
        //Rain sound if it is raining//
        rainMusic.play();
        
        
        animation(rain6_animation, 380, 160, 1150, 360);
    }

        else{rainMusic.stop();
        
        }  

}

function warning(){
    if(sensorValue == 0){
    if(mouseIsPressed){
    fill("red")
    textSize(60);
	text("Possible rain incoming!!! ", 20, 80);
    }
    }
}





    

