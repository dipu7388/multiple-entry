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
    // '@angular/core',
    // '@angular/common',
    // '@angular/platform-browser',
    // '@angular/platform-browser-dynamic',
    // '@angular/router',
    // '@config',
    // '@core',
    // '@multi-entry',
    // '@multi-entry/l3-components',
    // '@multi-entry/button',
    // Add further packages you don't need at runtime
  ]

  // Please read our FAQ about sharing libs:
  // https://shorturl.at/jmzH0

});
