# daily
matrix = [
    ["7","i","i"],
    ["T","s","x"],
    ["h","%","?"],
    ["i"," ","#"],
    ["s","M"," "],
    ["$","a"," "],
    ["#","t","%"],
    ["^","r","!"]
]

s = ""
paste_space = False
for i in range(0,len(matrix[0])):
    for j in range(0,len(matrix)):
        if matrix[j][i].isalpha():
            if paste_space:
                s += " "
                paste_space = False
            s += matrix[j][i]
        else:
            if len(s) > 0 and s[-1].isalpha():
                paste_space = True
            
print(s)
