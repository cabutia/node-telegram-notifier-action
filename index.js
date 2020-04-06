const core = require('@actions/core')
const github = require('@actions/github')
const messages = require('./messages')
const config = require('./utils/config')
const { sendMessage } = require('./utils/api')
const { build, selectMessage, messageVars } = require('./utils/messages')

const main = async () => {
	const msg = build(selectMessage(), messageVars)
	sendMessage(msg)
		.then(async (res) => {
			core.setOutput('Notified!')
		})
		.catch(err => {
			console.log('Notification failed')
			core.setFailed(err.message)
		})
}

main()