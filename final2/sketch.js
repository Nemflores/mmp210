/*
    Arduino + p5 example
*/
var serial;
var portName = "/dev/cu.usbmodem179";
var sensorValue;
var r = 0;
var b = 255;
var boo;

function preload(){
    boo=loadImage("boo.png");
}

function setup() {
    createCanvas(640, 360);
    
    serial = new p5.SerialPort();
    serial.on('connected', serverConnected);
    serial.on('open', portOpen);
    serial.on('data', serialEvent);
    serial.on('error', serialError);
    serial.on('close', portClose);
    
    serial.open(portName);
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
    var c = map(sensorValue, 0, 1023, 0, 200);
    r = map(sensorValue, 0, 600, 0, 255);
    b = map(sensorValue, 0, 600, 255, 255);
    
    background(r , c  , b );
    
    var y = map(sensorValue, 0, 1023, height, 0);
    
    image(boo,c+300,90,100,100);
    
    fill("peachpuff")
    ellipse(c+100,180,c+90)
    
    fill("white")
    ellipse(c+65, 145, c);
    fill("white")
    ellipse(c+150,145, c );
    fill("black")
    ellipse(c+65, 145,20);
    fill("black")
    ellipse(c+150,145,20);
    fill("black")
    ellipse(c+120,210,80,10+c);
    
    
    
    

}