module.exports.deployStarted = `
*Job [{{ jobName }}] started!*
------------------------------
Project: {{ repository }}
Commit: {{ sha }}
`

module.exports.deploySucceed = `
*Job [{{ jobName }}] success!*
------------------------------
Project: {{ repository }}
Commit: {{ sha }}
`

module.exports.deployFailed = `
*Job [{{ jobName }}] failed!*
------------------------------
Project: {{ repository }}
Commit: {{ sha }}
`