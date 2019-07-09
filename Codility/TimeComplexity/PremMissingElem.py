# you can write to stdout for debugging purposes, e.g.
# print("this is a debug message")


def solution(A):
    l = len(A)+1
    real_sum = int((l*(l+1))/2)
    missing = real_sum-sum(A)
    return missing

# 100% Score with first attempt