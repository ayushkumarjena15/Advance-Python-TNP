def fibonacci(n):
    a, b = 0, 1
    for _ in range(n):
        print(a, end=" ")
        a, b = b, a + b

# input from user
num = int(input("Enter number of terms: "))
fibonacci(num)
