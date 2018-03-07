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
    app.awsS3.listBuckets({}, (err, data) => {
      assert(err === null);
      assert(data !== undefined);
      done();
    });
  });
});
