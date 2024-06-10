from math import sqrt

C = 30
H = 50

user = input("comma-separated string of numbers: ")
ans = list()
for num in user.split(","):
    ans.append(str(sqrt((2 * C * int(num))/H)))
    
print(",".join(ans))