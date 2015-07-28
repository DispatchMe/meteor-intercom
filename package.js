Package.describe({
  name: 'dispatch:intercom',
  version: '1.0.1',
  summary: 'Intercom for meteor.'
});

Package.onUse(function (api) {
  api.use([
    // core
    'random@1.0.3'
  ], 'web');

  api.addFiles([
    // Intercom javascript library
    'lib/intercom.js',

    // Package helper functions
    'intercom.js'
  ], 'web');

  api.export('IntercomMeteor', 'web');
});
