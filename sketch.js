var map;
var pc1, pc1_Anm;
var npcz1, npcz1_Anm, npcz2, npcz3, npcz4, npcz5,
npcz6, npcz7, npcz8, npcz9, npcz10;
var cureFzombies, cureFzombies_img;
var paredes, paredes_img;
var boxs, boxs_img;


function preload(){
    
    map = loadImage("../imagens/map.png");
    
    paredes_img = loadImage("../imagens/paredes.png");
    boxs_img = loadImage("../imagens/boxs.png");

    pc1_Anm = loadAnimation("../imagens/Hero_R1.png", 
    "../imagens/Hero_R2.png", "../imagens/Hero_R3.png");

    cureFzombies_img = loadImage("../imagens/escudo.png");

}

function setup(){
    canvas = createCanvas(400,400);

    cureFzombies = createSprite(85,350);
    cureFzombies.addImage("Cure for zombies", cureFzombies_img);
    cureFzombies.scale = 0.004;


    paredes = createSprite(200,200);
    paredes.addImage("Paredes", paredes_img);
    paredes.scale = 0.2;

    boxs = createSprite(200,200);
    boxs.addImage("Boxs", boxs_img);
    boxs.scale = 0.2;
    
    pc1 = createSprite(20,165);
    pc1.addAnimation("PC Animation", pc1_Anm);
    pc1.scale = 0.004;

    npcz1 = new Zombies(100,195);
    //npcz1.addAnimation("NPC Animation", npcz1_Anm);
    
}

function draw(){
    background(map);

    //npcz1.velocityX = -0.3 

    if (keyDown("A")){
        pc1.x -= 0.8;
    }

    if (keyDown("D")){
        pc1.x += 0.8;
    }

    if (keyDown("W")){
        pc1.y -= 0.8;
    }

    if (keyDown("S")){
        pc1.y += 0.8;
    }

    npcz1.display();

    drawSprites();
    mouse();
}

function mouse() {
    var posx,posy;
    posx = mouseX;
    posy = mouseY;
    if(mousePressedOver(boxs)){  

     console.log("posição X = "+posx);
     console.log("posição Y = "+posy);
    }
}
