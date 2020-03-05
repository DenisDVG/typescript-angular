/// <reference path='_all.ts' />

/**
 * The main TodoMVC app module.
 *
 * @type {angular.Module}
 */
module todos {
    'use strict';

    var todomvc = angular.module('todomvc', [])
            .controller('todoCtrl', TodoCtrl)
            .controller('todoMyCtrl', TodoMyCtrl)
            .directive('todoBlur', todoBlur)
            .directive('todoFocus', todoFocus)
            .directive('todoEscape', todoEscape)
            .service('todoStorage', TodoStorage);
}
