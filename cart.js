function onLoad(){
	var num = localStorage.getItem('numberOfItems');
	if(num){
		document.querySelector(".num-prod").textContent = "  "+num;
	}
}

function displayCart(){
	let prodArr = localStorage.getItem('productsInCart');
	prodArr = JSON.parse(prodArr);
	// console.log(prodArr==null);
	console.log(prodArr);
	let prodBox = document.querySelector(".prod-row");
	prodBox.innerHTML = "";
	if(prodArr!=null){
		for(let i=0;i<prodArr.length;i++){
	// console.log(prodArr[i].name);
		prodBox.innerHTML+="<div class=\"col-xl-3 col-lg-4 col-sm-6 row-col\">"+"<img class=\"prod-image\" src=\""
		+prodArr[i].tag+"\">"+"<div class=\"context\">"+"<p class=\"prod-title\">"+prodArr[i].name
		+"<p class=\"weight\">("+prodArr[i].weight+")"+"</p>"
		+"<p class=\"prod-price\">"+"Price :  <i class=\"fas fa-rupee-sign\"></i>"+" "+prodArr[i].price+"</p>"
		+"<p class=\"qty\">Qty."+"</p>"+"<button type=\"button\" class=\"quant-minus\"><i class=\"fas fa-minus\"></i></button>"
		+prodArr[i].inCart+"<button type=\"button\" class=\"quant-plus\"><i class=\"fas fa-plus\"></i></button>"
		+"<button type=\"button\" class=\"prod-but\">Remove</button>"+"</div>"
		+"</div>";
		}
	}
	if(prodArr==null||prodArr.length==0){
		// console.log("yo");
		$('.your-cart').css("display","none");
		$('.prod-button').css("display","inline-block");
		$('.empty-cart').text("There's nothing in your cart. Let's add some items");
		$('.empty-cart').css("display","inline-block");
		$('.empty-div').css("display","block");
		$('.table').css("display","none");
		$('.checkout').css("display","none");
	}
	else{
		$('.prod-button').css("display","none");
		$('.empty-cart').css("display","none");
		$('.empty-div').css("display","none");
	}
	but();
	quantityChange();
	// console.log(prodArr);	
}
function quantityChange(){
	let quantsPlus = document.querySelectorAll('.quant-plus');
	let quantsMinus = document.querySelectorAll('.quant-minus');
	for(let i=0;i<quantsPlus.length;i++){
		quantsPlus[i].addEventListener("click",function(){
			let prodArr = localStorage.getItem('productsInCart');
			prodArr = JSON.parse(prodArr);
			prodArr[i].inCart++;
			let numberOfItems = localStorage.getItem('numberOfItems');
			numberOfItems = parseInt(numberOfItems);
			numberOfItems++;
			localStorage.setItem('numberOfItems',numberOfItems);
			localStorage.setItem('productsInCart',JSON.stringify(prodArr));
			onLoad();
			displayCart();
			calculateTotal();
		});
	}

	for(let i=0;i<quantsMinus.length;i++){
		quantsMinus[i].addEventListener("click",function(){
			let prodArr = localStorage.getItem('productsInCart');
			prodArr = JSON.parse(prodArr);
			if(prodArr[i].inCart>1){
				prodArr[i].inCart--;
				let numberOfItems = localStorage.getItem('numberOfItems');
				numberOfItems = parseInt(numberOfItems);
				numberOfItems--;
				localStorage.setItem('numberOfItems',numberOfItems);
				localStorage.setItem('productsInCart',JSON.stringify(prodArr));
				onLoad();
				displayCart();
				calculateTotal();
			}
		});
	} 
}
function but(){
	let buttons = document.querySelectorAll(".prod-but");
	for(let i=0;i<buttons.length;i++){
		buttons[i].addEventListener("click",function(){
			// console.log("button clicked");
			let prodArr = localStorage.getItem('productsInCart');
			prodArr = JSON.parse(prodArr);
			let numberOfItems = localStorage.getItem('numberOfItems');
			numberOfItems = parseInt(numberOfItems);
			numberOfItems-=prodArr[i].inCart;
			localStorage.setItem('numberOfItems',numberOfItems);
			onLoad();
			prodArr.splice(i,1);
			localStorage.setItem('productsInCart',JSON.stringify(prodArr));
			displayCart();
			calculateTotal();
		})
	}
}
function calculateTotal(){
	let prodArr = localStorage.getItem('productsInCart');
	prodArr = JSON.parse(prodArr);
	if(prodArr==null)
		return;
	let totalCost = 0;
	for(let i=0;i<prodArr.length;i++){
		totalCost += prodArr[i].price*prodArr[i].inCart;
	}
	let final = parseInt(totalCost) + 100;
	document.querySelector(".subtotal-amount").innerHTML="<i class=\"fas fa-rupee-sign\"></i>"+" "+totalCost;
	// document.querySelector(".total-amount").innerHTML="<i class=\"fas fa-rupee-sign\"></i>"+" "+final;
}
displayCart();
onLoad();
calculateTotal();

