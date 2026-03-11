from abc import ABC, abstractmethod

class Demo(ABC):
    def __init__(self):
        print("In Demo Connstructor")

    def __new__(cls, *args, **kwargs):
        print("Memory allocation")
        return super().__new__(cls)

    @abstractmethod
    def fun(self):
        pass

print(type(Demo))
