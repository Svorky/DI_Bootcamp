user_input = list()

for i in range(1,4):
    if i == 1:
        user_input.append(int(input("Input the 1st number: ")))
    elif i == 2:
        user_input.append(int(input("Input the 2nd number: ")))
    else:
        user_input.append(int(input("Input the 3rd number: ")))
        
print(f"The greatest number is: {max(user_input)}")