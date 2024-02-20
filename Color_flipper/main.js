const colors=['green','red','yellow',"lightgreen"]
const btn=document.getElementById('btn')
const  content=document.querySelector('.color')
btn.addEventListener('click',function(){
const randomNum=myRandom()
console.log(randomNum)
    document.body.style.backgroundColor=colors[randomNum]
    content.innerHTML=colors[randomNum]
})

function myRandom(){
    console.log("Hello everyone")
    return Math.floor(Math.random()*colors.length)
    
}


// color flipper using hex value


