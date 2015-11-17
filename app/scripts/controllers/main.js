'use strict';

/**
 * @ngdoc function
 * @name apitilesApp.controller:MainCtrl
 * @description
 * # MainCtrl
 * Controller of the apitilesApp
 */
angular.module('apitilesApp')
  .controller('MainCtrl', function () {

      this.standartItems = [
          {sizeX: 2, sizeY: 1, row: 0, col: 0},
          {sizeX: 2, sizeY: 2, row: 0, col: 2},
          {sizeX: 2, sizeY: 1, row: 0, col: 4},
          {sizeX: 2, sizeY: 1, row: 0, col: 5}
      ]
  });
