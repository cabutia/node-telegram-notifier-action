const core = require('@actions/core')
const github = require('@actions/github')
const messages = require('./messages')
const config = require('./utils/config')
const { sendMessage } = require('./utils/api')
const { build } = require('./utils/messages')

const main = async () => {
	console.log('Received parameters:')
	console.log('\tStatus:    %s', core.getInput('status'))
	console.log('\tChannel:   %s', core.getInput('channel'))
	console.log('\tBot token: %s', core.getInput('bot'))
	console.log('Environment:')
	console.log(process.env)
	// let message
	// const deployStartedMessage = build(messages.deployStarted, {
	// 	timestamp: Date.now(),
	// 	deployNumber: 53,
	// 	branch: 'master',
	// 	commit: '9891305975e698c8efef30ee029bf9c6ad2d3bf4'
	// })
	// sendMessage(config.chatId, deployStartedMessage)
	// 	.then(async (res) => {
	// 		console.log(await res.json())
	// 	})
	// 	.catch(err => {
	// 		console.error(err)
	// 	})
}

main()