const board = document.getElementById('board_grid');
const coordinateDisplay = document.getElementById('coordinateDisplay');
const initialSetup = [
    [' ', ' ', ' ', ' ', ' ', ' ', ' ', ' '],
    ['r', 'n', 'b', 'k', 'q', 'b', 'n', 'r'],
    ['p', 'p', 'p', 'p', 'p', 'p', 'p', 'p'],
    [' ', ' ', ' ', ' ', ' ', ' ', ' ', ' '],
    [' ', ' ', ' ', ' ', ' ', ' ', ' ', ' '],
    [' ', ' ', ' ', ' ', ' ', ' ', ' ', ' '],
    [' ', ' ', ' ', ' ', ' ', ' ', ' ', ' '],
    ['P', 'P', 'P', 'P', 'P', 'P', 'P', 'P'],
    ['R', 'N', 'B', 'K', 'Q', 'B', 'N', 'R']
];
const pieceMap = {
    'r': '<img src="../pieces/Chess_rlt60.png" alt="White Rook">',
    'n': '<img src="../pieces/Chess_nlt60.png" alt="White Knight">',
    'b': '<img src="../pieces/Chess_blt60.png" alt="White Bishop">',
    'q': '<img src="../pieces/Chess_qlt60.png" alt="White Queen">',
    'k': '<img src="../pieces/Chess_klt60.png" alt="White King">',
    'p': '<img src="../pieces/Chess_plt60.png" alt="White Pawn">',
    'R': '<img src="../pieces/Chess_rdt60.png" alt="Black Rook">',
    'N': '<img src="../pieces/Chess_ndt60.png" alt="Black Knight">',
    'B': '<img src="../pieces/Chess_bdt60.png" alt="Black Bishop">',
    'Q': '<img src="../pieces/Chess_qdt60.png" alt="Black Queen">',
    'K': '<img src="../pieces/Chess_kdt60.png" alt="Black King">',
    'P': '<img src="../pieces/Chess_pdt60.png" alt="Black Pawn">',
    ' ': '',
};

function createSquare(piece) {
    const square = document.createElement('div');
    square.className = 'square';
    square.innerHTML = pieceMap[piece];
    return square;
}

if (board && coordinateDisplay) {
    for (let y = 8; y >= 1; y--) {
        for (let x = 1; x <= 8; x++) {
            const piece = initialSetup[y][x - 1];
            const square = createSquare(piece);
            square.className = 'square ' + ((y + x) % 2 === 0 ? 'white' : 'black');
            square.addEventListener('click', () => {
                const coord = `x: ${x}, y: ${y}`;
                console.log(coord);
                coordinateDisplay.textContent = 'Case: ' + coord + ' Piece :';
            });
            board.appendChild(square);
        }
    }
}
