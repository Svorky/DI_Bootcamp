# Exercise 3: String Module
import string
import random

# Generate random String of length 5
# Note: String must be the combination of the UPPER case and lower case letters only. No numbers and a special symbol.

chars = string.ascii_uppercase + string.ascii_lowercase
result = ''.join(random.choice(chars) for _ in range(5))
print(result)

# Exercise 4 : Current Date
# Create a function that displays the current date.
from datetime import datetime
def get_time():
    today = datetime.today()
    print(today.date())
    
get_time()

# Exercise 5 : Amount Of Time Left Until January 1st
# Create a function that displays the amount of time left from now until January 1st.
# (Example: the 1st of January is in 10 days and 10:34:01hours).
def countdown():
    now = datetime.now()
    next_year = now.year + 1
    new_year = datetime(year=next_year, month=1, day=1)
    
    time_left = new_year - now
    
    days = time_left.days
    hours, remainder = divmod(time_left.seconds, 3600)
    minutes, seconds = divmod(remainder, 60)
    
    print(f"Time left until January 1st: {days} days, {hours} hours, {minutes} minutes, and {seconds} seconds.")
    
countdown()

# Exercise 6 : Birthday And Minutes
# Create a function that accepts a birthdate as an argument (in the format of your choice), then displays a message stating how many minutes the user lived in his life.
def how_many(date: str):
    splitted = list(map(lambda e:int(e), date.split("/")))
    birthday = datetime(year=splitted[2], month=splitted[1], day=splitted[0])
    minutes = datetime.now() - birthday
    print(minutes.total_seconds() // 60)
    
user = input("Type your birthday date in format dd/mm/yyyy: ")
how_many(user)

# Exercise 7 : Faker Module
# Install the faker module, and take a look at the documentation and learn how to properly implement faker in your code.
# Create an empty list called users. Tip: It should be a list of dictionaries.
# Create a function that adds new dictionaries to the users list. Each user has the following keys: name, adress, langage_code. Use faker to populate them with fake data.
users = []

from faker import Faker
fake_data_generator = Faker()
def create_users():
    for _ in range(5):
        dic = {
            'name': fake_data_generator.name(),
            'address': fake_data_generator.address(),
            'language_code': fake_data_generator.language_code()
        }
        users.append(dic)

create_users()
print(users)
