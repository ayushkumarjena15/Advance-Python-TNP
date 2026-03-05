str="AnubhaB"
lower_count=0
upper_count=0
for i in str:
    if i in i.lower():
        lower_count+=1
    elif i in i.upper():
        upper_count+=1
print("The lower case value :{}".format(lower_count))
print("The lower case value :{}".format(upper_count))