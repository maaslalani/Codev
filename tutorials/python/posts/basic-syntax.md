#Basic Python Syntax

###Introduction

Python is reknown for having a streamlined syntax that makes it easy to read and write (relative to other programming languages). 

The programmer can be more focused on getting the logic correct instead of being bogged down in sytanx errors; this makes it a great choice for a first programming language!

For example, the line of code below is how you would write the traditional "Hello World" program in **Python 3**

```print(hello world)```

Compare this to the same program in **Java**

```
public class HelloWorld {

  public static void main (String[] args){
	System.out.println("Hello World!");
  }
}

```

---

###Whitespace

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

---

### Comments

As inherently readable as Python code may be, comments are still a useful and sometimes necessary way to help clarify the meaning of your code. 

To write a single line comment, simply use the ```#``` sign and then write your comment.

```
# This is a single-line comment in Python
# So is this!
# All three will be ignored by the intepreter
```

Sometimes, you will need to write a comment that takes up more than one line. To do this, you would make use of a docstring, which is made up of three double qoutes, ```"""```

```
"""
This is a Python Docstring.


It can take up many lines.


And all of it will be ignored by the interpreter!


"""

```
---

###Variables and Data Types

Python uses primitives such as integers, strings, floats, and booleans. 

To assign a value to a variable, simply use the ```=``` operator.

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