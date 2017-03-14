var bluebutton = document.getElementById('bluecart');
var pinkbutton = document.getElementById('pinkcart');
var orangebutton = document.getElementById('orangecart');
var subtotalBox = document.getElementById('subtotal');
var totalBox = document.getElementById('total');
var beforetax = 0;
var htmlBox = document.getElementById('itemsInCart');

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
  var subtotal = 0;

  var html = "";

  whatsInMyCart.forEach(function(shirt){
     subtotal+=shirt.price;

     html+= `

      <div class="item"><h3>${shirt.name} $${shirt.price}</h3><div>

     `
  })

  subtotalBox.innerHTML = subtotal;


  var total = subtotal*1.065;

  totalBox.innerHTML = total.toFixed(2);

  htmlBox.innerHTML = html;
  
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


