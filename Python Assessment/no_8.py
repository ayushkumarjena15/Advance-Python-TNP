def reverse_string(text):
    rev = ""
    for ch in text:
        rev = ch + rev
    return rev

# example usage
s = input("Enter a string: ")
print("Reversed string:", reverse_string(s))