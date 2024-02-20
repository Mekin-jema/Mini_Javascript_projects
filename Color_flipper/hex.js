const hexColors=[1,2,3,4,5,6,7,8,9,"A","B","c","D",'E',"F"]
let initialHex="#"
let newHexColor=[]
const btn=document.getElementById('btn')
const  contents=document.querySelector('.hex-color')
btn.addEventListener("click",function(){
    let i=0
    while(i<6){
        // const hexRandoms=hexRandom()
        initialHex += hexColors[hexRandom()]
        i++
     }
    //  newHexColor.append(initialHex)
     console.log(newHexColor)
     document.body.style.backgroundColor=initialHex
     contents.innerHTML=initialHex
     initialHex="#"
    //  j++
})

function hexRandom(){
    console.log("Hello everyone")
    return Math.floor(Math.random()*hexColors.length)
    
}


