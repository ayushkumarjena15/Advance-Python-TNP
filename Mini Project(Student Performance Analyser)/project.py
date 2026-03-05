student_mark = []
student_sub = ["OOPS", "DSA", "C", "PPML", "COA", "DAA"]


for i in range(len(student_sub)):
    marks = int(input(f"Enter marks of {student_sub[i]}: "))
    student_mark.append(marks)

print("\nStudent Marks:", student_mark)

# Validate marks
print("\nMark Validation:")
if all(m >= 0 and m <= 100 for m in student_mark):
    print("Valid marks")
else:
    print("Invalid marks")

# Calculations
print("\nTotal Subjects:", len(student_mark))
total_mark = sum(student_mark)
print("Total Marks:", total_mark)
print("Maximum Marks:", max(student_mark))
print("Minimum Marks:", min(student_mark))

# Pass & Fail count (pass >= 30)
pass_marks = list(filter(lambda x: x >= 30, student_mark))
fail_marks = list(filter(lambda x: x < 30, student_mark))

print("Passed Subjects:", len(pass_marks))
print("Failed Subjects:", len(fail_marks))

# Subject-wise marks using enumerate
print("\nSubject-wise Marks:")
for i, mark in enumerate(student_mark, start=1):
    print(f"{student_sub[i-1]} : {mark}")

# Sort marks
sorted_marks = sorted(student_mark)
print("\nSorted Marks:", sorted_marks)

# Absolute difference
diff = abs(max(student_mark) - min(student_mark))
print("Absolute Difference (Highest - Lowest):", diff)