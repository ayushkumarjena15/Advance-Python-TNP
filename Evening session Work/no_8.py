def list_gen(a,b):
    li=[]
    for i in range(a,b):
        if(i%2==0):
            li.append(i)
    return li
print(list_gen(4,30))