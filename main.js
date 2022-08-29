 
 const price = [ '20', '30', '40' ]
 
 const buttonEl = document.getElementById('button')
 
 
 const insertEl = document.getElementById('insert')






buttonEl.addEventListener('click', function() {

   
    prices()

})


function prices() {
    
    prices = price
    prices.push('chuki')
    insertEl.innerText = prices
}