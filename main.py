name_1 = input("What is your name: ")
age_1 = int(input("What is your age: "))

info = [name_1, age_1]
print("Hello", info[0])
if info[1] >= 18:
    print("Your an adult. ")
elif info[1] < 18 and info[1] >= 13:
    print("Your a teenager. ")
elif info[1] < 13:
    print("Your a child")
    
    