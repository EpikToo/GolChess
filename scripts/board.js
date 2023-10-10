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
let selectedSquare = null;
let player_color = "";
let player_turn = false;
let player_selected_coords = "";
let player_selected_piece = "";
let player_has_piece = false;

// Initiate the board, create the grid and place the pieces
function initBoard() {
    for (let y = 8; y >= 1; y--) {
        for (let x = 1; x <= 8; x++) {
            const piece = initialSetup[y][x - 1];
            const square = createSquare(piece);
            square.className = 'square ' + ((y + x) % 2 === 0 ? 'white' : 'black');
            square.addEventListener('click', () => onSquareClick(x, y, piece, square));
            board.appendChild(square);
        }
    }
    if (Math.floor(Math.random() * 2) === 0){
        player_color = "w"
        player_turn = true;
    }
    else{
        player_color = "b"
        player_turn = false;
    }
    console.log("Player color is: " + player_color);
}

// Place the pieces on the board depending on the initial layout
function createSquare(piece) {
    const square = document.createElement('div');
    square.className = 'square';
    square.innerHTML = pieceMap[piece];
    return square;
}

// Mangage board interaction
function onSquareClick(x, y, piece, squareElement) {
    const coord = `x: ${x}, y: ${y}`;
    console.log(`Player Color: ${player_color}, Case: ${coord}, Piece: ${piece}`);
    coordinateDisplay.textContent = `Player Color: ${player_color}, Case: ${coord}, Piece: ${piece}`;
    if (!player_has_piece) {
        if (selectedSquare === squareElement) {
            squareElement.classList.remove('selected');
            selectedSquare = null;
        } else {
            if (selectedSquare) {
                selectedSquare.classList.remove('selected');
            }
            squareElement.classList.add('selected');
            selectedSquare = squareElement;
        }
        if (player_turn && piece[0] === player_color) {
            player_has_piece = true;
            player_selected_piece = piece;
            player_selected_coords = coord;
        }
    }
    else if (coord === player_selected_coords && piece === player_selected_piece){
        selectedSquare.classList.remove('selected');
        selectedSquare = null;
        player_has_piece = false;
    }
    else {
        movePiece()
    }
}

// Manage piece moves
function movePiece()
{
    if (player_selected_piece[0] === 'w') {
        switch (player_selected_piece) {
            case ('wp'): // White Pawn
                break;
            case ('wn'): // White Knight
                break;
            case ('wb'): // White Bishop
                break;
            case ('wr'): // White Rook
                break;
            case ('wq'): // White Queen
                break;
            case ('wk'): // White King
                break;
        }
    }
    else if (player_selected_piece[0] === 'b') {
        switch (player_selected_piece) {
            case ('bp'): // Black Pawn
                break;
            case ('bn'): // Black Knight
                break;
            case ('bb'): // Black Bishop
                break;
            case ('br'): // Black Rook
                break;
            case ('bq'): // Black Queen
                break;
            case ('bk'): // Black King
                break;
        }
    }
}

initBoard();
