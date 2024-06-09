user_month = int(input("Write a month as a number: "))

if user_month >= 3 and user_month <= 5:
    print("Spring")
elif user_month >= 6 and user_month <= 8:
    print("Summer")
elif user_month >= 9 and user_month <= 11:
    print("Autumn")
else:
    print("Winter")