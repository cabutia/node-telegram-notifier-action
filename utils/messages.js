const { jobStatus } = require('../constants')
const core = require('@actions/core')
const messages = require('../messages')

const parseMessage = (str) => {
	const specialChars = '(){}-_!?[]'
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
	const status = core.getInput('status')
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
	job: process.env.GITHUB_JOB,
	repository: process.env.GITHUB_REPOSITORY,
	commit: process.env.GITHUB_SHA
}