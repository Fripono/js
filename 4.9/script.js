console.log(document.getElementsByTagName("title")[0]);

const button=document.querySelector("button");
const par=document.querySelector("p");

let state=true;

button.addEventListener("click",function(){
	if (state){
	par.style.display="block";
state=false;
}else{par.style.display="none";
	state=true;
}
})