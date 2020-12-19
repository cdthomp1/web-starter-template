# Web Starter Template

A simple web starter template package to quickly scaffold a static web project. 

Simply type `npx create-static-web` to get started creating a web project! 

When `npx create-static-web` is created, the following files are created: 
- index.html
- style.css
- main.js

The contents of these files are as follows: 

**index.html**
```html
<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Web Template</title>
    <link rel="stylesheet" href="style.css">
</head>
<body>
    <h1>Welcome to the Web Template!</h1>
    <p>Edit index.html, main.css, index.js to get started</p>

    <script src="main.js"></script>
</body>
</html>
```

**style.css**
```css
* {
    margin: 0;
}

body {
    background-color: azure;
    font-family:Arial, Helvetica, sans-serif;
    display: flex;
    flex-direction: column;
    align-items: center;
    margin: 0 auto;
}
```

**main.js**
```javascript
function starterFunction() {
    console.log('Hello template :)');
}
```

More web project templates to come! 