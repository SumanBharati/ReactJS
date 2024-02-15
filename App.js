import React from 'react';
import ReactDOM from 'react-dom/client';

const heading = React.createElement(
    "h1",
    { id: "heading", xyz: "abc" }, //This object takes html attributes
    "Hello World from App.js"
);
  
const root = ReactDOM.createRoot(document.getElementById("root"));
  
root.render(heading);

// const content = React.createElement("div", {}, 
//     [React.createElement("div", {}, 
//         [React.createElement("h1", {}, "I'm h1 tag."),
//          React.createElement("h2", {}, "I'm h2 tag.")]
//     ),
//     React.createElement("div", {}, 
//     [React.createElement("h1", {}, "I'm h1 tag."),
//      React.createElement("h2", {}, "I'm h2 tag.")]
//     )]
// );

// const root = ReactDOM.createRoot(document.getElementById("root"));
  
// root.render(content);