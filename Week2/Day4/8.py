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
