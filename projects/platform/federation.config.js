const { withNativeFederation, shareAll } = require('@angular-architects/native-federation/config');

module.exports = withNativeFederation({

  shared: {
    ...shareAll({ singleton: true, strictVersion: true, requiredVersion: 'auto' }),
  },

  skip: [
    'rxjs/ajax',
    'rxjs/fetch',
    'rxjs/testing',
    'rxjs/webSocket',
    '@angular/platform-browser/animations',
    '@angular/animations',
    '@angular/animations/browser',
    '@angular/platform-browser/animations/async',
    '@angular/core/rxjs-interop',
    // Add further packages you don't need at runtime
  ],
  sharedMappings: [
    '@config',
    '@core',
    '@multi-entry',
    '@multi-entry/button',
    '@multi-entry/l3-components'
  ]

  // Please read our FAQ about sharing libs:
  // https://shorturl.at/jmzH0

});
