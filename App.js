const heading = React.createElement(
    "h1",
    { id: "heading", xyz: "abc" }, //This object takes html attributes
    "Hello World from App.js"
);
  
const root = ReactDOM.createRoot(document.getElementById("root"));
  
root.render(heading);
  