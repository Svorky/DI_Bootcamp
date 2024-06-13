# 4
import random

def my_func(num):
    r = random.randint(1, 100)
    if r == num:
        print("Success")
    else:
        print(f"Fail. Your number is {num} and random number is {r}")
        
my_func(5)
