 
 var aurelia = require('aurelia-cli');

  aurelia.command('bundle', {
    js: {
      "dist/app-bundle": {
        modules: [
          '*',
          'aurelia-bootstrapper',
          'aurelia-http-client',
          'aurelia-router',
          'aurelia-animator-css',
          'github:aurelia/templating-binding@0.17.1',
          'github:aurelia/templating-resources@0.17.4',
          'github:aurelia/templating-router@0.18.0',
          'github:aurelia/loader-default@0.12.0',
          'github:aurelia/history-browser@0.10.0'
        ],
        options: {
          inject: true,
          minify: true
        }
      }
    }
  });
  