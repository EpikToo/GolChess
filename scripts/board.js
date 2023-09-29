const board = document.getElementById('board_grid');
const coordinateDisplay = document.getElementById('coordinateDisplay');
// Pieces layout
const initialSetup = [
    ['  ', '  ', '  ', '  ', '  ', '  ', '  ', '  '],
    ['wr', 'wn', 'wb', 'wk', 'wq', 'wb', 'wn', 'wr'],
    ['wp', 'wp', 'wp', 'wp', 'wp', 'wp', 'wp', 'wp'],
    ['  ', '  ', '  ', '  ', '  ', '  ', '  ', '  '],
    ['  ', '  ', '  ', '  ', '  ', '  ', '  ', '  '],
    ['  ', '  ', '  ', '  ', '  ', '  ', '  ', '  '],
    ['  ', '  ', '  ', '  ', '  ', '  ', '  ', '  '],
    ['bp', 'bp', 'bp', 'bp', 'bp', 'bp', 'bp', 'bp'],
    ['br', 'bn', 'bb', 'bk', 'bq', 'bb', 'bn', 'br']
];

// Map each piece with it's corresponding image
const pieceMap = {
    'wr': '<img src="../pieces/Chess_rlt60.png" alt="White Rook">',
    'wn': '<img src="../pieces/Chess_nlt60.png" alt="White Knight">',
    'wb': '<img src="../pieces/Chess_blt60.png" alt="White Bishop">',
    'wq': '<img src="../pieces/Chess_qlt60.png" alt="White Queen">',
    'wk': '<img src="../pieces/Chess_klt60.png" alt="White King">',
    'wp': '<img src="../pieces/Chess_plt60.png" alt="White Pawn">',
    'br': '<img src="../pieces/Chess_rdt60.png" alt="Black Rook">',
    'bn': '<img src="../pieces/Chess_ndt60.png" alt="Black Knight">',
    'bb': '<img src="../pieces/Chess_bdt60.png" alt="Black Bishop">',
    'bq': '<img src="../pieces/Chess_qdt60.png" alt="Black Queen">',
    'bk': '<img src="../pieces/Chess_kdt60.png" alt="Black King">',
    'bp': '<img src="../pieces/Chess_pdt60.png" alt="Black Pawn">',
    '  ': '',
};

// Initiate the board, create the grid and place the pieces
function initBoard() {
    if (board && coordinateDisplay) {
        for (let y = 8; y >= 1; y--) {
            for (let x = 1; x <= 8; x++) {
                const piece = initialSetup[y][x - 1];
                const square = createSquare(piece);
                square.className = 'square ' + ((y + x) % 2 === 0 ? 'white' : 'black');
                square.addEventListener('click', () => onSquareClick(x, y, piece));
                board.appendChild(square);
            }
        }
    }
}

// Place the pieces on the board depending on the initial layout
function createSquare(piece) {
    const square = document.createElement('div');
    square.className = 'square';
    square.innerHTML = pieceMap[piece];
    return square;
}

// Give the coordinates and the piece of the player's click
function onSquareClick(x, y, piece) {
    const coord = `x: ${x}, y: ${y}`;
    console.log(`Coord: ${coord}, Piece: ${piece}`);
    if (coordinateDisplay) {
        coordinateDisplay.textContent = `Case: ${coord}, Piece: ${piece}`;
    }
}

initBoard();
