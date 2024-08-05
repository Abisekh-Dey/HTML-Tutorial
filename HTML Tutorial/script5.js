//1. Create a toggle button that changes screen to dark-mode when we click the button once and light-mode when click twice
let el=document.querySelector("#b1");
el.innerText="Click To Switch Dark-Mode";
el.addEventListener("click",()=>{
    document.body.style.backgroundColor="black";
    p=document.querySelector("#p1");
    p.style.color="white";//Changing The colour of paragraph with the change of mode
    el.setAttribute("id","b2");
    el.innerText="Click To Switch Light-Mode"
});
el.addEventListener("dblclick",()=>{
    document.body.style.backgroundColor="white";
    p=document.querySelector("#p1");
    p.style.color="black";//Changing The colour of paragraph with the change of mode
    el.setAttribute("id","b1");
    el.innerText="Click To Switch Dark-Mode"
});
//2. Create a toggle button that changes screen to dark-mode when we click the button and light-mode when click the button again
let e=document.querySelector("#nb1");
e.innerText="Switch to Dark-Mode";
e.addEventListener("click",()=>{
    if(e.innerText=="Switch to Dark-Mode"){
        document.body.style.backgroundColor="black";
        p=document.querySelector("#p1");
        p.style.color="white";//Changing The colour of paragraph with the change of mode
        e.setAttribute("id","nb2");
        e.innerText="Switch to Light-Mode";
    }
    else{
        document.body.style.backgroundColor="white";
        p=document.querySelector("#p1");
        p.style.color="black";//Changing The colour of paragraph with the change of mode
        e.setAttribute("id","nb1");
        e.innerText="Switch to Dark-Mode"; 
    }
});
//3. Create a toggle button that changes screen to dark-mode when we click the button and light-mode when click the button again
let ele=document.querySelector(".neb1");
ele.innerText="Change to Dark-Mode";
ele.addEventListener("click",()=>{
    if(ele.innerText=="Change to Dark-Mode"){
        document.body.style.backgroundColor="black";
        p=document.querySelector("#p1");
        p.style.color="white";//Changing The colour of paragraph with the change of mode
        ele.classList.add("neb2");
        ele.innerText="Change to Light-Mode";
        ele.classList.remove("neb1");
    }
    else{
        document.body.style.backgroundColor="white";
        p=document.querySelector("#p1");
        p.style.color="black";//Changing The colour of paragraph with the change of mode
        ele.classList.add("neb1");
        ele.innerText="Change to Dark-Mode"; 
        ele.classList.remove("neb2");
    }
});