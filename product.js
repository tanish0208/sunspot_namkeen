let products = [
	{
		name: "Bikaneri Sev",tag: "bikaneri-sev.jpg",id: "bika-200",weight : "200g",price : 40,inCart: 0
	},
	{
		name: "Bikaneri Sev",tag: "bikaneri-sev.jpg",id: "bika-400",weight : "400g",price : 75,inCart: 0
	},
	{
		name: "Bikaneri Sev",tag: "bikaneri-sev.jpg",id: "bika-1",weight : "1KG",price : 180,inCart: 0
	},
	{
		name: "Ratlami Sev",tag: "Ratlami Sev.jpg",id: "rat-200",weight : "200g",price : 35,inCart : 0
	},
	{
		name: "Ratlami Sev",tag: "Ratlami Sev.jpg",id: "rat-400",weight : "400g",price : 70,inCart : 0
	},
	{
		name: "Ratlami Sev",tag: "Ratlami Sev.jpg",id: "rat-1",weight : "1KG",price : 170,inCart : 0
	},
	{	
		name: "Alu Sev",tag: "Alu Sev.jpg",id: "alu-sev-200",weight : "200g",price : 40,inCart : 0
	},
	{	
		name: "Alu Sev",tag: "Alu Sev.jpg",id: "alu-sev-400",weight : "400g",price : 75,inCart : 0
	},
	{	
		name: "Alu Sev",tag: "Alu Sev.jpg",id: "alu-sev-1",weight : "1KG",price : 180,inCart : 0
	},
	{	
		name: "Lahsun Sev",tag: "Lahsan Sev.jpg",id: "lahsan-sev-200",weight : "200g",price : 35,inCart : 0
	},
	{
		name: "Sada Sev",tag: "Sada Sev.jpg",id: "sada-sev-200",weight : "200g",price : 30,inCart : 0	
	},
	{	
		name: "Sing Bhujia",tag: "sing-bhujia.jpg",id: "sing-bhujia-200",weight : "200g",price : 35,inCart : 0
	},
	{	
		name: "Sing Bhujia",tag: "sing-bhujia.jpg",id: "sing-bhujia-400",weight : "400g",price : 70,inCart : 0
	},
	{	
		name: "Sing Bhujia",tag: "sing-bhujia.jpg",id: "sing-bhujia-1",weight : "1KG",price : 170,inCart : 0
	},
	{	
		name: "Chana Jorgaram",tag: "Chana Jorgaram.jpg",id: "chanajor-200",weight : "200g",price : 35,inCart : 0
	},
	{	
		name: "Ganthiya",tag: "Ganthiya.jpg",id: "ganthiya-200",weight : "200g",price : 30,inCart : 0
	},
	{	
		name: "Ganthiya",tag: "Ganthiya.jpg",id: "ganthiya-400",weight : "400g",price : 60,inCart : 0
	},
	{	
		name: "Ganthiya",tag: "Ganthiya.jpg",id: "ganthiya-1",weight : "1KG",price : 145,inCart : 0
	},
	{	
		name: "Khatta-Mitha Mix",tag: "Khatta-Mitha Mix.jpg",id: "khatta-200",weight : "200g",price : 30,inCart : 0
	},
	{	
		name: "Khatta-Mitha Mix",tag: "Khatta-Mitha Mix.jpg",id: "khatta-400",weight : "400g",price : 60,inCart : 0
	},
	{	
		name: "Khatta-Mitha Mix",tag: "Khatta-Mitha Mix.jpg",id: "khatta-1",weight : "1KG",price : 145,inCart : 0
	},
	{	
		name: "Chavana-Sweet",tag: "Mixture-Sweet.jpg",id: "chavana-200",weight : "200g",price : 30,inCart : 0
	},
	{	
		name: "Chavana-Sweet",tag: "Mixture-Sweet.jpg",id: "chavana-400",weight : "400g",price : 60,inCart : 0
	},
	{	
		name: "Chavana-Sweet",tag: "Mixture-Sweet.jpg",id: "chavana-1",weight : "1KG",price : 145,inCart : 0
	},
	{	
		name: "Rajasthani Mix",tag: "Rajasthani Mixture.jpg",id: "rajasthani-200",weight : "200g",price : 30,inCart : 0
	},
	{	
		name: "Rajasthani Mix",tag: "Rajasthani Mixture.jpg",id: "rajasthani-400",weight : "400g",price : 60,inCart : 0
	},
	{	
		name: "Rajasthani Mix",tag: "Rajasthani Mixture.jpg",id: "rajasthani-1",weight : "1KG",price : 145,inCart : 0
	},
	{	
		name: "Daalmoth",tag: "Daal Moth.jpg",id: "daalmoth-200",weight : "200g",price : 30,inCart : 0
	},
	{	
		name: "Moong Daal",tag: "moong-daal.jpg",id: "moong-daal-200",weight : "200g",price : 45,inCart : 0
	},
	{	
		name: "Moong Daal",tag: "moong-daal.jpg",id: "moong-daal-400",weight : "400g",price : 85,inCart : 0
	},
	{	
		name: "Moong Daal",tag: "moong-daal.jpg",id: "moong-daal-1",weight : "1KG",price : 200,inCart : 0
	},
	{	
		name: "Chana Daal",tag: "Chana Daal.jpg",id: "chana-daal-200",weight : "200g",price : 35,inCart : 0
	},
	{	
		name: "Chana Daal",tag: "Chana Daal.jpg",id: "chana-daal-400",weight : "400g",price : 70,inCart : 0
	},
	{	
		name: "Chana Daal",tag: "Chana Daal.jpg",id: "chana-daal-1",weight : "1KG",price : 170,inCart : 0
	},
	{	
		name: "Boondi-Tikhi",tag: "Boondi-Masala.jpg",id: "boondi-tikhi-200",weight : "200g",price : 30,inCart : 0
	},
	{	
		name: "Boondi-Salted",tag: "Boondi-Salted.jpg",id: "boondi-salted-200",weight : "200g",price : 30,inCart : 0
	},
	{	
		name: "Falahari Chivda-Tikha",tag: "Farali Chevda-Masala.jpg",id: "farali-tikha-200",weight : "200g",price : 35,inCart : 0
	},
	{	
		name: "Falahari Chivda-Tikha",tag: "Farali Chevda-Masala.jpg",id: "farali-tikha-400",weight : "400g",price : 70,inCart : 0
	},
	{	
		name: "Falahari Chivda-Tikha",tag: "Farali Chevda-Masala.jpg",id: "farali-tikha-1",weight : "1KG",price : 170,inCart : 0
	},
	{	
		name: "Falahari Chivda-Sweet",tag: "Farali Chevda-Masala.jpg",id: "farali-sweet-200",weight : "200g",price : 35,inCart : 0
	},
	{	
		name: "Falahari Chivda-Sweet",tag: "Farali Chevda-Masala.jpg",id: "farali-sweet-400",weight : "400g",price : 70,inCart : 0
	},
	{	
		name: "Falahari Chivda-Sweet",tag: "Farali Chevda-Masala.jpg",id: "farali-sweet-1",weight : "1KG",price : 170,inCart : 0
	},
	{	
		name: "Makai Chevdo",tag: "Makai Chevdo.jpg",id: "makai-200",weight : "200g",price : 25,inCart : 0
	},
	{	
		name: "Pauwa Chevdo",tag: "Pauwa Chevdo.jpg",id: "pauwa-200",weight : "200g",price : 25,inCart : 0
	},
	// {	
	// 	name: "Alu Laccha",tag: "Potato Sticks.jpg",weight : "1KG",price : 140,inCart : 0
	// },
	{	
		name: "Kela Wafer-Kali Mirch",tag: "banana-chips.jpg",id: "kela-wafer-200",weight : "200g",price : 35,inCart : 0
	},
	{	
		name: "Kela Wafer-Kali Mirch",tag: "banana-chips.jpg",id: "kela-wafer-400",weight : "400g",price : 70,inCart : 0
	},
	{	
		name: "Kela Wafer-Kali Mirch",tag: "banana-chips.jpg",id: "kela-wafer-1",weight : "1KG",price : 170,inCart : 0
	},
	{	
		name: "Kela Wafer-Masala",tag: "Banana Chips-Masala.jpg",id: "kela-wafer-masala-200",weight : "200g",price : 35,inCart : 0
	},
	{	
		name: "Alu Wafer-Salted",tag: "Potato Chips-Salted.jpg",id: "alu-wafer-salted-95",weight : "95g",price : 20,inCart : 0
	},
	{	
		name: "Alu Wafer-Salted",tag: "Potato Chips-Salted.jpg",id: "alu-wafer-salted-200",weight : "200g",price : 40,inCart : 0
	},
	{	
		name: "Alu Wafer-Salted",tag: "Potato Chips-Salted.jpg",id: "alu-wafer-salted-400",weight : "400g",price : 75,inCart : 0
	},
	{	
		name: "Alu Wafer-Salted",tag: "Potato Chips-Salted.jpg",id: "alu-wafer-salted-1",weight : "1KG",price : 180,inCart : 0
	},
	{	
		name: "Alu Wafer-Rippled(Salted)",tag: "Potato Chips-Rippled.jpg",id: "alu-wafer-rippled-200",weight : "200g",price : 40,inCart : 0
	},
	{	
		name: "Alu Wafer-Masala",tag: "Potato Chips-Masala.jpg",id: "alu-wafer-masala-95",weight : "95g",price : 20,inCart : 0
	},
	{	
		name: "Alu Wafer-Masala",tag: "Potato Chips-Masala.jpg",id: "alu-wafer-masala-200",weight : "200g",price : 40,inCart : 0
	},
	{	
		name: "Alu Wafer-Masala",tag: "Potato Chips-Masala.jpg",id: "alu-wafer-masala-400",weight : "400g",price : 75,inCart : 0
	},
	{	
		name: "Alu Wafer-Masala",tag: "Potato Chips-Masala.jpg",id: "alu-wafer-masala-1",weight : "1KG",price : 180,inCart : 0
	},
	{	
		name: "Sing Chikki",tag: "Sing Chikki.jpg",id: "sing-chikki-400",weight : "400g",price : 65,inCart : 0
	},
	{	
		name: "Til Chikki",tag: "Til Chikki.jpg",id: "til-chikki-400",weight : "400g",price : 80,inCart : 0
	},
	{	
		name: "Masala Khakhra",tag: "masala.jpg",id: "masala-khakhra-500",weight : "500g",price : 70,inCart : 0
	},
	{	
		name: "Methi Khakhra",tag: "methi.jpg",id: "methi-khakhra-500",weight : "500g",price : 70,inCart : 0
	},
	{	
		name: "Jeera Khakhra",tag: "jeera.png",id: "jeera-khakhra-500",weight : "500g",price : 70,inCart : 0
	},
	{	
		name: "Sada Khakhra",tag: "sada.png",id: "sada-khakhra-500",weight : "500g",price : 70,inCart : 0
	}

];
// let x = products[2].tag;
// let prodArr = [];
let cart = document.querySelectorAll(".add-cart");
for(let i=0;i<cart.length;i++){
	cart[i].addEventListener("click",function(){
		// console.log(products[i]);
		// console.log(cart[i].textContent);
		if(cart[i].textContent==="Add To Cart"){
			// alert("added to cart");
			cartNumber(products[i]);
			cart[i].textContent = "Added To Cart";
			// animateCart();
		}
		else{
			alert("product is already in cart");
		}
		// totalCost(products[i]);
	})
}

function onLoad(){
	let num = localStorage.getItem('numberOfItems');
	if(num){
		document.querySelector(".num-prod").textContent = " "+num;
	}
}
$('.dropdown-toggle').text("Packaging Sizes");
function cartNumber(product){
	let numOfProducts = localStorage.getItem('numberOfItems');
	numOfProducts = parseInt(numOfProducts);
	let numProd = document.querySelector(".num-prod");
	if(numOfProducts){
		localStorage.setItem('numberOfItems',numOfProducts+1);
		numProd.textContent = numOfProducts + 1;
	}
	else{
		localStorage.setItem('numberOfItems',1);
		numProd.textContent = 1;
	}
	setItems(product);
}

function setItems(product){
	let prodArr = localStorage.getItem('productsInCart');
	if(prodArr!=null){
		prodArr = JSON.parse(prodArr);
		console.log(prodArr.length);
		let flag = false;
		for(let i=0;i<prodArr.length;i++){
			if(prodArr[i].id==product.id){
				prodArr[i].inCart++;
				flag = true;
				break;
			}
		}
		if(!flag){
			product.inCart = 1;
			prodArr.push(product);
		}	
	}
	else{
		prodArr = [];
		product.inCart = 1;
		prodArr.push(product);
		// console.log(prodArr);
	}
	localStorage.setItem('productsInCart',JSON.stringify(prodArr));	

}


onLoad();




	$('.add-cart').on('click', function () {
        var cart = $('.shopping-cart');
        var imgtodrag = $(this).parent().parent().parent().parent().find("img");

        console.log(imgtodrag);
        if (imgtodrag) {
            var imgclone = imgtodrag.clone()
                .offset({
                top: imgtodrag.offset().top,
                left: imgtodrag.offset().left
            })
                .css({
                'opacity': '0.8',
                    'position': 'absolute',
                    'height': '150px',
                    'width': '150px',
                    'z-index': '100'
            })
                .appendTo($('body'))
                .animate({
                'top': cart.offset().top + 10,
                    'left': cart.offset().left + 10,
                    'width': 75,
                    'height': 75
            }, 1000, 'easeInOutExpo');
            
            setTimeout(function () {
                cart.effect("shake", {
                    times: 2
                }, 200);
            }, 1500);

            imgclone.animate({
                'width': 0,
                    'height': 0
            }, function () {
                $(this).detach()
            });
        }
    });
        