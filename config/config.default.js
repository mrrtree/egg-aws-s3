'use strict';

/**
 * egg-aws-s3 default config
 * @member Config#awsS3
 * @property {String} SOME_KEY - some description
 */
exports.awsS3 = {
  client: {
    convertAsync: true,
    sslEnabled: false,
    s3ForcePathStyle: true,
    signatureVersion: 'v2',
  },
  app: true,
  agent: false,
};
