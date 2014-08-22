/**
 * Created by robbie on 8/21/2014.
 */

/// <reference path="reference.ts" />

declare var $, angular;

module NgTsSeed {
    var ngModule = angular.module('ad.ui.bookmarks', ['ad.ui.bootstrap', 'ad.ws.repair']);

    ngModule.controller('ngTsController', NgTsSeed.Controller);
    NgTsSeed.Directives.Init(ngModule);
}