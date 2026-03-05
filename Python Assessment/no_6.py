def get_even_numbers(lst):
    evens = []
    for num in lst:
        if num % 2 == 0:
            evens.append(num)
    return evens

# example usage
numbers = [1, 2, 3, 4, 5, 6]
result = get_even_numbers(numbers)

print("Even numbers:", result)
