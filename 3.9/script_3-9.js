console.log("Lesson 3.9");

document.body.style.backgroundColor=prompt("Какой будет фон у страницы?");
document.querySelector(".page").style.color=prompt("Какой будет цвет текста на странице?");
document.getElementsByClassName("name")[0].innerHTML=prompt("Как зовут человека, который вас вдохновляет?");
document.getElementsByTagName("img")[0].setAttribute("src",prompt("Введите адрес картинки:"));
document.querySelector(".shortBio").innerHTML+=" "+prompt("Введите текст страницы:");
document.querySelector(".shortBio").className+=" animated";
