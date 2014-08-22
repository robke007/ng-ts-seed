/// <reference path="../reference.ts" />

module NgTsSeed{
    export class Controller{

        static $inject: string[] = ['$scope', '$state', '$stateParams','$location','$q']
        constructor(private $scope, public $state, private $stateParams:any, private $location, public $q){

        }
    }
}