JavaScript syntax is a set of rules. It is constructed with the following:

##JavaScript Values

It consist of two types of values: **fixed values** and **variable values**. 

*Fixed values* are known as literals which include numbers and strings. Numbers can be written with or without decimals. 

```
1900

23.876
```

Strings can be written using single or double quotes.

```
'Deepanjali'

"Gerangal"
```

*Variable values*, also called variables, are used to store data values. 
JavaScript uses the **var** keyword to declare the variables and **equal sign (=)** to assign values to variables.

```
var new;

new = 10;
```
##JavaScript Operators

JavaScript uses arithmetic operators to compute values.

```
(31 -17) * 73
```

##JavaScript Expressions

JavaScript uses expressions to compute a value. An expression is a combination of values and operators.

```
<!DOCTYPE html>
<html>
<body>

<p>JavaScript Expressions</p>

<p id="sample"></p>

<script>
var value;
value = 5;
document.getElementById("sample").innerHTML = value * 10;
</script>

</body>
</html>
```

##JavaScript is Case Sensitive

All JavaScript identifiers are caase sensitive.

```
var firstname, firstName;
firstname = "Deepanjali";
firstName = "Lisa";
```

Here *firstname* and *firstName* are two different variables.

##JavaScript Comments

Comments are used to write code which we do not want to execute. There are 2 ways to do it in JavaScript that are:

1. //
This is generally used for single line comments.

2. /* ... */
This is used for multiple lines of comments.

Here is an example.

```
/* Here we are declaring a variable called new.
The variable new is assigned the value of 1993 */

var new; // This is declaration for the variable new

new = 1993; 
```