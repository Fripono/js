let money=prompt('Сколько у вас с собой есть денег?');
let apples=prompt('Сколько вы купили яблок?');
let bread=prompt('Сколько вы купили батонов хлеба?');
let apple_cost=prompt('Сколькотоит одно яблоко?');
let bread_cost=prompt('Сколькотоит один батон хлеба?');
let itog=+money>=+(apples*apple_cost+bread*bread_cost);
window.onload = function itog_show(){
document.body.innerHTML=itog;
}