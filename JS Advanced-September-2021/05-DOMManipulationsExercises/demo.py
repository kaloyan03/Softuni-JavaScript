def say_hello(name):
    print(f"Hello {name}")

def greet(say_hello_func, name):
    print(say_hello_func(name))

greet(say_hello, 'Pehso')