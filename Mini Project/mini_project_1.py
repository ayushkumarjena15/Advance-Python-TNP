# MINI PROJECT 1: Smart Calculator 
# DESCRIPTION:
# Build a calculator that takes two numbers and an operator and performs calculation

class Calculator:
    def __init__(self,a,b):
        self.a=a
        self.b=b
    def addition(self):
        result=self.a+self.b
        return result
    def substraction(self):
        result=self.a-self.b
        return result
    def multiplication(self):
        result=self.a*self.b
        return result
    def division(self):
        result=self.a/self.b
        return result
    def modulo(self):
        result=self.a%self.b
        return result
    def disp(self):
        print("The sum is :",self.addition())
        print("The substarction is :",self.substraction())
        print("The multiplication is :",self.multiplication())
        print("The division is :",self.division())
        print("The modulo is :",self.modulo())
x=int(input("Enter  a number:"))
y=int(input("Enter a number :"))
obj1=Calculator(x,y)
obj1.disp()