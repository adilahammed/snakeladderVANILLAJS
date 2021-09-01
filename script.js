

class players{
    constructor(color){
        this.color=color
        this.position=0
    }
}

let player1= new players("red")

const spin=()=>{
    let random=Math.floor(Math.random()*6 )+1 
    console.log(random);
    if(random===1){
        
    }
}


console.log(player1);