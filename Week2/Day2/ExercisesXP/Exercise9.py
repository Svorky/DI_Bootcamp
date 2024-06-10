ages = input("eneter ages, separate by space:\n").split(" ")

price = 0
for age in ages:
    if 3 <= int(age) < 12:
        price += 10
    elif int(age) >= 12:
        price += 15
        
print(f"total: {price}$")

teenagers = ["john", "adam", "ben", "yossi"]
rem = list()
for teen in teenagers:
    age = input(f"how old is {teen}?\n")
    if 16 < int(age) < 21:
        rem.append(teen)

for r in rem:
    teenagers.remove(r)

print("only these mans can watch a movie:\n")
for teen in teenagers:
    print(teen)