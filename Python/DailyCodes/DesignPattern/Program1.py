class Demo:
    def __init__(self):
        print("In Demo Connstructor")

    def __new__(cls, *args, **kwargs):
        print("Memory allocation")
        return super().__new__(cls)

obj1 = Demo()
obj2 = Demo()

print(obj1)
print(obj2)

print("---------------------")

print("Demo type:", type(Demo))
print("obj1 type:", type(obj1))
