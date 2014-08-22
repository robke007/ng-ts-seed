/// <reference path="../reference.ts" />

module NgTsSeed{
    export class Directives{
        static Init(app: any){
            app.directive('customDirective',function(){
                return {
                    restrict: 'EAC',
                    templateUrl: 'partials/customDirective.html',
                    replace:true
                }
            });
        }
    }
}


