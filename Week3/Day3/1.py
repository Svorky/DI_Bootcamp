# Exercise 1: Currencies
class Currency:
    def __init__(self, currency, amount):
        self.currency = currency
        self.amount = amount

    def __str__(self) -> str:
        currency = self.currency
        if abs(self.amount) > 1: currency += "s"
        result = f"{self.amount} {currency}"
        return result
    
    def __int__(self) -> int:
        return self.amount
    
    def __repr__(self):
        return str(self)
    
    def __add__(self, other):
        if isinstance(other, Currency):
            if self.currency == other.currency:
                return self.amount + other.amount
            else:
                raise Exception(f"TypeError: Cannot add between Currency type {self.currency} and {other.currency}")
        return self.amount + other
    
    def __iadd__(self, other):
        self.amount = self + other
        return self
    
c1 = Currency('dollar', 5)
c2 = Currency('dollar', 10)
c3 = Currency('shekel', 1)
c4 = Currency('shekel', 10)

print(str(c1))
print(int(c1))
print(c1)
print(c1 + 5)
print(c1 + c2)
c1 += 5
print(c1)
c1 += c2
print(c1)
c1 + c3
