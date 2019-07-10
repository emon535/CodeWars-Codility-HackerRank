
if __name__ == '__main__':
    x = int(input())
    count = 0
   
    # Count the number of iterations to 
    # reach x = 0. 
    while (x!=0): 
      
        # This operation reduces length 
        # of every sequence of 1s by one. 
        x = (x & (x << 1)) 
   
        count=count+1
    print(count)
