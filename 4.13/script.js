window.addEventListener("load",function(){
	console.log(document.getElementsByTagName("title")[0]);

	const button=document.querySelector(".request");
	const popup=document.querySelector(".popup");
	const closepopup=document.querySelector(".closePopup");
	const openMenu=document.querySelector(".openMenu");
	const menu=document.querySelector(".menu");
	const closeMenu=document.querySelector(".closeMenu");


	button.onclick=function() {
		popup.style.display="flex";
	}

	closepopup.onclick=function(){
		popup.style.display="none";
	}

	openMenu.onclick=function(){
		menu.style.left="0";
	}

	closeMenu.onclick=function(){
		menu.style.left="-50vw";	
	}
});



