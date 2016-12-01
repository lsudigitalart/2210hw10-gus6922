var x = [];
var img;
var c = 0;

function preload(){
  img = loadImage("particle.png");
}

function setup(){
  createCanvas(640,480);
  // println(x);
  //
  // for(var i =0; i<1000; i++){
  //   x[i] = random(0,width);
  // }
  // frameRate(20);
}

function draw(){

  // background(0);
  // translate(-175,-400);
rotate();
  // for(var i = 0; i<x.length; i++){
    // x[i]++;//random(-5,5);
    // var y = random(i);
    // stroke(random(255),random(255),random(255));
    // fill(random(255),random(255),random(255));
    // ellipse(mouseX*random(x[i]),mouseY*random(x[i]),10);
    // line(mouseX*random(x[i]),mouseY*random(x[i]),mouseX*random(x[i]),mouseY*random(x[i]));
    // image(img,x[i],x[i],random(1000),random(1000));
    image(img,random(-width, width), random(-height, height));
    background(255,random(255),random(255),10);
    // c=c++;
  // }

}
