# 4
users = ["Mickey","Minnie","Donald","Ariel","Pluto"]

disney_users_A = {}
for (index_count, name) in enumerate(users):
    disney_users_A[name] = index_count
    
print(disney_users_A)

disney_users_B = {}
for (index_count, name) in enumerate(users):
    disney_users_B[index_count] = name

print(disney_users_B)

disney_users_C = {}
users.sort()
for (index_count, name) in enumerate(users):
    disney_users_C[name] = index_count
    
print(disney_users_C)

users = ["Mickey","Minnie","Donald","Ariel","Pluto"]
disney_users_I = {}
for (index_count, name) in enumerate(users):
    if "i" in name:
        disney_users_I[name] = index_count
print(disney_users_I)

disney_users_MP = {}
for (index_count, name) in enumerate(users):
    if name[0] == "M" or name[0] == "P":
        disney_users_MP[name] = index_count
print(disney_users_MP)
