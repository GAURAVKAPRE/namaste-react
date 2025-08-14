 import React  from "react";
import ReactDOM from "react-dom/client";

// React.createElement => reactElement-JS object => htmlelement(render);

//JSX - html-like or xml-like syntax 

// jsx(transpiled before it reaches the js ) - parcel - Bebel


//JSX => Babel transpiles it to React.createElement =>ReactElement-Js object =>HTMLElement(render);

const elem = <span>react element</span>;

const jsxheading =(<h1 id="heading">
    namaste react using jsx ;
     {elem}
    </h1>
    );

const root = ReactDOM.createRoot(document.getElementById("root"));

root.render(jsxheading);

// react component 
// class based components - old 
// functional components - new 

//React functional components

//component composition
const Title =() =>(
    <h1 className="head" >namaste react using jsx</h1>
 );

 const number = 1000;
 const HeadingComponent2 =() =>(
    <div id="container">
         {jsxheading}
         {Title()};
         <Title/>
         <Title></Title>

    <h1 className="heading">namaste react functional component</h1>
    </div>
    );



root.render(<HeadingComponent2/>);

