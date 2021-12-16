class Zombies{
    constructor(x,y){
        this.positionX = x;
        this.positionY = y;

        this.sprite = createSprite(x,y);
        this.npcz1_Anm = loadAnimation("../imagens/Zombie_L1.png", 
        "../imagens/Zombie_L2.png", "../imagens/Zombie_L3.png", 
        "../imagens/Zombie_L4.png");

        this.sprite.addAnimation("NPC animacao",this.npcz1_Anm)
       
        this.sprite.scale = 0.004;
        this.sprite.velocityX = -1;
        this.sprite.velocityY = 0.5;

        
    }

    
}
