//Rock-Paper-Seissor Game

let head=document.querySelector("h1");
let hi=head.innerText;
let index=0;
let direction=1;
const change=()=>{
    index=index+direction;//In the first call the index is incremented by 1 because direction is 1; so the index starts from 1
    //So in first 19 iteration the if or else if statements will not work
    //after 19 iteration the if statement will work for next 19 iterations until index becomes 0 at (19+19)=38th iteration
    //after 38 iterations the else statement will work for next 19 iterations until index becomes 19 again at (38+19)=57th iteration and this is how the loop will continue..
    let alpha=hi.slice(0,index);
    head.innerText=alpha+"|";
    if(index==hi.length){
        direction=-1;//when index will match the length hi direction will be set to -1 
        setTimeout(()=>{
            setTimeout(change,100);
        },1000)
    }
    else if(index==0){
        direction=1;//when index will be 0 hi direction will be set to 1
        setTimeout(change,100);
    }
    else{
        setTimeout(change,100);
    }
}

change();


let userScore=0;
let computerScore=0;

const choices=document.querySelectorAll(".choice");

const check_winner=()=>{
    us=document.querySelector("#user-score");
    cs=document.querySelector("#comp-score");
    msg=document.querySelector("#msg");
    if(Number(us.innerText)>Number(cs.innerText)){
        us.style.color="green";
        cs.style.color="red";
        msg.innerText="User Is Winning";
        msg.style.backgroundColor="green";
        msg.style.color="white";
    }
    else if(Number(us.innerText)<Number(cs.innerText)){
        us.style.color="red";
        cs.style.color="green";
        msg.innerText="Computer Is Winning";
        msg.style.backgroundColor="red";
        msg.style.color="white";
    }
    else{
        us.style.color="blue";
        cs.style.color="blue";
        msg.innerText="It's A Draw";
        msg.style.backgroundColor="blue";
        msg.style.color="white";
    }
}

const comp_choice=(ch)=>{
    let x=[];
    for(let i of ch){
        x.push(i.getAttribute("id"));
    }
    rch=Math.random() *3;//Math.random() generates a positive value within the range of 0 to 1, and multiplying that random number which is within the range of 0 to 1 with 3 it can generate a number within the range of 0 to 2 but should be less than 3
    idx=Math.floor(rch);//Math.floor() returns the integer part only of any factional number   
    return x[idx];
}

const determine_winner=(x,y)=>{
    if(x===y){
        return "draw";//This will not be used in the code; this is the draw condition only
    }
    else if(x==="rock" && y==="scissor" || x==="scissor" && y==="paper" || x==="paper" && y==="rock"){
        return "user";
    }
    else{
        return "computer";
    }
}

const game_play=(uc)=>{
    compch=comp_choice(choices);
    winner=determine_winner(uc,compch);
    if(winner==="user"){
        userScore++;//userScore is defined outside of the function but still I can access this inside of the function because In JavaScript, variables declared in the outer scope (global scope in this case) are accessible within any functions defined within that scope. This is due to the concept of scope and closures in JavaScript. Here’s how it works:

        // Global Scope: Variables userScore and computerScore are declared in the global scope, meaning they are accessible anywhere in the script.
        // Function Scope: Functions like playGame can access and modify these global variables because they are defined within the same or an outer scope.

        //but it's not applicable in python if i try to access a variable which i defined outside of the function i have to make the variable global first to use that variable inside of the function and doing any changes to the variable from inside of the function.
        us=document.querySelector("#user-score");
        us.innerText=userScore;
    }
    else if(winner==="computer"){
        computerScore++;//userScore is defined outside of the function but still I can access this inside of the function because In JavaScript, variables declared in the outer scope (global scope in this case) are accessible within any functions defined within that scope. This is due to the concept of scope and closures in JavaScript. Here’s how it works:

        // Global Scope: Variables userScore and computerScore are declared in the global scope, meaning they are accessible anywhere in the script.
        // Function Scope: Functions like playGame can access and modify these global variables because they are defined within the same or an outer scope.

        //but it's not applicable in python if i try to access a variable which i defined outside of the function i have to make the variable global first to use that variable inside of the function and doing any changes to the variable from inside of the function.
        cs=document.querySelector("#comp-score");
        cs.innerText=computerScore;
    }
    // No need to update scores if it's a draw
    check_winner();
}
choices.forEach((ele)=>{
    ele.addEventListener("click",()=>{
        let userChoice=ele.getAttribute("id");//This returns element id
            game_play(userChoice);
    })
});

rstb=document.querySelector("#i1");
rstb.onclick=()=>{
    e1=document.querySelector("#user-score");
    e2=document.querySelector("#comp-score");
    e3=document.querySelector("#msg");
    e1.innerText="0"
    e2.innerText="0"
    e1.style.color="black";
    e2.style.color="black";
    e3.style.backgroundColor="darkslategrey";
    e3.style.color="rgb(0, 255, 213)";
    e3.innerText="Play Your Move"
    userScore=0;
    computerScore=0;
}