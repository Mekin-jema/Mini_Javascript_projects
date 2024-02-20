const count=document.querySelector('.counter')
const decrease=document.getElementById('decrease')
const reset=document.getElementById('reset')
const increase=document.getElementById('increase')
let count_value=0
decrease.addEventListener('click', function(){
    // myRandom()
  count_value=count_value-1
  console.log("hello")
  count.innerHTML=count_value
})
increase.addEventListener('click', function(){
  console.log("jflsjfl;sf")
  count_value++
  count.innerHTML=count_value
    
})
reset.addEventListener('click', function(){
  console.log("jflsjfl;sf")
 count_value=0
 count.innerHTML=count_value 
})


