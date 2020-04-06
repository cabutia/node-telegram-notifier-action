const core = require('@actions/core')
const github = require('@actions/github')
const messages = require('./messages')
const config = require('./utils/config')
const { sendMessage } = require('./utils/api')
const { build, selectMessage, messageVars } = require('./utils/messages')

const main = async () => {
	const message = selectMessage()
	const variables = messageVars
	const msg = build(message, variables)
	sendMessage(msg)
		.then(async (res) => {
			core.setOutput('Notified!')
		})
		.catch(err => {
			core.setFailed(err.message)
		})
}

main()