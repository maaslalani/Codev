# Introduction to Classes in Python

## Quick Review of Classes
So you read the syntax guide and passed Python 101. Great job! You can write short scripts with some variables and funcitons. Now what? Your scripts work wonderfully, but you run them once and then they are done. You also have a hard time representing a lot of data. This is where classes come in.

A **class** is a collection of variables and methods used to represent something. The process of wrapping up all these things is called **encapsulation**. Classes allow you to expand your scripts by re-using concepts. A class consists of a *name*, *member variables*, *methods*, and sometimes *static variables*. For now just think of methods as functions. Don't worry about the difference between static variables and member variables just yet.

A class allows you to collect information about thing and methods to act on that thing. This abstract collection of variables and methods can be **instantiated** into an **object** in order to actually use the thing. For example, let's pretend we want to write a stress-relief program to bounce a ball around on the screen. Assuming we have a graphics module we like, this is not that hard of a program. The catching points are coming up with the ball class and figuring out the physics.

### Example

What makes a 2D ball? It is a filled in circle. The circle has a diamater, a color, and possibly a border. This project also assumes that the ball can move. What makes movement? Position, velocity, and sometimes acceleration. Oh and it would also be nice if the ball doesn't fly off the screen when it hits the edge. This creates a simple blueprint of the class:

* `class Ball`
    - Attributes: Diamater, fill color, border color, screen position, velocity
    - Methods: move the ball, bounce off walls

And that's it for the abstract design of this class. Here is a forward peek at what the class will look like, assuming that the details of the graphics module and its use are unimportant.

```
class Ball:
    diamater = 10  # px
    fillColor =  # syntax to assign a color from the graphics module
    borderColor =  # syntax to assign a color from the graphics module
    position.x = 0
    position.y = 0
    velocity.x = 3  # px/sec
    velocity.y = 3  # px/sec

    def moveBall(self):
        position.x += velocity.x
        position.y += velocity.y
        wallBounce(self)

    def wallBounce(self):
        if <syntax for detecting top edge of canvas>:
            velocity.y = -velocity.y
        # Repeat for other three walls
```

## Writing Classes in Python
