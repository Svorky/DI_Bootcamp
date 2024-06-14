# Challenge 1 : Sorting
# I don't know where to use list comprehension here
input = "without,hello,bag,world"

words = sorted(input.split(","))

print(",".join(words))

# Challenge 2 : Longest Word
def longest_word(text):
    words = text.split(" ")
    lengths = [len(l) for l in words]
    maxi = max(lengths)
    print(words[lengths.index(maxi)])

longest_word("Margaret's toy is a pretty doll.") # "Margaret's"

longest_word("A thing of beauty is a joy forever.") # "forever."

longest_word("Forgetfulness is by all means powerless!") # "Forgetfulness"