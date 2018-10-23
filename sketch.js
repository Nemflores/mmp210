function setup() {
	createCanvas(800, 500);
}

function draw() {
	background("white");

//face
fill("#cc9966");
ellipse(420,280,320,350);
    
//eye
fill("white");
ellipse(350,260,100,120);
fill("black");
ellipse(350,260,40,40); 

//eye
fill("white");
ellipse(480,260,100,120);
fill("black");
ellipse(480,260,40,40); 
    
//nose
fill("orange");
triangle(420,300, 400, 360, 461,361);
    
//mouth
fill("black");
quad(340,380,500,380,450,440,380,440);
    
//hair
fill("black");
quad(360,90,450,90,542,150,294,150);
quad(520,148,540,148,582,250,545,250);
quad(293,150,310,150,295,250,258,250);
    
    

}