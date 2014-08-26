/**
 * Created by robbie on 8/26/2014.
 */

/// <reference path="../reference.ts" />

declare var $, angular;
module NgTsSeed{
    export class ShellService{
        static $inject: string[] = ['$q', '$state', '$location', '$timeout', '$rootScope']
        constructor(public $q, public $state, public $location, public $timeout,  public $rootScope) {
        }

        goToAboutUs(){ this.$state.go(Strings.Routes.aboutUs); }
        goToHome(){ this.$state.go(Strings.Routes.home); }
    }
}