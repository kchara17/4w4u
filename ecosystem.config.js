module.exports = {
  apps: [{
    name: '4w4u',
    script: './index.js'
  }],
  deploy: {
    production: {
      user: 'ubuntu',
      host: ' ec2-13-58-132-11.us-east-2.compute.amazonaws.com',
      key: '~/.ssh/4w4u.pem',
      ref: 'origin/master',
      repo: 'git@github.com:kchara17/4w4u.git',
      path: '/home/ubuntu/4w4u/',
      'post-deploy': 'npm install && pm2 startOrRestart ecosystem.config.js'
    }
  }
}