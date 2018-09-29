console.log("--------------- Lesson 3.6 ---------------")

const Colored=document.querySelector(".colored");
console.log(Colored);

console.log(Colored.style);

//Colored.style.backgroundColor="blue";
Colored.style["background-color"]=prompt("Какой цвет?");