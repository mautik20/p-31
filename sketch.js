var man;
var run;

function preload() {
    lighting1 = loadImage("1.png");
    lighting2 = loadImage("2.png");
    dots = loadImage("rain.png");
    man_walking =loadAnimation("walking_1.png","walking_2.png","walking_3.png","walking_4.png","walking_5.png","walking_6.png","walking_7.png","walking_8.png");
}
  
function setup(){
    database=firebase.database();
    createCanvas(400,400);
    man = createSprite(200,300);
    man.addAnimation("Walking", man_walking);
    man.scale=0.3


    RainGroup = new Group();
}

function draw(){
    background(0);

    rand = Math.round(random(1,1));
    if(frameCount%80===0){
        thunderCreateFrame=frameCount;
        thunder = createSprite(random(10,370), random(10,30), 10, 10);
        switch(rand){
            case 1: thunder.addImage(lighting1);
            break;
            case 2: thunder.addImage(lighting2);
            break;
            default: break;
        }
        thunder.scale = random(0,0.6,0.6);
        thunder.lifetime = 15;
    }

    rand = Math.round(random(1,1));
    if(frameCount%1===0){
        thunderCreateFrame=frameCount;
        thunder = createSprite(random(10,370), random(10,30), 1, 1);
        switch(rand){
            case 1: thunder.addImage(dots);
            break;
            case 2: thunder.addImage(dots);
            break;
            default: break;
        }
        thunder.scale = random(0,0.006,0.006);
        thunder.velocityY=3
     //   thunder.lifetime = 15;
    }

    drawSprites();}
