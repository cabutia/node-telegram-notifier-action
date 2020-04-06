module.exports.deployStarted = `
Job _{{ job }}_ started!
------------------------------
Project: {{ repository }}
Commit: {{ commit }}
`

module.exports.deploySucceed = `
Job _{{ job }}_ success!
------------------------------
Project: {{ repository }}
Commit: {{ commit }}
`

module.exports.deployFailed = `
Job _{{ job }}_ failed!
------------------------------
Project: {{ repository }}
Commit: {{ commit }}
`