import React from 'react';
import './index.css';
import App from './App';
import { HashRouter } from "react-router-dom";
import { hydrate, render } from "react-dom";

const APP = (
  <React.StrictMode>
    <HashRouter>
      <App />
    </HashRouter>
  </React.StrictMode>
)
 
const rootElement = document.getElementById("root");
if (rootElement.hasChildNodes()) {
  hydrate(APP, rootElement);
} else {
  render(APP, rootElement);
}



// import React from 'react';
// import ReactDOM from 'react-dom/client';
// import './index.css';
// import App from './App';
// import { HashRouter } from "react-router-dom";

// const root = ReactDOM.createRoot(document.getElementById('root'));
// root.render(
//   <React.StrictMode>
//   <HashRouter>
//     <App />
//   </HashRouter>
//   </React.StrictMode>
// );


