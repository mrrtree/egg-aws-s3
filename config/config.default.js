'use strict';

/**
 * egg-aws-s3 default config
 * @member Config#awsS3
 * @property {String} SOME_KEY - some description
 */
exports.awsS3 = {
  client: {
    endpoint: 'http://10.182.2.246:80',
    accessKeyId: 'AJEHH1213QIF9L31ALYA',
    secretAccessKey: 'HN4oiJXYAWwzY3dryLSr4eUp49y208Au4mhta9pa',
    sslEnabled: false,
    s3ForcePathStyle: true,
  },
  app: true,
  agent: false,
};
