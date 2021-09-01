

class players{
    constructor(color){
        this.color=color
        this.position=0
        this.prevposition=0
        this.letter= this.setletter()
    }
    setposition=(c)=>{
        this.prevposition=this.position
        this.position=this.position+c
    }
    slposition=(b)=>{
        this.prevposition=this.position
        this.position=b
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
        changebutton(n+1)
        let random=Math.floor(Math.random()*6 )+1 
        console.log(random);
        console.log(nowplay);
        if(random+nowplay.position<=100){
            nowplay.setposition(random)
            move(nowplay) 
        }
    
    
        
        updatenowplay()
    
}




const move=(nowplay)=>{
    
    document.querySelector(`.num${nowplay.position}`).innerHTML=document.querySelector(`.num${nowplay.position}`).innerHTML+`<p2 class="${nowplay.color}" style="background-color: ${nowplay.color};">  ${nowplay.letter}</p2>`
    if(nowplay.prevposition!==0){
        document.querySelector(`.num${nowplay.prevposition}`).childNodes[3].remove()  
    }
    let chk=checksl()
    console.log("===="+chk);
    if(chk!==false){
        nowplay.slposition(chk)
        const button = document.querySelector('.spin')
        button.disabled=true
        setTimeout(()=>{
            button.disabled=false
            move(nowplay)
            console.log(nowplay);
        },2000)
    }
    console.log(chk);
}



const updatenowplay=()=>{
    n++
    if(n===4){
        n=0
    }
    nowplay=playerslist[n]
}

const changebutton=(a)=>{
    if(a===4){
        a=0
    }
    let g=playerslist[a]
    document.querySelector(".spin").style.backgroundColor=g.color
  
}


const checksl=()=>{
    if(nowplay.position===1){
        return 38
    }
    else if(nowplay.position===8){
        return 30
    }
    else if(nowplay.position===4){
        return 14
    }else if(nowplay.position===21){
        return 42
    }else if(nowplay.position===28){
        return 76
    }else if(nowplay.position===50){
        return 67
    }else if(nowplay.position===71){
        return 92
    }else if(nowplay.position===80){
        return 99
    }
    else if(nowplay.position===97){
        return 78
    }
    else if(nowplay.position===88){
        return 24
    }
    else if(nowplay.position===62){
        return 18
    }
    else if(nowplay.position===48){
        return 26
    }
    else if(nowplay.position===36){
        return 6
    }
    else if(nowplay.position===32){
        return 10
    }
    else{
        return false
    }
}