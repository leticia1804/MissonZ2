class Zombies{
    constructor(x,y){
        this.positionX = 0;
        this.positionY = 0;

        this.width = 5;
        this.height = 5;


        this.npcz1_Anm = loadAnimation("../imagens/Zombie_L1.png", 
        "../imagens/Zombie_L2.png", "../imagens/Zombie_L3.png", 
        "../imagens/Zombie_L4.png");

        //this.npcz1_Anm.scale = 0.006

        
    }

    display(){
        //imageMode(CENTER);
        animation(this.npcz1_Anm, this.positionX, this.positionY, this.width, this.height);
    }
}