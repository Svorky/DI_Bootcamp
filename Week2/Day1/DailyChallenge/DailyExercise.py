from random import shuffle

user_input = input("Write a 10 character length string:\n")
input_len = len(user_input)
if input_len < 10:
    print("string not long enough")
elif input_len > 10:
    print("string too long")
else:
    print("perfect string")
    
print(user_input[0])
print(user_input[-1])

new_string = ""
for char in user_input:
    new_string += char
    print(new_string)

list = [char for char in user_input]
shuffle(list)
print("".join(list))