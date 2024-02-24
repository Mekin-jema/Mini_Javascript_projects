const prevBtns=document.querySelectorAll(".btn-previous")
const nextBtns=document.querySelectorAll(".btn-next")
const progress=document.getElementById(".btn-previous")
const formSteps=document.querySelectorAll(".form-step")
const progressSteps=document.querySelectorAll(".progress-step")

let step=0
// const prevBtns=document.querySelectorAll(".btn-previous")
// firt lets recive all next and previous buts
nextBtns.forEach((btns)=>{
    btns.addEventListener('click',()=>{
        step++
        updateProgressBar()
        updateFormSteps()
    })


})
prevBtns.forEach((btns)=>{
    btns.addEventListener('click',()=>{
        step--
        updateProgressBar()
        updateFormSteps()
    })

})
function updateProgressBar(){

}
fucntion updateFormSteps(){


}
