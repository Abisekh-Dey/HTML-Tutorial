//***HTML is not case sensetive it means each of the tags i can write in uppercase or lowercase alphabetic order
console.log("Abisekh Dey");
alert("This is my Website")
//1. Printing the document Object
console.log(window.document);
//or
console.log(document);
//2. Printing the property of document object
console.dir(window.document);
//or
console.dir(document);
//3. accessing the all child nodes of body of document object
console.log(document.body.childNodes);//the child nodes will be an array
//due to child nodes is an array I can use for in loop here 
for(let i in document.body.childNodes){
    console.log(document.body.childNodes[i]);//this will print the child nodes
    console.dir(document.body.childNodes[i]);//this will print the property of child class
}
//due to child nodes is an array I can use for of loop here
for(let i of document.body.childNodes){
    console.log(i);//this will print the child nodes
    console.dir(i);//this will print the property of child class
}
//4. Accessing the elements based on their id using getElementById("put Id name here") method
//Note: One element will have one unique Id other elements can not have same Id; if the same id name occurs to any other element then it will return the first element with specified Id name 
//Note: If the specified Id not present it will show null  
console.log(document.getElementById("Heading"));//This will find which element of document object has the Id named Heading and it will return this
console.dir(document.getElementById("Heading"));//This will print the property of the document object whose Id name is Heading
console.log(document.getElementById("Paragraph"));//This will find which element of document object has the Id named Paragraph and it will return this
console.dir(document.getElementById("Paragraph"));//This will print the property of the document object whose Id name is Paragraph
//5. Accessing the elements based on their class using getElementsByClassName("put class name here") method
//Note: If the specified class not present it will show HTMLCollection(0)
console.log(document.getElementsByClassName("Heading"));//This will print the elements comes under specified class Heading as an array
console.dir(document.getElementsByClassName("Heading"));//This will print the properties of the elements comes under specified class Heading
//6. Accessing the elements based on their tag using getElementsByTagName("put tag name here") method
//Note: If the specified tag not present it will show HTMLCollection(0)
console.log(document.getElementsByTagName("p"));//this will print the elements comes under specified tag
console.dir(document.getElementsByTagName("p"));//this will print the properties of specified tag
//7. Query Selector using this we can find the first specified(id/class/tag) in the document querySelector("put Id name here"/"put class name here"/"put tag name here")
//Note: It returns only an element with specified id/class/tag which comes first in the order (not all available id's/class/tags)
//Note: If the specified Id/class/tag not present it will show null  
console.log(document.querySelector("p"));//This will return the first element with p tag
console.dir(document.querySelector("p"));//This will return the property of the first element with p tag
console.log(document.querySelector(".Heading"));//This will return the first element of class - Heading; class is defined by a dot (.) before class name
console.dir(document.querySelector(".Heading"));//This will return the property of the first element of class - Heading; class is defined by a dot (.) before class name
console.log(document.querySelector("#Paragraph"));//This will return the first element with id - Paragraph; id is defined by (#) before class name
console.dir(document.querySelector("#Paragraph"));//This will return the property of the first element with id - Paragraph; id is defined by (#) before class name
//8. Use of querySelectorAll(id/class/tag)
//It finds all elements specified with ids/class/tags in the document and returns NodeList(elements)
//Note: If the specified ids/class/tags not present it will show NodeList(0)
console.log(document.querySelectorAll("p"));//This will return the all element with p tag
console.dir(document.querySelectorAll("p"));//This will return the property of the all element with p tag
console.log(document.querySelectorAll(".Heading"));//This will return the all element of class - Heading; class is defined by a dot (.) before class name
console.dir(document.querySelectorAll(".Heading"));//This will return the property of the all element of class - Heading; class is defined by a dot (.) before class name
console.log(document.querySelectorAll("#Paragraph"));//This will return the all element with id - Paragraph; id is defined by (#) before class name
console.dir(document.querySelectorAll("#Paragraph"));//This will return the property of the all element with id - Paragraph; id is defined by (#) before class name
//9. Use of tagName function to identify the tag name
el=document.querySelector("p");
console.log(el.tagName);
//10. Print the Children of body 
console.log(document.body.children);
//11. Print the Children of div1 index
el=document.querySelector("#div1").children;
console.log(el);
//12.Print the Child nodes of div1 index
console.log(document.querySelector("#div1").childNodes);
//13.Print the inner text comes under div2 index; it returns pure text content
console.log(document.querySelector("#div2").innerText);
console.log(document.querySelector("#div2").children[1].innerText);//This will print the inner text of children index 1
//14.Print the inner html comes under div2 index; it returns the html code with corresponding tags as the html code
console.log(document.querySelector("#div2").innerHTML);
console.log(document.querySelector("#div2").children[1].innerHTML);//This will print the inner HTML of children index 1
//15. Use of textContent to show the hidden element in the document
console.log(document.querySelector("h3"));//This will show the hidden element
console.log(document.querySelector("h3").textContent);
//16a. Print the attribute name of class or id of different tags
el=document.querySelector("div");
console.log(el.getAttribute("id"));//Because of I used queryselector it find the attribute name of the id of the div which is coming first in the order in the document; 
//16b. Print the attribute name of class or id of different tags
el=document.querySelector("p");
console.log(el.getAttribute("id"));
//16c. Print the attribute name of class or id of different tags
el=document.querySelector("h2");
console.log(el.getAttribute("class"));
//To see all arttribute name of id or class of any tag in the entire document i have to use querysectorall
el=document.querySelectorAll("div");
for(let i of el){
    console.log(i.getAttribute("id"));
}
//17a. Set attribute name of class or id of different tags
el=document.querySelector("div");
el.setAttribute("id","dividor1");//setting new name to attribute id of first div tag
console.log(el.getAttribute("id"));
//17b. Set attribute name of class or id of different tags
el=document.querySelector("h2");
el.setAttribute("class","header");//setting new name to attribute class of first h2 tag
console.log(el.getAttribute("class"));
//18. Accessing the style element of first div tag
st=document.querySelector("div").children;
st[0].style.backgroundColor="red";
st[1].style.color="brown";
st[1].style.fontSize="30px";
st[1].innerText="Hello;"+" "+st[1].innerText;
st[1].style.width="500px";
//19a. Add/insert element in the document
el=document.createElement("button");//creates the element tag
el.innerText="Click Me";
e=document.querySelector("#div2");
e.append(el);//adds element at the end of the node (inside)
//19b. Add/insert element in the document
el=document.createElement("p");//creates the element tag
el.innerHTML="<i>List of colours</i>";
e=document.querySelector("#div2");
e.prepend(el);//adds element at the start of the node (inside)
//19c. Add/insert element in the document
el=document.createElement("p");//creates the element tag
el.innerText="Adding paragraph tag before id - list";
e=document.querySelector("#list");
e.before(el);//adds element before the node (outside)
//19c. Add/insert element in the document
el=document.createElement("p");//creates the element tag
el.innerText="Adding paragraph tag after id - list";
e=document.querySelector("#list");
e.after(el);//adds element after the node (outside)
//20. Delete/Remove element from the document
el=document.querySelector("#p2");
el.remove();