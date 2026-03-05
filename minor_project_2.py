# Input marks
s1 = float(input("Enter marks for subject 1: "))
s2 = float(input("Enter marks for subject 2: "))
s3 = float(input("Enter marks for subject 3: "))

# Calculate average
average = (s1 + s2 + s3) / 3

# Determine grade
if average >= 90:
    grade = "A"
elif average >= 80:
    grade = "B"
elif average >= 70:
    grade = "C"
elif average >= 60:
    grade = "D"
else:
    grade = "F"

# Output
print("Average score:", round(average, 2))
print("Grade:", grade)
