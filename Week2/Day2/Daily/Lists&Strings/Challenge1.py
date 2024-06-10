number = int(input("number: "))
length = int(input("lenght: "))

result = list()

for m in range(1,length+1):
    result.append(number * m)

print(result)