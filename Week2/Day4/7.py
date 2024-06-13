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
