


#URL : https://www.hackerrank.com/challenges/ctci-making-anagrams/problem

# Complete the makeAnagram function below.
def makeAnagram(a, b):
    sum = 0
    characters = list(map(chr, range(97,123)))
    a,b = list(a), list(b)
    for char in characters:
        sum +=  abs(a.count(char)-b.count(char))
    return sum
