# Introduction to Classes in Python

## Quick Review of Classes
So you read the syntax guide and passed Python 101. Great job! You can write short scripts with some variables and funcitons. Now what? Your scripts work wonderfully, but you run them once and then they are done. You also have a hard time representing a lot of data. This is where classes come in.

A *class* is a collection of variables and methods used to represent something. The process of wrapping up all these things is call *encpsulation* Classes allow you to expand your scripts by re-using concepts. A class consists of a *name*, *member variables*, *methods*, and sometimes *static variables*. For now just think of methods as functions. Don't worry about the difference between static variables and member variables just yet.

A class allows you to collect information on a thing and methods to act on that thing. Let's pretend we are writing a game of [Pong](https://en.wikipedia.org/wiki/Pong). Pong consists of paddles and balls. You want to use a class to represent the paddle, and another class to repersent the ball. You can then make (big word - **instantiate**) as many balls and paddles as you wish, and Python will keep track of them.

### Example

What makes a paddle? It is a filled in rectangle that can only move in one direction. It reflects the ball when the ball hits. What is a ball? It is a filled in circle that moves in all directions and goes off the screen if it isnt hit by a paddle, but also bounces off of the sides that don't have paddles. That's a lot. I think we can get away with a detailed collision method for the ball only. Oh and everything needs to move. Breaking it down,
* Paddles
..* Length, Width, fill color, velocity
