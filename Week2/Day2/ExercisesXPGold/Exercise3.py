names = ['Samus', 'Cortana', 'V', 'Link', 'Mario', 'Cortana', 'Samus']

user_name = input("your name:\n")

if names.count(user_name) > 0:
    print(names.index(user_name))