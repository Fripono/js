console.log("You are ar "+ window.location)

const byTag = document.getElementsByTagName("div");
const byClass = document.getElementsByClassName("myClass");
const byId = document.getElementById("myId");

console.log(byTag, byClass, byId);

const allbySelector=document.querySelectorAll(".coolClass.mine");
const firstbySelector = document.querySelector("div");
console.log(allbySelector,firstbySelector);

const quest=prompt("Что написать?");

byId.innerHTML="<h1>"+quest+"</h1>";
firstbySelector.innerHTML="<h1>firstbySelector</h1>";