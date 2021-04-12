import React from 'react';

import javascriptExample from './templates/javascriptExample';

const style = {
	overflow: 'visible',
	tabSize: 4
};

const textareaStyle = {
	borderWidth: 0,
	height: '100vh',
	padding: '12px',
	width: '100%'
}

const JavascriptExample = ({contentType, data, method, url}) => {
	return (
		<div className="card vh-100">
			<pre style={style}>
				<textarea
					readOnly
					style={textareaStyle}
					value={javascriptExample({contentType, data, method, url})}
				/>
			</pre>
		</div>
	);
}

export default JavascriptExample;