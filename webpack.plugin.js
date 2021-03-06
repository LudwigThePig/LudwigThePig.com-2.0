const ManifestPlugin = require('webpack-manifest-plugin');
const SWPrecacheWebpackPlugin = require('sw-precache-webpack-plugin');
const CopyWebpackPlugin = require('copy-webpack-plugin');
const BundleAnalyzerPlugin = require('webpack-bundle-analyzer').BundleAnalyzerPlugin;
 
exports.bundleAnalyzer = new BundleAnalyzerPlugin();

exports.manifest = new ManifestPlugin({
  fileName: 'asset-manifest.json', // Not to confuse with manifest.json 
});

exports.serviceWorker = new SWPrecacheWebpackPlugin({
  dontCacheBustUrlsMatching: /\.\w{8}\./,
  filename: 'service-worker.js',
  logger(message) {
    if (message.indexOf('Total precache size is') === 0) {
      return;
    }
    console.log(message);
  },
  minify: true, // minify and uglify the script
  navigateFallback: '/index.html',
  staticFileGlobsIgnorePatterns: [/\.map$/, /asset-manifest\.json$/],
});

exports.copy = new CopyWebpackPlugin([
  { from: 'client/pwa' }, // define the path of the files to be copied
]);