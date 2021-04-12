import React from 'react';
import ReactDOM from 'react-dom';

import App from './js/App';

export default function(elementId) {
	ReactDOM.render(<App />, document.getElementById(elementId));
}