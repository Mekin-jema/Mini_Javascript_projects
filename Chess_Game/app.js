// const gameBoard=document.querySelector('#gameborad')
const gameBoard = document.querySelector(".gameboard");
const playerDisplay=document.querySelector(".player")
const infoDisplay=document.querySelector(".info-display")
let playerGo='black'
playerDisplay.textContent='black '
const width=8

// console.log(gameBoard)
// we gognna use svgs form the font awesome icons
const startPieces=[  
    rook,knight,bishop,queen,king,bishop,knight,rook,
    pawn,pawn,pawn,pawn, pawn, pawn, pawn,pawn,
    '','','','','','','','',
    '','','','','','','','',
    '','','','','','','','',
    '','','','','','','','',
    // '','','','','','','','',
    pawn,pawn,pawn,pawn, pawn, pawn, pawn,pawn,
    rook,knight,bishop,queen,king,bishop,knight,rook,


]

function createBoard() {
    startPieces.forEach((startPiece, i) => {
        const square = document.createElement('div');
        square.classList.add('square');

        // square.classList.add('beige')
        square.innerHTML=startPiece
        square.lastChild && square.lastChild.setAttribute('draggable',true)
        square.setAttribute('square-id', i);
        // Assuming startPiece is an SVG element, append it to the square
        // Example assuming startPiece is an SVG string: 
        // square.innerHTML = `<svg>...</svg>`; 
        
        if (i<=15){
            square.lastChild.lastChild.classList.add("black")
        }
        if(i>=48){
            square.lastChild.lastChild.classList.add("white")
            
        }
        
        const row = Math.floor((63 - i) / 8) + 1;
        if (row % 2 === 0) {
            square.classList.add(i % 2 === 0 ? "beige" : "brown");
        } else {
           square.classList.add(i % 2 === 0 ? "brown" : "beige");
        }
        gameBoard.append(square);
    });
}

createBoard();






const allSquares=document.querySelectorAll('.gameboard .square')
// console.log(allSquares)
allSquares.forEach((square)=>{
    square.addEventListener('dragstart',dragStart)
    square.addEventListener('dragover',dragOver)
    square.addEventListener('drop',dragDrop)
})

let startPositionId
function dragStart(e){
    startPositionId=e.target.parentNode.getAttribute('square-id')
    draggedElement=e.target
}

function dragOver(e){
    e.preventDefault()
    // console.log(e.target)
}
function dragDrop(e){
    e.stopPropagation()
    console.log('playerGO',playerGo)
    console.log('e.target',e.target)
    const taken=e.target.classList.contains('piece')
    const correctGo=draggedElement.firstChild.classList.contains(playerGo)
    const opponentGO=playerGo==='white'?'black':'white'
    const takenByOpponent=e.target.firstChild?.classList.contains(opponentGO)
    // console.log(e.target)
    // e.target.parentNode.append(draggedElement)
    // e.target.append(draggedElement)
    // e.target.remove()
    changePlayer()

}

function  changePlayer(){
    if (playerGo ==='black'){
        playerGo ="white"
        playerDisplay.textContent=playerGo
        reverseIds()
    }
    else{
        revertIdsBack()
        playerGo="black"
        playerDisplay.textContent=playerGo
    }

}

function reverseIds(){
   const allSquares= document.querySelectorAll('.square')
   allSquares.forEach((square,i)=>{
    square.setAttribute('square-id',(width*width-1)-i)
   })
}

function revertIdsBack(){
    allSquares.forEach((square,i)=>{
        square.setAttribute('square-id',i)
    })

}