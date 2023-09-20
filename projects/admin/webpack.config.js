const { shareAll, withModuleFederationPlugin } = require('@angular-architects/module-federation/webpack');

const config = withModuleFederationPlugin({

  name: 'admin',

  exposes: {
    './MfWrapperModule': './projects/admin/src/app/mf-wrapper/mf-wrapper.module.ts',
  },

  shared: {
    ...shareAll({ singleton: true, strictVersion: true, requiredVersion: 'auto' }),
  },
  sharedMappings: [
    "@core",
    "@config",
    "@multi-entry",
    "@multi-entry/*"
  ],

});

module.exports={
  ...config
}
