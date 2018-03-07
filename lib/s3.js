'use strict';

const util = require('util');
const assert = require('assert');
const S3 = require('aws-sdk/clients/s3');

module.exports = app => {
  app.addSingleton('awsS3', createS3Client);
};

function createS3Client(config, app) {
  assert(config.endpoint);
  assert(config.accessKeyId);
  assert(config.secretAccessKey);

  app.coreLogger.info('[egg-aws-s3] connecting %s', config.endpoint);

  const s3 = new S3(config);

  if (config.convertAsync) {
    for (const key in s3) {
      if (typeof s3[key] === 'function') { s3[key + 'Async'] = util.promisify(s3[key]); }
    }
  }
  return s3;
}
