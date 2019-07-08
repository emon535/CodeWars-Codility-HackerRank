
# Complete the toys function below.
def toys(w):
    container = 0
    ws = set(w)
    while ws:
        mw = min(ws)
        print(mw)
        ws -= set(range(mw, mw+5))
        container+=1
    return container
    
    print(ws, container)

    #https://www.hackerrank.com/challenges/priyanka-and-toys/problem
    