def repeatedString(s, n):
    input_length = len(s)
    print("input length: ", input_length)
    a_count = s.count('a')
    print("Number of a: ", a_count)
    mod = n % input_length
    times = int(n/input_length)
    print("times:", times)
    if(mod == 0):
        numOfA = a_count*times
        return numOfA
    else:
        substr = s[:mod]
        last = substr.count('a')
        numOfA = (a_count*times)+last
        return numOfA


repeatedString("ba", 1)
