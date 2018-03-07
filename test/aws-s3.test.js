'use strict';

const assert = require('assert');
const mock = require('egg-mock');

describe('test/aws-s3.test.js', () => {
  let app;
  before(() => {
    app = mock.app({
      baseDir: 'apps/aws-s3-test',
    });
    return app.ready();
  });

  // after(() => app.close());
  afterEach(mock.restore);

  it('1. test list buckets', function(done) {
    console.log('awsS3 object ===> %j', app.awsS3);

    app.awsS3.listBuckets({}, (err, data) => {
      console.log('data ===> %j', data);
      assert(err === undefined);
      assert(data !== undefined);
      done();
    });
  });
});
