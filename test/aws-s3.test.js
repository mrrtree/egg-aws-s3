'use strict';

const mock = require('egg-mock');

describe('test/aws-s3.test.js', () => {
  let app;
  before(() => {
    app = mock.app({
      baseDir: 'apps/aws-s3-test',
    });
    return app.ready();
  });

  after(() => app.close());
  afterEach(mock.restore);

  it('should GET /', () => {
    return app.httpRequest()
      .get('/')
      .expect('hi, awsS3')
      .expect(200);
  });
});
