# 1
number = int(input("number: "))
length = int(input("lenght: "))

result = list()

for m in range(1,length+1):
    result.append(number * m)

print(result)

# 2
user = input("your word: ")

result = list()

for c in user:
    if len(result) == 0:
        result.append(c)
    elif result[-1] != c:
        result.append(c)
        
print("".join(result))