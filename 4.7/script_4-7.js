function haveEnough(money,apples,bread,apple_cost,bread_cost){
	let itog;
	(money<(apples*apple_cost+bread*bread_cost)) ? itog="Вам не хватает денег" : itog= "Вам хватает денег на покупки";
	return itog;
}

document.body.innerHTML=haveEnough(prompt('Сколько у вас с собой есть денег?'), prompt('Сколько вы купили яблок?'), prompt('Сколько вы купили батонов хлеба?'), prompt('Сколькотоит одно яблоко?'), prompt('Сколькотоит один батон хлеба?'));
