var firebaseConfig = {
    apiKey: "AIzaSyCuuXvFTx6FtiQmBgF_SYI2qGf76q2Xu9M",
    authDomain: "sunspot-orders.firebaseapp.com",
    databaseURL: "https://sunspot-orders.firebaseio.com",
    projectId: "sunspot-orders",
    storageBucket: "sunspot-orders.appspot.com",
    messagingSenderId: "874089914197",
    appId: "1:874089914197:web:75bd148ad4d0f5dfbb99dc",
    measurementId: "G-D3W05PCPW6"
  };
  // Initialize Firebase
  firebase.initializeApp(firebaseConfig);
  firebase.analytics();
  // console.log(firebase);
  var database = firebase.database();

var form = document.querySelector(".checkout-form");
form.addEventListener('submit', handleForm);
function handleForm(event) { event.preventDefault(); } 
let submit = document.querySelector(".submit-but");
submit.addEventListener("click",function(event){
  let form = document.querySelector(".checkout-form");
  if(form.checkValidity()===false){
    // console.log("yo");
    event.preventDefault();
    event.stopPropagation();
    form.classList.add('was-validated');
  }
  else{

    console.log("damn");
    // $('.num-prod').text(" 6");
    // clearAll();
    // $('.checkout-form').css("display","none");
    var orders = localStorage.getItem('productsInCart');
          orders = JSON.parse(orders);
          var ord="";
          for(var i=0;i<orders.length;i++){
            ord+="{product: ";
            ord+=orders[i].name;
            ord+=",weight: ";
            ord+=orders[i].weight;
            ord+=",price : ";
            ord+=orders[i].price;
            ord+=",quantity: ";
            ord+=orders[i].inCart;
            ord+="},";
          }


          var today = new Date();
          var date = today.getDate()+'-'+(today.getMonth()+1)+'-'+today.getFullYear();
          var time = today.getHours() + ":" + today.getMinutes() + ":" + today.getSeconds();
          var dateTime = date+' '+time;
          // console.log(orders);
          // orders  = JSON.parse(orders);
          var name = document.getElementById("validationCustom01").value;
          // console.log(name);
          var mobile = document.getElementById("validationCustom02").value;
          var email = document.getElementById("validationCustom03").value;
          var address = document.getElementById("validationCustom04").value;
          var landmark = document.getElementById("validationCustom05").value;
          var pincode = document.getElementById("validationCustom07").value;
          var city = document.getElementById("validationCustom06").value;
          var ref = database.ref('orders');
          var order={
            pincode : pincode,
            city : city,
            landmark : landmark,
            address: address,
            email : email,
            mobile : mobile,
            name : name,
            ord : ord,
            date : dateTime
          };
          ref.push(order);
          localStorage.clear();
          clearAll();
          $('.empty-cart').text("Thank you for placing your order. We'll contact you shortly regarding payment process.");
  }
});
function onLoad(){
  var num = localStorage.getItem('numberOfItems');
  if(num){
    document.querySelector(".num-prod").textContent = "  "+num;
  }

}

function clearAll(){
  console.log("hey");
  $('.checkout-form ').css("display","none");
  $('.num-prod').text(" 0");
}

onLoad();