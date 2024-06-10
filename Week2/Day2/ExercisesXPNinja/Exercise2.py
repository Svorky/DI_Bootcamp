nums = [3, 47, 99, -80, 22, 97, 54, -23, 5, 7]

print(','.join(str(x) for x in nums))
nums.sort()
print(','.join(str(x) for x in nums))
nums.sort(reverse = True)
print(','.join(str(x) for x in nums))

print(sum(nums))

fl = list()
fl.append(nums[0])
fl.append(nums[-1])
print(fl)

g50 = list()
s10 = list()
sqr = list()
nondupl = list()
for n in nums:
    if n > 50:
        g50.append(n)
    
    if n < 10:
        s10.append(n)
        
    sqr.append(n**2)
    
    if nums.count(n) == 1:
        nondupl.append(n)
        
print(g50)
print(s10)
print(nondupl)
print(len(nondupl))

print(sum(nums) / len(nums))

print(max(nums))

print(min(nums))