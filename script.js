

class players{
    constructor(color){
        this.color=color
        this.position=0
        this.prevposition=0
        this.letter= this.setletter()
    }
    setposition=(n)=>{
        this.prevposition=this.position
        this.position=this.position+n
    }
    setletter=()=>{
        let [a]=this.color
        return(a[0])
    }
}

let player1= new players("red")
let player2= new players("green")
let player3= new players("blue")
let player4= new players("yellow")
let playerslist=[player1,player2,player3,player4]
let n=0
let nowplay=playerslist[n]


const spin=()=>{
    console.log(nowplay);
    let random=Math.floor(Math.random()*6 )+1 
    console.log(random);
    console.log(nowplay);
    console.log(random+nowplay.position);
    if(random+nowplay.position<=100){
        nowplay.setposition(random)
        move(nowplay) 
    }


    
    updatenowplay()
}




const move=(nowplay)=>{
    document.querySelector(`.num${nowplay.position}`).innerHTML=document.querySelector(`.num${nowplay.position}`).innerHTML+`<p2 class="${nowplay.color}" style="background-color: ${nowplay.color};">  ${nowplay.letter}</p2>`
    if(nowplay.prevposition!==0){
        console.log( document.querySelector(`.num${nowplay.prevposition}`).childNodes[3]);
        document.querySelector(`.num${nowplay.prevposition}`).childNodes[3].remove()
       
    }
    
    

}


const updatenowplay=()=>{
    n++
    if(n===4){
        n=0
    }
    nowplay=playerslist[n]
}
