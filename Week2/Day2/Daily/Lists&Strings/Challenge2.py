user = input("your word: ")

result = list()

for c in user:
    if len(result) == 0:
        result.append(c)
    elif result[-1] != c:
        result.append(c)
        
print("".join(result))