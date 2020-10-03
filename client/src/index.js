import React from 'react';
import './index.scss';
import App from './App';

import { hydrate, render } from "react-dom";

const APP = (App)
 
const rootElement = document.getElementById("root");
if (rootElement.hasChildNodes()) {
  hydrate(<App />, rootElement);
} else {
  render(<App />, rootElement);
}

// ReactDOM.render(<App />, document.getElementById('root')); 
