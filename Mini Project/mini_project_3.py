# MINI PROJECT 3: LOGIN VALIDATION
# ----------------------------------
# DESCRIPTION:
# Validate username and password using operators.

# MINI PROJECT 3: Login Validation

correct_username = "admin"
correct_password = "1234"

username = input("Enter username: ")
password = input("Enter password: ")

if username == correct_username and password == correct_password:
    print("Login Successful")
else:
    print("Invalid Username or Password")
