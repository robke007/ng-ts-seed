/**
 * Created by robbie on 8/21/2014.
 */

/// <reference path="reference.ts" />

declare var $, angular;

module NgTsSeed {
    var ngApp = angular.module('app', ['ui.router','angularTypescriptApplication-templates']);

    ngApp.service('ShellService', NgTsSeed.ShellService);

    ngApp.config(['$stateProvider', '$urlRouterProvider',
        function($stateProvider, $urlRouterProvider) {
            $stateProvider.
                state(Strings.Routes.home, {url:'/home' ,templateUrl: 'home/partials/home.html'}).
                state(Strings.Routes.aboutUs, {url:'/aboutUs' ,templateUrl: 'aboutUs/partials/aboutUs.html'})
            $urlRouterProvider.otherwise("/home");
        }]);

    ngApp.controller('ShellController', NgTsSeed.ShellController);
    ShellDirectives.Init(ngApp);

//    bookmarks.controller('repairgridCtrl', Controller);
}