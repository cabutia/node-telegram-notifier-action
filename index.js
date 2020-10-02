const core = require('@actions/core')

const { sendMessage } = require('./utils/api')
const { build, selectMessage, messageVars } = require('./utils/messages')

const main = async () => {
	const msg = build(selectMessage(), messageVars)
	sendMessage(msg)
		.then(res => {
			console.log('Notified!')
			core.setOutput('Notified!')
		})
		.catch(err => {
			console.log('Notification failed')
			core.setFailed(err.message)
		})
}

main()