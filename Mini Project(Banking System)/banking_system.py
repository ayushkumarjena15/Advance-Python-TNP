balance=0
transactions=[]
while(1):
    print("Welcome to our bank")
    print("press-1: Deposit")
    print("press-2: Withdraw")
    print("press-3: check Balance")
    print("press-4: Transaction History")
    print("press-5: Exit")

    choice=int(input("Enter your choice:"))
    if(choice==1):
        dep_amount=int(input("Enter your amount to deposit:"))
        if(dep_amount>0):
            balance=balance+dep_amount
            transactions.append(f"+{dep_amount}")
            print("Amount Deposited successfully")
        else:
            print("Invalid amount...")
            print("please enter a valid amount")
    elif(choice==2):
        withdraw_amount=int(input("Enter your amount to withdraw:"))
        if(withdraw_amount>0 and balance>=withdraw_amount):
            balance=balance-withdraw_amount
            transactions.append(f"-{withdraw_amount}")
            print("Take your withdraw amount....amount withdrawn")
        else:
            print("insufficent balance")
            print("please enter a valid amount")
    elif(choice==3):
        print("Your balance amount is :",balance)
    elif(choice==4):
        if len(transactions) == 0:
            print("No transactions yet")
        else:
            print("Your Transaction History:\n",transactions)
    elif(choice==5):
        break
    else:
        print("Enter a valid choice")