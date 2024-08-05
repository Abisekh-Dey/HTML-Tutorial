//1a. Add this line "It's My Webpage" into h2 heding
el=document.querySelector("h2");
txt="It's My Webpage";
el.innerText=el.innerText+" "+txt;//Concatination is done here
console.log(el);
//1b. Add Welcome in h2 heading using indexing in body.children[0]
el=document.body.children[0].innerText;
el=el+" "+"Welcome";
document.body.children[0].innerText=el;
console.log(el)
//1c. Add ! in h2 heading using for of loop
el=document.body.children;
for(let i of el){
    if(i.tagName=="H2"){//Finding the tag name 
        i.innerText=i.innerText+" "+"!";
    }
}
////1d. Add Everyone in h2 heading using for in loop
el=document.body.children;
for(let i in el){
    if(el[i].tagName=="H2"){//Finding the tag name 
        el[i].innerText=el[i].innerText+" "+"Everyone";
    }
}
//2. Change the inner text of all divs which comes under the same class "Box"
divs=document.querySelectorAll(".Box");

for(let i=0;i<divs.length;i++){
    x=prompt(`Enter The Text[${i}]`);//This will also work to change the innertext dinamically by the user 
    divs[i].innerText=x;
}

divs[0].innerText="Abisekh";
divs[1].innerText="Pallabi";
divs[2].innerText="Raktim";

names=["Abisekh","Pallabi","Raktim"];//Doing the same thing as the previous 3 lines but using the for in loop
for(let i in divs){
    divs[i].innerText=names[i];
}
j=0;
for(let i of divs){//Doing the same thing using for of loop but when we will use for of loop here then i have to mention initiating variable outside of the loop to iterate the names array; here the initiating variable is j=0
    i.innerText=names[j];
    j++;
}