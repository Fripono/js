console.log(document.getElementsByTagName("title")[0]);

let myText = (element, text) => element.innerHTML = text;

myText(document.body, "привет");