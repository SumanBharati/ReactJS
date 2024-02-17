import React from 'react';
import ReactDOM from 'react-dom/client';

// JSX
const jsxHeading = <h1 id="heading">Hello React using JSX.</h1>

const reactElem = (<span>
    {jsxHeading}
    <h1 id="heading">Hello from another React element.</h1>
</span>)

const TitleComponent = () => (
    <div>
        <h1>Hello from Title component.</h1>
    </div>
)

const HeadingComponent = () => (
    <div>
        <TitleComponent />
        {reactElem}
        <h1>Hello from Heading component.</h1>
    </div>
)

const root = ReactDOM.createRoot(document.getElementById("root"));

root.render(<HeadingComponent />);



// CORE REACT WAY OF CREATING ELEMENTS
// const heading = React.createElement(
//     "h1",
//     { id: "heading", xyz: "abc" }, //This object takes html attributes
//     "Hello React using core React"
// );
  
// const root = ReactDOM.createRoot(document.getElementById("root"));
  
// root.render(heading);

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