# Basic Python Syntax

### Introduction

Python is renown for having a streamlined syntax that makes it easy to read and write (relative to other programming languages). 

The programmer can be more focused on getting the logic correct instead of being bogged down in sytanx errors; this makes it a great choice for a first programming language!

For example, the line of code below is how you would write the traditional "Hello World" program in **Python 3**

`print(hello world)`

Compare this to the same program in **Java**

```
public class HelloWorld {

  public static void main (String[] args){

    System.out.println("Hello World!");

  }

}
```

---

### Whitespace

Another difference in Python syntax compared to some other language is the use of *whitespace*. 

Many programming languages do not "care" about whitespace when compiling or executing code, simply ignoring it. For the most part, that whitespace is there to help humans read the code.

However, Python uses whitespace not only for readability, but to indicate scope. Therefore, proper spacing and indentation is **important** for your Python code to run correct (or at all)! Each indentation should be comprised of four spaces.

For example, when declaring a conditional statement, we must use whitespace to indicate the scope of what should happen if a condition is met:

```
if foo > bar:
   print("Foo")
else:
   print("Bar")
   
```

Another example would be in declaring a method or using a loop.

``` 
def hello_world(loops):
    i = 0
    while i < loops:
        print("Hello world!")
        i += 1

hello_world(5)
```


## Comments

As inherently readable as Python code may be, comments are still a useful and sometimes necessary way to help clarify the meaning of your code. 

To write a single line comment, simply use the `#` sign and then write your comment.

```
# This is a single-line comment in Python
# So is this!
# All three will be ignored by the intepreter
```

Sometimes, you will need to write a comment that takes up more than one line. To do this, you would make use of a docstring, which is made up of three double qoutes, `"""`

```
"""
This is a Python Docstring.
It can take up many lines.
And all of it will be ignored by the interpreter!
<<<<<<< HEAD

=======
>>>>>>> 17e7d840288ffe7f7b600d6813ccf21839b12fe8
"""
```


### Variables and Data Types

Python uses primitives such as integers, strings, floats, and booleans. 

To assign a value to a variable, simply use the `=` operator.

```
my_string = "This is a string"
my_int = 42
my_float = 3.14
my_bool = False
```

However, Python is not strict about type! Therefore, you could assign a value of a different type to the same variable.

```
one = 1

one = "1"

one = True

print(one)
```

In the example above, when we print the value of the variable ```one```, we would end up printing the boolean value of ```True```, as that is the value that was last assigned to that variable.

---

###  Data Structures

Python features a few different data structures. The most common are the list, the tuple, and the dict.

```
 my_list = ["This is a list", "It contains two strings"]
 
 my_tuple = ("This is a tuple","It has three strings","tuples are immutable")
 
 my_dict = {1:"This is a dict", 2:"It is made up of key:value pairs"}
 
```

---

### Loops

#### While Loops

Like most other modern programming languages, Python features loops to help process tasks that would otherwise be redundant to do manually. We've already seen the ```while``` loop in our example on whitespace, but let's take another look.

```
my_love = True

while my_love:
    print("This loop will go on forever!")

```

In the example above, our ```while``` loop checks for a condition that just so happens to evaluate to ```True```. In the body of this loop, we simply print some text and do nothing to break out of the loop. This, of course, poses a problem where the loop will never end. Let's try again.

```
counter = 3

my_love = True

while my_love:
    print("This loop will go on forever!")
    my_love = False

```

Above we have nearly the exact same code, but this time we change the value of the variable ```my_love``` to ```False``` so that the loop will end after one iteration. 

We might see something like this to control the state of a game, where a while loop is used to execute code that allows one to play a game until they meet conditions that would signify the end of the game. For example:

```
lives = 3

while lives > 0:
    runGame() 

```

While loops are best suited for when you are unsure of when a certain condition may be met.

#### For Loops

Another type of loop is the ```for``` loop. These loops are best leveraged in conditions when you already know how many times you will need to iterate through a process, such as going through a list or repeating a process a set number of times. 

The syntax for a Python for loop looks like this

```
for foo in bar:
    print(foo)

```
A more concrete example using a ```list```

```
rebel_fleet = ["x-wing","y-wing","a-wing","b-wing"]

for ship in rebel_fleet:
    print(ship)

```

We can also use Python's ```range()``` function with a ```for``` loop to do something a set number of times as specified with that function.

```
>>> for i in range(10):
	print(i)


0
1
2
3
4
5
6
7
8
9
>>> 

```

---

### Conditional Statements

Conditional statements are a type of control flow. This takes the form of ```if```, ```elif```, and ```else``` statements.


```
foo = True
bar = True
baz = False

if not foo:
    print("Not foo")
elif not bar:
    print("Not bar")
else:
    print("Baz!")

```

Note the use of ```not``` in the example above. We can also use other operators to check for things like equality

```
if foo == bar:
    print("They're the same!")

```

