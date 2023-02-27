
import { React } from "react";
// import  ReactDOM  from "react-dom";

// import { createRoot } from 'react-dom/client'
// import { StrictMode } from "react";
// import { createRoot } from "react-dom/client";

import App from './App';
import { createRoot } from 'react-dom/client';

import { render } from 'react-dom';
const container = document.getElementById('root');
const root = createRoot(container);
root.render(<App tab="home" />);



// ReactDOM.render(<App />, document.getElementById('root'));
// createRoot(document.getElementById('root')).render(<App />);


// const rootElement = document.getElementById("root");
// const root = createRoot(rootElement);