
# def solution(A):
#     minimum = 0;
#     record = 0
#     my_sum = sum(A);
#     differences = []
#     # print(my_sum)
#     for val in A:
#         record += val
#         dif = abs(my_sum-record*2)
#         differences.append(dif)
#         minimum = min(differences)

#     # print(minimum, A.index(minimum))
#     ret = A.index(minimum)
#     return ret


# solution([3,1,2,4,3])


def solution(A):
    left = A[0]
    right = sum(A)-A[0]
    dif = abs(right-left)
    for i in range(len(A)-1):
        left += A[i]
        right -= A[i]
        current_dif = abs(left-right)
        if dif>current_dif:
            dif = current_dif
        print(dif)
    return dif


print(solution([3, 1, 2, 4, 3]))
