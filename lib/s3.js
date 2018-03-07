'use strict';

const assert = require('assert');
const S3 = require('aws-sdk/clients/s3');

module.exports = app => {
  app.addSingleton('awsS3', createS3Client);
};

function createS3Client(config, app) {
  assert(config.endpoint !== undefined);
  assert(config.accessKeyId !== undefined);
  assert(config.secretAccessKey !== undefined);

  app.coreLogger.info('[egg-aws-s3] connecting %s', config.endpoint);

  const s3 = new S3(config);

  return s3;
}
