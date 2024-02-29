const control=document.querySelector('.controls')
const start_btn=document.querySelector('.startBtn')
const reset_btn=document.querySelector('.resetBtn')
const stop_btn=document.querySelector('.stopBtn')
const display=document.querySelector('.display')
// console.log("flsnflfs")


let timer=null
let startTime=0
let elapsedTime=0
let isRunning=false







start_btn.addEventListener('click',()=>{
    start()
})
function update(){
    
const current_time=Date.now()
const hour= Math.floor((current_time/((1000*60*60)))%24)
const minute=Math.floor((current_time/(1000*60))%60);
const second=Math.floor((current_time/1000)%60)
// const <o;osecond=Math.floor((current_time/1000)%60)
const miliSecond=Math.floor((current_time%1000)/10)

display.textContent=`${hour}:${minute}:${second}:${miliSecond}`

}


//let find he start time function start(){
    function start(){
    if(!isRunning){
        startTime=Date.now()-elapsedTime
        timer=setInterval(update,10)
    }
}

function stops(){

}

function  reset(){

}