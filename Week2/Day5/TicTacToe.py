board = []
empty = "_"
for i in range(0, 3):
    board.append([empty, empty, empty])


def user_input(user):
    print(f"User {user}'s turn...")

    row = int(input("Enter row: "))
    while row not in range(1, 4):
        print("Row is out of board. Type 1, 2 or 3:")
        row = int(input("Enter row: "))
    col = int(input("Enter column: "))
    while col not in range(1, 4):
        print("Column is out of board. Type 1, 2 or 3:")
        col = int(input("Enter column: "))

    return row, col


def pretty_print():
    display = []
    stars = "*" * 7
    display.append(stars)
    for row in board:

        tmp = list("|".join(row))
        tmp.insert(0, '*')
        tmp.append('*')
        display.append("".join(tmp))

    display.append(stars)
    print("\n".join(display))


def check_winner(user):
    winner = False
    for row in board:
        if all(mark == user for mark in row):
            winner = True
            print(f"The winner is {user}")
            return winner
    for col in range(0, 3):
        if all(mark == user for mark in [board[0][col], board[1][col], board[2][col]]):
            winner = True
            print(f"The winner is {user}")
            return winner

    if all(mark == user for mark in [board[0][0], board[1][1], board[2][2]]):
        winner = True
        print(f"The winner is {user}")

    elif all(mark == user for mark in [board[0][2], board[1][1], board[2][0]]):
        winner = True
        print(f"The winner is {user}")
    return winner


def check_cell(row, col, user):
    if board[row-1][col-1] == empty:
        board[row-1][col-1] = user
        return True
    else:
        return False


def play():
    pretty_print()
    count = 1
    while count < 10:
        user = ""
        if count % 2 == 0:
            user = "O"
        else:
            user = "X"

        row, col = user_input(user)
        while check_cell(row, col, user) == False:
            print("The cell is already picked. Pick another one.")
            row, col = user_input(user)

        pretty_print()
        if check_winner(user):
            break
        count += 1
        if count == 10:
            print("Nobody wins")


play()
