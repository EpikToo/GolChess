from Misc.Board import initialize_board
from Pieces import *

ongoing = True
while ongoing:
    board = initialize_board()
    print("    1     2     3     4     5     6     7     8")
    for _ in range(8):
        print(_+1, board[_])

    print("Coords for moving piece (format [x,y]):")
    
    choice = input()
    xychoice = choice.split(",")
    selected_piece = board[int(xychoice[1])-1][int(xychoice[0])-1]
    print("You have selected :", selected_piece)
    ongoing = False


    
