module.exports = {
  apps: [{
    name: '4w4u_Demo',
    script: './index.js'
  }],
  deploy: {
    production: {
      user: 'ubuntu',
      host: 'ec2-54-194-138-184.eu-west-1.compute.amazonaws.com',
      key: '~/.ssh/4w4u_Demo.pem',
      ref: 'origin/master',
      repo: 'git@github.com:kchara17/4w4u.git',
      path: '/home/ubuntu/4w4u_Demo/',
      'post-deploy': 'npm install && pm2 startOrRestart ecosystem.config.js'
    }
  }
}