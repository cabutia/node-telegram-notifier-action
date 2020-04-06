const { jobStatus } = require('../constants')
const core = require('@actions/core')
const messages = require('../messages')

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

module.exports.selectMessage = () => {
	if (core.getInput('initial')) {
		return messages.deployStarted
	}
	switch (status) {
		case jobStatus.OK:
			return messages.deploySucceed
		case jobStatus.FAIL:
			return messages.deployFailed
	}
}

module.exports.messageVars = {
	timestamp: Date.now(),
	deployNumber: 53,
	branch: 'master',
	commit: '9891305975e698c8efef30ee029bf9c6ad2d3bf4'
}