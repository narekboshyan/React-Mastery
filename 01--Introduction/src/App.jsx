import React from "react";

const App = () => {
    return <div>App</div>;
};

export default App;

// !  React.js concepts

// ! Imperative // before react
// ^ In an imperative paradigm you directly change individual parts of your app, in response to various user events
// *  the problem with the imperative approach is that it becomes difficult to see the relationships between events and all the edge cases

// !  1). Declarative
// *  Before everything was with a imperative approach but React.js came up with DECLARATIVE approach
// * So react says to us "Hey DOM manipulation is one of the biggest performance event. It takes a lot of time for the DOM changes to happen."
// *The browser has to do 2 really intensive operations. one is to repaint that is change an element and add it on to a page and then recalculate the layout so move things around inside the page if it is needed.

// *  SO changing the DOM was really expensive operation.So react says "Hey you know what elt me take care of that. I will find the best way for me to change the DOM just declare to me what your app looks like"

// !  2). Build Websites like lego blocks
// * React is designed around concept of reusable components.
// * React is all abound components , it is better to have small components rather than big components

// !  3). One Was data flow
// * unidirectional data flow - the components and state in our app is always going to build a virtual dom of our app.
// * It creates JS version of the DOM. So react has a bot which goes looks at the virtual DOM and the real DOM and modifies the DOM for us.
// * THe idea of unidirectional data flow means that any time we want something to change on our webpage like state changes on our webpage. as soon as the state changes the react reacts to that change. when state changes react combines state and components and updates teh DOM.so the data only flows one way. 

// * so in the virtual DOM as soon as state changes so virtual DOM tree is going to trick to down that information so every component would know that state has just been changed.data can never move up on react only down. If in one component state is being changed the data can never move up only down  

// * with one way data flow it is easy to debug the code.

// !  4). UI Library
// * React is JS library so it only take cares of the user interface. there is no http client, routing etc. so it only 
// * So everything else routing http client and so on we should use other packages libraries to build our app

// *  whatever we write it is going to create a virtual DOM. and react library takes that code copies it creates real dom and then it sees that we changed one component it compares virtual dom and real dom and accordingly updated that component