import math


def solution(X, Y, D):
    count = 0
    distance = Y-X

    if distance%D :
        print(distance%D)
        count = math.floor(Y/D)
    else:
        count = math.floor(Y/D)+1
    return count


print(solution(10, 101, 30))
