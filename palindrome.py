num=121
org=num
rev=0
while(num>0):
    rem=num%10
    rev=rev*10+rem
    num=num//10
if(org==rev):
    print("Palindrome number")
else:
    print("Not palindrome")