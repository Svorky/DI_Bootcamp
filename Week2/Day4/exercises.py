# 1
def display_message():
    print("I'm learning javascript and python")
    
display_message()
# 2
def favorite_book(title):
    print(f"One of my favorite books is {title}")
    
favorite_book("Alice in Wonderland")
# 3
def describe_city(city, country = "Israel"):
    print(f"{city} is in {country}")

describe_city("New York", "USA")
describe_city("Tel Aviv")
# 4
import random

def my_func(num):
    r = random.randint(1, 100)
    if r == num:
        print("Success")
    else:
        print(f"Fail. Your number is {num} and random number is {r}")
        
my_func(5)
# 5
def make_shirt(size = "L", text = "I love Python"):
    print(f"The size of the shirt is {size} and the text is {text}")
    
make_shirt("S", "Have a nice day")
make_shirt()
make_shirt("M")
make_shirt(text="Shalom")
# 6
magician_names = ['Harry Houdini', 'David Blaine', 'Criss Angel']

def show_magicians():
    for name in magician_names:
        print(name)
        
def make_great():
    for (idx, name) in enumerate(magician_names):
        magician_names[idx] = name + " the Great"
        
make_great()
show_magicians()
# 7
import random
def get_random_temp(month):
    min = -10
    max = 40
    season = ""
    if 3 <= month <= 5:
        season = 'spring'
    elif 6 <= month <= 8:
        season = 'summer'
    elif 9 <= month <= 11:
        season = 'autumn'
    else:
        season = 'winter'
    
    if season == 'winter':
        max = 16
    if season == 'spring' or season == 'autumn':
        min = 5
        max = 22
    if season == 'summer':
        min = 17
        max = 40
    return random.uniform(min, max)

def main():
    user_input = input("type a number of the month: ")
    temp = get_random_temp(int(user_input))
    print(f"The temperature right now is {temp} degrees Celsius.")
    if temp < 0:
        print("Brrr, that’s freezing! Wear some extra layers today")
    if 0 <= temp < 16:
        print("Quite chilly! Don’t forget your coat")
    if 16 <= temp < 23:
        print("It's warm")
    if 23 <= temp < 32:
        print("It's hot")
    if 32 <= temp <= 40:
        print("It's boiling")

main()
# 8
data = [
    {
        "question": "What is Baby Yoda's real name?",
        "answer": "Grogu"
    },
    {
        "question": "Where did Obi-Wan take Luke after his birth?",
        "answer": "Tatooine"
    },
    {
        "question": "What year did the first Star Wars movie come out?",
        "answer": "1977"
    },
    {
        "question": "Who built C-3PO?",
        "answer": "Anakin Skywalker"
    },
    {
        "question": "Anakin Skywalker grew up to be who?",
        "answer": "Darth Vader"
    },
    {
        "question": "What species is Chewbacca?",
        "answer": "Wookiee"
    }
]

wrong_answers = []
def ask():
    wrong_answers.clear()
    for (idx, q) in enumerate(data):
        print(f"{idx+1}. {q['question']}")
        user_input = input("Your answer is: ")
        if user_input.lower() != q["answer"].lower():
            q["user_answer"] = user_input
            wrong_answers.append(q)

def inform():
    print(f"Correct: {len(data) - len(wrong_answers)}, Wrong: {len(wrong_answers)}")
    for a in wrong_answers:
        print(f"Question: {a['question']}")
        print(f"Your answer was {a['user_answer']}, but the correct answer is {a['answer']}")

while True:
    ask()
    inform()
    if len(wrong_answers) > 3:
        user = input("Do you want to play again? Y/N\n")
        if user.lower() == "n":
            break
    else:
        break
