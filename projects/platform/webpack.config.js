// const ModuleFederationPlugin = require("webpack/lib/container/ModuleFederationPlugin");
// const mf = require("@angular-architects/module-federation/webpack");
// const path = require("path");
// const share = mf.share;

// const sharedMappings = new mf.SharedMappings();
// sharedMappings.register(
//   path.join(__dirname, '../../tsconfig.json'),
//   [/* mapped paths to share */]);
// module.exports = {
//   output: {
//     uniqueName: "platform",
//     publicPath: "auto"
//   },
//   optimization: {
//     runtimeChunk: false
//   },
//   resolve: {
//     alias: {
//       ...sharedMappings.getAliases(),
//     }
//   },
//   experiments: {
//     outputModule: true
//   },
//   plugins: [
//     new ModuleFederationPlugin({
//         library: { type: "module" },

//         // For remotes (please adjust)
//         // name: "platform",
//         // filename: "remoteEntry.js",
//         // exposes: {
//         //     './Component': './projects/platform/src/app/app.component.ts',
//         // },

//         // For hosts (please adjust)
//         // remotes: {
//         //     "mfe1": "http://localhost:3000/remoteEntry.js",

//         // },

//         shared: share({
//           "@angular/core": { singleton: true, strictVersion: true, requiredVersion: 'auto' },
//           "@angular/common": { singleton: true, strictVersion: true, requiredVersion: 'auto' },
//           "@angular/common/http": { singleton: true, strictVersion: true, requiredVersion: 'auto' },
//           "@angular/router": { singleton: true, strictVersion: true, requiredVersion: 'auto' },

//           ...sharedMappings.getDescriptors()
//         })

//     }),
//     sharedMappings.getPlugin()
//   ],
// };


const { shareAll, withModuleFederationPlugin } = require('@angular-architects/module-federation/webpack');

const webpackConfig  = withModuleFederationPlugin({

  // remotes: {
  //   "mfe1": "http://localhost:3000/remoteEntry.js",
  // },

  shared: {
    ...shareAll({ singleton: true, strictVersion: true, requiredVersion: 'auto' }),
    // '@multi-entry/l3-components': {
    //   singleton: true,
    //   requiredVersion: 'auto',
    // },
    // '@multi-entry/button': {
    //   singleton: true,
    //   requiredVersion: 'auto',
    // },
  },
//   sharedMappings: ["@core", "@config", "@multi-entry",

//   // "@multi-entry/button", "@multi-entry/l3-components"

// ]
sharedMappings: [
  "@core",
  "@config",
  "@multi-entry",
  "@multi-entry",
  "@multi-entry/*"
]
});
// webpackConfig.resolve.alias['@multi-entry$']=webpackConfig.resolve.alias['@multi-entry'];
// webpackConfig.resolve.alias['@multi-entry$']=webpackConfig.resolve.alias['@multi-entry$'].replace('src/', '');
// delete webpackConfig.resolve.alias['@multi-entry'];
// console.log('alias',webpackConfig);
module.exports = {
  ...webpackConfig,
  optimization: {
    splitChunks: {
      cacheGroups: {
        default: false,
        vendors: false,
        lib: {
          test: /projects[\\/](core|config|multi-entry)[\\/]/,
          name: (module, chunks, cacheGroupKey) => {
            const moduleFileName = module.identifier().split('/').reduceRight((item) => item);
            const allChunksNames = chunks.map((item) => item.name).filter(x=>x).join('_');
            // console.log([cacheGroupKey,allChunksNames,moduleFileName])
           return [cacheGroupKey,allChunksNames,moduleFileName.replace('.ts', '')].filter(x=>x).join('_')
          },
          chunks: 'all',
          enforce: true
        }

      },
    },
  },
};
