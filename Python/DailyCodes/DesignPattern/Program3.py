class SingleTone(type):
    Object = None
    def __call__(cls, *args, **kwargs):
        if cls.Object is None:
            cls.Object = super().__call__(*args, **kwargs)
        return cls.Object

class Demo(metaclass = SingleTone):
    def __new__(cls, *args, **kwargs):
        return super().__new__(cls)

class DemoChild(Demo):
    pass

obj1 = type(Demo).__call__(Demo)
obj2 = Demo()

print(obj1)
print(obj2)

