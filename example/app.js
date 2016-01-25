;(function () {
  'use strict';

  var app = angular.module('clockpicker.example', ['angular-clockpicker']);

  app.controller('dateCtrl', function($scope, moment){
    $scope.date = moment('2013-09-29 18:42');

    $scope.options = {
      done: 'Ok !!',
      twelvehour: true
    };

  });
})();
