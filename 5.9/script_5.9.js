let names = [
	[
		['куры', 'гуси', 'павлины'],
		['сокол', 'орел', 'соловей']
	],
	[
		['собака', 'кошка'],
		['обезьяна', 'рысь']
	]
]

names.forEach((items) => {
	items.forEach((item) => {
		item.forEach((animal_bird) => {
			console.log(animal_bird);
		})
	})
})
