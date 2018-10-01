console.log(document.getElementsByTagName("title")[0]);

const Image=document.querySelector(".imageBlock");
let answer = prompt("Сколько тебе лет?");
answer=parseInt(answer);

if (answer<18){
	Image.style.backgroundImage="url(https://s5o.ru/storage/simple/ru/edt/30/52/1d/21/ruee49295d8ef.jpg)";
}else if (answer<=25){
	Image.style.backgroundImage="url(https://s5o.ru/storage/simple/ru/edt/9f/97/9d/f6/ruee3137e1fdc.jpg)";
}else{
	Image.style.backgroundImage="url(https://s5o.ru/storage/simple/ru/edt/68/49/cd/95/ruee5313b7758.jpg)";
}