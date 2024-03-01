// const gameBoard=document.querySelector('#gameborad')
// This code defines variables for various DOM elements and initializes the chessboard with pieces and colors.

const gameBoard = document.querySelector(".gameboard");
const playerDisplay = document.querySelector(".player");
const infoDisplay = document.querySelector(".info-display");
let playerGo = 'black';
playerDisplay.textContent = 'black ';
const width = 8;

// console.log(gameBoard)
// we're gonna use svgs from the font awesome icons
const startPieces = [  
    rook, knight, bishop, queen, king, bishop, knight, rook,
    pawn, pawn, pawn, pawn, pawn, pawn, pawn, pawn,
    '', '', '', '', '', '', '', '',
    '', '', '', '', '', '', '', '',
    '', '', '', '', '', '', '', '',
    '', '', '', '', '', '', '', '',
    pawn, pawn, pawn, pawn, pawn, pawn, pawn, pawn,
    rook, knight, bishop, queen, king, bishop, knight, rook,
];

// This function creates the initial chessboard layout using the startPieces array.
function createBoard() {
    startPieces.forEach((startPiece, i) => {
        const square = document.createElement('div');
        square.classList.add('square');
        square.innerHTML = startPiece;
        square.lastChild && square.lastChild.setAttribute('draggable', true);
        square.setAttribute('square-id', i);

        // If the piece is in the first two or last two rows, assign colors accordingly.
        if (i <= 15) {
            square.lastChild.lastChild.classList.add("black");
        }
        if (i >= 48) {
            square.lastChild.lastChild.classList.add("white");
        }

        // Add background colors based on row and column.
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

// This section adds drag and drop functionality to the chess pieces.
const allSquares = document.querySelectorAll('.gameboard .square');
allSquares.forEach((square) => {
    square.addEventListener('dragstart', dragStart);
    square.addEventListener('dragover', dragOver);
    square.addEventListener('drop', dragDrop);
});

let startPositionId;
let draggedElement;

// This function handles the start of a drag operation.
function dragStart(e) {
    startPositionId = e.target.parentNode.getAttribute('square-id');
    draggedElement = e.target;
    console.log('dragstart', e.target); //used to analyze the function of this code 
}

// This function handles the drag over a square during a drag operation.
function dragOver(e) {
    e.preventDefault();
    console.log("dragover", e.target);
}

// This function handles the drop event during a drag operation.
function dragDrop(e) {
    e.stopPropagation();
    console.log('dragdrop', e.target);
    const taken = e.target.classList.contains('piece');
    const correctGo = draggedElement.firstChild.classList.contains(playerGo);
    const opponentGO = playerGo === 'white' ? 'black' : 'white';
    const takenByOpponent = e.target.firstChild?.classList.contains(opponentGO);

    if (correctGo) {
        if (taken && !takenByOpponent) {
            infoDisplay.textContent = "You cannot move here!";
            setTimeout(() => {
                infoDisplay.textContent = "";
            }, 2000);
        }
    }
}

// This function handles the player change and updates the player display.
function changePlayer() {
    if (playerGo === 'black') {
        playerGo = "white";
        playerDisplay.textContent = playerGo;
        reverseIds();
    } else {
        revertIdsBack();
        playerGo = "black";
        playerDisplay.textContent = playerGo;
    }
}

// This function reverses the IDs of the squares to simulate the opponent's perspective.
function reverseIds() {
    const allSquares = document.querySelectorAll('.square');
    allSquares.forEach((square, i) => {
        square.setAttribute('square-id', (width * width - 1) - i);
    });
}

// This function reverts the square IDs back to the original order.
function revertIdsBack() {
    allSquares.forEach((square, i) => {
        square.setAttribute('square-id', i);
    });
}
