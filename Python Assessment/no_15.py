def is_palindrome(text):
    rev = ""
    for ch in text:
        rev = ch + rev
    return text == rev

# example usage
s = input("Enter a string: ")

if is_palindrome(s):
    print("Palindrome")
else:
    print("Not a palindrome")
