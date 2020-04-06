const core = require('@actions/core')
const github = require('@actions/github')

try {
	const jobStatus = core.getInput('status')
	console.log('Received job status: ', jobStatus)
	console.log('Action finished!')
} catch (error) {
	core.setFailed(error.message)
}