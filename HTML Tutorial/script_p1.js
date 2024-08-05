//Tic-Tac-Toe Game
let boxes=document.querySelectorAll(".box");
let r_btn=document.querySelector("#rstb");
let turnO=true;
let count=0;
let result=false;
let val=null;

const win_patterns=[
    [0,1,2],[3,4,5],
    [6,7,8],[0,3,6],
    [1,4,7],[2,5,8],
    [0,4,8],[2,4,6]
];

boxes.forEach((ele)=>{
    ele.addEventListener("click",()=>{
        console.log("Box is Clicked");
        if(turnO==true){
            ele.innerText="O";
            ele.style.color="blue"
            turnO=false;
        }
        else{
            ele.innerText="X";
            ele.style.color="red"
            turnO=true;
        }
        ele.disabled=true;
        count++;
        check_winner();
    })
});
const check_winner=()=>{
    for(let i of win_patterns){//For each iteration I is array here
        console.log(i[0],i[1],i[2]);
        if(boxes[i[0]].innerText!="" && boxes[i[1]].innerText!="" && boxes[i[2]].innerText!=""){//accessing the boxes nodelist through indexes;elements of i[0],i[1],i[2] are reffered as indexes in nodelist boxes
            if(boxes[i[0]].innerText==boxes[i[1]].innerText && boxes[i[1]].innerText==boxes[i[2]].innerText){
                if(boxes[i[0]].innerText=="X" && boxes[i[1]].innerText=="X" && boxes[i[2]].innerText=="X"){
                    for(let j=0;j<i.length;j++){
                        boxes[i[j]].style.backgroundColor="lightgreen";
                        boxes[i[j]].style.color="white";
                    }
                    result=true;
                    val="X"
                    break;
                }
                else{
                    for(let j=0;j<i.length;j++){
                        boxes[i[j]].style.backgroundColor="lightgreen";
                        boxes[i[j]].style.color="white";
                    }
                    result=true;
                    val="O";
                    break;
                }
            }
        }
    }
    console.log(count);
    if(result==false && count==9){
        ael=document.createElement("h1");
        ael.innerText="Sorry! Match Draw";
        ael.setAttribute("id","head1");
        ne=document.querySelector("h1");
        ne.after(ael);
    }
    if(result==true && val!=null){
        ael=document.createElement("h1");
        ael.innerText=`Congratulations! Winner is ${val}`;
        ael.setAttribute("id","head1");
        ne=document.querySelector("h1");
        ne.after(ael);
        let boxe=document.querySelectorAll(".box");
        for(let i of boxe){
            i.disabled=true;
        }
    }
}
r_btn.onclick=()=>{
    alert("Start New Game")
    boxes.forEach((ele)=>{
        ele.innerText="";
        ele.disabled=false;
        ele.style.backgroundColor="lightgoldenrodyellow";
        ele.style.color="red";
    })
    el=document.querySelector("#head1");
    if(el!=null){
        el.remove();
    }
    turnO=true;//Setting turnO=true again after restart
    count=0;
    result=false;
}