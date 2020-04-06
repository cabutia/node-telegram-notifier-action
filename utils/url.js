const baseUrl = 'https://api.telegram.org'

module.exports.builder = (url, params) => {
	let _url = url
	for (const param in params) {
		if (params.hasOwnProperty(param)) {
			const val = params[param]
			_url = _url.replace(`<${param}>`, val)
		}
	}
	return `${baseUrl}${_url}`
}