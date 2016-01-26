'use strict';

module.exports = function(config) {
  config.set({
    basePath: '../../',
    singleRun: true,
    browsers: ['PhantomJS'],
    frameworks: ['mocha'],
    reporters: ['spec'],
    plugins: [
      'karma-phantomjs-launcher',
      'karma-mocha',
      'karma-spec-reporter'
    ],
    color: true,
    autoWatch: true,
    files: [
      'bower_components/chai/chai.js',
      'node_modules/phantomjs-polyfill/bind-polyfill.js',
      'bower_components/lodash/dist/lodash.min.js',
      'bower_components/jquery/dist/jquery.min.js',
      'bower_components/lng-clockpicker/dist/jquery-clockpicker.min.js',
      'bower_components/moment/moment.js',
      'bower_components/sinon-1.15.4/index.js',
      'bower_components/sinon-chai/lib/sinon-chai.js',
      'bower_components/angular/angular.js',
      'bower_components/angular-moment/angular-moment.min.js',
      'bower_components/re-tree/re-tree.min.js',
      'bower_components/ng-device-detector/ng-device-detector.js',
      'bower_components/angular-mocks/angular-mocks.js',
      'lib/angular-clockpicker.js',

      // Tests
      'test/*.js'
    ]
  });
};
