// vue.config.js

const magicImporter = require('node-sass-magic-importer');

const magicImporterOptions = {
  // Defines the path in which your node_modules directory is found.
  cwd: process.cwd(),
  // Define the package.json keys and in which order to search for them.
  packageKeys: [
    'sass',
    'scss',
    'style',
    'css',
    'main.sass',
    'main.scss',
    'main.style',
    'main.css',
    'main',
  ],
  // You can set the special character for indicating a module resolution.
  packagePrefix: '~',
  // Disable console warnings.
  disableWarnings: false,
  // Disable importing files only once.
  disableImportOnce: false,
  // Add custom node filters.
  customFilters: undefined,
};

module.exports = {

  runtimeCompiler: true,

  filenameHashing: false,

  productionSourceMap: false,

  // add svg loader
  chainWebpack: (config) => {
    const svgRule = config.module.rule('svg');
    svgRule.uses.clear();
    svgRule
        .use('babel-loader')
        .loader('babel-loader')
        .end()
        .use('vue-svg-loader')
        .loader('vue-svg-loader');
  },


  css: {
    sourceMap: true,

    loaderOptions: {
      // pass options to sass-loader
      sass: {
        importer: magicImporter(magicImporterOptions),
      },
    },
  },

  pluginOptions: {
    lintStyleOnBuild: false,
    stylelint: {},
  },
};
