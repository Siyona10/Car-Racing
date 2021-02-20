class Form{
    constructor(){
        this.input=createInput("NAME");
        this.button=createButton('PLAY');
        this.greeting=createElement('h2');
    }
    hide(){
        this.input.hide();
        this.button.hide();
        this.greeting.hide();
    }
    display(){
        var title=createElement('h1');
        title.html("CAR RACING GAME");
        title.position(370,20);
        this.input.position(450,200);
        this.button.position(500,250);
   
        this.button.mousePressed(()=>{
        this.input.hide()
        this.button.hide();
        player.name=this.input.value();
        playerCount+=1;
        player.index=playerCount
        player.update();
        player.updateCount(playerCount);
        this.greeting.html("HELLO! "+player.name);
        this.greeting.position(200,200);
    })
    }
}