const buttons=document.querySelectorAll("button");

for (button of buttons) {
	console.log(button);
	button.style.backgroundColor = "red";
}//*/

let person={
	name: "Sasha",
	surname: "Patlukh",
	teacher:true
}

for(key in person){
	console.log(person['name']);
}

