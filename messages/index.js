module.exports.deployStarted = `
*Deployment started!*

Deploying branch: *{{ branch }}*
Commit: \`{{ commit }}\`
Started at: {{ time }}
`

module.exports.deploySucceed = `
*Deployment success!*

Deploying branch: *{{ branch }}*
Commit: \`{{ commit }}\`
Finished at: {{ time }}
`

module.exports.deployFailed = `
*Deployment failed!*

Deploying branch: *{{ branch }}*
Commit: \`{{ commit }}\`
`