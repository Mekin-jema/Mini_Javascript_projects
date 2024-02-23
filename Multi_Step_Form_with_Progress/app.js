const preBtns=document.querySelectorAll('.btn');
const nextBtns=document.querySelectorAll('.btn-next');
const progress=document.getElementById('.progress');
const formSteps=document.querySelectorAll('.form-step');

let formStepsNum=0
nextBtns.forEach(btn=>{
    btn.addEventListener('click',()=>{
        formStepsNum++;
        updateFormSteps();
    })
})
function updateFormSteps(){
    formSteps.forEach(formStep=>
        {
            formStep.contains('active')&& formStep.classList.remove('active')
        })
    formSteps[formStepsNum].classList.add('active')
}

 