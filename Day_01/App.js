/*
<div id = "parent">
    <div id="child">
        <h1>Nested heading</h1>
        <h2>Nested sibling heading</h2>
    </div>
</div>
*/

const parent = React.createElement(
  "div",
  { id: "parent" },

  [
    React.createElement(
      "div",
      { id: "child1", key: "0" },

      [
        React.createElement(
          "h1",
          { id: "heading", key: "0" },
          "Nested Heading"
        ),

        React.createElement(
          "h2",
          { id: "heading2", key: "1" },
          "Nested sibling heading"
        ),
      ]
    ),
    React.createElement(
      "div",
      { id: "child2", key: "1" },

      [
        React.createElement(
          "h1",
          { id: "heading", key: "0" },
          "Nested Heading"
        ),

        React.createElement(
          "h2",
          { id: "heading2", key: "1" },
          "Nested sibling heading"
        ),
      ]
    ),
  ]
);
console.log(parent);
//const heading = React.createElement("h1", { id: "heading" }, "Welcome");
const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(parent);
