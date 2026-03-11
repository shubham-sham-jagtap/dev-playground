class SingleTone(type):
    Object = None
    def __call__(cls, *args, **kwargs):
        if cls.Object is None:
            cls.Object = super().__call__(cls)
        else:
            print("Can not create more than one object")
        return cls.Object

class Demo(metaclass = SingleTone):

    def __new__(cls, *args, **kwargs):
        return super().__new__(cls)

class DemoChild(Demo):
    pass

obj1 = Demo()
print(type(obj1))
print(obj1)

obj2 = DemoChild()
print(type(obj2))
print(obj2)




