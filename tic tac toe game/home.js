let boxes=document.querySelectorAll(".box");
let newbtn=document.querySelector("#new");
let resetbtn=document.querySelector("#resetbtn");
let msgcontainer=document.querySelector(".msg-container");
let msg=document.querySelector("#msg");

let turn0=true;
let count=0;
const winpattern=[
    [0,1,2],[3,4,5],[6,7,8],[1,4,7],[0,4,8],[0,3,6],[2,5,8],[2,4,6]
]
boxes.forEach((box)=>{
    box.addEventListener("click",()=>{
        if(turn0){
            box.innerText="0";
            turn0=false;
        }else{
            box.innerText="X";
            turn0=true;
        }
        box.disabled=true;
        count++;
        let iswinner=checkwinner();
        if(count==9 && !iswinner){
            gamedraw();
        }
    });
});
const gamedraw=()=>{
    msg.innerText="game was a draw ";
    msgcontainer.classList.remove("hide");
    disableboxes();
}; 

const showwinner=(winner)=>{
    msg.innerText=`Congrats! ${winner}`;
    msgcontainer.classList.remove("hide");
    
}
const disableboxes=()=>{
    for(let box of boxes){
        box.disabled=true;
    }
};
const enableboxes=()=>{
    for(let box of boxes){
        box.disabled=false;
        box.innerText="";
    }
};
const resetgame=()=>{
    turn0=true;
    count=0;
    enableboxes();
    msgcontainer.classList.add("hide");
}

const checkwinner=()=>{
    for(let pattern of winpattern){
        let pos1val=boxes[pattern[0]].innerText;
        let pos2val=boxes[pattern[1]].innerText;
        let pos3val=boxes[pattern[2]].innerText;

        if(pos1val!="" && pos2val!="" && pos3val!=""){
            if(pos1val==pos2val && pos2val==pos3val){
                console.log("Winner",pos1val);
                showwinner(pos1val);
                disableboxes();
            }
        }
    }
};
newbtn.addEventListener("click",resetgame);
resetbtn.addEventListener("click",resetgame);