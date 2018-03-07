'use strict';

const s3 = require('./lib/s3');

module.exports = agent => {
  if (agent.config.awsS3.agent) s3(agent);
};
