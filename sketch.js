const Engine = Matter.Engine;
const World= Matter.World;
const Bodies = Matter.Bodies;
const Constraint = Matter.Constraint;

var engine, world;
var ground1, ground2;
var box1, box2, box3, box4, box5, box6, box7, box8;
var box9, box10, box11, box12, box13, box14, box15, box16;

function preload() {
//loadImage ("polygon.png");

function setup(){
    var canvas = createCanvas(1200,400);
    engine = Engine.create();
    world = engine.world;



    box1 =  new Box("700, 195, 40, 40")
    box2 =  new Box("710, 195, 40, 40")
    box3 =  new Box("720, 195, 40, 40")
    box4 =  new Box("730, 195, 40, 40")
    box5 =  new Box("740, 195, 40, 40")
    box6 =  new Box("750, 195, 40, 40")
    box7 =  new Box("760, 195, 40, 40")
    box8 =  new Box("770, 195, 40, 40")
    box9 =  new Box("810, 195, 40, 40")
    box10 =  new Box("820, 195, 40, 40")
    box11=  new Box("830, 195, 40, 40")
    box12=  new Box("840, 195, 40, 40")
    box13=  new Box("850, 195, 40, 40")
    box14=  new Box("860, 195, 40, 40")
    box15=  new Box("870, 195, 40, 40")
    box16=  new Box("880, 195, 40, 40")

  ground1 = new Ground("700, 200, 100, 50");
  ground2 = new Ground("800, 100, 100, 50");


    //log6 = new Log(230,180,80, PI/2);
}

function draw(){
    background(backgroundImg);
    Engine.update(engine);
    //strokeWeight(4);
    ground1.display();  
    ground2.display();
    box1.display();
    box2.display();
    box3.display();
    box4.display();
    box5.display();
    box6.display();
    box7.display();
    box8.display();
    box9.display();
    box10.display();
    box11.display();
    box12.display();
    box13.display();
    box14.display();
    box15.display();
    box16.display();
}


function mouseDragged(){

    Matter.Body.setPosition(polygon.body, {x: mouseX , y: mouseY});
}

function mouseReleased (){

    slingshot.fly();
}



