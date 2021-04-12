const STATUS_NO_CONTENT = 204;

const fetch = (url, method = 'get', data, contentType) => {
	let request = {
		method: method.toUpperCase()
	};

	if (method === 'post' || method === 'put') {
		if (contentType === 'application/json') {
			request = {
				...request,
				body: JSON.stringify(data),
				headers: {
					'Content-Type': contentType
				},
			};
		}
		else if (contentType === 'multipart/form-data') {
			const formData  = new FormData();

			for(const name in data) {
				formData.append(name, data[name]);
			}

			request = {
				...request,
				body: formData,
			};
		}
	}

	return Liferay.Util.fetch(
		url,
		request
	).then(
		response => {
			const {status} = response;

			const responseContentType = response.headers.get('content-type');

			if (status === STATUS_NO_CONTENT) {
				return {status};
			}
			else if (response.ok && responseContentType === 'application/json') {
				return response.json();
			}
			else {
				return response.text();
			}
		}
	);
}

export default fetch;