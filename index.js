function onLoad(){
	var num = localStorage.getItem('numberOfItems');
	if(num){
		document.querySelector(".num-prod").textContent = "  "+num;
	}
}
onLoad();