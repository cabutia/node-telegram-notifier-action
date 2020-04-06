module.exports.deployStarted = `
*Deployment [{{ deploymentNumber }}] started!*

Deploying branch: *{{ branch }}*
Commit: \`{{ commit }}\`
Started at: {{ time }}
`

module.exports.deploySucceed = `
*Deployment [{{ deploymentNumber }}] success!*

Deploying branch: *{{ branch }}*
Commit: \`{{ commit }}\`
Finished at: {{ time }}
`

module.exports.deployFailed = `
*Deployment [{{ deploymentNumber }}] failed!*

Deploying branch: *{{ branch }}*
Commit: \`{{ commit }}\`
`