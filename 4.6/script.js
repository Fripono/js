console.log(document.getElementsByTagName("title")[0]);

let myFunc = function(element, color){
	element.style.backgroundColor=color;
}

const head=document.querySelector("h1");
const par=document.querySelector("p");

myFunc(head,"red");
myFunc(par,"green");