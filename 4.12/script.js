
	console.log(document.getElementsByTagName("title")[0]);

	const form=document.querySelector("form");
	
	form.onsubmit=function(e){
		e.preventDefault();
		console.log("Submited");
	}
