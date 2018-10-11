console.log(document.getElementsByTagName("title")[0]);

let person={
	name:"Саша",
	surname:"Патлух",
	age:30,
	teacher:true,
	sayHallo:function(){
		return "Hallo "+this.name;
	}
}

console.log(person.name);
console.log(person.sayHallo());

person.canCode=true;

person.age=29;