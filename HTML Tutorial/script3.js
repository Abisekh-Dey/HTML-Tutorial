//1. Add a button at the starting of the html body using js and add text colour white and background colour=red
btn=document.createElement("button");
btn.innerText="Click Me!";
btn.style.color="white";
btn.style.backgroundColor="red";
document.querySelector("body").prepend(btn);
//2.Adding styling of a new class "new_p1" in p tag without deleting the styling of the previous class "p1" 
//I'm just appending the styling of a new class "new_p1" into the "p1" class styling; p1 class I've pre-defined in html document and the styling of the class "p1" in css
document.querySelector("p").classList.add("new_p1");
//3.Deleting styling of a new class "new_p1" in p tag without deleting the styling of the previous class "p1"
// document.querySelector("p").classList.remove("new_p1");
//4.Adding styling of a new class "new_p1" in p tag by deleting the styling of the previous class "p1"
// el=document.querySelector("p").setAttribute("class","new_p1");