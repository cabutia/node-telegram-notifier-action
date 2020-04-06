const core = require('@actions/core')

module.exports = {
	botId: core.getInput('bot'),
	chatId: core.getInput('channel'),
	initial: core.getInput('initial')
}