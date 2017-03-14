var bluebutton = document.getElementById('bluecart');
var pinkbutton = document.getElementById('pinkcart');
var orangebutton = document.getElementById('orangecart');
var subtotalBox = document.getElementById('subtotal');
var totalBox = document.getElementById('total');
var bluePressed = false;
var pinkPressed = false;
var orangePressed = false;
var beforetax = 0;
var kart = document.getElementById('cart');

var blueShirt = {
  name:"Save My Trees",
  price: 29,
}
var pinkShirt = {
  name:"Nature Lover",
  price: 19,
}
var orangeShirt = {
  name:"Forrest Walk",
  price: 39,
}

var whatsInMyCart = [];



function updateCart(){
  var total = 0;
  whatsInMyCart.forEach(function(shirt){
     total+=shirt.price;
})

  subtotalBox.innerHTML = subtotal;


  var total = subtotal*1.065;

  totalBox.inneHTML = total.toFixed(2);
  
  }
    


bluebutton.addEventListener('click',function(){
  whatsInMyCart.push(blueShirt);
  updateCart();
})

pinkbutton.addEventListener('click',function(){
    whatsInMyCart.push(pinkShirt);
    updateCart();
})

orangebutton.addEventListener('click',function(){
    whatsInMyCart.push(orangeShirt);
    updateCart();
})


//Add to cart//


