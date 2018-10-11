console.log(document.getElementsByTagName("title")[0]);

let people=["Vasya","Petya","Sasha"];

console.log(people);
console.log(people[1]);
people[1]="Yura";
console.log(people[1]);
console.log(people.length);

let bigArray=[
	[1,2,3],
	[true,false],
	["a","b","c"]
];

console.log(bigArray[0][2]);

let bigObject={
	names:["Vasya","Petya","Sasha"],
	grades:[
		{
			intern:1,
			junior:2
		},{
			middle:3,
			senior:4
		}
	]
}

console.log(bigObject.grades[1].middle);

const cart = {
	orderID: 12345,
	shopperName: "Ваня Иванов",
	shopperEmail: "ivanov@example.com",
	contents: [
	  {
		productID: 34,
		productName: "Супер товар",
		quantity: 1
	  },
	  {
		productID: 56,
		productName: "Чудо товар",
		quantity: 3
	  }
	],
	orderCompleted: true
  }

console.log(cart.contents[1].productName);