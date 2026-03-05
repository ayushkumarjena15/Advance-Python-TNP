def count_vow(str):
    count=0
    for i in str:
        if i in "aeiouAEIOU":
            count+=1
    return count
str=input("ENter the string:")
print(f"The number of vowel in {str} is {count_vow(str)}")