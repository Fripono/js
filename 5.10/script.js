let crypto = [
	{
	  name : "Bitcoin",
	  price: 1388.37
	},
	{
	  name : "Ethereum",
	  price: 716
	},
	{
	  name : "Litecoin",
	  price: 140
	}
  ]
let str="";
crypto.forEach((elem) => {
	str=str+"<h1></h1><p></p><div></div>";
});

document.body.innerHTML=str;

const h=document.getElementsByTagName("h1");
const p=document.getElementsByTagName("p");
const div=document.getElementsByTagName("div");

div[0].style.backgroundColor="red";
div[1].style.backgroundColor="blue";
div[2].style.backgroundColor="green";

for (let i=0; i<crypto.length; i++){
	h[i].innerHTML=crypto[i].name;
	h[i].style.font="bold 150% serif";
	p[i].innerHTML=crypto[i].price;
	p[i].style.font="italic 110% serif";
	div[i].style.width=crypto[i].price+"px";
	div[i].style.height="50px";
}