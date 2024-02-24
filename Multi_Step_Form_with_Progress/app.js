const preBtns = document.querySelectorAll('.btn-previous');
const nextBtns = document.querySelectorAll('.btn-next');
const progress = document.getElementById('progress'); // Fix: Removed the dot before 'progress'
const formSteps = document.querySelectorAll('.form-step');
progressSteps=document.querySelectorAll('.progress-step')
// console.log(progressSteps)

let formStepsNum = 0;

nextBtns.forEach(btn => {
    btn.addEventListener('click', () => {
        formStepsNum++;
        updateFormSteps();
        updateProgressBar()
    });
});

preBtns.forEach(btn => {
    btn.addEventListener('click', () => {
        formStepsNum--;
        updateFormSteps();
        updateProgressBar()

    });
});

function updateFormSteps() {
    formSteps.forEach(formStep => {
        formStep.classList.contains('active')
         && formStep.classList.remove('active');
    });
    formSteps[formStepsNum].classList.add('active');
}


function updateProgressBar(){
    progressSteps.forEach((e,index)=>{
        if(index<formStepsNum+1){
        e.classList.add('active');
    }
    else{
        e.classList.remove('active')
    }})
    const progressActive=document.querySelectorAll('.progress-step.active')
    progress.style.width=(progressActive.length-1)/(progressSteps.length-1)*100+'%'

}
