##What is JavaScript?

JavaScript is a lightweight scripting or programming language. It is most commonly used with HTML-CSS to make the client-side scripts more interactive and dynamic.

##Why use JavaScript?

**Less server interaction** - The user input can be validated before sending it to the server. This saves the server traffic and demand. It also makes JavaScript very fast as any code function can be run immediately.

**Versatility** - JavaScript can be used in a variety of applications. It can be inserted into any webpage regarless of the file extension, unlike PHP or SSI scripts. JavaScript can also be used inside scripts written in other languages.

**Richer interfaces** - JavaScript can be used to include many interactive features on the websites such as drag-and-drop components. One can also create interfaces that react to mouse movement and keyboard interactions.


##How to add JavaScript?

In HTML, JavaScript code must be inserted between <script> and </script> tags. 

```
<script>
document.getElementById("sample").innerHTML = "Beginner's guide to JavaScript";
</script>
```

It can either be placed in the <head> or the <body> section.

**JavaScript in <head>**

```
<!DOCTYPE html>
<html>
<head>
<script>
function myFunction() {
    document.getElementById("sample").innerHTML = "Beginner's guide to JavaScript";
}
</script>
</head>

<body>
<p id="sample">Welcome!</p>

<button type="button" onclick="myFunction()">Click me</button>

</body>
</html> 

```

**JavaScript in <body>**

```
<!DOCTYPE html>
<html>
<body>

<p id="sample">Welcome!</p>

<button type="button" onclick="myFunction()">Click me</button>

<script>
function myFunction() {
    document.getElementById("sample").innerHTML = "Beginner's guide to JavaScript";
}
</script>

</body>
</html> 

```

Another way to add JavaScript is through external file which can be saved with a `.js` extension. We just add the `myFunction()` in the .js file.
