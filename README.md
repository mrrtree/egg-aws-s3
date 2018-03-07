# egg-aws-s3

[![NPM version][npm-image]][npm-url]
[![build status][travis-image]][travis-url]
[![Test coverage][codecov-image]][codecov-url]
[![David deps][david-image]][david-url]
[![npm download][download-image]][download-url]

[npm-image]: https://img.shields.io/npm/v/egg-aws-s3.svg?style=flat-square
[npm-url]: https://npmjs.org/package/egg-aws-s3
[travis-image]: https://img.shields.io/travis/eggjs/egg-aws-s3.svg?style=flat-square
[travis-url]: https://travis-ci.org/eggjs/egg-aws-s3
[codecov-image]: https://img.shields.io/codecov/c/github/eggjs/egg-aws-s3.svg?style=flat-square
[codecov-url]: https://codecov.io/github/eggjs/egg-aws-s3?branch=master
[david-image]: https://img.shields.io/david/eggjs/egg-aws-s3.svg?style=flat-square
[david-url]: https://david-dm.org/eggjs/egg-aws-s3
[download-image]: https://img.shields.io/npm/dm/egg-aws-s3.svg?style=flat-square
[download-url]: https://npmjs.org/package/egg-aws-s3

<!--
Description here.
-->

## Install

```bash
$ npm i egg-aws-s3 --save
```

## Usage

```js
// {app_root}/config/plugin.js
exports.awsS3 = {
  enable: true,
  package: 'egg-aws-s3',
};
```

## Configuration

```js
// {app_root}/config/config.default.js
exports.awsS3 = {
  client: {
    convertAsync: true,  // plugin owner property, while this flag is true, s3 client object will add async function
    sslEnabled: false,
    s3ForcePathStyle: true,
    signatureVersion: 'v2',
  },
  app: true,
  agent: false,
};

```
see [aws document contructor property](https://docs.aws.amazon.com/AWSJavaScriptSDK/latest/AWS/S3.html#constructor-property) for more client detail.

## Example
```
app.awsS3.listBuckets({}, (err, data) => {
  if (err)
    console.log(err);
  console.log(data);
});

// while convertAsync is enable, you can use async/await like
try {
  const data = await app.awsS3.listBucketsAsync({});
  console.log(data);
} catch (err) {
  console.log(err);
}
```

see [aws document method summary](https://docs.aws.amazon.com/AWSJavaScriptSDK/latest/AWS/S3.html#method-summary) for APIs.

## Questions & Suggestions

Please open an issue [here](https://github.com/eggjs/egg/issues).

## License

[MIT](LICENSE)
