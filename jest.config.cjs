module.exports = {
  testEnvironment: 'node',
  transform: {},
  reporters: [
    'default',
    [
      'jest-html-reporters',
      {
        publicPath: './html-report',
        filename: 'report.html',
        pageTitle: 'API Tests Report',
        expand: true,
        openReport: true,
      },
    ],
  ],
};
