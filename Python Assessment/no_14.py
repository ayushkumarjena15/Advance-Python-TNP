def find_max_min(lst):
    max_val = lst[0]
    min_val = lst[0]

    for num in lst:
        if num > max_val:
            max_val = num
        if num < min_val:
            min_val = num

    return max_val, min_val

# example usage
numbers = [4, 1, 9, 2, 7]
mx, mn = find_max_min(numbers)

print("Maximum:", mx)
print("Minimum:", mn)
