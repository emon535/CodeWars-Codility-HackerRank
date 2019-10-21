import math


def solution(X, Y, D):
    count = 0
    distance = Y-X
    if distance%D ==0 :
        count = math.floor(distance/D)
    else:
        count = math.floor(distance/D)+1
    return count


print(solution(10, 100001, 30))
