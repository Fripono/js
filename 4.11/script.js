 /*window.click = function() {console.log(this);}

 const button=document.querySelector("button");
 button.onclick=function() {
 	console.log(this);
 	this.innerHTML="Pressed";
 }
//*/
const button=document.querySelector("button");
 button.onclick=() => {
 	console.log(this);
 }