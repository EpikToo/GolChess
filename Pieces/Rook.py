from __Piece import Piece

class Rook(Piece):
    def __init__(self, couleur, position) -> None:
        super().__init__(couleur, position)
        self.first_move = True 

    def valid_moves(self, board):
        moves = []

        # La direction du mouvement dépend de la couleur du pion
        direction = 1 if self.couleur == "b" else -1

        # Mouvement d'une case vers l'avant
        forward_square = (self.position[0] + direction, self.position[1])
        if board.is_free(forward_square):
            moves.append(forward_square)
            
            # Mouvement de deux cases vers l'avant
            if self.first_move:
                forward_2_squares = (self.position[0] + 2 * direction, self.position[1])
                if board.is_free(forward_2_squares):
                    moves.append(forward_2_squares)

        # Captures
        for dx in [-1, 1]:  # Les captures se font en diagonale
            capture_square = (self.position[0] + direction, self.position[1] + dx)
            if board.is_opponent(capture_square, self.couleur):
                moves.append(capture_square)
        
        return moves
