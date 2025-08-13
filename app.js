   import React  from "react";
   import ReactDOM from "react-dom/client";
   
   const parent = React.createElement(
        "div",{id:"parent"},[
        React.createElement(
            "div",{id:"child"},
           [React.createElement("h1",{},"i'm an h1 tag"),
            React.createElement("h2",{},"JAI HIND , FIGHT MARNA HAI BOSS"),
           ]),
            React.createElement(
            "div",{id:"child"},
           [React.createElement("h1",{},"i'm an h1 tag"),
            React.createElement("h2",{},"i'm an h1 tag"),
           ]) ]
    );


const heading =  React.createElement("h1" , {id:"heading"} , "hello world from react !") ;
   const root = ReactDOM.createRoot(document.getElementById("root"));

  //  console.log(heading);// object 
  //  root.render(heading);

   console.log(parent);// object 
   root.render(parent);

