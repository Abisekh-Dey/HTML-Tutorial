//1a. Adding an onclick event from js file to an element in html file  
el=document.querySelector("#b3");
el.innerText="Click Me!";
el.style.backgroundColor="aqua";
el.style.color="black"
el.onclick=()=>{//Previous handled event
    console.log("Code 1a. Button Clicked1")
    n=prompt("Enter The Number For Which You to Print The Sum");
    // n=Number(n);
    s=0;
    for(let i=0;i<=n;i++){
        s+=i;
    }
    console.log(`Sum of ${n} will be: ${s}`);
}
el.onclick=()=>{//Newly handled event
    //Here I handled onclick event twice for an element (button #b3) but This is not prefered to handle same event twice 
    //If we do so The previous handled event will be overwritten by newly handled event
    //IF we want want to use The previous event also The newly handled event we have to use addEventListener(event,function); it is shown in code 1b. for this same code 
    console.log("Code 1a. Button Clicked2")
    n=prompt("Enter The Number For Which You to Print The Sum");
    // n=Number(n);
    s=0;
    for(let i=0;i<=n;i++){
        s+=i;
    }
    console.log(`Sum of ${n} will be: ${s}`);
}
//1b. Adding an onclick event from js file to an element in html file  
el=document.querySelector("#b3");
el.innerText="Click Me!";
el.style.backgroundColor="aqua";
el.style.color="black"
el.addEventListener("click",()=>{//Using addEventListener(event,callback function);When we are passing the event name as argument in addEventListener we pass the event as string and we don't write on before event name
    console.log("Code 1b. Button Clicked1")
    n=prompt("Enter The Number For Which You to Print The Sum");
    // n=Number(n);
    s=0;
    for(let i=0;i<=n;i++){
        s+=i;
    }
    console.log(`Sum of ${n} will be: ${s}`);
});
el.addEventListener("click",()=>{//Using addEventListener(event,callback function);When we are passing the event name as argument in addEventListener we pass the event as string and we don't write on before event name
    console.log("Code 1b. Button Clicked2")
    n=prompt("Enter The Number For Which You to Print The Sum");
    // n=Number(n);
    s=0;
    for(let i=0;i<=n;i++){
        s+=i;
    }
    console.log(`Sum of ${n} will be: ${s}`);
});
//2. Adding an onmouseover event from js file to an element in html file
el=document.querySelector("#d2");
el.innerText="My Name is: "+el.innerText;
el.style.width="400px";
el.style.height="100px";
el.style.color="blue";
el.style.backgroundColor="orange";
el.style.textAlign="center";
el.style.fontSize="30px";
el.style.border="1px solid black";
el.style.margin="5px";
el.onmouseover=()=>{
    console.log("You Are on The Div Tag");
}
//3. Add a button from js file to the html file and assign an ondblclick event to the button also Print the event object also print (event.type, event.target, event.clientX, event.clientY)
btn=document.createElement("button");
btn.innerText="Click Twice";
btn.setAttribute("id","b4");
btn.style.backgroundColor="red";
btn.style.color="white";
btn.fontSize="16px";
document.querySelector("body").append(btn); 
btn.ondblclick=(event_obj)=>{
    console.log("Button Clicked Twice");
    console.log(event_obj);
    console.log(event_obj.type);
    console.log(event_obj.target);
    console.log(event_obj.clientX);
    console.log(event_obj.clientY);
}
btn.addEventListener("dblclick",(event_obj)=>{//Using addEventListener(event,callback function);When we are passing the event name as argument in addEventListener we pass the event as string and we don't write on before event name 
    console.log("Button Clicked Twice Here");
    console.log(event_obj);
    console.log(event_obj.type);
    console.log(event_obj.target);
    console.log(event_obj.clientX);
    console.log(event_obj.clientY);
})
const b1=()=>{
    console.log("Button Clicked Twice Here and I stored this function in variable b1");
}
btn.addEventListener("dblclick",b1);//Adding 3rd dblclick event using addEventListener(event,callback function=b1)
//4. Delete any event using removeEventListener(event,callback function); here I am going to delete the last event listener of the button which I added in code no 3
//** Please uncomment below 2 lines (line 98 and 99) to remove last event listener of code 3 
// btn=document.querySelector("#b4");
// btn.removeEventListener("dblclick",b1);//It will delete the b1 callback function 