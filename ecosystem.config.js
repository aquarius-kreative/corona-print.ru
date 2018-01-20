module.exports = {
  /**
   * Application configuration section
   * http://pm2.keymetrics.io/docs/usage/application-declaration/
   */
  apps: [

    // First application
    {
      name: 'corona-print',
      script: 'npm',
      args: 'start',
      instances: 'max',
      exec_mode: "cluster",
      env: {
        NODE_ENV: 'production'
      },
      env_dev: {
        NODE_ENV: 'env'
      }
    }
  ]
};
