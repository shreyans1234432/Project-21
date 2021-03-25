var canvas;
var block1, block2, block3, block4;
var ball, edges;
var music;

function preload(){
    music = loadSound("music.mp3");
}


function setup(){
    canvas = createCanvas(800,600);

    block1 = createSprite(0,500,350,40);
    block1.shapeColor = "red";

    block2 = createSprite(250,300,100,80);
    block2.shapeColor = "lime";

    block3 = createSprite(300,350,100,50);
    block3.shapeColor = "purple";

    block4 = createSprite(200,250,100,20);
    block4.shapeColor = "orange";

    ball = createSprite(random(30,700),100,50,50);
    ball.shapeColor = "pink";
    ball.velocityX = 7;
    ball.velocityY = 12;

}
    function draw() {
        background = "violet";
        edges = createEdgeSprites();
        ball.bounceOff(edges);

        if(block1.isTouching(ball) && ball.bounceOff(block1)){
            ball.shapeColor = "grey";
            music.play();
        }

        if(block2.isTouching(ball) && ball.bounceOff(block2)){
            ball.shapeColor = "brown";
            music.stop;
        }

        if(block3.isTouching(ball) && ball.bounceOff(block3)){
            ball.shapeColor = "purple";
        }

        if(block4.isTouching(ball) && ball.bounceOff(block4)){
            ball.shapeColor = "red";
        }
        drawSprites();
    }

