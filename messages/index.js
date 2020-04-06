module.exports.deployStarted = `
Job *{{ job }}* started!
------------------------------
Project: {{ repository }}
Commit: {{ commit }}
`

module.exports.deploySucceed = `
Job *{{ job }}* success!
------------------------------
Project: {{ repository }}
Commit: {{ commit }}
`

module.exports.deployFailed = `
Job *{{ job }}* failed!
------------------------------
Project: {{ repository }}
Commit: {{ commit }}
`