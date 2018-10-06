window.addEventListener("load",function(){
	console.log(document.getElementsByTagName("title")[0]);

	const button=document.querySelector(".button");
	const ball=document.querySelector(".ball");
	const par=document.querySelector(".show p");

	button.addEventListener("click", ()=>{
		ball.style.animationPlayState = "running";
	});

	window.onscroll = () =>{
		if (scrollY>=1000){
			par.style.opacity=1;
		}else{
			par.style.opacity=0.5;
		}
	}
});



