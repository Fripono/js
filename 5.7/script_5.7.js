let itog="";
for(let i=1; i<=100000; i++){
	if (i%6==0){
		itog= itog+"<p>"+i+"</p>";
	}
}
document.body.innerHTML=itog;

	