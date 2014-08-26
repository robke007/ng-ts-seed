/**
 * Created by robbie on 8/26/2014.
 */
/// <reference path="../reference.ts" />

var context;

module NgTsSeed {
    export class ShellController {
        static $inject:string[] = ['$scope', '$rootScope', '$state', '$stateParams', '$location', 'ShellService']

        constructor(private $scope:any, private $rootScope, public $state:any, public $stateParams:any, private $location, public ShellService:NgTsSeed.ShellService) {
            var self = this;
            $scope.vm = self;
        }
    }
}