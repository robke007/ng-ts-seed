/**
 * Created by robbie on 8/21/2014.
 */

/// <reference path="reference.ts" />

declare var $, angular;

module NgTsSeed {
    var ngModule = angular.module('ad.ui.bookmarks', ['ad.ui.bootstrap', 'ad.ws.repair']);

//    bookmarks.provider('repairGridState', function repairGridStateProvider() {
//        this.initStates = function ($stateProvider, rootState = '') {
//            $stateProvider.
//                state((rootState ? rootState + '.' : '' ) + 'repair-grid', {
//                    url: '/repair/grid/car/:carId',
//                    templateUrl: 'partials/repairGrid.html',
//                    controller: 'repairgridCtrl'
//                })
//            ;
//        };
//        this.$get = [function () {
//            return null;
//        }];
//    });

    bookmarks.controller('bookmarksController', AD.UI.Bookmarks.Controller);
    AD.UI.Bookmarks.Directives.Init(bookmarks);

//    bookmarks.controller('repairgridCtrl', Controller);
}