const fetch = require('node-fetch')
const config = require('./config')
const { builder } = require('./url')

const routes = {
	sendMessage: '/bot<botId>/sendMessage'
}

const post = (url, data) => {
	const opts = {
		method: 'post',
		headers: {
			'Content-Type': 'application/json'
		},
		body: JSON.stringify(data)
	}
	console.log('Fetching %s with data %s', url, opts)
	return fetch(url, opts)
}

module.exports.sendMessage = (message) => {
	const url = builder(routes.sendMessage, { botId: config.botId })
	return post(url, {
		chat_id: config.chatId,
		text: message,
		parse_mode: 'MarkdownV2'
	})
}