def sum_and_difference(a, b):
    total = a + b
    diff = a - b
    return total, diff

# input from user
x = int(input("Enter first number: "))
y = int(input("Enter second number: "))

s, d = sum_and_difference(x, y)

print("Sum:", s)
print("Difference:", d)
