paragraph = "Ludwigsburg Palace, nicknamed the Versailles of Swabia,[1] is a 452-room palace complex of 18 buildings located in Ludwigsburg, Baden-Württemberg, Germany. Its total area, including the gardens, is 32 ha (79 acres) – the largest palatial estate in the country. The palace has four wings: the northern wing, the Alter Hauptbau, is the oldest and was used as a residence of the Duke of Württemberg; the east and west wings were used for court purposes and housing guests and courtiers; the southern wing, the Neuer Hauptbau, was built to house more court functions and was later used as a residence."

print(len(paragraph))
sents = paragraph.split(".")
print(len(sents))
words = paragraph.split(" ")
print(len(words))

count = 0
non_uniq = 0
for word in words:
    if words.count(word) == 1:
        count += 1
    else:
        non_uniq += 1
        
print(count)
print(non_uniq)

count_c = 0
for c in paragraph:
    if c != " ":
        count_c += 1
print(count_c)

words_in_sent = list()
for s in sents:
    words_in_sent.append(len(s.split(" ")))

print(sum(words_in_sent) / len(sents))