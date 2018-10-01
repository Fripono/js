const rock = 0;
const scissors = 1;
const paper = 2;

// попросим игрока ввести ответ в виде числа
let player = parseInt(prompt('Your choice: 0 - rock, 1 - scissors, 2 - paper'));
// Рандомное число 0, 1 или 2 — разберем это позже, пока не заморачивайтесь
let computer = Math.floor(Math.random() * 3);

// опишем все условия и будем выводить в консоль 'computer win' или 'player win'

console.log("0 - rock, 1 - scissors, 2 - paper");

if ((player==0 && computer==0) || (player==1 && computer==1) || (player==2 && computer==2)){
	console.log("Player: "+player+"; Computer: "+computer+". DRAW!");
}else if ((player==0 && computer==1) || (player==1 && computer==2) || (player==2 && computer==0)){
	console.log("Player: "+player+"; Computer: "+computer+". PLAYER WIN!");
}else if ((player==0 && computer==2) || (player==1 && computer==0) || (player==2 && computer==1)){
	console.log("Player: "+player+"; Computer: "+computer+". COMPUTER WIN!");
}else{
	location.reload();
}