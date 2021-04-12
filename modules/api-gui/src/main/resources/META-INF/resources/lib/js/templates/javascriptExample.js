import {stringify} from '../util/util';

const stringOrNull = string => {
	return string ? `'${string}'` : null;
}

const postPutFetch = ({contentType, data, method, url}) => (
`let contentType = ${stringOrNull(contentType)};
let data = ${stringify(data)};
let method = '${method}';

let request;

if (contentType === 'application/json') {
	request = {
		body: JSON.stringify(data),
		headers: {
			'Content-Type': contentType
		},
		method: method
	};
}
else if (contentType === 'multipart/form-data') {
	const formData  = new FormData();

	for(const name in data) {
		formData.append(name, data[name]);
	}

	request = {
		body: formData,
		method: method
	};
}

Liferay.Util.fetch(
	'${url}',
	request
)`
);

const deleteFetch = ({method, url}) => (
`Liferay.Util.fetch(
	'${url}',
	{method: '${method}'}
)`
);

const getFetch = ({url}) => (
`Liferay.Util.fetch(
	'${url}'
)`
);

const then = `.then(
	response => {
		const {status} = response;

		const responseContentType = response.headers.get('content-type');

		if (status === 204) {
			return {status};
		}
		else if (response.ok && responseContentType === 'application/json') {
			return response.json();
		}
		else {
			return response.text();
		}
	}
).then(response => {
	console.log('response', response);
});`

const javascriptExample = ({contentType, data, method, url}) => {
	let fetch;

	method = method.toUpperCase();

	if (method === 'GET') {
		fetch = getFetch({url});
	}
	if (method === 'POST' || method === 'PUT') {
		fetch = postPutFetch({contentType, data, method, url});
	}
	else if (method === 'DELETE') {
		fetch = deleteFetch({method, url});
	}

	return fetch + then;
};

export default javascriptExample;