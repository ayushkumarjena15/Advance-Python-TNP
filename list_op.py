list=[1,2,3,4,5,6,7,8,9]
for i in range(len(list)):
    if(i%2==0):
        list[i]=100*list[i]
    else:
        list[i]=10*list[i]
print(list)