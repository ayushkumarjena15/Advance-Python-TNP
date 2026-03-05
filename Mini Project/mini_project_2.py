# MINI PROJECT 2: EMPLOYEE SALARY SYSTEM
# ----------------------------------
# DESCRIPTION:
# Calculate employee net salary using allowances and tax.
# Tax = 10% if salary > 50000

# MINI PROJECT 2: Employee Salary System (Without OOPS)

name = "Anubhab"
basic_salary = 45000
allowance = 10000

# Calculate gross salary
gross_salary = basic_salary + allowance

# Calculate tax
if gross_salary > 50000:
    tax = gross_salary * 0.10
else:
    tax = 0

# Calculate net salary
net_salary = gross_salary - tax

# Display output
print("Employee Name :", name)
print("Basic Salary :", basic_salary)
print("Allowance :", allowance)
print("Gross Salary :", gross_salary)
print("Tax :", tax)
print("Net Salary :", net_salary)
