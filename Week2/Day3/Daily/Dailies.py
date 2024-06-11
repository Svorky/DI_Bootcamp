# 1
user = input("type a word: ")

word = [c for c in user]

result = {}
for (idx, letter) in enumerate(word):
    if result.get(letter):
        result[letter].append(idx)
    else:
        result[letter] = [idx]
        
print(result)

# 2
items_purchase = {
  "Phone": "$999",
  "Speakers": "$300",
  "Laptop": "$5,000",
  "PC": "$1200"
}

wallet = "$1"

n_wallet = int(wallet.lstrip("$").replace(",",""))
total = 0
afford = []
for (key, val) in items_purchase.items():
    tmp_total = total + int(val.lstrip("$").replace(",",""))
    if n_wallet < tmp_total:
        continue
    else:
        afford.append(key)
        total = tmp_total
        
if len(afford) > 0:
    afford.sort()
    print(afford)
else:
    print("Nothing")
