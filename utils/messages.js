const parseMessage = (str) => {
	const specialChars = '(){}-'
	specialChars.split('').forEach(char => {
		str = str.replace(
			new RegExp('\\' + char, 'gm'),
			`\\${char}`
		)
	})
	return str
}

module.exports.build = (message, data) => {
	let _message = message
	for (const variableName in data) {
		if (data.hasOwnProperty(variableName)) {
			const variableValue = data[variableName]
			_message = _message.replace('{{' + variableName + '}}', variableValue)
			_message = _message.replace('{{ ' + variableName + ' }}', variableValue)
		}
	}
	return parseMessage(_message)
}