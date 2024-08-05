document.querySelector("#d7").addEventListener("click", () => {
    let h = document.querySelector("#head2");
    h.remove();
    
    let header = document.createElement("header");
    s2.append(header);
    let hed1=document.createElement("h1");
    hed1.innerText = "Add Feedback";
    hed1.setAttribute("id","head2");
    header.append(hed1);
    
    let div = document.createElement("div");
    div.setAttribute("id","div")
    header.append(div);

    let div1=document.createElement("div");
    div1.setAttribute("class","subdiv");
    div.append(div1);

    let para=document.createElement("p");
    para.innerText="Write your valuable feedback here"
    div1.append(para)

    let div2=document.createElement("div");
    div1.setAttribute("class","subdiv");
    div.append(div2);

    let ael = document.createElement("form");
    div2.append(ael);

    let n = document.createElement("input");
    n.type = "text";
    n.name = "name";
    n.placeholder = "Your name here";
    ael.append(n);

    let eml = document.createElement("input");
    eml.name = "email";
    eml.type = "email"; // Type should be 'email' for proper validation
    eml.placeholder = "Your email here";
    ael.append(eml);

    let tarea = document.createElement("textarea");
    tarea.name = "message";
    tarea.rows = "4";
    tarea.cols = "50";
    tarea.placeholder = "Your message here";
    ael.append(tarea);

    let submitButton = document.createElement("input");
    submitButton.type = "submit";
    submitButton.value = "Submit";
    ael.append(submitButton);
    
});

sub=document.querySelector("#f");
sub.onsubmit=(e)=>{
    e.preventDefault();
    i=document.querySelector("input");
    console.log(i.value);
}
