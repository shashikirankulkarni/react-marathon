# Assignment 1

## What is Emmet?
Emmet is a web-developer’s toolkit that can greatly improve HTML & CSS workflow. It provides dynamic snippets which helps in faster development.

## Difference between a Library and Framework?
* Libraries provide developers with predefined functions and classes to make their work easier and boost the development process.
* Framework, on the other hand, is like the foundation upon which developers build applications for specific platforms. 
* By using a library, you can control the flow of the application and call the library. 
* In contrast, when you use a framework, the control is inverted, i.e., the framework controls the flow and calls your code.
* Generally, libraries are a collection of helper modules, objects, classes, functions, message templates, pre-written code, etc.
* Frameworks consist of a lot of APIs, compilers, toolsets, support programs, libraries, etc.
* Codes in libraries are geared toward a particular program or to solve a specific development problem. Therefore, developers must modify library code to meet their needs.
* Despite the fact that frameworks generate new codes for developers. These codes cannot be altered or modified later. Unlike libraries, frameworks do not allow users to modify their pre-written codes, so you don’t have to worry about deleting or changing them.
* It is possible to call a library out of context. You may use the library wherever you see fit in your code.
* On the other hand, you can only call and use what belongs to a Framework within the same Framework. 
* Less code is required to build libraries, which leads to faster loading times and better performance.
* Developing a framework requires a lot of coding, which increases loading times and decreases performance.
* Libraries: JQuery, React JS, etc.
* Frameworks: Spring, NodeJS, AngularJS, Vue JS, etc.

## What is CDN? Why do we use it?
A content delivery network (CDN) is a geographically distributed group of servers that caches content close to end users.
A CDN allows for the quick transfer of assets needed for loading Internet content, including HTML pages, JavaScript files, stylesheets, images, and videos.

## Why is React known as React?
React is called React because it is a library that reacts to changes in data and updates the user interface accordingly.

## What is crossorigin in script tag?
Crossorigin is used for loading an external script into our domain from a third party server or another domain with the support of HTTP CORS Request. This attribute is used to protect sensitive information from the third party when fetching out the results.

## What is diference between React and ReactDOM?
React provides the tools and concepts to define component-based user interfaces, ReactDOM handles the task of rendering those interfaces in a web environment. The reason React and ReactDOM were split into two libraries was due to the arrival of React Native (A react platform for mobile development).

## What is difference between react.development.js and react.production.js files via CDN?
In development mode, we can enable and utilize React developer tools, devtools profiler, debugging environment attached with source code. We can utilize various functionalities such as Hot Module Replacement, diagnostics so that development environment will help to debug code.

In production mode, compression and minification of Javascript and other resources happens to reduce size of the code which is not the case when it comes to development mode. Performance will be much faster in production mode when compared to development mode.

## What is async and defer?
Async in script tag in JavaScript is a way to load scripts asynchronously. That means, if a script is async, it will be loaded independently of other scripts on the page, and will not block the page from loading.

By using the defer attribute in HTML, the browser will load the script only after parsing (loading) the page. This can be helpful if you have a script that is dependent on other scripts, or if you want to improve the loading time of your page by loading scripts after the initial page load.

If we use Async, HTML parsing continues till Javascript is loaded completely, once it is loaded, HTML parsing stops. Javascript executes completely. Then HTML parsing continues. (Does not Guarantee order of excecution of script. If script is independent of any other scripts then we can use it, eg. Analytics scripts)

In defer, Javascript loads along with HTML parsing, once HTML parsing is completed, then Javascript is executed. (Guarantees order of execution, as scripts excecuted once HTML parsing is done)

# Notes

- Hello World from JS into HTML
- Browsers have JavaScript Engine i.e V8 which understands the JS code such as document, createElement, appendChild etc.
- Browser does not understand React
- Read CDN
- Read CORS -> The browser's same-origin policy blocks reading a resource from a different origin.
- React is a JavaScript library
- Hello World From React
- ReactElement is a object
- While it is rendering into DOM, React object is converted into element

Nested React Elements using create element
```
/*
<div id = "parent">
    <div id="child">
        <h1>Nested heading</h1>
        <h2>Nested sibling heading</h2>
    </div>
</div>
*/
```

```
const parent = React.createElement(
  "div",
  { id: "parent" },
  React.createElement(
    "div",
    { id: "child" },
    [
    React.createElement("h1", { id: "heading", key: '0' }, "Nested Heading"),
    React.createElement("h2", { id: "heading2", key: '1' }, "Nested sibling heading")
    ]
  )
);
```

```
const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(parent);
```

- Content present in the root of the html will be replaced by React
- Elements present above and below root div will stay as it is.
```
<!DOCTYPE html>
<html lang="en">
  <head>
    <meta charset="UTF-8" />
    <meta name="viewport" content="width=device-width, initial-scale=1.0" />
    <title>Welcome To React</title>
    <link rel="stylesheet" href="./style.css" />
  </head>
  <body>
    <h1>Heading Top of the Root</h1>
    <div id="root"></div>
    <h1>Heading below of the Root</h1>
    <script
      crossorigin
      src="https://unpkg.com/react@18/umd/react.production.min.js"
    ></script>
    <script
      crossorigin
      src="https://unpkg.com/react-dom@18/umd/react-dom.production.min.js"
    ></script>
    <script src="./App.js"></script>
  </body>
</html>
```
