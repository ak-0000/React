// const Heading = React.createElement(
//     "h1",
//     {id : "heading"},
//     "Hello World From React");

// // Heading  -> object 

// const root = ReactDOM.createRoot(document.getElementById("root"));

// root.render(Heading);   


const parent = React.createElement("div",{id:"parent"},
[React.createElement("div",{id:"child"},
[React.createElement("h1",{},"this is h1 tag"),React.createElement("h2",{},"this is h1 tag")]),
React.createElement("div",{id:"child"},
React.createElement("h1",{},"this is h1 tag"),React.createElement("h2",{},"this is h1 tag"))]);


const root = ReactDOM.createRoot(document.getElementById("root"));


root.render(parent);
