var bluebutton = document.getElementById('bluecart');
var pinkbutton = document.getElementById('pinkcart');
var orangebutton = document.getElementById('orangecart');
var subtotal = document.getElementById('subtotal');
var total = document.getElementById('total');
var bluePressed = false;
var pinkPressed = false;
var orangePressed = false;
var beforetax = 0;


function calculateTotal(subtotal) {
  return (subtotal*1.0625).toFixed(2);
}




bluebutton.addEventListener('click',function(){
  if(bluePressed===false){
  	bluePressed = true;
  	beforetax +=29;
  }
  else{
  	bluePressed = false;
  	beforetax -=29;
  }
  subtotal.innerHTML = beforetax;
  total.innerHTML = calculateTotal(beforetax)
})

pinkbutton.addEventListener('click',function(){
  if(pinkPressed===false){
  	pinkPressed = true;
  	beforetax +=19;
  }
  else{
  	pinkPressed = false;
  	beforetax -=19;
  }
  subtotal.innerHTML = beforetax;
  total.innerHTML = calculateTotal(beforetax)
})

orangebutton.addEventListener('click',function(){
  if(orangePressed===false){
  	orangePressed = true;
  	beforetax +=39;
  }
  else{
  	orangePressed = false;
  	beforetax -=39;
  }
  subtotal.innerHTML = beforetax;
  total.innerHTML = calculateTotal(beforetax)
})



