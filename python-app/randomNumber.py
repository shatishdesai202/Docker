import random 

def random_numbers():
    """
    Asking the user for a min and max, then printing ten random numbers between min and max.
    """
    print("Give me two numbers, a min and a max")
    a = int(input("Select min. "))
    b = int(input("Select max. "))

    numbers = random.randint(a, b)
    print(numbers)

random_numbers()
