

const buttonEl = document.getElementById('button');
const insertEl = document.getElementById('insert')
const inputEl = document.getElementById('text')

const resetEl = document.getElementById('reset')





const newWord = []

function inputValue() {
    const inputValue = inputEl.value
    input = inputValue
    text = []

    text.push(input)

     const newValue = text.toString()


     const newWordArray = newValue.split("") 

    

    newWord.push(newWordArray)

    move()

    
  
   
   
}


 scrambled = []


function move() {
 

    
    
  const tempWord = newWord[0].slice(0,2)
  const tempWord2 = newWord[0].slice(2,4)
  const tempWord3 = newWord[0].slice(4, 6)
  const tempWord4 = newWord[0].slice(6, 8)
  const tempWord5 = newWord[0].slice(8)
    const finalWord = tempWord2 + tempWord + tempWord3 + tempWord4 + tempWord5


  


 //const scrambledWord = newWord.concat(tempWord, tempWord2)
  
 
    scrambled.push(finalWord)


    console.log(tempWord, tempWord2, tempWord3, finalWord)

    
    return scrambled

   

}



function render( ){
    random = scrambled.toString()
    
    
    insertEl.innerText = random.replace(/,/g, '')

    console.log(random.replace(/,/g, ''))
    return random
}

function reset(){
    inputEl.value = ""
    insertEl.innerText = ''
    window.location.reload()


    
}




buttonEl.addEventListener('click', function(){

    inputValue()

    

    render()
})


resetEl.addEventListener('click', function(){

    reset()


})
